webpackJsonp([35],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataValidationPage; });
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
 * Generated class for the DataValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DataValidationPage = /** @class */ (function () {
    function DataValidationPage(navCtrl, navParams, gv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gv = gv;
        this.hideShowRegister = true;
        this.item = '';
        this.multiAssetLocci = '';
        this.worktype = null; //SO Type
        this.showDeviceSts = true;
        this.showRpmind = false;
        this.showRmvind = true;
        this.showIstind = true;
        this.showWma = true;
        this.selected_wmattribute = 'N';
        this.selected_indicator = 'Y';
        //this.items = this.navParams.data;
        this.item = this.navParams.get('paramObj');
        this.multiAssetLocci = this.navParams.get('multiLocci');
        this.pIndex = this.navParams.get('pIndex');
        this.maIndex = this.navParams.get('maIndex');
        console.log('asset Details : ' + JSON.stringify(this.multiAssetLocci));
        if (this.item.json != null) {
            this.worktype = this.item.json.worktype;
        }
        //console.log("Data Validation constructor=" + JSON.stringify(this.item));
        if (this.worktype == 'ZRMV' || this.worktype == 'ZRCE' || this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSRO' || this.worktype == 'ZRPM' || this.worktype == 'ZCER' || this.worktype == 'ZSRP') {
            console.log("worktype==" + this.worktype);
            this.showDeviceSts = false;
        }
        if (this.worktype == 'ZIST' || this.worktype == 'ZISR' || this.worktype == 'ZRMV' || this.worktype == 'ZRCE' || this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSUR' || this.worktype == 'ZMMR') {
            this.showRpmind = true;
        }
        if (this.worktype == 'ZRMV' || this.worktype == 'ZRCE' || this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSRP') {
            this.showRmvind = false;
        }
        if (this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSRP') {
            this.showIstind = false;
        }
        if (this.worktype == 'ZINR' || this.worktype == 'ZINS' || this.worktype == 'ZINO' || this.worktype == 'ZINL' || this.worktype == 'ZSIN' || this.worktype == 'ZSIR' || this.worktype == 'ZINM') {
            this.showWma = false;
        }
    }
    DataValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DataValidationPage');
    };
    DataValidationPage.prototype.onHideShowRegister = function () {
        if (this.hideShowRegister) {
            this.hideShowRegister = false;
        }
        else {
            this.hideShowRegister = true;
        }
    };
    DataValidationPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DataValidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-data-validation',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/data-validation/data-validation.html"*/'<!--\n  Generated template for the DataValidationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-grid class="headerStyle">\n      <ion-row>\n        <ion-col col-2 col-sm-3 col-md-3 style="text-align: left;padding-top: 0px;">\n          <button ion-button clear (click)="goBack()">\n            <ion-icon name="arrow-back" class="menuBackArrow"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-8 col-sm-5 col-md-5>\n          <div class="pageTitle" style="padding-top: 8px;font-weight:bold;">Data Validation\n          </div>\n        </ion-col>\n        <ion-col col-4 col-sm-4 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n            <ion-col col-2 col-sm-2>\n                <ion-fab top right style="top: 0%">\n                    <button ion-fab mini class="flash">\n                      <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n                    </button>\n                  </ion-fab>\n            </ion-col>\n        <ion-col col-2 col-sm-2  (click)="presentPopover($event)">\n          <button ion-button icon-only clear>\n            <ion-icon name="more" class="menuBackArrow"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-grid>\n  \n      <ion-item-divider color="light">Meter Installation Information</ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;" col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Meter Type</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;" col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Indicator</ion-label>\n            <ion-select [(ngModel)]="selected_indicator" interface="popover">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Serial Number Meter</ion-label>\n            <ion-input id="test1" type="text" placeholder="213500849" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Made/ Model</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Meter Size</ion-label>\n            <ion-input id="test1" type="text" placeholder="100.00" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">CONSTANT</ion-label>\n            <ion-input id="test1" type="text" placeholder="800" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <ion-item-divider color="light">LV MVHV</ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Meter Serial No.</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Brand</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Class</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Current Meter Ratio</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Voltage Meter Ratio</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">MF</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Purpose</ion-label>\n            <ion-input id="test1" type="text" placeholder="eg:Kegunaan Main Meter/ Check Meter" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Label Suppliers</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Meter Test Date</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Modem Serial No.</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Simcard Serial No.</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">No. IP/ Data</ion-label>\n            <ion-input id="test1" type="text" placeholder="" ng-readonly="false"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Device Category</ion-label>\n            <ion-select interface="popover">\n              <ion-option value="90">Main Meter</ion-option>\n              <ion-option value="91">Feeder Meter</ion-option>\n              <ion-option value="92">Check Meter</ion-option>\n              <ion-option value="93">Check Feeder Meter</ion-option>\n              <ion-option value="94">Sub Meter</ion-option>\n              <ion-option value="95">Check Sub Meter</ion-option>\n              <ion-option value="96">Sub Feeder Meter</ion-option>\n              <ion-option value="97">Check Sub Feeder Meter</ion-option>\n              <ion-option value="82">Modem</ion-option>\n              <ion-option value="83">SIM Card</ion-option>\n              <ion-option value="5">Power Transformer</ion-option>\n              <ion-option value="6">Voltage-Current Transformer</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Winding Group</ion-label>\n            <ion-select interface="popover">\n              <ion-option value="90">Main Meter</ion-option>\n              <ion-option value="91">Feeder Meter</ion-option>\n              <ion-option value="92">Check Meter</ion-option>\n              <ion-option value="93">Check Feeder Meter</ion-option>\n              <ion-option value="94">Sub Meter</ion-option>\n              <ion-option value="95">Check Sub Meter</ion-option>\n              <ion-option value="96">Sub Feeder Meter</ion-option>\n              <ion-option value="97">Check Sub Feeder Meter</ion-option>\n              <ion-option value="82">Modem</ion-option>\n              <ion-option value="83">SIM Card</ion-option>\n              <ion-option value="5">Power Transformer</ion-option>\n              <ion-option value="6">Voltage-Current Transformer</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Install Indicator</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-select [(ngModel)]="selected_istind" disabled="{{showIstind}}" interface="popover">\n              <ion-option value="1">Yes</ion-option>\n              <ion-option value="0">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Remove Indicator</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-select [(ngModel)]="selected_rmvind" disabled="{{showRmvind}}" interface="popover">\n              <ion-option value="1">Yes</ion-option>\n              <ion-option value="0">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Replacement Indicator</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-select [(ngModel)]="selected_rpmind" disabled="{{showRpmind}}" interface="popover">\n              <ion-option value="1">Yes</ion-option>\n              <ion-option value="0">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Device Status</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-select [(ngModel)]="selected_devicests" disabled="{{showDeviceSts}}" interface="popover">\n              <ion-option value="ZEVI">ZEVI - Evidence for theft case</ion-option>\n              <ion-option value="ZMIS">ZMIS - Device is missing</ion-option>\n              <ion-option value="ZREM">ZREM - Device is removed</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <ion-item-divider color="light">Wrong Meter Attributes</ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Wrong Meter Attributes Indicator</ion-label>\n            <ion-select [(ngModel)]="selected_wmattribute" disabled="{{showWma}}" interface="popover" (ionChange)="onHideShowRegister()">\n              <ion-option value="Y">Yes</ion-option>\n              <ion-option value="N">No</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <ion-item-divider color="light">Action</ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label>Install</ion-label>\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <br />\n  \n      <div *ngIf="!hideShowRegister">\n        <ion-item style="background-color:aqua">\n          <ion-label color="primary">Remarks</ion-label>\n        </ion-item>\n        <ion-textarea type="textarea" style="border:1px" rows="6" style="border-bottom: 2px solid black; border-right: 1px solid black ;border-left: 1px solid black;border-top: 1px solid black;"\n          placeholder="Please Enter" value=""></ion-textarea>\n      </div>\n    </ion-grid>\n\n   <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;" *ngFor="let registers of multiAssetLocci.ta0registers;let j = index">\n  \n      <ion-item-divider color="light">REGISTER SECTION</ion-item-divider>\n      <ion-item-divider color="light">SECTION {{ j + 1 }}</ion-item-divider>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Register Type</ion-label>\n            <ion-input id="test2" type="text" [(ngModel)]="registers.ta0registertype" placeholder="01" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary">Register Type Description</ion-label>\n            <ion-input id="test2" type="text" [(ngModel)]="registers.ta0registertypedesc" placeholder="" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label color="primary">Unit of Measurement</ion-label>\n            <ion-input id="test2" type="text" [(ngModel)]="registers.ta0uom" placeholder="KWH" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label color="primary">Last Reading</ion-label>\n            <ion-input id="test2" type="text" [(ngModel)]="registers.ta0proposedreading" placeholder="176,080" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label color="primary">Current Reading</ion-label>\n            <ion-input id="test2" type="text" [(ngModel)]="registers.ta0dialafter" placeholder="Please Enter"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label color="primary">Usage</ion-label>\n            <ion-input id="test2" type="text" [(ngModel)]="registers.ta0dialbefore" placeholder="calculation" ng-readonly="true"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n    </ion-grid> \n  \n  \n  </ion-content>\n  \n  \n  <ion-footer>\n    <ion-toolbar>\n      <div>\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <button ion-button round block>Save</button>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <button ion-button color="light" round block (click)="goBack()">Cancel</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/data-validation/data-validation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */]])
    ], DataValidationPage);
    return DataValidationPage;
}());

//# sourceMappingURL=data-validation.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidationPageModule", function() { return DataValidationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_validation__ = __webpack_require__(1060);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataValidationPageModule = /** @class */ (function () {
    function DataValidationPageModule() {
    }
    DataValidationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__data_validation__["a" /* DataValidationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__data_validation__["a" /* DataValidationPage */]),
            ],
        })
    ], DataValidationPageModule);
    return DataValidationPageModule;
}());

//# sourceMappingURL=data-validation.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map