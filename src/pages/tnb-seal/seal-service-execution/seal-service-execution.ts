import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController } from "ionic-angular";
import { Http } from "@angular/http";
import { PopoverController, AlertController } from 'ionic-angular';
import "rxjs/add/operator/map";
import { FeederDetails } from "../../../pojo/FeederDetails"
import { MultiAssetLocci } from "../../../pojo/MultiAssetLocci";
import { Domains } from "../../../pojo/commonEnum/Domains";
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { JsonStoreHandlerProvider } from '../../../providers/json-store-handler/json-store-handler';
import { SoTypes } from "../../../pojo/commonEnum/SoTypes";
import { DeviceConstants } from "../../../pojo/commonEnum/DeviceConstants";
import { FunctionClass } from "../../../pojo/commonEnum/FunctionClass";
import { GlobalFunction } from "../../../providers/common/global-function";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { GlobalVars } from "../../../providers/common/global-vars";
import { FeederSetDesign } from "../../../pojo/design/feederSetDesign";
import { MenuController } from "ionic-angular/components/app/menu-controller";
import { SealInfo } from "../../../pojo/SealInfo";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

/**
 * Generated class for the SealServiceExecutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-service-execution',
  templateUrl: 'seal-service-execution.html',
})
export class SealServiceExecutionPage {

  soTypes = SoTypes;
  dCons = DeviceConstants;
  functClass = FunctionClass;
  item: any;
  public popoverCtrl: PopoverController;
  information: any[];

  public feederSetArray = [];
  public feederDetails: FeederDetails = null;
  public feederArray: Array<FeederDetails> = new Array<FeederDetails>();

  public multiAssetLocci: MultiAssetLocci = null;
  public multiAssetLocciArray: Array<MultiAssetLocci> = null;

  // Variables [ZRMV]
  public length: number;
  public multiasset;
  public validateTest: boolean = false;
  public validateSilSticker: boolean = false;
  public object: any;
  public fIndex: any;
  public worktype: any;
  public showAdHocError: boolean = false;
  public wolo1Freeze: boolean = false;

  // Variables [ZUDN]
  public listRemoveDevice = [];
  // public deleteDevice: any;
  public deviceDetails: any;
  // Variables Checking Device Status
  public deviceList = [];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public appCtrl: App,
    public params: NavParams,
    private http: Http,
    public toastCtrl: ToastController,
    private jsonStore: JsonStoreCrudProvider,
    private dataService: DataServiceProvider,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    public loadingCtrl: LoadingController,
    private jsonHandler: JsonStoreHandlerProvider,
    public menuCtrl: MenuController, ) {
    console.log("Inside SealServiceExecutionPage constructor");
    // Hide Menu
    console.log("constructor >>> hide menu");
    this.menuCtrl.enable(false, 'myMenu');
    console.log("constructor >>> item : "+JSON.stringify(this.item));
    this.item = this.params.data;
    console.log("constructor >>> trigger this.loadAdhocCheck");
    this.loadAdhocCheck();
    console.log("constructor >>> trigger this.wolo1FreezeCheck");
    this.wolo1FreezeCheck();

    // Update worktype
    this.worktype = this.item.json.worktype;
    console.log("constructor >>> worktype : "+this.worktype);
    console.log("ta0billingind : "+this.item.json.ta0billingind);
    // Trigger AllocationType
    this.item.json.loc_allocationtype_status = false;

    // SOType = ZUDN
    this.deviceDetails = new MultiAssetLocci();

    // Read is remove device is exist in json..
    if (this.item.json.hasOwnProperty('ta0removedevice')) {
      this.listRemoveDevice = this.item.json.ta0removedevice;
    }


    if (typeof (this.item.json.ta0feeder) != 'undefined' && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== '') {
      //this.feederSetArray = [];
      // console.log("BEFORE: " + JSON.stringify(this.item.json.ta0feeder));
      this.item.json.ta0feeder.sort(this.gf.dynamicSort("description"));
      // console.log("AFTER: " + JSON.stringify(this.item.json.ta0feeder));
      debugger;

      // Reset List Device
      this.item.json.listDevice = [];
      // Reset Controlling Device to empty.
      this.item.json.loc_controllingDeviceList = [];

      this.deviceDetails = {};
      console.log("constructor >>> feeder size : "+this.item.json.ta0feeder.length);
      for (let feederArr of this.item.json.ta0feeder) {
        console.log("trigger this.loadFeederDesign");
        this.loadFeederDesign(feederArr);
      }
    } else {
      // Reset List Device
      this.item.json.listDevice = [];
      // Reset Controlling Device to empty.
      this.item.json.loc_controllingDeviceList = [];
    }

    console.log("trigger jsonstore.replaceWO");
    // Replace Updated Data in JSON
    this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
  }

  /**
   * Description  : Method to auto populate local data.
   * Created      : Alif (31.12.2019)
   */
  ionViewWillEnter() {
    console.log("enter ionViewWillEnter to search & update local data..");
    this.item = this.params.data;

    var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.item.json.wonum);
    console.log("trigger jsonstore.getSearchRecord");
    this.jsonStore.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {

      console.log("enter local data to update..");
      this.item = JSON.parse(JSON.stringify(result[0]));

      console.log("ionViewWillEnter >>> item : "+JSON.stringify(this.item));

      this.loadAdhocCheck();
      this.wolo1FreezeCheck();

      // Update worktype
      this.worktype = this.item.json.worktype;

      // Trigger AllocationType
      this.item.json.loc_allocationtype_status = false;

      // SOType = ZUDN
      this.deviceDetails = new MultiAssetLocci();

      // Read is remove device is exist in json..
      if (this.item.json.hasOwnProperty('ta0removedevice')) {
        this.listRemoveDevice = this.item.json.ta0removedevice;
      }
      
      console.log("ionViewWillEnter >>> feeder size : "+this.item.json.ta0feeder.length);
      if (typeof (this.item.json.ta0feeder) != 'undefined' && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== '') {
        //this.feederSetArray = [];
        // console.log("BEFORE: " + JSON.stringify(this.item.json.ta0feeder));
        this.item.json.ta0feeder.sort(this.gf.dynamicSort("description"));
        // console.log("AFTER: " + JSON.stringify(this.item.json.ta0feeder));
        debugger;

        // Reset List Device
        this.item.json.listDevice = [];
        // Reset Controlling Device to empty.
        this.item.json.loc_controllingDeviceList = [];

        this.deviceDetails = {};
        for (let feederArr of this.item.json.ta0feeder) {
          console.log("trigger this.loadFeederDesign");
          this.loadFeederDesign(feederArr);
        }
      } else {
        // Reset List Device
        this.item.json.listDevice = [];
        // Reset Controlling Device to empty.
        this.item.json.loc_controllingDeviceList = [];
      }

      // Replace Updated Data in JSON
      this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealServiceExecutionPage');
  }

  wolo1FreezeCheck() {
    if (this.item.json.wolo1 !== "" && this.item.json.wolo1 !== null && typeof this.item.json.wolo1 !== "undefined") {
      this.wolo1Freeze = true;
    } else {
      this.wolo1Freeze = false;
    }
  }

  loadAdhocCheck() {
    var relatedRecords = this.item.json.relatedrecord;
    if (this.item.json.origrecordid !== '' && this.item.json.origrecordid !== null && typeof (this.item.json.origrecordid) !== 'undefined') {
      this.showAdHocError = false;
    } else {
      if (typeof (this.item.json.relatedrecord) !== "undefined" && this.item.json.relatedrecord !== null && this.item.json.relatedrecord !== "") {
        for (var i = 0; i < relatedRecords.length; i++) {
          if (relatedRecords[i].ta0relatedrecstatus === "INPRG")
            this.showAdHocError = true;
        }
      }
    }
  }

  deviceRemovingMeterCheck(i, j, deviceName, oldDeviceIndex) {
    const confirm = this.alertCtrl.create({

      title: 'Confirm Deletion',
      message: 'Do you agree delete this reading? You can\'t undo this action',
      buttons: [{ text: 'Cancel' }, {

        text: 'Delete',
        handler: () => {
          this.removeDevice(i, j, oldDeviceIndex);
        }
      }]
    });
    confirm.present();
  }

  loadFeederDesign(feederArr) {
    // Reset New Device Display Section
    feederArr.loc_haveNewDevice = false;

    // Installation Voltage
    var voltage = JSON.parse(JSON.stringify(this.item.json.ta0installationvoltage));

    if (typeof (feederArr.multiassetlocci) != 'undefined') {
      feederArr.feederSetDesign = [];
      var feederSetDesign = new FeederSetDesign();
      feederSetDesign.soWorkType = this.item.json.worktype;
      feederSetDesign.feederExisting = feederArr.ta0existing;

      if (feederSetDesign.soWorkType === SoTypes.ZIST) {
        var ctCount = 0;
        var ptCount = 0;

        for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
          debugger;
          var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          switch (key) {
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
              feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterIndex = i;
              feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
              feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
              feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
              voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.loc_haveNewDevice = true;
              // Trigger AllocationType 90
              if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                this.triggerAllocationType();
              }

              /**
               * Reason   : Checking and convert to array for ta4testdata
               * Created  : Alif (05-03-2019)
               */
              var ta4testdata_temp: any;
              if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                  ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                }

                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
              }

              // Setting controlling device list
              // removed by shankar 03/11/2018.. implements in add-device constructor.
              /*  var controllingDevice = {
                 feederId: "Feeder"+i,
                 asssetNum: feederSetDesign.nMeter,
                 serialNum: feederSetDesign.nMeterSerialNum
               }
               this.item.json.loc_controllingDeviceList.push(controllingDevice); */
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
              feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterModemIndex = i;
              feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM:
              feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterSimIndex = i;
              feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_CHECK:
              feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nCheckIndex = i;
              feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
              feederArr.loc_haveNewDevice = true;

              /**
               * Reason   : Checking and convert to array for ta4testdata
               * Created  : Alif (05-03-2019)
               */
              var ta4testdata_temp: any;
              if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                  ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                } else {
                  ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                }

                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
              }
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD:
              feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nCheckModemIndex = i;
              feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM:
              feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nCheckSimIndex = i;
              feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederArr.loc_haveNewDevice = true;
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT:
              if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterCtRIndex = i;
                feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ctCount++;
              } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterCtYIndex = i;
                feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ctCount++;
              } else {
                feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterCtBIndex = i;
                feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ctCount++;
              }

              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
              if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterPtRIndex = i;
                feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ptCount++;
              } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterPtYIndex = i;
                feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ptCount++;
              } else {
                feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterPtBIndex = i;
                feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederArr.loc_haveNewDevice = true;
                //ptCount++;
              }
              break;

            default:
              break;
          }

          // Collection Assetnum Details          
          this.deviceDetails.assetnum = feederArr.multiassetlocci[i].assetnum;
          this.deviceDetails.ta0controllingdevice = feederArr.multiassetlocci[i].ta0controllingdevice;
          this.deviceDetails.ta0allocationtype = feederArr.multiassetlocci[i].ta0allocationtype;
          this.deviceDetails.ta0bcrmuploadindicator = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          this.item.json.listDevice.push(this.deviceDetails);
          this.deviceDetails = {};
        }

        // Checking voltage
        if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
          // Mandatory checking is ct / pt is empty
          if (typeof (feederSetDesign.nMeterCtR) === "undefined") {
            feederSetDesign.nMeterCtRRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtY) === "undefined") {
            feederSetDesign.nMeterCtYRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtB) === "undefined") {
            feederSetDesign.nMeterCtBRegisterStatus = "N";
          }

          if (typeof (feederSetDesign.nCheck) !== "undefined") {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          } else {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          }
        } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
          // Mandatory checking is ct / pt is empty
          if (typeof (feederSetDesign.nMeterCtR) === "undefined") {
            feederSetDesign.nMeterCtRRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtY) === "undefined") {
            feederSetDesign.nMeterCtYRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterCtB) === "undefined") {
            feederSetDesign.nMeterCtBRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterPtR) === "undefined") {
            feederSetDesign.nMeterPtRRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterPtY) === "undefined") {
            feederSetDesign.nMeterPtYRegisterStatus = "N";
          }
          if (typeof (feederSetDesign.nMeterPtB) === "undefined") {
            feederSetDesign.nMeterPtBRegisterStatus = "N";
          }

          if (typeof (feederSetDesign.nCheck) !== "undefined") {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
              (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          } else {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
              (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          }
        } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC

        }


      } else {
        var ctECount = 0;
        var ptECount = 0;
        //var ctnCount = 0;
        //var ptnCount = 0;

        
        // CT Seal
        let seatR = true;
        let seatY = true;
        let seatB = true;
        
        // get checking ct seallocation
        for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
          var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          if (key == DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT) {
            if (typeof(feederArr.multiassetlocci[i].ta0sealdetail) !== 'undefined') {
              console.log(">>> results checking >>>" + feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation);
              if (feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation === FunctionClass.TERMINAL_CT_RED) {
                // set seating
                seatR = false;
              } else if (feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation === FunctionClass.TERMINAL_CT_YELLOW) {
                // set seating
                seatY = false;
              } else if (feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation === FunctionClass.TERMINAL_CT_BLUE) {
                // set seating
                seatB = false;
              }
            }
          }
        }

        for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
          // Collection Assetnum          
          this.deviceDetails.description = feederArr.description + " - " + feederArr.ta0feedercode;

          var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          if (feederSetDesign.soWorkType === SoTypes.ZUDN && feederSetDesign.feederExisting === false) {
            switch (key) {
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterIndex = i;
                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.nfeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage
                feederArr.loc_haveNewDevice = true;
                // Trigger AllocationType 90
                if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                  this.triggerAllocationType();
                }
                // Setting controlling device list
                // removed by shankar 03/11/2018.. implements in add-device constructor.

                /* var controllingDevice = {
                  feederId: "Feeder"+i,
                  asssetNum: feederSetDesign.nMeter,
                  serialNum: feederSetDesign.nMeterSerialNum
                }
                this.item.json.loc_controllingDeviceList.push(controllingDevice); */
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterModemIndex = i;
                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM:
                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterSimIndex = i;
                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK:
                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckIndex = i;
                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD:
                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckModemIndex = i;
                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM:
                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckSimIndex = i;
                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtRIndex = i;
                  feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtYIndex = i;
                  feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctCount++;
                } else {
                  feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtBIndex = i;
                  feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctCount++;
                }

                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtRIndex = i;
                  feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtYIndex = i;
                  feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptCount++;
                } else {
                  feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtBIndex = i;
                  feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptCount++;
                }
                break;

              default:
                break;
            }

            // Checking Voltage
            var old_voltage = JSON.parse(JSON.stringify(this.item.json.ta0installationvoltage));
            var new_voltage = JSON.parse(JSON.stringify(this.item.json.ta0newvoltage));

            // Trigger Status
            // Checking voltage
            if (old_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
              if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV -> LV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV -> MVHV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV -> OPC
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }
            } else if (old_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
              if (new_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV -> MVHV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if (((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV -> LV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (new_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV -> OPC
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = true;
                    }
                  }
                }

                // Existing Section
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }
            } else if (old_voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
              if (new_voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC -> LV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              } else if (new_voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC -> MVHV
                // New Section
                if (feederArr.loc_haveNewDevice) {
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Section
                if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            }
          } else {
            switch (key) {
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN:
                feederSetDesign.eMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterIndex = i;
                feederSetDesign.eMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederArr.eFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.eMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eMeterRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eMeterRemoveInd === true) {
                      if (feederSetDesign.eMeterRegisterStatus !== 'Y') {
                        feederSetDesign.eMeterRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eMeterRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eMeterRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eMeterTestStatus = 'Y';
                }
                feederSetDesign.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
                  feederSetDesign.nFeederVoltage = feederSetDesign.eFeederVoltage;
                }
                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                // Setting controlling device list
                // removed by shankar 03/11/2018.. implements in add-device constructor.
                /*  var controllingDevice = {
                   feederId: "Feeder"+i,
                   asssetNum: feederSetDesign.eMeter,
                   serialNum: feederSetDesign.eMeterSerialNum
                 }
                 this.item.json.loc_controllingDeviceList.push(controllingDevice); */
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD:
                feederSetDesign.eMeterModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterModemIndex = i;
                feederSetDesign.eMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                if (this.worktype === SoTypes.ZISO || this.worktype === SoTypes.ZISP) {
                  feederSetDesign.eMeterModemTestStatus = "Y";
                } else {
                  feederSetDesign.eMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                }
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eMeterModemRemoveInd === true) {
                      if (feederSetDesign.eMeterModemRegisterStatus !== 'Y') {
                        feederSetDesign.eMeterModemRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eMeterModemRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eMeterModemTestStatus = 'Y';
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM:
                feederSetDesign.eMeterSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterSimIndex = i;
                feederSetDesign.eMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eMeterSimRemoveInd === true) {
                      if (feederSetDesign.eMeterSimRegisterStatus !== 'Y') {
                        feederSetDesign.eMeterSimRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eMeterSimRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eMeterSimTestStatus = 'Y';
                }
                break;
              /** Reason: Adding Existing Main Comm Module for Smart Meter */
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_COMM:
                feederSetDesign.eMainComm = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMainCommIndex = i;
                feederSetDesign.eMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.eMainCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK:
                feederSetDesign.eCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckIndex = i;
                feederSetDesign.eCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.eCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eCheckRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eCheckRemoveInd === true) {
                      if (feederSetDesign.eCheckRegisterStatus !== 'Y') {
                        feederSetDesign.eCheckRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eCheckRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eCheckRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eCheckTestStatus = 'Y';
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD:
                feederSetDesign.eCheckModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckModemIndex = i;
                feederSetDesign.eCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eCheckModemRemoveInd === true) {
                      if (feederSetDesign.eCheckModemRegisterStatus !== 'Y') {
                        feederSetDesign.eCheckModemRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eCheckModemRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eCheckModemTestStatus = 'Y';
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM:
                feederSetDesign.eCheckSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckSimIndex = i;
                feederSetDesign.eCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                  feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  // Setting to make info default button to "Green" by alif (20-12-2018)
                  if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                    if (feederSetDesign.eCheckSimRemoveInd === true) {
                      if (feederSetDesign.eCheckSimRegisterStatus !== 'Y') {
                        feederSetDesign.eCheckSimRegisterStatus = 'N';
                      }
                    } else {
                      feederSetDesign.eCheckSimRegisterStatus = 'Y';
                    }
                  }
                } else {
                  feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                }
                // Setting to make testing default to "Green" by alif (27-12-2018)
                if (this.worktype === 'ZRMV') {
                  feederSetDesign.eCheckSimTestStatus = 'Y';
                }
                break;
              /** Reason: Adding Existing Comm Module for Smart Meter */
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_COMM:
                feederSetDesign.eCheckComm = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckCommIndex = i;
                feederSetDesign.eCheckCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.eCheckCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.eCheckCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.eCheckCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.eCheckCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT:
                if (typeof(feederArr.multiassetlocci[i].ta0sealdetail) !== 'undefined') {
                  if (feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation === FunctionClass.TERMINAL_CT_RED) {
                    feederSetDesign.eMeterCtR = feederArr.multiassetlocci[i].assetnum;
                    feederSetDesign.eMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                    feederSetDesign.eMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                    feederSetDesign.eMeterCtRIndex = i;
                    feederSetDesign.eMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                      if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                        feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                      }
                    } else {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                    }
                    feederSetDesign.eMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                      feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                    } else {
                      feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                    }
                    ctECount++;
                  } else if (feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation === FunctionClass.TERMINAL_CT_YELLOW) {
                    feederSetDesign.eMeterCtY = feederArr.multiassetlocci[i].assetnum;
                    feederSetDesign.eMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                    feederSetDesign.eMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                    feederSetDesign.eMeterCtYIndex = i;
                    feederSetDesign.eMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                      if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                        feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                      }
                    } else {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                    }
                    feederSetDesign.eMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                      feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                    } else {
                      feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                    }
                    ctECount++;
                  } else if (feederArr.multiassetlocci[i].ta0sealdetail[0].ta0seallocation === FunctionClass.TERMINAL_CT_BLUE) {
                    feederSetDesign.eMeterCtB = feederArr.multiassetlocci[i].assetnum;
                    feederSetDesign.eMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                    feederSetDesign.eMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                    feederSetDesign.eMeterCtBIndex = i;
                    feederSetDesign.eMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                      if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                        feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                      }
                    } else {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                    }
                    feederSetDesign.eMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                      feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                    } else {
                      feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                    }
                    ctECount++;
                  }
                } else {
                  // checking slot
                  if (seatR == true) {
                    feederSetDesign.eMeterCtR = feederArr.multiassetlocci[i].assetnum;
                    feederSetDesign.eMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                    feederSetDesign.eMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                    feederSetDesign.eMeterCtRIndex = i;
                    feederSetDesign.eMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                      if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                        feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                      }
                    } else {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                    }
                    feederSetDesign.eMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                      feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                    } else {
                      feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                    }
                    ctECount++;
                    seatR = false;
                  } else if (seatY == true) {
                    feederSetDesign.eMeterCtY = feederArr.multiassetlocci[i].assetnum;
                    feederSetDesign.eMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                    feederSetDesign.eMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                    feederSetDesign.eMeterCtYIndex = i;
                    feederSetDesign.eMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                      if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                        feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                      }
                    } else {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                    }
                    feederSetDesign.eMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                      feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                    } else {
                      feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                    }
                    ctECount++;
                    seatY = false;
                  } else if (seatB == true) {
                    feederSetDesign.eMeterCtB = feederArr.multiassetlocci[i].assetnum;
                    feederSetDesign.eMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                    feederSetDesign.eMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                    feederSetDesign.eMeterCtBIndex = i;
                    feederSetDesign.eMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                      if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                        feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                      }
                    } else {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                    }
                    feederSetDesign.eMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                      feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                    } else {
                      feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                    }
                    ctECount++;
                    seatB = false;
                  }
                }
                break;
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT:
                if (ptECount === 0) {
                  feederSetDesign.eMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterPtRIndex = i;
                  feederSetDesign.eMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ptECount++;
                } else if (ptECount === 1) {
                  feederSetDesign.eMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterPtYIndex = i;
                  feederSetDesign.eMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ptECount++;
                } else {
                  feederSetDesign.eMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.eMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.eMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.eMeterPtBIndex = i;
                  feederSetDesign.eMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                    if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                      feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                    }
                  } else {
                    feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                  }
                  feederSetDesign.eMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                    feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                  } else {
                    feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                  }
                  ptECount++;
                }
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterIndex = i;
                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                feederArr.loc_haveNewDevice = true;
                // Trigger AllocationType 90
                if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                  this.triggerAllocationType();
                }
                // Setting controlling device list
                // removed by shankar 03/11/2018.. implements in add-device constructor.
                /* var controllingDevice = {
                  feederId: "Feeder"+i,
                  asssetNum: feederSetDesign.nMeter,
                  serialNum: feederSetDesign.nMeterSerialNum
                }
                this.item.json.loc_controllingDeviceList.push(controllingDevice); */
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterModemIndex = i;
                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_SIM:
                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMeterSimIndex = i;
                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              /** Reason: Adding New Comm Module for Smart Meter */
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_COMM:
                feederSetDesign.nMainComm = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nMainCommIndex = i;
                feederSetDesign.nMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK:
                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckIndex = i;
                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_MD:
                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckModemIndex = i;
                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_CHECK_SIM:
                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.nCheckSimIndex = i;
                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                feederArr.loc_haveNewDevice = true;
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtRIndex = i;
                  feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctnCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtYIndex = i;
                  feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctnCount++;
                } else {
                  feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtBIndex = i;
                  feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ctnCount++;
                }
                break;
              case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                  feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtRIndex = i;
                  feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptnCount++;
                } else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                  feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtYIndex = i;
                  feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptnCount++;
                } else {
                  feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtBIndex = i;
                  feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  //ptnCount++;
                }
                break;

              default:
                break;
            }

            // Trigger Status
            if (this.worktype === SoTypes.ZINR) { // Checking for ZINR (CE Inspection)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                // Existing Device
                if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZISR) { // Checking for ZISR (Old: No Info, No Test | New: No Info)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eCheckSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eCheckSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterSilStatus === "Y") &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                // Existing Device
                if (feederSetDesign.eMeterSilStatus === "Y") {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZRCE) { // Checking for ZRCE (Both: No Test)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }
            } else if (this.worktype === SoTypes.ZINL) { // Checking for ZINL
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                } else {
                  if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                    (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") && feederSetDesign.nCheckSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                if (feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZMMR || this.worktype === SoTypes.ZDCN || this.worktype === SoTypes.ZRCN) { // Checking for ZMMR
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                      feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                } else {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                    (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                      feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                } else {
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                    (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                    (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nMeterRegisterStatus === "Y" || (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                if (feederSetDesign.eMeterRegisterStatus === "Y" || (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                  feederSetDesign.eFeederStatus = true;
                } else {
                  feederSetDesign.eFeederStatus = false;
                }
              }
            } else if (this.worktype === SoTypes.ZRPC || this.worktype === SoTypes.ZSRO) { // Checking for ZSRO & ZRPC
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }
              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }

                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }
              }

            } else if (this.worktype === SoTypes.ZISP) { // Checking for ZISP
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" || feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }

                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }

              }

            } else { // Checking Others (Both: Not Mandatory S&S)
              // Checking voltage
              if (voltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  // Checking New Check Meter Section
                  if (feederSetDesign.nFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else {
                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  }
                }
                // Existing Device
                if (feederSetDesign.eFeederVoltage == Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else {
                  if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                }

              } else if (voltage < DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // OPC
                // New Device
                if (feederArr.loc_haveNewDevice) {
                  if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else if (feederSetDesign.nFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    } else {
                      if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                        (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                        feederSetDesign.nFeederStatus = true;
                      } else {
                        feederSetDesign.nFeederStatus = false;
                      }
                    }
                  } else { // OPC
                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                      feederSetDesign.nFeederStatus = true;
                    } else {
                      feederSetDesign.nFeederStatus = false;
                    }
                  }

                }

                // Existing Device
                if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_LV_400V)) { // LV
                  if (typeof (feederSetDesign.eCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else if (feederSetDesign.eFeederVoltage >= Number(DeviceConstants.VOL_LEVEL_LPC_MVHV_6kV)) { // MVHV
                  if (typeof (feederSetDesign.nCheck) !== "undefined") {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  } else {
                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                      (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                      (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                      feederSetDesign.eFeederStatus = true;
                    } else {
                      feederSetDesign.eFeederStatus = false;
                    }
                  }
                } else { // OPC
                  if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
                    feederSetDesign.eFeederStatus = true;
                  } else {
                    feederSetDesign.eFeederStatus = false;
                  }
                }

              }
            }
          }

          // Collection Assetnum Details          
          this.deviceDetails.assetnum = feederArr.multiassetlocci[i].assetnum;
          this.deviceDetails.ta0controllingdevice = feederArr.multiassetlocci[i].ta0controllingdevice;
          this.deviceDetails.ta0allocationtype = feederArr.multiassetlocci[i].ta0allocationtype;
          this.deviceDetails.ta0bcrmuploadindicator = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          this.item.json.listDevice.push(this.deviceDetails);
          this.deviceDetails = {};
        }
      }

      if (typeof (feederSetDesign.eFeederVoltage) === 'undefined') {
        feederSetDesign.eFeederVoltage = old_voltage
      }

      if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
        feederSetDesign.nFeederVoltage = new_voltage;
      }

      console.log('feeder set  : ' + JSON.stringify(feederSetDesign));
      feederArr.feederSetDesign.push(feederSetDesign);
      this.object = feederSetDesign;
      //this.feederSetArray.push(feederSetDesign);
    } else {
      feederArr.nFeederVoltage = this.gv.departmentCode;
      feederArr.eFeederVoltage = this.gv.departmentCode;
    }
  }

  toggleSection(index) {
    this.item.json.ta0feeder[index].open = !this.item.json.ta0feeder[index]
      .open;
  }

  toggleItem(index, j) {
    this.item.json.ta0feeder[index].children[j].open = !this.item.json
      .ta0feeder[index].children[j].open;
  }

  addFeeder() {
    debugger;
    console.log("add feeder .");
    this.feederDetails = new FeederDetails();
    this.feederDetails.description = "Feeder Set";
    this.feederDetails.ta0feedercode = new Date().getUTCMilliseconds().toString();
    // For adding new feeder change ta0existing = false.
    this.feederDetails.ta0existing = false;

    //var voltage = this.item.json.ta0newvoltage >= 4 ? '04' : '03';
    // var voltage = this.gv.departmentCode;
    var voltage = "";
    this.feederDetails.nFeederVoltage = voltage;
    this.feederDetails.eFeederVoltage = voltage;
    console.log(
      "------------------------------------------------------------------------------"
    );
    console.log("this.item.ta0feeder==" + JSON.stringify(this.item));
    console.log(
      "------------------------------------------------------------------------------"
    );
    if (this.item.json.ta0feeder != null) {
      console.log("feeder is not null");
      //this.feederArray.push(this.feederDetails);
      this.item.json.ta0feeder.push(this.feederDetails);
    } else {
      console.log("feeder empty");
      this.feederArray.push(this.feederDetails);
      console.log("this.feederArray==" + JSON.stringify(this.feederArray));
      this.item.json.ta0feeder = this.feederArray;
    }

    console.log("tnb Feeder : " + JSON.stringify(this.item.json.ta0feeder));
  }

  addDevice(index) {
    //this.feederArray[index];
    console.log("Hi Add Device :) ==" + index);
    console.log(" item : " + JSON.stringify(this.item));
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("DeviceDetailsPage", {
      paramObj: this.item,
      paramIndex: index
    });
  }

  removeFeeder(i) {

    let alert = this.alertCtrl.create({
      title: 'Confirm Deletion',
      message: 'Do you want to delete the feeder',
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

            debugger;
            // Remove device in temporary list (listDevice & controllingDevice).
            if (typeof (this.item.json.listDevice) !== "undefined" || typeof (this.item.json.loc_controllingDeviceList) !== "undefined") {
              // Checking feeder is empty or not.
              var feeder = this.item.json.ta0feeder[i];
              if (typeof (this.item.json.ta0feeder[i]) !== "undefined") {
                // Checking multiassetlocci (device).
                if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                  var multiassetlocci = feeder.multiassetlocci;
                  var listDevice = this.item.json.listDevice;
                  var controllingDevice = this.item.json.loc_controllingDeviceList;

                  // Checking length.
                  if (multiassetlocci.length > 0) {
                    for (var m = 0; m < multiassetlocci.length; m++) {
                      // Checking inside listDevice
                      var deleteDevice = listDevice.filter((item) => {
                        return item.assetnum === multiassetlocci[m].assetnum;
                      });

                      if (deleteDevice.length > 0) {
                        // Find the index first
                        for (var k = 0; k < deleteDevice.length; k++) {
                          var listDeviceIndex;
                          var controllingDeviceIndex;

                          listDeviceIndex = listDevice.findIndex((item) => {
                            return item.assetnum === deleteDevice[k].assetnum;
                          });

                          // Remove the device from the list
                          listDevice.splice(listDeviceIndex, 1);

                          controllingDeviceIndex = controllingDevice.findIndex((item) => {
                            return item.asssetNum === deleteDevice[k].assetnum;
                          });

                          // Remove the device from the list
                          controllingDevice.splice(controllingDeviceIndex, 1);
                        }
                      }
                    }
                  }
                }
              }
            }

            // GUI Changes...
            let loading = this.loadingCtrl.create({
              content: "Loading..."
            });
            loading.present();
            this.gf.loadingTimer(loading);

            setTimeout(() => {
              this;
              loading.onWillDismiss(() => {
                this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                this.item.json.loc_ta0feeder_haveChange = true;
                //this.gf.displayToast("Feeder Details updated.");
                loading.dismiss();
              });
            }, 10000);
            debugger;
            // Reset deviceDetails info..
            this.deviceDetails = {};
            var wonum = this.item.json.wonum;
            var ta0feederid = this.item.json.ta0feeder[i].ta0feederid;

            // Save information for remove device..
            this.deviceDetails.wonum = wonum;
            this.deviceDetails.ta0feederid = ta0feederid;
            this.deviceDetails.loc_feeder_haveRemove = true;
            this.listRemoveDevice.push(this.deviceDetails);

            // save the remove device into workorder
            this.item.json.ta0removedevice = this.listRemoveDevice;

            // Reset deviceDetails info..
            this.deviceDetails = {};
            console.log("DATA: " + JSON.stringify(this.listRemoveDevice));
            console.log("JSON: " + JSON.stringify(this.item));

            if (!this.gv.testMobile) {

              this.dataService.deleteDevice(this.listRemoveDevice, wonum, this.item.json.ta0feeder[i].ta0feedercode, 'feeder')
                .then(results => {
                  let res: any;
                  res = results;
                  if (res.processStatus === 'success') {
                    this.item.json.ta0feeder.splice(i, 1);
                    this.gf.warningAlert('Success', res.description, 'Close');
                    this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                    loading.dismiss();
                  }
                  else {
                    this.gf.warningAlert('Failed', res.description, 'Close');
                    loading.dismiss();
                  }
                });
            }
            else {
              // this.item.json.ta0feeder.splice(i, 1);
              this.item.json.ta0feeder[i]._action = "Delete";
              console.log(JSON.stringify(this.item.json.ta0feeder[i]));
              this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
              loading.dismiss();
            }
          }
        }
      ]
    });
    alert.present();
  }

  hasProperty(feederDetails) {

    if (typeof (feederDetails._action) !== 'undefined') {
      if (feederDetails._action === 'Delete') {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }
  }

  removeDevice(i, j, r) {

    // Reset deviceDetails info..
    this.deviceDetails = {};
    var wonum = this.item.json.wonum;
    var assetnum = this.item.json.ta0feeder[i].multiassetlocci[j].assetnum
    var ta0feederid = this.item.json.ta0feeder[i].ta0feederid;

    // Save information for remove device..
    this.deviceDetails.wonum = wonum;
    this.deviceDetails.ta0feederid = ta0feederid;
    this.deviceDetails.assetnum = assetnum;
    this.deviceDetails.loc_multiassetlocci_haveRemove = true;
    this.listRemoveDevice.push(this.deviceDetails);

    // save the remove device into workorder
    this.item.json.ta0removedevice = this.listRemoveDevice;

    // Reset deviceDetails info..
    this.deviceDetails = {};

    // item, wonumVal, deviceId, actionType
    this.dataService.deleteDevice(this.listRemoveDevice, wonum, assetnum, 'device')
      .then(results => {

        // Disabled Checkbox for Remove
        for (var k = 0; k < this.item.json.ta0feeder[i].multiassetlocci.length; k++) {
          if (this.item.json.ta0feeder[i].multiassetlocci[k].ta0functionclass == this.item.json.ta0feeder[i].multiassetlocci[j].ta0functionclass
            && this.item.json.ta0feeder[i].multiassetlocci[k].devicetype == this.item.json.ta0feeder[i].multiassetlocci[j].devicetype) {
            this.item.json.ta0feeder[i].multiassetlocci[k].ta0removeind = false;
            console.log("DEVICE TYPE - K: " + this.item.json.ta0feeder[i].multiassetlocci[k].devicetype);
            console.log("REMOVE STATUS: " + this.item.json.ta0feeder[i].multiassetlocci[k].ta0removeind);
          }
        }

        // Checking SO Types
        if (this.worktype === SoTypes.ZUDN || this.worktype === SoTypes.ZRPC) {
          // Change ta0removeind to false
          this.item.json.ta0feeder[i].multiassetlocci[r].ta0removedevice = false;
        }
        else if (this.worktype === SoTypes.ZSRO || this.worktype === SoTypes.ZCER || this.worktype === SoTypes.ZINL) {
          // Change ta0replaceind to false
          this.item.json.ta0feeder[i].multiassetlocci[r].ta0replaceind = false;
        }
        this.item.json.ta0feeder[i].multiassetlocci.splice(j, 1);
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        this.loadFeederDesign(this.item.json.ta0feeder[i]);
      });
  }

  /**
   * Validation for Device Status and Meter Reading
   */
  validation() {
    debugger;
    // Filtering for SO type
    var type = this.item.json.worktype;
    var feeder = this.item.json.ta0feeder;

    this.deviceList = [];

    switch (type) {
      case SoTypes.ZIST:
      case SoTypes.ZISR: {

        break;
      }

      case SoTypes.ZRMV:
      case SoTypes.ZRCE: {
        // Checking Device Status
        for (var i = 0; i < feeder.length; i++) {
          var multiassetlocci = feeder[i].multiassetlocci;
          if (typeof (multiassetlocci) !== "undefined") {
            for (var k = 0; k < multiassetlocci.length; k++) {
              // Checking remove indicator
              if (multiassetlocci[k].ta0removeind === true && multiassetlocci[k].ta0existingdevice === true) {
                // Checking if device status empty or not
                if (typeof (multiassetlocci[k].ta0systemstatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0systemstatus === null) {
                  // this.deviceDetails = [];
                  // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                  // this.deviceDetails.ta0systemstatus = undefined;
                  // this.deviceList.push(this.deviceDetails);
                  this.deviceList.push(multiassetlocci[k].assetnum);
                } else {
                  // Checking if device status "ZREM"
                  if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                    // Checking removal status is empty or not
                    if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
                      // this.deviceDetails = [];
                      // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                      // this.deviceDetails.ta0systemstatus = multiassetlocci[k].ta0systemstatus;
                      // this.deviceDetails.ta0devicestatus = undefined;
                      // this.deviceList.push(this.deviceDetails);
                      this.deviceList.push(multiassetlocci[k].assetnum);
                    } else {
                      console.log("Removal Status: Ok!");
                    }
                  } else {
                    console.log("Device Status: Ok!");
                  }
                }
              }
            }
          }
        }
        break;
      }

      case SoTypes.ZUDN:
      case SoTypes.ZRPC: {
        // Checking Device Status
        for (var i = 0; i < feeder.length; i++) {
          var multiassetlocci = feeder[i].multiassetlocci;
          if (typeof (multiassetlocci) !== 'undefined') {
            for (var k = 0; k < multiassetlocci.length; k++) {
              // Checking replace indicator
              if (multiassetlocci[k].ta0removeind === true && multiassetlocci[k].ta0existingdevice === true) {
                // Checking if device status empty or not
                if (typeof (multiassetlocci[k].ta0systemstatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0systemstatus === null) {
                  // this.deviceDetails = [];
                  // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                  // this.deviceDetails.ta0systemstatus = undefined;
                  // this.deviceList.push(this.deviceDetails);
                  this.deviceList.push(multiassetlocci[k].assetnum);
                } else {

                  // Checking if device status "ZREM"
                  if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                    // Checking removal status is empty or not
                    if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
                      // this.deviceDetails = [];
                      // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                      // this.deviceDetails.ta0systemstatus = multiassetlocci[k].ta0systemstatus;
                      // this.deviceDetails.ta0devicestatus = undefined;
                      // this.deviceList.push(this.deviceDetails);
                      this.deviceList.push(multiassetlocci[k].assetnum);
                    } else {
                      console.log("Removal Status: Ok!");
                    }
                  } else {
                    console.log("Device Status: Ok!");
                  }
                }
              }
            }
          }
        }
        break;
      }

      case SoTypes.ZCER:
      case SoTypes.ZINR:
      case SoTypes.ZSRO:
      case SoTypes.ZINL: {
        // Checking Device Status
        for (var i = 0; i < feeder.length; i++) {
          var multiassetlocci = feeder[i].multiassetlocci;
          if (typeof (multiassetlocci) !== "undefined") {
            for (var k = 0; k < multiassetlocci.length; k++) {
              // Checking replace indicator
              if (multiassetlocci[k].ta0replaceind === true && multiassetlocci[k].ta0existingdevice === true) {
                // Checking if device status empty or not
                if (typeof (multiassetlocci[k].ta0systemstatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "") {
                  // this.deviceDetails = [];
                  // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                  // this.deviceDetails.ta0systemstatus = undefined;
                  // this.deviceList.push(this.deviceDetails);
                  this.deviceList.push(multiassetlocci[k].assetnum);
                } else {
                  // Checking if device status "ZREM"
                  if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                    // Checking removal status is empty or not
                    if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "") {

                      // this.deviceDetails = [];
                      // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                      // this.deviceDetails.ta0systemstatus = multiassetlocci[k].ta0systemstatus;
                      // this.deviceDetails.ta0devicestatus = undefined;
                      // this.deviceList.push(this.deviceDetails);
                      this.deviceList.push(multiassetlocci[k].assetnum);
                    } else {
                      console.log("Removal Status: Ok!");
                    }
                  } else {
                    console.log("Device Status: Ok!");
                  }
                }
              }
            }
          }
        }
        break;
      }
    }

    // Mandatory Checking for ZUDN
    if (this.worktype === SoTypes.ZUDN) {
      // Validation CT/PT if new main meter install
      // Variables
      var devices = [], newDevice = [];
      var fStatus = [];
      var mm, cm, ct, pt;
      var msg = "<p>", msgTitle = [], msgBody = [];
      // Checking Device Status
      for (var i = 0; i < feeder.length; i++) {
        var multiassetlocci = feeder[i].multiassetlocci;
        if (typeof (multiassetlocci) !== "undefined") {
          devices = []; // Reset
          for (var k = 0; k < multiassetlocci.length; k++) {
            devices.push(multiassetlocci[k]);
          }

          // Checking if have installed new main meter.
          var replaceDevice = devices.filter((item) => {
            // Check new main meter
            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN;
          });

          var existingDevice = devices.filter((item) => {
            return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN;
          });

          if (replaceDevice.length > 0) {
            // Checking device voltage
            for (var m = 0; m < replaceDevice.length; m++) {
              if (replaceDevice[m].ta0devicevoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                // Check new ct transformer
                ct = devices.filter((item) => {
                  return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                });

                if (ct.length < 3) {
                  msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                  msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                } else {
                  if (existingDevice.length > 0) {
                    // Checking device voltage
                    for (var n = 0; n < existingDevice.length; n++) {
                      if (existingDevice[n].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
                        // Reset ct, pt
                        pt = [];
                        // Checking if need to remove ct & pt
                        pt = devices.filter((item) => {
                          return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === true);
                        });

                        if (pt.length < 3) {
                          msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                          msgBody.push("Voltage Transformer (PT) must be remove! <br>");
                        } else {
                          fStatus.push({ "status": true });
                        }
                      } else {
                        fStatus.push({ "status": true });
                      }
                    }
                  } else {
                    fStatus.push({ "status": true });
                  }
                }
              } else if (replaceDevice[m].ta0devicevoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                // Check new ct transformer
                ct = devices.filter((item) => {
                  return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                });

                // Check new pt transformer
                pt = devices.filter((item) => {
                  return item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT;
                });

                if (ct.length === 0) {
                  // if (ct.length < 3 && pt.length < 3) {
                  //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                  //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                  // } else if (ct.length > 0 && pt.length < 3) {
                  //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                  //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                  // } else if (ct.length < 3 && pt.length > 0) {
                  msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                  msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                } else {
                  fStatus.push({ "status": true });
                }
              } else { // OPC
                // Check indicator remove existing main meter
                cm = devices.filter((item) => {
                  return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                });

                // Check indicator remove existing ct transformer
                ct = devices.filter((item) => {
                  return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                });

                // Check indicator remove existing pt transformer
                pt = devices.filter((item) => {
                  return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                });

                if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                  if (feeder[i].nFeederVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // LV
                    if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                    } else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Current Transformer (CT) is not remove! <br>");
                    } else if (cm.length > 0 && ct.length === 0) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter is not remove! <br>");
                    } else {
                      fStatus.push({ "status": true });
                    }
                  } else if (feeder[i].nFeederVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) { // MVHV
                    if (cm.length > 0 && ct.length < 3 && pt.length < 3) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                    } else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                    } else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                    } else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter is not remove! <br>");
                    } else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                    } else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                    } else {
                      fStatus.push({ "status": true });
                    }
                  } else { // OPC
                    if (cm.length > 0 && ct.length <= 3) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                    } else if (cm.length === 0 && ct.length <= 3) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Current Transformer (CT) is not remove! <br>");
                    } else if (cm.length > 0 && ct.length <= 3) {
                      msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                      msgBody.push("Check Meter is not remove! <br>");
                    } else {
                      fStatus.push({ "status": true });
                    }
                  }
                }
              }
            }
            newDevice.push(replaceDevice);
          } else {
            fStatus.push({ "status": true });
          }
        }
      }

      var status = fStatus.filter((item) => {
        return item.status === true;
      });

      if (status.length !== feeder.length) {
        for (var i = 0; i < msgBody.length; i++) {
          msg = msg + msgTitle[i] + msgBody[i];
        }

        msg = msg + "</p>";

        // Display message error
        let alert = this.alertCtrl.create({
          title: "REMINDER",
          message: msg,
          buttons: ["Close"]
        });
        alert.present();
      } else {
        // Display message error
        if (this.deviceList.length > 0) {
          var list = "";
          list = "<p>";
          for (var i = 0; i < this.deviceList.length; i++) {
            list = list + this.deviceList[i] + " - Missing Device Status<br>";
          }
          list = list + "</p>";
          // Display message error
          let alert = this.alertCtrl.create({
            title: "REMINDER",
            message: list,
            buttons: ["Close"]
          });
          alert.present();
          return false;
        } else {
          /** Validation Service Execution */
          this.validationServiceExecution();
          return true;
        }
      }
    } else {
      // Display message error
      if (this.deviceList.length > 0) {
        var list = "";
        list = "<p>";
        for (var i = 0; i < this.deviceList.length; i++) {
          list = list + this.deviceList[i] + " - Missing Device Status<br>";
        }
        list = list + "</p>";
        // Display message error
        let alert = this.alertCtrl.create({
          title: "REMINDER",
          message: list,
          buttons: ["Close"]
        });
        alert.present();
        return false;
      } else {
        /** Validation Service Execution */
        this.validationServiceExecution();
        return true;
      }
    }


  }

  saveFeeder(item) {
    debugger;
    //check network
    console.log("saveFeeder");
    console.log(JSON.stringify(item));

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    debugger;

    // Validation
    if (this.validation()) {

      var itemRecord = {
        ta0feeder: []
      }

      itemRecord.ta0feeder
      //itemRecord.ta0feeder = item.json.ta0feeder;
      console.log('item record :  0 before  :  ' + JSON.stringify(itemRecord));

      //itemRecord.multiassetlocci = null;
      console.log('item record :  0  after  :  ' + JSON.stringify(itemRecord));
      setTimeout(() => {
        this;
        loading.onWillDismiss(() => {
          this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
          this.item.json.loc_ta0feeder_haveChange = true;
          this.gf.displayToast("Feeder Details updated.");
          loading.dismiss();
        });
      }, 10000);

      ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        this.item.json.loc_ta0feeder_haveChange = true;
        this.gf.displayToast("Details updated locally");
        loading.dismiss();
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          if (this.gv.deviceSignal <= data) {
            var itemList = [];
            itemList.push(this.item);
            this.jsonStore.syncUpActivitySingle(itemList).then((success) => {
              this.gf.displayToast("Details updated successfully");
              loading.dismiss();
            }, (failure) => {
              this.gf.warningAlert("Failure", "Details updated failed" + JSON.stringify(failure), "Close");
              loading.dismiss();
            });
          } else {
            this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            this.item.json.loc_ta0feeder_haveChange = true;
            this.gf.displayToast("Details updated locally");
            loading.dismiss();
          }
        });

      } else {
        debugger;
        var itemList = [];
        itemList.push(this.item);
        this.jsonStore.syncUpActivitySingle(itemList).then((success) => {
          this.gf.displayToast("Details updated successfully");
          loading.dismiss();
        }, (failure) => {
          this.gf.warningAlert("Failure", "Details updated failed" + JSON.stringify(failure), "Close");
          loading.dismiss();
        });
      }

    } else {
      loading.dismiss();
    }
  }

  /*
  deleteFeederOption(myEvent) {
  
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("RemoveFeederPage", {
      paramObj: this.object,
    });
  }
  */

  /**
   * Reason   : Section Seal Navigation
   * Created  : Alif (31.01.2019)
   */

  openSealAddDevicesPage(index, deviceVoltage) {
    debugger;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      // Navigate to Seal Add Device Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealAddDevicesPage", {
        paramObj: this.item,
        paramIndex: index,
        deviceVoltage: deviceVoltage
      });
      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openSealRegisterDetailsPage(i, maIndex, modemIndex, simIndex, ctIndex, ptIndex, commIndex) {
    debugger;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      // Navigate to Seal Register Details Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealDeviceRegisterDetailsPage", {
        paramObj: this.item,
        fIndex: i,
        maIndex: maIndex,
        modemIndex: modemIndex,
        simIndex: simIndex,
        ctIndex: ctIndex,
        ptIndex: ptIndex,
        commIndex: commIndex
      });
      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openSealNStickerPage(i, j, alloType, fDesign, vType, from?, serialNum?) {    
    debugger;
    debugger;
    console.log("openSealNStickerPage");
    console.log(i);
    console.log(j);
    console.log(alloType);
    console.log(fDesign);
    console.log(vType);
    console.log(from);
    console.log(serialNum);
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {

      var deviceVoltage = 0;

      if ('N' === vType) {
        deviceVoltage = fDesign.nFeederVoltage;
        console.log("deviceVoltage");
      } else {
        deviceVoltage = fDesign.eFeederVoltage;
        console.log("deviceVoltage");
      }

      // Navigate to Seal Sil & Sticker Info Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealDeviceSilNStickerInfoPage", {
        paramObj: this.item,
        fIndex: i,
        maIndex: j,
        alloType: alloType,
        versionType: vType,
        deviceVoltage: deviceVoltage,
        from: from ? from : '',
        serialNum: serialNum ? serialNum : ''
      });
      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openCtSealPage(fIndex, maIndex, alloType, fDesign, vType) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      var deviceVoltage = 0;
      if ('N' === vType) {
        deviceVoltage = fDesign.nFeederVoltage;
      } else {
        deviceVoltage = fDesign.eFeederVoltage;
      }

      // Navigate to Seal Sil & Sticker Info Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealCtSilInfoPage", {
        paramObj: this.item,
        fIndex: fIndex,
        maIndex: maIndex,
        alloType: alloType,
        versionType: vType,
        deviceVoltage: deviceVoltage,
      });
      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openSealTestListPage(i, j, fDesign, mType, vType) {
    debugger;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      var deviceVoltage = 0;

      if ('N' === vType) {
        deviceVoltage = fDesign.nFeederVoltage;
      } else {
        deviceVoltage = fDesign.eFeederVoltage;
      }

      if (typeof (j) !== "undefined") {
        // Navigate to Seal Test List Page
        let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealDeviceTestListPage", {
          paramObj: this.item,
          fIndex: i,
          maIndex: j,
          feederSet: fDesign,
          meterType: mType,
          versionType: vType,
          deviceVoltage: deviceVoltage
        });
      }

      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openSealLvInspectPage(i, j, v) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      if (typeof (j) !== "undefined") {
        let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealLvInspectPage", {
          paramObj: this.item,
          fIndex: i,
          maIndex: j,
          deviceVoltage: v,
        });
      }

      // Dismiss Loading
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
    console.log("come outin SealLvInspectionPage");
  }

  openSealMvhvInspectPage(i, j) {
    debugger;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      // Checking Current Ratio for ZIST
      // Collection devices. (16-04-2019)
      var devices = [];
      var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
      if (typeof (feeder) !== "undefined") {
        for (var k = 0; k < feeder.length; k++) {
          if (typeof (this.item.json.ta0feeder[k].multiassetlocci) !== "undefined") {
            var multiassetlocci = feeder[k].multiassetlocci;
            for (var m = 0; m < multiassetlocci.length; m++) {
              devices.push(multiassetlocci[m]);
            }
          }
        }
      }

      /**
       * Reason   : Checking SO Type because ZIST do not have exisiting winding group (no current ratio)..
       * Created  : 16/04/2019
       */

      if (this.item.json.worktype === SoTypes.ZIST) {
        var device = devices.filter((item) => {
          return (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN_CT);
        });

        if (device.length > 0) {
          // Navigate to Seal Mvhv Inspect Page
          let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          newRootNav.push("SealMvhvInspectPage", {
            paramObj: this.item,
            fIndex: i,
            maIndex: j
          });
        } else {
          this.gf.warningAlert("WARNING!", "Please install Current Transformer to continue.", "Close");
        }
      } else { // Other than ZIST SO
        // Navigate to Seal Mvhv Inspect Page
        let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealMvhvInspectPage", {
          paramObj: this.item,
          fIndex: i,
          maIndex: j
        });
      }



      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openSealOpcInspectPage(i, j, v) {
    debugger;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      // Navigate to Seal Opc Inspect Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealOpcInspectPage", {
        paramObj: this.item,
        fIndex: i,
        maIndex: j,
        deviceVoltage: v,
      });

      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  openSealCeInspectPage() {
    debugger;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present().then(() => {
      // Navigate to Seal CE Inspect Page
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealCeInspectPage", {
        paramObj: this.item
      });

      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  // openMVHVSealRAS(feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
  //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
  //   newRootNav.push("SealLpcMvhvRasPage", {
  //     paramObj: this.item
  //   });
  // }

  // openSealLpcTestListPage() {
  //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
  //   newRootNav.push("SealLpcMvhvRasPage", {
  //     paramObj: this.item
  //   });
  // }

  // openSealLvTestListPage() {
  //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
  //   newRootNav.push("SealLpcLvRasPage", {
  //     paramObj: this.item
  //   });
  // }

  // openSealPages() {
  //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
  //   newRootNav.push("SealLpcLvRasPage", {
  //     paramObj: this.item
  //   });
  // }

  // openMeterRegisterInfoPage() {
  //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
  //   newRootNav.push("MainMeterRegisterInfoPage", "");
  // }


  // /**
  //  * @deprecated
  //  * because of changing the feeder page design. refer below method openRegisterpage
  //  * @param device 
  //  * @param feederIndex 
  //  * @param multiAssetIndex 
  //  */
  // openDataValidationPage(device, feederIndex, multiAssetIndex) {
  //   //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
  //   var feederDetails = this.item.json.ta0feeder[feederIndex];
  //   var modemVal = null;
  //   var simcardVal = null;
  //   debugger;

  //   for (var multi of feederDetails.multiassetlocci) {
  //     if (DeviceConstants.DEV_ALLOC_MODEM === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
  //       modemVal = multi.assetnum;
  //     }

  //     if (DeviceConstants.DEV_ALLOC_SIM_CARD === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
  //       simcardVal = multi.assetnum;
  //     }

  //     if (modemVal != null && simcardVal != null) {
  //       break;
  //     }
  //   }

  //   console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
  //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
  //   newRootNav.push("RegisterDetailsPage", {
  //     paramObj: this.item,
  //     mLocci: device,
  //     fIndex: feederIndex,
  //     maIndex: multiAssetIndex,
  //     modem: modemVal,
  //     simcard: simcardVal
  //   });
  // }


  /**
     * Reason   : Section LPC Navigation
     * Created  : Alif (31.01.2019)
     */

  openRegisterPage(assetnum, feederIndex, multiAssetIndex, modemVal, simcardVal, modemIndex, simcardIndex, ctIndex, ptIndex) {
    //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    var feederDetails = this.item.json.ta0feeder[feederIndex];
    var device = null;
    debugger;

    console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("RegisterDetailsPage", {
        paramObj: this.item,
        mLocci: feederDetails.multiassetlocci[multiAssetIndex],
        fIndex: feederIndex,
        maIndex: multiAssetIndex,
        modem: modemVal,
        simcard: simcardVal,
        modemIndex: modemIndex,
        simcardIndex: simcardIndex,
        ctIndex: ctIndex,
        ptIndex: ptIndex
      });
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
  }

  /**
   * @tutor shankar
   * @create-date 6-July-2018
   * @param assetnum 
   * @param feederIndex 
   * @param multiAssetIndex 
   * @param modemVal 
   * @param simcardVal 
   * 
   * Method replace the openRegisterPage because design change look like user friendly.
   * Should pass all feedersetdesign to identify which register details to show.
   * 
   */
  openRegisterForAssetPage(feederIndex, feederSetDesign, regPageType) {
    //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
    var feederDetails = this.item.json.ta0feeder[feederIndex];
    var device = null;
    debugger;
    //console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("RegisterDetailsPage", {
      paramObj: this.item,
      fIndex: feederIndex,
      feederSet: feederSetDesign,
      regType: regPageType,
    });
  }

  openLpcTestListPage(feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
    debugger;
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      console.log("come in openLpcTestListPage");
      var feederDetails = this.item.json.ta0feeder[feederIndex];
      debugger;
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      var deviceVoltage = 0;

      if ('N' === versionType) {
        deviceVoltage = feederSetDesign.nFeederVoltage;
      } else {
        deviceVoltage = feederSetDesign.eFeederVoltage;
      }

      newRootNav.push("LpcTestListPage", {
        paramObj: this.item,
        fIndex: feederIndex,
        maIndex: multiAssetIndex,
        feederSet: feederSetDesign,
        meterType: meterType,
        versionType: versionType,
        deviceVoltage: deviceVoltage
      }); //ts file class 
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
    console.log("come out openLpcTestListPage");
  }

  openLpcMvhvInspectPage(i, j) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("LpcMvhvInspectPage", {
        paramObj: this.item,
        fIndex: i,
        maIndex: j
      });
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);

    // }, 500);
    console.log("come outin LpcMvhvInspectionPage");
  }

  openLpcLvInspectPage(i, j) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("LpcLvInspectPage", {
        paramObj: this.item,
        fIndex: i,
        maIndex: j
      });
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
    console.log("come outin LpcLvInspectionPage");
  }

  openSilStickerInfoPage(i, j, t, feederSetDesign, versionType) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      var deviceVoltage = 0;

      if ('N' === versionType) {
        deviceVoltage = feederSetDesign.nFeederVoltage;
      } else {
        deviceVoltage = feederSetDesign.eFeederVoltage;
      }

      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SilStickerInfoPage", {
        paramObj: this.item,
        fIndex: i,
        maIndex: j,
        alloType: t,
        versionType: versionType,
        deviceVoltage: deviceVoltage
      });
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
  }

  goToServiceDetailsPage() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("SealServiceDetailsPage", this.item);
    //this.navCtrl.pop();
  }

  openDailyMaintenanceReport(i, j, simIndex) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
      newRootNav.push('DailyMaintenanceReport', {
        paramObj: this.item,
        fIndex: i,
        maIndex: j,
        simIndex: simIndex
      });
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
    console.log("open Maintaince Report");
  }

  // Created by Ameer (16/10/2018)
  openOPCInspectionPage(i, j, deviceVoltage) {
    debugger;
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("OpcTestInspectPage", {
      paramObj: this.item,
      fIndex: i,
      maIndex: j,
      deviceVoltage: deviceVoltage
    });
  }

  goToAddDevicesPage(index, deviceVoltage) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      console.log('device voltage : ' + deviceVoltage);
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealAddDevicesPage", {
        paramObj: this.item,
        paramIndex: index,
        deviceVoltage: deviceVoltage
      });
      loading.dismiss();
    });
    this.gf.loadingTimer(loading);
    // }, 500);
  }

  goToRemoveDevicesPage(index, deviceVoltage) {
    this.gf.setLoadingTimeout(1000);
    setTimeout(() => {
      console.log('device voltage : ' + deviceVoltage);
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("SealAddDevicesPage", {
        paramObj: this.item,
        paramIndex: index,
        deviceVoltage: deviceVoltage
      });
    }, 500);
  }

  goBack() {
    this.navCtrl.pop();
  }

  goHomePage() {
    console.log("image click");
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("WoHomePage", this.item);
  }

  lookup() {

  }

  /**
  * Trigger AllocationType
  */
  triggerAllocationType() {
    debugger;
    var type = this.item.json.worktype;
    var old_voltage = this.item.json.ta0installationvoltage;
    var new_voltage = this.item.json.ta0newvoltage;
    if (type === SoTypes.ZIST || type === SoTypes.ZINL || type === SoTypes.ZRPC) {
      if (old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) {
        this.item.json.loc_allocationtype_status = true;
      } else {
        this.item.json.loc_allocationtype_status = false;
      }
    } else {
      if ((old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) || (old_voltage <= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV)) {
        this.item.json.loc_allocationtype_status = true;
      } else {
        this.item.json.loc_allocationtype_status = false;
      }
    }
  }

  /** 
   * Validaton Service Execution
   * Created : Muhd Alif Tajudin
   * Date    : 01/10/2018
   */
  validationServiceExecution() {
    debugger;
    var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
    if (typeof (feeder) !== "undefined") {
      var pending = [];
      for (var i = 0; i < feeder.length; i++) {
        if (typeof (feeder[i].feederSetDesign) !== "undefined") {
          /** Checking SO */
          if (this.item.json.worktype === SoTypes.ZIST) {
            if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
              if (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true) {
                pending.push(feeder[i]);
              }
            }
          } else {
            if (this.item.json.worktype === SoTypes.ZUDN) {
              if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                pending.push(feeder[i]);
              }
            } else if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
              if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                pending.push(feeder[i]);
              }
            }
          }
        }
      }

      console.log("PENDING: " + JSON.stringify(pending));

      if (pending.length > 0) {
        var message = "";
        message = "<p>";
        for (var i = 0; i < pending.length; i++) {
          /** Checking SO for ZIST (Only Have New Section) */
          if (this.item.json.worktype === SoTypes.ZIST) {
            if (pending[i].feederSetDesign[0].nFeederStatus === false && pending[i].loc_haveNewDevice === true) {
              message = message + "Please complete " + pending[i].description + " - " + pending[i].ta0feedercode + "!<br>";
            }
          } else {
            if (pending[i].feederSetDesign[0].eFeederStatus === false) {
              message = message + "Please complete " + pending[i].description + " - " + pending[i].ta0feedercode + "!<br>";
            } else if (pending[i].feederSetDesign[0].nFeederStatus === false && pending[i].loc_haveNewDevice === true) {
              message = message + "Please complete " + pending[i].description + " - " + pending[i].ta0feedercode + "!<br>";
            }
          }
        }
        message = message + "</p>";
        // Display message error
        let alert = this.alertCtrl.create({
          title: "REMINDER",
          message: message,
          buttons: ["Close"]
        });
        alert.present();
      }

    }
  }

  /**
  * Refresh Work Order Service Execution Details
  * Created : Muhd Alif Tajudin
  * Date    : 16/10/2018
  */
  // Scroll the page to top...
  scrollToTop() {

  }

  // Refresh Header Details..
  // Edited: alif - 02-01-2019
  doRefresh(refresher) {

    // Check dirty for the workorder..
    this.jsonStore.getDirtyCheck(this.item, Domains.LPCWORKORDER).then((result: any) => {

      if (result > 0) {

        setTimeout(() => {
          refresher.complete();
          this.gf.displayToast("Feeder details changed doesn't updated, can't refresh details...");
        }, 1000);
      }
      else {

        if (!this.gv.testMobile) {
          this.requestWorkOrderServiceExecutionDetails();
          refresher.complete();
        }
        else {
          refresher.complete();
          this.gf.displayToast("No Network Connection to Sync data...");
        }
      }
    });
  }

  // Retrigger to server to get work order service execution details.
  requestWorkOrderServiceExecutionDetails() {
    var wonum = JSON.parse(this.item.json.wonum);
    var respResult: any;
    var updatedDetails: any;

    // Start loading.
    this.gf.startLoading();
    this.dataService.fetchWorkOrderFeederDetails(Domains.DATA_FETCH_ASSIGNWORK, wonum).then((results) => {
      debugger;
      setTimeout(() => {
        respResult = results;
        debugger;
        if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
          updatedDetails = JSON.parse(respResult.respObject);
          updatedDetails = updatedDetails.workOrder[0].ta0feeder;

          if (typeof (updatedDetails) !== "undefined" && updatedDetails !== null && updatedDetails !== '') {
            // Reset List Device
            this.item.json.listDevice = [];
            // Reset Controlling Device to empty.
            this.item.json.loc_controllingDeviceList = [];

            this.deviceDetails = {};
            for (let feederArr of updatedDetails) {
              this.loadFeederDesign(feederArr);
            }

            this.item.json.ta0feeder = updatedDetails;
            this.item.json.ta0feeder.sort(this.gf.dynamicSort("description"));
          } else {
            // Remove existing feeder
            this.item.json.ta0feeder = updatedDetails;
          }
          // Replace Updated Data in JSON
          this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

          // this.gf.displayToast(respResult.description);
        } else {
          this.gf.displayToast(respResult.description);
        }
        // Clear loading and refresh pull down.
        this.gf.stopLoading();
      }, 1000);
    });
  }

}
