import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController } from "ionic-angular";
import { PopoverController, AlertController } from 'ionic-angular';
import "rxjs/add/operator/map";
import { FeederDetails } from "../../../pojo/FeederDetails";
import { MultiAssetLocci } from "../../../pojo/MultiAssetLocci";
import { Domains } from "../../../pojo/commonEnum/Domains";
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { SoTypes } from "../../../pojo/commonEnum/SoTypes";
import { DeviceConstants } from "../../../pojo/commonEnum/DeviceConstants";
import { FunctionClass } from "../../../pojo/commonEnum/FunctionClass";
import { GlobalFunction } from "../../../providers/common/global-function";
import { GlobalVars } from "../../../providers/common/global-vars";
import { FeederSetDesign } from "../../../pojo/design/feederSetDesign";
import { SealInfo } from "../../../pojo/SealInfo";

declare var cordova: any;

/**
 * Generated class for the ServiceExecutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-service-execution",
  templateUrl: "service-execution.html"
})
export class ServiceExecutionPage {

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

  //Local Variable Created By Ameer -27/11/2019
  public tempFeederArry: any = [];
  public countArry: number = 0;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public appCtrl: App,
    public params: NavParams,
    public toastCtrl: ToastController,
    private jsonStore: JsonStoreCrudProvider,
    private dataService: DataServiceProvider,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    public loadingCtrl: LoadingController) {
      debugger;
      console.log("ServiceExecutionPage >>> constructor");
      //console.log("ServiceExecutionPage >>> item : "+JSON.stringify(this.item));
    this.item = this.params.data;
    console.log("ServiceExecutionPage >>> trigger this.loadAdhocCheck");
    this.loadAdhocCheck();
    console.log("ServiceExecutionPage >>> trigger this.wolo1FreezeCheck");
    this.wolo1FreezeCheck();

    // Retrigger
    // this.gf.loadLookup('menu');
    
    this.worktype = this.item.json.worktype;
    //console.log("ServiceExecutionPage >>> worktype : "+JSON.stringify(this.item.json.worktype));
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

      // Reset List Device
      this.item.json.listDevice = [];
      // Reset Controlling Device to empty.
      this.item.json.loc_controllingDeviceList = [];

      this.deviceDetails = {};
      this.tempFeederArry = this.item.json.ta0feeder;
      for (let feederArr of this.item.json.ta0feeder) {
        // checking multiassetlocci
        if (typeof (feederArr.multiassetlocci) !== "undefined" && feederArr.multiassetlocci !== null && feederArr.multiassetlocci !== "") {
          // Setting default value for feeder checking.
          feederArr.loc_feederInd = false;
          this.loadFeederDesign(feederArr);
        }
      }
    } else {
      // Reset List Device
      this.item.json.listDevice = [];
      // Reset Controlling Device to empty.
      this.item.json.loc_controllingDeviceList = [];
    }

    // Replace Updated Data in JSON
    this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
    console.log("ServiceExecutionPage >>> this.item "+JSON.stringify(this.item));
  }

  ionViewWillEnter() {
    console.log("enter ionViewWillEnter to search & update local data..");
    this.countArry = 0;
    this.item = this.params.data;

    var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.item.json.wonum);
    this.jsonStore.getSearchRecord(Domains.LPCWORKORDER, queryPart, 0).then(result => {

      console.log("enter local data to update..");
      this.item = JSON.parse(JSON.stringify(result[0]));

      this.loadAdhocCheck();
      this.wolo1FreezeCheck();

      // Retrigger
      // this.gf.loadLookup('menu');

      this.worktype = this.item.json.worktype;

      // Trigger AllocationType
      this.item.json.loc_allocationtype_status = false;

      // SOType = ZUDN
      this.deviceDetails = new MultiAssetLocci();
      // Read is remove device is exist in json..
      if (this.item.json.hasOwnProperty('ta0removedevice')) {
        this.listRemoveDevice = this.item.json.ta0removedevice;
      }
      console.log(JSON.stringify(this.item));

      if (typeof (this.item.json.ta0feeder) != 'undefined' && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== '') {
        //this.feederSetArray = [];
        // console.log("BEFORE: " + JSON.stringify(this.item.json.ta0feeder));
        this.item.json.ta0feeder.sort(this.gf.dynamicSort("description"));
        // console.log("AFTER: " + JSON.stringify(this.item.json.ta0feeder));

        // Reset List Device
        this.item.json.listDevice = [];
        // Reset Controlling Device to empty.
        this.item.json.loc_controllingDeviceList = [];

        this.deviceDetails = {};
        this.tempFeederArry = this.item.json.ta0feeder;
        for (let feederArr of this.item.json.ta0feeder) {
          // checking multiassetlocci
          if (typeof (feederArr.multiassetlocci) !== "undefined" && feederArr.multiassetlocci !== null && feederArr.multiassetlocci !== "") {
            // Setting default value for feeder checking.
            feederArr.loc_feederInd = false;
            this.loadFeederDesign(feederArr);
          }
        }
      } else {
        // Reset List Device
        this.item.json.listDevice = [];
        // Reset Controlling Device to empty.
        this.item.json.loc_controllingDeviceList = [];
      }

      // Replace Updated Data in JSON
      this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
      console.log("ServiceExecutionPage >>> this.item "+JSON.stringify(this.item));
    });
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
    debugger;
    // Reset New Device Display Section
    feederArr.loc_haveNewDevice = false;
    feederArr.loc_removeAllDevice = false;
    

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
          var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
          switch (key) {
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN:
            case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN:
              feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
              feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
              feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
              feederSetDesign.nMeterIndex = i;
              feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
              feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
              feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
              feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
              feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
              voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
              feederArr.loc_haveNewDevice = true;
              // Trigger AllocationType 90
              if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                this.triggerAllocationType();
              }
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_MD:
            case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD:
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
            case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM:
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
            case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK:
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
            case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD:
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
            case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM:
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
            case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT:
              if (feederSetDesign.soWorkType === SoTypes.ZIST && this.item.json.ta0sncode === "D101") {
                if (ctCount === 0) {
                  feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtRIndex = i;
                  feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  ctCount++;
                } else if (ctCount === 1) {
                  feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtYIndex = i;
                  feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  ctCount++;
                } else {
                  feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterCtBIndex = i;
                  feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  ctCount++;
                }
              } else {
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
              }
              break;
            case DeviceConstants.BCRM_NEW_INDICATOR_MAIN_PT:
            case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT:
              // Only for ZIST (Install Check Meter)
              if (feederSetDesign.soWorkType === SoTypes.ZIST && this.item.json.ta0sncode === "D101") {
                if (ptCount === 0) {
                  feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtRIndex = i;
                  feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  ptCount++;
                } else if (ptCount === 1) {
                  feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtYIndex = i;
                  feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  ptCount++;
                } else {
                  feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                  feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                  feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                  feederSetDesign.nMeterPtBIndex = i;
                  feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                  feederSetDesign.nMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                  feederArr.loc_haveNewDevice = true;
                  ptCount++;
                }
              } else {
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
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) || feederSetDesign.nMeterSilStatus === "Y") &&
              ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) || feederSetDesign.nCheckSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          } else {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) || feederSetDesign.nMeterSilStatus === "Y") &&
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
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) || feederSetDesign.nMeterSilStatus === "Y") &&
              ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) || feederSetDesign.nCheckSilStatus === "Y") &&
              (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
              (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
              feederSetDesign.nFeederStatus = true;
            } else {
              feederSetDesign.nFeederStatus = false;
            }
          } else {
            if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) || feederSetDesign.nMeterSilStatus === "Y") &&
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
            console.log("Upload Indicator : "+key);
            switch (key) {
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN:
                feederSetDesign.eMeter = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eMeterIndex = i;
                feederSetDesign.eMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
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

                /**
                 * Description: ZMMR only check meter
                 * Created    : 10.09.2019
                 */
                if (this.worktype === 'ZMMR') {
                  // checking if empty/undefined/null, else just skip it.
                  if (typeof (feederArr.eFeederVoltage) === "undefined" && feederArr.eFeederVoltage === null && feederArr.eFeederVoltage === "") {
                    feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
                  }
                } else {
                  feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
                }
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
                feederSetDesign.eMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
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
              case DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK:
                feederSetDesign.eCheck = feederArr.multiassetlocci[i].assetnum;
                feederSetDesign.eCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                feederSetDesign.eCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                feederSetDesign.eCheckIndex = i;
                feederSetDesign.eCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
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

                /**
                 * Description: ZMMR only check meter
                 * Created    : 10.09.2019
                 */
                if (this.worktype === 'ZMMR') {
                  // searching check meter.
                  feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
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
              case DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT:
                debugger;
                if (ctECount === 0) {
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
                } else if (ctECount === 1) {
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
                } else {
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
              /**
               * Reason   : Set default meter testing status to "Y" for ZINL.
               * Created  : 22-02-2019 (Alif)
               */
              // Existing Main Modem
              if (typeof (feederSetDesign.eMeterModemTestStatus) !== "undefined") {
                if (feederSetDesign.eMeterModemTestStatus === "N") {
                  feederSetDesign.eMeterModemTestStatus = "Y";
                }
              }

              // Existing Check Modem
              if (typeof (feederSetDesign.eCheckModemTestStatus) !== "undefined") {
                if (feederSetDesign.eCheckModemTestStatus === "N") {
                  feederSetDesign.eCheckModemTestStatus = "Y";
                }
              }


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
            } else if (this.worktype === SoTypes.ZMMR) { // Checking for ZMMR
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
                  if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) {
                    feederSetDesign.nFeederStatus = true;
                  } else {
                    feederSetDesign.nFeederStatus = false;
                  }
                }

                if (feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) {
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

      if (feederSetDesign.soWorkType === SoTypes.ZIST && typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
        feederSetDesign.nFeederVoltage = voltage;
      }

      /**
       * Reason   : Change indicator for ZUDN remove all device.
       * Created  : Alif (02.12.2019)
       */

      if (feederSetDesign.soWorkType === SoTypes.ZUDN) {
        // set default value
        feederArr.loc_removeAllDevice = false;
        this.tempFeederArry[this.countArry].loc_removeAllDevice = false;
        var oriDevices: any, tempDevices: any;

        if (typeof (feederArr.multiassetlocci) !== "undefined") {
          oriDevices = [];

          oriDevices = feederArr.multiassetlocci.filter((item) => {
            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_MD) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_SIM) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_MD) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_SIM) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_COMM) {
              return item;
            }

            if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK_COMM) {
              return item;
            }
          });

          tempDevices = feederArr.multiassetlocci.filter((item) => {
            return item.ta0removeind === true;
          });

          if (tempDevices.length > 0) {
            // do comparison checking
            if (oriDevices.length === tempDevices.length) {
              feederArr.loc_removeAllDevice = true;
              this.tempFeederArry[this.countArry].loc_removeAllDevice = true;
            } else {
              feederArr.loc_removeAllDevice = false;
              this.tempFeederArry[this.countArry].loc_removeAllDevice = false;
            }
          }
        }
      }

      console.log('feeder set  : ' + JSON.stringify(feederSetDesign));
      feederArr.feederSetDesign.push(feederSetDesign);

      if (feederSetDesign.soWorkType === SoTypes.ZIST) {
        this.tempFeederArry[this.countArry].nMeterSerialNum = feederSetDesign.nMeterSerialNum;
        this.tempFeederArry[this.countArry].nFeederVoltage = feederSetDesign.nFeederVoltage;
        if (feederSetDesign.nMeterAllocationType === '90') {
          this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
        } else if (feederSetDesign.nMeterAllocationType === '91') {
          this.tempFeederArry[this.countArry].nMeterAllocationName = "Feeder Meter";
        } else if (feederSetDesign.nMeterAllocationType === '94') {
          this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Meter";
        } else if (feederSetDesign.nMeterAllocationType === '96') {
          this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Feeder Meter";
        } else {
          this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
        }
      } else if (feederSetDesign.soWorkType === SoTypes.ZISR || feederSetDesign.soWorkType === SoTypes.ZRCE
        || feederSetDesign.soWorkType === SoTypes.ZRPC || feederSetDesign.soWorkType === SoTypes.ZSRO
        || feederSetDesign.soWorkType === SoTypes.ZINL || feederSetDesign.soWorkType === SoTypes.ZMMR
        || feederSetDesign.soWorkType === SoTypes.ZRMV || feederSetDesign.soWorkType === SoTypes.ZINR) {
        /** 
         * Description: Checking condition for ZMMR:Check Meter only
         * Created: Alif (06.02.2020) 
         */
        if (typeof (feederSetDesign.eFeederVoltage) !== "undefined" && feederSetDesign.eFeederVoltage !== null) {
          this.tempFeederArry[this.countArry].eFeederVoltage = feederSetDesign.eFeederVoltage;
        }

        this.tempFeederArry[this.countArry].eMeterSerialNum = feederSetDesign.eMeterSerialNum;
        if (feederSetDesign.eMeterAllocationType === '90') {
          this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
        } else if (feederSetDesign.eMeterAllocationType === '91') {
          this.tempFeederArry[this.countArry].eMeterAllocationName = "Feeder Meter";
        } else if (feederSetDesign.eMeterAllocationType === '94') {
          this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Meter";
        } else if (feederSetDesign.eMeterAllocationType === '96') {
          this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Feeder Meter";
        } else {
          this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
        }
      } else if (feederSetDesign.soWorkType === SoTypes.ZUDN) {
        if (feederArr.loc_haveNewDevice == true) {
          if (typeof (feederSetDesign.nMeterSerialNum) !== 'undefined') {
            this.tempFeederArry[this.countArry].nMeterSerialNum = feederSetDesign.nMeterSerialNum;
            if (feederSetDesign.eMeterAllocationType === '90') {
              this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
            } else if (feederSetDesign.eMeterAllocationType === '91') {
              this.tempFeederArry[this.countArry].nMeterAllocationName = "Feeder Meter";
            } else if (feederSetDesign.eMeterAllocationType === '94') {
              this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Meter";
            } else if (feederSetDesign.eMeterAllocationType === '96') {
              this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Feeder Meter";
            } else {
              this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
            }
          } else {
            this.tempFeederArry[this.countArry].eMeterSerialNum = feederSetDesign.eMeterSerialNum;
            if (feederSetDesign.eMeterAllocationType === '90') {
              this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
            } else if (feederSetDesign.eMeterAllocationType === '91') {
              this.tempFeederArry[this.countArry].eMeterAllocationName = "Feeder Meter";
            } else if (feederSetDesign.eMeterAllocationType === '94') {
              this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Meter";
            } else if (feederSetDesign.eMeterAllocationType === '96') {
              this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Feeder Meter";
            } else {
              this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
            }
          }
        } else if (feederArr.loc_haveNewDevice == false) {
          this.tempFeederArry[this.countArry].eMeterSerialNum = feederSetDesign.eMeterSerialNum;
          if (feederSetDesign.eMeterAllocationType === '90') {
            this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
          } else if (feederSetDesign.eMeterAllocationType === '91') {
            this.tempFeederArry[this.countArry].eMeterAllocationName = "Feeder Meter";
          } else if (feederSetDesign.eMeterAllocationType === '94') {
            this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Meter";
          } else if (feederSetDesign.eMeterAllocationType === '96') {
            this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Feeder Meter";
          } else {
            this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
          }
        }
      }

      /**
       * Description  : Correction eFeederVoltage/nFeederVoltage for Header Section
       * Created      : Alif (07.02.2020)
       */
      if (typeof (this.tempFeederArry[this.countArry].eFeederVoltage) === "undefined" || this.tempFeederArry[this.countArry].eFeederVoltage === null || this.tempFeederArry[this.countArry].eFeederVoltage === "") {
        this.tempFeederArry[this.countArry].eFeederVoltage = this.gv.departmentCode;
      }

      if (this.tempFeederArry[this.countArry].loc_haveNewDevice === true) {
        if (typeof (this.tempFeederArry[this.countArry].nFeederVoltage) === "undefined" || this.tempFeederArry[this.countArry].nFeederVoltage === null || this.tempFeederArry[this.countArry].nFeederVoltage === "") {
          this.tempFeederArry[this.countArry].nFeederVoltage = this.gv.departmentCode;
        }
      }

      this.object = feederSetDesign;
    } else {
      feederArr.nFeederVoltage = this.gv.departmentCode;
      feederArr.eFeederVoltage = this.gv.departmentCode;
    }

    // Counter Indicator
    this.countArry++;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServiceExecutionPage");
  }

  toggleSection(index) {
    this.item.json.ta0feeder[index].open = !this.item.json.ta0feeder[index].open;
  }

  toggleItem(index, j) {
    this.item.json.ta0feeder[index].children[j].open = !this.item.json
      .ta0feeder[index].children[j].open;
  }

  addFeeder() {
    console.log("add feeder .");
    this.feederDetails = new FeederDetails();
    this.feederDetails.description = "Feeder Set";
    this.feederDetails.ta0feedercode = new Date().getUTCMilliseconds().toString();
    // For adding new feeder change ta0existing = false.
    this.feederDetails.ta0existing = false;

    //var voltage = this.item.json.ta0newvoltage >= 4 ? '04' : '03';
    var voltage = this.gv.departmentCode;
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

            /**
             * Reason   : Saving to local storage (json data).
             * Created  : 22-01-2019
             */
            this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

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
                  } else {
                    this.gf.warningAlert('Failed', res.description, 'Close');
                    loading.dismiss();
                  }
                });
            }
            else {
              /**
               * Description : Condition to different it feeder which is existing in maximo or in locally.
               * Created     : Alif (23.08.2019)
               */
              if (typeof (this.item.json.ta0feeder[i].ta0feederid) === "undefined") {
                this.item.json.ta0feeder.splice(i, 1);
              } else {
                this.item.json.ta0feeder[i]._action = "Delete";
              }

              console.log(JSON.stringify(this.item.json.ta0feeder[i]));

              this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
              this.gf.displayToast('Deleted feeder is locally updated.');
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
                  this.deviceList.push(multiassetlocci[k].assetnum);
                } else {
                  // Checking if device status "ZREM"
                  if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                    // Checking removal status is empty or not
                    if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
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
                  this.deviceList.push(multiassetlocci[k].assetnum);
                } else {

                  // Checking if device status "ZREM"
                  if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                    // Checking removal status is empty or not
                    if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
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
                  this.deviceList.push(multiassetlocci[k].assetnum);
                } else {
                  // Checking if device status "ZREM"
                  if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                    // Checking removal status is empty or not
                    if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "") {
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
    //check network
    console.log("saveFeeder");
    console.log(JSON.stringify(item));

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);
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

      /**
       * Reason   : Saving to local storage (json data).
       * Created  : 22-01-2019
       */
      this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);

      ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        this.item.json.loc_ta0feeder_haveChange = true;
        this.gf.displayToast("Details updated locally");
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

  openMeterRegisterInfoPage() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("MainMeterRegisterInfoPage", "");
  }


  /**
   * @deprecated
   * because of changing the feeder page design. refer below method openRegisterpage
   * @param device 
   * @param feederIndex 
   * @param multiAssetIndex 
   */
  openDataValidationPage(device, feederIndex, multiAssetIndex) {
    //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
    var feederDetails = this.item.json.ta0feeder[feederIndex];
    var modemVal = null;
    var simcardVal = null;
    for (var multi of feederDetails.multiassetlocci) {
      if (DeviceConstants.DEV_ALLOC_MODEM === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
        modemVal = multi.assetnum;
      }

      if (DeviceConstants.DEV_ALLOC_SIM_CARD === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
        simcardVal = multi.assetnum;
      }

      if (modemVal != null && simcardVal != null) {
        break;
      }
    }

    console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("RegisterDetailsPage", {
      paramObj: this.item,
      mLocci: device,
      fIndex: feederIndex,
      maIndex: multiAssetIndex,
      modem: modemVal,
      simcard: simcardVal
    });
  }


  /**
   * @deprecated
   * @deprecated-date 6-July-2018
   * @param assetnum 
   * @param feederIndex 
   * @param multiAssetIndex 
   * @param modemVal 
   * @param simcardVal 
   * 
   * -- future can use below funtion for find register details to display,method name openRegisterForAssetPage 6-July-2018
   */

  //  Testing Purpose only open register details page for Seal
  openRegisterDetails2() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("SealRegisterDetailsPage", {
      paramObj: this.item
    });
  }

  // Open page for Seal N Sticker Testing only
  openSealNSticker() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("SealSilNStickerInfoPage", {
      paramObj: this.item
    });
  }

  //Open Test Page Seal
  openTestPageSeal() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("SealTestListPage", {
      paramObj: this.item
    });
  }

  openRegisterPage(assetnum, feederIndex, multiAssetIndex, modemVal, simcardVal, modemIndex, simcardIndex, ctIndex, ptIndex) {
    var feederDetails = this.item.json.ta0feeder[feederIndex];
    var device = null;

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
    //console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("RegisterDetailsPage", {
      paramObj: this.item,
      fIndex: feederIndex,
      feederSet: feederSetDesign,
      regType: regPageType,
    });
  }

  /**
  * @tutor ieka
  * @create-date 11-July-2018
  * @param feederIndex 
  * @param multiAssetIndex 
  * @param feederSetDesign 
  * @param meterType 
  * @param versionType 
  * 
  * This method to test all meter,check and modem.
  * feederIndex pass feeder index.
  * multiAssetIndex for nmter index
  * feederSetDesign for modem index
  * meterType to check this device for Main or Check
  * versionType to check this device New or Existing
  */

  openMVHVSealRAS(feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("SealLpcMvhvRasPage", {
      fIndex: feederIndex,
      maIndex: multiAssetIndex,
      feederSet: feederSetDesign,
      meterType: meterType,
      versionType: versionType
    });
    console.log("MVHV_RAS_SEAL page open");
  }

  openLpcTestListPage(feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
    // this.gf.setLoadingTimeout(1000);
    // setTimeout(() => {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present().then(() => {
      console.log("come in openLpcTestListPage");
      var feederDetails = this.item.json.ta0feeder[feederIndex];
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
      }).then(() => {
        loading.dismiss();
      });
    });
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
      newRootNav.push("CtSilInfoPage", {
        paramObj: this.item,
        fIndex: fIndex,
        maIndex: maIndex,
        alloType: alloType,
        versionType: vType,
        deviceVoltage: deviceVoltage,
        deviceStatus: 'new'
      });
      // Dismiss Loading
      loading.dismiss();
    });

    this.gf.loadingTimer(loading);
  }

  goToServiceDetailsPage() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("ServiceDetailsPage", this.item);
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
      newRootNav.push("AddDevicesPage", {
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
      newRootNav.push("AddDevicesPage", {
        paramObj: this.item,
        paramIndex: index,
        deviceVoltage: deviceVoltage
      });
    }, 500);
  }

  goBack() {
    this.navCtrl.pop();
  }

  /**
  * Trigger AllocationType
  */
  triggerAllocationType() {
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

  // Refresh Header Details..
  // Edited: alif - 02-01-2019
  doRefresh(refresher) {
    // Check dirty for the workorder..
    this.jsonStore.getDirtyCheck(this.item, Domains.LPCWORKORDER).then((result) => {

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
      setTimeout(() => {
        respResult = results;
        if (DeviceConstants.RESP_SUCCESS_MSG === respResult.processStatus) {
          updatedDetails = JSON.parse(respResult.respObject);
          updatedDetails = updatedDetails.workOrder[0].ta0feeder;

          if (typeof (updatedDetails) !== "undefined" && updatedDetails !== null && updatedDetails !== '') {
            // Reset List Device
            this.item.json.listDevice = [];
            // Reset Controlling Device to empty.
            this.item.json.loc_controllingDeviceList = [];

            this.deviceDetails = {};
            this.tempFeederArry = updatedDetails;
            this.countArry = 0;
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
