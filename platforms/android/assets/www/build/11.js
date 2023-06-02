webpackJsonp([11],{

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcTestInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_SealInfo__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_StickerInfo__ = __webpack_require__(949);
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
















var OpcTestInspectPage = /** @class */ (function () {
    function OpcTestInspectPage(navCtrl, navParams, jsonStore, appCtrl, gf, gv, dataService, barcodeScanner, toast, alertCtrl) {
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
        this.dCons = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        this.deviceVoltage = '01';
        this.allowSave = true;
        this.neutral = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.tampering = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.corrective = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.witness = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.currentCompare = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.polarity = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.magnet = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracy3P = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.physical = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.itemOri = this.navParams.get("paramObj");
        this.fIndex = this.navParams.get("fIndex");
        this.maIndex = this.navParams.get("maIndex");
        this.deviceVoltage = this.navParams.get("deviceVoltage");
        /** Copy Clone into Original */
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        if (this.maIndex != undefined) {
            // Read ta0detail if exist
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
                console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
                // Get Total Length of Array
                console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                for (var i = 0; i < testLength; i++) {
                    var ta0testdetails = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
                    var type = ta0testdetails.ta0testtype;
                    var applicable = ta0testdetails.ta0na;
                    switch (type) {
                        case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P:
                            {
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
                                //this.hideShowTypeAccuracy();
                            }
                            break;
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
                        case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS:
                            this.witness = ta0testdetails;
                            break;
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
                            /* this.hideShowTypeAccuracy(); */
                            /* this.hideShowMeter(); */
                            break;
                        }
                    }
                }
                // Get Visual Inspection Test Data
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
            var sterminalCoverVal = new __WEBPACK_IMPORTED_MODULE_6__pojo_StickerInfo__["a" /* StickerInfo */]();
            sterminalCoverVal.ta0stickerlocation = "TERMINAL_COVER_1";
            sterminalCoverVal.ta0stickercondition = null;
            this.sterminalCoverArray = sterminalCoverVal;
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0stickerdetail')) {
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
        this.lead = this.itemOri.json.assignment[0].laborcode;
        this.station = this.itemOri.json.siteid;
        this.phone = this.itemOri.json.phone;
    }
    //created by Ameer (19/10/2018)
    OpcTestInspectPage.prototype.hideShowPhysical = function () {
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
    OpcTestInspectPage.prototype.hideShowMeter = function () {
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
        }
    };
    //Created by Ameer (18/10/2018)
    OpcTestInspectPage.prototype.hideAccuracy3Phase = function () {
        if (this.accuracy3P.ta0testind === 'P') {
            this.portable = true;
            this.accuracy3P.ta0at_test1 = null;
            this.accuracy3P.ta0at_test2 = null;
            this.accuracy3P.ta0at_test3 = null;
            this.accuracy3P.ta0at_avg = null;
        }
        else {
            this.portable = false;
            this.accuracy3P.ta0at_timecalc_1 = null;
            this.accuracy3P.ta0at_timecalc_2 = null;
            this.accuracy3P.ta0at_timecalc_3 = null;
            this.accuracy3P.ta0at_timemeas_1 = null;
            this.accuracy3P.ta0at_timemeas_2 = null;
            this.accuracy3P.ta0at_timemeas_3 = null;
            this.accuracy3P.ta0at_test1 = null;
            this.accuracy3P.ta0at_test2 = null;
            this.accuracy3P.ta0at_test3 = null;
            this.accuracy3P.ta0at_avg = null;
        }
    };
    //created by Ameer (15/10/2018)
    OpcTestInspectPage.prototype.hideShowTypeAccuracy = function () {
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
    OpcTestInspectPage.prototype.hideShowNeutral = function () {
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
    OpcTestInspectPage.prototype.hideShowCorrective = function () {
        if (this.corrective.loc_test_ta0na === 'Y') {
            this.correctiveShow = true;
            this.corrective.loc_test_ta0na = 'Y';
            this.corrective.ta0na = true;
        }
        else {
            this.correctiveShow = false;
            this.corrective = {};
            this.corrective.loc_test_ta0na = 'N';
            this.corrective.ta0na = false;
        }
    };
    //created by Ameer (15/10/2018)
    //edited on (20/10/2018)
    OpcTestInspectPage.prototype.hideShowTampering = function () {
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
    OpcTestInspectPage.prototype.hideShowCurrentCompare = function () {
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
    //Created by Ameer (16/10/2018)
    OpcTestInspectPage.prototype.hideShowPolarity = function () {
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
    OpcTestInspectPage.prototype.hideShowMagnet = function () {
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
    OpcTestInspectPage.prototype.actualReading = function () {
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
        this.currentCompare.ta0cu_difference = Diff.toFixed(3);
    };
    //created by Ameer (15/10/2018)
    OpcTestInspectPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    //created by Ameer (15/10/2018)
    //edited on (22/10/2018)
    OpcTestInspectPage.prototype.errorManual = function () {
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var regExp = new RegExp(NUMBER_REGEXP);
        var newValSlice;
        if (this.deviceVoltage === '01') {
            if (parseFloat(this.accuracy.ta0at_timemeas_1) > parseFloat(this.accuracy.ta0at_timecalc_1)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy.ta0at_timemeas_1 = null;
            }
            else if (parseFloat(this.accuracy.ta0at_timemeas_2) > parseFloat(this.accuracy.ta0at_timecalc_2)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy.ta0at_timemeas_2 = null;
            }
            else if (parseFloat(this.accuracy.ta0at_timemeas_3) > parseFloat(this.accuracy.ta0at_timecalc_3)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy.ta0at_timemeas_3 = null;
            }
            else {
                if ((typeof (this.accuracy.ta0at_timecalc_1 !== 'undefined') && this.accuracy.ta0at_timecalc_1 !== "" && this.accuracy.ta0at_timecalc_1 !== null)
                    && (typeof (this.accuracy.ta0at_timemeas_1 !== 'undefined') && this.accuracy.ta0at_timemeas_1 !== "" && this.accuracy.ta0at_timemeas_1 !== null)) {
                    var error1 = ((this.accuracy.ta0at_timecalc_1 - this.accuracy.ta0at_timemeas_1) / this.accuracy.ta0at_timemeas_1 * 100);
                    this.accuracy.ta0at_test1 = error1;
                    if (isNaN(this.accuracy.ta0at_test1)) {
                        this.accuracy.ta0at_test1 = 0;
                    }
                }
                if ((typeof (this.accuracy.ta0at_timecalc_2 !== 'undefined') && this.accuracy.ta0at_timecalc_2 !== "" && this.accuracy.ta0at_timecalc_2 !== null)
                    && (typeof (this.accuracy.ta0at_timemeas_2 !== 'undefined') && this.accuracy.ta0at_timemeas_2 !== "" && this.accuracy.ta0at_timemeas_2 !== null)) {
                    var error2 = ((this.accuracy.ta0at_timecalc_2 - this.accuracy.ta0at_timemeas_2) / this.accuracy.ta0at_timemeas_2 * 100);
                    this.accuracy.ta0at_test2 = error2;
                    if (isNaN(this.accuracy.ta0at_test2)) {
                        this.accuracy.ta0at_test2 = 0;
                    }
                }
                if ((typeof (this.accuracy.ta0at_timecalc_3 !== 'undefined') && this.accuracy.ta0at_timecalc_3 !== "" && this.accuracy.ta0at_timecalc_3 !== null)
                    && (typeof (this.accuracy.ta0at_timemeas_3 !== 'undefined') && this.accuracy.ta0at_timemeas_3 !== "" && this.accuracy.ta0at_timemeas_3 !== null)) {
                    var error3 = ((this.accuracy.ta0at_timecalc_3 - this.accuracy.ta0at_timemeas_3) / this.accuracy.ta0at_timemeas_3 * 100);
                    this.accuracy.ta0at_test3 = error3;
                    if (isNaN(this.accuracy.ta0at_test3)) {
                        this.accuracy.ta0at_test3 = 0;
                    }
                }
            }
            var averageError = (this.accuracy.ta0at_test1 + this.accuracy.ta0at_test2 + this.accuracy.ta0at_test3) / 3;
            this.accuracy.ta0at_avg = averageError;
            if (isNaN(this.accuracy.ta0at_avg)) {
                this.accuracy.ta0at_avg = 0;
            }
        }
        else if (this.deviceVoltage === '02') {
            if (parseFloat(this.accuracy3P.ta0at_timemeas_1) > parseFloat(this.accuracy3P.ta0at_timecalc_1)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy3P.ta0at_timemeas_1 = null;
            }
            else if (parseFloat(this.accuracy3P.ta0at_timemeas_2) > parseFloat(this.accuracy3P.ta0at_timecalc_2)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy3P.ta0at_timemeas_2 = null;
            }
            else if (parseFloat(this.accuracy3P.ta0at_timemeas_3) > parseFloat(this.accuracy3P.ta0at_timecalc_3)) {
                this.gf.warningAlert("Error", "Real Time cannot large than time calculated", "Close");
                this.accuracy3P.ta0at_timemeas_3 = null;
            }
            else {
                if ((typeof (this.accuracy3P.ta0at_timecalc_1 !== 'undefined') && this.accuracy3P.ta0at_timecalc_1 !== "" && this.accuracy3P.ta0at_timecalc_1 !== null)
                    && (typeof (this.accuracy3P.ta0at_timemeas_1 !== 'undefined') && this.accuracy3P.ta0at_timemeas_1 !== "" && this.accuracy3P.ta0at_timemeas_1 !== null)) {
                    var error13P = ((this.accuracy3P.ta0at_timecalc_1 - this.accuracy3P.ta0at_timemeas_1) / this.accuracy3P.ta0at_timemeas_1 * 100);
                    this.accuracy3P.ta0at_test1 = error13P;
                    if (isNaN(this.accuracy3P.ta0at_test1)) {
                        this.accuracy3P.ta0at_test1 = 0;
                    }
                }
                if ((typeof (this.accuracy3P.ta0at_timecalc_2 !== 'undefined') && this.accuracy3P.ta0at_timecalc_2 !== "" && this.accuracy3P.ta0at_timecalc_2 !== null)
                    && (typeof (this.accuracy3P.ta0at_timemeas_2 !== 'undefined') && this.accuracy3P.ta0at_timemeas_2 !== "" && this.accuracy3P.ta0at_timemeas_2 !== null)) {
                    var error23P = ((this.accuracy3P.ta0at_timecalc_2 - this.accuracy3P.ta0at_timemeas_2) / this.accuracy3P.ta0at_timemeas_2 * 100);
                    this.accuracy3P.ta0at_test2 = error23P;
                    if (isNaN(this.accuracy3P.ta0at_test2)) {
                        this.accuracy3P.ta0at_test2 = 0;
                    }
                }
                if ((typeof (this.accuracy3P.ta0at_timecalc_3 !== 'undefined') && this.accuracy3P.ta0at_timecalc_3 !== "" && this.accuracy3P.ta0at_timecalc_3 !== null)
                    && (typeof (this.accuracy3P.ta0at_timemeas_3 !== 'undefined') && this.accuracy3P.ta0at_timemeas_3 !== "" && this.accuracy3P.ta0at_timemeas_3 !== null)) {
                    var error33P = ((this.accuracy3P.ta0at_timecalc_3 - this.accuracy3P.ta0at_timemeas_3) / this.accuracy3P.ta0at_timemeas_3 * 100);
                    this.accuracy3P.ta0at_test3 = error33P;
                    if (isNaN(this.accuracy3P.ta0at_test3)) {
                        this.accuracy3P.ta0at_test3 = 0;
                    }
                }
            }
            var averageError3P = (this.accuracy3P.ta0at_test1 + this.accuracy3P.ta0at_test2 + this.accuracy3P.ta0at_test3) / 3;
            this.accuracy3P.ta0at_avg = averageError3P;
            if (isNaN(this.accuracy3P.ta0at_avg)) {
                this.accuracy3P.ta0at_avg = 0;
            }
        }
    };
    // created by Ameer (16/10/2018)
    OpcTestInspectPage.prototype.errorAvg = function () {
        this.accuracy.ta0at_avg = (Number(this.accuracy.ta0at_test1) + Number(this.accuracy.ta0at_test2) + Number(this.accuracy.ta0at_test3)) / 3;
        if (isNaN(this.accuracy.ta0at_avg)) {
            this.accuracy.ta0at_avg = 0;
        }
        this.accuracy3P.ta0at_avg = (Number(this.accuracy3P.ta0at_test1) + Number(this.accuracy3P.ta0at_test2) + Number(this.accuracy3P.ta0at_test3)) / 3;
        if (isNaN(this.accuracy3P.ta0at_avg)) {
            this.accuracy3P.ta0at_avg = 0;
        }
    };
    //created by Ameer (18/10/2018)
    OpcTestInspectPage.prototype.searchLookUp = function (inputType) {
        var _this = this;
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
    OpcTestInspectPage.prototype.assignValue = function (inputType) {
        var _this = this;
        this.gf.startLoading();
        setTimeout(function () {
            _this.gf.stopLoading();
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
    OpcTestInspectPage.prototype.checkIntergerVal = function (event, key) {
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
    OpcTestInspectPage.prototype.checkDecimalLength8 = function (eventVal, keyString) {
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
    // Created by Ameer (18/10/2018)- Control output calculations
    OpcTestInspectPage.prototype.outputLength = function (eventVal, key) {
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
    OpcTestInspectPage.prototype.outputAplhaNumeric = function (event, key) {
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
                if (newValSlice.length > 20) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                }
                else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case '1name':
                if (newValSlice.length > 20) {
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
    OpcTestInspectPage.prototype.outputSpeAplhaNumeric = function (event, key) {
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
                if (newValSlice.length > 20) {
                    cutValue = newValSlice.substr(0, newValSlice.length - 1);
                    this.witness.ta0witnessname = cutValue;
                }
                else {
                    this.witness.ta0witnessname = newValSlice;
                }
                break;
            case '1name':
                if (newValSlice.length > 20) {
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
    OpcTestInspectPage.prototype.checkNegative = function (objectVal, keyString) {
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
    OpcTestInspectPage.prototype.saveDetails = function () {
        var _this = this;
        if (this.maIndex != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0sealdetail = [];
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0stickerdetail = [];
            var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
        }
        var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.json.wonum;
        this.validationMandtory();
        if (this.allowSave === true) {
            if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
                //Accuracy
                if (this.accuracy.loc_test_ta0na === 'Y') {
                    this.accuracy.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P;
                    this.accuracy.siteid = siteid;
                    this.accuracy.wonum = wonum;
                    this.accuracy.assetnum = assetnum;
                    this.accuracy.ta0na = true;
                }
                else {
                    this.accuracy.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P;
                    this.accuracy.siteid = siteid;
                    this.accuracy.wonum = wonum;
                    this.accuracy.assetnum = assetnum;
                    this.accuracy.ta0na = false;
                }
                // Push Data into JSON for Accuracy
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracy);
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
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.neutral);
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
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.currentCompare);
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
                }
                //Push Magnet Test date into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.magnet);
                if (this.accuracy3P.loc_test_ta0na === 'Y') {
                    this.accuracy3P.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P;
                    this.accuracy3P.siteid = siteid;
                    this.accuracy3P.wonum = wonum;
                    this.accuracy3P.assetnum = assetnum;
                    this.accuracy3P.ta0na = true;
                }
                else {
                    this.accuracy3P.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P;
                    this.accuracy3P.siteid = siteid;
                    this.accuracy3P.wonum = wonum;
                    this.accuracy3P.assetnum = assetnum;
                    this.accuracy3P.ta0na = false;
                }
                //Push accuracy 3P data into JSON
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracy3P);
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
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.physical);
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
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.tampering);
            if (this.corrective.loc_test_ta0na === 'Y') {
                this.corrective.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATCA;
                this.corrective.siteid = siteid;
                this.corrective.wonum = wonum;
                this.corrective.assetnum = assetnum;
                this.corrective.ta0na = true;
                this.witness.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                this.witness.siteid = siteid;
                this.witness.wonum = wonum;
                this.witness.assetnum = assetnum;
                this.witness.ta0na = true;
            }
            else {
                this.corrective.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATCA;
                this.corrective.siteid = siteid;
                this.corrective.wonum = wonum;
                this.corrective.assetnum = assetnum;
                this.corrective.ta0na = false;
                this.witness.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                this.witness.siteid = siteid;
                this.witness.wonum = wonum;
                this.witness.assetnum = assetnum;
                this.witness.ta0na = false;
            }
            //Push data Corrective into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.corrective);
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.witness);
            if (this.polarity.loc_test_ta0na === 'Y') {
                this.polarity.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_POLT;
                this.polarity.siteid = siteid;
                this.polarity.wonum = wonum;
                this.polarity.assetnum = assetnum;
                this.polarity.ta0na = true;
            }
            else {
                this.polarity.ta0testtype = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_POLT;
                this.polarity.siteid = siteid;
                this.polarity.wonum = wonum;
                this.polarity.assetnum = assetnum;
                this.polarity.ta0na = false;
            }
            //Push Polarity Test date into JSON
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.polarity);
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
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
            this.gf.startLoading();
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
            ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            /**
             * Reason   : Saving to local storage (json data).
             * Created  : 22-01-2019
             */
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                this.gf.stopLoading();
                // Back to service-execution page.
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("ServiceExecutionPage", this.itemOri);
            }
            else if ((__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                /**
                 * Description: Change old(swift) to new(objective-c) plugin.
                 * Edited: Alif (16.10.2019)
                 * old --> mobilesignalswift.getSignalStrength
                 * new --> cordova.plugins.MobileSignal.getSignalStrength
                 */
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        //item, wonumVal, pageAction, feederCode, workOrderType) 
                        var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                        var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                        var itemArray = [];
                        itemArray[0] = (itemVal);
                        _this.dataService
                            .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, _this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(' result + ' + JSON.stringify(results));
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0silStickers_haveChange = false;
                            _this.dataService
                                .saveRecordWithType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                                .then(function (results) {
                                console.log(' result + ' + JSON.stringify(results));
                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                                _this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                                _this.gf.stopLoading();
                                // Back to service-execution page.
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
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
                        _this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                        _this.gf.stopLoading();
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    }
                });
            }
            else {
                var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
                var itemArray = [];
                itemArray.push(itemVal);
                this.dataService
                    .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
                    .then(function (results) {
                    console.log(' result + ' + JSON.stringify(results));
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0silStickers_haveChange = false;
                    _this.dataService
                        .saveRecordWithType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                        _this.gf.warningAlert("Success", "OPC Inspection locally updated.", "Dismiss");
                        _this.gf.stopLoading();
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                        _this.gf.stopLoading();
                    });
                }).catch(function (error) {
                    console.log('service failure : ' + error);
                });
            }
        }
        else {
            this.gf.warningAlert("Error", "Please insert value in all field available.", "Dismiss");
        }
    };
    OpcTestInspectPage.prototype.validationMandtory = function () {
        var flagCheck = false;
        if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_1PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
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
            if (this.tampering.loc_test_ta0na === 'N') {
                if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.corrective.loc_test_ta0na === 'N') {
                if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
        }
        else if (this.deviceVoltage === this.dCons.VOL_LEVEL_OPC_3PH) {
            if (this.physical.loc_test_ta0na === 'N') {
                if (typeof (this.physical.ta0ts_emdisplay) == 'undefined' || this.physical.ta0ts_emdisplay === '' || this.physical.ta0ts_emdisplay === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.physical.ta0ts_meter) == 'undefined' || this.physical.ta0ts_meter === '' || this.physical.ta0ts_meter === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.meterCoverArray.ta0sealcondition) == 'undefined' || this.meterCoverArray.ta0sealcondition === '' || this.meterCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.terminalCoverArray.ta0sealcondition) == 'undefined' || this.terminalCoverArray.ta0sealcondition === '' || this.terminalCoverArray.ta0sealcondition === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.sterminalCoverArray.ta0stickercondition) == 'undefined' || this.sterminalCoverArray.ta0stickercondition === '' || this.sterminalCoverArray.ta0stickercondition === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
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
            if (this.tampering.loc_test_ta0na === 'N') {
                if (typeof (this.tampering.ta0anomalymain) == 'undefined' || this.tampering.ta0anomalymain === '' || this.tampering.ta0anomalymain === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalycategory) == 'undefined' || this.tampering.ta0anomalycategory === '' || this.tampering.ta0anomalycategory === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.tampering.ta0anomalytype) == 'undefined' || this.tampering.ta0anomalytype === '' || this.tampering.ta0anomalytype === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                } /* else if (typeof (this.tampering.ta0ts_meter) == 'undefined' || this.tampering.ta0ts_meter === '' || this.tampering.ta0ts_meter === empty) {
                    flagCheck = true;
                } */
            }
            else {
                if (typeof (this.tampering.ta0naremarks) == 'undefined' || this.tampering.ta0naremarks === '' || this.tampering.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            if (this.corrective.loc_test_ta0na === 'N') {
                if (typeof (this.corrective.ta0at_corrective_action) == 'undefined' || this.corrective.ta0at_corrective_action === '' || this.corrective.ta0at_corrective_action === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test1) == 'undefined' || this.corrective.ta0at_test1 === '' || this.corrective.ta0at_test1 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test2) == 'undefined' || this.corrective.ta0at_test2 === '' || this.corrective.ta0at_test2 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.corrective.ta0at_test3) == 'undefined' || this.corrective.ta0at_test3 === '' || this.corrective.ta0at_test3 === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessname) == 'undefined' || this.witness.ta0witnessname === '' || this.witness.ta0witnessname === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessicpassport) == 'undefined' || this.witness.ta0witnessicpassport === '' || this.witness.ta0witnessicpassport === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
                else if (typeof (this.witness.ta0witnessphone) == 'undefined' || this.witness.ta0witnessphone === '' || this.witness.ta0witnessphone === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
            else {
                if (typeof (this.corrective.ta0naremarks) == 'undefined' || this.corrective.ta0naremarks === '' || this.corrective.ta0naremarks === __WEBPACK_IMPORTED_MODULE_15_rxjs_Observer__["empty"]) {
                    flagCheck = true;
                }
            }
        }
        if (flagCheck === true) {
            this.allowSave = false;
        }
        else if (flagCheck === false) {
            this.allowSave = true;
        }
    };
    //created by Ameer (22/10/2018)
    OpcTestInspectPage.prototype.barcodeScan = function (phase) {
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
    OpcTestInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opc-test-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_opc/deviceTestForms/opc-test-inspect/opc_test_inspect.html"*/'<ion-header>\n\n\n\n    <ion-grid class="headerStyle">\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-12 col-md-3 style="text-align: left;padding-top: 0px;">\n\n                <button ion-button clear class="backbutton" (click)="goBack()">\n\n                    <ion-icon name="arrow-back" class="menuBackArrow backbutton"> back </ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-5>\n\n                <div class="pageTitle" style="padding-top: 8px;font-weight:bold;">OPC TEST INSPECTION\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-2 col-sm-4 style="text-align: right;padding-top: 0px;">\n\n                <ion-fab top right style="top: 0%">\n\n                    <button ion-fab mini class="flash">\n\n                        <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{\n\n                            gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n\n                    </button>\n\n                </ion-fab>\n\n            </ion-col>\n\n            <!-- <ion-col col-12 col-sm-12 col-md-4 style="text-align: right;padding-top: 0px;">\n\n          <button ion-button icon-only clear (click)="presentPopover($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n        </ion-col> -->\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <!--Starting for Single phase OPC  -->\n\n    <div *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_1PH">\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>PHYSICAL EXAMINATION</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowPhysical()"\n\n                            [(ngModel)]="physical.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="physical.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="physical.ta0naremarks"\n\n                                [ngClass]="(physical.ta0naremarks == \'\' || physical.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!physical.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Suspect</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="physical.ta0ts_meter"\n\n                                [ngClass]="(physical.ta0ts_meter == \'\' || physical.ta0ts_meter == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%">Terminal condition\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-select interface="popover" [(ngModel)]="meterCoverArray.ta0sealcondition"\n\n                                [ngClass]="(meterCoverArray.ta0sealcondition == \'\' || meterCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="K">KOYAK</ion-option>\n\n                                <ion-option value="O">OK</ion-option>\n\n                                <ion-option value="P">PUTUS</ion-option>\n\n                                <ion-option value="T">TIDAK OK</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%">Meter condition\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-select interface="popover" [(ngModel)]="terminalCoverArray.ta0sealcondition"\n\n                                [ngClass]="(terminalCoverArray.ta0sealcondition == \'\' || terminalCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="K">KOYAK</ion-option>\n\n                                <ion-option value="O">OK</ion-option>\n\n                                <ion-option value="P">PUTUS</ion-option>\n\n                                <ion-option value="T">TIDAK OK</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Sticker Safety condition\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" placeholder="Enter Safety"\n\n                                [(ngModel)]="sterminalCoverArray.ta0stickercondition"\n\n                                [ngClass]="(sterminalCoverArray.ta0stickercondition == \'\' || sterminalCoverArray.ta0stickercondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>ACCURACY TEST</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowMeter()"\n\n                            [(ngModel)]="accuracy.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="accuracy.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter"\n\n                                [(ngModel)]="accuracy.ta0naremarks"\n\n                                [ngClass]="(accuracy.ta0naremarks == \'\' || accuracy.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!accuracy.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%"> Accuracy Type\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-select interface="popover" (ionChange)="hideShowTypeAccuracy()"\n\n                                [(ngModel)]="accuracy.ta0testind"\n\n                                [ngClass]="(accuracy.ta0testind == \'\' || accuracy.ta0testind == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="P">Portable</ion-option>\n\n                                <ion-option value="M">Manual</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <div *ngIf="portable">\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Portable Test Set </ion-label>>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="18" placeholder="Serial No."\n\n                                    [(ngModel)]="accuracy.ta0at_pteserialnum" (ionChange)="errorAvg()"\n\n                                    (keyup)="outputAplhaNumeric($event,\'1PAccuracyPTE\')"\n\n                                    [ngClass]="(accuracy.ta0at_pteserialnum == \'\' || accuracy.ta0at_pteserialnum == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-1 col-md-1 col-sm-1\n\n                            style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n\n                            <button ion-button (click)="barcodeScan(\'1phase\')">\n\n                                <ion-icon name="barcode" item-right></ion-icon>\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>First</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Second</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Third</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Voltage</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_voltage_r"\n\n                                    (keyup)="checkDecimalLength8($event,\'1PVoltageR\')"\n\n                                    [ngClass]="(accuracy.ta0at_voltage_r == \'\' || accuracy.ta0at_voltage_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_voltage_y"\n\n                                    (keyup)="checkDecimalLength8($event,\'1PVoltageY\')"\n\n                                    [ngClass]="(accuracy.ta0at_voltage_y == \'\' || accuracy.ta0at_voltage_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_voltage_b"\n\n                                    (keyup)="checkDecimalLength8($event,\'1PVoltageB\')"\n\n                                    [ngClass]="(accuracy.ta0at_voltage_b == \'\' || accuracy.ta0at_voltage_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Current</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_current_r"\n\n                                    (keyup)="checkDecimalLength8($event,\'1PCurrentR\')"\n\n                                    [ngClass]="(accuracy.ta0at_current_r == \'\' || accuracy.ta0at_current_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_current_y"\n\n                                    (keyup)="checkDecimalLength8($event,\'1PCurrentY\')"\n\n                                    [ngClass]="(accuracy.ta0at_current_y == \'\' || accuracy.ta0at_current_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_current_b"\n\n                                    (keyup)="checkDecimalLength8($event,\'1PCurrentB\')"\n\n                                    [ngClass]="(accuracy.ta0at_current_b == \'\' || accuracy.ta0at_current_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Power</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_power_r" (keyup)="checkDecimalLength8($event,\'1PPWR_R\')"\n\n                                    [ngClass]="(accuracy.ta0at_power_r == \'\' || accuracy.ta0at_power_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Yellow "\n\n                                    [(ngModel)]="accuracy.ta0at_power_y" (keyup)="checkDecimalLength8($event,\'1PPWR_Y\')"\n\n                                    [ngClass]="(accuracy.ta0at_power_y == \'\' || accuracy.ta0at_power_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Blue "\n\n                                    [(ngModel)]="accuracy.ta0at_power_b" (keyup)="checkDecimalLength8($event,\'1PPWR_B\')"\n\n                                    [ngClass]="(accuracy.ta0at_power_b == \'\' || accuracy.ta0at_power_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Power Rate</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_powerfactor_r"\n\n                                    (keyup)="checkNegative($event,\'1PPWRR_R\')"\n\n                                    [ngClass]="(accuracy.ta0at_powerfactor_r == \'\' || accuracy.ta0at_powerfactor_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_powerfactor_y"\n\n                                    (keyup)="checkNegative($event,\'1PPWRR_Y\')"\n\n                                    [ngClass]="(accuracy.ta0at_powerfactor_y == \'\' || accuracy.ta0at_powerfactor_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_powerfactor_b"\n\n                                    (keyup)="checkNegative($event,\'1PPWRR_B\')"\n\n                                    [ngClass]="(accuracy.ta0at_powerfactor_b == \'\' || accuracy.ta0at_powerfactor_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Constant</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="12" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_constant_1"\n\n                                    (keyup)="checkIntergerVal($event,\'cont1single\')"\n\n                                    [ngClass]="(accuracy.ta0at_constant_1 == \'\' || accuracy.ta0at_constant_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="12" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_constant_2"\n\n                                    (keyup)="checkIntergerVal($event,\'cont2single\')"\n\n                                    [ngClass]="(accuracy.ta0at_constant_2 == \'\' || accuracy.ta0at_constant_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="12" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_constant_3"\n\n                                    (keyup)="checkIntergerVal($event,\'cont3single\')"\n\n                                    [ngClass]="(accuracy.ta0at_constant_3 == \'\' || accuracy.ta0at_constant_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_test1" (keyup)="checkNegative($event,\'1PError_1\')"\n\n                                    step="0.000" type="number" (ionChange)="errorAvg()"\n\n                                    [ngClass]="(accuracy.ta0at_test1 == \'\' || accuracy.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_test2" (keyup)="checkNegative($event,\'1PError_2\')"\n\n                                    (ionChange)="errorAvg()"\n\n                                    [ngClass]="(accuracy.ta0at_test2 == \'\' || accuracy.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_test3" (keyup)="checkNegative($event,\'1PError_3\')"\n\n                                    (ionChange)="errorAvg()"\n\n                                    [ngClass]="(accuracy.ta0at_test3 == \'\' || accuracy.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error Average</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="%Error average " [readonly]="true"\n\n                                    [(ngModel)]="accuracy.ta0at_avg" (ionChange)="outputLength($event,\'avg\')">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n                <div *ngIf="!portable">\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>First</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Second</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Third</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Time Calculated</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_timecalc_1" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'TC1\')"\n\n                                    [ngClass]="(accuracy.ta0at_timecalc_1 == \'\' || accuracy.ta0at_timecalc_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_timecalc_2" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'TC2\')"\n\n                                    [ngClass]="(accuracy.ta0at_timecalc_2 == \'\' || accuracy.ta0at_timecalc_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_timecalc_3" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'TC3\')"\n\n                                    [ngClass]="(accuracy.ta0at_timecalc_3 == \'\' || accuracy.ta0at_timecalc_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Real Time</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_timemeas_1" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'RT1\')"\n\n                                    [ngClass]="(accuracy.ta0at_timemeas_1 == \'\' || accuracy.ta0at_timemeas_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_timemeas_2" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'RT2\')"\n\n                                    [ngClass]="(accuracy.ta0at_timemeas_2 == \'\' || accuracy.ta0at_timemeas_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_timemeas_3" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'RT3\')"\n\n                                    [ngClass]="(accuracy.ta0at_timemeas_3 == \'\' || accuracy.ta0at_timemeas_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First "\n\n                                    [(ngModel)]="accuracy.ta0at_test1" step="0.01" [readonly]="true"\n\n                                    (ionChange)="outputLength($event,\'MError1\')"\n\n                                    [ngClass]="(accuracy.ta0at_test1 == \'\' || accuracy.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second "\n\n                                    [(ngModel)]="accuracy.ta0at_test2" [readonly]="true"\n\n                                    (ionChange)="outputLength($event,\'MError2\')"\n\n                                    [ngClass]="(accuracy.ta0at_test2 == \'\' || accuracy.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third "\n\n                                    [(ngModel)]="accuracy.ta0at_test3" [readonly]="true"\n\n                                    (ionChange)="outputLength($event,\'MError3\')"\n\n                                    [ngClass]="(accuracy.ta0at_test3 == \'\' || accuracy.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error Average</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="%Error average " [readonly]="true"\n\n                                    [(ngModel)]="accuracy.ta0at_avg" (ionChange)="outputLength($event,\'MErrorAvg\')"\n\n                                    [ngClass]="(accuracy.ta0at_avg == \'\' || accuracy.ta0at_avg == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>NEUTRAL TEST</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowNeutral()"\n\n                            [(ngModel)]="neutral.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="neutral.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter "\n\n                                [(ngModel)]="neutral.ta0naremarks"\n\n                                [ngClass]="(neutral.ta0naremarks == \'\' || neutral.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div *ngIf="!neutral.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Comparison Of Current Reading</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Phase (AMP)</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Neutral (AMP)</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Phase (AMP)"\n\n                                [(ngModel)]="neutral.ta0nt_phase" (keyup)="checkDecimalLength8($event,\'phase\')"\n\n                                [ngClass]="(neutral.ta0nt_phase == \'\' || neutral.ta0nt_phase == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Neutral (AMP)"\n\n                                [(ngModel)]="neutral.ta0nt_neutral" (keyup)="checkDecimalLength8($event,\'neutral\')"\n\n                                [ngClass]="(neutral.ta0nt_neutral == \'\' || neutral.ta0nt_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Terminal Meter Polarity</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Incoming</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Outgoing</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col col-6 col-sm-6 col-md-6>\n\n                        <ion-list radio-group [(ngModel)]="neutral.ta0nt_in_life">\n\n                            <ion-row>\n\n                                <ion-col col-2 col-sm-2 col-md-2>\n\n                                    <ion-item no-lines>\n\n                                        <ion-label color="primary">Life</ion-label>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_in_life == \'\' || neutral.ta0nt_in_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>On</ion-label>\n\n                                        <ion-radio value="Y"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_in_life == \'\' || neutral.ta0nt_in_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>Off</ion-label>\n\n                                        <ion-radio value="N"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-list>\n\n                    </ion-col>\n\n                    <ion-col col-6 col-sm-6 col-md-6>\n\n                        <ion-list radio-group [(ngModel)]="neutral.ta0nt_out_life">\n\n                            <ion-row>\n\n                                <ion-col col-2 col-sm-2 col-md-2>\n\n                                    <ion-item no-lines>\n\n                                        <ion-label color="primary">Life</ion-label>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_out_life == \'\' || neutral.ta0nt_out_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>On</ion-label>\n\n                                        <ion-radio value="Y"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_out_life == \'\' || neutral.ta0nt_out_life == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>Off</ion-label>\n\n                                        <ion-radio value="N"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-list>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col col-6 col-sm-6 col-md-6>\n\n                        <ion-list radio-group [(ngModel)]="neutral.ta0nt_in_neutral">\n\n                            <ion-row>\n\n                                <ion-col col-2 col-sm-2 col-md-2>\n\n                                    <ion-item no-lines>\n\n                                        <ion-label color="primary">Neutral</ion-label>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_in_neutral == \'\' || neutral.ta0nt_in_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>On</ion-label>\n\n                                        <ion-radio value="Y"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_in_neutral == \'\' || neutral.ta0nt_in_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>Off</ion-label>\n\n                                        <ion-radio value="N"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-list>\n\n                    </ion-col>\n\n                    <ion-col col-6 col-sm-6 col-md-6>\n\n                        <ion-list radio-group [(ngModel)]="neutral.ta0nt_out_neutral">\n\n                            <ion-row>\n\n                                <ion-col col-2 col-sm-2 col-md-2>\n\n                                    <ion-item no-lines>\n\n                                        <ion-label color="primary">Neutral</ion-label>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_out_neutral == \'\' || neutral.ta0nt_out_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>On</ion-label>\n\n                                        <ion-radio value="Y"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col>\n\n                                    <ion-item\n\n                                        [ngClass]="(neutral.ta0nt_out_neutral == \'\' || neutral.ta0nt_out_neutral == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                        <ion-label>Off</ion-label>\n\n                                        <ion-radio value="N"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-list>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>TAMPERING ANOMLY</strong>\n\n            </ion-item-divider>\n\n\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" [(ngModel)]="tampering.loc_test_ta0na"\n\n                            (ionChange)="hideShowTampering()">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="tampering.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="tampering.ta0naremarks"\n\n                                [ngClass]="(tampering.ta0naremarks == \'\' || tampering.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!tampering.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Main</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="tampering.ta0anomalymain" [readonly]="true"\n\n                                [ngClass]="(tampering.ta0anomalymain == \'\' || tampering.ta0anomalymain == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'main\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Category</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="tampering.ta0anomalycategory" [readonly]="true"\n\n                                [ngClass]="(tampering.ta0anomalycategory == \'\' || tampering.ta0anomalycategory == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'category\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Type</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="tampering.ta0anomalytype" [readonly]="true"\n\n                                [ngClass]="(tampering.ta0anomalytype == \'\' || tampering.ta0anomalytype == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'type\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>CORRECTIVE ACTION</strong>\n\n            </ion-item-divider>\n\n\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowCorrective()"\n\n                            [(ngModel)]="corrective.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="corrective.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="corrective.ta0naremarks"\n\n                                [ngClass]="(corrective.ta0naremarks == \'\' || corrective.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!corrective.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Action</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="corrective.ta0at_corrective_action"\n\n                                [ngClass]="(corrective.ta0at_corrective_action == \'\' || corrective.ta0at_corrective_action == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'corrective\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Accuracy Test After Correction</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Error 1 :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="%Error 1"\n\n                                [(ngModel)]="corrective.ta0at_test1" (keyup)="checkNegative($event,\'correctiveErr1\')"\n\n                                [ngClass]="(corrective.ta0at_test1 == \'\' || corrective.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Error 2 :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="%Error 2"\n\n                                [(ngModel)]="corrective.ta0at_test2" (keyup)="checkNegative($event,\'correctiveErr2\')"\n\n                                [ngClass]="(corrective.ta0at_test2 == \'\' || corrective.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Error 3 :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="%Error 3"\n\n                                [(ngModel)]="corrective.ta0at_test3" (keyup)="checkNegative($event,\'correctiveErr3\')"\n\n                                [ngClass]="(corrective.ta0at_test3 == \'\' || corrective.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-item-divider color="light">\n\n                    <ion-icon name="flask"></ion-icon>&nbsp;\n\n                    <strong>WITNESS</strong>\n\n                </ion-item-divider>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Name of witness :</ion-label>\n\n                            <ion-input type="text" maxlength="62" placeholder="Witness name"\n\n                                [(ngModel)]="witness.ta0witnessname" (keyup)="outputSpeAplhaNumeric($event,\'1name\')"\n\n                                [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">IC No./Passport :</ion-label>\n\n                            <ion-input type="text" maxlength="20" placeholder="Ic/Passport"\n\n                                [(ngModel)]="witness.ta0witnessicpassport"\n\n                                (keyup)="outputAplhaNumeric($event,\'1icpassport\')"\n\n                                [ngClass]="(witness.ta0witnessicpassport == \'\' || witness.ta0witnessicpassport == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Phone No. :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="Phone number"\n\n                                [(ngModel)]="witness.ta0witnessphone"\n\n                                [ngClass]="(witness.ta0witnessphone == \'\' || witness.ta0witnessphone == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-item-divider color="light">\n\n                    <ion-icon name="flask"></ion-icon>&nbsp;\n\n                    <strong>OFFICER</strong>\n\n                </ion-item-divider>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Name of Audit Officer :</ion-label>\n\n                            <ion-input type="text" placeholder="Audit Officer" [(ngModel)]="gv.employeetype"\n\n                                [readonly]="true"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Staff No. :</ion-label>\n\n                            <ion-input type="text" placeholder="Staff no." [(ngModel)]="gv.username" [readonly]="true">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Station :</ion-label>\n\n                            <ion-input type="text" placeholder="Station" [(ngModel)]="item.json.siteid"\n\n                                [readonly]="true"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n    </div>\n\n    <!-- End page for single phase OPC -->\n\n\n\n    <!-- Starting for multi phase OPC -->\n\n    <div *ngIf="deviceVoltage === dCons.VOL_LEVEL_OPC_3PH">\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>PHYSICAL EXAMINATION</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowPhysical()"\n\n                            [(ngModel)]="physical.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="physical.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="physical.ta0naremarks"\n\n                                [ngClass]="(physical.ta0naremarks == \'\' || physical.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!physical.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Indication at Electronic Meter Display</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input maxlength="40" [(ngModel)]="physical.ta0ts_emdisplay"\n\n                                (keyup)="outputAplhaNumeric($event,\'tamperingIndication\')"\n\n                                [ngClass]="(physical.ta0ts_emdisplay == \'\' || physical.ta0ts_emdisplay == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Tampering Suspect</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="physical.ta0ts_meter"\n\n                                (keyup)="outputAplhaNumeric($event,\'tamperingSuspect\')"\n\n                                [ngClass]="(physical.ta0ts_meter == \'\' || physical.ta0ts_meter == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%"> Terminal condition\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-select interface="popover" [(ngModel)]="meterCoverArray.ta0sealcondition"\n\n                                [ngClass]="(meterCoverArray.ta0sealcondition == \'\' || meterCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="K">KOYAK</ion-option>\n\n                                <ion-option value="O">OK</ion-option>\n\n                                <ion-option value="P">PUTUS</ion-option>\n\n                                <ion-option value="T">TIDAK OK</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%"> Meter condition\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-select interface="popover" [(ngModel)]="terminalCoverArray.ta0sealcondition"\n\n                                [ngClass]="(terminalCoverArray.ta0sealcondition == \'\' || terminalCoverArray.ta0sealcondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="K">KOYAK</ion-option>\n\n                                <ion-option value="O">OK</ion-option>\n\n                                <ion-option value="P">PUTUS</ion-option>\n\n                                <ion-option value="T">TIDAK OK</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Sticker Safety condition\n\n                            </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" placeholder="Enter Safety"\n\n                                [(ngModel)]="sterminalCoverArray.ta0stickercondition"\n\n                                (keyup)="outputAplhaNumeric($event,\'safetyCondition\')"\n\n                                [ngClass]="(sterminalCoverArray.ta0stickercondition == \'\' || sterminalCoverArray.ta0stickercondition == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>CURRENT COMPARISON</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowCurrentCompare()"\n\n                            [(ngModel)]="currentCompare.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="currentCompare.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="currentCompare.ta0naremarks"\n\n                                [ngClass]="(currentCompare.ta0naremarks == \'\' || currentCompare.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!currentCompare.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Red</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Yellow</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Blue</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item text-wrap>\n\n                            <ion-label color="primary"> Actual current reading </ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Red"\n\n                                [(ngModel)]="currentCompare.ta0cu_actual_r" (ionChange)="actualReading()"\n\n                                (keyup)="checkDecimalLength8($event,\'actualR\')"\n\n                                [ngClass]="(currentCompare.ta0cu_actual_r == \'\' || currentCompare.ta0cu_actual_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n\n                                [(ngModel)]="currentCompare.ta0cu_actual_y" (ionChange)="actualReading()"\n\n                                (keyup)="checkDecimalLength8($event,\'actualY\')"\n\n                                [ngClass]="(currentCompare.ta0cu_actual_y == \'\' || currentCompare.ta0cu_actual_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n\n                                [(ngModel)]="currentCompare.ta0cu_actual_b" (ionChange)="actualReading()"\n\n                                (keyup)="checkDecimalLength8($event,\'actualB\')"\n\n                                [ngClass]="(currentCompare.ta0cu_actual_b == \'\' || currentCompare.ta0cu_actual_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item text-wrap>\n\n                            <ion-label color="primary">Display Current Reading</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Red"\n\n                                [(ngModel)]="currentCompare.ta0cu_disp_r" (ionChange)="actualReading()"\n\n                                (keyup)="checkDecimalLength8($event,\'dispR\')"\n\n                                [ngClass]="(currentCompare.ta0cu_disp_r == \'\' || currentCompare.ta0cu_disp_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n\n                                [(ngModel)]="currentCompare.ta0cu_disp_y" (ionChange)="actualReading()"\n\n                                (keyup)="checkDecimalLength8($event,\'dispY\')"\n\n                                [ngClass]="(currentCompare.ta0cu_disp_y == \'\' || currentCompare.ta0cu_disp_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-3 col-sm-3 col-md-3>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n\n                                [(ngModel)]="currentCompare.ta0cu_disp_b" (ionChange)="actualReading()"\n\n                                (keyup)="checkDecimalLength8($event,\'dispB\')"\n\n                                [ngClass]="(currentCompare.ta0cu_disp_b == \'\' || currentCompare.ta0cu_disp_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Total</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Actual current reading Total</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Total"\n\n                                [(ngModel)]="currentCompare.ta0cu_actual_total" [readonly]="true"\n\n                                (ionChange)="outputLength($event,\'ActCurrRead\')"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Display Current Reading Total</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" maxlength="11" placeholder="Enter Total"\n\n                                [(ngModel)]="currentCompare.ta0cu_disp_total" [readonly]="true"\n\n                                (ionChange)="outputLength($event,\'DispCurrRead\')"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Current Difference</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input type="text" placeholder="Current Difference" [readonly]="true"\n\n                                [(ngModel)]="currentCompare.ta0cu_difference"\n\n                                [ngClass]="(currentCompare.ta0cu_difference == \'\' || currentCompare.ta0cu_difference == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label style=" font-style:italic;">* (Display Current-Actual Current/Actual\n\n                            Current)*100</ion-label>\n\n                    </ion-item>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>TERMINAL METER POLARITY</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowPolarity()"\n\n                            [(ngModel)]="polarity.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="polarity.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="polarity.ta0naremarks"\n\n                                [ngClass]="(polarity.ta0naremarks == \'\' || polarity.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div *ngIf="!polarity.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:10%">Red</ion-label>\n\n                            <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_r"\n\n                                [ngClass]="(polarity.ta0po_tm_r == \'\' || polarity.ta0po_tm_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="Y">On</ion-option>\n\n                                <ion-option value="T">Off</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%">Yellow</ion-label>\n\n                            <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_y"\n\n                                [ngClass]="(polarity.ta0po_tm_y == \'\' || polarity.ta0po_tm_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="Y">On</ion-option>\n\n                                <ion-option value="T">Off</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%">Blue</ion-label>\n\n                            <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_b"\n\n                                [ngClass]="(polarity.ta0po_tm_b == \'\' || polarity.ta0po_tm_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="Y">On</ion-option>\n\n                                <ion-option value="T">Off</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%">Neutral</ion-label>\n\n                            <ion-select interface="popover" [(ngModel)]="polarity.ta0po_tm_n"\n\n                                [ngClass]="(polarity.ta0po_tm_n == \'\' || polarity.ta0po_tm_n == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="Y">On</ion-option>\n\n                                <ion-option value="T">Off</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>MAGNET TEST</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowMagnet()"\n\n                            [(ngModel)]="magnet.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <div *ngIf="magnet.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="magnet.ta0naremarks"\n\n                                [ngClass]="(magnet.ta0naremarks == \'\' || magnet.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <div *ngIf="!magnet.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Results</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-select interface="popover" [(ngModel)]="magnet.ta0mt_magnet_result">\n\n                                <ion-option value="Ada">Ada</ion-option>\n\n                                <ion-option value="Tiada">Tiada</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>ACCURACY TEST</strong>\n\n            </ion-item-divider>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowMeter()"\n\n                            [(ngModel)]="accuracy3P.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="accuracy3P.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="accuracy3P.ta0naremarks"\n\n                                [ngClass]="(accuracy3P.ta0naremarks == \'\' || accuracy3P.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!accuracy3P.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" style="min-width:20%"> Accuracy Type\n\n                            </ion-label>\n\n                            <ion-select interface="popover" (ionChange)="hideAccuracy3Phase()"\n\n                                [(ngModel)]="accuracy3P.ta0testind"\n\n                                [ngClass]="(accuracy3P.ta0testind == \'\' || accuracy3P.ta0testind == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                <ion-option value="P">Portable</ion-option>\n\n                                <ion-option value="M">Manual</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <div *ngIf="portable">\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Portable Test Set </ion-label>>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="18" placeholder="Serial No."\n\n                                    [(ngModel)]="accuracy3P.ta0at_pteserialnum"\n\n                                    (keyup)="outputAplhaNumeric($event,\'ptSerialNo\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_pteserialnum == \'\' || accuracy3P.ta0at_pteserialnum == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-1 col-md-1 col-sm-1\n\n                            style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n\n                            <button ion-button (click)="barcodeScan(\'3phase\')">\n\n                                <ion-icon name="barcode" item-right></ion-icon>\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Red</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Yellow</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Blue</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Voltage</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" placeholder="Enter Red" [(ngModel)]="accuracy3P.ta0at_voltage_r"\n\n                                    (keyup)="checkDecimalLength8($event,\'voltageR\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_voltage_r == \'\' || accuracy3P.ta0at_voltage_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" placeholder="Enter Yellow"\n\n                                    [(ngModel)]="accuracy3P.ta0at_voltage_y"\n\n                                    (keyup)="checkDecimalLength8($event,\'voltageY\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_voltage_y == \'\' || accuracy3P.ta0at_voltage_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" placeholder="Enter Blue" [(ngModel)]="accuracy3P.ta0at_voltage_b"\n\n                                    (keyup)="checkDecimalLength8($event,\'voltageB\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_voltage_b == \'\' || accuracy3P.ta0at_voltage_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Current</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Red"\n\n                                    [(ngModel)]="accuracy3P.ta0at_current_r"\n\n                                    (keyup)="checkDecimalLength8($event,\'currentR\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_current_r == \'\' || accuracy3P.ta0at_current_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n\n                                    [(ngModel)]="accuracy3P.ta0at_current_y"\n\n                                    (keyup)="checkDecimalLength8($event,\'currentY\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_current_y == \'\' || accuracy3P.ta0at_current_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n\n                                    [(ngModel)]="accuracy3P.ta0at_current_b"\n\n                                    (keyup)="checkDecimalLength8($event,\'currentB\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_current_b == \'\' || accuracy3P.ta0at_current_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Power</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Red"\n\n                                    [(ngModel)]="accuracy3P.ta0at_power_r" (keyup)="checkDecimalLength8($event,\'PWR\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_power_r == \'\' || accuracy3P.ta0at_power_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n\n                                    [(ngModel)]="accuracy3P.ta0at_power_y" (keyup)="checkDecimalLength8($event,\'PWY\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_power_y == \'\' || accuracy3P.ta0at_power_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n\n                                    [(ngModel)]="accuracy3P.ta0at_power_b" (keyup)="checkDecimalLength8($event,\'PWB\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_power_b == \'\' || accuracy3P.ta0at_power_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Power Rate</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Red"\n\n                                    [(ngModel)]="accuracy3P.ta0at_powerfactor_r" (keyup)="checkNegative($event,\'PRR\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_powerfactor_r == \'\' || accuracy3P.ta0at_powerfactor_r == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n\n                                    [(ngModel)]="accuracy3P.ta0at_powerfactor_y" (keyup)="checkNegative($event,\'PRY\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_powerfactor_y == \'\' || accuracy3P.ta0at_powerfactor_y == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n\n                                    [(ngModel)]="accuracy3P.ta0at_powerfactor_b" (keyup)="checkNegative($event,\'PRB\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_powerfactor_b == \'\' || accuracy3P.ta0at_powerfactor_b == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Red"\n\n                                    [(ngModel)]="accuracy3P.ta0at_test1" (ionChange)="errorAvg()"\n\n                                    (keyup)="checkNegative($event,\'error1\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_test1 == \'\' || accuracy3P.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Yellow"\n\n                                    [(ngModel)]="accuracy3P.ta0at_test2" (ionChange)="errorAvg()"\n\n                                    (keyup)="checkNegative($event,\'error2\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_test2 == \'\' || accuracy3P.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Blue"\n\n                                    [(ngModel)]="accuracy3P.ta0at_test3" (ionChange)="errorAvg()"\n\n                                    (keyup)="checkNegative($event,\'error3\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_test3 == \'\' || accuracy3P.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error Average</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="%Error average" [readonly]="true"\n\n                                    [(ngModel)]="accuracy3P.ta0at_avg" (ionChange)="outputLength($event,\'3PAvg\')">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n                <div *ngIf="!portable">\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>First</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Second</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary" text-center>Third</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Time Calculated</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First"\n\n                                    [(ngModel)]="accuracy3P.ta0at_timecalc_1" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'3TC1\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_timecalc_1 == \'\' || accuracy3P.ta0at_timecalc_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second"\n\n                                    [(ngModel)]="accuracy3P.ta0at_timecalc_2" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'3TC2\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_timecalc_2 == \'\' || accuracy3P.ta0at_timecalc_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third"\n\n                                    [(ngModel)]="accuracy3P.ta0at_timecalc_3" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'3TC3\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_timecalc_3 == \'\' || accuracy3P.ta0at_timecalc_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">Real Time</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First"\n\n                                    [(ngModel)]="accuracy3P.ta0at_timemeas_1" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'3RT1\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_timemeas_1 == \'\' || accuracy3P.ta0at_timemeas_1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second"\n\n                                    [(ngModel)]="accuracy3P.ta0at_timemeas_2" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'3RT2\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_timemeas_2 == \'\' || accuracy3P.ta0at_timemeas_2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third"\n\n                                    [(ngModel)]="accuracy3P.ta0at_timemeas_3" (ionChange)="errorManual()"\n\n                                    (keyup)="checkDecimalLength8($event,\'3RT3\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_timemeas_3 == \'\' || accuracy3P.ta0at_timemeas_3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter First"\n\n                                    [(ngModel)]="accuracy3P.ta0at_test1" [readonly]="true"\n\n                                    (ionChange)="outputLength($event,\'3MError1\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_test1 == \'\' || accuracy3P.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Second"\n\n                                    [(ngModel)]="accuracy3P.ta0at_test2" [readonly]="true"\n\n                                    (ionChange)="outputLength($event,\'3MError2\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_test2 == \'\' || accuracy3P.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="Enter Third"\n\n                                    [(ngModel)]="accuracy3P.ta0at_test3" [readonly]="true"\n\n                                    (ionChange)="outputLength($event,\'3MError3\')"\n\n                                    [ngClass]="(accuracy3P.ta0at_test3 == \'\' || accuracy3P.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-label color="primary">%Error Average</ion-label>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-item>\n\n                                <ion-input type="text" maxlength="11" placeholder="%Error average" [readonly]="true"\n\n                                    [(ngModel)]="accuracy3P.ta0at_avg" (ionChange)="outputLength($event,\'3MAvg\')">\n\n                                </ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>TAMPERING ANOMLY</strong>\n\n            </ion-item-divider>\n\n\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" [(ngModel)]="tampering.loc_test_ta0na"\n\n                            (ionChange)="hideShowTampering()">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="tampering.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="tampering.ta0naremarks"\n\n                                [ngClass]="(tampering.ta0naremarks == \'\' || tampering.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!tampering.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Main</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="tampering.ta0anomalymain" [readonly]="true"\n\n                                [ngClass]="(tampering.ta0anomalymain == \'\' || tampering.ta0anomalymain == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'main\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Category</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="tampering.ta0anomalycategory" [readonly]="true"\n\n                                [ngClass]="(tampering.ta0anomalycategory == \'\' || tampering.ta0anomalycategory == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'category\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Type</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="tampering.ta0anomalytype" [readonly]="true"\n\n                                [ngClass]="(tampering.ta0anomalytype == \'\' || tampering.ta0anomalytype == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'type\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-item-divider color="light">\n\n                <ion-icon name="flask"></ion-icon>&nbsp;\n\n                <strong>CORRECTIVE ACTION</strong>\n\n            </ion-item-divider>\n\n\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-label color="primary">Not Applicable</ion-label>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-item>\n\n                        <ion-select interface="popover" (ionChange)="hideShowCorrective()"\n\n                            [(ngModel)]="corrective.loc_test_ta0na">\n\n                            <ion-option value="Y">Yes</ion-option>\n\n                            <ion-option value="N">No</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngIf="corrective.ta0na">\n\n                <ion-row>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-label color="primary">Remarks</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                        <ion-item>\n\n                            <ion-textarea rows="4" type="text" maxlength="40" placeholder="Please Enter Remark"\n\n                                [(ngModel)]="corrective.ta0naremarks"\n\n                                [ngClass]="(corrective.ta0naremarks == \'\' || corrective.ta0naremarks == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-textarea>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n            <div *ngIf="!corrective.ta0na">\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Action</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-input [(ngModel)]="corrective.ta0at_corrective_action" [readonly]="true"\n\n                                [ngClass]="(corrective.ta0at_corrective_action == \'\' || corrective.ta0at_corrective_action == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-1 col-sm-1 col-md-1>\n\n                        <button ion-button (click)="searchLookUp(\'corrective\')">\n\n                            <ion-icon name="search" item-right></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary" text-center>Accuracy Test After Correction</ion-label>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Error 1 :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="%Error 1"\n\n                                [(ngModel)]="corrective.ta0at_test1" (keyup)="checkNegative($event,\'correctiveErr1\')"\n\n                                [ngClass]="(corrective.ta0at_test1 == \'\' || corrective.ta0at_test1 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Error 2 :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="%Error 2"\n\n                                [(ngModel)]="corrective.ta0at_test2" (keyup)="checkNegative($event,\'correctiveErr2\')"\n\n                                [ngClass]="(corrective.ta0at_test2 == \'\' || corrective.ta0at_test2 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">%Error 3 :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="%Error 3"\n\n                                [(ngModel)]="corrective.ta0at_test3" (keyup)="checkNegative($event,\'correctiveErr3\')"\n\n                                [ngClass]="(corrective.ta0at_test3 == \'\' || corrective.ta0at_test3 == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-item-divider color="light">\n\n                    <ion-icon name="flask"></ion-icon>&nbsp;\n\n                    <strong>WITNESS</strong>\n\n                </ion-item-divider>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Name of witness :</ion-label>\n\n                            <ion-input type="text" maxlength="62" placeholder="Witness name"\n\n                                [(ngModel)]="witness.ta0witnessname" (keyup)="outputSpeAplhaNumeric($event,\'name\')"\n\n                                [ngClass]="(witness.ta0witnessname == \'\' || witness.ta0witnessname == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">IC No./Passport :</ion-label>\n\n                            <ion-input type="text" maxlength="20" placeholder="Ic/Passport"\n\n                                [(ngModel)]="witness.ta0witnessicpassport"\n\n                                (keyup)="outputAplhaNumeric($event,\'icpassport\')"\n\n                                [ngClass]="(witness.ta0witnessicpassport == \'\' || witness.ta0witnessicpassport == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Phone No. :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="Phone number"\n\n                                [(ngModel)]="witness.ta0witnessphone"\n\n                                [ngClass]="(witness.ta0witnessphone == \'\' || witness.ta0witnessphone == undefined && !allowSave) ? \'redHighlightText\' : \'blackHighlightText\'">\n\n                            </ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-item-divider color="light">\n\n                    <ion-icon name="flask"></ion-icon>&nbsp;\n\n                    <strong>OFFICER</strong>\n\n                </ion-item-divider>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Name of Audit Officer :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="Audit Officer"\n\n                                [(ngModel)]="gv.employeetype" [readonly]="true"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Staff No. :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="Staff no." [(ngModel)]="lead"\n\n                                [readonly]="true"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <ion-item>\n\n                            <ion-label color="primary">Station :</ion-label>\n\n                            <ion-input type="text" maxlength="11" placeholder="Station" [(ngModel)]="station"\n\n                                [readonly]="true"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-grid>\n\n    </div>\n\n    <!-- End page for multi phase OPC  -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div>\n\n            <ion-row>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <button ion-button round block (click)="saveDetails()">Save</button>\n\n                </ion-col>\n\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    <button ion-button color="light" round block (click)="goBack()">Cancel</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_opc/deviceTestForms/opc-test-inspect/opc_test_inspect.html"*/,
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
    ], OpcTestInspectPage);
    return OpcTestInspectPage;
}());

//# sourceMappingURL=opc_test_inspect.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcTestInspectPageModule", function() { return OpcTestInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opc_test_inspect__ = __webpack_require__(1075);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpcTestInspectPageModule = /** @class */ (function () {
    function OpcTestInspectPageModule() {
    }
    OpcTestInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opc_test_inspect__["a" /* OpcTestInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__opc_test_inspect__["a" /* OpcTestInspectPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__opc_test_inspect__["a" /* OpcTestInspectPage */]
            ]
        })
    ], OpcTestInspectPageModule);
    return OpcTestInspectPageModule;
}());

//# sourceMappingURL=opc_test_inspect.module.js.map

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
//# sourceMappingURL=11.js.map