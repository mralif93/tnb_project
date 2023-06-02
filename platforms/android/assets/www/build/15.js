webpackJsonp([15],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealTechnicalReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad_signature_pad__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pojo_DescribedBy__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pojo_TechnicalReviewForm__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_pdfForms_seal_technical_review_technical_review_PDF__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_technical_review_technical_review__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
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
var SealTechnicalReviewPage = /** @class */ (function () {
    function SealTechnicalReviewPage(navCtrl, params, gf, gv, file, fileOpener, platform, loadingCtrl, dataService, jsonStore, technicalReviewPDF, generatePDF) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.gf = gf;
        this.gv = gv;
        this.file = file;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.jsonStore = jsonStore;
        this.technicalReviewPDF = technicalReviewPDF;
        this.generatePDF = generatePDF;
        this.items = "";
        this.TAMPNewarry = [];
        this.AC3PNewarry = [];
        this.A1TPNewarry = [];
        this.PHETTNewarry = [];
        this.ATCANewArray = [];
        this.newArray = [];
        this.pdfObj = null;
        this.pdfBase64 = [];
        this.compliance = [];
        this.listTeamMembers = [];
        this.data = [];
        this.combineEng = "";
        this.combineReng = "";
        this.combineNewEng = "";
        this.combineNewEng2 = "";
        this.combineAverageError = "";
        this.previewIndicator = false;
        debugger;
        this.techReview = new __WEBPACK_IMPORTED_MODULE_10__pojo_Complaints__["a" /* Complaints */]();
        this.items = this.params.data;
        this.selectOptions = {
            title: 'Position'
        };
        this.signaturePadOptions = {
            minWidth: 1,
            canvasWidth: 529,
            canvasHeight: 180,
            backgroundColor: '#f6fbff',
            penColor: '#666a73'
        };
        // Setting object map to class
        this.ta4review = new __WEBPACK_IMPORTED_MODULE_15__pojo_TechnicalReviewForm__["a" /* TechicalReviewForm */]();
        this.describedBy = new __WEBPACK_IMPORTED_MODULE_11__pojo_DescribedBy__["a" /* DescribedBy */]();
        // Setting label value
        this.ta4review.acctNo = "No Akaun Pengguna";
        this.ta4review.customerName = "Nama Pelanggan";
        this.ta4review.confirmationAnomalyTitle = "Pengesahan Kejanggalan Serta Alasannya";
        this.ta4review.confirmationAnomalySubTitle = "Kes ini adalah Kes Usikan Pepasangan Meter (KUPM) kerana:-";
        this.ta4review.correctiveActionTitle = "Tindakan Pembetulan / Susulan";
        this.ta4review.otherNotesTitle = "Lain-lain Catatan";
        this.ta4review.otherNotesText1 = "No Report Polis : ";
        this.ta4review.otherNotesText2 = " bertarikh ";
        this.ta4review.otherNotesText3 = ".";
        this.ta4review.teamMembersTitle = "Ahli Pasukan Pemeriksaan";
        this.ta4review.teamMembersHeaderNo = "BIL";
        this.ta4review.teamMembersHeaderName = "NAMA";
        this.ta4review.teamMembersHeaderStaffNo = "NO. PEKERJA";
        this.ta4review.teamMembersHeaderPosition = "JAWATAN";
        this.ta4review.executiveSignature = "Tandatangan";
        this.ta4review.executiveDetails = "Cop & Jawatan";
        this.ta4review.executiveDate = "Tarikh";
        this.dateCur = new Date();
        var curr_date = this.dateCur.getDate();
        var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
        var curr_year = this.dateCur.getFullYear();
        this.techReview.ta4currentDate = curr_date + '/' + curr_month + '/' + curr_year;
        this.techReview.ta4accountno = this.items.json.ta0accountnum;
        this.techReview.ta4custname = this.items.json.ta0bpname;
        // Declare variables
        var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        var multiassetlocci;
        var eMainMeter;
        var nMainMeter;
        var nMeter = 0;
        // Reset value
        this.listNewMeters = "New Meter Serial No. : ";
        // Checking Feeder
        if (typeof (this.items.json.ta0feeder) !== "undefined" || this.items.json.hasOwnProperty("ta0feeder")) {
            for (var k = 0; k < feeder.length; k++) {
                // Collect data multiassetlocci
                multiassetlocci = JSON.parse(JSON.stringify(feeder[k].multiassetlocci));
                // Checking Existing Main Device
                eMainMeter = multiassetlocci.filter(function (item) {
                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
                });
                if (eMainMeter.length > 0) {
                    // Checking if meter existing got replacement
                    if (eMainMeter[0].ta0replaceind == true) {
                        // Checking New Main Device Replacement
                        nMainMeter = multiassetlocci.filter(function (item) {
                            return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                        });
                        if (nMainMeter.length > 0) {
                            // Save data info.
                            this.data.push({ feeder: k, old: eMainMeter[0], new: nMainMeter[0] });
                            // Saving new meter which is replace
                            if (nMeter > 0) {
                                this.listNewMeters += ", " + nMainMeter[0].ta0serialnum;
                            }
                            else {
                                this.listNewMeters += nMainMeter[0].ta0serialnum;
                            }
                            // Increasing total counter.
                            nMeter++;
                        }
                    }
                    else {
                        // Save data info.
                        this.data.push({ feeder: k, old: eMainMeter[0] });
                    }
                }
            }
            console.log("DATA: " + JSON.stringify(this.data));
        }
        if (typeof (this.items.json.ta0feeder) !== "undefined") {
            if (this.items.json.hasOwnProperty("ta0feeder")) {
                // Variables
                var fLength = this.items.json.ta0feeder.length;
                var ta4testdata_temp = [];
                var loc_ta4testdata = [];
                var meterSeriNumber;
                for (var i = 0; i < fLength; i++) {
                    if (this.items.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                        var mLength = this.items.json.ta0feeder[i].multiassetlocci.length;
                        for (var m = 0; m < mLength; m++) {
                            if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) {
                                meterSeriNumber = this.items.json.ta0feeder[i].multiassetlocci[m].ta0serialnum;
                            }
                            else if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN) {
                                meterSeriNumber = this.items.json.ta0feeder[i].multiassetlocci[m].ta0serialnum;
                            }
                            if (((this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN && this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_14__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) ||
                                (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN && this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_14__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST)) &&
                                this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta4testdata")) {
                                // Checking whether is string or array
                                if (Array.isArray((this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata))) {
                                    ta4testdata_temp = this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata);
                                }
                                if (typeof (ta4testdata_temp) !== "undefined") {
                                    if (ta4testdata_temp.length > 1) {
                                        loc_ta4testdata.push({ DataArry: ta4testdata_temp });
                                    }
                                }
                            }
                        }
                    }
                }
                for (var a = 0; a < loc_ta4testdata.length; a++) {
                    var TampTestIndex = loc_ta4testdata[a].DataArry.findIndex(function (item) {
                        return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_TAMP;
                    });
                    var AC3PTestIndex = loc_ta4testdata[a].DataArry.findIndex(function (item) {
                        return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AC3P;
                    });
                    var A1TPTestIndex = loc_ta4testdata[a].DataArry.findIndex(function (item) {
                        return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_AT1P;
                    });
                    var PHETTestIndex = loc_ta4testdata[a].DataArry.findIndex(function (item) {
                        return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHET;
                    });
                    var ATCATestIndex = loc_ta4testdata[a].DataArry.findIndex(function (item) {
                        return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ATCA;
                    });
                    if (TampTestIndex !== -1) {
                        this.TAMPNewarry = loc_ta4testdata[a].DataArry[TampTestIndex];
                    }
                    if (AC3PTestIndex !== -1) {
                        this.AC3PNewarry = loc_ta4testdata[a].DataArry[AC3PTestIndex];
                    }
                    if (A1TPTestIndex !== -1) {
                        this.A1TPNewarry = loc_ta4testdata[a].DataArry[A1TPTestIndex];
                    }
                    if (PHETTestIndex !== -1) {
                        this.PHETTNewarry = loc_ta4testdata[a].DataArry[PHETTestIndex];
                    }
                    if (ATCATestIndex !== -1) {
                        this.ATCANewArray = loc_ta4testdata[a].DataArry[ATCATestIndex];
                    }
                    debugger;
                    if (A1TPTestIndex !== -1) {
                        var result = Object.assign({}, this.TAMPNewarry, this.PHETTNewarry, this.ATCANewArray, this.A1TPNewarry, { serialNum: meterSeriNumber });
                    }
                    else {
                        var result = Object.assign({}, this.TAMPNewarry, this.AC3PNewarry, this.PHETTNewarry, this.ATCANewArray, this.A1TPNewarry, { serialNum: meterSeriNumber });
                    }
                    this.newArray.push(result);
                    for (var i = 0; i < this.newArray.length; i++) {
                        if (typeof (this.newArray[i].ta0ts_fuse) == 'undefined' &&
                            typeof (this.newArray[i].ta0ts_ttb) == 'undefined' &&
                            typeof (this.newArray[i].ta0ts_wiring) == 'undefined') {
                            this.newArray[i].ta0ts_fuse = 'Not available';
                            this.newArray[i].ta0ts_ttb = 'Not available';
                            this.newArray[i].ta0ts_wiring = 'Not available';
                            this.newArray[i].ta0ts_anamoly = 'Not available';
                        }
                    }
                    console.log(this.newArray);
                    if (!this.items.json.hasOwnProperty('complaince')) {
                        this.items.json.complaince = [];
                    }
                }
                console.log('Tamp ', this.TAMPNewarry);
                console.log('AC3P', this.AC3PNewarry);
                console.log('PHET', this.PHETTNewarry);
                console.log('ATCA', this.ATCANewArray);
            }
        }
        // Setting title and header for Table List of Team Members
        var rowData = new Array(3);
        for (k = 0; k < 3; k++) {
            rowData[k] = [];
            // Create Title
            if (k === 0) {
                for (var m = 0; m < 4; m++) {
                    // Reset value array
                    var propertiesNo = {};
                    var propertiesName = {};
                    var propertiesStaffNo = {};
                    var propertiesPosition = {};
                    // Insert Table Title
                    propertiesNo = {
                        colSpan: 4,
                        text: this.ta4review.teamMembersTitle,
                        bold: true,
                        fontSize: 11,
                    };
                    propertiesName = {};
                    propertiesStaffNo = {};
                    propertiesPosition = {};
                    if (m === 0) {
                        rowData[k][m] = propertiesNo;
                    }
                    if (m === 1) {
                        rowData[k][m] = propertiesName;
                    }
                    if (m === 2) {
                        rowData[k][m] = propertiesStaffNo;
                    }
                    if (m === 3) {
                        rowData[k][m] = propertiesPosition;
                    }
                }
            }
            // Create Header
            if (k === 1) {
                for (var m = 0; m < 4; m++) {
                    // Insert Table Header
                    propertiesNo = {
                        text: this.ta4review.teamMembersHeaderNo,
                        alignment: 'center',
                        bold: true,
                        fontSize: 8,
                    };
                    propertiesName = {
                        text: this.ta4review.teamMembersHeaderName,
                        alignment: 'center',
                        bold: true,
                        fontSize: 8,
                    };
                    propertiesStaffNo = {
                        text: this.ta4review.teamMembersHeaderStaffNo,
                        alignment: 'center',
                        bold: true,
                        fontSize: 8,
                    };
                    propertiesPosition = {
                        text: this.ta4review.teamMembersHeaderPosition,
                        alignment: 'center',
                        bold: true,
                        fontSize: 8,
                    };
                    if (m === 0) {
                        rowData[k][m] = propertiesNo;
                    }
                    if (m === 1) {
                        rowData[k][m] = propertiesName;
                    }
                    if (m === 2) {
                        rowData[k][m] = propertiesStaffNo;
                    }
                    if (m === 3) {
                        rowData[k][m] = propertiesPosition;
                    }
                }
            }
            // Create no data default, add row display 'Tiada ahli pasukan pemeriksaan'.
            if (k === 2) {
                for (var m = 0; m < 4; m++) {
                    // Reset value array
                    var propertiesNo = {};
                    var propertiesName = {};
                    var propertiesStaffNo = {};
                    var propertiesPosition = {};
                    // Insert Table Title
                    propertiesNo = {
                        colSpan: 4,
                        text: "Tiada ahli pasukan pemeriksaan",
                        alignment: 'center',
                        fontSize: 8,
                    };
                    propertiesName = {};
                    propertiesStaffNo = {};
                    propertiesPosition = {};
                    if (m === 0) {
                        rowData[k][m] = propertiesNo;
                    }
                    if (m === 1) {
                        rowData[k][m] = propertiesName;
                    }
                    if (m === 2) {
                        rowData[k][m] = propertiesStaffNo;
                    }
                    if (m === 3) {
                        rowData[k][m] = propertiesPosition;
                    }
                }
            }
            this.listTeamMembers.push(rowData[k]);
        }
        this.ta4review.teamMembersValue = this.listTeamMembers;
        // Combine all data together
        this.combinationOfDataIntoArray();
    }
    SealTechnicalReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SealTechnicalReviewPage');
        // Getting for List of Members
        this.getLabourDetails();
        // Getting for List of Corrective Action Code
        this.getalncorrectivecode();
        /**
         * Description: Method to call/get executive details.
         * Created    : Alif (02.10.2019)
         */
        this.loadlookup();
    };
    SealTechnicalReviewPage.prototype.loadlookup = function () {
        var _this = this;
        console.log("enter to collect list executive based on site id: " + this.items.json.siteid);
        /*
        var jsonString = { 'siteid': this.items.json.siteid };
        //this.dataService.fetchExecutiveDetails(this.items, this.gv.department, 'TA0ZONELIST', jsonString).then(results => {
        this.dataService.fetchExecutiveDetails().then(results => {
          this.executiveList = results;
        });
        */
        debugger;
        console.log('Query Zone by siteid');
        var queryPart = WL.JSONStore.QueryPart().equal("siteid", this.items.json.siteid);
        console.log('queryPart : ' + JSON.stringify(queryPart));
        this.jsonStore.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_16__pojo_commonEnum_Domains__["a" /* Domains */].Zone, queryPart)
            .then(function (result) {
            console.log('result : ' + JSON.stringify(result));
            var zoneName = result[0].json.ta0zone;
            var queryPart = { $equal: [{ 'department': _this.gv.department }, { 'zone': zoneName }] };
            console.log('queryPart : ' + JSON.stringify(queryPart));
            debugger;
            _this.jsonStore.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_16__pojo_commonEnum_Domains__["a" /* Domains */].Executive, queryPart)
                .then(function (results) {
                debugger;
                _this.executiveList = results;
                console.log('executiveList : ' + JSON.stringify(_this.executiveList));
            }).catch(function (error) {
                console.log('executiveList service failure : ' + JSON.stringify(error));
            });
        }).catch(function (error) {
            console.log('zone service failure : ' + JSON.stringify(error));
        });
    };
    SealTechnicalReviewPage.prototype.ngAfterViewInit = function () {
        // this.canvasResize();
        if (typeof (this.techReview.ta4executivesign) == 'undefined') {
            this.signaturePad.fromDataURL(this.techReview.ta4executivesign, { width: 100, height: 100 });
        }
    };
    SealTechnicalReviewPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SealTechnicalReviewPage.prototype.buildTableBody = function (data, columns) {
        debugger;
        var countR = 1;
        var countC = 0;
        var body = [];
        // body.push(['BIL', 'EVIDENCE ITEM', 'EVIDENCE OF TEMPERING/MODIFYING/DAMANGE OF METER INSTALLATION'])
        // body.push(this.evidenceCollect.evidenceItem);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var rowval = data_1[_i];
            var dataRow = [];
            for (var _a = 0, columns_1 = columns; _a < columns_1.length; _a++) {
                var colVal = columns_1[_a];
                dataRow.push(rowval[colVal]);
            }
            dataRow.splice(0, 0, countR);
            countC++;
            body.push(dataRow);
            countR++;
        }
        console.log('Value ' + body);
        return body;
    };
    /**
     * Edited : Ameer (12/7/2019) - Saving into maximo for tecnical review
     */
    SealTechnicalReviewPage.prototype.saveData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        // Adjustment seal, sticker, list of team members and others..
        this.combinationOfDataIntoArray();
        if (typeof (this.signaturePad) !== "undefined") {
            this.ta4review.exeSignatureValue = this.signaturePad.toDataURL();
        }
        console.log("DATA: " + JSON.stringify(this.ta4review));
        if (typeof (this.items.json.complaince) === "undefined") {
            var complaince = new Array();
            complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
            this.items.json.complaince = complaince;
        }
        else if (this.items.json.complaince.length === 0) {
            this.items.json.complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
        }
        else {
            for (var i = 0; i < this.items.json.complaince.length; i++) {
                if (this.items.json.complaince[i].name === 'Technical Review') {
                    this.items.json.complaince.splice(0, i + 1);
                    this.items.json.complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
                }
                else {
                    this.items.json.complaince.push({ name: 'Technical Review', docType: "UT", data: this.techReview });
                    break;
                }
            }
        }
        loading.present().then(function () {
            _this.generatePDF.pdfTechnicalReview(_this.ta4review).then(function (result) {
                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(result);
                _this.pdfObj.getBase64(function (data) {
                    _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Technical Review' });
                    for (var j = 0; j < _this.items.json.complaince.length; j++) {
                        if (_this.items.json.complaince[j].name === 'Technical Review') {
                            _this.items.json.complaince[j].name = 'Ulasan Teknikal';
                            _this.items.json.complaince[j].docType = 'UT',
                                _this.items.json.complaince[j].pdfFile = _this.pdfBase64;
                            _this.saveIntoMaximo();
                            _this.items.json.complaince[j].name = 'Technical Review';
                        }
                    }
                });
                _this.downloadPdf(_this.pdfObj, "Ulasan Teknikal");
                _this.generatePdfTechnicalReview(result);
                loading.dismissAll();
            });
        });
    };
    SealTechnicalReviewPage.prototype.downloadPdf = function (pdfObj, filename) {
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
    SealTechnicalReviewPage.prototype.clearSign = function () {
        this.signaturePad.clear();
    };
    SealTechnicalReviewPage.prototype.canvasResize = function () {
        var canvas = document.querySelector("canvas");
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        // signaturePad.clear();
    };
    /**
     * Reason: Method to call List of Team Members.
     * Created: Alif (08.07.2019)
     */
    SealTechnicalReviewPage.prototype.getLabourDetails = function () {
        var _this = this;
        this.dataService.fetchLaborDetails().then(function (results) {
            var respResult = results;
            _this.listOfMembers = respResult.respObject;
            for (var i = 0; i < _this.listOfMembers.length; i++) {
                _this.listOfMembers[i].compositeName = _this.listOfMembers[i].laborcode + ' ( ' + _this.listOfMembers[i].ta0laborname + ' ) ';
            }
            // After complete updating saving data..
            _this.getSavedLabourDetails();
        });
    };
    /**
     * Reason: Method to call saved List of Team Members.
     * Created: Alif (21/05/2019)
     */
    SealTechnicalReviewPage.prototype.getSavedLabourDetails = function () {
        var _this = this;
        if (typeof (this.items.json.labtrans) !== 'undefined' && this.items.json.labtrans !== null && this.items.json.labtrans !== '') {
            this.items.json.loc_labtrans = [];
            // Create class for member object.
            var member_x = {
                laborcode: null,
                compositeName: null,
                transtype: null,
                fullname: null
            };
            if (this.items.json.labtrans.length > 0) {
                // checking user execute the service order
                if (typeof (this.items.json.assignment[0].laborcode) !== "undefined") {
                    var lead = this.items.json.labtrans.filter(function (item) {
                        return item.laborcode === _this.items.json.assignment[0].laborcode;
                    });
                    // Getting value from the list of members.
                    var data = this.listOfMembers.filter(function (item) {
                        return item.laborcode === _this.items.json.assignment[0].laborcode;
                    });
                    if (data.length > 0) {
                        member_x.laborcode = data[0].laborcode;
                        member_x.compositeName = data[0].compositeName;
                        member_x.fullname = data[0].ta0laborname;
                        this.items.json.loc_labtrans.push(member_x);
                    }
                }
                for (var i = 0; i < this.items.json.labtrans.length; i++) {
                    // Getting value from the list of members.
                    var data = this.listOfMembers.filter(function (item) {
                        return item.laborcode === _this.items.json.labtrans[i].laborcode;
                    });
                    member_x = {
                        laborcode: null,
                        compositeName: null,
                        transtype: null,
                        fullname: null
                    };
                    if (data.length > 0) {
                        member_x.laborcode = data[0].laborcode;
                        member_x.compositeName = data[0].compositeName;
                        member_x.fullname = data[0].ta0laborname;
                        if (data[0].laborcode === this.items.json.labtrans[i].laborcode) {
                            member_x.transtype = this.items.json.labtrans[i].transtype;
                        }
                        // checking user to exlcude team lead user.
                        // if (lead.length > 0) {
                        // } else {
                        this.items.json.loc_labtrans.push(member_x);
                        // }
                    }
                }
                // Sending value to the component
                this.ta4members = this.items.json.loc_labtrans;
                // Remove duplicate in the list team members
                this.duplicateLabour();
                // Create 2 dimensional array for list team members..
                // Checking list of team members data
                if (typeof (this.ta4members) !== "undefined") {
                    // Setting header list
                    // listTeamMembers.push(["BIL", "NAMA", "NO.PEKERJA", "JAWATAN"]);
                    // Pull out data list members..
                    var rowData = new Array(3);
                    // Remove default row.
                    if (this.listTeamMembers.length >= 3) {
                        this.listTeamMembers.splice(2, 1);
                    }
                    for (var i = 2; i < (this.ta4members.length + 2); i++) {
                        // Reset value array
                        rowData[i] = [];
                        var propertiesNo = {};
                        var propertiesName = {};
                        var propertiesStaffNo = {};
                        var propertiesPosition = {};
                        var propertiesLeadPosition = {};
                        for (var m = 0; m < 4; m++) {
                            // row[i][m] = count++;
                            propertiesNo = {
                                text: Number(i - 1) + ".",
                                alignment: 'center',
                                fontSize: '8'
                            };
                            propertiesName = {
                                text: this.ta4members[i - 2].fullname,
                                fontSize: '8'
                            };
                            propertiesStaffNo = {
                                text: this.ta4members[i - 2].laborcode,
                                alignment: 'center',
                                fontSize: '8'
                            };
                            propertiesPosition = {
                                text: 'Juruteknik',
                                alignment: 'center',
                                fontSize: '8'
                            };
                            propertiesLeadPosition = {
                                text: 'Team Lead',
                                alignment: 'center',
                                fontSize: '8'
                            };
                            if (m === 0) {
                                rowData[i][m] = propertiesNo;
                            }
                            if (m === 1) {
                                rowData[i][m] = propertiesName;
                            }
                            if (m === 2) {
                                rowData[i][m] = propertiesStaffNo;
                            }
                            if (m === 3) {
                                if ((i - 2) === 0) {
                                    rowData[i][m] = propertiesLeadPosition;
                                }
                                else {
                                    rowData[i][m] = propertiesPosition;
                                }
                            }
                        }
                        this.listTeamMembers.push(rowData[i]);
                    }
                }
            }
        }
        else {
            // this.items.json.labtrans = [];
        }
    };
    /**
     * Created      : Ameer (1/8/2019)
     * Description  : Checking for duplicate labor code
     * Edited       : Alif (06.08.2019)
     */
    SealTechnicalReviewPage.prototype.duplicateLabour = function () {
        var _this = this;
        debugger;
        var labourCode = {};
        var labourCodeVal = [];
        if (typeof (this.items.json.loc_labtrans) !== "undefined" || this.items.json.loc_labtrans !== null) {
            this.items.json.loc_labtrans.filter(function (item) {
                if (labourCode[item.laborcode]) {
                    return false;
                }
                labourCode[item.laborcode] = true;
                labourCodeVal.push({ laborcode: item.laborcode, fullname: item.fullname });
                _this.checkingLabTrans(labourCodeVal);
                return true;
            });
        }
    };
    /**
     * Reason   : Method to collect data labtrans.
     * Created  : 17-06-2019 (Alif)
     * Edited   : 06.08.2019 (Alif)
     */
    SealTechnicalReviewPage.prototype.checkingLabTrans = function (value) {
        debugger;
        // Setting just saving local. not yet data from DB.
        this.ta4members = value;
    };
    /**
     * Reason   : Method to call corrective action list
     * Created  : Alif (08.07.2019)
     * Edited   : Alif (05.08.2019)
     */
    SealTechnicalReviewPage.prototype.getalncorrectivecode = function () {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": "TA0CORRECTIVECODE" }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStore.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_16__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alncorrectivecode = result;
            var description;
            if (typeof (_this.items.json.ta0correctivecode) !== "undefined") {
                description = _this.alncorrectivecode.find(function (item) {
                    if (item.json.value === _this.items.json.ta0correctivecode) {
                        return item;
                    }
                });
                if (typeof (description) !== "undefined") {
                    _this.ta4review.correctiveActionLine2 = description.json.description;
                    _this.combineNewEng2 = "2. " + description.json.description;
                }
            }
        });
    };
    /**
     * Reason   : Method to combine all data into an array..
     * Created  : Alif (09.07.2019)
     * @param data data
     */
    SealTechnicalReviewPage.prototype.combinationOfDataIntoArray = function () {
        var _this = this;
        // Variables
        var count = 0;
        var row = new Array(3);
        var rowData = new Array(3);
        var seal = [], sticker = [];
        var valueSingleLine = "";
        var dataSingleLine = [];
        var seal_tmp, sticker_tmp;
        var seal_n_tmp, sticker_n_tmp, testdata_n_tmp;
        var meter_old, meter_new;
        var dataValue = [];
        var dataValueNew = [];
        var dataOld, dataNew;
        var listTeamMembers = [];
        var listNewMeters = [];
        // Create 2 dimensional array for sil & sticker condition..
        // Checking seal & sticker data
        if (typeof (this.data) !== "undefined") {
            // Checking length of data each of feeder
            if (this.data.length > 0) {
                for (var t = 0; t < this.data.length; t++) {
                    // Reset class value
                    dataOld = {
                        serial: null,
                        type: null,
                        seal: null,
                        sticker: null,
                        test: null
                    };
                    // Getting data from meter
                    if (typeof (this.data[t].old) !== "undefined") {
                        // Retrieve meter serial number.
                        meter_old = this.data[t].old.ta0serialnum;
                        // Checking seal is exist or not
                        if (typeof (this.data[t].old.ta0sealdetail) !== "undefined") {
                            seal_tmp = JSON.parse(JSON.stringify(this.data[t].old.ta0sealdetail));
                        }
                        else {
                            seal_tmp = null;
                        }
                        // Checking sticker is exist or not
                        if (typeof (this.data[t].old.ta0stickerdetail) !== "undefined") {
                            sticker_tmp = JSON.parse(JSON.stringify(this.data[t].old.ta0stickerdetail));
                        }
                        else {
                            sticker_tmp = null;
                        }
                        // Assigning value into class
                        dataOld.serial = meter_old;
                        dataOld.type = "old";
                        dataOld.seal = seal_tmp;
                        dataOld.sticker = sticker_tmp;
                        dataValue.push(dataOld);
                    }
                    dataNew = {
                        serial: null,
                        type: null,
                        seal: null,
                        sticker: null,
                        test: null
                    };
                    if (typeof (this.data[t].new) !== "undefined") {
                        // Retrieve meter serial number.
                        meter_new = this.data[t].new.ta0serialnum;
                        // Checking seal is exist or not
                        if (typeof (this.data[t].new.ta0sealdetail) !== "undefined") {
                            seal_n_tmp = JSON.parse(JSON.stringify(this.data[t].new.ta0sealdetail));
                        }
                        // Checking sticker is exist or not
                        if (typeof (this.data[t].new.ta0stickerdetail) !== "undefined") {
                            sticker_n_tmp = JSON.parse(JSON.stringify(this.data[t].new.ta0stickerdetail));
                        }
                        // Checking ta4testdata is exist or not
                        if (typeof (this.data[t].new.ta4testdata) !== "undefined") {
                            testdata_n_tmp = JSON.parse(JSON.stringify(this.data[t].new.ta4testdata));
                        }
                        // Assigning value into class
                        dataNew.serial = meter_new;
                        dataNew.type = "new";
                        dataNew.seal = seal_n_tmp;
                        dataNew.sticker = sticker_n_tmp;
                        dataNew.test = testdata_n_tmp;
                        dataValueNew.push(dataNew);
                    }
                }
            }
            // Checking data value is empty or not
            if (dataValue.length > 0) {
                // Looping data value
                for (var k = 0; k < dataValue.length; k++) {
                    // Rest value
                    seal = [];
                    sticker = [];
                    // Checking seal meter_cover & terminal_cover
                    if (typeof (dataValue[k].seal) !== "undefined" && dataValue[k].seal !== null) {
                        if (dataValue[k].seal.length > 0) {
                            // Variables
                            var mcCount = 0;
                            var tmCount = 0;
                            // TODO: checking total meter cover / terminal meter
                            var mcTotal;
                            var tmTotal;
                            mcTotal = dataValue[k].seal.filter(function (item) {
                                return item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_19__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_COVER);
                            });
                            tmTotal = dataValue[k].seal.filter(function (item) {
                                return item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_19__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_COVER);
                            });
                            // Combination data seal meter cover
                            for (var s = 0; s < dataValue[k].seal.length; s++) {
                                // Create row
                                row[s] = [];
                                // Checking meter_cover
                                if (dataValue[k].seal[s].ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_19__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_COVER)) {
                                    // Create column + put value
                                    // [0] = "Meter Serial No."
                                    // [1] = "Seal / Sticker Name"
                                    // [2] = "Condition"
                                    // row[s][0] = dataValue[k].serial;
                                    // row[s][1] = dataValue[k].seal[s].ta0seallocation;
                                    // row[s][2] = dataValue[k].seal[s].ta0sealcondition;
                                    if (mcCount > 0) {
                                        if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                                            row[s][0] = "sil penutup meter " + (mcCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                                        }
                                    }
                                    else {
                                        if (mcTotal.length > 0) {
                                            if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                                                row[s][0] = "sil penutup meter " + (mcCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                                            }
                                        }
                                        else {
                                            if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                                                row[s][0] = "sil penutup meter " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                                            }
                                        }
                                    }
                                    mcCount++;
                                    // for (var m = 0; m < 3; m++) {
                                    //   row[i][m] = count++;
                                    // }
                                    seal.push(row[s]);
                                }
                            }
                            // Combination data seal terminal meter
                            for (var s = 0; s < dataValue[k].seal.length; s++) {
                                // Create row
                                row[s] = [];
                                // Checking terminal_cover
                                if (dataValue[k].seal[s].ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_19__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINAL_COVER)) {
                                    // Create column + put value
                                    // [0] = "Meter Serial No."
                                    // [1] = "Seal / Sticker Name"
                                    // [2] = "Condition"
                                    // row[s][0] = dataValue[k].serial;
                                    // row[s][1] = dataValue[k].seal[s].ta0seallocation;
                                    // row[s][2] = dataValue[k].seal[s].ta0sealcondition;
                                    if (tmCount > 0) {
                                        if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                                            row[s][0] = "sil terminal meter " + (tmCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                                        }
                                    }
                                    else {
                                        if (tmTotal.length > 0) {
                                            if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                                                row[s][0] = "sil terminal meter " + (tmCount + 1) + " " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                                            }
                                        }
                                        else {
                                            if (typeof (dataValue[k].seal[s].ta0sealcondition) !== "undefined") {
                                                row[s][0] = "sil terminal meter " + dataValue[k].seal[s].ta0sealcondition.toLowerCase();
                                            }
                                        }
                                    }
                                    tmCount++;
                                    // for (var m = 0; m < 3; m++) {
                                    //   row[i][m] = count++;
                                    // }
                                    seal.push(row[s]);
                                }
                            }
                            // combine into single line.
                            if (seal.length > 0) {
                                for (var n = 0; n < seal.length; n++) {
                                    if (n > 0) {
                                        valueSingleLine += ", " + seal[n];
                                    }
                                    else {
                                        valueSingleLine += seal[n];
                                    }
                                }
                            }
                        }
                    }
                    // Checking seal meter_cover & terminal_cover
                    if (typeof (dataValue[k].sticker) !== "undefined" && dataValue[k].sticker !== null) {
                        if (dataValue[k].sticker.length > 0) {
                            // Variables
                            var stCount = 0;
                            // Combination data sticker
                            for (var s = 0; s < dataValue[k].sticker.length; s++) {
                                // Create row
                                row[s] = [];
                                // Checking terminal_cover
                                if (dataValue[k].sticker[s].ta0stickerlocation.startsWith(__WEBPACK_IMPORTED_MODULE_19__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].STERMINAL_COVER)) {
                                    // Create column + put value
                                    // [0] = "Meter Serial No."
                                    // [1] = "Seal / Sticker Name"
                                    // [2] = "Condition"
                                    // row[s][0] = dataValue[k].serial;
                                    // row[s][1] = dataValue[k].sticker[s].ta0stickerlocation;
                                    // row[s][2] = dataValue[k].sticker[s].ta0stickercondition;
                                    if (stCount > 0) {
                                        row[s][0] = "keadaan pelekat TNBM " + stCount + " " + dataValue[k].sticker[s].ta0stickercondition.toLowerCase();
                                    }
                                    else {
                                        row[s][0] = "keadaan pelekat TNBM " + dataValue[k].sticker[s].ta0stickercondition.toLowerCase();
                                    }
                                    stCount++;
                                    // for (var m = 0; m < 3; m++) {
                                    //   row[i][m] = count++;
                                    // }
                                    sticker.push(row[s]);
                                }
                            }
                            // combine into single line.
                            if (sticker.length > 0) {
                                for (var n = 0; n < sticker.length; n++) {
                                    if (sticker.length > 1) {
                                        valueSingleLine += ", " + sticker[n];
                                    }
                                    else {
                                        valueSingleLine += " dan " + sticker[n];
                                    }
                                }
                            }
                        }
                    }
                    if (seal.length > 0 || sticker.length > 0) {
                        // adding end point
                        // valueSingleLine = valueSingleLine + ".";
                        // Combine seal & sticker into a single line.
                        dataSingleLine.push({ value: valueSingleLine, serial: dataValue[k].serial });
                        // Reset value.
                        valueSingleLine = "";
                    }
                    else {
                        // if (k === 0) {
                        //   dataSingleLine.push({ value: "-", serial: dataValue[k].serial });
                        // }
                    }
                }
            }
            // Checking length for new meter
            if (dataValueNew.length > 0) {
                var value;
                var singleValue = "";
                value = "Meter diusik diganti meter baru";
                listNewMeters.push(value);
                // Looping data value
                for (var n = 0; n < dataValueNew.length; n++) {
                    // Checking data serial number
                    if (typeof (dataValueNew[n].serial) !== "undefined") {
                        // Checking total new meter.
                        if (dataValueNew.length > 0) {
                            singleValue += ", " + dataValueNew[n].serial;
                        }
                        else {
                            singleValue += "No meter baru: " + dataValueNew[n].serial;
                        }
                    }
                }
                listNewMeters.push(singleValue);
            }
        }
        // Checking and collect data if multi feeder.
        if (dataSingleLine.length > 0) {
            var combine = "";
            this.combineEng = "";
            // Looping to collect every main meter for each main meter sil & sticker.
            for (var m = 0; m < dataSingleLine.length; m++) {
                if (m === 0) {
                    combine += "Didapati Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value;
                    this.combineEng += "1. Found out Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value;
                }
                else {
                    combine += "; Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value + "";
                    this.combineEng += "; Serial No. " + dataSingleLine[m].serial + " : " + dataSingleLine[m].value + "";
                }
            }
            combine += ".";
            this.combineEng += ".";
            this.ta4review.confirmationAnomalyLine1 = combine;
        }
        else {
            this.ta4review.confirmationAnomalyLine1 = "Tiada maklumat sil dan sticker dijumpai.";
            this.combineEng = "1. No information seal and sticker is found.";
        }
        // this.ta4review.teamMembersValue = listTeamMembers;
        console.log("DATA: " + JSON.stringify(dataSingleLine));
        console.log("DATA: " + JSON.stringify(this.ta4review.teamMembersValue));
        console.log("DATA: " + JSON.stringify(listNewMeters));
        // Extra
        // Setting value
        this.ta4review.correctiveActionSubLine = [];
        // this.ta4review.confirmationAnomalyLine1 = "1. Didapati sil penutup meter " + "BAIK" + ", sil terminal meter " + "TIADA" + " dan keadaan pelekat TNBM " + "BAIK";
        if (typeof (this.items.json.ta4anomalyremarks) !== "undefined") {
            this.ta4review.confirmationAnomalyLine2 = this.items.json.ta4anomalyremarks;
            this.combineReng = this.items.json.ta4anomalyremarks;
        }
        else {
            this.ta4review.confirmationAnomalyLine2 = "Tiada maklumat kejanggalan dijumpai.";
            this.combineReng = "2. No information anomaly remarks is found.";
        }
        var newMeter;
        var oldMeter;
        if (typeof (this.data) !== "undefined") {
            if (this.data.length > 0) {
                newMeter = this.data.filter(function (item) {
                    return item.hasOwnProperty('new');
                });
                oldMeter = this.data.filter(function (item) {
                    return item.hasOwnProperty('old');
                });
                // Checking based on total feeder
                if (typeof (newMeter) !== "undefined") {
                    if (newMeter.length > 0) {
                        // Creating first row
                        this.ta4review.correctiveActionLine1 = "Meter diusik diganti meter baru";
                        this.ta4review.correctiveActionSubLineTitle = "No meter baru : ";
                        for (var m = 0; m < this.data.length; m++) {
                            if (typeof (this.data[m].new) !== "undefined") {
                                // Adding data serial new meter.
                                if (m === 0) {
                                    this.ta4review.correctiveActionSubLineTitle += this.data[m].new.ta0serialnum;
                                }
                                else {
                                    this.ta4review.correctiveActionSubLineTitle += ", " + this.data[m].new.ta0serialnum;
                                }
                            }
                        }
                        // Last thing add "."
                        this.ta4review.correctiveActionSubLineTitle += ".";
                    }
                    else {
                        this.ta4review.correctiveActionLine1 = "Tiada maklumat meter diusik diganti meter baru.";
                        this.ta4review.correctiveActionSubLineTitle = " ";
                        this.combineNewEng = "1. No new meter is found.";
                    }
                }
                else {
                    this.ta4review.correctiveActionLine1 = "Tiada maklumat meter diusik diganti meter baru.";
                    this.ta4review.correctiveActionSubLineTitle = " ";
                    this.combineNewEng = "1. No new meter is found.";
                }
                // Checking data for collect data average error.
                if (typeof (oldMeter) !== "undefined") {
                    // Reset value.
                    this.combineAverageError = "";
                    var testdata = [];
                    for (var h = 0; h < oldMeter.length; h++) {
                        if (typeof (oldMeter[h].old.ta4testdata) !== "undefined") {
                            if (Array.isArray((oldMeter[h].old.ta4testdata))) {
                                testdata = oldMeter[h].old.ta4testdata;
                            }
                            else {
                                testdata = JSON.parse(oldMeter[h].old.ta4testdata);
                            }
                            // Checking testdata before and after
                            if (typeof (testdata) !== "undefined") {
                                var test = [];
                                var value = "";
                                var serialno = "";
                                test = testdata.filter(function (item) {
                                    if (_this.items.json.ta0installationvoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_OPC_1PH) {
                                        return item.ta0testtype === "AT1P";
                                    }
                                    if (_this.items.json.ta0installationvoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_OPC_3PH || _this.items.json.ta0installationvoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                        return item.ta0testtype === "AC3P";
                                    }
                                });
                                if (test.length > 0) {
                                    if (test[0].ta0at_pteserialnum === 0) {
                                        serialno = '-';
                                    }
                                    else {
                                        serialno = test[0].ta0at_pteserialnum;
                                    }
                                    value = test[0].ta0at_avg;
                                }
                            }
                            if (h === 0) {
                                if (typeof (value) !== "undefined" && typeof (serialno) !== "undefined") {
                                    this.combineAverageError += "PTE Serial No. [" + serialno + "] : " + value + "%";
                                }
                                else if (typeof (value) !== "undefined" && typeof (serialno) === "undefined") {
                                    this.combineAverageError += "PTE Serial No. [-] : " + value + " %";
                                }
                                else {
                                    this.combineAverageError += "PTE Serial No. [-] : - %";
                                }
                            }
                            else {
                                if (typeof (value) !== "undefined" && typeof (serialno) !== "undefined") {
                                    this.combineAverageError += ", PTE Serial No. [" + serialno + "] : " + value + "%";
                                }
                                else if (typeof (value) !== "undefined" && typeof (serialno) === "undefined") {
                                    this.combineAverageError += ", PTE Serial No. [-] : " + value + " %";
                                }
                                else {
                                    this.combineAverageError += ", PTE Serial No. [-] : - %";
                                }
                            }
                        }
                    }
                    // Adding "."
                    // this.combineAverageError += ".";
                    // Sent to 
                }
                else {
                    this.combineAverageError = "";
                }
            }
        }
        this.ta4review.otherNotesLine1 = "Perlu dirujuk sebagai Kes Usikan Pepasangan Meter.";
        this.ta4review.otherNotesLine2 = [{ text: "Sila pantau akaun ini sebagai ", }, { text: "High Risk Customer (HRC)", italics: true, bold: true, }, { text: " di dalam BCRM.", }];
        if (typeof (this.ta4review.otherNotesReportNo) !== "undefined" && typeof (this.ta4review.otherNotesReportDate) !== "undefined") {
            this.ta4review.otherNotesLine3 = "No Report Polis : " + this.ta4review.otherNotesReportNo + " bertarikh " + this.ta4review.otherNotesReportDate + ".";
        }
        else {
            this.ta4review.otherNotesLine3 = "No Report Polis : " + "____________" + " bertarikh " + "____________.";
        }
        this.ta4review.otherNotesLine4 = "Sila sediakan bil pelarasan berdasarkan ralat sebanyak (" + this.combineAverageError + ").";
        // this.ta4review.teamMembersValue = [];
        // if (typeof (this.ta4members) !== "undefined") {
        //   this.ta4review.teamMembersValue = listTeamMembers;
        // } else {
        //   this.ta4review.teamMembersValue = [];
        // }
        // Checking empty array remove from class
        if (typeof (this.ta4review.correctiveActionSubLine) === "undefined" || this.ta4review.correctiveActionSubLine.length <= 0) {
            this.ta4review.correctiveActionSubLine.push("-");
        }
        if (typeof (this.ta4review.correctiveActionLine2) === "undefined") {
            this.ta4review.correctiveActionLine2 = " ";
        }
        // var value = {
        //   content: [
        //     {
        //       layout: 'lightHorizontalLines',
        //       table: {
        //         widths: ['*', '*', '*', '*'],
        //         body:
        //           // ['Serial No.', 'Name', 'Condition'],
        //           // ['fixed-width cells have exactly the specified width', { text: 'nothing interesting here', italics: true, color: 'gray' }, { text: 'nothing interesting here', italics: true, color: 'gray' }, { text: 'nothing interesting here', italics: true, color: 'gray' }]
        //           // [dataSingleLine], sticker
        //           listTeamMembers
        //       }
        //     },
        //   ]
        // };
        // this.generatePdfTechnicalReview(value);
    };
    SealTechnicalReviewPage.prototype.generatePdfTechnicalReview = function (data) {
        var _this = this;
        console.log("Generate PDF is starting..");
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(data);
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: "application/pdf" });
            //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = _this.items.json.wonum + "_TR" + ".pdf";
            link.click();
        });
        //w.document.close()
        console.log("pdf Obj : " + JSON.stringify(this.pdfObj));
    };
    SealTechnicalReviewPage.prototype.saveIntoMaximo = function () {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present();
        this.describedBy.docType = 'UT';
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            this.jsonStore.replaceWO(this.items, "LPCWORKORDER", true);
            this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
            loading.dismiss();
        }
        else if ((__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    var itemVal_1 = _this.items;
                    var objCopy = JSON.parse(JSON.stringify(itemVal_1));
                    delete objCopy.json['ta0feeder'];
                    var newObj = objCopy.json;
                    // item, work number, action type,feeder code, workorderType
                    _this.dataService.saveSealRecordImage(objCopy, _this.items.json.wonum, 'addPdf', '', _this.items.json.worktype, _this.describedBy.docType)
                        .then(function (results) {
                        // let resObj: any;
                        // resObj = JSON.parse(results.toString());
                        _this.jsonStore.replaceWO(itemVal_1, "LPCWORKORDER", false);
                        _this.gf.warningAlert("Technical Review", _this.gv.saveSuccessfully, "OK");
                        loading.dismiss();
                        _this.navCtrl.pop();
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.items, "LPCWORKORDER", true);
                    loading.dismiss();
                }
            });
        }
        else {
            var itemVal = this.items;
            var objCopy = JSON.parse(JSON.stringify(itemVal));
            delete objCopy.json['ta0feeder'];
            var newObj = objCopy.json;
            this.dataService.saveSealRecordImage(objCopy, this.items.json.wonum, 'addPdf', '', this.items.json.worktype, this.describedBy.docType)
                .then(function (results) {
                /* let resObj: any;
                resObj = JSON.parse(results.toString());
                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj)); */
                _this.jsonStore.replaceWO(_this.items, "LPCWORKORDER", false);
                _this.gf.warningAlert("Technical Review", _this.gv.saveSuccessfully, "OK");
                loading.dismiss();
                _this.navCtrl.pop();
            });
        }
    };
    /**
     * Reason   : Method to preview Document PDF.
     * Created  : Alif (26.07.2019)
     */
    SealTechnicalReviewPage.prototype.previewDocument = function () {
        var _this = this;
        console.log("Preview Document PDF Technical Review..");
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        // Checking Input User..
        if (this.validateUserInput()) {
            // Adjustment seal, sticker, list of team members and others..
            this.combinationOfDataIntoArray();
            if (typeof (this.signaturePad) !== "undefined") {
                this.ta4review.exeSignatureValue = this.signaturePad.toDataURL();
            }
            debugger;
            console.log("DATA: " + JSON.stringify(this.ta4review));
            loading.present().then(function () {
                _this.generatePDF.pdfTechnicalReview(_this.ta4review).then(function (result) {
                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_12_pdfmake_build_pdfmake___default.a.createPdf(result);
                    // this.pdfObj.getBase64((data) => {
                    //   this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Technical Review' });
                    //   for (var j = 0; j < this.items.json.complaince.length; j++) {
                    //     if (this.items.json.complaince[j].name === 'Technical Review') {
                    //       this.items.json.complaince[j].pdfFile = this.pdfBase64;
                    //       // this.saveIntoMaximo();
                    //     }
                    //   }
                    // });
                    _this.downloadPdf(_this.pdfObj, "Technical Review");
                    _this.generatePdfTechnicalReview(result);
                    loading.dismiss();
                }, function (failure) {
                    loading.dismiss();
                    _this.gf.displayToast("PDF generate cannot be preview.");
                });
            }).then(function () {
                loading.dismiss();
            });
        }
        else {
            loading.dismiss();
        }
    };
    /**
     * Description: Method to auto populate executive into executive details.
     * Created    : Alif (31.10.2019)
     */
    SealTechnicalReviewPage.prototype.setExecutiveDetails = function (value) {
        console.log("setExecutiveDetails : " + value);
        this.ta4review.exeNameValue = this.executiveList[value].json.name;
        this.ta4review.exePositionValue = this.executiveList[value].json.position;
        // searching executive details.
        /*
        var executive = this.executiveList.filter((item) => {
          return item.json.userid === value;
        });
        console.log('executive : '+JSON.stringify(executive));
    
        // checking executive available or not. if available take from array[0].
        if (executive.length > 0) {
          this.ta4review.exeNameValue = executive[0].name;
          this.ta4review.exePositionValue = executive[0].position;
        }
        */
    };
    /**
     * Description  : Method to checking data input from user.
     * Created      : Alif (04.11.2019)
     */
    SealTechnicalReviewPage.prototype.validateUserInput = function () {
        console.log("came inside to checking user input..");
        if (typeof (this.ta4review.exeNameValue) !== "undefined" && this.ta4review.exeNameValue !== null && this.ta4review.exeNameValue !== "") {
            return true;
        }
        else if (typeof (this.ta4review.exePositionValue) !== "undefined" && this.ta4review.exePositionValue !== null && this.ta4review.exePositionValue !== "") {
            return true;
        }
        this.gf.warningAlert("Warning!", "Name/Position/Signature cannot be empty.", "Close");
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SignaturePad1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SealTechnicalReviewPage.prototype, "signaturePad", void 0);
    SealTechnicalReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-technical-review',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-technical-review/seal-technical-review.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <!-- <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-title>Technical Review</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- Customer Details Section -->\n  <!-- <ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="md-contact"></ion-icon>&nbsp;Customer Details Section\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Account No.</ion-label>\n        <ion-input type="text" [(ngModel)]="ta4review.acctNoValue" readonly="true"\n          value="{{ items.json.ta0accountnum || \'-\' }}"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Customer Name</ion-label>\n        <ion-input type="text" [(ngModel)]="ta4review.customerNameValue" readonly="true"\n          value="{{ (items.json.ta0bptenantname) ? items.json.ta0bptenantname : items.json.ta0bpname || \'-\' }}">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor="let address of items.json.woserviceaddress">\n        <ion-label color="primary" stacked>Full Address</ion-label>\n        <ion-textarea type="text" [(ngModel)]="ta4review.customerAddressValue" rows="4" readonly="true"\n          placeholder="Auto Populate Customer Address" value="{{ address.formattedaddress || \'\' }}"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list style="border: 0.55px solid lightgrey;border-radius: 10px;">\n    <ion-list-header style="background-color: #f3e5f5;border-radius: 10px 10px 0px 0px;margin-top: 0px;">\n      <ion-icon name="contacts" item-start></ion-icon>\n      Customer Details Section\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label fixed color="primary">Account No.</ion-label>\n      <ion-input [(ngModel)]="ta4review.acctNoValue" type="number" placeholder="Account No."\n        value="{{ items.json.ta0accountnum || \'-\' }}" readonly></ion-input>\n    </ion-item>\n    <!--\n    <ion-item>\n      <ion-label fixed color="primary">Customer</ion-label>\n      <ion-input [(ngModel)]="ta4review.customerNameValue" type="text" placeholder="Customer Name"\n        value="{{ (items.json.ta0bptenantname) ? items.json.ta0bptenantname : items.json.ta0bpname || \'-\' }}" readonly>\n      </ion-input>\n    </ion-item>\n    -->\n    <ion-item>\n      <ion-label fixed color="primary">Customer</ion-label>\n      <ion-input [(ngModel)]="ta4review.customerNameValue" type="text" placeholder="Customer Name"\n        value="{{ items.json.ta0bpname || \'-\' }}" readonly>\n      </ion-input>\n    </ion-item>\n    <ion-item *ngFor="let address of items.json.woserviceaddress">\n      <ion-label fixed color="primary">Address</ion-label>\n      <ion-textarea [(ngModel)]="ta4review.customerAddressValue" type="text" rows="4" placeholder="Customer Address"\n        readonly="true" value="{{ address.formattedaddress || \'\' }}"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <!-- Confirmation of Anomalies & Reason Section -->\n  <!-- <div *ngFor="let attr of newArray ; let j=index"> -->\n  <!-- <ion-item-divider>\n      <ion-row>\n        <ion-col>\n          <ion-icon ios="md-ribbon" md="md-ribbon"></ion-icon>&nbsp;Feeder - {{j+1}} Confirmation of Anomalies & Reason\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">Meter Inspection Forms</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Meter: {{attr.ta0ts_meter}}</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Fuse: {{attr.ta0ts_fuse}}</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>TTB: {{attr.ta0ts_ttb}}</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Wiring: {{attr.ta0ts_wiring}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Form: {{attr.ta0ts_anamoly}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item style="background: #FFCCCC;border-radius: 10px;">\n          <ion-label text-center>Average Error</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf=\'attr.ta0testind === "M"\'>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Accuracy Type</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>Manual</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Average % Error</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{attr.ta0at_avg}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\'attr.ta0testind === "P"\'>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Portable Test Set :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{attr.ta0at_pteserialnum}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">%Error Average</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{attr.ta0at_avg}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n  <!-- Corrective / Follow Up Action -->\n  <!-- <ion-item-divider>\n      <ion-row>\n        <ion-col>\n          <ion-icon ios="md-paper" md="md-paper"></ion-icon>&nbsp;&nbsp;Corrective / Follow Up Action\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <ion-row>\n      <ion-col col-sm-12 col-md-12 col-12>\n        <ion-item no-lines>\n          1. Meter disturbed were replaced with new meter. <br />\n          &nbsp;&nbsp;&nbsp;&nbsp;{{ listNewMeters || \'-\' }} <br />\n          2. {{ this.ta4review.correctiveActionLine2 || \'-\' }}\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">Corrective Action :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{attr.ta0at_corrective_action}}</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">Corrective Action Description :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{attr.ta0at_corrective_action_desc}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">Meter Serial No.</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{attr.serialNum}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n  <!-- </div> -->\n\n  <!-- Confirmation of Anomalies & Reason Section -->\n  <!-- <ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="md-ribbon"></ion-icon>&nbsp;&nbsp;Confirmation of Anomalies & Reason\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col>\n      <ion-item text-wrap no-lines style="text-align: justify;">\n        {{ combineEng }} <br /><br />\n        2. {{ combineReng }}\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list style="border: 0.55px solid lightgrey;border-radius: 10px;">\n    <ion-list-header style="background-color: #f3e5f5;border-radius: 10px 10px 0px 0px;margin-top: 0px;">\n      <ion-icon name="logo-buffer" item-start></ion-icon>\n      Confirmation of Anomalies & Reason\n    </ion-list-header>\n\n    <ion-item text-wrap style="text-align: justify;">\n      <ion-label>{{ combineEng }}</ion-label>\n    </ion-item>\n    <ion-item text-wrap style="text-align: justify;">\n      <ion-label>2. {{ combineReng }}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!-- <span *ngFor="let attr of data; let j = index">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label color="primary">Serial No : {{ attr.old.ta0serialnum }}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines *ngFor="let seal of data.seal; let k = index">\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </span> -->\n\n  <!-- Corrective / Follow Up Action -->\n  <!-- <ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="md-paper"></ion-icon>&nbsp;&nbsp;Corrective / Follow Up Action\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col col-sm-12 col-md-12 col-12>\n      <ion-item no-lines *ngIf="combineNewEng == \'\'">\n        1. Meter disturbed were replaced with new meter. <br />\n        &nbsp;&nbsp;&nbsp;&nbsp;{{ listNewMeters || \'-\' }} <br />\n        2. {{ this.ta4review.correctiveActionLine2 || \'-\' }}\n      </ion-item>\n      <ion-item no-lines *ngIf="combineNewEng != \'\'">\n        {{ combineNewEng  }} <br /><br />\n        {{ combineNewEng2 }}\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list style="border: 0.55px solid lightgrey;border-radius: 10px;">\n    <ion-list-header style="background-color: #f3e5f5;border-radius: 10px 10px 0px 0px;margin-top: 0px;">\n      <ion-icon name="logo-buffer" item-start></ion-icon>\n      Corrective / Follow Up Action\n    </ion-list-header>\n\n    <ion-item *ngIf="combineNewEng == \'\'">\n      <ion-label>1. Meter disturbed were replaced with new meter.</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf="combineNewEng == \'\' && listNewMeters">\n      <ion-label>{{ listNewMeters || \'-\' }}</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf="combineNewEng == \'\'">\n      <ion-label>2. {{ this.ta4review.correctiveActionLine2 || \'-\' }}</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf="combineNewEng != \'\'" text-wrap style="text-align: justify;">\n      <ion-label>{{ combineNewEng  }}</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf="combineNewEng != \'\'" text-wrap style="text-align: justify;">\n      <ion-label>{{ combineNewEng2  }}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!-- Other Notes -->\n  <!-- <ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="md-paper"></ion-icon>&nbsp;&nbsp;Other Notes\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col>\n      <ion-item no-lines text-wrap>\n        1. Need to be referred as a Meter Installation Tampering case. <br />\n        2. Please monitor this account as <b><i>High Risk Customer (HRC)</i></b> in BCRM. <br />\n        3. Please set up an adjustment bill based on an error ({{ combineAverageError }}).\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n  <!-- Need to closed (User Requested: 26/07/2019) -->\n  <!-- <ion-row>\n    <ion-col col-sm-12 col-md-8 col-8>\n      <ion-item>\n        <ion-label stacked color="primary">Police Report No.</ion-label>\n        <ion-input type="text" [(ngModel)]="ta4review.otherNotesReportNo" placeholder="Police Report No."></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-4 col-4>\n      <ion-item>\n        <ion-label stacked color="primary">Report Date</ion-label>\n        <ion-datetime [(ngModel)]="ta4review.otherNotesReportDate" displayFormat="DD/MM/YYYY" pickerFormat="DD:MMM:YYYY"\n          placeholder="Select date"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list style="border: 0.55px solid lightgrey;border-radius: 10px;">\n    <ion-list-header style="background-color: #f3e5f5;border-radius: 10px 10px 0px 0px;margin-top: 0px;">\n      <ion-icon name="logo-buffer" item-start></ion-icon>\n      Other Notes\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>1. Need to be referred as a Meter Installation Tampering case.</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>2. Please monitor this account as <b><i>High Risk Customer (HRC)</i></b> in BCRM.</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap style="text-align: justify;">\n      <ion-label>3. Please set up an adjustment bill based on an error ({{ combineAverageError || \'-\'}}).</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!-- Examination Team Member -->\n  <!-- <ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="md-contacts"></ion-icon>&nbsp;&nbsp;Examination Team Member\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col col-sm-12 col-md-1 col-1>\n      <ion-item no-lines>\n\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-5 col-5>\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Name</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-2 col-2>\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Staff No</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-4 col-4>\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Position</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngFor="let person of ta4members; let j = index">\n    <ion-col col-sm-12 col-md-1 col-1>\n      <ion-item text-wrap no-lines>\n        {{ j + 1 }}\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-5 col-5 col-2 align-self-end>\n      <ion-item text-wrap>\n        {{ person.fullname || \'-\' }}\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-2 col-2 align-self-end>\n      <ion-item text-wrap>\n        {{ person.laborcode || \'-\' }}\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-3 col-3 align-self-end>\n      <ion-item text-wrap>\n        Technician\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list style="border: 0.55px solid lightgrey;border-radius: 10px;">\n    <ion-list-header style="background-color: #f3e5f5;border-radius: 10px 10px 0px 0px;margin-top: 0px;">\n      <ion-icon name="contacts" item-start></ion-icon>\n      Examination Team Member\n    </ion-list-header>\n\n    <ion-item *ngFor="let person of ta4members; let j = index">\n      <ion-icon name="contact" item-start></ion-icon>\n      <h2>{{ person.laborcode || \'-\' }} - {{ person.fullname || \'-\' }}</h2>\n      <p *ngIf="j === 0">Team Lead</p>\n      <p *ngIf="j != 0">Technician</p>\n    </ion-item>\n  </ion-list>\n\n\n  <!-- <ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="md-person"></ion-icon>&nbsp;&nbsp;Executive Details Section\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-12>\n      <ion-item>\n        <ion-label color="primary" stacked>List of Executive\'s</ion-label>\n        <ion-select [selectOptions]="{ title: \'Executive\' }" placeholder="-- Choose --"\n          (ionChange)="setExecutiveDetails($event)">\n          <ion-option value="{{ user.userid }}" *ngFor="let user of executiveList; let i = index">{{ user.name  }} -\n            {{ user.position }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label color="primary" stacked>Name of Executive</ion-label>\n        <ion-input [(ngModel)]="ta4review.exeNameValue" disabled="true" placeholder="Auto Populate"\n          value="{{ gv.displayname || \'\' }}">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-sm-12 col-md-8 col-8>\n      <ion-item>\n        <ion-label color="primary" stacked>Position</ion-label>\n        <ion-input [(ngModel)]="ta4review.exePositionValue" placeholder="Enter value"\n          value="{{ ta4review.exePositionValue || \'\' }}">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-sm-12 col-md-4 col-4>\n      <ion-item>\n        <ion-label color="primary" stacked>Date</ion-label>\n        <ion-input [(ngModel)]="ta4review.exeDate" placeholder="Auto Populate" disabled="true"\n          value="{{ techReview.ta4currentDate || \'\' }}">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style="padding-bottom: 10px;">\n    <ion-col col-2 col-md-2 col-sm-12>\n      <ion-item no-lines>\n        <ion-label color="primary">Signature:</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-8 col-md-8 col-sm-12>\n      <ion-item no-lines>\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2 col-md-2 col-sm-12>\n      <ion-item no-lines>\n        <button ion-button color="buttonlightColor" (click)="clearSign()">Clear</button>\n      </ion-item>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-list style="border: 0.55px solid lightgrey;border-radius: 10px;">\n    <ion-list-header style="background-color: #f3e5f5;border-radius: 10px 10px 0px 0px;margin-top: 0px;">\n      <ion-icon name="logo-buffer" item-start></ion-icon>\n      Executive Details Section\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label fixed color="primary" style="min-width: 150px;">List of Executive\'s</ion-label>\n      <ion-select [selectOptions]="{ title: \'Executive\' }" (ionChange)="setExecutiveDetails($event)"\n        placeholder="Choose" style="min-width: 78%;">\n        <ion-option value="{{ i }}" *ngFor="let user of executiveList; let i = index" text-wrap>\n          {{ user.json.name  }} - {{ user.json.position }}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="primary" style="min-width: 150px;">Executive</ion-label>\n      <ion-input [(ngModel)]="ta4review.exeNameValue" disabled="true" placeholder="Name"\n        value="{{ gv.displayname || \'\' }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="primary" style="min-width: 150px;">Position</ion-label>\n      <ion-input [(ngModel)]="ta4review.exePositionValue" disabled="true" placeholder="Position"\n        value="{{ ta4review.exePositionValue || \'\' }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="primary" style="min-width: 150px;">Date</ion-label>\n      <ion-input [(ngModel)]="ta4review.exeDate" placeholder="Auto Populate" disabled="true"\n        value="{{ techReview.ta4currentDate || \'\' }}">\n      </ion-input>\n    </ion-item>\n    \n    <ion-item style="align-items: start;">\n      <ion-label fixed color="primary" style="min-width: 165px;">Signature</ion-label>\n      <ion-label>\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n        <button ion-button float-right (click)="clearSign()"><ion-icon name="md-refresh"></ion-icon></button>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col><button ion-button round block mode="md" (click)="saveData()">Save</button></ion-col>\n      <ion-col><button ion-button round block mode="md" (click)="previewDocument()">Preview</button></ion-col>\n      <ion-col><button ion-button round block mode="md" (click)="goBack()">Cancel</button></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-technical-review/seal-technical-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_8__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_pdfForms_seal_technical_review_technical_review_PDF__["a" /* TechnicalReview */],
            __WEBPACK_IMPORTED_MODULE_18__components_technical_review_technical_review__["a" /* TechnicalReviewComponent */]])
    ], SealTechnicalReviewPage);
    return SealTechnicalReviewPage;
}());

