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
 * Generated class for the SilStickerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-seal-device-sil-sticker-info',
  templateUrl: 'seal-device-sil-sticker-info.html',
})
export class SealDeviceSilNStickerInfoPage {
  // Declare Variables for Params
  item: any;
  fIndex: number;
  maIndex: number;
  alloType: string;

  // Clone Data
  itemOri: any;

  // Validation
  public validateInput: boolean = true;
  public check: boolean = true;

  public showMainMeter: boolean = false;
  public showLvFields: boolean = false;
  public showLvExtraFields: boolean = false;
  public showMvHvFields: boolean = false;
  public showOpcFields: boolean = false;

  public newterminalcover1  = new SealInfo();
  public newterminalcover2  = new SealInfo();
  public newmetercover1  = new SealInfo();
  public newmetercover2  = new SealInfo();
  public newmetercover3  = new SealInfo();    
  public newmdbutton  = new SealInfo();
  public newopticaleyecover  = new SealInfo();
  public newmeterbattery  = new SealInfo();
  public newcommmodule  = new SealInfo();

  public sealInfoArray = [];
  //seal
  public meterCoverArray = [];
  // public meterConditionArray = [];
  public terminalCoverArray = [];
  // public terminalConditionsArray = [];
  public fuseArray = [];
  public mdButtonArray = [];
  public meterBatteryArray = [];
  public opticalEyeArray = [];
  public commModuleArray = [];

  //sticker
  public sterminalCoverArray = [];
  // public stickerSafetyArray = [];
  public sfuseArray = [];

  //other seal
  public ttbArray = [];
  public ptChamberArray = [];
  public ctChamberArray = [];
  public ptSecondaryFuseArray = [];
  public meterKioskArray = [];
  public meterTestBoxArray = [];
  public terminalBoxArray = [];
  public marshallingBoxArray = [];
  public ctPanelArray = [];
  public panelMeterArray = [];
  public terminalCtArray = [];
  public modemArray = [];

  //other sticker
  public sttbArray = [];
  public sptChamberArray = [];
  public sctChamberArray = [];
  public sptSecondaryFuseArray = [];
  public smeterKioskArray = [];
  public smeterTestBoxArray = [];
  public sterminalBoxArray = [];
  public smarshallingBoxArray = [];
  public sctPanelArray = [];
  public spanelMeterArray = [];
  public sterminalCtArray = [];
  public smodemArray = [];
  public hideRemarks: boolean;

  public terminalCtRedArray = []
  public terminalCtYellowArray = []
  public terminalCtBlueArray = []


  public stickerInfoArray = [];
  versionType: string;
  deviceVoltage: any;

  //seal
  showAddMeterCover: boolean = true;
  showAddMeterConditions: boolean = true;
  showAddTerminalCover: boolean = true;
  showAddTerminalConditions: boolean = true;
  showAddFuse: boolean = false;
  showAddMdButton: boolean = false;
  showAddMeterBattery: boolean = false;
  showAddOpticalEye: boolean = false;

  //sticker
  showAddSterminalCover: boolean = true;
  showAddSfuse: boolean = true;
  showsafetySticker: boolean = true;

  //nonseal
  showAddTtb: boolean = true;
  showAddPtChamber: boolean = true;
  showAddCtChamber: boolean = true;
  showAddPtSecondaryFuse: boolean = true;
  showAddMeterKiosk: boolean = true;
  showAddMeterTestBox: boolean = true;
  showAddTerminalBox: boolean = true;
  showAddMarshallingBox: boolean = true;
  showAddCtPanel: boolean = true;
  showAddPanelMeter: boolean = true;
  showAddTerminalCt: boolean = true;
  showAddModem: boolean = true;

  //nonsticker
  showAddSttb: boolean = true;
  showAddSptChamber: boolean = true;
  showAddSctChamber: boolean = true;
  showAddSptSecondaryFuse: boolean = true;
  showAddSmeterKiosk: boolean = true;
  showAddSmeterTestBox: boolean = true;
  showAddSterminalBox: boolean = true;
  showAddSmarshallingBox: boolean = true;
  showAddSctPanel: boolean = true;
  showAddSpanelMeter: boolean = true;
  showAddSterminalCt: boolean = true;
  showAddSmodem: boolean = true;

  options: BarcodeScannerOptions;

  // Hide/Show Variables
  showSealNo: boolean = true;
  showStickerNo: boolean = true;
  showOtherSealNo: boolean = true;
  showOtherStickerNo: boolean = true;

  // Hide Sticker & Other Sticker (17/12/2018)
  showSticker: boolean = false;

  // Seal Variables
  public safetySticker: any;
  public meterTerminal: any;
  public meterCover: any;
  public fuse: any;
  public ttb: any;
  public meterPanel: any;
  public ctPanel: any;
  public ctTerminal: any;
  public sc: any;
  public rr: any; //CR002 Crimpless Seal CR

  public refSegment: String = "before";
  public segmentSection: boolean = false;

  public ta0naremarks_before: any;
  public ta0naremarks_after: any;

  public disableBefore: boolean;
  public disableAfter: boolean;

  public from: any;
  public terminalCTArray = []
  public assetNum: any;
  public indexof: any;

