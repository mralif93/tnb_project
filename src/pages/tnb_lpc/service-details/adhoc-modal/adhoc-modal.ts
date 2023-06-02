import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { SoTypes } from '../../../../pojo/commonEnum/SoTypes';
import { Domains } from '../../../../pojo/commonEnum/Domains';
import { GlobalFunction } from '../../../../providers/common/global-function';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';


@IonicPage()
@Component({
  selector: 'page-adhoc-modal',
  templateUrl: 'adhoc-modal.html',
})
export class AdhocModalPage {

  private relatedrecord: any;
  private relatedrecordOri: any;
  private items: any;
  private itemsOri: any;
  private data: any;

  private orderType = [];
  private soList: any;
  private adhocValid: boolean = true;
  private ta0subordercreationflag: any;
  private passingCheck: boolean = false;
  private childWorkOrder: any = [];
  private showAdHocError: boolean = false;

  constructor(private viewCtrl: ViewController, private navCtrl: NavController, private navParams: NavParams,
    private jsonStoreCrud: JsonStoreCrudProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController,
    private globel: GlobalFunction, private dataService: DataServiceProvider, private gf: GlobalFunction) {

    /** Assigning Data from Previous Page */
    this.items = this.navParams.get("items");
    this.relatedrecord = this.items.json.relatedrecord;

    console.log(JSON.stringify(this.items));
    console.log(JSON.stringify(this.relatedrecord));

    /** Copy Clone into Original */
    this.relatedrecordOri = JSON.parse(JSON.stringify(this.relatedrecord));
    this.itemsOri = this.items;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdhocModalPage');

    // Getting List SO Type for Ad-Hoc..
    this.getListOfServiceOrderTypeAdHoc();
  }

  dismissModal() {
    this.itemsOri = this.items;
    this.viewCtrl.dismiss({ items: this.itemsOri });
  }

  /**
   * Description  : Method to filter and retrieve list of SN.
   * Created      : Alif (15.08.2019)
   */
  getListOfServiceOrderTypeAdHoc() {
    console.log("come to get list or service order type for ad-hoc replacement..");

    var adhocWorktype = this.adhocValidationCheck();

    //console.log("This section for Adhoc Replacement..");
    //console.log("Value: " + this.ta0subordercreationflag);
    this.ta0subordercreationflag = true;

    var parameter = [];

    if (adhocWorktype.length > 0) {
      if (adhocWorktype[0].ta0relatedrecworktype === SoTypes.ZISR) {
        parameter = [
          { $equal: [{ worktype: SoTypes.ZRCE }] }
        ];
      }
      else if (adhocWorktype[0].ta0relatedrecworktype === SoTypes.ZRCE) {
        parameter = [
          { $equal: [{ worktype: SoTypes.ZISR }] }
        ];
      }
    }
    else {
      parameter = [
        { $equal: [{ worktype: SoTypes.ZISR }] },
        { $equal: [{ worktype: SoTypes.ZRCE }] }
      ];
    }

    // retrieve data using query.
    this.jsonStoreCrud
      .getSearchRecordNoLimit_Device(Domains.SnCode, parameter)
      .then(result => {
        this.soList = result;
        //console.log("items records :: " + JSON.stringify(this.soList));
      });

    setTimeout(() => {
      if (this.soList.length > 0) {
        // Add Into the List OrderType
        for (let i = 0; i < this.soList.length; i++) {
          this.orderType.push({
            value: [this.soList[i].json.ta0sncode, this.soList[i].json.ta0sntype, this.soList[i].json.ta0sncodedesc, this.soList[i].json.worktype],
            label: this.soList[i].json.worktype + ' - ' + this.soList[i].json.ta0sncode + ' - ' + this.soList[i].json.ta0sncodedesc,
          });
        }
      }
    }, 1000);
  }

