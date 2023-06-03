webpackJsonp([70],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceReturnPageModule", function() { return DeviceReturnPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_return__ = __webpack_require__(995);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceReturnPageModule = /** @class */ (function () {
    function DeviceReturnPageModule() {
    }
    DeviceReturnPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__device_return__["a" /* DeviceReturnPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__device_return__["a" /* DeviceReturnPage */]),
            ],
        })
    ], DeviceReturnPageModule);
    return DeviceReturnPageModule;
}());

//# sourceMappingURL=device-return.module.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceReturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the DeviceReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeviceReturnPage = /** @class */ (function () {
    function DeviceReturnPage(navCtrl, appCtrl, params) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.item = [];
        this.item = this.params.data;
    }
    DeviceReturnPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeviceReturnPage');
    };
    DeviceReturnPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("CreateNotePage", "");
    };
    DeviceReturnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-device-return',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/device-return/device-return.html"*/'<!--\n  Generated template for the GirRegPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-grid class="headerStyle">\n      <!-- Header Tags -->\n      <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n          <button ion-button menuToggle clear>\n            <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-8 col-md-8 col-sm-8>\n          <div class="pageTitle">Create Note</div>\n        </ion-col>\n        <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n            <!--<ion-col col-2 col-sm-2>\n                <ion-fab top right style="top: 0%">\n                    <button ion-fab mini class="flash">\n                      <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n                    </button>\n                  </ion-fab>\n            </ion-col>-->\n            <ion-col col-2 col-sm-2 >\n                <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n        </ion-col>\n    </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-header>\n\n  <ion-content padding>\n    <ion-item>\n      <ion-row>\n        <ion-col col-2 col-md-2>\n          <b>Create Note</b>\n        </ion-col>\n        <ion-col col-1 col-md-1>\n          <b>Line</b>\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          <b>Serial Number</b>\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          <b>Mat</b>\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          <b>Business Area</b>\n        </ion-col>\n        <ion-col col-1 col-md-1>\n          <b>Category</b>\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          <b>Return Type</b>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item  *ngFor="let device of item; let i = index;">\n      <ion-row>\n        <ion-col col-2 col-md-2>\n          000000000123\n        </ion-col>\n        <ion-col col-1 col-md-1>\n          1\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          {{ device }}\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          SMART MERTER\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          6121\n        </ion-col>\n        <ion-col col-1 col-md-1>\n          Division\n        </ion-col>\n        <ion-col col-2 col-md-2>\n          Removal Reuse\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-row>\n      <ion-col style="float: right;">\n        <button ion-button style="padding: 15px; float: right;">Download Pdf</button>\n      </ion-col>\n    </ion-row>\n    \n  </ion-content>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/device-return/device-return.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DeviceReturnPage);
    return DeviceReturnPage;
}());

//# sourceMappingURL=device-return.js.map

/***/ })

});
//# sourceMappingURL=70.js.map