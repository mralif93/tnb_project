webpackJsonp([47],{

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealMvhvSummationPage; });
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




/**
 * Generated class for the SealMvhvSummationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealMvhvSummationPage = /** @class */ (function () {
    function SealMvhvSummationPage(navCtrl, navParams, gf, gv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gf = gf;
        this.gv = gv;
    }
    SealMvhvSummationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealMvhvSummationPage');
    };
    SealMvhvSummationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-mvhv-summation',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/deviceTestForms/seal-mvhv-summation/seal-mvhv-summation.html"*/'<ion-header>\n  <ion-grid class="sealHeader">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button clear class="backbutton" (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow backbutton"> Back </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 align-self-center>\n        <div class="pageTitle">MVHV Inspection</div>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Test List Selection</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row>\n    <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n      <ion-item>\n        <ion-label text-capitalize>\n          Test list\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n      <ion-item>\n        <ion-select [(ngModel)]="testCompareList" [selectOptions]="{\n              title: \'Test list Selection\'}">\n          <ion-option value="sum">Summation Inspection</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong text-uppercase>Summation Inspection</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>End, 180</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Start, 180</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Consumpation</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n      <ion-item>\n        <ion-label>\n          Feeder 1 (Main)\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n      <ion-item>\n        <ion-label>\n          Feeder 2 (Main)\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n      <ion-item>\n        <ion-label text-center>\n          Total\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-3 col-md-3 col-3>\n      <ion-item>\n        <ion-input placeholder="Auto Calculate" disabled="true"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <br />\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n      <ion-item>\n        <ion-label>End, 880</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Start, 880</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Consumption</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <br />\n  <ion-row col-12 col-sm-12 col-md-12>\n    <ion-col>\n      <ion-item>\n        <ion-label>% Different</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/deviceTestForms/seal-mvhv-summation/seal-mvhv-summation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */]])
    ], SealMvhvSummationPage);
    return SealMvhvSummationPage;
}());

//# sourceMappingURL=seal-mvhv-summation.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealMvhvSummationPageModule", function() { return SealMvhvSummationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_mvhv_summation__ = __webpack_require__(1086);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealMvhvSummationPageModule = /** @class */ (function () {
    function SealMvhvSummationPageModule() {
    }
    SealMvhvSummationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_mvhv_summation__["a" /* SealMvhvSummationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_mvhv_summation__["a" /* SealMvhvSummationPage */]),
            ],
        })
    ], SealMvhvSummationPageModule);
    return SealMvhvSummationPageModule;
}());

//# sourceMappingURL=seal-mvhv-summation.module.js.map

/***/ })

});
//# sourceMappingURL=47.js.map