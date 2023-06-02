import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App, LoadingController, AlertController, Card } from "ionic-angular";

import { FeederDetails } from "./../../../../pojo/FeederDetails";
import { MultiAssetLocci } from "./../../../../pojo/MultiAssetLocci";

import { JsonStoreCrudProvider } from "../../../../providers/common/json-store/json-store-crud";
import { GlobalFunction } from "../../../../providers/common/global-function";


import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";
import { Domains } from "../../../../pojo/commonEnum/Domains";
import { DeviceConstants } from "../../../../pojo/commonEnum/DeviceConstants";
import { FunctionClass } from "../../../../pojo/commonEnum/FunctionClass";
import { DataServiceProvider } from "../../../../providers/data-service/data-service";
import { GlobalVars } from "../../../../providers/common/global-vars";
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { RegisterGroupDetails } from "../../../../pojo/RegisterGroupDetails";

declare var cordova: any;

/**
 * Generated class for the AddDevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-devices",
  templateUrl: "add-devices.html"
})
export class AddDevicesPage {

  item: any;
  assetItem: any;
  indexVal: number;
  soTypes = SoTypes;
  dCons = DeviceConstants;
  fCons = FunctionClass;
  //loc_allocationType: string = null;
  validateDevice: boolean = false;
  validateSimDevice: boolean = false;
  validateModemDevice: boolean = false;
  showAddCT: boolean = true;
  showAddPT: boolean = true;
  showPT: boolean = true;
  ctSection: boolean = true;
  ptSection: boolean = true;


  existingWord: String;
  newWord: String;

  // Clone Data Variables
  itemOri: any;

  windingGroupList: any;
  windingGroupCtList: any;
  windingGroupPtList: any;

  // DeviceListSearch
  deviceList: any;
  pairDevice: any;
  showSearchBtn: boolean = true;
  public checkPt: boolean = false; phaseColorR: boolean = false; phaseColorY: boolean = false; phaseColorB: boolean = false;
  public ctColorR2: boolean = false; ctColorY2: boolean = false; ctColorB2: boolean = false;
  public ctColorR3: boolean = false; ctColorY3: boolean = false; ctColorB3: boolean = false;
  public checkCt: boolean = false;
  public PtColorR: boolean = false; PtColorY: boolean = false; PtColorB: boolean = false;
  public PtColorR2: boolean = false; PtColorY2: boolean = false; PtColorB2: boolean = false;
  public PtColorR3: boolean = false; PtColorY3: boolean = false; PtColorB3: boolean = false;
  public MainSerialNum: boolean = true; allocationType: boolean = true;
  public validationField: boolean = true;
  public validationRequired: boolean = true;
  public selectAllBool: boolean = false;

  spliceFlag: boolean = true;
  loc_currentRatio: any;
  loc_voltageRatio: any;
  public voltageCode: string;
  public deviceVoltage: string;

  public multiAssetLocciArray = [];
  public ta0feeder: any;

  public mainDeviceArray = [];
  public mainModemArray = [];
  public mainSimcardArray = [];

  public checkDeviceArray = [];
  public checkModemArray = [];
  public checkSimcardArray = [];

  // Extra
  public ctDevice0Array = [];
  public ctDevice1Array = [];
  public ctDevice2Array = [];

  // Extra
  public ptDevice0Array = [];
  public ptDevice1Array = [];
  public ptDevice2Array = [];

  //Remove;
  public listRemoveDevice = [];
  public removeDeviceDetails: any;

  // Remove Device Variable
  public multiasset;
  public worktype: string;

  private options: BarcodeScannerOptions;

  // Checking Assetnum Device
  public assetnumArrayList = [];
  public warning: boolean = false;
  public deviceDetails: any;

  public existingContDeviceMap = new Map();

  // Hide Show Section
  private showMain: boolean = true;
  private showCheck: boolean = true;
  private showCt: boolean = true;
  private showPt: boolean = true;

  //Hide Check Section if no check meter available
  public checkMeterNotAvailable: boolean;
  public checkMeterAvailable: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public jsonStoreCrud: JsonStoreCrudProvider,
    private dataService: DataServiceProvider,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    private alertCtrl: AlertController
  ) {
    this.itemOri = this.navParams.get("paramObj");
    this.indexVal = this.navParams.get("paramIndex");
    this.deviceVoltage = this.navParams.get("deviceVoltage");
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('>>>>>>>itemOri : '+JSON.stringify(this.itemOri));
    console.log('>>>>>>>indexVal : '+this.indexVal);
    console.log('>>>>>>>deviceVoltage : '+this.deviceVoltage);
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');

    // Clone Data
    this.item = JSON.parse(JSON.stringify(this.itemOri));

    //Remove Device
    this.removeDeviceDetails = new MultiAssetLocci();
    this.deviceDetails = new MultiAssetLocci();

    // Get ta0installationvoltage
    this.voltageCode = this.item.json.ta0installationvoltage;

    if (this.item.json != null) {
      this.worktype = this.item.json.worktype;
      this.voltageCode = this.item.json.ta0installationvoltage;

      console.log('>>>>>>>worktype : '+this.worktype);
      console.log('>>>>>>>voltageCode : '+this.voltageCode);
      // Collect assetnum
      if (typeof (this.item.json.ta0feeder[this.indexVal].multiassetlocci) !== 'undefined') {
        for (var i = 0; i < this.item.json.ta0feeder[this.indexVal].multiassetlocci.length; i++) {
          this.assetnumArrayList.push(this.item.json.ta0feeder[this.indexVal].multiassetlocci[i].assetnum);
        }
      }
    }

    console.log('>>>>>>>assetnumArrayList : '+JSON.stringify(this.assetnumArrayList));


    //this.voltageCode = "03";
    let SoInstallationVoltage = this.item.json.ta0installationvoltage;
    if (this.deviceVoltage == DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
      this.showPT = false;
      this.showSearchBtn = false;
      this.showCt = true;
    } else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
      this.showPT = true;
      this.showSearchBtn = true;
      this.showCt = true;
    } else {
      this.showPT = false;
      this.showSearchBtn = false;
      this.showCt = false;
    }
    //console.log("multi asset locci " + JSON.stringify(this.item.json.worktype));
    this.item.json.loc_controllingDeviceList = [];
    //this.loc_existingContDeviceMap = [];
    //var existingContDeviceMap  = new Map<number, any>();
    for (var i = 0; i < this.item.json.ta0feeder.length; i++) {
      if (typeof (this.item.json.ta0feeder[i].feederSetDesign) !== 'undefined' && this.item.json.ta0feeder[i].feederSetDesign.length !== 0) {
        var eMeterIndex = this.item.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
        this.existingContDeviceMap.set(i, this.item.json.ta0feeder[i].multiassetlocci[eMeterIndex]);
        
        console.log('>>>>>>>eMeterIndex : '+JSON.stringify(eMeterIndex));
        console.log('>>>>>>>existingContDeviceMap : '+JSON.stringify(this.existingContDeviceMap));


        switch (this.worktype) {
          case SoTypes.ZIST:
          case SoTypes.ZISR: {
            if (typeof (this.item.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined') {
              console.log('createw controlling device for new meter');
              var controllingDevice = {
                feederId: "Feeder Set : " + (i + 1) + " ",
                asssetNum: this.item.json.ta0feeder[i].feederSetDesign[0].nMeter,
                serialNum: this.item.json.ta0feeder[i].feederSetDesign[0].nMeterSerialNum
              }
              this.item.json.loc_controllingDeviceList.push(controllingDevice);
            }
          }
          case SoTypes.ZUDN:
          case SoTypes.ZRPC:
          case SoTypes.ZSRO:
          case SoTypes.ZCER:
          case SoTypes.ZINL:
          case SoTypes.ZINR: {
            console.log('>>>>>>> i : '+i);
            console.log('>>>>>>> this.indexVal : '+this.indexVal);
            if (i !== this.indexVal) {
              console.log('>>>>>>> not match i and this.indexVal');
              if (typeof (this.item.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                && typeof (this.item.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined') {
                var controllingDevice = {
                  feederId: "Feeder Set : " + (i + 1) + " ",
                  asssetNum: this.item.json.ta0feeder[i].feederSetDesign[0].nMeter,
                  serialNum: this.item.json.ta0feeder[i].feederSetDesign[0].nMeterSerialNum
                }
                this.item.json.loc_controllingDeviceList.push(controllingDevice);
              } else if (typeof (this.item.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined') {
                var controllingDevice = {
                  feederId: "Feeder Set : " + (i + 1) + " ",
                  asssetNum: this.item.json.ta0feeder[i].feederSetDesign[0].eMeter,
                  serialNum: this.item.json.ta0feeder[i].feederSetDesign[0].eMeterSerialNum
                }
                this.item.json.loc_controllingDeviceList.push(controllingDevice);
              }
            }
          }
        }
      }

    }

    switch (this.worktype) {
      case SoTypes.ZIST:
      case SoTypes.ZISR: {
        console.log("work  type : " + SoTypes.ZIST);
        /**
         * Check for check meter if available or not
         * Edited by Ameer (27/2/2019)
         */
        if (this.worktype === SoTypes.ZISR) {
          var multiassectlocciLenght = this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci.length;
          for (var i = 0; i < multiassectlocciLenght; i++) {
            if (this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
              this.checkMeterAvailable = true;
              break;
            } else {
              this.checkMeterAvailable = false;
            }
          }
        }

        if (this.item.json.ta0feeder != null) {
          this.createFeederDeviceSet();
          break;
        }
      }
      case SoTypes.ZRMV:
      case SoTypes.ZRCE: {
        if (this.item.json.ta0feeder != null) {
          this.createFeederDeviceSet();
          break;
        }
      }
      case SoTypes.ZUDN:
      case SoTypes.ZRPC:
      case SoTypes.ZSRO:
      case SoTypes.ZCER:
      case SoTypes.ZINL:
      case SoTypes.ZINR: {
        if (this.item.json.ta0feeder != null) {
          this.createFeederDeviceSet();
        }
        break;
      }
      case "D": {
        console.log("Poor");
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddDevicesPage");

    // Declare variables
    var meter_new: any;

    // Checking SoType
    if (this.item.json.worktype !== SoTypes.ZIST) {
      // Checking if current feeder is have available new meter or not
      if (typeof (this.item.json.ta0feeder[this.indexVal]) !== "undefined") {
        meter_new = this.item.json.ta0feeder[this.indexVal].multiassetlocci.filter((item) => {
          return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
        });

        if (meter_new.length > 0) {
          // checking device voltage is available or not
          if (typeof (meter_new[0].ta0devicevoltage) !== "undefined") {
            this.deviceVoltage = meter_new[0].ta0devicevoltage;
          }
        }
      }
    }
    this.lookup();
  }

  removeDeviceResult(resultArray, cont, device, type, soType) {


    let alert = this.alertCtrl.create({
      title: 'Confirm Deletion',
      message: 'Do you want to delete the ' + device + ', While saving ?',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {

            switch (this.itemOri.json.worktype) {
              case SoTypes.ZUDN:
              case SoTypes.ZRPC:
              case SoTypes.ZSRO:
              case SoTypes.ZINL:
              case SoTypes.ZINR:
              case SoTypes.ZINL: {
                for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
                  if (k !== this.indexVal) {
                    if (typeof (this.item.json.ta0feeder[k].feederSetDesign)) {
                      if (typeof (this.item.json.ta0feeder[k].feederSetDesign[0])) {
                        if (typeof (this.item.json.ta0feeder[k].feederSetDesign[0].nMeter) !== 'undefined') {
                          var nMainMeterIndex = this.item.json.ta0feeder[k].feederSetDesign[0].nMeterIndex;
                          console.log("index : " + nMainMeterIndex);
                          if (typeof (this.mainDeviceArray[1]) !== "undefined") {
                            if (this.item.json.ta0feeder[k].multiassetlocci[nMainMeterIndex].ta0controllingdevice === this.mainDeviceArray[1].assetnum) {
                              this.item.json.ta0feeder[k].multiassetlocci[nMainMeterIndex].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
                              console.log("assign New  : " + this.item.json.ta0feeder[k].multiassetlocci[nMainMeterIndex].ta0controllingdevice);
                            }
                          }
                        } else if (typeof (this.item.json.ta0feeder[k].feederSetDesign[0].eMeter) !== 'undefined') {
                          var eMainMeterIndex = this.item.json.ta0feeder[k].feederSetDesign[0].eMeterIndex;
                          console.log("index : " + eMainMeterIndex);
                          if (typeof (this.mainDeviceArray[1]) !== "undefined") {
                            if (this.item.json.ta0feeder[k].multiassetlocci[eMainMeterIndex].ta0controllingdevice === this.mainDeviceArray[1].assetnum) {
                              this.item.json.ta0feeder[k].multiassetlocci[eMainMeterIndex].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
                              console.log("assign Existing  : " + this.item.json.ta0feeder[k].multiassetlocci[eMainMeterIndex].ta0controllingdevice);
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (typeof (this.item.json.ta0feeder[k].feederSetDesign) !== "undefined") {
                      var eMainMeterIndex = this.item.json.ta0feeder[k].feederSetDesign[0].eMeterIndex;
                      var eMainAllocationType = this.item.json.ta0feeder[k].feederSetDesign[0].eMeterAllocationType;

                      if (eMainAllocationType === '90') {
                        var eMainMeterIndex = this.item.json.ta0feeder[k].feederSetDesign[0].eMeterIndex;
                        console.log(" befor : " + this.item.json.ta0feeder[this.indexVal].multiassetlocci[eMainMeterIndex].ta0controllingdevice);
                        this.item.json.ta0feeder[k].multiassetlocci[eMainMeterIndex].ta0controllingdevice = this.item.json.ta0feeder[k].multiassetlocci[eMainMeterIndex].assetnum;
                        console.log(" after assign : " + this.item.json.ta0feeder[this.indexVal].multiassetlocci[eMainMeterIndex].ta0controllingdevice);
                        //assignCheck = true;
                        //break;
                      } else {
                        for (var k1 = 0; k1 < this.item.json.ta0feeder.length; k1++) {
                          for (var l = 0; l < this.item.json.ta0feeder[k1].multiassetlocci.length; l++) {
                            console.log("l : " + l + "   :  " + this.item.json.ta0feeder[k1].multiassetlocci[l].ta0bcrmuploadindicator + "   :   " + this.item.json.ta0feeder[k1].multiassetlocci[l].assetnum);
                            console.log(" assetnum  : " + this.item.json.ta0feeder[k1].multiassetlocci[l].assetnum);
                            console.log("main device arry  : " + this.mainDeviceArray[0].ta0controllingdevice);
                            var assignCheck = false;
                            if (this.item.json.ta0feeder[k1].multiassetlocci[l].ta0bcrmuploadindicator === 'METER_EQUIP' &&
                              this.item.json.ta0feeder[k1].multiassetlocci[l].assetnum === this.mainDeviceArray[0].ta0controllingdevice) {
                              console.log(" old meeter no ..  .");

                              if (typeof (this.item.json.ta0feeder[k1].feederSetDesign[0].nMeter) !== 'undefined') {
                                var nMainMeterIndex = this.item.json.ta0feeder[k1].feederSetDesign[0].nMeterIndex;
                                console.log("index : " + nMainMeterIndex);
                                this.mainDeviceArray[0].ta0controllingdevice = this.item.json.ta0feeder[k1].multiassetlocci[nMainMeterIndex].assetnum;

                              } else if (typeof (this.item.json.ta0feeder[k1].feederSetDesign[0].eMeter) !== 'undefined') {
                                var eMainMeterIndex = this.item.json.ta0feeder[k1].feederSetDesign[0].eMeterIndex;
                                console.log("index : " + eMainMeterIndex);
                                this.mainDeviceArray[0].ta0controllingdevice = this.item.json.ta0feeder[k1].multiassetlocci[eMainMeterIndex].assetnum;
                              }

                              assignCheck = true;
                              break;
                            }
                            if (assignCheck) {
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }


            // GUI Changes...
            if ((type == 'main') && (device == 'meter')) {
              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'main') && (device == 'modem')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'main') && (device == 'sim')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'check') && (device == 'meter')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'check') && (device == 'modem')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'check') && (device == 'sim')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'R') && (device == 'ct')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'Y') && (device == 'ct')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'B') && (device == 'ct')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'R') && (device == 'pt')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'Y') && (device == 'pt')) {

              this.checkControlOptions(soType, resultArray, cont);
            }
            if ((type == 'B') && (device == 'pt')) {

              this.checkControlOptions(soType, resultArray, cont);
            }

            // Lookup
            this.lookup();
          }
        }
      ]
    });
    alert.present();
  }

  checkControlOptions(soType, container, cont) {


    this.removeDeviceDetails = {};

    this.removeDeviceDetails.wonum = this.item.json.wonum;
    this.removeDeviceDetails.ta0feederid = this.item.json.ta0feeder[this.indexVal].ta0feederid;
    this.removeDeviceDetails.assetnum = container[cont].assetnum;
    this.removeDeviceDetails.loc_multiassetlocci_haveRemove = true;
    this.listRemoveDevice.push(this.removeDeviceDetails);

    /** Remove Assetnum for Checking List */
    var assetnum = container[cont].assetnum;
    var devices = JSON.parse(JSON.stringify(this.item.json.listDevice));

    var deviceIndex = devices.findIndex((item) => {
      return item.assetnum === assetnum;
    });

    if (typeof (deviceIndex) !== "undefined" || deviceIndex !== "") {
      if (deviceIndex !== -1) {
        // Remove the assetnum.
        this.item.json.listDevice.splice(deviceIndex, 1);
      }
    }

    // Reset Trigger AllocationType
    if (container[0].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
      this.item.json.loc_allocationtype_status = false;
    } else {
      this.item.json.loc_allocationtype_status = true;
    }

    var container;
    if (soType === SoTypes.ZSRO || soType === SoTypes.ZCER || soType === SoTypes.ZINR || soType === SoTypes.ZINL) {
      container.splice(cont, 1);
      container[0].ta0replaceind = false;
      // Remove Device Status
      container[0].ta0systemstatus = "D";
      if (typeof (container[0].ta0devicestatus) !== "undefined") {
        for (var i = 0; i < container[0].ta0devicestatus.length; i++) {
          container[0].ta0devicestatus[i]._action = "Delete";
        }
      }
    }
    if (soType === SoTypes.ZUDN || soType === SoTypes.ZRPC) {
      if ((typeof (container[0].assetnum) !== 'undefined') && container[0].assetnum !== '' && container[0].assetnum !== null ||
        typeof (container[0].ta0serialnum) !== "undefined" && container[0].ta0serialnum !== '' && container[0].ta0serialnum !== null) {
        //Having existing device...
        container.splice(cont, 1);
        container[0].ta0removeind = false;
        // Remove Device Status
        container[0].ta0systemstatus = "D";
        if (typeof (container[0].ta0devicestatus) !== "undefined") {
          for (var i = 0; i < container[0].ta0devicestatus.length; i++) {
            container[0].ta0devicestatus[i]._action = "Delete";
          }
        }
      } else {
        // no existing device...
        if (container[1].devicetype === "ct" || container[1].devicetype === "pt") {
          container[1].assetnum = null;
          container[1].ta0serialnum = null;
          // container[1].ta0allocationtype = null;
          container[1].ta0controllingdevice = null;
          container[1].ta0existingdevice = null;
          // Additional Field
          container[1].ta0modelid = null;
          container[1].ta0va = null;
          container[1].ta0currentratio = null;
          container[1].loc_ta0currentratio = null;
        } else {
          container[1].assetnum = null;
          container[1].ta0serialnum = null;
          // container[1].ta0allocationtype = null;
          container[1].ta0controllingdevice = null;
          container[1].ta0existingdevice = null;
        }

        // container[0].ta0removeind = true;
      }
    }
    if (soType === SoTypes.ZRMV || soType === SoTypes.ZINR) {
      container[0].ta0removeind = false;
      // Remove Device Status
      container[0].ta0systemstatus = "D";
      if (typeof (container[0].ta0devicestatus) !== "undefined") {
        for (var i = 0; i < container[0].ta0devicestatus.length; i++) {
          container[0].ta0devicestatus[i]._action = "Delete";
        }
      }
      container.splice(cont, 1);
    }
    if (soType === SoTypes.ZIST || soType === SoTypes.ZISR) {
      if (container[0].devicetype === "ct" || container[0].devicetype === "pt") { // Clearing for CT & PT section
        container[0].ta0existingdevice = null;
        container[0].assetnum = null;
        container[0].ta0serialnum = null;
        // container[0].ta0allocationtype = null;
        container[0].ta0controllingdevice = null;
        container[0].ta0removeind = false;
        // Additional Field
        container[0].ta0modelid = null;
        container[0].ta0va = null;
        container[0].ta0currentratio = null;
        container[0].loc_ta0currentratio = null;
      } else {
        container[0].ta0existingdevice = null;
        container[0].assetnum = null;
        container[0].ta0serialnum = null;
        // container[0].ta0allocationtype = null;
        container[0].ta0controllingdevice = null;
        container[0].ta0removeind = false;
        /**
         * Description: reset data testing and data sil sticker.
         * Created    : Alif (12.09.2019)
         */
        container[0].ta0testdetail = [];
        container[0].ta0silsticker = [];
      }
      // container.splice(cont, 1);
    }
  }

  createFeederDeviceSet() {
    console.log('>>>>>>>>>>>>>>> access createFeederDeviceSet');
    console.log("work type : " + this.item.json.worktype);
    console.log("indexVal : " + this.indexVal);


    var ta0InstallationInd = null;
    if (SoTypes.ZIST === this.item.json.worktype) {
      ta0InstallationInd = true;
    } else {
      ta0InstallationInd = false;
    }

    var feeder = this.item.json.ta0feeder[this.indexVal];
    var deviceDetails = new MultiAssetLocci();
    deviceDetails.devicetype = 'main';
    deviceDetails.ta0installind = ta0InstallationInd;
    this.mainDeviceArray[0] = deviceDetails;
    

    var deviceDetails = new MultiAssetLocci();
    deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
    deviceDetails.ta0installind = ta0InstallationInd;
    this.mainModemArray[0] = deviceDetails;

    var deviceDetails = new MultiAssetLocci();
    deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
    deviceDetails.ta0installind = ta0InstallationInd;
    this.mainSimcardArray[0] = deviceDetails;

    var deviceDetails = new MultiAssetLocci();
    deviceDetails.devicetype = 'check';
    deviceDetails.ta0installind = ta0InstallationInd;
    this.checkDeviceArray[0] = deviceDetails;

    var deviceDetails = new MultiAssetLocci();
    deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
    deviceDetails.ta0installind = ta0InstallationInd;
    this.checkModemArray[0] = deviceDetails;

    var deviceDetails = new MultiAssetLocci();
    deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
    deviceDetails.ta0installind = ta0InstallationInd;
    this.checkSimcardArray[0] = deviceDetails;

    console.log('>>>>>>>>>>>>>>> mainDeviceArray : '+JSON.stringify(this.mainDeviceArray));
    console.log('>>>>>>>>>>>>>>> mainModemArray : '+JSON.stringify(this.mainModemArray));
    console.log('>>>>>>>>>>>>>>> mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));
    console.log('>>>>>>>>>>>>>>> checkDeviceArray : '+JSON.stringify(this.checkDeviceArray));
    console.log('>>>>>>>>>>>>>>> checkModemArray : '+JSON.stringify(this.checkModemArray));
    console.log('>>>>>>>>>>>>>>> checkSimcardArray : '+JSON.stringify(this.checkSimcardArray));

    if (this.deviceVoltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {

      // CTTFR
      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'R';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
      this.ctDevice0Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'Y';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
      this.ctDevice1Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'B';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
      this.ctDevice2Array[0] = ctDeviceDetail;

      console.log('>>>>>>>>>>>>>>> ctDevice0Array : '+JSON.stringify(this.ctDevice0Array));
      console.log('>>>>>>>>>>>>>>> ctDevice1Array : '+JSON.stringify(this.ctDevice1Array));
      console.log('>>>>>>>>>>>>>>> ctDevice2Array : '+JSON.stringify(this.ctDevice2Array));

    } else {
      // CTDIR
      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'R';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTDIR;
      if (ta0InstallationInd === true) {
        ctDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ctDevice0Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'Y';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTDIR;
      if (ta0InstallationInd === true) {
        ctDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ctDevice1Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'B';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTDIR;
      if (ta0InstallationInd === true) {
        ctDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ctDevice2Array[0] = ctDeviceDetail;

      // VTDIR
      var ptDeviceDetail = new MultiAssetLocci();
      ptDeviceDetail.devicetype = 'pt';
      ptDeviceDetail.ta0installind = ta0InstallationInd;
      ptDeviceDetail.ta0ctptphase = 'R';
      ptDeviceDetail.ta0allocationtype = '86';
      ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
      if (ta0InstallationInd === true) {
        ptDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ptDevice0Array[0] = ptDeviceDetail;

      var ptDeviceDetail = new MultiAssetLocci();
      ptDeviceDetail.devicetype = 'pt';
      ptDeviceDetail.ta0installind = ta0InstallationInd;
      ptDeviceDetail.ta0ctptphase = 'Y';
      ptDeviceDetail.ta0allocationtype = '86';
      ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
      if (ta0InstallationInd === true) {
        ptDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ptDevice1Array[0] = ptDeviceDetail;

      var ptDeviceDetail = new MultiAssetLocci();
      ptDeviceDetail.devicetype = 'pt';
      ptDeviceDetail.ta0installind = ta0InstallationInd;
      ptDeviceDetail.ta0ctptphase = 'B';
      ptDeviceDetail.ta0allocationtype = '86';
      ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
      if (ta0InstallationInd === true) {
        ptDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ptDevice2Array[0] = ptDeviceDetail;

      console.log('>>>>>>>>>>>>>>> ctDevice0Array : '+JSON.stringify(this.ctDevice0Array));
      console.log('>>>>>>>>>>>>>>> ctDevice1Array : '+JSON.stringify(this.ctDevice1Array));
      console.log('>>>>>>>>>>>>>>> ctDevice2Array : '+JSON.stringify(this.ctDevice2Array));
      console.log('>>>>>>>>>>>>>>> ptDevice0Array : '+JSON.stringify(this.ptDevice0Array));
      console.log('>>>>>>>>>>>>>>> ptDevice1Array : '+JSON.stringify(this.ptDevice1Array));
      console.log('>>>>>>>>>>>>>>> ptDevice2Array : '+JSON.stringify(this.ptDevice2Array));

    }
    this.assignFeederSet(feeder);
    //break;
  }

  /**
   * Reason   : Method to re-create field for ct pt after changing device either LV or MVHV.
   * Created  : Alif (23/05/2019)
   */
  createFeederDeviceSetCtPt() {
    var ta0InstallationInd = null;
    if (SoTypes.ZIST === this.item.json.worktype) {
      ta0InstallationInd = true;
    } else {
      ta0InstallationInd = false;
    }

    var feeder = this.item.json.ta0feeder[this.indexVal];

    if (this.deviceVoltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {

      // CTTFR
      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'R';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
      this.ctDevice0Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'Y';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
      this.ctDevice1Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'B';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
      this.ctDevice2Array[0] = ctDeviceDetail;
    } else {
      // CTDIR
      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'R';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTDIR;
      if (ta0InstallationInd === true) {
        ctDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ctDevice0Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'Y';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTDIR;
      if (ta0InstallationInd === true) {
        ctDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ctDevice1Array[0] = ctDeviceDetail;

      var ctDeviceDetail = new MultiAssetLocci();
      ctDeviceDetail.devicetype = 'ct';
      ctDeviceDetail.ta0installind = ta0InstallationInd;
      ctDeviceDetail.ta0ctptphase = 'B';
      ctDeviceDetail.ta0allocationtype = '86';
      ctDeviceDetail.ta0functionclass = this.fCons.CTDIR;
      if (ta0InstallationInd === true) {
        ctDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ctDevice2Array[0] = ctDeviceDetail;

      // VTDIR
      var ptDeviceDetail = new MultiAssetLocci();
      ptDeviceDetail.devicetype = 'pt';
      ptDeviceDetail.ta0installind = ta0InstallationInd;
      ptDeviceDetail.ta0ctptphase = 'R';
      ptDeviceDetail.ta0allocationtype = '86';
      ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
      if (ta0InstallationInd === true) {
        ptDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ptDevice0Array[0] = ptDeviceDetail;

      var ptDeviceDetail = new MultiAssetLocci();
      ptDeviceDetail.devicetype = 'pt';
      ptDeviceDetail.ta0installind = ta0InstallationInd;
      ptDeviceDetail.ta0ctptphase = 'Y';
      ptDeviceDetail.ta0allocationtype = '86';
      ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
      if (ta0InstallationInd === true) {
        ptDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ptDevice1Array[0] = ptDeviceDetail;

      var ptDeviceDetail = new MultiAssetLocci();
      ptDeviceDetail.devicetype = 'pt';
      ptDeviceDetail.ta0installind = ta0InstallationInd;
      ptDeviceDetail.ta0ctptphase = 'B';
      ptDeviceDetail.ta0allocationtype = '86';
      ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
      if (ta0InstallationInd === true) {
        ptDeviceDetail.ta0systemstatus = "AVLB";
      }
      this.ptDevice2Array[0] = ptDeviceDetail;

    }
    this.assignFeederSetCtPt(feeder);
    this.lookup();
    //break;
  }

  assignFeederSet(multiAsset) {
    console.log('Access assignFeederSet');
    console.log('>>>>>>>>>>>>>multiAsset : '+JSON.stringify(multiAsset));
    var mCount = 0;
    var mmCount = 0;
    var msCount = 0;
    var cmCount = 0;
    var csCount = 0;
    var cCount = 0;
    var ctCount0 = 0;
    var ctCount1 = 0;
    var ctCount2 = 0;
    var ptCount0 = 0;
    var ptCount1 = 0;
    var ptCount2 = 0;

    if (multiAsset.multiassetlocci === 'undefined') {
      console.log('came inside to undefined . ');
    }

    if (typeof (multiAsset.multiassetlocci) !== null && typeof (multiAsset.multiassetlocci) !== 'undefined') {
      if (multiAsset.multiassetlocci.length != 0) {
        console.log("multiassetlocci length : " + multiAsset.multiassetlocci.length);
        var mainDeviceId = this.checkFeederMainMeterControllingDevice(multiAsset);
        //console.log(" i : " + JSON.stringify(multiAsset.multiassetlocci[i]));
        for (var i = 0; i < multiAsset.multiassetlocci.length; i++) {
          
          var indicator = multiAsset.multiassetlocci[i].ta0bcrmuploadindicator;

          
          console.log("ta0serialnum: " + multiAsset.multiassetlocci[i].ta0serialnum);
          console.log("ta0functionclass: " + multiAsset.multiassetlocci[i].ta0functionclass);
          console.log("ta0allocationtype: " + multiAsset.multiassetlocci[i].ta0allocationtype);
          console.log("ta0bcrmuploadindicator: " + multiAsset.multiassetlocci[i].ta0bcrmuploadindicator);

          // Adding allocation type is missing for CT and PT
          if ((typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.CTDIR) ||
            (typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.VTDIR) ||
            (typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.CTTFR) ||
            (typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.PTTFR)) {
            multiAsset.multiassetlocci[i].ta0allocationtype = DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
          }

          switch (multiAsset.multiassetlocci[i].ta0allocationtype) {
            case DeviceConstants.DEV_ALLOC_MAIN_METER: {
              if (DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                mCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                mCount = 0
              }
              else {
                mCount = 1
              }
              this.mainDeviceArray[mCount] = multiAsset.multiassetlocci[i];
              this.mainDeviceArray[mCount].devicetype = 'main';
              this.pairDevice = multiAsset.multiassetlocci[i].ta0allocationtype;

              // this.mainDeviceArray[mCount].siteid = multiAsset.multiassetlocci[i].siteid;
              // this.mainDeviceArray[mCount].ta0existingdevice = 'true';
              // mCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_SUB_METER: {
              if (DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                mCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                mCount = 0
              }
              else {
                mCount = 1
              }
              this.mainDeviceArray[mCount] = multiAsset.multiassetlocci[i];
              this.mainDeviceArray[mCount].devicetype = 'main';
              //this.mainDeviceArray[mCount].ta0existingdevice = 'true';
              this.pairDevice = multiAsset.multiassetlocci[i].ta0allocationtype;
              //mCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_FEEDER_METER: {
              if (DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                mCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                mCount = 0
              }
              else {
                mCount = 1
              }
              this.mainDeviceArray[mCount] = multiAsset.multiassetlocci[i];
              this.mainDeviceArray[mCount].devicetype = 'main';
              this.pairDevice = multiAsset.multiassetlocci[i].ta0allocationtype;
              //mCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER: {
              if (DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                mCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_MAIN === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                mCount = 0
              }
              else {
                mCount = 1
              }
              this.mainDeviceArray[mCount] = multiAsset.multiassetlocci[i];
              this.mainDeviceArray[mCount].devicetype = 'main';
              this.pairDevice = multiAsset.multiassetlocci[i].ta0allocationtype;
              //mCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_CHECK_METER: {

              if (DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                cCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                cCount = 0
              }
              else {
                cCount = 1
              }

              this.checkDeviceArray[cCount] = multiAsset.multiassetlocci[i];
              this.checkDeviceArray[cCount].devicetype = 'check';
              //cCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_CHECK_SUB_METER: {

              if (DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                cCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                cCount = 0
              }
              else {
                cCount = 1
              }
              this.checkDeviceArray[cCount] = multiAsset.multiassetlocci[i];
              this.checkDeviceArray[cCount].devicetype = 'check';
              //cCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_CHECK_SUB_FEEDER_METER: {

              if (DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                cCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                cCount = 0
              }
              else {
                cCount = 1
              }
              this.checkDeviceArray[cCount] = multiAsset.multiassetlocci[i];
              this.checkDeviceArray[cCount].devicetype = 'check';
              //cCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_CHECK_FEEDER_METER: {

              if (DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                cCount = 0
              } else if (DeviceConstants.BCRM_NEW_INDICATOR_CHECK === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator && (SoTypes.ZIST === this.item.json.worktype || SoTypes.ZISR === this.item.json.worktype)) {
                cCount = 0
              }
              else {
                cCount = 1
              }
              this.checkDeviceArray[cCount] = multiAsset.multiassetlocci[i];
              this.checkDeviceArray[cCount].devicetype = 'check';
              //cCount++;
              break;
            }
            case DeviceConstants.DEV_ALLOC_MODEM: {
              console.log('modem device allocation : '+DeviceConstants.DEV_ALLOC_MODEM);
              console.log('mmCount : '+mmCount);

              if (DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator || DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                console.log('existing or new main meter');
                //if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD && (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZUDN)) {
                if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD ) {
                  this.mainModemArray[1] = multiAsset.multiassetlocci[i];
                  this.mainModemArray[1].devicetype = "main";
                  //mmCount++;
                } else {
                  this.mainModemArray[mmCount] = multiAsset.multiassetlocci[i];
                  this.mainModemArray[mmCount].devicetype = "main";
                  mmCount++;
                }
              } else {
                console.log('existing or new check meter');
                //if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD && (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZUDN)) {
                if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD ) {
                  this.checkModemArray[1] = multiAsset.multiassetlocci[i];
                  this.checkModemArray[1].devicetype = "check";
                  //cmCount++;
                } else {
                  this.checkModemArray[cmCount] = multiAsset.multiassetlocci[i];
                  this.checkModemArray[cmCount].devicetype = "check";
                  cmCount++;
                }
              }

              console.log('this.mainModemArray : '+JSON.stringify(this.mainModemArray));
              console.log('this.checkModemArray : '+JSON.stringify(this.checkModemArray));
              break;
            }
            case DeviceConstants.DEV_ALLOC_SIM_CARD: {
              if (DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator || DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM === multiAsset.multiassetlocci[i].ta0bcrmuploadindicator) {
                //if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM && (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZUDN)) {
                if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM ) {
                  this.mainSimcardArray[1] = multiAsset.multiassetlocci[i];
                  this.mainSimcardArray[1].devicetype = "main";
                  //mmCount++;
                } else {
                  this.mainSimcardArray[msCount] = multiAsset.multiassetlocci[i];
                  this.mainSimcardArray[msCount].devicetype = "main";
                  msCount++;
                }

              } else {
                //if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM && (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZUDN)) {
                if (multiAsset.multiassetlocci[i].ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM) {
                  this.checkSimcardArray[1] = multiAsset.multiassetlocci[i];
                  this.checkSimcardArray[1].devicetype = "check";
                  //csCount++;
                } else {
                  this.checkSimcardArray[csCount] = multiAsset.multiassetlocci[i];
                  this.checkSimcardArray[csCount].devicetype = "check";
                  csCount++;
                }
              }
              console.log('this.checkSimcardArray : '+JSON.stringify(this.checkSimcardArray));
              console.log('this.checkSimcardArray : '+JSON.stringify(this.checkSimcardArray));
              break;
            }
            case DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER: {

              switch (indicator) {
                case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT: {
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  if (ctCount0 == 0) {
                    this.ctDevice0Array[ctCount0] = multiAsset.multiassetlocci[i];
                    this.ctDevice0Array[ctCount0].devicetype = "ct";
                    this.ctDevice0Array[ctCount0].loc_windingGroup = locWindingGroup;
                    var ct = 'ct_0';
                    // this.convertStringToArray(locWindingGroup, ct);
                    this.autoPopulateValueCtPt(this.ctDevice0Array[ctCount0], 'ct_0');
                    ctCount0++;
                  } else if (ctCount1 == 0) {
                    this.ctDevice1Array[ctCount1] = multiAsset.multiassetlocci[i];
                    this.ctDevice1Array[ctCount1].devicetype = "ct";
                    this.ctDevice1Array[ctCount1].loc_windingGroup = locWindingGroup;
                    var ct = 'ct_1';
                    // this.convertStringToArray(locWindingGroup, ct);
                    this.autoPopulateValueCtPt(this.ctDevice1Array[ctCount1], 'ct_1');
                    ctCount1++;
                  } else if (ctCount2 == 0) {
                    this.ctDevice2Array[ctCount2] = multiAsset.multiassetlocci[i];
                    this.ctDevice2Array[ctCount2].devicetype = "ct";
                    this.ctDevice2Array[ctCount2].loc_windingGroup = locWindingGroup;
                    var ct = 'ct_2';
                    // this.convertStringToArray(locWindingGroup, ct);
                    this.autoPopulateValueCtPt(this.ctDevice2Array[ctCount2], 'ct_2');
                    ctCount2++;
                  }
                  break;
                }
                // Problem with delete button for new added..
                case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT: {
                  var checkVal = 0;
                  if (SoTypes.ZIST === this.item.json.worktype) {
                    checkVal = 0;
                  } else {
                    checkVal = 1;
                  }
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  //  ctCount0 == checkVal
                  //  ctCount1 == checkVal
                  //  ctCount2 == checkVal
                  if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'R') {
                    this.ctDevice0Array[checkVal] = multiAsset.multiassetlocci[i];
                    this.ctDevice0Array[checkVal].devicetype = "ct";
                    this.ctDevice0Array[checkVal].loc_windingGroup = locWindingGroup;
                    //ctCount0++;
                    this.autoPopulateValueCtPt(this.ctDevice0Array[checkVal], 'ct_0');
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'Y') {
                    this.ctDevice1Array[checkVal] = multiAsset.multiassetlocci[i];
                    this.ctDevice1Array[checkVal].devicetype = "ct";
                    this.ctDevice1Array[checkVal].loc_windingGroup = locWindingGroup;
                    //ctCount1++;
                    this.autoPopulateValueCtPt(this.ctDevice1Array[checkVal], 'ct_1');
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'B') {
                    this.ctDevice2Array[checkVal] = multiAsset.multiassetlocci[i];
                    this.ctDevice2Array[checkVal].devicetype = "ct";
                    this.ctDevice2Array[checkVal].loc_windingGroup = locWindingGroup;
                    //ctCount2++;
                    this.autoPopulateValueCtPt(this.ctDevice2Array[checkVal], 'ct_2');
                  }
                  break;
                }

                case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT: {
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  if (ptCount0 === 0) {
                    this.ptDevice0Array[0] = multiAsset.multiassetlocci[i];
                    this.ptDevice0Array[0].devicetype = "pt";
                    this.ptDevice0Array[0].loc_windingGroup = locWindingGroup;
                    var pt = 'pt_0';
                    // this.convertStringToArray(locWindingGroup, pt);
                    this.autoPopulateValueCtPt(this.ptDevice0Array[0], 'pt_0');
                    ptCount0++;
                  } else if (ptCount1 === 0) {
                    this.ptDevice1Array[0] = multiAsset.multiassetlocci[i];
                    this.ptDevice1Array[0].devicetype = "pt";
                    this.ptDevice1Array[0].loc_windingGroup = locWindingGroup;
                    var pt = 'pt_1';
                    // this.convertStringToArray(locWindingGroup, pt);
                    this.autoPopulateValueCtPt(this.ptDevice1Array[0], 'pt_1');
                    ptCount1++;
                  } else if (ptCount2 === 0) {
                    this.ptDevice2Array[0] = multiAsset.multiassetlocci[i];
                    this.ptDevice2Array[0].devicetype = "pt";
                    this.ptDevice2Array[0].loc_windingGroup = locWindingGroup;
                    var pt = 'pt_2';
                    // this.convertStringToArray(locWindingGroup, pt);
                    this.autoPopulateValueCtPt(this.ptDevice2Array[0], 'pt_2');
                    ptCount2++;
                  }
                  break;
                }

                case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT: {
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  var checkPtVal = 0
                  if (SoTypes.ZIST === this.item.json.worktype) {
                    checkPtVal = 0;
                  } else {
                    checkPtVal = 1;
                  }
                  if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'R') {
                    this.ptDevice0Array[checkPtVal] = multiAsset.multiassetlocci[i];
                    this.ptDevice0Array[checkPtVal].devicetype = "pt";
                    this.ptDevice0Array[checkPtVal].loc_windingGroup = locWindingGroup;
                    this.autoPopulateValueCtPt(this.ptDevice0Array[checkPtVal], 'pt_0');
                    //ptCount0++;
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'Y') {
                    this.ptDevice1Array[checkPtVal] = multiAsset.multiassetlocci[i];
                    this.ptDevice1Array[checkPtVal].devicetype = "pt";
                    this.ptDevice1Array[checkPtVal].loc_windingGroup = locWindingGroup;
                    this.autoPopulateValueCtPt(this.ptDevice1Array[checkPtVal], 'pt_1');
                    //ptCount1++;
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'B') {
                    this.ptDevice2Array[checkPtVal] = multiAsset.multiassetlocci[i];
                    this.ptDevice2Array[checkPtVal].devicetype = "pt";
                    this.ptDevice2Array[checkPtVal].loc_windingGroup = locWindingGroup;
                    this.autoPopulateValueCtPt(this.ptDevice2Array[checkPtVal], 'pt_2');
                    //ptCount2++;
                  }
                  break;
                }
              }
              break;
            }
          }
        }
        this.assignCheckMeterAllocationType();
      }
    }

    if (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZUDN) {

      if (typeof (this.mainDeviceArray[0].assetnum) === 'undefined') {
        if (this.mainDeviceArray.length === 1) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0installind = true;
          this.mainDeviceArray[1] = deviceDetails;
        }
      } else if (typeof (this.mainDeviceArray[0].assetnum) !== 'undefined') {
        if (this.mainDeviceArray.length === 1 && this.mainDeviceArray[0].ta0removeind) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0installind = true;
          this.mainDeviceArray[1] = deviceDetails;
        }
      }

      if (typeof (this.mainModemArray[0].assetnum) === 'undefined') {
        console.log('********* this.mainModemArray[0] IS undefined ');
        if (this.mainModemArray.length === 1) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
          deviceDetails.ta0installind = true;
          this.mainModemArray[1] = deviceDetails;          
        }
        console.log('********* this.mainModemArray[1] : '+JSON.stringify(this.mainModemArray));

      } else if (typeof (this.mainModemArray[0].assetnum) !== 'undefined') {
        console.log('********* this.mainModemArray[0] NOT undefined ');
        if (this.mainModemArray.length === 1 && this.mainModemArray[0].ta0removeind) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
          deviceDetails.ta0installind = true;
          this.mainModemArray[1] = deviceDetails;
        }
        console.log('********* this.mainModemArray[1] : '+JSON.stringify(this.mainModemArray));
      }

      

      if (typeof (this.mainSimcardArray[0].assetnum) === 'undefined') {
        if (this.mainSimcardArray.length === 1) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
          deviceDetails.ta0installind = true;
          this.mainSimcardArray[1] = deviceDetails;
        }
        console.log('********* this.mainSimcardArray[1] : '+JSON.stringify(this.mainSimcardArray));
        
      } else if (typeof (this.mainSimcardArray[0].assetnum) !== 'undefined') {
        if (this.mainSimcardArray.length === 1 && this.mainSimcardArray[0].ta0removeind) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
          deviceDetails.ta0installind = true;
          this.mainSimcardArray[1] = deviceDetails;
        }
        console.log('********* this.mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));
      }
      
      

      if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {

        if (typeof (this.checkDeviceArray[0].assetnum) === 'undefined') {
          if (this.checkDeviceArray.length === 1) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0installind = true;
            this.checkDeviceArray[1] = deviceDetails;
          }
        } else if (typeof (this.checkDeviceArray[0].assetnum) !== 'undefined') {
          if (this.checkDeviceArray.length === 1 && this.checkDeviceArray[0].ta0removeind) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0installind = true;
            this.checkDeviceArray[1] = deviceDetails;
          }
        }

        if (typeof (this.checkModemArray[0].assetnum) === 'undefined') {
          console.log('********* this.checkModemArray[0] IS undefined ');
          if (this.checkModemArray.length === 1) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
            deviceDetails.ta0installind = true;
            this.checkModemArray[1] = deviceDetails;
          }

          console.log('********* this.checkModemArray[1] : '+JSON.stringify(this.checkModemArray));

        } else if (typeof (this.checkModemArray[0].assetnum) !== 'undefined') {
          console.log('********* this.checkModemArray[0] NOT undefined ');
          if (this.checkModemArray.length === 1 && this.checkModemArray[0].ta0removeind) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
            deviceDetails.ta0installind = true;
            this.checkModemArray[1] = deviceDetails;
          }

          console.log('********* this.checkModemArray[1] : '+JSON.stringify(this.checkModemArray));
        }

        if (typeof (this.checkSimcardArray[0].assetnum) === 'undefined') {
          console.log('********* this.checkSimcardArray[0] IS undefined ');
          if (this.checkSimcardArray.length === 1) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
            deviceDetails.ta0installind = true;
            this.checkSimcardArray[1] = deviceDetails;
          }

          console.log('********* this.checkSimcardArray[1] : '+JSON.stringify(this.checkSimcardArray));

        } else if (typeof (this.checkSimcardArray[0].assetnum) !== 'undefined') {
          console.log('********* this.checkSimcardArray[0] NOT undefined ');
          if (this.checkSimcardArray.length === 1 && this.checkSimcardArray[0].ta0removeind) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
            deviceDetails.ta0installind = true;
            this.checkSimcardArray[1] = deviceDetails;
          }
          console.log('********* this.checkSimcardArray[1] : '+JSON.stringify(this.checkSimcardArray));
        }

        if (typeof (this.ctDevice0Array[0].assetnum) === 'undefined') {
          if (this.ctDevice0Array.length === 1) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice0Array[1] = ctDeviceDetail;
          }
        } else if (typeof (this.ctDevice0Array[0].assetnum) !== 'undefined') {
          if (this.ctDevice0Array.length === 1 && this.ctDevice0Array[0].ta0removeind) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice0Array[1] = ctDeviceDetail;
          }
        }

        if (typeof (this.ctDevice1Array[0].assetnum) === 'undefined') {
          if (this.ctDevice1Array.length === 1) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'Y';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice1Array[1] = ctDeviceDetail;
          }
        } else if (typeof (this.ctDevice1Array[0].assetnum) !== 'undefined') {
          if (this.ctDevice1Array.length === 1 && this.ctDevice1Array[0].ta0removeind) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice1Array[1] = ctDeviceDetail;
          }
        }

        if (typeof (this.ctDevice2Array[0].assetnum) === 'undefined') {
          if (this.ctDevice2Array.length === 1) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'B';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice2Array[1] = ctDeviceDetail;
          }
        } else if (typeof (this.ctDevice2Array[0].assetnum) !== 'undefined') {
          if (this.ctDevice2Array.length === 1 && this.ctDevice2Array[0].ta0removeind) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice2Array[1] = ctDeviceDetail;
          }
        }

      }

      console.log(' new voltage level : ' + this.item.json.ta0newvoltage);


      if (this.item.json.ta0newvoltage > 3 || this.item.json.ta0installationvoltage > 3) {
        this.showPT = true;
        if (typeof (this.ptDevice0Array[0]) === 'undefined') {
          var ptDeviceDetail = new MultiAssetLocci();
          ptDeviceDetail.devicetype = 'pt';
          ptDeviceDetail.ta0ctptphase = 'R';
          ptDeviceDetail.ta0allocationtype = '86';
          ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
          ptDeviceDetail.ta0systemstatus = "AVLB";
          this.ptDevice0Array[0] = ptDeviceDetail;
        }

        if (typeof (this.ptDevice0Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
          if (this.ptDevice0Array.length === 1) {
            var ptDeviceDetail = new MultiAssetLocci();
            ptDeviceDetail.devicetype = 'pt';
            ptDeviceDetail.ta0installind = true;
            ptDeviceDetail.ta0ctptphase = 'R';
            ptDeviceDetail.ta0allocationtype = '86';
            ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
            ptDeviceDetail.ta0systemstatus = "AVLB";
            this.ptDevice0Array[1] = ptDeviceDetail;
          }
        }


        if (typeof (this.ptDevice1Array[0]) === 'undefined') {
          var ptDeviceDetail = new MultiAssetLocci();
          ptDeviceDetail.devicetype = 'pt';
          ptDeviceDetail.ta0ctptphase = 'R';
          ptDeviceDetail.ta0allocationtype = '86';
          ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
          ptDeviceDetail.ta0systemstatus = "AVLB";
          this.ptDevice1Array[0] = ptDeviceDetail;
        }

        if (typeof (this.ptDevice1Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
          if (this.ptDevice1Array.length === 1) {
            var ptDeviceDetail = new MultiAssetLocci();
            ptDeviceDetail.devicetype = 'pt';
            ptDeviceDetail.ta0installind = true;
            ptDeviceDetail.ta0ctptphase = 'Y';
            ptDeviceDetail.ta0allocationtype = '86';
            ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
            ptDeviceDetail.ta0systemstatus = "AVLB";
            this.ptDevice1Array[1] = ptDeviceDetail;
          }
        }


        if (typeof (this.ptDevice2Array[0]) === 'undefined') {
          var ptDeviceDetail = new MultiAssetLocci();
          ptDeviceDetail.devicetype = 'pt';
          ptDeviceDetail.ta0ctptphase = 'R';
          ptDeviceDetail.ta0allocationtype = '86';
          ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
          ptDeviceDetail.ta0systemstatus = "AVLB";
          this.ptDevice2Array[0] = ptDeviceDetail;
        }

        if (typeof (this.ptDevice2Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
          if (this.ptDevice2Array.length === 1) {
            var ptDeviceDetail = new MultiAssetLocci();
            ptDeviceDetail.devicetype = 'pt';
            ptDeviceDetail.ta0installind = true;
            ptDeviceDetail.ta0ctptphase = 'B';
            ptDeviceDetail.ta0allocationtype = '86';
            ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
            ptDeviceDetail.ta0systemstatus = "AVLB";
            this.ptDevice2Array[1] = ptDeviceDetail;
          }
        }
      }
      else if (this.item.json.worktype === 'ZUDN' && this.item.json.ta0newvoltage > 3) {
        if (typeof (this.ptDevice0Array[0]) !== 'undefined') {
          if (typeof (this.ptDevice0Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
            if (this.ptDevice0Array.length === 1) {
              var ptDeviceDetail = new MultiAssetLocci();
              ptDeviceDetail.devicetype = 'pt';
              ptDeviceDetail.ta0installind = true;
              ptDeviceDetail.ta0ctptphase = 'R';
              ptDeviceDetail.ta0allocationtype = '86';
              ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
              ptDeviceDetail.ta0systemstatus = "AVLB";
              this.ptDevice0Array[1] = ptDeviceDetail;
            }
          }
        }

        if (typeof (this.ptDevice1Array[0]) !== 'undefined') {
          if (typeof (this.ptDevice1Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
            if (this.ptDevice1Array.length === 1) {
              var ptDeviceDetail = new MultiAssetLocci();
              ptDeviceDetail.devicetype = 'pt';
              ptDeviceDetail.ta0installind = true;
              ptDeviceDetail.ta0ctptphase = 'Y';
              ptDeviceDetail.ta0allocationtype = '86';
              ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
              ptDeviceDetail.ta0systemstatus = "AVLB";
              this.ptDevice1Array[1] = ptDeviceDetail;
            }
          }
        }

        if (typeof (this.ptDevice2Array[0]) !== 'undefined') {
          if (typeof (this.ptDevice2Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
            if (this.ptDevice2Array.length === 1) {
              var ptDeviceDetail = new MultiAssetLocci();
              ptDeviceDetail.devicetype = 'pt';
              ptDeviceDetail.ta0installind = true;
              ptDeviceDetail.ta0ctptphase = 'B';
              ptDeviceDetail.ta0allocationtype = '86';
              ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
              ptDeviceDetail.ta0systemstatus = "AVLB";
              this.ptDevice2Array[1] = ptDeviceDetail;
            }
          }
        }
      } else {
        this.showPT = false;
      }
      // By ameer for reassign CT Ratio LV voltage
      if (this.mainDeviceArray[0].ta0devicevoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V || this.item.json.ta0installationvoltage <= 3) {
        if (typeof (this.ctDevice0Array[1]) !== "undefined") {
          this.ctDevice0Array[1].ta0currentratio = this.ctDevice0Array[1].loc_currentRatio;
        } else if (typeof (this.ctDevice0Array[0]) !== "undefined") {
          this.ctDevice0Array[0].ta0currentratio = this.ctDevice0Array[0].loc_currentRatio;
        }
        if (typeof (this.ctDevice1Array[1]) !== "undefined") {
          this.ctDevice1Array[1].ta0currentratio = this.ctDevice1Array[1].loc_currentRatio;
        } else if (typeof (this.ctDevice1Array[0]) !== "undefined") {
          this.ctDevice1Array[0].ta0currentratio = this.ctDevice1Array[0].loc_currentRatio;
        }

        if (typeof (this.ctDevice2Array[1]) !== "undefined") {
          this.ctDevice2Array[1].ta0currentratio = this.ctDevice2Array[1].loc_currentRatio;
        } else if (typeof (this.ctDevice2Array[0]) !== "undefined") {
          this.ctDevice2Array[0].ta0currentratio = this.ctDevice2Array[0].loc_currentRatio;
        }
      }
      this.assignCheckMeterAllocationType();
    }
  }

  assignFeederSetCtPt(multiAsset) {
    var mCount = 0;
    var mmCount = 0;
    var msCount = 0;
    var cmCount = 0;
    var csCount = 0;
    var cCount = 0;
    var ctCount0 = 0;
    var ctCount1 = 0;
    var ctCount2 = 0;
    var ptCount0 = 0;
    var ptCount1 = 0;
    var ptCount2 = 0;

    console.log(' multi asset : ' + multiAsset.multiassetlocci);
    if (multiAsset.multiassetlocci === 'undefined') {
      console.log('came inside to undefined . ');
    }

    if (typeof (multiAsset.multiassetlocci) !== null && typeof (multiAsset.multiassetlocci) !== 'undefined') {
      if (multiAsset.multiassetlocci.length != 0) {
        console.log("work  type length : " + multiAsset.multiassetlocci.length);
        var mainDeviceId = this.checkFeederMainMeterControllingDevice(multiAsset);
        //console.log(" i : " + JSON.stringify(multiAsset.multiassetlocci[i]));
        for (var i = 0; i < multiAsset.multiassetlocci.length; i++) {
          console.log("TYPE: " + multiAsset.multiassetlocci[i].ta0allocationtype);
          var indicator = multiAsset.multiassetlocci[i].ta0bcrmuploadindicator;

          // Adding allocation type is missing for CT and PT
          if ((typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.CTDIR) ||
            (typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.VTDIR) ||
            (typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.CTTFR) ||
            (typeof (multiAsset.multiassetlocci[i].ta0allocationtype) && multiAsset.multiassetlocci[i].ta0functionclass === FunctionClass.PTTFR)) {
            multiAsset.multiassetlocci[i].ta0allocationtype = DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
          }

          switch (multiAsset.multiassetlocci[i].ta0allocationtype) {
            case DeviceConstants.DEV_ALLOC_MEASUREMENT_TRANSFEORMER: {

              switch (indicator) {
                case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT: {
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  if (ctCount0 == 0) {
                    this.ctDevice0Array[ctCount0] = multiAsset.multiassetlocci[i];
                    this.ctDevice0Array[ctCount0].devicetype = "ct";
                    this.ctDevice0Array[ctCount0].loc_windingGroup = locWindingGroup;
                    var ct = 'ct_0';
                    // this.convertStringToArray(locWindingGroup, ct);
                    this.autoPopulateValueCtPt(this.ctDevice0Array[ctCount0], 'ct_0');
                    ctCount0++;
                  } else if (ctCount1 == 0) {
                    this.ctDevice1Array[ctCount1] = multiAsset.multiassetlocci[i];
                    this.ctDevice1Array[ctCount1].devicetype = "ct";
                    this.ctDevice1Array[ctCount1].loc_windingGroup = locWindingGroup;
                    var ct = 'ct_1';
                    // this.convertStringToArray(locWindingGroup, ct);
                    this.autoPopulateValueCtPt(this.ctDevice1Array[ctCount1], 'ct_1');
                    ctCount1++;
                  } else if (ctCount2 == 0) {
                    this.ctDevice2Array[ctCount2] = multiAsset.multiassetlocci[i];
                    this.ctDevice2Array[ctCount2].devicetype = "ct";
                    this.ctDevice2Array[ctCount2].loc_windingGroup = locWindingGroup;
                    var ct = 'ct_2';
                    // this.convertStringToArray(locWindingGroup, ct);
                    this.autoPopulateValueCtPt(this.ctDevice2Array[ctCount2], 'ct_2');
                    ctCount2++;
                  }
                  break;
                }
                // Problem with delete button for new added..
                case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT: {
                  var checkVal = 0;
                  if (SoTypes.ZIST === this.item.json.worktype) {
                    checkVal = 0;
                  } else {
                    checkVal = 1;
                  }
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  //  ctCount0 == checkVal
                  //  ctCount1 == checkVal
                  //  ctCount2 == checkVal
                  if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'R') {
                    this.ctDevice0Array[checkVal] = multiAsset.multiassetlocci[i];
                    this.ctDevice0Array[checkVal].devicetype = "ct";
                    this.ctDevice0Array[checkVal].loc_windingGroup = locWindingGroup;
                    //ctCount0++;
                    this.autoPopulateValueCtPt(this.ctDevice0Array[checkVal], 'ct_0');
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'Y') {
                    this.ctDevice1Array[checkVal] = multiAsset.multiassetlocci[i];
                    this.ctDevice1Array[checkVal].devicetype = "ct";
                    this.ctDevice1Array[checkVal].loc_windingGroup = locWindingGroup;
                    //ctCount1++;
                    this.autoPopulateValueCtPt(this.ctDevice1Array[checkVal], 'ct_1');
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'B') {
                    this.ctDevice2Array[checkVal] = multiAsset.multiassetlocci[i];
                    this.ctDevice2Array[checkVal].devicetype = "ct";
                    this.ctDevice2Array[checkVal].loc_windingGroup = locWindingGroup;
                    //ctCount2++;
                    this.autoPopulateValueCtPt(this.ctDevice2Array[checkVal], 'ct_2');
                  }
                  break;
                }

                case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT: {
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  if (ptCount0 === 0) {
                    this.ptDevice0Array[0] = multiAsset.multiassetlocci[i];
                    this.ptDevice0Array[0].devicetype = "pt";
                    this.ptDevice0Array[0].loc_windingGroup = locWindingGroup;
                    var pt = 'pt_0';
                    // this.convertStringToArray(locWindingGroup, pt);
                    this.autoPopulateValueCtPt(this.ptDevice0Array[0], 'pt_0');
                    ptCount0++;
                  } else if (ptCount1 === 0) {
                    this.ptDevice1Array[0] = multiAsset.multiassetlocci[i];
                    this.ptDevice1Array[0].devicetype = "pt";
                    this.ptDevice1Array[0].loc_windingGroup = locWindingGroup;
                    var pt = 'pt_1';
                    // this.convertStringToArray(locWindingGroup, pt);
                    this.autoPopulateValueCtPt(this.ptDevice1Array[0], 'pt_1');
                    ptCount1++;
                  } else if (ptCount2 === 0) {
                    this.ptDevice2Array[0] = multiAsset.multiassetlocci[i];
                    this.ptDevice2Array[0].devicetype = "pt";
                    this.ptDevice2Array[0].loc_windingGroup = locWindingGroup;
                    var pt = 'pt_2';
                    // this.convertStringToArray(locWindingGroup, pt);
                    this.autoPopulateValueCtPt(this.ptDevice2Array[0], 'pt_2');
                    ptCount2++;
                  }
                  break;
                }

                case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT: {
                  var locWindingGroup = null;
                  if (typeof (multiAsset.multiassetlocci[i].ta0registers) != 'undefined' && multiAsset.multiassetlocci[i].ta0registers.length != 0) {
                    locWindingGroup = multiAsset.multiassetlocci[i].ta0registers[0].ta0windinggroup;
                  }
                  var checkPtVal = 0
                  if (SoTypes.ZIST === this.item.json.worktype) {
                    checkPtVal = 0;
                  } else {
                    checkPtVal = 1;
                  }
                  if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'R') {
                    this.ptDevice0Array[checkPtVal] = multiAsset.multiassetlocci[i];
                    this.ptDevice0Array[checkPtVal].devicetype = "pt";
                    this.ptDevice0Array[checkPtVal].loc_windingGroup = locWindingGroup;
                    this.autoPopulateValueCtPt(this.ptDevice0Array[checkPtVal], 'pt_0');
                    //ptCount0++;
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'Y') {
                    this.ptDevice1Array[checkPtVal] = multiAsset.multiassetlocci[i];
                    this.ptDevice1Array[checkPtVal].devicetype = "pt";
                    this.ptDevice1Array[checkPtVal].loc_windingGroup = locWindingGroup;
                    this.autoPopulateValueCtPt(this.ptDevice1Array[checkPtVal], 'pt_1');
                    //ptCount1++;
                  } else if (typeof (multiAsset.multiassetlocci[i].ta0ctptphase) != 'undefined' && multiAsset.multiassetlocci[i].ta0ctptphase === 'B') {
                    this.ptDevice2Array[checkPtVal] = multiAsset.multiassetlocci[i];
                    this.ptDevice2Array[checkPtVal].devicetype = "pt";
                    this.ptDevice2Array[checkPtVal].loc_windingGroup = locWindingGroup;
                    this.autoPopulateValueCtPt(this.ptDevice2Array[checkPtVal], 'pt_2');
                    //ptCount2++;
                  }
                  break;
                }
              }
              break;
            }
          }
        }
        this.assignCheckMeterAllocationType();
      }
    }

    if (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZUDN) {

      if (typeof (this.mainDeviceArray[0].assetnum) === 'undefined') {
        if (this.mainDeviceArray.length === 1) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0installind = true;
          this.mainDeviceArray[1] = deviceDetails;
        }
      } else if (typeof (this.mainDeviceArray[0].assetnum) !== 'undefined') {
        if (this.mainDeviceArray.length === 1 && this.mainDeviceArray[0].ta0removeind) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0installind = true;
          this.mainDeviceArray[1] = deviceDetails;
        }
      }

      if (typeof (this.mainModemArray[0].assetnum) === 'undefined') {
        console.log('--------********* this.mainModemArray[0] NOT undefined ');
        if (this.mainModemArray.length === 1) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
          deviceDetails.ta0installind = true;
          this.mainModemArray[1] = deviceDetails;          
        }
        console.log('--------********* this.mainModemArray[1] : '+JSON.stringify(this.mainModemArray));

      } else if (typeof (this.mainModemArray[0].assetnum) !== 'undefined') {
        console.log('--------********* this.mainModemArray[0] NOT undefined ');
        if (this.mainModemArray.length === 1 && this.mainModemArray[0].ta0removeind) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
          deviceDetails.ta0installind = true;
          this.mainModemArray[1] = deviceDetails;
        }
        console.log('--------********* this.mainModemArray[1] : '+JSON.stringify(this.mainModemArray));

      }

      if (typeof (this.mainSimcardArray[0].assetnum) === 'undefined') {
        console.log('--------********* this.mainSimcardArray[0] NOT undefined ');
        if (this.mainSimcardArray.length === 1) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
          deviceDetails.ta0installind = true;
          this.mainSimcardArray[1] = deviceDetails;
        }
        console.log('--------********* this.mainSimcardArray[1] : '+JSON.stringify(this.mainSimcardArray));
      } else if (typeof (this.mainSimcardArray[0].assetnum) !== 'undefined') {
        console.log('--------********* this.mainSimcardArray[0] NOT undefined ');
        if (this.mainSimcardArray.length === 1 && this.mainSimcardArray[0].ta0removeind) {
          var deviceDetails = new MultiAssetLocci();
          deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
          deviceDetails.ta0installind = true;
          this.mainSimcardArray[1] = deviceDetails;
        }
        console.log('--------********* this.mainSimcardArray[1] : '+JSON.stringify(this.mainSimcardArray));
      }

      if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {

        if (typeof (this.checkDeviceArray[0].assetnum) === 'undefined') {
          if (this.checkDeviceArray.length === 1) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0installind = true;
            this.checkDeviceArray[1] = deviceDetails;
          }
        } else if (typeof (this.checkDeviceArray[0].assetnum) !== 'undefined') {
          if (this.checkDeviceArray.length === 1 && this.checkDeviceArray[0].ta0removeind) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0installind = true;
            this.checkDeviceArray[1] = deviceDetails;
          }
        }

        if (typeof (this.checkModemArray[0].assetnum) === 'undefined') {
          if (this.checkModemArray.length === 1) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
            deviceDetails.ta0installind = true;
            this.checkModemArray[1] = deviceDetails;
          }
        } else if (typeof (this.checkModemArray[0].assetnum) !== 'undefined') {
          if (this.checkModemArray.length === 1 && this.checkModemArray[0].ta0removeind) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
            deviceDetails.ta0installind = true;
            this.checkModemArray[1] = deviceDetails;
          }
        }

        if (typeof (this.checkSimcardArray[0].assetnum) === 'undefined') {
          if (this.checkSimcardArray.length === 1) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
            deviceDetails.ta0installind = true;
            this.checkSimcardArray[1] = deviceDetails;
          }
        } else if (typeof (this.checkSimcardArray[0].assetnum) !== 'undefined') {
          if (this.checkSimcardArray.length === 1 && this.checkSimcardArray[0].ta0removeind) {
            var deviceDetails = new MultiAssetLocci();
            deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
            deviceDetails.ta0installind = true;
            this.checkSimcardArray[1] = deviceDetails;
          }
        }

        if (typeof (this.ctDevice0Array[0].assetnum) === 'undefined') {
          if (this.ctDevice0Array.length === 1) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice0Array[1] = ctDeviceDetail;
          }
        } else if (typeof (this.ctDevice0Array[0].assetnum) !== 'undefined') {
          if (this.ctDevice0Array.length === 1 && this.ctDevice0Array[0].ta0removeind) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice0Array[1] = ctDeviceDetail;
          }
        }

        if (typeof (this.ctDevice1Array[0].assetnum) === 'undefined') {
          if (this.ctDevice1Array.length === 1) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'Y';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice1Array[1] = ctDeviceDetail;
          }
        } else if (typeof (this.ctDevice1Array[0].assetnum) !== 'undefined') {
          if (this.ctDevice1Array.length === 1 && this.ctDevice1Array[0].ta0removeind) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice1Array[1] = ctDeviceDetail;
          }
        }

        if (typeof (this.ctDevice2Array[0].assetnum) === 'undefined') {
          if (this.ctDevice2Array.length === 1) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'B';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice2Array[1] = ctDeviceDetail;
          }
        } else if (typeof (this.ctDevice2Array[0].assetnum) !== 'undefined') {
          if (this.ctDevice2Array.length === 1 && this.ctDevice2Array[0].ta0removeind) {
            var ctDeviceDetail = new MultiAssetLocci();
            ctDeviceDetail.devicetype = 'ct';
            ctDeviceDetail.ta0installind = true;
            ctDeviceDetail.ta0ctptphase = 'R';
            ctDeviceDetail.ta0allocationtype = '86';
            ctDeviceDetail.ta0functionclass = this.fCons.CTTFR;
            this.ctDevice2Array[1] = ctDeviceDetail;
          }
        }

      }

      if (this.item.json.ta0newvoltage > 3 || this.item.json.ta0installationvoltage > 3 || this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        this.showPT = true;
        if (typeof (this.ptDevice0Array[0]) === 'undefined') {
          var ptDeviceDetail = new MultiAssetLocci();
          ptDeviceDetail.devicetype = 'pt';
          ptDeviceDetail.ta0ctptphase = 'R';
          ptDeviceDetail.ta0allocationtype = '86';
          ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
          ptDeviceDetail.ta0systemstatus = "AVLB";
          this.ptDevice0Array[0] = ptDeviceDetail;
        }

        if (typeof (this.ptDevice0Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
          if (this.ptDevice0Array.length === 1) {
            var ptDeviceDetail = new MultiAssetLocci();
            ptDeviceDetail.devicetype = 'pt';
            ptDeviceDetail.ta0installind = true;
            ptDeviceDetail.ta0ctptphase = 'R';
            ptDeviceDetail.ta0allocationtype = '86';
            ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
            ptDeviceDetail.ta0systemstatus = "AVLB";
            this.ptDevice0Array[1] = ptDeviceDetail;
          }
        }

        if (typeof (this.ptDevice1Array[0]) === 'undefined') {
          var ptDeviceDetail = new MultiAssetLocci();
          ptDeviceDetail.devicetype = 'pt';
          ptDeviceDetail.ta0ctptphase = 'R';
          ptDeviceDetail.ta0allocationtype = '86';
          ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
          ptDeviceDetail.ta0systemstatus = "AVLB";
          this.ptDevice1Array[0] = ptDeviceDetail;
        }

        if (typeof (this.ptDevice1Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
          if (this.ptDevice1Array.length === 1) {
            var ptDeviceDetail = new MultiAssetLocci();
            ptDeviceDetail.devicetype = 'pt';
            ptDeviceDetail.ta0installind = true;
            ptDeviceDetail.ta0ctptphase = 'Y';
            ptDeviceDetail.ta0allocationtype = '86';
            ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
            ptDeviceDetail.ta0systemstatus = "AVLB";
            this.ptDevice1Array[1] = ptDeviceDetail;
          }
        }

        if (typeof (this.ptDevice2Array[0]) === 'undefined') {
          var ptDeviceDetail = new MultiAssetLocci();
          ptDeviceDetail.devicetype = 'pt';
          ptDeviceDetail.ta0ctptphase = 'R';
          ptDeviceDetail.ta0allocationtype = '86';
          ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
          ptDeviceDetail.ta0systemstatus = "AVLB";
          this.ptDevice2Array[0] = ptDeviceDetail;
        }

        if (typeof (this.ptDevice2Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
          if (this.ptDevice2Array.length === 1) {
            var ptDeviceDetail = new MultiAssetLocci();
            ptDeviceDetail.devicetype = 'pt';
            ptDeviceDetail.ta0installind = true;
            ptDeviceDetail.ta0ctptphase = 'B';
            ptDeviceDetail.ta0allocationtype = '86';
            ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
            ptDeviceDetail.ta0systemstatus = "AVLB";
            this.ptDevice2Array[1] = ptDeviceDetail;
          }
        }
      } else if (this.item.json.worktype === 'ZUDN' && this.item.json.ta0newvoltage > 3) {
        if (typeof (this.ptDevice0Array[0]) !== 'undefined') {
          if (typeof (this.ptDevice0Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
            if (this.ptDevice0Array.length === 1) {
              var ptDeviceDetail = new MultiAssetLocci();
              ptDeviceDetail.devicetype = 'pt';
              ptDeviceDetail.ta0installind = true;
              ptDeviceDetail.ta0ctptphase = 'R';
              ptDeviceDetail.ta0allocationtype = '86';
              ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
              ptDeviceDetail.ta0systemstatus = "AVLB";
              this.ptDevice0Array[1] = ptDeviceDetail;
            }
          }
        }

        if (typeof (this.ptDevice1Array[0]) !== 'undefined') {
          if (typeof (this.ptDevice1Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
            if (this.ptDevice1Array.length === 1) {
              var ptDeviceDetail = new MultiAssetLocci();
              ptDeviceDetail.devicetype = 'pt';
              ptDeviceDetail.ta0installind = true;
              ptDeviceDetail.ta0ctptphase = 'Y';
              ptDeviceDetail.ta0allocationtype = '86';
              ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
              ptDeviceDetail.ta0systemstatus = "AVLB";
              this.ptDevice1Array[1] = ptDeviceDetail;
            }
          }
        }

        if (typeof (this.ptDevice2Array[0]) !== 'undefined') {
          if (typeof (this.ptDevice2Array[0].assetnum) === 'undefined' && this.item.json.ta0newvoltage > 3) {
            if (this.ptDevice2Array.length === 1) {
              var ptDeviceDetail = new MultiAssetLocci();
              ptDeviceDetail.devicetype = 'pt';
              ptDeviceDetail.ta0installind = true;
              ptDeviceDetail.ta0ctptphase = 'B';
              ptDeviceDetail.ta0allocationtype = '86';
              ptDeviceDetail.ta0functionclass = this.fCons.VTDIR;
              ptDeviceDetail.ta0systemstatus = "AVLB";
              this.ptDevice2Array[1] = ptDeviceDetail;
            }
          }
        }
      } else {
        this.showPT = false;
      }
      // By ameer for reassign CT Ratio LV voltage
      if (this.mainDeviceArray[0].ta0devicevoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V || this.item.json.ta0installationvoltage <= 3) {
        if (typeof (this.ctDevice0Array[1]) !== "undefined") {
          this.ctDevice0Array[1].ta0currentratio = this.ctDevice0Array[1].loc_currentRatio;
        } else if (typeof (this.ctDevice0Array[0]) !== "undefined") {
          this.ctDevice0Array[0].ta0currentratio = this.ctDevice0Array[0].loc_currentRatio;
        }
        if (typeof (this.ctDevice1Array[1]) !== "undefined") {
          this.ctDevice1Array[1].ta0currentratio = this.ctDevice1Array[1].loc_currentRatio;
        } else if (typeof (this.ctDevice1Array[0]) !== "undefined") {
          this.ctDevice1Array[0].ta0currentratio = this.ctDevice1Array[0].loc_currentRatio;
        }

        if (typeof (this.ctDevice2Array[1]) !== "undefined") {
          this.ctDevice2Array[1].ta0currentratio = this.ctDevice2Array[1].loc_currentRatio;
        } else if (typeof (this.ctDevice2Array[0]) !== "undefined") {
          this.ctDevice2Array[0].ta0currentratio = this.ctDevice2Array[0].loc_currentRatio;
        }
      }
      this.assignCheckMeterAllocationType();
    }
  }

  checkFeederMainMeterControllingDevice(multiAsset): string {
    console.log('>>>> Access checkFeederMainMeterControllingDevice');
    var controllingDeviceId = null;
    for (var i = 0; i < multiAsset.multiassetlocci.length; i++) {
      console.log(i+" : " + JSON.stringify(multiAsset.multiassetlocci[i]));
      var allocationType = multiAsset.multiassetlocci[i].ta0allocationtype;

      if (DeviceConstants.DEV_ALLOC_MAIN_METER === allocationType || DeviceConstants.DEV_ALLOC_SUB_METER === allocationType || DeviceConstants.DEV_ALLOC_FEEDER_METER === allocationType || DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER === allocationType) {
        controllingDeviceId = multiAsset.multiassetlocci[i].assetnum;
        break;
      }
    }
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    return controllingDeviceId;
  }



  addCtPt(dType) {
    var actionTypeVal = null;
    if (SoTypes.ZIST === this.item.json.worktype) {
      actionTypeVal = DeviceConstants.ACTION_INSTALL;
    }
  }

  /**
   * @deprecated 
   * @param event 
   * @param itemBinding 
   * 
   * change to multiple select to single select refer method assignCheckWindingGroupWithTrans
   */
  assignCheckWindingGroup(event, itemBinding) {

    if (event != 'undefined' && event != '') {
      itemBinding.ta0registers = [];
      var register = new RegisterGroupDetails();
    }

  }

  /**
   * 
   * @param event 
   * @param transType 
   * @param itemBinding 
   */
  assignCheckWindingGroupWithTrans(event, transType, itemBinding) {

    if (event != 'undefined' && event != '') {
      itemBinding.ta0registers = [];
      var register = new RegisterGroupDetails();
      register.ta0windinggroup = event;
      register.ta0transformertype = transType;
      register.assetnum = itemBinding.assetnum;
      itemBinding.ta0registers.push(register);
    }
  }

  checkAssetsAvailability(deviceDetailsArray, index, deviceType, deviceCategory) {

    var serialnum = deviceDetailsArray[index].ta0serialnum.toUpperCase();
    deviceDetailsArray[index].ta0serialnum = serialnum;

    var assetnum = deviceDetailsArray[index].assetnum;
    var deviceDetails = deviceDetailsArray[index];

    // Variables for message.. (Alif - 22/02/2019)
    var msgContent = "";
    var counter = 0;

    if ((assetnum != null && assetnum != '') || (serialnum != null && serialnum != '')) {
      // Checking voltage installation
      if ((deviceType === 'ct' && this.item.json.worktype !== this.soTypes.ZUDN && this.item.json.ta0installationvoltage > this.dCons.VOL_LEVEL_LPC_LV_400V) || (deviceType === 'ct' && this.item.json.worktype === this.soTypes.ZUDN && this.item.json.ta0newvoltage > this.dCons.VOL_LEVEL_LPC_LV_400V) || (deviceType === 'pt')) {
        console.log("Not checking because CT and voltage other than 03");
      } else {
        if (typeof (deviceDetails.ta0allocationtype) !== 'undefined' && deviceDetails.ta0allocationtype !== '' && deviceDetails.ta0allocationtype !== null) {

          var loc_allocationType = deviceDetails.ta0allocationtype;

          if (serialnum != null && serialnum != '')
            var queryPart1 = WL.JSONStore.QueryPart().equal("serialnum", serialnum);
          else if (assetnum != null && assetnum != '')
            var queryPart1 = WL.JSONStore.QueryPart().equal("assetnum", assetnum);

          this.jsonStoreCrud
            .getSearchRecord(Domains.AssetDetails, queryPart1, "10")
            .then(result => {

              this.assetItem = result;
              console.log("RESULT==" + JSON.stringify(this.assetItem));

              if (this.assetItem.length > 0) {

                /**
                * Reason   : Checking meter section if register group "DFLT01" cannot be use.
                * Created  : 21/02/2019
                */
                if (this.assetItem[0].json.ta0registergroup === "DFLT01") {
                  msgContent = msgContent + "Device <strong>" + this.assetItem[0].json.serialnum + "</strong>, Register Group is DFLT01. Please update 'Get Device Details' to continue add the device.";
                }

                if (msgContent !== null && msgContent !== "") {
                  const alert = this.alertCtrl.create({
                    title: 'Failed !',
                    message: msgContent,
                    buttons: [
                      {
                        text: 'Close',
                        role: 'cancel',
                        handler: () => {
                          console.log('Cancel clicked');
                        }
                      }
                    ]
                  });
                  alert.present();

                  setTimeout(() => {
                    // Reset input field
                    deviceDetailsArray[index].ta0serialnum = "";
                    deviceDetailsArray[index].assetnum = "";
                    deviceDetailsArray[index].ta0registergroup = "";
                    if (deviceType === "meter" && deviceCategory === "main") {
                      deviceDetailsArray[index].ta0allocationtype = "";
                    }
                    deviceDetailsArray[index].ta0controllingdevice = "";
                  }, 1000);

                } else {

                  // Set RegisterGroup for Meter
                  // Created : Alif (09-01-2019)
                  if (deviceType === "meter") {
                    deviceDetails.ta0registergroup = this.assetItem[0].json.ta0registergroup;
                  }

                  if (deviceType === 'meter' || deviceType === 'ct' || deviceType === 'pt') {

                    if (this.assetItem != null && this.assetItem != undefined && this.assetItem != '') {

                      deviceDetails.loc_validate = false;
                      deviceDetails = this.assignAssetDetailsToMultiasset(deviceDetails, this.assetItem);
                      deviceDetails.ta0allocationtype = loc_allocationType;

                      if (deviceDetails.ta0allocationtype != null && deviceDetails.ta0allocationtype == DeviceConstants.DEV_ALLOC_MAIN_METER) {
                        deviceDetails.ta0controllingdevice = this.assetItem[0].json.assetnum;
                      } else {
                        deviceDetails.ta0controllingdevice = undefined;
                      }

                      if (deviceCategory === 'main' && (deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_MAIN_METER &&
                        deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_SUB_METER &&
                        deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER &&
                        deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_FEEDER_METER)) {
                        this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                        deviceDetails.loc_validate = true;
                        deviceDetails.ta0devicevoltage = this.assetItem[0].json.ta0devicevoltage;
                        //this.deviceVoltage = this.assetItem[0].json.ta0devicevoltage;
                        //this.item.json.ta0newv
                      }
                      else if (deviceCategory === 'check' && (deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_CHECK_METER &&
                        deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_CHECK_SUB_METER &&
                        deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_CHECK_SUB_FEEDER_METER &&
                        deviceDetails.ta0allocationtype !== DeviceConstants.DEV_ALLOC_CHECK_FEEDER_METER)) {
                        this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                        deviceDetails.loc_validate = true;
                      }
                      else {
                        // additional because the value is not saving.. (alif) (28/05/2019)
                        deviceDetails.ta0class = this.assetItem[0].json.ta0class;
                        deviceDetails.ta0currentratio = this.assetItem[0].json.ta0currentratio;
                        deviceDetails.ta0voltageratio = this.assetItem[0].json.ta0voltageratio;
                        deviceDetailsArray[index].devicetype = deviceCategory;
                        deviceDetailsArray[index] = deviceDetails;
                      }

                      if (deviceDetails.assetnum != deviceDetails.ta0controllingdevice && this.assetItem[0].json.ta0allocationtype != DeviceConstants.DEV_ALLOC_MAIN_METER) {
                        switch (this.worktype) {
                          case SoTypes.ZIST:
                          case SoTypes.ZISR:
                          case SoTypes.ZUDN:
                          case SoTypes.ZRPC: {
                            deviceDetails.ta0controllingdevice = null;
                          }
                          case SoTypes.ZSRO:
                          case SoTypes.ZCER:
                          case SoTypes.ZINL:
                          case SoTypes.ZINR: {
                            deviceDetails.ta0controllingdevice = deviceDetailsArray[0].ta0controllingdevice;
                          }
                        }
                      }

                      if (deviceType === 'meter') {
                        if (this.assetItem[0].json.ta0functionclass != FunctionClass.NMTR && this.assetItem[0].json.ta0functionclass != FunctionClass.RMTR &&
                          this.assetItem[0].json.ta0functionclass != FunctionClass.SMTR && this.assetItem[0].json.ta0functionclass != FunctionClass.SMTR_CM) {
                          // device is NOT a CT
                          this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                          deviceDetails.loc_validate = true;
                        }
                      }

                      if (deviceType === 'check') {
                        if (this.assetItem[0].json.ta0functionclass != FunctionClass.NMTR && this.assetItem[0].json.ta0functionclass != FunctionClass.RMTR &&
                          this.assetItem[0].json.ta0functionclass != FunctionClass.SMTR && this.assetItem[0].json.ta0functionclass != FunctionClass.SMTR_CM) {
                          // device is NOT a CT
                          this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                          deviceDetails.loc_validate = true;
                        }
                      }

                      if (deviceType === 'ct') {
                        if (this.assetItem[0].json.ta0functionclass != FunctionClass.CTTFR) {
                          // device is NOT a CT
                          this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                          deviceDetails.loc_validate = true;
                        }
                        else {
                          deviceDetailsArray[index] = deviceDetails;
                          deviceDetailsArray[index].devicetype = deviceType;
                          deviceDetailsArray[index].ta0ctptphase = deviceCategory;
                          deviceDetailsArray[index].siteid = this.item.json.siteid;
                          /**
                           * Reason   : Adding data in the array
                           * Created  : Alif (09-01-2019)
                           * Edited   : Alif (17-01-2019)
                           */
                          // reset all variables
                          deviceDetailsArray[index].ta0modelid = "";
                          deviceDetailsArray[index].ta0va = "";
                          deviceDetailsArray[index].ta0class = "";
                          // deviceDetailsArray[index].locWindingGroup = "";
                          deviceDetailsArray[index].ta0currentratio = "";

                          // Getting value inside ta0registers
                          if (this.assetItem[0].json.hasOwnProperty("ta0registers")) {
                            if (typeof (this.assetItem[0].json.ta0registers) !== "undefined" || this.assetItem[0].json.ta0registers !== null || this.assetItem[0].json.ta0registers !== "") {
                              // Setting value to ta0va
                              if (this.assetItem[0].json.ta0registers[0].hasOwnProperty("ta0va")) {
                                if (typeof (this.assetItem[0].json.ta0registers[0].ta0va) !== "undefined" || this.assetItem[0].json.ta0registers[0].ta0va !== undefined || this.assetItem[0].json.ta0registers[0].ta0va !== null || this.assetItem[0].json.ta0registers[0].ta0va !== "") {
                                  deviceDetailsArray[index].ta0va = this.assetItem[0].json.ta0registers[0].ta0va;
                                } else {
                                  deviceDetailsArray[index].ta0va = "";
                                }
                              } else {
                                deviceDetailsArray[index].ta0va = "";
                              }


                              // Setting value to ta0class
                              if (this.assetItem[0].json.ta0registers[0].hasOwnProperty("ta0windingclass")) {
                                if (typeof (this.assetItem[0].json.ta0registers[0].ta0windingclass) !== "undefined" || this.assetItem[0].json.ta0registers[0].ta0windingclass !== null || this.assetItem[0].json.ta0registers[0].ta0windingclass !== "") {
                                  deviceDetailsArray[index].ta0class = this.assetItem[0].json.ta0registers[0].ta0windingclass;
                                  const windingClass = this.assetItem[0].json.ta0registers[0].ta0windingclass;
                                  deviceDetailsArray[index].loc_ta0class = this.convertTa0classBcrmMapping(windingClass)

                                } else {
                                  deviceDetailsArray[index].ta0class = "";
                                  deviceDetailsArray[index].loc_ta0class = '';
                                }
                              } else {
                                deviceDetailsArray[index].ta0class = "";
                                deviceDetailsArray[index].loc_ta0class = '';
                              }


                              // Setting value to loc_windingGroup
                              if (this.assetItem[0].json.ta0registers[0].hasOwnProperty("ta0windinggroup")) {
                                if (typeof (this.assetItem[0].json.ta0registers[0].ta0windinggroup) !== "undefined" || this.assetItem[0].json.ta0registers[0].ta0windinggroup !== null || this.assetItem[0].json.ta0registers[0].ta0windinggroup !== "") {
                                  deviceDetailsArray[index].loc_windingGroup = this.assetItem[0].json.ta0registers[0].ta0windinggroup;
                                } else {
                                  deviceDetailsArray[index].loc_windingGroup = "";
                                }
                              } else {
                                deviceDetailsArray[index].loc_windingGroup = "";
                              }


                              // Setting value to ta0currentratio..
                              if (this.assetItem[0].json.ta0registers[0].hasOwnProperty("ta0transformervoltage") && this.assetItem[0].json.ta0registers[1].hasOwnProperty("ta0transformervoltage")) {
                                if ((typeof (this.assetItem[0].json.ta0registers[0].ta0transformervoltage) !== "undefined" || this.assetItem[0].json.ta0registers[0].ta0transformervoltage !== undefined || this.assetItem[0].json.ta0registers[0].ta0transformervoltage !== null || this.assetItem[0].json.ta0registers[0].ta0transformervoltage !== "") &&
                                  (typeof (this.assetItem[0].json.ta0registers[1].ta0transformervoltage) !== "undefined" || this.assetItem[0].json.ta0registers[1].ta0transformervoltage !== undefined || this.assetItem[0].json.ta0registers[1].ta0transformervoltage !== null || this.assetItem[0].json.ta0registers[1].ta0transformervoltage !== "")) {
                                  // follow standard mvhv - change standard view to (**/** A)
                                  var cr = parseFloat(this.assetItem[0].json.ta0registers[1].ta0transformervoltage) / parseFloat(this.assetItem[0].json.ta0registers[0].ta0transformervoltage);
                                  var loc_cr = this.assetItem[0].json.ta0registers[1].ta0transformervoltage + "/" + this.assetItem[0].json.ta0registers[0].ta0transformervoltage + " A";
                                  deviceDetailsArray[index].ta0currentratio = cr;
                                  deviceDetailsArray[index].loc_ta0currentratio = loc_cr;
                                  // deviceDetailsArray[index].ta0currentratio = this.assetItem[0].json.ta0registers[1].ta0transformervoltage + "/" + this.assetItem[0].json.ta0registers[0].ta0transformervoltage;
                                } else {
                                  deviceDetailsArray[index].ta0currentratio = "";
                                }
                              } else {
                                deviceDetailsArray[index].ta0currentratio = "";
                              }

                            } else {
                              // deviceDetailsArray[index].ta0va = "";
                              deviceDetailsArray[index].ta0class = "";
                              // deviceDetailsArray[index].locWindingGroup = "";
                              deviceDetailsArray[index].ta0currentratio = "";
                            }
                          } else {
                            deviceDetailsArray[index].ta0va = "";
                            deviceDetailsArray[index].ta0class = "";
                            //deviceDetailsArray[index].locWindingGroup = "";
                            deviceDetailsArray[index].loc_ta0class = '';
                            // deviceDetailsArray[index].loc_windingGroup = '';
                            deviceDetailsArray[index].loc_ta0currentratio = '';
                            deviceDetailsArray[index].ta0currentratio = "";
                          }

                          deviceDetailsArray[index].ta0modelid = this.assetItem[0].json.ta0manufacturer;
                          deviceDetailsArray[index].ta0va = this.assetItem[0].json.ta0va;
                        }
                      }
                    } else {
                      //when No Device Found in Asset
                      deviceDetails.loc_allocationType = null; deviceDetails.ta0controllingdevice = null;
                      //clear value when device invalid
                      this.gf.warningAlert("Device Serial Number", DeviceConstants.DEVICE_NOT_FOUND, "OK");
                      deviceDetails.loc_validate = true;
                    }
                  } else if (deviceType === 'sim') {
                    if (this.assetItem != null && this.assetItem != undefined && this.assetItem != '') {

                      deviceDetails.loc_validate = false;
                      if (this.assetItem[0].json.ta0functionclass == FunctionClass.SIMCRD) {
                        deviceDetails.asset = [];
                        deviceDetails = this.assetItem[0].json;
                        deviceDetails.ta0serialnum = this.assetItem[0].json.serialnum;
                        deviceDetails.ta0allocationtype = loc_allocationType;
                        deviceDetailsArray[index] = deviceDetails;
                        deviceDetailsArray[index].ta0functionclass = FunctionClass.SIMCRD;
                        deviceDetailsArray[index].devicetype = deviceCategory;
                      }
                      else if (this.assetItem[0].json.ta0functionclass != FunctionClass.SIMCRD) {
                        // device is NOT a SIMCARD
                        this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                        deviceDetails.loc_validate = true;
                      }
                    } else {
                      //when No Device Found in Asset              
                      this.gf.warningAlert("Device Serial Number", DeviceConstants.SIMCARD_NOT_FOUND, "OK");
                      deviceDetails.loc_validate = true;
                    }
                  } else if (deviceType === 'modem') {
                    if (this.assetItem != null && this.assetItem != undefined && this.assetItem != '') {
                      deviceDetails.loc_validate = false;
                      if (this.assetItem[0].json.ta0functionclass == FunctionClass.MODEM) {
                        deviceDetails.asset = [];
                        deviceDetails = this.assetItem[0].json;
                        deviceDetails.ta0serialnum = this.assetItem[0].json.serialnum;
                        deviceDetails.ta0allocationtype = loc_allocationType;
                        deviceDetailsArray[index] = deviceDetails;
                        deviceDetailsArray[index].ta0functionclass = FunctionClass.MODEM;
                        deviceDetailsArray[index].devicetype = deviceCategory;
                      }
                      else if (this.assetItem[0].json.ta0functionclass != FunctionClass.MODEM) {
                        // device is NOT a MODEM
                        this.gf.warningAlert("Device Function Class", this.gf.deviceFunctionClass(this.assetItem[0].json.ta0functionclass), "OK");
                        deviceDetails.loc_validate = true;
                      }
                    }
                    else {
                      //when No Device Found in Asset              
                      console.log("No Device Found");
                      this.gf.warningAlert("Device Serial Number", DeviceConstants.MODEM_NOT_FOUND, "OK");
                      deviceDetails.loc_validate = true;
                    }
                  } else if (deviceType === 'pt') {
                    deviceDetails.assetnum = assetnum;
                    deviceDetails.ta0serialnum = this.assetItem[0].json.serialnum;
                    deviceDetails.ta0allocationtype = loc_allocationType;
                    deviceDetailsArray[index] = deviceDetails;
                    deviceDetailsArray[index].ta0functionclass = FunctionClass.PTTFR;
                  }

                  // Checking Device
                  if (!this.checkingAssetnumArrayList(deviceDetailsArray[index].assetnum, deviceType, index, deviceCategory, '')) {

                    // Insert Device Details into the list
                    this.deviceDetails = {};
                    this.deviceDetails.description = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.indexVal].description)) + " - " + JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.indexVal].ta0feedercode));
                    this.deviceDetails.assetnum = deviceDetails.assetnum;
                    this.deviceDetails.ta0serialnum = deviceDetails.serialnum;
                    if (typeof (deviceDetails.ta0controllingdevice) !== 'undefined') {
                      this.deviceDetails.ta0controllingdevice = deviceDetails.ta0controllingdevice;
                    }

                    this.deviceDetails.ta0allocationtype = deviceDetails.ta0allocationtype;
                    this.deviceDetails.ta0bcrmuploadindicator = deviceDetails.ta0bcrmuploadindicator;
                    this.deviceDetails.loc_new = true;

                    /**
                     * Searching device duplicate to replace the latest device details.
                     * Created  : Alif
                     * Date     : 05-12-2018
                     */

                    // Removing device inside the listing installed device.
                    var devices = JSON.parse(JSON.stringify(this.item.json.listDevice));

                    var deviceIndex = devices.findIndex((item) => {
                      return item.assetnum === deviceDetails.assetnum && item.ta0serialnum === deviceDetails.serialnum;
                    });

                    if (typeof (deviceIndex) !== "undefined" || deviceIndex !== "") {
                      if (deviceIndex !== -1) {
                        // Remove the assetnum.
                        this.item.json.listDevice.splice(deviceIndex, 1);
                        this.item.json.listDevice.push(this.deviceDetails);
                      }
                    }
                  }
                  // Check Meter & CT (LV)
                  if ((deviceType === "meter" && deviceCategory === "check") || deviceCategory === "ct") {
                    // Checking Main Meter Device Voltage
                    var voltage = null;
                    if (typeof (this.mainDeviceArray[1]) !== "undefined") {
                      if (typeof (this.mainDeviceArray[1].ta0serialnum) !== "undefined" && this.mainDeviceArray[1].ta0serialnum !== null && this.mainDeviceArray[1].ta0serialnum !== "") {
                        voltage = this.mainDeviceArray[1].ta0devicevoltage;
                      }
                    } else {
                      if (typeof (this.mainDeviceArray[0].ta0serialnum) !== "undefined" && this.mainDeviceArray[0].ta0serialnum !== null && this.mainDeviceArray[0].ta0serialnum !== "") {
                        voltage = this.mainDeviceArray[0].ta0devicevoltage;
                      }
                    }

                    if (voltage !== null) {
                      this.validateInstallation();
                    }
                  }

                  // Checking for Changing CT PT fields based on intallation main meter. only ZIST
                  if (deviceType === "meter" && deviceCategory === "main") {
                    if (this.assetItem != null && this.assetItem != undefined && this.assetItem != '') {
                      this.deviceVoltage = this.assetItem[0].json.ta0devicevoltage;

                      // Change View
                      if (this.deviceVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                        this.showPT = false;
                        this.showSearchBtn = false;
                        this.showCt = true;
                      } else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                        this.showPT = true;
                        this.showSearchBtn = true;
                        this.showCt = true;
                      } else {
                        this.showPT = false;
                        this.showSearchBtn = false;
                        this.showCt = false;
                      }

                      // Change Properties
                      this.createFeederDeviceSetCtPt();
                    }
                  }
                }
              } else {
                if (this.worktype === SoTypes.ZISR) {
                  var siteid = this.item.json.siteid;
                  var serialnum = deviceDetailsArray[index].ta0serialnum;
                  const confirm = this.alertCtrl.create({
                    title: 'Confirmation',
                    message: 'Asset is not available in the list. Do you want to create asset ?',
                    buttons: [
                      {
                        text: 'Disagree',
                        handler: () => {
                          console.log('Disagree clicked');
                        }
                      },
                      {
                        text: 'Agree',
                        handler: () => {
                          this.dataService
                            .getDeviceDetailsZISR(siteid, serialnum)
                            .then(results => {
                              var res: any = [];
                              res = results;
                              var cont = JSON.parse(res.respObject);

                              if (res.processStatus === "success") {

                                const alert = this.alertCtrl.create({
                                  title: 'Success',
                                  message: cont.MESSAGE_TEXT,
                                  buttons: [
                                    {
                                      text: 'Okay',
                                      handler: () => { }
                                    }
                                  ]
                                });
                                alert.present();
                              }
                            });
                        }
                      }
                    ]
                  });
                  confirm.present();
                } else {
                  this.gf.warningAlert("Failed !", "InValid Asset.", "Close");
                }
              }
            });

        }
      }
    } else {
      // Assigning Check Meter Allocation Type
      this.assignCheckMeterAllocationType();
    }

    /**
    * Reason   : If setting device allocation type for check meter it will trigger to checking asset details also when change at main.
    * Created  : 21/02/2019
    */
    // Assigning controlling device to check meter (ZIST)
    if (this.worktype === this.soTypes.ZIST) {
      if (loc_allocationType === this.dCons.DEV_ALLOC_MAIN_METER) {
        // Check Meter
        this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
      }
      else if (loc_allocationType === this.dCons.DEV_ALLOC_FEEDER_METER) {
        this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
      }
      else if (loc_allocationType === this.dCons.DEV_ALLOC_SUB_METER) {
        this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
      }
      else if (loc_allocationType == this.dCons.DEV_ALLOC_SUB_FEEDER_METER) {
        this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
      }
    }

    // Assign ControllingDevice to Check Meter (ZINL)
    if (this.worktype === this.soTypes.ZINL || this.worktype === this.soTypes.ZUDN || this.worktype === this.soTypes.ZRPC || this.worktype === this.soTypes.ZSRO) {
      if (typeof (this.checkDeviceArray[1]) !== 'undefined') {
        if (loc_allocationType === this.dCons.DEV_ALLOC_MAIN_METER) {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
        }
        else if (loc_allocationType === this.dCons.DEV_ALLOC_FEEDER_METER) {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
        }
        else if (loc_allocationType === this.dCons.DEV_ALLOC_SUB_METER) {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
        }
        else if (loc_allocationType == this.dCons.DEV_ALLOC_SUB_FEEDER_METER) {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
        }
      }
    }
  }

  assignAssetDetailsToMultiasset(deviceDetails, assetItem): any {

    if (typeof (assetItem[0].json.assetnum) != 'undefined')
      deviceDetails.assetnum = assetItem[0].json.assetnum;
    if (typeof (assetItem[0].json.location) != 'undefined')
      deviceDetails.location = assetItem[0].json.location;
    if (typeof (assetItem[0].json.ta0functionclass) != 'undefined')
      deviceDetails.ta0functionclass = assetItem[0].json.ta0functionclass;
    if (typeof (assetItem[0].json.ta0systemstatus) != 'undefined')
      deviceDetails.ta0systemstatus = assetItem[0].json.ta0systemstatus;
    if (typeof (assetItem[0].json.modelid) != 'undefined')
      deviceDetails.modelid = assetItem[0].json.modelid;
    if (typeof (assetItem[0].json.ta0registers) != 'undefined')
      deviceDetails.ta0registers = assetItem[0].json.ta0registers;
    if (typeof (assetItem[0].json.serialnum) != 'undefined')
      deviceDetails.serialnum = assetItem[0].json.serialnum;
    if (typeof (assetItem[0].json.serialnum) != 'undefined')
      deviceDetails.ta0serialnum = assetItem[0].json.serialnum;
    if (typeof (assetItem[0].json.itemnum) != 'undefined')
      deviceDetails.itemnum = assetItem[0].json.itemnum;
    if (typeof (assetItem[0].json.ta0manufacturer) != 'undefined')
      deviceDetails.ta0manufacturer = assetItem[0].json.ta0manufacturer;
    if (typeof (assetItem[0].json.description) != 'undefined')
      deviceDetails.ta0description = this.assetItem[0].json.description;

    if (typeof (assetItem[0].json.ta0devicevoltage) != 'undefined') {
      deviceDetails.ta0devicevoltage = assetItem[0].json.ta0devicevoltage;
    }
    return deviceDetails;
  }

  assignwindingTransformerType(): string {

    if (this.item.json.ta0installationvoltage === "03") {
      return "0";
    }
    else if (this.item.json.ta0installationvoltage === "04") {
      return "2";
    }
    else {
      return "1";
    }
  }

  /**
   * Validation for Installation
   */
  validateInstallation() {
    var type = this.item.json.worktype;

    switch (type) {
      case SoTypes.ZIST: {
        // Checking for mandatory field.
        if (typeof (this.mainDeviceArray[0]) !== "undefined") {

          if ((typeof (this.mainDeviceArray[0].ta0serialnum) === "undefined" || typeof (this.mainDeviceArray[0].assetnum) === "undefined") ||
            (this.mainDeviceArray[0].ta0serialnum === null || this.mainDeviceArray[0].assetnum === null) ||
            (this.mainDeviceArray[0].ta0serialnum === '' || this.mainDeviceArray[0].assetnum === '')) {
            this.gf.warningAlert("ERROR", "Please select Main Meter.", "Close");
            return false;
          } else if (typeof (this.mainDeviceArray[0].ta0allocationtype) === "undefined" || this.mainDeviceArray[0].ta0allocationtype === null || this.mainDeviceArray[0].ta0allocationtype === '') {
            this.gf.warningAlert("ERROR", "Please select Device Allocation Type.", "Close");
            return false;
          } else if (typeof (this.mainDeviceArray[0].ta0controllingdevice) === "undefined" || this.mainDeviceArray[0].ta0controllingdevice === null || this.mainDeviceArray[0].ta0controllingdevice === '') {
            this.gf.warningAlert("ERROR", "Please select Controlling Device (Serial No.).", "Close");
            return false;
          } else {
            // Checking device mandatory
            // this.validationDeviceMandatory();
            return true;
          }
        }
        break;
      }

      /**
       * Reason   : Remove because no need to check validation for every feeder for ZUDN & ZSRO (remove - install)
       * Edited   : Alif (18-01-2019)
        */
      // case SoTypes.ZSRO:
      // case SoTypes.ZUDN:
      case SoTypes.ZINL:
      case SoTypes.ZRPC: {
        for (var i = 0; i < this.mainDeviceArray.length; i++) {
          if (typeof (this.mainDeviceArray[i]) !== "undefined") {
            if (typeof (this.mainDeviceArray[i].assetnum) !== "undefined" || typeof (this.mainDeviceArray[i].ta0serialnum) !== "undefined") {
              if (typeof (this.mainDeviceArray[i].ta0allocationtype) === "undefined" || this.mainDeviceArray[i].ta0allocationtype === null || this.mainDeviceArray[i].ta0allocationtype === '') {
                this.gf.warningAlert("ERROR", "Please select Device Allocation Type.", "Close");
                return false;
              } else if (typeof (this.mainDeviceArray[i].ta0controllingdevice) === "undefined" || this.mainDeviceArray[i].ta0controllingdevice === null || this.mainDeviceArray[i].ta0controllingdevice === '') {
                this.gf.warningAlert("ERROR", "Please select Controlling Device (Serial No.).", "Close");
                return false;
              } else {
                // Checking device mandatory
                if (this.validationDeviceMandatory()) {
                  // return true;
                } else {
                  return false;
                }
              }
            }
          }
        }
        return true;
      }

      default: {
        // Checking device mandatory
        // this.validationDeviceMandatory();
        return true;
      }

    }
  }

  /**
   * Validation for Different SO Type
   */
  validationDeviceMandatory() {
    var type = this.item.json.worktype;

    var meterFlag: boolean = false;
    var mModem: boolean = false;
    var mSimcard: boolean = false;
    var checkFlag: boolean = false;
    var cModem: boolean = false;
    var cSimcard: boolean = false;
    var ctFlag0: boolean = false;
    var ctFlag1: boolean = false;
    var ctFlag2: boolean = false;
    var ptFlag0: boolean = false;
    var ptFlag1: boolean = false;
    var ptFlag2: boolean = false;
    var message = "<p>";
    var msgTitleMain, msgTitleCheck, msgTitleCt, msgTitlePt;
    var msgBodyMain = "", msgBodyCheck = "", msgBodyCt = "", msgBodyPt = "";

    switch (type) {
      case SoTypes.ZIST: {
        // Checking device voltage
        if (typeof (this.mainDeviceArray[1]) !== "undefined") {
          if (typeof (this.mainDeviceArray[1].assetnum) !== "undefined" || this.mainDeviceArray[1].assetnum !== null || this.mainDeviceArray[1].assetnum !== '') {
            var newVoltage = this.mainDeviceArray[1].ta0devicevoltage;
          } else {
            var newVoltage = this.mainDeviceArray[0].ta0devicevoltage;
          }
        } else {
          var newVoltage = this.mainDeviceArray[0].ta0devicevoltage;
        }

        if (newVoltage == DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
          // Checking Mandatory LV
          // Mandatory: 1 Meter & 3 CT's

          // Checking Main Meter
          if (typeof (this.mainDeviceArray[0].assetnum) === 'undefined' || this.mainDeviceArray[0].assetnum === "" || this.mainDeviceArray[0].assetnum === null) {
            this.gf.warningAlert("Reminder", "Main Meter cannot be empty.", "Close");
            meterFlag = true;
            return false;
          } else if ((typeof (this.mainDeviceArray[0].ta0allocationtype) === 'undefined' || this.mainDeviceArray[0].ta0allocationtype === "" || this.mainDeviceArray[0].ta0allocationtype === null)) {
            meterFlag = true;
            return false;
          } else if ((typeof (this.mainDeviceArray[0].ta0controllingdevice) === 'undefined' || this.mainDeviceArray[0].ta0controllingdevice === "" || this.mainDeviceArray[0].ta0controllingdevice === null)) {
            meterFlag = true;
            return false;
          }
          // Checking CT transformer
          if (meterFlag == false) {
            // Checking if adding ct / pt
            if (typeof (this.ctDevice0Array[0]) !== "undefined") {
              if (typeof (this.ctDevice0Array[0].ta0serialnum) !== "undefined" && this.ctDevice0Array[0].ta0serialnum !== "" && this.ctDevice0Array[0].ta0serialnum !== null) {
                ctFlag0 = true;
              } else {
                ctFlag0 = false;
              }
            }

            if (typeof (this.ctDevice1Array[0]) !== "undefined") {
              if (typeof (this.ctDevice1Array[0].ta0serialnum) !== "undefined" && this.ctDevice1Array[0].ta0serialnum !== "" && this.ctDevice1Array[0].ta0serialnum !== null) {
                ctFlag1 = true;
              } else {
                ctFlag1 = false;
              }
            }

            if (typeof (this.ctDevice2Array[0]) !== "undefined") {
              if (typeof (this.ctDevice2Array[0].ta0serialnum) !== "undefined" && this.ctDevice2Array[0].ta0serialnum !== "" && this.ctDevice2Array[0].ta0serialnum !== null) {
                ctFlag2 = true;
              } else {
                ctFlag2 = false;
              }
            }

            if (typeof (this.ptDevice0Array[0]) !== "undefined") {
              if (typeof (this.ptDevice0Array[0].ta0serialnum) !== "undefined" && this.ptDevice0Array[0].ta0serialnum !== "" && this.ptDevice0Array[0].ta0serialnum !== null) {
                ptFlag0 = true;
              } else {
                ptFlag0 = false;
              }
            }

            if (typeof (this.ptDevice1Array[0]) !== "undefined") {
              if (typeof (this.ptDevice1Array[0].ta0serialnum) !== "undefined" && this.ptDevice1Array[0].ta0serialnum !== "" && this.ptDevice1Array[0].ta0serialnum !== null) {
                ptFlag1 = true;
              } else {
                ptFlag1 = false;
              }
            }

            if (typeof (this.ptDevice2Array[0]) !== "undefined") {
              if (typeof (this.ptDevice2Array[0].ta0serialnum) !== "undefined" && this.ptDevice2Array[0].ta0serialnum !== "" && this.ptDevice2Array[0].ta0serialnum !== null) {
                ptFlag2 = true;
              } else {
                ptFlag2 = false;
              }
            }

            if ((ctFlag0 === true && ctFlag1 === true && ctFlag2 === true) && (ptFlag0 === true && ptFlag1 === true && ptFlag2 === true)) { // ct & pt - true
              this.gf.warningAlert("Reminder", "PT Transformer cannot be install. Please remove to continue.", "Close");
              return false;
            } else if ((ctFlag0 === false || ctFlag1 === false || ctFlag2 === false) && (ptFlag0 === true || ptFlag1 === true || ptFlag2 === true)) { // ct - false, pt - true
              this.gf.warningAlert("Reminder", "Please install CT Transformer.", "Close");
              return false;
            } else if ((ctFlag0 === false || ctFlag1 === false || ctFlag2 === false) && (ptFlag0 === false || ptFlag1 === false || ptFlag2 === false)) { // ct -false, pt - false
              this.gf.warningAlert("Reminder", "Please install CT Transformer.", "Close");
              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        } else if (newVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
          // Checking Mandatory MVHV
          // Mandatory: 1 Meter, 3 CT's & 3 PT's

          // Checking Main Meter
          if (typeof (this.mainDeviceArray[0].assetnum) === 'undefined' || this.mainDeviceArray[0].assetnum === "" || this.mainDeviceArray[0].assetnum === null) {
            this.gf.warningAlert("Reminder", "Main Meter cannot be empty.", "Close");
            meterFlag = true;
            return false;
          } else if ((typeof (this.mainDeviceArray[0].ta0allocationtype) === 'undefined' || this.mainDeviceArray[0].ta0allocationtype === "" || this.mainDeviceArray[0].ta0allocationtype === null)) {
            this.gf.warningAlert("Reminder", "Device allocation type cannot be empty.", "Close");
            meterFlag = true;
            return false;
          } else if ((typeof (this.mainDeviceArray[0].ta0controllingdevice) === 'undefined' || this.mainDeviceArray[0].ta0controllingdevice === "" || this.mainDeviceArray[0].ta0controllingdevice === null)) {
            this.gf.warningAlert("Reminder", "Controlling device cannot be empty.", "Close");
            meterFlag = true;
            return false;
          }

          // Checking CT & PT transformer
          if (meterFlag == false) {

            if (typeof (this.ctDevice0Array[0]) !== "undefined") {
              if (typeof (this.ctDevice0Array[0].ta0serialnum) !== "undefined" && this.ctDevice0Array[0].ta0serialnum !== "" && this.ctDevice0Array[0].ta0serialnum !== null) {
                ctFlag0 = true;
              } else {
                ctFlag0 = false;
              }
            }

            if (typeof (this.ctDevice1Array[0]) !== "undefined") {
              if (typeof (this.ctDevice1Array[0].ta0serialnum) !== "undefined" && this.ctDevice1Array[0].ta0serialnum !== "" && this.ctDevice1Array[0].ta0serialnum !== null) {
                ctFlag1 = true;
              } else {
                ctFlag1 = false;
              }
            }

            if (typeof (this.ctDevice2Array[0]) !== "undefined") {
              if (typeof (this.ctDevice2Array[0].ta0serialnum) !== "undefined" && this.ctDevice2Array[0].ta0serialnum !== "" && this.ctDevice2Array[0].ta0serialnum !== null) {
                ctFlag2 = true;
              } else {
                ctFlag2 = false;
              }
            }

            if (typeof (this.ptDevice0Array[0]) !== "undefined") {
              if (typeof (this.ptDevice0Array[0].ta0serialnum) !== "undefined" && this.ptDevice0Array[0].ta0serialnum !== "" && this.ptDevice0Array[0].ta0serialnum !== null) {
                ptFlag0 = true;
              } else {
                ptFlag0 = false;
              }
            }

            if (typeof (this.ptDevice1Array[0]) !== "undefined") {
              if (typeof (this.ptDevice1Array[0].ta0serialnum) !== "undefined" && this.ptDevice1Array[0].ta0serialnum !== "" && this.ptDevice1Array[0].ta0serialnum !== null) {
                ptFlag1 = true;
              } else {
                ptFlag1 = false;
              }
            }

            if (typeof (this.ptDevice2Array[0]) !== "undefined") {
              if (typeof (this.ptDevice2Array[0].ta0serialnum) !== "undefined" && this.ptDevice2Array[0].ta0serialnum !== "" && this.ptDevice2Array[0].ta0serialnum !== null) {
                ptFlag2 = true;
              } else {
                ptFlag2 = false;
              }
            }

            if (ctFlag0 === false || ctFlag1 === false || ctFlag2 === false) { // ct & pt - not install
              this.gf.warningAlert("Reminder", "Please install CT transformer.", "Close");
              return false;
            } else if (ptFlag0 === false || ptFlag1 === false || ptFlag2 === false) { // ct - install, pt - not install
              this.gf.warningAlert("Reminder", "Please install PT transformer.", "Close");
              return false;
            } else {
              return true;
            }

          }

        } else {
          // Checking Mandatory OPC
          // Mandatory: 1 Meter

          // Checking Main Meter
          if (typeof (this.mainDeviceArray[0].assetnum) === 'undefined' || this.mainDeviceArray[0].assetnum === "" || this.mainDeviceArray[0].assetnum === null) {
            this.gf.warningAlert("Reminder", "Main Meter cannot be empty.", "Close");
            meterFlag = true;
            return false;
          } else if ((typeof (this.mainDeviceArray[0].ta0allocationtype) === 'undefined' || this.mainDeviceArray[0].ta0allocationtype === "" || this.mainDeviceArray[0].ta0allocationtype === null)) {
            meterFlag = true;
            return false;
          } else if ((typeof (this.mainDeviceArray[0].ta0controllingdevice) === 'undefined' || this.mainDeviceArray[0].ta0controllingdevice === "" || this.mainDeviceArray[0].ta0controllingdevice === null)) {
            meterFlag = true;
            return false;
          } else {
            // Checking if adding check meter
            if (typeof (this.checkDeviceArray[0].ta0serialnum) !== "undefined" && this.checkDeviceArray[0].ta0serialnum !== "" && this.checkDeviceArray[0].ta0serialnum !== null) {
              this.gf.warningAlert("Reminder", "Check Meter cannot be install. Please remove to continue.", "Close");
              meterFlag = true;
              return false;
            } else {
              // Checking if adding ct / pt
              if (typeof (this.ctDevice0Array[0]) !== "undefined") {
                if (typeof (this.ctDevice0Array[0].ta0serialnum) !== "undefined" && this.ctDevice0Array[0].ta0serialnum !== "" && this.ctDevice0Array[0].ta0serialnum !== null) {
                  ctFlag0 = true;
                } else {
                  ctFlag0 = false;
                }
              }

              if (typeof (this.ctDevice1Array[0]) !== "undefined") {
                if (typeof (this.ctDevice1Array[0].ta0serialnum) !== "undefined" && this.ctDevice1Array[0].ta0serialnum !== "" && this.ctDevice1Array[0].ta0serialnum !== null) {
                  ctFlag1 = true;
                } else {
                  ctFlag1 = false;
                }
              }

              if (typeof (this.ctDevice2Array[0]) !== "undefined") {
                if (typeof (this.ctDevice2Array[0].ta0serialnum) !== "undefined" && this.ctDevice2Array[0].ta0serialnum !== "" && this.ctDevice2Array[0].ta0serialnum !== null) {
                  ctFlag2 = true;
                } else {
                  ctFlag2 = false;
                }
              }

              if (typeof (this.ptDevice0Array[0]) !== "undefined") {
                if (typeof (this.ptDevice0Array[0].ta0serialnum) !== "undefined" && this.ptDevice0Array[0].ta0serialnum !== "" && this.ptDevice0Array[0].ta0serialnum !== null) {
                  ptFlag0 = true;
                } else {
                  ptFlag0 = false;
                }
              }

              if (typeof (this.ptDevice1Array[0]) !== "undefined") {
                if (typeof (this.ptDevice1Array[0].ta0serialnum) !== "undefined" && this.ptDevice1Array[0].ta0serialnum !== "" && this.ptDevice1Array[0].ta0serialnum !== null) {
                  ptFlag1 = true;
                } else {
                  ptFlag1 = false;
                }
              }

              if (typeof (this.ptDevice2Array[0]) !== "undefined") {
                if (typeof (this.ptDevice2Array[0].ta0serialnum) !== "undefined" && this.ptDevice2Array[0].ta0serialnum !== "" && this.ptDevice2Array[0].ta0serialnum !== null) {
                  ptFlag2 = true;
                } else {
                  ptFlag2 = false;
                }
              }

              if ((ctFlag0 === true || ctFlag1 === true || ctFlag2 === true) || (ptFlag0 === true || ptFlag1 === true || ptFlag2 === true)) { // ct & pt - true
                this.gf.warningAlert("Reminder", "Please remove ct or pt to continue.", "Close");
                return false;
              } else {
                return true;
              }
            }
          }
        }

        break;
      }

      case SoTypes.ZISR: {
        // Mandatory: New Modem and Simcard

        return true;
        // break;
      }

      case SoTypes.ZRCE: {
        return true;
        // break;
      }

      case SoTypes.ZRMV: {
        return true;
        // break;
      }

      case SoTypes.ZINR: {
        return true;
        // break;
      }

      case SoTypes.ZINL: {
        // Checking device voltage
        if (typeof (this.mainDeviceArray[1]) !== "undefined") {
          if (typeof (this.mainDeviceArray[1].assetnum) !== "undefined" || this.mainDeviceArray[1].assetnum !== null || this.mainDeviceArray[1].assetnum !== '') {
            var newVoltage = this.mainDeviceArray[1].ta0devicevoltage;
          } else {
            var newVoltage = this.mainDeviceArray[0].ta0devicevoltage;
          }
        } else {
          var newVoltage = this.mainDeviceArray[0].ta0devicevoltage;
        }

        if (newVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // Checking Mandatory (LV)
          // Checking if adding ct / pt
          if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            if (typeof (this.ctDevice0Array[0].ta0serialnum) !== "undefined" && this.ctDevice0Array[0].ta0serialnum !== "" && this.ctDevice0Array[0].ta0serialnum !== null) {
              ctFlag0 = true;
            } else {
              ctFlag0 = false;
            }
          }

          if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            if (typeof (this.ctDevice1Array[0].ta0serialnum) !== "undefined" && this.ctDevice1Array[0].ta0serialnum !== "" && this.ctDevice1Array[0].ta0serialnum !== null) {
              ctFlag1 = true;
            } else {
              ctFlag1 = false;
            }
          }

          if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            if (typeof (this.ctDevice2Array[0].ta0serialnum) !== "undefined" && this.ctDevice2Array[0].ta0serialnum !== "" && this.ctDevice2Array[0].ta0serialnum !== null) {
              ctFlag2 = true;
            } else {
              ctFlag2 = false;
            }
          }

          if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            if (typeof (this.ptDevice0Array[0].ta0serialnum) !== "undefined" && this.ptDevice0Array[0].ta0serialnum !== "" && this.ptDevice0Array[0].ta0serialnum !== null) {
              ptFlag0 = true;
            } else {
              ptFlag0 = false;
            }
          }

          if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            if (typeof (this.ptDevice1Array[0].ta0serialnum) !== "undefined" && this.ptDevice1Array[0].ta0serialnum !== "" && this.ptDevice1Array[0].ta0serialnum !== null) {
              ptFlag1 = true;
            } else {
              ptFlag1 = false;
            }
          }

          if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            if (typeof (this.ptDevice2Array[0].ta0serialnum) !== "undefined" && this.ptDevice2Array[0].ta0serialnum !== "" && this.ptDevice2Array[0].ta0serialnum !== null) {
              ptFlag2 = true;
            } else {
              ptFlag2 = false;
            }
          }

          if ((ctFlag0 === true || ctFlag1 === true || ctFlag2 === true) && (ptFlag0 === true || ptFlag1 === true || ptFlag2 === true)) { // ct & pt - true
            this.gf.warningAlert("Reminder", "PT Transformer cannot be install. Please remove to continue.", "Close");
            return false;
          } else {
            return true;
          }
        } else if (newVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // Checking Mandatory (MVHV)

        } else { // Checking Mandatory (OPC)
          // Checking if adding check meter
          if (typeof (this.checkDeviceArray[1]) !== "undefined") {
            if (typeof (this.checkDeviceArray[1].ta0serialnum) !== "undefined" && this.checkDeviceArray[1].ta0serialnum !== "" && this.checkDeviceArray[1].ta0serialnum !== null) {
              this.gf.warningAlert("Reminder", "Check Meter cannot be install. Please remove to continue.", "Close");
              meterFlag = true;
              return false;
            } else {
              // Checking if adding ct / pt
              if (typeof (this.ctDevice0Array[0]) !== "undefined") {
                if (typeof (this.ctDevice0Array[0].ta0serialnum) !== "undefined" && this.ctDevice0Array[0].ta0serialnum !== "" && this.ctDevice0Array[0].ta0serialnum !== null) {
                  ctFlag0 = true;
                } else {
                  ctFlag0 = false;
                }
              }

              if (typeof (this.ctDevice1Array[0]) !== "undefined") {
                if (typeof (this.ctDevice1Array[0].ta0serialnum) !== "undefined" && this.ctDevice1Array[0].ta0serialnum !== "" && this.ctDevice1Array[0].ta0serialnum !== null) {
                  ctFlag1 = true;
                } else {
                  ctFlag1 = false;
                }
              }

              if (typeof (this.ctDevice2Array[0]) !== "undefined") {
                if (typeof (this.ctDevice2Array[0].ta0serialnum) !== "undefined" && this.ctDevice2Array[0].ta0serialnum !== "" && this.ctDevice2Array[0].ta0serialnum !== null) {
                  ctFlag2 = true;
                } else {
                  ctFlag2 = false;
                }
              }

              if (typeof (this.ptDevice0Array[0]) !== "undefined") {
                if (typeof (this.ptDevice0Array[0].ta0serialnum) !== "undefined" && this.ptDevice0Array[0].ta0serialnum !== "" && this.ptDevice0Array[0].ta0serialnum !== null) {
                  ptFlag0 = true;
                } else {
                  ptFlag0 = false;
                }
              }

              if (typeof (this.ptDevice1Array[0]) !== "undefined") {
                if (typeof (this.ptDevice1Array[0].ta0serialnum) !== "undefined" && this.ptDevice1Array[0].ta0serialnum !== "" && this.ptDevice1Array[0].ta0serialnum !== null) {
                  ptFlag1 = true;
                } else {
                  ptFlag1 = false;
                }
              }

              if (typeof (this.ptDevice2Array[0]) !== "undefined") {
                if (typeof (this.ptDevice2Array[0].ta0serialnum) !== "undefined" && this.ptDevice2Array[0].ta0serialnum !== "" && this.ptDevice2Array[0].ta0serialnum !== null) {
                  ptFlag2 = true;
                } else {
                  ptFlag2 = false;
                }
              }

              if ((ctFlag0 === true || ctFlag1 === true || ctFlag2 === true) || (ptFlag0 === true || ptFlag1 === true || ptFlag2 === true)) { // ct & pt - true
                this.gf.warningAlert("Reminder", "Please remove ct or pt to continue.", "Close");
                return false;
              } else {
                return true;
              }
            }
          } else if (typeof (this.ctDevice0Array[1]) !== "undefined" || typeof (this.ctDevice1Array[1]) !== "undefined" || typeof (this.ctDevice2Array[1]) !== "undefined") {
            if (typeof (this.ctDevice0Array[1]) !== "undefined" && typeof (this.ctDevice0Array[1].ta0serialnum) !== "undefined") {
              this.gf.warningAlert("Reminder", "CT Transformer 1 cannot be install. Please remove to continue.", "Close");
              meterFlag = true;
              return false;
            } else if (typeof (this.ctDevice1Array[1]) !== "undefined" && typeof (this.ctDevice1Array[1].ta0serialnum) !== "undefined") {
              this.gf.warningAlert("Reminder", "CT Transformer 2 cannot be install. Please remove to continue.", "Close");
              meterFlag = true;
              return false;
            } else if (typeof (this.ctDevice2Array[1]) !== "undefined" && typeof (this.ctDevice2Array[1].ta0serialnum) !== "undefined") {
              this.gf.warningAlert("Reminder", "CT Transformer 3 cannot be install. Please remove to continue.", "Close");
              meterFlag = true;
              return false;
            } else {
              // Checking if adding ct / pt
              if (typeof (this.ctDevice0Array[0]) !== "undefined") {
                if (typeof (this.ctDevice0Array[0].ta0serialnum) !== "undefined" && this.ctDevice0Array[0].ta0serialnum !== "" && this.ctDevice0Array[0].ta0serialnum !== null) {
                  ctFlag0 = true;
                } else {
                  ctFlag0 = false;
                }
              }

              if (typeof (this.ctDevice1Array[0]) !== "undefined") {
                if (typeof (this.ctDevice1Array[0].ta0serialnum) !== "undefined" && this.ctDevice1Array[0].ta0serialnum !== "" && this.ctDevice1Array[0].ta0serialnum !== null) {
                  ctFlag1 = true;
                } else {
                  ctFlag1 = false;
                }
              }

              if (typeof (this.ctDevice2Array[0]) !== "undefined") {
                if (typeof (this.ctDevice2Array[0].ta0serialnum) !== "undefined" && this.ctDevice2Array[0].ta0serialnum !== "" && this.ctDevice2Array[0].ta0serialnum !== null) {
                  ctFlag2 = true;
                } else {
                  ctFlag2 = false;
                }
              }

              if (typeof (this.ptDevice0Array[0]) !== "undefined") {
                if (typeof (this.ptDevice0Array[0].ta0serialnum) !== "undefined" && this.ptDevice0Array[0].ta0serialnum !== "" && this.ptDevice0Array[0].ta0serialnum !== null) {
                  ptFlag0 = true;
                } else {
                  ptFlag0 = false;
                }
              }

              if (typeof (this.ptDevice1Array[0]) !== "undefined") {
                if (typeof (this.ptDevice1Array[0].ta0serialnum) !== "undefined" && this.ptDevice1Array[0].ta0serialnum !== "" && this.ptDevice1Array[0].ta0serialnum !== null) {
                  ptFlag1 = true;
                } else {
                  ptFlag1 = false;
                }
              }

              if (typeof (this.ptDevice2Array[0]) !== "undefined") {
                if (typeof (this.ptDevice2Array[0].ta0serialnum) !== "undefined" && this.ptDevice2Array[0].ta0serialnum !== "" && this.ptDevice2Array[0].ta0serialnum !== null) {
                  ptFlag2 = true;
                } else {
                  ptFlag2 = false;
                }
              }

              if ((ctFlag0 === true || ctFlag1 === true || ctFlag2 === true) || (ptFlag0 === true || ptFlag1 === true || ptFlag2 === true)) { // ct & pt - true
                this.gf.warningAlert("Reminder", "Please remove ct or pt transformer to continue.", "Close");
                return false;
              } else {
                return true;
              }
            }
          } else {
            return true;
          }

        }

        // return true;
        // break;
      }
      default: {
        return true;
      }
    }
  }

  saveDeviceDetails() {

    console.log('Access saveDeviceDetails   >>>>>>>>>>>>>>>>>>>>>>>');

    var old_voltage = JSON.parse(JSON.stringify(this.item.json.ta0installationvoltage));
    if (typeof (this.item.json.ta0newvoltage) !== "undefined") {
      var new_voltage = JSON.parse(JSON.stringify(this.item.json.ta0newvoltage));
    }

    if (this.validateInstallation()) {

      switch (this.item.json.worktype) {
        case SoTypes.ZUDN:
        case SoTypes.ZRPC:
        case SoTypes.ZSRO:
        case SoTypes.ZINL:
        case SoTypes.ZINR:
          if (this.mainDeviceArray.length === 2) {
            for (var i = 0; i < this.item.json.ta0feeder.length; i++) {
              if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                if (i !== this.indexVal) {
                  for (var j = 0; j < this.item.json.ta0feeder[i].multiassetlocci.length; j++) {
                    if (this.item.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice === this.mainDeviceArray[0].assetnum ||
                      this.item.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice === this.mainDeviceArray[1].assetnum) {
                      if (typeof (this.item.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined'
                        && typeof (this.item.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined') {
                        var nMainMeterIndex = this.item.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                        var eMainMeterIndex = this.item.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                        this.item.json.ta0feeder[i].multiassetlocci[nMainMeterIndex].ta0controllingdevice = this.mainDeviceArray[1].assetnum;
                        this.item.json.ta0feeder[i].multiassetlocci[eMainMeterIndex].ta0controllingdevice = this.existingContDeviceMap.get(i).ta0controllingdevice;
                      }
                      if (typeof (this.item.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined' &&
                        typeof (this.item.json.ta0feeder[i].feederSetDesign[0].nMeter) === 'undefined') {
                        var eMainMeterIndex = this.item.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                        this.item.json.ta0feeder[i].multiassetlocci[eMainMeterIndex].ta0controllingdevice = this.mainDeviceArray[1].assetnum;
                      }
                      else if (typeof (this.item.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined'
                        && typeof (this.item.json.ta0feeder[i].feederSetDesign[0].eMeter) === 'undefined') {
                        var nMainMeterIndex = this.item.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                        this.item.json.ta0feeder[i].multiassetlocci[nMainMeterIndex].ta0controllingdevice = this.mainDeviceArray[1].assetnum;
                      }
                    }
                  }
                }
              }
            }

            for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
              if (typeof (this.item.json.ta0feeder[k].multiassetlocci) !== 'undefined') {
                for (var l = 0; l < this.item.json.ta0feeder[k].multiassetlocci.length; l++) {
                  if (this.item.json.ta0feeder[k].multiassetlocci[l].ta0bcrmuploadindicator === 'M_N_EQUIP' &&
                    this.item.json.ta0feeder[k].multiassetlocci[l].assetnum === this.mainDeviceArray[0].ta0controllingdevice) {
                    var eMainMeterIndex = this.item.json.ta0feeder[this.indexVal].feederSetDesign[0].eMeterIndex;
                    this.item.json.ta0feeder[this.indexVal].multiassetlocci[eMainMeterIndex].ta0controllingdevice = this.item.json.ta0feeder[k].multiassetlocci[l].ta0olddeviceserialnum;
                    break;
                  }
                }
              }
            }
          }
      }

      this.multiAssetLocciArray = [];
      switch (this.itemOri.json.worktype) {
        case SoTypes.ZIST:
        case SoTypes.ZISR: {
          console.log('case ZISR');
          if (typeof (this.mainDeviceArray[0].assetnum) !== 'undefined' && this.mainDeviceArray[0].assetnum !== null && this.mainDeviceArray[0].assetnum !== '') {
            if (this.item.json.ta0installationvoltage === "03" && this.item.json.ta0allocationtype === '90') {
              this.mainDeviceArray[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            }
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.mainDeviceArray[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) {
              this.mainDeviceArray[0].ta0existingdevice = true;
              this.mainDeviceArray[0].ta0installind = false;
              this.mainDeviceArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
            }
            else {
              this.mainDeviceArray[0].ta0existingdevice = false;
              this.mainDeviceArray[0].ta0installind = true;
              this.mainDeviceArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
            }
            this.mainDeviceArray[0].ta0registerstatus = 'N';
            this.mainDeviceArray[0].ta0silstickerstatus = 'N';
            this.mainDeviceArray[0].ta0testingstatus = 'N';
            this.multiAssetLocciArray.push(this.mainDeviceArray[0]);
          }

          if (typeof (this.mainModemArray[0].assetnum) !== 'undefined' && this.mainModemArray[0].assetnum !== null && this.mainModemArray[0].assetnum !== '') {
            this.mainModemArray[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            this.mainModemArray[0].siteid = this.itemOri.json.siteid;
            this.mainModemArray[0].location = this.mainDeviceArray[0].location;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.mainModemArray[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD) {
              this.mainModemArray[0].ta0existingdevice = true;
              this.mainModemArray[0].ta0installind = false;
              this.mainModemArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD;
            }
            else {
              this.mainModemArray[0].ta0existingdevice = false;
              this.mainModemArray[0].ta0installind = true;
              this.mainModemArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD;
            }
            this.mainModemArray[0].ta0registerstatus = 'Y';
            this.mainModemArray[0].ta0testingstatus = 'N';
            this.multiAssetLocciArray.push(this.mainModemArray[0]);

            console.log('this.mainModemArray[0] : '+JSON.stringify(this.mainModemArray));
          }

          if (typeof (this.mainSimcardArray[0].assetnum) !== 'undefined' && this.mainSimcardArray[0].assetnum !== null && this.mainSimcardArray[0].assetnum !== '') {
            this.mainSimcardArray[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            this.mainSimcardArray[0].siteid = this.itemOri.json.siteid;
            this.mainSimcardArray[0].location = this.mainDeviceArray[0].location;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.mainSimcardArray[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM) {
              this.mainSimcardArray[0].ta0existingdevice = true;
              this.mainSimcardArray[0].ta0installind = false;
              this.mainSimcardArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM;
            }
            else {
              this.mainSimcardArray[0].ta0existingdevice = false;
              this.mainSimcardArray[0].ta0installind = true;
              this.mainSimcardArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM;
            }
            this.mainSimcardArray[0].ta0registerstatus = 'Y';
            this.mainSimcardArray[0].ta0testingstatus = 'N';
            this.multiAssetLocciArray.push(this.mainSimcardArray[0]);

            console.log('this.mainSimcardArray[0] : '+JSON.stringify(this.mainSimcardArray));
          }

          if (typeof (this.checkDeviceArray[0].assetnum) !== 'undefined' && this.checkDeviceArray[0].assetnum !== null && this.checkDeviceArray[0].assetnum !== '') {
            this.checkDeviceArray[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.checkDeviceArray[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
              this.checkDeviceArray[0].ta0existingdevice = true;
              this.checkDeviceArray[0].ta0installind = false;
              this.checkDeviceArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK;
            }
            else {
              this.checkDeviceArray[0].ta0existingdevice = false;
              this.checkDeviceArray[0].ta0installind = true;
              this.checkDeviceArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK;
            }
            this.checkDeviceArray[0].ta0registerstatus = 'N';
            this.checkDeviceArray[0].ta0silstickerstatus = 'N';
            this.checkDeviceArray[0].ta0testingstatus = 'N';
            this.multiAssetLocciArray.push(this.checkDeviceArray[0]);
          }

          if (typeof (this.checkModemArray[0].assetnum) !== 'undefined' && this.checkModemArray[0].assetnum !== null && this.checkModemArray[0].assetnum !== '') {
            this.checkModemArray[0].ta0controllingdevice = this.checkDeviceArray[0].assetnum;
            this.checkModemArray[0].siteid = this.itemOri.json.siteid;
            this.checkModemArray[0].location = this.checkDeviceArray[0].location;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.checkModemArray[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD) {
              this.checkModemArray[0].ta0existingdevice = true;
              this.checkModemArray[0].ta0installind = false;
              this.checkModemArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD;
            }
            else {
              this.checkModemArray[0].ta0existingdevice = false;
              this.checkModemArray[0].ta0installind = true;
              this.checkModemArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD;
            }
            this.checkModemArray[0].ta0registerstatus = 'Y';
            this.checkModemArray[0].ta0testingstatus = 'N';
            this.multiAssetLocciArray.push(this.checkModemArray[0]);

            console.log('this.checkModemArray[0] : '+JSON.stringify(this.checkModemArray));
          }

          if (typeof (this.checkSimcardArray[0].assetnum) !== 'undefined' && this.checkSimcardArray[0].assetnum !== null && this.checkSimcardArray[0].assetnum !== '') {
            this.checkSimcardArray[0].ta0controllingdevice = this.checkDeviceArray[0].assetnum;
            this.checkSimcardArray[0].siteid = this.itemOri.json.siteid;
            this.checkSimcardArray[0].location = this.checkDeviceArray[0].location;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.checkSimcardArray[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM) {
              this.checkSimcardArray[0].ta0existingdevice = true;
              this.checkSimcardArray[0].ta0installind = false;
              this.checkSimcardArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM;
            }
            else {
              this.checkSimcardArray[0].ta0existingdevice = false;
              this.checkSimcardArray[0].ta0installind = true;
              this.checkSimcardArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM;
            }
            this.checkSimcardArray[0].ta0registerstatus = 'Y';
            this.checkSimcardArray[0].ta0testingstatus = 'N';
            this.multiAssetLocciArray.push(this.checkSimcardArray[0]);

            console.log('this.checkSimcardArray[0] : '+JSON.stringify(this.checkSimcardArray));
          }

          if ((typeof (this.ctDevice0Array[0].assetnum) !== 'undefined' || typeof (this.ctDevice0Array[0].ta0serialnum) !== 'undefined') &&
            (this.ctDevice0Array[0].assetnum !== null || this.ctDevice0Array[0].ta0serialnum !== null) &&
            (this.ctDevice0Array[0].assetnum !== '' || this.ctDevice0Array[0].ta0serialnum !== '')) {
            // this.gf.warningAlert("TRANSFORMER", "Device 1 Serial Number: " + this.ctDevice0Array[0].ta0serialnum, "Close");
            this.ctDevice0Array[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.ctDevice0Array[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT) {
              this.ctDevice0Array[0].ta0existingdevice = true;
              this.ctDevice0Array[0].ta0installind = false;
              this.ctDevice0Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
            }
            else {
              this.ctDevice0Array[0].ta0existingdevice = false;
              this.ctDevice0Array[0].ta0installind = true;
              this.ctDevice0Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
            }
            this.ctDevice0Array[0].siteid = this.itemOri.json.siteid;
            this.ctDevice0Array[0].ta0registerstatus = 'Y';
            if (typeof (this.ctDevice0Array[0].loc_windingGroup) !== 'undefined') {
              var regGroup = new RegisterGroupDetails();
              regGroup.ta0windinggroup = this.ctDevice0Array[0].loc_windingGroup;
              regGroup.ta0transformertype = this.assignwindingTransformerType();
              this.ctDevice0Array[0].ta0registers = [];
              this.ctDevice0Array[0].ta0registers.push(regGroup);

            }
            this.multiAssetLocciArray.push(this.ctDevice0Array[0]);
          }

          if ((typeof (this.ctDevice1Array[0].assetnum) !== 'undefined' || typeof (this.ctDevice1Array[0].ta0serialnum) !== 'undefined') &&
            (this.ctDevice1Array[0].assetnum !== null || this.ctDevice1Array[0].ta0serialnum !== null) &&
            (this.ctDevice1Array[0].assetnum !== '' || this.ctDevice1Array[0].ta0serialnum !== '')) {
            // this.gf.warningAlert("TRANSFORMER", "Device 2 Serial Number: " + this.ctDevice1Array[0].ta0serialnum, "Close");
            this.ctDevice1Array[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;

            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.ctDevice1Array[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT) {
              this.ctDevice1Array[0].ta0existingdevice = true;
              this.ctDevice1Array[0].ta0installind = false;
              this.ctDevice1Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
            }
            else {
              this.ctDevice1Array[0].ta0existingdevice = false;
              this.ctDevice1Array[0].ta0installind = true;
              this.ctDevice1Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
            }

            if (typeof (this.ctDevice1Array[0].loc_windingGroup) !== 'undefined') {
              var regGroup = new RegisterGroupDetails();
              regGroup.ta0windinggroup = this.ctDevice1Array[0].loc_windingGroup;
              regGroup.ta0transformertype = this.assignwindingTransformerType();
              this.ctDevice1Array[0].ta0registers = [];
              this.ctDevice1Array[0].ta0registers.push(regGroup);
            }
            this.ctDevice1Array[0].siteid = this.itemOri.json.siteid;
            this.ctDevice1Array[0].ta0registerstatus = 'Y';
            this.multiAssetLocciArray.push(this.ctDevice1Array[0]);
          }

          if ((typeof (this.ctDevice2Array[0].assetnum) !== 'undefined' || typeof (this.ctDevice2Array[0].ta0serialnum) !== 'undefined') &&
            (this.ctDevice2Array[0].assetnum !== null || this.ctDevice2Array[0].ta0serialnum !== null) &&
            (this.ctDevice2Array[0].assetnum !== '' || this.ctDevice2Array[0].ta0serialnum !== '')) {
            // this.gf.warningAlert("TRANSFORMER", "Device 3 Serial Number: " + this.ctDevice2Array[0].ta0serialnum, "Close");
            this.ctDevice2Array[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            if ((this.worktype === SoTypes.ZISR || this.worktype === SoTypes.ZIST) && this.ctDevice2Array[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT) {
              this.ctDevice2Array[0].ta0existingdevice = true;
              this.ctDevice2Array[0].ta0installind = false;
              this.ctDevice2Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
            }
            else {
              this.ctDevice2Array[0].ta0existingdevice = false;
              this.ctDevice2Array[0].ta0installind = true;
              this.ctDevice2Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
            }
            if (typeof (this.ctDevice2Array[0].loc_windingGroup) !== 'undefined') {
              var regGroup = new RegisterGroupDetails();
              regGroup.ta0windinggroup = this.ctDevice2Array[0].loc_windingGroup;
              regGroup.ta0transformertype = this.assignwindingTransformerType();
              this.ctDevice2Array[0].ta0registers = [];
              this.ctDevice2Array[0].ta0registers.push(regGroup);
            }
            this.ctDevice2Array[0].siteid = this.itemOri.json.siteid;
            this.ctDevice2Array[0].ta0registerstatus = 'Y';
            this.multiAssetLocciArray.push(this.ctDevice2Array[0]);
          }

          if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
            if ((typeof (this.ptDevice0Array[0].assetnum) !== 'undefined' || typeof (this.ptDevice0Array[0].ta0serialnum) !== 'undefined') &&
              (this.ptDevice0Array[0].assetnum !== null || this.ptDevice0Array[0].ta0serialnum !== null) &&
              (this.ptDevice0Array[0].assetnum !== '' || this.ptDevice0Array[0].ta0serialnum !== '')) {
              this.ptDevice0Array[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
              if (this.worktype === SoTypes.ZISR || (this.worktype === SoTypes.ZIST && this.ptDevice0Array[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT)) {
                this.ptDevice0Array[0].ta0existingdevice = true;
                this.ptDevice0Array[0].ta0installind = false;
                this.ptDevice0Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
              }
              else {
                this.ptDevice0Array[0].ta0existingdevice = false;
                this.ptDevice0Array[0].ta0installind = true;
                this.ptDevice0Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
              }
              if (typeof (this.ptDevice0Array[0].loc_windingGroup) !== 'undefined') {
                var regGroup = new RegisterGroupDetails();
                regGroup.ta0windinggroup = this.ptDevice0Array[0].loc_windingGroup;
                regGroup.ta0transformertype = this.assignwindingTransformerType();
                this.ptDevice0Array[0].ta0registers = [];
                this.ptDevice0Array[0].ta0registers.push(regGroup);
              }
              this.ptDevice0Array[0].siteid = this.itemOri.json.siteid;
              this.ptDevice0Array[0].ta0registerstatus = 'Y';
              this.multiAssetLocciArray.push(this.ptDevice0Array[0]);
            }

            if ((typeof (this.ptDevice1Array[0].assetnum) !== 'undefined' || typeof (this.ptDevice1Array[0].ta0serialnum) !== 'undefined') &&
              (this.ptDevice1Array[0].assetnum !== null || this.ptDevice1Array[0].ta0serialnum !== null) &&
              (this.ptDevice1Array[0].assetnum !== '' || this.ptDevice1Array[0].ta0serialnum !== null)) {
              this.ptDevice1Array[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
              if (this.worktype === SoTypes.ZISR || (this.worktype === SoTypes.ZIST && this.ptDevice1Array[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT)) {
                this.ptDevice1Array[0].ta0existingdevice = true;
                this.ptDevice1Array[0].ta0installind = false;
                this.ptDevice1Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
              }
              else {
                this.ptDevice1Array[0].ta0existingdevice = false;
                this.ptDevice1Array[0].ta0installind = true;
                this.ptDevice1Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
              }
              if (typeof (this.ptDevice1Array[0].loc_windingGroup) !== 'undefined') {
                var regGroup = new RegisterGroupDetails();
                regGroup.ta0windinggroup = this.ptDevice1Array[0].loc_windingGroup;
                regGroup.ta0transformertype = this.assignwindingTransformerType();
                this.ptDevice1Array[0].ta0registers = [];
                this.ptDevice1Array[0].ta0registers.push(regGroup);
              }
              this.ptDevice1Array[0].siteid = this.itemOri.json.siteid;
              this.ptDevice1Array[0].ta0registerstatus = 'Y';
              this.multiAssetLocciArray.push(this.ptDevice1Array[0]);
            }

            if ((typeof (this.ptDevice2Array[0].assetnum) !== 'undefined' || typeof (this.ptDevice2Array[0].ta0serialnum) !== 'undefined') &&
              (this.ptDevice2Array[0].assetnum !== null || this.ptDevice2Array[0].ta0serialnum !== null) &&
              (this.ptDevice2Array[0].assetnum !== '' || this.ptDevice2Array[0].ta0serialnum !== '')) {
              this.ptDevice2Array[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
              if (this.worktype === SoTypes.ZISR || (this.worktype === SoTypes.ZIST && this.ptDevice2Array[0].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT)) {
                this.ptDevice2Array[0].ta0existingdevice = true;
                this.ptDevice2Array[0].ta0installind = false;
                this.ptDevice2Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
              }
              else {
                this.ptDevice2Array[0].ta0existingdevice = false;
                this.ptDevice2Array[0].ta0installind = true;
                this.ptDevice2Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
              }
              if (typeof (this.ptDevice2Array[0].loc_windingGroup) !== 'undefined') {
                var regGroup = new RegisterGroupDetails();
                regGroup.ta0windinggroup = this.ptDevice2Array[0].loc_windingGroup;
                regGroup.ta0transformertype = this.assignwindingTransformerType();
                this.ptDevice2Array[0].ta0registers = [];
                this.ptDevice2Array[0].ta0registers.push(regGroup);
              }
              this.ptDevice2Array[0].siteid = this.itemOri.json.siteid;
              this.ptDevice2Array[0].ta0registerstatus = 'Y';
              this.multiAssetLocciArray.push(this.ptDevice2Array[0]);
            }
          }
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = [];
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = this.multiAssetLocciArray;

          console.log('>>>> multiassetlocci : '+JSON.stringify(this.item.json.ta0feeder[this.indexVal].multiassetlocci));
          break;
        }

        case SoTypes.ZRMV:
        case SoTypes.ZRCE: {
          console.log('case ZRCE');
          if (typeof (this.mainDeviceArray[0].assetnum) !== 'undefined') {
            this.mainDeviceArray[0].ta0existingdevice = true;
            this.mainDeviceArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
            this.mainDeviceArray[0].ta0registerstatus = 'N';
            this.mainDeviceArray[0].ta0testingstatus = 'Y';
            if (this.mainDeviceArray[0].ta0removeind === false) {
              this.mainDeviceArray[0].ta0replaceind = false;
              if (typeof (this.mainDeviceArray[0].ta0systemstatus) !== "undefined" || typeof (this.mainDeviceArray[0].ta0devicestatus) !== "undefined") {
                this.mainDeviceArray[0].ta0systemstatus = "D";
                if (typeof (this.mainDeviceArray[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.mainDeviceArray[0].ta0devicestatus.length; i++) {
                    this.mainDeviceArray[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.mainDeviceArray[0]);
          }

          if (typeof (this.mainModemArray[0].assetnum) !== 'undefined') {
            console.log('this.mainModemArray[0] NOT undefined');
            this.mainModemArray[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            this.mainModemArray[0].siteid = this.itemOri.json.siteid;
            this.mainModemArray[0].location = this.mainDeviceArray[0].location;
            this.mainModemArray[0].ta0existingdevice = true;
            this.mainModemArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD;
            this.mainModemArray[0].ta0registerstatus = 'N';
            this.mainModemArray[0].ta0testingstatus = 'Y';
            if (this.mainModemArray[0].ta0removeind === false) {
              this.mainModemArray[0].ta0replaceind = false;
              if (typeof (this.mainModemArray[0].ta0systemstatus) !== "undefined" || typeof (this.mainModemArray[0].ta0devicestatus) !== "undefined") {
                this.mainModemArray[0].ta0systemstatus = "D";
                if (typeof (this.mainModemArray[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.mainModemArray[0].ta0devicestatus.length; i++) {
                    this.mainModemArray[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.mainModemArray[0]);
            console.log('>>>>>> this.mainModemArray : '+JSON.stringify(this.mainModemArray));
          }

          if (typeof (this.mainSimcardArray[0].assetnum) !== 'undefined') {
            console.log('this.mainSimcardArray[0] NOT undefined');
            this.mainSimcardArray[0].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
            this.mainSimcardArray[0].siteid = this.itemOri.json.siteid;
            this.mainSimcardArray[0].location = this.mainDeviceArray[0].location;
            this.mainSimcardArray[0].ta0existingdevice = true;
            this.mainSimcardArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM;
            this.mainSimcardArray[0].ta0registerstatus = 'N';
            this.mainSimcardArray[0].ta0testingstatus = 'Y';
            if (this.mainSimcardArray[0].ta0removeind === false) {
              this.mainSimcardArray[0].ta0replaceind = false;
              if (typeof (this.mainSimcardArray[0].ta0systemstatus) !== "undefined" || typeof (this.mainSimcardArray[0].ta0devicestatus) !== "undefined") {
                this.mainSimcardArray[0].ta0systemstatus = "D";
                if (typeof (this.mainSimcardArray[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.mainSimcardArray[0].ta0devicestatus.length; i++) {
                    this.mainSimcardArray[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.mainSimcardArray[0]);
            console.log('>>>>>> this.mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));
          }

          if (typeof (this.checkDeviceArray[0].assetnum) !== 'undefined') {
            console.log('this.checkDeviceArray[0] NOT undefined');
            this.checkDeviceArray[0].ta0existingdevice = true;
            this.checkDeviceArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK;
            this.checkDeviceArray[0].ta0registerstatus = 'N';
            this.checkDeviceArray[0].ta0testingstatus = 'Y';
            if (this.checkDeviceArray[0].ta0removeind === false) {
              this.checkDeviceArray[0].ta0replaceind = false;
              if (typeof (this.checkDeviceArray[0].ta0systemstatus) !== "undefined" || typeof (this.checkDeviceArray[0].ta0devicestatus) !== "undefined") {
                this.checkDeviceArray[0].ta0systemstatus = "D";
                if (typeof (this.checkDeviceArray[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.checkDeviceArray[0].ta0devicestatus.length; i++) {
                    this.checkDeviceArray[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.checkDeviceArray[0]);
            console.log('>>>>>> this.checkDeviceArray : '+JSON.stringify(this.checkDeviceArray));
          }

          if (typeof (this.checkModemArray[0].assetnum) !== 'undefined') {
            console.log('this.checkModemArray[0] NOT undefined');
            this.checkModemArray[0].ta0controllingdevice = this.checkDeviceArray[0].assetnum;
            this.checkModemArray[0].siteid = this.itemOri.json.siteid;
            this.checkModemArray[0].location = this.checkDeviceArray[0].location;
            this.checkModemArray[0].ta0existingdevice = true;
            this.checkModemArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD;
            this.checkModemArray[0].ta0registerstatus = 'N';
            this.checkModemArray[0].ta0testingstatus = 'Y';
            if (this.checkModemArray[0].ta0removeind === false) {
              this.checkModemArray[0].ta0replaceind = false;
              if (typeof (this.checkModemArray[0].ta0systemstatus) !== "undefined" || typeof (this.checkModemArray[0].ta0devicestatus) !== "undefined") {
                this.checkModemArray[0].ta0systemstatus = "D";
                if (typeof (this.checkModemArray[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.checkModemArray[0].ta0devicestatus.length; i++) {
                    this.checkModemArray[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.checkModemArray[0]);
            console.log('>>>>>> this.checkModemArray : '+JSON.stringify(this.checkModemArray));
          }

          if (typeof (this.checkSimcardArray[0].assetnum) !== 'undefined') {
            console.log('this.checkSimcardArray[0] NOT undefined');
            this.checkSimcardArray[0].ta0controllingdevice = this.checkDeviceArray[0].assetnum;
            this.checkSimcardArray[0].siteid = this.itemOri.json.siteid;
            this.checkSimcardArray[0].location = this.checkDeviceArray[0].location;
            this.checkSimcardArray[0].ta0existingdevice = true;
            this.checkSimcardArray[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM;
            this.checkSimcardArray[0].ta0registerstatus = 'N';
            this.checkSimcardArray[0].ta0testingstatus = 'Y';
            if (this.checkSimcardArray[0].ta0removeind === false) {
              this.checkSimcardArray[0].ta0replaceind = false;
              if (typeof (this.checkSimcardArray[0].ta0systemstatus) !== "undefined" || typeof (this.checkSimcardArray[0].ta0devicestatus) !== "undefined") {
                this.checkSimcardArray[0].ta0systemstatus = "D";
                if (typeof (this.checkSimcardArray[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.checkSimcardArray[0].ta0devicestatus.length; i++) {
                    this.checkSimcardArray[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.checkSimcardArray[0]);
            console.log('>>>>>> this.checkSimcardArray : '+JSON.stringify(this.checkSimcardArray));
          }

          if (typeof (this.ctDevice0Array[0].assetnum) !== 'undefined') {
            this.ctDevice0Array[0].ta0existingdevice = true;
            this.ctDevice0Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
            if (!this.ctDevice0Array[0].ta0removeind) {
              this.ctDevice0Array[0].ta0registerstatus = 'Y';
            }
            else {
              this.ctDevice0Array[0].ta0registerstatus = 'N';
            }
            if (this.ctDevice0Array[0].ta0removeind === false) {
              this.ctDevice0Array[0].ta0replaceind = false;
              if (typeof (this.ctDevice0Array[0].ta0systemstatus) !== "undefined" || typeof (this.ctDevice0Array[0].ta0devicestatus) !== "undefined") {
                this.ctDevice0Array[0].ta0systemstatus = "D";
                if (typeof (this.ctDevice0Array[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.ctDevice0Array[0].ta0devicestatus.length; i++) {
                    this.ctDevice0Array[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.ctDevice0Array[0]);
          }

          if (typeof (this.ctDevice1Array[0].assetnum) !== 'undefined') {
            this.ctDevice1Array[0].ta0existingdevice = true;
            this.ctDevice1Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
            if (!this.ctDevice1Array[0].ta0removeind) {
              this.ctDevice1Array[0].ta0registerstatus = 'Y';
            }
            else {
              this.ctDevice1Array[0].ta0registerstatus = 'N';
            }
            if (this.ctDevice1Array[0].ta0removeind === false) {
              this.ctDevice1Array[0].ta0replaceind = false;
              if (typeof (this.ctDevice1Array[0].ta0systemstatus) !== "undefined" || typeof (this.ctDevice1Array[0].ta0devicestatus) !== "undefined") {
                this.ctDevice1Array[0].ta0systemstatus = "D";
                if (typeof (this.ctDevice1Array[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.ctDevice1Array[0].ta0devicestatus.length; i++) {
                    this.ctDevice1Array[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.ctDevice1Array[0]);
          }

          if (typeof (this.ctDevice2Array[0].assetnum) !== 'undefined') {
            this.ctDevice2Array[0].ta0existingdevice = true;
            this.ctDevice2Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
            if (!this.ctDevice2Array[0].ta0removeind) {
              this.ctDevice2Array[0].ta0registerstatus = 'Y';
            }
            else {
              this.ctDevice2Array[0].ta0registerstatus = 'N';
            }
            if (this.ctDevice2Array[0].ta0removeind === false) {
              this.ctDevice2Array[0].ta0replaceind = false;
              // Remove Device Status
              if (typeof (this.ctDevice2Array[0].ta0systemstatus) !== "undefined" || typeof (this.ctDevice2Array[0].ta0devicestatus) !== "undefined") {
                this.ctDevice2Array[0].ta0systemstatus = "D";
                if (typeof (this.ctDevice2Array[0].ta0devicestatus) !== "undefined") {
                  for (var i = 0; i < this.ctDevice2Array[0].ta0devicestatus.length; i++) {
                    this.ctDevice2Array[0].ta0devicestatus[i]._action = "Delete";
                  }
                }
              }
            }
            this.multiAssetLocciArray.push(this.ctDevice2Array[0]);
          }

          if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
            if (this.ptDevice0Array.length !== 0 && typeof (this.ptDevice0Array[0].assetnum) !== 'undefined') {
              this.ptDevice0Array[0].ta0existingdevice = true;
              this.ptDevice0Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
              if (!this.ptDevice0Array[0].ta0removeind) {
                this.ptDevice0Array[0].ta0registerstatus = 'Y';
              }
              else {
                this.ptDevice0Array[0].ta0registerstatus = 'N';
              }
              if (this.ptDevice0Array[0].ta0removeind === false) {
                this.ptDevice0Array[0].ta0replaceind = false;
                // Remove Device Status
                if (typeof (this.ptDevice0Array[0].ta0systemstatus) !== "undefined" || typeof (this.ptDevice0Array[0].ta0devicestatus) !== "undefined") {
                  this.ptDevice0Array[0].ta0systemstatus = "D";
                  if (typeof (this.ptDevice0Array[0].ta0devicestatus) !== "undefined") {
                    for (var i = 0; i < this.ptDevice0Array[0].ta0devicestatus.length; i++) {
                      this.ptDevice0Array[0].ta0devicestatus[i]._action = "Delete";
                    }
                  }
                }
              }
              this.multiAssetLocciArray.push(this.ptDevice0Array[0]);
            }

            if (this.ptDevice1Array.length !== 0 && typeof (this.ptDevice1Array[0].assetnum) !== 'undefined') {
              this.ptDevice1Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
              if (!this.ptDevice1Array[0].ta0removeind) {
                this.ptDevice1Array[0].ta0registerstatus = 'Y';
              } else {
                this.ptDevice1Array[0].ta0registerstatus = 'N';
              }
              if (this.ptDevice1Array[0].ta0removeind === false) {
                this.ptDevice1Array[0].ta0replaceind = false;
                // Remove Device Status
                if (typeof (this.ptDevice1Array[0].ta0systemstatus) !== "undefined" || typeof (this.ptDevice1Array[0].ta0devicestatus) !== "undefined") {
                  this.ptDevice1Array[0].ta0systemstatus = "D";
                  if (typeof (this.ptDevice1Array[0].ta0devicestatus) !== "undefined") {
                    for (var i = 0; i < this.ptDevice1Array[0].ta0devicestatus.length; i++) {
                      this.ptDevice1Array[0].ta0devicestatus[i]._action = "Delete";
                    }
                  }
                }
              }
              this.multiAssetLocciArray.push(this.ptDevice1Array[0]);
            }

            if (this.ptDevice2Array.length !== 0 && typeof (this.ptDevice2Array[0].assetnum) !== 'undefined') {
              this.ptDevice2Array[0].ta0existingdevice = true;
              this.ptDevice2Array[0].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
              if (!this.ptDevice2Array[0].ta0removeind) {
                this.ptDevice2Array[0].ta0registerstatus = 'Y';
              } else {
                this.ptDevice2Array[0].ta0registerstatus = 'N';
              }
              if (this.ptDevice2Array[0].ta0removeind === false) {
                this.ptDevice2Array[0].ta0replaceind = false;
                // Remove Device Status
                if (typeof (this.ptDevice2Array[0].ta0systemstatus) !== "undefined" || typeof (this.ptDevice2Array[0].ta0devicestatus) !== "undefined") {
                  this.ptDevice2Array[0].ta0systemstatus = "D";
                  if (typeof (this.ptDevice2Array[0].ta0devicestatus) !== "undefined") {
                    for (var i = 0; i < this.ptDevice2Array[0].ta0devicestatus.length; i++) {
                      this.ptDevice2Array[0].ta0devicestatus[i]._action = "Delete";
                    }
                  }
                }
              }
              this.multiAssetLocciArray.push(this.ptDevice2Array[0]);
            }
          }

          this.item.json.ta0feeder[this.indexVal].multiassetlocci = [];
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = this.multiAssetLocciArray;

          console.log('>>> multiassetlocci : '+this.item.json.ta0feeder[this.indexVal].multiassetlocci);
          break;
        }

        case SoTypes.ZUDN:
        case SoTypes.ZRPC: {
          console.log('case ZRPC');
          for (var i = 0; i < this.mainDeviceArray.length; i++) {
            if (typeof (this.mainDeviceArray[i].assetnum) !== 'undefined' && this.mainDeviceArray[i].assetnum !== null && this.mainDeviceArray[i].assetnum !== '') {
              if (i == 0) {
                this.mainDeviceArray[i].ta0existingdevice = true;
                this.mainDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
              } else {
                this.mainDeviceArray[i].ta0olddeviceserialnum = this.mainDeviceArray[0].assetnum;
                this.mainDeviceArray[i].ta0existingdevice = false;
                this.mainDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
              }
              this.mainDeviceArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.mainDeviceArray[i].ta0registerstatus = 'N';
              // this.mainDeviceArray[i].ta0silstickerstatus = 'N';
              if (this.mainDeviceArray[i].ta0testingstatus !== "Y") {
                this.mainDeviceArray[i].ta0testingstatus = 'N';
              }
              this.multiAssetLocciArray.push(this.mainDeviceArray[i]);
              
            }
          }

          console.log('>>>>>> this.mainDeviceArray : '+JSON.stringify(this.mainDeviceArray));

          for (var i = 0; i < this.mainModemArray.length; i++) {
            if (typeof (this.mainModemArray[i].assetnum) !== 'undefined' && this.mainModemArray[i].assetnum !== null && this.mainModemArray[i].assetnum !== '') {
              if (i == 0) {
                //this.mainModemArray[i].ta0controllingdevice = this.mainDeviceArray[i].assetnum;
                this.mainModemArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.mainModemArray.length, this.mainDeviceArray);
                this.mainModemArray[i].location = this.mainDeviceArray[i].location;
                this.mainModemArray[i].ta0existingdevice = true;
                this.mainModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD;
              } else {
                this.mainModemArray[i].ta0olddeviceserialnum = this.mainModemArray[0].assetnum;
                // this.mainModemArray[i].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
                this.mainModemArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.mainModemArray.length, this.mainDeviceArray);
                this.mainModemArray[i].location = this.mainDeviceArray[0].location;
                this.mainModemArray[i].ta0existingdevice = false;
                this.mainModemArray[i].ta0installind = true;
                this.mainModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD;
              }
              this.mainModemArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.mainModemArray[i].ta0registerstatus = 'N';
              if (this.mainModemArray[i].ta0testingstatus !== "Y") {
                this.mainModemArray[i].ta0testingstatus = 'N';
              }
              if (i === 1 && typeof (this.mainDeviceArray[1]) === "undefined") {
                this.mainModemArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.mainModemArray[i]);
            }
          }

          console.log('>>>>>> this.mainModemArray : '+JSON.stringify(this.mainModemArray));

          for (var i = 0; i < this.mainSimcardArray.length; i++) {
            if (typeof (this.mainSimcardArray[i].assetnum) !== 'undefined' && this.mainSimcardArray[i].assetnum !== null && this.mainSimcardArray[i].assetnum !== '') {
              if (i == 0) {
                //this.mainSimcardArray[i].ta0controllingdevice = this.mainDeviceArray[i].assetnum;
                this.mainSimcardArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.mainSimcardArray.length, this.mainDeviceArray);
                this.mainSimcardArray[i].location = this.mainDeviceArray[i].location;
                this.mainSimcardArray[i].ta0existingdevice = true;
                this.mainSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM;
              } else {
                this.mainSimcardArray[i].ta0olddeviceserialnum = this.mainSimcardArray[0].assetnum;
                // this.mainSimcardArray[i].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
                this.mainSimcardArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.mainSimcardArray.length, this.mainDeviceArray);
                this.mainSimcardArray[i].location = this.mainDeviceArray[0].location;
                this.mainSimcardArray[i].ta0existingdevice = false;
                this.mainSimcardArray[i].ta0installind = true;
                this.mainSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM;
              }
              this.mainSimcardArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.mainSimcardArray[i].ta0registerstatus = 'N';
              if (this.mainSimcardArray[i].ta0testingstatus !== "Y") {
                this.mainSimcardArray[i].ta0testingstatus = 'N';
              }
              if (i === 1 && typeof (this.mainDeviceArray[1]) === "undefined") {
                this.mainSimcardArray[i].ta0registerstatus = 'Y';
                this.mainSimcardArray[i].ta0testingstatus = 'Y';
              }
              this.mainSimcardArray[i].ta0testingstatus = 'N';
              this.multiAssetLocciArray.push(this.mainSimcardArray[i]);
            }
          }

          console.log('>>>>>> this.mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));

          for (var i = 0; i < this.checkDeviceArray.length; i++) {
            if (typeof (this.checkDeviceArray[i].assetnum) !== 'undefined' && this.checkDeviceArray[i].assetnum !== null && this.checkDeviceArray[i].assetnum !== '') {
              if (i == 0) {
                this.checkDeviceArray[i].ta0existingdevice = true;
                this.checkDeviceArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.checkDeviceArray.length, this.mainDeviceArray);
                this.checkDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK;
              }
              else {
                this.checkDeviceArray[i].ta0olddeviceserialnum = this.checkDeviceArray[0].assetnum;
                this.checkDeviceArray[i].ta0existingdevice = false;
                this.checkDeviceArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.checkDeviceArray.length, this.mainDeviceArray);
                this.checkDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK;
              }
              this.checkDeviceArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.checkDeviceArray[i].ta0registerstatus = 'N';
              // this.checkDeviceArray[i].ta0silstickerstatus = 'N';
              if (this.checkDeviceArray[i].ta0testingstatus !== "Y") {
                this.checkDeviceArray[i].ta0testingstatus = 'N';
              }
              this.multiAssetLocciArray.push(this.checkDeviceArray[i]);
            }
          }

          console.log('>>>>>> this.checkDeviceArray : '+JSON.stringify(this.checkDeviceArray));

          for (var i = 0; i < this.checkModemArray.length; i++) {
            if (typeof (this.checkModemArray[i].assetnum) !== 'undefined' && this.checkModemArray[i].assetnum !== null && this.checkModemArray[i].assetnum !== '') {
              if (i == 0) {
                this.checkModemArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.checkModemArray.length, this.checkDeviceArray);
                this.checkModemArray[i].location = this.checkDeviceArray[i].location;
                this.checkModemArray[i].ta0existingdevice = true;
                this.checkModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD;
              }
              else {
                this.checkModemArray[i].ta0olddeviceserialnum = this.checkModemArray[0].assetnum;
                this.checkModemArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.checkModemArray.length, this.checkDeviceArray);
                this.checkModemArray[i].location = this.checkDeviceArray[0].location;
                this.checkModemArray[i].ta0existingdevice = false;
                this.checkModemArray[i].ta0installind = true;
                this.checkModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD;
              }
              this.checkModemArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.checkModemArray[i].ta0registerstatus = 'N';
              if (this.checkModemArray[i].ta0testingstatus !== "Y") {
                this.checkModemArray[i].ta0testingstatus = 'N';
              }
              if (i === 1 && typeof (this.checkDeviceArray[1]) === "undefined") {
                this.checkModemArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.checkModemArray[i]);
            }
          }
          console.log('>>>>>> this.checkModemArray : '+JSON.stringify(this.checkModemArray));

          for (var i = 0; i < this.checkSimcardArray.length; i++) {
            if (typeof (this.checkSimcardArray[i].assetnum) !== 'undefined' && this.checkSimcardArray[i].assetnum !== null && this.checkSimcardArray[i].assetnum !== '') {
              if (i == 0) {
                this.checkSimcardArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.checkSimcardArray.length, this.checkDeviceArray);
                this.checkSimcardArray[i].location = this.checkDeviceArray[i].location;
                this.checkSimcardArray[i].ta0existingdevice = true;
                this.checkSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM;
              }
              else {
                this.checkSimcardArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.checkSimcardArray.length, this.checkDeviceArray);
                this.checkSimcardArray[i].ta0olddeviceserialnum = this.checkSimcardArray[0].assetnum;
                this.checkSimcardArray[i].location = this.checkDeviceArray[0].location;
                this.checkSimcardArray[i].ta0existingdevice = false;
                this.checkSimcardArray[i].ta0installind = true;
                this.checkSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM;
              }
              this.checkSimcardArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.checkSimcardArray[i].ta0registerstatus = 'N';
              if (this.checkSimcardArray[i].ta0testingstatus !== "Y") {
                this.checkSimcardArray[i].ta0testingstatus = 'N';
              }
              if (i === 1 && typeof (this.checkDeviceArray[1]) === "undefined") {
                this.checkSimcardArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.checkSimcardArray[i]);
            }
          }
          console.log('>>>>>> this.checkSimcardArray : '+JSON.stringify(this.checkSimcardArray));

          for (var i = 0; i < this.ctDevice0Array.length; i++) {
            if (typeof (this.ctDevice0Array[i].assetnum) !== 'undefined' && this.ctDevice0Array[i].aasetnum !== null && this.ctDevice0Array[i].assetnum !== '') {
              if (i == 0) {
                this.ctDevice0Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ctDevice0Array.length, this.mainDeviceArray);
                this.ctDevice0Array[i].ta0existingdevice = true;
                this.ctDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
              }
              else {
                this.ctDevice0Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ctDevice0Array.length, this.mainDeviceArray);
                this.ctDevice0Array[i].ta0olddeviceserialnum = this.ctDevice0Array[0].assetnum;
                this.ctDevice0Array[i].ta0existingdevice = false;
                this.ctDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                if (typeof (this.ctDevice0Array[i].loc_windingGroup) !== 'undefined') {
                  var regGroup = new RegisterGroupDetails();
                  regGroup.ta0windinggroup = this.ctDevice0Array[i].loc_windingGroup;
                  regGroup.ta0transformertype = this.assignwindingTransformerType();
                  this.ctDevice0Array[i].ta0registers = [];
                  this.ctDevice0Array[i].ta0registers.push(regGroup);
                }
              }
              this.ctDevice0Array[i].siteid = this.itemOri.json.siteid;
              // Validate Register Status
              if (this.ctDevice0Array[0].ta0removeind === true) {
                this.ctDevice0Array[0].ta0registerstatus = 'N';
              } else {
                this.ctDevice0Array[0].ta0registerstatus = 'Y';
              }
              if (typeof (this.ctDevice0Array[1]) !== "undefined" && typeof (this.ctDevice0Array[1].ta0registerstatus) !== "undefined") {
                this.ctDevice0Array[1].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.ctDevice0Array[i]);
            }
          }

          for (var i = 0; i < this.ctDevice1Array.length; i++) {
            if (typeof (this.ctDevice1Array[i].assetnum) !== 'undefined' && this.ctDevice1Array[i].assetnum !== null && this.ctDevice1Array[i].assetnum !== '') {
              if (i == 0) {
                this.ctDevice1Array[i].ta0existingdevice = true;
                this.ctDevice1Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ctDevice1Array.length, this.mainDeviceArray);
                this.ctDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
              }
              else {
                this.ctDevice1Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ctDevice1Array.length, this.mainDeviceArray);
                this.ctDevice1Array[i].ta0olddeviceserialnum = this.ctDevice1Array[0].assetnum;
                this.ctDevice1Array[i].ta0existingdevice = false;
                this.ctDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                if (typeof (this.ctDevice1Array[i].loc_windingGroup) !== 'undefined') {
                  var regGroup = new RegisterGroupDetails();
                  regGroup.ta0windinggroup = this.ctDevice1Array[i].loc_windingGroup;
                  regGroup.ta0transformertype = this.assignwindingTransformerType();
                  this.ctDevice1Array[i].ta0registers = [];
                  this.ctDevice1Array[i].ta0registers.push(regGroup);
                }
              }
              this.ctDevice1Array[i].siteid = this.itemOri.json.siteid;
              // Validate Register Status
              if (this.ctDevice1Array[0].ta0removeind === true) {
                this.ctDevice1Array[0].ta0registerstatus = 'N';
              } else {
                this.ctDevice1Array[0].ta0registerstatus = 'Y';
              }
              if (typeof (this.ctDevice1Array[1]) !== "undefined" && typeof (this.ctDevice1Array[1].ta0registerstatus) !== "undefined") {
                this.ctDevice1Array[1].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.ctDevice1Array[i]);
            }
          }

          for (var i = 0; i < this.ctDevice2Array.length; i++) {
            if (typeof (this.ctDevice2Array[i].assetnum) !== 'undefined' && this.ctDevice2Array[i].assetnum !== null && this.ctDevice2Array[i].assetnum !== '') {
              if (i == 0) {
                this.ctDevice2Array[i].ta0existingdevice = true;
                this.ctDevice2Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ctDevice2Array.length, this.mainDeviceArray);
                this.ctDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
              }
              else {
                this.ctDevice2Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ctDevice2Array.length, this.mainDeviceArray);
                this.ctDevice2Array[i].ta0olddeviceserialnum = this.ctDevice2Array[0].assetnum;
                this.ctDevice2Array[i].ta0existingdevice = false;
                this.ctDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                if (typeof (this.ctDevice2Array[i].loc_windingGroup) !== 'undefined') {
                  var regGroup = new RegisterGroupDetails();
                  regGroup.ta0windinggroup = this.ctDevice2Array[i].loc_windingGroup;
                  regGroup.ta0transformertype = this.assignwindingTransformerType();
                  this.ctDevice2Array[i].ta0registers = [];
                  this.ctDevice2Array[i].ta0registers.push(regGroup);
                }
              }
              this.ctDevice2Array[i].siteid = this.itemOri.json.siteid;
              // Validate Register Status
              if (this.ctDevice2Array[0].ta0removeind === true) {
                this.ctDevice2Array[0].ta0registerstatus = 'N';
              } else {
                this.ctDevice2Array[0].ta0registerstatus = 'Y';
              }
              if (typeof (this.ctDevice2Array[1]) !== "undefined" && typeof (this.ctDevice2Array[1].ta0registerstatus) !== "undefined") {
                this.ctDevice2Array[1].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.ctDevice2Array[i]);
            }
          }

          if (this.item.json.ta0installationvoltage > 3 || this.item.json.ta0newvoltage > 3) {
            for (var i = 0; i < this.ptDevice0Array.length; i++) {
              if (typeof (this.ptDevice0Array[i].assetnum) !== 'undefined' && this.ptDevice0Array[i].assetnum !== null && this.ptDevice0Array[i].assetnum !== '') {
                if (i == 0) {
                  this.ptDevice0Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ptDevice0Array.length, this.mainDeviceArray);
                  this.ptDevice0Array[i].ta0existingdevice = true;
                  this.ptDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
                } else {
                  this.ptDevice0Array[i].ta0olddeviceserialnum = this.ptDevice0Array[0].assetnum;
                  this.ptDevice0Array[i].ta0existingdevice = false;
                  this.ptDevice0Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ptDevice0Array.length, this.mainDeviceArray);
                  this.ptDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
                  if (typeof (this.ptDevice0Array[i].loc_windingGroup) !== 'undefined') {
                    var regGroup = new RegisterGroupDetails();
                    regGroup.ta0windinggroup = this.ptDevice0Array[i].loc_windingGroup;
                    regGroup.ta0transformertype = this.assignwindingTransformerType();
                    this.ptDevice0Array[i].ta0registers = [];
                    this.ptDevice0Array[i].ta0registers.push(regGroup);
                  }
                }
                this.ptDevice0Array[i].siteid = this.itemOri.json.siteid;
                // Validate Register Status
                if (this.ptDevice0Array[0].ta0removeind === true || (this.ptDevice0Array[0].assetnum === "" || typeof (this.ptDevice0Array[0].assetnum) === "undefined")) {
                  this.ptDevice0Array[0].ta0registerstatus = 'N';
                } else {
                  this.ptDevice0Array[0].ta0registerstatus = 'Y';
                }
                if (typeof (this.ptDevice0Array[1]) !== 'undefined' && typeof (this.ptDevice0Array[1].ta0registerstatus) !== 'undefined') {
                  this.ptDevice0Array[1].ta0registerstatus = 'Y';
                }
                this.multiAssetLocciArray.push(this.ptDevice0Array[i]);
              }
            }

            for (var i = 0; i < this.ptDevice1Array.length; i++) {
              if (typeof (this.ptDevice1Array[i].assetnum) !== 'undefined' && this.ptDevice1Array[i].assetnum !== null && this.ptDevice1Array[i].assetnum !== '') {
                if (i == 0) {
                  this.ptDevice1Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ptDevice1Array.length, this.mainDeviceArray);
                  this.ptDevice1Array[i].ta0existingdevice = true;
                  this.ptDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
                } else {
                  this.ptDevice1Array[i].ta0olddeviceserialnum = this.ptDevice1Array[0].assetnum;
                  this.ptDevice1Array[i].ta0existingdevice = false;
                  this.ptDevice1Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ptDevice1Array.length, this.mainDeviceArray);
                  this.ptDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
                  if (typeof (this.ptDevice1Array[i].loc_windingGroup) !== 'undefined') {
                    var regGroup = new RegisterGroupDetails();
                    regGroup.ta0windinggroup = this.ptDevice1Array[i].loc_windingGroup;
                    regGroup.ta0transformertype = this.assignwindingTransformerType();
                    this.ptDevice1Array[i].ta0registers = [];
                    this.ptDevice1Array[i].ta0registers.push(regGroup);
                  }
                }
                this.ptDevice1Array[i].siteid = this.itemOri.json.siteid;
                // Validate Register Status
                if (this.ptDevice1Array[0].ta0removeind === true || (this.ptDevice1Array[0].assetnum === "" || typeof (this.ptDevice1Array[0].assetnum) === "undefined")) {
                  this.ptDevice1Array[0].ta0registerstatus = 'N';
                } else {
                  this.ptDevice1Array[0].ta0registerstatus = 'Y';
                }
                if (typeof (this.ptDevice1Array[1]) !== 'undefined' && typeof (this.ptDevice1Array[1].ta0registerstatus) !== 'undefined') {
                  this.ptDevice1Array[1].ta0registerstatus = 'Y';
                }
                this.multiAssetLocciArray.push(this.ptDevice1Array[i]);
              }
            }

            for (var i = 0; i < this.ptDevice2Array.length; i++) {
              if (typeof (this.ptDevice2Array[i].assetnum) !== 'undefined' && this.ptDevice2Array[i].assetnum !== null && this.ptDevice2Array[i].assetnum !== '') {
                if (i == 0) {
                  this.ptDevice2Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ptDevice2Array.length, this.mainDeviceArray);
                  this.ptDevice2Array[i].ta0existingdevice = true;
                  this.ptDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
                } else {
                  this.ptDevice2Array[i].ta0olddeviceserialnum = this.ptDevice2Array[0].assetnum;
                  this.ptDevice2Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ptDevice2Array.length, this.mainDeviceArray);
                  this.ptDevice2Array[i].ta0existingdevice = false;
                  this.ptDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
                  if (typeof (this.ptDevice2Array[i].loc_windingGroup) !== 'undefined') {
                    var regGroup = new RegisterGroupDetails();
                    regGroup.ta0windinggroup = this.ptDevice2Array[i].loc_windingGroup;
                    regGroup.ta0transformertype = this.assignwindingTransformerType();
                    this.ptDevice2Array[i].ta0registers = [];
                    this.ptDevice2Array[i].ta0registers.push(regGroup);
                  }
                }
                this.ptDevice2Array[i].siteid = this.itemOri.json.siteid;
                // Validate Register Status
                if (this.ptDevice2Array[0].ta0removeind === true || (this.ptDevice2Array[0].assetnum === "" || typeof (this.ptDevice2Array[0].assetnum) === "undefined")) {
                  this.ptDevice2Array[0].ta0registerstatus = 'N';
                } else {
                  this.ptDevice2Array[0].ta0registerstatus = 'Y';
                }
                if (typeof (this.ptDevice2Array[1]) !== 'undefined' && typeof (this.ptDevice1Array[1].ta0registerstatus) !== 'undefined') {
                  this.ptDevice2Array[1].ta0registerstatus = 'Y';
                }
                this.multiAssetLocciArray.push(this.ptDevice2Array[i]);
              }
            }
          }
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = [];
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = this.multiAssetLocciArray;
          console.log('>>> multiassetlocci : '+this.item.json.ta0feeder[this.indexVal].multiassetlocci);
          break;
        }

        // case SoTypes.ZRPM:
        case SoTypes.ZSRO:
        case SoTypes.ZCER:
        case SoTypes.ZINL:
        case SoTypes.ZINR: {
          console.log('case ZINR');
          // Main Meter
          for (var i = 0; i < this.mainDeviceArray.length; i++) {
            if (typeof (this.mainDeviceArray[i].assetnum) !== 'undefined' && this.mainDeviceArray[i].assetnum !== null && this.mainDeviceArray[i].assetnum !== '') {
              if (i == 0) {
                this.mainDeviceArray[i].ta0existingdevice = true;
                // this.mainDeviceArray[i].ta0replaceind = false;
                this.mainDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
              } else {
                this.mainDeviceArray[i].ta0olddeviceserialnum = this.mainDeviceArray[0].assetnum;
                this.mainDeviceArray[i].ta0existingdevice = false;
                this.mainDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
              }
              this.mainDeviceArray[i].siteid = this.itemOri.json.siteid;
              this.mainDeviceArray[i].ta0registerstatus = 'N';
              // this.mainDeviceArray[i].ta0silstickerstatus = 'N';
              if (this.mainDeviceArray[i].ta0testingstatus !== "Y") {
                this.mainDeviceArray[i].ta0testingstatus = 'N';
              }
              if (i === 0 && this.worktype === SoTypes.ZINR) { // Reset Meter Test to 'Y'
                this.mainDeviceArray[i].ta0testingstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.mainDeviceArray[i]);
            } else {
              this.mainDeviceArray[0].ta0replaceind = false;
            }
          }

          //Main Meter Modem
          for (var i = 0; i < this.mainModemArray.length; i++) {
            if (typeof (this.mainModemArray[i].assetnum) !== 'undefined' && this.mainModemArray[i].assetnum !== null && this.mainModemArray[i].assetnum !== '') {
              if (i == 0) {
                this.mainModemArray[i].location = this.mainDeviceArray[i].location;
                this.mainModemArray[i].ta0existingdevice = true;
                // this.mainModemArray[i].ta0replaceind = false;
                this.mainModemArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.mainModemArray.length, this.mainDeviceArray);
                this.mainModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD;
              } else {
                this.mainModemArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.mainModemArray.length, this.mainDeviceArray);
                this.mainModemArray[i].ta0olddeviceserialnum = this.mainModemArray[0].assetnum;
                this.mainModemArray[i].location = this.mainDeviceArray[0].location;
                this.mainModemArray[i].ta0existingdevice = false;
                this.mainModemArray[i].ta0replaceind = true;
                this.mainModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD;
              }
              this.mainModemArray[i].siteid = this.itemOri.json.siteid;
              this.mainModemArray[i].ta0registerstatus = 'N';
              if (this.mainModemArray[i].ta0testingstatus !== "Y") {
                this.mainModemArray[i].ta0testingstatus = 'N';
              }
              /** 
               * Reason   : Fixed to ZINL not updated the modem details for existing section..
               * Created  : Alif (11-01-2019)
               */
              if (this.item.json.worktype === SoTypes.ZINL && i === 0) {
                // Set the modem testing to 'Yes'
                this.mainModemArray[i].ta0testingstatus = 'Y';
              }
              if (i === 1 && typeof (this.mainDeviceArray[1]) === "undefined") {
                this.mainModemArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.mainModemArray[i]);
            } else {
              this.mainModemArray[0].ta0replaceind = false;
            }
          }
          console.log('>>>>>> this.mainModemArray : '+JSON.stringify(this.mainModemArray));

          // Main Sim Card...
          for (var i = 0; i < this.mainSimcardArray.length; i++) {
            if (typeof (this.mainSimcardArray[i].assetnum) !== 'undefined' && this.mainSimcardArray[i].assetnum !== null && this.mainSimcardArray[i].assetnum !== '') {
              if (i == 0) {
                this.mainSimcardArray[i].location = this.mainDeviceArray[i].location;
                this.mainSimcardArray[i].ta0existingdevice = true;
                // this.mainSimcardArray[i].ta0replaceind = false;
                this.mainSimcardArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.mainSimcardArray.length, this.mainDeviceArray);
                // this.mainSimcardArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.mainSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM;
              } else {
                this.mainSimcardArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.mainSimcardArray.length, this.mainDeviceArray);
                //this.mainSimcardArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.mainSimcardArray[i].ta0olddeviceserialnum = this.mainSimcardArray[0].assetnum;
                this.mainSimcardArray[i].location = this.mainDeviceArray[0].location;
                this.mainSimcardArray[i].ta0existingdevice = false;
                this.mainSimcardArray[i].ta0replaceind = true;
                this.mainSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM;
              }
              this.mainSimcardArray[i].siteid = this.itemOri.json.siteid;
              this.mainSimcardArray[i].ta0registerstatus = 'N';
              if (i === 1 && typeof (this.mainDeviceArray[1]) === "undefined") {
                this.mainSimcardArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.mainSimcardArray[i]);
            } else {
              this.mainSimcardArray[0].ta0replaceind = false;
            }
          }
          console.log('>>>>>> this.mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));
          // Check Meter Device
          for (var i = 0; i < this.checkDeviceArray.length; i++) {
            if (typeof (this.checkDeviceArray[i].assetnum) !== 'undefined' && this.checkDeviceArray[i].assetnum !== null && this.checkDeviceArray[i].assetnum !== '') {
              if (i == 0) {
                this.checkDeviceArray[i].ta0existingdevice = true;
                // this.checkDeviceArray[i].ta0replaceind = false;
                this.checkDeviceArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.checkDeviceArray.length, this.mainDeviceArray);
                // this.checkDeviceArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.checkDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK;
              } else {
                this.checkDeviceArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.checkDeviceArray.length, this.mainDeviceArray);
                //this.checkDeviceArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.checkDeviceArray[i].ta0olddeviceserialnum = this.checkDeviceArray[0].assetnum;
                this.checkDeviceArray[i].ta0existingdevice = false;
                this.checkDeviceArray[i].ta0replaceind = true;
                this.checkDeviceArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK;
              }
              this.checkDeviceArray[i].siteid = this.itemOri.json.siteid;
              // Validation Status
              this.checkDeviceArray[i].ta0registerstatus = 'N';
              // this.checkDeviceArray[i].ta0silstickerstatus = 'N';
              if (this.checkDeviceArray[i].ta0testingstatus !== "Y") {
                this.checkDeviceArray[i].ta0testingstatus = 'N';
              }
              if (i === 0 && this.worktype === SoTypes.ZINR) { // Reset Check Meter to 'Y'
                this.checkDeviceArray[i].ta0testingstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.checkDeviceArray[i]);
            } else {
              this.checkDeviceArray[0].ta0replaceind = false;
            }
          }

          // Check Modem 
          for (var i = 0; i < this.checkModemArray.length; i++) {
            if (typeof (this.checkModemArray[i].assetnum) !== 'undefined' && this.checkModemArray[i].assetnum !== null && this.checkModemArray[i].assetnum !== '') {
              if (i == 0) {
                this.checkModemArray[i].location = this.checkDeviceArray[i].location;
                this.checkModemArray[i].ta0existingdevice = true;
                // this.checkModemArray[i].ta0replaceind = false;
                this.checkModemArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.checkModemArray.length, this.checkDeviceArray);
                // this.checkModemArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.checkDeviceArray);
                this.checkModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD;
              } else {
                this.checkModemArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.checkModemArray.length, this.checkDeviceArray);
                // this.checkModemArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.checkDeviceArray);
                this.checkModemArray[i].ta0olddeviceserialnum = this.checkModemArray[0].assetnum;
                this.checkModemArray[i].location = this.checkDeviceArray[0].location;
                this.checkModemArray[i].ta0existingdevice = false;
                this.checkModemArray[i].ta0replaceind = true;
                this.checkModemArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD;
              }
              this.checkModemArray[i].siteid = this.itemOri.json.siteid;
              // Validate Status
              this.checkModemArray[i].ta0registerstatus = 'N';
              if (this.checkModemArray[i].ta0testingstatus !== "Y") {
                this.checkModemArray[i].ta0testingstatus = 'N';
              }
              /** 
               * Reason   : Fixed to ZINL not updated the modem details for existing section..
               * Created  : Alif (11-01-2019)
               */
              if (this.item.json.worktype === SoTypes.ZINL && i === 0) {
                // Set the modem testing to 'Yes'
                this.checkModemArray[i].ta0testingstatus = 'Y';
              }
              if (i === 1 && typeof (this.checkDeviceArray[1]) === "undefined") {
                this.checkModemArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.checkModemArray[i]);
            } else {
              this.checkModemArray[0].ta0replaceind = false;
            }
          }
          console.log('>>>>>> this.checkModemArray : '+JSON.stringify(this.checkModemArray));

          // Check Sim Card
          for (var i = 0; i < this.checkSimcardArray.length; i++) {
            if (typeof (this.checkSimcardArray[i].assetnum) !== 'undefined' && this.checkSimcardArray[i].assetnum !== null && this.checkSimcardArray[i].assetnum !== '') {
              if (i == 0) {
                this.checkSimcardArray[i].location = this.checkDeviceArray[i].location;
                this.checkSimcardArray[i].ta0existingdevice = true;
                // this.checkSimcardArray[0].ta0replaceind = false;
                this.checkSimcardArray[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.checkSimcardArray.length, this.checkDeviceArray);
                // this.checkSimcardArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.checkDeviceArray);
                this.checkSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM;

              } else {
                this.checkSimcardArray[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.checkSimcardArray.length, this.checkDeviceArray);
                // this.checkSimcardArray[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.checkDeviceArray);
                this.checkSimcardArray[i].ta0olddeviceserialnum = this.checkSimcardArray[0].assetnum;
                this.checkSimcardArray[i].location = this.checkDeviceArray[0].location;
                this.checkSimcardArray[i].ta0existingdevice = false;
                this.checkSimcardArray[i].ta0replaceind = true;
                this.checkSimcardArray[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM;
              }
              this.checkSimcardArray[i].siteid = this.itemOri.json.siteid;
              // Validate Status
              this.checkSimcardArray[i].ta0registerstatus = 'N';
              if (i === 1 && typeof (this.checkDeviceArray[1]) === "undefined") {
                this.checkSimcardArray[i].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.checkSimcardArray[i]);
            } else {
              this.checkSimcardArray[0].ta0replaceind = false;
            }
          }
          console.log('>>>>>> this.checkSimcardArray : '+JSON.stringify(this.checkSimcardArray));

          // CT Device One
          for (var i = 0; i < this.ctDevice0Array.length; i++) {
            if (typeof (this.ctDevice0Array[i].assetnum) !== 'undefined' && this.ctDevice0Array[i].assetnum !== null && this.ctDevice0Array[i].assetnum !== '') {
              if (i == 0) {
                this.ctDevice0Array[i].ta0existingdevice = true;
                // this.ctDevice0Array[0].ta0replaceind = false;
                this.ctDevice0Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ctDevice0Array.length, this.mainDeviceArray);
                // this.ctDevice0Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.ctDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
              } else {
                this.ctDevice0Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ctDevice0Array.length, this.mainDeviceArray);
                // this.ctDevice0Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.ctDevice0Array[i].ta0olddeviceserialnum = this.ctDevice0Array[0].assetnum;
                this.ctDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                if (typeof (this.ctDevice0Array[i].loc_windingGroup) !== 'undefined') {
                  var regGroup = new RegisterGroupDetails();
                  regGroup.ta0windinggroup = this.ctDevice0Array[i].loc_windingGroup;
                  regGroup.ta0transformertype = this.assignwindingTransformerType();
                  this.ctDevice0Array[i].ta0registers = [];
                  this.ctDevice0Array[i].ta0registers.push(regGroup);
                }
              }
              this.ctDevice0Array[i].siteid = this.itemOri.json.siteid;
              // Validate Register Status
              if (this.ctDevice0Array[0].ta0replaceind === true) {
                this.ctDevice0Array[0].ta0registerstatus = 'N';
                if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                  this.ctDevice0Array[1].ta0registerstatus = 'Y';
                }
              } else {
                this.ctDevice0Array[0].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.ctDevice0Array[i]);
            } else {
              this.ctDevice0Array[0].ta0replaceind = false;
            }
          }

          // CT Device Two
          for (var i = 0; i < this.ctDevice1Array.length; i++) {
            if (typeof (this.ctDevice1Array[i].assetnum) !== 'undefined' && this.ctDevice1Array[i].assetnum !== null && this.ctDevice1Array[i].assetnum !== '') {
              if (i == 0) {
                this.ctDevice1Array[i].ta0existingdevice = true;
                // this.ctDevice1Array[0].ta0replaceind = false;
                this.ctDevice1Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ctDevice1Array.length, this.mainDeviceArray);
                // this.ctDevice1Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.ctDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
              } else {
                this.ctDevice1Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ctDevice1Array.length, this.mainDeviceArray);
                // this.ctDevice1Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.ctDevice1Array[i].ta0olddeviceserialnum = this.ctDevice1Array[0].assetnum;
                this.ctDevice1Array[i].ta0existingdevice = false;
                this.ctDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                if (typeof (this.ctDevice1Array[i].loc_windingGroup) !== 'undefined') {
                  var regGroup = new RegisterGroupDetails();
                  regGroup.ta0windinggroup = this.ctDevice1Array[i].loc_windingGroup;
                  regGroup.ta0transformertype = this.assignwindingTransformerType();
                  this.ctDevice1Array[i].ta0registers = [];
                  this.ctDevice1Array[i].ta0registers.push(regGroup);
                }
              }
              this.ctDevice1Array[i].siteid = this.itemOri.json.siteid;
              // Validate Register Status
              if (this.ctDevice1Array[0].ta0replaceind === true) {
                this.ctDevice1Array[0].ta0registerstatus = 'N';
                if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                  this.ctDevice1Array[1].ta0registerstatus = 'Y';
                }
              } else {
                this.ctDevice1Array[0].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.ctDevice1Array[i]);
            } else {
              this.ctDevice1Array[0].ta0replaceind = false;
            }
          }

          // CT Device Three
          for (var i = 0; i < this.ctDevice2Array.length; i++) {
            if (typeof (this.ctDevice2Array[i].assetnum) !== 'undefined' && this.ctDevice2Array[i].assetnum !== null && this.ctDevice2Array[i].assetnum !== '') {
              if (i == 0) {
                this.ctDevice2Array[i].ta0existingdevice = true;
                // this.ctDevice2Array[0].ta0replaceind = false;
                this.ctDevice2Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ctDevice2Array.length, this.mainDeviceArray);
                // this.ctDevice2Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.ctDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT;
              } else {
                this.ctDevice2Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ctDevice2Array.length, this.mainDeviceArray);
                // this.ctDevice2Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                this.ctDevice2Array[i].ta0olddeviceserialnum = this.ctDevice2Array[0].assetnum;
                this.ctDevice2Array[i].ta0existingdevice = false;
                this.ctDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                if (typeof (this.ctDevice2Array[i].loc_windingGroup) !== 'undefined') {
                  var regGroup = new RegisterGroupDetails();
                  regGroup.ta0windinggroup = this.ctDevice2Array[i].loc_windingGroup;
                  regGroup.ta0transformertype = this.assignwindingTransformerType();
                  this.ctDevice2Array[i].ta0registers = [];
                  this.ctDevice2Array[i].ta0registers.push(regGroup);
                }
              }
              this.ctDevice2Array[i].siteid = this.itemOri.json.siteid;
              // Validate Register Status
              if (this.ctDevice2Array[0].ta0replaceind === true) {
                this.ctDevice2Array[0].ta0registerstatus = 'N';
                if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                  this.ctDevice2Array[1].ta0registerstatus = 'Y';
                }
              } else {
                this.ctDevice2Array[0].ta0registerstatus = 'Y';
              }
              this.multiAssetLocciArray.push(this.ctDevice2Array[i]);
            } else {
              this.ctDevice2Array[0].ta0replaceind = false;
            }
          }

          // PT Device One
          if (this.item.json.ta0installationvoltage !== "03") {
            for (var i = 0; i < this.ptDevice0Array.length; i++) {
              if (typeof (this.ptDevice0Array[i].assetnum) !== 'undefined' && this.ptDevice0Array[i].assetnum !== null && this.ptDevice0Array[i].assetnum !== '') {
                if (i == 0) {
                  this.ptDevice0Array[i].ta0existingdevice = true;
                  // this.ptDevice0Array[0].ta0replaceind = false;
                  this.ptDevice0Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ptDevice0Array.length, this.mainDeviceArray);
                  // this.ptDevice0Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                  this.ptDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
                } else {
                  this.ptDevice0Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ptDevice0Array.length, this.mainDeviceArray);
                  // this.ptDevice0Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                  this.ptDevice0Array[i].ta0olddeviceserialnum = this.ptDevice0Array[0].assetnum;
                  this.ptDevice0Array[i].ta0existingdevice = false;
                  this.ptDevice0Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
                  if (typeof (this.ptDevice0Array[i].loc_windingGroup) !== 'undefined') {
                    var regGroup = new RegisterGroupDetails();
                    regGroup.ta0windinggroup = this.ptDevice0Array[i].loc_windingGroup;
                    regGroup.ta0transformertype = this.assignwindingTransformerType();
                    this.ptDevice0Array[i].ta0registers = [];
                    this.ptDevice0Array[i].ta0registers.push(regGroup);
                  }
                }
                this.ptDevice0Array[i].ta0currentratio = this.ptDevice0Array[i].ta0voltageratio;
                this.ptDevice0Array[i].siteid = this.itemOri.json.siteid;
                // Validate Register Status
                if (this.ptDevice0Array[0].ta0replaceind === true) {
                  this.ptDevice0Array[0].ta0registerstatus = 'N';
                  if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                    this.ptDevice0Array[1].ta0registerstatus = 'Y';
                  }
                } else {
                  this.ptDevice0Array[0].ta0registerstatus = 'Y';
                }
                this.multiAssetLocciArray.push(this.ptDevice0Array[i]);
              } else {
                this.ptDevice0Array[0].ta0replaceind = false;
              }
            }

            // PT Device Two
            for (var i = 0; i < this.ptDevice1Array.length; i++) {
              if (typeof (this.ptDevice1Array[i].assetnum) !== 'undefined' && this.ptDevice1Array[i].assetnum !== null && this.ptDevice1Array[i].assetnum !== '') {
                if (i == 0) {
                  this.ptDevice1Array[i].ta0existingdevice = true;
                  // this.ptDevice1Array[0].ta0replaceind = false;
                  this.ptDevice1Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ptDevice1Array.length, this.mainDeviceArray);
                  // this.ptDevice1Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                  this.ptDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
                } else {
                  this.ptDevice1Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ptDevice1Array.length, this.mainDeviceArray);
                  // this.ptDevice1Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                  this.ptDevice1Array[i].ta0olddeviceserialnum = this.ptDevice1Array[0].assetnum;
                  this.ptDevice1Array[i].ta0existingdevice = false;
                  this.ptDevice1Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
                  if (typeof (this.ptDevice1Array[i].loc_windingGroup) !== 'undefined') {
                    var regGroup = new RegisterGroupDetails();
                    regGroup.ta0windinggroup = this.ptDevice1Array[i].loc_windingGroup;
                    regGroup.ta0transformertype = this.assignwindingTransformerType();
                    this.ptDevice1Array[i].ta0registers = [];
                    this.ptDevice1Array[i].ta0registers.push(regGroup);
                  }
                }
                this.ptDevice1Array[i].ta0currentratio = this.ptDevice1Array[i].ta0voltageratio;
                this.ptDevice1Array[i].siteid = this.itemOri.json.siteid;
                // Validate Register Status
                if (this.ptDevice1Array[0].ta0replaceind === true) {
                  this.ptDevice1Array[0].ta0registerstatus = 'N';
                  if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                    this.ptDevice1Array[1].ta0registerstatus = 'Y';
                  }
                } else {
                  this.ptDevice1Array[0].ta0registerstatus = 'Y';
                }
                this.multiAssetLocciArray.push(this.ptDevice1Array[i]);
              } else {
                this.ptDevice1Array[0].ta0replaceind = false;
              }
            }

            // PT Device Three
            for (var i = 0; i < this.ptDevice2Array.length; i++) {
              if (typeof (this.ptDevice2Array[i].assetnum) !== 'undefined' && this.ptDevice2Array[i].assetnum !== null && this.ptDevice2Array[i].assetnum !== '') {
                if (i == 0) {
                  this.ptDevice2Array[i].ta0existingdevice = true;
                  // this.ptDevice2Array[0].ta0replaceind = false;
                  this.ptDevice2Array[i].ta0controllingdevice = this.checkUpdateSingleScenario(this.ptDevice2Array.length, this.mainDeviceArray);
                  // this.ptDevice2Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                  this.ptDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT;
                } else {
                  this.ptDevice2Array[i].ta0controllingdevice = this.checkUpdateMultiScenario(this.ptDevice2Array.length, this.mainDeviceArray);
                  // this.ptDevice2Array[i].ta0controllingdevice =  this.CheckValueSuitablePlace(this.mainDeviceArray);
                  this.ptDevice2Array[i].ta0olddeviceserialnum = this.ptDevice2Array[0].assetnum;
                  this.ptDevice2Array[i].ta0existingdevice = false;
                  this.ptDevice2Array[i].ta0bcrmuploadindicator = DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT;
                  if (typeof (this.ptDevice2Array[i].loc_windingGroup) !== 'undefined') {
                    var regGroup = new RegisterGroupDetails();
                    regGroup.ta0windinggroup = this.ptDevice2Array[i].loc_windingGroup;
                    regGroup.ta0transformertype = this.assignwindingTransformerType();
                    this.ptDevice2Array[i].ta0registers = [];
                    this.ptDevice2Array[i].ta0registers.push(regGroup);
                  }
                }
                this.ptDevice2Array[i].ta0currentratio = this.ptDevice2Array[i].ta0voltageratio;
                this.ptDevice2Array[i].siteid = this.itemOri.json.siteid;
                // Validate Register Status
                if (this.ptDevice2Array[0].ta0replaceind === true) {
                  this.ptDevice2Array[0].ta0registerstatus = 'N';
                  if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                    this.ptDevice2Array[1].ta0registerstatus = 'Y';
                  }
                } else {
                  this.ptDevice2Array[0].ta0registerstatus = 'Y';
                }
                this.multiAssetLocciArray.push(this.ptDevice2Array[i]);
              } else {
                this.ptDevice2Array[0].ta0replaceind = false;
              }
            }
          }

          // Check if any device have replace. ta0subindicator = true
          if ((this.worktype === SoTypes.ZINL || this.worktype === SoTypes.ZINR) && (this.mainDeviceArray.length > 1 || this.mainModemArray.length > 1 || this.mainSimcardArray.length > 1 ||
            this.checkDeviceArray.length > 1 || this.checkModemArray.length > 1 || this.checkSimcardArray.length > 1 ||
            this.ctDevice0Array.length > 1 || this.ctDevice1Array.length > 1 || this.ctDevice2Array.length > 1 ||
            this.ptDevice0Array.length > 1 || this.ptDevice1Array.length > 1 || this.ptDevice2Array.length > 1)) {
            this.item.json.ta0subsoindicator = true;
          } else {
            this.item.json.ta0subsoindicator = false;
          }
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = [];
          this.item.json.ta0feeder[this.indexVal].multiassetlocci = this.multiAssetLocciArray;
          break;
        }

      }


      if (typeof (this.item.json.loc_controllingDeviceList) == 'undefined') {
        if (this.mainDeviceArray.length === 2) {
          this.item.json.loc_controllingDeviceList = [];
          var controllingDevice = {
            asssetNum: this.mainDeviceArray[1].assetnum,
            serialNum: this.mainDeviceArray[1].ta0serialnum
          }
          this.item.json.loc_controllingDeviceList.push(controllingDevice);

        } else if (this.mainDeviceArray.length === 1) {
          // var assetArray = [];
          this.item.json.loc_controllingDeviceList = [];
          var controllingDevice = {
            asssetNum: this.mainDeviceArray[0].assetnum,
            serialNum: this.mainDeviceArray[0].ta0serialnum
          }
          if (controllingDevice.asssetNum === undefined || controllingDevice.serialNum === undefined) {
            this.item.json.loc_controllingDeviceList = [];
          } else {
            this.item.json.loc_controllingDeviceList.push(controllingDevice);
          }
        }
      }
      else {
        if (this.mainDeviceArray.length === 2) {
          var controllingDevice = {
            asssetNum: this.mainDeviceArray[1].assetnum,
            serialNum: this.mainDeviceArray[1].ta0serialnum
          }
          if (typeof (controllingDevice.asssetNum) !== 'undefined' || typeof (controllingDevice.serialNum) !== 'undefined') {
            var duplicateItem;
            duplicateItem = this.item.json.loc_controllingDeviceList.filter((item) => { return item.asssetNum !== controllingDevice.asssetNum && item.serialNum !== controllingDevice.serialNum });
            var controllingDeviceLength = this.item.json.loc_controllingDeviceList.length;
            // Checking if the original length as the duplicate item if same amount then no similiar input
            if (duplicateItem.length === controllingDeviceLength) {
              this.item.json.loc_controllingDeviceList.push(controllingDevice);
            } else {
              console.log('No need controlling device add');
            }
          } else {
            console.log('Asset num or serial num is empty or not fill in');
          }

        } else if (this.mainDeviceArray.length === 1) {
          var controllingDevice = {
            asssetNum: this.mainDeviceArray[0].assetnum,
            serialNum: this.mainDeviceArray[0].ta0serialnum
          }

          if (typeof (controllingDevice.asssetNum) == 'undefined' || typeof (controllingDevice.serialNum) == 'undefined') {
            console.log('Asset num or serial num is empty or not field in');
          } else {
            var duplicateItem;
            duplicateItem = this.item.json.loc_controllingDeviceList.filter((item) => { return item.asssetNum !== controllingDevice.asssetNum && item.serialNum !== controllingDevice.serialNum });
            var controllingDeviceLength = this.item.json.loc_controllingDeviceList.length;
            // Checking if the original length as the duplicate item if same amount then no similiar input
            if (duplicateItem.length === controllingDeviceLength) {
              this.item.json.loc_controllingDeviceList.push(controllingDevice);
            } else {
              console.log('No need controlling device add');
            }
          }
        }
      }

      // Assign ta0installationvoltage
      //this.item.json.ta0feeder[this.indexVal].loc_ta0installationvoltage = this.item.json.ta0newvoltage;
      if (this.item.json.worktype !== this.soTypes.ZUDN) {
        this.item.json.ta0feeder[this.indexVal].loc_ta0installationvoltage = this.deviceVoltage;
      } else {
        this.item.json.ta0feeder[this.indexVal].loc_ta0installationvoltage = this.item.json.ta0newvoltage;
      }


      // Copy clone inside back to original back.
      this.itemOri = {};
      this.itemOri = JSON.parse(JSON.stringify(this.item));

      this.gf.startLoading();

      /**
      * Reason   : Saving to local storage (json data).
      * Created  : 22-01-2019
      */
      this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        this.itemOri.json.ta0feeder[this.indexVal].ta0existingdevice = false;
        this.itemOri.json.ta0feeder[this.indexVal].loc_multiassetlocci_haveChange = true;

        // assign feeder description for present feeder device.
        for (let multi of this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci) {
          if (typeof (multi.assetnum) !== 'undefined') {
            multi.ta0feedercode = feederCode;
            multi.ta0feederdescription = this.item.json.ta0feeder[this.indexVal].description;
          }
        }

        // assign feeder description and controlling device for other feeder device.
        for (var i = 0; i < this.itemOri.json.ta0feeder.length; i++) {
          if (i !== this.indexVal) {
            if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign) !== "undefined") {
              if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                && typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined') {
                var eMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                var nMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

                this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

              } else if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                && typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) === 'undefined') {
                var eMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

              } else if (typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined'
                && typeof (this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) === 'undefined') {
                var nMeterIndex = this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feedercode = this.itemOri.json.ta0feeder[i].ta0feedercode;
                this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feederdescription = this.itemOri.json.ta0feeder[i].description;

              }
            }
          }
        }
        console.log('>>>>>> full multiassetlocci : '+JSON.stringify(this.itemOri.json.ta0feeder[i].multiassetlocci));

        this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
        this.gf.displayToast("Device Details updated locally.");
        this.gf.stopLoading();
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("ServiceExecutionPage", this.itemOri);
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
            var feederCode = this.item.json.ta0feeder[this.indexVal].ta0feedercode;
            var itemVal = this.item.json.ta0feeder[this.indexVal];
            let objfeeder = Object.assign({}, itemVal);
            let itemValSingle = null;
            delete objfeeder['feederSetDesign'];
            itemValSingle = Object.assign({}, objfeeder);
            itemValSingle.multiassetlocci = [];

            // assign feeder description for present feeder device.
            for (let multi of objfeeder.multiassetlocci) {
              //let multiAssetVal = Object.assign({}, multi);
              if (typeof (multi.assetnum) !== 'undefined') { // || multi.ta0removeind || multi.ta0replaceind) {
                delete multi['ta0sealdetail'];
                delete multi['ta0stickerdetail'];
                delete multi['ta0testdetail'];
                multi.ta0feedercode = feederCode;
                multi.ta0feederdescription = this.item.json.ta0feeder[this.indexVal].description;
                itemValSingle.multiassetlocci.push(multi);
              }
            }

            // assign feeder description and controlling device for other feeder device.
            for (var i = 0; i < this.itemOri.json.ta0feeder.length; i++) {
              if (i !== this.indexVal) {
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

            // if (this.listRemoveDevice.length > 0) {
            this.dataService.deleteDeviceList(this.listRemoveDevice, this.itemOri.json.wonum, 'device').then(results => {
              this.dataService
                .saveRecordWithNewType(itemValSingle, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_MULTIASSETLOCCI, feederCode, this.itemOri.json.worktype)
                .then(results => {

                  // Clear Device Status & Removal Status
                  this.removeDeviceRemovalStatus();
                  console.log(' result + ' + JSON.stringify(results.toString()));
                  this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
                  this.itemOri.json.ta0feeder[this.indexVal].ta0existingdevice = false;
                  this.itemOri.json.ta0feeder[this.indexVal].loc_multiassetlocci_haveChange = true;
                  for (let multiasset of this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci) {
                    // multiasset.loc_multiassetlocci_haveChange = false;
                    this.itemOri.json.ta0feeder[this.indexVal].loc_multiassetlocci_haveChange = true;
                  }


                  if (results !== "") {
                    /** convert string into json */
                    var resultDes = JSON.parse(results.toString());
                    //var resultDes = JSON.parse(results.toString());

                    /** get the list new device creation */
                    var resultStatus: boolean = false;

                    if (typeof (resultDes) !== "undefined" || resultDes !== null || resultDes !== '') {
                      if (resultDes.processStatus === "failure") {
                        this.gf.warningAlert("Message", resultDes.description, "Close");
                        resultStatus = true;
                      } else {
                        if (typeof (resultDes.respObject) === "undefined" || resultDes.respObject === null || resultDes.respObject === '') {
                          resultStatus = false;
                        } else {
                          var newDevice = resultDes.respObject;
                          var oldDevice = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci));
                          var failureDevice = [];
                          var successDevice = [];

                          var ctptNew = [];

                          ctptNew = newDevice.filter((item) => {
                            return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT);
                          });

                          if (ctptNew.length > 0) {
                            for (var k = 0; k < oldDevice.length; k++) {
                              for (var m = 0; m < ctptNew.length; m++) {
                                if (oldDevice[k].assetnum === ctptNew[m].ta0serialnum) {
                                  oldDevice[k].assetnum = ctptNew[m].assetnum;
                                  oldDevice[k].ta0serialnum = ctptNew[m].ta0serialnum;
                                }
                              }
                            }

                            /** Sending new assetnum to save in maximo. */
                            this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = [];
                            this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = oldDevice;
                          }
                          console.log('>>>> multiassetlocci 1 : '+JSON.stringify(this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci));

                          failureDevice = newDevice.filter((item) => {
                            return item.status === 'failure';
                          });

                          successDevice = newDevice.filter((item) => {
                            return item.status === 'success';
                          });

                          if (failureDevice.length > 0) {
                            var message = "";
                            message = "<p>";
                            for (var i = 0; i < failureDevice.length; i++) {
                              message = message + "Failed to create " + failureDevice[i].serialNo + "!<br>";
                            }
                            message = message + "</p>";
                            // Display message error
                            let alert = this.alertCtrl.create({
                              title: "Error",
                              message: message,
                              buttons: ["Close"]
                            });
                            alert.present();
                          }

                          if (successDevice.length > 0) {
                            for (var i = 0; i < oldDevice.length; i++) {
                              for (var k = 0; k < successDevice.length; k++) {
                                if (oldDevice[i].assetnum === successDevice[k].serialNo) {
                                  oldDevice[i].assetnum = successDevice[k].assetNo;
                                  oldDevice[i].ta0serialnum = successDevice[k].serialNo;
                                }
                              }
                            }

                            /** Sending new assetnum to save in maximo. */
                            this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = [];
                            this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = oldDevice;
                            console.log('>>>> multiassetlocci 2 : '+JSON.stringify(this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci));
                          }
                        }
                      }
                    } else {
                      resultStatus = false;
                    }

                    /* for(var i = 0; i < this.listRemoveDevice.length; i++) {
                      this.dataService.deleteDevice(null, this.listRemoveDevice["wonum"], this.listRemoveDevice["assetnum"], 'device') .then(results => { });  
                    } */
                    console.log('delete remove device.. ' + JSON.stringify(this.listRemoveDevice));
                    //this.dataService.deleteDeviceList(this.listRemoveDevice, this.itemOri.json.wonum, 'device').then(results => {

                    if (!resultStatus) {
                      if (this.validationDeviceMandatory() === false) {
                        this.gf.displayToast("Device Details save successfully.");
                      } else {
                        this.gf.warningAlert('Success', 'Device Details save successfully.', 'Close');
                      }
                      // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                      // newRootNav.push("ServiceExecutionPage", this.itemOri);
                      this.navCtrl.pop();
                    } else if (resultStatus) {
                      if (resultStatus) {
                        this.gf.displayToast("Device Details save successfully.");
                      } else {
                        if (this.validationDeviceMandatory()) {
                          this.gf.displayToast("Device Details save successfully.");
                        } else {
                          // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                          // newRootNav.push("ServiceExecutionPage", this.itemOri);
                          this.navCtrl.pop();
                          this.gf.warningAlert('Success', 'Device Details save successfully.', 'Close');
                        }
                      }
                    } else {
                      this.gf.displayToast("Device Details save successfully.");
                    }
                  }
                  this.gf.stopLoading();

                }).catch(error => {
                  console.log('service failure : ' + error);
                  this.gf.stopLoading();
                });
            }).catch(error => {
              console.log('service failure : ' + error);
              this.gf.stopLoading();
            });
            // }

            //this.RemovalMainMeterReadingSave();
            //this.mainMeterChangesScenario();
          }
          else {
            this.itemOri.json.ta0feeder[this.indexVal].ta0existingdevice = false;
            this.itemOri.json.ta0feeder[this.indexVal].loc_multiassetlocci_haveChange = true;
            this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.displayToast("Device Details updated locally.");
            this.gf.stopLoading();
          }
        });
      } else {
        //item, wonumVal, pageAction, feederCode, workOrderType)
        var feederCode = this.itemOri.json.ta0feeder[this.indexVal].ta0feedercode;
        var itemVal = this.itemOri.json.ta0feeder[this.indexVal];
        let objfeeder = Object.assign({}, itemVal);
        let itemValSingle = null;
        delete objfeeder['feederSetDesign'];
        itemValSingle = Object.assign({}, objfeeder);
        itemValSingle.multiassetlocci = [];

        // assign feeder description for present feeder device.
        for (let multi of objfeeder.multiassetlocci) {
          //let multiAssetVal = Object.assign({}, multi);
          if (typeof (multi.assetnum) !== 'undefined') { // || multi.ta0removeind || multi.ta0replaceind) {
            delete multi['ta0sealdetail'];
            delete multi['ta0stickerdetail'];
            delete multi['ta0testdetail'];
            multi.ta0feedercode = feederCode;
            multi.ta0feederdescription = this.item.json.ta0feeder[this.indexVal].description;
            itemValSingle.multiassetlocci.push(multi);
          }
        }

        // assign feeder description and controlling device for other feeder device.
        for (var i = 0; i < this.itemOri.json.ta0feeder.length; i++) {
          if (i !== this.indexVal) {
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

        // if (this.listRemoveDevice.length > 0) {
        this.dataService.deleteDeviceList(this.listRemoveDevice, this.itemOri.json.wonum, 'device')
          .then(results => {
            this.dataService
              .saveRecordWithNewType(itemValSingle, this.itemOri.json.wonum, DeviceConstants.PAGE_ACTION_MULTIASSETLOCCI, feederCode, this.itemOri.json.worktype)
              .then(results => {

                // Clear Device Status & Removal Status
                this.removeDeviceRemovalStatus();
                console.log(' result + ' + JSON.stringify(results));
                this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
                this.itemOri.json.ta0feeder[this.indexVal].ta0existingdevice = false;
                this.itemOri.json.ta0feeder[this.indexVal].loc_multiassetlocci_haveChange = true;
                for (let multiasset of this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci) {
                  // multiasset.loc_multiassetlocci_haveChange = false;
                  this.itemOri.json.ta0feeder[this.indexVal].loc_multiassetlocci_haveChange = true;
                }


                if (results !== "") {
                  /** convert string into json */
                  var resultDes: any;
                  if (Array.isArray(results)) {
                    resultDes = results;
                  } else {
                    resultDes = JSON.parse(results.toString());
                  }

                  /** get the list new device creation */
                  var resultStatus: boolean = false;

                  if (typeof (resultDes) !== "undefined" || resultDes !== null || resultDes !== '') {
                    if (resultDes.processStatus === "failure") {
                      this.gf.warningAlert("Message", resultDes.description, "Close");
                      resultStatus = true;
                    } else {
                      if (typeof (resultDes.respObject) === "undefined" || resultDes.respObject === null || resultDes.respObject === '') {
                        resultStatus = false;
                      } else {
                        var newDevice = JSON.parse(JSON.stringify(resultDes.respObject));
                        var oldDevice = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci));
                        var failureDevice = [];
                        var successDevice = [];
                        var ctptNew = [];

                        ctptNew = newDevice.filter((item) => {
                          return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT);
                        });

                        if (ctptNew.length > 0) {
                          for (var k = 0; k < oldDevice.length; k++) {
                            for (var m = 0; m < ctptNew.length; m++) {
                              if (oldDevice[k].assetnum === ctptNew[m].ta0serialnum) {
                                oldDevice[k].assetnum = ctptNew[m].assetnum;
                                oldDevice[k].ta0serialnum = ctptNew[m].ta0serialnum;
                              }
                            }
                          }

                          /** Sending new assetnum to save in maximo. */
                          this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = [];
                          this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = oldDevice;
                        }

                        failureDevice = newDevice.filter((item) => {
                          return item.status === 'failure';
                        });

                        successDevice = newDevice.filter((item) => {
                          return item.status === 'success';
                        });

                        if (failureDevice.length > 0) {
                          var message = "";
                          message = "<p>";
                          for (var i = 0; i < failureDevice.length; i++) {
                            message = message + "Failed to create " + failureDevice[i].serialNo + "!<br>";
                          }
                          message = message + "</p>";
                          // Display message error
                          let alert = this.alertCtrl.create({
                            title: "Error",
                            message: message,
                            buttons: ["Close"]
                          });
                          alert.present();
                        }

                        if (successDevice.length > 0) {
                          for (var i = 0; i < oldDevice.length; i++) {
                            for (var k = 0; k < successDevice.length; k++) {
                              if (oldDevice[i].assetnum === successDevice[k].serialNo) {
                                oldDevice[i].assetnum = successDevice[k].assetNo;
                                oldDevice[i].ta0serialnum = successDevice[k].serialNo;
                              }
                            }
                          }

                          /** Sending new assetnum to save in maximo. */
                          this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = [];
                          this.itemOri.json.ta0feeder[this.indexVal].multiassetlocci = oldDevice;
                        }


                      }
                    }
                  } else {
                    resultStatus = false;
                  }

                  /* for(var i = 0; i < this.listRemoveDevice.length; i++) {
                    this.dataService.deleteDevice(null, this.listRemoveDevice["wonum"], this.listRemoveDevice["assetnum"], 'device') .then(results => { });  
                  } */
                  console.log('delete remove device.. ' + JSON.stringify(this.listRemoveDevice));
                  //this.dataService.deleteDeviceList(this.listRemoveDevice, this.itemOri.json.wonum, 'device').then(results => {

                  if (!resultStatus) {
                    if (this.validationDeviceMandatory() === false) {
                      this.gf.displayToast("Device Details save successfully.");
                    } else {
                      this.gf.warningAlert('Success', 'Device Details save successfully.', 'Close');
                    }

                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    this.navCtrl.pop();
                  } else if (resultStatus) {
                    if (resultStatus) {
                      this.gf.displayToast("Device Details save successfully.");
                    } else {
                      if (this.validationDeviceMandatory()) {
                        this.gf.displayToast("Device Details save successfully.");
                      } else {
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                        this.navCtrl.pop();
                        this.gf.warningAlert('Success', 'Device Details save successfully.', 'Close');
                      }
                    }
                  } else {
                    this.gf.displayToast("Device Details save successfully.");
                  }

                }

                this.gf.stopLoading();
              }).catch(error => {
                console.log('service failure : ' + error);
                this.gf.stopLoading();
              });
          }).catch(error => {
            console.log('service failure : ' + error);
            this.gf.stopLoading();
          });
      }
    }
  }

  mainMeterChangesScenario() {
    if (this.mainDeviceArray.length === 2) {
      for (var i = 0; i < this.item.json.ta0feeder.length; i++) {
        if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
          if (i !== this.indexVal) {
            for (var j = 0; j < this.item.json.ta0feeder[i].multiassetlocci.length; j++) {
              if (this.item.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice === this.mainDeviceArray[0].assetnum) {
                if (this.item.json.ta0feeder[i].multiassetlocci[j].ta0bcrmuploadindicator === 'METER_EQUIP') {
                  this.item.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice = this.mainDeviceArray[1].assetnum;
                }
              }
            }
          }
        }
      }

      for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
        for (var l = 0; l < this.item.json.ta0feeder[k].multiassetlocci.length; l++) {
          console.log("l : " + l + "   :  " + this.item.json.ta0feeder[k].multiassetlocci[l].ta0bcrmuploadindicator + "   :   " + this.item.json.ta0feeder[k].multiassetlocci[l].assetnum);
          console.log(" assetnum  : " + this.item.json.ta0feeder[k].multiassetlocci[l].assetnum);
          console.log("main device arry  : " + this.mainDeviceArray[0].ta0controllingdevice);
          if (this.item.json.ta0feeder[k].multiassetlocci[l].ta0bcrmuploadindicator === 'M_N_EQUIP' &&
            this.item.json.ta0feeder[k].multiassetlocci[l].assetnum === this.mainDeviceArray[0].ta0controllingdevice) {
            console.log(" old meeter no ..  .")
            var eMainMeterIndex = this.item.json.ta0feeder[this.indexVal].feederSetDesign[0].eMeterIndex;
            console.log(" befor : " + this.item.json.ta0feeder[this.indexVal].multiassetlocci[eMainMeterIndex].ta0controllingdevice);
            console.log(" assign : " + this.item.json.ta0feeder[k].multiassetlocci[l].ta0olddeviceserialnum);
            this.item.json.ta0feeder[this.indexVal].multiassetlocci[eMainMeterIndex].ta0controllingdevice = this.item.json.ta0feeder[k].multiassetlocci[l].ta0olddeviceserialnum;
            console.log(" after assign : " + this.item.json.ta0feeder[this.indexVal].multiassetlocci[eMainMeterIndex].ta0controllingdevice);
            break;
          }
          // break;
        }
      }

      this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
    }
  }

  RemovalMainMeterReadingSave() {

    if (
      (this.existingWord !== '' && this.existingWord !== null && typeof this.existingWord !== 'undefined') &&
      (this.newWord !== '' && this.newWord !== null && typeof this.newWord !== 'undefined')) {

      for (var i = 0; i < this.itemOri.json.ta0feeder.length; i++) {

        if (i !== this.indexVal) {

          for (var j = 0; j < this.itemOri.json.ta0feeder[i].multiassetlocci.length; j++) {

            if (this.itemOri.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice === this.existingWord) {

              if (this.itemOri.json.ta0feeder[i].multiassetlocci[j].ta0bcrmuploadindicator === 'METER_EQUIP') {

                this.itemOri.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice = this.newWord;
              }
            }
          }
        }
      }
      this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
    }
  }

  RemovalMainMeterReading() {

    if (typeof (this.mainDeviceArray[1]) !== "undefined" && typeof (this.mainDeviceArray[0]) !== "undefined") {
      if (this.mainDeviceArray.length > 1) {
        this.existingWord = this.mainDeviceArray[1].assetnum;
        this.newWord = this.mainDeviceArray[0].assetnum;
        for (var i = (this.indexVal + 1); i < this.item.json.ta0feeder.length; i++) {
          if (i !== this.indexVal) {
            for (var j = 0; j < this.item.json.ta0feeder[i].multiassetlocci.length; j++) {

              if (this.item.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice === this.mainDeviceArray[1].assetnum) {

                if (this.item.json.ta0feeder[i].multiassetlocci[j].ta0bcrmuploadindicator === 'METER_EQUIP') {

                  this.item.json.ta0feeder[i].multiassetlocci[j].ta0controllingdevice = this.mainDeviceArray[0].assetnum;
                }
              }
            }

          }
        }
        this.jsonStoreCrud.replaceWO(this.item, "LPCWORKORDER", false);
      }
    }

  }

  /**
   * Reason : To remove local data json.
   * By     : Alif
   * Date   : 02-11-2018
   */
  removeDeviceRemovalStatus() {
    var feeder = this.itemOri.json.ta0feeder;

    if (typeof (feeder) !== "undefined") {
      for (var i = 0; i < feeder.length; i++) {
        var multiassetlocci = feeder[i].multiassetlocci;
        if (typeof (multiassetlocci) !== "undefined") {
          for (var k = 0; k < multiassetlocci.length; k++) {
            if (typeof (multiassetlocci[k].ta0systemstatus) !== "undefined" && multiassetlocci[k].ta0systemstatus === "D") {
              if (typeof (multiassetlocci[k].ta0devicestatus) !== "undefined" && multiassetlocci[k].ta0devicestatus.length > 0) {
                // Remove removal status
                multiassetlocci[k].ta0devicestatus = [];
              }
            }
          }
        }
        this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", false);
      }
    }
  }

  checkUpdateSingleScenario(ChangeValue, arrayContent) {

    var result = '';
    var arrayValue = arrayContent.length;

    if ((arrayValue > 1) && (ChangeValue > 1)) {

      result = arrayContent[0].assetnum;
    }
    if ((arrayValue === 1) && (ChangeValue > 1)) {

      result = arrayContent[0].assetnum;
    }
    if ((arrayValue > 1) && (ChangeValue === 1)) {

      result = arrayContent[1].assetnum;
    }
    if ((arrayValue === 1) && (ChangeValue === 1)) {

      result = arrayContent[0].assetnum;
    }
    return result;
  }

  checkUpdateMultiScenario(ChangeValue, arrayContent) {

    var result = '';
    var arrayValue = arrayContent.length;

    if ((arrayValue > 1) && (ChangeValue > 1)) {

      result = arrayContent[1].assetnum;
    }
    if ((arrayValue === 1) && (ChangeValue > 1)) {

      result = arrayContent[0].assetnum;
    }
    return result;
  }

  //Ameer
  inputForMandatoryField() {

    if (this.mainDeviceArray[0].assetnum === undefined || this.mainDeviceArray[0].assetnum === '') {
      this.validationRequired = false;
    } else if (this.mainDeviceArray[0].ta0allocationtype === null || this.mainDeviceArray[0].ta0allocationtype === undefined) {
      this.allocationType = false;
      // this.validationRequired = true;
    } else {
      this.allocationType = true;
      this.validationRequired = true;
    }
  }

  // Ameer (validation for check CT)
  validateCt(keyVal, IndexVal) {

    this.checkCt = true;
    this.phaseColorR = false;
    this.phaseColorY = false;
    this.phaseColorB = false;

    this.ctColorR2 = false;
    this.ctColorY2 = false;
    this.ctColorB2 = false;

    this.ctColorR3 = false;
    this.ctColorY3 = false;
    this.ctColorB2 = false;
    switch (keyVal) {
      case 'ct1':
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "R" && this.ctDevice1Array[IndexVal].ta0ctptphase === "R" || this.ctDevice0Array[IndexVal].ta0ctptphase === "R" && this.ctDevice2Array[IndexVal].ta0ctptphase === "R") {
          this.checkCt = false;
          this.phaseColorR = true;
        }
        else {
          this.phaseColorR = false;
        }
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "Y" && this.ctDevice1Array[IndexVal].ta0ctptphase === "Y" || this.ctDevice0Array[IndexVal].ta0ctptphase === "Y" && this.ctDevice2Array[IndexVal].ta0ctptphase === "Y") {
          this.checkCt = false;
          this.phaseColorY = true;
        }
        else {
          this.phaseColorY = false;
        }
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "B" && this.ctDevice1Array[IndexVal].ta0ctptphase === "B" && this.ctDevice2Array[IndexVal].ta0ctptphase === "B") {
          this.checkCt = false;
          this.phaseColorB = true;
        }
        else {
          this.phaseColorB = false;
        }
        break;
      case 'ct2':
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "R" && this.ctDevice1Array[IndexVal].ta0ctptphase === "R" || this.ctDevice1Array[IndexVal].ta0ctptphase === "R" && this.ctDevice2Array[IndexVal].ta0ctptphase === "R") {
          this.checkCt = false;
          this.ctColorR2 = true;
        }
        else {
          this.ctColorR2 = false;
        }
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "Y" && this.ctDevice1Array[IndexVal].ta0ctptphase === "Y" || this.ctDevice1Array[IndexVal].ta0ctptphase === "Y" && this.ctDevice2Array[IndexVal].ta0ctptphase === "Y") {
          this.checkCt = false;
          this.ctColorY2 = true;
        }
        else {
          this.ctColorY2 = false;
        }
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "B" && this.ctDevice1Array[IndexVal].ta0ctptphase === "B" || this.ctDevice1Array[IndexVal].ta0ctptphase === "B" && this.ctDevice2Array[IndexVal].ta0ctptphase === "B") {
          this.checkCt = false;
          this.ctColorB2 = true;
        }
        else {
          this.ctColorB2 = false;
        }
        break;

      case 'ct3':
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "R" && this.ctDevice2Array[IndexVal].ta0ctptphase === "R" || this.ctDevice1Array[IndexVal].ta0ctptphase === "R" && this.ctDevice2Array[IndexVal].ta0ctptphase === "R") {
          this.checkCt = false;
          this.ctColorR3 = true;
        }
        else {
          this.ctColorR3 = false;
        }
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "Y" && this.ctDevice2Array[IndexVal].ta0ctptphase === "Y" || this.ctDevice1Array[IndexVal].ta0ctptphase === "Y" && this.ctDevice2Array[IndexVal].ta0ctptphase === "Y") {
          this.checkCt = false;
          this.ctColorY3 = true;
        }
        else {
          this.ctColorY3 = false;
        }
        if (this.ctDevice0Array[IndexVal].ta0ctptphase === "B" && this.ctDevice2Array[IndexVal].ta0ctptphase === "B" || this.ctDevice1Array[IndexVal].ta0ctptphase === "B" && this.ctDevice2Array[IndexVal].ta0ctptphase === "B") {
          this.checkCt = false;
          this.ctColorB3 = true;
        }
        else {
          this.ctColorB3 = false;

        }
        break;
    }
    return this.checkCt;
  }

  //Ameer (validate PT cannot select same )
  validatePt(keyValue, indexVal) {
    //

    this.checkPt = true;
    this.PtColorR = false;
    this.PtColorY = false;
    this.PtColorB = false;
    this.PtColorR2 = false;
    this.PtColorY2 = false;
    this.PtColorB2 = false;
    this.PtColorR3 = false;
    this.PtColorY3 = false;
    this.PtColorB3 = false;

    switch (keyValue) {
      case 'pt1':
        if (this.ptDevice0Array[indexVal].ta0ctptphase === 'R' && this.ptDevice2Array[indexVal].ta0ctptphase === 'R' || this.ptDevice0Array[indexVal].ta0ctptphase === 'R' && this.ptDevice1Array[indexVal].ta0ctptphase === 'R') {
          this.checkPt = false;
          this.PtColorR = true;
        }

        else {
          this.PtColorR = false;
        }
        if (this.ptDevice0Array[indexVal].ta0ctptphase === 'Y' && this.ptDevice2Array[indexVal].ta0ctptphase === 'Y' || this.ptDevice1Array[indexVal].ta0ctptphase === 'Y' && this.ptDevice0Array[indexVal].ta0ctptphase === 'Y') {
          this.checkPt = false;
          this.PtColorY = true;
        }

        else {
          this.PtColorY = false;
        }
        if (this.ptDevice0Array[indexVal].ta0ctptphase === 'B' && this.ptDevice2Array[indexVal].ta0ctptphase === 'B' || this.ptDevice1Array[indexVal].ta0ctptphase === 'B' && this.ptDevice0Array[indexVal].ta0ctptphase === 'B') {
          this.checkPt = false;
          this.PtColorB = true;
        }

        else {
          this.PtColorB = false;
        }
        break;
      case 'pt2':
        if (this.ptDevice1Array[indexVal].ta0ctptphase === 'R' && this.ptDevice2Array[indexVal].ta0ctptphase === 'R' || this.ptDevice0Array[indexVal].ta0ctptphase === 'R' && this.ptDevice1Array[indexVal].ta0ctptphase === 'R') {
          this.checkPt = false;
          this.PtColorR2 = true;
        }

        else {
          this.PtColorR2 = false;
        }
        if (this.ptDevice1Array[indexVal].ta0ctptphase === 'Y' && this.ptDevice2Array[indexVal].ta0ctptphase === 'Y' || this.ptDevice0Array[indexVal].ta0ctptphase === 'Y' && this.ptDevice1Array[indexVal].ta0ctptphase === 'Y') {
          this.checkPt = false;
          this.PtColorY2 = true;
        }

        else {
          this.PtColorY2 = false;
        }
        if (this.ptDevice1Array[indexVal].ta0ctptphase === 'B' && this.ptDevice2Array[indexVal].ta0ctptphase === 'B' || this.ptDevice0Array[indexVal].ta0ctptphase === 'B' && this.ptDevice1Array[indexVal].ta0ctptphase === 'B') {
          this.checkPt = false;
          this.PtColorB2 = true;
        }

        else {
          this.PtColorB2 = false;
        }
        break;
      case 'pt3':
        if (this.ptDevice0Array[indexVal].ta0ctptphase === 'R' && this.ptDevice2Array[indexVal].ta0ctptphase === 'R' || this.ptDevice2Array[indexVal].ta0ctptphase === 'R' && this.ptDevice1Array[indexVal].ta0ctptphase === 'R') {
          this.checkPt = false;
          this.PtColorR3 = true;
        }

        else {
          this.PtColorR3 = false;
        }
        if (this.ptDevice0Array[indexVal].ta0ctptphase === 'Y' && this.ptDevice2Array[indexVal].ta0ctptphase === 'Y' || this.ptDevice2Array[indexVal].ta0ctptphase === 'Y' && this.ptDevice2Array[indexVal].ta0ctptphase === 'Y') {
          this.checkPt = false;
          this.PtColorY3 = true;
        }

        else {
          this.PtColorY3 = false;
        }
        if (this.ptDevice0Array[indexVal].ta0ctptphase === 'B' && this.ptDevice2Array[indexVal].ta0ctptphase === 'B' || this.ptDevice2Array[indexVal].ta0ctptphase === 'B' && this.ptDevice1Array[indexVal].ta0ctptphase === 'B') {
          this.checkPt = false;
          this.PtColorB3 = true;
        }

        else {
          this.PtColorB3 = false;
        }
        break;

    }
    return this.checkPt;
  }

  addNewDeviceField(deviceType, parentType, tCheck) {
    console.log('Access addNewDeviceField');
    // Retrigger lookup
    this.lookup();

    var new_voltage = undefined;
    if (typeof (this.item.json.ta0newvoltage) !== "undefined") {
      new_voltage = JSON.parse(JSON.stringify(this.item.json.ta0newvoltage));
    }

    switch (this.worktype) {
      case SoTypes.ZIST:
      case SoTypes.ZISR: {
        switch (deviceType) {
          case DeviceConstants.DEVICE_TYPE_NAME_MAIN: {
            if (this.mainDeviceArray[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'main';
              deviceDetails.ta0installind = true;
              this.mainDeviceArray[1] = deviceDetails;
              this.assignCheckMeterAllocationType();
            } else {
              console.log("Hide Add New Device Field...");
              if (this.mainDeviceArray.length > 1) {
                this.mainDeviceArray.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_CHECK: {
            if (this.checkDeviceArray[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'check';
              deviceDetails.ta0installind = true;
              this.checkDeviceArray[1] = deviceDetails;
            } else {
              console.log("Hide Add New Device Field...");
              if (this.checkDeviceArray.length > 1) {
                this.checkDeviceArray.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_MODEM: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_MODEM');
            if (DeviceConstants.DEVICE_TYPE_NAME_CHECK === parentType) {
              if (this.checkModemArray[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'check';
                deviceDetails.ta0installind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
                this.checkModemArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.checkModemArray.length > 1) {
                  this.checkModemArray.pop();
                }
              }
            } else {
              if (this.mainModemArray[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
                this.mainModemArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.mainModemArray.length > 1) {
                  this.mainModemArray.pop();
                }
              }
              console.log('mainModemArray : '+JSON.stringify(this.mainModemArray));
            }


            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_SIMCARD: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_SIMCARD');
            if (DeviceConstants.DEVICE_TYPE_NAME_CHECK === parentType) {
              if (this.checkSimcardArray[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
                this.checkSimcardArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.checkSimcardArray.length > 1) {
                  this.checkSimcardArray.pop();
                }
              }
            } else {
              if (this.mainSimcardArray[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
                this.mainSimcardArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.mainSimcardArray.length > 1) {
                  this.mainSimcardArray.pop();
                }
              }
            }
            console.log('mainModemArray : '+JSON.stringify(this.mainSimcardArray));

            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_CT: {
            if (this.ctDevice0Array[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'main';
              deviceDetails.ta0installind = true;
              deviceDetails.ta0ctptphase = "R";
              if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                deviceDetails.ta0functionclass = this.fCons.CTTFR;
              } else {
                deviceDetails.ta0functionclass = this.fCons.CTDIR;
                deviceDetails.ta0systemstatus = "AVLB";
              }
              this.ctDevice0Array[1] = deviceDetails;
            } else {
              console.log("Hide Add New Device Field...");
              if (this.ctDevice0Array.length > 1) {
                this.ctDevice0Array.pop();
              }
            }

            if (this.ctDevice1Array[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'main';
              deviceDetails.ta0installind = true;
              deviceDetails.ta0ctptphase = "Y";
              if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                deviceDetails.ta0functionclass = this.fCons.CTTFR;
              } else {
                deviceDetails.ta0functionclass = this.fCons.CTDIR;
                deviceDetails.ta0systemstatus = "AVLB";
              }
              this.ctDevice1Array[1] = deviceDetails;
            } else {
              console.log("Hide Add New Device Field...");
              if (this.ctDevice1Array.length > 1) {
                this.ctDevice1Array.pop();
              }
            }

            if (this.ctDevice2Array[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'main';
              deviceDetails.ta0installind = true;
              deviceDetails.ta0ctptphase = "B";
              if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                deviceDetails.ta0functionclass = this.fCons.CTTFR;
              } else {
                deviceDetails.ta0functionclass = this.fCons.CTDIR;
                deviceDetails.ta0systemstatus = "AVLB";
              }
              this.ctDevice2Array[1] = deviceDetails;
            } else {
              console.log("Hide Add New Device Field...");
              if (this.ctDevice2Array.length > 1) {
                this.ctDevice2Array.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_PT: {
            // if (this.ptDeviceArray[0].ta0removeind === true) {
            //   console.log("Show Add New Device Field...");
            //   var deviceDetails = new MultiAssetLocci();
            //   deviceDetails.devicetype = 'main';
            //   deviceDetails.ta0installind = true;
            //   this.ptDeviceArray[1] = deviceDetails;
            // } else {
            //   console.log("Hide Add New Device Field...");
            //   if (this.ptDeviceArray.length > 1) {
            //     this.ptDeviceArray.pop();
            //   }
            // }
            break;
          }
        }
        break;
      }

      case SoTypes.ZUDN:
      case SoTypes.ZRPC: {
        console.log("case ZRPC");
        switch (deviceType) {
          case DeviceConstants.DEVICE_TYPE_NAME_MAIN: {
            if (this.mainDeviceArray[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'main';
              deviceDetails.ta0installind = true;
              this.mainDeviceArray[1] = deviceDetails;
            }
            else {
              console.log("Hide Add New Device Field...");
              if (this.mainDeviceArray.length > 1) {
                this.mainDeviceArray.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_CHECK: {
            if (this.checkDeviceArray[0].ta0removeind === true) {
              console.log("Show Add New Device Field...");
              if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'check';
                deviceDetails.ta0installind = true;
                this.checkDeviceArray[1] = deviceDetails;
                // Assiging Allocation Type for Check Meter
                this.assignCheckMeterAllocationType();
              }

            } else {
              console.log("Hide Add New Device Field...");
              if (this.checkDeviceArray.length > 1) {
                this.checkDeviceArray.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_MODEM: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_MODEM');
            if (DeviceConstants.DEVICE_TYPE_NAME_CHECK === parentType) {
              if (this.checkModemArray[0].ta0removeind === true) {
                if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {
                  console.log("Show Add New Device Field...");
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'check';
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
                  this.checkModemArray[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.checkModemArray.length > 1) {
                  this.checkModemArray.pop();
                }
              }
            } else {
              if (this.mainModemArray[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
                this.mainModemArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.mainModemArray.length > 1) {
                  this.mainModemArray.pop();
                }
              }
            }
            console.log('this.mainModemArray : '+JSON.stringify(this.mainModemArray));
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_SIMCARD: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_SIMCARD');
            if (DeviceConstants.DEVICE_TYPE_NAME_CHECK === parentType) {
              if (this.checkSimcardArray[0].ta0removeind === true) {
                if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {
                  console.log("Show Add New Device Field...");
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'main';
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
                  this.checkSimcardArray[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.checkSimcardArray.length > 1) {
                  this.checkSimcardArray.pop();
                }
              }
            } else {
              if (this.mainSimcardArray[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
                this.mainSimcardArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.mainSimcardArray.length > 1) {
                  this.mainSimcardArray.pop();
                }
              }
            }
            console.log('this.mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_CT: {
            if (tCheck === 'ct_0') {
              if (this.ctDevice0Array[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'ct';
                  deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0ctptphase = "R";
                  if (new_voltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                    deviceDetails.ta0functionclass = this.fCons.CTTFR;
                  } else {
                    deviceDetails.ta0functionclass = this.fCons.CTDIR;
                    deviceDetails.ta0systemstatus = "AVLB";
                  }
                  if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ctDevice1Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0currentratio = this.ctDevice1Array[1].loc_ta0currentratio;
                    deviceDetails.loc_ta0class = this.ctDevice1Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ctDevice1Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ctDevice1Array[1].ta0va;
                    deviceDetails.ta0class = this.ctDevice1Array[1].ta0class;

                  } else if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ctDevice2Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0currentratio = this.ctDevice2Array[1].loc_ta0currentratio;
                    deviceDetails.loc_ta0class = this.ctDevice2Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ctDevice2Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ctDevice2Array[1].ta0va;
                    deviceDetails.ta0class = this.ctDevice2Array[1].ta0class;
                  }
                  this.ctDevice0Array[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ctDevice0Array.length > 1) {
                  this.ctDevice0Array.pop();
                }
              }
            }

            if (tCheck === 'ct_1') {
              if (this.ctDevice1Array[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'ct';
                  deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0ctptphase = "Y";
                  if (new_voltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                    deviceDetails.ta0functionclass = this.fCons.CTTFR;
                  } else {
                    deviceDetails.ta0functionclass = this.fCons.CTDIR;
                    deviceDetails.ta0systemstatus = "AVLB";
                  }
                  if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ctDevice0Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0currentratio = this.ctDevice0Array[1].loc_ta0currentratio;
                    deviceDetails.loc_ta0class = this.ctDevice0Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ctDevice0Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ctDevice0Array[1].ta0va;
                    deviceDetails.ta0class = this.ctDevice0Array[1].ta0class;

                  } else if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ctDevice2Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0currentratio = this.ctDevice2Array[1].loc_ta0currentratio;
                    deviceDetails.loc_ta0class = this.ctDevice2Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ctDevice2Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ctDevice2Array[1].ta0va;
                    deviceDetails.ta0class = this.ctDevice2Array[1].ta0class;
                  }
                  this.ctDevice1Array[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ctDevice1Array.length > 1) {
                  this.ctDevice1Array.pop();
                }
              }
            }

            if (tCheck === 'ct_2') {
              if (this.ctDevice2Array[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                if (this.dCons.VOL_LEVEL_OPC_1PH !== this.item.json.ta0newvoltage && this.dCons.VOL_LEVEL_OPC_3PH !== this.item.json.ta0newvoltage) {
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'ct';
                  deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0ctptphase = "B";
                  if (new_voltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                    deviceDetails.ta0functionclass = this.fCons.CTTFR;
                  } else {
                    deviceDetails.ta0functionclass = this.fCons.CTDIR;
                    deviceDetails.ta0systemstatus = "AVLB";
                  }
                  if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ctDevice0Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0currentratio = this.ctDevice0Array[1].loc_ta0currentratio;
                    deviceDetails.loc_ta0class = this.ctDevice0Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ctDevice0Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ctDevice0Array[1].ta0va;
                    deviceDetails.ta0class = this.ctDevice0Array[1].ta0class;

                  } else if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ctDevice1Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0currentratio = this.ctDevice1Array[1].loc_ta0currentratio;
                    deviceDetails.loc_ta0class = this.ctDevice1Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ctDevice1Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ctDevice1Array[1].ta0va;
                    deviceDetails.ta0class = this.ctDevice1Array[1].ta0class;
                  }
                  this.ctDevice2Array[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ctDevice2Array.length > 1) {
                  this.ctDevice2Array.pop();
                }
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_PT: {
            if (tCheck === 'pt_0') {
              if (this.ptDevice0Array[0].ta0removeind === true) {

                console.log("Show Add New Device Field...");
                if (this.item.json.ta0newvoltage > this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'pt';
                  deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0ctptphase = "R";
                  if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                    deviceDetails.ta0functionclass = this.fCons.PTTFR;
                  } else {
                    deviceDetails.ta0functionclass = this.fCons.VTDIR;
                    deviceDetails.ta0systemstatus = "AVLB";
                  }
                  if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ptDevice1Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0voltageratio = this.ptDevice1Array[1].loc_ta0voltageratio;
                    deviceDetails.loc_ta0class = this.ptDevice1Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ptDevice1Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ptDevice1Array[1].ta0va;
                    deviceDetails.ta0class = this.ptDevice1Array[1].ta0class;
                  } else if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ptDevice2Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0voltageratio = this.ptDevice2Array[1].loc_ta0voltageratio;
                    deviceDetails.loc_ta0class = this.ptDevice2Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ptDevice2Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ptDevice2Array[1].ta0va;
                    deviceDetails.ta0class = this.ptDevice2Array[1].ta0class;
                  }
                  this.ptDevice0Array[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ptDevice0Array.length > 1) {
                  this.ptDevice0Array.pop();
                }
              }
            }

            if (tCheck === 'pt_1') {
              if (this.ptDevice1Array[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                if (this.item.json.ta0newvoltage > this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'pt';
                  deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0ctptphase = "Y";
                  if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                    deviceDetails.ta0functionclass = this.fCons.PTTFR;
                  } else {
                    deviceDetails.ta0functionclass = this.fCons.VTDIR;
                    deviceDetails.ta0systemstatus = "AVLB";
                  }
                  if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ptDevice0Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0voltageratio = this.ptDevice0Array[1].loc_ta0voltageratio;
                    deviceDetails.loc_ta0class = this.ptDevice0Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ptDevice0Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ptDevice0Array[1].ta0va;
                    deviceDetails.ta0class = this.ptDevice0Array[1].ta0class;
                  } else if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ptDevice2Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0voltageratio = this.ptDevice2Array[1].loc_ta0voltageratio;
                    deviceDetails.loc_ta0class = this.ptDevice2Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ptDevice2Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ptDevice2Array[1].ta0va;
                    deviceDetails.ta0class = this.ptDevice2Array[1].ta0class;
                  }
                  this.ptDevice1Array[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ptDevice1Array.length > 1) {
                  this.ptDevice1Array.pop();
                }
              }
            }

            if (tCheck === 'pt_2') {
              if (this.ptDevice2Array[0].ta0removeind === true) {
                console.log("Show Add New Device Field...");
                if (this.item.json.ta0newvoltage > this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  var deviceDetails = new MultiAssetLocci();
                  deviceDetails.devicetype = 'pt';
                  deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                  deviceDetails.ta0installind = true;
                  deviceDetails.ta0ctptphase = "B";
                  if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                    deviceDetails.ta0functionclass = this.fCons.PTTFR;
                  } else {
                    deviceDetails.ta0functionclass = this.fCons.VTDIR;
                    deviceDetails.ta0systemstatus = "AVLB";
                  }
                  if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ptDevice0Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0voltageratio = this.ptDevice0Array[1].loc_ta0voltageratio;
                    deviceDetails.loc_ta0class = this.ptDevice0Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ptDevice0Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ptDevice0Array[1].ta0va;
                    deviceDetails.ta0class = this.ptDevice0Array[1].ta0class;

                  } else if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                    deviceDetails.loc_windingGroup = this.ptDevice1Array[1].loc_windingGroup;
                    deviceDetails.loc_ta0voltageratio = this.ptDevice1Array[1].loc_ta0voltageratio;
                    deviceDetails.loc_ta0class = this.ptDevice1Array[1].loc_ta0class;
                    deviceDetails.ta0currentratio = this.ptDevice1Array[1].ta0currentratio;
                    deviceDetails.ta0va = this.ptDevice1Array[1].ta0va;
                    deviceDetails.ta0class = this.ptDevice1Array[1].ta0class;
                  }
                  this.ptDevice2Array[1] = deviceDetails;
                }
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ptDevice2Array.length > 1) {
                  this.ptDevice2Array.pop();
                }
              }
            }
          }
        }
        break;
      }

      case SoTypes.ZSRO:
      case SoTypes.ZRPM:
      case SoTypes.ZCER:
      case SoTypes.ZINL:
      case SoTypes.ZINR: {
        console.log('case ZINR');
        console.log('deviceType : '+deviceType);
        switch (deviceType) {
          case DeviceConstants.DEVICE_TYPE_NAME_MAIN: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_MAIN');
            if (this.mainDeviceArray[0].ta0replaceind === true) {
              // ZINR updating new device
              if (this.worktype === SoTypes.ZINL) {
                this.item.json.ta0subsoindicator = true;
              }
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'main';
              deviceDetails.ta0installind = false;
              deviceDetails.ta0replaceind = true;
              deviceDetails.ta0allocationtype = this.mainDeviceArray[0].ta0allocationtype;
              deviceDetails.ta0controllingdevice = this.mainDeviceArray[0].ta0controllingdevice;
              this.mainDeviceArray[1] = deviceDetails;
              console.log('this.mainDeviceArray : '+JSON.stringify(this.mainDeviceArray));
            }
            else {
              console.log("Hide Add New Device Field...");
              if (this.mainDeviceArray.length > 1) {
                this.mainDeviceArray.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_CHECK: {
            if (this.checkDeviceArray[0].ta0replaceind === true) {
              // ZINR updating new device
              if (this.worktype === SoTypes.ZINL) {
                this.item.json.ta0subsoindicator = true;
              }
              console.log("Show Add New Device Field...");
              var deviceDetails = new MultiAssetLocci();
              deviceDetails.devicetype = 'check';
              deviceDetails.ta0installind = false;
              deviceDetails.ta0replaceind = true;
              this.checkDeviceArray[1] = deviceDetails;

              // Assiging Allocation Type for Check Meter
              if (typeof (this.mainDeviceArray[1]) !== 'undefined') { // Checking new main meter allocation type
                if (this.mainDeviceArray[1].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
                } else if (this.mainDeviceArray[1].ta0allocationtype === this.dCons.DEV_ALLOC_FEEDER_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
                } else if (this.mainDeviceArray[1].ta0allocationtype === this.dCons.DEV_ALLOC_SUB_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
                } else if (this.mainDeviceArray[1].ta0allocationtype == this.dCons.DEV_ALLOC_SUB_FEEDER_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
                }
              } else {
                if (this.mainDeviceArray[0].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
                } else if (this.mainDeviceArray[0].ta0allocationtype === this.dCons.DEV_ALLOC_FEEDER_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
                } else if (this.mainDeviceArray[0].ta0allocationtype === this.dCons.DEV_ALLOC_SUB_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
                } else if (this.mainDeviceArray[0].ta0allocationtype == this.dCons.DEV_ALLOC_SUB_FEEDER_METER) {
                  this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
                }
              }

            } else {
              console.log("Hide Add New Device Field...");
              if (this.checkDeviceArray.length > 1) {
                this.checkDeviceArray.pop();
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_MODEM: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_MODEM');
            if (DeviceConstants.DEVICE_TYPE_NAME_CHECK === parentType) {
              if (this.checkModemArray[0].ta0replaceind === true) {
                // ZINR updating new device
                if (this.worktype === SoTypes.ZINL) {
                  this.item.json.ta0subsoindicator = true;
                }
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'check';
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
                this.checkModemArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.checkModemArray.length > 1) {
                  this.checkModemArray.pop();
                }
              }
            } else {
              if (this.mainModemArray[0].ta0replaceind === true) {
                // ZINR updating new device
                if (this.worktype === SoTypes.ZINL) {
                  this.item.json.ta0subsoindicator = true;
                }
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_MODEM;
                this.mainModemArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.mainModemArray.length > 1) {
                  this.mainModemArray.pop();
                }
              }
            }
            console.log('>>>> this.mainModemArray : '+JSON.stringify(this.mainModemArray));
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_SIMCARD: {
            console.log('case DeviceConstants.DEVICE_TYPE_NAME_SIMCARD');
            if (DeviceConstants.DEVICE_TYPE_NAME_CHECK === parentType) {
              if (this.checkSimcardArray[0].ta0replaceind === true) {
                // ZINR updating new device
                if (this.worktype === SoTypes.ZINL) {
                  this.item.json.ta0subsoindicator = true;
                }
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
                this.checkSimcardArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.checkSimcardArray.length > 1) {
                  this.checkSimcardArray.pop();
                }
              }
            } else {
              if (this.mainSimcardArray[0].ta0replaceind === true) {
                // ZINR updating new device
                if (this.worktype === SoTypes.ZINL) {
                  this.item.json.ta0subsoindicator = true;
                }
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'main';
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0allocationtype = DeviceConstants.DEV_ALLOC_SIM_CARD;
                this.mainSimcardArray[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.mainSimcardArray.length > 1) {
                  this.mainSimcardArray.pop();
                }
              }
            }
            console.log('>>>> this.mainSimcardArray : '+JSON.stringify(this.mainSimcardArray));
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_CT: {
            if (tCheck === 'ct_0') {
              if (this.ctDevice0Array[0].ta0replaceind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'ct';
                deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0ctptphase = "R";
                if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  deviceDetails.ta0functionclass = this.fCons.CTTFR;
                } else {
                  deviceDetails.ta0functionclass = this.fCons.CTDIR;
                  deviceDetails.ta0systemstatus = "AVLB";
                }
                if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ctDevice2Array[1].loc_windingGroup;
                  deviceDetails.ta0currentratio = this.ctDevice2Array[1].ta0currentratio;
                  deviceDetails.loc_ta0currentratio = this.ctDevice2Array[1].loc_ta0currentratio;
                  deviceDetails.ta0va = this.ctDevice2Array[1].ta0va;
                  deviceDetails.ta0class = this.ctDevice2Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ctDevice2Array[1].loc_ta0class;
                } else if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ctDevice1Array[1].loc_windingGroup;
                  deviceDetails.ta0currentratio = this.ctDevice1Array[1].ta0currentratio;
                  deviceDetails.loc_ta0currentratio = this.ctDevice1Array[1].loc_ta0currentratio;
                  deviceDetails.ta0va = this.ctDevice1Array[1].ta0va;
                  deviceDetails.ta0class = this.ctDevice1Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ctDevice1Array[1].loc_ta0class;
                }
                this.ctDevice0Array[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ctDevice0Array.length > 1) {
                  this.ctDevice0Array.pop();
                }
              }
            }

            if (tCheck === 'ct_1') {
              if (this.ctDevice1Array[0].ta0replaceind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'ct';
                deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0ctptphase = "Y";
                if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  deviceDetails.ta0functionclass = this.fCons.CTTFR;
                } else {
                  deviceDetails.ta0functionclass = this.fCons.CTDIR;
                  deviceDetails.ta0systemstatus = "AVLB";
                }
                if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ctDevice0Array[1].loc_windingGroup;
                  deviceDetails.ta0currentratio = this.ctDevice0Array[1].ta0currentratio;
                  deviceDetails.loc_ta0currentratio = this.ctDevice0Array[1].loc_ta0currentratio;
                  deviceDetails.ta0va = this.ctDevice0Array[1].ta0va;
                  deviceDetails.ta0class = this.ctDevice0Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ctDevice0Array[1].loc_ta0class;
                } else if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ctDevice2Array[1].loc_windingGroup;
                  deviceDetails.ta0currentratio = this.ctDevice2Array[1].ta0currentratio;
                  deviceDetails.loc_ta0currentratio = this.ctDevice2Array[1].loc_ta0currentratio;
                  deviceDetails.ta0va = this.ctDevice2Array[1].ta0va;
                  deviceDetails.ta0class = this.ctDevice2Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ctDevice2Array[1].loc_ta0class;
                }
                this.ctDevice1Array[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ctDevice1Array.length > 1) {
                  this.ctDevice1Array.pop();
                }
              }
            }

            if (tCheck === 'ct_2') {
              if (this.ctDevice2Array[0].ta0replaceind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'ct';
                deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0ctptphase = "B";
                if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  deviceDetails.ta0functionclass = this.fCons.CTTFR;
                } else {
                  deviceDetails.ta0functionclass = this.fCons.CTDIR;
                  deviceDetails.ta0systemstatus = "AVLB";
                }
                // Assigning Winding Group
                if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ctDevice1Array[1].loc_windingGroup;
                  deviceDetails.ta0currentratio = this.ctDevice1Array[1].ta0currentratio;
                  deviceDetails.loc_ta0currentratio = this.ctDevice1Array[1].loc_ta0currentratio;
                  deviceDetails.ta0va = this.ctDevice1Array[1].ta0va;
                  deviceDetails.ta0class = this.ctDevice1Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ctDevice1Array[1].loc_ta0class;
                } else if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ctDevice0Array[1].loc_windingGroup;
                  deviceDetails.ta0currentratio = this.ctDevice0Array[1].ta0currentratio;
                  deviceDetails.loc_ta0currentratio = this.ctDevice0Array[1].loc_ta0currentratio;
                  deviceDetails.ta0va = this.ctDevice0Array[1].ta0va;
                  deviceDetails.ta0class = this.ctDevice0Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ctDevice0Array[1].loc_ta0class;
                }
                this.ctDevice2Array[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ctDevice2Array.length > 1) {
                  this.ctDevice2Array.pop();
                }
              }
            }
            break;
          }
          case DeviceConstants.DEVICE_TYPE_NAME_PT: {
            if (tCheck === 'pt_0') {
              if (this.ptDevice0Array[0].ta0replaceind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'pt';
                deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0ctptphase = "R";
                if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  deviceDetails.ta0functionclass = this.fCons.PTTFR;
                } else {
                  deviceDetails.ta0functionclass = this.fCons.VTDIR;
                  deviceDetails.ta0systemstatus = "AVLB";
                }
                if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ptDevice2Array[1].loc_windingGroup;
                  deviceDetails.ta0voltageratio = this.ptDevice2Array[1].ta0voltageratio;
                  deviceDetails.loc_ta0voltageratio = this.ptDevice2Array[1].loc_ta0voltageratio;
                  deviceDetails.ta0va = this.ptDevice2Array[1].ta0va;
                  deviceDetails.ta0class = this.ptDevice2Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ptDevice2Array[1].loc_ta0class;
                } else if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ptDevice1Array[1].loc_windingGroup;
                  deviceDetails.ta0voltageratio = this.ptDevice1Array[1].ta0voltageratio;
                  deviceDetails.loc_ta0voltageratio = this.ptDevice1Array[1].loc_ta0voltageratio;
                  deviceDetails.ta0va = this.ptDevice1Array[1].ta0va;
                  deviceDetails.ta0class = this.ptDevice1Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ptDevice1Array[1].loc_ta0class;
                }
                this.ptDevice0Array[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ptDevice0Array.length > 1) {
                  this.ptDevice0Array.pop();
                }
              }
            }

            if (tCheck === 'pt_1') {
              if (this.ptDevice1Array[0].ta0replaceind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'pt';
                deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                deviceDetails.ta0replaceind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0ctptphase = "Y";
                if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  deviceDetails.ta0functionclass = this.fCons.PTTFR;
                } else {
                  deviceDetails.ta0functionclass = this.fCons.VTDIR;
                  deviceDetails.ta0systemstatus = "AVLB";
                }
                if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ptDevice0Array[1].loc_windingGroup;
                  deviceDetails.ta0voltageratio = this.ptDevice0Array[1].ta0voltageratio;
                  deviceDetails.loc_ta0voltageratio = this.ptDevice0Array[1].loc_ta0voltageratio;
                  deviceDetails.ta0va = this.ptDevice0Array[1].ta0va;
                  deviceDetails.ta0class = this.ptDevice0Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ptDevice0Array[1].loc_ta0class;
                } else if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ptDevice2Array[1].loc_windingGroup;
                  deviceDetails.ta0voltageratio = this.ptDevice2Array[1].ta0voltageratio;
                  deviceDetails.loc_ta0voltageratio = this.ptDevice2Array[1].loc_ta0voltageratio;
                  deviceDetails.ta0va = this.ptDevice2Array[1].ta0va;
                  deviceDetails.ta0class = this.ptDevice2Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ptDevice2Array[1].loc_ta0class;
                }
                this.ptDevice1Array[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ptDevice1Array.length > 1) {
                  this.ptDevice1Array.pop();
                }
              }
            }

            if (tCheck === 'pt_2') {
              if (this.ptDevice2Array[0].ta0replaceind === true) {
                console.log("Show Add New Device Field...");
                var deviceDetails = new MultiAssetLocci();
                deviceDetails.devicetype = 'pt';
                deviceDetails.ta0allocationtype = this.dCons.DEV_ALLOC_MEASUREMENT_TRANSFEORMER;
                deviceDetails.ta0installind = false;
                deviceDetails.ta0replaceind = true;
                deviceDetails.ta0ctptphase = "B";
                if (this.voltageCode === this.dCons.VOL_LEVEL_LPC_LV_400V) {
                  deviceDetails.ta0functionclass = this.fCons.PTTFR;
                } else {
                  deviceDetails.ta0functionclass = this.fCons.VTDIR;
                  deviceDetails.ta0systemstatus = "AVLB";
                }
                if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ptDevice0Array[1].loc_windingGroup;
                  deviceDetails.ta0voltageratio = this.ptDevice0Array[1].ta0voltageratio;
                  deviceDetails.loc_ta0voltageratio = this.ptDevice0Array[1].loc_ta0voltageratio;
                  deviceDetails.ta0va = this.ptDevice0Array[1].ta0va;
                  deviceDetails.ta0class = this.ptDevice0Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ptDevice0Array[1].loc_ta0class;
                } else if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                  deviceDetails.loc_windingGroup = this.ptDevice1Array[1].loc_windingGroup;
                  deviceDetails.ta0voltageratio = this.ptDevice1Array[1].ta0voltageratio;
                  deviceDetails.loc_ta0voltageratio = this.ptDevice1Array[1].loc_ta0voltageratio;
                  deviceDetails.ta0va = this.ptDevice1Array[1].ta0va;
                  deviceDetails.ta0class = this.ptDevice1Array[1].ta0class;
                  deviceDetails.loc_ta0class = this.ptDevice1Array[1].loc_ta0class;
                }
                this.ptDevice2Array[1] = deviceDetails;
              } else {
                console.log("Hide Add New Device Field...");
                if (this.ptDevice2Array.length > 1) {
                  this.ptDevice2Array.pop();
                }
              }
            }

            break;
          }
        }
        break;
      }

    }

  }

  lookup() {

    console.log("winding Group Num : ");
    // 
    var queryPart = null;

    if (this.item.json.ta0installationvoltage === "03") {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0"); // CT_LV
    } else {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1"); // CT_MVHV
    }

    if (this.deviceVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
      if (this.item.json.worktype === SoTypes.ZUDN && this.item.json.ta0newvoltage > 3) {
        queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1"); // CT_MVHV
      } else if (this.item.json.worktype === SoTypes.ZUDN && this.item.json.ta0newvoltage < 4) {
        queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0"); // CT_LV
      } else {
        queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0"); // CT_LV
      }
    } else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
      if (this.item.json.worktype === SoTypes.ZUDN && this.item.json.ta0newvoltage < 4) {
        queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0"); // CT_LV
      } else if (this.item.json.worktype === SoTypes.ZUDN && this.item.json.ta0newvoltage > 3) {
        queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1"); // CT_MVHV
      } else {
        queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1"); // CT_MVHV
      }
    } else {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0"); // CT_LV
    }

    this.jsonStoreCrud
      .getSearchRecordNoLimit(Domains.WindingGroup, queryPart)
      .then(result => {
        this.windingGroupList = result;
        //console.log("items records :: " + JSON.stringify(this.windingGroupList));
      });

    if (this.item.json.ta0installationvoltage > 3 || this.item.json.ta0newvoltage > 3 || this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
      queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "2");

      this.jsonStoreCrud
        .getSearchRecordNoLimit(Domains.WindingGroup, queryPart)
        .then(result => {
          this.windingGroupPtList = result;
          //console.log("items records :: " + JSON.stringify(this.windingGroupPtList));
        });
    }
  }

  openDataValidationPage(assetDetails, multiAssetIndex) {
    //this.globel.setLoadingTimeout(2000);
    console.log("openDataValidationPage: assetDetails ..." + multiAssetIndex + " index " + JSON.stringify(assetDetails));
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("RegisterDetailsPage", {
      paramObj: this.item,
      mLocci: assetDetails,
      maIndex: multiAssetIndex
    });
  }

  /**
   * Create: Ameer - Checking input type for CT and PT 
   * Edited: Ameer (15/3/19 - Allow new char / for CT and PT)
   */
  checkAssetNumberInputType(eventVal, key, attr) {

    if (key === 'PT1' || key === 'PT2' || key === 'PT3') {
      const NUMBER_REGEXPASSETNUM = /^[a-zA-Z0-9/ -]*$/;
      let event = eventVal.target.value;
      let regEXP = new RegExp(NUMBER_REGEXPASSETNUM);
      var valueSlice;

      if (!regEXP.test(event)) {
        valueSlice = event.substr(0, event.length - 1);
        eventVal.target.value = valueSlice;
        //newValSlice = eventVal.target.value;
      } else {
        eventVal.target.value;
      }
    } else {
      const NUMBER_REGEXPASSETNUM = /^[a-zA-Z0-9/-]*$/;
      let event = eventVal.target.value;
      let regEXP = new RegExp(NUMBER_REGEXPASSETNUM);
      var valueSlice;

      if (!regEXP.test(event)) {
        valueSlice = event.substr(0, event.length - 1);
        eventVal.target.value = valueSlice;
        //newValSlice = eventVal.target.value;
      } else {
        eventVal.target.value;
      }
    }

    switch (key) {
      case 'CT1':
        attr.assetnum = eventVal.target.value;
        break;
      case 'CT2':
        attr.assetnum = eventVal.target.value;
        break;
      case 'CT3':
        attr.assetnum = eventVal.target.value;
        break;
      case 'PT1':
        attr.ta0serialnum = eventVal.target.value.toUpperCase();

        attr.assetnum = attr.ta0serialnum;
        break;
      case 'PT2':
        attr.ta0serialnum = eventVal.target.value.toUpperCase();

        attr.assetnum = attr.ta0serialnum;
        break;
      case 'PT3':
        attr.ta0serialnum = eventVal.target.value.toUpperCase();

        attr.assetnum = attr.ta0serialnum;
        break;
    }

  }

  // Ameer for checking CT current ratio
  // edited by Ameer 4/10/2018 - 4.40 p.m
  CRInputType(event, key, indexArr) {

    // const NUMBER_REGEXP = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z0-9]+$)?$/;
    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = event.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }

      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      } else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    } // End for Checking that consist of Decimal Value

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          } else {
            newValSlice = cutValueBeforeDecimal;
          }
        } else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    } // 

    switch (key) {
      case 'currentRatio':
        this.ctDevice1Array[indexArr].ta0currentratio = newValSlice;
        break;
      case 'currentRatio1':
        this.ctDevice0Array[indexArr].ta0currentratio = newValSlice;
        break;
      case 'currentRatio3':
        this.ctDevice2Array[indexArr].ta0currentratio = newValSlice;
        break;
    }
  }

  //Ameer
  // edited by Ameer 4/10/2018 - 4.40 p.m
  checkUserInputType(eventObj, keyVal, indexArr) {

    switch (keyVal) {
      case 'VA1':
        const NUMBER_REGEXPVA1 = /^[A-Za-z0-9. ]*$/;
        let newValueVA1 = eventObj.target.value;
        let regExpVA1 = new RegExp(NUMBER_REGEXPVA1);
        var newVal2;
        var newValSlice;

        if (!regExpVA1.test(newValueVA1)) {
          newVal2 = newValueVA1.substr(0, newValueVA1.length - 1);
          eventObj.target.value = newVal2;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ctDevice0Array[indexArr].ta0va = eventObj.target.value;
        break;
      case 'VA':
        const NUMBER_REGEXP = /^[A-Za-z0-9. ]*$/;

        let newValue = eventObj.target.value;
        let regExp = new RegExp(NUMBER_REGEXP);
        var newVal2;
        var newValSlice;

        if (!regExp.test(newValue)) {
          newVal2 = newValue.substr(0, newValue.length - 1);
          eventObj.target.value = newVal2;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ctDevice1Array[indexArr].ta0va = eventObj.target.value;
        break;
      case 'VA1':
        const NUMBER_REGEXP4 = /^[A-Za-z0-9. ]*$/;

        let newValue4 = eventObj.target.value;
        let regExp4 = new RegExp(NUMBER_REGEXP4);
        var newVal4;
        var newValSlice;

        if (!regExp4.test(newValue4)) {
          newVal4 = newValue4.substr(0, newValue4.length - 1);
          eventObj.target.value = newVal4;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ctDevice0Array[indexArr].ta0va = eventObj.target.value;
        break;
      case 'VA3':
        const NUMBER_REGEXP5 = /^[A-Za-z0-9. ]*$/;

        let newValue5 = eventObj.target.value;
        let regExp5 = new RegExp(NUMBER_REGEXP5);
        var newVal5;
        var newValSlice;

        if (!regExp5.test(newValue5)) {
          newVal5 = newValue5.substr(0, newValue5.length - 1);
          eventObj.target.value = newVal5;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ctDevice2Array[indexArr].ta0va = eventObj.target.value;
        break;
    }
  }

  // Ameer for input type current ratio
  // Edited by Ameer 4/10/2018 - 4.40 p.m
  PTCurrentRatio(event, key, indexArr) {

    const NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
    let newValue = event.target.value;
    let regExp = new RegExp(NUMBER_REGEXP);
    var arrayBeforeDecimal = [];
    var arrayAfterDecimal = [];
    var arraySplitBeforeDecimal = [];
    var valueAfterDecimal = '';
    var valueBeforeDecimal = '';
    var cutValueBeforeDecimal = '';
    var cutValueAfterDecimal = '';
    var splitValue;
    var newValSlice;
    var checkFlag: boolean = false;

    for (var i = 0; i < newValue.length; i++) {
      if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
        arrayBeforeDecimal.push(newValue.charAt(i));
      }
    }
    if (newValue.includes(".")) {
      splitValue = newValue.split(".");
      for (var a = 1; a < splitValue.length; a++) {
        for (var g = 0; g < splitValue[a].length; g++) {
          arrayAfterDecimal.push(splitValue[a].charAt(g));
        }
        for (var b = 0; b < arrayAfterDecimal.length; b++) {
          if (regExp.test(arrayAfterDecimal[b])) {
            valueAfterDecimal += arrayAfterDecimal[b];
            cutValueAfterDecimal = valueAfterDecimal;
          }
        }
        if (valueAfterDecimal.length > 3) {
          cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
        }
      }

      for (var c = 0; c < splitValue[0].length; c++) {
        arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
      }
      for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
        if (regExp.test(arraySplitBeforeDecimal[d])) {
          cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
        }
      }
      if (cutValueBeforeDecimal.length > 5) {
        valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
        newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
      } else {
        newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
      }
      checkFlag = true;
    } // End for Checking that consist of Decimal Value

    if (checkFlag === false) {
      for (var f = 0; f < arrayBeforeDecimal.length; f++) {
        if (newValue.length > 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          if (cutValueBeforeDecimal.length > 5) {
            newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
          } else {
            newValSlice = cutValueBeforeDecimal;
          }
        } else if (newValue.length < 5 || newValue.length === 5) {
          if (regExp.test(arrayBeforeDecimal[f])) {
            cutValueBeforeDecimal += arrayBeforeDecimal[f];
          }
          newValSlice = cutValueBeforeDecimal;
        }
      }
    } // 

    switch (key) {
      case 'currentRatio':
        this.ptDevice0Array[indexArr].ta0currentratio = newValSlice;
        break;
      case 'currentRatio2':
        this.ptDevice1Array[indexArr].ta0currentratio = newValSlice;
        break;
      case 'currentRatio3':
        this.ptDevice2Array[indexArr].ta0currentratio = newValSlice;
        break;
    }
  }

  // edited by Ameer 4/10/2018 - 4.40 p.m
  checkUserInputPT(eventObj, keyVal, indexArr) {
    // 
    switch (keyVal) {
      case 'VA':
        const NUMBER_REGEXP = /^[A-Za-z0-9 ]*$/;

        let newValue = eventObj.target.value;
        let regExp = new RegExp(NUMBER_REGEXP);
        var newVal2;

        if (!regExp.test(newValue)) {
          newVal2 = newValue.substr(0, newValue.length - 1);
          eventObj.target.value = newVal2;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ptDevice0Array[indexArr].ta0va = eventObj.target.value;
        break;
      case 'VA2':
        const NUMBER_REGEXP4 = /^[A-Za-z0-9 ]*$/;

        let newValue4 = eventObj.target.value;
        let regExp4 = new RegExp(NUMBER_REGEXP4);
        var newVal4;
        var newValSlice;

        if (!regExp4.test(newValue4)) {
          newVal4 = newValue4.substr(0, newValue4.length - 1);
          eventObj.target.value = newVal4;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ptDevice1Array[indexArr].ta0va = eventObj.target.value;
        break;
      case 'VA3':
        const NUMBER_REGEXP5 = /^[A-Za-z0-9 ]*$/;

        let newValue5 = eventObj.target.value;
        let regExp5 = new RegExp(NUMBER_REGEXP5);
        var newVal5;
        var newValSlice;

        if (!regExp5.test(newValue5)) {
          newVal5 = newValue5.substr(0, newValue5.length - 1);
          eventObj.target.value = newVal5;
          newValSlice = eventObj.target.value;
        }
        else {
          newValSlice = eventObj.target.value;
        }
        this.ptDevice2Array[indexArr].ta0va = eventObj.target.value;
        break;
    }
  }

  goBack() {
    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    // newRootNav.push("ServiceExecutionPage", this.itemOri);
    this.navCtrl.pop();
  }

  barcodeScan(deviceDetailsArray, index, deviceType, deviceCategory, deviceControl) {
    this.options = {
      prompt: "Scan your barcode "
    }

    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        console.log("Response: " + JSON.stringify(barcodeData));
        console.log("Bar Code: " + barcodeData.text.trim());

        if (barcodeData.cancelled) {
          // Do nothing, go back to previous page.
          return false;
        } else {
          // Variables
          var deviceIndex;
          var deviceInstalled = JSON.parse(JSON.stringify(this.item.json.listDevice));

          /**
           * Reason   : Search & Remove Existing Scan Device
           * Created  : Alif (09-01-2019)
           */
          if (typeof (deviceDetailsArray[index].ta0serialnum) !== "undefined" && deviceDetailsArray[index].ta0serialnum !== null && deviceDetailsArray[index].ta0serialnum !== "") {
            // Find the index first
            deviceIndex = deviceInstalled.findIndex((item) => {
              return (item.assetnum === deviceDetailsArray[index].assetnum || item.ta0serialnum === deviceDetailsArray[index].ta0serialnum);
            });
            if (deviceIndex !== -1) {
              // Remove the device from the list
              this.item.json.listDevice.splice(deviceIndex, 1);
            }
          }

          /**
           * Description: Toast message limit serial number to 18 character.
           * Created    : Alif (11.09.2019)
           */
          var serial = barcodeData.text.trim();
          var length = serial.length;

          // if (length < 18) {
          if (deviceControl === "control") {
            deviceDetailsArray[index].ta0controllingdevice = serial;
          } else {
            deviceDetailsArray[index].ta0serialnum = serial;
            deviceDetailsArray[index].assetnum = serial;
          }
          /**
           * Reason   : Check Asset Details
           * Created  : Alif (09-01-2019)
           */
          if (deviceType === "meter" || deviceType === "modem" || deviceType === "sim" ||
            (((deviceType === 'ct') && this.item.json.ta0installationvoltage <= this.dCons.VOL_LEVEL_LPC_LV_400V) ||
              ((deviceType === 'ct') && this.item.json.worktype === this.soTypes.ZUDN && this.item.json.ta0newvoltage <= this.dCons.VOL_LEVEL_LPC_LV_400V))) {
            this.checkAssetsAvailability(deviceDetailsArray, index, deviceType, deviceCategory);
          }

          /**
           * Reason   : Add into installed device list.
           * Created  : Alif (09-01-2019)
           */
          if (typeof (deviceDetailsArray[index].ta0serialnum) !== "undefined" || deviceDetailsArray[index].ta0serialnum !== null || deviceDetailsArray[index].ta0serialnum !== '') {
            this.deviceDetails = {};
            this.deviceDetails.assetnum = deviceDetailsArray[index].assetnum;
            this.deviceDetails.ta0serialnum = deviceDetailsArray[index].ta0serialnum;
            this.item.json.listDevice.push(this.deviceDetails);
          }
          // } else {
          //   this.gf.displayToast("Serial No. : " + serial + " cannot be more than 18 character!");
          // }
        }

      }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
  }

  /**
   * Get list of devices from server.
   * @param siteid
   * @param allocationType
   */
  searchDevice(deviceDetailsArray, index, siteidVal, allocationTypeVal, deviceType, deviceCategory) {

    var item = [];
    // checking device type
    if (deviceType === "meter" && deviceCategory === this.dCons.DEVICE_TYPE_NAME_MAIN) {
      // display all main meter [90, 91, 94, 96]
      item = [
        { $equal: [{ ta0functionclass: this.fCons.NMTR }, { siteid: siteidVal }] },
        { $equal: [{ ta0functionclass: this.fCons.RMTR }, { siteid: siteidVal }] },
        { $equal: [{ ta0functionclass: this.fCons.SMTR }, { siteid: siteidVal }] },
        { $equal: [{ ta0functionclass: this.fCons.SMTR_CM }, { siteid: siteidVal }] }];
    }
    else if (deviceType === "meter" && deviceCategory === this.dCons.DEVICE_TYPE_NAME_CHECK) {
      // checking allocationType
      if (siteidVal != null && allocationTypeVal != null) {
        // Pairing Meter Device
        item = [
          { $equal: [{ ta0functionclass: this.fCons.NMTR }, { siteid: siteidVal }] },
          { $equal: [{ ta0functionclass: this.fCons.RMTR }, { siteid: siteidVal }] },
          { $equal: [{ ta0functionclass: this.fCons.SMTR }, { siteid: siteidVal }] },
          { $equal: [{ ta0functionclass: this.fCons.SMTR_CM }, { siteid: siteidVal }] }];
      }
    }
    else if (deviceType === this.dCons.DEVICE_TYPE_NAME_MODEM) {
      // display modem device
      item = [{ $equal: [{ ta0functionclass: this.fCons.MODEM }, { siteid: siteidVal }] }];
    }
    else if (deviceType === this.dCons.DEVICE_TYPE_NAME_SIMCARD) {
      // display simcard device
      item = [{ $equal: [{ ta0functionclass: this.fCons.SIMCRD }, { siteid: siteidVal }] }];
    }
    else if (deviceType === this.dCons.DEVICE_TYPE_NAME_CT) {
      // display ct device
      item = [
        { $equal: [{ ta0functionclass: this.fCons.CTTFR }, { siteid: siteidVal }] },
        { $equal: [{ ta0functionclass: this.fCons.CTDIR }, { siteid: siteidVal }] },
      ];
    }
    else if (deviceType === this.dCons.DEVICE_TYPE_NAME_PT) {
      item = [
        { $equal: [{ ta0functionclass: this.fCons.PTTFR }, { siteid: siteidVal }] },
        { $equal: [{ ta0functionclass: this.fCons.VTDIR }, { siteid: siteidVal }] },
      ];
    }

    // retrieve data using query.
    this.jsonStoreCrud
      .getSearchRecordNoLimit_Device(Domains.AssetDetails, item)
      .then(result => {

        this.deviceList = result;
      });

    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots',
    });

    loading.present();
    this.gf.loadingTimer(loading);
    setTimeout(() => {
      loading.dismiss();
      if (this.deviceList.length > 0) {

        var optData = [];
        // Checking installed device
        if (typeof (this.item.json.listDevice) !== "undefined") {

          var devices = JSON.parse(JSON.stringify(this.item.json.listDevice));
          var temporary = [];
          var deviceInstalled = [];
          var check = [];
          var deviceIndex;
          var collectionIndex = [];

          for (var i = 0; i < devices.length; i++) {
            check = this.deviceList.filter((item) => {
              return item.json.assetnum === devices[i].assetnum;
            });
            for (var m = 0; m < check.length; m++) {
              deviceInstalled.push(check[m]);
            }
          }
          // Find the index first
          for (var i = 0; i < deviceInstalled.length; i++) {
            deviceIndex = this.deviceList.findIndex((item) => {
              return item.json.assetnum === deviceInstalled[i].json.assetnum;
            });
            if (deviceIndex !== -1) {
              temporary.push(this.deviceList[deviceIndex]);
              // Remove the device from the list
              this.deviceList.splice(deviceIndex, 1);
            }
          }
        }

        // Now we add the radio buttons
        for (let i = 0; i < this.deviceList.length; i++) {
          /**
           * Reason   : Remove device from the list if status "DFLT01".
           * Created  : 21/02/2019
           */
          // Checking if meter DFLT01
          if (this.deviceList[i].json.ta0registergroup !== "DFLT01") {
            optData.push({
              name: 'options',
              value: [
                this.deviceList[i].json.assetnum,
                this.deviceList[i].json.serialnum,
                this.deviceList[i].json.ta0allocationtype,
                this.deviceList[i].json.ta0registergroup
              ],
              'label': this.deviceList[i].json.serialnum,
              type: 'radio'
            });
          }
        }

        // Object with options used to create the alert
        var options = {
          title: 'Devices',
          inputs: optData,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Ok',
              handler: data => {

                if (data !== "undefined") {
                  // If changing device using search device button.
                  if (typeof (deviceDetailsArray[index].ta0serialnum) !== "undefined" && deviceDetailsArray[index].ta0serialnum !== "" && deviceDetailsArray[index].ta0serialnum !== null) {
                    // Removing device inside the listing installed device.
                    var devices = JSON.parse(JSON.stringify(this.item.json.listDevice));
                    var removeDevice = devices.findIndex((item) => {
                      return item.ta0serialnum === deviceDetailsArray[index].ta0serialnum;
                    });

                    if (typeof (removeDevice) !== "undefined" || removeDevice !== null || removeDevice !== "") {
                      if (removeDevice !== -1) {
                        // Remove the device from the list
                        devices.splice(removeDevice, 1);
                        this.item.json.listDevice.splice(removeDevice, 1);
                      }
                    }
                  }

                  console.log("Selected Value: " + data);
                  deviceDetailsArray[index].assetnum = data[0];
                  deviceDetailsArray[index].ta0serialnum = data[1];
                  deviceDetailsArray[index].ta0registergroup = data[3];
                  // TA0SERIALNUM

                  /**
                   * Reason   : Adding selected device into the list
                   * Created  : Alif
                   * Date     : 05-12-2018
                   */
                  if (typeof (deviceDetailsArray[index].ta0serialnum) !== "undefined" || deviceDetailsArray[index].ta0serialnum !== '' || deviceDetailsArray[index].ta0serialnum !== null) {
                    this.deviceDetails = {};
                    this.deviceDetails.assetnum = data[0];
                    this.deviceDetails.ta0serialnum = data[1];
                    this.item.json.listDevice.push(this.deviceDetails);
                  }
                  if (deviceType === "meter" && deviceCategory === this.dCons.DEVICE_TYPE_NAME_MAIN) {
                    this.pairDevice = data[1];
                  }
                  if (this.item.json.worktype !== SoTypes.ZISR) {
                    this.checkAssetsAvailability(deviceDetailsArray, index, deviceType, deviceCategory);
                  }
                }
                else {
                  this.gf.warningAlert("Error", "No device is selected.", "Close");
                }
              }
            }
          ]
        };

        // Create the alert with the options
        let alert = this.alertCtrl.create(options);
        alert.present();
      } else {
        this.gf.warningAlert("Error", "No device found. Service Order site is " + siteidVal + ".", "Close");
      }
    }, 1000);

  }

  checkTickCt() {

  }

  assignCheckMeterAllocationType() {

    // Assiging Allocation Type for Check Meter
    if (typeof (this.mainDeviceArray[1]) !== 'undefined') { // Checking new main meter allocation type
      if (this.mainDeviceArray[1].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
        }
      } else if (this.mainDeviceArray[1].ta0allocationtype === this.dCons.DEV_ALLOC_FEEDER_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
        }
      } else if (this.mainDeviceArray[1].ta0allocationtype === this.dCons.DEV_ALLOC_SUB_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
        }
      } else if (this.mainDeviceArray[1].ta0allocationtype == this.dCons.DEV_ALLOC_SUB_FEEDER_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
        }
      }
    } else {
      if (this.mainDeviceArray[0].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_METER;
        }
      } else if (this.mainDeviceArray[0].ta0allocationtype === this.dCons.DEV_ALLOC_FEEDER_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_FEEDER_METER;
        }
      } else if (this.mainDeviceArray[0].ta0allocationtype === this.dCons.DEV_ALLOC_SUB_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_METER;
        }
      } else if (this.mainDeviceArray[0].ta0allocationtype == this.dCons.DEV_ALLOC_SUB_FEEDER_METER) {
        if (typeof (this.checkDeviceArray[1]) !== "undefined") {
          this.checkDeviceArray[1].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
        } else {
          this.checkDeviceArray[0].ta0allocationtype = this.dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER;
        }
      }
    }
  }

  checkingAssetnumArrayList(assetnum, category, index, type, transformer) {
    console.log('Access checkingAssetnumArrayList');
    this.warning = false;

    if (typeof (this.item.json.listDevice) !== "undefined" || this.item.json.listDevice !== "") {

      var devices = JSON.parse(JSON.stringify(this.item.json.listDevice));
      var duplicate = devices.filter((item) => { return item.assetnum === assetnum });

      if (duplicate.length > 0) {
        if (duplicate[0].loc_new === false) {
          var message = "<p style='text-align: center;'>Device " + duplicate[0].assetnum + " already use in " + duplicate[0].description + ".</p>";
          this.gf.warningAlert("Device Serial Number", message, "Ok");
          this.warning = true;
        }
      } else {
        if (category === "meter") {
          var duplicateMeter;
          var messageMeter;
          if (type === "main") {
            duplicateMeter = this.checkDeviceArray.filter((item) => { return item.assetnum === assetnum });
            messageMeter = "<p style='text-align:center;'>Device is already use at Check Meter.</p>";
          } else {
            duplicateMeter = this.mainDeviceArray.filter((item) => { return item.assetnum === assetnum });
            messageMeter = "<p style='text-align:center;'>Device is already use at Main Meter.</p>";
          }

          if (duplicateMeter.length > 0) {
            this.gf.warningAlert("Device Serial Number", message, "Ok");
            this.warning = true;
          }
        }

        if (category === "modem") {
          console.log('category : modem');
          var duplicateModem;
          var messageModem;
          if (type === "main") {
            duplicateModem = this.checkModemArray.filter((item) => { return item.assetnum === assetnum });
            messageModem = "<p style='text-align:center;'>Device is already use at Check Modem.</p>";
          }
          else {
            duplicateModem = this.mainModemArray.filter((item) => { return item.assetnum === assetnum });
            messageModem = "<p style='text-align:center;'>Device is already use at Main Modem.</p>";
          }
          if (duplicateModem.length > 0) {
            this.gf.warningAlert("Device Serial Number", message, "Ok");
            this.warning = true;
          }
        }

        if (category === "sim") {
          var duplicateSim;
          var messageSim;

          if (type === "main") {
            duplicate = this.checkSimcardArray.filter((item) => { return item.assetnum === assetnum });
            message = "<p style='text-align:center;'>Device is already use at Check Simcard.</p>";
          }
          else {
            duplicate = this.mainSimcardArray.filter((item) => { return item.assetnum === assetnum });
            message = "<p style='text-align:center;'>Device is already use at Main Simcard.</p>";
          }
          if (duplicate.length > 0) {
            this.gf.warningAlert("Device Serial Number", message, "Ok");
            this.warning = true;
          }
        }

        if (category === "ct_0") {
          var message1 = "<p style='text-align:center;'>Device is already use at Current Transformer 2.</p>";
          var message2 = "<p style='text-align:center;'>Device is already use at Current Transformer 3.</p>";
          var duplicate1 = this.ctDevice1Array.filter((item) => { return item.assetnum === assetnum });
          var duplicate2 = this.ctDevice2Array.filter((item) => { return item.assetnum === assetnum });

          if (duplicate1.length > 0) {
            this.gf.warningAlert("Device Serial Number", message1, "Ok");
            this.warning = true;
          }
          else if (duplicate2.length > 0) {
            this.gf.warningAlert("Device Serial Number", message2, "Ok");
            this.warning = true;
          }
        }
        else if (category === "ct_1") {
          var message1 = "<p style='text-align:center;'>Device is already use at Current Transfomer 1.</p>";
          var message2 = "<p style='text-align:center;'>Device is already use at Current Transfomer 3.</p>";

          var duplicate1 = this.ctDevice0Array.filter((item) => { return item.assetnum === assetnum });
          var duplicate2 = this.ctDevice2Array.filter((item) => { return item.assetnum === assetnum });

          if (duplicate1.length > 0) {
            this.gf.warningAlert("Device Serial Number", message1, "Ok");
            this.warning = true;
          }
          else if (duplicate2.length > 0) {
            this.gf.warningAlert("Device Serial Number", message2, "Ok");
            this.warning = true;
          }
        }
        else if (category === "ct_2") {
          var message1 = "<p style='text-align:center;'>Device is already use at Current Transformer 1.</p>";
          var message2 = "<p style='text-align:center;'>Device is already use at Current Transformer 2.</p>";

          var duplicate1 = this.ctDevice0Array.filter((item) => { return item.assetnum === assetnum });
          var duplicate2 = this.ctDevice1Array.filter((item) => { return item.assetnum === assetnum });

          if (duplicate1.length > 0) {
            this.gf.warningAlert("Device Serial Number", message1, "Ok");
            this.warning = true;
          }
          else if (duplicate2.length > 0) {
            this.gf.warningAlert("Device Serial Number", message2, "Ok");
            this.warning = true;
          }
        }
        else if (category === "pt_0") {

          var message1 = "<p style='text-align:center;'>Device is already use at Voltage Transformer 1.</p>";
          var message2 = "<p style='text-align:center;'>Device is already use at Voltage Transformer 2.</p>";
          var duplicate1 = this.ptDevice1Array.filter((item) => { return item.assetnum === assetnum });
          var duplicate2 = this.ptDevice2Array.filter((item) => { return item.assetnum === assetnum });

          if (duplicate1.length > 0) {
            this.gf.warningAlert("Device Serial Number", message1, "Ok");
            this.warning = true;
          }
          else if (duplicate2.length > 0) {
            this.gf.warningAlert("Device Serial Number", message2, "Ok");
            this.warning = true;
          }
        }
        else if (category === "pt_1") {

          var message1 = "<p style='text-align:center;'>Device is already use at Voltage Transformer 1.</p>";
          var message2 = "<p style='text-align:center;'>Device is already use at Voltage Transformer 3.</p>";
          var duplicate1 = this.ptDevice0Array.filter((item) => { return item.assetnum === assetnum });
          var duplicate2 = this.ptDevice2Array.filter((item) => { return item.assetnum === assetnum });

          if (duplicate1.length > 0) {
            this.gf.warningAlert("Device Serial Number", message1, "Ok");
            this.warning = true;
          }
          else if (duplicate2.length > 0) {
            this.gf.warningAlert("Device Serial Number", message2, "Ok");
            this.warning = true;
          }
        }
        else if (category === "pt_2") {

          var message1 = "<p style='text-align:center;'>Device is already use at Voltage Transformer 1.</p>";
          var message2 = "<p style='text-align:center;'>Device is already use at Voltage Transformer 2.</p>";
          var duplicate1 = this.ptDevice0Array.filter((item) => { return item.assetnum === assetnum });
          var duplicate2 = this.ptDevice1Array.filter((item) => { return item.assetnum === assetnum });

          if (duplicate1.length > 0) {
            this.gf.warningAlert("Device Serial Number", message1, "Ok");
            this.warning = true;
          }
          else if (duplicate2.length > 0) {
            this.gf.warningAlert("Device Serial Number", message2, "Ok");
            this.warning = true;
          }
        }
        else {
          this.warning = false
        }
      }
    }

    // Remove Space if available
    let serial: any;
    if (category === "ct_0") {
      serial = this.ctDevice0Array[index].ta0serialnum;
      this.ctDevice0Array[index].ta0serialnum = serial.replace(/\s/g, '');
    }
    if (category === "ct_1") {
      serial = this.ctDevice1Array[index].ta0serialnum;
      this.ctDevice1Array[index].ta0serialnum = serial.replace(/\s/g, '');
    }
    if (category === "ct_2") {
      serial = this.ctDevice2Array[index].ta0serialnum;
      this.ctDevice2Array[index].ta0serialnum = serial.replace(/\s/g, '');
    }
    if (this.voltageCode !== DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
      if (category === "pt_0") {
        serial = this.ptDevice0Array[index].ta0serialnum;
        this.ptDevice0Array[index].ta0serialnum = serial.replace(/\s/g, '');
      }
      if (category === "pt_1") {
        serial = this.ptDevice1Array[index].ta0serialnum;
        this.ptDevice1Array[index].ta0serialnum = serial.replace(/\s/g, '');
      }
      if (category === "pt_2") {
        serial = this.ptDevice2Array[index].ta0serialnum;
        this.ptDevice2Array[index].ta0serialnum = serial.replace(/\s/g, '');
      }
    }

    if (this.warning) {
      if (category === "meter" && type === "main") {
        this.mainDeviceArray[index].assetnum = null;
      }
      if (category === "modem" && type === "main") {
        this.mainModemArray[index].assetnum = null;
      }
      if (category === "sim" && type === "main") {
        this.mainSimcardArray[index].assetnum = null;
      }
      if (category === "meter" && type === "check") {
        this.checkDeviceArray[index].assetnum = null;
      }
      if (category === "modem" && type === "check") {
        this.checkModemArray[index].assetnum = null;
      }
      if (category === "sim" && type === "check") {
        this.checkSimcardArray[index].assetnum = null;
      }
      if (category === "ct_0") {
        this.ctDevice0Array[index].assetnum = null;
        // Remove Space if available
        this.ctDevice0Array[index].ta0serialnum.replace(/\s/g, '');
      }
      if (category === "ct_1") {
        this.ctDevice1Array[index].assetnum = null;
        // Remove Space if available
        this.ctDevice1Array[index].ta0serialnum.replace(/\s/g, '');
      }
      if (category === "ct_2") {
        this.ctDevice2Array[index].assetnum = null;
        // Remove Space if available
        this.ctDevice2Array[index].ta0serialnum.replace(/\s/g, '');
      }
      if (this.voltageCode !== DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        if (category === "pt_0") {
          this.ptDevice0Array[index].assetnum = null;
          // Remove Space if available
          this.ptDevice0Array[index].ta0serialnum.replace(/\s/g, '');
        }
        if (category === "pt_1") {
          this.ptDevice1Array[index].assetnum = null;
          // Remove Space if available
          this.ptDevice1Array[index].ta0serialnum.replace(/\s/g, '');
        }
        if (category === "pt_2") {
          this.ptDevice2Array[index].assetnum = null;
          // Remove Space if available
          this.ptDevice2Array[index].ta0serialnum.replace(/\s/g, '');
        }
      }
    }

    return this.warning;
  }

  selectWindingGroup(value, type) {
    var wGroup = null;
    var s_type = this.item.json.worktype;

    switch (s_type) {
      case SoTypes.ZIST:
      case SoTypes.ZRMV: {

        if (type === "ct_0") {
          if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            wGroup = this.ctDevice0Array[0].loc_windingGroup;
          }

          if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            this.ctDevice1Array[0].loc_windingGroup = wGroup;
          }

          if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            this.ctDevice2Array[0].loc_windingGroup = wGroup;
          }
        } else if (type === "ct_1") {
          if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            wGroup = this.ctDevice1Array[0].loc_windingGroup;
          }

          if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            this.ctDevice0Array[0].loc_windingGroup = wGroup;
          }

          if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            this.ctDevice2Array[0].loc_windingGroup = wGroup;
          }
        } else if (type === "ct_2") {
          if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            wGroup = this.ctDevice2Array[0].loc_windingGroup;
          }

          if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            this.ctDevice0Array[0].loc_windingGroup = wGroup;
          }

          if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            this.ctDevice1Array[0].loc_windingGroup = wGroup;
          }
        } else if (type === "pt_0") {
          if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            wGroup = this.ptDevice0Array[0].loc_windingGroup;
          }

          if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            this.ptDevice1Array[0].loc_windingGroup = wGroup;
          }

          if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            this.ptDevice2Array[0].loc_windingGroup = wGroup;
          }
        } else if (type === "pt_1") {
          if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            wGroup = this.ptDevice1Array[0].loc_windingGroup;
          }

          if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            this.ptDevice0Array[0].loc_windingGroup = wGroup;
          }

          if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            this.ptDevice2Array[0].loc_windingGroup = wGroup;
          }
        } else if (type === "pt_2") {
          if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            wGroup = this.ptDevice2Array[0].loc_windingGroup;
          }

          if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            this.ptDevice0Array[0].loc_windingGroup = wGroup;
          }

          if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            this.ptDevice1Array[0].loc_windingGroup = wGroup;
          }
        }

        break;
      }

      case SoTypes.ZINL:
      case SoTypes.ZRPC:
      case SoTypes.ZSRO: {

        if (type === "ct_0") {
          if (typeof (this.ctDevice0Array[1]) !== "undefined") {
            wGroup = this.ctDevice0Array[1].loc_windingGroup;
          }

          if (typeof (this.ctDevice1Array[1]) !== "undefined") {
            this.ctDevice1Array[1].loc_windingGroup = wGroup;
          }

          if (typeof (this.ctDevice2Array[1]) !== "undefined") {
            this.ctDevice2Array[1].loc_windingGroup = wGroup;
          }
        } else if (type === "ct_1") {
          if (typeof (this.ctDevice1Array[1]) !== "undefined") {
            wGroup = this.ctDevice1Array[1].loc_windingGroup;
          }

          if (typeof (this.ctDevice0Array[1]) !== "undefined") {
            this.ctDevice0Array[1].loc_windingGroup = wGroup;
          }

          if (typeof (this.ctDevice2Array[1]) !== "undefined") {
            this.ctDevice2Array[1].loc_windingGroup = wGroup;
          }
        } else if (type === "ct_2") {
          if (typeof (this.ctDevice2Array[1]) !== "undefined") {
            wGroup = this.ctDevice2Array[1].loc_windingGroup;
          }

          if (typeof (this.ctDevice0Array[1]) !== "undefined") {
            this.ctDevice0Array[1].loc_windingGroup = wGroup;
          }

          if (typeof (this.ctDevice1Array[1]) !== "undefined") {
            this.ctDevice1Array[1].loc_windingGroup = wGroup;
          }
        } else if (type === "pt_0") {
          if (typeof (this.ptDevice0Array[1]) !== "undefined") {
            wGroup = this.ptDevice0Array[1].loc_windingGroup;
          }

          if (typeof (this.ptDevice1Array[1]) !== "undefined") {
            this.ptDevice1Array[1].loc_windingGroup = wGroup;
          }

          if (typeof (this.ptDevice2Array[1]) !== "undefined") {
            this.ptDevice2Array[1].loc_windingGroup = wGroup;
          }
        } else if (type === "pt_1") {
          if (typeof (this.ptDevice1Array[1]) !== "undefined") {
            wGroup = this.ptDevice1Array[1].loc_windingGroup;
          }

          if (typeof (this.ptDevice0Array[1]) !== "undefined") {
            this.ptDevice0Array[1].loc_windingGroup = wGroup;
          }

          if (typeof (this.ptDevice2Array[1]) !== "undefined") {
            this.ptDevice2Array[1].loc_windingGroup = wGroup;
          }
        } else if (type === "pt_2") {
          if (typeof (this.ptDevice2Array[1]) !== "undefined") {
            wGroup = this.ptDevice2Array[1].loc_windingGroup;
          }

          if (typeof (this.ptDevice0Array[1]) !== "undefined") {
            this.ptDevice0Array[1].loc_windingGroup = wGroup;
          }

          if (typeof (this.ptDevice1Array[1]) !== "undefined") {
            this.ptDevice1Array[1].loc_windingGroup = wGroup;
          }
        }

        break;
      }

      case SoTypes.ZUDN: {
        var old_voltage = this.item.json.ta0installationvoltage;
        var new_voltage = this.item.json.ta0newvoltage;

        // OPC Section
        if (old_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
          // OPC -> LV
          if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
            if (type === "ct_0") {
              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                wGroup = this.ctDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_1") {
              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                wGroup = this.ctDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_2") {
              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                wGroup = this.ctDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }
            }
          }

          // OPC -> MVHV
          if (new_voltage >= DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV) {
            if (type === "ct_0") {
              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                wGroup = this.ctDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_1") {
              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                wGroup = this.ctDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_2") {
              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                wGroup = this.ctDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_0") {
              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                wGroup = this.ptDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                this.ptDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                this.ptDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_1") {
              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                wGroup = this.ptDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                this.ptDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                this.ptDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_2") {
              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                wGroup = this.ptDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                this.ptDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                this.ptDevice1Array[1].loc_windingGroup = wGroup;
              }
            }
          }
        }

        // LV Section
        if (old_voltage == DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
          // LV -> LV
          if (old_voltage === new_voltage) {
            if (type === "ct_0") {
              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                wGroup = this.ctDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_1") {
              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                wGroup = this.ctDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_2") {
              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                wGroup = this.ctDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }
            }
          }
          // LV -> MVHV
          if (old_voltage < new_voltage) {
            if (type === "ct_0") {
              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                wGroup = this.ctDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_1") {
              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                wGroup = this.ctDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_2") {
              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                wGroup = this.ctDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_0") {
              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                wGroup = this.ptDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                this.ptDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                this.ptDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_1") {
              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                wGroup = this.ptDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                this.ptDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                this.ptDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_2") {
              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                wGroup = this.ptDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                this.ptDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                this.ptDevice1Array[1].loc_windingGroup = wGroup;
              }
            }
          }
          // LV -> OPC
          if (old_voltage > new_voltage) {

          }
        }

        // MVHV Section
        if (old_voltage >= DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV) {
          // MVHV -> LV
          if (old_voltage < DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV) {
            if (type === "ct_0") {
              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                wGroup = this.ctDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_1") {
              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                wGroup = this.ctDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_2") {
              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                wGroup = this.ctDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }
            }
          }

          // MVHV -> MVHV
          if (old_voltage >= DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV && old_voltage <= DeviceConstants.VOL_LEVEL_LPC_MVHV_500kV) {
            if (type === "ct_0") {
              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                wGroup = this.ctDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_1") {
              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                wGroup = this.ctDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                this.ctDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "ct_2") {
              if (typeof (this.ctDevice2Array[1]) !== "undefined") {
                wGroup = this.ctDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ctDevice0Array[1]) !== "undefined") {
                this.ctDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ctDevice1Array[1]) !== "undefined") {
                this.ctDevice1Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_0") {
              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                wGroup = this.ptDevice0Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                this.ptDevice1Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                this.ptDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_1") {
              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                wGroup = this.ptDevice1Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                this.ptDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                this.ptDevice2Array[1].loc_windingGroup = wGroup;
              }
            } else if (type === "pt_2") {
              if (typeof (this.ptDevice2Array[1]) !== "undefined") {
                wGroup = this.ptDevice2Array[1].loc_windingGroup;
              }

              if (typeof (this.ptDevice0Array[1]) !== "undefined") {
                this.ptDevice0Array[1].loc_windingGroup = wGroup;
              }

              if (typeof (this.ptDevice1Array[1]) !== "undefined") {
                this.ptDevice1Array[1].loc_windingGroup = wGroup;
              }
            }
          }

          // MVHV -> OPC
          if (old_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) {

          }
        }
        break;
      }
    }
    this.convertStringToArray(wGroup, type);
  }

  /**
   * 
   * @param device 
   * @param type 
   */
  public convertTa0classBcrmMapping(ta0windingclass) {
    if (ta0windingclass === "0001") {
      return "0.2";
    } else if (ta0windingclass === "0002") {
      return "0.5";
    } else if (ta0windingclass === "0003") {
      return "5";
    } else if (ta0windingclass === "0004") {
      return "10";
    } else if (ta0windingclass === "0005") {
      return "5";
    } else if (ta0windingclass === "0006") {
      return "1";
    } else {
      return "";
    }
  }

  /**
   * Reason   : Auto populate value for ta0currentratio(ct), ta0voltageratio(pt), ta0class, ta0systemstatus..
   * Created  : Alif (22-01-2019)
   * Edited   : Alif (22-02-2019)
   */
  autoPopulateValueCtPt(device, type) {
    console.log("auto populate value ta0currentratio, ta0voltageratior, ta0class..");

    if ((typeof (device.ta0registers[0].ta0windingclass) !== "undefined" && device.ta0registers[0].ta0windingclass !== null && device.ta0registers[0].ta0windingclass !== "") &&
      (typeof (device.ta0registers[1].ta0windingclass) !== "undefined" && device.ta0registers[1].ta0windingclass !== null && device.ta0registers[1].ta0windingclass !== "") &&
      (typeof (device.ta0class) !== 'undefined') && device.ta0class !== null && device.ta0class !== "") {

      // Class
      if (device.ta0registers[0].hasOwnProperty("ta0windingclass") && device.ta0registers[1].hasOwnProperty("ta0windingclass")) {
        device.ta0class = device.ta0registers[0].ta0windingclass;

        if (device.ta0registers[0].ta0windingclass === "0001") {
          device.loc_ta0class = "0.2";
        } else if (device.ta0registers[0].ta0windingclass === "0002") {
          device.loc_ta0class = "0.5";
        } else if (device.ta0registers[0].ta0windingclass === "0003") {
          device.loc_ta0class = "5";
        } else if (device.ta0registers[0].ta0windingclass === "0004") {
          device.loc_ta0class = "10";
        } else if (device.ta0registers[0].ta0windingclass === "0005") {
          device.loc_ta0class = "5";
        } else if (device.ta0registers[0].ta0windingclass === "0006") {
          device.loc_ta0class = "1";
        } else {
          device.loc_ta0class = "";
        }
      } else if (device.hasOwnProperty("ta0class")) {
        if (device.ta0class === "0001") {
          device.loc_ta0class = "0.2";
        } else if (device.ta0class === "0002") {
          device.loc_ta0class = "0.5";
        } else if (device.ta0class === "0003") {
          device.loc_ta0class = "5";
        } else if (device.ta0class === "0004") {
          device.loc_ta0class = "10";
        } else if (device.ta0class === "0005") {
          device.loc_ta0class = "5";
        } else if (device.ta0class === "0006") {
          device.loc_ta0class = "1";
        } else {
          device.loc_ta0class = "";
        }
      }

      if (type === "ct_0" || type === "ct_1" || type === "ct_2") {
        // Current Ratio
        if (device.ta0registers[0].hasOwnProperty("ta0transformercurrent") && device.ta0registers[1].hasOwnProperty("ta0transformercurrent")) {
          var cr = parseFloat(device.ta0registers[1].ta0transformercurrent) / parseFloat(device.ta0registers[0].ta0transformercurrent);
          var loc_cr = device.ta0registers[1].ta0transformercurrent + "/" + device.ta0registers[0].ta0transformercurrent + " A";

          if (!isNaN(cr)) {
            device.ta0currentratio = cr;
            device.loc_ta0currentratio = loc_cr;
          }
        } else if (device.hasOwnProperty("ta0currentratio")) {
          if (typeof (device.ta0registers[0].ta0windinggroup) !== "undefined") {
            var stringValue = (device.ta0registers[0].ta0windinggroup).toString();
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

          device.ta0currentratio = CR;
          device.loc_ta0currentratio = stringFull.toString() + " A";
        }
      } else if (type === "pt_0" || type === "pt_1" || type === "pt_2") {
        // Voltage Ratio
        if (device.ta0registers[0].hasOwnProperty("ta0transformervoltage") && device.ta0registers[1].hasOwnProperty("ta0transformervoltage")) {
          var vr = parseFloat(device.ta0registers[1].ta0transformervoltage) / parseFloat(device.ta0registers[0].ta0transformervoltage);
          var loc_vr = device.ta0registers[1].ta0transformervoltage + "/" + device.ta0registers[0].ta0transformervoltage + " A";

          if (!isNaN(vr)) {
            device.ta0voltageratio = vr.toFixed(2);
            device.loc_ta0voltageratio = loc_vr;
          }
        } else if (device.hasOwnProperty("ta0currentratio")) {
          if (typeof (device.ta0registers[0].ta0windinggroup) !== "undefined") {
            var stringValue = (device.ta0registers[0].ta0windinggroup).toString();
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

          device.loc_ta0voltageratio = device.loc_ta0currentratio = (double * 1000) + "/110 A";
          device.ta0voltageratio = device.ta0currentratio = crPT;
        }
      }
    }
  }

  /** 
    * @param stringValue 
    * @param type   
    *  Created : Ameer
    * Date : 6/12/2018
    * Purpose : for auto populate Current Ratio/ Voltage Ratio with Class
    * Edited : 7/12/2018 (Ameer)
   */
  convertStringToArray(stringValue, type) {

    var arrayConvert = [];
    var arrayNew = [];
    var ctArray = [];
    var CR = '';
    var VA = '';
    var Class = '';
    var loc_Class = '';
    var ptArray = [];
    var crPT = '';
    for (var i = 0; i < stringValue.length; i++) {
      arrayConvert.push(stringValue.charAt(i));
    }
    arrayNew = arrayConvert.splice(1, 8);
    ctArray = arrayNew.splice(0, 5);
    ptArray = ctArray;

    //Assign array to string for CT
    if (type === 'ct_0' || type === 'ct_1' || type === 'ct_2') {
      ctArray.splice(4, 0, "/");
      for (var j = 0; j < ctArray.length; j++) {
        CR += ctArray[j];
        var double;
        double = parseFloat(CR);
      }
      this.loc_currentRatio = CR;
      CR = ((double / Number(ctArray[5])).toString());
    }
    //Assign array to string for PT
    else if (type === 'pt_0' || type === 'pt_1' || type === 'pt_2') {
      for (var k = 0; k < ptArray.length; k++) {
        crPT += ptArray[k];
        var double;
        double = parseFloat(crPT);
      }
      crPT = (parseFloat(crPT) * 1000).toString() + "/110";
      this.loc_voltageRatio = crPT;
      crPT = (((double) * 1000) / 110).toString();
    }
    if (type === 'ct_0' || type === 'ct_1' || type === 'ct_2') {
      VA = "CT ";
    } else if (type === 'pt_0' || type === 'pt_1' || type === 'pt_2') {
      VA = "VT ";
    }

    // Check value amount for VA
    if (arrayNew[0] === '1') {
      VA = VA + '7.5 VA';
    } else if (arrayNew[0] === '2') {
      VA = VA + '15 VA';
    } else if (arrayNew[0] === '3') {
      VA = VA + '30 VA';
    } else if (arrayNew[0] === '4') {
      VA = VA + '50 VA';
    } else if (arrayNew[0] === '5') {
      VA = VA + '100 VA';
    } else if (arrayNew[0] === '6') {
      VA = VA + '200 VA';
    }

    // Check value for Class 
    if (arrayNew[1] === '1') {
      loc_Class = '0.2';
      Class = "0001";
    } else if (arrayNew[1] === '2') {
      loc_Class = '0.5';
      Class = "0002";
    } else if (arrayNew[1] === '3') {
      loc_Class = '1';
      Class = "0006";
    }

    var old_voltage = this.item.json.ta0installationvoltage;
    // Checking device voltage
    if (typeof (this.mainDeviceArray[1]) !== "undefined") {
      if (typeof (this.mainDeviceArray[1].assetnum) !== "undefined" || this.mainDeviceArray[1].assetnum !== null || this.mainDeviceArray[1].assetnum !== '') {
        var newVoltage = this.mainDeviceArray[1].ta0devicevoltage;
      } else {
        var newVoltage = this.mainDeviceArray[0].ta0devicevoltage;
      }
    } else {
      var newVoltage = this.mainDeviceArray[0].ta0devicevoltage;
    }

    if (old_voltage >= DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV || newVoltage >= DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV) {
      switch (type) {
        case "ct_0":
          if (typeof (this.ctDevice0Array[1]) !== "undefined") {
            this.ctDevice0Array[1].ta0currentratio = CR;
            this.ctDevice0Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice0Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice0Array[1].ta0va = VA;
            this.ctDevice0Array[1].ta0class = Class;
            this.ctDevice0Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            this.ctDevice0Array[0].ta0currentratio = CR;
            this.ctDevice0Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice0Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice0Array[0].ta0va = VA;
            this.ctDevice0Array[0].ta0class = Class;
            this.ctDevice0Array[0].loc_ta0class = loc_Class;
          }

          if (typeof (this.ctDevice1Array[1]) !== "undefined") {
            this.ctDevice1Array[1].ta0currentratio = CR;
            this.ctDevice1Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice1Array[1].ta0va = VA;
            this.ctDevice1Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice1Array[1].ta0class = Class;
            this.ctDevice1Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            this.ctDevice1Array[0].ta0currentratio = CR;
            this.ctDevice1Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice1Array[0].ta0va = VA;
            this.ctDevice1Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice1Array[0].ta0class = Class;
            this.ctDevice1Array[0].loc_ta0class = loc_Class;
          }

          if (typeof (this.ctDevice2Array[1]) !== "undefined") {
            this.ctDevice2Array[1].ta0currentratio = CR;
            this.ctDevice2Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice2Array[1].ta0va = VA;
            this.ctDevice2Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice2Array[1].ta0class = Class;
            this.ctDevice2Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            this.ctDevice2Array[0].ta0currentratio = CR;
            this.ctDevice2Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice2Array[0].ta0va = VA;
            this.ctDevice2Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice2Array[0].ta0class = Class;
            this.ctDevice2Array[0].loc_ta0class = loc_Class;
          }
          break;

        case "ct_1":
          if (typeof (this.ctDevice1Array[1]) !== "undefined") {
            this.ctDevice1Array[1].ta0currentratio = CR;
            this.ctDevice1Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice1Array[1].ta0va = VA;
            this.ctDevice1Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice1Array[1].ta0class = Class;
          } else if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            this.ctDevice1Array[0].ta0currentratio = CR;
            this.ctDevice1Array[0].loc_ta0currentratio = CR;
            this.ctDevice1Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice1Array[0].ta0va = VA;
            this.ctDevice1Array[0].ta0class = Class;
            this.ctDevice1Array[0].loc_ta0class = loc_Class;
          }

          if (typeof (this.ctDevice0Array[1]) !== "undefined") {
            this.ctDevice0Array[1].ta0currentratio = CR;
            this.ctDevice0Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice0Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice0Array[1].ta0va = VA;
            this.ctDevice0Array[1].ta0class = Class;
            this.ctDevice0Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            this.ctDevice0Array[0].ta0currentratio = CR;
            this.ctDevice0Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice0Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice0Array[0].ta0va = VA;
            this.ctDevice0Array[0].ta0class = Class;
            this.ctDevice0Array[0].loc_ta0class = loc_Class;
          }

          if (typeof (this.ctDevice2Array[1]) !== "undefined") {
            this.ctDevice2Array[1].ta0currentratio = CR;
            this.ctDevice2Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice2Array[1].ta0va = VA;
            this.ctDevice2Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice2Array[1].ta0class = Class;
            this.ctDevice2Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            this.ctDevice2Array[0].ta0currentratio = CR;
            this.ctDevice2Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice2Array[0].ta0va = VA;
            this.ctDevice2Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice2Array[0].ta0class = Class;
            this.ctDevice2Array[0].loc_ta0class = loc_Class;
          }
          break;

        case "ct_2":
          if (typeof (this.ctDevice2Array[1]) !== "undefined") {
            this.ctDevice2Array[1].ta0currentratio = CR;
            this.ctDevice2Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice2Array[1].ta0va = VA;
            this.ctDevice2Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice2Array[1].ta0class = Class;
            this.ctDevice2Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice2Array[0]) !== "undefined") {
            this.ctDevice2Array[0].ta0currentratio = CR;
            this.ctDevice2Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice2Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice2Array[0].ta0va = VA;
            this.ctDevice2Array[0].ta0class = Class;
            this.ctDevice2Array[0].loc_ta0class = loc_Class;

          }
          if (typeof (this.ctDevice0Array[1]) !== "undefined") {
            this.ctDevice0Array[1].ta0currentratio = CR;
            this.ctDevice0Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice0Array[1].ta0va = VA;
            this.ctDevice0Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice0Array[1].ta0class = Class;
            this.ctDevice0Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice0Array[0]) !== "undefined") {
            this.ctDevice0Array[0].ta0currentratio = CR;
            this.ctDevice0Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice0Array[0].ta0va = VA;
            this.ctDevice0Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice0Array[0].ta0class = Class;
            this.ctDevice0Array[0].loc_ta0class = loc_Class;
          }

          if (typeof (this.ctDevice1Array[1]) !== "undefined") {
            this.ctDevice1Array[1].ta0currentratio = CR;
            this.ctDevice1Array[1].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice1Array[1].ta0va = VA;
            this.ctDevice1Array[1].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice1Array[1].ta0class = Class;
            this.ctDevice1Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ctDevice1Array[0]) !== "undefined") {
            this.ctDevice1Array[0].ta0currentratio = CR;
            this.ctDevice1Array[0].loc_ta0currentratio = this.loc_currentRatio;
            this.ctDevice1Array[0].ta0va = VA;
            this.ctDevice1Array[0].loc_currentRatio = this.loc_currentRatio;
            this.ctDevice1Array[0].ta0class = Class;
            this.ctDevice1Array[0].loc_ta0class = loc_Class;
          }
          break;

        case "pt_0": {
          if (typeof (this.ptDevice0Array[1]) !== "undefined") {
            this.ptDevice0Array[1].ta0currentratio = crPT;
            this.ptDevice0Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice0Array[1].ta0voltageratio = crPT;
            this.ptDevice0Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice0Array[1].ta0va = VA;
            this.ptDevice0Array[1].loc_voltageRatio = crPT;
            this.ptDevice0Array[1].ta0class = Class;
            this.ptDevice0Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            this.ptDevice0Array[0].ta0currentratio = crPT;
            this.ptDevice0Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice0Array[0].ta0voltageratio = crPT;
            this.ptDevice0Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice0Array[0].ta0va = VA;
            this.ptDevice0Array[0].loc_voltageRatio = crPT;
            this.ptDevice0Array[0].ta0class = Class;
            this.ptDevice0Array[0].loc_ta0class = loc_Class;
          }
          if (typeof (this.ptDevice1Array[1]) !== "undefined") {
            this.ptDevice1Array[1].ta0currentratio = crPT;
            this.ptDevice1Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice1Array[1].ta0voltageratio = crPT;
            this.ptDevice1Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice1Array[1].ta0va = VA;
            this.ptDevice1Array[1].loc_voltageRatio = crPT;
            this.ptDevice1Array[1].ta0class = Class;
            this.ptDevice1Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            this.ptDevice1Array[0].ta0currentratio = crPT;
            this.ptDevice1Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice1Array[0].ta0voltageratio = crPT;
            this.ptDevice1Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice1Array[0].ta0va = VA;
            this.ptDevice1Array[0].loc_voltageRatio = crPT;
            this.ptDevice1Array[0].ta0class = Class;
            this.ptDevice1Array[0].loc_ta0class = loc_Class;
          }
          if (typeof (this.ptDevice2Array[1]) !== "undefined") {
            this.ptDevice2Array[1].ta0currentratio = crPT;
            this.ptDevice2Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice2Array[1].ta0voltageratio = crPT;
            this.ptDevice2Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice2Array[1].ta0va = VA;
            this.ptDevice2Array[1].loc_voltageRatio = crPT;
            this.ptDevice2Array[1].ta0class = Class;
            this.ptDevice2Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            this.ptDevice2Array[0].ta0currentratio = crPT;
            this.ptDevice2Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice2Array[0].ta0voltageratio = crPT;
            this.ptDevice2Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice2Array[0].ta0va = VA;
            this.ptDevice2Array[0].loc_voltageRatio = crPT;
            this.ptDevice2Array[0].ta0class = Class;
            this.ptDevice2Array[0].loc_ta0class = loc_Class;
          }
          break;
        }
        case "pt_1": {
          if (typeof (this.ptDevice1Array[1]) !== "undefined") {
            this.ptDevice1Array[1].ta0currentratio = crPT;
            this.ptDevice1Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice1Array[1].ta0voltageratio = crPT;
            this.ptDevice1Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice1Array[1].ta0va = VA;
            this.ptDevice1Array[1].loc_voltageRatio = crPT;
            this.ptDevice1Array[1].ta0class = Class;
            this.ptDevice1Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            this.ptDevice1Array[0].ta0currentratio = crPT;
            this.ptDevice1Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice1Array[0].ta0voltageratio = crPT;
            this.ptDevice1Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice1Array[0].ta0va = VA;
            this.ptDevice1Array[0].loc_voltageRatio = crPT;
            this.ptDevice1Array[0].ta0class = Class;
            this.ptDevice1Array[0].loc_ta0class = loc_Class;
          }

          if (typeof (this.ptDevice0Array[1]) !== "undefined") {
            this.ptDevice0Array[1].ta0currentratio = crPT;
            this.ptDevice0Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice0Array[1].ta0voltageratio = crPT;
            this.ptDevice0Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice0Array[1].ta0va = VA;
            this.ptDevice0Array[1].loc_voltageRatio = crPT;
            this.ptDevice0Array[1].ta0class = Class;
            this.ptDevice0Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            this.ptDevice0Array[0].ta0currentratio = crPT;
            this.ptDevice0Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice0Array[0].ta0voltageratio = crPT;
            this.ptDevice0Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice0Array[0].ta0va = VA;
            this.ptDevice0Array[0].loc_voltageRatio = crPT;
            this.ptDevice0Array[0].ta0class = Class;
            this.ptDevice0Array[0].loc_ta0class = loc_Class;
          }
          if (typeof (this.ptDevice2Array[1]) !== "undefined") {
            this.ptDevice2Array[1].ta0currentratio = crPT;
            this.ptDevice2Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice2Array[1].ta0voltageratio = crPT;
            this.ptDevice2Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice2Array[1].ta0va = VA;
            this.ptDevice2Array[1].loc_voltageRatio = crPT;
            this.ptDevice2Array[1].ta0class = Class;
            this.ptDevice2Array[1].loc_ta0class = loc_Class;
          } else if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            this.ptDevice2Array[0].ta0currentratio = crPT;
            this.ptDevice2Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice2Array[0].ta0voltageratio = crPT;
            this.ptDevice2Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice2Array[0].ta0va = VA;
            this.ptDevice2Array[0].loc_voltageRatio = crPT;
            this.ptDevice2Array[0].ta0class = Class;
            this.ptDevice2Array[0].loc_ta0class = loc_Class;
          }
          break;
        }
        case "pt_2": {
          if (typeof (this.ptDevice2Array[1]) !== "undefined") {
            this.ptDevice2Array[1].ta0currentratio = crPT;
            this.ptDevice2Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice2Array[1].ta0voltageratio = crPT;
            this.ptDevice2Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice2Array[1].ta0va = VA;
            this.ptDevice2Array[1].ta0class = Class;
            this.ptDevice2Array[1].loc_ta0class = loc_Class;
            this.ptDevice2Array[1].loc_voltageRatio = crPT;
          } else if (typeof (this.ptDevice2Array[0]) !== "undefined") {
            this.ptDevice2Array[0].ta0currentratio = crPT;
            this.ptDevice2Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice2Array[0].ta0voltageratio = crPT;
            this.ptDevice2Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice2Array[0].ta0va = VA;
            this.ptDevice2Array[0].ta0class = Class;
            this.ptDevice2Array[0].loc_ta0class = loc_Class;
            this.ptDevice2Array[0].loc_voltageRatio = crPT;
          }
          if (typeof (this.ptDevice1Array[1]) !== "undefined") {
            this.ptDevice1Array[1].ta0currentratio = crPT;
            this.ptDevice1Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice1Array[1].ta0voltageratio = crPT;
            this.ptDevice1Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice1Array[1].ta0va = VA;
            this.ptDevice1Array[1].ta0class = Class;
            this.ptDevice1Array[1].loc_ta0class = loc_Class;
            this.ptDevice1Array[1].loc_voltageRatio = crPT;
          } else if (typeof (this.ptDevice1Array[0]) !== "undefined") {
            this.ptDevice1Array[0].ta0currentratio = crPT;
            this.ptDevice1Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice1Array[0].ta0voltageratio = crPT;
            this.ptDevice1Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice1Array[0].ta0va = VA;
            this.ptDevice1Array[0].ta0class = Class;
            this.ptDevice1Array[0].loc_ta0class = loc_Class;
            this.ptDevice1Array[0].loc_voltageRatio = crPT;
          }
          if (typeof (this.ptDevice0Array[1]) !== "undefined") {
            this.ptDevice0Array[1].ta0currentratio = crPT;
            this.ptDevice0Array[1].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice0Array[1].ta0voltageratio = crPT;
            this.ptDevice0Array[1].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice0Array[1].ta0va = VA;
            this.ptDevice0Array[1].ta0class = Class;
            this.ptDevice0Array[1].loc_ta0class = loc_Class;
            this.ptDevice0Array[1].loc_voltageRatio = crPT;
          } else if (typeof (this.ptDevice0Array[0]) !== "undefined") {
            this.ptDevice0Array[0].ta0currentratio = crPT;
            this.ptDevice0Array[0].loc_ta0currentratio = this.loc_voltageRatio;
            this.ptDevice0Array[0].ta0voltageratio = crPT;
            this.ptDevice0Array[0].loc_ta0voltageratio = this.loc_voltageRatio;
            this.ptDevice0Array[0].ta0va = VA;
            this.ptDevice0Array[0].ta0class = Class;
            this.ptDevice0Array[0].loc_ta0class = loc_Class;
            this.ptDevice0Array[0].loc_voltageRatio = crPT;
          }
          break;
        }
      } // End Swtich Case for Type CT/PT
    } // End Checking for Voltage MVHV
  }

  // Created By Ameer - 5/10/2018 (Search Controlling Device and assign to Controlling Device(Serial Num))
  //Edited by Ameer - 9/10/2018
  searchControllingDevice(meterDetailsArray) {
    if (this.spliceFlag === true) {
      if (meterDetailsArray.ta0replaceind === true || meterDetailsArray.ta0removeind === true) {
        if (this.item.json.loc_controllingDeviceList.length === this.item.json.ta0feeder.length) {
          this.item.json.loc_controllingDeviceList.splice(this.indexVal, 1);
          this.spliceFlag = false;
        }
      }
    }
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots',
    });

    loading.present();
    this.gf.loadingTimer(loading);
    setTimeout(() => {
      loading.dismiss();

      if (this.item.json.loc_controllingDeviceList.length > 0) {
        var optData = [];
        // Now we add the radio buttons
        for (let i = 0; i < this.item.json.loc_controllingDeviceList.length; i++) {
          optData.push({
            name: 'options',
            value: [this.item.json.loc_controllingDeviceList[i].asssetNum, this.item.json.loc_controllingDeviceList[i].serialNum],
            'label': this.item.json.loc_controllingDeviceList[i].feederId + '-' + this.item.json.loc_controllingDeviceList[i].asssetNum + ' - ' + this.item.json.loc_controllingDeviceList[i].serialNum,
            type: 'radio'
          });
        }

        // Object with options used to create the alert
        var options = {
          title: 'Choose the device',
          inputs: optData,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Ok',
              handler: data => {

                console.log('Data Value', + data);
                meterDetailsArray.ta0controllingdevice = data[0];
              }
            }
          ]
        };

        // Create the alert with the options
        let alert = this.alertCtrl.create(options);
        alert.present();
      } else {
        this.gf.warningAlert("Error", "No device available.", "Close")
        //this.gf.warningAlert("Error", "No Controlling Device  found. Service Order site is " + siteidVal + ".", "Close");
      }
    }, 1000);

    if (typeof (this.item.json.loc_controllingDeviceList) == 'undefined') {
      this.gf.warningAlert("Error", "No device available.", "Close")

    }
  }

  /**
   * Hide Show Main Section
   * Created  : Alif
   * Date     : 12-11-2018
   * edited   : Ameer (16/11/2018)
   */
  showMainSection(index) {
    index++;
    if (this.showMain == false) {
      this.showMain = true;
    }
    else if (index === 2) {
      this.showMain = false;
    }
  }

  /**
   * Hide Show Check Section
   * Created  : Alif
   * Date     : 12-11-2018
   * Edited   : Ameer(16/11/2018)
   */
  showCheckSection(index) {
    index++;
    if (this.showCheck === false) {
      this.showCheck = true;
    }
    else if (index === 2) {
      this.showCheck = false;
    }
  }

  /**
   * Hide Show Ct Transformer Section
   * Created  : Alif
   * Date     : 12-11-2018
   * Edited   : Ameer (16/11/2018)
   */
  showCtTransformerSection(index) {
    index++;
    if (this.ctSection === false) {
      this.ctSection = true;
    }
    else if (index === 2) {
      this.ctSection = false;
    }
  }

  /**
  * Hide Show Pt Transformer Section
  * Created  : Alif
  * Date     : 12-11-2018
  */
  showPtTransformerSection(index) {
    index++;

    if (this.ptSection === false) {
      this.ptSection = true;
    }
    else if (index === 2) {
      this.ptSection = false;
    }
  }

  /**
 * select all meter,modem,sim,ct and pt at ZRCE and ZRMV...
 */
  selectAll() {
    if (this.selectAllBool) {
      this.selectAllBool = false;

      if (typeof (this.mainDeviceArray) !== 'undefined') {
        this.mainModemArray[0].ta0removeind = this.selectAllBool;
        this.mainSimcardArray[0].ta0removeind = this.selectAllBool;

        this.checkModemArray[0].ta0removeind = this.selectAllBool;
        this.checkSimcardArray[0].ta0removeind = this.selectAllBool;

        if (this.worktype !== SoTypes.ZRCE) {
          this.mainDeviceArray[0].ta0removeind = this.selectAllBool;
          this.checkDeviceArray[0].ta0removeind = this.selectAllBool;

          this.ctDevice0Array[0].ta0removeind = this.selectAllBool;
          this.ctDevice1Array[0].ta0removeind = this.selectAllBool;
          this.ctDevice2Array[0].ta0removeind = this.selectAllBool;

          this.ptDevice0Array[0].ta0removeind = this.selectAllBool;
          this.ptDevice1Array[0].ta0removeind = this.selectAllBool;
          this.ptDevice2Array[0].ta0removeind = this.selectAllBool;
        }
      }
    }
    else {
      this.selectAllBool = true;

      if (typeof (this.mainDeviceArray) !== 'undefined') {
        this.mainModemArray[0].ta0removeind = this.selectAllBool;
        this.mainSimcardArray[0].ta0removeind = this.selectAllBool;

        this.checkModemArray[0].ta0removeind = this.selectAllBool;
        this.checkSimcardArray[0].ta0removeind = this.selectAllBool;

        if (this.worktype !== SoTypes.ZRCE) {
          this.mainDeviceArray[0].ta0removeind = this.selectAllBool;

          this.checkDeviceArray[0].ta0removeind = this.selectAllBool;

          this.ctDevice0Array[0].ta0removeind = this.selectAllBool;
          this.ctDevice1Array[0].ta0removeind = this.selectAllBool;
          this.ctDevice2Array[0].ta0removeind = this.selectAllBool;

          this.ptDevice0Array[0].ta0removeind = this.selectAllBool;
          this.ptDevice1Array[0].ta0removeind = this.selectAllBool;
          this.ptDevice2Array[0].ta0removeind = this.selectAllBool;
        }
      }
    }
  }

  /**
   * Reason   : Method to check length of character for 'Brand'.
   * Created  : Alif (21/05/2019)
   */
  checkLengthOfCharacter(array) {
    console.log("checking length of character maximum to 20 characters only..");

    if (typeof (array.ta0modelid) !== "undefined" && array.ta0modelid !== null && array.ta0modelid !== "") {
      var string = array.ta0modelid.toString();

      if (string.length > 20) {
        array.ta0modelid = string.slice(0, 20);
        this.gf.warningAlert("Error", "Input is exceed maximum (20) length of characters.", "Ok");
      }
    }
  }

}