  /**
   * create by shankar
   * create date : 28/07/2018
   * Create button click action.
   * create follow up order in Maximo.
   */
  createAdhocFollowUp(index) {

    const confirm = this.alertCtrl.create({
      title: 'Confirmation ?',
      message: 'Do you agree to add adhoc, then you are not able to replace device ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {

            this.adhocValid = true;
            this.items.json.hasfollowupwork = true;

            let loading = this.loadingCtrl.create({ content: "Loading..." });
            loading.present();
            this.gf.loadingTimer(loading);

            setTimeout(() => {
              this;
              loading.onWillDismiss(() => {
                this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
                this.globel.displayToast("Record locally updated.");
                loading.dismiss();
              });
            }, 100000);

            var woDetails = JSON.parse(JSON.stringify(this.items.json.relatedrecord[index].followWoDetails));

            delete woDetails['docLinksL'];
            delete woDetails['ta0feeder'];
            delete woDetails['relatedrecord'];

            var resultContainer: any = [];
            resultContainer = this.adhocValidationCheck();
            var deviceDetailWonum = '';

            if (resultContainer.length > 0 && resultContainer.length < 2) {
              if (typeof (resultContainer[0].relatedrecwonum) !== 'undefined') {
                deviceDetailWonum = resultContainer[0].relatedrecwonum;
              }
            }

            debugger;
            this.dataService
              .createAdHocUsingChildDeviceDetails(woDetails, this.items.json.wonum, woDetails.siteid, deviceDetailWonum, 'adhocCe', this.items.json.worktype, this.items.json.relatedrecord[index].ta0wolo10)
              .then(results => {

                let res: any;
                res = results;
                if (resultContainer.length > 0 && resultContainer[0].ta0wolo10 === 0) {

                  var querypart = [];
                  querypart = [{ "$equal": [{ "wonum": deviceDetailWonum }] }];
                  this.jsonStoreCrud.getRecordsAssetDetails(Domains.LPCWORKORDER, querypart).then((result) => {
                    this.passingCheck = true;
                    this.childWorkOrder = result;
                    if (this.childWorkOrder.length > 0) {
                      this.childWorkOrder[0].json.wolo1 = deviceDetailWonum;
                      if (this.jsonStoreCrud.replaceWO(this.childWorkOrder[0], "LPCWORKORDER", false)) {
                        this.resultChanges(res, loading, index);
                      }
                    }
                    else {
                      this.resultChanges(res, loading, index);
                    }
                  });
                }
                else {

                  this.resultChanges(res, loading, index);
                }
                this.adhocValidationCheck();
              }).then(error => {
                console.log('error : ' + error);
              });
          }
        }
      ]
    });
    confirm.present();
  }

  adhocValidationCheck() {

    var validCount = 0;
    var sncode: any = [];
    if (typeof (this.items.json.relatedrecord) !== 'undefined' && this.items.json.relatedrecord !== null) {

      // var resultData = this.getNotObjects(this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL')
      for (var i = 0; i < this.items.json.relatedrecord.length; i++) {

        if (this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {

          if ((typeof (this.items.json.relatedrecord[i].relatedrecwonum) !== 'undefined')) {

            sncode[validCount] = this.items.json.relatedrecord[i];
            validCount++;
          }
        }
      }
      if (validCount === 0) {
        this.passingCheck = false;
        this.adhocValid = true;
        return sncode;
      }
      else if (validCount === 1) {
        this.passingCheck = true;
        sncode[0].ta0wolo10 = 0;
        this.adhocValid = true;
        return sncode;
      }
      else if (validCount === 2) {
        this.passingCheck = true;
        if (sncode[0].relatedrecwonum < sncode[1].relatedrecwonum) {
          sncode[0].ta0wolo10 = 0;
          sncode[1].ta0wolo10 = 1;
        }
        else {
          sncode[0].ta0wolo10 = 1;
          sncode[1].ta0wolo10 = 0;
        }
        this.adhocValid = false;
        return sncode;
      }
      else {
        sncode = [];
        this.adhocValid = false;
        return sncode;
      }
    } else {
      sncode = [];
      this.adhocValid = true;
      return sncode;
    }
  }

  resultChanges(res, loading, index) {

    if (res.processStatus === 'success') {

      delete this.items.json.relatedrecord[index]['followWoDetails'];
      this.showAdHocError = true;
      this.items.json.relatedrecord[index].relatedrecwonum = res.respObject;
      this.items.json.relatedrecord[index].ta0relatedrecstatus = "INPRG";
      this.itemsOri = JSON.parse(JSON.stringify(this.items));
      this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
      this.gf.warningAlert('Success', res.description, 'Close');
      loading.dismiss();
    }
    else {

      // this.gf.warningAlert('Record locally updated.', res.description, 'Close');
      let alert = this.alertCtrl.create({
        title: 'Record locally updated',
        message: res.description,
        buttons: [
          {
            text: 'Close',
            role: 'Close',
            handler: () => {
              this.items.json.relatedrecord.splice(this.items.json.relatedrecord.length - 1, 1);
              this.jsonStoreCrud.replaceWO(this.items, "LPCWORKORDER", true);
              loading.dismiss();
            }
          }
        ]
      });
      alert.present();
    }
  }

}
