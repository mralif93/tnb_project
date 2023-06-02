webpackJsonp([54],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_handler_auth_handler__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, authHandler, gv, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHandler = authHandler;
        this.gv = gv;
        this.appCtrl = appCtrl;
        this.gv.initItems = [];
        this.gv.items = "";
        this.gv.loginUserId = "";
        this.gv.password = "";
        this.gv.newWorktype = [];
        this.gv.countALL = 0;
        this.gv.countZUDN = 0;
        this.gv.countZSRO = 0;
        this.gv.countZRPM = 0;
        this.gv.countZRPC = 0;
        this.gv.countZRMV = 0;
        this.gv.countZRCE = 0;
        this.gv.countZIST = 0;
        this.gv.countZISR = 0;
        this.gv.countZINR = 0;
        this.gv.countZINL = 0;
        this.gv.countZCER = 0;
        this.gv.countZMMR = 0;
        this.gv.assetDetailCount = 0;
        this.gv.alnDetailCount = 0;
        this.gv.userDetailCount = 0;
        this.gv.amiDetailCount = 0;
        this.gv.windDetailCount = 0;
        this.gv.snCodeDetailCount = 0;
        this.gv.materialDetailCount = 0;
        this.gv.userDetailCount = 0;
        this.gv.userStatusDetailCount = 0;
        if (this.gv.simulationInd == false) {
            this.authHandler.logout();
        }
        var newRootNav = this.appCtrl.getRootNavById("n4");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]).then(function (success) {
        });
    }
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logout',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/logout/logout.html"*/'<!--\n  Generated template for the LogoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-sm-3 style="text-align: left;padding-top: 0px;">\n        <button ion-button menuToggle>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-sm-5>\n        <div class="pageTitle"> Logout</div>\n      </ion-col>\n      <ion-col col-2 col-sm-4 style="text-align: right;padding-top: 0px;">\n        <button ion-button icon-only clear (click)="presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n Process under constraction.\n</ion-content>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_handler_auth_handler__["a" /* AuthHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout__ = __webpack_require__(1007);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogoutPageModule = /** @class */ (function () {
    function LogoutPageModule() {
    }
    LogoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */]),
            ],
        })
    ], LogoutPageModule);
    return LogoutPageModule;
}());

//# sourceMappingURL=logout.module.js.map

/***/ })

});
//# sourceMappingURL=54.js.map