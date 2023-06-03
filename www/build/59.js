webpackJsonp([59],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GirRegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GirRegPage = /** @class */ (function () {
    function GirRegPage(appCtrl, navCtrl, alertCtrl, el, loadingCtrl, dataService, gv, gf, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.el = el;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.gv = gv;
        this.gf = gf;
        this.navParams = navParams;
        this.displayProcess = false;
        this.girdetails = [];
        this.siteItem = [];
        this.testLocation = [];
        this.storageLocation = [];
        this.storageLocationfield = false;
        this.storagePilot = false;
        this.getSiteId();
    }
    GirRegPage.prototype.ionViewDidLoad = function () {
        if (this.gv.ta0defsiteid !== '' && this.gv.ta0defsiteid !== 'undefined' && this.gv.ta0defsiteid !== null) {
            this.siteid = this.gv.ta0defsiteid;
            this.storageLocationfield = true;
            this.getStorageLocation();
            //  this.pilotLocation();
        }
        else {
            this.storageLocationfield = false;
        }
    };
    GirRegPage.prototype.pilotLocation = function () {
        var _this = this;
        if (this.sLocation.trim() === 'ST_1006' || this.sLocation.trim() === 'ST_4000' || this.sLocation.trim() === 'ST_6440') {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert !',
                enableBackdropDismiss: false,
                subTitle: 'Please perform GIR in ERMS',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.storagePilot = true;
                            _this.sLocation = '';
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            console.log('else block ', this.sLocation.trim());
            this.storagePilot = false;
        }
    };
    /**
     * Navigation to Gir List page...
     */
    GirRegPage.prototype.goBack = function () {
        // let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
        // newRootNav.push("GirListPage", '');
        this.navCtrl.pop();
    };
    /**
     * Submit Validation ERMS to Save to required details to Maximo to Auto Generate Gir Number...
     */
    GirRegPage.prototype.submitScanValidation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var sloc = '';
        var message = "";
        if (typeof (this.ta0reservationnum) === 'undefined' || this.ta0reservationnum === '' || this.ta0reservationnum === null) {
            message = "Please enter the reservation number";
            this.displayErrorAlert(message, this.ta0reservationnum, loading);
            return false;
        }
        if (typeof (this.ta0itemlinenum) === 'undefined' || this.ta0itemlinenum === '' || this.ta0itemlinenum === null) {
            message = "Please enter the reservation item";
            this.displayErrorAlert(message, this.ta0itemlinenum, loading);
            return false;
        }
        if (typeof (this.siteid) === 'undefined' || this.siteid === '' || this.siteid === null) {
            message = "Please enter the Site Id";
            this.displayErrorAlert(message, this.siteid, loading);
            return false;
        }
        if (typeof (this.sLocation) === 'undefined' || this.sLocation === '' || this.sLocation === null) {
            message = "Please enter the storage location";
            this.displayErrorAlert(message, this.sLocation, loading);
            return false;
        }
        else {
            sloc = this.sLocation.replace(/\D/g, '');
            //this.sLocation = sloc;
        }
        if (typeof (this.ta0quantity) === 'undefined' || this.ta0quantity === '' || this.ta0quantity === null) {
            message = "Please enter the quantity";
            this.displayErrorAlert(message, this.ta0quantity, loading);
            return false;
        }
        this.dataService.storeGirProcessCreation("VAL_R".trim(), this.ta0reservationnum.trim(), this.ta0itemlinenum.trim(), this.siteid.trim(), this.ta0quantity.trim(), sloc.trim()).then(function (results) {
            var respResult = results;
            if (respResult.processStatus === "success") {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Success !',
                    subTitle: respResult.respObject,
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                _this.goBack();
                            }
                        }]
                });
                loading.dismiss();
                alert_2.present();
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
    };
    /**
     * Get Storage Location details for the requesting supervisor...
     */
    GirRegPage.prototype.getSiteId = function () {
        var _this = this;
        this.dataService.fetchSiteParticularUser().then(function (results) {
            var respResult = results;
            _this.siteItem = respResult.respObject;
        });
    };
    /**
     * Get Storage Location details for the requesting supervisor...
     */
    GirRegPage.prototype.getStorageLocation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.storageLocationfield = true;
        this.dataService.fetchSiteLocationParticularUser().then(function (results) {
            var respResult = results;
            _this.testLocation = respResult.respObject;
            // this.storageLocation = this.getBooleanObjects(this.testLocation, 'siteid', this.gv.ta0defsiteid);
            _this.storageLocation = _this.getBooleanObjects(_this.testLocation, 'siteid', _this.siteid);
            console.log(' this.storageLocation  => ', _this.storageLocation);
            // if (this.storageLocation[0].siteid === '6180') {
            //   let alert = this.alertCtrl.create({
            //     title: 'Alert !',
            //     subTitle: 'Please perform GIR in ERMS',
            //     buttons: [{
            //       text: 'Ok',
            //       handler: () => {
            //         loading.dismiss();
            //       }
            //     }]
            //   });
            //   alert.present();
            // }
            loading.dismiss();
        });
    };
    /**
     * get Values to find obj, key and value...
     * @param obj
     * @param key
     * @param val
     */
    GirRegPage.prototype.getBooleanObjects = function (obj, key, val) {
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
     * Dynamic Message Display Function...
     * @param message
     * @param value
     */
    GirRegPage.prototype.displayErrorAlert = function (message, value, loading) {
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        loading.dismiss();
                    }
                }]
        });
        alert.present();
    };
    GirRegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gir-reg',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/gir-process/gir-reg/gir-reg.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ displayProcess === true ? \'ERMS Process Details\' : \'GIR Validation\' }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    \n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">{{ displayProcess === true ? \'ERMS Process Details\':\'GIR Validation\' }}\n        </div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n          <ion-col col-2 col-sm-2>\n              <ion-fab top right style="top: 0%">\n                  <button ion-fab mini class="flash">\n                    <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n                  </button>\n                </ion-fab>\n          </ion-col>\n          <ion-col col-2 col-sm-2 >\n              <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n      </ion-col>\n  </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-list class="wrap-reg">\n    <ion-item>\n      <ion-label stacked>Reservation Number</ion-label>\n      <ion-input [(ngModel)]="ta0reservationnum" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Reservation Item</ion-label>\n      <ion-input [(ngModel)]="ta0itemlinenum" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Site Id</ion-label>\n      <ion-select [(ngModel)]="siteid" (ionChange)="getStorageLocation()">\n        <ion-option *ngFor="let store of siteItem" [value]="store.siteid" [selected]="gv.ta0defsiteid === store.siteid">\n          {{ store.siteid }} &nbsp; - &nbsp; {{ store.description }} </ion-option>\n        <!-- <ion-option *ngFor="let store of siteItem"     [value]="store.siteid"   >{{ store.siteid }} &nbsp; - &nbsp; {{ store.description }} </ion-option> -->\n\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="storageLocationfield">\n      <!-- <ion-item > -->\n      <ion-label stacked>Storage Location</ion-label>\n      <!-- Edited: Alif (11/03/2020) -->\n      <!-- <ion-select [(ngModel)]="sLocation" (ionChange)="pilotLocation()">\n        <ion-option *ngFor="let loc of storageLocation" [disabled]=storagePilot>{{ loc.location }} </ion-option>\n      </ion-select> -->\n      <ion-select [(ngModel)]="sLocation">\n        <ion-option *ngFor="let loc of storageLocation" [disabled]=storagePilot>{{ loc.location }} </ion-option>\n        <!-- <ion-option *ngFor="let loc of storageLocation"   [disabled]="(loc.location===\'ST_1006\'||loc.location===\'ST_6180\')? true : false"  >{{ loc.location }} </ion-option> -->\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Quantity</ion-label>\n      <ion-input [(ngModel)]="ta0quantity" type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <div class="save-btn">\n        <button ion-button (click)="submitScanValidation()" style="padding: 15px;">Validate Data in ERMS</button>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/gir-process/gir-reg/gir-reg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GirRegPage);
    return GirRegPage;
}());

//# sourceMappingURL=gir-reg.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirRegPageModule", function() { return GirRegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gir_reg__ = __webpack_require__(1003);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GirRegPageModule = /** @class */ (function () {
    function GirRegPageModule() {
    }
    GirRegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gir_reg__["a" /* GirRegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__gir_reg__["a" /* GirRegPage */]),
            ],
        })
    ], GirRegPageModule);
    return GirRegPageModule;
}());

//# sourceMappingURL=gir-reg.module.js.map

/***/ })

});
//# sourceMappingURL=59.js.map