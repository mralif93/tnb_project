webpackJsonp([9],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceExecutionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_FeederDetails__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_MultiAssetLocci__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pojo_design_feederSetDesign__ = __webpack_require__(958);
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
 * Generated class for the ServiceExecutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceExecutionPage = /** @class */ (function () {
    function ServiceExecutionPage(alertCtrl, navCtrl, appCtrl, params, toastCtrl, jsonStore, dataService, gf, gv, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.jsonStore = jsonStore;
        this.dataService = dataService;
        this.gf = gf;
        this.gv = gv;
        this.loadingCtrl = loadingCtrl;
        this.soTypes = __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.dCons = __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        this.functClass = __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */];
        this.feederSetArray = [];
        this.feederDetails = null;
        this.feederArray = new Array();
        this.multiAssetLocci = null;
        this.multiAssetLocciArray = null;
        this.showAdHocError = false;
        this.wolo1Freeze = false;
        // Variables [ZUDN]
        this.listRemoveDevice = [];
        // Variables Checking Device Status
        this.deviceList = [];
        //Local Variable Created By Ameer -27/11/2019
        this.tempFeederArry = [];
        this.countArry = 0;
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
        this.deviceDetails = new __WEBPACK_IMPORTED_MODULE_4__pojo_MultiAssetLocci__["a" /* MultiAssetLocci */]();
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
            for (var _i = 0, _a = this.item.json.ta0feeder; _i < _a.length; _i++) {
                var feederArr = _a[_i];
                // checking multiassetlocci
                if (typeof (feederArr.multiassetlocci) !== "undefined" && feederArr.multiassetlocci !== null && feederArr.multiassetlocci !== "") {
                    // Setting default value for feeder checking.
                    feederArr.loc_feederInd = false;
                    this.loadFeederDesign(feederArr);
                }
            }
        }
        else {
            // Reset List Device
            this.item.json.listDevice = [];
            // Reset Controlling Device to empty.
            this.item.json.loc_controllingDeviceList = [];
        }
        // Replace Updated Data in JSON
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        console.log("ServiceExecutionPage >>> this.item " + JSON.stringify(this.item));
    }
    ServiceExecutionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("enter ionViewWillEnter to search & update local data..");
        this.countArry = 0;
        this.item = this.params.data;
        var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.item.json.wonum);
        this.jsonStore.getSearchRecord(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0).then(function (result) {
            console.log("enter local data to update..");
            _this.item = JSON.parse(JSON.stringify(result[0]));
            _this.loadAdhocCheck();
            _this.wolo1FreezeCheck();
            // Retrigger
            // this.gf.loadLookup('menu');
            _this.worktype = _this.item.json.worktype;
            // Trigger AllocationType
            _this.item.json.loc_allocationtype_status = false;
            // SOType = ZUDN
            _this.deviceDetails = new __WEBPACK_IMPORTED_MODULE_4__pojo_MultiAssetLocci__["a" /* MultiAssetLocci */]();
            // Read is remove device is exist in json..
            if (_this.item.json.hasOwnProperty('ta0removedevice')) {
                _this.listRemoveDevice = _this.item.json.ta0removedevice;
            }
            console.log(JSON.stringify(_this.item));
            if (typeof (_this.item.json.ta0feeder) != 'undefined' && _this.item.json.ta0feeder !== null && _this.item.json.ta0feeder !== '') {
                //this.feederSetArray = [];
                // console.log("BEFORE: " + JSON.stringify(this.item.json.ta0feeder));
                _this.item.json.ta0feeder.sort(_this.gf.dynamicSort("description"));
                // console.log("AFTER: " + JSON.stringify(this.item.json.ta0feeder));
                // Reset List Device
                _this.item.json.listDevice = [];
                // Reset Controlling Device to empty.
                _this.item.json.loc_controllingDeviceList = [];
                _this.deviceDetails = {};
                _this.tempFeederArry = _this.item.json.ta0feeder;
                for (var _i = 0, _a = _this.item.json.ta0feeder; _i < _a.length; _i++) {
                    var feederArr = _a[_i];
                    // checking multiassetlocci
                    if (typeof (feederArr.multiassetlocci) !== "undefined" && feederArr.multiassetlocci !== null && feederArr.multiassetlocci !== "") {
                        // Setting default value for feeder checking.
                        feederArr.loc_feederInd = false;
                        _this.loadFeederDesign(feederArr);
                    }
                }
            }
            else {
                // Reset List Device
                _this.item.json.listDevice = [];
                // Reset Controlling Device to empty.
                _this.item.json.loc_controllingDeviceList = [];
            }
            // Replace Updated Data in JSON
            _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
            console.log("ServiceExecutionPage >>> this.item " + JSON.stringify(_this.item));
        });
    };
    ServiceExecutionPage.prototype.wolo1FreezeCheck = function () {
        if (this.item.json.wolo1 !== "" && this.item.json.wolo1 !== null && typeof this.item.json.wolo1 !== "undefined") {
            this.wolo1Freeze = true;
        }
        else {
            this.wolo1Freeze = false;
        }
    };
    ServiceExecutionPage.prototype.loadAdhocCheck = function () {
        var relatedRecords = this.item.json.relatedrecord;
        if (this.item.json.origrecordid !== '' && this.item.json.origrecordid !== null && typeof (this.item.json.origrecordid) !== 'undefined') {
            this.showAdHocError = false;
        }
        else {
            if (typeof (this.item.json.relatedrecord) !== "undefined" && this.item.json.relatedrecord !== null && this.item.json.relatedrecord !== "") {
                for (var i = 0; i < relatedRecords.length; i++) {
                    if (relatedRecords[i].ta0relatedrecstatus === "INPRG")
                        this.showAdHocError = true;
                }
            }
        }
    };
    ServiceExecutionPage.prototype.deviceRemovingMeterCheck = function (i, j, deviceName, oldDeviceIndex) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm Deletion',
            message: 'Do you agree delete this reading? You can\'t undo this action',
            buttons: [{ text: 'Cancel' }, {
                    text: 'Delete',
                    handler: function () {
                        _this.removeDevice(i, j, oldDeviceIndex);
                    }
                }]
        });
        confirm.present();
    };
    ServiceExecutionPage.prototype.loadFeederDesign = function (feederArr) {
        // Reset New Device Display Section
        feederArr.loc_haveNewDevice = false;
        feederArr.loc_removeAllDevice = false;
        // Installation Voltage
        var voltage = JSON.parse(JSON.stringify(this.item.json.ta0installationvoltage));
        if (typeof (feederArr.multiassetlocci) != 'undefined') {
            feederArr.feederSetDesign = [];
            var feederSetDesign = new __WEBPACK_IMPORTED_MODULE_13__pojo_design_feederSetDesign__["a" /* FeederSetDesign */]();
            feederSetDesign.soWorkType = this.item.json.worktype;
            feederSetDesign.feederExisting = feederArr.ta0existing;
            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                var ctCount = 0;
                var ptCount = 0;
                for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
                    var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    switch (key) {
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN:
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
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_MD:
                            feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterModemIndex = i;
                            feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_SIM:
                            feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterSimIndex = i;
                            feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK:
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
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_MD:
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
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_SIM:
                            feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nCheckSimIndex = i;
                            feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT:
                            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0sncode === "D101") {
                                if (ctCount === 0) {
                                    feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtRIndex = i;
                                    feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    ctCount++;
                                }
                                else if (ctCount === 1) {
                                    feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtYIndex = i;
                                    feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    ctCount++;
                                }
                                else {
                                    feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtBIndex = i;
                                    feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    ctCount++;
                                }
                            }
                            else {
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtRIndex = i;
                                    feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtYIndex = i;
                                    feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                else {
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
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT:
                            // Only for ZIST (Install Check Meter)
                            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0sncode === "D101") {
                                if (ptCount === 0) {
                                    feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtRIndex = i;
                                    feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    ptCount++;
                                }
                                else if (ptCount === 1) {
                                    feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtYIndex = i;
                                    feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    ptCount++;
                                }
                                else {
                                    feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtBIndex = i;
                                    feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    ptCount++;
                                }
                            }
                            else {
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtRIndex = i;
                                    feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtYIndex = i;
                                    feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                else {
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
                if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                    else {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) || feederSetDesign.nMeterSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                }
                else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                    else {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) || feederSetDesign.nMeterSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                }
                else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                }
            }
            else {
                var ctECount = 0;
                var ptECount = 0;
                for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
                    // Collection Assetnum          
                    this.deviceDetails.description = feederArr.description + " - " + feederArr.ta0feedercode;
                    var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN && feederSetDesign.feederExisting === false) {
                        switch (key) {
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
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
                                feederArr.nfeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterModemIndex = i;
                                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterSimIndex = i;
                                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckSimIndex = i;
                                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtRIndex = i;
                                    feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtYIndex = i;
                                    feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                else {
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtRIndex = i;
                                    feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtYIndex = i;
                                    feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                else {
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
                        if (old_voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (old_voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (old_voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                            else if (new_voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                    }
                    else {
                        switch (key) {
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN:
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
                                        }
                                        else {
                                            feederSetDesign.eMeterRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
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
                                }
                                else {
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_MD:
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
                                        }
                                        else {
                                            feederSetDesign.eMeterModemRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eMeterModemTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_SIM:
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
                                        }
                                        else {
                                            feederSetDesign.eMeterSimRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eMeterSimTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK:
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
                                        }
                                        else {
                                            feederSetDesign.eCheckRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_MD:
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
                                        }
                                        else {
                                            feederSetDesign.eCheckModemRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eCheckModemTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_SIM:
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
                                        }
                                        else {
                                            feederSetDesign.eCheckSimRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eCheckSimTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT:
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
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ctECount++;
                                }
                                else if (ctECount === 1) {
                                    feederSetDesign.eMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterCtYIndex = i;
                                    feederSetDesign.eMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ctECount++;
                                }
                                else {
                                    feederSetDesign.eMeterCtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterCtBIndex = i;
                                    feederSetDesign.eMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ctECount++;
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT:
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
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ptECount++;
                                }
                                else if (ptECount === 1) {
                                    feederSetDesign.eMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterPtYIndex = i;
                                    feederSetDesign.eMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ptECount++;
                                }
                                else {
                                    feederSetDesign.eMeterPtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterPtBIndex = i;
                                    feederSetDesign.eMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ptECount++;
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterModemIndex = i;
                                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterSimIndex = i;
                                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
                                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckModemIndex = i;
                                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckSimIndex = i;
                                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtRIndex = i;
                                    feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctnCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtYIndex = i;
                                    feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctnCount++;
                                }
                                else {
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
                            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtRIndex = i;
                                    feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptnCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtYIndex = i;
                                    feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptnCount++;
                                }
                                else {
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
                        if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterSilStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterSilStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eMeterSilStatus === "Y") {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
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
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") && feederSetDesign.nCheckSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                if (feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                            feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                            feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
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
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                if (feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC || this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
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
                feederSetDesign.eFeederVoltage = old_voltage;
            }
            if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
                feederSetDesign.nFeederVoltage = new_voltage;
            }
            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
                feederSetDesign.nFeederVoltage = voltage;
            }
            /**
             * Reason   : Change indicator for ZUDN remove all device.
             * Created  : Alif (02.12.2019)
             */
            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
                // set default value
                feederArr.loc_removeAllDevice = false;
                this.tempFeederArry[this.countArry].loc_removeAllDevice = false;
                var oriDevices, tempDevices;
                if (typeof (feederArr.multiassetlocci) !== "undefined") {
                    oriDevices = [];
                    oriDevices = feederArr.multiassetlocci.filter(function (item) {
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_MD) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_SIM) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_MD) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_SIM) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_COMM) {
                            return item;
                        }
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_COMM) {
                            return item;
                        }
                    });
                    tempDevices = feederArr.multiassetlocci.filter(function (item) {
                        return item.ta0removeind === true;
                    });
                    if (tempDevices.length > 0) {
                        // do comparison checking
                        if (oriDevices.length === tempDevices.length) {
                            feederArr.loc_removeAllDevice = true;
                            this.tempFeederArry[this.countArry].loc_removeAllDevice = true;
                        }
                        else {
                            feederArr.loc_removeAllDevice = false;
                            this.tempFeederArry[this.countArry].loc_removeAllDevice = false;
                        }
                    }
                }
            }
            console.log('feeder set  : ' + JSON.stringify(feederSetDesign));
            feederArr.feederSetDesign.push(feederSetDesign);
            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                this.tempFeederArry[this.countArry].nMeterSerialNum = feederSetDesign.nMeterSerialNum;
                this.tempFeederArry[this.countArry].nFeederVoltage = feederSetDesign.nFeederVoltage;
                if (feederSetDesign.nMeterAllocationType === '90') {
                    this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
                }
                else if (feederSetDesign.nMeterAllocationType === '91') {
                    this.tempFeederArry[this.countArry].nMeterAllocationName = "Feeder Meter";
                }
                else if (feederSetDesign.nMeterAllocationType === '94') {
                    this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Meter";
                }
                else if (feederSetDesign.nMeterAllocationType === '96') {
                    this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Feeder Meter";
                }
                else {
                    this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
                }
            }
            else if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE
                || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO
                || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR
                || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV || feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
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
                }
                else if (feederSetDesign.eMeterAllocationType === '91') {
                    this.tempFeederArry[this.countArry].eMeterAllocationName = "Feeder Meter";
                }
                else if (feederSetDesign.eMeterAllocationType === '94') {
                    this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Meter";
                }
                else if (feederSetDesign.eMeterAllocationType === '96') {
                    this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Feeder Meter";
                }
                else {
                    this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
                }
            }
            else if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
                if (feederArr.loc_haveNewDevice == true) {
                    if (typeof (feederSetDesign.nMeterSerialNum) !== 'undefined') {
                        this.tempFeederArry[this.countArry].nMeterSerialNum = feederSetDesign.nMeterSerialNum;
                        if (feederSetDesign.eMeterAllocationType === '90') {
                            this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
                        }
                        else if (feederSetDesign.eMeterAllocationType === '91') {
                            this.tempFeederArry[this.countArry].nMeterAllocationName = "Feeder Meter";
                        }
                        else if (feederSetDesign.eMeterAllocationType === '94') {
                            this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Meter";
                        }
                        else if (feederSetDesign.eMeterAllocationType === '96') {
                            this.tempFeederArry[this.countArry].nMeterAllocationName = "Sub Feeder Meter";
                        }
                        else {
                            this.tempFeederArry[this.countArry].nMeterAllocationName = "Main Meter";
                        }
                    }
                    else {
                        this.tempFeederArry[this.countArry].eMeterSerialNum = feederSetDesign.eMeterSerialNum;
                        if (feederSetDesign.eMeterAllocationType === '90') {
                            this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
                        }
                        else if (feederSetDesign.eMeterAllocationType === '91') {
                            this.tempFeederArry[this.countArry].eMeterAllocationName = "Feeder Meter";
                        }
                        else if (feederSetDesign.eMeterAllocationType === '94') {
                            this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Meter";
                        }
                        else if (feederSetDesign.eMeterAllocationType === '96') {
                            this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Feeder Meter";
                        }
                        else {
                            this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
                        }
                    }
                }
                else if (feederArr.loc_haveNewDevice == false) {
                    this.tempFeederArry[this.countArry].eMeterSerialNum = feederSetDesign.eMeterSerialNum;
                    if (feederSetDesign.eMeterAllocationType === '90') {
                        this.tempFeederArry[this.countArry].eMeterAllocationName = "Main Meter";
                    }
                    else if (feederSetDesign.eMeterAllocationType === '91') {
                        this.tempFeederArry[this.countArry].eMeterAllocationName = "Feeder Meter";
                    }
                    else if (feederSetDesign.eMeterAllocationType === '94') {
                        this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Meter";
                    }
                    else if (feederSetDesign.eMeterAllocationType === '96') {
                        this.tempFeederArry[this.countArry].eMeterAllocationName = "Sub Feeder Meter";
                    }
                    else {
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
        }
        else {
            feederArr.nFeederVoltage = this.gv.departmentCode;
            feederArr.eFeederVoltage = this.gv.departmentCode;
        }
        // Counter Indicator
        this.countArry++;
    };
    ServiceExecutionPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ServiceExecutionPage");
    };
    ServiceExecutionPage.prototype.toggleSection = function (index) {
        this.item.json.ta0feeder[index].open = !this.item.json.ta0feeder[index].open;
    };
    ServiceExecutionPage.prototype.toggleItem = function (index, j) {
        this.item.json.ta0feeder[index].children[j].open = !this.item.json
            .ta0feeder[index].children[j].open;
    };
    ServiceExecutionPage.prototype.addFeeder = function () {
        console.log("add feeder .");
        this.feederDetails = new __WEBPACK_IMPORTED_MODULE_3__pojo_FeederDetails__["a" /* FeederDetails */]();
        this.feederDetails.description = "Feeder Set";
        this.feederDetails.ta0feedercode = new Date().getUTCMilliseconds().toString();
        // For adding new feeder change ta0existing = false.
        this.feederDetails.ta0existing = false;
        //var voltage = this.item.json.ta0newvoltage >= 4 ? '04' : '03';
        var voltage = this.gv.departmentCode;
        this.feederDetails.nFeederVoltage = voltage;
        this.feederDetails.eFeederVoltage = voltage;
        console.log("------------------------------------------------------------------------------");
        console.log("this.item.ta0feeder==" + JSON.stringify(this.item));
        console.log("------------------------------------------------------------------------------");
        if (this.item.json.ta0feeder != null) {
            console.log("feeder is not null");
            //this.feederArray.push(this.feederDetails);
            this.item.json.ta0feeder.push(this.feederDetails);
        }
        else {
            console.log("feeder empty");
            this.feederArray.push(this.feederDetails);
            console.log("this.feederArray==" + JSON.stringify(this.feederArray));
            this.item.json.ta0feeder = this.feederArray;
        }
        console.log("tnb Feeder : " + JSON.stringify(this.item.json.ta0feeder));
    };
    ServiceExecutionPage.prototype.addDevice = function (index) {
        //this.feederArray[index];
        console.log("Hi Add Device :) ==" + index);
        console.log(" item : " + JSON.stringify(this.item));
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("DeviceDetailsPage", {
            paramObj: this.item,
            paramIndex: index
        });
    };
    ServiceExecutionPage.prototype.removeFeeder = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Deletion',
            message: 'Do you want to delete the feeder',
            buttons: [
                {
                    text: 'Disagree',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        // Remove device in temporary list (listDevice & controllingDevice).
                        if (typeof (_this.item.json.listDevice) !== "undefined" || typeof (_this.item.json.loc_controllingDeviceList) !== "undefined") {
                            // Checking feeder is empty or not.
                            var feeder = _this.item.json.ta0feeder[i];
                            if (typeof (_this.item.json.ta0feeder[i]) !== "undefined") {
                                // Checking multiassetlocci (device).
                                if (typeof (_this.item.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                                    var multiassetlocci = feeder.multiassetlocci;
                                    var listDevice = _this.item.json.listDevice;
                                    var controllingDevice = _this.item.json.loc_controllingDeviceList;
                                    // Checking length.
                                    if (multiassetlocci.length > 0) {
                                        for (var m = 0; m < multiassetlocci.length; m++) {
                                            // Checking inside listDevice
                                            var deleteDevice = listDevice.filter(function (item) {
                                                return item.assetnum === multiassetlocci[m].assetnum;
                                            });
                                            if (deleteDevice.length > 0) {
                                                // Find the index first
                                                for (var k = 0; k < deleteDevice.length; k++) {
                                                    var listDeviceIndex;
                                                    var controllingDeviceIndex;
                                                    listDeviceIndex = listDevice.findIndex(function (item) {
                                                        return item.assetnum === deleteDevice[k].assetnum;
                                                    });
                                                    // Remove the device from the list
                                                    listDevice.splice(listDeviceIndex, 1);
                                                    controllingDeviceIndex = controllingDevice.findIndex(function (item) {
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
                        var loading = _this.loadingCtrl.create({
                            content: "Loading..."
                        });
                        loading.present();
                        _this.gf.loadingTimer(loading);
                        setTimeout(function () {
                            _this;
                            loading.onWillDismiss(function () {
                                _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                                _this.item.json.loc_ta0feeder_haveChange = true;
                                //this.gf.displayToast("Feeder Details updated.");
                                loading.dismiss();
                            });
                        }, 10000);
                        // Reset deviceDetails info..
                        _this.deviceDetails = {};
                        var wonum = _this.item.json.wonum;
                        var ta0feederid = _this.item.json.ta0feeder[i].ta0feederid;
                        // Save information for remove device..
                        _this.deviceDetails.wonum = wonum;
                        _this.deviceDetails.ta0feederid = ta0feederid;
                        _this.deviceDetails.loc_feeder_haveRemove = true;
                        _this.listRemoveDevice.push(_this.deviceDetails);
                        // save the remove device into workorder
                        _this.item.json.ta0removedevice = _this.listRemoveDevice;
                        // Reset deviceDetails info..
                        _this.deviceDetails = {};
                        console.log("DATA: " + JSON.stringify(_this.listRemoveDevice));
                        console.log("JSON: " + JSON.stringify(_this.item));
                        /**
                         * Reason   : Saving to local storage (json data).
                         * Created  : 22-01-2019
                         */
                        _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                        if (!_this.gv.testMobile) {
                            _this.dataService.deleteDevice(_this.listRemoveDevice, wonum, _this.item.json.ta0feeder[i].ta0feedercode, 'feeder')
                                .then(function (results) {
                                var res;
                                res = results;
                                if (res.processStatus === 'success') {
                                    _this.item.json.ta0feeder.splice(i, 1);
                                    _this.gf.warningAlert('Success', res.description, 'Close');
                                    _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                                    loading.dismiss();
                                }
                                else {
                                    _this.gf.warningAlert('Failed', res.description, 'Close');
                                    loading.dismiss();
                                }
                            });
                        }
                        else {
                            /**
                             * Description : Condition to different it feeder which is existing in maximo or in locally.
                             * Created     : Alif (23.08.2019)
                             */
                            if (typeof (_this.item.json.ta0feeder[i].ta0feederid) === "undefined") {
                                _this.item.json.ta0feeder.splice(i, 1);
                            }
                            else {
                                _this.item.json.ta0feeder[i]._action = "Delete";
                            }
                            console.log(JSON.stringify(_this.item.json.ta0feeder[i]));
                            _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                            _this.gf.displayToast('Deleted feeder is locally updated.');
                            loading.dismiss();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ServiceExecutionPage.prototype.hasProperty = function (feederDetails) {
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
    };
    ServiceExecutionPage.prototype.removeDevice = function (i, j, r) {
        var _this = this;
        // Reset deviceDetails info..
        this.deviceDetails = {};
        var wonum = this.item.json.wonum;
        var assetnum = this.item.json.ta0feeder[i].multiassetlocci[j].assetnum;
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
            .then(function (results) {
            // Disabled Checkbox for Remove
            for (var k = 0; k < _this.item.json.ta0feeder[i].multiassetlocci.length; k++) {
                if (_this.item.json.ta0feeder[i].multiassetlocci[k].ta0functionclass == _this.item.json.ta0feeder[i].multiassetlocci[j].ta0functionclass
                    && _this.item.json.ta0feeder[i].multiassetlocci[k].devicetype == _this.item.json.ta0feeder[i].multiassetlocci[j].devicetype) {
                    _this.item.json.ta0feeder[i].multiassetlocci[k].ta0removeind = false;
                    console.log("DEVICE TYPE - K: " + _this.item.json.ta0feeder[i].multiassetlocci[k].devicetype);
                    console.log("REMOVE STATUS: " + _this.item.json.ta0feeder[i].multiassetlocci[k].ta0removeind);
                }
            }
            // Checking SO Types
            if (_this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN || _this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
                // Change ta0removeind to false
                _this.item.json.ta0feeder[i].multiassetlocci[r].ta0removedevice = false;
            }
            else if (_this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO || _this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER || _this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
                // Change ta0replaceind to false
                _this.item.json.ta0feeder[i].multiassetlocci[r].ta0replaceind = false;
            }
            _this.item.json.ta0feeder[i].multiassetlocci.splice(j, 1);
            _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
            _this.loadFeederDesign(_this.item.json.ta0feeder[i]);
        });
    };
    /**
     * Validation for Device Status and Meter Reading
     */
    ServiceExecutionPage.prototype.validation = function () {
        // Filtering for SO type
        var type = this.item.json.worktype;
        var feeder = this.item.json.ta0feeder;
        this.deviceList = [];
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST:
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR: {
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV:
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE: {
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
                                }
                                else {
                                    // Checking if device status "ZREM"
                                    if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                                        // Checking removal status is empty or not
                                        if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
                                            this.deviceList.push(multiassetlocci[k].assetnum);
                                        }
                                        else {
                                            console.log("Removal Status: Ok!");
                                        }
                                    }
                                    else {
                                        console.log("Device Status: Ok!");
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN:
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
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
                                }
                                else {
                                    // Checking if device status "ZREM"
                                    if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                                        // Checking removal status is empty or not
                                        if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
                                            this.deviceList.push(multiassetlocci[k].assetnum);
                                        }
                                        else {
                                            console.log("Removal Status: Ok!");
                                        }
                                    }
                                    else {
                                        console.log("Device Status: Ok!");
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER:
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR:
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO:
            case __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL: {
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
                                }
                                else {
                                    // Checking if device status "ZREM"
                                    if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                                        // Checking removal status is empty or not
                                        if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "") {
                                            this.deviceList.push(multiassetlocci[k].assetnum);
                                        }
                                        else {
                                            console.log("Removal Status: Ok!");
                                        }
                                    }
                                    else {
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
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
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
                    var replaceDevice = devices.filter(function (item) {
                        // Check new main meter
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                    });
                    var existingDevice = devices.filter(function (item) {
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
                    });
                    if (replaceDevice.length > 0) {
                        // Checking device voltage
                        for (var m = 0; m < replaceDevice.length; m++) {
                            if (replaceDevice[m].ta0devicevoltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Check new ct transformer
                                ct = devices.filter(function (item) {
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                });
                                if (ct.length < 3) {
                                    msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                    msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                }
                                else {
                                    if (existingDevice.length > 0) {
                                        // Checking device voltage
                                        for (var n = 0; n < existingDevice.length; n++) {
                                            if (existingDevice[n].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                // Reset ct, pt
                                                pt = [];
                                                // Checking if need to remove ct & pt
                                                pt = devices.filter(function (item) {
                                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === true);
                                                });
                                                if (pt.length < 3) {
                                                    msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                    msgBody.push("Voltage Transformer (PT) must be remove! <br>");
                                                }
                                                else {
                                                    fStatus.push({ "status": true });
                                                }
                                            }
                                            else {
                                                fStatus.push({ "status": true });
                                            }
                                        }
                                    }
                                    else {
                                        fStatus.push({ "status": true });
                                    }
                                }
                            }
                            else if (replaceDevice[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Check new ct transformer
                                ct = devices.filter(function (item) {
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                });
                                // Check new pt transformer
                                pt = devices.filter(function (item) {
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                });
                                if (ct.length === 0) {
                                    msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                    msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                }
                                else {
                                    fStatus.push({ "status": true });
                                }
                            }
                            else {
                                // Check indicator remove existing main meter
                                cm = devices.filter(function (item) {
                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                                });
                                // Check indicator remove existing ct transformer
                                ct = devices.filter(function (item) {
                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                                });
                                // Check indicator remove existing pt transformer
                                pt = devices.filter(function (item) {
                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                                });
                                if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                                    if (feeder[i].nFeederVoltage === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                        if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                        }
                                        else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Current Transformer (CT) is not remove! <br>");
                                        }
                                        else if (cm.length > 0 && ct.length === 0) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter is not remove! <br>");
                                        }
                                        else {
                                            fStatus.push({ "status": true });
                                        }
                                    }
                                    else if (feeder[i].nFeederVoltage > __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                        if (cm.length > 0 && ct.length < 3 && pt.length < 3) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                        }
                                        else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                        }
                                        else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                                        }
                                        else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter is not remove! <br>");
                                        }
                                        else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                        }
                                        else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                                        }
                                        else {
                                            fStatus.push({ "status": true });
                                        }
                                    }
                                    else {
                                        if (cm.length > 0 && ct.length <= 3) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                        }
                                        else if (cm.length === 0 && ct.length <= 3) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Current Transformer (CT) is not remove! <br>");
                                        }
                                        else if (cm.length > 0 && ct.length <= 3) {
                                            msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                            msgBody.push("Check Meter is not remove! <br>");
                                        }
                                        else {
                                            fStatus.push({ "status": true });
                                        }
                                    }
                                }
                            }
                        }
                        newDevice.push(replaceDevice);
                    }
                    else {
                        fStatus.push({ "status": true });
                    }
                }
            }
            var status = fStatus.filter(function (item) {
                return item.status === true;
            });
            if (status.length !== feeder.length) {
                for (var i = 0; i < msgBody.length; i++) {
                    msg = msg + msgTitle[i] + msgBody[i];
                }
                msg = msg + "</p>";
                // Display message error
                var alert_1 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: msg,
                    buttons: ["Close"]
                });
                alert_1.present();
            }
            else {
                // Display message error
                if (this.deviceList.length > 0) {
                    var list = "";
                    list = "<p>";
                    for (var i = 0; i < this.deviceList.length; i++) {
                        list = list + this.deviceList[i] + " - Missing Device Status<br>";
                    }
                    list = list + "</p>";
                    // Display message error
                    var alert_2 = this.alertCtrl.create({
                        title: "REMINDER",
                        message: list,
                        buttons: ["Close"]
                    });
                    alert_2.present();
                    return false;
                }
                else {
                    /** Validation Service Execution */
                    this.validationServiceExecution();
                    return true;
                }
            }
        }
        else {
            // Display message error
            if (this.deviceList.length > 0) {
                var list = "";
                list = "<p>";
                for (var i = 0; i < this.deviceList.length; i++) {
                    list = list + this.deviceList[i] + " - Missing Device Status<br>";
                }
                list = list + "</p>";
                // Display message error
                var alert_3 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: list,
                    buttons: ["Close"]
                });
                alert_3.present();
                return false;
            }
            else {
                /** Validation Service Execution */
                this.validationServiceExecution();
                return true;
            }
        }
    };
    ServiceExecutionPage.prototype.saveFeeder = function (item) {
        var _this = this;
        //check network
        console.log("saveFeeder");
        console.log(JSON.stringify(item));
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        // Validation
        if (this.validation()) {
            var itemRecord = {
                ta0feeder: []
            };
            itemRecord.ta0feeder;
            //itemRecord.ta0feeder = item.json.ta0feeder;
            console.log('item record :  0 before  :  ' + JSON.stringify(itemRecord));
            //itemRecord.multiassetlocci = null;
            console.log('item record :  0  after  :  ' + JSON.stringify(itemRecord));
            setTimeout(function () {
                _this;
                loading.onWillDismiss(function () {
                    _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                    _this.item.json.loc_ta0feeder_haveChange = true;
                    _this.gf.displayToast("Feeder Details updated.");
                    loading.dismiss();
                });
            }, 10000);
            /**
             * Reason   : Saving to local storage (json data).
             * Created  : 22-01-2019
             */
            this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                this.item.json.loc_ta0feeder_haveChange = true;
                this.gf.displayToast("Details updated locally");
                loading.dismiss();
            }
            else if ((__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                /**
                 * Description: Change old(swift) to new(objective-c) plugin.
                 * Edited: Alif (16.10.2019)
                 * old --> mobilesignalswift.getSignalStrength
                 * new --> cordova.plugins.MobileSignal.getSignalStrength
                 */
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        var itemList = [];
                        itemList.push(_this.item);
                        _this.jsonStore.syncUpActivitySingle(itemList).then(function (success) {
                            _this.gf.displayToast("Details updated successfully");
                            loading.dismiss();
                        }, function (failure) {
                            _this.gf.warningAlert("Failure", "Details updated failed" + JSON.stringify(failure), "Close");
                            loading.dismiss();
                        });
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                        _this.item.json.loc_ta0feeder_haveChange = true;
                        _this.gf.displayToast("Details updated locally");
                        loading.dismiss();
                    }
                });
            }
            else {
                var itemList = [];
                itemList.push(this.item);
                this.jsonStore.syncUpActivitySingle(itemList).then(function (success) {
                    _this.gf.displayToast("Details updated successfully");
                    loading.dismiss();
                }, function (failure) {
                    _this.gf.warningAlert("Failure", "Details updated failed" + JSON.stringify(failure), "Close");
                    loading.dismiss();
                });
            }
        }
        else {
            loading.dismiss();
        }
    };
    ServiceExecutionPage.prototype.openMeterRegisterInfoPage = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("MainMeterRegisterInfoPage", "");
    };
    /**
     * @deprecated
     * because of changing the feeder page design. refer below method openRegisterpage
     * @param device
     * @param feederIndex
     * @param multiAssetIndex
     */
    ServiceExecutionPage.prototype.openDataValidationPage = function (device, feederIndex, multiAssetIndex) {
        //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
        var feederDetails = this.item.json.ta0feeder[feederIndex];
        var modemVal = null;
        var simcardVal = null;
        for (var _i = 0, _a = feederDetails.multiassetlocci; _i < _a.length; _i++) {
            var multi = _a[_i];
            if (__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MODEM === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
                modemVal = multi.assetnum;
            }
            if (__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SIM_CARD === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
                simcardVal = multi.assetnum;
            }
            if (modemVal != null && simcardVal != null) {
                break;
            }
        }
        console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("RegisterDetailsPage", {
            paramObj: this.item,
            mLocci: device,
            fIndex: feederIndex,
            maIndex: multiAssetIndex,
            modem: modemVal,
            simcard: simcardVal
        });
    };
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
    ServiceExecutionPage.prototype.openRegisterDetails2 = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealRegisterDetailsPage", {
            paramObj: this.item
        });
    };
    // Open page for Seal N Sticker Testing only
    ServiceExecutionPage.prototype.openSealNSticker = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealSilNStickerInfoPage", {
            paramObj: this.item
        });
    };
    //Open Test Page Seal
    ServiceExecutionPage.prototype.openTestPageSeal = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealTestListPage", {
            paramObj: this.item
        });
    };
    ServiceExecutionPage.prototype.openRegisterPage = function (assetnum, feederIndex, multiAssetIndex, modemVal, simcardVal, modemIndex, simcardIndex, ctIndex, ptIndex) {
        var _this = this;
        var feederDetails = this.item.json.ta0feeder[feederIndex];
        var device = null;
        console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("RegisterDetailsPage", {
                paramObj: _this.item,
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
    };
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
    ServiceExecutionPage.prototype.openRegisterForAssetPage = function (feederIndex, feederSetDesign, regPageType) {
        //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
        var feederDetails = this.item.json.ta0feeder[feederIndex];
        var device = null;
        //console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("RegisterDetailsPage", {
            paramObj: this.item,
            fIndex: feederIndex,
            feederSet: feederSetDesign,
            regType: regPageType,
        });
    };
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
    ServiceExecutionPage.prototype.openMVHVSealRAS = function (feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealLpcMvhvRasPage", {
            fIndex: feederIndex,
            maIndex: multiAssetIndex,
            feederSet: feederSetDesign,
            meterType: meterType,
            versionType: versionType
        });
        console.log("MVHV_RAS_SEAL page open");
    };
    ServiceExecutionPage.prototype.openLpcTestListPage = function (feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            console.log("come in openLpcTestListPage");
            var feederDetails = _this.item.json.ta0feeder[feederIndex];
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            var deviceVoltage = 0;
            if ('N' === versionType) {
                deviceVoltage = feederSetDesign.nFeederVoltage;
            }
            else {
                deviceVoltage = feederSetDesign.eFeederVoltage;
            }
            newRootNav.push("LpcTestListPage", {
                paramObj: _this.item,
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
    };
    ServiceExecutionPage.prototype.openLpcMvhvInspectPage = function (i, j) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("LpcMvhvInspectPage", {
                paramObj: _this.item,
                fIndex: i,
                maIndex: j
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
        console.log("come outin LpcMvhvInspectionPage");
    };
    ServiceExecutionPage.prototype.openLpcLvInspectPage = function (i, j) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("LpcLvInspectPage", {
                paramObj: _this.item,
                fIndex: i,
                maIndex: j
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
        console.log("come outin LpcLvInspectionPage");
    };
    ServiceExecutionPage.prototype.openSilStickerInfoPage = function (i, j, t, feederSetDesign, versionType) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var deviceVoltage = 0;
            if ('N' === versionType) {
                deviceVoltage = feederSetDesign.nFeederVoltage;
            }
            else {
                deviceVoltage = feederSetDesign.eFeederVoltage;
            }
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SilStickerInfoPage", {
                paramObj: _this.item,
                fIndex: i,
                maIndex: j,
                alloType: t,
                versionType: versionType,
                deviceVoltage: deviceVoltage
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
    };
    ServiceExecutionPage.prototype.goToServiceDetailsPage = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("ServiceDetailsPage", this.item);
    };
    ServiceExecutionPage.prototype.openDailyMaintenanceReport = function (i, j, simIndex) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById('n4');
            newRootNav.push('DailyMaintenanceReport', {
                paramObj: _this.item,
                fIndex: i,
                maIndex: j,
                simIndex: simIndex
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
        console.log("open Maintaince Report");
    };
    // Created by Ameer (16/10/2018)
    ServiceExecutionPage.prototype.openOPCInspectionPage = function (i, j, deviceVoltage) {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("OpcTestInspectPage", {
            paramObj: this.item,
            fIndex: i,
            maIndex: j,
            deviceVoltage: deviceVoltage
        });
    };
    ServiceExecutionPage.prototype.goToAddDevicesPage = function (index, deviceVoltage) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            console.log('device voltage : ' + deviceVoltage);
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("AddDevicesPage", {
                paramObj: _this.item,
                paramIndex: index,
                deviceVoltage: deviceVoltage
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
    };
    ServiceExecutionPage.prototype.goToRemoveDevicesPage = function (index, deviceVoltage) {
        var _this = this;
        this.gf.setLoadingTimeout(1000);
        setTimeout(function () {
            console.log('device voltage : ' + deviceVoltage);
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("AddDevicesPage", {
                paramObj: _this.item,
                paramIndex: index,
                deviceVoltage: deviceVoltage
            });
        }, 500);
    };
    ServiceExecutionPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /**
    * Trigger AllocationType
    */
    ServiceExecutionPage.prototype.triggerAllocationType = function () {
        var type = this.item.json.worktype;
        var old_voltage = this.item.json.ta0installationvoltage;
        var new_voltage = this.item.json.ta0newvoltage;
        if (type === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || type === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || type === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
            if (old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) {
                this.item.json.loc_allocationtype_status = true;
            }
            else {
                this.item.json.loc_allocationtype_status = false;
            }
        }
        else {
            if ((old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) || (old_voltage <= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV)) {
                this.item.json.loc_allocationtype_status = true;
            }
            else {
                this.item.json.loc_allocationtype_status = false;
            }
        }
    };
    /**
     * Validaton Service Execution
     * Created : Muhd Alif Tajudin
     * Date    : 01/10/2018
     */
    ServiceExecutionPage.prototype.validationServiceExecution = function () {
        var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
        if (typeof (feeder) !== "undefined") {
            var pending = [];
            for (var i = 0; i < feeder.length; i++) {
                if (typeof (feeder[i].feederSetDesign) !== "undefined") {
                    /** Checking SO */
                    if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                        if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
                            if (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true) {
                                pending.push(feeder[i]);
                            }
                        }
                    }
                    else {
                        if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
                            if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                                pending.push(feeder[i]);
                            }
                        }
                        else if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
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
                    if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                        if (pending[i].feederSetDesign[0].nFeederStatus === false && pending[i].loc_haveNewDevice === true) {
                            message = message + "Please complete " + pending[i].description + " - " + pending[i].ta0feedercode + "!<br>";
                        }
                    }
                    else {
                        if (pending[i].feederSetDesign[0].eFeederStatus === false) {
                            message = message + "Please complete " + pending[i].description + " - " + pending[i].ta0feedercode + "!<br>";
                        }
                        else if (pending[i].feederSetDesign[0].nFeederStatus === false && pending[i].loc_haveNewDevice === true) {
                            message = message + "Please complete " + pending[i].description + " - " + pending[i].ta0feedercode + "!<br>";
                        }
                    }
                }
                message = message + "</p>";
                // Display message error
                var alert_4 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: message,
                    buttons: ["Close"]
                });
                alert_4.present();
            }
        }
    };
    // Refresh Header Details..
    // Edited: alif - 02-01-2019
    ServiceExecutionPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // Check dirty for the workorder..
        this.jsonStore.getDirtyCheck(this.item, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
            if (result > 0) {
                setTimeout(function () {
                    refresher.complete();
                    _this.gf.displayToast("Feeder details changed doesn't updated, can't refresh details...");
                }, 1000);
            }
            else {
                if (!_this.gv.testMobile) {
                    _this.requestWorkOrderServiceExecutionDetails();
                    refresher.complete();
                }
                else {
                    refresher.complete();
                    _this.gf.displayToast("No Network Connection to Sync data...");
                }
            }
        });
    };
    // Retrigger to server to get work order service execution details.
    ServiceExecutionPage.prototype.requestWorkOrderServiceExecutionDetails = function () {
        var _this = this;
        var wonum = JSON.parse(this.item.json.wonum);
        var respResult;
        var updatedDetails;
        // Start loading.
        this.gf.startLoading();
        this.dataService.fetchWorkOrderFeederDetails(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].DATA_FETCH_ASSIGNWORK, wonum).then(function (results) {
            setTimeout(function () {
                respResult = results;
                if (__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                    updatedDetails = JSON.parse(respResult.respObject);
                    updatedDetails = updatedDetails.workOrder[0].ta0feeder;
                    if (typeof (updatedDetails) !== "undefined" && updatedDetails !== null && updatedDetails !== '') {
                        // Reset List Device
                        _this.item.json.listDevice = [];
                        // Reset Controlling Device to empty.
                        _this.item.json.loc_controllingDeviceList = [];
                        _this.deviceDetails = {};
                        _this.tempFeederArry = updatedDetails;
                        _this.countArry = 0;
                        for (var _i = 0, updatedDetails_1 = updatedDetails; _i < updatedDetails_1.length; _i++) {
                            var feederArr = updatedDetails_1[_i];
                            _this.loadFeederDesign(feederArr);
                        }
                        _this.item.json.ta0feeder = updatedDetails;
                        _this.item.json.ta0feeder.sort(_this.gf.dynamicSort("description"));
                    }
                    else {
                        // Remove existing feeder
                        _this.item.json.ta0feeder = updatedDetails;
                    }
                    // Replace Updated Data in JSON
                    _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                    // this.gf.displayToast(respResult.description);
                }
                else {
                    _this.gf.displayToast(respResult.description);
                }
                // Clear loading and refresh pull down.
                _this.gf.stopLoading();
            }, 1000);
        });
    };
    ServiceExecutionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-service-execution",template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/service-execution/service-execution.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title> Service Execution</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="addFeeder()"\n      *ngIf="item.json.worktype === soTypes.ZIST || (item.json.worktype === soTypes.ZUDN && item.json.ta0newvoltage > 2)">\n      <button mode="md" ion-button icon-start round color="light" style="padding: 15px;">\n        <ion-icon name="md-add"></ion-icon>&nbsp; Add Feeder\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull down to download">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <span *ngFor="let feeder of item.json.ta0feeder; let i = index">\n    <ion-card>\n      <ion-list>\n        <span *ngIf="feeder._action != \'Delete\'">\n          <ion-list-header class="custom-list-top-header-color">\n            <ion-icon mode="md" name="arrow-dropdown" (click)="toggleSection(i)" *ngIf="feeder.open" item-start>\n            </ion-icon>\n            <ion-icon mode="md" name="arrow-dropright" (click)="toggleSection(i)" *ngIf="!feeder.open" item-start>\n            </ion-icon>\n            <ion-label (click)="toggleSection(i)" [ngClass]="feeder.loc_removeAllDevice ? \'strikethrough\' : \'\'">\n              {{ feeder.eFeederVoltage == \'01\' ? \'OPC\' :  feeder.eFeederVoltage == \'02\' ? \'OPC\' : feeder.eFeederVoltage == \'03\' ? \'LV\' : feeder.eFeederVoltage > \'03\' ? \'MVHV\' : item.json.ta0installationvoltage == \'01\' ? \'OPC\' : item.json.ta0installationvoltage == \'02\' ? \'OPC\' : item.json.ta0installationvoltage == \'03\' ? \'LV\' : item.json.ta0installationvoltage > \'03\' ? \'MVHV\' : \'-\' }}\n              [{{ feeder.eFeederVoltage || \'-\' }}]\n              <span *ngIf="feeder.nMeterSerialNum || feeder.eMeterSerialNum">\n                / {{ feeder.eMeterAllocationName || feeder.nMeterAllocationName }} -\n                {{ feeder.eMeterSerialNum || feeder.nMeterSerialNum }}\n              </span>\n            </ion-label>\n            <button ion-button mode="md" item-end\n              *ngIf="((item.json.worktype === soTypes.ZIST || item.json.worktype === soTypes.ZISR || (item.json.worktype === soTypes.ZUDN && feeder.ta0existing === false)) && !wolo1Freeze) && (gv.departmentCode === feeder.eFeederVoltage || item.json.worktype === soTypes.ZUDN || (feeder.eFeederVoltage >= 01 && gv.departmentCode === \'00\'))"\n              (click)="goToAddDevicesPage(i, feeder.eFeederVoltage)">\n              ADD DEVICES\n            </button>\n            <button ion-button mode="md" item-end\n              *ngIf="((item.json.worktype === soTypes.ZRMV || item.json.worktype === soTypes.ZRCE) && !wolo1Freeze) && (gv.departmentCode === feeder.eFeederVoltage || item.json.worktype === soTypes.ZUDN || (feeder.eFeederVoltage >= 01 && gv.departmentCode === \'00\'))"\n              (click)="goToRemoveDevicesPage(i, feeder.eFeederVoltage)">\n              REMOVE DEVICES\n            </button>\n            <button ion-button mode="md" item-end\n              *ngIf="((item.json.worktype === soTypes.ZUDN && feeder.ta0existing === true) || item.json.worktype === soTypes.ZRPC || item.json.worktype === soTypes.ZSRO || item.json.worktype === soTypes.ZCER || item.json.worktype === soTypes.ZINR || (item.json.worktype === soTypes.ZINL && !showAdHocError)) && (gv.departmentCode === feeder.eFeederVoltage || item.json.worktype === soTypes.ZUDN || (feeder.eFeederVoltage >= 01 && gv.departmentCode === \'00\'))"\n              (click)="goToRemoveDevicesPage(i, feeder.eFeederVoltage)">\n              REPLACE DEVICES\n            </button>\n            &nbsp;&nbsp;\n            <ion-icon style="padding-left: 12px;padding-right: 12px;" mode="md" name="trash" color="danger" item-end\n              *ngIf="(item.json.worktype === soTypes.ZIST && this.item.json.ta0sncode !== \'D101\') ||  ((item.json.worktype === soTypes.ZIST && this.item.json.ta0sncode === \'D101\' && feeder.ta0existing === false) || (item.json.worktype === soTypes.ZUDN && feeder.ta0existing === false)) && (gv.departmentCode === feeder.eFeederVoltage || item.json.worktype === soTypes.ZUDN || (feeder.eFeederVoltage >= 01 && gv.departmentCode === \'00\'))"\n              (click)="removeFeeder(i)">\n            </ion-icon>\n            <!-- <ion-toggle checked="false" item-end></ion-toggle> -->\n          </ion-list-header>\n\n          <span *ngIf="feeder.multiassetlocci && feeder.open">\n            <span *ngFor="let device of feeder.feederSetDesign; let j = index">\n              <span *ngIf="!device.children">\n                <ion-list>\n                  <span *ngIf="device.soWorkType !== soTypes.ZIST">\n                    <ion-list-header class="custom-list-old-header-color">\n                      <ion-icon name="remove-circle-outline" item-start></ion-icon>\n                      Existing Meter Details - {{ feeder.eFeederVoltage }}\n                      <ion-icon name="checkmark-circle" item-end\n                        [ngClass]="(device.eFeederStatus === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n                    </ion-list-header>\n                    <ion-row class="custom-list-header-bottom custom-list-header content-background-old">\n                      <ion-col col-md-6 class="custom-border-right">\n                        <!-- Start: Main Section -->\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>{{ device.eMeterAllocationType == \'90\' ? \'Main Meter\' : device.eMeterAllocationType == \'91\' ? \'Feeder Meter\' : device.eMeterAllocationType == \'94\' ? \'Sub Meter\' : device.eMeterAllocationType == \'96\' ? \'Sub Feeder Meter\' : \'Main Meter\' }}:</strong>\n                          </ion-label>\n                          <ion-label>\n                            <h2 [ngClass]="(device.eMeterRemoveInd) ? \'strikethrough\' : \'\'">\n                              {{ device.eMeterSerialNum || \'-\'}} / {{ device.eMeterCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Modem:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2 [ngClass]="(device.eMeterModemRemoveInd) ? \'strikethrough\' : \'\'">\n                              {{ device.eMeterModemSerialNum || \'-\'}} / {{ device.eMeterModemCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Simcard:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2 [ngClass]="(device.eMeterSimRemoveInd) ? \'strikethrough\' : \'\'">\n                              {{ device.eMeterSimSerialNum || \'-\' }} / {{ device.eMeterSimCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n                      </ion-col>\n\n                      <!-- End: Main Section -->\n\n                      <!-- Start: Check Section -->\n                      <ion-col col-md-6 class="custom-border-right" *ngIf="device.eFeederVoltage <= 2"></ion-col>\n                      <ion-col col-md-6\n                        *ngIf="device.eFeederVoltage > 2 || (item.json.worktype === soTypes.ZMMR && feeder.eFeederVoltage > 2 && device.eCheckSerialNum)"\n                        class="content-background-old">\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>{{ device.eCheckAllocationType == \'92\' ? \'Check Meter\' : device.eCheckAllocationType == \'93\' ? \'Check Feeder\' : device.eCheckAllocationType == \'95\' ? \'Check Sub Meter\' : device.eCheckAllocationType == \'97\' ? \'Check Sub Feeder\' : \'Check Meter\' }}:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2 [ngClass]="(device.eCheckRemoveInd) ? \'strikethrough\' : \'\'">\n                              {{ device.eCheckSerialNum || \'-\' }} / {{ device.eCheckCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Modem:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2 [ngClass]="(device.eCheckModemRemoveInd) ? \'strikethrough\' : \'\'">\n                              {{ device.eCheckModemSerialNum || \'-\' }} / {{ device.eCheckModemCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Simcard:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2 [ngClass]="(device.eCheckSimRemoveInd) ? \'strikethrough\' : \'\'">\n                              {{ device.eCheckSimSerialNum || \'-\' }} / {{ device.eCheckSimCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <!-- End: Check Section -->\n\n                      <!-- Start: Main Section (Button) -->\n                      <!-- <ion-col col-md-6 class="custom-border-right"\n                        *ngIf="device.eMeterSerialNum === \'undefined\' && item.json.worktype === soTypes.ZMMR">\n                      </ion-col> -->\n                      <ion-col col-md-6 class="custom-border-right"\n                        *ngIf="gv.departmentCode >= device.eFeederVoltage || (item.json.worktype === soTypes.ZMMR && device.eMeterSerialNum !== \'undefined\') || item.json.worktype === soTypes.ZUDN || (device.eFeederVoltage >= 01 && gv.departmentCode === \'00\')">\n                        <ion-col col-md-2 *ngIf="device.eMeterSerialNum && item.json.worktype === soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openRegisterPage(device.eMeter, i, device.eMeterIndex, device.eMeterModem, device.eMeterSim, device.eMeterModemIndex, device.eMeterSimIndex)"\n                            [ngClass]="(device.eMeterRegisterStatus !== \'N\' && device.eMeterModemRegisterStatus !== \'N\' && device.eMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="device.eMeter && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR)">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openRegisterPage(device.eMeter, i, device.eMeterIndex, device.eMeterModem, device.eMeterSim, device.eMeterModemIndex, device.eMeterSimIndex)"\n                            [ngClass]="(device.eMeterRegisterStatus !== \'N\' && device.eMeterModemRegisterStatus !== \'N\' && device.eMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <!-- CR002 Crimpless Seal-->\n                        <!--\n                        <ion-col col-md-2 *ngIf="device.eMeter && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZRMV) && (device.eFeederVoltage > dCons.VOL_LEVEL_OPC_3PH)">\n                        -->\n                        <ion-col col-md-2 *ngIf="device.eMeter && item.json.worktype !== soTypes.ZMMR && (device.eFeederVoltage > dCons.VOL_LEVEL_OPC_3PH)">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openSilStickerInfoPage(i, device.eMeterIndex, device.eMeterAllocationType,  device, \'E\')"\n                            [ngClass]="(device.eMeterSilStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="ribbon" item-start></ion-icon>\n                            S&S\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="((item.json.worktype !== soTypes.ZINL && item.json.worktype !== soTypes.ZINR) && (item.json.worktype !== soTypes.ZISR) && (item.json.worktype !== soTypes.ZRCE) && ( device.eMeter || device.eMeterModem )) && item.json.worktype !== soTypes.ZMMR && item.json.worktype !== soTypes.ZRMV">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openLpcTestListPage(i, device.eMeterIndex,device,\'main\',\'E\')"\n                            [ngClass]="(device.eMeterTestStatus !== \'N\' && device.eMeterModemTestStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            Test\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === soTypes.ZINL && (device.eFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V) && device.eMeter) && item.json.worktype !== soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openLpcLvInspectPage(i, device.eMeterIndex)"\n                            [ngClass]="(device.eMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            LV Insp\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === soTypes.ZINL && (device.eFeederVoltage > 3 ) && device.eMeter)  && item.json.worktype !== soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openLpcMvhvInspectPage(i, device.eMeterIndex)"\n                            [ngClass]="(device.eMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            MVHV Insp\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === (soTypes.ZINL||soTypes.ZINR) && (device.eFeederVoltage <= dCons.VOL_LEVEL_OPC_3PH) && device.eMeter)">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openOPCInspectionPage(i, device.eMeterIndex, device.eFeederVoltage)"\n                            [ngClass]="(device.eMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            OPC Insp\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === soTypes.ZINR && device.eMeter)  && item.json.worktype !== soTypes.ZMMR && device.eMeterModemIndex !== undefined">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openDailyMaintenanceReport(i, device.eMeterModemIndex, device.eMeterSimIndex)"\n                            [ngClass]="(device.eMeterModemTestStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            CE Insp\n                          </button>\n                        </ion-col>\n                      </ion-col>\n                      <!-- End: Main Section (Button) -->\n\n                      <!-- Start: Check Section (Button) -->\n                      <ion-col col-md-6\n                        *ngIf="gv.departmentCode === device.eFeederVoltage || (item.json.worktype === soTypes.ZMMR && device.eCheck !== \'undefined\') || item.json.worktype === soTypes.ZUDN || (device.eFeederVoltage >= 01 && gv.departmentCode === \'00\')">\n                        <ion-col col-md-2 *ngIf="device.eCheck && item.json.worktype === soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openRegisterPage(device.eCheck, i, device.eCheckIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex)"\n                            [ngClass]="(device.eCheckRegisterStatus !== \'N\'  && device.eCheckModemRegisterStatus !== \'N\' && device.eCheckSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="device.eCheck && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR)">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openRegisterPage(device.eCheck, i, device.eCheckIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex)"\n                            [ngClass]="(device.eCheckRegisterStatus !== \'N\' && device.eCheckModemRegisterStatus !== \'N\' && device.eCheckSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <!-- CR002 Crimpless Seal-->\n                        <!--\n                        <ion-col col-md-2 *ngIf="device.eCheck && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZRMV)">\n                        -->\n                        <ion-col col-md-2 *ngIf="device.eCheck && item.json.worktype !== soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openSilStickerInfoPage(i, device.eCheckIndex, device.eCheckAllocationType,  device, \'E\')"\n                            [ngClass]="(device.eCheckSilStatus !== \'N\') ? \'completeColor\' : \'\'">\n                            <ion-icon name="ribbon" item-start></ion-icon>\n                            S&S\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="((item.json.worktype !== soTypes.ZINL && item.json.worktype !== soTypes.ZINR) && (item.json.worktype !== soTypes.ZISR) && (item.json.worktype !== soTypes.ZRCE) && (device.eCheck || device.eCheckModem)) && item.json.worktype !== soTypes.ZMMR && item.json.worktype !== soTypes.ZRMV">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openLpcTestListPage(i, device.eCheckIndex,  device, \'check\',\'E\')"\n                            [ngClass]="(device.eCheckTestStatus !== \'N\'  && device.eCheckModemTestStatus !== \'N\' ) ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            Test\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === soTypes.ZINL && (device.eFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V) &&  device.eCheck) && item.json.worktype !== soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openLpcLvInspectPage(i, device.eCheckIndex)"\n                            [ngClass]="(device.eCheckTestStatus !== \'N\'  && device.eCheckModemTestStatus !== \'N\' ) ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            LV Insp\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === soTypes.ZINL && (device.eFeederVoltage > 3) &&  device.eCheck) && item.json.worktype !== soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openLpcMvhvInspectPage(i, device.eCheckIndex)"\n                            [ngClass]="(device.eCheckTestStatus !== \'N\'  && device.eCheckModemTestStatus !== \'N\' ) ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            MVHV Insp\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(item.json.worktype === soTypes.ZINR && device.eCheck)  && item.json.worktype !== soTypes.ZMMR && device.eCheckModemIndex !== undefined">\n                          <button ion-button icon-start class="custom-button-1"\n                            (click)="openDailyMaintenanceReport(i, device.eCheckModemIndex, device.eCheckSimIndex)"\n                            [ngClass]="(device.eCheckModemTestStatus !== \'N\' ) ? \'completeColor\' : \'\'">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            CE Insp\n                          </button>\n                        </ion-col>\n                      </ion-col>\n                      <!-- Start: Check Section (Button) -->\n                    </ion-row>\n                  </span>\n\n                  <div class="custom-list-header-bottom content-background-old"\n                    *ngIf="device.soWorkType !== soTypes.ZIST && device.eFeederVoltage > 2">\n                    <ion-list-header class="custom-list-old-header-color">\n                      <ion-icon name="remove-circle-outline" item-start></ion-icon>\n                      Existing Current Transformer Details - {{ feeder.eFeederVoltage }}\n                    </ion-list-header>\n\n                    <ion-row align-items-center *ngIf="device.eFeederVoltage > 2" class="content-background-old">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>CT</strong></ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>R</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>Y</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>B</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-1 text-right>\n                        <ion-icon name="checkmark-circle" item-end\n                          [ngClass]="(device.eMeterCtRRegisterStatus !== \'N\' && device.eMeterCtYRegisterStatus !== \'N\' && device.eMeterCtBRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-item>\n                    </ion-row>\n\n                    <ion-row *ngIf="device.eFeederVoltage > 2" class="content-background-old">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>Serial No.</strong></ion-label>\n                      </ion-item>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="[(device.eMeterCtRRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterCtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']"\n                        (click)="(device.eMeterCtR == \'undefined\' || device.eMeterCtR == \'\' || device.eMeterCtR == null) ? \'\' : openRegisterPage(device.eMeterCtR, i, device.eMeterCtRIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex, device.eMeterCtRIndex, \'\')">\n                        <h2>{{ device.eMeterCtRSerialNum || \'-\' }} / {{ device.eMeterCtRCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="[(device.eMeterCtYRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterCtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']"\n                        (click)="(device.eMeterCtY == \'undefined\' || device.eMeterCtY == \'\' || device.eMeterCtY == null) ? \'\' : openRegisterPage(device.eMeterCtY, i, device.eMeterCtYIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex, device.eMeterCtYIndex, \'\')">\n                        <h2>{{ device.eMeterCtYSerialNum || \'-\' }} / {{ device.eMeterCtYCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="[(device.eMeterCtBRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterCtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']"\n                        (click)="(device.eMeterCtB==\'undefined\' || device.eMeterCtB==\'\' || device.eMeterCtB==null) ? \'\' : openRegisterPage(device.eMeterCtB, i, device.eMeterCtBIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex, device.eMeterCtBIndex, \'\' )">\n                        <h2>{{ device.eMeterCtBSerialNum || \'-\' }} / {{ device.eMeterCtBCtrl || \'-\' }}</h2>\n                      </button>\n                    </ion-row>\n\n                    <ion-row align-items-center *ngIf="device.eFeederVoltage > 3" class="content-background-old">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>PT</strong></ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>R</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>Y</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>B</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-1 text-right>\n                        <ion-icon name="checkmark-circle" item-end\n                          [ngClass]="(device.eMeterPtRRegisterStatus !== \'N\' && device.eMeterPtYRegisterStatus !== \'N\' && device.eMeterPtBRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-item>\n                    </ion-row>\n\n                    <ion-row *ngIf="device.eFeederVoltage > 3" class="content-background-old">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>Serial No.</strong></ion-label>\n                      </ion-item>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="[(device.eMeterPtRRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterPtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']"\n                        (click)="(device.eMeterPtR == \'undefined\' || device.eMeterPtR == \'\' || device.eMeterPtR == null) ? \'\' : openRegisterPage(device.eMeterPtR, i, device.eMeterPtRIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex, \'\', device.eMeterPtRIndex)">\n                        <h2>{{ device.eMeterPtRSerialNum || \'-\' }} / {{ device.eMeterPtRCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="[(device.eMeterPtYRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterPtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']"\n                        (click)="(device.eMeterPtY == \'undefined\' || device.eMeterPtY == \'\' || device.eMeterPtY == null) ? \'\' : openRegisterPage(device.eMeterPtY, i, device.eMeterPtYIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex, \'\', device.eMeterPtYIndex)">\n                        <h2>{{ device.eMeterPtYSerialNum || \'-\' }} / {{ device.eMeterPtYCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="[(device.eMeterPtBRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterPtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']"\n                        (click)="(device.eMeterPtB == \'undefined\' || device.eMeterPtB == \'\' || device.eMeterPtB == null) ? \'\' : openRegisterPage(device.eMeterPtB, i, device.eMeterPtBIndex, device.eCheckModem, device.eCheckSim, device.eCheckModemIndex, device.eCheckSimIndex, \'\', device.eMeterPtBIndex)">\n                        <h2>{{ device.eMeterPtBSerialNum || \'-\' }} / {{ device.eMeterPtBCtrl || \'-\' }}</h2>\n                      </button>\n                    </ion-row>\n                  </div>\n\n                  <span *ngIf="feeder.loc_haveNewDevice">\n                    <ion-list-header class="custom-list-new-header-color">\n                      <ion-icon name="swap" item-start></ion-icon>\n                      <span\n                        *ngIf="device.soWorkType === soTypes.ZSRO || device.soWorkType === soTypes.ZRPM || device.soWorkType === soTypes.ZCER || device.soWorkType === soTypes.ZINL || device.soWorkType === soTypes.ZISR || device.soWorkType === soTypes.ZRCE || device.soWorkType === soTypes.ZINR">\n                        Replace New Device - {{ gv.departmentCode }} : {{ device.nFeederVoltage }}\n                      </span>\n                      <span\n                        *ngIf="device.soWorkType === soTypes.ZIST || device.soWorkType === soTypes.ZUDN || device.soWorkType === soTypes.ZRPC">\n                        Install New Device - {{ device.nFeederVoltage }}\n                      </span>\n                      <ion-icon name="checkmark-circle" item-end\n                        [ngClass]="(device.nFeederStatus === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n                    </ion-list-header>\n\n                    <ion-row class="content-background-new">\n                      <!-- Start: Main Section -->\n                      <ion-col col-md-6 class="custom-border-right">\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>{{ device.nMeterAllocationType == \'90\' ? \'Main Meter\' : device.nMeterAllocationType == \'91\' ? \'Feeder Meter\' : device.nMeterAllocationType == \'94\' ? \'Sub Meter\' : device.nMeterAllocationType == \'96\' ? \'Sub Feeder Meter\' : \'Main Meter\' }}:</strong>\n                          </ion-label>\n                          <ion-label>\n                            <h2>{{ device.nMeterSerialNum || \'-\'}} / {{ device.nMeterCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Modem:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2>{{ device.nMeterModemSerialNum || \'-\' }} / {{ device.nMeterModemCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Simcard:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2>{{ device.nMeterSimSerialNum || \'-\' }} / {{ device.nMeterSimCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <!-- End: Main Section -->\n                      <!-- Start: Check Section -->\n                      <ion-col col-md-6 class="content-background-new">\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>{{ device.nCheckAllocationType == \'92\' ? \'Check Meter\' : device.nCheckAllocationType == \'93\' ? \'Check Feeder\' : device.nCheckAllocationType == \'95\' ? \'Check Sub Meter\' : device.nCheckAllocationType == \'97\' ? \'Check Sub Feeder\' : \'Check Meter\' }}:</strong>\n                          </ion-label>\n                          <ion-label>\n                            <h2>{{ device.nCheckSerialNum || \'-\'}} / {{ device.nCheckCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Modem:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2>{{ device.nCheckModemSerialNum || \'-\' }} / {{ device.nCheckModemCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n\n                        <ion-item style="background: transparent;">\n                          <ion-label col-md-4 text-wrap>\n                            <strong>Simcard:</strong>\n                          </ion-label>\n                          <ion-label text-wrap>\n                            <h2>{{ device.nCheckSimSerialNum || \'-\' }} / {{ device.nCheckSimCtrl || \'-\' }}</h2>\n                          </ion-label>\n                        </ion-item>\n                      </ion-col>\n                      <!-- End: Check Section -->\n                      <ion-col col-md-6 class="custom-border-right"\n                        *ngIf="gv.departmentCode === device.nFeederVoltage || item.json.worktype === soTypes.ZUDN || (feeder.nFeederVoltage >= 00 && gv.departmentCode === \'00\')">\n                        <ion-col col-md-2\n                          *ngIf="(device.nMeter != null || device.nMeterSim != null || device.nMeterModem != null) && item.json.worktype === soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nMeterRegisterStatus !== \'N\' && device.nMeterModemRegisterStatus !== \'N\' && device.nMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openRegisterPage(device.nMeter, i, device.nMeterIndex, device.nMeterModem, device.nMeterSim, device.nMeterModemIndex, device.nMeterSimIndex)">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf=" (device.nMeter != null || device.nMeterSim != null || device.nMeterModem != null) && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR && item.json.worktype !== soTypes.ZINR)">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nMeterRegisterStatus !== \'N\' && device.nMeterModemRegisterStatus !== \'N\' && device.nMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openRegisterPage(device.nMeter, i, device.nMeterIndex, device.nMeterModem, device.nMeterSim, device.nMeterModemIndex, device.nMeterSimIndex)">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(device.nMeter != null || device.nMeterSim !=null || device.nMeterModem !=null) && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR && item.json.worktype !== soTypes.ZINR)">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nMeterSilStatus !== \'N\' ) ? \'completeColor\' : \'\'"\n                            (click)="openSilStickerInfoPage(i, device.nMeterIndex, device.nMeterAllocationType, device, \'N\')">\n                            <ion-icon name="ribbon" item-start></ion-icon>\n                            S&S\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(device.nMeter || device.nMeterModem) && item.json.worktype !== soTypes.ZMMR && item.json.worktype !== soTypes.ZRMV">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nMeterTestStatus !== \'N\' && device.nMeterModemTestStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openLpcTestListPage(i, device.nMeterIndex, device,\'main\',\'N\')">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            Test\n                          </button>\n                        </ion-col>\n                      </ion-col>\n                      <ion-col col-md-6\n                        *ngIf="gv.departmentCode === device.nFeederVoltage || item.json.worktype === soTypes.ZUDN || (feeder.nFeederVoltage >= 00 && gv.departmentCode === \'00\')">\n                        <ion-col col-md-2\n                          *ngIf="(device.nCheckSim != null ||device.nCheckModem != null ||device.nCheck != null) && item.json.worktype === soTypes.ZMMR">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nCheckRegisterStatus !== \'N\' && device.nCheckModemRegisterStatus !== \'N\' && device.nCheckSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openRegisterPage(device.nCheck, i, device.nCheckIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex)">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(device.nCheckSim != null ||device.nCheckModem != null ||device.nCheck != null) && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR && item.json.worktype !== soTypes.ZINR)">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nCheckRegisterStatus !== \'N\' && device.nCheckModemRegisterStatus !== \'N\' && device.nCheckSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openRegisterPage(device.nCheck, i, device.nCheckIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex)">\n                            <ion-icon name="information-circle" item-start></ion-icon>\n                            Info\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(device.nCheckSim != null ||device.nCheckModem != null ||device.nCheck != null) && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR && item.json.worktype !== soTypes.ZINR)">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nCheckSilStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openSilStickerInfoPage(i, device.nCheckIndex, device.nCheckAllocationType,  device, \'N\')">\n                            <ion-icon name="ribbon" item-start></ion-icon>\n                            S&S\n                          </button>\n                        </ion-col>\n                        <ion-col col-md-2\n                          *ngIf="(device.nCheck || device.nCheckModem) && item.json.worktype !== soTypes.ZMMR && item.json.worktype !== soTypes.ZRMV">\n                          <button ion-button icon-start class="custom-button-1"\n                            [ngClass]="(device.nCheckTestStatus !== \'N\'  && device.nCheckModemTestStatus !== \'N\' ) ? \'completeColor\' : \'\'"\n                            (click)="openLpcTestListPage(i, device.nCheckIndex, device,\'check\',\'N\')">\n                            <ion-icon name="flask" item-start></ion-icon>\n                            Test\n                          </button>\n                        </ion-col>\n                      </ion-col>\n                    </ion-row>\n                  </span>\n\n                  <div class="custom-list-header-bottom custom-list-header"\n                    *ngIf="feeder.loc_haveNewDevice && device.nFeederVoltage > 2" class="custom-list-new-header-color">\n                    <ion-list-header class="custom-list-new-header-color">\n                      <ion-icon name="swap" item-start></ion-icon>\n                      Installation Current Transformer Details\n                    </ion-list-header>\n\n                    <ion-row align-items-center *ngIf="device.nFeederVoltage > 2" class="content-background-new">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>CT</strong></ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>R</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>Y</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>B</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-1 text-right>\n                        <ion-icon name="checkmark-circle" item-end\n                          [ngClass]="(device.nMeterCtRRegisterStatus !== \'N\' && device.nMeterCtRRegisterStatus !== \'N\' && device.nMeterCtRRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-item>\n                    </ion-row>\n\n                    <ion-row *ngIf="device.nFeederVoltage > 2" class="content-background-new"\n                      style="padding-bottom: 10px;">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>Serial No.</strong></ion-label>\n                      </ion-item>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="(device.nMeterCtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                        (click)="(device.nMeterCtR == \'undefined\' || device.nMeterCtR == \'\' || device.nMeterCtR == null) ? \'\' : openRegisterPage(device.CtR, i, device.nMeterCtRIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtRIndex, \'\')">\n                        <h2>{{ device.nMeterCtRSerialNum || \'-\' }} / {{ device.nMeterCtRCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="(device.nMeterCtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                        (click)="(device.nMeterCtY == \'undefined\' || device.nMeterCtY == \'\' || device.nMeterCtY == null) ? \'\' : openRegisterPage(device.CtY, i, device.nMeterCtYIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtYIndex, \'\')">\n                        <h2>{{ device.nMeterCtYSerialNum || \'-\' }} / {{ device.nMeterCtYCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="(device.nMeterCtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                        (click)="(device.nMeterCtB == \'undefined\' || device.nMeterCtB == \'\' || device.nMeterCtB == null) ? \'\' : openRegisterPage(device.CtB, i, device.nMeterCtBIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtBIndex, \'\')">\n                        <h2>{{ device.nMeterCtBSerialNum || \'-\' }} / {{ device.nMeterCtBCtrl || \'-\' }}</h2>\n                      </button>\n                    </ion-row>\n\n                    <ion-row align-items-center *ngIf="device.nFeederVoltage > 3" class="content-background-new"\n                      style="padding-bottom: 10px;">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>PT</strong></ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>R</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>Y</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-3>\n                        <ion-label>B</ion-label>\n                      </ion-item>\n                      <ion-item style="background: transparent;" col-md-1 text-right>\n                        <ion-icon name="checkmark-circle" item-end\n                          [ngClass]="(device.nMeterPtRRegisterStatus !== \'N\' && device.nMeterPtRRegisterStatus !== \'N\' && device.nMeterPtRRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-item>\n                    </ion-row>\n\n                    <ion-row *ngIf="device.nFeederVoltage > 3" class="content-background-new"\n                      style="padding-bottom: 10px;">\n                      <ion-item style="background: transparent;" col-md-2 no-lines>\n                        <ion-label><strong>Serial No.</strong></ion-label>\n                      </ion-item>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="(device.nMeterPtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                        (click)="(device.nMeterPtR == \'undefined\' || device.nMeterPtR == \'\' || device.nMeterPtR == null) ? \'\' : openRegisterPage(device.PtR, i, device.nMeterPtRIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtRIndex, device.nMeterPtRIndex)">\n                        <h2>{{ device.nMeterPtRSerialNum || \'-\' }} / {{ device.nMeterPtRCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="(device.nMeterPtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                        (click)="(device.nMeterPtY == \'undefined\' || device.nMeterPtY == \'\' || device.nMeterPtY == null) ? \'\' : openRegisterPage(device.PtY, i, device.nMeterPtYIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtRIndex, device.nMeterPtYIndex)">\n                        <h2>{{ device.nMeterPtYSerialNum || \'-\' }} / {{ device.nMeterPtYCtrl || \'-\' }}</h2>\n                      </button>\n                      <button ion-item color="primary" class="custom-button" col-md-3 detail-none text-center text-wrap\n                        [ngClass]="(device.nMeterPtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                        (click)="(device.nMeterPtB == \'undefined\' || device.nMeterPtB == \'\' || device.nMeterPtB == null) ? \'\' : openRegisterPage(device.PtB, i, device.nMeterPtBIndex, device.nCheckModem, device.nCheckSim, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtRIndex, device.nMeterPtBIndex)">\n                        <h2>{{ device.nMeterPtBSerialNum || \'-\' }} / {{ device.nMeterPtBCtrl || \'-\' }}</h2>\n                      </button>\n                    </ion-row>\n                  </div>\n                </ion-list>\n              </span>\n            </span>\n          </span>\n\n          <span *ngIf="!feeder.multiassetlocci && feeder.open">\n            <ion-item>\n              <ion-label>No Device Added</ion-label>\n            </ion-item>\n          </span>\n        </span>\n      </ion-list>\n    </ion-card>\n  </span>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveFeeder(item)">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Done\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/service-execution/service-execution.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_12__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], ServiceExecutionPage);
    return ServiceExecutionPage;
}());

