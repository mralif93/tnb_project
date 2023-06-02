webpackJsonp([44],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealNoticeletterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














__WEBPACK_IMPORTED_MODULE_11_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the SealNoticeletterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealNoticeletterPage = /** @class */ (function () {
    function SealNoticeletterPage(navCtrl, navParams, complaintVar, gv, loadingCtrl, gf, platform, file, dataService, fileOpener, jsonStoreCrud) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaintVar = complaintVar;
        this.gv = gv;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.platform = platform;
        this.file = file;
        this.dataService = dataService;
        this.fileOpener = fileOpener;
        this.jsonStoreCrud = jsonStoreCrud;
        this.pdfObj = null;
        this.pdfBase64 = [];
        this.userDetailSelect = false;
        this.descriptionToUser = false;
        this.formA = false;
        this.claim = false;
        this.staffId = false;
        this.custId = false;
        this.itemOri = navParams.get('paramObj');
        this.signaturePadOptions = {
            minWidth: 1,
            canvasWidth: 300,
            canvasHeight: 180
        };
        this.wonum = this.itemOri.json.wonum;
        if (gv.loc_woComplaints != null && gv.loc_woComplaints.size != 0) {
            if (gv.loc_woComplaints.has('checkListDescription_' + this.wonum)) {
                var checkList = void 0;
                checkList = gv.loc_woComplaints.get('checkListDescription_' + this.wonum);
                if (checkList.woNo === this.wonum) {
                    this.checklistMeter = checkList.data;
                }
                else {
                    this.checklistMeter = new __WEBPACK_IMPORTED_MODULE_7__pojo_Complaints__["a" /* Complaints */]();
                    this.gv.loc_woComplaints.set('checkListDescription_' + this.wonum, { woNo: this.wonum, data: this.checklistMeter });
                }
            }
            else {
                this.checklistMeter = new __WEBPACK_IMPORTED_MODULE_7__pojo_Complaints__["a" /* Complaints */]();
                this.gv.loc_woComplaints.set('checkListDescription_' + this.wonum, { woNo: this.wonum, data: this.checklistMeter });
            }
        }
        else {
            this.checklistMeter = new __WEBPACK_IMPORTED_MODULE_7__pojo_Complaints__["a" /* Complaints */]();
            this.gv.loc_woComplaints.set('checkListDescription_' + this.wonum, { woNo: this.wonum, data: this.checklistMeter });
        }
        var tnblogo = '../www/assets/imgs/tnbLogoResize.png';
        this.toDataURL(tnblogo, function (dataUrl) {
            debugger;
            console.log('Result Convert:', dataUrl);
            _this.tnblogoConvert = dataUrl;
        });
        var img1 = '../www/assets/imgs/markRight.png';
        var img2 = '../www/assets/imgs/close.png';
        this.toDataURL(img1, function (dataUrl) {
            _this.tickRight = dataUrl;
        });
        this.toDataURL(img2, function (dataUrl) {
            _this.tickClose = dataUrl;
        });
        this.checklistMeter.ta4accountno = this.itemOri.json.ta0accountnum;
        this.checklistMeter.customername = this.itemOri.json.ta0bpname;
        this.checklistMeter.customeraddress = this.itemOri.json.woserviceaddress[0].formattedaddress;
        this.checklistMeter.staffno = this.itemOri.json.assignment[0].laborcode;
        this.checklistMeter.staffname = this.gv.displayname;
        this.checklistMeter.ta4currentDate = __WEBPACK_IMPORTED_MODULE_10_moment__().format('DD/MM/YYYY');
        this.checklistMeter.currentTime = __WEBPACK_IMPORTED_MODULE_10_moment__().format('HH:mm:ss');
        if (!this.itemOri.json.hasOwnProperty('complaince')) {
            this.itemOri.json.complaince = [];
        }
        var mainMeter = [];
        var customer;
        // Convert String to JSON Array
        var ta4testdata_temp = [];
        for (var a = 0; a < this.itemOri.json.ta0feeder.length; a++) {
            this.itemOri.json.ta0feeder[a].multiassetlocci.filter(function (item) {
                if (item.ta0allocationtype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER) {
                    mainMeter.push(item);
                }
            });
        }
        ;
        // Checking whether is string or array
        if (typeof (mainMeter[0].ta4testdata) !== "undefined" && mainMeter[0].ta4testdata !== null && mainMeter[0].ta4testdata !== "") {
            if (Array.isArray((mainMeter[0].ta4testdata))) {
                ta4testdata_temp = mainMeter[0].ta4testdata;
            }
            else {
                ta4testdata_temp = JSON.parse(mainMeter[0].ta4testdata);
            }
            if (mainMeter.length > 0) {
                customer = ta4testdata_temp.find(function (item) {
                    return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
                });
            }
            if (typeof (customer) !== 'undefined' && customer !== null) {
                if (typeof (customer.ta0officer_sign) !== "undefined" && customer.ta0officer_sign !== null) {
                    // this.checklistMeter.ta0officer_sign = customer.ta0officer_sign;
                    this.checklistMeter.ta4signstaff = customer.ta0officer_sign;
                }
                else if (typeof (customer.ta4signstaff) !== "undefined" && customer.ta4signstaff !== null) {
                    this.checklistMeter.ta4signstaff = customer.ta4signstaff;
                }
                else if (typeof customer.ta0examiner_sign !== 'undefined' && customer.ta0examiner_sign !== null) {
                    this.checklistMeter.ta4signstaff = customer.ta0examiner_sign;
                }
                if (typeof (customer.ta0witnessicpassport) !== 'undefined' && customer.ta0witnessicpassport !== null) {
                    this.checklistMeter.nricWitness = customer.ta0witnessicpassport;
                }
                else {
                    this.checklistMeter.nricWitness = '';
                }
            }
            else {
                this.checklistMeter.nricWitness = '';
            }
        }
    }
    SealNoticeletterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealNoticeletterPage');
    };
    SealNoticeletterPage.prototype.ngAfterViewInit = function () {
        if (typeof (this.checklistMeter.ta4signcustomer) !== 'undefined' && this.checklistMeter.ta4signcustomer !== null) {
            this.signaturePad.fromDataURL(this.checklistMeter.ta4signcustomer, { ratio: 1 });
        }
        if (typeof (this.checklistMeter.ta4signstaff) !== 'undefined' && this.checklistMeter.ta4signstaff !== null) {
            this.signaturePad2.fromDataURL(this.checklistMeter.ta4signstaff, { ratio: 1 });
        }
    };
    SealNoticeletterPage.prototype.toDataURL = function (url, callback) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = 50;
            canvas.width = 100;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL();
            callback(dataURL);
        };
        img.src = url;
    };
    SealNoticeletterPage.prototype.claimCalculation = function (eventSelect) {
        if (eventSelect === 'Y') {
            this.checklistMeter.claiminform = '/';
        }
        else {
            this.checklistMeter.claiminform = 'X';
        }
    };
    SealNoticeletterPage.prototype.noticeDescription = function (eventSelect) {
        if (eventSelect === 'Y') {
            this.checklistMeter.noticeA = '/';
        }
        else {
            this.checklistMeter.noticeA = 'X';
        }
    };
    SealNoticeletterPage.prototype.descriptionUser = function (eventSelect) {
        if (eventSelect === 'Y') {
            this.checklistMeter.kupmUser = '/';
        }
        else {
            this.checklistMeter.kupmUser = 'X';
        }
    };
    SealNoticeletterPage.prototype.userDetails = function (eventSelect) {
        debugger;
        if (eventSelect === 'owner') {
            this.checklistMeter.owner = '/';
            this.checklistMeter.tenant = 'X';
            this.checklistMeter.staff = 'X';
            this.checklistMeter.heir = 'X';
        }
        else if (eventSelect === 'tenant') {
            this.checklistMeter.tenant = '/';
            this.checklistMeter.owner = 'X';
            this.checklistMeter.staff = 'X';
            this.checklistMeter.heir = 'X';
        }
        else if (eventSelect === 'staff') {
            this.checklistMeter.staff = '/';
            this.checklistMeter.owner = 'X';
            this.checklistMeter.tenant = 'X';
            this.checklistMeter.heir = 'X';
        }
        else if (eventSelect === 'heir') {
            this.checklistMeter.heir = '/';
            this.checklistMeter.owner = 'X';
            this.checklistMeter.tenant = 'X';
            this.checklistMeter.staff = 'X';
        }
    };
    SealNoticeletterPage.prototype.customerSign = function (eventSelect) {
        debugger;
        if (eventSelect === 'S') {
            this.checklistMeter.notWillingSign = '/';
            this.checklistMeter.noClient = 'X';
        }
        else if (eventSelect === 'NA') {
            this.checklistMeter.notWillingSign = 'X';
            this.checklistMeter.noClient = 'X';
        }
        else {
            this.checklistMeter.notWillingSign = 'X';
            this.checklistMeter.noClient = '/';
        }
    };
    /**
     * Create By: Ameer
     * Date : 3/3/2019
     * Description: Save and also convert the form into PDF
     */
    SealNoticeletterPage.prototype.saveData = function () {
        var _this = this;
        if (this.gv.loc_woComplaints.get('checkListDescription_' + this.wonum) === null) {
            this.gf.displayToast('Please fill out the form first');
        }
        else {
            var validation = this.formValidation();
            if (validation === true) {
                if (this.checklistMeter.tnbLogo === undefined || this.checklistMeter.tnbLogo === '' || this.checklistMeter.tnbLogo === null) {
                    this.checklistMeter.tnbLogo = this.tnblogoConvert;
                }
                ;
                var loading_1 = this.loadingCtrl.create({ content: "Please wait.." });
                this.checklistMeter.ta4signcustomer = this.signaturePad.toDataURL();
                this.checklistMeter.ta4signstaff = this.signaturePad2.toDataURL();
                // if (this.pdfSelectForm[i].key === 'formAStaff' && this.pdfLanguage == 'eng') {
                for (var a = 0; a < this.itemOri.json.complaince.length; a++) {
                    debugger;
                    if (this.itemOri.json.complaince[a].name !== 'Description_Checklist') {
                        this.itemOri.json.complaince.push({ name: 'Description_Checklist', data: this.checklistMeter });
                    }
                }
                if (this.itemOri.json.complaince.length === 0) {
                    this.itemOri.json.complaince.push({ name: 'Description_Checklist', data: this.checklistMeter });
                }
                loading_1.present().then(function () {
                    var dd = null;
                    dd = {
                        /* New Layout in PDF */
                        /* Edited By: Alif (23.07.2019) */
                        content: [
                            {
                                table: {
                                    widths: [250, '*', '*'],
                                    body: [
                                        [
                                            {
                                                rowSpan: 2,
                                                image: 'logo',
                                                width: 100
                                            },
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: 'Account No.',
                                                bold: true,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.ta4accountno,
                                                fontSize: 8
                                            }
                                        ],
                                        [
                                            '',
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: 'Date Inspection',
                                                bold: true,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.ta4currentDate,
                                                fontSize: 8
                                            }
                                        ],
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: ['*'],
                                    body: [
                                        [
                                            {
                                                text: 'DESCRIPTION CHECKLIST TAMPERING METER CASE (KUPM) TNB',
                                                decoration: 'underline',
                                                alignment: 'center',
                                                bold: true,
                                                fontSize: 13
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
                                    body: [
                                        [
                                            {
                                                colSpan: 8,
                                                margin: [5, 5, 5, 5],
                                                text: 'DETAILS OF CLIENT',
                                                bold: true,
                                                fontSize: 10
                                            },
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'OWNER',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.owner,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'TENANT',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.tenant,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'WORKER',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.staff,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'HEIR',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.heir,
                                                alignment: 'center',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: true,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: [15, '*', 15, 15],
                                    body: [
                                        [
                                            {
                                                colSpan: 2,
                                                text: '',
                                                fontSize: 8
                                            },
                                            '',
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: 'YES / NO',
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: '1)',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'KUPM description to user.',
                                                fontSize: 8
                                            },
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: _this.checklistMeter.kupmUser,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: '2)',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'Notice A description to user (Disconnection).',
                                                fontSize: 8
                                            },
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: _this.checklistMeter.noticeA,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: '3)',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ' Claim calculation will be made as a result of a search case is found.',
                                                fontSize: 8
                                            },
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: _this.checklistMeter.claiminform,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: ['*'],
                                    body: [
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'REMARKS',
                                                bold: true,
                                                fontSize: 10
                                            }
                                        ],
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.remark1,
                                                alignment: 'justify',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n\n',
                            {
                                table: {
                                    widths: [85, '*', 85, '*'],
                                    body: [
                                        [
                                            {
                                                colSpan: 2,
                                                margin: [5, 5, 5, 5],
                                                text: '',
                                                alignment: 'center',
                                                fontSize: 10
                                            },
                                            '',
                                            {
                                                colSpan: 2,
                                                margin: [5, 5, 5, 5],
                                                text: '',
                                                alignment: 'center',
                                                fontSize: 10
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                colSpan: 2,
                                                image: _this.checklistMeter.ta4signcustomer,
                                                width: 100,
                                                alignment: 'center'
                                            },
                                            '',
                                            {
                                                colSpan: 2,
                                                image: _this.checklistMeter.ta4signstaff,
                                                width: 100,
                                                alignment: 'center'
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'NAME',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.customername,
                                                // decoration: 'underline',
                                                alignment: 'justify',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'NAME',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.staffname,
                                                // decoration: 'underline',
                                                alignment: 'justify',
                                                fontSize: 8
                                            }
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'IDENTIFICATION NO.',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.nricWitness,
                                                // decoration: 'underline',
                                                alignment: 'justify',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'STAFF NO.',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.nriceStaff,
                                                // decoration: 'underline',
                                                alignment: 'justify',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n',
                            {
                                table: {
                                    widths: [150, 20],
                                    body: [
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'Client does not corperate.',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.notWillingSign,
                                                alignment: 'center',
                                                fontSize: 8
                                            }
                                        ],
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'Client not available.',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.noClient,
                                                alignment: 'center',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false
                                }
                            }
                        ],
                        images: {
                            logo: 'data:image/png;base64,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'
                        }
                    };
                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_pdfmake___default.a.createPdf(dd);
                    _this.downloadPdf(_this.pdfObj, "Description_Checklist");
                    _this.pdfObj.getBase64(function (data) {
                        if (_this.pdfBase64.length === 0) {
                            _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Description_Checklist' });
                        }
                        else {
                            _this.pdfBase64.splice(0, 1);
                            _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Description_Checklist' });
                        }
                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                            if (_this.itemOri.json.complaince[j].name === 'Description_Checklist') {
                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                            }
                        }
                        // Update inside local storage
                        // Created: Alif (22.01.2020)
                        _this.jsonStoreCrud.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        var itemVal = _this.itemOri;
                        var objCopy = JSON.parse(JSON.stringify(itemVal));
                        _this.dataService.saveSealRecordImage(objCopy, _this.itemOri.json.wonum, 'addPdf', '', _this.itemOri.json.worktype, "CF");
                    });
                    _this.pdfObj.getBuffer(function (buffer) {
                        var blob = new Blob([buffer], { type: "application/pdf" });
                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                        var link = document.createElement("a");
                        link.href = window.URL.createObjectURL(blob);
                        link.download = "Description_Checklist";
                        link.click();
                    });
                    loading_1.dismiss();
                }).catch(function () {
                    loading_1.dismiss();
                    _this.gf.displayToast('Pdf could not generate');
                }).then(function () {
                    loading_1.dismiss();
                    _this.navCtrl.pop();
                    // this.navCtrl.push("ComplaintListPage", {
                    //   paramObj: this.itemOri,
                    // });
                });
            }
            else {
                this.gf.displayToast('Insert all the mandatory field');
            }
        }
    };
    SealNoticeletterPage.prototype.downloadPdf = function (pdfObj, filename) {
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
                    console.log('file Directory', _this.file.dataDirectory);
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
    SealNoticeletterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SealNoticeletterPage.prototype.clearSign = function (type) {
        switch (type) {
            case 'staff':
                this.signaturePad2.clear();
                break;
            case 'customer':
                this.signaturePad.clear();
                break;
        }
    };
    SealNoticeletterPage.prototype.formValidation = function () {
        debugger;
        var status = true;
        if (typeof (this.checklistMeter.remark1) == 'undefined' || this.checklistMeter.remark1 === null || this.checklistMeter.remark1 === "") {
            this.checklistMeter.remark1 = '-';
        }
        if (this.checklistMeter.ta4statename === null || typeof (this.checklistMeter.ta4statename) == 'undefined') {
            this.userDetailSelect = true;
            status = false;
        }
        if (this.checklistMeter.customerDesription === null || typeof (this.checklistMeter.customerDesription) == 'undefined') {
            this.descriptionToUser = true;
            status = false;
        }
        if (this.checklistMeter.formASelection === null || typeof (this.checklistMeter.formASelection) == 'undefined') {
            this.formA = true;
            status = false;
        }
        if (this.checklistMeter.claimInformationnTampering === null || typeof (this.checklistMeter.claimInformationnTampering) == 'undefined') {
            this.claim = true;
            status = false;
        }
        if (this.checklistMeter.nriceStaff === null || typeof (this.checklistMeter.nriceStaff) == 'undefined') {
            this.checklistMeter.nriceStaff = '-';
            /*  this.staffId = true;
             status = false; */
        }
        if (this.checklistMeter.nricWitness === null || typeof (this.checklistMeter.nricWitness) == 'undefined') {
            this.custId = true;
            status = false;
        }
        if (this.signaturePad.isEmpty() && (typeof (this.checklistMeter.subsectionBase5) == 'undefined' && (this.checklistMeter.subsectionBase5) == null)) {
            // this.checklistMeter.subsectionBase5 = "X";
            this.checklistMeter.notWillingSign = 'X';
            this.checklistMeter.noClient = 'X';
        }
        return status;
    };
    /**
     * Created: Ameer (16/7/2019)
     * Description: Preview Pdf
     */
    SealNoticeletterPage.prototype.previewPdf = function () {
        var _this = this;
        if (this.gv.loc_woComplaints.get('checkListDescription_' + this.wonum) === null) {
            this.gf.displayToast('Please fill out the form first');
        }
        else {
            var validation = this.formValidation();
            if (validation === true) {
                if (this.checklistMeter.tnbLogo === undefined || this.checklistMeter.tnbLogo === '' || this.checklistMeter.tnbLogo === null) {
                    this.checklistMeter.tnbLogo = this.tnblogoConvert;
                }
                ;
                var loading_2 = this.loadingCtrl.create({ content: "Please wait.." });
                this.checklistMeter.ta4signcustomer = this.signaturePad.toDataURL();
                this.checklistMeter.ta4signstaff = this.signaturePad2.toDataURL();
                // if (this.pdfSelectForm[i].key === 'formAStaff' && this.pdfLanguage == 'eng') {
                console.log("DATA: " + JSON.stringify(this.checklistMeter));
                loading_2.present().then(function () {
                    var dd = null;
                    dd = {
                        /* New Layout in PDF */
                        /* Edited By: Alif (23.07.2019) */
                        content: [
                            {
                                table: {
                                    widths: [250, '*', '*'],
                                    body: [
                                        [
                                            {
                                                rowSpan: 2,
                                                image: 'logo',
                                                width: 100
                                            },
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: 'Account No.',
                                                bold: true,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.ta4accountno,
                                                fontSize: 8
                                            }
                                        ],
                                        [
                                            '',
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: 'Date Inspection',
                                                bold: true,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 10, 10, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.ta4currentDate,
                                                fontSize: 8
                                            }
                                        ],
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: ['*'],
                                    body: [
                                        [
                                            {
                                                text: 'DESCRIPTION CHECKLIST TAMPERING METER CASE (KUPM) TNB',
                                                decoration: 'underline',
                                                alignment: 'center',
                                                bold: true,
                                                fontSize: 13
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
                                    body: [
                                        [
                                            {
                                                colSpan: 8,
                                                margin: [5, 5, 5, 5],
                                                text: 'DETAILS OF CLIENT',
                                                bold: true,
                                                fontSize: 10
                                            },
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'OWNER',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.owner,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'TENANT',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.tenant,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'WORKER',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.staff,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'HEIR',
                                                bold: false,
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.heir,
                                                alignment: 'center',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: true,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: [15, '*', 15, 15],
                                    body: [
                                        [
                                            {
                                                colSpan: 2,
                                                text: '',
                                                fontSize: 8
                                            },
                                            '',
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: 'YES / NO',
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: '1)',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'KUPM description to user.',
                                                fontSize: 8
                                            },
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: _this.checklistMeter.kupmUser,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: '2)',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'Notice A description to user (Disconnection).',
                                                fontSize: 8
                                            },
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: _this.checklistMeter.noticeA,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: '3)',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ' Claim calculation will be made as a result of a search case is found.',
                                                fontSize: 8
                                            },
                                            {
                                                colSpan: 2,
                                                border: [true, true, true, true],
                                                margin: [3, 3, 3, 3],
                                                text: _this.checklistMeter.claiminform,
                                                alignment: 'center',
                                                fontSize: 8
                                            },
                                            ''
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n',
                            {
                                table: {
                                    widths: ['*'],
                                    body: [
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'REMARKS',
                                                bold: true,
                                                fontSize: 10
                                            }
                                        ],
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: _this.checklistMeter.remark1,
                                                alignment: 'justify',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n\n\n',
                            {
                                table: {
                                    widths: [85, '*', 85, '*'],
                                    body: [
                                        [
                                            {
                                                colSpan: 2,
                                                margin: [5, 5, 5, 5],
                                                text: '',
                                                alignment: 'center',
                                                fontSize: 10
                                            },
                                            '',
                                            {
                                                colSpan: 2,
                                                margin: [5, 5, 5, 5],
                                                text: '',
                                                alignment: 'center',
                                                fontSize: 10
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                colSpan: 2,
                                                image: _this.checklistMeter.ta4signcustomer,
                                                width: 100,
                                                alignment: 'center'
                                            },
                                            '',
                                            {
                                                colSpan: 2,
                                                image: _this.checklistMeter.ta4signstaff,
                                                width: 100,
                                                alignment: 'center'
                                            },
                                            ''
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'NAME',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.customername,
                                                // decorationStyle: 'dotted',
                                                // decoration: 'underline',
                                                alignment: 'justify',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'NAME',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.staffname,
                                                // decoration: 'underline',
                                                // decorationStyle: 'dotted',
                                                alignment: 'justify',
                                                fontSize: 8
                                            }
                                        ],
                                        [
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'IDENTIFICATION NO.',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.nricWitness,
                                                // decoration: 'underline',
                                                // decorationStyle: 'dotted',
                                                alignment: 'justify',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: 'STAFF NO.',
                                                bold: true,
                                                alignment: 'left',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [3, 3, 3, 3],
                                                text: ': ' + _this.checklistMeter.nriceStaff,
                                                // decoration: 'underline',
                                                // decorationStyle: 'dotted',
                                                alignment: 'justify',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false,
                                }
                            },
                            '\n\n',
                            {
                                table: {
                                    widths: [150, 20],
                                    body: [
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'Client does not corperate.',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.notWillingSign,
                                                alignment: 'center',
                                                fontSize: 8
                                            }
                                        ],
                                        [
                                            {
                                                margin: [5, 5, 5, 5],
                                                text: 'Client not available.',
                                                fontSize: 8
                                            },
                                            {
                                                margin: [5, 5, 5, 5],
                                                border: [true, true, true, true],
                                                text: _this.checklistMeter.noClient,
                                                alignment: 'center',
                                                fontSize: 8
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    defaultBorder: false
                                }
                            }
                        ],
                        images: {
                            logo: 'data:image/png;base64,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'
                        }
                    };
                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_pdfmake___default.a.createPdf(dd);
                    _this.downloadPdf(_this.pdfObj, "Description_Checklist");
                    _this.pdfObj.getBuffer(function (buffer) {
                        var blob = new Blob([buffer], { type: "application/pdf" });
                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                        var link = document.createElement("a");
                        link.href = window.URL.createObjectURL(blob);
                        link.download = "Description_Checklist";
                        link.click();
                    });
                    loading_2.dismiss();
                }).catch(function () {
                    loading_2.dismiss();
                    _this.gf.displayToast('Pdf could not generate');
                    loading_2.dismiss();
                });
            }
            else {
                this.gf.displayToast('Insert all the mandatory field');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealNoticeletterPage.prototype, "signaturePad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealNoticeletterPage.prototype, "signaturePad2", void 0);
    SealNoticeletterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-noticeletter',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-compliance/seal-noticeletter/seal-noticeletter.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Checklist Tampering Case for Meter Installation (KUPM) TNB</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon color="light" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="sealHeader">\n    <ion-row>\n      <ion-col col-3 col-md-3 col-sm-3 style="text-align: left;">\n        <button ion-button clear class="backbutton" (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow backbutton"> Back </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-md-5 col-sm-5 align-self-center>\n        <div class="pageTitle">Checklist Tampering Case for Meter Installation (KUPM) TNB\n        </div>\n      </ion-col>\n      <ion-col col-3 col-md-3 col-sm-3 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity:unset">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>DETAILS OF CLIENT</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row>\n    <ion-col>\n      <ion-list radio-group [(ngModel)]="checklistMeter.ta4statename" (ionChange)="userDetails($event)">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Owner</ion-label>\n              <ion-radio value="owner"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>Tenant</ion-label>\n              <ion-radio value="tenant"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>Staff</ion-label>\n              <ion-radio value="staff"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>Heir</ion-label>\n              <ion-radio value="heir"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="userDetailSelect">\n    <ion-col>\n      <ion-item no-lines>\n        <ion-label class="validationErrorText">*Please select user details selection</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <br />\n\n  <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>CHECKLIST</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n\n  <ion-row style="align-items: baseline;">\n    <ion-col col-sm col-md-8 col-md-8>\n      <ion-item>\n        <ion-label>1. KUPM Description to user.</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm col-md-4 col-md-4>\n      <ion-list radio-group [(ngModel)]="checklistMeter.customerDesription" (ionChange)="descriptionUser($event)">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Yes</ion-label>\n              <ion-radio value="Y"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="N"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="descriptionToUser">\n    <ion-col>\n      <ion-item no-lines>\n        <ion-label class="validationErrorText">*Please Select first</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="align-items: baseline;">\n    <ion-col col-sm col-md-8 col-md-8>\n      <ion-item>\n        <ion-label>2. Notice A description to user Disconect</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm col-md-4 col-md-4>\n      <ion-list radio-group [(ngModel)]="checklistMeter.formASelection" (ionChange)="noticeDescription($event)">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Yes</ion-label>\n              <ion-radio value="Y"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="N"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="formA">\n    <ion-col>\n      <ion-item>\n        <ion-label class="validationErrorText">*Please Select first</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="align-items: baseline;">\n    <ion-col col-sm col-md-8 col-md-8>\n      <ion-item text-wrap>\n        <ion-label>3. Claim calculation will be made as a result of a search case is found</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm col-md-4 col-md-4>\n      <ion-list radio-group [(ngModel)]="checklistMeter.claimInformationnTampering"\n        (ionChange)="claimCalculation($event)">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Yes</ion-label>\n              <ion-radio value="Y"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="N"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="claim">\n    <ion-col>\n      <ion-item>\n        <ion-label class="validationErrorText">*Please Select first</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <br />\n\n  <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>REMARKS</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-textarea [(ngModel)]="checklistMeter.remark1" rows="6" placeholder="Please Enter"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <br />\n\n  <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>SIGNATURE OF CLIENT</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col style="left: 25%">\n      <ion-item no-lines>\n        <signature-pad [options]="signaturePadOptions" #SignaturePad1></signature-pad>\n        <button style="left: 10%;" ion-button color="buttonlightColor" (click)="clearSign(\'customer\')">Clear</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Name of Client</ion-label>\n        <ion-input [(ngModel)]="checklistMeter.customername" type="text" placeholder="Enter Name"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Identification No</ion-label>\n        <ion-input [(ngModel)]="checklistMeter.nricWitness" type="text" placeholder="Enter Identification"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="custId">\n    <ion-item>\n      <ion-label class="validationErrorText">*Please enter identification no.</ion-label>\n    </ion-item>\n  </ion-row>\n\n  <br />\n\n  <ion-row>\n    <ion-col>\n      <ion-list radio-group [(ngModel)]="checklistMeter.subsectionBase5" (ionChange)="customerSign($event)">\n        <ion-row style="align-items: baseline;">\n          <ion-col col-sm-12 col-md-2 col-2>\n            <ion-item text-wrap>\n              <ion-label>Clear</ion-label>\n              <ion-radio value="NA"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-sm-12 col-md-5 col-5>\n            <ion-item text-wrap>\n              <ion-label>No Signature for client</ion-label>\n              <ion-radio value="S"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-sm-12 col-md-5 col-5>\n            <ion-item text-wrap>\n              <ion-label>Client not available</ion-label>\n              <ion-radio value="U"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <br />\n\n  <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n    <ion-row align-items-center>\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-icon name="flask"></ion-icon>&nbsp; <strong>SIGNATURE OF STAFF</strong>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col style="left: 25%">\n      <ion-item no-lines>\n        <signature-pad [options]="signaturePadOptions" #SignaturePad2></signature-pad>\n        <button style="left: 10%;" ion-button color="buttonlightColor" (click)="clearSign(\'staff\')">Clear</button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Name:</ion-label>\n        <ion-input [(ngModel)]="checklistMeter.staffname" type="text" placeholder="Enter Name"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Identification No:</ion-label>\n        <ion-input type="text" [(ngModel)]="checklistMeter.nriceStaff" placeholder="Enter Identification"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="staffId">\n    <ion-item>\n      <ion-label class="validationErrorText">*Please enter identification no.</ion-label>\n    </ion-item>\n  </ion-row>\n  <br />\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveData()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="previewPdf()">\n          Preview\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <ion-footer>\n  <ion-toolbar color="darkColor">\n    <ion-row>\n      <ion-col>\n        <button color="footer" ion-button round block (click)="saveData()">Save</button>\n      </ion-col>\n      <ion-col>\n        <button color="footer" ion-button round block (click)="previewPdf()">Preview</button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-compliance/seal-noticeletter/seal-noticeletter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7__pojo_Complaints__["a" /* Complaints */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_13__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */]])
    ], SealNoticeletterPage);
    return SealNoticeletterPage;
}());

//# sourceMappingURL=seal-noticeletter.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealNoticeletterPageModule", function() { return SealNoticeletterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__seal_noticeletter__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_compliance_checklist_pdf_Seal_checklistPDF__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SealNoticeletterPageModule = /** @class */ (function () {
    function SealNoticeletterPageModule() {
    }
    SealNoticeletterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__seal_noticeletter__["a" /* SealNoticeletterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__seal_noticeletter__["a" /* SealNoticeletterPage */]),
                __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad__["SignaturePadModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__pojo_Complaints__["a" /* Complaints */],
                __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_compliance_checklist_pdf_Seal_checklistPDF__["a" /* SealCheckList */]
            ]
        })
    ], SealNoticeletterPageModule);
    return SealNoticeletterPageModule;
}());

//# sourceMappingURL=seal-noticeletter.module.js.map

/***/ })

});
//# sourceMappingURL=44.js.map