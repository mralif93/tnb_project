webpackJsonp([20],{

/***/ 1089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealOpcInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_SealInfo__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_StickerInfo__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_signaturepad_signature_pad__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_signaturepad_signature_pad__);
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

















var SealOpcInspectPage = /** @class */ (function () {
    function SealOpcInspectPage(navCtrl, navParams, jsonStore, appCtrl, gf, gv, dataService, barcodeScanner, toast, alertCtrl) {
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
        this.soTypes = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.anamolyMainCheck = true;
        this.anamolyTypeCheck = true;
        this.anamolyCategoryCheck = true;
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
        this.dCons = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        this.deviceVoltage = '01';
        this.meterRegisterAfter = [];
        this.meterRegisterBefore = [];
        this.allowSave = true;
        this.warningFlag = false;
        //magnetShow: any;
        this.valueChangeRegisterTest = 'before';
        this.valueChangeAccuracy = 'before';
        this.showTestList = true;
        this.customerSignature = "Yes";
        this.magnetMeter = false;
        // Test List View Indicator
        this.viewPhysicalTest = false;
        this.viewCurrentComparisonTest = false;
        this.viewPolarityTest = false;
        this.viewAccuracyTest = false;
        this.viewNeutralTest = false;
        this.viewMagnetTest = false;
        this.viewWitnessExaminerTest = false;
        this.viewMeterRegisterTest = false;
        // Test List Input Indicator
        this.validatePhysicalTest = false;
        this.validateCurrentComparisonTest = false;
        this.validatePolarityTest = false;
        this.validateAccuracyTest = false;
        this.validateNeutralTest = false;
        this.validateMagnetTest = false;
        this.validateWitnessExaminerTest = false;
        this.validateMeterRegisterTest = false;
        this.neutral = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.tampering = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.currentCompare = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.polarity = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.magnet = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy3P = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy3P_N = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.physical = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.witness = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.remarksFeeder = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.meterRegister = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.meterRegisterAf = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.meterRegisterBf = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        // Meter Register After
        for (var i = 0; i < 3; i++) {
            var register = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
            register.ta4ma_reg_start = "";
            register.ta4ma_reg_stop = "";
            register.ta4ma_reg_usage = "";
            register.ta4ma_reg_error = "";
            register.type = i + 1;
            this.meterRegisterAfter.push(register);
        }
        // Meter Register Before
        for (var i = 0; i < 3; i++) {
            var register = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
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
        // Lv Inspection
        this.transformaterRatio = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.fuse = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        // Default for accuracy type
        this.accuracy.ta0testind = "M";
        this.accuracy3P.ta0testind = "M";
        /*
         this.neutral.loc_test_ta0na = "N";
         this.tampering.loc_test_ta0na = "N";
         this.corrective.loc_test_ta0na = "N";
         this.witness.loc_test_ta0na = "N";
         this.currentCompare.loc_test_ta0na = "N";
         this.polarity.loc_test_ta0na = "N";
         this.magnet.loc_test_ta0na = "N";
         this.accuracy.loc_test_ta0na = "N";
         this.accuracy3P.loc_test_ta0na = "N";
        this.accuracy.ta0testind = "M";
        this.accuracy3P.ta0testind = "M";
        
         this.physical.loc_test_ta0na = "N";
    */
        debugger;
        this.itemOri = this.navParams.get("paramObj");
        this.fIndex = this.navParams.get("fIndex");
        this.maIndex = this.navParams.get("maIndex");
        this.deviceVoltage = this.navParams.get("deviceVoltage");
        /** Copy Clone into Original */
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        // LoadLookUp
        this.lookup();
        if (this.maIndex != undefined) {
            // Read ta0detail if exist
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta4testdata')) {
                console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
                // Convert String to JSON Array
                var ta4testdata_temp;
                // Checking whether is string or array
                if (Array.isArray(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)) {
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
                        var ta0testdetails = ta4testdata_temp[i];
                        var type = ta0testdetails.ta0testtype;
                        var applicable = ta0testdetails.ta0na;
                        console.log("TYPE: " + type);
                        console.log("APPLICABEL: " + applicable);
                        debugger;
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P: {
                                this.accuracy = ta0testdetails;
                                if (applicable == true) {
                                    this.accuracy.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.accuracy.loc_test_ta0na = "N";
                                    if (this.accuracy.ta0testind === "P") {
                                        this.portable = true;
                                    }
                                    else {
                                        this.portable = false;
                                    }
                                }
                                // this.hideShowTypeAccuracy();
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_NEUT: {
                                this.neutral = ta0testdetails;
                                if (applicable == true) {
                                    this.neutral.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.neutral.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP: {
                                this.tampering = ta0testdetails;
                                if (applicable == true) {
                                    this.tampering.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.tampering.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATCA: {
                                this.corrective = ta0testdetails;
                                if (applicable == true) {
                                    this.corrective.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.corrective.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS: {
                                this.witness = ta0testdetails;
                                // Checking Witness Section
                                if (typeof (this.witness.ta0signaturecustomer) !== "undefined") {
                                    this.customerSignature = this.witness.ta0signaturecustomer;
                                }
                                if (typeof (this.witness.ta0examinerdepartment) !== "undefined") {
                                    this.examinerDepartment = this.witness.ta0examinerdepartment;
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR: {
                                this.currentCompare = ta0testdetails;
                                if (applicable == true) {
                                    this.currentCompare.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.currentCompare.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_POLT: {
                                this.polarity = ta0testdetails;
                                if (applicable == true) {
                                    this.polarity.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.polarity.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT: {
                                this.magnet = ta0testdetails;
                                if (applicable == true) {
                                    this.magnet.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.magnet.loc_test_ta0na = "N";
                                    // if value 'Lain2'
                                    if (this.magnet.loc_ta0mt_magnet_result === "Lain2") {
                                        this.magnetMeter = true;
                                    }
                                    else {
                                        this.magnetMeter = false;
                                    }
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET: {
                                this.physical = ta0testdetails;
                                if (applicable == true) {
                                    this.physical.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.physical.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P: {
                                if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
                                    this.accuracy3P = ta0testdetails;
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
                                    // this.hideShowTypeAccuracy();
                                    /* this.hideShowMeter(); */
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P_N: {
                                this.accuracy3P_N = ta0testdetails;
                                if (applicable == true) {
                                    this.accuracy3P_N.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.accuracy3P_N.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REMARKS: {
                                this.remarksFeeder = ta0testdetails;
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_DAILTEST: {
                                this.meterRegister = ta0testdetails;
                                // Check for data Meter Register is available or not
                                if (ta0testdetails.hasOwnProperty("ta4meterregister")) {
                                    for (var m = 0; m < ta0testdetails.ta4meterregister.length; m++) {
                                        // Before
                                        if (ta0testdetails.ta4meterregister[m].type === "before") {
                                            this.meterRegisterBf = ta0testdetails.ta4meterregister[m];
                                        }
                                        // After
                                        if (ta0testdetails.ta4meterregister[m].type === "after") {
                                            this.meterRegisterAf = ta0testdetails.ta4meterregister[m];
                                        }
                                    }
                                }
                                // Check Data Meter Register for 3 Test is available or not
                                if (ta0testdetails.hasOwnProperty("ta4meterregisterbefore")) {
                                    for (var k = 0; k < ta0testdetails.ta4meterregisterbefore.length; k++) {
                                        this.meterRegisterBefore[k] = ta0testdetails.ta4meterregisterbefore[k];
                                    }
                                }
                                if (ta0testdetails.hasOwnProperty("ta4meterregisterafter")) {
                                    for (var k = 0; k < ta0testdetails.ta4meterregisterafter.length; k++) {
                                        this.meterRegisterAfter[k] = ta0testdetails.ta4meterregisterafter[k];
                                    }
                                }
                                // if (ta0testdetails.hasOwnProperty("ta4meterRegisterAfter")) {
                                //   this.meterRegisterAf = ta0testdetails.ta4meterRegisterAfter;
                                // } if (ta0testdetails.hasOwnProperty("ta4meterRegisterBefore")) {
                                //   this.meterRegisterBf = ta0testdetails.ta4meterRegisterBefore;
                                // }
                            }
                        }
                    }
                }
            }
            else {
                console.log("Data Test not exists!");
            }
            var meterCoverVal = new __WEBPACK_IMPORTED_MODULE_5__pojo_SealInfo__["a" /* SealInfo */]();
            meterCoverVal.ta0seallocation = "METER_COVER_1";
            meterCoverVal.ta0sealcondition = null;
            this.meterCoverArray = meterCoverVal;
            var terminalCoverVal = new __WEBPACK_IMPORTED_MODULE_5__pojo_SealInfo__["a" /* SealInfo */]();
            terminalCoverVal.ta0seallocation = "TERMINAL_COVER_1";
            terminalCoverVal.ta0sealcondition = null;
            this.terminalCoverArray = terminalCoverVal;
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0sealdetail')) {
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== null && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail !== "") {
                    var silLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.length);
                    for (var k = 0; k < silLength; k++) {
                        var ta0sealdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail[k];
                        var ta0seallocation = ta0sealdetail.ta0seallocation;
                        if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_COVER)) {
                            console.log("ta0seallocation: " + ta0seallocation);
                            meterCoverVal = ta0sealdetail;
                            this.meterCoverArray = meterCoverVal;
                        }
                        else if (ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_COVER)) {
                            terminalCoverVal = ta0sealdetail;
                            this.terminalCoverArray = terminalCoverVal;
                        }
                    }
                }
                else {
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
                }
            }
            else {
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
            }
            var sterminalCoverVal = new __WEBPACK_IMPORTED_MODULE_6__pojo_StickerInfo__["a" /* StickerInfo */]();
            sterminalCoverVal.ta0stickerlocation = "TERMINAL_COVER_1";
            sterminalCoverVal.ta0stickercondition = null;
            this.sterminalCoverArray = sterminalCoverVal;
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0stickerdetail') &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== "undefined" &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== null &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail !== "") {
                var stickerLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.length);
                for (var k = 0; k < stickerLength; k++) {
                    var ta0stickerdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail[k];
                    if (ta0stickerdetail.hasOwnProperty(ta0stickerlocation)) {
                    }
                    else {
                        var ta0stickerlocation = ta0stickerdetail.ta0stickerlocation;
                    }
                    if (ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STERMINAL_COVER)) {
                        sterminalCoverVal = ta0stickerdetail;
                        this.sterminalCoverArray = sterminalCoverVal;
                    }
                }
            }
            else {
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
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
        this.station = this.itemOri.json.siteid;
        this.phone = this.itemOri.json.phone;
        if ((typeof (this.witness) !== "undefined" && this.witness !== null && this.witness !== "")) {
            if (typeof (this.witness.ta0witness_sign) !== 'undefined' && this.witness.ta0witness_sign !== null && this.witness.ta0witness_sign !== "") {
                // Checking if singature exist or not
                if (typeof (this.signaturePad1) !== "undefined") {
                    this.signaturePad1.fromDataURL(this.witness.ta0witness_sign, { ratio: 1 });
                }
            }
            if (typeof (this.witness.ta0examiner_sign) !== 'undefined' && this.witness.ta0examiner_sign !== null && this.witness.ta0examiner_sign !== "") {
                if (typeof (this.signaturePad2) !== "undefined") {
                    this.signaturePad2.fromDataURL(this.witness.ta0examiner_sign, { ratio: 1 });
                }
            }
        }
        this.checkTestTypeField();
    }
    SealOpcInspectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealOpcInspectPage');
    };
    /**
    * Reason   : Metho to call value from ALDOMAIN(TA4ZONE)
    * Created  : Alif (26-03-2019)
    */
    SealOpcInspectPage.prototype.lookup = function () {
        var _this = this;
        this.getZoneData().then(function (sucess) {
            _this.getAlnDomainData();
        });
    };
    /**
     * Reason   : Method to call promise to get data.
     * Created  : 19-03-2019
     */
    SealOpcInspectPage.prototype.getAlnDomainData = function () {
        var _this = this;
        var queryPart = null;
        queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].TA4ZONE);
        this.jsonStore
            .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart)
            .then(function (result) {
            _this.stations = result;
        });
    };
    /**
     * Created: Ameer (25/9/2019)
     * Description: Promise data for Zone and filter the Data
     */
    SealOpcInspectPage.prototype.getZoneData = function () {
        var _this = this;
        var queryPart = null;
        debugger;
        queryPart = WL.JSONStore.QueryPart().equal("siteid", this.item.json.siteid);
        return new Promise(function (resolve, reject) {
            _this.jsonStore
                .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].Zone, queryPart)
                .then(function (result) {
                var zoneName;
                zoneName = result[0].json.ta0zone;
                if (zoneName !== null || typeof (zoneName) !== 'undefined') {
                    if (zoneName === 'SLG') {
                        _this.examinerDepartment = "SELANGOR";
                    }
                    else if (zoneName === 'UTR') {
                        _this.examinerDepartment = "UTARA";
                    }
                    else if (zoneName === 'SLT') {
                        _this.examinerDepartment = "SELATAN";
                    }
                    else if (zoneName === 'TMR') {
                        _this.examinerDepartment = "TIMUR";
                    }
                    else if (zoneName === 'KUL') {
                        _this.examinerDepartment = "KUALA LUMPUR";
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
     * Reason   : Method to display existing signature
     * Created  : Alif (22-01-2019)
     */
    SealOpcInspectPage.prototype.ngAfterViewInit = function () {
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
            if (typeof (this.witness.ta0examiner_sign) !== 'undefined' && this.witness.ta0examiner_sign !== null && this.witness.ta0examiner_sign !== "") {
                if (typeof (this.signaturePad2) !== "undefined") {
                    this.signaturePad2.fromDataURL(this.witness.ta0examiner_sign, { ratio: 1 });
                }
            }
        }
    };
    //created by Ameer (19/10/2018)
    SealOpcInspectPage.prototype.hideShowPhysical = function () {
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
    SealOpcInspectPage.prototype.hideShowMeter = function () {
        debugger;
        if (this.accuracy.loc_test_ta0na === 'Y') {
            this.showMeter = true;
            // this.accuracy = {};
            this.accuracy.loc_test_ta0na = 'Y';
            this.accuracy.ta0na = true;
        }
        else {
            this.showMeter = false;
            this.accuracy = {};
            this.accuracy.loc_test_ta0na = 'N';
            this.accuracy.ta0na = false;
            this.accuracy.ta0testind = "M";
        }
        if (this.accuracy3P.loc_test_ta0na === 'Y') {
            this.showMeter = true;
            // this.accuracy3P = {};
            this.accuracy3P.loc_test_ta0na = 'Y';
            this.accuracy3P.ta0na = true;
        }
        else {
            this.showMeter = false;
            this.accuracy3P = {};
            this.accuracy3P.loc_test_ta0na = 'N';
            this.accuracy3P.ta0na = false;
            this.accuracy3P.ta0testind = "M";
        }
    };
    //Created by Ameer (18/10/2018)
    SealOpcInspectPage.prototype.hideAccuracy3Phase = function () {
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
            // Reset Portable Fields
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
    SealOpcInspectPage.prototype.hideShowTypeAccuracy = function () {
        debugger;
        if (this.accuracy.ta0testind === 'P') {
            this.portable = true;
            // Reset Portable Fields
            this.accuracy.ta0at_pteserialnum = "";
            this.accuracy.ta0at_voltage_r = "";
            this.accuracy.ta0at_voltage_y = "";
            this.accuracy.ta0at_voltage_b = "";
            this.accuracy.ta0at_current_r = "";
            this.accuracy.ta0at_current_y = "";
            this.accuracy.ta0at_current_b = "";
            this.accuracy.ta0at_power_r = "";
            this.accuracy.ta0at_power_y = "";
            this.accuracy.ta0at_power_b = "";
            this.accuracy.ta0at_powerfactor_r = "";
            this.accuracy.ta0at_powerfactor_y = "";
            this.accuracy.ta0at_powerfactor_b = "";
            this.accuracy.ta0at_constant_1 = "";
            this.accuracy.ta0at_constant_2 = "";
            this.accuracy.ta0at_constant_3 = "";
            this.accuracy.ta0at_test1 = "";
            this.accuracy.ta0at_test2 = "";
            this.accuracy.ta0at_test3 = "";
            this.accuracy.ta0at_avg = "";
        }
        else {
            this.portable = false;
            // Reset Manual Fields
            this.accuracy.ta0at_timecalc_1 = "";
            this.accuracy.ta0at_timecalc_2 = "";
            this.accuracy.ta0at_timecalc_3 = "";
            this.accuracy.ta0at_timemeas_1 = "";
            this.accuracy.ta0at_timemeas_2 = "";
            this.accuracy.ta0at_timemeas_3 = "";
            this.accuracy.ta0at_test1 = "";
            this.accuracy.ta0at_test2 = "";
            this.accuracy.ta0at_test3 = "";
            this.accuracy.ta0at_avg = "";
        }
    };
    //created by Ameer (15/10/2018)
    SealOpcInspectPage.prototype.hideShowNeutral = function () {
        debugger;
        if (this.neutral.loc_test_ta0na === 'Y') {
            this.neutralShows = true;
            this.neutral.loc_test_ta0na = 'Y';
            this.neutral.ta0na = true;
        }
        else {
            this.neutralShows = false;
            this.neutral = {};
            this.neutral.loc_test_ta0na = 'N';
            this.neutral.ta0na = false;
        }
    };
    //created by Ameer (15/10/2018)
    //created by Ameer (15/10/2018)
    //edited on (20/10/2018)
    SealOpcInspectPage.prototype.hideShowTampering = function () {
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
    //Created by Ameer ( 16/10/2018)
    SealOpcInspectPage.prototype.hideShowCurrentCompare = function () {
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
    SealOpcInspectPage.prototype.hideShowTransformerRatioTest = function () {
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
    SealOpcInspectPage.prototype.hideShowFuseTest = function () {
        console.log('came inside to hideShowFuseTest ..' + this.fuse.loc_test_ta0na);
        if (this.fuse.loc_test_ta0na == 'Y') {
            this.fuse.ta0na = true;
            this.fuse.ta0naremarks = null;
        }
        else {
            this.fuse = {};
            this.fuse.loc_test_ta0na = 'N';
            this.fuse.ta0na = false;
        }
    };
    //Created by Ameer (16/10/2018)
    SealOpcInspectPage.prototype.hideShowPolarity = function () {
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
    SealOpcInspectPage.prototype.hideShowMagnet = function () {
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
    //created by Ameer (16/10/2018)
    //edited by Ameer (24/10/2018)
    /**
     * Description: Method to calculate current comparison.
     * Edited: 07.10.2019
     */
    SealOpcInspectPage.prototype.actualReading = function () {
        console.log("auto calculate current comparison..");
        var actualReading = "-";
        var displayReading = "-";
        var totalReading = "-";
        // checking 3 input actual reading and do calculation.
        if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined' && typeof (this.currentCompare.ta0cu_actual_r) !== null) &&
            (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined' && typeof (this.currentCompare.ta0cu_actual_y) !== null) &&
            (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined' && typeof (this.currentCompare.ta0cu_actual_b) !== null)) {
            actualReading = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
        }
        if (!isNaN(actualReading)) {
            this.currentCompare.ta0cu_actual_total = actualReading.toFixed(3);
        }
        else {
            this.currentCompare.ta0cu_actual_total = actualReading;
        }
        // checking 3 input display reading and do calculation.
        if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined' && typeof (this.currentCompare.ta0cu_disp_r) !== null) &&
            (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined' && typeof (this.currentCompare.ta0cu_disp_y) !== null) &&
            (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined' && typeof (this.currentCompare.ta0cu_disp_b) !== null)) {
            displayReading = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
        }
        if (!isNaN(displayReading)) {
            this.currentCompare.ta0cu_disp_total = displayReading.toFixed(3);
        }
        else {
            this.currentCompare.ta0cu_disp_total = displayReading;
        }
        if (!isNaN(actualReading) && !isNaN(displayReading)) {
            totalReading = ((Number(displayReading) - Number(actualReading)) / Number(actualReading)) * 100;
            this.currentCompare.ta0cu_difference = totalReading.toFixed(3);
        }
        else {
            this.currentCompare.ta0cu_difference = totalReading;
        }
        // if ((this.currentCompare.ta0cu_actual_r !== "" && typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined') &&
        //   (this.currentCompare.ta0cu_actual_y !== "" && typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined') &&
        //   (this.currentCompare.ta0cu_actual_b !== "" && typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined')) {
        //   totalA = (Number(this.currentCompare.ta0cu_actual_r) + Number(this.currentCompare.ta0cu_actual_y) + Number(this.currentCompare.ta0cu_actual_b));
        // }
        // if ((this.currentCompare.ta0cu_disp_r !== "" && typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined') &&
        //   (this.currentCompare.ta0cu_disp_y !== "" && typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined') &&
        //   (this.currentCompare.ta0cu_disp_b !== "" && typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined')) {
        //   totalB = (Number(this.currentCompare.ta0cu_disp_r) + Number(this.currentCompare.ta0cu_disp_y) + Number(this.currentCompare.ta0cu_disp_b));
        // }
        // if (isNaN(totalA)) {
        //   totalA = 0;
        // }
        // if (isNaN(totalB)) {
        //   totalB = 0;
        // }
        // this.currentCompare.ta0cu_actual_total = totalA;
        // this.currentCompare.ta0cu_disp_total = totalB;
        // var Diff = ((totalB - totalA) / totalA) * 100;
        // if (isNaN(Diff)) {
        //   Diff = 0;
        // } /* else if (Math.sign(Diff) === -1) {
        //     this.gf.warningAlert("Error", "Current difference should not be consist negative", "Dismiss");
        // } */
        // this.currentCompare.ta0cu_difference = Diff.toFixed(3);
    };
    //created by Ameer (15/10/2018)
    SealOpcInspectPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    //created by Ameer (15/10/2018)
    //edited on (22/10/2018)
    SealOpcInspectPage.prototype.errorManual = function () {
        var NUMBER_REGEXP = /^[-+]|(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var regExp = new RegExp(NUMBER_REGEXP);
        var newValSlice;
        debugger;
        if (this.deviceVoltage === '01') {
            /*  if (parseFloat(this.accuracy.ta0at_timemeas_1) > parseFloat(this.accuracy.ta0at_timecalc_1)) {
               this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
               this.accuracy.ta0at_timemeas_1 = null;
             } else if (parseFloat(this.accuracy.ta0at_timemeas_2) > parseFloat(this.accuracy.ta0at_timecalc_2)) {
               this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
               this.accuracy.ta0at_timemeas_2 = null;
             } else if (parseFloat(this.accuracy.ta0at_timemeas_3) > parseFloat(this.accuracy.ta0at_timecalc_3)) {
               this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
               this.accuracy.ta0at_timemeas_3 = null;
             } else { */
            if ((typeof (this.accuracy.ta0at_timecalc_1 !== 'undefined') && this.accuracy.ta0at_timecalc_1 !== "" && this.accuracy.ta0at_timecalc_1 !== null)
                && (typeof (this.accuracy.ta0at_timemeas_1 !== 'undefined') && this.accuracy.ta0at_timemeas_1 !== "" && this.accuracy.ta0at_timemeas_1 !== null)) {
                var error1 = ((this.accuracy.ta0at_timecalc_1 - this.accuracy.ta0at_timemeas_1) / this.accuracy.ta0at_timemeas_1 * 100);
                this.accuracy.ta0at_test1 = error1.toFixed(3);
                if (isNaN(this.accuracy.ta0at_test1)) {
                    this.accuracy.ta0at_test1 = 0;
                }
            }
            if ((typeof (this.accuracy.ta0at_timecalc_2 !== 'undefined') && this.accuracy.ta0at_timecalc_2 !== "" && this.accuracy.ta0at_timecalc_2 !== null)
                && (typeof (this.accuracy.ta0at_timemeas_2 !== 'undefined') && this.accuracy.ta0at_timemeas_2 !== "" && this.accuracy.ta0at_timemeas_2 !== null)) {
                var error2 = ((this.accuracy.ta0at_timecalc_2 - this.accuracy.ta0at_timemeas_2) / this.accuracy.ta0at_timemeas_2 * 100);
                this.accuracy.ta0at_test2 = error2.toFixed(3);
                if (isNaN(this.accuracy.ta0at_test2)) {
                    this.accuracy.ta0at_test2 = 0;
                }
            }
            if ((typeof (this.accuracy.ta0at_timecalc_3 !== 'undefined') && this.accuracy.ta0at_timecalc_3 !== "" && this.accuracy.ta0at_timecalc_3 !== null)
                && (typeof (this.accuracy.ta0at_timemeas_3 !== 'undefined') && this.accuracy.ta0at_timemeas_3 !== "" && this.accuracy.ta0at_timemeas_3 !== null)) {
                var error3 = ((this.accuracy.ta0at_timecalc_3 - this.accuracy.ta0at_timemeas_3) / this.accuracy.ta0at_timemeas_3 * 100);
                this.accuracy.ta0at_test3 = error3.toFixed(3);
                if (isNaN(this.accuracy.ta0at_test3)) {
                    this.accuracy.ta0at_test3 = 0;
                }
            }
            // }
            if (this.accuracy.ta0at_test1 !== "" || this.accuracy.ta0at_test2 !== "" || this.accuracy.ta0at_test3 !== "") {
                var averageError = (Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3;
                this.accuracy.ta0at_avg = averageError.toFixed(3);
            }
            if (isNaN(this.accuracy.ta0at_avg)) {
                this.accuracy.ta0at_avg = 0;
            }
        }
        else if (this.deviceVoltage === '02') {
            /* if (parseFloat(this.accuracy3P.ta0at_timemeas_1) > parseFloat(this.accuracy3P.ta0at_timecalc_1)) {
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
                this.accuracy3P.ta0at_test1 = error13P.toFixed(3);
                if (isNaN(this.accuracy3P.ta0at_test1)) {
                    this.accuracy3P.ta0at_test1 = 0;
                }
            }
            if ((typeof (this.accuracy3P.ta0at_timecalc_2 !== 'undefined') && this.accuracy3P.ta0at_timecalc_2 !== "" && this.accuracy3P.ta0at_timecalc_2 !== null)
                && (typeof (this.accuracy3P.ta0at_timemeas_2 !== 'undefined') && this.accuracy3P.ta0at_timemeas_2 !== "" && this.accuracy3P.ta0at_timemeas_2 !== null)) {
                var error23P = ((this.accuracy3P.ta0at_timecalc_2 - this.accuracy3P.ta0at_timemeas_2) / this.accuracy3P.ta0at_timemeas_2 * 100);
                this.accuracy3P.ta0at_test2 = error23P.toFixed(3);
                if (isNaN(this.accuracy3P.ta0at_test2)) {
                    this.accuracy3P.ta0at_test2 = 0;
                }
            }
            if ((typeof (this.accuracy3P.ta0at_timecalc_3 !== 'undefined') && this.accuracy3P.ta0at_timecalc_3 !== "" && this.accuracy3P.ta0at_timecalc_3 !== null)
                && (typeof (this.accuracy3P.ta0at_timemeas_3 !== 'undefined') && this.accuracy3P.ta0at_timemeas_3 !== "" && this.accuracy3P.ta0at_timemeas_3 !== null)) {
                var error33P = ((this.accuracy3P.ta0at_timecalc_3 - this.accuracy3P.ta0at_timemeas_3) / this.accuracy3P.ta0at_timemeas_3 * 100);
                this.accuracy3P.ta0at_test3 = error33P.toFixed(3);
                if (isNaN(this.accuracy3P.ta0at_test3)) {
                    this.accuracy3P.ta0at_test3 = 0;
                }
            }
            // }
            if (this.accuracy3P.ta0at_test1 !== "" || this.accuracy3P.ta0at_test2 !== "" || this.accuracy3P.ta0at_test3 !== "") {
                var averageError3P = (Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3;
                this.accuracy3P.ta0at_avg = averageError3P.toFixed(3);
            }
            if (isNaN(this.accuracy3P.ta0at_avg)) {
                this.accuracy3P.ta0at_avg = 0;
            }
        }
    };
    // created by Ameer (16/10/2018)
    SealOpcInspectPage.prototype.errorAvg = function () {
        this.accuracy.ta0at_avg = ((Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3).toFixed(3);
        if (isNaN(this.accuracy.ta0at_avg)) {
            this.accuracy.ta0at_avg = 0;
        }
        this.accuracy3P.ta0at_avg = ((Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3).toFixed(3);
        if (isNaN(this.accuracy3P.ta0at_avg)) {
            this.accuracy3P.ta0at_avg = 0;
        }
    };
    //created by Ameer (18/10/2018)
    SealOpcInspectPage.prototype.searchLookUp = function (inputType) {
        var _this = this;
        debugger;
        // debugger;
        var queryPart = null;
        if (inputType === "main") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].TA0ANOMALYMAIN);
        }
        else if (inputType === "category") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].TA0ANOMALYCATEGORY);
        }
        else if (inputType === "type") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].TA0ANOMALYTYPE);
        }
        else if (inputType === "corrective") {
            queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].TA0CORRECTIVECODE);
        }
        /*  else {
             queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1");
         } */
        this.jsonStore
            .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart)
            .then(function (result) {
            _this.opcGroupList = result;
        });
        this.assignValue(inputType);
    };
    SealOpcInspectPage.prototype.assignValue = function (inputType) {
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
                        value: [_this.opcGroupList[i].json.value],
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
                                        case 'corrective':
                                            _this.corrective.ta0at_corrective_action = data[0];
                                            break;
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
    SealOpcInspectPage.prototype.checkIntergerVal = function (event, key) {
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
    SealOpcInspectPage.prototype.checkDecimalLength8 = function (eventVal, keyString) {
        debugger;
        // const NUMBER_REGEXP = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z0-9]+$)?$/;
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
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
    SealOpcInspectPage.prototype.outputLength = function (eventVal, key) {
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
    SealOpcInspectPage.prototype.outputAplhaNumeric = function (event, key) {
        debugger;
        var regExp = new RegExp("^[a-zA-Z0-9/ ]*$"); //001
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
    SealOpcInspectPage.prototype.outputSpeAplhaNumeric = function (event, key) {
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
    SealOpcInspectPage.prototype.checkNegative = function (objectVal, keyString) {
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
    SealOpcInspectPage.prototype.saveDetails = function () {
        var _this = this;
        debugger;
        var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.json.wonum;
        this.validationMandtory();
        if (this.allowSave === true) {
            // Calling method to saving all data.
            this.savingTestInspectionData();
        }
        else if (this.warningFlag === true) {
            this.gf.warningAlert("Error", "Please insert mandatory field.", "Dismiss");
        }
        else {
            var confirm_1 = this.alertCtrl.create({
                title: 'Confirm Cancel',
                message: 'Do you want to proceed with not all field is fill up ?',
                buttons: [
                    {
                        text: 'Cancel'
                    }, {
                        text: 'Ok',
                        handler: function () {
                            // Calling method to saving all data.
                            _this.savingTestInspectionData();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    /**
     * Description  : Method to saving all data.
     * Created      : Alif (15.07.2019)
     */
    SealOpcInspectPage.prototype.savingTestInspectionData = function () {
        var _this = this;
        console.log("saving all data...");
        debugger;
        var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.json.wonum;
        if (this.maIndex != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
            // Skip for LV Inspection
            if (this.deviceVoltage !== this.dCons.VOL_LEVEL_LPC_LV_400V) {
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
            }
            var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
        }
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            //Accuracy
            if (this.accuracy.ta0testind === 'M') {
                // Reset Portable Fields
                this.accuracy.ta0at_pteserialnum = 0;
                this.accuracy.ta0at_voltage_r = 0;
                this.accuracy.ta0at_voltage_y = 0;
                this.accuracy.ta0at_voltage_b = 0;
                this.accuracy.ta0at_current_r = 0;
                this.accuracy.ta0at_current_y = 0;
                this.accuracy.ta0at_current_b = 0;
                this.accuracy.ta0at_power_r = 0;
                this.accuracy.ta0at_power_y = 0;
                this.accuracy.ta0at_power_b = 0;
                this.accuracy.ta0at_powerfactor_r = 0;
                this.accuracy.ta0at_powerfactor_y = 0;
                this.accuracy.ta0at_powerfactor_b = 0;
                this.accuracy.ta0at_constant_1 = 0;
                this.accuracy.ta0at_constant_2 = 0;
                this.accuracy.ta0at_constant_3 = 0;
            }
            else {
                // Reset Manual Fields
                this.accuracy.ta0at_timecalc_1 = 0;
                this.accuracy.ta0at_timecalc_2 = 0;
                this.accuracy.ta0at_timecalc_3 = 0;
                this.accuracy.ta0at_timemeas_1 = 0;
                this.accuracy.ta0at_timemeas_2 = 0;
                this.accuracy.ta0at_timemeas_3 = 0;
            }
            this.accuracy.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P;
            this.accuracy.siteid = siteid;
            this.accuracy.wonum = wonum;
            this.accuracy.assetnum = assetnum;
            // Push Data into JSON for Accuracy
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy);
            this.accuracy3P_N.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P_N;
            this.accuracy3P_N.siteid = siteid;
            this.accuracy3P_N.wonum = wonum;
            this.accuracy3P_N.assetnum = assetnum;
            // Push Data into JSON After Accuracy Test  
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);
            // Magnet Test
            if (this.magnet.loc_test_ta0na === 'Y') {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = true;
            }
            else {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = false;
                this.magnet.ta0naremarks = "-";
            }
            //Push Magnet Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);
            if (this.neutral.loc_test_ta0na === 'Y') {
                this.neutral.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_NEUT;
                this.neutral.siteid = siteid;
                this.neutral.wonum = wonum;
                this.neutral.assetnum = assetnum;
                this.neutral.ta0na = true;
            }
            else {
                this.neutral.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_NEUT;
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
                this.currentCompare.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                this.currentCompare.siteid = siteid;
                this.currentCompare.wonum = wonum;
                this.currentCompare.assetnum = assetnum;
                this.currentCompare.ta0na = true;
            }
            else {
                this.currentCompare.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                this.currentCompare.siteid = siteid;
                this.currentCompare.wonum = wonum;
                this.currentCompare.assetnum = assetnum;
                this.currentCompare.ta0na = false;
            }
            //Push current Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentCompare);
            if (this.magnet.loc_test_ta0na === 'Y') {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = true;
            }
            else {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = false;
                this.magnet.ta0naremarks = "-";
            }
            //Push Magnet Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);
            // Polarity Test
            this.polarity.assetnum = assetnum;
            this.polarity.siteid = siteid;
            this.polarity.wonum = wonum;
            this.polarity.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_POLT;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.polarity);
            if (this.accuracy3P.ta0testind === 'M') {
                // Reset Portable Fields
                this.accuracy3P.ta0at_pteserialnum = 0;
                this.accuracy3P.ta0at_voltage_r = 0;
                this.accuracy3P.ta0at_voltage_y = 0;
                this.accuracy3P.ta0at_voltage_b = 0;
                this.accuracy3P.ta0at_current_r = 0;
                this.accuracy3P.ta0at_current_y = 0;
                this.accuracy3P.ta0at_current_b = 0;
                this.accuracy3P.ta0at_power_r = 0;
                this.accuracy3P.ta0at_power_y = 0;
                this.accuracy3P.ta0at_power_b = 0;
                this.accuracy3P.ta0at_powerfactor_r = 0;
                this.accuracy3P.ta0at_powerfactor_y = 0;
                this.accuracy3P.ta0at_powerfactor_b = 0;
                this.accuracy3P.ta0at_constant_1 = 0;
                this.accuracy3P.ta0at_constant_2 = 0;
                this.accuracy3P.ta0at_constant_3 = 0;
            }
            else {
                // Reset Manual Fields
                this.accuracy3P.ta0at_timecalc_1 = 0;
                this.accuracy3P.ta0at_timecalc_2 = 0;
                this.accuracy3P.ta0at_timecalc_3 = 0;
                this.accuracy3P.ta0at_timemeas_1 = 0;
                this.accuracy3P.ta0at_timemeas_2 = 0;
                this.accuracy3P.ta0at_timemeas_3 = 0;
            }
            this.accuracy3P.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P;
            this.accuracy3P.siteid = siteid;
            this.accuracy3P.wonum = wonum;
            this.accuracy3P.assetnum = assetnum;
            //Push accuracy 3P data into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P);
            this.accuracy3P_N.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P_N;
            this.accuracy3P_N.siteid = siteid;
            this.accuracy3P_N.wonum = wonum;
            this.accuracy3P_N.assetnum = assetnum;
            // Push Data into JSON After Accuracy Test  
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);
        }
        if (this.physical.loc_test_ta0na === 'Y') {
            this.physical.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET;
            this.physical.siteid = siteid;
            this.physical.wonum = wonum;
            this.physical.assetnum = assetnum;
            this.physical.ta0na = true;
        }
        else {
            this.physical.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET;
            this.physical.siteid = siteid;
            this.physical.wonum = wonum;
            this.physical.assetnum = assetnum;
            this.physical.ta0na = false;
        }
        // Push DATA into JSON for Physical Examination
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.physical);
        if (this.tampering.loc_test_ta0na === 'Y') {
            this.tampering.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP;
            this.tampering.siteid = siteid;
            this.tampering.wonum = wonum;
            this.tampering.assetnum = assetnum;
            this.tampering.ta0na = true;
        }
        else {
            this.tampering.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP;
            this.tampering.siteid = siteid;
            this.tampering.wonum = wonum;
            this.tampering.assetnum = assetnum;
            this.tampering.ta0na = false;
        }
        //Push data Temp into JSON
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.tampering);
        this.witness.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
        this.witness.siteid = siteid;
        this.witness.wonum = wonum;
        this.witness.assetnum = assetnum;
        this.witness.ta0na = true;
        //Push data Corrective into JSON
        // this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.corrective);
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);
        // Dail Test
        this.meterRegister.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_DAILTEST;
        this.meterRegister.siteid = siteid;
        this.meterRegister.wonum = wonum;
        this.meterRegister.assetnum = assetnum;
        // Saving Meter Register Test
        // Edited: Alif (04/05/2019)
        this.meterRegister.ta4meterregister = [];
        this.meterRegisterBf.type = "before";
        this.meterRegister.ta4meterregister.push(this.meterRegisterBf);
        this.meterRegisterAf.type = "after";
        this.meterRegister.ta4meterregister.push(this.meterRegisterAf);
        // Saving Meter Register 3 Test
        // Created: Alif (14/05/2019)
        // Meter Register (Before)
        this.meterRegister.ta4meterregisterbefore = [];
        for (var i = 0; i < this.meterRegisterBefore.length; i++) {
            this.meterRegister.ta4meterregisterbefore.push(this.meterRegisterBefore[i]);
        }
        // Meter Register (After)
        this.meterRegister.ta4meterregisterafter = [];
        for (var i = 0; i < this.meterRegisterAfter.length; i++) {
            this.meterRegister.ta4meterregisterafter.push(this.meterRegisterAfter[i]);
        }
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.meterRegister);
        // Sil and sticker physical inspection... 
        if (this.meterCoverArray.ta0sealcondition != null || this.meterCoverArray.ta0sealcondition != undefined) {
            this.meterCoverArray.assetnum = assetnum;
            this.meterCoverArray.siteid = siteid;
            this.meterCoverArray.wonum = wonum;
            this.meterCoverArray.ta0seallocation = "METER_COVER_1";
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.meterCoverArray);
        }
        // Save Data TerminalCover
        if (this.terminalCoverArray.ta0sealcondition != null || this.terminalCoverArray.ta0sealcondition != undefined) {
            this.terminalCoverArray.assetnum = assetnum;
            this.terminalCoverArray.siteid = siteid;
            this.terminalCoverArray.wonum = wonum;
            this.terminalCoverArray.ta0seallocation = "TERMINAL_COVER_1";
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail.push(this.terminalCoverArray);
        }
        if (this.sterminalCoverArray.ta0stickercondition != null || this.sterminalCoverArray.ta0stickercondition != undefined) {
            this.sterminalCoverArray.assetnum = assetnum;
            this.sterminalCoverArray.siteid = siteid;
            this.sterminalCoverArray.wonum = wonum;
            this.sterminalCoverArray.ta0stickerlocation = "TERMINAL_COVER_1";
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail.push(this.sterminalCoverArray);
        }
        // Saving to ta0testdetails
        // Remove Additional Field from ta4testdata
        if (typeof (this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined") {
            var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            var wtns = data.filter(function (item) {
                return item.ta0testtype === "WTNS";
            });
            var tamp = data.filter(function (item) {
                return item.ta0testtype === "TAMP";
            });
            var dail = data.filter(function (item) {
                return item.ta0testtype === "DAILTEST";
            });
            var acct = data.filter(function (item) {
                return item.ta0testtype === "AC3P_N";
            });
            var mgnt = data.filter(function (item) {
                return item.ta0testtype === "MGNT";
            });
            var curr = data.filter(function (item) {
                return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
            });
            if (wtns.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "WTNS";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
                delete this.witness.ta0signaturecustomer;
                delete this.witness.ta0examinername;
                delete this.witness.ta0examinerid;
                delete this.witness.ta0examinersite;
                delete this.witness.ta0examinerposition;
                delete this.witness.ta0examinerdepartment;
                // Signature
                console.log("Sign 1: " + JSON.stringify(this.signaturePad1));
                console.log("Sign 2: " + JSON.stringify(this.signaturePad2));
                delete this.witness.ta0witness_sign;
                delete this.witness.ta0examiner_sign;
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);
            }
            if (tamp.length > 0) {
                var index2 = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "TAMP";
                });
                if (index2 > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index2, 1);
                }
            }
            if (dail.length > 0) {
                var dailIndex = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "DAILTEST";
                });
                if (dailIndex > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(dailIndex, 1);
                }
            }
            if (acct.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "AC3P_N";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
            }
            if (mgnt.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "MGNT";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
            }
            if (curr.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
            }
        }
        // Reset
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        // Adding After Accuracy Test to ta4testdata
        if (typeof (this.meterRegister) !== 'undefined') {
            var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            var acct = data.filter(function (item) {
                return item.ta0testtype === "DAILTEST";
            });
            if (acct.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "AC3P_N";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
            }
            // After Accuracy Test
            this.accuracy3P_N.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P_N;
            this.accuracy3P_N.siteid = siteid;
            this.accuracy3P_N.wonum = wonum;
            this.accuracy3P_N.assetnum = assetnum;
            // Push Data into JSON After Accuracy Test  
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.accuracy3P_N);
        }
        // Adding Dail Test to ta4testdata
        if (typeof (this.meterRegister) !== 'undefined') {
            var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            var dail = data.filter(function (item) {
                return item.ta0testtype === "DAILTEST";
            });
            if (dail.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "DAILTEST";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
            }
            // Dail Test
            this.meterRegister.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_DAILTEST;
            this.meterRegister.siteid = siteid;
            this.meterRegister.wonum = wonum;
            this.meterRegister.assetnum = assetnum;
            // Saving Meter Register Test
            // Edited: Alif (04/05/2019)
            this.meterRegister.ta4meterregister = [];
            this.meterRegisterBf.type = "before";
            this.meterRegister.ta4meterregister.push(this.meterRegisterBf);
            this.meterRegisterAf.type = "after";
            this.meterRegister.ta4meterregister.push(this.meterRegisterAf);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.meterRegister);
        }
        // Adding Witness to ta4testdata
        if (typeof (this.witness) !== "undefined") {
            var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            var wtns = data.filter(function (item) {
                return item.ta0testtype === "WTNS";
            });
            if (wtns.length > 0) {
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "WTNS";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
                this.witness.ta0signaturecustomer = this.customerSignature;
                this.witness.ta0examinername = this.gv.displayname;
                this.witness.ta0examinerid = this.lead;
                this.witness.ta0examinersite = this.station;
                this.witness.ta0examinerposition = this.gv.employeetype;
                this.witness.ta0examinerdepartment = this.examinerDepartment;
                // Signature
                console.log("Sign 1: " + JSON.stringify(this.signaturePad1));
                console.log("Sign 2: " + JSON.stringify(this.signaturePad2));
                if (typeof (this.signaturePad1) !== "undefined") {
                    this.witness.ta0witness_sign = this.signaturePad1.toDataURL();
                }
                if (typeof (this.signaturePad2) !== "undefined") {
                    this.witness.ta0examiner_sign = this.signaturePad2.toDataURL();
                }
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.witness);
            }
        }
        if (typeof (this.magnet) !== "undefined") {
            var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            var mgnt = data.filter(function (item) {
                return item.ta0testtype === "MGNT";
            });
            if (mgnt.length > 0) {
                // Clearing data if available
                var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                    return item.ta0testtype === "MGNT";
                });
                if (index > -1) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                }
            }
            if (this.magnet.loc_test_ta0na === 'Y') {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = true;
            }
            else {
                this.magnet.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MGNT;
                this.magnet.siteid = siteid;
                this.magnet.wonum = wonum;
                this.magnet.assetnum = assetnum;
                this.magnet.ta0na = false;
                this.magnet.ta0naremarks = "-";
            }
            //Push Magnet Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.magnet);
        }
        // checking device voltage
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            // adding test 'CURR' into ta4testdata
            if (typeof (this.currentCompare) !== "undefined") {
                var data = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
                var curr = data.filter(function (item) {
                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                });
                if (curr.length > 0) {
                    // Clearing data if available
                    var index = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.findIndex(function (item) {
                        return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                    });
                    if (index > -1) {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.splice(index, 1);
                    }
                }
                if (this.currentCompare.loc_test_ta0na === 'Y') {
                    this.currentCompare.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                    this.currentCompare.siteid = siteid;
                    this.currentCompare.wonum = wonum;
                    this.currentCompare.assetnum = assetnum;
                    this.currentCompare.ta0na = true;
                }
                else {
                    this.currentCompare.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CURR;
                    this.currentCompare.siteid = siteid;
                    this.currentCompare.wonum = wonum;
                    this.currentCompare.assetnum = assetnum;
                    this.currentCompare.ta0na = false;
                }
                //Push CurrentComprison Test date into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.currentCompare);
            }
        }
        // Test Status
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
        debugger;
        this.remarksFeeder.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REMARKS;
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(this.remarksFeeder);
        debugger;
        this.gf.startLoading();
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            // Convert ta4testdata into string data type before sync is running.
            // Created : Alif (21.02.2020)
            var testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.displayToast("OPC Inspection locally updated.");
            this.gf.stopLoading();
            // Back to service-execution page.
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        }
        else if ((__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    //item, wonumVal, pageAction, feederCode, workOrderType) 
                    var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                    var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                    var itemArray = [];
                    itemArray[0] = (itemVal);
                    debugger;
                    _this.dataService
                        .saveRecordWithNewType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        debugger;
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
                            _this.gf.warningAlert("Success", "OPC Inspection  save successfully.", "Dismiss");
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
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                    _this.gf.stopLoading();
                    // Back to service-execution page.
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                }
            });
        }
        else {
            var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
            var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
            var itemArray = [];
            itemArray.push(itemVal);
            debugger;
            this.dataService
                .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
                debugger;
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
                    _this.gf.warningAlert("Success", "OPC Inspection  save successfully.", "Dismiss");
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
        }
    };
    SealOpcInspectPage.prototype.validationMandtory = function () {
        debugger;
        var mandatory = false;
        var flagCheck = false;
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.accuracy.loc_test_ta0na === 'N') {
                if (this.accuracy.ta0testind === 'P') {
                    if (typeof (this.accuracy.ta0at_pteserialnum) == 'undefined' || this.accuracy.ta0at_pteserialnum === '' || this.accuracy.ta0at_pteserialnum === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_voltage_r) == 'undefined' || this.accuracy.ta0at_voltage_r === '' || this.accuracy.ta0at_voltage_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_voltage_y) == 'undefined' || this.accuracy.ta0at_voltage_y === '' || this.accuracy.ta0at_voltage_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_voltage_b) == 'undefined' || this.accuracy.ta0at_voltage_b === '' || this.accuracy.ta0at_voltage_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_current_r) == 'undefined' || this.accuracy.ta0at_current_r === '' || this.accuracy.ta0at_current_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_current_y) == 'undefined' || this.accuracy.ta0at_current_y === '' || this.accuracy.ta0at_current_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_current_b) == 'undefined' || this.accuracy.ta0at_current_b === '' || this.accuracy.ta0at_current_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_power_r) == 'undefined' || this.accuracy.ta0at_power_r === '' || this.accuracy.ta0at_power_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_power_y) == 'undefined' || this.accuracy.ta0at_power_y === '' || this.accuracy.ta0at_power_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_power_b) == 'undefined' || this.accuracy.ta0at_power_b === '' || this.accuracy.ta0at_power_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_powerfactor_r) == 'undefined' || this.accuracy.ta0at_powerfactor_r === '' || this.accuracy.ta0at_powerfactor_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_powerfactor_y) == 'undefined' || this.accuracy.ta0at_powerfactor_y === '' || this.accuracy.ta0at_powerfactor_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_powerfactor_b) == 'undefined' || this.accuracy.ta0at_powerfactor_b === '' || this.accuracy.ta0at_powerfactor_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_constant_1) == 'undefined' || this.accuracy.ta0at_constant_1 === '' || this.accuracy.ta0at_constant_1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_constant_2) == 'undefined' || this.accuracy.ta0at_constant_2 === '' || this.accuracy.ta0at_constant_2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_constant_3) == 'undefined' || this.accuracy.ta0at_constant_3 === '' || this.accuracy.ta0at_constant_3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for portable
                else if (this.accuracy.ta0testind === 'M') {
                    if (typeof (this.accuracy.ta0at_timecalc_1) == 'undefined' || this.accuracy.ta0at_timecalc_1 === '' || this.accuracy.ta0at_timecalc_1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timecalc_3) == 'undefined' || this.accuracy.ta0at_timecalc_3 === '' || this.accuracy.ta0at_timecalc_3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timemeas_1) == 'undefined' || this.accuracy.ta0at_timemeas_1 === '' || this.accuracy.ta0at_timemeas_1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timemeas_2) == 'undefined' || this.accuracy.ta0at_timemeas_2 === '' || this.accuracy.ta0at_timemeas_2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_timemeas_3) == 'undefined' || this.accuracy.ta0at_timemeas_3 === '' || this.accuracy.ta0at_timemeas_3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test1) == 'undefined' || this.accuracy.ta0at_test1 === '' || this.accuracy.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test2) == 'undefined' || this.accuracy.ta0at_test2 === '' || this.accuracy.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy.ta0at_test3) == 'undefined' || this.accuracy.ta0at_test3 === '' || this.accuracy.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for manual
            }
            else {
                if (typeof (this.accuracy.ta0naremarks) == 'undefined' || this.accuracy.ta0naremarks === '' || this.accuracy.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.neutral.loc_test_ta0na === 'N') {
                if (typeof (this.neutral.ta0nt_phase) == 'undefined' || this.neutral.ta0nt_phase === '' || this.neutral.ta0nt_phase === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_neutral) == 'undefined' || this.neutral.ta0nt_neutral === '' || this.neutral.ta0nt_neutral === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_in_life) == 'undefined' || this.neutral.ta0nt_in_life === '' || this.neutral.ta0nt_in_life === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_in_neutral) == 'undefined' || this.neutral.ta0nt_in_neutral === '' || this.neutral.ta0nt_in_neutral === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_out_life) == 'undefined' || this.neutral.ta0nt_out_life === '' || this.neutral.ta0nt_out_life === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.neutral.ta0nt_out_neutral) == 'undefined' || this.neutral.ta0nt_out_neutral === '' || this.neutral.ta0nt_out_neutral === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.neutral.ta0naremarks) == 'undefined' || this.neutral.ta0naremarks === '' || this.neutral.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.customerSignature === "Yes") {
                if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '') {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '') {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '') {
                    flagCheck = true;
                }
            }
            if (this.valueChangeRegisterTest === 'before' && flagCheck !== true) {
                for (var a = 0; a < this.meterRegisterBefore.length; a++) {
                    if (typeof (this.meterRegisterBefore[a].ta4ma_reg_start) == undefined || this.meterRegisterBefore[a].ta4ma_reg_start === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) == undefined || this.meterRegisterBefore[a].ta4ma_reg_stop === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) == undefined || this.meterRegisterBefore[a].ta4ma_reg_error === '') {
                        flagCheck = true;
                    }
                }
            }
            else if (this.valueChangeRegisterTest === 'after' && flagCheck !== true) {
                for (var a = 0; a < this.meterRegisterAfter.length; a++) {
                    if (typeof (this.meterRegisterAfter[a].ta4ma_reg_start) == undefined || this.meterRegisterAfter[a].ta4ma_reg_start === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) == undefined || this.meterRegisterAfter[a].ta4ma_reg_stop === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) == undefined || this.meterRegisterAfter[a].ta4ma_reg_error === '') {
                        flagCheck = true;
                    }
                }
            }
            // Closed Because Not Need (Alif : 02.04.2019)
            // if (this.tampering.loc_test_ta0na === 'N') {
            //   if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === empty) {
            //     flagCheck = true;
            //   }
            // } else {
            //   if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === empty) {
            //     flagCheck = true;
            //   }
            // } if (this.corrective.loc_test_ta0na === 'N') {
            //   if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === empty) {
            //     flagCheck = true;
            //   } else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === empty) {
            //     flagCheck = true;
            //   }
            // } else {
            //   if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === empty) {
            //     flagCheck = true;
            //   }
            // }
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.physical.ta0ts_emdisplay) == 'undefined' && this.physical.ta0ts_emdisplay === '' && this.physical.ta0ts_emdisplay === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.physical.ta0ts_meter) == 'undefined' && this.physical.ta0ts_meter === '' && this.physical.ta0ts_meter === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.physical.ta0naremarks) == 'undefined' || this.physical.ta0naremarks === '' || this.physical.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.currentCompare.loc_test_ta0na === 'N') {
                if (typeof (this.currentCompare.ta0cu_actual_r) == 'undefined' || this.currentCompare.ta0cu_actual_r === '' || this.currentCompare.ta0cu_actual_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_actual_y) == 'undefined' || this.currentCompare.ta0cu_actual_y === '' || this.currentCompare.ta0cu_actual_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_actual_b) == 'undefined' || this.currentCompare.ta0cu_actual_b === '' || this.currentCompare.ta0cu_actual_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_disp_r) == 'undefined' || this.currentCompare.ta0cu_disp_r === '' || this.currentCompare.ta0cu_disp_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_disp_y) == 'undefined' || this.currentCompare.ta0cu_disp_y === '' || this.currentCompare.ta0cu_disp_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.currentCompare.ta0cu_disp_b) == 'undefined' || this.currentCompare.ta0cu_disp_b === '' || this.currentCompare.ta0cu_disp_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.currentCompare.ta0naremarks) == 'undefined' || this.currentCompare.ta0naremarks === '' || this.currentCompare.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.polarity.loc_test_ta0na === 'N') {
                if (typeof (this.polarity.ta0po_tm_r) == 'undefined' || this.polarity.ta0po_tm_r === '' || this.polarity.ta0po_tm_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.polarity.ta0po_tm_y) == 'undefined' || this.polarity.ta0po_tm_y === '' || this.polarity.ta0po_tm_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.polarity.ta0po_tm_b) == 'undefined' || this.polarity.ta0po_tm_b === '' || this.polarity.ta0po_tm_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.polarity.ta0po_tm_n) == 'undefined' || this.polarity.ta0po_tm_n === '' || this.polarity.ta0po_tm_n === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.polarity.ta0naremarks) == 'undefined' || this.polarity.ta0naremarks === '' || this.polarity.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.magnet.loc_test_ta0na === 'N') {
                if (typeof (this.magnet.ta0mt_magnet_result) == 'undefined' || this.magnet.ta0mt_magnet_result === '' || this.magnet.ta0mt_magnet_result === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.magnet.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.accuracy3P.loc_test_ta0na === 'N') {
                if (typeof (this.accuracy3P.ta0testind) == 'undefined' || this.accuracy3P.ta0testind === '' || this.accuracy3P.ta0testind === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (this.accuracy3P.ta0testind === 'P') {
                    if (typeof (this.accuracy3P.ta0at_pteserialnum) == 'undefined' || this.accuracy3P.ta0at_pteserialnum === '' || this.accuracy3P.ta0at_ptserialnum === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_voltage_r) == 'undefined' || this.accuracy3P.ta0at_voltage_r === '' || this.accuracy3P.ta0at_voltage_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_voltage_y) == 'undefined' || this.accuracy3P.ta0at_voltage_y === '' || this.accuracy3P.ta0at_voltage_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_voltage_b) == 'undefined' || this.accuracy3P.ta0at_voltage_b === '' || this.accuracy3P.ta0at_voltage_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_current_r) == 'undefined' || this.accuracy3P.ta0at_current_r === '' || this.accuracy3P.ta0at_current_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_current_y) == 'undefined' || this.accuracy3P.ta0at_current_y === '' || this.accuracy3P.ta0at_current_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_current_b) == 'undefined' || this.accuracy3P.ta0at_current_b === '' || this.accuracy3P.ta0at_current_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_power_r) == 'undefined' || this.accuracy3P.ta0at_power_r === '' || this.accuracy3P.ta0at_power_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_power_y) == 'undefined' || this.accuracy3P.ta0at_power_y === '' || this.accuracy3P.ta0at_power_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_power_b) == 'undefined' || this.accuracy3P.ta0at_power_b === '' || this.accuracy3P.ta0at_power_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_powerfactor_r) == 'undefined' || this.accuracy3P.ta0at_powerfactor_r === '' || this.accuracy3P.ta0at_powerfactor_r === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_powerfactor_y) == 'undefined' || this.accuracy3P.ta0at_powerfactor_y === '' || this.accuracy3P.ta0at_powerfactor_y === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_powerfactor_b) == 'undefined' || this.accuracy3P.ta0at_powerfactor_b === '' || this.accuracy3P.ta0at_powerfactor_b === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for portable
                else if (this.accuracy3P.ta0testind === 'M') {
                    if (typeof (this.accuracy3P.ta0at_timecalc_1) == 'undefined' || this.accuracy3P.ta0at_timecalc_1 === '' || this.accuracy3P.ta0at_timecalc_1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timecalc_2) == 'undefined' || this.accuracy.ta0at_timecalc_2 === '' || this.accuracy.ta0at_timecalc_2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timecalc_3) == 'undefined' || this.accuracy3P.ta0at_timecalc_3 === '' || this.accuracy3P.ta0at_timecalc_3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timemeas_1) == 'undefined' || this.accuracy3P.ta0at_timemeas_1 === '' || this.accuracy3P.ta0at_timemeas_1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timemeas_2) == 'undefined' || this.accuracy3P.ta0at_timemeas_2 === '' || this.accuracy3P.ta0at_timemeas_2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_timemeas_3) == 'undefined' || this.accuracy3P.ta0at_timemeas_3 === '' || this.accuracy3P.ta0at_timemeas_3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test1) == 'undefined' || this.accuracy3P.ta0at_test1 === '' || this.accuracy3P.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test2) == 'undefined' || this.accuracy3P.ta0at_test2 === '' || this.accuracy3P.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                    else if (typeof (this.accuracy3P.ta0at_test3) == 'undefined' || this.accuracy3P.ta0at_test3 === '' || this.accuracy3P.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                        flagCheck = true;
                    }
                } //end check for manual
            }
            else {
                if (typeof (this.accuracy3P.ta0naremarks) == 'undefined' || this.magnet.ta0naremarks === '' || this.magnet.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (typeof (this.meterRegister.ta4pts) == 'undefined' || this.meterRegister.ta4pts === '') {
                flagCheck = true;
            }
            if (this.customerSignature === "Yes") {
                if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '') {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '') {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '') {
                    flagCheck = true;
                }
            }
            if (this.valueChangeRegisterTest === 'before' && flagCheck !== true) {
                for (var a = 0; a < this.meterRegisterBefore.length; a++) {
                    if (typeof (this.meterRegisterBefore[a].ta4ma_reg_start) == undefined || this.meterRegisterBefore[a].ta4ma_reg_start === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) == undefined || this.meterRegisterBefore[a].ta4ma_reg_stop === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) == undefined || this.meterRegisterBefore[a].ta4ma_reg_error === '') {
                        flagCheck = true;
                    }
                }
            }
            else if (this.valueChangeRegisterTest === 'after' && flagCheck !== true) {
                for (var a = 0; a < this.meterRegisterAfter.length; a++) {
                    if (typeof (this.meterRegisterAfter[a].ta4ma_reg_start) == undefined || this.meterRegisterAfter[a].ta4ma_reg_start === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) == undefined || this.meterRegisterAfter[a].ta4ma_reg_stop === '') {
                        flagCheck = true;
                    }
                    else if (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) == undefined || this.meterRegisterAfter[a].ta4ma_reg_error === '') {
                        flagCheck = true;
                    }
                }
            }
        }
        debugger;
        if (this.signaturePad2.isEmpty()) {
            mandatory = true;
        }
        else {
            mandatory = false;
        }
        if (mandatory === true) {
            this.warningFlag = true;
            this.allowSave = false;
        }
        else {
            this.allowSave = true;
        }
        /*  else if (flagCheck === true) {
          this.allowSave = false;
        } else if (flagCheck === false) {
          this.allowSave = true;
        }
     */
    };
    //created by Ameer (22/10/2018)
    SealOpcInspectPage.prototype.barcodeScan = function (phase) {
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
    SealOpcInspectPage.prototype.calculateTransformaterRatio = function () {
        console.log("auto calculation transformation ratio..");
        // Temporary Variables..
        var AT, BT, CT, DT;
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_r) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_r !== null && this.transformaterRatio.ta0fc_maincurrent_bb_r !== "") ||
            (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
                (typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_r) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) + Number(this.transformaterRatio.ta0fc_maincurrent_bb_b);
            if (!isNaN(total)) {
                // sent value to total section.
                this.transformaterRatio.ta0fc_maincurrent_bb_total = total.toFixed(3);
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
                this.transformaterRatio.ta0fc_maincurrent_dm_total = total.toFixed(3);
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
                this.transformaterRatio.ta0fc_dupcurrent_ct_total = total.toFixed(3);
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
                this.transformaterRatio.ta0fc_dupcurrent_tm_total = total.toFixed(3);
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
                this.transformaterRatio.ta0fc_ctratio_r = total.toFixed(3);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_y) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_y !== null && this.transformaterRatio.ta0fc_maincurrent_bb_y !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_y) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_y !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_y) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_y) * 5;
            if (!isNaN(total)) {
                // sent value to ct ratio yellow
                this.transformaterRatio.ta0fc_ctratio_y = total.toFixed(3);
            }
        }
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_b) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_b !== null && this.transformaterRatio.ta0fc_maincurrent_bb_b !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_b) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_b !== "")) {
            // Variables
            var total = 0;
            total = Number(this.transformaterRatio.ta0fc_maincurrent_bb_b) / Number(this.transformaterRatio.ta0fc_dupcurrent_ct_b) * 5;
            if (!isNaN(total)) {
                // sent value to ct ratio blue
                this.transformaterRatio.ta0fc_ctratio_b = total.toFixed(3);
            }
        }
        // Calculate Different
        if ((typeof (this.transformaterRatio.ta0fc_maincurrent_bb_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_bb_total !== null && this.transformaterRatio.ta0fc_maincurrent_bb_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_maincurrent_dm_total) !== "undefined" && this.transformaterRatio.ta0fc_maincurrent_dm_total !== null && this.transformaterRatio.ta0fc_maincurrent_dm_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_ct_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== null && this.transformaterRatio.ta0fc_dupcurrent_ct_total !== "") &&
            (typeof (this.transformaterRatio.ta0fc_dupcurrent_tm_total) !== "undefined" && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== null && this.transformaterRatio.ta0fc_dupcurrent_tm_total !== "")) {
            // Variables
            var totalMain, totalDuplicate;
            totalMain = ((Number(this.transformaterRatio.ta0fc_maincurrent_dm_total) - Number(this.transformaterRatio.ta0fc_maincurrent_bb_total)) / parseFloat(this.transformaterRatio.ta0fc_maincurrent_bb_total)) * 100;
            if (!isNaN(totalMain)) {
                // sent value to main current ct ratio
                this.transformaterRatio.ta0fc_per_diff_main = totalMain.toFixed(3);
            }
            totalDuplicate = ((Number(this.transformaterRatio.ta0fc_dupcurrent_tm_total) - Number(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) / parseFloat(this.transformaterRatio.ta0fc_dupcurrent_ct_total)) * 100;
            if (!isNaN(totalDuplicate)) {
                // sent to duplicate current ct ratio
                this.transformaterRatio.ta0fc_per_diff_sec = totalDuplicate.toFixed(3);
            }
        }
    };
    /**
     * Reason   : Method to Reset SignaturePad
     * Created  : Alif (23-03-2019)
     */
    SealOpcInspectPage.prototype.clearSign = function (category) {
        console.log("method to clear signature pad..");
        if (category === "witness") {
            this.signaturePad1.clear();
        }
        if (category === "examiner") {
            this.signaturePad2.clear();
        }
    };
    SealOpcInspectPage.prototype.onlyUnique = function (value, index, self) {
        if (value !== undefined && value !== "") {
            return self.indexOf(value) === index;
        }
    };
    SealOpcInspectPage.prototype.registerCalc = function () {
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
    * Reason   : Method to calculate Accuract Test After
    * Created  : Alif (11/04/2019)
    */
    SealOpcInspectPage.prototype.calculateAfterAccuracyTest = function () {
        console.log("auto calculate accuracy test for after..");
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
        if (!isNaN(total_avg)) {
            this.accuracy3P_N.ta4ma_avg = total_avg.toFixed(2);
        }
    };
    /**
     * Reason   : Method to auto calculate usage meter register test.
     * Created  : Alif (14/05/2019)
     */
    SealOpcInspectPage.prototype.autoCalculateMeterRegisterUsage = function (array) {
        console.log("auto calcualate meter register test usage..");
        if (typeof (array) !== "undefined") {
            if ((typeof (array.ta4ma_reg_start) !== "undefined" && array.ta4ma_reg_start !== "" && array.ta4ma_reg_start !== null) &&
                (typeof (array.ta4ma_reg_stop) !== "undefined" && array.ta4ma_reg_stop !== "" && array.ta4ma_reg_stop !== null)) {
                var usage = Number(array.ta4ma_reg_stop) - Number(array.ta4ma_reg_start);
                if (!isNaN(usage)) {
                    array.ta4ma_reg_usage = Number(usage).toFixed(3);
                }
            }
        }
    };
    /**
     * Hide Show Test List Section
     * Created  : Alif (18/04/2019)
     */
    SealOpcInspectPage.prototype.showTestListSection = function (index) {
        index++;
        if (this.showTestList === false) {
            this.showTestList = true;
        }
        else if (index === 2) {
            this.showTestList = false;
        }
    };
    /**
     * Reason   : Setting to choose and default view test list selection.
     * Created  : Alif (04-07-2019)
     */
    SealOpcInspectPage.prototype.selectionTestList = function (value) {
        console.log("selection test list.." + value);
        // Reset
        this.viewPhysicalTest = false;
        this.viewCurrentComparisonTest = false;
        this.viewPolarityTest = false;
        this.viewAccuracyTest = false;
        this.viewNeutralTest = false;
        this.viewMagnetTest = false;
        this.viewWitnessExaminerTest = false;
        this.viewMeterRegisterTest = false;
        if (value === "pit") {
            this.viewPhysicalTest = true;
        }
        else if (value === "curr") {
            this.viewCurrentComparisonTest = true;
        }
        else if (value === "pt") {
            this.viewPolarityTest = true;
        }
        else if (value === "acct") {
            this.viewAccuracyTest = true;
        }
        else if (value === "nt") {
            this.viewNeutralTest = true;
        }
        else if (value === "mt") {
            this.viewMagnetTest = true;
        }
        else if (value === "wes") {
            this.viewWitnessExaminerTest = true;
            this.ngAfterViewInit();
        }
        else if (value === "mrt") {
            this.viewMeterRegisterTest = true;
        }
        else {
            this.viewPhysicalTest = false;
            this.viewCurrentComparisonTest = false;
            this.viewPolarityTest = false;
            this.viewAccuracyTest = false;
            this.viewNeutralTest = false;
            this.viewMagnetTest = false;
            this.viewWitnessExaminerTest = false;
            this.viewMeterRegisterTest = false;
        }
        // Validate User Input
        this.checkTestTypeField();
    };
    /**
     * Reason   : Method to change value and indicator.
     * Created  : Alif (03.07.2019)
     */
    SealOpcInspectPage.prototype.changeUiViewCustomerSignature = function (value) {
        console.log("value : " + this.customerSignature);
        if (this.customerSignature === "No") {
            this.witness.ta0witnessname = "";
            this.witness.ta0witness_sign = "";
            this.witness.ta0witnessicpassport = "";
            this.witness.ta0witnessphone = "";
            this.witness.ta0signaturecustomer = this.customerSignature;
        }
        else {
            this.witness.ta0witnessname = "";
            this.witness.ta0signaturecustomer = this.customerSignature;
        }
    };
    /**
       * Reason   : Method to change view and update value for different selection.
       * Created  : ALif (04.07.2019)
       */
    SealOpcInspectPage.prototype.changeUiViewMagentTest = function (value) {
        debugger;
        console.log("Value: " + value);
        // checking value
        if (value === "Lain2") {
            this.magnet.ta0mt_magnet_result = "Lain-lain : ";
            this.magnetMeter = true;
        }
        else {
            this.magnet.ta0mt_magnet_result = value;
            this.magnetMeter = false;
        }
    };
    /**
     * Reason   : Reset all test inspection in one click.
     * Created  : Hafizal (8.07.2019)
     */
    SealOpcInspectPage.prototype.resetAllTestInspection = function () {
        var _this = this;
        console.log("reset all test inspection in one click..");
        debugger;
        var alert = this.alertCtrl.create({
            title: 'OPC Inspection',
            message: 'Are you sure to rest all inspection data ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        /* Start: Physical Test */
                        _this.physical.loc_test_ta0na = 'N';
                        _this.physical.ta0na = true;
                        _this.physicalExam = false;
                        _this.physical.ta0ts_emdisplay = '';
                        _this.physical.ta0ts_meter = '';
                        _this.physical.ta0naremarks = '';
                        _this.hideShowPhysical();
                        /* End: Physical Test */
                        /* Start: Current Comparison Test */
                        _this.currentCompare.loc_test_ta0na = 'N';
                        _this.currentCompare.ta0na = true;
                        _this.currentCompare.ta0cu_actual_r = '';
                        _this.currentCompare.ta0cu_actual_y = '';
                        _this.currentCompare.ta0cu_actual_b = '';
                        _this.currentCompare.ta0cu_disp_r = '';
                        _this.currentCompare.ta0cu_disp_y = '';
                        _this.currentCompare.ta0cu_disp_b = '';
                        _this.currentCompare.ta0cu_actual_total = '';
                        _this.currentCompare.ta0cu_disp_total = '';
                        _this.currentCompare.ta0cu_difference = '';
                        _this.currentCompare.ta0naremarks = '';
                        _this.hideShowCurrentCompare();
                        /* End: Current Comparison Test */
                        /* Start: Terminal Meter Polarity Test */
                        _this.polarity.loc_test_ta0na = 'N';
                        _this.polarity.ta0na = true;
                        _this.polarity.ta0po_tm_r = '';
                        _this.polarity.ta0po_tm_y = '';
                        _this.polarity.ta0po_tm_b = '';
                        _this.polarity.ta0po_tm_n = '';
                        _this.polarity.ta0naremarks = '';
                        _this.hideShowPolarity();
                        /* End: Terminal Meter Polarity Test */
                        /* Start: Magnet Test */
                        _this.magnet.loc_test_ta0na = 'N';
                        _this.magnet.ta0na = true;
                        _this.hideShowMagnet();
                        _this.magnet.ta0mt_magnet_result = null;
                        _this.magnet.loc_ta0mt_magnet_result = "";
                        _this.magnet.ta0naremarks = '';
                        _this.changeUiViewMagentTest("");
                        /* End: Magnet Test */
                        /* Start: Accuracy Test */
                        // Before Section (3Phase)
                        _this.accuracy3P.loc_test_ta0na = 'N';
                        _this.accuracy3P.ta0na = true;
                        _this.accuracy3P.ta0testind = '';
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
                        _this.accuracy3P.ta0at_timecalc_1 = '';
                        _this.accuracy3P.ta0at_timecalc_2 = '';
                        _this.accuracy3P.ta0at_timecalc_3 = '';
                        _this.accuracy3P.ta0at_timemeas_1 = '';
                        _this.accuracy3P.ta0at_timemeas_2 = '';
                        _this.accuracy3P.ta0at_timemeas_3 = '';
                        _this.accuracy3P.ta0at_test1 = '';
                        _this.accuracy3P.ta0at_test2 = '';
                        _this.accuracy3P.ta0at_test3 = '';
                        _this.accuracy3P.ta0at_avg = '';
                        _this.accuracy3P.ta0naremarks = '';
                        // Before Section (1Phase)
                        _this.accuracy.loc_test_ta0na = 'N';
                        _this.accuracy.ta0na = true;
                        _this.accuracy.ta0testind = '';
                        _this.accuracy.ta0at_pteserialnum = '';
                        _this.accuracy.ta0at_voltage_r = '';
                        _this.accuracy.ta0at_voltage_y = '';
                        _this.accuracy.ta0at_voltage_b = '';
                        _this.accuracy.ta0at_current_r = '';
                        _this.accuracy.ta0at_current_y = '';
                        _this.accuracy.ta0at_current_b = '';
                        _this.accuracy.ta0at_power_r = '';
                        _this.accuracy.ta0at_power_y = '';
                        _this.accuracy.ta0at_power_b = '';
                        _this.accuracy.ta0at_powerfactor_r = '';
                        _this.accuracy.ta0at_powerfactor_y = '';
                        _this.accuracy.ta0at_powerfactor_b = '';
                        _this.accuracy.ta0at_constant_1 = '';
                        _this.accuracy.ta0at_constant_2 = '';
                        _this.accuracy.ta0at_constant_3 = '';
                        _this.accuracy.ta0at_test1 = '';
                        _this.accuracy.ta0at_test2 = '';
                        _this.accuracy.ta0at_test3 = '';
                        _this.accuracy.ta0at_avg = '';
                        _this.accuracy.ta0naremarks = '';
                        // After Section
                        _this.accuracy3P_N.ta4ma_date = '';
                        _this.accuracy3P_N.ta4ma_test1 = '';
                        _this.accuracy3P_N.ta4ma_test2 = '';
                        _this.accuracy3P_N.ta4ma_test3 = '';
                        _this.accuracy3P_N.ta4ma_avg = '';
                        _this.hideShowMeter();
                        /* End: Accuracy Test */
                        /* Start: Neutral Test */
                        _this.neutral.loc_test_ta0na = 'N';
                        _this.neutral.ta0na = true;
                        _this.neutral.ta0nt_phase = '';
                        _this.neutral.ta0nt_neutral = '';
                        _this.neutral.ta0nt_in_life = '';
                        _this.neutral.ta0nt_in_neutral = '';
                        _this.neutral.ta0nt_out_life = '';
                        _this.neutral.ta0nt_out_neutral = '';
                        _this.hideShowNeutral();
                        /* End: Neutral Test */
                        /* Start: Meter Register Test */
                        _this.meterRegister.ta4pts = '';
                        if (_this.meterRegisterBefore.length > 0) {
                            for (var i = 0; i < _this.meterRegisterBefore.length; i++) {
                                _this.meterRegisterBefore[i].ta4ma_reg_start = "";
                                _this.meterRegisterBefore[i].ta4ma_reg_stop = "";
                                _this.meterRegisterBefore[i].ta4ma_reg_usage = "";
                                _this.meterRegisterBefore[i].ta4ma_reg_error = "";
                            }
                        }
                        if (_this.meterRegisterAfter.length > 0) {
                            for (var i = 0; i < _this.meterRegisterAfter.length; i++) {
                                _this.meterRegisterAfter[i].ta4ma_reg_start = "";
                                _this.meterRegisterAfter[i].ta4ma_reg_stop = "";
                                _this.meterRegisterAfter[i].ta4ma_reg_usage = "";
                                _this.meterRegisterAfter[i].ta4ma_reg_error = "";
                            }
                        }
                        /* End: Meter Register Test */
                        /* Checking User Input */
                        _this.checkTestTypeField();
                    },
                }
            ]
        });
        alert.present();
    };
    /**
     * Created :Ameer (11/7/2019)
     * Description: Check testype that already fill in will change the color to green
     */
    SealOpcInspectPage.prototype.checkTestTypeField = function () {
        debugger;
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            //Physical Test
            if ((typeof (this.physical.ta0ts_emdisplay) !== 'undefined' && this.physical.ta0ts_emdisplay !== null && this.physical.ta0ts_emdisplay !== "") &&
                (typeof (this.physical.ta0ts_meter) !== 'undefined' && this.physical.ta0ts_meter !== null && this.physical.ta0ts_meter !== "")
                || (typeof (this.physical.ta0naremarks) !== 'undefined' && this.physical.ta0naremarks !== null && this.physical.ta0naremarks !== "")) {
                this.validatePhysicalTest = true;
            }
            else {
                this.validatePhysicalTest = false;
            }
            //CT Ratio && Current Comparison Test
            if ((typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined' && this.currentCompare.ta0cu_actual_r !== null && this.currentCompare.ta0cu_actual_r !== "") &&
                (typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined' && this.currentCompare.ta0cu_actual_y !== null && this.currentCompare.ta0cu_actual_y !== "") &&
                (typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined' && this.currentCompare.ta0cu_actual_b !== null && this.currentCompare.ta0cu_actual_b !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined' && this.currentCompare.ta0cu_disp_r !== null && this.currentCompare.ta0cu_disp_r !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined' && this.currentCompare.ta0cu_disp_y !== null && this.currentCompare.ta0cu_disp_y !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined' && this.currentCompare.ta0cu_disp_b !== null && this.currentCompare.ta0cu_disp_b !== "") &&
                (typeof (this.currentCompare.ta0cu_actual_total) !== 'undefined' && this.currentCompare.ta0cu_actual_total !== null && this.currentCompare.ta0cu_actual_total !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_total) !== 'undefined' && this.currentCompare.ta0cu_disp_total !== null && this.currentCompare.ta0cu_disp_total !== "") &&
                (typeof (this.currentCompare.ta0cu_difference) !== 'undefined' && this.currentCompare.ta0cu_difference !== null && this.currentCompare.ta0cu_difference !== "")
                || (typeof (this.currentCompare.ta0naremarks) !== 'undefined' && this.currentCompare.ta0naremarks !== null && this.currentCompare.ta0naremarks !== "")) {
                this.validateCurrentComparisonTest = true;
            }
            else {
                this.validateCurrentComparisonTest = false;
            }
            //Polarity Test
            if (this.polarity.ta0na === true) {
                if ((typeof (this.polarity.ta0naremarks) !== 'undefined' && this.polarity.ta0naremarks !== null && this.polarity.ta0naremarks !== "")) {
                    this.validatePolarityTest = true;
                }
                else {
                    this.validatePolarityTest = false;
                }
            }
            else if (this.polarity.ta0na === false) {
                if ((typeof (this.polarity.ta0po_tm_r) !== 'undefined' && this.polarity.ta0po_tm_r !== null && this.polarity.ta0po_tm_r !== "") ||
                    (typeof (this.polarity.ta0po_tm_y) !== 'undefined' && this.polarity.ta0po_tm_y !== null && this.polarity.ta0po_tm_y !== "") ||
                    (typeof (this.polarity.ta0po_tm_b) !== 'undefined' && this.polarity.ta0po_tm_b !== null && this.polarity.ta0po_tm_b !== "")) {
                    this.validatePolarityTest = true;
                }
                else {
                    this.validatePolarityTest = false;
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
                    if (this.accuracy3P.ta0testind === 'M') {
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
                    else if (this.accuracy3P.ta0testind === 'P') {
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
                    else {
                        this.validateAccuracyTest = false;
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
            //MAGNET TEST
            if (this.magnet.ta0na == false) {
                if ((typeof (this.magnet.ta0mt_magnet_result) !== 'undefined' && this.magnet.ta0mt_magnet_result !== null && this.magnet.ta0mt_magnet_result !== "")) {
                    this.validateMagnetTest = true;
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
            //Witness Test
            // Dail & Meter Test
            if ((typeof (this.meterRegister.ta4pts) !== 'undefined' && this.meterRegister.ta4pts !== null && this.meterRegister.ta4pts !== '')) {
                this.validateMeterRegisterTest = true;
            }
            if (this.valueChangeRegisterTest === "before") {
                for (var a = 0; a < this.meterRegisterBefore.length; a++) {
                    if ((typeof (this.meterRegisterBefore[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_start !== null && this.meterRegisterBefore[a].ta4ma_reg_start !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_stop !== null && this.meterRegisterBefore[a].ta4ma_reg_stop !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_usage !== null && this.meterRegisterBefore[a].ta4ma_reg_usage !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_error !== null && this.meterRegisterBefore[a].ta4ma_reg_error !== '')) {
                        this.validateMeterRegisterTest = true;
                    }
                    else {
                        this.validateMeterRegisterTest = false;
                    }
                }
            }
            else if (this.valueChangeRegisterTest === "after") {
                for (var a = 0; a < this.meterRegisterAfter.length; a++) {
                    if ((typeof (this.meterRegisterAfter[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_start !== null && this.meterRegisterAfter[a].ta4ma_reg_start !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_stop !== null && this.meterRegisterAfter[a].ta4ma_reg_stop !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_usage !== null && this.meterRegisterAfter[a].ta4ma_reg_usage !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_error !== null && this.meterRegisterAfter[a].ta4ma_reg_error !== '')) {
                        this.validateMeterRegisterTest = true;
                    }
                    else {
                        this.validateMeterRegisterTest = false;
                    }
                }
            }
            else {
                this.validateMeterRegisterTest = false;
            }
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            //Physical Test
            if ((typeof (this.physical.ta0ts_meter) !== 'undefined' && this.physical.ta0ts_meter !== null && this.physical.ta0ts_meter !== "")
                || (typeof (this.physical.ta0naremarks) !== 'undefined' && this.physical.ta0naremarks !== null && this.physical.ta0naremarks !== "")) {
                this.validatePhysicalTest = true;
            }
            else {
                this.validatePhysicalTest = false;
            }
            //CT Ratio && Current Comparison Test
            if ((typeof (this.currentCompare.ta0cu_actual_r) !== 'undefined' && this.currentCompare.ta0cu_actual_r !== null && this.currentCompare.ta0cu_actual_r !== "") &&
                (typeof (this.currentCompare.ta0cu_actual_y) !== 'undefined' && this.currentCompare.ta0cu_actual_y !== null && this.currentCompare.ta0cu_actual_y !== "") &&
                (typeof (this.currentCompare.ta0cu_actual_b) !== 'undefined' && this.currentCompare.ta0cu_actual_b !== null && this.currentCompare.ta0cu_actual_b !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_r) !== 'undefined' && this.currentCompare.ta0cu_disp_r !== null && this.currentCompare.ta0cu_disp_r !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_y) !== 'undefined' && this.currentCompare.ta0cu_disp_y !== null && this.currentCompare.ta0cu_disp_y !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_b) !== 'undefined' && this.currentCompare.ta0cu_disp_b !== null && this.currentCompare.ta0cu_disp_b !== "") &&
                (typeof (this.currentCompare.ta0cu_actual_total) !== 'undefined' && this.currentCompare.ta0cu_actual_total !== null && this.currentCompare.ta0cu_actual_total !== "") &&
                (typeof (this.currentCompare.ta0cu_disp_total) !== 'undefined' && this.currentCompare.ta0cu_disp_total !== null && this.currentCompare.ta0cu_disp_total !== "") &&
                (typeof (this.currentCompare.ta0cu_difference) !== 'undefined' && this.currentCompare.ta0cu_difference !== null && this.currentCompare.ta0cu_difference !== "")
                || (typeof (this.currentCompare.ta0naremarks) !== 'undefined' && this.currentCompare.ta0naremarks !== null && this.currentCompare.ta0naremarks !== "")) {
                this.validateCurrentComparisonTest = true;
            }
            else {
                this.validateCurrentComparisonTest = false;
            }
            // Accuracy Test
            if (this.accuracy.ta0na == true) {
                if ((typeof (this.accuracy.ta0naremarks) !== 'undefined' && this.accuracy.ta0naremarks !== null && this.accuracy.ta0naremarks !== '')) {
                    this.validateAccuracyTest = true;
                }
                else {
                    this.validateAccuracyTest = false;
                }
            }
            else if (this.accuracy.ta0na === false) {
                if (this.valueChangeAccuracy === 'before') {
                    if (this.accuracy.ta0testind === "M") {
                        if ((typeof (this.accuracy.ta0at_timecalc_1) !== 'undefined' && this.accuracy.ta0at_timecalc_1 !== null && this.accuracy.ta0at_timecalc_1 !== '') &&
                            (typeof (this.accuracy.ta0at_timecalc_2) !== 'undefined' && this.accuracy.ta0at_timecalc_2 !== null && this.accuracy.ta0at_timecalc_2 !== '') &&
                            (typeof (this.accuracy.ta0at_timecalc_3) !== 'undefined' && this.accuracy.ta0at_timecalc_3 !== null && this.accuracy.ta0at_timecalc_3 !== '') &&
                            (typeof (this.accuracy.ta0at_timemeas_1) !== 'undefined' && this.accuracy.ta0at_timemeas_1 !== null && this.accuracy.ta0at_timemeas_1 !== '') &&
                            (typeof (this.accuracy.ta0at_timemeas_2) !== 'undefined' && this.accuracy.ta0at_timemeas_2 !== null && this.accuracy.ta0at_timemeas_2 !== '') &&
                            (typeof (this.accuracy.ta0at_timemeas_3) !== 'undefined' && this.accuracy.ta0at_timemeas_3 !== null && this.accuracy.ta0at_timemeas_3 !== '') &&
                            (typeof (this.accuracy.ta0at_test1) !== 'undefined' && this.accuracy.ta0at_test1 !== null && this.accuracy.ta0at_test1 !== '') &&
                            (typeof (this.accuracy.ta0at_test2) !== 'undefined' && this.accuracy.ta0at_test2 !== null && this.accuracy.ta0at_test2 !== '') &&
                            (typeof (this.accuracy.ta0at_test3) !== 'undefined' && this.accuracy.ta0at_test3 !== null && this.accuracy.ta0at_test3 !== '') &&
                            (typeof (this.accuracy.ta0at_avg) !== 'undefined' && this.accuracy.ta0at_avg !== null && this.accuracy.ta0at_avg !== '')) {
                            this.validateAccuracyTest = true;
                        }
                        else {
                            this.validateAccuracyTest = false;
                        }
                    }
                    else if (this.accuracy.ta0testind === "P") {
                        if ((typeof (this.accuracy.ta0at_pteserialnum) !== 'undefined' && this.accuracy.ta0at_pteserialnum !== null && this.accuracy.ta0at_pteserialnum !== '') &&
                            (typeof (this.accuracy.ta0at_voltage_r) !== 'undefined' && this.accuracy.ta0at_voltage_r !== null && this.accuracy.ta0at_voltage_r !== '') &&
                            (typeof (this.accuracy.ta0at_voltage_y) !== 'undefined' && this.accuracy.ta0at_voltage_y !== null && this.accuracy.ta0at_voltage_y !== '') &&
                            (typeof (this.accuracy.ta0at_voltage_b) !== 'undefined' && this.accuracy.ta0at_voltage_b !== null && this.accuracy.ta0at_voltage_b !== '') &&
                            (typeof (this.accuracy.ta0at_current_r) !== 'undefined' && this.accuracy.ta0at_current_r !== null && this.accuracy.ta0at_current_r !== '') &&
                            (typeof (this.accuracy.ta0at_current_y) !== 'undefined' && this.accuracy.ta0at_current_y !== null && this.accuracy.ta0at_current_y !== '') &&
                            (typeof (this.accuracy3P.ta0at_current_b) !== 'undefined' && this.accuracy3P.ta0at_current_b !== null && this.accuracy3P.ta0at_current_b !== '') &&
                            (typeof (this.accuracy.ta0at_power_r) !== 'undefined' && this.accuracy.ta0at_power_r !== null && this.accuracy.ta0at_power_r !== '') &&
                            (typeof (this.accuracy.ta0at_power_y) !== 'undefined' && this.accuracy.ta0at_power_y !== null && this.accuracy.ta0at_power_y !== '') &&
                            (typeof (this.accuracy.ta0at_power_b) !== 'undefined' && this.accuracy.ta0at_power_b !== null && this.accuracy.ta0at_power_b !== '') &&
                            (typeof (this.accuracy.ta0at_powerfactor_r) !== 'undefined' && this.accuracy.ta0at_powerfactor_r !== null && this.accuracy.ta0at_powerfactor_r !== '') &&
                            (typeof (this.accuracy.ta0at_powerfactor_y) !== 'undefined' && this.accuracy.ta0at_powerfactor_y !== null && this.accuracy.ta0at_powerfactor_y !== '') &&
                            (typeof (this.accuracy.ta0at_powerfactor_b) !== 'undefined' && this.accuracy.ta0at_powerfactor_b !== null && this.accuracy.ta0at_powerfactor_b !== '') &&
                            (typeof (this.accuracy.ta0at_constant_1) !== 'undefined' && this.accuracy.ta0at_constant_1 !== null && this.accuracy.ta0at_constant_1 !== '') &&
                            (typeof (this.accuracy.ta0at_constant_2) !== 'undefined' && this.accuracy.ta0at_constant_2 !== null && this.accuracy.ta0at_constant_2 !== '') &&
                            (typeof (this.accuracy.ta0at_constant_3) !== 'undefined' && this.accuracy.ta0at_constant_3 !== null && this.accuracy.ta0at_constant_3 !== '') &&
                            (typeof (this.accuracy.ta0at_test1) !== 'undefined' && this.accuracy.ta0at_test1 !== null && this.accuracy.ta0at_test1 !== '') &&
                            (typeof (this.accuracy.ta0at_test2) !== 'undefined' && this.accuracy.ta0at_test2 !== null && this.accuracy.ta0at_test2 !== '') &&
                            (typeof (this.accuracy.ta0at_test3) !== 'undefined' && this.accuracy.ta0at_test3 !== null && this.accuracy.ta0at_test3 !== '') &&
                            (typeof (this.accuracy.ta0at_avg) !== 'undefined' && this.accuracy.ta0at_avg !== null && this.accuracy.ta0at_avg !== '')) {
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
            // NEUTRAL
            if (this.neutral.ta0na === true) {
                if ((typeof (this.neutral.ta0naremarks) !== 'undefined' && this.neutral.ta0naremarks !== null && this.neutral.ta0naremarks !== '')) {
                    this.validateNeutralTest = true;
                }
            }
            else if (this.neutral.ta0na === false) {
                if ((typeof (this.neutral.ta0nt_phase) !== 'undefined' && this.neutral.ta0nt_phase !== null && this.neutral.ta0nt_phase !== '') &&
                    (typeof (this.neutral.ta0nt_neutral) !== 'undefined' && this.neutral.ta0nt_neutral !== null && this.neutral.ta0nt_neutral !== '') &&
                    (typeof (this.neutral.ta0nt_in_life) !== 'undefined' && this.neutral.ta0nt_in_life !== null && this.neutral.ta0nt_in_life !== '') &&
                    (typeof (this.neutral.ta0nt_in_neutral) !== 'undefined' && this.neutral.ta0nt_in_neutral !== null && this.neutral.ta0nt_in_neutral !== '') &&
                    (typeof (this.neutral.ta0nt_out_life) !== 'undefined' && this.neutral.ta0nt_out_life !== null && this.neutral.ta0nt_out_life !== '') &&
                    (typeof (this.neutral.ta0nt_out_neutral) !== 'undefined' && this.neutral.ta0nt_out_neutral !== null && this.neutral.ta0nt_out_neutral !== '')) {
                    this.validateNeutralTest = true;
                }
                else {
                    this.validateNeutralTest = false;
                }
            }
            //MAGNET TEST
            if (this.magnet.ta0na == false) {
                if ((typeof (this.magnet.ta0mt_magnet_result) !== 'undefined' && this.magnet.ta0mt_magnet_result !== null && this.magnet.ta0mt_magnet_result !== "")) {
                    this.validateMagnetTest = true;
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
            //Witness Test
            // Dail & Meter Test
            if ((typeof (this.meterRegister.ta4pts) !== 'undefined' && this.meterRegister.ta4pts !== null && this.meterRegister.ta4pts !== '')) {
                this.validateMeterRegisterTest = true;
            }
            if (this.valueChangeRegisterTest === "before") {
                for (var a = 0; a < this.meterRegisterBefore.length; a++) {
                    if ((typeof (this.meterRegisterBefore[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_start !== null && this.meterRegisterBefore[a].ta4ma_reg_start !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_stop !== null && this.meterRegisterBefore[a].ta4ma_reg_stop !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_usage !== null && this.meterRegisterBefore[a].ta4ma_reg_usage !== '') &&
                        (typeof (this.meterRegisterBefore[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterBefore[a].ta4ma_reg_error !== null && this.meterRegisterBefore[a].ta4ma_reg_error !== '')) {
                        this.validateMeterRegisterTest = true;
                    }
                    else {
                        this.validateMeterRegisterTest = false;
                    }
                }
            }
            else if (this.valueChangeRegisterTest === "after") {
                for (var a = 0; a < this.meterRegisterAfter.length; a++) {
                    if ((typeof (this.meterRegisterAfter[a].ta4ma_reg_start) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_start !== null && this.meterRegisterAfter[a].ta4ma_reg_start !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_stop) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_stop !== null && this.meterRegisterAfter[a].ta4ma_reg_stop !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_usage) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_usage !== null && this.meterRegisterAfter[a].ta4ma_reg_usage !== '') &&
                        (typeof (this.meterRegisterAfter[a].ta4ma_reg_error) !== 'undefined' && this.meterRegisterAfter[a].ta4ma_reg_error !== null && this.meterRegisterAfter[a].ta4ma_reg_error !== '')) {
                        this.validateMeterRegisterTest = true;
                    }
                    else {
                        this.validateMeterRegisterTest = false;
                    }
                }
            }
            else {
                this.validateMeterRegisterTest = false;
            }
        }
    };
    /**
     * Reason   : Reset Specific Test Inspection
     * Created  : Hafizal (11.07.2019)
     */
    SealOpcInspectPage.prototype.resetPhysical = function () {
        this.physical.ta0ts_emdisplay = '';
        this.physical.ta0ts_meter = '';
        this.physical.ta0naremarks = '';
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetCurrent = function () {
        this.currentCompare.ta0cu_actual_r = '';
        this.currentCompare.ta0cu_actual_y = '';
        this.currentCompare.ta0cu_actual_b = '';
        this.currentCompare.ta0cu_disp_r = '';
        this.currentCompare.ta0cu_disp_y = '';
        this.currentCompare.ta0cu_disp_b = '';
        this.currentCompare.ta0cu_actual_total = '';
        this.currentCompare.ta0cu_disp_total = '';
        this.currentCompare.ta0cu_difference = '';
        this.currentCompare.ta0naremarks = '';
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetTerminal = function () {
        this.polarity.ta0po_tm_r = '';
        this.polarity.ta0po_tm_y = '';
        this.polarity.ta0po_tm_b = '';
        this.polarity.ta0po_tm_n = '';
        this.polarity.ta0naremarks = '';
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetNeutral = function () {
        this.neutral.ta0naremarks = '';
        this.neutral.ta0nt_phase = '';
        this.neutral.ta0nt_neutral = '';
        this.neutral.ta0nt_in_life = '';
        this.neutral.ta0nt_in_neutral = '';
        this.neutral.ta0nt_out_life = '';
        this.neutral.ta0nt_out_neutral = '';
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetAccuracy = function () {
        this.accuracy3P.ta0at_pteserialnum = '';
        this.accuracy3P.ta0at_voltage_r = '';
        this.accuracy3P.ta0at_voltage_y = '';
        this.accuracy3P.ta0at_voltage_b = '';
        this.accuracy3P.ta0at_current_r = '';
        this.accuracy3P.ta0at_current_y = '';
        this.accuracy3P.ta0at_current_b = '';
        this.accuracy3P.ta0at_power_r = '';
        this.accuracy3P.ta0at_power_y = '';
        this.accuracy3P.ta0at_power_b = '';
        this.accuracy3P.ta0at_powerfactor_r = '';
        this.accuracy3P.ta0at_powerfactor_y = '';
        this.accuracy3P.ta0at_powerfactor_b = '';
        this.accuracy3P.ta0at_test1 = '';
        this.accuracy3P.ta0at_test2 = '';
        this.accuracy3P.ta0at_test3 = '';
        this.accuracy3P.ta0at_avg = '';
        this.accuracy3P.ta0at_timecalc_1 = '';
        this.accuracy3P.ta0at_timecalc_2 = '';
        this.accuracy3P.ta0at_timecalc_3 = '';
        this.accuracy3P.ta0at_timemeas_1 = '';
        this.accuracy3P.ta0at_timemeas_2 = '';
        this.accuracy3P.ta0at_timemeas_3 = '';
        this.accuracy3P.ta0at_test1 = '';
        this.accuracy3P.ta0at_test2 = '';
        this.accuracy3P.ta0at_test3 = '';
        this.accuracy3P.ta0at_avg = '';
        this.accuracy.ta0naremarks = '';
        this.accuracy.ta0testind = '';
        this.accuracy.ta0at_pteserialnum = '';
        this.accuracy.ta0at_voltage_r = '';
        this.accuracy.ta0at_voltage_y = '';
        this.accuracy.ta0at_voltage_b = '';
        this.accuracy.ta0at_current_r = '';
        this.accuracy.ta0at_current_y = '';
        this.accuracy.ta0at_current_b = '';
        this.accuracy.ta0at_power_r = '';
        this.accuracy.ta0at_power_y = '';
        this.accuracy.ta0at_power_b = '';
        this.accuracy.ta0at_powerfactor_r = '';
        this.accuracy.ta0at_powerfactor_y = '';
        this.accuracy.ta0at_powerfactor_b = '';
        this.accuracy.ta0at_constant_1 = '';
        this.accuracy.ta0at_constant_2 = '';
        this.accuracy.ta0at_constant_3 = '';
        this.accuracy.ta0at_test1 = '';
        this.accuracy.ta0at_test2 = '';
        this.accuracy.ta0at_test3 = '';
        this.accuracy.ta0at_avg = '';
        this.accuracy3P_N.ta4ma_date = '';
        this.accuracy3P_N.ta4ma_test1 = '';
        this.accuracy3P_N.ta4ma_test2 = '';
        this.accuracy3P_N.ta4ma_test3 = '';
        this.accuracy3P_N.ta4ma_avg = '';
        this.accuracy3P.ta0naremarks = '';
        this.accuracy3P.ta0testind = '';
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetMagnet = function () {
        this.magnet.ta0naremarks = '';
        this.magnet.ta0mt_magnet_result = '';
        this.magnet.loc_ta0mt_magnet_result = '';
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetMeter = function () {
        this.meterRegister.ta4pts = '';
        if (this.meterRegisterBefore.length > 0) {
            for (var i = 0; i < this.meterRegisterBefore.length; i++) {
                this.meterRegisterBefore[i].ta4ma_reg_start = "";
                this.meterRegisterBefore[i].ta4ma_reg_stop = "";
                this.meterRegisterBefore[i].ta4ma_reg_usage = "";
                this.meterRegisterBefore[i].ta4ma_reg_error = "";
            }
        }
        if (this.meterRegisterAfter.length > 0) {
            for (var i = 0; i < this.meterRegisterAfter.length; i++) {
                this.meterRegisterAfter[i].ta4ma_reg_start = "";
                this.meterRegisterAfter[i].ta4ma_reg_stop = "";
                this.meterRegisterAfter[i].ta4ma_reg_usage = "";
                this.meterRegisterAfter[i].ta4ma_reg_error = "";
            }
        }
        this.checkTestTypeField();
    };
    SealOpcInspectPage.prototype.resetWitness = function () {
        this.witness.ta0witnessname = '';
        this.signaturePadOptions = '';
        this.witness.ta0witnessicpassport = '';
        this.witness.ta0witnessphone = '';
        this.signaturePad1.clear();
    };
    SealOpcInspectPage.prototype.resetExaminer = function () {
        this.examinerDepartment = '';
        this.signaturePad2.clear();
    };
    /**
     * Description : Method to reset specific test section.
     * Created     : Alif (23.08.2019)
     */
    SealOpcInspectPage.prototype.resetTest = function (type) {
        console.log("reset test: " + type);
        // Checking Test Type
        switch (type) {
            case "pit":// Physical Inspection Test
                {
                    this.physical.loc_test_ta0na = 'N';
                    this.physical.ta0na = true;
                    this.physicalExam = false;
                    this.physical.ta0ts_emdisplay = '';
                    this.physical.ta0ts_meter = '';
                    this.physical.ta0naremarks = '';
                    this.hideShowPhysical();
                    break;
                }
            case "curr":// Current Comparison Test
                {
                    this.currentCompare.loc_test_ta0na = 'N';
                    this.currentCompare.ta0na = true;
                    this.currentCompare.ta0cu_actual_r = '';
                    this.currentCompare.ta0cu_actual_y = '';
                    this.currentCompare.ta0cu_actual_b = '';
                    this.currentCompare.ta0cu_disp_r = '';
                    this.currentCompare.ta0cu_disp_y = '';
                    this.currentCompare.ta0cu_disp_b = '';
                    this.currentCompare.ta0cu_actual_total = '';
                    this.currentCompare.ta0cu_disp_total = '';
                    this.currentCompare.ta0cu_difference = '';
                    this.currentCompare.ta0naremarks = '';
                    this.hideShowCurrentCompare();
                    break;
                }
            case "pt":// Terminal Meter Polarity Test
                {
                    this.polarity.loc_test_ta0na = 'N';
                    this.polarity.ta0na = true;
                    this.polarity.ta0po_tm_r = '';
                    this.polarity.ta0po_tm_y = '';
                    this.polarity.ta0po_tm_b = '';
                    this.polarity.ta0po_tm_n = '';
                    this.polarity.ta0naremarks = '';
                    this.hideShowPolarity();
                    break;
                }
            case "acct":// Accuracy Test
                {
                    this.hideShowMeter();
                    // Before Section (3Phase)
                    this.accuracy3P.loc_test_ta0na = 'N';
                    this.accuracy3P.ta0na = false;
                    this.accuracy3P.ta0testind = 'M';
                    this.accuracy3P.ta0at_pteserialnum = '';
                    this.accuracy3P.ta0at_voltage_r = '';
                    this.accuracy3P.ta0at_voltage_y = '';
                    this.accuracy3P.ta0at_voltage_b = '';
                    this.accuracy3P.ta0at_current_r = '';
                    this.accuracy3P.ta0at_current_y = '';
                    this.accuracy3P.ta0at_current_b = '';
                    this.accuracy3P.ta0at_power_r = '';
                    this.accuracy3P.ta0at_power_y = '';
                    this.accuracy3P.ta0at_power_b = '';
                    this.accuracy3P.ta0at_powerfactor_r = '';
                    this.accuracy3P.ta0at_powerfactor_y = '';
                    this.accuracy3P.ta0at_powerfactor_b = '';
                    this.accuracy3P.ta0at_test1 = '';
                    this.accuracy3P.ta0at_test2 = '';
                    this.accuracy3P.ta0at_test3 = '';
                    this.accuracy3P.ta0at_avg = '';
                    this.accuracy3P.ta0at_timecalc_1 = '';
                    this.accuracy3P.ta0at_timecalc_2 = '';
                    this.accuracy3P.ta0at_timecalc_3 = '';
                    this.accuracy3P.ta0at_timemeas_1 = '';
                    this.accuracy3P.ta0at_timemeas_2 = '';
                    this.accuracy3P.ta0at_timemeas_3 = '';
                    this.accuracy3P.ta0at_test1 = '';
                    this.accuracy3P.ta0at_test2 = '';
                    this.accuracy3P.ta0at_test3 = '';
                    this.accuracy3P.ta0at_avg = '';
                    this.accuracy3P.ta0naremarks = '';
                    // Before Section (1Phase)
                    this.accuracy.loc_test_ta0na = 'N';
                    this.accuracy.ta0na = false;
                    this.accuracy.ta0testind = 'M';
                    this.accuracy.ta0at_pteserialnum = '';
                    this.accuracy.ta0at_voltage_r = '';
                    this.accuracy.ta0at_voltage_y = '';
                    this.accuracy.ta0at_voltage_b = '';
                    this.accuracy.ta0at_current_r = '';
                    this.accuracy.ta0at_current_y = '';
                    this.accuracy.ta0at_current_b = '';
                    this.accuracy.ta0at_power_r = '';
                    this.accuracy.ta0at_power_y = '';
                    this.accuracy.ta0at_power_b = '';
                    this.accuracy.ta0at_powerfactor_r = '';
                    this.accuracy.ta0at_powerfactor_y = '';
                    this.accuracy.ta0at_powerfactor_b = '';
                    this.accuracy.ta0at_constant_1 = '';
                    this.accuracy.ta0at_constant_2 = '';
                    this.accuracy.ta0at_constant_3 = '';
                    this.accuracy.ta0at_test1 = '';
                    this.accuracy.ta0at_test2 = '';
                    this.accuracy.ta0at_test3 = '';
                    this.accuracy.ta0at_avg = '';
                    this.accuracy.ta0naremarks = '';
                    // After Section
                    this.accuracy3P_N.ta4ma_date = '';
                    this.accuracy3P_N.ta4ma_test1 = '';
                    this.accuracy3P_N.ta4ma_test2 = '';
                    this.accuracy3P_N.ta4ma_test3 = '';
                    this.accuracy3P_N.ta4ma_avg = '';
                    break;
                }
            case "nt":// Neutral Test
                {
                    this.neutral.loc_test_ta0na = 'N';
                    this.neutral.ta0na = true;
                    this.neutral.ta0nt_phase = '';
                    this.neutral.ta0nt_neutral = '';
                    this.neutral.ta0nt_in_life = '';
                    this.neutral.ta0nt_in_neutral = '';
                    this.neutral.ta0nt_out_life = '';
                    this.neutral.ta0nt_out_neutral = '';
                    this.hideShowNeutral();
                    break;
                }
            case "mt":// Magnet Test
                {
                    this.magnet.loc_test_ta0na = 'N';
                    this.magnet.ta0na = true;
                    this.hideShowMagnet();
                    this.magnet.ta0mt_magnet_result = null;
                    this.magnet.loc_ta0mt_magnet_result = "";
                    this.magnet.ta0naremarks = '';
                    this.changeUiViewMagentTest("");
                    break;
                }
            case "mrt":// Meter Register Test
                {
                    this.meterRegister.ta4pts = '';
                    // Before Section
                    if (this.meterRegisterBefore.length > 0) {
                        for (var i = 0; i < this.meterRegisterBefore.length; i++) {
                            this.meterRegisterBefore[i].ta4ma_reg_start = "";
                            this.meterRegisterBefore[i].ta4ma_reg_stop = "";
                            this.meterRegisterBefore[i].ta4ma_reg_usage = "";
                            this.meterRegisterBefore[i].ta4ma_reg_error = "";
                        }
                    }
                    // After Section
                    if (this.meterRegisterAfter.length > 0) {
                        for (var i = 0; i < this.meterRegisterAfter.length; i++) {
                            this.meterRegisterAfter[i].ta4ma_reg_start = "";
                            this.meterRegisterAfter[i].ta4ma_reg_stop = "";
                            this.meterRegisterAfter[i].ta4ma_reg_usage = "";
                            this.meterRegisterAfter[i].ta4ma_reg_error = "";
                        }
                    }
                    break;
                }
        }
        // Validate Input
        this.checkTestTypeField();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealOpcInspectPage.prototype, "signaturePad1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealOpcInspectPage.prototype, "signaturePad2", void 0);
    SealOpcInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-opc-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/deviceTestForms/seal-opc-inspect/seal-opc-inspect.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>OPC Inspection</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- OPC Inspection (Test List) -->\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-8 (click)="showTestListSection(1)">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Test List Selection</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetAllTestInspection()" style="opacity: unset;"\n          text-end>Reset All</button>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n        (click)="showTestListSection(1)">\n        <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showTestList"></ion-icon>\n        <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showTestList"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row radio-group [(ngModel)]="testCategory" *ngIf="showTestList" (ionChange)="selectionTestList($event)">\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Physical Inspection Test</ion-label>\n        <ion-radio value="pit"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validatePhysicalTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'pit\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH">\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Current Comparison Test</ion-label>\n        <ion-radio value="curr"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH"\n      style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateCurrentComparisonTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH">\n      <button ion-button small round mode="md" (click)="resetTest(\'curr\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH">\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Terminal Meter Polarity Test</ion-label>\n        <ion-radio value="pt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH"\n      style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validatePolarityTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH">\n      <button ion-button small round mode="md" (click)="resetTest(\'pt\')" style="opacity: unset;" text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Accuracy Test</ion-label>\n        <ion-radio value="acct"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateAccuracyTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'acct\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_1PH">\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Neutral Test</ion-label>\n        <ion-radio value="nt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_1PH"\n      style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateNeutralTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_1PH">\n      <button ion-button small round mode="md" (click)="resetTest(\'nt\')" style="opacity: unset;" text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Magnet Test</ion-label>\n        <ion-radio value="mt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateMagnetTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'mt\')" style="opacity: unset;" text-end>Clear</button>\n    </ion-col>\n    <ion-col col-sm-12 col-md-9 col-11 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Meter Register Test</ion-label>\n        <ion-radio value="mrt"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateMeterRegisterTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col>\n    <ion-col>\n      <button ion-button small round mode="md" (click)="resetTest(\'mrt\')" style="opacity: unset;"\n        text-end>Clear</button>\n    </ion-col>\n    <!-- <ion-col col-sm-12 col-md-9 col-11 align-self-end>\n      <ion-item text-wrap>\n        <ion-label text-uppercase>Witness & Examiner Section</ion-label>\n        <ion-radio value="wes"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-1 col-md-1 col-1 align-self-center\n      style="text-align: center;">\n      <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n        [ngClass]="(validateWitnessExaminerTest === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n    </ion-col> -->\n  </ion-row>\n\n  <!--Starting for Single phase OPC  -->\n  <div *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_1PH">\n\n    <!-- PHYSICAL EXAMINATION -->\n    <span *ngIf="viewPhysicalTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong> PHYSICAL EXAMINATION</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetPhysical()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowPhysical()" [(ngModel)]="physical.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <span *ngIf="physical.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="physical.ta0naremarks"\n                [ngClass]="(physical.ta0naremarks == \'\' || physical.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n      <span *ngIf="!physical.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Tampering Suspect</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" placeholder="Please enter value" [(ngModel)]="physical.ta0ts_meter"\n                [ngClass]="(physical.ta0ts_meter == \'\' || physical.ta0ts_meter == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Close Because Already Have in Sil & Sticker Page (Alif : 28/03/2019) -->\n        <!-- <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary" style="min-width:20%">Terminal condition\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="meterCoverArray.ta0sealcondition"\n              [ngClass]="(meterCoverArray.ta0sealcondition == \'\' || meterCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-option value="K">KOYAK</ion-option>\n              <ion-option value="O">OK</ion-option>\n              <ion-option value="P">PUTUS</ion-option>\n              <ion-option value="T">TIDAK OK</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary" style="min-width:20%">Meter condition\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="terminalCoverArray.ta0sealcondition"\n              [ngClass]="(terminalCoverArray.ta0sealcondition == \'\' || terminalCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-option value="K">KOYAK</ion-option>\n              <ion-option value="O">OK</ion-option>\n              <ion-option value="P">PUTUS</ion-option>\n              <ion-option value="T">TIDAK OK</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Sticker Safety condition\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" placeholder="Enter Safety" [(ngModel)]="sterminalCoverArray.ta0stickercondition"\n              [ngClass]="(sterminalCoverArray.ta0stickercondition == \'\' || sterminalCoverArray.ta0stickercondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      </span>\n    </span>\n\n    <!-- ACCURACY TEST -->\n    <span *ngIf="viewAccuracyTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>ACCURACY TEST</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetAccuracy()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowMeter()" [(ngModel)]="accuracy.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="accuracy.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter"\n                [(ngModel)]="accuracy.ta0naremarks"\n                [ngClass]="(accuracy.ta0naremarks == \'\' || accuracy.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="!accuracy.ta0na">\n\n        <!-- Segment -->\n        <ion-row style="padding-top: 15px;padding-left: 15px;">\n          <ion-col col-sm-12 col-md-12 col-12>\n            <ion-segment [(ngModel)]="valueChangeAccuracy">\n              <ion-segment-button value="before">\n                Before\n              </ion-segment-button>\n              <ion-segment-button value="after">\n                After\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n\n        <div [ngSwitch]="valueChangeAccuracy">\n          <div *ngSwitchCase="\'before\'">\n            <ion-row>\n              <ion-col col-6 col-sm-12 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Accuracy Type</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6 col-sm-12 col-md-9>\n                <ion-item>\n                  <ion-select interface="popover" (ionChange)="hideShowTypeAccuracy()"\n                    [(ngModel)]="accuracy.ta0testind">\n                    <ion-option value="P">Portable</ion-option>\n                    <ion-option value="M">Manual</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <div *ngIf="portable">\n              <ion-row>\n                <ion-col col-6 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Portable Test Set</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6 col-sm-12 col-md-8>\n                  <ion-item>\n                    <ion-input type="text" maxlength="18" placeholder="Serial No."\n                      [(ngModel)]="accuracy.ta0at_pteserialnum" (ionChange)="errorAvg()"\n                      (keyup)="outputAplhaNumeric($event,\'1PAccuracyPTE\')"\n                      [ngClass]="((accuracy.ta0at_pteserialnum == \'\' || accuracy.ta0at_pteserialnum == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-1 col-md-1 col-sm-1 style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n                  <button ion-button (click)="barcodeScan(\'1phase\')">\n                    <ion-icon name="barcode" item-right></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-3 col-sm-3 col-md-3>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>First</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Second</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Third</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Voltage</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_voltage_r" (keyup)="checkDecimalLength8($event,\'1PVoltageR\')"\n                      [ngClass]="((accuracy.ta0at_voltage_r == \'\' || accuracy.ta0at_voltage_r == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second "\n                      [(ngModel)]="accuracy.ta0at_voltage_y" (keyup)="checkDecimalLength8($event,\'1PVoltageY\')"\n                      [ngClass]="((accuracy.ta0at_voltage_y == \'\' || accuracy.ta0at_voltage_y == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third "\n                      [(ngModel)]="accuracy.ta0at_voltage_b" (keyup)="checkDecimalLength8($event,\'1PVoltageB\')"\n                      [ngClass]="((accuracy.ta0at_voltage_b == \'\' || accuracy.ta0at_voltage_b == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Current</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_current_r" (keyup)="checkDecimalLength8($event,\'1PCurrentR\')"\n                      [ngClass]="((accuracy.ta0at_current_r == \'\' || accuracy.ta0at_current_r == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second "\n                      [(ngModel)]="accuracy.ta0at_current_y" (keyup)="checkDecimalLength8($event,\'1PCurrentY\')"\n                      [ngClass]="((accuracy.ta0at_current_y == \'\' || accuracy.ta0at_current_y == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third "\n                      [(ngModel)]="accuracy.ta0at_current_b" (keyup)="checkDecimalLength8($event,\'1PCurrentB\')"\n                      [ngClass]="((accuracy.ta0at_current_b == \'\' || accuracy.ta0at_current_b == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Power (W)</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_power_r" (keyup)="checkDecimalLength8($event,\'1PPWR_R\')"\n                      [ngClass]="((accuracy.ta0at_power_r == \'\' || accuracy.ta0at_power_r == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Yellow "\n                      [(ngModel)]="accuracy.ta0at_power_y" (keyup)="checkDecimalLength8($event,\'1PPWR_Y\')"\n                      [ngClass]="((accuracy.ta0at_power_y == \'\' || accuracy.ta0at_power_y == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Blue " [(ngModel)]="accuracy.ta0at_power_b"\n                      (keyup)="checkDecimalLength8($event,\'1PPWR_B\')"\n                      [ngClass]="((accuracy.ta0at_power_b == \'\' || accuracy.ta0at_power_b == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Power Factor</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_powerfactor_r" (keyup)="checkNegative($event,\'1PPWRR_R\')"\n                      [ngClass]="((accuracy.ta0at_powerfactor_r == \'\' || accuracy.ta0at_powerfactor_r == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second "\n                      [(ngModel)]="accuracy.ta0at_powerfactor_y" (keyup)="checkNegative($event,\'1PPWRR_Y\')"\n                      [ngClass]="((accuracy.ta0at_powerfactor_y == \'\' || accuracy.ta0at_powerfactor_y == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third "\n                      [(ngModel)]="accuracy.ta0at_powerfactor_b" (keyup)="checkNegative($event,\'1PPWRR_B\')"\n                      [ngClass]="((accuracy.ta0at_powerfactor_b == \'\' || accuracy.ta0at_powerfactor_b == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Constant</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="12" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_constant_1" (keyup)="checkIntergerVal($event,\'cont1single\')"\n                      [ngClass]="((accuracy.ta0at_constant_1 == \'\' || accuracy.ta0at_constant_1 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="12" placeholder="Enter Second "\n                      [(ngModel)]="accuracy.ta0at_constant_2" (keyup)="checkIntergerVal($event,\'cont2single\')"\n                      [ngClass]="((accuracy.ta0at_constant_2 == \'\' || accuracy.ta0at_constant_2 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="12" placeholder="Enter Third "\n                      [(ngModel)]="accuracy.ta0at_constant_3" (keyup)="checkIntergerVal($event,\'cont3single\')"\n                      [ngClass]="((accuracy.ta0at_constant_3 == \'\' || accuracy.ta0at_constant_3 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 1</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 2</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 3</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First " [(ngModel)]="accuracy.ta0at_test1"\n                      (keyup)="checkNegative($event,\'1PError_1\')" step="0.000" type="number" (ionChange)="errorAvg()"\n                      [ngClass]="((accuracy.ta0at_test1 == \'\' || accuracy.ta0at_test1 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second " [(ngModel)]="accuracy.ta0at_test2"\n                      (keyup)="checkNegative($event,\'1PError_2\')" (ionChange)="errorAvg()"\n                      [ngClass]="((accuracy.ta0at_test2 == \'\' || accuracy.ta0at_test2 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third " [(ngModel)]="accuracy.ta0at_test3"\n                      (keyup)="checkNegative($event,\'1PError_3\')" (ionChange)="errorAvg()"\n                      [ngClass]="((accuracy.ta0at_test3 == \'\' || accuracy.ta0at_test3 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-3 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error Average</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="%Error average " [readonly]="true"\n                      [(ngModel)]="accuracy.ta0at_avg"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf="!portable">\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>First</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Second</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Third</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Time Calculated</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_timecalc_1" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'TC1\')"\n                      [ngClass]="((accuracy.ta0at_timecalc_1 == \'\' || accuracy.ta0at_timecalc_1 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second "\n                      [(ngModel)]="accuracy.ta0at_timecalc_2" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'TC2\')"\n                      [ngClass]="((accuracy.ta0at_timecalc_2 == \'\' || accuracy.ta0at_timecalc_2 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third "\n                      [(ngModel)]="accuracy.ta0at_timecalc_3" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'TC3\')"\n                      [ngClass]="((accuracy.ta0at_timecalc_3 == \'\' || accuracy.ta0at_timecalc_3 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Real Time</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First "\n                      [(ngModel)]="accuracy.ta0at_timemeas_1" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'RT1\')"\n                      [ngClass]="((accuracy.ta0at_timemeas_1 == \'\' || accuracy.ta0at_timemeas_1 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second "\n                      [(ngModel)]="accuracy.ta0at_timemeas_2" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'RT2\')"\n                      [ngClass]="((accuracy.ta0at_timemeas_2 == \'\' || accuracy.ta0at_timemeas_2 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third "\n                      [(ngModel)]="accuracy.ta0at_timemeas_3" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'RT3\')"\n                      [ngClass]="((accuracy.ta0at_timemeas_3 == \'\' || accuracy.ta0at_timemeas_3 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 1</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 2</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 3</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Auto Calculation " [(ngModel)]="accuracy.ta0at_test1"\n                      step="0.01" [readonly]="true"\n                      [ngClass]="((accuracy.ta0at_test1 == \'\' || accuracy.ta0at_test1 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Auto Calculation " [(ngModel)]="accuracy.ta0at_test2"\n                      [readonly]="true"\n                      [ngClass]="((accuracy.ta0at_test2 == \'\' || accuracy.ta0at_test2 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Auto Calculation " [(ngModel)]="accuracy.ta0at_test3"\n                      [readonly]="true"\n                      [ngClass]="((accuracy.ta0at_test3 == \'\' || accuracy.ta0at_test3 == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-3 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error Average</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Auto Calculate" [readonly]="true"\n                      [(ngModel)]="accuracy.ta0at_avg"\n                      [ngClass]="((accuracy.ta0at_avg == \'\' || accuracy.ta0at_avg == undefined) && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n          <div *ngSwitchCase="\'after\'">\n            <!-- Current Date: Start -->\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Date</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-datetime [(ngModel)]="accuracy3P_N.ta4ma_date" max="3000-12-31" displayFormat="DD/MM/YYYY"\n                    pickerFormat="DD:MM:YYYY" placeholder="Tap to select.." style="padding: 0px;">\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- Current Date: End -->\n            <ion-row>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Test 1</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Test 2</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Test 3</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Average</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="test1" [(ngModel)]="accuracy3P_N.ta4ma_test1"\n                    (ionChange)="calculateAfterAccuracyTest()" type="number" placeholder="Enter value"\n                    [ngClass]="((accuracy3P_N.ta4ma_test1 == \'\' || accuracy3P_N.ta4ma_test1 == undefined) && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="test2" [(ngModel)]="accuracy3P_N.ta4ma_test2"\n                    (ionChange)="calculateAfterAccuracyTest()" type="number" maxlength="13" placeholder="Enter value"\n                    [ngClass]="((accuracy3P_N.ta4ma_test2 == \'\' || accuracy3P_N.ta4ma_test2 == undefined) && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="test3" [(ngModel)]="accuracy3P_N.ta4ma_test3"\n                    (ionChange)="calculateAfterAccuracyTest()" type="number" maxlength="13" placeholder="Enter value"\n                    [ngClass]="((accuracy3P_N.ta4ma_test3 == \'\' || accuracy3P_N.ta4ma_test3 == undefined) && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="average" [(ngModel)]="accuracy3P_N.ta4ma_avg" type="number" readonly\n                    placeholder="Auto Calculate"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n    </span>\n\n    <!-- NEUTRAL TEST -->\n    <span *ngIf="viewNeutralTest">\n      <ion-item-divider color="light">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>NEUTRAL TEST</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetNeutral()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowNeutral()" [(ngModel)]="neutral.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="neutral.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter "\n                [(ngModel)]="neutral.ta0naremarks"\n                [ngClass]="(neutral.ta0naremarks == \'\' || neutral.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="!neutral.ta0na">\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label text-center>Comparison Of Current Reading</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Phase (AMP)</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Phase (AMP)" [(ngModel)]="neutral.ta0nt_phase"\n                (keyup)="checkDecimalLength8($event,\'phase\')"\n                [ngClass]="(neutral.ta0nt_phase == \'\' || neutral.ta0nt_phase == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Neutral (AMP)</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Neutral (AMP)" [(ngModel)]="neutral.ta0nt_neutral"\n                (keyup)="checkDecimalLength8($event,\'neutral\')"\n                [ngClass]="(neutral.ta0nt_neutral == \'\' || neutral.ta0nt_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label text-center>Terminal Meter Polarity Test</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-center>Incoming</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-list radio-group [(ngModel)]="neutral.ta0nt_in_life">\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color="primary">Life</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_in_life == \'\' || neutral.ta0nt_in_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Ya</ion-label>\n                    <ion-radio value="Y"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_in_life == \'\' || neutral.ta0nt_in_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Tidak</ion-label>\n                    <ion-radio value="N"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-list radio-group [(ngModel)]="neutral.ta0nt_in_neutral">\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color="primary">Neutral</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_in_neutral == \'\' || neutral.ta0nt_in_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Ya</ion-label>\n                    <ion-radio value="Y"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_in_neutral == \'\' || neutral.ta0nt_in_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Tidak</ion-label>\n                    <ion-radio value="N"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" text-center>Outgoing</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-list radio-group [(ngModel)]="neutral.ta0nt_out_life">\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color="primary">Life</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_out_life == \'\' || neutral.ta0nt_out_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Ya</ion-label>\n                    <ion-radio value="Y"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_out_life == \'\' || neutral.ta0nt_out_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Tidak</ion-label>\n                    <ion-radio value="N"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-list radio-group [(ngModel)]="neutral.ta0nt_out_neutral">\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color="primary">Neutral</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_out_neutral == \'\' || neutral.ta0nt_out_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Ya</ion-label>\n                    <ion-radio value="Y"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item\n                    [ngClass]="(neutral.ta0nt_out_neutral == \'\' || neutral.ta0nt_out_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Tidak</ion-label>\n                    <ion-radio value="N"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n    </span>\n\n    <!-- MAGNET TEST -->\n    <span *ngIf="viewMagnetTest">\n      <ion-item-divider color="light">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>MAGNET TEST</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetMagnet()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowMagnet()" [(ngModel)]="magnet.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <span *ngIf="magnet.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="magnet.ta0naremarks"\n                [ngClass]="(magnet.ta0naremarks == \'\' || magnet.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n      <span *ngIf="!magnet.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Results</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-select interface="popover" [(ngModel)]="magnet.loc_ta0mt_magnet_result" placeholder="Choose value"\n                (ionChange)="changeUiViewMagentTest($event)">\n                <ion-option value=""></ion-option>\n                <ion-option value="Ada">Ada</ion-option>\n                <ion-option value="Tiada">Tiada</ion-option>\n                <ion-option value="Lain2">Lain-lain</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="magnetMeter">\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="magnet.ta0mt_magnet_result"\n                [ngClass]="(magnet.ta0mt_magnet_result == \'\' || magnet.ta0mt_magnet_result == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n    </span>\n\n    <!-- TAMPERING ANOMLY -->\n    <!-- <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>TAMPERING ANOMALY</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-select interface="popover" [(ngModel)]="tampering.loc_test_ta0na" (ionChange)="hideShowTampering()">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="tampering.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="tampering.ta0naremarks"\n              [ngClass]="(tampering.ta0naremarks == \'\' || tampering.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!tampering.ta0na">\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Main</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="tampering.ta0anomalymain" [readonly]="true"\n              [ngClass]="(tampering.ta0anomalymain == \'\' || tampering.ta0anomalymain == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'main\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Category</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="tampering.ta0anomalycategory" [readonly]="true"\n              [ngClass]="(tampering.ta0anomalycategory == \'\' || tampering.ta0anomalycategory == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'category\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Type</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="tampering.ta0anomalytype" [readonly]="true"\n              [ngClass]="(tampering.ta0anomalytype == \'\' || tampering.ta0anomalytype == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'type\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n    <!-- CORRECTIVE ACTION -->\n    <!-- Closed (Alif : 01/04/2019) -->\n    <!--\n    <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>CORRECTIVE ACTION</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowCorrective()" [(ngModel)]="corrective.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="corrective.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="corrective.ta0naremarks"\n              [ngClass]="(corrective.ta0naremarks == \'\' || corrective.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!corrective.ta0na">\n       <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Action</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="corrective.ta0at_corrective_action"\n              [ngClass]="(corrective.ta0at_corrective_action == \'\' || corrective.ta0at_corrective_action == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'corrective\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary" text-center>Accuracy Test After Correction</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">%Error 1 :</ion-label>\n            <ion-input type="text" maxlength="11" placeholder="%Error 1" [(ngModel)]="corrective.ta0at_test1"\n              (keyup)="checkNegative($event,\'correctiveErr1\')"\n              [ngClass]="(corrective.ta0at_test1 == \'\' || corrective.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">%Error 2 :</ion-label>\n            <ion-input type="text" maxlength="11" placeholder="%Error 2" [(ngModel)]="corrective.ta0at_test2"\n              (keyup)="checkNegative($event,\'correctiveErr2\')"\n              [ngClass]="(corrective.ta0at_test2 == \'\' || corrective.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">%Error 3 :</ion-label>\n            <ion-input type="text" maxlength="11" placeholder="%Error 3" [(ngModel)]="corrective.ta0at_test3"\n              (keyup)="checkNegative($event,\'correctiveErr3\')"\n              [ngClass]="(corrective.ta0at_test3 == \'\' || corrective.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  </div> -->\n\n    <!-- Inspection Remarks  -->\n    <!-- Added : Ameer (11/4/2019) -->\n    <!--   <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>INSPECTION REMARK</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider> -->\n    <!--  <ion-row col-12 col-md-12 col-sm-12>\n      <ion-col>\n        <ion-item>\n          <ion-label>Remark</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-textarea [(ngModel)]="remarksFeeder.ta4remarks_insp" placeholder="Remarks details"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n -->\n\n    <!-- WITNESS & EXAMINER SECTION -->\n    <!-- <span *ngIf="viewWitnessExaminerTest">\n    <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>WITNESS SECTION</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-sm-12 col-md-6 col-6>\n        <ion-item>\n          <ion-label color="primary">Customer agrees to sign</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-6 col-6>\n        <ion-item>\n          <ion-select [(ngModel)]="customerSignature" interface="popover"\n            (ionChange)="changeUiViewCustomerSignature($event)">\n            <ion-option value="Yes">Yes</ion-option>\n            <ion-option value="No">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <span *ngIf="customerSignature == \'No\'">\n      <ion-row>\n        <ion-col col-6 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="witness.ta0witnessname"\n              [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </span>\n\n    <span *ngIf="customerSignature == \'Yes\'">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-3>\n          <ion-item>\n            <ion-label color="primary">Witness Name</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-9>\n          <ion-item>\n            <ion-input type="text" placeholder="Witness Name" [(ngModel)]="witness.ta0witnessname"\n              (keyup)="outputSpeAplhaNumeric($event,\'name\')"\n              [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3 col-sm-3 col-md-3>\n          <ion-item>\n            <ion-label color="primary">Sign By</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-7 col-sm-7 col-md-7>\n          <ion-item text-center no-lines>\n            <signature-pad [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1></signature-pad>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-md-2>\n          <ion-item no-lines align-self-center>\n            <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'witness\')">Clear</button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">IC No. / Passport</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Phone No.</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" placeholder="Enter value" [(ngModel)]="witness.ta0witnessicpassport"\n              (keyup)="outputAplhaNumeric($event,\'icpassport\')"\n              [ngClass]="(witness.ta0witnessicpassport == \'\' || witness.ta0witnessicpassport == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" placeholder="Enter value" [(ngModel)]="witness.ta0witnessphone"\n              [ngClass]="(witness.ta0witnessphone == \'\' || witness.ta0witnessphone == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </span>\n\n    <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp;<strong>EXAMINER</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-6 col-sm-12 col-md-3>\n        <ion-item>\n          <ion-label color="primary">Examiner Name</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-12 col-md-9>\n        <ion-item>\n          <ion-input type="text" placeholder="Auto Populate" [(ngModel)]="gv.displayname" [readonly]="true">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3>\n        <ion-item>\n          <ion-label color="primary">Sign By</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-7 col-sm-7 col-md-7>\n        <ion-item text-center no-lines>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2></signature-pad>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2>\n        <ion-item no-lines align-self-center>\n          <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'examiner\')">Clear</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Staff No.</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Position</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-input type="text" placeholder="Auto Populate" [(ngModel)]="gv.username" [readonly]="true"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-input type="text" maxlength="11" placeholder="Auto Populate" [(ngModel)]="gv.employeetype"\n            [readonly]="true">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Station</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-select [(ngModel)]="examinerDepartment" [selectOptions]="{title: \'Station\'}" placeholder="Please select">\n            <ion-option *ngFor="let station of stations" [value]="station.json.value"\n              [selected]="station.json.value === examinerDepartment">{{ station.json.description }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    </span> -->\n\n  </div>\n  <!-- End page for single phase OPC -->\n\n  <!-- Starting for multi phase OPC -->\n  <div *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH">\n\n    <!-- PHYSICAL EXAMINATION -->\n    <span *ngIf="viewPhysicalTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong>PHYSICAL EXAMINATION</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetPhysical()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowPhysical()" [(ngModel)]="physical.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <span *ngIf="physical.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="physical.ta0naremarks"\n                [ngClass]="(physical.ta0naremarks == \'\' || physical.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n      <span *ngIf="!physical.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item text-wrap>\n              <ion-label color="primary">Indication at Electronic Meter Display</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" placeholder="Please enter value" [(ngModel)]="physical.ta0ts_emdisplay"\n                [ngClass]="(physical.ta0ts_emdisplay == \'\' || physical.ta0ts_emdisplay == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Tampering Suspect</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" placeholder="Please enter value" [(ngModel)]="physical.ta0ts_meter"\n                [ngClass]="(physical.ta0ts_meter == \'\' || physical.ta0ts_meter == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Close Because Already Have in Sil & Sticker Page (Alif : 28/03/2019) -->\n        <!-- <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary" style="min-width:20%"> Terminal condition\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="meterCoverArray.ta0sealcondition"\n              [ngClass]="(meterCoverArray.ta0sealcondition == \'\' || meterCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-option value="K">KOYAK</ion-option>\n              <ion-option value="O">OK</ion-option>\n              <ion-option value="P">PUTUS</ion-option>\n              <ion-option value="T">TIDAK OK</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary" style="min-width:20%"> Meter condition\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-select interface="popover" [(ngModel)]="terminalCoverArray.ta0sealcondition"\n              [ngClass]="(terminalCoverArray.ta0sealcondition == \'\' || terminalCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-option value="K">KOYAK</ion-option>\n              <ion-option value="O">OK</ion-option>\n              <ion-option value="P">PUTUS</ion-option>\n              <ion-option value="T">TIDAK OK</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Sticker Safety condition\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" placeholder="Enter Safety" [(ngModel)]="sterminalCoverArray.ta0stickercondition"\n              (keyup)="outputAplhaNumeric($event,\'safetyCondition\')"\n              [ngClass]="(sterminalCoverArray.ta0stickercondition == \'\' || sterminalCoverArray.ta0stickercondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      </span>\n    </span>\n\n    <!-- CURRENT COMPARISON -->\n    <span *ngIf="viewCurrentComparisonTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong>CURRENT COMPARISON</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetCurrent()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowCurrentCompare()"\n              [(ngModel)]="currentCompare.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="currentCompare.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="currentCompare.ta0naremarks"\n                [ngClass]="(currentCompare.ta0naremarks == \'\' || currentCompare.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="!currentCompare.ta0na">\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col col-3 col-sm-3 col-md-3>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3>\n            <ion-item>\n              <ion-label color="primary" text-center>Red</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3>\n            <ion-item>\n              <ion-label color="primary" text-center>Yellow</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3>\n            <ion-item>\n              <ion-label color="primary" text-center>Blue</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col col-3 col-sm-3 col-md-3>\n            <ion-item text-wrap>\n              <ion-label color="primary"> Actual current reading </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3 align-self-end>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Red" [(ngModel)]="currentCompare.ta0cu_actual_r"\n                (ionChange)="actualReading()" (keyup)="checkDecimalLength8($event,\'actualR\')"\n                [ngClass]="(currentCompare.ta0cu_actual_r == \'\' || currentCompare.ta0cu_actual_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3 align-self-end>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n                [(ngModel)]="currentCompare.ta0cu_actual_y" (ionChange)="actualReading()"\n                (keyup)="checkDecimalLength8($event,\'actualY\')"\n                [ngClass]="(currentCompare.ta0cu_actual_y == \'\' || currentCompare.ta0cu_actual_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3 align-self-end>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Blue" [(ngModel)]="currentCompare.ta0cu_actual_b"\n                (ionChange)="actualReading()" (keyup)="checkDecimalLength8($event,\'actualB\')"\n                [ngClass]="(currentCompare.ta0cu_actual_b == \'\' || currentCompare.ta0cu_actual_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col col-3 col-sm-3 col-md-3>\n            <ion-item text-wrap>\n              <ion-label color="primary">Display Current Reading</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3 align-self-end>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Red" [(ngModel)]="currentCompare.ta0cu_disp_r"\n                (ionChange)="actualReading()" (keyup)="checkDecimalLength8($event,\'dispR\')"\n                [ngClass]="(currentCompare.ta0cu_disp_r == \'\' || currentCompare.ta0cu_disp_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3 align-self-end>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Yellow" [(ngModel)]="currentCompare.ta0cu_disp_y"\n                (ionChange)="actualReading()" (keyup)="checkDecimalLength8($event,\'dispY\')"\n                [ngClass]="(currentCompare.ta0cu_disp_y == \'\' || currentCompare.ta0cu_disp_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3 col-sm-3 col-md-3 align-self-end>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Blue" [(ngModel)]="currentCompare.ta0cu_disp_b"\n                (ionChange)="actualReading()" (keyup)="checkDecimalLength8($event,\'dispB\')"\n                [ngClass]="(currentCompare.ta0cu_disp_b == \'\' || currentCompare.ta0cu_disp_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n              <ion-label text-center>Total</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Total (Actual Current Reading)</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Total (Display Current Reading)</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Total"\n                [(ngModel)]="currentCompare.ta0cu_actual_total" [readonly]="true"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" maxlength="11" placeholder="Enter Total"\n                [(ngModel)]="currentCompare.ta0cu_disp_total" [readonly]="true"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">% Current Difference</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" placeholder="Current Difference" [readonly]="true"\n                [(ngModel)]="currentCompare.ta0cu_difference"\n                [ngClass]="(currentCompare.ta0cu_difference == \'\' || currentCompare.ta0cu_difference == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row col-12 col-sm-12 col-md-12>\n          <ion-item no-lines>\n            <ion-label style=" font-style:italic;">*(Display Current-Actual Current/Actual Current)*100</ion-label>\n          </ion-item>\n        </ion-row>\n      </div>\n    </span>\n\n    <!-- TERMINAL METER POLARITY -->\n    <span *ngIf="viewPolarityTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong>TERMINAL METER POLARITY TEST</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetTerminal()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowPolarity()" [(ngModel)]="polarity.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="polarity.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="polarity.ta0naremarks"\n                [ngClass]="(polarity.ta0naremarks == \'\' || polarity.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="!polarity.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item>\n              <ion-label color="primary">Red</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item style="padding-left: 0px;"\n              [ngClass]="(polarity.ta0po_tm_r == \'\' || polarity.ta0po_tm_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_r">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="T">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item>\n              <ion-label color="primary">Yellow</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item style="padding-left: 0px;"\n              [ngClass]="(polarity.ta0po_tm_y == \'\' || polarity.ta0po_tm_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_y">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="T">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item>\n              <ion-label color="primary">Blue</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item style="padding-left: 0px;"\n              [ngClass]="(polarity.ta0po_tm_b == \'\' || polarity.ta0po_tm_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_b">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="T">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item>\n              <ion-label color="primary">Neutral</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item style="padding-left: 0px;"\n              [ngClass]="(polarity.ta0po_tm_n == \'\' || polarity.ta0po_tm_n == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_n">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="T">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n    </span>\n\n    <!-- MAGNET TEST -->\n    <span *ngIf="viewMagnetTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>MAGNET TEST</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetMagnet()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowMagnet()" [(ngModel)]="magnet.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <span *ngIf="magnet.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="magnet.ta0naremarks"\n                [ngClass]="(magnet.ta0naremarks == \'\' || magnet.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n      <span *ngIf="!magnet.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Results</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-select interface="popover" [(ngModel)]="magnet.loc_ta0mt_magnet_result" placeholder="Choose value"\n                (ionChange)="changeUiViewMagentTest($event)">\n                <ion-option value=""></ion-option>\n                <ion-option value="Ada">Ada</ion-option>\n                <ion-option value="Tiada">Tiada</ion-option>\n                <ion-option value="Lain2">Lain-lain</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="magnetMeter">\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="magnet.ta0mt_magnet_result"\n                [ngClass]="(magnet.ta0mt_magnet_result == \'\' || magnet.ta0mt_magnet_result == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </span>\n    </span>\n\n    <!-- ACCURACY TEST -->\n    <span *ngIf="viewAccuracyTest">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong>ACCURACY TEST</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n            <button ion-button small round mode="md" (click)="resetAccuracy()" style="opacity: unset;"\n              text-end>Reset</button>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Not Applicable</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select interface="popover" (ionChange)="hideShowMeter()" [(ngModel)]="accuracy3P.loc_test_ta0na">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="accuracy3P.ta0na">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="accuracy3P.ta0naremarks"\n                [ngClass]="(accuracy3P.ta0naremarks == \'\' || accuracy3P.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="!accuracy3P.ta0na">\n\n        <!-- Segment -->\n        <ion-row style="padding-top: 15px;padding-left: 15px;">\n          <ion-col col-sm-12 col-md-12 col-12>\n            <ion-segment [(ngModel)]="valueChangeAccuracy">\n              <ion-segment-button value="before">\n                Before\n              </ion-segment-button>\n              <ion-segment-button value="after">\n                After\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n\n        <div [ngSwitch]="valueChangeAccuracy">\n          <div *ngSwitchCase="\'before\'">\n            <ion-row>\n              <ion-col col-6 col-sm-12 col-md-3>\n                <ion-item>\n                  <ion-label color="primary" style="min-width:20%">Accuracy Type</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6 col-sm-12 col-md-9>\n                <ion-item\n                  [ngClass]="(accuracy3P.ta0testind == \'\' || accuracy3P.ta0testind == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-select interface="popover" (ionChange)="hideAccuracy3Phase()"\n                    [(ngModel)]="accuracy3P.ta0testind">\n                    <ion-option value="P">Portable</ion-option>\n                    <ion-option value="M">Manual</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <div *ngIf="portable">\n              <ion-row>\n                <ion-col col-3 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Portable Test Set </ion-label>>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-8 col-sm-12 col-md-8>\n                  <ion-item>\n                    <ion-input type="text" maxlength="18" placeholder="Serial No."\n                      [(ngModel)]="accuracy3P.ta0at_pteserialnum" (keyup)="outputAplhaNumeric($event,\'ptSerialNo\')"\n                      [ngClass]="(accuracy3P.ta0at_pteserialnum == \'\' || accuracy3P.ta0at_pteserialnum == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-1 col-sm-1 col-md-1>\n                  <button ion-button (click)="barcodeScan(\'3phase\')">\n                    <ion-icon name="barcode" item-right></ion-icon>\n                  </button>\n                </ion-col>\n              </ion-row>\n\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Red</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Yellow</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Blue</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Voltage</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Enter Red" [(ngModel)]="accuracy3P.ta0at_voltage_r"\n                      (keyup)="checkDecimalLength8($event,\'voltageR\')"\n                      [ngClass]="(accuracy3P.ta0at_voltage_r == \'\' || accuracy3P.ta0at_voltage_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Enter Yellow" [(ngModel)]="accuracy3P.ta0at_voltage_y"\n                      (keyup)="checkDecimalLength8($event,\'voltageY\')"\n                      [ngClass]="(accuracy3P.ta0at_voltage_y == \'\' || accuracy3P.ta0at_voltage_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Enter Blue" [(ngModel)]="accuracy3P.ta0at_voltage_b"\n                      (keyup)="checkDecimalLength8($event,\'voltageB\')"\n                      [ngClass]="(accuracy3P.ta0at_voltage_b == \'\' || accuracy3P.ta0at_voltage_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Current</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Red"\n                      [(ngModel)]="accuracy3P.ta0at_current_r" (keyup)="checkDecimalLength8($event,\'currentR\')"\n                      [ngClass]="(accuracy3P.ta0at_current_r == \'\' || accuracy3P.ta0at_current_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n                      [(ngModel)]="accuracy3P.ta0at_current_y" (keyup)="checkDecimalLength8($event,\'currentY\')"\n                      [ngClass]="(accuracy3P.ta0at_current_y == \'\' || accuracy3P.ta0at_current_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n                      [(ngModel)]="accuracy3P.ta0at_current_b" (keyup)="checkDecimalLength8($event,\'currentB\')"\n                      [ngClass]="(accuracy3P.ta0at_current_b == \'\' || accuracy3P.ta0at_current_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Power (W)</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Red" [(ngModel)]="accuracy3P.ta0at_power_r"\n                      (keyup)="checkDecimalLength8($event,\'PWR\')"\n                      [ngClass]="(accuracy3P.ta0at_power_r == \'\' || accuracy3P.ta0at_power_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n                      [(ngModel)]="accuracy3P.ta0at_power_y" (keyup)="checkDecimalLength8($event,\'PWY\')"\n                      [ngClass]="(accuracy3P.ta0at_power_y == \'\' || accuracy3P.ta0at_power_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n                      [(ngModel)]="accuracy3P.ta0at_power_b" (keyup)="checkDecimalLength8($event,\'PWB\')"\n                      [ngClass]="(accuracy3P.ta0at_power_b == \'\' || accuracy3P.ta0at_power_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Power Factor</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Red"\n                      [(ngModel)]="accuracy3P.ta0at_powerfactor_r" (keyup)="checkNegative($event,\'PRR\')"\n                      [ngClass]="(accuracy3P.ta0at_powerfactor_r == \'\' || accuracy3P.ta0at_powerfactor_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n                      [(ngModel)]="accuracy3P.ta0at_powerfactor_y" (keyup)="checkNegative($event,\'PRY\')"\n                      [ngClass]="(accuracy3P.ta0at_powerfactor_y == \'\' || accuracy3P.ta0at_powerfactor_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n                      [(ngModel)]="accuracy3P.ta0at_powerfactor_b" (keyup)="checkNegative($event,\'PRB\')"\n                      [ngClass]="(accuracy3P.ta0at_powerfactor_b == \'\' || accuracy3P.ta0at_powerfactor_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 1</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 2</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 3</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter value" [(ngModel)]="accuracy3P.ta0at_test1"\n                      (ionChange)="errorAvg()" (keyup)="checkNegative($event,\'error1\')"\n                      [ngClass]="(accuracy3P.ta0at_test1 == \'\' || accuracy3P.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter value" [(ngModel)]="accuracy3P.ta0at_test2"\n                      (ionChange)="errorAvg()" (keyup)="checkNegative($event,\'error2\')"\n                      [ngClass]="(accuracy3P.ta0at_test2 == \'\' || accuracy3P.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter value" [(ngModel)]="accuracy3P.ta0at_test3"\n                      (ionChange)="errorAvg()" (keyup)="checkNegative($event,\'error3\')"\n                      [ngClass]="(accuracy3P.ta0at_test3 == \'\' || accuracy3P.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error Average</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-9>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="%Error average" [readonly]="true"\n                      [(ngModel)]="accuracy3P.ta0at_avg"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf="!portable">\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>First</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Second</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary" text-center>Third</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Time Calculated</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter First"\n                      [(ngModel)]="accuracy3P.ta0at_timecalc_1" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'3TC1\')"\n                      [ngClass]="(accuracy3P.ta0at_timecalc_1 == \'\' || accuracy3P.ta0at_timecalc_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Second"\n                      [(ngModel)]="accuracy3P.ta0at_timecalc_2" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'3TC2\')"\n                      [ngClass]="(accuracy3P.ta0at_timecalc_2 == \'\' || accuracy3P.ta0at_timecalc_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter Third"\n                      [(ngModel)]="accuracy3P.ta0at_timecalc_3" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'3TC3\')"\n                      [ngClass]="(accuracy3P.ta0at_timecalc_3 == \'\' || accuracy3P.ta0at_timecalc_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">Real Time</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter value"\n                      [(ngModel)]="accuracy3P.ta0at_timemeas_1" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'3RT1\')"\n                      [ngClass]="(accuracy3P.ta0at_timemeas_1 == \'\' || accuracy3P.ta0at_timemeas_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter value"\n                      [(ngModel)]="accuracy3P.ta0at_timemeas_2" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'3RT2\')"\n                      [ngClass]="(accuracy3P.ta0at_timemeas_2 == \'\' || accuracy3P.ta0at_timemeas_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Enter value"\n                      [(ngModel)]="accuracy3P.ta0at_timemeas_3" (ionChange)="errorManual()"\n                      (keyup)="checkDecimalLength8($event,\'3RT3\')"\n                      [ngClass]="(accuracy3P.ta0at_timemeas_3 == \'\' || accuracy3P.ta0at_timemeas_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item no-lines></ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 1</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 2</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item text-center>\n                    <ion-label color="primary">Error 3</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Auto Calculation"\n                      [(ngModel)]="accuracy3P.ta0at_test1" [readonly]="true"\n                      [ngClass]="(accuracy3P.ta0at_test1 == \'\' || accuracy3P.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Auto Calculation"\n                      [(ngModel)]="accuracy3P.ta0at_test2" [readonly]="true"\n                      [ngClass]="(accuracy3P.ta0at_test2 == \'\' || accuracy3P.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="Auto Calculation"\n                      [(ngModel)]="accuracy3P.ta0at_test3" [readonly]="true"\n                      [ngClass]="(accuracy3P.ta0at_test3 == \'\' || accuracy3P.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row col-12 col-sm-12 col-md-12>\n                <ion-col col-12 col-sm-12 col-md-3>\n                  <ion-item>\n                    <ion-label color="primary">% Error Average</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-9>\n                  <ion-item>\n                    <ion-input type="text" maxlength="11" placeholder="%Error average" [readonly]="true"\n                      [(ngModel)]="accuracy3P.ta0at_avg"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n\n          </div>\n          <div *ngSwitchCase="\'after\'">\n            <!-- Current Date: Start -->\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Date</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-datetime [(ngModel)]="accuracy3P_N.ta4ma_date" max="3000-12-31" displayFormat="DD/MM/YYYY"\n                    pickerFormat="DD:MM:YYYY" placeholder="Tap to select.." style="padding: 0px;">\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- Current Date: End -->\n            <ion-row>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Test 1</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Test 2</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Test 3</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-label color="primary">Average</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="test1" [(ngModel)]="accuracy3P_N.ta4ma_test1"\n                    (ionChange)="calculateAfterAccuracyTest()" type="number" placeholder="Enter value"\n                    [ngClass]="(accuracy3P_N.ta4ma_test1 == \'\' || accuracy3P_N.ta4ma_test1 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="test2" [(ngModel)]="accuracy3P_N.ta4ma_test2"\n                    (ionChange)="calculateAfterAccuracyTest()" type="number" maxlength="13" placeholder="Enter value"\n                    [ngClass]="(accuracy3P_N.ta4ma_test2 == \'\' || accuracy3P_N.ta4ma_test2 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="test3" [(ngModel)]="accuracy3P_N.ta4ma_test3"\n                    (ionChange)="calculateAfterAccuracyTest()" type="number" maxlength="13" placeholder="Enter value"\n                    [ngClass]="(accuracy3P_N.ta4ma_test3 == \'\' || accuracy3P_N.ta4ma_test3 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-3>\n                <ion-item>\n                  <ion-input id="average" [(ngModel)]="accuracy3P_N.ta4ma_avg" type="number" readonly\n                    placeholder="Auto Calculate"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n    </span>\n\n    <!-- Inspection Remarks  -->\n    <!-- Added : Ameer (11/4/2019) -->\n    <!-- <ion-item-divider color="light">\n      <ion-row>\n        <ion-col>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>INSPECTION REMARK</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row col-12 col-md-12 col-sm-12>\n      <ion-col>\n        <ion-item>\n          <ion-label>Remark</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-textarea [(ngModel)]="remarksFeeder.ta4remarks_insp" placeholder="Remarks details"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n    <!-- TAMPERING ANOMLY -->\n    <!-- <ion-item-divider color="light">\n      <ion-icon name="flask"></ion-icon>&nbsp;<strong>TAMPERING ANOMLY</strong>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-select interface="popover" [(ngModel)]="tampering.loc_test_ta0na" (ionChange)="hideShowTampering()">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="tampering.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="tampering.ta0naremarks"\n              [ngClass]="(tampering.ta0naremarks == \'\' || tampering.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!tampering.ta0na">\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Main</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="tampering.ta0anomalymain" [readonly]="true"\n              [ngClass]="(tampering.ta0anomalymain == \'\' || tampering.ta0anomalymain == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'main\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Category</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="tampering.ta0anomalycategory" [readonly]="true"\n              [ngClass]="(tampering.ta0anomalycategory == \'\' || tampering.ta0anomalycategory == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'category\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Type</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="tampering.ta0anomalytype" [readonly]="true"\n              [ngClass]="(tampering.ta0anomalytype == \'\' || tampering.ta0anomalytype == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'type\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n    <!-- CORRECTIVE ACTION -->\n    <!-- <ion-item-divider color="light">\n      <ion-icon name="flask"></ion-icon>&nbsp;<strong>CORRECTIVE ACTION</strong>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Not Applicable</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-select interface="popover" (ionChange)="hideShowCorrective()" [(ngModel)]="corrective.loc_test_ta0na">\n            <ion-option value="Y">Yes</ion-option>\n            <ion-option value="N">No</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="corrective.ta0na">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Remarks</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n              [(ngModel)]="corrective.ta0naremarks"\n              [ngClass]="(corrective.ta0naremarks == \'\' || corrective.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="!corrective.ta0na">\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Action</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="corrective.ta0at_corrective_action" [readonly]="true"\n              [ngClass]="(corrective.ta0at_corrective_action == \'\' || corrective.ta0at_corrective_action == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button (click)="searchLookUp(\'corrective\')">\n            <ion-icon name="search" item-right></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary" text-center text-uppercase>Accuracy Test After Corrective Action</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">% Error 1</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" maxlength="11" placeholder="%Error 1" [(ngModel)]="corrective.ta0at_test1"\n              (keyup)="checkNegative($event,\'correctiveErr1\')"\n              [ngClass]="(corrective.ta0at_test1 == \'\' || corrective.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">% Error 2</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" maxlength="11" placeholder="%Error 2" [(ngModel)]="corrective.ta0at_test2"\n              (keyup)="checkNegative($event,\'correctiveErr2\')"\n              [ngClass]="(corrective.ta0at_test2 == \'\' || corrective.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">% Error 3</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" maxlength="11" placeholder="%Error 3" [(ngModel)]="corrective.ta0at_test3"\n              (keyup)="checkNegative($event,\'correctiveErr3\')"\n              [ngClass]="(corrective.ta0at_test3 == \'\' || corrective.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n -->\n\n\n    <!-- WITNESS & EXAMINER SECTION -->\n    <!-- <span *ngIf="viewWitnessExaminerTest">\n      <ion-item-divider color="light">\n        <ion-row>\n          <ion-col>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong>WITNESS SECTION</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row>\n        <ion-col col-sm-12 col-md-6 col-6>\n          <ion-item>\n            <ion-label color="primary">Customer agrees to sign</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-sm-12 col-md-6 col-6>\n          <ion-item>\n            <ion-select [(ngModel)]="customerSignature" interface="popover"\n              (ionChange)="changeUiViewCustomerSignature($event)">\n              <ion-option value="Yes">Yes</ion-option>\n              <ion-option value="No">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf="customerSignature == \'No\'">\n        <ion-row>\n          <ion-col col-6 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n                [(ngModel)]="witness.ta0witnessname"\n                [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf="customerSignature == \'Yes\'">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-3>\n            <ion-item>\n              <ion-label color="primary">Witness Name</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-9>\n            <ion-item>\n              <ion-input type="text" placeholder="Witness Name" [(ngModel)]="witness.ta0witnessname"\n                (keyup)="outputSpeAplhaNumeric($event,\'name\')"\n                [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3 col-sm-3 col-md-3>\n            <ion-item>\n              <ion-label color="primary">Sign By</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-7 col-sm-7 col-md-7>\n            <ion-item text-center no-lines>\n              <signature-pad [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1></signature-pad>\n            </ion-item>\n          </ion-col>\n          <ion-col col-2 col-sm-2 col-md-2>\n            <ion-item no-lines align-self-center>\n              <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'witness\')">Clear</button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">IC No. / Passport</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Phone No.</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" placeholder="Enter value" [(ngModel)]="witness.ta0witnessicpassport"\n                (keyup)="outputAplhaNumeric($event,\'icpassport\')"\n                [ngClass]="(witness.ta0witnessicpassport == \'\' || witness.ta0witnessicpassport == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-input type="text" placeholder="Enter value" [(ngModel)]="witness.ta0witnessphone"\n                [ngClass]="(witness.ta0witnessphone == \'\' || witness.ta0witnessphone == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-item-divider color="light">\n        <ion-row>\n          <ion-col>\n            <ion-icon name="flask"></ion-icon>&nbsp;<strong>EXAMINER SECTION</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col col-12 col-sm-12 col-md-3>\n          <ion-item>\n            <ion-label color="primary">Examiner Name</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-9>\n          <ion-item>\n            <ion-input type="text" maxlength="11" placeholder="Auto Populate" [(ngModel)]="gv.displayname"\n              [readonly]="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col col-3 col-sm-3 col-md-3>\n          <ion-item>\n            <ion-label color="primary">Sign By</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-7 col-sm-7 col-md-7>\n          <ion-item text-center no-lines>\n            <signature-pad [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2></signature-pad>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-md-2>\n          <ion-item no-lines align-self-center>\n            <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'examiner\')">Clear</button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Staff No.</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Position</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" maxlength="11" placeholder="Auto Populate" [(ngModel)]="lead" [readonly]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input type="text" maxlength="11" placeholder="Auto Populate" [(ngModel)]="gv.employeetype"\n              [readonly]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary">Station</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-select [(ngModel)]="examinerDepartment" [selectOptions]="{title: \'Station\'}"\n              placeholder="Please select">\n              <ion-option *ngFor="let station of stations" [value]="station.json.value"\n                [selected]="station.json.value === examinerDepartment">{{ station.json.description }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </span> -->\n  </div>\n  <!-- End page for multi phase OPC  -->\n\n\n  <!-- METER RESGITER TEST SECTION -->\n  <span *ngIf="viewMeterRegisterTest">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-9>\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER REGISTER TEST</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetMeter()" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">\n            Portable Test Set:\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder="Please enter" [(ngModel)]="meterRegister.ta4pts"\n            [ngClass]="(meterRegister.ta4pts == \'\' || meterRegister.ta4pts == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-md-12 col-sm-12>\n      <ion-segment [(ngModel)]="valueChangeRegisterTest">\n        <ion-segment-button value="before">\n          Before\n        </ion-segment-button>\n        <ion-segment-button value="after">\n          After\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n    <div [ngSwitch]="valueChangeRegisterTest">\n      <div *ngSwitchCase="\'before\'">\n        <div *ngFor="let attr of meterRegisterBefore; let j = index">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label> Test {{ j + 1 }} </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">End</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">% Error</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_start" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)"\n                  [ngClass]="(attr.ta4ma_reg_start == \'\' || attr.ta4ma_reg_start == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_stop" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)"\n                  [ngClass]="(attr.ta4ma_reg_stop == \'\' || attr.ta4ma_reg_stop == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_usage" placeholder="Auto Calculate"\n                  [disabled]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_error" placeholder="Please enter"\n                  [ngClass]="(attr.ta4ma_reg_error == \'\' || attr.ta4ma_reg_error == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- Only Test 1 -->\n        <!-- <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Start</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">End</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Usage</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterBf.ta4ma_reg_start"\n              (ionChange)="registerCalc()">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterBf.ta4ma_reg_stop"\n              (ionChange)="registerCalc()">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterBf.ta4ma_reg_usage" [disabled]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">%Error</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterBf.ta4ma_reg_error">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      </div>\n      <span *ngSwitchCase="\'after\'">\n        <div *ngFor="let attr of meterRegisterAfter; let j = index">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label> Test {{ j + 1 }} </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">End</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">% Error</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_start" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)"\n                  [ngClass]="(attr.ta4ma_reg_start == \'\' || attr.ta4ma_reg_start == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_stop" placeholder="Please enter"\n                  (ionChange)="autoCalculateMeterRegisterUsage(attr)"\n                  [ngClass]="(attr.ta4ma_reg_stop == \'\' || attr.ta4ma_reg_stop == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_usage" placeholder="Auto Calculate"\n                  [disabled]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="attr.ta4ma_reg_error" placeholder="Please enter"\n                  [ngClass]="(attr.ta4ma_reg_error == \'\' || attr.ta4ma_reg_error == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- Only 1 Test -->\n        <!-- <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Start</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">End</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Usage</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterAf.ta4ma_reg_start"\n              (ionChange)="registerCalc()">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterAf.ta4ma_reg_stop"\n              (ionChange)="registerCalc()">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterAf.ta4ma_reg_usage" [disabled]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">%Error</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Please enter" [(ngModel)]="meterRegisterAf.ta4ma_reg_error">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      </span>\n    </div>\n  </span>\n\n  <!-- WITNESS & EXAMINER SECTION -->\n  <!-- <span *ngIf="viewWitnessExaminerTest"> -->\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-9>\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>WITNESS SECTION</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetWitness()" style="opacity: unset;"\n          text-end>Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col col-sm-12 col-md-6 col-6>\n      <ion-item>\n        <ion-label color="primary">Customer agrees to sign</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-6 col-6>\n      <ion-item>\n        <ion-select [(ngModel)]="customerSignature" interface="popover" (ionChange)="changeUiViewCustomerSignature()">\n          <ion-option value="Yes">Yes</ion-option>\n          <ion-option value="No">No</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <span *ngIf="customerSignature == \'No\'">\n    <ion-row>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary">Remarks</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n            [(ngModel)]="witness.ta0witnessname"\n            [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </span>\n\n  <span *ngIf="customerSignature == \'Yes\'">\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-3>\n        <ion-item>\n          <ion-label color="primary">Witness Name</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-9>\n        <ion-item>\n          <ion-input type="text" placeholder="Witness Name" [(ngModel)]="witness.ta0witnessname"\n            (keyup)="outputSpeAplhaNumeric($event,\'name\')"\n            [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3>\n        <ion-item>\n          <ion-label color="primary">Sign By</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-7 col-sm-7 col-md-7>\n        <ion-item text-center no-lines>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1></signature-pad>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2>\n        <ion-item no-lines align-self-center>\n          <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'witness\')">Clear</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">IC No. / Passport</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">Phone No.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text" placeholder="Enter value" [(ngModel)]="witness.ta0witnessicpassport"\n            (keyup)="outputAplhaNumeric($event,\'icpassport\')"\n            [ngClass]="(witness.ta0witnessicpassport == \'\' || witness.ta0witnessicpassport == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text" placeholder="Enter value" [(ngModel)]="witness.ta0witnessphone"\n            [ngClass]="(witness.ta0witnessphone == \'\' || witness.ta0witnessphone == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </span>\n\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-9>\n        <ion-icon name="flask"></ion-icon>&nbsp;<strong>EXAMINER SECTION</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetExaminer()" style="opacity: unset;"\n          text-end>Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Examiner Name</ion-label>\n        <ion-input type="text" placeholder="Auto Populate" [(ngModel)]="gv.displayname" [readonly]="true"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-3 col-sm-3 col-md-3>\n      <ion-item>\n        <ion-label color="primary">Sign By</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-7 col-sm-7 col-md-7>\n      <ion-item text-center [ngClass]="(warningFlag) ? \'redHighlightText\' : \'blackHighlightText\'">\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2></signature-pad>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2 col-sm-2 col-md-2>\n      <ion-item no-lines align-self-center>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'examiner\')">Clear</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-label color="primary" stacked>Staff No.</ion-label>\n        <ion-input type="text" placeholder="Auto Populate" [(ngModel)]="gv.username" [readonly]="true"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-label color="primary" stacked>Position</ion-label>\n        <ion-input type="text" maxlength="11" placeholder="Auto Populate" [(ngModel)]="gv.employeetype"\n          [readonly]="true"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-label color="primary">Station</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 col-sm-12 col-md-6>\n      <ion-item>\n        <ion-select [(ngModel)]="examinerDepartment" [selectOptions]="{title: \'Station\'}" placeholder="Please select">\n          <ion-option *ngFor="let station of stations" [value]="station.json.value"\n            [selected]="station.json.value === examinerDepartment">{{ station.json.description }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- </span> -->\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/deviceTestForms/seal-opc-inspect/seal-opc-inspect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_12__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SealOpcInspectPage);
    return SealOpcInspectPage;
}());

//# sourceMappingURL=seal-opc-inspect.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealOpcInspectPageModule", function() { return SealOpcInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_opc_inspect__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SealOpcInspectPageModule = /** @class */ (function () {
    function SealOpcInspectPageModule() {
    }
    SealOpcInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_opc_inspect__["a" /* SealOpcInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_opc_inspect__["a" /* SealOpcInspectPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__["SignaturePadModule"],
            ],
        })
    ], SealOpcInspectPageModule);
    return SealOpcInspectPageModule;
}());

//# sourceMappingURL=seal-opc-inspect.module.js.map

/***/ }),

/***/ 947:
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

/***/ 957:
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
//# sourceMappingURL=20.js.map