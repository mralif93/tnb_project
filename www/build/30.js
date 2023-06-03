webpackJsonp([30],{

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStatusPage; });
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




/**
 * Generated class for the SearchStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchStatusPage = /** @class */ (function () {
    function SearchStatusPage(navCtrl, navParams, appCtrl, params, gv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.params = params;
        this.gv = gv;
        this.ustValue = params.data.ustValue;
        console.log(' search status page ust value : ' + this.ustValue);
    }
    SearchStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchStatusPage');
        this.declareUserStatus();
    };
    SearchStatusPage.prototype.declareUserStatus = function () {
        this.userStatus = [{
                name: 'WMAT',
                description: 'Wrong device attributes'
            },
            {
                name: 'TRANS',
                description: 'Transfer to RAS'
            },
            {
                name: 'TCS3',
                description: 'Wrong tariff'
            },
            {
                name: 'TCS2',
                description: 'Wrong business code'
            },
            {
                name: 'TCS1',
                description: 'Address incorrect'
            },
            {
                name: 'NMIR',
                description: 'Non-Device Irregularities'
            },
            {
                name: 'MSOK',
                description: 'Metering System Ok'
            },
            {
                name: 'WMAT',
                description: 'Wrong device attributes'
            },
            {
                name: 'WMAT',
                description: 'Wrong device attributes'
            },
            {
                name: 'WMAT',
                description: 'Wrong device attributes'
            },
            {
                name: 'KIVD',
                description: 'Pending Shut down'
            }
        ];
    };
    SearchStatusPage.prototype.filterUserStatus = function (param) {
        this.declareUserStatus();
        var val = param;
        if (val.trim() !== '') {
            this.userStatus = this.userStatus.filter(function (item) {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
    };
    SearchStatusPage.prototype.goToStatusChangePage = function (userSts) {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        this.navParams.get("parentPage").callFromChildClass(this.ustValue, userSts);
        this.navCtrl.pop();
    };
    SearchStatusPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SearchStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-status',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/search-status/search-status.html"*/'<!--\n  Generated template for the SearchStatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-grid class="headerStyle">\n\n    <ion-row>\n      <ion-col col-2 col-sm-3 style="text-align: left;padding-top: 0px;">\n        <button ion-button clear (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-sm-5>\n        <div class="pageTitle">Search Status\n        </div>\n      </ion-col>\n      <ion-col col-2 col-sm-4 style="text-align: right;padding-top: 0px;">\n        <ion-fab top right style="top: 0%">\n          <button ion-fab mini class="flash">\n            <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n              {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n          </button>\n        </ion-fab>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="filterUserStatus($event.target.value)"></ion-searchbar>\n\n  <!-- <ul class="userStatus" >\n    <li *ngFor="let userSts of userStatus">\n      <h2> {{ userSts.name }} </h2>\n      <div> {{ userSts.description }} </div>\n    </li>\n  </ul> -->\n  <ion-list>\n    <ion-grid>\n      <ion-row *ngFor="let userSts of userStatus" (click)="goToStatusChangePage(userSts)">\n        <ion-col col-6 style="border:1px solid;text-align:left" #userStatus>\n          <ion-item> {{ userSts.name }} </ion-item>\n        </ion-col>\n        <ion-col col-6 style="border:1px solid;text-align:left">\n          <ion-item> {{ userSts.description }} </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/search-status/search-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */]])
    ], SearchStatusPage);
    return SearchStatusPage;
}());

//# sourceMappingURL=search-status.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStatusPageModule", function() { return SearchStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_status__ = __webpack_require__(1071);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchStatusPageModule = /** @class */ (function () {
    function SearchStatusPageModule() {
    }
    SearchStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_status__["a" /* SearchStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__search_status__["a" /* SearchStatusPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_status__["a" /* SearchStatusPage */],
            ]
        })
    ], SearchStatusPageModule);
    return SearchStatusPageModule;
}());

//# sourceMappingURL=search-status.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map