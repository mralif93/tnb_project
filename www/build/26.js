webpackJsonp([26],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoPopupPage; });
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



var WoPopupPage = /** @class */ (function () {
    function WoPopupPage(viewCtrl, navCtrl, gv, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.gv = gv;
        this.navParams = navParams;
    }
    /**
     * Back to Old Page...
     */
    WoPopupPage.prototype.backup = function () {
        var data = this.navParams.get('data');
        this.viewCtrl.dismiss();
    };
    /**
     * Passing Variable to Parent Page wo-home...
     * @param typeVal
     */
    WoPopupPage.prototype.close = function (typeVal) {
        var parent = this.navParams.get('parentWoValue');
        parent.showConfirm(typeVal);
        this.viewCtrl.dismiss();
    };
    WoPopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wo-popup',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/wo-home/wo-popup/wo-popup.html"*/'<ion-list>\n  <ion-list-header> Options </ion-list-header>\n  <button ion-item (click)="close(\'downloadList\')"> Download SO </button>\n  <button ion-item (click)="close(\'syncData\')"> Sync WorkOrder</button>\n  <!--<button ion-item (click)="close(\'loadLook\')"> Load lookup</button>-->\n  <button *ngIf="gv.employeeTypeLogin" ion-item (click)="close(\'taskassign\')"> Assign SO</button>\n</ion-list>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/wo-home/wo-popup/wo-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WoPopupPage);
    return WoPopupPage;
}());

//# sourceMappingURL=wo-popup.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoPopupPageModule", function() { return WoPopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wo_popup__ = __webpack_require__(1113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WoPopupPageModule = /** @class */ (function () {
    function WoPopupPageModule() {
    }
    WoPopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wo_popup__["a" /* WoPopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__wo_popup__["a" /* WoPopupPage */]),
            ],
        })
    ], WoPopupPageModule);
    return WoPopupPageModule;
}());

//# sourceMappingURL=wo-popup.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map