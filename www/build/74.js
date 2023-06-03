webpackJsonp([74],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNotePageModule", function() { return CreateNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_note__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNotePageModule = /** @class */ (function () {
    function CreateNotePageModule() {
    }
    CreateNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_note__["a" /* CreateNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__create_note__["a" /* CreateNotePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], CreateNotePageModule);
    return CreateNotePageModule;
}());

//# sourceMappingURL=create-note.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(505);
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
 * Generated class for the CreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNotePage = /** @class */ (function () {
    function CreateNotePage(navCtrl, appCtrl, navParams, alertCtrl, loadingCtrl, dataService, gv, gf, toast, jsonStoreCrud, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.gv = gv;
        this.gf = gf;
        this.toast = toast;
        this.jsonStoreCrud = jsonStoreCrud;
        this.barcodeScanner = barcodeScanner;
        this.valueIndicator = false;
        this.showDeviceContent = true;
        this.returnItems = [];
        this.materialItems = [];
        this.checkArrayList = [];
        this.storeMaterialList = [];
        this.cnCategories = [];
        this.cnReturnTypes = [];
        this.containerBoot = false;
        this.deviceslist = [];
        this.showDeviceStatus = false;
        this.deleteCheck = [];
        this.returnTypes = [];
        this.cnVarItem = [];
        this.selectedCat = true;
        this.testLocation = [];
        this.storageLocation = [];
        this.sLocationCheck = true;
        this.siteItem = [];
        this.disableSubmit = true;
        this.ta0divlimit = 0;
        this.getSiteId();
        this.getCnCategory();
        this.siteid = this.gv.ta0defsiteid;
        this.cnVarItem = this.navParams.get('attr');
        if ((typeof (this.cnVarItem)) !== 'undefined') {
            this.loadPreviosCreditNote(this.cnVarItem);
        }
    }
    CreateNotePage.prototype.loadPreviosCreditNote = function (cnVarItem) {
        console.log('  this.cnVarItem   => ', cnVarItem);
        if ((typeof (cnVarItem.category) !== 'undefined') && (cnVarItem.category !== '') && (cnVarItem.category !== null)) {
            this.ta0rcncat = this.cnVarItem.category;
        }
        if ((typeof (cnVarItem.returntype) !== 'undefined') && (cnVarItem.returntype !== '') && (cnVarItem.returntype !== null)) {
            this.ta0rcntyp = cnVarItem.returntype;
        }
        if ((typeof (cnVarItem.reservenum) !== 'undefined') && (cnVarItem.reservenum !== '') && (cnVarItem.reservenum !== null)) {
            this.ta0rsnum = this.cnVarItem.reservenum;
        }
        if ((typeof (cnVarItem.ta0cnline) !== 'undefined') && (cnVarItem.ta0cnline.length !== 0) && (cnVarItem.ta0cnline !== null)) {
            this.deviceslist = [];
            for (var _i = 0, _a = cnVarItem.ta0cnline; _i < _a.length; _i++) {
                var q = _a[_i];
                console.log('serialnum', q.serialnum);
                this.deviceslist.push({ "serialnum": q.serialnum });
            }
            this.showDeviceStatus = true;
        }
    };
    /**
     * LookUp Data
     * Get Storage Location details for the requesting supervisor...
     */
    CreateNotePage.prototype.getSiteId = function () {
        var _this = this;
        this.siteItem = [];
        this.dataService.fetchSiteParticularUser().then(function (results) {
            var respResult = results;
            _this.siteItem = respResult.respObject;
        });
    };
    /**
   * LookUp Data
   * Get Storage Location details for the requesting supervisor...
   */
    CreateNotePage.prototype.getStorageLocation = function () {
        var _this = this;
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
  * Diversion
  * validation reservation for diversion...
  */
    CreateNotePage.prototype.validateReservation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        if (this.setValidation(loading)) {
            this.dataService.ermsValidationReservation(this.ta0rcncat.trim(), this.siteid.trim(), this.ta0rsnum.trim(), this.ta0rspos.trim()).then(function (results) {
                var respResult = results;
                if (respResult.processStatus === "success") {
                    var respObject = [];
                    respObject = results;
                    if (respObject.respObject.length > 0) {
                        if (respObject.respObject[0].respCode === "1") {
                            var remaining = parseInt(respResult.respObject[0].requiredQty) - parseInt(respResult.respObject[0].withDrawQty);
                            _this.ta0divlimit = remaining;
                            var alert_1 = _this.alertCtrl.create({
                                title: respResult.respObject.status, enableBackdropDismiss: false, cssClass: 'alert-success',
                                subTitle: ' Balance ' + remaining.toString() + ' quantity to be withdrawn. ',
                                buttons: [{
                                        text: 'Ok', cssClass: 'ok-button',
                                        handler: function () { _this.disableSubmit = false; }
                                    }]
                            });
                            loading.dismiss();
                            alert_1.present();
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                title: respResult.respObject.status, enableBackdropDismiss: false,
                                subTitle: respResult.respObject[0].zLOG, cssClass: 'alert-error',
                                buttons: [{
                                        text: 'Ok', cssClass: 'ok-button',
                                        handler: function () { _this.disableSubmit = true; }
                                    }]
                            });
                            loading.dismiss();
                            alert_2.present();
                        }
                    }
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Failed !',
                        subTitle: respResult.description,
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    // this.goBack();
                                }
                            }]
                    });
                    loading.dismiss();
                    alert_3.present();
                }
            });
        }
    };
    /**
     * Utils
     * get Values to find obj, key and value...
     * @param obj
     * @param key
     * @param val
     */
    CreateNotePage.prototype.getBooleanObjects = function (obj, key, val) {
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
     * Indicator
     * Card List Show and hide Functionality...
     */
    CreateNotePage.prototype.valueIndicatorFn = function () {
        if (this.storeMaterialList.length > 0)
            this.valueIndicator = true;
        else
            this.valueIndicator = false;
    };
    /**
     * Indicator
     *Cats from maximo
     */
    CreateNotePage.prototype.getCnCategory = function () {
        var _this = this;
        this.dataService.fetchCnCategory().then(function (results) {
            var respResult = results;
            _this.cnCategories = respResult.respObject;
        });
    };
    /**
     * According to Category list return type...
     *
     */
    CreateNotePage.prototype.getReturnType = function () {
        var _this = this;
        this.selectedCat = false;
        if (this.ta0rcncat === 'C1') {
            this.cnReturnTypes = [];
            this.dataService.fetchCnReturnType().then(function (results) {
                var respResult = results;
                _this.cnReturnTypes = respResult.respObject;
                var creditCats = _this.cnReturnTypes.filter(function (credityGroup) {
                    return credityGroup.value == "10" || credityGroup.value == "11" || credityGroup.value == "12";
                });
                _this.cnReturnTypes = creditCats.reverse();
            });
        }
        else if (this.ta0rcncat === 'R1') {
            this.cnReturnTypes = [];
            this.dataService.fetchCnReturnType().then(function (results) {
                var respResult = results;
                _this.cnReturnTypes = respResult.respObject;
                var removeCats = _this.cnReturnTypes.filter(function (removeGroup) {
                    return removeGroup.value == "20" || removeGroup.value == "11" || removeGroup.value == "12";
                });
                _this.cnReturnTypes = removeCats.sort();
            });
        }
        else if (this.ta0rcncat === 'D1') {
            this.cnReturnTypes = [];
            this.dataService.fetchCnReturnType().then(function (results) {
                var respResult = results;
                _this.cnReturnTypes = respResult.respObject;
                var divisionCats = _this.cnReturnTypes.filter(function (divisionGroup) {
                    return divisionGroup.value == "30" || divisionGroup.value == "31";
                });
                _this.cnReturnTypes = divisionCats;
            });
        }
    };
    /**
     * Display Message Function
     * @param message
     */
    CreateNotePage.prototype.displayErrorAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.serialnum = "";
                    }
                }]
        });
        alert.present();
    };
    //if cn number !=null ? update : create
    CreateNotePage.prototype.createCreditNote = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var rsnum, rspos;
        if (this.ta0rsnum === '' || this.ta0rsnum === null || typeof (this.ta0rsnum) === 'undefined') {
            rsnum = '';
        }
        else {
            rsnum = this.ta0rsnum;
        }
        if (this.ta0rspos === '' || this.ta0rspos === null || typeof (this.ta0rspos) === 'undefined') {
            rspos = '';
        }
        else {
            rspos = this.ta0rspos;
        }
        if (this.setValidation(loading)) {
            var req = [];
            this.dataService.storeCNCreation(this.ta0rcncat, this.ta0rcntyp, rsnum, rspos, this.siteid, this.ta0divlimit, req).then(function (results) {
                var respObject = respObject = results;
                if (respObject.processStatus === "success") {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Success !',
                        subTitle: respObject.respObject,
                        enableBackdropDismiss: false,
                        cssClass: 'alert-success',
                        buttons: [{
                                text: 'Ok',
                                role: 'ok',
                                cssClass: 'ok-button',
                                handler: function () {
                                    loading.dismiss();
                                    var newRootNav = _this.appCtrl.getRootNavById("n4");
                                    newRootNav.push("CreditNoteTemp", { data: { creditnum: respObject.respObject.replace(/\D/g, ''), status: 'DRAFT', category: _this.ta0rcncat, returntype: _this.ta0rcntyp, reservenum: rsnum, reservitemnum: rspos, ta0cnline: [], ta0divlimit: _this.ta0rcncat !== 'D!' ? 500 : _this.ta0divlimit } });
                                }
                            }]
                    });
                    loading.dismiss();
                    alert_4.present();
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Failed !',
                        subTitle: respObject.description,
                        enableBackdropDismiss: false,
                        cssClass: 'alert-error',
                        buttons: [{
                                text: 'Ok',
                                role: 'ok',
                                cssClass: 'ok-button',
                                handler: function () {
                                    loading.dismiss();
                                }
                            }]
                    });
                    loading.dismiss();
                    alert_5.present();
                }
            });
        }
    };
    ;
    CreateNotePage.prototype.setValidation = function (loading) {
        if (this.ta0rcncat === '' || this.ta0rcncat === null || typeof (this.ta0rcncat) === 'undefined') {
            this.displayErrorMsg("Please select the category type");
            loading.dismiss();
            return false;
        }
        if (this.ta0rcntyp === '' || this.ta0rcntyp === null || typeof (this.ta0rcntyp) === 'undefined') {
            this.displayErrorMsg("Please select the return type");
            loading.dismiss();
            return false;
        }
        if (this.ta0rcncat === 'D1') {
            if (typeof (this.ta0rsnum) === 'undefined' || this.ta0rsnum === '' || (this.ta0rsnum) === null) {
                this.displayErrorMsg("Please enter valid Reservation Number");
                loading.dismiss();
                return false;
            }
            if (typeof (this.ta0rspos) === 'undefined' || this.ta0rspos === '' || (this.ta0rspos) === null) {
                this.displayErrorMsg("Please enter valid Reservation Item Number");
                loading.dismiss();
                return false;
            }
        }
        return true;
    };
    ;
    /**
    * Navigate to parent page...
    */
    CreateNotePage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("ListCreateNotePage", "");
    };
    CreateNotePage.prototype.displayErrorMsg = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error !',
            subTitle: message,
            cssClass: 'alert-error',
            enableBackdropDismiss: false,
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
     * Get Values from Key...
     * @param obj
     * @param key
     */
    CreateNotePage.prototype.getValues = function (obj, key) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getValues(obj[i], key));
            }
            else if (i == key) {
                objects.push(obj[i]);
            }
        }
        return objects;
    };
    /**
     * Validation for Reservation item number field only enter the numberial value...
     */
    CreateNotePage.prototype.validationQuantity = function () {
        var _this = this;
        if (this.ta0rspos.toString().length < 5) {
            var pattern = /^(?!(0))[0-9]*$/gm;
            var qt = this.ta0rspos.toString();
            var res = pattern.test(this.ta0rspos.toString());
            if (!res) {
                this.ta0rspos = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
                var alert_6 = this.alertCtrl.create({
                    title: 'Error !',
                    subTitle: "Please enter the valid number",
                    cssClass: 'alert-error',
                    enableBackdropDismiss: false,
                    buttons: [{
                            text: 'Ok',
                            role: 'ok',
                            cssClass: 'ok-button',
                            handler: function () {
                                _this.ta0rspos = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
                            }
                        }]
                });
                alert_6.present();
                return false;
            }
            else {
                return true;
            }
        }
        else {
            var qt = this.ta0rspos.toString().substring(0, 4);
            var alert_7 = this.alertCtrl.create({
                title: 'Error !',
                subTitle: "Please enter the valid number",
                cssClass: 'alert-error',
                enableBackdropDismiss: false,
                buttons: [{
                        text: 'Ok',
                        role: 'ok',
                        cssClass: 'ok-button',
                        handler: function () {
                            _this.ta0rspos = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
                        }
                    }]
            });
            alert_7.present();
            return false;
        }
    };
    CreateNotePage.prototype.validationResvNum = function () {
        var _this = this;
        if (this.ta0rsnum.toString().length < 11) {
            var pattern = /^(?!(0))[0-9]*$/gm;
            var qt = this.ta0rsnum.toString();
            var res = pattern.test(this.ta0rsnum.toString());
            if (!res) {
                this.ta0rsnum = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
                var alert_8 = this.alertCtrl.create({
                    title: 'Error !',
                    subTitle: "Please enter the valid reservation number",
                    enableBackdropDismiss: false,
                    cssClass: 'alert-error',
                    buttons: [{
                            text: 'Ok',
                            role: 'ok',
                            cssClass: 'ok-button',
                            handler: function () {
                                _this.ta0rsnum = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
                            }
                        }]
                });
                alert_8.present();
                return false;
            }
            else {
                return true;
            }
        }
        else {
            var qt = this.ta0rsnum.toString().substring(0, 10);
            var alert_9 = this.alertCtrl.create({
                title: 'Error !',
                subTitle: "Please enter the valid reservation number",
                enableBackdropDismiss: false,
                cssClass: 'alert-error',
                buttons: [{
                        text: 'Ok',
                        role: 'ok',
                        cssClass: 'ok-button',
                        handler: function () {
                            _this.ta0rsnum = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
                        }
                    }]
            });
            alert_9.present();
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_select_searchable__["SelectSearchableComponent"])
    ], CreateNotePage.prototype, "selectComponent", void 0);
    CreateNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-note',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/create-note/create-note.html"*/'<ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Create Return Credit Notes</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list class="wrap-reg">\n\n    <ion-item>\n      <ion-label stacked class="ion-1x"><b>Category Type</b> <span style="color: red">*</span></ion-label>\n      <ion-select [(ngModel)]="ta0rcncat" (ionChange)="getReturnType()">\n        <ion-option *ngFor="let cncat of cnCategories" [value]="cncat.value">{{ cncat.description }}</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked class="ion-1x"><b>Return Type</b> <span style="color: red">*</span></ion-label>\n      <ion-select [(ngModel)]="ta0rcntyp" [disabled]="selectedCat">\n        <ion-option *ngFor="let returnItem of cnReturnTypes" [value]="returnItem.value"\n          [selected]="returnItem.value === ta0rcntyp">{{ returnItem.description }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="ta0rcncat ===\'D1\' ">\n      <ion-label stacked class="ion-1x"><b>Reservation Number</b><span style="color: red">*</span></ion-label>\n      <ion-input [(ngModel)]="ta0rsnum" type="text"  (keyup)="validationResvNum()"  (ionBlur)="validationResvNum()" ></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="ta0rcncat ===\'D1\' ">\n      <ion-label stacked class="ion-1x"><b>Reservation Item Number</b><span style="color: red">*</span></ion-label>\n      <ion-input [(ngModel)]="ta0rspos" type="text"  (keyup)="validationQuantity()"  (ionBlur)="validationQuantity()"   ></ion-input>\n    </ion-item>\n      \n      <ion-item>\n          <ion-label stacked class="ion-1x"><b>Site ID</b></ion-label>     \n        <ion-select [(ngModel)]="siteid" (ionChange)="getStorageLocation()">\n          <ion-option *ngFor="let store of siteItem" [value]="store.siteid" [selected]="gv.ta0defsiteid === store.siteid"  [disabled]= "!(store.siteid ===\'6180\') || !(store.siteid ===\'6440\') ||!(store.siteid ===\'6123\') ||!(store.siteid ===\'6441\') " >{{ store.siteid }} &nbsp; - &nbsp; {{ store.description }} </ion-option>\n      \n        </ion-select>\n      </ion-item>\n \n\n    <ion-item>\n      <div class="save-btn">\n         <button ion-button (click)="validateReservation()" style="padding: 15px;"  *ngIf="ta0rcncat ===\'D1\'">    Validate Reservation </button>  \n        <button ion-button (click)="createCreditNote()" style="padding: 15px;" [disabled] = "disableSubmit"   *ngIf="ta0rcncat ===\'D1\' " >Create Return Credit Note </button>\n        <button ion-button (click)="createCreditNote()" style="padding: 15px;" [disabled] = "!disableSubmit"   *ngIf="ta0rcncat !==\'D1\' " >Create Return Credit Note </button>\n      </div>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/create-note/create-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], CreateNotePage);
    return CreateNotePage;
}());

//# sourceMappingURL=create-note.js.map

/***/ })

});
//# sourceMappingURL=74.js.map