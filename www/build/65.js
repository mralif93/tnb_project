webpackJsonp([65],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(988);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Import Provider File


var AboutPage = /** @class */ (function () {
    function AboutPage(loadingCtrl, gv, gf) {
        this.loadingCtrl = loadingCtrl;
        this.gv = gv;
        this.gf = gf;
    }
    /**
     * Page Loader...
     */
    AboutPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.gf.loadingTimer(loader);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/about/about.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>About Us</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle" style="padding-top: 2px"> About </div>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content class="about-background">\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n    <ion-label text-center style="font-size: 40px"> Mobility for Meter Management System</ion-label>\n    <div>\n      <p style="margin-right: 50px; margin-left: 40px; letter-spacing: 3px; font-size: 20px; text-indent: 50px;">\n        Deliver high quality products and services at par with premier international corportate bodies.</p>\n      <p style="margin-right: 50px; margin-left: 40px; letter-spacing: 3px; font-size: 20px; text-indent: 50px;">\n        Provide best possible services to customers Understand customers needs and to fulfill to the best of our\n        capability.Retain customers loyalty by continuously monitoring their needs.</p>\n    </div>\n\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=65.js.map