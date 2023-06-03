webpackJsonp([25],{

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WoListPage = /** @class */ (function () {
    function WoListPage(navCtrl, navParams, gv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gv = gv;
        this.worktypeList = [];
    }
    WoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WoListPage');
        if (this.gv.departContent === 'seal') {
            this.worktypeList = [
                'ZISO',
                'ZISP',
                'ZIST',
                'ZDCN',
                'ZRCN',
                // 'ZISR',
                // 'ZRCE',
                'ALL'
            ];
        }
        else if (this.gv.departContent === 'lpc') {
            this.worktypeList = [
                'ZINL',
                'ZINR',
                'ZISR',
                'ZIST',
                'ZRCE',
                'ZRMV',
                'ZRPC',
                'ZSRO',
                'ZUDN',
                'ZMMR',
                'ALL'
            ];
        }
        else {
            this.worktypeList = [
                'ZINL',
                'ZINR',
                'ZISR',
                'ZIST',
                'ZRCE',
                'ZRMV',
                'ZRPC',
                'ZSRO',
                'ZUDN',
                'ZMMR',
                'ALL'
            ];
        }
    };
    WoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wo-list',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/wo-list/wo-list.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Service Order Download</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon color="light" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>Search</ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Service Order Type</ion-label>\n              <ion-select multiple="true">\n                <ion-option value="1">ZIST</ion-option>\n                <ion-option value="2">ZINL</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>Site ID</ion-label>\n              <ion-select>\n                <ion-option value="1">6160</ion-option>\n                <ion-option value="2">6122</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label>Total</ion-label>\n            <ion-select>\n              <ion-option value="1">50</ion-option>\n              <ion-option value="2">100</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/wo-list/wo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */]])
    ], WoListPage);
    return WoListPage;
}());

//# sourceMappingURL=wo-list.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoListPageModule", function() { return WoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wo_list__ = __webpack_require__(1112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WoListPageModule = /** @class */ (function () {
    function WoListPageModule() {
    }
    WoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wo_list__["a" /* WoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__wo_list__["a" /* WoListPage */]),
            ],
        })
    ], WoListPageModule);
    return WoListPageModule;
}());

//# sourceMappingURL=wo-list.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map