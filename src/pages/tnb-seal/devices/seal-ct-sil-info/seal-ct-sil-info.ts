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

  refSegment: String = "before";
  segmentSection: boolean = false;
  disableBefore: boolean = false;
  disableAfter: boolean = false;

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
  nTerminalCtRedArray = [];
  nTerminalCtYellowArray = [];
  nTerminalCtBlueArray = [];
  nTerminalCTArray = [];
  terminalCTArray = [];

  public options: BarcodeScannerOptions;

  CTType: string;
  newCTType: string;
  allowSave: boolean = true;
  
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

    console.log("itemOri : ",JSON.stringify(this.itemOri));
    console.log("fIndex : "+this.fIndex);
    console.log("maIndex : "+this.maIndex);
    console.log("alloType : "+this.alloType);
    console.log("versionType : "+this.versionType);
    console.log("deviceVoltage : "+this.deviceVoltage);    

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
    // var terminalCtRedVal = new SealInfo();
    // terminalCtRedVal.ta0seallocation = FunctionClass.TERMINAL_CT_RED;
    // terminalCtRedVal.ta0sealnum = null;
    // terminalCtRedVal.ta0newsealnum = null;
    // terminalCtRedVal.ta0sealcondition = null;
    // terminalCtRedVal.ta0removeind = null;
    // this.terminalCtRedArray[0] = terminalCtRedVal;

    // var terminalCtYellowVal = new SealInfo();
    // terminalCtYellowVal.ta0seallocation = FunctionClass.TERMINAL_CT_YELLOW;
    // terminalCtYellowVal.ta0sealnum = null;
    // terminalCtYellowVal.ta0newsealnum = null;
    // terminalCtYellowVal.ta0sealcondition = null;
    // terminalCtYellowVal.ta0removeind = null;
    // this.terminalCtYellowArray[0] = terminalCtYellowVal;

    // var terminalCtBlueVal = new SealInfo();
    // terminalCtBlueVal.ta0seallocation = FunctionClass.TERMINAL_CT_BLUE;
    // terminalCtBlueVal.ta0sealnum = null;
    // terminalCtBlueVal.ta0newsealnum = null;
    // terminalCtBlueVal.ta0sealcondition = null;
    // terminalCtBlueVal.ta0removeind = null;
    // this.terminalCtBlueArray[0] = terminalCtBlueVal;

    // var nTerminalCtRedVal = new SealInfo();
    // nTerminalCtRedVal.ta0seallocation = FunctionClass.TERMINAL_CT_RED;
    // nTerminalCtRedVal.ta0installind = true;
    // nTerminalCtRedVal.devicelocind = false;
    // nTerminalCtRedVal.devicecategory = null;
    // nTerminalCtRedVal.serialnum = null;
    // nTerminalCtRedVal.ta0sealindicator = 'N';
    // this.nTerminalCtRedArray[0] = nTerminalCtRedVal;

    // var nTerminalCtYellowVal = new SealInfo();
    // nTerminalCtYellowVal.ta0seallocation = FunctionClass.TERMINAL_CT_YELLOW;
    // nTerminalCtYellowVal.ta0installind = true;
    // nTerminalCtYellowVal.devicelocind = false;
    // nTerminalCtYellowVal.devicecategory = null;
    // nTerminalCtYellowVal.serialnum = null;
    // nTerminalCtYellowVal.ta0sealindicator = 'N';
    // this.nTerminalCtYellowArray[0] = nTerminalCtYellowVal;

    // var nTerminalCtBlueVal = new SealInfo();
    // nTerminalCtBlueVal.ta0seallocation = FunctionClass.TERMINAL_CT_BLUE;
    // nTerminalCtBlueVal.ta0installind = true;
    // nTerminalCtBlueVal.devicelocind = false;
    // nTerminalCtBlueVal.devicecategory = null;
    // nTerminalCtBlueVal.serialnum = null;
    // nTerminalCtBlueVal.ta0sealindicator = 'N';
    // this.nTerminalCtBlueArray[0] = nTerminalCtBlueVal;

    var terminalCTVal = new SealInfo();    
    terminalCTVal.ta0sealnum = null;
    terminalCTVal.ta0newsealnum = null;
    terminalCTVal.ta0sealcondition = null;
    terminalCTVal.ta0removeind = null;
    terminalCTVal.ta0existingseal = true;
    this.terminalCTArray[0] = terminalCTVal;

    var nTerminalCTVal = new SealInfo();  
    nTerminalCTVal.ta0installind = true;
    nTerminalCTVal.devicelocind = false;
    nTerminalCTVal.devicecategory = null;
    nTerminalCTVal.serialnum = null;
    nTerminalCTVal.ta0existingseal = false;
    nTerminalCTVal.ta0sealindicator = 'N';
    nTerminalCTVal.ta0installind = true;

    this.nTerminalCTArray[0] = nTerminalCTVal;
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

        if(ta0sealdetail.ta0existingseal == true) {
          if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_RED)){
            this.CTType = 'red';
          } else if(ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_YELLOW)){
            this.CTType = 'yellow';
          } else if(ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_BLUE)){
            this.CTType = 'blue';
          }
          if(this.CTType !== undefined && this.CTType !== null) {
            this.newCTType = this.CTType;
          }   
          terminalCTVal = ta0sealdetail;
          this.terminalCTArray[0] = terminalCTVal;          
        }
        if (ta0sealdetail.ta0existingseal == false) {         
          if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_RED)){
            this.newCTType = 'red';
          } else if(ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_YELLOW)){
            this.newCTType = 'yellow';
          } else if(ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_BLUE)){
            this.newCTType = 'blue';
          }
          nTerminalCTVal = ta0sealdetail;                
          this.nTerminalCTArray[0] = nTerminalCTVal;          
        }
        console.log("New CT : "+JSON.stringify(this.terminalCTArray));
        console.log("Existing CT : "+JSON.stringify(this.nTerminalCTArray));
        
        
      }
    } else {
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];      
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(terminalCTVal);
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(nTerminalCTVal);

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealCtSilInfoPage');
  }

  goBack() {
    this.navCtrl.pop();
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
  async saveCtSealDetails(){
    debugger;
    console.log(">>>> enter to save >>> ct sil details >>>");
    let string: boolean = true
    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);
    if (this.refSegment == 'before') {
      if(this.terminalCTArray[0].ta0sealnum === null || this.terminalCTArray[0].ta0sealnum === '' ){
        loading.dismiss();
        this.gf.warningAlert('Warning', 'Nothing to update !', 'Close');  
        this.allowSave = false;
      }else{
        this.allowSave = true;
      }
    } 
    if(this.allowSave == true){
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];

      console.log(">>>> get standard data to save >>> ct sil details >>>");
      // Default value from parent
      var ta0serialnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0serialnum;
      var ta0devicecategory = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicecategory;
      var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
      var olddeviceassetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0olddeviceserialnum;
      var orgid = this.itemOri.json.ta0feeder[this.fIndex].orgid;
      var siteid = this.itemOri.json.siteid;
      var wonum = this.itemOri.json.wonum;

      let validateSeal = this.gv.validateDBSeal;
      let fakeSealNum: string = '';
      var saveFlag: Boolean = true;

      console.log("validateSeal : "+validateSeal);
      console.log("olddeviceassetnum : "+olddeviceassetnum);
      console.log("assetnum : "+assetnum);      
      if(validateSeal){
        //validate against database
        if (this.nTerminalCTArray.length > 0) {
          if (this.nTerminalCTArray[0].ta0sealnum !== null && this.nTerminalCTArray[0].ta0sealnum !== undefined && this.nTerminalCTArray[0].ta0sealnum !== '') {
            //Validate against SQLite
            await this.ds.queryCrimplessData(this.nTerminalCTArray[0].ta0sealnum).then((response) => {
              console.log(JSON.stringify(response));
              let result = JSON.parse(JSON.stringify(response));
              if(result.statusCode === 'E') {
                fakeSealNum = this.nTerminalCTArray[0].ta0sealnum;
                saveFlag = false;
              }         
            });
          }
        }
      }
      if(validateSeal === true && saveFlag === false) {
        loading.dismiss();
        this.gf.warningAlert('Warning', 'Invalid seal number '+fakeSealNum+' found!', 'Close');   
        return;
  
      } else {
        if (this.terminalCTArray.length > 0) {
          if ((this.terminalCTArray[0].ta0sealnum !== null && this.terminalCTArray[0].ta0sealnum !== undefined) && this.terminalCTArray[0].ta0sealnum !== '') {
            for (var i = 0; i < this.terminalCTArray.length; i++) {
              console.log("CT Terminal : " + JSON.stringify(this.terminalCTArray[i]));
              this.terminalCTArray[i].assetnum = assetnum;
              this.terminalCTArray[i].orgid = orgid;
              this.terminalCTArray[i].siteid = siteid;
              this.terminalCTArray[i].wonum = wonum;            
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCTArray[i]);
            }
          }
        }

        if (this.nTerminalCTArray.length > 0) {
          if (this.nTerminalCTArray[0].ta0sealnum !== null && this.nTerminalCTArray[0].ta0sealnum !== undefined && this.nTerminalCTArray[0].ta0sealnum !== '') {
            for (var i = 0; i < this.nTerminalCTArray.length; i++) {
              if(olddeviceassetnum !== null &&  olddeviceassetnum !== undefined && olddeviceassetnum !== '') {
                this.nTerminalCTArray[i].parent = olddeviceassetnum;
              } else {
                this.nTerminalCTArray[i].parent = assetnum;
              }          
              this.nTerminalCTArray[i].orgid = orgid;
              this.nTerminalCTArray[i].siteid = siteid;
              this.nTerminalCTArray[i].wonum = wonum;
              this.nTerminalCTArray[i].ta0installind = true;
              this.nTerminalCTArray[i].devicecategory = ta0devicecategory;
              this.nTerminalCTArray[i].serialnum = ta0serialnum;
              console.log("newCTType : "+this.newCTType);
              if (this.newCTType === 'red'){
                this.nTerminalCTArray[0].ta0seallocation = FunctionClass.TERMINAL_CT_RED;
                this.nTerminalCTArray[0].ta0seallocation_description = "Terminal CT Red";
              } else if (this.newCTType === 'yellow'){
                this.nTerminalCTArray[0].ta0seallocation = FunctionClass.TERMINAL_CT_YELLOW;
                this.nTerminalCTArray[0].ta0seallocation_description = "Terminal CT Yellow";
              } else if (this.newCTType === 'blue'){
                this.nTerminalCTArray[0].ta0seallocation = FunctionClass.TERMINAL_CT_BLUE;
                this.nTerminalCTArray[0].ta0seallocation_description = "Terminal CT Blue";
              }          
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.nTerminalCTArray[i]);
            }
          }
        }
  
        // Removal reason validation
        if (this.validationRemovalReason() == false) {
          loading.dismiss();
          this.gf.displayToast("Please check and try again!");
        } else {
          setTimeout(() => {
            loading.onWillDismiss(() => {
              console.log("this.itemOri : " + JSON.stringify(this.itemOri));
              this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ctSealInfo_haveChange = true;
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
                delete itemVal['ta0registerdetail'];
                delete itemVal['ta0testdetail'];
                delete itemVal['ta4testdata'];
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
            delete itemVal['ta4testdata'];
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
    }
  }

  /**
   * Reason   : Method to check removal reason if remove tick.
   * Created  : 09/06/2023
   */
  validationRemovalReason() {
    // verify exist or not
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail) != 'undefined' &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== "" &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== null) {
        console.log (">>>> check data >>>> " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail));
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0removeind == true) {
          console.log(">>>> validation removal reason.. true..");

          if(typeof(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0sealremreason) == 'undefined' ||
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0sealremreason == "" ||
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0sealremreason == null) {
              this.validateInput = false;
              console.log(">>>> validation ta0sealremreason.. false..")
              return false;
            }
          // check reason
          if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0sealremreason == null ||
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0sealremreason == undefined ||
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[0].ta0sealremreason == '') {
              this.validateInput = false;
              console.log(">>>> validation ta0sealremreason.. false..")
              return false;
          }
        }

        console.log(">>>> validation removal reason.. true..")
        return true;
    }
  }

  barcodeScan(deviceDetailsArray, index, indicator, type) {

    this.options = {
      prompt: "Scan your barcode "
    }

    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      if (type === "before") { // before
        if (indicator == 1) {
          if (deviceDetailsArray[index].ta0sealnum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0sealnum !== '' && deviceDetailsArray[index].ta0sealnum !== null && typeof deviceDetailsArray[index].ta0sealnum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0sealnum = barcodeData.text.trim();
            }
          }
        } else if (indicator == 2) {
          if (deviceDetailsArray[index].ta0stickernum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0stickernum !== '' && deviceDetailsArray[index].ta0stickernum !== null && typeof deviceDetailsArray[index].ta0stickernum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0stickernum = barcodeData.text.trim();
            }
          }
        }
      } else { // after
        if (indicator == 1) {         
          deviceDetailsArray.ta0sealnum = barcodeData.text.trim();         
        } else if (indicator == 2) {
          if (deviceDetailsArray[index].ta0newstickernum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0newstickernum !== '' && deviceDetailsArray[index].ta0newstickernum !== null && typeof deviceDetailsArray[index].ta0newstickernum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              deviceDetailsArray[index].ta0newstickernum = barcodeData.text.trim();
            }
          }
        }
      }
    },
      (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => { console.log(toast); }
        );
      });
  }

  /**
   * Reason   : Method to assign value crimpless seal reason
   * Created  : 20/06/2023
   */
  onClickRemove(val) {
    // console.log(">>>>> onRemove >>>>> " + JSON.stringify(val));
    // checking remove or not
    if (val.ta0removeind) {
      // checking crimpless seal removal reason
      if (this.gv.crimplessSealReason) {
        console.log(">>>>> onRemove >>>>> " + this.gv.crimplessSealReason);
        if (typeof(val.ta0sealremreason) == 'undefined') {
          val.ta0sealremreason = this.gv.crimplessSealReason;
          console.log(">>>>> onRemove >>>>> " + val.ta0sealremreason);
        } else if (val.ta0sealremreason !== null && val.ta0sealremreason.ta0sealremreason !== '' && val.ta0sealremreason !== undefined) {
          val.ta0sealremreason = this.gv.crimplessSealReason;
          console.log(">>>>> onRemove >>>>> " + val.ta0sealremreason);
        }
      }
    }
  }
}
