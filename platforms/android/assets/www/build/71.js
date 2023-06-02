webpackJsonp([71],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteScanningPageModule", function() { return CreditNoteScanningPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_note_temp__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreditNoteScanningPageModule = /** @class */ (function () {
    function CreditNoteScanningPageModule() {
    }
    CreditNoteScanningPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_note_temp__["a" /* CreditNoteTemp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_note_temp__["a" /* CreditNoteTemp */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], CreditNoteScanningPageModule);
    return CreditNoteScanningPageModule;
}());

//# sourceMappingURL=credit-note-temp.module.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditNoteTemp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreditNoteTemp = /** @class */ (function () {
    function CreditNoteTemp(appCtrl, navCtrl, alertCtrl, dataService, loadingCtrl, barcodeScanner, gv, gf, jsonStoreCurd, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.gv = gv;
        this.gf = gf;
        this.jsonStoreCurd = jsonStoreCurd;
        this.navParams = navParams;
        this.getItem = [];
        this.listta0cnline = [];
        this.lowerToggle = false;
        this.scanToggle = false;
        this.pagination = true;
        this.pageLimit = this.gv.ctrl_creditlimitPage;
        this.currentPage = 1;
        this.prevPage = false;
        this.nextPage = false;
        this.paginationList = [];
        this.displayPageList = [];
        this.ta0divlimit = 0;
        this.disabledOkayButton = false;
        this.initialValueSetter();
        this.loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        this.delloading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
    }
    CreditNoteTemp.prototype.ionViewDidLoad = function () {
        this.setPagination();
        this.activePagination(this.currentPage);
    };
    CreditNoteTemp.prototype.initialValueSetter = function () {
        this.getItem = this.navParams.get('data');
        this.siteid = this.gv.ta0defsiteid;
        this.category = this.getItem.category;
        this.disCategory = this.getCategory(this.getItem.category);
        this.creditnum = this.getItem.creditnum;
        this.returntype = this.getItem.returntype;
        this.ta0divlimit = (this.getItem.ta0divlimit !== null && typeof this.getItem.ta0divlimit !== 'undefined' && this.getItem.ta0divlimit !== '') ? this.getItem.ta0divlimit : 500;
        this.disReturnType = this.getReturnType(this.getItem.returntype);
        this.reservItemnum = (this.getItem.reservitemnum !== null && typeof this.getItem.reservitemnum !== 'undefined' && this.getItem.reservitemnum !== '') ? this.getItem.reservitemnum : '';
        this.reservenum = (this.getItem.reservenum !== null && typeof this.getItem.reservenum !== 'undefined' && this.getItem.reservenum !== '') ? this.getItem.reservenum : '';
        this.status = this.getItem.status;
        this.listta0cnline = (typeof this.getItem.ta0cnline !== 'undefined' && this.getItem.ta0cnline !== null && this.getItem.ta0cnline !== '') ? this.getItem.ta0cnline : [];
        this.displayPageList = this.listta0cnline;
        this.lowerToggle = (this.listta0cnline.length > 0) ? true : false;
    };
    CreditNoteTemp.prototype.addDevice = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.disabledOkayButton = true;
        this.serialnum = this.serialnum.trim().split('+').join('');
        this.fetchParticularCreditNote().then(function (result) {
            if (_this.serialnum !== null && typeof _this.serialnum !== 'undefined' && _this.serialnum !== '') {
                if (_this.ta0divlimit > _this.listta0cnline.length) {
                    _this.findNextLineNumber().then(function (lineNum) {
                        _this.jsonCreation(lineNum).then(function (sendJson) {
                            _this.dataService.ermsValidationCreditNoteProcess(sendJson, _this.siteid).then(function (result) {
                                var respObject = {};
                                respObject = result;
                                if (respObject.processStatus === 'success') {
                                    _this.displayAlert(_this.serialnum + " is successfully added.");
                                }
                                else {
                                    _this.displayValidateAlert(respObject.respObject, respObject.description);
                                }
                                _this.disabledOkayButton = false;
                                loading.dismiss();
                            });
                        });
                    });
                }
                else {
                    _this.displayValidateAlert('You\'re have reach ' + _this.ta0divlimit + " line limit", "Error");
                    loading.dismiss();
                    _this.disabledOkayButton = false;
                }
            }
            else {
                _this.displayValidateAlert("Please enter the device serial number", "Error");
                loading.dismiss();
                _this.disabledOkayButton = false;
            }
        });
    };
    CreditNoteTemp.prototype.jsonCreation = function (lineNum) {
        var _this = this;
        return new Promise(function (resolve) {
            var sendJson = {};
            var sendObj = [];
            sendObj = {
                "serialNumber": _this.serialnum,
                "lineNumber": lineNum
            };
            sendJson = {
                "returnCategory": _this.category,
                "returnType": _this.returntype,
                "creditNumber": _this.creditnum,
                "resrNumber": _this.reservenum,
                "resrItemNumber": _this.reservItemnum,
                "ITEM": [sendObj]
            };
            resolve(sendJson);
        });
    };
    CreditNoteTemp.prototype.fetchParticularCreditNote = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.fetchParticularCreditNote(_this.creditnum).then(function (results) {
                var respResult = results;
                if (respResult.processStatus === "success") {
                    var resConst = [];
                    resConst = respResult.respObject.ta0cnline;
                    _this.listta0cnline = resConst;
                    _this.listta0cnline = (typeof _this.listta0cnline !== 'undefined' && _this.listta0cnline !== null && _this.listta0cnline !== '') ? _this.listta0cnline : [];
                    _this.displayPageList = _this.listta0cnline;
                    _this.lowerToggle = (_this.listta0cnline.length > 0) ? true : false;
                    _this.setPagination();
                    resolve();
                }
                else {
                    _this.displayValidateAlert(respResult.description, respResult.processStatus);
                    resolve();
                }
            });
        });
    };
    CreditNoteTemp.prototype.displaySuccessAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Success !',
            cssClass: 'alert-success',
            subTitle: message,
            buttons: [{
                    text: 'Ok', cssClass: 'ok-button',
                    handler: function () {
                        _this.goBack();
                    }
                },
            ]
        });
        alert.present();
    };
    CreditNoteTemp.prototype.previewPdf = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("CreateNotePdfPage", { attrCnnumber: this.creditnum });
    };
    CreditNoteTemp.prototype.displayAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.serialnum = "";
                        _this.fetchParticularCreditNote();
                    }
                }]
        });
        alert.present();
    };
    CreditNoteTemp.prototype.displayValidateAlert = function (message, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            cssClass: 'alert-error',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.fetchParticularCreditNote();
                        _this.serialnum = '';
                        _this.loading.dismiss();
                    }
                }]
        });
        alert.present();
    };
    CreditNoteTemp.prototype.deleteDevice = function (material) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Delete",
            subTitle: "Do you want to delete device",
            buttons: [{
                    text: 'Yes',
                    handler: function () {
                        _this.deleteInValidMaximo(material).then(function (result) {
                            _this.fetchParticularCreditNote();
                            _this.loading.dismiss();
                            _this.delloading.dismiss();
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        _this.loading.dismiss();
                    }
                }]
        });
        alert.present();
    };
    CreditNoteTemp.prototype.saveToMaximoData = function () {
        var _this = this;
        var materialList = [];
        materialList = this.listta0cnline;
        for (var i = 0; i < materialList.length; i++)
            materialList[i]._action = "Change";
        return new Promise(function (resolve) {
            var res = {};
            res = {
                "status": 'SUBMIT',
                "returnCategory": _this.category,
                "returnType": _this.returntype,
                "resrNumber": _this.reservenum,
                "resrItemNumber": _this.reservItemnum,
                "siteid": _this.siteid,
                "creditnum": _this.creditnum,
                "ta0cnline": materialList
            };
            _this.dataService.fetchtoSaveCn(res, _this.creditnum.trim()).then(function (results) {
                var respObject = {};
                respObject = results;
                if (respObject.processStatus === 'success') {
                    _this.displaySuccessAlert(respObject.respObject);
                }
                else {
                    debugger;
                    _this.displayValidateAlert("Failed : " + respObject.description, "Error");
                }
                _this.loading.dismiss();
                // this.goBack();
                resolve();
            });
        });
    };
    CreditNoteTemp.prototype.deleteInValidMaximo = function (material) {
        var _this = this;
        this.delloading.present();
        var mat = {};
        mat = material;
        mat._action = "Delete";
        return new Promise(function (resolve) {
            var res = {};
            res = {
                "status": 'DELETE',
                "returnCategory": _this.category,
                "returnType": _this.returntype,
                "resrNumber": _this.reservenum,
                "resrItemNumber": _this.reservItemnum,
                "siteid": _this.siteid,
                "creditnum": _this.creditnum,
                "ta0cnline": [material]
            };
            _this.dataService.fetchtoSaveCn(res, _this.creditnum.trim()).then(function (results) {
                resolve();
            });
        });
    };
    CreditNoteTemp.prototype.warrantytext = function (val) {
        var warDesc = '';
        if (val !== '' && val !== null && typeof val !== 'undefined') {
            if (val === "True") {
                warDesc = 'Yes';
            }
            else if (val === "False") {
                warDesc = 'No';
            }
            else
                warDesc = 'N/A';
            return warDesc;
        }
    };
    CreditNoteTemp.prototype.barcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode"
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.serialnum = barcodeData.text.trim();
            _this.addDevice();
        });
    };
    CreditNoteTemp.prototype.findNextLineNumber = function () {
        var _this = this;
        var listLineNumber = [];
        return new Promise(function (resolve) {
            listLineNumber = _this.getValues(_this.listta0cnline, "cnlinenum");
            resolve(((listLineNumber.length > 0) ? Math.max.apply(Math, listLineNumber) : 0) + 1);
        });
    };
    CreditNoteTemp.prototype.getCategory = function (category) {
        switch (category) {
            case 'C1':
                return 'Credit';
            case 'R1':
                return 'Removal';
            case 'D1':
                return 'Diversion';
            default:
                return '';
        }
    };
    CreditNoteTemp.prototype.getReturnType = function (returnType) {
        switch (returnType) {
            case '10':
                return 'Excess';
            case '11':
                return 'Faulty Under Warranty';
            case '12':
                return 'Faulty Out of Warranty';
            case '13':
                return 'Faulty Under Warranty / Out of Warranty';
            case '20':
                return 'ReUse';
            case '30':
                return 'Credit';
            case '31':
                return 'Removal - Reuse';
            default:
                return '';
        }
    };
    CreditNoteTemp.prototype.getValues = function (obj, key) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getValues(obj[i], key));
            }
            else if (i == key) {
                objects.push(parseInt(obj[i]));
            }
        }
        return objects;
    };
    CreditNoteTemp.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("ListCreateNotePage", '');
    };
    // Pagination
    CreditNoteTemp.prototype.setPagination = function () {
        var limit;
        if (this.listta0cnline.length > 0) {
            limit = Math.ceil(this.listta0cnline.length / this.pageLimit);
            this.pagination = (limit > this.pageLimit) ? true : false;
            for (var i = 1; i <= limit; i++)
                this.paginationList.push(i);
        }
    };
    CreditNoteTemp.prototype.activePagination = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageLimit;
        var end = start + this.pageLimit;
        var endValue = 0;
        if (this.listta0cnline.length > 0) {
            if (end < this.listta0cnline.length) {
                endValue = end;
            }
            else {
                endValue = this.listta0cnline.length;
            }
        }
        else {
            endValue = this.listta0cnline.length;
        }
        this.displayPageList = [];
        for (var i = start; i < endValue; i++) {
            this.displayPageList.push(this.listta0cnline[i]);
        }
        this.allowPagination();
    };
    CreditNoteTemp.prototype.setprevious = function () {
        this.allowPagination();
        if (!this.prevPage) {
            this.currentPage = (this.currentPage - 1);
            this.activePagination(this.currentPage);
        }
    };
    CreditNoteTemp.prototype.setnext = function () {
        this.allowPagination();
        if (!this.nextPage) {
            this.currentPage = (this.currentPage + 1);
            this.activePagination(this.currentPage);
        }
    };
    CreditNoteTemp.prototype.allowPagination = function () {
        // Previous Button
        if ((this.currentPage - 1) > 0) {
            this.prevPage = false;
        }
        else {
            this.prevPage = true;
        }
        // Next Button
        if ((this.currentPage + 1) <= this.paginationList.length) {
            this.nextPage = false;
        }
        else {
            this.nextPage = true;
        }
    };
    CreditNoteTemp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'credit-note-temp',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/ERMS-Validation/credit-note-temp/credit-note-temp.html"*/'<ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Device Scanning Details</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <ion-fab top right style="top: 0%">\n            \n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 col-sm-2>\n          <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-xs-6 col-sm-6 >\n      <ion-row>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">RCN Number</ion-label>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ creditnum }}</ion-label>\n      </ion-row>\n    </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="category ===\'D1\' " >\n    <ion-col col-6 col-lg-6 col-xs-6 col-sm-6 >\n      <ion-row>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Number</ion-label>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ reservenum }}</ion-label>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-xs-6 col-sm-6>\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Item #</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ reservItemnum }}</ion-label>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col col-lg-6>\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Category Type</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ disCategory }}</ion-label>\n        </ion-row>\n      </ion-col>\n      <ion-col col-lg-6>\n           <ion-row>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Return Type</ion-label>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ disReturnType }}</ion-label>\n          </ion-row> \n        </ion-col>\n  </ion-row>\n  <br />\n  <ion-row style="margin-bottom: -16px;">\n    <ion-col col-6>\n      <ion-checkbox [(ngModel)]="scanToggle" (ionChange)="scanToggleChange()" style="float: left;"></ion-checkbox>\n      <span>\n        <ion-label style="font-size: 17px; float: left; margin-top: 3px; padding-left: 13px; color: green;">Do you like\n          to scan the devices... </ion-label>\n      </span>\n    </ion-col>\n    <ion-col col-6></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n      <ion-item style="float: right;" *ngIf="!scanToggle">\n        <ion-label stacked class="ion-1x"> Enter Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="serialnum"></ion-input>\n      </ion-item>\n      <ion-item style="float: right;" *ngIf="scanToggle">\n        <ion-label stacked> Scan Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="serialnum" (keypress)="scanningDevices($event)" [disabled]=scanToggle>\n        </ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 22px 0px 0px 0px;" *ngIf = "status===\'DRAFT\'" >\n      <button ion-button style="float: right;"  [disabled]=" disabledOkayButton "\n        *ngIf="!scanToggle" (click)="addDevice()">\n        Okay\n      </button>\n     \n      <button ion-button (click)="barcodeScan()" style="float: right;"  [disabled]="status !== \'DRAFT\' " *ngIf="scanToggle" >\n        <ion-icon name="barcode" item-right></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="lowerToggle">\n    <ion-row>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n        <ion-label stacked> </ion-label>\n      </ion-col>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 style="text-align: right;"> \n        <!-- <ion-label stacked class="ion-1x"> Devices selected : {{ selectedlistCheck.length  }} </ion-label> -->\n      </ion-col>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 style="text-align: right;">\n        <ion-label stacked class="ion-1x"> Business Area : {{ siteid  }} </ion-label>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-grid>\n      <ion-item>\n        <ion-label>\n          <ion-row>\n            <!-- <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> Sel </ion-label>\n            </ion-col> -->\n            <!-- <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> No.</ion-label>\n            </ion-col> -->\n            <ion-col col-3 text-wrap>\n              <ion-label stacked class="ion-2x">No. &nbsp; Serial No </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap style="text-align: left;">\n              <ion-label stacked class="ion-2x"> Material </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf=  "category ===\'R1\'"  >\n              <ion-label stacked class="ion-2x"> Description </ion-label>\n            </ion-col>\n            <ion-col col-3 text-wrap *ngIf=  "category ===\'D1\' && returntype ===\'30\' "  >\n              <ion-label stacked class="ion-2x"> Description </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf=  "category ===\'D1\' && returntype ===\'31\' "  >\n              <ion-label stacked class="ion-2x"> Description </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf=  "category ===\'C1\'"  >\n              <ion-label stacked class="ion-2x"> Description </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf ="category ===\'R1\'" >\n              <ion-label stacked class="ion-2x"> Dev. Status </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf ="returntype ===\'31\'">\n              <ion-label stacked class="ion-2x"> Dev. Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap  *ngIf="(returntype === \'11\' &&  (category !==\'R1\' ) ) ||  (returntype === \'12\'  &&   (category !==\'R1\')  ) " style="text-align: right;">\n              <ion-label stacked class="ion-2x">  Warr. </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap style="text-align: right;" *ngIf=  "category ===\'C1\'"  >\n              <ion-label stacked class="ion-2x" > Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;" *ngIf=  "category ===\'R1\'" >\n              <ion-label stacked class="ion-3x" > Status </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap style="text-align: right;" *ngIf=  "category ===\'D1\' && returntype ===\'30\'" >\n              <ion-label stacked class="ion-3x" > Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;" *ngIf=  "category ===\'D1\' && returntype ===\'31\'" >\n              <ion-label stacked class="ion-3x" > Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;" *ngIf="(returntype !== \'10\'   ) " >\n              <ion-label stacked class="ion-3x"> Val. Type </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;" *ngIf="(returntype === \'10\'   ) " >\n              &nbsp;\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;">\n              <ion-label stacked class="ion-2x"> Rmv </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngFor=\'let device of listta0cnline; let i = index;\' [ngClass]="i%2 != 0 ? \'classA\' : \'classB\'">\n        <ion-label>\n          <ion-row>\n            <ion-col col-3 text-wrap *ngIf="13 > device.serialnum.length " stacked class="ion-2x"> \n              {{ device.cnlinenum }}.  &nbsp;&nbsp;&nbsp;{{ device.serialnum }}\n            </ion-col>\n            <ion-col col-3 text-wrap *ngIf=" device.serialnum.length >= 13"  stacked class="ion-3x"> \n              {{ device.cnlinenum }}.  &nbsp;&nbsp;&nbsp;{{ device.serialnum }}\n            </ion-col>\n            <ion-col col-2 text-wrap style="text-align: left;">\n              {{ device.material }}\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf=  "category ===\'R1\'"  >\n              {{ device.description }}\n            </ion-col>\n            <ion-col col-3 text-wrap *ngIf=  "category ===\'D1\' && returntype ===\'30\' "  >\n              {{ device.description }}\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf=  "category ===\'D1\' && returntype ===\'31\' "  >\n              {{ device.description }}\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf=  "category ===\'C1\'"  >\n              {{ device.description }}\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf ="category ===\'R1\'" >\n              {{ device.devicestatus }}\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf ="returntype ===\'31\'" >\n              {{ device.devicestatus }}\n            </ion-col>\n            <ion-col col-1 text-wrap  *ngIf="(returntype === \'11\' &&  (category !==\'R1\' ) ) ||  (returntype === \'12\'  &&   (category !==\'R1\')  ) " style="text-align: right;">\n            {{ warrantytext(device.iswarranty) }}\n            </ion-col>\n            <ion-col col-2 text-wrap style="text-align: right;"  *ngIf=  "category ===\'C1\'" stacked class="ion-2x" >\n              {{ device.status }}\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;"  *ngIf=  "category ===\'R1\'" stacked class="ion-2x" >\n              {{ device.status }}\n            </ion-col>\n            <ion-col col-2 text-wrap style="text-align: right;" *ngIf=  "category ===\'D1\' && returntype ===\'30\'" stacked class="ion-2x" >\n              {{ device.status }}\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;" *ngIf=  "category ===\'D1\' && returntype ===\'31\'" stacked class="ion-2x" >\n              {{ device.status }}\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;"  stacked class="ion-3x"  *ngIf="(returntype !== \'10\')"  >\n              {{ device.valuationtype }}\n            </ion-col>\n            <ion-col col-1 text-wrap style="text-align: right;"  stacked class="ion-3x"  *ngIf="(returntype === \'10\') "  >\n              &nbsp;\n            </ion-col>\n            <ion-col col-1 text-wrap   style="text-align: right;" >\n              <button ion-button  (click)="deleteDevice(device, i)"  [disabled]="status !== \'DRAFT\' " >\n                <ion-icon name="trash" item-center></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>      \n        </ion-label>\n      </ion-item>\n    </ion-grid>\n    <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align: right;">\n        <button ion-button style="padding: 15px;" (click)="saveToMaximoData()"  *ngIf="status === \'DRAFT\'"     >Submit</button>\n        <button ion-button style="padding: 15px;" (click)="previewPdf()"  *ngIf="status !== \'DRAFT\'  ||  status === \'INPRG\'"   >Pdf</button> \n        <button ion-button style="padding: 15px;" (click)="goBack()">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/ERMS-Validation/credit-note-temp/credit-note-temp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CreditNoteTemp);
    return CreditNoteTemp;
}());

//# sourceMappingURL=credit-note-temp.js.map

/***/ })

});
//# sourceMappingURL=71.js.map