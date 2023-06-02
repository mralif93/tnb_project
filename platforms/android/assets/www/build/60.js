webpackJsonp([60],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GirListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GirListPage = /** @class */ (function () {
    function GirListPage(appCtrl, navCtrl, alertCtrl, loadingCtrl, dataService, gv, gf, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.gv = gv;
        this.gf = gf;
        this.navParams = navParams;
        this.selectText = "checkmark-circle";
        this.selectCheck = false;
        this.selectedItem = [];
        this.cancelNotification = false;
        // if (this.gv.searchGirTerm !== '' && this.gv.searchGirTerm !== null && typeof this.gv.searchGirTerm !== 'undefined') {
        //   this.filterItems();
        // } else {
        //   this.getFetchDetails();
        // }
    }
    /**
     * Description  : Method to re-call fetch created gir list..
     * Created      : Alif (11/03/2020)
     */
    GirListPage.prototype.ionViewWillEnter = function () {
        console.log("searchGirTerm : " + this.gv.searchGirTerm);
        if (this.gv.searchGirTerm !== '' && this.gv.searchGirTerm !== null && typeof this.gv.searchGirTerm !== 'undefined') {
            console.log("Trigger this.filterItems ");
            this.filterItems();
        }
        else {
            console.log("Trigger this.getFetchDetails ");
            this.getFetchDetails();
        }
    };
    /**
     * Select All Gir Process
     */
    GirListPage.prototype.selectAll = function () {
        for (var i = 0; i < this.gv.girItems.length; i++) {
            if (!this.selectedItem.includes(this.gv.girItems[i].ta0girnum)) {
                this.selectedItem.push(this.gv.girItems[i].ta0girnum);
            }
            else {
                this.selectedItem.splice(this.selectedItem.indexOf(this.gv.girItems[i].ta0girnum), 1);
            }
        }
    };
    /**
     * On Change functionality to select the girprocess...
     * @param id
     * @param attr
     */
    GirListPage.prototype.onChangeCheckBoxes = function (id, attr) {
        if (!this.selectedItem.includes(id)) {
            this.selectedItem.push(id);
        }
        else {
            this.selectedItem.splice(this.selectedItem.indexOf(id), 1);
        }
    };
    /**
     * Multiple selecting gir process...
     */
    GirListPage.prototype.multiSelect = function () {
        if (this.selectText === 'checkmark-circle') {
            this.selectText = 'close-circle';
            this.selectCheck = true;
        }
        else {
            this.selectText = 'checkmark-circle';
            this.selectCheck = false;
            this.selectedItem = [];
        }
    };
    /**
     * Cancel the Multiple girprocess...
     */
    GirListPage.prototype.cancelMultiSelect = function () {
        var _this = this;
        if (this.selectedItem.length > 0) {
            this.cancelNotification = true;
            var loading_1 = this.loadingCtrl.create({
                content: this.gv.loadingContent
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            var confirm_1 = this.alertCtrl.create({
                title: 'Confirmation',
                message: 'Do you agree to cancel the current gir process ?',
                buttons: [
                    {
                        text: 'Disagree',
                        handler: function () {
                            loading_1.dismiss();
                            _this.cancelNotification = false;
                        }
                    },
                    {
                        text: 'Agree',
                        handler: function () {
                            var ta0status = { "status": "CANCEL" };
                            var selectItem = _this.selectedItem.toString();
                            _this.dataService.cancelMultiGirProcess(selectItem, ta0status).then(function (results) {
                                _this.selectText = 'checkmark-circle';
                                _this.selectCheck = false;
                                _this.selectedItem = [];
                                _this.getFetchDetails();
                            });
                            loading_1.dismiss();
                            _this.cancelNotification = false;
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.displaySuccessMsg("Warning", "Kindly select some gir process");
        }
    };
    /**
     * Fetching Records for Gir Process List from Maximo...
     */
    GirListPage.prototype.getFetchDetails = function () {
        var _this = this;
        console.log("Execute getFetchDetails");
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        console.log("Trigger this.dataService.fetchingGirRecords");
        this.dataService.fetchingGirRecords().then(function (results) {
            console.log("results : " + JSON.stringify(results));
            var respResult = results;
            _this.gv.girItems = respResult;
            loading.dismiss();
        });
    };
    /**
     * Searching the data from Required Parameter...
     */
    GirListPage.prototype.filterItems = function () {
        var _this = this;
        if (this.gv.searchGirTerm != '') {
            this.gv.girItems = this.gv.girItems.filter(function (girItem) {
                return girItem.ta0girnum.toLowerCase().indexOf(_this.gv.searchGirTerm.toLowerCase()) > -1;
            });
        }
        else {
            this.getFetchDetails();
        }
    };
    /**
     * Navigation to Gir Register Page...
     * @param displayProcess
     */
    GirListPage.prototype.registerForm = function (displayProcess) {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("GirRegPage", "");
    };
    /**
     * Navigation to Gir Details Page...
     * @param attr
     */
    GirListPage.prototype.getDetailsInformation = function (attr) {
        console.log("Execute getDetailsInformation");
        console.log("attr : " + JSON.stringify(attr));
        console.log("cancelNotification? : " + this.cancelNotification);
        if (!this.cancelNotification) {
            console.log("Navigate to GirDetailPage");
            var newRootNav = this.appCtrl.getRootNavById('n4');
            newRootNav.push("GirDetailPage", { attr: attr });
        }
    };
    /**
     * Cancelling Particular Gir Process from the List of Records...
     * @param girNum
     */
    GirListPage.prototype.cancelGirProcess = function (girNum) {
        var _this = this;
        this.cancelNotification = true;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Do you agree to cancel the current gir process ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                        loading.dismiss();
                        _this.cancelNotification = false;
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        var ta0status = { "status": "CANCEL" };
                        _this.dataService.cancelGirProcess(girNum, ta0status).then(function (results) {
                            try {
                                var res = [];
                                res = results;
                                if (res.processStatus === 'success') {
                                    _this.displaySuccessMsg('Success', res.respObject);
                                    loading.dismiss();
                                    _this.cancelNotification = false;
                                }
                                else {
                                    _this.displaySuccessMsg("Failed", res.respObject);
                                    loading.dismiss();
                                    _this.cancelNotification = false;
                                }
                            }
                            catch (err) {
                                var message = "Due to some internal error cancel process is not completed.";
                                _this.displaySuccessMsg("Failed", message);
                                loading.dismiss();
                                _this.cancelNotification = false;
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * Display dynamic Message Function....
     * @param msgTitle
     * @param message
     */
    GirListPage.prototype.displaySuccessMsg = function (msgTitle, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: msgTitle + " !",
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.gv.searchGirTerm = '';
                        _this.getFetchDetails();
                    }
                }]
        });
        alert.present();
    };
    GirListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gir-list',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/gir-process/gir-list/gir-list.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GIR Process</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="registerForm(false)">\n      <button mode="md" ion-button round color="light" style="padding: 15px;">\n        Register\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar color="primary">\n    <ion-searchbar mode="md" color="primary" [showCancelButton]="true" [(ngModel)]="gv.searchGirTerm"\n      (ionInput)="filterItems()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle">GIR Process\n        </div>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;">\n        <button ion-button round mode="md" style="padding: 15px;" (click)="registerForm(false)">\n          Register\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content>\n  <!-- Search Conditions -->\n  <!-- <ion-row>\n    <ion-col col-12>\n      <ion-searchbar [(ngModel)]="gv.searchGirTerm" (ionInput)="filterItems()"></ion-searchbar>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list>\n    <ion-item-divider>\n      <button ion-button item-start color="primary">Edit</button>\n      <strong>List of GIR\'s</strong>\n    </ion-item-divider>\n\n    <ion-item detail-push full *ngFor=\'let attr of gv.girItems; let j = index;\'\n      [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'" (click)="getDetailsInformation(attr)" style="cursor: pointer;">\n      <ion-icon name="md-cube" item-start large></ion-icon>\n      <h2><strong>{{ attr.ta0girnum || \'-\' }}</strong> (Item: {{ attr.ta0itemlinenum || \'-\' }})</h2>\n      <p><strong>Reservation : {{ attr.ta0reservationnum || \'-\' }}</strong></p>\n      <p><strong>Material : {{ attr.ta0materialnum || \'-\' }}</strong></p>\n      <!--<ion-chip [color]="(attr.status === \'NEW\') ? \'secondary\' :  \'primary\'" item-end>\n          <ion-label text-uppercase>{{ attr.status || \'-\' }}</ion-label>\n        </ion-chip>-->\n      <button mode="md" ion-button round outline [color]="(attr.status === \'NEW\') ? \'secondary\' :  \'primary\'" item-end\n        style="margin-right: 10%;">{{ attr.status || \'-\' }}</button>\n      <ion-icon name="md-trash" color="danger" item-end large (click)="cancelGirProcess(attr.ta0girnum)"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider>\n    <button ion-button icon-start color="primary" mode="md" item-start (click)="multiSelect()">\n      <ion-icon [name]="selectText" style="padding-right: 12px;"></ion-icon>\n      Select\n    </button>\n    <strong>GIR Data List</strong>\n    <button ion-button icon-start color="danger" mode="md" item-end (click)="cancelMultiSelect()" *ngIf="selectCheck">\n      <ion-icon name="trash"></ion-icon>\n      Remove\n    </button>\n  </ion-item-divider>\n\n  <!-- <ion-row class="heading-gap">\n    <ion-col col-2>\n      <button ion-button color="default" (click)="multiSelect()" style="float: left;">\n        <ion-icon [name]="selectText" style="padding-right: 12px;"></ion-icon>\n        Select\n      </button>\n    </ion-col>\n    <ion-col col-8 col-sm-8 col-md-8 style="word-wrap: break-all; padding-left: 5px;">\n      <ion-item>\n        <ion-label color="primary"> GIR Data List </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button color="default" *ngIf="selectCheck" (click)="cancelMultiSelect()" style="float: right;">\n        <ion-icon name="trash" style="color: #ffffff;"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- GIR List Process -->\n  <ion-list>\n    <ion-grid>\n      <ion-item>\n        <ion-label>\n          <ion-row (click)="getDetailsInformation(attr)" style="cursor: pointer;">\n            <ion-col col-1 text-wrap class="col1">\n              <b>S. No</b>\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              <b>Gir Number</b>\n            </ion-col>\n            <ion-col col-3 text-wrap class="col1">\n              <b>Reservation</b>\n            </ion-col>\n            <ion-col col-3 text-wrap class="col1">\n              <b>Material</b>\n            </ion-col>\n            <ion-col col-1 text-wrap class="col1">\n              <b>Item</b>\n            </ion-col>\n            <ion-col col-1 text-wrap class="col1">\n              <b>Status</b>\n            </ion-col>\n            <ion-col col-1 style="text-align: center;" class="col1">\n              <b>Action</b>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n        <ion-checkbox *ngIf="selectCheck" (click)="selectAll()"></ion-checkbox>\n      </ion-item>\n      <ion-item *ngFor=\'let attr of gv.girItems; let j = index;\' [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'"\n        (click)="(!selectCheck && !cancelNotification) ? getDetailsInformation(attr):\'\'">\n        <ion-label (click)="onChangeCheckBoxes(attr.ta0girnum, attr)">\n          <ion-row style="cursor: pointer;">\n            <ion-col col-1 text-wrap class="col1">\n              {{ j+1 }}\n            </ion-col>\n            <ion-col col-2 text-wrap class="col1">\n              {{ attr.ta0girnum }}\n            </ion-col>\n            <ion-col col-3 text-wrap class="col1">\n              {{ attr.ta0reservationnum }}\n            </ion-col>\n            <ion-col col-3 text-wrap class="col1">\n              {{ attr.ta0materialnum }}\n            </ion-col>\n            <ion-col col-1 text-wrap class="col1">\n              {{ attr.ta0itemlinenum }}\n            </ion-col>\n            <ion-col col-1 text-wrap class="col1">\n              {{ attr.status }}\n            </ion-col>\n            <ion-col col-1 style="text-align: center;" (click)="cancelGirProcess(attr.ta0girnum)" class="col1">\n              <ion-icon name="trash" color="danger"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n        <ion-checkbox (click)="onChangeCheckBoxes(attr.ta0girnum, attr)" *ngIf="selectCheck"\n          [checked]="selectedItem.includes(attr.ta0girnum)"></ion-checkbox>\n        <ion-row *ngIf="attr.ta0errorcode">\n          <ion-col col-12 class="col1">\n            <p style="color: #ff0000;">{{ attr.ta0errorcode - attr.ta0errormsg }}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-grid>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/gir-process/gir-list/gir-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GirListPage);
    return GirListPage;
}());

//# sourceMappingURL=gir-list.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirListPageModule", function() { return GirListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gir_list__ = __webpack_require__(1001);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GirListPageModule = /** @class */ (function () {
    function GirListPageModule() {
    }
    GirListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gir_list__["a" /* GirListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__gir_list__["a" /* GirListPage */]),
            ],
        })
    ], GirListPageModule);
    return GirListPageModule;
}());

//# sourceMappingURL=gir-list.module.js.map

/***/ })

});
//# sourceMappingURL=60.js.map