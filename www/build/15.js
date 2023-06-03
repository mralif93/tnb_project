webpackJsonp([15],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_complianceForm__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pdf_generation_bm_pdf_generation_bm__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pdf_generation_eng_pdf_generation_eng__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_site_address_site_address__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_compliance_sign_compliance_sign__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_moment__);
/*
 * Modification History :
 * Date         version     Modified By   Method            Description
 * 2020-09-21   001         Andy Chang    findZoneBySiteId  download indstrydesc to SITEID jsonstore and use for RA Address
 * 2020-11-17   002         Andy Chang    constructor       Maximo addressline3 is undefined, APP should populate address with streetname
 * 2020-11-17   003         Andy Chang    constructor       change disconnection date to completion date this.itemOri.json.wol4
 * 2021-03-10   004         Andy Chang    constructor       hardcode statement for address "Kedai Tenaga yang berdekatan" and telefon "1300 88 5454"
 * 2021-03-31   005         Andy Chang    constructor       Maximo city is undefined, don't populate undefined in form
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























__WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_21_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;

var ComplaintFormPage = /** @class */ (function (_super) {
    __extends(ComplaintFormPage, _super);
    function ComplaintFormPage(cdRef, navCtrl, navParams, appCtrl, gv, complaintVar, formbuilder, http, file, fileOpener, toastCtrl, alertCtrl, gf, pdf_Eng, pdf_Bm, popoverCtrl, platform, dataService, jsonStore, loadingCtrl, formtypsave, siteAddress) {
        var _this = _super.call(this, navParams, gv, complaintVar) || this;
        _this.cdRef = cdRef;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.appCtrl = appCtrl;
        _this.gv = gv;
        _this.complaintVar = complaintVar;
        _this.formbuilder = formbuilder;
        _this.http = http;
        _this.file = file;
        _this.fileOpener = fileOpener;
        _this.toastCtrl = toastCtrl;
        _this.alertCtrl = alertCtrl;
        _this.gf = gf;
        _this.pdf_Eng = pdf_Eng;
        _this.pdf_Bm = pdf_Bm;
        _this.popoverCtrl = popoverCtrl;
        _this.platform = platform;
        _this.dataService = dataService;
        _this.jsonStore = jsonStore;
        _this.loadingCtrl = loadingCtrl;
        _this.formtypsave = formtypsave;
        _this.siteAddress = siteAddress;
        _this.pageTitle = 'Compliance Form';
        _this.master = 'Compliant List Page';
        _this.items = "";
        _this.formtypeSubmit = [];
        _this.condiStatus = false;
        _this.isReadonly = true;
        _this.selectDisabled = true;
        _this.selectOptions = {};
        _this.OfficeAddress = {};
        _this.phoneOfficeNum = [];
        _this.eviItemArray = [];
        _this.shoeEviItem = true;
        _this.formB = 'agree';
        _this.validateAnamoly = false;
        _this.columns1 = [];
        _this.regionSelect = false;
        _this.officeAddressSelect = false;
        _this.stateSelect2 = false;
        _this.check = true;
        _this.ano = false;
        _this.datedSelected = false;
        _this.datetimeformA = false;
        _this.delivery = false;
        _this.deliveryD = false;
        _this.deliveryT = false;
        _this.deliveryN = false;
        _this.receiverN = false;
        _this.supplyD = false;
        _this.supplyT = false;
        _this.supplyN = false;
        _this.reconnectionD = false;
        _this.reconnectionT = false;
        _this.reconnectionN = false;
        _this.dateCess = false;
        _this.fromInspectDate = false;
        _this.ToinspectDate = false;
        _this.NameCust = false;
        _this.icNo = false;
        _this.dateTime = false;
        _this.officeNo = false;
        _this.attendence = false;
        _this.zone = false;
        _this.staffNameSelect = false;
        _this.checkSign1 = false;
        _this.checkSign2 = false;
        _this.wittNames = false;
        _this.IcnoStff = false;
        _this.IcnoWittnss = false;
        _this.dateCurrentEvi = false;
        _this.timeCurrent = false;
        _this.eviItem = false;
        _this.itemValEvi = false;
        _this.eviTempDmg = false;
        _this.stationEvi = false;
        _this.crrTime = false;
        _this.offceName = false;
        _this.telNo = false;
        _this.submitDateTime = false;
        _this.officeNameSelect = false;
        _this.formBState = false;
        _this.formBDate = false;
        _this.formBStartInteruptTime = false;
        _this.formBEndInteruptTime = false;
        _this.formBPurpose = false;
        _this.formBDated = false;
        _this.pdfObj = null;
        _this.pdfObj2 = null;
        _this.pdfBase64 = [];
        _this.formSelected = true;
        _this.exactData = [];
        _this.myIndex = 0;
        _this.customOptionsDiscon = {
            buttons: [
                {
                    text: 'Clear',
                    handler: function (data) {
                        console.log('datetime, clear', data);
                        _this.disconnect.ta4starttime = "";
                    }
                }
            ]
        };
        _this.customOptionsRecon = {
            buttons: [
                {
                    text: 'Clear',
                    handler: function (data) {
                        console.log('datetime, clear', data);
                        _this.reconnect.ta4starttime = "";
                    }
                }
            ]
        };
        _this.selectOptions = {
            title: 'Address'
        };
        _this.OfficeAddress = {
            title: 'Zone'
        };
        _this.executiveDetails = {
            title: 'Executive Name'
        };
        _this.signaturePadOptions = {
            minWidth: 1,
            canvasWidth: 300,
            canvasHeight: 120,
            backgroundColor: '#f6fbff',
            penColor: '#666a73'
        };
        _this.form = new __WEBPACK_IMPORTED_MODULE_9__pojo_complianceForm__["a" /* ComplianceTypes */]();
        _this.describedBy = new __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__["a" /* DescribedBy */]();
        _this.formType = navParams.get('formType');
        _this.formlist = navParams.get('item');
        _this.fIndex = navParams.get("fIndex");
        _this.maIndex = navParams.get("maIndex");
        _this.itemOri = navParams.get('paramObj');
        _this.serviceDetails = navParams.get('serviceDetails');
        if (!_this.itemOri.json.hasOwnProperty('complaince')) {
            if (typeof (_this.itemOri.json.complaince) === "undefined" || _this.itemOri.json.complaince === null || _this.itemOri.json.complaince === "") {
                _this.itemOri.json.complaince = [];
            }
        }
        _this.accountNo = _this.itemOri.json.ta0accountnum;
        _this.stationCode = _this.itemOri.json.siteid;
        _this.customerName = _this.itemOri.json.ta0bpname;
        _this.customerAddress = _this.itemOri.json.woserviceaddress[0].formattedaddress;
        _this.staffId = _this.itemOri.json.assignment[0].laborcode;
        _this.staffName = _this.gv.displayname;
        var columnsAddress = [];
        var addressItem = [];
        var streetname = _this.itemOri.json.woserviceaddress[0].streetaddress;
        var address1 = _this.itemOri.json.woserviceaddress[0].addressline2;
        var address2 = _this.itemOri.json.woserviceaddress[0].addressline3;
        var address3 = _this.itemOri.json.woserviceaddress[0].addressline4;
        var city = _this.itemOri.json.woserviceaddress[0].city;
        // var countryShort = this.itemOri.json.woserviceaddress[0].country;
        var poscode = _this.itemOri.json.woserviceaddress[0].postalcode;
        var country = _this.itemOri.json.woserviceaddress[0].regiondistrict;
        //var combinePostCodeCity = city + ", " + poscode; //005
        //005 start
        var combinePostCodeCity = poscode;
        if (city !== undefined) {
            combinePostCodeCity = city + ", " + poscode;
        }
        console.log('combinePostCodeCity : ' + combinePostCodeCity);
        //005 end
        var tnblogo = '../www/assets/imgs/tnbLogoResize.png';
        _this.wonum = _this.itemOri.json.wonum;
        _this.signatureImage = navParams.get('../assets/img/logo.png');
        // Create Address format
        columnsAddress.push('column1');
        if (address2 === undefined) {
            //addressItem.push([address1, combinePostCodeCity, country]);   //002      
            if (streetname === undefined) {
                console.log('option 1');
                addressItem.push([address1, combinePostCodeCity, country]);
            }
            else {
                console.log('option 2');
                addressItem.push([streetname, address1, combinePostCodeCity, country]); //002
            }
            //} else if (typeof (address3) === 'undefined') {       //002
        }
        else {
            if (streetname === undefined) {
                console.log('option 3');
                addressItem.push([address1, address2, combinePostCodeCity, country]);
            }
            else {
                console.log('option 4');
                addressItem.push([streetname, address1, address2, combinePostCodeCity, country]);
            }
        }
        var arrayToString = addressItem.toString();
        console.log("address : " + arrayToString);
        _this.tempAddress = _this.addressTableArray(addressItem, columnsAddress);
        debugger;
        var mainMeter = [];
        var leadName;
        var leadSign;
        var customer_Name;
        var customer_IC;
        var customer_phone;
        var customer;
        var tempData;
        for (var a = 0; a < _this.itemOri.json.ta0feeder.length; a++) {
            _this.itemOri.json.ta0feeder[a].multiassetlocci.filter(function (item) {
                /**
                 * Description: Change condition to allow meter existing only to capture the test data.
                 * Edited: Alif (14.01.2020)
                 */
                if ((item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN) && (item.ta0allocationtype === __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER)) {
                    mainMeter.push(item);
                }
            });
        }
        ;
        // Convert String to JSON Array
        var ta4testdata_temp = [];
        // Checking whether is string or array
        if (mainMeter[0].hasOwnProperty("ta4testdata")) {
            if (Array.isArray((mainMeter[0].ta4testdata))) {
                ta4testdata_temp = mainMeter[0].ta4testdata;
            }
            else {
                ta4testdata_temp = JSON.parse(mainMeter[0].ta4testdata);
            }
            while (!Array.isArray(ta4testdata_temp)) {
                ta4testdata_temp = JSON.parse(ta4testdata_temp);
            }
        }
        if (mainMeter.length > 0) {
            customer = ta4testdata_temp.find(function (item) {
                return item.ta0testtype === __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_WTNS;
            });
            if (typeof (customer) === 'undefined') {
                tempData = ta4testdata_temp.find(function (item) {
                    if (item.type === "inspection") {
                        return customer = item.data;
                    }
                });
            }
        }
        if (typeof (customer) !== 'undefined' && customer !== null) {
            if (typeof (customer.ta0witnessname) !== 'undefined' && customer.ta0witnessname !== null) {
                customer_Name = customer.ta0witnessname;
            }
            else if (typeof (customer.ta4wit_name) !== 'undefined' && customer.ta4wit_name !== null && customer.ta4wit_name != "") {
                customer_Name = customer.ta4wit_name;
            }
            else if (typeof (customer.ta4witRemarks) !== 'undefined' && customer.ta4witRemarks !== null && customer.ta4witRemarks !== "") {
                customer_Name = customer.ta4witRemarks;
            }
            else {
                customer_Name = '';
            }
            if (typeof (customer.ta0witnessicpassport) !== 'undefined' && customer.ta0witnessicpassport !== null) {
                customer_IC = customer.ta0witnessicpassport;
            }
            else if (typeof (customer.ta4wit_no) !== 'undefined' && customer.ta4wit_no !== null) {
                customer_IC = customer.ta4wit_no;
            }
            else {
                customer_IC = '';
            }
            if (typeof (customer.ta0witnessphone) !== 'undefined' && customer.ta0witnessphone !== null) {
                customer_phone = customer.ta0witnessphone;
            }
            else {
                customer_phone = '';
            }
            if (typeof (customer.ta0officer_sign) !== 'undefined' && customer.ta0officer_sign !== null) {
                leadSign = customer.ta0officer_sign;
                _this.signatureStaff = leadSign;
            }
            else if (typeof customer.ta0examiner_sign !== 'undefined' && customer.ta0examiner_sign !== null) {
                leadSign = customer.ta0examiner_sign;
                _this.signatureStaff = leadSign;
            }
            else if (typeof (customer.ta4staff_sign) !== 'undefined' && customer.ta4staff_sign !== null) {
                leadSign = customer.ta4staff_sign;
                _this.signatureStaff = leadSign;
            }
            else {
                leadSign = '';
            }
            if (typeof (customer.ta0officer_name) !== 'undefined' && customer.ta0officer_name != null) {
                leadName = customer.ta0officer_name;
            }
            else if (typeof (customer.ta0examinername) !== 'undefined' && customer.ta0examinername != null) {
                leadName = customer.ta0examinername;
            }
            else if (typeof (customer.ta4staff_name) !== 'undefined' && customer.ta4staff_name !== null) {
                leadName = customer.ta4staff_name;
            }
            else {
                leadName = '';
            }
        }
        else {
            leadSign = '';
            leadName = '';
            customer_Name = '';
            customer_IC = '';
            customer_phone = '';
        }
        console.log("constructor >>>formType : " + _this.formType);
        _this.dateCur = new Date();
        switch (_this.formType) {
            case "formACust": {
                // setting actual start date
                if (typeof _this.itemOri.json.wol4 !== 'undefined' && _this.itemOri.json.wol4 !== null && _this.itemOri.json.wol4 !== '') {
                    _this.formCust.ta4datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("YYYY-MM-DDTHH:mmZ");
                    _this.formCust.ta4indatetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                }
                else {
                    _this.formCust.ta4datetime = '';
                    _this.formCust.ta4indatetime = '';
                }
                if (typeof _this.itemOri.json.ta0plandiscondate !== 'undefined' && _this.itemOri.json.ta0plandiscondate !== null && _this.itemOri.json.ta0plandiscondate !== '') {
                    // this.formCust.ta4starttime = this.itemOri.json.ta0plandiscondate;
                    _this.formCust.ta4starttime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.ta0plandiscondate).format("DD/MM/YYYY");
                }
                else {
                    _this.formCust.ta4starttime = '';
                }
                _this.formCust.ta4accountno = _this.accountNo;
                _this.formCust.station = _this.stationCode;
                _this.deliver.ta4staffname = _this.staffName;
                _this.deliver.ta4witnessname = customer_Name;
                if (_this.itemOri.json.ta4anomalyremarks !== null && typeof (_this.itemOri.json.ta4anomalyremarks) !== 'undefined' && _this.itemOri.json.ta4anomalyremarks !== '') {
                    _this.formCust.ta4anamoly = _this.itemOri.json.ta4anomalyremarks;
                }
                else {
                    _this.formCust.ta4anamoly = '';
                }
                _this.formCust.ta4custaddress = arrayToString;
                _this.formCust.ta4custname = _this.customerName;
                _this.formatTimeDisplay();
                break;
            }
            case 'formEvidenceCollect': {
                var curr_date = _this.dateCur.getDate();
                var curr_month = _this.dateCur.getMonth() + 1; //Months are zero based
                var curr_year = _this.dateCur.getFullYear();
                // setting actual start date
                if (typeof _this.itemOri.json.wol4 !== 'undefined' && _this.itemOri.json.wol4 !== null && _this.itemOri.json.wol4 !== '') {
                    _this.evidenceCollect.ta4datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                    _this.evidenceCollect.ta4starttime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("HH:mm");
                    // this.evidenceCollect.ta4endtime = moment(this.itemOri.json.actstart).format("HH:mm");
                    // this.evidenceCollect.ta4indatetime = moment(this.itemOri.json.actstart).format("DD/MM/YYYY");
                }
                else {
                    _this.evidenceCollect.ta4datetime = '';
                    _this.evidenceCollect.ta4starttime = '';
                    // this.evidenceCollect.ta4endtime = '';
                    // this.evidenceCollect.ta4indatetime = '';
                }
                _this.evidenceCollect.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;
                _this.evidenceCollect.ta4custname = _this.customerName;
                _this.evidenceCollect.ta4custaddress = arrayToString;
                var currentTime;
                currentTime = __WEBPACK_IMPORTED_MODULE_22_moment__().format('HH:mm');
                var timeCust = __WEBPACK_IMPORTED_MODULE_22_moment__().format('HH:mm');
                // this.evidenceCollect.ta4starttime = currentTime;
                _this.evidenceCollect.ta4endtime = timeCust;
                _this.evidenceCollect.ta4staffno = _this.staffId;
                _this.evidenceCollect.ta4staffname = _this.staffName;
                _this.evidenceCollect.ta4accountno = _this.accountNo;
                _this.evidenceCollect.station = _this.stationCode;
                _this.evidenceCollect.ta4witnessname = customer_Name;
                _this.evidenceCollect.ta4witnessidenkard = customer_IC;
                _this.typeform();
                console.log("constructor >>> trigger getZoneData ");
                _this.getZoneData();
                break;
            }
            case 'installationInspection': {
                var dataTime = __WEBPACK_IMPORTED_MODULE_22_moment__().format("YYYY-MM-DDTHH:mmZ");
                // setting actual start date
                if (typeof _this.itemOri.json.wol4 !== 'undefined' && _this.itemOri.json.wol4 !== null && _this.itemOri.json.wol4 !== '') {
                    _this.installationInspection.ta4indatetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                    _this.installationInspection.ta4endtime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("HH:mm");
                    // this.installationInspection.ta4datetime = moment(this.itemOri.json.actstart).format("YYYY-MM-DDTHH:mmZ");
                }
                else {
                    _this.installationInspection.ta4indatetime = '';
                }
                var curr_date = _this.dateCur.getDate();
                var curr_month = _this.dateCur.getMonth() + 1; //Months are zero based
                var curr_year = _this.dateCur.getFullYear();
                // this.installationInspection.ta4endtime = new Date().toLocaleTimeString();
                // this.installationInspection.ta4endtime = moment().format("HH:mm");
                _this.installationInspection.ta4custname = _this.customerName;
                _this.installationInspection.ta4custaddress = arrayToString;
                _this.installationInspection.ta4staffname = _this.staffName;
                _this.installationInspection.ta4staffno = _this.staffId;
                // this.installationInspection.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;
                _this.installationInspection.ta4accountno = _this.accountNo;
                _this.installationInspection.ta4witnessname = customer_Name;
                if (typeof (customer_phone) !== "undefined" && customer_phone !== null && customer_phone !== "") {
                    _this.installationInspection.ta4witnessphone = customer_phone;
                }
                _this.installationInspection.ta4datetime = dataTime;
                _this.formatTimeDisplay();
                _this.typeform();
                console.log("constructor >>> trigger getZoneData ");
                _this.getZoneData();
                break;
            }
            case 'tempCeassation': {
                // setting actual start date 003
                console.log("completion date : " + _this.itemOri.json.wol4);
                if (_this.itemOri.json.wol4 !== 'undefined' && _this.itemOri.json.wol4 !== null && _this.itemOri.json.wol4 !== '') {
                    _this.tempCeassation.ta4indatetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                    _this.formBCess.ta4datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                    _this.tempCeassation.ta4datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                }
                else {
                    _this.tempCeassation.ta4indatetime = '';
                    _this.formBCess.ta4datetime = '';
                }
                /* 003
                if (typeof this.itemOri.json.ta0plandiscondate !== 'undefined' && this.itemOri.json.ta0plandiscondate !== null && this.itemOri.json.ta0plandiscondate !== '') {
                  this.tempCeassation.ta4indatetime = moment(this.itemOri.json.ta0plandiscondate).format("DD/MM/YYYY");
                  this.formBCess.ta4datetime = moment(this.itemOri.json.ta0plandiscondate).format("DD/MM/YYYY");
                } else {
                  this.tempCeassation.ta4indatetime = '';
                  this.formBCess.ta4datetime = '';
                }
                */
                var dataTime = __WEBPACK_IMPORTED_MODULE_22_moment__().format("YYYY-MM-DDTHH:mmZ");
                var curr_date = _this.dateCur.getDate();
                var curr_month = _this.dateCur.getMonth() + 1; //Months are zero based
                var curr_year = _this.dateCur.getFullYear();
                _this.tempCeassation.ta4staffname = _this.staffName;
                _this.tempCeassation.ta4staffno = _this.staffId;
                _this.tempCeassation.ta4custname = _this.customerName;
                _this.formBCess.ta4custname = _this.customerName;
                // this.tempCeassation.ta4datetime = curr_date + '/' + curr_month + '/' + curr_year;
                if (typeof (_this.tempCeassation.ta4agree) === "undefined" || _this.tempCeassation.ta4agree === null || _this.tempCeassation.ta4agree === "") {
                    _this.tempCeassation.ta4agree = true;
                }
                _this.formBCess.tenant = arrayToString;
                _this.formBCess.ta4custaddress = arrayToString;
                _this.formBCess.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;
                _this.tempCeassation.ta4witnessname = customer_Name;
                _this.tempCeassation.ta4witnessidenkard = customer_IC;
                _this.tempCeassation.datetime = dataTime;
                _this.formatTimeDisplay();
                break;
            }
            case 'inspect&Test': {
                // setting actual start date
                if (typeof _this.itemOri.json.wol4 !== 'undefined' && _this.itemOri.json.wol4 !== null && _this.itemOri.json.wol4 !== '') {
                    _this.inspectNTest.ta4datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(_this.itemOri.json.wol4).format("DD/MM/YYYY");
                }
                else {
                    _this.inspectNTest.ta4datetime = '';
                }
                var curr_date = _this.dateCur.getDate();
                var curr_month = _this.dateCur.getMonth() + 1; //Months are zero based
                var curr_year = _this.dateCur.getFullYear();
                // this.inspectNTest.ta4datetime = curr_date + '/' + curr_month + '/' + curr_year;
                _this.inspectNTest.ta4staffname = _this.staffName;
                _this.inspectNTest.ta4staffno = _this.staffId;
                _this.inspectNTest.ta4custname = _this.customerName;
                _this.inspectNTest.ta4custaddress = arrayToString;
                _this.inspectNTest.ta4department = _this.gv.exeDept;
                break;
            }
            case 'prejudiceForm': {
                _this.prejude.ta4custname = _this.customerName;
                _this.prejude.ta4custaddress = arrayToString;
                break;
            }
        }
        console.log("Trigger this.findZonebySiteId");
        _this.findZoneBySiteId();
        return _this;
    }
    /**
     * Created: Ameer (view back the image when open the page back after save)
     * Date: 18/2/2019
     */
    ComplaintFormPage.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    /**
     * Create by Ameer
     * Select All of the checkbox and convert it into image that will appear at PDF
     */
    ComplaintFormPage.prototype.checkboxSlct = function () {
        debugger;
        switch (this.formCust.subsection1) {
            case true:
                this.formCust.ta4ss1tampers = true;
                this.formCust.ta4ss3abstracts = this.formCust.ta4ss3consumer = this.formCust.ta4ss3uses = this.formCust.ta4ss3afterindex = this.formCust.ta4ss3prevents = this.formCust.ta4ss14damages = true;
                break;
            case false:
                this.formCust.ta4ss1tampers = false;
                this.formCust.ta4ss3abstracts = this.formCust.ta4ss3consumer = this.formCust.ta4ss3uses = this.formCust.ta4ss3afterindex = this.formCust.ta4ss3prevents = this.formCust.ta4ss14damages = false;
                break;
        }
        switch (this.formCust.ta4ss1tampers) {
            case true:
                this.formCust.subsectionBase2 = '/';
                break;
            case false:
                this.formCust.subsectionBase2 = '';
                break;
            default:
                this.formCust.subsectionBase2 = '';
        }
        switch (this.formCust.ta4ss3abstracts) {
            case true:
                this.formCust.subsectionBase3 = '/';
                break;
            case false:
                this.formCust.subsectionBase3 = '';
                break;
            default:
                this.formCust.subsectionBase3 = '';
        }
        switch (this.formCust.ta4ss3consumer) {
            case true:
                this.formCust.subsectionBase4 = '/';
                break;
            case false:
                this.formCust.subsectionBase4 = '';
                break;
            default:
                this.formCust.subsectionBase4 = '';
        }
        switch (this.formCust.ta4ss3uses) {
            case true:
                this.formCust.subsectionBase5 = '/';
                break;
            case false:
                this.formCust.subsectionBase5 = '';
                break;
            default:
                this.formCust.subsectionBase5 = '';
        }
        switch (this.formCust.ta4ss3afterindex) {
            case true:
                this.formCust.subsectionBase6 = '/';
                break;
            case false:
                this.formCust.subsectionBase6 = '';
                break;
            default:
                this.formCust.subsectionBase6 = '';
        }
        switch (this.formCust.ta4ss3prevents) {
            case true:
                this.formCust.subsectionBase7 = '/';
                break;
            case false:
                this.formCust.subsectionBase7 = '';
                break;
            default:
                this.formCust.subsectionBase7 = '';
        }
        switch (this.formCust.ta4ss14damages) {
            case true:
                this.formCust.subsectionBase8 = '/';
                break;
            case false:
                this.formCust.subsectionBase8 = '';
                break;
            default:
                this.formCust.subsectionBase8 = '';
        }
    };
    /**
     * Create by Ameer
     * Radio button selected at PDF will appear as and image where will be tick image or cross image
     */
    ComplaintFormPage.prototype.checkforRadio = function () {
        debugger;
        if (this.inspectNTest.ta4attendance === 'pre') {
            this.inspectNTest.absent = '';
            this.inspectNTest.present = '/';
        }
        else if (this.inspectNTest.ta4attendance === 'abs') {
            this.inspectNTest.ta4agree === false;
            this.inspectNTest.absent = '/';
            this.inspectNTest.present = '';
        }
    };
    ComplaintFormPage.prototype.ionViewDidLoad = function () {
        //load executive list
        this.loadlookup();
        /*
        var jsonString = { 'siteid': this.itemOri.json.siteid };
        //this.dataService.fetchExecutiveDetails(this.itemOri, this.gv.department, 'TA0ZONELIST', jsonString).then(result => {
        this.dataService.fetchExecutiveDetails().then(result => {
          debugger;
          let execRsult;
          execRsult = result;
          this.execDetails = result;
          for (var a = 0; a < execRsult.length; a++) {
            this.exactData.push(execRsult[a].name);
          }
          this.getPostion();
          console.log("Executive Data ", this.exactData);
        });
        */
    };
    ComplaintFormPage.prototype.loadlookup = function () {
        var _this = this;
        console.log("enter to collect list executive based on site id: " + this.itemOri.json.siteid);
        debugger;
        console.log('Query Zone by siteid');
        var queryPart = WL.JSONStore.QueryPart().equal("siteid", this.itemOri.json.siteid);
        console.log('queryPart : ' + JSON.stringify(queryPart));
        this.jsonStore.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_Domains__["a" /* Domains */].Zone, queryPart)
            .then(function (result) {
            console.log('result : ' + JSON.stringify(result));
            var zoneName = result[0].json.ta0zone;
            var queryPart = { $equal: [{ 'department': _this.gv.department }, { 'zone': zoneName }] };
            console.log('queryPart : ' + JSON.stringify(queryPart));
            debugger;
            _this.jsonStore.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_Domains__["a" /* Domains */].Executive, queryPart)
                .then(function (results) {
                debugger;
                _this.executiveList = results;
                for (var a = 0; a < _this.executiveList.length; a++) {
                    _this.exactData.push(_this.executiveList[a].json.name);
                }
                console.log('executiveList : ' + JSON.stringify(_this.executiveList));
            }).catch(function (error) {
                console.log('executiveList service failure : ' + JSON.stringify(error));
            });
        }).catch(function (error) {
            console.log('zone service failure : ' + JSON.stringify(error));
        });
    };
    /**
     *
     * @param data
     * Create by Ameer
     * to add item dynamically that will appear at PDF
     * @param columns
     */
    ComplaintFormPage.prototype.buildTableBody = function (data, columns) {
        var countR = 1;
        var countC = 0;
        var body = [];
        if (this.pdfLanguage === 'eng') {
            body.push(['BIL', 'EVIDENCE ITEM', 'DETAIL OF EVIDENCE']);
        }
        else if (this.pdfLanguage === 'bhs') {
            body.push(['BIL', 'BAHAN BUKTI', 'KEJANGGALAN BAHAN BUKTI']);
        }
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
        return body;
    };
    ComplaintFormPage.prototype.addressTableArray = function (data, columns) {
        // let countR = 1;
        var countR = 0;
        var countC = 0;
        var body = [];
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var rowval = data_2[_i];
            var dataRow = [];
            //  dataRow.splice(0, 0, countR);
            dataRow.push(rowval);
            countC++;
            body.push(dataRow);
            countR++;
        }
        return body;
    };
    /**
    * create by Ameer
    * Validation all mandatory field for inspection form
    */
    ComplaintFormPage.prototype.validateInspectInstall = function () {
        debugger;
        this.check = true;
        if (this.installationInspection.ta4endtime == '' || this.installationInspection.ta4endtime == undefined) {
            this.crrTime = true;
            this.check = false;
        }
        if (this.installationInspection.ta4witnessname == '' || this.installationInspection.ta4witnessname == undefined) {
            this.installationInspection.ta4witnessname = '-';
        }
        if (this.installationInspection.ta4officephone == '' || typeof (this.installationInspection.ta4officephone) == "undefined") {
            this.installationInspection.ta4officephone = '-';
        }
        if (this.installationInspection.ta4datetime == '' || typeof (this.installationInspection.ta4datetime) == "undefined") {
            // this.submitDateTime = true;
            this.installationInspection.ta4datetime = '-';
        }
        if (this.installationInspection.ta4department == '' || this.installationInspection.ta4department == undefined) {
            this.officeNameSelect = true;
            this.check = false;
        }
        if (this.installationInspection.ta4officeaddress === undefined) {
            this.officeAddressSelect = true;
            this.check = false;
        }
        if (this.installationInspection.ta4serialNum == '' || this.installationInspection.ta4serialNum == undefined) {
            this.installationInspection.ta4serialNum = '';
            // this.check = true;
        }
        if (this.installationInspection.ta4witnessphone == '' || this.installationInspection.ta4witnessphone == undefined) {
            this.installationInspection.ta4witnessphone = '-';
            // this.check = true;
        }
        return this.check;
    };
    /**
     * create by Ameer
     * Validation all mandatory field for Collection evidance form
     */
    ComplaintFormPage.prototype.validateEvidence = function () {
        debugger;
        var i, j;
        for (i in this.evidenceCollect.evidenceItem) {
            this.evidenceCollect.evidenceItem[i].ta4item;
        }
        for (j in this.evidenceCollect.evidenceItem) {
            this.evidenceCollect.evidenceItem[j].ta4describe;
        }
        this.check = true;
        if (this.evidenceCollect.ta4witnessname == '' || this.evidenceCollect.ta4witnessname == undefined) {
            this.evidenceCollect.ta4witnessname = '-';
            this.check = true;
        }
        if (this.evidenceCollect.ta4staffindenkard == '' || this.evidenceCollect.ta4staffindenkard == undefined) {
            this.evidenceCollect.ta4staffindenkard = '-';
            this.check = true;
        }
        if (this.evidenceCollect.ta4witnessidenkard == '' || this.evidenceCollect.ta4witnessidenkard == undefined) {
            this.evidenceCollect.ta4witnessidenkard = '-';
            this.check = true;
        }
        if (this.evidenceCollect.ta4indatetime == '' || this.evidenceCollect.ta4indatetime == undefined) {
            this.evidenceCollect.ta4indatetime = '-';
            this.check = true;
        }
        if (this.evidenceCollect.ta4endtime == '' || this.evidenceCollect.ta4endtime == undefined) {
            this.evidenceCollect.ta4endtime = '-';
            this.check = true;
        }
        if (this.evidenceCollect.evidenceItem === undefined || this.evidenceCollect.evidenceItem === null) {
            this.eviItem = true;
            this.check = false;
        }
        else {
            this.eviItem = false;
        }
        if (this.eviItem === false) {
            if (this.evidenceCollect.evidenceItem[i].ta4item === "" || typeof (this.evidenceCollect.evidenceItem[i].ta4item) == 'undefined') {
                this.itemValEvi = true;
                this.check = false;
            }
            else {
                this.itemValEvi = false;
            }
            if (this.evidenceCollect.evidenceItem[i].ta4describe === "" || typeof (this.evidenceCollect.evidenceItem[i].ta4describe) == 'undefined') {
                this.eviTempDmg = true;
                this.check = false;
            }
            else {
                this.eviTempDmg = false;
            }
        }
        if (this.evidenceCollect.officeAddress === '' || typeof (this.evidenceCollect.officeAddress) == 'undefined') {
            this.stationEvi = true;
            this.check = false;
        }
        else {
            this.check = true;
        }
        return this.check;
    };
    /**
    * create by Ameer
    * Validation all mandatory field for inspection and testing form
    */
    ComplaintFormPage.prototype.validateInspectNTest = function () {
        this.check = true;
        if (this.inspectNTest.ta4attendance == undefined) {
            this.attendence = true;
            this.check = false;
        }
        else {
            this.attendence = false;
        }
        if (this.inspectNTest.staffNameCheck == undefined || this.inspectNTest.staffNameCheck == null) {
            this.staffNameSelect = true;
            this.check = false;
        }
        else {
            this.staffNameSelect = false;
        }
        if (this.signaturePad2.isEmpty()) {
            this.checkSign2 = true;
            this.check = false;
        }
        else {
            this.checkSign2 = false;
        }
        return this.check;
    };
    /**
     * create by Ameer
     * Validation all mandatory field for Cessation form
     * Edited: 25/6/2019 (Ameer) - Add checking for Form B if available
     */
    ComplaintFormPage.prototype.validateCessFrom = function () {
        this.check = true;
        if (this.tempCeassation.ta4indatetime == '' || this.tempCeassation.ta4indatetime == undefined) {
            this.dateCess = true;
            this.check = false;
        }
        else {
            this.dateCess = false;
        }
        if (this.tempCeassation.ta4endtime == '' || this.tempCeassation.ta4endtime == undefined) {
            this.fromInspectDate = true;
            this.check = false;
        }
        else {
            this.fromInspectDate = false;
        }
        if (this.tempCeassation.ta4starttime == '' || this.tempCeassation.ta4starttime == undefined) {
            this.ToinspectDate = true;
            this.check = false;
        }
        else {
            this.ToinspectDate = false;
        }
        if (this.tempCeassation.ta4witnessname == '' || this.tempCeassation.ta4witnessname == undefined) {
            this.tempCeassation.ta4witnessname = '-';
        }
        if (this.tempCeassation.ta4witnessidenkard == '' || this.tempCeassation.ta4witnessidenkard == undefined) {
            this.tempCeassation.ta4witnessidenkard = '-';
        }
        if (this.tempCeassation.datetime == '' || this.tempCeassation.datetime == undefined) {
            this.tempCeassation.datetime = '';
        }
        if (this.tempCeassation.ta4agree === false) {
            this.validationFormB();
        }
        return this.check;
    };
    /**
     * Created By Ameer
     * Validate for Form B
     * Date: 25/6/2019
     */
    ComplaintFormPage.prototype.validationFormB = function () {
        debugger;
        this.check = true;
        if (this.formBCess.ta4statename == '' || this.formBCess.ta4statename == undefined) {
            this.formBState = true;
            this.check = false;
        }
        else {
            this.formBState = false;
        }
        if (this.formBCess.ta4datetime == '' || this.formBCess.ta4datetime == undefined) {
            this.formBDate = true;
            this.check = false;
        }
        else {
            this.formBDate = false;
        }
        if (this.formBCess.ta4starttime == '' || this.formBCess.ta4starttime == undefined) {
            this.formBStartInteruptTime = true;
            this.check = false;
        }
        else {
            this.formBStartInteruptTime = false;
        }
        if (this.formBCess.ta4endtime == '' || this.formBCess.ta4endtime == undefined) {
            this.formBEndInteruptTime = true;
            this.check = false;
        }
        else {
            this.formBEndInteruptTime = false;
        }
        if (this.formBCess.ta4purpose == '' || this.formBCess.ta4purpose == undefined) {
            this.formBPurpose = true;
            this.check = false;
        }
        else {
            this.formBPurpose = false;
        }
        if (this.formBCess.ta4indatetime == '' || this.formBCess.ta4indatetime == undefined) {
            this.formBDated = true;
            this.check = false;
        }
        else {
            this.formBDated = false;
        }
        return this.check;
    };
    /**
     * Create by Ameer
     * Validation all mandatory field for SCHEDULE FORM A form
     */
    ComplaintFormPage.prototype.formValidate = function () {
        this.check = true;
        debugger;
        if (this.deliver.ta4describe === undefined || this.deliver.ta4describe === null) {
            this.deliver.ta4describe = "";
        }
        if (this.disconnect.ta4describe === undefined || this.disconnect.ta4describe === null) {
            this.disconnect.ta4describe = "";
        }
        if (this.reconnect.ta4describe === undefined || this.reconnect.ta4describe === null) {
            this.reconnect.ta4describe = "";
        }
        if (this.formCust.ta4statename == '' || this.formCust.ta4statename == undefined || this.formCust.ta4statename == __WEBPACK_IMPORTED_MODULE_3_rxjs_Observer__["empty"]) {
            this.stateSelect2 = true;
        }
        else {
            this.stateSelect2 = false;
        }
        if (this.formCust.ta4anamoly == '' || this.formCust.ta4anamoly == undefined) {
            this.ano = true;
        }
        else {
            this.ano = false;
        }
        if (this.formCust.ta4indatetime == '' || this.formCust.ta4indatetime == undefined) {
            this.datedSelected = true;
        }
        else {
            this.datedSelected = false;
        }
        if (this.formCust.ta4datetime == '' || this.formCust.ta4datetime == undefined) {
            this.datetimeformA = true;
        }
        else {
            // this.formCust.ta4datetime = moment().format('DD/MM/YYYY HH:mm');
            this.formCust.datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(this.formCust.ta4datetime).format('DD/MM/YYYY HH:mm');
            this.datetimeformA = false;
        }
        if (this.deliver.ta4indatetime == '' || this.deliver.ta4indatetime == undefined) {
            this.deliveryD = true;
        }
        else {
            this.deliveryD = false;
        }
        if (this.deliver.ta4starttime == '' || this.deliver.ta4starttime == undefined) {
            this.deliveryT = true;
        }
        else {
            this.deliveryT = false;
        }
        if ((this.deliver.ta4staffname == '' || this.deliver.ta4staffname == undefined) || (this.signaturePad2.isEmpty())) {
            this.deliveryN = true;
        }
        else {
            this.deliveryN = false;
        }
        if ((this.deliver.ta4witnessname == '' || this.deliver.ta4witnessname == undefined)) {
            this.receiverN = true;
        }
        else {
            this.receiverN = false;
        }
        // Discconection Section
        if (this.disconnect.ta4datetime == '' || this.disconnect.ta4datetime == undefined) {
            this.disconnect.ta4datetime = '';
        }
        if (this.disconnect.ta4starttime == '' || this.disconnect.ta4starttime == undefined) {
            this.disconnect.ta4starttime = '';
        }
        if (this.disconnect.ta4staffname == '' || this.disconnect.ta4staffname == undefined) {
            this.disconnect.ta4staffname = '';
        }
        // Checking for reconnection
        if (this.reconnect.ta4datetime == '' || this.reconnect.ta4datetime == undefined) {
            this.reconnect.ta4datetime = '';
        }
        if (this.reconnect.ta4starttime == '' || this.reconnect.ta4starttime == undefined) {
            this.reconnect.ta4starttime = '';
        }
        if (this.reconnect.ta4staffname == '' || this.reconnect.ta4staffname == undefined) {
            this.reconnect.ta4staffname = '';
        }
        if (this.formCust.ta4officeaddress === undefined) {
            this.officeAddressSelect = true;
        }
        else {
            this.officeAddressSelect = false;
        }
        if (this.officeAddressSelect === true ||
            this.deliveryN === true ||
            this.deliveryD === true ||
            this.datetimeformA === true ||
            this.ano === true ||
            this.stateSelect2 === true ||
            this.receiverN === true) {
            this.check = false;
        }
        else {
            this.check = true;
        }
        return this.check;
    };
    /**
     * create by Ameer
     * Validation all mandatory form for Prejudice form
     */
    ComplaintFormPage.prototype.validatePrejudice = function () {
        this.check = true;
        if (this.prejude.ta4officeaddress == '' || this.prejude.ta4officeaddress == undefined) {
            this.officeAddressSelect = true;
            this.check = false;
        }
        else {
            this.officeAddressSelect = false;
        }
        return this.check;
    };
    /**
     * Create by Ameer
     * Add new field when user select plus symbol at evidence collect
     */
    ComplaintFormPage.prototype.addEviItem = function () {
        debugger;
        if (typeof (this.evidenceCollect.evidenceItem) === 'undefined') {
            this.evidenceCollect.evidenceItem = [];
        }
        if (this.evidenceCollect.evidenceItem.length <= 9) {
            var eviVal = {
                ta4item: '',
                ta4describe: ''
            };
            this.evidenceCollect.evidenceItem.push(eviVal);
            this.eviItem = false;
            if (this.evidenceCollect.evidenceItem == 10) {
                this.shoeEviItem = false;
            }
        }
    };
    /**
     * Create by Ameer
     * Add new field when user select plus symbol at evidence collect
     */
    ComplaintFormPage.prototype.deleteEviItem = function (itemIndex) {
        if (itemIndex !== 0) {
            this.evidenceCollect.evidenceItem.pop();
            if (this.evidenceCollect.evidenceItem.length < 10) {
                this.shoeEviItem = true;
            }
        }
        else {
            console.log('cannot delete the first row');
        }
    };
    //create by Ameer
    //Date popup selection function
    ComplaintFormPage.prototype.presentPopover = function (myEvent, popType) {
        var _this = this;
        var data = { 'parentValue': 'kanna' };
        var popover = this.popoverCtrl.create('SdPopupPage', {
            'parentWoValue': this,
            'popType': popType,
            'dataType': 'complaints',
        });
        if (myEvent.target.value == "") {
            popover.present({
                ev: myEvent
            });
        }
        else {
            // Popup Message to clear or not
            var alert_1 = this.alertCtrl.create({
                title: 'Reset',
                message: 'Do you want to continue change ?',
                buttons: [
                    {
                        text: 'Clear',
                        role: 'cancel',
                        handler: function () {
                            // Clear the value
                            if (popType == 'disconnetDate') {
                                _this.disconnect.ta4datetime = "";
                            }
                            if (popType == 'reconnectDate') {
                                _this.reconnect.ta4datetime = "";
                            }
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            // Click Yes
                            popover.present({
                                ev: myEvent
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    /**
     *
     * @param datevalue
     * @param popType
     * Create by Ameer
     * method for date selection
     */
    ComplaintFormPage.prototype.showConfirm = function (datevalue, popType) {
        if (popType === 'inspectDateFrom') {
            this.tempCeassation.ta4indatetime = datevalue;
        }
        else if (popType === 'inspectDateFrom2') {
            this.tempCeassation.ta4datetime = datevalue;
        }
        else if (popType === 'installTest') {
            this.inspectNTest.ta4datetime = datevalue;
        }
        else if (popType === 'meterInstallInspect') {
            this.installationInspection.ta4indatetime = datevalue;
        }
        else if (popType === 'formBdated') {
            this.formBCess.ta4indatetime = datevalue;
        }
        else if (popType === 'FormBInteruptDate') {
            this.formBCess.ta4datetime = datevalue;
        }
        else if (popType === 'DateDisconnection') {
            this.formCust.ta4starttime = datevalue;
        }
        else if (popType === 'formAStaffDate') {
            this.formCust.ta4indatetime = datevalue;
        }
        else if (popType === 'deliveryDate') {
            this.deliver.ta4indatetime = datevalue;
        }
        else if (popType === 'disconnetDate') {
            this.disconnect.ta4datetime = datevalue;
        }
        else if (popType === 'reconnectDate') {
            this.reconnect.ta4datetime = datevalue;
        }
        else if (popType === 'evidenceDate') {
            this.evidenceCollect.ta4datetime = datevalue;
        }
        else if (popType === 'evidenceDate2') {
            this.evidenceCollect.ta4indatetime = datevalue;
        }
        // this.evidenceCollect.currentDateCollect = datevalue;
        // this.tempCeassation.date3 = datevalue;
    };
    /**
     * Create by Ameer
     * Go back to previous page
     * Uncheck form that did not save
     */
    ComplaintFormPage.prototype.goBack = function () {
        debugger;
        if (typeof (this.serviceDetails) == 'undefined') {
            switch (this.formType) {
                case 'tempCeassation':
                    this.formlist.electCess = false;
                    if (this.tempCeassation.ta4agree === false) {
                        this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
                    }
                    this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
                    break;
                case 'formACust':
                    this.formlist.schStff = false;
                    this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
                    this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
                    this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
                    this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });
                    break;
                case 'formCustCopy':
                    this.formlist.schCust = false;
                    break;
                case 'formEvidenceCollect':
                    this.formlist.eviCllct = false;
                    this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.tableItem });
                    this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
                    break;
                case 'inspect&Test':
                    this.formlist.instInspecNTest = false;
                    this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });
                    break;
                case 'installationInspection':
                    this.formlist.instInspec = false;
                    this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
                    break;
                case 'prejudiceForm':
                    this.formlist.evelectricPrejudiciCllct = false;
                    this.gv.loc_woComplaints.set('prejudiceForm' + this.wonum, { woNo: this.wonum, data: this.prejude });
                    break;
            }
        }
        this.navCtrl.pop();
    };
    /**
    * Create by Ameer
    * Save the form and checking the mandatory field during saving
    */
    ComplaintFormPage.prototype.saveData = function () {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        // this.itemOri.json.complaince = [];
        switch (this.formType) {
            case 'formACust':
                {
                    var validatFormAll = this.formValidate();
                    if (validatFormAll == true) {
                        this.formCust.ta4formtype = 'formA';
                        if (this.formCust.tnbLogo === undefined || this.formCust.tnbLogo === '' || this.formCust.tnbLogo === null)
                            this.formCust.tnbLogo = this.tnblogoConvert;
                        this.deliver.ta4signcustomer = this.signaturePad.toDataURL();
                        this.deliver.ta4signstaff = this.signaturePad2.toDataURL();
                        this.disconnect.ta4signstaff = this.SignaturePad3.toDataURL();
                        this.reconnect.ta4signstaff = this.SignaturePad4.toDataURL();
                        this.formCust.formIndicator = true;
                        this.gv.loc_woComplaints.set('delivery' + this.wonum, { woNo: this.wonum, data: this.deliver });
                        this.gv.loc_woComplaints.set('disconnection' + this.wonum, { woNo: this.wonum, data: this.disconnect });
                        this.gv.loc_woComplaints.set('reconnection' + this.wonum, { woNo: this.wonum, data: this.reconnect });
                        this.gv.loc_woComplaints.set('formACust' + this.wonum, { woNo: this.wonum, data: this.formCust });
                        if (this.itemOri.json.complaince.length === 0) {
                            this.itemOri.json.complaince.push({ name: 'Form A Staff', docType: "CF", data: this.formCust });
                            this.itemOri.json.complaince.push({ name: 'Disconnection', docType: "CF", data: this.disconnect });
                            this.itemOri.json.complaince.push({ name: 'Reconnection', docType: "CF", data: this.reconnect });
                            this.itemOri.json.complaince.push({ name: 'Delivery', docType: "CF", data: this.deliver });
                        }
                        else {
                            var indexArry1 = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Form A Staff"; });
                            if (indexArry1 > -1) {
                                this.itemOri.json.complaince.splice(indexArry1, 1);
                                this.itemOri.json.complaince.push({ name: 'Form A Staff', docType: "CF", data: this.formCust });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Form A Staff', docType: "CF", data: this.formCust });
                            }
                            var indexArry2 = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Disconnection"; });
                            if (indexArry2 > -1) {
                                this.itemOri.json.complaince.splice(indexArry2, 1);
                                this.itemOri.json.complaince.push({ name: 'Disconnection', docType: "CF", data: this.disconnect });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Disconnection', docType: "CF", data: this.disconnect });
                            }
                            var indexArry3 = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Reconnection"; });
                            if (indexArry3 > -1) {
                                this.itemOri.json.complaince.splice(indexArry3, 1);
                                this.itemOri.json.complaince.push({ name: 'Reconnection', docType: "CF", data: this.reconnect });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Reconnection', docType: "CF", data: this.reconnect });
                            }
                            var indexArry4 = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Delivery"; });
                            if (indexArry4 > -1) {
                                this.itemOri.json.complaince.splice(indexArry4, 1);
                                this.itemOri.json.complaince.push({ name: 'Delivery', docType: "CF", data: this.deliver });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Delivery', docType: "CF", data: this.deliver });
                            }
                        }
                        if (this.pdfLanguage == 'bhs') {
                            this.pdf_Bm.pdfDocumentBhs(this.formCust, null, this.formType, 'bhs', this.deliver, this.disconnect, this.reconnect).then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.pdfObj.getBase64(function (data) {
                                    console.log('Base 64 Form A staff ENG', data);
                                    _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Form A Staff ' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Form A Staff') {
                                            _this.itemOri.json.complaince[j].name = 'Borang A TNB';
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Form A Staff';
                                        }
                                    }
                                });
                                _this.downloadPdf(_this.pdfObj, "Borang A TNB");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Borang A TNB.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        }
                        else if (this.pdfLanguage == 'eng') {
                            this.pdf_Eng.pdfDocumentEng(this.formCust, null, this.formType, 'eng', this.deliver, this.disconnect, this.reconnect).then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.pdfObj.getBase64(function (data) {
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Form A Staff' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Form A Staff') {
                                            _this.itemOri.json.complaince[j].name = 'Borang A TNB';
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Form A Staff';
                                        }
                                    }
                                });
                                _this.downloadPdf(_this.pdfObj, "Borang A TNB");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Borang A TNB.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }).catch(function () {
                                _this.gf.displayToast('Pdf error');
                                loading.dismiss();
                            });
                        }
                        this.navCtrl.pop();
                        // this.navCtrl.push("ComplaintListPage", {
                        //   paramObj: this.itemOri,
                        //   language: 'true'
                        // });
                    }
                    else {
                        this.gf.displayToast('Entered all the field');
                    }
                }
                break;
            case 'formCustCopy':
                {
                    this.formCust.datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(this.formCust.ta4datetime).format('DD/MM/YYYY HH:mm');
                    if (this.itemOri.json.complaince.length === 0) {
                        this.itemOri.json.complaince.push({ name: 'Form A Customer', docType: "CF", data: this.formCust });
                    }
                    else {
                        var indexArry = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Form A Customer"; });
                        if (indexArry > -1) {
                            this.itemOri.json.complaince.splice(indexArry, 1);
                            this.itemOri.json.complaince.push({ name: 'Form A Customer', docType: "CF", data: this.formCust });
                        }
                        else {
                            this.itemOri.json.complaince.push({ name: 'Form A Customer', docType: "CF", data: this.formCust });
                        }
                    }
                    this.gv.loc_woComplaints.set('formCustCopy' + this.wonum, { woNo: this.wonum, data: this.formCust });
                    this.formCust.formIndicator = true;
                    if (this.pdfLanguage == 'bhs') {
                        this.pdf_Bm.pdfDocumentBhs(this.formCust, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                            .then(function (result) {
                            _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.downloadPdf(_this.pdfObj, "Form A Customer");
                            _this.pdfObj.getBase64(function (data) {
                                _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Form A Customer' });
                                for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                    if (_this.itemOri.json.complaince[j].name === 'Form A Customer') {
                                        _this.itemOri.json.complaince[j].name = "Borang A Pengguna";
                                        _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                        _this.saveIntoMaximo();
                                        _this.itemOri.json.complaince[j].name = 'Form A Customer';
                                    }
                                }
                            });
                            _this.pdfObj.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: "application/pdf" });
                                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                link.download = "Borang A Pengguna.pdf";
                                link.click();
                            });
                            loading.dismiss();
                        }).catch(function (error) {
                            _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            loading.dismiss();
                        });
                    }
                    else if (this.pdfLanguage == 'eng') {
                        this.pdf_Eng.pdfDocumentEng(this.formCust, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                            .then(function (result) {
                            _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.pdfObj2.getBase64(function (data) {
                                _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Form A Customer' });
                                for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                    if (_this.itemOri.json.complaince[j].name === 'Form A Customer') {
                                        _this.itemOri.json.complaince[j].name = "Borang A Pengguna";
                                        _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                        _this.saveIntoMaximo();
                                        _this.itemOri.json.complaince[j].name = 'Form A Customer';
                                    }
                                }
                            });
                            _this.downloadPdf(_this.pdfObj2, "Borang A Pengguna");
                            _this.pdfObj2.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: "application/pdf" });
                                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                link.download = "Borang A Pengguna.pdf";
                                link.click();
                            });
                            loading.dismiss();
                        }).catch(function (error) {
                            _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            loading.dismiss();
                        });
                    }
                    this.navCtrl.pop();
                    // this.navCtrl.push("ComplaintListPage", {
                    //   paramObj: this.itemOri,
                    //   language: 'true'
                    // });
                }
                break;
            case 'inspect&Test':
                {
                    var formInspectNTests = this.validateInspectNTest();
                    if (formInspectNTests == true) {
                        this.inspectNTest.ta4formtype = 'nlmt';
                        if (this.inspectNTest.tempAddress === null || this.inspectNTest.tempAddress === '' || typeof (this.inspectNTest.tempAddress) === 'undefined') {
                            this.inspectNTest.tempAddress = this.tempAddress;
                        }
                        if (this.inspectNTest.tnbLogo === undefined || this.inspectNTest.tnbLogo === '' || this.inspectNTest.tnbLogo === null) {
                            this.inspectNTest.tnbLogo = this.tnblogoConvert;
                        }
                        this.inspectNTest.ta4signmanger = this.signaturePad.toDataURL();
                        this.inspectNTest.ta4signstaff = this.signaturePad2.toDataURL();
                        this.inspectNTest.formIndicator = true;
                        this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });
                        if (this.itemOri.json.complaince.length === 0) {
                            this.itemOri.json.complaince.push({ name: 'Inspection and Testing', docType: "CF", data: this.inspectNTest });
                        }
                        else {
                            var indexArry = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Inspection and Testing"; });
                            if (indexArry > -1) {
                                this.itemOri.json.complaince.splice(indexArry, 1);
                                this.itemOri.json.complaince.push({ name: 'Inspection and Testing', docType: "CF", data: this.inspectNTest });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Inspection and Testing', docType: "CF", data: this.inspectNTest });
                            }
                        }
                        if (this.pdfLanguage == 'bhs') {
                            this.pdf_Bm.pdfDocumentBhs(this.inspectNTest, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.pdfObj.getBase64(function (data) {
                                    _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Installation and testing' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Inspection and Testing') {
                                            _this.itemOri.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Inspection and Testing';
                                        }
                                    }
                                });
                                _this.downloadPdf(_this.pdfObj, "Pemeriksaan dan Pengujian Pepasangan Meter");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                loading.dismiss();
                            });
                        }
                        else if (this.pdfLanguage == 'eng') {
                            this.pdf_Eng.pdfDocumentEng(this.inspectNTest, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.pdfObj2.getBase64(function (data) {
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Installation and testing' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Inspection and Testing') {
                                            _this.itemOri.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Inspection and Testing';
                                        }
                                    }
                                });
                                _this.downloadPdf(_this.pdfObj2, "Pemeriksaan dan Pengujian Pepasangan Meter");
                                _this.pdfObj2.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                loading.dismiss();
                            });
                        }
                        this.navCtrl.pop();
                        // this.navCtrl.push("ComplaintListPage", {
                        //   paramObj: this.itemOri,
                        //   language: 'true'
                        // });
                    }
                    else {
                        this.gf.displayToast('Please entered required field');
                    }
                }
                break;
            case 'tempCeassation':
                {
                    var formCess = this.validateCessFrom();
                    if (formCess == true) {
                        this.tempCeassation.ta4formtype = 'nlta';
                        if (this.tempCeassation.tnbLogo === undefined || this.tempCeassation.tnbLogo === '' || this.tempCeassation.tnbLogo === null) {
                            this.tempCeassation.tnbLogo = this.tnblogoConvert;
                        }
                        if (this.tempCeassation.ta4agree === false) {
                            if (this.formBCess.tempAddress === null || this.formBCess.tempAddress === '' || typeof (this.formBCess.tempAddress) === 'undefined') {
                                this.formBCess.tempAddress = this.tempAddress;
                            }
                            /*   if (this.formBCess.tnbLogo === undefined || this.formBCess.tnbLogo === '' || this.formBCess.tnbLogo === null) {
                                this.formBCess.tnbLogo = this.tnblogoConvert;
                              } */
                        }
                        this.tempCeassation.ta4signstaff = this.signaturePad.toDataURL();
                        if (this.tempCeassation.hasOwnProperty('ta4agree')) {
                            if (this.tempCeassation.ta4agree === true) {
                                this.tempCeassation.ta4signwitness = this.signaturePad2.toDataURL();
                                console.log('Data url2 ' + this.tempCeassation.witnessSign);
                            }
                            else {
                                this.tempCeassation.ta4signwitness = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEa0lEQVR4Xu3UwQkAIBADQa//fv34ULCLhbkKwuTI7HPvcgQIEAgIjMEKtCQiAQJfwGB5BAIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB+kcTr/5Ufx3AAAAAElFTkSuQmCC";
                            }
                            this.formBCess.ta4formtype = 'nltb';
                            this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
                            if (this.itemOri.json.complaince.length === 0) {
                                this.itemOri.json.complaince.push({ name: 'Form B', docType: "CF", data: this.formBCess });
                            }
                            else {
                                var indexArry = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Form B"; });
                                if (indexArry > -1) {
                                    this.itemOri.json.complaince.splice(indexArry, 1);
                                    this.itemOri.json.complaince.push({ name: 'Form B', docType: "CF", data: this.formBCess });
                                }
                                else {
                                    this.itemOri.json.complaince.push({ name: 'Form B', docType: "CF", data: this.formBCess });
                                }
                            }
                        }
                        this.tempCeassation.formIndicator = true;
                        this.gv.loc_woComplaints.set('tempCeassation' + this.wonum, { woNo: this.wonum, data: this.tempCeassation });
                        if (this.itemOri.json.complaince.length === 0) {
                            this.itemOri.json.complaince.push({ name: 'Supply Cessation', docType: "CF", data: this.tempCeassation });
                        }
                        else {
                            var indexArry = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Supply Cessation"; });
                            if (indexArry > -1) {
                                this.itemOri.json.complaince.splice(indexArry, 1);
                                this.itemOri.json.complaince.push({ name: 'Supply Cessation', docType: "CF", data: this.tempCeassation });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Supply Cessation', docType: "CF", data: this.tempCeassation });
                            }
                        }
                        if (this.pdfLanguage == 'bhs') {
                            if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
                                this.pdf_Bm.pdfDocumentBhs(this.tempCeassation, null, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Electric Cessation' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Supply Cessation') {
                                                _this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Supply Cessation';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                            else if (this.tempCeassation.ta4agree === false) {
                                var formType = 'formB';
                                var formBTemp = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
                                var formBData = formBTemp.data;
                                this.pdf_Bm.pdfDocumentBhs(this.tempCeassation, null, formType, 'eng', formBData, 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj2.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Form B' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Form B') {
                                                _this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Form B';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                        }
                        else if (this.pdfLanguage == 'eng') {
                            if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
                                this.pdf_Eng.pdfDocumentEng(this.tempCeassation, null, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj2.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Electric Cessation' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Supply Cessation') {
                                                _this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Supply Cessation';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                            else if (this.tempCeassation.ta4agree === false) {
                                var formType = 'formB';
                                var formBTemp = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
                                var formBData = formBTemp.data;
                                this.pdf_Eng.pdfDocumentEng(this.tempCeassation, null, formType, 'eng', formBData, 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj2.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Form B' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Form B') {
                                                _this.itemOri.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Form B';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                        }
                        this.navCtrl.pop();
                        // this.navCtrl.push("ComplaintListPage", {
                        //   paramObj: this.itemOri,
                        //   language: 'true'
                        // });
                    }
                    else {
                        this.gf.displayToast('Entered the required field');
                    }
                }
                break;
            case 'formEvidenceCollect':
                {
                    var formEvidanceValidate = this.validateEvidence();
                    if (formEvidanceValidate == true) {
                        this.evidenceCollect.ta4formtype = 'nlec';
                        if (this.evidenceCollect.tnbLogo === undefined || this.evidenceCollect.tnbLogo === '' || this.evidenceCollect.tnbLogo === null) {
                            this.evidenceCollect.tnbLogo = this.tnblogoConvert;
                        }
                        this.evidenceCollect.ta4signstaff = this.signaturePad.toDataURL();
                        this.evidenceCollect.ta4signwitness = this.signaturePad2.toDataURL();
                        this.columns1 = [];
                        this.columns1.push('ta4item');
                        this.columns1.push('ta4describe');
                        this.tableItem = this.buildTableBody(this.evidenceCollect.evidenceItem, this.columns1);
                        this.evidenceCollect.formIndicator = true;
                        this.gv.loc_woComplaints.set('eviItem' + this.wonum, { woNo: this.wonum, data: this.tableItem });
                        this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
                        if (this.itemOri.json.complaince.length === 0) {
                            this.itemOri.json.complaince.push({ name: 'Evidence collection', docType: "CF", data: this.evidenceCollect });
                        }
                        else {
                            var indexArry = this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Evidence collection"; });
                            if (indexArry > -1) {
                                this.itemOri.json.complaince.splice(indexArry, 1);
                                this.itemOri.json.complaince.push({ name: 'Evidence collection', docType: "CF", data: this.evidenceCollect });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Evidence collection', docType: "CF", data: this.evidenceCollect });
                            }
                        }
                        if (this.pdfLanguage == 'bhs') {
                            this.pdf_Bm.pdfDocumentBhs(this.evidenceCollect, this.tableItem, this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.pdfObj.getBase64(function (data) {
                                    _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Collection Evidence' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Evidence collection') {
                                            _this.itemOri.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Evidence collection';
                                        }
                                    }
                                });
                                _this.downloadPdf(_this.pdfObj, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                loading.dismiss();
                            });
                        }
                        else if (this.pdfLanguage == 'eng') {
                            this.pdf_Eng.pdfDocumentEng(this.evidenceCollect, this.tableItem, this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.pdfObj2.getBase64(function (data) {
                                    _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Collection Evidence' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Evidence collection') {
                                            _this.itemOri.json.complaince[j].name = "Pemberitahuan Pengambilan Bahan-Bahan Bukti";
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Evidence collection';
                                        }
                                    }
                                });
                                _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");
                                _this.pdfObj2.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                loading.dismiss();
                            });
                        }
                        this.navCtrl.pop();
                        // this.navCtrl.push("ComplaintListPage", {
                        //   paramObj: this.itemOri,
                        //   language: 'true'
                        // });
                    }
                    else {
                        this.gf.displayToast('Entered the required field');
                    }
                }
                break;
            case 'installationInspection':
                {
                    var formInspectValidate = this.validateInspectInstall();
                    if (formInspectValidate == true) {
                        this.installationInspection.ta4formtype = 'nlmi';
                        if (this.installationInspection.tempAddress === null || this.installationInspection.tempAddress === '' || typeof (this.installationInspection.tempAddress) === 'undefined') {
                            this.installationInspection.tempAddress = this.tempAddress;
                        }
                        if (this.installationInspection.tnbLogo === undefined || this.installationInspection.tnbLogo === '' || this.installationInspection.tnbLogo === null) {
                            this.installationInspection.tnbLogo = this.tnblogoConvert;
                        }
                        this.installationInspection.ta4signstaff = this.signaturePad.toDataURL();
                        if (this.formSelected === false) {
                            this.installationInspection.ta4signwitness = this.signaturePad2.toDataURL();
                        }
                        if (typeof (this.installationInspection.ta4serialNum) == "undefined" || this.installationInspection.ta4serialNum === null) {
                            this.installationInspection.ta4serialNum = '';
                        }
                        this.installationInspection.formIndicator = true;
                        this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
                        if (this.itemOri.json.complaince.length === 0) {
                            this.itemOri.json.complaince.push({ name: 'Installation Inspection', docType: "CF", data: this.installationInspection });
                        }
                        else {
                            debugger;
                            var duplicate = this.itemOri.json.complaince.findIndex(function (item) {
                                return item.name === 'Installation Inspection';
                            });
                            if (duplicate > -1) {
                                this.itemOri.json.complaince.splice(duplicate, 1);
                                this.itemOri.json.complaince.push({ name: 'Installation Inspection', docType: "CF", data: this.installationInspection });
                            }
                            else {
                                this.itemOri.json.complaince.push({ name: 'Installation Inspection', docType: "CF", data: this.installationInspection });
                            }
                        }
                        if (this.pdfLanguage == 'bhs') {
                            if (this.formSelected === false) {
                                this.pdf_Bm.pdfDocumentBhs(this.installationInspection, null, this.formType, 'bhs', 'Copperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Installation' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                                                _this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Installation Inspection';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                });
                            }
                            else if (this.formSelected === true) {
                                this.pdf_Bm.pdfDocumentBhs(this.installationInspection, null, this.formType, 'bhs', 'NotCopperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Installation' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                                                _this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Installation Inspection';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                        }
                        else if (this.pdfLanguage == 'eng') {
                            if (this.formSelected === false) {
                                this.pdf_Eng.pdfDocumentEng(this.installationInspection, null, this.formType, 'eng', 'Copperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj2.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Installation' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                                                _this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Installation Inspection';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj2, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                            else if (this.formSelected === true) {
                                this.pdf_Eng.pdfDocumentEng(this.installationInspection, null, this.formType, 'eng', 'NotCopperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.pdfObj2.getBase64(function (data) {
                                        _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Installation' });
                                        for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                            if (_this.itemOri.json.complaince[j].name === 'Installation Inspection') {
                                                _this.itemOri.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                                                _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                                _this.saveIntoMaximo();
                                                _this.itemOri.json.complaince[j].name = 'Installation Inspection';
                                            }
                                        }
                                    });
                                    _this.downloadPdf(_this.pdfObj2, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                    loading.dismiss();
                                });
                            }
                        }
                        this.navCtrl.pop();
                        // this.navCtrl.push("ComplaintListPage", {
                        //   paramObj: this.itemOri,
                        //   language: 'true'
                        // });
                    }
                    else {
                        this.gf.displayToast('Please enter all required field. Thank you.');
                    }
                }
                break;
            case 'prejudiceForm': {
                debugger;
                return new Promise(function (resolve, reject) {
                    _this.prejude.ta4formtype = 'nlwp';
                    if (_this.prejude.tnbLogo === undefined || _this.prejude.tnbLogo === '' || _this.prejude.tnbLogo === null) {
                        _this.prejude.tnbLogo = _this.tnblogoConvert;
                    }
                    if (_this.prejude.tempAddress === null || _this.prejude.tempAddress === '' || typeof (_this.prejude.tempAddress) === 'undefined') {
                        _this.prejude.tempAddress = _this.tempAddress;
                    }
                    _this.prejude.formIndicator = true;
                    _this.gv.loc_woComplaints.set('prejudiceForm' + _this.wonum, { woNo: _this.wonum, data: _this.prejude });
                    if (_this.itemOri.json.complaince.length === 0) {
                        _this.itemOri.json.complaince.push({ name: 'Prejudice', docType: "CF", data: _this.prejude });
                    }
                    else {
                        var indexArry = _this.itemOri.json.complaince.findIndex(function (x) { return x.name === "Prejudice"; });
                        if (indexArry > -1) {
                            _this.itemOri.json.complaince.splice(indexArry, 1);
                            _this.itemOri.json.complaince.push({ name: 'Prejudice', docType: "CF", data: _this.prejude });
                        }
                        else {
                            _this.itemOri.json.complaince.push({ name: 'Prejudice', docType: "CF", data: _this.prejude });
                        }
                    }
                    resolve();
                }).catch(function (reject) {
                    _this.gf.warningAlert("Error", 'Proccess not done yet', "Dismiss");
                    loading.dismiss();
                }).then(function () {
                    if (_this.pdfLanguage === 'bhs') {
                        _this.pdf_Bm.pdfDocumentBhs(_this.prejude, null, _this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                            .then(function (result) {
                            console.log(result);
                            _this.errorStatus = false;
                            _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                        }).catch(function (error) {
                            _this.gf.warningAlert("Error", error, "Dismiss");
                            _this.errorStatus = true;
                            loading.dismiss();
                        }).then(function () {
                            if (_this.errorStatus === false) {
                                _this.pdfObj.getBase64(function (data) {
                                    _this.pdfBase64.push({ Language: 'Bahasa', Base64: data, Forms: 'Prejudice' });
                                    for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                        if (_this.itemOri.json.complaince[j].name === 'Prejudice') {
                                            _this.itemOri.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
                                            _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                            _this.saveIntoMaximo();
                                            _this.itemOri.json.complaince[j].name = 'Prejudice';
                                        }
                                    }
                                });
                            }
                        }).then(function () {
                            if (_this.errorStatus === false) {
                                _this.downloadPdf(_this.pdfObj, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }
                        });
                    }
                    else if (_this.pdfLanguage === 'eng') {
                        _this.pdf_Eng.pdfDocumentEng(_this.prejude, null, _this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                            .then(function (result) {
                            _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.pdfObj2.getBase64(function (data) {
                                _this.pdfBase64.push({ Language: 'English', Base64: data, Forms: 'Prejudice' });
                                // window.location.href = 'data:application/pdf;base64,' + data;
                                for (var j = 0; j < _this.itemOri.json.complaince.length; j++) {
                                    if (_this.itemOri.json.complaince[j].name === 'Prejudice') {
                                        _this.itemOri.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
                                        _this.itemOri.json.complaince[j].pdfFile = _this.pdfBase64;
                                        _this.saveIntoMaximo();
                                        _this.itemOri.json.complaince[j].name = 'Prejudice';
                                    }
                                }
                                if (_this.platform.is("ios")) {
                                    _this.downloadPdf(_this.pdfObj2, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                                }
                                _this.pdfObj2.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                                    link.click();
                                });
                            });
                            loading.dismiss();
                        }).catch(function (error) {
                            _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            _this.errorStatus = true;
                            loading.dismiss();
                        });
                    }
                    _this.navCtrl.pop();
                    // this.navCtrl.push("ComplaintListPage", {
                    //   paramObj: this.itemOri,
                    //   language: 'true'
                    // });
                });
            }
        }
    };
    ComplaintFormPage.prototype.formatTimeDisplay = function () {
        var dateformat;
        debugger;
        switch (this.formType) {
            case 'tempCeassation': {
                dateformat = this.tempCeassation.datetime.replace("Z", "");
                this.tempCeassation.date1 = __WEBPACK_IMPORTED_MODULE_22_moment__(dateformat).format('DD/MM/YYYY HH:mm');
                break;
            }
            case 'formACust': {
                var curr_date = this.dateCur.getDate();
                var curr_month = this.dateCur.getMonth() + 1; //Months are zero based
                var curr_year = this.dateCur.getFullYear();
                dateformat = this.formCust.ta4datetime.replace("Z", "");
                var indexChar = dateformat.indexOf("T");
                if (indexChar > -1) {
                    this.formCust.datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(dateformat).format('DD/MM/YYYY HH:mm');
                    this.deliver.ta4indatetime = curr_date + '/' + curr_month + '/' + curr_year;
                    this.deliver.ta4starttime = __WEBPACK_IMPORTED_MODULE_22_moment__().format("HH:mm");
                }
                break;
            }
            case 'installationInspection': {
                dateformat = this.installationInspection.ta4datetime.replace("Z", "");
                this.installationInspection.datetime = __WEBPACK_IMPORTED_MODULE_22_moment__(dateformat).format('DD/MM/YYYY HH:mm');
                break;
            }
        }
    };
    ComplaintFormPage.prototype.assignDetailsFormB = function () {
        debugger;
        if (this.tempCeassation.ta4agree === true) {
            this.formB = 'agree';
            this.formBCess.ta4custaddress = this.customerAddress;
            this.formBCess.ta4custname = this.customerName;
        }
        else {
            this.formB = 'disagree';
        }
    };
    /**
     * Create: Ameer (clear the signature when user click button clear)
     * Date: 18/2/2019
     */
    ComplaintFormPage.prototype.clearSign = function (formType) {
        debugger;
        switch (formType) {
            case 'evidenceStaff':
                this.signaturePad.clear();
                break;
            case 'evidenceWitness':
                this.signaturePad2.clear();
                break;
            case 'InspectNTestManager':
                this.signaturePad.clear();
                break;
            case 'InspectNTestWitness':
                this.signaturePad2.clear();
                break;
            case 'installInspectExam':
                this.signaturePad.clear();
                break;
            case 'installInspectWitness':
                this.signaturePad2.clear();
                break;
            case 'cessationCustomer':
                this.signaturePad2.clear();
                break;
            case 'cessationStaff':
                this.signaturePad.clear();
                break;
            case 'reconnectStaff':
                this.SignaturePad4.clear();
                break;
            case 'disconnectStaff':
                this.SignaturePad3.clear();
                break;
            case 'deliverStaff':
                this.signaturePad2.clear();
                break;
            case 'deliverWitness':
                this.signaturePad.clear();
                break;
        }
    };
    ComplaintFormPage.prototype.hidebuttonPdfDownload = function () {
        if (this.downPdf == null) {
            this.downPdf = false;
        }
        else {
            this.downPdf = true;
        }
    };
    ComplaintFormPage.prototype.downloadPdf = function (pdfObj, filename) {
        var _this = this;
        debugger;
        console.log('downloadPdf');
        if (this.platform.is("cordova")) {
            console.log('this platform is cordova');
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
            console.log('this platform NOT cordova');
            // On a browser simply use download!
            pdfObj.download();
        }
    };
    ComplaintFormPage.prototype.typeform = function () {
        debugger;
        switch (this.formType) {
            case 'installationInspection':
                if (this.installationInspection.ta4agree === "true") {
                    this.formSelected = false;
                }
                else if (this.installationInspection.ta4agree === "false") {
                    this.formSelected = true;
                }
                else if (typeof (this.installationInspection.ta4agree) == "undefined") {
                    this.installationInspection.ta4agree = "true";
                    this.formSelected = false;
                }
                break;
        }
        /*   if (this.installationInspection.ta4agree === "true") {
            this.formSelected = false;
       
          } else if (this.installationInspection.ta4agree === "false") {
            this.formSelected = true;
          }
       
          if (typeof (this.installationInspection.ta4agree) == "undefined") {
            this.installationInspection.ta4agree = "true";
            this.formSelected = false;
          } */
    };
    ComplaintFormPage.prototype.saveIntoMaximo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present();
        this.itemOri.json.pdfTtl++;
        this.describedBy.docType = 'CF';
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
            loading.dismiss();
        }
        else if ((__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    var itemVal = _this.itemOri;
                    var objCopy = JSON.parse(JSON.stringify(itemVal));
                    delete objCopy.json['ta0feeder'];
                    var newObj = objCopy.json;
                    // change the name of compliance
                    for (var j = 0; j < objCopy.json.complaince.length; j++) {
                        if (objCopy.json.complaince[j].name === 'Inspection and Testing') {
                            objCopy.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
                        }
                        if (objCopy.json.complaince[j].name === 'Installation Inspection') {
                            objCopy.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                        }
                        if (objCopy.json.complaince[j].name === 'Evidence collection') {
                            objCopy.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
                        }
                        if (objCopy.json.complaince[j].name === 'Supply Cessation' || objCopy.json.complaince[j].name === 'Form B') {
                            objCopy.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                        }
                        if (objCopy.json.complaince[j].name === 'Form A Staff' || objCopy.json.complaince[j].name === 'Disconnection' ||
                            objCopy.json.complaince[j].name === 'Reconnection' || objCopy.json.complaince[j].name === 'Delivery') {
                            objCopy.json.complaince[j].name = 'Borang A TNB';
                        }
                        if (objCopy.json.complaince[j].name === 'Form A Customer') {
                            objCopy.json.complaince[j].name = "Borang A Pengguna";
                        }
                        if (objCopy.json.complaince[j].name === 'Prejudice') {
                            objCopy.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
                        }
                    }
                    var remove = [];
                    for (var i = 0; i < objCopy.json.complaince.length; i++) {
                        // Remove no need to update
                        if (typeof (objCopy.json.complaince[i].pdfFile) !== "undefined") {
                            // Empty Array
                            if (objCopy.json.complaince[i].pdfFile.length === 0) {
                                remove.push(i);
                            }
                        }
                        else {
                            remove.push(i);
                        }
                    }
                    var copy = [];
                    if (remove.length > 0) {
                        for (var k = 0; k < remove.length; k++) {
                            delete objCopy.json.complaince[remove[k]];
                        }
                        for (var i = 0; i < objCopy.json.complaince.length; i++) {
                            if (typeof (objCopy.json.complaince[i]) !== "undefined") {
                                copy.push(objCopy.json.complaince[i]);
                            }
                        }
                    }
                    if (copy.length > 0) {
                        objCopy.json.complaince = JSON.parse(JSON.stringify(copy));
                    }
                    _this.dataService.saveSealRecordImage(objCopy, _this.itemOri.json.wonum, 'addPdf', '', _this.itemOri.json.worktype, _this.describedBy.docType)
                        .then(function (results) {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.gf.warningAlert("Compliant", _this.gv.saveSuccessfully, "OK");
                        loading.dismiss();
                    }).catch(function (error) {
                        loading.dismissAll();
                    }).then(function () {
                        loading.dismissAll();
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    loading.dismissAll();
                }
            });
        }
        else {
            var itemVal = this.itemOri;
            var objCopy = JSON.parse(JSON.stringify(itemVal));
            delete objCopy.json['ta0feeder'];
            delete objCopy.json['docLinksL'];
            delete objCopy.json['labtrans'];
            var newObj = objCopy.json;
            for (var j = 0; j < objCopy.json.complaince.length; j++) {
                if (objCopy.json.complaince[j].name === 'Inspection and Testing') {
                    objCopy.json.complaince[j].name = 'Pemeriksaan dan Pengujian Pepasangan Meter';
                }
                if (objCopy.json.complaince[j].name === 'Installation Inspection') {
                    objCopy.json.complaince[j].name = 'Semakan Pepasangan Meter Elektrik';
                }
                if (objCopy.json.complaince[j].name === 'Evidence collection') {
                    objCopy.json.complaince[j].name = 'Pemberitahuan Pengambilan Bahan-Bahan Bukti';
                }
                if (objCopy.json.complaince[j].name === 'Supply Cessation' || objCopy.json.complaince[j].name === 'Form B') {
                    objCopy.json.complaince[j].name = 'Pemberitahuan Gangguan Sementara Bekalan Elektrik';
                }
                if (objCopy.json.complaince[j].name === 'Form A Staff' || objCopy.json.complaince[j].name === 'Disconnection' ||
                    objCopy.json.complaince[j].name === 'Reconnection' || objCopy.json.complaince[j].name === 'Delivery') {
                    objCopy.json.complaince[j].name = 'Borang A TNB';
                }
                if (objCopy.json.complaince[j].name === 'Form A Customer') {
                    objCopy.json.complaince[j].name = "Borang A Pengguna";
                }
                if (objCopy.json.complaince[j].name === 'Prejudice') {
                    objCopy.json.complaince[j].name = 'Pemakluman Sesi Penjelasan Tanpa Prejudis';
                }
            }
            var remove = [];
            for (var i = 0; i < objCopy.json.complaince.length; i++) {
                // Remove no need to update
                if (typeof (objCopy.json.complaince[i].pdfFile) !== "undefined") {
                    // Empty Array
                    if (objCopy.json.complaince[i].pdfFile.length === 0) {
                        remove.push(i);
                    }
                }
                else {
                    remove.push(i);
                }
            }
            var copy = [];
            if (remove.length > 0) {
                for (var k = 0; k < remove.length; k++) {
                    delete objCopy.json.complaince[remove[k]];
                }
                for (var i = 0; i < objCopy.json.complaince.length; i++) {
                    if (typeof (objCopy.json.complaince[i]) !== "undefined") {
                        copy.push(objCopy.json.complaince[i]);
                    }
                }
            }
            if (copy.length > 0) {
                objCopy.json.complaince = JSON.parse(JSON.stringify(copy));
            }
            this.dataService.saveSealRecordImage(objCopy, this.itemOri.json.wonum, 'addPdf', '', this.itemOri.json.worktype, this.describedBy.docType)
                .then(function (results) {
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                _this.gf.warningAlert("Compliant", _this.gv.saveSuccessfully, "OK");
                loading.dismiss();
            }).catch(function (error) {
                loading.dismissAll();
            }).then(function () {
                loading.dismissAll();
            });
        }
    };
    ComplaintFormPage.prototype.findZoneBySiteId = function () {
        var _this = this;
        console.log("Inside findZoneBySiteId");
        debugger;
        //var jsonString = { 'siteid': this.itemOri.json.siteid };
        var siteItem = [];
        console.log("findZoneBySiteId >>> getAllRecord");
        this.jsonStore.getAllRecord(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_Domains__["a" /* Domains */].SiteID).then(function (result) {
            console.log("RESULT >>> " + JSON.stringify(result));
            var respResult = result;
            siteItem = respResult;
            var itemId = siteItem.filter(function (item) {
                return item.json.siteid === _this.itemOri.json.siteid;
            });
            console.log("findZoneBySiteId itemId : " + JSON.stringify(itemId));
            if (itemId.length > 0) {
                //this.siteId_region = "TNB" + " " + itemId[0].json.description; //001
                //if (typeof (this.siteId_region) !== "undefined" && this.siteId_region !== null && this.siteId_region !== "") { //001
                //console.log("findZoneBySiteId >>> trigger this.siteAddress.SiteIdAddress"); //001
                //let address = this.siteAddress.SiteIdAddress(this.siteId_region);           //001 
                var address = itemId[0].json.indstrydesc; //001          
                _this.siteId_region = "TNB" + " " + itemId[0].json.description; //001
                console.log("findZoneBySiteId >>> trigger this.formType : " + _this.formType);
                switch (_this.formType) {
                    case 'prejudiceForm':
                        {
                            _this.prejude.ta4officeaddress = address;
                            _this.prejude.ta4officephone = '1-300-88-5454';
                            console.log('address', address);
                        }
                        break;
                    case 'formACust':
                        {
                            _this.formCust.ta4officeaddress = address;
                        }
                        break;
                    case 'installationInspection':
                        {
                            //let siteId = this.siteAddress.pejabatNegeri(this.itemOri.json.siteid);  //001
                            //if (typeof (siteId) !== 'undefined') {                                  //001
                            //  this.siteId_region = siteId;                                          //001
                            //}                                                                       //001
                            //this.installationInspection.ta4officeaddress = address;              //001
                            _this.installationInspection.ta4officeaddress = '-'; //001
                            _this.installationInspection.ta4officephone = '1-300-88-5454';
                        }
                        break;
                    case 'tempCeassation': {
                        _this.formBCess.ta4officeaddress = address;
                        _this.formBCess.ta4officephone = '1-300-88-5454';
                        break;
                    }
                }
                //} //001
            }
        });
        // this.dataService.fetchSiteParticularUser().then(results => {
        //   var respResult: any = results;
        //   siteItem = respResult.respObject;
        //   var itemId = siteItem.filter((item) => {
        //     return item.siteid === this.itemOri.json.siteid;
        //   })
        //   this.siteId_region = "TNB" + " " + itemId[0].description;
        // }).then(item => {
        //   let address;
        //   address = this.siteAddress.SiteIdAddress(this.siteId_region);
        //   switch (this.formType) {
        //     case 'prejudiceForm': {
        //       this.prejude.ta4officeaddress = address;
        //       this.prejude.ta4officephone = '1-300-88-5454';
        //       console.log('address', address);
        //     } break;
        //     case 'formACust': {
        //       this.formCust.ta4officeaddress = address;
        //     } break;
        //     case 'installationInspection': {
        //       let siteId = this.siteAddress.pejabatNegeri(this.itemOri.json.siteid);
        //       if (typeof (siteId) !== 'undefined') {
        //         this.siteId_region = siteId;
        //       }
        //       this.installationInspection.ta4officeaddress = address;
        //       this.installationInspection.ta4officephone = '1-300-88-5454';
        //     } break;
        //     case 'tempCeassation': {
        //       this.formBCess.ta4officeaddress = address;
        //       this.formBCess.ta4officephone = '1-300-88-5454';
        //       break;
        //     }
        //   }
        // });
    };
    /**
     * Created: Ameer(16/7/2019)
     * Description: Preview PDF
     */
    ComplaintFormPage.prototype.previewPdf = function () {
        var _this = this;
        debugger;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        // this.itemOri.json.complaince = [];
        switch (this.formType) {
            case 'formACust': {
                var validatFormAll = this.formValidate();
                if (validatFormAll == true) {
                    this.formCust.ta4formtype = 'formA';
                    if (this.formCust.tnbLogo === undefined || this.formCust.tnbLogo === '' || this.formCust.tnbLogo === null)
                        this.formCust.tnbLogo = this.tnblogoConvert;
                    this.deliver.ta4signcustomer = this.signaturePad.toDataURL();
                    this.deliver.ta4signstaff = this.signaturePad2.toDataURL();
                    this.disconnect.ta4signstaff = this.SignaturePad3.toDataURL();
                    this.reconnect.ta4signstaff = this.SignaturePad4.toDataURL();
                    if (this.pdfLanguage == 'bhs') {
                        loading.present().then(function () {
                            _this.pdf_Bm.pdfDocumentBhs(_this.formCust, null, _this.formType, 'bhs', _this.deliver, _this.disconnect, _this.reconnect).then(function (result) {
                                console.log(result);
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.downloadPdf(_this.pdfObj, "Borang A TNB");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Borang A TNB.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    }
                    else if (this.pdfLanguage == 'eng') {
                        loading.present().then(function () {
                            _this.pdf_Eng.pdfDocumentEng(_this.formCust, null, _this.formType, 'eng', _this.deliver, _this.disconnect, _this.reconnect).then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.downloadPdf(_this.pdfObj, "Borang A TNB");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Borang A TNB.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    }
                }
                else {
                    this.gf.displayToast('Entered all the field');
                }
                break;
            }
            case 'formCustCopy': {
                if (this.pdfLanguage == 'bhs') {
                    loading.present().then(function () {
                        _this.pdf_Bm.pdfDocumentBhs(_this.formCust, null, _this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                            .then(function (result) {
                            //this.userStsGroupList = result;
                            console.log(result);
                            _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.downloadPdf(_this.pdfObj, "Borang A Pengguna");
                            _this.pdfObj.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: "application/pdf" });
                                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                link.download = "Borang A Pengguna.pdf";
                                link.click();
                            });
                        }).then(function () {
                            loading.dismiss();
                        });
                    });
                }
                else if (this.pdfLanguage == 'eng') {
                    loading.present().then(function () {
                        _this.pdf_Eng.pdfDocumentEng(_this.formCust, null, _this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                            .then(function (result) {
                            _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                            _this.downloadPdf(_this.pdfObj2, "Borang A Pengguna");
                            _this.pdfObj2.getBuffer(function (buffer) {
                                var blob = new Blob([buffer], { type: "application/pdf" });
                                //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                link.download = "Borang A Pengguna.pdf";
                                link.click();
                            });
                        }).catch(function (error) {
                            _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                        }).then(function () {
                            loading.dismiss();
                        });
                    });
                }
                break;
            }
            case 'inspect&Test': {
                var formInspectNTests = this.validateInspectNTest();
                if (formInspectNTests == true) {
                    this.inspectNTest.ta4formtype = 'nlmt';
                    if (this.inspectNTest.tempAddress === null || this.inspectNTest.tempAddress === '' || typeof (this.inspectNTest.tempAddress) === 'undefined') {
                        this.inspectNTest.tempAddress = this.tempAddress;
                    }
                    if (this.inspectNTest.tnbLogo === undefined || this.inspectNTest.tnbLogo === '' || this.inspectNTest.tnbLogo === null) {
                        this.inspectNTest.tnbLogo = this.tnblogoConvert;
                    }
                    this.inspectNTest.ta4signmanger = this.signaturePad.toDataURL();
                    this.inspectNTest.ta4signstaff = this.signaturePad2.toDataURL();
                    this.gv.loc_woComplaints.set('Inspection & Testing' + this.wonum, { woNo: this.wonum, data: this.inspectNTest });
                    if (this.pdfLanguage == 'bhs') {
                        loading.present().then(function () {
                            _this.pdf_Bm.pdfDocumentBhs(_this.inspectNTest, null, _this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.downloadPdf(_this.pdfObj, "Pemeriksaan dan Pengujian Pepasangan Meter");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    }
                    else if (this.pdfLanguage == 'eng') {
                        loading.present().then(function () {
                            _this.pdf_Eng.pdfDocumentEng(_this.inspectNTest, null, _this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.downloadPdf(_this.pdfObj2, "Pemeriksaan dan Pengujian Pepasangan Meter");
                                _this.pdfObj2.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemeriksaan dan Pengujian Pepasangan Meter.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    }
                }
                else {
                    this.gf.displayToast('Please entered required field');
                }
                break;
            }
            case 'tempCeassation': {
                var formCess = this.validateCessFrom();
                if (formCess == true) {
                    this.tempCeassation.ta4formtype = 'nlta';
                    if (this.tempCeassation.tnbLogo === undefined || this.tempCeassation.tnbLogo === '' || this.tempCeassation.tnbLogo === null) {
                        this.tempCeassation.tnbLogo = this.tnblogoConvert;
                    }
                    if (this.tempCeassation.ta4agree === false) {
                        if (this.formBCess.tempAddress === null || this.formBCess.tempAddress === '' || typeof (this.formBCess.tempAddress) === 'undefined') {
                            this.formBCess.tempAddress = this.tempAddress;
                        }
                        /*   if (this.formBCess.tnbLogo === undefined || this.formBCess.tnbLogo === '' || this.formBCess.tnbLogo === null) {
                            this.formBCess.tnbLogo = this.tnblogoConvert;
                          } */
                    }
                    this.tempCeassation.ta4signstaff = this.signaturePad.toDataURL();
                    console.log('Data url1 ' + this.tempCeassation.stffSign);
                    if (this.tempCeassation.ta4agree === true) {
                        this.tempCeassation.ta4signwitness = this.signaturePad2.toDataURL();
                        console.log('Data url2 ' + this.tempCeassation.witnessSign);
                    }
                    else {
                        this.tempCeassation.ta4signwitness = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEa0lEQVR4Xu3UwQkAIBADQa//fv34ULCLhbkKwuTI7HPvcgQIEAgIjMEKtCQiAQJfwGB5BAIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB+kcTr/5Ufx3AAAAAElFTkSuQmCC";
                    }
                    if (this.tempCeassation.hasOwnProperty('ta4agree')) {
                        this.formBCess.ta4formtype = 'nltb';
                        this.gv.loc_woComplaints.set('formBCess' + this.wonum, { woNo: this.wonum, data: this.formBCess });
                    }
                    if (this.pdfLanguage == 'bhs') {
                        if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
                            loading.present().then(function () {
                                _this.pdf_Bm.pdfDocumentBhs(_this.tempCeassation, null, _this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                    .then(function (result) {
                                    console.log(result);
                                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            });
                        }
                        else if (this.tempCeassation.ta4agree === false) {
                            var formType_1 = 'formB';
                            var formBTemp = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
                            var formBData_1 = formBTemp.data;
                            // console.log('condi value is: ' + this.tempCeassation.condi);
                            loading.present().then(function () {
                                _this.pdf_Bm.pdfDocumentBhs(_this.tempCeassation, null, formType_1, 'eng', formBData_1, 'no Value', 'no Value')
                                    .then(function (result) {
                                    //this.userStsGroupList = result;
                                    console.log(result);
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            });
                        }
                    }
                    else if (this.pdfLanguage == 'eng') {
                        if (this.tempCeassation.ta4agree === true || typeof (this.tempCeassation.ta4agree) == 'undefined') {
                            loading.present().then(function () {
                                _this.pdf_Eng.pdfDocumentEng(_this.tempCeassation, null, _this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            });
                        }
                        else if (this.tempCeassation.ta4agree === false) {
                            var formType_2 = 'formB';
                            var formBTemp = this.gv.loc_woComplaints.get('formBCess' + this.wonum);
                            var formBData_2 = formBTemp.data;
                            // console.log('condi value is: ' + this.tempCeassation.condi);
                            loading.present().then(function () {
                                _this.pdf_Eng.pdfDocumentEng(_this.tempCeassation, null, formType_2, 'eng', formBData_2, 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Gangguan Sementara Bekalan Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemberitahuan Gangguan Sementara Bekalan Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            });
                        }
                    }
                }
                else {
                    this.gf.displayToast('Entered the required field');
                }
                break;
            }
            case 'formEvidenceCollect': {
                var formEvidanceValidate = this.validateEvidence();
                if (formEvidanceValidate == true) {
                    this.evidenceCollect.ta4formtype = 'nlec';
                    if (this.evidenceCollect.tnbLogo === undefined || this.evidenceCollect.tnbLogo === '' || this.evidenceCollect.tnbLogo === null) {
                        this.evidenceCollect.tnbLogo = this.tnblogoConvert;
                    }
                    this.evidenceCollect.ta4signstaff = this.signaturePad.toDataURL();
                    this.evidenceCollect.ta4signwitness = this.signaturePad2.toDataURL();
                    this.columns1 = [];
                    this.columns1.push('ta4item');
                    this.columns1.push('ta4describe');
                    this.tableItem = this.buildTableBody(this.evidenceCollect.evidenceItem, this.columns1);
                    console.log('Value ' + this.tableItem);
                    this.gv.loc_woComplaints.set('eviItem' + this.wonum, { woNo: this.wonum, data: this.tableItem });
                    this.gv.loc_woComplaints.set('evidenceCollection' + this.wonum, { woNo: this.wonum, data: this.evidenceCollect });
                    if (this.pdfLanguage == 'bhs') {
                        loading.present().then(function () {
                            _this.pdf_Bm.pdfDocumentBhs(_this.evidenceCollect, _this.tableItem, _this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.downloadPdf(_this.pdfObj, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");
                                _this.pdfObj.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    }
                    else if (this.pdfLanguage == 'eng') {
                        loading.present().then(function () {
                            _this.pdf_Eng.pdfDocumentEng(_this.evidenceCollect, _this.tableItem, _this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                _this.downloadPdf(_this.pdfObj2, "Pemberitahuan Pengambilan Bahan-Bahan Bukti");
                                _this.pdfObj2.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemberitahuan Pengambilan Bahan-Bahan Bukti.pdf";
                                    link.click();
                                });
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                            }).then(function () {
                                loading.dismiss();
                            });
                        });
                    }
                }
                else {
                    this.gf.displayToast('Entered the required field');
                }
                break;
            }
            case 'installationInspection': {
                var formInspectValidate = this.validateInspectInstall();
                if (formInspectValidate == true) {
                    this.installationInspection.ta4formtype = 'nlmi';
                    if (this.installationInspection.tempAddress === null || this.installationInspection.tempAddress === '' || typeof (this.installationInspection.tempAddress) === 'undefined') {
                        this.installationInspection.tempAddress = this.tempAddress;
                    }
                    if (this.installationInspection.tnbLogo === undefined || this.installationInspection.tnbLogo === '' || this.installationInspection.tnbLogo === null) {
                        this.installationInspection.tnbLogo = this.tnblogoConvert;
                    }
                    this.installationInspection.ta4signstaff = this.signaturePad.toDataURL();
                    if (this.formSelected === false) {
                        this.installationInspection.ta4signwitness = this.signaturePad2.toDataURL();
                    }
                    if (typeof (this.installationInspection.ta4serialNum) == "undefined" || this.installationInspection.ta4serialNum === null) {
                        this.installationInspection.ta4serialNum = '';
                    }
                    this.gv.loc_woComplaints.set('installationInspection' + this.wonum, { woNo: this.wonum, data: this.installationInspection });
                    if (this.pdfLanguage == 'bhs') {
                        loading.present().then(function () {
                            if (_this.formSelected === false) {
                                _this.pdf_Bm.pdfDocumentBhs(_this.installationInspection, null, _this.formType, 'bhs', 'Copperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            }
                            else if (_this.formSelected === true) {
                                _this.pdf_Bm.pdfDocumentBhs(_this.installationInspection, null, _this.formType, 'bhs', 'NotCopperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            }
                        });
                    }
                    else if (this.pdfLanguage == 'eng') {
                        debugger;
                        loading.present().then(function () {
                            if (_this.formSelected === false) {
                                _this.pdf_Eng.pdfDocumentEng(_this.installationInspection, null, _this.formType, 'eng', 'Copperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj2, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            }
                            else if (_this.formSelected === true) {
                                _this.pdf_Eng.pdfDocumentEng(_this.installationInspection, null, _this.formType, 'eng', 'NotCopperate', 'no Value', 'no Value')
                                    .then(function (result) {
                                    _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                    _this.downloadPdf(_this.pdfObj2, "Semakan Pepasangan Meter Elektrik");
                                    _this.pdfObj2.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Semakan Pepasangan Meter Elektrik.pdf";
                                        link.click();
                                    });
                                }).catch(function (error) {
                                    _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                }).then(function () {
                                    loading.dismiss();
                                });
                            }
                        });
                    }
                }
                else {
                    this.gf.displayToast('Entered all the required field');
                }
                break;
            }
            case 'prejudiceForm': {
                return new Promise(function (resolve, reject) {
                    _this.prejude.ta4formtype = 'nlwp';
                    if (_this.prejude.tnbLogo === undefined || _this.prejude.tnbLogo === '' || _this.prejude.tnbLogo === null) {
                        _this.prejude.tnbLogo = _this.tnblogoConvert;
                    }
                    if (_this.prejude.tempAddress === null || _this.prejude.tempAddress === '' || typeof (_this.prejude.tempAddress) === 'undefined') {
                        _this.prejude.tempAddress = _this.tempAddress;
                    }
                    _this.gv.loc_woComplaints.set('prejudiceForm' + _this.wonum, { woNo: _this.wonum, data: _this.prejude });
                    resolve();
                }).catch(function (reject) {
                    _this.gf.warningAlert("Error", 'Proccess not done yet', "Dismiss");
                }).then(function () {
                    if (_this.pdfLanguage === 'bhs') {
                        loading.present().then(function () {
                            _this.pdf_Bm.pdfDocumentBhs(_this.prejude, null, _this.formType, 'bhs', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.errorStatus = false;
                                _this.pdfObj = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", error, "Dismiss");
                                _this.errorStatus = true;
                                loading.dismiss();
                            }).then(function () {
                                if (_this.errorStatus === false) {
                                    _this.downloadPdf(_this.pdfObj, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                                    _this.pdfObj.getBuffer(function (buffer) {
                                        var blob = new Blob([buffer], { type: "application/pdf" });
                                        //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                        var link = document.createElement("a");
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                                        link.click();
                                    });
                                    loading.dismiss();
                                }
                            });
                        });
                    }
                    else if (_this.pdfLanguage === 'eng') {
                        loading.present().then(function () {
                            _this.pdf_Eng.pdfDocumentEng(_this.prejude, null, _this.formType, 'eng', 'no Value', 'no Value', 'no Value')
                                .then(function (result) {
                                _this.pdfObj2 = __WEBPACK_IMPORTED_MODULE_20_pdfmake_build_pdfmake___default.a.createPdf(result);
                                if (_this.platform.is("ios")) {
                                    _this.downloadPdf(_this.pdfObj2, "Pemakluman Sesi Penjelasan Tanpa Prejudis");
                                }
                                _this.pdfObj2.getBuffer(function (buffer) {
                                    var blob = new Blob([buffer], { type: "application/pdf" });
                                    //var blob = new Blob([this.pdfObj], { type: "application/pdf" });
                                    var link = document.createElement("a");
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = "Pemakluman Sesi Penjelasan Tanpa Prejudis.pdf";
                                    link.click();
                                });
                                loading.dismiss();
                            }).catch(function (error) {
                                _this.gf.warningAlert("Error", "PDF unable to create", "Dismiss");
                                _this.errorStatus = true;
                                loading.dismiss();
                            });
                        });
                    }
                });
            }
        }
    };
    /**
     * Created: Ameer (25/9/2019)
     * Description: Promise data for Zone and filter the Data
     */
    ComplaintFormPage.prototype.getZoneData = function () {
        var _this = this;
        console.log("Inside getZoneData");
        var queryPart = null;
        debugger;
        queryPart = WL.JSONStore.QueryPart().equal("siteid", this.itemOri.json.siteid);
        return new Promise(function (resolve, reject) {
            console.log("getZoneData >>> query ZONE by siteid");
            console.log("getZoneData >>> siteid : " + _this.itemOri.json.siteid);
            _this.jsonStore
                .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_Domains__["a" /* Domains */].Zone, queryPart)
                .then(function (result) {
                console.log("getZoneData >>> result : " + JSON.stringify(result));
                var zoneName;
                zoneName = result[0].json.ta0zone;
                console.log("getZoneData >>> zoneName : " + zoneName);
                if (zoneName !== null || typeof (zoneName) !== 'undefined') {
                    if (zoneName === 'SLG') {
                        _this.evidenceCollect.officeAddress = "SELANGOR";
                        _this.installationInspection.ta4department = "SELANGOR";
                        _this.officeAdrssSelect();
                    }
                    else if (zoneName === 'UTR') {
                        _this.evidenceCollect.officeAddress = "UTARA";
                        _this.installationInspection.ta4department = "UTARA";
                        _this.officeAdrssSelect();
                    }
                    else if (zoneName === 'SLT') {
                        _this.evidenceCollect.officeAddress = "SELATAN";
                        _this.installationInspection.ta4department = "SELATAN";
                        _this.officeAdrssSelect();
                    }
                    else if (zoneName === 'TMR') {
                        _this.evidenceCollect.officeAddress = "TIMUR";
                        _this.installationInspection.ta4department = "TIMUR";
                        _this.officeAdrssSelect();
                    }
                    else if (zoneName === 'KUL') {
                        _this.evidenceCollect.officeAddress = "KUALA LUMPUR";
                        _this.installationInspection.ta4department = "KUALA LUMPUR";
                        _this.officeAdrssSelect();
                    }
                }
                resolve();
            }).catch(function (error) {
                console.log('service failure : ' + error);
                reject();
            });
        });
    };
    /**
    * Created- Ameer (3/10/2019)
    * Description- Autopopulate position based on user name
    */
    ComplaintFormPage.prototype.getExecutiveDetails = function () {
        var index = this.myIndex;
        this.inspectNTest.staffNameCheck = this.executiveList[index].json.name;
        this.inspectNTest.ta4position = this.executiveList[index].json.position;
    };
    /**
     * Create by Ameer
     * List out of location address based on state selected
     * Edited (30/10/2019)
     */
    ComplaintFormPage.prototype.officeAdrssSelect = function () {
        if (this.formCust.ta4officezone === 'kl') {
            this.formCust.officeName = null;
            this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil, Zon Kuala Lumpur Aras G, Wisma TNB Kepong,Jalan Jinjang Permai 1, Jinjang Utara, 52000 Jinjang, Kuala Lumpur';
        }
        else if (this.formCust.ta4officezone === 'selat') {
            this.formCust.officeName = null;
            this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan) Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.';
        }
        else if (this.formCust.ta4officezone === 'tmr') {
            this.formCust.officeName = null;
            this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur) Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang';
        }
        else if (this.formCust.ta4officezone === 'sngor') {
            this.formCust.officeName = null;
            this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
        }
        else if (this.formCust.ta4officezone === 'utr') {
            this.formCust.officeName = null;
            this.formCust.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat,Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang';
        }
        if (this.formBCess.ta4officezone === 'kl') {
            this.formBCess.officeName = null;
            this.formBCess.ta4officeaddress = '';
            this.formBCess.ta4officephone = '';
            this.location = [];
            // this.location[0] = "RA Zon Kuala Lumpur TINGKAT 3, WISMA TNB KEPONG, JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
            this.location[0] = "SEAL KL TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR";
            this.location[1] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
        }
        else if (this.formBCess.ta4officezone === 'selat') {
            this.formBCess.officeName = null;
            this.formBCess.ta4officeaddress = '';
            this.formBCess.ta4officephone = '';
            this.location = [];
            // this.location[0] = "RA SOUTH Aras 12, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
            this.location[0] = "SEAL Selatan Aras 7, wisma tnb, Jalan yahya awal, 80100 Johor Bahru, Johor.";
        }
        else if (this.formBCess.ta4officezone === 'tmr') {
            this.formBCess.officeName = null;
            this.formBCess.ta4officeaddress = '';
            this.formBCess.ta4officephone = '';
            this.location = [];
            // this.location[0] = "RA Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
            this.location[0] = "SEAL Timur Aras 5, Wisma TNB Jalan Gambut, 25000 Kuantan, Pahang";
        }
        else if (this.formBCess.ta4officezone === 'sngor') {
            this.formBCess.officeName = null;
            this.formBCess.ta4officeaddress = '';
            this.formBCess.ta4officephone = '';
            this.location = [];
            this.location[0] = "TNB Damansara (SEAL Deterance KL) NO.25 & 27, JALAN PJU 3/46 SUNWAY DAMANSARA TECHNOLOGY PARK 47810 PETALING JAYA SELANGOR DARUL EHSAN";
            this.location[1] = "SEAL Selangor/Putrajaya & Cyberjaya Lot 55, Bangunan KRCC, Aras 3,Jln Kapar, 41400,Selangor Darul Ehsan";
            // this.location[2] = "Seksyen Jaminan Hasil (SEAL)Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor";
        }
        else if (this.formBCess.ta4officezone === 'utr') {
            this.formBCess.officeName = null;
            this.formBCess.ta4officeaddress = '';
            this.formBCess.ta4officephone = '';
            this.location = [];
            // this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
            this.location[0] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
        }
        // For Form B address selection
        if (this.prejude.ta4officezone === 'kl') {
            this.prejude.officeName = null;
            this.prejude.ta4officephone = '03-62545409';
            this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Kuala Lumpur)TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR';
        }
        else if (this.prejude.ta4officezone === 'selat') {
            this.prejude.officeName = null;
            this.prejude.ta4officephone = '07-2192166';
            this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan)Aras 12, wisma tnb,Jalan yahya awal,80100 Johor Bahru, Johor.';
        }
        else if (this.prejude.ta4officezone === 'tmr') {
            this.prejude.officeName = null;
            this.prejude.ta4officephone = '09-5155583';
            this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur)Aras 5, Wisma TNB Jalan Gambut,25000 Kuantan, Pahang';
        }
        else if (this.prejude.ta4officezone === 'sngor') {
            this.prejude.officeName = null;
            this.prejude.ta4officephone = '03-5510 2020';
            this.prejude.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
        }
        else if (this.prejude.ta4officezone === 'utr') {
            this.prejude.officeName = null;
            this.prejude.ta4officephone = '04-3820265/ 04-5380108';
            this.prejude.ta4officeaddress = 'Seksyen Revenue Assurance Zon Utara, No. 3031, Jalan Tenaga,Seberang Jaya, 13700 Perai,Pulau Pinang.';
            this.location = [];
            this.location[0] = "Seksyen Jaminan Hasil (Zon Utara) Bahagian Pembahagian TNB, Aras 2, Wisma TNB, No 1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang";
            this.location[1] = "SEAL Utara Aras 2, Wisma TNB,No.1, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Pulau Pinang.";
        }
        //end for prejude
        if (this.installationInspection.ta4officezone === 'kl') {
            this.installationInspection.officeName = null;
            this.installationInspection.ta4officephone = "03-62545409";
            this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Kuala Lumpur)TINGKAT 3, WISMA TNB KEPONG,JLN JINJANG PERMAI 1,JINJANG UTARA,52000 JINJANG, KUALA LUMPUR';
        }
        else if (this.installationInspection.ta4officezone === 'selat') {
            this.installationInspection.officeName = null;
            this.installationInspection.ta4officephone = "07-2192166";
            this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selatan)Aras 12, wisma tnb,Jalan yahya awal,80100 Johor Bahru, Johor.';
        }
        else if (this.installationInspection.ta4officezone === 'tmr') {
            this.installationInspection.officeName = null;
            this.installationInspection.ta4officephone = "09-5155583";
            this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Timur)Aras 5, Wisma TNB Jalan Gambut,25000 Kuantan, Pahang';
        }
        else if (this.installationInspection.ta4officezone === 'sngor') {
            this.installationInspection.officeName = null;
            this.installationInspection.ta4officephone = "03-5510 2020";
            this.installationInspection.ta4officeaddress = 'Seksyen Jaminan Hasil (Zon Selangor/Putrajaya/Cyberjaya) Aras 3, Wisma TNB Shah Alam, Persiaran Damai, Seksyen 11, 40702 Shah Alam, Selangor';
        }
        else if (this.installationInspection.ta4officezone === 'utr') {
            this.installationInspection.officeName = null;
            this.installationInspection.ta4officephone = "04-3820265/ 04-5380108";
            this.installationInspection.ta4officeaddress = ' Seksyen Revenue Assurance Zon Utara, No. 3031, Jalan Tenaga,Seberang Jaya, 13700 Perai,Pulau Pinang.';
        }
        switch (this.evidenceCollect.officeAddress) {
            case 'KUALA LUMPUR': {
                this.evidenceCollect.ta4officezone = 'Kuala Lumpur';
                break;
            }
            case 'SELATAN': {
                this.evidenceCollect.ta4officezone = 'Selatan';
                break;
            }
            case 'UTARA': {
                this.evidenceCollect.ta4officezone = 'Utara';
                break;
            }
            case 'SELANGOR': {
                this.evidenceCollect.ta4officezone = 'Selangor';
                break;
            }
            case 'TIMUR': {
                this.evidenceCollect.ta4officezone = 'Timur';
            }
        }
        // Reset validation indicator..
        this.stationEvi = false;
    };
    ComplaintFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-complaint-form',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-compliance/compliance-form/complaint-form.html"*/'<!--\n/* \n * Modification History :\n * Date         version     Modified By   Method            Description\n * 2021-03-23   008         Andy Chang    pdfDocumentEng    update compliance form\n * \n */\n -->\n\n<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Compliance Form</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="sealHeader">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button clear class="backbutton" (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow backbutton"> Back </ion-icon>\n        </button>\n      </ion-col>\n      <header [pageTitle]="pageTitle" col-9 col-md-9 col-sm-9>\n      </header> -->\n<!--   <ion-col col-7 col-md-7 col-sm-7 align-self-center>\n        <div class="pageTitle">Compliance Form\n        </div>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;">\n        <div *ngIf=\'gv.testMobile\'>\n          <ion-icon class="flash_plnt" name="custom-connected" [style.color]="gv.testMobile ? \'red\':\'#00e600\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </div>\n        <div *ngIf=\'!gv.testMobile\'>\n          <ion-icon class="flash_plnt" name="custom-disconnect" [style.color]="gv.testMobile ? \'red\':\'#00e600\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </div>\n      </ion-col> -->\n<!--       <ion-col col-2 col-sm-4 style="text-align: right;padding-top: 0px;">\n        <button ion-button icon-only clear (click)="presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-col> -->\n<!-- </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n\n<ion-content padding>\n\n  <!-- Start: Installation, Inspection & Testing -->\n  <ion-list ion-row *ngIf="formType === \'inspect&Test\'">\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Installation, Inspection & Testing</strong>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label ion-col col-md-2 color="primary">Date</ion-label>\n      <ion-input ion-col col-md-6 type="text" placeholder="Choose Date" value="{{ inspectNTest.ta4datetime }}"\n        readonly="true" style="padding-left: 1px;">\n      </ion-input>\n      <ion-icon name="calendar" item-end (click)="presentPopover($event,\'installTest\')"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-2 color="primary">To</ion-label>\n      <ion-input ion-col col-md-10 type="text" placeholder="Auto Populate" value="{{ inspectNTest.ta4custname }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-label ion-col col-md-2 color="primary">Address</ion-label>\n      <ion-textarea style="margin-left: -2px;" rows="3" placeholder="Auto Populate"\n        [(ngModel)]="inspectNTest.ta4custaddress">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notification Letter of TNB Meter Installation, Inspection and Testing</strong>\n    </ion-item-divider>\n\n    <ion-item no-lines>\n      <ion-label text-wrap style="text-align: justify;letter-spacing: 1px;">\n        Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to\n        ensure it is working in good condition.\n      </ion-label>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label text-wrap style="text-align: justify;letter-spacing: 1px;">\n        Your kind cooperation during the inspection and testing process is much appreciated.\n      </ion-label>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label text-wrap style="text-align: justify;letter-spacing: 1px;">\n        For any enquiries, you may contact us at 1300-88-5454.\n      </ion-label>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label text-wrap style="text-align: justify;letter-spacing: 1px;">\n        Thank you.\n      </ion-label>\n    </ion-item>\n    <!-- 008\n    <ion-item no-lines>\n      <ion-label text-center style="font-style: italic;letter-spacing: 1px;">\n        <strong>"POWERING THE NATION"</strong>\n      </ion-label>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label text-center style="font-style: italic;letter-spacing: 1px;">\n        <strong>"BETTER. BRIGHTER"</strong>\n      </ion-label>\n    </ion-item>\n    -->\n    <!-- 008 start -->\n    <ion-item no-lines>\n      <ion-label text-center style="font-style: italic;letter-spacing: 1px;">\n        <strong>"BETTER WORLD. BRIGHTER LIVES"</strong>\n      </ion-label>\n    </ion-item>\n    <!-- 008 end -->\n    <ion-item no-lines style="letter-spacing: 1px;">\n      <ion-label>Yours Sincerely,</ion-label>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-fab>\n        <button ion-fab mini mode="md" (click)="clearSign(\'InspectNTestManager\')">\n          <ion-icon name="md-refresh"></ion-icon>\n        </button>\n      </ion-fab>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1>\n      </signature-pad>\n    </ion-item>\n    <ion-item>\n      <p *ngIf="staffNameSelect" style="margin-top: 10px;font-style: italic;font-size: 14px;color: red;">\n        *Person in charge is required!\n      </p>\n    </ion-item>\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Person In Charge</ion-label>\n      <ion-select ion-col col-md-9 [(ngModel)]="inspectNTest.executiveDetails" [selectOptions]="executiveDetails"\n        (ionChange)="getExecutiveDetails()" placeholder="Person in Charge"\n        style="width: -webkit-fill-available;padding-left: 13px;padding-right: 13px;">\n        <ion-option *ngFor="let executive of executiveList ; let j = index" value="{{ executive.json.userid }}"\n          (ionSelect)="myIndex = j">\n          {{ executive.json.name }} ({{ executive.json.userid }})\n        </ion-option>\n        <!-- <ion-option *ngFor="let persons  of exactData ; let j=index" value="{{ persons }}" (ionSelect)="myIndex = j">\n          {{ persons }}\n        </ion-option> -->\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Position</ion-label>\n      <ion-input ion-col col-md-9 [(ngModel)]="inspectNTest.ta4position" type="text" placeholder="Position">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Department</ion-label>\n      <ion-textarea ion-col col-md-9 [(ngModel)]="inspectNTest.ta4department" rows="3" placeholder="Department">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-list ion-row radio-group style="margin: 0;" [(ngModel)]="inspectNTest.ta4attendance"\n      (ionChange)="checkforRadio()">\n      <ion-item-divider class="item-divider-header">\n        <ion-icon name="remove-circle" item-start></ion-icon>\n        <strong>For TNB Use</strong>\n      </ion-item-divider>\n\n      <ion-item ion-col col-md-12>\n        <ion-label color="primary">Please select customer attendance</ion-label>\n      </ion-item>\n\n      <ion-item ion-col col-md-6>\n        <ion-label>Customer present</ion-label>\n        <ion-radio value="pre"></ion-radio>\n      </ion-item>\n\n      <ion-item ion-col col-md-6>\n        <ion-label>Customer absent</ion-label>\n        <ion-radio value="abs"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item no-lines ion-col col-md-12>\n      <ion-label>Verify By:</ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <p *ngIf="checkSign2" style="margin: 0px 0px 10px 0px;;font-style: italic;font-size: 14px;color: red;">\n        *Signature is required!\n      </p>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Staff Name</ion-label>\n      <ion-input ion-col col-md-9 type="text" readonly="true" value="{{ inspectNTest.ta4staffname }}"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Staff No.</ion-label>\n      <ion-input ion-col col-md-9 type="text" readonly="true" value="{{ inspectNTest.ta4staffno }}"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <!-- End: Installation, Inspection & Testing -->\n\n  <!-- Start: Installation & Inspection -->\n  <ion-list ion-row *ngIf="formType === \'installationInspection\'">\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Installation & Inspection</strong>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label ion-col col-md-2 color="primary">Date</ion-label>\n      <ion-input ion-col col-md-9 type="test" placeholder="Choose date" readonly="true"\n        value="{{ installationInspection.ta4indatetime }}"></ion-input>\n      <ion-icon name="calendar" item-end (click)="presentPopover($event,\'meterInstallInspect\')"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-2 color="primary">Name</ion-label>\n      <ion-input ion-col col-md-10 type="text" placeholder="Auto Populate"\n        value="{{ installationInspection.ta4custname }}"></ion-input>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-label ion-col col-md-2 color="primary">Address</ion-label>\n      <ion-textarea style="margin-left: -2px;" rows="3" value="{{ installationInspection.ta4custaddress }}"\n        placeholder="Auto Populate">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notice of TNB Meter Installation & Inspection</strong>\n    </ion-item-divider>\n\n    <ion-item text-wrap no-lines>\n      <ion-label ion-col col-md-6>Dear valued TNB Customer,</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        Please be informed we have conducted inspections and testing of meter installation that records the usage of\n        electricity to the premises at address <strong>{{ installationInspection.ta4custaddress }}</strong> with\n        Contract Account No. <strong>{{ installationInspection.ta4accountno }}</strong> on\n        <strong>{{ installationInspection.ta4indatetime }}</strong> at\n        <strong>{{ installationInspection.ta4endtime }}</strong>.\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Change Time</ion-label>\n      <ion-datetime ion-col col-md-8 style="margin-left: -22px;" displayFormat="HH:mm" pickerFormat="HH:mm"\n        [(ngModel)]="installationInspection.ta4endtime" placeholder="Choose time"></ion-datetime>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        For your information:\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Evidence Bag Serial No.</ion-label>\n      <ion-input ion-col col-md-8 [(ngModel)]="installationInspection.ta4serialNum" placeholder="Enter serial number">\n      </ion-input>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;margin-top: 12px;">\n      <ion-label ion-col col-md-12>\n        The inspection results show that the meter does not record actual eletricity electricity consumption readings as\n        has been explained previously to you. Please be informed that TNB will claim the underbill charge from you.\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        For any enquiries, you may contact us at:\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Office</ion-label>\n      <ion-input ion-col col-md-9 type="text" placeholder="Office" value="Kedai Tenaga yang berdekatan"></ion-input>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-label ion-col col-md-3 color="primary">Address</ion-label>\n      <ion-textarea ion-col col-md-9 placeholder="Address" value="{{ installationInspection.ta4officeaddress }}">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Phone No.</ion-label>\n      <ion-input ion-col col-md-9 type="text" placeholder="Phone No."\n        value="{{ installationInspection.ta4officephone }}"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines text-wrap style="line-height: 30px; text-align: justify;margin-top: 12px;">\n      <ion-label ion-col col-md-12>\n        Thank you.\n      </ion-label>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>Part A: Staff/Examiner Details</strong>\n    </ion-item-divider>\n\n    <ion-item no-lines>\n      <ion-label>Staff/Examiner Signature:</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Name</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Name" readonly="true"\n        value="{{ installationInspection.ta4staffname }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Staff No.</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Name" readonly="true"\n        value="{{ installationInspection.ta4staffno }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Unit</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Name" readonly="true" value="Seal Unit Metering"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="officeNameSelect && !installationInspection.ta4department">\n      <p style="margin: 0px 0px 10px 0px;;font-style: italic;font-size: 14px;color: red;">\n        *Office is required!\n      </p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-3 color="primary">Office</ion-label>\n      <ion-input ion-col col-md-8 type="text" [(ngModel)]="installationInspection.ta4department" placeholder="Office">\n      </ion-input>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>Part B: Customer/Witness Details</strong>\n    </ion-item-divider>\n\n    <ion-list class="custom-item-radio-border-bottom" ion-row radio-group no-lines\n      [(ngModel)]="installationInspection.ta4agree" style="margin: 0;width: -webkit-fill-available;">\n      <ion-item ion-col col-md-6>\n        <ion-label>Customer cooperate</ion-label>\n        <ion-radio (click)="typeform()" value="true"></ion-radio>\n      </ion-item>\n      <ion-item ion-col col-md-6>\n        <ion-label>Customer does not cooperate</ion-label>\n        <ion-radio (click)="typeform()" value="false"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item no-lines *ngIf=\'!formSelected\'>\n      <ion-label>Accepted By:</ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\'!formSelected\'>\n      <ion-fab>\n        <button ion-fab mini mode="md" (click)="clearSign(\'installInspectWitness\')">\n          <ion-icon name="md-refresh"></ion-icon>\n        </button>\n      </ion-fab>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n    </ion-item>\n\n    <ion-item *ngIf=\'!formSelected\'>\n      <ion-label ion-col col-md-2 color="primary">Name</ion-label>\n      <ion-input ion-col col-md-9 type="text" placeholder="Name" value="{{ installationInspection.ta4witnessname }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\'!formSelected\'>\n      <ion-label ion-col col-md-2 color="primary">Tel No.</ion-label>\n      <ion-input ion-col col-md-9 type="text" [(ngModel)]="installationInspection.ta4witnessphone" placeholder="Name"\n        value="{{ installationInspection.ta4witnessphone }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\'!formSelected\'>\n      <ion-label ion-col col-md-2 color="primary">Date/Time</ion-label>\n      <ion-datetime ion-col col-md-9 style="margin-left: 16px;" displayFormat="DD/MM/YYYY HH:mm"\n        placeholder="Choose Date/Time" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="installationInspection.ta4datetime"\n        (ionChange)="formatTimeDisplay()"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n  <!-- End: Installation & Inspection -->\n\n  <!-- Start: Evidence Collection -->\n  <ion-list ion-row *ngIf="formType === \'formEvidenceCollect\'">\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Evidence Collection</strong>\n    </ion-item-divider>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notification Letter of Evidence Collection</strong>\n    </ion-item-divider>\n\n    <ion-item ion-col col-md-8>\n      <ion-label ion-col col-md-4 color="primary">Contract Account</ion-label>\n      <ion-input ion-col col-md-8 type="number" placeholder="Contract Account" readonly="true" text-right\n        value="{{ evidenceCollect.ta4accountno }}"></ion-input>\n    </ion-item>\n\n    <ion-item ion-col col-md-4>\n      <ion-label ion-col col-md-4 color="primary">Station</ion-label>\n      <ion-input ion-col col-md-8 type="number" placeholder="Station Code" readonly="true" text-right\n        value="{{ evidenceCollect.station }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Customer Name</ion-label>\n      <ion-input ion-col col-md-9 type="text" placeholder="Registered Customer Name" readonly="true" text-right\n        value="{{ evidenceCollect.ta4custname }}"></ion-input>\n    </ion-item>\n\n    <ion-item text-wrap style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        I: <strong>{{ evidenceCollect.ta4staffname }}</strong>\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        Staff No.: <strong>{{ evidenceCollect.ta4staffno }}</strong> claming to have taken the following items :-\n      </ion-label>\n    </ion-item>\n\n    <ion-list ion-row style="width: -webkit-fill-available;margin: 0px">\n      <ion-list-header\n        style="margin: 25px 0px 0px 16px;padding: 0px 0px 0px 18px;border: 0.55px solid lightgray;border-radius: 10px;">\n        List of Evidence\'s\n        <button ion-button round item-end style="padding: 12px;" (click)="addEviItem()" mode="md">Add</button>\n      </ion-list-header>\n\n      <span *ngFor="let item of evidenceCollect.evidenceItem; let j = index"\n        style="width: -webkit-fill-available;border: 0.55px solid lightgrey;border-radius: 10px;margin: 10px 1px 7px 17px;">\n        <ion-item style="border-radius: 10px 10px 0px 0px;">\n          <ion-label><strong>Item No. {{ j+1 }}</strong></ion-label>\n          <ion-icon name="trash" color="danger" item-end (click)="deleteEviItem(j)" *ngIf="j > 0"></ion-icon>\n        </ion-item>\n\n        <ion-item *ngIf="itemValEvi || eviTempDmg">\n          <p *ngIf="itemValEvi" style="color: red;font-size: 14px;font-style: italic;letter-spacing: 1px;">\n            *Name of evidence is empty!\n          </p>\n          <p *ngIf="eviTempDmg" style="color: red;font-size: 14px;font-style: italic;letter-spacing: 1px;">\n            *Description of evidence is empty!\n          </p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label ion-col col-md-2 color="primary">Item</ion-label>\n          <ion-input ion-col col-md-10 mode="md" type="text" placeholder="Name" [(ngModel)]="item.ta4item">\n          </ion-input>\n        </ion-item>\n\n        <ion-item style="border-radius: 0px 0px 25px 25px;">\n          <ion-label ion-col col-md-2 color="primary">Description</ion-label>\n          <ion-textarea [(ngModel)]="item.ta4describe" rows="4" placeholder="Description"></ion-textarea>\n        </ion-item>\n      </span>\n\n      <span *ngIf="eviItem"\n        style="width: -webkit-fill-available;border: 0.55px solid red;border-radius: 10px;margin: 10px 1px 7px 17px;padding: 0px 0px 1px 0px;">\n        <ion-item no-lines style="border-radius: 10px 10px 25px 25px;">\n          <ion-icon name="close-circle" color="danger" item-start></ion-icon>\n          <ion-label style="color: red;font-size: 14px;font-style: italic;letter-spacing: 1px;">*Please add atleast\n            one(1) evidence..</ion-label>\n        </ion-item>\n      </span>\n\n      <span *ngIf="!evidenceCollect.evidenceItem && !eviItem"\n        style="width: -webkit-fill-available;border: 0.55px solid lightgrey;border-radius: 10px;margin: 10px 1px 7px 17px;padding: 0px 0px 1px 0px;">\n        <ion-item no-lines style="border-radius: 10px 10px 25px 25px;">\n          <ion-icon name="close-circle" color="danger" item-start></ion-icon>\n          <ion-label>No evidence\'s</ion-label>\n        </ion-item>\n      </span>\n    </ion-list>\n\n    <ion-item text-wrap style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        from the premises located at <strong>{{ evidenceCollect.ta4custaddress }}</strong>.\n      </ion-label>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>Part A: Staff Details</strong>\n    </ion-item-divider>\n\n    <ion-item>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1>\n      </signature-pad>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Name</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Name" value="{{ evidenceCollect.ta4staffname }}"\n        readonly="true"></ion-input>\n      <ion-icon name="contact" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Staff No.</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Staff No." value="{{ evidenceCollect.ta4staffno }}"\n        readonly="true"></ion-input>\n      <ion-icon name="card" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Identification No.</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Identification No."\n        [(ngModel)]="evidenceCollect.ta4staffindenkard" readonly="false"></ion-input>\n      <ion-icon name="card" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Designation</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Identification No." value="Technician" readonly="true">\n      </ion-input>\n      <ion-icon name="medal" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf="stationEvi">\n      <p style="color: red;font-size: 14px;font-style: italic;letter-spacing: 1px;">\n        *Station is empty!\n      </p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Station</ion-label>\n      <ion-select ion-col col-md-8 [(ngModel)]="evidenceCollect.officeAddress" placeholder="Station"\n        [selectOptions]="OfficeAddress" (ionChange)="officeAdrssSelect()" style="margin-left: -23px;">\n        <ion-option value="KUALA LUMPUR">Kuala Lumpur</ion-option>\n        <ion-option value="SELATAN">Selatan</ion-option>\n        <ion-option value="UTARA">Utara</ion-option>\n        <ion-option value="SELANGOR">Selangor</ion-option>\n        <ion-option value="TIMUR">Timur</ion-option>\n      </ion-select>\n      <ion-icon name="pin" item-end style="margin-right: 12px;"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Date/Time</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Date/Time"\n        value="{{ evidenceCollect.ta4datetime }} - {{ evidenceCollect.ta4starttime }}" readonly="true"></ion-input>\n      <ion-icon name="time" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>Part B: Witness Details</strong>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-fab>\n        <button ion-fab mini mode="md" (click)="clearSign(\'evidenceWitness\')">\n          <ion-icon name="md-refresh"></ion-icon>\n        </button>\n      </ion-fab>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2>\n      </signature-pad>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Name</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Name" [(ngModel)]="evidenceCollect.ta4witnessname">\n      </ion-input>\n      <ion-icon name="contact" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-4 color="primary">Identification No.</ion-label>\n      <ion-input ion-col col-md-8 type="text" placeholder="Identification No."\n        [(ngModel)]="evidenceCollect.ta4witnessidenkard">\n      </ion-input>\n      <ion-icon name="card" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-label ion-col col-md-4 color="primary">Address</ion-label>\n      <ion-textarea ion-col rows="3" value="{{ evidenceCollect.ta4custaddress }}"></ion-textarea>\n      <ion-icon name="pin" item-end style="margin-right: 12px;"></ion-icon>\n    </ion-item>\n\n    <ion-item col-md-6>\n      <ion-label ion-col col-md-4 color="primary">Date</ion-label>\n      <ion-input type="text" placeholder="Date/Time" value="{{ evidenceCollect.ta4indatetime }}" readonly="true">\n      </ion-input>\n      <ion-icon name="calendar" item-end (click)="presentPopover($event,\'evidenceDate2\')"></ion-icon>\n    </ion-item>\n\n    <ion-item col-md-6>\n      <ion-label ion-col col-md-4 color="primary">Time</ion-label>\n      <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" style="margin-left: -11px;"\n        [(ngModel)]="evidenceCollect.ta4endtime" placeholder="Enter time"></ion-datetime>\n      <ion-icon name="time" item-end></ion-icon>\n    </ion-item>\n\n\n  </ion-list>\n  <!-- End: Evidence Collection -->\n\n  <!-- Start: Cessation/Temporary Interruption of Electricity Supply-->\n  <ion-list ion-row *ngIf=\'formType === "tempCeassation"\'>\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Cessation/Temporary Interruption of Electricity Supply</strong>\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label ion-col col-md-2 color="primary">Date</ion-label>\n      <ion-input ion-col col-md-6 type="text" placeholder="Choose Date" value="{{ tempCeassation.ta4datetime }}"\n        readonly="true" style="padding-left: 1px;">\n      </ion-input>\n      <ion-icon name="calendar" item-end (click)="presentPopover($event,\'installTest\')"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label ion-col col-md-2 color="primary">To</ion-label>\n      <ion-input ion-col col-md-10 type="text" placeholder="Auto Populate" value="{{ tempCeassation.ta4custname }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item-divider class="item-divider-header" text-wrap>\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notification Notice Cessation/Temporary Interruption of Electricity Supply for The Purpose of Testing &\n        Inspections of TNB\'s Meter Installation</strong>\n    </ion-item-divider>\n\n    <ion-item text-wrap no-lines>\n      <ion-label ion-col col-md-6>Dear valued TNB Customer,</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        Please be informed that TNB is conducting testing and inspections of TNB\'s meter installations at your premises\n        to ensure that it works properly.\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        In view of the same, please be informed that the electricity supply at your premises will be\n        cessationed/temporarily interrupted on <strong>{{ tempCeassation.ta4indatetime }}</strong> from\n        <strong>{{ tempCeassation.ta4starttime }}</strong> until <strong>{{ tempCeassation.ta4endtime }}</strong>.\n      </ion-label>\n    </ion-item>\n\n    <ion-row col-md-12 style="margin-left: 15px;">\n      <ion-col col-md-7\n        [class]="((dateCess || fromInspectDate || ToinspectDate) && (!tempCeassation.ta4indatetime || !tempCeassation.ta4starttime || !tempCeassation.ta4endtime)) ? \'custom-form-box-red\' : \'custom-form-box\'">\n        <ion-item text-wrap style="border-radius: 10px 10px 0px 0px;"\n          *ngIf="(dateCess || fromInspectDate || ToinspectDate) && (!tempCeassation.ta4indatetime || !tempCeassation.ta4starttime || !tempCeassation.ta4endtime)">\n          <p style="margin-top: 10px;font-style: italic;font-size: 14px;color: red;">\n            *Required date and time field.\n          </p>\n        </ion-item>\n\n        <ion-item style="border-radius: 10px 10px 0px 0px;">\n          <ion-label fixed color="primary">*Date</ion-label>\n          <ion-input type="text" value="{{ tempCeassation.ta4indatetime }}" readonly="true" placeholder="Date"\n            (click)="presentPopover($event,\'inspectDateFrom\')">\n          </ion-input>\n          <ion-icon name="calendar" item-end (click)="presentPopover($event,\'inspectDateFrom\')"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-label fixed color="primary">*From</ion-label>\n          <ion-datetime [(ngModel)]="tempCeassation.ta4starttime" displayFormat="HH:mm" placeholder="Start Time">\n          </ion-datetime>\n          <ion-icon name="time" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item no-lines style="border-radius: 0px 0px 10px 10px;">\n          <ion-label fixed color="primary">*To</ion-label>\n          <ion-datetime [(ngModel)]="tempCeassation.ta4endtime" displayFormat="HH:mm" placeholder="End Time">\n          </ion-datetime>\n          <ion-icon name="time" item-end></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-label ion-col col-md-12>\n        Your kind cooperation is much appreciated. <br> Thank you.\n      </ion-label>\n    </ion-item>\n    <!-- 008\n    <ion-item no-lines>\n      <ion-label text-center style="font-style: italic;letter-spacing: 1px;">\n        <strong>"POWERING THE NATION"</strong>\n      </ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-center style="font-style: italic;letter-spacing: 1px;">\n        <strong>"BETTER. BRIGHTER"</strong>\n      </ion-label>\n    </ion-item>\n    -->\n    <!-- 008 start -->\n    <ion-item no-lines>\n      <ion-label text-center style="font-style: italic;letter-spacing: 1px;">\n        <strong>"BETTER WORLD. BRIGHTER LIVES"</strong>\n      </ion-label>\n    </ion-item>\n    <!-- 008 end -->\n\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>Part A: Staff Details</strong>\n    </ion-item-divider>\n\n    <ion-item>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1></signature-pad>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="primary">Name</ion-label>\n      <ion-input type="text" placeholder="Name" value="{{ tempCeassation.ta4staffname }}" readonly="true"></ion-input>\n      <ion-icon name="contact" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed color="primary">Staff No.</ion-label>\n      <ion-input type="text" placeholder="Staff No." value="{{ tempCeassation.ta4staffno }}" readonly="true">\n      </ion-input>\n      <ion-icon name="card" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;">\n      <ion-checkbox [(ngModel)]="tempCeassation.ta4agree" (click)=\'assignDetailsFormB()\'></ion-checkbox>\n      <ion-label ion-col col-md-12>\n        I hereby fully understand the contents of this notice and <strong>{{ formB }}</strong> that the electricity\n        supply to be cessationed/temporarily interupted for the abovesaid purposes.\n      </ion-label>\n    </ion-item>\n\n    <ion-item-divider *ngIf=\'tempCeassation.ta4agree\' class="item-divider-header">\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>Part B: Customer/Owner/Representative Details</strong>\n    </ion-item-divider>\n\n    <ion-item *ngIf=\'tempCeassation.ta4agree\'>\n      <ion-fab>\n        <button ion-fab mini mode="md" (click)="clearSign(\'cessationCustomer\')">\n          <ion-icon name="md-refresh"></ion-icon>\n        </button>\n      </ion-fab>\n      <signature-pad [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2></signature-pad>\n    </ion-item>\n\n    <ion-item *ngIf=\'tempCeassation.ta4agree\'>\n      <ion-label ion-col col-md-3 color="primary">Name</ion-label>\n      <ion-input type="text" [(ngModel)]="tempCeassation.ta4witnessname"\n        placeholder="Name (Customer/Owner/Representative)" readonly="false"></ion-input>\n      <ion-icon name="contact" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\'tempCeassation.ta4agree\'>\n      <ion-label ion-col col-md-3 color="primary">Identification No.</ion-label>\n      <ion-input type="text" [(ngModel)]="tempCeassation.ta4witnessidenkard" placeholder="Identification No."\n        readonly="false"></ion-input>\n      <ion-icon name="card" item-end></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\'tempCeassation.ta4agree\'>\n      <ion-label ion-col col-md-3 color="primary">Date/Time</ion-label>\n      <ion-datetime [(ngModel)]="tempCeassation.datetime" placeholder="Date/Time" displayFormat="DD/MM/YYYY HH:mm"\n        pickerFormat="DD/MM/YYYY HH:mm" (ionChange)=\'formatTimeDisplay()\'>\n      </ion-datetime>\n      <ion-icon name="time" item-end></ion-icon>\n    </ion-item>\n\n    <ion-row\n      style="width: -webkit-fill-available;border: 1px solid slategrey;border-radius: 17px;margin: 8px;padding: 10px;letter-spacing: 1px;font-size: 15px;"\n      *ngIf=\'!tempCeassation.ta4agree\'>\n      <ion-item-divider class="item-divider-header" style="letter-spacing: 1px;font-size: 15px;">\n        <ion-icon name="paper" item-start></ion-icon>\n        <strong>Form B</strong>\n      </ion-item-divider>\n\n      <ion-item text-wrap no-lines text-center text-uppercase style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>Licensee Supply Regulations 1990</ion-label>\n      </ion-item>\n\n      <ion-item text-wrap no-lines text-center style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>Form B</ion-label>\n      </ion-item>\n\n      <ion-item text-wrap no-lines text-center style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>[sub-regulation 6A(2)]</ion-label>\n      </ion-item>\n\n      <ion-item text-wrap no-lines text-center text-uppercase style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>Malaysia</ion-label>\n      </ion-item>\n\n      <ion-item text-wrap no-lines text-center text-uppercase style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>STATE OF {{ formBCess.ta4statename || \'-\' }}</ion-label>\n      </ion-item>\n\n      <ion-item col-md-6 offset-md-3 [class]="(formBState && !formBCess.ta4statename) ? \'custom-box-red\' : \'custom-box\'"\n        style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label fixed color="primary" style="text-align: center;">State</ion-label>\n        <ion-select ion-col col-md-8 [(ngModel)]="formBCess.ta4statename" placeholder="Choose"\n          style="text-align: center;">\n          <ion-option value="Perak">Perak</ion-option>\n          <ion-option value="Perlis">Perlis</ion-option>\n          <ion-option value="Terengganu">Terengganu</ion-option>\n          <ion-option value="Kelantan">Kelantan</ion-option>\n          <ion-option value="Kedah">Kedah</ion-option>\n          <ion-option value="Selangor">Selangor</ion-option>\n          <ion-option value="Sabah">Sabah</ion-option>\n          <ion-option value="Sarawak">Sarawak</ion-option>\n          <ion-option value="Wilayah Persekutuan">Wilayah Persekutuan</ion-option>\n          <ion-option value="Melaka">Melaka</ion-option>\n          <ion-option value="Negeri Sembilan">Negeri Sembilan</ion-option>\n          <ion-option value="Johor">Johor</ion-option>\n          <ion-option value="Pahang">Pahang</ion-option>\n          <ion-option value="Putrajaya">Putrajaya</ion-option>\n          <ion-option value="Pulau Pinang">Pulau Pinang</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-lines style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label text-wrap no-lines text-center text-uppercase>Electricity Supply Act 1990</ion-label>\n      </ion-item>\n\n      <ion-item col-md-7 no-lines style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>To :</ion-label>\n      </ion-item>\n\n      <ion-item col-md-7 style="letter-spacing: 1px;font-size: 15px;">\n        <ion-input type="text" placeholder="Auto Populate" value="{{ formBCess.ta4custname }}" readonly="true">\n        </ion-input>\n      </ion-item>\n\n      <ion-item col-md-7 text-wrap style="letter-spacing: 1px;font-size: 15px;">\n        <ion-textarea rows="3" placeholder="Auto Populate" value="{{ formBCess.ta4custaddress }}" readonly="true"\n          style="text-align: justify;">\n        </ion-textarea>\n      </ion-item>\n\n      <ion-item col-md-7 style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label>Sir/Madam/Mr/Messrs,</ion-label>\n      </ion-item>\n\n      <ion-item-divider class="item-divider-header">\n        <ion-icon name="filing" item-start></ion-icon>\n        <strong>Notice of Temporary Cessation/Intrruption of Electricity Supply</strong>\n      </ion-item-divider>\n\n      <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n        <ion-label ion-col col-md-12>\n          Please be informed that the supply of electricity at <strong>{{ formBCess.tenant || \'...\' }}</strong> (address\n          of consumer/area to be affected) shall be temporarily ceased/interupted on\n          <strong>{{ formBCess.ta4datetime || \'...\'}}</strong> (date) from\n          <strong>{{ formBCess.ta4starttime  || \'...\'}}</strong> (start time) to\n          <strong>{{ formBCess.ta4endtime || \'...\' }}</strong> (end time) for the purpose of\n          <strong>{{ formBCess.ta4purpose || \'...\' }}</strong> (please specify).\n        </ion-label>\n      </ion-item>\n\n      <ion-row col-md-12 style="margin-left: 15px;margin-bottom: 20px;">\n        <ion-col col-md-9\n          [class]="((formBDate || formBStartInteruptTime || formBEndInteruptTime || formBPurpose) && (!formBCess.ta4datetime || !formBCess.ta4starttime || !formBCess.ta4endtime || !formBCess.ta4purpose)) ? \'custom-form-box-red\' : \'custom-form-box\'">\n          <ion-item\n            *ngIf="(formBDate || formBStartInteruptTime || formBEndInteruptTime || formBPurpose) && (!formBCess.ta4datetime || !formBCess.ta4starttime || !formBCess.ta4endtime || !formBCess.ta4purpose)"\n            text-wrap style="letter-spacing: 1px;font-size: 15px;;border-radius: 10px 10px 0px 0px;">\n            <p style="margin-top: 10px;font-style: italic;font-size: 14px;color: red;">\n              *Required date, time and purpose fields.\n            </p>\n          </ion-item>\n\n          <ion-item style="letter-spacing: 1px;font-size: 15px;border-radius: 10px 10px 0px 0px;">\n            <ion-label fixed color="primary">*Date</ion-label>\n            <ion-input type="text" value="{{ formBCess.ta4datetime }}" readonly="true" placeholder="Date"\n              (click)="presentPopover($event,\'FormBInteruptDate\')">\n            </ion-input>\n            <ion-icon name="calendar" item-end (click)="presentPopover($event,\'FormBInteruptDate\')"></ion-icon>\n          </ion-item>\n\n          <ion-item style="letter-spacing: 1px;font-size: 15px;">\n            <ion-label fixed color="primary">*From</ion-label>\n            <ion-datetime [(ngModel)]="formBCess.ta4starttime" displayFormat="HH:mm" placeholder="Start Time">\n            </ion-datetime>\n            <ion-icon name="time" item-end></ion-icon>\n          </ion-item>\n\n          <ion-item style="letter-spacing: 1px;font-size: 15px;">\n            <ion-label fixed color="primary">*To</ion-label>\n            <ion-datetime [(ngModel)]="formBCess.ta4endtime" displayFormat="HH:mm" placeholder="End Time">\n            </ion-datetime>\n            <ion-icon name="time" item-end></ion-icon>\n          </ion-item>\n\n          <ion-item no-lines style="letter-spacing: 1px;font-size: 15px;border-radius: 0px 0px 10px 10px;">\n            <ion-label fixed color="primary">*Purpose</ion-label>\n            <ion-textarea rows="5" [(ngModel)]="formBCess.ta4purpose" placeholder="Purpose"></ion-textarea>\n            <ion-icon name="journal" item-end></ion-icon>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label fixed color="primary">Licensee</ion-label>\n        <ion-input type="text" placeholder="Auto Populate" readonly="true" value="TNB"></ion-input>\n        <ion-icon name="card" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label fixed color="primary">Region</ion-label>\n        <ion-input type="text" placeholder="Auto Populate" readonly="true" value="{{ siteId_region }}"></ion-input>\n        <ion-icon name="map" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item style="align-items: center;letter-spacing: 1px;font-size: 15px;">\n        <ion-label fixed color="primary" style="align-self: normal;">Address</ion-label>\n        <ion-textarea rows="3" text-wrap placeholder="Auto Populate" readonly="true"\n          value="{{ formBCess.ta4officeaddress }}">\n        </ion-textarea>\n        <ion-icon name="pin" item-end style="margin-right: 10px;"></ion-icon>\n      </ion-item>\n\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label fixed color="primary">Tel. No.</ion-label>\n        <ion-input type="text" placeholder="Auto Populate" readonly="true" value="{{ formBCess.ta4officephone }}">\n        </ion-input>\n        <ion-icon name="call" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-label fixed color="primary">Date</ion-label>\n        <ion-input type="text" placeholder="Date" readonly="true" value="{{ formBCess.ta4indatetime }}"\n          (click)="presentPopover($event,\'formBdated\')">\n        </ion-input>\n        <ion-icon name="calendar" item-end (click)="presentPopover($event,\'formBdated\')"></ion-icon>\n      </ion-item>\n    </ion-row>\n\n  </ion-list>\n  <!-- End: Cessation/Temporary Interruption of Electricity Supply-->\n\n  <!-- Start: Form A for Staff-->\n  <ion-list ion-row *ngIf=\'formType === "formACust"\'>\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Schedule Form A</strong>\n    </ion-item-divider>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>Schedule</ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase><strong>Form A</strong></ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>(sub-regulation 6A(1))</ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>Malaysia</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines text-center text-uppercase>\n      <ion-label>STATE OF {{ formCust.ta4statename || \'...\' }}</ion-label>\n    </ion-item>\n\n    <ion-item col-md-6 offset-md-3 [class]="(stateSelect2 && !formCust.ta4statename) ? \'custom-box-red\' : \'custom-box\'">\n      <ion-label fixed color="primary" style="text-align: center;">State</ion-label>\n      <ion-select ion-col col-md-8 [(ngModel)]="formCust.ta4statename" placeholder="Choose" style="text-align: center;">\n        <ion-option value="Perak">Perak</ion-option>\n        <ion-option value="Perlis">Perlis</ion-option>\n        <ion-option value="Terengganu">Terengganu</ion-option>\n        <ion-option value="Kelantan">Kelantan</ion-option>\n        <ion-option value="Kedah">Kedah</ion-option>\n        <ion-option value="Selangor">Selangor</ion-option>\n        <ion-option value="Sabah">Sabah</ion-option>\n        <ion-option value="Sarawak">Sarawak</ion-option>\n        <ion-option value="Wilayah Persekutuan">Wilayah Persekutuan</ion-option>\n        <ion-option value="Melaka">Melaka</ion-option>\n        <ion-option value="Negeri Sembilan">Negeri Sembilan</ion-option>\n        <ion-option value="Johor">Johor</ion-option>\n        <ion-option value="Pahang">Pahang</ion-option>\n        <ion-option value="Putrajaya">Putrajaya</ion-option>\n        <ion-option value="Pulau Pinang">Pulau Pinang</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>Electricity Supply Act 1990</ion-label>\n    </ion-item>\n\n    <ion-item col-md-7 no-lines>\n      <ion-label>To :</ion-label>\n    </ion-item>\n\n    <ion-item col-md-7>\n      <ion-input type="text" placeholder="Auto Populate" value="{{ formCust.ta4custname || \'-\' }}" readonly="true">\n      </ion-input>\n    </ion-item>\n\n    <ion-item col-md-7 text-wrap>\n      <ion-textarea rows="3" placeholder="Auto Populate" value="{{ formCust.ta4custaddress || \'-\'}}" readonly="true"\n        style="text-align: justify;">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item col-md-7>\n      <ion-input type="text" placeholder="Auto Populate"\n        value="{{ formCust.station || \'...\'}} - {{ formCust.ta4accountno || \'...\'}}" readonly="true">\n      </ion-input>\n    </ion-item>\n\n    <ion-item col-md-7>\n      <ion-label>Sir/Madam/Messers,</ion-label>\n    </ion-item>\n\n    <ion-item-divider text-wrap class="item-divider-header">\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notice of Disconnection of Electricity Supply Under Subsection 38(1) Electricity Supply Act 1990</strong>\n    </ion-item-divider>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12>\n        Please be informed that on <strong>{{ formCust.ta4datetime | date: gv.dateFormat || \'...\'}} -\n          {{ formCust.ta4datetime | date: gv.time24Format || \'...\'}}</strong> (date/time) an inspection has been done to\n        our installation at your premise. From the inspection, we noticed that the system had been tampered or modified\n        in the following circumstances below:\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngIf="ano && !formCust.ta4anamoly" text-wrap\n      [class]="(ano && !formCust.ta4anamoly) ? \'custom-box-red\' : \'custom-box\'"\n      style="letter-spacing: 1px;font-size: 15px;margin: 0px 8px 0px 20px;padding: 0px 12px 0px 12px;text-align: justify;">\n      <p style="font-style: italic;font-size: 14px;color: red;">\n        *Required anomaly remarks fields. <br>\n        *To update anomaly remarks, please enter value in \'Anomaly Remarks Section\' at \'Service Details\'.\n      </p>\n    </ion-item>\n\n    <p style="padding-left: 20px;line-height: 30px;letter-spacing: 1px;font-weight: bold;white-space: pre-line;">\n      {{ formCust.ta4anamoly || \'...\' }}\n    </p>\n\n    <ion-row col-md-12 style="margin-left: 15px;margin-bottom: 20px;">\n      <ion-col col-md-8 [class]="(datetimeformA && !formCust.ta4datetime) ? \'custom-box-red\' : \'custom-box\'"\n        style="padding: 0px 0px 0px 0px;">\n        <ion-item *ngIf="datetimeformA && !formCust.ta4datetime" text-wrap\n          style="letter-spacing: 1px;font-size: 15px;border-radius: 10px 10px 0px 0px;">\n          <p style="font-style: italic;font-size: 14px;color: red;">\n            *Required date and time fields.\n          </p>\n        </ion-item>\n\n        <ion-item no-lines style="border-radius: 10px 10px 10px 10px;padding-bottom: 1px;">\n          <ion-label fixed color="primary">*Date/Time</ion-label>\n          <ion-datetime [(ngModel)]="formCust.ta4datetime" placeholder="Date" displayFormat="DD/MM/YYYY - HH:mm"\n            pickerFormat="DD/MM/YYYY HH:mm" (ionChange)=\'formatTimeDisplay()\' text-right>\n          </ion-datetime>\n          <ion-icon name="time" item-end></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-item no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12 text-wrap>\n        Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity\n        Supply Act 1990 ("Act") as follow:\n      </ion-label>\n    </ion-item>\n\n    <ion-list no-lines style="margin: 10px 13px 10px 20px;border: 1px solid lightgrey;border-radius: 10px;">\n      <ion-item style="border-radius: 10px 10px 0px 0px;">\n        <ion-checkbox [(ngModel)]="formCust.subsection1" (ionChange)="checkboxSlct()"></ion-checkbox>\n        <ion-label>Select all</ion-label>\n      </ion-item>\n      <ion-item-divider>Subsection 37(1)*</ion-item-divider>\n      <ion-item text-wrap style="text-align: justify;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss1tampers" value="sectinAct1" (ionChange)="CheckValueSentForCheckbox()">\n        </ion-checkbox>\n        <ion-label>\n          tampers with or adjusts any installation or part thereof or manufactures or imports or sells any equipment so\n          as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other\n          property:\n        </ion-label>\n      </ion-item>\n      <ion-item-divider>Subsection 37(3)* - in any manner dishonestly:-</ion-item-divider>\n      <ion-item>\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3abstracts" (ionChange)="CheckValueSentForCheckbox()"></ion-checkbox>\n        <ion-label>Abstracts energy</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3consumer" (ionChange)="CheckValueSentForCheckbox()"></ion-checkbox>\n        <ion-label>Energy consumes</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3uses" (ionChange)="CheckValueSentForCheckbox()"></ion-checkbox>\n        <ion-label>Uses energy</ion-label>\n      </ion-item>\n      <ion-item text-wrap style="text-align: justify;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3afterindex" (ionChange)="CheckValueSentForCheckbox()"></ion-checkbox>\n        <ion-label>\n          Alters the index of any meter or other instrument used on or in connection with any installation of any supply\n          authority or any licensed installation for recording the output or comsumption of energy or\n        </ion-label>\n      </ion-item>\n      <ion-item text-wrap style="text-align: justify;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3prevents" (ionChange)="CheckValueSentForCheckbox()"></ion-checkbox>\n        <ion-label>\n          Prevents any such meter or instrument from duty recording the output or consumption of energy\n        </ion-label>\n      </ion-item>\n      <ion-item-divider>Subsection 37(14)*</ion-item-divider>\n      <ion-item text-wrap style="text-align: justify;border-radius: 0px 0px 10px 10px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss14damages" (ionChange)="CheckValueSentForCheckbox()"></ion-checkbox>\n        <ion-label>\n          Damages any meter or other instrument used on or in connection with any licensed installation, for recording\n          theoutput or comsumption of energy.\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12 text-wrap>\n        Please note that under subsection 38 (1) of the Act, you are hereby given a notice that the electricity supply\n        in the above premise shall be disconnected on <strong>{{ formCust.ta4starttime || \'...\' }}</strong> (date).\n        Please also take note that we will claim any loss and expenses incurred by us due to the offences done as\n        above-mentioned. We will issue a statement of claims to your goodselves in due course.\n      </ion-label>\n    </ion-item>\n\n    <ion-row col-md-12 style="margin-left: 15px;margin-bottom: 20px;">\n      <ion-col col-md-8 class="custom-form-box">\n        <ion-item style="border-radius: 10px 10px 10px 10px;">\n          <ion-label fixed color="primary" text-wrap>Discon. Date</ion-label>\n          <ion-input type="text" placeholder="Disconnection Date" readonly="true" value="{{ formCust.ta4starttime }}">\n          </ion-input>\n          <!-- (click)="presentPopover($event,\'DateDisconnection\')" -->\n          <!-- <ion-icon name="calendar" item-end (click)="presentPopover($event,\'DateDisconnection\')"></ion-icon> -->\n        </ion-item>\n\n        <ion-item>\n          <ion-label fixed color="primary">Region</ion-label>\n          <ion-input type="text" placeholder="Region" readonly="false" value="{{ siteId_region }}"></ion-input>\n        </ion-item>\n\n        <ion-item text-wrap>\n          <ion-label fixed color="primary">Address</ion-label>\n          <ion-textarea rows="3" placeholder="Address" readonly="false" value="{{ formCust.ta4officeaddress }}">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item no-lines style="border-radius: 0px 0px 10px 10px;">\n          <ion-label fixed color="primary" text-wrap>Inspec. Date</ion-label>\n          <ion-input type="text" placeholder="Inspection Date" readonly="true" value="{{ formCust.ta4indatetime }}"\n            (click)="presentPopover($event,\'formAStaffDate\')"></ion-input>\n          <ion-icon name="calendar" item-end (click)="presentPopover($event,\'formAStaffDate\')"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-list ion-row\n      [class]="((datetimeformA && deliveryD && deliveryT && deliveryN && receiverN) && (!deliver.ta4indatetime || !deliver.ta4starttime || !deliver.ta4witnessname || !deliver.ta4staffname)) ? \'custom-formA-box-red\' : \'custom-formA-box\'">\n      <ion-item-divider style="border-radius: 10px 10px 0px 0px;">Delivery Notice Form A</ion-item-divider>\n\n      <ion-item\n        *ngIf="(datetimeformA && deliveryD && deliveryT && deliveryN && receiverN) && (!deliver.ta4indatetime || !deliver.ta4starttime || !deliver.ta4witnessname || !deliver.ta4staffname)"\n        text-wrap style="letter-spacing: 1px;font-size: 15px;border-radius: 10px 10px 10px 10px;">\n        <p style="font-style: italic;font-size: 14px;color: red;">\n          *Required date, time fields. <br>\n          *Required receiver name, receiver signature fields. <br>\n          *Required delivery name, delivery fields.\n        </p>\n      </ion-item>\n\n      <ion-item col-md-12>\n        <ion-label fixed color="primary">*Date</ion-label>\n        <ion-input mode="md" type="text" placeholder="Date" readonly="true" value="{{ deliver.ta4indatetime }}"\n          (click)="presentPopover($event,\'deliveryDate\')" clearInput="true"></ion-input>\n        <ion-icon name="calendar" item-end (click)="presentPopover($event,\'deliveryDate\')"></ion-icon>\n      </ion-item>\n\n      <ion-item col-md-12>\n        <ion-label fixed color="primary">*Time</ion-label>\n        <ion-datetime mode="md" [(ngModel)]="deliver.ta4starttime" displayFormat="HH:mm" placeholder="Time"\n          clearInput="true">\n        </ion-datetime>\n        <ion-icon name="time" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item-divider>Receiver</ion-item-divider>\n\n      <ion-item>\n        <ion-label fixed color="primary">Name</ion-label>\n        <ion-input mode="md" type="text" placeholder="Name" readonly="true" value="{{ deliver.ta4witnessname }}">\n        </ion-input>\n      </ion-item>\n\n      <ion-item style="align-items: start;">\n        <ion-label fixed color="primary">Signature</ion-label>\n        <ion-label style="margin-left: 15px;">\n          <ion-fab>\n            <button ion-fab mini mode="md" (click)="clearSign(\'deliverWitness\')">\n              <ion-icon name="md-refresh"></ion-icon>\n            </button>\n          </ion-fab>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-divider>Delivery</ion-item-divider>\n\n      <ion-item style="align-items: start;">\n        <ion-label fixed color="primary">Name</ion-label>\n        <ion-input type="text" placeholder="Name" readonly="true" value="{{ deliver.ta4staffname }}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed color="primary">Signature</ion-label>\n        <ion-label style="margin-left: 15px;">\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-divider>Remarks</ion-item-divider>\n\n      <ion-item no-lines style="align-items: start;border-radius: 0px 0px 10px 10px;">\n        <ion-textarea [(ngModel)]="deliver.ta4describe" rows="4" placeholder="Remarks"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list ion-row\n      style="margin: 10px 13px 10px 20px;border: 1px solid lightgrey;border-radius: 10px;width: -webkit-fill-available;">\n      <ion-item-divider style="border-radius: 10px 10px 0px 0px;">Supply Disconnection</ion-item-divider>\n      <ion-item col-md-6>\n        <ion-label fixed color="primary">Date</ion-label>\n        <ion-input mode="md" type="text" placeholder="Dated" readonly="true" value="{{ disconnect.ta4datetime }}"\n          (click)="presentPopover($event,\'disconnetDate\')"></ion-input>\n        <ion-icon name="calendar" item-end (click)="presentPopover($event,\'disconnetDate\')"></ion-icon>\n      </ion-item>\n\n      <ion-item col-md-6>\n        <ion-label fixed color="primary">Time</ion-label>\n        <ion-datetime mode="md" [(ngModel)]="disconnect.ta4starttime" displayFormat="HH:mm" placeholder="Time"\n          [pickerOptions]="customOptionsDiscon">\n        </ion-datetime>\n        <ion-icon name="time" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item-divider>Disconnector</ion-item-divider>\n\n      <ion-item>\n        <ion-label fixed color="primary">Name</ion-label>\n        <ion-input mode="md" type="text" placeholder="Name" readonly="true" value="{{ disconnect.ta4staffname }}">\n        </ion-input>\n      </ion-item>\n\n      <ion-item style="align-items: start;">\n        <ion-label fixed color="primary">Signature</ion-label>\n        <ion-label style="margin-left: 15px;">\n          <ion-fab>\n            <button ion-fab mini mode="md" (click)="clearSign(\'disconnectStaff\')">\n              <ion-icon name="md-refresh"></ion-icon>\n            </button>\n          </ion-fab>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad3></signature-pad>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-divider>Remarks</ion-item-divider>\n\n      <ion-item style="border-radius: 0px 0px 10px 10px;">\n        <ion-textarea [(ngModel)]="disconnect.ta4describe" rows="5" placeholder="Remarks"></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-list ion-row\n      style="margin: 10px 13px 10px 20px;border: 1px solid lightgrey;border-radius: 10px;width: -webkit-fill-available;">\n      <ion-item-divider style="border-radius: 10px 10px 0px 0px;">Supply Reconnection</ion-item-divider>\n      <ion-item col-md-6>\n        <ion-label fixed color="primary">Date</ion-label>\n        <ion-input mode="md" type="text" placeholder="Dated" readonly="true" value="{{ reconnect.ta4datetime }}"\n          (click)="presentPopover($event,\'reconnectDate\')"></ion-input>\n        <ion-icon name="calendar" item-end (click)="presentPopover($event,\'reconnectDate\')"></ion-icon>\n      </ion-item>\n\n      <ion-item col-md-6>\n        <ion-label fixed color="primary">Time</ion-label>\n        <ion-datetime mode="md" [(ngModel)]="reconnect.ta4starttime" displayFormat="HH:mm" placeholder="Time"\n          [pickerOptions]="customOptionsRecon">\n        </ion-datetime>\n        <ion-icon name="time" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item-divider>Reconnector</ion-item-divider>\n\n      <ion-item>\n        <ion-label fixed color="primary">Name</ion-label>\n        <ion-input mode="md" type="text" placeholder="Name" readonly="true" value="{{ reconnect.ta4staffname }}">\n        </ion-input>\n      </ion-item>\n\n      <ion-item style="align-items: start;">\n        <ion-label fixed color="primary">Signature</ion-label>\n        <ion-label style="margin-left: 15px;">\n          <ion-fab>\n            <button ion-fab mini mode="md" (click)="clearSign(\'reconnectStaff\')">\n              <ion-icon name="md-refresh"></ion-icon>\n            </button>\n          </ion-fab>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad4></signature-pad>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-divider>Remarks</ion-item-divider>\n\n      <ion-item no-lines style="border-radius: 0px 0px 10px 10px;">\n        <ion-textarea [(ngModel)]="reconnect.ta4describe" rows="5" placeholder="Remarks"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n  <!-- End: Form A for Staff-->\n\n  <!-- Start: Form A for Customer -->\n  <ion-list ion-row *ngIf=\'formType === "formCustCopy"\'>\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Schedule Form A</strong>\n    </ion-item-divider>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>Schedule</ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase><strong>Form A</strong></ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>(sub-regulation 6A(1))</ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>Malaysia</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines text-center text-uppercase>\n      <ion-label>STATE OF {{ formCust.ta4statename || \'-\' }}</ion-label>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label text-wrap no-lines text-center text-uppercase>Electricity Supply Act 1990</ion-label>\n    </ion-item>\n\n    <ion-item col-md-7 no-lines>\n      <ion-label>To :</ion-label>\n    </ion-item>\n\n    <ion-item col-md-7>\n      <ion-input type="text" placeholder="Auto Populate" value="{{ formCust.ta4custname }}" readonly="true">\n      </ion-input>\n    </ion-item>\n\n    <ion-item col-md-7 text-wrap>\n      <ion-textarea rows="3" placeholder="Auto Populate" value="{{ formCust.ta4custaddress }}" readonly="true"\n        style="text-align: justify;">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item col-md-7>\n      <ion-input type="text" placeholder="Auto Populate" value="{{ formCust.station }} - {{ formCust.ta4accountno }}"\n        readonly="true">\n      </ion-input>\n    </ion-item>\n\n    <ion-item col-md-7>\n      <ion-label>Sir/Madam/Messers,</ion-label>\n    </ion-item>\n\n    <ion-item-divider text-wrap class="item-divider-header">\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notice of Disconnection of Electricity Supply Under Subsection 38(1) Electricity Supply Act 1990</strong>\n    </ion-item-divider>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12>\n        Please be informed that on <strong>{{ formCust.ta4datetime | date: gv.dateFormat || \'...\'}} -\n          {{ formCust.ta4datetime | date: gv.timeFormat || \'...\'}}</strong> (date/time) an inspection has been done to\n        our installation at your premise. From the inspection, we noticed that the system had been tampered or modified\n        in the following circumstances below:\n      </ion-label>\n    </ion-item>\n\n    <p style="padding-left: 20px;line-height: 30px;letter-spacing: 1px;font-weight: bold;white-space: pre-line;">\n      {{ formCust.ta4anamoly || \'...\' }}\n    </p>\n\n    <ion-item no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12 text-wrap>\n        Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity\n        Supply Act 1990 ("Act") as follow:\n      </ion-label>\n    </ion-item>\n\n    <ion-list no-lines style="margin: 10px 13px 10px 20px;border: 1px solid lightgrey;border-radius: 10px;">\n      <!-- <ion-item style="border-radius: 10px 10px 0px 0px;">\n        <ion-checkbox [(ngModel)]="formCust.subsection1" (ionChange)="checkboxSlct()"></ion-checkbox>\n        <ion-label>Select all</ion-label>\n      </ion-item> -->\n      <ion-item-divider style="border-radius: 10px 10px 0px 0px;letter-spacing: 1px;font-size: 15px;">Subsection 37(1)*\n      </ion-item-divider>\n      <ion-item text-wrap style="text-align: justify;letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss1tampers" value="sectinAct1" disabled="{{ selectDisabled }}">\n        </ion-checkbox>\n        <ion-label style="opacity: 1;">\n          tampers with or adjusts any installation or part thereof or manufactures or imports or sells any equipment so\n          as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other\n          property:\n        </ion-label>\n      </ion-item>\n      <ion-item-divider style="letter-spacing: 1px;font-size: 15px;">Subsection 37(3)* - in any manner dishonestly:-\n      </ion-item-divider>\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3abstracts" disabled="{{ selectDisabled }}"></ion-checkbox>\n        <ion-label style="opacity: 1;">Abstracts energy</ion-label>\n      </ion-item>\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3consumer" disabled="{{ selectDisabled }}"></ion-checkbox>\n        <ion-label style="opacity: 1;">Energy consumes</ion-label>\n      </ion-item>\n      <ion-item style="letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3uses" disabled="{{ selectDisabled }}"></ion-checkbox>\n        <ion-label style="opacity: 1;">Uses energy</ion-label>\n      </ion-item>\n      <ion-item text-wrap style="text-align: justify;letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3afterindex" disabled="{{ selectDisabled }}"></ion-checkbox>\n        <ion-label style="opacity: 1;">\n          Alters the index of any meter or other instrument used on or in connection with any installation of any supply\n          authority or any licensed installation for recording the output or comsumption of energy or\n        </ion-label>\n      </ion-item>\n      <ion-item text-wrap style="text-align: justify;letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3prevents" disabled="{{ selectDisabled }}"></ion-checkbox>\n        <ion-label style="opacity: 1;">\n          Prevents any such meter or instrument from duty recording the output or consumption of energy\n        </ion-label>\n      </ion-item>\n      <ion-item-divider style="letter-spacing: 1px;font-size: 15px;">Subsection 37(14)*</ion-item-divider>\n      <ion-item text-wrap\n        style="text-align: justify;border-radius: 0px 0px 10px 10px;letter-spacing: 1px;font-size: 15px;">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss14damages" disabled="{{ selectDisabled }}"></ion-checkbox>\n        <ion-label style="opacity: 1;">\n          Damages any meter or other instrument used on or in connection with any licensed installation, for recording\n          theoutput or comsumption of energy.\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12 text-wrap>\n        Please note that under subsection 38 (1) of the Act, you are hereby given a notice that the electricity supply\n        in the above premise shall be disconnected on <strong>{{ formCust.ta4starttime || \'...\' }}</strong> (date).\n      </ion-label>\n    </ion-item>\n\n    <ion-item no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 15px;">\n      <ion-label ion-col col-md-12 text-wrap>\n        Please also take note that we will claim any loss and expenses incurred by us due to the offences done as\n        above-mentioned. We will issue a statement of claims to your goodselves in due course.\n      </ion-label>\n    </ion-item>\n\n    <ion-row col-md-12 style="margin-left: 15px;margin-bottom: 20px;">\n      <ion-col\n        style="border: 0.55px solid lightgrey;border-radius: 10px;padding: 5px 12px 12px 0px;margin-right: 20px;">\n        <ion-item text-wrap>\n          <ion-label fixed color="primary">Address</ion-label>\n          <ion-textarea rows="3" placeholder="Address" readonly="true" value="{{ formCust.ta4officeaddress }}">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label fixed color="primary">Dated</ion-label>\n          <ion-input type="text" placeholder="Dated" readonly="true" value="{{ formCust.ta4indatetime }}"></ion-input>\n          <ion-icon name="calendar" item-end></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <!-- End: Form A for Customer -->\n\n  <!-- Start: Session Without Prejudice -->\n  <ion-list *ngIf=\'formType === "prejudiceForm"\'>\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="bookmark" item-start></ion-icon>\n      <strong>Explanation Session Without Prejudice</strong>\n    </ion-item-divider>\n\n    <ion-item col-md-7 style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;" no-lines>\n      <ion-label>To :</ion-label>\n    </ion-item>\n\n    <ion-item col-md-7 style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-input type="text" placeholder="Auto Populate" value="{{ prejude.ta4custname }}" readonly="true">\n      </ion-input>\n    </ion-item>\n\n    <ion-item col-md-7 style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;" text-wrap>\n      <ion-textarea rows="3" placeholder="Auto Populate" value="{{ prejude.ta4custaddress }}" readonly="true"\n        style="text-align: justify;">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item col-md-7 style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label>Dear valued TNB Customer,</ion-label>\n    </ion-item>\n\n    <ion-item-divider text-wrap class="item-divider-header" style="text-align: justify;">\n      <ion-icon name="filing" item-start></ion-icon>\n      <strong>Notification Letter (Explanation Session Without Prejudice) To Electricity Disconnection and Claims of\n        Loss of Revenue and Expenses and Related Changes</strong>\n    </ion-item-divider>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label ion-col col-md-12>\n        Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to\n        ensure it is working in good condition. The inspection results show that the meter does not record actual\n        electricity consumption readings.\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label ion-col col-md-12>\n        Please note that under subsection 38(1) of Electricity Supply Act 1990, TNB will perform electricity\n        disconnection at your premise as mentioned in disconnection notice (FORM A) that will be given together with\n        this letter and will claim any loss of revenue and expenses and related changes.\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label ion-col col-md-12>\n        Therefore, you are invited to the office of <strong>REVENUE ASSURANCE</strong> which is addressed at\n        <strong>{{ siteId_region }}, {{ prejude.ta4officeaddress }}</strong> after three (3) working days from the\n        inspection date for explanation session without prejudice regarding to the actions will be taken by TNB. You\n        also encouraged to bring any proof and supporting documents for this session.\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label ion-col col-md-12>\n        For any enquiries, you may contact TNB at <strong>{{ prejude.ta4officephone }}</strong>.\n      </ion-label>\n    </ion-item>\n\n    <ion-item text-wrap no-lines style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label ion-col col-md-12>\n        Thank you.\n      </ion-label>\n    </ion-item>\n\n    <ion-item col-md-12 text-wrap no-lines\n      style="line-height: 30px; text-align: justify;letter-spacing: 1px;font-size: 16px;">\n      <ion-label style="margin-left: 6px;">\n        <strong>REVENUE ASSURANCE</strong> <br>\n        <strong>REVENUE MANAGEMENT</strong> <br>\n        <strong>CUSTOMER SERVICE</strong> <br>\n        <strong>DISTRIBUTION NETWORK, TNB</strong>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n  <!-- End: Session Without Prejudice -->\n\n  <!-- FormA for Staff -->\n  <!-- <ion-grid *ngIf=\'formType === "formACust"\'>\n    <ion-item-divider style="background-color: #f3e5f5" text-uppercase>SCHEDULE FORM A</ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase>schedule</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase><strong>form a</strong></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center>(sub-regulation 6A(1))</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase>malaysia</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-right text-uppercase>state</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="formCust.ta4statename" placeholder="Select State" interface="popover" required\n            text-left>\n            <ion-option value="Perak">Perak</ion-option>\n            <ion-option value="Perlis">Perlis</ion-option>\n            <ion-option value="Terengganu">Terengganu</ion-option>\n            <ion-option value="Kelantan">Kelantan</ion-option>\n            <ion-option value="Kedah">Kedah</ion-option>\n            <ion-option value="Selangor">Selangor</ion-option>\n            <ion-option value="Sabah">Sabah</ion-option>\n            <ion-option value="Sarawak">Sarawak</ion-option>\n            <ion-option value="Wilayah Persekutuan">Wilayah Persekutuan</ion-option>\n            <ion-option value="Melaka">Melaka</ion-option>\n            <ion-option value="Negeri Sembilan">Negeri Sembilan</ion-option>\n            <ion-option value="Johor">Johor</ion-option>\n            <ion-option value="Pahang">Pahang</ion-option>\n            <ion-option value="Putrajaya">Putrajaya</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-row>\n          <ion-item no-lines *ngIf="stateSelect2">\n            <ion-label class="validationErrorText">* Please select state</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label item-start>To:</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label> {{this.formCust.ta4custname}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-item>\n            <ion-label text-wrap>{{this.formCust.ta4custaddress}}</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label>{{formCust.station}} - {{formCust.ta4accountno}}</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Sir/Madam/Messers,</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <div text-uppercase item-content style="font-size: 18px;">\n            <strong>\n              notice of disconnection of electricity supply under subsection 38(1)\n              electricity\n              supply act 1990.\n            </strong>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-md-12 col-sm-12>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label style="letter-spacing: 1px;"> Please be informed that on</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm"\n            [(ngModel)]="formCust.ta4datetime" (ionChange)=\'formatTimeDisplay()\' placeholder="Select Date">\n          </ion-datetime>\n        </ion-item>\n        <ion-row>\n          <ion-item no-lines *ngIf="datetimeformA">\n            <ion-label class="validationErrorText">* Please insert date</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-wrap> an inspection has been done to our installation at\n            your premise.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;"> From the inspection, we\n            noticed that the system had been tampered or modified in the following circumstances below:</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item>\n          <ion-textarea [(ngModel)]="formCust.ta4anamoly" readonly="true" placeholder="Please Enter" type="text">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="ano">\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label class="validationErrorText">*Anamoly could not be leave empty</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Based on the evidence above, we are of the\n            opinion\n            that an offence had been\n            committed under\n            the Electricity Supply Act 1990 ("Act") as follows:</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap: break-all; text-align: center; ">\n        <ion-item style="border-radius: 10px;background-color: #8B8E92; border: 5px">\n          <ion-label> Select All </ion-label>\n          <ion-checkbox [(ngModel)]="formCust.subsection1" (ionChange)="checkboxSlct()"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style=" word-wrap:  break-all;">\n        <ion-item style="border-radius: 10px;background-color: #8B8E92; border: 5px">\n          <ion-label> Section & Description </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center;padding-left: 5px;"\n        class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5" text-wrap> Section(Act)</ion-item-divider>\n        <ion-checkbox style="margin-top: 20px;" [(ngModel)]="formCust.ta4ss1tampers" value="sectinAct1"\n          (ionChange)=" CheckValueSentForCheckbox()"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">Subsection 37(1)*</ion-item-divider>\n        <div style="margin-top: 20px;">\n          Tampers with of adjusts any installation or part thereof or manufactures or imports or sell any\n          equipment so\n          as to cause\n          or to be likely to cause danger to human life of limb or injury to any equipment or other property:\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all;text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5" text-wrap>Subsection 37(3)*</ion-item-divider>\n        <ion-checkbox style="margin-top: 20px;" [(ngModel)]="formCust.ta4ss3abstracts"\n          (ionChange)=" CheckValueSentForCheckbox()"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">In any manner dishonestly</ion-item-divider>\n        <div style="margin-top: 20px;">\n          Abstracts energy </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3consumer" (ionChange)=" CheckValueSentForCheckbox()">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div> Energy consumes</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all;text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3uses" (ionChange)=" CheckValueSentForCheckbox()">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div>Uses energy </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all;text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3afterindex" (ionChange)=" CheckValueSentForCheckbox()">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div> Alters the index of any meter or other instrument used on or in connection\n          <br> with any installation of any supply authority or any licensed installation for\n          <br> recording the output or comsumption of energy or </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3prevents" (ionChange)=" CheckValueSentForCheckbox()">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div> Prevents any such meter or instrument from duty recording the output or\n          <br> consumption of energy </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5" text-wrap>Subsection 37(14)*</ion-item-divider>\n\n        <ion-checkbox style="margin-top: 20px;" [(ngModel)]="formCust.ta4ss14damages"\n          (ionChange)=" CheckValueSentForCheckbox()"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">Description*</ion-item-divider>\n        <div style="margin-top: 20px;">Damages any meter or other instrument used on or in connection with any\n          licensed\n          installation, for\n          recording the\n          output or comsumption of energy. </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Please note that under subsection 38 (1)\n            of the\n            Act, you are hereby given a\n            notice that the\n            electricity supply in the above premise shall be disconnected on</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input type="text" placeholder="Select Date" value="{{formCust.ta4starttime}}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-item no-lines *ngIf="datetimeformA">\n            <ion-label class="validationErrorText">* Please insert date</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-2 col-sm-2 col-md-2>\n        <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'DateDisconnection\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label text-wrap>Please also take note that we will claim any loss and expenses incurred by us due\n          to the\n          offences\n          done as above-mentioned. We will issue a statement of claims to your goodselves in due course.\n        </ion-label>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label>Region Zone</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label>\n            {{siteId_region}}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label text-wrap>Office Addresss</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item text-wrap>\n          <ion-textarea [(ngModel)]="formCust.ta4officeaddress" [readonly]="true">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label> Dated </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input type="text" placeholder="Select Date" value="{{formCust.ta4indatetime}}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-item no-lines *ngIf="datedSelected">\n            <ion-label class="validationErrorText">* Please insert date</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-2 col-sm-2 col-md-2 style="text-align: right">\n        <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'formAStaffDate\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 style="word-wrap:  break-all; text-align: center; padding-left: 5px;">\n        <ion-item-divider style="background-color: #f3e5f5">Delivery Notice Form A</ion-item-divider>\n      </ion-col>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n          Date\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input type="text" placeholder="Select Date" value="{{deliver.ta4indatetime}}" [readonly]="true">\n          </ion-input>\n          <ion-item no-lines *ngIf="deliveryD">\n            <ion-label class="validationErrorText">*Date cannot be empty</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-2 col-sm-2 col-md-2 style="text-align: right">\n          <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'deliveryDate\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 class="headerBlue">\n          Time\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-datetime displayFormat="HH:mm" placeholder="Select Time" [(ngModel)]="deliver.ta4starttime">\n\n          </ion-datetime>\n          <ion-item no-lines *ngIf="deliveryT">\n            <ion-col class="validationErrorText">*Time cannot be empty</ion-col>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-push-8 col-sm-3 class="headerBlue">\n          <ion-row>\n            <ion-label>\n              Receiver Name &\n            </ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-label>\n              Receiver Signature\n            </ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input type="text" placeholder="Enter Name Receiver" [readonly]="true"\n            [(ngModel)]="deliver.ta4witnessname" #name="ngModel" required></ion-input>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n          <ion-item no-lines *ngIf="receiverN ">\n            <ion-col class="validationErrorText">*Receiver details cannot be empty</ion-col>\n          </ion-item>\n        </ion-col>\n        <ion-col col-push-4 col-sm-2 col-md-2>\n          <ion-item>\n            <button ion-button color="buttonlightColor" (click)="clearSign(\'deliverWitness\')">Clear</button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-push-8 col-sm-3 class="headerBlue">\n          <ion-row>\n            <ion-label>\n              Delivery Name &\n            </ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-label>\n              Delivery Signature\n            </ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input placeholder="Enter Name Deliver" [(ngModel)]="deliver.ta4staffname"></ion-input>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n          <ion-item no-lines *ngIf="deliveryN">\n            <ion-col class="validationErrorText">*Deliver name and signature cannot be empty</ion-col>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 class="headerBlue">\n          Remarks\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input type="text" placeholder="Insert remarks if any" [(ngModel)]="deliver.ta4describe">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-col col-12 col-sm-12 style="word-wrap:  break-all; text-align: center; padding-left: 5px;">\n        <ion-item-divider style="background-color: #f3e5f5">Supply Disconnection</ion-item-divider>\n      </ion-col>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n          Date\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input type="text" placeholder="select Date" value="{{disconnect.ta4datetime}}" [readonly]="true">\n          </ion-input>\n          <ion-item no-lines *ngIf="supplyD">\n            <ion-col class="validationErrorText">*Supply date cannot be empty</ion-col>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-2 col-sm-2 col-md-2 style="text-align: right">\n          <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'disconnetDate\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 class="headerBlue">\n          Time\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-datetime displayFormat="HH:mm" placeholder="Select Time" [(ngModel)]="disconnect.ta4starttime">\n          </ion-datetime>\n          <ion-item no-lines *ngIf="supplyT">\n            <ion-col class="validationErrorText">*Supply time cannot be empty</ion-col>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-push-8 col-sm-3 class="headerBlue">\n          <ion-row>\n            <ion-label>\n              Disconnector Name &\n            </ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-label>\n              Disconnector Signature\n            </ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input placeholder="Enter Name Disconnector" [(ngModel)]="disconnect.ta4staffname"></ion-input>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad3></signature-pad>\n          <ion-item no-lines *ngIf="supplyN">\n            <ion-col class="validationErrorText">*Supply name cannot be empty</ion-col>\n          </ion-item>\n        </ion-col>\n        <ion-col col-push-4 col-sm-2 col-md-2>\n          <ion-item>\n            <button ion-button color="buttonlightColor" (click)="clearSign(\'disconnectStaff\')">Clear</button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 class="headerBlue">\n          Remarks\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-textarea placeholder="Insert remarks if any" [(ngModel)]="disconnect.ta4describe">\n          </ion-textarea>\n        </ion-col>\n      </ion-row>\n\n      <ion-col col-12 col-sm-12 style="word-wrap:  break-all; text-align: center; padding-left: 5px;">\n        <ion-item-divider style="background-color: #f3e5f5">Supply Reconnection</ion-item-divider>\n      </ion-col>\n\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n          Date\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input type="text" placeholder="Select Date" value="{{reconnect.ta4datetime}}" [readonly]="true">\n          </ion-input>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-2 col-sm-2 col-md-2 style="text-align: right">\n          <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'reconnectDate\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 class="headerBlue">\n          Time\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-datetime placeholder="Select Time" displayFormat="HH:mm" [(ngModel)]="reconnect.ta4starttime">\n          </ion-datetime>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-push-8 col-sm-3 class="headerBlue">\n          <ion-row>\n            <ion-label text-wrap>\n              Reconnector Name &\n            </ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-label text-wrap>\n              Reconnector Signature\n            </ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-input placeholder="Enter Name Reconnector" [(ngModel)]="reconnect.ta4staffname"></ion-input>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad4></signature-pad>\n\n        </ion-col>\n        <ion-col col-push-4 col-sm-2 col-md-2>\n          <ion-item>\n            <button ion-button color="buttonlightColor" (click)="clearSign(\'reconnectStaff\')">Clear</button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n        <ion-col col-3 col-sm-3 class="headerBlue">\n          Remarks\n        </ion-col>\n        <ion-col class="headerBlue">\n          <ion-textarea placeholder="Insert remarks if any" [(ngModel)]="reconnect.ta4describe">\n          </ion-textarea>\n        </ion-col>\n      </ion-row>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- FormA for Customer -->\n  <!-- <ion-grid *ngIf=\'formType === "formCustCopy"\'>\n    <ion-item-divider style="background-color: #f3e5f5">SCHEDULE FORM A</ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase>schedule</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase><strong>form a</strong></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center>(sub-regulation 6A(1))</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase>malaysia</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase>state {{formCust.ta4statename}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-left>To:</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <div item-content text-wrap>{{formCust.ta4custaddress}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <div item-content>{{formCust.ta4custname}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label>{{formCust.station}} - {{formCust.ta4accountno}}</ion-label>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Sir/Madam/Messers,</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <div text-uppercase item-content style="font-size: 18px;">\n            <strong>\n              notice of disconnection of electricity supply under subsection 38(1)\n              electricity\n              supply act 1990.\n            </strong>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label style="letter-spacing: 1px;"> Please be informed that on</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm"\n            [(ngModel)]="formCust.ta4datetime" disabled></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">an inspection has been done to our\n            installation at\n            your premise. From the\n            inspection, we\n            noticed that the system had been tampered or modified in the following circumstances below:</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{formCust.ta4anamoly}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Based on the evidence above, we are of the\n            opinion\n            that an offence had been\n            committed under\n            the Electricity Supply Act 1990 ("Act") as follows:</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        Select All\n        <ion-checkbox [(ngModel)]="formCust.subsection1" disabled="{{selectDisabled}}"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-label> Section & Description </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center;padding-left: 5px;"\n        class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5"> Section(Act)</ion-item-divider>\n        <ion-checkbox style="margin-top: 20px;" [(ngModel)]="formCust.ta4ss1tampers" disabled="{{selectDisabled}}">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">Subsection 37(1)*</ion-item-divider>\n        <div color="primary">\n          Tampers with of adjusts any installation or part thereof or manufactures or imports or sell any\n          equipment so\n          as to cause\n          or to be likely to cause danger to human life of limb or injury to any equipment or other property:\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all;text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">Subsection 37(3)*</ion-item-divider>\n        <ion-checkbox style="margin-top: 20px;" [(ngModel)]="formCust.ta4ss3abstracts" disabled="{{selectDisabled}}">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">In any manner dishonestly</ion-item-divider>\n        <div style="margin-top: 20px;">\n          Abstracts energy </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3consumer" disabled="{{selectDisabled}}"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div> Energy consumes</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all;text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3uses" disabled="{{selectDisabled}}"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div>Uses energy </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all;text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3afterindex" disabled="{{selectDisabled}}"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div> Alters the index of any meter or other instrument used on or in connection\n          <br> with any installation of any supply authority or any licensed installation for\n          <br> recording the output or comsumption of energy or </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-checkbox [(ngModel)]="formCust.ta4ss3prevents" disabled="{{selectDisabled}}"></ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <div> Prevents any such meter or instrument from duty recording the output or\n          <br> consumption of energy </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="headerBlue">\n      <ion-col col-3 col-sm-3 col-md-3 style="word-wrap:  break-all; text-align: center; padding-left: 5px;"\n        class="headerBlue">\n        <ion-item-divider>Subsection 37(14)*</ion-item-divider>\n\n        <ion-checkbox style="margin-top: 20px;" [(ngModel)]="formCust.ta4ss14damages" disabled="{{selectDisabled}}">\n        </ion-checkbox>\n      </ion-col>\n      <ion-col col-9 col-sm-9 col-md-9 style="word-wrap:  break-all; padding-left: 5px;" class="headerBlue">\n        <ion-item-divider style="background-color: #f3e5f5">Description*</ion-item-divider>\n        <div style="margin-top: 20px;">Damages any meter or other instrument used on or in connection with any\n          licensed\n          installation, for\n          recording the\n          output or comsumption of energy. </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Please note that under subsection 38 (1)\n            of the\n            Act, you are hereby given a\n            notice that the\n            electricity supply in the above premise shall be disconnected on {{formCust.ta4starttime}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Addresss :</ion-label>\n          <div item-content item-end>{{formCust.ta4officeaddress}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start> Dated :</ion-label>\n          <div item-content item-end>{{formCust.ta4indatetime}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- Ceassation, Interruption-->\n  <!-- <ion-grid *ngIf=\'formType === "tempCeassation"\'>\n    <ion-item-divider style="color: black ;background-color: #f3e5f5">\n      NOTIFICATION OF TEMPORARY CESSATION/INTERRUPTION OF ELECTRICITY SUPPLY\n    </ion-item-divider>\n\n    <ion-row>\n      <ion-col col-7 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>Date</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input type="text" placeholder="select Date" value="{{tempCeassation.ta4datetime}}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-1 col-sm-1 col-md-1 style="text-align: right">\n        <button color="buttonlightColor" ion-button (click)="presentPopover($event,\'inspectDateFrom2\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>\n            To :\n          </ion-label>\n          <div item-content> {{tempCeassation.ta4custname}} </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start> Dear TNB Customer,</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <div item-content text-center text-uppercase style="font-size: 18px;">\n            <strong>\n              notification notice of cessation, temporary interruption of electricity supply for the purpose\n              of\n              testing\n              and inspections of tnb\'s meter installation.\n            </strong>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start>Please be informed that TNB is conducting testing and inspections of\n            TNB\'s\n            meter\n            installations at your premises to ensure that it works properly.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start>In view of the same, please be informed that the electricity supply at\n            your\n            premises will be cessationed/temporarily interrupted on</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-6 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label> Inspection Date :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input type="text" placeholder="Select Date" value="{{tempCeassation.ta4indatetime}}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf="fromInspectDate">\n          <ion-label class="validationErrorText">*Inspectation Date could not be empty\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-2 col-sm-1 col-1 col-sm-1 col-md-1 style="text-align: right">\n        <button color="buttonlightColor" ion-button (click)="presentPopover($event,\'inspectDateFrom\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>From :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-datetime placeholder="Select Time" displayFormat="HH:mm" [(ngModel)]="tempCeassation.ta4starttime">\n          </ion-datetime>\n        </ion-item>\n        <ion-item *ngIf="dateCess">\n          <ion-label class="validationErrorText">* Please insert date</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>Until :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-datetime placeholder="Select Time" displayFormat="HH:mm" [(ngModel)]="tempCeassation.ta4endtime">\n          </ion-datetime>\n        </ion-item>\n        <ion-item *ngIf="ToinspectDate">\n          <ion-label class="validationErrorText">*Until Inspection Time could not be empty\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start>Your kind cooperation is much appreciated.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start>Thank you.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase style=" font-weight: bold;">“POWERING THE NATION”</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-center text-uppercase style="font-weight: bold;">“BETTER BRIGHTER”</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label> Staff Signature</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <signature-pad width=800 height=200 [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1>\n        </signature-pad>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Staff Name :</ion-label>\n          <div item-content>{{tempCeassation.ta4staffname}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Staff No :</ion-label>\n          <div item-content> {{tempCeassation.ta4staffno}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap style="min-width: 75%;color: black;">I hereby fully understand the contents of\n            this\n            notice and {{formB}}\n          </ion-label>\n          <ion-checkbox [(ngModel)]="tempCeassation.ta4agree" (click)=\'assignDetailsFormB()\'>\n          </ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>that the electricity\n            supply to be cessationed/temporarily interupted for the abovesaid purposes.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid *ngIf=\'!tempCeassation.ta4agree\'>\n      <ion-item-divider style="background-color: #f3e5f5">Form B</ion-item-divider>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-wrap text-center text-uppercase>licensee supply regulations 1990</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-center><strong>Form B</strong></ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-center>[sub-regulation 6A(2)]</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-center text-uppercase>malaysia</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item no-lines>\n            <ion-label text-right text-uppercase>state of</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 text-left>\n          <ion-item>\n            <ion-select [(ngModel)]="formBCess.ta4statename" placeholder="Select State" interface="popover">\n              <ion-option value="Perak">Perak</ion-option>\n              <ion-option value="Perlis">Perlis</ion-option>\n              <ion-option value="Terengganu">Terengganu</ion-option>\n              <ion-option value="Kelantan">Kelantan</ion-option>\n              <ion-option value="Kedah">Kedah</ion-option>\n              <ion-option value="Selangor">Selangor</ion-option>\n              <ion-option value="Sabah">Sabah</ion-option>\n              <ion-option value="Sarawak">Sarawak</ion-option>\n              <ion-option value="Wilayah Persekutuan">Wilayah Persekutuan</ion-option>\n              <ion-option value="Melaka">Melaka</ion-option>\n              <ion-option value="Negeri Sembilan">Negeri Sembilan</ion-option>\n              <ion-option value="Johor">Johor</ion-option>\n              <ion-option value="Pahang">Pahang</ion-option>\n              <ion-option value="Putrajaya">Putrajaya</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-item *ngIf="formBState">\n          <ion-label class="validationErrorText">*Please Select State\n          </ion-label>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-center text-uppercase>electricity supply act 1990</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label>To :</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{formBCess.ta4custname}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label text-wrap>{{formBCess.ta4custaddress}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label>Sir/Madam/Mr/Messrs,</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-title text-uppercase text-center>notice of temporary cessation/interuption of electricity\n              supply.\n            </ion-title>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start>Please be informed that the supply of electricity at\n              {{formBCess.tenant}}\n              (address of consumer/area to be affected) shall be temporarily ceased/interupted on</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-3 col-md-3>\n          <ion-item>\n            <ion-input type="text" placeholder="select Date" value="{{formBCess.ta4datetime}}" [readonly]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-1 col-md-1>\n          <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'FormBInteruptDate\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-pull-4>\n          <ion-item>\n            <ion-datetime displayFormat="HH:mm" placeholder="Insert interupted time"\n              [(ngModel)]="formBCess.ta4starttime"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-2 col-sm-1 col-md-1>\n          <ion-item no-lines>\n            <ion-label>to</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-datetime displayFormat="HH:mm" placeholder="Insert interupted time" [(ngModel)]="formBCess.ta4endtime">\n            </ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf="formBDate">\n          <ion-item>\n            <ion-label class="validationErrorText">*Inspectation Date could not be empty\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col *ngIf="formBStartInteruptTime">\n          <ion-item>\n            <ion-label class="validationErrorText">*Interupted to time could not be empty\n            </ion-label>\n          </ion-item>\n        </ion-col>\n\n        <ion-col *ngIf="formBEndInteruptTime">\n          <ion-item>\n            <ion-label class="validationErrorText">*Interupted to time could not be empty\n            </ion-label>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item no-lines>\n            <ion-label>for the purpose of</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item>\n            <ion-input [(ngModel)]="formBCess.ta4purpose" type="text" placeholder="Insert purpose">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf="formBPurpose">\n          <ion-item>\n            <ion-label class="validationErrorText">*Purpose could not be empty\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item no-lines>\n            <ion-label text-wrap>\n              Name of Licensee :\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col item-end>\n          <ion-item no-lines>\n            <ion-label>TNB</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Region Zone</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item>\n            <ion-label>{{siteId_region}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Addresss</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item text-wrap>\n            <ion-textarea [(ngModel)]="formBCess.ta4officeaddress" readonly="true">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Telephone Number :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6>\n          <ion-item>\n            <ion-input [(ngModel)]="formBCess.ta4officephone" readonly="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row col-12 col-sm-12 col-md-12>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Dated</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label placeholder="Select Dated">{{formBCess.ta4indatetime}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'formBdated\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf="formBDated">\n          <ion-item>\n            <ion-label class="validationErrorText">*Dated could not be empty\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item-divider style="background-color: #f3e5f5"> End for Form B</ion-item-divider>\n    </ion-grid>\n    <ion-row>\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label> Customer/Owner/Representative Signature</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <signature-pad width=800 height=200 [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2>\n        </signature-pad>\n        <button ion-button color="buttonlightColor" (click)="clearSign(\'cessationCustomer\')">Clear</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>Name Customer/Owner/Representative </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="tempCeassation.ta4witnessname" type="text" placeholder="Please Enter">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Identification Card No </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="tempCeassation.ta4witnessidenkard" type="text" placeholder="Please Enter">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Date/Time </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="DD/MM/YYYY HH:mm"\n            [(ngModel)]="tempCeassation.datetime" placeholder="Please Enter date and time"\n            (ionChange)=\'formatTimeDisplay()\'></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- Evidence Collection-->\n  <!-- <ion-grid *ngIf=\'formType === "formEvidenceCollect"\'>\n    <ion-item-divider style="background-color: #f3e5f5">NOTIFICATION LETTER OF EVIDENCE COLLECTION\n    </ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-title text-uppercase text-center>\n            notification letter of evidence collection\n          </ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label> Contract Account</ion-label>\n          <div item-content>{{evidenceCollect.ta4accountno}}</div>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Station Code</ion-label>\n          <div item-content>{{evidenceCollect.station}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>Customer Name:</ion-label>\n          <div item-content>{{evidenceCollect.ta4custname}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>I:</ion-label>\n          <div item-content>{{evidenceCollect.ta4staffname}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Staff No:</ion-label>\n          <div item-content>{{evidenceCollect.ta4staffno}} claming to have taken the following items :-</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class="headerBlue">\n      <ion-row>\n        <ion-col (click)="addEviItem()" col-4 col-sm-2 col-md-2>\n          <ion-item>\n            <ion-label text-uppercase>Bil\n              <ion-icon name="add-circle" color="buttonlightColor" style="padding-left: 30px" *ngIf="shoeEviItem">\n              </ion-icon>\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf="eviItem">\n            <ion-label class="validationErrorText"> *Evidence item cannot be empty</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-2 col-md-2>\n          <ion-item>\n            <ion-label text-wrap text-uppercase>Evidence item</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label text-uppercase text-wrap>Evidence details</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-md-1>\n          <ion-item no-lines>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let item of evidenceCollect.evidenceItem; let j = index">\n        <ion-col style="word-wrap:  break-all; padding-left: 5px;" col-4 col-sm-2 col-md-2>\n          <ion-item>\n            <ion-label>BIL {{ j + 1 }}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style="word-wrap:  break-all; padding-left: 5px;" col-4 col-sm-2 col-md-2>\n          <ion-item>\n            <ion-input [(ngModel)]="item.ta4item" type="text" placeholder="Please enter item"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="itemValEvi">\n            <ion-label class="validationErrorText">*Evidence item data cannot be empty</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="item.ta4describe" type="text" placeholder="description evidence">\n            </ion-input>\n          </ion-item>\n          <ion-item *ngIf="eviTempDmg">\n            <ion-label class="validationErrorText">*Evidence item damage data could not leave empty\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-md-1 col-sm-1 style="word-wrap:  break-all; padding-left: 5px; text-align:right"\n          (click)="deleteEviItem(j)" *ngIf="j > 0">\n          <ion-icon name="trash" color="buttonlightColor"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label col-6 text-wrap>from the premises located at</ion-label>\n          <ion-label col-6 text-wrap> {{evidenceCollect.ta4custaddress}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-item-divider style="background-color: #f3e5f5">\n        Part A: Staff Details\n      </ion-item-divider>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label> Staff Signature</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <signature-pad width=800 height=200 [options]="signaturePadOptions" id="signatureCanvas1" #SignaturePad1>\n          </signature-pad>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Name :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{evidenceCollect.ta4staffname}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Staff No. :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>{{evidenceCollect.ta4staffno}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Identification Card No. :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="evidenceCollect.ta4staffindenkard" type="text" placeholder="Please Enter ID No.">\n          </ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-item *ngIf="IcnoStff">\n            <ion-label class="validationErrorText"> *Please Insert Staff identification </ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>\n            Designation\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Technician</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>\n            Station\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-select [(ngModel)]="evidenceCollect.officeAddress" [selectOptions]="OfficeAddress"\n            (ionChange)="officeAdrssSelect()">\n            <ion-option value="KUALA LUMPUR">Kuala Lumpur</ion-option>\n            <ion-option value="SELATAN">Selatan</ion-option>\n            <ion-option value="UTARA">Utara</ion-option>\n            <ion-option value="SELANGOR">Selangor</ion-option>\n            <ion-option value="TIMUR">Timur</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-row>\n        <ion-item *ngIf="stationEvi">\n          <ion-label [ngClass]="\'validationErrorText\'"> *Please Select Station</ion-label>\n        </ion-item>\n      </ion-row>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Current Date</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4 col-sm-4 col-md-4>\n        <ion-item>\n          <ion-input type="text" placeholder="select Date" value="{{evidenceCollect.ta4datetime }}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-item *ngIf="dateCurrentEvi">\n            <ion-label class="validationErrorText"> *Current date cannot be empty</ion-label>\n          </ion-item>\n        </ion-row>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2>\n        <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'evidenceDate\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Current Time</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="evidenceCollect.ta4starttime"\n            placeholder="Enter time"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item-divider style="background-color: #f3e5f5">\n        Part B: Witness Details\n      </ion-item-divider>\n    </ion-row>\n    <ion-row>\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label> Witness Signature</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <signature-pad width=800 height=200 [options]="signaturePadOptions" id="signatureCanvas2" #SignaturePad2>\n          </signature-pad>\n          <button ion-button color="buttonlightColor" (click)="clearSign(\'evidenceWitness\')">Clear</button>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>Witness Name:</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="evidenceCollect.ta4witnessname" type="text" placeholder="Please Enter witness name">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-8>\n        <ion-item no-lines>\n          <ion-label>Address</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4>\n        <ion-item>\n          <ion-label text-wrap>{{evidenceCollect.ta4custaddress}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Identification Card No. :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="evidenceCollect.ta4witnessidenkard" type="text" placeholder="Please Enter ID No.">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Date:</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4 col-sm-4 col-md-4>\n        <ion-item>\n          <ion-input type="text" placeholder="select Date" value="{{evidenceCollect.ta4indatetime }}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2 col-sm-2 col-md-2>\n        <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'evidenceDate2\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Time</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="evidenceCollect.ta4endtime"\n            placeholder="Enter time"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- Inspection & Testing-->\n  <!-- <ion-grid *ngIf=\'formType === "inspect&Test"\'>\n    <ion-item-divider style="background-color: #f3e5f5" text-uppercase>Installation Inspection and Testing\n    </ion-item-divider>\n\n    <ion-row>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>Date :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input type="text" placeholder="select Date" value="{{inspectNTest.ta4datetime}}" [readonly]="true">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-1 col-sm-1 col-1 col-sm-1 col-md-1 style="text-align: right">\n        <button color="buttonlightColor" ion-button (click)="presentPopover($event,\'installTest\')">\n          <ion-icon name="calendar"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>To: </ion-label>\n          <div item-content>\n            <ion-label>{{inspectNTest.ta4custname}}</ion-label>\n            <ion-label text-wrap>{{inspectNTest.ta4custaddress}}</ion-label>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-title text-uppercase text-center>\n            notification letter of tnb meter installation inspection and testing\n          </ion-title>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Please be informed that TNB is conducting\n            inspection and\n            testing of TNB meter installation\n            at your premises to ensure it is working in good condition.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Your kind cooperation during the\n            inspection and\n            testing\n            process is much appreciated.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">For any enquiries, you may contact us at\n            1300-88-5454.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;">Thank you.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-uppercase style="text-align: center;"><strong>"POWERING THE NATION"</strong>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-uppercase style="text-align: center;"><strong>"BETTER. BRIGHTER"</strong>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item no-lines>\n          <label>Yours Sincerely,</label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label> Executive Signature :</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1></signature-pad>\n        </ion-item>\n        <ion-item>\n          <ion-label text-wrap color="primary">This is an electronic-generated document. No signature is\n            required.\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <button ion-button color="buttonlightColor" (click)="clearSign(\'InspectNTestManager\')">Clear</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start>(o/b General Manager/Manager)</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label>Executive In Charge :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-select placeholder="Please Select" [(ngModel)]="inspectNTest.staffNameCheck"\n            [selectOptions]="executiveDetails" (ionChange)="getPostion()">\n            <ion-option *ngFor="let persons  of exactData ; let j=index" value="{{persons}}" (ionSelect)="myIndex = j">\n              {{persons}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="staffNameSelect">\n          <ion-label class="validationErrorText">*Please select staff </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label>Position :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-input placeholder="Please Enter" [(ngModel)]="inspectNTest.ta4position">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label> Department Address :</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-textarea placeholder="Please Enter" [(ngModel)]="inspectNTest.ta4department">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 style="word-wrap:  break-all; text-align: center; padding-left: 5px;">\n        <ion-item-divider style="background-color: #f3e5f5">For TNB use</ion-item-divider>\n      </ion-col>\n      <div col-12 col-sm-12>\n        <ion-title>Please Select Customer Attendance</ion-title>\n        <ion-list radio-group [(ngModel)]="inspectNTest.ta4attendance" (ionChange)="checkforRadio()">\n          <ion-item>\n            <ion-label>Customer Present</ion-label>\n            <ion-radio value="pre"> </ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Customer Absent</ion-label>\n            <ion-radio value="abs"> </ion-radio>\n          </ion-item>\n        </ion-list>\n        <ion-item *ngIf="attendence">\n          <ion-label class="validationErrorText">*Please select attendence </ion-label>\n        </ion-item>\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label> Verify By :</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <signature-pad [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2></signature-pad>\n        </ion-item>\n        <ion-item *ngIf="checkSign2">\n          <ion-label class="validationErrorText">*Please sign first </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Staff Name :</ion-label>\n          <div item-content>{{inspectNTest.ta4staffname}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start> Staff No :</ion-label>\n          <div item-content>{{inspectNTest.ta4staffno}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- Installation Inspection-->\n  <!-- <ion-grid *ngIf=\'formType === "installationInspection"\'>\n    <ion-item-divider style="background-color: #f3e5f5" text-uppercase>Installation Inspection\n    </ion-item-divider>\n\n    <ion-list radio-group [(ngModel)]="installationInspection.ta4agree">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Customer cooperate</ion-label>\n            <ion-radio (click)="typeform()" value="true"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>Customer does not cooperate</ion-label>\n            <ion-radio (click)="typeform()" value="false"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <div *ngIf=\'!formSelected\'>\n      <ion-row>\n        <ion-col col-7 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Date</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="text" placeholder="select Date" value="{{installationInspection.ta4indatetime}}"\n              [readonly]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-1 col-sm-1 col-md-1 style="text-align: right">\n          <button color="buttonlightColor" ion-button (click)="presentPopover($event,\'meterInstallInspect\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>customer name :</ion-label>\n            <ion-label item-content item-end text-wrap>{{installationInspection.ta4custname}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>customer address :</ion-label>\n            <ion-label item-content item-end text-wrap>{{installationInspection.ta4custaddress}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-start item-content>Dear valued TNB customer,</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-title text-center text-uppercase>notice of tnb meter installation inspection</ion-title>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start>Please be informed we have conducted inspections and testing of meter\n              installation that\n              records the usage of electricity to the premises at address\n              {{installationInspection.ta4custaddress}}\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start>with Contract Account No. {{installationInspection.ta4accountno}} on\n              {{installationInspection.ta4indatetime}} at\n              {{installationInspection.ta4endtime}}</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label>Current Time :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="installationInspection.ta4endtime"\n              placeholder="Please Enter time"></ion-datetime>\n          </ion-item>\n          <ion-item *ngIf="crrTime">\n            <ion-label class="validationErrorText">*Current time cannot be empty </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-wrap>\n              For your information, evidence bag serial number is\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="installationInspection.ta4serialNum" placeholder="Enter serial number">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <div item-content item-start style="letter-spacing: 1px;">The inspection results show that the\n              meter does\n              not\n              record actual electricity consumption readings as has been explained previously to you. Please\n              be\n              informed\n              that TNB will claim the underbill charge from you.</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start style="letter-spacing: 1px;">For any enquiries, you may contact us at\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Office Zone</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label> {{siteId_region}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf="zone">\n            <ion-label class="validationErrorText">*Office zone could be leave empty </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Office Address</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item *ngIf="officeAddressSelect">\n            <ion-label class="validationErrorText">*Office address could be empty</ion-label>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-textarea [(ngModel)]="installationInspection.ta4officeaddress">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Office No. :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input [(ngModel)]="installationInspection.ta4officephone" readonly="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start style="letter-spacing: 1px;"> Thank you.</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\'formSelected\'>\n      <ion-row>\n        <ion-col col-7 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Date</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input type="text" placeholder="select Date" value="{{installationInspection.ta4indatetime}}"\n              [readonly]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-1 col-sm-1 col-1 col-sm-1 col-md-1 style="text-align: right">\n          <button color="buttonlightColor" ion-button (click)="presentPopover($event,\'meterInstallInspect\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>customer name :</ion-label>\n            <ion-label item-content item-end text-wrap>{{installationInspection.ta4custname}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>customer address :</ion-label>\n            <ion-label item-content item-end text-wrap>{{installationInspection.ta4custaddress}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-start item-content>Dear valued TNB customer,</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-title text-center text-uppercase>notice of tnb meter installation inspection</ion-title>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start>Please be informed we have conducted inspections and testing of meter\n              installation that\n              records the usage of electricity to the premises at address\n              {{installationInspection.ta4custaddress}}\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start>with Contract Account No. {{installationInspection.ta4accountno}} on\n              {{installationInspection.ta4indatetime}} at\n              {{installationInspection.ta4endtime}}</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label>Current Time</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="installationInspection.ta4endtime"\n              placeholder="Please Enter time"></ion-datetime>\n          </ion-item>\n          <ion-item *ngIf="crrTime">\n            <ion-label class="validationErrorText">*Current time cannot be empty </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-label text-wrap>\n              For your information, evidence bag serial number is:\n            </ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-input [(ngModel)]="installationInspection.ta4serialNum" placeholder="Enter serial number">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <div item-content item-start style="letter-spacing: 1px;">The inspection results show that the\n              meter does\n              not\n              record actual eletricity electricity consumption readings as has been explained previously to\n              you.\n              Please\n              be informed\n              that TNB will claim the underbill charge from you.</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start style="letter-spacing: 1px;">For any enquiries, you may contact us\n              at.</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Office Zone</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-8 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            {{siteId_region}}\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Office Addresss</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item *ngIf="officeAddressSelect">\n            <ion-label class="validationErrorText">*Office address could be empty</ion-label>\n          </ion-item>\n          <ion-item text-wrap>\n            <ion-textarea [(ngModel)]="installationInspection.ta4officeaddress">\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-push-8 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label> Office Phone Number</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-pull-4 col-sm-8 col-md-8 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input [(ngModel)]="installationInspection.ta4officephone" readonly="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item no-lines>\n            <div item-content item-start style="letter-spacing: 1px;">Thank you.</div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row>\n      <ion-item-divider style="background-color: #f3e5f5">\n        Part A: Staff/Examiner Details\n      </ion-item-divider>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item no-lines>\n          <ion-label>Examiner Signature</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <signature-pad width=800 height=200 [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad1>\n          </signature-pad>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Examiner Name :</ion-label>\n          <div item-content>{{installationInspection.ta4staffname}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Staff No :</ion-label>\n          <div item-content>{{installationInspection.ta4staffno}}</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label item-start>Unit :</ion-label>\n          <div item-content> Seal Unit Metering</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>Cc: Area/Station Manager</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]="installationInspection.ta4department" type="text" placeholder="Insert name">\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf="officeNameSelect">\n          <ion-label class="validationErrorText">*Office name could not be empty </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\'!formSelected\'>\n      <ion-row>\n        <ion-item-divider style="background-color: #f3e5f5">\n          Part B: Witness Details\n        </ion-item-divider>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-4 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Accepted By :</ion-label>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <signature-pad width=800 height=200 [options]="signaturePadOptions" id="signatureCanvas" #SignaturePad2>\n            </signature-pad>\n            <button ion-button color="buttonlightColor" (click)="clearSign(\'installInspectWitness\')">Clear</button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Name :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input [(ngModel)]="installationInspection.ta4witnessname" type="text" placeholder="Insert name"\n              required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Tel No. :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-input [(ngModel)]="installationInspection.ta4witnessphone" placeholder="Insert tel no.">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item no-lines>\n            <ion-label>Date/Time :</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-datetime displayFormat="DD/MM/YYYY HH:mm" placeholder="Select Date/Time"\n              pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="installationInspection.ta4datetime"\n              (ionChange)="formatTimeDisplay()"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid> -->\n\n  <!-- Prejudice form -->\n  <!-- <ion-grid *ngIf=\'formType === "prejudiceForm"\'>\n    <ion-item-divider style="background-color: #f3e5f5" text-uppercase>EXPLANATION SESSION WITHOUT PREJUDICE\n    </ion-item-divider>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>To:</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>{{prejude.ta4custname}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-wrap>{{prejude.ta4custaddress}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;padding-left: 10px; padding-top: 20px;">\n            <strong> Dear valued TNB Customer\n            </strong></div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-item>\n          <div text-uppercase item-content style="font-size: 18px;">\n            <strong>\n              notification letter (explanation session\n              without prejudice) to\n              electricity\n              disconnection and claims of loss of revenue and expenses and related charges.\n            </strong>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-item no-lines>\n          <div item-content style="letter-spacing: 1px;">\n            Please be informed that TNB is conducting inspections and testing of TNB meter installation at\n            your\n            premises to ensure it is working in good condition. The inspection results show that the meter\n            does not\n            record actual electricity consumption readings.\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content style="letter-spacing: 1px;">\n            Please note that under subsection 38(1) of Electricity Supply Act 1990, TNB will perform\n            electricity\n            disconnection at your premise as mentioned in disconnection notice (FORM A) that will be given\n            together\n            with this letter and will claim any loss of revenue and expenses and related changes.\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content item-start style="letter-spacing: 1px;padding-left: 10px;">\n            Therefore, you are invited to the office of REVENUE ASSURANCE which is addressed at\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label>{{siteId_region}}</ion-label>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item text-wrap>\n          <ion-textarea readonly="true" [(ngModel)]="prejude.ta4officeaddress">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <div item-content style="letter-spacing: 1px;">\n            after three (3) working days from the inspection date for explanation session without prejudice\n            regarding\n            to\n            the actions will be taken by TNB. You also encouraged to bring any proof and supporting documents\n            for this\n            session.\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label text-wrap style="letter-spacing: 1px; padding-left: 10px;  margin-right: 8px;"> For any\n            enquiries,\n            you may\n            contact TNB at {{prejude.ta4officephone}}</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label style="letter-spacing: 1px; padding-left: 10px;"> Thank you.</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>\n            <strong text-uppercase>REVENUE ASSURANCE</strong></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>\n            <strong text-uppercase>REVENUE MANAGEMENT </strong></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>\n            <strong text-uppercase>CUSTOMER SERVICE </strong></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <ion-label>\n            <strong text-uppercase>DISTRIBUTION NETWORK, tnb</strong></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- <ion-col col-12 col-sm-12 style="word-wrap:  break-all; padding-left: 5px;">\n    <ion-item>\n      <ion-title text-center>Choose language for PDF download</ion-title>\n    </ion-item>\n  </ion-col>\n  <ion-list radio-group [(ngModel)]="pdfLanguage" (ionChange)="hidebuttonPdfDownload()">\n    <ion-row col-12 col-sm-12 col-md-12>\n      <ion-col>\n        <ion-item>\n          <ion-label>Bahasa</ion-label>\n          <ion-radio value="bhs"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>English</ion-label>\n          <ion-radio value="eng"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list> -->\n\n  <ion-list ion-row radio-group style="width: -webkit-fill-available;" [(ngModel)]="pdfLanguage"\n    (ionChange)="hidebuttonPdfDownload()">\n    <ion-item-divider class="item-divider-header">\n      <ion-icon name="paper" item-start></ion-icon>\n      <strong>Language for PDF</strong>\n    </ion-item-divider>\n\n    <ion-col col-md-6>\n      <ion-item>\n        <ion-label>Bahasa</ion-label>\n        <ion-radio value="bhs"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n    <ion-col col-md-6>\n      <ion-item>\n        <ion-label>English</ion-label>\n        <ion-radio value="eng"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar>\n    <ion-row *ngIf="downPdf && (pdfLanguage == \'bhs\' || pdfLanguage == \'eng\') ">\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveData()">Save</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="previewPdf()">Preview</button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-compliance/compliance-form/complaint-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_8__pojo_Complaints__["a" /* Complaints */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_17__components_pdf_generation_eng_pdf_generation_eng__["a" /* PdfGenerationEngComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_pdf_generation_bm_pdf_generation_bm__["a" /* PdfGenerationBmComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_9__pojo_complianceForm__["a" /* ComplianceTypes */],
            __WEBPACK_IMPORTED_MODULE_18__components_site_address_site_address__["a" /* SiteAddressComponent */]])
    ], ComplaintFormPage);
    return ComplaintFormPage;
}(__WEBPACK_IMPORTED_MODULE_19__components_compliance_sign_compliance_sign__["a" /* ComplianceSignComponent */]));

//# sourceMappingURL=complaint-form.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintFormPageModule", function() { return ComplaintFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaint_form__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_Complaints__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdfForms_complaint_form_pdf_complaint_form_pdf__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdfForms_complaince_form_bahasa_pdf_complaince_form_pdf_bhs__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pdf_generation_bm_pdf_generation_bm__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pdf_generation_eng_pdf_generation_eng__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_site_address_site_address__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pojo_complianceForm__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ComplaintFormPageModule = /** @class */ (function () {
    function ComplaintFormPageModule() {
    }
    ComplaintFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complaint_form__["a" /* ComplaintFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__complaint_form__["a" /* ComplaintFormPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__pojo_Complaints__["a" /* Complaints */],
                __WEBPACK_IMPORTED_MODULE_14__pojo_complianceForm__["a" /* ComplianceTypes */],
                __WEBPACK_IMPORTED_MODULE_6__providers_pdfForms_complaint_form_pdf_complaint_form_pdf__["a" /* ComplaintFormPdfProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_pdfForms_complaince_form_bahasa_pdf_complaince_form_pdf_bhs__["a" /* ComplainceFormPdfBhs */],
                __WEBPACK_IMPORTED_MODULE_12__components_pdf_generation_eng_pdf_generation_eng__["a" /* PdfGenerationEngComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_pdf_generation_bm_pdf_generation_bm__["a" /* PdfGenerationBmComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_site_address_site_address__["a" /* SiteAddressComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_header_header__["a" /* HeaderComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComplaintFormPageModule);
    return ComplaintFormPageModule;
}());

//# sourceMappingURL=complaint-form.module.js.map

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFormPdfProvider; });
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



/*
  Generated class for the ComplaintFormPdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * Create by Ameer
 * All of PDF form is available here
 */
var ComplaintFormPdfProvider = /** @class */ (function () {
    function ComplaintFormPdfProvider(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        console.log('Hello ComplaintFormPdfProvider Provider');
    }
    ComplaintFormPdfProvider.prototype.generateComplaintFormPdf = function (item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
        console.log(" --> called work order service adapter calling ()(()) ");
        return new Promise(function (resolve, reject) {
            debugger;
            console.log("came inside to complaint pdf form generation --- >>>.");
            var dd = null;
            switch (formType) {
                case "inspectionNinstallingMeter":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: [
                                    "Date ", item.ta4datetime,
                                    '\n\n',
                                    'To: ', item.ta4custname, '\n',
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            '\n\n',
                            {
                                text: ['Dear valued TNB customer']
                            },
                            {
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: 'NOTIFICATION LETTER OF TNB METER INSTALLATION INSPECTION AND TESTING', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 15, 0, 0],
                                text: [
                                    'Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition. Your kind cooperation during the inspection and testing process is much appreciated. For any enquiries, you may contact us at 1300-88-5454',
                                    '\n\nThank you'
                                ],
                            },
                            {
                                margin: [30, 20, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: [
                                    '"BETTER. BRIGHTER"\n\n',
                                    '"TNB PRACTISES A NO GIFT POLICY"',
                                ]
                            },
                            {
                                alignment: 'justify',
                                margin: [30, 20, 0, 0],
                                text: ' Yours Sincerely,\n\n\n',
                            },
                            /*      {
                                   margin: [30, 20, 0, 0],
                                   image: 'sign1',
                                   witdth: 200
                                 }, */
                            {
                                margin: [30, 0, 0, 0],
                                image: 'sign1',
                                width: 100,
                                height: 50,
                            },
                            {
                                alignment: 'justify',
                                margin: [30, 20, 0, 0],
                                text: [
                                    item.ta4staffname,
                                    '\n',
                                    item.ta4position,
                                    '\n',
                                    item.ta4department,
                                ]
                            },
                            {
                                table: {
                                    margin: [0, 50, 0, 0],
                                    headerRows: 1,
                                    body: [
                                        [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                                            { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', '', '', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            { text: 'For TNB usage', decoration: 'underline', margin: [30, 200, 0, 0], },
                            {
                                margin: [30, 0, 80, 10],
                                text: '\nPlease tick which is suitable\n'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                heights: [100, 50],
                                table: {
                                    body: [
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: 'present',
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Customer attend'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: 'absent',
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Customer absent'
                                        ],
                                    ]
                                }
                            }, {
                                margin: [30, 15, 0, 0],
                                text: 'Verified by :\n\n',
                            },
                            {
                                margin: [30, 0, 0, 0],
                                image: 'sign2',
                                width: 100,
                                height: 50,
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    'Staff Name: ', item.ta4staffname,
                                    '\n',
                                    'Staff No.: ', item.ta4staffno,
                                ]
                            }
                        ],
                        images: {
                            sign1: item.ta4signmanger,
                            sign2: item.ta4signstaff,
                            present: item.present,
                            absent: item.absent
                        },
                        styles: {
                            header: {
                                fontSize: 18,
                                bold: true,
                                alignment: 'center',
                                margin: [30, 50, 60, 80],
                                decoration: 'underline',
                            },
                            subheader: {
                                fontSize: 14
                            },
                            tableHeader: {
                                fontSize: 16,
                                margin: [50, 30, 0, 0],
                                bold: true,
                                alignment: 'center',
                            },
                            superMargin: {
                                margin: [30, 0, 40, 0],
                                fontSize: 15
                            }
                        }
                    };
                    break;
                case "collectionEvidence":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'NOTIFICATION LETTER OF EVIDENCE COLLECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Contract Account .: ', item.ta4accountno],
                                    },
                                    {
                                        text: ['Station Code: ', item.station]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    'Customer Name: ', item.ta4custname, '\n\n',
                                    'Hereby I: ', item.ta4staffname, '\n\n',
                                    'Staff No.: ', item.ta4staffno, ' claiming to have taken the following items:-\n',
                                ]
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [30, '*', '*', 0],
                                    headerRows: 1,
                                    body: soTypes
                                }
                            },
                            // {
                            //   margin: [30, 5, 0, 0],
                            //     text: [soTypes]
                            // },
                            '\n',
                            {
                                margin: [30, 0, 0, 10],
                                text: [
                                    'from the premises located at: ',
                                    item.ta4custaddress
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Staff Signature:\n',
                                    },
                                    {
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Witness Signature:',
                                    },
                                    {
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Examiner Name: ', '\n', item.ta4staffname]
                                    },
                                    {
                                        text: ['Witness Name: ', '\n', item.ta4witnessname]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Staff No.: ', item.ta4staffno]
                                    },
                                    {
                                        text: ['Address:', '\n', item.ta4custaddress]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    'Identification Card No: ', item.ta4witnessidenkard
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Designation: Technician',
                                    },
                                    {
                                        text: ['Identification Card No: ', item.ta4staffindenkard]
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    ' Station: ', item.ta4officezone
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Date: ', item.ta4datetime]
                                    },
                                    {
                                        text: ['Date: ', item.ta4indatetime]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Time: ', item.ta4starttime]
                                    },
                                    {
                                        text: ['Time: ', item.ta4endtime],
                                    }
                                ]
                            },
                        ],
                        images: {
                            sign1: item.ta4signstaff,
                            sign2: item.ta4signwitness
                        },
                        styles: {
                            tableHeader: {
                                fontSize: 16,
                                margin: [30, 30, 0, 0],
                                bold: true,
                                alignment: 'center',
                            },
                        }
                    };
                    break;
                // Tnb Inspection 
                case "inspecInstallingTnbMeter":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 30, 0],
                                columns: [
                                    {
                                        text: 'Our Ref. : TNB (B) DNET/METER/SEAL',
                                    },
                                    {
                                        text: ['Date: ', item.ta4indatetime]
                                    }
                                ],
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: [item.ta4custname]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: 'Dear valued TNB customer,'
                            },
                            {
                                margin: [50, 0, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 20, 20, 0],
                                text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                                    item.ta4custaddress,
                                    ' with Contract Account No. ',
                                    item.ta4indatetime,
                                    ' at ',
                                    item.ta4endtime,
                                    '\n\n',
                                    "The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charges from you.",
                                    '\n\n For any enquiries, you may contact us at ',
                                    '',
                                    item.ta4officeaddress,
                                    ',',
                                    item.ta4officephone,
                                    '\n\n Thank You.'
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', '', '', '', '', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 0, 30, 0],
                                width: 200,
                                columns: [
                                    {
                                        text: 'Examiner Signature:',
                                    },
                                    {
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                width: 200,
                                columns: [
                                    {
                                        text: 'Accepted By (T/T):',
                                    },
                                    {
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Examiner Name: ', item.ta4staffname]
                                    },
                                    {
                                        text: [
                                            'Name: ',
                                            item.ta4witnessname
                                        ]
                                    }
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Staff no. : ', item.ta4staffno]
                                    },
                                    {
                                        text: [
                                            'Tel. No.: ',
                                            item.ta4witnessphone
                                        ]
                                    }
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Unit: Seal Unit Metering',
                                    },
                                    {
                                        text: [
                                            'Date/Time:',
                                            item.datetime
                                        ]
                                    }
                                ],
                            },
                            '\n',
                            {
                                margin: [100, 0, 0, 0],
                                text: [
                                    'Cc:',
                                    item.ta4department
                                ]
                            }
                        ],
                        images: {
                            sign1: item.ta4signstaff,
                            sign2: item.ta4signwitness
                        },
                        styles: {
                            tableHeader: {
                                fontSize: 14,
                                margin: [30, 30, 0, 0],
                                bold: true,
                                alignment: 'center',
                            },
                        }
                    };
                    break;
                // Customer Copy
                case "electricCut":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 0, 0, 0],
                                alignment: 'center',
                                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', item.ta4statename, '\n\nELECTRICITY SUPPLY ACT 1990']
                            },
                            {
                                style: 'textMargin',
                                text: ['To:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Sir/Madam/Messrs, ']
                            },
                            {
                                style: 'title',
                                margin: [30, 0, 0, 0],
                                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ['Please be informed that on  ', item.ta4starttime, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:',
                                    '\n\n',
                                    item.ta4anamoly,
                                    '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
                            },
                            {
                                margin: [30, 0, 0, 0],
                                pageBreak: 'before',
                                text: '\nPlease tick which is suitable\n'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [50, 100, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        [
                                            '', 'Subsection 37(1)', 'Description'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase2,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(1)', 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase3,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(a)	abstracts energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase4,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(b)	consumes energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase5,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(c)	uses energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase6,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(d)	alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or '
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase7,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(e)	prevents any such meter or instrument from duly recording the output or consumption of energy.'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase8,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(14)', 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'
                                        ],
                                    ]
                                }
                            },
                            {
                                margin: [30, 50, 0, 0],
                                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on ',
                                    item.datetime,
                                    '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                                    '\n\n',
                                    'Address: ',
                                    '\n\n',
                                    item.ta4officeaddress,
                                    '\n\n',
                                    ,
                                    'Date: ',
                                    item.ta4indatetime
                                ]
                            }
                        ],
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
                    break;
                // Staff Copy
                case "electricCutStaff":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 0, 0, 15],
                                alignment: 'center',
                                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', item.ta4statename, '\n\nELECTRICITY SUPPLY ACT 1990']
                            },
                            {
                                style: 'textMargin',
                                text: ['To:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Sir/Madam/Messrs, ']
                            },
                            {
                                style: 'title',
                                margin: [30, 0, 0, 0],
                                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ['Please be informed that on  ', item.ta4starttime, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:',
                                    '\n\n',
                                    item.ta4anamoly,
                                    '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
                            },
                            {
                                margin: [30, 200, 0, 0],
                                text: '\nPlease tick which is suitable\n'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [50, 100, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        [
                                            '', 'Subsection 37(1)', 'Description'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase2,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(1)', 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase3,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(a)	abstracts energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase4,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(b)	consumes energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase5,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(c)	uses energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase6,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(d)	alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or '
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase7,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(e)	prevents any such meter or instrument from duly recording the output or consumption of energy.'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase8,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(14)', 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'
                                        ],
                                    ]
                                }
                            },
                            {
                                margin: [30, 50, 0, 0],
                                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on ',
                                    item.datetime,
                                    '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                                    '\n\n',
                                    'Address: ',
                                    '\n\n',
                                    item.ta4officeaddress,
                                    '\n\n',
                                    ,
                                    'Date: ',
                                    item.ta4indatetime
                                ],
                            },
                            {
                                pageBreak: 'before',
                                margin: [50, 30, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['Delivery Notice of Form A\n\n'
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        ['Date', optItem1.ta4indatetime],
                                        ['Time', optItem1.ta4starttime],
                                        ['Name Receiver ', optItem1.ta4witnessname],
                                        ['Signature Receiver', {
                                                stack: [
                                                    {
                                                        image: 'sign1',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                    ]
                                }
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        /*   [
                                            'Name & Notice Deliver Signature',
                                            optItem1.deliverName
                                          ] */
                                        ['Deliver Signature ', {
                                                stack: [
                                                    {
                                                        image: 'sign2',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                        [
                                            'Delivery Name',
                                            optItem1.ta4staffname
                                        ],
                                        [
                                            'Remarks (if any)',
                                            optItem1.ta4describe
                                        ]
                                    ]
                                }
                            },
                            {
                                margin: [50, 10, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['Supply Disconnection \n\n']
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        ['Date', optItem2.ta4datetime],
                                        ['Time', optItem2.ta4starttime],
                                        ['Name Disconnector ', optItem2.ta4staffname],
                                        ['Disconnector Signature ', {
                                                stack: [
                                                    {
                                                        image: 'sign3',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                        [
                                            'Remarks (if any)',
                                            optItem2.ta4describe
                                        ]
                                    ]
                                }
                            },
                            {
                                pageBreak: 'before',
                                margin: [50, 10, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['Supply Reconnection A\n\n']
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, '*'],
                                    body: [
                                        ['Date ', optItem3.ta4datetime],
                                        ['Time', optItem3.ta4starttime],
                                        ['Name Reconnector ', optItem3.ta4staffname],
                                        ['Reconnector Signature ', {
                                                stack: [
                                                    {
                                                        image: 'sign4',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                        [
                                            'Remarks (if any)',
                                            optItem3.ta4describe
                                        ]
                                    ]
                                }
                            },
                        ],
                        images: {
                            sign1: optItem1.ta4signcustomer,
                            sign2: optItem1.ta4signstaff,
                            sign3: optItem2.ta4signstaff,
                            sign4: optItem3.ta4signstaff
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
                    }; // end case for Form A staff
                    break;
                case "elctCessInterupt":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 30, 0],
                                columns: [
                                    {
                                        text: ['Date :', item.ta4datetime]
                                    },
                                ],
                            },
                            {
                                margin: [30, 20, 10, 0],
                                text: ['To: ', item.ta4custname]
                            },
                            {
                                margin: [30, 20, 10, 0],
                                text: 'Dear valued TNB customer,\n'
                            },
                            {
                                margin: [30, 20, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: "NOTIFICATION NOTIE OF CESSATION TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ["Please be informed that TNB is conducting testing and inspection of TNB's meter installation at your premises to ensure that it works properly ",
                                    '\n\n',
                                    ,
                                    "In view of the same please be informed that the electricity supply at your premises will be cessationed/temporarily interupted on ",
                                    item.ta4indatetime,
                                    ' from time ',
                                    item.ta4starttime,
                                    ' until inspection time ',
                                    item.ta4endtime,
                                ]
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: [" Your kind cooperation is much appreciated",
                                    '\nThank You\n']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['\n“BETTER BRIGHTER”\n',
                                    '“TNB PRACTISES A NO GIFT POLICY”']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                image: 'sign1',
                                width: 100,
                                height: 50,
                            },
                            {
                                margin: [30, 0, 0, 0],
                                text: ['Staff Name: ', item.ta4staffname, '\n',
                                    'Staff No. ', item.ta4staffno]
                            },
                            '\n',
                            {
                                margin: [30, 10, 0, 0],
                                text: [" I hereby fully understand the contents of this notice and  that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                image: 'sign2',
                                width: 100,
                                height: 50,
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: [
                                    "Name(Customer/Owner/Representative): ",
                                    item.ta4witnessname,
                                    '\n\n',
                                    "Identification Card No.: ",
                                    item.ta4witnessidenkard,
                                    '\n\n',
                                    "Date/Time: ",
                                    item.date1
                                ]
                            },
                        ],
                        images: {
                            sign1: item.ta4signstaff,
                            sign2: item.ta4signwitness
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
                    }; // End Notice Cessation Temporary
                    break;
                case "formB":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [100, 0, 0, 0],
                                alignment: 'center',
                                text: [
                                    "LICENSEE SUPPLY REGULATIONS 1990\n\n",
                                    "Form B\n\n",
                                    "sub-regulations 6A(2)\n\n",
                                    "MALAYSIA\n\n",
                                    "STATE OF ",
                                    item.ta4statename,
                                    '\n',
                                    "ELECTRICITY SUPPLY ACT 1990"
                                ]
                            },
                            {
                                margin: [30, 20, 10, 0],
                                lineHeight: 2,
                                text: ["To: ", item.ta4custname, '\n',
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            '\n\n',
                            {
                                text: ["Sir/Madam/Mr/Messrs,"]
                            },
                            {
                                margin: [30, 10, 20, 0],
                                bold: true,
                                text: ["NOTICE OF TEMPORARY CESSATION / INTERUPTION OF ELECTRICITY SUPPLY."]
                                /*  table: {
                                   headerRows: 1,
                                   body: [
                                     [{ text: data.language[5].complianceFormType6.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                     ['', '', '', ''],
                                   ]
                                 },
                                 layout: 'lightHorizontalLines' */
                            },
                            {
                                margin: [30, 10, 20, 0],
                                lineHeight: 1,
                                text: [
                                    "Please be informed that the supply of electricity at ",
                                    item.ta4custaddress,
                                    " shall be temporarily ceased/interrupted on ",
                                    item.ta4datetime,
                                    ' from ',
                                    item.ta4starttime,
                                    ' to ',
                                    item.ta4endtime,
                                    ' for the purpose of ',
                                    item.ta4purpose
                                ]
                            },
                            {
                                margin: [30, 10, 20, 0],
                                text: ['\nName of Licensee: TNB\n\n',
                                    'Address: ',
                                    item.ta4officeaddress,
                                    '\n\n',
                                    'Telephone Number: ',
                                    item.ta4officephone,
                                    '\n\n',
                                    'Dated: ',
                                    item.ta4indatetime
                                ]
                            },
                        ],
                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true
                            },
                            textMargin: {
                                margin: [30, 50, 80, 0]
                            }
                        }
                    }; // End for Form B 
                    break;
                //prejudice
                case "prejudice":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 10, 0],
                                columns: [
                                    {
                                        text: ['To: ', item.ta4custname]
                                    },
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            {
                                margin: [30, 20, 10, 0],
                                text: 'Dear valued TNB customer\n'
                            },
                            {
                                margin: [30, 20, 0, 0],
                                bold: true,
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: "NOTIFICATION LETTER (EXPLANATION SESSION WITHOUT PREJUDICE) REGARDING TO ELECTRICITY DISCONNECTION AND CLAIMS OF LOSS OF REVENUE AND EXPENSES AND RELATED CHARGES.", style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ["Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition. The inspection results show that the meter does not record actual electricity consumption readings. ",
                                    '\n\n',
                                    "Please note that under subsection 38 (1) of the Electricity Supply Act 1990, TNB will perform electricity disconnection at your premise as mentioned in disconnection notice (Form A) that will be given together with this letter and will claim any loss of revenue and expenses and related charges.",
                                    '\n\n',
                                    "Therefore, you are invited to the office of REVENUE ASSURANCE which is addressed at ",
                                    item.ta4officeaddress,
                                    " after three (3) working days from the inspection date for explanation session without prejudice regarding to the actions will be taken by TNB. You are also encouraged to bring any proof and supporting documents for this session."
                                ]
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 20],
                                text: [
                                    "For any enquiries, you may contact TNB at ",
                                    item.ta4officephone
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: "Thank you."
                            },
                            '\n\n',
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "REVENUE ASSURANCE"
                            },
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "REVENUE MANAGEMENT "
                            },
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "CUSTOMER SERVICE"
                            },
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "DISTRIBUTION NETWORK, TNB"
                            },
                            '\n\n',
                            {
                                margin: [100, 0, 0, 0],
                                italics: true,
                                fontSize: 10,
                                decoration: 'underline',
                                text: "This notice is computer generated and does not require a signature "
                            },
                        ],
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
                    break;
            } // End of Swtich Case 
            resolve(dd);
        });
    };
    ComplaintFormPdfProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ComplaintFormPdfProvider);
    return ComplaintFormPdfProvider;
}());

