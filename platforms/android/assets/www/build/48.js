webpackJsonp([48],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealMvhvInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_app_app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/*
 * Modification History :
 * Date         version     Modified By   Method                Description
 * 2020-09-23   001         Andy Chang    showViewAiTest        remove initialize for this.test_before.ta4ai_info_gear to "-"
 *                                        resetValueInspection
 *                                        showViewHsioTest
 *                                        clearValueRadioComponent
 * 2020-11-23   002         Andy Chang    saveTestDetails       move summatorExtraBefore outside validation
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











/**
 * Generated class for the SealMvhvInspectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealMvhvInspectPage = /** @class */ (function () {
    function SealMvhvInspectPage(navCtrl, params, gf, gv, appCtrl, popoverCtrl, dataService, jsonStore, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.gf = gf;
        this.gv = gv;
        this.appCtrl = appCtrl;
        this.popoverCtrl = popoverCtrl;
        this.dataService = dataService;
        this.jsonStore = jsonStore;
        this.alertCtrl = alertCtrl;
        this.meterType = false;
        this.showValueDateBefore = false;
        this.showValueDateAfter = false;
        // View Variables
        this.viewMct = false;
        this.viewVrph = false;
        this.viewMa = false;
        this.viewEf = false;
        this.viewCtr = false;
        this.viewHspe = false;
        this.viewHsls = false;
        this.viewHsio = false;
        this.viewAi = false;
        this.viewNafa = false;
        this.viewIns = false;
        this.viewPreComm = false;
        this.summation = false;
        this.summationView = false;
        // Summator Variables
        this.summatorBefore = [];
        this.summatorAfter = [];
        // Hide/Show Section
        this.showViewRemarks = true;
        this.showTestList = true;
        this.showViewMct = true;
        this.showViewVrph = true;
        this.showViewMa = true;
        this.showViewEf = true;
        this.showViewCtr = true;
        this.showViewHspe = true;
        this.showViewHsls = true;
        this.showViewHsio = true;
        this.showViewAi = true;
        this.showViewIns = true;
        this.showViewPreComm = true;
        // Validate Variables
        this.validateElem = false;
        this.validateMct = false;
        this.validateVrph = false;
        this.validateMa = false;
        this.validateEf = false;
        this.validateCtr = false;
        this.validateHspe = false;
        this.validateHsls = false;
        this.validateHsio = false;
        this.validateAi = false;
        this.validateNafa = false;
        this.validateIns = false;
        this.validatePreComm = false;
        this.validateSummator = false;
        // ChangeViewBeforeAfter
        this.valueChangeElem = 'before';
        // valueChangeRemarks: any = 'before';
        this.valueChangeMct = 'before';
        this.valueChangeVrph = 'before';
        this.valueChangeMa = 'before';
        this.valueChangeEf = 'before';
        this.valueChangeCtr = 'before';
        this.valueChangeHspe = 'before';
        this.valueChangeHsls = 'before';
        this.valueChangeHsio = 'before';
        this.valueChangeAi = 'before';
        this.valueChangeNafa = 'before';
        this.valueChangeIns = 'before';
        this.valueChangePreComm = 'before';
        // Common Not Applicable...
        this.before_ta0na = 'N';
        this.after_ta0na = 'N';
        this.showAllCommonRemarkDetails = true;
        this.before_showContainRemark = false;
        this.after_showContainRemark = false;
        /**
         * Reason   : Class Variables..
         * Created  : Alif (16/01/2019)
         * Edited   : Alif (22/04/2019)
         */
        this.test_before = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.test_after = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.summatorExtraBefore = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.summatorExtraAfter = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        // To use for save data into ta0testdetail
        this.accuracyTest = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.preCommissioningTest = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
        // Reset all default variables
        this.test_before = {};
        this.test_after = {};
        this.summatorExtraBefore = {};
        this.summatorExtraAfter = {};
        // Setting default variables
        this.test_before.ta4mct_loc_test_ta0na = "N";
        this.test_before.ta4vrph_loc_test_ta0na = "N";
        this.test_before.ta4ma_loc_test_ta0na = "N";
        this.test_before.ta4ef_loc_test_ta0na = "N";
        this.test_before.ta4ctr_loc_test_ta0na = "N";
        this.test_before.ta4hspe_loc_test_ta0na = "N";
        this.test_before.ta4hsls_loc_test_ta0na = "N";
        this.test_before.ta4hsio_loc_test_ta0na = "N";
        this.test_before.ta4ai_loc_test_ta0na = "N";
        this.test_before.ta4nafa_loc_test_ta0na = "N";
        this.test_before.ta4ins_loc_test_ta0na = "N";
        this.test_before.ta4pc_loc_test_ta0na = "N";
        this.test_before.ta4elemcount = "-";
        this.test_after.ta4mct_loc_test_ta0na = "N";
        this.test_after.ta4vrph_loc_test_ta0na = "N";
        this.test_after.ta4ma_loc_test_ta0na = "N";
        this.test_after.ta4ef_loc_test_ta0na = "N";
        this.test_after.ta4ctr_loc_test_ta0na = "N";
        this.test_after.ta4hspe_loc_test_ta0na = "N";
        this.test_after.ta4hsls_loc_test_ta0na = "N";
        this.test_after.ta4hsio_loc_test_ta0na = "N";
        this.test_after.ta4ai_loc_test_ta0na = "N";
        this.test_after.ta4nafa_loc_test_ta0na = "N";
        this.test_after.ta4ins_loc_test_ta0na = "N";
        this.test_after.ta4pc_loc_test_ta0na = "N";
        this.test_after.ta4elemcount = "-";
        /**
         * Reason   : Checking if test data is available..
         * Created  : Alif (16/01/2019)
         */
        this.itemOri = this.params.get("paramObj");
        this.fIndex = this.params.get("fIndex");
        this.maIndex = this.params.get("maIndex");
        // Temporary Data
        debugger;
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        //console.log("Item : "+JSON.parse(JSON.stringify(this.itemOri)));
        // Get Voltage Ratio from PT Winding Group
        // this.pt_ratio = 0;
        this.getCtPtRatioValue("pt");
        // Get Current Ratio from CT Winding Group
        // this.ct_ratio = 0;
        this.getCtPtRatioValue("ct");
        // Getting CT Ratio value - Temporary (need to get value from device or header WorkOrder)
        // this.ct_ratio = 3.5;
        // Checking for Summation Inspection Test
        if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
            // count feeder
            // var fLength = Number(this.item.json.ta0feeder.length);
            var fLength;
            // if (fLength > 1 && this.fIndex === 0) {
            // Change logic find only for deviceVoltage + Main Meter & Check Meter (90 & 92)
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== "undefined") {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0allocationtype") && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0devicevoltage")) {
                    var allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
                    var deviceVoltage = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage;
                    var mainDevice = [];
                    var checkDevice = [];
                    var nMainDevice = [];
                    var nCheckDevice = [];
                    if (typeof (this.item.json.ta0feeder) !== "undefined" && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== "") {
                        for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
                            var mDevice = this.item.json.ta0feeder[k].multiassetlocci.find(function (item) {
                                return item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
                            });
                            if (typeof (mDevice) !== "undefined") {
                                mainDevice.push(mDevice);
                            }
                            var cDevice = this.item.json.ta0feeder[k].multiassetlocci.find(function (item) {
                                return item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK;
                            });
                            if (typeof (cDevice) !== "undefined") {
                                checkDevice.push(cDevice);
                            }
                            var nmDevice = this.item.json.ta0feeder[k].multiassetlocci.find(function (item) {
                                return item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                            });
                            if (typeof (nmDevice) !== "undefined") {
                                nMainDevice.push(nmDevice);
                            }
                            var ncDevice = this.item.json.ta0feeder[k].multiassetlocci.find(function (item) {
                                return item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK;
                            });
                            if (typeof (ncDevice) !== "undefined") {
                                nCheckDevice.push(ncDevice);
                            }
                        }
                        switch (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator) {
                            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN: {
                                fLength = mainDevice;
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK: {
                                fLength = checkDevice;
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN: {
                                fLength = nMainDevice;
                                break;
                            }
                            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK: {
                                fLength = nCheckDevice;
                                break;
                            }
                        }
                        // Sorting device based ta0allocationtype
                        fLength.sort(this.gf.dynamicSort("ta0allocationtype"));
                        if ((allocationType === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER || allocationType === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER) && deviceVoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (fLength.length > 1) {
                                this.summation = true;
                                // Creating Array Fields for Summator (Before/After)
                                for (var i = 0; i < fLength.length; i++) {
                                    //console.log(i+" summatorVal : "+JSON.stringify(fLength[i]));
                                    var summatorVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
                                    summatorVal.feeder = null;
                                    summatorVal.ta4serialNum = fLength[i].ta0serialnum;
                                    summatorVal.ta4metertype = fLength[i].ta0allocationtype;
                                    summatorVal.ta4reg_amf = null;
                                    summatorVal.ta4reg_amb = null;
                                    summatorVal.ta4reg_amc = null;
                                    this.summatorBefore.push(summatorVal);
                                    this.summatorAfter.push(summatorVal);
                                }
                                // Creating field for Extra Fields Summator (Before)
                                this.summatorExtraBefore.feeder = "extra";
                                this.summatorExtraBefore.ta4sum_consumption = null;
                                this.summatorExtraBefore.ta4sum_end = null;
                                this.summatorExtraBefore.ta4sum_start = null;
                                this.summatorExtraBefore.ta4sum_sted_diff = null;
                                this.summatorExtraBefore.ta4sum_diff = null;
                                // Creating field for Extra Fields Summator (After)
                                this.summatorExtraAfter.feeder = "extra";
                                this.summatorExtraAfter.ta4sum_consumption = null;
                                this.summatorExtraAfter.ta4sum_end = null;
                                this.summatorExtraAfter.ta4sum_start = null;
                                this.summatorExtraAfter.ta4sum_sted_diff = null;
                                this.summatorExtraAfter.ta4sum_diff = null;
                                // this.autoCalculateSummationInspection("");
                            }
                            else {
                                this.summation = false;
                            }
                        }
                    }
                }
            }
        }
        // Checking Exist Meter or New Meter
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator")) !== "undefined") {
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
                this.meterType = false;
            }
            else {
                this.meterType = true;
            }
        }
        // Checking if data available or not
        // Available for all meter
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta4testdata") &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "undefined" &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
            // Naming Meter Main or check
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_FEEDER_METER ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_FEEDER_METER) {
                this.meterName = "Main";
            }
            else {
                this.meterName = "Check";
            }
            // Checking value ta4testdata
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined" &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
                // Convert String to JSON Array
                var ta4testdata_temp = void 0;
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
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = ta4testdata_temp;
                if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                    // Checking ta4testdata
                    for (var i = 0; i < ta4testdata_temp.length; i++) {
                        // ta4testdata (before)
                        if (ta4testdata_temp[i].type === "before") {
                            this.test_before = ta4testdata_temp[i].data;
                            // Checking DeviceVoltage because of mixing voltage
                            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Reading before value summator from existing data if available
                                if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                                    var sLength = ta4testdata_temp[i].data.summator.length;
                                    console.log("summator length : " + sLength);
                                    for (var m = 0; m < sLength; m++) {
                                        if (typeof (this.summatorBefore[m]) === "undefined") {
                                            //console.log("summatorBefore["+m+"] === undefined");
                                            //console.log("summatorExtraBefore : "+JSON.stringify(ta4testdata_temp[i].data.summator[m]));
                                            this.summatorExtraBefore = ta4testdata_temp[i].data.summator[m];
                                        }
                                        else {
                                            var serialnum = this.summatorBefore[m].ta4serialNum;
                                            var meterType = this.summatorBefore[m].ta4metertype;
                                            this.summatorBefore[m] = ta4testdata_temp[i].data.summator[m];
                                            this.summatorBefore[m].ta4serialNum = serialnum;
                                            this.summatorBefore[m].ta4metertype = meterType;
                                            this.summatorBefore[m].ta4reg_amf_b = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                                            this.summatorBefore[m].ta4reg_amb_b = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                                            this.summatorBefore[m].ta4reg_amc_b = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                                            //console.log("summatorExtraBefore : "+JSON.stringify(ta4testdata_temp[i].data.summator[m]));
                                        }
                                    }
                                }
                                else {
                                    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_FEEDER_METER ||
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER ||
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_FEEDER_METER) {
                                        this.checkCompareGettingValueSummator("main", "before");
                                    }
                                    else {
                                        this.checkCompareGettingValueSummator("check", "before");
                                    }
                                }
                            }
                        }
                        // ta4testdata (after)
                        if (ta4testdata_temp[i].type === "after") {
                            this.test_after = ta4testdata_temp[i].data;
                            // Checking DeviceVoltage because of mixing voltage
                            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Reading after value summator from existing data if available
                                if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                                    var sLength = ta4testdata_temp[i].data.summator.length;
                                    for (var m = 0; m < sLength; m++) {
                                        if (typeof (this.summatorAfter[m]) === "undefined") {
                                            this.summatorExtraAfter = ta4testdata_temp[i].data.summator[m];
                                        }
                                        else {
                                            var serialnum = this.summatorAfter[m].ta4serialNum;
                                            var meterType = this.summatorAfter[m].ta4metertype;
                                            this.summatorAfter[m] = ta4testdata_temp[i].data.summator[m];
                                            this.summatorAfter[m].ta4serialNum = serialnum;
                                            this.summatorAfter[m].ta4metertype = meterType;
                                            this.summatorAfter[m].ta4reg_amf_a = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                                            this.summatorAfter[m].ta4reg_amb_a = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                                            this.summatorAfter[m].ta4reg_amc_a = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                                        }
                                    }
                                }
                                else {
                                    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_FEEDER_METER ||
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER ||
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_FEEDER_METER) {
                                        this.checkCompareGettingValueSummator("main", "after");
                                    }
                                    else {
                                        this.checkCompareGettingValueSummator("check", "after");
                                    }
                                }
                            }
                        }
                        // Validate User Input
                        this.validateUserInput();
                    }
                }
            }
            /**
             * Reason   : Method to getting value accuracy test from ta0testdetail to ta4testdata
             * Created  : Alif (27/03/2019)
             */
            // Checking if data ta0testdetail is available or not (only for ZIST)
            if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0testdetail")) {
                    // Convert String to JSON Array
                    var ta0testdetail;
                    if (Array.isArray((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail))) {
                        ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail;
                    }
                    else {
                        ta0testdetail = JSON.parse(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail);
                    }
                    if (typeof (ta0testdetail) !== "undefined" && ta0testdetail !== null && ta0testdetail !== "") {
                        // Collect Meter Accuracy from ta0testdetail save to ta4testdata
                        var meterAccuracy = ta0testdetail.filter(function (item) {
                            return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
                        });
                        if (meterAccuracy.length > 0) {
                            // Sending to Before Section
                            // this.test_before.ta4ma_test1 = meterAccuracy[0].ta0at_test1;
                            // this.test_before.ta4ma_test2 = meterAccuracy[0].ta0at_test2;
                            // this.test_before.ta4ma_test3 = meterAccuracy[0].ta0at_test3;
                            // this.test_before.ta4ma_avg = meterAccuracy[0].ta0at_avg;
                            // Sending to After Section
                            // this.test_after.ta4ma_test1 = meterAccuracy[0].ta0at_test1;
                            // this.test_after.ta4ma_test2 = meterAccuracy[0].ta0at_test2;
                            // this.test_after.ta4ma_test3 = meterAccuracy[0].ta0at_test3;
                            // this.test_after.ta4ma_avg = meterAccuracy[0].ta0at_avg;
                        }
                    }
                }
            }
        }
        // Checking Feeder for collection PTE informations.
        if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
            // Checking Multiassetlocci
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci) !== "undefined" || this.item.json.ta0feeder[this.fIndex].hasOwnProperty("multiassetlocci")) {
                // Checking and adding info PTE Informations
                var multiassetlocci_tmp;
                var main_meter = [];
                var test_data;
                multiassetlocci_tmp = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci));
                // Checking either new / old meter.
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
                    main_meter = multiassetlocci_tmp.filter(function (item) { return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN; });
                }
                else if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) {
                    main_meter = multiassetlocci_tmp.filter(function (item) { return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN; });
                }
                if (main_meter.length > 0) {
                    // Search test data.
                    if (main_meter[0].hasOwnProperty("ta4testdata")) {
                        // Convert String to JSON Array
                        var test_data;
                        // Checking whether is string or array
                        if (Array.isArray(main_meter[0].ta4testdata)) {
                            test_data = JSON.parse(JSON.stringify(main_meter[0].ta4testdata));
                        }
                        else {
                            test_data = JSON.parse(main_meter[0].ta4testdata);
                        }
                        while (!Array.isArray(test_data)) {
                            test_data = JSON.parse(test_data);
                        }
                        /**
                         * created: Ameer
                         * Description: Checking ta4testdata from Main meter and autopopulate to check meter
                         * Edited: Ameer(20/9/2019) - Auto populate for test type MAX CT loading
                         */
                        for (var m = 0; m < test_data.length; m++) {
                            // ta4testdata (before)
                            if (test_data[m].type === "before") {
                                // Meter Accuracy
                                this.test_before.ta4ma_brand = test_data[m].data.ta4ma_brand;
                                this.test_before.ta4ma_serialnum = test_data[m].data.ta4ma_serialnum;
                                this.test_before.ta4ma_calibration = test_data[m].data.ta4ma_calibration;
                                // Max CT loading 
                                this.test_before.ta4mct_ta0naremarks = test_data[m].ta4mct_ta0naremarks;
                                this.test_before.ta4mct_md = test_data[m].data.ta4mct_md;
                                this.test_before.ta4mct_vt = test_data[m].data.ta4mct_vt;
                                this.test_before.ta4mct_pf = test_data[m].data.ta4mct_pf;
                                this.test_before.ta4mct_ac = test_data[m].data.ta4mct_ac;
                                this.test_before.ta4mct_cl = test_data[m].data.ta4mct_cl;
                                // Voltage Reading & Ph-Rotation
                                this.test_before.ta4vrph_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                                this.test_before.ta4vrph_ry = test_data[m].data.ta4vrph_ry;
                                this.test_before.ta4vrph_yb = test_data[m].data.ta4vrph_yb;
                                this.test_before.ta4vrph_rb = test_data[m].data.ta4vrph_rb;
                                this.test_before.ta4vrph_rn = test_data[m].data.ta4vrph_rn;
                                this.test_before.ta4vrph_yn = test_data[m].data.ta4vrph_yn;
                                this.test_before.ta4vrph_bn = test_data[m].data.ta4vrph_bn;
                                this.test_before.ta4vrph_re = test_data[m].data.ta4vrph_re;
                                this.test_before.ta4vrph_ye = test_data[m].data.ta4vrph_ye;
                                this.test_before.ta4vrph_be = test_data[m].data.ta4vrph_be;
                                this.test_before.ta4vrph_ne = test_data[m].data.ta4vrph_ne;
                                this.test_before.ta4vrph_ph = test_data[m].data.ta4vrph_ph;
                                //CT Ratio Test & "CT Loading" Percentage
                                this.test_before.ta4ctr_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                                this.test_before.ta4ctr_ct_ratio_0 = test_data[m].data.ta4ctr_ct_ratio_0;
                                this.test_before.ta4ctr_ct_ratio_1 = test_data[m].data.ta4ctr_ct_ratio_1;
                                this.test_before.ta4ctr_ip_r = test_data[m].data.ta4ctr_ip_r;
                                this.test_before.ta4ctr_ip_y = test_data[m].data.ta4ctr_ip_y;
                                this.test_before.ta4ctr_ip_b = test_data[m].data.ta4ctr_ip_b;
                                this.test_before.ta4ctr_is_r = test_data[m].data.ta4ctr_is_r;
                                this.test_before.ta4ctr_is_y = test_data[m].data.ta4ctr_is_y;
                                this.test_before.ta4ctr_is_b = test_data[m].data.ta4ctr_is_b;
                                this.test_before.ta4ctr_ccr_r = test_data[m].data.ta4ctr_ccr_r;
                                this.test_before.ta4ctr_ccr_y = test_data[m].data.ta4ctr_ccr_y;
                                this.test_before.ta4ctr_ccr_b = test_data[m].data.ta4ctr_ccr_b;
                                this.test_before.ta4ctr_cl_r = test_data[m].data.ta4ctr_cl_r;
                                this.test_before.ta4ctr_cl_y = test_data[m].data.ta4ctr_cl_y;
                                this.test_before.ta4ctr_cl_b = test_data[m].data.ta4ctr_cl_b;
                                this.test_before.ta4ctr_avg_ccr = test_data[m].data.ta4ctr_avg_ccr;
                                this.test_before.ta4ctr_avg_cl = test_data[m].data.ta4ctr_avg_cl;
                                //HV side and connsumer incomer (Pe TNB if available)
                                this.test_before.ta4hspe_mt_ratio_0 = test_data[m].data.ta4hspe_mt_ratio_0;
                                this.test_before.ta4hspe_mt_ratio_1 = test_data[m].data.ta4hspe_mt_ratio_1;
                                this.test_before.ta4hspe_is_mt_r = test_data[m].data.ta4hspe_is_mt_r;
                                this.test_before.ta4hspe_is_mt_y = test_data[m].data.ta4hspe_is_mt_y;
                                this.test_before.ta4hspe_is_mt_b = test_data[m].data.ta4hspe_is_mt_b;
                                this.test_before.ta4hspe_ip_mt_r = test_data[m].data.ta4hspe_ip_mt_r;
                                this.test_before.ta4hspe_ip_mt_y = test_data[m].data.ta4hspe_ip_mt_y;
                                this.test_before.ta4hspe_ip_mt_b = test_data[m].data.ta4hspe_ip_mt_b;
                                this.test_before.ta4hspe_ci_ratio_0 = test_data[m].data.ta4hspe_ci_ratio_0;
                                this.test_before.ta4hspe_ci_ratio_1 = test_data[m].data.ta4hspe_ci_ratio_1;
                                this.test_before.ta4hspe_is_ci_r = test_data[m].data.ta4hspe_is_ci_r;
                                this.test_before.ta4hspe_is_ci_y = test_data[m].data.ta4hspe_is_ci_y;
                                this.test_before.ta4hspe_is_ci_b = test_data[m].data.ta4hspe_is_ci_b;
                                this.test_before.ta4hspe_ip_ci_r = test_data[m].data.ta4hspe_ip_ci_r;
                                this.test_before.ta4hspe_ip_ci_y = test_data[m].data.ta4hspe_ip_ci_y;
                                this.test_before.ta4hspe_ip_ci_b = test_data[m].data.ta4hspe_ip_ci_b;
                                this.test_before.ta4hspe_diff_ci_r = test_data[m].data.ta4hspe_diff_ci_r;
                                this.test_before.ta4hspe_diff_ci_y = test_data[m].data.ta4hspe_diff_ci_y;
                                this.test_before.ta4hspe_diff_ci_b = test_data[m].data.ta4hspe_diff_ci_b;
                                this.test_before.ta4hspe_ov_ratio_0 = test_data[m].data.ta4hspe_ov_ratio_0;
                                this.test_before.ta4hspe_ov_ratio_1 = test_data[m].data.ta4hspe_ov_ratio_1;
                                this.test_before.ta4hspe_is_ov_r = test_data[m].data.ta4hspe_is_ov_r;
                                this.test_before.ta4hspe_is_ov_y = test_data[m].data.ta4hspe_is_ov_y;
                                this.test_before.ta4hspe_is_ov_b = test_data[m].data.ta4hspe_is_ov_b;
                                this.test_before.ta4hspe_ip_ov_r = test_data[m].data.ta4hspe_ip_ov_r;
                                this.test_before.ta4hspe_ip_ov_y = test_data[m].data.ta4hspe_ip_ov_y;
                                this.test_before.ta4hspe_ip_ov_b = test_data[m].data.ta4hspe_ip_ov_b;
                                this.test_before.ta4hspe_diff_ov_r = test_data[m].data.ta4hspe_diff_ov_r;
                                this.test_before.ta4hspe_diff_ov_y = test_data[m].data.ta4hspe_diff_ov_y;
                                this.test_before.ta4hspe_diff_ov_b = test_data[m].data.ta4hspe_diff_ov_b;
                                //CURRENT READING COMPARISON (HV SIDE & LV SIDE) METER PRIMARY AMPS VS CONSUMER LV OUTGOING
                                this.test_before.ta4hsls_ta0naremarks = test_data[m].data.ta4hsls_ta0naremarks;
                                this.test_before.ta4hsls_mpa_r = test_data[m].data.ta4hsls_mpa_r;
                                this.test_before.ta4hsls_mpa_y = test_data[m].data.ta4hsls_mpa_y;
                                this.test_before.ta4hsls_mpa_b = test_data[m].data.ta4hsls_mpa_b;
                                this.test_before.ta4hsls_test1_r = test_data[m].data.ta4hsls_test1_r;
                                this.test_before.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                                this.test_before.ta4hsls_test1_b = test_data[m].data.ta4hsls_test1_b;
                                this.test_before.ta4hsls_test2_r = test_data[m].data.ta4hsls_test2_r;
                                this.test_before.ta4hsls_test2_y = test_data[m].data.ta4hsls_test2_y;
                                this.test_before.ta4hsls_test2_b = test_data[m].data.ta4hsls_test2_b;
                                this.test_before.ta4hsls_test3_r = test_data[m].data.ta4hsls_test3_r;
                                this.test_before.ta4hsls_test3_y = test_data[m].data.ta4hsls_test3_y;
                                this.test_before.ta4hsls_test3_b = test_data[m].data.ta4hsls_test3_b;
                                this.test_before.ta4hsls_test4_r = test_data[m].data.ta4hsls_test4_r;
                                this.test_before.ta4hsls_test4_y = test_data[m].data.ta4hsls_test4_y;
                                this.test_before.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                                this.test_before.ta4hsls_test4_b = test_data[m].data.ta4hsls_test4_b;
                                this.test_before.ta4hsls_test5_r = test_data[m].data.ta4hsls_test5_r;
                                this.test_before.ta4hsls_test5_y = test_data[m].data.ta4hsls_test5_y;
                                this.test_before.ta4hsls_test5_b = test_data[m].data.ta4hsls_test5_b;
                                this.test_before.ta4hsls_test6_r = test_data[m].data.ta4hsls_test6_r;
                                this.test_before.ta4hsls_test6_y = test_data[m].data.ta4hsls_test6_y;
                                this.test_before.ta4hsls_test6_b = test_data[m].data.ta4hsls_test6_b;
                                this.test_before.ta4hsls_v_lv = test_data[m].data.ta4hsls_v_lv;
                                this.test_before.ta4hsls_v_hv = test_data[m].data.ta4hsls_v_hv;
                                this.test_before.ta4hsls_v_f = test_data[m].data.ta4hsls_v_f;
                                this.test_before.ta4hsls_la_r = test_data[m].data.ta4hsls_la_r;
                                this.test_before.ta4hsls_la_y = test_data[m].data.ta4hsls_la_y;
                                this.test_before.ta4hsls_la_b = test_data[m].data.ta4hsls_la_b;
                                this.test_before.ta4hsls_ha_r = test_data[m].data.ta4hsls_ha_r;
                                this.test_before.ta4hsls_ha_y = test_data[m].data.ta4hsls_ha_y;
                                this.test_before.ta4hsls_ha_b = test_data[m].data.ta4hsls_ha_b;
                                this.test_before.ta4hsls_dma_r = test_data[m].data.ta4hsls_dma_r;
                                this.test_before.ta4hsls_dma_y = test_data[m].data.ta4hsls_dma_y;
                                this.test_before.ta4hsls_dma_b = test_data[m].data.ta4hsls_dma_b;
                                //CURRENT READING COMPARISON (HV SIDE) CONSUMER INCOMER VS CONSUMER OUTGOING
                                this.test_before.ta4hsio_ta0naremarks = test_data[m].data.ta4hsio_ta0naremarks;
                                this.test_before.ta4hsio_ct_iha_0 = test_data[m].data.ta4hsio_ct_iha_0;
                                this.test_before.ta4hsio_ct_iha_1 = test_data[m].data.ta4hsio_ct_iha_1;
                                this.test_before.ta4hsio_ct_out1_0 = test_data[m].data.ta4hsio_ct_out1_0;
                                this.test_before.ta4hsio_ct_out1_1 = test_data[m].data.ta4hsio_ct_out1_1;
                                this.test_before.ta4hsio_ct_out2_0 = test_data[m].data.ta4hsio_ct_out2_0;
                                this.test_before.ta4hsio_ct_out2_1 = test_data[m].data.ta4hsio_ct_out2_1;
                                this.test_before.ta4hsio_ct_out3_0 = test_data[m].data.ta4hsio_ct_out3_0;
                                this.test_before.ta4hsio_ct_out3_1 = test_data[m].data.ta4hsio_ct_out3_1;
                                this.test_before.ta4hsio_ct_out4_0 = test_data[m].data.ta4hsio_ct_out4_0;
                                this.test_before.ta4hsio_ct_out4_1 = test_data[m].data.ta4hsio_ct_out4_1;
                                this.test_before.ta4hsio_ct_out5_0 = test_data[m].data.ta4hsio_ct_out5_0;
                                this.test_before.ta4hsio_ct_out5_1 = test_data[m].data.ta4hsio_ct_out5_1;
                                this.test_before.ta4hsio_ct_out6_0 = test_data[m].data.ta4hsio_ct_out6_0;
                                this.test_before.ta4hsio_ct_out6_1 = test_data[m].data.ta4hsio_ct_out6_1;
                                this.test_before.ta4hsio_is_iha_r = test_data[m].data.ta4hsio_is_iha_r;
                                this.test_before.ta4hsio_is_iha_y = test_data[m].data.ta4hsio_is_iha_y;
                                this.test_before.ta4hsio_is_iha_b = test_data[m].data.ta4hsio_is_iha_b;
                                this.test_before.ta4hsio_is_out1_r = test_data[m].data.ta4hsio_is_out1_r;
                                this.test_before.ta4hsio_is_out1_y = test_data[m].data.ta4hsio_is_out1_y;
                                this.test_before.ta4hsio_is_out1_b = test_data[m].data.ta4hsio_is_out1_b;
                                this.test_before.ta4hsio_is_out2_r = test_data[m].data.ta4hsio_is_out2_r;
                                this.test_before.ta4hsio_is_out2_y = test_data[m].data.ta4hsio_is_out2_y;
                                this.test_before.ta4hsio_is_out2_b = test_data[m].data.ta4hsio_is_out2_b;
                                this.test_before.ta4hsio_is_out3_r = test_data[m].data.ta4hsio_is_out3_r;
                                this.test_before.ta4hsio_is_out3_y = test_data[m].data.ta4hsio_is_out3_y;
                                this.test_before.ta4hsio_is_out3_b = test_data[m].data.ta4hsio_is_out3_b;
                                this.test_before.ta4hsio_is_out4_r = test_data[m].data.ta4hsio_is_out4_r;
                                this.test_before.ta4hsio_is_out4_y = test_data[m].data.ta4hsio_is_out4_y;
                                this.test_before.ta4hsio_is_out4_b = test_data[m].data.ta4hsio_is_out4_b;
                                this.test_before.ta4hsio_is_out5_r = test_data[m].data.ta4hsio_is_out5_r;
                                this.test_before.ta4hsio_is_out5_y = test_data[m].data.ta4hsio_is_out5_y;
                                this.test_before.ta4hsio_is_out5_b = test_data[m].data.ta4hsio_is_out5_b;
                                this.test_before.ta4hsio_is_out6_r = test_data[m].data.ta4hsio_is_out6_r;
                                this.test_before.ta4hsio_is_out6_y = test_data[m].data.ta4hsio_is_out6_y;
                                this.test_before.ta4hsio_is_out6_b = test_data[m].data.ta4hsio_is_out6_b;
                                this.test_before.ta4hsio_ip_iha_r = test_data[m].data.ta4hsio_ip_iha_r;
                                this.test_before.ta4hsio_ip_iha_y = test_data[m].data.ta4hsio_ip_iha_y;
                                this.test_before.ta4hsio_ip_iha_b = test_data[m].data.ta4hsio_ip_iha_b;
                                this.test_before.ta4hsio_ip_out1_r = test_data[m].data.ta4hsio_ip_out1_r;
                                this.test_before.ta4hsio_ip_out1_y = test_data[m].data.ta4hsio_ip_out1_y;
                                this.test_before.ta4hsio_ip_out1_b = test_data[m].data.ta4hsio_ip_out1_b;
                                this.test_before.ta4hsio_ip_out2_r = test_data[m].data.ta4hsio_ip_out2_r;
                                this.test_before.ta4hsio_ip_out2_y = test_data[m].data.ta4hsio_ip_out2_y;
                                this.test_before.ta4hsio_ip_out2_b = test_data[m].data.ta4hsio_ip_out2_b;
                                this.test_before.ta4hsio_ip_out3_r = test_data[m].data.ta4hsio_ip_out3_r;
                                this.test_before.ta4hsio_ip_out3_y = test_data[m].data.ta4hsio_ip_out3_y;
                                this.test_before.ta4hsio_ip_out3_b = test_data[m].data.ta4hsio_ip_out3_b;
                                this.test_before.ta4hsio_ip_out4_r = test_data[m].data.ta4hsio_ip_out4_r;
                                this.test_before.ta4hsio_ip_out4_y = test_data[m].data.ta4hsio_ip_out4_y;
                                this.test_before.ta4hsio_ip_out4_b = test_data[m].data.ta4hsio_ip_out4_b;
                                this.test_before.ta4hsio_ip_out5_r = test_data[m].data.ta4hsio_ip_out5_r;
                                this.test_before.ta4hsio_ip_out5_y = test_data[m].data.ta4hsio_ip_out5_y;
                                this.test_before.ta4hsio_ip_out5_b = test_data[m].data.ta4hsio_ip_out5_b;
                                this.test_before.ta4hsio_ip_out6_r = test_data[m].data.ta4hsio_ip_out6_r;
                                this.test_before.ta4hsio_ip_out6_y = test_data[m].data.ta4hsio_ip_out6_y;
                                this.test_before.ta4hsio_ip_out6_b = test_data[m].data.ta4hsio_ip_out6_b;
                                this.test_before.ta4hsio_ip_total_r = test_data[m].data.ta4hsio_ip_total_r;
                                this.test_before.ta4hsio_ip_total_y = test_data[m].data.ta4hsio_ip_total_y;
                                this.test_before.ta4hsio_ip_total_b = test_data[m].data.ta4hsio_ip_total_b;
                                this.test_before.ta4hsio_ip_diff_r = test_data[m].data.ta4hsio_ip_diff_r;
                                this.test_before.ta4hsio_ip_diff_y = test_data[m].data.ta4hsio_ip_diff_y;
                                this.test_before.ta4hsio_ip_diff_b = test_data[m].data.ta4hsio_ip_diff_b;
                                //Additional Information
                                this.test_before.ta4ai_ta0naremarks = test_data[m].data.ta4ai_ta0naremarks;
                                this.test_before.ta4ai_key_standard = test_data[m].data.ta4ai_key_standard;
                                this.test_before.ta4ai_key_non_standard = test_data[m].data.ta4ai_key_non_standard;
                                this.test_before.ta4ai_key_customer = test_data[m].data.ta4ai_key_customer;
                                this.test_before.ta4ai_info_gear = test_data[m].data.ta4ai_info_gear;
                                this.test_before.ta4ai_info_ct = test_data[m].data.ta4ai_info_ct;
                                this.test_before.ta4ai_info_pt = test_data[m].data.ta4ai_info_pt;
                                this.test_before.ta4ai_info_vcb = test_data[m].data.ta4ai_info_vcb;
                                this.test_before.ta4ai_meter_cable = test_data[m].data.ta4ai_meter_cable;
                                this.test_before.ta4ai_meter_box = test_data[m].data.ta4ai_meter_box;
                                this.test_before.ta4ai_kiosk_pe = test_data[m].data.ta4ai_kiosk_pe;
                                this.test_before.ta4ai_kiosk_sm = test_data[m].data.ta4ai_kiosk_sm;
                                this.test_before.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                                this.test_before.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                                this.test_before.optionDate = test_data[m].data.optionDate;
                                this.test_before.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                                this.test_before.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                                this.test_before.ta4ai_kiosk_date = test_data[m].data.ta4ai_kiosk_date;
                            }
                            // ta4testdata (after)
                            if (test_data[m].type === "after") {
                                // Meter Accuracy
                                this.test_after.ta4ma_brand = test_data[m].data.ta4ma_brand;
                                this.test_after.ta4ma_serialnum = test_data[m].data.ta4ma_serialnum;
                                this.test_after.ta4ma_calibration = test_data[m].data.ta4ma_calibration;
                                // Max CT loading 
                                this.test_after.ta4mct_ta0naremarks = test_data[m].ta4mct_ta0naremarks;
                                this.test_after.ta4mct_md = test_data[m].data.ta4mct_md;
                                this.test_after.ta4mct_vt = test_data[m].data.ta4mct_vt;
                                this.test_after.ta4mct_pf = test_data[m].data.ta4mct_pf;
                                this.test_after.ta4mct_ac = test_data[m].data.ta4mct_ac;
                                this.test_after.ta4mct_cl = test_data[m].data.ta4mct_cl;
                                // Voltage Reading & Ph-Rotation
                                this.test_after.ta4vrph_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                                this.test_after.ta4vrph_yb = test_data[m].data.ta4vrph_yb;
                                this.test_after.ta4vrph_ry = test_data[m].data.ta4vrph_ry;
                                this.test_after.ta4vrph_rb = test_data[m].data.ta4vrph_rb;
                                this.test_after.ta4vrph_rn = test_data[m].data.ta4vrph_rn;
                                this.test_after.ta4vrph_yn = test_data[m].data.ta4vrph_yn;
                                this.test_after.ta4vrph_bn = test_data[m].data.ta4vrph_bn;
                                this.test_after.ta4vrph_re = test_data[m].data.ta4vrph_re;
                                this.test_after.ta4vrph_ye = test_data[m].data.ta4vrph_ye;
                                this.test_after.ta4vrph_be = test_data[m].data.ta4vrph_be;
                                this.test_after.ta4vrph_ne = test_data[m].data.ta4vrph_ne;
                                this.test_after.ta4vrph_ph = test_data[m].data.ta4vrph_ph;
                                //CT Ratio Test & "CT Loading" Percentage
                                this.test_after.ta4ctr_ta0naremarks = test_data[m].data.ta4vrph_ta0naremarks;
                                this.test_after.ta4ctr_ct_ratio_0 = test_data[m].data.ta4ctr_ct_ratio_0;
                                this.test_after.ta4ctr_ct_ratio_1 = test_data[m].data.ta4ctr_ct_ratio_1;
                                this.test_after.ta4ctr_ip_r = test_data[m].data.ta4ctr_ip_r;
                                this.test_after.ta4ctr_ip_y = test_data[m].data.ta4ctr_ip_y;
                                this.test_after.ta4ctr_ip_b = test_data[m].data.ta4ctr_ip_b;
                                this.test_after.ta4ctr_is_r = test_data[m].data.ta4ctr_is_r;
                                this.test_after.ta4ctr_is_y = test_data[m].data.ta4ctr_is_y;
                                this.test_after.ta4ctr_is_b = test_data[m].data.ta4ctr_is_b;
                                this.test_after.ta4ctr_ccr_r = test_data[m].data.ta4ctr_ccr_r;
                                this.test_after.ta4ctr_ccr_y = test_data[m].data.ta4ctr_ccr_y;
                                this.test_after.ta4ctr_ccr_b = test_data[m].data.ta4ctr_ccr_b;
                                this.test_after.ta4ctr_cl_r = test_data[m].data.ta4ctr_cl_r;
                                this.test_after.ta4ctr_cl_y = test_data[m].data.ta4ctr_cl_y;
                                this.test_after.ta4ctr_cl_b = test_data[m].data.ta4ctr_cl_b;
                                this.test_after.ta4ctr_avg_ccr = test_data[m].data.ta4ctr_avg_ccr;
                                this.test_after.ta4ctr_avg_cl = test_data[m].data.ta4ctr_avg_cl;
                                //HV side and connsumer incomer (Pe TNB if available)
                                this.test_after.ta4hspe_mt_ratio_0 = test_data[m].data.ta4hspe_mt_ratio_0;
                                this.test_after.ta4hspe_mt_ratio_1 = test_data[m].data.ta4hspe_mt_ratio_1;
                                this.test_after.ta4hspe_is_mt_r = test_data[m].data.ta4hspe_is_mt_r;
                                this.test_after.ta4hspe_is_mt_y = test_data[m].data.ta4hspe_is_mt_y;
                                this.test_after.ta4hspe_is_mt_b = test_data[m].data.ta4hspe_is_mt_b;
                                this.test_after.ta4hspe_ip_mt_r = test_data[m].data.ta4hspe_ip_mt_r;
                                this.test_after.ta4hspe_ip_mt_y = test_data[m].data.ta4hspe_ip_mt_y;
                                this.test_after.ta4hspe_ip_mt_b = test_data[m].data.ta4hspe_ip_mt_b;
                                this.test_after.ta4hspe_ci_ratio_0 = test_data[m].data.ta4hspe_ci_ratio_0;
                                this.test_after.ta4hspe_ci_ratio_1 = test_data[m].data.ta4hspe_ci_ratio_1;
                                this.test_after.ta4hspe_is_ci_r = test_data[m].data.ta4hspe_is_ci_r;
                                this.test_after.ta4hspe_is_ci_y = test_data[m].data.ta4hspe_is_ci_y;
                                this.test_after.ta4hspe_is_ci_b = test_data[m].data.ta4hspe_is_ci_b;
                                this.test_after.ta4hspe_ip_ci_r = test_data[m].data.ta4hspe_ip_ci_r;
                                this.test_after.ta4hspe_ip_ci_y = test_data[m].data.ta4hspe_ip_ci_y;
                                this.test_after.ta4hspe_ip_ci_b = test_data[m].data.ta4hspe_ip_ci_b;
                                this.test_after.ta4hspe_diff_ci_r = test_data[m].data.ta4hspe_diff_ci_r;
                                this.test_after.ta4hspe_diff_ci_y = test_data[m].data.ta4hspe_diff_ci_y;
                                this.test_after.ta4hspe_diff_ci_b = test_data[m].data.ta4hspe_diff_ci_b;
                                this.test_after.ta4hspe_ov_ratio_0 = test_data[m].data.ta4hspe_ov_ratio_0;
                                this.test_after.ta4hspe_ov_ratio_1 = test_data[m].data.ta4hspe_ov_ratio_1;
                                this.test_after.ta4hspe_is_ov_r = test_data[m].data.ta4hspe_is_ov_r;
                                this.test_after.ta4hspe_is_ov_y = test_data[m].data.ta4hspe_is_ov_y;
                                this.test_after.ta4hspe_is_ov_b = test_data[m].data.ta4hspe_is_ov_b;
                                this.test_after.ta4hspe_ip_ov_r = test_data[m].data.ta4hspe_ip_ov_r;
                                this.test_after.ta4hspe_ip_ov_y = test_data[m].data.ta4hspe_ip_ov_y;
                                this.test_after.ta4hspe_ip_ov_b = test_data[m].data.ta4hspe_ip_ov_b;
                                this.test_after.ta4hspe_diff_ov_r = test_data[m].data.ta4hspe_diff_ov_r;
                                this.test_after.ta4hspe_diff_ov_y = test_data[m].data.ta4hspe_diff_ov_y;
                                this.test_after.ta4hspe_diff_ov_b = test_data[m].data.ta4hspe_diff_ov_b;
                                //CURRENT READING COMPARISON (HV SIDE & LV SIDE) METER PRIMARY AMPS VS CONSUMER LV OUTGOING
                                this.test_after.ta4hsls_ta0naremarks = test_data[m].data.ta4hsls_ta0naremarks;
                                this.test_after.ta4hsls_mpa_r = test_data[m].data.ta4hsls_mpa_r;
                                this.test_after.ta4hsls_mpa_y = test_data[m].data.ta4hsls_mpa_y;
                                this.test_after.ta4hsls_mpa_b = test_data[m].data.ta4hsls_mpa_b;
                                this.test_after.ta4hsls_test1_r = test_data[m].data.ta4hsls_test1_r;
                                this.test_after.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                                this.test_after.ta4hsls_test1_b = test_data[m].data.ta4hsls_test1_b;
                                this.test_after.ta4hsls_test2_r = test_data[m].data.ta4hsls_test2_r;
                                this.test_after.ta4hsls_test2_y = test_data[m].data.ta4hsls_test2_y;
                                this.test_after.ta4hsls_test2_b = test_data[m].data.ta4hsls_test2_b;
                                this.test_after.ta4hsls_test3_r = test_data[m].data.ta4hsls_test3_r;
                                this.test_after.ta4hsls_test3_y = test_data[m].data.ta4hsls_test3_y;
                                this.test_after.ta4hsls_test3_b = test_data[m].data.ta4hsls_test3_b;
                                this.test_after.ta4hsls_test4_r = test_data[m].data.ta4hsls_test4_r;
                                this.test_after.ta4hsls_test4_y = test_data[m].data.ta4hsls_test4_y;
                                this.test_after.ta4hsls_test1_y = test_data[m].data.ta4hsls_test1_y;
                                this.test_after.ta4hsls_test4_b = test_data[m].data.ta4hsls_test4_b;
                                this.test_after.ta4hsls_test5_r = test_data[m].data.ta4hsls_test5_r;
                                this.test_after.ta4hsls_test5_y = test_data[m].data.ta4hsls_test5_y;
                                this.test_after.ta4hsls_test5_b = test_data[m].data.ta4hsls_test5_b;
                                this.test_after.ta4hsls_test6_r = test_data[m].data.ta4hsls_test6_r;
                                this.test_after.ta4hsls_test6_y = test_data[m].data.ta4hsls_test6_y;
                                this.test_after.ta4hsls_test6_b = test_data[m].data.ta4hsls_test6_b;
                                this.test_after.ta4hsls_v_lv = test_data[m].data.ta4hsls_v_lv;
                                this.test_after.ta4hsls_v_hv = test_data[m].data.ta4hsls_v_hv;
                                this.test_after.ta4hsls_v_f = test_data[m].data.ta4hsls_v_f;
                                this.test_after.ta4hsls_la_r = test_data[m].data.ta4hsls_la_r;
                                this.test_after.ta4hsls_la_y = test_data[m].data.ta4hsls_la_y;
                                this.test_after.ta4hsls_la_b = test_data[m].data.ta4hsls_la_b;
                                this.test_after.ta4hsls_ha_r = test_data[m].data.ta4hsls_ha_r;
                                this.test_after.ta4hsls_ha_y = test_data[m].data.ta4hsls_ha_y;
                                this.test_after.ta4hsls_ha_b = test_data[m].data.ta4hsls_ha_b;
                                this.test_after.ta4hsls_dma_r = test_data[m].data.ta4hsls_dma_r;
                                this.test_after.ta4hsls_dma_y = test_data[m].data.ta4hsls_dma_y;
                                this.test_after.ta4hsls_dma_b = test_data[m].data.ta4hsls_dma_b;
                                //CURRENT READING COMPARISON (HV SIDE) CONSUMER INCOMER VS CONSUMER OUTGOING
                                this.test_after.ta4hsio_ta0naremarks = test_data[m].data.ta4hsio_ta0naremarks;
                                this.test_after.ta4hsio_ct_iha_0 = test_data[m].data.ta4hsio_ct_iha_0;
                                this.test_after.ta4hsio_ct_iha_1 = test_data[m].data.ta4hsio_ct_iha_1;
                                this.test_after.ta4hsio_ct_out1_0 = test_data[m].data.ta4hsio_ct_out1_0;
                                this.test_after.ta4hsio_ct_out1_1 = test_data[m].data.ta4hsio_ct_out1_1;
                                this.test_after.ta4hsio_ct_out2_0 = test_data[m].data.ta4hsio_ct_out2_0;
                                this.test_after.ta4hsio_ct_out2_1 = test_data[m].data.ta4hsio_ct_out2_1;
                                this.test_after.ta4hsio_ct_out3_0 = test_data[m].data.ta4hsio_ct_out3_0;
                                this.test_after.ta4hsio_ct_out3_1 = test_data[m].data.ta4hsio_ct_out3_1;
                                this.test_after.ta4hsio_ct_out4_0 = test_data[m].data.ta4hsio_ct_out4_0;
                                this.test_after.ta4hsio_ct_out4_1 = test_data[m].data.ta4hsio_ct_out4_1;
                                this.test_after.ta4hsio_ct_out5_0 = test_data[m].data.ta4hsio_ct_out5_0;
                                this.test_after.ta4hsio_ct_out5_1 = test_data[m].data.ta4hsio_ct_out5_1;
                                this.test_after.ta4hsio_ct_out6_0 = test_data[m].data.ta4hsio_ct_out6_0;
                                this.test_after.ta4hsio_ct_out6_1 = test_data[m].data.ta4hsio_ct_out6_1;
                                this.test_after.ta4hsio_is_iha_r = test_data[m].data.ta4hsio_is_iha_r;
                                this.test_after.ta4hsio_is_iha_y = test_data[m].data.ta4hsio_is_iha_y;
                                this.test_after.ta4hsio_is_iha_b = test_data[m].data.ta4hsio_is_iha_b;
                                this.test_after.ta4hsio_is_out1_r = test_data[m].data.ta4hsio_is_out1_r;
                                this.test_after.ta4hsio_is_out1_y = test_data[m].data.ta4hsio_is_out1_y;
                                this.test_after.ta4hsio_is_out1_b = test_data[m].data.ta4hsio_is_out1_b;
                                this.test_after.ta4hsio_is_out2_r = test_data[m].data.ta4hsio_is_out2_r;
                                this.test_after.ta4hsio_is_out2_y = test_data[m].data.ta4hsio_is_out2_y;
                                this.test_after.ta4hsio_is_out2_b = test_data[m].data.ta4hsio_is_out2_b;
                                this.test_after.ta4hsio_is_out3_r = test_data[m].data.ta4hsio_is_out3_r;
                                this.test_after.ta4hsio_is_out3_y = test_data[m].data.ta4hsio_is_out3_y;
                                this.test_after.ta4hsio_is_out3_b = test_data[m].data.ta4hsio_is_out3_b;
                                this.test_after.ta4hsio_is_out4_r = test_data[m].data.ta4hsio_is_out4_r;
                                this.test_after.ta4hsio_is_out4_y = test_data[m].data.ta4hsio_is_out4_y;
                                this.test_after.ta4hsio_is_out4_b = test_data[m].data.ta4hsio_is_out4_b;
                                this.test_after.ta4hsio_is_out5_r = test_data[m].data.ta4hsio_is_out5_r;
                                this.test_after.ta4hsio_is_out5_y = test_data[m].data.ta4hsio_is_out5_y;
                                this.test_after.ta4hsio_is_out5_b = test_data[m].data.ta4hsio_is_out5_b;
                                this.test_after.ta4hsio_is_out6_r = test_data[m].data.ta4hsio_is_out6_r;
                                this.test_after.ta4hsio_is_out6_y = test_data[m].data.ta4hsio_is_out6_y;
                                this.test_after.ta4hsio_is_out6_b = test_data[m].data.ta4hsio_is_out6_b;
                                this.test_after.ta4hsio_ip_iha_r = test_data[m].data.ta4hsio_ip_iha_r;
                                this.test_after.ta4hsio_ip_iha_y = test_data[m].data.ta4hsio_ip_iha_y;
                                this.test_after.ta4hsio_ip_iha_b = test_data[m].data.ta4hsio_ip_iha_b;
                                this.test_after.ta4hsio_ip_out1_r = test_data[m].data.ta4hsio_ip_out1_r;
                                this.test_after.ta4hsio_ip_out1_y = test_data[m].data.ta4hsio_ip_out1_y;
                                this.test_after.ta4hsio_ip_out1_b = test_data[m].data.ta4hsio_ip_out1_b;
                                this.test_after.ta4hsio_ip_out2_r = test_data[m].data.ta4hsio_ip_out2_r;
                                this.test_after.ta4hsio_ip_out2_y = test_data[m].data.ta4hsio_ip_out2_y;
                                this.test_after.ta4hsio_ip_out2_b = test_data[m].data.ta4hsio_ip_out2_b;
                                this.test_after.ta4hsio_ip_out3_r = test_data[m].data.ta4hsio_ip_out3_r;
                                this.test_after.ta4hsio_ip_out3_y = test_data[m].data.ta4hsio_ip_out3_y;
                                this.test_after.ta4hsio_ip_out3_b = test_data[m].data.ta4hsio_ip_out3_b;
                                this.test_after.ta4hsio_ip_out4_r = test_data[m].data.ta4hsio_ip_out4_r;
                                this.test_after.ta4hsio_ip_out4_y = test_data[m].data.ta4hsio_ip_out4_y;
                                this.test_after.ta4hsio_ip_out4_b = test_data[m].data.ta4hsio_ip_out4_b;
                                this.test_after.ta4hsio_ip_out5_r = test_data[m].data.ta4hsio_ip_out5_r;
                                this.test_after.ta4hsio_ip_out5_y = test_data[m].data.ta4hsio_ip_out5_y;
                                this.test_after.ta4hsio_ip_out5_b = test_data[m].data.ta4hsio_ip_out5_b;
                                this.test_after.ta4hsio_ip_out6_r = test_data[m].data.ta4hsio_ip_out6_r;
                                this.test_after.ta4hsio_ip_out6_y = test_data[m].data.ta4hsio_ip_out6_y;
                                this.test_after.ta4hsio_ip_out6_b = test_data[m].data.ta4hsio_ip_out6_b;
                                this.test_after.ta4hsio_ip_total_r = test_data[m].data.ta4hsio_ip_total_r;
                                this.test_after.ta4hsio_ip_total_y = test_data[m].data.ta4hsio_ip_total_y;
                                this.test_after.ta4hsio_ip_total_b = test_data[m].data.ta4hsio_ip_total_b;
                                this.test_after.ta4hsio_ip_diff_r = test_data[m].data.ta4hsio_ip_diff_r;
                                this.test_after.ta4hsio_ip_diff_y = test_data[m].data.ta4hsio_ip_diff_y;
                                this.test_after.ta4hsio_ip_diff_b = test_data[m].data.ta4hsio_ip_diff_b;
                                //Additional Information
                                this.test_after.ta4ai_ta0naremarks = test_data[m].data.ta4ai_ta0naremarks;
                                this.test_after.ta4ai_key_standard = test_data[m].data.ta4ai_key_standard;
                                this.test_after.ta4ai_key_non_standard = test_data[m].data.ta4ai_key_non_standard;
                                this.test_after.ta4ai_key_customer = test_data[m].data.ta4ai_key_customer;
                                this.test_after.ta4ai_info_gear = test_data[m].data.ta4ai_info_gear;
                                this.test_after.ta4ai_info_ct = test_data[m].data.ta4ai_info_ct;
                                this.test_after.ta4ai_info_pt = test_data[m].data.ta4ai_info_pt;
                                this.test_after.ta4ai_info_vcb = test_data[m].data.ta4ai_info_vcb;
                                this.test_after.ta4ai_meter_cable = test_data[m].data.ta4ai_meter_cable;
                                this.test_after.ta4ai_meter_box = test_data[m].data.ta4ai_meter_box;
                                this.test_after.ta4ai_kiosk_pe = test_data[m].data.ta4ai_kiosk_pe;
                                this.test_after.ta4ai_kiosk_sm = test_data[m].data.ta4ai_kiosk_sm;
                                this.test_after.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                                this.test_after.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                                this.test_after.optionDate = test_data[m].data.optionDate;
                                this.test_after.ta4ai_kiosk_su = test_data[m].data.ta4ai_kiosk_su;
                                this.test_after.ta4ai_kiosk_type = test_data[m].data.ta4ai_kiosk_type;
                                this.test_after.ta4ai_kiosk_date = test_data[m].data.ta4ai_kiosk_date;
                            }
                        }
                    }
                }
            }
        }
        // Setting Default Value
        // this.valueChangeRemarks = 'before';
        if (typeof (this.test_before.optionDate) === "undefined") {
            this.test_before.optionDate = true;
        }
        this.changeOptionDate(this.test_before.optionDate, 'before');
        if (typeof (this.test_after.optionDate) === "undefined") {
            this.test_after.optionDate = true;
        }
        this.changeOptionDate(this.test_after.optionDate, 'after');
        this.replaceMeterNCheck();
        // Validate User Input
        this.validateUserInput();
    }
    SealMvhvInspectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealMvhvInspectPage');
        debugger;
        var meterTa4test;
        var ta4TestData;
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
            meterTa4test = this.item.json.ta0feeder[this.fIndex].multiassetlocci.find(function (item) {
                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
            });
        }
        else if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) {
            meterTa4test = this.item.json.ta0feeder[this.fIndex].multiassetlocci.find(function (item) {
                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
            });
        }
        if (meterTa4test.hasOwnProperty('ta4testdata') && typeof (meterTa4test.ta4testdata) !== "undefined" && meterTa4test.ta4testdata !== null && meterTa4test.ta4testdata !== "") {
            var ta0testdetail;
            ta4TestData = meterTa4test.ta4testdata;
            if (Array.isArray(ta4TestData)) {
                this.loc_ta4TestData = JSON.parse(JSON.stringify(ta4TestData));
            }
            else {
                this.loc_ta4TestData = JSON.parse(ta4TestData);
            }
            while (!Array.isArray(this.loc_ta4TestData)) {
                this.loc_ta4TestData = JSON.parse(this.loc_ta4TestData);
            }
        }
        // Edited   : Alif (12.07.2019)
        // Transfer testdata into meter test informations.
        if (!this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta4testdata")) {
            // Checking only for old/new check meter only.
            if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) ||
                (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK)) {
                // If meter testdata is not available take from main meter.
                if (typeof (this.loc_ta4TestData) !== "undefined") {
                    if (this.loc_ta4TestData.length > 0) {
                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
                        // Checking ta4testdata
                        for (var m = 0; m < this.loc_ta4TestData.length; m++) {
                            // ta4testdata (before)
                            if (this.loc_ta4TestData[m].type === "before") {
                                if (typeof (this.loc_ta4TestData[m].data) !== "undefined") {
                                    // Remove Data Section No. 6, No. 9, No. 10 & 'Not Applicable'.
                                    // No. 6
                                    delete this.loc_ta4TestData[m].data.ta4ins_ta0naremarks;
                                    delete this.loc_ta4TestData[m].data.ta4sum_end;
                                    delete this.loc_ta4TestData[m].data.ta4sum_start;
                                    delete this.loc_ta4TestData[m].data.ta4sum_sted_diff;
                                    delete this.loc_ta4TestData[m].data.ta4sum_consumption;
                                    delete this.loc_ta4TestData[m].data.ta4sum_diff;
                                    delete this.loc_ta4TestData[m].data.summator;
                                    // No. 9
                                    delete this.loc_ta4TestData[m].data.ta4ma_ta0naremarks;
                                    // delete this.loc_ta4TestData[m].data.ta4ma_brand;
                                    // delete this.loc_ta4TestData[m].data.ta4ma_serialnum;
                                    // delete this.loc_ta4TestData[m].data.ta4ma_calibration;
                                    delete this.loc_ta4TestData[m].data.ta4ma_test1;
                                    delete this.loc_ta4TestData[m].data.ta4ma_test2;
                                    delete this.loc_ta4TestData[m].data.ta4ma_test3;
                                    delete this.loc_ta4TestData[m].data.ta4ma_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_start;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_stop;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_usage;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_error;
                                    delete this.loc_ta4TestData[m].data.ta4ma_read_start;
                                    delete this.loc_ta4TestData[m].data.ta4ma_read_end;
                                    delete this.loc_ta4TestData[m].data.ta4ma_read_diff;
                                    delete this.loc_ta4TestData[m].data.ta4ma_time_start;
                                    delete this.loc_ta4TestData[m].data.ta4ma_time_end;
                                    delete this.loc_ta4TestData[m].data.ta4ma_time_duration;
                                    delete this.loc_ta4TestData[m].data.ta4ma_v_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_i_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_c_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_calc_energy;
                                    delete this.loc_ta4TestData[m].data.ta4ma_diff;
                                    // No. 10
                                    delete this.loc_ta4TestData[m].data.ta4ef_ta0naremarks;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_r;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_ind_r;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_y;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_ind_y;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_b;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_ind_b;
                                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = this.loc_ta4TestData[m];
                                    this.test_before = this.loc_ta4TestData[m].data;
                                }
                            }
                            // ta4testdata (before)
                            if (this.loc_ta4TestData[m].type === "after") {
                                if (typeof (this.loc_ta4TestData[m].data) !== "undefined") {
                                    // Remove Data Section No. 6, No. 9, No. 10 & 'Not Applicable'.
                                    // No. 6
                                    delete this.loc_ta4TestData[m].data.ta4ins_ta0naremarks;
                                    delete this.loc_ta4TestData[m].data.ta4sum_end;
                                    delete this.loc_ta4TestData[m].data.ta4sum_start;
                                    delete this.loc_ta4TestData[m].data.ta4sum_sted_diff;
                                    delete this.loc_ta4TestData[m].data.ta4sum_consumption;
                                    delete this.loc_ta4TestData[m].data.ta4sum_diff;
                                    delete this.loc_ta4TestData[m].data.summator;
                                    // No. 9
                                    delete this.loc_ta4TestData[m].data.ta4ma_ta0naremarks;
                                    // delete this.loc_ta4TestData[m].data.ta4ma_brand;
                                    // delete this.loc_ta4TestData[m].data.ta4ma_serialnum;
                                    // delete this.loc_ta4TestData[m].data.ta4ma_calibration;
                                    delete this.loc_ta4TestData[m].data.ta4ma_test1;
                                    delete this.loc_ta4TestData[m].data.ta4ma_test2;
                                    delete this.loc_ta4TestData[m].data.ta4ma_test3;
                                    delete this.loc_ta4TestData[m].data.ta4ma_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_start;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_stop;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_usage;
                                    delete this.loc_ta4TestData[m].data.ta4ma_reg_error;
                                    delete this.loc_ta4TestData[m].data.ta4ma_read_start;
                                    delete this.loc_ta4TestData[m].data.ta4ma_read_end;
                                    delete this.loc_ta4TestData[m].data.ta4ma_read_diff;
                                    delete this.loc_ta4TestData[m].data.ta4ma_time_start;
                                    delete this.loc_ta4TestData[m].data.ta4ma_time_end;
                                    delete this.loc_ta4TestData[m].data.ta4ma_time_duration;
                                    delete this.loc_ta4TestData[m].data.ta4ma_v_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_i_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_c_avg;
                                    delete this.loc_ta4TestData[m].data.ta4ma_calc_energy;
                                    delete this.loc_ta4TestData[m].data.ta4ma_diff;
                                    // No. 10
                                    delete this.loc_ta4TestData[m].data.ta4ef_ta0naremarks;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_r;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_ind_r;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_y;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_ind_y;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_b;
                                    delete this.loc_ta4TestData[m].data.ta4ef_led_ind_b;
                                }
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = this.loc_ta4TestData[m];
                                this.test_after = this.loc_ta4TestData[m].data;
                            }
                            // ta4testdata (before)
                            if (this.loc_ta4TestData[m].type === "inspection") {
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = this.loc_ta4TestData[m];
                            }
                        }
                    }
                }
            }
        }
    };
    SealMvhvInspectPage.prototype.ionViewDidEnter = function () {
        debugger;
        console.log("This event will fire, whether it was the first load or a cached page.");
    };
    SealMvhvInspectPage.prototype.presentPopover = function (myEvent, popType) {
        debugger;
        var data = { 'parentValue': 'kanna' };
        var popover = this.popoverCtrl.create('SdPopupPage', {
            'parentWoValue': this,
            'popType': popType,
            'dataType': 'complaints',
        });
        popover.present({
            ev: myEvent
        });
    };
    SealMvhvInspectPage.prototype.showConfirm = function (datevalue, popType) {
        if (popType === 'dateSelect') {
            this.dateselect = datevalue;
        }
    };
    /**
     * Reason   : Method to on/off view all remark test.
     * Created  : Alif (07-02-2019)
     */
    SealMvhvInspectPage.prototype.showAllRemarkCommon = function (action) {
        if (this.showAllCommonRemarkDetails === false) {
            this.showAllCommonRemarkDetails = true;
        }
        else if (action === false) {
            this.showAllCommonRemarkDetails = false;
        }
    };
    /**
     * Reason   : Method to on/off view all remark test.
     * Created  : Alif (07-02-2019)
     */
    SealMvhvInspectPage.prototype.commonNotApplication = function (value, type) {
        if (value === 'Y' && type === 'before') {
            this.before_showContainRemark = true;
            // RESET DATA TEST
            this.test_before = {};
            // MCT TEST
            this.test_before.ta4mct_loc_test_ta0na = "Y";
            this.test_before.ta4mct_ta0na = true;
            // VRPH TEST
            this.test_before.ta4vrph_loc_test_ta0na = "Y";
            this.test_before.ta4vrph_ta0na = true;
            // MA TEST
            this.test_before.ta4ma_loc_test_ta0na = "Y";
            this.test_before.ta4ma_ta0na = true;
            // EF TEST
            this.test_before.ta4ef_loc_test_ta0na = "Y";
            this.test_before.ta4ef_ta0na = true;
            // CTR TEST
            this.test_before.ta4ctr_loc_test_ta0na = "Y";
            this.test_before.ta4ctr_ta0na = true;
            // HSPE TEST
            this.test_before.ta4hspe_loc_test_ta0na = "Y";
            this.test_before.ta4hspe_ta0na = true;
            // HSLS TEST
            this.test_before.ta4hsls_loc_test_ta0na = "Y";
            this.test_before.ta4hsls_ta0na = true;
            // HSIO TEST
            this.test_before.ta4hsio_loc_test_ta0na = "Y";
            this.test_before.ta4hsio_ta0na = true;
            // AI TEST
            this.test_before.ta4ai_loc_test_ta0na = "Y";
            this.test_before.ta4ai_ta0na = true;
            // INS TEST
            this.test_before.ta4ins_loc_test_ta0na = "Y";
            this.test_before.ta4ins_ta0na = true;
            // PRECOMM TEST
            this.test_before.ta4pc_loc_test_ta0na = "Y";
            this.test_before.ta4pc_ta0na = true;
        }
        else if (value === 'N' && type === 'before') {
            this.before_showContainRemark = false;
            // RESET DATA TEST
            this.test_before = {};
            // MCT TEST
            this.test_before.ta4mct_loc_test_ta0na = "N";
            this.test_before.ta4mct_ta0na = false;
            this.test_before.ta4mct_ta0naremarks = "";
            // VRPH TEST
            this.test_before.ta4vrph_loc_test_ta0na = "N";
            this.test_before.ta4vrph_ta0na = false;
            this.test_before.ta4vrph_ta0naremarks = "";
            // MA TEST
            this.test_before.ta4ma_loc_test_ta0na = "N";
            this.test_before.ta4ma_ta0na = false;
            this.test_before.ta4ma_ta0naremarks = "";
            // EF TEST
            this.test_before.ta4ef_loc_test_ta0na = "N";
            this.test_before.ta4ef_ta0na = false;
            this.test_before.ta4ef_ta0naremarks = "";
            // CTR TEST
            this.test_before.ta4ctr_loc_test_ta0na = "N";
            this.test_before.ta4ctr_ta0na = false;
            this.test_before.ta4ctr_ta0naremarks = "";
            // HSPE TEST
            this.test_before.ta4hspe_loc_test_ta0na = "N";
            this.test_before.ta4hspe_ta0na = false;
            this.test_before.ta4hspe_ta0naremarks = "";
            // HSLS TEST
            this.test_before.ta4hsls_loc_test_ta0na = "N";
            this.test_before.ta4hsls_ta0na = false;
            this.test_before.ta4hsls_ta0naremarks = "";
            // HSIO TEST
            this.test_before.ta4hsio_loc_test_ta0na = "N";
            this.test_before.ta4hsio_ta0na = false;
            this.test_before.ta4hsio_ta0naremarks = "";
            // AI TEST
            this.test_before.ta4ai_loc_test_ta0na = "N";
            this.test_before.ta4ai_ta0na = false;
            this.test_before.ta4ai_ta0naremarks = "";
            // INS TEST
            this.test_before.ta4ins_loc_test_ta0na = "N";
            this.test_before.ta4ins_ta0na = false;
            this.test_before.ta4ins_ta0naremarks = "";
            // PRECOMM TEST
            this.test_before.ta4pc_loc_test_ta0na = "N";
            this.test_before.ta4pc_ta0na = false;
            this.test_before.ta4pc_ta0naremarks = "";
        }
        else if (value === 'Y' && type === 'after') {
            this.after_showContainRemark = true;
            // RESET DATA TEST
            this.test_after = {};
            // MCT TEST
            this.test_after.ta4mct_loc_test_ta0na = "Y";
            this.test_after.ta4mct_ta0na = true;
            // VRPH TEST
            this.test_after.ta4vrph_loc_test_ta0na = "Y";
            this.test_after.ta4vrph_ta0na = true;
            // MA TEST
            this.test_after.ta4ma_loc_test_ta0na = "Y";
            this.test_after.ta4ma_ta0na = true;
            // EF TEST
            this.test_after.ta4ef_loc_test_ta0na = "Y";
            this.test_after.ta4ef_ta0na = true;
            // CTR TEST
            this.test_after.ta4ctr_loc_test_ta0na = "Y";
            this.test_after.ta4ctr_ta0na = true;
            // HSPE TEST
            this.test_after.ta4hspe_loc_test_ta0na = "Y";
            this.test_after.ta4hspe_ta0na = true;
            // HSLS TEST
            this.test_after.ta4hsls_loc_test_ta0na = "Y";
            this.test_after.ta4hsls_ta0na = true;
            // HSIO TEST
            this.test_after.ta4hsio_loc_test_ta0na = "Y";
            this.test_after.ta4hsio_ta0na = true;
            // AI TEST
            this.test_after.ta4ai_loc_test_ta0na = "Y";
            this.test_after.ta4ai_ta0na = true;
            // INS TEST
            this.test_after.ta4ins_loc_test_ta0na = "Y";
            this.test_after.ta4ins_ta0na = true;
            // PRECOMM TEST
            this.test_after.ta4pco_loc_test_ta0na = "Y";
            this.test_after.ta4pco_ta0na = true;
        }
        else if (value === 'N' && type === 'after') {
            this.after_showContainRemark = false;
            // RESET DATA TEST
            this.test_after = {};
            // MCT TEST
            this.test_after.ta4mct_loc_test_ta0na = "N";
            this.test_after.ta4mct_ta0na = false;
            this.test_after.ta4mct_ta0naremarks = "";
            // VRPH TEST
            this.test_after.ta4vrph_loc_test_ta0na = "N";
            this.test_after.ta4vrph_ta0na = false;
            this.test_after.ta4vrph_ta0naremarks = "";
            // MA TEST
            this.test_after.ta4ma_loc_test_ta0na = "N";
            this.test_after.ta4ma_ta0na = false;
            this.test_after.ta4ma_ta0naremarks = "";
            // EF TEST
            this.test_after.ta4ef_loc_test_ta0na = "N";
            this.test_after.ta4ef_ta0na = false;
            this.test_after.ta4ef_ta0naremarks = "";
            // CTR TEST
            this.test_after.ta4ctr_loc_test_ta0na = "N";
            this.test_after.ta4ctr_ta0na = false;
            this.test_after.ta4ctr_ta0naremarks = "";
            // HSPE TEST
            this.test_after.ta4hspe_loc_test_ta0na = "N";
            this.test_after.ta4hspe_ta0na = false;
            this.test_after.ta4hspe_ta0naremarks = "";
            // HSLS TEST
            this.test_after.ta4hsls_loc_test_ta0na = "N";
            this.test_after.ta4hsls_ta0na = false;
            this.test_after.ta4hsls_ta0naremarks = "";
            // HSIO TEST
            this.test_after.ta4hsio_loc_test_ta0na = "N";
            this.test_after.ta4hsio_ta0na = false;
            this.test_after.ta4hsio_ta0naremarks = "";
            // AI TEST
            this.test_after.ta4ai_loc_test_ta0na = "N";
            this.test_after.ta4ai_ta0na = false;
            this.test_after.ta4ai_ta0naremarks = "";
            // INS TEST
            this.test_after.ta4ins_loc_test_ta0na = "N";
            this.test_after.ta4ins_ta0na = false;
            this.test_after.ta4ins_ta0naremarks = "";
            // PRECOMM TEST
            this.test_after.ta4pc_loc_test_ta0na = "N";
            this.test_after.ta4pc_ta0na = false;
            this.test_after.ta4pc_ta0naremarks = "";
        }
    };
    /**
     * Reason   : Method to on/off view all remark test.
     * Created  : Alif (07-02-2019)
     */
    SealMvhvInspectPage.prototype.commonNotApplicationRemark = function (type) {
        if (type === "before") {
            // MCT TEST
            this.test_before.ta4mct_ta0naremarks = this.before_ta0Remark;
            // VRPH TEST
            this.test_before.ta4vrph_ta0naremarks = this.before_ta0Remark;
            // MA TEST
            this.test_before.ta4ma_ta0naremarks = this.before_ta0Remark;
            // EF TEST
            this.test_before.ta4ef_ta0naremarks = this.before_ta0Remark;
            // CTR TEST
            this.test_before.ta4ctr_ta0naremarks = this.before_ta0Remark;
            // HSPE TEST
            this.test_before.ta4hspe_ta0naremarks = this.before_ta0Remark;
            // HSLS TEST
            this.test_before.ta4hsls_ta0naremarks = this.before_ta0Remark;
            // HSIO TEST
            this.test_before.ta4hsio_ta0naremarks = this.before_ta0Remark;
            // AI TEST
            this.test_before.ta4ai_ta0naremarks = this.before_ta0Remark;
            // INS TEST
            this.test_before.ta4ins_ta0naremarks = this.before_ta0Remark;
            // PRECOMM TEST
            this.test_before.ta4pc_ta0naremarks = this.before_ta0Remark;
        }
        else {
            // MCT TEST
            this.test_after.ta4mct_ta0naremarks = this.after_ta0Remark;
            // VRPH TEST
            this.test_after.ta4vrph_ta0naremarks = this.after_ta0Remark;
            // MA TEST
            this.test_after.ta4ma_ta0naremarks = this.after_ta0Remark;
            // EF TEST
            this.test_after.ta4ef_ta0naremarks = this.after_ta0Remark;
            // CTR TEST
            this.test_after.ta4ctr_ta0naremarks = this.after_ta0Remark;
            // HSPE TEST
            this.test_after.ta4hspe_ta0naremarks = this.after_ta0Remark;
            // HSLS TEST
            this.test_after.ta4hsls_ta0naremarks = this.after_ta0Remark;
            // HSIO TEST
            this.test_after.ta4hsio_ta0naremarks = this.after_ta0Remark;
            // AI TEST
            this.test_after.ta4ai_ta0naremarks = this.after_ta0Remark;
            // INS TEST
            this.test_after.ta4ins_ta0naremarks = this.after_ta0Remark;
            // PRECOMM TEST
            this.test_after.ta4pc_ta0naremarks = this.after_ta0Remark;
        }
    };
    /**
     * Reason   : Method to Get Current (CT) / Voltage (PT) Ratio.
     * Created  : Alif (05-04-2019)
     */
    SealMvhvInspectPage.prototype.getCtPtRatioValue = function (type) {
        console.log("To get current or voltage ratio..");
        if (type === "ct") {
            // Collection devices. (15-01-2019)
            var devices = [];
            var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
            if (typeof (feeder) !== "undefined") {
                for (var i = 0; i < feeder.length; i++) {
                    if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                        var multiassetlocci = feeder[i].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                            devices.push(multiassetlocci[m]);
                        }
                    }
                }
            }
            /**
             * Reason   : Checking SO Type because ZIST do not have exisiting winding group (no current ratio)..
             * Created  : 15/04/2019
             */
            var first = 0, second = 0;
            if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                var device = devices.filter(function (item) {
                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT);
                });
                if (device.length > 0) {
                    for (var i = 0; i < device.length; i++) {
                        if (typeof (device[i].ta0registers) !== "undefined") {
                            for (var b = 0; b < device[i].ta0registers.length; b++) {
                                if (typeof (device[i].ta0registers[b].ta0windinggroup) !== "undefined") {
                                    var string = device[i].ta0registers[b].ta0windinggroup;
                                    var character = [];
                                    var value, value1, ct, double, combine = "", currentRatio = 0;
                                    for (var i = 0; i < string.length; i++) {
                                        character.push(string.charAt(i));
                                    }
                                    value = character.splice(1, 8);
                                    ct = value.splice(0, 5);
                                    ct.splice(4, 0, "/");
                                    for (var j = 0; j < ct.length; j++) {
                                        combine += ct[j];
                                        double = parseFloat(combine);
                                    }
                                    // Get Current Ratio
                                    this.ct_ratio = Number(double);
                                }
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            else {
                var device = devices.filter(function (item) {
                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT);
                });
                if (device.length > 0) {
                    // Finding ta0registers
                    for (var i = 0; i < device.length; i++) {
                        // Checking attribute ta0registers
                        if (device[i].hasOwnProperty("ta0registers")) {
                            if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
                                // Getting value from ta0registers
                                for (var m = 0; m < device[i].ta0registers.length; m++) {
                                    if (device[i].ta0registers[m].ta0windingcategory === "1") {
                                        first = device[i].ta0registers[m].ta0transformercurrent;
                                    }
                                    if (device[i].ta0registers[m].ta0windingcategory === "2") {
                                        second = device[i].ta0registers[m].ta0transformercurrent;
                                    }
                                }
                                if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                                    this.ct_ratio = Number(first);
                                    console.log("CT Ratio: " + this.ct_ratio);
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        else if (type === "pt") {
            // Collection devices. (15-01-2019)
            var devices = [];
            var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
            if (typeof (feeder) !== "undefined") {
                for (var i = 0; i < feeder.length; i++) {
                    if (typeof (this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                        var multiassetlocci = feeder[i].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                            devices.push(multiassetlocci[m]);
                        }
                    }
                }
            }
            var device = devices.filter(function (item) {
                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT);
            });
            var first = 0, second = 0;
            if (device.length > 0) {
                // Finding ta0registers
                for (var i = 0; i < device.length; i++) {
                    // Checking attribute ta0registers
                    if (device[i].hasOwnProperty("ta0registers")) {
                        if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
                            // Getting value from ta0registers
                            for (var m = 0; m < device[i].ta0registers.length; m++) {
                                if (device[i].ta0registers[m].ta0windingcategory === "1") {
                                    first = device[i].ta0registers[m].ta0transformervoltage;
                                }
                                if (device[i].ta0registers[m].ta0windingcategory === "2") {
                                    second = device[i].ta0registers[m].ta0transformervoltage;
                                }
                            }
                            if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                                this.pt_ratio = Number(first);
                                console.log("PT Ratio: " + this.pt_ratio);
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for MCT
     * Created  : Alif (07-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewMctTestSection = function () {
        console.log("Hide Show View Mct Test..");
        if (this.showViewMct === false) {
            this.showViewMct = true;
        }
        else {
            this.showViewMct = false;
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for MCT
     * Created  : Alif (07-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewMctTest = function (value, type) {
        console.log("Test or Remarks for Mct Test..");
        if (type === "before") {
            // Set value selected
            this.test_before.ta4mct_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4mct_ta0naremarks = "";
            this.test_before.ta4mct_md = "-";
            this.test_before.ta4mct_vt = "-";
            this.test_before.ta4mct_pf = "-";
            this.test_before.ta4mct_ac = "-";
            this.test_before.ta4mct_cl = "-";
            if (this.test_before.ta4mct_loc_test_ta0na === "Y") {
                this.test_before.ta4mct_ta0na = true;
            }
            else {
                this.test_before.ta4mct_ta0na = false;
            }
        }
        else {
            // Set value selected
            this.test_after.ta4mct_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4mct_ta0naremarks = "";
            this.test_after.ta4mct_md = "-";
            this.test_after.ta4mct_vt = "-";
            this.test_after.ta4mct_pf = "-";
            this.test_after.ta4mct_ac = "-";
            this.test_after.ta4mct_cl = "-";
            if (this.test_after.ta4mct_loc_test_ta0na === "Y") {
                this.test_after.ta4mct_ta0na = true;
            }
            else {
                this.test_after.ta4mct_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for VRPH
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewVrphTest = function (value, type) {
        console.log("Test or Remarks for Vrph Test..");
        if (type === "before") {
            // Set value selected
            this.test_before.ta4vrph_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4vrph_ta0naremarks = "";
            this.test_before.ta4vrph_ry = "-";
            this.test_before.ta4vrph_yb = "-";
            this.test_before.ta4vrph_rb = "-";
            this.test_before.ta4vrph_rn = "-";
            this.test_before.ta4vrph_yn = "-";
            this.test_before.ta4vrph_bn = "-";
            this.test_before.ta4vrph_re = "-";
            this.test_before.ta4vrph_ye = "-";
            this.test_before.ta4vrph_be = "-";
            this.test_before.ta4vrph_ne = "-";
            this.test_before.ta4vrph_ph = "-";
            if (this.test_before.ta4vrph_loc_test_ta0na === "Y") {
                this.test_before.ta4vrph_ta0na = true;
            }
            else {
                this.test_before.ta4vrph_ta0na = false;
            }
        }
        else {
            // Set value selected
            this.test_after.ta4vrph_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4vrph_ta0naremarks = "";
            this.test_after.ta4vrph_ry = "-";
            this.test_after.ta4vrph_yb = "-";
            this.test_after.ta4vrph_rb = "-";
            this.test_after.ta4vrph_rn = "-";
            this.test_after.ta4vrph_yn = "-";
            this.test_after.ta4vrph_bn = "-";
            this.test_after.ta4vrph_re = "-";
            this.test_after.ta4vrph_ye = "-";
            this.test_after.ta4vrph_be = "-";
            this.test_after.ta4vrph_ne = "-";
            this.test_after.ta4vrph_ph = "-";
            if (this.test_after.ta4vrph_loc_test_ta0na === "Y") {
                this.test_after.ta4vrph_ta0na = true;
            }
            else {
                this.test_after.ta4vrph_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for MA
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewMaTest = function (value, type) {
        console.log("Test or Remarks for Ma Test..");
        if (type === "before") {
            // set value selected
            this.test_before.ta4ma_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4ma_ta0naremarks = "";
            this.test_before.ta4ma_test1 = "-";
            this.test_before.ta4ma_test2 = "-";
            this.test_before.ta4ma_test3 = "-";
            this.test_before.ta4ma_avg = "-";
            this.test_before.ta4ma_reg_start = "-";
            this.test_before.ta4ma_reg_stop = "-";
            this.test_before.ta4ma_reg_usage = "-";
            this.test_before.ta4ma_reg_error = "-";
            this.test_before.ta4ma_read_start = "-";
            this.test_before.ta4ma_read_end = "-";
            this.test_before.ta4ma_read_diff = "-";
            this.test_before.ta4ma_time_start = "-";
            this.test_before.ta4ma_time_end = "-";
            this.test_before.ta4ma_time_duration = "-";
            this.test_before.ta4ma_v_avg = "-";
            this.test_before.ta4ma_i_avg = "-";
            this.test_before.ta4ma_c_avg = "-";
            this.test_before.ta4ma_calc_energy = "-";
            this.test_before.ta4ma_diff = "-";
            if (this.test_before.ta4ma_loc_test_ta0na === "Y") {
                this.test_before.ta4ma_ta0na = true;
            }
            else {
                this.test_before.ta4ma_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4ma_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4ma_ta0naremarks = "";
            this.test_after.ta4ma_test1 = "-";
            this.test_after.ta4ma_test2 = "-";
            this.test_after.ta4ma_test3 = "-";
            this.test_after.ta4ma_avg = "-";
            this.test_after.ta4ma_reg_start = "-";
            this.test_after.ta4ma_reg_stop = "-";
            this.test_after.ta4ma_reg_usage = "-";
            this.test_after.ta4ma_reg_error = "-";
            this.test_after.ta4ma_read_start = "-";
            this.test_after.ta4ma_read_end = "-";
            this.test_after.ta4ma_read_diff = "-";
            this.test_after.ta4ma_time_start = "-";
            this.test_after.ta4ma_time_end = "-";
            this.test_after.ta4ma_time_duration = "-";
            this.test_after.ta4ma_v_avg = "-";
            this.test_after.ta4ma_i_avg = "-";
            this.test_after.ta4ma_c_avg = "-";
            this.test_after.ta4ma_calc_energy = "-";
            this.test_after.ta4ma_diff = "-";
            if (this.test_after.ta4ma_loc_test_ta0na === "Y") {
                this.test_after.ta4ma_ta0na = true;
            }
            else {
                this.test_after.ta4ma_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for EF
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewEfTest = function (value, type) {
        console.log("Test or Remarks for Ef Test..");
        if (type === "before") {
            // set value selected
            this.test_before.ta4ef_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4ef_ta0naremarks = "";
            this.test_before.ta4ef_led_r = "-";
            this.test_before.ta4ef_led_ind_r = "-";
            this.test_before.ta4ef_led_y = "-";
            this.test_before.ta4ef_led_ind_y = "-";
            this.test_before.ta4ef_led_b = "-";
            this.test_before.ta4ef_led_ind_b = "-";
            if (this.test_before.ta4ef_loc_test_ta0na === "Y") {
                this.test_before.ta4ef_ta0na = true;
            }
            else {
                this.test_before.ta4ef_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4ef_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4ef_ta0naremarks = "";
            this.test_after.ta4ef_led_r = "-";
            this.test_after.ta4ef_led_ind_r = "-";
            this.test_after.ta4ef_led_y = "-";
            this.test_after.ta4ef_led_ind_y = "-";
            this.test_after.ta4ef_led_b = "-";
            this.test_after.ta4ef_led_ind_b = "-";
            if (this.test_after.ta4ef_loc_test_ta0na === "Y") {
                this.test_after.ta4ef_ta0na = true;
            }
            else {
                this.test_after.ta4ef_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for CTR
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewCtrTest = function (value, type) {
        console.log("Test or Remarks for CTR Test..");
        if (type === "before") {
            // set value selected
            this.test_before.ta4ctr_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4ctr_ta0naremarks = "";
            this.test_before.ta4ctr_ip_r = "-";
            this.test_before.ta4ctr_is_r = "-";
            this.test_before.ta4ctr_ccr_r = "-";
            this.test_before.ta4ctr_cl_r = "-";
            this.test_before.ta4ctr_ip_y = "-";
            this.test_before.ta4ctr_is_y = "-";
            this.test_before.ta4ctr_ccr_y = "-";
            this.test_before.ta4ctr_cl_y = "-";
            this.test_before.ta4ctr_ip_b = "-";
            this.test_before.ta4ctr_is_b = "-";
            this.test_before.ta4ctr_ccr_b = "-";
            this.test_before.ta4ctr_cl_b = "-";
            this.test_before.ta4ctr_avg_ccr = "-";
            this.test_before.ta4ctr_avg_cl = "-";
            if (this.test_before.ta4ctr_loc_test_ta0na === "Y") {
                this.test_before.ta4ctr_ta0na = true;
            }
            else {
                this.test_before.ta4ctr_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4ctr_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4ctr_ta0naremarks = "";
            this.test_after.ta4ctr_ip_r = "-";
            this.test_after.ta4ctr_is_r = "-";
            this.test_after.ta4ctr_ccr_r = "-";
            this.test_after.ta4ctr_cl_r = "-";
            this.test_after.ta4ctr_ip_y = "-";
            this.test_after.ta4ctr_is_y = "-";
            this.test_after.ta4ctr_ccr_y = "-";
            this.test_after.ta4ctr_cl_y = "-";
            this.test_after.ta4ctr_ip_b = "-";
            this.test_after.ta4ctr_is_b = "-";
            this.test_after.ta4ctr_ccr_b = "-";
            this.test_after.ta4ctr_cl_b = "-";
            this.test_after.ta4ctr_avg_ccr = "-";
            this.test_after.ta4ctr_avg_cl = "-";
            if (this.test_after.ta4ctr_loc_test_ta0na === "Y") {
                this.test_after.ta4ctr_ta0na = true;
            }
            else {
                this.test_after.ta4ctr_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for HSPE
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewHspeTest = function (value, type) {
        console.log("Test or Remarks for HSPE Test..");
        if (type === "before") {
            // set value selected
            this.test_before.ta4hspe_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4hspe_ta0naremarks = "";
            this.test_before.ta4hspe_mt_ratio = "-";
            this.test_before.ta4hspe_ci_ratio = "-";
            this.test_before.ta4hspe_ov_ratio = "-";
            this.test_before.ta4hspe_is_mt_r = "-";
            this.test_before.ta4hspe_is_ci_r = "-";
            this.test_before.ta4hspe_is_ov_r = "-";
            this.test_before.ta4hspe_ip_mt_r = "-";
            this.test_before.ta4hspe_ip_ci_r = "-";
            this.test_before.ta4hspe_ip_ov_r = "-";
            this.test_before.ta4hspe_diff_ci_r = "-";
            this.test_before.ta4hspe_diff_ov_r = "-";
            this.test_before.ta4hspe_is_mt_y = "-";
            this.test_before.ta4hspe_is_ci_y = "-";
            this.test_before.ta4hspe_is_ov_y = "-";
            this.test_before.ta4hspe_ip_mt_y = "-";
            this.test_before.ta4hspe_ip_ci_y = "-";
            this.test_before.ta4hspe_ip_ov_y = "-";
            this.test_before.ta4hspe_diff_ci_y = "-";
            this.test_before.ta4hspe_diff_ov_y = "-";
            this.test_before.ta4hspe_is_mt_b = "-";
            this.test_before.ta4hspe_is_ci_b = "-";
            this.test_before.ta4hspe_is_ov_b = "-";
            this.test_before.ta4hspe_ip_mt_b = "-";
            this.test_before.ta4hspe_ip_ci_b = "-";
            this.test_before.ta4hspe_ip_ov_b = "-";
            this.test_before.ta4hspe_diff_ci_b = "-";
            this.test_before.ta4hspe_diff_ov_b = "-";
            if (this.test_before.ta4hspe_loc_test_ta0na === "Y") {
                this.test_before.ta4hspe_ta0na = true;
            }
            else {
                this.test_before.ta4hspe_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4hspe_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4hspe_ta0naremarks = "";
            this.test_after.ta4hspe_mt_ratio = "-";
            this.test_after.ta4hspe_ci_ratio = "-";
            this.test_after.ta4hspe_ov_ratio = "-";
            this.test_after.ta4hspe_is_mt_r = "-";
            this.test_after.ta4hspe_is_ci_r = "-";
            this.test_after.ta4hspe_is_ov_r = "-";
            this.test_after.ta4hspe_ip_mt_r = "-";
            this.test_after.ta4hspe_ip_ci_r = "-";
            this.test_after.ta4hspe_ip_ov_r = "-";
            this.test_after.ta4hspe_diff_ci_r = "-";
            this.test_after.ta4hspe_diff_ov_r = "-";
            this.test_after.ta4hspe_is_mt_y = "-";
            this.test_after.ta4hspe_is_ci_y = "-";
            this.test_after.ta4hspe_is_ov_y = "-";
            this.test_after.ta4hspe_ip_mt_y = "-";
            this.test_after.ta4hspe_ip_ci_y = "-";
            this.test_after.ta4hspe_ip_ov_y = "-";
            this.test_after.ta4hspe_diff_ci_y = "-";
            this.test_after.ta4hspe_diff_ov_y = "-";
            this.test_after.ta4hspe_is_mt_b = "-";
            this.test_after.ta4hspe_is_ci_b = "-";
            this.test_after.ta4hspe_is_ov_b = "-";
            this.test_after.ta4hspe_ip_mt_b = "-";
            this.test_after.ta4hspe_ip_ci_b = "-";
            this.test_after.ta4hspe_ip_ov_b = "-";
            this.test_after.ta4hspe_diff_ci_b = "-";
            this.test_after.ta4hspe_diff_ov_b = "-";
            if (this.test_after.ta4hspe_loc_test_ta0na === "Y") {
                this.test_after.ta4hspe_ta0na = true;
            }
            else {
                this.test_after.ta4hspe_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for HSLS
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewHslsTest = function (value, type) {
        console.log("Test or Remarks for HSPE Test..");
        if (type === "before") {
            // set value selected
            this.test_before.ta4hsls_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4hsls_ta0naremarks = "";
            this.test_before.ta4hsls_c_lv = "-";
            this.test_before.ta4hsls_v_hv = "-";
            this.test_before.ta4hsls_v_f = "-";
            this.test_before.ta4hsls_mpa_r = "-";
            this.test_before.ta4hsls_test1_r = "-";
            this.test_before.ta4hsls_test2_r = "-";
            this.test_before.ta4hsls_test3_r = "-";
            this.test_before.ta4hsls_test4_r = "-";
            this.test_before.ta4hsls_test5_r = "-";
            this.test_before.ta4hsls_test6_r = "-";
            this.test_before.ta4hsls_la_r = "-";
            this.test_before.ta4hsls_ha_r = "-";
            this.test_before.ta4hsls_dma_r = "-";
            this.test_before.ta4hsls_mpa_y = "-";
            this.test_before.ta4hsls_test1_y = "-";
            this.test_before.ta4hsls_test2_y = "-";
            this.test_before.ta4hsls_test3_y = "-";
            this.test_before.ta4hsls_test4_y = "-";
            this.test_before.ta4hsls_test5_y = "-";
            this.test_before.ta4hsls_test6_y = "-";
            this.test_before.ta4hsls_la_y = "-";
            this.test_before.ta4hsls_ha_y = "-";
            this.test_before.ta4hsls_dma_y = "-";
            this.test_before.ta4hsls_mpa_b = "-";
            this.test_before.ta4hsls_test1_b = "-";
            this.test_before.ta4hsls_test2_b = "-";
            this.test_before.ta4hsls_test3_b = "-";
            this.test_before.ta4hsls_test4_b = "-";
            this.test_before.ta4hsls_test5_b = "-";
            this.test_before.ta4hsls_test6_b = "-";
            this.test_before.ta4hsls_la_b = "-";
            this.test_before.ta4hsls_ha_b = "-";
            this.test_before.ta4hsls_dma_b = "-";
            if (this.test_before.ta4hsls_loc_test_ta0na === "Y") {
                this.test_before.ta4hsls_ta0na = true;
            }
            else {
                this.test_before.ta4hsls_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4hsls_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4hsls_ta0naremarks = "";
            this.test_after.ta4hsls_c_lv = "-";
            this.test_after.ta4hsls_v_hv = "-";
            this.test_after.ta4hsls_v_f = "-";
            this.test_after.ta4hsls_mpa_r = "-";
            this.test_after.ta4hsls_test1_r = "-";
            this.test_after.ta4hsls_test2_r = "-";
            this.test_after.ta4hsls_test3_r = "-";
            this.test_after.ta4hsls_test4_r = "-";
            this.test_after.ta4hsls_test5_r = "-";
            this.test_after.ta4hsls_test6_r = "-";
            this.test_after.ta4hsls_la_r = "-";
            this.test_after.ta4hsls_ha_r = "-";
            this.test_after.ta4hsls_dma_r = "-";
            this.test_after.ta4hsls_mpa_y = "-";
            this.test_after.ta4hsls_test1_y = "-";
            this.test_after.ta4hsls_test2_y = "-";
            this.test_after.ta4hsls_test3_y = "-";
            this.test_after.ta4hsls_test4_y = "-";
            this.test_after.ta4hsls_test5_y = "-";
            this.test_after.ta4hsls_test6_y = "-";
            this.test_after.ta4hsls_la_y = "-";
            this.test_after.ta4hsls_ha_y = "-";
            this.test_after.ta4hsls_dma_y = "-";
            this.test_after.ta4hsls_mpa_b = "-";
            this.test_after.ta4hsls_test1_b = "-";
            this.test_after.ta4hsls_test2_b = "-";
            this.test_after.ta4hsls_test3_b = "-";
            this.test_after.ta4hsls_test4_b = "-";
            this.test_after.ta4hsls_test5_b = "-";
            this.test_after.ta4hsls_test6_b = "-";
            this.test_after.ta4hsls_la_b = "-";
            this.test_after.ta4hsls_ha_b = "-";
            this.test_after.ta4hsls_dma_b = "-";
            if (this.test_after.ta4hsls_loc_test_ta0na === "Y") {
                this.test_after.ta4hsls_ta0na = true;
            }
            else {
                this.test_after.ta4hsls_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for HSIO
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewHsioTest = function (value, type) {
        console.log("Test or Remarks for HSIO Test..");
        if (type === "before") {
            // set value selected
            this.test_before.ta4hsio_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4hsio_ta0naremarks = "";
            this.test_before.ta4hsio_ct_iha = "-";
            this.test_before.ta4hsio_ct_out1 = "-";
            this.test_before.ta4hsio_ct_out2 = "-";
            this.test_before.ta4hsio_ct_out3 = "-";
            this.test_before.ta4hsio_ct_out4 = "-";
            this.test_before.ta4hsio_ct_out5 = "-";
            this.test_before.ta4hsio_ct_out6 = "-";
            this.test_before.ta4hsio_is_iha_r = "-";
            this.test_before.ta4hsio_is_out1_r = "-";
            this.test_before.ta4hsio_is_out2_r = "-";
            this.test_before.ta4hsio_is_out3_r = "-";
            this.test_before.ta4hsio_is_out4_r = "-";
            this.test_before.ta4hsio_is_out5_r = "-";
            this.test_before.ta4hsio_is_out6_r = "-";
            this.test_before.ta4hsio_is_iha_y = "-";
            this.test_before.ta4hsio_is_out1_y = "-";
            this.test_before.ta4hsio_is_out2_y = "-";
            this.test_before.ta4hsio_is_out3_y = "-";
            this.test_before.ta4hsio_is_out4_y = "-";
            this.test_before.ta4hsio_is_out5_y = "-";
            this.test_before.ta4hsio_is_out6_y = "-";
            this.test_before.ta4hsio_is_iha_b = "-";
            this.test_before.ta4hsio_is_out1_b = "-";
            this.test_before.ta4hsio_is_out2_b = "-";
            this.test_before.ta4hsio_is_out3_b = "-";
            this.test_before.ta4hsio_is_out4_b = "-";
            this.test_before.ta4hsio_is_out5_b = "-";
            this.test_before.ta4hsio_is_out6_b = "-";
            this.test_before.ta4hsio_ip_iha_r = "-";
            this.test_before.ta4hsio_ip_out1_r = "-";
            this.test_before.ta4hsio_ip_out2_r = "-";
            this.test_before.ta4hsio_ip_out3_r = "-";
            this.test_before.ta4hsio_ip_out4_r = "-";
            this.test_before.ta4hsio_ip_out5_r = "-";
            this.test_before.ta4hsio_ip_out6_r = "-";
            this.test_before.ta4hsio_ip_total_r = "-";
            this.test_before.ta4hsio_ip_diff_r = "-";
            this.test_before.ta4hsio_ip_iha_y = "-";
            this.test_before.ta4hsio_ip_out1_y = "-";
            this.test_before.ta4hsio_ip_out2_y = "-";
            this.test_before.ta4hsio_ip_out3_y = "-";
            this.test_before.ta4hsio_ip_out4_y = "-";
            this.test_before.ta4hsio_ip_out5_y = "-";
            this.test_before.ta4hsio_ip_out6_y = "-";
            this.test_before.ta4hsio_ip_total_y = "-";
            this.test_before.ta4hsio_ip_diff_y = "-";
            this.test_before.ta4hsio_ip_iha_b = "-";
            this.test_before.ta4hsio_ip_out1_b = "-";
            this.test_before.ta4hsio_ip_out2_b = "-";
            this.test_before.ta4hsio_ip_out3_b = "-";
            this.test_before.ta4hsio_ip_out4_b = "-";
            this.test_before.ta4hsio_ip_out5_b = "-";
            this.test_before.ta4hsio_ip_out6_b = "-";
            this.test_before.ta4hsio_ip_total_b = "-";
            this.test_before.ta4hsio_ip_diff_b = "-";
            if (this.test_before.ta4hsio_loc_test_ta0na === "Y") {
                this.test_before.ta4hsio_ta0na = true;
            }
            else {
                this.test_before.ta4hsio_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4hsio_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4hsio_ta0naremarks = "";
            this.test_after.ta4hsio_ct_iha = "-";
            this.test_after.ta4hsio_ct_out1 = "-";
            this.test_after.ta4hsio_ct_out2 = "-";
            this.test_after.ta4hsio_ct_out3 = "-";
            this.test_after.ta4hsio_ct_out4 = "-";
            this.test_after.ta4hsio_ct_out5 = "-";
            this.test_after.ta4hsio_ct_out6 = "-";
            this.test_after.ta4hsio_is_iha_r = "-";
            this.test_after.ta4hsio_is_out1_r = "-";
            this.test_after.ta4hsio_is_out2_r = "-";
            this.test_after.ta4hsio_is_out3_r = "-";
            this.test_after.ta4hsio_is_out4_r = "-";
            this.test_after.ta4hsio_is_out5_r = "-";
            this.test_after.ta4hsio_is_out6_r = "-";
            this.test_after.ta4hsio_is_iha_y = "-";
            this.test_after.ta4hsio_is_out1_y = "-";
            this.test_after.ta4hsio_is_out2_y = "-";
            this.test_after.ta4hsio_is_out3_y = "-";
            this.test_after.ta4hsio_is_out4_y = "-";
            this.test_after.ta4hsio_is_out5_y = "-";
            this.test_after.ta4hsio_is_out6_y = "-";
            this.test_after.ta4hsio_is_iha_b = "-";
            this.test_after.ta4hsio_is_out1_b = "-";
            this.test_after.ta4hsio_is_out2_b = "-";
            this.test_after.ta4hsio_is_out3_b = "-";
            this.test_after.ta4hsio_is_out4_b = "-";
            this.test_after.ta4hsio_is_out5_b = "-";
            this.test_after.ta4hsio_is_out6_b = "-";
            this.test_after.ta4hsio_ip_iha_r = "-";
            this.test_after.ta4hsio_ip_out1_r = "-";
            this.test_after.ta4hsio_ip_out2_r = "-";
            this.test_after.ta4hsio_ip_out3_r = "-";
            this.test_after.ta4hsio_ip_out4_r = "-";
            this.test_after.ta4hsio_ip_out5_r = "-";
            this.test_after.ta4hsio_ip_out6_r = "-";
            this.test_after.ta4hsio_ip_total_r = "-";
            this.test_after.ta4hsio_ip_diff_r = "-";
            this.test_after.ta4hsio_ip_iha_y = "-";
            this.test_after.ta4hsio_ip_out1_y = "-";
            this.test_after.ta4hsio_ip_out2_y = "-";
            this.test_after.ta4hsio_ip_out3_y = "-";
            this.test_after.ta4hsio_ip_out4_y = "-";
            this.test_after.ta4hsio_ip_out5_y = "-";
            this.test_after.ta4hsio_ip_out6_y = "-";
            this.test_after.ta4hsio_ip_total_y = "-";
            this.test_after.ta4hsio_ip_diff_y = "-";
            this.test_after.ta4hsio_ip_iha_b = "-";
            this.test_after.ta4hsio_ip_out1_b = "-";
            this.test_after.ta4hsio_ip_out2_b = "-";
            this.test_after.ta4hsio_ip_out3_b = "-";
            this.test_after.ta4hsio_ip_out4_b = "-";
            this.test_after.ta4hsio_ip_out5_b = "-";
            this.test_after.ta4hsio_ip_out6_b = "-";
            this.test_after.ta4hsio_ip_total_b = "-";
            this.test_after.ta4hsio_ip_diff_b = "-";
            if (this.test_after.ta4hsio_loc_test_ta0na === "Y") {
                this.test_after.ta4hsio_ta0na = true;
            }
            else {
                this.test_after.ta4hsio_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for AI
     * Created  : Alif (08-02-2019)
     */
    SealMvhvInspectPage.prototype.showViewAiTest = function (value, type) {
        console.log("Test or Remarks for AI Test..");
        debugger;
        if (type == "before") {
            // set value selected
            this.test_before.ta4ai_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4ai_ta0naremarks = "";
            this.test_before.ta4ai_key_standard = "-";
            this.test_before.ta4ai_key_non_standard = "-";
            this.test_before.ta4ai_key_customer = "-";
            //this.test_before.ta4ai_info_gear = "-";//001
            this.test_before.ta4ai_info_gear = ""; //001
            this.test_before.ta4ai_info_ct = "-";
            this.test_before.ta4ai_info_pt = "-";
            this.test_before.ta4ai_info_vcb = "-";
            this.test_before.ta4ai_meter_cable = "-";
            this.test_before.ta4ai_meter_box = "-";
            this.test_before.ta4ai_kiosk_pe = "-";
            this.test_before.ta4ai_kiosk_sm = "-";
            this.test_before.ta4ai_kiosk_su = "-";
            this.test_before.ta4ai_kiosk_type = "-";
            this.test_before.ta4ai_kiosk_date = "-";
            if (this.test_before.ta4ai_loc_test_ta0na === "Y") {
                this.test_before.ta4ai_ta0na = true;
            }
            else {
                this.test_before.ta4ai_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4ai_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4ai_ta0naremarks = "";
            this.test_after.ta4ai_key_standard = "-";
            this.test_after.ta4ai_key_non_standard = "-";
            this.test_after.ta4ai_key_customer = "-";
            //this.test_after.ta4ai_info_gear = "-";//001
            this.test_after.ta4ai_info_gear = ""; //001
            this.test_after.ta4ai_info_ct = "-";
            this.test_after.ta4ai_info_pt = "-";
            this.test_after.ta4ai_info_vcb = "-";
            this.test_after.ta4ai_meter_cable = "-";
            this.test_after.ta4ai_meter_box = "-";
            this.test_after.ta4ai_kiosk_pe = "-";
            this.test_after.ta4ai_kiosk_sm = "-";
            this.test_after.ta4ai_kiosk_su = "-";
            this.test_after.ta4ai_kiosk_type = "-";
            this.test_after.ta4ai_kiosk_date = "-";
            if (this.test_after.ta4ai_loc_test_ta0na === "Y") {
                this.test_after.ta4ai_ta0na = true;
            }
            else {
                this.test_after.ta4ai_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for Pre-Commissioning
     * Created  : Alif (16-04-2019)
     */
    SealMvhvInspectPage.prototype.showViewPreCommTest = function (value, type) {
        console.log("Test or Remarks for Pre-Comminssioning Test..");
        if (type == "before") {
            // set value selected
            this.test_before.ta4pc_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4pc_ta0naremarks = "";
            this.test_before.ta4pc_contctpt_r = "";
            this.test_before.ta4pc_contctpt_y = "";
            this.test_before.ta4pc_contctpt_b = "";
            this.test_before.ta4pc_ctratio_r = "";
            this.test_before.ta4pc_ctratio_y = "";
            this.test_before.ta4pc_ctratio_b = "";
            this.test_before.ta4pc_ctpolar_r = "";
            this.test_before.ta4pc_ctpolar_y = "";
            this.test_before.ta4pc_ctpolar_b = "";
            this.test_before.ta4pc_kio_wirg = "";
            this.test_before.ta4pc_s2_starerh = "";
            this.test_before.ta4pc_ptpolar = "";
            this.test_before.ta4pc_nseaptpas = "";
            if (this.test_before.ta4pc_loc_test_ta0na === "Y") {
                this.test_before.ta4pc_ta0na = true;
            }
            else {
                this.test_before.ta4pc_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4pc_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4pc_ta0naremarks = "";
            this.test_after.ta4pc_contctpt_r = "";
            this.test_after.ta4pc_contctpt_y = "";
            this.test_after.ta4pc_contctpt_b = "";
            this.test_after.ta4pc_ctratio_r = "";
            this.test_after.ta4pc_ctratio_y = "";
            this.test_after.ta4pc_ctratio_b = "";
            this.test_after.ta4pc_ctpolar_r = "";
            this.test_after.ta4pc_ctpolar_y = "";
            this.test_after.ta4pc_ctpolar_b = "";
            this.test_after.ta4pc_kio_wirg = "";
            this.test_after.ta4pc_s2_starerh = "";
            this.test_after.ta4pc_ptpolar = "";
            this.test_after.ta4pc_nseaptpas = "";
            if (this.test_after.ta4pc_loc_test_ta0na === "Y") {
                this.test_after.ta4pc_ta0na = true;
            }
            else {
                this.test_after.ta4pc_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Method to hide/show view test & remarks for INS
     * Created  : Alif (04-03-2019)
     */
    SealMvhvInspectPage.prototype.showViewInsTest = function (value, type) {
        console.log("Test or Remarks for Ins Test..");
        if (type == "before") {
            // set value selected
            this.test_before.ta4reg_loc_test_ta0na = value;
            // Reset value
            this.test_before.ta4reg_amf = "-";
            this.test_before.ta4sum_end = "-";
            this.test_before.ta4sum_start = "-";
            //this.test_before.ta4reg_amc = "-";
            this.test_before.ta4reg_amc = "";
            this.test_before.ta4sum_consumption = "-";
            this.test_before.ta4sum_sted_diff = "-";
            this.test_before.ta4sum_diff = "-";
            if (this.test_before.ta4ins_loc_test_ta0na === "Y") {
                this.test_before.ta4ins_ta0na = true;
            }
            else {
                this.test_before.ta4ins_ta0na = false;
            }
        }
        else {
            // set value selected
            this.test_after.ta4reg_loc_test_ta0na = value;
            // Reset value
            this.test_after.ta4reg_amf = "-";
            this.test_after.ta4sum_end = "-";
            this.test_after.ta4sum_start = "-";
            //this.test_after.ta4reg_amc = "-";
            this.test_after.ta4reg_amc = "";
            this.test_after.ta4sum_consumption = "-";
            this.test_after.ta4sum_sted_diff = "-";
            this.test_after.ta4sum_diff = "-";
            if (this.test_after.ta4ins_loc_test_ta0na === "Y") {
                this.test_after.ta4ins_ta0na = true;
            }
            else {
                this.test_after.ta4ins_ta0na = false;
            }
        }
    };
    /**
     * Reason   : Setting to choose and default view test list selection.
     * Created  : Alif (15-01-2019)
     */
    SealMvhvInspectPage.prototype.selectionTestList = function (value) {
        console.log("selection test list.." + value);
        // Reset
        this.viewMct = false;
        this.viewVrph = false;
        this.viewMa = false;
        this.viewEf = false;
        this.viewCtr = false;
        this.viewHspe = false;
        this.viewHsls = false;
        this.viewHsio = false;
        this.viewAi = false;
        this.viewNafa = false;
        this.viewIns = false;
        this.viewPreComm = false;
        if (value === "mct") {
            this.viewMct = true;
        }
        else if (value === "vrph") {
            this.viewVrph = true;
        }
        else if (value === "ma") {
            this.viewMa = true;
        }
        else if (value === "ef") {
            this.viewEf = true;
        }
        else if (value === "ctr") {
            this.viewCtr = true;
        }
        else if (value === "hspe") {
            this.viewHspe = true;
        }
        else if (value === "hsls") {
            this.viewHsls = true;
        }
        else if (value === "hsio") {
            this.viewHsio = true;
        }
        else if (value === "ai") {
            this.viewAi = true;
        }
        else if (value === "nafa") {
            this.viewNafa = true;
        }
        else if (value === "ins") {
            this.viewIns = true;
        }
        else if (value === "precomm") {
            this.viewPreComm = true;
        }
        else {
            this.viewMct = false;
            this.viewVrph = false;
            this.viewMa = false;
            this.viewEf = false;
            this.viewCtr = false;
            this.viewHspe = false;
            this.viewHsls = false;
            this.viewHsio = false;
            this.viewAi = false;
            this.viewNafa = false;
            this.viewIns = false;
            this.viewPreComm = false;
        }
        // Validate User Input
        this.validateUserInput();
    };
    /**
     * Reason   : Method to validate all input.
     * Created  : Alif (07-02-2019)
     */
    SealMvhvInspectPage.prototype.validateUserInput = function () {
        debugger;
        console.log("validate user input for all field..");
        // Validate MCT Test
        if (((typeof (this.test_before.ta4mct_md) !== "undefined" && this.test_before.ta4mct_md !== null && this.test_before.ta4mct_md !== "" && this.test_before.ta4mct_md !== "-") &&
            (typeof (this.test_before.ta4mct_vt) !== "undefined" && this.test_before.ta4mct_vt !== null && this.test_before.ta4mct_vt !== "" && this.test_before.ta4mct_vt !== "-") &&
            (typeof (this.test_before.ta4mct_pf) !== "undefined" && this.test_before.ta4mct_pf !== null && this.test_before.ta4mct_pf !== "" && this.test_before.ta4mct_pf !== "-")) ||
            (typeof (this.test_before.ta4mct_ta0naremarks) !== "undefined" && this.test_before.ta4mct_ta0naremarks !== null && this.test_before.ta4mct_ta0naremarks !== "" && this.test_before.ta4mct_ta0naremarks !== "-") ||
            ((typeof (this.test_after.ta4mct_md) !== "undefined" && this.test_after.ta4mct_md !== null && this.test_after.ta4mct_md !== "" && this.test_after.ta4mct_md !== "-") &&
                (typeof (this.test_after.ta4mct_vt) !== "undefined" && this.test_after.ta4mct_vt !== null && this.test_after.ta4mct_vt !== "" && this.test_after.ta4mct_vt !== "-") &&
                (typeof (this.test_after.ta4mct_pf) !== "undefined" && this.test_after.ta4mct_pf !== null && this.test_after.ta4mct_pf !== "" && this.test_after.ta4mct_pf !== "-")) ||
            (typeof (this.test_after.ta4mct_ta0naremarks) !== "undefined" && this.test_after.ta4mct_ta0naremarks !== null && this.test_after.ta4mct_ta0naremarks !== "" && this.test_after.ta4mct_ta0naremarks !== "-")) {
            this.validateMct = true;
        }
        else {
            this.validateMct = false;
        }
        // Validate VRH Test
        if (((typeof (this.test_before.ta4vrph_ry) !== "undefined" && this.test_before.ta4vrph_ry !== null && this.test_before.ta4vrph_ry !== "") &&
            (typeof (this.test_before.ta4vrph_yb) !== "undefined" && this.test_before.ta4vrph_yb !== null && this.test_before.ta4vrph_yb !== "") &&
            (typeof (this.test_before.ta4vrph_rb) !== "undefined" && this.test_before.ta4vrph_rb !== null && this.test_before.ta4vrph_rb !== "") &&
            (typeof (this.test_before.ta4vrph_rn) !== "undefined" && this.test_before.ta4vrph_rn !== null && this.test_before.ta4vrph_rn !== "") &&
            (typeof (this.test_before.ta4vrph_yn) !== "undefined" && this.test_before.ta4vrph_yn !== null && this.test_before.ta4vrph_yn !== "") &&
            (typeof (this.test_before.ta4vrph_bn) !== "undefined" && this.test_before.ta4vrph_bn !== null && this.test_before.ta4vrph_bn !== "") &&
            (typeof (this.test_before.ta4vrph_re) !== "undefined" && this.test_before.ta4vrph_re !== null && this.test_before.ta4vrph_re !== "") &&
            (typeof (this.test_before.ta4vrph_ye) !== "undefined" && this.test_before.ta4vrph_ye !== null && this.test_before.ta4vrph_ye !== "") &&
            (typeof (this.test_before.ta4vrph_be) !== "undefined" && this.test_before.ta4vrph_be !== null && this.test_before.ta4vrph_be !== "") &&
            (typeof (this.test_before.ta4vrph_ne) !== "undefined" && this.test_before.ta4vrph_ne !== null && this.test_before.ta4vrph_ne !== "") &&
            (typeof (this.test_before.ta4vrph_ph) !== "undefined" && this.test_before.ta4vrph_ph !== null && this.test_before.ta4vrph_ph !== "")) ||
            (typeof (this.test_before.ta4vrph_ta0naremarks) !== "undefined" && this.test_before.ta4vrph_ta0naremarks !== null && this.test_before.ta4vrph_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4vrph_ry) !== "undefined" && this.test_after.ta4vrph_ry !== null && this.test_after.ta4vrph_ry !== "") &&
                (typeof (this.test_after.ta4vrph_yb) !== "undefined" && this.test_after.ta4vrph_yb !== null && this.test_after.ta4vrph_yb !== "") &&
                (typeof (this.test_after.ta4vrph_rb) !== "undefined" && this.test_after.ta4vrph_rb !== null && this.test_after.ta4vrph_rb !== "") &&
                (typeof (this.test_after.ta4vrph_rn) !== "undefined" && this.test_after.ta4vrph_rn !== null && this.test_after.ta4vrph_rn !== "") &&
                (typeof (this.test_after.ta4vrph_yn) !== "undefined" && this.test_after.ta4vrph_yn !== null && this.test_after.ta4vrph_yn !== "") &&
                (typeof (this.test_after.ta4vrph_bn) !== "undefined" && this.test_after.ta4vrph_bn !== null && this.test_after.ta4vrph_bn !== "") &&
                (typeof (this.test_after.ta4vrph_re) !== "undefined" && this.test_after.ta4vrph_re !== null && this.test_after.ta4vrph_re !== "") &&
                (typeof (this.test_after.ta4vrph_ye) !== "undefined" && this.test_after.ta4vrph_ye !== null && this.test_after.ta4vrph_ye !== "") &&
                (typeof (this.test_after.ta4vrph_be) !== "undefined" && this.test_after.ta4vrph_be !== null && this.test_after.ta4vrph_be !== "") &&
                (typeof (this.test_after.ta4vrph_ne) !== "undefined" && this.test_after.ta4vrph_ne !== null && this.test_after.ta4vrph_ne !== "") &&
                (typeof (this.test_after.ta4vrph_ph) !== "undefined" && this.test_after.ta4vrph_ph !== null && this.test_after.ta4vrph_ph !== "")) ||
            (typeof (this.test_after.ta4vrph_ta0naremarks) !== "undefined" && this.test_after.ta4vrph_ta0naremarks !== null && this.test_after.ta4vrph_ta0naremarks !== "")) {
            this.validateVrph = true;
        }
        else {
            this.validateVrph = false;
        }
        // Validate MA Test
        if (((typeof (this.test_before.ta4ma_test1) !== "undefined" && this.test_before.ta4ma_test1 !== null && this.test_before.ta4ma_test1 !== "") &&
            (typeof (this.test_before.ta4ma_test2) !== "undefined" && this.test_before.ta4ma_test2 !== null && this.test_before.ta4ma_test2 !== "") &&
            (typeof (this.test_before.ta4ma_test3) !== "undefined" && this.test_before.ta4ma_test3 !== null && this.test_before.ta4ma_test3 !== "") &&
            (typeof (this.test_before.ta4ma_avg) !== "undefined" && this.test_before.ta4ma_avg !== null && this.test_before.ta4ma_avg !== "") &&
            (typeof (this.test_before.ta4ma_reg_start) !== "undefined" && this.test_before.ta4ma_reg_start !== null && this.test_before.ta4ma_reg_start !== "") &&
            (typeof (this.test_before.ta4ma_reg_stop) !== "undefined" && this.test_before.ta4ma_reg_stop !== null && this.test_before.ta4ma_reg_stop !== "") &&
            (typeof (this.test_before.ta4ma_reg_usage) !== "undefined" && this.test_before.ta4ma_reg_usage !== null && this.test_before.ta4ma_reg_usage !== "") &&
            (typeof (this.test_before.ta4ma_reg_error) !== "undefined" && this.test_before.ta4ma_reg_error !== null && this.test_before.ta4ma_reg_error !== "") &&
            (typeof (this.test_before.ta4ma_read_start) !== "undefined" && this.test_before.ta4ma_read_start !== null && this.test_before.ta4ma_read_start !== "") &&
            (typeof (this.test_before.ta4ma_read_end) !== "undefined" && this.test_before.ta4ma_read_end !== null && this.test_before.ta4ma_read_end !== "") &&
            (typeof (this.test_before.ta4ma_read_diff) !== "undefined" && this.test_before.ta4ma_read_diff !== null && this.test_before.ta4ma_read_diff !== "") &&
            (typeof (this.test_before.ta4ma_time_start) !== "undefined" && this.test_before.ta4ma_time_start !== null && this.test_before.ta4ma_time_start !== "") &&
            (typeof (this.test_before.ta4ma_time_end) !== "undefined" && this.test_before.ta4ma_time_end !== null && this.test_before.ta4ma_time_end !== "") &&
            (typeof (this.test_before.ta4ma_time_duration) !== "undefined" && this.test_before.ta4ma_time_duration !== null && this.test_before.ta4ma_time_duration !== "") &&
            (typeof (this.test_before.ta4ma_v_avg) !== "undefined" && this.test_before.ta4ma_v_avg !== null && this.test_before.ta4ma_v_avg !== "") &&
            (typeof (this.test_before.ta4ma_i_avg) !== "undefined" && this.test_before.ta4ma_i_avg !== null && this.test_before.ta4ma_i_avg !== "") &&
            (typeof (this.test_before.ta4ma_calc_energy) !== "undefined" && this.test_before.ta4ma_calc_energy !== null && this.test_before.ta4ma_calc_energy !== "") &&
            (typeof (this.test_before.ta4ma_avg) !== "undefined" && this.test_before.ta4ma_avg !== null && this.test_before.ta4ma_avg !== "") &&
            (typeof (this.test_before.ta4ma_diff) !== "undefined" && this.test_before.ta4ma_diff !== null && this.test_before.ta4ma_diff !== "")) ||
            (typeof (this.test_before.ta4ma_ta0naremarks) !== "undefined" && this.test_before.ta4ma_ta0naremarks !== null && this.test_before.ta4ma_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4ma_test1) !== "undefined" && this.test_after.ta4ma_test1 !== null && this.test_after.ta4ma_test1 !== "") &&
                (typeof (this.test_after.ta4ma_test2) !== "undefined" && this.test_after.ta4ma_test2 !== null && this.test_after.ta4ma_test2 !== "") &&
                (typeof (this.test_after.ta4ma_test3) !== "undefined" && this.test_after.ta4ma_test3 !== null && this.test_after.ta4ma_test3 !== "") &&
                (typeof (this.test_after.ta4ma_avg) !== "undefined" && this.test_after.ta4ma_avg !== null && this.test_after.ta4ma_avg !== "") &&
                (typeof (this.test_after.ta4ma_reg_start) !== "undefined" && this.test_after.ta4ma_reg_start !== null && this.test_after.ta4ma_reg_start !== "") &&
                (typeof (this.test_after.ta4ma_reg_stop) !== "undefined" && this.test_after.ta4ma_reg_stop !== null && this.test_after.ta4ma_reg_stop !== "") &&
                (typeof (this.test_after.ta4ma_reg_usage) !== "undefined" && this.test_after.ta4ma_reg_usage !== null && this.test_after.ta4ma_reg_usage !== "") &&
                (typeof (this.test_after.ta4ma_reg_error) !== "undefined" && this.test_after.ta4ma_reg_error !== null && this.test_after.ta4ma_reg_error !== "") &&
                (typeof (this.test_after.ta4ma_read_start) !== "undefined" && this.test_after.ta4ma_read_start !== null && this.test_after.ta4ma_read_start !== "") &&
                (typeof (this.test_after.ta4ma_read_end) !== "undefined" && this.test_after.ta4ma_read_end !== null && this.test_after.ta4ma_read_end !== "") &&
                (typeof (this.test_after.ta4ma_read_diff) !== "undefined" && this.test_after.ta4ma_read_diff !== null && this.test_after.ta4ma_read_diff !== "") &&
                (typeof (this.test_after.ta4ma_time_start) !== "undefined" && this.test_after.ta4ma_time_start !== null && this.test_after.ta4ma_time_start !== "") &&
                (typeof (this.test_after.ta4ma_time_end) !== "undefined" && this.test_after.ta4ma_time_end !== null && this.test_after.ta4ma_time_end !== "") &&
                (typeof (this.test_after.ta4ma_time_duration) !== "undefined" && this.test_after.ta4ma_time_duration !== null && this.test_after.ta4ma_time_duration !== "") &&
                (typeof (this.test_after.ta4ma_v_avg) !== "undefined" && this.test_after.ta4ma_v_avg !== null && this.test_after.ta4ma_v_avg !== "") &&
                (typeof (this.test_after.ta4ma_i_avg) !== "undefined" && this.test_after.ta4ma_i_avg !== null && this.test_after.ta4ma_i_avg !== "") &&
                (typeof (this.test_after.ta4ma_calc_energy) !== "undefined" && this.test_after.ta4ma_calc_energy !== null && this.test_after.ta4ma_calc_energy !== "") &&
                (typeof (this.test_after.ta4ma_avg) !== "undefined" && this.test_after.ta4ma_avg !== null && this.test_after.ta4ma_avg !== "") &&
                (typeof (this.test_after.ta4ma_diff) !== "undefined" && this.test_after.ta4ma_diff !== null && this.test_after.ta4ma_diff !== "")) ||
            (typeof (this.test_after.ta4ma_ta0naremarks) !== "undefined" && this.test_after.ta4ma_ta0naremarks !== null && this.test_after.ta4ma_ta0naremarks !== "")) {
            this.validateMa = true;
        }
        else {
            this.validateMa = false;
        }
        // Validate EF Test
        if (((typeof (this.test_before.ta4ef_led_r) !== "undefined" && this.test_before.ta4ef_led_r !== null && this.test_before.ta4ef_led_r !== "") &&
            (typeof (this.test_before.ta4ef_led_y) !== "undefined" && this.test_before.ta4ef_led_y !== null && this.test_before.ta4ef_led_y !== "") &&
            (typeof (this.test_before.ta4ef_led_b) !== "undefined" && this.test_before.ta4ef_led_b !== null && this.test_before.ta4ef_led_b !== "") &&
            (typeof (this.test_before.ta4ef_led_ind_r) !== "undefined" && this.test_before.ta4ef_led_ind_r !== null && this.test_before.ta4ef_led_ind_r !== "") &&
            (typeof (this.test_before.ta4ef_led_ind_y) !== "undefined" && this.test_before.ta4ef_led_ind_y !== null && this.test_before.ta4ef_led_ind_y !== "") &&
            (typeof (this.test_before.ta4ef_led_ind_b) !== "undefined" && this.test_before.ta4ef_led_ind_b !== null && this.test_before.ta4ef_led_ind_b !== "")) ||
            (typeof (this.test_before.ta4ef_ta0naremarks) !== "undefined" && this.test_before.ta4ef_ta0naremarks !== null && this.test_before.ta4ef_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4ef_led_r) !== "undefined" && this.test_after.ta4ef_led_r !== null && this.test_after.ta4ef_led_r !== "") &&
                (typeof (this.test_after.ta4ef_led_y) !== "undefined" && this.test_after.ta4ef_led_y !== null && this.test_after.ta4ef_led_y !== "") &&
                (typeof (this.test_after.ta4ef_led_b) !== "undefined" && this.test_after.ta4ef_led_b !== null && this.test_after.ta4ef_led_b !== "") &&
                (typeof (this.test_after.ta4ef_led_ind_r) !== "undefined" && this.test_after.ta4ef_led_ind_r !== null && this.test_after.ta4ef_led_ind_r !== "") &&
                (typeof (this.test_after.ta4ef_led_ind_y) !== "undefined" && this.test_after.ta4ef_led_ind_y !== null && this.test_after.ta4ef_led_ind_y !== "") &&
                (typeof (this.test_after.ta4ef_led_ind_b) !== "undefined" && this.test_after.ta4ef_led_ind_b !== null && this.test_after.ta4ef_led_ind_b !== "")) ||
            (typeof (this.test_after.ta4ef_ta0naremarks) !== "undefined" && this.test_after.ta4ef_ta0naremarks !== null && this.test_after.ta4ef_ta0naremarks !== "")) {
            this.validateEf = true;
        }
        else {
            this.validateEf = false;
        }
        // Validate CTR Test
        if (((typeof (this.test_before.ta4ctr_ip_r) !== "undefined" && this.test_before.ta4ctr_ip_r !== null && this.test_before.ta4ctr_ip_r !== "") &&
            (typeof (this.test_before.ta4ctr_is_r) !== "undefined" && this.test_before.ta4ctr_is_r !== null && this.test_before.ta4ctr_is_r !== "") &&
            (typeof (this.test_before.ta4ctr_ccr_r) !== "undefined" && this.test_before.ta4ctr_ccr_r !== null && this.test_before.ta4ctr_ccr_r !== "") &&
            (typeof (this.test_before.ta4ctr_cl_r) !== "undefined" && this.test_before.ta4ctr_cl_r !== null && this.test_before.ta4ctr_cl_r !== "") &&
            (typeof (this.test_before.ta4ctr_ip_y) !== "undefined" && this.test_before.ta4ctr_ip_y !== null && this.test_before.ta4ctr_ip_y !== "") &&
            (typeof (this.test_before.ta4ctr_is_y) !== "undefined" && this.test_before.ta4ctr_is_y !== null && this.test_before.ta4ctr_is_y !== "") &&
            (typeof (this.test_before.ta4ctr_ccr_y) !== "undefined" && this.test_before.ta4ctr_ccr_y !== null && this.test_before.ta4ctr_ccr_y !== "") &&
            (typeof (this.test_before.ta4ctr_cl_y) !== "undefined" && this.test_before.ta4ctr_cl_y !== null && this.test_before.ta4ctr_cl_y !== "") &&
            (typeof (this.test_before.ta4ctr_ip_b) !== "undefined" && this.test_before.ta4ctr_ip_b !== null && this.test_before.ta4ctr_ip_b !== "") &&
            (typeof (this.test_before.ta4ctr_is_b) !== "undefined" && this.test_before.ta4ctr_is_b !== null && this.test_before.ta4ctr_is_b !== "") &&
            (typeof (this.test_before.ta4ctr_ccr_b) !== "undefined" && this.test_before.ta4ctr_ccr_b !== null && this.test_before.ta4ctr_ccr_b !== "") &&
            (typeof (this.test_before.ta4ctr_cl_b) !== "undefined" && this.test_before.ta4ctr_cl_b !== null && this.test_before.ta4ctr_cl_b !== "") &&
            (typeof (this.test_before.ta4ctr_avg_ccr) !== "undefined" && this.test_before.ta4ctr_avg_ccr !== null && this.test_before.ta4ctr_avg_ccr !== "") &&
            (typeof (this.test_before.ta4ctr_avg_cl) !== "undefined" && this.test_before.ta4ctr_avg_cl !== null && this.test_before.ta4ctr_avg_cl !== "")) ||
            (typeof (this.test_before.ta4ctr_ta0naremarks) !== "undefined" && this.test_before.ta4ctr_ta0naremarks !== null && this.test_before.ta4ctr_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4ctr_ip_r) !== "undefined" && this.test_after.ta4ctr_ip_r !== null && this.test_after.ta4ctr_ip_r !== "") &&
                (typeof (this.test_after.ta4ctr_is_r) !== "undefined" && this.test_after.ta4ctr_is_r !== null && this.test_after.ta4ctr_is_r !== "") &&
                (typeof (this.test_after.ta4ctr_ccr_r) !== "undefined" && this.test_after.ta4ctr_ccr_r !== null && this.test_after.ta4ctr_ccr_r !== "") &&
                (typeof (this.test_after.ta4ctr_cl_r) !== "undefined" && this.test_after.ta4ctr_cl_r !== null && this.test_after.ta4ctr_cl_r !== "") &&
                (typeof (this.test_after.ta4ctr_ip_y) !== "undefined" && this.test_after.ta4ctr_ip_y !== null && this.test_after.ta4ctr_ip_y !== "") &&
                (typeof (this.test_after.ta4ctr_is_y) !== "undefined" && this.test_after.ta4ctr_is_y !== null && this.test_after.ta4ctr_is_y !== "") &&
                (typeof (this.test_after.ta4ctr_ccr_y) !== "undefined" && this.test_after.ta4ctr_ccr_y !== null && this.test_after.ta4ctr_ccr_y !== "") &&
                (typeof (this.test_after.ta4ctr_cl_y) !== "undefined" && this.test_after.ta4ctr_cl_y !== null && this.test_after.ta4ctr_cl_y !== "") &&
                (typeof (this.test_after.ta4ctr_ip_b) !== "undefined" && this.test_after.ta4ctr_ip_b !== null && this.test_after.ta4ctr_ip_b !== "") &&
                (typeof (this.test_after.ta4ctr_is_b) !== "undefined" && this.test_after.ta4ctr_is_b !== null && this.test_after.ta4ctr_is_b !== "") &&
                (typeof (this.test_after.ta4ctr_ccr_b) !== "undefined" && this.test_after.ta4ctr_ccr_b !== null && this.test_after.ta4ctr_ccr_b !== "") &&
                (typeof (this.test_after.ta4ctr_cl_b) !== "undefined" && this.test_after.ta4ctr_cl_b !== null && this.test_after.ta4ctr_cl_b !== "") &&
                (typeof (this.test_after.ta4ctr_avg_ccr) !== "undefined" && this.test_after.ta4ctr_avg_ccr !== null && this.test_after.ta4ctr_avg_ccr !== "") &&
                (typeof (this.test_after.ta4ctr_avg_cl) !== "undefined" && this.test_after.ta4ctr_avg_cl !== null && this.test_after.ta4ctr_avg_cl !== "")) ||
            (typeof (this.test_after.ta4ctr_ta0naremarks) !== "undefined" && this.test_after.ta4ctr_ta0naremarks !== null && this.test_after.ta4ctr_ta0naremarks !== "")) {
            this.validateCtr = true;
        }
        else {
            this.validateCtr = false;
        }
        // Validate HSPE Test
        if (((typeof (this.test_before.ta4hspe_mt_ratio) !== "undefined" && this.test_before.ta4hspe_mt_ratio !== null && this.test_before.ta4hspe_mt_ratio !== "") &&
            (typeof (this.test_before.ta4hspe_ci_ratio) !== "undefined" && this.test_before.ta4hspe_ci_ratio !== null && this.test_before.ta4hspe_ci_ratio !== "") &&
            (typeof (this.test_before.ta4hspe_ov_ratio) !== "undefined" && this.test_before.ta4hspe_ov_ratio !== null && this.test_before.ta4hspe_ov_ratio !== "") &&
            (typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" && this.test_before.ta4hspe_is_mt_r !== null && this.test_before.ta4hspe_is_mt_r !== "") &&
            (typeof (this.test_before.ta4hspe_is_ci_r) !== "undefined" && this.test_before.ta4hspe_is_ci_r !== null && this.test_before.ta4hspe_is_ci_r !== "") &&
            (typeof (this.test_before.ta4hspe_is_ov_r) !== "undefined" && this.test_before.ta4hspe_is_ov_r !== null && this.test_before.ta4hspe_is_ov_r !== "") &&
            (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" && this.test_before.ta4hspe_ip_mt_r !== null && this.test_before.ta4hspe_ip_mt_r !== "") &&
            (typeof (this.test_before.ta4hspe_ip_ci_r) !== "undefined" && this.test_before.ta4hspe_ip_ci_r !== null && this.test_before.ta4hspe_ip_ci_r !== "") &&
            (typeof (this.test_before.ta4hspe_ip_ov_r) !== "undefined" && this.test_before.ta4hspe_ip_ov_r !== null && this.test_before.ta4hspe_ip_ov_r !== "") &&
            (typeof (this.test_before.ta4hspe_diff_ci_r) !== "undefined" && this.test_before.ta4hspe_diff_ci_r !== null && this.test_before.ta4hspe_diff_ci_r !== "") &&
            (typeof (this.test_before.ta4hspe_diff_ov_r) !== "undefined" && this.test_before.ta4hspe_diff_ov_r !== null && this.test_before.ta4hspe_diff_ov_r !== "") &&
            (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" && this.test_before.ta4hspe_is_mt_y !== null && this.test_before.ta4hspe_is_mt_y !== "") &&
            (typeof (this.test_before.ta4hspe_is_ci_y) !== "undefined" && this.test_before.ta4hspe_is_ci_y !== null && this.test_before.ta4hspe_is_ci_y !== "") &&
            (typeof (this.test_before.ta4hspe_is_ov_y) !== "undefined" && this.test_before.ta4hspe_is_ov_y !== null && this.test_before.ta4hspe_is_ov_y !== "") &&
            (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" && this.test_before.ta4hspe_ip_mt_y !== null && this.test_before.ta4hspe_ip_mt_y !== "") &&
            (typeof (this.test_before.ta4hspe_ip_ci_y) !== "undefined" && this.test_before.ta4hspe_ip_ci_y !== null && this.test_before.ta4hspe_ip_ci_y !== "") &&
            (typeof (this.test_before.ta4hspe_ip_ov_y) !== "undefined" && this.test_before.ta4hspe_ip_ov_y !== null && this.test_before.ta4hspe_ip_ov_y !== "") &&
            (typeof (this.test_before.ta4hspe_diff_ci_y) !== "undefined" && this.test_before.ta4hspe_diff_ci_y !== null && this.test_before.ta4hspe_diff_ci_y !== "") &&
            (typeof (this.test_before.ta4hspe_diff_ov_y) !== "undefined" && this.test_before.ta4hspe_diff_ov_y !== null && this.test_before.ta4hspe_diff_ov_y !== "") &&
            (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" && this.test_before.ta4hspe_is_mt_b !== null && this.test_before.ta4hspe_is_mt_b !== "") &&
            (typeof (this.test_before.ta4hspe_is_ci_b) !== "undefined" && this.test_before.ta4hspe_is_ci_b !== null && this.test_before.ta4hspe_is_ci_b !== "") &&
            (typeof (this.test_before.ta4hspe_is_ov_b) !== "undefined" && this.test_before.ta4hspe_is_ov_b !== null && this.test_before.ta4hspe_is_ov_b !== "") &&
            (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" && this.test_before.ta4hspe_ip_mt_b !== null && this.test_before.ta4hspe_ip_mt_b !== "") &&
            (typeof (this.test_before.ta4hspe_ip_ci_b) !== "undefined" && this.test_before.ta4hspe_ip_ci_b !== null && this.test_before.ta4hspe_ip_ci_b !== "") &&
            (typeof (this.test_before.ta4hspe_ip_ov_b) !== "undefined" && this.test_before.ta4hspe_ip_ov_b !== null && this.test_before.ta4hspe_ip_ov_b !== "") &&
            (typeof (this.test_before.ta4hspe_diff_ci_b) !== "undefined" && this.test_before.ta4hspe_diff_ci_b !== null && this.test_before.ta4hspe_diff_ci_b !== "") &&
            (typeof (this.test_before.ta4hspe_diff_ov_b) !== "undefined" && this.test_before.ta4hspe_diff_ov_b !== null && this.test_before.ta4hspe_diff_ov_b !== "")) || (typeof (this.test_before.ta4hspe_ta0naremarks) !== "undefined" && this.test_before.ta4hspe_ta0naremarks !== null && this.test_before.ta4hspe_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4hspe_mt_ratio) !== "undefined" && this.test_after.ta4hspe_mt_ratio !== null && this.test_after.ta4hspe_mt_ratio !== "") &&
                (typeof (this.test_after.ta4hspe_ci_ratio) !== "undefined" && this.test_after.ta4hspe_ci_ratio !== null && this.test_after.ta4hspe_ci_ratio !== "") &&
                (typeof (this.test_after.ta4hspe_ov_ratio) !== "undefined" && this.test_after.ta4hspe_ov_ratio !== null && this.test_after.ta4hspe_ov_ratio !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" && this.test_after.ta4hspe_is_mt_r !== null && this.test_after.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_ci_r) !== "undefined" && this.test_after.ta4hspe_is_ci_r !== null && this.test_after.ta4hspe_is_ci_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_ov_r) !== "undefined" && this.test_after.ta4hspe_is_ov_r !== null && this.test_after.ta4hspe_is_ov_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" && this.test_after.ta4hspe_ip_mt_r !== null && this.test_after.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ci_r) !== "undefined" && this.test_after.ta4hspe_ip_ci_r !== null && this.test_after.ta4hspe_ip_ci_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ov_r) !== "undefined" && this.test_after.ta4hspe_ip_ov_r !== null && this.test_after.ta4hspe_ip_ov_r !== "") &&
                (typeof (this.test_after.ta4hspe_diff_ci_r) !== "undefined" && this.test_after.ta4hspe_diff_ci_r !== null && this.test_after.ta4hspe_diff_ci_r !== "") &&
                (typeof (this.test_after.ta4hspe_diff_ov_r) !== "undefined" && this.test_after.ta4hspe_diff_ov_r !== null && this.test_after.ta4hspe_diff_ov_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" && this.test_after.ta4hspe_is_mt_y !== null && this.test_after.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_ci_y) !== "undefined" && this.test_after.ta4hspe_is_ci_y !== null && this.test_after.ta4hspe_is_ci_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_ov_y) !== "undefined" && this.test_after.ta4hspe_is_ov_y !== null && this.test_after.ta4hspe_is_ov_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" && this.test_after.ta4hspe_ip_mt_y !== null && this.test_after.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ci_y) !== "undefined" && this.test_after.ta4hspe_ip_ci_y !== null && this.test_after.ta4hspe_ip_ci_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ov_y) !== "undefined" && this.test_after.ta4hspe_ip_ov_y !== null && this.test_after.ta4hspe_ip_ov_y !== "") &&
                (typeof (this.test_after.ta4hspe_diff_ci_y) !== "undefined" && this.test_after.ta4hspe_diff_ci_y !== null && this.test_after.ta4hspe_diff_ci_y !== "") &&
                (typeof (this.test_after.ta4hspe_diff_ov_y) !== "undefined" && this.test_after.ta4hspe_diff_ov_y !== null && this.test_after.ta4hspe_diff_ov_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" && this.test_after.ta4hspe_is_mt_b !== null && this.test_after.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_is_ci_b) !== "undefined" && this.test_after.ta4hspe_is_ci_b !== null && this.test_after.ta4hspe_is_ci_b !== "") &&
                (typeof (this.test_after.ta4hspe_is_ov_b) !== "undefined" && this.test_after.ta4hspe_is_ov_b !== null && this.test_after.ta4hspe_is_ov_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" && this.test_after.ta4hspe_ip_mt_b !== null && this.test_after.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ci_b) !== "undefined" && this.test_after.ta4hspe_ip_ci_b !== null && this.test_after.ta4hspe_ip_ci_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ov_b) !== "undefined" && this.test_after.ta4hspe_ip_ov_b !== null && this.test_after.ta4hspe_ip_ov_b !== "") &&
                (typeof (this.test_after.ta4hspe_diff_ci_b) !== "undefined" && this.test_after.ta4hspe_diff_ci_b !== null && this.test_after.ta4hspe_diff_ci_b !== "") &&
                (typeof (this.test_after.ta4hspe_diff_ov_b) !== "undefined" && this.test_after.ta4hspe_diff_ov_b !== null && this.test_after.ta4hspe_diff_ov_b !== "")) || (typeof (this.test_after.ta4hspe_ta0naremarks) !== "undefined" && this.test_after.ta4hspe_ta0naremarks !== null && this.test_after.ta4hspe_ta0naremarks !== "")) {
            this.validateHspe = true;
        }
        else {
            this.validateHspe = false;
        }
        // Validate HSLS Test
        // Edited: Alif (27.06.2019) - Niza asking to remove validate input field for Test 13 because it is not required, optional.
        if (((typeof (this.test_before.ta4hsls_v_lv) !== "undefined" && this.test_before.ta4hsls_v_lv !== null && this.test_before.ta4hsls_v_lv !== "") ||
            (typeof (this.test_before.ta4hsls_v_hv) !== "undefined" && this.test_before.ta4hsls_v_hv !== null && this.test_before.ta4hsls_v_hv !== "") ||
            (typeof (this.test_before.ta4hsls_v_f) !== "undefined" && this.test_before.ta4hsls_v_f !== null && this.test_before.ta4hsls_v_f !== "") ||
            (typeof (this.test_before.ta4hsls_mpa_r) !== "undefined" && this.test_before.ta4hsls_mpa_r !== null && this.test_before.ta4hsls_mpa_r !== "") ||
            (typeof (this.test_before.ta4hsls_test1_r) !== "undefined" && this.test_before.ta4hsls_test1_r !== null && this.test_before.ta4hsls_test1_r !== "") ||
            (typeof (this.test_before.ta4hsls_test2_r) !== "undefined" && this.test_before.ta4hsls_test2_r !== null && this.test_before.ta4hsls_test2_r !== "") ||
            (typeof (this.test_before.ta4hsls_test3_r) !== "undefined" && this.test_before.ta4hsls_test3_r !== null && this.test_before.ta4hsls_test3_r !== "") ||
            (typeof (this.test_before.ta4hsls_test4_r) !== "undefined" && this.test_before.ta4hsls_test4_r !== null && this.test_before.ta4hsls_test4_r !== "") ||
            (typeof (this.test_before.ta4hsls_test5_r) !== "undefined" && this.test_before.ta4hsls_test5_r !== null && this.test_before.ta4hsls_test5_r !== "") ||
            (typeof (this.test_before.ta4hsls_test6_r) !== "undefined" && this.test_before.ta4hsls_test6_r !== null && this.test_before.ta4hsls_test6_r !== "") ||
            (typeof (this.test_before.ta4hsls_la_r) !== "undefined" && this.test_before.ta4hsls_la_r !== null && this.test_before.ta4hsls_la_r !== "") ||
            (typeof (this.test_before.ta4hsls_ha_r) !== "undefined" && this.test_before.ta4hsls_ha_r !== null && this.test_before.ta4hsls_ha_r !== "") ||
            (typeof (this.test_before.ta4hsls_dma_r) !== "undefined" && this.test_before.ta4hsls_dma_r !== null && this.test_before.ta4hsls_dma_r !== "") ||
            (typeof (this.test_before.ta4hsls_mpa_y) !== "undefined" && this.test_before.ta4hsls_mpa_y !== null && this.test_before.ta4hsls_mpa_y !== "") ||
            (typeof (this.test_before.ta4hsls_test1_y) !== "undefined" && this.test_before.ta4hsls_test1_y !== null && this.test_before.ta4hsls_test1_y !== "") ||
            (typeof (this.test_before.ta4hsls_test2_y) !== "undefined" && this.test_before.ta4hsls_test2_y !== null && this.test_before.ta4hsls_test2_y !== "") ||
            (typeof (this.test_before.ta4hsls_test3_y) !== "undefined" && this.test_before.ta4hsls_test3_y !== null && this.test_before.ta4hsls_test3_y !== "") ||
            (typeof (this.test_before.ta4hsls_test4_y) !== "undefined" && this.test_before.ta4hsls_test4_y !== null && this.test_before.ta4hsls_test4_y !== "") ||
            (typeof (this.test_before.ta4hsls_test5_y) !== "undefined" && this.test_before.ta4hsls_test5_y !== null && this.test_before.ta4hsls_test5_y !== "") ||
            (typeof (this.test_before.ta4hsls_test6_y) !== "undefined" && this.test_before.ta4hsls_test6_y !== null && this.test_before.ta4hsls_test6_y !== "") ||
            (typeof (this.test_before.ta4hsls_la_y) !== "undefined" && this.test_before.ta4hsls_la_y !== null && this.test_before.ta4hsls_la_y !== "") ||
            (typeof (this.test_before.ta4hsls_ha_y) !== "undefined" && this.test_before.ta4hsls_ha_y !== null && this.test_before.ta4hsls_ha_y !== "") ||
            (typeof (this.test_before.ta4hsls_dma_y) !== "undefined" && this.test_before.ta4hsls_dma_y !== null && this.test_before.ta4hsls_dma_y !== "") ||
            (typeof (this.test_before.ta4hsls_mpa_b) !== "undefined" && this.test_before.ta4hsls_mpa_b !== null && this.test_before.ta4hsls_mpa_b !== "") ||
            (typeof (this.test_before.ta4hsls_test1_b) !== "undefined" && this.test_before.ta4hsls_test1_b !== null && this.test_before.ta4hsls_test1_b !== "") ||
            (typeof (this.test_before.ta4hsls_test2_b) !== "undefined" && this.test_before.ta4hsls_test2_b !== null && this.test_before.ta4hsls_test2_b !== "") ||
            (typeof (this.test_before.ta4hsls_test3_b) !== "undefined" && this.test_before.ta4hsls_test3_b !== null && this.test_before.ta4hsls_test3_b !== "") ||
            (typeof (this.test_before.ta4hsls_test4_b) !== "undefined" && this.test_before.ta4hsls_test4_b !== null && this.test_before.ta4hsls_test4_b !== "") ||
            (typeof (this.test_before.ta4hsls_test5_b) !== "undefined" && this.test_before.ta4hsls_test5_b !== null && this.test_before.ta4hsls_test5_b !== "") ||
            (typeof (this.test_before.ta4hsls_test6_b) !== "undefined" && this.test_before.ta4hsls_test6_b !== null && this.test_before.ta4hsls_test6_b !== "") ||
            (typeof (this.test_before.ta4hsls_la_b) !== "undefined" && this.test_before.ta4hsls_la_b !== null && this.test_before.ta4hsls_la_b !== "") ||
            (typeof (this.test_before.ta4hsls_ha_b) !== "undefined" && this.test_before.ta4hsls_ha_b !== null && this.test_before.ta4hsls_ha_b !== "") ||
            (typeof (this.test_before.ta4hsls_dma_b) !== "undefined" && this.test_before.ta4hsls_dma_b !== null && this.test_before.ta4hsls_dma_b !== "")) || (typeof (this.test_before.ta4hsls_ta0naremarks) !== "undefined" && this.test_before.ta4hsls_ta0naremarks !== null && this.test_before.ta4hsls_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4hsls_v_lv) !== "undefined" && this.test_after.ta4hsls_v_lv !== null && this.test_after.ta4hsls_v_lv !== "") ||
                (typeof (this.test_after.ta4hsls_v_hv) !== "undefined" && this.test_after.ta4hsls_v_hv !== null && this.test_after.ta4hsls_v_hv !== "") ||
                (typeof (this.test_after.ta4hsls_v_f) !== "undefined" && this.test_after.ta4hsls_v_f !== null && this.test_after.ta4hsls_v_f !== "") ||
                (typeof (this.test_after.ta4hsls_mpa_r) !== "undefined" && this.test_after.ta4hsls_mpa_r !== null && this.test_after.ta4hsls_mpa_r !== "") ||
                (typeof (this.test_after.ta4hsls_test1_r) !== "undefined" && this.test_after.ta4hsls_test1_r !== null && this.test_after.ta4hsls_test1_r !== "") ||
                (typeof (this.test_after.ta4hsls_test2_r) !== "undefined" && this.test_after.ta4hsls_test2_r !== null && this.test_after.ta4hsls_test2_r !== "") ||
                (typeof (this.test_after.ta4hsls_test3_r) !== "undefined" && this.test_after.ta4hsls_test3_r !== null && this.test_after.ta4hsls_test3_r !== "") ||
                (typeof (this.test_after.ta4hsls_test4_r) !== "undefined" && this.test_after.ta4hsls_test4_r !== null && this.test_after.ta4hsls_test4_r !== "") ||
                (typeof (this.test_after.ta4hsls_test5_r) !== "undefined" && this.test_after.ta4hsls_test5_r !== null && this.test_after.ta4hsls_test5_r !== "") ||
                (typeof (this.test_after.ta4hsls_test6_r) !== "undefined" && this.test_after.ta4hsls_test6_r !== null && this.test_after.ta4hsls_test6_r !== "") ||
                (typeof (this.test_after.ta4hsls_la_r) !== "undefined" && this.test_after.ta4hsls_la_r !== null && this.test_after.ta4hsls_la_r !== "") ||
                (typeof (this.test_after.ta4hsls_ha_r) !== "undefined" && this.test_after.ta4hsls_ha_r !== null && this.test_after.ta4hsls_ha_r !== "") ||
                (typeof (this.test_after.ta4hsls_dma_r) !== "undefined" && this.test_after.ta4hsls_dma_r !== null && this.test_after.ta4hsls_dma_r !== "") ||
                (typeof (this.test_after.ta4hsls_mpa_y) !== "undefined" && this.test_after.ta4hsls_mpa_y !== null && this.test_after.ta4hsls_mpa_y !== "") ||
                (typeof (this.test_after.ta4hsls_test1_y) !== "undefined" && this.test_after.ta4hsls_test1_y !== null && this.test_after.ta4hsls_test1_y !== "") ||
                (typeof (this.test_after.ta4hsls_test2_y) !== "undefined" && this.test_after.ta4hsls_test2_y !== null && this.test_after.ta4hsls_test2_y !== "") ||
                (typeof (this.test_after.ta4hsls_test3_y) !== "undefined" && this.test_after.ta4hsls_test3_y !== null && this.test_after.ta4hsls_test3_y !== "") ||
                (typeof (this.test_after.ta4hsls_test4_y) !== "undefined" && this.test_after.ta4hsls_test4_y !== null && this.test_after.ta4hsls_test4_y !== "") ||
                (typeof (this.test_after.ta4hsls_test5_y) !== "undefined" && this.test_after.ta4hsls_test5_y !== null && this.test_after.ta4hsls_test5_y !== "") ||
                (typeof (this.test_after.ta4hsls_test6_y) !== "undefined" && this.test_after.ta4hsls_test6_y !== null && this.test_after.ta4hsls_test6_y !== "") ||
                (typeof (this.test_after.ta4hsls_la_y) !== "undefined" && this.test_after.ta4hsls_la_y !== null && this.test_after.ta4hsls_la_y !== "") ||
                (typeof (this.test_after.ta4hsls_ha_y) !== "undefined" && this.test_after.ta4hsls_ha_y !== null && this.test_after.ta4hsls_ha_y !== "") ||
                (typeof (this.test_after.ta4hsls_dma_y) !== "undefined" && this.test_after.ta4hsls_dma_y !== null && this.test_after.ta4hsls_dma_y !== "") ||
                (typeof (this.test_after.ta4hsls_mpa_b) !== "undefined" && this.test_after.ta4hsls_mpa_b !== null && this.test_after.ta4hsls_mpa_b !== "") ||
                (typeof (this.test_after.ta4hsls_test1_b) !== "undefined" && this.test_after.ta4hsls_test1_b !== null && this.test_after.ta4hsls_test1_b !== "") ||
                (typeof (this.test_after.ta4hsls_test2_b) !== "undefined" && this.test_after.ta4hsls_test2_b !== null && this.test_after.ta4hsls_test2_b !== "") ||
                (typeof (this.test_after.ta4hsls_test3_b) !== "undefined" && this.test_after.ta4hsls_test3_b !== null && this.test_after.ta4hsls_test3_b !== "") ||
                (typeof (this.test_after.ta4hsls_test4_b) !== "undefined" && this.test_after.ta4hsls_test4_b !== null && this.test_after.ta4hsls_test4_b !== "") ||
                (typeof (this.test_after.ta4hsls_test5_b) !== "undefined" && this.test_after.ta4hsls_test5_b !== null && this.test_after.ta4hsls_test5_b !== "") ||
                (typeof (this.test_after.ta4hsls_test6_b) !== "undefined" && this.test_after.ta4hsls_test6_b !== null && this.test_after.ta4hsls_test6_b !== "") ||
                (typeof (this.test_after.ta4hsls_la_b) !== "undefined" && this.test_after.ta4hsls_la_b !== null && this.test_after.ta4hsls_la_b !== "") ||
                (typeof (this.test_after.ta4hsls_ha_b) !== "undefined" && this.test_after.ta4hsls_ha_b !== null && this.test_after.ta4hsls_ha_b !== "") ||
                (typeof (this.test_after.ta4hsls_dma_b) !== "undefined" && this.test_after.ta4hsls_dma_b !== null && this.test_after.ta4hsls_dma_b !== "")) || (typeof (this.test_after.ta4hsls_ta0naremarks) !== "undefined" && this.test_after.ta4hsls_ta0naremarks !== null && this.test_after.ta4hsls_ta0naremarks !== "")) {
            this.validateHsls = true;
        }
        else {
            this.validateHsls = false;
        }
        // Validate HSIO Test
        if (((typeof (this.test_before.ta4hsio_ct_iha_0) !== "undefined" && this.test_before.ta4hsio_ct_iha_0 !== null && this.test_before.ta4hsio_ct_iha_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out1_0) !== "undefined" && this.test_before.ta4hsio_ct_out1_0 !== null && this.test_before.ta4hsio_ct_out1_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out2_0) !== "undefined" && this.test_before.ta4hsio_ct_out2_0 !== null && this.test_before.ta4hsio_ct_out2_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out3_0) !== "undefined" && this.test_before.ta4hsio_ct_out3_0 !== null && this.test_before.ta4hsio_ct_out3_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out4_0) !== "undefined" && this.test_before.ta4hsio_ct_out4_0 !== null && this.test_before.ta4hsio_ct_out4_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out5_0) !== "undefined" && this.test_before.ta4hsio_ct_out5_0 !== null && this.test_before.ta4hsio_ct_out5_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out6_0) !== "undefined" && this.test_before.ta4hsio_ct_out6_0 !== null && this.test_before.ta4hsio_ct_out6_0 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_iha_1) !== "undefined" && this.test_before.ta4hsio_ct_iha_1 !== null && this.test_before.ta4hsio_ct_iha_1 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out1_1) !== "undefined" && this.test_before.ta4hsio_ct_out1_1 !== null && this.test_before.ta4hsio_ct_out1_1 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out2_1) !== "undefined" && this.test_before.ta4hsio_ct_out2_1 !== null && this.test_before.ta4hsio_ct_out2_1 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out3_1) !== "undefined" && this.test_before.ta4hsio_ct_out3_1 !== null && this.test_before.ta4hsio_ct_out3_1 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out4_1) !== "undefined" && this.test_before.ta4hsio_ct_out4_1 !== null && this.test_before.ta4hsio_ct_out4_1 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out5_1) !== "undefined" && this.test_before.ta4hsio_ct_out5_1 !== null && this.test_before.ta4hsio_ct_out5_1 !== "") &&
            (typeof (this.test_before.ta4hsio_ct_out6_1) !== "undefined" && this.test_before.ta4hsio_ct_out6_1 !== null && this.test_before.ta4hsio_ct_out6_1 !== "") &&
            (typeof (this.test_before.ta4hsio_is_iha_r) !== "undefined" && this.test_before.ta4hsio_is_iha_r !== null && this.test_before.ta4hsio_is_iha_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_out1_r) !== "undefined" && this.test_before.ta4hsio_is_out1_r !== null && this.test_before.ta4hsio_is_out1_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_out2_r) !== "undefined" && this.test_before.ta4hsio_is_out2_r !== null && this.test_before.ta4hsio_is_out2_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_out3_r) !== "undefined" && this.test_before.ta4hsio_is_out3_r !== null && this.test_before.ta4hsio_is_out3_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_out4_r) !== "undefined" && this.test_before.ta4hsio_is_out4_r !== null && this.test_before.ta4hsio_is_out4_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_out5_r) !== "undefined" && this.test_before.ta4hsio_is_out5_r !== null && this.test_before.ta4hsio_is_out5_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_out6_r) !== "undefined" && this.test_before.ta4hsio_is_out6_r !== null && this.test_before.ta4hsio_is_out6_r !== "") &&
            (typeof (this.test_before.ta4hsio_is_iha_y) !== "undefined" && this.test_before.ta4hsio_is_iha_y !== null && this.test_before.ta4hsio_is_iha_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_out1_y) !== "undefined" && this.test_before.ta4hsio_is_out1_y !== null && this.test_before.ta4hsio_is_out1_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_out2_y) !== "undefined" && this.test_before.ta4hsio_is_out2_y !== null && this.test_before.ta4hsio_is_out2_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_out3_y) !== "undefined" && this.test_before.ta4hsio_is_out3_y !== null && this.test_before.ta4hsio_is_out3_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_out4_y) !== "undefined" && this.test_before.ta4hsio_is_out4_y !== null && this.test_before.ta4hsio_is_out4_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_out5_y) !== "undefined" && this.test_before.ta4hsio_is_out5_y !== null && this.test_before.ta4hsio_is_out5_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_out6_y) !== "undefined" && this.test_before.ta4hsio_is_out6_y !== null && this.test_before.ta4hsio_is_out6_y !== "") &&
            (typeof (this.test_before.ta4hsio_is_iha_b) !== "undefined" && this.test_before.ta4hsio_is_iha_b !== null && this.test_before.ta4hsio_is_iha_b !== "") &&
            (typeof (this.test_before.ta4hsio_is_out1_b) !== "undefined" && this.test_before.ta4hsio_is_out1_b !== null && this.test_before.ta4hsio_is_out1_b !== "") &&
            (typeof (this.test_before.ta4hsio_is_out2_b) !== "undefined" && this.test_before.ta4hsio_is_out2_b !== null && this.test_before.ta4hsio_is_out2_b !== "") &&
            (typeof (this.test_before.ta4hsio_is_out3_b) !== "undefined" && this.test_before.ta4hsio_is_out3_b !== null && this.test_before.ta4hsio_is_out3_b !== "") &&
            (typeof (this.test_before.ta4hsio_is_out4_b) !== "undefined" && this.test_before.ta4hsio_is_out4_b !== null && this.test_before.ta4hsio_is_out4_b !== "") &&
            (typeof (this.test_before.ta4hsio_is_out5_b) !== "undefined" && this.test_before.ta4hsio_is_out5_b !== null && this.test_before.ta4hsio_is_out5_b !== "") &&
            (typeof (this.test_before.ta4hsio_is_out6_b) !== "undefined" && this.test_before.ta4hsio_is_out6_b !== null && this.test_before.ta4hsio_is_out6_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_iha_r) !== "undefined" && this.test_before.ta4hsio_ip_iha_r !== null && this.test_before.ta4hsio_ip_iha_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out1_r) !== "undefined" && this.test_before.ta4hsio_ip_out1_r !== null && this.test_before.ta4hsio_ip_out1_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out2_r) !== "undefined" && this.test_before.ta4hsio_ip_out2_r !== null && this.test_before.ta4hsio_ip_out2_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out3_r) !== "undefined" && this.test_before.ta4hsio_ip_out3_r !== null && this.test_before.ta4hsio_ip_out3_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out4_r) !== "undefined" && this.test_before.ta4hsio_ip_out4_r !== null && this.test_before.ta4hsio_ip_out4_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out5_r) !== "undefined" && this.test_before.ta4hsio_ip_out5_r !== null && this.test_before.ta4hsio_ip_out5_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out6_r) !== "undefined" && this.test_before.ta4hsio_ip_out6_r !== null && this.test_before.ta4hsio_ip_out6_r !== "") &&
            (typeof (this.test_before.ta4hsio_ip_iha_y) !== "undefined" && this.test_before.ta4hsio_ip_iha_y !== null && this.test_before.ta4hsio_ip_iha_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out1_y) !== "undefined" && this.test_before.ta4hsio_ip_out1_y !== null && this.test_before.ta4hsio_ip_out1_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out2_y) !== "undefined" && this.test_before.ta4hsio_ip_out2_y !== null && this.test_before.ta4hsio_ip_out2_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out3_y) !== "undefined" && this.test_before.ta4hsio_ip_out3_y !== null && this.test_before.ta4hsio_ip_out3_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out4_y) !== "undefined" && this.test_before.ta4hsio_ip_out4_y !== null && this.test_before.ta4hsio_ip_out4_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out5_y) !== "undefined" && this.test_before.ta4hsio_ip_out5_y !== null && this.test_before.ta4hsio_ip_out5_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out6_y) !== "undefined" && this.test_before.ta4hsio_ip_out6_y !== null && this.test_before.ta4hsio_ip_out6_y !== "") &&
            (typeof (this.test_before.ta4hsio_ip_iha_b) !== "undefined" && this.test_before.ta4hsio_ip_iha_b !== null && this.test_before.ta4hsio_ip_iha_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out1_b) !== "undefined" && this.test_before.ta4hsio_ip_out1_b !== null && this.test_before.ta4hsio_ip_out1_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out2_b) !== "undefined" && this.test_before.ta4hsio_ip_out2_b !== null && this.test_before.ta4hsio_ip_out2_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out3_b) !== "undefined" && this.test_before.ta4hsio_ip_out3_b !== null && this.test_before.ta4hsio_ip_out3_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out4_b) !== "undefined" && this.test_before.ta4hsio_ip_out4_b !== null && this.test_before.ta4hsio_ip_out4_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out5_b) !== "undefined" && this.test_before.ta4hsio_ip_out5_b !== null && this.test_before.ta4hsio_ip_out5_b !== "") &&
            (typeof (this.test_before.ta4hsio_ip_out6_b) !== "undefined" && this.test_before.ta4hsio_ip_out6_b !== null && this.test_before.ta4hsio_ip_out6_b !== "")) || (typeof (this.test_before.ta4hsio_ta0naremarks) !== "undefined" && this.test_before.ta4hsio_ta0naremarks !== null && this.test_before.ta4hsio_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4hsio_ct_iha) !== "undefined" && this.test_after.ta4hsio_ct_iha !== null && this.test_after.ta4hsio_ct_iha !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out1) !== "undefined" && this.test_after.ta4hsio_ct_out1 !== null && this.test_after.ta4hsio_ct_out1 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out2) !== "undefined" && this.test_after.ta4hsio_ct_out2 !== null && this.test_after.ta4hsio_ct_out2 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out3) !== "undefined" && this.test_after.ta4hsio_ct_out3 !== null && this.test_after.ta4hsio_ct_out3 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out4) !== "undefined" && this.test_after.ta4hsio_ct_out4 !== null && this.test_after.ta4hsio_ct_out4 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out5) !== "undefined" && this.test_after.ta4hsio_ct_out5 !== null && this.test_after.ta4hsio_ct_out5 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out6) !== "undefined" && this.test_after.ta4hsio_ct_out6 !== null && this.test_after.ta4hsio_ct_out6 !== "") &&
                (typeof (this.test_after.ta4hsio_is_iha_r) !== "undefined" && this.test_after.ta4hsio_is_iha_r !== null && this.test_after.ta4hsio_is_iha_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out1_r) !== "undefined" && this.test_after.ta4hsio_is_out1_r !== null && this.test_after.ta4hsio_is_out1_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out2_r) !== "undefined" && this.test_after.ta4hsio_is_out2_r !== null && this.test_after.ta4hsio_is_out2_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out3_r) !== "undefined" && this.test_after.ta4hsio_is_out3_r !== null && this.test_after.ta4hsio_is_out3_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out4_r) !== "undefined" && this.test_after.ta4hsio_is_out4_r !== null && this.test_after.ta4hsio_is_out4_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out5_r) !== "undefined" && this.test_after.ta4hsio_is_out5_r !== null && this.test_after.ta4hsio_is_out5_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out6_r) !== "undefined" && this.test_after.ta4hsio_is_out6_r !== null && this.test_after.ta4hsio_is_out6_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_iha_y) !== "undefined" && this.test_after.ta4hsio_is_iha_y !== null && this.test_after.ta4hsio_is_iha_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out1_y) !== "undefined" && this.test_after.ta4hsio_is_out1_y !== null && this.test_after.ta4hsio_is_out1_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out2_y) !== "undefined" && this.test_after.ta4hsio_is_out2_y !== null && this.test_after.ta4hsio_is_out2_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out3_y) !== "undefined" && this.test_after.ta4hsio_is_out3_y !== null && this.test_after.ta4hsio_is_out3_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out4_y) !== "undefined" && this.test_after.ta4hsio_is_out4_y !== null && this.test_after.ta4hsio_is_out4_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out5_y) !== "undefined" && this.test_after.ta4hsio_is_out5_y !== null && this.test_after.ta4hsio_is_out5_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out6_y) !== "undefined" && this.test_after.ta4hsio_is_out6_y !== null && this.test_after.ta4hsio_is_out6_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_iha_b) !== "undefined" && this.test_after.ta4hsio_is_iha_b !== null && this.test_after.ta4hsio_is_iha_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out1_b) !== "undefined" && this.test_after.ta4hsio_is_out1_b !== null && this.test_after.ta4hsio_is_out1_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out2_b) !== "undefined" && this.test_after.ta4hsio_is_out2_b !== null && this.test_after.ta4hsio_is_out2_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out3_b) !== "undefined" && this.test_after.ta4hsio_is_out3_b !== null && this.test_after.ta4hsio_is_out3_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out4_b) !== "undefined" && this.test_after.ta4hsio_is_out4_b !== null && this.test_after.ta4hsio_is_out4_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out5_b) !== "undefined" && this.test_after.ta4hsio_is_out5_b !== null && this.test_after.ta4hsio_is_out5_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out6_b) !== "undefined" && this.test_after.ta4hsio_is_out6_b !== null && this.test_after.ta4hsio_is_out6_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_iha_r) !== "undefined" && this.test_after.ta4hsio_ip_iha_r !== null && this.test_after.ta4hsio_ip_iha_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out1_r) !== "undefined" && this.test_after.ta4hsio_ip_out1_r !== null && this.test_after.ta4hsio_ip_out1_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out2_r) !== "undefined" && this.test_after.ta4hsio_ip_out2_r !== null && this.test_after.ta4hsio_ip_out2_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out3_r) !== "undefined" && this.test_after.ta4hsio_ip_out3_r !== null && this.test_after.ta4hsio_ip_out3_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out4_r) !== "undefined" && this.test_after.ta4hsio_ip_out4_r !== null && this.test_after.ta4hsio_ip_out4_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out5_r) !== "undefined" && this.test_after.ta4hsio_ip_out5_r !== null && this.test_after.ta4hsio_ip_out5_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out6_r) !== "undefined" && this.test_after.ta4hsio_ip_out6_r !== null && this.test_after.ta4hsio_ip_out6_r !== "") &&
                (typeof (this.test_after.ta4hsio_ip_iha_y) !== "undefined" && this.test_after.ta4hsio_ip_iha_y !== null && this.test_after.ta4hsio_ip_iha_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out1_y) !== "undefined" && this.test_after.ta4hsio_ip_out1_y !== null && this.test_after.ta4hsio_ip_out1_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out2_y) !== "undefined" && this.test_after.ta4hsio_ip_out2_y !== null && this.test_after.ta4hsio_ip_out2_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out3_y) !== "undefined" && this.test_after.ta4hsio_ip_out3_y !== null && this.test_after.ta4hsio_ip_out3_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out4_y) !== "undefined" && this.test_after.ta4hsio_ip_out4_y !== null && this.test_after.ta4hsio_ip_out4_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out5_y) !== "undefined" && this.test_after.ta4hsio_ip_out5_y !== null && this.test_after.ta4hsio_ip_out5_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out6_y) !== "undefined" && this.test_after.ta4hsio_ip_out6_y !== null && this.test_after.ta4hsio_ip_out6_y !== "") &&
                (typeof (this.test_after.ta4hsio_ip_iha_b) !== "undefined" && this.test_after.ta4hsio_ip_iha_b !== null && this.test_after.ta4hsio_ip_iha_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out1_b) !== "undefined" && this.test_after.ta4hsio_ip_out1_b !== null && this.test_after.ta4hsio_ip_out1_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out2_b) !== "undefined" && this.test_after.ta4hsio_ip_out2_b !== null && this.test_after.ta4hsio_ip_out2_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out3_b) !== "undefined" && this.test_after.ta4hsio_ip_out3_b !== null && this.test_after.ta4hsio_ip_out3_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out4_b) !== "undefined" && this.test_after.ta4hsio_ip_out4_b !== null && this.test_after.ta4hsio_ip_out4_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out5_b) !== "undefined" && this.test_after.ta4hsio_ip_out5_b !== null && this.test_after.ta4hsio_ip_out5_b !== "") &&
                (typeof (this.test_after.ta4hsio_ip_out6_b) !== "undefined" && this.test_after.ta4hsio_ip_out6_b !== null && this.test_after.ta4hsio_ip_out6_b !== "")) || (typeof (this.test_after.ta4hsio_ta0naremarks) !== "undefined" && this.test_after.ta4hsio_ta0naremarks !== null && this.test_after.ta4hsio_ta0naremarks !== "")) {
            this.validateHsio = true;
        }
        else {
            this.validateHsio = false;
        }
        // Validate AI Test
        if (((typeof (this.test_before.ta4ai_key_standard) !== "undefined" && this.test_before.ta4ai_key_standard !== null && this.test_before.ta4ai_key_standard !== "") &&
            (typeof (this.test_before.ta4ai_key_non_standard) !== "undefined" && this.test_before.ta4ai_key_non_standard !== null && this.test_before.ta4ai_key_non_standard !== "") &&
            (typeof (this.test_before.ta4ai_key_customer) !== "undefined" && this.test_before.ta4ai_key_customer !== null && this.test_before.ta4ai_key_customer !== "") &&
            (typeof (this.test_before.ta4ai_info_gear) !== "undefined" && this.test_before.ta4ai_info_gear !== null && this.test_before.ta4ai_info_gear !== "") &&
            (typeof (this.test_before.ta4ai_info_ct) !== "undefined" && this.test_before.ta4ai_info_ct !== null && this.test_before.ta4ai_info_ct !== "") &&
            (typeof (this.test_before.ta4ai_info_pt) !== "undefined" && this.test_before.ta4ai_info_pt !== null && this.test_before.ta4ai_info_pt !== "") &&
            (typeof (this.test_before.ta4ai_info_vcb) !== "undefined" && this.test_before.ta4ai_info_vcb !== null && this.test_before.ta4ai_info_vcb !== "") &&
            (typeof (this.test_before.ta4ai_meter_cable) !== "undefined" && this.test_before.ta4ai_meter_cable !== null && this.test_before.ta4ai_meter_cable !== "") &&
            (typeof (this.test_before.ta4ai_meter_box) !== "undefined" && this.test_before.ta4ai_meter_box !== null && this.test_before.ta4ai_meter_box !== "") &&
            (typeof (this.test_before.ta4ai_kiosk_pe) !== "undefined" && this.test_before.ta4ai_kiosk_pe !== null && this.test_before.ta4ai_kiosk_pe !== "") &&
            (typeof (this.test_before.ta4ai_kiosk_sm) !== "undefined" && this.test_before.ta4ai_kiosk_sm !== null && this.test_before.ta4ai_kiosk_sm !== "") &&
            (typeof (this.test_before.ta4ai_kiosk_su) !== "undefined" && this.test_before.ta4ai_kiosk_su !== null && this.test_before.ta4ai_kiosk_su !== "") &&
            (typeof (this.test_before.ta4ai_kiosk_type) !== "undefined" && this.test_before.ta4ai_kiosk_type !== null && this.test_before.ta4ai_kiosk_type !== "") &&
            (typeof (this.test_before.ta4ai_kiosk_date) !== "undefined" && this.test_before.ta4ai_kiosk_date !== null && this.test_before.ta4ai_kiosk_date !== "")) || (typeof (this.test_before.ta4ai_ta0naremarks) !== "undefined" && this.test_before.ta4ai_ta0naremarks !== null && this.test_before.ta4ai_ta0naremarks !== "") ||
            ((typeof (this.test_after.ta4ai_key_standard) !== "undefined" && this.test_after.ta4ai_key_standard !== null && this.test_after.ta4ai_key_standard !== "") &&
                (typeof (this.test_after.ta4ai_key_non_standard) !== "undefined" && this.test_after.ta4ai_key_non_standard !== null && this.test_after.ta4ai_key_non_standard !== "") &&
                (typeof (this.test_after.ta4ai_key_customer) !== "undefined" && this.test_after.ta4ai_key_customer !== null && this.test_after.ta4ai_key_customer !== "") &&
                (typeof (this.test_after.ta4ai_info_gear) !== "undefined" && this.test_after.ta4ai_info_gear !== null && this.test_after.ta4ai_info_gear !== "") &&
                (typeof (this.test_after.ta4ai_info_ct) !== "undefined" && this.test_after.ta4ai_info_ct !== null && this.test_after.ta4ai_info_ct !== "") &&
                (typeof (this.test_after.ta4ai_info_pt) !== "undefined" && this.test_after.ta4ai_info_pt !== null && this.test_after.ta4ai_info_pt !== "") &&
                (typeof (this.test_after.ta4ai_info_vcb) !== "undefined" && this.test_after.ta4ai_info_vcb !== null && this.test_after.ta4ai_info_vcb !== "") &&
                (typeof (this.test_after.ta4ai_meter_cable) !== "undefined" && this.test_after.ta4ai_meter_cable !== null && this.test_after.ta4ai_meter_cable !== "") &&
                (typeof (this.test_after.ta4ai_meter_box) !== "undefined" && this.test_after.ta4ai_meter_box !== null && this.test_after.ta4ai_meter_box !== "") &&
                (typeof (this.test_after.ta4ai_kiosk_pe) !== "undefined" && this.test_after.ta4ai_kiosk_pe !== null && this.test_after.ta4ai_kiosk_pe !== "") &&
                (typeof (this.test_after.ta4ai_kiosk_sm) !== "undefined" && this.test_after.ta4ai_kiosk_sm !== null && this.test_after.ta4ai_kiosk_sm !== "") &&
                (typeof (this.test_after.ta4ai_kiosk_su) !== "undefined" && this.test_after.ta4ai_kiosk_su !== null && this.test_after.ta4ai_kiosk_su !== "") &&
                (typeof (this.test_after.ta4ai_kiosk_type) !== "undefined" && this.test_after.ta4ai_kiosk_type !== null && this.test_after.ta4ai_kiosk_type !== "") &&
                (typeof (this.test_after.ta4ai_kiosk_date) !== "undefined" && this.test_after.ta4ai_kiosk_date !== null && this.test_after.ta4ai_kiosk_date !== "")) || (typeof (this.test_after.ta4ai_ta0naremarks) !== "undefined" && this.test_after.ta4ai_ta0naremarks !== null && this.test_after.ta4ai_ta0naremarks !== "")) {
            this.validateAi = true;
        }
        else {
            this.validateAi = false;
        }
        if (((this.before_ta0na === 'N' || this.before_ta0na === 'Y') && ((this.before_ta0Remark) !== "undefined" && this.before_ta0Remark !== null && this.before_ta0Remark !== "")) ||
            ((this.after_ta0na === 'N' || this.after_ta0na === 'Y') && ((this.after_ta0Remark) !== "undefined" && this.after_ta0Remark !== null && this.after_ta0Remark !== ""))) {
            this.validateNafa = true;
        }
        else {
            this.validateNafa = false;
        }
        // Validate Ins
        if ((((typeof (this.test_before.ta4reg_amf) !== "undefined" && this.test_before.ta4reg_amf !== null && this.test_before.ta4reg_amf !== "") &&
            (typeof (this.test_before.ta4reg_amb) !== "undefined" && this.test_before.ta4reg_amb !== null && this.test_before.ta4reg_amb !== "") &&
            (typeof (this.test_before.ta4sum_end) !== "undefined" && this.test_before.ta4sum_end !== null && this.test_before.ta4sum_end !== "") &&
            (typeof (this.test_before.ta4sum_start) !== "undefined" && this.test_before.ta4sum_start !== null && this.test_before.ta4sum_start !== "") &&
            (typeof (this.test_before.ta4reg_amc) !== "undefined" && this.test_before.ta4reg_amc !== null && this.test_before.ta4reg_amc !== "")) ||
            (typeof (this.test_before.ta4ins_ta0naremarks) !== "undefined" && this.test_before.ta4ins_ta0naremarks !== null && this.test_before.ta4ins_ta0naremarks !== "")) ||
            (((typeof (this.test_after.ta4reg_amf) !== "undefined" && this.test_after.ta4reg_amf !== null && this.test_after.ta4reg_amf !== "") &&
                (typeof (this.test_after.ta4reg_amb) !== "undefined" && this.test_after.ta4reg_amb !== null && this.test_after.ta4reg_amb !== "") &&
                (typeof (this.test_after.ta4sum_end) !== "undefined" && this.test_after.ta4sum_end !== null && this.test_after.ta4sum_end !== "") &&
                (typeof (this.test_after.ta4sum_start) !== "undefined" && this.test_after.ta4sum_start !== null && this.test_after.ta4sum_start !== "") &&
                (typeof (this.test_after.ta4reg_amc) !== "undefined" && this.test_after.ta4reg_amc !== null && this.test_after.ta4reg_amc !== "")) ||
                (typeof (this.test_after.ta4ins_ta0naremarks) !== "undefined" && this.test_after.ta4ins_ta0naremarks !== null && this.test_after.ta4ins_ta0naremarks !== ""))) {
            this.validateIns = true;
        }
        else {
            this.validateIns = false;
        }
        // Pre-Commissioning
        if (((typeof (this.test_before.ta4pc_contctpt_r) !== "undefined" && this.test_before.ta4pc_contctpt_r !== null && this.test_before.ta4pc_contctpt_r !== "") &&
            (typeof (this.test_before.ta4pc_contctpt_y) !== "undefined" && this.test_before.ta4pc_contctpt_y !== null && this.test_before.ta4pc_contctpt_y !== "") &&
            (typeof (this.test_before.ta4pc_contctpt_b) !== "undefined" && this.test_before.ta4pc_contctpt_b !== null && this.test_before.ta4pc_contctpt_b !== "") &&
            (typeof (this.test_before.ta4pc_ctratio_r) !== "undefined" && this.test_before.ta4pc_ctratio_r !== null && this.test_before.ta4pc_ctratio_r !== "") &&
            (typeof (this.test_before.ta4pc_ctratio_y) !== "undefined" && this.test_before.ta4pc_ctratio_y !== null && this.test_before.ta4pc_ctratio_y !== "") &&
            (typeof (this.test_before.ta4pc_ctratio_b) !== "undefined" && this.test_before.ta4pc_ctratio_b !== null && this.test_before.ta4pc_ctratio_b !== "") &&
            (typeof (this.test_before.ta4pc_ctpolar_r) !== "undefined" && this.test_before.ta4pc_ctpolar_r !== null && this.test_before.ta4pc_ctpolar_r !== "") &&
            (typeof (this.test_before.ta4pc_ctpolar_y) !== "undefined" && this.test_before.ta4pc_ctpolar_y !== null && this.test_before.ta4pc_ctpolar_y !== "") &&
            (typeof (this.test_before.ta4pc_ctpolar_b) !== "undefined" && this.test_before.ta4pc_ctpolar_b !== null && this.test_before.ta4pc_ctpolar_b !== "") &&
            (typeof (this.test_before.ta4pc_kio_wirg) !== "undefined" && this.test_before.ta4pc_kio_wirg !== null && this.test_before.ta4pc_kio_wirg !== "") &&
            (typeof (this.test_before.ta4pc_s2_starerh) !== "undefined" && this.test_before.ta4pc_s2_starerh !== null && this.test_before.ta4pc_s2_starerh !== "") &&
            (typeof (this.test_before.ta4pc_ptpolar) !== "undefined" && this.test_before.ta4pc_ptpolar !== null && this.test_before.ta4pc_ptpolar !== "") &&
            (typeof (this.test_before.ta4pc_nseaptpas) !== "undefined" && this.test_before.ta4pc_nseaptpas !== null && this.test_before.ta4pc_nseaptpas !== "")) ||
            (typeof (this.test_after.ta4pc_contctpt_r) !== "undefined" && this.test_after.ta4pc_contctpt_r !== null && this.test_after.ta4pc_contctpt_r !== "") &&
                (typeof (this.test_after.ta4pc_contctpt_y) !== "undefined" && this.test_after.ta4pc_contctpt_y !== null && this.test_after.ta4pc_contctpt_y !== "") &&
                (typeof (this.test_after.ta4pc_contctpt_b) !== "undefined" && this.test_after.ta4pc_contctpt_b !== null && this.test_after.ta4pc_contctpt_b !== "") &&
                (typeof (this.test_after.ta4pc_ctratio_r) !== "undefined" && this.test_after.ta4pc_ctratio_r !== null && this.test_after.ta4pc_ctratio_r !== "") &&
                (typeof (this.test_after.ta4pc_ctratio_y) !== "undefined" && this.test_after.ta4pc_ctratio_y !== null && this.test_after.ta4pc_ctratio_y !== "") &&
                (typeof (this.test_after.ta4pc_ctratio_b) !== "undefined" && this.test_after.ta4pc_ctratio_b !== null && this.test_after.ta4pc_ctratio_b !== "") &&
                (typeof (this.test_after.ta4pc_ctpolar_r) !== "undefined" && this.test_after.ta4pc_ctpolar_r !== null && this.test_after.ta4pc_ctpolar_r !== "") &&
                (typeof (this.test_after.ta4pc_ctpolar_y) !== "undefined" && this.test_after.ta4pc_ctpolar_y !== null && this.test_after.ta4pc_ctpolar_y !== "") &&
                (typeof (this.test_after.ta4pc_ctpolar_b) !== "undefined" && this.test_after.ta4pc_ctpolar_b !== null && this.test_after.ta4pc_ctpolar_b !== "") &&
                (typeof (this.test_after.ta4pc_kio_wirg) !== "undefined" && this.test_after.ta4pc_kio_wirg !== null && this.test_after.ta4pc_kio_wirg !== "") &&
                (typeof (this.test_after.ta4pc_s2_starerh) !== "undefined" && this.test_after.ta4pc_s2_starerh !== null && this.test_after.ta4pc_s2_starerh !== "") &&
                (typeof (this.test_after.ta4pc_ptpolar) !== "undefined" && this.test_after.ta4pc_ptpolar !== null && this.test_after.ta4pc_ptpolar !== "") &&
                (typeof (this.test_after.ta4pc_nseaptpas) !== "undefined" && this.test_after.ta4pc_nseaptpas !== null && this.test_after.ta4pc_nseaptpas !== "")) {
            this.validatePreComm = true;
        }
        else {
            this.validatePreComm = false;
        }
        // Validate Summator Section
        // Need to check array all field and outside fields
        if ((typeof (this.summatorBefore) !== "undefined") &&
            (typeof (this.summatorExtraBefore.ta4sum_end) !== "undefined" && this.summatorExtraBefore.ta4sum_end !== null && this.summatorExtraBefore.ta4sum_end !== "" && this.summatorExtraBefore.ta4sum_end !== "-") &&
            (typeof (this.summatorExtraBefore.ta4sum_start) !== "undefined" && this.summatorExtraBefore.ta4sum_start !== null && this.summatorExtraBefore.ta4sum_start !== "" && this.summatorExtraBefore.ta4sum_start !== "-") &&
            (typeof (this.summatorExtraBefore.ta4sum_sted_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_sted_diff !== null && this.summatorExtraBefore.ta4sum_sted_diff !== "" && this.summatorExtraBefore.ta4sum_sted_diff !== "-") &&
            (typeof (this.summatorExtraBefore.ta4sum_consumption) !== "undefined" && this.summatorExtraBefore.ta4sum_consumption !== null && this.summatorExtraBefore.ta4sum_consumption !== "" && this.summatorExtraBefore.ta4sum_consumption !== "-") &&
            (typeof (this.summatorExtraBefore.ta4sum_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_diff !== null && this.summatorExtraBefore.ta4sum_diff !== "" && this.summatorExtraBefore.ta4sum_diff !== "-") ||
            (typeof (this.summatorAfter) !== "undefined") &&
                (typeof (this.summatorExtraAfter.ta4sum_end) !== "undefined" && this.summatorExtraAfter.ta4sum_end !== null && this.summatorExtraAfter.ta4sum_end !== "" && this.summatorExtraAfter.ta4sum_end !== "-") &&
                (typeof (this.summatorExtraAfter.ta4sum_start) !== "undefined" && this.summatorExtraAfter.ta4sum_start !== null && this.summatorExtraAfter.ta4sum_start !== "" && this.summatorExtraAfter.ta4sum_start !== "-") &&
                (typeof (this.summatorExtraAfter.ta4sum_sted_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_sted_diff !== null && this.summatorExtraAfter.ta4sum_sted_diff !== "" && this.summatorExtraAfter.ta4sum_sted_diff !== "-") &&
                (typeof (this.summatorExtraAfter.ta4sum_consumption) !== "undefined" && this.summatorExtraAfter.ta4sum_consumption !== null && this.summatorExtraAfter.ta4sum_consumption !== "" && this.summatorExtraAfter.ta4sum_consumption !== "-") &&
                (typeof (this.summatorExtraAfter.ta4sum_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_diff !== null && this.summatorExtraAfter.ta4sum_diff !== "" && this.summatorExtraAfter.ta4sum_diff !== "-")) {
            this.validateSummator = true;
        }
        else {
            this.validateSummator = false;
        }
    };
    /**
     * Reason   : Method Auto Calculate Max CT Loading.
     * Created  : Alif (16-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateMaxCtLoading = function (type) {
        console.log("auto calculate max ct loading..");
        if (type === "before") {
            // Variables
            var amps;
            var ct_load;
            // checking value user input for calculate amps and ct loading
            if ((typeof (this.test_before.ta4mct_md) !== "undefined" || this.test_before.ta4mct_md !== null || this.test_before.ta4mct_md !== "") &&
                (typeof (this.test_before.ta4mct_vt) !== "undefined" || this.test_before.ta4mct_vt !== null || this.test_before.ta4mct_vt !== "") &&
                (typeof (this.test_before.ta4mct_pf) !== "undefined" || this.test_before.ta4mct_pf !== null || this.test_before.ta4mct_pf !== "")) {
                // calculate amps
                amps = Number(this.test_before.ta4mct_md) / (Math.sqrt(3) * Number(this.test_before.ta4mct_vt) * Number(this.test_before.ta4mct_pf));
                // V from PT Winding Group
                // amps = (Number(this.test_before.ta4mct_md) / (Math.sqrt(3) * Number(this.pt_ratio) * Number(this.test_before.ta4mct_pf)));
                if (!isNaN(amps)) {
                    // calculate ct loading
                    ct_load = (amps / Number(this.ct_ratio)) * 100;
                    this.test_before.ta4mct_ac = Number(amps).toFixed(2);
                    if (!isNaN(ct_load)) {
                        this.test_before.ta4mct_cl = Number(ct_load).toFixed(2);
                    }
                    else {
                        this.test_before.ta4mct_cl = "-";
                    }
                }
                else {
                    this.test_before.ta4mct_ac = "-";
                }
            }
        }
        else {
            // Variables
            var amps;
            var ct_load;
            // checking value user input for calculate amps and ct loading
            if ((typeof (this.test_after.ta4mct_md) !== "undefined" || this.test_after.ta4mct_md !== null || this.test_after.ta4mct_md !== "") &&
                (typeof (this.test_after.ta4mct_vt) !== "undefined" || this.test_after.ta4mct_vt !== null || this.test_after.ta4mct_vt !== "") &&
                (typeof (this.test_after.ta4mct_pf) !== "undefined" || this.test_after.ta4mct_pf !== null || this.test_after.ta4mct_pf !== "")) {
                // calculate amps
                amps = Number(this.test_after.ta4mct_md) / (Math.sqrt(3) * Number(this.test_after.ta4mct_vt) * Number(this.test_after.ta4mct_pf));
                // V from PT Winding Group
                // amps = (Number(this.test_after.ta4mct_md) / (Math.sqrt(3) * Number(this.pt_ratio) * Number(this.test_after.ta4mct_pf)));
                if (!isNaN(amps)) {
                    // calculate ct loading
                    ct_load = (amps / Number(this.ct_ratio)) * 100;
                    this.test_after.ta4mct_ac = Number(amps).toFixed(2);
                    if (!isNaN(ct_load)) {
                        this.test_after.ta4mct_cl = Number(ct_load).toFixed(2);
                    }
                    else {
                        this.test_after.ta4mct_cl = "-";
                    }
                }
                else {
                    this.test_after.ta4mct_ac = "-";
                }
            }
        }
        console.log("Amps: " + amps);
        console.log("CT Loading: " + ct_load);
    };
    /**
     * Reason   : Method to calculate average Meter Accuray Testing.
     * Created  : Alif (16/01/2019)
     * Edited   : Alif (19.04.2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateAverageMeterAccuracy = function (type) {
        console.log("auto calculate meter accuracy testing..");
        debugger;
        if (type === "before") {
            // Variables
            var avg;
            var count = 0, count1 = 0, count2 = 0, count3 = 0;
            // Checking total test exist
            if (typeof (this.test_before.ta4ma_test1) !== "undefined" && this.test_before.ta4ma_test1 !== null && this.test_before.ta4ma_test1 !== "") {
                count1++;
            }
            else {
                if (count1 > 0) {
                    count1--;
                }
            }
            if (typeof (this.test_before.ta4ma_test2) !== "undefined" && this.test_before.ta4ma_test2 !== null && this.test_before.ta4ma_test2 !== "") {
                count2++;
            }
            else {
                if (count2 > 0) {
                    count2--;
                }
            }
            if (typeof (this.test_before.ta4ma_test3) !== "undefined" && this.test_before.ta4ma_test3 !== null && this.test_before.ta4ma_test3 !== "") {
                count3++;
            }
            else {
                if (count3 > 0) {
                    count3--;
                }
            }
            count = Number(count1) + Number(count2) + Number(count3);
            // checking input value is available or not
            // if ((typeof (this.test_before.ta4ma_test1) !== "undefined" || this.test_before.ta4ma_test1 !== null || this.test_before.ta4ma_test1 !== "") &&
            //   (typeof (this.test_before.ta4ma_test2) !== "undefined" || this.test_before.ta4ma_test2 !== null || this.test_before.ta4ma_test2 !== "") &&
            //   (typeof (this.test_before.ta4ma_test3) !== "undefined" || this.test_before.ta4ma_test3 !== null || this.test_before.ta4ma_test3 !== "")) {
            // calculate average
            avg = (Number(this.test_before.ta4ma_test1) + Number(this.test_before.ta4ma_test2) + Number(this.test_before.ta4ma_test3)) / count;
            // checking is output is not NaN assign value.
            if (!isNaN(avg)) {
                this.test_before.ta4ma_avg = Number(avg).toFixed(2);
            }
            else {
                this.test_before.ta4ma_avg = "-";
            }
            // }
        }
        else {
            // Variables
            var avg;
            // checking input value is available or not
            if ((typeof (this.test_after.ta4ma_test1) !== "undefined" || this.test_after.ta4ma_test1 !== null || this.test_after.ta4ma_test1 !== "") &&
                (typeof (this.test_after.ta4ma_test2) !== "undefined" || this.test_after.ta4ma_test2 !== null || this.test_after.ta4ma_test2 !== "") &&
                (typeof (this.test_after.ta4ma_test3) !== "undefined" || this.test_after.ta4ma_test3 !== null || this.test_after.ta4ma_test3 !== "")) {
                // calculate average
                avg = (Number(this.test_after.ta4ma_test1) + Number(this.test_after.ta4ma_test2) + Number(this.test_after.ta4ma_test3)) / 3;
                // checking is output is not NaN assign value.
                if (!isNaN(avg)) {
                    this.test_after.ta4ma_avg = Number(avg).toFixed(2);
                }
                else {
                    this.test_after.ta4ma_avg = "-";
                }
            }
        }
        console.log("Average: " + avg);
    };
    /**
     * Reason   : Method to calculate different kWh Meter Accuracy Testing..
     * Created  : Alif (16-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateDifferentMeterRead = function (type) {
        console.log("auto calculate different meter read..");
        if (type === "before") {
            // Variables
            var diff;
            // checking input is available or not
            if ((typeof (this.test_before.ta4ma_read_start) !== "undefined" || this.test_before.ta4ma_read_start !== null || this.test_before.ta4ma_read_start !== "") &&
                (typeof (this.test_before.ta4ma_read_end) !== "undefined" || this.test_before.ta4ma_read_end !== null || this.test_before.ta4ma_read_end !== "")) {
                // calculate different
                diff = Number(this.test_before.ta4ma_read_end) - Number(this.test_before.ta4ma_read_start);
                // checking is output is not NaN assign value.
                if (!isNaN(diff)) {
                    this.test_before.ta4ma_read_diff = Number(diff).toFixed(2);
                }
                else {
                    this.test_before.ta4ma_read_diff = "-";
                }
            }
            console.log("Different: " + this.test_before.ta4ma_read_diff);
        }
        else {
            // Variables
            var diff;
            // checking input is available or not
            if ((typeof (this.test_after.ta4ma_read_start) !== "undefined" || this.test_after.ta4ma_read_start !== null || this.test_after.ta4ma_read_start !== "") &&
                (typeof (this.test_after.ta4ma_read_end) !== "undefined" || this.test_after.ta4ma_read_end !== null || this.test_after.ta4ma_read_end !== "")) {
                // calculate different
                diff = Number(this.test_after.ta4ma_read_end) - Number(this.test_after.ta4ma_read_start);
                // checking is output is not NaN assign value.
                if (!isNaN(diff)) {
                    this.test_after.ta4ma_read_diff = Number(diff).toFixed(2);
                }
                else {
                    this.test_after.ta4ma_read_diff = "-";
                }
            }
            console.log("Different: " + this.test_after.ta4ma_read_diff);
        }
        this.autoCalculateCalcEnergy(type);
    };
    /**
     * Reason   : Method to calculate duration Meter Accuracy Testing..
     * Created  : Alif (16/01-2019)
     */
    SealMvhvInspectPage.prototype.pad = function (num) {
        return ("0" + num).slice(-2);
    };
    SealMvhvInspectPage.prototype.autoCalculateDurationTime = function (type) {
        console.log("auto calculate duration time accuracy testing..");
        if (type === "before") {
            var start = __WEBPACK_IMPORTED_MODULE_10_moment__["utc"](this.test_before.ta4ma_time_start, "hh:mm");
            var end = __WEBPACK_IMPORTED_MODULE_10_moment__["utc"](this.test_before.ta4ma_time_end, "hh:mm");
            if (end.isBefore(start))
                end.add(1, 'day');
            var d = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](end.diff(start));
            // subtract the lunch break
            // d.subtract(30, 'minutes');
            // format a string result
            this.test_before.ta4ma_time_duration = d.asMinutes();
            console.log("calculation for duration" + this.test_before.ta4ma_time_start + "------" + this.test_before.ta4ma_time_end);
            /*  if (this.test_before.ta4ma_time_start && this.test_before.ta4ma_time_end) {
               var f = this.test_before.ta4ma_time_start.split("T");
               var g = this.test_before.ta4ma_time_end.split("T");
               console.log(f);
       
               if (f.length === 1) {
                 var s = f[0].split(":"), sMin = +s[1] + s[0] * 60,
                   e = g[0].split(":"), eMin = +e[1] + e[0] * 60,
                   diff = eMin - sMin;
                 console.log(s);
       
                 if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
                 var h = Math.floor(diff / 60),
                   m = diff % 60;
       
                 var k: any;
                 if (h === 0) {
                   k = m / 60;
                   k = k * 60;
                   this.test_before.ta4ma_time_duration = k.toFixed(0);
                 } else {
                   var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                   k = (Number(hm) / 60);
                   k = k * 60;
                   this.test_before.ta4ma_time_duration = k.toFixed(0);
                 }
               } else {
                 var s = f[1].split(":"), sMin = +s[1] + s[0] * 60,
                   e = g[1].split(":"), eMin = +e[1] + e[0] * 60,
                   diff = eMin - sMin;
                 console.log(s);
       
                 if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
                 var h = Math.floor(diff / 60),
                   m = diff % 60;
       
                 var k: any;
                 if (h === 0) {
                   k = m / 60;
                   k = k * 60;
                   this.test_before.ta4ma_time_duration = k.toFixed(0);
                 } else {
                   var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                   k = (Number(hm) / 60);
                   k = k * 60;
                   this.test_before.ta4ma_time_duration = k.toFixed(0);
                 }
               }
       
             } */
        }
        else {
            var start = __WEBPACK_IMPORTED_MODULE_10_moment__["utc"](this.test_after.ta4ma_time_start, "hh:mm");
            var end = __WEBPACK_IMPORTED_MODULE_10_moment__["utc"](this.test_after.ta4ma_time_end, "hh:mm");
            if (end.isBefore(start))
                end.add(1, 'day');
            var d = __WEBPACK_IMPORTED_MODULE_10_moment__["duration"](end.diff(start));
            // subtract the lunch break
            // d.subtract(30, 'minutes');
            // format a string result
            this.test_after.ta4ma_time_duration = d.asMinutes();
            console.log("calculation for duration" + this.test_after.ta4ma_time_start + "------" + this.test_after.ta4ma_time_end);
            /*     if (this.test_after.ta4ma_time_start && this.test_after.ta4ma_time_end) {
                  var f = this.test_after.ta4ma_time_start.split("T");
                  var g = this.test_after.ta4ma_time_end.split("T");
                  console.log(f);
          
                  if (f.length === 1) {
                    var s = f[0].split(":"), sMin = +s[1] + s[0] * 60,
                      e = g[0].split(":"), eMin = +e[1] + e[0] * 60,
                      diff = eMin - sMin;
                    console.log(s);
          
                    if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
                    var h = Math.floor(diff / 60),
                      m = diff % 60;
          
                    var k: any;
                    if (h === 0) {
                      k = m / 60;
                      k = k * 60;
                      this.test_after.ta4ma_time_duration = k.toFixed(0);
                    } else {
                      var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                      k = (Number(hm) / 60);
                      k = k * 60;
                      this.test_after.ta4ma_time_duration = k.toFixed(0);
                    }
                  } else {
                    var s = f[1].split(":"), sMin = +s[1] + s[0] * 60,
                      e = g[1].split(":"), eMin = +e[1] + e[0] * 60,
                      diff = eMin - sMin;
                    console.log(s);
          
                    if (diff < 0) { sMin -= 12 * 60; diff = eMin - sMin }
                    var h = Math.floor(diff / 60),
                      m = diff % 60;
          
                    var k: any;
                    if (h === 0) {
                      k = m / 60;
                      k = k * 60;
                      this.test_after.ta4ma_time_duration = k.toFixed(0);
                    } else {
                      var hm = (Number(this.pad(h)) * 60) + Number(this.pad(m));
                      k = (Number(hm) / 60);
                      k = k * 60;
                      this.test_after.ta4ma_time_duration = k.toFixed(0);
                    }
                  }
          
                } */
        }
    };
    /**
     * Reason   : Method to calculate Calc Energy & % Diff  Meter Accuracy Testing..
     * Created  : Alif (16-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateCalcEnergy = function (type) {
        console.log("auto calculate calc energy meter accuracy testing..");
        if (type === "before") {
            // Variables
            var calc;
            var diff;
            // checking input is available or not
            if ((typeof (this.test_before.ta4ma_time_duration) !== "undefined" || this.test_before.ta4ma_time_duration !== null || this.test_before.ta4ma_time_duration !== "") &&
                (typeof (this.test_before.ta4ma_v_avg) !== "undefined" || this.test_before.ta4ma_v_avg !== null || this.test_before.ta4ma_v_avg !== "") &&
                (typeof (this.test_before.ta4ma_i_avg) !== "undefined" || this.test_before.ta4ma_i_avg !== null || this.test_before.ta4ma_i_avg !== "") &&
                (typeof (this.test_before.ta4ma_c_avg) !== "undefined" || this.test_before.ta4ma_c_avg !== null || this.test_before.ta4ma_c_avg !== "")) {
                // calculate energy
                calc = Math.sqrt(3) * Number(this.test_before.ta4ma_v_avg) * Number(this.test_before.ta4ma_i_avg) * Number(this.test_before.ta4ma_c_avg) * Number(this.test_before.ta4ma_time_duration);
                // checking is output is not NaN assign value.
                if (!isNaN(calc)) {
                    // checking input is available or not
                    if ((typeof (calc) !== "undefined" || calc !== null || calc !== "") &&
                        (typeof (this.test_before.ta4ma_read_diff) !== "undefined" || this.test_before.ta4ma_read_diff !== null || this.test_before.ta4ma_read_diff !== "")) {
                        // calculate % diff
                        diff = (Number(calc) - Number(this.test_before.ta4ma_read_diff)) / Number(this.test_before.ta4ma_read_diff);
                        // checking is output is not NaN assign value.
                        if (!isNaN(diff)) {
                            this.test_before.ta4ma_diff = Number(diff).toFixed(2);
                        }
                        else {
                            this.test_before.ta4ma_diff = "-";
                        }
                    }
                    this.test_before.ta4ma_calc_energy = Number(calc).toFixed(2);
                }
                else {
                    this.test_before.ta4ma_calc_energy = "-";
                }
            }
            console.log("Calc Energy: " + this.test_before.ta4ma_calc_energy + "| % Diff : " + this.test_before.ta4ma_diff);
        }
        else {
            // Variables
            var calc;
            var diff;
            // checking input is available or not
            if ((typeof (this.test_after.ta4ma_time_duration) !== "undefined" || this.test_after.ta4ma_time_duration !== null || this.test_after.ta4ma_time_duration !== "") &&
                (typeof (this.test_after.ta4ma_v_avg) !== "undefined" || this.test_after.ta4ma_v_avg !== null || this.test_after.ta4ma_v_avg !== "") &&
                (typeof (this.test_after.ta4ma_i_avg) !== "undefined" || this.test_after.ta4ma_i_avg !== null || this.test_after.ta4ma_i_avg !== "") &&
                (typeof (this.test_after.ta4ma_c_avg) !== "undefined" || this.test_after.ta4ma_c_avg !== null || this.test_after.ta4ma_c_avg !== "")) {
                // calculate energy
                calc = Math.sqrt(3) * Number(this.test_after.ta4ma_v_avg) * Number(this.test_after.ta4ma_i_avg) * Number(this.test_after.ta4ma_c_avg) * Number(this.test_after.ta4ma_time_duration);
                // checking is output is not NaN assign value.
                if (!isNaN(calc)) {
                    // checking input is available or not
                    if ((typeof (calc) !== "undefined" || calc !== null || calc !== "") &&
                        (typeof (this.test_after.ta4ma_read_diff) !== "undefined" || this.test_after.ta4ma_read_diff !== null || this.test_after.ta4ma_read_diff !== "")) {
                        // calculate % diff
                        diff = (Number(calc) - Number(this.test_after.ta4ma_read_diff)) / Number(this.test_after.ta4ma_read_diff);
                        // checking is output is not NaN assign value.
                        if (!isNaN(diff)) {
                            this.test_after.ta4ma_diff = Number(diff).toFixed(2);
                        }
                        else {
                            this.test_after.ta4ma_diff = "-";
                        }
                    }
                    this.test_after.ta4ma_calc_energy = Number(calc).toFixed(2);
                }
                else {
                    this.test_after.ta4ma_calc_energy = "-";
                }
            }
            console.log("Calc Energy: " + this.test_after.ta4ma_calc_energy + "| % Diff : " + this.test_after.ta4ma_diff);
        }
    };
    /**
     * Reason   : Method to calculate Calc. CT Ratio & % CT Loaded Average at CT Ratio Test..
     * Created  : Alif (16-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateCtRatioCtLoaded = function (type) {
        console.log("auto calculate ct ratio & ct loaded & average..");
        if (type === "before") {
            // Variables
            var ctrR, ctrY, ctrB;
            var ctlR, ctlY, ctlB;
            var ctrAvg, ctlAvg;
            if ((typeof (this.test_before.ta4ctr_ct_ratio_0) !== "undefined" || this.test_before.ta4ctr_ct_ratio_0 !== null || this.test_before.ta4ctr_ct_ratio_0 !== "") &&
                (typeof (this.test_before.ta4ctr_ct_ratio_1) !== "undefined" || this.test_before.ta4ctr_ct_ratio_1 !== null || this.test_before.ta4ctr_ct_ratio_1 !== "")) {
                this.test_before.ta4ctr_ct_ratio = Number(this.test_before.ta4ctr_ct_ratio_0) / Number(this.test_before.ta4ctr_ct_ratio_1);
            }
            // checking input is available or not
            if ((typeof (this.test_before.ta4ctr_ip_r) !== "undefined" || this.test_before.ta4ctr_ip_r !== null || this.test_before.ta4ctr_ip_r !== "") &&
                (typeof (this.test_before.ta4ctr_ip_y) !== "undefined" || this.test_before.ta4ctr_ip_y !== null || this.test_before.ta4ctr_ip_y !== "") &&
                (typeof (this.test_before.ta4ctr_ip_b) !== "undefined" || this.test_before.ta4ctr_ip_b !== null || this.test_before.ta4ctr_ip_b !== "") &&
                (typeof (this.test_before.ta4ctr_is_r) !== "undefined" || this.test_before.ta4ctr_is_r !== null || this.test_before.ta4ctr_is_r !== "") &&
                (typeof (this.test_before.ta4ctr_is_y) !== "undefined" || this.test_before.ta4ctr_is_y !== null || this.test_before.ta4ctr_is_y !== "") &&
                (typeof (this.test_before.ta4ctr_is_b) !== "undefined" || this.test_before.ta4ctr_is_b !== null || this.test_before.ta4ctr_is_b !== "")) {
                // calculate total (Calc. CT Ratio)
                ctrR = Number(this.test_before.ta4ctr_ip_r) / Number(this.test_before.ta4ctr_is_r) * 5;
                ctrY = Number(this.test_before.ta4ctr_ip_y) / Number(this.test_before.ta4ctr_is_y) * 5;
                ctrB = Number(this.test_before.ta4ctr_ip_b) / Number(this.test_before.ta4ctr_is_b) * 5;
                // checking is output is not NaN assign value.
                if (!isNaN(ctrR)) {
                    this.test_before.ta4ctr_ccr_r = Number(ctrR).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_ccr_r = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctrY)) {
                    this.test_before.ta4ctr_ccr_y = Number(ctrY).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_ccr_y = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctrB)) {
                    this.test_before.ta4ctr_ccr_b = Number(ctrB).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_ccr_b = "-";
                }
                // calculate total (% CT Loaded) **need to double check formula (CT Prim Amps not sure which one..)
                if (typeof (this.ct_ratio) !== "undefined" && this.ct_ratio !== null && this.ct_ratio !== "") {
                    ctlR = Number(this.test_before.ta4ctr_ip_r) / Number(this.ct_ratio) * 100;
                    ctlY = Number(this.test_before.ta4ctr_ip_y) / Number(this.ct_ratio) * 100;
                    ctlB = Number(this.test_before.ta4ctr_ip_b) / Number(this.ct_ratio) * 100;
                }
                else {
                    ctlR = Number(this.test_before.ta4ctr_ip_r) / Number(this.test_before.ta4ctr_ct_ratio) * 100;
                    ctlY = Number(this.test_before.ta4ctr_ip_y) / Number(this.test_before.ta4ctr_ct_ratio) * 100;
                    ctlB = Number(this.test_before.ta4ctr_ip_b) / Number(this.test_before.ta4ctr_ct_ratio) * 100;
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctlR)) {
                    this.test_before.ta4ctr_cl_r = Number(ctlR).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_cl_r = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctlY)) {
                    this.test_before.ta4ctr_cl_y = Number(ctlY).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_cl_y = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctlB)) {
                    this.test_before.ta4ctr_cl_b = Number(ctlB).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_cl_b = "-";
                }
                // calculate average (Calc. CT Ratio)
                ctrAvg = (Number(this.test_before.ta4ctr_ccr_r) + Number(this.test_before.ta4ctr_ccr_y) + Number(this.test_before.ta4ctr_ccr_b)) / 3;
                // checking is output is not NaN assign value.
                if (!isNaN(ctrAvg)) {
                    this.test_before.ta4ctr_avg_ccr = Number(ctrAvg).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_avg_ccr = "-";
                }
                // calculate average (% CT Loaded)
                ctlAvg = (Number(this.test_before.ta4ctr_cl_r) + Number(this.test_before.ta4ctr_cl_y) + Number(this.test_before.ta4ctr_cl_b)) / 3;
                // checking is output is not NaN assign value.
                if (!isNaN(ctlAvg)) {
                    this.test_before.ta4ctr_avg_cl = Number(ctlAvg).toFixed(2);
                }
                else {
                    this.test_before.ta4ctr_avg_cl = "-";
                }
            }
            console.log("CT Ratio: R - " + this.test_before.ta4ctr_ccr_r + ", Y - " + this.test_before.ta4ctr_ccr_y + ", B - " + this.test_before.ta4ctr_ccr_b);
            console.log("CT Loaded: R - " + this.test_before.ta4ctr_cl_r + ", Y - " + this.test_before.ta4ctr_cl_y + ", B - " + this.test_before.ta4ctr_cl_b);
            console.log("Average: CT Ratio - " + this.test_before.ta4ctr_avg_ccr + ", CT loaded - " + this.test_before.ta4ctr_avg_cl);
        }
        else {
            // Variables
            var ctrR, ctrY, ctrB;
            var ctlR, ctlY, ctlB;
            var ctrAvg, ctlAvg;
            // checking input is available or not
            if ((typeof (this.test_after.ta4ctr_ip_r) !== "undefined" || this.test_after.ta4ctr_ip_r !== null || this.test_after.ta4ctr_ip_r !== "") &&
                (typeof (this.test_after.ta4ctr_ip_y) !== "undefined" || this.test_after.ta4ctr_ip_y !== null || this.test_after.ta4ctr_ip_y !== "") &&
                (typeof (this.test_after.ta4ctr_ip_b) !== "undefined" || this.test_after.ta4ctr_ip_b !== null || this.test_after.ta4ctr_ip_b !== "") &&
                (typeof (this.test_after.ta4ctr_is_r) !== "undefined" || this.test_after.ta4ctr_is_r !== null || this.test_after.ta4ctr_is_r !== "") &&
                (typeof (this.test_after.ta4ctr_is_y) !== "undefined" || this.test_after.ta4ctr_is_y !== null || this.test_after.ta4ctr_is_y !== "") &&
                (typeof (this.test_after.ta4ctr_is_b) !== "undefined" || this.test_after.ta4ctr_is_b !== null || this.test_after.ta4ctr_is_b !== "")) {
                // calculate total (Calc. CT Ratio)
                ctrR = Number(this.test_after.ta4ctr_ip_r) / Number(this.test_after.ta4ctr_is_r) * 5;
                ctrY = Number(this.test_after.ta4ctr_ip_y) / Number(this.test_after.ta4ctr_is_y) * 5;
                ctrB = Number(this.test_after.ta4ctr_ip_b) / Number(this.test_after.ta4ctr_is_b) * 5;
                // checking is output is not NaN assign value.
                if (!isNaN(ctrR)) {
                    this.test_after.ta4ctr_ccr_r = Number(ctrR).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_ccr_r = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctrY)) {
                    this.test_after.ta4ctr_ccr_y = Number(ctrY).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_ccr_y = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctrB)) {
                    this.test_after.ta4ctr_ccr_b = Number(ctrB).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_ccr_b = "-";
                }
                // calculate total (% CT Loaded) **need to double check formula (CT Prim Amps not sure which one..)
                if (typeof (this.ct_ratio) !== "undefined" && this.ct_ratio !== null && this.ct_ratio !== "") {
                    ctlR = Number(this.test_after.ta4ctr_ip_r) / Number(this.ct_ratio) * 100;
                    ctlY = Number(this.test_after.ta4ctr_ip_y) / Number(this.ct_ratio) * 100;
                    ctlB = Number(this.test_after.ta4ctr_ip_b) / Number(this.ct_ratio) * 100;
                }
                else {
                    ctlR = Number(this.test_after.ta4ctr_ip_r) / Number(this.test_after.ta4ctr_ct_ratio) * 100;
                    ctlY = Number(this.test_after.ta4ctr_ip_y) / Number(this.test_after.ta4ctr_ct_ratio) * 100;
                    ctlB = Number(this.test_after.ta4ctr_ip_b) / Number(this.test_after.ta4ctr_ct_ratio) * 100;
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctlR)) {
                    this.test_after.ta4ctr_cl_r = Number(ctlR).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_cl_r = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctlY)) {
                    this.test_after.ta4ctr_cl_y = Number(ctlY).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_cl_y = "-";
                }
                // checking is output is not NaN assign value.
                if (!isNaN(ctlB)) {
                    this.test_after.ta4ctr_cl_b = Number(ctlB).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_cl_b = "-";
                }
                // calculate average (Calc. CT Ratio)
                ctrAvg = (Number(this.test_after.ta4ctr_ccr_r) + Number(this.test_after.ta4ctr_ccr_y) + Number(this.test_after.ta4ctr_ccr_b)) / 3;
                // checking is output is not NaN assign value.
                if (!isNaN(ctrAvg)) {
                    this.test_after.ta4ctr_avg_ccr = Number(ctrAvg).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_avg_ccr = "-";
                }
                // calculate average (% CT Loaded)
                ctlAvg = (Number(this.test_after.ta4ctr_cl_r) + Number(this.test_after.ta4ctr_cl_y) + Number(this.test_after.ta4ctr_cl_b)) / 3;
                // checking is output is not NaN assign value.
                if (!isNaN(ctlAvg)) {
                    this.test_after.ta4ctr_avg_cl = Number(ctlAvg).toFixed(2);
                }
                else {
                    this.test_after.ta4ctr_avg_cl = "-";
                }
            }
            console.log("CT Ratio: R - " + this.test_after.ta4ctr_ccr_r + ", Y - " + this.test_after.ta4ctr_ccr_y + ", B - " + this.test_after.ta4ctr_ccr_b);
            console.log("CT Loaded: R - " + this.test_after.ta4ctr_cl_r + ", Y - " + this.test_after.ta4ctr_cl_y + ", B - " + this.test_after.ta4ctr_cl_b);
            console.log("Average: CT Ratio - " + this.test_after.ta4ctr_avg_ccr + ", CT loaded - " + this.test_after.ta4ctr_avg_cl);
        }
    };
    /**
     * Reason   : Method to calculate I Primary TNB Meter..
     * Created  : Alif (28-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateIprimaryTnbMeter = function (type) {
        console.log("auto calculate i primary tnb meter..");
        if (type === "before") {
            // Variables
            var ip_mt_r, ip_mt_y, ip_mt_b;
            if ((typeof (this.test_before.ta4hspe_mt_ratio_0) !== "undefined" || this.test_before.ta4hspe_mt_ratio_0 !== null || this.test_before.ta4hspe_mt_ratio_0 !== "") &&
                (typeof (this.test_before.ta4hspe_mt_ratio_1) !== "undefined" || this.test_before.ta4hspe_mt_ratio_1 !== null || this.test_before.ta4hspe_mt_ratio_1 !== "")) {
                this.test_before.ta4hspe_mt_ratio = Number(this.test_before.ta4hspe_mt_ratio_0) / Number(this.test_before.ta4hspe_mt_ratio_1);
            }
            if (this.test_before.ta4hspe_mt_ratio_0 === "") {
                this.test_before.ta4hspe_mt_ratio_0 = "-";
            }
            if (this.test_before.ta4hspe_mt_ratio_1 === "") {
                this.test_before.ta4hspe_mt_ratio_1 = "-";
            }
            if ((typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" || this.test_before.ta4hspe_is_mt_r !== null || this.test_before.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" || this.test_before.ta4hspe_is_mt_y !== null || this.test_before.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" || this.test_before.ta4hspe_ip_mt_r !== null || this.test_before.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" || this.test_before.ta4hspe_ip_mt_y !== null || this.test_before.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" || this.test_before.ta4hspe_ip_mt_b !== null || this.test_before.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_before.ta4hspe_mt_ratio) !== "undefined" || this.test_before.ta4hspe_mt_ratio !== null || this.test_before.ta4hspe_mt_ratio !== "")) {
                // calculate i primary tnb meter
                ip_mt_r = parseFloat(this.test_before.ta4hspe_is_mt_r) * parseFloat(this.test_before.ta4hspe_mt_ratio);
                ip_mt_y = parseFloat(this.test_before.ta4hspe_is_mt_y) * parseFloat(this.test_before.ta4hspe_mt_ratio);
                ip_mt_b = parseFloat(this.test_before.ta4hspe_is_mt_b) * parseFloat(this.test_before.ta4hspe_mt_ratio);
                if (this.test_before.ta4hspe_is_mt_r === "") {
                    this.test_before.ta4hspe_is_mt_r = "-";
                }
                if (this.test_before.ta4hspe_is_mt_y === "") {
                    this.test_before.ta4hspe_is_mt_y = "-";
                }
                if (this.test_before.ta4hspe_is_mt_b === "") {
                    this.test_before.ta4hspe_is_mt_b = "-";
                }
                if (!isNaN(ip_mt_r)) {
                    this.test_before.ta4hspe_ip_mt_r = Number(ip_mt_r).toFixed(2);
                }
                else {
                    this.test_before.ta4hspe_ip_mt_r = "-";
                }
                if (!isNaN(ip_mt_y)) {
                    this.test_before.ta4hspe_ip_mt_y = Number(ip_mt_y).toFixed(2);
                }
                else {
                    this.test_before.ta4hspe_ip_mt_y = "-";
                }
                if (!isNaN(ip_mt_b)) {
                    this.test_before.ta4hspe_ip_mt_b = Number(ip_mt_b).toFixed(2);
                }
                else {
                    this.test_before.ta4hspe_ip_mt_b = "-";
                }
                // Auto Calculate Consumer Incomer
                this.autoCalculateDifferentConsumer(type);
                // Auto Calculate TNB Outgoing VCB (if applicable)
                this.autoCalculateDifferentVcb(type);
            }
            console.log("TNB Meter (I Primary): R - " + this.test_before.ta4hspe_ip_mt_r + ", Y - " + this.test_before.ta4hspe_ip_mt_y + ",  B - " + this.test_before.ta4hspe_ip_mt_b);
        }
        else {
            // Variables
            var ip_mt_r, ip_mt_y, ip_mt_b;
            if ((typeof (this.test_after.ta4hspe_mt_ratio_0) !== "undefined" || this.test_after.ta4hspe_mt_ratio_0 !== null || this.test_after.ta4hspe_mt_ratio_0 !== "") &&
                (typeof (this.test_after.ta4hspe_mt_ratio_1) !== "undefined" || this.test_after.ta4hspe_mt_ratio_1 !== null || this.test_after.ta4hspe_mt_ratio_1 !== "")) {
                this.test_after.ta4hspe_mt_ratio = Number(this.test_after.ta4hspe_mt_ratio_0) / Number(this.test_after.ta4hspe_mt_ratio_1);
            }
            if (this.test_after.ta4hspe_mt_ratio_0 === "") {
                this.test_after.ta4hspe_mt_ratio_0 = "-";
            }
            if (this.test_after.ta4hspe_mt_ratio_1 === "") {
                this.test_after.ta4hspe_mt_ratio_1 = "-";
            }
            if ((typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" || this.test_after.ta4hspe_is_mt_r !== null || this.test_after.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" || this.test_after.ta4hspe_is_mt_y !== null || this.test_after.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" || this.test_after.ta4hspe_ip_mt_r !== null || this.test_after.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" || this.test_after.ta4hspe_ip_mt_y !== null || this.test_after.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" || this.test_after.ta4hspe_ip_mt_b !== null || this.test_after.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_mt_ratio) !== "undefined" || this.test_after.ta4hspe_mt_ratio !== null || this.test_after.ta4hspe_mt_ratio !== "")) {
                // calculate i primary tnb meter
                ip_mt_r = parseFloat(this.test_after.ta4hspe_is_mt_r) * parseFloat(this.test_after.ta4hspe_mt_ratio);
                ip_mt_y = parseFloat(this.test_after.ta4hspe_is_mt_y) * parseFloat(this.test_after.ta4hspe_mt_ratio);
                ip_mt_b = parseFloat(this.test_after.ta4hspe_is_mt_b) * parseFloat(this.test_after.ta4hspe_mt_ratio);
                if (this.test_after.ta4hspe_is_mt_r === "") {
                    this.test_after.ta4hspe_is_mt_r = "-";
                }
                if (this.test_after.ta4hspe_is_mt_y === "") {
                    this.test_after.ta4hspe_is_mt_y = "-";
                }
                if (this.test_after.ta4hspe_is_mt_b === "") {
                    this.test_after.ta4hspe_is_mt_b = "-";
                }
                if (!isNaN(ip_mt_r)) {
                    this.test_after.ta4hspe_ip_mt_r = Number(ip_mt_r).toFixed(2);
                }
                else {
                    this.test_after.ta4hspe_ip_mt_r = "-";
                }
                if (!isNaN(ip_mt_y)) {
                    this.test_after.ta4hspe_ip_mt_y = Number(ip_mt_y).toFixed(2);
                }
                else {
                    this.test_after.ta4hspe_ip_mt_y = "-";
                }
                if (!isNaN(ip_mt_b)) {
                    this.test_after.ta4hspe_ip_mt_b = Number(ip_mt_b).toFixed(2);
                }
                else {
                    this.test_after.ta4hspe_ip_mt_b = "-";
                }
                // Auto Calculate Consumer Incomer
                this.autoCalculateDifferentConsumer(type);
                // Auto Calculate TNB Outgoing VCB (if applicable)
                this.autoCalculateDifferentVcb(type);
            }
            console.log("TNB Meter (I Primary): R - " + this.test_after.ta4hspe_ip_mt_r + ", Y - " + this.test_after.ta4hspe_ip_mt_y + ",  B - " + this.test_after.ta4hspe_ip_mt_b);
        }
    };
    /**
     * Reason   : Method to calculate I Primary and % Diff for Comsumer Incomer..
     * Created  : Alif (22-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateDifferentConsumer = function (type) {
        console.log("auto calculate % diff for consumer incomer..");
        if (type === "before") {
            // Variables
            var diff_ci_r, diff_ci_y, diff_ci_b;
            var ip_ci_r, ip_ci_y, ip_ci_b;
            // CT Ratio
            if ((typeof (this.test_before.ta4hspe_ci_ratio_0) !== "undefined" || this.test_before.ta4hspe_ci_ratio_0 !== null || this.test_before.ta4hspe_ci_ratio_0 !== "") &&
                (typeof (this.test_before.ta4hspe_ci_ratio_1) !== "undefined" || this.test_before.ta4hspe_ci_ratio_1 !== null || this.test_before.ta4hspe_ci_ratio_1 !== "")) {
                this.test_before.ta4hspe_ci_ratio = Number(this.test_before.ta4hspe_ci_ratio_0) / Number(this.test_before.ta4hspe_ci_ratio_1);
            }
            if (this.test_before.ta4hspe_ci_ratio_0 === "") {
                this.test_before.ta4hspe_ci_ratio_0 = "-";
            }
            if (this.test_before.ta4hspe_ci_ratio_1 === "") {
                this.test_before.ta4hspe_ci_ratio_1 = "-";
            }
            if ((typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" || this.test_before.ta4hspe_is_mt_r !== null || this.test_before.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" || this.test_before.ta4hspe_is_mt_y !== null || this.test_before.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" || this.test_before.ta4hspe_ip_mt_r !== null || this.test_before.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" || this.test_before.ta4hspe_ip_mt_y !== null || this.test_before.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" || this.test_before.ta4hspe_ip_mt_b !== null || this.test_before.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_before.ta4hspe_is_ci_r) !== "undefined" || this.test_before.ta4hspe_is_ci_r !== null || this.test_before.ta4hspe_is_ci_r !== "") &&
                (typeof (this.test_before.ta4hspe_is_ci_y) !== "undefined" || this.test_before.ta4hspe_is_ci_y !== null || this.test_before.ta4hspe_is_ci_y !== "") &&
                (typeof (this.test_before.ta4hspe_is_ci_b) !== "undefined" || this.test_before.ta4hspe_is_ci_b !== null || this.test_before.ta4hspe_is_ci_b !== "") &&
                (typeof (this.test_before.ta4hspe_ip_ci_r) !== "undefined" || this.test_before.ta4hspe_ip_ci_r !== null || this.test_before.ta4hspe_ip_ci_r !== "") &&
                (typeof (this.test_before.ta4hspe_ip_ci_y) !== "undefined" || this.test_before.ta4hspe_ip_ci_y !== null || this.test_before.ta4hspe_ip_ci_y !== "") &&
                (typeof (this.test_before.ta4hspe_ip_ci_b) !== "undefined" || this.test_before.ta4hspe_ip_ci_b !== null || this.test_before.ta4hspe_ip_ci_b !== "") &&
                (typeof (this.test_before.ta4hspe_ci_ratio) !== "undefined" || this.test_before.ta4hspe_ci_ratio !== null || this.test_before.ta4hspe_ci_ratio !== "")) {
                // calculate i primary consumer incomer
                ip_ci_r = parseFloat(this.test_before.ta4hspe_is_ci_r) * parseFloat(this.test_before.ta4hspe_ci_ratio);
                ip_ci_y = parseFloat(this.test_before.ta4hspe_is_ci_y) * parseFloat(this.test_before.ta4hspe_ci_ratio);
                ip_ci_b = parseFloat(this.test_before.ta4hspe_is_ci_b) * parseFloat(this.test_before.ta4hspe_ci_ratio);
                if (this.test_before.ta4hspe_is_ci_r === "") {
                    this.test_before.ta4hspe_is_ci_r = "-";
                }
                if (this.test_before.ta4hspe_is_ci_y === "") {
                    this.test_before.ta4hspe_is_ci_y = "-";
                }
                if (this.test_before.ta4hspe_is_ci_b === "") {
                    this.test_before.ta4hspe_is_ci_b = "-";
                }
                if (!isNaN(ip_ci_r)) {
                    if (ip_ci_r !== Infinity) {
                        this.test_before.ta4hspe_ip_ci_r = Number(ip_ci_r).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_ip_ci_r = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_ip_ci_r = "-";
                }
                if (!isNaN(ip_ci_y)) {
                    if (ip_ci_y !== Infinity) {
                        this.test_before.ta4hspe_ip_ci_y = Number(ip_ci_y).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_ip_ci_y = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_ip_ci_y = "-";
                }
                if (!isNaN(ip_ci_b)) {
                    if (ip_ci_b !== Infinity) {
                        this.test_before.ta4hspe_ip_ci_b = Number(ip_ci_b).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_ip_ci_b = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_ip_ci_b = "-";
                }
                // calculate % diff consumer incomer
                diff_ci_r = (Number(this.test_before.ta4hspe_ip_mt_r) - Number(this.test_before.ta4hspe_ip_ci_r)) / Number(this.test_before.ta4hspe_ip_ci_r) * 100;
                diff_ci_y = (Number(this.test_before.ta4hspe_ip_mt_y) - Number(this.test_before.ta4hspe_ip_ci_y)) / Number(this.test_before.ta4hspe_ip_ci_y) * 100;
                diff_ci_b = (Number(this.test_before.ta4hspe_ip_mt_b) - Number(this.test_before.ta4hspe_ip_ci_b)) / Number(this.test_before.ta4hspe_ip_ci_b) * 100;
                if (!isNaN(diff_ci_r)) {
                    if (diff_ci_r !== Infinity) {
                        this.test_before.ta4hspe_diff_ci_r = Number(diff_ci_r).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_diff_ci_r = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_diff_ci_r = "-";
                }
                if (!isNaN(diff_ci_y)) {
                    if (diff_ci_y !== Infinity) {
                        this.test_before.ta4hspe_diff_ci_y = Number(diff_ci_y).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_diff_ci_y = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_diff_ci_y = "-";
                }
                if (!isNaN(diff_ci_b)) {
                    if (diff_ci_b !== Infinity) {
                        this.test_before.ta4hspe_diff_ci_b = Number(diff_ci_b).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_diff_ci_b = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_diff_ci_b = "-";
                }
                console.log("% Diff (Consumer Incomer) (R): " + diff_ci_r + ", (Y) : " + diff_ci_y + ", (B) : " + diff_ci_b);
            }
        }
        else {
            // Variables
            var diff_ci_r, diff_ci_y, diff_ci_b;
            var ip_ci_r, ip_ci_y, ip_ci_b;
            // CT Ratio
            if ((typeof (this.test_after.ta4hspe_ci_ratio_0) !== "undefined" || this.test_after.ta4hspe_ci_ratio_0 !== null || this.test_after.ta4hspe_ci_ratio_0 !== "") &&
                (typeof (this.test_after.ta4hspe_ci_ratio_1) !== "undefined" || this.test_after.ta4hspe_ci_ratio_1 !== null || this.test_after.ta4hspe_ci_ratio_1 !== "")) {
                this.test_after.ta4hspe_ci_ratio = Number(this.test_after.ta4hspe_ci_ratio_0) / Number(this.test_after.ta4hspe_ci_ratio_1);
            }
            if (this.test_after.ta4hspe_ci_ratio_0 === "") {
                this.test_after.ta4hspe_ci_ratio_0 = "-";
            }
            if (this.test_after.ta4hspe_ci_ratio_1 === "") {
                this.test_after.ta4hspe_ci_ratio_1 = "-";
            }
            if ((typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" || this.test_after.ta4hspe_is_mt_r !== null || this.test_after.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" || this.test_after.ta4hspe_is_mt_y !== null || this.test_after.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" || this.test_after.ta4hspe_ip_mt_r !== null || this.test_after.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" || this.test_after.ta4hspe_ip_mt_y !== null || this.test_after.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_is_ci_r) !== "undefined" || this.test_after.ta4hspe_is_ci_r !== null || this.test_after.ta4hspe_is_ci_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_ci_y) !== "undefined" || this.test_after.ta4hspe_is_ci_y !== null || this.test_after.ta4hspe_is_ci_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_ci_b) !== "undefined" || this.test_after.ta4hspe_is_ci_b !== null || this.test_after.ta4hspe_is_ci_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ci_r) !== "undefined" || this.test_after.ta4hspe_ip_ci_r !== null || this.test_after.ta4hspe_ip_ci_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ci_y) !== "undefined" || this.test_after.ta4hspe_ip_ci_y !== null || this.test_after.ta4hspe_ip_ci_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ci_b) !== "undefined" || this.test_after.ta4hspe_ip_ci_b !== null || this.test_after.ta4hspe_ip_ci_b !== "") &&
                (typeof (this.test_after.ta4hspe_ci_ratio) !== "undefined" || this.test_after.ta4hspe_ci_ratio !== null || this.test_after.ta4hspe_ci_ratio !== "")) {
                // calculate i primary consumer incomer
                ip_ci_r = parseFloat(this.test_after.ta4hspe_is_ci_r) * parseFloat(this.test_after.ta4hspe_ci_ratio);
                ip_ci_y = parseFloat(this.test_after.ta4hspe_is_ci_y) * parseFloat(this.test_after.ta4hspe_ci_ratio);
                ip_ci_b = parseFloat(this.test_after.ta4hspe_is_ci_b) * parseFloat(this.test_after.ta4hspe_ci_ratio);
                if (this.test_after.ta4hspe_is_ci_r === "") {
                    this.test_after.ta4hspe_is_ci_r = "-";
                }
                if (this.test_after.ta4hspe_is_ci_y === "") {
                    this.test_after.ta4hspe_is_ci_y = "-";
                }
                if (this.test_after.ta4hspe_is_ci_b === "") {
                    this.test_after.ta4hspe_is_ci_b = "-";
                }
                if (!isNaN(ip_ci_r)) {
                    if (ip_ci_r !== Infinity) {
                        this.test_after.ta4hspe_ip_ci_r = Number(ip_ci_r).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_ip_ci_r = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_ip_ci_r = "-";
                }
                if (!isNaN(ip_ci_y)) {
                    if (ip_ci_y !== Infinity) {
                        this.test_after.ta4hspe_ip_ci_y = Number(ip_ci_y).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_ip_ci_y = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_ip_ci_y = "-";
                }
                if (!isNaN(ip_ci_b)) {
                    if (ip_ci_b !== Infinity) {
                        this.test_after.ta4hspe_ip_ci_b = Number(ip_ci_b).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_ip_ci_b = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_ip_ci_b = "-";
                }
                // calculate % diff consumer incomer
                diff_ci_r = (Number(this.test_after.ta4hspe_ip_mt_r) - Number(this.test_after.ta4hspe_ip_ci_r)) / Number(this.test_after.ta4hspe_ip_ci_r) * 100;
                diff_ci_y = (Number(this.test_after.ta4hspe_ip_mt_y) - Number(this.test_after.ta4hspe_ip_ci_y)) / Number(this.test_after.ta4hspe_ip_ci_y) * 100;
                diff_ci_b = (Number(this.test_after.ta4hspe_ip_mt_b) - Number(this.test_after.ta4hspe_ip_ci_b)) / Number(this.test_after.ta4hspe_ip_ci_b) * 100;
                if (!isNaN(diff_ci_r)) {
                    if (diff_ci_r !== Infinity) {
                        this.test_after.ta4hspe_diff_ci_r = Number(diff_ci_r).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_diff_ci_r = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_diff_ci_r = "-";
                }
                if (!isNaN(diff_ci_y)) {
                    if (diff_ci_y !== Infinity) {
                        this.test_after.ta4hspe_diff_ci_y = Number(diff_ci_y).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_diff_ci_y = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_diff_ci_y = "-";
                }
                if (!isNaN(diff_ci_b)) {
                    if (diff_ci_b !== Infinity) {
                        this.test_after.ta4hspe_diff_ci_b = Number(diff_ci_b).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_diff_ci_b = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_diff_ci_b = "-";
                }
                console.log("% Diff (Consumer Incomer) (R): " + diff_ci_r + ", (Y) : " + diff_ci_y + ", (B) : " + diff_ci_b);
            }
        }
    };
    /**
     * Reason   : Method to calculate I Primary and % Diff for TNB Outgoing VCB (if available)..
     * Created  : Alif (22-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateDifferentVcb = function (type) {
        console.log("auto calculate % diff for tnb outgoing vcb..");
        if (type === "before") {
            // Variables
            var diff_ov_r, diff_ov_y, diff_ov_b;
            var ip_ov_r, ip_ov_y, ip_ov_b;
            if ((typeof (this.test_before.ta4hspe_ov_ratio_0) !== "undefined" || this.test_before.ta4hspe_ov_ratio_0 !== null || this.test_before.ta4hspe_ov_ratio_0 !== "") &&
                (typeof (this.test_before.ta4hspe_ov_ratio_1) !== "undefined" || this.test_before.ta4hspe_ov_ratio_1 !== null || this.test_before.ta4hspe_ov_ratio_1 !== "")) {
                this.test_before.ta4hspe_ov_ratio = Number(this.test_before.ta4hspe_ov_ratio_0) / Number(this.test_before.ta4hspe_ov_ratio_1);
            }
            if (this.test_before.ta4hspe_ov_ratio_0 === "") {
                this.test_before.ta4hspe_ov_ratio_0 = "-";
            }
            if (this.test_before.ta4hspe_ov_ratio_1 === "") {
                this.test_before.ta4hspe_ov_ratio_1 = "-";
            }
            if ((typeof (this.test_before.ta4hspe_is_mt_r) !== "undefined" || this.test_before.ta4hspe_is_mt_r !== null || this.test_before.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_before.ta4hspe_is_mt_y) !== "undefined" || this.test_before.ta4hspe_is_mt_y !== null || this.test_before.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_before.ta4hspe_is_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_r) !== "undefined" || this.test_before.ta4hspe_ip_mt_r !== null || this.test_before.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_y) !== "undefined" || this.test_before.ta4hspe_ip_mt_y !== null || this.test_before.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_before.ta4hspe_ip_mt_b) !== "undefined" || this.test_before.ta4hspe_is_mt_b !== null || this.test_before.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_before.ta4hspe_is_ov_r) !== "undefined" || this.test_before.ta4hspe_is_ov_r !== null || this.test_before.ta4hspe_is_ov_r !== "") &&
                (typeof (this.test_before.ta4hspe_is_ov_y) !== "undefined" || this.test_before.ta4hspe_is_ov_y !== null || this.test_before.ta4hspe_is_ov_y !== "") &&
                (typeof (this.test_before.ta4hspe_is_ov_b) !== "undefined" || this.test_before.ta4hspe_is_ov_b !== null || this.test_before.ta4hspe_is_ov_b !== "") &&
                (typeof (this.test_before.ta4hspe_ip_ov_r) !== "undefined" || this.test_before.ta4hspe_ip_ov_r !== null || this.test_before.ta4hspe_ip_ov_r !== "") &&
                (typeof (this.test_before.ta4hspe_ip_ov_y) !== "undefined" || this.test_before.ta4hspe_ip_ov_y !== null || this.test_before.ta4hspe_ip_ov_y !== "") &&
                (typeof (this.test_before.ta4hspe_ip_ov_b) !== "undefined" || this.test_before.ta4hspe_ip_ov_b !== null || this.test_before.ta4hspe_ip_ov_b !== "") &&
                (typeof (this.test_before.ta4hspe_ov_ratio) !== "undefined" || this.test_before.ta4hspe_ov_ratio !== null || this.test_before.ta4hspe_ov_ratio !== "")) {
                // calculate i primary consumer incomer
                ip_ov_r = parseFloat(this.test_before.ta4hspe_is_ov_r) * parseFloat(this.test_before.ta4hspe_ov_ratio);
                ip_ov_y = parseFloat(this.test_before.ta4hspe_is_ov_y) * parseFloat(this.test_before.ta4hspe_ov_ratio);
                ip_ov_b = parseFloat(this.test_before.ta4hspe_is_ov_b) * parseFloat(this.test_before.ta4hspe_ov_ratio);
                if (this.test_before.ta4hspe_is_ov_r === "") {
                    this.test_before.ta4hspe_is_ov_r = "-";
                }
                if (this.test_before.ta4hspe_is_ov_y === "") {
                    this.test_before.ta4hspe_is_ov_y = "-";
                }
                if (this.test_before.ta4hspe_is_ov_b === "") {
                    this.test_before.ta4hspe_is_ov_b = "-";
                }
                if (!isNaN(ip_ov_r)) {
                    if (ip_ov_r !== Infinity) {
                        this.test_before.ta4hspe_ip_ov_r = Number(ip_ov_r).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_ip_ov_r = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_ip_ov_r = "-";
                }
                if (!isNaN(ip_ov_y)) {
                    if (ip_ov_y !== Infinity) {
                        this.test_before.ta4hspe_ip_ov_y = Number(ip_ov_y).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_ip_ov_y = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_ip_ov_y = "-";
                }
                if (!isNaN(ip_ov_b)) {
                    if (ip_ov_b !== Infinity) {
                        this.test_before.ta4hspe_ip_ov_b = Number(ip_ov_b).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_ip_ov_b = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_ip_ov_b = "-";
                }
                // calculate % diff tnb outgoing vcb
                diff_ov_r = (Number(this.test_before.ta4hspe_ip_mt_r) - Number(this.test_before.ta4hspe_ip_ov_r)) / Number(this.test_before.ta4hspe_ip_ov_r) * 100;
                diff_ov_y = (Number(this.test_before.ta4hspe_ip_mt_y) - Number(this.test_before.ta4hspe_ip_ov_y)) / Number(this.test_before.ta4hspe_ip_ov_y) * 100;
                diff_ov_b = (Number(this.test_before.ta4hspe_ip_mt_b) - Number(this.test_before.ta4hspe_ip_ov_b)) / Number(this.test_before.ta4hspe_ip_ov_b) * 100;
                if (!isNaN(diff_ov_r)) {
                    if (diff_ov_r !== Infinity) {
                        this.test_before.ta4hspe_diff_ov_r = Number(diff_ov_r).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_diff_ov_r = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_diff_ov_r = "-";
                }
                if (!isNaN(diff_ov_y)) {
                    if (diff_ov_y !== Infinity) {
                        this.test_before.ta4hspe_diff_ov_y = Number(diff_ov_y).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_diff_ov_y = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_diff_ov_y = "-";
                }
                if (!isNaN(diff_ov_b)) {
                    if (diff_ov_b !== Infinity) {
                        this.test_before.ta4hspe_diff_ov_b = Number(diff_ov_b).toFixed(2);
                    }
                    else {
                        this.test_before.ta4hspe_diff_ov_b = "-";
                    }
                }
                else {
                    this.test_before.ta4hspe_diff_ov_b = "-";
                }
                console.log("% Diff (Outgoing VCB) (R): " + diff_ov_r + ", (Y) : " + diff_ov_y + ", (B) : " + diff_ov_b);
            }
        }
        else {
            // Variables
            var diff_ov_r, diff_ov_y, diff_ov_b;
            var ip_ov_r, ip_ov_y, ip_ov_b;
            if ((typeof (this.test_after.ta4hspe_ov_ratio_0) !== "undefined" || this.test_after.ta4hspe_ov_ratio_0 !== null || this.test_after.ta4hspe_ov_ratio_0 !== "") &&
                (typeof (this.test_after.ta4hspe_ov_ratio_1) !== "undefined" || this.test_after.ta4hspe_ov_ratio_1 !== null || this.test_after.ta4hspe_ov_ratio_1 !== "")) {
                this.test_after.ta4hspe_ov_ratio = Number(this.test_after.ta4hspe_ov_ratio_0) / Number(this.test_after.ta4hspe_ov_ratio_1);
            }
            if (this.test_after.ta4hspe_ov_ratio_0 === "") {
                this.test_after.ta4hspe_ov_ratio_0 = "-";
            }
            if (this.test_after.ta4hspe_ov_ratio_1 === "") {
                this.test_after.ta4hspe_ov_ratio_1 = "-";
            }
            if ((typeof (this.test_after.ta4hspe_is_mt_r) !== "undefined" || this.test_after.ta4hspe_is_mt_r !== null || this.test_after.ta4hspe_is_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_y) !== "undefined" || this.test_after.ta4hspe_is_mt_y !== null || this.test_after.ta4hspe_is_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_is_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_r) !== "undefined" || this.test_after.ta4hspe_ip_mt_r !== null || this.test_after.ta4hspe_ip_mt_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_y) !== "undefined" || this.test_after.ta4hspe_ip_mt_y !== null || this.test_after.ta4hspe_ip_mt_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_mt_b) !== "undefined" || this.test_after.ta4hspe_is_mt_b !== null || this.test_after.ta4hspe_ip_mt_b !== "") &&
                (typeof (this.test_after.ta4hspe_is_ov_r) !== "undefined" || this.test_after.ta4hspe_is_ov_r !== null || this.test_after.ta4hspe_is_ov_r !== "") &&
                (typeof (this.test_after.ta4hspe_is_ov_y) !== "undefined" || this.test_after.ta4hspe_is_ov_y !== null || this.test_after.ta4hspe_is_ov_y !== "") &&
                (typeof (this.test_after.ta4hspe_is_ov_b) !== "undefined" || this.test_after.ta4hspe_is_ov_b !== null || this.test_after.ta4hspe_is_ov_b !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ov_r) !== "undefined" || this.test_after.ta4hspe_ip_ov_r !== null || this.test_after.ta4hspe_ip_ov_r !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ov_y) !== "undefined" || this.test_after.ta4hspe_ip_ov_y !== null || this.test_after.ta4hspe_ip_ov_y !== "") &&
                (typeof (this.test_after.ta4hspe_ip_ov_b) !== "undefined" || this.test_after.ta4hspe_ip_ov_b !== null || this.test_after.ta4hspe_ip_ov_b !== "") &&
                (typeof (this.test_after.ta4hspe_ov_ratio) !== "undefined" || this.test_after.ta4hspe_ov_ratio !== null || this.test_after.ta4hspe_ov_ratio !== "")) {
                // calculate i primary consumer incomer
                ip_ov_r = parseFloat(this.test_after.ta4hspe_is_ov_r) * parseFloat(this.test_after.ta4hspe_ov_ratio);
                ip_ov_y = parseFloat(this.test_after.ta4hspe_is_ov_y) * parseFloat(this.test_after.ta4hspe_ov_ratio);
                ip_ov_b = parseFloat(this.test_after.ta4hspe_is_ov_b) * parseFloat(this.test_after.ta4hspe_ov_ratio);
                if (this.test_after.ta4hspe_is_ov_r === "") {
                    this.test_after.ta4hspe_is_ov_r = "-";
                }
                if (this.test_after.ta4hspe_is_ov_y === "") {
                    this.test_after.ta4hspe_is_ov_y = "-";
                }
                if (this.test_after.ta4hspe_is_ov_b === "") {
                    this.test_after.ta4hspe_is_ov_b = "-";
                }
                if (!isNaN(ip_ov_r)) {
                    if (ip_ov_r !== Infinity) {
                        this.test_after.ta4hspe_ip_ov_r = Number(ip_ov_r).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_ip_ov_r = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_ip_ov_r = "-";
                }
                if (!isNaN(ip_ov_y)) {
                    if (ip_ov_y !== Infinity) {
                        this.test_after.ta4hspe_ip_ov_y = Number(ip_ov_y).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_ip_ov_y = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_ip_ov_y = "-";
                }
                if (!isNaN(ip_ov_b)) {
                    if (ip_ov_b !== Infinity) {
                        this.test_after.ta4hspe_ip_ov_b = Number(ip_ov_b).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_ip_ov_b = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_ip_ov_b = "-";
                }
                // calculate % diff tnb outgoing vcb
                diff_ov_r = (Number(this.test_after.ta4hspe_ip_mt_r) - Number(this.test_after.ta4hspe_ip_ov_r)) / Number(this.test_after.ta4hspe_ip_ov_r) * 100;
                diff_ov_y = (Number(this.test_after.ta4hspe_ip_mt_y) - Number(this.test_after.ta4hspe_ip_ov_y)) / Number(this.test_after.ta4hspe_ip_ov_y) * 100;
                diff_ov_b = (Number(this.test_after.ta4hspe_ip_mt_b) - Number(this.test_after.ta4hspe_ip_ov_b)) / Number(this.test_after.ta4hspe_ip_ov_b) * 100;
                if (!isNaN(diff_ov_r)) {
                    if (diff_ov_r !== Infinity) {
                        this.test_after.ta4hspe_diff_ov_r = Number(diff_ov_r).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_diff_ov_r = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_diff_ov_r = "-";
                }
                if (!isNaN(diff_ov_y)) {
                    if (diff_ov_y !== Infinity) {
                        this.test_after.ta4hspe_diff_ov_y = Number(diff_ov_y).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_diff_ov_y = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_diff_ov_y = "-";
                }
                if (!isNaN(diff_ov_b)) {
                    if (diff_ov_b !== Infinity) {
                        this.test_after.ta4hspe_diff_ov_b = Number(diff_ov_b).toFixed(2);
                    }
                    else {
                        this.test_after.ta4hspe_diff_ov_b = "-";
                    }
                }
                else {
                    this.test_after.ta4hspe_diff_ov_b = "-";
                }
                console.log("% Diff (Outgoing VCB) (R): " + diff_ov_r + ", (Y) : " + diff_ov_y + ", (B) : " + diff_ov_b);
            }
        }
    };
    /**
     * Reason   : Method to calculate LV Amps & HV Equiv Amps & V-Factor at Current Reading Comparison..
     * Created  : Alif (17-01-2019)
     * Edited   : Alif (28-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateLvAmpsHvAmpsVfactorDifferent = function (type, ValueOutput, color) {
        console.log("auto calculate lv amps & hv amps & v-factor at current reading comparison..");
        debugger;
        if (type === "before") {
            // Variables
            var lv_r, lv_y, lv_b;
            var hv_r, hv_y, hv_b;
            var diff_r, diff_y, diff_b;
            var vf;
            switch (color) {
                case "Red": {
                    if (typeof (this.totalLvr) == "undefined" || isNaN(this.totalLvr)) {
                        this.totalLvr = Number(ValueOutput);
                    }
                    else {
                        this.totalLvr = 0;
                        //Red
                        if ((typeof (this.test_before.ta4hsls_test1_r) !== "undefined" && this.test_before.ta4hsls_test1_r !== null)) {
                            this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test1_r);
                        }
                        if ((typeof (this.test_before.ta4hsls_test2_r) !== "undefined" && this.test_before.ta4hsls_test2_r !== null)) {
                            this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test2_r);
                        }
                        if ((typeof (this.test_before.ta4hsls_test3_r) !== "undefined" && this.test_before.ta4hsls_test3_r !== null)) {
                            this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test3_r);
                        }
                        if ((typeof (this.test_before.ta4hsls_test4_r) !== "undefined" && this.test_before.ta4hsls_test4_r !== null)) {
                            this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test4_r);
                        }
                        if ((typeof (this.test_before.ta4hsls_test5_r) !== "undefined" && this.test_before.ta4hsls_test5_r !== null)) {
                            this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test5_r);
                        }
                        if ((typeof (this.test_before.ta4hsls_test6_r) !== "undefined" && this.test_before.ta4hsls_test6_r !== null)) {
                            this.totalLvr = Number(this.totalLvr) + Number(this.test_before.ta4hsls_test6_r);
                        }
                    }
                    break;
                }
                case "Yellow": {
                    if (typeof (this.totalLvy) == "undefined" || isNaN(this.totalLvy)) {
                        this.totalLvy = Number(ValueOutput);
                    }
                    else {
                        this.totalLvy = 0;
                        //Red
                        if ((typeof (this.test_before.ta4hsls_test1_y) !== "undefined" && this.test_before.ta4hsls_test1_y !== null)) {
                            this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test1_y);
                        }
                        if ((typeof (this.test_before.ta4hsls_test2_y) !== "undefined" && this.test_before.ta4hsls_test2_y !== null)) {
                            this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test2_y);
                        }
                        if ((typeof (this.test_before.ta4hsls_test3_y) !== "undefined" && this.test_before.ta4hsls_test3_y !== null)) {
                            this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test3_y);
                        }
                        if ((typeof (this.test_before.ta4hsls_test4_y) !== "undefined" && this.test_before.ta4hsls_test4_y !== null)) {
                            this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test4_y);
                        }
                        if ((typeof (this.test_before.ta4hsls_test5_y) !== "undefined" && this.test_before.ta4hsls_test5_y !== null)) {
                            this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test5_y);
                        }
                        if ((typeof (this.test_before.ta4hsls_test6_y) !== "undefined" && this.test_before.ta4hsls_test6_y !== null)) {
                            this.totalLvy = Number(this.totalLvy) + Number(this.test_before.ta4hsls_test6_y);
                        }
                    }
                    break;
                }
                case "Blue": {
                    if (typeof (this.totalLvb) == "undefined" || isNaN(this.totalLvb)) {
                        this.totalLvb = Number(ValueOutput);
                    }
                    else {
                        this.totalLvb = 0;
                        //Red
                        if ((typeof (this.test_before.ta4hsls_test1_b) !== "undefined" && this.test_before.ta4hsls_test1_b !== null)) {
                            this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test1_b);
                        }
                        if ((typeof (this.test_before.ta4hsls_test2_b) !== "undefined" && this.test_before.ta4hsls_test2_b !== null)) {
                            this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test2_b);
                        }
                        if ((typeof (this.test_before.ta4hsls_test3_b) !== "undefined" && this.test_before.ta4hsls_test3_b !== null)) {
                            this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test3_b);
                        }
                        if ((typeof (this.test_before.ta4hsls_test4_b) !== "undefined" && this.test_before.ta4hsls_test4_b !== null)) {
                            this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test4_b);
                        }
                        if ((typeof (this.test_before.ta4hsls_test5_b) !== "undefined" && this.test_before.ta4hsls_test5_b !== null)) {
                            this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test5_b);
                        }
                        if ((typeof (this.test_before.ta4hsls_test6_b) !== "undefined" && this.test_before.ta4hsls_test6_b !== null)) {
                            this.totalLvb = Number(this.totalLvb) + Number(this.test_before.ta4hsls_test6_b);
                        }
                    }
                    break;
                }
            }
            /*   if (
                (typeof (this.test_before.ta4hsls_test1_r) !== "undefined" || this.test_before.ta4hsls_test1_r !== null || this.test_before.ta4hsls_test1_r !== "") &&
                (typeof (this.test_before.ta4hsls_test2_r) !== "undefined" || this.test_before.ta4hsls_test2_r !== null || this.test_before.ta4hsls_test2_r !== "") &&
                (typeof (this.test_before.ta4hsls_test3_r) !== "undefined" || this.test_before.ta4hsls_test3_r !== null || this.test_before.ta4hsls_test3_r !== "") &&
                (typeof (this.test_before.ta4hsls_test4_r) !== "undefined" || this.test_before.ta4hsls_test4_r !== null || this.test_before.ta4hsls_test4_r !== "") &&
                (typeof (this.test_before.ta4hsls_test5_r) !== "undefined" || this.test_before.ta4hsls_test5_r !== null || this.test_before.ta4hsls_test5_r !== "") &&
                (typeof (this.test_before.ta4hsls_test6_r) !== "undefined" || this.test_before.ta4hsls_test6_r !== null || this.test_before.ta4hsls_test6_r !== "") &&
        
                (typeof (this.test_before.ta4hsls_test1_y) !== "undefined" || this.test_before.ta4hsls_test1_y !== null || this.test_before.ta4hsls_test1_y !== "") &&
                (typeof (this.test_before.ta4hsls_test2_y) !== "undefined" || this.test_before.ta4hsls_test2_y !== null || this.test_before.ta4hsls_test2_y !== "") &&
                (typeof (this.test_before.ta4hsls_test3_y) !== "undefined" || this.test_before.ta4hsls_test3_y !== null || this.test_before.ta4hsls_test3_y !== "") &&
                (typeof (this.test_before.ta4hsls_test4_y) !== "undefined" || this.test_before.ta4hsls_test4_y !== null || this.test_before.ta4hsls_test4_y !== "") &&
                (typeof (this.test_before.ta4hsls_test5_y) !== "undefined" || this.test_before.ta4hsls_test5_y !== null || this.test_before.ta4hsls_test5_y !== "") &&
                (typeof (this.test_before.ta4hsls_test6_y) !== "undefined" || this.test_before.ta4hsls_test6_y !== null || this.test_before.ta4hsls_test6_y !== "") &&
        
                (typeof (this.test_before.ta4hsls_test1_b) !== "undefined" || this.test_before.ta4hsls_test1_b !== null || this.test_before.ta4hsls_test1_b !== "") &&
                (typeof (this.test_before.ta4hsls_test2_b) !== "undefined" || this.test_before.ta4hsls_test2_b !== null || this.test_before.ta4hsls_test2_b !== "") &&
                (typeof (this.test_before.ta4hsls_test3_b) !== "undefined" || this.test_before.ta4hsls_test3_b !== null || this.test_before.ta4hsls_test3_b !== "") &&
                (typeof (this.test_before.ta4hsls_test4_b) !== "undefined" || this.test_before.ta4hsls_test4_b !== null || this.test_before.ta4hsls_test4_b !== "") &&
                (typeof (this.test_before.ta4hsls_test5_b) !== "undefined" || this.test_before.ta4hsls_test5_b !== null || this.test_before.ta4hsls_test5_b !== "") &&
                (typeof (this.test_before.ta4hsls_test6_b) !== "undefined" || this.test_before.ta4hsls_test6_b !== null || this.test_before.ta4hsls_test6_b !== "")
              ) */
            // calculate lv amps
            lv_r = this.totalLvr;
            lv_y = this.totalLvy;
            lv_b = this.totalLvb;
            if ((typeof (this.test_before.ta4hsls_v_lv) !== "undefined" || this.test_before.ta4hsls_v_lv !== null || this.test_before.ta4hsls_v_lv !== "") &&
                (typeof (this.test_before.ta4hsls_v_hv) !== "undefined" || this.test_before.ta4hsls_v_hv !== null || this.test_before.ta4hsls_v_hv !== "")) {
                // calculate v-factor
                vf = Number(this.test_before.ta4hsls_v_lv) / Number(this.test_before.ta4hsls_v_hv);
                // calculate hv amps
                hv_r = Number(lv_r) * vf;
                hv_y = Number(lv_y) * vf;
                hv_b = Number(lv_b) * vf;
                if (!isNaN(vf)) {
                    this.test_before.ta4hsls_v_f = Number(vf).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_v_f = "-";
                }
                if (!isNaN(hv_r)) {
                    this.test_before.ta4hsls_ha_r = Number(hv_r).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_ha_r = "-";
                }
                if (!isNaN(hv_y)) {
                    this.test_before.ta4hsls_ha_y = Number(hv_y).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_ha_y = "-";
                }
                if (!isNaN(hv_b)) {
                    this.test_before.ta4hsls_ha_b = Number(hv_b).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_ha_b = "-";
                }
                // calculate different
                diff_r = (Number(this.test_before.ta4hsls_mpa_r) - Number(hv_r)) / Number(hv_r) * 100;
                diff_y = (Number(this.test_before.ta4hsls_mpa_y) - Number(hv_y)) / Number(hv_y) * 100;
                diff_b = (Number(this.test_before.ta4hsls_mpa_b) - Number(hv_b)) / Number(hv_b) * 100;
                if (!isNaN(diff_r)) {
                    this.test_before.ta4hsls_dma_r = Number(diff_r).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_dma_r = "-";
                }
                if (!isNaN(diff_y)) {
                    this.test_before.ta4hsls_dma_y = Number(diff_y).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_dma_y = "-";
                }
                if (!isNaN(diff_b)) {
                    this.test_before.ta4hsls_dma_b = Number(diff_b).toFixed(2);
                }
                else {
                    this.test_before.ta4hsls_dma_b = "-";
                }
            }
            if (!isNaN(lv_r)) {
                this.test_before.ta4hsls_la_r = Number(lv_r).toFixed(2);
            }
            else {
                this.test_before.ta4hsls_la_r = "-";
            }
            if (!isNaN(lv_y)) {
                this.test_before.ta4hsls_la_y = Number(lv_y).toFixed(2);
            }
            else {
                this.test_before.ta4hsls_la_y = "-";
            }
            if (!isNaN(lv_b)) {
                this.test_before.ta4hsls_la_b = Number(lv_b).toFixed(2);
            }
            else {
                this.test_before.ta4hsls_la_b = "-";
            }
            console.log("V - Factor : " + this.test_before.ta4hsls_v_f);
            console.log("LV Amps: R - " + this.test_before.ta4hsls_la_r + ", Y - " + this.test_before.ta4hsls_la_y + ", B - " + this.test_before.ta4hsls_la_b);
            console.log("HV Equiv Amps: R - " + this.test_before.ta4hsls_ha_r + ", Y - " + this.test_before.ta4hsls_ha_y + ", B - " + this.test_before.ta4hsls_ha_b);
            console.log("% Diff wrt Meter Amps: R - " + this.test_before.ta4hsls_dma_r + ", Y - " + this.test_before.ta4hsls_dma_y + ", B - " + this.test_before.ta4hsls_dma_b);
        }
        else {
            // Variables
            var lv_r = "", lv_y = "", lv_b = "";
            var hv_r, hv_y, hv_b;
            var diff_r, diff_y, diff_b;
            var vf;
            /* if (
              (typeof (this.test_after.ta4hsls_test1_r) !== "undefined" || this.test_after.ta4hsls_test1_r !== null || this.test_after.ta4hsls_test1_r !== "") &&
              (typeof (this.test_after.ta4hsls_test2_r) !== "undefined" || this.test_after.ta4hsls_test2_r !== null || this.test_after.ta4hsls_test2_r !== "") &&
              (typeof (this.test_after.ta4hsls_test3_r) !== "undefined" || this.test_after.ta4hsls_test3_r !== null || this.test_after.ta4hsls_test3_r !== "") &&
              (typeof (this.test_after.ta4hsls_test4_r) !== "undefined" || this.test_after.ta4hsls_test4_r !== null || this.test_after.ta4hsls_test4_r !== "") &&
              (typeof (this.test_after.ta4hsls_test5_r) !== "undefined" || this.test_after.ta4hsls_test5_r !== null || this.test_after.ta4hsls_test5_r !== "") &&
              (typeof (this.test_after.ta4hsls_test6_r) !== "undefined" || this.test_after.ta4hsls_test6_r !== null || this.test_after.ta4hsls_test6_r !== "") &&
       
              (typeof (this.test_after.ta4hsls_test1_y) !== "undefined" || this.test_after.ta4hsls_test1_y !== null || this.test_after.ta4hsls_test1_y !== "") &&
              (typeof (this.test_after.ta4hsls_test2_y) !== "undefined" || this.test_after.ta4hsls_test2_y !== null || this.test_after.ta4hsls_test2_y !== "") &&
              (typeof (this.test_after.ta4hsls_test3_y) !== "undefined" || this.test_after.ta4hsls_test3_y !== null || this.test_after.ta4hsls_test3_y !== "") &&
              (typeof (this.test_after.ta4hsls_test4_y) !== "undefined" || this.test_after.ta4hsls_test4_y !== null || this.test_after.ta4hsls_test4_y !== "") &&
              (typeof (this.test_after.ta4hsls_test5_y) !== "undefined" || this.test_after.ta4hsls_test5_y !== null || this.test_after.ta4hsls_test5_y !== "") &&
              (typeof (this.test_after.ta4hsls_test6_y) !== "undefined" || this.test_after.ta4hsls_test6_y !== null || this.test_after.ta4hsls_test6_y !== "") &&
       
              (typeof (this.test_after.ta4hsls_test1_b) !== "undefined" || this.test_after.ta4hsls_test1_b !== null || this.test_after.ta4hsls_test1_b !== "") &&
              (typeof (this.test_after.ta4hsls_test2_b) !== "undefined" || this.test_after.ta4hsls_test2_b !== null || this.test_after.ta4hsls_test2_b !== "") &&
              (typeof (this.test_after.ta4hsls_test3_b) !== "undefined" || this.test_after.ta4hsls_test3_b !== null || this.test_after.ta4hsls_test3_b !== "") &&
              (typeof (this.test_after.ta4hsls_test4_b) !== "undefined" || this.test_after.ta4hsls_test4_b !== null || this.test_after.ta4hsls_test4_b !== "") &&
              (typeof (this.test_after.ta4hsls_test5_b) !== "undefined" || this.test_after.ta4hsls_test5_b !== null || this.test_after.ta4hsls_test5_b !== "") &&
              (typeof (this.test_after.ta4hsls_test6_b) !== "undefined" || this.test_after.ta4hsls_test6_b !== null || this.test_after.ta4hsls_test6_b !== "")
            ) */
            //Red
            if ((typeof (this.test_after.ta4hsls_test1_r) !== "undefined" && this.test_after.ta4hsls_test1_r !== null)) {
                lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test1_r);
            }
            if ((typeof (this.test_after.ta4hsls_test2_r) !== "undefined" && this.test_after.ta4hsls_test2_r !== null)) {
                lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test2_r);
            }
            if ((typeof (this.test_after.ta4hsls_test3_r) !== "undefined" && this.test_after.ta4hsls_test3_r !== null)) {
                lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test3_r);
            }
            if ((typeof (this.test_after.ta4hsls_test4_r) !== "undefined" && this.test_after.ta4hsls_test4_r !== null)) {
                lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test4_r);
            }
            if ((typeof (this.test_after.ta4hsls_test5_r) !== "undefined" && this.test_after.ta4hsls_test5_r !== null)) {
                lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test5_r);
            }
            if ((typeof (this.test_after.ta4hsls_test6_r) !== "undefined" && this.test_after.ta4hsls_test6_r !== null)) {
                lv_r = Number(lv_r) + Number(this.test_after.ta4hsls_test6_r);
            }
            //Yellow
            if ((typeof (this.test_after.ta4hsls_test1_y) !== "undefined" && this.test_after.ta4hsls_test1_y !== null)) {
                lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test1_y);
            }
            if ((typeof (this.test_after.ta4hsls_test2_y) !== "undefined" && this.test_after.ta4hsls_test2_y !== null)) {
                lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test2_y);
            }
            if ((typeof (this.test_after.ta4hsls_test3_y) !== "undefined" && this.test_after.ta4hsls_test3_y !== null)) {
                lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test3_y);
            }
            if ((typeof (this.test_after.ta4hsls_test4_y) !== "undefined" && this.test_after.ta4hsls_test4_y !== null)) {
                lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test4_y);
            }
            if ((typeof (this.test_after.ta4hsls_test5_y) !== "undefined" && this.test_after.ta4hsls_test5_y !== null)) {
                lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test5_y);
            }
            if ((typeof (this.test_after.ta4hsls_test6_y) !== "undefined" && this.test_after.ta4hsls_test6_y !== null)) {
                lv_y = Number(lv_y) + Number(this.test_after.ta4hsls_test6_y);
            }
            //Blue
            if ((typeof (this.test_after.ta4hsls_test1_b) !== "undefined" && this.test_after.ta4hsls_test1_b !== null)) {
                lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test1_b);
            }
            if ((typeof (this.test_after.ta4hsls_test2_b) !== "undefined" && this.test_after.ta4hsls_test2_b !== null)) {
                lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test2_b);
            }
            if ((typeof (this.test_after.ta4hsls_test3_b) !== "undefined" && this.test_after.ta4hsls_test3_b !== null)) {
                lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test3_b);
            }
            if ((typeof (this.test_after.ta4hsls_test4_b) !== "undefined" && this.test_after.ta4hsls_test4_b !== null)) {
                lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test4_b);
            }
            if ((typeof (this.test_after.ta4hsls_test5_b) !== "undefined" && this.test_after.ta4hsls_test5_b !== null)) {
                lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test5_b);
            }
            if ((typeof (this.test_after.ta4hsls_test6_b) !== "undefined" && this.test_after.ta4hsls_test6_b !== null)) {
                lv_b = Number(lv_b) + Number(this.test_after.ta4hsls_test6_b);
            }
            // calculate lv amps
            /*       lv_r = Number(this.test_after.ta4hsls_test1_r) + Number(this.test_after.ta4hsls_test2_r) + Number(this.test_after.ta4hsls_test3_r) + Number(this.test_after.ta4hsls_test4_r) + Number(this.test_after.ta4hsls_test5_r) + Number(this.test_after.ta4hsls_test6_r);
                  lv_y = Number(this.test_after.ta4hsls_test1_y) + Number(this.test_after.ta4hsls_test2_y) + Number(this.test_after.ta4hsls_test3_y) + Number(this.test_after.ta4hsls_test4_y) + Number(this.test_after.ta4hsls_test5_y) + Number(this.test_after.ta4hsls_test6_y);
                  lv_b = Number(this.test_after.ta4hsls_test1_b) + Number(this.test_after.ta4hsls_test2_b) + Number(this.test_after.ta4hsls_test3_b) + Number(this.test_after.ta4hsls_test4_b) + Number(this.test_after.ta4hsls_test5_b) + Number(this.test_after.ta4hsls_test6_b);
             */
            if ((typeof (this.test_after.ta4hsls_v_lv) !== "undefined" || this.test_after.ta4hsls_v_lv !== null || this.test_after.ta4hsls_v_lv !== "") &&
                (typeof (this.test_after.ta4hsls_v_hv) !== "undefined" || this.test_after.ta4hsls_v_hv !== null || this.test_after.ta4hsls_v_hv !== "")) {
                // calculate v-factor
                vf = Number(this.test_after.ta4hsls_v_lv) / Number(this.test_after.ta4hsls_v_hv);
                // calculate hv amps
                if (lv_r !== "") {
                    hv_r = Number(lv_r) * vf;
                }
                if (lv_y !== "") {
                    hv_y = Number(lv_y) * vf;
                }
                if (lv_b !== "") {
                    hv_b = Number(lv_b) * vf;
                }
                if (!isNaN(vf)) {
                    this.test_after.ta4hsls_v_f = Number(vf).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_v_f = "-";
                }
                if (!isNaN(hv_r) && typeof (hv_r) !== "undefined") {
                    this.test_after.ta4hsls_ha_r = Number(hv_r).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_ha_r = "-";
                }
                if (!isNaN(hv_y) && typeof (hv_y) !== "undefined") {
                    this.test_after.ta4hsls_ha_y = Number(hv_y).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_ha_y = "-";
                }
                if (!isNaN(hv_b) && typeof (hv_b) !== "undefined") {
                    this.test_after.ta4hsls_ha_b = Number(hv_b).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_ha_b = "-";
                }
                // calculate different
                diff_r = (Number(this.test_after.ta4hsls_mpa_r) - Number(hv_r)) / Number(hv_r) * 100;
                diff_y = (Number(this.test_after.ta4hsls_mpa_y) - Number(hv_y)) / Number(hv_y) * 100;
                diff_b = (Number(this.test_after.ta4hsls_mpa_b) - Number(hv_b)) / Number(hv_b) * 100;
                if (!isNaN(diff_r)) {
                    this.test_after.ta4hsls_dma_r = Number(diff_r).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_dma_r = "-";
                }
                if (!isNaN(diff_y)) {
                    this.test_after.ta4hsls_dma_y = Number(diff_y).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_dma_y = "-";
                }
                if (!isNaN(diff_b)) {
                    this.test_after.ta4hsls_dma_b = Number(diff_b).toFixed(2);
                }
                else {
                    this.test_after.ta4hsls_dma_b = "-";
                }
            }
            if (!isNaN(lv_r) && lv_r !== "") {
                this.test_after.ta4hsls_la_r = Number(lv_r).toFixed(2);
            }
            else {
                this.test_after.ta4hsls_la_r = "-";
            }
            if (!isNaN(lv_y) && lv_y !== "") {
                this.test_after.ta4hsls_la_y = Number(lv_y).toFixed(2);
            }
            else {
                this.test_after.ta4hsls_la_y = "-";
            }
            if (!isNaN(lv_b) && lv_b !== "") {
                this.test_after.ta4hsls_la_b = Number(lv_b).toFixed(2);
            }
            else {
                this.test_after.ta4hsls_la_b = "-";
            }
            console.log("V - Factor : " + this.test_after.ta4hsls_v_f);
            console.log("LV Amps: R - " + this.test_after.ta4hsls_la_r + ", Y - " + this.test_after.ta4hsls_la_y + ", B - " + this.test_after.ta4hsls_la_b);
            console.log("HV Equiv Amps: R - " + this.test_after.ta4hsls_ha_r + ", Y - " + this.test_after.ta4hsls_ha_y + ", B - " + this.test_after.ta4hsls_ha_b);
            console.log("% Diff wrt Meter Amps: R - " + this.test_after.ta4hsls_dma_r + ", Y - " + this.test_after.ta4hsls_dma_y + ", B - " + this.test_after.ta4hsls_dma_b);
        }
    };
    /**
     * Reason   : Method to calculate I Primary HV Side (Incomer vs Outgoing)..
     * Created  : Alif (29-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateIprimaryHvSide = function (type) {
        console.log("auto calculate i primary hv side (incomer vs outgoing..");
        debugger;
        if (type === "before") {
            // Variables
            var ip_iha_r, ip_iha_y, ip_iha_b;
            var ip_out1_r, ip_out1_y, ip_out1_b;
            var ip_out2_r, ip_out2_y, ip_out2_b;
            var ip_out3_r, ip_out3_y, ip_out3_b;
            var ip_out4_r, ip_out4_y, ip_out4_b;
            var ip_out5_r, ip_out5_y, ip_out5_b;
            var ip_out6_r, ip_out6_y, ip_out6_b;
            if ((typeof (this.test_before.ta4hsio_ct_iha_0) !== "undefined" || this.test_before.ta4hsio_ct_iha_0 !== null || this.test_before.ta4hsio_ct_iha_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_iha_1) !== "undefined" || this.test_before.ta4hsio_ct_iha_1 !== null || this.test_before.ta4hsio_ct_iha_1 !== "")) {
                this.test_before.ta4hsio_ct_iha = Number(this.test_before.ta4hsio_ct_iha_0) / Number(this.test_before.ta4hsio_ct_iha_1);
            }
            if ((typeof (this.test_before.ta4hsio_ct_out1_0) !== "undefined" || this.test_before.ta4hsio_ct_out1_0 !== null || this.test_before.ta4hsio_ct_out1_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out1_1) !== "undefined" || this.test_before.ta4hsio_ct_out1_1 !== null || this.test_before.ta4hsio_ct_out1_1 !== "")) {
                this.test_before.ta4hsio_ct_out1 = Number(this.test_before.ta4hsio_ct_out1_0) / Number(this.test_before.ta4hsio_ct_out1_1);
            }
            if ((typeof (this.test_before.ta4hsio_ct_out2_0) !== "undefined" || this.test_before.ta4hsio_ct_out2_0 !== null || this.test_before.ta4hsio_ct_out2_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out2_1) !== "undefined" || this.test_before.ta4hsio_ct_out2_1 !== null || this.test_before.ta4hsio_ct_out2_1 !== "")) {
                this.test_before.ta4hsio_ct_out2 = Number(this.test_before.ta4hsio_ct_out2_0) / Number(this.test_before.ta4hsio_ct_out2_1);
            }
            if ((typeof (this.test_before.ta4hsio_ct_out3_0) !== "undefined" || this.test_before.ta4hsio_ct_out3_0 !== null || this.test_before.ta4hsio_ct_out3_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out3_1) !== "undefined" || this.test_before.ta4hsio_ct_out3_1 !== null || this.test_before.ta4hsio_ct_out3_1 !== "")) {
                this.test_before.ta4hsio_ct_out3 = Number(this.test_before.ta4hsio_ct_out3_0) / Number(this.test_before.ta4hsio_ct_out3_1);
            }
            if ((typeof (this.test_before.ta4hsio_ct_out4_0) !== "undefined" || this.test_before.ta4hsio_ct_out4_0 !== null || this.test_before.ta4hsio_ct_out4_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out4_1) !== "undefined" || this.test_before.ta4hsio_ct_out4_1 !== null || this.test_before.ta4hsio_ct_out4_1 !== "")) {
                this.test_before.ta4hsio_ct_out4 = Number(this.test_before.ta4hsio_ct_out4_0) / Number(this.test_before.ta4hsio_ct_out4_1);
            }
            if ((typeof (this.test_before.ta4hsio_ct_out5_0) !== "undefined" || this.test_before.ta4hsio_ct_out5_0 !== null || this.test_before.ta4hsio_ct_out5_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out5_1) !== "undefined" || this.test_before.ta4hsio_ct_out5_1 !== null || this.test_before.ta4hsio_ct_out5_1 !== "")) {
                this.test_before.ta4hsio_ct_out5 = Number(this.test_before.ta4hsio_ct_out5_0) / Number(this.test_before.ta4hsio_ct_out5_1);
            }
            if ((typeof (this.test_before.ta4hsio_ct_out6_0) !== "undefined" || this.test_before.ta4hsio_ct_out6_0 !== null || this.test_before.ta4hsio_ct_out6_0 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out6_1) !== "undefined" || this.test_before.ta4hsio_ct_out6_1 !== null || this.test_before.ta4hsio_ct_out6_1 !== "")) {
                this.test_before.ta4hsio_ct_out6 = Number(this.test_before.ta4hsio_ct_out6_0) / Number(this.test_before.ta4hsio_ct_out6_1);
            }
            if (
            // Incomer (CT Size)
            (typeof (this.test_before.ta4hsio_ct_iha) !== "undefined" || this.test_before.ta4hsio_ct_iha !== null || this.test_before.ta4hsio_ct_iha !== "") &&
                // Outgoing 1 - 6 (CT Size)
                (typeof (this.test_before.ta4hsio_ct_out1) !== "undefined" || this.test_before.ta4hsio_ct_out1 !== null || this.test_before.ta4hsio_ct_out1 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out2) !== "undefined" || this.test_before.ta4hsio_ct_out2 !== null || this.test_before.ta4hsio_ct_out2 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out3) !== "undefined" || this.test_before.ta4hsio_ct_out3 !== null || this.test_before.ta4hsio_ct_out3 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out4) !== "undefined" || this.test_before.ta4hsio_ct_out4 !== null || this.test_before.ta4hsio_ct_out4 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out5) !== "undefined" || this.test_before.ta4hsio_ct_out5 !== null || this.test_before.ta4hsio_ct_out5 !== "") &&
                (typeof (this.test_before.ta4hsio_ct_out6) !== "undefined" || this.test_before.ta4hsio_ct_out6 !== null || this.test_before.ta4hsio_ct_out6 !== "") &&
                // Incomer (I Sec) 
                (typeof (this.test_before.ta4hsio_is_iha_r) !== "undefined" || this.test_before.ta4hsio_is_iha_r !== null || this.test_before.ta4hsio_is_iha_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_iha_y) !== "undefined" || this.test_before.ta4hsio_is_iha_y !== null || this.test_before.ta4hsio_is_iha_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_iha_b) !== "undefined" || this.test_before.ta4hsio_is_iha_b !== null || this.test_before.ta4hsio_is_iha_b !== "") &&
                // Outgoing 1 - 6 (I Sec) 
                (typeof (this.test_before.ta4hsio_is_out1_r) !== "undefined" || this.test_before.ta4hsio_is_out1_r !== null || this.test_before.ta4hsio_is_out1_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_out1_y) !== "undefined" || this.test_before.ta4hsio_is_out1_y !== null || this.test_before.ta4hsio_is_out1_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_out1_b) !== "undefined" || this.test_before.ta4hsio_is_out1_b !== null || this.test_before.ta4hsio_is_out1_b !== "") &&
                (typeof (this.test_before.ta4hsio_is_out2_r) !== "undefined" || this.test_before.ta4hsio_is_out2_r !== null || this.test_before.ta4hsio_is_out2_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_out2_y) !== "undefined" || this.test_before.ta4hsio_is_out2_y !== null || this.test_before.ta4hsio_is_out2_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_out2_b) !== "undefined" || this.test_before.ta4hsio_is_out2_b !== null || this.test_before.ta4hsio_is_out2_b !== "") &&
                (typeof (this.test_before.ta4hsio_is_out3_r) !== "undefined" || this.test_before.ta4hsio_is_out3_r !== null || this.test_before.ta4hsio_is_out3_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_out3_y) !== "undefined" || this.test_before.ta4hsio_is_out3_y !== null || this.test_before.ta4hsio_is_out3_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_out3_b) !== "undefined" || this.test_before.ta4hsio_is_out3_b !== null || this.test_before.ta4hsio_is_out3_b !== "") &&
                (typeof (this.test_before.ta4hsio_is_out4_r) !== "undefined" || this.test_before.ta4hsio_is_out4_r !== null || this.test_before.ta4hsio_is_out4_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_out4_y) !== "undefined" || this.test_before.ta4hsio_is_out4_y !== null || this.test_before.ta4hsio_is_out4_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_out4_b) !== "undefined" || this.test_before.ta4hsio_is_out4_b !== null || this.test_before.ta4hsio_is_out4_b !== "") &&
                (typeof (this.test_before.ta4hsio_is_out5_r) !== "undefined" || this.test_before.ta4hsio_is_out5_r !== null || this.test_before.ta4hsio_is_out5_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_out5_y) !== "undefined" || this.test_before.ta4hsio_is_out5_y !== null || this.test_before.ta4hsio_is_out5_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_out5_b) !== "undefined" || this.test_before.ta4hsio_is_out5_b !== null || this.test_before.ta4hsio_is_out5_b !== "") &&
                (typeof (this.test_before.ta4hsio_is_out6_r) !== "undefined" || this.test_before.ta4hsio_is_out6_r !== null || this.test_before.ta4hsio_is_out6_r !== "") &&
                (typeof (this.test_before.ta4hsio_is_out6_y) !== "undefined" || this.test_before.ta4hsio_is_out6_y !== null || this.test_before.ta4hsio_is_out6_y !== "") &&
                (typeof (this.test_before.ta4hsio_is_out6_b) !== "undefined" || this.test_before.ta4hsio_is_out6_b !== null || this.test_before.ta4hsio_is_out6_b !== "")) {
                // calculate i primary (incomer)
                ip_iha_r = Number(this.test_before.ta4hsio_is_iha_r) * Number(this.test_before.ta4hsio_ct_iha);
                ip_iha_y = Number(this.test_before.ta4hsio_is_iha_y) * Number(this.test_before.ta4hsio_ct_iha);
                ip_iha_b = Number(this.test_before.ta4hsio_is_iha_b) * Number(this.test_before.ta4hsio_ct_iha);
                if (!isNaN(ip_iha_r)) {
                    this.test_before.ta4hsio_ip_iha_r = Number(ip_iha_r).toFixed(2);
                }
                else {
                    this.test_before.ta4hsio_ip_iha_r = "-";
                }
                if (!isNaN(ip_iha_y)) {
                    this.test_before.ta4hsio_ip_iha_y = Number(ip_iha_y).toFixed(2);
                }
                else {
                    this.test_before.ta4hsio_ip_iha_y = "-";
                }
                if (!isNaN(ip_iha_b)) {
                    this.test_before.ta4hsio_ip_iha_b = Number(ip_iha_b).toFixed(2);
                }
                else {
                    this.test_before.ta4hsio_ip_iha_b = "-";
                }
                // calculate i primary (outgoing 1 - 6)
                ip_out1_r = Number(this.test_before.ta4hsio_is_out1_r) * Number(this.test_before.ta4hsio_ct_out1);
                ip_out1_y = Number(this.test_before.ta4hsio_is_out1_y) * Number(this.test_before.ta4hsio_ct_out1);
                ip_out1_b = Number(this.test_before.ta4hsio_is_out1_b) * Number(this.test_before.ta4hsio_ct_out1);
                ip_out2_r = Number(this.test_before.ta4hsio_is_out2_r) * Number(this.test_before.ta4hsio_ct_out2);
                ip_out2_y = Number(this.test_before.ta4hsio_is_out2_y) * Number(this.test_before.ta4hsio_ct_out2);
                ip_out2_b = Number(this.test_before.ta4hsio_is_out2_b) * Number(this.test_before.ta4hsio_ct_out2);
                ip_out3_r = Number(this.test_before.ta4hsio_is_out3_r) * Number(this.test_before.ta4hsio_ct_out3);
                ip_out3_y = Number(this.test_before.ta4hsio_is_out3_y) * Number(this.test_before.ta4hsio_ct_out3);
                ip_out3_b = Number(this.test_before.ta4hsio_is_out3_b) * Number(this.test_before.ta4hsio_ct_out3);
                ip_out4_r = Number(this.test_before.ta4hsio_is_out4_r) * Number(this.test_before.ta4hsio_ct_out4);
                ip_out4_y = Number(this.test_before.ta4hsio_is_out4_y) * Number(this.test_before.ta4hsio_ct_out4);
                ip_out4_b = Number(this.test_before.ta4hsio_is_out4_b) * Number(this.test_before.ta4hsio_ct_out4);
                ip_out5_r = Number(this.test_before.ta4hsio_is_out5_r) * Number(this.test_before.ta4hsio_ct_out5);
                ip_out5_y = Number(this.test_before.ta4hsio_is_out5_y) * Number(this.test_before.ta4hsio_ct_out5);
                ip_out5_b = Number(this.test_before.ta4hsio_is_out5_b) * Number(this.test_before.ta4hsio_ct_out5);
                ip_out6_r = Number(this.test_before.ta4hsio_is_out6_r) * Number(this.test_before.ta4hsio_ct_out6);
                ip_out6_y = Number(this.test_before.ta4hsio_is_out6_y) * Number(this.test_before.ta4hsio_ct_out6);
                ip_out6_b = Number(this.test_before.ta4hsio_is_out6_b) * Number(this.test_before.ta4hsio_ct_out6);
                if (!isNaN(ip_out1_r)) {
                    this.test_before.ta4hsio_ip_out1_r = Number(ip_out1_r).toFixed(2);
                }
                if (!isNaN(ip_out1_y)) {
                    this.test_before.ta4hsio_ip_out1_y = Number(ip_out1_y).toFixed(2);
                }
                if (!isNaN(ip_out1_b)) {
                    this.test_before.ta4hsio_ip_out1_b = Number(ip_out1_b).toFixed(2);
                }
                if (!isNaN(ip_out2_r)) {
                    this.test_before.ta4hsio_ip_out2_r = Number(ip_out2_r).toFixed(2);
                }
                if (!isNaN(ip_out2_y)) {
                    this.test_before.ta4hsio_ip_out2_y = Number(ip_out2_y).toFixed(2);
                }
                if (!isNaN(ip_out2_b)) {
                    this.test_before.ta4hsio_ip_out2_b = Number(ip_out2_b).toFixed(2);
                }
                if (!isNaN(ip_out3_r)) {
                    this.test_before.ta4hsio_ip_out3_r = Number(ip_out3_r).toFixed(2);
                }
                if (!isNaN(ip_out3_y)) {
                    this.test_before.ta4hsio_ip_out3_y = Number(ip_out3_y).toFixed(2);
                }
                if (!isNaN(ip_out3_b)) {
                    this.test_before.ta4hsio_ip_out3_b = Number(ip_out3_b).toFixed(2);
                }
                if (!isNaN(ip_out4_r)) {
                    this.test_before.ta4hsio_ip_out4_r = Number(ip_out4_r).toFixed(2);
                }
                if (!isNaN(ip_out4_y)) {
                    this.test_before.ta4hsio_ip_out4_y = Number(ip_out4_y).toFixed(2);
                }
                if (!isNaN(ip_out4_b)) {
                    this.test_before.ta4hsio_ip_out4_b = Number(ip_out4_b).toFixed(2);
                }
                if (!isNaN(ip_out5_r)) {
                    this.test_before.ta4hsio_ip_out5_r = Number(ip_out5_r).toFixed(2);
                }
                if (!isNaN(ip_out5_y)) {
                    this.test_before.ta4hsio_ip_out5_y = Number(ip_out5_y).toFixed(2);
                }
                if (!isNaN(ip_out5_b)) {
                    this.test_before.ta4hsio_ip_out5_b = Number(ip_out5_b).toFixed(2);
                }
                if (!isNaN(ip_out6_r)) {
                    this.test_before.ta4hsio_ip_out6_r = Number(ip_out6_r).toFixed(2);
                }
                if (!isNaN(ip_out6_y)) {
                    this.test_before.ta4hsio_ip_out6_y = Number(ip_out6_y).toFixed(2);
                }
                if (!isNaN(ip_out6_b)) {
                    this.test_before.ta4hsio_ip_out6_b = Number(ip_out6_b).toFixed(2);
                }
                // Calculate Total Out Amps & Different wrt HV Amps..
                this.autoCalculateTotalDifferentAmps(type);
            }
            console.log("I Primary (Incomer) : R - " + this.test_before.ta4hsio_ip_iha_r + ", Y - " + this.test_before.ta4hsio_ip_iha_y + "B - " + this.test_before.ta4hsio_ip_iha_b);
            console.log("I Primary (Outgoing 1) : R - " + this.test_before.ta4hsio_ip_out1_r + ", Y - " + this.test_before.ta4hsio_ip_out1_y + "B - " + this.test_before.ta4hsio_ip_out1_b);
            console.log("I Primary (Outgoing 2) : R - " + this.test_before.ta4hsio_ip_out2_r + ", Y - " + this.test_before.ta4hsio_ip_out2_y + "B - " + this.test_before.ta4hsio_ip_out2_b);
            console.log("I Primary (Outgoing 3) : R - " + this.test_before.ta4hsio_ip_out3_r + ", Y - " + this.test_before.ta4hsio_ip_out3_y + "B - " + this.test_before.ta4hsio_ip_out3_b);
            console.log("I Primary (Outgoing 4) : R - " + this.test_before.ta4hsio_ip_out4_r + ", Y - " + this.test_before.ta4hsio_ip_out4_y + "B - " + this.test_before.ta4hsio_ip_out4_b);
            console.log("I Primary (Outgoing 5) : R - " + this.test_before.ta4hsio_ip_out5_r + ", Y - " + this.test_before.ta4hsio_ip_out5_y + "B - " + this.test_before.ta4hsio_ip_out5_b);
            console.log("I Primary (Outgoing 6) : R - " + this.test_before.ta4hsio_ip_out6_r + ", Y - " + this.test_before.ta4hsio_ip_out6_y + "B - " + this.test_before.ta4hsio_ip_out6_b);
        }
        else {
            // Variables
            var ip_iha_r, ip_iha_y, ip_iha_b;
            var ip_out1_r, ip_out1_y, ip_out1_b;
            var ip_out2_r, ip_out2_y, ip_out2_b;
            var ip_out3_r, ip_out3_y, ip_out3_b;
            var ip_out4_r, ip_out4_y, ip_out4_b;
            var ip_out5_r, ip_out5_y, ip_out5_b;
            var ip_out6_r, ip_out6_y, ip_out6_b;
            if ((typeof (this.test_after.ta4hsio_ct_iha_0) !== "undefined" || this.test_after.ta4hsio_ct_iha_0 !== null || this.test_after.ta4hsio_ct_iha_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_iha_1) !== "undefined" || this.test_after.ta4hsio_ct_iha_1 !== null || this.test_after.ta4hsio_ct_iha_1 !== "")) {
                this.test_after.ta4hsio_ct_iha = Number(this.test_after.ta4hsio_ct_iha_0) / Number(this.test_after.ta4hsio_ct_iha_1);
            }
            if ((typeof (this.test_after.ta4hsio_ct_out1_0) !== "undefined" || this.test_after.ta4hsio_ct_out1_0 !== null || this.test_after.ta4hsio_ct_out1_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out1_1) !== "undefined" || this.test_after.ta4hsio_ct_out1_1 !== null || this.test_after.ta4hsio_ct_out1_1 !== "")) {
                this.test_after.ta4hsio_ct_out1 = Number(this.test_after.ta4hsio_ct_out1_0) / Number(this.test_after.ta4hsio_ct_out1_1);
            }
            if ((typeof (this.test_after.ta4hsio_ct_out2_0) !== "undefined" || this.test_after.ta4hsio_ct_out2_0 !== null || this.test_after.ta4hsio_ct_out2_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out2_1) !== "undefined" || this.test_after.ta4hsio_ct_out2_1 !== null || this.test_after.ta4hsio_ct_out2_1 !== "")) {
                this.test_after.ta4hsio_ct_out2 = Number(this.test_after.ta4hsio_ct_out2_0) / Number(this.test_after.ta4hsio_ct_out2_1);
            }
            if ((typeof (this.test_after.ta4hsio_ct_out3_0) !== "undefined" || this.test_after.ta4hsio_ct_out3_0 !== null || this.test_after.ta4hsio_ct_out3_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out3_1) !== "undefined" || this.test_after.ta4hsio_ct_out3_1 !== null || this.test_after.ta4hsio_ct_out3_1 !== "")) {
                this.test_after.ta4hsio_ct_out3 = Number(this.test_after.ta4hsio_ct_out3_0) / Number(this.test_after.ta4hsio_ct_out3_1);
            }
            if ((typeof (this.test_after.ta4hsio_ct_out4_0) !== "undefined" || this.test_after.ta4hsio_ct_out4_0 !== null || this.test_after.ta4hsio_ct_out4_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out4_1) !== "undefined" || this.test_after.ta4hsio_ct_out4_1 !== null || this.test_after.ta4hsio_ct_out4_1 !== "")) {
                this.test_after.ta4hsio_ct_out4 = Number(this.test_after.ta4hsio_ct_out4_0) / Number(this.test_after.ta4hsio_ct_out4_1);
            }
            if ((typeof (this.test_after.ta4hsio_ct_out5_0) !== "undefined" || this.test_after.ta4hsio_ct_out5_0 !== null || this.test_after.ta4hsio_ct_out5_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out5_1) !== "undefined" || this.test_after.ta4hsio_ct_out5_1 !== null || this.test_after.ta4hsio_ct_out5_1 !== "")) {
                this.test_after.ta4hsio_ct_out5 = Number(this.test_after.ta4hsio_ct_out5_0) / Number(this.test_after.ta4hsio_ct_out5_1);
            }
            if ((typeof (this.test_after.ta4hsio_ct_out6_0) !== "undefined" || this.test_after.ta4hsio_ct_out6_0 !== null || this.test_after.ta4hsio_ct_out6_0 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out6_1) !== "undefined" || this.test_after.ta4hsio_ct_out6_1 !== null || this.test_after.ta4hsio_ct_out6_1 !== "")) {
                this.test_after.ta4hsio_ct_out6 = Number(this.test_after.ta4hsio_ct_out6_0) / Number(this.test_after.ta4hsio_ct_out6_1);
            }
            if (
            // Incomer (CT Size)
            (typeof (this.test_after.ta4hsio_ct_iha) !== "undefined" || this.test_after.ta4hsio_ct_iha !== null || this.test_after.ta4hsio_ct_iha !== "") &&
                // Outgoing 1 - 6 (CT Size)
                (typeof (this.test_after.ta4hsio_ct_out1) !== "undefined" || this.test_after.ta4hsio_ct_out1 !== null || this.test_after.ta4hsio_ct_out1 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out2) !== "undefined" || this.test_after.ta4hsio_ct_out2 !== null || this.test_after.ta4hsio_ct_out2 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out3) !== "undefined" || this.test_after.ta4hsio_ct_out3 !== null || this.test_after.ta4hsio_ct_out3 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out4) !== "undefined" || this.test_after.ta4hsio_ct_out4 !== null || this.test_after.ta4hsio_ct_out4 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out5) !== "undefined" || this.test_after.ta4hsio_ct_out5 !== null || this.test_after.ta4hsio_ct_out5 !== "") &&
                (typeof (this.test_after.ta4hsio_ct_out6) !== "undefined" || this.test_after.ta4hsio_ct_out6 !== null || this.test_after.ta4hsio_ct_out6 !== "") &&
                // Incomer (I Sec) 
                (typeof (this.test_after.ta4hsio_is_iha_r) !== "undefined" || this.test_after.ta4hsio_is_iha_r !== null || this.test_after.ta4hsio_is_iha_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_iha_y) !== "undefined" || this.test_after.ta4hsio_is_iha_y !== null || this.test_after.ta4hsio_is_iha_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_iha_b) !== "undefined" || this.test_after.ta4hsio_is_iha_b !== null || this.test_after.ta4hsio_is_iha_b !== "") &&
                // Outgoing 1 - 6 (I Sec) 
                (typeof (this.test_after.ta4hsio_is_out1_r) !== "undefined" || this.test_after.ta4hsio_is_out1_r !== null || this.test_after.ta4hsio_is_out1_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out1_y) !== "undefined" || this.test_after.ta4hsio_is_out1_y !== null || this.test_after.ta4hsio_is_out1_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out1_b) !== "undefined" || this.test_after.ta4hsio_is_out1_b !== null || this.test_after.ta4hsio_is_out1_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out2_r) !== "undefined" || this.test_after.ta4hsio_is_out2_r !== null || this.test_after.ta4hsio_is_out2_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out2_y) !== "undefined" || this.test_after.ta4hsio_is_out2_y !== null || this.test_after.ta4hsio_is_out2_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out2_b) !== "undefined" || this.test_after.ta4hsio_is_out2_b !== null || this.test_after.ta4hsio_is_out2_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out3_r) !== "undefined" || this.test_after.ta4hsio_is_out3_r !== null || this.test_after.ta4hsio_is_out3_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out3_y) !== "undefined" || this.test_after.ta4hsio_is_out3_y !== null || this.test_after.ta4hsio_is_out3_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out3_b) !== "undefined" || this.test_after.ta4hsio_is_out3_b !== null || this.test_after.ta4hsio_is_out3_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out4_r) !== "undefined" || this.test_after.ta4hsio_is_out4_r !== null || this.test_after.ta4hsio_is_out4_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out4_y) !== "undefined" || this.test_after.ta4hsio_is_out4_y !== null || this.test_after.ta4hsio_is_out4_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out4_b) !== "undefined" || this.test_after.ta4hsio_is_out4_b !== null || this.test_after.ta4hsio_is_out4_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out5_r) !== "undefined" || this.test_after.ta4hsio_is_out5_r !== null || this.test_after.ta4hsio_is_out5_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out5_y) !== "undefined" || this.test_after.ta4hsio_is_out5_y !== null || this.test_after.ta4hsio_is_out5_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out5_b) !== "undefined" || this.test_after.ta4hsio_is_out5_b !== null || this.test_after.ta4hsio_is_out5_b !== "") &&
                (typeof (this.test_after.ta4hsio_is_out6_r) !== "undefined" || this.test_after.ta4hsio_is_out6_r !== null || this.test_after.ta4hsio_is_out6_r !== "") &&
                (typeof (this.test_after.ta4hsio_is_out6_y) !== "undefined" || this.test_after.ta4hsio_is_out6_y !== null || this.test_after.ta4hsio_is_out6_y !== "") &&
                (typeof (this.test_after.ta4hsio_is_out6_b) !== "undefined" || this.test_after.ta4hsio_is_out6_b !== null || this.test_after.ta4hsio_is_out6_b !== "")) {
                // calculate i primary (incomer)
                ip_iha_r = Number(this.test_after.ta4hsio_is_iha_r) * Number(this.test_after.ta4hsio_ct_iha);
                ip_iha_y = Number(this.test_after.ta4hsio_is_iha_y) * Number(this.test_after.ta4hsio_ct_iha);
                ip_iha_b = Number(this.test_after.ta4hsio_is_iha_b) * Number(this.test_after.ta4hsio_ct_iha);
                if (!isNaN(ip_iha_r)) {
                    this.test_after.ta4hsio_ip_iha_r = Number(ip_iha_r).toFixed(2);
                }
                if (!isNaN(ip_iha_y)) {
                    this.test_after.ta4hsio_ip_iha_y = Number(ip_iha_y).toFixed(2);
                }
                if (!isNaN(ip_iha_b)) {
                    this.test_after.ta4hsio_ip_iha_b = Number(ip_iha_b).toFixed(2);
                }
                // calculate i primary (outgoing 1 - 6)
                ip_out1_r = Number(this.test_after.ta4hsio_is_out1_r) * Number(this.test_after.ta4hsio_ct_out1);
                ip_out1_y = Number(this.test_after.ta4hsio_is_out1_y) * Number(this.test_after.ta4hsio_ct_out1);
                ip_out1_b = Number(this.test_after.ta4hsio_is_out1_b) * Number(this.test_after.ta4hsio_ct_out1);
                ip_out2_r = Number(this.test_after.ta4hsio_is_out2_r) * Number(this.test_after.ta4hsio_ct_out2);
                ip_out2_y = Number(this.test_after.ta4hsio_is_out2_y) * Number(this.test_after.ta4hsio_ct_out2);
                ip_out2_b = Number(this.test_after.ta4hsio_is_out2_b) * Number(this.test_after.ta4hsio_ct_out2);
                ip_out3_r = Number(this.test_after.ta4hsio_is_out3_r) * Number(this.test_after.ta4hsio_ct_out3);
                ip_out3_y = Number(this.test_after.ta4hsio_is_out3_y) * Number(this.test_after.ta4hsio_ct_out3);
                ip_out3_b = Number(this.test_after.ta4hsio_is_out3_b) * Number(this.test_after.ta4hsio_ct_out3);
                ip_out4_r = Number(this.test_after.ta4hsio_is_out4_r) * Number(this.test_after.ta4hsio_ct_out4);
                ip_out4_y = Number(this.test_after.ta4hsio_is_out4_y) * Number(this.test_after.ta4hsio_ct_out4);
                ip_out4_b = Number(this.test_after.ta4hsio_is_out4_b) * Number(this.test_after.ta4hsio_ct_out4);
                ip_out5_r = Number(this.test_after.ta4hsio_is_out5_r) * Number(this.test_after.ta4hsio_ct_out5);
                ip_out5_y = Number(this.test_after.ta4hsio_is_out5_y) * Number(this.test_after.ta4hsio_ct_out5);
                ip_out5_b = Number(this.test_after.ta4hsio_is_out5_b) * Number(this.test_after.ta4hsio_ct_out5);
                ip_out6_r = Number(this.test_after.ta4hsio_is_out6_r) * Number(this.test_after.ta4hsio_ct_out6);
                ip_out6_y = Number(this.test_after.ta4hsio_is_out6_y) * Number(this.test_after.ta4hsio_ct_out6);
                ip_out6_b = Number(this.test_after.ta4hsio_is_out6_b) * Number(this.test_after.ta4hsio_ct_out6);
                if (!isNaN(ip_out1_r)) {
                    this.test_after.ta4hsio_ip_out1_r = Number(ip_out1_r).toFixed(2);
                }
                if (!isNaN(ip_out1_y)) {
                    this.test_after.ta4hsio_ip_out1_y = Number(ip_out1_y).toFixed(2);
                }
                if (!isNaN(ip_out1_b)) {
                    this.test_after.ta4hsio_ip_out1_b = Number(ip_out1_b).toFixed(2);
                }
                if (!isNaN(ip_out2_r)) {
                    this.test_after.ta4hsio_ip_out2_r = Number(ip_out2_r).toFixed(2);
                }
                if (!isNaN(ip_out2_y)) {
                    this.test_after.ta4hsio_ip_out2_y = Number(ip_out2_y).toFixed(2);
                }
                if (!isNaN(ip_out2_b)) {
                    this.test_after.ta4hsio_ip_out2_b = Number(ip_out2_b).toFixed(2);
                }
                if (!isNaN(ip_out3_r)) {
                    this.test_after.ta4hsio_ip_out3_r = Number(ip_out3_r).toFixed(2);
                }
                if (!isNaN(ip_out3_y)) {
                    this.test_after.ta4hsio_ip_out3_y = Number(ip_out3_y).toFixed(2);
                }
                if (!isNaN(ip_out3_b)) {
                    this.test_after.ta4hsio_ip_out3_b = Number(ip_out3_b).toFixed(2);
                }
                if (!isNaN(ip_out4_r)) {
                    this.test_after.ta4hsio_ip_out4_r = Number(ip_out4_r).toFixed(2);
                }
                if (!isNaN(ip_out4_y)) {
                    this.test_after.ta4hsio_ip_out4_y = Number(ip_out4_y).toFixed(2);
                }
                if (!isNaN(ip_out4_b)) {
                    this.test_after.ta4hsio_ip_out4_b = Number(ip_out4_b).toFixed(2);
                }
                if (!isNaN(ip_out5_r)) {
                    this.test_after.ta4hsio_ip_out5_r = Number(ip_out5_r).toFixed(2);
                }
                if (!isNaN(ip_out5_y)) {
                    this.test_after.ta4hsio_ip_out5_y = Number(ip_out5_y).toFixed(2);
                }
                if (!isNaN(ip_out5_b)) {
                    this.test_after.ta4hsio_ip_out5_b = Number(ip_out5_b).toFixed(2);
                }
                if (!isNaN(ip_out6_r)) {
                    this.test_after.ta4hsio_ip_out6_r = Number(ip_out6_r).toFixed(2);
                }
                if (!isNaN(ip_out6_y)) {
                    this.test_after.ta4hsio_ip_out6_y = Number(ip_out6_y).toFixed(2);
                }
                if (!isNaN(ip_out6_b)) {
                    this.test_after.ta4hsio_ip_out6_b = Number(ip_out6_b).toFixed(2);
                }
                // Calculate Total Out Amps & Different wrt HV Amps..
                this.autoCalculateTotalDifferentAmps(type);
            }
            console.log("I Primary (Incomer) : R - " + this.test_after.ta4hsio_ip_iha_r + ", Y - " + this.test_after.ta4hsio_ip_iha_y + "B - " + this.test_after.t_aftera4hsio_ip_iha_b);
            console.log("I Primary (Outgoing 1) : R - " + this.test_after.ta4hsio_ip_out1_r + ", Y - " + this.test_after.ta4hsio_ip_out1_y + "B - " + this.test_after.ta4hsio_ip_out1_b);
            console.log("I Primary (Outgoing 2) : R - " + this.test_after.ta4hsio_ip_out2_r + ", Y - " + this.test_after.ta4hsio_ip_out2_y + "B - " + this.test_after.ta4hsio_ip_out2_b);
            console.log("I Primary (Outgoing 3) : R - " + this.test_after.ta4hsio_ip_out3_r + ", Y - " + this.test_after.ta4hsio_ip_out3_y + "B - " + this.test_after.ta4hsio_ip_out3_b);
            console.log("I Primary (Outgoing 4) : R - " + this.test_after.ta4hsio_ip_out4_r + ", Y - " + this.test_after.ta4hsio_ip_out4_y + "B - " + this.test_after.ta4hsio_ip_out4_b);
            console.log("I Primary (Outgoing 5) : R - " + this.test_after.ta4hsio_ip_out5_r + ", Y - " + this.test_after.ta4hsio_ip_out5_y + "B - " + this.test_after.ta4hsio_ip_out5_b);
            console.log("I Primary (Outgoing 6) : R - " + this.test_after.ta4hsio_ip_out6_r + ", Y - " + this.test_after.ta4hsio_ip_out6_y + "B - " + this.test_after.ta4hsio_ip_out6_b);
        }
    };
    /**
     * Reason   : Method to calculate Total Out Amps & % Diff wrt HV Amps..
     * Created  : Alif (22-01-2019)
     * Edited   : Alif (28-01-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateTotalDifferentAmps = function (type) {
        console.log("auto calculate total out amps & diff wrt hv amps..");
        debugger;
        if (type === "before") {
            // Variables
            var total_r = "", total_y = "", total_b = "";
            var diff_r, diff_y, diff_b;
            if ((typeof (this.test_before.ta4hsio_ip_out1_r) !== "undefined" && this.test_before.ta4hsio_ip_out1_r !== null)) {
                total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out1_r);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out2_r) !== "undefined" && this.test_before.ta4hsio_ip_out2_r !== null)) {
                total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out2_r);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out3_r) !== "undefined" && this.test_before.ta4hsio_ip_out3_r !== null)) {
                total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out3_r);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out4_r) !== "undefined" && this.test_before.ta4hsio_ip_out4_r !== null)) {
                total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out4_r);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out5_r) !== "undefined" && this.test_before.ta4hsio_ip_out5_r !== null)) {
                total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out5_r);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out6_r) !== "undefined" && this.test_before.ta4hsio_ip_out6_r !== null)) {
                total_r = Number(total_r) + Number(this.test_before.ta4hsio_ip_out6_r);
            }
            // calculate total out amps (R)
            if (!isNaN(total_r)) {
                this.test_before.ta4hsio_ip_total_r = Number(total_r).toFixed(2);
            }
            // calculate different amps (R)
            diff_r = (Number(this.test_before.ta4hsio_ip_iha_r) - Number(total_r)) / Number(total_r) * 100;
            if (!isNaN(diff_r)) {
                this.test_before.ta4hsio_ip_diff_r = Number(diff_r).toFixed(2);
            }
            else {
                this.test_before.ta4hsio_ip_diff_r = "-";
            }
            /*  if (
               (typeof (this.test_before.ta4hsio_ip_out1_r) !== "undefined" || this.test_before.ta4hsio_ip_out1_r !== null || this.test_before.ta4hsio_ip_out1_r) &&
               (typeof (this.test_before.ta4hsio_ip_out2_r) !== "undefined" || this.test_before.ta4hsio_ip_out2_r !== null || this.test_before.ta4hsio_ip_out2_r) &&
               (typeof (this.test_before.ta4hsio_ip_out3_r) !== "undefined" || this.test_before.ta4hsio_ip_out3_r !== null || this.test_before.ta4hsio_ip_out3_r) &&
               (typeof (this.test_before.ta4hsio_ip_out4_r) !== "undefined" || this.test_before.ta4hsio_ip_out4_r !== null || this.test_before.ta4hsio_ip_out4_r) &&
               (typeof (this.test_before.ta4hsio_ip_out5_r) !== "undefined" || this.test_before.ta4hsio_ip_out5_r !== null || this.test_before.ta4hsio_ip_out5_r) &&
               (typeof (this.test_before.ta4hsio_ip_out6_r) !== "undefined" || this.test_before.ta4hsio_ip_out6_r !== null || this.test_before.ta4hsio_ip_out6_r)
             ) {
               // calculate total out amps (R)
               total_r = Number(this.test_before.ta4hsio_ip_out1_r) + Number(this.test_before.ta4hsio_ip_out2_r) + Number(this.test_before.ta4hsio_ip_out3_r) +
                 Number(this.test_before.ta4hsio_ip_out4_r) + Number(this.test_before.ta4hsio_ip_out5_r) +
                 Number(this.test_before.ta4hsio_ip_out6_r);
       
               if (!isNaN(total_r)) {
                 this.test_before.ta4hsio_ip_total_r = Number(total_r).toFixed(2);
               }
       
               // calculate different amps (R)
               debugger;
               diff_r = (Number(total_r) - Number(this.test_before.ta4hsio_ip_iha_r)) / Number(total_r) * 100;
       
               if (!isNaN(diff_r)) {
                 this.test_before.ta4hsio_ip_diff_r = Number(diff_r).toFixed(2);
               }
             } */
            if ((typeof (this.test_before.ta4hsio_ip_out1_y) !== "undefined" && this.test_before.ta4hsio_ip_out1_y !== null)) {
                total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out1_y);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out2_y) !== "undefined" && this.test_before.ta4hsio_ip_out2_y !== null)) {
                total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out2_y);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out3_y) !== "undefined" && this.test_before.ta4hsio_ip_out3_y !== null)) {
                total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out3_y);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out4_y) !== "undefined" && this.test_before.ta4hsio_ip_out4_y !== null)) {
                total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out4_y);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out5_y) !== "undefined" && this.test_before.ta4hsio_ip_out5_y !== null)) {
                total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out5_y);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out6_y) !== "undefined" && this.test_before.ta4hsio_ip_out6_y !== null)) {
                total_y = Number(total_y) + Number(this.test_before.ta4hsio_ip_out6_y);
            }
            // calculate total out amps (Y)
            if (!isNaN(total_y)) {
                this.test_before.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
            }
            // calculate different amps (Y)
            diff_y = (Number(this.test_before.ta4hsio_ip_iha_y) - Number(total_y)) / Number(total_y) * 100;
            if (!isNaN(diff_y)) {
                this.test_before.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
            }
            else {
                this.test_before.ta4hsio_ip_diff_y = "-";
            }
            /* if (
              (typeof (this.test_before.ta4hsio_ip_out1_y) !== "undefined" || this.test_before.ta4hsio_ip_out1_y !== null || this.test_before.ta4hsio_ip_out1_b) &&
              (typeof (this.test_before.ta4hsio_ip_out2_y) !== "undefined" || this.test_before.ta4hsio_ip_out2_y !== null || this.test_before.ta4hsio_ip_out2_b) &&
              (typeof (this.test_before.ta4hsio_ip_out3_y) !== "undefined" || this.test_before.ta4hsio_ip_out3_y !== null || this.test_before.ta4hsio_ip_out3_b) &&
              (typeof (this.test_before.ta4hsio_ip_out4_y) !== "undefined" || this.test_before.ta4hsio_ip_out4_y !== null || this.test_before.ta4hsio_ip_out4_b) &&
              (typeof (this.test_before.ta4hsio_ip_out5_y) !== "undefined" || this.test_before.ta4hsio_ip_out5_y !== null || this.test_before.ta4hsio_ip_out5_b) &&
              (typeof (this.test_before.ta4hsio_ip_out6_y) !== "undefined" || this.test_before.ta4hsio_ip_out6_y !== null || this.test_before.ta4hsio_ip_out6_b)
            ) {
              // calculate total out amps (Y)
              total_y = Number(this.test_before.ta4hsio_ip_out1_y) + Number(this.test_before.ta4hsio_ip_out2_y) + Number(this.test_before.ta4hsio_ip_out3_y) +
                Number(this.test_before.ta4hsio_ip_out4_y) + Number(this.test_before.ta4hsio_ip_out5_y) +
                Number(this.test_before.ta4hsio_ip_out6_y);
       
              if (!isNaN(total_y)) {
                this.test_before.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
              }
       
              // calculate different amps (Y)
              diff_y = (Number(total_y) - Number(this.test_before.ta4hsio_ip_iha_y)) / Number(total_y) * 100;
       
              if (!isNaN(diff_y)) {
                this.test_before.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
              }
            } */
            if ((typeof (this.test_before.ta4hsio_ip_out1_b) !== "undefined" && this.test_before.ta4hsio_ip_out1_b !== null)) {
                total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out1_b);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out2_b) !== "undefined" && this.test_before.ta4hsio_ip_out2_b !== null)) {
                total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out2_b);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out3_b) !== "undefined" && this.test_before.ta4hsio_ip_out3_b !== null)) {
                total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out3_b);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out4_b) !== "undefined" && this.test_before.ta4hsio_ip_out4_b !== null)) {
                total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out4_b);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out5_b) !== "undefined" && this.test_before.ta4hsio_ip_out5_b !== null)) {
                total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out5_b);
            }
            if ((typeof (this.test_before.ta4hsio_ip_out6_b) !== "undefined" && this.test_before.ta4hsio_ip_out6_b !== null)) {
                total_b = Number(total_b) + Number(this.test_before.ta4hsio_ip_out6_b);
            }
            if (!isNaN(total_b)) {
                this.test_before.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
            }
            // calculate different amps (B)
            diff_b = (Number(this.test_before.ta4hsio_ip_iha_b) - Number(total_b)) / Number(total_b) * 100;
            if (!isNaN(diff_b)) {
                this.test_before.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
            }
            else {
                this.test_before.ta4hsio_ip_diff_b = "-";
            }
            /*    if (
                 (typeof (this.test_before.ta4hsio_ip_out1_b) !== "undefined" || this.test_before.ta4hsio_ip_out1_b !== null || this.test_before.ta4hsio_ip_out1_b) &&
                 (typeof (this.test_before.ta4hsio_ip_out2_b) !== "undefined" || this.test_before.ta4hsio_ip_out2_b !== null || this.test_before.ta4hsio_ip_out2_b) &&
                 (typeof (this.test_before.ta4hsio_ip_out3_b) !== "undefined" || this.test_before.ta4hsio_ip_out3_b !== null || this.test_before.ta4hsio_ip_out3_b) &&
                 (typeof (this.test_before.ta4hsio_ip_out4_b) !== "undefined" || this.test_before.ta4hsio_ip_out4_b !== null || this.test_before.ta4hsio_ip_out4_b) &&
                 (typeof (this.test_before.ta4hsio_ip_out5_b) !== "undefined" || this.test_before.ta4hsio_ip_out5_b !== null || this.test_before.ta4hsio_ip_out5_b) &&
                 (typeof (this.test_before.ta4hsio_ip_out6_b) !== "undefined" || this.test_before.ta4hsio_ip_out6_b !== null || this.test_before.ta4hsio_ip_out6_b)
               ) {
                 // calculate total out amps (B)
                 total_b = Number(this.test_before.ta4hsio_ip_out1_b) + Number(this.test_before.ta4hsio_ip_out2_b) + Number(this.test_before.ta4hsio_ip_out3_b) +
                   Number(this.test_before.ta4hsio_ip_out4_b) + Number(this.test_before.ta4hsio_ip_out5_b) +
                   Number(this.test_before.ta4hsio_ip_out6_b);
         
                 if (!isNaN(total_b)) {
                   this.test_before.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
                 }
         
                 // calculate different amps (B)
                 diff_b = (Number(total_b) - Number(this.test_before.ta4hsio_ip_iha_b)) / Number(total_b) * 100;
         
                 if (!isNaN(diff_b)) {
                   this.test_before.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
                 }
               } */
            console.log("Total Out Amps: (R) = " + this.test_before.ta4hsio_ip_total_r + ", (Y) = " + this.test_before.ta4hsio_ip_total_y + ", (B) = " + this.test_before.ta4hsio_ip_total_b);
            console.log("% Diff wrt HV Amps: (R) = " + this.test_before.ta4hsio_ip_diff_r + ", (Y) = " + this.test_before.ta4hsio_ip_diff_y + ", (B) = " + this.test_before.ta4hsio_ip_diff_b);
        }
        else {
            // Variables
            var total_r = "", total_y = "", total_b = "";
            var diff_r, diff_y, diff_b;
            if (isNaN(total_r) || typeof (total_r) == "undefined") {
                total_r = "-";
            }
            // Red
            if ((typeof (this.test_after.ta4hsio_ip_out1_r) !== "undefined" && this.test_after.ta4hsio_ip_out1_r !== null)) {
                total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out1_r);
            }
            if (typeof (this.test_after.ta4hsio_ip_out2_r) !== "undefined" && this.test_after.ta4hsio_ip_out2_r !== null) {
                total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out2_r);
            }
            if (typeof (this.test_after.ta4hsio_ip_out3_r) !== "undefined" && this.test_after.ta4hsio_ip_out3_r !== null) {
                total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out3_r);
            }
            if (typeof (this.test_after.ta4hsio_ip_out4_r) !== "undefined" && this.test_after.ta4hsio_ip_out4_r !== null) {
                total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out4_r);
            }
            if (typeof (this.test_after.ta4hsio_ip_out5_r) !== "undefined" && this.test_after.ta4hsio_ip_out5_r !== null) {
                total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out5_r);
            }
            if (typeof (this.test_after.ta4hsio_ip_out6_r) !== "undefined" && this.test_after.ta4hsio_ip_out6_r !== null) {
                total_r = Number(total_r) + Number(this.test_after.ta4hsio_ip_out6_r);
            }
            if (!isNaN(total_r)) {
                this.test_after.ta4hsio_ip_total_r = Number(total_r).toFixed(2);
            }
            // calculate different amps (R)
            diff_r = (Number(this.test_after.ta4hsio_ip_iha_r) - Number(total_r)) / Number(total_r) * 100;
            if (!isNaN(diff_r)) {
                this.test_after.ta4hsio_ip_diff_r = Number(diff_r).toFixed(2);
            }
            // Yellow
            if (isNaN(total_y) || typeof (total_y) == "undefined") {
                total_y = "-";
            }
            if ((typeof (this.test_after.ta4hsio_ip_out1_y) !== "undefined" && this.test_after.ta4hsio_ip_out1_y !== null)) {
                total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out1_y);
            }
            if (typeof (this.test_after.ta4hsio_ip_out2_y) !== "undefined" && this.test_after.ta4hsio_ip_out2_y !== null) {
                total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out2_y);
            }
            if (typeof (this.test_after.ta4hsio_ip_out3_y) !== "undefined" && this.test_after.ta4hsio_ip_out3_y !== null) {
                total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out3_y);
            }
            if (typeof (this.test_after.ta4hsio_ip_out4_y) !== "undefined" && this.test_after.ta4hsio_ip_out4_y !== null) {
                total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out4_y);
            }
            if (typeof (this.test_after.ta4hsio_ip_out5_y) !== "undefined" && this.test_after.ta4hsio_ip_out5_y !== null) {
                total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out5_y);
            }
            if (typeof (this.test_after.ta4hsio_ip_out6_y) !== "undefined" && this.test_after.ta4hsio_ip_out6_y !== null) {
                total_y = Number(total_y) + Number(this.test_after.ta4hsio_ip_out6_y);
            }
            if (!isNaN(total_y)) {
                this.test_after.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
            }
            // calculate different amps (Y)
            diff_y = (Number(this.test_after.ta4hsio_ip_iha_y) - Number(total_y)) / Number(total_y) * 100;
            if (!isNaN(diff_y)) {
                this.test_after.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
            }
            else {
                this.test_after.ta4hsio_ip_diff_y = "-";
            }
            /*  if (
               (typeof (this.test_after.ta4hsio_ip_out1_y) !== "undefined" || this.test_after.ta4hsio_ip_out1_y !== null || this.test_after.ta4hsio_ip_out1_b) &&
               (typeof (this.test_after.ta4hsio_ip_out2_y) !== "undefined" || this.test_after.ta4hsio_ip_out2_y !== null || this.test_after.ta4hsio_ip_out2_b) &&
               (typeof (this.test_after.ta4hsio_ip_out3_y) !== "undefined" || this.test_after.ta4hsio_ip_out3_y !== null || this.test_after.ta4hsio_ip_out3_b) &&
               (typeof (this.test_after.ta4hsio_ip_out4_y) !== "undefined" || this.test_after.ta4hsio_ip_out4_y !== null || this.test_after.ta4hsio_ip_out4_b) &&
               (typeof (this.test_after.ta4hsio_ip_out5_y) !== "undefined" || this.test_after.ta4hsio_ip_out5_y !== null || this.test_after.ta4hsio_ip_out5_b) &&
               (typeof (this.test_after.ta4hsio_ip_out6_y) !== "undefined" || this.test_after.ta4hsio_ip_out6_y !== null || this.test_after.ta4hsio_ip_out6_b)
             ) {
               // calculate total out amps (Y)
               total_y = Number(this.test_after.ta4hsio_ip_out1_y) + Number(this.test_after.ta4hsio_ip_out2_y) + Number(this.test_after.ta4hsio_ip_out3_y) +
                 Number(this.test_after.ta4hsio_ip_out4_y) + Number(this.test_after.ta4hsio_ip_out5_y) +
                 Number(this.test_after.ta4hsio_ip_out6_y);
       
               if (!isNaN(total_y)) {
                 this.test_after.ta4hsio_ip_total_y = Number(total_y).toFixed(2);
               }
       
               // calculate different amps (Y)
               diff_y = (Number(total_y) - Number(this.test_after.ta4hsio_ip_iha_y)) / Number(total_y) * 100;
       
               if (!isNaN(diff_y)) {
                 this.test_after.ta4hsio_ip_diff_y = Number(diff_y).toFixed(2);
               }
             } */
            // Blue
            if (isNaN(total_b) || typeof (total_b) == "undefined") {
                total_b = "-";
            }
            if ((typeof (this.test_after.ta4hsio_ip_out1_b) !== "undefined" && this.test_after.ta4hsio_ip_out1_b !== null)) {
                total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out1_b);
            }
            if (typeof (this.test_after.ta4hsio_ip_out2_b) !== "undefined" && this.test_after.ta4hsio_ip_out2_b !== null) {
                total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out2_b);
            }
            if (typeof (this.test_after.ta4hsio_ip_out3_b) !== "undefined" && this.test_after.ta4hsio_ip_out3_b !== null) {
                total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out3_b);
            }
            if (typeof (this.test_after.ta4hsio_ip_out4_b) !== "undefined" && this.test_after.ta4hsio_ip_out4_b !== null) {
                total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out4_b);
            }
            if (typeof (this.test_after.ta4hsio_ip_out5_b) !== "undefined" && this.test_after.ta4hsio_ip_out5_b !== null) {
                total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out5_b);
            }
            if (typeof (this.test_after.ta4hsio_ip_out6_b) !== "undefined" && this.test_after.ta4hsio_ip_out6_b !== null) {
                total_b = Number(total_b) + Number(this.test_after.ta4hsio_ip_out6_b);
            }
            if (!isNaN(total_b)) {
                this.test_after.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
            }
            // calculate different amps (B)
            diff_b = (Number(this.test_after.ta4hsio_ip_iha_b) - Number(total_b)) / Number(total_b) * 100;
            if (!isNaN(diff_b)) {
                this.test_after.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
            }
            else {
                this.test_after.ta4hsio_ip_diff_b = "-";
            }
            /*       if (
                    (typeof (this.test_after.ta4hsio_ip_out1_b) !== "undefined" || this.test_after.ta4hsio_ip_out1_b !== null || this.test_after.ta4hsio_ip_out1_b) &&
                    (typeof (this.test_after.ta4hsio_ip_out2_b) !== "undefined" || this.test_after.ta4hsio_ip_out2_b !== null || this.test_after.ta4hsio_ip_out2_b) &&
                    (typeof (this.test_after.ta4hsio_ip_out3_b) !== "undefined" || this.test_after.ta4hsio_ip_out3_b !== null || this.test_after.ta4hsio_ip_out3_b) &&
                    (typeof (this.test_after.ta4hsio_ip_out4_b) !== "undefined" || this.test_after.ta4hsio_ip_out4_b !== null || this.test_after.ta4hsio_ip_out4_b) &&
                    (typeof (this.test_after.ta4hsio_ip_out5_b) !== "undefined" || this.test_after.ta4hsio_ip_out5_b !== null || this.test_after.ta4hsio_ip_out5_b) &&
                    (typeof (this.test_after.ta4hsio_ip_out6_b) !== "undefined" || this.test_after.ta4hsio_ip_out6_b !== null || this.test_after.ta4hsio_ip_out6_b)
                  ) {
                    // calculate total out amps (B)
                    total_b = Number(this.test_after.ta4hsio_ip_out1_b) + Number(this.test_after.ta4hsio_ip_out2_b) + Number(this.test_after.ta4hsio_ip_out3_b) +
                      Number(this.test_after.ta4hsio_ip_out4_b) + Number(this.test_after.ta4hsio_ip_out5_b) +
                      Number(this.test_after.ta4hsio_ip_out6_b);
            
                    if (!isNaN(total_b)) {
                      this.test_after.ta4hsio_ip_total_b = Number(total_b).toFixed(2);
                    }
            
                    // calculate different amps (B)
                    diff_b = (Number(total_b) - Number(this.test_after.ta4hsio_ip_iha_b)) / Number(total_b) * 100;
            
                    if (!isNaN(diff_b)) {
                      this.test_after.ta4hsio_ip_diff_b = Number(diff_b).toFixed(2);
                    }
                  } */
            console.log("Total Out Amps: (R) = " + this.test_after.ta4hsio_ip_total_r + ", (Y) = " + this.test_after.ta4hsio_ip_total_y + ", (B) = " + this.test_after.ta4hsio_ip_total_b);
            console.log("% Diff wrt HV Amps: (R) = " + this.test_after.ta4hsio_ip_diff_r + ", (Y) = " + this.test_after.ta4hsio_ip_diff_y + ", (B) = " + this.test_after.ta4hsio_ip_diff_b);
        }
    };
    /**
     * Reason   : Method to calculate summator summary
     * Created  : Alif (22-04-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateTotalSummator = function (type, index, array) {
        console.log("auto calculation summator summary..");
        var usage = 0;
        if (type === "before") {
            if ((typeof (array.ta4reg_amf_b) !== "undefined" || array.ta4reg_amf_b !== null || array.ta4reg_amf_b !== "") &&
                (typeof (array.ta4reg_amb_b) !== "undefined" || array.ta4reg_amb_b !== null || array.ta4reg_amb_b !== "")) {
                usage = Number(array.ta4reg_amf_b) - Number(array.ta4reg_amb_b);
                if (!isNaN(usage) && usage !== 0) {
                    array.ta4reg_amc_b = Number(usage).toFixed(2);
                }
                else {
                    //array.ta4reg_amc_b = "-";
                    array.ta4reg_amc_b = "";
                }
            }
        }
        else {
            if ((typeof (array.ta4reg_amf_a) !== "undefined" || array.ta4reg_amf_a !== null || array.ta4reg_amf_a !== "") &&
                (typeof (array.ta4reg_amb_a) !== "undefined" || array.ta4reg_amb_a !== null || array.ta4reg_amb_a !== "")) {
                usage = Number(array.ta4reg_amf_a) - Number(array.ta4reg_amb_a);
                if (!isNaN(usage) && usage !== 0) {
                    array.ta4reg_amc_a = Number(usage).toFixed(2);
                }
                else {
                    //array.ta4reg_amc_a = "-";
                    array.ta4reg_amc_a = "";
                }
            }
        }
        // Check & Calculate Different
        this.autoCalculateTotalDifferentSummator(type);
    };
    /**
     * Reason   : Method to calculate total summator summary
     * Created  : Alif (22-04-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateTotalDifferentSummator = function (type) {
        console.log("auto calcaulte total different summary..");
        var total = 0, usage = 0, diff = 0;
        if (type === "before") {
            // Calculate Total Before Sum Usage (180)
            for (var i = 0; i < this.summatorBefore.length; i++) {
                if (typeof (this.summatorBefore[i].ta4reg_amc_b) !== "undefined" || this.summatorBefore[i].ta4reg_amc_b !== "" || this.summatorBefore[i].ta4reg_amc_b !== null) {
                    if (typeof (this.summatorBefore[i].ta4reg_amc_b) !== "undefined") {
                        total += Number(this.summatorBefore[i].ta4reg_amc_b);
                    }
                }
            }
            if (!isNaN(total) && total !== 0) {
                this.summatorExtraBefore.ta4sum_consumption = total.toFixed(2); // 180
            }
            else {
                this.summatorExtraBefore.ta4sum_consumption = "-";
            }
            if ((typeof (this.summatorExtraBefore.ta4sum_end) !== "undefined" || this.summatorExtraBefore.ta4sum_end !== null || this.summatorExtraBefore.ta4sum_end !== "") &&
                (typeof (this.summatorExtraBefore.ta4sum_start) !== "undefined") || this.summatorExtraBefore.ta4sum_start !== null || this.summatorExtraBefore.ta4sum_start !== "") {
                usage = Number(this.summatorExtraBefore.ta4sum_end) - Number(this.summatorExtraBefore.ta4sum_start);
                if (!isNaN(usage) && usage !== 0) {
                    this.summatorExtraBefore.ta4sum_sted_diff = usage.toFixed(2); // 880
                }
                else {
                    this.summatorExtraBefore.ta4sum_sted_diff = "-";
                }
            }
            if ((typeof (this.summatorExtraBefore.ta4sum_sted_diff) !== "undefined" || this.summatorExtraBefore.ta4sum_sted_diff !== null || this.summatorExtraBefore.ta4sum_sted_diff !== "") &&
                (typeof (this.summatorExtraBefore.ta4sum_consumption) !== "undefined" || this.summatorExtraBefore.ta4sum_consumption !== null || this.summatorExtraBefore.ta4sum_consumption !== "")) {
                diff = (Number(this.summatorExtraBefore.ta4sum_sted_diff) - Number(this.summatorExtraBefore.ta4sum_consumption)) / Number(this.summatorExtraBefore.ta4sum_sted_diff);
                if (!isNaN(diff) && diff !== 0) {
                    this.summatorExtraBefore.ta4sum_diff = Number(diff * 100).toFixed(2);
                }
                else {
                    this.summatorExtraBefore.ta4sum_diff = "-";
                }
            }
        }
        else {
            // Calculate Total After Sum Usage (180)
            for (var i = 0; i < this.summatorAfter.length; i++) {
                if (typeof (this.summatorAfter[i].ta4reg_amc_a) !== "undefined" || this.summatorAfter[i].ta4reg_amc_a !== "" || this.summatorAfter[i].ta4reg_amc_a !== null) {
                    if (typeof (this.summatorAfter[i].ta4reg_amc_a) !== "undefined") {
                        total += Number(this.summatorAfter[i].ta4reg_amc_a);
                    }
                }
            }
            if (!isNaN(total) && total !== 0) {
                this.summatorExtraAfter.ta4sum_consumption = total.toFixed(2); // 180
            }
            else {
                this.summatorExtraAfter.ta4sum_consumption = "-";
            }
            if ((typeof (this.summatorExtraAfter.ta4sum_end) !== "undefined" || this.summatorExtraAfter.ta4sum_end !== null || this.summatorExtraAfter.ta4sum_end !== "") &&
                (typeof (this.summatorExtraAfter.ta4sum_start) !== "undefined") || this.summatorExtraAfter.ta4sum_start !== null || this.summatorExtraAfter.ta4sum_start !== "") {
                usage = Number(this.summatorExtraAfter.ta4sum_end) - Number(this.summatorExtraAfter.ta4sum_start);
                if (!isNaN(usage) && usage !== 0) {
                    this.summatorExtraAfter.ta4sum_sted_diff = usage.toFixed(2); // 880
                }
                else {
                    this.summatorExtraAfter.ta4sum_sted_diff = "-";
                }
            }
            if ((typeof (this.summatorExtraAfter.ta4sum_sted_diff) !== "undefined" || this.summatorExtraAfter.ta4sum_sted_diff !== null || this.summatorExtraAfter.ta4sum_sted_diff !== "") &&
                (typeof (this.summatorExtraAfter.ta4sum_consumption) !== "undefined" || this.summatorExtraAfter.ta4sum_consumption !== null || this.summatorExtraAfter.ta4sum_consumption !== "")) {
                diff = (Number(this.summatorExtraAfter.ta4sum_sted_diff) - Number(this.summatorExtraAfter.ta4sum_consumption)) / Number(this.summatorExtraAfter.ta4sum_sted_diff);
                if (!isNaN(diff) && diff !== 0) {
                    this.summatorExtraAfter.ta4sum_diff = Number(diff * 100).toFixed(2);
                }
                else {
                    this.summatorExtraAfter.ta4sum_diff = "-";
                }
            }
        }
    };
    /**
     * Reason   : Method to calculate comsumption (180)
     * Created  : Alif (05-03-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateTotalConsumption = function (type) {
        console.log("auto calculate total total consumption..");
        if (type === "before") {
            // Variables
            var totalUsage = 0;
            if ((typeof (this.summatorExtraBefore.ta4reg_amf_b) !== "undefined" && this.summatorExtraBefore.ta4reg_amf_b !== null && this.summatorExtraBefore.ta4reg_amf_b !== "") &&
                (typeof (this.summatorExtraBefore.ta4reg_amb_b) !== "undefined" && this.summatorExtraBefore.ta4reg_amb_b !== null && this.summatorExtraBefore.ta4reg_amb_b !== "")) {
                // Calculate total usage (consumption)
                totalUsage = Number(this.summatorExtraBefore.ta4reg_amf_b) - Number(this.summatorExtraBefore.ta4reg_amb_b);
                if (!isNaN(totalUsage)) {
                    this.summatorExtraBefore.ta4reg_amc_b = Number(totalUsage).toFixed(2);
                }
                else {
                    //this.summatorExtraBefore.ta4reg_amc_b = "-";
                    this.summatorExtraBefore.ta4reg_amc_b = "";
                }
            }
        }
        else {
            // Variables
            var totalUsage = 0;
            if ((typeof (this.summatorExtraAfter.ta4reg_amf_a) !== "undefined" && this.summatorExtraAfter.ta4reg_amf_a !== null && this.summatorExtraAfter.ta4reg_amf_a !== "") &&
                (typeof (this.summatorExtraAfter.ta4reg_amb_a) !== "undefined" && this.summatorExtraAfter.ta4reg_amb_a !== null && this.summatorExtraAfter.ta4reg_amb_a !== "")) {
                // Calculate total usage (consumption)
                totalUsage = Number(this.summatorExtraAfter.ta4reg_amf_a) - Number(this.summatorExtraAfter.ta4reg_amb_a);
                if (!isNaN(totalUsage)) {
                    this.summatorExtraAfter.ta4reg_amc_a = Number(totalUsage).toFixed(2);
                }
                else {
                    //this.summatorExtraAfter.ta4reg_amc_a = "-";
                    this.summatorExtraAfter.ta4reg_amc_a = "";
                }
            }
        }
    };
    /**
     * Reason   : Method to calculate summation inspection
     * Created  : Alif (04-03-2019)
     */
    SealMvhvInspectPage.prototype.autoCalculateSummationInspection = function (type) {
        console.log("auto calculate summation inspection..");
        if (typeof (type) !== "undefined" || type !== "" || type !== null) {
            if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                type = "after";
            }
            else {
                type = "before";
            }
        }
        if (type === "before") {
            // Checking Feeder
            if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.ta0feeder !== null || this.item.json.ta0feeder !== "") {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator")) {
                    // count feeder
                    var fLength = Number(this.item.json.ta0feeder.length);
                    // array value
                    var consumption_b = [];
                    var end880_b = [];
                    var start880_b = [];
                    var totalSum180_b = 0;
                    var end880_sum_b = 0;
                    var start880_sum_b = 0;
                    var totalSum880_b = 0;
                    var totalDiff_b = 0;
                    var consumption_a = [];
                    var end880_a = [];
                    var start880_a = [];
                    // Main Meter Section
                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) ||
                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN)) {
                        for (var i = 0; i < fLength; i++) {
                            if (this.item.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                                var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
                                for (var k = 0; k < mLength; k++) {
                                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) ||
                                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN)) {
                                        // Checking ta4testdata if data available or not
                                        if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                                            // Convert String to JSON Array
                                            var ta4testdata_temp;
                                            // Checking whether is string or array
                                            if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                                                ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                                            }
                                            else {
                                                ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                                            }
                                            while (!Array.isArray(ta4testdata_temp)) {
                                                ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                            }
                                            for (var m = 0; m < ta4testdata_temp.length; m++) {
                                                if (ta4testdata_temp[m].type === "before") {
                                                    // Collect value
                                                    consumption_b.push(ta4testdata_temp[m].data.ta4reg_amc);
                                                    end880_b.push(ta4testdata_temp[m].data.ta4sum_end);
                                                    start880_b.push(ta4testdata_temp[m].data.ta4sum_start);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (consumption_b.length === fLength && end880_b.length === fLength && start880_b.length === fLength) {
                            // Open View Total Summation
                            this.summationView = true;
                            // Calculate Total Summation (180)
                            if (consumption_b.length > 0) {
                                for (var a = 0; a < consumption_b.length; a++) {
                                    totalSum180_b = Number(totalSum180_b) + Number(consumption_b[a]);
                                }
                                if (!isNaN(totalSum180_b)) {
                                    this.test_before.ta4sum_consumption = Number(totalSum180_b).toFixed(2);
                                }
                            }
                            // Calculate Total Summation (880)
                            if (end880_b.length > 0) {
                                for (var a = 0; a < end880_b.length; a++) {
                                    end880_sum_b = Number(end880_sum_b) + Number(end880_b[a]);
                                }
                            }
                            if (start880_b.length > 0) {
                                for (var a = 0; a < start880_b.length; a++) {
                                    start880_sum_b = Number(start880_sum_b) + Number(start880_b[a]);
                                }
                            }
                            if (!isNaN(end880_sum_b) && !isNaN(start880_sum_b)) {
                                totalSum880_b = Number(end880_sum_b) - Number(start880_sum_b);
                                if (!isNaN(totalSum880_b)) {
                                    this.test_before.ta4sum_sted_diff = Number(totalSum880_b).toFixed(2);
                                }
                            }
                            if (!isNaN(totalSum180_b) && !isNaN(totalSum880_b)) {
                                totalDiff_b = ((Number(totalSum880_b) - Number(totalSum180_b)) / Number(totalSum880_b)) * 100;
                                if (!isNaN(totalDiff_b)) {
                                    this.test_before.ta4sum_diff = Number(totalDiff_b).toFixed(2);
                                }
                            }
                        }
                        else {
                            // Close View Total Summation
                            this.summationView = false;
                        }
                    }
                    // Check Meter Section
                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) ||
                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK)) {
                        for (var i = 0; i < fLength; i++) {
                            if (this.item.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                                var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
                                for (var k = 0; k < mLength; k++) {
                                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) ||
                                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK)) {
                                        // Checking ta4testdata if data available or not
                                        if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                                            // Convert String to JSON Array
                                            var ta4testdata_temp;
                                            // Checking whether is string or array
                                            if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                                                ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                                            }
                                            else {
                                                ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                                            }
                                            while (!Array.isArray(ta4testdata_temp)) {
                                                ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                            }
                                            for (var m = 0; m < ta4testdata_temp.length; m++) {
                                                if (ta4testdata_temp[m].type === "before") {
                                                    // Collect value
                                                    consumption_b.push(ta4testdata_temp[m].data.ta4reg_amc);
                                                    end880_b.push(ta4testdata_temp[m].data.ta4sum_end);
                                                    start880_b.push(ta4testdata_temp[m].data.ta4sum_start);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (consumption_b.length === fLength && end880_b.length === fLength && start880_b.length === fLength) {
                            // Open View Total Summation
                            this.summationView = true;
                            // Calculate Total Summation (180)
                            if (consumption_b.length > 0) {
                                for (var a = 0; a < consumption_b.length; a++) {
                                    totalSum180_b = Number(totalSum180_b) + Number(consumption_b[a]);
                                }
                                if (!isNaN(totalSum180_b)) {
                                    this.test_before.ta4sum_consumption = Number(totalSum180_b).toFixed(2);
                                }
                            }
                            // Calculate Total Summation (880)
                            if (end880_b.length > 0) {
                                for (var a = 0; a < end880_b.length; a++) {
                                    end880_sum_b = Number(end880_sum_b) + Number(end880_b[a]);
                                }
                            }
                            if (start880_b.length > 0) {
                                for (var a = 0; a < start880_b.length; a++) {
                                    start880_sum_b = Number(start880_sum_b) + Number(start880_b[a]);
                                }
                            }
                            if (!isNaN(end880_sum_b) && !isNaN(start880_sum_b)) {
                                totalSum880_b = Number(end880_sum_b) - Number(start880_sum_b);
                                if (!isNaN(totalSum880_b)) {
                                    this.test_before.ta4sum_sted_diff = Number(totalSum880_b).toFixed(2);
                                }
                            }
                            if (!isNaN(totalSum180_b) && !isNaN(totalSum880_b)) {
                                totalDiff_b = ((Number(totalSum880_b) - Number(totalSum180_b)) / Number(totalSum880_b)) * 100;
                                if (!isNaN(totalDiff_b)) {
                                    this.test_before.ta4sum_diff = Number(totalDiff_b).toFixed(2);
                                }
                            }
                        }
                        else {
                            // Close View Total Summation
                            this.summationView = false;
                        }
                    }
                }
            }
        }
        else {
            // Checking Feeder
            if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.ta0feeder !== null || this.item.json.ta0feeder !== "") {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator")) {
                    // count feeder
                    var fLength = Number(this.item.json.ta0feeder.length);
                    // array value
                    var consumption_b = [];
                    var end880_b = [];
                    var start880_b = [];
                    var totalSum180_b = 0;
                    var end880_sum_b = 0;
                    var start880_sum_b = 0;
                    var totalSum880_b = 0;
                    var totalDiff_b = 0;
                    var consumption_a = [];
                    var end880_a = [];
                    var start880_a = [];
                    var totalSum180_a = 0;
                    var end880_sum_a = 0;
                    var start880_sum_a = 0;
                    var totalSum880_a = 0;
                    var totalDiff_a = 0;
                    // Main Meter Section
                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) ||
                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN)) {
                        for (var i = 0; i < fLength; i++) {
                            var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
                            for (var k = 0; k < mLength; k++) {
                                if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) ||
                                    (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN)) {
                                    // Checking ta4testdata if data available or not
                                    if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                                        // Convert String to JSON Array
                                        var ta4testdata_temp;
                                        // Checking whether is string or array
                                        if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                                            ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                                        }
                                        else {
                                            ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                                        }
                                        while (!Array.isArray(ta4testdata_temp)) {
                                            ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                        }
                                        for (var m = 0; m < ta4testdata_temp.length; m++) {
                                            if (ta4testdata_temp[m].type === "after") {
                                                // Collect value
                                                consumption_a.push(ta4testdata_temp[m].data.ta4reg_amc);
                                                end880_a.push(ta4testdata_temp[m].data.ta4sum_end);
                                                start880_a.push(ta4testdata_temp[m].data.ta4sum_start);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (consumption_a.length === fLength && end880_a.length === fLength && start880_a.length === fLength) {
                            // Open View Total Summation
                            this.summationView = true;
                            // Calculate Total Summation (180)
                            if (consumption_a.length > 0) {
                                for (var a = 0; a < consumption_a.length; a++) {
                                    totalSum180_a = Number(totalSum180_b) + Number(consumption_a[a]);
                                }
                                if (!isNaN(totalSum180_a)) {
                                    this.test_after.ta4sum_consumption = Number(totalSum180_a).toFixed(2);
                                }
                            }
                            // Calculate Total Summation (880)
                            if (end880_a.length > 0) {
                                for (var a = 0; a < end880_a.length; a++) {
                                    end880_sum_a = Number(end880_sum_a) + Number(end880_a[a]);
                                }
                            }
                            if (start880_a.length > 0) {
                                for (var a = 0; a < start880_b.length; a++) {
                                    start880_sum_a = Number(start880_sum_a) + Number(start880_a[a]);
                                }
                            }
                            if (!isNaN(end880_sum_a) && !isNaN(start880_sum_a)) {
                                totalSum880_a = Number(end880_sum_a) - Number(start880_sum_a);
                                if (!isNaN(totalSum880_a)) {
                                    this.test_after.ta4sum_sted_diff = Number(totalSum880_a).toFixed(2);
                                }
                            }
                            if (!isNaN(totalSum180_a) && !isNaN(totalSum880_a)) {
                                totalDiff_a = ((Number(totalSum880_a) - Number(totalSum180_a)) / Number(totalSum880_a)) * 100;
                                if (!isNaN(totalDiff_a)) {
                                    this.test_after.ta4sum_diff = Number(totalDiff_a).toFixed(2);
                                }
                            }
                        }
                        else {
                            // Close View Total Summation
                            this.summationView = false;
                        }
                    }
                    // Main Meter Section
                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) ||
                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK)) {
                        for (var i = 0; i < fLength; i++) {
                            var mLength = Number(this.item.json.ta0feeder[i].multiassetlocci.length);
                            for (var k = 0; k < mLength; k++) {
                                if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) ||
                                    (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP && this.item.json.ta0feeder[i].multiassetlocci[k].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK)) {
                                    // Checking ta4testdata if data available or not
                                    if (this.item.json.ta0feeder[i].multiassetlocci[k].hasOwnProperty("ta4testdata")) {
                                        // Convert String to JSON Array
                                        var ta4testdata_temp;
                                        // Checking whether is string or array
                                        if (Array.isArray((this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata))) {
                                            ta4testdata_temp = this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata;
                                        }
                                        else {
                                            ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[i].multiassetlocci[k].ta4testdata);
                                        }
                                        while (!Array.isArray(ta4testdata_temp)) {
                                            ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                        }
                                        for (var m = 0; m < ta4testdata_temp.length; m++) {
                                            if (ta4testdata_temp[m].type === "after") {
                                                // Collect value
                                                consumption_a.push(ta4testdata_temp[m].data.ta4reg_amc);
                                                end880_a.push(ta4testdata_temp[m].data.ta4sum_end);
                                                start880_a.push(ta4testdata_temp[m].data.ta4sum_start);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (consumption_a.length === fLength && end880_a.length === fLength && start880_a.length === fLength) {
                            // Open View Total Summation
                            this.summationView = true;
                            // Calculate Total Summation (180)
                            if (consumption_a.length > 0) {
                                for (var a = 0; a < consumption_a.length; a++) {
                                    totalSum180_a = Number(totalSum180_b) + Number(consumption_a[a]);
                                }
                                if (!isNaN(totalSum180_a)) {
                                    this.test_after.ta4sum_consumption = Number(totalSum180_a).toFixed(2);
                                }
                            }
                            // Calculate Total Summation (880)
                            if (end880_a.length > 0) {
                                for (var a = 0; a < end880_a.length; a++) {
                                    end880_sum_a = Number(end880_sum_a) + Number(end880_a[a]);
                                }
                            }
                            if (start880_a.length > 0) {
                                for (var a = 0; a < start880_b.length; a++) {
                                    start880_sum_a = Number(start880_sum_a) + Number(start880_a[a]);
                                }
                            }
                            if (!isNaN(end880_sum_a) && !isNaN(start880_sum_a)) {
                                totalSum880_a = Number(end880_sum_a) - Number(start880_sum_a);
                                if (!isNaN(totalSum880_a)) {
                                    this.test_after.ta4sum_sted_diff = Number(totalSum880_a).toFixed(2);
                                }
                            }
                            if (!isNaN(totalSum180_a) && !isNaN(totalSum880_a)) {
                                totalDiff_a = ((Number(totalSum880_a) - Number(totalSum180_a)) / Number(totalSum880_a)) * 100;
                                if (!isNaN(totalDiff_a)) {
                                    this.test_after.ta4sum_diff = Number(totalDiff_a).toFixed(2);
                                }
                            }
                        }
                        else {
                            // Close View Total Summation
                            this.summationView = false;
                        }
                    }
                }
            }
        }
    };
    /**
     * Reason   : Saving test details to multiassetlocci (device)..
     * Created  : Alif (14-01-2019)
     */
    SealMvhvInspectPage.prototype.saveTestDetails = function () {
        var _this = this;
        debugger;
        console.log("save test details..");
        // Test Data 
        console.log("test data : " + JSON.stringify(this.test_before));
        console.log("test data : " + JSON.stringify(this.test_after));
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
        // Save value to ta0testdetail for Pre-Commissioning & Accuracy Test
        // Checking Meter Type (New / Old)
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta0bcrmuploadindicator") &&
            typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator) !== "undefined" &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator !== null &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator !== "") {
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) {
                // Default value from parent
                if (this.maIndex != undefined) {
                    var assetnum = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
                    var siteid = this.item.json.siteid;
                    var wonum = this.item.json.wonum;
                }
                // Taking After Value only to send to ta0testdetail
                // Accuracy Test
                if (this.accuracyTest.loc_test_ta0na == "Y") {
                    this.accuracyTest.assetnum = assetnum;
                    this.accuracyTest.siteid = siteid;
                    this.accuracyTest.wonum = wonum;
                    this.accuracyTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
                    this.accuracyTest.ta0naremarks = "-";
                }
                else {
                    this.accuracyTest.assetnum = assetnum;
                    this.accuracyTest.siteid = siteid;
                    this.accuracyTest.wonum = wonum;
                    this.accuracyTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
                    this.accuracyTest.ta0at_test1 = this.test_after.ta4ma_test1;
                    this.accuracyTest.ta0at_test2 = this.test_after.ta4ma_test2;
                    this.accuracyTest.ta0at_test3 = this.test_after.ta4ma_test3;
                    this.accuracyTest.ta0at_avg = this.test_after.ta4ma_avg;
                }
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracyTest);
                // Pre-Commissioning Test
                if (this.preCommissioningTest.loc_test_ta0na == "Y") {
                    this.preCommissioningTest.assetnum = assetnum;
                    this.preCommissioningTest.siteid = siteid;
                    this.preCommissioningTest.wonum = wonum;
                    this.preCommissioningTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT;
                    this.preCommissioningTest.ta0naremarks = "-";
                }
                else {
                    this.preCommissioningTest.assetnum = assetnum;
                    this.preCommissioningTest.siteid = siteid;
                    this.preCommissioningTest.wonum = wonum;
                    this.preCommissioningTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PCMT;
                    this.preCommissioningTest.ta0pc_contctpt_r = this.test_after.ta4pc_contctpt_r;
                    this.preCommissioningTest.ta0pc_contctpt_y = this.test_after.ta4pc_contctpt_y;
                    this.preCommissioningTest.ta0pc_contctpt_b = this.test_after.ta4pc_contctpt_b;
                    this.preCommissioningTest.ta0pc_ctratio_r = this.test_after.ta4pc_ctratio_r;
                    this.preCommissioningTest.ta0pc_ctratio_y = this.test_after.ta4pc_ctratio_y;
                    this.preCommissioningTest.ta0pc_ctratio_b = this.test_after.ta4pc_ctratio_b;
                    this.preCommissioningTest.ta0pc_ctpolar_r = this.test_after.ta4pc_ctpolar_r;
                    this.preCommissioningTest.ta0pc_ctpolar_y = this.test_after.ta4pc_ctpolar_y;
                    this.preCommissioningTest.ta0pc_ctpolar_b = this.test_after.ta4pc_ctpolar_b;
                    this.preCommissioningTest.ta0pc_kio_wirg = this.test_after.ta4pc_kio_wirg;
                    this.preCommissioningTest.ta0pc_s2_starerh = this.test_after.ta4pc_s2_starerh;
                    this.preCommissioningTest.ta0pc_ptpolar = this.test_after.ta4pc_ptpolar;
                    this.preCommissioningTest.ta0pc_nseaptpas = this.test_after.ta4pc_nseaptpas;
                }
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.preCommissioningTest);
            }
        }
        // Saving if meter 90 / 92 only  and device voltage only more than 04.. and Meter Main or Check existing only..
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V &&
            (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) &&
            (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER ||
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER)) {
            // Saving for Summator Summary if Feeder more than 2..
            if (this.summation) {
                console.log("summation : " + JSON.stringify(this.summation));
                //console.log("ta4sum_consumption : "+this.summatorExtraBefore.ta4sum_consumption);
                //console.log("ta4sum_end : "+this.summatorExtraBefore.ta4sum_end);
                //console.log("ta4sum_start : "+this.summatorExtraBefore.ta4sum_start);
                //console.log("ta4sum_sted_diff : "+this.summatorExtraBefore.ta4sum_sted_diff);
                //console.log("ta4sum_diff : "+this.summatorExtraBefore.ta4sum_diff);
                // Before Section
                this.test_before.summator = []; //002
                //set value for summatorBefore  002 start
                for (var i = 0; i < this.summatorBefore.length; i++) {
                    var summator;
                    summator = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
                    summator = {};
                    summator.feeder = "F" + Number(i + 1);
                    summator.ta4reg_amf = this.summatorBefore[i].ta4reg_amf_b;
                    summator.ta4reg_amb = this.summatorBefore[i].ta4reg_amb_b;
                    summator.ta4reg_amc = this.summatorBefore[i].ta4reg_amc_b;
                    this.test_before.summator.push(summator);
                }
                console.log("test_before : " + JSON.stringify(this.test_before));
                //002 end
                /* 002
                if ((typeof (this.summatorExtraBefore.ta4sum_consumption) !== "undefined" && this.summatorExtraBefore.ta4sum_consumption !== null && this.summatorExtraBefore.ta4sum_consumption !== "") &&
                  (typeof (this.summatorExtraBefore.ta4sum_end) !== "undefined" && this.summatorExtraBefore.ta4sum_end !== null && this.summatorExtraBefore.ta4sum_end !== "") &&
                  (typeof (this.summatorExtraBefore.ta4sum_start) !== "undefined" && this.summatorExtraBefore.ta4sum_start !== null && this.summatorExtraBefore.ta4sum_start !== "") &&
                  (typeof (this.summatorExtraBefore.ta4sum_sted_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_sted_diff !== null || this.summatorExtraBefore.ta4sum_sted_diff !== "") &&
                  (typeof (this.summatorExtraBefore.ta4sum_diff) !== "undefined" && this.summatorExtraBefore.ta4sum_diff !== null && this.summatorExtraBefore.ta4sum_diff !== "")) {
                */
                /*
                for (var i = 0; i < this.summatorBefore.length; i++) {
                  var summator: any;
                  summator = new DeviceTest();
                  summator = {};
                  summator.feeder = "F" + Number(i + 1);
                  summator.ta4reg_amf = this.summatorBefore[i].ta4reg_amf_b;
                  summator.ta4reg_amb = this.summatorBefore[i].ta4reg_amb_b;
                  summator.ta4reg_amc = this.summatorBefore[i].ta4reg_amc_b;
                  this.test_before.summator.push(summator);
      
                  // this.summatorBefore[i].feeder = "F" + Number(i + 1);
                  // this.test_before.summator.push(this.summatorBefore[i]);
                }
                
                002 */
                var extraVal;
                extraVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */];
                extraVal = {};
                extraVal.feeder = "extra";
                extraVal.ta4sum_consumption = this.summatorExtraBefore.ta4sum_consumption;
                extraVal.ta4sum_end = this.summatorExtraBefore.ta4sum_end;
                extraVal.ta4sum_start = this.summatorExtraBefore.ta4sum_start;
                extraVal.ta4sum_sted_diff = this.summatorExtraBefore.ta4sum_sted_diff;
                extraVal.ta4sum_diff = this.summatorExtraBefore.ta4sum_diff;
                this.test_before.summator.push(extraVal);
                //} //002
                // After Section  002 start
                this.test_after.summator = [];
                //console.log("ta4sum_consumption : "+this.summatorExtraAfter.ta4sum_consumption);
                //console.log("ta4sum_end : "+this.summatorExtraAfter.ta4sum_end);
                //console.log("ta4sum_start : "+this.summatorExtraAfter.ta4sum_start);
                //console.log("ta4sum_sted_diff : "+this.summatorExtraAfter.ta4sum_sted_diff);
                //console.log("ta4sum_diff : "+this.summatorExtraAfter.ta4sum_diff);
                //set value for summatorAfter
                for (var i = 0; i < this.summatorAfter.length; i++) {
                    var summator;
                    summator = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */]();
                    summator = {};
                    summator.feeder = "F" + Number(i + 1);
                    summator.ta4reg_amf = this.summatorAfter[i].ta4reg_amf_a;
                    summator.ta4reg_amb = this.summatorAfter[i].ta4reg_amb_a;
                    summator.ta4reg_amc = this.summatorAfter[i].ta4reg_amc_a;
                    this.test_after.summator.push(summator);
                }
                console.log("test_after : " + JSON.stringify(this.test_after));
                /*
                if ((typeof (this.summatorExtraAfter.ta4sum_consumption) !== "undefined" && this.summatorExtraAfter.ta4sum_consumption !== null && this.summatorExtraAfter.ta4sum_consumption !== "") &&
                  (typeof (this.summatorExtraAfter.ta4sum_end) !== "undefined" && this.summatorExtraAfter.ta4sum_end !== null && this.summatorExtraAfter.ta4sum_end !== "") &&
                  (typeof (this.summatorExtraAfter.ta4sum_start) !== "undefined" && this.summatorExtraAfter.ta4sum_start !== null && this.summatorExtraAfter.ta4sum_start !== "") &&
                  (typeof (this.summatorExtraAfter.ta4sum_sted_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_sted_diff !== null && this.summatorExtraAfter.ta4sum_sted_diff !== "") &&
                  (typeof (this.summatorExtraAfter.ta4sum_diff) !== "undefined" && this.summatorExtraAfter.ta4sum_diff !== null && this.summatorExtraAfter.ta4sum_diff !== "")) {
                */
                /*
                for (var i = 0; i < this.summatorAfter.length; i++) {
                  var summator: any;
                  summator = new DeviceTest();
                  summator = {};
                  summator.feeder = "F" + Number(i + 1);
                  summator.ta4reg_amf = this.summatorAfter[i].ta4reg_amf_a;
                  summator.ta4reg_amb = this.summatorAfter[i].ta4reg_amb_a;
                  summator.ta4reg_amc = this.summatorAfter[i].ta4reg_amc_a;
                  this.test_after.summator.push(summator);
      
                  // this.summatorAfter[i].feeder = "F" + Number(i + 1);
                  // this.test_after.summator.push(this.summatorAfter[i]);
                }
                */
                var extraVal;
                extraVal = new __WEBPACK_IMPORTED_MODULE_4__pojo_DeviceTest__["a" /* DeviceTest */];
                extraVal = {};
                extraVal.feeder = "extra";
                extraVal.ta4sum_consumption = this.summatorExtraAfter.ta4sum_consumption;
                extraVal.ta4sum_end = this.summatorExtraAfter.ta4sum_end;
                extraVal.ta4sum_start = this.summatorExtraAfter.ta4sum_start;
                extraVal.ta4sum_sted_diff = this.summatorExtraAfter.ta4sum_sted_diff;
                extraVal.ta4sum_diff = this.summatorExtraAfter.ta4sum_diff;
                this.test_after.summator.push(extraVal);
                //}
            }
        }
        //console.log("test_before 2 : "+JSON.stringify(this.test_before));
        //console.log("test_after 2 : "+JSON.stringify(this.test_after));
        // Checking Existing Inspection Summary
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty("ta4testdata") &&
            typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata) !== "undefined" &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== null &&
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata !== "") {
            var ta4testdata_temp;
            var inspection_data = [];
            console.log("Contain existing Inspection Summary");
            ta4testdata_temp = JSON.parse(JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            console.log("ta4testdata_temp : " + JSON.stringify(ta4testdata_temp));
            console.log("type : " + ta4testdata_temp.type);
            if (typeof (ta4testdata_temp.type) !== "undefined") {
                if (ta4testdata_temp.type == "inspection") {
                    inspection_data.push({ data: ta4testdata_temp.data, type: 'inspection', status: 'complete' });
                }
            }
            else {
                var tIndex = ta4testdata_temp.findIndex(function (item) {
                    return item.type === 'inspection';
                });
                if (tIndex > 0) {
                    inspection_data = ta4testdata_temp[tIndex];
                }
                //console.log("tIndex : "+tIndex);
                //console.log("inspection_data : "+JSON.stringify(inspection_data));
            }
            //console.log("test_before 3 : "+JSON.stringify(this.test_before));
            //console.log("test_after 3 : "+JSON.stringify(this.test_after));
            // Save Test Data into ta4testdata
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_before, type: 'before', status: 'complete' });
            //console.log("ta0feeder 1: "+JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_after, type: 'after', status: 'complete' });
            //console.log("ta0feeder 2: "+JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
            //console.log("tIndex : "+tIndex);
            if (tIndex > 0) {
                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push(inspection_data);
            }
            //console.log("ta0feeder 3: "+JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        }
        else {
            console.log("Save Test Data into ta4testdata");
            //console.log("test_before 3 : "+JSON.stringify(this.test_before));
            //console.log("test_after 3 : "+JSON.stringify(this.test_after));
            // Save Test Data into ta4testdata
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = [];
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_before, type: 'before', status: 'complete' });
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata.push({ data: this.test_after, type: 'after', status: 'complete' });
        }
        console.log("Test Data (Before): " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        // Move Temporary data to Original Json
        this.itemOri = JSON.parse(JSON.stringify(this.item));
        // Test Status
        // TODO: Checking status all test inspection if already update value or not.
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
        console.log("Test Data (" + this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus + "): " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata));
        this.gf.startLoading();
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
        this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        console.log('SEAL MVHV Inspection : ' + JSON.stringify(this.itemOri.json.ta0feeder));
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            // Convert ta4testdata into string data type before sync is running.
            // Created : Alif (21.02.2020)
            var testdata = (JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata)).toString();
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta4testdata = testdata;
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.displayToast("MVHV Inspection locally updated.");
            this.gf.stopLoading();
            // Back to service-execution page.
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        }
        else if ((__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    //item, wonumVal, pageAction, feederCode, workOrderType) 
                    var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                    var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                    var itemArray = [];
                    itemArray = (itemVal);
                    _this.dataService
                        .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                        _this.gf.warningAlert("Success", "MVHV Inspection  save successfully.", "Dismiss");
                        _this.gf.stopLoading();
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                        _this.gf.stopLoading();
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.gf.warningAlert("Success", "MVHV Inspection locally updated.", "Dismiss");
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
                .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
                console.log(' result + ' + JSON.stringify(results));
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                /** convert string into json */
                var resultDes = JSON.parse(results.toString());
                if (resultDes.processStatus === "failure") {
                    _this.gf.displayToast(resultDes.description);
                }
                else {
                    _this.gf.warningAlert("Success", "MVHV Inspection  save successfully.", "Dismiss");
                    // Back to service-execution page.
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                }
                _this.gf.stopLoading();
            }).catch(function (error) {
                console.log('service failure : ' + error);
                _this.gf.displayToast(error);
                _this.gf.stopLoading();
            });
        }
    };
    SealMvhvInspectPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /**
     * Reason   : Reset all test inspection in one click.
     * Created  : Alif (12-03-2019)
     */
    SealMvhvInspectPage.prototype.resetAllTestInspection = function () {
        var _this = this;
        console.log("reset all test inspection in one click..");
        var alert = this.alertCtrl.create({
            title: 'MVHV Inspection',
            message: 'Reset all data ?',
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
                        _this.test_after = {};
                        _this.test_before = {};
                        _this.testCategory = null;
                        // Settings Default
                        _this.test_before.ta4mct_loc_test_ta0na = "N";
                        _this.test_before.ta4vrph_loc_test_ta0na = "N";
                        _this.test_before.ta4ma_loc_test_ta0na = "N";
                        _this.test_before.ta4ef_loc_test_ta0na = "N";
                        _this.test_before.ta4ctr_loc_test_ta0na = "N";
                        _this.test_before.ta4hspe_loc_test_ta0na = "N";
                        _this.test_before.ta4hsls_loc_test_ta0na = "N";
                        _this.test_before.ta4hsio_loc_test_ta0na = "N";
                        _this.test_before.ta4ai_loc_test_ta0na = "N";
                        _this.test_before.ta4nafa_loc_test_ta0na = "N";
                        _this.test_before.ta4ins_loc_test_ta0na = "N";
                        _this.test_before.ta4pc_loc_test_ta0na = "N";
                        _this.test_after.ta4mct_loc_test_ta0na = "N";
                        _this.test_after.ta4vrph_loc_test_ta0na = "N";
                        _this.test_after.ta4ma_loc_test_ta0na = "N";
                        _this.test_after.ta4ef_loc_test_ta0na = "N";
                        _this.test_after.ta4ctr_loc_test_ta0na = "N";
                        _this.test_after.ta4hspe_loc_test_ta0na = "N";
                        _this.test_after.ta4hsls_loc_test_ta0na = "N";
                        _this.test_after.ta4hsio_loc_test_ta0na = "N";
                        _this.test_after.ta4ai_loc_test_ta0na = "N";
                        _this.test_after.ta4nafa_loc_test_ta0na = "N";
                        _this.test_after.ta4ins_loc_test_ta0na = "N";
                        _this.test_after.ta4pc_loc_test_ta0na = "N";
                        // Summator Section
                        if (typeof (_this.item.json.ta0feeder) !== "undefined") {
                            if (_this.item.json.ta0feeder.length > 0) {
                                // Reset Fields Summator Before Section
                                if (typeof (_this.summatorBefore) !== "undefined") {
                                    for (var i = 0; i < _this.summatorBefore.length; i++) {
                                        _this.summatorBefore[i].ta4reg_amf = "";
                                        _this.summatorBefore[i].ta4reg_amb = "";
                                        _this.summatorBefore[i].ta4reg_amc = "";
                                        _this.summatorBefore[i].ta4reg_amf_b = "";
                                        _this.summatorBefore[i].ta4reg_amb_b = "";
                                        _this.summatorBefore[i].ta4reg_amc_b = "";
                                    }
                                }
                                // Reset Fields Summator After Section
                                if (typeof (_this.summatorAfter) !== "undefined") {
                                    for (var i = 0; i < _this.summatorAfter.length; i++) {
                                        _this.summatorAfter[i].ta4reg_amf = "";
                                        _this.summatorAfter[i].ta4reg_amb = "";
                                        _this.summatorAfter[i].ta4reg_amc = "";
                                        _this.summatorAfter[i].ta4reg_amf_a = "";
                                        _this.summatorAfter[i].ta4reg_amb_a = "";
                                        _this.summatorAfter[i].ta4reg_amc_a = "";
                                    }
                                }
                                _this.summatorExtraBefore = "";
                                _this.summatorExtraAfter = "";
                            }
                        }
                        _this.selectionTestList('reset');
                    },
                }
            ]
        });
        alert.present();
    };
    /**
     * Reason   : Reset Specific Test Inspection
     * Created  : Alif (06/05/2019)
     */
    SealMvhvInspectPage.prototype.resetTestInspection = function (type) {
        var _this = this;
        console.log("clear value for inspection test.");
        var section;
        if (typeof (type) !== "undefined" || type !== null || type !== "") {
            // Check Before/After
            var alert_1 = this.alertCtrl.create({
                title: 'Section',
                inputs: [
                    {
                        type: 'radio',
                        label: 'Before',
                        value: 'before'
                    },
                    {
                        type: 'radio',
                        label: 'After',
                        value: 'after'
                    }
                ],
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
                        handler: function (data) {
                            console.log('OK clicked: ' + data);
                            if (typeof (data) !== "undefined" && data !== null && data !== "") {
                                _this.resetValueInspection(type, data);
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    /**
     * Reason   : Method to reset value inspection.
     * Created  : Alif (09/05/2019)
     */
    SealMvhvInspectPage.prototype.resetValueInspection = function (type, section) {
        console.log("method to clear based on type and section..");
        switch (type) {
            case "mct": {
                if (section === "before") {
                    this.test_before.ta4mct_loc_test_ta0na = 'N';
                    this.test_before.ta4mct_ta0naremarks = '-';
                    this.test_before.ta4mct_md = '-';
                    this.test_before.ta4mct_vt = '-';
                    this.test_before.ta4mct_pf = '-';
                    this.test_before.ta4mct_ac = '-';
                    this.test_before.ta4mct_cl = '-';
                }
                else {
                    this.test_after.ta4mct_loc_test_ta0na = 'N';
                    this.test_after.ta4mct_ta0naremarks = '';
                    this.test_after.ta4mct_md = '';
                    this.test_after.ta4mct_vt = '';
                    this.test_after.ta4mct_pf = '';
                    this.test_after.ta4mct_ac = '';
                    this.test_after.ta4mct_cl = '';
                }
                break;
            }
            case "vrph": {
                if (section === "before") {
                    this.test_before.ta4vrph_loc_test_ta0na = "N";
                    this.test_before.ta4vrph_ta0naremarks = "-";
                    this.test_before.ta4vrph_ry = "-";
                    this.test_before.ta4vrph_yb = "-";
                    this.test_before.ta4vrph_rb = "-";
                    this.test_before.ta4vrph_rn = "-";
                    this.test_before.ta4vrph_yn = "-";
                    this.test_before.ta4vrph_bn = "-";
                    this.test_before.ta4vrph_re = "-";
                    this.test_before.ta4vrph_ye = "-";
                    this.test_before.ta4vrph_be = "-";
                    this.test_before.ta4vrph_ne = "-";
                    this.test_before.ta4vrph_ph = "-";
                }
                else {
                    this.test_after.ta4vrph_loc_test_ta0na = "N";
                    this.test_after.ta4vrph_ta0naremarks = "-";
                    this.test_after.ta4vrph_ry = "-";
                    this.test_after.ta4vrph_yb = "-";
                    this.test_after.ta4vrph_rb = "-";
                    this.test_after.ta4vrph_rn = "-";
                    this.test_after.ta4vrph_yn = "-";
                    this.test_after.ta4vrph_bn = "-";
                    this.test_after.ta4vrph_re = "-";
                    this.test_after.ta4vrph_ye = "-";
                    this.test_after.ta4vrph_be = "-";
                    this.test_after.ta4vrph_ne = "-";
                    this.test_after.ta4vrph_ph = "-";
                }
                break;
            }
            case "ma": {
                if (section === "before") {
                    this.test_before.ta4ma_loc_test_ta0na = "N";
                    this.test_before.ta4ma_ta0naremarks = "-";
                    this.test_before.ta4ma_brand = "-";
                    this.test_before.ta4ma_serialnum = "-";
                    this.test_before.ta4ma_calibration = "-";
                    this.test_before.ta4ma_test1 = "-";
                    this.test_before.ta4ma_test2 = "-";
                    this.test_before.ta4ma_test3 = "-";
                    this.test_before.ta4ma_avg = "-";
                    this.test_before.ta4ma_reg_start = "-";
                    this.test_before.ta4ma_reg_stop = "-";
                    this.test_before.ta4ma_reg_usage = "-";
                    this.test_before.ta4ma_reg_error = "-";
                    this.test_before.ta4ma_read_start = "-";
                    this.test_before.ta4ma_read_end = "-";
                    this.test_before.ta4ma_read_diff = "-";
                    this.test_before.ta4ma_time_start = "-";
                    this.test_before.ta4ma_time_end = "-";
                    this.test_before.ta4ma_time_duration = "-";
                    this.test_before.ta4ma_v_avg = "-";
                    this.test_before.ta4ma_i_avg = "-";
                    this.test_before.ta4ma_c_avg = "-";
                    this.test_before.ta4ma_calc_energy = "-";
                    this.test_before.ta4ma_diff = "-";
                }
                else {
                    this.test_after.ta4ma_loc_test_ta0na = "N";
                    this.test_after.ta4ma_ta0naremarks = "-";
                    this.test_after.ta4ma_brand = "-";
                    this.test_after.ta4ma_serialnum = "-";
                    this.test_after.ta4ma_calibration = "-";
                    this.test_after.ta4ma_test1 = "-";
                    this.test_after.ta4ma_test2 = "-";
                    this.test_after.ta4ma_test3 = "-";
                    this.test_after.ta4ma_avg = "-";
                    this.test_after.ta4ma_reg_start = "-";
                    this.test_after.ta4ma_reg_stop = "-";
                    this.test_after.ta4ma_reg_usage = "-";
                    this.test_after.ta4ma_reg_error = "-";
                    this.test_after.ta4ma_read_start = "-";
                    this.test_after.ta4ma_read_end = "-";
                    this.test_after.ta4ma_read_diff = "-";
                    this.test_after.ta4ma_time_start = "-";
                    this.test_after.ta4ma_time_end = "-";
                    this.test_after.ta4ma_time_duration = "-";
                    this.test_after.ta4ma_v_avg = "-";
                    this.test_after.ta4ma_i_avg = "-";
                    this.test_after.ta4ma_c_avg = "-";
                    this.test_after.ta4ma_calc_energy = "-";
                    this.test_after.ta4ma_diff = "-";
                }
                break;
            }
            case "ef": {
                if (section === "before") {
                    this.test_before.ta4ef_loc_test_ta0na = "N";
                    this.test_before.ta4ef_ta0naremarks = "-";
                    this.test_before.ta4ef_led_r = "-";
                    this.test_before.ta4ef_led_ind_r = "-";
                    this.test_before.ta4ef_led_y = "-";
                    this.test_before.ta4ef_led_ind_y = "-";
                    this.test_before.ta4ef_led_b = "-";
                    this.test_before.ta4ef_led_ind_b = "-";
                }
                else {
                    this.test_after.ta4ef_loc_test_ta0na = "N";
                    this.test_after.ta4ef_ta0naremarks = "-";
                    this.test_after.ta4ef_led_r = "-";
                    this.test_after.ta4ef_led_ind_r = "-";
                    this.test_after.ta4ef_led_y = "-";
                    this.test_after.ta4ef_led_ind_y = "-";
                    this.test_after.ta4ef_led_b = "-";
                    this.test_after.ta4ef_led_ind_b = "-";
                }
                break;
            }
            case "ctr": {
                if (section === "before") {
                    this.test_before.ta4ctr_loc_test_ta0na = "N";
                    this.test_before.ta4ctr_ta0naremarks = "-";
                    this.test_before.ta4ctr_ct_ratio_0 = "-";
                    this.test_before.ta4ctr_ct_ratio_1 = "-";
                    this.test_before.ta4ctr_ct_ratio = "-";
                    this.test_before.ta4ctr_ip_r = "-";
                    this.test_before.ta4ctr_ip_y = "-";
                    this.test_before.ta4ctr_ip_b = "-";
                    this.test_before.ta4ctr_is_r = "-";
                    this.test_before.ta4ctr_is_y = "-";
                    this.test_before.ta4ctr_is_b = "-";
                    this.test_before.ta4ctr_ccr_r = "-";
                    this.test_before.ta4ctr_ccr_y = "-";
                    this.test_before.ta4ctr_ccr_b = "-";
                    this.test_before.ta4ctr_cl_r = "-";
                    this.test_before.ta4ctr_cl_y = "-";
                    this.test_before.ta4ctr_cl_b = "-";
                    this.test_before.ta4ctr_avg_ccr = "-";
                    this.test_before.ta4ctr_avg_cl = "-";
                }
                else {
                    this.test_after.ta4ctr_loc_test_ta0na = "N";
                    this.test_after.ta4ctr_ta0naremarks = "-";
                    this.test_after.ta4ctr_ct_ratio_0 = "-";
                    this.test_after.ta4ctr_ct_ratio_1 = "-";
                    this.test_after.ta4ctr_ct_ratio = "-";
                    this.test_after.ta4ctr_ip_r = "-";
                    this.test_after.ta4ctr_ip_y = "-";
                    this.test_after.ta4ctr_ip_b = "-";
                    this.test_after.ta4ctr_is_r = "-";
                    this.test_after.ta4ctr_is_y = "-";
                    this.test_after.ta4ctr_is_b = "-";
                    this.test_after.ta4ctr_ccr_r = "-";
                    this.test_after.ta4ctr_ccr_y = "-";
                    this.test_after.ta4ctr_ccr_b = "-";
                    this.test_after.ta4ctr_cl_r = "-";
                    this.test_after.ta4ctr_cl_y = "-";
                    this.test_after.ta4ctr_cl_b = "-";
                    this.test_after.ta4ctr_avg_ccr = "-";
                    this.test_after.ta4ctr_avg_cl = "-";
                }
                break;
            }
            case "hspe": {
                if (section === "before") {
                    this.test_before.ta4hspe_loc_test_ta0na = "N";
                    this.test_before.ta4hspe_ta0naremarks = "-";
                    this.test_before.ta4hspe_mt_ratio_0 = "-";
                    this.test_before.ta4hspe_mt_ratio_1 = "-";
                    this.test_before.ta4hspe_mt_ratio = "-";
                    this.test_before.ta4hspe_is_mt_r = "-";
                    this.test_before.ta4hspe_is_mt_y = "-";
                    this.test_before.ta4hspe_is_mt_b = "-";
                    this.test_before.ta4hspe_ip_mt_r = "-";
                    this.test_before.ta4hspe_ip_mt_y = "-";
                    this.test_before.ta4hspe_ip_mt_b = "-";
                    this.test_before.ta4hspe_ci_ratio_0 = "-";
                    this.test_before.ta4hspe_ci_ratio_1 = "-";
                    this.test_before.ta4hspe_ci_ratio = "-";
                    this.test_before.ta4hspe_is_ci_r = "-";
                    this.test_before.ta4hspe_is_ci_y = "-";
                    this.test_before.ta4hspe_is_ci_b = "-";
                    this.test_before.ta4hspe_ip_ci_r = "-";
                    this.test_before.ta4hspe_ip_ci_y = "-";
                    this.test_before.ta4hspe_ip_ci_b = "-";
                    this.test_before.ta4hspe_diff_ci_r = "-";
                    this.test_before.ta4hspe_diff_ci_y = "-";
                    this.test_before.ta4hspe_diff_ci_b = "-";
                    this.test_before.ta4hspe_ov_ratio_0 = "-";
                    this.test_before.ta4hspe_ov_ratio_1 = "-";
                    this.test_before.ta4hspe_ov_ratio = "-";
                    this.test_before.ta4hspe_is_ov_r = "-";
                    this.test_before.ta4hspe_is_ov_y = "-";
                    this.test_before.ta4hspe_is_ov_b = "-";
                    this.test_before.ta4hspe_ip_ov_r = "-";
                    this.test_before.ta4hspe_ip_ov_y = "-";
                    this.test_before.ta4hspe_ip_ov_b = "-";
                    this.test_before.ta4hspe_diff_ov_r = "-";
                    this.test_before.ta4hspe_diff_ov_y = "-";
                    this.test_before.ta4hspe_diff_ov_b = "-";
                }
                else {
                    this.test_after.ta4hspe_loc_test_ta0na = "N";
                    this.test_after.ta4hspe_ta0naremarks = "-";
                    this.test_after.ta4hspe_mt_ratio_0 = "-";
                    this.test_after.ta4hspe_mt_ratio_1 = "-";
                    this.test_after.ta4hspe_mt_ratio = "-";
                    this.test_after.ta4hspe_is_mt_r = "-";
                    this.test_after.ta4hspe_is_mt_y = "-";
                    this.test_after.ta4hspe_is_mt_b = "-";
                    this.test_after.ta4hspe_ip_mt_r = "-";
                    this.test_after.ta4hspe_ip_mt_y = "-";
                    this.test_after.ta4hspe_ip_mt_b = "-";
                    this.test_after.ta4hspe_ci_ratio_0 = "-";
                    this.test_after.ta4hspe_ci_ratio_1 = "-";
                    this.test_after.ta4hspe_ci_ratio = "-";
                    this.test_after.ta4hspe_is_ci_r = "-";
                    this.test_after.ta4hspe_is_ci_y = "-";
                    this.test_after.ta4hspe_is_ci_b = "-";
                    this.test_after.ta4hspe_ip_ci_r = "-";
                    this.test_after.ta4hspe_ip_ci_y = "-";
                    this.test_after.ta4hspe_ip_ci_b = "-";
                    this.test_after.ta4hspe_diff_ci_r = "-";
                    this.test_after.ta4hspe_diff_ci_y = "-";
                    this.test_after.ta4hspe_diff_ci_b = "-";
                    this.test_after.ta4hspe_ov_ratio_0 = "-";
                    this.test_after.ta4hspe_ov_ratio_1 = "-";
                    this.test_after.ta4hspe_ov_ratio = "-";
                    this.test_after.ta4hspe_is_ov_r = "-";
                    this.test_after.ta4hspe_is_ov_y = "-";
                    this.test_after.ta4hspe_is_ov_b = "-";
                    this.test_after.ta4hspe_ip_ov_r = "-";
                    this.test_after.ta4hspe_ip_ov_y = "-";
                    this.test_after.ta4hspe_ip_ov_b = "-";
                    this.test_after.ta4hspe_diff_ov_r = "-";
                    this.test_after.ta4hspe_diff_ov_y = "-";
                    this.test_after.ta4hspe_diff_ov_b = "-";
                }
                break;
            }
            case "hsls": {
                if (section === "before") {
                    this.test_before.ta4hsls_loc_test_ta0na = "N";
                    this.test_before.ta4hsls_ta0naremarks = "-";
                    this.test_before.ta4hsls_mpa_r = "-";
                    this.test_before.ta4hsls_mpa_y = "-";
                    this.test_before.ta4hsls_mpa_b = "-";
                    this.test_before.ta4hsls_test1_r = "-";
                    this.test_before.ta4hsls_test1_y = "-";
                    this.test_before.ta4hsls_test1_b = "-";
                    this.test_before.ta4hsls_test2_r = "-";
                    this.test_before.ta4hsls_test2_y = "-";
                    this.test_before.ta4hsls_test2_b = "-";
                    this.test_before.ta4hsls_test3_r = "-";
                    this.test_before.ta4hsls_test3_y = "-";
                    this.test_before.ta4hsls_test3_b = "-";
                    this.test_before.ta4hsls_test4_r = "-";
                    this.test_before.ta4hsls_test4_y = "-";
                    this.test_before.ta4hsls_test4_b = "-";
                    this.test_before.ta4hsls_test5_r = "-";
                    this.test_before.ta4hsls_test5_y = "-";
                    this.test_before.ta4hsls_test5_b = "-";
                    this.test_before.ta4hsls_test6_r = "-";
                    this.test_before.ta4hsls_test6_y = "-";
                    this.test_before.ta4hsls_test6_b = "-";
                    this.test_before.ta4hsls_v_lv = "-";
                    this.test_before.ta4hsls_v_hv = "-";
                    this.test_before.ta4hsls_v_f = "-";
                    this.test_before.ta4hsls_la_r = "-";
                    this.test_before.ta4hsls_la_y = "-";
                    this.test_before.ta4hsls_la_b = "-";
                    this.test_before.ta4hsls_ha_r = "-";
                    this.test_before.ta4hsls_ha_y = "-";
                    this.test_before.ta4hsls_ha_b = "-";
                    this.test_before.ta4hsls_dma_r = "-";
                    this.test_before.ta4hsls_dma_y = "-";
                    this.test_before.ta4hsls_dma_b = "-";
                }
                else {
                    this.test_after.ta4hsls_loc_test_ta0na = "N";
                    this.test_after.ta4hsls_ta0naremarks = "-";
                    this.test_after.ta4hsls_mpa_r = "-";
                    this.test_after.ta4hsls_mpa_y = "-";
                    this.test_after.ta4hsls_mpa_b = "-";
                    this.test_after.ta4hsls_test1_r = "-";
                    this.test_after.ta4hsls_test1_y = "-";
                    this.test_after.ta4hsls_test1_b = "-";
                    this.test_after.ta4hsls_test2_r = "-";
                    this.test_after.ta4hsls_test2_y = "-";
                    this.test_after.ta4hsls_test2_b = "-";
                    this.test_after.ta4hsls_test3_r = "-";
                    this.test_after.ta4hsls_test3_y = "-";
                    this.test_after.ta4hsls_test3_b = "-";
                    this.test_after.ta4hsls_test4_r = "-";
                    this.test_after.ta4hsls_test4_y = "-";
                    this.test_after.ta4hsls_test4_b = "-";
                    this.test_after.ta4hsls_test5_r = "-";
                    this.test_after.ta4hsls_test5_y = "-";
                    this.test_after.ta4hsls_test5_b = "-";
                    this.test_after.ta4hsls_test6_r = "-";
                    this.test_after.ta4hsls_test6_y = "-";
                    this.test_after.ta4hsls_test6_b = "-";
                    this.test_after.ta4hsls_v_lv = "-";
                    this.test_after.ta4hsls_v_hv = "-";
                    this.test_after.ta4hsls_v_f = "-";
                    this.test_after.ta4hsls_la_r = "-";
                    this.test_after.ta4hsls_la_y = "-";
                    this.test_after.ta4hsls_la_b = "-";
                    this.test_after.ta4hsls_ha_r = "-";
                    this.test_after.ta4hsls_ha_y = "-";
                    this.test_after.ta4hsls_ha_b = "-";
                    this.test_after.ta4hsls_dma_r = "-";
                    this.test_after.ta4hsls_dma_y = "-";
                    this.test_after.ta4hsls_dma_b = "-";
                }
                break;
            }
            case "hsio": {
                if (section === "before") {
                    this.test_before.ta4hsio_loc_test_ta0na = "N";
                    this.test_before.ta4hsio_ta0naremarks = "-";
                    this.test_before.ta4hsio_ct_iha_0 = "-";
                    this.test_before.ta4hsio_ct_iha_1 = "-";
                    this.test_before.ta4hsio_ct_iha = "-";
                    this.test_before.ta4hsio_ct_out1_0 = "-";
                    this.test_before.ta4hsio_ct_out1_1 = "-";
                    this.test_before.ta4hsio_ct_out1 = "-";
                    this.test_before.ta4hsio_ct_out2_0 = "-";
                    this.test_before.ta4hsio_ct_out2_1 = "-";
                    this.test_before.ta4hsio_ct_out2 = "-";
                    this.test_before.ta4hsio_ct_out3_0 = "-";
                    this.test_before.ta4hsio_ct_out3_1 = "-";
                    this.test_before.ta4hsio_ct_out3 = "-";
                    this.test_before.ta4hsio_ct_out4_0 = "-";
                    this.test_before.ta4hsio_ct_out4_1 = "-";
                    this.test_before.ta4hsio_ct_out4 = "-";
                    this.test_before.ta4hsio_ct_out5_0 = "-";
                    this.test_before.ta4hsio_ct_out5_1 = "-";
                    this.test_before.ta4hsio_ct_out5 = "-";
                    this.test_before.ta4hsio_ct_out6_0 = "-";
                    this.test_before.ta4hsio_ct_out6_1 = "-";
                    this.test_before.ta4hsio_ct_out6 = "-";
                    this.test_before.ta4hsio_is_iha_r = "-";
                    this.test_before.ta4hsio_is_iha_y = "-";
                    this.test_before.ta4hsio_is_iha_b = "-";
                    this.test_before.ta4hsio_is_out1_r = "-";
                    this.test_before.ta4hsio_is_out1_y = "-";
                    this.test_before.ta4hsio_is_out1_b = "-";
                    this.test_before.ta4hsio_is_out2_r = "-";
                    this.test_before.ta4hsio_is_out2_y = "-";
                    this.test_before.ta4hsio_is_out2_b = "-";
                    this.test_before.ta4hsio_is_out3_r = "-";
                    this.test_before.ta4hsio_is_out3_y = "-";
                    this.test_before.ta4hsio_is_out3_b = "-";
                    this.test_before.ta4hsio_is_out4_r = "-";
                    this.test_before.ta4hsio_is_out4_y = "-";
                    this.test_before.ta4hsio_is_out4_b = "-";
                    this.test_before.ta4hsio_is_out5_r = "-";
                    this.test_before.ta4hsio_is_out5_y = "-";
                    this.test_before.ta4hsio_is_out5_b = "-";
                    this.test_before.ta4hsio_is_out6_r = "-";
                    this.test_before.ta4hsio_is_out6_y = "-";
                    this.test_before.ta4hsio_is_out6_b = "-";
                    this.test_before.ta4hsio_ip_iha_r = "-";
                    this.test_before.ta4hsio_ip_iha_y = "-";
                    this.test_before.ta4hsio_ip_iha_b = "-";
                    this.test_before.ta4hsio_ip_out1_r = "-";
                    this.test_before.ta4hsio_ip_out1_y = "-";
                    this.test_before.ta4hsio_ip_out1_b = "-";
                    this.test_before.ta4hsio_ip_out2_r = "-";
                    this.test_before.ta4hsio_ip_out2_y = "-";
                    this.test_before.ta4hsio_ip_out2_b = "-";
                    this.test_before.ta4hsio_ip_out3_r = "-";
                    this.test_before.ta4hsio_ip_out3_y = "-";
                    this.test_before.ta4hsio_ip_out3_b = "-";
                    this.test_before.ta4hsio_ip_out4_r = "-";
                    this.test_before.ta4hsio_ip_out4_y = "-";
                    this.test_before.ta4hsio_ip_out4_b = "-";
                    this.test_before.ta4hsio_ip_out5_r = "-";
                    this.test_before.ta4hsio_ip_out5_y = "-";
                    this.test_before.ta4hsio_ip_out5_b = "-";
                    this.test_before.ta4hsio_ip_out6_r = "-";
                    this.test_before.ta4hsio_ip_out6_y = "-";
                    this.test_before.ta4hsio_ip_out6_b = "-";
                    this.test_before.ta4hsio_ip_total_r = "-";
                    this.test_before.ta4hsio_ip_total_y = "-";
                    this.test_before.ta4hsio_ip_total_b = "-";
                    this.test_before.ta4hsio_ip_diff_r = "-";
                    this.test_before.ta4hsio_ip_diff_y = "-";
                    this.test_before.ta4hsio_ip_diff_b = "-";
                }
                else {
                    this.test_after.ta4hsio_loc_test_ta0na = "N";
                    this.test_after.ta4hsio_ta0naremarks = "-";
                    this.test_after.ta4hsio_ct_iha_0 = "-";
                    this.test_after.ta4hsio_ct_iha_1 = "-";
                    this.test_after.ta4hsio_ct_iha = "-";
                    this.test_after.ta4hsio_ct_out1_0 = "-";
                    this.test_after.ta4hsio_ct_out1_1 = "-";
                    this.test_after.ta4hsio_ct_out1 = "-";
                    this.test_after.ta4hsio_ct_out2_0 = "-";
                    this.test_after.ta4hsio_ct_out2_1 = "-";
                    this.test_after.ta4hsio_ct_out2 = "-";
                    this.test_after.ta4hsio_ct_out3_0 = "-";
                    this.test_after.ta4hsio_ct_out3_1 = "-";
                    this.test_after.ta4hsio_ct_out3 = "-";
                    this.test_after.ta4hsio_ct_out4_0 = "-";
                    this.test_after.ta4hsio_ct_out4_1 = "-";
                    this.test_after.ta4hsio_ct_out4 = "-";
                    this.test_after.ta4hsio_ct_out5_0 = "-";
                    this.test_after.ta4hsio_ct_out5_1 = "-";
                    this.test_after.ta4hsio_ct_out5 = "-";
                    this.test_after.ta4hsio_ct_out6_0 = "-";
                    this.test_after.ta4hsio_ct_out6_1 = "-";
                    this.test_after.ta4hsio_ct_out6 = "-";
                    this.test_after.ta4hsio_is_iha_r = "-";
                    this.test_after.ta4hsio_is_iha_y = "-";
                    this.test_after.ta4hsio_is_iha_b = "-";
                    this.test_after.ta4hsio_is_out1_r = "-";
                    this.test_after.ta4hsio_is_out1_y = "-";
                    this.test_after.ta4hsio_is_out1_b = "-";
                    this.test_after.ta4hsio_is_out2_r = "-";
                    this.test_after.ta4hsio_is_out2_y = "-";
                    this.test_after.ta4hsio_is_out2_b = "-";
                    this.test_after.ta4hsio_is_out3_r = "-";
                    this.test_after.ta4hsio_is_out3_y = "-";
                    this.test_after.ta4hsio_is_out3_b = "-";
                    this.test_after.ta4hsio_is_out4_r = "-";
                    this.test_after.ta4hsio_is_out4_y = "-";
                    this.test_after.ta4hsio_is_out4_b = "-";
                    this.test_after.ta4hsio_is_out5_r = "-";
                    this.test_after.ta4hsio_is_out5_y = "-";
                    this.test_after.ta4hsio_is_out5_b = "-";
                    this.test_after.ta4hsio_is_out6_r = "-";
                    this.test_after.ta4hsio_is_out6_y = "-";
                    this.test_after.ta4hsio_is_out6_b = "-";
                    this.test_after.ta4hsio_ip_iha_r = "-";
                    this.test_after.ta4hsio_ip_iha_y = "-";
                    this.test_after.ta4hsio_ip_iha_b = "-";
                    this.test_after.ta4hsio_ip_out1_r = "-";
                    this.test_after.ta4hsio_ip_out1_y = "-";
                    this.test_after.ta4hsio_ip_out1_b = "-";
                    this.test_after.ta4hsio_ip_out2_r = "-";
                    this.test_after.ta4hsio_ip_out2_y = "-";
                    this.test_after.ta4hsio_ip_out2_b = "-";
                    this.test_after.ta4hsio_ip_out3_r = "-";
                    this.test_after.ta4hsio_ip_out3_y = "-";
                    this.test_after.ta4hsio_ip_out3_b = "-";
                    this.test_after.ta4hsio_ip_out4_r = "-";
                    this.test_after.ta4hsio_ip_out4_y = "-";
                    this.test_after.ta4hsio_ip_out4_b = "-";
                    this.test_after.ta4hsio_ip_out5_r = "-";
                    this.test_after.ta4hsio_ip_out5_y = "-";
                    this.test_after.ta4hsio_ip_out5_b = "-";
                    this.test_after.ta4hsio_ip_out6_r = "-";
                    this.test_after.ta4hsio_ip_out6_y = "-";
                    this.test_after.ta4hsio_ip_out6_b = "-";
                    this.test_after.ta4hsio_ip_total_r = "-";
                    this.test_after.ta4hsio_ip_total_y = "-";
                    this.test_after.ta4hsio_ip_total_b = "-";
                    this.test_after.ta4hsio_ip_diff_r = "-";
                    this.test_after.ta4hsio_ip_diff_y = "-";
                    this.test_after.ta4hsio_ip_diff_b = "-";
                }
                break;
            }
            case "ai": {
                if (section === "before") {
                    this.test_before.ta4ai_loc_test_ta0na = "N";
                    this.test_before.ta4ai_ta0naremarks = "-";
                    this.test_before.ta4ai_key_standard = "-";
                    this.test_before.ta4ai_key_non_standard = "-";
                    this.test_before.ta4ai_key_customer = "-";
                    //this.test_before.ta4ai_info_gear = "-";//001
                    this.test_before.ta4ai_info_gear = ""; //001
                    this.test_before.ta4ai_info_ct = "-";
                    this.test_before.ta4ai_info_pt = "-";
                    this.test_before.ta4ai_info_vcb = "-";
                    this.test_before.ta4ai_meter_cable = "-";
                    this.test_before.ta4ai_meter_box = "-";
                    this.test_before.ta4ai_kiosk_pe = "-";
                    this.test_before.ta4ai_kiosk_sm = "-";
                    this.test_before.ta4ai_kiosk_su = "-";
                    this.test_before.ta4ai_kiosk_type = "-";
                    this.test_before.optionDate = true;
                    this.changeOptionDate(this.test_before.optionDate, 'before');
                    this.test_before.ta4ai_kiosk_date = "-";
                }
                else {
                    this.test_after.ta4ai_loc_test_ta0na = "N";
                    this.test_after.ta4ai_ta0naremarks = "-";
                    this.test_after.ta4ai_key_standard = "-";
                    this.test_after.ta4ai_key_non_standard = "-";
                    this.test_after.ta4ai_key_customer = "-";
                    //this.test_after.ta4ai_info_gear = "-";//001
                    this.test_after.ta4ai_info_gear = ""; //001
                    this.test_after.ta4ai_info_ct = "-";
                    this.test_after.ta4ai_info_pt = "-";
                    this.test_after.ta4ai_info_vcb = "-";
                    this.test_after.ta4ai_meter_cable = "-";
                    this.test_after.ta4ai_meter_box = "-";
                    this.test_after.ta4ai_kiosk_pe = "-";
                    this.test_after.ta4ai_kiosk_sm = "-";
                    this.test_after.ta4ai_kiosk_su = "-";
                    this.test_after.ta4ai_kiosk_type = "-";
                    this.test_after.optionDate = true;
                    this.changeOptionDate(this.test_after.optionDate, 'after');
                    this.test_after.ta4ai_kiosk_date = "-";
                }
                break;
            }
            case "precomm": {
                if (section === "before") {
                    this.test_before.ta4pc_loc_test_ta0na = "N";
                    this.test_before.ta4pc_ta0naremarks = "-";
                    this.test_before.ta4pc_contctpt_y = "-";
                    this.test_before.ta4pc_contctpt_b = "-";
                    this.test_before.ta4pc_ctratio_r = "-";
                    this.test_before.ta4pc_ctratio_y = "-";
                    this.test_before.ta4pc_ctratio_b = "-";
                    this.test_before.ta4pc_ctpolar_r = "-";
                    this.test_before.ta4pc_ctpolar_y = "-";
                    this.test_before.ta4pc_ctpolar_b = "-";
                    this.test_before.ta4pc_kio_wirg = "-";
                    this.test_before.ta4pc_s2_starerh = "-";
                    this.test_before.ta4pc_ptpolar = "-";
                    this.test_before.ta4pc_nseaptpas = "-";
                }
                else {
                    this.test_after.ta4pc_loc_test_ta0na = "N";
                    this.test_after.ta4pc_ta0naremarks = "-";
                    this.test_after.ta4pc_contctpt_y = "-";
                    this.test_after.ta4pc_contctpt_b = "-";
                    this.test_after.ta4pc_ctratio_r = "-";
                    this.test_after.ta4pc_ctratio_y = "-";
                    this.test_after.ta4pc_ctratio_b = "-";
                    this.test_after.ta4pc_ctpolar_r = "-";
                    this.test_after.ta4pc_ctpolar_y = "-";
                    this.test_after.ta4pc_ctpolar_b = "-";
                    this.test_after.ta4pc_kio_wirg = "-";
                    this.test_after.ta4pc_s2_starerh = "-";
                    this.test_after.ta4pc_ptpolar = "-";
                    this.test_after.ta4pc_nseaptpas = "-";
                }
                break;
            }
            case "summ": {
                if (section === "before") {
                    this.test_before.ta4ins_loc_test_ta0na = "N";
                    this.test_before.ta4ins_ta0naremarks = "-";
                    // Reset Fields Summator Before Section
                    if (typeof (this.summatorBefore) !== "undefined") {
                        for (var i = 0; i < this.summatorBefore.length; i++) {
                            this.summatorBefore[i].ta4reg_amf = "";
                            this.summatorBefore[i].ta4reg_amb = "";
                            this.summatorBefore[i].ta4reg_amc = "";
                            this.summatorBefore[i].ta4reg_amf_b = "";
                            this.summatorBefore[i].ta4reg_amb_b = "";
                            this.summatorBefore[i].ta4reg_amc_b = "";
                        }
                    }
                    this.summatorExtraBefore.ta4sum_end = "-";
                    this.summatorExtraBefore.ta4sum_start = "-";
                    this.summatorExtraBefore.ta4sum_sted_diff = "-";
                    this.summatorExtraBefore.ta4sum_consumption = "-";
                    this.summatorExtraBefore.ta4sum_diff = "-";
                }
                else {
                    this.test_after.ta4ins_loc_test_ta0na = "N";
                    this.test_after.ta4ins_ta0naremarks = "-";
                    // Reset Fields Summator After Section
                    if (typeof (this.summatorAfter) !== "undefined") {
                        for (var i = 0; i < this.summatorAfter.length; i++) {
                            this.summatorAfter[i].ta4reg_amf = "";
                            this.summatorAfter[i].ta4reg_amb = "";
                            this.summatorAfter[i].ta4reg_amc = "";
                            this.summatorAfter[i].ta4reg_amf_a = "";
                            this.summatorAfter[i].ta4reg_amb_a = "";
                            this.summatorAfter[i].ta4reg_amc_a = "";
                        }
                    }
                    this.summatorExtraAfter.ta4sum_end = "-";
                    this.summatorExtraAfter.ta4sum_start = "-";
                    this.summatorExtraAfter.ta4sum_sted_diff = "-";
                    this.summatorExtraAfter.ta4sum_consumption = "-";
                    this.summatorExtraAfter.ta4sum_diff = "-";
                }
                break;
            }
        }
        // Checking Validate Input after Reset
        this.validateUserInput();
    };
    /**
     * Checking Existing and New Section for Before & After Segment
     * Example 1  : If don't have replace/install new meter Existing Section (Before & After)
     * Example 2  : If Replace/Install New Meter Existing Section (Before), New Section (After)
     * Created    : Ameer (16.04.2019)
     */
    SealMvhvInspectPage.prototype.replaceMeterNCheck = function () {
        var _this = this;
        debugger;
        var checkingDeviceSelect = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator;
        var multiassetlocci_temp = this.item.json.ta0feeder[this.fIndex].multiassetlocci;
        if (checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN || checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
            if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                // ZISP - off after
                var meter = multiassetlocci_temp.filter(function (item) {
                    if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) {
                        _this.disableBefore = false;
                        _this.disableAfter = true;
                    }
                });
            }
            else if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                var meter = multiassetlocci_temp.filter(function (item) {
                    if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) {
                        _this.disableAfter = true;
                        _this.disableBefore = false;
                    }
                });
            }
        }
        else if (checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN || checkingDeviceSelect === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK) {
            if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                // ZISP - off Before
                this.valueChangeMct = 'after';
                // this.valueChangeRemarks = 'after';
                this.valueChangeVrph = 'after';
                this.valueChangeMa = 'after';
                this.valueChangeEf = 'after';
                this.valueChangeCtr = 'after';
                this.valueChangeHsls = 'after';
                this.valueChangeHsio = 'after';
                this.valueChangeHspe = 'after';
                this.valueChangeAi = 'after';
                this.valueChangeNafa = 'after';
                this.valueChangeIns = 'after';
                this.valueChangePreComm = 'after';
                var meter = multiassetlocci_temp.filter(function (item) {
                    if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) {
                        _this.disableBefore = true;
                        _this.disableAfter = false;
                    }
                });
                //ZIST- check if got new meter off before
            }
            else if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                this.valueChangeMct = 'after';
                // this.valueChangeRemarks = 'after';
                this.valueChangeVrph = 'after';
                this.valueChangeMa = 'after';
                this.valueChangeEf = 'after';
                this.valueChangeCtr = 'after';
                this.valueChangeHsls = 'after';
                this.valueChangeHsio = 'after';
                this.valueChangeHspe = 'after';
                this.valueChangeAi = 'after';
                this.valueChangeNafa = 'after';
                this.valueChangeIns = 'after';
                this.valueChangePreComm = 'after';
                var meter = multiassetlocci_temp.filter(function (item) {
                    if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) {
                        _this.disableAfter = false;
                        _this.disableBefore = true;
                    }
                });
            }
        }
    };
    /**
     * Hide Show Test List Section
     * Created  : Alif (18/04/2019)
     */
    SealMvhvInspectPage.prototype.showTestListSection = function (index) {
        index++;
        if (this.showTestList === false) {
            this.showTestList = true;
        }
        else if (index === 2) {
            this.showTestList = false;
        }
    };
    /**
     * Change view option for  Date Estimatied of Inspection
     * Created  : Alif (18/04/2019)
     */
    SealMvhvInspectPage.prototype.changeOptionDate = function (value, type) {
        console.log("Date estimated of inspection: " + value);
        debugger;
        if (type === "before") {
            if (value === true || value === "true") {
                this.showValueDateBefore = false;
            }
            else {
                this.showValueDateBefore = true;
                // this.test_before.ta4ai_kiosk_date = "00/00/00";
                this.test_before.ta4ai_kiosk_date = "-";
            }
        }
        else {
            if (value === true || value === "true") {
                this.showValueDateAfter = false;
            }
            else {
                this.showValueDateAfter = true;
                // this.test_after.ta4ai_kiosk_date = "00/00/00";
                this.test_after.ta4ai_kiosk_date = "-";
            }
        }
    };
    /**
     * Reason   : Method to check, compare & get the value
     * Created  : Alif (25/04/2019)
     */
    SealMvhvInspectPage.prototype.checkCompareGettingValueSummator = function (type, section) {
        // Checking for Summation Inspection Test
        if (typeof (this.item.json.ta0feeder) !== "undefined" || this.item.json.hasOwnProperty("ta0feeder")) {
            // count feeder
            var fLength = Number(this.item.json.ta0feeder.length);
            for (var k = 0; k < fLength; k++) {
                var mLength = this.item.json.ta0feeder[k].multiassetlocci.length;
                for (var h = 0; h < mLength; h++) {
                    if (this.item.json.ta0feeder[k].multiassetlocci[h].hasOwnProperty("ta4testdata")) {
                        // Checking Only Main Meter
                        if (type === "main") {
                            if (this.item.json.ta0feeder[k].multiassetlocci[h].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER) {
                                // Convert String to JSON Array
                                var ta4testdata_temp;
                                // Checking whether is string or array
                                if (Array.isArray((this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata))) {
                                    ta4testdata_temp = this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata);
                                }
                                while (!Array.isArray(ta4testdata_temp)) {
                                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                }
                                this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata = ta4testdata_temp;
                                if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                                    // Checking ta4testdata
                                    for (var i = 0; i < ta4testdata_temp.length; i++) {
                                        // ta4testdata (before)
                                        if (ta4testdata_temp[i].type === "before") {
                                            // Reading before value summator from existing data if available
                                            if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                                                var sLentgh = ta4testdata_temp[i].data.summator.length;
                                                for (var m = 0; m < sLentgh; m++) {
                                                    if (typeof (this.summatorBefore[m]) === "undefined") {
                                                        this.summatorExtraBefore = ta4testdata_temp[i].data.summator[m];
                                                    }
                                                    else {
                                                        var serialnum = this.summatorBefore[m].ta4serialNum;
                                                        var meterType = this.summatorBefore[m].ta4metertype;
                                                        this.summatorBefore[m] = ta4testdata_temp[i].data.summator[m];
                                                        this.summatorBefore[m].ta4serialNum = serialnum;
                                                        this.summatorBefore[m].ta4metertype = meterType;
                                                        this.summatorBefore[m].ta4reg_amf_b = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                                                        this.summatorBefore[m].ta4reg_amb_b = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                                                        this.summatorBefore[m].ta4reg_amc_b = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                                                    }
                                                }
                                            }
                                        }
                                        // ta4testdata (after)
                                        if (ta4testdata_temp[i].type === "after") {
                                            // Reading after value summator from existing data if available
                                            if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                                                var sLentgh = ta4testdata_temp[i].data.summator.length;
                                                for (var m = 0; m < sLentgh; m++) {
                                                    if (typeof (this.summatorAfter[m]) === "undefined") {
                                                        this.summatorExtraAfter = ta4testdata_temp[i].data.summator[m];
                                                    }
                                                    else {
                                                        var serialnum = this.summatorAfter[m].ta4serialNum;
                                                        var meterType = this.summatorAfter[m].ta4metertype;
                                                        this.summatorAfter[m] = ta4testdata_temp[i].data.summator[m];
                                                        this.summatorAfter[m].ta4serialNum = serialnum;
                                                        this.summatorAfter[m].ta4metertype = meterType;
                                                        this.summatorAfter[m].ta4reg_amf_a = ta4testdata_temp[i].data.summator[m].ta4reg_amf;
                                                        this.summatorAfter[m].ta4reg_amb_a = ta4testdata_temp[i].data.summator[m].ta4reg_amb;
                                                        this.summatorAfter[m].ta4reg_amc_a = ta4testdata_temp[i].data.summator[m].ta4reg_amc;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                        }
                        else {
                            if (this.item.json.ta0feeder[k].multiassetlocci[h].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER) {
                                // Convert String to JSON Array
                                var ta4testdata_temp;
                                // Checking whether is string or array
                                if (Array.isArray((this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata))) {
                                    ta4testdata_temp = this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata);
                                }
                                while (!Array.isArray(ta4testdata_temp)) {
                                    ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                }
                                this.item.json.ta0feeder[k].multiassetlocci[h].ta4testdata = ta4testdata_temp;
                                if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                                    // Checking ta4testdata
                                    for (var i = 0; i < ta4testdata_temp.length; i++) {
                                        // ta4testdata (before)
                                        if (ta4testdata_temp[i].type === "before") {
                                            // Reading before value summator from existing data if available
                                            if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                                                var sLength = ta4testdata_temp[i].data.summator.length;
                                                for (var m = 0; m < sLength; m++) {
                                                    if (typeof (this.summatorBefore[m]) === "undefined") {
                                                        this.summatorExtraBefore = ta4testdata_temp[i].data.summator[m];
                                                    }
                                                    else {
                                                        var serialnum = this.summatorBefore[m].ta4serialNum;
                                                        var meterType = this.summatorBefore[m].ta4metertype;
                                                        this.summatorBefore[m] = ta4testdata_temp[i].data.summator[m];
                                                        this.summatorBefore[m].ta4serialNum = serialnum;
                                                        this.summatorBefore[m].ta4metertype = meterType;
                                                    }
                                                }
                                            }
                                        }
                                        // ta4testdata (after)
                                        if (ta4testdata_temp[i].type === "after") {
                                            // Reading after value summator from existing data if available
                                            if (ta4testdata_temp[i].data.hasOwnProperty("summator")) {
                                                var sLength = ta4testdata_temp[i].data.summator.length;
                                                for (var m = 0; m < sLength; m++) {
                                                    if (typeof (this.summatorAfter[m]) === "undefined") {
                                                        this.summatorExtraAfter = ta4testdata_temp[i].data.summator[m];
                                                    }
                                                    else {
                                                        var serialnum = this.summatorAfter[m].ta4serialNum;
                                                        var meterType = this.summatorAfter[m].ta4metertype;
                                                        this.summatorAfter[m] = ta4testdata_temp[i].data.summator[m];
                                                        this.summatorAfter[m].ta4serialNum = serialnum;
                                                        this.summatorAfter[m].ta4metertype = meterType;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * Description  : Method to clear value for component radio button.
     * Created      : Alif (15.08.2019)
     */
    SealMvhvInspectPage.prototype.clearValueRadioComponent = function (section, attribute) {
        console.log("clear value radio component : " + attribute);
        if (section === "before") {
            switch (attribute) {
                case "key": {
                    this.test_before.ta4ai_key_standard = "-";
                    this.test_before.ta4ai_key_non_standard = "-";
                    this.test_before.ta4ai_key_customer = "-";
                    break;
                }
                case "info": {
                    //this.test_before.ta4ai_info_gear = "-";//001
                    this.test_before.ta4ai_info_gear = ""; //001
                    this.test_before.ta4ai_info_ct = "-";
                    this.test_before.ta4ai_info_pt = "-";
                    this.test_before.ta4ai_info_vcb = "";
                    break;
                }
                case "meter-cable": {
                    this.test_before.ta4ai_meter_cable = "-";
                    this.test_before.ta4ai_meter_box = "-";
                    break;
                }
                case "pe-kiosk": {
                    this.test_before.ta4ai_kiosk_pe = "-";
                    this.test_before.ta4ai_kiosk_sm = "-";
                    this.test_before.ta4ai_kiosk_su = "-";
                    this.test_before.ta4ai_kiosk_type = "-";
                    this.test_before.ta4ai_kiosk_date = "-";
                    this.test_before.optionDate = true;
                    this.changeOptionDate(true, 'before');
                    break;
                }
            }
        }
        else {
            switch (attribute) {
                case "key": {
                    this.test_after.ta4ai_key_standard = "-";
                    this.test_after.ta4ai_key_non_standard = "-";
                    this.test_after.ta4ai_key_customer = "-";
                    break;
                }
                case "info": {
                    //this.test_after.ta4ai_info_gear = "-";//001
                    this.test_after.ta4ai_info_gear = ""; //001
                    this.test_after.ta4ai_info_ct = "-";
                    this.test_after.ta4ai_info_pt = "-";
                    this.test_after.ta4ai_info_vcb = "";
                    break;
                }
                case "meter-cable": {
                    this.test_after.ta4ai_meter_cable = "-";
                    this.test_after.ta4ai_meter_box = "-";
                    break;
                }
                case "pe-kiosk": {
                    this.test_after.ta4ai_kiosk_pe = "-";
                    this.test_after.ta4ai_kiosk_sm = "-";
                    this.test_after.ta4ai_kiosk_su = "-";
                    this.test_after.ta4ai_kiosk_type = "-";
                    this.test_after.ta4ai_kiosk_date = "-";
                    this.test_after.optionDate = true;
                    this.changeOptionDate(true, 'after');
                    break;
                }
            }
        }
    };
    SealMvhvInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-mvhv-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/deviceTestForms/seal-mvhv-inspect/seal-mvhv-inspect.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>MVHV Inspection</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--   <div\n    *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0bcrmuploadindicator === \'METER_EQUIP\' || item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0bcrmuploadindicator === \'M_N_EQUIP\'">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>No of Element</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <ion-row col-12 col-md-12 col-sm-12>\n      <ion-segment [(ngModel)]="valueChangeElem">\n        <ion-segment-button value="before">\n          Before\n        </ion-segment-button>\n        <ion-segment-button value="after">\n          After\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeElem">\n      <div *ngSwitchCase="\'after\'">\n\n        <ion-row *ngIf="item.json.worktype === \'ZISP\' || item.json.worktype === \'ZIST\'">\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-item>\n              <ion-label color="primary">No. Element After </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4elemcount" [selectOptions]="{title: \'No. Element\'}"\n                placeholder="Select value"\n                [ngClass]="(test_after.ta4elemcount === \'undefined\' || test_after.ta4elemcount === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n                <ion-option value="2" [selected]="test_after.ta4elemcount == \'2\'">2 Element</ion-option>\n                <ion-option value="3" [selected]="test_after.ta4elemcount == \'3\'">3 Element</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngSwitchCase="\'before\'">\n\n        <ion-row *ngIf="item.json.worktype === \'ZISP\' || item.json.worktype === \'ZIST\'">\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-item>\n              <ion-label color="primary">No. Element Before </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4elemcount" [selectOptions]="{title: \'No. Element\'}"\n                placeholder="Select value"\n                [ngClass]="(test_before.ta4elemcount === \'undefined\' || test_before.ta4elemcount === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n                <ion-option value="2" [selected]="test_before.ta4elemcount == \'2\'">2 Element</ion-option>\n                <ion-option value="3" [selected]="test_before.ta4elemcount == \'3\'">3 Element</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n -->\n  <!-- <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>INSPECTION REMARK</strong>\n      </ion-col>\n\n    </ion-row>\n  </ion-item-divider> -->\n  <!-- Segment -->\n  <!-- <ion-row style="padding-top: 15px;padding-left: 15px;">\n    <ion-col col-sm-12 col-md-12 col-12>\n      <ion-segment [(ngModel)]="valueChangeRemarks">\n        <ion-segment-button value="before" [disabled]="disableBefore">\n          Before\n        </ion-segment-button>\n        <ion-segment-button value="after" [disabled]="disableAfter">\n          After\n        </ion-segment-button>\n      </ion-segment>\n    </ion-col>\n  </ion-row> -->\n\n  <!--   <div [ngSwitch]="valueChangeRemarks">\n    <div *ngSwitchCase="\'before\'">\n      <ion-row col-12 col-md-12 col-sm-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Remark (Before)</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-textarea [(ngModel)]="test_before.ta4remarks_insp" placeholder="Remarks details"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngSwitchCase="\'after\'">\n      <ion-row col-12 col-md-12 col-sm-12>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Remark (After)</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-textarea [(ngModel)]="test_after.ta4remarks_insp" placeholder="Remarks details"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div> -->\n\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Test List Selection</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" (click)="resetAllTestInspection()" style="opacity: unset;"\n          text-end>Reset All</button>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n        (click)="showTestListSection(1)">\n        <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showTestList"></ion-icon>\n        <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showTestList"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row radio-group [(ngModel)]="testCategory" *ngIf="showTestList" (ionChange)="selectionTestList($event)">\n    <ion-row col-12>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end *ngIf="summation">\n        <ion-item text-wrap>\n          <ion-label>6. Summation Inspection</ion-label>\n          <ion-radio value="ins"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center *ngIf="summation"\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateSummator === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>5. Max CT Loading</ion-label>\n          <ion-radio value="mct"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateMct === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>7. Voltage Reading & Ph-Rotation (Secondary)</ion-label>\n          <ion-radio value="vrph"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateVrph === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>9. Meter Accuracy</ion-label>\n          <ion-radio value="ma"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateMa === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>10. Energy Flow / LED Indication</ion-label>\n          <ion-radio value="ef"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateEf === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>11. CT Ratio & "CT Loading" Percentage</ion-label>\n          <ion-radio value="ctr"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateCtr === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>12. HV Side: Meter TNB vs Consumer Incomer (PE TNB if available)\n          </ion-label>\n          <ion-radio value="hspe"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateHspe === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>13. HV Side & LV Side: Meter Primary Amps  vs  Consumer LV Outgoing\n          </ion-label>\n          <ion-radio value="hsls"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateHsls === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>14. HV Side: Consumer Incomer vs Consumer Outgoing</ion-label>\n          <ion-radio value="hsio"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateHsio === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>17. Additional Information</ion-label>\n          <ion-radio value="ai"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateAi === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end *ngIf="meterType">\n        <ion-item text-wrap>\n          <ion-label>Pre-Commissioning</ion-label>\n          <ion-radio value="precomm"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center *ngIf="meterType"\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validatePreComm === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n      <ion-col col-sm-12 col-md-5 col-5 align-self-end>\n        <ion-item text-wrap>\n          <ion-label>Not Applicable for All</ion-label>\n          <ion-radio value="nafa"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-sm-12 col-md-1 col-1 align-self-center\n        style="word-wrap: break-all; padding-left: 5px; text-align: center;">\n        <ion-icon ios="md-checkmark-circle-outline" md="md-checkmark-circle-outline"\n          [ngClass]="(validateNafa === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-row>\n\n  <div *ngIf="viewNafa">\n    <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>NOT APPLICABLE FOR ALL</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeNafa">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeNafa">\n      <div *ngSwitchCase="\'before\'">\n        <div *ngIf="showAllCommonRemarkDetails">\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="before_ta0na" (ionChange)="commonNotApplication($event, \'before\')"\n                  interface="popover">\n                  <ion-option value="Y" [selected]="before_ta0na === \'Y\'">Yes</ion-option>\n                  <ion-option value="N" [selected]="before_ta0na === \'N\'">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="before_showContainRemark">\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" [(ngModel)]="before_ta0Remark" maxlength="40" type="text"\n                  placeholder="Please Enter Remark" (keyup)="commonNotApplicationRemark(\'before\')"></ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <div *ngIf="showAllCommonRemarkDetails">\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="after_ta0na" (ionChange)="commonNotApplication($event, \'after\')"\n                  interface="popover">\n                  <ion-option value="Y" [selected]="after_ta0na === \'Y\'">Yes</ion-option>\n                  <ion-option value="N" [selected]="after_ta0na === \'N\'">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="after_showContainRemark">\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" [(ngModel)]="after_ta0Remark" maxlength="40" type="text"\n                  placeholder="Please Enter Remark" (keyup)="commonNotApplicationRemark(\'after\')"></ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div *ngIf="viewMct">\n    <ion-item-divider color="light" class="pointer" (click)="showViewMctTestSection()">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Max Ct loading</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'mct\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeMct">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeMct">\n      <div *ngSwitchCase="\'before\'">\n        <!-- <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item text-center>\n              <ion-label color="primary">Before</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row> -->\n\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6>\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4mct_loc_test_ta0na"\n                (ionChange)="showViewMctTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="test_before.ta4mct_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4mct_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4mct_ta0na">\n\n          <ion-row>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  MD (kW)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  Voltage (kV)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  PF\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4mct_md"\n                  (ionChange)="autoCalculateMaxCtLoading(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4mct_vt"\n                  (ionChange)="autoCalculateMaxCtLoading(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4mct_pf"\n                  (ionChange)="autoCalculateMaxCtLoading(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  Amps Calc\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-8 col-8>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4mct_ac" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  Amps Calc = MD / (√3 x V x PF)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  % CT loading\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-8 col-8>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4mct_cl" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  % Max CT Loading = (Amps / CT Primary Amps) x 100%\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </div>\n\n      <div *ngSwitchCase="\'after\'">\n        <!-- <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12>\n            <ion-item text-center>\n              <ion-label color="primary">After</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row> -->\n\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4mct_loc_test_ta0na" (ionChange)="showViewMctTest($event, \'after\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="test_after.ta4mct_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4mct_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4mct_ta0na">\n          <ion-row>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  MD (kW)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  Voltage (kV)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  PF\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4mct_md"\n                  (ionChange)="autoCalculateMaxCtLoading(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4mct_vt"\n                  (ionChange)="autoCalculateMaxCtLoading(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4mct_pf"\n                  (ionChange)="autoCalculateMaxCtLoading(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  Amps Calc\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-8 col-8>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4mct_ac" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  Amps Calc = MD / (√3 x V x PF)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-label color="primary">\n                  % CT loading\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-8 col-8>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4mct_cl" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  % Max CT Loading = (Amps / CT Primary Amps) x 100%\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewVrph">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Voltage Reading & Ph-Rotation\n            (Secondary)</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'vrph\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeVrph">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeVrph">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4vrph_loc_test_ta0na"\n                (ionChange)="showViewVrphTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4vrph_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4vrph_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4vrph_ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RY</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_ry" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">YB</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_yb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RB</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_rb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RN</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_rn" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">YN</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_yn" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">BN</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_bn" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_re" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">YE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_ye" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">BE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_be" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">NE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4vrph_ne" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Phase Rotation</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-select [(ngModel)]="test_before.ta4vrph_ph" [selectOptions]="{title: \'Phase Rotation\'}"\n                  style="padding: 0px;" placeholder="Select value">\n                  <ion-option value="RYB">RYB</ion-option>\n                  <ion-option value="BYR">BYR</ion-option>\n                  <ion-option value="RBY">RBY</ion-option>\n                  <ion-option value="YBR">YBR</ion-option>\n                  <ion-option value="BRY">BRY</ion-option>\n                  <ion-option value="YRB">YRB</ion-option>\n                </ion-select>\n                <!-- <ion-input [(ngModel)]="test_before.ta4vrph_ph" placeholder="Enter value"></ion-input> -->\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4vrph_loc_test_ta0na"\n                (ionChange)="showViewVrphTest($event, \'after\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4vrph_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4vrph_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4vrph_ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RY</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_ry" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">YB</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_yb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RB</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_rb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RN</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_rn" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">YN</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_yn" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">BN</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_bn" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">RE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_re" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">YE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_ye" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">BE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_be" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">NE</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4vrph_ne" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Phase Rotation</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-select [(ngModel)]="test_after.ta4vrph_ph" [selectOptions]="{title: \'Phase Rotation\'}"\n                  style="padding: 0px;" placeholder="Select value">\n                  <ion-option value="RYB">RYB</ion-option>\n                  <ion-option value="BYR">BYR</ion-option>\n                  <ion-option value="RBY">RBY</ion-option>\n                  <ion-option value="YBR">YBR</ion-option>\n                  <ion-option value="BRY">BRY</ion-option>\n                  <ion-option value="YRB">YRB</ion-option>\n                </ion-select>\n                <!-- <ion-input [(ngModel)]="test.ta4vrph_ph" placeholder="Enter value"></ion-input> -->\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewMa">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Meter Accuracy Testing</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'ma\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeMa">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeMa">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4ma_loc_test_ta0na" (ionChange)="showViewMaTest($event, \'before\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4ma_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4ma_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4ma_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> PTE Informations</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Brand</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_before.ta4ma_brand" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Serial No.</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_serialnum" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Test Date</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_before.ta4ma_calibration" displayFormat="DD-MM-YYYY" max="3000-12-31"\n                  pickerFormat="DD:MMM:YYYY" placeholder="Select date" style="padding: 0px;"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Meter Accuracy Test (%Error)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">First</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Second</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Third</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_test1"\n                  (ionChange)="autoCalculateAverageMeterAccuracy(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_test2"\n                  (ionChange)="autoCalculateAverageMeterAccuracy(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_test3"\n                  (ionChange)="autoCalculateAverageMeterAccuracy(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_avg" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> kWh Register Test (%Error)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Stop</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">%Error</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_reg_start" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_reg_stop" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_reg_usage" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_reg_error" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> kWh Registration Test through V, I, Cosθ & Time (h)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">kWh Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">kWh End</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">kWh Diff</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_read_start"\n                  (ionChange)="autoCalculateDifferentMeterRead(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_read_end"\n                  (ionChange)="autoCalculateDifferentMeterRead(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_read_diff" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <br />\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Start Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">End Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Duration (min)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_before.ta4ma_time_start"\n                  (ionChange)="autoCalculateDurationTime(\'before\')" displayFormat="HH:mm" pickerFormat="HH:mm"\n                  placeholder="Select time"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_before.ta4ma_time_end" (ionChange)="autoCalculateDurationTime(\'before\')"\n                  displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Select time"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_time_duration"\n                  (ionChange)="autoCalculateCalcEnergy(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <br />\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">V prim Avg</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">I prim Avg</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Cosθ Avg</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_v_avg"\n                  (ionChange)="autoCalculateCalcEnergy(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_i_avg"\n                  (ionChange)="autoCalculateCalcEnergy(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_c_avg"\n                  (ionChange)="autoCalculateCalcEnergy(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <br />\n\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Calc Energy</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_calc_energy" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  Calc Energy = √3 x V x I x Cosθ x h\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ma_diff" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  % Diff = (Calc Energy - kWh Diff) / kWh Diff\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4ma_loc_test_ta0na" (ionChange)="showViewMaTest($event, \'after\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4ma_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4ma_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4ma_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> PTE Informations</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Brand</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_after.ta4ma_brand" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Serial No.</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_serialnum" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Test Date</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_after.ta4ma_calibration" displayFormat="DD-MM-YYYY" max="3000-12-31"\n                  pickerFormat="DD:MMM:YYYY" placeholder="Select date" style="padding: 0px;"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Meter Accuracy Test (%Error)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">First</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Second</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Third</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_test1"\n                  (ionChange)="autoCalculateAverageMeterAccuracy(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_test2"\n                  (ionChange)="autoCalculateAverageMeterAccuracy(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_test3"\n                  (ionChange)="autoCalculateAverageMeterAccuracy(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_avg" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> kWh Register Test (%Error)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Stop</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">%Error</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_reg_start" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_reg_stop" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_reg_usage" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_reg_error" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> kWh Registration Test through V, I, Cosθ & Time (h)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">kWh Start</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">kWh End</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">kWh Diff</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_read_start"\n                  (ionChange)="autoCalculateDifferentMeterRead(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_read_end"\n                  (ionChange)="autoCalculateDifferentMeterRead(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_read_diff" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <br />\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Start Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">End Time</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Duration (min)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_after.ta4ma_time_start" (ionChange)="autoCalculateDurationTime(\'after\')"\n                  displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Select time"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_after.ta4ma_time_end" (ionChange)="autoCalculateDurationTime(\'after\')"\n                  displayFormat="HH:mm" pickerFormat="HH:mm" placeholder="Select time"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_time_duration"\n                  (ionChange)="autoCalculateCalcEnergy(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <br />\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">V prim Avg</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">I prim Avg</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Cosθ Avg</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_v_avg"\n                  (ionChange)="autoCalculateCalcEnergy(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_i_avg"\n                  (ionChange)="autoCalculateCalcEnergy(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap : break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_c_avg"\n                  (ionChange)="autoCalculateCalcEnergy(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <br />\n\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Calc Energy</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_calc_energy" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  Calc Energy = √3 x V x I x Cosθ x h\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ma_diff" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  % Diff = (Calc Energy - kWh Diff) / kWh Diff\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="viewEf">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>energy flow/ led indication testing</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'ef\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeEf">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeEf">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4ef_loc_test_ta0na" (ionChange)="showViewEfTest($event, \'before\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="test_before.ta4ef_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4ef_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4ef_ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Element</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary">LED</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary">Indicator</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Red Element Start -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Red</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <!-- LED Section -->\n              <ion-list radio-group [(ngModel)]="test_before.ta4ef_led_r">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>K</ion-label>\n                      <ion-radio class="customCheck" value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>T</ion-label>\n                      <ion-radio class="customCheck" value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <!-- Indicator Section -->\n              <ion-list radio-group [(ngModel)]="test_before.ta4ef_led_ind_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>F</ion-label>\n                      <ion-radio class="customCheck" value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>R</ion-label>\n                      <ion-radio class="customCheck" value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Red Element End -->\n\n          <!-- Yellow Element Start -->\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Yellow</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4ef_led_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>K</ion-label>\n                      <ion-radio class="customCheck" value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>T</ion-label>\n                      <ion-radio class="customCheck" value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4ef_led_ind_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>F</ion-label>\n                      <ion-radio class="customCheck" value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>R</ion-label>\n                      <ion-radio class="customCheck" value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Yellow Element End -->\n\n          <!-- Blue Element Start -->\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Blue</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4ef_led_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>K</ion-label>\n                      <ion-radio class="customCheck" value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>T</ion-label>\n                      <ion-radio class="customCheck" value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4ef_led_ind_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>F</ion-label>\n                      <ion-radio class="customCheck" value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>R</ion-label>\n                      <ion-radio class="customCheck" value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Blue Element End -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  Note: LED - Blinking (Y)es or (N)o, INDICATOR - (F)wd or (R)vs\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4ef_loc_test_ta0na" (ionChange)="showViewEfTest($event, \'after\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="test_after.ta4ef_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4ef_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4ef_ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Element</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary">LED</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-center>\n                <ion-label color="primary">Indicator</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Red Element Start -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Red</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <!-- LED Section -->\n              <ion-list radio-group [(ngModel)]="test_after.ta4ef_led_r">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>K</ion-label>\n                      <ion-radio class="customCheck" value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>T</ion-label>\n                      <ion-radio class="customCheck" value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <!-- Indicator Section -->\n              <ion-list radio-group [(ngModel)]="test_after.ta4ef_led_ind_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>F</ion-label>\n                      <ion-radio class="customCheck" value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>R</ion-label>\n                      <ion-radio class="customCheck" value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Red Element End -->\n\n          <!-- Yellow Element Start -->\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Yellow</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4ef_led_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>K</ion-label>\n                      <ion-radio class="customCheck" value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>T</ion-label>\n                      <ion-radio class="customCheck" value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4ef_led_ind_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>F</ion-label>\n                      <ion-radio class="customCheck" value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>R</ion-label>\n                      <ion-radio class="customCheck" value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Yellow Element End -->\n\n          <!-- Blue Element Start -->\n          <ion-row>\n            <ion-col text-center col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Blue</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4ef_led_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>K</ion-label>\n                      <ion-radio class="customCheck" value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>T</ion-label>\n                      <ion-radio class="customCheck" value="0"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center col-12 col-sm-12 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4ef_led_ind_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>F</ion-label>\n                      <ion-radio class="customCheck" value="F"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>R</ion-label>\n                      <ion-radio class="customCheck" value="R"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- Blue Element End -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  Note: LED - Blinking (Y)es or (N)o, INDICATOR - (F)wd or (R)vs\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewCtr">\n    <ion-item-divider color="light">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>CT Ratio Test & "CT Loading"\n            Percentage</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'ctr\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeCtr">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeCtr">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4ctr_loc_test_ta0na"\n                (ionChange)="showViewCtrTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4ctr_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4ctr_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4ctr_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ct_ratio_0"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ct_ratio_1"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-12 col-sm-12 col-md-9>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4ctr_ct_ratio"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">\n                  R\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">\n                  Y\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">\n                  B\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  I prim (incomer)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ip_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ip_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ip_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  I sec (meter)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_is_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_is_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_is_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  Calc. CT Ratio\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ccr_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ccr_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_ccr_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  % CT loaded\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_cl_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_cl_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_cl_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Calc CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">%CT loaded</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_avg_ccr" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4ctr_avg_cl" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) Calculated CT Ratio = I Primary / I Secondary x 5 (for -/5A) <br />\n                  2) %CT Loaded = I Prim / CT Prim Amps x 100% <br />\n                  3) If %CT Loaded <5% OR>100%, Please verify again at "Item 5: Max CT Loading", to confirm on the CT\n                    Size\n                    that suitable.\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4ctr_loc_test_ta0na" (ionChange)="showViewCtrTest($event, \'after\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4ctr_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4ctr_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4ctr_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ct_ratio_0"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ct_ratio_1"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-12 col-sm-12 col-md-9>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4ctr_ct_ratio" (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">\n                  R\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">\n                  Y\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">\n                  B\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  I prim (incomer)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ip_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ip_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ip_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  I sec (meter)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_is_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_is_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_is_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  Calc. CT Ratio\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ccr_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ccr_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_ccr_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">\n                  % CT loaded\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_cl_r"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_cl_y"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_cl_b"\n                  (ionChange)="autoCalculateCtRatioCtLoaded(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Average</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Calc CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">%CT loaded</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_avg_ccr" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4ctr_avg_cl" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) Calculated CT Ratio = I Primary / I Secondary x 5 (for -/5A) <br />\n                  2) %CT Loaded = I Prim / CT Prim Amps x 100% <br />\n                  3) If %CT Loaded <5% OR>100%, Please verify again at "Item 5: Max CT Loading", to confirm on the CT\n                    Size\n                    that suitable.\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewHspe">\n    <ion-item-divider color="light">\n      <ion-row align-items-center text-wrap>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>CURRENT READING COMPARISON (HV SIDE) METER VS CONSUMER\n            INCOMER (PE TNB if available)</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'hspe\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeHspe">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeHspe">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4hspe_loc_test_ta0na"\n                (ionChange)="showViewHspeTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4hspe_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4hspe_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4hspe_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>TNB Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-3 col-sm-3 col-md-3>\n              <ion-item text-center>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_mt_ratio_0"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_mt_ratio_1"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-9 col-sm-9 col-md-9>\n              <ion-item text-center>\n                <ion-input [(ngModel)]="test_before.ta4hspe_mt_ratio"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item text-center no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">I sec</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_mt_r"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_mt_y"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_mt_b"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>I primary</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_mt_r" [disabled]="true"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_mt_y" [disabled]="true"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_mt_b" [disabled]="true"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close row for TNB METER -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Consumer Incomer</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-3 col-sm-3 col-md-3>\n              <ion-item text-center>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ci_ratio_0"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ci_ratio_1"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-9 col-sm-9 col-md-9>\n              <ion-item text-center>\n                <ion-input [(ngModel)]="test_before.ta4hspe_ci_ratio"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item text-center no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">I sec</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_ci_r"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_ci_y"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_ci_b"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>I primary</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_ci_r"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" [disabled]="true" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_ci_y"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" [disabled]="true" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_ci_b"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" [disabled]="true" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_diff_ci_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_diff_ci_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_diff_ci_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for Consumer Incomer -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>TNB Outgoing VCB (if available)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-3 col-sm-3 col-md-3>\n              <ion-item text-center>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ov_ratio_0"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ov_ratio_1"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-9 col-sm-9 col-md-9>\n              <ion-item text-center>\n                <ion-input [(ngModel)]="test_before.ta4hspe_ov_ratio" (ionChange)="autoCalculateDifferentVcb(\'before\')"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item text-center no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">I sec</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_ov_r"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_ov_y"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_is_ov_b"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>I primary</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_ov_r" [disabled]="true"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_ov_y" [disabled]="true"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_ip_ov_b" [disabled]="true"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label> % Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_diff_ov_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_diff_ov_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hspe_diff_ov_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) I Primary = I sec x CT Ratio <br />\n                  2) % Diff (cons incomer F1 red) = i primary (cons incomer F1 red) - I primary(TNB meter F1 red) / I\n                  primary (cons incomer F1 red) x 100%;\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4hspe_loc_test_ta0na"\n                (ionChange)="showViewHspeTest($event, \'after\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4hspe_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4hspe_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4hspe_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>TNB Meter</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-3 col-sm-3 col-md-3>\n              <ion-item text-center>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_mt_ratio_0"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_mt_ratio_1"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-9 col-sm-9 col-md-9>\n              <ion-item text-center>\n                <ion-input [(ngModel)]="test_after.ta4hspe_mt_ratio"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item text-center no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">I sec</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_mt_r"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_mt_y"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_mt_b"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>I primary</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_mt_r" [disabled]="true"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_mt_y" [disabled]="true"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_mt_b" [disabled]="true"\n                  (ionChange)="autoCalculateIprimaryTnbMeter(\'after\')" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close row for TNB METER -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Consumer Incomer</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-3 col-sm-3 col-md-3>\n              <ion-item text-center>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ci_ratio_0"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ci_ratio_1"\n                  (ionChange)="autoCalculateDifferentConsumer(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-9 col-sm-9 col-md-9>\n              <ion-item text-center>\n                <ion-input [(ngModel)]="test_after.ta4hspe_ci_ratio"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item text-center no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">I sec</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_ci_r"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_ci_y"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_ci_b"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>I primary</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_ci_r"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" [disabled]="true" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_ci_y"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" [disabled]="true" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_ci_b"\n                  (ionChange)="autoCalculateDifferentConsumer(\'after\')" [disabled]="true" placeholder="Auto Calculate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_diff_ci_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_diff_ci_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_diff_ci_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for Consumer Incomer -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>TNB Outgoing VCB (if available)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-3 col-sm-3 col-md-3>\n              <ion-item text-center>\n                <ion-label color="primary">CT Ratio</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ov_ratio_0"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-12 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-12 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ov_ratio_1"\n                  (ionChange)="autoCalculateDifferentVcb(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col col-9 col-sm-9 col-md-9>\n              <ion-item text-center>\n                <ion-input [(ngModel)]="test_after.ta4hspe_ov_ratio" (ionChange)="autoCalculateDifferentVcb(\'after\')"\n                  placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item text-center no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">I sec</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_ov_r"\n                  (ionChange)="autoCalculateDifferentVcb(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_ov_y"\n                  (ionChange)="autoCalculateDifferentVcb(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_is_ov_b"\n                  (ionChange)="autoCalculateDifferentVcb(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>I primary</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_ov_r"\n                  (ionChange)="autoCalculateDifferentVcb(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_ov_y"\n                  (ionChange)="autoCalculateDifferentVcb(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_ip_ov_b"\n                  (ionChange)="autoCalculateDifferentVcb(\'after\')" placeholder="Auto Calculate" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label> % Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_diff_ov_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_diff_ov_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hspe_diff_ov_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) I Primary = I sec x CT Ratio <br />\n                  2) % Diff (cons incomer F1 red) = i primary (cons incomer F1 red) - I primary(TNB meter F1 red) / I\n                  primary (TNB meter F1 red) x 100%;\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="viewHsls">\n    <ion-item-divider color="light">\n      <ion-row align-items-center text-wrap>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>CURRENT READING COMPARISON (HV SIDE & LV SIDE) METER PRIMARY\n            AMPS VS CONSUMER LV OUTGOING</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'hsls\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeHsls">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeHsls">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4hsls_loc_test_ta0na"\n                (ionChange)="showViewHslsTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4hsls_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4hsls_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4hsls_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Meter Prim Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines text-center></ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Amps</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_mpa_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_mpa_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_mpa_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Consumer Lv Outgoing Amps(at Transformer LV cables)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines></ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test1_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test1_r,\'Red\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test1_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test1_y,\'Yellow\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test1_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test1_b,\'Blue\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test2_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test2_r,\'Red\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test2_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test2_y,\'Yellow\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test2_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test2_b,\'Blue\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test3_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test3_r,\'Red\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test3_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test3_y,\'Yellow\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test3_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test3_b,\'Blue\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test4_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test4_r,\'Red\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test4_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test4_y,\'Yellow\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test4_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test4_b,\'Blue\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test5_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test5_r,\'Red\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test5_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test5_y,\'Yellow\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test5_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test5_b,\'Blue\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test6_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test6_r,\'Red\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test6_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test6_y,\'Yellow\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_test6_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\',test_before.ta4hsls_test6_b,\'Blue\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n          <!-- Extra Field -->\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Volt (LV), A:</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Volt (HV), B:</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">V-Factor = A / B:</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_v_lv"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_v_hv"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_v_f"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'before\')" placeholder="Auto Calculate"\n                  disabled="true"> </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for Extra Field -->\n          <!-- Close row LV out going -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Total LV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">LV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_la_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_la_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_la_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">HV Equiv</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_ha_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_ha_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_ha_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  HV Equiv Amps = LV Amps x V-Factor\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for total lv Amps -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>% Diff wrt Meter amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_dma_r" placeholder="Enter value"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_dma_y" placeholder="Enter value"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsls_dma_b" placeholder="Enter value"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close row for % Diff wrt meter amps -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) % Diff = (Total Out Amps - Incomer HV Primary Amps) / Total Out Amps * 100. <br />\n                  2) Amps Comparison Test : % Error\n                  <5% <br />\n                  3) Test 13 must be done on each inspection. While for test 12 & 14 only can be proceed once received\n                  further confirmtion from the engineer.\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4hsls_loc_test_ta0na"\n                (ionChange)="showViewHslsTest($event, \'after\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4hsls_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4hsls_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4hsls_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Meter Prim Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines></ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Amps</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_mpa_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_mpa_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_mpa_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Consumer Lv Outgoing Amps(at Transformer LV cables)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines></ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test1_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test1_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test1_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test2_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test2_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test2_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test3_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test3_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test3_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test4_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test4_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test4_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test5_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test5_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test5_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines text-center>\n                <ion-label color="primary">Tx 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test6_r"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test6_y"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_test6_b"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n          <!-- Extra Field -->\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Volt (LV), A:</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Volt (HV), B:</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">V-Factor = A / B:</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_v_lv"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_v_hv"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_v_f"\n                  (ionChange)="autoCalculateLvAmpsHvAmpsVfactorDifferent(\'after\')" placeholder="Auto Calculate"\n                  disabled="true"> </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for Extra Field -->\n          <!-- Close row LV out going -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> Total LV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">LV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_la_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_la_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_la_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">HV Equiv</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_ha_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_ha_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_ha_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines>\n                <ion-label style="font-style: italic; margin-top: -10px;">\n                  HV Equiv Amps = LV Amps x V-Factor\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for total lv Amps -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>% Diff wrt Meter amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_dma_r" placeholder="Enter value"\n                  disabled="true"> </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_dma_y" placeholder="Enter value"\n                  disabled="true"> </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsls_dma_b" placeholder="Enter value"\n                  disabled="true"> </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close row for % Diff wrt meter amps -->\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) % Diff = (Total Out Amps - Incomer HV Primary Amps) / Total Out Amps * 100. <br />\n                  2) Amps Comparison Test : % Error\n                  <5% <br />\n                  3) Test 13 must be done on each inspection. While for test 12 & 14 only can be proceed once received\n                  further confirmtion from the engineer.\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewHsio">\n    <ion-item-divider color="light">\n      <ion-row text-wrap align-items-center>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>CURRENT READING COMPARISON (HV SIDE) CONSUMER INCOMER VS\n            CONSUMER OUTGOING</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'hsio\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeHsio">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeHsio">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4hsio_loc_test_ta0na"\n                (ionChange)="showViewHsioTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4hsio_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4hsio_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4hsio_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>CT Size</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Incomer HV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_iha_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_iha_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_iha" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">HV Outgoing Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out1_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out1_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_out1" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out2_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out2_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_out2" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out3_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out3_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_out3" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out4_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out4_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_out4" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out5_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out5_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_out5" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out6_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ct_out6_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_before.ta4hsio_ct_out6" (ionChange)="autoCalculateIprimaryHvSide(\'before\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>I sec</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Incomer HV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_iha_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_iha_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_iha_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">HV Outgoing Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out1_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out1_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out1_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out2_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out2_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out2_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out3_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out3_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out3_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out4_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out4_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out4_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out5_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out5_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out5_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out6_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out6_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_is_out6_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'before\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>I prim = I sec x CT Size</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Incomer HV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_iha_r" [disabled]="true"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_iha_y" [disabled]="true"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_iha_b" [disabled]="true"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">HV Outgoing Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out1_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out1_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out1_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out2_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out2_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out2_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out3_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out3_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out3_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out4_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out4_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out4_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out5_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out5_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out5_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out6_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out6_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_out6_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'before\')" [disabled]="true" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Total Out Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Total</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_total_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_total_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_total_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for total lv Amps -->\n\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> % Diff wrt HV amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_diff_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_diff_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_before.ta4hsio_ip_diff_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) % Diff = (Total Out Amps - Incomer HV Primary Amps) / Total Out Amps x 100. <br />\n                  2) Amps Comparison Test : % Error\n                  <5% <br />\n                  3) Test 13 must be done on each inspection. While for test 12 & 14 only can be proceed once received\n                  further confirmtion from the engineer.\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4hsio_loc_test_ta0na"\n                (ionChange)="showViewHsioTest($event, \'after\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4hsio_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4hsio_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4hsio_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>CT Size</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Incomer HV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_iha_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item>\n                <ion-label text-center color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_iha_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_iha" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">HV Outgoing Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out1_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out1_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_out1" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out2_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out2_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_out2" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out3_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out3_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_out3" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out4_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out4_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_out4" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out5_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out5_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_out5" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-5 col-sm-5 col-md-5>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out6_0"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 col-sm-1 col-md-1>\n              <ion-item text-center>\n                <ion-label color="primary">/</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ct_out6_1"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col>\n              <ion-item>\n                <ion-input [(ngModel)]="test_after.ta4hsio_ct_out6" (ionChange)="autoCalculateIprimaryHvSide(\'after\')"\n                  placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>I sec</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Incomer HV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_iha_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_iha_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_iha_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">HV Outgoing Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out1_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out1_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out1_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out2_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out2_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out2_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out3_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out3_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out3_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out4_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out4_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out4_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out5_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out5_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out5_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out6_r"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out6_y"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_is_out6_b"\n                  (ionChange)="autoCalculateIprimaryHvSide(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>I prim = I sec x CT Size</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Incomer HV Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_iha_r" placeholder="Enter value"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_iha_y" placeholder="Enter value"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_iha_b" placeholder="Enter value"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">HV Outgoing Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out1_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out1_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out1_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out2_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out2_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out2_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out3_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out3_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out3_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 4</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out4_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out4_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out4_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 5</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out5_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out5_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out5_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Out 6</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out6_r"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out6_y"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_out6_b"\n                  (ionChange)="autoCalculateTotalDifferentAmps(\'after\')" placeholder="Enter value" disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Total Out Amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">Total</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_total_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_total_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_total_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Close for total lv Amps -->\n\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center> % Diff wrt HV amps</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label text-center color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-2 col-sm-2 col-md-2>\n              <ion-item no-lines>\n                <ion-label text-center color="primary">% Diff</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_diff_r" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_diff_y" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="test_after.ta4hsio_ip_diff_b" placeholder="Auto Calculate"\n                  disabled="true">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Note: <br />\n                  1) % Diff = (Total Out Amps - Incomer HV Primary Amps) / Total Out Amps x 100. <br />\n                  2) Amps Comparison Test : % Error\n                  <5% <br />\n                  3) Test 13 must be done on each inspection. While for test 12 & 14 only can be proceed once received\n                  further confirmtion from the engineer.\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewAi">\n    <ion-item-divider color="light">\n      <ion-row no-lines align-items-center>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Additional Information</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'ai\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeAi">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeAi">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4ai_loc_test_ta0na" (ionChange)="showViewAiTest($event,\'before\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4ai_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4ai_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_before.ta4ai_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Key</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'before\', \'key\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Standard</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_key_standard">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Abloy Lama</ion-label>\n                      <ion-radio class="customCheck" item-content value="Abloy Lama"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Abloy Baru</ion-label>\n                      <ion-radio class="customCheck" item-content value="Abloy Baru"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 offset-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_key_standard">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Gere</ion-label>\n                      <ion-radio class="customCheck" item-content value="Gere"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="Tidak"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Non-Standard</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_key_non_standard">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item text-wrap>\n                <ion-label color="primary">Key stored by the Customer</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 align-self-end>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_key_customer">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Info CT, PT & S/Gear</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'before\', \'info\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Type of S/Gear at TNB P/E</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_info_gear">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>RMU</ion-label>\n                      <ion-radio class="customCheck" item-content value="RMU"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">CT Meter Location</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_info_ct">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Cons VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="Cons VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>TNB VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="TNB VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">PT Meter Location</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_info_pt">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Cons VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="Cons VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>TNB VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="TNB VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-label color="primary">VCB Brand with CT/PT</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_before.ta4ai_info_vcb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Meter Cablings</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'before\', \'meter-cable\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-list style="border-style:groove;" radio-group [(ngModel)]="test_before.ta4ai_meter_cable">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>Armoured Cable</ion-label>\n                      <ion-radio class="customCheck" item-content value="ac"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>PVC Conductor in PIPE</ion-label>\n                      <ion-radio class="customCheck" item-content value="pvc"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list style="border-style:groove;" radio-group [(ngModel)]="test_before.ta4ai_meter_box">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>Direct to CT & PT</ion-label>\n                      <ion-radio class="customCheck" item-content value="ctpt"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>Through Junction Box</ion-label>\n                      <ion-radio class="customCheck" item-content value="junb"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Kiosk Meter Location</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'before\', \'pe-kiosk\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">PE Room/ SSU TNB</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_kiosk_pe">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Special Meter Room</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_kiosk_sm">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Consumer Switch Room</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_kiosk_su">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Type of Kiosk Meter</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_before.ta4ai_kiosk_type">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Normal</ion-label>\n                      <ion-radio class="customCheck" item-content value="Normal"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>HRC</ion-label>\n                      <ion-radio class="customCheck" item-content value="HRC"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Date estimated of inspection from for the related VT/VS (if applicable)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-2>\n              <ion-item>\n                <ion-label color="primary">Option</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2>\n              <ion-item>\n                <ion-select [(ngModel)]="test_before.optionDate" interface="popover" placeholder="Tap to select.."\n                  (ionChange)="changeOptionDate($event, \'before\')">\n                  <ion-option value="true">Yes</ion-option>\n                  <ion-option value="false">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col *ngIf="!showValueDateBefore">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_before.ta4ai_kiosk_date" max="3000-12-31"\n                  [disabled]="showValueDateBefore" displayFormat="DD/MM/YYYY" pickerFormat="DD:MM:YYYY"\n                  placeholder="Tap to select.." style="padding: 0px;">\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Option: <br />\n                  1) Yes or No <br />\n                  2) If Yes, populate calendar to be choosed by user, if no return "-".\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4ai_loc_test_ta0na" (ionChange)="showViewAiTest($event, \'after\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4ai_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4ai_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="!test_after.ta4ai_ta0na">\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Key</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'after\', \'key\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Standard</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_key_standard">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Abloy Lama</ion-label>\n                      <ion-radio class="customCheck" item-content value="Abloy Lama"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Abloy Baru</ion-label>\n                      <ion-radio class="customCheck" item-content value="Abloy Baru"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 offset-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_key_standard">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Gere</ion-label>\n                      <ion-radio class="customCheck" item-content value="Gere"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="Tidak"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Non-Standard</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_key_non_standard">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item text-wrap>\n                <ion-label color="primary">Key stored by the Customer</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 align-self-end>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_key_customer">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Info CT, PT & S/Gear</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'after\', \'info\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Type of S/Gear at TNB P/E</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_info_gear">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>RMU</ion-label>\n                      <ion-radio class="customCheck" item-content value="RMU"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">CT Meter Location</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_info_ct">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Cons VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="Cons VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>TNB VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="TNB VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">PT Meter Location</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_info_pt">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Cons VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="Cons VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>TNB VCB</ion-label>\n                      <ion-radio class="customCheck" item-content value="TNB VCB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-item>\n                <ion-label color="primary">VCB Brand with CT/PT</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_after.ta4ai_info_vcb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Meter Cablings</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'after\', \'meter-cable\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list style="border-style:groove;" radio-group [(ngModel)]="test_after.ta4ai_meter_cable">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>Armoured Cable</ion-label>\n                      <ion-radio class="customCheck" item-content value="ac"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>PVC Conductor in PIPE</ion-label>\n                      <ion-radio class="customCheck" item-content value="pvc"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-list style="border-style:groove;" radio-group [(ngModel)]="test_after.ta4ai_meter_box">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>Direct to CT & PT</ion-label>\n                      <ion-radio class="customCheck" item-content value="ctpt"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-12>\n                    <ion-item no-lines>\n                      <ion-label>Through Junction Box</ion-label>\n                      <ion-radio class="customCheck" item-content value="junb"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>Kiosk Meter Location</ion-label>\n                <button mode="md" ion-button item-end round color="primary"\n                  (click)="clearValueRadioComponent(\'after\', \'pe-kiosk\')">Clear\n                </button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">PE Room/ SSU TNB</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_kiosk_pe">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="align-self: flex-end;">\n              <ion-item>\n                <ion-label color="primary">Special Meter Room</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_kiosk_sm">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-item>\n                <ion-label color="primary">Consumer Switch Room</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_kiosk_su">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Yes</ion-label>\n                      <ion-radio class="customCheck" item-content value="Yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>No</ion-label>\n                      <ion-radio class="customCheck" item-content value="No"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-item>\n                <ion-label color="primary">Type of Kiosk Meter</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6>\n              <ion-list radio-group [(ngModel)]="test_after.ta4ai_kiosk_type">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Normal</ion-label>\n                      <ion-radio class="customCheck" item-content value="Normal"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>HRC</ion-label>\n                      <ion-radio class="customCheck" item-content value="HRC"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Date estimated of inspection from for the related VT/VS (if applicable)\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-2>\n              <ion-item>\n                <ion-label color="primary">Option</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2>\n              <ion-item>\n                <ion-select [(ngModel)]="test_after.optionDate" interface="popover" placeholder="Tap to select.."\n                  (ionChange)="changeOptionDate($event, \'after\')">\n                  <ion-option value="true">Yes</ion-option>\n                  <ion-option value="false">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col *ngIf="!showValueDateAfter">\n              <ion-item>\n                <ion-datetime [(ngModel)]="test_after.ta4ai_kiosk_date" [disabled]="showValueDateAfter"\n                  displayFormat="DD/MM/YYYY" pickerFormat="DD:MM:YYYY" placeholder="Tap to select.."\n                  style="padding: 0px;"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12>\n            <ion-col col-12 col-sm-12 col-md-12>\n              <ion-item no-lines text-wrap>\n                <ion-label style="font-style: italic; margin-top: 0px;">\n                  Option: <br />\n                  1) Yes or No <br />\n                  2) If Yes, populate calendar to be choosed by user, if no return "-".\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf="viewPreComm">\n    <ion-item-divider color="light">\n      <ion-row no-lines align-items-center>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Pre-Commissioning</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'precomm\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment Start -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangePreComm">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableBefore">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n    <!-- Segment End -->\n\n    <div [ngSwitch]="valueChangePreComm">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4pc_loc_test_ta0na"\n                (ionChange)="showViewPreCommTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="test_before.ta4pc_ta0na">\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" maxlength="40" [(ngModel)]="test_before.ta4pc_ta0naremarks" type="text"\n                placeholder="Please Enter Remark">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!test_before.ta4pc_ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n\n            </ion-col>\n            <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">R</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- 1st row  start -->\n          <ion-row>\n            <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-wrap style="height: 100%">\n                <ion-label color="primary">Continuity Test From CT & PT to Kiosk</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_contctpt_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value=\'false\'></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_contctpt_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_contctpt_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- 2nd Row start -->\n          <ion-row>\n            <ion-col text-wrap col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-wrap style="height: 100%">\n                <ion-label color="primary">CT Ratio Test</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_ctratio_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_ctratio_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_ctratio_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- 2nd row end -->\n          <!-- 3rd row start -->\n          <ion-row>\n            <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-wrap style="height: 100%">\n                <ion-label color="primary">CT Polarity Test</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_ctpolar_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_ctpolar_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_before.ta4pc_ctpolar_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!--  3rd row end -->\n          <ion-list radio-group [(ngModel)]="test_before.ta4pc_kio_wirg" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">Kiosk Wiring Continuity Test</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <ion-list radio-group [(ngModel)]="test_before.ta4pc_s2_starerh" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">S2 Star-earthed (TEST_BLOCK only)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <ion-list radio-group [(ngModel)]="test_before.ta4pc_ptpolar" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">PT Polarity Test (MVHV)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <ion-list radio-group [(ngModel)]="test_before.ta4pc_nseaptpas" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">Neutral Star-Earthed at PT Primary and Secondary (MVHV)\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label>Pass</ion-label>\n                  <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label>Fail</ion-label>\n                  <ion-radio class="customCheck" value="false"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4pc_loc_test_ta0na"\n                (ionChange)="showViewPreCommTest($event, \'after\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="test_after.ta4pc_ta0na">\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" maxlength="40" [(ngModel)]="test_after.ta4pc_ta0naremarks" type="text"\n                placeholder="Please Enter Remark">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!test_after.ta4pc_ta0na">\n          <ion-row>\n            <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n\n            </ion-col>\n            <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">R </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Y</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col text-center col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">B</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- 1st row  start -->\n          <ion-row>\n            <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-wrap style="height: 100%">\n                <ion-label color="primary">Continuity Test From CT & PT to Kiosk</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_contctpt_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_contctpt_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_contctpt_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- 2nd Row start -->\n          <ion-row>\n            <ion-col text-wrap col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-wrap style="height: 100%">\n                <ion-label color="primary">CT Ratio Test</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_ctratio_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_ctratio_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_ctratio_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!-- 2nd row end -->\n          <!-- 3rd row start -->\n          <ion-row>\n            <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item text-wrap style="height: 100%">\n                <ion-label color="primary">CT Polarity Test</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_ctpolar_r">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_ctpolar_y">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-list radio-group [(ngModel)]="test_after.ta4pc_ctpolar_b">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <!--  3rd row end -->\n          <ion-list radio-group [(ngModel)]="test_after.ta4pc_kio_wirg" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">Kiosk Wiring Continuity Test</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <ion-list radio-group [(ngModel)]="test_after.ta4pc_s2_starerh" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">S2 Star-earthed (TEST_BLOCK only)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <ion-list radio-group [(ngModel)]="test_after.ta4pc_ptpolar" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">PT Polarity Test (MVHV)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Pass</ion-label>\n                      <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Fail</ion-label>\n                      <ion-radio class="customCheck" value="false"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n\n          <ion-list radio-group [(ngModel)]="test_after.ta4pc_nseaptpas" style="margin-bottom: 0px;">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap style="height: 100%">\n                  <ion-label color="primary">Neutral Star-Earthed at PT Primary and Secondary (MVHV)\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label>Pass</ion-label>\n                  <ion-radio class="customCheck" checked="1" value="true"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label>Fail</ion-label>\n                  <ion-radio class="customCheck" value="false"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="viewIns && summation">\n    <ion-item-divider color="light">\n      <ion-row no-lines align-items-center>\n        <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Summation Inspection</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n          <button ion-button small round mode="md" (click)="resetTestInspection(\'summ\')" style="opacity: unset;"\n            text-end>Reset</button>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <!-- Segment -->\n    <ion-row style="padding-top: 15px;padding-left: 15px;">\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-segment [(ngModel)]="valueChangeIns">\n          <ion-segment-button value="before" [disabled]="disableBefore">\n            Before\n          </ion-segment-button>\n          <ion-segment-button value="after" [disabled]="disableAfter">\n            After\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <div [ngSwitch]="valueChangeIns">\n      <div *ngSwitchCase="\'before\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_before.ta4ins_loc_test_ta0na"\n                (ionChange)="showViewInsTest($event, \'before\')" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_before.ta4ins_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_before.ta4ins_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!test_before.ta4ins_ta0na">\n          <div *ngFor="let attr of summatorBefore; let j = index; trackBy: trackByFn">\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label>\n                    {{ \n                      attr.ta4metertype == \'90\' ? \'Main Meter\' : \n                      attr.ta4metertype == \'91\' ? \'Feeder Meter\' : \n                      attr.ta4metertype == \'94\' ? \'Sub Meter\' : \n                      attr.ta4metertype == \'96\' ? \'Sub Feeder Meter\' : \n                      attr.ta4metertype == \'92\' ? \'Check Meter\' : \n                      attr.ta4metertype == \'93\' ? \'Check Feeder Meter\' : \n                      attr.ta4metertype == \'95\' ? \'Check Sub Meter\' : \n                      attr.ta4metertype == \'97\' ? \'Check Sub Feeder Meter\' : \'\' \n                    }} ({{ attr.ta4serialNum }})\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">End, 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Start, 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>Usage</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" [(ngModel)]="attr.ta4reg_amf_b"\n                    (ionChange)="autoCalculateTotalSummator(\'before\', j, attr)" placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" [(ngModel)]="attr.ta4reg_amb_b"\n                    (ionChange)="autoCalculateTotalSummator(\'before\', j, attr)" placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" [(ngModel)]="attr.ta4reg_amc_b" disabled="true" placeholder="Auto Populate">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Summator {{ meterName }}</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">End, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Start, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Usage</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraBefore.ta4sum_end"\n                  (ionChange)="autoCalculateTotalDifferentSummator(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraBefore.ta4sum_start"\n                  (ionChange)="autoCalculateTotalDifferentSummator(\'before\')" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraBefore.ta4sum_sted_diff" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style="padding-left:15px;">\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>% Different</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Total Usage, 180</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Total Usage, 880</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraBefore.ta4sum_consumption" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraBefore.ta4sum_sted_diff" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>% Different: </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraBefore.ta4sum_diff" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>% (less than 3%)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Old View (Close - 22/04/2019) -->\n          <!-- <ion-row>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Main / Check</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Main Summation</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">End, 180</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" (ionChange)="autoCalculateTotalConsumption(\'before\')"\n                  [(ngModel)]="test_before.ta4reg_amf" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">End, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_before.ta4sum_end" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">Start, 180</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" (ionChange)="autoCalculateTotalConsumption(\'before\')"\n                  [(ngModel)]="test_before.ta4reg_amb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">Start, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_before.ta4sum_start" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Consumption</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_before.ta4reg_amc" readonly="true" placeholder="Auto Populate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <br />\n          <div *ngIf="summationView">\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Total Calculation for All Feeder</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Consumption, 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Consumption, 880</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="test_before.ta4sum_consumption" readonly="false"\n                    placeholder="Auto Populate"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="test_before.ta4sum_sted_diff" readonly="false"\n                    placeholder="Auto Populate"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label>% Different:</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="test_before.ta4sum_diff" readonly="true"\n                    placeholder="Auto Populate">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>% Different:</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div> -->\n        </div>\n      </div>\n      <div *ngSwitchCase="\'after\'">\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="test_after.ta4ins_loc_test_ta0na" (ionChange)="showViewInsTest($event, \'after\')"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="test_after.ta4ins_ta0na">\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" [(ngModel)]="test_after.ta4ins_ta0naremarks" maxlength="40" type="text"\n                placeholder="Please Enter Remark"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!test_after.ta4ins_ta0na">\n          <div *ngFor="let attr of summatorAfter; let j = index">\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label>\n                    {{ \n                      attr.ta4metertype == \'90\' ? \'Main Meter\' : \n                      attr.ta4metertype == \'91\' ? \'Feeder Meter\' : \n                      attr.ta4metertype == \'94\' ? \'Sub Meter\' : \n                      attr.ta4metertype == \'96\' ? \'Sub Feeder Meter\' : \n                      attr.ta4metertype == \'92\' ? \'Check Meter\' : \n                      attr.ta4metertype == \'93\' ? \'Check Feeder Meter\' : \n                      attr.ta4metertype == \'95\' ? \'Check Sub Meter\' : \n                      attr.ta4metertype == \'97\' ? \'Check Sub Feeder Meter\' : \'\' \n                    }} ({{ attr.ta4serialNum }})\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">End, 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Start, 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>Usage</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" [(ngModel)]="attr.ta4reg_amf_a"\n                    (ionChange)="autoCalculateTotalSummator(\'after\', j, attr)" placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" [(ngModel)]="attr.ta4reg_amb_a"\n                    (ionChange)="autoCalculateTotalSummator(\'after\', j, attr)" placeholder="Enter value"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="number" [(ngModel)]="attr.ta4reg_amc_a"\n                    (ionChange)="autoCalculateTotalSummator(\'after\', j, attr)" disabled="true"\n                    placeholder="Auto Populate">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Summator {{ meterName }}</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">End, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Start, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Usage</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraAfter.ta4sum_end"\n                  (ionChange)="autoCalculateTotalDifferentSummator(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraAfter.ta4sum_start"\n                  (ionChange)="autoCalculateTotalDifferentSummator(\'after\')" placeholder="Enter value">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraAfter.ta4sum_sted_diff" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style="padding-left:15px;">\n              <ion-item no-lines style="background: #FFCCCC;border-radius: 10px;">\n                <ion-label text-center>% Different</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Total Usage, 180</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Total Usage, 880</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraAfter.ta4sum_consumption" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraAfter.ta4sum_sted_diff" disabled="true"\n                  placeholder="Auto Populate"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>% Different: </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="number" [(ngModel)]="summatorExtraAfter.ta4sum_diff" disabled="true"\n                  placeholder="Auto Populate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>% (less than 3%)</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Old View (Close - 22/04/2019) -->\n          <!-- <ion-row>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Main / Check</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item text-center>\n                <ion-label color="primary">Main Summation</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">End, 180</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" (ionChange)="autoCalculateTotalConsumption(\'after\')"\n                  [(ngModel)]="test_after.ta4reg_amf" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">End, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_after.ta4sum_end" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">Start, 180</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" (ionChange)="autoCalculateTotalConsumption(\'after\')"\n                  [(ngModel)]="test_after.ta4reg_amb" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-2 col-2>\n              <ion-item>\n                <ion-label color="primary">Start, 880</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-sm-12 col-md-4 col-4>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_after.ta4sum_start" placeholder="Enter value"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label color="primary">Consumption</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-input type="text" [(ngModel)]="test_after.ta4reg_amc" readonly="true" placeholder="Auto Populate">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <br />\n          <div *ngIf="summationView">\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Total Calculation for All Feeder</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Consumption, 180</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label color="primary">Consumption, 880</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="test_after.ta4sum_consumption" readonly="false"\n                    placeholder="Auto Populate"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="test_after.ta4sum_sted_diff" readonly="false"\n                    placeholder="Auto Populate"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label>% Different:</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="test_after.ta4sum_diff" readonly="true"\n                    placeholder="Auto Populate">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>% Different:</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveTestDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/deviceTestForms/seal-mvhv-inspect/seal-mvhv-inspect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SealMvhvInspectPage);
    return SealMvhvInspectPage;
}());

//# sourceMappingURL=seal-mvhv-inspect.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealMvhvInspectPageModule", function() { return SealMvhvInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_mvhv_inspect__ = __webpack_require__(1085);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealMvhvInspectPageModule = /** @class */ (function () {
    function SealMvhvInspectPageModule() {
    }
    SealMvhvInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_mvhv_inspect__["a" /* SealMvhvInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_mvhv_inspect__["a" /* SealMvhvInspectPage */]),
            ],
        })
    ], SealMvhvInspectPageModule);
    return SealMvhvInspectPageModule;
}());

//# sourceMappingURL=seal-mvhv-inspect.module.js.map

/***/ })

});
//# sourceMappingURL=48.js.map