//# sourceMappingURL=seal-technical-review.js.map

/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechicalReviewForm; });
var TechicalReviewForm = /** @class */ (function () {
    function TechicalReviewForm() {
    }
    return TechicalReviewForm;
}());

//# sourceMappingURL=TechnicalReviewForm.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealTechnicalReviewPageModule", function() { return SealTechnicalReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_technical_review__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdfForms_seal_technical_review_technical_review_PDF__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_technical_review_technical_review__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SealTechnicalReviewPageModule = /** @class */ (function () {
    function SealTechnicalReviewPageModule() {
    }
    SealTechnicalReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_technical_review__["a" /* SealTechnicalReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_technical_review__["a" /* SealTechnicalReviewPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__["SignaturePadModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_pdfForms_seal_technical_review_technical_review_PDF__["a" /* TechnicalReview */],
                __WEBPACK_IMPORTED_MODULE_5__pojo_Complaints__["a" /* Complaints */],
                __WEBPACK_IMPORTED_MODULE_6__components_technical_review_technical_review__["a" /* TechnicalReviewComponent */]
            ]
        })
    ], SealTechnicalReviewPageModule);
    return SealTechnicalReviewPageModule;
}());

//# sourceMappingURL=seal-technical-review.module.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TechnicalReview = /** @class */ (function () {
    function TechnicalReview(dataService, http) {
        this.dataService = dataService;
        this.http = http;
    }
    TechnicalReview.prototype.generateTechnicalReview = function (item, locData, combineArry, correctiveArry) {
        return new Promise(function (resolve, reject) {
            debugger;
            console.log("came inside to complaint pdf form generation --- >>>.");
            var dd = null;
            var url = '../www/assets/data/libEnglish.json';
            ;
            for (var i = 0; i < locData.length; i++) {
                var fullItems;
                debugger;
                dd = {
                    content: [
                        {
                            margin: [30, 20, 0, 0],
                            table: {
                                headerRows: 1,
                                body: [
                                    [{ text: 'Technical Review', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                    ['', '', ''],
                                ]
                            },
                            layout: 'lightHorizontalLines'
                        },
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: ['auto', 'auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Account No.', style: ['textbold'] }, item.ta4accountno, { text: 'Customer Name', style: ['textbold'] }, item.ta4custname],
                                ]
                            },
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                body: [
                                    [
                                        [
                                            { text: 'Confirmation of Anomalies & Reason', style: ['textbold'] },
                                            {
                                                margin: [30, 0, 0, 0],
                                                table: {
                                                    headerRows: 1,
                                                    body: [
                                                        [combineArry]
                                                    ]
                                                },
                                            }
                                        ],
                                    ],
                                    [
                                        [
                                            { text: 'Corrective / Follow Up Action', style: ['textbold'] },
                                            {
                                                margin: [30, 10, 0, 0],
                                                table: {
                                                    body: [
                                                        [correctiveArry]
                                                    ],
                                                },
                                            },
                                        ]
                                    ]
                                ]
                            }
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: [240, 'auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Other Notes', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                    [{
                                            text: [
                                                { text: 'Report No. :', style: ['textbold'] }, item.ta4reportno
                                            ], colSpan: 4
                                        }, {}, {}, {}],
                                ]
                            },
                        },
                        '\n',
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: ['auto', 'auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [{ text: 'Examination Team Member', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                    [
                                        {
                                            text: [
                                                { text: 'Bil. :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Name :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Staff No. :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Position. :', style: ['textbold'] }
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            text: [
                                                ' 1.',
                                            ]
                                        },
                                        {
                                            text: [
                                                ' Johari Mat Saad ',
                                            ]
                                        },
                                        {
                                            text: [
                                                ' 10096813 '
                                            ]
                                        },
                                        {
                                            text: [
                                                'Technician'
                                            ]
                                        }
                                    ],
                                ]
                            },
                        },
                        {
                            margin: [30, 10, 0, 0],
                            table: {
                                widths: ['auto', 'auto', 'auto'],
                                heights: ['auto', 'auto', 'auto', 'auto'],
                                body: [
                                    [
                                        {
                                            text: [
                                                { text: 'Signature Executive :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Executive Name and Position :', style: ['textbold'] }
                                            ]
                                        },
                                        {
                                            text: [
                                                { text: 'Date :', style: ['textbold'] }
                                            ]
                                        },
                                    ],
                                    [
                                        {
                                            image: 'ExecutiveSign',
                                            width: 100,
                                            height: 50,
                                        },
                                        { text: [item.ta4executivename, ' ', item.ta4position] },
                                        { text: [item.ta4currentDate] },
                                    ],
                                ]
                            },
                        },
                    ],
                    images: {
                        ExecutiveSign: item.ta4executivesign
                    },
                    styles: {
                        textbold: {
                            bold: true
                        },
                        title: {
                            fontSize: 14,
                            bold: true
                        },
                        textMargin: {
                            margin: [30, 50, 80, 0]
                        }
                    }
                };
                /*    else if (locData[i].ta0testind === 'M') {
                      dd = {
                          content: [
                              {
                                  margin: [30, 20, 0, 0],
                                  table: {
                                      headerRows: 1,
                                      body: [
                                          [{ text: 'Technical Review', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                          ['', '', ''],
                                      ]
                                  },
                                  layout: 'lightHorizontalLines'
                              },
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: ['auto', 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          ['Account No.', item.ta4accountno, 'Customer Name', item.ta4custname],
                                      ]
                                  },
                              },
                              '\n',
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: [200, 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Confirmation of Anomalies & Reason', colSpan: 4 }, {}, {}, {}],
                                          [{
                                              text: [
                                                  { text: 'Meter ', style: ['textbold'] }, locData[i].ta0ts_meter, '\n', { text: ' Fuse ', style: ['textbold'] }, locData[i].ta0ts_fuse, '\n', { text: ' TTB :', style: ['textbold'] }, locData[i].ta0ts_ttb, '\n', { text: ' Wiring :', style: ['textbold'] }, locData[i].ta0ts_wiring,
                                                  '\n', { text: 'Form :', style: ['textbold'] }, locData[i].ta0ts_anamoly, '\n', { text: ' Average Error :', style: ['textbold'] }, locData[i].ta0at_avg, ' Portable Test Set :', locData[i].ta0at_pteserialnum
                                              ], colSpan: 4
                                          }, {}, {}, {}],
                                      ]
                                  },
                              },

                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: [240, 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Corrective / Follow Up Action', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                          [{
                                              text: [
                                                  { text: 'Corrective Action ', style: ['textbold'] }, locData[i].ta0at_corrective_action, { text: ' Corrective Action Description ', style: ['textbold'] }, locData[i].ta0at_corrective_action_desc,
                                                  '\n', { text: 'Meter Serial No : ', style: ['textbold'] }, locData[i].serialNum,
                                              ], colSpan: 4
                                          }, {}, {}, {}],
                                      ]
                                  },
                              },
                              '\n',
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: [240, 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Other Notes', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                          [{
                                              text: [
                                                  { text: 'Report No. :', style: ['textbold'] }, item.ta4reportno
                                              ], colSpan: 4
                                          }, {}, {}, {}],
                                      ]
                                  },
                              },
                              '\n',
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: ['auto', 'auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [
                                          [{ text: 'Examination Team Member', colSpan: 4, style: ['textbold'] }, {}, {}, {}],
                                          [
                                              {
                                                  text: [
                                                      { text: 'Bil. :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Name :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Staff No. :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Position. :', style: ['textbold'] }
                                                  ]
                                              }],
                                          [
                                              {
                                                  text: [
                                                      ' 1.',
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      ' Johari Mat Saad ',
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      ' 10096813 '
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      'Technician'
                                                  ]
                                              }],
                                      ]
                                  },
                              },
                              {
                                  margin: [30, 10, 0, 0],
                                  table: {
                                      widths: ['auto', 'auto', 'auto'],
                                      heights: ['auto', 'auto', 'auto', 'auto'],
                                      body: [

                                          [
                                              {
                                                  text: [
                                                      { text: 'Signature Executive :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Executive Name and Position :', style: ['textbold'] }
                                                  ]
                                              },
                                              {
                                                  text: [
                                                      { text: 'Date :', style: ['textbold'] }
                                                  ]
                                              },

                                          ],
                                          [
                                              {
                                                  image: 'ExecutiveSign',
                                                  width: 100,
                                                  height: 50,
                                              },
                                              { text: [item.ta4executivename, item.ta4position] },
                                              { text: [item.ta4currentDate] },

                                          ],
                                      ]
                                  },
                              },
                          ],

                          images: {
                              ExecutiveSign: item.ta4executivesign
                          },
                          styles: {
                              textbold: {
                                  bold: true
                              },
                              title: {
                                  fontSize: 14,
                                  bold: true
                              },
                              textMargin: {
                                  margin: [30, 50, 80, 0]
                              }
                          }

                      }
                  } */
            }
            resolve(dd);
            reject(dd);
        });
    };
    TechnicalReview = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TechnicalReview);
    return TechnicalReview;
}());

//# sourceMappingURL=technical-review-PDF.js.map

/***/ })

});
//# sourceMappingURL=15.js.map