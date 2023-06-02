webpackJsonp([13],{

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_MeterReading__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__ = __webpack_require__(975);
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
 * Generated class for the RegisterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterDetailsPage = /** @class */ (function () {
    function RegisterDetailsPage(navCtrl, navParams, jsonStoreCrud, toastCtrl, dataService, appCtrl, gf, gv, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jsonStoreCrud = jsonStoreCrud;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.appCtrl = appCtrl;
        this.gf = gf;
        this.gv = gv;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.functClass = __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */];
        this.dCons = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        this.soTypes = __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.hideShowRegister = true;
        this.item = '';
        this.multiAssetLocci = '';
        this.attr = '';
        this.fIndex = null;
        this.worktype = null; //SO Type
        this.voltageCode = "03";
        this.check = true;
        this.validateViRemark = true;
        this.showInsSts = false;
        this.showRemoSts = false;
        this.showDeviceSts = false;
        this.readDevice = false;
        this.showSystemSts = false;
        this.showRpmind = false;
        this.showRmvind = true;
        this.showIstind = true;
        this.showWma = true;
        this.mrNoteDisable = true;
        this.showRemovalMeterStatus = false;
        this.showRemovalModemStatus = false;
        this.showRemovalSimcardStatus = false;
        this.showRemovalCtStatus = false;
        this.showRemovalPtStatus = false;
        this.showInstallMeterStatus = false;
        this.showInstallModemStatus = false;
        this.showInstallSimcardStatus = false;
        this.meterExisting = false;
        this.modemExisting = false;
        this.simcardExisting = false;
        this.ctExisting = false;
        this.ptExisting = false;
        this.disabledDeviceStatus = false;
        this.devicestatus = [];
        this.contTest = 0;
        // Validation Attributes..
        this.validateMrType = false;
        this.validateMrNote = false;
        // Hide/Show Variables
        this.showInformation = true;
        this.showAction = true;
        this.showRegister = true;
        this.showContainer = false;
        this.selected_wmattribute = 'N';
        this.selected_indicator = 'Y';
        // this.items = this.navParams.data;
        this.itemOri = this.navParams.get('paramObj');
        this.multiAssetLocciOri = this.navParams.get('mLocci');
        // this.multiAssetLocci = this.navParams.get('assetDetails');
        this.fIndex = this.navParams.get('fIndex');
        this.maIndex = this.navParams.get('maIndex');
        this.modem = this.navParams.get('modem');
        this.simcard = this.navParams.get('simcard');
        this.modemIndex = this.navParams.get('modemIndex');
        this.simcardIndex = this.navParams.get('simcardIndex');
        this.ctIndex = this.navParams.get('ctIndex');
        this.ptIndex = this.navParams.get('ptIndex');
        // Clone Data
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        /**
         * Description  : Change condition checking for ta0installationvoltage > ta0devicevoltage because meter mixed in so MVHV.
         * Created      : Alif (27.08.2019)
         */
        if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN ||
            this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK)
            && (this.item.json.worktype === this.soTypes.ZINL) && (Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicevoltage) > 3)) {
            this.showContainer = true;
        }
        else {
            this.showContainer = false;
        }
        if (this.item.json.worktype === this.soTypes.ZRCE || this.item.json.worktype === this.soTypes.ZINR) {
            this.hideShowRegister = false;
        }
        var querypart = [];
        if (this.item.json.worktype === this.soTypes.ZMMR) {
            querypart = WL.JSONStore.QueryPart().equal("domainid", "TA0MRNOTE");
            this.jsonStoreCrud
                .getSearchRecordNoLimit_Device(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, [querypart])
                .then(function (result) {
                _this.mrNodes = result;
            });
        }
        // attr start from here..
        //AMR Checking Function Calling...
        this.getAMRCheckingCondition();
        //this.getDetviceStatusPreLoading(this.attr.ta0serialnum);
        // Remove WMAT from ZINR by alif on 20th dec 2018
        // this.item.json.worktype === this.soTypes.ZINR
        if (this.item.json.worktype === this.soTypes.ZINL) {
            this.onHideShowRegister(this.multiAssetLocciOri.ta0wrgmtrind);
        }
        if (typeof (this.item.json) !== 'undefined') {
            this.worktype = this.item.json.worktype;
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
                this.ta0ctcontype = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ctcontype;
                this.ta0ptcontype = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ptcontype;
                if (typeof (this.modemIndex) !== "undefined" && this.modemIndex !== null && this.modemIndex !== "") {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0simcardip) !== "undefined") {
                        this.ta0simcardip = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0simcardip;
                    }
                }
                if (typeof (this.simcardIndex) !== "undefined" && this.simcardIndex !== null && this.simcardIndex !== "") {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0simcardip) !== "undefined") {
                        this.ta0simcardip = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0simcardip;
                    }
                }
            }
        }
        //console.log("Data Validation constructor=" + JSON.stringify(this.item));
        // Checking Action Section (Device Status & System Status)
        // if (this.worktype === this.soTypes.ZIST || this.worktype === this.soTypes.ZRMV || this.worktype == this.soTypes.ZUDN || this.worktype == this.soTypes.ZRPC) {
        //change on 25/4/2022 for device status display for smart meter  
        if (this.attr.ta0functionclass === this.functClass.NMTR || this.attr.ta0functionclass === this.functClass.RMTR || this.attr.ta0functionclass === this.functClass.SMTR || this.attr.ta0functionclass === this.functClass.SIMCRD || this.attr.ta0functionclass === this.functClass.MODEM || this.attr.ta0functionclass === this.functClass.SMTR_CM) {
            // Checking Meter is available or not
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
                // Reset to default empty
                this.deviceStatusMeterValue = [];
                // Checking if empty object 'ta0systemstatus' (Meter)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus !== null) {
                    this.systemStatusMeterValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus;
                    if (this.systemStatusMeterValue === 'ZREM') {
                        this.showRemovalMeterStatus = true;
                    }
                }
                // Checking if empty object 'ta0devicestatus' (Meter)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus !== null) {
                    for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus.length; i++) {
                        this.deviceStatusMeterValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus[i].ta0status);
                    }
                    // Display Value
                    this.showRemovalMeterStatus = true;
                }
                this.meterExisting = true;
            }
            else {
                this.meterExisting = false;
            }
            // Checking Modem is available or not
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]) !== 'undefined') {
                // Reset to default empty
                this.deviceStatusModemValue = [];
                // Checking if empty object 'ta0systemstatus' (Modem)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus !== null) {
                    this.systemStatusModemValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus;
                    if (this.systemStatusModemValue === 'ZREM') {
                        this.showRemovalModemStatus = true;
                    }
                }
                // Checking if empty object 'ta0devicestatus' (Modem)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus !== null) {
                    for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus.length; i++) {
                        this.deviceStatusModemValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus[i].ta0status);
                    }
                    // Display Value
                    this.showRemovalModemStatus = true;
                }
                this.modemExisting = true;
            }
            else {
                this.modemExisting = false;
            }
            // Checking Simcard is available or not
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]) !== 'undefined') {
                // Reset to default empty
                this.deviceStatusSimcardValue = [];
                // Checking if empty object 'ta0systemstatus' (Simcard)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus !== null) {
                    this.systemStatusSimcardValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus;
                    if (this.systemStatusSimcardValue === 'ZREM') {
                        this.showRemovalSimcardStatus = true;
                    }
                }
                // Checking if empty object 'ta0devicestatus' (Simcard)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus !== null) {
                    for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus.length; i++) {
                        this.deviceStatusSimcardValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus[i].ta0status);
                    }
                    // Display Value
                    this.showRemovalSimcardStatus = true;
                }
                this.simcardExisting = true;
            }
            else {
                this.simcardExisting = false;
            }
        }
        if (this.attr.ta0functionclass === this.functClass.CTTFR || this.attr.ta0functionclass === this.functClass.CTDIR) {
            /**
             * Reason   : To show value ta0currentratio & ta0class collect from ta0registers.
             * Created  : Alif (22-01-2019)
             */
            // Current Ratio
            if (typeof (this.attr.ta0registers[0]) !== "undefined" && typeof (this.attr.ta0registers[1]) !== "undefined") {
                if ((typeof (this.attr.ta0registers[0].ta0transformercurrent) !== "undefined" && this.attr.ta0registers[0].ta0transformercurrent !== null && this.attr.ta0registers[0].ta0transformercurrent !== "") ||
                    (typeof (this.attr.ta0registers[1].ta0transformercurrent) !== "undefined" && this.attr.ta0registers[1].ta0transformercurrent !== null && this.attr.ta0registers[1].ta0transformercurrent !== "") ||
                    (typeof (this.attr.ta0currentratio) !== "undefined" && this.attr.ta0currentratio !== null && this.attr.ta0currentratio !== "")) {
                    if (this.attr.ta0registers[0].hasOwnProperty("ta0transformercurrent") && this.attr.ta0registers[1].hasOwnProperty("ta0transformercurrent")) {
                        var cr = parseFloat(this.attr.ta0registers[1].ta0transformercurrent) / parseFloat(this.attr.ta0registers[0].ta0transformercurrent);
                        var loc_cr = this.attr.ta0registers[1].ta0transformercurrent + "/" + this.attr.ta0registers[0].ta0transformercurrent + " A";
                        if (!isNaN(cr)) {
                            this.attr.ta0currentratio = cr;
                            this.attr.loc_ta0currentratio = loc_cr;
                        }
                    }
                    else if (this.attr.hasOwnProperty("ta0currentratio")) {
                        if (typeof (this.attr.ta0registers[0].ta0windinggroup) !== "undefined") {
                            var stringValue = (this.attr.ta0registers[0].ta0windinggroup).toString();
                        }
                        else {
                            var stringValue = [];
                        }
                        var array = [];
                        var stringFull = "", CR;
                        // Collect String
                        for (var i = 0; i < stringValue.length; i++) {
                            array.push(stringValue.charAt(i));
                        }
                        var string = array.splice(1, 8);
                        var ratio = string.splice(0, 5);
                        ratio.splice(4, 0, "/");
                        // convert array to string
                        for (var k = 0; k < ratio.length; k++) {
                            stringFull += ratio[k];
                        }
                        CR = parseFloat(stringFull);
                        this.attr.ta0currentratio = CR;
                        this.attr.loc_ta0currentratio = stringFull.toString() + " A";
                    }
                }
                // Class
                if ((typeof (this.attr.ta0registers[0].ta0windingclass) !== "undefined" && this.attr.ta0registers[0].ta0windingclass !== null && this.attr.ta0registers[0].ta0windingclass !== "") ||
                    (typeof (this.attr.ta0registers[1].ta0windingclass) !== "undefined") && this.attr.ta0registers[1].ta0windingclass !== null && this.attr.ta0registers[1].ta0windingclass !== "") {
                    if (this.attr.ta0registers[0].hasOwnProperty("ta0windingclass") && this.attr.ta0registers[1].hasOwnProperty("ta0windingclass")) {
                        this.attr.ta0class = this.attr.ta0registers[0].ta0windingclass;
                    }
                }
            }
            // Winding Group Checking
            var loc_windingGroup = null;
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registers) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registers.length !== 0) {
                loc_windingGroup = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registers[0].ta0windinggroup;
                this.attr.loc_windingGroup = loc_windingGroup;
            }
            // Checking CT is avilable or not
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex]) !== 'undefined') {
                // Reset to default empty
                this.deviceStatusCtValue = [];
                // Checking if empty object 'ta0systemstatus' (CT)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus !== null) {
                    this.systemStatusCtValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus;
                    if (this.systemStatusCtValue === 'ZREM') {
                        this.showRemovalCtStatus = true;
                    }
                }
                // Checking if empty object 'ta0devicestatus' (CT)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus !== null) {
                    for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus.length; i++) {
                        this.deviceStatusCtValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus[i].ta0status);
                    }
                    // Display Value
                    this.showRemovalCtStatus = true;
                }
                this.ctExisting = true;
            }
            else {
                this.ctExisting = false;
            }
        }
        if (this.attr.ta0functionclass === this.functClass.PTTFR || this.attr.ta0functionclass === this.functClass.VTDIR) {
            /**
             * Reason   : To show value ta0currentratio & ta0class collect from ta0registers.
             * Created  : Alif (22-01-2019)
             */
            // Voltage Ratio
            if (this.attr.ta0registers[0].hasOwnProperty("ta0transformervoltage") && this.attr.ta0registers[1].hasOwnProperty("ta0transformervoltage")) {
                var vr = parseFloat(this.attr.ta0registers[1].ta0transformervoltage) / parseFloat(this.attr.ta0registers[0].ta0transformervoltage);
                var loc_vr = this.attr.ta0registers[1].ta0transformervoltage + "/" + this.attr.ta0registers[0].ta0transformervoltage + " A";
                if (!isNaN(vr)) {
                    this.attr.ta0voltageratio = vr.toFixed(2);
                    this.attr.loc_ta0voltageratio = loc_vr;
                }
            }
            else if (this.attr.hasOwnProperty("ta0currentratio")) {
                if (typeof (this.attr.ta0registers[0].ta0windinggroup) !== "undefined") {
                    var stringValue = (this.attr.ta0registers[0].ta0windinggroup).toString();
                }
                else {
                    var stringValue = [];
                }
                var array = [];
                var stringFull = "", CR, crPT = "";
                // Collect String
                for (var i = 0; i < stringValue.length; i++) {
                    array.push(stringValue.charAt(i));
                }
                var string = array.splice(1, 8);
                var ratio = string.splice(0, 5);
                // convert array to string
                for (var k = 0; k < ratio.length; k++) {
                    stringFull += ratio[k];
                    var double = parseFloat(stringFull);
                }
                crPT = (((double) * 1000) / 110).toString();
                this.attr.loc_ta0voltageratio = this.attr.loc_ta0currentratio = (double * 1000) + "/110 A";
                this.attr.ta0voltageratio = this.attr.ta0currentratio = crPT;
            }
            // Class
            if (this.attr.ta0registers[0].hasOwnProperty("ta0windingclass") && this.attr.ta0registers[1].hasOwnProperty("ta0windingclass")) {
                this.attr.ta0class = this.attr.ta0registers[0].ta0windingclass;
            }
            // Winding Group Checking
            var loc_windingGroup = null;
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registers) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registers.length !== 0) {
                loc_windingGroup = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registers[0].ta0windinggroup;
                this.attr.loc_windingGroup = loc_windingGroup;
            }
            // Checking PT is avilable or not
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex]) !== 'undefined') {
                // Reset to default empty
                this.deviceStatusPtValue = [];
                // Checking if empty object 'ta0systemstatus' (PT)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus !== null) {
                    this.systemStatusPtValue = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus;
                    if (this.systemStatusCtValue === 'ZREM') {
                        this.showRemovalPtStatus = true;
                    }
                }
                // Checking if empty object 'ta0devicestatus' (PT)
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus) !== 'undefined' && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus !== null) {
                    for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus.length; i++) {
                        this.deviceStatusPtValue.push(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus[i].ta0status);
                    }
                    // Display Value
                    this.showRemovalPtStatus = true;
                }
                this.ptExisting = true;
            }
            else {
                this.ptExisting = false;
            }
        }
        //IEE alert
        console.log("asset number : " + this.attr.assetnum);
        var ieeFlag = this.gv.ieeMap.get(this.attr.assetnum);
        console.log("ta0existingdevice : " + this.attr.ta0existingdevice);
        console.log("ta0billingind : " + this.item.json.ta0billingind);
        console.log("ieeFlag : " + ieeFlag);
        if (this.item.json.ta0billingind === 'I' && this.attr.ta0existingdevice === true && (ieeFlag === false || ieeFlag === undefined)) {
            this.gf.warningAlert("Warning", "Please click on ODR button for interval billing", "Close");
        }
    }
    /**
     * Getting Device Status from response
     */
    RegisterDetailsPage.prototype.getDeviceStatusPMR = function () {
        var _this = this;
        var reerror = 0;
        var aderror = 0;
        var error = 0;
        var errorMsg = "";
        // Loader Start 
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent,
        });
        loading.present();
        this.gf.loadingTimer(loading);
        // Get data from the service call...
        this.dataService
            .fetchPMRDeviceDetails(this.attr.ta0serialnum, this.attr.assetnum, "PMR")
            .then(function (result) {
            var respResult = result;
            _this.deviceItem = JSON.parse(respResult.respObject);
            console.log("Getting PMR Device data result --> " + JSON.stringify(_this.deviceItem));
            if (typeof (_this.deviceItem.MESSAGE_TEXT) !== 'undefined') {
                error++;
                errorMsg = _this.deviceItem.MESSAGE_TEXT;
            }
            else {
                errorMsg = 'The process is abort due to missing of some data...';
            }
            // retrieve the data and stored into an array...
            if (respResult.processStatus === 'success') {
                if (typeof (_this.deviceItem) !== 'undefined') {
                    if (typeof (_this.deviceItem.TA0REGISTERS) !== 'undefined') {
                        for (var i = 0; i < _this.deviceItem.TA0REGISTERS.length; i++) {
                            if (typeof (_this.deviceItem.TA0REGISTERS[i].ta0meterreading) !== 'undefined' && _this.deviceItem.TA0REGISTERS[i].ta0meterreading !== null) {
                                if (typeof (_this.deviceItem.TA0REGISTERS[i].ta0meterreading.ta0reading) !== 'undefined' && _this.deviceItem.TA0REGISTERS[i].ta0meterreading.ta0reading !== null) {
                                    _this.devicestatus[i] = _this.deviceItem.TA0REGISTERS[i].ta0meterreading.ta0reading;
                                }
                                else {
                                    reerror++;
                                }
                            }
                            else {
                                reerror++;
                            }
                        }
                    }
                    else {
                        reerror++;
                    }
                }
                else {
                    reerror++;
                }
                // Assign the stored array into proposed reading...
                if (_this.devicestatus.length > 0) {
                    if (typeof (_this.attr.ta0registers) !== 'undefined') {
                        for (var i = 0; i < _this.attr.ta0registers.length; i++) {
                            if (typeof (_this.attr.ta0registers[i].ta0meterreading) !== 'undefined' && _this.attr.ta0registers[i].ta0meterreading !== null) {
                                for (var j = 0; j < _this.attr.ta0registers[i].ta0meterreading.length; j++) {
                                    if (_this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "PMR") {
                                        _this.attr.ta0registers[i].ta0meterreading[j].ta0reading = _this.devicestatus[i];
                                    }
                                }
                            }
                            else {
                                aderror++;
                            }
                        }
                    }
                    else {
                        aderror++;
                    }
                }
                else {
                    aderror++;
                }
            }
            else {
                error++;
            }
            loading.dismiss();
            if (reerror > 0 || aderror > 0 || error > 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'REMINDER',
                    subTitle: errorMsg,
                    buttons: ['Close']
                });
                alert_1.present();
            }
        });
    };
    RegisterDetailsPage.prototype.getAMRCheckingCondition = function () {
        if (typeof (this.item.json.ta0feeder[this.fIndex]) !== 'undefined') {
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) != 'undefined') {
                this.deviceStatus = new __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__["a" /* UserStatus */]();
                this.meterRead = new __WEBPACK_IMPORTED_MODULE_9__pojo_MeterReading__["a" /* MeterReading */]();
                this.attr = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
                var registerDetails = this.attr.ta0reading;
                console.log('Else Item: ' + JSON.stringify(this.multiAssetLocci));
                if (this.attr.ta0registers != undefined) {
                    // Sorting Register
                    this.attr.ta0registers.sort(this.gf.dynamicSort("ta0registertype"));
                    var i = 0;
                    for (var _i = 0, _a = this.attr.ta0registers; _i < _a.length; _i++) {
                        var register = _a[_i];
                        if (typeof (this.attr.ta0mf) != 'undefined' || this.attr.ta0mf > 0) {
                            register.loc_reg_totalFactor = this.attr.ta0mf * register.ta0registerfactor;
                        }
                        else {
                            register.loc_reg_totalFactor = 0;
                        }
                        var checkExistingAmr = false;
                        if (typeof (register.ta0meterreading) != 'undefined' && register.ta0meterreading !== null && register.ta0meterreading !== "") {
                            for (var _b = 0, _c = register.ta0meterreading; _b < _c.length; _b++) {
                                var meterReading_1 = _c[_b];
                                if (meterReading_1.ta0readingtype === 'AMR') {
                                    checkExistingAmr = true;
                                    if (this.item.json.worktype === 'ZMMR') {
                                        this.checkForMrtypeAndMrCode(meterReading_1);
                                    }
                                    break;
                                }
                            }
                            if (!checkExistingAmr) {
                                var meterReading = new __WEBPACK_IMPORTED_MODULE_9__pojo_MeterReading__["a" /* MeterReading */]();
                                //this.attr.ta0register.ta0meterreading = [];
                                meterReading.ta0readingtype = 'AMR';
                                if (typeof (register.ta0meterreading) != 'undefined' && register.ta0meterreading !== null && register.ta0meterreading !== "") {
                                    //register.ta0meterreading.push(meterReading);
                                    if (this.item.json.worktype === 'ZMMR') {
                                        this.checkForMrtypeAndMrCode(meterReading);
                                    }
                                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
                                }
                                else {
                                    register.ta0meterreading = [];
                                    //register.ta0meterreading.push(meterReading);
                                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
                                }
                            }
                        }
                        else {
                            var meterReading = new __WEBPACK_IMPORTED_MODULE_9__pojo_MeterReading__["a" /* MeterReading */]();
                            //this.attr.ta0register.ta0meterreading = [];
                            meterReading.ta0readingtype = 'AMR';
                            if (typeof (register.ta0meterreading) != 'undefined' && register.ta0meterreading !== null && register.ta0meterreading !== "") {
                                //register.ta0meterreading.push(meterReading);
                                if (this.item.json.worktype === 'ZMMR') {
                                    this.checkForMrtypeAndMrCode(meterReading);
                                }
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
                            }
                            else {
                                register.ta0meterreading = [];
                                //register.ta0meterreading.push(meterReading);
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.push(meterReading);
                            }
                        }
                        //this.item.json.ta0feeder[this.fIndex].multiAssetLocci[this.maIndex].ta0registers[i].ta0meterreading = register.ta0meterreading;
                        i++;
                        //register.sort(this.gf.dynamicSort("ta0registertype"));
                    }
                }
            }
        }
    };
    RegisterDetailsPage.prototype.goToRegisterMrType = function (event) {
        if (event === '03') {
            this.mrNoteDisable = false;
        }
        else {
            this.mrnote = null;
            this.mrNoteDisable = true;
        }
        this.contTest = 1;
        this.getAMRCheckingCondition();
    };
    RegisterDetailsPage.prototype.goToRegisterMrNode = function () {
        this.contTest = 1;
        this.getAMRCheckingCondition();
    };
    RegisterDetailsPage.prototype.checkForMrtypeAndMrCode = function (meterReading) {
        if (typeof (this.item.json.ta0sntype) !== 'undefined' && this.item.json.ta0sntype !== null && this.item.json.ta0sntype !== "") {
            var checksncode = this.item.json.ta0sntype;
            if (checksncode === "C2" || checksncode === "C5") {
                this.mrtype = '01';
                this.mrtypeDisable = true;
                meterReading.ta0mrtype = '01';
                meterReading.ta0mrnote = '';
                this.mrnote = '';
            }
            else {
                this.mrtypeDisable = false;
                this.mrNoteDisable = false;
                if (this.contTest == 0) {
                    this.mrtype = meterReading.ta0mrtype;
                    this.mrnote = meterReading.ta0mrnote;
                }
                else {
                    if (this.mrtype === '03') {
                        meterReading.ta0mrtype = this.mrtype;
                        meterReading.ta0mrnote = this.mrnote;
                    }
                    else {
                        this.mrtype = '01';
                        meterReading.ta0mrtype = '01';
                        meterReading.ta0mrnote = '';
                        this.mrnote = '';
                    }
                }
            }
        }
    };
    RegisterDetailsPage.prototype.checkingSystemStatus = function (value, devicetype) {
        if (devicetype === 'meter') {
            if (value === 'ZREM') {
                this.showRemovalMeterStatus = true;
            }
            else {
                this.showRemovalMeterStatus = false;
                this.deviceStatusMeterValue = [];
            }
        }
        if (devicetype === 'modem') {
            if (value === 'ZREM') {
                this.showRemovalModemStatus = true;
            }
            else {
                this.showRemovalModemStatus = false;
                this.deviceStatusModemValue = [];
            }
        }
        if (devicetype === 'simcard') {
            if (value === 'ZREM') {
                this.showRemovalSimcardStatus = true;
            }
            else {
                this.showRemovalSimcardStatus = false;
                this.deviceStatusSimcardValue = [];
            }
        }
        if (devicetype === 'ct') {
            if (value === 'ZREM') {
                this.showRemovalCtStatus = true;
            }
            else {
                this.showRemovalCtStatus = false;
                this.deviceStatusCtValue = [];
            }
        }
        if (devicetype === 'pt') {
            if (value === 'ZREM') {
                this.showRemovalPtStatus = true;
            }
            else {
                this.showRemovalPtStatus = false;
                this.deviceStatusPtValue = [];
            }
        }
    };
    RegisterDetailsPage.prototype.lookup = function () {
        var _this = this;
        var queryPart = null;
        if (this.item.json.ta0installationvoltage === "03") {
            queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "0");
        }
        else {
            queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "1");
        }
        this.jsonStoreCrud
            .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup, queryPart)
            .then(function (result) {
            _this.windingGroupList = result;
            //console.log("items records :: " + JSON.stringify(this.windingGroupList));
        });
        if (this.item.json.ta0installationvoltage !== "03") {
            queryPart = WL.JSONStore.QueryPart().equal("ta0transformertype", "2");
            this.jsonStoreCrud
                .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].WindingGroup, queryPart)
                .then(function (result) {
                _this.windingGroupPtList = result;
                //console.log("items records :: " + JSON.stringify(this.windingGroupPtList));
            });
        }
    };
    /**
     * ZMMR usage calculation.
     * @param meterObj
     * @param ta0meterreading
     * @param ta0usage
     */
    RegisterDetailsPage.prototype.calculateUsage = function (meterObj, ta0meterreading, ta0usage) {
        var usageRead = 0;
        for (var _i = 0, _a = meterObj.ta0meterreading; _i < _a.length; _i++) {
            var meterReading = _a[_i];
            if (meterReading.ta0readingtype === 'PMR') {
                usageRead = ta0meterreading - parseInt(meterReading.ta0reading);
                break;
            }
        }
        for (var _b = 0, _c = meterObj.ta0meterreading; _b < _c.length; _b++) {
            var meterReading = _c[_b];
            if (meterReading.ta0readingtype === 'AMR') {
                meterReading.ta0mrnote = this.mrnote;
                meterReading.ta0mrtype = this.mrtype;
                if (usageRead > 0) {
                    meterReading.ta0usage = usageRead;
                }
                else {
                    meterReading.ta0usage = 0;
                }
                break;
            }
        }
    };
    RegisterDetailsPage.prototype.ptCon = function (value) {
        console.log("ptCon..." + value);
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ptcontype = '';
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ptcontype = value;
    };
    RegisterDetailsPage.prototype.ctCon = function (value) {
        console.log("ctCon..." + value);
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ctcontype = '';
        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0ctcontype = value;
    };
    RegisterDetailsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    RegisterDetailsPage.prototype.displayMessageToast = function (msg) {
        this.presentToast("Required field should not be empty. " + msg);
    };
    /**
     * edited by Ameer 13/11/2018 | Alif 15/05/2019
     * Add validation for SO type ZISR
     */
    RegisterDetailsPage.prototype.validateInput = function () {
        this.check = true;
        if ((this.itemOri.json.worktype === 'ZIST' || this.itemOri.json.worktype === 'ZRMV' || this.itemOri.json.worktype === 'ZSRO' || this.itemOri.json.worktype === 'ZRPM' || this.itemOri.json.worktype === 'ZUDN' || this.itemOri.json.worktype === 'ZRPC')) {
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex] !== 'undefined') {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
                    // Adding checking if ta0register group is null or undefined..
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers !== null) {
                        for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
                            for (var j = 0; j < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.length; j++) {
                                if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === undefined ||
                                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === "" ||
                                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === null) &&
                                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0readingtype === 'AMR') {
                                    this.check = false;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        // ZINL & (ZINR - remove because no changing meter reading) by alif (21.12.2018)
        if (this.itemOri.json.worktype === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
            if (this.attr.ta0wrgmtrind === false) {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex] !== 'undefined') {
                    // Existing meter main or check for ZINL skip to checking.
                    // Edited : 22-02-2019 (Alif) - Adding condition ta0replaceind user need key in last meter reading.
                    if ((this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN
                        && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0replaceind === false) ||
                        (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK
                            && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0replaceind === false)) {
                        // Skip checking meter reading.
                        this.check = true;
                    }
                    else {
                        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
                            for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
                                for (var j = 0; j < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.length; j++) {
                                    if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === undefined ||
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === "" ||
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === null) &&
                                        this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0readingtype === 'AMR') {
                                        this.check = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        /**
         * Created by Ameer 13/11/2018
         * Checking for SO ZISR & ZRCE
         * Edited by Ameer 3/12/2018 - Hide validation for so ZRCE
         */
        if (this.itemOri.json.worktype === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex] !== 'undefined') {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
                    for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
                        for (var j = 0; j < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading.length; j++) {
                            if ((this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === undefined ||
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === "" ||
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0reading === null) &&
                                this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i].ta0meterreading[j].ta0readingtype === 'AMR') {
                                this.check = false;
                                break;
                            }
                        }
                    }
                }
            }
        }
        //ZMMR
        if ((this.itemOri.json.worktype === 'ZMMR')) {
            if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers) !== "undefined" && this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers !== null) {
                for (var i = 0; i < this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers.length; i++) {
                    if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === 'METER_EQUIP' || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0bcrmuploadindicator === 'CM_EQUIP') {
                        var registerlength = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registers[i];
                        for (var j = 0; j < registerlength.ta0meterreading.length; j++) {
                            var meterReadingLength = registerlength.ta0meterreading[j];
                            if (meterReadingLength.ta0readingtype === 'AMR' && (meterReadingLength.ta0reading === undefined || meterReadingLength.ta0reading === "" || meterReadingLength.ta0reading === null)) {
                                this.check = false;
                            }
                            else if (meterReadingLength.ta0readingtype === '' || typeof (meterReadingLength.ta0readingtype) == 'undefined') {
                                this.check = false;
                            }
                        }
                    }
                }
            }
            //ZMMR Validation for mrnote...
            if (typeof (this.mrtype) === 'undefined' || this.mrtype === '' || this.mrtype === null) {
                this.check = false;
                this.validateMrType = true;
            }
            else if (this.itemOri.json.worktype === this.soTypes.ZMMR && this.mrtype === '03') {
                if (typeof (this.mrnote) === 'undefined' || this.mrnote === '' || this.mrnote === null) {
                    this.check = false;
                    this.validateMrNote = true;
                }
            }
        }
    };
    RegisterDetailsPage.prototype.validateInputUserStatus = function () {
        // Remove for ZINL checking device status.
        // if (this.itemOri.json.worktype !== 'ZINL') {
        this.check = true;
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0replaceind === true) {
            if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MEASUREMENT_TRANSFEORMER &&
                (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CTTFR ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CTDIR)) {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0replaceind === true) {
                    if (this.systemStatusCtValue === undefined || this.systemStatusCtValue === "D" || this.systemStatusCtValue === 'ZREM' && this.deviceStatusCtValue.length == 0) {
                        this.check = false;
                    }
                }
            }
            else if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MEASUREMENT_TRANSFEORMER &&
                (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PTTFR ||
                    this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0functionclass === __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].VTDIR)) {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0replaceind === true) {
                    if (this.systemStatusPtValue === undefined || this.systemStatusPtValue === "D" || this.systemStatusPtValue === 'ZREM' && this.deviceStatusPtValue.length == 0) {
                        this.check = false;
                    }
                }
            }
            else if (this.systemStatusMeterValue === undefined || this.systemStatusMeterValue === "D" || this.systemStatusMeterValue === 'ZREM' && this.deviceStatusMeterValue.length == 0) {
                this.check = false;
            }
        }
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype !== __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MEASUREMENT_TRANSFEORMER) {
            if (typeof (this.modemIndex) !== 'undefined' && this.modemIndex !== '') {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0replaceind === true) {
                    if (this.systemStatusModemValue === undefined || this.systemStatusModemValue === "D" || (this.systemStatusModemValue === 'ZREM' && this.deviceStatusModemValue.length == 0)) {
                        this.check = false;
                    }
                }
            }
            if (typeof (this.simcardIndex) !== 'undefined' && this.simcardIndex !== '') {
                if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0removeind === true || this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0replaceind === true) {
                    if (this.systemStatusSimcardValue === undefined || this.systemStatusSimcardValue === "D" || this.systemStatusSimcardValue === 'ZREM' && this.deviceStatusSimcardValue.length == 0) {
                        this.check = false;
                    }
                }
            }
        }
        // }
    };
    RegisterDetailsPage.prototype.saveRegisterDetails = function () {
        var _this = this;
        this.validateInput();
        if (this.check === true) {
            /**
             * Assigning value AMR using PMR
             * Created  : Alif
             * Date     : 27/12/2018
             * Edited   : 28/01/2019
             */
            if (this.worktype === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL && this.item.json.ta0installationvoltage > 3 && (this.attr.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN || this.attr.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK)) {
                var meterReading = [];
                var data = {};
                /**
                 * Reason   : Allow user to key in last meter reading if meter is replace.
                 * Created  : 22-01-2019
                 */
                if (this.worktype === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL && this.showContainer && this.attr.ta0replaceind !== true) {
                    if (typeof (this.attr.ta0registers) !== 'undefined' && this.attr.ta0registers !== null) {
                        // Getting meter reading from PMR
                        for (var i = 0; i < this.attr.ta0registers.length; i++) {
                            if (typeof (this.attr.ta0registers[i].ta0meterreading) !== 'undefined') {
                                for (var j = 0; j < this.attr.ta0registers[i].ta0meterreading.length; j++) {
                                    if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "PMR") {
                                        // Remove to assign value direct is got value to AMR.
                                        // meterReading.push(data);
                                        for (var k = 0; k < this.attr.ta0registers[i].ta0meterreading.length; k++) {
                                            if (this.attr.ta0registers[i].ta0meterreading[k].ta0readingtype === "AMR") {
                                                this.attr.ta0registers[i].ta0meterreading[k].ta0reading = this.attr.ta0registers[i].ta0meterreading[j].ta0reading;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var loading_1 = this.loadingCtrl.create({
                content: "Loading..."
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            this.itemOri.json.ta0feeder[this.fIndex] = this.item.json.ta0feeder[this.fIndex];
            this.validateInputUserStatus();
            if (this.check === true) {
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
                    // validation status flag for change color indicator in serve execution page.
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registerstatus = 'Y';
                    if (typeof (this.systemStatusMeterValue) !== 'undefined') {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0systemstatus = this.systemStatusMeterValue;
                    }
                    // Saving Device Status (Meter)
                    if (typeof (this.deviceStatusMeterValue) !== 'undefined') {
                        // Setting default
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus = [];
                        this.deviceStatusMeterArray = {};
                        for (var i = 0; i < this.deviceStatusMeterValue.length; i++) {
                            this.deviceStatusMeterArray = new __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__["a" /* UserStatus */]();
                            this.deviceStatusMeterArray.ta0status = this.deviceStatusMeterValue[i];
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0devicestatus.push(this.deviceStatusMeterArray);
                        }
                    }
                }
                else {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]) !== 'undefined') {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0registerstatus = 'Y';
                    }
                }
                // Checking Modem is available or not
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]) !== 'undefined') {
                    // validation status flag for change color indicator in serve execution page.
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
                    // Saving System Status (Modem)
                    if (typeof (this.systemStatusModemValue) !== 'undefined') {
                        // Saving into original data
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0systemstatus = this.systemStatusModemValue;
                    }
                    // Saving Device Status (Modem)
                    if (typeof (this.deviceStatusModemValue) !== 'undefined') {
                        // Setting default
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus = [];
                        this.deviceStatusModemArray = {};
                        for (var i = 0; i < this.deviceStatusModemValue.length; i++) {
                            this.deviceStatusModemArray = new __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__["a" /* UserStatus */]();
                            this.deviceStatusModemArray.ta0status = this.deviceStatusModemValue[i];
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0devicestatus.push(this.deviceStatusModemArray);
                        }
                    }
                }
                else {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]) !== 'undefined') {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
                    }
                }
                // Checking Simcard is available or not
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]) !== 'undefined') {
                    // validation status flag for change color indicator in serve execution page.
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
                    // Saving System Status (Simcard)
                    if (typeof (this.systemStatusSimcardValue) !== 'undefined') {
                        // Saving into original data
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0systemstatus = this.systemStatusSimcardValue;
                    }
                    // Saving Device Status (Simcard)
                    if (typeof (this.deviceStatusSimcardValue) !== 'undefined') {
                        // Setting default
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus = [];
                        this.deviceStatusSimcardArray = {};
                        for (var i = 0; i < this.deviceStatusSimcardValue.length; i++) {
                            this.deviceStatusSimcardArray = new __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__["a" /* UserStatus */]();
                            this.deviceStatusSimcardArray.ta0status = this.deviceStatusSimcardValue[i];
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0devicestatus.push(this.deviceStatusSimcardArray);
                        }
                    }
                }
                else {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]) !== 'undefined') {
                        // validation status flag for change color indicator in serve execution page.
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
                    }
                }
                // Checking CT is available or not
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex]) !== 'undefined') {
                    // validation status flag for change color indicator in serve execution page.
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registerstatus = 'Y';
                    // Saving System STatus (CT)
                    if (typeof (this.systemStatusCtValue) !== 'undefined') {
                        // Saving into original data
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0systemstatus = this.systemStatusCtValue;
                    }
                    // Saving Device Status (CT)
                    if (typeof (this.deviceStatusCtValue) !== 'undefined') {
                        // Setting default
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus = [];
                        this.deviceStatusCtArray = {};
                        for (var i = 0; i < this.deviceStatusCtValue.length; i++) {
                            this.deviceStatusCtArray = new __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__["a" /* UserStatus */]();
                            this.deviceStatusCtArray.ta0status = this.deviceStatusCtValue[i];
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0devicestatus.push(this.deviceStatusCtArray);
                        }
                    }
                }
                else {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex]) !== 'undefined') {
                        // validation status flag for change color indicator in serve execution page.
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ctIndex].ta0registerstatus = 'Y';
                    }
                }
                // Checking PT is available or not
                if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex]) !== 'undefined') {
                    // validation status flag for change color indicator in serve execution page.
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registerstatus = 'Y';
                    // Saving System Status (PT)
                    if (typeof (this.systemStatusPtValue) !== 'undefined') {
                        // Saving into original data
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0systemstatus = this.systemStatusPtValue;
                    }
                    // Saving Device Status (PT)
                    if (typeof (this.deviceStatusPtValue) !== 'undefined') {
                        // Setting default
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus = [];
                        this.deviceStatusPtArray = {};
                        for (var i = 0; i < this.deviceStatusPtValue.length; i++) {
                            this.deviceStatusPtArray = new __WEBPACK_IMPORTED_MODULE_11__pojo_lookup_UserStatus__["a" /* UserStatus */]();
                            this.deviceStatusPtArray.ta0status = this.deviceStatusPtValue[i];
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0devicestatus.push(this.deviceStatusPtArray);
                        }
                    }
                }
                else {
                    if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex]) !== 'undefined') {
                        // validation status flag for change color indicator in serve execution page.
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.ptIndex].ta0registerstatus = 'Y';
                    }
                }
                if (this.itemOri.json != null) {
                    if (this.modemIndex != null) {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0simcardip = this.ta0simcardip;
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
                    }
                    if (this.simcardIndex != null) {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0simcardip = this.ta0simcardip;
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
                    }
                }
                else {
                    if (this.modemIndex != null) {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].ta0registerstatus = 'Y';
                    }
                    if (this.simcardIndex != null) {
                        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].ta0registerstatus = 'Y';
                    }
                }
                setTimeout(function () {
                    loading_1.onWillDismiss(function () {
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0registers_haveChange = true;
                        _this.jsonStoreCrud.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        loading_1.dismiss();
                    });
                }, 10000);
                /**
                 * Reason   : Saving to local storage (json data).
                 * Created  : 22-01-2019
                 */
                this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
                if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
                    this.jsonStoreCrud.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.gf.displayToast("Register Info updated locally.");
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                    loading_1.dismiss();
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
                            var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                            var itemVal = JSON.parse(JSON.stringify(_this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex]));
                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0registers_haveChange = true;
                            var itemArray = [];
                            delete itemVal['ta0sealdetail'];
                            delete itemVal['ta0stickerdetail'];
                            delete itemVal['ta0testdetail'];
                            itemArray.push(itemVal);
                            if (_this.attr.ta0functionclass === _this.functClass.NMTR || _this.attr.ta0functionclass === _this.functClass.RMTR || _this.attr.ta0functionclass === _this.functClass.SMTR || _this.attr.ta0functionclass === _this.functClass.SMTR_CM) {
                                if (typeof (_this.modemIndex) !== 'undefined' && _this.modemIndex != null && _this.modemIndex !== '') {
                                    var itemValModem = JSON.parse(JSON.stringify(_this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modemIndex]));
                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.modemIndex].loc_ta0registers_haveChange = true;
                                    var itemArrayModem = [];
                                    delete itemValModem['ta0sealdetail'];
                                    delete itemValModem['ta0stickerdetail'];
                                    delete itemValModem['ta0testdetail'];
                                    itemArrayModem.push(itemValModem);
                                    itemArray.push(itemValModem);
                                }
                                if (typeof (_this.simcardIndex) !== 'undefined' && _this.simcardIndex != null && _this.simcardIndex !== '') {
                                    var itemValSimcard = JSON.parse(JSON.stringify(_this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.simcardIndex]));
                                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.simcardIndex].loc_ta0registers_haveChange = true;
                                    var itemArraySimcard = [];
                                    delete itemValSimcard['ta0sealdetail'];
                                    delete itemValSimcard['ta0stickerdetail'];
                                    delete itemValSimcard['ta0testdetail'];
                                    itemArraySimcard.push(itemValSimcard);
                                    itemArray.push(itemValSimcard);
                                }
                            }
                            _this.dataService
                                .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_REGISTERS, feederCode, _this.itemOri.json.worktype)
                                .then(function (results) {
                                _this.jsonStoreCrud.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0registers_haveChange = false;
                                _this.gf.warningAlert('Success', 'Register Details save successfully.', 'Close');
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                _this.navCtrl.pop();
                                loading_1.dismiss();
                            })
                                .catch(function (error) {
                                console.log('service failure : ' + error);
                                loading_1.dismiss();
                            });
                        }
                        else {
                            _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0registers_haveChange = true;
                            _this.jsonStoreCrud.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                            _this.gf.displayToast("Register Info updated locally.");
                            _this.gf.warningAlert('Success', 'Register Info updated locally.', 'Close');
                            loading_1.dismiss();
                        }
                    });
                }
                else {
                    var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                    var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
                    this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0registers_haveChange = true;
                    var itemArray = [];
                    delete itemVal['ta0sealdetail'];
                    delete itemVal['ta0stickerdetail'];
                    delete itemVal['ta0testdetail'];
                    itemArray.push(itemVal);
                    if (this.attr.ta0functionclass === this.functClass.NMTR || this.attr.ta0functionclass === this.functClass.RMTR || this.attr.ta0functionclass === this.functClass.SMTR || this.attr.ta0functionclass === this.functClass.SMTR_CM) {
                        if (typeof (this.modemIndex) !== 'undefined' && this.modemIndex != null && this.modemIndex !== '') {
                            var itemValModem = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex]));
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.modemIndex].loc_ta0registers_haveChange = true;
                            var itemArrayModem = [];
                            delete itemValModem['ta0sealdetail'];
                            delete itemValModem['ta0stickerdetail'];
                            delete itemValModem['ta0testdetail'];
                            itemArrayModem.push(itemValModem);
                            itemArray.push(itemValModem);
                        }
                        if (typeof (this.simcardIndex) !== 'undefined' && this.simcardIndex != null && this.simcardIndex !== '') {
                            var itemValSimcard = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex]));
                            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simcardIndex].loc_ta0registers_haveChange = true;
                            var itemArraySimcard = [];
                            delete itemValSimcard['ta0sealdetail'];
                            delete itemValSimcard['ta0stickerdetail'];
                            delete itemValSimcard['ta0testdetail'];
                            itemArraySimcard.push(itemValSimcard);
                            itemArray.push(itemValSimcard);
                        }
                    }
                    this.dataService
                        .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_REGISTERS, feederCode, this.itemOri.json.worktype)
                        .then(function (results) {
                        _this.jsonStoreCrud.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0registers_haveChange = false;
                        _this.gf.warningAlert('Success', 'Register Details save successfully.', 'Close');
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                        loading_1.dismiss();
                    })
                        .catch(function (error) {
                        console.log('service failure : ' + error);
                        loading_1.dismiss();
                    });
                }
            }
            else {
                loading_1.dismiss();
                this.gf.warningAlert('REMINDER', 'Device status or removal status cannot be empty.', 'Close');
            }
        }
        else {
            this.gf.warningAlert('REMINDER', 'Please insert value for the empty fields.', 'Close');
        }
    };
    RegisterDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterDetailsPage');
        this.lookup();
    };
    /*
     * condition check for zinl and zinr for pmr validation...
     * Author Shandeep Kumar
    */
    RegisterDetailsPage.prototype.onHideShowRegister = function (event) {
        var _this = this;
        var counter = 0;
        if (event === "true" || event === true) {
            this.ta0wrgmtrind = 'false';
            this.attr.ta0wrgmtrind = false;
            // Set New Value
            for (var i = 0; i < this.attr.ta0registers.length; i++) {
                var pmr = "";
                var amr = 0;
                for (var j = 0; j < this.attr.ta0registers[i].ta0meterreading.length; j++) {
                    if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "PMR") {
                        pmr = this.attr.ta0registers[i].ta0meterreading[j].ta0reading;
                    }
                    if (this.attr.ta0registers[i].ta0meterreading[j].ta0readingtype === "AMR") {
                        amr = j;
                    }
                }
                if (pmr !== null && typeof (pmr) !== 'undefined' && pmr !== "") {
                    this.attr.ta0registers[i].ta0meterreading[amr].ta0reading = pmr;
                    this.ta0wrgmtrind = 'true';
                    this.attr.ta0wrgmtrind = true;
                    this.hideShowRegister = false;
                }
                else {
                    counter++;
                }
            }
        }
        else {
            this.ta0wrgmtrind = 'false';
            this.attr.ta0wrgmtrind = false;
            this.hideShowRegister = true;
        }
        if (counter > 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Warning',
                subTitle: 'There will be not having enough data, kindly get update device status',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'Dismiss',
                        handler: function () {
                            _this.ta0wrgmtrind = 'false';
                            _this.attr.ta0wrgmtrind = false;
                        }
                    }
                ]
            });
            alert_2.present();
            this.hideShowRegister = true;
        }
    };
    RegisterDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterDetailsPage.prototype.checkUserInputIp = function (dataEvent) {
        var RegExpsptChamberArray = /^[0-9,.]*$/;
        var newValuesptChamberArray = dataEvent.target.value;
        var newVal2;
        var regExpsptChamberArray = new RegExp(RegExpsptChamberArray);
        if (!regExpsptChamberArray.test(newValuesptChamberArray)) {
            newVal2 = newValuesptChamberArray.substr(0, newValuesptChamberArray.length - 1);
            dataEvent.target.value = newVal2;
        }
        else {
            dataEvent.target.value;
        }
        this.ta0simcardip = dataEvent.target.value;
    };
    RegisterDetailsPage.prototype.checkUserInputNewReading = function (dataEvent, calculateUsageReading, mRead, dialAfter, dailBefore) {
        var reStoreValue = '';
        var afterDec = [];
        var gotValue = dataEvent.target.value;
        var regExpNewRead = new RegExp("^[0-9.]+$");
        for (var i = 0; i < gotValue.length; i++) {
            if (regExpNewRead.test(gotValue[i])) {
                reStoreValue += gotValue[i];
            }
        }
        if (reStoreValue.includes(".")) {
            afterDec = reStoreValue.split(".");
            if (dialAfter !== 0) {
                for (var j = 1; j < afterDec.length; j++) {
                    if (afterDec[j] !== "") {
                        if (afterDec[j].length < dialAfter) {
                            mRead.ta0reading = afterDec[0] + "." + afterDec[j];
                        }
                        else {
                            mRead.ta0reading = afterDec[0] + "." + afterDec[j].substr(0, dialAfter);
                        }
                        break;
                    }
                    else {
                        mRead.ta0reading = afterDec[0] + ".";
                        break;
                    }
                }
            }
            else {
                mRead.ta0reading = afterDec[0];
            }
        }
        else {
            if (reStoreValue.length < dailBefore) {
                mRead.ta0reading = reStoreValue;
            }
            else {
                mRead.ta0reading = reStoreValue.substr(0, dailBefore);
            }
        }
    };
    /**
     * Hide/Show Informations Section
     * Created    : Alif
     * Date       : 15-11-2018
     * Edited     : Ameer (16/11/2018)
     */
    RegisterDetailsPage.prototype.showInformationSection = function (index) {
        index++;
        if (this.showInformation === false) {
            this.showInformation = true;
        }
        else if (index === 2) {
            this.showInformation = false;
        }
    };
    /**
    * Hide/Show Informations Section
    * Created    : Alif
    * Date       : 15-11-2018
    * Edited     : Alif (16/11/2018)
    */
    RegisterDetailsPage.prototype.showActionSection = function (index) {
        index++;
        if (this.showAction === false) {
            this.showAction = true;
        }
        else if (index === 2) {
            this.showAction = false;
        }
    };
    /**
    * Hide/Show Informations Section
    * Created    : Alif
    * Date       : 15-11-2018
    * Edited     : Ameer (16/11/2018)
    */
    RegisterDetailsPage.prototype.showRegisterSection = function (index) {
        index++;
        if (this.showRegister === false) {
            this.showRegister = true;
        }
        else if (index === 2) {
            this.showRegister = false;
        }
    };
    /**
     * Description  : Trigger IEE Status
     * Created      : 27-7-2022
     * Author       : Andy
     */
    RegisterDetailsPage.prototype.getIEEStatus = function () {
        var _this = this;
        console.log("wonum : " + this.itemOri.json.wonum);
        console.log("site id : " + this.itemOri.json.siteid);
        console.log("asset number : " + this.attr.assetnum);
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.dataService.IEEStatus(this.itemOri.json.wonum, this.itemOri.json.siteid, this.attr.assetnum).then(function (results) {
            var respResult = results;
            console.log("data : " + JSON.stringify(respResult));
            console.log("failed : " + respResult.failed);
            _this.gv.ieeMap.set(_this.attr.assetnum, true);
            if (respResult.failed === true) {
                if (respResult.Error === undefined) {
                    _this.gf.warningAlert('Failure', respResult.message, 'Close');
                }
                else {
                    _this.gf.warningAlert('Failure', respResult.Error.message, 'Close');
                }
            }
            else {
                if (respResult.status === 'FAIL') {
                    _this.gf.warningAlert('Failure', respResult.message, 'Close');
                }
                else {
                    _this.gf.warningAlert('Success', respResult.message, 'Close');
                }
            }
            loading.dismiss();
        })
            .catch(function (error) {
            console.log('service failure : ' + JSON.stringify(error));
            loading.dismiss();
        });
    };
    RegisterDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register-details',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/devices/register-details/register-details.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Device Informations</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-item-divider color="light"\n      *ngIf="(attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM)">\n      <ion-row align-items-center  *ngIf="(attr.ta0existingdevice === true)">\n        <ion-col col-12 col-sm-12 col-md-7 (click)="showInformationSection(1)" class="pointer" style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="information-circle"></ion-icon>&nbsp; <strong>METER INFORMATIONS</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n          <div *ngIf="item.json.ta0billingind == \'I\'">\n            <button ion-button round style="float: right;width: 100%;" (click)="getIEEStatus()" [disabled]="(gv.testMobile) ? true : false">ODR</button>\n          </div>\n        </ion-col> \n        <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n          <button ion-button round style="float: right;width: 100%;" (click)="getDeviceStatusPMR()" [disabled]="(gv.testMobile || item.json.worktype === soTypes.ZMMR ) ? true : false">Get Reading</button>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;text-align: right;" (click)="showInformationSection(1)" class="pointer">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showInformation"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showInformation"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center  *ngIf="(attr.ta0existingdevice === false)">\n        <ion-col col-12 col-sm-12 col-md-9 (click)="showInformationSection(1)" class="pointer" style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="information-circle"></ion-icon>&nbsp; <strong>METER INFORMATIONS</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n          <button ion-button round style="float: right;" (click)="getDeviceStatusPMR()" [disabled]="(gv.testMobile || item.json.worktype === soTypes.ZMMR ) ? true : false">Get Reading</button>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-1 style="word-wrap:  break-all; padding-left: 5px;text-align: right;" (click)="showInformationSection(1)" class="pointer">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showInformation"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showInformation"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-item-divider color="light" (click)="showInformationSection(1)" class="pointer"\n      *ngIf="attr.ta0functionclass === functClass.CTTFR || attr.ta0functionclass === functClass.CTDIR || attr.ta0functionclass === functClass.PTTFR || attr.ta0functionclass === functClass.VTDIR">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="information-circle"></ion-icon>&nbsp; <strong>TRANSFORMER INFORMATIONS</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showInformation"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showInformation"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div *ngIf="showInformation">\n      <!-- CT Info Screen Start -->\n      <div *ngIf="attr.ta0functionclass === functClass.CTTFR || attr.ta0functionclass === functClass.CTDIR">\n        <ion-grid\n          style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Current Transformer, CT\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <!--  *ngIf="attr.deviceType === \'CT\'" -->\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Serial Number</ion-label>\n                <ion-input [(ngModel)]="attr.ta0serialnum" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Asset Number</ion-label>\n                <ion-input [(ngModel)]="attr.assetnum" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Controlling Device</ion-label>\n                <ion-input type="text" [value]="attr.ta0controllingdevice" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Purpose</ion-label>\n                <ion-input type="text"\n                  *ngIf="attr.ta0functionclass === functClass.CTTFR || attr.ta0functionclass === functClass.CTDIR"\n                  [value]="functClass.CTTFR_DESC" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Brand</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0modelid" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Class</ion-label>\n                <ion-input type="text" readonly="true" text-right value="{{ \n                  attr.ta0class == \'0001\' ? \'0.2\' :\n                  attr.ta0class == \'0002\' ? \'0.5\' :\n                  attr.ta0class == \'0003\' ? \'5\' :\n                  attr.ta0class == \'0004\' ? \'10\' :\n                  attr.ta0class == \'0005\' ? \'5\' :\n                  attr.ta0class == \'0006\' ? \'1\' : \'\'\n               }}"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">VA</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0va" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Current Ratio</ion-label>\n                <!-- Reason: No need to show value saved in maximo (Alif - 23/01/2019) -->\n                <!-- <ion-input [(ngModel)]="attr.ta0currentratio" type="text" readonly="true" text-right></ion-input> -->\n                <ion-input [(ngModel)]="attr.loc_ta0currentratio" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Phase</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0ctptphase" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label style="min-width: 115px;" color="primary">Winding Group</ion-label>\n              <div item-end>\n                <ion-select [(ngModel)]="attr.loc_windingGroup" interface="popover" disabled="true">\n                  <ion-option *ngFor="let key of windingGroupList" value="{{key.json.ta0windinggroup}}"> {{\n                    key.json.ta0windinggroup\n                    }} - {{ key.json.description }} </ion-option>\n                </ion-select>\n              </div>\n            </ion-item>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <!-- CT Info Screen End -->\n\n      <!-- PT Info Screen Start -->\n      <div *ngIf="attr.ta0functionclass === functClass.PTTFR || attr.ta0functionclass === functClass.VTDIR">\n        <ion-grid\n          style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Potential Transformer, PT\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <!--  *ngIf="attr.deviceType === \'PT\'" -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Serial Number</ion-label>\n                <ion-input [(ngModel)]="attr.ta0serialnum" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Asset Number</ion-label>\n                <ion-input [(ngModel)]="attr.assetnum" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n              <!--<ion-item>\n                <ion-label color="primary">Controlling Device</ion-label>\n                <ion-input [(ngModel)]="attr.ta0controllingdevice" type="text" readonly="true" style="text-align-last: right;"></ion-input>\n              </ion-item>-->\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Controlling Device</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0controllingdevice" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Purpose</ion-label>\n                <ion-input type="text"\n                  *ngIf="attr.ta0functionclass === functClass.PTTFR || attr.ta0functionclass === functClass.VTDIR"\n                  [value]="functClass.PTTFR_DESC || functClass.VTTFR_DESC" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Brand</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0modelid" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Class</ion-label>\n                <ion-input type="text" readonly="true" text-right value="{{ \n                    attr.ta0class == \'0001\' ? \'0.2\' :\n                    attr.ta0class == \'0002\' ? \'0.5\' :\n                    attr.ta0class == \'0003\' ? \'5\' :\n                    attr.ta0class == \'0004\' ? \'10\' :\n                    attr.ta0class == \'0005\' ? \'5\' :\n                    attr.ta0class == \'0006\' ? \'1\' : \'\'\n                 }}"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">VA</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0va" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Voltage Ratio</ion-label>\n                <!-- Reason: No need to show value saved in maximo (Alif - 23/01/2019) -->\n                <!-- <ion-input [(ngModel)]="attr.ta0voltageratio" type="text" readonly="true" text-right></ion-input> -->\n                <ion-input [(ngModel)]="attr.loc_ta0voltageratio" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Phase</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0ctptphase" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label style="min-width: 115px;" color="primary">Winding Group</ion-label>\n                <ion-select [(ngModel)]="attr.loc_windingGroup" interface="popover" disabled="true" text-right>\n                  <ion-option *ngFor="let key of windingGroupPtList" value="{{key.json.ta0windinggroup}}"> {{\n                    key.json.ta0windinggroup\n                    }} - {{ key.json.description }} </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <!-- PT Info Screen End -->\n\n      <!-- Meter, Modem & Simcard Info Screen Start -->\n      <div\n        *ngIf="(attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM)">\n        <ion-grid\n          style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <ion-item-divider color="light">\n            <ion-row align-items-center>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Meter, Modem & Simcard\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <!--  *ngIf="attr.deviceType === \'meter\'" -->\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Serial Number</ion-label>\n                <ion-input [(ngModel)]="attr.ta0serialnum" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Asset Number</ion-label>\n                <ion-input [(ngModel)]="attr.assetnum" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n              <!--<ion-item>\n                <ion-label color="primary">Controlling Device</ion-label>\n                <ion-input [(ngModel)]="attr.ta0controllingdevice" type="text" readonly="true" style="text-align-last: right;"></ion-input>\n              </ion-item>-->\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Controlling Device</ion-label>\n                <ion-input [(ngModel)]="attr.ta0controllingdevice" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Purpose</ion-label>\n                <ion-input type="text"\n                  *ngIf="(attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM) && (attr.ta0allocationtype === dCons.DEV_ALLOC_MAIN_METER || attr.ta0allocationtype === dCons.DEV_ALLOC_FEEDER_METER || attr.ta0allocationtype === dCons.DEV_ALLOC_SUB_METER ||  attr.ta0allocationtype === dCons.DEV_ALLOC_SUB_FEEDER_METER)"\n                  value="{{ \n                  attr.ta0allocationtype == \'90\' ? \'Main Meter\' : \n                  attr.ta0allocationtype == \'91\' ? \'Feeder Meter\' : \n                  attr.ta0allocationtype == \'94\' ? \'Sub Meter\' : \n                  attr.ta0allocationtype == \'96\' ? \'Sub Feeder Meter\' : \'Main Meter\'}}" readonly="true" text-right>\n                </ion-input>\n                <ion-input type="text"\n                  *ngIf="(attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM) && (attr.ta0allocationtype === dCons.DEV_ALLOC_CHECK_METER || attr.ta0allocationtype === dCons.DEV_ALLOC_CHECK_FEEDER_METER || attr.ta0allocationtype === dCons.DEV_ALLOC_CHECK_SUB_METER || attr.ta0allocationtype === dCons.DEV_ALLOC_CHECK_SUB_FEEDER_METER)"\n                  value="{{\n                  attr.ta0allocationtype == \'92\' ? \'Check Meter\' : \n                  attr.ta0allocationtype == \'93\' ? \'Check Feeder\' : \n                  attr.ta0allocationtype == \'95\' ? \'Check Sub Meter\' : \n                  attr.ta0allocationtype == \'97\' ? \'Check Sub Feeder\' : \'Check Meter\' }}" readonly="true" text-right>\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Brand</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0modelid" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Class</ion-label>\n                <ion-input type="text" [(ngModel)]="attr.ta0class" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Current Ratio</ion-label>\n                <ion-input [(ngModel)]="attr.ta0currentratio" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Voltage Ratio</ion-label>\n                <ion-input [(ngModel)]="attr.ta0voltageratio" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Multiplication Factor (MF)</ion-label>\n                <ion-input [(ngModel)]="attr.ta0mf" type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Label of Suppliers</ion-label>\n                <ion-input type="text" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Modem Serial No.</ion-label>\n                <ion-input type="text" value="{{modem}}" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Simcard Serial No.</ion-label>\n                <ion-input type="text" value="{{simcard}}" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">IP/ Data No.</ion-label>\n                <ion-input [(ngModel)]="ta0simcardip" type="text" (keyup)="checkUserInputIp($event)" readonly="true"\n                  text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="item.json.worktype === \'ZMMR\'">\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" class="setLabelSpace" text-wrap>Meter Reading Type</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="mrtype" (ionChange)="goToRegisterMrType($event)" [disabled]="mrtypeDisable"\n                  [selectOptions]="{title: \'Meter Reading Type\'}"\n                  [ngClass]="(mrtype === \'undefined\' || mrtype === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option value="01" [selected]="mrtype == \'01\'">01 (Meter reading by utility - SAP)</ion-option>\n                  <ion-option value="03" [selected]="mrtype == \'03\'">03 (Automatic estimation - SAP)</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="(mrtype !== \'01\') && (mrtype !== \'\') && item.json.worktype === \'ZMMR\'">\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary" class="setLabelSpace" text-wrap>Meter Reading Note</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="mrnote" (ionChange)="goToRegisterMrNode($event)"\n                  [ngClass]="(mrnote === \'undefined\' || mrnote === \'\') ? \'redHighlightText\' : \'blackHighlightText\'"\n                  [selectOptions]="{title: \'Meter Reading Note\'}">\n                  <ion-option *ngFor="let mrn of mrNodes" [value]="mrn.json.value"\n                    [selected]="mrnote == mrn.json.value">\n                    {{ mrn.json.value }} ( {{ mrn.json.description }} ) </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <!-- Meter, Modem & Simcard Action Section End -->\n    <ion-item-divider color="light" class="pointer" (click)="showActionSection(1)"\n      *ngIf="((item.json.worktype === soTypes.ZINL || (item.json.worktype === soTypes.ZINR && hideShowRegister)) && (attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM)) || ((meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind) ||\n    (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind)  || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind) || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind) ||\n    (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind) || \n    (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind ) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind) ||\n    (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind))">\n      <ion-row align-items-center>\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="swap"></ion-icon>&nbsp; <strong>ACTION SECTION</strong>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAction"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAction"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n\n    <div *ngIf="showAction">\n      <!-- Meter Action Start -->\n      <ion-grid\n        *ngIf="(meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind)"\n        style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n        <ion-item-divider\n          *ngIf="(meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind)"\n          color="light">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              Meter\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <ion-row\n          *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind || item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind || item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind">\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n              <ion-label>Install</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n              <ion-label>Remove</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <!-- <ion-item *ngIf="showRemoSts">\n          <ion-label>Remove</ion-label>\n          <ion-checkbox color="dark" checked="attr.ta0removeind" [(ngModel)]="attr.ta0removeind" (ionChange)="checkActionChange(attr.ta0removeind, \'remove\')"></ion-checkbox>\n        </ion-item> -->\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf="(meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false) || (meterExisting && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Device Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="systemStatusMeterValue" interface="alert"\n                (ionChange)="checkingSystemStatus($event, \'meter\')"\n                [ngClass]="(systemStatusMeterValue === undefined) ? \'redHighlightText\' : \'blackHighlightText\'"\n                [selectOptions]="{ title:\'Device Status\' }"\n                [disabled]="((item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false) || \n                (item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false)) ? \'true\' : \'false\'">\n                <!--   <ion-option *ngFor="let key of ta0dswnGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZRTN"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n                  ZRTN\n                  &nbsp;-&nbsp; Returned to Vendor</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n                <!-- Replace Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[maIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemovalMeterStatus && systemStatusMeterValue === \'ZREM\'">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Removal Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="deviceStatusMeterValue" [selectOptions]="{ title:\'Removal Status\' }"\n                interface="alert"\n                [ngClass]="(deviceStatusMeterValue == \'\' || deviceStatusMeterValue == undefined) ? \'redHighlightText\' : \'blackHighlightText\'"\n                multiple="true">\n                <!-- <ion-option *ngFor="let key of ta0dswonGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <ion-option value="ZAGE">ZAGE &nbsp;-&nbsp; Aged</ion-option>\n                <ion-option value="ZCRS">ZCRS &nbsp;-&nbsp; \'Flying\' Meter</ion-option>\n                <ion-option value="ZFMD">ZFMD &nbsp;-&nbsp; Faulty-Manufacturer Defect</ion-option>\n                <ion-option value="ZFPD">ZFPD &nbsp;-&nbsp; Faulty-Physically Damaged</ion-option>\n                <ion-option value="ZGC">ZGC &nbsp;-&nbsp; Good Condition</ion-option>\n                <ion-option value="ZCPF">ZCPF &nbsp;-&nbsp; Communication Port Faulty</ion-option>\n                <ion-option value="ZMDB">ZMDB &nbsp;-&nbsp; Display Blank </ion-option>\n                <ion-option value="ZBUR">ZBUR &nbsp;-&nbsp; Burnt</ion-option>\n                <ion-option value="ZOOA">ZOOA &nbsp;-&nbsp; Out of Accuracy</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- Meter Action End -->\n\n      <!-- Modem Action Start -->\n      <ion-grid\n        *ngIf="(modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind)  || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind) || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind)"\n        style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n        <ion-item-divider color="light"\n          *ngIf="(modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind)  || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false) || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind)">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              Modem\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <ion-row\n          *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind || item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind || item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind">\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n              <ion-label>Install</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind === true &&  item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n              <ion-label>Remove</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <!-- <ion-item *ngIf="showRemoSts">\n          <ion-label>Remove</ion-label>\n          <ion-checkbox color="dark" checked="attr.ta0removeind" [(ngModel)]="attr.ta0removeind" (ionChange)="checkActionChange(attr.ta0removeind, \'remove\')"></ion-checkbox>\n        </ion-item> -->\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf="(modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind)  || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false) || (modemExisting && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Device Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="systemStatusModemValue" interface="alert"\n                (ionChange)="checkingSystemStatus($event, \'modem\')"\n                [ngClass]="(systemStatusModemValue === undefined) ? \'redHighlightText\' : \'blackHighlightText\'"\n                [selectOptions]="{ title:\'Device Status\' }"\n                [disabled]="((item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false) || \n                (item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false)) ? \'true\' : \'false\'">\n                <!--   <ion-option *ngFor="let key of ta0dswnGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <!-- Install and Remove Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZRTN"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n                  ZRTN\n                  &nbsp;-&nbsp; Returned to Vendor</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n                <!-- Replace Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[modemIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemovalModemStatus && systemStatusModemValue === \'ZREM\'">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Removal Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="deviceStatusModemValue" [selectOptions]="{ title:\'Removal Status\' }"\n                interface="alert"\n                [ngClass]="(deviceStatusModemValue == undefined || deviceStatusModemValue == \'\') ? \'redHighlightText\' : \'blackHighlightText\'"\n                multiple="true">\n                <!-- <ion-option *ngFor="let key of ta0dswonGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <ion-option value="ZAGE">ZAGE &nbsp;-&nbsp; Aged</ion-option>\n                <ion-option value="ZCRS">ZCRS &nbsp;-&nbsp; \'Flying\' Meter</ion-option>\n                <ion-option value="ZFMD">ZFMD &nbsp;-&nbsp; Faulty-Manufacturer Defect</ion-option>\n                <ion-option value="ZFPD">ZFPD &nbsp;-&nbsp; Faulty-Physically Damaged</ion-option>\n                <ion-option value="ZGC">ZGC &nbsp;-&nbsp; Good Condition</ion-option>\n                <ion-option value="ZCPF">ZCPF &nbsp;-&nbsp; Communication Port Faulty</ion-option>\n                <ion-option value="ZMDB">ZMDB &nbsp;-&nbsp; Display Blank </ion-option>\n                <ion-option value="ZBUR">ZBUR &nbsp;-&nbsp; Burnt</ion-option>\n                <ion-option value="ZOOA">ZOOA &nbsp;-&nbsp; Out of Accuracy</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- Modem Action End -->\n\n      <!-- Simcard Action Start -->\n      <ion-grid\n        *ngIf="(simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind)"\n        style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n        <ion-item-divider color="light"\n          *ngIf="(simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind)">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              Simcard\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <ion-row\n          *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind || item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind || item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind">\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n              <ion-label>Install</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n              <ion-label>Remove</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf="(simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false) || (simcardExisting && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Device Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="systemStatusSimcardValue" interface="alert"\n                (ionChange)="checkingSystemStatus($event, \'simcard\')"\n                [ngClass]="(systemStatusSimcardValue === undefined) ? \'redHighlightText\' : \'blackHighlightText\'"\n                [selectOptions]="{ title:\'Device Status\' }"\n                [disabled]="((item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false) || \n                (item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false)) ? \'true\' : \'false\'">\n                <!--   <ion-option *ngFor="let key of ta0dswnGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <!-- Install and Remove Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZRTN"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n                  ZRTN\n                  &nbsp;-&nbsp; Returned to Vendor</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n                <!-- Replace Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[simcardIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemovalSimcardStatus && systemStatusSimcardValue === \'ZREM\'">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Removal Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="deviceStatusSimcardValue" [selectOptions]="{ title:\'Removal Status\' }"\n                interface="alert"\n                [ngClass]="(deviceStatusSimcardValue == undefined || deviceStatusSimcardValue == \'\') ? \'redHighlightText\' : \'blackHighlightText\'"\n                multiple="true">\n                <!-- <ion-option *ngFor="let key of ta0dswonGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <ion-option value="ZAGE">ZAGE &nbsp;-&nbsp; Aged</ion-option>\n                <ion-option value="ZCRS">ZCRS &nbsp;-&nbsp; \'Flying\' Meter</ion-option>\n                <ion-option value="ZFMD">ZFMD &nbsp;-&nbsp; Faulty-Manufacturer Defect</ion-option>\n                <ion-option value="ZFPD">ZFPD &nbsp;-&nbsp; Faulty-Physically Damaged</ion-option>\n                <ion-option value="ZGC">ZGC &nbsp;-&nbsp; Good Condition</ion-option>\n                <ion-option value="ZCPF">ZCPF &nbsp;-&nbsp; Communication Port Faulty</ion-option>\n                <ion-option value="ZMDB">ZMDB &nbsp;-&nbsp; Display Blank </ion-option>\n                <ion-option value="ZBUR">ZBUR &nbsp;-&nbsp; Burnt</ion-option>\n                <ion-option value="ZOOA">ZOOA &nbsp;-&nbsp; Out of Accuracy</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- Simcard Action End -->\n\n      <!-- CT Action Start -->\n      <ion-grid\n        *ngIf="(ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind ) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind)"\n        style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n        <ion-item-divider color="light"\n          *ngIf="item.json.soWorkType != soTypes.ZINL && ((item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false) || item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind || item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind)">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              Current Transformer, CT\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <ion-row\n          *ngIf="(ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n              <ion-label>Install</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n              <ion-label>Remove</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf="(ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind) || (ctExisting && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Device Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="systemStatusCtValue" interface="alert"\n                (ionChange)="checkingSystemStatus($event, \'ct\')"\n                [ngClass]="(systemStatusCtValue === undefined) ? \'redHighlightText\' : \'blackHighlightText\'"\n                [selectOptions]="{ title:\'Device Status\' }"\n                [disabled]="((item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false) || \n                (item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false)) ? \'true\' : \'false\'">\n                <!--   <ion-option *ngFor="let key of ta0dswnGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <!-- Install and Remove -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZRTN"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n                  ZRTN\n                  &nbsp;-&nbsp; Returned to Vendor</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n                <!-- Replace Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ctIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemovalCtStatus && systemStatusCtValue === \'ZREM\'">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Removal Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="deviceStatusCtValue" [selectOptions]="{ title:\'Removal Status\' }"\n                interface="alert"\n                [ngClass]="(deviceStatusCtValue == undefined || deviceStatusCtValue == \'\') ? \'redHighlightText\' : \'blackHighlightText\'"\n                multiple="true">\n                <!-- <ion-option *ngFor="let key of ta0dswonGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <ion-option value="ZAGE">ZAGE &nbsp;-&nbsp; Aged</ion-option>\n                <ion-option value="ZCRS">ZCRS &nbsp;-&nbsp; \'Flying\' Meter</ion-option>\n                <ion-option value="ZFMD">ZFMD &nbsp;-&nbsp; Faulty-Manufacturer Defect</ion-option>\n                <ion-option value="ZFPD">ZFPD &nbsp;-&nbsp; Faulty-Physically Damaged</ion-option>\n                <ion-option value="ZGC">ZGC &nbsp;-&nbsp; Good Condition</ion-option>\n                <ion-option value="ZCPF">ZCPF &nbsp;-&nbsp; Communication Port Faulty</ion-option>\n                <ion-option value="ZMDB">ZMDB &nbsp;-&nbsp; Display Blank </ion-option>\n                <ion-option value="ZBUR">ZBUR &nbsp;-&nbsp; Burnt</ion-option>\n                <ion-option value="ZOOA">ZOOA &nbsp;-&nbsp; Out of Accuracy</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- CT Action End -->\n\n      <!-- PT Action Start -->\n      <ion-grid\n        *ngIf="(ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind)"\n        style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n        <ion-item-divider color="light"\n          *ngIf="item.json.soWorkType != soTypes.ZINL && ((item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false) || item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind || item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind)">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n              Potential Transformer, PT\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <ion-row\n          *ngIf="(ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n              <ion-label>Install</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind == true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n              <ion-label>Remove</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <ion-item\n              *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n              <ion-label>Replace</ion-label>\n              <ion-checkbox color="dark" checked="true" disabled="true"></ion-checkbox>\n            </ion-item>\n            <!-- <ion-item *ngIf="showRemoSts">\n          <ion-label>Remove</ion-label>\n          <ion-checkbox color="dark" checked="attr.ta0removeind" [(ngModel)]="attr.ta0removeind" (ionChange)="checkActionChange(attr.ta0removeind, \'remove\')"></ion-checkbox>\n        </ion-item> -->\n          </ion-col>\n        </ion-row>\n        <ion-row\n          *ngIf="(ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind) || (ptExisting && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind)">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Device Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="systemStatusPtValue" interface="alert"\n                (ionChange)="checkingSystemStatus($event, \'pt\')"\n                [ngClass]="(systemStatusPtValue === undefined) ? \'redHighlightText\' : \'blackHighlightText\'"\n                [selectOptions]="{ title:\'Device Status\' }"\n                [disabled]="((item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false) || \n                (item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false)) ? \'true\' : \'false\'">\n                <!--   <ion-option *ngFor="let key of ta0dswnGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <!-- Instal and Remove Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZRTN"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0installind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n                  ZRTN\n                  &nbsp;-&nbsp; Returned to Vendor</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0removeind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n                <!-- Replace Option -->\n                <ion-option value="AVLB"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n                  AVLB\n                  &nbsp;-&nbsp; Device is available</ion-option>\n                <ion-option value="INST"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === false">\n                  INST\n                  &nbsp;-&nbsp; Device is installed</ion-option>\n                <ion-option value="ZREM"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n                  ZREM\n                  &nbsp;-&nbsp; Device is removed</ion-option>\n                <ion-option value="ZEVI"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n                  ZEVI\n                  &nbsp;-&nbsp; Evidence for theft case</ion-option>\n                <ion-option value="ZMIS"\n                  *ngIf="item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0replaceind === true && item.json.ta0feeder[fIndex].multiassetlocci[ptIndex].ta0existingdevice === true">\n                  ZMIS\n                  &nbsp;-&nbsp; Device is missing</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemovalPtStatus && systemStatusPtValue === \'ZREM\'">\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Removal Status</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="deviceStatusPtValue" [selectOptions]="{ title:\'Removal Status\' }"\n                interface="alert"\n                [ngClass]="(deviceStatusPtValue == undefined || deviceStatusPtValue == \'\') ? \'redHighlightText\' : \'blackHighlightText\'"\n                multiple="true">\n                <!-- <ion-option *ngFor="let key of ta0dswonGroupList" value="{{key.json.value}}"> {{ key.json.value }} - {{ key.json.description }} </ion-option> -->\n                <ion-option value="ZAGE">ZAGE &nbsp;-&nbsp; Aged</ion-option>\n                <ion-option value="ZCRS">ZCRS &nbsp;-&nbsp; \'Flying\' Meter</ion-option>\n                <ion-option value="ZFMD">ZFMD &nbsp;-&nbsp; Faulty-Manufacturer Defect</ion-option>\n                <ion-option value="ZFPD">ZFPD &nbsp;-&nbsp; Faulty-Physically Damaged</ion-option>\n                <ion-option value="ZGC">ZGC &nbsp;-&nbsp; Good Condition</ion-option>\n                <ion-option value="ZCPF">ZCPF &nbsp;-&nbsp; Communication Port Faulty</ion-option>\n                <ion-option value="ZMDB">ZMDB &nbsp;-&nbsp; Display Blank </ion-option>\n                <ion-option value="ZBUR">ZBUR &nbsp;-&nbsp; Burnt</ion-option>\n                <ion-option value="ZOOA">ZOOA &nbsp;-&nbsp; Out of Accuracy</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- PT Action End -->\n\n      <!--Connection PT & CT Start -->\n      <ion-row *ngIf="item.json.ta0newvoltage > 3 ">\n        <!-- <ion-col *ngIf="item.json.soWorkType === soTypes.ZIST || item.json.soWorkType === soTypes.ZUDN || item.json.soWorkType === soTypes.ZSRO || item.json.soWorkType === soTypes.ZUNL || item.json.soWorkType === soTypes.ZRPL|| item.json.soWorkType === soTypes.ZRPM"> -->\n        <ion-col\n          *ngIf="item.json.soWorkType === soTypes.ZIST || item.json.soWorkType === soTypes.ZUDN || item.json.soWorkType === soTypes.ZSRO || item.json.soWorkType === soTypes.ZRMV  || item.json.soWorkType === soTypes.ZRPC ">\n\n          <ion-item-divider color="light">Connection State PT & CT </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Is PT connected directly (\'direct\')?</ion-label>\n              </ion-item>\n              <ion-list radio-group [(ngModel)]="ta0ptcontype" (ionChange)="ptCon($event)">\n                <ion-item>\n                  <ion-label color="primary">Direct</ion-label>\n                  <ion-radio value="Direct"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label color="primary">Indirect</ion-label>\n                  <ion-radio value="Indirect"></ion-radio>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Is CT connected directly (\'direct\')?</ion-label>\n              </ion-item>\n              <ion-list radio-group [(ngModel)]="ta0ctcontype" (ionChange)="ctCon($event)">\n                <ion-item>\n                  <ion-label color="primary">Direct</ion-label>\n                  <ion-radio value="Direct"></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-label color="primary">Indirect</ion-label>\n                  <ion-radio value="Indirect"></ion-radio>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <!--Connection PT & CT End -->\n\n      <!-- Already comment, opened by shankar on 5th sep 2018 -->\n      <!-- Remove WMAT from ZINR by alif on 20th dec 2018 -->\n      <!-- soTypes.ZINR === item.json.worktype -->\n      <ion-item-divider color="light"\n        *ngIf="(soTypes.ZINL === item.json.worktype) && (attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM)">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n            Wrong Meter Attributes\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-row\n        *ngIf="(soTypes.ZINL === item.json.worktype) && (attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.RMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM)">\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Wrong Meter Attributes Indicator</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-select [(ngModel)]="ta0wrgmtrind" interface="popover" (ionChange)="onHideShowRegister($event)">\n              <ion-option value="true" [selected]="ta0wrgmtrind === true">Yes</ion-option>\n              <ion-option value="false" [selected]="ta0wrgmtrind === false">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div\n      *ngIf="hideShowRegister && showContainer && (attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM || attr.ta0functionclass === functClass.RMTR)">\n      <ion-item-divider color="light" (click)="showRegisterSection(1)" class="pointer">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="speedometer"></ion-icon>&nbsp; <strong>REGISTER SECTION</strong>\n          </ion-col>\n          <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showRegister"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showRegister"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div *ngIf="showRegister">\n        <ion-grid>\n          <ion-list>\n            <ion-item>\n              <ion-row>\n                <ion-col col-1><strong>Reset</strong></ion-col>\n                <ion-col col-5><strong>Meter Type</strong></ion-col>\n                <ion-col col-2><strong>Meter Reading</strong></ion-col>\n                <ion-col col-2><strong>RF</strong></ion-col>\n                <ion-col col-2><strong>MF</strong></ion-col>\n              </ion-row>\n            </ion-item>\n            <div *ngFor="let register of attr.ta0registers; let j = index;">\n              <div *ngFor="let reading of register.ta0meterreading;">\n                <div *ngIf="reading.ta0readingtype === \'LMR\' || reading.ta0readingtype === \'TMR\'">\n                  <ion-item [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'">\n                    <ion-row>\n                      <ion-col col-1><code *ngIf="reading.ta0readingtype === \'LMR\'">n</code><code\n                          *ngIf="reading.ta0readingtype === \'TMR\'">n-1</code></ion-col>\n                      <ion-col col-5>{{ register.ta0registertype }} &nbsp; - &nbsp; {{ register.ta0registertypedesc }}\n                      </ion-col>\n                      <ion-col col-2>{{ reading.ta0reading }}</ion-col>\n                      <ion-col col-2>{{ register.ta0registerfactor }}</ion-col>\n                      <ion-col col-2>{{ attr.ta0mf }}</ion-col>\n                    </ion-row>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </ion-list>\n        </ion-grid>\n      </div>\n      <div *ngIf="item.json.worktype === soTypes.ZINL && showContainer  && attr.ta0replaceind === true">\n        <div *ngIf="showRegister">\n          <ion-grid\n            style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let register of attr.ta0registers; let j = index">\n            <ion-item-divider color="light">\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  Section {{ j + 1 }}\n                </ion-col>\n              </ion-row>\n            </ion-item-divider>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Register Code</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.ta0registertype" placeholder="Register Type"\n                    readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Register Type</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.ta0registertypedesc"\n                    placeholder="Register Type Description" readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Unit of Measurement</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.ta0uom" placeholder="Unit of Measurement"\n                    readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Register Factor (RF)</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.ta0registerfactor"\n                    placeholder="Register Factor " readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Total Factor (TF)</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.loc_reg_totalFactor"\n                    placeholder="Total Factor" readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Dial Before (DB)</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.ta0dialbefore" placeholder="Dial Before"\n                    readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Dial After (DA)</ion-label>\n                  <ion-input id="test2" type="text" [(ngModel)]="register.ta0dialafter" placeholder="Dial After"\n                    readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Proposed Reading -->\n            <ion-grid\n              style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n              *ngFor="let meterRead of register.ta0meterreading; let k = index">\n              <ion-row *ngIf="meterRead.ta0readingtype === \'PMR\'">\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Proposed Reading </ion-label>\n                    <ion-input type="number" [(ngModel)]="meterRead.ta0reading" placeholder="Please Enter" readonly=true\n                      text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Proposed Reading Date</ion-label>\n                    <ion-input type="text" value="{{ meterRead.ta0readingdate  | date: gv.dateFormat  }}"\n                      placeholder="Please Enter" readonly=true text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <!-- TMR Reading -->\n              <ion-row\n                *ngIf="meterRead.ta0readingtype === \'TMR\' && item.json.worktype === soTypes.ZINL && item.json.ta0newvoltage > 3">\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary"> MRO Reading (n-1)</ion-label>\n                    <ion-input type="text" value="{{ meterRead.ta0reading }}" readonly=true text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary"> MRO Reading Date (n-1)</ion-label>\n                    <ion-input type="text" value="{{ meterRead.ta0mrodate  | date: gv.dateFormat  }}"\n                      placeholder="Please Enter" readonly=true text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <!-- Last MRO Reading -->\n              <ion-row *ngIf="meterRead.ta0readingtype === \'LMR\'">\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Last MRO Reading (n)</ion-label>\n                    <ion-input type="text" value="{{ meterRead.ta0reading }}" readonly=true text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                  <ion-item>\n                    <ion-label color="primary">Last MRO Reading Date (n)</ion-label>\n                    <ion-input type="text" value="{{ meterRead.ta0mrodate   | date: gv.dateFormat  }}" readonly=true\n                      text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <!-- Actual Meter Reading -->\n              <ion-row *ngIf="meterRead.ta0readingtype === \'AMR\'">\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n                  *ngIf="(soTypes.ZMMR !== item.json.worktype)">\n                  <ion-item>\n                    <ion-label color="primary" *ngIf="item.json.worktype === soTypes.ZRMV">Last Reading</ion-label>\n                    <ion-label color="primary" *ngIf="item.json.worktype !== soTypes.ZRMV">New Reading</ion-label>\n                    <ion-input type="text" [(ngModel)]="meterRead.ta0reading" placeholder="Please Enter" text-right\n                      (keyup)="checkUserInputNewReading($event, meterRead.ta0usage, meterRead, register.ta0dialafter,register.ta0dialbefore)"\n                      [ngClass]="(meterRead.ta0reading == \'\' || meterRead.ta0reading == undefined && !validateViRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n                  *ngIf="(soTypes.ZMMR === item.json.worktype)">\n                  <ion-item>\n                    <ion-label color="primary">Last Reading</ion-label>\n                    <ion-input type="text" [(ngModel)]="meterRead.ta0reading" placeholder="Please Enter" text-right\n                      (keyup)="checkUserInputNewReading($event, meterRead.ta0usage, meterRead, register.ta0dialafter,register.ta0dialbefore)"\n                      [ngClass]="(meterRead.ta0reading == \'\' || meterRead.ta0reading == undefined && !validateViRemark) ? \'redHighlightText\' : \'blackHighlightText\'"\n                      (ionChange)="calculateUsage(register, meterRead.ta0reading, meterRead.ta0usage)">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n                  *ngIf="(soTypes.ZMMR === item.json.worktype)">\n                  <ion-item>\n                    <ion-label color="primary"> Calculation Usage</ion-label>\n                    <ion-input type="number" [(ngModel)]="meterRead.ta0usage" readonly="true" text-right></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div\n      *ngIf="hideShowRegister && !showContainer && (attr.ta0functionclass === functClass.NMTR || attr.ta0functionclass === functClass.SMTR || attr.ta0functionclass === functClass.SMTR_CM || attr.ta0functionclass === functClass.RMTR)">\n      <ion-item-divider color="light" (click)="showRegisterSection(1)" class="pointer">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="speedometer"></ion-icon>&nbsp; <strong>REGISTER SECTION</strong>\n          </ion-col>\n          <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showRegister"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showRegister"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div *ngIf="showRegister">\n        <ion-grid\n          style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let register of attr.ta0registers; let j = index">\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Section {{ j + 1 }}\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Register Code</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.ta0registertype" placeholder="Register Type"\n                  readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Register Type</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.ta0registertypedesc"\n                  placeholder="Register Type Description" readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Unit of Measurement</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.ta0uom" placeholder="Unit of Measurement"\n                  readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Register Factor (RF)</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.ta0registerfactor"\n                  placeholder="Register Factor " readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Total Factor (TF)</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.loc_reg_totalFactor" placeholder="Total Factor"\n                  readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Dial Before (DB)</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.ta0dialbefore" placeholder="Dial Before"\n                  readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Dial After (DA)</ion-label>\n                <ion-input id="test2" type="text" [(ngModel)]="register.ta0dialafter" placeholder="Dial After"\n                  readonly="true" text-right></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-grid\n            style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n            *ngFor="let meterRead of register.ta0meterreading; let k = index">\n            <ion-row *ngIf="meterRead.ta0readingtype === \'PMR\'">\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Proposed Reading </ion-label>\n                  <ion-input type="number" [(ngModel)]="meterRead.ta0reading" placeholder="Please Enter" readonly=true\n                    text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Proposed Reading Date</ion-label>\n                  <ion-input type="text" value="{{ meterRead.ta0readingdate  | date: gv.dateFormat  }}"\n                    placeholder="Please Enter" readonly=true text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              *ngIf="meterRead.ta0readingtype === \'TMR\' && item.json.worktype === soTypes.ZINL && item.json.ta0newvoltage > 3">\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary"> MRO Reading (n-1)</ion-label>\n                  <ion-input type="text" value="{{ meterRead.ta0reading }}" readonly=true text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary"> MRO Reading Date (n-1)</ion-label>\n                  <ion-input type="text" value="{{ meterRead.ta0mrodate  | date: gv.dateFormat  }}"\n                    placeholder="Please Enter" readonly=true text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="meterRead.ta0readingtype === \'LMR\'">\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Last MRO Reading (n)</ion-label>\n                  <ion-input type="text" value="{{ meterRead.ta0reading }}" readonly=true text-right></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Last MRO Reading Date (n)</ion-label>\n                  <ion-input type="text" value="{{ meterRead.ta0mrodate   | date: gv.dateFormat  }}" readonly=true\n                    text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="meterRead.ta0readingtype === \'AMR\'">\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n                *ngIf="(soTypes.ZMMR !== item.json.worktype)">\n                <ion-item>\n                  <ion-label color="primary" *ngIf="item.json.worktype === soTypes.ZRMV">Last Reading</ion-label>\n                  <ion-label color="primary" *ngIf="item.json.worktype !== soTypes.ZRMV">New Reading</ion-label>\n                  <ion-input type="text" [(ngModel)]="meterRead.ta0reading" placeholder="Please Enter" text-right\n                    (keyup)="checkUserInputNewReading($event, meterRead.ta0usage, meterRead, register.ta0dialafter,register.ta0dialbefore)"\n                    [ngClass]="(meterRead.ta0reading == \'\' || meterRead.ta0reading == undefined && !validateViRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n                *ngIf="(soTypes.ZMMR === item.json.worktype)">\n                <ion-item>\n                  <ion-label color="primary">Last Reading</ion-label>\n                  <ion-input type="text" [(ngModel)]="meterRead.ta0reading" placeholder="Please Enter" text-right\n                    (keyup)="checkUserInputNewReading($event, meterRead.ta0usage, meterRead, register.ta0dialafter,register.ta0dialbefore)"\n                    [ngClass]="(meterRead.ta0reading == \'\' || meterRead.ta0reading == undefined && !validateViRemark) ? \'redHighlightText\' : \'blackHighlightText\'"\n                    (ionChange)="calculateUsage(register, meterRead.ta0reading, meterRead.ta0usage)">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n                *ngIf="(soTypes.ZMMR === item.json.worktype)">\n                <ion-item>\n                  <ion-label color="primary"> Calculation Usage</ion-label>\n                  <ion-input type="number" [(ngModel)]="meterRead.ta0usage" readonly="true" text-right></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-grid>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button round block mode="md" (click)="saveRegisterDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/devices/register-details/register-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], RegisterDetailsPage);
    return RegisterDetailsPage;
}());

//# sourceMappingURL=register-details.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDetailsPageModule", function() { return RegisterDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_details__ = __webpack_require__(1062);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterDetailsPageModule = /** @class */ (function () {
    function RegisterDetailsPageModule() {
    }
    RegisterDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_details__["a" /* RegisterDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__register_details__["a" /* RegisterDetailsPage */]),
            ],
        })
    ], RegisterDetailsPageModule);
    return RegisterDetailsPageModule;
}());

//# sourceMappingURL=register-details.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterReading; });
var MeterReading = /** @class */ (function () {
    function MeterReading() {
    }
    return MeterReading;
}());

//# sourceMappingURL=MeterReading.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatus; });
var UserStatus = /** @class */ (function () {
    function UserStatus() {
    }
    return UserStatus;
}());

//# sourceMappingURL=UserStatus.js.map

/***/ })

});
//# sourceMappingURL=13.js.map