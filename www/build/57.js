webpackJsonp([57],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_work_order_work_order__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Import Pojo File

// provider declaration ..



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, renderer, workOrderService, loadingCtrl, popoverCtrl, appCtrl, params, network, toastCtrl, gv, alertCtrl, jsonStoreCurd) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.workOrderService = workOrderService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.gv = gv;
        this.alertCtrl = alertCtrl;
        this.jsonStoreCurd = jsonStoreCurd;
        this.popType = null;
        this.searchOpen = false;
        console.log('Came to home page constructor. ' + this.params.data);
        var par = this.params.data;
        console.log(' par page Tupe  : ' + par);
        var queryPart = null;
        var searchObj = [];
        searchObj[0] = 'APPR';
        searchObj[1] = 'INPRG';
        var arr = [];
        arr[0] = WL.JSONStore.QueryPart().equal("worktype", 'ZIST');
        arr[1] = WL.JSONStore.QueryPart().inside('status', searchObj);
        searchObj[2] = WL.JSONStore.QueryPart().equal("worktype", 'ZIST');
        //queryPart1 = WL.JSONStore.QueryPart()
        queryPart = WL.JSONStore.QueryPart().inside("status", searchObj);
        //queryPart = WL.JSONStore.QueryPart().equal("worktype", 'ZIST');
        debugger;
        this.jsonStoreCurd
            .getSearchRecordLimit(__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0, '250', 'wonum')
            .then(function (result) {
            _this.items = result;
            _this.itemsOriginal = _this.items;
            //get count
            console.log("SIZE OF THE RESULT count............." + _this.items.length);
        });
        platform.ready().then(function () {
            console.log('platform ready. ');
        });
    }
    HomePage.prototype.checkNetwork = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            var alert = _this.alertCtrl.create({
                title: "Connection Status",
                subTitle: states[networkState],
                buttons: ["OK"]
            });
            alert.present();
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter method came. ');
        this.popType = this.params.get('subject');
        console.log(' log error.. ' + this.popType);
        this.searchOpen = false;
        this.network.onConnect().subscribe(function (data) {
            console.log('connect ed : ' + data);
            _this.displayNetworkUpdate(data);
            _this.loadWorkOrder();
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log('disconnected : ' + data);
            _this.displayNetworkUpdate(data);
        }, function (error) { return console.error(error); });
        if (this.popType == null || this.popType == '' || this.popType == 'undefined') {
            this.loadWorkOrder();
        }
        else if (this.popType == 'downloadList') {
            this.loadWorkOrder();
        }
        else if (this.popType == 'checkEdit') {
            this.listEditRecord();
        }
        else if (this.popType == 'searchBar') {
            this.searchOpen = true;
        }
    };
    HomePage.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        this.toastCtrl.create({
            message: 'You are now ${connectionState} via ${networkType}',
            duration: 3000
        }).present();
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var data = { 'parentValue': 'kanna' };
        var popover = this.popoverCtrl.create('PopoverPage', { 'parentValue': this });
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.showConfirm = function (popType) {
        if (popType == null || popType == '' || popType == 'undefined') {
            console.log('came to null');
            this.loadWorkOrder();
        }
        else if (popType == 'downloadList') {
            console.log('came to null downloadList');
            this.loadWorkOrder();
        }
        else if (popType == 'checkEdit') {
            console.log('came to null checkEdit');
            this.listEditRecord();
        }
        else if (popType == 'searchBar') {
            console.log('came to null searchBar');
            this.searchOpen = true;
        }
    };
    HomePage.prototype.loadWorkOrder = function () {
        var _this = this;
        console.log(' --> load work order ');
        //this.storageService.init();
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
        this.workOrderService.loadJava('WOTRACK%3AMy%20Assigned%20Work').then(function (data) {
            _this.items = data;
            _this.itemsOriginal = _this.items;
            loading.dismiss();
        }, function (failure) {
            console.log('load data failure Home page, loadworkOrder...');
            loading.dismiss();
        });
    };
    HomePage.prototype.goToWorkOrderDetail = function (attr) {
        console.log(attr._id + '   :   ' + attr.json);
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("ServiceDetailsPage", attr);
    };
    HomePage.prototype.listEditRecord = function () {
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
    };
    HomePage.prototype.goServiceOrderForm = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push('ServiceDetailsPage', '');
    };
    HomePage.prototype.filterSOType = function (param) {
        var _this = this;
        console.log('cameinside to filter so tyep  items ..' + this.items.member.length);
        console.log('cameinside to filter so tyep  itemsOriginal ..' + this.itemsOriginal.member.length);
        var val = param;
        if (val.trim() !== '') {
            var filterValue = this.itemsOriginal.member.filter(function (item) {
                var woItem = item;
                return woItem.tnb_sotype.toLowerCase().indexOf(val.toLowerCase()) > -1 || woItem.tnb_sotype_description.toLowerCase().indexOf(val.toLowerCase()) > -1 || woItem.tnb_address.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
            this.itemsOriginal.member = filterValue;
        }
        else {
            this.workOrderService.loadJava('WOTRACK%3AMy%20Assigned%20Work').then(function (data) {
                _this.items = data;
                _this.itemsOriginal = _this.items;
            }, function (failure) {
                console.error('load data failure Home page, loadworkOrder...', failure);
            });
        }
    };
    ;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Assigned Work</ion-title>\n    <button ion-button icon-only (click)="presentPopover($event)">\n      <ion-icon name="more"></ion-icon>\n    </button>\n  </ion-navbar> -->\n\n\n\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-sm-3 style="text-align: left;padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-sm-5>\n        <div class="pageTitle">My Assigned Work \n        </div>\n      </ion-col>\n      <ion-col col-4 col-sm-4 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n          <ion-col col-2 col-sm-2>\n              <ion-fab top right style="top: 0%">\n                  <button ion-fab mini class="flash">\n                    <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n                  </button>\n                </ion-fab>\n          </ion-col>\n        <ion-col col-2 col-sm-2  (click)="presentPopover($event)">\n        <button ion-button icon-only clear>\n          <ion-icon name="more" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="filterSOType($event.target.value)"></ion-searchbar>\n\n  <!--button ion-button (click)="goServiceOrderForm()" >Service Order Form</button>\n  <button ion-button (click)="goFeederForm()" >Go to Feeder Form</button -->\n\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n    <div *ngIf="items != null && items != \'undefined\' && items != \'\';else other_content">\n      <ion-list>\n        <ion-item-sliding #item *ngFor="let attr of items; let j = index">\n          <ion-item text-wrap detail-push style="padding-left: 5px;" (click)="goToWorkOrderDetail(attr)" [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'">\n            <div text-wrap>\n              <ion-row>\n                <ion-col col-6 col-sm-6 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                  <h2>\n                    <b> {{j + 1}} &nbsp;&nbsp; {{ attr.json.wonum }} - {{ attr.json.ta0bcrmnum }}</b>\n                  </h2>\n\n                </ion-col>\n                <ion-col col-6 col-sm-6 col-md-3>\n                  <b> {{attr.json.worktype }} </b>\n                </ion-col>\n\n                <ion-col col-6 col-sm-6 col-md-4 style="word-wrap:  break-all; padding-left: 5px;" [ngClass]="(attr.json.status == \'APPR\' ? \'classAppr\' : \'\') ||  (attr.json.status == \'INPRG\' ? \'classInprg\' : \'\') || (attr.json.status == \'KIV\' ? \'classKiv\' : \'\')">\n                  {{attr.json.status }} - {{attr.json.status_description }}\n                </ion-col>\n                <ion-col col-6 col-sm-6 col-md-1 style="text-align: right;">\n                  <ion-icon name="star" *ngIf="attr.json.ta0favourite == \'Y\'"> </ion-icon>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n\n                <ion-col col-6 col-sm-6 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n                  <div *ngIf="attr.json.changeby != null">\n                    ASSIGNED - {{ attr.json.changeby }}\n                  </div>\n\n                </ion-col>\n                <ion-col col-6 col-sm-6 col-md-3>\n                  SITE-ID - {{attr.json.siteid }}\n                </ion-col>\n\n                <ion-col col-6 col-sm-6 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n                  Scheduled - {{ attr.json.schedstart | date: gv.dateFormat }} {{ attr.json.schedstart | date: gv.timeFormat }}\n                </ion-col>\n\n\n\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                  <div *ngIf="attr.json.woserviceaddress != null">\n                    <div *ngFor="let address of attr.json.woserviceaddress;">\n                      <div *ngIf="address.formattedaddress != null"> {{ address.formattedaddress }} </div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n            </div>\n\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button *ngIf="attr.json.ta0favourite != \'Y\'" (click)="pinSelectItem(attr, j, \'pin\')">\n              <ion-icon name="star"> &nbsp; Pin</ion-icon>\n\n            </button>\n            <button ion-button *ngIf="attr.json.ta0favourite == \'Y\'" (click)="pinSelectItem(attr, j, \'unpin\')">\n              <ion-icon name="star"> &nbsp; Unpin</ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </div>\n    <ng-template #other_content>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label>No Record Found!</ion-label>>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_4__providers_work_order_work_order__["a" /* WorkOrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1006);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=57.js.map