webpackJsonp([69],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayInfoPageModule", function() { return DisplayInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_info__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DisplayInfoPageModule = /** @class */ (function () {
    function DisplayInfoPageModule() {
    }
    DisplayInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__display_info__["a" /* DisplayInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__display_info__["a" /* DisplayInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], DisplayInfoPageModule);
    return DisplayInfoPageModule;
}());

//# sourceMappingURL=display-info.module.js.map

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_change_request_change_request__ = __webpack_require__(523);
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
 * Generated class for the DisplayInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisplayInfoPage = /** @class */ (function () {
    function DisplayInfoPage(navCtrl, navParams, appCtrl, gv, gf, jsonStoreCrud, dataService, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.gv = gv;
        this.gf = gf;
        this.jsonStoreCrud = jsonStoreCrud;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.siteItems = [];
        this.recipientItem = [];
        this.materialItems = [];
        this.checkArrayList = [];
        this.storeMaterialList = [];
        this.showDeviceCompleteDetails = [];
        this.validResultDetails = [];
        this.descriptionArray = [];
        this.valueIndicator = false;
        this.showDeviceContent = true;
        this.afterValidInd = [];
        this.validDisplayResultCheck = [];
        this.visibleChangeRequest = [];
        this.getSiteId();
        this.getLabourDetails();
        this.getMaterialDetails();
        this.createdByDisplayName = this.gv.personid + " ( " + this.gv.displayname + " )";
    }
    DisplayInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplayInfoPage');
    };
    /**
     * Indicator
     * Indicator Change for Outer Card Functionality...
     */
    DisplayInfoPage.prototype.showDeviceContentFn = function () {
        if (this.showDeviceContent)
            this.showDeviceContent = false;
        else
            this.showDeviceContent = true;
    };
    /**
     * Indicator
     * Indicator Change for Inner Card Functionality...
     */
    DisplayInfoPage.prototype.showDeviceCompleteDetailFn = function (index) {
        if (this.storeMaterialList[index].respCode !== '0') {
            if (this.showDeviceCompleteDetails[index])
                this.showDeviceCompleteDetails[index] = false;
            else
                this.showDeviceCompleteDetails[index] = true;
        }
    };
    /**
     * Indicator
     * Card List Show and hide Functionality...
     */
    DisplayInfoPage.prototype.valueIndicatorFn = function () {
        if (this.storeMaterialList.length > 0)
            this.valueIndicator = true;
        else
            this.valueIndicator = false;
    };
    /**
     * LookUp Data
     * Get Storage Location details for the requesting supervisor...
     */
    DisplayInfoPage.prototype.getSiteId = function () {
        var _this = this;
        this.siteItems = '';
        this.dataService.fetchSiteParticularUser().then(function (results) {
            var respResult = results;
            _this.siteItems = respResult.respObject;
        });
    };
    /**
     * Utils
     * Get Labor Details as List...
     */
    DisplayInfoPage.prototype.getLabourDetails = function () {
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
     * Get Material Details as List...
     */
    DisplayInfoPage.prototype.getMaterialDetails = function () {
        var _this = this;
        this.materialItems = [];
        this.jsonStoreCrud.getAllRecordWithSorting(__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].MaterialData).then(function (result) {
            _this.materialItems = result;
            for (var i = 0; i < _this.materialItems.length; i++) {
                _this.materialItems[i].materialnum = _this.materialItems[i].json.ta0materialnum;
                _this.materialItems[i].compositeName = _this.materialItems[i].json.ta0materialnum + ' ( ' + _this.materialItems[i].json.description + ' ) ';
            }
        });
    };
    /**
     * Add Material to form a list...
     */
    DisplayInfoPage.prototype.addMaterial = function () {
        var _this = this;
        if (this.material_id !== null && this.material_id !== '' && typeof this.material_id !== 'undefined') {
            if (!this.checkArrayList.includes(this.material_id.json.ta0materialnum)) {
                this.storeMaterialList.push({ "matnr": this.material_id.json.ta0materialnum, "description": this.material_id.json.description, "respCode": "2" });
                this.checkArrayList.push(this.material_id.json.ta0materialnum);
                this.descriptionArray.push({ "matnr": this.material_id.json.ta0materialnum, "description": this.material_id.json.description });
                this.showDeviceCompleteDetails.push(false);
                this.valueIndicator = true;
                this.emptyMaterialEnter();
                this.valueIndicatorFn();
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Warning !',
                    subTitle: "Duplicate Material...",
                    cssClass: 'alert-warning',
                    buttons: [{
                            text: 'Ok',
                            cssClass: 'ok-button',
                            handler: function () {
                                _this.emptyMaterialEnter();
                            }
                        }]
                });
                alert_1.present();
            }
        }
        else {
            this.displayErrorMsg("Kindly select material number for further process");
        }
    };
    /**
     * Delete Material before get result from ERMS...
     * @param index
     */
    DisplayInfoPage.prototype.deleteMaterial = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Warning !',
            subTitle: "Are you accept to delete material...",
            cssClass: 'alert-warning',
            buttons: [{
                    text: 'Yes',
                    cssClass: 'ok-button',
                    handler: function () {
                        _this.storeMaterialList.splice(index, 1);
                        _this.showDeviceCompleteDetails.splice(index, 1);
                        _this.checkArrayList.splice(index, 1);
                        _this.valueIndicatorFn();
                    }
                }, { text: 'No', handler: function () { } }]
        });
        alert.present();
    };
    /**
     * After adding data from the list empty the field for Next value...
     */
    DisplayInfoPage.prototype.emptyMaterialEnter = function () {
        this.material_id = '';
    };
    DisplayInfoPage.prototype.setJson = function () {
        var data = [];
        for (var i = 0; i < this.checkArrayList.length; i++) {
            data[i] = { "matnr": this.checkArrayList[i] };
        }
        var result = {
            "ind": "DISP_R",
            "wempf": this.recipient.laborcode,
            "gsber": this.siteid,
            "usnam": this.gv.personid,
            "ITEM": data
        };
        console.log('json ', result);
        return result;
    };
    /**
     * Final call to get the data from ERMS...
     */
    DisplayInfoPage.prototype.validationToSubmit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        if (this.validationEmptyFields(loading)) {
            this.storeMaterialList = [];
            this.dataService.ermsMaterialDisplayInfo(this.setJson()).then(function (results) {
                var respObject = respObject = results;
                var resObject = respObject.respObject;
                var successObject = respObject.successObject;
                console.log('respObject ', respObject);
                console.log('respObject.respObject ', respObject.respObject);
                _this.validResultDetails = [];
                _this.storeMaterialList = [];
                // if (typeof successObject === 'undefined' || successObject === null || successObject === '') {
                //   console.log('respObject ', respObject.description);
                //   this.displayErrorMsg(respObject.description);
                //   loading.dismiss();
                // }
                //else {
                if (respObject.processStatus === 'success') {
                    for (var i = 0; i < resObject.length; i++) {
                        _this.afterValidInd[i] = true;
                        _this.visibleChangeRequest[i] = false;
                        _this.showDeviceCompleteDetails[i] = false;
                        _this.validDisplayResultCheck[i] = (resObject[i].respCode === "0") ? false : true;
                        _this.storeMaterialList[i] = resObject[i];
                    }
                    for (var i = 0; i < _this.storeMaterialList.length; i++) {
                        _this.storeMaterialList[i].rsNum = parseInt(resObject[i].rsNum, 10);
                        _this.storeMaterialList[i].rspos = parseInt(resObject[i].rspos, 10);
                        _this.storeMaterialList[i].bdmng = parseInt(resObject[i].bdmng, 10);
                        _this.storeMaterialList[i].enmng = parseInt(resObject[i].enmng, 10);
                        if (resObject[i].matnr !== null || resObject[i].matnr !== '' || typeof resObject[i].matnr !== 'undefined') {
                            _this.storeMaterialList[i].matnr = parseInt(resObject[i].matnr, 10);
                            for (var j = 0; j < _this.descriptionArray.length; j++)
                                Number(_this.storeMaterialList[i].matnr) === Number(_this.descriptionArray[j].matnr) ? _this.storeMaterialList[i].description = _this.descriptionArray[j].description : '';
                        }
                        else {
                            _this.storeMaterialList[i].matnr = null;
                        }
                    }
                }
                else {
                    console.log('respObject ', respObject.description);
                    _this.displayErrorMsg(respObject.description);
                    loading.dismiss();
                }
                loading.dismiss();
            });
        }
    };
    DisplayInfoPage.prototype.validationEmptyFields = function (loading) {
        if (typeof this.recipient === 'undefined' || this.recipient === null || this.recipient === '') {
            this.displayErrorMsg("Please enter the goods recipient details");
            loading.dismiss();
            return false;
        }
        else if (typeof this.siteid === 'undefined' || this.siteid === null || this.siteid === '') {
            this.displayErrorMsg("Please enter the site id");
            loading.dismiss();
            return false;
        }
        else if (this.storeMaterialList.length < 1) {
            this.displayErrorMsg("Please add some material to validate");
            loading.dismiss();
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Utils
     * Display Sucess Message to User...
     * @param message
     */
    DisplayInfoPage.prototype.displayErrorMsg = function (message) {
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
     * Calling Validate to Reservation...
     */
    DisplayInfoPage.prototype.callValidReservation = function (rsNum, matnr, index) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var result = { "ind": "VAL_RV", "rsNum": rsNum };
        this.dataService.ermsValidationReservNumber(result).then(function (results) {
            var respObject = [];
            respObject = results;
            for (var i = 0; i < _this.storeMaterialList.length; i++) {
                if ((Number(_this.storeMaterialList[i].rsNum) === Number(rsNum)) && (Number(_this.storeMaterialList[i].matnr) === Number(matnr))) {
                    if (respObject.respObject[0].respCode === "0") {
                        _this.visibleChangeRequest[index] = false;
                        _this.storeMaterialList[i].zlog = respObject.respObject[0].zlog;
                    }
                    else {
                        _this.visibleChangeRequest[index] = true;
                        _this.storeMaterialList[i].bdter = respObject.respObject[0].bdter;
                        _this.storeMaterialList[i].kzear = respObject.respObject[0].kzear;
                        _this.storeMaterialList[i].respCode = respObject.respObject[0].respCode;
                        _this.storeMaterialList[i].zlog = respObject.respObject[0].zlog;
                    }
                }
            }
            loading.dismiss();
        });
    };
    /**
     * Common
     * Go Back to WoHome page...
     */
    DisplayInfoPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("WoHomePage", "");
    };
    /**
     * Edit the Display Index to call Change Request Page...
     */
    DisplayInfoPage.prototype.callChangeRequest = function (index) {
        var _this = this;
        var changeRequestModel = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_change_request_change_request__["a" /* ChangeRequestComponent */], { attr: this.storeMaterialList[index] });
        changeRequestModel.present();
        changeRequestModel.onDidDismiss(function (data) {
            if (data === '1')
                _this.validationToSubmit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__["SelectSearchableComponent"])
    ], DisplayInfoPage.prototype, "selectComponent", void 0);
    DisplayInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-display-info',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/display-info/display-info.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Display Open Reservation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Display Open Reservation</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2 >\n          <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n      </ion-col>\n  </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked class="ion-1x"><b style=" font-size: 17px;color: black;">Goods Recipient</b> <span\n              style="color: red">*</span></ion-label>\n          <select-searchable item-content [(ngModel)]="recipient" [items]="this.recipientItem"\n            itemValueField="laborcode" itemTextField="compositeName" [canSearch]="true">\n          </select-searchable>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked class="ion-1x"><b style=" font-size: 17px;color: black;">Site ID</b> <span\n              style="color: red">*</span></ion-label>\n          <ion-select [(ngModel)]="siteid">\n            <ion-option *ngFor="let siteItem of siteItems" [value]="siteItem.siteid">{{ siteItem.siteid }} &nbsp; -\n              &nbsp; {{ siteItem.description }}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked class="ion-1x"><b style=" font-size: 17px;color: black;">Created By</b> <span\n              style="color: red">*</span></ion-label>\n          <ion-input [(ngModel)]="created_by" type="text" [value]="createdByDisplayName" disabled></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked class="ion-1x"><b style=" font-size: 17px;color: black;">Material Number</b> <span\n              style="color: red">*</span></ion-label>\n          <select-searchable item-content [(ngModel)]="material_id" [items]="this.materialItems"\n            itemValueField="materialnum" itemTextField="compositeName" [canSearch]="true">\n          </select-searchable>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1>\n      <ion-row class="okay-button">\n        <button ion-button style="float: right;" (click)="addMaterial()">\n          <ion-icon name="add-circle" style="font-size: 35px;"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-card *ngIf="valueIndicator">\n    <ion-card-header>\n      <ion-row (click)="showDeviceContentFn()">\n        <ion-col col-9>\n          <b>List of Materials</b>\n        </ion-col>\n        <ion-col col-3>\n          <span style="float: right;">\n            <ion-icon [name]="showDeviceContent? \'arrow-down\':\'arrow-up\'"></ion-icon>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content *ngIf="showDeviceContent" style="padding-bottom: 29px;">\n      <ion-row>\n        <ion-col col-12 *ngFor="let device of storeMaterialList; let i = index;" style="margin-bottom: -29px;">\n          <ion-row style="padding: 0px;">\n            <ion-card [ngClass]="i%2 != 0 ? \'classA\' : \'classB\'">\n              <ion-card-header>\n                <ion-row (click)="showDeviceCompleteDetailFn(i)">\n                  <ion-col col-1 style="padding: 15px;">\n                    {{i+1}}.\n                  </ion-col>\n                  <ion-col col-10 style="padding: 15px;" *ngIf="device.respCode != \'0\'">\n                    <ion-row>\n                      <ion-col col-12>\n                        <span style=" font-size: 17px;color: black;"><b>Material Number :</b> {{ device.matnr }} (\n                          {{ device.description }} ) </span>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style="margin-left: -7px;" *ngIf="validDisplayResultCheck[i]">\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-col col-12><span style=" font-size: 14px;color: black;"><b>Reservation number:\n                              </b>{{ device.rsNum }}</span></ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-row>\n                          <ion-col col-12><span style=" font-size: 14px;color: black;"><b>Required Quantity:\n                              </b>{{ device.bdmng }}</span></ion-col>\n                        </ion-row>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col col-10 style="padding: 15px;" *ngIf="!validDisplayResultCheck[i] && device.respCode == \'0\'"\n                    text-wrap>\n                    <span> {{ device.zlog }} </span>\n                  </ion-col>\n                  <ion-col col-1>\n                    <span style="float: right;" *ngIf="!afterValidInd[i]">\n                      <button ion-button (click)="deleteMaterial(i)">\n                        <ion-icon name="trash" item-center></ion-icon>\n                      </button>\n                    </span>\n                    <span style="float: right; padding: 10px;" *ngIf="afterValidInd[i] && device.respCode == \'1\'">\n                      <ion-icon [name]="showDeviceCompleteDetails[i]? \'arrow-down\':\'arrow-up\'"></ion-icon>\n                    </span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-header>\n              <ion-card-content *ngIf="showDeviceCompleteDetails[i] && afterValidInd[i]">\n                <div *ngIf="validDisplayResultCheck[i]">\n                  <ion-row>\n                    <ion-col col-6>\n                      <ion-row>\n                        <ion-col col-6><span style=" font-size: 17px;color: black;"><b>Item number: </b></span>\n                        </ion-col>\n                        <ion-col col-6 text-wrap><span>{{ device.rspos }}</span></ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col col-6>\n                      <ion-row>\n                        <ion-col col-6><span style=" font-size: 17px;color: black;"><b>Site ID: </b></span></ion-col>\n                        <ion-col col-6 text-wrap><span>{{ device.gsber }}</span></ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <ion-row>\n                        <ion-col col-6><span style=" font-size: 17px;color: black;"><b>Storage Location: </b></span>\n                        </ion-col>\n                        <ion-col col-6 text-wrap><span>ST_{{ device.lgort }}</span></ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col col-6>\n                      <ion-row>\n                        <ion-col col-6><span style=" font-size: 17px;color: black;"><b>WithDrawn Quantity: </b></span>\n                        </ion-col>\n                        <ion-col col-6 text-wrap><span>{{ device.enmng }}</span></ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6>\n                      <ion-row>\n                        <ion-col col-6><span style=" font-size: 17px;color: black;"><b>Created By: </b></span></ion-col>\n                        <ion-col col-6 text-wrap><span> {{ createdByDisplayName}} </span></ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col col-6>\n                      <ion-row>\n                        <ion-col col-6><span style=" font-size: 17px;color: black;"><b>Status: </b></span></ion-col>\n                        <ion-col col-6 text-wrap><span>{{ device.zlog }}</span></ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </div>\n                <ion-row style="float: right;" *ngIf="validDisplayResultCheck[i]">\n                  <ion-col>\n                    <button ion-button\n                      (click)="(afterValidInd[i] && visibleChangeRequest[i]) ? callChangeRequest(i):callValidReservation(device.rsNum, device.matnr, i)">\n                      {{ (afterValidInd[i] && visibleChangeRequest[i]) ? \'Change Request\':\'Validate\' }} </button>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row style="margin-top: 25px;">\n        <ion-col style="text-align: center;">\n          <button ion-button style="padding: 15px;" (click)="validationToSubmit()">Get Data From ERMS</button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/display-info/display-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], DisplayInfoPage);
    return DisplayInfoPage;
}());

//# sourceMappingURL=display-info.js.map

/***/ })

});
//# sourceMappingURL=69.js.map