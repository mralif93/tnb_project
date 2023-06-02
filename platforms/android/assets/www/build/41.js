webpackJsonp([41],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_store_data_store__ = __webpack_require__(178);
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
 * Generated class for the SealValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealValidationPage = /** @class */ (function () {
    function SealValidationPage(navCtrl, navParams, appCtrl, alertCtrl, gf, loadingCtrl, gv, dataService, barcodeScanner, ds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.gv = gv;
        this.dataService = dataService;
        this.barcodeScanner = barcodeScanner;
        this.ds = ds;
        this.firstSEALCode = "";
        this.lastSEALCode = "";
        this.singleSEALCode = "";
        this.requestIndicator = "RNG";
        this.singleFlag = false;
        this.showSealStatus = false;
        this.showInvalid = true;
        this.showValid = true;
        this.execute = false;
        this.sealValidItem = [];
        this.sealInvalidItem = [];
        this.sealValidItems = [];
        this.refSegment = 'scan';
    }
    SealValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealValidationPage');
    };
    /**
     * Navigation to WO-Home page...
     */
    SealValidationPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("WoHomePage", '');
    };
    /**
     * BarCode Tab Scanner for range start serial number
     */
    SealValidationPage.prototype.endNumberBarcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.lastSEALCode = barcodeData.text.trim();
        });
    };
    /**
     * BarCode Tab Scanner for range end serial number
     */
    SealValidationPage.prototype.startNumberBarcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.firstSEALCode = barcodeData.text.trim();
        });
    };
    /**
     * Checking to user login as Simulator or not...
     * @param event
     */
    SealValidationPage.prototype.CheckboxClicked = function (event) {
        if (event.checked) {
            this.requestIndicator = 'SIN';
            this.singleFlag = true;
        }
        else {
            this.requestIndicator = 'RNG';
            this.singleFlag = false;
        }
    };
    /**
     * BarCode Tab Scanner...
     */
    SealValidationPage.prototype.barcodeScan = function (index) {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        if (index === 1) {
            this.barcodeScanner.scan(this.options).then(function (barcodeData) {
                _this.firstSEALCode = barcodeData.text.trim();
            });
        }
        else if (index === 2) {
            this.barcodeScanner.scan(this.options).then(function (barcodeData) {
                _this.lastSEALCode = barcodeData.text.trim();
            });
        }
        else if (index === 3) {
            this.barcodeScanner.scan(this.options).then(function (barcodeData) {
                _this.singleSEALCode = barcodeData.text.trim();
            });
        }
    };
    /*
     * Scan Seal Serial Number and send to BCRM for validation
     * The value must be of a simple type (string, number or boolean).
     */
    SealValidationPage.prototype.validation = function () {
        var _this = this;
        console.log("requestIndicator : " + this.requestIndicator);
        console.log("singleSEALCode : " + this.singleSEALCode);
        console.log("firstSEALCode : " + this.firstSEALCode);
        console.log("lastSEALCode : " + this.lastSEALCode);
        this.sealValidItem = [];
        this.sealInvalidItem = [];
        this.validCount = 0;
        this.invalidCount = 0;
        if (this.singleFlag === true) {
            console.log("Inside single serial number checking");
            if (this.singleSEALCode === "") {
                this.execute = false;
                var alert_1 = this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Serial Number cannot be empty',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                this.execute = true;
            }
        }
        else {
            console.log("Inside range serial number checking");
            if (this.firstSEALCode === "" || this.lastSEALCode === "") {
                this.execute = false;
                var alert_2 = this.alertCtrl.create({
                    title: 'Warning',
                    message: 'Please input range of serial number',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                this.execute = true;
            }
        }
        if (this.execute === true) {
            var loading_1 = this.loadingCtrl.create({
                content: this.gv.loadingContent
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            //this.dataService.sealValidation(this.startSerialNumber, this.endSerialNumber, this.singleSerialNumber, this.singleFlag).then(results => {
            this.dataService.sealValidation(this.firstSEALCode, this.lastSEALCode, this.singleSEALCode, this.requestIndicator).then(function (results) {
                var respResult = results;
                if (respResult.processStatus === 'success') {
                    loading_1.dismiss();
                    _this.showSealStatus = true;
                    _this.storeValidSerialNumber(respResult);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Error !',
                        subTitle: respResult.description.toString(),
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    loading_1.dismiss();
                                }
                            }]
                    });
                    alert_3.present();
                }
            }, function (error) {
                console.log("sealValidation error : " + JSON.stringify(error));
                var alert = _this.alertCtrl.create({
                    title: 'Error !',
                    subTitle: 'Error validation crimpless seal',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                loading_1.dismiss();
                            }
                        }]
                });
                alert.present();
            });
            //reset value
            this.firstSEALCode = "";
            this.lastSEALCode = "";
            this.singleSEALCode = "";
        }
    };
    /**
       Insert data into CRIMPLESS table
       1. ID
       2. SEALCODE
       3. SEALCATEGORY
       4. SEALSTATUS
       5. SEALCOLOR
       6. UTILITYMASTERID
       7. RESPONSIBLEPERSONID
       8. CREATEDDATE
     */
    SealValidationPage.prototype.storeValidSerialNumber = function (respResult) {
        console.log("access storeValidSerialNumber");
        //console.log("Response : "+JSON.stringify(respResult));
        console.log("Total Crimpless Seal : " + respResult.respObject.length);
        var invalidIDX = 0;
        var validIDX = 0;
        for (var _i = 0, _a = respResult.respObject; _i < _a.length; _i++) {
            var object = _a[_i];
            /**
             * Seal Status
             * B = broken
             * S = new and issued
             * P = new and not issued
             * I - installed
             */
            if (object.sealStatus = 'P') {
                this.sealValidItem[validIDX] = object;
                validIDX++;
            }
            else {
                this.sealInvalidItem[invalidIDX] = object;
                invalidIDX++;
            }
        }
        this.validCount = this.sealValidItem.length;
        this.invalidCount = this.sealInvalidItem.length;
        console.log("Valid Crimpless Seal : " + this.sealValidItem.length);
        console.log("Invalid Crimpless Seal : " + this.sealInvalidItem.length);
    };
    SealValidationPage.prototype.validSave = function () {
        var _this = this;
        console.log("access validSave");
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.ds.insertCrimplesslData(this.sealValidItem).then(function (result) {
            var respResult = result;
            var alert = _this.alertCtrl.create({
                title: 'Status',
                subTitle: respResult.statusCode,
                message: respResult.statusText,
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            loading.dismiss();
                        }
                    }]
            });
            alert.present();
        }, function (error) {
            console.log("save crimpless seal error : " + JSON.stringify(error));
            var alert = _this.alertCtrl.create({
                title: 'Error !',
                subTitle: 'Error save crimpless seal',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            loading.dismiss();
                        }
                    }]
            });
            alert.present();
        });
    };
    /**
     * Hide Show Main Section
     * Created  : Alif
     * Date     : 12-11-2018
     * edited   : Ameer (16/11/2018)
     */
    SealValidationPage.prototype.showValidSection = function (index) {
        index++;
        if (this.showValid == false) {
            this.showValid = true;
        }
        else if (index === 2) {
            this.showValid = false;
        }
    };
    /**
     * Hide Show Main Section
     * Created  : Alif
     * Date     : 12-11-2018
     * edited   : Ameer (16/11/2018)
     */
    SealValidationPage.prototype.showInvalidSection = function (index) {
        index++;
        if (this.showInvalid == false) {
            this.showInvalid = true;
        }
        else if (index === 2) {
            this.showInvalid = false;
        }
    };
    /**
     * swicth between scan crimpless seal and list all valid crimpless seal
     * @param ev
     */
    SealValidationPage.prototype.segmentChanged = function (event) {
        var _this = this;
        debugger;
        console.log('inside segmentChanged ');
        console.log('Segment changed 1 : ' + event.value);
        if (event.value === 'list') {
            this.ds.queryAllCrimplessData().then(function (result) {
                console.log("result : " + JSON.stringify(result));
                var response = result;
                if (response.statusCode === 'S') {
                    console.log('total size : ' + response.data.length);
                    _this.sealValidItems = response.data;
                    _this.totalValidCount = response.data.length;
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Error !',
                        subTitle: response.statusText,
                        buttons: [{
                                text: 'Ok',
                                handler: function () { }
                            }]
                    });
                    alert_4.present();
                }
            });
        }
    };
    SealValidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-validation',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-validation/seal-validation.html"*/'<!--\n  Generated template for the SealValidationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Seal Validation</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-segment [(ngModel)]="refSegment" style="padding-bottom: 10px;" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="scan">Scan</ion-segment-button>\n    <ion-segment-button value="list">List</ion-segment-button>\n  </ion-segment>\n\n  <span [ngSwitch]="refSegment">\n    <span *ngSwitchCase="\'scan\'">\n\n      <ion-row>\n        <ion-col col-6 style="padding-left: 21px;">\n          <ion-checkbox [(ngModel)]="singleFlag" (ionChange)="CheckboxClicked($event)" style="float: left;"></ion-checkbox>\n          <span>\n            <ion-label style="font-size: 10px; float: left; margin-top: 3px; padding-left: 13px; color: green;">Single Serial Number</ion-label>\n          </span>\n        </ion-col>    \n      </ion-row>\n \n      <div *ngIf="singleFlag===false">\n        <ion-row>\n          <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>      \n            <ion-item>\n              <ion-label stacked>Start Serial Number</ion-label>\n              <ion-input [(ngModel)]="firstSEALCode" type="text"></ion-input>\n            </ion-item>             \n          </ion-col>\n          <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 16px 0px 0px 0px;">        \n            <button ion-button (click)="barcodeScan(1)" style="float: right;">\n              <ion-icon name="barcode" item-right></ion-icon>\n            </button>\n          </ion-col>     \n        </ion-row>\n\n        <ion-row>\n          <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n            <ion-item>\n              <ion-label stacked>End Serial Number</ion-label>\n              <ion-input [(ngModel)]="lastSEALCode" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 16px 0px 0px 0px;">\n            <button ion-button (click)="barcodeScan(2)" style="float: right;">\n              <ion-icon name="barcode" item-right></ion-icon>\n            </button>\n          </ion-col>   \n        </ion-row>\n      </div>\n\n      <div *ngIf="singleFlag===true">\n        <ion-row>\n          <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>      \n            <ion-item>\n              <ion-label stacked>Start Serial Number</ion-label>\n              <ion-input [(ngModel)]="singleSEALCode" type="text"></ion-input>\n            </ion-item>             \n          </ion-col>\n          <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 16px 0px 0px 0px;">        \n            <button ion-button (click)="barcodeScan(3)" style="float: right;">\n              <ion-icon name="barcode" item-right></ion-icon>\n            </button>\n          </ion-col>     \n        </ion-row>    \n      </div>\n\n      <div>\n        <ion-row>      \n          <ion-col col-10 col-lg-10 col-md-10 col-xs-10 col-sm-10>              \n          </ion-col>\n          <ion-col col-2 col-lg-2 col-md-2 col-xs-2 col-sm-2 style="margin: 16px 0px 0px 0px;">        \n            <div class="save-btn">\n              <button ion-button (click)="validation()" style="padding: 15px;float: right;">Validation</button>\n            </div>\n          </ion-col>     \n        </ion-row>\n      </div>\n\n      <div *ngIf="showSealStatus">\n        <ion-row >\n          <ion-col col-12 col-lg-12 col-md-12 col-xs-12 col-sm-12>\n            <ion-list>\n              <ion-item>\n                <ion-card style="padding: 15px;">\n                  <ion-card-header>\n                    <ion-row>\n                      <ion-col col-12>\n                        <b>List of Crimpless Seal</b> ( Valid Count: <span style="color: green;">{{validCount}}</span>, Invalid Count: \n                        <span style="color: red;">{{invalidCount}}</span> )\n                      </ion-col>               \n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-item-divider color="light" (click)="showValidSection(1)" class="pointer">\n                      <ion-row align-items-center>\n                        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                          <strong>Valid Crimpless Seal</strong>\n                        </ion-col>\n                        <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">              \n                          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showValid"></ion-icon>\n                          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showValid"></ion-icon>\n                        </ion-col>\n                      </ion-row>\n                    </ion-item-divider>\n                    <div *ngIf="showValid">\n                      <ion-list>\n                        <ion-item *ngFor="let device of sealValidItem; let i = index;"\n                          [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                          <ion-row [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                            <ion-col col-1 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                              [ngClass]="deviceLabel">\n                              {{ i+1 }}.\n                            </ion-col>\n                            <ion-col col-5 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                              [ngClass]="deviceLabel">\n                              {{ device.sealCode }}\n                            </ion-col>                                        \n                          </ion-row>\n                        </ion-item>\n                        <ion-item>\n                          <button ion-button (click)="validSave()" style="padding: 15px;float: right;">Save</button>                  \n                        </ion-item>\n                      </ion-list>\n                    </div>\n                    <ion-item-divider color="light" (click)="showInvalidSection(1)" class="pointer">\n                      <ion-row align-items-center>\n                        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                          <strong>Invalid Crimpless Seal</strong>\n                        </ion-col>\n                        <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">              \n                          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showInvalid"></ion-icon>\n                          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showInvalid"></ion-icon>\n                        </ion-col>\n                      </ion-row>\n                    </ion-item-divider>\n                    <div *ngIf="showInvalid">\n                      <ion-list>\n                        <ion-item *ngFor="let device of sealInvalidItem; let i = index;"\n                          [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                          <ion-row [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                            <ion-col col-1 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                              [ngClass]="deviceLabel">\n                              {{ i+1 }}.\n                            </ion-col>\n                            <ion-col col-5 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                              [ngClass]="deviceLabel">\n                              {{ device.sealCode }}\n                            </ion-col>                                        \n                          </ion-row>\n                        </ion-item>\n                      </ion-list>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n    </span>\n\n    <span *ngSwitchCase="\'list\'">\n      <div>\n        <ion-row >\n          <ion-col col-12 col-lg-12 col-md-12 col-xs-12 col-sm-12>\n            <ion-list>\n              <ion-item>\n                <ion-card style="padding: 15px;">\n                  <ion-card-header>\n                    <ion-row>\n                      <ion-col col-12>\n                        <b>List of Crimpless Seal</b> ( Valid Count: <span style="color: green;">{{totalValidCount}}</span>)\n                      </ion-col>               \n                    </ion-row>\n                  </ion-card-header>                 \n                  <ion-card-content>\n                    <ion-item-divider color="light" class="pointer">\n                      <ion-row align-items-center>\n                        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n                          <strong>Valid Crimpless Seal</strong>\n                        </ion-col>\n                        <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">              \n                          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showValid"></ion-icon>\n                          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showValid"></ion-icon>\n                        </ion-col>\n                      </ion-row>\n                    </ion-item-divider>\n                    <div *ngIf="showValid">\n                      <ion-list>\n                        <ion-item *ngFor="let device of sealValidItems; let i = index;"\n                          [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                          <ion-row [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                            <ion-col col-1 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                              [ngClass]="deviceLabel">\n                              {{ i+1 }}.\n                            </ion-col>\n                            <ion-col col-5 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                              [ngClass]="deviceLabel">\n                              {{ device.SEALCODE }}\n                            </ion-col>                                        \n                          </ion-row>\n                        </ion-item>\n                      </ion-list>\n                    </div>                                   \n                  </ion-card-content>\n                </ion-card>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </span>\n  </span>\n</ion-content>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-validation/seal-validation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_store_data_store__["a" /* DataStoreProvider */]])
    ], SealValidationPage);
    return SealValidationPage;
}());

//# sourceMappingURL=seal-validation.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealValidationPageModule", function() { return SealValidationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_validation__ = __webpack_require__(1113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealValidationPageModule = /** @class */ (function () {
    function SealValidationPageModule() {
    }
    SealValidationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_validation__["a" /* SealValidationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_validation__["a" /* SealValidationPage */]),
            ],
        })
    ], SealValidationPageModule);
    return SealValidationPageModule;
}());

//# sourceMappingURL=seal-validation.module.js.map

/***/ })

});
//# sourceMappingURL=41.js.map