import { Component } from '@angular/core';
import { DeviceTest } from '../../../../pojo/DeviceTest';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { IonicPage, NavController, NavParams, Platform, App, LoadingController, ToastController } from 'ionic-angular';

declare var cordova: any;

/**
 *  * Generated class for the LpcMvhvInspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'daily-report',
  templateUrl: 'daily-report.html',
})
export class DailyMaintenanceReport {
  itemOri: any;
  fIndex: number;
  maIndex: number;
  ta0simcardip: string;
  ta0datacenter: string;
  simIndex: number;

  // Clone
  item: any;

  allocationType: string;
  public check: boolean = false;
  public validateField: boolean = true;
  public ceInspect: any;
  public pingInspect: any;
  public showMainMeter: boolean = false;

  // Hide/Show Variables
  private showMeter: boolean = true;
  private showComponentChange: boolean = true;
  private showNonComponentChange: boolean = true;
  private showRemarks: boolean = true;

  constructor(public navCtrl: NavController,
    public gf: GlobalFunction, public params: NavParams,
    public navParams: NavParams, public toastCtrl: ToastController,
    public platform: Platform, public appCtrl: App,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    public gv: GlobalVars,
    private jsonStore: JsonStoreCrudProvider) {
    this.item = this.navParams.data;

    this.itemOri = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");
    this.simIndex = this.params.get("simIndex");

    console.log("inside DailyMaintenanceReport");
    console.log("data : "+JSON.stringify(this.item));

    // Clone Data
    this.item = JSON.parse(JSON.stringify(this.itemOri));
    this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;

    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0simcardip) !== 'undefined') {
      this.ta0simcardip = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0simcardip;
    }

    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0datacenter) !== 'undefined') {
      this.ta0datacenter = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0datacenter
    }
    this.ceInspect = new DeviceTest();
    this.pingInspect = new DeviceTest();

    switch (this.allocationType) {
      case DeviceConstants.DEV_ALLOC_MAIN_METER:
      case DeviceConstants.DEV_ALLOC_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_SUB_METER:
      case DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER: {
        console.log("Main Meter Section...");
        this.showMainMeter = true;
        break;
      }

      case DeviceConstants.DEV_ALLOC_CHECK_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
        console.log("Check Meter Section...");
        this.showMainMeter = false;
        break;
      }
    }

    // Read ta0testdetail if exist
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
      console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
      // Get Total Length of Array
      //console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
      var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);

      for (var i = 0; i < testLength; i++) {
        var ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
        var type = ta0testdetail.ta0testtype;
        var applicable = ta0testdetail.ta0na;
        console.log("TYPE: " + type);
        switch (type) {
          case DeviceConstants.DATA_TESTING_CCNC: {
            this.ceInspect = ta0testdetail;

            break;
          }
          case DeviceConstants.DATA_TESTING_HTIE: {
            this.pingInspect = ta0testdetail;

            break;
          }
        }
      }
    }

  }

  saveDetails() {
    console.log("This section is to save details...");

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];

    // Default value from parent
    var assetnum = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
    var siteid = this.item.json.siteid;
    var wonum = this.item.wonum;

    this.ceInspect.assetnum = assetnum;
    this.ceInspect.siteid = siteid;
    this.ceInspect.wonum = wonum;
    this.ceInspect.ta0testtype = DeviceConstants.DATA_TESTING_CCNC;
    this.pingInspect.ta0testtype = DeviceConstants.DATA_TESTING_HTIE;

    // Push Data into JSON for Transformer Ratio Test
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.ceInspect);
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.pingInspect);

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0simcardip = this.ta0simcardip;
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0datacenter = this.ta0datacenter;

    if (typeof (this.simIndex) !== 'undefined') {
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simIndex].ta0simcardip = this.ta0simcardip;
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simIndex].ta0datacenter = this.ta0datacenter;
    }

    // Validate Test Status
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
    this.gf.startLoading();
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;

    this.item = JSON.parse(JSON.stringify(this.itemOri));

    /**
     * Reason   : Saving to local storage (json data).
     * Created  : 22-01-2019
     */
    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

    ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
    if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
      this.gf.warningAlert("Success", "CE Inspection locally updated.", "Dismiss");
      // Back to service-execution page.
      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      // newRootNav.push("ServiceExecutionPage", this.itemOri);
      this.gf.stopLoading();
    } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

      /**
       * Description: Change old(swift) to new(objective-c) plugin.
       * Edited: Alif (16.10.2019)
       * old --> mobilesignalswift.getSignalStrength
       * new --> cordova.plugins.MobileSignal.getSignalStrength
       */
      cordova.plugins.MobileSignal.getSignalStrength((data) => {
        if (this.gv.deviceSignal <= data) {
          //item, wonumVal, pageAction, feederCode, workOrderType) 
          var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
          var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
          var itemArray = [];
          itemArray[0] = (itemVal);
          this.dataService
            .saveRecordWithType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));
              // Copy clone back to original
              this.itemOri = JSON.parse(JSON.stringify(this.item));

              // Replace data into JSON local
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
              this.gf.warningAlert("Success", "CE Inspection save successfully.", "Cancel");

              // Back to service-execution page.
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("ServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
              this.gf.stopLoading();
            }).catch(error => {
              console.log('service failure : ' + error);
              this.gf.stopLoading();
            });
        } else {
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.warningAlert("Success", "CE Inspection locally updated.", "Cancel");
          // Back to service-execution page.
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("ServiceExecutionPage", this.itemOri);
          this.gf.stopLoading();
        }
      });

    } else {
      var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
      var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
      var itemArray = [];
      itemArray.push(itemVal);
      this.dataService
        .saveRecordWithType(itemVal, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
        .then(results => {
          console.log(' result + ' + JSON.stringify(results));

          var itemValNew = this.itemOri.json.ta0feeder[this.fIndex];
          let objfeeder = Object.assign({}, itemValNew);
          let itemValSingle = null;
          delete objfeeder['feederSetDesign'];
          itemValSingle = Object.assign({}, objfeeder);
          itemValSingle.multiassetlocci = [];

          for (let multi of objfeeder.multiassetlocci) {
            //let multiAssetVal = Object.assign({}, multi);
            if (typeof (multi.assetnum) !== 'undefined') { // || multi.ta0removeind || multi.ta0replaceind) {
              delete multi['ta0sealdetail'];
              delete multi['ta0stickerdetail'];
              delete multi['ta0testdetail'];
              multi.ta0feedercode = feederCode;
              multi.ta0feederdescription = this.item.json.ta0feeder[this.fIndex].description;
              itemValSingle.multiassetlocci.push(multi);
            }
          }

          for (var i = 0; i < this.itemOri.json.ta0feeder.length; i++) {
            if (i !== this.fIndex) {
              if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign) !== "undefined") {
                if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                  && typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined') {
                  var eMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                  var nMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

                  this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

                  let eMulti = this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex];
                  delete eMulti['ta0sealdetail'];
                  delete eMulti['ta0stickerdetail'];
                  delete eMulti['ta0testdetail'];

                  let nMulti = this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex];
                  delete nMulti['ta0sealdetail'];
                  delete nMulti['ta0stickerdetail'];
                  delete nMulti['ta0testdetail'];

                  itemValSingle.multiassetlocci.push(eMulti);
                  itemValSingle.multiassetlocci.push(nMulti);

                } else if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                  && typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) === 'undefined') {
                  var eMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

                  let eMulti = this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex];
                  delete eMulti['ta0sealdetail'];
                  delete eMulti['ta0stickerdetail'];
                  delete eMulti['ta0testdetail'];

                  itemValSingle.multiassetlocci.push(eMulti);
                } else if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined'
                  && typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) === 'undefined') {
                  var nMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                  this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

                  let nMulti = this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex];
                  delete nMulti['ta0sealdetail'];
                  delete nMulti['ta0stickerdetail'];
                  delete nMulti['ta0testdetail'];

                  itemValSingle.multiassetlocci.push(nMulti);
                }
              }
            }
          }
          console.log('  code : ' + feederCode);
          this.dataService
            .saveRecordWithNewType(itemValSingle, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_MULTIASSETLOCCI, feederCode, this.itemOri.json.worktype)
            .then(results => {
              console.log(' result + ' + JSON.stringify(results));

              // Copy clone back to original
              this.itemOri = JSON.parse(JSON.stringify(this.item));

              // Replace data into JSON local
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = false;
              this.gf.warningAlert("Success", "CE Inspection save successfully.", "Cancel");

              // Back to service-execution page.
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("ServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
              this.gf.stopLoading();
            }).then(error => {
              console.log('service failure : ' + error);
              this.gf.stopLoading();
            });
        }).catch(error => {
          console.log('service failure : ' + error);
          /** Because this loading off here make it loading dismiss early before navigate to main page. */
          if (error !== undefined) {
            this.gf.stopLoading();
          }
        });
    }
    // this.gf.displayToast('Data Save Successfully.');
    // this.navCtrl.pop();

    console.log("DATA: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CeInspectPage');
  }

  userInputType(event, key) {
    const RexExp = /(^[0-9.]+$)/;
    let newValue = event.target.value;
    let regExp = new RegExp(RexExp);
    var newVal2;
    var newValSlice;

    if (!regExp.test(newValue)) {
      newVal2 = newValue.substr(0, newValue.length - 1);
      event.target.value = newVal2;
      newValSlice = event.target.value;
    }
    else {
      newValSlice = event.target.value;
    }

    switch (key) {
      case 'IPData':
        this.ta0simcardip = newValSlice;
        break;
      case 'DataCenter':
        this.ta0datacenter = newValSlice;
        break;
    }
  }

  /*
  Created by Ameer 13/11/2018
  Allow user to enter number and char only 
  */
  userInput2(eventVal, key) {
    const RexExp = /^([A-Za-z 0-9]*)?$/;
    let newValue = eventVal.target.value;
    let regExp = new RegExp(RexExp);
    var newVal2;
    var newValSlice;

    if (!RexExp.test(newValue)) {
      newVal2 = newValue.substr(0, newValue.length - 1);
      eventVal.target.value = newVal2;
      newValSlice = eventVal.target.value;
    }
    else {
      newValSlice = eventVal.target.value;
    }

    switch (key) {
      case 'DataCenter':
        this.ta0datacenter = newValSlice;
        break;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  /**
  * Hide Show Meter Info Section
  * Created  : Alif
  * Date     : 26-11-2018
  * Edited   : 
  */
  showMeterSection(action) {
    if (this.showMeter === false) {
      this.showMeter = true;
    } else if (action === false) {
      this.showMeter = false;
    }
  }

  /**
  * Hide Show Component Change Section
  * Created  : Alif
  * Date     : 26-11-2018
  * Edited   : 
  */
  showComponentChangeSection(action) {
    if (this.showComponentChange === false) {
      this.showComponentChange = true;
    } else if (action === false) {
      this.showComponentChange = false;
    }
  }

  /**
  * Hide Show Non-Component Change Section
  * Created  : Alif
  * Date     : 26-11-2018
  * Edited   : 
  */
  showNonComponentChangeSection(action) {
    if (this.showNonComponentChange === false) {
      this.showNonComponentChange = true;
    } else if (action === false) {
      this.showNonComponentChange = false;
    }
  }

  /**
  * Hide Show Remarks Section
  * Created  : Alif
  * Date     : 26-11-2018
  * Edited   : 
  */
  showRemarksSection(action) {
    if (this.showRemarks === false) {
      this.showRemarks = true;
    } else if (action === false) {
      this.showRemarks = false;
    }
  }
}