//# sourceMappingURL=service-execution.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceExecutionPageModule", function() { return ServiceExecutionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_execution__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_function__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceExecutionPageModule = /** @class */ (function () {
    function ServiceExecutionPageModule() {
    }
    ServiceExecutionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service_execution__["a" /* ServiceExecutionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__service_execution__["a" /* ServiceExecutionPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_common_global_function__["a" /* GlobalFunction */],
            ]
        })
    ], ServiceExecutionPageModule);
    return ServiceExecutionPageModule;
}());

//# sourceMappingURL=service-execution.module.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiAssetLocci; });
var MultiAssetLocci = /** @class */ (function () {
    function MultiAssetLocci() {
        this.ta0existingassets = false;
        this.loc_validate = false;
        this.ta0registerstatus = 'N';
        this.ta0testingstatus = 'N';
        this.ta0silstickerstatus = 'N';
        this.loc_ta0registers_completed = false;
        this.loc_ta0testings_flag = false;
        this.loc_ta0silStickers_flag = false;
        this.loc_ta0registers_haveChange = false;
        this.loc_ta0testings_haveChange = false;
        this.loc_ta0silStickers_haveChange = false;
    }
    return MultiAssetLocci;
}());

//# sourceMappingURL=MultiAssetLocci.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeederSetDesign; });
var FeederSetDesign = /** @class */ (function () {
    function FeederSetDesign() {
        this.nFeederStatus = false;
        this.eFeederStatus = false;
        this.nMeterFunctionClass = '';
        this.nMeterRegisterStatus = 'Y';
        this.nMeterSilStatus = 'Y';
        this.nMeterTestStatus = 'Y';
        this.nMeterModemRegisterStatus = 'Y';
        this.nMeterModemTestStatus = 'Y';
        this.nMeterSimRegisterStatus = 'Y';
        this.nMeterSimTestStatus = 'Y';
        this.nMainCommRegisterStatus = 'Y';
        this.nMainCommTestStatus = 'Y';
        this.nCheckFunctionClass = '';
        this.nCheckRegisterStatus = 'Y';
        this.nCheckSilStatus = 'Y';
        this.nCheckTestStatus = 'Y';
        this.nCheckModemRegisterStatus = 'Y';
        this.nCheckModemTestStatus = 'Y';
        this.nCheckSimRegisterStatus = 'Y';
        this.nCheckSimTestStatus = 'Y';
        this.nCheckCommRegisterStatus = 'Y';
        this.nCheckCommTestStatus = 'Y';
        this.nMeterCtRRegisterStatus = 'Y';
        this.nMeterCtYRegisterStatus = 'Y';
        this.nMeterCtBRegisterStatus = 'Y';
        this.nMeterPtRRegisterStatus = 'Y';
        this.nMeterPtRInstallInd = 'Y';
        this.nMeterPtYRegisterStatus = 'Y';
        this.nMeterPtBRegisterStatus = 'Y';
        this.eMeterFunctionClass = '';
        this.eMeterRegisterStatus = 'Y';
        this.eMeterSilStatus = 'Y';
        this.eMeterTestStatus = 'Y';
        this.eMeterModemRegisterStatus = 'Y';
        this.eMeterModemTestStatus = 'Y';
        this.eMeterSimRegisterStatus = 'Y';
        this.eMeterSimTestStatus = 'Y';
        this.eMainCommRegisterStatus = 'Y';
        this.eMainCommTestStatus = 'Y';
        this.eCheckFunctionClass = '';
        this.eCheckRegisterStatus = 'Y';
        this.eCheckSilStatus = 'Y';
        this.eCheckTestStatus = 'Y';
        this.eCheckModemRegisterStatus = 'Y';
        this.eCheckModemTestStatus = 'Y';
        this.eCheckSimRegisterStatus = 'Y';
        this.eCheckSimTestStatus = 'Y';
        this.eCheckCommRegisterStatus = 'Y';
        this.eCheckCommTestStatus = 'Y';
        this.eMeterCtRRegisterStatus = 'Y';
        this.eMeterCtYRegisterStatus = 'Y';
        this.eMeterCtBRegisterStatus = 'Y';
        this.eMeterPtRRegisterStatus = 'Y';
        this.eMeterPtYRegisterStatus = 'Y';
        this.eMeterPtBRegisterStatus = 'Y';
    }
    return FeederSetDesign;
}());

//# sourceMappingURL=feederSetDesign.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeederDetails; });
//import { Asset } from './Asset';
var FeederDetails = /** @class */ (function () {
    function FeederDetails() {
        this.loc_createCT = false;
        this.loc_haveNewDevice = false;
        /*
         tnb_feeder: string;
          _rowstamp: any;
          orgid: string;
          tnb_devicedetail_collectionref: string;
          tnb_feederid: any;
          localref: string;
          href: string;
          multiAssetLocci: Array<MultiAssetLocci>;
          tnb_devicedetail: Array<DeviceDetails>;
          */
        // local variable.
        this.loc_multiassetlocci_haveChange = false;
    }
    return FeederDetails;
}());

//# sourceMappingURL=FeederDetails.js.map

/***/ })

});
//# sourceMappingURL=9.js.map