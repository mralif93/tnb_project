import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { FunctionClass } from "../../../../pojo/commonEnum/FunctionClass";
import { Domains } from "../../../../pojo/commonEnum/Domains";
import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";

import { JsonStoreCrudProvider } from "../../../../providers/common/json-store/json-store-crud";
import { GlobalFunction } from '../../../../providers/common/global-function';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { MeterReading } from '../../../../pojo/MeterReading';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { UserStatus } from '../../../../pojo/lookup/UserStatus';

declare var cordova: any;

/**
 * Generated class for the RegisterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-details',
  templateUrl: 'register-details.html',
})
export class RegisterDetailsPage {

  functClass = FunctionClass;
  dCons = DeviceConstants;
  soTypes = SoTypes;
  selected_wmattribute: string;
  selected_indicator: string;

  hideShowRegister: boolean = true;

  item: any = '';
  multiAssetLocci: any = '';
  attr: any = '';
  windingGroupList: any;
  windingGroupPtList: any;
  ta0dswnGroupList: any;
  ta0dswonGroupList: any;

  // Close Data
  itemOri: any;
  multiAssetLocciOri: any;


  fIndex: any = null;
  maIndex: any;
  modemIndex: any;
  simcardIndex: any;
  ctIndex: any;
  ptIndex: any;
  modem: string;
  simcard: string;
  mrtype: string;
  mrnote: string;

  feederSetDesign: any;
  regPageType: string;

  worktype: string = null; //SO Type
  public voltageCode: string = "03";
  public check: boolean = true;
  public meterRead: any;
  public validateViRemark: boolean = true;

  ta0ptcontypeGroupList: any;
  ta0ctcontypeGroupList: any;

  ta0ctcontype: string;
  ta0ptcontype: string;
  ta0simcardip: string;


  //SO Fields Control
  //Device Status
  selected_devicests: string;
  showInsSts: boolean = false;
  showRemoSts: boolean = false;
  showDeviceSts: boolean = false;
  readDevice: boolean = false;
  showSystemSts: boolean = false;
  selected_rpmind: string;
  showRpmind: boolean = false;
  selected_rmvind: string;
  showRmvind: boolean = true;
  selected_istind: string;
  showIstind: boolean = true;
  showWma: boolean = true;
  mrNoteDisable: boolean = true;

  public showRemovalMeterStatus: boolean = false;
  public showRemovalModemStatus: boolean = false;
  public showRemovalSimcardStatus: boolean = false;
  public showRemovalCtStatus: boolean = false;
  public showRemovalPtStatus: boolean = false;

  public showInstallMeterStatus: boolean = false;
  public showInstallModemStatus: boolean = false;
  public showInstallSimcardStatus: boolean = false;

  public systemStatusMeterValue: any;
  public deviceStatusMeterValue: any;
  public systemStatusModemValue: any;
  public deviceStatusModemValue: any;
  public systemStatusSimcardValue: any;
  public deviceStatusSimcardValue: any;
  public systemStatusCtValue: any;
  public deviceStatusCtValue: any;
  public systemStatusPtValue: any;
  public deviceStatusPtValue: any;

  public deviceStatusMeterArray: any;
  public deviceStatusModemArray: any;
  public deviceStatusSimcardArray: any;
  public deviceStatusCtArray: any;
  public deviceStatusPtArray: any;

  public meterExisting: boolean = false;
  public modemExisting: boolean = false;
  public simcardExisting: boolean = false;
  public ctExisting: boolean = false;
  public ptExisting: boolean = false;
  public disabledDeviceStatus: boolean = false;

  public deviceStatus: any;
  public ta0systemstatus: any;
  public devicetype: any;
  public devicestatus: any = [];
  mrNodes: any;
  mrtypeDisable: boolean;
  contTest: number = 0;
  deviceItem: any;

  public ta0wrgmtrind: any;

  // Validation Attributes..
  public validateMrType: boolean = false;
  public validateMrNote: boolean = false;

  // Hide/Show Variables
  private showInformation: boolean = true;
  private showAction: boolean = true;
  private showRegister: boolean = true;

  private showContainer: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public jsonStoreCrud: JsonStoreCrudProvider,
    public toastCtrl: ToastController,
    private dataService: DataServiceProvider,
    public appCtrl: App,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.selected_wmattribute = 'N';
    this.selected_indicator = 'Y';
    // this.items = this.navParams.data;
    this.itemOri = this.navParams.get('paramObj');
    this.multiAssetLocciOri = this.navParams.get('mLocci');
    // this.multiAssetLocci = this.navParams.get('assetDetails');
    this.fIndex = this.navParams.get('fIndex');
    this.maIndex = this.navParams.get('maIndex')
    this.modem = this.navParams.get('modem');
    this.simcard = this.navParams.get('simcard');
    this.modemIndex = this.navParams.get('modemIndex');
    this.simcardIndex = this.navParams.get('simcardIndex');
    this.ctIndex = this.navParams.get('ctIndex');
    this.ptIndex = this.navParams.get('ptIndex');

    // Clone Data
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    /**
     * Description  : Change condition checking for ta0installationvoltage > ta0devicevoltage because meter mixed in so MVHV.
     * Created      : Alif (27.08.2019)
     */
    if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN ||
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK)
      && (this.item.json.worktype === this.soTypes.ZINL) && (Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage) > 3)) {
      this.showContainer = true;
    } else {
      this.showContainer = false;
    }

    if (this.item.json.worktype === this.soTypes.ZRCE || this.item.json.worktype === this.soTypes.ZINR) {
      this.hideShowRegister = false;
    }

    var querypart = [];
    if (this.item.json.worktype === this.soTypes.ZMMR) {

      querypart = WL.JSONStore.QueryPart().equal("domainid", "TA0MRNOTE");
      this.jsonStoreCrud
        .getSearchRecordNoLimit_Device(Domains.AlnDomain, [querypart])
        .then(result => {
          this.mrNodes = result;
        });
    }

    // attr start from here..
    //AMR Checking Function Calling...
    this.getAMRCheckingCondition();

    //this.getDetviceStatusPreLoading(this.attr.ta0serialnum);

    // Remove WMAT from ZINR by alif on 20th dec 2018
    // this.item.json.worktype === this.soTypes.ZINR
    if (this.item.json.worktype === this.soTypes.ZINL) {
      this.onHideShowRegister(this.multiAssetLocciOri.ta0wrgmtrind);
    }

    if (typeof (this.item.json) !== 'undefined') {
      this.worktype = this.item.json.worktype;

      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
        this.ta0ctcontype = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ctcontype;
        this.ta0ptcontype = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ptcontype;

        if (typeof (this.modemIndex) !== "undefined" && this.modemIndex !== null && this.modemIndex !== "") {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0simcardip) !== "undefined") {
            this.ta0simcardip = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0simcardip;
          }
        }

        if (typeof (this.simcardIndex) !== "undefined" && this.simcardIndex !== null && this.simcardIndex !== "") {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0simcardip) !== "undefined") {
            this.ta0simcardip = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0simcardip;
          }
        }
      }
    }

    //console.log("Data Validation constructor=" + JSON.stringify(this.item));

    // Checking Action Section (Device Status & System Status)
    // if (this.worktype === this.soTypes.ZIST || this.worktype === this.soTypes.ZRMV || this.worktype == this.soTypes.ZUDN || this.worktype == this.soTypes.ZRPC) {
    //change on 25/4/2022 for device status display for smart meter  
    if (this.attr.ta0functionclass === this.functClass.NMTR || this.attr.ta0functionclass === this.functClass.RMTR || this.attr.ta0functionclass === this.functClass.SMTR || this.attr.ta0functionclass === this.functClass.SIMCRD || this.attr.ta0functionclass === this.functClass.MODEM || this.attr.ta0functionclass === this.functClass.SMTR_CM ) {
      // Checking Meter is available or not
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
        // Reset to default empty
        this.deviceStatusMeterValue = [];

        // Checking if empty object 'ta0systemstatus' (Meter)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus !== null) {
          this.systemStatusMeterValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus;
          if (this.systemStatusMeterValue === 'ZREM') {
            this.showRemovalMeterStatus = true;
          }
        }

        // Checking if empty object 'ta0devicestatus' (Meter)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus !== null) {
          for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus.length; i++) {
            this.deviceStatusMeterValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus[i].ta0status);
          }
          // Display Value
          this.showRemovalMeterStatus = true;
        }
        this.meterExisting = true;
      } else {
        this.meterExisting = false;
      }

      // Checking Modem is available or not
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]) !== 'undefined') {
        // Reset to default empty
        this.deviceStatusModemValue = [];

        // Checking if empty object 'ta0systemstatus' (Modem)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus !== null) {
          this.systemStatusModemValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus;
          if (this.systemStatusModemValue === 'ZREM') {
            this.showRemovalModemStatus = true;
          }
        }

        // Checking if empty object 'ta0devicestatus' (Modem)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus !== null) {
          for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus.length; i++) {
            this.deviceStatusModemValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus[i].ta0status);
          }
          // Display Value
          this.showRemovalModemStatus = true;
        }
        this.modemExisting = true;
      } else {
        this.modemExisting = false;
      }

      // Checking Simcard is available or not
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]) !== 'undefined') {
        // Reset to default empty
        this.deviceStatusSimcardValue = [];

        // Checking if empty object 'ta0systemstatus' (Simcard)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus !== null) {
          this.systemStatusSimcardValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus;
          if (this.systemStatusSimcardValue === 'ZREM') {
            this.showRemovalSimcardStatus = true;
          }
        }

        // Checking if empty object 'ta0devicestatus' (Simcard)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus !== null) {
          for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus.length; i++) {
            this.deviceStatusSimcardValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus[i].ta0status);
          }
          // Display Value
          this.showRemovalSimcardStatus = true;
        }
        this.simcardExisting = true;
      } else {
        this.simcardExisting = false;
      }
    }

    if (this.attr.ta0functionclass === this.functClass.CTTFR || this.attr.ta0functionclass === this.functClass.CTDIR) {
      /**
       * Reason   : To show value ta0currentratio & ta0class collect from ta0registers.
       * Created  : Alif (22-01-2019)
       */
      // Current Ratio
      if (typeof (this.attr.ta0registers[0]) !== "undefined" && typeof (this.attr.ta0registers[1]) !== "undefined") {
        if ((typeof (this.attr.ta0registers[0].ta0transformercurrent) !== "undefined" && this.attr.ta0registers[0].ta0transformercurrent !== null && this.attr.ta0registers[0].ta0transformercurrent !== "") ||
          (typeof (this.attr.ta0registers[1].ta0transformercurrent) !== "undefined" && this.attr.ta0registers[1].ta0transformercurrent !== null && this.attr.ta0registers[1].ta0transformercurrent !== "") ||
          (typeof (this.attr.ta0currentratio) !== "undefined" && this.attr.ta0currentratio !== null && this.attr.ta0currentratio !== "")) {
          if (this.attr.ta0registers[0].hasOwnProperty("ta0transformercurrent") && this.attr.ta0registers[1].hasOwnProperty("ta0transformercurrent")) {
            var cr = parseFloat(this.attr.ta0registers[1].ta0transformercurrent) / parseFloat(this.attr.ta0registers[0].ta0transformercurrent);
            var loc_cr = this.attr.ta0registers[1].ta0transformercurrent + "/" + this.attr.ta0registers[0].ta0transformercurrent + " A";

            if (!isNaN(cr)) {
              this.attr.ta0currentratio = cr;
              this.attr.loc_ta0currentratio = loc_cr;
            }
          } else if (this.attr.hasOwnProperty("ta0currentratio")) {
            if (typeof (this.attr.ta0registers[0].ta0windinggroup) !== "undefined") {
              var stringValue = (this.attr.ta0registers[0].ta0windinggroup).toString();
            } else {
              var stringValue: any = [];
            }
            var array = [];
            var stringFull = "", CR;

            // Collect String
            for (var i = 0; i < stringValue.length; i++) {
              array.push(stringValue.charAt(i));
            }

            var string = array.splice(1, 8);
            var ratio = string.splice(0, 5);
            ratio.splice(4, 0, "/");

            // convert array to string
            for (var k = 0; k < ratio.length; k++) {
              stringFull += ratio[k];
            }
            CR = parseFloat(stringFull);

            this.attr.ta0currentratio = CR;
            this.attr.loc_ta0currentratio = stringFull.toString() + " A";
          }
        }


        // Class
        if ((typeof (this.attr.ta0registers[0].ta0windingclass) !== "undefined" && this.attr.ta0registers[0].ta0windingclass !== null && this.attr.ta0registers[0].ta0windingclass !== "") ||
          (typeof (this.attr.ta0registers[1].ta0windingclass) !== "undefined") && this.attr.ta0registers[1].ta0windingclass !== null && this.attr.ta0registers[1].ta0windingclass !== "") {
          if (this.attr.ta0registers[0].hasOwnProperty("ta0windingclass") && this.attr.ta0registers[1].hasOwnProperty("ta0windingclass")) {
            this.attr.ta0class = this.attr.ta0registers[0].ta0windingclass;
          }
        }
      }

      // Winding Group Checking
      var loc_windingGroup = null;
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registers) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registers.length !== 0) {
        loc_windingGroup = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registers[0].ta0windinggroup;
        this.attr.loc_windingGroup = loc_windingGroup;
      }

      // Checking CT is avilable or not
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex]) !== 'undefined') {
        // Reset to default empty
        this.deviceStatusCtValue = [];

        // Checking if empty object 'ta0systemstatus' (CT)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus !== null) {
          this.systemStatusCtValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus;
          if (this.systemStatusCtValue === 'ZREM') {
            this.showRemovalCtStatus = true;
          }
        }

        // Checking if empty object 'ta0devicestatus' (CT)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus !== null) {
          for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus.length; i++) {
            this.deviceStatusCtValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus[i].ta0status);
          }
          // Display Value
          this.showRemovalCtStatus = true;
        }
        this.ctExisting = true;
      } else {
        this.ctExisting = false;
      }
    }

    if (this.attr.ta0functionclass === this.functClass.PTTFR || this.attr.ta0functionclass === this.functClass.VTDIR) {
      /**
       * Reason   : To show value ta0currentratio & ta0class collect from ta0registers.
       * Created  : Alif (22-01-2019)
       */
      // Voltage Ratio
      if (this.attr.ta0registers[0].hasOwnProperty("ta0transformervoltage") && this.attr.ta0registers[1].hasOwnProperty("ta0transformervoltage")) {
        var vr = parseFloat(this.attr.ta0registers[1].ta0transformervoltage) / parseFloat(this.attr.ta0registers[0].ta0transformervoltage);
        var loc_vr = this.attr.ta0registers[1].ta0transformervoltage + "/" + this.attr.ta0registers[0].ta0transformervoltage + " A";

        if (!isNaN(vr)) {
          this.attr.ta0voltageratio = vr.toFixed(2);
          this.attr.loc_ta0voltageratio = loc_vr;
        }
      } else if (this.attr.hasOwnProperty("ta0currentratio")) {
        if (typeof (this.attr.ta0registers[0].ta0windinggroup) !== "undefined") {
          var stringValue = (this.attr.ta0registers[0].ta0windinggroup).toString();
        } else {
          var stringValue: any = [];
        }
        var array = [];
        var stringFull = "", CR, crPT = "";

        // Collect String
        for (var i = 0; i < stringValue.length; i++) {
          array.push(stringValue.charAt(i));
        }

        var string = array.splice(1, 8);
        var ratio = string.splice(0, 5);

        // convert array to string
        for (var k = 0; k < ratio.length; k++) {
          stringFull += ratio[k];
          var double = parseFloat(stringFull);
        }
        crPT = (((double) * 1000) / 110).toString();

        this.attr.loc_ta0voltageratio = this.attr.loc_ta0currentratio = (double * 1000) + "/110 A";
        this.attr.ta0voltageratio = this.attr.ta0currentratio = crPT;
      }

      // Class
      if (this.attr.ta0registers[0].hasOwnProperty("ta0windingclass") && this.attr.ta0registers[1].hasOwnProperty("ta0windingclass")) {
        this.attr.ta0class = this.attr.ta0registers[0].ta0windingclass;
      }

      // Winding Group Checking
      var loc_windingGroup = null;
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registers) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registers.length !== 0) {
        loc_windingGroup = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registers[0].ta0windinggroup;
        this.attr.loc_windingGroup = loc_windingGroup;
      }

      // Checking PT is avilable or not
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex]) !== 'undefined') {
        // Reset to default empty
        this.deviceStatusPtValue = [];

        // Checking if empty object 'ta0systemstatus' (PT)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus !== null) {
          this.systemStatusPtValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus;
          if (this.systemStatusCtValue === 'ZREM') {
            this.showRemovalPtStatus = true;
          }
        }

        // Checking if empty object 'ta0devicestatus' (PT)
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus !== null) {
          for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus.length; i++) {
            this.deviceStatusPtValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus[i].ta0status);
          }
          // Display Value
          this.showRemovalPtStatus = true;
        }
        this.ptExisting = true;
      } else {
        this.ptExisting = false;
      }
    }

    //IEE alert
    console.log("asset number : "+this.attr.assetnum);
    const ieeFlag = this.gv.ieeMap.get(this.attr.assetnum);
    console.log("ta0existingdevice : " + this.attr.ta0existingdevice);
    console.log("ta0billingind : " + this.item.json.ta0billingind);
    console.log("ieeFlag : " + ieeFlag);    
    if(this.item.json.ta0billingind === 'I' && this.attr.ta0existingdevice === true && (ieeFlag === false || ieeFlag === undefined)) {
      this.gf.warningAlert("Warning", "Please click on ODR button for interval billing", "Close");
    }
  }

  /**
   * Getting Device Status from response
   */
  getDeviceStatusPMR() {

    var reerror = 0;
    var aderror = 0;
    var error = 0;
    var errorMsg = "";

    // Loader Start 
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent,
    });
    loading.present();
    this.gf.loadingTimer(loading);
    // Get data from the service call...
    this.dataService
      /**
       *  Demo Data Check
       * .fetchPMRDeviceDetails("88122346052", "10050434", "PMR") 
       */
      .fetchPMRDeviceDetails(this.attr.ta0serialnum, this.attr.assetnum, "PMR")
      .then((result) => {

        var respResult: any = result;
        this.deviceItem = JSON.parse(respResult.respObject);
        console.log("Getting PMR Device data result --> " + JSON.stringify(this.deviceItem));

        if (typeof (this.deviceItem.MESSAGE_TEXT) !== 'undefined') {
          error++;
          errorMsg = this.deviceItem.MESSAGE_TEXT;
        }
        else {
          errorMsg = 'The process is abort due to missing of some data...';
        }

        // retrieve the data and stored into an array...
        if (respResult.processStatus === 'success') {

          if (typeof (this.deviceItem) !== 'undefined') {

            if (typeof (this.deviceItem.TA0REGISTERS) !== 'undefined') {

              for (var i = 0; i < this.deviceItem.TA0REGISTERS.length; i++) {

                if (typeof (this.deviceItem.TA0REGISTERS[i].ta0meterreading) !== 'undefined' && this.deviceItem.TA0REGISTERS[i].ta0meterreading !== null) {

                  if (typeof (this.deviceItem.TA0REGISTERS[i].ta0meterreading.ta0reading) !== 'undefined' && this.deviceItem.TA0REGISTERS[i].ta0meterreading.ta0reading !== null) {

                    this.devicestatus[i] = this.deviceItem.TA0REGISTERS[i].ta0meterreading.ta0reading;
                  }
                  else { reerror++; }
                }
                else { reerror++; }
              }
            }
            else { reerror++; }
          }
          else { reerror++; }

          // Assign the stored array into proposed reading...
          if (this.devicestatus.length > 0) {

            if (typeof (this.attr.ta0registers) !== 'undefined') {

              for (var i = 0; i < this.attr.ta0registers.length; i++) {

                if (typeof (this.attr.ta0registers[i].ta0meterreading) !== 'undefined' && this.attr.ta0registers[i].ta0meterreading !== null) {

                  for (var j = 0; j < this.attr.ta0registers[i].ta0meterreading.length; j++) {

                    if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "PMR") {

                      this.attr.ta0registers[i].ta0meterreading[j].ta0reading = this.devicestatus[i];
                    }
                  }
                }
                else { aderror++ }
              }
            }
            else { aderror++ }
          }
          else { aderror++ }
        }
        else {
          error++;
        }

        loading.dismiss();

        if (reerror > 0 || aderror > 0 || error > 0) {
          let alert = this.alertCtrl.create({
            title: 'REMINDER',
            subTitle: errorMsg,
            buttons: ['Close']
          });
          alert.present();
        }
      });
  }

  getAMRCheckingCondition() {

    if (typeof (this.item.json.ta0feeder[this.fIndex]) !== 'undefined') {

      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) != 'undefined') {

        this.deviceStatus = new UserStatus();
        this.meterRead = new MeterReading();

        this.attr = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
        var registerDetails = this.attr.ta0reading;
        console.log('Else Item: ' + JSON.stringify(this.multiAssetLocci));
        if (this.attr.ta0registers != undefined) {
          // Sorting Register
          this.attr.ta0registers.sort(this.gf.dynamicSort("ta0registertype"));
          var i = 0;
          for (let register of this.attr.ta0registers) {

            if (typeof (this.attr.ta0mf) != 'undefined' || this.attr.ta0mf > 0) {
              register.loc_reg_totalFactor = this.attr.ta0mf * register.ta0registerfactor;
            }
            else {
              register.loc_reg_totalFactor = 0;
            }
            var checkExistingAmr = false;
            if (typeof (register.ta0meterreading) != 'undefined' && register.ta0meterreading !== null && register.ta0meterreading !== "") {
              for (let meterReading of register.ta0meterreading) {
                if (meterReading.ta0readingtype === 'AMR') {
                  checkExistingAmr = true;
                  if (this.item.json.worktype === 'ZMMR') {
                    this.checkForMrtypeAndMrCode(meterReading)
                  }
                  break;
                }
              }
              if (!checkExistingAmr) {
                var meterReading = new MeterReading();
                //this.attr.ta0register.ta0meterreading = [];
                meterReading.ta0readingtype = 'AMR';
                if (typeof (register.ta0meterreading) != 'undefined' && register.ta0meterreading !== null && register.ta0meterreading !== "") {
                  //register.ta0meterreading.push(meterReading);
                  if (this.item.json.worktype === 'ZMMR') {
                    this.checkForMrtypeAndMrCode(meterReading)
                  }
                  this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
                }
                else {
                  register.ta0meterreading = [];
                  //register.ta0meterreading.push(meterReading);
                  this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
                }
              }
            }
            else {
              var meterReading = new MeterReading();
              //this.attr.ta0register.ta0meterreading = [];
              meterReading.ta0readingtype = 'AMR';
              if (typeof (register.ta0meterreading) != 'undefined' && register.ta0meterreading !== null && register.ta0meterreading !== "") {
                //register.ta0meterreading.push(meterReading);
                if (this.item.json.worktype === 'ZMMR') {
                  this.checkForMrtypeAndMrCode(meterReading)
                }
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
              }
              else {
                register.ta0meterreading = [];
                //register.ta0meterreading.push(meterReading);
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
              }
            }
            //this.item.json.ta0feeder[this.fIndex].multiAssetLocci[this.maIndex].ta0registers[i].ta0meterreading = register.ta0meterreading;
            i++;
            //register.sort(this.gf.dynamicSort("ta0registertype"));
          }
        }
      }
    }
  }

  goToRegisterMrType(event) {

    if (event === '03') {
      this.mrNoteDisable = false;
    }
    else {
      this.mrnote = null;
      this.mrNoteDisable = true;
    }
    this.contTest = 1;
    this.getAMRCheckingCondition();
  }

  goToRegisterMrNode() {

    this.contTest = 1;
    this.getAMRCheckingCondition();
  }

  checkForMrtypeAndMrCode(meterReading) {
    if (typeof (this.item.json.ta0sntype) !== 'undefined' && this.item.json.ta0sntype !== null && this.item.json.ta0sntype !== "") {
      var checksncode = this.item.json.ta0sntype;
      if (checksncode === "C2" || checksncode === "C5") {

        this.mrtype = '01';
        this.mrtypeDisable = true;
        meterReading.ta0mrtype = '01';
        meterReading.ta0mrnote = '';
        this.mrnote = '';
      }
      else {
        this.mrtypeDisable = false;
        this.mrNoteDisable = false;
        if (this.contTest == 0) {
          this.mrtype = meterReading.ta0mrtype;
          this.mrnote = meterReading.ta0mrnote;
        }
        else {
          if (this.mrtype === '03') {
            meterReading.ta0mrtype = this.mrtype;
            meterReading.ta0mrnote = this.mrnote;
          }
          else {
            this.mrtype = '01';
            meterReading.ta0mrtype = '01';
            meterReading.ta0mrnote = '';
            this.mrnote = '';
          }
        }
      }
    }
  }

  checkingSystemStatus(value, devicetype) {
    if (devicetype === 'meter') {
      if (value === 'ZREM') {
        this.showRemovalMeterStatus = true;
      } else {
        this.showRemovalMeterStatus = false;
        this.deviceStatusMeterValue = [];
      }
    }

    if (devicetype === 'modem') {
      if (value === 'ZREM') {
        this.showRemovalModemStatus = true;
      } else {
        this.showRemovalModemStatus = false;
        this.deviceStatusModemValue = [];
      }
    }

    if (devicetype === 'simcard') {
      if (value === 'ZREM') {
        this.showRemovalSimcardStatus = true;
      } else {
        this.showRemovalSimcardStatus = false;
        this.deviceStatusSimcardValue = [];
      }
    }

    if (devicetype === 'ct') {
      if (value === 'ZREM') {
        this.showRemovalCtStatus = true;
      } else {
        this.showRemovalCtStatus = false;
        this.deviceStatusCtValue = [];
      }
    }

    if (devicetype === 'pt') {
      if (value === 'ZREM') {
        this.showRemovalPtStatus = true;
      } else {
        this.showRemovalPtStatus = false;
        this.deviceStatusPtValue = [];
      }
    }
  }

  lookup() {
    var queryPart = null;

    if (this.item.json.ta0installationvoltage === "03") {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0");
    } else {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1");
    }

    this.jsonStoreCrud
      .getSearchRecordNoLimit(Domains.WindingGroup, queryPart)
      .then(result => {
        this.windingGroupList = result;
        //console.log("items records :: " + JSON.stringify(this.windingGroupList));
      });

    if (this.item.json.ta0installationvoltage !== "03") {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "2");

      this.jsonStoreCrud
        .getSearchRecordNoLimit(Domains.WindingGroup, queryPart)
        .then(result => {
          this.windingGroupPtList = result;
          //console.log("items records :: " + JSON.stringify(this.windingGroupPtList));
        });
    }

  }

  /**
   * ZMMR usage calculation.  
   * @param meterObj 
   * @param ta0meterreading 
   * @param ta0usage 
   */
  calculateUsage(meterObj, ta0meterreading, ta0usage) {
    var usageRead = 0;
    for (let meterReading of meterObj.ta0meterreading) {
      if (meterReading.ta0readingtype === 'PMR') {
        usageRead = ta0meterreading - parseInt(meterReading.ta0reading);
        break;
      }
    }

    for (let meterReading of meterObj.ta0meterreading) {
      if (meterReading.ta0readingtype === 'AMR') {
        meterReading.ta0mrnote = this.mrnote;
        meterReading.ta0mrtype = this.mrtype;
        if (usageRead > 0) {
          meterReading.ta0usage = usageRead;
        } else {
          meterReading.ta0usage = 0;
        }
        break;
      }
    }
  }

  ptCon(value) {
    console.log("ptCon..." + value);
    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ptcontype = '';
    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ptcontype = value;

  }

  ctCon(value) {
    console.log("ctCon..." + value);
    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ctcontype = '';
    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ctcontype = value;
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  displayMessageToast(msg) {
    this.presentToast("Required field should not be empty. " + msg);
  }

  /**
   * edited by Ameer 13/11/2018 | Alif 15/05/2019
   * Add validation for SO type ZISR
   */
  validateInput() {
    this.check = true;
    if ((this.itemOri.json.worktype === 'ZIST' || this.itemOri.json.worktype === 'ZRMV' || this.itemOri.json.worktype === 'ZSRO' || this.itemOri.json.worktype === 'ZRPM' || this.itemOri.json.worktype === 'ZUDN' || this.itemOri.json.worktype === 'ZRPC')) {
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex] !== 'undefined') {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
          // Adding checking if ta0register group is null or undefined..
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers !== null) {
            for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
              for (var j = 0; j < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.length; j++) {
                if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === undefined ||
                  this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === "" ||
                  this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === null) &&
                  this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0readingtype === 'AMR') {
                  this.check = false;
                  break;
                }
              }
            }
          }
        }
      }
    }

    // ZINL & (ZINR - remove because no changing meter reading) by alif (21.12.2018)
    if (this.itemOri.json.worktype === SoTypes.ZINL) {
      if (this.attr.ta0wrgmtrind === false) {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex] !== 'undefined') {
          // Existing meter main or check for ZINL skip to checking.
          // Edited : 22-02-2019 (Alif) - Adding condition ta0replaceind user need key in last meter reading.
          if (
            (this.item.json.worktype === SoTypes.ZINL && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN
              && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0replaceind === false) ||
            (this.item.json.worktype === SoTypes.ZINL && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK
              && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0replaceind === false)) {
            // Skip checking meter reading.
            this.check = true;
          } else {
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
              for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
                for (var j = 0; j < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.length; j++) {
                  if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === undefined ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === "" ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === null) &&
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0readingtype === 'AMR') {
                    this.check = false;
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }

    /** 
     * Created by Ameer 13/11/2018
     * Checking for SO ZISR & ZRCE
     * Edited by Ameer 3/12/2018 - Hide validation for so ZRCE
     */
    if (this.itemOri.json.worktype === SoTypes.ZISR) {
      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex] !== 'undefined') {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
          for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
            for (var j = 0; j < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.length; j++) {
              if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === undefined ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === "" ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === null) &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0readingtype === 'AMR') {
                this.check = false;
                break;
              }
            }
          }
        }
      }
    }

    //ZMMR
    if ((this.itemOri.json.worktype === 'ZMMR')) {
      if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers !== null) {
        for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
          if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === 'METER_EQUIP' || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === 'CM_EQUIP') {
            var registerlength = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i];
            for (var j = 0; j < registerlength.ta0meterreading.length; j++) {
              var meterReadingLength = registerlength.ta0meterreading[j];
              if (meterReadingLength.ta0readingtype === 'AMR' && (meterReadingLength.ta0reading === undefined || meterReadingLength.ta0reading === "" || meterReadingLength.ta0reading === null)) {
                this.check = false;
              }
              else if (meterReadingLength.ta0readingtype === '' || typeof (meterReadingLength.ta0readingtype) == 'undefined') {
                this.check = false;
              }
            }
          }
        }
      }

      //ZMMR Validation for mrnote...
      if (typeof (this.mrtype) === 'undefined' || this.mrtype === '' || this.mrtype === null) {
        this.check = false;
        this.validateMrType = true;
      }
      else if (this.itemOri.json.worktype === this.soTypes.ZMMR && this.mrtype === '03') {
        if (typeof (this.mrnote) === 'undefined' || this.mrnote === '' || this.mrnote === null) {
          this.check = false;
          this.validateMrNote = true;
        }
      }
    }
  }

  validateInputUserStatus() {

    // Remove for ZINL checking device status.
    // if (this.itemOri.json.worktype !== 'ZINL') {

    this.check = true;
    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0replaceind === true) {

      if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER &&
        (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === FunctionClass.CTTFR ||
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === FunctionClass.CTDIR)) {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0replaceind === true) {
          if (this.systemStatusCtValue === undefined || this.systemStatusCtValue === "D" || this.systemStatusCtValue === 'ZREM' && this.deviceStatusCtValue.length == 0) {
            this.check = false;
          }
        }
      }
      else if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER &&
        (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === FunctionClass.PTTFR ||
          this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === FunctionClass.VTDIR)) {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0replaceind === true) {
          if (this.systemStatusPtValue === undefined || this.systemStatusPtValue === "D" || this.systemStatusPtValue === 'ZREM' && this.deviceStatusPtValue.length == 0) {
            this.check = false;
          }
        }
      }
      else if (this.systemStatusMeterValue === undefined || this.systemStatusMeterValue === "D" || this.systemStatusMeterValue === 'ZREM' && this.deviceStatusMeterValue.length == 0) {
        this.check = false;
      }
    }

    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
      if (typeof (this.modemIndex) !== 'undefined' && this.modemIndex !== '') {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0replaceind === true) {
          if (this.systemStatusModemValue === undefined || this.systemStatusModemValue === "D" || (this.systemStatusModemValue === 'ZREM' && this.deviceStatusModemValue.length == 0)) {
            this.check = false;
          }
        }
      }

      if (typeof (this.simcardIndex) !== 'undefined' && this.simcardIndex !== '') {
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0replaceind === true) {
          if (this.systemStatusSimcardValue === undefined || this.systemStatusSimcardValue === "D" || this.systemStatusSimcardValue === 'ZREM' && this.deviceStatusSimcardValue.length == 0) {
            this.check = false;
          }
        }
      }
    }

    // }
  }

  saveRegisterDetails() {

    this.validateInput();
    if (this.check === true) {

      /**
       * Assigning value AMR using PMR
       * Created  : Alif
       * Date     : 27/12/2018
       * Edited   : 28/01/2019
       */
      if (this.worktype === SoTypes.ZINL && this.item.json.ta0installationvoltage > 3 && (this.attr.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN || this.attr.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK)) {
        var meterReading = [];
        var data = {};

        /**
         * Reason   : Allow user to key in last meter reading if meter is replace. 
         * Created  : 22-01-2019
         */
        if (this.worktype === SoTypes.ZINL && this.showContainer && this.attr.ta0replaceind !== true) {

          if (typeof (this.attr.ta0registers) !== 'undefined' && this.attr.ta0registers !== null) {
            // Getting meter reading from PMR
            for (var i = 0; i < this.attr.ta0registers.length; i++) {
              if (typeof (this.attr.ta0registers[i].ta0meterreading) !== 'undefined') {
                for (var j = 0; j < this.attr.ta0registers[i].ta0meterreading.length; j++) {
                  if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "PMR") {
                    // Remove to assign value direct is got value to AMR.
                    // meterReading.push(data);
                    for (var k = 0; k < this.attr.ta0registers[i].ta0meterreading.length; k++) {
                      if (this.attr.ta0registers[i].ta0meterreading[k].ta0readingtype === "AMR") {
                        this.attr.ta0registers[i].ta0meterreading[k].ta0reading = this.attr.ta0registers[i].ta0meterreading[j].ta0reading;
                      }
                    }
                  }
                }
              }
            }
          }

        }
      }


      let loading = this.loadingCtrl.create({
        content: "Loading..."
      });
      loading.present();

      this.gf.loadingTimer(loading);

      this.itemOri.json.ta0feeder[this.fIndex] = this.item.json.ta0feeder[this.fIndex];

      this.validateInputUserStatus();
      if (this.check === true) {

        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
          // validation status flag for change color indicator in serve execution page.
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registerstatus = 'Y';
          if (typeof (this.systemStatusMeterValue) !== 'undefined') {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus = this.systemStatusMeterValue;
          }

          // Saving Device Status (Meter)
          if (typeof (this.deviceStatusMeterValue) !== 'undefined') {
            // Setting default
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus = [];
            this.deviceStatusMeterArray = {};
            for (var i = 0; i < this.deviceStatusMeterValue.length; i++) {
              this.deviceStatusMeterArray = new UserStatus();
              this.deviceStatusMeterArray.ta0status = this.deviceStatusMeterValue[i];
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus.push(this.deviceStatusMeterArray);
            }
          }
        } else {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registerstatus = 'Y';
          }
        }

        // Checking Modem is available or not
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]) !== 'undefined') {
          // validation status flag for change color indicator in serve execution page.
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
          // Saving System Status (Modem)
          if (typeof (this.systemStatusModemValue) !== 'undefined') {
            // Saving into original data
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus = this.systemStatusModemValue;
          }

          // Saving Device Status (Modem)
          if (typeof (this.deviceStatusModemValue) !== 'undefined') {
            // Setting default
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus = [];
            this.deviceStatusModemArray = {};
            for (var i = 0; i < this.deviceStatusModemValue.length; i++) {
              this.deviceStatusModemArray = new UserStatus();
              this.deviceStatusModemArray.ta0status = this.deviceStatusModemValue[i];
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus.push(this.deviceStatusModemArray);
            }
          }
        } else {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]) !== 'undefined') {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
          }
        }

        // Checking Simcard is available or not
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]) !== 'undefined') {
          // validation status flag for change color indicator in serve execution page.
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
          // Saving System Status (Simcard)
          if (typeof (this.systemStatusSimcardValue) !== 'undefined') {
            // Saving into original data
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus = this.systemStatusSimcardValue;
          }

          // Saving Device Status (Simcard)
          if (typeof (this.deviceStatusSimcardValue) !== 'undefined') {
            // Setting default
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus = [];
            this.deviceStatusSimcardArray = {};
            for (var i = 0; i < this.deviceStatusSimcardValue.length; i++) {
              this.deviceStatusSimcardArray = new UserStatus();
              this.deviceStatusSimcardArray.ta0status = this.deviceStatusSimcardValue[i];
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus.push(this.deviceStatusSimcardArray);
            }
          }
        } else {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]) !== 'undefined') {
            // validation status flag for change color indicator in serve execution page.
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
          }
        }

        // Checking CT is available or not
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex]) !== 'undefined') {
          // validation status flag for change color indicator in serve execution page.
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registerstatus = 'Y';
          // Saving System STatus (CT)
          if (typeof (this.systemStatusCtValue) !== 'undefined') {
            // Saving into original data
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus = this.systemStatusCtValue;
          }

          // Saving Device Status (CT)
          if (typeof (this.deviceStatusCtValue) !== 'undefined') {
            // Setting default
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus = [];
            this.deviceStatusCtArray = {};
            for (var i = 0; i < this.deviceStatusCtValue.length; i++) {
              this.deviceStatusCtArray = new UserStatus();
              this.deviceStatusCtArray.ta0status = this.deviceStatusCtValue[i];
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus.push(this.deviceStatusCtArray);
            }
          }
        } else {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex]) !== 'undefined') {
            // validation status flag for change color indicator in serve execution page.
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registerstatus = 'Y';
          }
        }

        // Checking PT is available or not
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex]) !== 'undefined') {
          // validation status flag for change color indicator in serve execution page.
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registerstatus = 'Y';
          // Saving System Status (PT)
          if (typeof (this.systemStatusPtValue) !== 'undefined') {
            // Saving into original data
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus = this.systemStatusPtValue;
          }

          // Saving Device Status (PT)
          if (typeof (this.deviceStatusPtValue) !== 'undefined') {
            // Setting default
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus = [];
            this.deviceStatusPtArray = {};
            for (var i = 0; i < this.deviceStatusPtValue.length; i++) {
              this.deviceStatusPtArray = new UserStatus();
              this.deviceStatusPtArray.ta0status = this.deviceStatusPtValue[i];
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus.push(this.deviceStatusPtArray);
            }
          }
        } else {
          if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex]) !== 'undefined') {
            // validation status flag for change color indicator in serve execution page.
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registerstatus = 'Y';
          }
        }

        if (this.itemOri.json != null) {
          if (this.modemIndex != null) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0simcardip = this.ta0simcardip;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
          }

          if (this.simcardIndex != null) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0simcardip = this.ta0simcardip;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
          }
        } else {
          if (this.modemIndex != null) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
          }

          if (this.simcardIndex != null) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
          }
        }

        setTimeout(() => {
          loading.onWillDismiss(() => {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
            this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
            loading.dismiss();
          });
        }, 10000);

        /**
         * Reason   : Saving to local storage (json data).
         * Created  : 22-01-2019
         */
        this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);

        if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
          this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.gf.displayToast("Register Info updated locally.");
          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          // newRootNav.push("ServiceExecutionPage", this.itemOri);
          loading.dismiss();
        } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

          /**
           * Description: Change old(swift) to new(objective-c) plugin.
           * Edited: Alif (16.10.2019)
           * old --> mobilesignalswift.getSignalStrength
           * new --> cordova.plugins.MobileSignal.getSignalStrength
           */
          cordova.plugins.MobileSignal.getSignalStrength((data) => {
            if (this.gv.deviceSignal <= data) {
              var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
              var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
              var itemArray = [];

              delete itemVal['ta0sealdetail'];
              delete itemVal['ta0stickerdetail'];
              delete itemVal['ta0testdetail'];

              itemArray.push(itemVal);

              if (this.attr.ta0functionclass === this.functClass.NMTR || this.attr.ta0functionclass === this.functClass.RMTR || this.attr.ta0functionclass === this.functClass.SMTR || this.attr.ta0functionclass === this.functClass.SMTR_CM) {
                if (typeof (this.modemIndex) !== 'undefined' && this.modemIndex != null && this.modemIndex !== '') {

                  var itemValModem = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]));
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].loc_ta0registers_haveChange = true;
                  var itemArrayModem = [];
                  delete itemValModem['ta0sealdetail'];
                  delete itemValModem['ta0stickerdetail'];
                  delete itemValModem['ta0testdetail'];
                  itemArrayModem.push(itemValModem);
                  itemArray.push(itemValModem);
                }

                if (typeof (this.simcardIndex) !== 'undefined' && this.simcardIndex != null && this.simcardIndex !== '') {
                  var itemValSimcard = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]));
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].loc_ta0registers_haveChange = true;
                  var itemArraySimcard = [];
                  delete itemValSimcard['ta0sealdetail'];
                  delete itemValSimcard['ta0stickerdetail'];
                  delete itemValSimcard['ta0testdetail'];
                  itemArraySimcard.push(itemValSimcard);
                  itemArray.push(itemValSimcard);
                }
              }
              this.dataService
                .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_REGISTERS, feederCode, this.itemOri.json.worktype)
                .then(results => {
                  this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
                  this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = false;
                  this.gf.warningAlert('Success', 'Register Details save successfully.', 'Close');
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("ServiceExecutionPage", this.itemOri);
                  this.navCtrl.pop();
                  loading.dismiss();
                })
                .catch(error => {
                  console.log('service failure : ' + error);
                  loading.dismiss();
                });
            } else {
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
              this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
              this.gf.displayToast("Register Info updated locally.");
              this.gf.warningAlert('Success', 'Register Info updated locally.', 'Close');
              loading.dismiss();
            }
          });

        } else {

          var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
          var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
          var itemArray = [];

          delete itemVal['ta0sealdetail'];
          delete itemVal['ta0stickerdetail'];
          delete itemVal['ta0testdetail'];

          itemArray.push(itemVal);

          if (this.attr.ta0functionclass === this.functClass.NMTR || this.attr.ta0functionclass === this.functClass.RMTR || this.attr.ta0functionclass === this.functClass.SMTR || this.attr.ta0functionclass === this.functClass.SMTR_CM) {
            if (typeof (this.modemIndex) !== 'undefined' && this.modemIndex != null && this.modemIndex !== '') {

              var itemValModem = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]));
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].loc_ta0registers_haveChange = true;
              var itemArrayModem = [];
              delete itemValModem['ta0sealdetail'];
              delete itemValModem['ta0stickerdetail'];
              delete itemValModem['ta0testdetail'];
              itemArrayModem.push(itemValModem);
              itemArray.push(itemValModem);
            }

            if (typeof (this.simcardIndex) !== 'undefined' && this.simcardIndex != null && this.simcardIndex !== '') {
              var itemValSimcard = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]));
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].loc_ta0registers_haveChange = true;
              var itemArraySimcard = [];
              delete itemValSimcard['ta0sealdetail'];
              delete itemValSimcard['ta0stickerdetail'];
              delete itemValSimcard['ta0testdetail'];
              itemArraySimcard.push(itemValSimcard);
              itemArray.push(itemValSimcard);
            }
          }
          this.dataService
            .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_REGISTERS, feederCode, this.itemOri.json.worktype)
            .then(results => {
              this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = false;
              this.gf.warningAlert('Success', 'Register Details save successfully.', 'Close');
              // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
              // newRootNav.push("ServiceExecutionPage", this.itemOri);
              this.navCtrl.pop();
              loading.dismiss();
            })
            .catch(error => {
              console.log('service failure : ' + error);
              loading.dismiss();
            });
        }
      } else {
        loading.dismiss();
        this.gf.warningAlert('REMINDER', 'Device status or removal status cannot be empty.', 'Close');
      }
    } else {
      this.gf.warningAlert('REMINDER', 'Please insert value for the empty fields.', 'Close');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDetailsPage');
    this.lookup();
  }

  /*
   * condition check for zinl and zinr for pmr validation...
   * Author Shandeep Kumar
  */
  onHideShowRegister(event) {
    var counter = 0;
    if (event === "true" || event === true) {
      this.ta0wrgmtrind = 'false';
      this.attr.ta0wrgmtrind = false;
      // Set New Value
      for (var i = 0; i < this.attr.ta0registers.length; i++) {
        var pmr = "";
        var amr = 0;
        for (var j = 0; j < this.attr.ta0registers[i].ta0meterreading.length; j++) {
          if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "PMR") {
            pmr = this.attr.ta0registers[i].ta0meterreading[j].ta0reading;
          }
          if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "AMR") {
            amr = j;
          }
        }
        if (pmr !== null && typeof (pmr) !== 'undefined' && pmr !== "") {
          this.attr.ta0registers[i].ta0meterreading[amr].ta0reading = pmr;
          this.ta0wrgmtrind = 'true';
          this.attr.ta0wrgmtrind = true;
          this.hideShowRegister = false;
        }
        else {
          counter++;
        }
      }
    }
    else {
      this.ta0wrgmtrind = 'false';
      this.attr.ta0wrgmtrind = false;
      this.hideShowRegister = true;
    }

    if (counter > 0) {

      let alert = this.alertCtrl.create({
        title: 'Warning',
        subTitle: 'There will be not having enough data, kindly get update device status',
        buttons: [
          {
            text: 'Dismiss',
            role: 'Dismiss',
            handler: () => {
              this.ta0wrgmtrind = 'false';
              this.attr.ta0wrgmtrind = false;
            }
          }
        ]
      });
      alert.present();
      this.hideShowRegister = true;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  checkUserInputIp(dataEvent) {
    const RegExpsptChamberArray = /^[0-9,.]*$/;
    let newValuesptChamberArray = dataEvent.target.value;
    var newVal2;
    let regExpsptChamberArray = new RegExp(RegExpsptChamberArray);

    if (!regExpsptChamberArray.test(newValuesptChamberArray)) {
      newVal2 = newValuesptChamberArray.substr(0, newValuesptChamberArray.length - 1);
      dataEvent.target.value = newVal2;
    }
    else {
      dataEvent.target.value;
    }
    this.ta0simcardip = dataEvent.target.value;
  }

  checkUserInputNewReading(dataEvent, calculateUsageReading, mRead, dialAfter, dailBefore) {
    var reStoreValue = '';
    var afterDec = [];
    let gotValue = dataEvent.target.value;
    let regExpNewRead = new RegExp("^[0-9.]+$");


    for (var i = 0; i < gotValue.length; i++) {
      if (regExpNewRead.test(gotValue[i])) {
        reStoreValue += gotValue[i];
      }
    }

    if (reStoreValue.includes(".")) {
      afterDec = reStoreValue.split(".");
      if (dialAfter !== 0) {
        for (var j = 1; j < afterDec.length; j++) {
          if (afterDec[j] !== "") {
            if (afterDec[j].length < dialAfter) {
              mRead.ta0reading = afterDec[0] + "." + afterDec[j];
            }
            else {
              mRead.ta0reading = afterDec[0] + "." + afterDec[j].substr(0, dialAfter);
            }
            break;
          }
          else {
            mRead.ta0reading = afterDec[0] + ".";
            break;
          }
        }
      }
      else {
        mRead.ta0reading = afterDec[0];
      }
    }
    else {
      if (reStoreValue.length < dailBefore) {
        mRead.ta0reading = reStoreValue;
      }
      else {
        mRead.ta0reading = reStoreValue.substr(0, dailBefore);
      }
    }

  }

  /**
   * Hide/Show Informations Section
   * Created    : Alif
   * Date       : 15-11-2018
   * Edited     : Ameer (16/11/2018)
   */
  showInformationSection(index) {
    index++;
    if (this.showInformation === false) {
      this.showInformation = true;
    }
    else if (index === 2) {
      this.showInformation = false;
    }
  }

  /**
  * Hide/Show Informations Section
  * Created    : Alif
  * Date       : 15-11-2018
  * Edited     : Alif (16/11/2018)
  */
  showActionSection(index) {
    index++;
    if (this.showAction === false) {
      this.showAction = true;
    } else if (index === 2) {
      this.showAction = false;
    }
  }

  /**
  * Hide/Show Informations Section
  * Created    : Alif
  * Date       : 15-11-2018
  * Edited     : Ameer (16/11/2018)
  */
  showRegisterSection(index) {
    index++;
    if (this.showRegister === false) {
      this.showRegister = true;
    }
    else if (index === 2) {
      this.showRegister = false;
    }
  }

  /**
   * Description  : Trigger IEE Status
   * Created      : 27-7-2022
   * Author       : Andy
   */
   getIEEStatus() {
    console.log("wonum : "+this.itemOri.json.wonum);
    console.log("site id : "+this.itemOri.json.siteid);
    console.log("asset number : "+this.attr.assetnum);
    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);
    this.dataService.IEEStatus(this.itemOri.json.wonum, this.itemOri.json.siteid, this.attr.assetnum).then(results => {
      var respResult: any = results;
      console.log("data : "+JSON.stringify(respResult));
      console.log("failed : "+respResult.failed);
      this.gv.ieeMap.set(this.attr.assetnum,true);
      if(respResult.failed === true) {
        if(respResult.Error === undefined){
          this.gf.warningAlert('Failure', respResult.message, 'Close');  
        } else {
          this.gf.warningAlert('Failure', respResult.Error.message, 'Close');  
        }        
      } else {
        if(respResult.status === 'FAIL') {
          this.gf.warningAlert('Failure', respResult.message, 'Close');           
        } else {
          this.gf.warningAlert('Success', respResult.message, 'Close');           
        }
      }
      loading.dismiss();
    })
    .catch(error => {
      console.log('service failure : ' + JSON.stringify(error));
      loading.dismiss();
    });
  }
}