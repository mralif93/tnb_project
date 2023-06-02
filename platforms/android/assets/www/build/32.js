webpackJsonp([32],{

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LpcMvhvInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
 * Generated class for the LpcMvhvInspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LpcMvhvInspectPage = /** @class */ (function () {
    function LpcMvhvInspectPage(navCtrl, gf, params, navParams, toastCtrl, platform, appCtrl, loadingCtrl, dataService, gv, jsonStore, alertCtrl) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.params = params;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.gv = gv;
        this.jsonStore = jsonStore;
        this.alertCtrl = alertCtrl;
        this.check = false;
        this.validateRemark1 = true;
        this.validateTest1 = true;
        this.validateRemark2 = true;
        this.validateTest2 = true;
        this.validateRemark3 = true;
        this.validateTest3 = true;
        this.validateRemark4 = true;
        this.validateTest4 = true;
        this.validateRemark5 = true;
        this.validateTest5 = true;
        this.validateRemark6 = true;
        this.validateTest6 = true;
        this.validateRemark7 = true;
        this.validateTest7 = true;
        this.validateRemark8 = true;
        this.validateTest8 = true;
        this.validateRemark9 = true;
        this.validateTest9 = true;
        this.validationNegVal = true;
        this.buttonSaveMVHV = false; // For disable save button when invalid char value output occur
        this.showMainMeter = false;
        // Variables MvHv Calculation
        this.totalCheckPulseConnection = 0;
        this.checkPulseConnectionArray = [];
        this.pulse = 0;
        this.sum = 0;
        this.showCheckPulse = false;
        // Hide/Show Section
        this.showMeterDateTimeTest = true;
        this.showVoltageTest = true;
        this.showEnergyTest = true;
        this.showSprTest = true;
        this.showPowerValTest = true;
        this.showRegisterTest = true;
        this.showLedTest = true;
        this.showReportTest = true;
        this.showAccErrTest = true;
        // Common Not Applicable...
        this.ta0na = 'N';
        this.showAllCommonRemarkDetails = true;
        this.showContainRemak = false;
        this.pt = 0;
        this.ctRatio = 0;
        // two parameter created for display ct and pt ratio only for display. for example 120/5 
        this.ctRatioDisplay = 0;
        this.ptRatioDisplay = 0;
        this.valueDivide = 0;
        this.enterRed = false;
        this.enterYellow = false;
        this.enterBlue = false;
        this.item = this.navParams.data;
        this.isReadonly = true;
        this.itemOri = this.params.get("paramObj");
        this.fIndex = this.params.get("fIndex");
        this.maIndex = this.params.get("maIndex");
        // Clone the data
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
        if (typeof (this.item.json.ta0feeder) !== "undefined" && this.item.json.ta0feeder !== "undefined") {
            // Collection devices. (15-01-2019)
            var countVal = 0;
            var ptValBoo = false;
            var ctValBoo = false;
            var devices = [];
            var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
            if (typeof (feeder) !== "undefined") {
                // for (var i = 0; i < feeder.length; i++) {
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci) !== "undefined") {
                    var multiassetlocci = this.item.json.ta0feeder[this.fIndex].multiassetlocci;
                    for (var m = 0; m < multiassetlocci.length; m++) {
                        devices.push(multiassetlocci[m]);
                        if (multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && !ptValBoo) {
                            if (multiassetlocci[m].hasOwnProperty("ta0registers")) {
                                if (typeof (multiassetlocci[m].ta0registers) !== "undefined" || multiassetlocci[m].ta0registers !== "undefined" || multiassetlocci[m].ta0registers !== null || multiassetlocci[m].ta0registers !== "") {
                                    // Getting value from ta0registers
                                    if (multiassetlocci[m].ta0registers[1].hasOwnProperty("ta0transformervoltage") && multiassetlocci[m].ta0registers[0].hasOwnProperty("ta0transformervoltage")) {
                                        var prefixVal = 0;
                                        var postfixVal = 0;
                                        if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '01') {
                                            prefixVal = multiassetlocci[m].ta0registers[1].ta0transformervoltage;
                                        }
                                        else if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '02') {
                                            postfixVal = multiassetlocci[m].ta0registers[1].ta0transformervoltage;
                                        }
                                        if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '01') {
                                            prefixVal = multiassetlocci[m].ta0registers[0].ta0transformervoltage;
                                        }
                                        else if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '02') {
                                            postfixVal = multiassetlocci[m].ta0registers[0].ta0transformervoltage;
                                        }
                                        this.ptRatioDisplay = prefixVal + "/" + postfixVal;
                                        this.pt = Number(prefixVal / postfixVal);
                                        //this.items.json.currentRatio = this.currentRatio;
                                        countVal++;
                                        ptValBoo = true;
                                        if (countVal === 2)
                                            break;
                                    }
                                }
                            }
                        }
                        else if (multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && !ctValBoo) {
                            if (multiassetlocci[m].hasOwnProperty("ta0registers")) {
                                if (typeof (multiassetlocci[m].ta0registers) !== "undefined" || multiassetlocci[m].ta0registers !== "undefined" || multiassetlocci[m].ta0registers !== null || multiassetlocci[m].ta0registers !== "") {
                                    // Getting value from ta0registers
                                    if (multiassetlocci[m].ta0registers[1].hasOwnProperty("ta0transformercurrent") && multiassetlocci[m].ta0registers[0].hasOwnProperty("ta0transformercurrent")) {
                                        var prefixVal = 0;
                                        var postfixVal = 0;
                                        if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '01') {
                                            prefixVal = multiassetlocci[m].ta0registers[1].ta0transformercurrent;
                                        }
                                        else if (multiassetlocci[m].ta0registers[1].ta0windingnumber === '02') {
                                            postfixVal = multiassetlocci[m].ta0registers[1].ta0transformercurrent;
                                        }
                                        if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '01') {
                                            prefixVal = multiassetlocci[m].ta0registers[0].ta0transformercurrent;
                                        }
                                        else if (multiassetlocci[m].ta0registers[0].ta0windingnumber === '02') {
                                            postfixVal = multiassetlocci[m].ta0registers[0].ta0transformercurrent;
                                        }
                                        this.ctRatioDisplay = prefixVal + "/" + postfixVal;
                                        this.ctRatio = Number(prefixVal / postfixVal);
                                        //this.items.json.currentRatio = this.currentRatio;
                                        countVal++;
                                        ctValBoo = true;
                                        if (countVal === 2)
                                            break;
                                    }
                                }
                            }
                        }
                    }
                }
                // }
            }
            /*  var device = devices.filter((items) => {
               return (items.ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_PT);
             });
       
             if (device.length > 0) {
               // Finding ta0registers
               for (var i = 0; i < device.length; i++) {
                 // Checking attribute ta0registers
                 if (device[i].hasOwnProperty("ta0registers")) {
                   if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
                     // Getting value from ta0registers
                     if (device[i].ta0registers[1].hasOwnProperty("ta0transformervoltage") && device[i].ta0registers[0].hasOwnProperty("ta0transformervoltage")) {
                       this.pt = device[i].ta0registers[1].ta0transformercurrent + "/" + device[i].ta0registers[0].ta0transformercurrent;
                       //this.items.json.currentRatio = this.currentRatio;
                       break;
                     }
                   }
                 }
               }
             } */
        }
        console.log(JSON.stringify(this.item));
        this.showMeterDateTime = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showVoltage = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showEnergy = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showSpr = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showSprAcct = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showPowerVal = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showRegister = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showLed = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showReport = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showReportTNHT = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showReportPTED = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showReportTHGD = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showAccErr = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.showAccErrf = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        switch (this.allocationType) {
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_FEEDER_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_FEEDER_METER: {
                console.log("Main Meter Section...");
                this.showMainMeter = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_FEEDER_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
                console.log("Check Meter Section...");
                this.showMainMeter = false;
                break;
            }
        }
        var testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail;
        // Checking Check Meter Section
        // Reading Meter Type for Check Pulse Connection.
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== "undefined") {
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype) !== "undefined") {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_METER) {
                    this.showCheckPulse = true;
                }
                else {
                    this.showCheckPulse = false;
                }
            }
            else {
                this.showCheckPulse = false;
            }
        }
        else {
            this.showCheckPulse = false;
        }
        // Read ta0testdetail if exist
        if (testdetail !== undefined && testdetail !== null && testdetail !== "") {
            console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail) !== "undefined" &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== null &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail !== "") {
                // Get Total Length of Array
                //console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
                for (var i = 0; i < testLength; i++) {
                    var ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
                    var type = ta0testdetail.ta0testtype;
                    var applicable = ta0testdetail.ta0na;
                    console.log("TYPE: " + type);
                    switch (type) {
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MDTT: {
                            this.showMeterDateTime = ta0testdetail;
                            if (applicable == true) {
                                this.showMeterDateTime.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showMeterDateTime.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT: {
                            this.showVoltage = ta0testdetail;
                            if (applicable == true) {
                                this.showVoltage.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showVoltage.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_SRET: {
                            this.showEnergy = ta0testdetail;
                            if (applicable == true) {
                                this.showEnergy.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showEnergy.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE: {
                            this.showSpr = ta0testdetail;
                            if (applicable == true) {
                                this.showSpr.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showSpr.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT: {
                            this.showSprAcct = ta0testdetail;
                            if (applicable == true) {
                                this.showSpr.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showSpr.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PWCT: {
                            this.showPowerVal = ta0testdetail;
                            if (applicable == true) {
                                this.showPowerVal.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showPowerVal.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REGT: {
                            this.showRegister = ta0testdetail;
                            if (applicable == true) {
                                this.showRegister.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showRegister.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_LEDT: {
                            this.showLed = ta0testdetail;
                            if (applicable == true) {
                                this.showLed.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showLed.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MHMV: {
                            this.showReport = ta0testdetail;
                            if (applicable == true) {
                                this.showReport.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showReport.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TNHT: {
                            this.showReportTNHT = ta0testdetail;
                            if (applicable == true) {
                                this.showReport.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showReport.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PTED: {
                            this.showReportPTED = ta0testdetail;
                            if (applicable == true) {
                                this.showReport.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showReport.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_THGD: {
                            this.showReportTHGD = ta0testdetail;
                            if (applicable == true) {
                                this.showReport.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showReport.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATIB: {
                            this.showAccErr = ta0testdetail;
                            if (applicable == true) {
                                this.showAccErr.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showAccErr.loc_test_ta0na = "N";
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATIA: {
                            this.showAccErrf = ta0testdetail;
                            if (applicable == true) {
                                this.showAccErr.loc_test_ta0na = "Y";
                            }
                            else {
                                this.showAccErr.loc_test_ta0na = "N";
                            }
                            break;
                        }
                    } // end switch
                } // end for
            }
        }
        else {
            // Set ta0na = true as default for display test form
            // this.showMeterDateTime.ta0na = true;
            // this.showVoltage.ta0na = true;
            // this.showEnergy.ta0na = true;
            // this.showSpr.ta0na = true;
            // this.showPowerVal.ta0na = true;
            // this.showRegister.ta0na = true;
            // this.showLed.ta0na = true;
            // this.showReport.ta0na = true;
            // this.showAccErr.ta0na = true;
        } // end if
        // Set default is zero
        this.showRegister.loc_ta0reg_pcireadtotal = 0;
        /**
         * changing check pulse connection logic.. comments below method by shankar at 24 Sep 2018
         * @depreated
         */
        // Checking feeder for calculation 'Check Pulse Connection' calculation
        /*  if (Number(this.item.json.ta0feeder.length) > 0) {
           this.checkPulseConnectionArray = new Array(Number(this.item.json.ta0feeder.length));
           console.log("Total Feeder: " + this.item.json.ta0feeder.length);
           for (var i = 0; i < this.item.json.ta0feeder.length; i++) {
             this.checkPulseConnectionArray[i] = { "ta0reg_pciread2": null };
           }
         } */
        // New method 
        if (Number(this.item.json.ta0feeder.length) > 0) {
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0summationqty) !== 'undefined' &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0summationqty !== '') {
                var ta0summationqty = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0summationqty;
                ta0summationqty++;
                if (ta0summationqty > 0) {
                    this.checkPulseConnectionArray = new Array(Number(ta0summationqty));
                    console.log("Total Feeder: " + this.item.json.ta0feeder.length);
                    for (var i = 0; i < ta0summationqty; i++) {
                        this.checkPulseConnectionArray[i] = { "ta0reg_pciread2": '' };
                    }
                }
            }
        }
        if (testdetail !== undefined && testdetail !== null && testdetail !== "") {
            for (var i = 0; i < testdetail.length; i++) {
                if (testdetail[i].ta0testtype == __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REGT) {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pciread) !== 'undefined') {
                        this.showRegister.ta0reg_pciread = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pciread));
                    }
                    else {
                        this.showRegister.ta0reg_pciread = 0;
                    }
                    if (typeof (testdetail[i].ta0reg_pciread2) !== 'undefined' && typeof (testdetail[i].ta0reg_pcireadings) !== 'undefined') {
                        this.showRegister.loc_ta0reg_pcireadtotal = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pciread2));
                        this.saveReading = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i].ta0reg_pcireadings));
                        if (typeof (this.checkPulseConnectionArray[0]) !== "undefined") {
                            this.checkPulseConnectionArray[0].ta0reg_pciread2 = this.showRegister.ta0reg_pciread;
                            this.showRegister.loc_ta0reg_pcireadtotal = Number(this.showRegister.loc_ta0reg_pcireadtotal) + Number(this.checkPulseConnectionArray[0].ta0reg_pciread2);
                        }
                        this.checkReading = this.saveReading.split(",");
                        console.log("READING: " + this.showRegister.ta0reg_pciread);
                        console.log("SUM: " + this.showRegister.loc_ta0reg_pcireadtotal);
                        console.log("SAVING: " + this.saveReading);
                        for (var k = 1; k < this.checkPulseConnectionArray.length; k++) {
                            console.log("DISPLAY (" + k + "): " + this.checkReading[k]);
                            this.checkPulseConnectionArray[k].ta0reg_pciread2 = this.checkReading[k];
                        }
                    }
                    else {
                        this.showRegister.loc_ta0reg_pcireadtotal = this.showRegister.ta0reg_pciread;
                        if (typeof (this.checkPulseConnectionArray[0]) !== "undefined") {
                            this.checkPulseConnectionArray[0].ta0reg_pciread2 = this.showRegister.ta0reg_pciread;
                        }
                    }
                }
            }
        }
        //console.log("DATA: " + JSON.stringify(this.item));
        //console.log("INFO: " + this.validateMainCurrentRed);
        //end ika
        this.showMeterDateTime.ta0md_meterdatetime = __WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY-MM-DD[T]HH:mm:ss.SSS');
        console.log(this.showMeterDateTime.ta0md_meterdatetime);
        /**
         * Created : Ameer
         * Date : 10/12/2018
         * Assign Value for tranformation factor
         * Edited: Alif
         * Reason: Temporary Auto Calculate for Transformation Factor
         */
        //this.showSpr.ta0pr_transformationfactor = this.ctRatio * this.pt;
        this.calculateTransformerRatio();
        /*   var year = moment().add('year', 5).format('YYYY');
          var settingDateMonth = '-12-31'; */
        /*  var currentDate = +year + settingDateMonth;
         console.log(currentDate);
         var newDateCurrentDate = moment(currentDate, 'YYYY-MM-DD').add('year', 5);
         console.log('New current Date is: ', +newDateCurrentDate);
         var day = newDateCurrentDate.format('DD');
         var month = newDateCurrentDate.format('MM');
         var year = newDateCurrentDate.format('YYYY');
         console.log('Day is: ', +day);
         console.log('Month is: ', +month);
         console.log('Year is: ', +year) */
    }
    LpcMvhvInspectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LpcMvhvInspectPage');
    };
    LpcMvhvInspectPage.prototype.hideShowMeterDateTime = function () {
        console.log('came inside to hideShowMeterDateTime ..' + this.showMeterDateTime.loc_test_ta0na);
        if (this.showMeterDateTime.loc_test_ta0na == 'Y') {
            this.showMeterDateTime = {};
            this.showMeterDateTime.loc_test_ta0na = 'Y';
            this.showMeterDateTime.ta0na = true;
            this.showMeterDateTime.ta0naremarks = null;
        }
        else {
            this.showMeterDateTime = {};
            this.showMeterDateTime.loc_test_ta0na = 'N';
            this.showMeterDateTime.ta0na = false;
        }
    };
    // start popup applicable
    LpcMvhvInspectPage.prototype.hideShowVoltageTest = function () {
        console.log('came inside to hideShowVoltageTest ..' + this.showVoltage.loc_test_ta0na);
        if (this.showVoltage.loc_test_ta0na == 'Y') {
            this.showVoltage = {};
            this.showVoltage.loc_test_ta0na = 'Y';
            this.showVoltage.ta0na = true;
            this.showVoltage.ta0naremarks = null;
        }
        else {
            this.showVoltage = {};
            this.showVoltage.loc_test_ta0na = 'N';
            this.showVoltage.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowEnergyTest = function () {
        console.log('came inside to hideShowEnergyTest ..' + this.showEnergy.loc_test_ta0na);
        if (this.showEnergy.loc_test_ta0na == 'Y') {
            this.showEnergy = {};
            this.showEnergy.loc_test_ta0na = "Y";
            this.showEnergy.ta0na = true;
            this.showEnergy.ta0naremarks = null;
        }
        else {
            this.showEnergy = {};
            this.showEnergy.loc_test_ta0na = 'N';
            this.showEnergy.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowSprTest = function () {
        console.log('came inside to hideShowSprTest ..' + this.showSpr.loc_test_ta0na);
        if (this.showSpr.loc_test_ta0na == 'Y') {
            this.showSpr = {};
            this.showSpr.loc_test_ta0na = 'Y';
            this.showSpr.ta0na = true;
            this.showSpr.ta0naremarks = null;
        }
        else {
            this.showSpr = {};
            this.showSpr.loc_test_ta0na = 'N';
            this.showSpr.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowPowerValTest = function () {
        console.log('came inside to hideShowPowerValTest ..' + this.showPowerVal.loc_test_ta0na);
        if (this.showPowerVal.loc_test_ta0na == 'Y') {
            this.showPowerVal = {};
            this.showPowerVal.loc_test_ta0na = 'Y';
            this.showPowerVal.ta0na = true;
            this.showPowerVal.ta0naremarks = null;
        }
        else {
            this.showPowerVal = {};
            this.showPowerVal.loc_test_ta0na = 'N';
            this.showPowerVal.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowRegisterTest = function () {
        console.log('came inside to hideShowRegisterTest ..' + this.showRegister.loc_test_ta0na);
        if (this.showRegister.loc_test_ta0na == 'Y') {
            this.showRegister = {};
            this.showRegister.loc_test_ta0na = 'Y';
            this.showRegister.ta0na = true;
            this.showRegister.ta0naremarks = null;
        }
        else {
            this.showRegister = {};
            this.showRegister.loc_test_ta0na = 'N';
            this.showRegister.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowLedTest = function () {
        console.log('came inside to hideShowMeterLedTest ..' + this.showLed.loc_test_ta0na);
        if (this.showLed.loc_test_ta0na == 'Y') {
            this.showLed = {};
            this.showLed.loc_test_ta0na = 'Y';
            this.showLed.ta0na = true;
            this.showLed.ta0naremarks = null;
        }
        else {
            this.showLed = {};
            this.showLed.loc_test_ta0na = 'N';
            this.showLed.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowReportTest = function () {
        console.log('came inside to hideShowReportTest ..' + this.showReport.loc_test_ta0na);
        if (this.showReport.loc_test_ta0na == 'Y') {
            this.showReport = {};
            this.showReport.loc_test_ta0na = 'Y';
            this.showReport.ta0na = true;
            this.showReport.ta0naremarks = null;
        }
        else {
            this.showReport = {};
            this.showReport.loc_test_ta0na = 'N';
            this.showReport.ta0na = false;
        }
    };
    LpcMvhvInspectPage.prototype.hideShowAccErrTest = function () {
        console.log('came inside to hideShowAccErrTest ..' + this.showAccErr.loc_test_ta0na);
        if (this.showAccErr.loc_test_ta0na == 'Y') {
            this.showAccErr = {};
            this.showAccErr.loc_test_ta0na = 'Y';
            this.showAccErr.ta0na = true;
            this.showAccErr.ta0naremarks = null;
        }
        else {
            this.showAccErr = {};
            this.showAccErr.loc_test_ta0na = 'N';
            this.showAccErr.ta0na = false;
        }
    };
    // end popup applicable
    //for popup validation - ika
    //function validate - ika
    LpcMvhvInspectPage.prototype.validateData = function () {
        this.check = true;
        console.log("Data Validation Section..");
        if (this.showMeterDateTime.loc_test_ta0na == "Y") {
            console.log("Notification Meter & DateTime..");
            this.validateRemark1 = true;
            if (this.showMeterDateTime.ta0naremarks == '' || this.showMeterDateTime.ta0naremarks == undefined) {
                this.displayMessageToast("Remarks");
                this.validateRemark1 = false;
                this.check = false;
            }
        }
        else {
            console.log("Notification Meter & DateTime Test");
            this.validateTest1 = true;
            if (this.showMeterDateTime.ta0md_meterdatetime == '' || this.showMeterDateTime.ta0md_meterdatetime == undefined) {
                this.displayMessageToast("Actual Time");
                this.validateTest1 = false;
                this.check = false;
            }
            else if (this.showMeterDateTime.ta0md_meterdatetime == '' || this.showMeterDateTime.ta0md_meterdatetime == undefined) {
                this.displayMessageToast("Date");
                this.validateTest1 = false;
                this.check = false;
            }
        }
        if (this.showMainMeter == true) {
            if (this.showVoltage.loc_test_ta0na == "Y") {
                console.log("Notification Voltage Reading & Current..");
                this.validateRemark2 = true;
                if (this.showVoltage.ta0naremarks == '' || this.showVoltage.ta0naremarks == undefined) {
                    this.displayMessageToast("Remarks");
                    this.validateRemark2 = false;
                    this.check = false;
                }
            }
            else {
                console.log("Notification Voltage Reading & Current Test");
                this.validateTest2 = true;
                if (this.showVoltage.ta0vr_ry == '' || this.showVoltage.ta0vr_ry == undefined) {
                    this.displayMessageToast("RY");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_yb == '' || this.showVoltage.ta0vr_yb == undefined) {
                    this.displayMessageToast("YB");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_rb == '' || this.showVoltage.ta0vr_rb == undefined) {
                    this.displayMessageToast("RB");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_rn == '' || this.showVoltage.ta0vr_rn == undefined) {
                    this.displayMessageToast("RN");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_yn == '' || this.showVoltage.ta0vr_yn == undefined) {
                    this.displayMessageToast("YN");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_bn == '' || this.showVoltage.ta0vr_bn == undefined) {
                    this.displayMessageToast("BN");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_re == '' || this.showVoltage.ta0vr_re == undefined) {
                    this.displayMessageToast("RE");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_ye == '' || this.showVoltage.ta0vr_ye == undefined) {
                    this.displayMessageToast("YE");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_ne == '' || this.showVoltage.ta0vr_ne == undefined) {
                    this.displayMessageToast("NE");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0ph_rotation == '' || this.showVoltage.ta0ph_rotation == undefined) {
                    this.displayMessageToast("Phase Rotation");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_sg_ir == '' || this.showVoltage.ta0vr_sg_ir == undefined) {
                    this.displayMessageToast("Current Red");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_sg_iy == '' || this.showVoltage.ta0vr_sg_iy == undefined) {
                    this.displayMessageToast("Current Yellow");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_sg_ib == '' || this.showVoltage.ta0vr_sg_ib == undefined) {
                    this.displayMessageToast("Current Blue");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_sg_ctratio_n == '' || this.showVoltage.ta0vr_sg_ctratio_n == undefined) {
                    this.displayMessageToast("Switchgear");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_sg_ctratio_d == '' || this.showVoltage.ta0vr_sg_ctratio_d == undefined) {
                    this.displayMessageToast("F1");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_pte_ir == '' || this.showVoltage.ta0vr_pte_ir == undefined) {
                    this.displayMessageToast("Portable test Red");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_pte_iy == '' || this.showVoltage.ta0vr_pte_iy == undefined) {
                    this.displayMessageToast("Portable test Yellow");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_pte_ib == '' || this.showVoltage.ta0vr_pte_ib == undefined) {
                    this.displayMessageToast("Portable test Blue");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_pte_ctratio_n == '' || this.showVoltage.ta0vr_pte_ctratio_n == undefined) {
                    this.displayMessageToast("Metering");
                    this.validateTest2 = false;
                    this.check = false;
                }
                else if (this.showVoltage.ta0vr_pte_ctratio_d == '' || this.showVoltage.ta0vr_pte_ctratio_d == undefined) {
                    this.displayMessageToast("F1");
                    this.validateTest2 = false;
                    this.check = false;
                }
            }
        }
        if (this.showEnergy.loc_test_ta0na == "Y") {
            console.log("Notification Energy Reading Recorded By Meter");
            this.validateRemark3 = true;
            if (this.showEnergy.ta0naremarks == '' || this.showEnergy.ta0naremarks == undefined) {
                this.displayMessageToast("Remarks");
                this.validateRemark3 = false;
                this.check = false;
            }
        }
        else {
            console.log("Notification Energy Reading Recorded By Meter Test");
            this.validateTest3 = true;
            if (this.showMainMeter == true) {
                if (this.showEnergy.ta0er_starttime == '' || this.showEnergy.ta0er_starttime == undefined) {
                    this.displayMessageToast("Start Time");
                    this.validateTest3 = false;
                    this.check = false;
                }
                else if (this.showEnergy.ta0er_endtime == '' || this.showEnergy.ta0er_endtime == undefined) {
                    this.displayMessageToast("End Time");
                    this.validateTest3 = false;
                    this.check = false;
                }
            }
            if (this.showEnergy.ta0er_registercode == '' || this.showEnergy.ta0er_registercode == undefined) {
                this.displayMessageToast("Code");
                this.validateTest3 = false;
                this.check = false;
            }
            else if (this.showEnergy.ta0er_readingafter == '' || this.showEnergy.ta0er_readingafter == undefined) {
                this.displayMessageToast("Final Reading");
                this.validateTest3 = false;
                this.check = false;
            }
            else if (this.showEnergy.ta0er_readingbefore == '' || this.showEnergy.ta0er_readingbefore == undefined) {
                this.displayMessageToast("Initial Reading");
                this.validateTest3 = false;
                this.check = false;
            }
            else if (this.showEnergy.ta0er_rf == '' || this.showEnergy.ta0er_rf == undefined) {
                this.displayMessageToast("RF");
                this.validateTest3 = false;
                this.check = false;
            }
            else if (this.showEnergy.ta0er_mf == '' || this.showEnergy.ta0er_mf == undefined) {
                this.displayMessageToast("MF");
                this.validateTest3 = false;
                this.check = false;
            }
        }
        if (this.showMainMeter == true) {
            if (this.showSpr.loc_test_ta0na == "Y") {
                console.log("Notification Secondary Power Reading from Portable Test Equipment");
                this.validateRemark4 = true;
                if (this.showSpr.ta0naremarks == '' || this.showSpr.ta0naremarks == undefined) {
                    this.displayMessageToast("Remarks");
                    this.validateRemark4 = false;
                    this.check = false;
                }
            }
            else {
                console.log("Notification Secondary Power Reading from Portable Test Equipment Test");
                this.validateTest4 = true;
                if (this.showSpr.ta0pr_active_r == '' || this.showSpr.ta0pr_active_r == undefined) {
                    this.displayMessageToast("Red Active");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_reactive_r == '' || this.showSpr.ta0pr_reactive_r == undefined) {
                    this.displayMessageToast("Red Reactive");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_pf_r == '' || this.showSpr.ta0pr_pf_r == undefined) {
                    this.displayMessageToast("Red PF");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_active_y == '' || this.showSpr.ta0pr_active_y == undefined) {
                    this.displayMessageToast("Yellow Active");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_reactive_y == '' || this.showSpr.ta0pr_reactive_y == undefined) {
                    this.displayMessageToast("Yellow Reactive");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_pf_y == '' || this.showSpr.ta0pr_pf_y == undefined) {
                    this.displayMessageToast("Yellow PF");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_active_b == '' || this.showSpr.ta0pr_active_b == undefined) {
                    this.displayMessageToast("Blue Active");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_reactive_b == '' || this.showSpr.ta0pr_reactive_b == undefined) {
                    this.displayMessageToast("Blue Reactive");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSpr.ta0pr_pf_b == '' || this.showSpr.ta0pr_pf_b == undefined) {
                    this.displayMessageToast("Blue PF");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSprAcct.ta0at_test1 == '' || this.showSprAcct.ta0at_test1 == undefined) {
                    this.displayMessageToast("First");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSprAcct.ta0at_test2 == '' || this.showSprAcct.ta0at_test2 == undefined) {
                    this.displayMessageToast("Second");
                    this.validateTest4 = false;
                    this.check = false;
                }
                else if (this.showSprAcct.ta0at_test3 == '' || this.showSprAcct.ta0at_test3 == undefined) {
                    this.displayMessageToast("Third");
                    this.validateTest4 = false;
                    this.check = false;
                }
            }
            if (this.showPowerVal.loc_test_ta0na == "Y") {
                console.log("Notification Power Value Difference Among PTE (P0), Meter (P1&P2) and Calculation (P3)");
                this.validateRemark5 = true;
                if (this.showPowerVal.ta0naremarks == '' || this.showPowerVal.ta0naremarks == undefined) {
                    this.displayMessageToast("Remarks");
                    this.validateRemark5 = false;
                    this.check = false;
                }
            }
            else {
                console.log("Notification Power Value Difference Among PTE (P0), Meter (P1&P2) and Calculation (P3) Test");
                this.validateTest5 = true;
                if (this.showPowerVal.ta0pwc_usage == '' || this.showPowerVal.ta0pwc_usage == undefined) {
                    this.displayMessageToast("Usage kWh, A");
                    this.validateTest5 = false;
                    this.check = false;
                }
                else if (this.showPowerVal.ta0pwc_nexthour == '' || this.showPowerVal.ta0pwc_nexthour == undefined) {
                    this.displayMessageToast("Duration (Hour), B");
                    this.validateTest5 = false;
                    this.check = false;
                }
                else if (this.showPowerVal.ta0pwc_metereddemand == '' || this.showPowerVal.ta0pwc_metereddemand == undefined) {
                    this.displayMessageToast("P2 = Metered Demand");
                    this.validateTest5 = false;
                    this.check = false;
                }
                else if (this.showPowerVal.ta0pwc_avgvoltage == '' || this.showPowerVal.ta0pwc_avgvoltage == undefined) {
                    this.displayMessageToast("Average Voltage, V");
                    this.validateTest5 = false;
                    this.check = false;
                }
                else if (this.showPowerVal.ta0pwc_avgamps == '' || this.showPowerVal.ta0pwc_avgamps == undefined) {
                    this.displayMessageToast("Average Amps, I");
                    this.validateTest5 = false;
                    this.check = false;
                }
                else if (this.showPowerVal.ta0pwc_avgpf == '' || this.showPowerVal.ta0pwc_avgpf == undefined) {
                    this.displayMessageToast("Average PF, Cos 0");
                    this.validateTest5 = false;
                    this.check = false;
                }
                else if (this.showPowerVal.ta0pwc_p3 == '' || this.showPowerVal.ta0pwc_p3 == undefined) {
                    this.displayMessageToast("P3 = /3 VI Cos 0 ");
                    this.validateTest5 = false;
                    this.check = false;
                }
            }
        }
        if (this.showRegister.loc_test_ta0na == "Y") {
            console.log("Notification Register Test Using Portable Test Equipment (PTE)");
            this.validateRemark6 = true;
            if (this.showRegister.ta0naremarks == '' || this.showRegister.ta0naremarks == undefined) {
                this.displayMessageToast("Remarks");
                this.validateRemark6 = false;
                this.check = false;
            }
        }
        else {
            console.log("Notification Register Test Using Portable Test Equipment (PTE)) Test");
            // this.validateTest6 = true;
            // if (this.showMainMeter == true) {
            //   if (this.showRegister.ta0reg_amf == '' || this.showRegister.ta0reg_amf == undefined) {
            //     this.displayMessageToast("Final");
            //     this.validateTest6 = false;
            //     this.check = false;
            //   } else if (this.showRegister.ta0reg_amb == '' || this.showRegister.ta0reg_amb == undefined) {
            //     this.displayMessageToast("Initial");
            //     this.validateTest6 = false;
            //     this.check = false;
            //   } else if (this.showRegister.ta0reg_pteread == '' || this.showRegister.ta0reg_pteread == undefined) {
            //     this.displayMessageToast("Reading");
            //     this.validateTest6 = false;
            //     this.check = false;
            //   }
            // }
            // else if (this.showRegister.ta0reg_pciread == '' || this.showRegister.ta0reg_pciread == undefined) {
            //   this.displayMessageToast("F1 (Main Meter/ Check Meter) 180");
            //   this.validateTest6 = false;
            //   this.check = false;
            // }
            // else if (this.showRegister.ta0reg_pciread2 == '' || this.showRegister.ta0reg_pciread2 == undefined) {
            //   this.displayMessageToast("F2 (Main Meter/ Check Meter) 180");
            //   this.validateTest6 = false;
            //   this.check = false;
            // }
            // else if (this.showRegister.ta0reg_pcsread == '' || this.showRegister.ta0reg_pcsread == undefined) {
            //   this.displayMessageToast("F1 (Main Meter/ Check Meter) 880");
            //   this.validateTest6 = false;
            //   this.check = false;
            // }
        }
        if (this.showMainMeter == true) {
            if (this.showLed.loc_test_ta0na == "Y") {
                console.log("Notification  Meter Power Flow/ LED Indication");
                this.validateRemark7 = true;
                if (this.showLed.ta0naremarks == '' || this.showLed.ta0naremarks == undefined) {
                    this.displayMessageToast("Remarks");
                    this.validateRemark7 = false;
                    this.check = false;
                }
            }
            else {
                console.log("Notification  Meter Power Flow/ LED Indication Test");
                this.validateTest7 = true;
                if (this.showLed.ta0led_r == '' || this.showLed.ta0led_r == undefined) {
                    this.displayMessageToast("LED Red");
                    this.validateTest7 = false;
                    this.check = false;
                }
                else if (this.showLed.ta0led_y == '' || this.showLed.ta0led_y == undefined) {
                    this.displayMessageToast("LED Yellow");
                    this.validateTest7 = false;
                    this.check = false;
                }
                else if (this.showLed.ta0led_b == '' || this.showLed.ta0led_b == undefined) {
                    this.displayMessageToast("LED Blue");
                    this.validateTest7 = false;
                    this.check = false;
                }
                else if (this.showLed.ta0led_ind_r == '' || this.showLed.ta0led_ind_r == undefined) {
                    this.displayMessageToast("Indicator Red");
                    this.validateTest7 = false;
                    this.check = false;
                }
                else if (this.showLed.ta0led_ind_y == '' || this.showLed.ta0led_ind_y == undefined) {
                    this.displayMessageToast("Indicator Yellow");
                    this.validateTest7 = false;
                    this.check = false;
                }
                else if (this.showLed.ta0led_ind_b == '' || this.showLed.ta0led_ind_b == undefined) {
                    this.displayMessageToast("Indicator Blue");
                    this.validateTest7 = false;
                    this.check = false;
                }
            }
        }
        if (this.showMainMeter == true) {
            if (this.showReport.loc_test_ta0na == "Y") {
                console.log("Notification Test Report Verification Accuracy Meter on Site");
                this.validateRemark8 = true;
                if (this.showReport.ta0naremarks == '' || this.showReport.ta0naremarks == undefined) {
                    this.displayMessageToast("Remarks");
                    this.validateRemark8 = false;
                    this.check = false;
                }
            }
            else {
                console.log("Notification Test Report Verification Accuracy Meter on Site Test");
                this.validateTest8 = true;
                if (this.showReport.ta0mv_metertestprocedure == '' || this.showReport.ta0mv_metertestprocedure == undefined) {
                    this.displayMessageToast("Meter Test Procedure");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTNHT.ta0th_mintemp == '' || this.showReportTNHT.ta0th_mintemp == undefined) {
                    this.displayMessageToast("Minimun Temperature");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTNHT.ta0th_minmoist == '' || this.showReportTNHT.ta0th_minmoist == undefined) {
                    this.displayMessageToast("Minimun Moisture");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTNHT.ta0th_maxtemp == '' || this.showReportTNHT.ta0th_maxtemp == undefined) {
                    this.displayMessageToast("Maximun Temperature");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTNHT.ta0th_maxmoist == '' || this.showReportTNHT.ta0th_maxmoist == undefined) {
                    this.displayMessageToast("Maximun Moisture");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportPTED.ta0tp_brand == '' || this.showReportPTED.ta0tp_brand == undefined) {
                    this.displayMessageToast("Brand");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportPTED.ta0tp_model == '' || this.showReportPTED.ta0tp_model == undefined) {
                    this.displayMessageToast("Model ");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportPTED.ta0tp_seialnum == '' || this.showReportPTED.ta0tp_seialnum == undefined) {
                    this.displayMessageToast("Serial No");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportPTED.ta0tp_traceability == '' || this.showReportPTED.ta0tp_traceability == undefined) {
                    this.displayMessageToast("Traceability ");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportPTED.ta0tp_calibration == '' || this.showReportPTED.ta0tp_calibration == undefined) {
                    this.displayMessageToast("Caliberation Date");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTHGD.ta0tp_brand == '' || this.showReportTHGD.ta0tp_brand == undefined) {
                    this.displayMessageToast("Brand");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTHGD.ta0tp_model == '' || this.showReportTHGD.ta0tp_model == undefined) {
                    this.displayMessageToast("Model ");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTHGD.ta0tp_seialnum == '' || this.showReportTHGD.ta0tp_seialnum == undefined) {
                    this.displayMessageToast("Serial No");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTHGD.ta0tp_traceability == '' || this.showReportTHGD.ta0tp_traceability == undefined) {
                    this.displayMessageToast("Traceability ");
                    this.validateTest8 = false;
                    this.check = false;
                }
                else if (this.showReportTHGD.ta0tp_calibration == '' || this.showReportTHGD.ta0tp_calibration == undefined) {
                    this.displayMessageToast("Caliberation Date");
                    this.validateTest8 = false;
                    this.check = false;
                }
            }
            if (this.showAccErr.loc_test_ta0na == "Y") {
                console.log("Notification Meter Accuracy Test (%Error)");
                this.validateRemark9 = true;
                if (this.showAccErr.ta0naremarks == '' || this.showAccErr.ta0naremarks == undefined) {
                    this.displayMessageToast("Remarks");
                    this.validateRemark9 = false;
                    this.check = false;
                }
            }
            else {
                console.log("Notification Meter Accuracy Test (%Error) Test");
                this.validateTest9 = true;
                if (this.showAccErr.ta0at_sticker == '' || this.showAccErr.ta0at_sticker == undefined) {
                    this.displayMessageToast("Main Meter/ Check Meter Serial Number");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.correctFactor == '' || this.showAccErr.correctFactor == undefined) {
                    this.displayMessageToast("Correction Factor");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test1 == '' || this.showAccErr.ta0at_test1 == undefined) {
                    this.displayMessageToast("Error 1");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test2 == '' || this.showAccErr.ta0at_test2 == undefined) {
                    this.displayMessageToast("Error 2");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test3 == '' || this.showAccErr.ta0at_test3 == undefined) {
                    this.displayMessageToast("Error 3");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test4 == '' || this.showAccErr.ta0at_test4 == undefined) {
                    this.displayMessageToast("Error 4");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test5 == '' || this.showAccErr.ta0at_test5 == undefined) {
                    this.displayMessageToast("Error 5");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test6 == '' || this.showAccErr.ta0at_test6 == undefined) {
                    this.displayMessageToast("Error 6");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test7 == '' || this.showAccErr.ta0at_test7 == undefined) {
                    this.displayMessageToast("Error 7");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test8 == '' || this.showAccErr.ta0at_test8 == undefined) {
                    this.displayMessageToast("Error 8");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test9 == '' || this.showAccErr.ta0at_test9 == undefined) {
                    this.displayMessageToast("Error 9");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_test10 == '' || this.showAccErr.ta0at_test10 == undefined) {
                    this.displayMessageToast("Error 10");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErr.ta0at_avg == '' || this.showAccErr.ta0at_avg == undefined) {
                    this.displayMessageToast("Average");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test1 == '' || this.showAccErrf.ta0at_test1 == undefined) {
                    this.displayMessageToast("Error 1");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test2 == '' || this.showAccErrf.ta0at_test2 == undefined) {
                    this.displayMessageToast("Error 2");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test3 == '' || this.showAccErrf.ta0at_test3 == undefined) {
                    this.displayMessageToast("Error 3");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test4 == '' || this.showAccErrf.ta0at_test4 == undefined) {
                    this.displayMessageToast("Error 4");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test5 == '' || this.showAccErrf.ta0at_test5 == undefined) {
                    this.displayMessageToast("Error 5");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test6 == '' || this.showAccErrf.ta0at_test6 == undefined) {
                    this.displayMessageToast("Error 6");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test7 == '' || this.showAccErrf.ta0at_test7 == undefined) {
                    this.displayMessageToast("Error 7");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test8 == '' || this.showAccErrf.ta0at_test8 == undefined) {
                    this.displayMessageToast("Error 8");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test9 == '' || this.showAccErrf.ta0at_test9 == undefined) {
                    this.displayMessageToast("Error 9");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_test10 == '' || this.showAccErrf.ta0at_test10 == undefined) {
                    this.displayMessageToast("Error 10");
                    this.validateTest9 = false;
                    this.check = false;
                }
                else if (this.showAccErrf.ta0at_avg == '' || this.showAccErrf.ta0at_avg == undefined) {
                    this.displayMessageToast("Average");
                    this.validateTest9 = false;
                    this.check = false;
                }
            }
        }
        return this.check;
    };
    //start calculation
    // Calculate Voltage reading and Ph Rotation Test
    LpcMvhvInspectPage.prototype.calculateVolRotation = function () {
        console.log("This section to Calculate Voltage reading and Ph Rotation Test..");
        var a = (Number(this.showVoltage.ta0vr_sg_ctratio_n) / Number(this.showVoltage.ta0vr_sg_ctratio_d)).toFixed(3);
        console.log('Value for a is: ', a);
        var ta0vr_sg_ir = (a * Number(this.showVoltage.ta0vr_sg_ir));
        /* if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_ir) || this.showVoltage.ta0vr_sg_cal_prim_ir === 0.00) {
          this.showVoltage.ta0vr_sg_cal_prim_ir = 0.00; */
        this.showVoltage.ta0vr_sg_cal_prim_ir = ta0vr_sg_ir.toFixed(3);
        if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_ir || this.showVoltage.ta0vr_pte_cal_ctratio_ir) === -1) {
            this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
            this.validationNegVal = false;
        } // Yelllow
        else if ((Math.sign(this.showVoltage.ta0vr_sg_cal_prim_iy || this.showVoltage.ta0vr_pte_cal_ctratio_iy) === -1)) {
            this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
            this.validationNegVal = false;
            //Blue
        }
        else if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_ib || this.showVoltage.ta0vr_pte_cal_ctratio_ib) === -1) {
            this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
            this.validationNegVal = false;
        }
        else {
            this.validationNegVal = true;
        }
        if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_ir)) {
            this.showVoltage.ta0vr_sg_cal_prim_ir = 0;
        }
        this.showVoltage.ta0vr_sg_ctratio = a;
        if (isNaN(this.showVoltage.ta0vr_sg_ctratio)) {
            this.showVoltage.ta0vr_sg_ctratio = 0;
        }
        var ta0vr_sg_iy = (a * Number(this.showVoltage.ta0vr_sg_iy));
        this.showVoltage.ta0vr_sg_cal_prim_iy = ta0vr_sg_iy.toFixed(3);
        /* if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_iy) === -1) {
          this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
          this.validationNegVal = false;
        } else {
          this.validationNegVal = true;
        } */
        if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_iy) || this.showVoltage.ta0vr_sg_cal_prim_iy === 0.00) {
            this.showVoltage.ta0vr_sg_cal_prim_iy = 0;
        }
        var curblu = (a * Number(this.showVoltage.ta0vr_sg_ib));
        this.showVoltage.ta0vr_sg_cal_prim_ib = curblu.toFixed(3);
        /*  if (Math.sign(this.showVoltage.ta0vr_sg_cal_prim_ib) === -1) {
           this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
           this.validationNegVal = false;
         } else {
           this.validationNegVal = true;
         } */
        if (isNaN(this.showVoltage.ta0vr_sg_cal_prim_ib) || this.showVoltage.ta0vr_sg_cal_prim_ib === 0.00) {
            this.showVoltage.ta0vr_sg_cal_prim_ib = 0;
        }
        var ta0vr_pte_ir = (this.showVoltage.ta0vr_sg_cal_prim_ir / Number(this.showVoltage.ta0vr_pte_ir));
        this.showVoltage.ta0vr_pte_cal_ctratio_ir = ta0vr_pte_ir.toFixed(3);
        /* if (Math.sign(this.showVoltage.ta0vr_pte_cal_ctratio_ir) === -1) {
          this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
        } */
        if (isNaN(this.showVoltage.ta0vr_pte_cal_ctratio_ir)) {
            this.showVoltage.ta0vr_pte_cal_ctratio_ir = 0;
        }
        var ta0vr_pte_iy = (this.showVoltage.ta0vr_sg_cal_prim_iy / Number(this.showVoltage.ta0vr_pte_iy));
        this.showVoltage.ta0vr_pte_cal_ctratio_iy = ta0vr_pte_iy.toFixed(3);
        /*  if (Math.sign(this.showVoltage.ta0vr_pte_cal_ctratio_iy) === -1) {
           this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
           this.validationNegVal = false;
         } else {
           this.validationNegVal = true;
         } */
        if (isNaN(this.showVoltage.ta0vr_pte_cal_ctratio_iy)) {
            this.showVoltage.ta0vr_pte_cal_ctratio_iy = 0;
        }
        var ta0vr_pte_ib = (this.showVoltage.ta0vr_sg_cal_prim_ib / Number(this.showVoltage.ta0vr_pte_ib));
        this.showVoltage.ta0vr_pte_cal_ctratio_ib = ta0vr_pte_ib.toFixed(3);
        /*  if (Math.sign(this.showVoltage.ta0vr_pte_cal_ctratio_ib) === -1) {
           this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
           this.validationNegVal = false;
         } else {
           this.validationNegVal = true;
         } */
        if (isNaN(this.showVoltage.ta0vr_pte_cal_ctratio_ib)) {
            this.showVoltage.ta0vr_pte_cal_ctratio_ib = 0;
        }
        console.log("Total c=axb: " + ta0vr_sg_ir.toFixed(3));
        /** Send value to PTE Section */
        if (this.enterRed === false) {
            if (this.showVoltage.ta0vr_sg_cal_prim_ir !== '0.000' && this.showVoltage.ta0vr_sg_cal_prim_ir !== 0) {
                this.valueDivide++;
                this.enterRed = true;
            }
            ;
        }
        else {
            if (this.showVoltage.ta0vr_sg_cal_prim_ir === '0.000') {
                this.valueDivide--;
                this.enterRed = false;
            }
        }
        if (this.enterYellow === false) {
            if (this.showVoltage.ta0vr_sg_cal_prim_iy !== '0.000' && this.showVoltage.ta0vr_sg_cal_prim_iy !== 0) {
                this.valueDivide++;
                this.enterYellow = true;
            }
            ;
        }
        else {
            if (this.showVoltage.ta0vr_sg_cal_prim_iy === '0.000') {
                this.valueDivide--;
                this.enterYellow = false;
            }
        }
        if (this.enterBlue === false) {
            if (this.showVoltage.ta0vr_sg_cal_prim_ib !== '0.000' && this.showVoltage.ta0vr_sg_cal_prim_ib !== 0) {
                this.valueDivide++;
                this.enterBlue = true;
            }
            ;
        }
        else {
            if (this.showVoltage.ta0vr_sg_cal_prim_ib === '0.000') {
                this.valueDivide--;
                this.enterBlue = false;
            }
        }
        var total = ((Number(this.showVoltage.ta0vr_sg_cal_prim_ir) + Number(this.showVoltage.ta0vr_sg_cal_prim_iy) + Number(this.showVoltage.ta0vr_sg_cal_prim_ib)) / this.valueDivide);
        if (isNaN(total)) {
            this.showPowerVal.ta0pwc_avgamps = 0.000;
        }
        else {
            this.showPowerVal.ta0pwc_avgamps = total.toFixed(3);
        }
        /** Auto Calculate */
        var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
        var sqr = Math.sqrt(3) * cos;
        if (isNaN(sqr)) {
            this.showPowerVal.ta0pwc_p3 = 0.000;
        }
        else {
            this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
        }
    };
    LpcMvhvInspectPage.prototype.pad = function (num) {
        return ("0" + num).slice(-2);
    };
    LpcMvhvInspectPage.prototype.CalculationDuration = function () {
        console.log("calculation for duration" + this.showEnergy.ta0er_starttime + "------" + this.showEnergy.ta0er_endtime);
        if (this.showEnergy.ta0er_starttime && this.showEnergy.ta0er_endtime) {
            var f = this.showEnergy.ta0er_starttime.split("T");
            var g = this.showEnergy.ta0er_endtime.split("T");
            console.log(f);
            if (f.length === 1) {
                var s = f[0].split(":"), sMin = +s[1] + s[0] * 60, e = g[0].split(":"), eMin = +e[1] + e[0] * 60, diff = eMin - sMin;
                console.log(s);
                if (diff < 0) {
                    sMin -= 12 * 60;
                    diff = eMin - sMin;
                }
                var h = Math.floor(diff / 60), m = diff % 60;
                var k;
                if (h === 0) {
                    k = m / 60;
                    this.showEnergy.ta0er_duration = k.toFixed(2);
                }
                else {
                    var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                    k = (Number(hm) / 60);
                    this.showEnergy.ta0er_duration = k.toFixed(2);
                }
            }
            else {
                var s = f[1].split(":"), sMin = +s[1] + s[0] * 60, e = g[1].split(":"), eMin = +e[1] + e[0] * 60, diff = eMin - sMin;
                console.log(s);
                if (diff < 0) {
                    sMin -= 12 * 60;
                    diff = eMin - sMin;
                }
                var h = Math.floor(diff / 60), m = diff % 60;
                var k;
                if (h === 0) {
                    k = m / 60;
                    this.showEnergy.ta0er_duration = k.toFixed(2);
                }
                else {
                    var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                    k = (Number(hm) / 60);
                    this.showEnergy.ta0er_duration = k.toFixed(2);
                }
            }
            /** Send value to PTE Section */
            this.showPowerVal.ta0pwc_nexthour = this.showEnergy.ta0er_duration;
            /** Auto Calculate */
            var p1 = (Number(this.showPowerVal.ta0pwc_usage) / Number(this.showPowerVal.ta0pwc_nexthour));
            if (isNaN(p1)) {
                this.showPowerVal.ta0pwc_estdemand = 0.000;
            }
            else {
                this.showPowerVal.ta0pwc_estdemand = p1.toFixed(3);
            }
        }
    };
    LpcMvhvInspectPage.prototype.CalculationSupplier = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,6}|(\d{0,6}(\.\d{0,2})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        console.log("calculate Final & Initial :" + this.showEnergy.ta0er_readingafter + "---" + this.showEnergy.ta0er_readingbefore);
        var totalR = (Number(this.showEnergy.ta0er_readingafter) - Number(this.showEnergy.ta0er_readingbefore));
        var totalU = (Number(this.showEnergy.ta0er_rf) * Number(this.showEnergy.ta0er_mf) * totalR);
        this.showEnergy.ta0er_usage = totalU.toFixed(3);
        this.showPowerVal.ta0pwc_usage = this.showEnergy.ta0er_usage;
        /** Auto Calculate */
        var p1 = (Number(this.showPowerVal.ta0pwc_usage) / Number(this.showPowerVal.ta0pwc_nexthour));
        if (isNaN(p1)) {
            this.showPowerVal.ta0pwc_estdemand = 0.000;
        }
        else {
            this.showPowerVal.ta0pwc_estdemand = p1.toFixed(3);
        }
        /** To update calculation usage * rf. */
        this.CalculationKwh();
        if (Math.sign(this.showEnergy.ta0er_usage) === -1) {
            this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
            this.validationNegVal = false;
            this.buttonSaveMVHV = true; // For disable save button
        }
        else {
            this.validationNegVal = true;
            this.buttonSaveMVHV = false; // Enable save button
        }
        if (isNaN(this.showEnergy.ta0er_usage)) {
            this.showEnergy.ta0er_usage = 0.000;
        }
        /*  if (!regExp.test(this.showEnergy.ta0er_usage)) {
           let alert = this.alertCtrl.create(optionMessage);
           alert.present();
         } */
    };
    LpcMvhvInspectPage.prototype.Calculationp1 = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        console.log("calculate P1 :" + this.showPowerVal.ta0pwc_usage + "---" + this.showPowerVal.ta0pwc_nexthour);
        if (!isNaN(this.showPowerVal.ta0pwc_usage) && !isNaN(this.showPowerVal.ta0pwc_nexthour)) {
            var p1 = (Number(this.showPowerVal.ta0pwc_usage) / Number(this.showPowerVal.ta0pwc_nexthour));
            if (!isNaN(p1)) {
                this.showPowerVal.ta0pwc_estdemand = p1.toFixed(3);
            }
            if (Math.sign(this.showPowerVal.ta0pwc_estdemand) === -1) {
                this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
                this.validationNegVal = false;
            }
            else {
                this.validationNegVal = true;
            }
            if (isNaN(this.showPowerVal.ta0pwc_estdemand)) {
                this.showPowerVal.ta0pwc_estdemand = 0;
            }
            if (!regExp.test(this.showPowerVal.ta0pwc_estdemand)) {
                var alert_1 = this.alertCtrl.create(optionMessage);
                alert_1.present();
            }
        }
    };
    LpcMvhvInspectPage.prototype.CalculationpowerRead = function () {
        var totalActive = (Number(this.showSpr.ta0pr_active_r) + Number(this.showSpr.ta0pr_active_y) + Number(this.showSpr.ta0pr_active_b));
        var totalReactive = (Number(this.showSpr.ta0pr_reactive_r) + Number(this.showSpr.ta0pr_reactive_y) + Number(this.showSpr.ta0pr_reactive_b));
        // --- comment below lines for totalpf calculation, user request to keen value them self. don't want to auto calculate.
        // var sum = (Number(this.showSpr.ta0pr_pf_r) + Number(this.showSpr.ta0pr_pf_y) + Number(this.showSpr.ta0pr_pf_b));
        // var totalPf = (sum / 3);
        this.showSpr.ta0pr_active_total = totalActive.toFixed(3);
        this.showSpr.ta0pr_reactive_total = totalReactive.toFixed(3);
        // this.showSpr.ta0pr_pf_total = totalPf.toFixed(3);
        // Send to average section
        if (isNaN(this.showSpr.ta0pr_pf_total)) {
            this.showPowerVal.ta0pwc_avgpf = 0.000;
        }
        else {
            // this.showPowerVal.ta0pwc_avgpf = (this.showSpr.ta0pr_pf_total * 100 / 1000).toFixed(3);
            this.showPowerVal.ta0pwc_avgpf = this.showSpr.ta0pr_pf_total;
        }
        /** Auto Calculate */
        var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
        var sqr = Math.sqrt(3) * cos;
        if (isNaN(sqr)) {
            this.showPowerVal.ta0pwc_p3 = 0.000;
        }
        else {
            this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
        }
        //Total Counting for totalActive
        if (isNaN(this.showSpr.ta0pr_active_total)) {
            this.showSpr.ta0pr_active_total = 0.000;
        }
        if (isNaN(this.showSpr.ta0pr_reactive_total)) {
            this.showSpr.ta0pr_reactive_total = 0.000;
        }
        if (isNaN(this.showSpr.ta0pr_pf_total)) {
            this.showSpr.ta0pr_pf_total = 0.000;
        }
        this.showSpr.ta0pr_totalpower_sec = totalActive.toFixed(3);
        // this.showSpr.ta0pr_totalpower_prim = this.showSpr.ta0pr_totalpower_sec * this.showSpr.ta0pr_transformationfactor
        //Total Counting for totalReactive
        if (isNaN(this.showSpr.ta0pr_totalpower_sec)) {
            this.showSpr.ta0pr_totalpower_sec = 0.000;
        }
        var ctRatio = (Number(this.showVoltage.ta0vr_pte_ctratio_n) / Number(this.showVoltage.ta0vr_pte_ctratio_d)).toFixed(3);
        var Tp = ctRatio * this.pt;
        this.showVoltage.ta0vr_pte_ctratio = ctRatio;
        if (isNaN(this.showVoltage.ta0vr_pte_ctratio)) {
            this.showVoltage.ta0vr_pte_ctratio = 0.000;
        }
        //this.showSpr.ta0pr_transformationfactor = Tp.toFixed(3);
        //Total Counting for totalPf
        /* if (isNaN(this.showSpr.ta0pr_transformationfactor)) {
          this.showSpr.ta0pr_transformationfactor = 0;
        } */
        var totalPower = (totalActive * Tp);
        this.showSpr.ta0pr_totalpower_prim = totalPower.toFixed(3);
        if (isNaN(this.showSpr.ta0pr_totalpower_prim)) {
            this.showSpr.ta0pr_totalpower_prim = 0;
        }
        else if (Math.sign(this.showSpr.ta0pr_totalpower_prim) === -1) {
            this.gf.warningAlert('Error', 'Output value cannot be negative ta0pr_totalpower_prim', 'Close');
            this.validationNegVal = false;
        }
        else {
            this.validationNegVal = true;
        }
        this.calculateTransformerRatio();
    };
    /**
     * Calculate Average Voltage
     * Created  : Alif
     * Date     : 17-12-2018
     */
    LpcMvhvInspectPage.prototype.calculateAveragePteSection = function () {
        if ((this.showVoltage.ta0vr_ry !== '' || this.showVoltage.ta0vr_ry !== null || typeof (this.showVoltage.ta0vr_ry) !== "undefined") &&
            (this.showVoltage.ta0vr_yb !== '' || this.showVoltage.ta0vr_yb !== null || typeof (this.showVoltage.ta0vr_yb) !== "undefined") &&
            (this.showVoltage.ta0vr_rb !== '' || this.showVoltage.ta0vr_rb !== null || typeof (this.showVoltage.ta0vr_rb) !== "undefined")) {
            var voltageCalc = 100;
            console.log(' voltage  : ' + this.item.json.ta0installationvoltage);
            if (this.item.json.ta0installationvoltage === '04') {
                voltageCalc = 60;
            }
            else if (this.item.json.ta0installationvoltage === '05') {
                voltageCalc = 100;
            }
            else if (this.item.json.ta0installationvoltage === '06') {
                voltageCalc = 200;
            }
            else if (this.item.json.ta0installationvoltage === '07') {
                voltageCalc = 300;
                console.log('came to 300 volteage ' + voltageCalc);
            }
            else if (this.item.json.ta0installationvoltage === '08') {
                voltageCalc = 600;
            }
            else if (this.item.json.ta0installationvoltage === '09') {
                voltageCalc = 1200;
            }
            else if (this.item.json.ta0installationvoltage === '10') {
                voltageCalc = 2500;
            }
            else if (this.item.json.ta0installationvoltage === '11') {
                voltageCalc = 4545.45;
            }
            // Checking total element calculation 1/2/3 element.
            if (this.enterRed === false) {
                if (this.showVoltage.ta0vr_ry !== '0.000' && this.showVoltage.ta0vr_ry !== '0') {
                    this.valueDivide++;
                    this.enterRed = true;
                }
                ;
            }
            else {
                if (this.showVoltage.ta0vr_ry === '0.000' || this.showVoltage.ta0vr_ry === '0') {
                    this.valueDivide--;
                    this.enterRed = false;
                }
            }
            if (this.enterYellow === false) {
                if (this.showVoltage.ta0vr_yb !== '0.000' && this.showVoltage.ta0vr_yb !== '0') {
                    this.valueDivide++;
                    this.enterYellow = true;
                }
                ;
            }
            else {
                if (this.showVoltage.ta0vr_yb === '0.000' || this.showVoltage.ta0vr_yb === '0') {
                    this.valueDivide--;
                    this.enterYellow = false;
                }
            }
            if (this.enterBlue === false) {
                if (this.showVoltage.ta0vr_rb !== '0.000' && this.showVoltage.ta0vr_rb !== '0') {
                    this.valueDivide++;
                    this.enterBlue = true;
                }
                ;
            }
            else {
                if (this.showVoltage.ta0vr_rb === '0.000' || this.showVoltage.ta0vr_rb === '0') {
                    this.valueDivide--;
                    this.enterBlue = false;
                }
            }
            // Checking total element
            if (this.valueDivide > 1) {
                var total = (Number(this.showVoltage.ta0vr_ry) + Number(this.showVoltage.ta0vr_yb) + Number(this.showVoltage.ta0vr_rb)) / 3 * voltageCalc / 1000;
            }
            else {
                var total = (Number(this.showVoltage.ta0vr_ry) + Number(this.showVoltage.ta0vr_yb) + Number(this.showVoltage.ta0vr_rb)) * voltageCalc / 1000;
            }
            //var total = (Number(this.showVoltage.ta0vr_ry) + Number(this.showVoltage.ta0vr_yb) + Number(this.showVoltage.ta0vr_rb)) / 3 * 100 / 1000;
            if (isNaN(total)) {
                this.showPowerVal.ta0pwc_avgvoltage = 0.000;
            }
            else {
                this.showPowerVal.ta0pwc_avgvoltage = total.toFixed(3);
            }
            /** Auto Calculate */
            var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
            var sqr = Math.sqrt(3) * cos;
            if (isNaN(sqr)) {
                this.showPowerVal.ta0pwc_p3 = 0.000;
            }
            else {
                this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
            }
        }
    };
    /**
     *
     * @param objectValue
     * @param keyString
     * @param index
     *
     * Created   :Ameer
     * Date      : 18/12/2018
     * Reason    : Allow user to enter 10 Char
     * Edited    : Ameer (21/2/2019) add new case for meter final and meter initial
     */
    LpcMvhvInspectPage.prototype.allow10input = function (objectValue, keyString, index) {
        var NUMBER_REGEXP = /^(\d{0,10}|(\d{0,10}(\.\d{0,3})))?$/;
        var newValue = objectValue.target.value;
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
            var splitValBef = arraySplitBeforeDecimal.length;
            for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
                if (regExp.test(arraySplitBeforeDecimal[d])) {
                    cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
                }
            }
            if (cutValueBeforeDecimal.length > 10) {
                valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
            }
            else {
                newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
            }
            checkFlag = true;
        }
        if (checkFlag === false) {
            for (var f = 0; f < arrayBeforeDecimal.length; f++) {
                if (newValue.length > 10) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    if (cutValueBeforeDecimal.length > 10) {
                        newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                    }
                    else {
                        newValSlice = cutValueBeforeDecimal;
                    }
                }
                else if (newValue.length < 10 || newValue.length === 10) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    newValSlice = cutValueBeforeDecimal;
                }
            }
        }
        switch (keyString) {
            case 'pulse_Connect2':
                this.checkPulseConnectionArray[index].ta0reg_pciread2 = newValSlice;
                break;
            case 'mtrFinal':
                this.showEnergy.ta0er_readingafter = newValSlice;
                break;
            case 'mtrInitial':
                this.showEnergy.ta0er_readingbefore = newValSlice;
                break;
        }
    };
    /**
     * Create: Ameer
     * Date : 19/2/2019
     * Purpose: Method for allow user 16,3 length input
     */
    LpcMvhvInspectPage.prototype.checkUserInput16 = function (objectValue, keyString) {
        var NUMBER_REGEXP = /^(\d{0,13}|(\d{0,13}(\.\d{0,3})))?$/;
        var newValue = objectValue.target.value;
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
            var splitValBef = arraySplitBeforeDecimal.length;
            for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
                if (regExp.test(arraySplitBeforeDecimal[d])) {
                    cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
                }
            }
            if (cutValueBeforeDecimal.length > 13) {
                valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
            }
            else {
                newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
            }
            checkFlag = true;
        }
        if (checkFlag === false) {
            for (var f = 0; f < arrayBeforeDecimal.length; f++) {
                if (newValue.length > 13) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    if (cutValueBeforeDecimal.length > 13) {
                        newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                    }
                    else {
                        newValSlice = cutValueBeforeDecimal;
                    }
                }
                else if (newValue.length < 13 || newValue.length === 13) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    newValSlice = cutValueBeforeDecimal;
                }
            }
        }
        switch (keyString) {
            case 'Main880':
                this.showRegister.ta0reg_pcsread = newValSlice;
                break;
            case 'Check880':
                this.showRegister.ta0reg_pcsread = newValSlice;
                break;
        }
    };
    /**
     *
     * @param objectValue
     * @param keyString
     * @param index
     *
     * Create : Ameer
     * Date : 17/1/2019
     * allow only positive value
     */
    LpcMvhvInspectPage.prototype.checkinputPositive = function (objectValue, keyString, index) {
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = objectValue.target.value;
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
            var splitValBef = arraySplitBeforeDecimal.length;
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
        }
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
        }
        switch (keyString) {
            case 'mtrFinal':
                this.showEnergy.ta0er_readingafter = newValSlice;
                break;
            case 'mtrInitial':
                this.showEnergy.ta0er_readingbefore = newValSlice;
                break;
        }
    };
    // Ameer (Check for input when user key in for 5,3 allow only positive value)
    LpcMvhvInspectPage.prototype.checkUserInput = function (objectValue, keyString, index) {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = objectValue.target.value;
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
            var splitValBef = arraySplitBeforeDecimal.length;
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
        }
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
        }
        switch (keyString) {
            case 'RY':
                this.showVoltage.ta0vr_ry = newValSlice;
                break;
            case 'YB':
                this.showVoltage.ta0vr_yb = newValSlice;
                break;
            case 'RB':
                this.showVoltage.ta0vr_rb = newValSlice;
                break;
            case 'RN':
                this.showVoltage.ta0vr_rn = newValSlice;
                break;
            case 'YN':
                this.showVoltage.ta0vr_yn = newValSlice;
                break;
            case 'BN':
                this.showVoltage.ta0vr_bn = newValSlice;
                break;
            case 'RE':
                this.showVoltage.ta0vr_re = newValSlice;
                break;
            case 'YE':
                this.showVoltage.ta0vr_ye = newValSlice;
                break;
            case 'RN':
                this.showVoltage.ta0vr_rn = newValSlice;
                break;
            case 'BE':
                this.showVoltage.ta0vr_be = newValSlice;
                break;
            case 'NE':
                this.showVoltage.ta0vr_ne = newValSlice;
                break;
            case 'crrRed':
                this.showVoltage.ta0vr_sg_ir = newValSlice;
                break;
            case 'crrYellow':
                this.showVoltage.ta0vr_sg_iy = newValSlice;
                break;
            case 'crrBlue':
                this.showVoltage.ta0vr_sg_ib = newValSlice;
                break;
            case 'primRed':
                this.showVoltage.ta0vr_sg_cal_prim_ir = newValSlice;
                break;
            case 'primYellow':
                this.showVoltage.ta0vr_sg_cal_prim_iy = newValSlice;
                break;
            case 'primBlue':
                this.showVoltage.ta0vr_sg_cal_prim_ib = newValSlice;
                break;
            case 'secPortRed':
                this.showVoltage.ta0vr_pte_ir = newValSlice;
                break;
            case 'secPortYellow':
                this.showVoltage.ta0vr_pte_iy = newValSlice;
                break;
            case 'secPortBlue':
                this.showVoltage.ta0vr_pte_ib = newValSlice;
                break;
            case 'mtrRF':
                this.showEnergy.ta0er_rf = newValSlice;
                break;
            case 'mtrMF':
                this.showEnergy.ta0er_mf = newValSlice;
                break;
            case 'pulseConnect1':
                this.showRegister.ta0reg_pciread = newValSlice;
                break;
            case 'pulseConnect3':
                this.showRegister.ta0reg_pcsread = newValSlice;
                break;
            case 'metering1':
                this.showVoltage.ta0vr_pte_ctratio_n = newValSlice;
                break;
            case 'metering2':
                this.showVoltage.ta0vr_pte_ctratio_d = newValSlice;
                break;
            case 'swtichgear1':
                this.showVoltage.ta0vr_sg_ctratio_n = newValSlice;
                break;
            case 'swtichgear2':
                this.showVoltage.ta0vr_sg_ctratio_d = newValSlice;
                break;
            case 'activeRed':
                this.showSpr.ta0pr_active_r = newValSlice;
                break;
            case 'reactiveRed':
                this.showSpr.ta0pr_reactive_r = newValSlice;
                break;
            case 'pfRed':
                this.showSpr.ta0pr_pf_r = newValSlice;
                break;
            case 'activeYellow':
                this.showSpr.ta0pr_active_y = newValSlice;
                break;
            case 'reactiveYellow':
                this.showSpr.ta0pr_reactive_y = newValSlice;
                break;
            case 'pfYellow':
                this.showSpr.ta0pr_pf_y = newValSlice;
                break;
            case 'activeBlue':
                this.showSpr.ta0pr_active_b = newValSlice;
                break;
            case 'reactiveBlue':
                this.showSpr.ta0pr_reactive_b = newValSlice;
                break;
            case 'pfBlue':
                this.showSpr.ta0pr_pf_b = newValSlice;
                break;
            case 'pfTotal':
                this.showSpr.ta0pr_pf_total = newValSlice;
                break;
            case 'kWHA':
                this.showPowerVal.ta0pwc_usage = newValSlice;
                break;
            case 'durB':
                this.showPowerVal.ta0pwc_nexthour = newValSlice;
                break;
            case 'meterDemand':
                this.showPowerVal.ta0pwc_metereddemand = newValSlice;
                break;
            case 'avgVoltage':
                this.showPowerVal.ta0pwc_avgvoltage = newValSlice;
                break;
            case 'avgAmps':
                this.showPowerVal.ta0pwc_avgamps = newValSlice;
                break;
            case 'avgPf':
                this.showPowerVal.ta0pwc_avgpf = newValSlice;
                break;
            case 'kwhFinal':
                this.showRegister.ta0reg_amf = newValSlice;
                break;
            case 'kwhInitial':
                this.showRegister.ta0reg_amb = newValSlice;
                break;
            case 'kwhReading':
                this.showRegister.ta0reg_pteread = newValSlice;
                break;
            case 'mini1':
                this.showReportTNHT.ta0th_mintemp = newValSlice;
                break;
            case 'mini2':
                this.showReportTNHT.ta0th_minmoist = newValSlice;
                break;
            case 'max1':
                this.showReportTNHT.ta0th_maxtemp = newValSlice;
                break;
            case 'max2':
                this.showReportTNHT.ta0th_maxmoist = newValSlice;
                break;
            case 'correctionFactor':
                this.showAccErr.ta0at_correctionfactor = newValSlice;
                break;
        }
        // this.CalculationpowerRead();
    };
    LpcMvhvInspectPage.prototype.CalculationAcurancy = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        //console.log("calculate Acurancy :" + this.showSprAcct.ta0at_test1 + "---" + this.showSprAcct.ta0at_test1 + "---" + this.showSprAcct.ta0at_test3);
        var plus = (Number(this.showSpr.ta0at_test1) + Number(this.showSpr.ta0at_test2) + Number(this.showSpr.ta0at_test3));
        var divide = plus / 3;
        this.showSpr.ta0at_avg = divide.toFixed(3);
        if (isNaN(this.showSpr.ta0at_avg)) {
            this.showSpr.ta0at_avg = 0;
        }
        if (!regExp.test(this.showSpr.ta0at_avg)) {
            var alert_2 = this.alertCtrl.create(optionMessage);
            alert_2.present();
        }
    };
    LpcMvhvInspectPage.prototype.calculationpulse = function () {
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        // Setting default value
        this.pulse = 0;
        this.sum = 0;
        this.saveReading = "";
        for (var i = 0; i < this.checkPulseConnectionArray.length; i++) {
            this.pulse += Number(this.checkPulseConnectionArray[i].ta0reg_pciread2);
            this.showRegister.loc_ta0reg_pcireadtotal = this.pulse.toFixed(3);
            // Set the dsiplay
            this.saveReading += this.checkPulseConnectionArray[i].ta0reg_pciread2 + ",";
        }
        for (var i = 0; i < this.checkPulseConnectionArray.length; i++) {
            this.sum += Number(this.checkPulseConnectionArray[i].ta0reg_pciread2);
            this.showRegister.loc_ta0reg_pcireadtotal = this.sum.toFixed(3);
            if (Math.sign(this.showRegister.loc_ta0reg_pcireadtotal) === -1) {
                this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
                this.validationNegVal = false;
            }
            else {
                this.validationNegVal = true;
            }
        }
        this.showRegister.ta0reg_pccalc = this.showRegister.loc_ta0reg_pcireadtotal;
    };
    LpcMvhvInspectPage.prototype.Calculationpte = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        var cos = (Number(this.showPowerVal.ta0pwc_avgvoltage) * Number(this.showPowerVal.ta0pwc_avgamps) * Number(this.showPowerVal.ta0pwc_avgpf));
        var sqr = Math.sqrt(3) * cos;
        this.showPowerVal.ta0pwc_p3 = sqr.toFixed(3);
        if (Math.sign(this.showPowerVal.ta0pwc_p3) === -1) {
            this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
            this.validationNegVal = false;
        }
        else {
            this.validationNegVal = true;
        }
        if (isNaN(this.showPowerVal.ta0pwc_p3)) {
            this.showPowerVal.ta0pwc_p3 = 0;
        }
        if (!regExp.test(this.showPowerVal.ta0pwc_p3)) {
            var alert_3 = this.alertCtrl.create(optionMessage);
            alert_3.present();
        }
    };
    /**
     * Edited : Ameer (7/12/2018)
     */
    LpcMvhvInspectPage.prototype.CalculationKwh = function () {
        this.buttonSaveMVHV = false;
        var NUMBER_REGEXP = /^(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        /** Send value to Register PTE Section */
        /** Hafizal (User: 10081065 che wan zainal) - 18/02/2019 */
        /** Value Usage = (Final - Initial) * RF */
        var use = (Number(this.showRegister.ta0reg_amf) - Number(this.showRegister.ta0reg_amb)) * this.showEnergy.ta0er_rf;
        this.showRegister.ta0reg_amc = use.toFixed(3);
        if (isNaN(this.showRegister.ta0reg_amc)) {
            this.showRegister.ta0reg_amc = 0;
        }
        var minus = use - this.showRegister.ta0reg_pteread;
        var error = ((minus / this.showRegister.ta0reg_pteread) * 100);
        this.showRegister.ta0reg_pteerror = error.toFixed(3);
        if (isNaN(this.showRegister.ta0reg_pteerror)) {
            this.showRegister.ta0reg_pteerror = 0;
        }
        //If output not based on REGEX 
        if (!regExp.test(this.showRegister.ta0reg_amc)) {
            this.gf.warningAlert('Error', 'Output value cannot be negative and check length of value', 'Close');
            this.buttonSaveMVHV = true;
        }
    };
    //end calculation
    /**
     * Created : Ameer
     * Date : 2/10/2018
     * Edited : Ameer (7/12/2018)
     */
    LpcMvhvInspectPage.prototype.calculateAvgCfBefore = function (eventVal) {
        var NUMBER_REGEXP = /^(-{1}?(?:([0-9]{0,5}))|([0-9]{1})?(?:([0-9]{0,5})))?(?:\.([0-9]{0,3}))?$/;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        var count = 0;
        var sum = 0;
        if (this.showAccErr.ta0at_test1 !== '' && this.showAccErr.ta0at_test1 !== null) {
            var test1Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test1Value = parseFloat(this.showAccErr.ta0at_test1) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test1 = test1Value.toFixed(3);
            }
            else {
                test1Value = parseFloat(this.showAccErr.ta0at_test1) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test1 = test1Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test1)) {
                this.showAccErrf.ta0at_test1 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test1));
            count++;
        }
        if (this.showAccErr.ta0at_test2 !== '' && this.showAccErr.ta0at_test2 !== null) {
            var test2Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test2Value = parseFloat(this.showAccErr.ta0at_test2) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test2 = test2Value.toFixed(3);
            }
            else {
                test2Value = parseFloat(this.showAccErr.ta0at_test2) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test2 = test2Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test2)) {
                this.showAccErrf.ta0at_test2 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test2));
            count++;
        }
        if (this.showAccErr.ta0at_test3 !== '' && this.showAccErr.ta0at_test3 !== null) {
            var test3Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test3Value = parseFloat(this.showAccErr.ta0at_test3) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test3 = test3Value.toFixed(3);
            }
            else {
                test3Value = parseFloat(this.showAccErr.ta0at_test3) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test3 = test3Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test3)) {
                this.showAccErrf.ta0at_test3 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test3));
            count++;
        }
        if (this.showAccErr.ta0at_test4 !== '' && this.showAccErr.ta0at_test4 !== null) {
            var test4value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test4value = parseFloat(this.showAccErr.ta0at_test4) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test4 = test4value.toFixed(3);
            }
            else {
                test4value = parseFloat(this.showAccErr.ta0at_test4) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test4 = test4value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test4)) {
                this.showAccErrf.ta0at_test4 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test4));
            count++;
        }
        if (this.showAccErr.ta0at_test5 !== '' && this.showAccErr.ta0at_test5 !== null) {
            var test5Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test5Value = parseFloat(this.showAccErr.ta0at_test5) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test5 = test5Value.toFixed(3);
            }
            else {
                test5Value = parseFloat(this.showAccErr.ta0at_test5) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test5 = test5Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test5)) {
                this.showAccErrf.ta0at_test5 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test5));
            count++;
        }
        if (this.showAccErr.ta0at_test6 !== '' && this.showAccErr.ta0at_test6 !== null) {
            var test6Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test6Value = parseFloat(this.showAccErr.ta0at_test6) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test6 = test6Value.toFixed(3);
            }
            else {
                test6Value = parseFloat(this.showAccErr.ta0at_test6) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test6 = test6Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test6)) {
                this.showAccErrf.ta0at_test6 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test6));
            count++;
        }
        if (this.showAccErr.ta0at_test7 !== '' && this.showAccErr.ta0at_test7 !== null) {
            var test7Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test7Value = parseFloat(this.showAccErr.ta0at_test7) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test7 = test7Value.toFixed(3);
            }
            else {
                test7Value = parseFloat(this.showAccErr.ta0at_test7) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test7 = test7Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test7)) {
                this.showAccErrf.ta0at_test7 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test7));
            count++;
        }
        if (this.showAccErr.ta0at_test8 !== '' && this.showAccErr.ta0at_test8 !== null) {
            var test8Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test8Value = parseFloat(this.showAccErr.ta0at_test8) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test8 = test8Value.toFixed(3);
            }
            else {
                test8Value = parseFloat(this.showAccErr.ta0at_test8) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test8 = test8Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test8)) {
                this.showAccErrf.ta0at_test8 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test8));
            count++;
        }
        if (this.showAccErr.ta0at_test9 !== '' && this.showAccErr.ta0at_test9 !== null) {
            var test9Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test9Value = parseFloat(this.showAccErr.ta0at_test9) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test9 = test9Value.toFixed(3);
            }
            else {
                test9Value = parseFloat(this.showAccErr.ta0at_test9) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test9 = test9Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test9)) {
                this.showAccErrf.ta0at_test9 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test9));
            count++;
        }
        if (this.showAccErr.ta0at_test10 !== '' && this.showAccErr.ta0at_test10 !== null) {
            var test10Value;
            if (this.showAccErr.ta0at_correctionfactor.includes('-') === true) {
                test10Value = parseFloat(this.showAccErr.ta0at_test10) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test10 = test10Value.toFixed(3);
            }
            else {
                test10Value = parseFloat(this.showAccErr.ta0at_test10) + Number(this.showAccErr.ta0at_correctionfactor);
                this.showAccErrf.ta0at_test10 = test10Value.toFixed(3);
            }
            if (isNaN(this.showAccErrf.ta0at_test10)) {
                this.showAccErrf.ta0at_test10 = 0;
            }
            sum = (sum + parseFloat(this.showAccErr.ta0at_test10));
            count++;
        }
        console.log('sum : ' + sum + '   :  ' + count);
        this.showAccErr.ta0at_avg = (sum / count).toFixed(3);
        if (isNaN(this.showAccErr.ta0at_avg)) {
            this.showAccErr.ta0at_avg = 0;
        }
        if (!regExp.test(this.showAccErr.ta0at_avg)) {
            var alert_4 = this.alertCtrl.create(optionMessage);
            alert_4.present();
        }
    };
    //Edited (Ameer) 2/10/2018
    LpcMvhvInspectPage.prototype.calculateAvgAfter = function (event, key) {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))([A-z]+$)?$/;
        var regExp = new RegExp(NUMBER_REGEXP);
        var optionMessage = this.gf.maximumAlertMessage();
        var sum = 0;
        var count = 0;
        if (this.showAccErrf.ta0at_test1 != '' && this.showAccErrf.ta0at_test1 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test1));
            count++;
        }
        if (this.showAccErrf.ta0at_test2 != '' && this.showAccErrf.ta0at_test2 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test2));
            count++;
        }
        if (this.showAccErrf.ta0at_test3 != '' && this.showAccErrf.ta0at_test3 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test3));
            count++;
        }
        if (this.showAccErrf.ta0at_test4 != '' && this.showAccErrf.ta0at_test4 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test4));
            count++;
        }
        if (this.showAccErrf.ta0at_test5 != '' && this.showAccErrf.ta0at_test5 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test5));
            count++;
        }
        if (this.showAccErrf.ta0at_test6 != '' && this.showAccErrf.ta0at_test6 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test6));
            count++;
        }
        if (this.showAccErrf.ta0at_test7 != '' && this.showAccErrf.ta0at_test7 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test7));
            count++;
        }
        if (this.showAccErrf.ta0at_test8 != '' && this.showAccErrf.ta0at_test8 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test8));
            count++;
        }
        if (this.showAccErrf.ta0at_test9 != '' && this.showAccErrf.ta0at_test9 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test9));
            count++;
        }
        if (this.showAccErrf.ta0at_test10 != '' && this.showAccErrf.ta0at_test10 != null) {
            sum = (sum + parseFloat(this.showAccErrf.ta0at_test10));
            count++;
        }
        console.log('Total Sum : ' + sum + 'Numb of Column count   :  ' + count);
        this.showAccErrf.ta0at_avg = (sum / count).toFixed(3);
        if (isNaN(this.showAccErrf.ta0at_avg)) {
            this.showAccErrf.ta0at_avg = 0;
        }
        if (!regExp.test(this.showAccErrf.ta0at_avg)) {
            this.gf.warningAlert('Error', 'Output value already reach maximum amount', 'Close');
        }
    };
    LpcMvhvInspectPage.prototype.saveDetails = function () {
        var _this = this;
        if (this.validationNegVal === true) {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
            // if (this.validateData()) {
            // Default value from parent
            var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
            var siteid = this.itemOri.json.siteid;
            var wonum = this.itemOri.json.wonum;
            this.showMeterDateTime.assetnum = assetnum;
            this.showMeterDateTime.siteid = siteid;
            this.showMeterDateTime.wonum = wonum;
            this.showMeterDateTime.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MDTT;
            // Push Data into JSON for show Meter Date Time Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showMeterDateTime);
            this.showVoltage.assetnum = assetnum;
            this.showVoltage.siteid = siteid;
            this.showVoltage.wonum = wonum;
            this.showVoltage.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT;
            // Push Data into JSON for Voltage Reading & Current, Ph-Rotation Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showVoltage);
            if (this.showEnergy.ta0er_starttime && this.showEnergy.ta0er_endtime) {
                var f = this.showEnergy.ta0er_starttime.split("T");
                var g = this.showEnergy.ta0er_endtime.split("T");
                if (f.length === 2) {
                    var nowDate = __WEBPACK_IMPORTED_MODULE_8_moment__().format("YYYY-MM-DD");
                    var second = __WEBPACK_IMPORTED_MODULE_8_moment__().format(":ssZ");
                    var m = f[1].split("+");
                    var n = g[1].split("+");
                    if (m.length === 2) {
                        var time1 = m[0].split(":");
                        var time2 = n[0].split(":");
                        this.showEnergy.ta0er_starttime = time1[0] + ":" + time1[1];
                        this.showEnergy.ta0er_endtime = time2[0] + ":" + time2[1];
                        this.showEnergy.ta0er_starttime = nowDate + "T" + this.showEnergy.ta0er_starttime + second;
                        this.showEnergy.ta0er_endtime = nowDate + "T" + this.showEnergy.ta0er_endtime + second;
                    }
                }
                else {
                    var nowDate = __WEBPACK_IMPORTED_MODULE_8_moment__().format("YYYY-MM-DD");
                    var second = __WEBPACK_IMPORTED_MODULE_8_moment__().format(":ssZ");
                    this.showEnergy.ta0er_starttime = nowDate + "T" + this.showEnergy.ta0er_starttime + second;
                    this.showEnergy.ta0er_endtime = nowDate + "T" + this.showEnergy.ta0er_endtime + second;
                }
            }
            this.showEnergy.assetnum = assetnum;
            this.showEnergy.siteid = siteid;
            this.showEnergy.wonum = wonum;
            this.showEnergy.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_SRET;
            // Push Data into JSON for Energy Reading Recorded By Meter
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showEnergy);
            this.showSpr.assetnum = assetnum;
            this.showSpr.siteid = siteid;
            this.showSpr.wonum = wonum;
            this.showSpr.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PPTE;
            // Push Data into JSON for Secondary Power Reading from Portable Test Equipment
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showSpr);
            this.showSprAcct.assetnum = assetnum;
            this.showSprAcct.siteid = siteid;
            this.showSprAcct.wonum = wonum;
            //new object      
            this.showSprAcct.ta0naremarks = this.showSpr.ta0naremarks;
            this.showSprAcct.ta0na = this.showSpr.ta0na;
            this.showSprAcct.loc_test_ta0na = this.showSpr.loc_test_ta0na;
            this.showSprAcct.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
            // Push Data into JSON for Secondary Power Reading from Portable Test Equipment
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showSprAcct);
            this.showPowerVal.assetnum = assetnum;
            this.showPowerVal.siteid = siteid;
            this.showPowerVal.wonum = wonum;
            this.showPowerVal.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PWCT;
            // Push Data into JSON for Power Value Difference Among PTE (P0), Meter (P1&P2) and Calculation (P3)
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showPowerVal);
            if (typeof (this.checkPulseConnectionArray[0]) !== "undefined") {
                this.showRegister.ta0reg_pciread = this.checkPulseConnectionArray[0].ta0reg_pciread2;
                // Total Sum
                if (this.checkPulseConnectionArray.length > 1) {
                    // Checking and compare with existing data.
                    var calculateF2 = 0;
                    for (var i = 1; i < this.checkPulseConnectionArray.length; i++) {
                        calculateF2 = calculateF2 + Number(this.checkPulseConnectionArray[i].ta0reg_pciread2);
                    }
                }
                if (this.showRegister.ta0reg_pciread2 !== 0 && this.showRegister.ta0reg_pciread2 !== calculateF2) {
                    this.showRegister.ta0reg_pciread2 = this.sum - this.checkPulseConnectionArray[0].ta0reg_pciread2;
                }
                else {
                    this.showRegister.ta0reg_pciread2 = calculateF2;
                }
            }
            this.showRegister.ta0reg_pcireadings = this.saveReading;
            this.showRegister.assetnum = assetnum;
            this.showRegister.siteid = siteid;
            this.showRegister.wonum = wonum;
            this.showRegister.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REGT;
            // Push Data into JSON for Register Test Using Portable Test Equipment (PTE)
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showRegister);
            this.showLed.assetnum = assetnum;
            this.showLed.siteid = siteid;
            this.showLed.wonum = wonum;
            this.showLed.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_LEDT;
            // Push Data into JSON for Meter Power Flow/ LED Indication Test
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showLed);
            this.showReport.assetnum = assetnum;
            this.showReport.siteid = siteid;
            this.showReport.wonum = wonum;
            this.showReport.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_MHMV;
            // Push Data into JSON for Meter Accuracy Test Procedure
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReport);
            this.showReportTNHT.assetnum = assetnum;
            this.showReportTNHT.siteid = siteid;
            this.showReportTNHT.wonum = wonum;
            //new object      
            this.showReportTNHT.ta0naremarks = this.showReport.ta0naremarks;
            this.showReportTNHT.ta0na = this.showReport.ta0na;
            this.showReportTNHT.loc_test_ta0na = this.showReport.loc_test_ta0na;
            this.showReportTNHT.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TNHT;
            // Push Data into JSON for Part 1: Temperature and Humidity
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReportTNHT);
            this.showReportPTED.assetnum = assetnum;
            this.showReportPTED.siteid = siteid;
            this.showReportPTED.wonum = wonum;
            //new object      
            this.showReportPTED.ta0naremarks = this.showReport.ta0naremarks;
            this.showReportPTED.ta0na = this.showReport.ta0na;
            this.showReportPTED.loc_test_ta0na = this.showReport.loc_test_ta0na;
            this.showReportPTED.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PTED;
            // Push Data into JSON for Part 2: Portable Test Equipment (PTE) Details
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReportPTED);
            this.showReportTHGD.assetnum = assetnum;
            this.showReportTHGD.siteid = siteid;
            this.showReportTHGD.wonum = wonum;
            //new object      
            this.showReportTHGD.ta0naremarks = this.showReport.ta0naremarks;
            this.showReportTHGD.ta0na = this.showReport.ta0na;
            this.showReportTHGD.loc_test_ta0na = this.showReport.loc_test_ta0na;
            this.showReportTHGD.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_THGD;
            // Push Data into JSON for Part 3: Thermohyhgrograph Details
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showReportTHGD);
            this.showAccErr.assetnum = assetnum;
            this.showAccErr.siteid = siteid;
            this.showAccErr.wonum = wonum;
            this.showAccErr.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATIB;
            // Push Data into JSON for Meter Accuracy Test (%Error)
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showAccErr);
            this.showAccErrf.assetnum = assetnum;
            this.showAccErrf.siteid = siteid;
            this.showAccErrf.wonum = wonum;
            this.showAccErrf.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATIA;
            // Push Data into JSON for Meter Accuracy Test (%Error)
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.showAccErrf);
            // Validate Test Status
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
            // this.gf.startLoading();
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
            // this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            var loading_1 = this.loadingCtrl.create({
                content: "Loading..."
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            /**
             * Reason   : Saving to local storage (json data).
             * Created  : 22-01-2019
             */
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                //this.gf.warningAlert("Success", "MVHV Inspection locally updated.", "Close");
                this.gf.displayToast("MVHV Inspection locally updated.");
                // this.gf.stopLoading();
                // this.navCtrl.pop();
                loading_1.dismiss();
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("ServiceExecutionPage", this.itemOri);
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
                        //item, wonumVal, pageAction, feederCode, workOrderType) 
                        var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                        var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                        var itemArray = [];
                        itemArray[0] = (itemVal);
                        _this.dataService
                            .saveRecordWithNewType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(' result + ' + JSON.stringify(results));
                            var resObj;
                            resObj = JSON.parse(results.toString());
                            if (resObj.processStatus === 'success') {
                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                                _this.gf.warningAlert("Success", "MVHV Inspection save successfully.", "Close");
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                _this.navCtrl.pop();
                            }
                            else {
                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = true;
                                _this.gf.displayToast('failed to save ' + resObj.description);
                                // this.navCtrl.pop();
                            }
                            // this.gf.stopLoading();
                            loading_1.dismiss();
                        }).catch(function (error) {
                            console.log('service failure : ' + error);
                            // this.gf.stopLoading();
                            loading_1.dismiss();
                        });
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        _this.gf.warningAlert("Success", "MVHV Inspection locally updated.", "Close");
                        // this.gf.stopLoading();
                        // this.navCtrl.pop();
                        loading_1.dismiss();
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    }
                });
            }
            else {
                var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
                var itemArray = [];
                itemArray[0] = (itemVal);
                this.dataService
                    .saveRecordWithNewType(itemVal, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                    .then(function (results) {
                    console.log(' result + ' + JSON.stringify(results));
                    var resObj;
                    resObj = JSON.parse(results.toString());
                    if (resObj.processStatus === 'success') {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                        _this.gf.warningAlert("Success", "MVHV Inspection save successfully.", "Close");
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = true;
                        _this.gf.displayToast('failed to save ' + resObj.description);
                        _this.navCtrl.pop();
                    }
                    // this.gf.stopLoading();
                    loading_1.dismiss();
                }).catch(function (error) {
                    console.log('service failure : ' + error);
                    // this.gf.stopLoading();
                    loading_1.dismiss();
                });
            }
            // this.gf.warningAlert("LPC MVHV Inspection", "Data Save Successfully.", "0k");
            // this.navCtrl.pop();
        }
        else {
            this.gf.warningAlert('Error', 'Calculation consist negative outpput', 'Close');
        }
        console.log("DATA : " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
        // }
    };
    LpcMvhvInspectPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LpcMvhvInspectPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LpcMvhvInspectPage.prototype.displayMessageToast = function (msg) {
        this.presentToast("Required field should not be empty. " + msg);
    };
    //(Ameer) check input for 5,3 allow negative value
    // Last edited on 11/10/2018 (Ameer)
    LpcMvhvInspectPage.prototype.checkUserInput2 = function (objectVal, keyString) {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
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
            case 'error1':
                this.showAccErr.ta0at_test1 = newValSlice;
                break;
            case 'error6':
                this.showAccErr.ta0at_test6 = newValSlice;
                break;
            case 'error2':
                this.showAccErr.ta0at_test2 = newValSlice;
                break;
            case 'error7':
                this.showAccErr.ta0at_test7 = newValSlice;
                break;
            case 'error3':
                this.showAccErr.ta0at_test3 = newValSlice;
                break;
            case 'error8':
                this.showAccErr.ta0at_test8 = newValSlice;
                break;
            case 'error4':
                this.showAccErr.ta0at_test4 = newValSlice;
                break;
            case 'error9':
                this.showAccErr.ta0at_test9 = newValSlice;
                break;
            case 'error5':
                this.showAccErr.ta0at_test5 = newValSlice;
                break;
            case 'error10':
                this.showAccErr.ta0at_test10 = newValSlice;
                break;
            case 'error1sec':
                this.showAccErrf.ta0at_test1 = newValSlice;
                break;
            case 'error2sec':
                this.showAccErrf.ta0at_test2 = newValSlice;
                break;
            case 'error3sec':
                this.showAccErrf.ta0at_test3 = newValSlice;
                break;
            case 'error4sec':
                this.showAccErrf.ta0at_test4 = newValSlice;
                break;
            case 'error5sec':
                this.showAccErrf.ta0at_test5 = newValSlice;
                break;
            case 'error6sec':
                this.showAccErrf.ta0at_test6 = newValSlice;
                break;
            case 'error7sec':
                this.showAccErrf.ta0at_test7 = newValSlice;
                break;
            case 'error8sec':
                this.showAccErrf.ta0at_test8 = newValSlice;
                break;
            case 'error9sec':
                this.showAccErrf.ta0at_test9 = newValSlice;
                break;
            case 'error10sec':
                this.showAccErrf.ta0at_test10 = newValSlice;
                break;
            case 'accurFirst':
                this.showSpr.ta0at_test1 = newValSlice;
                break;
            case 'accurSecond':
                this.showSpr.ta0at_test2 = newValSlice;
                break;
            case 'accurThird':
                this.showSpr.ta0at_test3 = newValSlice;
                break;
        }
    };
    LpcMvhvInspectPage.prototype.checkPhaseRotation = function (eventVal, key) {
        var RexExp = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-Za-z]*)?$/;
        var newValue = eventVal.target.value;
        var regExp = new RegExp(RexExp);
        var newVal2;
        var newValSlice;
        if (!RexExp.test(newValue)) {
            newVal2 = newValue.substr(0, newValue.length - 1);
            eventVal.target.value = newVal2;
            newValSlice = eventVal.target.value;
        }
        else {
            newValSlice = eventVal.target.value;
        }
        switch (key) {
            case 'phaseRotation':
                this.showVoltage.ta0ph_rotation = newValSlice;
        }
    };
    /**
    * Hide Show Meter Date Time Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showMeterDateTimeTestSection = function (index) {
        index++;
        if (this.showMeterDateTimeTest === false) {
            this.showMeterDateTimeTest = true;
        }
        else if (index === 2) {
            this.showMeterDateTimeTest = false;
        }
    };
    /**
    * Hide Show Voltage Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showVoltageTestSection = function (index) {
        index++;
        if (this.showVoltageTest === false) {
            this.showVoltageTest = true;
        }
        else if (index === 2) {
            this.showVoltageTest = false;
        }
    };
    /**
    * Hide Show Spr Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showSprTestSection = function (index) {
        index++;
        if (this.showSprTest === false) {
            this.showSprTest = true;
        }
        else if (index === 2) {
            this.showSprTest = false;
        }
    };
    /**
    * Hide Show Energy Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showEnergyTestSection = function (index) {
        index++;
        if (this.showEnergyTest === false) {
            this.showEnergyTest = true;
        }
        else if (index === 2) {
            this.showEnergyTest = false;
        }
    };
    /**
    * Hide Show Energy Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showPowerValTestSection = function (index) {
        index++;
        if (this.showPowerValTest === false) {
            this.showPowerValTest = true;
        }
        else if (index === 2) {
            this.showPowerValTest = false;
        }
    };
    /**
    * Hide Show Register Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showRegisterTestSection = function (index) {
        index++;
        if (this.showRegisterTest === false) {
            this.showRegisterTest = true;
        }
        else if (index === 2) {
            this.showRegisterTest = false;
        }
    };
    /**
    * Hide Show LED Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showLedTestSection = function (index) {
        index++;
        if (this.showLedTest === false) {
            this.showLedTest = true;
        }
        else if (index === 2) {
            this.showLedTest = false;
        }
    };
    /**
    * Hide Show Report Test Section
    * Created  : Alif
    * Date     : 13-11-2018
    */
    LpcMvhvInspectPage.prototype.showReportTestSection = function (index) {
        index++;
        if (this.showReportTest === false) {
            this.showReportTest = true;
        }
        else if (index === 2) {
            this.showReportTest = false;
        }
    };
    /**
   * Hide Show Accuracy Error Test Section
   * Created  : Alif
   * Date     : 13-11-2018
   */
    LpcMvhvInspectPage.prototype.showAccErrTestSection = function (index) {
        index++;
        if (this.showAccErrTest === false) {
            this.showAccErrTest = true;
        }
        else if (index === 2) {
            this.showAccErrTest = false;
        }
    };
    /**
     * Not applicable Note...
     * @param action
     */
    LpcMvhvInspectPage.prototype.showAllRemarkCommon = function (action) {
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
    LpcMvhvInspectPage.prototype.commonNotApplication = function (value) {
        if (value === 'Y') {
            this.showContainRemak = true;
            // METER DATE & TIME
            this.showMeterDateTime.loc_test_ta0na = 'Y';
            this.showMeterDateTime.ta0na = true;
            this.showMeterDateTimeTest = false;
            // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
            this.showVoltage.loc_test_ta0na = 'Y';
            this.showVoltage.ta0na = true;
            this.showVoltageTest = false;
            // ENERGY READING RECORDED BY METER
            this.showEnergy.loc_test_ta0na = 'Y';
            this.showEnergy.ta0na = true;
            this.showSprTest = false;
            // SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT (PTE)
            this.showSpr.loc_test_ta0na = 'Y';
            this.showSpr.ta0na = true;
            this.showEnergyTest = false;
            // POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND CACULATION (P3)
            this.showPowerVal.loc_test_ta0na = 'Y';
            this.showPowerVal.ta0na = true;
            this.showPowerValTest = false;
            // REGISTER TEST USING PORTABLE EQUIPMENT (PTE)
            this.showRegister.loc_test_ta0na = 'Y';
            this.showRegister.ta0na = true;
            this.showRegisterTest = false;
            // METER POWER FLOW / LED INDICATION TEST
            this.showLed.loc_test_ta0na = 'Y';
            this.showLed.ta0na = true;
            this.showLedTest = false;
            // TEST REPORT VERIFICATION ACCURACY METER ON SITE
            this.showReport.loc_test_ta0na = 'Y';
            this.showReport.ta0na = true;
            this.showReportTest = false;
            // METER ACCURACY TEST (%ERROR)
            this.showAccErr.loc_test_ta0na = 'Y';
            this.showAccErr.ta0na = true;
            this.showAccErrTest = false;
        }
        else {
            this.showContainRemak = false;
            // METER DATE & TIME
            this.showMeterDateTime.loc_test_ta0na = 'N';
            this.showMeterDateTime.ta0na = false;
            this.showMeterDateTimeTest = true;
            // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
            this.showVoltage.loc_test_ta0na = 'N';
            this.showVoltage.ta0na = false;
            this.showVoltageTest = true;
            // ENERGY READING RECORDED BY METER
            this.showEnergy.loc_test_ta0na = 'N';
            this.showEnergy.ta0na = false;
            this.showSprTest = true;
            // SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT (PTE)
            this.showSpr.loc_test_ta0na = 'N';
            this.showSpr.ta0na = false;
            this.showEnergyTest = true;
            // POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND CACULATION (P3)
            this.showPowerVal.loc_test_ta0na = 'N';
            this.showPowerVal.ta0na = false;
            this.showPowerValTest = true;
            // REGISTER TEST USING PORTABLE EQUIPMENT (PTE)
            this.showRegister.loc_test_ta0na = 'N';
            this.showRegister.ta0na = false;
            this.showRegisterTest = true;
            // METER POWER FLOW / LED INDICATION TEST
            this.showLed.loc_test_ta0na = 'N';
            this.showLed.ta0na = false;
            this.showLedTest = true;
            // TEST REPORT VERIFICATION ACCURACY METER ON SITE
            this.showReport.loc_test_ta0na = 'N';
            this.showReport.ta0na = false;
            this.showReportTest = true;
            // METER ACCURACY TEST (%ERROR)
            this.showAccErr.loc_test_ta0na = 'N';
            this.showAccErr.ta0na = false;
            this.showAccErrTest = true;
        }
    };
    /**
     * commonRemark Changes Reflecting factor...
     */
    LpcMvhvInspectPage.prototype.commonNotApplicationRemark = function () {
        // METER DATE & TIME
        this.showMeterDateTime.ta0naremarks = this.ta0Remark;
        // VOLTAGE READING & PH-ROTATION IN TERMINAL METER
        this.showVoltage.ta0naremarks = this.ta0Remark;
        // ENERGY READING RECORDED BY METER
        this.showEnergy.ta0naremarks = this.ta0Remark;
        // SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT (PTE)
        this.showSpr.ta0naremarks = this.ta0Remark;
        // POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND CACULATION (P3)
        this.showPowerVal.ta0naremarks = this.ta0Remark;
        // REGISTER TEST USING PORTABLE EQUIPMENT (PTE)
        this.showRegister.ta0naremarks = this.ta0Remark;
        // METER POWER FLOW / LED INDICATION TEST
        this.showLed.ta0naremarks = this.ta0Remark;
        // TEST REPORT VERIFICATION ACCURACY METER ON SITE
        this.showReport.ta0naremarks = this.ta0Remark;
        // METER ACCURACY TEST (%ERROR)
        this.showAccErr.ta0naremarks = this.ta0Remark;
    };
    /**
     * Auto calculate Transformation Ratio using Input by User (CT * PT)
     * Created: Alif
     * Date: 13/12/2018
     * Edited: Ameer (18/12/2018)
     */
    LpcMvhvInspectPage.prototype.calculateTransformerRatio = function () {
        var total = 0;
        if (typeof (this.ctRatio) !== "undefined" || typeof (this.pt) !== "undefined") {
            total = (Number(this.ctRatio)) * (Number(this.pt));
            if (isNaN(total)) {
                this.showSpr.ta0pr_transformationfactor = 0;
            }
            else {
                var transforFactor;
                transforFactor = (Number(total / 1000));
                this.showSpr.ta0pr_transformationfactor = transforFactor.toFixed(3);
                // this.pt = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0voltageratio;
                // this.ctRatio = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0currentratio;
            }
        }
        else {
            this.showSpr.ta0pr_transformationfactor = 0;
        }
        this.showSpr.ta0pr_totalpower_prim = ((this.showSpr.ta0pr_totalpower_sec * this.showSpr.ta0pr_transformationfactor).toFixed(3));
        if (isNaN(this.showSpr.ta0pr_totalpower_prim)) {
            this.showSpr.ta0pr_totalpower_prim = 0;
        }
    };
    LpcMvhvInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lpc-mvhv-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/deviceTestforms/lpc-mvhv-inspect/lpc-mvhv-inspect.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>LPC - MVHV Inspection</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!--Not Applicable for all Start-->\n    <div>\n      <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>Not Applicable For All</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAllCommonRemarkDetails"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAllCommonRemarkDetails"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div *ngIf="showAllCommonRemarkDetails">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable For All</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="ta0na" (ionChange)="commonNotApplication($event)" interface="popover">\n                  <ion-option value="Y" [selected]="ta0na === \'Y\'">Yes</ion-option>\n                  <ion-option value="N" [selected]="ta0na === \'N\'">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="showContainRemak">\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks for All</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" [(ngModel)]="ta0Remark" maxlength="40" type="text"\n                  placeholder="Please Enter Remark" (keyup)="commonNotApplicationRemark()"></ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <!--Not Applicable for all End-->\n\n    <!-- Date & Time Meter-->\n    <ion-item-divider color="light" class="pointer" (click)="showMeterDateTimeTestSection(1)">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER DATE & TIME</strong>\n        </ion-col>\n        <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showMeterDateTimeTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showMeterDateTimeTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="showMeterDateTime">\n      <div *ngIf="showMeterDateTimeTest">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="showMeterDateTime.loc_test_ta0na" (ionChange)="hideShowMeterDateTime()"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showMeterDateTime.ta0na">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showMeterDateTime.ta0naremarks"\n                placeholder="Please Enter Remark"\n                [ngClass]="(showMeterDateTime.ta0naremarks == \'\' || showMeterDateTime.ta0naremarks == undefined && !validateRemark1) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!showMeterDateTime.ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Actual Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="showMeterDateTime.ta0md_meterdatetime"\n                  [ngClass]="(showMeterDateTime.ta0md_meterdatetime == \'\' || showMeterDateTime.ta0md_meterdatetime == undefined && !validateTest1) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" *ngIf="showMainMeter">Supplier: Main Meter</ion-label>\n                <ion-label color="primary" *ngIf="!showMainMeter">Supplier: Check Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Date</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DDD MMM YYYY"\n                  [(ngModel)]="showMeterDateTime.ta0md_meterdatetime" [max]="gv.maxDate"\n                  [ngClass]="(showMeterDateTime.ta0md_meterdatetime == \'\' || showMeterDateTime.ta0md_meterdatetime == undefined && !validateTest1) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="showMeterDateTime.ta0md_meterdatetime"\n                  [ngClass]="(showMeterDateTime.ta0md_meterdatetime == \'\' || showMeterDateTime.ta0md_meterdatetime == undefined && !validateTest1) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <div *ngIf="showMainMeter">\n      <!-- Voltage reading and Ph Rotation test  -->\n      <ion-item-divider color="light" class="pointer" (click)="showVoltageTestSection(1)">\n        <ion-row align-items-center>\n          <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>VOLTAGE READING & PH-ROTATION IN TERMINAL METER</strong>\n          </ion-col>\n          <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showVoltageTest"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showVoltageTest"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div id="showVoltage">\n        <div *ngIf="showVoltageTest">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="showVoltage.loc_test_ta0na" (ionChange)="hideShowVoltageTest()"\n                  interface="popover">\n                  <ion-option value="Y">Yes</ion-option>\n                  <ion-option value="N">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="showVoltage.ta0na">\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" id="remark" type="text" [(ngModel)]="showVoltage.ta0naremarks"\n                  placeholder="Please Enter Remark"\n                  [ngClass]="(showVoltage.ta0naremarks == \'\' || showVoltage.ta0naremarks == undefined && !validateRemark2) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="!showVoltage.ta0na">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" *ngIf="showMainMeter">Device Allocation Type: Main Meter</ion-label>\n                  <ion-label color="primary" *ngIf="!showMainMeter">Device Allocation Type: Check Meter</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RY</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_ry" type="text" placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_ry === \'\' || showVoltage.ta0vr_ry === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'RY\')" (change)="calculateAveragePteSection()"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">YB</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_yb" type="text" placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_yb === \'\' || showVoltage.ta0vr_yb === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'YB\')" (change)="calculateAveragePteSection()"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RB</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_rb" type="text" placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_rb === \'\' || showVoltage.ta0vr_rb === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'RB\')" (change)="calculateAveragePteSection()"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RN</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_rn" type="text" placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_rn === \'\' || showVoltage.ta0vr_rn === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'RN\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">YN</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_yn" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_yn === \'\' ||showVoltage.ta0vr_yn === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'YN\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">BN</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_bn" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_bn === \'\' ||showVoltage.ta0vr_bn === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'BN\')"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_re" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_re === \'\' ||showVoltage.ta0vr_re === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'RE\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">YE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_ye" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_ye === \'\' ||showVoltage.ta0vr_ye === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'YE\')" v></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">BE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_be" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_be === \'\' ||showVoltage.ta0vr_be === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'BE\')"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">NE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0vr_ne" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0vr_ne === \'\' ||showVoltage.ta0vr_ne === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkUserInput($event,\'NE\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Phase Rotation</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="showVoltage.ta0ph_rotation" type="text" maxlength="11"\n                    placeholder="Enter value"\n                    [ngClass]="(showVoltage.ta0ph_rotation === \'\' ||showVoltage.ta0ph_rotation === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (keyup)="checkPhaseRotation($event,\'phaseRotation\')"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item-divider color="light">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                      Current\n                    </ion-col>\n                  </ion-row>\n                </ion-item-divider>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label color="primary">R : </ion-label>\n                  <ion-input type="text" maxlength="11" (ionChange)="calculateVolRotation()"\n                    [(ngModel)]="showVoltage.ta0vr_sg_ir"\n                    [ngClass]="(showVoltage.ta0vr_sg_ir === \'\' || showVoltage.ta0vr_sg_ir === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'crrRed\')" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label color="primary">Y : </ion-label>\n                  <ion-input type="text" maxlength="11" (ionChange)="calculateVolRotation()"\n                    [(ngModel)]="showVoltage.ta0vr_sg_iy"\n                    [ngClass]="(showVoltage.ta0vr_sg_iy === \'\' || showVoltage.ta0vr_sg_iy === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'crrYellow\')" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label color="primary">B : </ion-label>\n                  <ion-input type="text" maxlength="11" (ionChange)="calculateVolRotation()"\n                    [(ngModel)]="showVoltage.ta0vr_sg_ib"\n                    [ngClass]="(showVoltage.ta0vr_sg_ib === \'\' || showVoltage.ta0vr_sg_ib === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'crrBlue\')" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (ionChange)="calculateVolRotation()" [(ngModel)]="showVoltage.ta0vr_sg_ir"\n                  [ngClass]="(showVoltage.ta0vr_sg_ir === \'\' || showVoltage.ta0vr_sg_ir === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Please enter value" (keyup)="checkUserInput($event,\'crrRed\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (ionChange)="calculateVolRotation()" [(ngModel)]="showVoltage.ta0vr_sg_iy"\n                  [ngClass]="(showVoltage.ta0vr_sg_iy === \'\' || showVoltage.ta0vr_sg_iy === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Please enter value" (keyup)="checkUserInput($event,\'crrYellow\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (ionChange)="calculateVolRotation()" [(ngModel)]="showVoltage.ta0vr_sg_ib"\n                  [ngClass]="(showVoltage.ta0vr_sg_ib === \'\' || showVoltage.ta0vr_sg_ib === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Please enter value" (keyup)="checkUserInput($event,\'crrBlue\')"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row> -->\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item-divider color="light">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                      Calculate Primary\n                    </ion-col>\n                  </ion-row>\n                </ion-item-divider>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">R : </ion-label>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'primRed\')"\n                    [(ngModel)]="showVoltage.ta0vr_sg_cal_prim_ir" [readonly]="isReadonly" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Y : </ion-label>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'primYellow\')"\n                    [(ngModel)]="showVoltage.ta0vr_sg_cal_prim_iy" [readonly]="isReadonly" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">B : </ion-label>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'primBlue\')"\n                    [(ngModel)]="showVoltage.ta0vr_sg_cal_prim_ib" [readonly]="isReadonly" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'primRed\')" [(ngModel)]="showVoltage.ta0vr_sg_cal_prim_ir"\n                  [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'primYellow\')" [(ngModel)]="showVoltage.ta0vr_sg_cal_prim_iy"\n                  [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'primBlue\')" [(ngModel)]="showVoltage.ta0vr_sg_cal_prim_ib"\n                  [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row> -->\n\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item-divider color="light">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                      Secondary From Portable Test\n                    </ion-col>\n                  </ion-row>\n                </ion-item-divider>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label color="primary">R : </ion-label>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'secPortRed\')"\n                    [(ngModel)]="showVoltage.ta0vr_pte_ir" (ionChange)="calculateVolRotation()"\n                    [ngClass]="(showVoltage.ta0vr_pte_ir === \'\' || showVoltage.ta0vr_pte_ir === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label color="primary">Y : </ion-label>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'secPortYellow\')"\n                    [(ngModel)]="showVoltage.ta0vr_pte_iy" (ionChange)="calculateVolRotation()"\n                    [ngClass]="(showVoltage.ta0vr_pte_iy === \'\' || showVoltage.ta0vr_pte_iy === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label color="primary">B : </ion-label>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'secPortBlue\')"\n                    [(ngModel)]="showVoltage.ta0vr_pte_ib" (ionChange)="calculateVolRotation()"\n                    [ngClass]="(showVoltage.ta0vr_pte_ib === \'\' || showVoltage.ta0vr_pte_ib === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'secPortRed\')" [(ngModel)]="showVoltage.ta0vr_pte_ir"\n                  (ionChange)="calculateVolRotation()" [ngClass]="(showVoltage.ta0vr_pte_ir === \'\' || showVoltage.ta0vr_pte_ir === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Please enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'secPortYellow\')" [(ngModel)]="showVoltage.ta0vr_pte_iy"\n                  (ionChange)="calculateVolRotation()" [ngClass]="(showVoltage.ta0vr_pte_iy === \'\' || showVoltage.ta0vr_pte_iy === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Please enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'secPortBlue\')" [(ngModel)]="showVoltage.ta0vr_pte_ib"\n                  (ionChange)="calculateVolRotation()" [ngClass]="(showVoltage.ta0vr_pte_ib === \'\' || showVoltage.ta0vr_pte_ib === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Please enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row> -->\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item-divider color="light">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                      Calculate CT Ratio\n                    </ion-col>\n                  </ion-row>\n                </ion-item-divider>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">R : </ion-label>\n                  <ion-input type="text" maxlength="11" [(ngModel)]="showVoltage.ta0vr_pte_cal_ctratio_ir"\n                    [readonly]="isReadonly" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Y : </ion-label>\n                  <ion-input type="text" maxlength="11" [(ngModel)]="showVoltage.ta0vr_pte_cal_ctratio_iy"\n                    [readonly]="isReadonly" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">B : </ion-label>\n                  <ion-input type="number" maxlength="8" [(ngModel)]="showVoltage.ta0vr_pte_cal_ctratio_ib"\n                    [readonly]="isReadonly" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" [(ngModel)]="showVoltage.ta0vr_pte_cal_ctratio_ir" [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" [(ngModel)]="showVoltage.ta0vr_pte_cal_ctratio_iy" [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" maxlength="8" [(ngModel)]="showVoltage.ta0vr_pte_cal_ctratio_ib" [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row> -->\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item-divider color="light">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                      Switchgear & Metering\n                    </ion-col>\n                  </ion-row>\n                </ion-item-divider>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Switchgear</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'swtichgear1\')"\n                    (ionChange)="calculateVolRotation()" [(ngModel)]="showVoltage.ta0vr_sg_ctratio_n"\n                    [ngClass]="(showVoltage.ta0vr_sg_ctratio_n === \'\' || showVoltage.ta0vr_sg_ctratio_n === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-center no-lines>\n                  <ion-label color="primary">/</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'swtichgear2\')"\n                    (ionChange)="calculateVolRotation()" [(ngModel)]="showVoltage.ta0vr_sg_ctratio_d"\n                    [ngClass]="(showVoltage.ta0vr_sg_ctratio_d === \'\' || showVoltage.ta0vr_sg_ctratio_d === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-center no-lines>\n                  <ion-label color="primary">A</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Metering</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input type="text" (keyup)="checkUserInput($event,\'metering1\')"\n                    (ionChange)="CalculationpowerRead()" [(ngModel)]="showVoltage.ta0vr_pte_ctratio_n"\n                    [ngClass]="(showVoltage.ta0vr_pte_ctratio_n === \'\' || showVoltage.ta0vr_pte_ctratio_n === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-center no-lines>\n                  <ion-label color="primary">/</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input type="text" (keyup)="checkUserInput($event,\'metering2\')"\n                    (ionChange)="CalculationpowerRead()" [(ngModel)]="showVoltage.ta0vr_pte_ctratio_d"\n                    [ngClass]="(showVoltage.ta0vr_pte_ctratio_d === \'\' || showVoltage.ta0vr_pte_ctratio_d === undefined && !validateTest2) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-center no-lines>\n                  <ion-label color="primary">A</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ion-item-divider color="light" class="pointer" (click)="showEnergyTestSection(1)">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>ENERGY READING RECORDED BY METER</strong>\n        </ion-col>\n        <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showEnergyTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showEnergyTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="showEnergy">\n      <div *ngIf="showEnergyTest">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="showEnergy.loc_test_ta0na" (ionChange)="hideShowEnergyTest()"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showEnergy.ta0na">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showEnergy.ta0naremarks"\n                placeholder="Please enter remark"\n                [ngClass]="(showEnergy.ta0naremarks === \'\' || showEnergy.ta0naremarks === undefined && !validateRemark3) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!showEnergy.ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Start Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">End Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Duration (Hour)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" (ionChange)="CalculationDuration()"\n                  [(ngModel)]="showEnergy.ta0er_starttime" placeholder="Select value"\n                  [ngClass]="(showEnergy.ta0er_starttime === \'\' || showEnergy.ta0er_starttime === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" (ionChange)="CalculationDuration()"\n                  [(ngModel)]="showEnergy.ta0er_endtime" placeholder="Select value"\n                  [ngClass]="(showEnergy.ta0er_endtime === \'\' || showEnergy.ta0er_endtime === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="remark" type="text" [(ngModel)]="showEnergy.ta0er_duration" [readonly]="isReadonly">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" *ngIf="showMainMeter">Device Allocation Type: Main Meter</ion-label>\n                <ion-label color="primary" *ngIf="!showMainMeter">Device Allocation Type: Check Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- applicable Heading -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" *ngIf="showMainMeter">Supplier: Main Meter</ion-label>\n                <ion-label color="primary" *ngIf="!showMainMeter">Supplier: Check Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Reading</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Code</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Final</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Initial</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="number" maxlength="8" [(ngModel)]="showEnergy.ta0er_registercode"\n                  [ngClass]="(showEnergy.ta0er_registercode === \'\' || showEnergy.ta0er_registercode === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" (change)="CalculationSupplier()"\n                  [(ngModel)]="showEnergy.ta0er_readingafter"\n                  [ngClass]="(showEnergy.ta0er_readingafter === \'\' || showEnergy.ta0er_readingafter === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value" (keyup)="allow10input($event,\'mtrFinal\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" placeholder="Enter value" (change)="CalculationSupplier()"\n                  [(ngModel)]="showEnergy.ta0er_readingbefore" (keyup)="allow10input($event,\'mtrInitial\')"\n                  [ngClass]="(showEnergy.ta0er_readingbefore === \'\' || showEnergy.ta0er_readingbefore === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">MF</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RF</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" (change)="CalculationSupplier()" [(ngModel)]="showEnergy.ta0er_mf"\n                  maxlength="8"\n                  [ngClass]="(showEnergy.ta0er_mf === \'\' || showEnergy.ta0er_mf === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value" (keyup)="checkUserInput($event,\'mtrMF\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" (change)="CalculationSupplier(\'\')" [(ngModel)]="showEnergy.ta0er_rf"\n                  maxlength="8"\n                  [ngClass]="(showEnergy.ta0er_rf === \'\' || showEnergy.ta0er_rf === undefined && !validateTest3) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value" (keyup)="checkUserInput($event,\'mtrRF\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" [(ngModel)]="showEnergy.ta0er_usage" maxlength="11"\n                  [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <ion-item-divider color="light" class="pointer" (click)="showSprTestSection(1)">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>SECONDARY POWER READING FROM PORTABLE TEST EQUIPMENT\n            (PTE)</strong>\n        </ion-col>\n        <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSprTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSprTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="showSpr">\n      <div *ngIf="showSprTest">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="showSpr.loc_test_ta0na" (ionChange)="hideShowSprTest()" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showSpr.ta0na">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showSpr.ta0naremarks"\n                placeholder="Please enter remark"\n                [ngClass]="(showSpr.ta0naremarks === \'\' || showSpr.ta0naremarks === undefined && !validateRemark4) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!showSpr.ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" *ngIf="showMainMeter">Device Allocation Type: Main Meter</ion-label>\n                <ion-label color="primary" *ngIf="!showMainMeter">Device Allocation Type: Check Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <div *ngIf="showMainMeter">\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 1: Secondary Power Reading from PTE\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <!-- applicable Heading -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" *ngIf="showMainMeter">Supplier: Main Meter</ion-label>\n                  <ion-label color="primary" *ngIf="!showMainMeter">Supplier: Check Meter</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" text-center><strong>PH</strong></ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary"><strong>ACTIVE</strong></ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary"><strong>REACTIVE</strong></ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary"><strong>PF</strong></ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- 1st row  start -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" text-center>Red</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" (change)="CalculationpowerRead()" maxlength="11"\n                    [(ngModel)]="showSpr.ta0pr_active_r"\n                    [ngClass]="(showSpr.ta0pr_active_r === \'\' || showSpr.ta0pr_active_r === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'activeRed\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (change)="CalculationpowerRead()"\n                    [(ngModel)]="showSpr.ta0pr_reactive_r"\n                    [ngClass]="(showSpr.ta0pr_reactive_r === \'\' || showSpr.ta0pr_reactive_r === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'reactiveRed\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showSpr.ta0pr_pf_r"\n                    [ngClass]="(showSpr.ta0pr_pf_r === \'\' || showSpr.ta0pr_pf_r === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'pfRed\')"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- 2nd row  start -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" text-center>Yellow</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (change)="CalculationpowerRead()"\n                    [(ngModel)]="showSpr.ta0pr_active_y"\n                    [ngClass]="(showSpr.ta0pr_active_y === \'\' || showSpr.ta0pr_active_y === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'activeYellow\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (change)="CalculationpowerRead()"\n                    [(ngModel)]="showSpr.ta0pr_reactive_y"\n                    [ngClass]="(showSpr.ta0pr_reactive_y === \'\' || showSpr.ta0pr_reactive_y === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'reactiveYellow\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showSpr.ta0pr_pf_y"\n                    [ngClass]="(showSpr.ta0pr_pf_y === \'\' || showSpr.ta0pr_pf_y === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'pfYellow\')"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- 3rd row  start -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" text-center>Blue</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (change)="CalculationpowerRead()"\n                    [(ngModel)]="showSpr.ta0pr_active_b"\n                    [ngClass]="(showSpr.ta0pr_active_b === \'\' || showSpr.ta0pr_active_b === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'activeBlue\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (change)="CalculationpowerRead()"\n                    [(ngModel)]="showSpr.ta0pr_reactive_b"\n                    [ngClass]="(showSpr.ta0pr_reactive_b === \'\' || showSpr.ta0pr_reactive_b === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'reactiveBlue\')"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showSpr.ta0pr_pf_b"\n                    [ngClass]="(showSpr.ta0pr_pf_b === \'\' || showSpr.ta0pr_pf_b === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value" (keyup)="checkUserInput($event,\'pfBlue\')"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- 4th row  start -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" text-center>Total</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'totalActive\')"\n                    [(ngModel)]="showSpr.ta0pr_active_total" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'reactivetotal\')"\n                    [(ngModel)]="showSpr.ta0pr_reactive_total" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'pfTotal\')"\n                    placeholder="Enter value" (change)="CalculationpowerRead()" [(ngModel)]="showSpr.ta0pr_pf_total"\n                    [ngClass]="(showSpr.ta0pr_pf_total === \'\' || showSpr.ta0pr_pf_total === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <ion-item-divider color="light">Part 2: Meter Accuracy Test (% Error) kVARh </ion-item-divider>\n          <!-- applicable Heading -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">First</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Second</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Third</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- 1st row  start -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" maxlength="11" (change)="CalculationAcurancy()"\n                  [(ngModel)]="showSpr.ta0at_test1"\n                  [ngClass]="(showSpr.ta0at_test1 === \'\' || showSpr.ta0at_test1 === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value" (keyup)="checkUserInput2($event,\'accurFirst\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="tel" maxlength="11" (change)="CalculationAcurancy()"\n                  [(ngModel)]="showSpr.ta0at_test2"\n                  [ngClass]="(showSpr.ta0at_test2 === \'\' || showSpr.ta0at_test2 === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value" (keyup)="checkUserInput2($event,\'accurSecond\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" maxlength="11" (change)="CalculationAcurancy()"\n                  [(ngModel)]="showSpr.ta0at_test3"\n                  [ngClass]="(showSpr.ta0at_test3 === \'\' || showSpr.ta0at_test3 === undefined && !validateTest4) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value" (keyup)="checkUserInput2($event,\'accurThird\')"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showSpr.ta0at_avg" [readonly]="isReadonly">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <div *ngIf="showMainMeter">\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 3: Total Power Calculation (kWh)\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <!-- applicable Heading -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">CT Ratio (A)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" [readonly]="true" value="{{ctRatioDisplay}} A" type="text"\n                    (change)="calculateTransformerRatio()">\n\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">PT Ratio (V)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" value="{{ptRatioDisplay}} V" [readonly]="true"\n                    (change)="calculateTransformerRatio()">\n\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">x (Total Power (sec))</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showSpr.ta0pr_totalpower_sec"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">y (Transformation Factor) (kW)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showSpr.ta0pr_transformationfactor"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label text-wrap style="font-style:italic;font-size: 12px;">Transformation Factor = CT Ratio X PT\n                    Ratio\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">z (Total Power (Primary)) (kW)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input type="text" maxlength="11" [(ngModel)]="showSpr.ta0pr_totalpower_prim"\n                    [readonly]=isReadonly></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item no-lines>\n                  <ion-label text-wrap style="font-style:italic;font-size: 12px;"> Total Power (Primary) = Total\n                    Power(Sec)X\n                    Transformation\n                    Factor</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf="showMainMeter">\n      <ion-item-divider color="light" text-wrap class="pointer" (click)="showPowerValTestSection(1)">\n        <ion-row align-items-center>\n          <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>POWER VALUE DIFFERENCE AMONG PTE (P0), METER (P1 & P2) AND\n              CACULATION (P3)</strong>\n          </ion-col>\n          <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showPowerValTest"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showPowerValTest"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div id="showPowerVal">\n        <div *ngIf="showPowerValTest">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="showPowerVal.loc_test_ta0na" (ionChange)="hideShowPowerValTest()"\n                  interface="popover">\n                  <ion-option value="Y">Yes</ion-option>\n                  <ion-option value="N">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="showPowerVal.ta0na">\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showPowerVal.ta0naremarks"\n                  placeholder="Please enter remark"\n                  [ngClass]="(showPowerVal.ta0naremarks === \'\' || showPowerVal.ta0naremarks === undefined && !validateRemark5) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="!showPowerVal.ta0na">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" *ngIf="showMainMeter">Device Allocation Type: Main Meter</ion-label>\n                  <ion-label color="primary" *ngIf="!showMainMeter">Device Allocation Type: Check Meter</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 1: From Item - Energy Power Recorded By Meter\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <!-- applicable Heading -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Usage kWh, A =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" (keyup)="checkUserInput($event,\'kWHA\')" (change)="Calculationp1()"\n                    [(ngModel)]="showPowerVal.ta0pwc_usage" maxlength="9"\n                    [ngClass]="(showPowerVal.ta0pwc_usage === \'\' || showPowerVal.ta0pwc_usage === undefined && !validateTest5) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Duration (Hour), B =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" (keyup)="checkUserInput($event,\'durB\')" (change)="Calculationp1()"\n                    [(ngModel)]="showPowerVal.ta0pwc_nexthour" maxlength="9"\n                    [ngClass]="(showPowerVal.ta0pwc_nexthour === \'\' || showPowerVal.ta0pwc_nexthour === undefined && !validateTest5) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">P1 = Estimated Demand, A/B =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="estDmnd" type="text" [(ngModel)]="showPowerVal.ta0pwc_estdemand" maxlength="11"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">P2 = Metered Demand =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'meterDemand\')"\n                    [(ngModel)]="showPowerVal.ta0pwc_metereddemand"\n                    [ngClass]="(showPowerVal.ta0pwc_metereddemand === \'\' || showPowerVal.ta0pwc_metereddemand === undefined && !validateTest5) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-item-divider color="light" text-wrap>\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 2: From Item - Power Value Difference among PTE(P0), Meter (P1 & P2) and Calculation (P3)\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <!-- applicable Heading -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Average Voltage (kV) =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" (keyup)="checkUserInput($event,\'avgVoltage\')"\n                    (change)="Calculationpte()" [(ngModel)]="showPowerVal.ta0pwc_avgvoltage"\n                    [ngClass]="(showPowerVal.ta0pwc_avgvoltage === \'\' || showPowerVal.ta0pwc_avgvoltage === undefined && !validateTest5) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Average Amps, I =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'avgAmps\')"\n                    (change)="Calculationpte()" [(ngModel)]="showPowerVal.ta0pwc_avgamps"\n                    [ngClass]="(showPowerVal.ta0pwc_avgamps === \'\' || showPowerVal.ta0pwc_avgamps === undefined && !validateTest5) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Average PF, Cos 0 =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'avgPf\')"\n                    (change)="Calculationpte()" [(ngModel)]="showPowerVal.ta0pwc_avgpf"\n                    [ngClass]="(showPowerVal.ta0pwc_avgpf === \'\' || showPowerVal.ta0pwc_avgpf === undefined && !validateTest5) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">P3 = /3 VI Cos 0 (kW) =</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showPowerVal.ta0pwc_p3"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <!-- end showPowerVal -->\n      </div>\n    </div>\n\n    <ion-item-divider color="light" class="pointer" (click)="showRegisterTestSection(1)">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>REGISTER TEST USING PORTABLE EQUIPMENT (PTE)</strong>\n        </ion-col>\n        <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showRegisterTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showRegisterTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="showRegister">\n      <div *ngIf="showRegisterTest">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="showRegister.loc_test_ta0na" (ionChange)="hideShowRegisterTest()"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRegister.ta0na">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showRegister.ta0naremarks"\n                placeholder="Please enter remark"\n                [ngClass]="(showRegister.ta0naremarks === \'\' || showRegister.ta0naremarks === undefined && !validateRemark6) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!showRegister.ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" *ngIf="showMainMeter">Device Allocation Type: Main Meter</ion-label>\n                <ion-label color="primary" *ngIf="!showMainMeter">Device Allocation Type: Check Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 1: Meter Reading (kWh)\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Final</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'kwhFinal\')"\n                  (change)="CalculationKwh()" [(ngModel)]="showRegister.ta0reg_amf"\n                  [ngClass]="(showRegister.ta0reg_amf === \'\' || showRegister.ta0reg_amf === undefined && !validateTest6) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap: break-all; padding-left: 5px;">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Initial</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" (keyup)="checkUserInput($event,\'kwhInitial\')"\n                  (change)="CalculationKwh()" [(ngModel)]="showRegister.ta0reg_amb"\n                  [ngClass]="(showRegister.ta0reg_amb === \'\' || showRegister.ta0reg_amb === undefined && !validateTest6) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" maxlength="11" [(ngModel)]="showRegister.ta0reg_amc" [readonly]="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 2: Test Equipment Reading (kWh)\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Reading</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <!-- can\'t enter decimal value  it is integer -->\n                <ion-input id="code" type="text" maxlength="11" (keyup)="checkUserInput($event,\'kwhReading\')"\n                  (change)="CalculationKwh()" [(ngModel)]="showRegister.ta0reg_pteread"\n                  [ngClass]="(showRegister.ta0reg_pteread === \'\' || showRegister.ta0reg_pteread === undefined && !validateTest6) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Error</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="code" type="text" maxlength="11" [(ngModel)]="showRegister.ta0reg_pteerror"\n                  [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-item-divider color="light" *ngIf="showCheckPulse">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 3: Check Pulse Connection (kWh)\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-grid\n            style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let attr of checkPulseConnectionArray; let i = index">\n            <ion-row *ngIf="showCheckPulse">\n              <ion-col *ngIf="showMainMeter" col-12 col-sm-12 col-md-6\n                style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label *ngIf="i === 0" color="primary">M - {{ i + 1 }} ({{ allocationType === \'90\' ? \'Main Meter\'\n                    :\n                    allocationType === \'94\' ? \'Sub Meter\' : \'Sub Meter\' }}) 180</ion-label>\n                  <ion-label *ngIf="i !== 0" color="primary">M - {{ i + 1 }} ({{ allocationType === \'90\' ? \'Feeder\n                    Meter\'\n                    : allocationType === \'94\' ? \'Sub Feeder Meter\' : \'Main Meter\' }}) 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col *ngIf="!showMainMeter" col-12 col-sm-12 col-md-6\n                style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label *ngIf="i === 0" color="primary">M - {{ i + 1 }} ({{ allocationType === \'92\' ? \'Check\n                    Meter\'\n                    : allocationType === \'95\' ? \'Check Sub Meter\' : \'Check Meter\' }}) 180</ion-label>\n                  <ion-label *ngIf="i !== 0" color="primary">M - {{ i + 1 }} ({{ allocationType === \'92\' ? \'Check\n                    Feeder\n                    Meter\' : allocationType === \'95\' ? \'Check Sub Meter\' : \'Check Sub Feeder Meter\' }}) 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input type="text" (keyup)="allow10input($event,\'pulse_Connect2\', i)"\n                    (ionChange)="calculationpulse()"\n                    [ngClass]="(attr.ta0reg_pciread2 === \'\' || attr.ta0reg_pciread2 === undefined && !validateTest6) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    [(ngModel)]="attr.ta0reg_pciread2" placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-row *ngIf="showCheckPulse">\n            <br>\n            <hr>\n            <br>\n          </ion-row>\n          <ion-row *ngIf="showMainMeter && showCheckPulse">\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">M - 1 (Main Meter) 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="showRegister.ta0reg_pcsread"\n                  (keyup)="checkUserInput16($event,\'Main880\')" placeholder="Enter value"\n                  [ngClass]="(showRegister.ta0reg_pcsread === \'\' || showRegister.ta0reg_pcsread === undefined && !validateTest6) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="!showMainMeter && showCheckPulse">\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">M - 1 (Check Meter) 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="showRegister.ta0reg_pcsread"\n                  (keyup)="checkUserInput16($event,\'Check880\')" placeholder="Enter value"\n                  [ngClass]="(showRegister.ta0reg_pcsread === \'\' || showRegister.ta0reg_pcsread === undefined && !validateTest6) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="showCheckPulse">\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Calculation</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="showRegister.ta0reg_pccalc" readonly="true"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <!-- end showRegister -->\n    </div>\n\n    <ion-item-divider color="light" class="pointer" (click)="showLedTestSection(1)">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER POWER FLOW / LED INDICATION TEST</strong>\n        </ion-col>\n        <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showLedTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showLedTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="showLed">\n      <div *ngIf="showLedTest">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="showLed.loc_test_ta0na" (ionChange)="hideShowLedTest()" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showLed.ta0na">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showLed.ta0naremarks"\n                placeholder="Please enter remark"\n                [ngClass]="(showLed.ta0naremarks === \'\' || showLed.ta0naremarks === undefined && !validateRemark7) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!showLed.ta0na">\n          <!-- start yes Applicable Meter LED Test -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary" *ngIf="showMainMeter"><strong>Main Meter (LED kWh Only)</strong></ion-label>\n                <ion-label color="primary" *ngIf="!showMainMeter"><strong>Check Meter (LED kWh Only)</strong>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Title Start -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Element</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary">LED</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary">Indicator</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Title End -->\n\n          <!-- Red Element Start -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Red</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <!-- LED Section -->\n              <ion-list radio-group [(ngModel)]="showLed.ta0led_r">\n                <ion-row>\n                  <ion-col>\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_r === \'\' || showLed.ta0led_r === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>K</ion-label>\n                      <ion-radio value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_r === \'\' || showLed.ta0led_r === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>T</ion-label>\n                      <ion-radio value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_r === \'\' || showLed.ta0led_r === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>NA</ion-label>\n                      <ion-radio value="NA"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <!-- Indicator Section -->\n              <ion-list radio-group [(ngModel)]="showLed.ta0led_ind_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_r === \'\' || showLed.ta0led_ind_r === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>F</ion-label>\n                      <ion-radio value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_r === \'\' || showLed.ta0led_ind_r === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>R</ion-label>\n                      <ion-radio value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_r === \'\' || showLed.ta0led_ind_r === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>NA</ion-label>\n                      <ion-radio value="NA"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Red Element End -->\n\n          <!-- Yellow Element Start -->\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Yellow</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="showLed.ta0led_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_y === \'\' || showLed.ta0led_y === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>K</ion-label>\n                      <ion-radio value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_y === \'\' || showLed.ta0led_y === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>T</ion-label>\n                      <ion-radio value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_y === \'\' || showLed.ta0led_y === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>NA</ion-label>\n                      <ion-radio value="NA"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="showLed.ta0led_ind_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_y === \'\' || showLed.ta0led_ind_y === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>F</ion-label>\n                      <ion-radio value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_y === \'\' || showLed.ta0led_ind_y === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>R</ion-label>\n                      <ion-radio value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_y === \'\' || showLed.ta0led_ind_y === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>NA</ion-label>\n                      <ion-radio value="NA"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Yellow Element End -->\n\n          <!-- Blue Element Start -->\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Blue</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="showLed.ta0led_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_b === \'\' || showLed.ta0led_b === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>K</ion-label>\n                      <ion-radio value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_b === \'\' || showLed.ta0led_b === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>T</ion-label>\n                      <ion-radio value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_b === \'\' || showLed.ta0led_b === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>NA</ion-label>\n                      <ion-radio value="NA"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="showLed.ta0led_ind_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_b === \'\' || showLed.ta0led_ind_b === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>F</ion-label>\n                      <ion-radio value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_b === \'\' || showLed.ta0led_ind_b === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>R</ion-label>\n                      <ion-radio value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item\n                      [ngClass]="(showLed.ta0led_ind_b === \'\' || showLed.ta0led_ind_b === undefined && !validateTest7) ? \'redHighlightText\' : \'blackHighlightText\'">\n                      <ion-label>NA</ion-label>\n                      <ion-radio value="NA"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Blue Element End -->\n          <!-- end yes Applicable Pre Meter LED Test-->\n        </div>\n      </div>\n    </div>\n    <div *ngIf="showMainMeter">\n      <ion-item-divider color="light" class="pointer" (click)="showReportTestSection(1)">\n        <ion-row align-items-center>\n          <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>TEST REPORT VERIFICATION ACCURACY METER ON SITE</strong>\n          </ion-col>\n          <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showReportTest"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showReportTest"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div id="showReport">\n        <ion-grid *ngIf="showReportTest">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="showReport.loc_test_ta0na" (ionChange)="hideShowReportTest()"\n                  interface="popover">\n                  <ion-option value="Y">Yes</ion-option>\n                  <ion-option value="N">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="showReport.ta0na">\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showReport.ta0naremarks"\n                  placeholder="Please enter remark"\n                  [ngClass]="(showReport.ta0naremarks === \'\' || showReport.ta0naremarks === undefined && !validateRemark8) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="!showReport.ta0na">\n            <!-- start yes Applicable Report Test -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Meter Accuracy Test Procedure</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReport.ta0mv_metertestprocedure"\n                    [ngClass]="(showReport.ta0mv_metertestprocedure === \'\' || showReport.ta0mv_metertestprocedure === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 1: Temperature and Humidity\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <!-- Temperature Section Start -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12>\n                <ion-item>\n                  <ion-label color="primary"><strong>Temperature</strong></ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-2>\n                <ion-item>\n                  <ion-label color="primary">Minimum</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="11" (keyup)="checkUserInput($event,\'mini1\')"\n                    [(ngModel)]="showReportTNHT.ta0th_mintemp"\n                    [ngClass]="(showReportTNHT.ta0th_mintemp === \'\' || showReportTNHT.ta0th_mintemp === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Entervalue"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-2>\n                <ion-item>\n                  <ion-label color="primary">Maximum</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="11" (keyup)="checkUserInput($event,\'max1\')"\n                    [(ngModel)]="showReportTNHT.ta0th_maxtemp"\n                    [ngClass]="(showReportTNHT.ta0th_maxtemp === \'\' || showReportTNHT.ta0th_maxtemp === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- Temperature Section End -->\n\n            <!-- Humidity Section Start -->\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12>\n                <ion-item>\n                  <ion-label color="primary"><strong>Humidity</strong></ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-2>\n                <ion-item>\n                  <ion-label color="primary">Minimum</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="11" (keyup)="checkUserInput($event,\'mini2\')"\n                    [(ngModel)]="showReportTNHT.ta0th_minmoist"\n                    [ngClass]="(showReportTNHT.ta0th_minmoist === \'\' || showReportTNHT.ta0th_minmoist === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-2>\n                <ion-item>\n                  <ion-label color="primary">Maximum</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="11" (keyup)="checkUserInput($event,\'max2\')"\n                    [(ngModel)]="showReportTNHT.ta0th_maxmoist"\n                    [ngClass]="(showReportTNHT.ta0th_maxmoist === \'\' || showReportTNHT.ta0th_maxmoist === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- Humidity Section End -->\n\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 2: Portable Test Equipment (PTE) Details\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Brand</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportPTED.ta0tp_brand"\n                    [ngClass]="(showReportPTED.ta0tp_brand === \'\' || showReportPTED.ta0tp_brand === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Model</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportPTED.ta0tp_model"\n                    [ngClass]="(showReportPTED.ta0tp_model === \'\' || showReportPTED.ta0tp_model === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Serial Number</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportPTED.ta0tp_serialnum"\n                    [ngClass]="(showReportPTED.ta0tp_serialnum === \'\' || showReportPTED.ta0tp_serialnum === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Traceability</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportPTED.ta0tp_traceability"\n                    [ngClass]="(showReportPTED.ta0tp_traceability === \'\' || showReportPTED.ta0tp_traceability === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Calibration Date</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="showReportPTED.ta0tp_calibration"\n                    [max]="gv.maxDate" placeholder="Select value"\n                    [ngClass]="(showReportPTED.ta0tp_calibration === \'\' || showReportPTED.ta0tp_calibration === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Part 3: Thermohygrograph Details\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Brand</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportTHGD.ta0tp_brand"\n                    [ngClass]="(showReportTHGD.ta0tp_brand === \'\' || showReportTHGD.ta0tp_brand === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Model</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportTHGD.ta0tp_model"\n                    [ngClass]="(showReportTHGD.ta0tp_model === \'\' || showReportTHGD.ta0tp_model === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Serial Number</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportTHGD.ta0tp_serialnum"\n                    [ngClass]="(showReportTHGD.ta0tp_serialnum === \'\' || showReportTHGD.ta0tp_serialnum === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Traceability</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showReportTHGD.ta0tp_traceability"\n                    [ngClass]="(showReportTHGD.ta0tp_traceability === \'\' || showReportTHGD.ta0tp_traceability === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Calibration Date</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="showReportTHGD.ta0tp_calibration"\n                    [max]="gv.maxDate" placeholder="Select value"\n                    [ngClass]="(showReportTHGD.ta0tp_calibration === \'\' || showReportTHGD.ta0tp_calibration === undefined && !validateTest8) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- end yes Applicable Report Test-->\n          </div>\n        </ion-grid>\n      </div>\n    </div>\n    <ion-item-divider color="light" class="pointer" (click)="showAccErrTestSection(1)">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER ACCURACY TEST (%ERROR) kWh </strong>\n        </ion-col>\n        <ion-col col-10 col-sm-10 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAccErrTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAccErrTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="showAccErr">\n      <div *ngIf="showAccErrTest">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="showAccErr.loc_test_ta0na" (ionChange)="hideShowAccErrTest()"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showAccErr.ta0na">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="showAccErr.ta0naremarks"\n                placeholder="Please enter remark"\n                [ngClass]="(showAccErr.ta0naremarks === \'\' || showAccErr.ta0naremarks === undefined && !validateRemark9) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!showAccErr.ta0na">\n          <!-- start yes Applicable Report Test -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Sticker No.</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" maxlength="40" [(ngModel)]="showAccErr.ta0at_sticker"\n                  [ngClass]="(showAccErr.ta0at_sticker === \'\' || showAccErr.ta0at_sticker === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Correction Factor</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput($event,\'correctionFactor\')"\n                  [(ngModel)]="showAccErr.ta0at_correctionfactor" (ionChange)="calculateAvgCfBefore($event)"\n                  maxlength="8"\n                  [ngClass]="(showAccErr.correctFactor === \'\' || showAccErr.correctFactor === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 1: Reading Before Considering CF\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Load Type</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RYB</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" style="text-align: center"><strong>% Error Reading (kWh)</strong></ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- applicable Heading -->\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 4</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error1\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test1"\n                  [ngClass]="(showAccErr.ta0at_test1 === \'\' || showAccErr.ta0at_test1 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error2\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test2"\n                  [ngClass]="(showAccErr.ta0at_test2 === \'\' || showAccErr.ta0at_test2=== undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error3\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test3"\n                  [ngClass]="(showAccErr.ta0at_test3 === \'\' || showAccErr.ta0at_test3 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error4\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test4"\n                  [ngClass]="(showAccErr.ta0at_test4 === \'\' || showAccErr.ta0at_test4 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 7</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 8</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error5\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test5"\n                  [ngClass]="(showAccErr.ta0at_test5 === \'\' || showAccErr.ta0at_test5 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error6\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test6"\n                  [ngClass]="(showAccErr.ta0at_test6 === \'\' || showAccErr.ta0at_test6 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error7\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test7"\n                  [ngClass]="(showAccErr.ta0at_test7 === \'\' || showAccErr.ta0at_test7 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error8\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test8"\n                  [ngClass]="(showAccErr.ta0at_test8 === \'\' || showAccErr.ta0at_test8 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 9</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 10</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error9\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test9"\n                  [ngClass]="(showAccErr.ta0at_test9 === \'\' || showAccErr.ta0at_test9 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error10\')"\n                  (ionChange)="calculateAvgCfBefore($event)" [(ngModel)]="showAccErr.ta0at_test10"\n                  [ngClass]="(showAccErr.ta0at_test10 === \'\' || showAccErr.ta0at_test10 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" [(ngModel)]="showAccErr.ta0at_avg" [readonly]="isReadonly"\n                  maxlength="9" (keypress)="gf.controlUserInput2($event)"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 2: Reading After Considering CF\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Load Type</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RYB</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" style="text-align: center"><strong>% Error Reading (kWh)</strong></ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- applicable Heading -->\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 4</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error1sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test1"\n                  [ngClass]="(showAccErrf.ta0at_test1 === \'\' || showAccErrf.ta0at_test1 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error2sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test2"\n                  [ngClass]="(showAccErrf.ta0at_test2 === \'\' || showAccErrf.ta0at_test2 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error3sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test3"\n                  [ngClass]="(showAccErrf.ta0at_test3 === \'\' || showAccErrf.ta0at_test3 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error4sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test4"\n                  [ngClass]="(showAccErrf.ta0at_test4 === \'\' || showAccErrf.ta0at_test4 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 7</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 8</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error5sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test5"\n                  [ngClass]="(showAccErrf.ta0at_test5 === \'\' || showAccErrf.ta0at_test5 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error6sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test6"\n                  [ngClass]="(showAccErrf.ta0at_test6 === \'\' || showAccErrf.ta0at_test6 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error7sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test7"\n                  [ngClass]="(showAccErrf.ta0at_test7 === \'\' || showAccErrf.ta0at_test7 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error8sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test8"\n                  [ngClass]="(showAccErrf.ta0at_test8 === \'\' ||showAccErrf.ta0at_test8 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 9</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error 10</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Error Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error9sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test9"\n                  [ngClass]="(showAccErrf.ta0at_test9 === \'\' || showAccErrf.ta0at_test9 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" (keyup)="checkUserInput2($event,\'error10sec\')"\n                  (ionChange)="calculateAvgAfter($event)" [readonly]="true" [(ngModel)]="showAccErrf.ta0at_test10"\n                  [ngClass]="(showAccErrf.ta0at_test10 === \'\' || showAccErrf.ta0at_test10 === undefined && !validateTest9) ? \'redHighlightText\' : \'blackHighlightText\'"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="test1" type="text" [(ngModel)]="showAccErrf.ta0at_avg" maxlength="9"\n                  [readonly]="isReadonly"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- end yes Applicable Meter Accuracy Error Test-->\n        </div>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <button ion-button round block mode="md" (click)="saveDetails()" [disabled]="buttonSaveMVHV">\n          Save\n        </button>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/deviceTestforms/lpc-mvhv-inspect/lpc-mvhv-inspect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["AlertController"]])
    ], LpcMvhvInspectPage);
    return LpcMvhvInspectPage;
}());

//# sourceMappingURL=lpc-mvhv-inspect.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpcMvhvInspectPageModule", function() { return LpcMvhvInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lpc_mvhv_inspect__ = __webpack_require__(1068);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LpcMvhvInspectPageModule = /** @class */ (function () {
    function LpcMvhvInspectPageModule() {
    }
    LpcMvhvInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lpc_mvhv_inspect__["a" /* LpcMvhvInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__lpc_mvhv_inspect__["a" /* LpcMvhvInspectPage */]),
            ],
        })
    ], LpcMvhvInspectPageModule);
    return LpcMvhvInspectPageModule;
}());

//# sourceMappingURL=lpc-mvhv-inspect.module.js.map

/***/ })

});
//# sourceMappingURL=32.js.map