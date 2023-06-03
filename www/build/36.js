webpackJsonp([36],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeStatusPage; });
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
 * Generated class for the ChangeStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeStatusPage = /** @class */ (function () {
    function ChangeStatusPage(navCtrl, loadingCtrl, popoverCtrl, appCtrl, params, gv) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.gv = gv;
        if (params.data != null && params.data != '' && params.data != 'undefined') {
            if ('ust1' == params.data.ustType) {
                this.userStatusValue1 = params.data.userSts;
                console.log(' user status 1: ' + this.userStatusValue1.name);
            }
            else if ('ust2' == params.data.ustType) {
                this.userStatusValue2 = params.data.userSts;
                console.log(' user status 1: ' + this.userStatusValue1.name);
                console.log(' user status 2: ' + this.userStatusValue2.name);
            }
            else if ('ust3' == params.data.ustType) {
                this.userStatusValue3 = params.data.userSts;
                console.log(' user status 3: ' + this.userStatusValue3.name);
            }
            else if ('ust4' == params.data.ustType) {
                this.userStatusValue4 = params.data.userSts;
                console.log(' user status 4: ' + this.userStatusValue4.name);
            }
        }
    }
    ChangeStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeStatusPage ---------------');
    };
    ChangeStatusPage.prototype.ionViewWillLoad = function () {
        var params = this.params;
    };
    ChangeStatusPage.prototype.callFromChildClass = function (ustType, userSts) {
        console.log('call from child class... ' + ustType + '  :  ' + userSts);
        if ('ust1' == ustType) {
            this.userStatusValue1 = userSts;
            console.log(' user status 1: ' + this.userStatusValue1.name);
        }
        else if ('ust2' == ustType) {
            this.userStatusValue2 = userSts;
            console.log(' user status 1: ' + this.userStatusValue1.name);
            console.log(' user status 2: ' + this.userStatusValue2.name);
        }
        else if ('ust3' == ustType) {
            this.userStatusValue3 = userSts;
            console.log(' user status 3: ' + this.userStatusValue3.name);
        }
        else if ('ust4' == ustType) {
            this.userStatusValue4 = userSts;
            console.log(' user status 4: ' + this.userStatusValue4.name);
        }
    };
    ChangeStatusPage.prototype.gotoUserSearchPage = function (userStatus) {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        console.log('change status goto user search page  ' + userStatus);
        newRootNav.push('SearchStatusPage', { "parentPage": this, "ustValue": userStatus });
    };
    ChangeStatusPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ChangeStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-status',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/change-status/change-status.html"*/'<!--\n  Generated template for the ChangeStatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-sm-3 style="text-align: left;padding-top: 0px;">\n        <button ion-button clear (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-sm-5>\n        <div class="pageTitle">Change Status \n        </div>\n      </ion-col>\n      <ion-col col-2 col-sm-4 style="text-align: right;padding-top: 0px;">\n          <ion-fab top right style="top: 0%">\n              <button ion-fab mini class="flash">\n                <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n              </button>\n            </ion-fab>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary">Service Order Number</ion-label>\n        <ion-input type="text" placeholder="001280001239503"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label color="primary">Service Order</ion-label>\n        <ion-input type="text" placeholder="218913"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label color="primary">Current Status</ion-label>\n        <ion-input type="text" placeholder="In Progress"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label color="primary">Status Date</ion-label>\n        <ion-input type="text" placeholder="04/03/2018, 9:00AM"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label color="primary">New Status</ion-label>\n        <ion-select [(ngModel)]="gender" interface="popover">\n          <ion-option value="APPROVED">APPR &nbsp;-&nbsp; APPROVED</ion-option>\n          <ion-option value="COMPLETE">COMP &nbsp;-&nbsp; COMPLETE</ion-option>\n          <ion-option value="IN Progress">INPRG &nbsp;-&nbsp; IN Progress</ion-option>\n          <ion-option value="KIV">KIV &nbsp;-&nbsp; KIV</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item (click)="gotoUserSearchPage(\'ust1\')">\n        <ion-label color="primary">User Status 1</ion-label>\n        <ion-input ng-readonly="true" type="text" *ngIf="userStatusValue1 != null && userStatusValue1 != \'\'" value="{{ userStatusValue1.name }} - {{ userStatusValue1.description }}"></ion-input>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="gotoUserSearchPage(\'ust2\')">\n        <ion-label color="primary">User Status 2</ion-label>\n        <ion-input ng-readonly="true" type="text" *ngIf="userStatusValue2 != null && userStatusValue2 != \'\'" value="{{ userStatusValue2.name }} - {{ userStatusValue2.description }} "></ion-input>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="gotoUserSearchPage(\'ust3\')">\n        <ion-label color="primary">User Status 3</ion-label>\n        <ion-input ng-readonly="true" type="text" *ngIf="userStatusValue3 != null && userStatusValue3 != \'\'" value="{{ userStatusValue3.name }} - {{ userStatusValue3.description }} "></ion-input>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="gotoUserSearchPage(\'ust4\')">\n        <ion-label color="primary">User Status 4</ion-label>\n        <ion-input ng-readonly="true" type="text" *ngIf="userStatusValue4 != null && userStatusValue4 != \'\'" value="{{ userStatusValue4.name }} - {{ userStatusValue4.description }} "></ion-input>\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <button ion-button (click)="goBack()">Cancel</button>\n        <button ion-button (click)="goBack()" >Save</button>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/change-status/change-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */]])
    ], ChangeStatusPage);
    return ChangeStatusPage;
}());

//# sourceMappingURL=change-status.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStatusPageModule", function() { return ChangeStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_status__ = __webpack_require__(1060);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangeStatusPageModule = /** @class */ (function () {
    function ChangeStatusPageModule() {
    }
    ChangeStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_status__["a" /* ChangeStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__change_status__["a" /* ChangeStatusPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__change_status__["a" /* ChangeStatusPage */],
            ]
        })
    ], ChangeStatusPageModule);
    return ChangeStatusPageModule;
}());

//# sourceMappingURL=change-status.module.js.map

/***/ })

});
//# sourceMappingURL=36.js.map