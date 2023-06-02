webpackJsonp([24],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_pdfForms_notice_letter_Pdf_notice_letterPDF__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














__WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the SealChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealChecklistPage = /** @class */ (function () {
    function SealChecklistPage(navCtrl, navParams, gf, gv, appCtrl, http, loadingCtrl, platform, file, dataService, noticePdf, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gf = gf;
        this.gv = gv;
        this.appCtrl = appCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.file = file;
        this.dataService = dataService;
        this.noticePdf = noticePdf;
        this.fileOpener = fileOpener;
        this.formSelected = true;
        this.selectOptions = {};
        this.OfficeAddress = {};
        this.location = [];
        this.pdfObj = null;
        this.pdfBase64 = [];
        debugger;
        this.itemOri = navParams.get('paramObj');
        if (!this.itemOri.json.hasOwnProperty('complaince')) {
            this.itemOri.json.complaince = [];
        }
        /*   if (gv.loc_woComplaints != null && gv.loc_woComplaints.size != 0) {
            if (gv.loc_woComplaints.has('noticeMeterTampering')) {
              this.noticeMeter = gv.loc_woComplaints.get('noticeMeterTampering');
            }
          } else {
            this.noticeMeter = new Complaints();
            this.gv.loc_woComplaints.set('noticeMeterTampering', this.noticeMeter);
          } */
        this.noticeMeter = new __WEBPACK_IMPORTED_MODULE_8__pojo_Complaints__["a" /* Complaints */]();
        this.gv.loc_woComplaints.set('noticeMeterTampering', this.noticeMeter);
        this.noticeMeter.currentTime = __WEBPACK_IMPORTED_MODULE_11_moment__().format('HH:mm:ss');
        this.noticeMeter.ta4accountno = this.itemOri.json.ta0accountnum;
        this.noticeMeter.customername = this.itemOri.json.ta0bpname;
        this.noticeMeter.customeraddress = this.itemOri.json.woserviceaddress[0].formattedaddress;
        this.noticeMeter.staffno = this.itemOri.json.assignment[0].laborcode;
        this.noticeMeter.staffname = this.gv.displayname;
        this.dateCur = new Date();
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();
        this.noticeMeter.ta4datetime = curr_date + '/' + curr_month + '/' + curr_year;
        this.selectOptions = {
            title: 'Address'
        };
        this.OfficeAddress = {
            title: 'Zone'
        };
        this.signaturePadOptions = {
            minWidth: 1,
            canvasWidth: 300,
            canvasHeight: 80
        };
        if (typeof (this.itemOri.json.noticeForm) !== 'undefined') {
            if (this.itemOri.json.noticeForm.Status === false) {
                this.formSelected = false;
                this.formASelection = true;
            }
            else {
                this.formSelected = true;
                this.formASelection = false;
            }
        }
        else {
            this.formSelected = true;
            this.formASelection = false;
        }
    }
    SealChecklistPage.prototype.ngAfterViewInit = function () {
        debugger;
        if (this.formSelected === false) {
            if (typeof (this.noticeMeter.ta4signcustomer) !== 'undefined') {
                this.signaturePad2.fromDataURL(this.noticeMeter.ta4signcustomer);
            }
            if (typeof (this.noticeMeter.ta4signstaff) !== 'undefined') {
                this.signaturePad.fromDataURL(this.noticeMeter.ta4signstaff);
            }
        }
        else {
            if (typeof (this.noticeMeter.ta4signstaff) !== 'undefined') {
                this.signaturePad3.fromDataURL(this.noticeMeter.ta4signstaff);
            }
        }
    };
    SealChecklistPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SealChecklistPage.prototype.officeAdrssSelect = function () {
        debugger;
        if (this.noticeMeter.ta4officezone === 'kl') {
            this.noticeMeter.officeName = null;
            this.location = [];
            this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
            this.location[1] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
            this.location[2] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
        }
        else if (this.noticeMeter.ta4officezone === 'selat') {
            this.noticeMeter.officeName = null;
            this.location = [];
            this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
            this.location[1] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
        }
        else if (this.noticeMeter.ta4officezone === 'tmr') {
            this.noticeMeter.officeName = null;
            this.location = [];
            this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
            this.location[1] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
        }
        else if (this.noticeMeter.ta4officezone === 'sngor') {
            this.noticeMeter.officeName = null;
            this.location = [];
            this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
            this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
            this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";
        }
        else if (this.noticeMeter.ta4officezone === 'utr') {
            this.noticeMeter.officeName = null;
            this.location = [];
            this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
            this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
        }
        var url = '../www/assets/data/address.json';
        /*  this.http
           .get(url)
           .map(res => res.json())
           .subscribe(data => {
             if (this.noticeMeter.ta4officezone === 'kl') {
               this.noticeMeter.officeName = null;
               this.location = [];
               this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
               this.location[1] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
               this.location[2] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
     
             }
             else if (this.noticeMeter.ta4officezone === 'selat') {
               this.noticeMeter.officeName = null;
               this.location = [];
               this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
               this.location[1] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
             }
             else if (this.noticeMeter.ta4officezone === 'tmr') {
               this.noticeMeter.officeName = null;
               this.location = [];
               this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
               this.location[1] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
             }
     
             else if (this.noticeMeter.ta4officezone === 'sngor') {
               this.noticeMeter.officeName = null;
               this.location = [];
               this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
               this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
               this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";
             }
             else if (this.noticeMeter.ta4officezone === 'utr') {
               this.noticeMeter.officeName = null;
               this.location = [];
               this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
               this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
             }
     
           }) */
    };
    SealChecklistPage.prototype.checkPhoneNumber = function (dataValue) {
        debugger;
        var phoneKL = [];
        var phoneSlt = [];
        var phoneTmr = [];
        var phoneUtr = [];
        var phoneSelangor = [];
        phoneKL.push({ phoneNo: '03-62545409' }, { phoneNo: '03-62545409' }, { phoneNo: "03-78063456" });
        phoneSlt.push({ phoneNo: '07-2192166' }, { phoneNo: '07-2192166' });
        phoneTmr.push({ phoneNo: '09-5155583' }, { phone: '09-5155555' });
        phoneUtr.push({ phoneNo: '04-5306579/ 04-5380108' }, { phone: '04-5380108' });
        phoneSelangor.push({ phoneNo: '03-78063456' }, { phoneNo: '03-33418602' }, { phoneNo: '03 - 78063456' });
        switch (this.noticeMeter.ta4officezone) {
            case 'kl':
                if (this.noticeMeter.officeName === null) {
                    this.noticeMeter.ta4officeaddress = '';
                    this.noticeMeter.ta4officephone = '';
                }
                else {
                    for (var k = 0; k < this.location.length; k++) {
                        if (dataValue == k) {
                            this.noticeMeter.ta4officeaddress = this.location[k];
                            this.noticeMeter.ta4officephone = phoneKL[k].phoneNo;
                        }
                    }
                }
                break;
            case 'selat':
                if (this.noticeMeter.officeName === null) {
                    this.noticeMeter.ta4officeaddress = '';
                    this.noticeMeter.ta4officephone = '';
                }
                else {
                    for (var m = 0; m < this.location.length; m++) {
                        if (dataValue == m) {
                            this.noticeMeter.ta4officeaddress = this.location[m];
                            this.noticeMeter.ta4officephone = phoneSlt[m].phoneNo;
                        }
                    }
                }
                break;
            case 'tmr':
                if (this.noticeMeter.officeName === null) {
                    this.noticeMeter.ta4officeaddress = '';
                    this.noticeMeter.ta4officephone = '';
                }
                else {
                    for (var a = 0; a < this.location.length; a++) {
                        if (dataValue == a) {
                            this.noticeMeter.ta4officephone = phoneTmr[a].phoneNo;
                            this.noticeMeter.ta4officeaddress = this.location[a];
                        }
                    }
                }
                break;
            case 'sngor':
                if (this.noticeMeter.officeName === null) {
                    this.noticeMeter.ta4officeaddress = '';
                    this.noticeMeter.ta4officephone = '';
                }
                else {
                    for (var b = 0; b < this.location.length; b++) {
                        if (dataValue == b) {
                            this.noticeMeter.ta4officephone = phoneSelangor[b].phoneNo;
                            this.noticeMeter.ta4officeaddress = this.location[b];
                        }
                    }
                }
                break;
            case 'utr':
                if (this.noticeMeter.officeName === null) {
                    this.noticeMeter.ta4officeaddress = '';
                    this.noticeMeter.ta4officephone = '';
                }
                else {
                    for (var d = 0; d < this.location.length; d++) {
                        if (dataValue == d) {
                            this.noticeMeter.ta4officephone = phoneUtr[d].phoneNo;
                            this.noticeMeter.ta4officeaddress = this.location[d];
                        }
                    }
                }
        }
        /*  var url = '../www/assets/data/address.json';
         this.http
           .get(url)
           .map(res => res.json())
           .subscribe(data => {
             debugger;
             switch (this.noticeMeter.ta4officezone) {
               case 'kl':
                 if (this.noticeMeter.officeName === null) {
                   this.noticeMeter.ta4officeaddress = '';
                   this.noticeMeter.ta4officephone = '';
                 } else {
                   for (let k = 0; k < data.officeDetails[0].kl.length; k++) {
                     if (dataValue == k) {
                       this.noticeMeter.ta4officeaddress = this.location[k];
                       this.noticeMeter.ta4officephone = phoneKL[k].phoneNo;
     
                     }
                   }
                 }
                 break;
               case 'selat':
                 if (this.noticeMeter.officeName === null) {
                   this.noticeMeter.ta4officeaddress = '';
                   this.noticeMeter.ta4officephone = '';
                 } else {
                   for (let m = 0; m < data.officeDetails[3].selat.length; m++) {
                     if (dataValue == m) {
                       this.noticeMeter.ta4officeaddress = this.location[m];
                       this.noticeMeter.ta4officephone = phoneSlt[m].phoneNumber;
                     }
                   }
                 }
                 break;
               case 'tmr':
                 if (this.noticeMeter.officeName === null) {
                   this.noticeMeter.ta4officeaddress = '';
                   this.noticeMeter.ta4officephone = '';
                 } else {
                   for (let a = 0; a < data.officeDetails[4].tmr.length; a++) {
                     if (dataValue == a) {
                       this.noticeMeter.ta4officephone = phoneTmr[a].phoneNo;
                       this.noticeMeter.ta4officeaddress = this.location[a];
                     }
                   }
                 }
                 break;
               case 'sngor':
                 if (this.noticeMeter.officeName === null) {
                   this.noticeMeter.ta4officeaddress = '';
                   this.noticeMeter.ta4officephone = '';
                 } else {
                   for (let b = 0; b < data.officeDetails[1].sngor.length; b++) {
                     if (dataValue == b) {
                       this.noticeMeter.ta4officephone = phoneSelangor[b].phoneNo;
                       this.noticeMeter.ta4officeaddress = this.location[b];
                     }
                   }
                 }
                 break;
               case 'utr':
                 if (this.noticeMeter.officeName === null) {
                   this.noticeMeter.ta4officeaddress = '';
                   this.noticeMeter.ta4officephone = '';
                 } else {
                   for (let d = 0; d < data.officeDetails[2].utr.length; d++) {
                     if (dataValue == d) {
                       this.noticeMeter.ta4officephone = phoneUtr[d].phoneNo;
                       this.noticeMeter.ta4officeaddress = this.location[d];
                     }
                   }
                 }
               //End Swtich Case for Meter Inspection
             }
           }) */
    };
    SealChecklistPage.prototype.formatTimeDisplay = function () {
        var dateformat;
        dateformat = this.noticeMeter.datetime.replace("Z", "");
        this.noticeMeter.date1 = __WEBPACK_IMPORTED_MODULE_11_moment__(dateformat).format('DD/MM/YYYY HH:mm');
    };
    SealChecklistPage.prototype.saveData = function () {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        // if (this.pdfSelectForm[i].key === 'formAStaff' && this.pdfLanguage == 'eng') {
        if (this.gv.loc_woComplaints.get('noticeMeterTampering') === null) {
            this.gf.displayToast('Please fill out the form first');
        }
        else {
            loading.present().then(function () {
                if (_this.formSelected === false) {
                    _this.noticeMeter.ta4signstaff = _this.signaturePad.toDataURL();
                    _this.noticeMeter.ta4signcustomer = _this.signaturePad2.toDataURL();
                    for (var a = 0; a < _this.itemOri.json.complaince.length; a++) {
                        debugger;
                        if (_this.itemOri.json.complaince[a].name !== 'UserCopperate') {
                            _this.itemOri.json.complaince.push({ name: 'UserCopperate', data: _this.noticeMeter });
                        }
                    }
                    if (_this.itemOri.json.complaince.length === 0) {
                        _this.itemOri.json.complaince.push({ name: 'UserCopperate', data: _this.noticeMeter });
                    }
                    _this.noticePdf
                        .generateNoticePdf(_this.noticeMeter, 'UserCopperate')
                        .then(function (result) {
                        //this.userStsGroupList = result;
                        console.log(result);
                        _this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(result);
                        _this.pdfObj.getBase64(function (data) {
                            if (_this.pdfBase64.length === 0) {
                                _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                            }
                            else {
                                _this.pdfBase64.splice(0, 1);
                                _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                            }
                            // this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Tehnical Review' });
                            for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                if (_this.itemOri.json.complaince[j].name === 'UserCopperate') {
                                    _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                }
                            }
                            var itemVal = _this.itemOri;
                            var objCopy = JSON.parse(JSON.stringify(itemVal));
                            debugger;
                            _this.dataService.saveSealRecordImage(objCopy, _this.itemOri.json.wonum, 'addPdf', '', _this.itemOri.json.worktype, 'CF');
                        });
                        _this.downloadPdf(_this.pdfObj, "Notice Letter Cooperate");
                        _this.pdfObj.getBuffer(function (buffer) {
                            var blob = new Blob([buffer], { type: "application/pdf" });
                            //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                            var link = document.createElement("a");
                            link.href = window.URL.createObjectURL(blob);
                            link.download = "Notice Letter Cooperate";
                            link.click();
                        });
                        _this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
                    }).catch(function (error) {
                        _this.generatePDF(_this.noticeMeter, 'UserCopperate').then(function (result) {
                            _this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.downloadPdf(_this.pdfObj, "Notice Letter ");
                            _this.pdfObj.getBase64(function (data) {
                                if (_this.pdfBase64.length === 0) {
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                                }
                                else {
                                    _this.pdfBase64.splice(0, 1);
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'UserCopperate' });
                                }
                                for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                    if (_this.itemOri.json.complaince[j].name === 'UserCopperate') {
                                        _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                    }
                                }
                                var itemVal = _this.itemOri;
                                var objCopy = JSON.parse(JSON.stringify(itemVal));
                                debugger;
                                _this.dataService.saveSealRecordImage(objCopy, _this.itemOri.json.wonum, 'addPdf', '', _this.itemOri.json.worktype, "CF");
                            });
                            _this.pdfObj.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: "application/pdf" });
                                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                link.download = "Notice Letter Cooperate";
                                link.click();
                            });
                            _this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
                        });
                    }) //for second catch error
                        .catch(function (error) {
                        _this.gf.warningAlert("Error", "PDF still unable to create", "Dismiss");
                    }).then(function () {
                        loading.dismiss();
                    });
                }
                else if (_this.formSelected === true) {
                    _this.noticeMeter.ta4signstaff = _this.signaturePad3.toDataURL();
                    for (var a = 0; a < _this.itemOri.json.complaince.length; a++) {
                        debugger;
                        if (_this.itemOri.json.complaince[a].name !== 'NotCopperate') {
                            _this.itemOri.json.complaince.push({ name: 'NotCopperate', data: _this.noticeMeter });
                        }
                    }
                    if (_this.itemOri.json.complaince.length === 0) {
                        _this.itemOri.json.complaince.push({ name: 'NotCopperate', data: _this.noticeMeter });
                    }
                    _this.noticePdf.generateNoticePdf(_this.noticeMeter, 'NotCopperate').then(function (result) {
                        _this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(result);
                        _this.downloadPdf(_this.pdfObj, "Notice Letter ");
                        _this.pdfObj.getBase64(function (data) {
                            if (_this.pdfBase64.length === 0) {
                                _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
                            }
                            else {
                                _this.pdfBase64.splice(0, 1);
                                _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
                            }
                            // this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Tehnical Review' });
                            for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                if (_this.itemOri.json.complaince[j].name === 'NotCopperate') {
                                    _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                }
                            }
                            var itemVal = _this.itemOri;
                            var objCopy = JSON.parse(JSON.stringify(itemVal));
                            debugger;
                            _this.dataService.saveSealRecordImage(objCopy, _this.itemOri.json.wonum, 'addPdf', '', _this.itemOri.json.worktype, "CF");
                        });
                        _this.pdfObj.getBuffer(function (buffer) {
                            var blob = new Blob([buffer], { type: "application/pdf" });
                            //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                            var link = document.createElement("a");
                            link.href = window.URL.createObjectURL(blob);
                            link.download = "Notice Letter NotCopperate";
                            link.click();
                        });
                        _this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
                    }).catch(function (error) {
                        _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                        _this.generatePDF(_this.noticeMeter, 'NotCopperate').then(function (result) {
                            _this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.downloadPdf(_this.pdfObj, "Notice Letter ");
                            _this.pdfObj.getBase64(function (data) {
                                if (_this.pdfBase64.length === 0) {
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
                                }
                                else {
                                    _this.pdfBase64.splice(0, 1);
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'NotCopperate' });
                                }
                                for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                    if (_this.itemOri.json.complaince[j].name === 'NotCopperate') {
                                        _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                    }
                                }
                                var itemVal = _this.itemOri;
                                var objCopy = JSON.parse(JSON.stringify(itemVal));
                                debugger;
                                _this.dataService.saveSealRecordImage(objCopy, _this.itemOri.json.wonum, 'addPdf', '', _this.itemOri.json.worktype, "CF");
                            });
                            _this.pdfObj.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: "application/pdf" });
                                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                link.download = "Notice Letter NotCopperate";
                                link.click();
                            });
                            _this.gf.warningAlert("Message", "Successfully save data", "Dismiss");
                        });
                    }) //for second catch error
                        .catch(function (error) {
                        _this.gf.warningAlert("Error", "PDF still unable to create", "Dismiss");
                    }).then(function () {
                        loading.dismiss();
                    });
                }
            });
            /*  let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
             newRootNav.push("SealServiceDetailsPage", {
               paramObj: this.itemOri
             }); */
            this.navCtrl.pop();
        }
    };
    SealChecklistPage.prototype.downloadPdf = function (pdfObj, filename) {
        var _this = this;
        debugger;
        if (this.platform.is("cordova")) {
            pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: "application/pdf" });
                // Save the PDF to the data Directory of our App
                _this.file
                    .writeFile(_this.file.dataDirectory, filename + ".pdf", blob, {
                    replace: true
                })
                    .then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + filename + ".pdf", "application/pdf");
                    //window.cordova.plugins.FileOpener.canOpenFile(this.file.dataDirectory, SUCCESS_CALLBACK, ERROR_CALLBACK);
                });
            });
        }
        else {
            // On a browser simply use download!
            pdfObj.download();
        }
    };
    SealChecklistPage.prototype.typeform = function (value) {
        debugger;
        if (value === 'true') {
            this.formSelected = false;
        }
        else {
            this.formSelected = true;
        }
    };
    SealChecklistPage.prototype.clearSign = function (type) {
        debugger;
        switch (type) {
            case 'staff': {
                this.signaturePad.clear();
                break;
            }
            case 'customer': {
                this.signaturePad2.clear();
                break;
            }
            case 'staffNotCoop': {
                this.signaturePad3.clear();
                break;
            }
        }
    };
    SealChecklistPage.prototype.generatePDF = function (item, formSelect) {
        return new Promise(function (resolve, reject) {
            debugger;
            console.log("came inside to complaint pdf form generation --- >>>.");
            var dd = null;
            dd = {
                content: [
                    /*   {
                        margin: [30, 20, 0, 0],
                        image: item.tnbLogo,
                      }, */
                    {
                        //margin: [280, 20, 10, 0],
                        margin: [30, 20, 0, 0],
                        table: {
                            widths: [300, 'auto', 'auto'],
                            body: [
                                [
                                    { image: item.tnbLogo }, 'Account No: ', item.ta4accountno
                                ],
                                [
                                    '', 'Date Inspection: ', item.currentTime
                                ],
                            ],
                        },
                        layout: 'noBorders'
                    },
                    {
                        margin: [60, 20, 10, 0],
                        table: {
                            headerRows: 1,
                            body: [
                                [{ text: 'DESSCRIPTION CHECKLIST TAMPERING METER CASE (KUPM) TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                ['', '', ''],
                            ]
                        },
                        layout: 'lightHorizontalLines'
                    },
                    {
                        margin: [30, 10, 0, 0],
                        table: {
                            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                            heights: [30, 30, 30, 30, 30, 30, 30, 30],
                            body: [
                                [{ text: 'User Details', style: 'tableHeader', colSpan: 8, alignment: 'center' }, {}, {}, {}, {}, {}, {}, {}],
                                [{
                                        stack: [
                                            {
                                                image: 'owner',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    }, { text: 'Owner', style: 'tableHeader', alignment: 'center' },
                                    {
                                        stack: [
                                            {
                                                image: 'tenant',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    }, { text: 'Tenant', style: 'tableHeader', alignment: 'center' },
                                    {
                                        stack: [
                                            {
                                                image: 'staff',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    }, { text: 'Worker', style: 'tableHeader', alignment: 'center' },
                                    {
                                        stack: [
                                            {
                                                image: 'heir',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    }, { text: 'Heir', style: 'tableHeader', alignment: 'center' }],
                            ]
                        }
                    },
                    '\n\n',
                    {
                        margin: [30, 100, 0, 0],
                        table: {
                            widths: ['auto', 'auto'],
                            heights: ['auto', 'auto'],
                            body: [
                                [{ text: '1) KUPM Description to user: ', style: 'tableHeader' },
                                    {
                                        image: 'userDesc',
                                        width: 70,
                                        height: 20,
                                    }],
                                [{ text: '2) Notice A description to user (Disconect) ', style: 'tableHeader' },
                                    {
                                        image: 'noticeA',
                                        width: 70,
                                        height: 20,
                                    }],
                                [{ text: '3) Claim calculation will be made as a result of a search case is found ', style: 'tableHeader' },
                                    {
                                        image: 'claim',
                                        width: 70,
                                        height: 20,
                                    }],
                            ]
                        },
                        layout: 'noBorders'
                    },
                    '\n\n',
                    {
                        margin: [30, 15, 0, 0],
                        text: ['Remarks: ', '\n', item.remark1]
                    },
                    '\n\n',
                    {
                        margin: [30, 15, 0, 0],
                        heights: [100, 50],
                        table: {
                            widths: ['auto', 180, 'auto', 'auto'],
                            body: [
                                [{ text: '' },
                                    {
                                        stack: [
                                            {
                                                image: 'sign',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    },
                                    { text: '' },
                                    {
                                        stack: [
                                            {
                                                image: 'sign2',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    },
                                ],
                                [
                                    '', 'Client signature', '', 'TNB signature staff'
                                ],
                                [
                                    'Name: ', item.customername, 'Name: ', item.staffname
                                ],
                                [
                                    'Idetification No. ', item.nricWitness, 'Staff No: ', item.nriceStaff
                                ],
                            ]
                        },
                        layout: 'noBorders'
                    },
                    '\n\n',
                    {
                        margin: [30, 0, 0, 0],
                        heights: [100, 50],
                        table: {
                            widths: [350, 'auto'],
                            body: [
                                [
                                    'No Signature for client',
                                    {
                                        stack: [
                                            {
                                                image: 'notWilling',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    },
                                ],
                                [
                                    'Client not available',
                                    {
                                        stack: [
                                            {
                                                image: 'noClient',
                                                width: 70,
                                                height: 20,
                                            }
                                        ]
                                    },
                                ],
                            ],
                        },
                    },
                ],
                images: {
                    claim: item.claiminform,
                    noticeA: item.noticeA,
                    userDesc: item.kupmUser,
                    owner: item.owner,
                    tenant: item.tenant,
                    staff: item.staff,
                    heir: item.heir,
                    notWilling: item.notWillingSign,
                    noClient: item.noClient,
                    sign: item.ta4signcustomer,
                    sign2: item.ta4signstaff
                },
                styles: {
                    title: {
                        fontSize: 14,
                        bold: true
                    },
                    textMargin: {
                        margin: [30, 50, 80, 0]
                    }
                }
            };
            resolve(dd);
            reject(dd);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealChecklistPage.prototype, "signaturePad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealChecklistPage.prototype, "signaturePad2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealChecklistPage.prototype, "signaturePad3", void 0);
    SealChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-checklist',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-compliance/seal-checklist/seal-checklist.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>{{ pageTitle }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon color="light" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="sealHeader">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 style="text-align: left;">\n        <button ion-button clear class="backbutton" (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow backbutton"> Back </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-7 col-md-7 col-sm-7 align-self-center>\n        <div class="pageTitle">Notice Letter\n        </div>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;">\n        <div *ngIf=\'gv.testMobile\'>\n          <ion-icon class="flash_plnt" name="custom-connected" [style.color]="gv.testMobile ? \'red\':\'#00e600\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </div>\n        <div *ngIf=\'!gv.testMobile\'>\n          <ion-icon class="flash_plnt" name="custom-disconnect" [style.color]="gv.testMobile ? \'red\':\'#00e600\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content>\n  <!-- User give cooperation -->\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-item-divider style="background-color: #f3e5f5">Notice Letter User Status</ion-item-divider>\n      </ion-item>\n    </ion-row>\n    <ion-list radio-group [(ngModel)]="formASelection">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Customer cooperate</ion-label>\n            <ion-radio (click)="typeform(\'true\')" value="true"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>Customer does not cooperate</ion-label>\n            <ion-radio (click)="typeform(\'false\')" value="false"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n  <!-- Cust cooperate -->\n  <ion-grid *ngIf=\'!formSelected\'>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-title text-center>\n            Letter Notice Customer Cooperate\n          </ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Our Reference: TNB B/SJH/../</ion-label>\n        </ion-item>\n        <ion-row>\n          <ion-item>\n            <ion-label>{{noticeMeter.ta4accountno}}</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label>{{noticeMeter.customername}}</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Date: {{noticeMeter.currentTime}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            Dear valued TNB customer,\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-title text-center>\n            Inspection Notice Meter Installation by TNB\n          </ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>Informed that examination and testing has been made on installation metres that record\n            use of\n            electric to premise that addressed {{noticeMeter.customeraddress}} with no. account\n            {{noticeMeter.ta4accountno}} in {{noticeMeter.ta4datetime}} {{noticeMeter.currentTime}} hour. </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>\n            Testing result show metres does not record real electric usage reading and this was explained the customers.\n            We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the\n            customers.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            For your information, evidence bag serial number is\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="noticeMeter.serialNum" placeholder="Enter siri"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>\n            Sir/madame, you are invited to attend to Seksyen Jaminan Hasil (Zon Utara), Aras 2, Wisma TNB, No. 1 Jalan\n            Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang (No. tel: 04-5380108) and please state\n            evidence bag serial number for further information after 14 days from case date above.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>If there are any inquiries, sir/madame please contact </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="noticeMeter.ta4officezone" [selectOptions]="OfficeAddress"\n            (ionChange)="officeAdrssSelect()">\n            <ion-option value="kl">Kuala Lumpur</ion-option>\n            <ion-option value="selat">Selatan</ion-option>\n            <ion-option value="utr">Utara</ion-option>\n            <ion-option value="sngor">Selangor</ion-option>\n            <ion-option value="tmr">Timur</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="noticeMeter.officeName" [selectOptions]="selectOptions"\n            (ionChange)="checkPhoneNumber($event) ">\n            <ion-option *ngFor="let locations  of location ; let j=index" value="{{j}}">{{locations}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item text-wrap>\n          <ion-textarea readonly="true" [(ngModel)]="noticeMeter.ta4officeaddress">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            No.Tel:\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{noticeMeter.ta4officephone}} for further action.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            Thank you.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item-divider style="background-color: #f3e5f5">Staff Details</ion-item-divider>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Staff Signature: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n          <button ion-button color="buttonlightColor" (click)="clearSign(\'staff\')">Clear</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Examiner Name: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{noticeMeter.staffname}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Employee No. : </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{noticeMeter.staffno}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Department : </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="noticeMeter.department" placeholder="Enter Department"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item-divider style="background-color: #f3e5f5">Customer Details</ion-item-divider>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Customer Signature: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n          <button ion-button color="buttonlightColor" (click)="clearSign(\'customer\')">Clear</button>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Name: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="noticeMeter.customername" placeholder="Enter Name"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Telephone No. </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="noticeMeter.officePhoneNo" placeholder="Enter Telephone"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Date/Time: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm"\n            [(ngModel)]="noticeMeter.datetime" placeholder="Please Enter date and time"\n            (ionChange)=\'formatTimeDisplay()\'></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Cust does not cooperate -->\n  <ion-grid *ngIf=\'formSelected\'>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-title text-center>\n            Letter Notice Customer Does Not Cooperate\n          </ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Our Reference: TNB B/SJH/../</ion-label>\n        </ion-item>\n        <ion-row>\n          <ion-item>\n            <ion-label>{{noticeMeter.ta4accountno}}</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label>{{noticeMeter.customername}}</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Date: {{noticeMeter.currentTime}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            Dear valued TNB customer,\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-title text-center>\n            Inspection Notice Meter Installation by TNB\n          </ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>Informed that examination and testing has been made on installation metres that record\n            use of\n            electric to premise that addressed {{noticeMeter.customeraddress}} with no. account\n            {{noticeMeter.ta4accountno}} in {{noticeMeter.ta4datetime}} {{noticeMeter.currentTime}} hour. </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>\n            Testing result show metres does not record real electric usage reading and this was explained the customers.\n            We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the\n            customers.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            For your information, evidence bag serial number is\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="noticeMeter.serialNum" placeholder="Enter siri"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>\n            Sir/madame, you are invited to attend to Seksyen Jaminan Hasil (Zon Utara), Aras 2, Wisma TNB, No. 1 Jalan\n            Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang (No. tel: 04-5380108) and please state\n            evidence bag serial number for further information after 14 days from case date above.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>If there are any inquiries, sir/madame please contact </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="noticeMeter.ta4officezone" [selectOptions]="OfficeAddress"\n            (ionChange)="officeAdrssSelect()">\n            <ion-option value="kl">Kuala Lumpur</ion-option>\n            <ion-option value="selat">Selatan</ion-option>\n            <ion-option value="utr">Utara</ion-option>\n            <ion-option value="sngor">Selangor</ion-option>\n            <ion-option value="tmr">Timur</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="noticeMeter.officeName" [selectOptions]="selectOptions"\n            (ionChange)="checkPhoneNumber($event) ">\n            <ion-option *ngFor="let locations  of location ; let j=index" value="{{j}}">{{locations}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item text-wrap>\n          <ion-textarea readonly="true" [(ngModel)]="noticeMeter.ta4officeaddress">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            No.Tel:\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{noticeMeter.ta4officephone}} for further action.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>\n            Thank you.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item-divider style="background-color: #f3e5f5">Staff Details</ion-item-divider>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Staff Signature: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad3></signature-pad>\n          <button ion-button color="buttonlightColor" (click)="clearSign(\'staffNotCoop\')">Clear</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Examiner Name: </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{noticeMeter.staffname}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Employee No. : </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{noticeMeter.staffno}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Department : </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="noticeMeter.department" placeholder="Enter Department"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveData()">\n          Save\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <ion-footer>\n  <ion-toolbar color="darkColor">\n    <div>\n      <ion-row>\n        <button color="footer" ion-button round block (click)="saveData()">Save</button>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-compliance/seal-checklist/seal-checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_pdfForms_notice_letter_Pdf_notice_letterPDF__["a" /* NoticeLetter */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]])
    ], SealChecklistPage);
    return SealChecklistPage;
}());

//# sourceMappingURL=seal-checklist.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealChecklistPageModule", function() { return SealChecklistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_checklist__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_notice_letter_Pdf_notice_letterPDF__ = __webpack_require__(986);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SealChecklistPageModule = /** @class */ (function () {
    function SealChecklistPageModule() {
    }
    SealChecklistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_checklist__["a" /* SealChecklistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_checklist__["a" /* SealChecklistPage */]),
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__pojo_Complaints__["a" /* Complaints */],
                __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_notice_letter_Pdf_notice_letterPDF__["a" /* NoticeLetter */]
            ]
        })
    ], SealChecklistPageModule);
    return SealChecklistPageModule;
}());

//# sourceMappingURL=seal-checklist.module.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeLetter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeLetter = /** @class */ (function () {
    function NoticeLetter(dataService) {
        this.dataService = dataService;
    }
    NoticeLetter.prototype.generateNoticePdf = function (item, formSelect) {
        return new Promise(function (resolve, reject) {
            debugger;
            console.log("came inside to complaint pdf form generation --- >>>.");
            var dd = null;
            var fullItems;
            debugger;
            if (formSelect === 'UserCopperate') {
                dd = {
                    content: [
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Letter Notice (Customer Cooperate)', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: [350, 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto'],
                                body: [
                                    ['Our Reference: TNB B/SJH/../', 'Time ', item.ta4datetime],
                                ]
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                item.ta4accountno, '\n', item.customername
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Dear valued TNB customer',
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Inspection Notice Meter Installation by TNB', colSpan: 3, style: 'tableHeader', alignment: 'center' }, {}, {}],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Informed that examination and testing has been made on installation metres that record use of electric to premise that addressed ', item.customeraddress, ' in ', item.ta4datetime, item.currentTime, ' hour. ',
                                '\n', 'Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                ' Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'For your information, evidence bag serial number is ', item.serialNum
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Sir/madame, you are invited to attend to Seksyen Jaminan Hasil (Zon Utara), Aras 2, Wisma TNB, No. 1 Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang (No. tel: 04-5380108) and please state evidence bag serial number for further information after 14 days from case date above. '
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'If there are any inquiries, sir/madame please contact ', item.ta4officeaddress, item.ta4officephone, ' for further action.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Thank you.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: ['auto', 130, 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Staff Sign', style: 'tableHeader' },
                                        {
                                            image: 'signStaff',
                                            width: 70,
                                            height: 20,
                                        }, { text: 'Witness Sign', style: 'tableHeader' },
                                        {
                                            image: 'signCust',
                                            width: 70,
                                            height: 20,
                                        }],
                                    [
                                        { text: ['Examinar Name: '] },
                                        { text: [item.staffname] },
                                        { text: ['Name: '] },
                                        { text: [item.customername] }
                                    ],
                                    [
                                        { text: ['Staff No.: '] },
                                        { text: [item.staffno] },
                                        { text: ['Telephone no.'] },
                                        { text: [item.officePhoneNo] }
                                    ],
                                    [
                                        { text: ['Departmnet.: '] },
                                        { text: [item.department] },
                                        { text: ['Date/Time'] },
                                        { text: [item.date1] }
                                    ]
                                ]
                            },
                            layout: 'noBorders'
                        },
                    ],
                    images: {
                        signStaff: item.ta4signstaff,
                        signCust: item.ta4signcustomer
                    },
                    styles: {
                        title: {
                            fontSize: 14,
                            bold: true
                        },
                        textMargin: {
                            margin: [30, 50, 80, 0]
                        }
                    }
                };
            }
            else {
                dd = {
                    content: [
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Letter Notice (Customer not Cooperate)', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: [350, 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto'],
                                body: [
                                    ['Our Reference: TNB B/SJH/../', 'Time ', item.ta4datetime],
                                ]
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                item.ta4accountno, '\n', item.customername
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Dear valued TNB customer',
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Inspection Notice Meter Installation by TNB', colSpan: 3, style: 'tableHeader', alignment: 'center' }, {}, {}],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Informed that examination and testing has been made on installation metres that record use of electric to premise that addressed ', item.customeraddress, ' in ', item.ta4datetime, item.currentTime, ' hour. ',
                                '\n', 'Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                ' Testing result show metres does not record real electric usage reading and this was explained the customers. We want to inform that total reduced claim charge will be made by TNB parties and will be forwarded to the customers.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'For your information, evidence bag serial number is ', item.serialNum
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Sir/madame, you are invited to attend to Seksyen Jaminan Hasil (Zon Utara), Aras 2, Wisma TNB, No. 1 Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang (No. tel: 04-5380108) and please state evidence bag serial number for further information after 14 days from case date above. '
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'If there are any inquiries, sir/madame please contact ', item.ta4officeaddress, item.ta4officephone, ' for further action.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            text: [
                                'Thank you.'
                            ]
                        },
                        '\n',
                        {
                            margin: [30, 0, 0, 0],
                            table: {
                                widths: ['auto', 120],
                                heights: ['auto', 'auto'],
                                body: [
                                    [{ text: 'Staff Sign', style: 'tableHeader' },
                                        {
                                            image: 'signStaff',
                                            width: 70,
                                            height: 20,
                                        }],
                                    [
                                        { text: ['Examinar Name: '] },
                                        { text: [item.staffname] },
                                    ],
                                    [
                                        { text: ['Staff No.: '] },
                                        { text: [item.staffno] },
                                    ],
                                    [
                                        { text: ['Departmnet.: '] },
                                        { text: [item.department] },
                                    ]
                                ]
                            },
                            layout: 'noBorders'
                        },
                    ],
                    images: {
                        signStaff: item.ta4signstaff
                    },
                    styles: {
                        title: {
                            fontSize: 14,
                            bold: true
                        },
                        textMargin: {
                            margin: [30, 50, 80, 0]
                        }
                    }
                };
            }
            resolve(dd);
            reject(dd);
        });
    };
    NoticeLetter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], NoticeLetter);
    return NoticeLetter;
}());

//# sourceMappingURL=notice-letterPDF.js.map

/***/ })

});
//# sourceMappingURL=24.js.map