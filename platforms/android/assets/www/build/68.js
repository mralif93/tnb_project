webpackJsonp([68],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCreateNotePageModule", function() { return ListCreateNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_create_note__ = __webpack_require__(997);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListCreateNotePageModule = /** @class */ (function () {
    function ListCreateNotePageModule() {
    }
    ListCreateNotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_create_note__["a" /* ListCreateNotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__list_create_note__["a" /* ListCreateNotePage */]),
            ],
        })
    ], ListCreateNotePageModule);
    return ListCreateNotePageModule;
}());

//# sourceMappingURL=list-create-note.module.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCreateNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
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
 * Generated class for the ListCreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListCreateNotePage = /** @class */ (function () {
    function ListCreateNotePage(appCtrl, navCtrl, alertCtrl, loadingCtrl, dataService, gv, gf, jsonStoreCurd, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.gv = gv;
        this.gf = gf;
        this.jsonStoreCurd = jsonStoreCurd;
        this.navParams = navParams;
        this.count = 0;
        this.totalcount = 0;
        this.pageCount = 0;
        this.pageSelectCtrl = [];
        this.selectAllBool = false;
        this.items = {};
        this.lineNumber = 0;
        this.pageLimit = this.gv.ctrl_creditlimitPage;
        this.currentPage = 1;
        this.prevPage = false;
        this.nextPage = false;
        this.paginationList = [];
        this.displayPageList = [];
        this.pagination = true;
        this.filterCnStatus = 'DRAFT';
        if (this.gv.searchCnTerm !== '' && this.gv.searchCnTerm !== null && typeof this.gv.searchCnTerm !== 'undefined') {
            this.filterItems();
        }
        else {
            this.getFetchDetails();
        }
    }
    /**
     * Searching the data from Required Parameter...
     */
    ListCreateNotePage.prototype.filterItems = function () {
        var _this = this;
        if (this.gv.searchCnTerm != '') {
            this.gv.cnItems = this.gv.cnItems.filter(function (cnItems) {
                return cnItems.creditnum.toLowerCase().indexOf(_this.gv.searchCnTerm.toLowerCase()) > -1;
            });
        }
        else {
            debugger;
            this.getFetchDetails();
        }
    };
    ListCreateNotePage.prototype.statusChange = function (event) {
        var _this = this;
        if (event !== null) {
            var loading_1 = this.loadingCtrl.create({
                content: this.gv.loadingContent
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            this.dataService.fetchingAllCreditNoteRecords(event).then(function (results) {
                var respResult = results;
                if (respResult.processStatus === "success") {
                    var cnItems = respResult.respObject;
                    cnItems.sort(function (a, b) { return (a.creditnum > b.creditnum) ? 1 : -1; });
                    _this.gv.cnItems = cnItems;
                }
                loading_1.dismiss();
            });
        }
    };
    ListCreateNotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListCreateNotePage');
    };
    ListCreateNotePage.prototype.goCreditNote = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("CreateNotePage", "");
    };
    ListCreateNotePage.prototype.getFetchDetails = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.dataService.fetchingAllCreditNoteRecords(this.filterCnStatus).then(function (results) {
            var respResult = results;
            if (respResult.processStatus === "success") {
                var cnItems = respResult.respObject;
                cnItems.sort(function (a, b) { return (a.creditnum > b.creditnum) ? 1 : -1; });
                _this.gv.cnItems = cnItems;
                console.log('cnItems ', _this.gv.cnItems);
            }
            loading.dismiss();
        });
        // this.getPaginated(loading);
    };
    ListCreateNotePage.prototype.getDetailsInformation = function (attr) {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("CreditNoteTemp", { data: attr });
    };
    ListCreateNotePage.prototype.convertStringCat = function (val) {
        var catdesc = '';
        if (val !== '' && val !== null && typeof val !== 'undefined') {
            if (val === 'C1') {
                catdesc = 'Credit';
            }
            else if (val === 'R1') {
                catdesc = 'Removal';
            }
            else if (val === 'D1') {
                catdesc = 'Diversion';
            }
        }
        return catdesc;
    };
    ListCreateNotePage.prototype.convertStringReturn = function (val) {
        var typedesc = '';
        if (val !== '' && val !== null && typeof val !== 'undefined') {
            if (val === '10') {
                typedesc = 'Excess';
            }
            else if (val === '11') {
                typedesc = 'Faulty Under Warranty';
            }
            else if (val === '12') {
                typedesc = 'Faulty Out of Warranty';
            }
            else if (val === '13') {
                typedesc = 'Faulty Under Warranty / Out of Warranty';
            }
            else if (val === '20') {
                typedesc = 'ReUse';
            }
            else if (val === '30') {
                typedesc = 'Credit';
            }
            else if (val === '31') {
                typedesc = 'Removal - Reuse';
            }
        }
        return typedesc;
    };
    ListCreateNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-create-note',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/ERMS-Validation/list-create-note/list-create-note.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Return Credit Note List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="goCreditNote()">\n      <button mode="md" ion-button round color="light" style="padding: 15px;">\n        Create R.C.N.\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Return Credit Note List</div>\n      </ion-col>\n \n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2 >\n          <button ion-button color="primary" style="float: right;" (click)="goCreditNote()">Create Return Credit Note</button>\n      </ion-col>\n  </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n\n  <!-- Search Conditions -->\n  <ion-row>\n    <ion-col col-12>\n      <ion-searchbar [(ngModel)]="gv.searchCnTerm" (ionInput)="filterItems()"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-sm-12 col-md-3 col-3>\n      <ion-item no-lines>\n\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 col-sm-12 col-md-5 align-self-center style="padding-top:10px;">\n      <ion-item no-lines>\n\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-3 col-3>\n      <ion-item no-lines>\n        <ion-select interface="popover" [(ngModel)]="filterCnStatus" (ionChange)="statusChange($event)">\n          <ion-option value="DRAFT" selected> DRAFT</ion-option>\n          <ion-option value="SUBMIT"> SUBMIT</ion-option>\n          <ion-option value="INPRG"> IN PROGRESS </ion-option>\n          <ion-option value="CLOSED"> CLOSED</ion-option>\n          <ion-option value="ERRCLOSE"> CLOSE W/ERROR</ion-option>\n          <ion-option value="ERROR"> ERROR</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-sm-12 col-md-1 style="word-wrap: break-all;" align-self-end>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-grid>\n      <ion-item>\n        <ion-label>\n          <ion-row style="cursor: pointer;">\n            <ion-col col-1 text-wrap class="col1">\n              <b>No.</b>\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              <b>RCN No.</b>\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              <b>Category Type</b>\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              <b>Return Type</b>\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              <b>Status</b>\n            </ion-col>\n            <ion-col col-1 text-wrap class="col1">\n              <b>Items</b>\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              <b>Date</b>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngFor=\'let attr of gv.cnItems; let j = index;\' [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'"\n        (click)=" getDetailsInformation(attr)">\n        <ion-row style="cursor: pointer;">\n          <ion-col col-1 text-wrap class="col1">\n            {{ j+1 }}\n          </ion-col>\n          <ion-col col-2 text-wrap class="col1">\n            {{ attr.creditnum }}\n          </ion-col>\n          <ion-col col-2 text-wrap class="col1">\n            {{ convertStringCat(attr.category) }}\n          </ion-col>\n          <ion-col col-2 text-wrap class="col1">\n            {{ convertStringReturn(attr.returntype) }}\n          </ion-col>\n          <ion-col col-2 text-wrap class="col1">\n            {{ attr.status }}\n          </ion-col>\n          <ion-col col-1 text-wrap class="col1">\n            {{ attr.ta0cnline !==null  ? attr.ta0cnline.length : \'0\' }}\n          </ion-col>\n          <ion-col col-2 text-wrap class="col1">\n            {{ attr.changedate }} <br />\n            {{attr.timeformat}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-grid>\n\n    <!-- <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row> -->\n  </ion-list>\n  <ion-grid>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/ERMS-Validation/list-create-note/list-create-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListCreateNotePage);
    return ListCreateNotePage;
}());

//# sourceMappingURL=list-create-note.js.map

/***/ })

});
//# sourceMappingURL=68.js.map