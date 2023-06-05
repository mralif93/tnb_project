import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, BlockerDelegate, App, AlertController } from 'ionic-angular';

import { SealInfo } from "./../../../../pojo/SealInfo";
import { StickerInfo } from "./../../../../pojo/StickerInfo";
import { DeviceConstants } from "../../../../pojo/commonEnum/DeviceConstants";
import { FunctionClass } from '../../../../pojo/commonEnum/FunctionClass';
import { empty } from 'rxjs/Observer';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { unescapeIdentifier } from '@angular/compiler';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from '../../../../providers/common/json-store/json-store-crud';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { Domains } from '../../../../pojo/commonEnum/Domains';
import { DataStoreProvider } from '../../../../providers/data-store/data-store';

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

/**
 * Generated class for the SealCtSilInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-ct-sil-info',
  templateUrl: 'seal-ct-sil-info.html',
})
export class SealCtSilInfoPage {
  // Declare Variables for Params
  item: any;
  fIndex: number;
  maIndex: number;
  alloType: string;
  versionType: string;
  deviceVoltage: any;
  showMainMeter: boolean = false;
  showLvFields: boolean = false;
  showLvExtraFields: boolean = false;
  showMvHvFields: boolean = false;
  showOpcFields: boolean = false;

  // Clone Data
  itemOri: any;

  // Validation
  validateInput: boolean = true;
  check: boolean = true;

  // CR002 Crimpless Seal
  sc: any;
  rr: any;
  terminalCtRedArray = [];
  terminalCtYellowArray = [];
  terminalCtBlueArray = [];
  
  constructor(public navCtrl: NavController, public params: NavParams, public toastCtrl: ToastController,
    public gf: GlobalFunction, private dataService: DataServiceProvider, private jsonStore: JsonStoreCrudProvider,
    public loadingCtrl: LoadingController, private gv: GlobalVars,
    private barcodeScanner: BarcodeScanner, private alertCtrl: AlertController,
    private toast: Toast, public appCtrl: App,
    private ds: DataStoreProvider) {

    this.itemOri = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");
    this.alloType = this.params.get("alloType");
    this.versionType = this.params.get("versionType");
    this.deviceVoltage = this.params.get("deviceVoltage");

    // Clone data
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    // Fetch Data
    this.loadlookup();

    // Existing Section
    if ('E' === this.versionType) {
      if (this.deviceVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(LV): " + this.versionType + "  : " + this.item.json.ta0installationvoltage);
        this.showLvFields = true;
      } else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(MVHV): " + this.versionType + "  : " + this.item.json.ta0installationvoltage);
        this.showMvHvFields = true;
      } else {
        this.showOpcFields = true;
      } 
      
    } else {
      if (this.deviceVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(LV): " + this.versionType + "  : " + this.item.json.ta0newvoltage);
        this.showLvFields = true;
      }
      else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(MVHV): " + this.versionType + "  : " + this.item.json.ta0newvoltage);
        this.showMvHvFields = true;
      } else {
        this.showOpcFields = true;
      }
    }
    
    // Search ta0sealdetail > ta0seallocation to define R/Y/B
    // Define Object
    var terminalCtRedVal = new SealInfo();
    terminalCtRedVal.ta0seallocation = "TERMINAL_CT_RED";
    terminalCtRedVal.ta0sealnum = null;
    terminalCtRedVal.ta0newsealnum = null;
    terminalCtRedVal.ta0sealcondition = null;
    terminalCtRedVal.ta0removeind = null;
    this.terminalCtRedArray[0] = terminalCtRedVal;

    var terminalCtYellowVal = new SealInfo();
    terminalCtYellowVal.ta0seallocation = "TERMINAL_CT_YELLOW";
    terminalCtYellowVal.ta0sealnum = null;
    terminalCtYellowVal.ta0newsealnum = null;
    terminalCtYellowVal.ta0sealcondition = null;
    terminalCtYellowVal.ta0removeind = null;
    this.terminalCtYellowArray[0] = terminalCtYellowVal;

    var terminalCtBlueVal = new SealInfo();
    terminalCtBlueVal.ta0seallocation = "TERMINAL_CT_BLUE";
    terminalCtBlueVal.ta0sealnum = null;
    terminalCtBlueVal.ta0newsealnum = null;
    terminalCtBlueVal.ta0sealcondition = null;
    terminalCtBlueVal.ta0removeind = null;
    this.terminalCtBlueArray[0] = terminalCtBlueVal;

    // Read ta0detail if exist
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail) != 'undefined' &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== "" &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== null) {

      var seal_length = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
      var tcRCount = 0;
      var tcYCount = 0;
      var tcBCount = 0;
      var tcCount = 0;

      for (var i = 0; i < seal_length; i++) {
        var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i];
        var ta0seallocation = ta0sealdetail.ta0seallocation;
        let ta0installind = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i].ta0installind;
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i].ta0installind = ta0installind === 'true'

        if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_RED) && ta0sealdetail.ta0existingseal == true) {         
          terminalCtRedVal = ta0sealdetail;
          this.terminalCtRedArray[tcCount] = terminalCtRedVal;
          tcRCount++;

          // Clear others
          this.terminalCtYellowArray = [];
          this.terminalCtBlueArray = [];
          break;
        }
        else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_YELLOW) && ta0sealdetail.ta0existingseal == true) {        
          terminalCtYellowVal = ta0sealdetail;
          this.terminalCtYellowArray[tcCount] = terminalCtYellowVal;
          tcYCount++;

          // Clear others
          this.terminalCtRedArray = [];
          this.terminalCtBlueArray = [];
          break;
        }
        else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_BLUE) && ta0sealdetail.ta0existingseal == true) {          
          terminalCtBlueVal = ta0sealdetail;
          this.terminalCtBlueArray[tcCount] = terminalCtBlueVal;
          tcBCount++;

          // Clear others
          this.terminalCtRedArray = [];
          this.terminalCtYellowArray = [];
          break;
        }

        switch (this.showLvFields) {
          case true: {
            if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_RED) && ta0sealdetail.ta0existingseal == true) {
              terminalCtRedVal = ta0sealdetail;
              this.terminalCtRedArray[tcCount] = terminalCtRedVal;
              tcRCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_YELLOW) && ta0sealdetail.ta0existingseal == true) {
              terminalCtYellowVal = ta0sealdetail;
              this.terminalCtYellowArray[tcCount] = terminalCtYellowVal;
              tcYCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_BLUE) && ta0sealdetail.ta0existingseal == true) {
              terminalCtBlueVal = ta0sealdetail;
              this.terminalCtBlueArray[tcCount] = terminalCtBlueVal;
              tcBCount++;
            }
            break;
          }
        }

        // Sorting Seal
        this.terminalCtRedArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.terminalCtYellowArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.terminalCtBlueArray.sort(this.dynamicSort("ta0stickerlocation"));
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealCtSilInfoPage');
  }

  /**
   * Reason   : Method to call promise to loadlookup data.
   * Created  : 05/06/2023
   */
  loadlookup() {
    // CR002 Removal Reason
    this.getAlnDomainData("sealcondition").then((success) => {
      console.log(" >>> successfully fetch data >> sealcondition");
    });
    this.getAlnDomainData("removalreason").then((success) => {
      console.log(" >>> successfully fetch data >> removalreason");
    });
  }

  /**
   * Reason   : Method to call promise to get data.
   * Created  : 05/06/2023
   */
  getAlnDomainData(inputType) {
    var queryPart: any;

    if (typeof (inputType) !== "undefined") {
      // CR002 Crimpless Seal
      if (inputType === "sealcondition") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SC);
      } else if (inputType === "removalreason") {                                         
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0SEALREMREASON);
      }
    }
    
    return new Promise<void>((resolve, reject) => {
      this.jsonStore
        .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
        .then(result => {
          if (inputType === "sealcondition") {
            this.sc = result;
          } else if (inputType === "removalreason") {   // CR002 Crimpless Seal
            this.rr = result;                           // CR002 Crimpless Seal
          }
          resolve();
        }).catch(error => {
          console.log('service failure : ' + error);
          reject();
        });
    });
  }

  /**
   * Reason   : Method to dynamic sorting.
   * Created  : 05/06/2023
   */
  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  /**
   * Reason   : Method to reset fields.
   * Created  : 05/06/2023
   */
  resetSealSection() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you agree to clear all Seal Section ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            confirm.dismiss();
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.terminalCtRedArray = []
            var terminalCtRedVal = new SealInfo();
            terminalCtRedVal.ta0seallocation = "TERMINAL_CT_RED";
            terminalCtRedVal.ta0sealnum = null;
            terminalCtRedVal.ta0newsealnum = null;
            terminalCtRedVal.ta0sealcondition = null;
            this.terminalCtRedArray[0] = terminalCtRedVal;

            this.terminalCtYellowArray = []
            var terminalCtYellowVal = new SealInfo();
            terminalCtYellowVal.ta0seallocation = "TERMINAL_CT_YELLOW";
            terminalCtYellowVal.ta0sealnum = null;
            terminalCtYellowVal.ta0newsealnum = null;
            terminalCtYellowVal.ta0sealcondition = null;
            this.terminalCtYellowArray[0] = terminalCtYellowVal;

            this.terminalCtBlueArray = []
            var terminalCtBlueVal = new SealInfo();
            terminalCtBlueVal.ta0seallocation = "TERMINAL_CT_BLUE";
            terminalCtBlueVal.ta0sealnum = null;
            terminalCtBlueVal.ta0newsealnum = null;
            terminalCtBlueVal.ta0sealcondition = null;
            this.terminalCtBlueArray[0] = terminalCtBlueVal;
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * Reason   : Method to save data.
   * Created  : 05/06/2023
   */
  saveCtSealDetails(){
    console.log(">>>> enter to save >>> ct sil details >>>");
    let string: boolean = true
    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];

    console.log(">>>> get standard data to save >>> ct sil details >>>");
    // Default value from parent
    var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
    var orgid = this.itemOri.json.ta0feeder[this.fIndex].orgid;
    var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.json.wonum;

    console.log(">>>> get ct red data to save >>> ct sil details >>>");
    if (this.terminalCtRedArray.length > 0) {
      if ((this.terminalCtRedArray[0].ta0sealnum != null || this.terminalCtRedArray[0].ta0sealnum != undefined) || this.terminalCtRedArray[0].ta0newsealnum != null || this.terminalCtRedArray[0].ta0newsealnum != undefined) {
        for (var i = 0; i < this.terminalCtRedArray.length; i++) {
          this.terminalCtRedArray[i].assetnum = assetnum;
          this.terminalCtRedArray[i].orgid = orgid;
          this.terminalCtRedArray[i].siteid = siteid;
          this.terminalCtRedArray[i].wonum = wonum;
          this.terminalCtRedArray[i].ta0installind = this.terminalCtRedArray[i].ta0installind ? this.terminalCtRedArray[i].ta0installind : string;
          this.terminalCtRedArray[i].ta0seallocation = FunctionClass.TERMINAL_CT_RED;
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtRedArray[i]);
        }
      }
    }

    console.log(">>>> get ct yellow data to save >>> ct sil details >>>");
    if (this.terminalCtYellowArray.length > 0) {
      if ((this.terminalCtYellowArray[0].ta0sealnum != null || this.terminalCtYellowArray[0].ta0sealnum != undefined) || this.terminalCtYellowArray[0].ta0newsealnum != null || this.terminalCtYellowArray[0].ta0newsealnum != undefined) {
        for (var i = 0; i < this.terminalCtYellowArray.length; i++) {
          this.terminalCtYellowArray[i].assetnum = assetnum;
          this.terminalCtYellowArray[i].orgid = orgid;
          this.terminalCtYellowArray[i].siteid = siteid;
          this.terminalCtYellowArray[i].wonum = wonum;
          this.terminalCtYellowArray[i].ta0installind = this.terminalCtYellowArray[i].ta0installind ? this.terminalCtYellowArray[i].ta0installind : string;
          this.terminalCtYellowArray[i].ta0seallocation = "TERMINAL_CT_YELLOW";
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtYellowArray[i]);
        }
      }
    }

    console.log(">>>> get ct blue data to save >>> ct sil details >>>");
    if (this.terminalCtBlueArray.length > 0) {
      if ((this.terminalCtBlueArray[0].ta0sealnum != null || this.terminalCtBlueArray[0].ta0sealnum != undefined) || this.terminalCtBlueArray[0].ta0newsealnum != null || this.terminalCtBlueArray[0].ta0newsealnum != undefined) {
        for (var i = 0; i < this.terminalCtBlueArray.length; i++) {
          this.terminalCtBlueArray[i].assetnum = assetnum;
          this.terminalCtBlueArray[i].orgid = orgid;
          this.terminalCtBlueArray[i].siteid = siteid;
          this.terminalCtBlueArray[i].wonum = wonum;
          this.terminalCtBlueArray[i].ta0installind = this.terminalCtBlueArray[i].ta0installind ? this.terminalCtBlueArray[i].ta0installind : string;
          this.terminalCtBlueArray[i].ta0seallocation = "TERMINAL_CT_BLUE";
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtBlueArray[i]);
        }
      }
    }
 
     setTimeout(() => {
       loading.onWillDismiss(() => {
         console.log("this.itemOri : " + JSON.stringify(this.itemOri));
         this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
         this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
         this.gf.displayToast("CT Sil Details updated.");
         loading.dismiss();
       });
     }, 10000);

     this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

     if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
       this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
       this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
       this.gf.displayToast("CT Sil Details updated locally.");
       loading.dismiss();
       /** Sending latest data.. (alif) - (29.12.2018)*/
       // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
       // newRootNav.push("SealServiceExecutionPage", this.itemOri);
     } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
 
       cordova.plugins.MobileSignal.getSignalStrength((data) => {
         if (this.gv.deviceSignal <= data) {
           var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
           this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0silstickerstatus = 'Y';
           var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
           var itemArray = [];
           itemArray.push(itemVal);
           this.dataService
             .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
             .then(results => {
               console.log(' result + ' + JSON.stringify(results));
               this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
               this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0silStickers_haveChange = false;
 
               /** convert string into json */
               var resultDes = JSON.parse(results.toString());
               debugger;
               if (resultDes.processStatus === "failure") {
                 resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                 // Remove double quote+words not working..
                 resultDes.description.replace(/"/g, '');
 
                 var split = resultDes.description.split(":");
                 var result = split[1].substr(0, split[1].length - 1);
                 var NewResult = result.substring(2);
                 /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                 var result2 = resultDes.description.match(patt2);
                 var stringArry = result2.toString();
                 */
                 // var result = resultDes.description.slice(0, 34);
                 resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                 this.gf.displayToast(NewResult);
               } else {
                 this.gf.warningAlert('Success', 'CT Sil Details save successfully.', 'Close');
                 /** Sending latest data.. (alif) - (29.12.2018)*/
                 // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                 // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                 this.navCtrl.pop();
               }
               loading.dismiss();
 
             }).catch(error => {
               console.log('service failure : ' + error);
               this.gf.warningAlert('Error', 'CT Sil Details failed to save.', 'Close');
               loading.dismiss();
             });
         } else {
           this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
           this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
           this.gf.displayToast("CT Sil Details updated locally.");
           this.navCtrl.pop();
           loading.dismiss();
           /** Sending latest data.. (alif) - (29.12.2018)*/
           // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
           // newRootNav.push("SealServiceExecutionPage", this.itemOri);
         }
       });

     } else {
       var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
       this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0silstickerstatus = 'Y';
       var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
       var itemArray = [];
 
       delete itemVal['ta0registerdetail'];
       delete itemVal['ta0testdetail'];
 
       itemArray.push(itemVal);
       this.dataService
         .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
         .then(results => {
           this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
           this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0silStickers_haveChange = false;
 
           /** convert string into json */
           var resultDes = JSON.parse(results.toString());
           debugger;
           if (resultDes.processStatus === "failure") {
             resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
             // Remove double quote+words not working..
             resultDes.description.replace(/"/g, '');
 
             var split = resultDes.description.split(":");
             var result = split[1].substr(0, split[1].length - 1);
             var NewResult = result.substring(2);
             /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
             var result2 = resultDes.description.match(patt2);
             var stringArry = result2.toString();
             */
             // var result = resultDes.description.slice(0, 34);
             resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
             this.gf.displayToast(NewResult);
           } else {
             this.gf.warningAlert('Success', 'CT Sil Details save successfully.', 'Close');
             // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
             // newRootNav.push("SealServiceExecutionPage", this.itemOri);
             this.navCtrl.pop();
           }
           loading.dismiss();
 
         }).catch(error => {
           this.gf.stopLoading();
           loading.dismiss();
         });
     }
  }

}