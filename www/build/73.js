webpackJsonp([73],{

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReservationPageModule", function() { return CreateReservationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_reservation__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateReservationPageModule = /** @class */ (function () {
    function CreateReservationPageModule() {
    }
    CreateReservationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_reservation__["a" /* CreateReservationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__create_reservation__["a" /* CreateReservationPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], CreateReservationPageModule);
    return CreateReservationPageModule;
}());

//# sourceMappingURL=create-reservation.module.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable__);
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
 * Generated class for the CreateReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateReservationPage = /** @class */ (function () {
    function CreateReservationPage(navCtrl, navParams, appCtrl, gv, gf, loadingCtrl, jsonStoreCrud, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.gv = gv;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.jsonStoreCrud = jsonStoreCrud;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.showDeviceContent = true;
        this.changeshowExpand = true;
        this.valueIndicator = false;
        this.sLocationCheck = true;
        this.materialCheck = true;
        this.checkDevicePhaseIndicator = false;
        this.checkStringChange = false;
        this.addMaterialIntoList = true;
        this.countValid = 0;
        this.siteItem = [];
        this.recipientItem = [];
        this.zoneItems = [];
        this.reportingItems = [];
        this.materialData = [];
        this.devicePhaseIndicators = [];
        this.materialItems = [];
        this.checkMaterialArray = [];
        this.storeMaterialList = [];
        this.testLocation = [];
        this.storageLocation = [];
        this.lookupDetails();
    }
    /**
     * Common Lookup Load Functionality...
     */
    CreateReservationPage.prototype.lookupDetails = function () {
        var _this = this;
        this.getCurrentDate();
        this.getDevicePhaseIndicatorData();
        this.getZoneData();
        this.getReportingData();
        this.getSiteId();
        this.getLabourDetails();
        if (this.gv.ta0defsiteid !== '' && typeof this.gv.ta0defsiteid !== 'undefined' && this.gv.ta0defsiteid !== null) {
            this.siteid = this.gv.ta0defsiteid;
            var jsonString = { 'siteid': this.siteid };
            this.dataService.fetchZoneBySiteId('TA0ZONELIST', jsonString).then(function (results) {
                debugger;
                console.log('results ', results);
                var respResult = results;
                _this.zone = respResult.zone;
                _this.getStorageLocation();
            });
        }
    };
    /**
     * LookUp Data
     * Get Current Date Functionality...
     * Set Min Date and Max Date for Required Date Field...
     */
    CreateReservationPage.prototype.getCurrentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10)
            dd = '0' + dd.toString();
        if (mm < 10) {
            mm = '0' + mm;
        }
        this.req_date = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString();
        this.minDate = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString();
        this.maxDate = (yyyy + 20).toString();
    };
    /**
     * LookUp Data
     * Get Device Phase Indicator Details from the Material Data (MaterialData) Functionality...
     */
    CreateReservationPage.prototype.getDevicePhaseIndicatorData = function () {
        var _this = this;
        this.materialData = [];
        this.jsonStoreCrud.getAllRecord(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].MaterialData).then(function (result) {
            _this.materialData = result;
            _this.stoleValueDevicePhaseData(_this.materialData);
        });
    };
    /**
     * LookUp Data
     * Get Zone Details from the Lookup Data (Lookup Values) Functionality...
     */
    CreateReservationPage.prototype.getZoneData = function () {
        var _this = this;
        var queryPart = [];
        queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0ERMSZONE");
        this.jsonStoreCrud.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart).then(function (result) {
            _this.zoneItems = result;
        });
    };
    /**
     * LookUp Data
     * Get Reporting Details from the Lookup Data (Lookup Values) Functionality...
     */
    CreateReservationPage.prototype.getReportingData = function () {
        var _this = this;
        var queryPart = [];
        queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0REPORTING");
        this.jsonStoreCrud.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart).then(function (result) {
            _this.reportingItems = result;
        });
    };
    /**
     * LookUp Data
     * Get Material Data according to Device Phase indicator Functionality...
     */
    CreateReservationPage.prototype.getMaterialItemFn = function () {
        var _this = this;
        this.materialItems = [];
        var queryPart = [];
        this.materialCheck = false;
        queryPart = WL.JSONStore.QueryPart().equal("TA0DEVICEPHASEIND", this.dev_phase_ind.toString());
        this.jsonStoreCrud.getSearchRecordWithSorting(__WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_Domains__["a" /* Domains */].MaterialData, queryPart).then(function (result) {
            var testMaterial = result;
            for (var i = 0; i < testMaterial.length; i++) {
                _this.materialItems.push({ "materialnum": testMaterial[i].json.ta0materialnum, "compositeName": testMaterial[i].json.ta0materialnum + ' ( ' + testMaterial[i].json.description + ' ) ' });
            }
        });
    };
    /**
     * LookUp Data
     * Get Storage Location details for the requesting supervisor...
     */
    CreateReservationPage.prototype.getSiteId = function () {
        var _this = this;
        this.siteItem = [];
        this.dataService.fetchSiteParticularUser().then(function (results) {
            var respResult = results;
            _this.siteItem = respResult.respObject;
        });
        console.log(' this.siteItem  ', this.siteItem);
    };
    CreateReservationPage.prototype.pilotsite = function () {
        var pilotSite = ['6180', '6440'];
        pilotSite.forEach(function (element) {
            this.siteItem.forEach(function (element1) {
                if (element1.siteid == element)
                    console.log(element);
            });
        });
    };
    /**
     * LookUp Data
     * Get Storage Location details for the requesting supervisor...
     */
    CreateReservationPage.prototype.getStorageLocation = function () {
        var _this = this;
        debugger;
        this.testLocation = [];
        this.storageLocation = [];
        this.sLocationCheck = false;
        this.dataService.fetchSiteLocationParticularUser().then(function (results) {
            var respResult = results;
            _this.testLocation = respResult.respObject;
            _this.storageLocation = _this.getBooleanObjects(_this.testLocation, 'siteid', _this.siteid);
            if (_this.storageLocation.length === 1) {
                _this.sLocation = _this.storageLocation[0].location;
            }
        });
    };
    /**
     * Indicator
     * Indicator Change for Toggle Switch Functionality...
     */
    CreateReservationPage.prototype.showDeviceContentFn = function () {
        if (this.showDeviceContent)
            this.showDeviceContent = false;
        else
            this.showDeviceContent = true;
    };
    /**
     * Indicator
     * Indicator changes to Expand Card Functionality...
     */
    CreateReservationPage.prototype.changeshowExpandFn = function () {
        if (this.changeshowExpand)
            this.changeshowExpand = false;
        else
            this.changeshowExpand = true;
    };
    /**
     * Indicator
     * Card List Show and hide Functionality...
     */
    CreateReservationPage.prototype.valueIndicatorFn = function () {
        if (this.storeMaterialList.length > 0) {
            this.valueIndicator = true;
            this.checkDevicePhaseIndicator = true;
        }
        else {
            this.valueIndicator = false;
            this.checkDevicePhaseIndicator = false;
        }
    };
    /**
     * Utils
     * After Add Material of single Material reset the value to next data...
     */
    CreateReservationPage.prototype.emptyMaterialEnter = function () {
        this.material_id = "";
        this.quantity = null;
    };
    /**
     * get count of valid device...
     */
    CreateReservationPage.prototype.checkCountOfValid = function () {
        this.countValid = 0;
        if (this.storeMaterialList.length > 0) {
            for (var i = 0; i < this.storeMaterialList.length; i++) {
                if (this.storeMaterialList[i].respCode === '1')
                    this.countValid++;
            }
            if (this.storeMaterialList.length === this.countValid)
                this.checkStringChange = true;
            else
                this.checkStringChange = false;
        }
        else {
            this.checkStringChange = false;
        }
    };
    /**
     * Working Functionality
     * Add Material Details...
     */
    CreateReservationPage.prototype.addMaterial = function () {
        if (this.validationAddMat() && this.checkMaterialValidation()) {
            this.storeMaterialList.push({ "matnr": this.material_id.materialnum, "quantity": this.quantity, "req_date": this.req_date, "gsber": this.siteid, "lgort": this.sLocation, "respCode": "2" });
            this.checkMaterialArray.push(this.material_id.materialnum);
            this.emptyMaterialEnter();
            this.valueIndicatorFn();
            this.addMaterialIntoList = false;
        }
        this.checkCountOfValid();
    };
    /**
     * Working Functionality
     * Delete Material Details using add Index...
     * @param index
     */
    CreateReservationPage.prototype.deleteMaterial = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Warning !',
            subTitle: "Are you sure to delete material",
            cssClass: 'alert-warning',
            buttons: [{
                    text: 'Yes',
                    role: 'yes',
                    cssClass: 'ok-button',
                    handler: function () {
                        _this.storeMaterialList.splice(index, 1);
                        _this.checkMaterialArray.splice(index, 1);
                        _this.valueIndicatorFn();
                        _this.checkCountOfValid();
                    }
                }, { text: 'No', cssClass: 'ok-button', role: 'no', handler: function () { } }]
        });
        alert.present();
    };
    /**
     * Working Functionality
     * Create Fields as a Json Format Functionality...
     */
    CreateReservationPage.prototype.setJsonForValidation = function (cond) {
        if (this.checkMaterialArray.length > 0) {
            var req = [];
            var sLocation = this.sLocation.replace(/[^0-9]/g, "");
            if (cond === 'VAL_M') {
                for (var i = 0; i < this.checkMaterialArray.length; i++)
                    req[i] = { "ind": cond, "devInd": this.dev_phase_ind, "matnr": this.checkMaterialArray[i], "gsber": this.siteid, "lgort": sLocation };
                return req;
            }
            else {
                var res = '';
                for (var i = 0; i < this.storeMaterialList.length; i++)
                    req[i] = { "matnr": this.storeMaterialList[i].matnr, "bdmng": this.storeMaterialList[i].quantity, "lgort": sLocation, "werks": this.gv.plant, "bdter": this.dateConversion(this.storeMaterialList[i].req_date) };
                res = { "ind": cond, "devInd": this.dev_phase_ind, "wempf": this.recipient.laborcode, "gsber": this.siteid, "zxone": this.zone, "zrpt": this.reporting_to, "usnam": this.created_by, "ITEM": req };
                return res;
            }
        }
        else {
            this.addMaterialIntoList = true;
            this.displayErrorMsg("Please add the material details for validation");
            return false;
        }
    };
    /**
     * Working Functionality
     * Validation Data...
     */
    CreateReservationPage.prototype.validationToSubmit = function (cond) {
        var _this = this;
        if (this.validationAddMat()) {
            var loading_1 = this.loadingCtrl.create({
                content: this.gv.loadingContent
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            if (cond === 'VAL_M') {
                this.dataService.ermsMaterialValidationCheck(this.setJsonForValidation(cond)).then(function (results) {
                    var respObject = [];
                    respObject = results;
                    if (respObject.processStatus === "success") {
                        for (var i = 0; i < _this.storeMaterialList.length; i++) {
                            for (var j = 0; j < respObject.respObject.length; j++) {
                                if (Number(_this.storeMaterialList[i].matnr) === Number(respObject.respObject[j].matnr)) {
                                    _this.storeMaterialList[i].respCode = respObject.respObject[j].respCode;
                                    _this.storeMaterialList[i].zlog = respObject.respObject[j].zlog;
                                }
                            }
                        }
                        _this.checkCountOfValid();
                        loading_1.dismiss();
                    }
                });
            }
            else {
                this.dataService.ermsMaterialSubmitCheck(this.setJsonForValidation(cond)).then(function (results) {
                    var respObject = [];
                    respObject = results;
                    if (respObject.processStatus === "success") {
                        if (respObject.respObject.length > 0) {
                            if (respObject.respObject[0].respCode === "1") {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Success !',
                                    subTitle: respObject.respObject[0].zlog,
                                    cssClass: 'alert-success',
                                    buttons: [{
                                            text: 'Ok',
                                            role: 'ok',
                                            cssClass: 'ok-button',
                                            handler: function () {
                                                loading_1.dismiss();
                                                var newRootNav = _this.appCtrl.getRootNavById("n4");
                                                newRootNav.push("WoHomePage", "");
                                            }
                                        }]
                                });
                                alert_1.present();
                            }
                            else {
                                _this.displayErrorMsg(respObject.respObject[0].zlog);
                            }
                            loading_1.dismiss();
                        }
                    }
                });
            }
        }
    };
    /**
     * Date conversion for create reserveation...
     * @param dateValue
     */
    CreateReservationPage.prototype.dateConversion = function (dateValue) {
        var result = dateValue.split('-');
        return result[2] + result[1] + result[0];
    };
    /**
     * Validation
     * Validation Before Add Material Functionality...
     */
    CreateReservationPage.prototype.validationAddMat = function () {
        if (this.dev_phase_ind === '' || this.dev_phase_ind === null || typeof (this.dev_phase_ind) === 'undefined') {
            this.displayErrorMsg("Please select the device phase indicator");
            return false;
        }
        if (this.recipient === '' || this.recipient === null || typeof (this.recipient) === 'undefined') {
            this.displayErrorMsg("Please select the goods recipient id");
            return false;
        }
        if (this.siteid === '' || this.siteid === null || typeof (this.siteid) === 'undefined') {
            this.displayErrorMsg("Please select the site id");
            return false;
        }
        if (this.sLocation === '' || this.sLocation === null || typeof (this.sLocation) === 'undefined') {
            this.displayErrorMsg("Please select the storage location");
            return false;
        }
        if (this.zone === '' || this.zone === null || typeof (this.zone) === 'undefined') {
            this.displayErrorMsg("Please select the zone");
            return false;
        }
        if (this.reporting_to === '' || this.reporting_to === null || typeof (this.reporting_to) === 'undefined') {
            this.displayErrorMsg("Please select the Reporting to");
            return false;
        }
        if (this.storeMaterialList.length < 1) {
            if (this.material_id === '' || this.material_id === null || typeof (this.material_id) === 'undefined') {
                this.displayErrorMsg("Please select the material id");
                return false;
            }
            if (this.req_date === '' || this.req_date === null || typeof (this.req_date) === 'undefined') {
                this.displayErrorMsg("Please select the required date");
                return false;
            }
            if (this.quantity === '' || this.quantity === null || typeof (this.quantity) === 'undefined') {
                this.displayErrorMsg("Please enter the quantity");
                return false;
            }
        }
        return true;
    };
    CreateReservationPage.prototype.checkMaterialValidation = function () {
        if (this.material_id === '' || this.material_id === null || typeof (this.material_id) === 'undefined') {
            this.displayErrorMsg("Please select the material id");
            return false;
        }
        if (this.req_date === '' || this.req_date === null || typeof (this.req_date) === 'undefined') {
            this.displayErrorMsg("Please select the required date");
            return false;
        }
        if (this.quantity === '' || this.quantity === null || typeof (this.quantity) === 'undefined') {
            this.displayErrorMsg("Please enter the quantity");
            return false;
        }
        return true;
    };
    /**
     * Validation for Quantity field only enter the numberial value...
     */
    CreateReservationPage.prototype.validationQuantity = function () {
        var _this = this;
        if (this.quantity.toString().length < 11) {
            var pattern = /^(?!(0))[0-9]*$/gm;
            var qt = this.quantity.toString();
            var res = pattern.test(this.quantity.toString());
            if (!res) {
                this.quantity = qt.toString().replace(/[^0-9]+/, '');
                var alert_2 = this.alertCtrl.create({
                    title: 'Error !',
                    enableBackdropDismiss: false,
                    subTitle: "Please enter the valid number",
                    cssClass: 'alert-error',
                    buttons: [{
                            text: 'Ok',
                            role: 'ok',
                            cssClass: 'ok-button',
                            handler: function () {
                                _this.quantity = qt.toString().replace(/[^0-9]+/, '');
                            }
                        }]
                });
                alert_2.present();
                return false;
            }
            else {
                return true;
            }
        }
        else {
            var qt = this.quantity.toString().substring(0, 10);
            var alert_3 = this.alertCtrl.create({
                title: 'Error !',
                subTitle: "Please enter the valid number",
                cssClass: 'alert-error',
                enableBackdropDismiss: false,
                buttons: [{
                        text: 'Ok',
                        role: 'ok',
                        cssClass: 'ok-button',
                        handler: function () {
                            _this.quantity = qt;
                        }
                    }]
            });
            alert_3.present();
            return false;
        }
    };
    /**
     * Utils
     * Display Sucess Message to User...
     * @param message
     */
    CreateReservationPage.prototype.displayErrorMsg = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error !',
            subTitle: message,
            cssClass: 'alert-error',
            buttons: [{
                    text: 'Ok',
                    role: 'ok',
                    cssClass: 'ok-button',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    /**
     * Utils
     * Get Labor Details as List...
     */
    CreateReservationPage.prototype.getLabourDetails = function () {
        var _this = this;
        this.dataService.fetchLaborDetails().then(function (results) {
            var respResult = results;
            _this.recipientItem = respResult.respObject;
            for (var i = 0; i < _this.recipientItem.length; i++)
                _this.recipientItem[i].compositeName = _this.recipientItem[i].laborcode + ' ( ' + _this.recipientItem[i].ta0laborname + ' ) ';
        });
    };
    /**
     * Utils
     * get Values to find obj, key and value...
     * @param obj
     * @param key
     * @param val
     */
    CreateReservationPage.prototype.getBooleanObjects = function (obj, key, val) {
        debugger;
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getBooleanObjects(obj[i], key, (val === 'true' ? true : (val === 'false' ? false : val))));
            }
            else if (i == key) {
                if (obj[i] === val) {
                    objects.push(obj);
                }
            }
        }
        return objects;
    };
    /**
     * Utils
     * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
     */
    CreateReservationPage.prototype.stoleValueDevicePhaseData = function (value) {
        this.devicePhaseIndicators = [];
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["ta0devicephaseind"];
        }
        var unique = array.filter(this.onlyUnique).sort();
        this.devicePhaseIndicators = unique;
        ;
    };
    /**
     * Utils
     * Return only Unique values as list form funcitonality...
     * @param value
     * @param index
     * @param self
     */
    CreateReservationPage.prototype.onlyUnique = function (value, index, self) {
        if (value !== undefined && value !== "") {
            return self.indexOf(value) === index;
        }
    };
    /**
     * Common
     * Go Back to WoHome page...
     */
    CreateReservationPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("WoHomePage", "");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable__["SelectSearchableComponent"])
    ], CreateReservationPage.prototype, "selectComponent", void 0);
    CreateReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-reservation',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/create-reservation/create-reservation.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Create Reservation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Create Reservation</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      ( <span style="color: red;">*</span> These fields are mandatory. )\n    </ion-col>\n    <ion-col>\n      <ion-toggle style="float:right;" checked="true" (ionChange)="changeshowExpandFn()"></ion-toggle>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style="font-size: 17px; color: black">Device Phase Indicator</b> <span\n              style="color: red">*</span></ion-label>\n          <ion-select [(ngModel)]="dev_phase_ind" (ionChange)="getMaterialItemFn()"\n            [disabled]="checkDevicePhaseIndicator">\n            <ion-option *ngFor="let devicePhaseIndicator of devicePhaseIndicators" [value]="devicePhaseIndicator"\n              [selected]="devicePhaseIndicator === dev_phase_ind">{{ devicePhaseIndicator }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>{{sLocation}}\n          <ion-label stacked><b style=" font-size: 17px; color: black">Storage Location</b> <span\n              style="color: red">*</span></ion-label>\n          <ion-select [(ngModel)]="sLocation">\n            <ion-option *ngFor="let loc of storageLocation" [selected]="loc.location === sLocation"\n              [disabled]="sLocationCheck">{{ loc.location }}</ion-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="changeshowExpand">\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Zone</b> <span style="color: red">*</span>\n          </ion-label>\n          <ion-select [(ngModel)]="zone">\n            <ion-option *ngFor="let zoneItem of zoneItems" [value]="zoneItem.json.value"\n              [selected]="zoneItem.json.value === zone" disabled>{{ zoneItem.json.description }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Goods Recipient</b> <span\n              style="color: red">*</span> </ion-label>\n          <select-searchable item-content [(ngModel)]="recipient" [items]="this.recipientItem"\n            itemValueField="laborcode" itemTextField="compositeName" [canSearch]="true">\n          </select-searchable>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="changeshowExpand">\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        {{siteItem.siteid}}\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Site ID</b> <span style="color: red">*</span>\n          </ion-label>\n          <ion-select [(ngModel)]="siteid" (ionChange)="getStorageLocation()">\n            <!-- <ion-option *ngFor="let store of siteItem" [value]="store.siteid" [selected]="gv.ta0defsiteid === store.siteid" [disabled]="gv.ta0defsiteid !== store.siteid" >{{ store.siteid }} &nbsp; - &nbsp; {{ store.description }} </ion-option> -->\n            <ion-option *ngFor="let store of siteItem" [value]="store.siteid"\n              [selected]="gv.ta0defsiteid === store.siteid">{{ store.siteid }} &nbsp; - &nbsp; {{ store.description }}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Reporting To</b> <span\n              style="color: red">*</span></ion-label>\n          <ion-select [(ngModel)]="reporting_to">\n            <ion-option *ngFor="let reportingItem of reportingItems" [value]="reportingItem.json.value"\n              [selected]="reportingItem.json.value === reporting_to">{{ reportingItem.json.description }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="changeshowExpand">\n    <ion-col col-12 col-lg-12 col-md-12 col-xs-12 col-sm-12>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Created By</b></ion-label>\n          <ion-input [(ngModel)]="created_by" type="text" [value]="gv.personid" disabled></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="padding-bottom: 20px;">\n    <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Material Number</b></ion-label>\n          <!--<ion-select [(ngModel)]="material_id" [disabled]="materialCheck" id="adjust1">\n              <ion-option *ngFor="let materialItem of materialItems" [value]="materialItem.json.ta0materialnum" [selected]="materialItem.json.ta0materialnum === material_id" [disabled]="checkMaterialArray.includes(materialItem.json.ta0materialnum)">{{ materialItem.json.ta0materialnum }}</ion-option>\n          </ion-select>-->\n          <select-searchable item-content [(ngModel)]="material_id" [items]="this.materialItems"\n            itemValueField="materialnum" itemTextField="compositeName" [canSearch]="true" [disabled]="materialCheck">\n          </select-searchable>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Requirement Date</b></ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" picker-format="DD MMMM YYYY" [min]="minDate" max="2030"\n            [(ngModel)]="req_date" type="date"></ion-datetime>\n\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked><b style=" font-size: 17px; color: black">Quantity</b></ion-label>\n          <ion-input [(ngModel)]="quantity" type="text" id="adjust2" (keyup)="validationQuantity()"\n            (ionBlur)="validationQuantity()"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1>\n      <ion-row class="okay-button">\n        <button ion-button style="float: right;" (click)="addMaterial()">\n          <ion-icon name="add-circle" style="font-size: 35px;"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-card *ngIf="valueIndicator">\n    <ion-card-header>\n      <ion-row (click)="showDeviceContentFn()">\n        <ion-col col-9>\n          <b>List of Materials</b>\n        </ion-col>\n        <ion-col col-3>\n          <span style="float: right;">\n            <ion-icon [name]="showDeviceContent? \'arrow-down\':\'arrow-up\'"></ion-icon>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content *ngIf="showDeviceContent">\n      <ion-row>\n        <ion-col col-12 *ngFor="let device of storeMaterialList; let i = index;">\n          <ion-row [ngClass]="i%2 != 0 ? \'classA\' : \'classB\'" style="padding: 10px;">\n            <ion-col col-1 style="padding-top: 20px;">\n              {{i+1}}.\n            </ion-col>\n            <ion-col col-9>\n              <ion-row>\n                <ion-col col-6>\n                  <b>Material Number :</b> {{ device.matnr }}\n                </ion-col>\n                <ion-col col-4>\n                  <b>Requirement Date :</b> {{ device.req_date }}\n                </ion-col>\n                <ion-col col-2>\n                  <b>Qty :</b> {{ device.quantity }}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12>\n                  <b>Status :</b> {{ device.zlog !== \'\' ? device.zlog: \'\' }}\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-2 style="padding-top: 20px;">\n              <span style="float: right;">\n                <button ion-button (click)="deleteMaterial(i)"\n                  [color]="device.respCode !== \'2\' ? ( (device.respCode === \'1\') ? \'secondary\':\'danger\' ):\'primary\'">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <ion-col style="text-align: center;">\n      <button ion-button style="padding: 15px;" (click)="validationToSubmit(checkStringChange ? \'RESV_1\':\'VAL_M\')"\n        [disabled]="addMaterialIntoList"> {{  checkStringChange ? \'Create Reservation\':\'Validate to ERMS\' }} </button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/create-reservation/create-reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], CreateReservationPage);
    return CreateReservationPage;
}());

//# sourceMappingURL=create-reservation.js.map

/***/ })

});
//# sourceMappingURL=73.js.map