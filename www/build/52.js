webpackJsonp([52],{

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealCeInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SealCeInspectPage = /** @class */ (function () {
    function SealCeInspectPage(navCtrl, gf, params, navParams, toastCtrl, platform, appCtrl, loadingCtrl, dataService, gv, jsonStore) {
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
        this.check = false;
        this.validateField = true;
        this.showMainMeter = false;
        // Hide/Show Variables
        this.showMeter = true;
        this.showComponentChange = true;
        this.showNonComponentChange = true;
        this.showRemarks = true;
        this.item = this.navParams.data;
        debugger;
        this.itemOri = this.params.get("paramObj");
        this.fIndex = this.params.get("fIndex");
        this.maIndex = this.params.get("maIndex");
        this.simIndex = this.params.get("simIndex");
        //this.multiassetModem = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
        //this.multiassetSim = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
        // Clone Data
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0simcardip) !== 'undefined') {
            this.ta0simcardip = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0simcardip;
        }
        if (typeof (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0datacenter) !== 'undefined') {
            this.ta0datacenter = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0datacenter;
        }
        this.ceInspect = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.pingInspect = new __WEBPACK_IMPORTED_MODULE_1__pojo_DeviceTest__["a" /* DeviceTest */]();
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
        // Read ta0testdetail if exist
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
            console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
            // Get Total Length of Array
            //console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
            var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
            for (var i = 0; i < testLength; i++) {
                var ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
                var type = ta0testdetail.ta0testtype;
                var applicable = ta0testdetail.ta0na;
                console.log("TYPE: " + type);
                switch (type) {
                    case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CCNC: {
                        this.ceInspect = ta0testdetail;
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_HTIE: {
                        this.pingInspect = ta0testdetail;
                        break;
                    }
                }
            }
        }
    }
    SealCeInspectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealCeInspectPage');
    };
    SealCeInspectPage.prototype.saveDetails = function () {
        var _this = this;
        console.log("This section is to save details...");
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
        // Default value from parent
        var assetnum = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
        var siteid = this.item.json.siteid;
        var wonum = this.item.wonum;
        this.ceInspect.assetnum = assetnum;
        this.ceInspect.siteid = siteid;
        this.ceInspect.wonum = wonum;
        this.ceInspect.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CCNC;
        this.pingInspect.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_HTIE;
        // Push Data into JSON for Transformer Ratio Test
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.ceInspect);
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.pingInspect);
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0simcardip = this.ta0simcardip;
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0datacenter = this.ta0datacenter;
        if (typeof (this.simIndex) !== 'undefined') {
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simIndex].ta0simcardip = this.ta0simcardip;
            this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.simIndex].ta0datacenter = this.ta0datacenter;
        }
        // Validate Test Status
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
        debugger;
        this.gf.startLoading();
        this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        ///this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.displayToast("CE Inspection locally updated.");
            // Back to service-execution page.
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
            this.gf.stopLoading();
        }
        else if ((__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            mobilesignalswift.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    //item, wonumVal, pageAction, feederCode, workOrderType) 
                    var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                    var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                    var itemArray = [];
                    itemArray[0] = (itemVal);
                    _this.dataService
                        .saveRecordWithType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
                        // Copy clone back to original
                        _this.itemOri = JSON.parse(JSON.stringify(_this.item));
                        // Replace data into JSON local
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                        _this.gf.warningAlert("Success", "CE Inspection save successfully.", "Cancel");
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                        _this.gf.stopLoading();
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                        _this.gf.stopLoading();
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.gf.warningAlert("Success", "CE Inspection locally updated.", "Cancel");
                    // Back to service-execution page.
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                    _this.gf.stopLoading();
                }
            });
        }
        else {
            var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
            var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
            var itemArray = [];
            itemArray.push(itemVal);
            this.dataService
                .saveRecordWithType(itemVal, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
                console.log(' result + ' + JSON.stringify(results));
                var itemValNew = _this.itemOri.json.ta0feeder[_this.fIndex];
                var objfeeder = Object.assign({}, itemValNew);
                var itemValSingle = null;
                delete objfeeder['feederSetDesign'];
                itemValSingle = Object.assign({}, objfeeder);
                itemValSingle.multiassetlocci = [];
                for (var _i = 0, _a = objfeeder.multiassetlocci; _i < _a.length; _i++) {
                    var multi = _a[_i];
                    //let multiAssetVal = Object.assign({}, multi);
                    if (typeof (multi.assetnum) !== 'undefined') {
                        delete multi['ta0sealdetail'];
                        delete multi['ta0stickerdetail'];
                        delete multi['ta0testdetail'];
                        multi.ta0feedercode = feederCode;
                        multi.ta0feederdescription = _this.item.json.ta0feeder[_this.fIndex].description;
                        itemValSingle.multiassetlocci.push(multi);
                    }
                }
                for (var i = 0; i < _this.itemOri.json.ta0feeder.length; i++) {
                    if (i !== _this.fIndex) {
                        if (typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign) !== "undefined") {
                            if (typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                                && typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined') {
                                var eMeterIndex = _this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                                var nMeterIndex = _this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feedercode = _this.itemOri.json.ta0feeder[i].ta0feedercode;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feederdescription = _this.itemOri.json.ta0feeder[i].description;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feedercode = _this.itemOri.json.ta0feeder[i].ta0feedercode;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feederdescription = _this.itemOri.json.ta0feeder[i].description;
                                var eMulti = _this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex];
                                delete eMulti['ta0sealdetail'];
                                delete eMulti['ta0stickerdetail'];
                                delete eMulti['ta0testdetail'];
                                var nMulti = _this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex];
                                delete nMulti['ta0sealdetail'];
                                delete nMulti['ta0stickerdetail'];
                                delete nMulti['ta0testdetail'];
                                itemValSingle.multiassetlocci.push(eMulti);
                                itemValSingle.multiassetlocci.push(nMulti);
                            }
                            else if (typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) !== 'undefined'
                                && typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) === 'undefined') {
                                var eMeterIndex = _this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeterIndex;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feedercode = _this.itemOri.json.ta0feeder[i].ta0feedercode;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex].ta0feederdescription = _this.itemOri.json.ta0feeder[i].description;
                                var eMulti = _this.itemOri.json.ta0feeder[i].multiassetlocci[eMeterIndex];
                                delete eMulti['ta0sealdetail'];
                                delete eMulti['ta0stickerdetail'];
                                delete eMulti['ta0testdetail'];
                                itemValSingle.multiassetlocci.push(eMulti);
                            }
                            else if (typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeter) !== 'undefined'
                                && typeof (_this.itemOri.json.ta0feeder[i].feederSetDesign[0].eMeter) === 'undefined') {
                                var nMeterIndex = _this.itemOri.json.ta0feeder[i].feederSetDesign[0].nMeterIndex;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feedercode = _this.itemOri.json.ta0feeder[i].ta0feedercode;
                                _this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex].ta0feederdescription = _this.itemOri.json.ta0feeder[i].description;
                                var nMulti = _this.itemOri.json.ta0feeder[i].multiassetlocci[nMeterIndex];
                                delete nMulti['ta0sealdetail'];
                                delete nMulti['ta0stickerdetail'];
                                delete nMulti['ta0testdetail'];
                                itemValSingle.multiassetlocci.push(nMulti);
                            }
                        }
                    }
                }
                debugger;
                console.log('  code : ' + feederCode);
                _this.dataService
                    .saveRecordWithNewType(itemValSingle, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_MULTIASSETLOCCI, feederCode, _this.itemOri.json.worktype)
                    .then(function (results) {
                    console.log(' result + ' + JSON.stringify(results));
                    // Copy clone back to original
                    _this.itemOri = JSON.parse(JSON.stringify(_this.item));
                    // Replace data into JSON local
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                    _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                    _this.gf.warningAlert("Success", "CE Inspection save successfully.", "Cancel");
                    // Back to service-execution page.
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                    _this.gf.stopLoading();
                }).then(function (error) {
                    console.log('service failure : ' + error);
                    _this.gf.stopLoading();
                });
            }).catch(function (error) {
                console.log('service failure : ' + error);
                /** Because this loading off here make it loading dismiss early before navigate to main page. */
                if (error !== undefined) {
                    _this.gf.stopLoading();
                }
            });
        }
        // this.gf.displayToast('Data Save Successfully.');
        // this.navCtrl.pop();
        console.log("DATA: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
    };
    SealCeInspectPage.prototype.userInputType = function (event, key) {
        debugger;
        var RexExp = /(^[0-9.]+$)/;
        var newValue = event.target.value;
        var regExp = new RegExp(RexExp);
        var newVal2;
        var newValSlice;
        if (!regExp.test(newValue)) {
            newVal2 = newValue.substr(0, newValue.length - 1);
            event.target.value = newVal2;
            newValSlice = event.target.value;
        }
        else {
            newValSlice = event.target.value;
        }
        switch (key) {
            case 'IPData':
                this.ta0simcardip = newValSlice;
                break;
            case 'DataCenter':
                this.ta0datacenter = newValSlice;
                break;
        }
    };
    /*
    Created by Ameer 13/11/2018
    Allow user to enter number and char only
    */
    SealCeInspectPage.prototype.userInput2 = function (eventVal, key) {
        debugger;
        var RexExp = /^([A-Za-z 0-9]*)?$/;
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
            case 'DataCenter':
                this.ta0datacenter = newValSlice;
                break;
        }
    };
    SealCeInspectPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /**
    * Hide Show Meter Info Section
    * Created  : Alif
    * Date     : 26-11-2018
    * Edited   :
    */
    SealCeInspectPage.prototype.showMeterSection = function (action) {
        if (this.showMeter === false) {
            this.showMeter = true;
        }
        else if (action === false) {
            this.showMeter = false;
        }
    };
    /**
    * Hide Show Component Change Section
    * Created  : Alif
    * Date     : 26-11-2018
    * Edited   :
    */
    SealCeInspectPage.prototype.showComponentChangeSection = function (action) {
        if (this.showComponentChange === false) {
            this.showComponentChange = true;
        }
        else if (action === false) {
            this.showComponentChange = false;
        }
    };
    /**
    * Hide Show Non-Component Change Section
    * Created  : Alif
    * Date     : 26-11-2018
    * Edited   :
    */
    SealCeInspectPage.prototype.showNonComponentChangeSection = function (action) {
        if (this.showNonComponentChange === false) {
            this.showNonComponentChange = true;
        }
        else if (action === false) {
            this.showNonComponentChange = false;
        }
    };
    /**
    * Hide Show Remarks Section
    * Created  : Alif
    * Date     : 26-11-2018
    * Edited   :
    */
    SealCeInspectPage.prototype.showRemarksSection = function (action) {
        if (this.showRemarks === false) {
            this.showRemarks = true;
        }
        else if (action === false) {
            this.showRemarks = false;
        }
    };
    SealCeInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-ce-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/deviceTestForms/seal-ce-inspect/seal-ce-inspect.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Daily Report Maintenance</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Date & Time Meter-->\n  <div id="showMeterDateTime">\n    <ion-grid>\n      <ion-item-divider color="light" class="pointer" (click)="showMeterSection(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>METER</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;" text-right>\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showMeter"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showMeter"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-grid *ngIf="showMeter">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">IP/Data No.</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-input id="ta0ip" type="text" maxlength="40" (keyup)="userInputType($event,\'IPData\')"\n                [(ngModel)]="ta0simcardip" placeholder="Enter value"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Data Center</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-input id="ta0data" type="text" maxlength="40" (keyup)="userInput2($event,\'DataCenter\')"\n                [(ngModel)]="ta0datacenter" placeholder="Enter value"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-list radio-group [(ngModel)]="pingInspect.ta0pt_hyprtminal" style="margin-bottom: 0px;">\n          <ion-row>\n            <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Hyperterminal</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item [ngClass]="(pingInspect.ta0pt_hyprtminal !== \'\') ? \'blackHighlightText\' : \'redHighlightText\'">\n                <ion-label>Pass</ion-label>\n                <ion-radio checked value="true"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item [ngClass]="(pingInspect.ta0pt_hyprtminal !== \'\') ? \'blackHighlightText\' : \'redHighlightText\'">\n                <ion-label>Fail</ion-label>\n                <ion-radio value="false"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n        <ion-list radio-group [(ngModel)]="pingInspect.ta0pt_iee" style="margin-bottom: 0px;">\n          <ion-row>\n            <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">IEE</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item [ngClass]="(pingInspect.ta0pt_iee !== \'\') ? \'blackHighlightText\' : \'redHighlightText\'">\n                <ion-label>Pass</ion-label>\n                <ion-radio checked value="true"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item [ngClass]="(pingInspect.ta0pt_iee !== \'\') ? \'blackHighlightText\' : \'redHighlightText\'">\n                <ion-label>Fail</ion-label>\n                <ion-radio value="false"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-grid>\n\n      <ion-item-divider color="light" class="pointer" (click)="showComponentChangeSection(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>COMPONENT CHANGE</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;" text-right>\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showComponentChange"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showComponentChange"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-grid *ngIf="showComponentChange">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Adaptor Modem</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_adaptor_modem"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Adaptor Cas</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_adaptor_cas"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Attenna</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_antenna"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Cas 2p</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_cas_2p"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Cas 4p</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_cas_4p"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Converter</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_converter"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Data Cable</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_data_cable"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Rccb</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_rccb"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Surge</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_surge"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Timer</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_timer"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Modem</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_modem"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Simcard</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_simcard"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item-divider color="light" class="pointer" (click)="showNonComponentChangeSection(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>NON-COMPONENT CHANGE</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;" text-right>\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showNonComponentChange"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showNonComponentChange"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-grid *ngIf="showNonComponentChange">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Clear Simcard</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_clear_simcard"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Reset Modem</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_reset_modem"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Set Cas</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_set_cas"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Set Baudrate</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_set_baudrate"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Set Ifc</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_ifc"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Set Timer</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_set_timer"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Set Watchdog</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_set_watchdog"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Bypass Timer</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_bypass_timer"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Recall</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_recall"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Update Msn</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_update_msn"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Update IP/Data no</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_update_ip"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label>Rccb Trip</ion-label>\n              <ion-checkbox [(ngModel)]="ceInspect.ta0cc_rccb_trip"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item-divider color="light" class="pointer" (click)="showRemarksSection(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="text"></ion-icon>&nbsp; <strong>REMARKS</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;" text-right>\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showRemarks"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showRemarks"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <ion-grid *ngIf="showRemarks">\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" type="text" maxlength="40" [(ngModel)]="ceInspect.ta0naremarks"\n                placeholder="Please Enter Remark"\n                [ngClass]="(ceInspect.ta0naremarks === undefined || ceInspect.ta0naremarks === \'\') ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/deviceTestForms/seal-ce-inspect/seal-ce-inspect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */]])
    ], SealCeInspectPage);
    return SealCeInspectPage;
}());

//# sourceMappingURL=seal-ce-inspect.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealCeInspectPageModule", function() { return SealCeInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_ce_inspect__ = __webpack_require__(1079);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealCeInspectPageModule = /** @class */ (function () {
    function SealCeInspectPageModule() {
    }
    SealCeInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_ce_inspect__["a" /* SealCeInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_ce_inspect__["a" /* SealCeInspectPage */]),
            ],
        })
    ], SealCeInspectPageModule);
    return SealCeInspectPageModule;
}());

//# sourceMappingURL=seal-ce-inspect.module.js.map

/***/ })

});
//# sourceMappingURL=52.js.map