//# sourceMappingURL=complaint-form-pdf.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainceFormPdfBhs; });
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



var ComplainceFormPdfBhs = /** @class */ (function () {
    function ComplainceFormPdfBhs(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.url = null;
        this.langErr = true;
        console.log('Hello ComplaintFormPdfProvider Provider');
    }
    ComplainceFormPdfBhs.prototype.generateComplainceFormPdfBhs = function (item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            debugger;
            if ('bhs' == langType) {
                _this.url = '../www/assets/data/libBahasa.json';
            }
            else {
                _this.url = '../www/assets/data/libEnglish.json';
            }
            resolve();
        }).catch(function () {
            console.log('Proccess not done');
        }).then(function () {
            return new Promise(function (resolve, reject) {
                var dd = null;
                _this.http
                    .get(_this.url)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log("data of load java LPC : " + data.length);
                    var fullItems;
                    debugger;
                    fullItems = data;
                    console.log("work order result.. " + data.language[0].complianceFormType1.date);
                    switch (formType) {
                        case "inspectionNinstallingMeter":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.date, item.ta4datetime,
                                            '\n\n',
                                            'Kepada :', item.ta4custname, '\n',
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 1,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    '\n\n',
                                    {
                                        text: [data.language[0].complianceFormType1.salutation,]
                                    },
                                    {
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[0].complianceFormType1.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 15, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.paragraph1,
                                            '\n\nSekian dimaklumkan, terima kasih.'
                                        ],
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: [
                                            '"BETTER. BRIGHTER"\n\n',
                                            data.language[0].complianceFormType1.moto
                                        ]
                                    }, {
                                        alignment: 'justify',
                                        margin: [30, 20, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.signOfSalutation,
                                            '\n\n\n'
                                        ]
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                    {
                                        alignment: 'justify',
                                        margin: [30, 20, 0, 0],
                                        text: [
                                            item.ta4staffname,
                                            '\n',
                                            item.ta4position,
                                            '\n',
                                            item.ta4department,
                                        ]
                                    },
                                    {
                                        table: {
                                            margin: [0, 50, 0, 0],
                                            headerRows: 1,
                                            body: [
                                                [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                                                    { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', '', '', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    { text: data.language[0].complianceFormType1.tickTitle, decoration: 'underline', margin: [30, 200, 0, 0] },
                                    // {
                                    //   margin:[30,5,0,0],
                                    //   ul:[
                                    //     'Customer attend',
                                    //     'Customer not attend',
                                    //   ]
                                    // },
                                    {
                                        margin: [30, 0, 80, 10],
                                        text: '\nSila tanda yang berkenaan\n'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        heights: [100, 50],
                                        table: {
                                            body: [
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: 'present',
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Pengguna Hadir'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: 'absent',
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Pengguna Tidak Hadir'
                                                ],
                                            ]
                                        }
                                    }, {
                                        margin: [30, 15, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.signOff,
                                            '\n\n',
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.staffDetailN, item.ta4staffname,
                                            data.language[0].complianceFormType1.staffNo, item.ta4staffno
                                        ]
                                    }
                                ],
                                images: {
                                    sign1: item.ta4signmanger,
                                    sign2: item.ta4signstaff,
                                    present: item.present,
                                    absent: item.absent
                                },
                                styles: {
                                    header: {
                                        fontSize: 18,
                                        bold: true,
                                        alignment: 'center',
                                        margin: [30, 50, 60, 80],
                                        decoration: 'underline',
                                    },
                                    subheader: {
                                        fontSize: 14
                                    },
                                    tableHeader: {
                                        fontSize: 16,
                                        margin: [50, 30, 0, 0],
                                        bold: true,
                                        alignment: 'center',
                                    },
                                    superMargin: {
                                        margin: [30, 0, 40, 0],
                                        fontSize: 15
                                    }
                                }
                            };
                            break;
                        case "collectionEvidence":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[1].complianceFormType2.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [data.language[1].complianceFormType2.col1Acc, item.ta4accountno],
                                            },
                                            {
                                                text: [data.language[1].complianceFormType2.col2SttCode, item.station]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            data.language[1].complianceFormType2.custName, item.ta4custname,
                                            '\n\n',
                                            data.language[1].complianceFormType2.admit, item.ta4staffname,
                                            '\n\n',
                                            data.language[1].complianceFormType2.staffNo, item.ta4staffno,
                                            data.language[1].complianceFormType2.staffNo2,
                                        ]
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [30, '*', '*', 0],
                                            headerRows: 2,
                                            body: soTypes
                                        }
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 10],
                                        text: [
                                            data.language[1].complianceFormType2.addrss, item.ta4custaddress
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: 'T/Tangan Pengambil:\n ',
                                            },
                                            {
                                                image: 'sign1',
                                                width: 100,
                                                height: 50,
                                            },
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: 'T/Tangan Pengambil: ',
                                            },
                                            {
                                                image: 'sign2',
                                                width: 100,
                                                height: 50,
                                            },
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: ['Nama Pekerja: ', '\n', item.ta4staffname]
                                            },
                                            {
                                                text: ['Nama Pengguna: ', '\n', item.ta4witnessname]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: ['No Pekerja ', item.ta4staffno]
                                            },
                                            {
                                                text: ['Alamat', '\n', item.ta4custaddress]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            'No Kad Pengenalan: ',
                                            item.ta4witnessidenkard
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [
                                                    'Jawatan: ',
                                                    'Juruteknik'
                                                ]
                                            },
                                            {
                                                text: [
                                                    'No Kad Pengenalan: ',
                                                    item.ta4staffindenkard
                                                ],
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            ' Stesen: ', item.ta4officezone
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: ['Tarikh: ', item.ta4datetime]
                                            },
                                            {
                                                text: ['Tarikh: ', item.ta4indatetime]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [
                                                    'Masa: ',
                                                    item.ta4starttime
                                                ]
                                            },
                                            {
                                                text: ['Masa: ', item.ta4endtime]
                                            }
                                        ]
                                    },
                                ],
                                images: {
                                    sign1: item.ta4signstaff,
                                    sign2: item.ta4signwitness
                                },
                                styles: {
                                    tableHeader: {
                                        fontSize: 16,
                                        margin: [30, 30, 0, 0],
                                        bold: true,
                                        alignment: 'center',
                                    },
                                    images: {
                                        tnbLogo: 'data:image/png;base64,../src/assets/imgs/tnb.png',
                                    }
                                }
                            }; // End case for collection evidence
                            break;
                        case "inspecInstallingTnbMeter":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 30, 0],
                                        columns: [
                                            {
                                                text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL',
                                            },
                                            {
                                                text: ['Tarikh: ', item.ta4indatetime]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: [item.ta4custname]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 1,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: 'Pelanggan TNB Yang Dihormati,'
                                    },
                                    {
                                        margin: [50, 0, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: 'PEMAKLUMAN SEMAKAN PEPASANGAN METER ELEKTRIK OLEH TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 20, 20, 0],
                                        text: [data.language[3].complianceFormType4.paragraph1,
                                            item.ta4custaddress,
                                            'dengan No. Akaun _',
                                            item.ta4indatetime,
                                            ' pada',
                                            item.ta4endtime,
                                            '\n\n',
                                            data.language[3].complianceFormType4.paragraph2,
                                            '\n\n',
                                            data.language[3].complianceFormType4.paragraph3,
                                            ',',
                                            item.ta4officeaddress,
                                            ',',
                                            item.ta4officephone,
                                            '\n\n',
                                            data.language[3].complianceFormType4.salutationEnd,
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', '', '', '', '', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 0, 30, 0],
                                        witdth: 400,
                                        columns: [
                                            {
                                                text: data.language[3].complianceFormType4.closure1,
                                            },
                                            {
                                                image: 'sign1',
                                                width: 100,
                                                height: 50,
                                            },
                                        ],
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        width: 400,
                                        columns: [
                                            {
                                                text: data.language[3].complianceFormType4.closure2,
                                            },
                                            {
                                                image: 'sign2',
                                                width: 100,
                                                height: 50,
                                            },
                                        ],
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [data.language[3].complianceFormType4.closure3, item.ta4staffname]
                                            },
                                            {
                                                text: [
                                                    data.language[3].complianceFormType4.closure4,
                                                    item.ta4witnessname
                                                ]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [data.language[3].complianceFormType4.closure5, item.ta4staffno]
                                            },
                                            {
                                                text: [
                                                    data.language[3].complianceFormType4.closure6,
                                                    item.ta4witnessphone
                                                ]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: data.language[3].complianceFormType4.closure7,
                                            },
                                            {
                                                text: [
                                                    data.language[3].complianceFormType4.closure8,
                                                    item.datetime
                                                ]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [100, 0, 0, 0],
                                        text: [
                                            data.language[3].complianceFormType4.closure9,
                                            item.ta4department
                                        ]
                                    }
                                ],
                                images: {
                                    sign1: item.ta4signstaff,
                                    sign2: item.ta4signwitness
                                },
                                styles: {
                                    tableHeader: {
                                        fontSize: 14,
                                        margin: [30, 30, 0, 0],
                                        bold: true,
                                        alignment: 'center',
                                    },
                                }
                            }; // End of instalation meter
                            break;
                        //Customer Copy
                        case "electricCut":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        alignment: 'center',
                                        text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\n(zone)  ', item.ta4statename, '\n\nAKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        style: 'textMargin',
                                        text: ['Kepada:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n\n Tuan/Puan/Cik/Tetuan, ']
                                    },
                                    {
                                        style: 'title',
                                        margin: [30, 0, 50, 0],
                                        text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: ['Sila ambil perhatian pada', item.ta4starttime, 'satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:',
                                            '\n\n',
                                            item.ta4anamoly,
                                            ,
                                            '\n\nBerdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
                                    },
                                    {
                                        margin: [30, 200, 0, 0],
                                        text: '\nSila tanda yang berkenaan\n'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [50, 100, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                [
                                                    '', 'Subseksyen 37(1)', 'Huraian'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase2,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(1)', 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa  kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase3,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', '(a)	mengambil tenaga;'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase4,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', '(b) mengguna habis tenaga;'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase5,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(c)	mengguna tenaga;'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase6,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(d)	mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase7,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(e) menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran atau penggunahabisan tenaga. '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase8,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(14)', 'merosakkan apa-apa meter atau alat lain yang digunakan atas atau berkaitan dengan mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga. '
                                                ],
                                            ]
                                        }
                                    },
                                    {
                                        margin: [30, 50, 0, 0],
                                        text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada',
                                            item.datetime,
                                            ,
                                            '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: 'Nama Pemegang Lesen: TENAGA NASIONAL BERHAD',
                                            },
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            '\n\n',
                                            'Alamat: ',
                                            '\n\n',
                                            item.ta4officeaddress,
                                            '\n\n',
                                            'Tarikh: ',
                                            item.ta4indatetime
                                        ]
                                    }
                                ],
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            }; // End for customer Electric cut
                            break;
                        // Staff Copy
                        case "electricCutStaff":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        alignment: 'center',
                                        text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA\n\n', item.ta4statename, '\n\nAKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        style: 'textMargin',
                                        text: ['Kepada:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Tuan/Puan/Cik/Tetuan, ']
                                    },
                                    {
                                        style: 'title',
                                        margin: [30, 0, 0, 0],
                                        text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [
                                            'Sila ambil perhatian pada',
                                            item.ta4starttime,
                                            'satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:',
                                            '\n\n',
                                            item.ta4anamoly,
                                            '\n\n',
                                            'Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:'
                                        ]
                                    },
                                    {
                                        margin: [30, 200, 0, 0],
                                        text: '\nSila tanda yang berkenaan\n'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [50, 100, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                [
                                                    '', 'Subseksyen 37(1)', 'Penerangan'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase2,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(1)', 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa  kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain: '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase3,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', ' (a)mengambil tenaga '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase4,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', '(b) mengguna habis tenaga '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase5,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(c)	mengguna tenaga '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase6,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(d)	mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase7,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(e)	menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran atau penggunahabisan tenaga.'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase8,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(14)', 'merosakkan apa-apa meter atau alat lain yang digunakan atas atau berkaitan dengan mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga.'
                                                ],
                                            ]
                                        }
                                    },
                                    {
                                        margin: [30, 50, 0, 0],
                                        text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada',
                                            item.datetime,
                                            '\n\n',
                                            ' Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                                            '\n\n',
                                            'Address: ',
                                            '\n\n',
                                            item.ta4officeaddress,
                                            '\n\n',
                                            ,
                                            'Date: ',
                                            item.ta4indatetime
                                        ]
                                    },
                                    {
                                        pageBreak: 'before',
                                        margin: [50, 30, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['Penyerahan Notis Borang A\n\n']
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Tarikh ', optItem1.ta4indatetime],
                                                ['Mase', optItem1.ta4starttime],
                                                ['Nama Penerima ', optItem1.ta4witnessname],
                                                ['T/Tangan Penerima', {
                                                        stack: [
                                                            {
                                                                image: 'sign1',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                            ]
                                        }
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Deliver Signature ', {
                                                        stack: [
                                                            {
                                                                image: 'sign2',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                                [
                                                    'Nama Penyerah Notis',
                                                    optItem1.ta4staffname
                                                ],
                                                [
                                                    'Catatan (jika ada)',
                                                    optItem1.ta4describe
                                                ]
                                            ]
                                        }
                                    },
                                    '\n',
                                    {
                                        margin: [50, 10, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['Pemotongan Bekalan \n\n']
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Tarikh', optItem2.ta4datetime],
                                                ['Mase', optItem2.ta4starttime],
                                                ['Nama Pemotong Bekalan ', optItem2.ta4staffname],
                                                ['T/Tangan Pemotong Bekalan', {
                                                        stack: [
                                                            {
                                                                image: 'sign3',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                                [
                                                    'Catatan (jika ada) ',
                                                    optItem2.ta4describe
                                                ]
                                            ]
                                        }
                                    },
                                    '\n',
                                    {
                                        pageBreak: 'before',
                                        margin: [50, 10, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['Penyambungan Semula Bekalan\n\n']
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Tarikh', optItem3.ta4datetime],
                                                ['Mase', optItem3.ta4starttime],
                                                ['Nama Penyambung Bekalan ', optItem3.ta4staffname],
                                                ['T/Tangan Penyambung Bekalan ', {
                                                        stack: [
                                                            {
                                                                image: 'sign4',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                                [
                                                    'Catatan (jika ada)',
                                                    optItem3.ta4describe
                                                ]
                                            ]
                                        }
                                    },
                                ],
                                images: {
                                    sign1: optItem1.ta4signcustomer,
                                    sign2: optItem1.ta4signstaff,
                                    sign3: optItem2.ta4signstaff,
                                    sign4: optItem3.ta4signstaff
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
                            }; // end case for Form A staff
                            break;
                        case "elctCessInterupt":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 30, 0],
                                        columns: [
                                            {
                                                text: ['Tarikh :', item.ta4datetime]
                                            },
                                        ],
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: ['Kepada :', item.ta4custname]
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: 'Pelanggan TNB Yang Dihormati\n'
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[4].complianceFormType5.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[4].complianceFormType5.paragraph1,
                                            '\n\n',
                                            ,
                                            data.language[4].complianceFormType5.paragraph2,
                                            item.ta4indatetime,
                                            data.language[4].complianceFormType5.paragraph5,
                                            item.ta4starttime,
                                            ' hingga ',
                                            item.ta4endtime
                                        ]
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: [data.language[4].complianceFormType5.paragraph3, '\nSekian dimaklumkan, terima kasih.\n']
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['\n“PENGGERAK KEMAJUAN NEGARA”\n']
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: ['Nama Pekerja: ', item.ta4staffname, '\n',
                                            'No. Pekerja. ', item.ta4staffno]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[4].complianceFormType5.paragraph4]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[5].complianceFormType6.verifyBy[0].By,
                                            item.ta4witnessname,
                                            '\n\n',
                                            'No. Kad Pengenalan: ',
                                            item.ta4witnessidenkard,
                                            '\n\n',
                                            data.language[5].complianceFormType6.verifyBy[2].DateTime,
                                            item.date1
                                        ]
                                    },
                                ],
                                images: {
                                    sign1: item.ta4signstaff,
                                    sign2: item.ta4signwitness
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
                            }; // End Notice Cessation Temporary
                            break;
                        case "formB":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [100, 0, 0, 0],
                                        alignment: 'center',
                                        text: [
                                            "PERATURAN-PERATURAN BEKALAN PEMEGANG LESEN\n\n",
                                            "Borang B\n\n",
                                            "subperaturan 6A(2)\n\n",
                                            "MALAYSIA\n\n",
                                            "STATE OF ",
                                            item.ta4statename,
                                            "\n",
                                            "AKTA BEKALAN ELEKTRIK 1990"
                                        ]
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: ["Kepada: ", item.ta4custname, '\n',
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 1,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    '\n\n',
                                    {
                                        text: ["Tuan/Puan/Cik/Tetuan,"]
                                    },
                                    {
                                        bold: true,
                                        // margin: [50, 10, 20, 0],
                                        margin: [30, 10, 20, 0],
                                        text: [data.language[5].complianceFormType6.title],
                                    },
                                    {
                                        margin: [30, 10, 20, 0],
                                        lineHeight: 1,
                                        text: [
                                            data.language[5].complianceFormType6.paragraph1,
                                            item.ta4custaddress,
                                            ' akan diberhentikan/diganggu sementara pada ',
                                            item.ta4datetime,
                                            ' dari ',
                                            item.ta4starttime,
                                            ' hingga ',
                                            item.ta4endtime,
                                            ' bagi tujuaan ',
                                            item.ta4purpose
                                        ]
                                    },
                                    {
                                        margin: [30, 10, 20, 0],
                                        text: ['\nName Pemegang Lesen : TNB\n\n',
                                            'Alamat: ',
                                            item.ta4officeaddress,
                                            '\n\n',
                                            'Nomber telefon: ',
                                            item.ta4officephone,
                                            '\n\n',
                                            'Tarikh: ',
                                            item.ta4indatetime
                                        ]
                                    },
                                ],
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            }; // End for Form B 
                            break;
                        //Case for prejudice
                        case "prejudice":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        columns: [
                                            {
                                                text: ['Kepada: ', item.ta4custname]
                                            },
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 0,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: 'Pelanggan TNB Yang Dihormati\n'
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[6].complianceFormType7.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[6].complianceFormType7.paragraph1,
                                            '\n\n',
                                            data.language[6].complianceFormType7.paragraph2,
                                            '\n\n',
                                            data.language[6].complianceFormType7.paragraph3,
                                            item.ta4officeaddress,
                                            data.language[6].complianceFormType7.paragraph4
                                        ]
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            data.language[6].complianceFormType7.closure,
                                            item.ta4officephone
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: data.language[6].complianceFormType7.closure2
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice2
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice3
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice4
                                    },
                                    '\n\n',
                                    {
                                        margin: [100, 0, 0, 0],
                                        italics: true,
                                        fontSize: 10,
                                        decoration: 'underline',
                                        text: data.language[6].complianceFormType7.noticeReminder
                                    },
                                ],
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
                            break;
                    } // End swtich case
                    resolve(dd);
                    reject('Unable to create PDF');
                });
            });
        });
    };
    ComplainceFormPdfBhs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ComplainceFormPdfBhs);
    return ComplainceFormPdfBhs;
}());

//# sourceMappingURL=complaince-form-pdf-bhs.js.map

/***/ })

});
//# sourceMappingURL=15.js.map