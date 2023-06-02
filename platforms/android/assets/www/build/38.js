webpackJsonp([38],{

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealsweepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(24);
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
 * Generated class for the SealsweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealsweepPage = /** @class */ (function () {
    function SealsweepPage(alertCtrl, barcodeScanner, datePipe, navCtrl, navParams, dataService, loadingCtrl, appCtrl, gv, gf) {
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.gv = gv;
        this.gf = gf;
        this.actstart = new Date().toISOString();
    }
    SealsweepPage.prototype.ionViewDidLoad = function () {
        this.lead = this.gv.personid;
    };
    /**
     * Navigation to WO-Home page...
     */
    SealsweepPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("WoHomePage", '');
    };
    /**
     * Submitting Save Options
     */
    SealsweepPage.prototype.submitCreateWorkorder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var jsonContent = this.setJson();
        this.dataService.sealSweep(jsonContent).then(function (results) {
            var respResult = results;
            if (respResult.processStatus === 'success') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Success !',
                    subTitle: respResult.description.toString(),
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                loading.dismiss();
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
                                // newRootNav.push("WoHomePage", '');
                                _this.navCtrl.setRoot("WoHomePage");
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error !',
                    subTitle: respResult.description.toString(),
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                loading.dismiss();
                            }
                        }]
                });
                alert_2.present();
            }
        });
    };
    /**
     * Create Valid Json for save and submitting...
     * @param saveType
     */
    SealsweepPage.prototype.setJson = function () {
        var resValue = {
            "ASSETNUM": this.assetnum,
            "ACTSTART": this.datePipe.transform(this.actstart, 'yyyyMMdd'),
            "LEAD": this.lead,
            "DEPARTMENT": this.gv.department
        };
        return resValue;
    };
    /**
     * BarCode Tab Scanner...
     */
    SealsweepPage.prototype.barcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.assetnum = barcodeData.text.trim();
        });
    };
    /**
     * Display Message Function
     * @param message
     */
    SealsweepPage.prototype.displayErrorAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    SealsweepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sealsweep',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/sealsweep/sealsweep.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Seal Sweep / Adhoc Creation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 col-md-6 col-sm-6 align-self-center>\n        <div class="pageTitle">Seal Sweep / Adhoc Creation</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2 style="word-wrap: break-all; text-align: right; padding-top: 12px;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2 style="padding-right: 20px;">\n        <button ion-button color="primary" style="float: right; border-radius:6px;" (click)="goBack()">Back</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-row>\n    <ion-item>\n      <ion-label stacked>Lead</ion-label>\n      <ion-input [(ngModel)]="lead" type="text" disabled></ion-input>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n      <ion-item>\n        <ion-label stacked>Asset Number</ion-label>\n        <ion-input [(ngModel)]="assetnum" type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 16px 0px 0px 0px;">\n      <button ion-button (click)="barcodeScan()" style="float: right;">\n        <ion-icon name="barcode" item-right></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-item>\n      <ion-label stacked>Act Start</ion-label>\n      <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="actstart" type="text" disabled></ion-datetime>\n    </ion-item>\n  </ion-row>\n  <ion-row style="float: right;">\n    <div class="save-btn">\n      <button ion-button (click)="submitCreateWorkorder()" style="padding: 15px;">Create Work Order</button>\n    </div>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/sealsweep/sealsweep.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */]])
    ], SealsweepPage);
    return SealsweepPage;
}());

//# sourceMappingURL=sealsweep.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealsweepPageModule", function() { return SealsweepPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sealsweep__ = __webpack_require__(1112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealsweepPageModule = /** @class */ (function () {
    function SealsweepPageModule() {
    }
    SealsweepPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sealsweep__["a" /* SealsweepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sealsweep__["a" /* SealsweepPage */]),
            ],
        })
    ], SealsweepPageModule);
    return SealsweepPageModule;
}());

//# sourceMappingURL=sealsweep.module.js.map

/***/ })

});
//# sourceMappingURL=38.js.map