webpackJsonp([42],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealTeamMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
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
 * Generated class for the SealTeamMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealTeamMembersPage = /** @class */ (function () {
    function SealTeamMembersPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.listOfMembers = [];
        // Getting value list of members
        this.getLabourDetails();
        this.item = this.navParams.data;
    }
    SealTeamMembersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealTeamMembersPage');
    };
    SealTeamMembersPage.prototype.getLabourDetails = function () {
        var _this = this;
        this.dataService.fetchLaborDetails().then(function (results) {
            var respResult = results;
            _this.listOfMembers = respResult.respObject;
            for (var i = 0; i < _this.listOfMembers.length; i++)
                _this.listOfMembers[i].compositeName = _this.listOfMembers[i].laborcode + ' ( ' + _this.listOfMembers[i].ta0laborname + ' ) ';
        });
    };
    SealTeamMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-team-members',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-members/seal-team-members/seal-team-members.html"*/'<!--\n  Generated template for the SealTeamMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Team Members</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-divider color="light">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="people"></ion-icon>&nbsp; <strong text-uppercase>Members Selection</strong>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-3 style="text-align: right;">\n        <button ion-button small round mode="md" style="opacity: unset;" text-end>Reset</button>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>List of Team Members</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-label color="primary">Search</ion-label>\n          <select-searchable item-content [(ngModel)]="ta0members" [items]="this.listOfMembers"\n            itemValueField="laborcode" itemTextField="compositeName" [canSearch]="true">\n          </select-searchable>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-members/seal-team-members/seal-team-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], SealTeamMembersPage);
    return SealTeamMembersPage;
}());

//# sourceMappingURL=seal-team-members.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealTeamMembersPageModule", function() { return SealTeamMembersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_team_members__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SealTeamMembersPageModule = /** @class */ (function () {
    function SealTeamMembersPageModule() {
    }
    SealTeamMembersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_team_members__["a" /* SealTeamMembersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_team_members__["a" /* SealTeamMembersPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], SealTeamMembersPageModule);
    return SealTeamMembersPageModule;
}());

//# sourceMappingURL=seal-team-members.module.js.map

/***/ })

});
//# sourceMappingURL=42.js.map