webpackJsonp([39],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsealsweepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(24);
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
 * Generated class for the ListsealsweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListsealsweepPage = /** @class */ (function () {
    function ListsealsweepPage(appCtrl, navCtrl, loadingCtrl, dataService, gv, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.gv = gv;
        this.navParams = navParams;
        this.refSealSegment = 'MSOK';
        this.gitItem = [];
    }
    ListsealsweepPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListsealsweepPage');
        this.fetchSealSweepMSOK();
    };
    /**
     * Fetch the list Seal Sweep...
     */
    ListsealsweepPage.prototype.fetchSealSweepMSOK = function () {
        var _this = this;
        var ta4GetMySweepDetail = "null";
        this.dataService.fetchSealSweepMSOKList(ta4GetMySweepDetail).then(function (results) {
            var respResult = results;
            _this.gitItem = JSON.parse(respResult.respObject);
        });
    };
    /**
     * Search Functionality for Sear MS OK
     */
    ListsealsweepPage.prototype.filterSealMSOK = function (param) {
    };
    /**
     * Navigated to Add Seal Sweep...
     */
    ListsealsweepPage.prototype.addSealSweep = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("AddsealsweepPage", '');
    };
    /**
     * Tab Selection for Seal Segment MSOK and MSNOTOK...
     */
    ListsealsweepPage.prototype.sealSegClick = function () {
        var refresh = this.loadingCtrl.create({
            content: 'Refreshing...'
        });
        refresh.present();
        if (this.refSealSegment == 'MSOK') {
            refresh.dismiss();
        }
        if (this.refSealSegment == 'MSNOTOK') {
            refresh.dismiss();
        }
    };
    /**
     * Search Functionality for Sear MSNOTOK
     */
    ListsealsweepPage.prototype.filterSealMSNOTOK = function (param) {
    };
    ListsealsweepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-listsealsweep',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/sealsweep/listsealsweep/listsealsweep.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>List of Seal Sweep</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only style="padding: 15px;">\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="addSealSweep()">\n      <button mode="md" ion-button icon-start round color="light" style="padding: 15px;">\n        <ion-icon name="md-add"></ion-icon>&nbsp; Add New\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment mode="md" [(ngModel)]="refSealSegment" (click)="sealSegClick()">\n      <ion-segment-button value="MSOK" [ngClass]="refSealSegment == \'MSOK\' ? \'Segment-actived\' : \'\'">\n        MS Ok\n      </ion-segment-button>\n      <ion-segment-button value="MSNOTOK" [ngClass]="refSealSegment == \'MSNOTOK\' ? \'Segment-actived\' : \'\'">\n        MS Not Ok\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-lg-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-lg-8 col-md-8 col-sm-8>\n        <div class="pageTitle">List Seal Sweep</div>\n      </ion-col>\n      <ion-col col-4 col-sm-4 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <ion-fab top right style="top: 0%">\n            <button ion-fab mini class="flash">\n              <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n                {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n            </button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 col-sm-2>\n          <button ion-button class="reg-button" (click)="addSealSweep()">Add New</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="refSealSegment" (click)="sealSegClick()">\n      <ion-segment-button value="MSOK" [ngClass]="refSealSegment == \'MSOK\' ? \'Segment-actived\' : \'\'">MS Ok\n      </ion-segment-button>\n      <ion-segment-button value="MSNOTOK" [ngClass]="refSealSegment == \'MSNOTOK\' ? \'Segment-actived\' : \'\'">MS Not Ok\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n  <div [ngSwitch]="refSealSegment">\n    <ion-grid *ngSwitchCase="\'MSOK\'">\n      <ion-row>\n        <ion-col col-12 col-lg-12 col-md-12 col-sm-12>\n          <ion-searchbar [(ngModel)]="searchTermMSOK" (ionInput)="filterSealMSOK($event.target.value)"></ion-searchbar>\n        </ion-col>\n      </ion-row>\n      <ion-list>\n        <ion-grid>\n          <ion-item *ngFor="let seal of gitItem; let i = index;">\n            <ion-row style="cursor: pointer;">\n              <ion-col>\n                {{ seal.ta4sweepnum }}\n              </ion-col>\n              <ion-col>\n                {{ seal.actualstart }}\n              </ion-col>\n              <ion-col>\n                {{ seal.actualfinish }}\n              </ion-col>\n              <!--<ion-col style="margin-top: -8px;">\n                <button ion-button  class="reg-button">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n                <button ion-button  class="reg-button">\n                  <ion-icon name="construct" item-center></ion-icon>\n                </button>\n              </ion-col>-->\n            </ion-row>\n          </ion-item>\n        </ion-grid>\n      </ion-list>\n    </ion-grid>\n    <ion-grid *ngSwitchCase="\'MSNOTOK\'">\n      <ion-row>\n        <ion-col col-12 col-lg-12 col-md-12 col-sm-12>\n          <ion-searchbar [(ngModel)]="searchTermMSNOTOK" (ionInput)="filterSealMSNOTOK($event.target.value)">\n          </ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/sealsweep/listsealsweep/listsealsweep.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListsealsweepPage);
    return ListsealsweepPage;
}());

//# sourceMappingURL=listsealsweep.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsealsweepPageModule", function() { return ListsealsweepPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listsealsweep__ = __webpack_require__(1108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListsealsweepPageModule = /** @class */ (function () {
    function ListsealsweepPageModule() {
    }
    ListsealsweepPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listsealsweep__["a" /* ListsealsweepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__listsealsweep__["a" /* ListsealsweepPage */]),
            ],
        })
    ], ListsealsweepPageModule);
    return ListsealsweepPageModule;
}());

//# sourceMappingURL=listsealsweep.module.js.map

/***/ })

});
//# sourceMappingURL=39.js.map