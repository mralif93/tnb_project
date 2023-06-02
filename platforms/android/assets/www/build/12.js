webpackJsonp([12],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SilStickerInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_store_data_store__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the SilStickerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SilStickerInfoPage = /** @class */ (function () {
    function SilStickerInfoPage(navCtrl, params, toastCtrl, gf, dataService, jsonStore, loadingCtrl, gv, barcodeScanner, alertCtrl, toast, appCtrl, ds) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.gf = gf;
        this.dataService = dataService;
        this.jsonStore = jsonStore;
        this.loadingCtrl = loadingCtrl;
        this.gv = gv;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.appCtrl = appCtrl;
        this.ds = ds;
        // Validation
        this.validateInput = true;
        this.check = true;
        this.showMainMeter = false;
        this.showLvFields = false;
        this.showLvExtraFields = false;
        this.showMvHvFields = false;
        this.showOpcFields = false;
        this.sealInfoArray = [];
        //seal
        this.meterCoverArray = [];
        // public meterConditionArray = [];
        this.terminalCoverArray = [];
        // public terminalConditionsArray = [];
        this.fuseArray = [];
        this.mdButtonArray = [];
        this.meterBatteryArray = [];
        this.opticalEyeArray = [];
        this.commModuleArray = [];
        //sticker
        this.sterminalCoverArray = [];
        // public stickerSafetyArray = [];
        this.sfuseArray = [];
        //other seal
        this.ttbArray = [];
        this.ptChamberArray = [];
        this.ctChamberArray = [];
        this.ptSecondaryFuseArray = [];
        this.meterKioskArray = [];
        this.meterTestBoxArray = [];
        this.terminalBoxArray = [];
        this.marshallingBoxArray = [];
        this.ctPanelArray = [];
        this.panelMeterArray = [];
        this.terminalCtArray = [];
        this.modemArray = [];
        //other sticker
        this.sttbArray = [];
        this.sptChamberArray = [];
        this.sctChamberArray = [];
        this.sptSecondaryFuseArray = [];
        this.smeterKioskArray = [];
        this.smeterTestBoxArray = [];
        this.sterminalBoxArray = [];
        this.smarshallingBoxArray = [];
        this.sctPanelArray = [];
        this.spanelMeterArray = [];
        this.sterminalCtArray = [];
        this.smodemArray = [];
        this.stickerInfoArray = [];
        //seal
        this.showAddMeterCover = true;
        this.showAddMeterConditions = true;
        this.showAddTerminalCover = true;
        this.showAddTerminalConditions = true;
        this.showAddFuse = false;
        this.showAddMdButton = false;
        this.showAddMeterBattery = false;
        this.showAddOpticalEye = false;
        this.showAddCommModule = false;
        //sticker
        this.showAddSterminalCover = true;
        this.showAddSfuse = true;
        this.showsafetySticker = true;
        //nonseal
        this.showAddTtb = true;
        this.showAddPtChamber = true;
        this.showAddCtChamber = true;
        this.showAddPtSecondaryFuse = true;
        this.showAddMeterKiosk = true;
        this.showAddMeterTestBox = true;
        this.showAddTerminalBox = true;
        this.showAddMarshallingBox = true;
        this.showAddCtPanel = true;
        this.showAddPanelMeter = true;
        this.showAddTerminalCt = true;
        this.showAddModem = true;
        //nonsticker
        this.showAddSttb = true;
        this.showAddSptChamber = true;
        this.showAddSctChamber = true;
        this.showAddSptSecondaryFuse = true;
        this.showAddSmeterKiosk = true;
        this.showAddSmeterTestBox = true;
        this.showAddSterminalBox = true;
        this.showAddSmarshallingBox = true;
        this.showAddSctPanel = true;
        this.showAddSpanelMeter = true;
        this.showAddSterminalCt = true;
        this.showAddSmodem = true;
        // Hide/Show Variables
        this.showSealNo = true;
        this.showStickerNo = true;
        this.showOtherSealNo = true;
        this.showOtherStickerNo = true;
        // Hide Sticker & Other Sticker (17/12/2018)
        this.showSticker = false;
        this.refSegment = "before";
        this.segmentSection = false;
        this.disableBefore = false;
        this.disableAfter = false;
        this.itemOri = this.params.get("paramObj");
        this.fIndex = this.params.get("fIndex");
        this.maIndex = this.params.get("maIndex");
        this.alloType = this.params.get("alloType");
        this.versionType = this.params.get("versionType");
        this.deviceVoltage = this.params.get("deviceVoltage");
        //console.log(JSON.stringify(this.item.json.phone));
        // Clone data
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        switch (this.alloType) {
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER:
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_FEEDER_METER:
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER:
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_FEEDER_METER: {
                console.log("Main Meter: " + this.alloType);
                this.hideRemarks = true;
                this.showMainMeter = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER:
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_FEEDER_METER:
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_METER:
            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
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
            if (this.deviceVoltage === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                console.log("Voltage Level(LV): " + this.versionType + "  : " + this.item.json.ta0installationvoltage);
                this.showLvFields = true;
                // remove this line from below condition...  this.item.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && 
            }
            else if (this.deviceVoltage > __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                console.log("Voltage Level(MVHV): " + this.versionType + "  : " + this.item.json.ta0installationvoltage);
                this.showMvHvFields = true;
                this.showSticker = false;
            }
            else {
                this.showOpcFields = true;
            }
        }
        else {
            // Checking to Blocked Existing Section
            this.segmentSection = true;
            this.refSegment = "after";
            //remove this.item.json.ta0newvoltage === DeviceConstants.VOL_LEVEL_LPC_LV_400V && from line
            if (this.deviceVoltage === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                console.log("Voltage Level(LV): " + this.versionType + "  : " + this.item.json.ta0newvoltage);
                this.showLvFields = true;
            } // remove this.item.json.ta0newvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V && 
            else if (this.deviceVoltage > __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                console.log("Voltage Level(MVHV): " + this.versionType + "  : " + this.item.json.ta0newvoltage);
                this.showMvHvFields = true;
                this.showSticker = false;
            }
            else {
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
        var meterCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        meterCoverVal.ta0seallocation = "METER_COVER_";
        meterCoverVal.ta0sealnum = null;
        meterCoverVal.ta0newsealnum = null;
        meterCoverVal.ta0sealcondition = null;
        meterCoverVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.meterCoverArray[0] = meterCoverVal;
        // var meterConditionsVal = new SealInfo();
        // meterConditionsVal.ta0seallocation = "METER_CONDITIONS_";
        // meterConditionsVal.ta0sealnum = null;
        // this.meterConditionArray[0] = meterConditionsVal;
        var terminalCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        terminalCoverVal.ta0seallocation = "TERMINAL_COVER_";
        terminalCoverVal.ta0sealnum = null;
        terminalCoverVal.ta0newsealnum = null;
        terminalCoverVal.ta0sealcondition = null;
        terminalCoverVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.terminalCoverArray[0] = terminalCoverVal;
        // var terminalConditionsVal = new SealInfo();
        // terminalConditionsVal.ta0seallocation = "TERMINAL_CONDITIONS_";
        // terminalConditionsVal.ta0sealnum = null;
        // this.terminalConditionsArray[0] = terminalConditionsVal;
        var fuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        fuseVal.ta0seallocation = "METER_FUSE_";
        fuseVal.ta0sealnum = null;
        fuseVal.ta0newsealnum = null;
        fuseVal.ta0sealcondition = null;
        fuseVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.fuseArray[0] = fuseVal;
        var mdButtonVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        mdButtonVal.ta0seallocation = "MD_BUTTON_";
        mdButtonVal.ta0sealnum = null;
        mdButtonVal.ta0newsealnum = null;
        mdButtonVal.ta0sealcondition = null;
        mdButtonVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.mdButtonArray[0] = mdButtonVal;
        var meterBatteryVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        meterBatteryVal.ta0seallocation = "METER_BATTERY_";
        meterBatteryVal.ta0sealnum = null;
        meterBatteryVal.ta0newsealnum = null;
        meterBatteryVal.ta0sealcondition = null;
        meterBatteryVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.meterBatteryArray[0] = meterBatteryVal;
        var commModuleVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        commModuleVal.ta0seallocation = "COMM_MODULE_";
        commModuleVal.ta0sealnum = null;
        commModuleVal.ta0newsealnum = null;
        commModuleVal.ta0sealcondition = null;
        commModuleVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.commModuleArray[0] = commModuleVal;
        var opticalEyeVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        opticalEyeVal.ta0seallocation = "OPTICAL_EYE_COVER_";
        opticalEyeVal.ta0sealnum = null;
        opticalEyeVal.ta0newsealnum = null;
        opticalEyeVal.ta0sealcondition = null;
        opticalEyeVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.opticalEyeArray[0] = opticalEyeVal;
        //sticker info
        var sterminalCoverVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
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
        var sfuseVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sfuseVal.ta0stickerlocation = "METER_FUSE_";
        sfuseVal.ta0stickernum = null;
        sfuseVal.ta0newstickernum = null;
        sfuseVal.ta0stickercondition = null;
        this.sfuseArray[0] = sfuseVal;
        //Other Seal
        var ttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        ttbVal.ta0seallocation = "TEST_BLOCK_";
        ttbVal.ta0sealnum = null;
        ttbVal.ta0newsealnum = null;
        ttbVal.ta0sealcondition = null;
        ttbVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.ttbArray[0] = ttbVal;
        var ptChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        ptChamberVal.ta0seallocation = "PT_CHAMBER_";
        ptChamberVal.ta0sealnum = null;
        ptChamberVal.ta0newsealnum = null;
        ptChamberVal.ta0sealcondition = null;
        ptChamberVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.ptChamberArray[0] = ptChamberVal;
        var ctChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        ctChamberVal.ta0seallocation = "CT_CHAMBER_";
        ctChamberVal.ta0sealnum = null;
        ctChamberVal.ta0newsealnum = null;
        ctChamberVal.ta0sealcondition = null;
        ctChamberVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.ctChamberArray[0] = ctChamberVal;
        var ptSecondaryFuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        ptSecondaryFuseVal.ta0seallocation = "PT_SEC_FUSE_";
        ptSecondaryFuseVal.ta0sealnum = null;
        ptSecondaryFuseVal.ta0newsealnum = null;
        ptSecondaryFuseVal.ta0sealcondition = null;
        ptSecondaryFuseVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.ptSecondaryFuseArray[0] = ptSecondaryFuseVal;
        var meterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        meterKioskVal.ta0seallocation = "KIOSK_PANELDOOR_";
        meterKioskVal.ta0sealnum = null;
        meterKioskVal.ta0newsealnum = null;
        meterKioskVal.ta0sealcondition = null;
        meterKioskVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.meterKioskArray[0] = meterKioskVal;
        var meterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        meterTestBoxVal.ta0seallocation = "METER_TEST_BOX_";
        meterTestBoxVal.ta0sealnum = null;
        meterTestBoxVal.ta0newsealnum = null;
        meterTestBoxVal.ta0sealcondition = null;
        meterTestBoxVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.meterTestBoxArray[0] = meterTestBoxVal;
        var terminalBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        terminalBoxVal.ta0seallocation = "TERMINATION_BOX_";
        terminalBoxVal.ta0sealnum = null;
        terminalBoxVal.ta0newsealnum = null;
        terminalBoxVal.ta0sealcondition = null;
        terminalBoxVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.terminalBoxArray[0] = terminalBoxVal;
        var marshallingBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        marshallingBoxVal.ta0seallocation = "MARSHALLING_BOX_";
        marshallingBoxVal.ta0sealnum = null;
        marshallingBoxVal.ta0newsealnum = null;
        marshallingBoxVal.ta0sealcondition = null;
        marshallingBoxVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.marshallingBoxArray[0] = marshallingBoxVal;
        var ctPanelVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        ctPanelVal.ta0seallocation = "CT_CHAMBER_";
        ctPanelVal.ta0sealnum = null;
        ctPanelVal.ta0newsealnum = null;
        ctPanelVal.ta0sealcondition = null;
        ctPanelVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.ctPanelArray[0] = ctPanelVal;
        var panelMeterVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        panelMeterVal.ta0seallocation = "PANEL_METER_";
        panelMeterVal.ta0sealnum = null;
        panelMeterVal.ta0newsealnum = null;
        panelMeterVal.ta0sealcondition = null;
        panelMeterVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.panelMeterArray[0] = panelMeterVal;
        var terminalCtVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        terminalCtVal.ta0seallocation = "TERMINAL_CT_";
        terminalCtVal.ta0sealnum = null;
        terminalCtVal.ta0newsealnum = null;
        terminalCtVal.ta0sealcondition = null;
        terminalCtVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.terminalCtArray[0] = terminalCtVal;
        var modemVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        modemVal.ta0seallocation = "MODEM_";
        modemVal.ta0sealnum = null;
        modemVal.ta0newsealnum = null;
        modemVal.ta0sealcondition = null;
        modemVal.ta0sealremreason = null; //CR002 Crimpless Seal
        this.modemArray[0] = modemVal;
        //Other Sticker
        var sttbVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sttbVal.ta0stickerlocation = "TEST_BLOCK_";
        sttbVal.ta0stickernum = null;
        sttbVal.ta0newstickernum = null;
        sttbVal.ta0stickercondition = null;
        this.sttbArray[0] = sttbVal;
        var sptChamberVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sptChamberVal.ta0stickerlocation = "PT_CHAMBER_";
        sptChamberVal.ta0stickernum = null;
        sptChamberVal.ta0newstickernum = null;
        sptChamberVal.ta0stickercondition = null;
        this.sptChamberArray[0] = sptChamberVal;
        var sctChamberVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sctChamberVal.ta0stickerlocation = "CT_CHAMBER_";
        sctChamberVal.ta0stickernum = null;
        sctChamberVal.ta0newstickernum = null;
        sctChamberVal.ta0stickercondition = null;
        this.sctChamberArray[0] = sctChamberVal;
        var sptSecondaryFuseVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sptSecondaryFuseVal.ta0stickerlocation = "PT_SEC_FUSE_";
        sptSecondaryFuseVal.ta0stickernum = null;
        sptSecondaryFuseVal.ta0newstickernum = null;
        sptSecondaryFuseVal.ta0stickercondition = null;
        this.sptSecondaryFuseArray[0] = sptSecondaryFuseVal;
        var smeterKioskVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        smeterKioskVal.ta0stickerlocation = "KIOSK_PANELDOOR_";
        smeterKioskVal.ta0stickernum = null;
        smeterKioskVal.ta0newstickernum = null;
        smeterKioskVal.ta0stickercondition = null;
        this.smeterKioskArray[0] = smeterKioskVal;
        var smeterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        smeterTestBoxVal.ta0stickerlocation = "METER_TEST_BOX_";
        smeterTestBoxVal.ta0stickernum = null;
        smeterTestBoxVal.ta0newstickernum = null;
        smeterTestBoxVal.ta0stickercondition = null;
        this.smeterTestBoxArray[0] = smeterTestBoxVal;
        var sterminalBoxVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sterminalBoxVal.ta0stickerlocation = "TERMINATION_BOX_";
        sterminalBoxVal.ta0stickernum = null;
        sterminalBoxVal.ta0newstickernum = null;
        sterminalBoxVal.ta0stickercondition = null;
        this.sterminalBoxArray[0] = sterminalBoxVal;
        var smarshallingBoxVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        smarshallingBoxVal.ta0stickerlocation = "MARSHALLING_BOX_";
        smarshallingBoxVal.ta0stickernum = null;
        smarshallingBoxVal.ta0newstickernum = null;
        smarshallingBoxVal.ta0stickercondition = null;
        this.smarshallingBoxArray[0] = smarshallingBoxVal;
        var sctPanelVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sctPanelVal.ta0stickerlocation = "CT_CHAMBER_";
        sctPanelVal.ta0stickernum = null;
        sctPanelVal.ta0newstickernum = null;
        sctPanelVal.ta0stickercondition = null;
        this.sctPanelArray[0] = sctPanelVal;
        var spanelMeterVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        spanelMeterVal.ta0stickerlocation = "PANEL_METER_";
        spanelMeterVal.ta0stickernum = null;
        spanelMeterVal.ta0newstickernum = null;
        spanelMeterVal.ta0stickercondition = null;
        this.spanelMeterArray[0] = spanelMeterVal;
        var sterminalCtVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        sterminalCtVal.ta0stickerlocation = "TERMINAL_CT_";
        sterminalCtVal.ta0stickernum = null;
        sterminalCtVal.ta0newstickernum = null;
        sterminalCtVal.ta0stickercondition = null;
        this.sterminalCtArray[0] = sterminalCtVal;
        var smodemVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
        smodemVal.ta0stickerlocation = "MODEM_";
        smodemVal.ta0stickernum = null;
        smodemVal.ta0newstickernum = null;
        smodemVal.ta0stickercondition = null;
        this.smodemArray[0] = smodemVal;
        // Read ta0detail if exist
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail) != 'undefined' &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== null &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail != '') {
            var seal_length = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
            var mCount = 0;
            var mCondiCount = 0;
            var tCount = 0;
            var tCondiCount = 0;
            var fCount = 0;
            var mdCount = 0;
            var mbCount = 0;
            var oCount = 0;
            var cmCount = 0;
            var stCount = 0;
            var sfCount = 0;
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
            for (var i = 0; i < seal_length; i++) {
                var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[i];
                var ta0seallocation = ta0sealdetail.ta0seallocation;
                if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_COVER)) {
                    meterCoverVal = ta0sealdetail;
                    this.meterCoverArray[mCount] = meterCoverVal;
                    console.log(mCount + ' meterCoverArray : ' + JSON.stringify(this.meterCoverArray));
                    if (mCount === 2) {
                        this.showAddMeterCover = false;
                    }
                    mCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_COVER)) {
                    terminalCoverVal = ta0sealdetail;
                    this.terminalCoverArray[tCount] = terminalCoverVal;
                    console.log(tCount + ' terminalCoverArray : ' + JSON.stringify(this.terminalCoverArray));
                    if (tCount === 1) {
                        this.showAddTerminalCover = false;
                    }
                    tCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE)) {
                    fuseVal = ta0sealdetail;
                    this.fuseArray[fCount] = fuseVal;
                    console.log(fCount + ' fuseArray : ' + JSON.stringify(this.fuseArray));
                    fCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MD_BUTTON)) {
                    mdButtonVal = ta0sealdetail;
                    this.mdButtonArray[mdCount] = mdButtonVal;
                    console.log(mbCount + ' mdButtonArray : ' + JSON.stringify(this.mdButtonArray));
                    mdCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_BATTERY)) {
                    meterBatteryVal = ta0sealdetail;
                    this.meterBatteryArray[mbCount] = meterBatteryVal;
                    console.log(mbCount + ' meterBatteryArray : ' + JSON.stringify(this.meterBatteryArray));
                    mbCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].OPTICAL_EYE_COVER)) {
                    commModuleVal = ta0sealdetail;
                    this.commModuleArray[oCount] = commModuleVal;
                    console.log(oCount + ' commModuleArray : ' + JSON.stringify(this.commModuleArray));
                    cmCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].COMM_MODULE)) {
                    opticalEyeVal = ta0sealdetail;
                    this.opticalEyeArray[oCount] = opticalEyeVal;
                    console.log(oCount + ' opticalEyeArray : ' + JSON.stringify(this.opticalEyeArray));
                    oCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TTB)) {
                    ttbVal = ta0sealdetail;
                    this.ttbArray[tbCount] = ttbVal;
                    console.log(tbCount + ' ttbArray : ' + JSON.stringify(this.ttbArray));
                    if (tbCount === 1) {
                        this.showAddTtb = false;
                    }
                    tbCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MODEM_)) {
                    modemVal = ta0sealdetail;
                    this.modemArray[moCount] = modemVal;
                    console.log(moCount + ' modemArray : ' + JSON.stringify(this.modemArray));
                    moCount++;
                }
                switch (this.showLvFields) {
                    case true: {
                        if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_PANEL)) {
                            ctPanelVal = ta0sealdetail;
                            this.ctPanelArray[ctCount] = ctPanelVal;
                            console.log(ctCount + ' ctPanelArray : ' + JSON.stringify(this.ctPanelArray));
                            ctCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_KIOSK)) {
                            meterKioskVal = ta0sealdetail;
                            this.meterKioskArray[mkCount] = meterKioskVal;
                            console.log(mkCount + ' meterKioskArray : ' + JSON.stringify(this.meterKioskArray));
                            mkCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_CT)) {
                            terminalCtVal = ta0sealdetail;
                            this.terminalCtArray[tcCount] = terminalCtVal;
                            console.log(tcCount + ' terminalCtArray : ' + JSON.stringify(this.terminalCtArray));
                            tcCount++;
                        }
                        break;
                    }
                }
                switch (this.showMvHvFields) {
                    case true: {
                        if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAM)) {
                            ptChamberVal = ta0sealdetail;
                            this.ptChamberArray[ptCount] = ptChamberVal;
                            console.log(ptCount + ' ptChamberArray : ' + JSON.stringify(this.ptChamberArray));
                            ptCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAM)) {
                            ctChamberVal = ta0sealdetail;
                            this.ctChamberArray[ctcCount] = ctChamberVal;
                            console.log(ctCount + ' ctChamberArray : ' + JSON.stringify(this.ctChamberArray));
                            ctCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FS)) {
                            ptSecondaryFuseVal = ta0sealdetail;
                            this.ptSecondaryFuseArray[ptsCount] = ptSecondaryFuseVal;
                            console.log(ptsCount + ' ptSecondaryFuseArray : ' + JSON.stringify(this.ptSecondaryFuseArray));
                            ptsCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_KIOSK)) {
                            meterKioskVal = ta0sealdetail;
                            this.meterKioskArray[mkCount] = meterKioskVal;
                            console.log(mkCount + ' meterKioskArray : ' + JSON.stringify(this.meterKioskArray));
                            mkCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TEST_BOX)) {
                            meterTestBoxVal = ta0sealdetail;
                            this.meterTestBoxArray[mtbCount] = meterTestBoxVal;
                            console.log(mtbCount + ' meterTestBoxArray : ' + JSON.stringify(this.meterTestBoxArray));
                            mtbCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX)) {
                            terminalBoxVal = ta0sealdetail;
                            this.terminalBoxArray[tboCount] = terminalBoxVal;
                            console.log(tboCount + ' terminalBoxArray : ' + JSON.stringify(this.terminalBoxArray));
                            tboCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX)) {
                            marshallingBoxVal = ta0sealdetail;
                            this.marshallingBoxArray[msbCount] = marshallingBoxVal;
                            console.log(msbCount + ' marshallingBoxArray : ' + JSON.stringify(this.marshallingBoxArray));
                            msbCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_CT)) {
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
                if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STERMINAL_COVER)) {
                    sterminalCoverVal = ta0stickerdetail;
                    this.sterminalCoverArray[stCount] = sterminalCoverVal;
                    stCount++;
                }
                else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SMETER_FUSE)) {
                    sfuseVal = ta0stickerdetail;
                    this.sfuseArray[sfCount] = sfuseVal;
                    sfCount++;
                }
                else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STTB)) {
                    sttbVal = ta0stickerdetail;
                    this.sttbArray[stbCount] = sttbVal;
                    stbCount++;
                }
                else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SMODEM_)) {
                    smodemVal = ta0stickerdetail;
                    this.smodemArray[smoCount] = smodemVal;
                    smoCount++;
                }
                switch (this.showLvFields) {
                    case true: {
                        if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SCT_PANEL)) {
                            sctPanelVal = ta0stickerdetail;
                            this.sctPanelArray[sctCount] = sctPanelVal;
                            sctCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SPANEL_METER)) {
                            spanelMeterVal = ta0stickerdetail;
                            this.spanelMeterArray[spmCount] = spanelMeterVal;
                            spmCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STERMINAL_CT)) {
                            sterminalCtVal = ta0stickerdetail;
                            this.sterminalCtArray[stcCount] = sterminalCtVal;
                            stcCount++;
                        }
                    }
                }
                switch (this.showMvHvFields) {
                    case true: {
                        if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SPT_CHAM)) {
                            sptChamberVal = ta0stickerdetail;
                            this.sptChamberArray[sptCount] = sptChamberVal;
                            sptCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SCT_CHAM)) {
                            sctChamberVal = ta0stickerdetail;
                            this.sctChamberArray[sctcCount] = sctChamberVal;
                            sctCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SPT_SEC_FS)) {
                            sptSecondaryFuseVal = ta0stickerdetail;
                            this.sptSecondaryFuseArray[sptsCount] = sptSecondaryFuseVal;
                            sptsCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SMETER_KIOSK)) {
                            smeterKioskVal = ta0stickerdetail;
                            this.smeterKioskArray[smkCount] = smeterKioskVal;
                            smkCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SMETER_TEST_BOX)) {
                            smeterTestBoxVal = ta0stickerdetail;
                            this.smeterTestBoxArray[smtbCount] = smeterTestBoxVal;
                            smtbCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STERMINATION_BOX)) {
                            sterminalBoxVal = ta0stickerdetail;
                            this.sterminalBoxArray[stboCount] = sterminalBoxVal;
                            stboCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].SMARSHALLING_BOX)) {
                            smarshallingBoxVal = ta0stickerdetail;
                            this.smarshallingBoxArray[smsbCount] = smarshallingBoxVal;
                            smsbCount++;
                        }
                        else if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STERMINAL_CT)) {
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
    SilStickerInfoPage.prototype.loadlookup = function () {
        this.getAlnDomainData("sealcondition").then(function (success) {
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
    };
    /**
     * Reason   : Method to call promise to get data.
     * Created  : 19-03-2019
     */
    SilStickerInfoPage.prototype.getAlnDomainData = function (inputType) {
        var _this = this;
        console.log("filtering type condition for sil & sticker..");
        var queryPart;
        if (typeof (inputType) !== "undefined") {
            if (inputType === "safetysticker") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SAFETYSTICKER);
            }
            else if (inputType === "fuse") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCFUSE);
            }
            else if (inputType === "meter_cover") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCMETERCOVER);
            }
            else if (inputType === "meter_panel") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCMETERPANEL);
            }
            else if (inputType === "panel_ct") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCPANELCT);
            }
            else if (inputType === "ct_terminal") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCTERMCT);
            }
            else if (inputType === "terminal_meter") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCTERMMETER);
            }
            else if (inputType === "ttb") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCTTB);
            }
            else if (inputType === "sealcondition") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA4SC);
            }
            else if (inputType === "removalreason") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].TA0SEALREMREASON); //CR002 Crimpless Seal
            }
            return new Promise(function (resolve, reject) {
                _this.jsonStore
                    .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart)
                    .then(function (result) {
                    if (inputType === "safetysticker") {
                        _this.safetySticker = result;
                    }
                    else if (inputType === "fuse") {
                        _this.fuse = result;
                    }
                    else if (inputType === "meter_cover") {
                        _this.meterCover = result;
                    }
                    else if (inputType === "meter_panel") {
                        _this.meterPanel = result;
                    }
                    else if (inputType === "panel_ct") {
                        _this.ctPanel = result;
                    }
                    else if (inputType === "ct_terminal") {
                        _this.ctTerminal = result;
                    }
                    else if (inputType === "terminal_meter") {
                        _this.meterTerminal = result;
                    }
                    else if (inputType === "ttb") {
                        _this.ttb = result;
                    }
                    else if (inputType === "sealcondition") {
                        _this.sc = result;
                    }
                    else if (inputType === "removalreason") {
                        _this.rr = result; //CR002 Crimpless Seal
                    }
                    resolve();
                }).catch(function (error) {
                    console.log('service failure : ' + error);
                    reject();
                });
            });
        }
    };
    SilStickerInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealSilNStickerInfoPage');
    };
    // Dynamic Sorting.
    SilStickerInfoPage.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    SilStickerInfoPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    //Meter Cover
    SilStickerInfoPage.prototype.addMeterCover = function () {
        if (this.meterCoverArray.length <= 2) {
            var meterCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            meterCoverVal.ta0seallocation = 'METER_COVER_';
            this.meterCoverArray.push(meterCoverVal);
            if (this.meterCoverArray.length == 3) {
                this.showAddMeterCover = false;
            }
        }
    };
    //Terminal Cover
    SilStickerInfoPage.prototype.addTerminalCover = function () {
        if (this.terminalCoverArray.length <= 1) {
            var terminalCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            terminalCoverVal.ta0seallocation = 'TERMINAL_COVER_';
            this.terminalCoverArray.push(terminalCoverVal);
            if (this.terminalCoverArray.length == 2) {
                this.showAddTerminalCover = false;
            }
        }
    };
    //Meter Fuse
    SilStickerInfoPage.prototype.addFuse = function () {
        if (this.fuseArray.length <= 0) {
            var fuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            fuseVal.ta0seallocation = 'METER_FUSE_';
            this.fuseArray.push(fuseVal);
            if (this.fuseArray.length == 0) {
                this.showAddFuse = false;
            }
        }
    };
    //md button
    SilStickerInfoPage.prototype.addMdButton = function () {
        if (this.mdButtonArray.length <= 0) {
            var mdButtonVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            mdButtonVal.ta0seallocation = 'MD_BUTTON_';
            this.mdButtonArray.push(mdButtonVal);
            if (this.mdButtonArray.length == 0) {
                this.showAddMdButton = false;
            }
        }
    };
    //meter battery
    SilStickerInfoPage.prototype.addMeterBattery = function () {
        if (this.meterBatteryArray.length <= 0) {
            var meterBatteryVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            meterBatteryVal.ta0seallocation = 'METER_BATTERY_';
            this.meterBatteryArray.push(meterBatteryVal);
            if (this.meterBatteryArray.length == 0) {
                this.showAddMeterBattery = false;
            }
        }
    };
    //optical eye
    SilStickerInfoPage.prototype.addOpticalEye = function () {
        if (this.opticalEyeArray.length <= 0) {
            var opticalEyeVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            opticalEyeVal.ta0seallocation = 'OPTICAL_EYE_COVER_';
            this.opticalEyeArray.push(opticalEyeVal);
            if (this.opticalEyeArray.length == 0) {
                this.showAddOpticalEye = false;
            }
        }
    };
    //Comm Module
    SilStickerInfoPage.prototype.addCommModule = function () {
        if (this.commModuleArray.length <= 0) {
            var commModuleVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            commModuleVal.ta0seallocation = 'COMM_MODULE_';
            this.commModuleArray.push(commModuleVal);
            if (this.commModuleArray.length == 0) {
                this.showAddCommModule = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSterminalCover = function () {
        if (this.sterminalCoverArray.length <= 3) {
            var sterminalCoverVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
            sterminalCoverVal.ta0stickerlocation = 'TERMINAL_COVER_';
            this.sterminalCoverArray.push(sterminalCoverVal);
            if (this.sterminalCoverArray.length == 3) {
                this.showAddSterminalCover = false;
            }
        }
    };
    //Meter Fuse
    SilStickerInfoPage.prototype.addSfuse = function () {
        if (this.sfuseArray.length <= 3) {
            var fuseVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_StickerInfo__["a" /* StickerInfo */]();
            fuseVal.ta0stickerlocation = 'METER_FUSE_';
            this.sfuseArray.push(fuseVal);
            if (this.sfuseArray.length == 3) {
                this.showAddSfuse = false;
            }
        }
    };
    //Other Seal
    //TTB
    SilStickerInfoPage.prototype.addTtb = function () {
        if (this.ttbArray.length <= 1) {
            var ttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            ttbVal.ta0seallocation = 'TEST_BLOCK_';
            this.ttbArray.push(ttbVal);
            if (this.ttbArray.length == 2) {
                this.showAddTtb = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addPtChamber = function () {
        if (this.ptChamberArray.length <= 3) {
            var ptChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            ptChamberVal.ta0seallocation = 'PT_CHAMBER_';
            this.ptChamberArray.push(ptChamberVal);
            if (this.ptChamberArray.length == 3) {
                this.showAddPtChamber = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addCtChamber = function () {
        if (this.ctChamberArray.length <= 3) {
            var ctChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            ctChamberVal.ta0seallocation = 'CT_CHAMBER_';
            this.ctChamberArray.push(ctChamberVal);
            if (this.ctChamberArray.length == 3) {
                this.showAddCtChamber = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addPtSecondaryFuse = function () {
        if (this.ptSecondaryFuseArray.length <= 3) {
            var ptSecondaryFuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            ptSecondaryFuseVal.ta0seallocation = 'PT_SEC_FUSE_';
            this.ptSecondaryFuseArray.push(ptSecondaryFuseVal);
            if (this.ptSecondaryFuseArray.length == 3) {
                this.showAddPtSecondaryFuse = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addMeterKiosk = function () {
        if (this.meterKioskArray.length <= 3) {
            var meterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            meterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
            this.meterKioskArray.push(meterKioskVal);
            if (this.meterKioskArray.length == 3) {
                this.showAddMeterKiosk = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addMeterTestBox = function () {
        if (this.meterTestBoxArray.length <= 3) {
            var meterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            meterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_';
            this.meterTestBoxArray.push(meterTestBoxVal);
            if (this.meterTestBoxArray.length == 3) {
                this.showAddMeterTestBox = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addTerminalBox = function () {
        if (this.terminalBoxArray.length <= 3) {
            var terminalBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            terminalBoxVal.ta0seallocation = 'TERMINATION_BOX_';
            this.terminalBoxArray.push(terminalBoxVal);
            if (this.terminalBoxArray.length == 3) {
                this.showAddTerminalBox = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addMarshallingBox = function () {
        if (this.marshallingBoxArray.length <= 3) {
            var marshallingBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            marshallingBoxVal.ta0seallocation = 'MARSHALLING_BOX_';
            this.marshallingBoxArray.push(marshallingBoxVal);
            if (this.marshallingBoxArray.length == 3) {
                this.showAddMarshallingBox = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addCtPanel = function () {
        if (this.ctPanelArray.length <= 3) {
            var ctPanelVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            ctPanelVal.ta0seallocation = 'CT_PANEL_';
            this.ctPanelArray.push(ctPanelVal);
            if (this.ctPanelArray.length == 3) {
                this.showAddCtPanel = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addPanelMeter = function () {
        if (this.panelMeterArray.length <= 3) {
            var panelMeterVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            panelMeterVal.ta0seallocation = 'PANEL_METER_';
            this.panelMeterArray.push(panelMeterVal);
            if (this.panelMeterArray.length == 3) {
                this.showAddPanelMeter = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addTerminalCt = function () {
        if (this.terminalCtArray.length <= 3) {
            var terminalCtVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            terminalCtVal.ta0seallocation = 'TERMINAL_CT_';
            this.terminalCtArray.push(terminalCtVal);
            if (this.terminalCtArray.length == 3) {
                this.showAddTerminalCt = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addModem = function () {
        if (this.modemArray.length <= 3) {
            var modemVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            modemVal.ta0seallocation = 'MODEM_';
            this.modemArray.push(modemVal);
            if (this.modemArray.length == 3) {
                this.showAddModem = false;
            }
        }
    };
    //Other Sticker
    SilStickerInfoPage.prototype.addSttb = function () {
        if (this.sttbArray.length <= 3) {
            var sttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sttbVal.ta0seallocation = 'TEST_BLOCK_';
            this.sttbArray.push(sttbVal);
            if (this.sttbArray.length == 3) {
                this.showAddSttb = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSptChamber = function () {
        if (this.sptChamberArray.length <= 3) {
            var sptChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sptChamberVal.ta0seallocation = 'MODEM_';
            this.sptChamberArray.push(sptChamberVal);
            if (this.sptChamberArray.length == 3) {
                this.showAddSptChamber = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSctChamber = function () {
        if (this.sctChamberArray.length <= 3) {
            var sctChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sctChamberVal.ta0seallocation = 'CT_CHAMBER_';
            this.sctChamberArray.push(sctChamberVal);
            if (this.sctChamberArray.length == 3) {
                this.showAddSctChamber = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSptSecondaryFuse = function () {
        if (this.sptSecondaryFuseArray.length <= 3) {
            var sptSecondaryFuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sptSecondaryFuseVal.ta0seallocation = 'PT_SEC_FUSE_';
            this.sptSecondaryFuseArray.push(sptSecondaryFuseVal);
            if (this.sptSecondaryFuseArray.length == 3) {
                this.showAddSptSecondaryFuse = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSmeterKiosk = function () {
        if (this.smeterKioskArray.length <= 3) {
            var smeterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            smeterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
            this.smeterKioskArray.push(smeterKioskVal);
            if (this.smeterKioskArray.length == 3) {
                this.showAddSmeterKiosk = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSmeterTestBox = function () {
        if (this.smeterTestBoxArray.length <= 3) {
            var smeterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            smeterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_';
            this.smeterTestBoxArray.push(smeterTestBoxVal);
            if (this.smeterTestBoxArray.length == 3) {
                this.showAddSmeterTestBox = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSterminalBox = function () {
        if (this.sterminalBoxArray.length <= 3) {
            var sterminalBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sterminalBoxVal.ta0seallocation = 'TERMINATION_BOX_';
            this.sterminalBoxArray.push(sterminalBoxVal);
            if (this.sterminalBoxArray.length == 3) {
                this.showAddSterminalBox = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSmarshallingBox = function () {
        if (this.smarshallingBoxArray.length <= 3) {
            var smarshallingBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            smarshallingBoxVal.ta0seallocation = 'MARSHALLING_BOX_';
            this.smarshallingBoxArray.push(smarshallingBoxVal);
            if (this.smarshallingBoxArray.length == 3) {
                this.showAddSmarshallingBox = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSctPanel = function () {
        if (this.sctPanelArray.length <= 3) {
            var sctPanelVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sctPanelVal.ta0seallocation = 'CT_PANEL_';
            this.sctPanelArray.push(sctPanelVal);
            if (this.sctPanelArray.length == 3) {
                this.showAddSctPanel = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSpanelMeter = function () {
        if (this.spanelMeterArray.length <= 3) {
            var spanelMeterVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            spanelMeterVal.ta0seallocation = 'PANEL_METER_';
            this.spanelMeterArray.push(spanelMeterVal);
            if (this.spanelMeterArray.length == 3) {
                this.showAddSpanelMeter = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSterminalCt = function () {
        if (this.sterminalCtArray.length <= 3) {
            var sterminalCtVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            sterminalCtVal.ta0seallocation = 'TERMINAL_CT_';
            this.sterminalCtArray.push(sterminalCtVal);
            if (this.sterminalCtArray.length == 3) {
                this.showAddSterminalCt = false;
            }
        }
    };
    SilStickerInfoPage.prototype.addSmodem = function () {
        if (this.smodemArray.length <= 3) {
            var smodemVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            smodemVal.ta0seallocation = 'MODEM_';
            this.smodemArray.push(smodemVal);
            if (this.smodemArray.length == 3) {
                this.showAddSmodem = false;
            }
        }
    };
    SilStickerInfoPage.prototype.saveDeviceDetails = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
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
        // Save Seal Details...
        // Save Data MeterCover
        if ((this.meterCoverArray[0].ta0sealnum != null || this.meterCoverArray[0].ta0sealnum != undefined) || this.meterCoverArray[0].ta0newsealnum != null || this.meterCoverArray[0].ta0newsealnum != undefined) {
            for (var i = 0; i < this.meterCoverArray.length; i++) {
                this.meterCoverArray[i].assetnum = assetnum;
                this.meterCoverArray[i].orgid = orgid;
                this.meterCoverArray[i].siteid = siteid;
                this.meterCoverArray[i].wonum = wonum;
                this.meterCoverArray[i].ta0seallocation = "METER_COVER_" + (i + 1);
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterCoverArray[i]);
            }
        }
        // Save Data TerminalCover
        if ((this.terminalCoverArray[0].ta0sealnum != null || this.terminalCoverArray[0].ta0sealnum != undefined) || this.terminalCoverArray[0].ta0newsealnum != null || this.terminalCoverArray[0].ta0newsealnum != undefined) {
            for (var k = 0; k < this.terminalCoverArray.length; k++) {
                this.terminalCoverArray[k].assetnum = assetnum;
                this.terminalCoverArray[k].siteid = siteid;
                this.terminalCoverArray[k].wonum = wonum;
                this.terminalCoverArray[k].ta0seallocation = "TERMINAL_COVER_" + (k + 1);
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCoverArray[k]);
            }
        }
        // Save Data Fuse
        if ((this.fuseArray[0].ta0sealnum != null || this.fuseArray[0].ta0sealnum != undefined) || this.fuseArray[0].ta0newsealnum != null || this.fuseArray[0].ta0newsealnum != undefined) {
            for (var j = 0; j < this.fuseArray.length; j++) {
                this.fuseArray[j].assetnum = assetnum;
                this.fuseArray[j].orgid = orgid;
                this.fuseArray[j].siteid = siteid;
                this.fuseArray[j].wonum = wonum;
                this.fuseArray[j].ta0seallocation = "METER_FUSE_" + (j + 1);
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.fuseArray[j]);
            }
        }
        // Save Data MDButton
        if ((this.mdButtonArray[0].ta0sealnum != null || this.mdButtonArray[0].ta0sealnum != undefined) || this.fuseArray[0].ta0newsealnum != null || this.fuseArray[0].ta0newsealnum != undefined) {
            for (var m = 0; m < this.mdButtonArray.length; m++) {
                this.mdButtonArray[m].assetnum = assetnum;
                this.mdButtonArray[m].orgid = orgid;
                this.mdButtonArray[m].siteid = siteid;
                this.mdButtonArray[m].wonum = wonum;
                this.mdButtonArray[m].ta0seallocation = "MD_BUTTON_" + (m + 1);
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
                this.meterBatteryArray[n].ta0seallocation = "METER_BATTERY_" + (n + 1);
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
                this.opticalEyeArray[b].ta0seallocation = "OPTICAL_EYE_COVER_" + (b + 1);
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.opticalEyeArray[b]);
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
        setTimeout(function () {
            loading.onWillDismiss(function () {
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_silStickers_haveChange = true;
                _this.gf.displayToast("Sil & Sticker Details updated.");
                loading.dismiss();
            });
        }, 10000);
        /**
        * Reason   : Saving to local storage (json data).
        * Created  : 22-01-2019
        */
        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        console.log("DATA: " + JSON.stringify(this.itemOri));
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_silStickers_haveChange = true;
            this.gf.displayToast("Sil & Sticker Details updated locally.");
            loading.dismiss();
            /** Sending latest data.. (alif) - (29.12.2018)*/
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("ServiceExecutionPage", this.itemOri);
        }
        else if ((__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            /**
             * Description: Change old(swift) to new(objective-c) plugin.
             * Edited: Alif (16.10.2019)
             * old --> mobilesignalswift.getSignalStrength
             * new --> cordova.plugins.MobileSignal.getSignalStrength
             */
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].ta0silstickerstatus = 'Y';
                    var itemVal = JSON.parse(JSON.stringify(_this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex]));
                    var itemArray = [];
                    itemArray.push(itemVal);
                    _this.dataService
                        .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0silStickers_haveChange = false;
                        /** convert string into json */
                        var resultDes = JSON.parse(results.toString());
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
                            _this.gf.displayToast(NewResult);
                        }
                        else {
                            _this.gf.warningAlert('Success', 'Sil & Sticker Details save successfully', 'Close');
                            /** Sending latest data.. (alif) - (29.12.2018)*/
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("ServiceExecutionPage", this.itemOri);
                            _this.navCtrl.pop();
                        }
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                        _this.gf.warningAlert('Error', 'Sil & Sticker Details failed to save.', 'Close');
                        loading.dismiss();
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_silStickers_haveChange = true;
                    _this.gf.displayToast("Sil & Sticker Details updated locally.");
                    loading.dismiss();
                    /** Sending latest data.. (alif) - (29.12.2018)*/
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                }
            });
        }
        else {
            var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0silstickerstatus = 'Y';
            var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
            var itemArray = [];
            delete itemVal['ta0registerdetail'];
            delete itemVal['ta0testdetail'];
            itemArray.push(itemVal);
            this.dataService
                .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0silStickers_haveChange = false;
                /** convert string into json */
                var resultDes = JSON.parse(results.toString());
                if (resultDes.processStatus === "failure") {
                    resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                    // Remove double quote+words not working..
                    resultDes.description.replace(/"/g, '');
                    var split = resultDes.description.split(":");
                    var result = split[1].substr(0, split[1].length - 1);
                    var NewResult = result.substring(2);
                    /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                    var result2 = resultDes.description.match(patt2);
                    var stringArry = result2.toString(); */
                    // var result = resultDes.description.slice(0, 34);
                    resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                    _this.gf.displayToast(NewResult);
                }
                else {
                    _this.gf.warningAlert('Success', 'Sil & Sticker Details save successfully', 'Close');
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                }
                loading.dismiss();
            }).catch(function (error) {
                _this.gf.stopLoading();
                loading.dismiss();
            });
        }
        //}
    };
    // Seal Section
    SilStickerInfoPage.prototype.deleteMeterCover = function (mIndex) {
        if (mIndex != 0) {
            this.meterCoverArray.pop();
            if (this.meterCoverArray.length < 3) {
                this.showAddMeterCover = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteTerminalCover = function (mIndex) {
        if (mIndex != 0) {
            this.terminalCoverArray.pop();
            if (this.terminalCoverArray.length < 2) {
                this.showAddTerminalCover = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteFuse = function (mIndex) {
        if (mIndex != 0) {
            this.fuseArray.pop();
            if (this.fuseArray.length < 1) {
                this.showAddFuse = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteMdButton = function (mIndex) {
        if (mIndex != 0) {
            this.mdButtonArray.pop();
            if (this.mdButtonArray.length < 1) {
                this.showAddMdButton = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteMeterBattery = function (mIndex) {
        if (mIndex != 0) {
            this.meterBatteryArray.pop();
            if (this.meterBatteryArray.length < 1) {
                this.showAddMeterBattery = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteOpticalEye = function (mIndex) {
        if (mIndex != 0) {
            this.opticalEyeArray.pop();
            if (this.opticalEyeArray.length < 1) {
                this.showAddOpticalEye = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteCommModule = function (mIndex) {
        if (mIndex != 0) {
            this.commModuleArray.pop();
            if (this.commModuleArray.length < 1) {
                this.showAddCommModule = true;
            }
        }
    };
    // Sticker Section
    SilStickerInfoPage.prototype.deleteSterminalCover = function (mIndex) {
        if (mIndex != 0) {
            this.sterminalCoverArray.pop();
            if (this.sterminalCoverArray.length < 4) {
                this.showAddSterminalCover = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSfuse = function (mIndex) {
        if (mIndex != 0) {
            this.sfuseArray.pop();
            if (this.sfuseArray.length < 4) {
                this.showAddSfuse = true;
            }
        }
    };
    // Other Seal Section
    SilStickerInfoPage.prototype.deleteTtb = function (mIndex) {
        if (mIndex != 0) {
            this.ttbArray.pop();
            if (this.ttbArray.length < 4) {
                this.showAddTtb = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteModem = function (mIndex) {
        if (mIndex != 0) {
            this.modemArray.pop();
            if (this.modemArray.length < 4) {
                this.showAddModem = true;
            }
        }
    };
    // Seal (MVHV)
    SilStickerInfoPage.prototype.deletePtChamber = function (mIndex) {
        if (mIndex != 0) {
            this.ptChamberArray.pop();
            if (this.ptChamberArray.length < 4) {
                this.showAddPtChamber = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteCtChamber = function (mIndex) {
        if (mIndex != 0) {
            this.ctChamberArray.pop();
            if (this.ctChamberArray.length < 4) {
                this.showAddCtChamber = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deletePtSecondaryFuse = function (mIndex) {
        if (mIndex != 0) {
            this.ptSecondaryFuseArray.pop();
            if (this.ptSecondaryFuseArray.length < 4) {
                this.showAddPtSecondaryFuse = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteMeterKiosk = function (mIndex) {
        if (mIndex != 0) {
            this.meterKioskArray.pop();
            if (this.meterKioskArray.length < 4) {
                this.showAddMeterKiosk = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteMeterTestBox = function (mIndex) {
        if (mIndex != 0) {
            this.meterTestBoxArray.pop();
            if (this.meterTestBoxArray.length < 4) {
                this.showAddMeterTestBox = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteTerminalBox = function (mIndex) {
        if (mIndex != 0) {
            this.terminalBoxArray.pop();
            if (this.terminalBoxArray.length < 4) {
                this.showAddTerminalBox = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteMarshallingBox = function (mIndex) {
        if (mIndex != 0) {
            this.marshallingBoxArray.pop();
            if (this.marshallingBoxArray.length < 4) {
                this.showAddMarshallingBox = true;
            }
        }
    };
    // Seal (LV)
    SilStickerInfoPage.prototype.deleteCtPanel = function (mIndex) {
        if (mIndex != 0) {
            this.ctPanelArray.pop();
            if (this.ctPanelArray.length < 4) {
                this.showAddCtPanel = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deletePanelMeter = function (mIndex) {
        if (mIndex != 0) {
            this.panelMeterArray.pop();
            if (this.panelMeterArray.length < 4) {
                this.showAddPanelMeter = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteTerminalCt = function (mIndex) {
        if (mIndex != 0) {
            this.terminalCtArray.pop();
            if (this.terminalCtArray.length < 4) {
                this.showAddCtPanel = true;
            }
        }
    };
    // Other Sticker Section
    SilStickerInfoPage.prototype.deleteSttb = function (mIndex) {
        if (mIndex != 0) {
            this.sttbArray.pop();
            if (this.sttbArray.length < 4) {
                this.showAddSttb = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSmodem = function (mIndex) {
        if (mIndex != 0) {
            this.smodemArray.pop();
            if (this.smodemArray.length < 4) {
                this.showAddSmodem = true;
            }
        }
    };
    // Sticker (MVHV)
    SilStickerInfoPage.prototype.deleteSptChamber = function (mIndex) {
        if (mIndex != 0) {
            this.sptChamberArray.pop();
            if (this.sptChamberArray.length < 4) {
                this.showAddSptChamber = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSctChamber = function (mIndex) {
        if (mIndex != 0) {
            this.sctChamberArray.pop();
            if (this.sctChamberArray.length < 4) {
                this.showAddSctChamber = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSptSecondaryFuse = function (mIndex) {
        if (mIndex != 0) {
            this.sptSecondaryFuseArray.pop();
            if (this.sptSecondaryFuseArray.length < 4) {
                this.showAddSptSecondaryFuse = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSmeterKiosk = function (mIndex) {
        if (mIndex != 0) {
            this.smeterKioskArray.pop();
            if (this.smeterKioskArray.length < 4) {
                this.showAddSmeterKiosk = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSmeterTestBox = function (mIndex) {
        if (mIndex != 0) {
            this.smeterTestBoxArray.pop();
            if (this.smeterTestBoxArray.length < 4) {
                this.showAddSmeterTestBox = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSterminalBox = function (mIndex) {
        if (mIndex != 0) {
            this.sterminalBoxArray.pop();
            if (this.sterminalBoxArray.length < 4) {
                this.showAddSterminalBox = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSmarshallingBox = function (mIndex) {
        if (mIndex != 0) {
            this.smarshallingBoxArray.pop();
            if (this.smarshallingBoxArray.length < 4) {
                this.showAddSmarshallingBox = true;
            }
        }
    };
    // Sticker (LV)
    SilStickerInfoPage.prototype.deleteSctPanel = function (mIndex) {
        if (mIndex != 0) {
            this.sctPanelArray.pop();
            if (this.sctPanelArray.length < 4) {
                this.showAddSctPanel = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSpanelMeter = function (mIndex) {
        if (mIndex != 0) {
            this.spanelMeterArray.pop();
            if (this.spanelMeterArray.length < 4) {
                this.showAddSpanelMeter = true;
            }
        }
    };
    SilStickerInfoPage.prototype.deleteSterminalCt = function (mIndex) {
        if (mIndex != 0) {
            this.sterminalCtArray.pop();
            if (this.sterminalCtArray.length < 4) {
                this.showAddSterminalCt = true;
            }
        }
    };
    SilStickerInfoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SilStickerInfoPage.prototype.displayMessageToast = function (msg) {
        this.presentToast("Required field should not be empty. " + msg);
    };
    SilStickerInfoPage.prototype.barcodeScan = function (deviceDetailsArray, index, indicator, type) {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            if (type === "before") {
                if (indicator == 1) {
                    if (deviceDetailsArray[index].ta0sealnum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0sealnum !== '' && deviceDetailsArray[index].ta0sealnum !== null && typeof deviceDetailsArray[index].ta0sealnum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0sealnum = barcodeData.text.trim();
                        }
                    }
                }
                else if (indicator == 2) {
                    if (deviceDetailsArray[index].ta0stickernum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0stickernum !== '' && deviceDetailsArray[index].ta0stickernum !== null && typeof deviceDetailsArray[index].ta0stickernum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0stickernum = barcodeData.text.trim();
                        }
                    }
                }
            }
            else {
                if (indicator == 1) {
                    if (deviceDetailsArray[index].ta0newsealnum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0newsealnum !== '' && deviceDetailsArray[index].ta0newsealnum !== null && typeof deviceDetailsArray[index].ta0newsealnum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            _this.ds.queryCrimplessData(barcodeData.text.trim()).then(function (result) {
                                var respObj = result;
                                if (respObj.statusCode === 'S') {
                                    deviceDetailsArray[index].ta0newsealnum = barcodeData.text.trim();
                                }
                                else {
                                    _this.gf.displayToast("Invalid Crimpless Seal " + barcodeData.text.trim());
                                    deviceDetailsArray[index].ta0newsealnum = "";
                                }
                            }, function (error) {
                                _this.gf.displayToast("Error validate Crimpless Seal!");
                            });
                        }
                    }
                }
                else if (indicator == 2) {
                    if (deviceDetailsArray[index].ta0newstickernum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0newstickernum !== '' && deviceDetailsArray[index].ta0newstickernum !== null && typeof deviceDetailsArray[index].ta0newstickernum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0newstickernum = barcodeData.text.trim();
                        }
                    }
                }
            }
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) { console.log(toast); });
        });
    };
    //Ameer Check user input type
    SilStickerInfoPage.prototype.userInputLengthNum = function (eventData, nameText, indexArray, type) {
        switch (nameText) {
            case 'mtrCover':
                var Numb_REGEXPmtrCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueMtrCvr = eventData.target.value;
                var newVal2;
                var regExpmtrCvr = new RegExp(Numb_REGEXPmtrCover);
                if (!regExpmtrCvr.test(newValueMtrCvr)) {
                    newVal2 = newValueMtrCvr.substr(0, newValueMtrCvr.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterCoverArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterCoverArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'terminalCover':
                var Numb_REGEXPTerminal = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValue = eventData.target.value;
                var newVal2;
                var regExpTerminal = new RegExp(Numb_REGEXPTerminal);
                if (!regExpTerminal.test(newValue)) {
                    newVal2 = newValue.substr(0, newValue.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.terminalCoverArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.terminalCoverArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'fuse':
                var Numb_REGEXPFuse = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueFuse = eventData.target.value;
                var newVal2;
                var regExpFuse = new RegExp(Numb_REGEXPFuse);
                if (!regExpFuse.test(newValueFuse)) {
                    newVal2 = newValueFuse.substr(0, newValueFuse.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.fuseArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.fuseArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'MDBtn':
                var RegExpMeterBtn = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValue2 = eventData.target.value;
                var newVal2;
                var regExp2 = new RegExp(RegExpMeterBtn);
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
                var RegExpBattery = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueBattery = eventData.target.value;
                var newVal2;
                var regExpBattery = new RegExp(RegExpBattery);
                if (!regExpBattery.test(newValueBattery)) {
                    newVal2 = newValueBattery.substr(0, newValueBattery.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterBatteryArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterBatteryArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'OptEye':
                var RegExpOptEye = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueOptEye = eventData.target.value;
                var newVal2;
                var regExpOptEye = new RegExp(RegExpOptEye);
                if (!regExpOptEye.test(newValueOptEye)) {
                    newVal2 = newValueOptEye.substr(0, newValueOptEye.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.opticalEyeArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.opticalEyeArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'CommModule':
                var RegExpCommModule = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueCommModule = eventData.target.value;
                var newVal2;
                var regExpCommModule = new RegExp(RegExpCommModule);
                if (!regExpCommModule.test(newValueCommModule)) {
                    newVal2 = newValueCommModule.substr(0, newValueCommModule.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.commModuleArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.commModuleArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'STerminalCover':
                var RegExpSTerminalCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSTerminalCover = eventData.target.value;
                var newVal2;
                var regExpSTerminalCover = new RegExp(RegExpSTerminalCover);
                if (!regExpSTerminalCover.test(newValueSTerminalCover)) {
                    newVal2 = newValueSTerminalCover.substr(0, newValueSTerminalCover.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sterminalCoverArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sterminalCoverArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'SFuse':
                var RegExpSFuse = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSFuse = eventData.target.value;
                var newVal2;
                var regExpSFuse = new RegExp(RegExpSFuse);
                if (!regExpSFuse.test(newValueSFuse)) {
                    newVal2 = newValueSFuse.substr(0, newValueSFuse.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sfuseArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sfuseArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'STTB':
                var RegExpSTTB = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSTTB = eventData.target.value;
                var newVal2;
                var regExpSTTB = new RegExp(RegExpSTTB);
                if (!regExpSTTB.test(newValueSTTB)) {
                    newVal2 = newValueSTTB.substr(0, newValueSTTB.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ttbArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ttbArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptChamber':
                var RegExpptChamber = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptChamber = eventData.target.value;
                var newVal2;
                var regExpptChamber = new RegExp(RegExpptChamber);
                if (!regExpptChamber.test(newValueptChamber)) {
                    newVal2 = newValueptChamber.substr(0, newValueptChamber.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptChamberArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptChamberArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ctChamber':
                var RegExpctChamber = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuectChamber = eventData.target.value;
                var newVal2;
                var regExpctChamber = new RegExp(RegExpctChamber);
                if (!regExpctChamber.test(newValuectChamber)) {
                    newVal2 = newValuectChamber.substr(0, newValuectChamber.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ctChamberArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ctChamberArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptSecFuse':
                var RegExpptSecFuser = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptSecFuse = eventData.target.value;
                var newVal2;
                var regExpptSecFuse = new RegExp(RegExpptSecFuser);
                if (!regExpptSecFuse.test(newValueptSecFuse)) {
                    newVal2 = newValueptSecFuse.substr(0, newValueptSecFuse.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptSecondaryFuseArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptSecondaryFuseArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'mtrKiosk':
                var RegExpmtrKiosk = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuemtrKiosk = eventData.target.value;
                var newVal2;
                var regExpmtrKiosk = new RegExp(RegExpmtrKiosk);
                if (!regExpmtrKiosk.test(newValuemtrKiosk)) {
                    newVal2 = newValuemtrKiosk.substr(0, newValuemtrKiosk.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterKioskArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterKioskArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'mtrTestBox':
                var RegExpmtrTestBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuemtrTestBox = eventData.target.value;
                var newVal2;
                var regExpmtrTestBox = new RegExp(RegExpmtrTestBox);
                if (!regExpmtrTestBox.test(newValuemtrTestBox)) {
                    newVal2 = newValuemtrTestBox.substr(0, newValuemtrTestBox.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterTestBoxArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterTestBoxArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'SmtrTerminalBox':
                var RegExpSmtrTerminalBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSmtrTerminalBox = eventData.target.value;
                var newVal2;
                var regExpSmtrTerminalBox = new RegExp(RegExpSmtrTerminalBox);
                if (!regExpSmtrTerminalBox.test(newValueSmtrTerminalBox)) {
                    newVal2 = newValueSmtrTerminalBox.substr(0, newValueSmtrTerminalBox.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.terminalBoxArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.terminalBoxArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'SMarshBox':
                var RegExpSMarshBox = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSMarshBox = eventData.target.value;
                var newVal2;
                var regExpSMarshBox = new RegExp(RegExpSMarshBox);
                if (!regExpSMarshBox.test(newValueSMarshBox)) {
                    newVal2 = newValueSMarshBox.substr(0, newValueSMarshBox.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.marshallingBoxArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.marshallingBoxArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'sttbArray':
                var RegExpsttbArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesttbArray = eventData.target.value;
                var newVal2;
                var regExpsttbArray = new RegExp(RegExpsttbArray);
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
                var RegExpsptChamberArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesptChamberArray = eventData.target.value;
                var newVal2;
                var regExpsptChamberArray = new RegExp(RegExpsptChamberArray);
                if (!regExpsptChamberArray.test(newValuesptChamberArray)) {
                    newVal2 = newValuesptChamberArray.substr(0, newValuesptChamberArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sptChamberArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sptChamberArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'sctChamberArray':
                var RegExpsctChamberArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesctChamberArray = eventData.target.value;
                var newVal2;
                var regExpsctChamberArray = new RegExp(RegExpsctChamberArray);
                if (!regExpsctChamberArray.test(newValuesctChamberArray)) {
                    newVal2 = newValuesctChamberArray.substr(0, newValuesctChamberArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sctChamberArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sctChamberArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'sptSecondaryFuseArray':
                var RegExpsptSecondaryFuseArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesptSecondaryFuseArray = eventData.target.value;
                var newVal2;
                var regExpsptSecondaryFuseArray = new RegExp(RegExpsptSecondaryFuseArray);
                if (!regExpsptSecondaryFuseArray.test(newValuesptSecondaryFuseArray)) {
                    newVal2 = newValuesptSecondaryFuseArray.substr(0, newValuesptSecondaryFuseArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sptSecondaryFuseArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sptSecondaryFuseArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'smeterKioskArray':
                var RegExpsmeterKioskArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesmeterKioskArray = eventData.target.value;
                var newVal2;
                var regExpsmeterKioskArray = new RegExp(RegExpsmeterKioskArray);
                if (!regExpsmeterKioskArray.test(newValuesmeterKioskArray)) {
                    newVal2 = newValuesmeterKioskArray.substr(0, newValuesmeterKioskArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.smeterKioskArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.smeterKioskArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'smeterTestBoxArray':
                var RegExpsmeterTestBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesmeterTestBoxArray = eventData.target.value;
                var newVal2;
                var regExpsmeterTestBoxArray = new RegExp(RegExpsmeterTestBoxArray);
                if (!regExpsmeterTestBoxArray.test(newValuesmeterTestBoxArray)) {
                    newVal2 = newValuesmeterTestBoxArray.substr(0, newValuesmeterTestBoxArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.smeterTestBoxArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.smeterTestBoxArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'sterminalBoxArray':
                var RegExpsterminalBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesterminalBoxArray = eventData.target.value;
                var newVal2;
                var regExpsterminalBoxArray = new RegExp(RegExpsterminalBoxArray);
                if (!regExpsterminalBoxArray.test(newValuesterminalBoxArray)) {
                    newVal2 = newValuesterminalBoxArray.substr(0, newValuesterminalBoxArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sterminalBoxArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sterminalBoxArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'smarshallingBoxArray':
                var RegExpsmarshallingBoxArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesmarshallingBoxArray = eventData.target.value;
                var newVal2;
                var regExpsmarshallingBoxArray = new RegExp(RegExpsmarshallingBoxArray);
                if (!regExpsmarshallingBoxArray.test(newValuesmarshallingBoxArray)) {
                    newVal2 = newValuesmarshallingBoxArray.substr(0, newValuesmarshallingBoxArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.smarshallingBoxArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.smarshallingBoxArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'sctPanelArray':
                var RegExpsctPanelArrayy = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuesctPanelArray = eventData.target.value;
                var newVal2;
                var regExpsctPanelArray = new RegExp(RegExpsctPanelArrayy);
                if (!regExpsctPanelArray.test(newValuesctPanelArray)) {
                    newVal2 = newValuesctPanelArray.substr(0, newValuesctPanelArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sctPanelArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sctPanelArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'ctPanelArray':
                var RegExpctPanelArray = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuectPanelArray = eventData.target.value;
                var newVal2;
                var regExpctPanelArray = new RegExp(RegExpctPanelArray);
                if (!regExpctPanelArray.test(newValuectPanelArray)) {
                    newVal2 = newValuectPanelArray.substr(0, newValuectPanelArray.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ctPanelArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ctPanelArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'modem':
                var RegExpctModem = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueModem = eventData.target.value;
                var newVal2;
                var regExpctModem = new RegExp(RegExpctModem);
                if (!regExpctModem.test(newValueModem)) {
                    newVal2 = newValueModem.substr(0, newValueModem.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.smodemArray[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.smodemArray[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'modem1':
                var RegExpctModem1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueModem1 = eventData.target.value;
                var newVal2;
                var regExpctModem1 = new RegExp(RegExpctModem1);
                if (!regExpctModem1.test(newValueModem1)) {
                    newVal2 = newValueModem1.substr(0, newValueModem1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.modemArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.modemArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
        }
    };
    SilStickerInfoPage.prototype.checkingStickerValidationHandler = function (loading) {
        var array = [];
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
        var cont = this.getDuplicates(contArray);
        var control = [];
        for (var key in cont) {
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
    };
    SilStickerInfoPage.prototype.checkingSealValidationHandler = function (loading) {
        var array = [];
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
        var cont = this.getDuplicates(contArray);
        var control = [];
        for (var key in cont) {
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
    };
    SilStickerInfoPage.prototype.getDuplicates = function (contArray) {
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
    };
    SilStickerInfoPage.prototype.duplicateCheck = function (array, typeName, coverArray) {
        for (var i = 0; i < coverArray.length; i++) {
            array.push({
                type: typeName + i,
                value: coverArray[i].ta0sealnum,
            });
        }
        return array;
    };
    SilStickerInfoPage.prototype.duplicateStickerCheck = function (array, typeName, coverArray) {
        for (var i = 0; i < coverArray.length; i++) {
            array.push({
                type: typeName + i,
                value: coverArray[i].ta0stickernum,
            });
        }
        return array;
    };
    SilStickerInfoPage.prototype.arrayValidatedHandler = function (array, coverArray) {
        for (var i = 0; i < coverArray.length; i++) {
            coverArray[i].ta0error = false;
            array.push(coverArray[i].ta0sealnum);
        }
        return array;
    };
    /**
     * Hide Show Seal No Test Section
     * Created  : Alif
     * Date     : 15-11-2018
     * Edited   : Ameer (16/11/2018)
     */
    SilStickerInfoPage.prototype.showSealNoSection = function (index) {
        index++;
        if (this.showSealNo === false) {
            this.showSealNo = true;
        }
        else if (index === 2) {
            this.showSealNo = false;
        }
    };
    /**
     * Hide Show Sticker No Test Section
     * Created  : Alif
     * Date     : 15-11-2018
     * Edited   : Ameer (16/11/2018)
     */
    SilStickerInfoPage.prototype.showStickerNoSection = function (index) {
        index++;
        if (this.showStickerNo === false) {
            this.showStickerNo = true;
        }
        else if (index === 2) {
            this.showStickerNo = false;
        }
    };
    /**
     * Hide Show Seal No Test Section
     * Created  : Alif
     * Date     : 15-11-2018
     * Edited   : Ameer (16/11/2018)
     */
    SilStickerInfoPage.prototype.showOtherSealNoSection = function (index) {
        index++;
        if (this.showOtherSealNo === false) {
            this.showOtherSealNo = true;
        }
        else if (index === 2) {
            this.showOtherSealNo = false;
        }
    };
    /**
     * Hide Show Sticker No Test Section
     * Created  : Alif
     * Date     : 15-11-2018
     * Edited   : Ameer (16/11/2018)
     */
    SilStickerInfoPage.prototype.showOtherStickerNoSection = function (index) {
        index++;
        if (this.showOtherStickerNo === false) {
            this.showOtherStickerNo = true;
        }
        else if (index === 2) {
            this.showOtherStickerNo = false;
        }
    };
    /**
     * Reset Seal Section
     * Created  : Alif
     * Date     : 17-12-2018
     * Edited   :
     */
    SilStickerInfoPage.prototype.resetSealSection = function () {
        var _this = this;
        console.log("Reset all seal input in one click!");
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Do you agree to clear all before & after Seal Section ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        confirm.dismiss();
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        console.log("Confirm to clear all the fields..");
                        _this.meterCoverArray = [];
                        var meterCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        meterCoverVal.ta0seallocation = "METER_COVER_";
                        meterCoverVal.ta0sealnum = null;
                        _this.meterCoverArray[0] = meterCoverVal;
                        _this.terminalCoverArray = [];
                        var terminalCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        terminalCoverVal.ta0seallocation = "TERMINAL_COVER_";
                        terminalCoverVal.ta0sealnum = null;
                        _this.terminalCoverArray[0] = terminalCoverVal;
                        _this.fuseArray = [];
                        var fuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        fuseVal.ta0seallocation = "METER_FUSE_";
                        fuseVal.ta0sealnum = null;
                        _this.fuseArray[0] = fuseVal;
                        _this.mdButtonArray = [];
                        var mdButtonVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        mdButtonVal.ta0seallocation = "MD_BUTTON_";
                        mdButtonVal.ta0sealnum = null;
                        _this.mdButtonArray[0] = mdButtonVal;
                        _this.meterBatteryArray = [];
                        var meterBatteryVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        meterBatteryVal.ta0seallocation = "METER_BATTERY_";
                        meterBatteryVal.ta0sealnum = null;
                        _this.meterBatteryArray[0] = meterBatteryVal;
                        _this.opticalEyeArray = [];
                        var opticalEyeVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        opticalEyeVal.ta0seallocation = "OPTICAL_EYE_COVER_";
                        opticalEyeVal.ta0sealnum = null;
                        _this.opticalEyeArray[0] = opticalEyeVal;
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * Reset Other Seal Section
     * Created  : Alif
     * Date     : 17-12-2018
     * Edited   :
     */
    SilStickerInfoPage.prototype.resetOtherSealSection = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Do you agree to clear all before & after Others Seal Section ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        confirm.dismiss();
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        console.log("Confirm to clear all the fields..");
                        _this.ttbArray = [];
                        var ttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        ttbVal.ta0seallocation = "TEST_BLOCK_";
                        ttbVal.ta0sealnum = null;
                        _this.ttbArray[0] = ttbVal;
                        _this.ptChamberArray = [];
                        var ptChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        ptChamberVal.ta0seallocation = "PT_CHAMBER_";
                        ptChamberVal.ta0sealnum = null;
                        _this.ptChamberArray[0] = ptChamberVal;
                        _this.ctChamberArray = [];
                        var ctChamberVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        ctChamberVal.ta0seallocation = "CT_CHAMBER_";
                        ctChamberVal.ta0sealnum = null;
                        _this.ctChamberArray[0] = ctChamberVal;
                        _this.ptSecondaryFuseArray = [];
                        var ptSecondaryFuseVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        ptSecondaryFuseVal.ta0seallocation = "PT_SEC_FUSE_";
                        ptSecondaryFuseVal.ta0sealnum = null;
                        _this.ptSecondaryFuseArray[0] = ptSecondaryFuseVal;
                        _this.meterKioskArray = [];
                        var meterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        meterKioskVal.ta0seallocation = "KIOSK_PANELDOOR_";
                        meterKioskVal.ta0sealnum = null;
                        _this.meterKioskArray[0] = meterKioskVal;
                        _this.meterTestBoxArray = [];
                        var meterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        meterTestBoxVal.ta0seallocation = "METER_TEST_BOX_";
                        meterTestBoxVal.ta0sealnum = null;
                        _this.meterTestBoxArray[0] = meterTestBoxVal;
                        _this.terminalBoxArray = [];
                        var terminalBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        terminalBoxVal.ta0seallocation = "TERMINATION_BOX_";
                        terminalBoxVal.ta0sealnum = null;
                        _this.terminalBoxArray[0] = terminalBoxVal;
                        _this.marshallingBoxArray = [];
                        var marshallingBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        marshallingBoxVal.ta0seallocation = "MARSHALLING_BOX_";
                        marshallingBoxVal.ta0sealnum = null;
                        _this.marshallingBoxArray[0] = marshallingBoxVal;
                        _this.ctPanelArray = [];
                        var ctPanelVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        ctPanelVal.ta0seallocation = "CT_CHAMBER_";
                        ctPanelVal.ta0sealnum = null;
                        _this.ctPanelArray[0] = ctPanelVal;
                        _this.panelMeterArray = [];
                        var panelMeterVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        panelMeterVal.ta0seallocation = "PANEL_METER_";
                        panelMeterVal.ta0sealnum = null;
                        _this.panelMeterArray[0] = panelMeterVal;
                        _this.terminalCtArray = [];
                        var terminalCtVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        terminalCtVal.ta0seallocation = "TERMINAL_CT_";
                        terminalCtVal.ta0sealnum = null;
                        _this.terminalCtArray[0] = terminalCtVal;
                        _this.modemArray = [];
                        var modemVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                        modemVal.ta0seallocation = "MODEM_";
                        modemVal.ta0sealnum = null;
                        _this.modemArray[0] = modemVal;
                    }
                }
            ]
        });
        confirm.present();
    };
    SilStickerInfoPage.prototype.checkingFieldDisabled = function (attr, category) {
        if (category === "seal") {
            if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else {
                return false;
            }
        }
        else if (category === "sticker") {
        }
    };
    /**
     * Description: Method to manipulate disabled segment.
     * Created    : Ameer
     * Edited     : Alif (03.10.2019)
     */
    SilStickerInfoPage.prototype.replaceMeterNCheck = function () {
        var checkingDeviceSelect = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator;
        var multiassetlocci_temp = this.item.json.ta0feeder[this.fIndex].multiassetlocci;
        if (checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN) {
            var mmeter = multiassetlocci_temp.filter(function (item) {
                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
            });
            if (mmeter.length > 0) {
                this.disableBefore = false;
                this.disableAfter = true;
            }
            else {
                this.disableBefore = false;
                this.disableAfter = false;
            }
        }
        else if (checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
            var cmeter = multiassetlocci_temp.filter(function (item) {
                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK;
            });
            if (cmeter.length > 0) {
                this.disableBefore = false;
                this.disableAfter = true;
            }
            else {
                this.disableBefore = false;
                this.disableAfter = false;
            }
        }
        else if (checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN || checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) {
            // disabled before section.
            this.disableBefore = true;
            this.refSegment = 'after';
        }
    };
    /**
     * Create By: Ameer (8/5/2019)
     * Description: Check when opening page when ta0sealnum is available or not. Tick check box if ta0sealnum is available
     *
     */
    SilStickerInfoPage.prototype.checkValueAvailable = function () {
        debugger;
        // Start checking for Seal Section
        if (this.refSegment === 'before') {
            //Meter Cover Array
            var mtrCvr = this.meterCoverArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            //Terminal Cover Array
            var terminalArry = this.terminalCoverArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            //Battery Array
            var batteryArry = this.meterBatteryArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            // Optical Eye
            var optEye = this.opticalEyeArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            //Fuse Array
            var fuseArry = this.fuseArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            //MD Button
            var mdBtn = this.mdButtonArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            //End Checking Seal Section
            // Sticker Section
            // Sticker meter cover array
            var SmeterCvrArry = this.sterminalCoverArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            // Sticker Fuse Array
            var SfuseArry = this.sfuseArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            //  End Sticker Section
            //  Other Seal
            var ttbArry = this.ttbArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var ptChamber = this.ptChamberArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var ctChamber = this.ctChamberArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var ptSecondary = this.ptSecondaryFuseArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var meterkiosk = this.meterKioskArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var meterTestBox = this.meterTestBoxArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var terminalBox = this.terminalBoxArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var marshallingBox = this.marshallingBoxArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var ctPanel = this.ctPanelArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var panelMeter = this.panelMeterArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var terminalCt = this.terminalCtArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            var modem = this.modemArray.filter(function (item) {
                if (typeof (item.ta0newsealnum) !== 'undefined' && item.ta0newsealnum !== '' && item.ta0newsealnum !== null) {
                    item.ta0removeind = true;
                }
            });
            //  End Seal Other section
            //  Sticker Other Section
            var sTtb = this.sttbArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sPTCham = this.sptChamberArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sCTCham = this.sctChamberArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sPTSecondary = this.sptSecondaryFuseArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sMeterKiosk = this.smeterKioskArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sMeterTestBox = this.smeterTestBoxArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sTerminalBox = this.sterminalBoxArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sMarshallingBox = this.smarshallingBoxArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sCTPane = this.sctPanelArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sPanelMeter = this.spanelMeterArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sTerminalCt = this.sterminalCtArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            var sModem = this.smodemArray.filter(function (item) {
                if (typeof (item.ta0newstickernum) !== 'undefined' && item.ta0newstickernum !== '' && item.ta0newstickernum !== null) {
                    item.ta0removeind = true;
                }
            });
            //  End Sticker other section
        }
    };
    SilStickerInfoPage.prototype.updateRemovalReason = function (event, index) {
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
                if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_COVER)) {
                    this.meterCoverArray[mCount].ta0sealremreason = event;
                    mCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_COVER)) {
                    this.terminalCoverArray[tCount].ta0sealremreason = event;
                    tCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE)) {
                    this.fuseArray[fCount].ta0sealremreason = event;
                    fCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MD_BUTTON)) {
                    this.mdButtonArray[mdCount].ta0sealremreason = event;
                    mdCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_BATTERY)) {
                    this.meterBatteryArray[mbCount].ta0sealremreason = event;
                    mbCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].OPTICAL_EYE_COVER)) {
                    this.opticalEyeArray[oCount].ta0sealremreason = event;
                    oCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TTB)) {
                    this.ttbArray[tbCount].ta0sealremreason = event;
                    tbCount++;
                }
                else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MODEM_)) {
                    this.modemArray[moCount].ta0sealremreason = event;
                    moCount++;
                }
                switch (this.showLvFields) {
                    case true: {
                        if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_PANEL)) {
                            this.ctPanelArray[ctCount].ta0sealremreason = event;
                            ctCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_KIOSK)) {
                            this.meterKioskArray[mkCount].ta0sealremreason = event;
                            mkCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_CT)) {
                            this.terminalCtArray[tcCount].ta0sealremreason = event;
                            tcCount++;
                        }
                        break;
                    }
                }
                switch (this.showMvHvFields) {
                    case true: {
                        if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAM)) {
                            this.ptChamberArray[ptCount].ta0sealremreason = event;
                            ptCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAM)) {
                            this.ctChamberArray[ctcCount].ta0sealremreason = event;
                            ctCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FS)) {
                            this.ptSecondaryFuseArray[ptsCount].ta0sealremreason = event;
                            ptsCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_KIOSK)) {
                            this.meterKioskArray[mkCount].ta0sealremreason = event;
                            mkCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TEST_BOX)) {
                            this.meterTestBoxArray[mtbCount].ta0sealremreason = event;
                            mtbCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX)) {
                            this.terminalBoxArray[tboCount].ta0sealremreason = event;
                            tboCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX)) {
                            this.marshallingBoxArray[msbCount].ta0sealremreason = event;
                            msbCount++;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_CT)) {
                            this.terminalCtArray[tcCount].ta0sealremreason = event;
                            tcCount++;
                        }
                        break;
                    }
                }
            }
        }
    };
    SilStickerInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sil-sticker-info',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/devices/sil-sticker-info/sil-sticker-info.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Sil & Sticker Informations</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="refSegment" style="padding-bottom: 10px;">\n    <ion-segment-button value="before" [disabled]="disableBefore">Before</ion-segment-button>\n    <ion-segment-button value="after" [disabled]="disableAfter">After</ion-segment-button>\n  </ion-segment>\n\n  <span [ngSwitch]="refSegment">\n    <span *ngSwitchCase="\'before\'">\n      <!-- Seal & Sticker (OPC) Start -->\n      <span *ngIf="showOpcFields">\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span *ngIf="showSealNo">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Meter Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterCover"\n                  (click)="addMeterCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterCoverArray.length <= 1" color="primary">Meter Cover</ion-label>\n                  <ion-label *ngIf="meterCoverArray.length > 1" color="primary">Meter Cover {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'mtrCover\',j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterCoverArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value" \n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value" (ionChange)="updateRemovalReason($event)"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Terminal Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalCover"\n                  (click)="addTerminalCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of terminalCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="terminalCoverArray.length <= 1" color="primary">Terminal Cover</ion-label>\n                  <ion-label *ngIf="terminalCoverArray.length > 1" color="primary">Terminal Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'terminalCover\',j, \'before\')" clearInput\n                    placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(terminalCoverArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteTerminalCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Battery\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterBatteryArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterBatteryArray.length <= 1" color="primary">Battery</ion-label>\n                  <ion-label *ngIf="meterBatteryArray.length > 1" color="primary">Battery {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'Battery\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterBatteryArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterBattery(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Optical Eye Cover\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of opticalEyeArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="opticalEyeArray.length <= 1" color="primary">Optical Eye Cover</ion-label>\n                  <ion-label *ngIf="opticalEyeArray.length > 1" color="primary">Optical Eye Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'OptEye\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(opticalEyeArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteOpticalEye(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n        </span>\n      </span>\n      <!-- Seal & Sticker (OPC) End -->\n\n      <!-- Seal & Sticker (LV & MVHV) Start -->\n      <span *ngIf="!showOpcFields">\n        <!-- Sil & Sticker Design start  -->\n        <ion-item-divider color="light" class="pointer">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="medal"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <div *ngIf="showSealNo">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Meter Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterCover"\n                  (click)="addMeterCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterCoverArray.length <= 1" color="primary">Meter Cover</ion-label>\n                  <ion-label *ngIf="meterCoverArray.length > 1" color="primary">Meter Cover {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event, \'mtrCover\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterCoverArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value" \n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value" (ionChange)="updateRemovalReason($event)"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n       \n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Terminal Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalCover"\n                  (click)="addTerminalCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of terminalCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="terminalCoverArray.length <= 1" color="primary">Terminal Cover</ion-label>\n                  <ion-label *ngIf="terminalCoverArray.length > 1" color="primary">Terminal Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'terminalCover\',j, \'before\')" clearInput\n                    placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(terminalCoverArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteTerminalCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Fuse/Voltage Slider\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of fuseArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="fuseArray.length <= 1" color="primary">Fuse/Voltage Slider</ion-label>\n                  <ion-label *ngIf="fuseArray.length > 1" color="primary">Fuse/Voltage Slider {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'fuse\' , j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(fuseArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteFuse(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                MD Button\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of mdButtonArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="mdButtonArray.length <= 1" color="primary">MD Button</ion-label>\n                  <ion-label *ngIf="mdButtonArray.length > 1" color="primary">MD Button {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'MDBtn\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(mdButtonArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <!--<ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px; text-align:right;  padding-top: 20px;padding-right: 10px"-->\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMdButton(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Battery\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterBatteryArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterBatteryArray.length <= 1" color="primary">Battery</ion-label>\n                  <ion-label *ngIf="meterBatteryArray.length > 1" color="primary">Battery {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'Battery\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterBatteryArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterBattery(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Optical Eye Cover\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of opticalEyeArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="opticalEyeArray.length <= 1" color="primary">Optical Eye Cover</ion-label>\n                  <ion-label *ngIf="opticalEyeArray.length > 1" color="primary">Optical Eye Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'OptEye\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(opticalEyeArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteOpticalEye(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Comm Module\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of commModuleArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="commModuleArray.length <= 1" color="primary">Comm Module</ion-label>\n                  <ion-label *ngIf="commModuleArray.length > 1" color="primary">Comm Module {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'CommModule\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || (attr.ta0sealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(commModuleArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteCommModule(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n        </div>\n\n        <!-- STICKER NO START -->\n        <ion-item-divider color="light" class="pointer" *ngIf="showSticker">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showStickerNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>STICKER NO</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showStickerNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showStickerNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showStickerNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span *ngIf="showStickerNo && showSticker">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Terminal Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddSterminalCover"\n                  (click)="addSterminalCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of sterminalCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="sterminalCoverArray.length <= 1" color="primary">Terminal Cover</ion-label>\n                  <ion-label *ngIf="sterminalCoverArray.length > 1" color="primary">Terminal Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'STerminalCover\', j, \'before\')" clearInput\n                    placeholder="Please Enter"\n                    [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(sterminalCoverArray,j,2, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteSterminalCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Fuse/Voltage Slider\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of sfuseArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="sfuseArray.length <= 1" color="primary">Fuse/Voltage Slider</ion-label>\n                  <ion-label *ngIf="sfuseArray.length > 1" color="primary">Fuse/Voltage Slider {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'SFuse\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(sfuseArray,j,2, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteSfuse(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n        </span>\n      </span>\n\n      <!-- Start Other Sil & Sticker Info -->\n      <span *ngIf="showMainMeter && !showOpcFields">\n        <ion-item-divider color="light" class="pointer">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showOtherSealNoSection(1)">\n              <ion-icon name="medal"></ion-icon>&nbsp; <strong>OTHERS SEAL</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetOtherSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showOtherSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showOtherSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showOtherSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n        <span *ngIf="showOtherSealNo">\n          <span *ngIf="showMvHvFields">\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Test Block\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtb"\n                    (click)="addTtb()">\n                    <ion-icon ios="md-add" md="md-add"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ttbArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ttbArray.length <= 1" color="primary">Test Block</ion-label>\n                    <ion-label *ngIf="ttbArray.length > 1" color="primary">Test Block {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'STTB\', j, \'before\')" clearInput placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ttbArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTtb(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ptChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ptChamberArray.length <= 1" color="primary">PT Chamber</ion-label>\n                    <ion-label *ngIf="ptChamberArray.length > 1" color="primary">PT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'ptChamber\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ptChamberArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deletePtChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ctChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ctChamberArray.length <= 1" color="primary">CT Chamber</ion-label>\n                    <ion-label *ngIf="ctChamberArray.length > 1" color="primary">CT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'ctChamber\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ctChamberArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteCtChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Secondary Fuse\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ptSecondaryFuseArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ptSecondaryFuseArray.length <= 1" color="primary">PT Secondary Fuse</ion-label>\n                    <ion-label *ngIf="ptSecondaryFuseArray.length > 1" color="primary">PT Secondary Fuse {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'ptSecFuse\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ptSecondaryFuseArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deletePtSecondaryFuse(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Kiosk\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of meterKioskArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="meterKioskArray.length <= 1" color="primary">Meter Kiosk</ion-label>\n                    <ion-label *ngIf="meterKioskArray.length > 1" color="primary">Meter Kiosk {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'mtrKiosk\', j, \'before\')" clearInput placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMeterKiosk(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Test Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of meterTestBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="meterTestBoxArray.length <= 1" color="primary">Meter Test Box</ion-label>\n                    <ion-label *ngIf="meterTestBoxArray.length > 1" color="primary">Meter Test Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'mtrTestBox\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(meterTestBoxArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMeterTestBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Terminal Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of terminalBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="terminalBoxArray.length <= 1" color="primary">Terminal Box</ion-label>\n                    <ion-label *ngIf="terminalBoxArray.length > 1" color="primary">Terminal Box {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'SmtrTerminalBox\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(terminalBoxArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTerminalBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Marshalling Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of marshallingBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="marshallingBoxArray.length <= 1" color="primary">Marshalling Box</ion-label>\n                    <ion-label *ngIf="marshallingBoxArray.length > 1" color="primary">Marshalling Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'SMarshBox\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(marshallingBoxArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMarshallingBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n          </span>\n\n          <span *ngIf="showLvFields">\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Panel\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ctPanelArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ctPanelArray.length <= 1" color="primary">CT Panel</ion-label>\n                    <ion-label *ngIf="ctPanelArray.length > 1" color="primary">CT Panel {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                    <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                    </ion-checkbox>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'ctPanelArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ctPanelArray,j,1, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteCtPanel(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Condition</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover"\n                      placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <!-- CR002 Crimpless Seal-->\n              <div *ngIf="attr.ta0removeind===true">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3>\n                    <ion-item no-lines>\n                      <ion-label color="primary">Removal Reason</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-1>\n                    <ion-item no-lines>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                        [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                        <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                          {{ key.json.description }}\n                        </ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- CR002 Crimpless Seal-->\n            </span>\n            <span *ngIf="showLvExtraFields">\n              <ion-item-divider color="light">\n                <ion-row align-items-center>\n                  <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                    Panel Meter\n                  </ion-col>\n                </ion-row>\n              </ion-item-divider>\n              <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n                *ngFor="let attr of panelMeterArray; let j = index">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item no-lines>\n                      <ion-label *ngIf="panelMeterArray.length <= 1" color="primary">Panel Meter</ion-label>\n                      <ion-label *ngIf="panelMeterArray.length > 1" color="primary">Panel Meter {{ j + 1 }}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="18" placeholder="Please Enter"\n                        clearInput\n                        [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                    <button ion-button (click)="barcodeScan(panelMeterArray,j,1, \'before\')">\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                    <button ion-button (click)="deletePanelMeter(j)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </span>\n\n              <ion-item-divider color="light">\n                <ion-row align-items-center>\n                  <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                    Terminal CT\n                  </ion-col>\n                </ion-row>\n              </ion-item-divider>\n              <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n                *ngFor="let attr of terminalCtArray; let j = index">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item no-lines>\n                      <ion-label *ngIf="terminalCtArray.length <= 1" color="primary">Terminal CT</ion-label>\n                      <ion-label *ngIf="terminalCtArray.length > 1" color="primary">Terminal CT {{ j + 1 }}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" placeholder="Please Enter"\n                        clearInput\n                        [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                    <button ion-button (click)="barcodeScan(terminalCtArray,j,1, \'before\')">\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                    <button ion-button (click)="deleteTerminalCt(j)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </span>\n            </span>\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Modem\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of modemArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="modemArray.length <= 1" color="primary">Modem</ion-label>\n                  <ion-label *ngIf="modemArray.length > 1" color="primary">Modem {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines>\n                  <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'modem1\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(modemArray,j,1, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteModem(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines>\n                  <ion-label color="primary">Condition</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                    [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                      {{ key.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- CR002 Crimpless Seal-->\n            <div *ngIf="attr.ta0removeind===true">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines>\n                    <ion-label color="primary">Removal Reason</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-1>\n                  <ion-item no-lines>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6>\n                  <ion-item>\n                    <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                      [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <!--<ion-option *ngFor="let key of rr" value="{{ key.json.value }}">-->\n                      <ion-option *ngFor="let key of rr; let idx = index" value="{{ key.json.value }}" selected="{{(idx==0).toString()}}" >\n                        {{ key.json.description }}\n                      </ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- CR002 Crimpless Seal-->\n          </span>\n        </span>\n\n        <!-- Start Other Sticker -->\n        <ion-item-divider color="light" class="pointer" *ngIf="showSticker">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showOtherStickerNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>OTHERS STICKER</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showOtherStickerNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showOtherStickerNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showOtherStickerNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n        <span *ngIf="showOtherStickerNo && showSticker">\n          <span *ngIf="showMvHvFields">\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Test Block\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sttbArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sttbArray.length <= 1" color="primary">Test Block</ion-label>\n                    <ion-label *ngIf="sttbArray.length > 1" color="primary">Test Block {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'sttbArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sttbArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSttb(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sptChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sptChamberArray.length <= 1" color="primary">PT Chamber</ion-label>\n                    <ion-label *ngIf="sptChamberArray.length > 1" color="primary">PT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'sptChamberArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sptChamberArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSptChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sctChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sctChamberArray.length <= 1" color="primary">CT Chamber</ion-label>\n                    <ion-label *ngIf="sctChamberArray.length > 1" color="primary">CT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'sctChamberArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sctChamberArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSctChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Secondary Fuse\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sptSecondaryFuseArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sptSecondaryFuseArray.length <= 1" color="primary">PT Secondary Fuse</ion-label>\n                    <ion-label *ngIf="sptSecondaryFuseArray.length > 1" color="primary">PT Secondary Fuse {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'sptSecondaryFuseArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sptSecondaryFuseArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSptSecondaryFuse(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Kiosk\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of smeterKioskArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="smeterKioskArray.length <= 1" color="primary">Meter Kiosk</ion-label>\n                    <ion-label *ngIf="smeterKioskArray.length > 1" color="primary">Meter Kiosk {{ j + 1 }}</ion-label>\n                  </ion-item>\n\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'smeterKioskArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(smeterKioskArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSmeterKiosk(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Test Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of smeterTestBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="smeterTestBoxArray.length <= 1" color="primary">Meter Test Box</ion-label>\n                    <ion-label *ngIf="smeterTestBoxArray.length > 1" color="primary">Meter Test Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'smeterTestBoxArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(smeterTestBoxArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSmeterTestBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Terminal Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sterminalBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sterminalBoxArray.length <= 1" color="primary">Terminal Box</ion-label>\n                    <ion-label *ngIf="sterminalBoxArray.length > 1" color="primary">Terminal Box {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'sterminalBoxArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sterminalBoxArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSterminalBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Marshalling Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of smarshallingBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="smarshallingBoxArray.length <= 1" color="primary">Marshalling Box</ion-label>\n                    <ion-label *ngIf="smarshallingBoxArray.length > 1" color="primary">Marshalling Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'smarshallingBoxArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(smarshallingBoxArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSmarshallingBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n          </span>\n\n          <span *ngIf="showLvFields">\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Panel\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sctPanelArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sctPanelArray.length <= 1" color="primary">CT Panel</ion-label>\n                    <ion-label *ngIf="sctPanelArray.length > 1" color="primary">CT Panel {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'sctPanelArray\', j, \'before\')" clearInput\n                      placeholder="Please Enter"\n                      [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sctPanelArray,j,2, \'before\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSctPanel(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <div *ngIf="showLvExtraFields">\n              <ion-item-divider color="light">\n                <ion-row align-items-center>\n                  <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                    Panel Meter\n                  </ion-col>\n                </ion-row>\n              </ion-item-divider>\n              <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n                *ngFor="let attr of spanelMeterArray; let j = index">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item no-lines>\n                      <ion-label *ngIf="spanelMeterArray.length <= 1" color="primary">Panel Meter</ion-label>\n                      <ion-label *ngIf="spanelMeterArray.length > 1" color="primary">Panel Meter {{ j + 1 }}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="10" placeholder="Please Enter"\n                        clearInput\n                        [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                    <button ion-button (click)="barcodeScan(spanelMeterArray,j,2, \'before\')">\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                    <button ion-button (click)="deleteSpanelMeter(j)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </span>\n\n              <ion-item-divider color="light">\n                <ion-row align-items-center>\n                  <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                    Terminal CT\n                  </ion-col>\n                </ion-row>\n              </ion-item-divider>\n              <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n                *ngFor="let attr of sterminalCtArray; let j = index">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item no-lines>\n                      <ion-label *ngIf="sterminalCtArray.length <= 1" color="primary">Terminal CT</ion-label>\n                      <ion-label *ngIf="sterminalCtArray.length > 1" color="primary">Terminal CT {{ j + 1 }}</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="10" placeholder="Please Enter"\n                        clearInput\n                        [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                    <button ion-button (click)="barcodeScan(sterminalCtArray,j,2, \'before\')">\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                    <button ion-button (click)="deleteSterminalCt(j)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </span>\n            </div>\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Modem\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of smodemArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="smodemArray.length <= 1" color="primary">Modem</ion-label>\n                  <ion-label *ngIf="smodemArray.length > 1" color="primary">Modem {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'modem\', j, \'before\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(smodemArray, j, 2, \'before\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteSmodem(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n        </span>\n      </span>\n      <!-- Seal & Sticker (LV & MVHV) End -->\n    </span>\n\n    <span *ngSwitchCase="\'after\'">\n      <!-- Seal & Sticker (OPC) Start -->\n      <span *ngIf="showOpcFields">\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <div *ngIf="showSealNo">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Meter Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterCover"\n                  (click)="addMeterCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterCoverArray.length <= 1" color="primary">Meter Cover</ion-label>\n                  <ion-label *ngIf="meterCoverArray.length > 1" color="primary">Meter Cover {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'mtrCover\',j, \'after\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterCoverArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Terminal Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalCover"\n                  (click)="addTerminalCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of terminalCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="terminalCoverArray.length <= 1" color="primary">Terminal Cover</ion-label>\n                  <ion-label *ngIf="terminalCoverArray.length > 1" color="primary">Terminal Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'terminalCover\',j,\'after\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(terminalCoverArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteTerminalCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Battery\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterBatteryArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterBatteryArray.length <= 1" color="primary">Battery</ion-label>\n                  <ion-label *ngIf="meterBatteryArray.length > 1" color="primary">Battery {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'Battery\', j,\'after\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterBatteryArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterBattery(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Optical Eye Cover\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of opticalEyeArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="opticalEyeArray.length <= 1" color="primary">Optical Eye Cover</ion-label>\n                  <ion-label *ngIf="opticalEyeArray.length > 1" color="primary">Optical Eye Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30"\n                    (keyup)="userInputLengthNum($event,\'OptEye\', j,\'after\')" clearInput placeholder="Please Enter"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(opticalEyeArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteOpticalEye(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n        </div>\n      </span>\n      <!-- Seal & Sticker (OPC) End -->\n\n      <!-- Seal & Sticker (LV & MVHV) Start -->\n      <div *ngIf="!showOpcFields">\n        <!-- Sil & Sticker Design start  -->\n        <ion-item-divider color="light" class="pointer">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="medal"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <div *ngIf="showSealNo">\n          <!-- Meter Cover: Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Meter Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterCover"\n                  (click)="addMeterCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterCoverArray.length <= 1" color="primary">Meter Cover</ion-label>\n                  <ion-label *ngIf="meterCoverArray.length > 1" color="primary">Meter Cover {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || (attr.ta0newsealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterCoverArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- Meter Cover: End -->\n\n          <!-- Terminal Cover : Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Terminal Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalCover"\n                  (click)="addTerminalCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of terminalCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="terminalCoverArray.length <= 1" color="primary">Terminal Meter</ion-label>\n                  <ion-label *ngIf="terminalCoverArray.length > 1" color="primary">Terminal Meter {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || (attr.ta0newsealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(terminalCoverArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteTerminalCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- Terminal Cover: End -->\n\n          <!-- Fuse: Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Fuse/Voltage Slider\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of fuseArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="fuseArray.length <= 1" color="primary">Fuse/Voltage Slider</ion-label>\n                  <ion-label *ngIf="fuseArray.length > 1" color="primary">Fuse/Voltage Slider {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || (attr.ta0newsealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(fuseArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteFuse(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- Fuse: End -->\n\n          <!-- LV Section: Start -->\n          <span *ngIf="showLvExtraFields">\n            <!-- Test Block: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Test Block\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtb"\n                    (click)="addTtb()">\n                    <ion-icon ios="md-add" md="md-add"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ttbArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ttbArray.length <= 1" color="primary">Test Block</ion-label>\n                    <ion-label *ngIf="ttbArray.length > 1" color="primary">Test Block {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ttbArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTtb(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Test Block: End -->\n\n            <!-- CT Chamber: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ctPanelArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ctPanelArray.length <= 1" color="primary">CT Chamber</ion-label>\n                    <ion-label *ngIf="ctPanelArray.length > 1" color="primary">CT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ctPanelArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteCtPanel(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- CT Chamber: End -->\n\n            <!-- Meter Kiosk: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Kiosk\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of meterKioskArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="meterKioskArray.length <= 1" color="primary">Meter Kiosk</ion-label>\n                    <ion-label *ngIf="meterKioskArray.length > 1" color="primary">Meter Kiosk {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="18" placeholder="Please Enter"\n                      clearInput [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMeterKiosk(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Meter Kiosk: End -->\n\n            <!-- Terminal Box: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Terminal Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of terminalCtArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="terminalCtArray.length <= 1" color="primary">Terminal Box</ion-label>\n                    <ion-label *ngIf="terminalCtArray.length > 1" color="primary">Terminal Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" placeholder="Please Enter"\n                      clearInput [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(terminalCtArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTerminalCt(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Terminal Box: End -->\n          </span>\n          <!-- LV Section: End -->\n\n          <!-- MD/Reset Button: Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                MD Button\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of mdButtonArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="mdButtonArray.length <= 1" color="primary">MD/Reset Button</ion-label>\n                  <ion-label *ngIf="mdButtonArray.length > 1" color="primary">MD/Reset Button {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || (attr.ta0newsealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(mdButtonArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <!--<ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px; text-align:right;  padding-top: 20px;padding-right: 10px"-->\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMdButton(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- MD / Reset Button: End -->\n\n          <!-- Battery: Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Battery\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of meterBatteryArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="meterBatteryArray.length <= 1" color="primary">Battery</ion-label>\n                  <ion-label *ngIf="meterBatteryArray.length > 1" color="primary">Battery {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || (attr.ta0newsealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(meterBatteryArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteMeterBattery(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- Battery: End -->\n\n          <!-- Optical Eye Cover: Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Optical Eye Cover\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of opticalEyeArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="opticalEyeArray.length <= 1" color="primary">Optical Eye Cover</ion-label>\n                  <ion-label *ngIf="opticalEyeArray.length > 1" color="primary">Optical Eye Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || (attr.ta0newsealnum == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(opticalEyeArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteOpticalEye(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- Optical Eye Cover: End -->\n        </div>\n\n        <!-- STICKER NO START -->\n        <ion-item-divider color="light" class="pointer" *ngIf="showSticker">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showStickerNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>STICKER NO</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showStickerNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showStickerNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showStickerNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <div *ngIf="showStickerNo && showSticker">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Terminal Cover\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddSterminalCover"\n                  (click)="addSterminalCover()">\n                  <ion-icon ios="md-add" md="md-add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of sterminalCoverArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="sterminalCoverArray.length <= 1" color="primary">Terminal Cover</ion-label>\n                  <ion-label *ngIf="sterminalCoverArray.length > 1" color="primary">Terminal Cover {{ j + 1 }}\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                    [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(sterminalCoverArray,j,2, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteSterminalCover(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Fuse/Voltage Slider\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of sfuseArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="sfuseArray.length <= 1" color="primary">Fuse/Voltage Slider</ion-label>\n                  <ion-label *ngIf="sfuseArray.length > 1" color="primary">Fuse/Voltage Slider {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                    [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(sfuseArray,j,2, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteSfuse(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n        </div>\n      </div>\n\n      <div *ngIf="showMainMeter && !showOpcFields">\n        <ion-item-divider color="light" class="pointer">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showOtherSealNoSection(1)">\n              <ion-icon name="medal"></ion-icon>&nbsp; <strong>OTHERS SEAL</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetOtherSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showOtherSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showOtherSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showOtherSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n        <div *ngIf="showOtherSealNo">\n          <!-- MVHV Section: Start -->\n          <span *ngIf="showMvHvFields">\n            <!-- Test Terminal Block: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Test Block\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtb"\n                    (click)="addTtb()">\n                    <ion-icon ios="md-add" md="md-add"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ttbArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ttbArray.length <= 1" color="primary">Test Block</ion-label>\n                    <ion-label *ngIf="ttbArray.length > 1" color="primary">Test Block {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ttbArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTtb(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Test Terminal Block: End -->\n\n            <!-- PT Chamber: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ptChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ptChamberArray.length <= 1" color="primary">PT Chamber</ion-label>\n                    <ion-label *ngIf="ptChamberArray.length > 1" color="primary">PT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ptChamberArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deletePtChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- PT Chamber: End -->\n\n            <!-- CT Chamber: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ctChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ctChamberArray.length <= 1" color="primary">CT Chamber</ion-label>\n                    <ion-label *ngIf="ctChamberArray.length > 1" color="primary">CT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ctChamberArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteCtChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- CT Chamber: End -->\n\n            <!-- PT Secondaty Fuse: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Secondary Fuse\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ptSecondaryFuseArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ptSecondaryFuseArray.length <= 1" color="primary">PT Secondary Fuse</ion-label>\n                    <ion-label *ngIf="ptSecondaryFuseArray.length > 1" color="primary">PT Secondary Fuse {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ptSecondaryFuseArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deletePtSecondaryFuse(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- PT Secondaty Fuse: End -->\n\n            <!-- Meter Kiosk: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Kiosk\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of meterKioskArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="meterKioskArray.length <= 1" color="primary">Meter Kiosk</ion-label>\n                    <ion-label *ngIf="meterKioskArray.length > 1" color="primary">Meter Kiosk {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMeterKiosk(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Meter Kiosk: End -->\n\n            <!-- Meter Test Box: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Test Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of meterTestBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="meterTestBoxArray.length <= 1" color="primary">Meter Test Box</ion-label>\n                    <ion-label *ngIf="meterTestBoxArray.length > 1" color="primary">Meter Test Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(meterTestBoxArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMeterTestBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Meter Test Box: End -->\n\n            <!-- Termination: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Termination Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of terminalBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="terminalBoxArray.length <= 1" color="primary">Termination Box</ion-label>\n                    <ion-label *ngIf="terminalBoxArray.length > 1" color="primary">Termination Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(terminalBoxArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTerminalBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Termination: End -->\n\n            <!-- Marshalling Box: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Marshalling Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of marshallingBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="marshallingBoxArray.length <= 1" color="primary">Marshalling Box</ion-label>\n                    <ion-label *ngIf="marshallingBoxArray.length > 1" color="primary">Marshalling Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(marshallingBoxArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteMarshallingBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Marshalling Box: End -->\n\n            <!-- Terminal Box: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Terminal Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of terminalCtArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="terminalCtArray.length <= 1" color="primary">Terminal Box</ion-label>\n                    <ion-label *ngIf="terminalCtArray.length > 1" color="primary">Terminal Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" placeholder="Please Enter"\n                      clearInput [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(terminalCtArray,j,1, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteTerminalCt(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- Terminal Box: End -->\n          </span>\n          <!-- MVHV Section: End -->\n\n          <div *ngIf="showLvFields">\n            <!-- CT Panel: Start -->\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Panel\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of ctPanelArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="ctPanelArray.length <= 1" color="primary">CT Panel</ion-label>\n                    <ion-label *ngIf="ctPanelArray.length > 1" color="primary">CT Panel {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30"\n                      (keyup)="userInputLengthNum($event,\'ctPanelArray\', j)" clearInput placeholder="Please Enter"\n                      [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(ctPanelArray,j,1)">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteCtPanel(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n            <!-- CT Panel: End -->\n            <div *ngIf="showLvExtraFields">\n            </div>\n          </div>\n\n          <!-- Modem: Start -->\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Modem\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of modemArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="modemArray.length <= 1" color="primary">Modem</ion-label>\n                  <ion-label *ngIf="modemArray.length > 1" color="primary">Modem {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newsealnum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                    [ngClass]="(attr.ta0newsealnum == \'\' || attr.ta0newsealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(modemArray,j,1, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteModem(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n          <!-- Modem: End -->\n        </div>\n\n        <!-- Start Other Sticker -->\n        <ion-item-divider color="light" class="pointer" *ngIf="showSticker">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showOtherStickerNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>OTHERS STICKER</strong>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;">Reset</button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showOtherStickerNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showOtherStickerNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showOtherStickerNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n        <div *ngIf="showOtherStickerNo && showSticker">\n          <div *ngIf="showMvHvFields">\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Test Block\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sttbArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sttbArray.length <= 1" color="primary">Test Block</ion-label>\n                    <ion-label *ngIf="sttbArray.length > 1" color="primary">Test Block {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'seal\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sttbArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSttb(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sptChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sptChamberArray.length <= 1" color="primary">PT Chamber</ion-label>\n                    <ion-label *ngIf="sptChamberArray.length > 1" color="primary">PT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sptChamberArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSptChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Chamber\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sctChamberArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sctChamberArray.length <= 1" color="primary">CT Chamber</ion-label>\n                    <ion-label *ngIf="sctChamberArray.length > 1" color="primary">CT Chamber {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sctChamberArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSctChamber(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  PT Secondary Fuse\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sptSecondaryFuseArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sptSecondaryFuseArray.length <= 1" color="primary">PT Secondary Fuse</ion-label>\n                    <ion-label *ngIf="sptSecondaryFuseArray.length > 1" color="primary">PT Secondary Fuse {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sptSecondaryFuseArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSptSecondaryFuse(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Kiosk\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of smeterKioskArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="smeterKioskArray.length <= 1" color="primary">Meter Kiosk</ion-label>\n                    <ion-label *ngIf="smeterKioskArray.length > 1" color="primary">Meter Kiosk {{ j + 1 }}</ion-label>\n                  </ion-item>\n\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(smeterKioskArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSmeterKiosk(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Meter Test Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of smeterTestBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="smeterTestBoxArray.length <= 1" color="primary">Meter Test Box</ion-label>\n                    <ion-label *ngIf="smeterTestBoxArray.length > 1" color="primary">Meter Test Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(smeterTestBoxArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSmeterTestBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Termination Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sterminalBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sterminalBoxArray.length <= 1" color="primary">Termination Box</ion-label>\n                    <ion-label *ngIf="sterminalBoxArray.length > 1" color="primary">Termination Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sterminalBoxArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSterminalBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Marshalling Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of smarshallingBoxArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="smarshallingBoxArray.length <= 1" color="primary">Marshalling Box</ion-label>\n                    <ion-label *ngIf="smarshallingBoxArray.length > 1" color="primary">Marshalling Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(smarshallingBoxArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSmarshallingBox(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  Terminal Box\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sterminalCtArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sterminalCtArray.length <= 1" color="primary">Terminal Box</ion-label>\n                    <ion-label *ngIf="sterminalCtArray.length > 1" color="primary">Terminal Box {{ j + 1 }}\n                    </ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="10" placeholder="Please Enter"\n                      clearInput [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sterminalCtArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSterminalCt(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n          </div>\n\n          <div *ngIf="showLvFields">\n            <ion-item-divider color="light">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                  CT Panel\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let attr of sctPanelArray; let j = index">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item no-lines>\n                    <ion-label *ngIf="sctPanelArray.length <= 1" color="primary">CT Panel</ion-label>\n                    <ion-label *ngIf="sctPanelArray.length > 1" color="primary">CT Panel {{ j + 1 }}</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                      placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                      [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                  <button ion-button (click)="barcodeScan(sctPanelArray,j,2, \'after\')">\n                    <ion-icon name="barcode"></ion-icon>\n                  </button>\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                  <button ion-button (click)="deleteSctPanel(j)">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n            </span>\n\n            <div *ngIf="showLvExtraFields">\n              <ion-item-divider color="light">\n                <ion-row align-items-center>\n                  <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                    Panel Meter\n                  </ion-col>\n                </ion-row>\n              </ion-item-divider>\n              <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n                *ngFor="let attr of spanelMeterArray; let j = index">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item no-lines>\n                      <ion-label *ngIf="spanelMeterArray.length <= 1" color="primary">Panel Meter</ion-label>\n                      <ion-label *ngIf="spanelMeterArray.length > 1" color="primary">Panel Meter {{ j + 1 }}\n                      </ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="10"\n                        placeholder="Please Enter" clearInput\n                        [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                        [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                    <button ion-button (click)="barcodeScan(spanelMeterArray,j,2, \'after\')">\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                    <button ion-button (click)="deleteSpanelMeter(j)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </span>\n\n              <ion-item-divider color="light">\n                <ion-row align-items-center>\n                  <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                    Terminal Box\n                  </ion-col>\n                </ion-row>\n              </ion-item-divider>\n              <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n                *ngFor="let attr of sterminalCtArray; let j = index">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item no-lines>\n                      <ion-label *ngIf="sterminalCtArray.length <= 1" color="primary">Terminal Box</ion-label>\n                      <ion-label *ngIf="sterminalCtArray.length > 1" color="primary">Terminal Box {{ j + 1 }}\n                      </ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="10"\n                        placeholder="Please Enter" clearInput\n                        [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                        [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                    <button ion-button (click)="barcodeScan(sterminalCtArray,j,2, \'after\')">\n                      <ion-icon name="barcode"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                    <button ion-button (click)="deleteSterminalCt(j)">\n                      <ion-icon name="trash"></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </span>\n            </div>\n          </div>\n\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n                Modem\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of smodemArray; let j = index">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label *ngIf="smodemArray.length <= 1" color="primary">Modem</ion-label>\n                  <ion-label *ngIf="smodemArray.length > 1" color="primary">Modem {{ j + 1 }}</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input [(ngModel)]="attr.ta0newstickernum" type="text" maxlength="30" clearInput\n                    placeholder="Please Enter" [disabled]="checkingFieldDisabled(attr, \'sticker\') ? true : false"\n                    [ngClass]="(attr.ta0newstickernum == \'\' || attr.ta0newstickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <button ion-button (click)="barcodeScan(smodemArray,j,2, \'after\')">\n                  <ion-icon name="barcode"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n                <button ion-button (click)="deleteSmodem(j)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </span>\n        </div>\n      </div>\n      <!-- Seal & Sticker (LV & MVHV) End -->\n    </span>\n  </span>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button round block mode="md" (click)="saveDeviceDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/devices/sil-sticker-info/sil-sticker-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_10__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_13__providers_data_store_data_store__["a" /* DataStoreProvider */]])
    ], SilStickerInfoPage);
    return SilStickerInfoPage;
}());

//# sourceMappingURL=sil-sticker-info.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilStickerInfoPageModule", function() { return SilStickerInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sil_sticker_info__ = __webpack_require__(1065);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SilStickerInfoPageModule = /** @class */ (function () {
    function SilStickerInfoPageModule() {
    }
    SilStickerInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sil_sticker_info__["a" /* SilStickerInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sil_sticker_info__["a" /* SilStickerInfoPage */]),
            ],
        })
    ], SilStickerInfoPageModule);
    return SilStickerInfoPageModule;
}());

//# sourceMappingURL=sil-sticker-info.module.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealInfo; });
var SealInfo = /** @class */ (function () {
    function SealInfo() {
        this.ta0removeind = false;
        this.ta0existingseal = false;
        this.ta0installind = false;
        this.devicelocind = false;
    }
    return SealInfo;
}());

//# sourceMappingURL=SealInfo.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickerInfo; });
var StickerInfo = /** @class */ (function () {
    function StickerInfo() {
        this.ta0removeind = false;
        this.loc_ta0removeind = false;
    }
    return StickerInfo;
}());

//# sourceMappingURL=StickerInfo.js.map

/***/ })

});
//# sourceMappingURL=12.js.map