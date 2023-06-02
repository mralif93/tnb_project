webpackJsonp([10],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealServiceExecutionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_FeederDetails__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_MultiAssetLocci__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_json_store_handler_json_store_handler__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pojo_design_feederSetDesign__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_app_menu_controller__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















__WEBPACK_IMPORTED_MODULE_14_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_15_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the SealServiceExecutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealServiceExecutionPage = /** @class */ (function () {
    function SealServiceExecutionPage(alertCtrl, navCtrl, appCtrl, params, http, toastCtrl, jsonStore, dataService, gf, gv, loadingCtrl, jsonHandler, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.jsonStore = jsonStore;
        this.dataService = dataService;
        this.gf = gf;
        this.gv = gv;
        this.loadingCtrl = loadingCtrl;
        this.jsonHandler = jsonHandler;
        this.menuCtrl = menuCtrl;
        this.soTypes = __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.dCons = __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        this.functClass = __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */];
        this.feederSetArray = [];
        this.feederDetails = null;
        this.feederArray = new Array();
        this.multiAssetLocci = null;
        this.multiAssetLocciArray = null;
        this.validateTest = false;
        this.validateSilSticker = false;
        this.showAdHocError = false;
        this.wolo1Freeze = false;
        // Variables [ZUDN]
        this.listRemoveDevice = [];
        // Variables Checking Device Status
        this.deviceList = [];
        console.log("Inside SealServiceExecutionPage constructor");
        // Hide Menu
        console.log("constructor >>> hide menu");
        this.menuCtrl.enable(false, 'myMenu');
        console.log("constructor >>> item : " + JSON.stringify(this.item));
        this.item = this.params.data;
        console.log("constructor >>> trigger this.loadAdhocCheck");
        this.loadAdhocCheck();
        console.log("constructor >>> trigger this.wolo1FreezeCheck");
        this.wolo1FreezeCheck();
        // Update worktype
        this.worktype = this.item.json.worktype;
        console.log("constructor >>> worktype : " + this.worktype);
        console.log("ta0billingind : " + this.item.json.ta0billingind);
        // Trigger AllocationType
        this.item.json.loc_allocationtype_status = false;
        // SOType = ZUDN
        this.deviceDetails = new __WEBPACK_IMPORTED_MODULE_5__pojo_MultiAssetLocci__["a" /* MultiAssetLocci */]();
        // Read is remove device is exist in json..
        if (this.item.json.hasOwnProperty('ta0removedevice')) {
            this.listRemoveDevice = this.item.json.ta0removedevice;
        }
        if (typeof (this.item.json.ta0feeder) != 'undefined' && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== '') {
            //this.feederSetArray = [];
            // console.log("BEFORE: " + JSON.stringify(this.item.json.ta0feeder));
            this.item.json.ta0feeder.sort(this.gf.dynamicSort("description"));
            // console.log("AFTER: " + JSON.stringify(this.item.json.ta0feeder));
            debugger;
            // Reset List Device
            this.item.json.listDevice = [];
            // Reset Controlling Device to empty.
            this.item.json.loc_controllingDeviceList = [];
            this.deviceDetails = {};
            console.log("constructor >>> feeder size : " + this.item.json.ta0feeder.length);
            for (var _i = 0, _a = this.item.json.ta0feeder; _i < _a.length; _i++) {
                var feederArr = _a[_i];
                console.log("trigger this.loadFeederDesign");
                this.loadFeederDesign(feederArr);
            }
        }
        else {
            // Reset List Device
            this.item.json.listDevice = [];
            // Reset Controlling Device to empty.
            this.item.json.loc_controllingDeviceList = [];
        }
        console.log("trigger jsonstore.replaceWO");
        // Replace Updated Data in JSON
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
    }
    /**
     * Description  : Method to auto populate local data.
     * Created      : Alif (31.12.2019)
     */
    SealServiceExecutionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("enter ionViewWillEnter to search & update local data..");
        this.item = this.params.data;
        var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.item.json.wonum);
        console.log("trigger jsonstore.getSearchRecord");
        this.jsonStore.getSearchRecord(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0).then(function (result) {
            console.log("enter local data to update..");
            _this.item = JSON.parse(JSON.stringify(result[0]));
            console.log("ionViewWillEnter >>> item : " + JSON.stringify(_this.item));
            _this.loadAdhocCheck();
            _this.wolo1FreezeCheck();
            // Update worktype
            _this.worktype = _this.item.json.worktype;
            // Trigger AllocationType
            _this.item.json.loc_allocationtype_status = false;
            // SOType = ZUDN
            _this.deviceDetails = new __WEBPACK_IMPORTED_MODULE_5__pojo_MultiAssetLocci__["a" /* MultiAssetLocci */]();
            // Read is remove device is exist in json..
            if (_this.item.json.hasOwnProperty('ta0removedevice')) {
                _this.listRemoveDevice = _this.item.json.ta0removedevice;
            }
            console.log("ionViewWillEnter >>> feeder size : " + _this.item.json.ta0feeder.length);
            if (typeof (_this.item.json.ta0feeder) != 'undefined' && _this.item.json.ta0feeder !== null && _this.item.json.ta0feeder !== '') {
                //this.feederSetArray = [];
                // console.log("BEFORE: " + JSON.stringify(this.item.json.ta0feeder));
                _this.item.json.ta0feeder.sort(_this.gf.dynamicSort("description"));
                // console.log("AFTER: " + JSON.stringify(this.item.json.ta0feeder));
                debugger;
                // Reset List Device
                _this.item.json.listDevice = [];
                // Reset Controlling Device to empty.
                _this.item.json.loc_controllingDeviceList = [];
                _this.deviceDetails = {};
                for (var _i = 0, _a = _this.item.json.ta0feeder; _i < _a.length; _i++) {
                    var feederArr = _a[_i];
                    console.log("trigger this.loadFeederDesign");
                    _this.loadFeederDesign(feederArr);
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
        });
    };
    SealServiceExecutionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealServiceExecutionPage');
    };
    SealServiceExecutionPage.prototype.wolo1FreezeCheck = function () {
        if (this.item.json.wolo1 !== "" && this.item.json.wolo1 !== null && typeof this.item.json.wolo1 !== "undefined") {
            this.wolo1Freeze = true;
        }
        else {
            this.wolo1Freeze = false;
        }
    };
    SealServiceExecutionPage.prototype.loadAdhocCheck = function () {
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
    SealServiceExecutionPage.prototype.deviceRemovingMeterCheck = function (i, j, deviceName, oldDeviceIndex) {
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
    SealServiceExecutionPage.prototype.loadFeederDesign = function (feederArr) {
        // Reset New Device Display Section
        feederArr.loc_haveNewDevice = false;
        // Installation Voltage
        var voltage = JSON.parse(JSON.stringify(this.item.json.ta0installationvoltage));
        if (typeof (feederArr.multiassetlocci) != 'undefined') {
            feederArr.feederSetDesign = [];
            var feederSetDesign = new __WEBPACK_IMPORTED_MODULE_17__pojo_design_feederSetDesign__["a" /* FeederSetDesign */]();
            feederSetDesign.soWorkType = this.item.json.worktype;
            feederSetDesign.feederExisting = feederArr.ta0existing;
            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                var ctCount = 0;
                var ptCount = 0;
                for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
                    debugger;
                    var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    switch (key) {
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                            feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterIndex = i;
                            feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                            feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                            feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                            voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                            feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                            feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                            feederArr.loc_haveNewDevice = true;
                            // Trigger AllocationType 90
                            if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                                this.triggerAllocationType();
                            }
                            /**
                             * Reason   : Checking and convert to array for ta4testdata
                             * Created  : Alif (05-03-2019)
                             */
                            var ta4testdata_temp;
                            if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                                    ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                                }
                                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
                            }
                            // Setting controlling device list
                            // removed by shankar 03/11/2018.. implements in add-device constructor.
                            /*  var controllingDevice = {
                               feederId: "Feeder"+i,
                               asssetNum: feederSetDesign.nMeter,
                               serialNum: feederSetDesign.nMeterSerialNum
                             }
                             this.item.json.loc_controllingDeviceList.push(controllingDevice); */
                            break;
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                            feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterModemIndex = i;
                            feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                            feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterSimIndex = i;
                            feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
                            feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nCheckIndex = i;
                            feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                            feederArr.loc_haveNewDevice = true;
                            /**
                             * Reason   : Checking and convert to array for ta4testdata
                             * Created  : Alif (05-03-2019)
                             */
                            var ta4testdata_temp;
                            if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                                    ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                                }
                                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
                            }
                            break;
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
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
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                            feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nCheckSimIndex = i;
                            feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
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
                        case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
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
                if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                    else {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                }
                else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                    else {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                }
                else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                }
            }
            else {
                var ctECount = 0;
                var ptECount = 0;
                //var ctnCount = 0;
                //var ptnCount = 0;
                for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
                    debugger;
                    // Collection Assetnum          
                    this.deviceDetails.description = feederArr.description + " - " + feederArr.ta0feedercode;
                    var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN && feederSetDesign.feederExisting === false) {
                        switch (key) {
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterIndex = i;
                                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterModemIndex = i;
                                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterSimIndex = i;
                                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckSimIndex = i;
                                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
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
                        if (old_voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (new_voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (new_voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        else if (old_voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (new_voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (new_voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        else if (old_voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (new_voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN:
                                feederSetDesign.eMeter = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMeterIndex = i;
                                feederSetDesign.eMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederArr.eFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
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
                                feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                                // Setting controlling device list
                                // removed by shankar 03/11/2018.. implements in add-device constructor.
                                /*  var controllingDevice = {
                                   feederId: "Feeder"+i,
                                   asssetNum: feederSetDesign.eMeter,
                                   serialNum: feederSetDesign.eMeterSerialNum
                                 }
                                 this.item.json.loc_controllingDeviceList.push(controllingDevice); */
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_MD:
                                feederSetDesign.eMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMeterModemIndex = i;
                                feederSetDesign.eMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                                    feederSetDesign.eMeterModemTestStatus = "Y";
                                }
                                else {
                                    feederSetDesign.eMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                }
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_SIM:
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
                            /** Reason: Adding Existing Main Comm Module for Smart Meter */
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_COMM:
                                feederSetDesign.eMainComm = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMainCommIndex = i;
                                feederSetDesign.eMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.eMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederSetDesign.eMainCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK:
                                feederSetDesign.eCheck = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eCheckIndex = i;
                                feederSetDesign.eCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
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
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_MD:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_SIM:
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
                            /** Reason: Adding Existing Comm Module for Smart Meter */
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_COMM:
                                feederSetDesign.eCheckComm = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eCheckCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eCheckCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eCheckCommIndex = i;
                                feederSetDesign.eCheckCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eCheckCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eCheckCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.eCheckCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederSetDesign.eCheckCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterIndex = i;
                                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterModemIndex = i;
                                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterSimIndex = i;
                                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            /** Reason: Adding New Comm Module for Smart Meter */
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_COMM:
                                feederSetDesign.nMainComm = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMainCommIndex = i;
                                feederSetDesign.nMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
                                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckIndex = i;
                                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
                                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckModemIndex = i;
                                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckSimIndex = i;
                                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
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
                            case __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
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
                        if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR || this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN || this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" || (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                if (feederSetDesign.eMeterRegisterStatus === "Y" || (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC || this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" || feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
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
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
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
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
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
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
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
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
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
                            if (voltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
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
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
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
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
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
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
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
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
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
            console.log('feeder set  : ' + JSON.stringify(feederSetDesign));
            feederArr.feederSetDesign.push(feederSetDesign);
            this.object = feederSetDesign;
            //this.feederSetArray.push(feederSetDesign);
        }
        else {
            feederArr.nFeederVoltage = this.gv.departmentCode;
            feederArr.eFeederVoltage = this.gv.departmentCode;
        }
    };
    SealServiceExecutionPage.prototype.toggleSection = function (index) {
        this.item.json.ta0feeder[index].open = !this.item.json.ta0feeder[index]
            .open;
    };
    SealServiceExecutionPage.prototype.toggleItem = function (index, j) {
        this.item.json.ta0feeder[index].children[j].open = !this.item.json
            .ta0feeder[index].children[j].open;
    };
    SealServiceExecutionPage.prototype.addFeeder = function () {
        debugger;
        console.log("add feeder .");
        this.feederDetails = new __WEBPACK_IMPORTED_MODULE_4__pojo_FeederDetails__["a" /* FeederDetails */]();
        this.feederDetails.description = "Feeder Set";
        this.feederDetails.ta0feedercode = new Date().getUTCMilliseconds().toString();
        // For adding new feeder change ta0existing = false.
        this.feederDetails.ta0existing = false;
        //var voltage = this.item.json.ta0newvoltage >= 4 ? '04' : '03';
        // var voltage = this.gv.departmentCode;
        var voltage = "";
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
    SealServiceExecutionPage.prototype.addDevice = function (index) {
        //this.feederArray[index];
        console.log("Hi Add Device :) ==" + index);
        console.log(" item : " + JSON.stringify(this.item));
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("DeviceDetailsPage", {
            paramObj: this.item,
            paramIndex: index
        });
    };
    SealServiceExecutionPage.prototype.removeFeeder = function (i) {
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
                        debugger;
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
                        debugger;
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
                            // this.item.json.ta0feeder.splice(i, 1);
                            _this.item.json.ta0feeder[i]._action = "Delete";
                            console.log(JSON.stringify(_this.item.json.ta0feeder[i]));
                            _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                            loading.dismiss();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SealServiceExecutionPage.prototype.hasProperty = function (feederDetails) {
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
    SealServiceExecutionPage.prototype.removeDevice = function (i, j, r) {
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
            if (_this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN || _this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
                // Change ta0removeind to false
                _this.item.json.ta0feeder[i].multiassetlocci[r].ta0removedevice = false;
            }
            else if (_this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO || _this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER || _this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
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
    SealServiceExecutionPage.prototype.validation = function () {
        debugger;
        // Filtering for SO type
        var type = this.item.json.worktype;
        var feeder = this.item.json.ta0feeder;
        this.deviceList = [];
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST:
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR: {
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV:
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE: {
                // Checking Device Status
                for (var i = 0; i < feeder.length; i++) {
                    var multiassetlocci = feeder[i].multiassetlocci;
                    if (typeof (multiassetlocci) !== "undefined") {
                        for (var k = 0; k < multiassetlocci.length; k++) {
                            // Checking remove indicator
                            if (multiassetlocci[k].ta0removeind === true && multiassetlocci[k].ta0existingdevice === true) {
                                // Checking if device status empty or not
                                if (typeof (multiassetlocci[k].ta0systemstatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0systemstatus === null) {
                                    // this.deviceDetails = [];
                                    // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                                    // this.deviceDetails.ta0systemstatus = undefined;
                                    // this.deviceList.push(this.deviceDetails);
                                    this.deviceList.push(multiassetlocci[k].assetnum);
                                }
                                else {
                                    // Checking if device status "ZREM"
                                    if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                                        // Checking removal status is empty or not
                                        if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
                                            // this.deviceDetails = [];
                                            // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                                            // this.deviceDetails.ta0systemstatus = multiassetlocci[k].ta0systemstatus;
                                            // this.deviceDetails.ta0devicestatus = undefined;
                                            // this.deviceList.push(this.deviceDetails);
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
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN:
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                // Checking Device Status
                for (var i = 0; i < feeder.length; i++) {
                    var multiassetlocci = feeder[i].multiassetlocci;
                    if (typeof (multiassetlocci) !== 'undefined') {
                        for (var k = 0; k < multiassetlocci.length; k++) {
                            // Checking replace indicator
                            if (multiassetlocci[k].ta0removeind === true && multiassetlocci[k].ta0existingdevice === true) {
                                // Checking if device status empty or not
                                if (typeof (multiassetlocci[k].ta0systemstatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0systemstatus === null) {
                                    // this.deviceDetails = [];
                                    // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                                    // this.deviceDetails.ta0systemstatus = undefined;
                                    // this.deviceList.push(this.deviceDetails);
                                    this.deviceList.push(multiassetlocci[k].assetnum);
                                }
                                else {
                                    // Checking if device status "ZREM"
                                    if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                                        // Checking removal status is empty or not
                                        if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "" || multiassetlocci[k].ta0devicestatus === null) {
                                            // this.deviceDetails = [];
                                            // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                                            // this.deviceDetails.ta0systemstatus = multiassetlocci[k].ta0systemstatus;
                                            // this.deviceDetails.ta0devicestatus = undefined;
                                            // this.deviceList.push(this.deviceDetails);
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
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER:
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR:
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO:
            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL: {
                // Checking Device Status
                for (var i = 0; i < feeder.length; i++) {
                    var multiassetlocci = feeder[i].multiassetlocci;
                    if (typeof (multiassetlocci) !== "undefined") {
                        for (var k = 0; k < multiassetlocci.length; k++) {
                            // Checking replace indicator
                            if (multiassetlocci[k].ta0replaceind === true && multiassetlocci[k].ta0existingdevice === true) {
                                // Checking if device status empty or not
                                if (typeof (multiassetlocci[k].ta0systemstatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "") {
                                    // this.deviceDetails = [];
                                    // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                                    // this.deviceDetails.ta0systemstatus = undefined;
                                    // this.deviceList.push(this.deviceDetails);
                                    this.deviceList.push(multiassetlocci[k].assetnum);
                                }
                                else {
                                    // Checking if device status "ZREM"
                                    if (multiassetlocci[k].ta0systemstatus === "ZREM") {
                                        // Checking removal status is empty or not
                                        if (typeof (multiassetlocci[k].ta0devicestatus) === 'undefined' || multiassetlocci[k].ta0systemstatus === "") {
                                            // this.deviceDetails = [];
                                            // this.deviceDetails.assetnum = multiassetlocci[k].assetnum;
                                            // this.deviceDetails.ta0systemstatus = multiassetlocci[k].ta0systemstatus;
                                            // this.deviceDetails.ta0devicestatus = undefined;
                                            // this.deviceList.push(this.deviceDetails);
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
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
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
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                    });
                    var existingDevice = devices.filter(function (item) {
                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
                    });
                    if (replaceDevice.length > 0) {
                        // Checking device voltage
                        for (var m = 0; m < replaceDevice.length; m++) {
                            if (replaceDevice[m].ta0devicevoltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Check new ct transformer
                                ct = devices.filter(function (item) {
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                });
                                if (ct.length < 3) {
                                    msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                    msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                }
                                else {
                                    if (existingDevice.length > 0) {
                                        // Checking device voltage
                                        for (var n = 0; n < existingDevice.length; n++) {
                                            if (existingDevice[n].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                // Reset ct, pt
                                                pt = [];
                                                // Checking if need to remove ct & pt
                                                pt = devices.filter(function (item) {
                                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === true);
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
                            else if (replaceDevice[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Check new ct transformer
                                ct = devices.filter(function (item) {
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                });
                                // Check new pt transformer
                                pt = devices.filter(function (item) {
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                });
                                if (ct.length === 0) {
                                    // if (ct.length < 3 && pt.length < 3) {
                                    //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                    //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                                    // } else if (ct.length > 0 && pt.length < 3) {
                                    //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                    //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                                    // } else if (ct.length < 3 && pt.length > 0) {
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
                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                                });
                                // Check indicator remove existing ct transformer
                                ct = devices.filter(function (item) {
                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                                });
                                // Check indicator remove existing pt transformer
                                pt = devices.filter(function (item) {
                                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                                });
                                if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                                    if (feeder[i].nFeederVoltage === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                                    else if (feeder[i].nFeederVoltage > __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
    SealServiceExecutionPage.prototype.saveFeeder = function (item) {
        var _this = this;
        debugger;
        //check network
        console.log("saveFeeder");
        console.log(JSON.stringify(item));
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        debugger;
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
            ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                this.item.json.loc_ta0feeder_haveChange = true;
                this.gf.displayToast("Details updated locally");
                loading.dismiss();
            }
            else if ((__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
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
                debugger;
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
    /*
    deleteFeederOption(myEvent) {
    
      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      newRootNav.push("RemoveFeederPage", {
        paramObj: this.object,
      });
    }
    */
    /**
     * Reason   : Section Seal Navigation
     * Created  : Alif (31.01.2019)
     */
    SealServiceExecutionPage.prototype.openSealAddDevicesPage = function (index, deviceVoltage) {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            // Navigate to Seal Add Device Page
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealAddDevicesPage", {
                paramObj: _this.item,
                paramIndex: index,
                deviceVoltage: deviceVoltage
            });
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceExecutionPage.prototype.openSealRegisterDetailsPage = function (i, maIndex, modemIndex, simIndex, ctIndex, ptIndex, commIndex) {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            // Navigate to Seal Register Details Page
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealDeviceRegisterDetailsPage", {
                paramObj: _this.item,
                fIndex: i,
                maIndex: maIndex,
                modemIndex: modemIndex,
                simIndex: simIndex,
                ctIndex: ctIndex,
                ptIndex: ptIndex,
                commIndex: commIndex
            });
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceExecutionPage.prototype.openSealNStickerPage = function (i, j, alloType, fDesign, vType, from, serialNum) {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var deviceVoltage = 0;
            if ('N' === vType) {
                deviceVoltage = fDesign.nFeederVoltage;
            }
            else {
                deviceVoltage = fDesign.eFeederVoltage;
            }
            // Navigate to Seal Sil & Sticker Info Page
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealDeviceSilNStickerInfoPage", {
                paramObj: _this.item,
                fIndex: i,
                maIndex: j,
                alloType: alloType,
                versionType: vType,
                deviceVoltage: deviceVoltage,
                from: from ? from : '',
                serialNum: serialNum ? serialNum : ''
            });
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceExecutionPage.prototype.openSealTestListPage = function (i, j, fDesign, mType, vType) {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var deviceVoltage = 0;
            if ('N' === vType) {
                deviceVoltage = fDesign.nFeederVoltage;
            }
            else {
                deviceVoltage = fDesign.eFeederVoltage;
            }
            if (typeof (j) !== "undefined") {
                // Navigate to Seal Test List Page
                var newRootNav = _this.appCtrl.getRootNavById("n4");
                newRootNav.push("SealDeviceTestListPage", {
                    paramObj: _this.item,
                    fIndex: i,
                    maIndex: j,
                    feederSet: fDesign,
                    meterType: mType,
                    versionType: vType,
                    deviceVoltage: deviceVoltage
                });
            }
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceExecutionPage.prototype.openSealLvInspectPage = function (i, j, v) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            if (typeof (j) !== "undefined") {
                var newRootNav = _this.appCtrl.getRootNavById("n4");
                newRootNav.push("SealLvInspectPage", {
                    paramObj: _this.item,
                    fIndex: i,
                    maIndex: j,
                    deviceVoltage: v,
                });
            }
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
        console.log("come outin SealLvInspectionPage");
    };
    SealServiceExecutionPage.prototype.openSealMvhvInspectPage = function (i, j) {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            // Checking Current Ratio for ZIST
            // Collection devices. (16-04-2019)
            var devices = [];
            var feeder = JSON.parse(JSON.stringify(_this.item.json.ta0feeder));
            if (typeof (feeder) !== "undefined") {
                for (var k = 0; k < feeder.length; k++) {
                    if (typeof (_this.item.json.ta0feeder[k].multiassetlocci) !== "undefined") {
                        var multiassetlocci = feeder[k].multiassetlocci;
                        for (var m = 0; m < multiassetlocci.length; m++) {
                            devices.push(multiassetlocci[m]);
                        }
                    }
                }
            }
            /**
             * Reason   : Checking SO Type because ZIST do not have exisiting winding group (no current ratio)..
             * Created  : 16/04/2019
             */
            if (_this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                var device = devices.filter(function (item) {
                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT);
                });
                if (device.length > 0) {
                    // Navigate to Seal Mvhv Inspect Page
                    var newRootNav = _this.appCtrl.getRootNavById("n4");
                    newRootNav.push("SealMvhvInspectPage", {
                        paramObj: _this.item,
                        fIndex: i,
                        maIndex: j
                    });
                }
                else {
                    _this.gf.warningAlert("WARNING!", "Please install Current Transformer to continue.", "Close");
                }
            }
            else {
                // Navigate to Seal Mvhv Inspect Page
                var newRootNav = _this.appCtrl.getRootNavById("n4");
                newRootNav.push("SealMvhvInspectPage", {
                    paramObj: _this.item,
                    fIndex: i,
                    maIndex: j
                });
            }
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceExecutionPage.prototype.openSealOpcInspectPage = function (i, j, v) {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            // Navigate to Seal Opc Inspect Page
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealOpcInspectPage", {
                paramObj: _this.item,
                fIndex: i,
                maIndex: j,
                deviceVoltage: v,
            });
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceExecutionPage.prototype.openSealCeInspectPage = function () {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            // Navigate to Seal CE Inspect Page
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealCeInspectPage", {
                paramObj: _this.item
            });
            // Dismiss Loading
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    // openMVHVSealRAS(feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
    //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    //   newRootNav.push("SealLpcMvhvRasPage", {
    //     paramObj: this.item
    //   });
    // }
    // openSealLpcTestListPage() {
    //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    //   newRootNav.push("SealLpcMvhvRasPage", {
    //     paramObj: this.item
    //   });
    // }
    // openSealLvTestListPage() {
    //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    //   newRootNav.push("SealLpcLvRasPage", {
    //     paramObj: this.item
    //   });
    // }
    // openSealPages() {
    //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    //   newRootNav.push("SealLpcLvRasPage", {
    //     paramObj: this.item
    //   });
    // }
    // openMeterRegisterInfoPage() {
    //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    //   newRootNav.push("MainMeterRegisterInfoPage", "");
    // }
    // /**
    //  * @deprecated
    //  * because of changing the feeder page design. refer below method openRegisterpage
    //  * @param device 
    //  * @param feederIndex 
    //  * @param multiAssetIndex 
    //  */
    // openDataValidationPage(device, feederIndex, multiAssetIndex) {
    //   //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
    //   var feederDetails = this.item.json.ta0feeder[feederIndex];
    //   var modemVal = null;
    //   var simcardVal = null;
    //   debugger;
    //   for (var multi of feederDetails.multiassetlocci) {
    //     if (DeviceConstants.DEV_ALLOC_MODEM === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
    //       modemVal = multi.assetnum;
    //     }
    //     if (DeviceConstants.DEV_ALLOC_SIM_CARD === multi.ta0allocationtype && device.assetnum === multi.ta0controllingdevice) {
    //       simcardVal = multi.assetnum;
    //     }
    //     if (modemVal != null && simcardVal != null) {
    //       break;
    //     }
    //   }
    //   console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
    //   let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    //   newRootNav.push("RegisterDetailsPage", {
    //     paramObj: this.item,
    //     mLocci: device,
    //     fIndex: feederIndex,
    //     maIndex: multiAssetIndex,
    //     modem: modemVal,
    //     simcard: simcardVal
    //   });
    // }
    /**
       * Reason   : Section LPC Navigation
       * Created  : Alif (31.01.2019)
       */
    SealServiceExecutionPage.prototype.openRegisterPage = function (assetnum, feederIndex, multiAssetIndex, modemVal, simcardVal, modemIndex, simcardIndex, ctIndex, ptIndex) {
        var _this = this;
        //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var feederDetails = this.item.json.ta0feeder[feederIndex];
        var device = null;
        debugger;
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
    SealServiceExecutionPage.prototype.openRegisterForAssetPage = function (feederIndex, feederSetDesign, regPageType) {
        //console.log(" validation page : " + JSON.stringify(device) + " :  " + feederIndex + " :  " + multiAssetIndex);
        var feederDetails = this.item.json.ta0feeder[feederIndex];
        var device = null;
        debugger;
        //console.log('modem : ' + modemVal + '   :  sim card : ' + simcardVal);
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("RegisterDetailsPage", {
            paramObj: this.item,
            fIndex: feederIndex,
            feederSet: feederSetDesign,
            regType: regPageType,
        });
    };
    SealServiceExecutionPage.prototype.openLpcTestListPage = function (feederIndex, multiAssetIndex, feederSetDesign, meterType, versionType) {
        var _this = this;
        debugger;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            console.log("come in openLpcTestListPage");
            var feederDetails = _this.item.json.ta0feeder[feederIndex];
            debugger;
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
    SealServiceExecutionPage.prototype.openLpcMvhvInspectPage = function (i, j) {
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
    SealServiceExecutionPage.prototype.openLpcLvInspectPage = function (i, j) {
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
    SealServiceExecutionPage.prototype.openSilStickerInfoPage = function (i, j, t, feederSetDesign, versionType) {
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
    SealServiceExecutionPage.prototype.goToServiceDetailsPage = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealServiceDetailsPage", this.item);
        //this.navCtrl.pop();
    };
    SealServiceExecutionPage.prototype.openDailyMaintenanceReport = function (i, j, simIndex) {
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
    SealServiceExecutionPage.prototype.openOPCInspectionPage = function (i, j, deviceVoltage) {
        debugger;
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("OpcTestInspectPage", {
            paramObj: this.item,
            fIndex: i,
            maIndex: j,
            deviceVoltage: deviceVoltage
        });
    };
    SealServiceExecutionPage.prototype.goToAddDevicesPage = function (index, deviceVoltage) {
        var _this = this;
        // this.gf.setLoadingTimeout(1000);
        // setTimeout(() => {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            console.log('device voltage : ' + deviceVoltage);
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealAddDevicesPage", {
                paramObj: _this.item,
                paramIndex: index,
                deviceVoltage: deviceVoltage
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
        // }, 500);
    };
    SealServiceExecutionPage.prototype.goToRemoveDevicesPage = function (index, deviceVoltage) {
        var _this = this;
        this.gf.setLoadingTimeout(1000);
        setTimeout(function () {
            console.log('device voltage : ' + deviceVoltage);
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealAddDevicesPage", {
                paramObj: _this.item,
                paramIndex: index,
                deviceVoltage: deviceVoltage
            });
        }, 500);
    };
    SealServiceExecutionPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SealServiceExecutionPage.prototype.goHomePage = function () {
        console.log("image click");
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("WoHomePage", this.item);
    };
    SealServiceExecutionPage.prototype.lookup = function () {
    };
    /**
    * Trigger AllocationType
    */
    SealServiceExecutionPage.prototype.triggerAllocationType = function () {
        debugger;
        var type = this.item.json.worktype;
        var old_voltage = this.item.json.ta0installationvoltage;
        var new_voltage = this.item.json.ta0newvoltage;
        if (type === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || type === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || type === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
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
    SealServiceExecutionPage.prototype.validationServiceExecution = function () {
        debugger;
        var feeder = JSON.parse(JSON.stringify(this.item.json.ta0feeder));
        if (typeof (feeder) !== "undefined") {
            var pending = [];
            for (var i = 0; i < feeder.length; i++) {
                if (typeof (feeder[i].feederSetDesign) !== "undefined") {
                    /** Checking SO */
                    if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                        if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
                            if (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true) {
                                pending.push(feeder[i]);
                            }
                        }
                    }
                    else {
                        if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
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
                    if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
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
    /**
    * Refresh Work Order Service Execution Details
    * Created : Muhd Alif Tajudin
    * Date    : 16/10/2018
    */
    // Scroll the page to top...
    SealServiceExecutionPage.prototype.scrollToTop = function () {
    };
    // Refresh Header Details..
    // Edited: alif - 02-01-2019
    SealServiceExecutionPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // Check dirty for the workorder..
        this.jsonStore.getDirtyCheck(this.item, __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
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
    SealServiceExecutionPage.prototype.requestWorkOrderServiceExecutionDetails = function () {
        var _this = this;
        var wonum = JSON.parse(this.item.json.wonum);
        var respResult;
        var updatedDetails;
        // Start loading.
        this.gf.startLoading();
        this.dataService.fetchWorkOrderFeederDetails(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].DATA_FETCH_ASSIGNWORK, wonum).then(function (results) {
            debugger;
            setTimeout(function () {
                respResult = results;
                debugger;
                if (__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                    updatedDetails = JSON.parse(respResult.respObject);
                    updatedDetails = updatedDetails.workOrder[0].ta0feeder;
                    if (typeof (updatedDetails) !== "undefined" && updatedDetails !== null && updatedDetails !== '') {
                        // Reset List Device
                        _this.item.json.listDevice = [];
                        // Reset Controlling Device to empty.
                        _this.item.json.loc_controllingDeviceList = [];
                        _this.deviceDetails = {};
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
    SealServiceExecutionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-service-execution',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-service-execution/seal-service-execution.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary" hideBackButton="true">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Service Execution</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="addFeeder()"\n      *ngIf="item.json.worktype === soTypes.ZIST || (item.json.worktype === soTypes.ZUDN && item.json.ta0newvoltage > 2)">\n      <button mode="md" ion-button icon-start round color="light" style="padding: 15px;">\n        <ion-icon name="md-add"></ion-icon>&nbsp; Add Feeder\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle">\n          Service Execution\n        </div>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;" *ngIf="item.json.worktype === soTypes.ZISP || item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZDCN || item.json.worktype === soTypes.ZISR || item.json.worktype === soTypes.ZRCE || item.json.worktype === soTypes.ZRCN || \n         (item.json.worktype === soTypes.ZUDN && item.json.ta0newvoltage < 3)">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;"\n        *ngIf="item.json.worktype === soTypes.ZIST || (item.json.worktype === soTypes.ZUDN && item.json.ta0newvoltage > 2)">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;"\n        *ngIf="item.json.worktype === soTypes.ZIST || (item.json.worktype === soTypes.ZUDN && item.json.ta0newvoltage > 2)">\n        <button ion-button round mode="md" style="padding: 15px;" (click)="addFeeder()">\n          <ion-icon name="add"></ion-icon>&nbsp; Add Feeder\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull down to download">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 10px;"\n    *ngIf="item.json.ta0feeder != null && item.json.ta0feeder != \'undefined\' && item.json.ta0feeder != \'\'">\n    <div class="accordion-list">\n      <!-- First Level -->\n      <ion-list-header *ngFor="let feeder of item.json.ta0feeder; let i = index" style="margin-bottom: 1px;" no-lines\n        no-padding>\n        <span *ngIf="feeder._action != \'Delete\'">\n          <ion-row style="border:1px" *ngIf="hasProperty(feeder)">\n            <ion-col col-6 col-sm-7 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-item (click)="toggleSection(i)" style="background-color: transparent;" detail-none\n                [ngClass]="{\'section-active\': feeder.open, \'section\': !feeder.open}">\n                <ion-icon item-left name="arrow-forward" *ngIf="!feeder.open" class="boxShadow"></ion-icon>\n                <ion-icon item-left name="arrow-down" *ngIf="feeder.open" class="boxShadow"></ion-icon>\n                <span\n                  *ngIf="item.json.worktype != soTypes.ZIST">{{ feeder.eFeederVoltage == \'01\' ? \'OPC\' :  feeder.eFeederVoltage == \'02\' ? \'OPC\' : feeder.eFeederVoltage == \'03\' ? \'LV\' : \'MVHV\' }}\n                  ({{ feeder.eFeederVoltage }}) /\n                  {{ feeder.eFeederMainDeviceAllocationType == \'90\' ? \'Main Meter\' : feeder.eFeederMainDeviceAllocationType == \'91\' ? \'Feeder Meter\' : feeder.eFeederMainDeviceAllocationType == \'94\' ? \'Sub Meter\' : feeder.eFeederMainDeviceAllocationType == \'96\' ? \'Sub Feeder Meter\' : \'\'}}</span>\n                <span\n                  *ngIf="item.json.worktype == soTypes.ZIST && feeder.eFeederVoltage != null && feeder.nFeederMainDeviceAllocationType != null">{{ feeder.eFeederVoltage == \'01\' ? \'OPC\' :  feeder.eFeederVoltage == \'02\' ? \'OPC\' : feeder.eFeederVoltage == \'03\' ? \'LV\' : \'MVHV\' }}\n                  ({{ feeder.eFeederVoltage }}) /\n                  {{ feeder.nFeederMainDeviceAllocationType == \'90\' ? \'Main Meter\' : feeder.nFeederMainDeviceAllocationType == \'91\' ? \'Feeder Meter\' : feeder.nFeederMainDeviceAllocationType == \'94\' ? \'Sub Meter\' : feeder.nFeederMainDeviceAllocationType == \'96\' ? \'Sub Feeder Meter\' : \'\'}}</span>\n                <span\n                  *ngIf="item.json.worktype == soTypes.ZIST && feeder.eFeederVoltage != null && feeder.nFeederMainDeviceAllocationType == null">-\n                  / -</span>\n                <!-- {{ feeder.description }} - {{ feeder.ta0feedercode }} -->\n                <!-- / {{ gv.departmentCode }} - {{ feeder.eFeederVoltage }} -->\n              </button>\n            </ion-col>\n            <ion-col col-6 col-sm-5 col-md-4 style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n              <button ion-button *ngIf="(item.json.worktype === soTypes.ZIST)"\n                (click)="goToAddDevicesPage(i, feeder.eFeederVoltage)" style="background-color: transparent;"\n                detail-none [ngClass]="{\'section-active\': feeder.open, \'section\': !feeder.open}">\n                <ion-icon name="add">&nbsp;Add Devices</ion-icon>\n              </button>\n              <button ion-button *ngIf="(item.json.worktype === soTypes.ZISP || item.json.worktype === soTypes.ZISO)"\n                (click)="goToRemoveDevicesPage(i, feeder.eFeederVoltage)" style="background-color: transparent;"\n                detail-none [ngClass]="{\'section-active\': feeder.open, \'section\': !feeder.open}">\n                <ion-icon name="repeat">&nbsp;Replace Devices</ion-icon>\n              </button>\n              <button ion-button (click)="removeFeeder(i)" *ngIf="item.json.worktype === soTypes.ZIST"\n                style="background-color: transparent;" detail-none\n                [ngClass]="{\'section-active\': feeder.open, \'section\': !feeder.open}">\n                <ion-icon name="trash">&nbsp;</ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <div *ngIf="feeder.multiassetlocci && feeder.open" no-lines>\n            <div *ngFor="let device of feeder.feederSetDesign; let j = index" style="margin-bottom: 0px;"\n              class="header-list-item" no-padding>\n              <div *ngIf="!device.children" detail-none class="child-item" text-wrap>\n                <ion-grid *ngIf="device.soWorkType !== soTypes.ZIST" style="background-color:ivory">\n                  <ion-row align-items-center>\n                    <ion-col col-12 col-sm-12 col-md-4 style="text-align: left;">\n                      <p>\n                        <strong>Existing Meter Details - {{ device.eFeederVoltage }}</strong>\n                      </p>\n                    </ion-col>\n                    <ion-col col-12 col-sm-12 col-md-8 style="text-align: right;">\n                      <ion-icon name="checkmark-circle"\n                        [ngClass]="(device.eFeederStatus === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-6>\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>\n                              {{ device.eMeterAllocationType == \'90\' ? \'Main Meter\' : device.eMeterAllocationType == \'91\'\n                            ? \'Feeder Meter\' : device.eMeterAllocationType\n                            == \'94\' ? \'Sub Meter\' : device.eMeterAllocationType == \'96\' ? \'Sub Feeder Meter\' : \'Main\n                            Meter\'\n                            }} :\n                            </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eMeterRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eMeterSerialNum || \'-\'}} / {{ device.eMeterCtrl || \'-\' }}\n                          </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row\n                        *ngIf="device.eMeterFunctionClass === functClass.NMTR || device.eMeterFunctionClass === functClass.RMTR">\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>Modem :</strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eMeterModemRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eMeterModemSerialNum || \'-\'}} / {{ device.eMeterModemCtrl || \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row\n                        *ngIf="device.eMeterFunctionClass === functClass.NMTR || device.eMeterFunctionClass === functClass.RMTR">\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>SimCard : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eMeterSimRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eMeterSimSerialNum || \'-\' }} / {{ device.eMeterSimCtrl || \'-\' }}\n                          </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row\n                        *ngIf="device.eMeterFunctionClass === functClass.SMTR_CM || device.eMeterFunctionClass === functClass.SMTR">\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>Comm Module : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eMainCommRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eMainCommSerialNum || \'-\' }} / {{ device.eMainCommCtrl || \'-\' }}\n                          </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <!-- Seal Section (Alif - 31/01/2019) -->\n                      <ion-row>\n                        <ion-col col-12 col-sm-12 col-md-12>\n                          <button ion-button\n                            *ngIf="device.eMeterFunctionClass === functClass.NMTR || device.eMeterFunctionClass === functClass.RMTR"\n                            [ngClass]="(device.eMeterRegisterStatus !== \'N\' && device.eMeterModemRegisterStatus !== \'N\' && device.eMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openSealRegisterDetailsPage(i, device.eMeterIndex, device.eMeterModemIndex, device.eMeterSimIndex)">\n                            <ion-icon name="information-circle">&nbsp;Info</ion-icon>\n                          </button>\n\n                          <button ion-button\n                            *ngIf="device.eMeterFunctionClass === functClass.SMTR_CM || device.eMeterFunctionClass === functClass.SMTR || device.eMeterFunctionClass === functClass.SMTR_OLD"\n                            [ngClass]="(device.eMeterRegisterStatus !== \'N\' && device.eMeterModemRegisterStatus !== \'N\' && device.eMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openSealRegisterDetailsPage(i, device.eMeterIndex, device.eMeterModemIndex, device.eMeterSimIndex, \'\', \'\', device.eMainCommIndex)">\n                            <ion-icon name="information-circle">&nbsp;Info</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.eMeterSilStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            *ngIf="(item.json.worktype === soTypes.ZIST || item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZISP)"\n                            (click)="openSealNStickerPage(i, device.eMeterIndex, device.eMeterAllocationType, device, \'E\')">\n                            <ion-icon name="ribbon">&nbsp;S&S</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.eMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealLvInspectPage(i, device.eMeterIndex, device.eFeederVoltage)"\n                            *ngIf="(item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZISP) && device.eFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V">\n                            <ion-icon name="flask">&nbsp;Lv Insp </ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.eMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            *ngIf="item.json.worktype === soTypes.ZISP && device.eFeederVoltage > dCons.VOL_LEVEL_LPC_LV_400V"\n                            (click)="openSealMvhvInspectPage(i, device.eMeterIndex)">\n                            <ion-icon name="flask">&nbsp;MVHV Insp</ion-icon>\n                          </button>\n\n                          <button ion-button\n                            (click)="openSealOpcInspectPage(i, device.eMeterIndex, device.eFeederVoltage)"\n                            [ngClass]="(device.eMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            *ngIf="(item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZISP) && device.eFeederVoltage < dCons.VOL_LEVEL_LPC_LV_400V">\n                            <ion-icon name="flask">&nbsp;OPC Insp</ion-icon>\n                          </button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n\n\n                    <ion-col col-12 col-sm-12 col-md-6 *ngIf="device.eFeederVoltage > 2">\n\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>\n                              {{ device.eCheckAllocationType == \'92\' ? \'Check Meter\' : device.eCheckAllocationType ==\n                            \'93\' ? \'Check Feeder\' : device.eCheckAllocationType\n                            == \'95\' ? \'Check Sub Meter\' : device.eCheckAllocationType == \'97\' ? \'Check Sub Feeder\' :\n                            \'Check\n                            Meter\' }} :\n                            </strong>\n                            <!--  <strong>Check Meter : </strong> -->\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eCheckRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eCheckSerialNum || \'-\' }} / {{ device.eCheckCtrl || \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n\n\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>Modem : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eCheckModemRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eCheckModemSerialNum || \'-\' }} / {{ device.eCheckModemCtrl || \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>SimCard : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.eCheckSimRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.eCheckSimSerialNum || \'-\' }} / {{ device.eCheckSimCtrl || \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <!-- Seal Section (Alif - 31/01/2019) -->\n                      <ion-row>\n                        <ion-col col-12 col-sm-12 col-md-12>\n\n                          <button\n                            [ngClass]="(device.eCheckRegisterStatus !== \'N\' && device.eCheckModemRegisterStatus !== \'N\' && device.eCheckSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            ion-button\n                            *ngIf="device.eCheck && item.json.worktype !== soTypes.ZMMR && (item.json.worktype !== soTypes.ZISR)"\n                            (click)="openSealRegisterDetailsPage(i, device.eCheckIndex, device.eCheckModemIndex, device.eCheckSimIndex)">\n                            <ion-icon name="information-circle">&nbsp;Info</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.eCheckSilStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            *ngIf="(item.json.worktype === soTypes.ZIST || item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZISP)"\n                            (click)="openSealNStickerPage(i, device.eCheckIndex, device.eCheckAllocationType, device, \'E\')">\n                            <ion-icon name="ribbon">&nbsp;S&S</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.eCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealLvInspectPage(i, device.eCheckIndex, device.eFeederVoltage)"\n                            *ngIf="(item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZISP) && device.eFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V">\n                            <ion-icon name="flask">&nbsp;Lv Insp </ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.eCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealMvhvInspectPage(i, device.eCheckIndex)"\n                            *ngIf="item.json.worktype === soTypes.ZISP && device.eFeederVoltage > dCons.VOL_LEVEL_LPC_LV_400V">\n                            <ion-icon name="flask">&nbsp;MVHV Insp</ion-icon>\n                          </button>\n\n                          <button ion-button\n                            (click)="openSealOpcInspectPage(i, device.eCheckIndex, device.eFeederVoltage)"\n                            [ngClass]="(device.eCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            *ngIf="(item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZISP) && device.eFeederVoltage < dCons.VOL_LEVEL_LPC_LV_400V">\n                            <ion-icon name="flask">&nbsp;OPC Insp</ion-icon>\n                          </button>\n\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n\n                  </ion-row>\n\n                  <div *ngIf="device.eFeederVoltage > 2">\n                    <ion-row>\n                      <ion-col col-12 col-sm-12 col-md-12>\n                        <p>\n                          <strong>Existing Current Transformer Details - {{ feeder.eFeederVoltage }} </strong>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>CT </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>R </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>Y </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>B </strong>\n                        </p>\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row align-items-center>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>Serial No. </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                        (click)="(device.eMeterCtR == \'undefined\' || device.eMeterCtR == \'\' || device.eMeterCtR == null) ? \'\' : openSealRegisterDetailsPage(i, device.eMeterCtRIndex, device.eCheckModemIndex, device.eCheckSimIndex, device.eMeterCtRIndex, \'\')">\n\n                        <h2\n                          [ngClass]="[(device.eMeterCtRRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterCtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']">\n                          {{ device.eMeterCtRSerialNum || \'-\' }} / {{ device.eMeterCtRCtrl }} </h2>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                        (click)="(device.eMeterCtY == \'undefined\' || device.eMeterCtY == \'\' || device.eMeterCtY == null) ? \'\' : openSealRegisterDetailsPage(i, device.eMeterCtYIndex, device.eCheckModemIndex, device.eCheckSimIndex, device.eMeterCtYIndex, \'\')">\n\n                        <h2\n                          [ngClass]="[(device.eMeterCtYRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterCtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']">\n                          {{ device.eMeterCtYSerialNum || \'-\' }} / {{ device.eMeterCtYCtrl }} </h2>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                        (click)="(device.eMeterCtB == \'undefined\' || device.eMeterCtB == \'\' || device.eMeterCtB == null) ? \'\' : openSealRegisterDetailsPage(i, device.eMeterCtBIndex, device.eCheckModemIndex, device.eCheckSimIndex, device.eMeterCtBIndex, \'\' )">\n                        <h2\n                          [ngClass]="[(device.eMeterCtBRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterCtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']">\n                          {{ device.eMeterCtBSerialNum || \'-\' }} / {{ device.eMeterCtBCtrl }} </h2>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-1 style="\n                          text-align:right;">\n                        <ion-icon name="checkmark-circle"\n                          [ngClass]="(device.eMeterCtRRegisterStatus !== \'N\' && device.eMeterCtYRegisterStatus !== \'N\' && device.eMeterCtBRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row *ngIf="device.eFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V">\n                      <ion-col col-3 col-sm-3 col-md-2>\n\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                      (click)="openSealNStickerPage(i, device.eCheckIndex, device.eCheckAllocationType, device, \'E\',\'crimpless_Seal\',device.eMeterCtRSerialNum)">\n                        <h2 class="btn-transformer-uncomplete" \n                        >Crimpless Seal</h2>\n\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                      (click)="openSealNStickerPage(i, device.eCheckIndex, device.eCheckAllocationType, device, \'E\',\'crimpless_Seal\',device.eMeterCtYSerialNum)">\n                        <h2 class="btn-transformer-uncomplete">Crimpless Seal</h2>\n\n\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                      (click)="openSealNStickerPage(i, device.eCheckIndex, device.eCheckAllocationType, device, \'E\',\'crimpless_Seal\',device.eMeterCtBSerialNum)">\n                        <h2 class="btn-transformer-uncomplete">Crimpless Seal</h2>\n\n\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-1 style="\n                          text-align:right;">\n                        <ion-icon name="checkmark-circle" class="uncomplete-color">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n\n                  <br />\n                  <div *ngIf="device.eFeederVoltage > 3">\n                    <ion-row>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>PT </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>R </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>Y </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>B </strong>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row align-items-center>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>Serial No. </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                        (click)="(device.eMeterPtR == \'undefined\' || device.eMeterPtR == \'\' || device.eMeterPtR == null) ? \'\' : openSealRegisterDetailsPage(i, device.eMeterPtRIndex, device.eCheckModemIndex, device.eCheckSimIndex, \'\', device.eMeterPtRIndex)">\n                        <h2\n                          [ngClass]="[(device.eMeterPtRRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterPtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']">\n                          {{ device.eMeterPtRSerialNum || \'-\' }} / {{ device.eMeterPtRCtrl }} </h2>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                        (click)="(device.eMeterPtY == \'undefined\' || device.eMeterPtY == \'\' || device.eMeterPtY == null) ? \'\' : openSealRegisterDetailsPage(i, device.eMeterPtYIndex, device.eCheckModemIndex, device.eCheckSimIndex, \'\', device.eMeterPtYIndex)">\n                        <h2\n                          [ngClass]="[(device.eMeterPtYRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterPtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']">\n                          {{ device.eMeterPtYSerialNum || \'-\' }} / {{ device.eMeterPtYCtrl }} </h2>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer"\n                        (click)="(device.eMeterPtB == \'undefined\' || device.eMeterPtB == \'\' || device.eMeterPtB == null) ? \'\' : openSealRegisterDetailsPage(i, device.eMeterPtBIndex, device.eCheckModemIndex, device.eCheckSimIndex, \'\', device.eMeterPtBIndex)">\n                        <h2\n                          [ngClass]="[(device.eMeterPtBRemoveInd) ? \'strikethrough\' : \'\', (device.eMeterPtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\']">\n                          {{ device.eMeterPtBSerialNum || \'-\' }} / {{ device.eMeterPtBCtrl }} </h2>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-1 style="text-align:right;">\n                        <ion-icon name="checkmark-circle"\n                          [ngClass]="(device.eMeterPtRRegisterStatus !== \'N\' && device.eMeterPtYRegisterStatus !== \'N\' && device.eMeterPtBRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-grid>\n\n                <!-- Replace Installation Meter details start from here -->\n\n                <ion-grid *ngIf="feeder.loc_haveNewDevice" style="background-color: lightcyan">\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-6 style="text-align: left;">\n                      <div\n                        *ngIf="device.soWorkType === soTypes.ZSRO || device.soWorkType === soTypes.ZRPM || device.soWorkType === soTypes.ZCER || device.soWorkType === soTypes.ZINL || device.soWorkType === soTypes.ZISO || device.soWorkType === soTypes.ZISP">\n                        <p>\n                          <strong>Replace New Device - {{ gv.departmentCode }} : {{ device.nFeederVoltage }}</strong>\n                        </p>\n                      </div>\n                      <div\n                        *ngIf="device.soWorkType === soTypes.ZIST || device.soWorkType === soTypes.ZUDN || device.soWorkType === soTypes.ZRPC">\n                        <p>\n                          <strong> Install New Device - {{ device.nFeederVoltage }} </strong>\n                        </p>\n                      </div>\n                    </ion-col>\n                    <ion-col col-12 col-sm-12 col-md-6 style="text-align: right;">\n                      <ion-icon name="checkmark-circle"\n                        [ngClass]="(device.nFeederStatus === true) ? \'complete-color\' : \'uncomplete-color\'"></ion-icon>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col col-12 col-sm-12 col-md-6>\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>\n                              {{ device.nMeterAllocationType == \'90\' ? \'Main Meter\' : device.nMeterAllocationType == \'91\'\n                            ? \'Feeder Meter\' : device.nMeterAllocationType\n                            == \'94\' ? \'Sub Meter\' : device.nMeterAllocationType == \'96\' ? \'Sub Feeder Meter\' : \'Main\n                            Meter\'\n                            }} :</strong>\n                            <!-- <strong>Main Meter : </strong> -->\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [style.display]="mainMeter"> {{ device.nMeterSerialNum || \'-\'}} / {{ device.nMeterCtrl ||\n                          \'-\' }}\n                          </h2>\n                        </ion-col>\n\n                      </ion-row>\n\n\n                      <ion-row\n                        *ngIf="device.nMeterFunctionClass === functClass.NMTR || device.nMeterFunctionClass === functClass.RMTR || device.nMeterFunctionClass === \'\'">\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>Modem : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [style.display]="mainMetermodem"> {{ device.nMeterModemSerialNum || \'-\' }} / {{\n                          device.nMeterModemCtrl\n                          || \'-\' }} </h2>\n                        </ion-col>\n\n                      </ion-row>\n\n                      <ion-row\n                        *ngIf="device.nMeterFunctionClass === functClass.NMTR || device.nMeterFunctionClass === functClass.RMTR || device.nMeterFunctionClass === \'\'">\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>SimCard : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [style.display]="mainMeterSimCard"> {{ device.nMeterSimSerialNum || \'-\' }} / {{\n                          device.nMeterSimCtrl\n                          ||\n                          \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row\n                        *ngIf="device.nMeterFunctionClass === functClass.SMTR_CM || device.nMeterFunctionClass === functClass.SMTR">\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>Comm Module : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [ngClass]="(device.nMainCommRemoveInd) ? \'strikethrough\' : \'\'">\n                            {{ device.nMainCommSerialNum || \'-\' }} / {{ device.nMainCommCtrl || \'-\' }}\n                          </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <!-- Seal Section (Alif - 31/01/2019) -->\n                      <ion-row>\n                        <ion-col col-12 col-sm-12 col-md-12>\n                          <button ion-button\n                            *ngIf="device.nMeterFunctionClass === functClass.NMTR || device.nMeterFunctionClass === functClass.RMTR || device.nMeterFunctionClass === \'\'"\n                            [ngClass]="(device.nMeterRegisterStatus !== \'N\' && device.nMeterModemRegisterStatus !== \'N\' && device.nMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openSealRegisterDetailsPage(i, device.nMeterIndex, device.nMeterModemIndex, device.nMeterSimIndex)">\n                            <ion-icon name="information-circle">&nbsp;Info</ion-icon>\n                          </button>\n\n                          <button ion-button\n                            *ngIf="device.nMeterFunctionClass === functClass.SMTR_CM || device.nMeterFunctionClass === functClass.SMTR || device.nMeterFunctionClass === functClass.SMTR_OLD"\n                            [ngClass]="(device.nMeterRegisterStatus !== \'N\' && device.nMeterModemRegisterStatus !== \'N\' && device.nMeterSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            (click)="openSealRegisterDetailsPage(i, device.nMeterIndex, device.nMeterModemIndex, device.nMeterSimIndex, \'\', \'\', device.nMainCommIndex)">\n                            <ion-icon name="information-circle">&nbsp;Info</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.nMeterSilStatus !== \'N\' ) ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealNStickerPage(i, device.nMeterIndex, device.nMeterAllocationType, device, \'N\')">\n                            <ion-icon name="ribbon">&nbsp;S&S</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.nMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealTestListPage(i, device.nMeterIndex, device, \'main\', \'N\')"\n                            *ngIf="((item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZIST || item.json.worktype === soTypes.ZISP)  && (device.nFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V || device.nFeederVoltage < dCons.VOL_LEVEL_LPC_LV_400V))">\n                            <ion-icon name="flask">&nbsp;Test</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.nMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealMvhvInspectPage(i, device.nMeterIndex)"\n                            *ngIf="((item.json.worktype === soTypes.ZISP || item.json.worktype === soTypes.ZIST)  && device.nFeederVoltage > dCons.VOL_LEVEL_LPC_LV_400V)">\n                            <ion-icon name="flask">&nbsp;Test</ion-icon>\n                          </button>\n\n                          <!-- <button [ngClass]="(device.nMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                          (click)="openSealLvInspectPage(i, device.nMeterIndex, device.nFeederVoltage)"\n                          *ngIf="(item.json.worktype === soTypes.ZIST && (device.nFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V))">\n                          <ion-icon name="flask">&nbsp;Lv Insp</ion-icon>\n                        </button> -->\n\n                          <!-- <button [ngClass]="(device.nMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                          (click)="openSealMvhvInspectPage(i, device.nMeterIndex)"\n                          *ngIf="(item.json.worktype === soTypes.ZIST) && (device.nFeederVoltage > dCons.VOL_LEVEL_LPC_LV_400V)">\n                          <ion-icon name="flask">&nbsp;MVHV Insp</ion-icon>\n                        </button> -->\n\n                          <!-- <button ion-button\n                          (click)="openSealOpcInspectPage(i, device.nMeterIndex, device.nFeederVoltage)"\n                          [ngClass]="(device.nMeterTestStatus !== \'N\') ? \'completeColor\' : \'\'"\n                          *ngIf="(item.json.worktype === soTypes.ZIST && (device.nFeederVoltage < dCons.VOL_LEVEL_LPC_LV_400V))">\n                          <ion-icon name="flask">&nbsp;OPC Insp</ion-icon>\n                        </button> -->\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n\n                    <!-- <ion-col col-12 col-sm-12 col-md-6 *ngIf="item.json.ta0newvoltage > 2 || item.json.ta0installationtype > 2"> -->\n                    <ion-col col-12 col-sm-12 col-md-6 *ngIf="device.nFeederVoltage > 2">\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>\n                              {{ device.nCheckAllocationType == \'92\' ? \'Check Meter\' : device.nCheckAllocationType ==\n                            \'93\' ? \'Check Feeder\' : device.nCheckAllocationType\n                            == \'95\' ? \'Check Sub Meter\' : device.nCheckAllocationType == \'97\' ? \'Check Sub Feeder\' :\n                            \'Check\n                            Meter\' }} : </strong>\n                            <!--     <strong>Check Meter: </strong> -->\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [style.display]="checkMeter"> {{ device.nCheckSerialNum || \'-\' }} / {{ device.nCheckCtrl ||\n                          \'-\' }}\n                          </h2>\n                        </ion-col>\n                      </ion-row>\n\n\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>Modem : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [style.display]="checkMeterModem"> {{ device.nCheckModemSerialNum || \'-\' }} / {{\n                          device.nCheckModemCtrl\n                          || \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row>\n                        <ion-col col-6 col-sm-6 col-md-4>\n                          <p>\n                            <strong>SimCard : </strong>\n                          </p>\n                        </ion-col>\n                        <ion-col col-6 col-sm-6 col-md-8>\n                          <h2 [style.display]="checkMeterSimCard"> {{ device.nCheckSimSerialNum || \'-\'}} / {{\n                          device.nCheckSimCtrl\n                          ||\n                          \'-\' }} </h2>\n                        </ion-col>\n                      </ion-row>\n                      <!-- Seal Section (Alif - 31/01/2019) -->\n                      <ion-row>\n                        <ion-col col-12 col-sm-12 col-md-12>\n                          <button\n                            [ngClass]="(device.nCheckRegisterStatus !== \'N\' && device.nCheckModemRegisterStatus !== \'N\' && device.nCheckSimRegisterStatus !== \'N\') ? \'completeColor\' : \'\'"\n                            ion-button\n                            (click)="openSealRegisterDetailsPage(i, device.nCheckIndex, device.nCheckModemIndex, device.nCheckSimIndex)">\n                            <ion-icon name="information-circle">&nbsp;Info</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.nCheckSilStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealNStickerPage(i, device.nCheckIndex, device.nCheckAllocationType,  device, \'N\')">\n                            <ion-icon name="ribbon">&nbsp;S&S</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.nCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealTestListPage(i, device.nCheckIndex, device, \'check\', \'N\')"\n                            *ngIf="((item.json.worktype === soTypes.ZISO || item.json.worktype === soTypes.ZIST || item.json.worktype === soTypes.ZISP)  && (device.nFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V || device.nFeederVoltage < dCons.VOL_LEVEL_LPC_LV_400V))">\n                            <ion-icon name="flask">&nbsp;Test</ion-icon>\n                          </button>\n\n                          <button [ngClass]="(device.nCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                            (click)="openSealMvhvInspectPage(i, device.nCheckIndex)"\n                            *ngIf="((item.json.worktype === soTypes.ZISP || item.json.worktype === soTypes.ZIST)  && device.nFeederVoltage > dCons.VOL_LEVEL_LPC_LV_400V)">\n                            <ion-icon name="flask">&nbsp;Test</ion-icon>\n                          </button>\n\n                          <!-- <button [ngClass]="(device.nCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                          (click)="openSealLvInspectPage(i, device.nCheckIndex, device.nFeederVoltage)"\n                          *ngIf="(item.json.worktype === soTypes.ZIST && (device.nFeederVoltage === dCons.VOL_LEVEL_LPC_LV_400V))">\n                          <ion-icon name="flask">&nbsp;Lv Insp</ion-icon>\n                        </button> -->\n\n                          <!-- <button [ngClass]="(device.nCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'" ion-button\n                          (click)="openSealMvhvInspectPage(i, device.nCheckIndex)"\n                          *ngIf="(item.json.worktype === soTypes.ZIST) && (device.nFeederVoltage > dCons.VOL_LEVEL_LPC_LV_400V)">\n                          <ion-icon name="flask">&nbsp;MVHV Insp</ion-icon>\n                        </button> -->\n\n                          <!-- <button ion-button\n                          (click)="openSealOpcInspectPage(i, device.nCheckIndex, device.nFeederVoltage)"\n                          [ngClass]="(device.nCheckTestStatus !== \'N\') ? \'completeColor\' : \'\'"\n                          *ngIf="(item.json.worktype === soTypes.ZIST && (device.nFeederVoltage < dCons.VOL_LEVEL_LPC_LV_400V))">\n                          <ion-icon name="flask">&nbsp;OPC Insp</ion-icon>\n                        </button> -->\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n\n\n                  <!--  <div *ngIf="item.json.ta0newvoltage > 2 || item.json.ta0installationtype > 2"> -->\n                  <div *ngIf="device.nFeederVoltage > 2">\n                    <ion-row>\n                      <ion-col col-12 col-sm-12 col-md-12>\n                        <p>\n                          <strong> Installation Current Transformer Details </strong>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>CT </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>R </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>Y </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>B </strong>\n                        </p>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>Serial No. </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer">\n                        <h2\n                          [ngClass]="(device.nMeterCtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                          (click)="(device.nMeterCtR == \'undefined\' || device.nMeterCtR == \'\' || device.nMeterCtR == null) ? \'\' : openSealRegisterDetailsPage(i, device.nMeterCtRIndex, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtRIndex, \'\')">\n                          {{ device.nMeterCtRSerialNum || \'-\' }} / {{ device.nMeterCtRCtrl || \'-\' }} </h2>\n                      </ion-col>\n\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer">\n                        <h2\n                          [ngClass]="(device.nMeterCtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                          (click)="(device.nMeterCtY == \'undefined\' || device.nMeterCtY == \'\' || device.nMeterCtY == null) ? \'\' : openSealRegisterDetailsPage(i, device.nMeterCtYIndex, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtYIndex, \'\')">\n                          {{ device.nMeterCtYSerialNum || \'-\' }} / {{ device.nMeterCtYCtrl || \'-\' }} </h2>\n                      </ion-col>\n\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer">\n                        <h2\n                          [ngClass]="(device.nMeterCtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                          (click)="(device.nMeterCtB == \'undefined\' || device.nMeterCtB == \'\' || device.nMeterCtB == null) ? \'\' : openSealRegisterDetailsPage(i, device.nMeterCtBIndex, device.nCheckModemIndex, device.nCheckSimIndex, device.nMeterCtBIndex, \'\')">\n                          {{ device.nMeterCtBSerialNum || \'-\' }} / {{ device.nMeterCtBCtrl || \'-\' }} </h2>\n                      </ion-col>\n\n                      <ion-col col-3 col-sm-3 col-md-1 style="text-align: right;">\n                        <ion-icon name="checkmark-circle"\n                          [ngClass]="(device.nMeterCtRRegisterStatus === \'Y\' && device.nMeterCtYRegisterStatus === \'Y\' && device.nMeterCtBRegisterStatus === \'Y\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-col>\n\n                    </ion-row>\n                  </div>\n\n\n                  <br />\n                  <div *ngIf="device.nFeederVoltage > 3">\n                    <ion-row>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>PT </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>R </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>Y </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3>\n                        <p>\n                          <strong>B </strong>\n                        </p>\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n                      <ion-col col-3 col-sm-3 col-md-2>\n                        <p>\n                          <strong>Serial No. </strong>\n                        </p>\n                      </ion-col>\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer">\n                        <h2\n                          [ngClass]="(device.nMeterPtRRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                          (click)="(device.nMeterPtR == \'undefined\' || device.nMeterPtR == \'\' || device.nMeterPtR == null) ? \'\' : openSealRegisterDetailsPage(i, device.nMeterPtRIndex, device.nCheckModemIndex, device.nCheckSimIndex, \'\', device.nMeterPtRIndex)">\n                          {{ device.nMeterPtRSerialNum || \'-\' }} / {{ device.nMeterPtRCtrl || \'-\' }}\n                        </h2>\n                      </ion-col>\n\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer">\n                        <h2\n                          [ngClass]="(device.nMeterPtYRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                          (click)="(device.nMeterPtY == \'undefined\' || device.nMeterPtY == \'\' || device.nMeterPtY == null) ? \'\' : openSealRegisterDetailsPage(i, device.nMeterPtYIndex, device.nCheckModemIndex, device.nCheckSimIndex, \'\', device.nMeterPtYIndex)">\n                          <span [style.display]="checkMeterCTY">{{ device.nMeterPtYSerialNum || \'-\' }} / {{\n                          device.nMeterPtYCtrl\n                          ||\n                          \'-\' }}</span>\n                        </h2>\n                      </ion-col>\n\n                      <ion-col col-3 col-sm-3 col-md-3 class="pointer">\n                        <h2\n                          [ngClass]="(device.nMeterPtBRegisterStatus !== \'N\') ? \'btn-transformer-complete\' : \'btn-transformer-uncomplete\'"\n                          (click)="(device.nMeterPtB == \'undefined\' || device.nMeterPtB == \'\' || device.nMeterPtB == null) ? \'\' : openSealRegisterDetailsPage(i, device.nMeterPtBIndex, device.nCheckModemIndex, device.nCheckSimIndex, \'\', device.nMeterPtBIndex)">\n                          <span [style.display]="checkMeterCTB">{{ device.nMeterPtBSerialNum || \'-\' }} / {{\n                          device.nMeterPtBCtrl\n                          ||\n                          \'-\' }}</span>\n                        </h2>\n                      </ion-col>\n\n                      <ion-col col-3 col-sm-3 col-md-1 style="text-align: right;">\n                        <ion-icon name="checkmark-circle"\n                          [ngClass]="(device.nMeterPtRRegisterStatus !== \'N\' && device.nMeterPtYRegisterStatus !== \'N\' && device.nMeterPtBRegisterStatus !== \'N\') ? \'complete-color\' : \'uncomplete-color\'">\n                        </ion-icon>\n                      </ion-col>\n\n                    </ion-row>\n                  </div>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n          <div *ngIf="!feeder.multiassetlocci && feeder.open" no-lines>\n            No Device Added\n          </div>\n        </span>\n      </ion-list-header>\n    </div>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveFeeder(item)">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Done\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-service-execution/seal-service-execution.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_16__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_9__providers_json_store_handler_json_store_handler__["a" /* JsonStoreHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], SealServiceExecutionPage);
    return SealServiceExecutionPage;
}());

//# sourceMappingURL=seal-service-execution.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealServiceExecutionPageModule", function() { return SealServiceExecutionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_service_execution__ = __webpack_require__(1107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealServiceExecutionPageModule = /** @class */ (function () {
    function SealServiceExecutionPageModule() {
    }
    SealServiceExecutionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_service_execution__["a" /* SealServiceExecutionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_service_execution__["a" /* SealServiceExecutionPage */]),
            ],
        })
    ], SealServiceExecutionPageModule);
    return SealServiceExecutionPageModule;
}());

//# sourceMappingURL=seal-service-execution.module.js.map

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
//# sourceMappingURL=10.js.map