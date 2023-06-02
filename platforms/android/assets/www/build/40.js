webpackJsonp([40],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsealsweepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(505);
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
 * Generated class for the AddsealsweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddsealsweepPage = /** @class */ (function () {
    function AddsealsweepPage(appCtrl, navCtrl, dataService, loadingCtrl, barcodeScanner, toast, alertCtrl, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.refSealSegment = 'MSOK';
        this.ta4sweepline = [];
        this.showDeviceStatus = false;
        this.sealsweeplist = [];
        this.actualstart = this.getactualTime();
    }
    AddsealsweepPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("ListsealsweepPage", '');
    };
    AddsealsweepPage.prototype.sealSegClick = function () {
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
    AddsealsweepPage.prototype.barcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode"
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.ta4serialnum = barcodeData.text.trim();
            _this.submitScan();
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) { console.log(toast); });
        });
    };
    AddsealsweepPage.prototype.submitScan = function () {
        var _this = this;
        if (this.ta4serialnum !== '' && typeof (this.ta4serialnum) !== 'undefined' && this.ta4serialnum !== null) {
            if (!this.sealsweeplist.includes(this.ta4serialnum)) {
                this.sealsweeplist.push(this.ta4serialnum);
                this.ta4sweepline.push({ 'ta4serialnum': this.ta4serialnum });
                this.showDeviceStatus = this.ta4sweepline.length > 0 ? true : false;
                this.ta4serialnum = "";
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Alert !',
                    subTitle: this.ta4serialnum + " This device is already available",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.ta4serialnum = "";
                                console.log('Successfully created seal sweep record');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }
    };
    AddsealsweepPage.prototype.resetScan = function () {
        this.ta4serialnum = "";
    };
    AddsealsweepPage.prototype.trashScan = function (index) {
        this.ta4sweepline.splice(index, 1);
        this.showDeviceStatus = this.ta4sweepline.length > 0 ? true : false;
    };
    AddsealsweepPage.prototype.getactualTime = function () {
        var currentdate = new Date();
        this.startDate = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
        this.startTime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        return this.formatAMPM();
    };
    AddsealsweepPage.prototype.getfinishTime = function () {
        var currentdate = new Date();
        return this.formatAMPM();
    };
    AddsealsweepPage.prototype.formatAMPM = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = (date.getMonth() + 1);
        var dat = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var strTime = '';
        if (minutes < 10) {
            if (month < 10) {
                strTime = year + '-' + '0' + month + '-' + dat + 'T' + hours + ':' + '0' + minutes + ':' + seconds;
            }
            else {
                strTime = year + '-' + month + '-' + dat + 'T' + hours + ':' + '0' + minutes + ':' + seconds;
            }
        }
        else {
            if (month < 10) {
                strTime = year + '-' + '0' + month + '-' + dat + 'T' + hours + ':' + minutes + ':' + seconds;
            }
            else {
                strTime = year + '-' + month + '-' + dat + 'T' + hours + ':' + minutes + ':' + seconds;
            }
        }
        return strTime;
    };
    AddsealsweepPage.prototype.saveSweep = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.actualfinish = this.getfinishTime();
        var sweepType = this.refSealSegment;
        var newItem = {
            "actualstart": this.actualstart,
            "actualfinish": this.actualfinish,
            "ta4sweepline": this.ta4sweepline
        };
        console.log("newItem : " + JSON.stringify(newItem));
        this.dataService
            .storeSealSweepDetails(sweepType, newItem)
            .then(function (results) {
            var res;
            res = results;
            if (res.responseJSON.processStatus === 'success') {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Success !',
                    subTitle: res.responseJSON.respObject,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                console.log('Successfully created seal sweep record');
                                loading.dismiss();
                                _this.goBack();
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Failed !',
                    subTitle: "Failed to create MSOK Seal sweep...",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                loading.dismiss();
                                console.log('Failed created seal sweep record');
                            }
                        }
                    ]
                });
                alert_3.present();
            }
        });
    };
    AddsealsweepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addsealsweep',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/sealsweep/addsealsweep/addsealsweep.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Seal Sweep</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment mode="md" [(ngModel)]="refSealSegment" (click)="sealSegClick()">\n      <ion-segment-button value="MSOK" [ngClass]="refSealSegment == \'MSOK\' ? \'Segment-actived\' : \'\'">MS Ok\n      </ion-segment-button>\n      <ion-segment-button value="MSNOTOK" [ngClass]="refSealSegment == \'MSNOTOK\' ? \'Segment-actived\' : \'\'">MS Not Ok\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-1 col-md-1 col-sm-1 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-9 col-md-9 col-sm-9>\n        <div class="pageTitle">Seal Sweep</div>\n      </ion-col>\n\n      <ion-col col-4 col-sm-4 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <ion-fab top right style="top: 0%">\n            <button ion-fab mini class="flash">\n              <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n                {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n            </button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 col-sm-2>\n          <button ion-button class="text-right" (click)="goBack()">Back</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="refSealSegment" (click)="sealSegClick()">\n      <ion-segment-button value="MSOK" [ngClass]="refSealSegment == \'MSOK\' ? \'Segment-actived\' : \'\'">MS Ok\n      </ion-segment-button>\n      <ion-segment-button value="MSNOTOK" [ngClass]="refSealSegment == \'MSNOTOK\' ? \'Segment-actived\' : \'\'">MS Not Ok\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n  <div [ngSwitch]="refSealSegment">\n    <ion-grid *ngSwitchCase="\'MSOK\'">\n      <ion-row>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-label color="primary"> Start Date </ion-label>\n        </ion-col>\n        <!--\n            [value]="startDate | date: gv.dateFormat"\n             [value]="startTime | date: gv.timeFormat" \n          -->\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-input type="text" [(ngModel)]="startDate" disabled></ion-input>\n        </ion-col>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-label color="primary"> Start Time </ion-label>\n        </ion-col>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-input type="text" [(ngModel)]="startTime" disabled></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-label color="primary"> Scan Device </ion-label>\n        </ion-col>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-input type="text" [(ngModel)]="ta4serialnum"></ion-input>\n        </ion-col>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <button ion-button (click)="barcodeScan()">\n            <ion-icon name="barcode" item-right></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n          <ion-row>\n            <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n              <button ion-button style="width: 100%;" (click)="submitScan()">OK</button>\n            </ion-col>\n            <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n              <button ion-button style="width: 100%;" (click)="resetScan()">Reset</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <div class="totalContainer" *ngIf="showDeviceStatus">\n        <ion-row class="wrapperScanSet">\n          <ion-col col-3 col-lg-3 col-md-3 col-xs-3 col-sm-3>\n            Device Status\n          </ion-col>\n          <ion-col col-9 col-lg-9 col-md-9 col-xs-9 col-sm-9>\n            <ion-list>\n              <ion-item *ngFor="let device of ta4sweepline; let i = index">\n                <ion-row>\n                  <ion-col col-9 class="deviceLabel">\n                    {{ device.ta4serialnum }}\n                  </ion-col>\n                  <ion-col col-3 class="text-right">\n                    <button ion-button class="text-right" (click)="trashScan(i)">\n                      <ion-icon name="trash" item-center></ion-icon>\n                    </button>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-row style="padding: 20px 0px 0px 0px;">\n        <ion-col col-12 style="text-align: center;">\n          <button ion-button (click)="saveSweep()">Submit</button>\n          <button ion-button (click)="goBack()">Cancel</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngSwitchCase="\'MSNOTOK\'">\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/sealsweep/addsealsweep/addsealsweep.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AddsealsweepPage);
    return AddsealsweepPage;
}());

//# sourceMappingURL=addsealsweep.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsealsweepPageModule", function() { return AddsealsweepPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addsealsweep__ = __webpack_require__(1111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddsealsweepPageModule = /** @class */ (function () {
    function AddsealsweepPageModule() {
    }
    AddsealsweepPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addsealsweep__["a" /* AddsealsweepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__addsealsweep__["a" /* AddsealsweepPage */]),
            ],
        })
    ], AddsealsweepPageModule);
    return AddsealsweepPageModule;
}());

//# sourceMappingURL=addsealsweep.module.js.map

/***/ })

});
//# sourceMappingURL=40.js.map