  constructor(public navCtrl: NavController, public params: NavParams, public toastCtrl: ToastController,
    public gf: GlobalFunction, private dataService: DataServiceProvider, private jsonStore: JsonStoreCrudProvider,
    public loadingCtrl: LoadingController, private gv: GlobalVars,
    private barcodeScanner: BarcodeScanner, private alertCtrl: AlertController,
    private toast: Toast, public appCtrl: App,
    private ds: DataStoreProvider) {

    debugger;
    this.itemOri = this.params.get("paramObj");
    this.fIndex = this.params.get("fIndex");
    this.maIndex = this.params.get("maIndex");
    this.alloType = this.params.get("alloType");
    this.versionType = this.params.get("versionType");
    this.deviceVoltage = this.params.get("deviceVoltage");
    this.from = this.params.get("from");
    this.assetNum = this.params.get("serialNum");
    //console.log(JSON.stringify(this.item.json.phone));

    // Clone data
    this.item = JSON.parse(JSON.stringify(this.itemOri));
    console.log("this.item : " + JSON.stringify(this.item));

    switch (this.alloType) {
      case DeviceConstants.DEV_ALLOC_MAIN_METER:
      case DeviceConstants.DEV_ALLOC_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_SUB_METER:
      case DeviceConstants.DEV_ALLOC_SUB_FEEDER_METER: {
        console.log("Main Meter: " + this.alloType);
        this.hideRemarks = true;
        this.showMainMeter = true;
        break;
      }

      case DeviceConstants.DEV_ALLOC_CHECK_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_FEEDER_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_METER:
      case DeviceConstants.DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
        this.hideRemarks = false;
        console.log("Check Meter: " + this.alloType);
        break;
      }
    }
    this.replaceMeterNCheck();
    if ('E' === this.versionType) {
      // Checking not to Blocked Existing Section
      this.segmentSection = false;
      this.refSegment = "before";

      // remove this line from below condition 
      // this.item.json.ta0installationvoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V &&
      if (this.deviceVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(LV): " + this.versionType + "  : " + this.item.json.ta0installationvoltage);
        this.showLvFields = true;
        // remove this line from below condition...  this.item.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && 
      } else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(MVHV): " + this.versionType + "  : " + this.item.json.ta0installationvoltage);
        this.showMvHvFields = true;
        this.showSticker = true;
      } else {
        this.showOpcFields = true;
      }
    } else {
      // Checking to Blocked Existing Section
      this.segmentSection = true;
      this.refSegment = "after";

      //remove this.item.json.ta0newvoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V && from line
      if (this.deviceVoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(LV): " + this.versionType + "  : " + this.item.json.ta0newvoltage);
        this.showLvFields = true;
      }// remove this.item.json.ta0newvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && 
      else if (this.deviceVoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        console.log("Voltage Level(MVHV): " + this.versionType + "  : " + this.item.json.ta0newvoltage);
        this.showMvHvFields = true;
        this.showSticker = true;
      } else {
        this.showOpcFields = true;
      }
    }

    // LoadLookUp
    // this.loadlookup();
    //CR002 Removal Reason
    this.getAlnDomainData("sealcondition");
    this.getAlnDomainData("removalreason");

    // Open ExtraFields for Seal
    if (this.gv.departContent === "seal") {
      this.showLvExtraFields = true;
    }

    var meterCoverVal = new SealInfo();
    meterCoverVal.ta0seallocation = "METER_COVER_";
    meterCoverVal.ta0sealnum = null;
    meterCoverVal.ta0newsealnum = null;
    meterCoverVal.ta0sealcondition = null;
    meterCoverVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.meterCoverArray[0] = meterCoverVal;

    // var meterConditionsVal = new SealInfo();
    // meterConditionsVal.ta0seallocation = "METER_CONDITIONS_";
    // meterConditionsVal.ta0sealnum = null;
    // this.meterConditionArray[0] = meterConditionsVal;

    var terminalCoverVal = new SealInfo();
    terminalCoverVal.ta0seallocation = "TERMINAL_COVER_";
    terminalCoverVal.ta0sealnum = null;
    terminalCoverVal.ta0newsealnum = null;
    terminalCoverVal.ta0sealcondition = null;
    terminalCoverVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.terminalCoverArray[0] = terminalCoverVal;

    // var terminalConditionsVal = new SealInfo();
    // terminalConditionsVal.ta0seallocation = "TERMINAL_CONDITIONS_";
    // terminalConditionsVal.ta0sealnum = null;
    // this.terminalConditionsArray[0] = terminalConditionsVal;

    var fuseVal = new SealInfo();
    fuseVal.ta0seallocation = "METER_FUSE_";
    fuseVal.ta0sealnum = null;
    fuseVal.ta0newsealnum = null;
    fuseVal.ta0sealcondition = null;
    fuseVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.fuseArray[0] = fuseVal;

    var mdButtonVal = new SealInfo();
    mdButtonVal.ta0seallocation = "MD_BUTTON_";
    mdButtonVal.ta0sealnum = null;
    mdButtonVal.ta0newsealnum = null;
    mdButtonVal.ta0sealcondition = null;
    mdButtonVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.mdButtonArray[0] = mdButtonVal;

    var meterBatteryVal = new SealInfo();
    meterBatteryVal.ta0seallocation = "METER_BATTERY";
    meterBatteryVal.ta0sealnum = null;
    meterBatteryVal.ta0newsealnum = null;
    meterBatteryVal.ta0sealcondition = null;
    meterBatteryVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.meterBatteryArray[0] = meterBatteryVal;

    var opticalEyeVal = new SealInfo();
    opticalEyeVal.ta0seallocation = "OPTICAL_EYE_COVER";
    opticalEyeVal.ta0sealnum = null;
    opticalEyeVal.ta0newsealnum = null;
    opticalEyeVal.ta0sealcondition = null;
    opticalEyeVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.opticalEyeArray[0] = opticalEyeVal;

    var commModuleVal = new SealInfo();
    commModuleVal.ta0seallocation = "COMM_MODULE";
    commModuleVal.ta0sealnum = null;
    commModuleVal.ta0newsealnum = null;
    commModuleVal.ta0sealcondition = null;
    commModuleVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.commModuleArray[0] = commModuleVal;

    //sticker info
    var sterminalCoverVal = new StickerInfo();
    sterminalCoverVal.ta0stickerlocation = "TERMINAL_COVER_";
    sterminalCoverVal.ta0stickernum = null;
    sterminalCoverVal.ta0newstickernum = null;
    sterminalCoverVal.ta0stickercondition = null;
    this.sterminalCoverArray[0] = sterminalCoverVal;

    /*   var sStickerSafetyVal = new StickerInfo();
      sStickerSafetyVal.ta0stickerlocation = "STICKER_SAFETY_";
      sStickerSafetyVal.ta0stickernum = null;
      this.stickerSafetyArray[0] = sStickerSafetyVal;
   */
    var sfuseVal = new StickerInfo();
    sfuseVal.ta0stickerlocation = "METER_FUSE_";
    sfuseVal.ta0stickernum = null;
    sfuseVal.ta0newstickernum = null;
    sfuseVal.ta0stickercondition = null;
    this.sfuseArray[0] = sfuseVal;

    //Other Seal
    var ttbVal = new SealInfo();
    ttbVal.ta0seallocation = "TEST_BLOCK_";
    ttbVal.ta0sealnum = null;
    ttbVal.ta0newsealnum = null;
    ttbVal.ta0sealcondition = null;
    ttbVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.ttbArray[0] = ttbVal;

    var ptChamberVal = new SealInfo();
    ptChamberVal.ta0seallocation = "PT_CHAMBER_";
    ptChamberVal.ta0sealnum = null;
    ptChamberVal.ta0newsealnum = null;
    ptChamberVal.ta0sealcondition = null;
    ptChamberVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.ptChamberArray[0] = ptChamberVal;

    var ctChamberVal = new SealInfo();
    ctChamberVal.ta0seallocation = "CT_CHAMBER_";
    ctChamberVal.ta0sealnum = null;
    ctChamberVal.ta0newsealnum = null;
    ctChamberVal.ta0sealcondition = null;
    ctChamberVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.ctChamberArray[0] = ctChamberVal;

    var ptSecondaryFuseVal = new SealInfo();
    ptSecondaryFuseVal.ta0seallocation = "PT_SEC_FUSE_";
    ptSecondaryFuseVal.ta0sealnum = null;
    ptSecondaryFuseVal.ta0newsealnum = null;
    ptSecondaryFuseVal.ta0sealcondition = null;
    ptSecondaryFuseVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.ptSecondaryFuseArray[0] = ptSecondaryFuseVal;

    var meterKioskVal = new SealInfo();
    meterKioskVal.ta0seallocation = "KIOSK_PANELDOOR_";
    meterKioskVal.ta0sealnum = null;
    meterKioskVal.ta0newsealnum = null;
    meterKioskVal.ta0sealcondition = null;
    meterKioskVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.meterKioskArray[0] = meterKioskVal;

    var meterTestBoxVal = new SealInfo();
    meterTestBoxVal.ta0seallocation = "METER_TEST_BOX_";
    meterTestBoxVal.ta0sealnum = null;
    meterTestBoxVal.ta0newsealnum = null;
    meterTestBoxVal.ta0sealcondition = null;
    meterTestBoxVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.meterTestBoxArray[0] = meterTestBoxVal;

    var terminalBoxVal = new SealInfo();
    terminalBoxVal.ta0seallocation = "TERMINATION_BOX_";
    terminalBoxVal.ta0sealnum = null;
    terminalBoxVal.ta0newsealnum = null;
    terminalBoxVal.ta0sealcondition = null;
    terminalBoxVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.terminalBoxArray[0] = terminalBoxVal;

    var marshallingBoxVal = new SealInfo();
    marshallingBoxVal.ta0seallocation = "MARSHALLING_BOX_";
    marshallingBoxVal.ta0sealnum = null;
    marshallingBoxVal.ta0newsealnum = null;
    marshallingBoxVal.ta0sealcondition = null;
    marshallingBoxVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.marshallingBoxArray[0] = marshallingBoxVal;

    var ctPanelVal = new SealInfo();
    ctPanelVal.ta0seallocation = "CT_CHAMBER_";
    ctPanelVal.ta0sealnum = null;
    ctPanelVal.ta0newsealnum = null;
    ctPanelVal.ta0sealcondition = null;
    ctPanelVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.ctPanelArray[0] = ctPanelVal;

    var panelMeterVal = new SealInfo();
    panelMeterVal.ta0seallocation = "PANEL_METER_";
    panelMeterVal.ta0sealnum = null;
    panelMeterVal.ta0newsealnum = null;
    panelMeterVal.ta0sealcondition = null;
    panelMeterVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.panelMeterArray[0] = panelMeterVal;

    var terminalCtVal = new SealInfo();
    terminalCtVal.ta0seallocation = "TERMINAL_CT_";
    terminalCtVal.ta0sealnum = null;
    terminalCtVal.ta0newsealnum = null;
    terminalCtVal.ta0sealcondition = null;
    terminalCtVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.terminalCtArray[0] = terminalCtVal;

    var modemVal = new SealInfo();
    modemVal.ta0seallocation = "MODEM_";
    modemVal.ta0sealnum = null;
    modemVal.ta0newsealnum = null;
    modemVal.ta0sealcondition = null;
    modemVal.ta0sealremreason = null;  //CR002 Crimpless Seal
    this.modemArray[0] = modemVal;

    //Other Sticker
    var sttbVal = new StickerInfo();
    sttbVal.ta0stickerlocation = "TEST_BLOCK_";
    sttbVal.ta0stickernum = null;
    sttbVal.ta0newstickernum = null;
    sttbVal.ta0stickercondition = null;
    this.sttbArray[0] = sttbVal;

    var sptChamberVal = new StickerInfo();
    sptChamberVal.ta0stickerlocation = "PT_CHAMBER_";
    sptChamberVal.ta0stickernum = null;
    sptChamberVal.ta0newstickernum = null;
    sptChamberVal.ta0stickercondition = null;
    this.sptChamberArray[0] = sptChamberVal;

    var sctChamberVal = new StickerInfo();
    sctChamberVal.ta0stickerlocation = "CT_CHAMBER_";
    sctChamberVal.ta0stickernum = null;
    sctChamberVal.ta0newstickernum = null;
    sctChamberVal.ta0stickercondition = null;
    this.sctChamberArray[0] = sctChamberVal;

    var sptSecondaryFuseVal = new StickerInfo();
    sptSecondaryFuseVal.ta0stickerlocation = "PT_SEC_FUSE_";
    sptSecondaryFuseVal.ta0stickernum = null;
    sptSecondaryFuseVal.ta0newstickernum = null;
    sptSecondaryFuseVal.ta0stickercondition = null;
    this.sptSecondaryFuseArray[0] = sptSecondaryFuseVal;

    var smeterKioskVal = new StickerInfo();
    smeterKioskVal.ta0stickerlocation = "KIOSK_PANELDOOR_";
    smeterKioskVal.ta0stickernum = null;
    smeterKioskVal.ta0newstickernum = null;
    smeterKioskVal.ta0stickercondition = null;
    this.smeterKioskArray[0] = smeterKioskVal;

    var smeterTestBoxVal = new StickerInfo();
    smeterTestBoxVal.ta0stickerlocation = "METER_TEST_BOX_";
    smeterTestBoxVal.ta0stickernum = null;
    smeterTestBoxVal.ta0newstickernum = null;
    smeterTestBoxVal.ta0stickercondition = null;
    this.smeterTestBoxArray[0] = smeterTestBoxVal;

    var sterminalBoxVal = new StickerInfo();
    sterminalBoxVal.ta0stickerlocation = "TERMINATION_BOX_";
    sterminalBoxVal.ta0stickernum = null;
    sterminalBoxVal.ta0newstickernum = null;
    sterminalBoxVal.ta0stickercondition = null;
    this.sterminalBoxArray[0] = sterminalBoxVal;

    var smarshallingBoxVal = new StickerInfo();
    smarshallingBoxVal.ta0stickerlocation = "MARSHALLING_BOX_";
    smarshallingBoxVal.ta0stickernum = null;
    smarshallingBoxVal.ta0newstickernum = null;
    smarshallingBoxVal.ta0stickercondition = null;
    this.smarshallingBoxArray[0] = smarshallingBoxVal;

    var sctPanelVal = new StickerInfo();
    sctPanelVal.ta0stickerlocation = "CT_CHAMBER_";
    sctPanelVal.ta0stickernum = null;
    sctPanelVal.ta0newstickernum = null;
    sctPanelVal.ta0stickercondition = null;
    this.sctPanelArray[0] = sctPanelVal;

    var spanelMeterVal = new StickerInfo();
    spanelMeterVal.ta0stickerlocation = "PANEL_METER_";
    spanelMeterVal.ta0stickernum = null;
    spanelMeterVal.ta0newstickernum = null;
    spanelMeterVal.ta0stickercondition = null;
    this.spanelMeterArray[0] = spanelMeterVal;

    var sterminalCtVal = new StickerInfo();
    sterminalCtVal.ta0stickerlocation = "TERMINAL_CT_";
    sterminalCtVal.ta0stickernum = null;
    sterminalCtVal.ta0newstickernum = null;
    sterminalCtVal.ta0stickercondition = null;
    this.sterminalCtArray[0] = sterminalCtVal;

    var smodemVal = new StickerInfo();
    smodemVal.ta0stickerlocation = "MODEM_";
    smodemVal.ta0stickernum = null;
    smodemVal.ta0newstickernum = null;
    smodemVal.ta0stickercondition = null;
    this.smodemArray[0] = smodemVal;

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

    // New Seal 
    this.newterminalcover1.ta0seallocation = "TERMINAL_COVER_1";
    this.newterminalcover1.ta0seallocation_description = "Terminal Cover 1";
    this.newterminalcover2.ta0seallocation = "TERMINAL_COVER_2";
    this.newterminalcover2.ta0seallocation_description = "Terminal Cover 2";
    this.newmetercover1.ta0seallocation = "METER_COVER_1";
    this.newmetercover1.ta0seallocation_description = "Meter Cover 1";
    this.newmetercover2.ta0seallocation = "METER_COVER_2";
    this.newmetercover2.ta0seallocation_description = "Meter Cover 2";
    this.newmetercover3.ta0seallocation = "METER_COVER_3";
    this.newmetercover3.ta0seallocation_description = "Meter Cover 3";
    this.newmdbutton.ta0seallocation = "MD_BUTTON";
    this.newmdbutton.ta0seallocation_description = "MD Button";
    this.newopticaleyecover.ta0seallocation = "OPTICAL_EYE_COVER";
    this.newopticaleyecover.ta0seallocation_description = "Optical Eye Cover";
    this.newmeterbattery.ta0seallocation = "METER_BATTERY";
    this.newmeterbattery.ta0seallocation_description = "Meter Battery";
    this.newcommmodule.ta0seallocation = "COMM_MODULE";
    this.newcommmodule.ta0seallocation_description = "Comm Module";

    var treminalCTNew = this.item.json.ta0feeder[this.fIndex].multiassetlocci.filter((item) => this.assetNum == item.assetnum)
    this.indexof = this.item.json.ta0feeder[this.fIndex].multiassetlocci.findIndex((item) => this.assetNum === item.assetnum)
    console.log('indexOf', this.indexof);

    // Read ta4silstickerremarks (before)
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerbfremarks) != 'undefined' &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerbfremarks !== null) {
      this.ta0naremarks_before = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerbfremarks;
    }

    // Read ta4silstickerremarks (after)
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerremarks) != 'undefined' &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerremarks !== null) {
      this.ta0naremarks_after = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerremarks;
    }

    // Read ta0detail if exist
    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail) != 'undefined' &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== "" &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== null) {

      var seal_length = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
      var mCount = 0;
      var mCondiCount = 0;
      var tCount = 0;
      var tCondiCount = 0;
      var fCount = 0;
      var mdCount = 0;
      var mbCount = 0;
      var oCount = 0;
      var stCount = 0;
      var sfCount = 0;
      var cmCount = 0;

      // Other Seal
      var tbCount = 0;
      var moCount = 0;

      // (MVHV)
      var ptCount = 0;
      var ctcCount = 0;
      var ptsCount = 0;
      var mkCount = 0;
      var mtbCount = 0;
      var tboCount = 0;
      var msbCount = 0;

      // (LV)
      var ctCount = 0;
      // var pmCount = 0;
      var mkCount = 0;
      var tcCount = 0;
      var SStickerCount = 0;
      var tcRCount = 0;
      var tcYCount = 0;
      var tcBCount = 0;

      for (var i = 0; i < seal_length; i++) {
        var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i];
        var ta0seallocation = ta0sealdetail.ta0seallocation;
        let ta0installind = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i].ta0installind
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i].ta0installind = ta0installind === 'true'

        if (ta0seallocation.startsWith(FunctionClass.METER_COVER) && ta0sealdetail.ta0existingseal == true) {
          meterCoverVal = ta0sealdetail;
          this.meterCoverArray[mCount] = meterCoverVal;
          console.log(mCount + ' meterCoverArray : ' + JSON.stringify(this.meterCoverArray));
          mCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_COVER) && ta0sealdetail.ta0existingseal == true) {
          terminalCoverVal = ta0sealdetail;
          this.terminalCoverArray[tCount] = terminalCoverVal;
          console.log(tCount + ' terminalCoverArray : ' + JSON.stringify(this.terminalCoverArray));
          tCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.METER_FUSE)) {
          fuseVal = ta0sealdetail;
          this.fuseArray[fCount] = fuseVal;
          console.log(fCount + ' fuseArray : ' + JSON.stringify(this.fuseArray));
          fCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.MD_BUTTON) && ta0sealdetail.ta0existingseal == true) {
          mdButtonVal = ta0sealdetail;
          this.mdButtonArray[mdCount] = mdButtonVal;
          console.log(mdCount + ' mdButtonArray : ' + JSON.stringify(this.mdButtonArray));
          mdCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.METER_BATTERY) && ta0sealdetail.ta0existingseal == true) {
          meterBatteryVal = ta0sealdetail;
          this.meterBatteryArray[mbCount] = meterBatteryVal;
          console.log(mbCount + ' meterBatteryArray : ' + JSON.stringify(this.meterBatteryArray));
          mbCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.OPTICAL_EYE_COVER) && ta0sealdetail.ta0existingseal == true) {
          opticalEyeVal = ta0sealdetail;
          this.opticalEyeArray[oCount] = opticalEyeVal;
          console.log(oCount + ' opticalEyeArray : ' + JSON.stringify(this.opticalEyeArray));
          oCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.COMM_MODULE) && ta0sealdetail.ta0existingseal === true) {
          commModuleVal = ta0sealdetail;
          this.commModuleArray[cmCount] = commModuleVal;
          console.log(cmCount+' commModuleArray : '+JSON.stringify(this.commModuleArray));
          cmCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.TTB)) {
          ttbVal = ta0sealdetail;
          this.ttbArray[tbCount] = ttbVal;
          console.log(tbCount + ' ttbArray : ' + JSON.stringify(this.ttbArray));
          tbCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.MODEM_)) {
          modemVal = ta0sealdetail;
          this.modemArray[moCount] = modemVal;
          console.log(moCount + ' modemArray : ' + JSON.stringify(this.modemArray));
          moCount++;
        }
        else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_RED) && ta0sealdetail.ta0existingseal == true) {         
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
        }else if (ta0seallocation.startsWith(FunctionClass.MODEM_)) {
          modemVal = ta0sealdetail;
          this.modemArray[moCount] = modemVal;
          console.log(moCount+' modemArray : '+JSON.stringify(this.modemArray));
          moCount++;
        } else if (ta0seallocation.startsWith("TERMINAL_COVER_1") && ta0sealdetail.ta0existingseal === false) {
          this.newterminalcover1 = ta0sealdetail;
        } else if (ta0seallocation.startsWith("TERMINAL_COVER_2") && ta0sealdetail.ta0existingseal === false) {
          this.newterminalcover2 = ta0sealdetail;
        } else if (ta0seallocation.startsWith("METER_COVER_1") && ta0sealdetail.ta0existingseal === false) {
          this.newmetercover1 = ta0sealdetail;
        } else if (ta0seallocation.startsWith("METER_COVER_2") && ta0sealdetail.ta0existingseal === false) {
          this.newmetercover2 = ta0sealdetail;
        } else if (ta0seallocation.startsWith("METER_COVER_3") && ta0sealdetail.ta0existingseal === false) {
          this.newmetercover3 = ta0sealdetail;
        } else if (ta0seallocation.startsWith(FunctionClass.MD_BUTTON) && ta0sealdetail.ta0existingseal === false) {
          this.newmdbutton = ta0sealdetail;
        } else if (ta0seallocation.startsWith(FunctionClass.METER_BATTERY) && ta0sealdetail.ta0existingseal === false) {
          this.newmeterbattery = ta0sealdetail;
        } else if (ta0seallocation.startsWith(FunctionClass.OPTICAL_EYE_COVER) && ta0sealdetail.ta0existingseal === false) {
          this.newopticaleyecover = ta0sealdetail
        } else if (ta0seallocation.startsWith(FunctionClass.COMM_MODULE) && ta0sealdetail.ta0existingseal === false) {
          this.newcommmodule = ta0sealdetail;
        }

        console.log(JSON.stringify(this.meterCoverArray));
        console.log(JSON.stringify(this.terminalCoverArray));

        switch (this.showLvFields) {

          case true: {

            if (ta0seallocation.startsWith(FunctionClass.CT_PANEL)) {
              ctPanelVal = ta0sealdetail;
              this.ctPanelArray[ctCount] = ctPanelVal;
              console.log(ctCount + ' ctPanelArray : ' + JSON.stringify(this.ctPanelArray));
              ctCount++;
            }
            // else if (ta0seallocation.startsWith(FunctionClass.PANEL_METER)) {
            //   panelMeterVal = ta0sealdetail;
            //   this.panelMeterArray[pmCount] = panelMeterVal;
            //   pmCount++;
            // }
            else if (ta0seallocation.startsWith(FunctionClass.METER_KIOSK)) {
              meterKioskVal = ta0sealdetail;
              this.meterKioskArray[mkCount] = meterKioskVal;
              console.log(mkCount + ' meterKioskArray : ' + JSON.stringify(this.meterKioskArray));
              mkCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT)) {
              terminalCtVal = ta0sealdetail;
              this.terminalCtArray[tcCount] = terminalCtVal;
              console.log(tcCount + ' terminalCtArray : ' + JSON.stringify(this.terminalCtArray));
              tcCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT_RED) && ta0sealdetail.ta0existingseal == true) {
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

        switch (this.showMvHvFields) {
          case true: {
            if (ta0seallocation.startsWith(FunctionClass.PT_CHAM)) {
              ptChamberVal = ta0sealdetail;
              this.ptChamberArray[ptCount] = ptChamberVal;
              console.log(ptCount + ' ptChamberArray : ' + JSON.stringify(this.ptChamberArray));
              ptCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.CT_CHAM)) {
              ctChamberVal = ta0sealdetail;
              this.ctChamberArray[ctcCount] = ctChamberVal;
              console.log(ctCount + ' ctChamberArray : ' + JSON.stringify(this.ctChamberArray));
              ctCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.PT_SEC_FS)) {
              ptSecondaryFuseVal = ta0sealdetail;
              this.ptSecondaryFuseArray[ptsCount] = ptSecondaryFuseVal;
              console.log(ptsCount + ' ptSecondaryFuseArray : ' + JSON.stringify(this.ptSecondaryFuseArray));
              ptsCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.METER_KIOSK)) {
              meterKioskVal = ta0sealdetail;
              this.meterKioskArray[mkCount] = meterKioskVal;
              console.log(mkCount + ' meterKioskArray : ' + JSON.stringify(this.meterKioskArray));
              mkCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.METER_TEST_BOX)) {
              meterTestBoxVal = ta0sealdetail;
              this.meterTestBoxArray[mtbCount] = meterTestBoxVal;
              console.log(mtbCount + ' meterTestBoxArray : ' + JSON.stringify(this.meterTestBoxArray));
              mtbCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX)) {
              terminalBoxVal = ta0sealdetail;
              this.terminalBoxArray[tboCount] = terminalBoxVal;
              console.log(tboCount + ' terminalBoxArray : ' + JSON.stringify(this.terminalBoxArray));
              tboCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX)) {
              marshallingBoxVal = ta0sealdetail;
              this.marshallingBoxArray[msbCount] = marshallingBoxVal;
              console.log(msbCount + ' marshallingBoxArray : ' + JSON.stringify(this.marshallingBoxArray));
              msbCount++;
            }
            else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT)) {
              terminalCtVal = ta0sealdetail;
              this.terminalCtArray[tcCount] = terminalCtVal;
              console.log(tcCount + ' terminalCtArray : ' + JSON.stringify(this.terminalCtArray));
              tcCount++;
            }
            break;
          }
        }

        // Sorting Seal
        this.meterCoverArray.sort(this.dynamicSort("ta0seallocation"));
        this.terminalCoverArray.sort(this.dynamicSort("ta0seallocation"));
        this.fuseArray.sort(this.dynamicSort("ta0seallocation"));
        this.mdButtonArray.sort(this.dynamicSort("ta0seallocation"));
        this.meterBatteryArray.sort(this.dynamicSort("ta0seallocation"));
        this.opticalEyeArray.sort(this.dynamicSort("ta0seallocation"));
        this.ttbArray.sort(this.dynamicSort("ta0seallocation"));
        this.modemArray.sort(this.dynamicSort("ta0seallocation"));
        this.ctPanelArray.sort(this.dynamicSort("ta0seallocation"));
        this.panelMeterArray.sort(this.dynamicSort("ta0seallocation"));
        this.terminalCtArray.sort(this.dynamicSort("ta0seallocation"));
        this.ptChamberArray.sort(this.dynamicSort("ta0seallocation"));
        this.ctChamberArray.sort(this.dynamicSort("ta0seallocation"));
        this.ptSecondaryFuseArray.sort(this.dynamicSort("ta0seallocation"));
        this.meterKioskArray.sort(this.dynamicSort("ta0seallocation"));
        this.meterTestBoxArray.sort(this.dynamicSort("ta0seallocation"));
        this.terminalBoxArray.sort(this.dynamicSort("ta0seallocation"));
        this.marshallingBoxArray.sort(this.dynamicSort("ta0seallocation"));
        this.terminalCtArray.sort(this.dynamicSort("ta0seallocation"));
        this.terminalCtRedArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.terminalCtYellowArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.terminalCtBlueArray.sort(this.dynamicSort("ta0stickerlocation"));

      }
    }

    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail) != 'undefined' &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== null &&
      this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail != '') {

      var sticker_length = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.length);

      // Sticker
      var stCount = 0;
      var sfCount = 0;

      // Other Sticker
      var stbCount = 0;
      var smoCount = 0;
      // (MVHV)
      var sptCount = 0;
      var sctcCount = 0;
      var sptsCount = 0;
      var smkCount = 0;
      var smtbCount = 0;
      var stboCount = 0;
      var smsbCount = 0;
      // (LV)
      var sctCount = 0;
      var spmCount = 0;
      var stcCount = 0;

      //OPC
      var sSCount = 0;

      for (var k = 0; k < sticker_length; k++) {

        var ta0stickerdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail[k];
        /**
         * Created Ameer (17/10/2018)
         * different name for condition and location
         */
        if (!ta0stickerdetail.hasOwnProperty(ta0stickerlocation)) {
          var ta0stickerlocation = ta0stickerdetail.ta0stickerlocation;
        }

        if (ta0stickerlocation.startsWith(FunctionClass.STERMINAL_COVER)) {
          sterminalCoverVal = ta0stickerdetail;
          this.sterminalCoverArray[stCount] = sterminalCoverVal;
          stCount++;
        }
        else if (ta0stickerlocation.startsWith(FunctionClass.SMETER_FUSE)) {
          sfuseVal = ta0stickerdetail;
          this.sfuseArray[sfCount] = sfuseVal;
          sfCount++;
        }
        else if (ta0stickerlocation.startsWith(FunctionClass.STTB)) {
          sttbVal = ta0stickerdetail;
          this.sttbArray[stbCount] = sttbVal;
          stbCount++;
        }
        else if (ta0stickerlocation.startsWith(FunctionClass.SMODEM_)) {
          smodemVal = ta0stickerdetail;
          this.smodemArray[smoCount] = smodemVal;
          smoCount++;
        }

        switch (this.showLvFields) {
          case true: {
            if (ta0stickerlocation.startsWith(FunctionClass.SCT_PANEL)) {
              sctPanelVal = ta0stickerdetail;
              this.sctPanelArray[sctCount] = sctPanelVal;
              sctCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.SPANEL_METER)) {
              spanelMeterVal = ta0stickerdetail;
              this.spanelMeterArray[spmCount] = spanelMeterVal;
              spmCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.STERMINAL_CT)) {
              sterminalCtVal = ta0stickerdetail;
              this.sterminalCtArray[stcCount] = sterminalCtVal;
              stcCount++;
            }
          }
        }

        switch (this.showMvHvFields) {
          case true: {
            if (ta0stickerlocation.startsWith(FunctionClass.SPT_CHAM)) {
              sptChamberVal = ta0stickerdetail;
              this.sptChamberArray[sptCount] = sptChamberVal;
              sptCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.SCT_CHAM)) {
              sctChamberVal = ta0stickerdetail;
              this.sctChamberArray[sctcCount] = sctChamberVal;
              sctCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.SPT_SEC_FS)) {
              sptSecondaryFuseVal = ta0stickerdetail;
              this.sptSecondaryFuseArray[sptsCount] = sptSecondaryFuseVal;
              sptsCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.SMETER_KIOSK)) {
              smeterKioskVal = ta0stickerdetail;
              this.smeterKioskArray[smkCount] = smeterKioskVal;
              smkCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.SMETER_TEST_BOX)) {
              smeterTestBoxVal = ta0stickerdetail;
              this.smeterTestBoxArray[smtbCount] = smeterTestBoxVal;
              smtbCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.STERMINATION_BOX)) {
              sterminalBoxVal = ta0stickerdetail;
              this.sterminalBoxArray[stboCount] = sterminalBoxVal;
              stboCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.SMARSHALLING_BOX)) {
              smarshallingBoxVal = ta0stickerdetail;
              this.smarshallingBoxArray[smsbCount] = smarshallingBoxVal;
              smsbCount++;
            }
            else if (ta0stickerlocation.startsWith(FunctionClass.STERMINAL_CT)) {
              sterminalCtVal = ta0stickerdetail;
              this.sterminalCtArray[stcCount] = sterminalCtVal;
              stcCount++;
            }
            break;
          }
        }

        // Sorting Seal
        this.sterminalBoxArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sfuseArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sttbArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.smodemArray.sort(this.dynamicSort("ta0stickerlocation"));

        this.sctPanelArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.spanelMeterArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sterminalCtArray.sort(this.dynamicSort("ta0stickerlocation"));

        this.sptChamberArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sctChamberArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sptSecondaryFuseArray.sort(this.dynamicSort("ta0stickerlocation"));

        this.smeterKioskArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.smeterTestBoxArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sterminalBoxArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.smarshallingBoxArray.sort(this.dynamicSort("ta0stickerlocation"));
        this.sterminalCtArray.sort(this.dynamicSort("ta0stickerlocation"));
      }
    }


    // this.checkValueAvailable();

  }

  /**
   * Reason   : Method 'loadlookup' field condition.
   * Created  : 19-03-2019
   */
  loadlookup() {
    this.getAlnDomainData("sealcondition").then((success) => {
      // this.getAlnDomainData("safetysticker").then((success) => {
      //   this.getAlnDomainData("fuse").then((success) => {
      //     this.getAlnDomainData("meter_cover").then((success) => {
      //       this.getAlnDomainData("meter_panel").then((success) => {
      //         this.getAlnDomainData("panel_ct").then((success) => {
      //           this.getAlnDomainData("ct_terminal").then((success) => {
      //             this.getAlnDomainData("terminal_meter").then((success) => {
      //               this.getAlnDomainData("ttb").then((success) => {
      //               });
      //             });
      //           });
      //         });
      //       });
      //     });
      //   });
      // });
    });
  }

  /**
   * Reason   : Method to call promise to get data.
   * Created  : 19-03-2019
   */
  getAlnDomainData(inputType) {
    console.log("filtering type condition for sil & sticker..");
    var queryPart: any;

    if (typeof (inputType) !== "undefined") {
      if (inputType === "safetysticker") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SAFETYSTICKER);
      } else if (inputType === "fuse") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCFUSE);
      } else if (inputType === "meter_cover") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCMETERCOVER);
      } else if (inputType === "meter_panel") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCMETERPANEL);
      } else if (inputType === "panel_ct") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCPANELCT);
      } else if (inputType === "ct_terminal") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCTERMCT);
      } else if (inputType === "terminal_meter") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCTERMMETER);
      } else if (inputType === "ttb") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SCTTB);
      } else if (inputType === "sealcondition") {
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA4SC);
      } else if (inputType === "removalreason") {                                         //CR002 Crimpless Seal
        queryPart = WL.JSONStore.QueryPart().equal("domainid", Domains.TA0SEALREMREASON); //CR002 Crimpless Seal
      }

      return new Promise<void>((resolve, reject) => {
        this.jsonStore
          .getSearchRecordNoLimit(Domains.AlnDomain, queryPart)
          .then(result => {

            if (inputType === "safetysticker") {
              this.safetySticker = result;
            } else if (inputType === "fuse") {
              this.fuse = result;
            } else if (inputType === "meter_cover") {
              this.meterCover = result;
            } else if (inputType === "meter_panel") {
              this.meterPanel = result;
            } else if (inputType === "panel_ct") {
              this.ctPanel = result;
            } else if (inputType === "ct_terminal") {
              this.ctTerminal = result;
            } else if (inputType === "terminal_meter") {
              this.meterTerminal = result;
            } else if (inputType === "ttb") {
              this.ttb = result;
            } else if (inputType === "sealcondition") {
              this.sc = result;
            } else if (inputType === "removalreason") {   //CR002 Crimpless Seal
              this.rr = result;                           //CR002 Crimpless Seal
            }
            resolve();
          }).catch(error => {
            console.log('service failure : ' + error);
            reject();
          });
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealSilNStickerInfoPage');
  }

  // Dynamic Sorting.
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

  goBack() {
    this.navCtrl.pop();
  }

  //Meter Cover
  addMeterCover() {
    if (this.meterCoverArray.length <= 2) {

      var meterCoverVal = new SealInfo();
      meterCoverVal.ta0seallocation = 'METER_COVER_';
      this.meterCoverArray.push(meterCoverVal);
      if (this.meterCoverArray.length == 3) {
        this.showAddMeterCover = false;
      }
    }
  }

  //Terminal Cover
  addTerminalCover() {

    if (this.terminalCoverArray.length <= 1) {

      var terminalCoverVal = new SealInfo();
      terminalCoverVal.ta0seallocation = 'TERMINAL_COVER_';
      this.terminalCoverArray.push(terminalCoverVal);
      if (this.terminalCoverArray.length == 2) {
        this.showAddTerminalCover = false;
      }
    }
  }

  //Meter Fuse
  addFuse() {

    if (this.fuseArray.length <= 0) {
      var fuseVal = new SealInfo();
      fuseVal.ta0seallocation = 'METER_FUSE_';
      this.fuseArray.push(fuseVal);
      if (this.fuseArray.length == 0) {
        this.showAddFuse = false;
      }
    }
  }

  //md button
  addMdButton() {

    if (this.mdButtonArray.length <= 0) {

      var mdButtonVal = new SealInfo();
      mdButtonVal.ta0seallocation = 'MD_BUTTON_';
      this.mdButtonArray.push(mdButtonVal);
      if (this.mdButtonArray.length == 0) {
        this.showAddMdButton = false;
      }
    }
  }

  //meter battery
  addMeterBattery() {

    if (this.meterBatteryArray.length <= 0) {

      var meterBatteryVal = new SealInfo();
      meterBatteryVal.ta0seallocation = 'METER_BATTERY_';
      this.meterBatteryArray.push(meterBatteryVal);
      if (this.meterBatteryArray.length == 0) {
        this.showAddMeterBattery = false;
      }
    }
  }

  //optical eye
  addOpticalEye() {

    if (this.opticalEyeArray.length <= 0) {

      var opticalEyeVal = new SealInfo();
      opticalEyeVal.ta0seallocation = 'OPTICAL_EYE_COVER_';
      this.opticalEyeArray.push(opticalEyeVal);
      if (this.opticalEyeArray.length == 0) {
        this.showAddOpticalEye = false;
      }
    }
  }

  addSterminalCover() {

    if (this.sterminalCoverArray.length <= 3) {

      var sterminalCoverVal = new StickerInfo();
      sterminalCoverVal.ta0stickerlocation = 'TERMINAL_COVER_';
      this.sterminalCoverArray.push(sterminalCoverVal);
      if (this.sterminalCoverArray.length == 3) {
        this.showAddSterminalCover = false;
      }
    }
  }

  //Meter Fuse
  addSfuse() {

    if (this.sfuseArray.length <= 3) {

      var fuseVal = new StickerInfo();
      fuseVal.ta0stickerlocation = 'METER_FUSE_';
      this.sfuseArray.push(fuseVal);
      if (this.sfuseArray.length == 3) {
        this.showAddSfuse = false;
      }
    }
  }

  //Other Seal
  //TTB
  addTtb() {
    if (this.ttbArray.length <= 1) {

      var ttbVal = new SealInfo();
      ttbVal.ta0seallocation = 'TEST_BLOCK_';
      this.ttbArray.push(ttbVal);
      if (this.ttbArray.length == 2) {
        this.showAddTtb = false;
      }
    }
  }

  addPtChamber() {
    if (this.ptChamberArray.length <= 3) {

      var ptChamberVal = new SealInfo();
      ptChamberVal.ta0seallocation = 'PT_CHAMBER_';
      this.ptChamberArray.push(ptChamberVal);
      if (this.ptChamberArray.length == 3) {
        this.showAddPtChamber = false;
      }
    }
  }

  addCtChamber() {

    if (this.ctChamberArray.length <= 3) {
      var ctChamberVal = new SealInfo();
      ctChamberVal.ta0seallocation = 'CT_CHAMBER_';
      this.ctChamberArray.push(ctChamberVal);
      if (this.ctChamberArray.length == 3) {
        this.showAddCtChamber = false;
      }
    }
  }

  addPtSecondaryFuse() {

    if (this.ptSecondaryFuseArray.length <= 3) {

      var ptSecondaryFuseVal = new SealInfo();
      ptSecondaryFuseVal.ta0seallocation = 'PT_SEC_FUSE_';
      this.ptSecondaryFuseArray.push(ptSecondaryFuseVal);
      if (this.ptSecondaryFuseArray.length == 3) {
        this.showAddPtSecondaryFuse = false;
      }
    }
  }

  addMeterKiosk() {
    if (this.meterKioskArray.length <= 3) {

      var meterKioskVal = new SealInfo();
      meterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
      this.meterKioskArray.push(meterKioskVal);
      if (this.meterKioskArray.length == 3) {
        this.showAddMeterKiosk = false;
      }
    }
  }

  addMeterTestBox() {

    if (this.meterTestBoxArray.length <= 3) {
      var meterTestBoxVal = new SealInfo();
      meterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_';
      this.meterTestBoxArray.push(meterTestBoxVal);
      if (this.meterTestBoxArray.length == 3) {
        this.showAddMeterTestBox = false;
      }
    }
  }

  addTerminalBox() {

    if (this.terminalBoxArray.length <= 3) {

      var terminalBoxVal = new SealInfo();
      terminalBoxVal.ta0seallocation = 'TERMINATION_BOX_';
      this.terminalBoxArray.push(terminalBoxVal);
      if (this.terminalBoxArray.length == 3) {
        this.showAddTerminalBox = false;
      }
    }
  }

  addMarshallingBox() {

    if (this.marshallingBoxArray.length <= 3) {
      var marshallingBoxVal = new SealInfo();
      marshallingBoxVal.ta0seallocation = 'MARSHALLING_BOX_';
      this.marshallingBoxArray.push(marshallingBoxVal);
      if (this.marshallingBoxArray.length == 3) {
        this.showAddMarshallingBox = false;
      }
    }
  }

  addCtPanel() {

    if (this.ctPanelArray.length <= 3) {

      var ctPanelVal = new SealInfo();
      ctPanelVal.ta0seallocation = 'CT_PANEL_';
      this.ctPanelArray.push(ctPanelVal);
      if (this.ctPanelArray.length == 3) {
        this.showAddCtPanel = false;
      }
    }
  }

  addPanelMeter() {

    if (this.panelMeterArray.length <= 3) {
      var panelMeterVal = new SealInfo();
      panelMeterVal.ta0seallocation = 'PANEL_METER_';
      this.panelMeterArray.push(panelMeterVal);
      if (this.panelMeterArray.length == 3) {
        this.showAddPanelMeter = false;
      }
    }
  }

  addTerminalCt() {

    if (this.terminalCtArray.length <= 3) {

      var terminalCtVal = new SealInfo();
      terminalCtVal.ta0seallocation = 'TERMINAL_CT_';
      this.terminalCtArray.push(terminalCtVal);
      if (this.terminalCtArray.length == 3) {
        this.showAddTerminalCt = false;
      }
    }
  }

  addModem() {

    if (this.modemArray.length <= 3) {

      var modemVal = new SealInfo();
      modemVal.ta0seallocation = 'MODEM_';
      this.modemArray.push(modemVal);
      if (this.modemArray.length == 3) {
        this.showAddModem = false;
      }
    }
  }

  //Other Sticker
  addSttb() {

    if (this.sttbArray.length <= 3) {

      var sttbVal = new SealInfo();
      sttbVal.ta0seallocation = 'TEST_BLOCK_';
      this.sttbArray.push(sttbVal);
      if (this.sttbArray.length == 3) {
        this.showAddSttb = false;
      }
    }
  }

  addSptChamber() {

    if (this.sptChamberArray.length <= 3) {

      var sptChamberVal = new SealInfo();
      sptChamberVal.ta0seallocation = 'MODEM_';
      this.sptChamberArray.push(sptChamberVal);
      if (this.sptChamberArray.length == 3) {
        this.showAddSptChamber = false;
      }
    }
  }

  addSctChamber() {

    if (this.sctChamberArray.length <= 3) {

      var sctChamberVal = new SealInfo();
      sctChamberVal.ta0seallocation = 'CT_CHAMBER_';
      this.sctChamberArray.push(sctChamberVal);
      if (this.sctChamberArray.length == 3) {
        this.showAddSctChamber = false;
      }
    }
  }

  addSptSecondaryFuse() {

    if (this.sptSecondaryFuseArray.length <= 3) {

      var sptSecondaryFuseVal = new SealInfo();
      sptSecondaryFuseVal.ta0seallocation = 'PT_SEC_FUSE_';
      this.sptSecondaryFuseArray.push(sptSecondaryFuseVal);
      if (this.sptSecondaryFuseArray.length == 3) {
        this.showAddSptSecondaryFuse = false;
      }
    }
  }

  addSmeterKiosk() {

    if (this.smeterKioskArray.length <= 3) {

      var smeterKioskVal = new SealInfo();
      smeterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
      this.smeterKioskArray.push(smeterKioskVal);
      if (this.smeterKioskArray.length == 3) {
        this.showAddSmeterKiosk = false;
      }
    }
  }

  addSmeterTestBox() {

    if (this.smeterTestBoxArray.length <= 3) {

      var smeterTestBoxVal = new SealInfo();
      smeterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_';
      this.smeterTestBoxArray.push(smeterTestBoxVal);
      if (this.smeterTestBoxArray.length == 3) {
        this.showAddSmeterTestBox = false;
      }
    }
  }

  addSterminalBox() {

    if (this.sterminalBoxArray.length <= 3) {
      var sterminalBoxVal = new SealInfo();
      sterminalBoxVal.ta0seallocation = 'TERMINATION_BOX_';
      this.sterminalBoxArray.push(sterminalBoxVal);
      if (this.sterminalBoxArray.length == 3) {
        this.showAddSterminalBox = false;
      }
    }
  }

  addSmarshallingBox() {

    if (this.smarshallingBoxArray.length <= 3) {

      var smarshallingBoxVal = new SealInfo();
      smarshallingBoxVal.ta0seallocation = 'MARSHALLING_BOX_';
      this.smarshallingBoxArray.push(smarshallingBoxVal);
      if (this.smarshallingBoxArray.length == 3) {
        this.showAddSmarshallingBox = false;
      }
    }
  }

  addSctPanel() {

    if (this.sctPanelArray.length <= 3) {

      var sctPanelVal = new SealInfo();
      sctPanelVal.ta0seallocation = 'CT_PANEL_';
      this.sctPanelArray.push(sctPanelVal);
      if (this.sctPanelArray.length == 3) {
        this.showAddSctPanel = false;
      }
    }
  }

  addSpanelMeter() {

    if (this.spanelMeterArray.length <= 3) {

      var spanelMeterVal = new SealInfo();
      spanelMeterVal.ta0seallocation = 'PANEL_METER_';
      this.spanelMeterArray.push(spanelMeterVal);
      if (this.spanelMeterArray.length == 3) {
        this.showAddSpanelMeter = false;
      }
    }
  }

  addSterminalCt() {

    if (this.sterminalCtArray.length <= 3) {

      var sterminalCtVal = new SealInfo();
      sterminalCtVal.ta0seallocation = 'TERMINAL_CT_';
      this.sterminalCtArray.push(sterminalCtVal);
      if (this.sterminalCtArray.length == 3) {
        this.showAddSterminalCt = false;
      }
    }
  }

  addSmodem() {

    if (this.smodemArray.length <= 3) {

      var smodemVal = new SealInfo();
      smodemVal.ta0seallocation = 'MODEM_';
      this.smodemArray.push(smodemVal);
      if (this.smodemArray.length == 3) {
        this.showAddSmodem = false;
      }
    }
  }

  savecrimpless(){
    let string: boolean = true

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    //if (!this.checkingStickerValidationHandler(loading) && !this.checkingSealValidationHandler(loading)) {

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];

    // Default value from parent
    var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
    var orgid = this.itemOri.json.ta0feeder[this.fIndex].orgid;
    var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.json.wonum;

    if ((this.terminalCtRedArray[0].ta0sealnum != null || this.terminalCtRedArray[0].ta0sealnum != undefined) || this.terminalCtRedArray[0].ta0newsealnum != null || this.terminalCtRedArray[0].ta0newsealnum != undefined) {

      for (var i = 0; i < this.terminalCtRedArray.length; i++) {

        this.terminalCtRedArray[i].assetnum = this.assetNum;
        this.terminalCtRedArray[i].orgid = orgid;
        this.terminalCtRedArray[i].siteid = siteid;
        this.terminalCtRedArray[i].wonum = wonum;
        this.terminalCtRedArray[i].ta0installind = this.terminalCtRedArray[i].ta0installind ? this.terminalCtRedArray[i].ta0installind : string

        this.terminalCtRedArray[i].ta0seallocation = "TERMINAL_CT_RED";
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtRedArray[i]);

      }
    }

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

    if ((this.terminalCtBlueArray[0].ta0sealnum != null || this.terminalCtBlueArray[0].ta0sealnum != undefined) || this.terminalCtBlueArray[0].ta0newsealnum != null || this.terminalCtBlueArray[0].ta0newsealnum != undefined) {

      for (var i = 0; i < this.terminalCtBlueArray.length; i++) {
        this.terminalCtBlueArray[i].assetnum = assetnum;
        this.terminalCtBlueArray[i].orgid = orgid;
        this.terminalCtBlueArray[i].siteid = siteid;
        this.terminalCtBlueArray[i].wonum = wonum;
        this.terminalCtBlueArray[i].ta0installind = this.terminalCtBlueArray[i].ta0installind ? this.terminalCtBlueArray[i].ta0installind : string

        this.terminalCtBlueArray[i].ta0seallocation = "TERMINAL_CT_BLUE";
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtBlueArray[i]);
      }
    }

     // Setting flag button colour (alif) - (29.12.2018)
     this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0silstickerstatus = 'Y';

     // Saving the remarks into multiassetlocci for ZISP
     if (this.itemOri.json.worktype === "ZISP" || this.itemOri.json.worktype === "ZIST") {
       this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerbfremarks = this.ta0naremarks_before;
       this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerremarks = this.ta0naremarks_after;
     }
 
     setTimeout(() => {
       loading.onWillDismiss(() => {
         console.log("this.itemOri : " + JSON.stringify(this.itemOri));
         this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
         this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
         this.gf.displayToast("Sil & Sticker Details updated.");
         loading.dismiss();
       });
     }, 10000);

     this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

     if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
 
       this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
       this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
       this.gf.displayToast("Sil & Sticker Details updated locally.");
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
                 this.gf.warningAlert('Success', 'Sil & Sticker Details save successfully', 'Close');
                 /** Sending latest data.. (alif) - (29.12.2018)*/
                 // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                 // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                 this.navCtrl.pop();
               }
               loading.dismiss();
 
             }).catch(error => {
               console.log('service failure : ' + error);
               this.gf.warningAlert('Error', 'Sil & Sticker Details failed to save.', 'Close');
               loading.dismiss();
             });
         } else {
           this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
           this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
           this.gf.displayToast("Sil & Sticker Details updated locally.");
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
             this.gf.warningAlert('Success', 'Sil & Sticker Details save successfully', 'Close');
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

  async saveDeviceDetails() {
    debugger;
    let string: boolean = true

    let loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    loading.present();
    this.gf.loadingTimer(loading);

    //if (!this.checkingStickerValidationHandler(loading) && !this.checkingSealValidationHandler(loading)) {

    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];

    // Default value from parent
    var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
    var ta0olddeviceassetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0olddeviceserialnum;
    var ta0serialnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0serialnum;
    var ta0devicecategory = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicecategory;
    var orgid = this.itemOri.json.ta0feeder[this.fIndex].orgid;
    var siteid = this.itemOri.json.siteid;
    var wonum = this.itemOri.json.wonum;
    let validateSeal = this.gv.validateDBSeal;
    var fakeSealNum : string = '';
    var saveFlag: Boolean = true;

    if(validateSeal) {
      //Save new crimpless seal
      if(this.newterminalcover1.ta0sealnum !== null &&  this.newterminalcover1.ta0sealnum !== undefined && this.newterminalcover1.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newterminalcover1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newterminalcover1.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newterminalcover2.ta0sealnum !== null &&  this.newterminalcover2.ta0sealnum !== undefined && this.newterminalcover2.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newterminalcover2.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newterminalcover2.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newmetercover1.ta0sealnum !== null &&  this.newmetercover1.ta0sealnum !== undefined && this.newmetercover1.ta0sealnum !== '') {     
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newmetercover1.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newmetercover1.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newmetercover2.ta0sealnum !== null &&  this.newmetercover2.ta0sealnum !== undefined && this.newmetercover2.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newmetercover2.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newmetercover2.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newmetercover3.ta0sealnum !== null &&  this.newmetercover3.ta0sealnum !== undefined && this.newmetercover3.ta0sealnum !== '') {   
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newmetercover3.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newmetercover3.ta0sealnum + ',';
            saveFlag = false;
          }    
        });      
      }
      if(this.newmdbutton.ta0sealnum !== null &&  this.newmdbutton.ta0sealnum !== undefined && this.newmdbutton.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newmdbutton.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newmdbutton.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newopticaleyecover.ta0sealnum !== null &&  this.newopticaleyecover.ta0sealnum !== undefined && this.newopticaleyecover.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newopticaleyecover.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newopticaleyecover.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newmeterbattery.ta0sealnum !== null &&  this.newmeterbattery.ta0sealnum !== undefined && this.newmeterbattery.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newmeterbattery.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newmeterbattery.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
      if(this.newcommmodule.ta0sealnum !== null &&  this.newcommmodule.ta0sealnum !== undefined && this.newcommmodule.ta0sealnum !== '') {
        //Validate against SQLite
        await this.ds.queryCrimplessData(this.newcommmodule.ta0sealnum).then((response) => {
          console.log(JSON.stringify(response));
          let result = JSON.parse(JSON.stringify(response));
          if(result.statusCode === 'E') {
            fakeSealNum = fakeSealNum + this.newcommmodule.ta0sealnum + ',';
            saveFlag = false;
          }    
        });
      }
    }

    console.log("saveFlag : "+saveFlag);
    if(validateSeal === true && saveFlag === false) {
      loading.dismiss();
      this.gf.warningAlert('Warning', 'Invalid seal number '+fakeSealNum.substring(0,fakeSealNum.length-1)+' found!', 'Close');   
      return;

    } else {
      //Save new crimpless seal
      if(this.newterminalcover1.ta0sealnum !== null &&  this.newterminalcover1.ta0sealnum !== undefined && this.newterminalcover1.ta0sealnum !== '') {
        console.log("New Terminal Cover 1 " + this.newterminalcover1.assetnum);
        console.log("New Terminal Cover 1 " + this.newterminalcover1.ta0sealnum);
        console.log("New Terminal Cover 1 " + this.newterminalcover1.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newterminalcover1.parent = ta0olddeviceassetnum;
        } else {
          this.newterminalcover1.parent = assetnum;
        }
        this.newterminalcover1.orgid = orgid;
        this.newterminalcover1.siteid = siteid;
        this.newterminalcover1.wonum = wonum; 
        this.newterminalcover1.ta0installind= true;
        this.newterminalcover1.devicelocind=false;
        this.newterminalcover1.devicecategory=ta0devicecategory;
        this.newterminalcover1.serialnum = ta0serialnum;
        this.newterminalcover1.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newterminalcover1); 
      }
      if(this.newterminalcover2.ta0sealnum !== null &&  this.newterminalcover2.ta0sealnum !== undefined && this.newterminalcover2.ta0sealnum !== '') {
        console.log("New Terminal Cover 2 " + this.newterminalcover2.assetnum);
        console.log("New Terminal Cover 2 " + this.newterminalcover2.ta0sealnum);
        console.log("New Terminal Cover 2 " + this.newterminalcover2.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newterminalcover2.parent = ta0olddeviceassetnum;
        } else {
          this.newterminalcover2.parent = assetnum;
        }      
        this.newterminalcover2.orgid = orgid;
        this.newterminalcover2.siteid = siteid;
        this.newterminalcover2.wonum = wonum; 
        this.newterminalcover2.ta0installind= true;
        this.newterminalcover2.devicelocind=false;
        this.newterminalcover2.devicecategory=ta0devicecategory;
        this.newterminalcover2.serialnum = ta0serialnum;
        this.newterminalcover2.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newterminalcover2); 
      }
      if(this.newmetercover1.ta0sealnum !== null &&  this.newmetercover1.ta0sealnum !== undefined && this.newmetercover1.ta0sealnum !== '') {
        console.log("New Meter Cover 1 " + this.newmetercover1.assetnum);
        console.log("New Meter Cover 1 " + this.newmetercover1.ta0sealnum);
        console.log("New Meter Cover 1 " + this.newmetercover1.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newmetercover1.parent = ta0olddeviceassetnum;
        } else {
          this.newmetercover1.parent = assetnum;
        }   
        this.newmetercover1.orgid = orgid;
        this.newmetercover1.siteid = siteid;
        this.newmetercover1.wonum = wonum; 
        this.newmetercover1.ta0installind= true;
        this.newmetercover1.devicelocind=false;
        this.newmetercover1.devicecategory=ta0devicecategory;
        this.newmetercover1.serialnum = ta0serialnum;
        this.newmetercover1.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newmetercover1); 
      }
      if(this.newmetercover2.ta0sealnum !== null &&  this.newmetercover2.ta0sealnum !== undefined && this.newmetercover2.ta0sealnum !== '') {
        console.log("New Meter Cover 2 " + this.newmetercover2.assetnum);
        console.log("New Meter Cover 2 " + this.newmetercover2.ta0sealnum);
        console.log("New Meter Cover 2 " + this.newmetercover2.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newmetercover2.parent = ta0olddeviceassetnum;
        } else {
          this.newmetercover2.parent = assetnum;
        }   
        this.newmetercover2.orgid = orgid;
        this.newmetercover2.siteid = siteid;
        this.newmetercover2.wonum = wonum; 
        this.newmetercover2.ta0installind= true;
        this.newmetercover2.devicelocind=false;
        this.newmetercover2.devicecategory=ta0devicecategory;
        this.newmetercover2.serialnum = ta0serialnum;
        this.newmetercover2.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newmetercover2); 
      }
      if(this.newmetercover3.ta0sealnum !== null &&  this.newmetercover3.ta0sealnum !== undefined && this.newmetercover3.ta0sealnum !== '') {
        console.log("New Meter Cover 3 " + this.newmetercover3.assetnum);
        console.log("New Meter Cover 3 " + this.newmetercover3.ta0sealnum);
        console.log("New Meter Cover 3 " + this.newmetercover3.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newmetercover3.parent = ta0olddeviceassetnum;
        } else {
          this.newmetercover3.parent = assetnum;
        }   
        this.newmetercover3.orgid = orgid;
        this.newmetercover3.siteid = siteid;
        this.newmetercover3.wonum = wonum; 
        this.newmetercover3.ta0installind= true;
        this.newmetercover3.devicelocind=false;
        this.newmetercover3.devicecategory=ta0devicecategory;
        this.newmetercover3.serialnum = ta0serialnum;
        this.newmetercover3.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newmetercover3); 
      }
      if(this.newmdbutton.ta0sealnum !== null &&  this.newmdbutton.ta0sealnum !== undefined && this.newmdbutton.ta0sealnum !== '') {
        console.log("New MD Button " + this.newmdbutton.assetnum);
        console.log("New MD Button " + this.newmdbutton.ta0sealnum);
        console.log("New MD Button " + this.newmdbutton.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newmdbutton.parent = ta0olddeviceassetnum;
        } else {
          this.newmdbutton.parent = assetnum;
        }   
        this.newmdbutton.orgid = orgid;
        this.newmdbutton.siteid = siteid;
        this.newmdbutton.wonum = wonum; 
        this.newmdbutton.ta0installind= true;
        this.newmdbutton.devicelocind=false;
        this.newmdbutton.devicecategory=ta0devicecategory;
        this.newmdbutton.serialnum = ta0serialnum;
        this.newmdbutton.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newmdbutton); 
      }
      if(this.newopticaleyecover.ta0sealnum !== null &&  this.newopticaleyecover.ta0sealnum !== undefined && this.newopticaleyecover.ta0sealnum !== '') {
        console.log("New Optical Eye Cover " + this.newopticaleyecover.assetnum);
        console.log("New Optical Eye Cover " + this.newopticaleyecover.ta0sealnum);
        console.log("New Optical Eye Cover " + this.newopticaleyecover.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newopticaleyecover.parent = ta0olddeviceassetnum;
        } else {
          this.newopticaleyecover.parent = assetnum;
        }   
        this.newopticaleyecover.orgid = orgid;
        this.newopticaleyecover.siteid = siteid;
        this.newopticaleyecover.wonum = wonum; 
        this.newopticaleyecover.ta0installind= true;
        this.newopticaleyecover.devicelocind=false;
        this.newopticaleyecover.devicecategory=ta0devicecategory;
        this.newopticaleyecover.serialnum = ta0serialnum;
        this.newopticaleyecover.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newopticaleyecover); 
      }
      if(this.newmeterbattery.ta0sealnum !== null &&  this.newmeterbattery.ta0sealnum !== undefined && this.newmeterbattery.ta0sealnum !== '') {
        console.log("New Meter Battery " + this.newmeterbattery.assetnum);
        console.log("New Meter Battery " + this.newmeterbattery.ta0sealnum);
        console.log("New Meter Battery " + this.newmeterbattery.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newmeterbattery.parent = ta0olddeviceassetnum;
        } else {
          this.newmeterbattery.parent = assetnum;
        }   
        this.newmeterbattery.orgid = orgid;
        this.newmeterbattery.siteid = siteid;
        this.newmeterbattery.wonum = wonum; 
        this.newmeterbattery.ta0installind= true;
        this.newmeterbattery.devicelocind=false;
        this.newmeterbattery.devicecategory=ta0devicecategory;
        this.newmeterbattery.serialnum = ta0serialnum;
        this.newmeterbattery.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newmeterbattery); 
      }
      if(this.newcommmodule.ta0sealnum !== null &&  this.newcommmodule.ta0sealnum !== undefined && this.newcommmodule.ta0sealnum !== '') {
        console.log("New Comm Module " + this.newcommmodule.assetnum);
        console.log("New Comm Module " + this.newcommmodule.ta0sealnum);
        console.log("New Comm Module " + this.newcommmodule.ta0seallocation);
        if(ta0olddeviceassetnum !== null &&  ta0olddeviceassetnum !== undefined && ta0olddeviceassetnum !== '') {
          this.newcommmodule.parent = ta0olddeviceassetnum;
        } else {
          this.newcommmodule.parent = assetnum;
        }   
        this.newcommmodule.orgid = orgid;
        this.newcommmodule.siteid = siteid;
        this.newcommmodule.wonum = wonum; 
        this.newcommmodule.ta0installind= true;
        this.newcommmodule.devicelocind=false;
        this.newcommmodule.devicecategory=ta0devicecategory;
        this.newcommmodule.serialnum = ta0serialnum;
        this.newcommmodule.ta0sealindicator='N';
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.newcommmodule); 
      }
      // Save Seal Details...
      // Save Data MeterCover
      if ((this.meterCoverArray[0].ta0sealnum != null || this.meterCoverArray[0].ta0sealnum != undefined) || this.meterCoverArray[0].ta0newsealnum != null || this.meterCoverArray[0].ta0newsealnum != undefined) {

        console.log("meterCoverArray : " + JSON.stringify(this.meterCoverArray));
        for (var i = 0; i < this.meterCoverArray.length; i++) {

          this.meterCoverArray[i].assetnum = assetnum;
          this.meterCoverArray[i].orgid = orgid;
          this.meterCoverArray[i].siteid = siteid;
          this.meterCoverArray[i].wonum = wonum;
          //this.meterCoverArray[i].ta0seallocation = "METER_COVER_" + (i + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterCoverArray[i]);
        }
      }

      // Save Data TerminalCover
      if ((this.terminalCoverArray[0].ta0sealnum != null || this.terminalCoverArray[0].ta0sealnum != undefined) || this.terminalCoverArray[0].ta0newsealnum != null || this.terminalCoverArray[0].ta0newsealnum != undefined) {

        console.log("meterCoverArray : " + JSON.stringify(this.meterCoverArray));
        for (var k = 0; k < this.terminalCoverArray.length; k++) {

          this.terminalCoverArray[k].assetnum = assetnum;
          this.terminalCoverArray[k].siteid = siteid;
          this.terminalCoverArray[k].wonum = wonum;
          //this.terminalCoverArray[k].ta0seallocation = "TERMINAL_COVER_" + (k + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCoverArray[k]);
        }
      }


      // Save Data Fuse
      // if ((this.fuseArray[0].ta0sealnum != null || this.fuseArray[0].ta0sealnum != undefined) || this.fuseArray[0].ta0newsealnum != null || this.fuseArray[0].ta0newsealnum != undefined) {

      //   for (var j = 0; j < this.fuseArray.length; j++) {

      //     this.fuseArray[j].assetnum = assetnum;
      //     this.fuseArray[j].orgid = orgid;
      //     this.fuseArray[j].siteid = siteid;
      //     this.fuseArray[j].wonum = wonum;
      //     //this.fuseArray[j].ta0seallocation = "METER_FUSE_" + (j + 1);
      //     this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.fuseArray[j]);
      //   }
      // }

      // Save Data MDButton
      if ((this.mdButtonArray[0].ta0sealnum != null || this.mdButtonArray[0].ta0sealnum != undefined) || this.fuseArray[0].ta0newsealnum != null || this.fuseArray[0].ta0newsealnum != undefined) {

        for (var m = 0; m < this.mdButtonArray.length; m++) {

          this.mdButtonArray[m].assetnum = assetnum;
          this.mdButtonArray[m].orgid = orgid;
          this.mdButtonArray[m].siteid = siteid;
          this.mdButtonArray[m].wonum = wonum;
          //this.mdButtonArray[m].ta0seallocation = "MD_BUTTON_" + (m + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.mdButtonArray[m]);
        }
      }

      // Save Data Battery
      if ((this.meterBatteryArray[0].ta0sealnum != null || this.meterBatteryArray[0].ta0sealnum != undefined) || this.meterBatteryArray[0].ta0newsealnum != null || this.meterBatteryArray[0].ta0newsealnum != undefined) {

        for (var n = 0; n < this.meterBatteryArray.length; n++) {

          this.meterBatteryArray[n].assetnum = assetnum;
          this.meterBatteryArray[n].orgid = orgid;
          this.meterBatteryArray[n].siteid = siteid;
          this.meterBatteryArray[n].wonum = wonum;
          //this.meterBatteryArray[n].ta0seallocation = "METER_BATTERY_" + (n + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterBatteryArray[n]);
        }
      }

      // Save Data OpticalEyeCover
      if ((this.opticalEyeArray[0].ta0sealnum != null || this.opticalEyeArray[0].ta0sealnum != undefined) || this.opticalEyeArray[0].ta0newsealnum != null || this.opticalEyeArray[0].ta0newsealnum != undefined) {

        for (var b = 0; b < this.opticalEyeArray.length; b++) {

          this.opticalEyeArray[b].assetnum = assetnum;
          this.opticalEyeArray[b].orgid = orgid;
          this.opticalEyeArray[b].siteid = siteid;
          this.opticalEyeArray[b].wonum = wonum;
          //this.opticalEyeArray[b].ta0seallocation = "OPTICAL_EYE_COVER_" + (b + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.opticalEyeArray[b]);
        }
      }

      // Save Data Comm Module
      if ((this.commModuleArray[0].ta0sealnum != null || this.commModuleArray[0].ta0sealnum != undefined)) {

        for (var b = 0; b < this.commModuleArray.length; b++) {

          this.commModuleArray[b].assetnum = assetnum;
          this.commModuleArray[b].orgid = orgid;
          this.commModuleArray[b].siteid = siteid;
          this.commModuleArray[b].wonum = wonum;
          //this.opticalEyeArray[b].ta0seallocation = "OPTICAL_EYE_COVER_" + (b + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.commModuleArray[b]);
        }
      }

      // Save Sticker Details...
      // Save TerminalCover
      if ((this.sterminalCoverArray[0].ta0stickernum != null || this.sterminalCoverArray[0].ta0stickernum != undefined) || (this.sterminalCoverArray[0].ta0newstickernum != null || this.sterminalCoverArray[0].ta0newstickernum != undefined) || (this.sterminalCoverArray[0].ta0stickercondition != null || this.sterminalCoverArray[0].ta0stickercondition != undefined)) {

        for (var i = 0; i < this.sterminalCoverArray.length; i++) {

          this.sterminalCoverArray[i].assetnum = assetnum;
          this.sterminalCoverArray[i].orgid = orgid;
          this.sterminalCoverArray[i].siteid = siteid;
          this.sterminalCoverArray[i].wonum = wonum;
          this.sterminalCoverArray[i].ta0stickerlocation = "TERMINAL_COVER_" + (i + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalCoverArray[i]);
        }
      }

      // Save Fuse
      if ((this.sfuseArray[0].ta0stickernum != null || this.sfuseArray[0].ta0stickernum != undefined) || this.sfuseArray[0].ta0newstickernum != null || this.sfuseArray[0].ta0newstickernum != undefined) {

        for (var i = 0; i < this.sfuseArray.length; i++) {

          this.sfuseArray[i].assetnum = assetnum;
          this.sfuseArray[i].orgid = orgid;
          this.sfuseArray[i].siteid = siteid;
          this.sfuseArray[i].wonum = wonum;
          this.sfuseArray[i].ta0stickerlocation = "METER_FUSE_" + (i + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sfuseArray[i]);
        }
      }

      // Save Other Seal Details...
      // Save TTB
      if ((this.ttbArray[0].ta0sealnum != null || this.ttbArray[0].ta0sealnum != undefined) || this.ttbArray[0].ta0newsealnum != null || this.ttbArray[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.ttbArray.length; i++) {

          this.ttbArray[i].assetnum = assetnum;
          this.ttbArray[i].orgid = orgid;
          this.ttbArray[i].siteid = siteid;
          this.ttbArray[i].wonum = wonum;
          this.ttbArray[i].ta0seallocation = "TEST_BLOCK_" + (i + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.ttbArray[i]);
        }
      }

      // Save PT Chamber
      if (this.showMvHvFields) {

        if ((this.ptChamberArray[0].ta0sealnum != null || this.ptChamberArray[0].ta0sealnum != undefined) || this.ptChamberArray[0].ta0newsealnum != null || this.ptChamberArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.ptChamberArray.length; i++) {
            this.ptChamberArray[i].assetnum = assetnum;
            this.ptChamberArray[i].orgid = orgid;
            this.ptChamberArray[i].siteid = siteid;
            this.ptChamberArray[i].wonum = wonum;
            this.ptChamberArray[i].ta0seallocation = "PT_CHAMBER_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.ptChamberArray[i]);
          }
        }

        // Save CT Chamber
        if ((this.ctChamberArray[0].ta0sealnum != null || this.ctChamberArray[0].ta0sealnum != undefined) || this.ctChamberArray[0].ta0newsealnum != null || this.ctChamberArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.ctChamberArray.length; i++) {

            this.ctChamberArray[i].assetnum = assetnum;
            this.ctChamberArray[i].orgid = orgid;
            this.ctChamberArray[i].siteid = siteid;
            this.ctChamberArray[i].wonum = wonum;
            this.ctChamberArray[i].ta0seallocation = "CT_CHAMBER_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.ctChamberArray[i]);
          }
        }

        // Save PT Sec. Fuse
        if ((this.ptSecondaryFuseArray[0].ta0sealnum != null || this.ptSecondaryFuseArray[0].ta0sealnum != undefined) || this.ptSecondaryFuseArray[0].ta0newsealnum != null || this.ptSecondaryFuseArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.ptSecondaryFuseArray.length; i++) {

            this.ptSecondaryFuseArray[i].assetnum = assetnum;
            this.ptSecondaryFuseArray[i].orgid = orgid;
            this.ptSecondaryFuseArray[i].siteid = siteid;
            this.ptSecondaryFuseArray[i].wonum = wonum;
            this.ptSecondaryFuseArray[i].ta0seallocation = "PT_SEC_FUSE_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.ptSecondaryFuseArray[i]);
          }
        }

        // Save Meter Kiosk
        if ((this.meterKioskArray[0].ta0sealnum != null || this.meterKioskArray[0].ta0sealnum != undefined) || this.meterKioskArray[0].ta0newsealnum != null || this.meterKioskArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.meterKioskArray.length; i++) {

            this.meterKioskArray[i].assetnum = assetnum;
            this.meterKioskArray[i].orgid = orgid;
            this.meterKioskArray[i].siteid = siteid;
            this.meterKioskArray[i].wonum = wonum;
            this.meterKioskArray[i].ta0seallocation = "KIOSK_PANELDOOR_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterKioskArray[i]);
          }
        }

        // Save Meter Test Box
        if ((this.meterTestBoxArray[0].ta0sealnum != null || this.meterTestBoxArray[0].ta0sealnum != undefined) || this.meterTestBoxArray[0].ta0newsealnum != null || this.meterTestBoxArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.meterTestBoxArray.length; i++) {

            this.meterTestBoxArray[i].assetnum = assetnum;
            this.meterTestBoxArray[i].orgid = orgid;
            this.meterTestBoxArray[i].siteid = siteid;
            this.meterTestBoxArray[i].wonum = wonum;
            this.meterTestBoxArray[i].ta0seallocation = "METER_TEST_BOX_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterTestBoxArray[i]);
          }
        }

        // Save Termination Box
        if ((this.terminalBoxArray[0].ta0sealnum != null || this.terminalBoxArray[0].ta0sealnum != undefined) || this.terminalBoxArray[0].ta0newsealnum != null || this.terminalBoxArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.terminalBoxArray.length; i++) {

            this.terminalBoxArray[i].assetnum = assetnum;
            this.terminalBoxArray[i].orgid = orgid;
            this.terminalBoxArray[i].siteid = siteid;
            this.terminalBoxArray[i].wonum = wonum;
            this.terminalBoxArray[i].ta0seallocation = "TERMINATION_BOX_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalBoxArray[i]);
          }
        }

        // Save Marshalling Box
        if ((this.marshallingBoxArray[0].ta0sealnum != null || this.marshallingBoxArray[0].ta0sealnum != undefined) || this.marshallingBoxArray[0].ta0newsealnum != null || this.marshallingBoxArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.marshallingBoxArray.length; i++) {

            this.marshallingBoxArray[i].assetnum = assetnum;
            this.marshallingBoxArray[i].orgid = orgid;
            this.marshallingBoxArray[i].siteid = siteid;
            this.marshallingBoxArray[i].wonum = wonum;
            this.marshallingBoxArray[i].ta0seallocation = "MARSHALLING_BOX_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.marshallingBoxArray[i]);
          }
        }

        // Save Terminal CT
        if ((this.terminalCtArray[0].ta0sealnum != null || this.terminalCtArray[0].ta0sealnum != undefined) || this.terminalCtArray[0].ta0newsealnum != null || this.terminalCtArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.terminalCtArray.length; i++) {

            this.terminalCtArray[i].assetnum = assetnum;
            this.terminalCtArray[i].orgid = orgid;
            this.terminalCtArray[i].siteid = siteid;
            this.terminalCtArray[i].wonum = wonum;
            this.terminalCtArray[i].ta0seallocation = "TERMINAL_CT_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtArray[i]);
          }
        }
      }

      // Save CT Panel
      if (this.showLvFields) {

        if ((this.ctPanelArray[0].ta0sealnum != null || this.ctPanelArray[0].ta0sealnum != undefined) || this.ctPanelArray[0].ta0newsealnum != null || this.ctPanelArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.ctPanelArray.length; i++) {

            this.ctPanelArray[i].assetnum = assetnum;
            this.ctPanelArray[i].orgid = orgid;
            this.ctPanelArray[i].siteid = siteid;
            this.ctPanelArray[i].wonum = wonum;
            this.ctPanelArray[i].ta0seallocation = "CT_CHAMBER_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.ctPanelArray[i]);
          }
        }

        // Save Panel Meter
        // if ((this.panelMeterArray[0].ta0sealnum != null || this.panelMeterArray[0].ta0sealnum != undefined) || this.panelMeterArray[0].ta0newsealnum != null || this.panelMeterArray[0].ta0newsealnum != undefined) {

        //   for (var i = 0; i < this.panelMeterArray.length; i++) {

        //     this.panelMeterArray[i].assetnum = assetnum;
        //     this.panelMeterArray[i].orgid = orgid;
        //     this.panelMeterArray[i].siteid = siteid;
        //     this.panelMeterArray[i].wonum = wonum;
        //     this.panelMeterArray[i].ta0seallocation = "PANEL_METER_" + (i + 1);
        //     this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.panelMeterArray[i]);
        //   }
        // }

        // Save Panel Meter
        if ((this.meterKioskArray[0].ta0sealnum != null || this.meterKioskArray[0].ta0sealnum != undefined) || this.meterKioskArray[0].ta0newsealnum != null || this.meterKioskArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.meterKioskArray.length; i++) {

            this.meterKioskArray[i].assetnum = assetnum;
            this.meterKioskArray[i].orgid = orgid;
            this.meterKioskArray[i].siteid = siteid;
            this.meterKioskArray[i].wonum = wonum;
            this.meterKioskArray[i].ta0seallocation = "KIOSK_PANELDOOR_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterKioskArray[i]);
          }
        }

        // Save Terminal CT
        if ((this.terminalCtArray[0].ta0sealnum != null || this.terminalCtArray[0].ta0sealnum != undefined) || this.terminalCtArray[0].ta0newsealnum != null || this.terminalCtArray[0].ta0newsealnum != undefined) {

          for (var i = 0; i < this.terminalCtArray.length; i++) {

            this.terminalCtArray[i].assetnum = assetnum;
            this.terminalCtArray[i].orgid = orgid;
            this.terminalCtArray[i].siteid = siteid;
            this.terminalCtArray[i].wonum = wonum;
            this.terminalCtArray[i].ta0seallocation = "TERMINAL_CT_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCtArray[i]);
          }
        }
      }

      // Save Modem
      if ((this.modemArray[0].ta0sealnum != null || this.modemArray[0].ta0sealnum != undefined) || this.modemArray[0].ta0newsealnum != null || this.modemArray[0].ta0newsealnum != undefined) {

        for (var i = 0; i < this.modemArray.length; i++) {

          this.modemArray[i].assetnum = assetnum;
          this.modemArray[i].orgid = orgid;
          this.modemArray[i].siteid = siteid;
          this.modemArray[i].wonum = wonum;
          this.modemArray[i].ta0seallocation = "MODEM_" + (i + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.modemArray[i]);
        }
      }

      // Save Other Sticker Details
      if (this.showMvHvFields) {
        // Save TTB
        if ((this.sttbArray[0].ta0stickernum != null || this.sttbArray[0].ta0stickernum != undefined) || this.sttbArray[0].ta0newstickernum != null || this.sttbArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sttbArray.length; i++) {

            this.sttbArray[i].assetnum = assetnum;
            this.sttbArray[i].orgid = orgid;
            this.sttbArray[i].siteid = siteid;
            this.sttbArray[i].wonum = wonum;
            this.sttbArray[i].ta0stickerlocation = "TEST_BLOCK_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sttbArray[i]);
          }
        }

        // Save PT Chamber
        if ((this.sptChamberArray[0].ta0stickernum != null || this.sptChamberArray[0].ta0stickernum != undefined) || this.sptChamberArray[0].ta0newstickernum != null || this.sptChamberArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sptChamberArray.length; i++) {

            this.sptChamberArray[i].assetnum = assetnum;
            this.sptChamberArray[i].orgid;
            this.sptChamberArray[i].siteid = siteid;
            this.sptChamberArray[i].wonum = wonum;
            this.sptChamberArray[i].ta0stickerlocation = "PT_CHAMBER_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sptChamberArray[i]);
          }
        }

        // Save CT Chamber
        if ((this.sctChamberArray[0].ta0stickernum != null || this.sctChamberArray[0].ta0stickernum != undefined) || this.sctChamberArray[0].ta0newstickernum != null || this.sctChamberArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sctChamberArray.length; i++) {

            this.sctChamberArray[i].assetnum = assetnum;
            this.sctChamberArray[i].orgid = orgid;
            this.sctChamberArray[i].siteid = siteid;
            this.sctChamberArray[i].wonum = wonum;
            this.sctChamberArray[i].ta0stickerlocation = "CT_CHAMBER_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sctChamberArray[i]);
          }
        }

        // Save PT Sec. Fuse
        if ((this.sptSecondaryFuseArray[0].ta0stickernum != null || this.sptSecondaryFuseArray[0].ta0stickernum != undefined) || this.sptSecondaryFuseArray[0].ta0newstickernum != null || this.sptSecondaryFuseArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sptSecondaryFuseArray.length; i++) {

            this.sptSecondaryFuseArray[i].assetnum = assetnum;
            this.sptSecondaryFuseArray[i].orgid = orgid;
            this.sptSecondaryFuseArray[i].siteid = siteid;
            this.sptSecondaryFuseArray[i].wonum = wonum;
            this.sptSecondaryFuseArray[i].ta0stickerlocation = "PT_SEC_FUSE_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sptSecondaryFuseArray[i]);
          }
        }

        // Save Meter Kiosk
        if ((this.smeterKioskArray[0].ta0stickernum != null || this.smeterKioskArray[0].ta0stickernum != undefined) || this.smeterKioskArray[0].ta0newstickernum != null || this.smeterKioskArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.smeterKioskArray.length; i++) {

            this.smeterKioskArray[i].assetnum = assetnum;
            this.smeterKioskArray[i].orgid = orgid;
            this.smeterKioskArray[i].siteid = siteid;
            this.smeterKioskArray[i].wonum = wonum;
            this.smeterKioskArray[i].ta0stickerlocation = "KIOSK_PANELDOOR_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.smeterKioskArray[i]);
          }
        }

        // Save Meter Test Box
        if ((this.smeterTestBoxArray[0].ta0stickernum != null || this.smeterTestBoxArray[0].ta0stickernum != undefined) || this.smeterTestBoxArray[0].ta0newstickernum != null || this.smeterTestBoxArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.smeterTestBoxArray.length; i++) {

            this.smeterTestBoxArray[i].assetnum = assetnum;
            this.smeterTestBoxArray[i].orgid = orgid;
            this.smeterTestBoxArray[i].siteid = siteid;
            this.smeterTestBoxArray[i].wonum = wonum;
            this.smeterTestBoxArray[i].ta0stickerlocation = "METER_TEST_BOX_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.smeterTestBoxArray[i]);
          }
        }

        // Save Termination Box
        if ((this.sterminalBoxArray[0].ta0stickernum != null || this.sterminalBoxArray[0].ta0stickernum != undefined) || this.sterminalBoxArray[0].ta0newstickernum != null || this.sterminalBoxArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sterminalBoxArray.length; i++) {

            this.sterminalBoxArray[i].assetnum = assetnum;
            this.sterminalBoxArray[i].orgid = orgid;
            this.sterminalBoxArray[i].siteid = siteid;
            this.sterminalBoxArray[i].wonum = wonum;
            this.sterminalBoxArray[i].ta0stickerlocation = "TERMINATION_BOX_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalBoxArray[i]);
          }
        }

        // Save Marshalling Box
        if ((this.smarshallingBoxArray[0].ta0stickernum != null || this.smarshallingBoxArray[0].ta0stickernum != undefined) || this.smarshallingBoxArray[0].ta0newstickernum != null || this.smarshallingBoxArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.smarshallingBoxArray.length; i++) {

            this.smarshallingBoxArray[i].assetnum = assetnum;
            this.smarshallingBoxArray[i].orgid = orgid;
            this.smarshallingBoxArray[i].siteid = siteid;
            this.smarshallingBoxArray[i].wonum = wonum;
            this.smarshallingBoxArray[i].ta0stickerlocation = "MARSHALLING_BOX_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.smarshallingBoxArray[i]);
          }
        }

        // Save Terminal CT
        debugger;
        if ((this.sterminalCtArray[0].ta0stickernum != null || this.sterminalCtArray[0].ta0stickernum != undefined) || this.sterminalCtArray[0].ta0newstickernum != null || this.sterminalCtArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sterminalCtArray.length; i++) {

            this.sterminalCtArray[i].assetnum = assetnum;
            this.sterminalCtArray[i].orgid = orgid;
            this.sterminalCtArray[i].siteid = siteid;
            this.sterminalCtArray[i].wonum = wonum;
            this.sterminalCtArray[i].ta0stickerlocation = "TERMINAL_CT_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalCtArray[i]);
          }
        }
      }

      // Save CT Panel
      if (this.showLvFields) {

        if ((this.sctPanelArray[0].ta0stickernum != null || this.sctPanelArray[0].ta0stickernum != undefined) || this.sctPanelArray[0].ta0newstickernum != null || this.sctPanelArray[0].ta0newstickernum != undefined) {

          for (var i = 0; i < this.sctPanelArray.length; i++) {

            this.sctPanelArray[i].assetnum = assetnum;
            this.sctPanelArray[i].orgid = orgid;
            this.sctPanelArray[i].siteid = siteid;
            this.sctPanelArray[i].wonum = wonum;
            this.sctPanelArray[i].ta0stickerlocation = "CT_CHAMBER_" + (i + 1);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sctPanelArray[i]);
          }
        }

        // Save Panel Meter
        if (this.showLvExtraFields) {

          if ((this.spanelMeterArray[0].ta0stickernum != null || this.spanelMeterArray[0].ta0stickernum != undefined) || this.spanelMeterArray[0].ta0newstickernum != null || this.spanelMeterArray[0].ta0newstickernum != undefined) {

            for (var i = 0; i < this.spanelMeterArray.length; i++) {

              this.spanelMeterArray[i].assetnum = assetnum;
              this.spanelMeterArray[i].orgid = orgid;
              this.spanelMeterArray[i].siteid = siteid;
              this.spanelMeterArray[i].wonum = wonum;
              this.spanelMeterArray[i].ta0stickerlocation = "PANEL_METER_" + (i + 1);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.spanelMeterArray[i]);
            }
          }

          // Save Terminal CT
          if (this.sterminalCtArray[0].ta0stickernum != null || this.sterminalCtArray[0].ta0stickernum != undefined) {

            for (var i = 0; i < this.sterminalCtArray.length; i++) {

              this.sterminalCtArray[i].assetnum = assetnum;
              this.sterminalCtArray[i].orgid = orgid;
              this.sterminalCtArray[i].siteid = siteid;
              this.sterminalCtArray[i].wonum = wonum;
              this.sterminalCtArray[i].ta0stickerlocation = "TERMINAL_CT_" + (i + 1);
              this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalCtArray[i]);
            }
          }
        }
      }

      // Save Modem
      if ((this.smodemArray[0].ta0stickernum != null || this.smodemArray[0].ta0stickernum != undefined) || this.smodemArray[0].ta0newstickernum != null || this.smodemArray[0].ta0newstickernum != undefined) {

        for (var i = 0; i < this.smodemArray.length; i++) {

          this.smodemArray[i].assetnum = assetnum;
          this.smodemArray[i].orgid = orgid;
          this.smodemArray[i].siteid = siteid;
          this.smodemArray[i].wonum = wonum;
          this.smodemArray[i].ta0stickerlocation = "MODEM_" + (i + 1);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.smodemArray[i]);
        }
      }

      // Setting flag button colour (alif) - (29.12.2018)
      this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0silstickerstatus = 'Y';

      // Saving the remarks into multiassetlocci for ZISP
      if (this.itemOri.json.worktype === "ZISP" || this.itemOri.json.worktype === "ZIST") {
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerbfremarks = this.ta0naremarks_before;
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4sealstickerremarks = this.ta0naremarks_after;
      }

      setTimeout(() => {
        loading.onWillDismiss(() => {
          console.log("this.itemOri : " + JSON.stringify(this.itemOri));
          this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
          this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
          this.gf.displayToast("Sil & Sticker Details updated.");
          loading.dismiss();
        });
      }, 10000);

      /**
      * Reason   : Saving to local storage (json data).
      * Created  : 22-01-2019
      */
      this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);

      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {

        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
        this.gf.displayToast("Sil & Sticker Details updated locally.");
        loading.dismiss();
        /** Sending latest data.. (alif) - (29.12.2018)*/
        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        delete itemVal['ta0registerdetail'];
        delete itemVal['ta0testdetail'];
        delete itemVal['ta4testdata'];
        
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
                  this.gf.warningAlert('Success', 'Sil & Sticker Details save successfully', 'Close');
                  /** Sending latest data.. (alif) - (29.12.2018)*/
                  // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                  // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                  this.navCtrl.pop();
                }
                loading.dismiss();

              }).catch(error => {
                console.log('service failure : ' + error);
                this.gf.warningAlert('Error', 'Sil & Sticker Details failed to save.', 'Close');
                loading.dismiss();
              });
          } else {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
            this.gf.displayToast("Sil & Sticker Details updated locally.");
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
              this.gf.warningAlert('Success', 'Sil & Sticker Details save successfully', 'Close');
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

  // Seal Section
  deleteMeterCover(mIndex) {
    if (mIndex != 0) {
      this.meterCoverArray.pop();
      if (this.meterCoverArray.length < 3) {
        this.showAddMeterCover = true;
      }
    }
  }

  deleteTerminalCover(mIndex) {
    if (mIndex != 0) {
      this.terminalCoverArray.pop();
      if (this.terminalCoverArray.length < 2) {
        this.showAddTerminalCover = true;
      }
    }
  }

  deleteFuse(mIndex) {
    if (mIndex != 0) {
      this.fuseArray.pop();
      if (this.fuseArray.length < 1) {
        this.showAddFuse = true;
      }
    }
  }

  deleteMdButton(mIndex) {
    if (mIndex != 0) {
      this.mdButtonArray.pop();
      if (this.mdButtonArray.length < 1) {
        this.showAddMdButton = true;
      }
    }
  }

  deleteMeterBattery(mIndex) {
    if (mIndex != 0) {
      this.meterBatteryArray.pop();
      if (this.meterBatteryArray.length < 1) {
        this.showAddMeterBattery = true;
      }
    }
  }

  deleteOpticalEye(mIndex) {
    if (mIndex != 0) {
      this.opticalEyeArray.pop();
      if (this.opticalEyeArray.length < 1) {
        this.showAddOpticalEye = true;
      }
    }
  }

  // Sticker Section
  deleteSterminalCover(mIndex) {
    if (mIndex != 0) {
      this.sterminalCoverArray.pop();
      if (this.sterminalCoverArray.length < 4) {
        this.showAddSterminalCover = true;
      }
    }
  }

  deleteSfuse(mIndex) {
    if (mIndex != 0) {
      this.sfuseArray.pop();
      if (this.sfuseArray.length < 4) {
        this.showAddSfuse = true;
      }
    }
  }

  // Other Seal Section
  deleteTtb(mIndex) {
    if (mIndex != 0) {
      this.ttbArray.pop();
      if (this.ttbArray.length < 4) {
        this.showAddTtb = true;
      }
    }
  }

  deleteModem(mIndex) {
    if (mIndex != 0) {
      this.modemArray.pop();
      if (this.modemArray.length < 4) {
        this.showAddModem = true;
      }
    }
  }

  // Seal (MVHV)
  deletePtChamber(mIndex) {
    if (mIndex != 0) {
      this.ptChamberArray.pop();
      if (this.ptChamberArray.length < 4) {
        this.showAddPtChamber = true;
      }
    }
  }

  deleteCtChamber(mIndex) {
    if (mIndex != 0) {
      this.ctChamberArray.pop();
      if (this.ctChamberArray.length < 4) {
        this.showAddCtChamber = true;
      }
    }
  }

  deletePtSecondaryFuse(mIndex) {
    if (mIndex != 0) {
      this.ptSecondaryFuseArray.pop();
      if (this.ptSecondaryFuseArray.length < 4) {
        this.showAddPtSecondaryFuse = true;
      }
    }
  }

  deleteMeterKiosk(mIndex) {
    if (mIndex != 0) {
      this.meterKioskArray.pop();
      if (this.meterKioskArray.length < 4) {
        this.showAddMeterKiosk = true;
      }
    }
  }

  deleteMeterTestBox(mIndex) {
    if (mIndex != 0) {
      this.meterTestBoxArray.pop();
      if (this.meterTestBoxArray.length < 4) {
        this.showAddMeterTestBox = true;
      }
    }
  }

  deleteTerminalBox(mIndex) {
    if (mIndex != 0) {
      this.terminalBoxArray.pop();
      if (this.terminalBoxArray.length < 4) {
        this.showAddTerminalBox = true;
      }
    }
  }

  deleteMarshallingBox(mIndex) {
    if (mIndex != 0) {
      this.marshallingBoxArray.pop();
      if (this.marshallingBoxArray.length < 4) {
        this.showAddMarshallingBox = true;
      }
    }
  }

  // Seal (LV)
  deleteCtPanel(mIndex) {
    if (mIndex != 0) {
      this.ctPanelArray.pop();
      if (this.ctPanelArray.length < 4) {
        this.showAddCtPanel = true;
      }
    }
  }

  deletePanelMeter(mIndex) {
    if (mIndex != 0) {
      this.panelMeterArray.pop();
      if (this.panelMeterArray.length < 4) {
        this.showAddPanelMeter = true;
      }
    }
  }

  deleteTerminalCt(mIndex) {
    if (mIndex != 0) {
      this.terminalCtArray.pop();
      if (this.terminalCtArray.length < 4) {
        this.showAddCtPanel = true;
      }
    }
  }

  // Other Sticker Section
  deleteSttb(mIndex) {
    if (mIndex != 0) {
      this.sttbArray.pop();
      if (this.sttbArray.length < 4) {
        this.showAddSttb = true;
      }
    }
  }

  deleteSmodem(mIndex) {
    if (mIndex != 0) {
      this.smodemArray.pop();
      if (this.smodemArray.length < 4) {
        this.showAddSmodem = true;
      }
    }
  }

  // Sticker (MVHV)
  deleteSptChamber(mIndex) {
    if (mIndex != 0) {
      this.sptChamberArray.pop();
      if (this.sptChamberArray.length < 4) {
        this.showAddSptChamber = true;
      }
    }
  }

  deleteSctChamber(mIndex) {
    if (mIndex != 0) {
      this.sctChamberArray.pop();
      if (this.sctChamberArray.length < 4) {
        this.showAddSctChamber = true;
      }
    }
  }

  deleteSptSecondaryFuse(mIndex) {
    if (mIndex != 0) {
      this.sptSecondaryFuseArray.pop();
      if (this.sptSecondaryFuseArray.length < 4) {
        this.showAddSptSecondaryFuse = true;
      }
    }
  }

  deleteSmeterKiosk(mIndex) {
    if (mIndex != 0) {
      this.smeterKioskArray.pop();
      if (this.smeterKioskArray.length < 4) {
        this.showAddSmeterKiosk = true;
      }
    }
  }

  deleteSmeterTestBox(mIndex) {
    if (mIndex != 0) {
      this.smeterTestBoxArray.pop();
      if (this.smeterTestBoxArray.length < 4) {
        this.showAddSmeterTestBox = true;
      }
    }
  }

  deleteSterminalBox(mIndex) {
    if (mIndex != 0) {
      this.sterminalBoxArray.pop();
      if (this.sterminalBoxArray.length < 4) {
        this.showAddSterminalBox = true;
      }
    }
  }

  deleteSmarshallingBox(mIndex) {
    if (mIndex != 0) {
      this.smarshallingBoxArray.pop();
      if (this.smarshallingBoxArray.length < 4) {
        this.showAddSmarshallingBox = true;
      }
    }
  }

  // Sticker (LV)
  deleteSctPanel(mIndex) {
    if (mIndex != 0) {
      this.sctPanelArray.pop();
      if (this.sctPanelArray.length < 4) {
        this.showAddSctPanel = true;
      }
    }
  }

  deleteSpanelMeter(mIndex) {
    if (mIndex != 0) {
      this.spanelMeterArray.pop();
      if (this.spanelMeterArray.length < 4) {
        this.showAddSpanelMeter = true;
      }
    }
  }

  deleteSterminalCt(mIndex) {
    if (mIndex != 0) {
      this.sterminalCtArray.pop();
      if (this.sterminalCtArray.length < 4) {
        this.showAddSterminalCt = true;
      }
    }
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

  barcodeScan(deviceDetailsArray, index, indicator, type) {
    console.log("Access barcodeScan");
    console.log("deviceDetailsArray : " + JSON.stringify(deviceDetailsArray));
    console.log("index : " + index);
    console.log("indicator : " + indicator);
    console.log("type : " + type);

    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log("Scan Serial Number : " + barcodeData.text.trim());

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
          if (deviceDetailsArray[index].ta0newsealnum === barcodeData.text.trim()) {
            this.gf.displayToast("Entered value is matches with barcode.");
          } else {
            if (deviceDetailsArray[index].ta0newsealnum !== '' && deviceDetailsArray[index].ta0newsealnum !== null && typeof deviceDetailsArray[index].ta0newsealnum !== 'undefined') {
              this.gf.displayToast("Entered value does not matches with barcode.");
            } else {
              this.ds.queryCrimplessData(barcodeData.text.trim()).then((result) => {
                var respObj: any = result;
                if (respObj.statusCode === 'S') {
                  deviceDetailsArray[index].ta0newsealnum = barcodeData.text.trim();
                } else {
                  this.gf.displayToast("Invalid Crimpless Seal " + barcodeData.text.trim());
                  deviceDetailsArray[index].ta0newsealnum = "";
                }
              },
                (error) => {
                  this.gf.displayToast("Error validate Crimpless Seal!");
                });
            }
          }
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

  //Ameer Check user input type
  userInputLengthNum(eventData, nameText, indexArray, type) {

    switch (nameText) {

      case 'terminalCTRed':
        const Numb_REGEXPterminalCTR = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueterminalCTR = eventData.target.value;
        var newVal2;
        let regExpterminalCTR = new RegExp(Numb_REGEXPterminalCTR);
        if (!regExpterminalCTR.test(newValueterminalCTR)) {
          newVal2 = newValueterminalCTR.substr(0, newValueterminalCTR.length - 1);
          eventData.target.value = newVal2;
        } else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalCtRedArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalCtRedArray[indexArray].ta0newsealnum = eventData.target.value;
        }

      case 'terminalCTYellow':
        const Numb_REGEXPterminalCTY = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueterminalCTY = eventData.target.value;
        var newVal2;
        let regExpterminalCTY = new RegExp(Numb_REGEXPterminalCTY);
        if (!regExpterminalCTY.test(newValueterminalCTY)) {
          newVal2 = newValueterminalCTY.substr(0, newValueterminalCTY.length - 1);
          eventData.target.value = newVal2;
        } else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalCtYellowArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalCtYellowArray[indexArray].ta0newsealnum = eventData.target.value;
        }

      case 'terminalCTBlue':
        const Numb_REGEXPterminalCTB = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueterminalCTB = eventData.target.value;
        var newVal2;
        let regExpterminalCTB = new RegExp(Numb_REGEXPterminalCTB);
        if (!regExpterminalCTB.test(newValueterminalCTB)) {
          newVal2 = newValueterminalCTB.substr(0, newValueterminalCTB.length - 1);
          eventData.target.value = newVal2;
        } else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalCtBlueArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalCtBlueArray[indexArray].ta0newsealnum = eventData.target.value;
        }

      case 'mtrCover':
        const Numb_REGEXPmtrCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueMtrCvr = eventData.target.value;
        var newVal2;
        let regExpmtrCvr = new RegExp(Numb_REGEXPmtrCover);
        if (!regExpmtrCvr.test(newValueMtrCvr)) {
          newVal2 = newValueMtrCvr.substr(0, newValueMtrCvr.length - 1);
          eventData.target.value = newVal2;
        } else {
          eventData.target.value;
        }

        if (type === "before") {
          this.meterCoverArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterCoverArray[indexArray].ta0newsealnum = eventData.target.value;
        }

        break;
      case 'terminalCover':
        const Numb_REGEXPTerminal = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValue = eventData.target.value;
        var newVal2;
        let regExpTerminal = new RegExp(Numb_REGEXPTerminal);

        if (!regExpTerminal.test(newValue)) {
          newVal2 = newValue.substr(0, newValue.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalCoverArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalCoverArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'fuse':
        const Numb_REGEXPFuse = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueFuse = eventData.target.value;
        var newVal2;
        let regExpFuse = new RegExp(Numb_REGEXPFuse);

        if (!regExpFuse.test(newValueFuse)) {
          newVal2 = newValueFuse.substr(0, newValueFuse.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        if (type === "before") {
          this.fuseArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.fuseArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'MDBtn':
        const RegExpMeterBtn = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValue2 = eventData.target.value;
        var newVal2;
        let regExp2 = new RegExp(RegExpMeterBtn);

        if (!regExp2.test(newValue2)) {
          newVal2 = newValue2.substr(0, newValue2.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        this.mdButtonArray[indexArray].ta0sealnum = eventData.target.value;
        break;
      case 'Battery':
        const RegExpBattery = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueBattery = eventData.target.value;
        var newVal2;
        let regExpBattery = new RegExp(RegExpBattery);

        if (!regExpBattery.test(newValueBattery)) {
          newVal2 = newValueBattery.substr(0, newValueBattery.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.meterBatteryArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterBatteryArray[indexArray].ta0newsealnum = eventData.target.value;
        }

        break;
      case 'OptEye':
        const RegExpOptEye = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueOptEye = eventData.target.value;
        var newVal2;
        let regExpOptEye = new RegExp(RegExpOptEye);

        if (!regExpOptEye.test(newValueOptEye)) {
          newVal2 = newValueOptEye.substr(0, newValueOptEye.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.opticalEyeArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.opticalEyeArray[indexArray].ta0newsealnum = eventData.target.value;
        }

        break;
      case 'STerminalCover':
        const RegExpSTerminalCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSTerminalCover = eventData.target.value;
        var newVal2;
        let regExpSTerminalCover = new RegExp(RegExpSTerminalCover);

        if (!regExpSTerminalCover.test(newValueSTerminalCover)) {
          newVal2 = newValueSTerminalCover.substr(0, newValueSTerminalCover.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sterminalCoverArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sterminalCoverArray[indexArray].ta0newstickernum = eventData.target.value;
        }

        break;
      case 'SFuse':
        const RegExpSFuse = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSFuse = eventData.target.value;
        var newVal2;
        let regExpSFuse = new RegExp(RegExpSFuse);

        if (!regExpSFuse.test(newValueSFuse)) {
          newVal2 = newValueSFuse.substr(0, newValueSFuse.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sfuseArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sfuseArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'STTB':
        const RegExpSTTB = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSTTB = eventData.target.value;
        var newVal2;
        let regExpSTTB = new RegExp(RegExpSTTB);

        if (!regExpSTTB.test(newValueSTTB)) {
          newVal2 = newValueSTTB.substr(0, newValueSTTB.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        if (type === "before") {
          this.ttbArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ttbArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptChamber':
        const RegExpptChamber = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptChamber = eventData.target.value;
        var newVal2;
        let regExpptChamber = new RegExp(RegExpptChamber);

        if (!regExpptChamber.test(newValueptChamber)) {
          newVal2 = newValueptChamber.substr(0, newValueptChamber.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ptChamberArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptChamberArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ctChamber':
        const RegExpctChamber = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuectChamber = eventData.target.value;
        var newVal2;
        let regExpctChamber = new RegExp(RegExpctChamber);

        if (!regExpctChamber.test(newValuectChamber)) {
          newVal2 = newValuectChamber.substr(0, newValuectChamber.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.ctChamberArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ctChamberArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'ptSecFuse':
        const RegExpptSecFuser = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueptSecFuse = eventData.target.value;
        var newVal2;
        let regExpptSecFuse = new RegExp(RegExpptSecFuser);

        if (!regExpptSecFuse.test(newValueptSecFuse)) {
          newVal2 = newValueptSecFuse.substr(0, newValueptSecFuse.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.ptSecondaryFuseArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ptSecondaryFuseArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'mtrKiosk':
        const RegExpmtrKiosk = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuemtrKiosk = eventData.target.value;
        var newVal2;
        let regExpmtrKiosk = new RegExp(RegExpmtrKiosk);

        if (!regExpmtrKiosk.test(newValuemtrKiosk)) {
          newVal2 = newValuemtrKiosk.substr(0, newValuemtrKiosk.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.meterKioskArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterKioskArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'mtrTestBox':
        const RegExpmtrTestBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuemtrTestBox = eventData.target.value;
        var newVal2;
        let regExpmtrTestBox = new RegExp(RegExpmtrTestBox);

        if (!regExpmtrTestBox.test(newValuemtrTestBox)) {
          newVal2 = newValuemtrTestBox.substr(0, newValuemtrTestBox.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        if (type === "before") {
          this.meterTestBoxArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.meterTestBoxArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'SmtrTerminalBox':
        const RegExpSmtrTerminalBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSmtrTerminalBox = eventData.target.value;
        var newVal2;
        let regExpSmtrTerminalBox = new RegExp(RegExpSmtrTerminalBox);

        if (!regExpSmtrTerminalBox.test(newValueSmtrTerminalBox)) {
          newVal2 = newValueSmtrTerminalBox.substr(0, newValueSmtrTerminalBox.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.terminalBoxArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.terminalBoxArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'SMarshBox':
        const RegExpSMarshBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueSMarshBox = eventData.target.value;
        var newVal2;
        let regExpSMarshBox = new RegExp(RegExpSMarshBox);

        if (!regExpSMarshBox.test(newValueSMarshBox)) {
          newVal2 = newValueSMarshBox.substr(0, newValueSMarshBox.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.marshallingBoxArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.marshallingBoxArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'sttbArray':
        const RegExpsttbArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesttbArray = eventData.target.value;
        var newVal2;
        let regExpsttbArray = new RegExp(RegExpsttbArray);

        if (!regExpsttbArray.test(newValuesttbArray)) {
          newVal2 = newValuesttbArray.substr(0, newValuesttbArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }
        this.sttbArray[indexArray].ta0stickernum = eventData.target.value;
        break;
      case 'sptChamberArray':
        const RegExpsptChamberArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesptChamberArray = eventData.target.value;
        var newVal2;
        let regExpsptChamberArray = new RegExp(RegExpsptChamberArray);

        if (!regExpsptChamberArray.test(newValuesptChamberArray)) {
          newVal2 = newValuesptChamberArray.substr(0, newValuesptChamberArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }


        if (type === "before") {
          this.sptChamberArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sptChamberArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'sctChamberArray':
        const RegExpsctChamberArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesctChamberArray = eventData.target.value;
        var newVal2;
        let regExpsctChamberArray = new RegExp(RegExpsctChamberArray);

        if (!regExpsctChamberArray.test(newValuesctChamberArray)) {
          newVal2 = newValuesctChamberArray.substr(0, newValuesctChamberArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sctChamberArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sctChamberArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'sptSecondaryFuseArray':
        const RegExpsptSecondaryFuseArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesptSecondaryFuseArray = eventData.target.value;
        var newVal2;
        let regExpsptSecondaryFuseArray = new RegExp(RegExpsptSecondaryFuseArray);

        if (!regExpsptSecondaryFuseArray.test(newValuesptSecondaryFuseArray)) {
          newVal2 = newValuesptSecondaryFuseArray.substr(0, newValuesptSecondaryFuseArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sptSecondaryFuseArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sptSecondaryFuseArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'smeterKioskArray':
        const RegExpsmeterKioskArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesmeterKioskArray = eventData.target.value;
        var newVal2;
        let regExpsmeterKioskArray = new RegExp(RegExpsmeterKioskArray);

        if (!regExpsmeterKioskArray.test(newValuesmeterKioskArray)) {
          newVal2 = newValuesmeterKioskArray.substr(0, newValuesmeterKioskArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.smeterKioskArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.smeterKioskArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'smeterTestBoxArray':
        const RegExpsmeterTestBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesmeterTestBoxArray = eventData.target.value;
        var newVal2;
        let regExpsmeterTestBoxArray = new RegExp(RegExpsmeterTestBoxArray);

        if (!regExpsmeterTestBoxArray.test(newValuesmeterTestBoxArray)) {
          newVal2 = newValuesmeterTestBoxArray.substr(0, newValuesmeterTestBoxArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.smeterTestBoxArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.smeterTestBoxArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'sterminalBoxArray':
        const RegExpsterminalBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesterminalBoxArray = eventData.target.value;
        var newVal2;
        let regExpsterminalBoxArray = new RegExp(RegExpsterminalBoxArray);

        if (!regExpsterminalBoxArray.test(newValuesterminalBoxArray)) {
          newVal2 = newValuesterminalBoxArray.substr(0, newValuesterminalBoxArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sterminalBoxArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sterminalBoxArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'smarshallingBoxArray':
        const RegExpsmarshallingBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesmarshallingBoxArray = eventData.target.value;
        var newVal2;
        let regExpsmarshallingBoxArray = new RegExp(RegExpsmarshallingBoxArray);

        if (!regExpsmarshallingBoxArray.test(newValuesmarshallingBoxArray)) {
          newVal2 = newValuesmarshallingBoxArray.substr(0, newValuesmarshallingBoxArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.smarshallingBoxArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.smarshallingBoxArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'sctPanelArray':
        const RegExpsctPanelArrayy = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuesctPanelArray = eventData.target.value;
        var newVal2;
        let regExpsctPanelArray = new RegExp(RegExpsctPanelArrayy);

        if (!regExpsctPanelArray.test(newValuesctPanelArray)) {
          newVal2 = newValuesctPanelArray.substr(0, newValuesctPanelArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.sctPanelArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.sctPanelArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'ctPanelArray':
        const RegExpctPanelArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValuectPanelArray = eventData.target.value;
        var newVal2;
        let regExpctPanelArray = new RegExp(RegExpctPanelArray);

        if (!regExpctPanelArray.test(newValuectPanelArray)) {
          newVal2 = newValuectPanelArray.substr(0, newValuectPanelArray.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.ctPanelArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.ctPanelArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
      case 'modem':
        const RegExpctModem = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueModem = eventData.target.value;
        var newVal2;
        let regExpctModem = new RegExp(RegExpctModem);

        if (!regExpctModem.test(newValueModem)) {
          newVal2 = newValueModem.substr(0, newValueModem.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.smodemArray[indexArray].ta0stickernum = eventData.target.value;
        } else {
          this.smodemArray[indexArray].ta0newstickernum = eventData.target.value;
        }
        break;
      case 'modem1':
        const RegExpctModem1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
        let newValueModem1 = eventData.target.value;
        var newVal2;
        let regExpctModem1 = new RegExp(RegExpctModem1);

        if (!regExpctModem1.test(newValueModem1)) {
          newVal2 = newValueModem1.substr(0, newValueModem1.length - 1);
          eventData.target.value = newVal2;
        }
        else {
          eventData.target.value;
        }

        if (type === "before") {
          this.modemArray[indexArray].ta0sealnum = eventData.target.value;
        } else {
          this.modemArray[indexArray].ta0newsealnum = eventData.target.value;
        }
        break;
    }
  }

  checkingStickerValidationHandler(loading) {

    let array: any = [];
    this.duplicateStickerCheck(array, "sttbArray_", this.sttbArray);
    this.duplicateStickerCheck(array, "sptChamberArray_", this.sptChamberArray);
    this.duplicateStickerCheck(array, "sctChamberArray_", this.sctChamberArray);
    this.duplicateStickerCheck(array, "sptSecondaryFuseArray_", this.sptSecondaryFuseArray);
    this.duplicateStickerCheck(array, "smeterKioskArray_", this.smeterKioskArray);
    this.duplicateStickerCheck(array, "smeterTestBoxArray_", this.smeterTestBoxArray);
    this.duplicateStickerCheck(array, "sterminalBoxArray_", this.sterminalBoxArray);
    this.duplicateStickerCheck(array, "smarshallingBoxArray_", this.smarshallingBoxArray);
    this.duplicateStickerCheck(array, "sctPanelArray_", this.sctPanelArray);
    this.duplicateStickerCheck(array, "spanelMeterArray_", this.spanelMeterArray);
    this.duplicateStickerCheck(array, "sterminalCtArray_", this.sterminalCtArray);
    this.duplicateStickerCheck(array, "smodemArray_", this.smodemArray);
    this.duplicateStickerCheck(array, "sterminalCoverArray_", this.sterminalCoverArray);
    this.duplicateStickerCheck(array, "sfuseArray_", this.sfuseArray);

    var contArray = array.map(function (item) {
      return item.value;
    });

    const cont = this.getDuplicates(contArray);
    const control = [];
    for (let key in cont) {
      if (cont.hasOwnProperty(key) && key !== "null") {
        var value = cont[key];
        control.push(value);
      }
    }

    var myNewArray = [].concat.apply([], control);

    for (var j = 0; j < array.length; j++) {

      if (myNewArray.includes(j)) {
        var newfound = array[j].type.split('_');
        switch (newfound[0]) {
          case 'sttbArray':
            this.sttbArray[newfound[1]].ta0error = true;
            break;
          case 'sptChamberArray':
            this.sptChamberArray[newfound[1]].ta0error = true;
            break;
          case 'sctChamberArray':
            this.sctChamberArray[newfound[1]].ta0error = true;
            break;
          case 'sptSecondaryFuseArray':
            this.sptSecondaryFuseArray[newfound[1]].ta0error = true;
            break;
          case 'smeterKioskArray':
            this.smeterKioskArray[newfound[1]].ta0error = true;
            break;
          case 'smeterTestBoxArray':
            this.smeterTestBoxArray[newfound[1]].ta0error = true;
            break;
          case 'sterminalBoxArray':
            this.sterminalBoxArray[newfound[1]].ta0error = true;
            break;
          case 'smarshallingBoxArray':
            this.smarshallingBoxArray[newfound[1]].ta0error = true;
            break;
          case 'sctPanelArray':
            this.sctPanelArray[newfound[1]].ta0error = true;
            break;
          case 'spanelMeterArray':
            this.spanelMeterArray[newfound[1]].ta0error = true;
            break;
          case 'sterminalCtArray':
            this.sterminalCtArray[newfound[1]].ta0error = true;
            break;
          case 'smodemArray':
            this.smodemArray[newfound[1]].ta0error = true;
            break;
          case 'sterminalCoverArray':
            this.sterminalCoverArray[newfound[1]].ta0error = true;
            break;
          case 'sfuseArray':
            this.sfuseArray[newfound[1]].ta0error = true;
            break;
        }
      }
      else {
        if (typeof this.sttbArray[j] !== 'undefined')
          this.sttbArray[j].ta0error = false;
        if (typeof this.sptChamberArray[j] !== 'undefined')
          this.sptChamberArray[j].ta0error = false;
        if (typeof this.sctChamberArray[j] !== 'undefined')
          this.sctChamberArray[j].ta0error = false;
        if (typeof this.sptSecondaryFuseArray[j] !== 'undefined')
          this.sptSecondaryFuseArray[j].ta0error = false;
        if (typeof this.smeterKioskArray[j] !== 'undefined')
          this.smeterKioskArray[j].ta0error = false;
        if (typeof this.smeterTestBoxArray[j] !== 'undefined')
          this.smeterTestBoxArray[j].ta0error = false;
        if (typeof this.sterminalBoxArray[j] !== 'undefined')
          this.sterminalBoxArray[j].ta0error = false;
        if (typeof this.smarshallingBoxArray[j] !== 'undefined')
          this.smarshallingBoxArray[j].ta0error = false;
        if (typeof this.sctPanelArray[j] !== 'undefined')
          this.sctPanelArray[j].ta0error = false;
        if (typeof this.spanelMeterArray[j] !== 'undefined')
          this.spanelMeterArray[j].ta0error = false;
        if (typeof this.sterminalCtArray[j] !== 'undefined')
          this.sterminalCtArray[j].ta0error = false;
        if (typeof this.smodemArray[j] !== 'undefined')
          this.smodemArray[j].ta0error = false;
        if (typeof this.sterminalCoverArray[j] !== 'undefined')
          this.sterminalCoverArray[j].ta0error = false;
        if (typeof this.sfuseArray[j] !== 'undefined')
          this.sfuseArray[j].ta0error = false;
      }
    }
    if (myNewArray.length > 0) {
      loading.dismiss();
      return true;
    }
    else {
      loading.dismiss();
      return false;
    }
  }

  checkingSealValidationHandler(loading) {

    let array: any = [];
    this.duplicateCheck(array, "ttbArray_", this.ttbArray);
    this.duplicateCheck(array, "ptChamberArray_", this.ptChamberArray);
    this.duplicateCheck(array, "ctChamberArray_", this.ctChamberArray);
    this.duplicateCheck(array, "ptSecondaryFuseArray_", this.ptSecondaryFuseArray);
    this.duplicateCheck(array, "meterKioskArray_", this.meterKioskArray);
    this.duplicateCheck(array, "meterTestBoxArray_", this.meterTestBoxArray);
    this.duplicateCheck(array, "terminalBoxArray_", this.terminalBoxArray);
    this.duplicateCheck(array, "marshallingBoxArray_", this.marshallingBoxArray);
    this.duplicateCheck(array, "ctPanelArray_", this.ctPanelArray);
    this.duplicateCheck(array, "panelMeterArray_", this.panelMeterArray);
    this.duplicateCheck(array, "terminalCtArray_", this.terminalCtArray);
    this.duplicateCheck(array, "modemArray_", this.modemArray);
    this.duplicateCheck(array, "meterCoverArray_", this.meterCoverArray);
    this.duplicateCheck(array, "terminalCoverArray_", this.terminalCoverArray);
    this.duplicateCheck(array, "fuseArray_", this.fuseArray);
    this.duplicateCheck(array, "mdButtonArray_", this.mdButtonArray);
    this.duplicateCheck(array, "meterBatteryArray_", this.meterBatteryArray);
    this.duplicateCheck(array, "opticalEyeArray_", this.opticalEyeArray);

    var contArray = array.map(function (item) {
      return item.value;
    });

    const cont = this.getDuplicates(contArray);
    const control = [];
    for (let key in cont) {
      if (cont.hasOwnProperty(key) && key !== "null") {
        var value = cont[key];
        control.push(value);
      }
    }

    var myNewArray = [].concat.apply([], control);

    for (var j = 0; j < array.length; j++) {

      if (myNewArray.includes(j)) {
        var newfound = array[j].type.split('_');
        switch (newfound[0]) {
          case 'ttbArray':
            this.ttbArray[newfound[1]].ta0error = true;
            break;
          case 'ptChamberArray':
            this.ptChamberArray[newfound[1]].ta0error = true;
            break;
          case 'ctChamberArray':
            this.ctChamberArray[newfound[1]].ta0error = true;
            break;
          case 'ptSecondaryFuseArray':
            this.ptSecondaryFuseArray[newfound[1]].ta0error = true;
            break;
          case 'meterKioskArray':
            this.meterKioskArray[newfound[1]].ta0error = true;
            break;
          case 'meterTestBoxArray':
            this.meterTestBoxArray[newfound[1]].ta0error = true;
            break;
          case 'terminalBoxArray':
            this.terminalBoxArray[newfound[1]].ta0error = true;
            break;
          case 'marshallingBoxArray':
            this.marshallingBoxArray[newfound[1]].ta0error = true;
            break;
          case 'ctPanelArray':
            this.ctPanelArray[newfound[1]].ta0error = true;
            break;
          case 'panelMeterArray':
            this.panelMeterArray[newfound[1]].ta0error = true;
            break;
          case 'terminalCtArray':
            this.terminalCtArray[newfound[1]].ta0error = true;
            break;
          case 'modemArray':
            this.modemArray[newfound[1]].ta0error = true;
            break;
          case 'meterCoverArray':
            this.meterCoverArray[newfound[1]].ta0error = true;
            break;
          case 'terminalCoverArray':
            this.terminalCoverArray[newfound[1]].ta0error = true;
            break;
          case 'fuseArray':
            this.fuseArray[newfound[1]].ta0error = true;
            break;
          case 'mdButtonArray':
            this.mdButtonArray[newfound[1]].ta0error = true;
            break;
          case 'meterBatteryArray':
            this.meterBatteryArray[newfound[1]].ta0error = true;
            break;
          case 'opticalEyeArray':
            this.opticalEyeArray[newfound[1]].ta0error = true;
            break;
        }
      }
      else {

        if (typeof this.ttbArray[j] !== 'undefined')
          this.ttbArray[j].ta0error = false;
        if (typeof this.ptChamberArray[j] !== 'undefined')
          this.ptChamberArray[j].ta0error = false;
        if (typeof this.ctChamberArray[j] !== 'undefined')
          this.ctChamberArray[j].ta0error = false;
        if (typeof this.ptSecondaryFuseArray[j] !== 'undefined')
          this.ptSecondaryFuseArray[j].ta0error = false;
        if (typeof this.meterKioskArray[j] !== 'undefined')
          this.meterKioskArray[j].ta0error = false;
        if (typeof this.meterTestBoxArray[j] !== 'undefined')
          this.meterTestBoxArray[j].ta0error = false;
        if (typeof this.terminalBoxArray[j] !== 'undefined')
          this.terminalBoxArray[j].ta0error = false;
        if (typeof this.marshallingBoxArray[j] !== 'undefined')
          this.marshallingBoxArray[j].ta0error = false;
        if (typeof this.ctPanelArray[j] !== 'undefined')
          this.ctPanelArray[j].ta0error = false;
        if (typeof this.panelMeterArray[j] !== 'undefined')
          this.panelMeterArray[j].ta0error = false;
        if (typeof this.terminalCtArray[j] !== 'undefined')
          this.terminalCtArray[j].ta0error = false;
        if (typeof this.modemArray[j] !== 'undefined')
          this.modemArray[j].ta0error = false;
        if (typeof this.meterCoverArray[j] !== 'undefined')
          this.meterCoverArray[j].ta0error = false;
        if (typeof this.terminalCoverArray[j] !== 'undefined')
          this.terminalCoverArray[j].ta0error = false;
        if (typeof this.fuseArray[j] !== 'undefined')
          this.fuseArray[j].ta0error = false;
        if (typeof this.mdButtonArray[j] !== 'undefined')
          this.mdButtonArray[j].ta0error = false;
        if (typeof this.meterBatteryArray[j] !== 'undefined')
          this.meterBatteryArray[j].ta0error = false;
        if (typeof this.opticalEyeArray[j] !== 'undefined')
          this.opticalEyeArray[j].ta0error = false;
      }
    }

    if (myNewArray.length > 0) {
      loading.dismiss();
      return true;
    }
    else {
      loading.dismiss();
      return false;
    }
  }

  getDuplicates(contArray) {

    var duplicates = {};
    for (var i = 0; i < contArray.length; i++) {

      if (duplicates.hasOwnProperty(contArray[i])) {

        duplicates[contArray[i]].push(i);
      }
      else if (contArray.lastIndexOf(contArray[i]) !== i) {

        duplicates[contArray[i]] = [i];
      }
    }
    return duplicates;
  }

  duplicateCheck(array, typeName, coverArray) {

    debugger;
    for (var i = 0; i < coverArray.length; i++) {
      array.push({
        type: typeName + i,
        value: coverArray[i].ta0sealnum,
      });
    }
    return array;
  }

  duplicateStickerCheck(array, typeName, coverArray) {

    debugger;
    for (var i = 0; i < coverArray.length; i++) {
      array.push({
        type: typeName + i,
        value: coverArray[i].ta0stickernum,
      });
    }
    return array;
  }

  arrayValidatedHandler(array, coverArray) {

    for (var i = 0; i < coverArray.length; i++) {
      coverArray[i].ta0error = false;
      array.push(coverArray[i].ta0sealnum);
    }
    return array;
  }

  /**
   * Hide Show Seal No Test Section
   * Created  : Alif
   * Date     : 15-11-2018
   * Edited   : Ameer (16/11/2018)
   */
  showSealNoSection(index) {
    index++
    if (this.showSealNo === false) {
      this.showSealNo = true;
    }
    else if (index === 2) {
      this.showSealNo = false;
    }
  }

  /**
   * Hide Show Sticker No Test Section
   * Created  : Alif
   * Date     : 15-11-2018
   * Edited   : Ameer (16/11/2018)
   */
  showStickerNoSection(index) {

    index++;
    if (this.showStickerNo === false) {
      this.showStickerNo = true;
    }
    else if (index === 2) {
      this.showStickerNo = false;
    }
  }

  /**
   * Hide Show Seal No Test Section
   * Created  : Alif
   * Date     : 15-11-2018
   * Edited   : Ameer (16/11/2018)
   */
  showOtherSealNoSection(index) {

    index++
    if (this.showOtherSealNo === false) {
      this.showOtherSealNo = true;
    }
    else if (index === 2) {
      this.showOtherSealNo = false;
    }
  }

  /**
   * Hide Show Sticker No Test Section
   * Created  : Alif
   * Date     : 15-11-2018
   * Edited   : Ameer (16/11/2018)
   */
  showOtherStickerNoSection(index) {

    index++;
    if (this.showOtherStickerNo === false) {
      this.showOtherStickerNo = true;
    }
    else if (index === 2) {
      this.showOtherStickerNo = false;
    }
  }

  /**
   * Reset Seal Section
   * Created  : Alif
   * Date     : 17-12-2018
   * Edited   :
   */
  resetSealSection() {
    console.log("Reset all seal input in one click!");

    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you agree to clear all before & after Seal Section ?',
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
            console.log("Confirm to clear all the fields..");
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

            this.meterCoverArray = [];
            var meterCoverVal = new SealInfo();
            meterCoverVal.ta0seallocation = "METER_COVER_";
            meterCoverVal.ta0sealnum = null;
            this.meterCoverArray[0] = meterCoverVal;

            // var meterConditionsVal = new SealInfo();
            // meterConditionsVal.ta0seallocation = "METER_CONDITIONS_";
            // meterConditionsVal.ta0sealnum = null;
            // this.meterConditionArray[0] = meterConditionsVal;

            this.terminalCoverArray = [];
            var terminalCoverVal = new SealInfo();
            terminalCoverVal.ta0seallocation = "TERMINAL_COVER_";
            terminalCoverVal.ta0sealnum = null;
            this.terminalCoverArray[0] = terminalCoverVal;

            // var terminalConditionsVal = new SealInfo();
            // terminalConditionsVal.ta0seallocation = "TERMINAL_CONDITIONS_";
            // terminalConditionsVal.ta0sealnum = null;
            // this.terminalConditionsArray[0] = terminalConditionsVal;

            this.fuseArray = [];
            var fuseVal = new SealInfo();
            fuseVal.ta0seallocation = "METER_FUSE_";
            fuseVal.ta0sealnum = null;
            this.fuseArray[0] = fuseVal;

            this.mdButtonArray = [];
            var mdButtonVal = new SealInfo();
            mdButtonVal.ta0seallocation = "MD_BUTTON_";
            mdButtonVal.ta0sealnum = null;
            this.mdButtonArray[0] = mdButtonVal;

            this.meterBatteryArray = [];
            var meterBatteryVal = new SealInfo();
            meterBatteryVal.ta0seallocation = "METER_BATTERY_";
            meterBatteryVal.ta0sealnum = null;
            this.meterBatteryArray[0] = meterBatteryVal;

            this.opticalEyeArray = [];
            var opticalEyeVal = new SealInfo();
            opticalEyeVal.ta0seallocation = "OPTICAL_EYE_COVER_";
            opticalEyeVal.ta0sealnum = null;
            this.opticalEyeArray[0] = opticalEyeVal;




            this.showAddMeterCover = true;
            this.showAddTerminalCover = true;

          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * Reset Other Seal Section
   * Created  : Alif
   * Date     : 17-12-2018
   * Edited   :
   */
  resetOtherSealSection() {
    console.log("Reset all other seal input in one click!");

    //Other Seal

    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you agree to clear all before & after Others Seal Section ?',
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
            console.log("Confirm to clear all the fields..");

            this.ttbArray = [];
            var ttbVal = new SealInfo();
            ttbVal.ta0seallocation = "TEST_BLOCK_";
            ttbVal.ta0sealnum = null;
            this.ttbArray[0] = ttbVal;

            this.ptChamberArray = [];
            var ptChamberVal = new SealInfo();
            ptChamberVal.ta0seallocation = "PT_CHAMBER_";
            ptChamberVal.ta0sealnum = null;
            this.ptChamberArray[0] = ptChamberVal;

            this.ctChamberArray = [];
            var ctChamberVal = new SealInfo();
            ctChamberVal.ta0seallocation = "CT_CHAMBER_";
            ctChamberVal.ta0sealnum = null;
            this.ctChamberArray[0] = ctChamberVal;

            this.ptSecondaryFuseArray = [];
            var ptSecondaryFuseVal = new SealInfo();
            ptSecondaryFuseVal.ta0seallocation = "PT_SEC_FUSE_";
            ptSecondaryFuseVal.ta0sealnum = null;
            this.ptSecondaryFuseArray[0] = ptSecondaryFuseVal;

            this.meterKioskArray = [];
            var meterKioskVal = new SealInfo();
            meterKioskVal.ta0seallocation = "KIOSK_PANELDOOR_";
            meterKioskVal.ta0sealnum = null;
            this.meterKioskArray[0] = meterKioskVal;

            this.meterTestBoxArray = [];
            var meterTestBoxVal = new SealInfo();
            meterTestBoxVal.ta0seallocation = "METER_TEST_BOX_";
            meterTestBoxVal.ta0sealnum = null;
            this.meterTestBoxArray[0] = meterTestBoxVal;

            this.terminalBoxArray = [];
            var terminalBoxVal = new SealInfo();
            terminalBoxVal.ta0seallocation = "TERMINATION_BOX_";
            terminalBoxVal.ta0sealnum = null;
            this.terminalBoxArray[0] = terminalBoxVal;

            this.marshallingBoxArray = [];
            var marshallingBoxVal = new SealInfo();
            marshallingBoxVal.ta0seallocation = "MARSHALLING_BOX_";
            marshallingBoxVal.ta0sealnum = null;
            this.marshallingBoxArray[0] = marshallingBoxVal;

            this.ctPanelArray = [];
            var ctPanelVal = new SealInfo();
            ctPanelVal.ta0seallocation = "CT_CHAMBER_";
            ctPanelVal.ta0sealnum = null;
            this.ctPanelArray[0] = ctPanelVal;

            this.panelMeterArray = [];
            var panelMeterVal = new SealInfo();
            panelMeterVal.ta0seallocation = "PANEL_METER_";
            panelMeterVal.ta0sealnum = null;
            this.panelMeterArray[0] = panelMeterVal;

            this.terminalCtArray = [];
            var terminalCtVal = new SealInfo();
            terminalCtVal.ta0seallocation = "TERMINAL_CT_";
            terminalCtVal.ta0sealnum = null;
            this.terminalCtArray[0] = terminalCtVal;

            this.modemArray = [];
            var modemVal = new SealInfo();
            modemVal.ta0seallocation = "MODEM_";
            modemVal.ta0sealnum = null;
            this.modemArray[0] = modemVal;
          }
        }
      ]
    });
    confirm.present();
  }

  checkingFieldDisabled(attr, category) {

    if (category === "seal") {
      if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
        return false;
      } else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
        return false;
      } else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
        return false;
      } else {
        return false;
      }
    } else if (category === "sticker") {

    }
  }


  replaceMeterNCheck() {
    debugger;
    var checkingDeviceSelect = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator;
    var multiassetlocci_temp = this.item.json.ta0feeder[this.fIndex].multiassetlocci;

    if (checkingDeviceSelect === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN || checkingDeviceSelect === DeviceConstants.BCRM_EXISTING_INDICATOR_CHECK) {
      var meter = multiassetlocci_temp.filter((item) => {
        if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
          this.disableBefore = false;
          this.disableAfter = true;
        }
      })
    } else if (checkingDeviceSelect === DeviceConstants.BCRM_NEW_INDICATOR_MAIN || checkingDeviceSelect === DeviceConstants.BCRM_NEW_INDICATOR_CHECK) {
      this.refSegment = 'after';
      var meter = multiassetlocci_temp.filter((item) => {
        if (item.ta0bcrmuploadindicator === DeviceConstants.BCRM_NEW_INDICATOR_MAIN) {
          this.disableBefore = true;
          this.disableAfter = false;
        }
      })
    }
  }

  /**
   * Create By: Ameer (8/5/2019)
   * Description: Check when opening page when ta0sealnum is available or not. Tick check box if ta0sealnum is available
   * 
   */
  checkValueAvailable() {
    debugger;
    // Start checking for Seal Section
    if (this.refSegment === 'before') {
      //Meter Cover Array
      var mtrCvr = this.meterCoverArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      //Terminal Cover Array
      var terminalArry = this.terminalCoverArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      //Battery Array
      var batteryArry = this.meterBatteryArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      // Optical Eye
      var optEye = this.opticalEyeArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      //Fuse Array
      var fuseArry = this.fuseArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      //MD Button
      var mdBtn = this.mdButtonArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });

      //End Checking Seal Section


      // Sticker Section

      // Sticker meter cover array
      var SmeterCvrArry = this.sterminalCoverArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;

        }
      });

      // Sticker Fuse Array
      var SfuseArry = this.sfuseArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;

        }
      });

      //  End Sticker Section

      //  Other Seal

      var ttbArry = this.ttbArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });


      var ptChamber = this.ptChamberArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });

      var ctChamber = this.ctChamberArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });

      var ptSecondary = this.ptSecondaryFuseArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });

      var meterkiosk = this.meterKioskArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });

      var meterTestBox = this.meterTestBoxArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });


      var terminalBox = this.terminalBoxArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;

        }
      });

      var marshallingBox = this.marshallingBoxArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      var ctPanel = this.ctPanelArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      var panelMeter = this.panelMeterArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      var terminalCt = this.terminalCtArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      var modem = this.modemArray.filter((item) => {
        if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
          item.ta0removeind = true;
        }
      });

      //  End Seal Other section

      //  Sticker Other Section
      var sTtb = this.sttbArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sPTCham = this.sptChamberArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sCTCham = this.sctChamberArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sPTSecondary = this.sptSecondaryFuseArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sMeterKiosk = this.smeterKioskArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sMeterTestBox = this.smeterTestBoxArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sTerminalBox = this.sterminalBoxArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sMarshallingBox = this.smarshallingBoxArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });


      var sCTPane = this.sctPanelArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sPanelMeter = this.spanelMeterArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });


      var sTerminalCt = this.sterminalCtArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      var sModem = this.smodemArray.filter((item) => {
        if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
          item.ta0removeind = true;
        }
      });

      //  End Sticker other section
    }
  }

  CheckboxClicked(event, j) {
    console.log("j : " + j);
    if (event.checked) {
      console.log("removed crimpless seal");
    } else {
      console.log("crimpless seal");
    }
  }

  updateRemovalReason(event, index) {
    console.log("Executing updateRemovalReason");
    console.log("Option selected : " + event);
    console.log("index : " + index);

    var mCount = 0;
    var tCount = 0;
    var fCount = 0;
    var mdCount = 0;
    var mbCount = 0;
    var oCount = 0;
    var tbCount = 0;
    var moCount = 0;
    var ptCount = 0;
    var ctcCount = 0;
    var ptsCount = 0;
    var mkCount = 0;
    var mtbCount = 0;
    var tboCount = 0;
    var msbCount = 0;
    var ctCount = 0;
    var mkCount = 0;
    var tcCount = 0;

    if (index === 0) {
      var seal_length = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
      for (var i = 0; i < seal_length; i++) {
        var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i];
        var ta0seallocation = ta0sealdetail.ta0seallocation;

        if (ta0seallocation.startsWith(FunctionClass.METER_COVER)) {
          this.meterCoverArray[mCount].ta0sealremreason = event;
          mCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_COVER)) {
          this.terminalCoverArray[tCount].ta0sealremreason = event;
          tCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.METER_FUSE)) {
          this.fuseArray[fCount].ta0sealremreason = event;
          fCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.MD_BUTTON)) {
          this.mdButtonArray[mdCount].ta0sealremreason = event;
          mdCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.METER_BATTERY)) {
          this.meterBatteryArray[mbCount].ta0sealremreason = event;
          mbCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.OPTICAL_EYE_COVER)) {
          this.opticalEyeArray[oCount].ta0sealremreason = event;
          oCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.TTB)) {
          this.ttbArray[tbCount].ta0sealremreason = event;
          tbCount++;
        } else if (ta0seallocation.startsWith(FunctionClass.MODEM_)) {
          this.modemArray[moCount].ta0sealremreason = event;
          moCount++;
        }

        switch (this.showLvFields) {
          case true: {
            if (ta0seallocation.startsWith(FunctionClass.CT_PANEL)) {
              this.ctPanelArray[ctCount].ta0sealremreason = event;
              ctCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.METER_KIOSK)) {
              this.meterKioskArray[mkCount].ta0sealremreason = event;
              mkCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT)) {
              this.terminalCtArray[tcCount].ta0sealremreason = event;
              tcCount++;
            }
            break;
          }
        }

        switch (this.showMvHvFields) {
          case true: {
            if (ta0seallocation.startsWith(FunctionClass.PT_CHAM)) {
              this.ptChamberArray[ptCount].ta0sealremreason = event;
              ptCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.CT_CHAM)) {
              this.ctChamberArray[ctcCount].ta0sealremreason = event;
              ctCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.PT_SEC_FS)) {
              this.ptSecondaryFuseArray[ptsCount].ta0sealremreason = event;
              ptsCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.METER_KIOSK)) {
              this.meterKioskArray[mkCount].ta0sealremreason = event;
              mkCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.METER_TEST_BOX)) {
              this.meterTestBoxArray[mtbCount].ta0sealremreason = event;
              mtbCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.TERMINATION_BOX)) {
              this.terminalBoxArray[tboCount].ta0sealremreason = event;
              tboCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.MARSHALLING_BOX)) {
              this.marshallingBoxArray[msbCount].ta0sealremreason = event;
              msbCount++;
            } else if (ta0seallocation.startsWith(FunctionClass.TERMINAL_CT)) {
              this.terminalCtArray[tcCount].ta0sealremreason = event;
              tcCount++;
            }
            break;
          }
        }
      }
    }
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
