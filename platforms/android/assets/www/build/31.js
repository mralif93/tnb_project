webpackJsonp([31],{

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LpcTestListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
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
 * Generated class for the LpcTestListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LpcTestListPage = /** @class */ (function () {
    function LpcTestListPage(navCtrl, appCtrl, params, toastCtrl, gf, dataService, jsonStore, loadingCtrl, gv) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.gf = gf;
        this.dataService = dataService;
        this.jsonStore = jsonStore;
        this.loadingCtrl = loadingCtrl;
        this.gv = gv;
        this.currentDate = __WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY-MM-DD[T]HH:mm:ss.SSS');
        this.showForMainMeter = false;
        this.showForCheckMeter = false;
        this.showPingTest = false;
        this.showLabelMain = false;
        this.showLabelCheck = false;
        this.validateAtRemark = true;
        this.validateAtTest = true;
        this.validateViRemark = true;
        this.validateViTest = true;
        this.validatePctRemark = true;
        this.validatePctTest = true;
        this.validateVrRemark = true;
        this.validatePrRemark = true;
        this.validatePrTest = true;
        this.validatePgRemark = true;
        this.validatePgTest = true;
        this.check = true;
        this.showAccTest = true;
        this.showVisualIns = true;
        this.showPreComm = true;
        this.showVoltage = true;
        this.showPower = true;
        this.showPing = true;
        // Hide/Show Test Section
        this.showAccuracyTest = true;
        this.showVoltageReadingTest = true;
        this.showVisualInspectionTest = true;
        this.showPreCommissioningTest = true;
        this.showPowerReadingTest = true;
        this.showPingsTest = true;
        // Common Not Applicable...
        this.ta0na = 'N';
        this.showAllCommonRemarkDetails = true;
        this.showContainRemak = false;
        this.fIndex = this.params.get("fIndex");
        this.maIndex = this.params.get("maIndex");
        this.feederSet = this.params.get('feederSet');
        this.meterType = this.params.get("meterType");
        this.versionType = this.params.get("versionType");
        this.deviceVoltage = this.params.get("deviceVoltage");
        // Clone the data
        this.itemOri = this.params.get("paramObj");
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        if (this.meterType == 'main') {
            if (this.versionType == 'N') {
                this.modem = this.feederSet.nMeterModemIndex;
                console.log("nMeterModemIndex: " + this.modem);
            }
            else {
                this.modem = this.feederSet.eMeterModemIndex;
                console.log("eMeterModemIndex: " + this.modem);
            }
        }
        else if (this.meterType == 'check') {
            if (this.versionType == 'N') {
                this.modem = this.feederSet.nCheckModemIndex;
                console.log("nCheckModemIndex: " + this.modem);
            }
            else {
                this.modem = this.feederSet.eCheckModemIndex;
                console.log("eCheckModemIndex: " + this.modem);
            }
        }
        this.accuracyTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.visualInspectionTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.preCommissioningTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.voltageReadingTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.powerReadingTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.pingTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        // Checking for Display/Hide using meterType (MainMeter/CheckMeter/Modem)
        if (this.meterType == 'main') {
            this.showLabelMain = true;
            if (this.versionType == 'N') {
                if (this.feederSet.nMeterIndex != undefined) {
                    // Accuracy Test
                    // Voltage Reading Test
                    this.showForCheckMeter = true;
                    this.showForMainMeter = true;
                }
                else {
                    this.showForCheckMeter = false;
                    this.showForMainMeter = false;
                }
                if (this.feederSet.nMeterModemIndex != undefined) {
                    this.showPingTest = true;
                }
                else {
                    this.showPingTest = false;
                }
            }
            else {
                if (this.feederSet.eMeterIndex != undefined) {
                    this.showForCheckMeter = true;
                    this.showForMainMeter = true;
                }
                else {
                    this.showForCheckMeter = false;
                    this.showForMainMeter = false;
                }
                if (this.feederSet.eMeterModemIndex != undefined) {
                    this.showPingTest = true;
                }
                else {
                    this.showPingTest = false;
                }
            }
        }
        else if (this.meterType == 'check') {
            this.showLabelCheck = true;
            if (this.versionType == 'N') {
                if (this.feederSet.nCheckIndex != undefined) {
                    this.showForCheckMeter = true;
                }
                else {
                    this.showForCheckMeter = false;
                }
                if (this.feederSet.nCheckModemIndex != undefined) {
                    this.showPingTest = true;
                }
                else {
                    this.showPingTest = false;
                }
            }
            else {
                if (this.feederSet.eCheckIndex != undefined) {
                    this.showForCheckMeter = true;
                }
                else {
                    this.showForCheckMeter = false;
                }
                if (this.feederSet.eCheckModemIndex != undefined) {
                    this.showPingTest = true;
                }
                else {
                    this.showPingTest = false;
                }
            }
        }
        if (this.maIndex != undefined) {
            // Read ta0detail if exist
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
                console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== null &&
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== "") {
                    // Get Total Length of Array
                    console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                    var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                    //var data = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail;
                    for (var i = 0; i < testLength; i++) {
                        var ta0testdetails = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
                        var type = ta0testdetails.ta0testtype;
                        var applicable = ta0testdetails.ta0na;
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT: {
                                this.accuracyTest = ta0testdetails;
                                if (applicable == true) {
                                    this.accuracyTest.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.accuracyTest.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_VIST: {
                                this.visualInspectionTest = ta0testdetails;
                                if (applicable == true) {
                                    this.visualInspectionTest.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.visualInspectionTest.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT: {
                                this.preCommissioningTest = ta0testdetails;
                                if (applicable == true) {
                                    this.preCommissioningTest.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.preCommissioningTest.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT: {
                                this.voltageReadingTest = ta0testdetails;
                                if (applicable == true) {
                                    this.voltageReadingTest.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.voltageReadingTest.loc_test_ta0na = "N";
                                }
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE: {
                                this.powerReadingTest = ta0testdetails;
                                if (applicable == true) {
                                    this.powerReadingTest.loc_test_ta0na = "Y";
                                }
                                else {
                                    this.powerReadingTest.loc_test_ta0na = "N";
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
        if (this.modem != undefined) {
            // Read ping if exist
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].hasOwnProperty('ta0testdetail')) {
                console.log("Ping Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail));
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail[0]) !== "undefined") {
                    var pingtestdetails = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail[0];
                    var applicable = pingtestdetails.ta0na;
                    this.pingTest = pingtestdetails;
                    if (applicable == true) {
                        this.pingTest.loc_test_ta0na = "Y";
                    }
                    else {
                        this.pingTest.loc_test_ta0na = "N";
                    }
                }
            }
            else {
                console.log("Ping Test not exists!");
            }
        }
    }
    LpcTestListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LpcTestListPage');
    };
    LpcTestListPage.prototype.hideShowAccuracyTest = function () {
        console.log('came inside to hideShowAccuracyTest ..' + this.accuracyTest.loc_test_ta0na);
        if (this.accuracyTest.loc_test_ta0na == 'Y') {
            // Remarks Section
            this.accuracyTest.ta0na = true;
            this.accuracyTest.ta0naremarks = null;
        }
        else {
            this.accuracyTest = {};
            this.accuracyTest.loc_test_ta0na = 'N';
            this.accuracyTest.ta0na = false;
        }
    };
    LpcTestListPage.prototype.hideShowVisualInsTest = function () {
        console.log('came inside to hideShowVisualInsTest ..' + this.visualInspectionTest.loc_test_ta0na);
        if (this.visualInspectionTest.loc_test_ta0na == 'Y') {
            // Remarks Section
            this.visualInspectionTest.ta0na = true;
            this.visualInspectionTest.ta0naremarks = null;
        }
        else {
            this.visualInspectionTest = {};
            this.visualInspectionTest.loc_test_ta0na = 'N';
            this.visualInspectionTest.ta0na = false;
        }
    };
    LpcTestListPage.prototype.hideShowPreCommTest = function () {
        console.log('came inside to hideShowPreCommTest ..' + this.preCommissioningTest);
        if (this.preCommissioningTest.loc_test_ta0na == 'Y') {
            // Remarks Section
            this.preCommissioningTest.ta0na = true;
            this.preCommissioningTest.ta0naremarks = null;
        }
        else {
            this.preCommissioningTest = {};
            this.preCommissioningTest.loc_test_ta0na = 'N';
            this.preCommissioningTest.ta0na = false;
        }
    };
    LpcTestListPage.prototype.hideShowVoltageTest = function () {
        console.log('came inside to hideShowVoltageTest ..' + this.showVoltage);
        if (this.voltageReadingTest.loc_test_ta0na == 'Y') {
            // Remarks Section
            this.voltageReadingTest.ta0na = true;
            this.voltageReadingTest.ta0naremarks = null;
        }
        else {
            this.voltageReadingTest = {};
            this.voltageReadingTest.loc_test_ta0na = 'N';
            this.voltageReadingTest.ta0na = false;
        }
    };
    LpcTestListPage.prototype.hideShowPowerTest = function () {
        console.log('came inside to hideShowPowerTest ..' + this.showPower);
        if (this.powerReadingTest.loc_test_ta0na == 'Y') {
            // Remarks Section
            this.powerReadingTest.ta0na = true;
            this.powerReadingTest.ta0naremarks = null;
        }
        else {
            this.powerReadingTest = {};
            this.powerReadingTest.loc_test_ta0na = 'N';
            this.powerReadingTest.ta0na = false;
        }
    };
    LpcTestListPage.prototype.hideShowPingTest = function () {
        console.log('came inside to hideShowPowerTest ..' + this.showPing);
        if (this.pingTest.loc_test_ta0na == 'Y') {
            // Remarks Section
            this.pingTest.ta0na = true;
            this.pingTest.ta0naremarks = null;
        }
        else {
            this.pingTest = {};
            this.pingTest.loc_test_ta0na = 'N';
            this.pingTest.ta0na = false;
        }
    };
    /* displayMessageToast(msg) {
      this.presentToast("Required field should not be empty. " + msg);
    } */
    LpcTestListPage.prototype.validateInput = function () {
        this.check = true;
        if (this.meterType === 'main') {
            if (this.versionType === 'N') {
                if (this.feederSet.nMeterIndex != undefined) {
                    // visual Inspection Test Started...
                    if (this.visualInspectionTest.loc_test_ta0na === "Y") {
                        this.validateViRemark = true;
                        if (this.visualInspectionTest.ta0naremarks === '' || this.visualInspectionTest.ta0naremarks === undefined || this.visualInspectionTest.ta0naremarks === null) {
                            this.validateViRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validateViTest = true;
                        // ZUDN Check Conditions
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.deviceVoltage !== '03') {
                                if (this.visualInspectionTest.ta0vi_pt_polarity_label == '' || this.visualInspectionTest.ta0vi_pt_polarity_label === undefined) {
                                    this.validateViTest = false;
                                    this.check = false;
                                }
                            }
                            if (this.visualInspectionTest.ta0vi_arm_cable_visible == '' || this.visualInspectionTest.ta0vi_arm_cable_visible == undefined) {
                                this.validateViTest = false;
                                this.check = false;
                            }
                        }
                    }
                    // visual Inspection Test Ended...
                    // PreCommission Test Started...
                    if (this.preCommissioningTest.loc_test_ta0na === "Y") {
                        this.validatePctRemark = true;
                        if (this.preCommissioningTest.ta0naremarks === '' || this.preCommissioningTest.ta0naremarks === undefined || this.preCommissioningTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validatePctRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validatePctTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.preCommissioningTest.ta0pc_contctpt_r === '' || this.preCommissioningTest.ta0pc_contctpt_r === undefined) {
                                // this.displayMessageToast("Pct ConRed");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            if (typeof (this.preCommissioningTest.ta0pc_contctpt_y) === undefined) {
                                // this.displayMessageToast("Pct ConYellow");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            if (typeof (this.preCommissioningTest.ta0pc_contctpt_b) === undefined) {
                                // this.displayMessageToast("Pct ConBlue");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_ctratio_r === '' || this.preCommissioningTest.ta0pc_ctratio_r === undefined) {
                                // this.displayMessageToast("Pct CtRtRed");
                                // this.validatePctTest = false;
                                // this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_ctratio_y === null || this.preCommissioningTest.ta0pc_ctratio_y === undefined) {
                                // this.displayMessageToast("Pct CtRtYellow");
                                // this.validatePctTest = false;
                                // this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_ctratio_b === '' || this.preCommissioningTest.ta0pc_ctratio_b === undefined) {
                                // this.displayMessageToast("Pct CtRtRBlue");
                                // this.validatePctTest = false;
                                // this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_ctpolar_r === '' || this.preCommissioningTest.ta0pc_ctpolar_r === undefined) {
                                // this.displayMessageToast("Pct CtPlRed");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_ctpolar_y === '' || this.preCommissioningTest.ta0pc_ctpolar_y === undefined) {
                                // this.displayMessageToast("Pct CtPlYellow");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_ctpolar_b === '' || this.preCommissioningTest.ta0pc_ctpolar_b === undefined) {
                                // this.displayMessageToast("Pct CtPlBlue");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_kio_wirg === '' || this.preCommissioningTest.ta0pc_kio_wirg === undefined) {
                                // this.displayMessageToast("Pct KioWirg");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                            else if (this.preCommissioningTest.ta0pc_s2_starerh === '' || this.preCommissioningTest.ta0pc_s2_starerh === undefined) {
                                // this.displayMessageToast("Pct S2StarErh");
                                this.validatePctTest = false;
                                this.check = false;
                            }
                        }
                    }
                    // Pre Comission Test Ended...
                    // Power Reading Test Started
                    if (this.powerReadingTest.loc_test_ta0na === "Y") {
                        this.validatePrRemark = true;
                        if (this.powerReadingTest.ta0naremarks === '' || this.powerReadingTest.ta0naremarks === undefined || this.powerReadingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validatePrRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validatePrTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.powerReadingTest.ta0pr_active_r === '' || this.powerReadingTest.ta0pr_active_r === undefined) {
                                // this.displayMessageToast("Active Red");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_active_y === '' || this.powerReadingTest.ta0pr_active_y === undefined) {
                                // this.displayMessageToast("Active Yellow");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_active_b === '' || this.powerReadingTest.ta0pr_active_b === undefined) {
                                // this.displayMessageToast("Active Blue");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_reactive_r === '' || this.powerReadingTest.ta0pr_reactive_r === undefined) {
                                // this.displayMessageToast("Reactive Red");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_reactive_y === '' || this.powerReadingTest.ta0pr_reactive_y === undefined) {
                                // this.displayMessageToast("Reactive Yellow");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_reactive_b === '' || this.powerReadingTest.ta0pr_reactive_b === undefined) {
                                // this.displayMessageToast("Reactive Blue");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_pf_r === '' || this.powerReadingTest.ta0pr_pf_r === undefined) {
                                // this.displayMessageToast("PF Red");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_pf_y === '' || this.powerReadingTest.ta0pr_pf_y === undefined) {
                                // this.displayMessageToast("PF Yellow");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_pf_b === '' || this.powerReadingTest.ta0pr_pf_b === undefined) {
                                // this.displayMessageToast("PF Blue");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                            else if (this.powerReadingTest.ta0pr_pf_total === '' || this.powerReadingTest.ta0pr_pf_total === undefined) {
                                // this.displayMessageToast("PF Total");
                                this.validatePrTest = false;
                                this.check = false;
                            }
                        }
                    }
                    // Power Reading Test Ended
                    // Accuracy Test Started
                    if (this.accuracyTest.loc_test_ta0na === "Y") {
                        this.validateAtRemark = true;
                        if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remarks");
                            this.validateAtRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validateAtTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 0 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                                // this.displayMessageToast("Test1");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                                // this.displayMessageToast("Test2");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 == undefined) {
                                // this.displayMessageToast("Test3");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                        }
                    }
                    //Accuracy Test Ended
                    // Voltage Reading Test Started
                    if (this.voltageReadingTest.loc_test_ta0na === "Y") {
                        console.log("Notification Voltage Reading Remark..");
                        this.validateVrRemark = true;
                        if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validateVrRemark = false;
                            this.check = false;
                        }
                    }
                    // Voltage Reading Test Ended
                }
                if (this.feederSet.nMeterModemIndex != undefined) {
                    if (this.pingTest.loc_test_ta0na === "Y") {
                        this.validatePgRemark = true;
                        if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validatePgRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validatePgTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                                // this.displayMessageToast("Ping Test");
                                this.validatePgTest = false;
                                this.check = false;
                            }
                        }
                    }
                }
            }
            else {
                if ((this.item.json.worktype === 'ZIST') ||
                    (this.item.json.worktype === 'ZRMV') ||
                    (this.item.json.worktype === 'ZUDN') ||
                    (this.item.json.worktype === 'ZRPC') ||
                    (this.item.json.worktype === 'ZSRO') ||
                    (this.item.json.worktype === 'ZINR') ||
                    (this.item.json.worktype === 'ZINL') ||
                    (this.item.json.worktype === 'ZMMR')) {
                    if (this.feederSet.eMeterIndex != undefined) {
                        if (this.visualInspectionTest.loc_test_ta0na === "Y") {
                            this.validateViRemark = true;
                            if (this.visualInspectionTest.ta0naremarks === '' || this.visualInspectionTest.ta0naremarks === undefined || this.visualInspectionTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remark");
                                this.validateViRemark = false;
                                this.check = false;
                            }
                        }
                        if (this.preCommissioningTest.loc_test_ta0na === "Y") {
                            this.validatePctRemark = true;
                            if (this.preCommissioningTest.ta0naremarks === '' || this.preCommissioningTest.ta0naremarks === undefined || this.preCommissioningTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remark");
                                this.validatePctRemark = false;
                                this.check = false;
                            }
                        }
                        else {
                            this.validatePctTest = true;
                            if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN)) {
                                if (this.preCommissioningTest.ta0pc_contctpt_r === undefined || (typeof (this.preCommissioningTest.ta0pc_contctpt_y)) === undefined || (typeof (this.preCommissioningTest.ta0pc_contctpt_b) === undefined)) {
                                    //this.displayMessageToast("Pct ConRed");
                                    // this.gf.warningAlert('Error', 'Mandatory field cannot be empty', 'Close');
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_ctratio_r === '' || this.preCommissioningTest.ta0pc_ctratio_r === undefined) {
                                    // this.displayMessageToast("Pct CtRtRed");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_ctratio_y === null || this.preCommissioningTest.ta0pc_ctratio_y === undefined) {
                                    // this.displayMessageToast("Pct CtRtYellow");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_ctratio_b === '' || this.preCommissioningTest.ta0pc_ctratio_b === undefined) {
                                    // this.displayMessageToast("Pct CtRtRBlue");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_ctpolar_r === '' || this.preCommissioningTest.ta0pc_ctpolar_r === undefined) {
                                    // this.displayMessageToast("Pct CtPlRed");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_ctpolar_y === '' || this.preCommissioningTest.ta0pc_ctpolar_y === undefined) {
                                    // this.displayMessageToast("Pct CtPlYellow");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_ctpolar_b === '' || this.preCommissioningTest.ta0pc_ctpolar_b === undefined) {
                                    // this.displayMessageToast("Pct CtPlBlue");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_kio_wirg === '' || this.preCommissioningTest.ta0pc_kio_wirg === undefined) {
                                    // this.displayMessageToast("Pct KioWirg");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                                else if (this.preCommissioningTest.ta0pc_s2_starerh === '' || this.preCommissioningTest.ta0pc_s2_starerh === undefined) {
                                    // this.displayMessageToast("Pct S2StarErh");
                                    this.validatePctTest = false;
                                    this.check = false;
                                }
                            }
                        }
                        if (this.powerReadingTest.loc_test_ta0na === "Y") {
                            this.validatePrRemark = true;
                            if (this.powerReadingTest.ta0naremarks === '' || this.powerReadingTest.ta0naremarks === undefined || this.powerReadingTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remark");
                                this.validatePrRemark = false;
                                this.check = false;
                            }
                        }
                        else {
                            this.validatePrTest = true;
                            if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN)) {
                                if (this.powerReadingTest.ta0pr_active_r === '' || this.powerReadingTest.ta0pr_active_r === undefined) {
                                    // this.displayMessageToast("Active Red");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_active_y === '' || this.powerReadingTest.ta0pr_active_y === undefined) {
                                    // this.displayMessageToast("Active Yellow");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_active_b === '' || this.powerReadingTest.ta0pr_active_b === undefined) {
                                    // this.displayMessageToast("Active Blue");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_reactive_r === '' || this.powerReadingTest.ta0pr_reactive_r === undefined) {
                                    // this.displayMessageToast("Reactive Red");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_reactive_y === '' || this.powerReadingTest.ta0pr_reactive_y === undefined) {
                                    // this.displayMessageToast("Reactive Yellow");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_reactive_b === '' || this.powerReadingTest.ta0pr_reactive_b === undefined) {
                                    // this.displayMessageToast("Reactive Blue");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_pf_r === '' || this.powerReadingTest.ta0pr_pf_r === undefined) {
                                    // this.displayMessageToast("PF Red");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_pf_y === '' || this.powerReadingTest.ta0pr_pf_y === undefined) {
                                    // this.displayMessageToast("PF Yellow");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                                else if (this.powerReadingTest.ta0pr_pf_b === '' || this.powerReadingTest.ta0pr_pf_b === undefined) {
                                    // this.displayMessageToast("PF Blue");
                                    this.validatePrTest = false;
                                    this.check = false;
                                }
                            }
                        }
                        if (this.accuracyTest.loc_test_ta0na === "Y") {
                            this.validateAtRemark = true;
                            if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remarks");
                                this.validateAtRemark = false;
                                this.check = false;
                            }
                        }
                        else {
                            this.validateAtTest = true;
                            /* Comment for OPC meter existing */
                            /* By   : Alip */
                            /* Date : 30-10-2018 */
                            // if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === SoTypes.ZUDN) || ( this.deviceVoltage  > 2  && this.deviceVoltage > 2 && this.item.json.worktype !== SoTypes.ZUDN)) {
                            if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                                // this.displayMessageToast("Test1");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                                // this.displayMessageToast("Test2");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 === undefined) {
                                // this.displayMessageToast("Test3");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            // }
                        }
                        if (this.voltageReadingTest.loc_test_ta0na === "Y") {
                            this.validateVrRemark = true;
                            if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remark");
                                this.validateVrRemark = false;
                                this.check = false;
                            }
                        }
                    }
                }
                if (this.feederSet.eMeterModemIndex != undefined) {
                    if (this.pingTest.loc_test_ta0na === "Y") {
                        this.validatePgRemark = true;
                        if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validatePgRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validatePgTest = true;
                        if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                            // this.displayMessageToast("Ping Test");
                            this.validatePgTest = false;
                            this.check = false;
                        }
                    }
                }
            }
        }
        else if (this.meterType === 'check') {
            if (this.versionType === 'N') {
                if (this.feederSet.nCheckIndex != undefined) {
                    if (this.accuracyTest.loc_test_ta0na === "Y") {
                        this.validateAtRemark = true;
                        if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validateAtRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validateAtTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                                // this.displayMessageToast("Test1");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                                // this.displayMessageToast("Test2");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                            else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 === undefined) {
                                // this.displayMessageToast("Test3");
                                this.validateAtTest = false;
                                this.check = false;
                            }
                        }
                    }
                    if (this.voltageReadingTest.loc_test_ta0na === "Y") {
                        this.validateVrRemark = true;
                        if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validateVrRemark = false;
                            this.check = false;
                        }
                    }
                }
                if (this.feederSet.nCheckModemIndex != undefined) {
                    if (this.pingTest.loc_test_ta0na === "Y") {
                        this.validatePgRemark = true;
                        if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validatePgRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validatePgTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.worktype === 'ZUDN') || (this.deviceVoltage > 2 && this.item.json.worktype !== 'ZUDN')) {
                            if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                                // this.displayMessageToast("Ping Test");
                                this.validatePgTest = false;
                                this.check = false;
                            }
                        }
                    }
                }
            }
            else {
                if ((this.item.json.worktype === 'ZIST') || (this.item.json.worktype === 'ZRMV') || (this.item.json.worktype === 'ZUDN') || (this.item.json.worktype === 'ZRPC') || (this.item.json.worktype === 'ZSRO') || (this.item.json.worktype === 'ZINR') || (this.item.json.worktype === 'ZINL') || (this.item.json.worktype === 'ZMMR')) {
                    if (this.feederSet.eCheckIndex != undefined) {
                        if (this.accuracyTest.loc_test_ta0na === "Y") {
                            this.validateAtRemark = true;
                            if (this.accuracyTest.ta0naremarks === '' || this.accuracyTest.ta0naremarks === undefined || this.accuracyTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remark");
                                this.validateAtRemark = false;
                                this.check = false;
                            }
                        }
                        else {
                            this.validateAtTest = true;
                            if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN)) {
                                if (this.accuracyTest.ta0at_test1 === '' || this.accuracyTest.ta0at_test1 === undefined) {
                                    // this.displayMessageToast("Test1");
                                    this.validateAtTest = false;
                                    this.check = false;
                                }
                                else if (this.accuracyTest.ta0at_test2 === '' || this.accuracyTest.ta0at_test2 === undefined) {
                                    // this.displayMessageToast("Test2");
                                    this.validateAtTest = false;
                                    this.check = false;
                                }
                                else if (this.accuracyTest.ta0at_test3 === '' || this.accuracyTest.ta0at_test3 === undefined) {
                                    // this.displayMessageToast("Test3");
                                    this.validateAtTest = false;
                                    this.check = false;
                                }
                            }
                        }
                        if (this.voltageReadingTest.loc_test_ta0na === "Y") {
                            console.log("Notification Voltage Reading Remark..");
                            this.validateVrRemark = true;
                            if (this.voltageReadingTest.ta0naremarks === '' || this.voltageReadingTest.ta0naremarks === undefined || this.voltageReadingTest.ta0naremarks === null) {
                                // this.displayMessageToast("Remark");
                                this.validateVrRemark = false;
                                this.check = false;
                            }
                        }
                    }
                }
                if (this.feederSet.eCheckModemIndex != undefined) {
                    if (this.pingTest.loc_test_ta0na === "Y") {
                        this.validatePgRemark = true;
                        if (this.pingTest.ta0naremarks === '' || this.pingTest.ta0naremarks === undefined || this.pingTest.ta0naremarks === null) {
                            // this.displayMessageToast("Remark");
                            this.validatePgRemark = false;
                            this.check = false;
                        }
                    }
                    else {
                        this.validatePgTest = true;
                        if ((this.deviceVoltage >= 3 && this.item.json.ta0installationvoltage >= 3 && this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) || (this.deviceVoltage > 2 && this.deviceVoltage > 2 && this.item.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN)) {
                            if (this.pingTest.ta0pingtest === '' || this.pingTest.ta0pingtest === undefined) {
                                // this.displayMessageToast("Ping Test");
                                this.validatePgTest = false;
                                this.check = false;
                            }
                        }
                    }
                }
            }
        }
    };
    // Save Data Visual Inspection, Precommisioning Test, Voltage Reading, Power Reading
    LpcTestListPage.prototype.saveAllTest = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        console.log("This section to save data test record..");
        console.log('Site ID: ' + JSON.stringify(this.itemOri.json.siteid));
        if (this.maIndex != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
        }
        if (this.modem != undefined) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail = [];
        }
        // Default value from parent
        if (this.maIndex != undefined) {
            var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
        }
        if (this.modem != undefined) {
            var assetnum_modem = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].assetnum;
        }
        var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.wonum;
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci.ta0metertestdate = this.currentDate;
        this.validateInput();
        if (this.check === true) {
            // Accuracy Test
            if (this.accuracyTest.loc_test_ta0na == "Y") {
                this.accuracyTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
                this.accuracyTest.siteid = siteid;
                this.accuracyTest.wonum = wonum;
                this.accuracyTest.assetnum = assetnum;
            }
            else {
                this.accuracyTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
                this.accuracyTest.siteid = siteid;
                this.accuracyTest.wonum = wonum;
                this.accuracyTest.assetnum = assetnum;
            }
            // Push Data into JSON for Accuracy Test
            if (this.maIndex != undefined) {
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracyTest);
            }
            // Voltage Reading Test
            if (this.voltageReadingTest.loc_test_ta0na == "Y") {
                this.voltageReadingTest.assetnum = assetnum;
                this.voltageReadingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT;
                this.voltageReadingTest.siteid = siteid;
                this.voltageReadingTest.wonum = wonum;
            }
            else {
                this.voltageReadingTest.assetnum = assetnum;
                this.voltageReadingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT;
                this.voltageReadingTest.siteid = siteid;
                this.voltageReadingTest.wonum = wonum;
            }
            // Push Data into JSON for Voltage Reading Test
            if (this.maIndex != undefined) {
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.voltageReadingTest);
            }
            if (this.meterType == 'main') {
                if (this.versionType == 'N') {
                    if (this.feederSet.nMeterIndex != undefined) {
                        // Visual Inspection Test
                        if (this.visualInspectionTest.loc_test_ta0na == "Y") {
                            this.visualInspectionTest.assetnum = assetnum;
                            this.visualInspectionTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_VIST;
                            this.visualInspectionTest.siteid = siteid;
                            this.visualInspectionTest.wonum = wonum;
                        }
                        else {
                            this.visualInspectionTest.assetnum = assetnum;
                            this.visualInspectionTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_VIST;
                            this.visualInspectionTest.siteid = siteid;
                            this.visualInspectionTest.wonum = wonum;
                        }
                        // Push Data into JSON for Visual Inspection Test        
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.visualInspectionTest);
                        // Pre-Commissioning Test
                        if (this.preCommissioningTest.loc_test_ta0na == "Y") {
                            this.preCommissioningTest.assetnum = assetnum;
                            this.preCommissioningTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT;
                            this.preCommissioningTest.siteid = siteid;
                            this.preCommissioningTest.wonum = wonum;
                        }
                        else {
                            this.preCommissioningTest.assetnum = assetnum;
                            this.preCommissioningTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT;
                            this.preCommissioningTest.siteid = siteid;
                            this.preCommissioningTest.wonum = wonum;
                        }
                        // Push Data into JSON for Pre-Commissioning Test
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.preCommissioningTest);
                        // Power Reading Test
                        if (this.powerReadingTest.loc_test_ta0na == "Y") {
                            this.powerReadingTest.assetnum = assetnum;
                            this.powerReadingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE;
                            this.powerReadingTest.siteid = siteid;
                            this.powerReadingTest.wonum = wonum;
                        }
                        else {
                            this.powerReadingTest.assetnum = assetnum;
                            this.powerReadingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE;
                            this.powerReadingTest.siteid = siteid;
                            this.powerReadingTest.wonum = wonum;
                        }
                        // Push Data into JSON for Voltage Reading Test
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.powerReadingTest);
                    }
                    if (this.modem != undefined) {
                        // Ping Test
                        if (this.pingTest.loc_test_ta0na == "Y") {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        else {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        // modemIndex = this.feederSet.nMeterModemIndex;
                        // Push Data into JSON for PingTest nMeterModemIndex
                        //this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.feederSet.nMeterModemIndex].ta0testdetail = [];
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
                    }
                }
                else {
                    if (this.feederSet.eMeterIndex != undefined) {
                        // Visual Inspection Test
                        if (this.visualInspectionTest.loc_test_ta0na == "Y") {
                            this.visualInspectionTest.assetnum = assetnum;
                            this.visualInspectionTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_VIST;
                            this.visualInspectionTest.siteid = siteid;
                            this.visualInspectionTest.wonum = wonum;
                        }
                        else {
                            this.visualInspectionTest.assetnum = assetnum;
                            this.visualInspectionTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_VIST;
                            this.visualInspectionTest.siteid = siteid;
                            this.visualInspectionTest.wonum = wonum;
                        }
                        // Push Data into JSON for Visual Inspection Test        
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.visualInspectionTest);
                        // Pre-Commissioning Test
                        if (this.preCommissioningTest.loc_test_ta0na == "Y") {
                            this.preCommissioningTest.assetnum = assetnum;
                            this.preCommissioningTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT;
                            this.preCommissioningTest.siteid = siteid;
                            this.preCommissioningTest.wonum = wonum;
                        }
                        else {
                            this.preCommissioningTest.assetnum = assetnum;
                            this.preCommissioningTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT;
                            this.preCommissioningTest.siteid = siteid;
                            this.preCommissioningTest.wonum = wonum;
                        }
                        // Push Data into JSON for Pre-Commissioning Test
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.preCommissioningTest);
                        // Power Reading Test
                        if (this.powerReadingTest.loc_test_ta0na == "Y") {
                            this.powerReadingTest.assetnum = assetnum;
                            this.powerReadingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE;
                            this.powerReadingTest.siteid = siteid;
                            this.powerReadingTest.wonum = wonum;
                        }
                        else {
                            this.powerReadingTest.assetnum = assetnum;
                            this.powerReadingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE;
                            this.powerReadingTest.siteid = siteid;
                            this.powerReadingTest.wonum = wonum;
                        }
                        // Push Data into JSON for Voltage Reading Test
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.powerReadingTest);
                    }
                    if (this.modem != undefined) {
                        // Ping Test
                        if (this.pingTest.loc_test_ta0na == "Y") {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        else {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        // modemIndex = this.feederSet.eMeterModemIndex;
                        // Push Data into JSON for PingTest eMeterModemIndex         
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
                    }
                }
            }
            else if (this.meterType == 'check') {
                if (this.versionType == 'N') {
                    if (this.modem != undefined) {
                        // Ping Test
                        if (this.pingTest.loc_test_ta0na == "Y") {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        else {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        // modemIndex = this.feederSet.nCheckModemIndex;
                        // Push Data into JSON for PingTest nCheckModemIndex
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
                    }
                }
                else {
                    if (this.modem != undefined) {
                        // Ping Test
                        if (this.pingTest.loc_test_ta0na == "Y") {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        else {
                            this.pingTest.assetnum = assetnum_modem;
                            this.pingTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PING;
                            this.pingTest.siteid = siteid;
                            this.pingTest.wonum = wonum;
                        }
                        // modemIndex = this.feederSet.eCheckModemIndex;
                        // Push Data into JSON for PingTest eCheckModemIndex
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testdetail.push(this.pingTest);
                    }
                }
            }
            console.log("DATA : " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex]));
            /** Setting flag button status.. (alif) - (29.12.2018)*/
            if (typeof (this.maIndex) !== 'undefined') {
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
            }
            if (typeof (this.modem) !== 'undefined') {
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testingstatus = 'Y';
            }
            setTimeout(function () {
                _this;
                console.log('console time out  ');
                loading.onWillDismiss(function () {
                    console.log('Will dismiss loading');
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    if (typeof (_this.maIndex) != undefined) {
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = true;
                    }
                    if (typeof (_this.modem) != undefined && typeof (_this.maIndex) == undefined) {
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = true;
                    }
                    //this.gf.displayToast("Test details updated.");
                    loading.dismiss();
                });
            }, 5000);
            /**
             * Reason   : Saving to local storage (json data).
             * Created  : 22-01-2019
             */
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                //checking main meter or check meter
                console.log('Network Type :  ' + this.gf.checkNetwork);
                if (typeof (this.maIndex) !== 'undefined') {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
                }
                //checking modem
                if (typeof (this.modem) != null && typeof (this.maIndex) === 'undefined') {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].loc_ta0testings_haveChange = true;
                }
                console.log('Offline Test : ');
                //this.gf.warningAlert("Success", "Test details updated locally.", "Close");
                this.gf.displayToast("Test details updated locally.");
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                loading.dismiss();
            }
            else if ((__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                /**
                 * Description: Change old(swift) to new(objective-c) plugin.
                 * Edited: Alif (16.10.2019)
                 * old --> mobilesignalswift.getSignalStrength
                 * new --> cordova.plugins.MobileSignal.getSignalStrength
                 */
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        if (typeof (_this.maIndex) !== 'undefined') {
                            //item, wonumVal, pageAction, feederCode, workOrderType) 
                            var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                            var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                            var itemArray = [];
                            itemArray.push(itemVal);
                            _this.dataService
                                .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                                .then(function (results) {
                                var resObj;
                                resObj = JSON.parse(results.toString());
                                if (resObj.processStatus === 'success') {
                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                                    if (_this.modem === null || _this.modem === 'undefined') {
                                        _this.navCtrl.pop();
                                    }
                                    else {
                                        console.log('have to run modem test ');
                                        var itemValModem = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem];
                                        var itemModemArray = [];
                                        itemModemArray.push(itemValModem);
                                        _this.dataService
                                            .saveRecordWithNewType(itemModemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                                            .then(function (results) {
                                            var resObj;
                                            resObj = JSON.parse(results.toString());
                                            ;
                                            if (resObj.processStatus === 'success') {
                                                console.log(' result + ' + JSON.stringify(results));
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                if (typeof (_this.modem) != 'undefined') {
                                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = false;
                                                }
                                                _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                            }
                                            else {
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                if (typeof (_this.modem) != 'undefined') {
                                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = true;
                                                }
                                                _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                            }
                                        });
                                    }
                                }
                                else {
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = true;
                                    _this.gf.displayToast('failed to save ' + resObj.description);
                                    // this.navCtrl.pop();
                                    loading.dismiss();
                                }
                            });
                        }
                        //checking meter or check meter empty but modem have data
                        if (typeof (_this.modem) !== 'undefined' && typeof (_this.maIndex) === 'undefined') {
                            var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                            var itemValModem = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem];
                            var itemModemArray = [];
                            itemModemArray.push(itemValModem);
                            _this.dataService
                                .saveRecordWithNewType(itemModemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                                .then(function (results) {
                                var resObj;
                                resObj = JSON.parse(results.toString());
                                ;
                                if (resObj.processStatus == 'success') {
                                    console.log(' result + ' + JSON.stringify(results));
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                    if (typeof (_this.modem) != 'undefined') {
                                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = false;
                                    }
                                    _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                    _this.navCtrl.pop();
                                    loading.dismiss();
                                }
                                else {
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    if (typeof (_this.modem) != 'undefined') {
                                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = true;
                                    }
                                    _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                    _this.navCtrl.pop();
                                    loading.dismiss();
                                }
                            });
                        }
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = true;
                        _this.gf.warningAlert("Success", "Test details updated locally.", "Close");
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                        loading.dismiss();
                    }
                });
            }
            else {
                if (typeof (this.maIndex) !== 'undefined') {
                    //item, wonumVal, pageAction, feederCode, workOrderType) 
                    var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
                    var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
                    var itemArray = [];
                    delete itemVal['ta0sealdetail'];
                    delete itemVal['ta0stickerdetail'];
                    delete itemVal['ta0registerdetail'];
                    itemArray.push(itemVal);
                    this.dataService
                        .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                        .then(function (results) {
                        var resObj;
                        resObj = JSON.parse(results.toString());
                        if (resObj.processStatus === 'success') {
                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                            if (_this.modem === null || typeof (_this.modem) === 'undefined') {
                                //this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
                                _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                _this.navCtrl.pop();
                                loading.dismiss();
                            }
                            else {
                                console.log('have to run modem test ');
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].ta0testingstatus = 'Y';
                                var itemValModem = JSON.parse(JSON.stringify(_this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem]));
                                var itemModemArray = [];
                                delete itemValModem['ta0sealdetail'];
                                delete itemValModem['ta0stickerdetail'];
                                delete itemValModem['ta0registerdetail'];
                                itemModemArray.push(itemValModem);
                                _this.dataService
                                    .saveRecordWithNewType(itemModemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                                    .then(function (results) {
                                    var resObj;
                                    resObj = JSON.parse(results.toString());
                                    ;
                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].ta0testingstatus = 'Y';
                                    if (resObj.processStatus === 'success') {
                                        console.log(' result + ' + JSON.stringify(results));
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                        if (typeof (_this.modem) != 'undefined') {
                                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = false;
                                        }
                                        _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                        _this.navCtrl.pop();
                                        loading.dismiss();
                                    }
                                    else {
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                        if (typeof (_this.modem) != 'undefined') {
                                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = true;
                                        }
                                        _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                        _this.navCtrl.pop();
                                        loading.dismiss();
                                    }
                                });
                            }
                        }
                        else {
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = true;
                            _this.gf.displayToast('failed to save ' + resObj.description);
                            // this.navCtrl.pop();
                            loading.dismiss();
                        }
                    });
                }
                //checking meter or check meter empty but modem have data
                if (typeof (this.modem) !== 'undefined' && typeof (this.maIndex) === 'undefined') {
                    var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem].ta0testingstatus = 'Y';
                    var itemValModem = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modem]));
                    var itemModemArray = [];
                    itemModemArray.push(itemValModem);
                    this.dataService
                        .saveRecordWithNewType(itemModemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                        .then(function (results) {
                        var resObj;
                        resObj = JSON.parse(results.toString());
                        ;
                        if (resObj.processStatus == 'success') {
                            console.log(' result + ' + JSON.stringify(results));
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                            if (typeof (_this.modem) != 'undefined') {
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = false;
                            }
                            _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("ServiceExecutionPage", this.itemOri);
                            _this.navCtrl.pop();
                            loading.dismiss();
                        }
                        else {
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                            if (typeof (_this.modem) != 'undefined') {
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modem].loc_ta0testings_haveChange = true;
                            }
                            _this.gf.warningAlert('Success', 'Test details save successfully.', 'Close');
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("ServiceExecutionPage", this.itemOri);
                            _this.navCtrl.pop();
                            loading.dismiss();
                        }
                    });
                }
            }
        }
        else {
            loading.dismiss();
            this.gf.warningAlert('Error', 'Please fill mandatory field', 'Close');
        }
    };
    // Calculate Average for Accuracy Test
    LpcTestListPage.prototype.calculateAverageAccuracyTest = function () {
        console.log("This section to calculate average Accuraccy Test..");
        var avg = Number(Number(this.accuracyTest.ta0at_test1) + Number(this.accuracyTest.ta0at_test2) + Number(this.accuracyTest.ta0at_test3)) / Number(3);
        this.accuracyTest.ta0at_avg = avg.toFixed(3);
        if (isNaN(this.accuracyTest.ta0at_avg) || this.accuracyTest.ta0at_avg === 0) {
            this.accuracyTest.ta0at_avg = 0;
        }
        console.log("Average: " + avg.toFixed(3));
    };
    // Calculate Total for PowerActive
    LpcTestListPage.prototype.calculateTotalPowerActive = function () {
        var total = Number(this.powerReadingTest.ta0pr_active_r) + Number(this.powerReadingTest.ta0pr_active_y) + Number(this.powerReadingTest.ta0pr_active_b);
        this.powerReadingTest.ta0pr_active_total = total.toFixed(3);
        if (isNaN(this.powerReadingTest.ta0pr_active_total) || this.powerReadingTest.ta0pr_active_total === 0) {
            this.powerReadingTest.ta0pr_active_total = 0;
        }
        console.log("Total: " + total.toFixed(3));
    };
    // Calculate Total for PowerReactive
    LpcTestListPage.prototype.calculateTotalPowerReactive = function () {
        var total = Number(this.powerReadingTest.ta0pr_reactive_r) + Number(this.powerReadingTest.ta0pr_reactive_y) + Number(this.powerReadingTest.ta0pr_reactive_b);
        this.powerReadingTest.ta0pr_reactive_total = total.toFixed(3);
        if (isNaN(this.powerReadingTest.ta0pr_reactive_total) || this.powerReadingTest.ta0pr_reactive_total === 0) {
            this.powerReadingTest.ta0pr_reactive_total = 0;
        }
    };
    // Calculate Total for PF
    LpcTestListPage.prototype.calculateTotalPowerPf = function () {
        console.log("This section to calculate total power pf..");
        if (typeof (this.powerReadingTest.ta0pr_pf_r) === "undefined" || this.powerReadingTest.ta0pr_pf_r === null || this.powerReadingTest.ta0pr_pf_r === '') {
            this.powerReadingTest.ta0pr_pf_r = 0.000;
        }
        if (typeof (this.powerReadingTest.ta0pr_pf_y) === "undefined" || this.powerReadingTest.ta0pr_pf_y === null || this.powerReadingTest.ta0pr_pf_y === '') {
            this.powerReadingTest.ta0pr_pf_y = 0.000;
        }
        if (typeof (this.powerReadingTest.ta0pr_pf_b) === "undefined" || this.powerReadingTest.ta0pr_pf_b === null || this.powerReadingTest.ta0pr_pf_b === '') {
            this.powerReadingTest.ta0pr_pf_b = 0.000;
        }
        if (isNaN(this.powerReadingTest.ta0pr_pf_total) || this.powerReadingTest.ta0pr_pf_total === 0) {
            this.powerReadingTest.ta0pr_pf_total = 0;
        }
    };
    LpcTestListPage.prototype.goToServiceExecutionPage = function () {
        this.navCtrl.pop();
    };
    LpcTestListPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LpcTestListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    //Ameer edited on (9/10/2018)
    //Check input device allocation type
    LpcTestListPage.prototype.positiveValueInput = function (event, key) {
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = event.target.value;
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
        switch (key) {
            case 'RY':
                this.voltageReadingTest.ta0vr_ry = newValSlice;
                break;
            case 'YB':
                this.voltageReadingTest.ta0vr_yb = newValSlice;
                break;
            case 'RB':
                this.voltageReadingTest.ta0vr_rb = newValSlice;
                break;
            case 'RN':
                this.voltageReadingTest.ta0vr_rn = newValSlice;
                break;
            case 'YN':
                this.voltageReadingTest.ta0vr_yn = newValSlice;
                break;
            case 'BN':
                this.voltageReadingTest.ta0vr_bn = newValSlice;
                break;
            case 'RE':
                this.voltageReadingTest.ta0vr_re = newValSlice;
                break;
            case 'YE':
                this.voltageReadingTest.ta0vr_ye = newValSlice;
                break;
            case 'BE':
                this.voltageReadingTest.ta0vr_be = newValSlice;
                break;
        }
    };
    //Check for negative value
    // edited by Ameer on (9/10/2018)
    /**
     *
     * @param event
     * @param key
     * Edited : Ameer (19/12/2018)
     */
    LpcTestListPage.prototype.onKeyUp = function (event, key) {
        var NUMBER_REGEXP = /^-?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = event.target.value;
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
                    else if (arrayBeforeDecimal.length < 6 || arrayBeforeDecimal.length === 6) {
                        newValSlice = valueBeforeDot;
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
                newValSlice = valueBeforeDot;
            }
        }
        switch (key) {
            case 'test1':
                this.accuracyTest.ta0at_test1 = newValSlice;
                break;
            case 'test2':
                this.accuracyTest.ta0at_test2 = newValSlice;
                break;
            case 'test3':
                this.accuracyTest.ta0at_test3 = newValSlice;
                break;
            case 'RedActive':
                this.powerReadingTest.ta0pr_active_r = newValSlice;
                break;
            case 'RedReactive':
                this.powerReadingTest.ta0pr_reactive_r = newValSlice;
                break;
            case 'RedPf':
                this.powerReadingTest.ta0pr_pf_r = newValSlice;
                break;
            case 'YellowActive':
                this.powerReadingTest.ta0pr_active_y = newValSlice;
                break;
            case 'YellowReactive':
                this.powerReadingTest.ta0pr_reactive_y = newValSlice;
                break;
            case 'YellowPf':
                this.powerReadingTest.ta0pr_pf_y = newValSlice;
                break;
            case 'BlueActive':
                this.powerReadingTest.ta0pr_active_b = newValSlice;
                break;
            case 'BlueReactvie':
                this.powerReadingTest.ta0pr_reactive_b = newValSlice;
                break;
            case 'BluePf':
                this.powerReadingTest.ta0pr_pf_b = newValSlice;
                break;
            case 'totalPF':
                this.powerReadingTest.ta0pr_pf_total = newValSlice;
                break;
        }
    };
    LpcTestListPage.prototype.remarksInput = function (eventVal, Key) {
        var NUMBER_REGEXP = /^([a-zA-Z0-9 ]+)$/;
        //^(\d{0,6}|(\d{0,6}(\.\d{0,3})))([A-z0-9]+$)?$
        var newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        if (!regExp.test(newValue)) {
            eventVal.target.value = newValue.slice(0, -1);
        }
        else {
            eventVal.target.value;
        }
        switch (Key) {
            case 'AccuracyTest':
                this.accuracyTest.ta0naremarks = eventVal.target.value;
                break;
            case 'VoltageReading':
                this.voltageReadingTest.ta0naremarks = eventVal.target.value;
                break;
            case 'VisualInspectionTest':
                this.visualInspectionTest.ta0naremarks = eventVal.target.value;
                break;
            case 'PreCommissioningTest':
                this.preCommissioningTest.ta0naremarks = eventVal.target.value;
                break;
            case 'PowerReading':
                this.powerReadingTest.ta0naremarks = eventVal.target.value;
                break;
            case 'PingTest':
                this.pingTest.ta0naremarks = eventVal.target.value;
                break;
        }
    };
    LpcTestListPage.prototype.phRotationInput = function (eventVal) {
        var NUMBER_REGEXP = /^([a-zA-Z0-9]+)$/;
        //^(\d{0,6}|(\d{0,6}(\.\d{0,3})))([A-z0-9]+$)?$
        var newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        if (!regExp.test(newValue)) {
            eventVal.target.value = newValue.slice(0, -1);
        }
        else {
            eventVal.target.value;
        }
        this.voltageReadingTest.ta0ph_rotation = eventVal.target.value;
    };
    /**
    * Hide Show Accuracy Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcTestListPage.prototype.showAccuracyTestSection = function (action) {
        if (this.showAccuracyTest === false) {
            this.showAccuracyTest = true;
        }
        else if (action === false) {
            this.showAccuracyTest = false;
        }
    };
    /**
    * Hide Show Voltage Reading Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcTestListPage.prototype.showVoltageReadingTestSection = function (action) {
        if (this.showVoltageReadingTest === false) {
            this.showVoltageReadingTest = true;
        }
        else if (action === false) {
            this.showVoltageReadingTest = false;
        }
    };
    /**
    * Hide Show Visual Inspection Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcTestListPage.prototype.showVisualInspectionTestSection = function (action) {
        if (this.showVisualInspectionTest === false) {
            this.showVisualInspectionTest = true;
        }
        else if (action === false) {
            this.showVisualInspectionTest = false;
        }
    };
    /**
    * Hide Show Pre-Commissioning Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcTestListPage.prototype.showPreCommissioningTestSection = function (action) {
        if (this.showPreCommissioningTest === false) {
            this.showPreCommissioningTest = true;
        }
        else if (action === false) {
            this.showPreCommissioningTest = false;
        }
    };
    /**
    * Hide Show Power Reading Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcTestListPage.prototype.showPowerReadingTestSection = function (action) {
        if (this.showPowerReadingTest === false) {
            this.showPowerReadingTest = true;
        }
        else if (action === false) {
            this.showPowerReadingTest = false;
        }
    };
    /**
    * Hide Show Ping Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    * Edited   : Ameer (22/11/2018)
    */
    LpcTestListPage.prototype.showPingsTestSection = function (action) {
        if (this.showPingsTest === false) {
            this.showPingsTest = true;
        }
        else if (action === false) {
            this.showPingsTest = false;
        }
    };
    /**
     * Not applicable Note...
     * @param action
     */
    LpcTestListPage.prototype.showAllRemarkCommon = function (action) {
        if (this.showAllCommonRemarkDetails === false) {
            this.showAllCommonRemarkDetails = true;
        }
        else if (action === false) {
            this.showAllCommonRemarkDetails = false;
        }
    };
    /**
     * Not application for all applications...
     * @param value
     */
    LpcTestListPage.prototype.commonNotApplication = function (value) {
        if (value === 'Y') {
            this.showContainRemak = true;
            // ACCURACY TEST
            this.showAccuracyTest = false;
            this.accuracyTest.loc_test_ta0na = 'Y';
            this.accuracyTest.ta0na = true;
            // PING TEST (MODEM)
            this.pingTest.loc_test_ta0na = 'Y';
            this.pingTest.ta0na = true;
            this.showPingsTest = false;
            // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
            this.voltageReadingTest.loc_test_ta0na = 'Y';
            this.voltageReadingTest.ta0na = true;
            this.showVoltageReadingTest = false;
            // VISUAL INSPECTION TEST
            this.visualInspectionTest.loc_test_ta0na = 'Y';
            this.visualInspectionTest.ta0na = true;
            this.showVisualInspectionTest = false;
            // PRE-COMMISSIONING TEST
            this.preCommissioningTest.loc_test_ta0na = 'Y';
            this.preCommissioningTest.ta0na = true;
            this.showPreCommissioningTest = false;
            // SECONDARY POWER READING FROM PTE
            this.powerReadingTest.loc_test_ta0na = 'Y';
            this.powerReadingTest.ta0na = true;
            this.showPowerReadingTest = false;
        }
        else {
            this.showContainRemak = false;
            // ACCURACY TEST
            this.accuracyTest.loc_test_ta0na = 'N';
            this.accuracyTest.ta0na = false;
            this.showAccuracyTest = true;
            // PING TEST (MODEM)
            this.pingTest.loc_test_ta0na = 'N';
            this.pingTest.ta0na = false;
            this.showPingsTest = true;
            // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
            this.voltageReadingTest.loc_test_ta0na = 'N';
            this.voltageReadingTest.ta0na = false;
            this.showVoltageReadingTest = true;
            // VISUAL INSPECTION TEST
            this.visualInspectionTest.loc_test_ta0na = 'N';
            this.visualInspectionTest.ta0na = false;
            this.showVisualInspectionTest = true;
            // PRE-COMMISSIONING TEST
            this.preCommissioningTest.loc_test_ta0na = 'N';
            this.preCommissioningTest.ta0na = false;
            this.showPreCommissioningTest = true;
            // SECONDARY POWER READING FROM PTE
            this.powerReadingTest.loc_test_ta0na = 'N';
            this.powerReadingTest.ta0na = false;
            this.showPowerReadingTest = true;
        }
    };
    /**
     * commonRemark Changes Reflecting factor...
     */
    LpcTestListPage.prototype.commonNotApplicationRemark = function () {
        // ACCURACY TEST
        this.accuracyTest.ta0naremarks = this.ta0Remark;
        ;
        // PING TEST (MODEM)
        this.pingTest.ta0naremarks = this.ta0Remark;
        ;
        // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
        this.voltageReadingTest.ta0naremarks = this.ta0Remark;
        ;
        // VISUAL INSPECTION TEST
        this.visualInspectionTest.ta0naremarks = this.ta0Remark;
        ;
        // PRE-COMMISSIONING TEST
        this.preCommissioningTest.ta0naremarks = this.ta0Remark;
        ;
        // SECONDARY POWER READING FROM PTE
        this.powerReadingTest.ta0naremarks = this.ta0Remark;
        ;
    };
    LpcTestListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lpc-test-list',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/deviceTestforms/lpc-test-list/lpc-test-list.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Test List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!--Not Applicable for all Start-->\n    <div>\n      <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>NOT APPLICABLE FOR ALL</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAllCommonRemarkDetails"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAllCommonRemarkDetails"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div *ngIf="showAllCommonRemarkDetails">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="ta0na" (ionChange)="commonNotApplication($event)" interface="popover">\n                <ion-option value="Y" [selected]="ta0na === \'Y\'">Yes</ion-option>\n                <ion-option value="N" [selected]="ta0na === \'N\'">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showContainRemak">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="ta0Remark" maxlength="40" type="text"\n                placeholder="Please Enter Remark" (keyup)="commonNotApplicationRemark()"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <!--Not Applicable for all End-->\n\n    <div *ngIf="showLabelMain">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER DATE & TIME</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n    </div>\n\n    <div *ngIf="showLabelCheck">\n      <ion-item-divider color="light">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER DATE & TIME</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n    </div>\n\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Meter Test Date</ion-label>\n          <!--  <ion-input id="remark" [readonly]="isReadonly" [(ngModel)]="ta0metertestdate"\n            type="text" placeholder="dd/MM/yyyy HH:mm.ss"></ion-input> -->\n        </ion-item>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="currentDate" [ngClass]="blackHighlightText">\n          </ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-datetime displayFormat="DD-MM-YYYY" [(ngModel)]="currentDate" [ngClass]="blackHighlightText">\n          </ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="item.json.worktype !== \'ZISR\' && item.json.worktype !== \'ZRCE\'">\n      <div *ngIf="showForCheckMeter">\n        <ion-item-divider color="light" class="pointer" (click)="showAccuracyTestSection(false)">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-icon name="flask"></ion-icon>&nbsp; <strong>ACCURACY TEST</strong>\n            </ion-col>\n            <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAccuracyTest"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAccuracyTest"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <div id="accuracyTest">\n          <ion-grid *ngIf="showAccuracyTest">\n            <ion-row>\n              <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Not Applicable</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-select [(ngModel)]="accuracyTest.loc_test_ta0na" (ionChange)="hideShowAccuracyTest()"\n                    interface="popover">\n                    <ion-option value="Y">Yes</ion-option>\n                    <ion-option value="N">No</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="accuracyTest.ta0na">\n              <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Remarks</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <!--<ion-item>\n                <ion-input id="remark" [(ngModel)]="accuracyTest.ta0naremarks" type="text" placeholder="Please Enter Remark" [ngClass]="(accuracyTest.ta0naremarks == \'\' || accuracyTest.ta0naremarks == undefined && !validate1) ? \'redHighlightText\' : \'blackHighlightText\'"></ion-input>\n              </ion-item>-->\n                <ion-item>\n                  <ion-textarea rows="4" id="remark" maxlength="40" (keyup)="remarksInput($event,\'AccuracyTest\')"\n                    [(ngModel)]="accuracyTest.ta0naremarks" placeholder="Please Enter Remark"\n                    [ngClass]="(accuracyTest.ta0naremarks == \'\' || accuracyTest.ta0naremarks == undefined && !validateAtRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <div *ngIf="!accuracyTest.ta0na">\n              <ion-row>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Test 1</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Test 2</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Test 3</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Average</ion-label>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input id="test1" [(ngModel)]="accuracyTest.ta0at_test1"\n                      (ionChange)="calculateAverageAccuracyTest()" type="text" (keyup)="onKeyUp($event,\'test1\')"\n                      placeholder="Please enter value" autocomplete="off" autocorrect="off" autocapitalize="off"\n                      spellcheck="false"\n                      [ngClass]="(accuracyTest.ta0at_test1 == \'\' || this.accuracyTest.ta0at_test1 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input id="test2" [(ngModel)]="accuracyTest.ta0at_test2"\n                      (ionChange)="calculateAverageAccuracyTest()" type="text" (keyup)="onKeyUp($event,\'test2\')"\n                      maxlength="13" placeholder="Please enter value"\n                      [ngClass]="(accuracyTest.ta0at_test2 == \'\' || this.accuracyTest.ta0at_test2 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input id="test3" [(ngModel)]="accuracyTest.ta0at_test3"\n                      (ionChange)="calculateAverageAccuracyTest()" type="text" (keyup)="onKeyUp($event,\'test3\')"\n                      maxlength="13" placeholder="Please enter value"\n                      [ngClass]="(accuracyTest.ta0at_test3 == \'\' || this.accuracyTest.ta0at_test3 == undefined && !validateAtTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-6 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-input id="average" [(ngModel)]="accuracyTest.ta0at_avg" type="text" readonly\n                      placeholder="Average Value"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n        <!-- replace ta0newvoltage to deviceVoltage for mixer. -->\n\n        <!-- {{ (versionType === \'E\'  && item.json.worktype === \'ZUDN\' && item.json.ta0installationvoltage >= 3) }}  --  {{ (versionType === \'N\' && item.json.worktype === \'ZUDN\' &&  deviceVoltage >= 3) }}  -- {{ (item.json.worktype !== \'ZUDN\' && deviceVoltage > 2)}} -->\n        <div *ngIf="showForCheckMeter">\n          <div\n            *ngIf="(versionType === \'E\' && item.json.worktype === \'ZUDN\' && deviceVoltage >= 3) || (versionType === \'N\' && item.json.worktype === \'ZUDN\' &&  deviceVoltage >= 3)  || (item.json.worktype !== \'ZUDN\' && deviceVoltage > 2)">\n            <ion-item-divider color="light" class="pointer" (click)="showVoltageReadingTestSection(false)">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-icon name="flask"></ion-icon>&nbsp; <strong>VOLTAGE READING & PH-ROTATION IN TERMINAL\n                    METER</strong>\n                </ion-col>\n                <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showVoltageReadingTest"></ion-icon>\n                  <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showVoltageReadingTest"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <div id="voltageReadingTest">\n              <ion-grid *ngIf="showVoltageReadingTest">\n                <ion-row>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Not Applicable</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-select [(ngModel)]="voltageReadingTest.loc_test_ta0na" (ionChange)="hideShowVoltageTest()"\n                        interface="popover">\n                        <ion-option value="Y">Yes</ion-option>\n                        <ion-option value="N">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf="voltageReadingTest.ta0na">\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Remarks</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <!--<ion-item>\n                  <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0naremarks" type="text" placeholder="Please Enter Remark" [ngClass]="(voltageReadingTest.ta0naremarks == \'\' || voltageReadingTest.ta0naremarks == undefined && !validateVrRemark) ? \'redHighlightText\' : \'blackHighlightText\'"></ion-input>\n                </ion-item>-->\n                    <ion-item>\n                      <ion-textarea rows="4" id="remark" maxlength="40" (keyup)="remarksInput($event,\'VoltageReading\')"\n                        [(ngModel)]="voltageReadingTest.ta0naremarks" type="text" placeholder="Please enter remark"\n                        [ngClass]="(voltageReadingTest.ta0naremarks == \'\' || voltageReadingTest.ta0naremarks == undefined && !validateVrRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <div *ngIf="!voltageReadingTest.ta0na">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary" *ngIf="showForMainMeter">Device Allocation Type: Main Meter\n                        </ion-label>\n                        <ion-label color="primary" *ngIf="!showForMainMeter">Device Allocation Type: Check Meter\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">RY</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_ry" type="text"\n                          (keyup)=" positiveValueInput($event,\'RY\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">YB</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_yb" type="text"\n                          (keyup)="positiveValueInput($event,\'YB\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">RB</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_rb" type="text"\n                          (keyup)="positiveValueInput($event,\'RB\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">RN</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_rn" type="text"\n                          (keyup)="positiveValueInput($event,\'RN\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">YN</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_yn" type="text"\n                          (keyup)="positiveValueInput($event,\'YN\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">BN</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_bn" type="text"\n                          (keyup)="positiveValueInput($event,\'BN\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">RE</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_re" type="text"\n                          (keyup)="positiveValueInput($event,\'RE\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">YE</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_ye" type="text"\n                          (keyup)="positiveValueInput($event,\'YE\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">BE</ion-label>\n                      </ion-item>\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0vr_be" type="text"\n                          (keyup)="positiveValueInput($event,\'BE\')" maxlength="11" placeholder="Please enter value">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Phase Rotation</ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-8 col-sm-8 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="remark" [(ngModel)]="voltageReadingTest.ta0ph_rotation" type="text"\n                          (keyup)="phRotationInput($event,\'Phrotation\')" maxlength="11"\n                          placeholder="Please enter value"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ion-grid>\n            </div>\n          </div>\n        </div>\n\n        <div\n          *ngIf="(versionType === \'E\' && item.json.worktype === \'ZUDN\' && deviceVoltage >= 3) || (versionType === \'N\' && item.json.worktype === \'ZUDN\' &&  deviceVoltage >= 3)  || (item.json.worktype !== \'ZUDN\' && deviceVoltage > 2)">\n          <div *ngIf="showForMainMeter">\n            <ion-item-divider color="light" class="pointer" (click)="showVisualInspectionTestSection(false)">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-icon name="flask"></ion-icon>&nbsp; <strong>VISUAL INSPECTION TEST</strong>\n                </ion-col>\n                <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showVisualInspectionTest"></ion-icon>\n                  <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showVisualInspectionTest"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <div id="visualInspectionTest">\n              <ion-grid *ngIf="showVisualInspectionTest">\n                <ion-row>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Not Applicable</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-select [(ngModel)]="visualInspectionTest.loc_test_ta0na"\n                        (ionChange)="hideShowVisualInsTest()" interface="popover">\n                        <ion-option value="Y">Yes</ion-option>\n                        <ion-option value="N">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf="visualInspectionTest.ta0na">\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Remarks</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <!--<ion-item>\n          <ion-input id="remark" [(ngModel)]="visualInspectionTest.ta0naremarks" type="text" placeholder="Please Enter Remark" [ngClass]="(visualInspectionTest.ta0naremarks == \'\' || visualInspectionTest.ta0naremarks == undefined && !validate2) ? \'redHighlightText\' : \'blackHighlightText\'"></ion-input>\n          </ion-item>-->\n                    <ion-item>\n                      <ion-textarea rows="4" id="remark" maxlength="40"\n                        (keyup)="remarksInput($event,\'VisualInspectionTest\')"\n                        [(ngModel)]="visualInspectionTest.ta0naremarks" type="text" placeholder="Please enter remark"\n                        [ngClass]="(visualInspectionTest.ta0naremarks == \'\' || visualInspectionTest.ta0naremarks == undefined && !validateViRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <div *ngIf="!visualInspectionTest.ta0na">\n                  <ion-list radio-group [(ngModel)]="visualInspectionTest.ta0vi_ct_polarity_label"\n                    style="margin-bottom: 0px;">\n                    <ion-row>\n                      <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item>\n                          <ion-label color="primary">CT Polarity Labelling</ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-6 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item\n                          [ngClass]="((visualInspectionTest.ta0vi_ct_polarity_label == \'\' || visualInspectionTest.ta0vi_ct_polarity_label == undefined) && !validateViTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                          <ion-label>Pass</ion-label>\n                          <ion-radio checked value="true"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-6 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item\n                          [ngClass]="((visualInspectionTest.ta0vi_ct_polarity_label == \'\' || visualInspectionTest.ta0vi_ct_polarity_label == undefined) && !validateViTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                          <ion-label>Fail</ion-label>\n                          <ion-radio value="false"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n\n                  <!--  {{ item.json.ta0installationvoltage }}  {{ deviceVoltage }} {{ item.json.worktype }} {{ deviceVoltage }} -->\n                  <div\n                    *ngIf="(versionType === \'E\'  && item.json.worktype === \'ZUDN\' && (item.json.ta0installationvoltage > 3 ) && (deviceVoltage > 3)) || (versionType === \'N\' && item.json.worktype === \'ZUDN\' &&  deviceVoltage > 3  && deviceVoltage > 3)  || (item.json.worktype !== \'ZUDN\' &&  deviceVoltage > 3 && deviceVoltage > 3)">\n                    <ion-list radio-group [(ngModel)]="visualInspectionTest.ta0vi_pt_polarity_label"\n                      style="margin-bottom: 0px;">\n                      <ion-row>\n                        <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label color="primary">PT Polarity Labelling</ion-label>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-6 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item\n                            [ngClass]="((visualInspectionTest.ta0vi_pt_polarity_label == \'\' || visualInspectionTest.ta0vi_pt_polarity_label == undefined) && !validateViTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                            <ion-radio checked value="true"></ion-radio>\n                            <ion-label>Pass</ion-label>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-6 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item\n                            [ngClass]="((visualInspectionTest.ta0vi_pt_polarity_label == \'\' || visualInspectionTest.ta0vi_pt_polarity_label == undefined) && !validateViTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                            <ion-radio value="false"></ion-radio>\n                            <ion-label>Fail</ion-label>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                    </ion-list>\n                  </div>\n                  <ion-row>\n                    <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Armoured Cable-Visible</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item\n                        [ngClass]="(visualInspectionTest.ta0vi_arm_cable_visible == \'\' || visualInspectionTest.ta0vi_arm_cable_visible == undefined && !validateViTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-select [(ngModel)]="visualInspectionTest.ta0vi_arm_cable_visible" interface="popover">\n                          <ion-option value="Cable Tray">Cable Tray</ion-option>\n                          <ion-option value="Trench">Trench</ion-option>\n                          <ion-option value="Floor Surface">Floor Surface</ion-option>\n                          <ion-option value="Meter Kiosk">Meter Kiosk</ion-option>\n                        </ion-select>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <div *ngIf="showConnSttPtCt">\n                    <ion-item-divider color="light">Connection State PT and CT (MVHV)</ion-item-divider>\n\n                    <ion-list radio-group>\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label color="primary">Is PT connected directly (\'direct\')? (MVHV)</ion-label>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label>Yes</ion-label>\n                            <ion-radio value="1"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label>No</ion-label>\n                            <ion-radio value="0"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                    </ion-list>\n                    <ion-list radio-group>\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label color="primary">Is CT connected directly (\'direct\')? (MVHV)</ion-label>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label>Yes</ion-label>\n                            <ion-radio value="1"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item>\n                            <ion-label>No</ion-label>\n                            <ion-radio value="0"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                    </ion-list>\n\n                    <ion-row>\n                      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item>\n                          <ion-label color="primary">PT & CT Location (MVHV)</ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item>\n                          <ion-input type="text" placeholder="Please Enter Location"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </div>\n\n              </ion-grid>\n            </div>\n\n            <ion-item-divider color="light" class="pointer" (click)="showPreCommissioningTestSection(false)">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-icon name="flask"></ion-icon>&nbsp; <strong>PRE-COMMISSIONING TEST</strong>\n                </ion-col>\n                <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showPreCommissioningTest"></ion-icon>\n                  <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showPreCommissioningTest"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <div id="preCommissioningTest">\n              <ion-grid *ngIf="showPreCommissioningTest">\n                <ion-row>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Not Applicable</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-select [(ngModel)]="preCommissioningTest.loc_test_ta0na" (ionChange)="hideShowPreCommTest()"\n                        interface="popover">\n                        <ion-option value="Y">Yes</ion-option>\n                        <ion-option value="N">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row *ngIf="preCommissioningTest.ta0na">\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Remarks</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <!--<ion-item>\n          <ion-input id="remark" [(ngModel)]="preCommissioningTest.ta0naremarks" type="text" placeholder="Please Enter Remark" [ngClass]="(preCommissioningTest.ta0naremarks == \'\' || preCommissioningTest.ta0naremarks == undefined && !validatePctRemark) ? \'redHighlightText\' : \'blackHighlightText\'"></ion-input>\n          </ion-item>-->\n                    <ion-item>\n                      <ion-textarea rows="4" id="remark" maxlength="40"\n                        (keyup)="remarksInput($event,\'PreCommissioningTest\')"\n                        [(ngModel)]="preCommissioningTest.ta0naremarks" type="text" placeholder="Please Enter Remark"\n                        [ngClass]="(preCommissioningTest.ta0naremarks == \'\' || preCommissioningTest.ta0naremarks == undefined && !validatePctRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <div *ngIf="!preCommissioningTest.ta0na">\n                  <!-- start yes Applicable Pre Commissioning Test -->\n                  <!-- applicable Heading -->\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n\n                    </ion-col>\n                    <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">R</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Y</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">B</ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <!-- 1st row  start -->\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item text-wrap style="height: 74%">\n                        <ion-label color="primary">Continuity Test From CT & PT to Kiosk</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_contctpt_r"\n                        [ngClass]="(preCommissioningTest.ta0pc_contctpt_r == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value=\'false\'></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_contctpt_y"\n                        [ngClass]="(preCommissioningTest.ta0pc_contctpt_y == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_contctpt_b"\n                        [ngClass]="(preCommissioningTest.ta0pc_contctpt_b == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                  </ion-row>\n                  <!-- 2nd Row start -->\n                  <ion-row>\n                    <ion-col text-wrap col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item text-wrap style="height: 74%">\n                        <ion-label color="primary">CT Ratio Test</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ctratio_r"\n                        [ngClass]="(preCommissioningTest.ta0pc_ctratio_r === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ctratio_y"\n                        [ngClass]="(preCommissioningTest.ta0pc_ctratio_y === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ctratio_b"\n                        [ngClass]="(preCommissioningTest.ta0pc_ctratio_b === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                  </ion-row>\n                  <!-- 2nd row end -->\n                  <!-- 3rd row start -->\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item text-wrap style="height: 74%">\n                        <ion-label color="primary">CT Polarity Test</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ctpolar_r"\n                        [ngClass]="(preCommissioningTest.ta0pc_ctpolar_r == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ctpolar_y"\n                        [ngClass]="(preCommissioningTest.ta0pc_ctpolar_y == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ctpolar_b"\n                        [ngClass]="(preCommissioningTest.ta0pc_ctpolar_b == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Pass</ion-label>\n                              <ion-radio value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item>\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-list>\n                    </ion-col>\n                  </ion-row>\n                  <!--  3rd row end -->\n                  <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_kio_wirg" style="margin-bottom: 0px;">\n                    <ion-row>\n                      <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item text-wrap style="height: 74%">\n                          <ion-label color="primary">Kiosk Wiring Continuity Test</ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item\n                              [ngClass]="(preCommissioningTest.ta0pc_kio_wirg == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                              <ion-label>Pass</ion-label>\n                              <ion-radio checked="1" value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item\n                              [ngClass]="(preCommissioningTest.ta0pc_kio_wirg == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n\n                  <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_s2_starerh" style="margin-bottom: 0px;">\n                    <ion-row>\n                      <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-item text-wrap style="height: 74%">\n                          <ion-label color="primary">S2 Star-earthed (TEST_BLOCK only)</ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item\n                              [ngClass]="(preCommissioningTest.ta0pc_s2_starerh == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                              <ion-label>Pass</ion-label>\n                              <ion-radio checked="1" value="true"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                        <ion-row>\n                          <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                            <ion-item\n                              [ngClass]="(preCommissioningTest.ta0pc_s2_starerh == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                              <ion-label>Fail</ion-label>\n                              <ion-radio value="false"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n\n                  <div\n                    *ngIf="(versionType === \'E\'  && item.json.worktype === \'ZUDN\' && deviceVoltage > 3 ) || (versionType === \'N\' && item.json.worktype === \'ZUDN\' &&  deviceVoltage > 3 )  || ( item.json.worktype !== \'ZUDN\'  && deviceVoltage > 3)">\n                    <!-- div *ngIf="deviceVoltage !== \'03\'" -->\n                    <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_ptpolar" style="margin-bottom: 0px;">\n                      <ion-row>\n                        <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item text-wrap style="height: 74%">\n                            <ion-label color="primary">PT Polarity Test (MVHV)</ion-label>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-row>\n                            <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                              <ion-item\n                                [ngClass]="(preCommissioningTest.ta0pc_ptpolar == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                                <ion-label>Pass</ion-label>\n                                <ion-radio checked="1" value="true"></ion-radio>\n                              </ion-item>\n                            </ion-col>\n                          </ion-row>\n                        </ion-col>\n                        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-row>\n                            <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                              <ion-item\n                                [ngClass]="(preCommissioningTest.ta0pc_ptpolar == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                                <ion-label>Fail</ion-label>\n                                <ion-radio value="false"></ion-radio>\n                              </ion-item>\n                            </ion-col>\n                          </ion-row>\n                        </ion-col>\n                      </ion-row>\n                    </ion-list>\n\n                    <ion-list radio-group [(ngModel)]="preCommissioningTest.ta0pc_nseaptpas"\n                      style="margin-bottom: 0px;">\n                      <ion-row>\n                        <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item text-wrap style="height: 74%">\n                            <ion-label color="primary">Neutral Star-Earthed at PT Primary and Secondary (MVHV)\n                            </ion-label>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item\n                            [ngClass]="(preCommissioningTest.ta0pc_nseaptpas == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                            <ion-label>Pass</ion-label>\n                            <ion-radio checked="1" value="true"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                          <ion-item\n                            [ngClass]="(preCommissioningTest.ta0pc_nseaptpas == undefined && !validatePctTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                            <ion-label>Fail</ion-label>\n                            <ion-radio value="false"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                    </ion-list>\n                  </div>\n\n                  <!-- end yes Applicable Pre Commissioning Test-->\n                </div>\n\n              </ion-grid>\n            </div>\n\n            <ion-item-divider color="light" class="pointer" (click)="showPowerReadingTestSection(false)">\n              <ion-row align-items-center>\n                <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-icon name="flask"></ion-icon>&nbsp; <strong>SECONDARY POWER READING FROM PTE</strong>\n                </ion-col>\n                <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n                  <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showPowerReadingTest"></ion-icon>\n                  <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showPowerReadingTest"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <div id="powerReadingTest">\n              <ion-grid *ngIf="showPowerReadingTest">\n                <ion-row>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Not Applicable</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-select [(ngModel)]="powerReadingTest.loc_test_ta0na" (ionChange)="hideShowPowerTest()"\n                        interface="popover">\n                        <ion-option value="Y">Yes</ion-option>\n                        <ion-option value="N">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf="powerReadingTest.ta0na">\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Remarks</ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-textarea rows="4" id="remark" (keyup)="remarksInput($event,\'PowerReading\')" maxlength="40"\n                        [(ngModel)]="powerReadingTest.ta0naremarks" type="text" placeholder="Please Enter Remark"\n                        [ngClass]="(powerReadingTest.ta0naremarks == \'\' || powerReadingTest.ta0naremarks == undefined && !validatePrRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      </ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <div *ngIf="!powerReadingTest.ta0na">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-3 style="word-wrap: break-all; padding-left: 5px;">\n                      <ion-item text-center>\n                        <ion-label color="primary"><strong>PH</strong></ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-12 col-sm-12 col-md-3 style="word-wrap: break-all; padding-left: 5px;">\n                      <ion-item text-center>\n                        <ion-label color="primary"><strong>Active</strong></ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-12 col-sm-12 col-md-3 style="word-wrap: break-all; padding-left: 5px;">\n                      <ion-item text-center>\n                        <ion-label color="primary"><strong>Reactive</strong></ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-12 col-sm-12 col-md-3 style="word-wrap: break-all; padding-left: 5px;">\n                      <ion-item text-center>\n                        <ion-label color="primary"><strong>PF</strong></ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Red</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phredactive" [(ngModel)]="powerReadingTest.ta0pr_active_r" type="text"\n                          (keyup)="onKeyUp($event,\'RedActive\')" maxlength="15" placeholder="Enter value"\n                          (ionChange)="calculateTotalPowerActive()"\n                          [ngClass]="(powerReadingTest.ta0pr_active_r == \'\' || powerReadingTest.ta0pr_active_r == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phredreactive" [(ngModel)]="powerReadingTest.ta0pr_reactive_r" type="text"\n                          (keyup)="onKeyUp($event,\'RedReactive\')" (ionChange)="calculateTotalPowerReactive()"\n                          maxlength="15" placeholder="Enter value"\n                          [ngClass]="(powerReadingTest.ta0pr_reactive_r == \'\' || powerReadingTest.ta0pr_reactive_r == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phredpf" [(ngModel)]="powerReadingTest.ta0pr_pf_r" type="text"\n                          (keyup)="onKeyUp($event,\'RedPf\')" maxlength="15" placeholder="Enter value"\n                          [ngClass]="(powerReadingTest.ta0pr_pf_r == \'\' || powerReadingTest.ta0pr_pf_r == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Yellow</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phyellowactive" [(ngModel)]="powerReadingTest.ta0pr_active_y" type="text"\n                          (keyup)="onKeyUp($event,\'YellowActive\')" maxlength="15" placeholder="Enter value"\n                          (ionChange)="calculateTotalPowerActive()"\n                          [ngClass]="(powerReadingTest.ta0pr_active_y == \'\' || powerReadingTest.ta0pr_active_y == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phyellowreactive" [(ngModel)]="powerReadingTest.ta0pr_reactive_y" type="text"\n                          (keyup)="onKeyUp($event,\'YellowReactive\')" maxlength="15" placeholder="Enter value"\n                          borderColumn (ionChange)="calculateTotalPowerReactive()"\n                          [ngClass]="(powerReadingTest.ta0pr_reactive_y == \'\' || powerReadingTest.ta0pr_reactive_y == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phyellowpf" [(ngModel)]="powerReadingTest.ta0pr_pf_y" type="text" maxlength="15"\n                          (keyup)="onKeyUp($event,\'YellowPf\')" placeholder="Enter value"\n                          [ngClass]="(powerReadingTest.ta0pr_pf_y == \'\' || powerReadingTest.ta0pr_pf_y == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Blue</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phblueactive" [(ngModel)]="powerReadingTest.ta0pr_active_b" type="text"\n                          (keyup)="onKeyUp($event,\'BlueActive\')" maxlength="15" placeholder="Enter value"\n                          (ionChange)="calculateTotalPowerActive()"\n                          [ngClass]="(powerReadingTest.ta0pr_active_b == \'\' || powerReadingTest.ta0pr_active_b == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phbluereactive" [(ngModel)]="powerReadingTest.ta0pr_reactive_b" type="text"\n                          (keyup)="onKeyUp($event,\'BlueReactvie\')" maxlength="15" placeholder="Enter value"\n                          (ionChange)="calculateTotalPowerReactive()"\n                          [ngClass]="(powerReadingTest.ta0pr_reactive_b == \'\' || powerReadingTest.ta0pr_reactive_b == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phbluepf" [(ngModel)]="powerReadingTest.ta0pr_pf_b" type="text"\n                          (keyup)="onKeyUp($event,\'BluePf\')" maxlength="15" placeholder="Enter value"\n                          [ngClass]="(powerReadingTest.ta0pr_pf_b == \'\' || powerReadingTest.ta0pr_pf_b == undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-label color="primary">Total</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phtotalactive" [(ngModel)]="powerReadingTest.ta0pr_active_total" maxlength="15"\n                          readonly></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phtotalreactive" [(ngModel)]="powerReadingTest.ta0pr_reactive_total"\n                          type="number" maxlength="15" readonly></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                      <ion-item>\n                        <ion-input id="phtotalpf" [(ngModel)]="powerReadingTest.ta0pr_pf_total"\n                          placeholder="Enter value" type="text" (keyup)="onKeyUp($event,\'totalPF\')" maxlength="15"\n                          [ngClass]="(powerReadingTest.ta0pr_pf_total === \'\' || powerReadingTest.ta0pr_pf_total === undefined && !validatePrTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                        </ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ion-grid>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- \n    Comment by Alip\n    Date    : 25/10/2018 \n    Reason  : OPC also have modem to show ping test.\n  -->\n    <!-- <div *ngIf="(versionType === \'E\'  && item.json.worktype === \'ZUDN\' && item.json.ta0installationvoltage >= 3) || (versionType === \'N\' && item.json.worktype === \'ZUDN\' &&  deviceVoltage >= 3)  || (item.json.worktype !== \'ZUDN\' && deviceVoltage > 0)"> -->\n    <div *ngIf="showPingTest">\n      <ion-item-divider color="light" class="pointer" (click)="showPingsTestSection(false)">\n        <ion-row align-items-center>\n          <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>PING TEST (MODEM)</strong>\n          </ion-col>\n          <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showPingsTest"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showPingsTest"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div id="pingTest">\n        <ion-grid *ngIf="showPingsTest">\n          <ion-row>\n            <ion-col col-6 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="pingTest.loc_test_ta0na" (ionChange)="hideShowPingTest()" interface="popover">\n                  <ion-option value="Y">Yes</ion-option>\n                  <ion-option value="N">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="pingTest.ta0na">\n            <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--<ion-item>\n                <ion-input id="remark" type="text" placeholder="Please Enter Remark"></ion-input>\n                </ion-item>-->\n              <ion-item>\n                <ion-textarea rows="4" id="remark" maxlength="40" (keyup)="remarksInput($event,\'PingTest\')"\n                  [(ngModel)]="pingTest.ta0naremarks" type="text" placeholder="Please Enter Remark"\n                  [ngClass]="(pingTest.ta0naremarks == \'\' || pingTest.ta0naremarks == undefined && !validatePgRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="!pingTest.ta0na">\n            <ion-list radio-group [(ngModel)]="pingTest.ta0pingtest" style="margin-bottom: 0px;">\n              <ion-row>\n                <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Ping Test</ion-label>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item\n                    [ngClass]="(pingTest.ta0pingtest == undefined && !validatePgTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Pass</ion-label>\n                    <ion-radio value="true"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item\n                    [ngClass]="(pingTest.ta0pingtest == undefined && !validatePgTest) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    <ion-label>Fail</ion-label>\n                    <ion-radio value="false"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </div>\n        </ion-grid>\n      </div>\n    </div>\n    <!-- </div> -->\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button round block mode="md" (click)="saveAllTest()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/deviceTestforms/lpc-test-list/lpc-test-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_vars__["a" /* GlobalVars */]])
    ], LpcTestListPage);
    return LpcTestListPage;
}());

//# sourceMappingURL=lpc-test-list.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpcTestListPageModule", function() { return LpcTestListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lpc_test_list__ = __webpack_require__(1069);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LpcTestListPageModule = /** @class */ (function () {
    function LpcTestListPageModule() {
    }
    LpcTestListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lpc_test_list__["a" /* LpcTestListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__lpc_test_list__["a" /* LpcTestListPage */]),
            ],
        })
    ], LpcTestListPageModule);
    return LpcTestListPageModule;
}());

//# sourceMappingURL=lpc-test-list.module.js.map

/***/ })

});
//# sourceMappingURL=31.js.map