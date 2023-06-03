webpackJsonp([64],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsPageModule", function() { return AssetDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_details__ = __webpack_require__(989);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AssetDetailsPageModule = /** @class */ (function () {
    function AssetDetailsPageModule() {
    }
    AssetDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__asset_details__["a" /* AssetDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__asset_details__["a" /* AssetDetailsPage */]),
            ],
        })
    ], AssetDetailsPageModule);
    return AssetDetailsPageModule;
}());

//# sourceMappingURL=asset-details.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_structure__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AssetDetailsPage = /** @class */ (function () {
    function AssetDetailsPage(navCtrl, navParams, jsonStoreCurd, jsonStoreStructure, dataService, loadingCtrl, gv, gf, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jsonStoreCurd = jsonStoreCurd;
        this.jsonStoreStructure = jsonStoreStructure;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.gv = gv;
        this.gf = gf;
        this.appCtrl = appCtrl;
        this.totalCount = 0;
        this.items = {};
        this.ta0download = false;
    }
    /**
     * On View Content Loading...
     */
    AssetDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("enter to re-check all asset-details..");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.ta0function = "all";
        if (!this.gv.testMobile) {
            // if (!this.gv.assetDetailCount) {
            this.getAssetDetailCount(loading);
            // } else {
            //   this.getPaginated(loading);
            // }
            // loading.dismiss();
        }
        else {
            // if (!this.gv.assetDetailCount) {
            this.getAssetDetailCountOffline(loading);
            // } else {
            // this.getPaginated(loading);
            // }
            // loading.dismiss();
        }
    };
    /**
     * Scroll the page to top...
     */
    AssetDetailsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    /**
     * Switch to Asset Detail Page Detail Page...
     * @param attr
     */
    AssetDetailsPage.prototype.goToAssetRegisterPage = function (attr) {
        if (this.ta0download === true) {
            this.ta0download = false;
        }
        else {
            var newRootNav = this.appCtrl.getRootNavById('n4');
            newRootNav.push("RegisterAssetDetailsPage", attr);
        }
    };
    /**
     * Update Asset Details from Maximo
     * @param attr
     */
    AssetDetailsPage.prototype.updateAssetDetails = function (attr) {
        this.ta0download = true;
        var assetnum = attr.json.assetnum;
        var siteId = attr.json.siteid;
        this.dataService.updateAssetDetails(assetnum, siteId).then(function (results) {
            var fullItems;
            fullItems = results;
            attr.json = fullItems;
        });
    };
    AssetDetailsPage.prototype.changeDeviceStatus = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.gf.loadingTimer(loading);
        if (this.ta0function === 'all') {
            this.ta0function = "all";
            if (!this.gv.testMobile) {
                // if (!this.gv.assetDetailCount) {
                this.getAssetDetailCount(loading);
                // } else {
                //   this.getPaginated(loading);
                // }
                // loading.dismiss();
            }
            else {
                // if (!this.gv.assetDetailCount) {
                this.getAssetDetailCountOffline(loading);
                // } else {
                //   this.getPaginated(loading);
                // }
                // loading.dismiss();
            }
        }
        else {
            var querypart = [];
            querypart = [{ "$equal": [{ "ta0functionclass": this.ta0function }] }];
            this.jsonStoreCurd.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, querypart).then(function (result) {
                _this.items = result;
                _this.assetDetailItems = _this.items;
                // change count for pagination
                _this.gv.assetDetailCount = Number(_this.items.length);
                _this.getPaginated(loading);
            });
        }
    };
    /**
     * Asset Details Re Initialization...
     * @param loading
     */
    AssetDetailsPage.prototype.getAssetDetailCount = function (loading) {
        var _this = this;
        this.jsonStoreStructure.initAssetDetails().then(function (success) {
            _this.jsonStoreCurd.removeCollection(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails);
            _this.jsonStoreStructure.initAssetDetails().then(function (success) {
                _this.dataService.loadAssetDetailsLoadJava().then(function (results) {
                    var fullItems;
                    fullItems = results;
                    _this.putIntoJsonStoring(fullItems.member, __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, loading).then(function (storeResult) {
                        _this.jsonStoreCurd.getRecordsPageLimit(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, _this.offset, _this.limit).then(function (result) {
                            _this.items = result;
                            _this.assetDetailItems = _this.items;
                        });
                    });
                });
            });
        });
    };
    /**
     * Asset Details Re Initialization in Offline Mode
     * @param loading
     * Created : Alif 21.02.2020
     */
    AssetDetailsPage.prototype.getAssetDetailCountOffline = function (loading) {
        var _this = this;
        this.jsonStoreCurd.getAllCountRecord(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails).then(function (result) {
            console.log("result >>> " + JSON.stringify(result));
            _this.gv.assetDetailCount = Number(result);
            _this.jsonStoreCurd.getRecordsPageLimit(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, _this.offset, _this.limit).then(function (result) {
                _this.items = result;
                _this.assetDetailItems = _this.items;
            });
            _this.getPaginated(loading);
            loading.dismiss();
        }).catch(function (error) {
            console.log("error >>> " + JSON.stringify(error));
            loading.dismiss();
        });
    };
    /**
     * Searching list using Parameter...
     * @param param
     */
    AssetDetailsPage.prototype.filterAssetDetails = function (param) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (param.trim() != "") {
            var querypart = [];
            querypart = [
                { "$like": [{ "serialnum": param }] },
                { "$like": [{ "assetnum": param }] },
                { "$like": [{ "ta0functionclass": param }] },
                { "$like": [{ "siteid": param }] },
            ];
            this.jsonStoreCurd.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, querypart).then(function (result) {
                _this.items = result;
                _this.assetDetailItems = _this.items;
            });
        }
        else {
            this.getPaginated(loading);
        }
    };
    ;
    /**
     * Take it as a Json Storage Capable...
     * @param jsonData
     * @param collectionName
     * @param loading
     */
    AssetDetailsPage.prototype.putIntoJsonStoring = function (jsonData, collectionName, loading) {
        var _this = this;
        var options = {
            username: this.gv.loginUserId,
            password: this.gv.password,
            push: true,
            markDirty: false
        };
        return new Promise(function (resolve) {
            WL.JSONStore.get(collectionName).add(jsonData, options).then(function (success) {
                _this.gv.assetDetailCount = success;
                _this.getPaginated(loading);
                resolve(success);
            }, function (failure) {
                console.log(' data store failure  ' + +JSON.stringify(failure));
            });
        });
    };
    /**
     * Pagination of getting result...
     * @param loading
     */
    AssetDetailsPage.prototype.getPaginated = function (loading) {
        this.offset = 0;
        this.pagectrl = 0;
        this.limit = this.gv.ctrl_assetPagination;
        this.prevbtndisabled = true;
        this.pageCount = this.gv.assetDetailCount / this.gv.ctrl_assetPagination;
        this.pages = new Array(Math.ceil(this.pageCount));
        // Edited by Alif (27.06.2019)
        // Original code "this.gv.pageCount"..
        if (Math.ceil(this.pageCount) - 1 > 0)
            this.isValid = true;
        else
            this.isValid = false;
        // this.jsonStoreCurd.getRecordsPageLimit(Domains.AssetDetails, this.offset, this.limit).then((result) => {
        //   this.items = result;
        //   this.assetDetailItems = this.items;
        // });
        loading.dismiss();
    };
    /**
     * Pagination click previous button...
     */
    AssetDetailsPage.prototype.setprevious = function () {
        this.pagectrl = this.pagectrl - 1;
        if (this.pagectrl > 0) {
            this.prevbtndisabled = false;
            this.nextbtndisabled = false;
        }
        else {
            this.prevbtndisabled = true;
            this.pagectrl = 0;
        }
        this.callingPagination((this.pagectrl * this.gv.ctrl_assetPagination), this.gv.ctrl_assetPagination);
    };
    /**
     * Pagination click next button...
     */
    AssetDetailsPage.prototype.setnext = function () {
        this.pagectrl = this.pagectrl + 1;
        if (this.pagectrl < Math.ceil(this.pageCount) - 1) {
            this.prevbtndisabled = false;
            this.nextbtndisabled = false;
        }
        else {
            this.nextbtndisabled = true;
            this.pagectrl = Math.ceil(this.pageCount) - 1;
        }
        this.callingPagination((this.pagectrl * this.gv.ctrl_assetPagination), this.gv.ctrl_assetPagination);
    };
    /**
     * Pagination click numberical button...
     * @param page
     */
    AssetDetailsPage.prototype.setpagination = function (page) {
        if (page == 0) {
            this.prevbtndisabled = true;
            this.nextbtndisabled = false;
        }
        else if (page == Math.ceil(this.pageCount - 1)) {
            this.prevbtndisabled = false;
            this.nextbtndisabled = true;
        }
        else {
            this.prevbtndisabled = false;
            this.nextbtndisabled = false;
        }
        this.pagectrl = page;
        this.callingPagination(((this.pagectrl) * this.gv.ctrl_assetPagination), this.gv.ctrl_assetPagination);
    };
    /**
     * Common function for pagination...
     * @param offset
     * @param limit
     */
    AssetDetailsPage.prototype.callingPagination = function (offset, limit) {
        var _this = this;
        this.offset = parseInt(offset);
        this.jsonStoreCurd.getRecordsPageLimit(__WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, offset, limit).then(function (result) {
            _this.items = result;
            _this.assetDetailItems = _this.items;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], AssetDetailsPage.prototype, "content", void 0);
    AssetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asset-details',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/asset-details/asset-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Device Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-navbar color="primary">\n    <ion-searchbar mode="md" [(ngModel)]="searchTerm" color="primary" [showCancelButton]="true"\n      (ionInput)="filterAssetDetails($event.target.value)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab bottom right>\n    <button ion-fab mini class="scrollFabButton" color="primary" (click)="scrollToTop()">\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list>\n    <!-- Start: Device Type -->\n    <ion-item no-lines>\n      <ion-label color="primary" stacked>Device Type</ion-label>\n      <ion-select [(ngModel)]="ta0function" (ionChange)="changeDeviceStatus()" style="border-bottom-style: inset;">\n        <ion-option value="all">All</ion-option>\n        <ion-option value="MODEM">Modem</ion-option>\n        <ion-option value="NMTR">Normal Meter</ion-option>\n        <ion-option value="RMTR">RMR Meter</ion-option>\n        <ion-option value="SIMCRD">SIM Card</ion-option>\n        <ion-option value="CTTFR">CT Instrument Transformer</ion-option>\n        <ion-option value="VTTFR">VT Instrument Transformer</ion-option>\n        <ion-option value="CTDIR">CT MVHV</ion-option>\n        <ion-option value="VTDIR">PT MVHV</ion-option>\n        <ion-option value="SMTR">Smart Meter</ion-option>\n        <ion-option value="COM_SMTR">Comm Module</ion-option>\n        <ion-option value="SMTR_CM">Smart Meter RF</ion-option>\n        <ion-option value="SMTR_OLD">Smart Meter GPRS</ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- End: Device Type -->\n\n    <hr>\n\n    <!-- Start: Pagination -->\n    <ion-item no-lines>\n      <div class="pagination">\n        <a href="javascript:;" [ngClass]="(prevbtndisabled)?\'disabled\':\'\'" (click)="setprevious()">&laquo;</a>\n        <a href="javascript:;" [ngClass]="(index===pagectrl)?\'active\':\'\'" (click)="setpagination(index)"\n          *ngFor="let page of pages; let index = index">{{\n              index + 1 }}</a>\n        <a href="javascript:;" [ngClass]="(nextbtndisabled)?\'disabled\':\'\'" (click)="setnext()">&raquo;</a>\n      </div>\n    </ion-item>\n    <!-- End: Pagination -->\n\n    <hr>\n\n    <!-- Start: List of Devices-->\n    <ion-item *ngFor="let attr of assetDetailItems; let j = index;">\n      <!-- <ion-icon name="md-pricetag" item-start></ion-icon> -->\n      <h2>{{ attr.json.siteid }} : {{ attr.json.serialnum }}</h2>\n      <p>{{ attr.json.description }}</p>\n      <button ion-button outline item-end (click)="goToAssetRegisterPage(attr)">View</button>\n    </ion-item>\n    <!-- End: List of Devices -->\n\n    <hr>\n\n    <!-- Start: Pagination -->\n    <ion-item no-lines>\n      <div class="pagination">\n        <a href="javascript:;" [ngClass]="(prevbtndisabled)?\'disabled\':\'\'" (click)="setprevious()">&laquo;</a>\n        <a href="javascript:;" [ngClass]="(index===pagectrl)?\'active\':\'\'" (click)="setpagination(index)"\n          *ngFor="let page of pages; let index = index">{{\n                index + 1 }}</a>\n        <a href="javascript:;" [ngClass]="(nextbtndisabled)?\'disabled\':\'\'" (click)="setnext()">&raquo;</a>\n      </div>\n    </ion-item>\n    <!-- End: Pagination -->\n  </ion-list>\n\n  <!-- <div>\n    <ion-grid [ngClass]="(isValid)?\'display\':\'non-display\'">\n      <ion-row>\n        <ion-col col-12 col-md-12 col-sm-12>\n          <div class="pagination">\n            <a href="javascript:;" [ngClass]="(prevbtndisabled)?\'disabled\':\'\'" (click)="setprevious()">&laquo;</a>\n            <a href="javascript:;" [ngClass]="(index===pagectrl)?\'active\':\'\'" (click)="setpagination(index)"\n              *ngFor="let page of pages; let index = index">{{\n              index + 1 }}</a>\n            <a href="javascript:;" [ngClass]="(nextbtndisabled)?\'disabled\':\'\'" (click)="setnext()">&raquo;</a>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-list>\n        <ion-item>\n          <ion-row>\n            <ion-col col-1 col-sm-1 col-md-1 text-wrap><strong>No.</strong></ion-col>\n            <ion-col col-1 col-sm-1 col-md-1 text-wrap><strong>Site</strong></ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 text-wrap><strong>Asset No.</strong></ion-col>\n            <ion-col col-3 col-sm-3 col-md-3 text-wrap><strong>Serial No.</strong></ion-col>\n            <ion-col col-5 col-sm-5 col-md-5 text-wrap><strong>Device Description</strong></ion-col>\n          </ion-row>\n        </ion-item>\n        <div *ngFor="let attr of assetDetailItems; let j = index;">\n          <ion-item [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'">\n            <ion-row (click)="goToAssetRegisterPage(attr);" style="cursor: pointer;">\n              <ion-col col-1 col-sm-1 col-md-1 text-wrap>{{ offset + j + 1 }}. </ion-col>\n              <ion-col col-1 col-sm-1 col-md-1 text-wrap>{{ attr.json.siteid }} </ion-col>\n              <ion-col col-2 col-sm-2 col-md-2 text-wrap>{{ attr.json.assetnum }}</ion-col>\n              <ion-col col-3 col-sm-3 col-md-3 text-wrap>{{ attr.json.serialnum }}</ion-col>\n              <ion-col col-5 col-sm-5 col-md-5 text-wrap>{{ attr.json.description }}</ion-col>\n            </ion-row>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-grid>\n    <ion-grid [ngClass]="(isValid)?\'display\':\'non-display\'">\n      <ion-row>\n        <ion-col col-12 col-md-12 col-sm-12>\n          <div class="pagination">\n            <a href="javascript:;" [ngClass]="(prevbtndisabled)?\'disabled\':\'\'" (click)="setprevious()">&laquo;</a>\n            <a href="javascript:;" [ngClass]="(index===pagectrl)?\'active\':\'\'" (click)="setpagination(index)"\n              *ngFor="let page of pages; let index = index">{{\n              index + 1 }}</a>\n            <a href="javascript:;" [ngClass]="(nextbtndisabled)?\'disabled\':\'\'" (click)="setnext()">&raquo;</a>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div> -->\n</ion-content>\n<!--\n<ion-content padding *ngIf="gv.testMobile" style="background-color:  rgba(0,0,0,0.3);">\n  <h1 class="centered">\n      No Network Connection...\n  </h1>\n</ion-content>-->'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/asset-details/asset-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_structure__["a" /* JsonStoreStructureProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], AssetDetailsPage);
    return AssetDetailsPage;
}());

//# sourceMappingURL=asset-details.js.map

/***/ })

});
//# sourceMappingURL=64.js.map