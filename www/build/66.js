webpackJsonp([66],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNotePdfPageModule", function() { return CreateNotePdfPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_create_note__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CreateNotePdfPageModule = /** @class */ (function () {
    function CreateNotePdfPageModule() {
    }
    CreateNotePdfPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pdf_create_note__["a" /* CreateNotePdfPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__pdf_create_note__["a" /* CreateNotePdfPage */]),
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]
            ],
        })
    ], CreateNotePdfPageModule);
    return CreateNotePdfPageModule;
}());

//# sourceMappingURL=pdf-create-note.module.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNotePdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_signaturepad_signature_pad__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;






/**
 * Generated class for the PidarTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNotePdfPage = /** @class */ (function () {
    function CreateNotePdfPage(navCtrl, navParams, loadingCtrl, appCtrl, alertCtrl, plt, file, fileOpener, gv, gf, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.gv = gv;
        this.gf = gf;
        this.dataService = dataService;
        this.pdfObj = null;
        this.ta0cnobjstr = {};
        this.pdfBase64 = [];
        this.dateCur = new Date();
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();
        this.dateN = curr_date + '-' + curr_month + '-' + curr_year;
        this.displayname = this.gv.displayname;
        // this.formData.ta4staff_id = this.gv.username;
        // this.formData.ta4staff_date = this.date;
        // this.formData.ta4exe_date = this.date;
        this.signaturePadOptions = {
            /*       minWidth: 1,
                  canvasWidth: 300,
                  canvasHeight: 80 */
            minWidth: 1,
            canvasWidth: 300,
            canvasHeight: 120,
            backgroundColor: '#f6fbff',
            penColor: '#666a73'
        };
        //this.signatureImage = navParams.get("signatureImage");
        //this.signatureImage = '../assets/img/logo.png'
        var attrCnnumber = this.navParams.get('attrCnnumber');
        if ((typeof (attrCnnumber)) !== 'undefined' && (attrCnnumber !== '') && (attrCnnumber !== null)) {
            this.creditnum = attrCnnumber;
            var loading_1 = this.loadingCtrl.create({
                content: this.gv.loadingContent
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            this.dataService.fetchParticularCreditNote(attrCnnumber).then(function (results) {
                var respResult = results;
                if (respResult.processStatus === "success") {
                    _this.ta0cnobjstr = respResult.respObject;
                    console.log(' this.ta0cnobjstr  ', _this.ta0cnobjstr);
                }
                loading_1.dismiss();
            });
        }
    }
    CreateNotePdfPage.prototype.clearSign = function (formType) {
        switch (formType) {
            case 'staff':
                this.signaturePad1.clear();
                break;
            case 'witness':
                this.signaturePad2.clear();
                break;
            case 'executive':
                this.signaturePad3.clear();
                break;
        }
    };
    CreateNotePdfPage.prototype.convertStringCat = function (val) {
        var catdesc = '';
        if (val !== '' && val !== null && typeof val !== 'undefined') {
            if (val === 'C1') {
                catdesc = 'Credit';
            }
            else if (val === 'R1') {
                catdesc = 'Removal';
            }
            else if (val === 'D1') {
                catdesc = 'Division';
            }
        }
        return catdesc;
    };
    CreateNotePdfPage.prototype.convertStringReturn = function (val) {
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
    CreateNotePdfPage.prototype.drawComplete1 = function () {
        if (this.signaturePad1.isEmpty() !== true) {
            this.signatureImage1 = this.signaturePad1.toDataURL();
            console.log('signature image ' + this.signatureImage1);
            // this.formData.ta4staff_sign = null;
            // console.log("Sign 1: " + JSON.stringify(this.formData.ta4staff_sign));
        }
    };
    CreateNotePdfPage.prototype.drawComplete2 = function () {
        if (this.signaturePad3.isEmpty() !== true) {
            this.signatureImage2 = this.signaturePad3.toDataURL();
            console.log('signature image ' + this.signatureImage2);
        }
    };
    // generate pdf record..
    CreateNotePdfPage.prototype.createPdf = function () {
        var _this = this;
        var d = new Date();
        var tempArr = [];
        for (var x = 0; x < this.ta0cnobjstr.ta0cnline.length; x++) {
            tempArr.push({
                no: x + 1,
                description: this.ta0cnobjstr.ta0cnline[x].description,
                serialnum: this.ta0cnobjstr.ta0cnline[x].serialnum,
                material: this.ta0cnobjstr.ta0cnline[x].material,
                status: this.ta0cnobjstr.ta0cnline[x].status
            });
        }
        var df = d.getUTCDate() + '/' + d.getMonth() + '/' + d.getUTCFullYear();
        var docDefinition = {
            content: [
                { text: ' ' },
                { text: '   ' },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['3%', '20%', '15%', '*', '15%', '15%'],
                        body: [
                            [{ text: 'BORANG KREDIT KE STOR UNTUK BARANG-BARANG / ASET YANG DIROMBAK', colSpan: 4 }, { text: '' }, { text: '' }, { text: '' }, 'Return Credit Note', this.creditnum],
                            [{ text: 'PLANT', colSpan: 3 }, { text: '' }, { text: '' }, '6000', 'TARIKH', df],
                            [{ text: 'BUSNIESS AREA', colSpan: 3 }, { text: '' }, { text: '' }, this.ta0cnobjstr.siteid, 'NAMA PENGHANTAR', ''],
                            [{ text: 'COST CENTER', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'NAMA PENERIMA', ''],
                            [{ text: 'TAHUN PERALATAN DIPASANG (Bagi kes Rombakan)', colSpan: 3 }, { text: '' }, { text: '' }, '', { text: 'Untuk Diisi Oleh Pihak Stor', colSpan: 2 }, ''],
                            [{ text: 'NO. PROJECT LAMA SEMASA PEMASANGAN(Bagi kes Rombakan)', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'JENIS URUSAN', '202/222/262'],
                            [{ text: 'NO. PROJECT / NO. MAIN ORDER / NO. GI SLIP ASAL', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'NO. DOKUMEN ERMS', ''],
                            [{ text: 'STORE LOCATION', colSpan: 3 }, { text: '' }, { text: '' }, { text: '' }, 'WARANTI BARANG', 'ADA/TIADA'],
                        ]
                    }
                },
                {
                    style: 'itemsTable',
                    table: {
                        widths: ['3%', '20%', '15%', '*', '15%', '15%'],
                        body: [
                            [{ text: 'NO.' }, { text: 'NO. ASET ERMS' }, { text: 'NO. KATALOG' }, { text: 'DESKRIPSI BARANG/ASET (Jenis, Model, No Siri, dll)' }, { text: 'KUANTITI KREDIT' }, { text: 'UNIT' }],
                            [this.buildTableBody(tempArr, ['no']), this.buildTableBody(tempArr, ['serialnum']), this.buildTableBody(tempArr, ['material']), this.buildTableBody(tempArr, ['description']), '', ''],
                        ]
                    },
                    layout: {
                        fillColor: function (i, node) {
                            return (i % 2 === 0) ? null : '#d6d2d2';
                        }
                    }
                },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['*', '3%'],
                        body: [
                            [{ text: 'SEBAB KREDIT KE STOR(Sila Tandakan !)' }, { text: '' }],
                            [{ text: 'Cable - Usable ' }, { text: '' }],
                            [{ text: 'Cable - Unsable ' }, { text: '' }],
                            [{ text: 'Transformer - For Selangor and Kuala Lumpur, refer Asset Retirement Management Module (ARMS)  ' }, { text: '' }],
                            [{ text: 'Dismantle - Usable ' }, { text: '' }],
                            [{ text: 'Dismantle - Unsable ' }, { text: '' }],
                            [{ text: 'Defect (Before Commisioning) ' }, { text: '' }],
                            [{ text: 'Failure (After Commisioning) ' }, { text: '' }],
                            [{ text: 'Vandalism at Site ' }, { text: '' }],
                            [{ text: 'Meter ' }, { text: '' }],
                            [{ text: 'Project Cancellation/ Excess ' }, { text: '' }],
                        ]
                    }
                },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['50%', '50%'],
                        body: [
                            [{
                                    image: 'sign',
                                    width: 200,
                                    alignment: 'center'
                                }, {
                                    image: 'sign1',
                                    width: 200,
                                    alignment: 'center'
                                }],
                            ['Disedia oleh ', 'Disemak & Diluluskan oleh'],
                        ]
                    }
                }
            ],
            images: {
                sign: this.signaturePad1.toDataURL(),
                sign1: this.signaturePad3.toDataURL()
            },
            styles: {
                header: {
                    fontSize: 8,
                    bold: true
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    alignment: "left",
                },
                story: {
                    italic: true,
                    alignment: "center",
                    width: "50%"
                },
                tableExample: {
                    margin: [0, 0, 0, 0],
                    width: "100%",
                    fontSize: 8,
                },
                itemsTable: {
                    margin: [0, 0, 0, 0],
                    fontSize: 8,
                    color: 'black'
                },
            }
        };
        console.log("before pdf maker. ");
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.pdfObj.getBase64(function (data) {
            _this.pdfBase64.push({ Language: 'English', Base64: data });
            var itemVal = _this.pdfBase64;
            var objCopy = JSON.parse(JSON.stringify(itemVal));
            var overallArray = { "pdfFile": objCopy };
            _this.dataService.attachmentRCNDocument(overallArray, _this.creditnum);
        });
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: "application/pdf" });
            //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            var pdfcreditnotename = _this.creditnum;
            link.download = pdfcreditnotename + '.pdf';
            link.click();
        });
        //w.document.close()
        console.log("pdf Obj : " + JSON.stringify(this.pdfObj));
    };
    CreateNotePdfPage.prototype.buildTableBody = function (data, columns) {
        var body = [];
        data.forEach(function (row) {
            var dataRow = [];
            columns.forEach(function (column) {
                dataRow.push(row[column].toString());
                dataRow.sort(function (a, b) { return (a.row[column].toString() > b.row[column].toString()) ? 1 : -1; });
            });
            body.push(dataRow);
        });
        return body;
    };
    CreateNotePdfPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is("cordova")) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: "application/pdf" });
                // Save the PDF to the data Directory of our App
                _this.file
                    .writeFile(_this.file.dataDirectory, _this.creditnum + ".pdf", blob, {
                    replace: true
                })
                    .then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + _this.creditnum + ".pdf", "application/pdf");
                    //window.cordova.plugins.FileOpener.canOpenFile(this.file.dataDirectory, SUCCESS_CALLBACK, ERROR_CALLBACK);
                });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    CreateNotePdfPage.prototype.warrantytext = function (val) {
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
    CreateNotePdfPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("ListCreateNotePage", '');
    };
    CreateNotePdfPage.prototype.attachmentPdf = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], CreateNotePdfPage.prototype, "signaturePad1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], CreateNotePdfPage.prototype, "signaturePad2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], CreateNotePdfPage.prototype, "signaturePad3", void 0);
    CreateNotePdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pdf-create-note",template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/pdf-create-note/pdf-create-note.html"*/'<!--\n  Generated template for the PidarTestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-sm-3 style="text-align: left;padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-sm-5>\n        <div class="pageTitle">Return Credit Note\n        </div>\n      </ion-col>\n      <ion-col col-4 col-sm-4 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <ion-fab top right style="top: 0%">\n            <button ion-fab mini class="flash">\n              <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n                {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n            </button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 col-sm-2 (click)="presentPopover($event)">\n          <button ion-button icon-only clear>\n            <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n          </button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n    <ion-row>\n      <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">RCN Number</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ta0cnobjstr.creditnum}}</ion-label>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6 *ngIf="ta0cnobjstr.category ===\'D1\' ">\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Number</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ta0cnobjstr.reservenum}}</ion-label>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n        <ion-row>\n\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Category </ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">\n            {{convertStringCat(ta0cnobjstr.category)}}\n          </ion-label>\n\n\n        </ion-row>\n      </ion-col>\n      <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Return Type</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">\n            {{convertStringReturn(ta0cnobjstr.returntype)}}</ion-label>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br />\n  <br />\n  <br />\n  <ion-item-divider color="light">\n    <ion-row>\n      <ion-col>\n\n        <ion-icon name="md-speedometer"></ion-icon>&nbsp; <strong>Device List</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n\n  <ion-grid>\n    <ion-item>\n      <ion-label>\n        <ion-row>\n          <!-- <ion-col col-1 text-wrap>\n                    <ion-label stacked class="ion-1x"> Sel </ion-label>\n                  </ion-col> -->\n          <!-- <ion-col col-1 text-wrap>\n                    <ion-label stacked class="ion-1x"> No.</ion-label>\n                  </ion-col> -->\n          <ion-col col-3 text-wrap>\n            <ion-label stacked class="ion-2x">No. &nbsp; Serial No </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap style="text-align: left;">\n            <ion-label stacked class="ion-2x"> Material </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'R1\'">\n            <ion-label stacked class="ion-2x"> Description </ion-label>\n          </ion-col>\n          <ion-col col-3 text-wrap *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'30\' ">\n            <ion-label stacked class="ion-2x"> Description </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'31\' ">\n            <ion-label stacked class="ion-2x"> Description </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'C1\'">\n            <ion-label stacked class="ion-2x"> Description </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'R1\'">\n            <ion-label stacked class="ion-2x"> Dev. Status </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.returntype ===\'31\'">\n            <ion-label stacked class="ion-2x"> Dev. Status </ion-label>\n          </ion-col>\n          <ion-col col-1 text-wrap\n            *ngIf="(ta0cnobjstr.returntype === \'11\' &&  (ta0cnobjstr.category !==\'R1\' ) ) ||  (ta0cnobjstr.returntype === \'12\'  &&   (ta0cnobjstr.category !==\'R1\')  ) "\n            style="text-align: right;">\n            <ion-label stacked class="ion-2x"> Warr. </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap style="text-align: right;" *ngIf="ta0cnobjstr.category ===\'C1\'">\n            <ion-label stacked class="ion-2x"> Status </ion-label>\n          </ion-col>\n          <ion-col col-1 text-wrap style="text-align: right;" *ngIf="ta0cnobjstr.category ===\'R1\'">\n            <ion-label stacked class="ion-2x"> Status </ion-label>\n          </ion-col>\n          <ion-col col-2 text-wrap style="text-align: right;"\n            *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'30\'">\n            <ion-label stacked class="ion-2x"> Status </ion-label>\n          </ion-col>\n          <ion-col col-1 text-wrap style="text-align: right;"\n            *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'31\'">\n            <ion-label stacked class="ion-2x"> Status </ion-label>\n          </ion-col>\n          <ion-col col-1 text-wrap style="text-align: right;">\n            <ion-label stacked class="ion-2x"> Val. Type </ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngFor=\'let device of ta0cnobjstr.ta0cnline; let j = index\' [ngClass]="i%2 != 0 ? \'classA\' : \'classB\'">\n      <ion-label>\n        <ion-row>\n          <ion-col col-3 text-wrap>\n            {{ device.cnlinenum }}. &nbsp;&nbsp;&nbsp;{{ device.serialnum }}\n          </ion-col>\n          <ion-col col-2 text-wrap style="text-align: left;">\n            {{ device.material }}\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'R1\'">\n            {{ device.description }}\n          </ion-col>\n          <ion-col col-3 text-wrap *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'30\' ">\n            {{ device.description }}\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'31\' ">\n            {{ device.description }}\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'C1\'">\n            {{ device.description }}\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.category ===\'R1\'">\n            {{ device.devicestatus }}\n          </ion-col>\n          <ion-col col-2 text-wrap *ngIf="ta0cnobjstr.returntype ===\'31\'">\n            {{ device.devicestatus }}\n          </ion-col>\n          <ion-col col-1 text-wrap\n            *ngIf="(ta0cnobjstr.returntype === \'11\' &&  (ta0cnobjstr.category !==\'R1\' ) ) ||  (ta0cnobjstr.returntype === \'12\'  &&   (ta0cnobjstr.category !==\'R1\')  ) "\n            style="text-align: right;">\n            {{ warrantytext(device.iswarranty) }}\n          </ion-col>\n          <ion-col col-2 text-wrap style="text-align: right;" *ngIf="ta0cnobjstr.category ===\'C1\'">\n            {{ device.status }}\n          </ion-col>\n          <ion-col col-1 text-wrap style="text-align: right;" *ngIf="ta0cnobjstr.category ===\'R1\'">\n            {{ device.status }}\n          </ion-col>\n          <ion-col col-2 text-wrap style="text-align: right;"\n            *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'30\'">\n            {{ device.status }}\n          </ion-col>\n          <ion-col col-1 text-wrap style="text-align: right;"\n            *ngIf="ta0cnobjstr.category ===\'D1\' && ta0cnobjstr.returntype ===\'31\'">\n            {{ device.status }}\n          </ion-col>\n          <ion-col col-1 text-wrap style="text-align: right;">\n            {{ device.valuationtype }}\n          </ion-col>\n\n        </ion-row>\n      </ion-label>\n    </ion-item>\n  </ion-grid>\n  <br />\n  <br />\n  <br />\n\n  <ion-item-divider color="light">\n    <ion-row>\n      <ion-col>\n        <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>Disediakan Oleh</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row>\n    <ion-col col-3 col-sm-3 col-md-3>\n      <ion-item>\n        <ion-label color="primary">Disediakan Oleh</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-7 col-sm-7 col-md-7>\n      <ion-item text-center no-lines>\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n      </ion-item>\n    </ion-col>\n    <!-- <ion-col col- col-sm- col-md->\n      <ion-item no-lines>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'staff\')">Clear</button>\n        \n      </ion-item>\n    </ion-col> -->\n\n    <ion-col col-2 col-sm-2 col-md-2>\n      <ion-item no-lines align-self-center>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'staff\')">Clear</button>\n      </ion-item>\n      <ion-item no-lines align-self-center>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="drawComplete1()">Done</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-sm-12 col-md-4 col-4>\n      <ion-item>\n        <ion-label color="primary">Name</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="displayname" readonly="true" placeholder="Auto Populate">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary">Staff No.</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <!-- <ion-input type="text" [(ngModel)]="formData.ta4staff_id" readonly="true" placeholder="Auto Populate"> \n        </ion-input>-->\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary">Date</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input type="text" readonly="true" value="{{ dateN }}" placeholder="Auto Populate"></ion-input>\n\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <!-- Remark & Approved By -->\n  <ion-item-divider color="light">\n    <ion-row>\n      <ion-col>\n        <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>Remarks & Approved By</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <!-- <ion-textarea type="textarea" style="border:1px" rows="5" placeholder="Please Enter"\n          [(ngModel)]="formData.ta4exe_remarks"></ion-textarea> -->\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-3 col-sm-3 col-md-3>\n      <ion-item>\n        <ion-label color="primary">Approved By</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-7 col-sm-7 col-md-7>\n      <ion-item text-center no-lines>\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad3></signature-pad>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2 col-sm-2 col-md-2>\n      <ion-item no-lines align-self-center>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="clearSign(\'executive\')">Clear</button>\n      </ion-item>\n      <ion-item no-lines align-self-center>\n        <button ion-button round mode="md" color="buttonlightColor" (click)="drawComplete2()">Done</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style="padding-bottom: 20px;">\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary">Name</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <!-- <ion-input type="text" [(ngModel)]="formData.ta4exe_name" placeholder="Enter value"></ion-input> -->\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style="padding-bottom: 20px;">\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary">ID</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <!-- <ion-input type="text" [(ngModel)]="formData.ta4exe_id" placeholder="Enter value"></ion-input> -->\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style="padding-bottom: 20px;">\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary">Position</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <!-- <ion-input type="text" [(ngModel)]="formData.ta4exe_position" placeholder="Enter value"></ion-input> -->\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary">Date</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-input type="text" readonly="true" value="{{ dateN }}" placeholder="Auto Populate"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <button ion-button (click)="createPdf()">Create PDF</button>\n  <!-- button ion-button  (click)="generatePdf()">Generate PDF</button -->\n  <button ion-button (click)="downloadPdf()" color="secondary" [disabled]="!pdfObj">Save PDF</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/pdf-create-note/pdf-create-note.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], CreateNotePdfPage);
    return CreateNotePdfPage;
}());

//# sourceMappingURL=pdf-create-note.js.map

/***/ })

});
//# sourceMappingURL=66.js.map