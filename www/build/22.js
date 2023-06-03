webpackJsonp([22],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_MultiAssetLocci__ = __webpack_require__(951);
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
 * Generated class for the DeviceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeviceDetailsPage = /** @class */ (function () {
    function DeviceDetailsPage(navCtrl, appCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.multiAssetLocci = null;
        this.item = this.navParams.get('paramObj');
        this.indexVal = this.navParams.get('paramIndex');
        this.multiAssetLocci = new __WEBPACK_IMPORTED_MODULE_2__pojo_MultiAssetLocci__["a" /* MultiAssetLocci */]();
    }
    DeviceDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeviceDetailsPage');
    };
    DeviceDetailsPage.prototype.goToGetDeviceDetails = function (item) {
        //console.log('this.deviceSerialNo' + this.multiAssetLocci.tnb_device);
        //console.log('this.tnb_device_description' + this.multiAssetLocci.tnb_device_description);
        console.log('index : ' + this.indexVal);
        console.log('came to go to service execution Feeder function.' + JSON.stringify(this.item.json.tnb_feeder[this.indexVal]));
        debugger;
        console.log('Feeder Asset ' + JSON.stringify(this.item.json.tnb_feeder[this.indexVal]));
        if (this.item.json.tnb_feeder[this.indexVal].multiAssetLocci != null) {
            console.log('Not null ');
            this.item.json.tnb_feeder[this.indexVal].multiAssetLocci.push(this.multiAssetLocci);
        }
        else {
            console.log('equal null ');
            this.item.json.tnb_feeder[this.indexVal].multiAssetLocci = new Array();
            this.item.json.tnb_feeder[this.indexVal].multiAssetLocci.push(this.multiAssetLocci);
        }
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push('ServiceExecutionPage', this.item);
    };
    DeviceDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DeviceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-device-details',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/devices/device-details/device-details.html"*/'<ion-header>\n\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle"> Device Details </div>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;" (click)="presentPopover($event)">\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Feeder Name</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input [(ngModel)]="FeederName" type="text" value="Feeder Set - {{indexVal}}"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Device Serial Number</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input [(ngModel)]="multiAssetLocci.tnb_device" type="text" placeholder="Please Enter"></ion-input>\n          <ion-icon name="barcode"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Device Allocation Type</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select [(ngModel)]="multiAssetLocci.tnb_device_description" interface="popover">\n            <ion-option value="90">90 - Main Meter</ion-option>\n            <ion-option value="91">91 - Feeder Meter</ion-option>\n            <ion-option value="92">Check Meter</ion-option>\n            <ion-option value="93">Check Feeder Meter</ion-option>\n            <ion-option value="94">Sub Meter</ion-option>\n            <ion-option value="95">Check Sub Meter</ion-option>\n            <ion-option value="96">Sub Feeder Meter</ion-option>\n            <ion-option value="97">Check Sub Feeder Meter</ion-option>\n            <ion-option value="82">Modem</ion-option>\n            <ion-option value="83">SIM Card</ion-option>\n            <ion-option value="5">Power Transformer</ion-option>\n            <ion-option value="6">Voltage-Current Transformer</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Controlling Device (Serial No)</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input [(ngModel)]="multiAssetLocci.tnb_controlling_device" type="text" placeholder="Please Enter">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Device Category</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select [(ngModel)]="multiAssetLocci.tnb_device_category" interface="popover">\n            <ion-option value="90">Main Meter</ion-option>\n            <ion-option value="91">Feeder Meter</ion-option>\n            <ion-option value="92">Check Meter</ion-option>\n            <ion-option value="93">Check Feeder Meter</ion-option>\n            <ion-option value="94">Sub Meter</ion-option>\n            <ion-option value="95">Check Sub Meter</ion-option>\n            <ion-option value="96">Sub Feeder Meter</ion-option>\n            <ion-option value="97">Check Sub Feeder Meter</ion-option>\n            <ion-option value="82">Modem</ion-option>\n            <ion-option value="83">SIM Card</ion-option>\n            <ion-option value="5">Power Transformer</ion-option>\n            <ion-option value="6">Voltage-Current Transformer</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Winding Group</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select [(ngModel)]="multiAssetLocci.tnb_winding_group" interface="popover">\n            <ion-option value="90">Main Meter</ion-option>\n            <ion-option value="91">Feeder Meter</ion-option>\n            <ion-option value="92">Check Meter</ion-option>\n            <ion-option value="93">Check Feeder Meter</ion-option>\n            <ion-option value="94">Sub Meter</ion-option>\n            <ion-option value="95">Check Sub Meter</ion-option>\n            <ion-option value="96">Sub Feeder Meter</ion-option>\n            <ion-option value="97">Check Sub Feeder Meter</ion-option>\n            <ion-option value="82">Modem</ion-option>\n            <ion-option value="83">SIM Card</ion-option>\n            <ion-option value="5">Power Transformer</ion-option>\n            <ion-option value="6">Voltage-Current Transformer</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary">Transformer Type</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select interface="popover">\n            <ion-option value="0">CT LV</ion-option>\n            <ion-option value="1">CT MVHV</ion-option>\n            <ion-option value="2">PT</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <button ion-button color="light" round block (click)="goToGetDeviceDetails(index)">Create Device</button>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <button ion-button round block (click)="goToGetDeviceDetails(index)">Replace Device</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/devices/device-details/device-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DeviceDetailsPage);
    return DeviceDetailsPage;
}());

//# sourceMappingURL=device-details.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsPageModule", function() { return DeviceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_details__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceDetailsPageModule = /** @class */ (function () {
    function DeviceDetailsPageModule() {
    }
    DeviceDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__device_details__["a" /* DeviceDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__device_details__["a" /* DeviceDetailsPage */]),
            ],
        })
    ], DeviceDetailsPageModule);
    return DeviceDetailsPageModule;
}());

//# sourceMappingURL=device-details.module.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiAssetLocci; });
var MultiAssetLocci = /** @class */ (function () {
    function MultiAssetLocci() {
        this.ta0existingassets = false;
        this.loc_validate = false;
        this.ta0registerstatus = 'N';
        this.ta0testingstatus = 'N';
        this.ta0silstickerstatus = 'N';
        this.loc_ta0registers_completed = false;
        this.loc_ta0testings_flag = false;
        this.loc_ta0silStickers_flag = false;
        this.loc_ta0registers_haveChange = false;
        this.loc_ta0testings_haveChange = false;
        this.loc_ta0silStickers_haveChange = false;
    }
    return MultiAssetLocci;
}());

//# sourceMappingURL=MultiAssetLocci.js.map

/***/ })

});
//# sourceMappingURL=22.js.map