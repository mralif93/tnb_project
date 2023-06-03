webpackJsonp([49],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealLvInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_signaturepad_signature_pad__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_signaturepad_signature_pad__);
/*
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2020-09-23   001         Andy Chang    outputAplhaNumeric  include / in regular expression
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SealLvInspectPage = /** @class */ (function () {
    function SealLvInspectPage(navCtrl, navParams, jsonStore, appCtrl, gf, gv, dataService, barcodeScanner, toast, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jsonStore = jsonStore;
        this.appCtrl = appCtrl;
        this.gf = gf;
        this.gv = gv;
        this.dataService = dataService;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.soTypes = __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.currentDiff = [];
        this.serial_Number = [];
        this.meterRegisterAfter = [];
        this.meterRegisterBefore = [];
        /*
        Add Remarks for Inspection - Ameer (11/4/2019)
        */
        this.anamolyMainCheck = true;
        this.customerDetails = [];
        this.alnAnomalyCategory = [];
        this.alnAnomalyMain = [];
        this.anamolyMains = [];
        this.anamolyCategorys = [];
        this.resultAnamolyMain = [];
        this.resultAnamolyCategory = [];
        this.alnAnomalyType = [];
        this.anamolyTypes = [];
        this.resultAnamolyTypes = [];
        this.alncorrectivecode = [];
        this.sourceCodes = [];
        this.initPrevs = [];
        this.anamolyTypeCheck = true;
        this.anamolyCategoryCheck = true;
        this.dCons = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        this.deviceVoltage = '01';
        this.valueChangeAccuracy = 'before';
        this.allowSave = true;
        // Before/After for Meter Register Test
        this.valueChangeRegisterTest = 'before';
        this.showTestList = true;
        this.fuseIndicator = false;
        this.neonIndicator = false;
        this.customerSignature = "Yes";
        this.magnetMeter = false;
        this.magnetFuseCarrier = false;
        this.magnetFuseCartridge = false;
        // Test List View Indicator
        this.viewPhysicalTest = false;
        this.viewCtRatioCurrentTest = false;
        this.viewPolarityTest = false;
        this.viewFuseTest = false;
        this.viewMagnetTest = false;
        this.viewAccuracyTest = false;
        this.viewWitnessExaminerTest = false;
        this.viewDialTest = false;
        // Test List Input Indicator
        this.validatePhysicalTest = false;
        this.validateCtRatioCurrentTest = false;
        this.validatePolarityTest = false;
        this.validateFuseTest = false;
        this.validateMagnetTest = false;
        this.validateAccuracyTest = false;
        this.validateWitnessExaminerTest = false;
        this.validateDialTest = false;
        this.meterCategoryOptions = "M";
        // Lookup Data
        this.loadlookup();
        this.neutral = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.tampering = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.customerType = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.corrective = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.witness = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.currentCompare = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.polarity = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.magnet = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy3P = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy3P_N = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.physical = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.remarksFeeder = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.currentoverall = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.meterRegister = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.meterRegisterAf = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.meterRegisterBf = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        // Lv Inspection
        this.transformaterRatio = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.fuse = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
        // Default for accuracy type
        this.accuracy3P.ta0testind = "M";
        this.itemOri = this.navParams.get("paramObj");
        this.fIndex = this.navParams.get("fIndex");
        this.maIndex = this.navParams.get("maIndex");
        this.deviceVoltage = this.navParams.get("deviceVoltage");
        // Reset 
        this.meterRegisterAf = {};
        this.meterRegisterBf = {};
        // Meter Register After
        for (var i = 0; i < 3; i++) {
            var register = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
            register.ta4ma_reg_start = "";
            register.ta4ma_reg_stop = "";
            register.ta4ma_reg_usage = "";
            register.ta4ma_reg_error = "";
            register.type = i + 1;
            this.meterRegisterAfter.push(register);
        }
        // Meter Register Before
        for (var i = 0; i < 3; i++) {
            var register = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
            register.ta4ma_reg_start = "";
            register.ta4ma_reg_stop = "";
            register.ta4ma_reg_usage = "";
            register.ta4ma_reg_error = "";
            register.type = i + 1;
            this.meterRegisterBefore.push(register);
        }
        // Signature Settings
        this.signaturePadOptions = {
            minWidth: 2,
            canvasWidth: 380,
            canvasHeight: 200,
            backgroundColor: '#f6fbff',
            penColor: '#666a73'
        };
        /** Copy Clone into Original */
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        debugger;
        var meterDailTest = this.item.json.ta0feeder.filter(function (item) {
            if ((item.eFeederMainDeviceAllocationType === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER || item.nFeederMainDeviceAllocationType === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER) && _this.hideDailTest !== true) {
                // this.hideDailTest = true;
                return item;
            }
        });
        if (meterDailTest[0].description === this.item.json.ta0feeder[this.fIndex].description) {
            this.hideDailTest = true;
        }
        else {
            this.hideDailTest = false;
        }
        var multiassestLocciCurrent = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
        if (this.maIndex != undefined) {
            // Read ta0detail if exist
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta4testdata') &&
                typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined" &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
                console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
                // Convert String to JSON Array
                var ta4testdata_temp;
                // Checking whether is string or array
                if (Array.isArray((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata))) {
                    ta4testdata_temp = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata;
                }
                else {
                    ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata);
                }
                // Checking whether is string or array in second layer
                while (!Array.isArray(ta4testdata_temp)) {
                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                }
                // identify ta4testdata
                if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                    var testLength = Number(ta4testdata_temp.length);
                    for (var i = 0; i < testLength; i++) {
                        var ta4testdata = ta4testdata_temp[i];
                        var type = ta4testdata.ta0testtype;
                        var applicable = ta4testdata.ta0na;
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET: {
                                this.physical = ta4testdata;
                                if (applicable == true) {
                                    this.physical.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.physical.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CTFC: {
                                this.transformaterRatio = ta4testdata;
                                if (applicable === true) {
                                    this.transformaterRatio.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.transformaterRatio.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_POLT: {
                                this.polarity = ta4testdata;
                                if (applicable == true) {
                                    this.polarity.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.polarity.loc_test_ta0na = "N";
                                    this.meterCategoryOptions = this.polarity.meterCategoryOptions;
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_FUSE: {
                                this.fuse = ta4testdata;
                                if (applicable === true) {
                                    this.fuse.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.fuse.loc_test_ta0na = "N";
                                    // Checking value local fuse contact
                                    if (this.fuse.loc_ta0ft_fuse_contact === "Tidak") {
                                        this.fuseIndicator = true;
                                    }
                                    else {
                                        this.fuseIndicator = false;
                                    }
                                    // Checking value local fuse neon glow
                                    if (this.fuse.loc_ta0ft_neon_glow === "Ya") {
                                        this.neonIndicator = true;
                                    }
                                    else {
                                        this.neonIndicator = false;
                                    }
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT: {
                                this.magnet = ta4testdata;
                                if (applicable == true) {
                                    this.magnet.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.magnet.loc_test_ta0na = "N";
                                    // Checking value local magnet meter
                                    if (this.magnet.loc_ta0mt_meter === "Lain2") {
                                        this.magnetMeter = true;
                                    }
                                    else {
                                        this.magnetMeter = false;
                                    }
                                    // Checking value local magnet fuse carrier
                                    if (this.magnet.loc_ta0mt_fuse_carrier === "Lain2") {
                                        this.magnetFuseCarrier = true;
                                    }
                                    else {
                                        this.magnetFuseCarrier = false;
                                    }
                                    // Checking value local magnet fuse cartridge
                                    if (this.magnet.loc_ta0mt_fuse_cartridge === "Lain2") {
                                        this.magnetFuseCartridge = true;
                                    }
                                    else {
                                        this.magnetFuseCartridge = false;
                                    }
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P: {
                                this.accuracy3P = ta4testdata;
                                if (applicable == true) {
                                    this.accuracy3P.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.accuracy3P.loc_test_ta0na = "N";
                                    if (this.accuracy3P.ta0testind === 'P') {
                                        this.portable = true;
                                    }
                                    else {
                                        this.portable = false;
                                    }
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P_N: {
                                this.accuracy3P_N = ta4testdata;
                                if (applicable == true) {
                                    this.accuracy3P_N.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.accuracy3P_N.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP: {
                                this.tampering = ta4testdata;
                                if (applicable == true) {
                                    this.tampering.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.tampering.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATCA: {
                                this.corrective = ta4testdata;
                                if (applicable == true) {
                                    this.corrective.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.corrective.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS: {
                                this.witness = ta4testdata;
                                if (applicable == true) {
                                    this.witness.loc_test_ta0na = "Y";
                                    this.customerSignature = this.witness.customerSignature;
                                }
                                else {
                                    this.witness.loc_test_ta0na = "N";
                                }
                                // Checking Witness Section
                                if (typeof (this.witness.ta0signaturecustomer) !== "undefined") {
                                    this.customerSignature = this.witness.ta0signaturecustomer;
                                }
                                break;
                            }
                            case "REMARK": {
                                this.remarksFeeder = ta4testdata;
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_DAILTEST: {
                                this.currentoverall = ta4testdata;
                                if (ta4testdata.hasOwnProperty("dailtest")) {
                                    for (var a = 0; a < ta4testdata.dailtest.length; a++) {
                                        this.currentDiff[a] = ta4testdata.dailtest[a];
                                    }
                                }
                                // Check for data Meter Register is available or not
                                if (ta4testdata.hasOwnProperty("ta4meterregister")) {
                                    for (var m = 0; m < ta4testdata.ta4meterregister.length; m++) {
                                        // Before
                                        if (ta4testdata.ta4meterregister[m].type === "before") {
                                            this.meterRegisterBf = ta4testdata.ta4meterregister[m];
                                        }
                                        // After
                                        if (ta4testdata.ta4meterregister[m].type === "after") {
                                            this.meterRegisterAf = ta4testdata.ta4meterregister[m];
                                        }
                                    }
                                }
                                // Check Data Meter Register for 3 Test is available or not
                                if (ta4testdata.hasOwnProperty("ta4meterregisterbefore")) {
                                    for (var k = 0; k < ta4testdata.ta4meterregisterbefore.length; k++) {
                                        this.meterRegisterBefore[k] = ta4testdata.ta4meterregisterbefore[k];
                                    }
                                }
                                if (ta4testdata.hasOwnProperty("ta4meterregisterafter")) {
                                    for (var k = 0; k < ta4testdata.ta4meterregisterafter.length; k++) {
                                        this.meterRegisterAfter[k] = ta4testdata.ta4meterregisterafter[k];
                                    }
                                }
                                // Check for data available for after
                                // if (ta4testdata.hasOwnProperty("ta4meterRegisterAfter")) {
                                //   this.meterRegisterAf = ta4testdata.ta4meterRegisterAfter;
                                // }
                                // Check for data available for before
                                // if (ta4testdata.hasOwnProperty("ta4meterRegisterBefore")) {
                                //   this.meterRegisterBf = ta4testdata.ta4meterRegisterBefore;
                                // }
                                if (ta4testdata.hasOwnProperty("portableTestSet")) {
                                    this.meterRegister = ta4testdata.portableTestSet;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            else {
                console.log("Data Test not exists!");
            }
        }
        /**
         * Create by Ameer (12/11/2018)
         * Hide and show for button
         */
        /* if (this.item.json.worktype == SoTypes.ZINR ||
            this.item.json.worktype == SoTypes.ZISR ||
            this.item.json.worktype == SoTypes.ZINL) {
            this.hideButton = true;
        } else {
            this.hideButton = false;
        } */
        if (typeof (this.itemOri.json.assignment) !== "undefined") {
            this.lead = this.itemOri.json.assignment[0].laborcode;
        }
        debugger;
        if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
            if (this.currentDiff.length <= 0) {
                // this.currentDiff = [];
                for (var i = 0; i < meterDailTest.length; i++) {
                    var currentDiff = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                    if (multiassestLocciCurrent.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN && multiassestLocciCurrent.ta0allocationtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER) {
                        var serialNo_main = meterDailTest[i].multiassetlocci.filter((function (item) {
                            if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                                // this.serial_Number.push({ serial: item.ta0serialnum });
                                _this.serial_Number = item.ta0serialnum;
                                currentDiff.ta4serialNum = _this.serial_Number;
                                currentDiff.ta4cur_R_pil = null;
                                currentDiff.ta4cur_Y_pil = null;
                                currentDiff.ta4cur_Y_pil = null;
                                currentDiff.ta4cur_B_pil = null;
                                currentDiff.ta4cur_R_busbar = null;
                                currentDiff.ta4cur_Y_busbar = null;
                                currentDiff.ta4cur_B_busbar = null;
                                currentDiff.ta4cur_total_pill = null;
                                currentDiff.ta4cur_total_bus = null;
                                _this.currentDiff.push(currentDiff);
                                return item.ta0serialnum;
                            }
                        }));
                    }
                    else if (multiassestLocciCurrent.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && multiassestLocciCurrent.ta0allocationtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER) {
                        var serialNo_check = meterDailTest[i].multiassetlocci.filter((function (item) {
                            if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                                // this.serial_Number.push({ serial: item.ta0serialnum });
                                _this.serial_Number = item.ta0serialnum;
                                currentDiff.ta4serialNum = _this.serial_Number;
                                currentDiff.ta4cur_R_pil = null;
                                currentDiff.ta4cur_Y_pil = null;
                                currentDiff.ta4cur_Y_pil = null;
                                currentDiff.ta4cur_B_pil = null;
                                currentDiff.ta4cur_R_busbar = null;
                                currentDiff.ta4cur_Y_busbar = null;
                                currentDiff.ta4cur_B_busbar = null;
                                currentDiff.ta4cur_total_pill = null;
                                currentDiff.ta4cur_total_bus = null;
                                _this.currentDiff.push(currentDiff);
                                return item.ta0serialnum;
                            }
                        }));
                    }
                }
            }
        }
        console.log('array', this.currentDiff);
        // Checking test already done and change the color test button to green when completed.
        this.checkTestTypeField();
    }
    /**
     * Reason   : Method to attach existing signature
     * Created  : Alif (13-03-2019)
     */
    SealLvInspectPage.prototype.ngAfterViewInit = function () {
        debugger;
        console.log("Sign 1 : " + this.signaturePad1);
        console.log("Sign 2 : " + this.signaturePad2);
        if ((typeof (this.witness) !== "undefined" && this.witness !== null && this.witness !== "")) {
            if (typeof (this.witness.ta0witness_sign) !== 'undefined' && this.witness.ta0witness_sign !== null && this.witness.ta0witness_sign !== "") {
                // Checking if singature exist or not
                if (typeof (this.signaturePad1) !== "undefined") {
                    this.signaturePad1.fromDataURL(this.witness.ta0witness_sign, { ratio: 1 });
                }
            }
            if (typeof (this.witness.ta0officer_sign) !== 'undefined' && this.witness.ta0officer_sign !== null && this.witness.ta0officer_sign !== "") {
                if (typeof (this.signaturePad2) !== "undefined") {
                    this.signaturePad2.fromDataURL(this.witness.ta0officer_sign, { ratio: 1 });
                }
            }
        }
        var ta4testdata_temp;
        // Checking and collect signature from other feeder..
        if (typeof (this.item.json.ta0feeder) !== "undefined") {
            // Checking type of meter (main / check)
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== "undefined") {
                // Collect multiassetlocci
                var multiassetlocci = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci));
                // Collect indicator
                var ta0bcrmuploadindicator = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator;
                // Existing Check Meter
                if (ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
                    var device = multiassetlocci.filter(function (item) {
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
                    });
                    if (device.length > 0) {
                        // Checking ta4testdata is available or not
                        for (var i = 0; i < device.length; i++) {
                            if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                                // Convert ta4testdata into an array
                                if (Array.isArray((device[i].ta4testdata))) {
                                    ta4testdata_temp = device[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                                }
                                while (!Array.isArray(ta4testdata_temp)) {
                                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                }
                                // Checking signature is available or not (testype = WTNS)
                                var wtns = ta4testdata_temp.filter(function (item) {
                                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                                });
                                if (wtns.length > 0) {
                                    for (var k = 0; k < wtns.length; k++) {
                                        // Checking witness signature & details is available or not
                                        if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                                            (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                                            (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {
                                            // SignaturePad1 = Witness Section
                                            if (typeof (this.signaturePad1) !== "undefined") {
                                                this.clearSign('witness');
                                                this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                                                this.witness.ta0witnessname = wtns[k].ta0witnessname;
                                                this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                                                this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                                            }
                                        }
                                        // Checking examiner signature & details is available or not
                                        if (typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") {
                                            // SignaturePad2 = Examiner Section
                                            if (typeof (this.signaturePad2) !== "undefined") {
                                                this.clearSign('officer');
                                                this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                                                this.witness.ta0officer_station = wtns[k].ta0officer_station;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // New Check Meter
                if (ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) {
                    var device = multiassetlocci.filter(function (item) {
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                    });
                    if (device.length > 0) {
                        // Checking ta4testdata is available or not
                        for (var i = 0; i < device.length; i++) {
                            if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                                // Convert ta4testdata into an array
                                if (Array.isArray((device[i].ta4testdata))) {
                                    ta4testdata_temp = device[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                                }
                                while (!Array.isArray(ta4testdata_temp)) {
                                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                }
                                // Checking signature is available or not (testype = WTNS)
                                var wtns = ta4testdata_temp.filter(function (item) {
                                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                                });
                                if (wtns.length > 0) {
                                    for (var k = 0; k < wtns.length; k++) {
                                        // Checking witness signature & details is available or not
                                        if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                                            (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                                            (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {
                                            // SignaturePad1 = Witness Section
                                            if (typeof (this.signaturePad1) !== "undefined") {
                                                this.clearSign('witness');
                                                this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                                                this.witness.ta0witnessname = wtns[k].ta0witnessname;
                                                this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                                                this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                                            }
                                        }
                                        // Checking examiner signature & details is available or not
                                        if (typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") {
                                            // SignaturePad2 = Examiner Section
                                            if (typeof (this.signaturePad2) !== "undefined") {
                                                this.clearSign('officer');
                                                this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                                                this.witness.ta0officer_station = wtns[k].ta0officer_station;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Existing Check Commodule
                if (ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_COMM) {
                    var device = multiassetlocci.filter(function (item) {
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_COMM;
                    });
                    if (device.length > 0) {
                        // Checking ta4testdata is available or not
                        for (var i = 0; i < device.length; i++) {
                            if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                                // Convert ta4testdata into an array
                                if (Array.isArray((device[i].ta4testdata))) {
                                    ta4testdata_temp = device[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                                }
                                while (!Array.isArray(ta4testdata_temp)) {
                                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                }
                                // Checking signature is available or not (testype = WTNS)
                                var wtns = ta4testdata_temp.filter(function (item) {
                                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                                });
                                if (wtns.length > 0) {
                                    for (var k = 0; k < wtns.length; k++) {
                                        // Checking witness signature & details is available or not
                                        if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                                            (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                                            (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {
                                            // SignaturePad1 = Witness Section
                                            if (typeof (this.signaturePad1) !== "undefined") {
                                                this.clearSign('witness');
                                                this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                                                this.witness.ta0witnessname = wtns[k].ta0witnessname;
                                                this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                                                this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                                            }
                                        }
                                        // Checking examiner signature & details is available or not
                                        if (typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") {
                                            // SignaturePad2 = Examiner Section
                                            if (typeof (this.signaturePad2) !== "undefined") {
                                                this.clearSign('officer');
                                                this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                                                this.witness.ta0officer_station = wtns[k].ta0officer_station;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // New Check Commodule
                if (ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_COMM) {
                    var device = multiassetlocci.filter(function (item) {
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_COMM;
                    });
                    if (device.length > 0) {
                        // Checking ta4testdata is available or not
                        for (var i = 0; i < device.length; i++) {
                            if (typeof (device[i].ta4testdata) !== "undefined" && device[i].ta4testdata !== "" && device[i].ta4testdata !== null) {
                                // Convert ta4testdata into an array
                                if (Array.isArray((device[i].ta4testdata))) {
                                    ta4testdata_temp = device[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(device[i].ta4testdata);
                                }
                                while (!Array.isArray(ta4testdata_temp)) {
                                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                }
                                // Checking signature is available or not (testype = WTNS)
                                var wtns = ta4testdata_temp.filter(function (item) {
                                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                                });
                                if (wtns.length > 0) {
                                    for (var k = 0; k < wtns.length; k++) {
                                        // Checking witness signature & details is available or not
                                        if ((typeof (wtns[k].ta0witness_sign) !== 'undefined' && wtns[k].ta0witness_sign !== null && wtns[k].ta0witness_sign !== "") ||
                                            (typeof (wtns[k].ta0witnessname) !== "undefined" && wtns[k].ta0witnessname !== null && wtns[k].ta0witnessname !== "") ||
                                            (typeof (wtns[k].ta0witnessicpassport) !== "undefined" && wtns[k].ta0witnessicpassport !== null && wtns[k].ta0witnessicpassport !== "") ||
                                            (typeof (wtns[k].ta0witnessphone) !== "undefined" && wtns[k].ta0witnessphone !== null && wtns[k].ta0witnessphone !== "")) {
                                            // SignaturePad1 = Witness Section
                                            if (typeof (this.signaturePad1) !== "undefined") {
                                                this.clearSign('witness');
                                                this.signaturePad1.fromDataURL(wtns[k].ta0witness_sign, { ratio: 1 });
                                                this.witness.ta0witnessname = wtns[k].ta0witnessname;
                                                this.witness.ta0witnessicpassport = wtns[k].ta0witnessicpassport;
                                                this.witness.ta0witnessphone = wtns[k].ta0witnessphone;
                                            }
                                        }
                                        // Checking examiner signature & details is available or not
                                        if ((typeof (wtns[k].ta0officer_sign) !== 'undefined' && wtns[k].ta0officer_sign !== null && wtns[k].ta0officer_sign !== "") ||
                                            (typeof (wtns[k].ta0officer_station) !== "undefined" && wtns[k].ta0officer_station !== null && wtns[k].ta0officer_station !== "")) {
                                            // SignaturePad2 = Examiner Section
                                            if (typeof (this.signaturePad2) !== "undefined") {
                                                this.clearSign('officer');
                                                this.signaturePad2.fromDataURL(wtns[k].ta0officer_sign, { ratio: 1 });
                                                this.witness.ta0officer_station = wtns[k].ta0officer_station;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    SealLvInspectPage.prototype.ionViewDidLoad = function () {
        this.calculateFeeder();
        console.log('ionViewDidLoad SealOpcInspectPage');
    };
    /**
     * Reason   : Method 'loadlookup' field condition.
     * Created  : 19-03-2019
     */
    SealLvInspectPage.prototype.loadlookup = function () {
        var _this = this;
        this.getAlnDomainData("meter").then(function (success) {
            _this.getAlnDomainData("fuse").then(function (success) {
                _this.getAlnDomainData("ttb").then(function (success) {
                    _this.getAlnDomainData("currentRatio").then(function (success) {
                        _this.getAlnDomainData("wiring").then(function (success) {
                            _this.getAlnDomainData("zone").then(function (success) {
                                _this.getZoneData().then(function (success) {
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    /**
     * Reason   : Method to calculate Accuract Test After
     * Created  : Alif (11/04/2019)
     * Edit By  : Ameer (11/6/2019) - calculation based on user input only
     * Edit By  : Alif (03/07/2019) - correction on calculation total average.
     */
    SealLvInspectPage.prototype.calculateAfterAccuracyTest = function () {
        debugger;
        var total_amount = 0;
        var total_avg = 0;
        var total = 0;
        if ((typeof (this.accuracy3P_N.ta4ma_test1) !== "undefined") && this.accuracy3P_N.ta4ma_test1 !== "") {
            total_amount++;
            total = total + (Number(this.accuracy3P_N.ta4ma_test1));
            total_avg = (total / total_amount);
        }
        if ((typeof (this.accuracy3P_N.ta4ma_test2) !== "undefined") && this.accuracy3P_N.ta4ma_test2 !== "") {
            total_amount++;
            total = total + (Number(this.accuracy3P_N.ta4ma_test2));
            total_avg = (total / total_amount);
        }
        if ((typeof (this.accuracy3P_N.ta4ma_test3) !== "undefined") && this.accuracy3P_N.ta4ma_test3 !== "") {
            total_amount++;
            total = total + (Number(this.accuracy3P_N.ta4ma_test3));
            total_avg = (total / total_amount);
        }
        if (total_amount === 0) {
            this.accuracy3P_N.ta4ma_avg = "";
        }
        else {
            if (!isNaN(total_avg)) {
                this.accuracy3P_N.ta4ma_avg = total_avg.toFixed(2);
            }
            else {
                this.accuracy3P_N.ta4ma_avg = "";
            }
        }
    };
    /**
     * Created: Ameer (25/9/2019)
     * Description: Promise data for Zone and filter the Data
     */
    SealLvInspectPage.prototype.getZoneData = function () {
        var _this = this;
        var queryPart = null;
        debugger;
        queryPart = WL.JSONStore.QueryPart().equal("siteid", this.item.json.siteid);
        return new Promise(function (resolve, reject) {
            _this.jsonStore
                .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].Zone, queryPart)
                .then(function (result) {
                var zoneName;
                zoneName = result[0].json.ta0zone;
                if (zoneName !== null || typeof (zoneName) !== 'undefined') {
                    if (zoneName === 'SLG') {
                        _this.witness.ta0officer_station = "SELANGOR";
                    }
                    else if (zoneName === 'UTR') {
                        _this.witness.ta0officer_station = "UTARA";
                    }
                    else if (zoneName === 'SLT') {
                        _this.witness.ta0officer_station = "SELATAN";
                    }
                    else if (zoneName === 'TMR') {
                        _this.witness.ta0officer_station = "TIMUR";
                    }
                    else if (zoneName === 'KUL') {
                        _this.witness.ta0officer_station = "KUALA LUMPUR";
                    }
                }
                resolve();
            }).catch(function (error) {
                console.log('service failure : ' + error);
                reject();
            });
        });
    };
    /**
     * Reason   : Method to call promise to get data.
     * Created  : 19-03-2019
     */
    SealLvInspectPage.prototype.getAlnDomainData = function (inputType) {
        var _this = this;
        console.log("filtering tampering suspect & zone condition..");
        var queryPart;
        if (typeof (inputType) !== "undefined") {
            if (inputType === "meter") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4TSMETER);
            }
            else if (inputType === "fuse") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4TSFUSE);
            }
            else if (inputType === "ttb") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4TSTTB);
            }
            else if (inputType === "currentRatio") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4TSCURRENTRATIO);
            }
            else if (inputType === "wiring") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4TSWIRING);
            }
            else if (inputType === "zone") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4ZONE);
            }
            return new Promise(function (resolve, reject) {
                _this.jsonStore
                    .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart)
                    .then(function (result) {
                    if (inputType === "meter") {
                        _this.meterConditions = result;
                    }
                    else if (inputType === "fuse") {
                        _this.fuseConditions = result;
                    }
                    else if (inputType === "ttb") {
                        _this.ttbConditions = result;
                    }
                    else if (inputType === "currentRatio") {
                        _this.currentRatioConditions = result;
                    }
                    else if (inputType === "wiring") {
                        _this.wiringConditions = result;
                    }
                    else if (inputType === "zone") {
                        _this.stations = result;
                    }
                    resolve();
                }).catch(function (error) {
                    console.log('service failure : ' + error);
                    reject();
                });
            });
        }
    };
    //created by Ameer (19/10/2018)
    SealLvInspectPage.prototype.hideShowPhysical = function () {
        debugger;
        if (this.physical.loc_test_ta0na === 'Y') {
            this.physical = {};
            this.physicalExam = true;
            this.physical.loc_test_ta0na = 'Y';
            this.physical.ta0na = true;
        }
        else {
            this.physicalExam = false;
            this.physical = {};
            this.physical.loc_test_ta0na = 'N';
            this.physical.ta0na = false;
        }
    };
    //created by Ameer (15/10/2018)
    SealLvInspectPage.prototype.hideShowMeter = function () {
        debugger;
        if (this.accuracy.loc_test_ta0na === 'Y') {
            this.showMeter = true;
            this.accuracy = {};
            this.accuracy.loc_test_ta0na = 'Y';
            this.accuracy.ta0na = true;
        }
        else {
            this.showMeter = false;
            this.accuracy = {};
            this.accuracy.loc_test_ta0na = 'N';
            this.accuracy.ta0na = false;
        }
        if (this.accuracy3P.loc_test_ta0na === 'Y') {
            this.showMeter = true;
            this.accuracy3P = {};
            this.accuracy3P.loc_test_ta0na = 'Y';
            this.accuracy3P.ta0na = true;
        }
        else {
            this.showMeter = false;
            this.accuracy3P = {};
            this.accuracy3P.loc_test_ta0na = 'N';
            this.accuracy3P.ta0na = false;
        }
    };
    //Created by Ameer (18/10/2018)
    SealLvInspectPage.prototype.hideAccuracy3Phase = function () {
        debugger;
        if (this.accuracy3P.ta0testind === 'P') {
            this.portable = true;
            // Reset Portable Fields
            this.accuracy3P.ta0at_pteserialnum = "";
            this.accuracy3P.ta0at_voltage_r = "";
            this.accuracy3P.ta0at_voltage_y = "";
            this.accuracy3P.ta0at_voltage_b = "";
            this.accuracy3P.ta0at_current_r = "";
            this.accuracy3P.ta0at_current_y = "";
            this.accuracy3P.ta0at_current_b = "";
            this.accuracy3P.ta0at_power_r = "";
            this.accuracy3P.ta0at_power_y = "";
            this.accuracy3P.ta0at_power_b = "";
            this.accuracy3P.ta0at_powerfactor_r = "";
            this.accuracy3P.ta0at_powerfactor_y = "";
            this.accuracy3P.ta0at_powerfactor_b = "";
            this.accuracy3P.ta0at_constant_1 = "";
            this.accuracy3P.ta0at_constant_2 = "";
            this.accuracy3P.ta0at_constant_3 = "";
            this.accuracy3P.ta0at_test1 = "";
            this.accuracy3P.ta0at_test2 = "";
            this.accuracy3P.ta0at_test3 = "";
            this.accuracy3P.ta0at_avg = "";
        }
        else {
            this.portable = false;
            // Reset Manual Fields
            this.accuracy3P.ta0at_timecalc_1 = "";
            this.accuracy3P.ta0at_timecalc_2 = "";
            this.accuracy3P.ta0at_timecalc_3 = "";
            this.accuracy3P.ta0at_timemeas_1 = "";
            this.accuracy3P.ta0at_timemeas_2 = "";
            this.accuracy3P.ta0at_timemeas_3 = "";
            this.accuracy3P.ta0at_test1 = "";
            this.accuracy3P.ta0at_test2 = "";
            this.accuracy3P.ta0at_test3 = "";
            this.accuracy3P.ta0at_avg = "";
        }
    };
    //created by Ameer (15/10/2018)
    SealLvInspectPage.prototype.hideShowTypeAccuracy = function () {
        debugger;
        if (this.accuracy.ta0testind === 'P') {
            this.portable = true;
            this.accuracy.ta0at_test1 = null;
            this.accuracy.ta0at_test2 = null;
            this.accuracy.ta0at_test3 = null;
            this.accuracy.ta0at_avg = null;
        }
        else {
            this.portable = false;
            this.accuracy.ta0at_timecalc_1 = null;
            this.accuracy.ta0at_timecalc_2 = null;
            this.accuracy.ta0at_timecalc_3 = null;
            this.accuracy.ta0at_timemeas_1 = null;
            this.accuracy.ta0at_timemeas_2 = null;
            this.accuracy.ta0at_timemeas_3 = null;
            this.accuracy.ta0at_test1 = null;
            this.accuracy.ta0at_test2 = null;
            this.accuracy.ta0at_test3 = null;
            this.accuracy.ta0at_avg = null;
        }
    };
    //created by Ameer (15/10/2018)
    SealLvInspectPage.prototype.hideShowNeutral = function () {
        debugger;
        if (this.neutral.loc_test_ta0na === 'Y') {
            this.neutral = {};
            this.neutralShows = true;
            this.neutral.loc_test_ta0na = 'Y';
            this.neutral.ta0na = true;
        }
        else {
            this.neutral = {};
            this.neutralShows = false;
            this.neutral.loc_test_ta0na = 'N';
            this.neutral.ta0na = false;
        }
    };
    //created by Ameer (15/10/2018)
    SealLvInspectPage.prototype.hideShowCorrective = function () {
        if (this.corrective.loc_test_ta0na === 'Y') {
            this.correctiveShow = true;
            this.corrective = {};
            this.witness = {};
            this.corrective.loc_test_ta0na = 'Y';
            this.corrective.ta0na = true;
        }
        else {
            this.correctiveShow = false;
            this.corrective = {};
            this.witness = {};
            this.corrective.loc_test_ta0na = 'N';
            this.corrective.ta0na = false;
        }
    };
    //created by Ameer (15/10/2018)
    //edited on (20/10/2018)
    SealLvInspectPage.prototype.hideShowTampering = function () {
        if (this.tampering.loc_test_ta0na === 'Y') {
            this.tamperingShows = true;
            this.tampering = {};
            this.tampering.loc_test_ta0na = 'Y';
            this.tampering.ta0na = true;
        }
        else {
            this.tamperingShows = false;
            this.tampering = {};
            this.tampering.loc_test_ta0na = 'N';
            this.tampering.ta0na = false;
        }
    };
    /*
    Create : Hide and show section for cutomer type(Ameer)
    Date: 12/4/2010
     */
    SealLvInspectPage.prototype.hideShowCustomerType = function () {
        debugger;
        if (this.customerType.loc_test_ta0na === 'Y') {
            this.customerShows = true;
            this.customerType = {};
            this.customerType.loc_test_ta0na = 'Y';
            this.customerType.ta0na = true;
        }
        else {
            this.customerShows = false;
            this.customerType = {};
            this.customerType.loc_test_ta0na = 'N';
            this.customerType.ta0na = false;
        }
    };
    //Created by Ameer ( 16/10/2018)
    SealLvInspectPage.prototype.hideShowCurrentCompare = function () {
        if (this.currentCompare.loc_test_ta0na === 'Y') {
            this.currentShow = true;
            this.currentCompare = {};
            this.currentCompare.loc_test_ta0na = 'Y';
            this.currentCompare.ta0na = true;
        }
        else {
            this.currentShow = false;
            this.currentCompare = {};
            this.currentCompare.loc_test_ta0na = 'N';
            this.currentCompare.ta0na = false;
        }
    };
    /**
     * Reason   : Method to hide/show view for test/remarks
     * Created  : Alif (27/02/2019)
     */
    SealLvInspectPage.prototype.hideShowTransformerRatioTest = function () {
        console.log('came inside to hideShowTransformerRatioTest ..' + this.transformaterRatio.loc_test_ta0na);
        if (this.transformaterRatio.loc_test_ta0na == 'Y') {
            this.transformaterRatio.ta0na = true;
            this.transformaterRatio.ta0naremarks = null;
        }
        else {
            this.transformaterRatio = {};
            this.transformaterRatio.loc_test_ta0na = 'N';
            this.transformaterRatio.ta0na = false;
        }
    };
    /**
     * Reason   : Method to hide/show view for test/remarks
     * Created  : Alif (27/02/2019)
     */
    SealLvInspectPage.prototype.hideShowFuseTest = function () {
        console.log('came inside to hideShowFuseTest ..' + this.fuse.loc_test_ta0na);
        if (this.fuse.loc_test_ta0na == 'Y') {
            this.fuse = {};
            this.fuse.loc_test_ta0na = 'Y';
            this.fuse.ta0na = true;
        }
        else {
            this.fuse = {};
            this.fuse.loc_test_ta0na = 'N';
            this.fuse.ta0na = false;
        }
    };
    //Created by Ameer (16/10/2018)
    SealLvInspectPage.prototype.hideShowPolarity = function () {
        if (this.polarity.loc_test_ta0na === 'Y') {
            this.polarityShow = true;
            this.polarity = {};
            this.polarity.loc_test_ta0na = 'Y';
            this.polarity.ta0na = true;
        }
        else {
            this.polarityShow = false;
            this.polarity = {};
            this.polarity.loc_test_ta0na = 'N';
            this.polarity.ta0na = false;
        }
    };
    //Created by Ameer (16/10/2018)
    SealLvInspectPage.prototype.hideShowMagnet = function () {
        debugger;
        if (this.magnet.loc_test_ta0na === 'Y') {
            this.magnet = {};
            this.magnet.loc_test_ta0na = 'Y';
            this.magnet.ta0na = true;
        }
        else {
            this.magnet = {};
            this.magnet.loc_test_ta0na = 'N';
            this.magnet.ta0na = false;
        }
    };
    // Created by Ameer (12/4/2019)
    //created by Ameer (16/10/2018)
    //edited by Ameer (24/10/2018)
    SealLvInspectPage.prototype.actualReading = function () {
        debugger;
        if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined') &&
            (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined') &&
            (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined')) {
            var totalA = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
        }
        if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined') &&
            (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined') &&
            (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined')) {
            var totalB = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
        }
        if (isNaN(totalA)) {
            totalA = 0;
        }
        if (isNaN(totalB)) {
            totalB = 0;
        }
        this.currentCompare.ta0cu_actual_total = totalA;
        this.currentCompare.ta0cu_disp_total = totalB;
        var Diff = ((totalB - totalA) / totalA) * 100;
        if (isNaN(Diff)) {
            Diff = 0;
        } /* else if (Math.sign(Diff) === -1) {
            this.gf.warningAlert("Error", "Current difference should not be consist negative", "Dismiss");
        } */
        this.currentCompare.ta0cu_difference = Diff.toFixed(2);
    };
    //created by Ameer (15/10/2018)
    SealLvInspectPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    //created by Ameer (15/10/2018)
    //edited on (22/10/2018)
    SealLvInspectPage.prototype.errorManual = function () {
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var regExp = new RegExp(NUMBER_REGEXP);
        var newValSlice;
        debugger;
        /*   if (parseFloat(this.accuracy3P.ta0at_timemeas_1) > parseFloat(this.accuracy3P.ta0at_timecalc_1)) {
            this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
            this.accuracy3P.ta0at_timemeas_1 = null;
      
          } else if (parseFloat(this.accuracy3P.ta0at_timemeas_2) > parseFloat(this.accuracy3P.ta0at_timecalc_2)) {
            this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
            this.accuracy3P.ta0at_timemeas_2 = null;
      
          } else if (parseFloat(this.accuracy3P.ta0at_timemeas_3) > parseFloat(this.accuracy3P.ta0at_timecalc_3)) {
            this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
            this.accuracy3P.ta0at_timemeas_3 = null
          } else { */
        if ((typeof (this.accuracy3P.ta0at_timecalc_1 !== 'undefined') && this.accuracy3P.ta0at_timecalc_1 !== "" && this.accuracy3P.ta0at_timecalc_1 !== null)
            && (typeof (this.accuracy3P.ta0at_timemeas_1 !== 'undefined') && this.accuracy3P.ta0at_timemeas_1 !== "" && this.accuracy3P.ta0at_timemeas_1 !== null)) {
            var error13P = ((this.accuracy3P.ta0at_timecalc_1 - this.accuracy3P.ta0at_timemeas_1) / this.accuracy3P.ta0at_timemeas_1 * 100);
            this.accuracy3P.ta0at_test1 = error13P.toFixed(2);
            if (isNaN(this.accuracy3P.ta0at_test1)) {
                this.accuracy3P.ta0at_test1 = 0;
            }
        }
        if ((typeof (this.accuracy3P.ta0at_timecalc_2 !== 'undefined') && this.accuracy3P.ta0at_timecalc_2 !== "" && this.accuracy3P.ta0at_timecalc_2 !== null)
            && (typeof (this.accuracy3P.ta0at_timemeas_2 !== 'undefined') && this.accuracy3P.ta0at_timemeas_2 !== "" && this.accuracy3P.ta0at_timemeas_2 !== null)) {
            var error23P = ((this.accuracy3P.ta0at_timecalc_2 - this.accuracy3P.ta0at_timemeas_2) / this.accuracy3P.ta0at_timemeas_2 * 100);
            this.accuracy3P.ta0at_test2 = error23P.toFixed(2);
            if (isNaN(this.accuracy3P.ta0at_test2)) {
                this.accuracy3P.ta0at_test2 = 0;
            }
        }
        if ((typeof (this.accuracy3P.ta0at_timecalc_3 !== 'undefined') && this.accuracy3P.ta0at_timecalc_3 !== "" && this.accuracy3P.ta0at_timecalc_3 !== null)
            && (typeof (this.accuracy3P.ta0at_timemeas_3 !== 'undefined') && this.accuracy3P.ta0at_timemeas_3 !== "" && this.accuracy3P.ta0at_timemeas_3 !== null)) {
            var error33P = ((this.accuracy3P.ta0at_timecalc_3 - this.accuracy3P.ta0at_timemeas_3) / this.accuracy3P.ta0at_timemeas_3 * 100);
            this.accuracy3P.ta0at_test3 = error33P.toFixed(2);
            if (isNaN(this.accuracy3P.ta0at_test3)) {
                this.accuracy3P.ta0at_test3 = 0;
            }
        }
        // }
        if (this.accuracy3P.ta0at_test1 !== "" || this.accuracy3P.ta0at_test2 !== "" || this.accuracy3P.ta0at_test3 !== "") {
            var averageError3P = (Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3;
            this.accuracy3P.ta0at_avg = averageError3P.toFixed(2);
        }
        if (isNaN(this.accuracy3P.ta0at_avg)) {
            this.accuracy3P.ta0at_avg = 0;
        }
    };
    // created by Ameer (16/10/2018)
    SealLvInspectPage.prototype.errorAvg = function () {
        debugger;
        this.accuracy.ta0at_avg = ((Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3).toFixed(2);
        if (isNaN(this.accuracy.ta0at_avg)) {
            this.accuracy.ta0at_avg = 0;
        }
        this.accuracy3P.ta0at_avg = ((Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3).toFixed(2);
        if (isNaN(this.accuracy3P.ta0at_avg)) {
            this.accuracy3P.ta0at_avg = 0;
        }
    };
    //created by Ameer (18/10/2018)
    SealLvInspectPage.prototype.searchLookUp = function (inputType) {
        var _this = this;
        debugger;
        // debugger;
        var queryPart = null;
        if (inputType === "main") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA0ANOMALYMAIN);
        }
        else if (inputType === "category") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA0ANOMALYCATEGORY);
        }
        else if (inputType === "type") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA0ANOMALYTYPE);
        }
        else if (inputType === "corrective") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA0CORRECTIVECODE);
        }
        /*  else {
             queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1");
         } */
        this.jsonStore
            .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart)
            .then(function (result) {
            _this.opcGroupList = result;
        });
        this.assignValue(inputType);
    };
    SealLvInspectPage.prototype.assignValue = function (inputType) {
        var _this = this;
        this.gf.startLoading();
        setTimeout(function () {
            _this.gf.stopLoading();
            debugger;
            if (_this.opcGroupList.length > 0) {
                var optData = [];
                for (var i = 0; i < _this.opcGroupList.length; i++) {
                    optData.push({
                        name: 'options',
                        value: [_this.opcGroupList[i].json.value, _this.opcGroupList[i].json.description],
                        'label': _this.opcGroupList[i].json.value + ' - ' + _this.opcGroupList[i].json.description,
                        type: 'radio'
                    });
                }
                var options = {
                    title: 'Devices',
                    inputs: optData,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function (data) {
                                debugger;
                                if (data !== "undefined") {
                                    switch (inputType) {
                                        case 'main':
                                            _this.tampering.ta0anomalymain = data[0];
                                            break;
                                        case 'category':
                                            _this.tampering.ta0anomalycategory = data[0];
                                            break;
                                        case 'type':
                                            _this.tampering.ta0anomalytype = data[0];
                                            break;
                                        case 'corrective': {
                                            _this.corrective.ta0at_corrective_action = data[0];
                                            _this.corrective.ta0at_corrective_action_desc = data[1];
                                            break;
                                        }
                                    }
                                }
                                else {
                                    _this.gf.warningAlert("Error", "No device is selected.", "Close");
                                }
                            }
                        }
                    ]
                };
                var alert_1 = _this.alertCtrl.create(options);
                alert_1.present();
            }
            else {
                _this.gf.warningAlert("Error", "No List found", "Close");
            }
        }, 1000);
    };
    //Created by Ameer (17/10/2018)
    SealLvInspectPage.prototype.checkIntergerVal = function (event, key) {
        debugger;
        var newValue = event.target.value;
        var regExpVA1 = new RegExp("^[0-9]+$");
        var arrayBeforeDecimal = [];
        var valueBeforeDecimal = '';
        var newValSlice;
        for (var i = 0; i < newValue.length; i++) {
            if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
                arrayBeforeDecimal.push(newValue.charAt(i));
            }
        }
        for (var k = 0; k < arrayBeforeDecimal.length; k++) {
            if (regExpVA1.test(arrayBeforeDecimal[k])) {
                valueBeforeDecimal += arrayBeforeDecimal[k];
            }
            else {
                console.log('invalid char');
            }
        }
        if (valueBeforeDecimal.length > 12) {
            newValSlice = valueBeforeDecimal.substr(0, valueBeforeDecimal.length - 1);
        }
        else {
            newValSlice = valueBeforeDecimal;
        }
        switch (key) {
            case 'cont1':
                this.accuracy3P.ta0at_constant_1 = newValSlice;
                break;
            case 'cont2':
                this.accuracy3P.ta0at_constant_2 = newValSlice;
                break;
            case 'cont3':
                this.accuracy3P.ta0at_constant_3 = newValSlice;
                break;
            case 'cont1single':
                this.accuracy.ta0at_constant_1 = newValSlice;
                break;
            case 'cont2single':
                this.accuracy.ta0at_constant_2 = newValSlice;
                break;
            case 'cont3single':
                this.accuracy.ta0at_constant_3 = newValSlice;
                break;
        }
    };
    //Create by Ameer (18/10/2018) - allow only positive value with length 5 & 3
    SealLvInspectPage.prototype.checkDecimalLength8 = function (eventVal, keyString) {
        debugger;
        // const NUMBER_REGEXP = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z0-9]+$)?$/;
        var NUMBER_REGEXP = /^[-+]|(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var arrayBeforeDecimal = [];
        var arrayAfterDecimal = [];
        var arraySplitBeforeDecimal = [];
        var valueAfterDecimal = '';
        var valueBeforeDecimal = '';
        var cutValueBeforeDecimal = '';
        var cutValueAfterDecimal = '';
        var splitValue;
        var newValSlice;
        var checkFlag = false;
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
            debugger;
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
            }
            else {
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
                    }
                    else {
                        newValSlice = cutValueBeforeDecimal;
                    }
                }
                else if (newValue.length < 5 || newValue.length === 5) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    newValSlice = cutValueBeforeDecimal;
                }
            }
        } // end If condition Check Flag
        switch (keyString) {
            case 'TC1':
                this.accuracy.ta0at_timecalc_1 = newValSlice;
                break;
            case 'TC2':
                this.accuracy.ta0at_timecalc_2 = newValSlice;
                break;
            case 'TC3':
                this.accuracy.ta0at_timecalc_3 = newValSlice;
                break;
            case 'RT1':
                this.accuracy.ta0at_timemeas_1 = newValSlice;
                break;
            case 'RT2':
                this.accuracy.ta0at_timemeas_2 = newValSlice;
                break;
            case 'RT3':
                this.accuracy.ta0at_timemeas_3 = newValSlice;
                break;
            case 'neutral':
                this.neutral.ta0nt_neutral = newValSlice;
                break;
            case 'phase':
                this.neutral.ta0nt_phase = newValSlice;
                break;
            case '3TC1':
                this.accuracy3P.ta0at_timecalc_1 = newValSlice;
                break;
            case '3TC2':
                this.accuracy3P.ta0at_timecalc_2 = newValSlice;
                break;
            case '3TC3':
                this.accuracy3P.ta0at_timecalc_3 = newValSlice;
                break;
            case '3RT1':
                this.accuracy3P.ta0at_timemeas_1 = newValSlice;
                break;
            case '3RT2':
                this.accuracy3P.ta0at_timemeas_2 = newValSlice;
                break;
            case '3RT3':
                this.accuracy3P.ta0at_timemeas_3 = newValSlice;
                break;
            case 'actualR':
                this.currentCompare.ta0cu_actual_r = newValSlice;
                break;
            case 'actualY':
                this.currentCompare.ta0cu_actual_y = newValSlice;
                break;
            case 'actualB':
                this.currentCompare.ta0cu_actual_b = newValSlice;
                break;
            case 'dispR':
                this.currentCompare.ta0cu_disp_r = newValSlice;
                break;
            case 'dispY':
                this.currentCompare.ta0cu_disp_y = newValSlice;
                break;
            case 'dispB':
                this.currentCompare.ta0cu_disp_b = newValSlice;
                break;
            case 'voltageR':
                this.accuracy3P.ta0at_voltage_r = newValSlice;
                break;
            case 'voltageY':
                this.accuracy3P.ta0at_voltage_y = newValSlice;
                break;
            case 'voltageB':
                this.accuracy3P.ta0at_voltage_b = newValSlice;
                break;
            case 'currentR':
                this.accuracy3P.ta0at_current_r = newValSlice;
                break;
            case 'currentY':
                this.accuracy3P.ta0at_current_y = newValSlice;
                break;
            case 'currentB':
                this.accuracy3P.ta0at_current_b = newValSlice;
                break;
            case 'PWR':
                this.accuracy3P.ta0at_power_r = newValSlice;
                break;
            case 'PWY':
                this.accuracy3P.ta0at_power_y = newValSlice;
                break;
            case 'PWB':
                this.accuracy3P.ta0at_power_b = newValSlice;
                break;
            case '1PVoltageR':
                this.accuracy.ta0at_voltage_r = newValSlice;
                break;
            case '1PVoltageY':
                this.accuracy.ta0at_voltage_y = newValSlice;
                break;
            case '1PVoltageB':
                this.accuracy.ta0at_voltage_b = newValSlice;
                break;
            case '1PCurrentR':
                this.accuracy.ta0at_current_r = newValSlice;
                break;
            case '1PCurrentY':
                this.accuracy.ta0at_current_y = newValSlice;
                break;
            case '1PCurrentB':
                this.accuracy.ta0at_current_b = newValSlice;
                break;
            case '1PPWR_R':
                this.accuracy.ta0at_power_r = newValSlice;
                break;
            case '1PPWR_Y':
                this.accuracy.ta0at_power_y = newValSlice;
                break;
            case '1PPWR_B':
                this.accuracy.ta0at_power_b = newValSlice;
                break;
        }
    };
    //Create by Ameer (24/10/2018) - Allow output negative value length is 7,3
    /*  outLengthDiff(event, key) {
         debugger;
         const NUMBER_REGEXP = /^-(\d{0,7}|(\d{0,7}(\.\d{0,3})))?$/;
         let newValue = event.value;
         var newLVal2 = newValue.toString();
         var arrayBeforeDecimal = [];
         var splitDecimalPoint;
         var valueAfterDot = '';
         var valueBeforeDot = "";
         var afterDecimalValueSlice;
         var beforeDecimalValueSlice;
         var checkFlag: boolean = false;
         var newValSlice;
         var arraySplitBeforeDecimal = [];
         var arrayValueAfterDecimal = [];
         let regExp = new RegExp(NUMBER_REGEXP);
         //Check seperate each value input one by one into array
         for (var i = 0; i < newLVal2.length; i++) {
             if (arrayBeforeDecimal.push(newLVal2.charAt(i)) == -1) {
                 arrayBeforeDecimal.push(newLVal2.charAt(i));
             }
         }
    
         if (newLVal2.includes(".")) {
             splitDecimalPoint = newLVal2.split(".");
             for (var a = 1; a < splitDecimalPoint.length; a++) {
                 for (var b = 0; b < splitDecimalPoint[a].length; b++) {
                     arrayValueAfterDecimal.push(splitDecimalPoint[a].charAt(b))
                 }
             }// end for loop for array after decimal value
             if (arrayValueAfterDecimal.length > 3) {
                 for (var c = 0; c < arrayValueAfterDecimal.length; c++) {
                     if (regExp.test(arrayValueAfterDecimal[c])) {
                         valueAfterDot += arrayValueAfterDecimal[c];
                     }
                 }//end Loop for checking value
                 if (valueAfterDot.length > 3) {
                     afterDecimalValueSlice = valueAfterDot.substr(0, valueAfterDot.length - 1);
                 } else {
                     afterDecimalValueSlice = valueAfterDot;
                 }
             }// Checking value after decimal if more than maximum input allow
             else if (arrayValueAfterDecimal.length < 3 || arrayValueAfterDecimal.length == 3) {
                 for (var d = 0; d < arrayValueAfterDecimal.length; d++) {
                     if (regExp.test(arrayValueAfterDecimal[d])) {
                         valueAfterDot += arrayValueAfterDecimal[d];
                         afterDecimalValueSlice = valueAfterDot;
                     }
                 } // end for loop checking each value
    
             }// End checking after decimal is not more than maximmum input allow
    
             for (var j = 0; j < splitDecimalPoint[0].length; j++) {
                 arraySplitBeforeDecimal.push(splitDecimalPoint[0].charAt(j));
             }
             if (arraySplitBeforeDecimal.length > 8) {
                 for (var e = 0; e < arraySplitBeforeDecimal.length; e++) {
                     if (regExp.test(arraySplitBeforeDecimal[e])) {
                         valueBeforeDot += arraySplitBeforeDecimal[e];
                     }
                 }
                 if (valueBeforeDot.length > 8) {
                     valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                     beforeDecimalValueSlice = valueBeforeDot;
                     newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                 } else {
                     beforeDecimalValueSlice = valueBeforeDot;
                     newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                 }
             } // check if before decimal more than maximum input
    
             else if (arraySplitBeforeDecimal.length < 8 || arraySplitBeforeDecimal.length === 8) {
                 for (var f = 0; f < arraySplitBeforeDecimal.length; f++) {
                     if (regExp.test(arraySplitBeforeDecimal[f])) {
                         valueBeforeDot += arraySplitBeforeDecimal[f];
                         beforeDecimalValueSlice = valueBeforeDot;
                     }
                 } // end loop
                 if (typeof (afterDecimalValueSlice) !== 'undefined') {
                     newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                 } else {
                     newValSlice = beforeDecimalValueSlice + ".";
                 }
             } // end if condition checking value before decimal less than allow maximum input
             checkFlag = true;
         }
         if (checkFlag === false) {
             if (arrayBeforeDecimal.length > 7) {
                 for (var g = 0; g < arrayBeforeDecimal.length; g++) {
                     if (regExp.test(arrayBeforeDecimal[g])) {
                         valueBeforeDot += arrayBeforeDecimal[g];
                     }
                 }
                 debugger;
                 if (newLVal2.includes("-")) {
                     if (valueBeforeDot.length > 8) {
                         newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                     } else if (valueBeforeDot.length < 8 || valueBeforeDot.length === 8) {
                         //console.log('Amount of negative appear', valueBeforeDot.split('-').length - 1);
                         if (valueBeforeDot.includes('-')) {
                             var negativeSign;
                             negativeSign = valueBeforeDot.split('-').length - 1;
                             if (negativeSign > 1) {
                                 let negCheckChar = new RegExp("^[0-9.]+$");
                                 var arrayNeg = []
                                 var valueNegative = ''
                                 for (var h = 0; h < valueBeforeDot.length; h++) {
                                     arrayNeg.push(valueBeforeDot.charAt(h));
                                 }
                                 for (var m = 1; m < arrayNeg.length; m++) {
                                     if (negCheckChar.test(arrayNeg[m])) {
                                         valueNegative += arrayNeg[m];
                                     }
                                 }
                                 newValSlice = arrayNeg[0] + valueNegative;
                             } else {
                                 newValSlice = valueBeforeDot;
                             }
                         } else {
                             newValSlice = valueBeforeDot;
                         }
                     }
                 } else {
                     newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                 }
             }// end if before decimal more than maximum input
             else if (arrayBeforeDecimal.length < 7 || arrayBeforeDecimal.length === 7) {
                 for (var h = 0; h < arrayBeforeDecimal.length; h++) {
                     if (regExp.test(arrayBeforeDecimal[h])) {
                         valueBeforeDot += arrayBeforeDecimal[h];
                     }
                 }
                 if (valueBeforeDot.includes('-')) {
                     var negativeSign;
                     negativeSign = valueBeforeDot.split('-').length - 1;
                     if (negativeSign > 1) {
                         let negCheckChar = new RegExp("^[0-9.-]+$");
                         var arrayNeg = []
                         var valueNegative = ''
                         for (var h = 0; h < valueBeforeDot.length; h++) {
                             arrayNeg.push(valueBeforeDot.charAt(h));
                         }
                         for (var m = 1; m < arrayNeg.length; m++) {
                             if (negCheckChar.test(arrayNeg[m])) {
                                 valueNegative += arrayNeg[m];
                             }
                         }
                         newValSlice = arrayNeg[0] + valueNegative;
                     } else {
                         newValSlice = valueBeforeDot;
                     }
                 } else {
                     newValSlice = valueBeforeDot;
                 }
             }
         }
    
         switch (key) {
             case 'CurrDiff':
                 this.currentCompare.ta0cu_difference = newValSlice;
                 break;
         }
     } */
    // Created by Ameer (18/10/2018)- Control output calculations
    SealLvInspectPage.prototype.outputLength = function (eventVal, key) {
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var regExp = new RegExp(NUMBER_REGEXP);
        var newValue = eventVal.value;
        var newValSlice;
        var stringValue;
        stringValue = newValue.toString();
        if (!regExp.test(newValue)) {
            newValSlice = stringValue.substr(0, stringValue.length - 1);
        }
        else {
            newValSlice = stringValue;
        }
        switch (key) {
            case 'avg':
                this.accuracy.ta0at_avg = newValSlice;
                break;
            case 'MError1':
                this.accuracy.ta0at_test1 = newValSlice;
                break;
            case 'MError2':
                this.accuracy.ta0at_test2 = newValSlice;
                break;
            case 'MError3':
                this.accuracy.ta0at_test3 = newValSlice;
                break;
            case 'MErrorAvg':
                this.accuracy.ta0at_avg = newValSlice;
                break;
            // Volatage for 3 Phase
            case '3PAvg':
                this.accuracy3P.ta0at_avg = newValSlice;
                break;
            case '3MError1':
                this.accuracy3P.ta0at_test1 = newValSlice;
                break;
            case '3MError2':
                this.accuracy3P.ta0at_test2 = newValSlice;
                break;
            case '3MError3':
                this.accuracy3P.ta0at_test3 = newValSlice;
                break;
            case '3MAvg':
                this.accuracy3P.ta0at_avg = newValSlice;
                break;
            case 'ActCurrRead':
                this.currentCompare.ta0cu_actual_total = newValSlice;
                break;
            case 'DispCurrRead':
                this.currentCompare.ta0cu_disp_total = newValSlice;
                break;
        }
    };
    //Created by Ameer (20/10/2018)- alpha numberic value
    // Edited by Ameer (25/10/2018)
    SealLvInspectPage.prototype.outputAplhaNumeric = function (event, key) {
        debugger;
        var regExp = new RegExp("^[a-zA-Z0-9 ]*$"); //001
        var newValue = event.target.value;
        var cutValue;
        var arrayValue = [];
        var newValSlice = '';
        for (var i = 0; i < newValue.length; i++) {
            arrayValue.push(newValue.charAt(i));
            if (regExp.test(arrayValue[i])) {
                newValSlice += arrayValue[i];
            }
        }
        switch (key) {
            case 'name':
                if (newValSlice.length > 200) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                }
                else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case '1name':
                if (newValSlice.length > 200) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                }
                else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case 'icpassport':
                if (newValSlice.length > 62) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessicpassport = cutValue;
                }
                else {
                    this.witness.ta0witnessicpassport = newValSlice;
                }
                break;
            case '1icpassport':
                if (newValSlice.length > 62) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessicpassport = cutValue;
                }
                else {
                    this.witness.ta0witnessicpassport = newValSlice;
                }
                break;
            case 'tamperingIndication':
                this.physical.ta0ts_emdisplay = newValSlice;
                break;
            case 'tamperingSuspect':
                this.physical.ta0ts_meter = newValSlice;
                break;
            case 'safetyCondition':
                this.sterminalCoverArray.ta0stickercondition = newValSlice;
                break;
            case 'ptSerialNo':
                this.accuracy3P.ta0at_pteserialnum = newValSlice;
                break;
            case '1PAccuracyPTE':
                this.accuracy.ta0at_pteserialnum = newValSlice;
                break;
        }
    };
    SealLvInspectPage.prototype.outputSpeAplhaNumeric = function (event, key) {
        debugger;
        var regExp = new RegExp("^[a-zA-Z0-9/@.‘’' ]*$"); //001
        var newValue = event.target.value;
        var cutValue;
        var arrayValue = [];
        var newValSlice = '';
        for (var i = 0; i < newValue.length; i++) {
            arrayValue.push(newValue.charAt(i));
            if (regExp.test(arrayValue[i])) {
                newValSlice += arrayValue[i];
            }
        }
        switch (key) {
            case 'name':
                if (newValSlice.length > 200) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                }
                else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case '1name':
                if (newValSlice.length > 200) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                }
                else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
        }
    };
    /**
     * @param objectVal
     * @param keyString
     * Created by Ameer (24/10/2018) -
     * allow negative value 5,3 length
     */
    SealLvInspectPage.prototype.checkNegative = function (objectVal, keyString) {
        debugger;
        var NUMBER_REGEXP = /^-?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = objectVal.target.value;
        var arrayBeforeDecimal = [];
        var splitDecimalPoint;
        var valueAfterDot = '';
        var valueBeforeDot = "";
        var afterDecimalValueSlice;
        var beforeDecimalValueSlice;
        var checkFlag = false;
        var newValSlice;
        var arraySplitBeforeDecimal = [];
        var arrayValueAfterDecimal = [];
        var regExp = new RegExp(NUMBER_REGEXP);
        //Check seperate each value input one by one into array
        for (var i = 0; i < newValue.length; i++) {
            if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
                arrayBeforeDecimal.push(newValue.charAt(i));
            }
        }
        if (newValue.includes(".")) {
            splitDecimalPoint = newValue.split(".");
            for (var a = 1; a < splitDecimalPoint.length; a++) {
                for (var b = 0; b < splitDecimalPoint[a].length; b++) {
                    arrayValueAfterDecimal.push(splitDecimalPoint[a].charAt(b));
                }
            } // end for loop for array after decimal value
            if (arrayValueAfterDecimal.length > 3) {
                for (var c = 0; c < arrayValueAfterDecimal.length; c++) {
                    if (regExp.test(arrayValueAfterDecimal[c])) {
                        valueAfterDot += arrayValueAfterDecimal[c];
                    }
                } //end Loop for checking value
                if (valueAfterDot.length > 3) {
                    afterDecimalValueSlice = valueAfterDot.substr(0, valueAfterDot.length - 1);
                }
                else {
                    afterDecimalValueSlice = valueAfterDot;
                }
            } // Checking value after decimal if more than maximum input allow
            else if (arrayValueAfterDecimal.length < 3 || arrayValueAfterDecimal.length == 3) {
                for (var d = 0; d < arrayValueAfterDecimal.length; d++) {
                    if (regExp.test(arrayValueAfterDecimal[d])) {
                        valueAfterDot += arrayValueAfterDecimal[d];
                        afterDecimalValueSlice = valueAfterDot;
                    }
                } // end for loop checking each value
            } // End checking after decimal is not more than maximmum input allow
            for (var j = 0; j < splitDecimalPoint[0].length; j++) {
                arraySplitBeforeDecimal.push(splitDecimalPoint[0].charAt(j));
            }
            if (arraySplitBeforeDecimal.length > 6) {
                for (var e = 0; e < arraySplitBeforeDecimal.length; e++) {
                    if (regExp.test(arraySplitBeforeDecimal[e])) {
                        valueBeforeDot += arraySplitBeforeDecimal[e];
                    }
                }
                if (valueBeforeDot.length > 6) {
                    valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                    beforeDecimalValueSlice = valueBeforeDot;
                    newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                }
                else {
                    beforeDecimalValueSlice = valueBeforeDot;
                    newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                }
            } // check if before decimal more than maximum input
            else if (arraySplitBeforeDecimal.length < 6 || arraySplitBeforeDecimal.length === 6) {
                for (var f = 0; f < arraySplitBeforeDecimal.length; f++) {
                    if (regExp.test(arraySplitBeforeDecimal[f])) {
                        valueBeforeDot += arraySplitBeforeDecimal[f];
                        beforeDecimalValueSlice = valueBeforeDot;
                    }
                } // end loop
                if (typeof (afterDecimalValueSlice) !== 'undefined') {
                    newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                }
                else {
                    newValSlice = beforeDecimalValueSlice + ".";
                }
            } // end if condition checking value before decimal less than allow maximum input
            checkFlag = true;
        }
        if (checkFlag === false) {
            if (arrayBeforeDecimal.length > 5) {
                for (var g = 0; g < arrayBeforeDecimal.length; g++) {
                    if (regExp.test(arrayBeforeDecimal[g])) {
                        valueBeforeDot += arrayBeforeDecimal[g];
                    }
                }
                debugger;
                if (newValue.includes("-")) {
                    if (valueBeforeDot.length > 6) {
                        newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                    }
                    else if (valueBeforeDot.length < 6 || valueBeforeDot.length === 6) {
                        //console.log('Amount of negative appear', valueBeforeDot.split('-').length - 1);
                        if (valueBeforeDot.includes('-')) {
                            var negativeSign;
                            negativeSign = valueBeforeDot.split('-').length - 1;
                            if (negativeSign > 1) {
                                var negCheckChar = new RegExp("^[0-9.]+$");
                                var arrayNeg = [];
                                var valueNegative = '';
                                for (var h = 0; h < valueBeforeDot.length; h++) {
                                    arrayNeg.push(valueBeforeDot.charAt(h));
                                }
                                for (var m = 1; m < arrayNeg.length; m++) {
                                    if (negCheckChar.test(arrayNeg[m])) {
                                        valueNegative += arrayNeg[m];
                                    }
                                }
                                newValSlice = arrayNeg[0] + valueNegative;
                            }
                            else {
                                newValSlice = valueBeforeDot;
                            }
                        }
                        else {
                            newValSlice = valueBeforeDot;
                        }
                    }
                }
                else {
                    newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                }
            } // end if before decimal more than maximum input
            else if (arrayBeforeDecimal.length < 5 || arrayBeforeDecimal.length === 5) {
                for (var h = 0; h < arrayBeforeDecimal.length; h++) {
                    if (regExp.test(arrayBeforeDecimal[h])) {
                        valueBeforeDot += arrayBeforeDecimal[h];
                    }
                }
                if (valueBeforeDot.includes('-')) {
                    var negativeSign;
                    negativeSign = valueBeforeDot.split('-').length - 1;
                    if (negativeSign > 1) {
                        var negCheckChar = new RegExp("^[0-9.]+$");
                        var arrayNeg = [];
                        var valueNegative = '';
                        for (var h = 0; h < valueBeforeDot.length; h++) {
                            arrayNeg.push(valueBeforeDot.charAt(h));
                        }
                        for (var m = 1; m < arrayNeg.length; m++) {
                            if (negCheckChar.test(arrayNeg[m])) {
                                valueNegative += arrayNeg[m];
                            }
                        }
                        newValSlice = arrayNeg[0] + valueNegative;
                    }
                    else {
                        newValSlice = valueBeforeDot;
                    }
                }
                else {
                    newValSlice = valueBeforeDot;
                }
            }
        }
        switch (keyString) {
            case 'PRR':
                this.accuracy3P.ta0at_powerfactor_r = newValSlice;
                break;
            case 'PRY':
                this.accuracy3P.ta0at_powerfactor_y = newValSlice;
                break;
            case 'PRY':
                this.accuracy3P.ta0at_powerfactor_b = newValSlice;
                break;
            case 'error1':
                this.accuracy3P.ta0at_test1 = newValSlice;
                break;
            case 'error2':
                this.accuracy3P.ta0at_test2 = newValSlice;
                break;
            case 'error3':
                this.accuracy3P.ta0at_test3 = newValSlice;
                break;
            case 'correctiveErr1':
                this.corrective.ta0at_test1 = newValSlice;
                break;
            case 'correctiveErr2':
                this.corrective.ta0at_test2 = newValSlice;
                break;
            case 'correctiveErr3':
                this.corrective.ta0at_test3 = newValSlice;
                break;
            case '1PPWRR_R':
                this.accuracy.ta0at_powerfactor_r = newValSlice;
                break;
            case '1PPWRR_Y':
                this.accuracy.ta0at_powerfactor_y = newValSlice;
                break;
            case '1PPWRR_B':
                this.accuracy.ta0at_powerfactor_b = newValSlice;
                break;
            case '1PError_1':
                this.accuracy.ta0at_test1 = newValSlice;
                break;
            case '1PError_2':
                this.accuracy.ta0at_test2 = newValSlice;
                break;
            case '1PError_3':
                this.accuracy.ta0at_test3 = newValSlice;
                break;
        }
    };
    /**
     * created by Ameer (15/10/2018)
     * edited by Ameer (17/10/2018)
     * Function for saving
     */
    SealLvInspectPage.prototype.saveDetails = function () {
        var _this = this;
        debugger;
        // Set sign signature
        // if (typeof (this.signaturePad1) !== "undefined" && typeof (this.signaturePad2) !== "undefined") {
        if (typeof (this.signaturePad1) !== "undefined") {
            this.witness.ta0witness_sign = this.signaturePad1.toDataURL();
        }
        if (typeof (this.signaturePad2) !== "undefined") {
            this.witness.ta0officer_sign = this.signaturePad2.toDataURL();
        }
        // }
        this.validationMandtory();
        if (this.allowSave === true) {
            debugger;
            if (this.warning_flag === false) {
                var confirm_1 = this.alertCtrl.create({
                    title: 'Confirm Cancel',
                    message: 'Do you want to proceed with not all field is fill up ?',
                    buttons: [{ text: 'Cancel' }, {
                            text: 'Ok',
                            handler: function () {
                                // Calling method to saving all data.
                                _this.savingTestInspectionData();
                            }
                        }]
                });
                confirm_1.present();
            }
            else if (this.warning_flag === true) {
                // Calling method to saving all data.
                this.savingTestInspectionData();
            }
        }
        else {
            this.gf.warningAlert("Error", "Please insert mandatory field.", "Dismiss");
        }
    };
    /**
     * Description  : Method to saving all data.
     * Created      : Alif (15.07.2019)
     */
    SealLvInspectPage.prototype.savingTestInspectionData = function () {
        var _this = this;
        console.log("saving all data...");
        if (this.maIndex != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
            var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
            var siteid = this.itemOri.json.siteid;
            var wonum = this.itemOri.json.wonum;
        }
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {
            // CT Ratio & Current Comparison Test
            this.transformaterRatio.assetnum = assetnum;
            this.transformaterRatio.siteid = siteid;
            this.transformaterRatio.wonum = wonum;
            this.transformaterRatio.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CTFC;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.transformaterRatio);
            // Polarity Test
            this.polarity.assetnum = assetnum;
            this.polarity.siteid = siteid;
            this.polarity.wonum = wonum;
            this.polarity.meterCategoryOptions = this.meterCategoryOptions;
            this.polarity.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_POLT;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.polarity);
            // Fuse Test
            this.fuse.assetnum = assetnum;
            this.fuse.siteid = siteid;
            this.fuse.wonum = wonum;
            this.fuse.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_FUSE;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.fuse);
            // Magnet Test
            this.magnet.assetnum = assetnum;
            this.magnet.siteid = siteid;
            this.magnet.wonum = wonum;
            this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);
            // Accuracy Test
            if (this.accuracy3P.ta0testind === 'M') {
                // Reset Portable Fields
                this.accuracy3P.ta0at_pteserialnum = "-";
                this.accuracy3P.ta0at_voltage_r = "-";
                this.accuracy3P.ta0at_voltage_y = "-";
                this.accuracy3P.ta0at_voltage_b = "-";
                this.accuracy3P.ta0at_current_r = "-";
                this.accuracy3P.ta0at_current_y = "-";
                this.accuracy3P.ta0at_current_b = "-";
                this.accuracy3P.ta0at_power_r = "-";
                this.accuracy3P.ta0at_power_y = "-";
                this.accuracy3P.ta0at_power_b = "-";
                this.accuracy3P.ta0at_powerfactor_r = "-";
                this.accuracy3P.ta0at_powerfactor_y = "-";
                this.accuracy3P.ta0at_powerfactor_b = "-";
                this.accuracy3P.ta0at_constant_1 = "-";
                this.accuracy3P.ta0at_constant_2 = "-";
                this.accuracy3P.ta0at_constant_3 = "-";
            }
            else {
                // Reset Manual Fields
                this.accuracy3P.ta0at_timecalc_1 = "-";
                this.accuracy3P.ta0at_timecalc_2 = "-";
                this.accuracy3P.ta0at_timecalc_3 = "-";
                this.accuracy3P.ta0at_timemeas_1 = "-";
                this.accuracy3P.ta0at_timemeas_2 = "-";
                this.accuracy3P.ta0at_timemeas_3 = "-";
            }
            this.accuracy3P.siteid = siteid;
            this.accuracy3P.wonum = wonum;
            this.accuracy3P.assetnum = assetnum;
            this.accuracy3P.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P);
            this.accuracy3P_N.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P_N;
            this.accuracy3P_N.siteid = siteid;
            this.accuracy3P_N.wonum = wonum;
            this.accuracy3P_N.assetnum = assetnum;
            // Push Accuracy Data After into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            //Accuracy
            if (this.accuracy.loc_test_ta0na === 'Y') {
                this.accuracy.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P;
                this.accuracy.siteid = siteid;
                this.accuracy.wonum = wonum;
                this.accuracy.assetnum = assetnum;
                this.accuracy.ta0na = true;
            }
            else {
                this.accuracy.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P;
                this.accuracy.siteid = siteid;
                this.accuracy.wonum = wonum;
                this.accuracy.assetnum = assetnum;
                this.accuracy.ta0na = false;
            }
            // Push Data into JSON for Accuracy
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy);
            if (this.neutral.loc_test_ta0na === 'Y') {
                this.neutral.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_NEUT;
                this.neutral.siteid = siteid;
                this.neutral.wonum = wonum;
                this.neutral.assetnum = assetnum;
                this.neutral.ta0na = true;
            }
            else {
                this.neutral.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_NEUT;
                this.neutral.siteid = siteid;
                this.neutral.wonum = wonum;
                this.neutral.assetnum = assetnum;
                this.neutral.ta0na = false;
            }
            //Push neutral Test data into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.neutral);
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            if (this.currentCompare.loc_test_ta0na === 'Y') {
                this.currentCompare.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                this.currentCompare.siteid = siteid;
                this.currentCompare.wonum = wonum;
                this.currentCompare.assetnum = assetnum;
                this.currentCompare.ta0na = true;
            }
            else {
                this.currentCompare.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                this.currentCompare.siteid = siteid;
                this.currentCompare.wonum = wonum;
                this.currentCompare.assetnum = assetnum;
                this.currentCompare.ta0na = false;
            }
            //Push current Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentCompare);
            if (this.magnet.loc_test_ta0na === 'Y') {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = true;
            }
            else {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = false;
                this.magnet.ta0naremarks = "-";
            }
            //Push Magnet Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);
            if (this.accuracy3P.ta0testind === 'M') {
                // Reset Portable Fields
                this.accuracy3P.ta0at_pteserialnum = "-";
                this.accuracy3P.ta0at_voltage_r = "-";
                this.accuracy3P.ta0at_voltage_y = "-";
                this.accuracy3P.ta0at_voltage_b = "-";
                this.accuracy3P.ta0at_current_r = "-";
                this.accuracy3P.ta0at_current_y = "-";
                this.accuracy3P.ta0at_current_b = "-";
                this.accuracy3P.ta0at_power_r = "-";
                this.accuracy3P.ta0at_power_y = "-";
                this.accuracy3P.ta0at_power_b = "-";
                this.accuracy3P.ta0at_powerfactor_r = "-";
                this.accuracy3P.ta0at_powerfactor_y = "-";
                this.accuracy3P.ta0at_powerfactor_b = "-";
                this.accuracy3P.ta0at_constant_1 = "-";
                this.accuracy3P.ta0at_constant_2 = "-";
                this.accuracy3P.ta0at_constant_3 = "-";
            }
            else {
                // Reset Manual Fields
                this.accuracy3P.ta0at_timecalc_1 = "-";
                this.accuracy3P.ta0at_timecalc_2 = "-";
                this.accuracy3P.ta0at_timecalc_3 = "-";
                this.accuracy3P.ta0at_timemeas_1 = "-";
                this.accuracy3P.ta0at_timemeas_2 = "-";
                this.accuracy3P.ta0at_timemeas_3 = "-";
            }
            this.accuracy3P.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P;
            this.accuracy3P.siteid = siteid;
            this.accuracy3P.wonum = wonum;
            this.accuracy3P.assetnum = assetnum;
            // Push accuracy 3P data into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P);
        }
        if (this.physical.loc_test_ta0na === 'Y') {
            this.physical.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET;
            this.physical.siteid = siteid;
            this.physical.wonum = wonum;
            this.physical.assetnum = assetnum;
            this.physical.ta0na = true;
        }
        else {
            this.physical.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET;
            this.physical.siteid = siteid;
            this.physical.wonum = wonum;
            this.physical.assetnum = assetnum;
            this.physical.ta0na = false;
        }
        // Push DATA into JSON for Physical Examination
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.physical);
        if (this.tampering.loc_test_ta0na === 'Y') {
            this.tampering.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP;
            this.tampering.siteid = siteid;
            this.tampering.wonum = wonum;
            this.tampering.assetnum = assetnum;
            this.tampering.ta0na = true;
        }
        else {
            this.tampering.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP;
            this.tampering.siteid = siteid;
            this.tampering.wonum = wonum;
            this.tampering.assetnum = assetnum;
            this.tampering.ta0na = false;
        }
        //Push data Temp into JSON
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.tampering);
        // Wittness Section
        this.witness.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
        this.witness.siteid = siteid;
        this.witness.wonum = wonum;
        this.witness.assetnum = assetnum;
        this.witness.ta0na = true;
        this.witness.customerSignature = this.customerSignature;
        //Push data Corrective into JSON
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);
        // Inspection Remarks
        this.remarksFeeder.ta0testtype = "REMARK";
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.remarksFeeder);
        debugger;
        // Dail Test
        if (this.hideDailTest === true) {
            // if (this.fIndex === 0) {
            this.currentoverall.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_DAILTEST;
            this.currentoverall.siteid = siteid;
            this.currentoverall.wonum = wonum;
            this.currentoverall.assetnum = assetnum;
            this.currentoverall.ta4dailindicator = "Y";
            this.currentoverall.ta4cur_overall_totalpill;
            this.currentoverall.ta4cur_overall_totalbus;
            this.currentoverall.ta4cur_diff_name;
            this.currentoverall.ta4cur_diff_tx;
            this.currentoverall.dailtest = this.currentDiff;
            this.currentoverall.portableTestSet = this.meterRegister;
            // Saving Meter Register Test
            // Edited: Alif (04/05/2019)
            this.currentoverall.portableTestSet = this.meterRegister;
            this.currentoverall.ta4meterregister = [];
            this.meterRegisterBf.type = "before";
            this.currentoverall.ta4meterregister.push(this.meterRegisterBf);
            this.meterRegisterAf.type = "after";
            this.currentoverall.ta4meterregister.push(this.meterRegisterAf);
            // Saving Meter Register 3 Test
            // Created: Alif (14/05/2019)
            // Meter Register (Before)
            this.currentoverall.ta4meterregisterbefore = [];
            for (var i = 0; i < this.meterRegisterBefore.length; i++) {
                this.currentoverall.ta4meterregisterbefore.push(this.meterRegisterBefore[i]);
            }
            // Meter Register (After)
            this.currentoverall.ta4meterregisterafter = [];
            for (var i = 0; i < this.meterRegisterAfter.length; i++) {
                this.currentoverall.ta4meterregisterafter.push(this.meterRegisterAfter[i]);
            }
            // if (this.valueChangeRegisterTest === "after") {
            //   this.currentoverall.ta4meterRegisterAfter = this.meterRegisterAf;
            // } else if (this.valueChangeRegisterTest === "before") {
            //   this.currentoverall.ta4meterRegisterBefore = this.meterRegisterBf;
            // }
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentoverall);
        }
        else {
            this.currentoverall.ta0testtype = __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_DAILTEST;
            this.currentoverall.siteid = siteid;
            this.currentoverall.wonum = wonum;
            this.currentoverall.assetnum = assetnum;
            this.currentoverall.ta4dailindicator = "N";
            // Saving Meter Register Test
            // Edited: Alif (04/05/2019)
            this.currentoverall.portableTestSet = this.meterRegister;
            this.currentoverall.ta4meterregister = [];
            this.meterRegisterBf.type = "before";
            this.currentoverall.ta4meterregister.push(this.meterRegisterBf);
            this.meterRegisterAf.type = "after";
            this.currentoverall.ta4meterregister.push(this.meterRegisterAf);
            // Saving Meter Register 3 Test
            // Created: Alif (14/05/2019)
            // Meter Register (Before)
            this.currentoverall.ta4meterregisterbefore = [];
            for (var i = 0; i < this.meterRegisterBefore.length; i++) {
                this.currentoverall.ta4meterregisterbefore.push(this.meterRegisterBefore[i]);
            }
            // Meter Register (After)
            this.currentoverall.ta4meterregisterafter = [];
            for (var i = 0; i < this.meterRegisterAfter.length; i++) {
                this.currentoverall.ta4meterregisterafter.push(this.meterRegisterAfter[i]);
            }
            // if (this.valueChangeRegisterTest === "after") {
            //   this.currentoverall.ta4meterRegisterAfter = this.meterRegisterAf;
            //   this.currentoverall.portableTestSet = this.meterRegister;
            // } else if (this.valueChangeRegisterTest === "before") {
            //   this.currentoverall.portableTestSet = this.meterRegister;
            //   this.currentoverall.ta4meterRegisterBefore = this.meterRegisterBf;
            // }
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentoverall);
        }
        // Test Status
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
        console.log("Test Data: " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        this.gf.startLoading();
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        // Adding Feeder Code beacuse always become null
        // Alif (13/05/2019)
        this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode = this.item.json.ta0feeder[this.fIndex].ta0feedercode;
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            // Convert ta4testdata into string data type before sync is running.
            // Created : Alif (21.02.2020)
            var testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.displayToast("LV Inspection locally updated.");
            this.gf.stopLoading();
            // Back to service-execution page.
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        }
        else if ((__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    //item, wonumVal, pageAction, feederCode, workOrderType) 
                    var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                    var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                    var itemArray = [];
                    itemArray[0] = (itemVal);
                    _this.dataService
                        .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0silStickers_haveChange = false;
                        _this.dataService
                            .saveRecordWithNewType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(' result + ' + JSON.stringify(results));
                            var resultDes = JSON.parse(results.toString());
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                            if (resultDes.processStatus === "failure") {
                                resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                                // Remove double quote+words not working..
                                resultDes.description.replace(/"/g, '');
                                var split = resultDes.description.split(":");
                                var result = split[1].substr(0, split[1].length - 1);
                                var NewResult = result.substring(2);
                                resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                                _this.gf.stopLoading();
                                _this.gf.displayToast(NewResult);
                            }
                            else {
                                _this.gf.warningAlert("Success", "LV Inspection  save successfully.", "Dismiss");
                                _this.gf.stopLoading();
                            }
                            // Back to service-execution page.
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                            _this.navCtrl.pop();
                        }).catch(function (error) {
                            console.log('service failure : ' + error);
                            _this.gf.stopLoading();
                        });
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.gf.warningAlert("Success", "LV Inspection locally updated.", "Dismiss");
                    _this.gf.stopLoading();
                    // Back to service-execution page.
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                }
            });
        }
        else {
            debugger;
            var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
            var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
            var itemArray = [];
            itemArray.push(itemVal);
            this.dataService
                .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
                console.log(' result + ' + JSON.stringify(results));
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0silStickers_haveChange = false;
                _this.dataService
                    .saveRecordWithNewType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                    .then(function (results) {
                    console.log(' result + ' + JSON.stringify(results));
                    var resultDes = JSON.parse(results.toString());
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                    if (resultDes.processStatus === "failure") {
                        resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                        // Remove double quote+words not working..
                        resultDes.description.replace(/"/g, '');
                        var split = resultDes.description.split(":");
                        var result = split[1].substr(0, split[1].length - 1);
                        var NewResult = result.substring(2);
                        resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                        _this.gf.stopLoading();
                        _this.gf.displayToast(NewResult);
                    }
                    else {
                        _this.gf.warningAlert("Success", "LV Inspection  save successfully.", "Dismiss");
                        _this.gf.stopLoading();
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                    }
                }).catch(function (error) {
                    console.log('service failure : ' + error);
                    _this.gf.stopLoading();
                });
            }).catch(function (error) {
                console.log('service failure : ' + error);
            });
        }
    };
    SealLvInspectPage.prototype.validationMandtory = function () {
        debugger;
        var flagCheck = false;
        var optional_check = false;
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_LPC_LV_400V) {
            flagCheck = false;
            // Physical Examination
            if (this.physical.ta0na === false) {
                if (typeof (this.physical.ta0ts_emdisplay) === 'undefined' && this.physical.ta0ts_emdisplay === '') {
                    optional_check = true;
                }
                if (typeof (this.physical.ta0ts_meter) === 'undefined' && this.physical.ta0ts_meter === '') {
                    optional_check = true;
                }
                if (typeof (this.physical.ta0ts_fuse) === 'undefined' && this.physical.ta0ts_fuse === '') {
                    optional_check = true;
                }
                if (typeof (this.physical.ta0ts_ttb) === 'undefined' && this.physical.ta0ts_ttb === '') {
                    optional_check = true;
                }
                if (typeof (this.physical.ta0ts_ct) === 'undefined' && this.physical.ta0ts_ct === '') {
                    optional_check = true;
                }
                if (typeof (this.physical.ta0ts_wiring) === 'undefined' && this.physical.ta0ts_wiring === '') {
                    optional_check = true;
                }
                if (typeof (this.tampering.ta0ts_anomaly_remarks) === 'undefined' && this.tampering.ta0ts_anomaly_remarks === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_r) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_r === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_y) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_y === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_b) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_b === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_total === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_r === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_y === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_b === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_total === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_r) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_r === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_y) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_y === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_b) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_b === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) === 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_total === '') {
                    optional_check = true;
                }
            }
            else if (this.physical.ta0na === true) {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '') {
                    optional_check = true;
                }
            }
            //  Magnet Test
            if (this.magnet.ta0na === false && optional_check !== true) {
                if (typeof (this.magnet.ta0mt_meter) === 'undefined' && this.magnet.ta0mt_meter === '') {
                    optional_check = true;
                }
                if (typeof (this.magnet.ta0mt_fuse_carrier) === 'undefined' && this.magnet.ta0mt_fuse_carrier === '') {
                    optional_check = true;
                }
                if (typeof (this.magnet.ta0mt_fuse_cartridge) === 'undefined' && this.magnet.ta0mt_fuse_cartridge === '') {
                    optional_check = true;
                }
            }
            else if (this.magnet.ta0na === true && optional_check !== true) {
                if (typeof (this.magnet.ta0naremarks) === 'undefined' || this.magnet.ta0naremarks === '') {
                    optional_check = true;
                }
            }
            if (this.transformaterRatio.ta0na === false && optional_check !== true) {
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_r === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_y === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_b === '') {
                    optional_check = true;
                }
                if (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) === 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_total === '') {
                    optional_check = true;
                }
            }
            else if (this.transformaterRatio.ta0na === true && optional_check !== true) {
                if (typeof (this.currentCompare.ta0naremarks) == 'undefined' || this.currentCompare.ta0naremarks === '') {
                    optional_check = true;
                }
            }
            //  Test accuracy
            if (this.accuracy3P.ta0na === true && optional_check !== true) {
                if (typeof (this.accuracy3P.ta0naremarks) == 'undefined' || this.accuracy3P.ta0naremarks === '') {
                    optional_check = true;
                }
            }
            else if (this.accuracy3P.ta0na === false && optional_check !== true) {
                if (this.valueChangeAccuracy === 'before') {
                    if (this.accuracy3P.ta0testind === 'M') {
                        if (typeof (this.accuracy3P.ta0at_timecalc_1) === 'undefined' || this.accuracy3P.ta0at_timecalc_1 === '' || this.accuracy3P.ta0at_timecalc_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_timecalc_2) === 'undefined' || this.accuracy3P.ta0at_timecalc_2 === '' || this.accuracy3P.ta0at_timecalc_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_timecalc_3) === 'undefined' || this.accuracy3P.ta0at_timecalc_3 === '' || this.accuracy3P.ta0at_timecalc_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_timemeas_1) === 'undefined' || this.accuracy3P.ta0at_timemeas_1 === '' || this.accuracy3P.ta0at_timemeas_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_timemeas_2) === 'undefined' || this.accuracy3P.ta0at_timemeas_2 === '' || this.accuracy3P.ta0at_timemeas_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_timemeas_3) === 'undefined' || this.accuracy3P.ta0at_timemeas_3 === '' || this.accuracy3P.ta0at_timemeas_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_test1) === 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_test2) === 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_test3) === 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                    }
                    else if (this.accuracy3P.ta0testind === 'P') {
                        if (typeof (this.accuracy3P.ta0at_pteserialnum) === 'undefined' || this.accuracy3P.ta0at_pteserialnum === '' || this.accuracy3P.ta0at_pteserialnum === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_voltage_r) === 'undefined' || this.accuracy3P.ta0at_voltage_r === '' || this.accuracy3P.ta0at_voltage_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_voltage_y) === 'undefined' || this.accuracy3P.ta0at_voltage_y === '' || this.accuracy3P.ta0at_voltage_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_voltage_b) === 'undefined' || this.accuracy3P.ta0at_voltage_b === '' || this.accuracy3P.ta0at_voltage_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_current_r) === 'undefined' || this.accuracy3P.ta0at_current_r === '' || this.accuracy3P.ta0at_current_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_current_y) === 'undefined' || this.accuracy3P.ta0at_current_y === '' || this.accuracy3P.ta0at_current_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_current_b) === 'undefined' || this.accuracy3P.ta0at_current_b === '' || this.accuracy3P.ta0at_current_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_power_r) === 'undefined' || this.accuracy3P.ta0at_power_r === '' || this.accuracy3P.ta0at_power_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_power_y) === 'undefined' || this.accuracy3P.ta0at_power_y === '' || this.accuracy3P.ta0at_power_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_power_b) === 'undefined' || this.accuracy3P.ta0at_power_b === '' || this.accuracy3P.ta0at_power_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_powerfactor_r) === 'undefined' || this.accuracy3P.ta0at_powerfactor_r === '' || this.accuracy3P.ta0at_powerfactor_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_powerfactor_y) === 'undefined' || this.accuracy3P.ta0at_powerfactor_y === '' || this.accuracy3P.ta0at_powerfactor_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_powerfactor_b) === 'undefined' || this.accuracy3P.ta0at_powerfactor_b === '' || this.accuracy3P.ta0at_powerfactor_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_constant_1) === 'undefined' || this.accuracy3P.ta0at_constant_1 === '' || this.accuracy3P.ta0at_constant_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_constant_2) === 'undefined' || this.accuracy3P.ta0at_constant_2 === '' || this.accuracy3P.ta0at_constant_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_constant_3) === 'undefined' || this.accuracy3P.ta0at_constant_3 === '' || this.accuracy3P.ta0at_constant_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_test1) === 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_test2) === 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                        else if (typeof (this.accuracy3P.ta0at_test3) === 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                            optional_check = true;
                        }
                    } //end check for portable
                }
                else if (this.valueChangeAccuracy === 'after') {
                    if (typeof (this.accuracy3P_N.ta4ma_date) === 'undefined' || this.accuracy3P_N.ta4ma_date === '' || this.accuracy3P_N.ta4ma_date === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        optional_check = true;
                    }
                    else if (typeof (this.accuracy3P_N.ta4ma_test1) === 'undefined' || this.accuracy3P_N.ta4ma_test1 === '' || this.accuracy3P_N.ta4ma_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        optional_check = true;
                    }
                    else if (typeof (this.accuracy3P_N.ta4ma_test2) === 'undefined' || this.accuracy3P_N.ta4ma_test2 === '' || this.accuracy3P_N.ta4ma_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        optional_check = true;
                    }
                    else if (typeof (this.accuracy3P_N.ta4ma_test3) === 'undefined' || this.accuracy3P_N.ta4ma_test3 === '' || this.accuracy3P_N.ta4ma_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        optional_check = true;
                    }
                    else if (typeof (this.accuracy3P_N.ta4ma_avg) === 'undefined' || this.accuracy3P_N.ta4ma_avg === '' || this.accuracy3P_N.ta4ma_avg === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        optional_check = true;
                    }
                }
            }
            // Witness & Staff 
            if (typeof (this.signaturePad1) !== "undefined") {
                if (typeof (this.witness.ta0witnessicpassport) === 'undefined' && this.witness.ta0witnessicpassport === '' && optional_check !== true) {
                    optional_check = true;
                }
            }
            if (this.signaturePad2.isEmpty()) {
                flagCheck = true;
            }
            if (typeof (this.witness.ta0witnessname) === 'undefined' && this.witness.ta0witnessname === '' && optional_check !== true) {
                optional_check = true;
            }
            else if (typeof (this.witness.ta0officer_name) === 'undefined' && this.witness.ta0officer_name === '' && optional_check !== true) {
                optional_check = true;
                // } else if (typeof (this.signaturePad2) !== "undefined" && optional_check !== true) {
                //   optional_check = true;
            }
            else if (typeof (this.witness.ta0officer_station) === 'undefined' && this.witness.ta0officer_station === '' && optional_check !== true) {
                optional_check = true;
            }
            // Busbar section
            if (this.hideDailTest === true && optional_check !== true) {
                if (typeof (this.currentoverall.ta4cur_diff_name) === 'undefined' && this.currentoverall.ta4cur_diff_name === '') {
                    optional_check = true;
                }
                else if (typeof (this.currentoverall.ta4cur_diff_tx) === 'undefined' && this.currentoverall.ta4cur_diff_tx === '') {
                    optional_check = true;
                }
                for (var a = 0; a < this.currentDiff.length; a++) {
                    if (typeof (this.currentDiff[a].ta4cur_R_pil) === 'undefined' && this.currentDiff[a].ta4cur_R_pil === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_Y_pil) === 'undefined' && this.currentDiff[a].ta4cur_Y_pil === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_B_pil) === 'undefined' && this.currentDiff[a].ta4cur_B_pil === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_R_busbar) === 'undefined' && this.currentDiff[a].ta4cur_R_busbar === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_Y_busbar) === 'undefined' && this.currentDiff[a].ta4cur_Y_busbar === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_B_busbar) === 'undefined' && this.currentDiff[a].ta4cur_B_busbar === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_total_pill) === 'undefined' && this.currentDiff[a].ta4cur_total_pill === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.currentDiff[a].ta4cur_total_bus) === 'undefined' && this.currentDiff[a].ta4cur_total_bus === '') {
                        optional_check = true;
                    }
                }
            }
            // Meter Register
            if (typeof (this.meterRegister.ta4pts) === 'undefined' && this.meterRegister.ta4pts === '' && optional_check !== true) {
                optional_check = true;
            }
            if (this.valueChangeRegisterTest === 'before') {
                for (var b = 0; b < this.meterRegisterBefore.length; b++) {
                    if (typeof (this.meterRegisterBefore[b].ta4ma_reg_start) === 'undefined' && this.meterRegisterBefore[b].ta4ma_reg_start === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.meterRegisterBefore[b].ta4ma_reg_stop) === 'undefined' && this.meterRegisterBefore[b].ta4ma_reg_stop === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.meterRegisterBefore[b].ta4ma_reg_error) === 'undefined' && this.meterRegisterBefore[b].ta4ma_reg_error === '') {
                        optional_check = true;
                    }
                }
            }
            else if (this.valueChangeRegisterTest === 'after') {
                for (var b = 0; b < this.meterRegisterAfter.length; b++) {
                    if (typeof (this.meterRegisterAfter[b].ta4ma_reg_start) === 'undefined' && this.meterRegisterAfter[b].ta4ma_reg_start === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.meterRegisterAfter[b].ta4ma_reg_stop) === 'undefined' && this.meterRegisterAfter[b].ta4ma_reg_stop === '') {
                        optional_check = true;
                    }
                    else if (typeof (this.meterRegisterAfter[b].ta4ma_reg_error) === 'undefined' && this.meterRegisterAfter[b].ta4ma_reg_error === '') {
                        optional_check = true;
                    }
                }
            }
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.accuracy.loc_test_ta0na === 'N') {
                if (this.accuracy.ta0testind === 'P') {
                    if (typeof (this.accuracy.ta0at_pteserialnum) == 'undefined' || this.accuracy.ta0at_pteserialnum === '' || this.accuracy.ta0at_pteserialnum === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_voltage_r) == 'undefined' || this.accuracy.ta0at_voltage_r === '' || this.accuracy.ta0at_voltage_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_voltage_y) == 'undefined' || this.accuracy.ta0at_voltage_y === '' || this.accuracy.ta0at_voltage_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_voltage_b) == 'undefined' || this.accuracy.ta0at_voltage_b === '' || this.accuracy.ta0at_voltage_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_current_r) == 'undefined' || this.accuracy.ta0at_current_r === '' || this.accuracy.ta0at_current_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_current_y) == 'undefined' || this.accuracy.ta0at_current_y === '' || this.accuracy.ta0at_current_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_current_b) == 'undefined' || this.accuracy.ta0at_current_b === '' || this.accuracy.ta0at_current_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_power_r) == 'undefined' || this.accuracy.ta0at_power_r === '' || this.accuracy.ta0at_power_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_power_y) == 'undefined' || this.accuracy.ta0at_power_y === '' || this.accuracy.ta0at_power_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_power_b) == 'undefined' || this.accuracy.ta0at_power_b === '' || this.accuracy.ta0at_power_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_powerfactor_r) == 'undefined' || this.accuracy.ta0at_powerfactor_r === '' || this.accuracy.ta0at_powerfactor_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_powerfactor_y) == 'undefined' || this.accuracy.ta0at_powerfactor_y === '' || this.accuracy.ta0at_powerfactor_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_powerfactor_b) == 'undefined' || this.accuracy.ta0at_powerfactor_b === '' || this.accuracy.ta0at_powerfactor_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_constant_1) == 'undefined' || this.accuracy.ta0at_constant_1 === '' || this.accuracy.ta0at_constant_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_constant_2) == 'undefined' || this.accuracy.ta0at_constant_2 === '' || this.accuracy.ta0at_constant_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_constant_3) == 'undefined' || this.accuracy.ta0at_constant_3 === '' || this.accuracy.ta0at_constant_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for portable
                else if (this.accuracy.ta0testind === 'M') {
                    if (typeof (this.accuracy.ta0at_timecalc_1) == 'undefined' || this.accuracy.ta0at_timecalc_1 === '' || this.accuracy.ta0at_timecalc_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timecalc_3) == 'undefined' || this.accuracy.ta0at_timecalc_3 === '' || this.accuracy.ta0at_timecalc_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timemeas_1) == 'undefined' || this.accuracy.ta0at_timemeas_1 === '' || this.accuracy.ta0at_timemeas_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timemeas_2) == 'undefined' || this.accuracy.ta0at_timemeas_2 === '' || this.accuracy.ta0at_timemeas_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timemeas_3) == 'undefined' || this.accuracy.ta0at_timemeas_3 === '' || this.accuracy.ta0at_timemeas_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for manual
            }
            else {
                if (typeof (this.accuracy.ta0naremarks) == 'undefined' || this.accuracy.ta0naremarks === '' || this.accuracy.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.neutral.loc_test_ta0na === 'N') {
                if (typeof (this.neutral.ta0nt_phase) == 'undefined' || this.neutral.ta0nt_phase === '' || this.neutral.ta0nt_phase === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_neutral) == 'undefined' || this.neutral.ta0nt_neutral === '' || this.neutral.ta0nt_neutral === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_in_life) == 'undefined' || this.neutral.ta0nt_in_life === '' || this.neutral.ta0nt_in_life === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_in_neutral) == 'undefined' || this.neutral.ta0nt_in_neutral === '' || this.neutral.ta0nt_in_neutral === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_out_life) == 'undefined' || this.neutral.ta0nt_out_life === '' || this.neutral.ta0nt_out_life === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_out_neutral) == 'undefined' || this.neutral.ta0nt_out_neutral === '' || this.neutral.ta0nt_out_neutral === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.neutral.ta0naremarks) == 'undefined' || this.neutral.ta0naremarks === '' || this.neutral.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.tampering.loc_test_ta0na === 'N') {
                if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.corrective.loc_test_ta0na === 'N') {
                if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.physical.ta0ts_emdisplay) == 'undefined' || this.physical.ta0ts_emdisplay === '' || this.physical.ta0ts_emdisplay === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.currentCompare.loc_test_ta0na === 'N') {
                if (typeof (this.currentCompare.ta0cu_actual_r) == 'undefined' || this.currentCompare.ta0cu_actual_r === '' || this.currentCompare.ta0cu_actual_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_actual_y) == 'undefined' || this.currentCompare.ta0cu_actual_y === '' || this.currentCompare.ta0cu_actual_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_actual_b) == 'undefined' || this.currentCompare.ta0cu_actual_b === '' || this.currentCompare.ta0cu_actual_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_disp_r) == 'undefined' || this.currentCompare.ta0cu_disp_r === '' || this.currentCompare.ta0cu_disp_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_disp_y) == 'undefined' || this.currentCompare.ta0cu_disp_y === '' || this.currentCompare.ta0cu_disp_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_disp_b) == 'undefined' || this.currentCompare.ta0cu_disp_b === '' || this.currentCompare.ta0cu_disp_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.currentCompare.ta0naremarks) == 'undefined' || this.currentCompare.ta0naremarks === '' || this.currentCompare.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.polarity.loc_test_ta0na === 'N') {
                if (typeof (this.polarity.ta0po_tm_r) == 'undefined' || this.polarity.ta0po_tm_r === '' || this.polarity.ta0po_tm_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.polarity.ta0po_tm_y) == 'undefined' || this.polarity.ta0po_tm_y === '' || this.polarity.ta0po_tm_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.polarity.ta0po_tm_b) == 'undefined' || this.polarity.ta0po_tm_b === '' || this.polarity.ta0po_tm_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.polarity.ta0po_tm_n) == 'undefined' || this.polarity.ta0po_tm_n === '' || this.polarity.ta0po_tm_n === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.polarity.ta0naremarks) == 'undefined' || this.polarity.ta0naremarks === '' || this.polarity.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.magnet.loc_test_ta0na === 'N') {
                if (typeof (this.magnet.ta0mt_magnet_result) == 'undefined' || this.magnet.ta0mt_magnet_result === '' || this.magnet.ta0mt_magnet_result === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.magnet.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.accuracy3P.loc_test_ta0na === 'N') {
                if (typeof (this.accuracy3P.ta0testind) == 'undefined' || this.accuracy3P.ta0testind === '' || this.accuracy3P.ta0testind === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (this.accuracy3P.ta0testind === 'P') {
                    if (typeof (this.accuracy3P.ta0at_pteserialnum) == 'undefined' || this.accuracy3P.ta0at_pteserialnum === '' || this.accuracy3P.ta0at_ptserialnum === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_voltage_r) == 'undefined' || this.accuracy3P.ta0at_voltage_r === '' || this.accuracy3P.ta0at_voltage_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_voltage_y) == 'undefined' || this.accuracy3P.ta0at_voltage_y === '' || this.accuracy3P.ta0at_voltage_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_voltage_b) == 'undefined' || this.accuracy3P.ta0at_voltage_b === '' || this.accuracy3P.ta0at_voltage_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_current_r) == 'undefined' || this.accuracy3P.ta0at_current_r === '' || this.accuracy3P.ta0at_current_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_current_y) == 'undefined' || this.accuracy3P.ta0at_current_y === '' || this.accuracy3P.ta0at_current_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_current_b) == 'undefined' || this.accuracy3P.ta0at_current_b === '' || this.accuracy3P.ta0at_current_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_power_r) == 'undefined' || this.accuracy3P.ta0at_power_r === '' || this.accuracy3P.ta0at_power_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_power_y) == 'undefined' || this.accuracy3P.ta0at_power_y === '' || this.accuracy3P.ta0at_power_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_power_b) == 'undefined' || this.accuracy3P.ta0at_power_b === '' || this.accuracy3P.ta0at_power_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_powerfactor_r) == 'undefined' || this.accuracy3P.ta0at_powerfactor_r === '' || this.accuracy3P.ta0at_powerfactor_r === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_powerfactor_y) == 'undefined' || this.accuracy3P.ta0at_powerfactor_y === '' || this.accuracy3P.ta0at_powerfactor_y === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_powerfactor_b) == 'undefined' || this.accuracy3P.ta0at_powerfactor_b === '' || this.accuracy3P.ta0at_powerfactor_b === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for portable
                else if (this.accuracy3P.ta0testind === 'M') {
                    if (typeof (this.accuracy3P.ta0at_timecalc_1) == 'undefined' || this.accuracy3P.ta0at_timecalc_1 === '' || this.accuracy3P.ta0at_timecalc_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timecalc_3) == 'undefined' || this.accuracy3P.ta0at_timecalc_3 === '' || this.accuracy3P.ta0at_timecalc_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timemeas_1) == 'undefined' || this.accuracy3P.ta0at_timemeas_1 === '' || this.accuracy3P.ta0at_timemeas_1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timemeas_2) == 'undefined' || this.accuracy3P.ta0at_timemeas_2 === '' || this.accuracy3P.ta0at_timemeas_2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timemeas_3) == 'undefined' || this.accuracy3P.ta0at_timemeas_3 === '' || this.accuracy3P.ta0at_timemeas_3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for manual
            }
            else {
                if (typeof (this.accuracy3P.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.tampering.loc_test_ta0na === 'N') {
                if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                } /* else if (typeof (this.tampering.ta0ts_meter) == 'undefined' || this.tampering.ta0ts_meter === '' || this.tampering.ta0ts_meter === empty) {
                        flagCheck = true;
                    } */
            }
            else {
                if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.corrective.loc_test_ta0na === 'N') {
                if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === __WEBPACK_IMPORTED_MODULE_12_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
        }
        if (flagCheck === true) {
            this.allowSave = false;
        }
        else {
            this.allowSave = true;
            if (optional_check === true) {
                this.warning_flag = false;
            }
            else if (optional_check === false) {
                this.warning_flag = true;
            }
        }
    };
    //created by Ameer (22/10/2018)
    SealLvInspectPage.prototype.barcodeScan = function (phase) {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log("Response: " + JSON.stringify(barcodeData));
            console.log("Bar Code: " + barcodeData.text.trim());
            if (phase === "1phase") {
                _this.accuracy.ta0at_pteserialnum = barcodeData.text.trim();
            }
            else if ((phase === "3phase")) {
                _this.accuracy3P.ta0at_pteserialnum = barcodeData.text.trim();
            }
            //this.checkAssetsAvailability(deviceDetailsArray, index, deviceType, deviceCategory);
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    /**
     * Reason   : Method to auto calculate total summation Transformater Ratio
     * Created  : Alif (27/02/2019)
     */
    SealLvInspectPage.prototype.calculateTransformaterRatio = function () {
        console.log("auto calculation transformation ratio..");
        // Temporary Variables..
        var AT, BT, CT, DT;
        debugger;
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") ||
            (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
                (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_r) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_b);
            if (!isNaN(total)) {
                // sent value to total section.
                this.transformaterRatio.ta0fc_maincurrent_bb_total = total.toFixed(2);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_dm_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_r !== null && this.transformaterRatio.ta0fc_maincurrent_dm_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_y !== null && this.transformaterRatio.ta0fc_maincurrent_dm_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_b !== null && this.transformaterRatio.ta0fc_maincurrent_dm_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_dm_r) + Number(this.transformaterRatio.ta0fc_maincurrent_dm_y) + Number(this.transformaterRatio.ta0fc_maincurrent_dm_b);
            if (!isNaN(total)) {
                // sent value to total section.
                this.transformaterRatio.ta0fc_maincurrent_dm_total = total.toFixed(2);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_dupcurrent_ct_r) + Number(this.transformaterRatio.ta0fc_dupcurrent_ct_y) + Number(this.transformaterRatio.ta0fc_dupcurrent_ct_b);
            if (!isNaN(total)) {
                // sent vaue to total section.
                this.transformaterRatio.ta0fc_dupcurrent_ct_total = total.toFixed(2);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_r) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_dupcurrent_tm_r) + Number(this.transformaterRatio.ta0fc_dupcurrent_tm_y) + Number(this.transformaterRatio.ta0fc_dupcurrent_tm_b);
            if (!isNaN(total)) {
                // sent vaue to total section.
                this.transformaterRatio.ta0fc_dupcurrent_tm_total = total.toFixed(2);
            }
        }
        // Calculation CT Ratio (NIN)
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_r) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_r) * 5;
            if (!isNaN(total)) {
                // sent value to ct ratio red
                this.transformaterRatio.ta0fc_ctratio_r = total.toFixed(2);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_y) * 5;
            if (!isNaN(total)) {
                // sent value to ct ratio yellow
                this.transformaterRatio.ta0fc_ctratio_y = total.toFixed(2);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_b) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_b) * 5;
            if (!isNaN(total)) {
                // sent value to ct ratio blue
                this.transformaterRatio.ta0fc_ctratio_b = total.toFixed(2);
            }
        }
        /**
         * Description  : Seperate calculation primary and secondary.
         * Edited       : Alif (28.08.2019)
         */
        // Calculate Different for Primary
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_total !== null && this.transformaterRatio.ta0fc_maincurrent_bb_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_total !== null && this.transformaterRatio.ta0fc_maincurrent_dm_total !== "")) {
            // Variables
            var totalMain;
            totalMain = ((Number(this.transformaterRatio.ta0fc_maincurrent_dm_total) - Number(this.transformaterRatio.ta0fc_maincurrent_bb_total)) / parseFloat(this.transformaterRatio.ta0fc_maincurrent_bb_total)) * 100;
            if (!isNaN(totalMain)) {
                // sent value to main current ct ratio
                this.transformaterRatio.ta0fc_per_diff_main = totalMain.toFixed(2);
            }
        }
        // Calculate Different for Secondary
        if ((typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== "")) {
            // Variables
            var totalDuplicate;
            totalDuplicate = ((Number(this.transformaterRatio.ta0fc_dupcurrent_tm_total) - Number(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) / parseFloat(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) * 100;
            if (!isNaN(totalDuplicate)) {
                // sent to duplicate current ct ratio
                this.transformaterRatio.ta0fc_per_diff_sec = totalDuplicate.toFixed(2);
            }
        }
    };
    /**
     * Reason   : Method to Reset SignaturePad
     * Created  : Alif (21-03-2019)
     */
    SealLvInspectPage.prototype.clearSign = function (category) {
        console.log("method to clear signature pad..");
        if (category === "witness") {
            this.signaturePad1.clear();
        }
        if (category === "officer") {
            this.signaturePad2.clear();
        }
    };
    SealLvInspectPage.prototype.onlyUnique = function (value, index, self) {
        if (value !== undefined && value !== "") {
            return self.indexOf(value) === index;
        }
    };
    SealLvInspectPage.prototype.calculateFeeder = function () {
        debugger;
        this.feederNo = this.item.json.ta0feeder;
    };
    /**
     * Create: Ameer
     * Date : 26/4/2019
     * Description calculation for dail test
     */
    SealLvInspectPage.prototype.pillarCalculate = function (array) {
        debugger;
        var totalPillar = 0, totalBusbar = 0;
        var totalAllPillar = 0, totalAllBusbar = 0;
        var amountR = "";
        var amountY = "";
        var amountB = "";
        var busbarR = "";
        var busbarY = "";
        var busbarB = "";
        //  Pill Calculation section
        if (typeof (array.ta4cur_total_pill) !== "undefined" && array.ta4cur_total_pill !== null && array.ta4cur_total_pill !== "") {
            amountR = Number(amountR) + Number(array.ta4cur_R_pil);
        }
        if (typeof (array.ta4cur_Y_pil) !== "undefined" && array.ta4cur_Y_pil !== null && array.ta4cur_Y_pil !== "") {
            amountY = Number(amountY) + Number(array.ta4cur_Y_pil);
        }
        if (typeof (array.ta4cur_B_pil) !== "undefined" && array.ta4cur_B_pil !== null && array.ta4cur_B_pil !== "") {
            amountY = Number(amountB) + Number(array.ta4cur_B_pil);
        }
        totalPillar = Number(array.ta4cur_R_pil) + Number(array.ta4cur_Y_pil) + Number(array.ta4cur_B_pil);
        if (!isNaN(totalPillar)) {
            array.ta4cur_total_pill = totalPillar.toFixed(5);
        }
        // Busbar section calculation
        if (typeof (array.ta4cur_R_busbar) !== "undefined" && array.ta4cur_R_busbar !== null && array.ta4cur_R_busbar !== "") {
            busbarR = Number(busbarR) + Number(array.ta4cur_R_pil);
        }
        if (typeof (array.ta4cur_Y_busbar) !== "undefined" && array.ta4cur_Y_busbar !== null && array.ta4cur_Y_busbar !== "") {
            busbarY = Number(busbarY) + Number(array.ta4cur_Y_pil);
        }
        if (typeof (array.ta4cur_B_busbar) !== "undefined" && array.ta4cur_B_busbar !== null && array.ta4cur_B_busbar !== "") {
            busbarB = Number(busbarB) + Number(array.ta4cur_B_pil);
        }
        totalBusbar = Number(array.ta4cur_R_busbar) + Number(array.ta4cur_Y_busbar) + Number(array.ta4cur_B_busbar);
        if (!isNaN(totalBusbar)) {
            array.ta4cur_total_bus = totalBusbar.toFixed(5);
        }
        // Calulcation for all busbar and pill
        for (var i = 0; i < this.currentDiff.length; i++) {
            if (typeof (this.currentDiff[i].ta4cur_total_pill) !== "undefined" && this.currentDiff[i].ta4cur_total_pill !== null && this.currentDiff[i].ta4cur_total_pill !== "") {
                totalAllPillar = Number(totalAllPillar) + Number(this.currentDiff[i].ta4cur_total_pill);
            }
            if (typeof (this.currentDiff[i].ta4cur_total_bus) !== "undefined" && this.currentDiff[i].ta4cur_total_bus !== null && this.currentDiff[i].ta4cur_total_bus !== "") {
                totalAllBusbar = Number(totalAllBusbar) + Number(this.currentDiff[i].ta4cur_total_bus);
            }
        }
        if (!isNaN(totalAllPillar)) {
            this.currentoverall.ta4cur_overall_totalpill = Number(totalAllPillar).toFixed(5);
        }
        if (!isNaN(totalAllBusbar)) {
            this.currentoverall.ta4cur_overall_totalbus = Number(totalAllBusbar).toFixed(5);
        }
        // Calculate for diff current
        var outputDiff = (((this.currentoverall.ta4cur_overall_totalbus - this.currentoverall.ta4cur_overall_totalpill) / this.currentoverall.ta4cur_overall_totalpill) * 100);
        if (!isNaN(outputDiff)) {
            this.currentoverall.ta4cur_diff_overall = Number(outputDiff).toFixed(2);
        }
    };
    SealLvInspectPage.prototype.trackByFn = function (index, item) {
        return index;
    };
    SealLvInspectPage.prototype.registerCalc = function () {
        debugger;
        if (this.valueChangeRegisterTest === 'after') {
            if (typeof (this.meterRegisterAf.ta4ma_reg_start) !== "undefined" && this.meterRegisterAf.ta4ma_reg_start !== null && this.meterRegisterAf.ta4ma_reg_start !== "") {
                var afterStart = this.meterRegisterAf.ta4ma_reg_start;
            }
            if (typeof (this.meterRegisterAf.ta4ma_reg_stop) !== "undefined" && this.meterRegisterAf.ta4ma_reg_stop !== null && this.meterRegisterAf.ta4ma_reg_stop !== "") {
                var afterEnd = this.meterRegisterAf.ta4ma_reg_stop;
            }
            var totalOutput = Number(afterEnd) - Number(afterStart);
            if (!isNaN(totalOutput)) {
                this.meterRegisterAf.ta4ma_reg_usage = totalOutput.toFixed(2);
            }
        }
        else if (this.valueChangeRegisterTest === 'before') {
            if (typeof (this.meterRegisterBf.ta4ma_reg_start) !== "undefined" && this.meterRegisterBf.ta4ma_reg_start !== null && this.meterRegisterBf.ta4ma_reg_start !== "") {
                var afterStart = this.meterRegisterBf.ta4ma_reg_start;
            }
            if (typeof (this.meterRegisterBf.ta4ma_reg_stop) !== "undefined" && this.meterRegisterBf.ta4ma_reg_stop !== null && this.meterRegisterBf.ta4ma_reg_stop !== "") {
                var afterEnd = this.meterRegisterBf.ta4ma_reg_stop;
            }
            var totalOutput = Number(afterEnd) - Number(afterStart);
            if (!isNaN(totalOutput)) {
                this.meterRegisterBf.ta4ma_reg_usage = totalOutput.toFixed(2);
            }
        }
    };
    /**
     * Reason   : Method to auto calculate usage meter register test.
     * Created  : Alif (14/05/2019)
     */
    SealLvInspectPage.prototype.autoCalculateMeterRegisterUsage = function (array) {
        console.log("auto calcualate meter register test usage..");
        if (typeof (array) !== "undefined") {
            if ((typeof (array.ta4ma_reg_start) !== "undefined" && array.ta4ma_reg_start !== "" && array.ta4ma_reg_start !== null) &&
                (typeof (array.ta4ma_reg_stop) !== "undefined" && array.ta4ma_reg_stop !== "" && array.ta4ma_reg_stop !== null)) {
                var usage = Number(array.ta4ma_reg_stop) - Number(array.ta4ma_reg_start);
                if (!isNaN(usage)) {
                    array.ta4ma_reg_usage = Number(usage).toFixed(2);
                }
            }
        }
    };
    /**
     * Hide Show Test List Section
     * Created  : Alif (18/04/2019)
     */
    SealLvInspectPage.prototype.showTestListSection = function (index) {
        index++;
        if (this.showTestList === false) {
            this.showTestList = true;
        }
        else if (index === 2) {
            this.showTestList = false;
        }
    };
    /**
     * Reason   : Method to change view and update value for different selection.
     * Created  : ALif (03.07.2019)
     */
    SealLvInspectPage.prototype.changeUiViewFuseNeon = function (type, value) {
        debugger;
        if (type === "fuse") {
            // checking value
            if (value === "Tidak") {
                this.fuse.ta0ft_fuse_contact = 'Tidak - ';
                this.fuseIndicator = true;
            }
            else {
                this.fuse.ta0ft_fuse_contact = value;
                this.fuseIndicator = false;
            }
        }
        else if (type === "neon") {
            // checking value
            if (value === "Ya") {
                this.fuse.ta0ft_neon_glow = 'Ya - ';
                this.neonIndicator = true;
            }
            else {
                this.fuse.ta0ft_neon_glow = value;
                this.neonIndicator = false;
            }
        }
    };
    /**
       * Reason   : Method to change view and update value for different selection.
       * Created  : ALif (04.07.2019)
       */
    SealLvInspectPage.prototype.changeUiViewMagentTest = function (type, value) {
        debugger;
        console.log("Value: " + value);
        if (type === "meter") {
            // checking value
            if (value === "Lain2") {
                this.magnet.ta0mt_meter = "Lain-lain : ";
                this.magnetMeter = true;
            }
            else {
                this.magnet.ta0mt_meter = value;
                this.magnetMeter = false;
            }
        }
        else if (type === "fuse_carrier") {
            // checking value
            if (value === "Lain2") {
                this.magnet.ta0mt_fuse_carrier = "Lain-lain : ";
                this.magnetFuseCarrier = true;
            }
            else {
                this.magnet.ta0mt_fuse_carrier = value;
                this.magnetFuseCarrier = false;
            }
        }
        else if (type === "fuse_cartridge") {
            // checking value
            if (value === "Lain2") {
                this.magnet.ta0mt_fuse_cartridge = "Lain-lain : ";
                this.magnetFuseCartridge = true;
            }
            else {
                this.magnet.ta0mt_fuse_cartridge = value;
                this.magnetFuseCartridge = false;
            }
        }
    };
    /**
     * Reason   : Method to change value and indicator.
     * Created  : Alif (03.07.2019)
     */
    SealLvInspectPage.prototype.changeUiViewCustomerSignature = function () {
        console.log("value : " + this.customerSignature);
        if (this.customerSignature === "No") {
            this.witness.ta0witnessname = "";
            this.witness.ta0witness_sign = "";
            this.witness.ta0witnessicpassport = "-";
            this.witness.ta0witnessphone = "-";
            this.witness.ta0signaturecustomer = this.customerSignature;
        }
        else {
            this.witness.ta0witnessname = "";
            this.witness.ta0signaturecustomer = this.customerSignature;
        }
    };
    /**
     * Reason   : Setting to choose and default view test list selection.
     * Created  : Alif (03-07-2019)
     * Edited   : Ameer (11/7/2019) - Change button to green when test is done
     */
    SealLvInspectPage.prototype.selectionTestList = function (value) {
        console.log("selection test list.." + value);
        // Reset
        this.viewPhysicalTest = false;
        this.viewCtRatioCurrentTest = false;
        this.viewPolarityTest = false;
        this.viewFuseTest = false;
        this.viewMagnetTest = false;
        this.viewAccuracyTest = false;
        this.viewWitnessExaminerTest = false;
        this.viewDialTest = false;
        if (value === "pit") {
            this.viewPhysicalTest = true;
        }
        else if (value === "cct") {
            this.viewCtRatioCurrentTest = true;
        }
        else if (value === "pt") {
            this.viewPolarityTest = true;
        }
        else if (value === "ft") {
            this.viewFuseTest = true;
        }
        else if (value === "mt") {
            this.viewMagnetTest = true;
        }
        else if (value === "acct") {
            this.viewAccuracyTest = true;
        }
        else if (value === "wes") {
            this.viewWitnessExaminerTest = true;
        }
        else if (value === "dt") {
            this.viewDialTest = true;
        }
        else {
            this.viewPhysicalTest = false;
            this.viewCtRatioCurrentTest = false;
            this.viewPolarityTest = false;
            this.viewFuseTest = false;
            this.viewMagnetTest = false;
            this.viewAccuracyTest = false;
            this.viewWitnessExaminerTest = false;
            this.viewDialTest = false;
        }
        this.checkTestTypeField();
        // Validate User Input
        // this.validateUserInput();
    };
    /**
     * Created : Ameer (8/7/2019)
     * Description: Reset All Test Type when selected
     */
    SealLvInspectPage.prototype.resetAllTestInspection = function () {
        var _this = this;
        debugger;
        var confirm = this.alertCtrl.create({
            title: 'LV Inspection ?',
            message: 'Reset all data ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        // Checking for Physical
                        if (_this.physical !== null) {
                            delete _this.physical;
                            _this.physical = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.physical.loc_test_ta0na = "N";
                            _this.physical.ta0na = false;
                            _this.physical.ta0ts_emdisplay = "";
                            _this.physical.ta0ts_meter = "";
                            _this.physical.ta0ts_fuse = "";
                            _this.physical.ta0ts_ttb = "";
                            _this.physical.ta0ts_ct = "";
                            _this.physical.ta0ts_ct = "";
                            _this.physical.ta0ts_wiring = "";
                            _this.tampering.ta0ts_anomaly_remarks = "";
                            _this.physical.ta0naremarks = "";
                        }
                        //CT ratio Current Compare
                        if (_this.transformaterRatio !== null) {
                            delete _this.transformaterRatio;
                            _this.transformaterRatio = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.transformaterRatio.loc_test_ta0na = "N";
                            _this.transformaterRatio.ta0na = false;
                            _this.transformaterRatio.ta0fc_maincurrent_bb_r = "";
                            _this.transformaterRatio.ta0fc_maincurrent_bb_y = "";
                            _this.transformaterRatio.ta0fc_maincurrent_bb_b = "";
                            _this.transformaterRatio.ta0fc_maincurrent_bb_total = "";
                            _this.transformaterRatio.ta0fc_maincurrent_dm_r = "";
                            _this.transformaterRatio.ta0fc_maincurrent_dm_y = "";
                            _this.transformaterRatio.ta0fc_maincurrent_dm_b = "";
                            _this.transformaterRatio.ta0fc_maincurrent_dm_total = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_ct_r = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_ct_y = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_ct_b = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_ct_total = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_tm_r = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_tm_y = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_tm_b = "";
                            _this.transformaterRatio.ta0fc_dupcurrent_tm_total = "";
                            _this.transformaterRatio.ta0fc_ctratio_r = "";
                            _this.transformaterRatio.ta0fc_ctratio_y = "";
                            _this.transformaterRatio.ta0fc_ctratio_b = "";
                            _this.transformaterRatio.ta0fc_per_diff_main = "";
                            _this.transformaterRatio.ta0fc_per_diff_sec = "";
                            _this.currentCompare.ta0naremarks = "";
                        }
                        //Polarity
                        if (_this.polarity !== null) {
                            delete _this.polarity;
                            _this.polarity = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.polarity.loc_test_ta0na = "N";
                            _this.polarity.ta0na = false;
                            _this.polarity.ta0po_tm_r = "";
                            _this.polarity.ta0po_tm_y = "";
                            _this.polarity.ta0po_tm_b = "";
                            _this.polarity.ta0po_mech_r = "";
                            _this.polarity.ta0po_elec_y = "";
                            _this.polarity.ta0po_elec_b = "";
                            _this.polarity.ta0po_gen_r = "";
                            _this.polarity.ta0po_gen_y = "";
                            _this.polarity.ta0po_gen_b = "";
                            _this.polarity.ta0naremarks = "";
                        }
                        //Fuse
                        if (_this.fuse !== null) {
                            delete _this.fuse;
                            _this.fuse = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.fuse.loc_test_ta0na = "N";
                            _this.fuse.ta0na = false;
                            _this.fuse.loc_ta0ft_fuse_contact = null;
                            _this.fuse.ta0ft_fuse_contact = '';
                            _this.fuse.loc_ta0ft_neon_glow = null;
                            _this.fuse.ta0ft_neon_glow = '';
                            _this.fuse.ta0naremarks = '';
                            _this.changeUiViewFuseNeon('fuse', '');
                            _this.changeUiViewFuseNeon('neon', '');
                        }
                        //Magnet
                        if (_this.magnet !== null) {
                            delete _this.magnet;
                            _this.magnet = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.magnet.loc_test_ta0na = "N";
                            _this.magnet.ta0na = false;
                            _this.magnet.loc_ta0mt_meter = null;
                            _this.magnet.ta0mt_meter = null;
                            _this.magnet.loc_ta0mt_fuse_carrier = null;
                            _this.magnet.loc_ta0mt_fuse_cartridge = null;
                            _this.magnet.ta0naremarks = '';
                        }
                        //Accuracy Test
                        if (_this.accuracy3P.ta0na == true) {
                            _this.accuracy3P.ta0naremarks = '';
                        }
                        else if (_this.accuracy3P.ta0na == false) {
                            if (_this.valueChangeAccuracy == 'before') {
                                if (_this.accuracy3P.ta0testind == 'M') {
                                    _this.accuracy3P.ta0at_timecalc_1 = '';
                                    _this.accuracy3P.ta0at_timecalc_2 = '';
                                    _this.accuracy3P.ta0at_timecalc_3 = '';
                                    _this.accuracy3P.ta0at_timemeas_1 = '';
                                    _this.accuracy3P.ta0at_timemeas_2 = '';
                                    _this.accuracy3P.ta0at_timemeas_3 = '';
                                    _this.accuracy3P.ta0at_test1 = '';
                                    _this.accuracy3P.ta0at_test2 = '';
                                    _this.accuracy3P.ta0at_test3 = '';
                                    _this.accuracy3P.ta0at_test3 = '';
                                    _this.accuracy3P.ta0at_avg = '';
                                }
                                else if (_this.accuracy3P.ta0testind == 'P') {
                                    _this.accuracy3P.ta0at_pteserialnum = '';
                                    _this.accuracy3P.ta0at_voltage_r = '';
                                    _this.accuracy3P.ta0at_voltage_y = '';
                                    _this.accuracy3P.ta0at_voltage_b = '';
                                    _this.accuracy3P.ta0at_current_r = '';
                                    _this.accuracy3P.ta0at_current_y = '';
                                    _this.accuracy3P.ta0at_current_b = '';
                                    _this.accuracy3P.ta0at_power_r = '';
                                    _this.accuracy3P.ta0at_power_y = '';
                                    _this.accuracy3P.ta0at_power_b = '';
                                    _this.accuracy3P.ta0at_powerfactor_r = '';
                                    _this.accuracy3P.ta0at_powerfactor_y = '';
                                    _this.accuracy3P.ta0at_powerfactor_b = '';
                                    _this.accuracy3P.ta0at_test1 = '';
                                    _this.accuracy3P.ta0at_test2 = '';
                                    _this.accuracy3P.ta0at_test3 = '';
                                    _this.accuracy3P.ta0at_avg = '';
                                }
                            }
                            else if (_this.valueChangeAccuracy == 'after') {
                                _this.accuracy3P_N.ta4ma_date = '';
                                _this.accuracy3P_N.ta4ma_test1 = '';
                                _this.accuracy3P_N.ta4ma_test2 = '';
                                _this.accuracy3P_N.ta4ma_test3 = '';
                                _this.accuracy3P_N.ta4ma_avg = '';
                            }
                        }
                        if (_this.currentoverall !== null) {
                            delete _this.currentoverall;
                            _this.currentoverall = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.currentoverall.ta4cur_diff_name = '';
                            _this.currentoverall.ta4cur_diff_tx = '';
                            _this.currentoverall.ta4cur_overall_totalpill = '';
                            _this.currentoverall.ta4cur_overall_totalbus = '';
                            _this.currentoverall.ta4cur_diff_overall = '';
                        }
                        if (_this.meterRegister !== null) {
                            delete _this.meterRegister;
                            _this.meterRegister = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            _this.meterRegister.ta4pts = '';
                        }
                        var meterDailTest = _this.item.json.ta0feeder.filter((function (item) {
                            if ((item.eFeederMainDeviceAllocationType === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER || item.nFeederMainDeviceAllocationType === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER)) {
                                // this.hideDailTest = true;
                                return item;
                            }
                        }));
                        var multiassestLocciCurrent = _this.item.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                        // this.currentDiff = [];
                        for (var i = 0; i < meterDailTest.length; i++) {
                            if (multiassestLocciCurrent.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN && multiassestLocciCurrent.ta0allocationtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER) {
                                var serialNo_main = meterDailTest[i].multiassetlocci.filter((function (item) {
                                    if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                                        // this.serial_Number.push({ serial: item.ta0serialnum });
                                        delete _this.currentDiff;
                                        _this.currentDiff = [];
                                        var currentDiff = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                                        _this.serial_Number = item.ta0serialnum;
                                        currentDiff.ta4serialNum = _this.serial_Number;
                                        currentDiff.ta4cur_R_pil = null;
                                        currentDiff.ta4cur_Y_pil = null;
                                        currentDiff.ta4cur_Y_pil = null;
                                        currentDiff.ta4cur_B_pil = null;
                                        currentDiff.ta4cur_R_busbar = null;
                                        currentDiff.ta4cur_Y_busbar = null;
                                        currentDiff.ta4cur_B_busbar = null;
                                        currentDiff.ta4cur_total_pill = null;
                                        currentDiff.ta4cur_total_bus = null;
                                        _this.currentDiff.push(currentDiff);
                                        return item.ta0serialnum;
                                    }
                                }));
                            }
                            else if (multiassestLocciCurrent.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && multiassestLocciCurrent.ta0allocationtype === __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER) {
                                var serialNo_check = meterDailTest[i].multiassetlocci.filter((function (item) {
                                    if (multiassestLocciCurrent.ta0bcrmuploadindicator === item.ta0bcrmuploadindicator && multiassestLocciCurrent.ta0allocationtype === item.ta0allocationtype) {
                                        // this.serial_Number.push({ serial: item.ta0serialnum });
                                        var currentDiff = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                                        delete _this.currentDiff;
                                        _this.currentDiff = [];
                                        _this.serial_Number = item.ta0serialnum;
                                        currentDiff.ta4serialNum = _this.serial_Number;
                                        currentDiff.ta4cur_R_pil = null;
                                        currentDiff.ta4cur_Y_pil = null;
                                        currentDiff.ta4cur_Y_pil = null;
                                        currentDiff.ta4cur_B_pil = null;
                                        currentDiff.ta4cur_R_busbar = null;
                                        currentDiff.ta4cur_Y_busbar = null;
                                        currentDiff.ta4cur_B_busbar = null;
                                        currentDiff.ta4cur_total_pill = null;
                                        currentDiff.ta4cur_total_bus = null;
                                        _this.currentDiff.push(currentDiff);
                                        return item.ta0serialnum;
                                    }
                                }));
                            }
                        }
                        // Reset 
                        delete _this.meterRegisterAf;
                        _this.meterRegisterAf = {};
                        delete _this.meterRegisterAfter;
                        _this.meterRegisterAfter = [];
                        // Meter Register After
                        for (var i = 0; i < 3; i++) {
                            var register = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            register.ta4ma_reg_start = "";
                            register.ta4ma_reg_stop = "";
                            register.ta4ma_reg_usage = "";
                            register.ta4ma_reg_error = "";
                            register.type = i + 1;
                            _this.meterRegisterAfter.push(register);
                        }
                        delete _this.meterRegisterBf;
                        _this.meterRegisterBf = {};
                        delete _this.meterRegisterBefore;
                        _this.meterRegisterBefore = [];
                        // Meter Register Before
                        for (var i = 0; i < 3; i++) {
                            var register = new __WEBPACK_IMPORTED_MODULE_3__pojo_DeviceTest__["a" /* DeviceTest */]();
                            register.ta4ma_reg_start = "";
                            register.ta4ma_reg_stop = "";
                            register.ta4ma_reg_usage = "";
                            register.ta4ma_reg_error = "";
                            register.type = i + 1;
                            _this.meterRegisterBefore.push(register);
                        }
                        // Validate Input
                        _this.checkTestTypeField();
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * Created :Ameer (10/7/2019)
     * Description: Check testype that already fill in will change the color to greem
     */
    SealLvInspectPage.prototype.checkTestTypeField = function () {
        debugger;
        //Physical Test
        if ((typeof (this.physical.ta0ts_emdisplay) !== 'undefined' && this.physical.ta0ts_emdisplay !== null && this.physical.ta0ts_emdisplay !== "") &&
            (typeof (this.physical.ta0ts_meter) !== 'undefined' && this.physical.ta0ts_meter !== null && this.physical.ta0ts_meter !== "") &&
            (typeof (this.physical.ta0ts_fuse) !== 'undefined' && this.physical.ta0ts_fuse !== null && this.physical.ta0ts_fuse !== "") &&
            (typeof (this.physical.ta0ts_ttb) !== 'undefined' && this.physical.ta0ts_ttb !== null && this.physical.ta0ts_ttb !== "") &&
            (typeof (this.physical.ta0ts_ct) !== 'undefined' && this.physical.ta0ts_ct !== null && this.physical.ta0ts_ct !== "") &&
            (typeof (this.physical.ta0ts_ct) !== 'undefined' && this.physical.ta0ts_ct !== null && this.physical.ta0ts_ct !== "") &&
            (typeof (this.physical.ta0ts_wiring) !== 'undefined' && this.physical.ta0ts_wiring !== null && this.physical.ta0ts_wiring !== "") &&
            (typeof (this.tampering.ta0ts_anomaly_remarks) !== 'undefined' && this.tampering.ta0ts_anomaly_remarks !== null && this.tampering.ta0ts_anomaly_remarks !== "")
            || (typeof (this.physical.ta0naremarks) !== 'undefined' && this.physical.ta0naremarks !== null && this.physical.ta0naremarks !== "")) {
            this.validatePhysicalTest = true;
        }
        else {
            this.validatePhysicalTest = false;
        }
        //CT Ratio && Current Comparison Test
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_bb_total !== null && this.transformaterRatio.ta0fc_maincurrent_bb_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_r) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_r !== null && this.transformaterRatio.ta0fc_maincurrent_dm_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_y) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_y !== null && this.transformaterRatio.ta0fc_maincurrent_dm_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_b) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_b !== null && this.transformaterRatio.ta0fc_maincurrent_dm_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) !== 'undefined' && this.transformaterRatio.ta0fc_maincurrent_dm_total !== null && this.transformaterRatio.ta0fc_maincurrent_dm_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_r) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_r) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_y) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_b) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) !== 'undefined' && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_ctratio_r) !== 'undefined' && this.transformaterRatio.ta0fc_ctratio_r !== null && this.transformaterRatio.ta0fc_ctratio_r !== "") &&
            (typeof (this.transformaterRatio.ta0fc_ctratio_y) !== 'undefined' && this.transformaterRatio.ta0fc_ctratio_y !== null && this.transformaterRatio.ta0fc_ctratio_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_ctratio_b) !== 'undefined' && this.transformaterRatio.ta0fc_ctratio_b !== null && this.transformaterRatio.ta0fc_ctratio_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_per_diff_main) !== 'undefined' && this.transformaterRatio.ta0fc_per_diff_main !== null && this.transformaterRatio.ta0fc_per_diff_main !== "") &&
            (typeof (this.transformaterRatio.ta0fc_per_diff_sec) !== 'undefined' && this.transformaterRatio.ta0fc_per_diff_sec !== null && this.transformaterRatio.ta0fc_per_diff_sec !== "")
            || (typeof (this.transformaterRatio.ta0naremarks) !== 'undefined' && this.transformaterRatio.ta0naremarks !== null && this.transformaterRatio.ta0naremarks !== "")) {
            this.validateCtRatioCurrentTest = true;
        }
        else {
            this.validateCtRatioCurrentTest = false;
        }
        //Polarity Test
        /**
         * Desctiption  : Adding condition to checking remarks.
         * Edited       : Alif (04.09.2019)
         */
        // checking if user not do and key in remarks
        if (this.polarity.loc_test_ta0na === "Y") {
            if ((typeof (this.polarity.ta0naremarks) !== 'undefined' && this.polarity.ta0naremarks !== null && this.polarity.ta0naremarks !== "")) {
                this.validatePolarityTest = true;
            }
            else {
                this.validatePolarityTest = false;
            }
        }
        else {
            if (this.meterCategoryOptions == 'M') {
                if ((typeof (this.polarity.ta0po_tm_r) !== 'undefined' && this.polarity.ta0po_tm_r !== null && this.polarity.ta0po_tm_r !== "") ||
                    (typeof (this.polarity.ta0po_tm_y) !== 'undefined' && this.polarity.ta0po_tm_y !== null && this.polarity.ta0po_tm_y !== "") ||
                    (typeof (this.polarity.ta0po_tm_b) !== 'undefined' && this.polarity.ta0po_tm_b !== null && this.polarity.ta0po_tm_b !== "")) {
                    this.validatePolarityTest = true;
                }
                else {
                    this.validatePolarityTest = false;
                }
            }
            else if (this.meterCategoryOptions == 'E') {
                if ((typeof (this.polarity.ta0po_mech_r) !== 'undefined' && this.polarity.ta0po_mech_r !== null && this.polarity.ta0po_mech_r !== "") ||
                    (typeof (this.polarity.ta0po_elec_y) !== 'undefined' && this.polarity.ta0po_elec_y !== null && this.polarity.ta0po_elec_y !== "") ||
                    (typeof (this.polarity.ta0po_elec_b) !== 'undefined' && this.polarity.ta0po_elec_b !== null && this.polarity.ta0po_elec_b !== "")) {
                    this.validatePolarityTest = true;
                }
                else {
                    this.validatePolarityTest = false;
                }
            }
            else if (this.meterCategoryOptions == 'G') {
                if ((typeof (this.polarity.ta0po_gen_r) !== 'undefined' && this.polarity.ta0po_gen_r !== null && this.polarity.ta0po_gen_r !== "") ||
                    (typeof (this.polarity.ta0po_gen_y) !== 'undefined' && this.polarity.ta0po_gen_y !== null && this.polarity.ta0po_gen_y !== "") ||
                    (typeof (this.polarity.ta0po_gen_b) !== 'undefined' && this.polarity.ta0po_gen_b !== null && this.polarity.ta0po_gen_b !== "")) {
                    this.validatePolarityTest = true;
                }
                else {
                    this.validatePolarityTest = false;
                }
            }
            else {
                this.validatePolarityTest = false;
            }
        }
        //Fuse Test
        if ((typeof (this.fuse.loc_ta0ft_fuse_contact) !== 'undefined' && this.fuse.loc_ta0ft_fuse_contact !== null) || (typeof (this.fuse.loc_ta0ft_neon_glow) !== 'undefined' && this.fuse.loc_ta0ft_neon_glow !== null)) {
            // Fuse Contact
            if ((typeof (this.fuse.ta0ft_fuse_contact) !== 'undefined' && this.fuse.ta0ft_fuse_contact !== null && this.fuse.ta0ft_fuse_contact !== "")) {
                this.validateFuseTest = true;
            }
            else {
                this.validateFuseTest = false;
            }
            // Neon Test
            if ((typeof (this.fuse.ta0ft_fuse_contact) !== 'undefined' && this.fuse.ta0ft_fuse_contact !== null && this.fuse.ta0ft_fuse_contact !== "")) {
                this.validateFuseTest = true;
            }
            else {
                this.validateFuseTest = false;
            }
        }
        else if (typeof (this.fuse.ta0naremarks) !== 'undefined' && this.fuse.ta0naremarks !== null && this.fuse.ta0naremarks !== "") {
            this.validateFuseTest = true;
        }
        else {
            this.validateFuseTest = false;
        }
        //MAGNET TEST
        if (this.magnet.ta0na == false) {
            if ((typeof (this.magnet.loc_ta0mt_meter) !== 'undefined' && this.magnet.loc_ta0mt_meter !== null)) {
                if (this.magnet.loc_ta0mt_meter === 'Lain2') {
                    if ((typeof (this.magnet.ta0mt_meter) !== 'undefined' && this.magnet.ta0mt_meter !== null) || (typeof (this.magnet.ta0mt_meter) !== 'undefined' && this.magnet.ta0mt_meter !== null)) {
                        this.validateMagnetTest = true;
                    }
                    else {
                        this.validateMagnetTest = false;
                    }
                }
                else {
                    this.validateMagnetTest = true;
                }
            }
            else if ((typeof (this.magnet.loc_ta0mt_fuse_carrier) !== 'undefined' && this.magnet.loc_ta0mt_fuse_carrier !== null)) {
                if (this.magnet.loc_ta0mt_fuse_carrier === 'Lain2') {
                    if ((typeof (this.magnet.ta0mt_fuse_carrier) !== 'undefined' && this.magnet.ta0mt_fuse_carrier !== null)) {
                        this.validateMagnetTest = true;
                    }
                    else {
                        this.validateMagnetTest = false;
                    }
                }
                else {
                    this.validateMagnetTest = true;
                }
            }
            else if ((typeof (this.magnet.loc_ta0mt_fuse_cartridge) !== 'undefined' && this.magnet.loc_ta0mt_fuse_cartridge !== null)) {
                if (this.magnet.loc_ta0mt_fuse_cartridge == 'Lain2') {
                    if ((typeof (this.magnet.ta0mt_fuse_cartridge) !== 'undefined' && this.magnet.ta0mt_fuse_cartridge !== null)) {
                        this.validateMagnetTest = true;
                    }
                    else {
                        this.validateMagnetTest = false;
                    }
                }
                else {
                    this.validateMagnetTest = true;
                }
            }
            else {
                this.validateMagnetTest = false;
            }
        }
        else if (this.magnet.ta0na == true) {
            if ((typeof (this.magnet.ta0naremarks) !== 'undefined' && this.magnet.ta0naremarks !== null && this.magnet.ta0naremarks !== '')) {
                this.validateMagnetTest = true;
            }
            else {
                this.validateMagnetTest = false;
            }
        }
        // Accuracy Test
        if (this.accuracy3P.ta0na == true) {
            if ((typeof (this.accuracy3P.ta0naremarks) !== 'undefined' && this.accuracy3P.ta0naremarks !== null && this.accuracy3P.ta0naremarks !== '')) {
                this.validateAccuracyTest = true;
            }
            else {
                this.validateAccuracyTest = false;
            }
        }
        else if (this.accuracy3P.ta0na == false) {
            if (this.valueChangeAccuracy == 'before') {
                if (this.accuracy3P.ta0testind == 'M') {
                    if ((typeof (this.accuracy3P.ta0at_timecalc_1) !== 'undefined' && this.accuracy3P.ta0at_timecalc_1 !== null && this.accuracy3P.ta0at_timecalc_1 !== '') &&
                        (typeof (this.accuracy3P.ta0at_timecalc_2) !== 'undefined' && this.accuracy3P.ta0at_timecalc_2 !== null && this.accuracy3P.ta0at_timecalc_2 !== '') &&
                        (typeof (this.accuracy3P.ta0at_timecalc_3) !== 'undefined' && this.accuracy3P.ta0at_timecalc_3 !== null && this.accuracy3P.ta0at_timecalc_3 !== '') &&
                        (typeof (this.accuracy3P.ta0at_timemeas_1) !== 'undefined' && this.accuracy3P.ta0at_timemeas_1 !== null && this.accuracy3P.ta0at_timemeas_1 !== '') &&
                        (typeof (this.accuracy3P.ta0at_timemeas_2) !== 'undefined' && this.accuracy3P.ta0at_timemeas_2 !== null && this.accuracy3P.ta0at_timemeas_2 !== '') &&
                        (typeof (this.accuracy3P.ta0at_timemeas_3) !== 'undefined' && this.accuracy3P.ta0at_timemeas_3 !== null && this.accuracy3P.ta0at_timemeas_3 !== '') &&
                        (typeof (this.accuracy3P.ta0at_test1) !== 'undefined' && this.accuracy3P.ta0at_test1 !== null && this.accuracy3P.ta0at_test1 !== '') &&
                        (typeof (this.accuracy3P.ta0at_test2) !== 'undefined' && this.accuracy3P.ta0at_test2 !== null && this.accuracy3P.ta0at_test2 !== '') &&
                        (typeof (this.accuracy3P.ta0at_test3) !== 'undefined' && this.accuracy3P.ta0at_test3 !== null && this.accuracy3P.ta0at_test3 !== '') &&
                        (typeof (this.accuracy3P.ta0at_test3) !== 'undefined' && this.accuracy3P.ta0at_test3 !== null && this.accuracy3P.ta0at_test3 !== '') &&
                        (typeof (this.accuracy3P.ta0at_avg) !== 'undefined' && this.accuracy3P.ta0at_avg !== null && this.accuracy3P.ta0at_avg !== '')) {
                        this.validateAccuracyTest = true;
                    }
                    else {
                        this.validateAccuracyTest = false;
                    }
                }
                else if (this.accuracy3P.ta0testind == 'P') {
                    if ((typeof (this.accuracy3P.ta0at_pteserialnum) !== 'undefined' && this.accuracy3P.ta0at_pteserialnum !== null && this.accuracy3P.ta0at_pteserialnum !== '') &&
                        (typeof (this.accuracy3P.ta0at_voltage_r) !== 'undefined' && this.accuracy3P.ta0at_voltage_r !== null && this.accuracy3P.ta0at_voltage_r !== '') &&
                        (typeof (this.accuracy3P.ta0at_voltage_y) !== 'undefined' && this.accuracy3P.ta0at_voltage_y !== null && this.accuracy3P.ta0at_voltage_y !== '') &&
                        (typeof (this.accuracy3P.ta0at_voltage_b) !== 'undefined' && this.accuracy3P.ta0at_voltage_b !== null && this.accuracy3P.ta0at_voltage_b !== '') &&
                        (typeof (this.accuracy3P.ta0at_current_r) !== 'undefined' && this.accuracy3P.ta0at_current_r !== null && this.accuracy3P.ta0at_current_r !== '') &&
                        (typeof (this.accuracy3P.ta0at_current_y) !== 'undefined' && this.accuracy3P.ta0at_current_y !== null && this.accuracy3P.ta0at_current_y !== '') &&
                        (typeof (this.accuracy3P.ta0at_current_b) !== 'undefined' && this.accuracy3P.ta0at_current_b !== null && this.accuracy3P.ta0at_current_b !== '') &&
                        (typeof (this.accuracy3P.ta0at_power_r) !== 'undefined' && this.accuracy3P.ta0at_power_r !== null && this.accuracy3P.ta0at_power_r !== '') &&
                        (typeof (this.accuracy3P.ta0at_power_y) !== 'undefined' && this.accuracy3P.ta0at_power_y !== null && this.accuracy3P.ta0at_power_y !== '') &&
                        (typeof (this.accuracy3P.ta0at_power_b) !== 'undefined' && this.accuracy3P.ta0at_power_b !== null && this.accuracy3P.ta0at_power_b !== '') &&
                        (typeof (this.accuracy3P.ta0at_powerfactor_r) !== 'undefined' && this.accuracy3P.ta0at_powerfactor_r !== null && this.accuracy3P.ta0at_powerfactor_r !== '') &&
                        (typeof (this.accuracy3P.ta0at_powerfactor_y) !== 'undefined' && this.accuracy3P.ta0at_powerfactor_y !== null && this.accuracy3P.ta0at_powerfactor_y !== '') &&
                        (typeof (this.accuracy3P.ta0at_powerfactor_b) !== 'undefined' && this.accuracy3P.ta0at_powerfactor_b !== null && this.accuracy3P.ta0at_powerfactor_b !== '') &&
                        (typeof (this.accuracy3P.ta0at_test1) !== 'undefined' && this.accuracy3P.ta0at_test1 !== null && this.accuracy3P.ta0at_test1 !== '') &&
                        (typeof (this.accuracy3P.ta0at_test2) !== 'undefined' && this.accuracy3P.ta0at_test2 !== null && this.accuracy3P.ta0at_test2 !== '') &&
                        (typeof (this.accuracy3P.ta0at_test3) !== 'undefined' && this.accuracy3P.ta0at_test3 !== null && this.accuracy3P.ta0at_test3 !== '') &&
                        (typeof (this.accuracy3P.ta0at_avg) !== 'undefined' && this.accuracy3P.ta0at_avg !== null && this.accuracy3P.ta0at_avg !== '')) {
                        this.validateAccuracyTest = true;
                    }
                    else {
                        this.validateAccuracyTest = false;
                    }
                }
            }
            else if (this.valueChangeAccuracy == 'after') {
                if ((typeof (this.accuracy3P_N.ta4ma_date) !== 'undefined' && this.accuracy3P_N.ta4ma_date !== null && this.accuracy3P_N.ta4ma_date !== '') &&
                    (typeof (this.accuracy3P_N.ta4ma_test1) !== 'undefined' && this.accuracy3P_N.ta4ma_test1 !== null && this.accuracy3P_N.ta4ma_test1 !== '') &&
                    (typeof (this.accuracy3P_N.ta4ma_test2) !== 'undefined' && this.accuracy3P_N.ta4ma_test2 !== null && this.accuracy3P_N.ta4ma_test2 !== '') &&
                    (typeof (this.accuracy3P_N.ta4ma_test3) !== 'undefined' && this.accuracy3P_N.ta4ma_test3 !== null && this.accuracy3P_N.ta4ma_test3 !== '') &&
                    (typeof (this.accuracy3P_N.ta4ma_avg) !== 'undefined' && this.accuracy3P_N.ta4ma_avg !== null && this.accuracy3P_N.ta4ma_avg !== '')) {
                    this.validateAccuracyTest = true;
                }
                else {
                    this.validateAccuracyTest = false;
                }
            }
        }
        //Witness Test
        // Dail & Meter Test
        if (this.hideDailTest === true) {
            if ((typeof (this.currentoverall.ta4cur_diff_name) !== 'undefined' && this.currentoverall.ta4cur_diff_name !== null && this.currentoverall.ta4cur_diff_name !== '') &&
                (typeof (this.currentoverall.ta4cur_diff_tx) !== 'undefined' && this.currentoverall.ta4cur_diff_tx !== null && this.currentoverall.ta4cur_diff_tx !== '') &&
                (typeof (this.currentoverall.ta4cur_overall_totalpill) !== 'undefined' && this.currentoverall.ta4cur_overall_totalpill !== null && this.currentoverall.ta4cur_overall_totalpill !== '') &&
                (typeof (this.currentoverall.ta4cur_overall_totalbus) !== 'undefined' && this.currentoverall.ta4cur_overall_totalbus !== null && this.currentoverall.ta4cur_overall_totalbus !== '') &&
                (typeof (this.currentoverall.ta4cur_diff_overall) !== 'undefined' && this.currentoverall.ta4cur_diff_overall !== null && this.currentoverall.ta4cur_diff_overall !== '') &&
                (typeof (this.meterRegister.ta4pts) !== 'undefined' && this.meterRegister.ta4pts !== null && this.meterRegister.ta4pts !== '')) {
                this.validateDialTest = true;
            }
            if (this.valueChangeRegisterTest === "before") {
                for (var a = 0; a < this.meterRegisterBefore.length; a++) {
                    if ((typeof (this.meterRegisterBefore[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_start !== null && this.meterRegisterBefore[a].ta4ma_reg_start !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_stop !== null && this.meterRegisterBefore[a].ta4ma_reg_stop !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_usage !== null && this.meterRegisterBefore[a].ta4ma_reg_usage !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_error !== null && this.meterRegisterBefore[a].ta4ma_reg_error !== '')) {
                        this.validateDialTest = true;
                    }
                    else {
                        this.validateDialTest = false;
                    }
                }
            }
            else if (this.valueChangeRegisterTest === "after") {
                for (var a = 0; a < this.meterRegisterAfter.length; a++) {
                    if ((typeof (this.meterRegisterAfter[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_start !== null && this.meterRegisterAfter[a].ta4ma_reg_start !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_stop !== null && this.meterRegisterAfter[a].ta4ma_reg_stop !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_usage !== null && this.meterRegisterAfter[a].ta4ma_reg_usage !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_error !== null && this.meterRegisterAfter[a].ta4ma_reg_error !== '')) {
                        this.validateDialTest = true;
                    }
                    else {
                        this.validateDialTest = false;
                    }
                }
            }
            else {
                this.validateDialTest = false;
            }
        }
    };
    /**
     * Created By: Ameer (15/7/2019)
     * Description: Reset test based on the test selected
     */
    SealLvInspectPage.prototype.resetTest = function (TestType) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'LV Inspection ?',
            message: 'Reset selected test data ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                    }
                }, {
                    text: 'Agree',
                    handler: function () {
                        debugger;
                        switch (TestType) {
                            case 'Physical': {
                                _this.physical.loc_test_ta0na = "N";
                                _this.hideShowPhysical();
                                _this.physical.ta0ts_emdisplay = "";
                                _this.physical.ta0ts_meter = "";
                                _this.physical.ta0ts_fuse = "";
                                _this.physical.ta0ts_ttb = "";
                                _this.physical.ta0ts_ct = "";
                                _this.physical.ta0ts_ct = "";
                                _this.physical.ta0ts_wiring = "";
                                _this.tampering.ta0ts_anomaly_remarks = "";
                                _this.physical.ta0naremarks = "";
                                break;
                            }
                            case 'transformerRatio': {
                                //CT ratio Current Compare
                                _this.transformaterRatio.loc_test_ta0na = "N";
                                _this.hideShowCurrentCompare();
                                _this.transformaterRatio.ta0fc_maincurrent_bb_r = "";
                                _this.transformaterRatio.ta0fc_maincurrent_bb_y = "";
                                _this.transformaterRatio.ta0fc_maincurrent_bb_b = "";
                                _this.transformaterRatio.ta0fc_maincurrent_bb_total = "";
                                _this.transformaterRatio.ta0fc_maincurrent_dm_r = "";
                                _this.transformaterRatio.ta0fc_maincurrent_dm_y = "";
                                _this.transformaterRatio.ta0fc_maincurrent_dm_b = "";
                                _this.transformaterRatio.ta0fc_maincurrent_dm_total = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_ct_r = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_ct_y = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_ct_b = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_ct_total = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_tm_r = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_tm_y = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_tm_b = "";
                                _this.transformaterRatio.ta0fc_dupcurrent_tm_total = "";
                                _this.transformaterRatio.ta0fc_ctratio_r = "";
                                _this.transformaterRatio.ta0fc_ctratio_y = "";
                                _this.transformaterRatio.ta0fc_ctratio_b = "";
                                _this.transformaterRatio.ta0fc_per_diff_main = "";
                                _this.transformaterRatio.ta0fc_per_diff_sec = "";
                                _this.currentCompare.ta0naremarks = "";
                                break;
                            }
                            case 'polarity': {
                                //Polarity
                                _this.polarity.loc_test_ta0na = "N";
                                _this.hideShowPolarity();
                                _this.meterCategoryOptions = null;
                                _this.resetMeterCategoryOptions("");
                                _this.polarity.ta0po_tm_r = "";
                                _this.polarity.ta0po_tm_y = "";
                                _this.polarity.ta0po_tm_b = "";
                                _this.polarity.ta0po_mech_r = "";
                                _this.polarity.ta0po_elec_y = "";
                                _this.polarity.ta0po_elec_b = "";
                                _this.polarity.ta0po_gen_r = "";
                                _this.polarity.ta0po_gen_y = "";
                                _this.polarity.ta0po_gen_b = "";
                                break;
                            }
                            case 'fuse': {
                                //fuse
                                _this.fuse.loc_test_ta0na = "N";
                                _this.hideShowFuseTest();
                                _this.fuse.loc_ta0ft_fuse_contact = null;
                                _this.fuse.ta0ft_fuse_contact = '';
                                _this.fuse.loc_ta0ft_neon_glow = null;
                                _this.fuse.ta0ft_neon_glow = '';
                                _this.fuse.ta0naremarks = '';
                                break;
                            }
                            case 'magnet': {
                                //Magnet
                                _this.magnet.loc_test_ta0na = "N";
                                _this.hideShowMagnet();
                                _this.magnet.loc_ta0mt_meter = null;
                                _this.magnet.loc_ta0mt_fuse_carrier = null;
                                _this.magnet.loc_ta0mt_fuse_cartridge = null;
                                _this.changeUiViewMagentTest('meter', "");
                                _this.changeUiViewMagentTest('fuse_carrier', "");
                                _this.changeUiViewMagentTest('fuse_cartridge', "");
                                _this.magnet.ta0mt_meter = null;
                                _this.magnet.ta0mt_fuse_carrier = null;
                                _this.magnet.ta0mt_fuse_cartridge = null;
                                _this.magnet.ta0naremarks = '';
                                break;
                            }
                            case 'accuracy': {
                                //Accuracy
                                _this.accuracy3P.loc_test_ta0na = "N";
                                _this.hideShowMeter();
                                // Default
                                _this.accuracy3P.ta0at_test1 = '';
                                _this.accuracy3P.ta0at_test2 = '';
                                _this.accuracy3P.ta0at_test3 = '';
                                _this.accuracy3P.ta0at_avg = '';
                                _this.accuracy3P.ta0testind = "M";
                                // Manual
                                _this.accuracy3P.ta0at_timecalc_1 = '';
                                _this.accuracy3P.ta0at_timecalc_2 = '';
                                _this.accuracy3P.ta0at_timecalc_3 = '';
                                _this.accuracy3P.ta0at_timemeas_1 = '';
                                _this.accuracy3P.ta0at_timemeas_2 = '';
                                _this.accuracy3P.ta0at_timemeas_3 = '';
                                // Portable
                                _this.accuracy3P.ta0at_pteserialnum = '';
                                _this.accuracy3P.ta0at_voltage_r = '';
                                _this.accuracy3P.ta0at_voltage_y = '';
                                _this.accuracy3P.ta0at_voltage_b = '';
                                _this.accuracy3P.ta0at_current_r = '';
                                _this.accuracy3P.ta0at_current_y = '';
                                _this.accuracy3P.ta0at_current_b = '';
                                _this.accuracy3P.ta0at_power_r = '';
                                _this.accuracy3P.ta0at_power_y = '';
                                _this.accuracy3P.ta0at_power_b = '';
                                _this.accuracy3P.ta0at_powerfactor_r = '';
                                _this.accuracy3P.ta0at_powerfactor_y = '';
                                _this.accuracy3P.ta0at_powerfactor_b = '';
                                _this.accuracy3P.ta0naremarks = '';
                                _this.accuracy3P_N.ta4ma_date = '';
                                _this.accuracy3P_N.ta4ma_test1 = '';
                                _this.accuracy3P_N.ta4ma_test2 = '';
                                _this.accuracy3P_N.ta4ma_test3 = '';
                                _this.accuracy3P_N.ta4ma_avg = '';
                                break;
                            }
                            case 'dail': {
                                if (_this.hideDailTest === true) {
                                    _this.currentoverall.ta4cur_diff_name = '';
                                    _this.currentoverall.ta4cur_diff_tx = '';
                                    _this.currentoverall.ta4cur_overall_totalpill = '';
                                    _this.currentoverall.ta4cur_overall_totalbus = '';
                                    _this.currentoverall.ta4cur_diff_overall = '';
                                    _this.meterRegister.ta4pts = '';
                                    if (_this.valueChangeRegisterTest === "before") {
                                        for (var a = 0; a < _this.meterRegisterBefore.length; a++) {
                                            _this.meterRegisterBefore[a].ta4ma_reg_start = '';
                                            _this.meterRegisterBefore[a].ta4ma_reg_usage = '';
                                            _this.meterRegisterBefore[a].ta4ma_reg_stop = '';
                                            _this.meterRegisterBefore[a].ta4ma_reg_error = '';
                                        }
                                    }
                                    else if (_this.valueChangeRegisterTest === "after") {
                                        for (var a = 0; a < _this.meterRegisterAfter.length; a++) {
                                            _this.meterRegisterAfter[a].ta4ma_reg_start == '';
                                            _this.meterRegisterAfter[a].ta4ma_reg_stop == '';
                                            _this.meterRegisterAfter[a].ta4ma_reg_usage == '';
                                            _this.meterRegisterAfter[a].ta4ma_reg_error == '';
                                        }
                                    }
                                    for (var b = 0; b < _this.currentDiff.length; b++) {
                                        _this.currentDiff[b].ta4cur_R_pil = '';
                                        _this.currentDiff[b].ta4cur_Y_pil = '';
                                        _this.currentDiff[b].ta4cur_B_pil = '';
                                        _this.currentDiff[b].ta4cur_R_busbar = '';
                                        _this.currentDiff[b].ta4cur_Y_busbar = '';
                                        _this.currentDiff[b].ta4cur_B_busbar = '';
                                        _this.currentDiff[b].ta4cur_total_pill = '';
                                        _this.currentDiff[b].ta4cur_total_bus = '';
                                    }
                                }
                                break;
                            }
                        }
                        // Checking User Input
                        _this.checkTestTypeField();
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * Description  : Change UI with reset the field.
     * Created      : Alif (15.07.2019)
     */
    SealLvInspectPage.prototype.resetMeterCategoryOptions = function (value) {
        console.log("reset value and ui for polarity test..");
        if (value === "M") {
            // Reset value 
            // this.polarity.ta0po_tm_r = "";
            // this.polarity.ta0po_tm_y = "";
            // this.polarity.ta0po_tm_b = "";
            // Reset value
            this.polarity.ta0po_mech_r = "";
            this.polarity.ta0po_elec_y = "";
            this.polarity.ta0po_elec_b = "";
            // Reset value
            this.polarity.ta0po_gen_r = "";
            this.polarity.ta0po_gen_y = "";
            this.polarity.ta0po_gen_b = "";
        }
        else if (value === "E") {
            // Reset value 
            this.polarity.ta0po_tm_r = "";
            this.polarity.ta0po_tm_y = "";
            this.polarity.ta0po_tm_b = "";
            // Reset value
            // this.polarity.ta0po_mech_r = "";
            // this.polarity.ta0po_elec_y = "";
            // this.polarity.ta0po_elec_b = "";
            // Reset value
            this.polarity.ta0po_gen_r = "";
            this.polarity.ta0po_gen_y = "";
            this.polarity.ta0po_gen_b = "";
        }
        else if (value === "G") {
            // Reset value 
            this.polarity.ta0po_tm_r = "";
            this.polarity.ta0po_tm_y = "";
            this.polarity.ta0po_tm_b = "";
            // Reset value
            this.polarity.ta0po_mech_r = "";
            this.polarity.ta0po_elec_y = "";
            this.polarity.ta0po_elec_b = "";
            // Reset value
            // this.polarity.ta0po_gen_r = "";
            // this.polarity.ta0po_gen_y = "";
            // this.polarity.ta0po_gen_b = "";
        }
        else {
            // Reset value 
            this.polarity.ta0po_tm_r = "";
            this.polarity.ta0po_tm_y = "";
            this.polarity.ta0po_tm_b = "";
            // Reset value
            this.polarity.ta0po_mech_r = "";
            this.polarity.ta0po_elec_y = "";
            this.polarity.ta0po_elec_b = "";
            // Reset value
            this.polarity.ta0po_gen_r = "";
            this.polarity.ta0po_gen_y = "";
            this.polarity.ta0po_gen_b = "";
        }
    };
    /**
     * Description  : Reset all value Witness Section.
     * Created      : Alif 04.09.2019
     */
    SealLvInspectPage.prototype.resetWitness = function () {
        this.customerSignature = 'Yes';
        this.changeUiViewCustomerSignature();
        this.witness.ta0witnessname = '';
        this.witness.ta0witnessicpassport = '';
        this.witness.ta0witnessphone = '';
        this.signaturePad1.clear();
    };
    /**
     * Description  : Reset all value Witness Section.
     * Created      : Alif 04.09.2019
     */
    SealLvInspectPage.prototype.resetExaminer = function () {
        this.witness.ta0officer_station = '';
        this.signaturePad2.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealLvInspectPage.prototype, "signaturePad1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealLvInspectPage.prototype, "signaturePad2", void 0);
    SealLvInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-lv-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/deviceTestForms/seal-lv-inspect/seal-lv-inspect.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>LV Inspection</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- LV Inspection (Test List) -->\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n        (click)="showTestListSection(1)">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Test List Selection</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetAllTestInspection()" style="opacity: unset;"\n          text-end>Reset All</button>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n        (click)="showTestListSection(1)">\n        <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showTestList"></ion-icon>\n        <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showTestList"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row radio-group [(ngModel)]="testCategory" *ngIf="showTestList" (ionChange)="selectionTestList($event)">\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Physical Inspection Test</ion-label>\n        <ion-radio value="pit"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validatePhysicalTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'Physical\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>CT Ratio & Current Comparison Test</ion-label>\n        <ion-radio value="cct"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateCtRatioCurrentTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'transformerRatio\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Polarity Test</ion-label>\n        <ion-radio value="pt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validatePolarityTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'polarity\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Fuse Test</ion-label>\n        <ion-radio value="ft"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateFuseTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'fuse\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Magnet Test</ion-label>\n        <ion-radio value="mt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateMagnetTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'magnet\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Accuracy Test</ion-label>\n        <ion-radio value="acct"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateAccuracyTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'accuracy\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <!-- <ion-col col-sm-12 col-md-11 col-11 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Witness & Examiner Section</ion-label>\n        <ion-radio value="wes"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateWitnessExaminerTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col> -->\n    <ion-col col-sm-10 col-md-9 col-9 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Dail & Meter Register Test</ion-label>\n        <ion-radio value="dt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateDialTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'dail\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n  </ion-row>\n\n  <!-- PHYSICAL INSPECTION -->\n  <span *ngIf="viewPhysicalTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp;<strong>PHYSICAL EXAMINATION</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowPhysical()" [(ngModel)]="physical.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="physical.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="physical.ta0naremarks"\n              [ngClass]="(physical.ta0naremarks == \'\' || physical.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!physical.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item text-wrap>\n            <ion-label color="primary">Indication at Electronic Meter Display</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" placeholder="Please enter value" [(ngModel)]="physical.ta0ts_emdisplay"\n              [ngClass]="(physical.ta0ts_emdisplay == \'\' || physical.ta0ts_emdisplay == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label text-center> Tampering Suspect</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Meter & Fuse Label -->\n      <ion-row>\n        <ion-col col-4 col-sm-12 col-md-4>\n          <ion-item>\n            <ion-label color="primary">Meter</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-12 col-md-8>\n          <ion-item\n            [ngClass]="(physical.ta0ts_meter == \'\' || physical.ta0ts_meter == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            <ion-select [(ngModel)]="physical.ta0ts_meter" [selectOptions]="{title: \'Suspect\'}">\n              <ion-option value=""></ion-option>\n              <ion-option *ngFor="let meterCondition of meterConditions" [value]="meterCondition.json.value"\n                [selected]="meterCondition.json.value === physical.ta0ts_meter">{{ meterCondition.json.description }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Meter & Fuse Input -->\n      <ion-row>\n        <ion-col col-4 col-sm-12 col-md-4>\n          <ion-item>\n            <ion-label color="primary">Fuse</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-12 col-md-8>\n          <ion-item\n            [ngClass]="(physical.ta0ts_fuse == \'\' || physical.ta0ts_fuse == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            <ion-select [(ngModel)]="physical.ta0ts_fuse" [selectOptions]="{title: \'Suspect\'}">\n              <ion-option value=""></ion-option>\n              <ion-option *ngFor="let fuseCondition of fuseConditions" [value]="fuseCondition.json.value"\n                [selected]="fuseCondition.json.value === physical.ta0ts_fuse">{{ fuseCondition.json.description }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- TTB && CT Label -->\n      <ion-row>\n        <ion-col col-4 col-sm-12 col-md-4>\n          <ion-item>\n            <ion-label color="primary">TTB</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-12 col-md-8>\n          <ion-item\n            [ngClass]="(physical.ta0ts_ttb == \'\' || physical.ta0ts_ttb == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            <ion-select [(ngModel)]="physical.ta0ts_ttb" [selectOptions]="{title: \'Suspect\'}">\n              <ion-option value=""></ion-option>\n              <ion-option *ngFor="let ttbCondition of ttbConditions" [value]="ttbCondition.json.value"\n                [selected]="ttbCondition.json.value === physical.ta0ts_ttb">{{ ttbCondition.json.description }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- TTB && CT Input -->\n      <ion-row>\n        <ion-col col-4 col-sm-12 col-md-4>\n          <ion-item>\n            <ion-label color="primary">CT</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-12 col-md-8>\n          <ion-item\n            [ngClass]="(physical.ta0ts_ct == \'\' || physical.ta0ts_ct == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            <ion-select [(ngModel)]="physical.ta0ts_ct" [selectOptions]="{title: \'Suspect\'}">\n              <ion-option value=""></ion-option>\n              <ion-option *ngFor="let currentRatioCondition of currentRatioConditions"\n                [value]="currentRatioCondition.json.value"\n                [selected]="currentRatioCondition.json.value === physical.ta0ts_ct">\n                {{ currentRatioCondition.json.description }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Wiring -->\n      <ion-row>\n        <ion-col col-4 col-sm-12 col-md-4>\n          <ion-item>\n            <ion-label color="primary">Wiring</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-12 col-md-8>\n          <ion-item\n            [ngClass]="(physical.ta0ts_wiring == \'\' || physical.ta0ts_wiring == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            <ion-select [(ngModel)]="physical.ta0ts_wiring" [selectOptions]="{title: \'Suspect\'}">\n              <ion-option value=""></ion-option>\n              <ion-option *ngFor="let wiringCondition of wiringConditions" [value]="wiringCondition.json.value"\n                [selected]="wiringCondition.json.value === physical.ta0ts_wiring">\n                {{ wiringCondition.json.description }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Tampering Remark -->\n      <ion-row style="padding-top: 15px;">\n        <ion-col col-4 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Tampering Remark</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" placeholder="Please enter value"\n              [(ngModel)]="tampering.ta0ts_anomaly_remarks">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </span>\n\n  <!-- CT RATIO & CURRENT COMPARISON TEST -->\n  <span *ngIf="viewCtRatioCurrentTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>CT RATIO & CURRENT COMPARISON TEST</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowTransformerRatioTest()"\n            [(ngModel)]="transformaterRatio.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="transformaterRatio.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="transformaterRatio.ta0naremarks"\n              [ngClass]="(transformaterRatio.ta0naremarks == \'\' || transformaterRatio.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!transformaterRatio.ta0na">\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label>A) Primary Current (Busbar)</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Red</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Yellow</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Blue</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Total Current</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Primary Current (Busbar) -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_r"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_y"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_b"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item text-wrap>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_total" readonly="true"\n              placeholder="Auto Calculation"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label>B) Primary Current (In Display Meter)</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Red</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Yellow</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Blue</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Total Current</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Primary Current (In Display Meter) -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_r"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_y"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_b"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_total" readonly="true"\n              placeholder="Auto Calculation"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label>C) Secondary Current (CT Terminal)</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Red</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Yellow</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Blue</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Total Current</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Secondary Current (CT Terminal) -->\n      <ion-row>\n        <ion-col col4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_r"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_y"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_b"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_total" readonly="true"\n              placeholder="Auto Calculation"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label>D) Secondary Current (Meter Terminal)</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Red</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Yellow</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Blue</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Total Current</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Secondary Current (Meter Terminal) -->\n      <ion-row>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_r"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_y"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_b"\n              (ionChange)="calculateTransformaterRatio()" placeholder="Enter value">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_total" readonly="true"\n              placeholder="Auto Calculation"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label>NIH (CT Ratio)</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Red</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Yellow</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Blue</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- NIH (CT Ratio) -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_ctratio_r" placeholder="Auto Calculation"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_ctratio_y" placeholder="Auto Calculation"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_ctratio_b" placeholder="Auto Calculation"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col col-12 col-sm-12 col-md-12>\n          <ion-item no-lines>\n            <ion-label style="font-style: italic; margin-top: -10px;">\n              NIH (CT Ratio) = A / C x 5\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label>Current Difference</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Different Primary</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Different Secondary</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Current Different -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_per_diff_main" placeholder="Auto Calculation"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="transformaterRatio.ta0fc_per_diff_sec" placeholder="Auto Calculation"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item no-lines text-wrap>\n            <ion-label style="font-style: italic; margin-top: 0px;">\n              Different Main = ((BT - AT) / AT) x 100\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item no-lines text-wrap>\n            <ion-label style="font-style: italic; margin-top: 0px;">\n              Different Duplicate = ((DT - CT) / CT) x 100\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </span>\n\n  <!-- POLARITY TEST -->\n  <span *ngIf="viewPolarityTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp;<strong>POLARITY TEST</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowPolarity()" [(ngModel)]="polarity.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="polarity.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="polarity.ta0naremarks"\n              [ngClass]="(polarity.ta0naremarks == \'\' || polarity.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!polarity.ta0na">\n      <!-- Option List -->\n      <ion-row>\n        <ion-col col-16 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label>Meter Category</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-16 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select [(ngModel)]="meterCategoryOptions" (ionChange)="resetMeterCategoryOptions($event)"\n              placeholder="-- Choose value --" interface="popover">\n              <ion-option value="M">Mechanical</ion-option>\n              <ion-option value="E">Electronic (Except Genius-MK6)</ion-option>\n              <ion-option value="G">Genius-MK6</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Mechanical -->\n      <span *ngIf="meterCategoryOptions == \'M\'">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label>Meter Category: Mechanical</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Header -->\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Red In</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Yellow In</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Blue In</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-sm-12 col-md-4 col-4>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_tm_r">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>F</ion-label>\n                    <ion-radio value="F"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>R</ion-label>\n                    <ion-radio value="R"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-sm-12 col-md-6 col-6 style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>S</ion-label>\n                    <ion-radio value="S"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col col-sm-12 col-md-4 col-4>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_tm_y">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>F</ion-label>\n                    <ion-radio value="F"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>R</ion-label>\n                    <ion-radio value="R"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-sm-12 col-md-6 col-6 style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>S</ion-label>\n                    <ion-radio value="S"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col col-sm-12 col-md-4 col-4>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_tm_b">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>F</ion-label>\n                    <ion-radio value="F"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>R</ion-label>\n                    <ion-radio value="R"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-sm-12 col-md-6 col-6 style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>S</ion-label>\n                    <ion-radio value="S"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines>\n              <ion-label style="font-style: italic; margin-top: -10px;">\n                Description: (F)wd, (R)vs, (S)top\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n\n      <!-- Electronic (Except Genius-MK6) -->\n      <span *ngIf="meterCategoryOptions == \'E\'">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label>Meter Category: Electronic (Except Genius-MK6)</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Header -->\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Red (+Yel) In</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Yel (+Blu) In</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Blu (+Red) In</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-sm-12 col-md-4 col-4>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_mech_r">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Inc</ion-label>\n                    <ion-radio value="Inc"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Dec</ion-label>\n                    <ion-radio value="Dec"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-sm-12 col-md-6 col-6 style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Rem</ion-label>\n                    <ion-radio value="Rem"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col col-sm-12 col-md-4 col-4>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_elec_y">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Inc</ion-label>\n                    <ion-radio value="Inc"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Dec</ion-label>\n                    <ion-radio value="Dec"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-sm-12 col-md-6 col-6 style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Rem</ion-label>\n                    <ion-radio value="Rem"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col col-sm-12 col-md-4 col-4>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_elec_b">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Inc</ion-label>\n                    <ion-radio value="Inc"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Dec</ion-label>\n                    <ion-radio value="Dec"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-sm-12 col-md-6 col-6 style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>Rem</ion-label>\n                    <ion-radio value="Rem"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines>\n              <ion-label style="font-style: italic; margin-top: -10px;">\n                Description: (Inc)rease, (Dec)rease, (Rem)ain\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n\n      <!-- Genius-MK6 -->\n      <span *ngIf="meterCategoryOptions == \'G\'">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label>Meter Category: Genius-MK6</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Header -->\n        <ion-row>\n          <ion-col>\n            <ion-item uppercase>\n              <ion-label color="primary" text-uppercase>Red In</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Yellow In</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-uppercase>Blue In</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_gen_r">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>K</ion-label>\n                    <ion-radio value="true"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>T</ion-label>\n                    <ion-radio value="false"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_gen_y">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>K</ion-label>\n                    <ion-radio value="true"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>T</ion-label>\n                    <ion-radio value="false"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col>\n            <ion-list radio-group [(ngModel)]="polarity.ta0po_gen_b">\n              <ion-row>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>K</ion-label>\n                    <ion-radio value="true"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col style="padding: 0px;">\n                  <ion-item>\n                    <ion-label>T</ion-label>\n                    <ion-radio value="false"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines>\n              <ion-label style="font-style: italic; margin-top: -10px;">\n                Description: (K)elip, (T)idak\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n    </div>\n  </span>\n\n  <!-- FUSE TEST -->\n  <span *ngIf="viewFuseTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp;<strong>FUSE TEST</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowFuseTest()" [(ngModel)]="fuse.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="fuse.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="fuse.ta0naremarks"\n              [ngClass]="(fuse.ta0naremarks == \'\' || fuse.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!fuse.ta0na">\n      <!-- Fuse Contact -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Fuse Contact</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Neon Test (Menyala)</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Neon Glow -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="fuse.loc_ta0ft_fuse_contact" placeholder="Select value"\n              (ionChange)="changeUiViewFuseNeon(\'fuse\',$event)">\n              <ion-option value=""></ion-option>\n              <ion-option value="Ya">Ya</ion-option>\n              <ion-option value="Tidak">Tidak</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="fuse.loc_ta0ft_neon_glow" placeholder="Select value"\n              (ionChange)="changeUiViewFuseNeon(\'neon\',$event)">\n              <ion-option value=""></ion-option>\n              <ion-option value="Ya">Ya</ion-option>\n              <ion-option value="Tidak">Tidak</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Neon Glow (Remark) -->\n      <ion-row *ngIf="fuseIndicator || neonIndicator">\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item *ngIf="fuseIndicator">\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item *ngIf="neonIndicator">\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="fuseIndicator || neonIndicator">\n        <ion-col>\n          <ion-item *ngIf="fuseIndicator">\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="fuse.ta0ft_fuse_contact"\n              [ngClass]="(fuse.ta0ft_fuse_contact == \'\' || fuse.ta0ft_fuse_contact == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item *ngIf="neonIndicator">\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="fuse.ta0ft_neon_glow"\n              [ngClass]="(fuse.ta0ft_neon_glow == \'\' || fuse.ta0ft_neon_glow == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </span>\n\n  <!-- MAGNET TEST -->\n  <span *ngIf="viewMagnetTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp;<strong>MAGNET TEST</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowMagnet()" [(ngModel)]="magnet.loc_test_ta0na">\n            <ion-option value=""></ion-option>\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="magnet.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="magnet.ta0naremarks"\n              [ngClass]="(magnet.ta0naremarks == \'\' || magnet.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!magnet.ta0na">\n      <!-- Meter -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Meter</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="magnet.loc_ta0mt_meter" placeholder="Select value"\n              (ionChange)="changeUiViewMagentTest(\'meter\',$event)">\n              <ion-option value=""></ion-option>\n              <ion-option value="Ya">Ya</ion-option>\n              <ion-option value="Tidak">Tidak</ion-option>\n              <ion-option value="Lain2">Lain-lain</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Remarks -->\n      <ion-row *ngIf="magnetMeter">\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="magnet.ta0mt_meter"\n              [ngClass]="(magnet.ta0mt_meter == \'\' || magnet.ta0mt_meter == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Fuse Carrier -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Fuse Carrier</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="magnet.loc_ta0mt_fuse_carrier" placeholder="Select value"\n              (ionChange)="changeUiViewMagentTest(\'fuse_carrier\',$event)">\n              <ion-option value=""></ion-option>\n              <ion-option value="Ya">Ya</ion-option>\n              <ion-option value="Tidak">Tidak</ion-option>\n              <ion-option value="Lain2">Lain-lain</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Remarks -->\n      <ion-row *ngIf="magnetFuseCarrier">\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="magnet.ta0mt_fuse_carrier"\n              [ngClass]="(magnet.ta0mt_fuse_carrier == \'\' || magnet.ta0mt_fuse_carrier == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Header -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Fuse Cartridge</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="magnet.loc_ta0mt_fuse_cartridge" placeholder="Select value"\n              (ionChange)="changeUiViewMagentTest(\'fuse_cartridge\',$event)">\n              <ion-option value=""></ion-option>\n              <ion-option value="Ya">Ya</ion-option>\n              <ion-option value="Tidak">Tidak</ion-option>\n              <ion-option value="Lain2">Lain-lain</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- Remarks -->\n      <ion-row *ngIf="magnetFuseCartridge">\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="magnet.ta0mt_fuse_cartridge"\n              [ngClass]="(magnet.ta0mt_fuse_cartridge == \'\' || magnet.ta0mt_fuse_cartridge == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </span>\n\n  <!-- ACCURACY TEST -->\n  <span *ngIf="viewAccuracyTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp;<strong>ACCURACY TEST</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowMeter()" [(ngModel)]="accuracy3P.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="accuracy3P.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="accuracy3P.ta0naremarks"\n              [ngClass]="(accuracy3P.ta0naremarks == \'\' || accuracy3P.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!accuracy3P.ta0na">\n\n      <!-- Segment -->\n      <ion-row style="padding-top: 15px;padding-left: 15px;">\n        <ion-col col-sm-12 col-md-12 col-12>\n          <ion-segment [(ngModel)]="valueChangeAccuracy">\n            <ion-segment-button value="before">\n              Before\n            </ion-segment-button>\n            <ion-segment-button value="after">\n              After\n            </ion-segment-button>\n          </ion-segment>\n        </ion-col>\n      </ion-row>\n\n      <div [ngSwitch]="valueChangeAccuracy">\n        <div *ngSwitchCase="\'before\'">\n          <ion-row style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-label color="primary">Accuracy Type</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <!-- [ngClass]="(accuracy3P.ta0testind == \'\' || accuracy3P.ta0testind == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'" -->\n                <ion-select interface="popover" (ionChange)="hideAccuracy3Phase()" [(ngModel)]="accuracy3P.ta0testind">\n                  <ion-option value="P">Portable</ion-option>\n                  <ion-option value="M">Manual</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <div *ngIf="portable">\n            <ion-row style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary">Portable Test Set</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-5>\n                <ion-item>\n                  <ion-input type="text" maxlength="18" placeholder="Serial No."\n                    [(ngModel)]="accuracy3P.ta0at_pteserialnum" (keyup)="outputAplhaNumeric($event,\'ptSerialNo\')"\n                    [ngClass]="(accuracy3P.ta0at_pteserialnum == \'\' || accuracy3P.ta0at_pteserialnum == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="text-align: right;">\n                <button ion-button (click)="barcodeScan(\'3phase\')">\n                  <ion-icon name="barcode" item-right></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" text-center>Red</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" text-center>Yellow</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" text-center>Blue</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Voltage</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" placeholder="Enter Red" [(ngModel)]="accuracy3P.ta0at_voltage_r"\n                    (keyup)="checkDecimalLength8($event,\'voltageR\')"\n                    [ngClass]="(accuracy3P.ta0at_voltage_r == \'\' || accuracy3P.ta0at_voltage_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" placeholder="Enter Yellow" [(ngModel)]="accuracy3P.ta0at_voltage_y"\n                    (keyup)="checkDecimalLength8($event,\'voltageY\')"\n                    [ngClass]="(accuracy3P.ta0at_voltage_y == \'\' || accuracy3P.ta0at_voltage_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" placeholder="Enter Blue" [(ngModel)]="accuracy3P.ta0at_voltage_b"\n                    (keyup)="checkDecimalLength8($event,\'voltageB\')"\n                    [ngClass]="(accuracy3P.ta0at_voltage_b == \'\' || accuracy3P.ta0at_voltage_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Current</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Red"\n                    [(ngModel)]="accuracy3P.ta0at_current_r" (keyup)="checkDecimalLength8($event,\'currentR\')"\n                    [ngClass]="(accuracy3P.ta0at_current_r == \'\' || accuracy3P.ta0at_current_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Yellow"\n                    [(ngModel)]="accuracy3P.ta0at_current_y" (keyup)="checkDecimalLength8($event,\'currentY\')"\n                    [ngClass]="(accuracy3P.ta0at_current_y == \'\' || accuracy3P.ta0at_current_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Blue"\n                    [(ngModel)]="accuracy3P.ta0at_current_b" (keyup)="checkDecimalLength8($event,\'currentB\')"\n                    [ngClass]="(accuracy3P.ta0at_current_b == \'\' || accuracy3P.ta0at_current_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Power (W)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Red" [(ngModel)]="accuracy3P.ta0at_power_r"\n                    (keyup)="checkDecimalLength8($event,\'PWR\')"\n                    [ngClass]="(accuracy3P.ta0at_power_r == \'\' || accuracy3P.ta0at_power_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Yellow"\n                    [(ngModel)]="accuracy3P.ta0at_power_y" (keyup)="checkDecimalLength8($event,\'PWY\')"\n                    [ngClass]="(accuracy3P.ta0at_power_y == \'\' || accuracy3P.ta0at_power_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Blue"\n                    [(ngModel)]="accuracy3P.ta0at_power_b" (keyup)="checkDecimalLength8($event,\'PWB\')"\n                    [ngClass]="(accuracy3P.ta0at_power_b == \'\' || accuracy3P.ta0at_power_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Power Factor</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Red"\n                    [(ngModel)]="accuracy3P.ta0at_powerfactor_r" (keyup)="checkNegative($event,\'PRR\')"\n                    [ngClass]="(accuracy3P.ta0at_powerfactor_r == \'\' || accuracy3P.ta0at_powerfactor_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Yellow"\n                    [(ngModel)]="accuracy3P.ta0at_powerfactor_y" (keyup)="checkNegative($event,\'PRY\')"\n                    [ngClass]="(accuracy3P.ta0at_powerfactor_y == \'\' || accuracy3P.ta0at_powerfactor_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Blue"\n                    [(ngModel)]="accuracy3P.ta0at_powerfactor_b" (keyup)="checkNegative($event,\'PRB\')"\n                    [ngClass]="(accuracy3P.ta0at_powerfactor_b == \'\' || accuracy3P.ta0at_powerfactor_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item no-lines></ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item text-center>\n                  <ion-label color="primary">Error 1</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item text-center>\n                  <ion-label color="primary">Error 2</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item text-center>\n                  <ion-label color="primary">Error 3</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">% Error</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter value" [(ngModel)]="accuracy3P.ta0at_test1"\n                    (ionChange)="errorAvg()" (keyup)="checkNegative($event,\'error1\')"\n                    [ngClass]="(accuracy3P.ta0at_test1 == \'\' || accuracy3P.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter value" [(ngModel)]="accuracy3P.ta0at_test2"\n                    (ionChange)="errorAvg()" (keyup)="checkNegative($event,\'error2\')"\n                    [ngClass]="(accuracy3P.ta0at_test2 == \'\' || accuracy3P.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter value" [(ngModel)]="accuracy3P.ta0at_test3"\n                    (ionChange)="errorAvg()" (keyup)="checkNegative($event,\'error3\')"\n                    [ngClass]="(accuracy3P.ta0at_test3 == \'\' || accuracy3P.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">% Error Average</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="% Error average" [readonly]="true"\n                    [(ngModel)]="accuracy3P.ta0at_avg"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div *ngIf="!portable">\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" text-center>First</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" text-center>Second</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" text-center>Third</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Time Calculated</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter First"\n                    [(ngModel)]="accuracy3P.ta0at_timecalc_1" (ionChange)="errorManual()"\n                    (keyup)="checkDecimalLength8($event,\'3TC1\')"\n                    [ngClass]="(accuracy3P.ta0at_timecalc_1 == \'\' || accuracy3P.ta0at_timecalc_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Second"\n                    [(ngModel)]="accuracy3P.ta0at_timecalc_2" (ionChange)="errorManual()"\n                    (keyup)="checkDecimalLength8($event,\'3TC2\')"\n                    [ngClass]="(accuracy3P.ta0at_timecalc_2 == \'\' || accuracy3P.ta0at_timecalc_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Third"\n                    [(ngModel)]="accuracy3P.ta0at_timecalc_3" (ionChange)="errorManual()"\n                    (keyup)="checkDecimalLength8($event,\'3TC3\')"\n                    [ngClass]="(accuracy3P.ta0at_timecalc_3 == \'\' || accuracy3P.ta0at_timecalc_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Real Time</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter First"\n                    [(ngModel)]="accuracy3P.ta0at_timemeas_1" (ionChange)="errorManual()"\n                    (keyup)="checkDecimalLength8($event,\'3RT1\')"\n                    [ngClass]="(accuracy3P.ta0at_timemeas_1 == \'\' || accuracy3P.ta0at_timemeas_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Second"\n                    [(ngModel)]="accuracy3P.ta0at_timemeas_2" (ionChange)="errorManual()"\n                    (keyup)="checkDecimalLength8($event,\'3RT2\')"\n                    [ngClass]="(accuracy3P.ta0at_timemeas_2 == \'\' || accuracy3P.ta0at_timemeas_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Enter Third"\n                    [(ngModel)]="accuracy3P.ta0at_timemeas_3" (ionChange)="errorManual()"\n                    (keyup)="checkDecimalLength8($event,\'3RT3\')"\n                    [ngClass]="(accuracy3P.ta0at_timemeas_3 == \'\' || accuracy3P.ta0at_timemeas_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">% Error</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Auto Calculation"\n                    [(ngModel)]="accuracy3P.ta0at_test1" [readonly]="true"\n                    [ngClass]="(accuracy3P.ta0at_test1 == \'\' || accuracy3P.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Auto Calculation"\n                    [(ngModel)]="accuracy3P.ta0at_test2" [readonly]="true"\n                    [ngClass]="(accuracy3P.ta0at_test2 == \'\' || accuracy3P.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3 col-sm-3 col-md-3>\n                <ion-item>\n                  <ion-input type="number" maxlength="11" placeholder="Auto Calculation"\n                    [(ngModel)]="accuracy3P.ta0at_test3" [readonly]="true"\n                    [ngClass]="(accuracy3P.ta0at_test3 == \'\' || accuracy3P.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">% Error Average</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3>\n                <ion-item>\n                  <ion-input type="number" placeholder="Auto Calculation" [readonly]="true"\n                    [(ngModel)]="accuracy3P.ta0at_avg"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <div *ngSwitchCase="\'after\'">\n          <!-- Current Date: Start -->\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Date</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-datetime [(ngModel)]="accuracy3P_N.ta4ma_date" max="3000-12-31" displayFormat="DD/MM/YYYY"\n                  pickerFormat="DD:MM:YYYY" placeholder="Tap to select.." style="padding: 0px;">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Current Date: End -->\n          <ion-row>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Test 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Test 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Test 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" [(ngModel)]="accuracy3P_N.ta4ma_test1" (ionChange)="calculateAfterAccuracyTest()"\n                  type="number" placeholder="Enter value"\n                  [ngClass]="(accuracy3P_N.ta4ma_test1 == \'\' || accuracy3P_N.ta4ma_test1 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test2" [(ngModel)]="accuracy3P_N.ta4ma_test2" (ionChange)="calculateAfterAccuracyTest()"\n                  type="number" maxlength="13" placeholder="Enter value"\n                  [ngClass]="(accuracy3P_N.ta4ma_test2 == \'\' || accuracy3P_N.ta4ma_test2 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test3" [(ngModel)]="accuracy3P_N.ta4ma_test3" (ionChange)="calculateAfterAccuracyTest()"\n                  type="number" maxlength="13" placeholder="Enter value"\n                  [ngClass]="(accuracy3P_N.ta4ma_test3 == \'\' || accuracy3P_N.ta4ma_test3 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="average" [(ngModel)]="accuracy3P_N.ta4ma_avg" type="number" readonly\n                  placeholder="Auto Calculate"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n    </div>\n  </span>\n\n  <!--  <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>INSPECTION REMARK</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider> -->\n  <!--   <ion-row col-12 col-md-12 col-sm-12>\n      <ion-col>\n        <ion-item>\n          <ion-label>Remark</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-textarea [(ngModel)]="remarksFeeder.ta4remarks_insp" placeholder="Remarks details"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n\n  <!-- Dial Test -->\n  <span *ngIf="viewDialTest">\n    <span *ngIf="hideDailTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col>\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>CURRENT DIFFERENCE BETWEEN SOURCE OF SUPPLY WITH USER\n              BUSBAR</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Name P/E: </ion-label>\n            <ion-input item-end placeholder="Enter Name" [(ngModel)]="currentoverall.ta4cur_diff_name"> </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Tx: </ion-label>\n            <ion-input item-end placeholder="Enter Tx" [(ngModel)]="currentoverall.ta4cur_diff_tx"> </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div *ngFor="let attr of currentDiff ; let j=index; trackBy: trackByFn">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label>Meter Details</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Meter Serial No: </ion-label>\n              <ion-label item-end> {{attr.ta4serialNum}} </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary"> Main Current</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">R</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Y</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">B</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">\n                F/PILLAR / LVDB / Tx\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input [(ngModel)]="attr.ta4cur_R_pil" (ionChange)="pillarCalculate(attr)"\n                placeholder="Enter value R">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input [(ngModel)]="attr.ta4cur_Y_pil" (ionChange)="pillarCalculate(attr)"\n                placeholder="Enter value Y">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input [(ngModel)]="attr.ta4cur_B_pil" (ionChange)="pillarCalculate(attr)"\n                placeholder="Enter value B">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">\n                Busbar\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input placeholder="Enter value R" [(ngModel)]="attr.ta4cur_R_busbar"\n                (ionChange)="pillarCalculate(attr)"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input placeholder="Enter value Y" [(ngModel)]="attr.ta4cur_Y_busbar"\n                (ionChange)="pillarCalculate(attr)"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input placeholder="Enter value B" [(ngModel)]="attr.ta4cur_B_busbar"\n                (ionChange)="pillarCalculate(attr)"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">\n                Total current F/PILLAR / LVDB / Tx %\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">\n                Total current Busbar %\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input placeholder="Total Current F/PILLAR / LVDB / Tx" [(ngModel)]="attr.ta4cur_total_pill"\n                [disabled]="true">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input placeholder="Total Current Busbar" [(ngModel)]="attr.ta4cur_total_bus" [disabled]="true">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12>\n          <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n            <ion-label> Overall Current</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <!-- out each feeder -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">\n              Total overall current F/PILLAR / LVDB / Tx %\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">\n              Total overall Current Busbar\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Total Overall Current F/PILLAR / LVDB / Tx"\n              [(ngModel)]="currentoverall.ta4cur_overall_totalpill" [disabled]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Total Overall Current Busbar" [(ngModel)]="currentoverall.ta4cur_overall_totalbus"\n              [disabled]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">\n              Current Different %\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Different value" [(ngModel)]="currentoverall.ta4cur_diff_overall" [disabled]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </span>\n\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER REGISTER TEST</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">\n            Portable Test Set:\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder="Please enter" [(ngModel)]="meterRegister.ta4pts">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row col-12 col-md-12 col-sm-12>\n      <ion-segment [(ngModel)]="valueChangeRegisterTest">\n        <ion-segment-button value="before">\n          Before\n        </ion-segment-button>\n        <ion-segment-button value="after">\n          After\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeRegisterTest">\n      <div *ngSwitchCase="\'before\'">\n        <div *ngFor="let attr of meterRegisterBefore; let j = index">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label> Test {{ j + 1 }} </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">End</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">% Error</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_start" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_stop" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_usage" placeholder="Auto Calculate"\n                  [disabled]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_error" placeholder="Please enter">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <div *ngFor="let attr of meterRegisterAfter; let j = index">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label> Test {{ j + 1 }} </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">End</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">% Error</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_start" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_stop" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_usage" placeholder="Auto Calculate"\n                  [disabled]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_error" placeholder="Please enter">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n    </div>\n  </span>\n\n  <br /><br />\n\n  <!-- Witness Section -->\n  <!-- <span *ngIf="viewWitnessExaminerTest"> -->\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-9>\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>WITNESS SECTION</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetWitness()" style="opacity: unset;"\n          text-end>Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col col-sm-12 col-md-6 col-6>\n      <ion-item>\n        <ion-label color="primary">Customer agrees to sign</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-6 col-6>\n      <ion-item>\n        <ion-select [(ngModel)]="customerSignature" interface="popover" (ionChange)="changeUiViewCustomerSignature()">\n          <ion-option value="Yes">Yes</ion-option>\n          <ion-option value="No">No</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <span *ngIf="customerSignature == \'No\'">\n    <ion-row>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Remarks</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n            [(ngModel)]="witness.ta0witnessname"\n            [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </span>\n\n  <span *ngIf="customerSignature == \'Yes\'">\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-3>\n        <ion-item>\n          <ion-label color="primary">Witness Name</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-9>\n        <ion-item>\n          <ion-input type="text" placeholder="Name of Witness" [(ngModel)]="witness.ta0witnessname"\n            (keyup)="outputSpeAplhaNumeric($event,\'name\')"\n            [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3>\n        <ion-item>\n          <ion-label color="primary">Sign By</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-7 col-sm-7 col-md-7>\n        <ion-item text-center no-lines>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2>\n        <ion-item no-lines align-self-center>\n          <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'witness\')">Clear</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">IC No. / Passport No.</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Phone No.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-input type="text" maxlength="20" placeholder="Ic/Passport" [(ngModel)]="witness.ta0witnessicpassport"\n            (keyup)="outputAplhaNumeric($event,\'icpassport\')"\n            [ngClass]="(witness.ta0witnessicpassport == \'\' || witness.ta0witnessicpassport == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-input type="text" maxlength="11" placeholder="Phone number" [(ngModel)]="witness.ta0witnessphone"\n            [ngClass]="(witness.ta0witnessphone == \'\' || witness.ta0witnessphone == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </span>\n\n  <!-- Examiner Section -->\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-9>\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>EXAMINER SECTION</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetExaminer()" style="opacity: unset;"\n          text-end>Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-3>\n      <ion-item>\n        <ion-label color="primary">Examiner Name</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm-12 col-md-9>\n      <ion-item>\n        <ion-input type="text" placeholder="Examiner Name" [(ngModel)]="witness.ta0officer_name"\n          value="{{ gv.displayname }}" [readonly]="true"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-3 col-sm-3 col-md-3>\n      <ion-item>\n        <ion-label color="primary">Sign By</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-7 col-sm-7 col-md-7>\n      <ion-item text-center [ngClass]="!allowSave ? \'redHighlightText\' : \'blackHighlightText\'">\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2 col-sm-2 col-md-2>\n      <ion-item no-lines align-self-center>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'officer\')">Clear</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-label color="primary">Staff No.</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-label color="primary">Position</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-input type="text" maxlength="11" placeholder="Auto Populate" [(ngModel)]="witness.ta0officer_id"\n          value="{{ lead }}" [readonly]="true">\n        </ion-input>\n\n      </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-input type="text" maxlength="11" placeholder="Auto Populate" value="{{ gv.employeetype }}"\n          [readonly]="true">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-label color="primary">Station</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-select [(ngModel)]="witness.ta0officer_station" [selectOptions]="{title: \'Station\'}"\n          placeholder="Please select">\n          <ion-option *ngFor="let station of stations" [value]="station.json.value"\n            [selected]="station.json.value === witness.ta0officer_station">{{ station.json.description }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- </span> -->\n\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/deviceTestForms/seal-lv-inspect/seal-lv-inspect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_9__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SealLvInspectPage);
    return SealLvInspectPage;
}());

//# sourceMappingURL=seal-lv-inspect.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealLvInspectPageModule", function() { return SealLvInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_lv_inspect__ = __webpack_require__(1085);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SealLvInspectPageModule = /** @class */ (function () {
    function SealLvInspectPageModule() {
    }
    SealLvInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_lv_inspect__["a" /* SealLvInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_lv_inspect__["a" /* SealLvInspectPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__["SignaturePadModule"],
            ],
        })
    ], SealLvInspectPageModule);
    return SealLvInspectPageModule;
}());

//# sourceMappingURL=seal-lv-inspect.module.js.map

/***/ })

});
//# sourceMappingURL=49.js.map