import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { GlobalFunction } from '../../../../providers/common/global-function';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreStructureProvider } from '../../../../providers/common/json-store/json-store-structure';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { Domains } from '../../../../pojo/commonEnum/Domains';

declare var cordova: any;
declare let mobilesignalswift;

/**
 * Generated class for the SealSweepListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-sweep-list',
  templateUrl: 'seal-sweep-list.html',
  providers: [DatePipe]
})
export class SealSweepListPage {

  // Declare Variables
  options: BarcodeScannerOptions;
  worktypeList: any;
  querypart: any;
  workorderlist: any;
  workorders202: any;
  workorders: any;
  currentDate: any = new Date();
  items: any;
  itemsOri: any;

  constructor(
    private alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private datePipe: DatePipe,
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataService: DataServiceProvider,
    public jsonStoreStructure: JsonStoreStructureProvider,
    public jsonStoreCrud: JsonStoreCrudProvider,
    public loadingCtrl: LoadingController,
    public appCtrl: App,
    public gv: GlobalVars,
    public gf: GlobalFunction
  ) {
    // fetch work order
    this.fetchWorkOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealSweepListPage');
  }

  fetchWorkOrder() {
    if (this.gv.departContent === 'seal') {
      this.worktypeList = [
        'ZISO',
        'ZISP',
        'ZIST',
        'ZDCN',
        'ZRCN',
        'ALL'
      ];
    }

    this.querypart = WL.JSONStore.QueryPart().inside("worktype", this.worktypeList);
    this.jsonStoreCrud.getSearchRecordNoLimit(Domains.LPCWORKORDER, this.querypart).then(result => {
      this.workorderlist = result;
      // console.log(">> WorkOrderList >> " + this.workorderlist);

      // filter out other SO (only S202)
      this.workorders202 = this.workorderlist.filter(x => x.json.ta0sncode == 'S202');
      // console.log(">> WorkOrderS202 >> " + JSON.stringify(this.workorders202));

      // fetch service details
      if (this.workorders202.length > 0) {
        this.workorders = [];
        for (var k = 0; k < this.workorders202.length; k++) {
          this.dataService.fetchWorkOrderFeederDetails(Domains.DATA_FETCH_ASSIGNWORK, this.workorders202[k].json.wonum).then((result) => {
            let respResult: any = result;
            let fullItems: any = JSON.parse(respResult.respObject);
            this.workorders202[k].json.ta0feeder = [];
            this.workorders202[k].json.ta0feeder = fullItems.workOrder[0].ta0feeder;
            this.workorders.push(this.workorders202[k]);
          });
        }
        console.log(">> WorkOrders >> " + JSON.stringify(this.workorders));
      } else {
        this.gf.displayToast('There are no record found..');
      }
    });
  }

  updateWorkOrder() {
    if (this.workorders202.length > 0) {
      console.log(JSON.stringify(this.workorders202[0]));

      // set current date and status to INPRG
      // = this.currentDate;
      // this.json.ta0wouserstatus.push('INPRG');
      // save to server
      this.saveWO('', '', '');
    }
    // update actstart (actstart)
    // update actfinish (wol4)
    // update user status (MSOK)
    this.gf.displayToast('Update WorkOrder.. Total: ' + this.workorders.length);
  }

  submitWorkOrder() {
    // update SO status (PENDTECO)
    this.gf.displayToast('Submit WorkOrder.. Total: ' + this.workorders.length);
  }

  saveWO(items, status, page) {
    // show loading
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    /** Copy Clone into Original */
    this.itemsOri = JSON.parse(JSON.stringify(items));
      
    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
      this.gf.displayToast("Record locally updated.");
      loading.dismiss();
    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
      cordova.plugins.MobileSignal.getSignalStrength((data) => {
        if (this.gv.deviceSignal <= data) {
          let itemVal = this.itemsOri;
          //let feederVal = ta0feederList;
          let objCopy = JSON.parse(JSON.stringify(itemVal));
          //console.log(objCopy);
          delete objCopy.json['ta0feeder'];
          //console.log('test feeder val : ' + JSON.stringify(objCopy));
          this.dataService
            .changeStatus(status, this.itemsOri.json.wonum, objCopy, page)
            .then(results => {
              //console.log(JSON.stringify(results));
              let res: any;
              res = results;
              if (res.processStatus === 'success') {
                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
                this.gf.warningAlert("Success", res.description, "Close");
                loading.dismiss();
              } else {
                // this.itemsOri.json.status = 'INPRG';
                // this.woStatus = 'INPRG';
                this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                this.gf.warningAlert("Failure ", res.description, "Close");
                loading.dismiss();
              }

            }).catch(error => {
              //console.log('error : ' + error);
            });
        } else {
          this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
          this.gf.displayToast("Record locally updated.");
          loading.dismiss();
        }
      });
    } else {
      let itemVal = this.itemsOri;
      //let feederVal = ta0feederList;
      let objCopy = JSON.parse(JSON.stringify(itemVal));
      //console.log(objCopy);
      delete objCopy.json['ta0feeder'];
      //console.log('test feeder val : ' + JSON.stringify(objCopy));
      //feederVal.multiassetlocci.remove();
      console.log("this.dataService.changeStatus 2");
      //console.log("objCopy objCopy : "+JSON.stringify(objCopy));
      this.dataService
        .changeStatus(status, this.itemsOri.json.wonum, objCopy, page)
        .then(results => {
          //console.log(JSON.stringify(results));
          let res: any;
          res = results;
          if (res.processStatus === 'success') {
            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
            this.gf.warningAlert("Success ", res.description, "Close");
            loading.dismiss();
          } else {
            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
            this.gf.warningAlert("Failure ", res.description, "Close");
            loading.dismiss();
          }
        }).catch(error => {
          //console.log('error : ' + error);
        });
    }
  }
}
