webpackJsonp([1],{

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealServiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_UserStatus__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pojo_WorkOrder__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pojo_ReleatedRecord__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__info_modal_info_modal__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser_ngx__ = __webpack_require__(181);
/*
 * Modification History :
 * Date         version     Modified By   Method                Description
 * 2021-03-12   006         Andy Chang    validationUserStatus  MDPA not appliable for ZISO with voltage 01 , 02 and 03
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














// import { ComplainceFormPdfBhs } from "../../../providers/pdfForms/complaince-form-bahasa-pdf/complaince-form-pdf-bhs";
// import { ComplaintFormPdfProvider } from '../../../providers/pdfForms/complaint-form-pdf/complaint-form-pdf';
// import { GeneratePdfFormProvider } from './../../../providers/pdfForms/generate-pdf-form/generate-pdf-form';




__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the SealServiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealServiceDetailsPage = /** @class */ (function () {
    function SealServiceDetailsPage(navCtrl, platform, renderer, appCtrl, params, network, toastCtrl, globel, dataService, jsonStoreCrud, geolocation, alertCtrl, popoverCtrl, gv, gf, loadingCtrl, modalCtrl, iab, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.appCtrl = appCtrl;
        this.params = params;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.globel = globel;
        this.dataService = dataService;
        this.jsonStoreCrud = jsonStoreCrud;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.gv = gv;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.iab = iab;
        this.actionSheetCtrl = actionSheetCtrl;
        this.soTypes = __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.items = "";
        this.popType = null;
        this.searchOpen = false;
        this.showServiceCover = false;
        this.showServiceExecution = false;
        this.showButtonImage = false;
        this.woStatus = null;
        this.voltageDdl = null;
        this.isReadonly = true;
        this.downPdf = true;
        this.worktype = null; //SO Type
        this.checkFlag = true;
        this.checkObject = true;
        this.buttonForServiceExecution = false;
        this.enableServiceTypeAndServiceStatus = false;
        this.editableElementNFeeder = false;
        this.enablePoleNo = false;
        this.editField = false;
        this.disableButtonSelection = true;
        this.havingParent = false;
        // Start editable fields Setting readonly = false/true
        //GPS,Installed Service Type, Service Is Ready
        this.showGIS = false;
        this.membersIndicator = true;
        //CustomerType,AnomalyMain,AnomalyCategory,CorrectiveAction,Initiative/preventive,sourceofinspection
        this.showCaacis = true;
        //No of Feeder, No of Element
        this.showFeederElement = true;
        this.showUserStatus2 = false;
        this.showUserStatus3 = false;
        this.showUserStatus4 = false;
        this.validateUserSts1 = false;
        this.validatePhoto = false;
        this.validateGPS = false;
        this.validateMembers = false;
        this.amscheckcond = false;
        this.userStatus = [];
        this.childWorkOrder = [];
        this.pdfObj = null;
        this.currentDate = new Date();
        this.minDate = new Date(2105, 6, 1);
        this.maxDate = new Date(2015, 6, 31);
        this.datetimeValue = new Date();
        this.validateTeco = false;
        // Save Status
        this.loc_saveStatus = true;
        // Variables for AMS and AMSCG Select Box
        this.amscgstolevalue = [];
        this.showAdHoc = false;
        this.showAdHocError = false;
        this.ptitems = [];
        this.passingCheck = false;
        this.adhocValid = true;
        this.alncorrectivecode = [];
        this.compArr = [];
        this.titleArr = [];
        this.compliance_label = false;
        this.hide_buttonCompliance = false;
        this.hide_buttonInspectionSummary = false;
        this.hide_buttonTechnicalReview = false;
        this.req_inspection = false;
        this.snCodeCheck = false;
        this.initPrevs = [];
        this.sourceCodes = [];
        this.customerDetails = [];
        this.anamolyCategoryCheck = true;
        this.anamolyMainCheck = true;
        this.anamolyTypeCheck = true;
        this.alnAnomalyType = [];
        this.alnAnomalyMain = [];
        this.alnAnomalyCategory = [];
        this.anamolyCategorys = [];
        this.anamolyTypes = [];
        this.anamolyMains = [];
        this.resultAnamolyTypes = [];
        this.resultAnamolyCategory = [];
        this.resultAnamolyMain = [];
        this.ta0testinitprev = [];
        this.finishDateTimeIndicator = false;
        // Team Members Variables
        this.listOfMembers = [];
        this.ta4members = [];
        this.category = 'key';
        this.previewBtn = false;
        this.main_meter_check = [];
        this.checkDisconnectDate = false;
        this.checkImageTemplate = false;
        this.checkBpmForm = false;
        this.loc_ta0initprev = [];
        this.loading = null;
        // InAppBrowser options..
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.datePickerCallback = function (val) {
            if (!val) {
                // console.log('Date not selected');
            }
            else {
                // console.log('Selected date is : ', val);
            }
        };
        this.getCurrentDate();
        var paramObject = this.params.data;
        console.log('paramObject==>', paramObject.attr);
        this.items = paramObject.attr;
        this.feederDetails = paramObject.details;
        // Adjustment list of team members
        // Created : Ameer (01.08.2019)
        this.duplicateLabour();
        this.checkingInitPrev();
        // this.checkingLabTrans();
        if (typeof this.items.json.ta0plandiscondate !== 'undefined' && this.items.json.ta0plandiscondate !== null && this.items.json.ta0plandiscondate !== '') {
            var resultdate = new Date(this.items.json.ta0plandiscondate);
            this.tempDisDate = resultdate.getDate() + '/' + (resultdate.getMonth() + 1) + "/" + resultdate.getFullYear();
        }
        else {
            this.items.json.ta0plandiscondate = '';
        }
        /**
         * Reason   : Method to populate value from data inspection
         * Created  : Alif (12/04/2019)
         */
        if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
            this.getValueFromInspectionForm();
        }
        // Checking for Adhoc or normal workorder...
        this.snCodeCheckForAdhoc();
        // Check for Compliance form 
        this.complianceForms = this.items.json.complaince;
        if (this.items.json.hasOwnProperty('complaince')) {
            if (typeof (this.items.json.compliance_list) !== 'undefined') {
                var inspection_test = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Inspection and Testing";
                });
                if (typeof (inspection_test) !== 'undefined') {
                    if (inspection_test.length > 1) {
                        for (var a = 0; a < inspection_test.length; a++) {
                            inspection_test.splice(0, a + 1);
                            break;
                        }
                    }
                }
                var inspection = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Installation Inspection";
                });
                if (typeof (inspection) !== 'undefined') {
                    if (inspection.length > 1) {
                        for (var a = 0; a < inspection.length; a++) {
                            inspection.splice(0, a + 1);
                            break;
                        }
                    }
                }
                var evidence = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Evidence collection";
                });
                if (typeof (evidence) !== 'undefined') {
                    if (evidence.length > 1) {
                        for (var a = 0; a < evidence.length; a++) {
                            evidence.splice(0, a + 1);
                            break;
                        }
                    }
                }
                var cessation = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Supply Cessation";
                });
                if (typeof (cessation) !== 'undefined') {
                    if (cessation.length > 1) {
                        for (var a = 0; a < cessation.length; a++) {
                            cessation.splice(0, a + 1);
                            break;
                        }
                    }
                }
                var formA = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Form A Staff";
                });
                if (typeof (formA) !== 'undefined') {
                    if (formA.length > 1) {
                        for (var a = 0; a < formA.length; a++) {
                            formA.splice(0, a + 1);
                            break;
                        }
                    }
                }
                var formACust = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Form A Customer";
                });
                if (typeof (formACust) !== 'undefined') {
                    if (formACust.length > 1) {
                        for (var a = 0; a < formACust.length; a++) {
                            formACust.splice(0, a + 1);
                            break;
                        }
                    }
                }
                var pred = this.items.json.compliance_list.filter(function (item) {
                    return item.name === "Prejudice";
                });
                if (typeof (pred) !== 'undefined') {
                    if (pred.length > 1) {
                        for (var a = 0; a < pred.length; a++) {
                            pred.splice(0, a + 1);
                            break;
                        }
                    }
                }
                if (this.complianceForms.schCust === true || this.complianceForms.schStff === true || this.complianceForms.electCess === true || this.complianceForms.instInspec === true || this.complianceForms.instInspecNTest === true || this.complianceForms.eviCllct === true || this.complianceForms.evelectricPrejudiciCllct === true) {
                    this.compliance_label = true;
                    var arr = Object.keys(this.complianceForms).map(function (key) { return [key, _this.complianceForms[key]]; });
                    if (this.complianceForms.evelectricPrejudiciCllct === true) {
                        var prejudice = 'NOTICE PREJUDICE';
                        this.titleArr.push(prejudice);
                    }
                    if (this.complianceForms.electCess === true) {
                        var cessation_1 = 'NOTICE OF CESSATION, TEMPORARY INTERRUPTION';
                        this.titleArr.push(cessation_1);
                    }
                    if (this.complianceForms.schStff === true) {
                        var staff = 'NOTICE SCHEDULE FORM A (STAFF COPY)';
                        this.titleArr.push(staff);
                    }
                    if (this.complianceForms.schCust === true) {
                        var customer = 'NOTICE SCHEDULE FORM A(CUSTOMER COPY)';
                        this.titleArr.push(customer);
                    }
                    if (this.complianceForms.instInspec === true) {
                        var inspection_1 = 'NOTICE METER INSTALLATION INSPECTION';
                        this.titleArr.push(inspection_1);
                    }
                    if (this.complianceForms.instInspecNTest === true) {
                        var inspectionNTesting = 'NOTICE METER INSTALLATION INSPECTION AND TESTING';
                        this.titleArr.push(inspectionNTesting);
                    }
                    if (this.complianceForms.eviCllct === true) {
                        var evidence_1 = 'NOTICE EVIDENCE COLLECTION';
                        this.titleArr.push(evidence_1);
                    }
                    for (var j = 0; j < this.titleArr.length; j++) {
                        this.compArr.push({ no: j + 1, title: this.titleArr[j] });
                    }
                }
                else {
                    this.compliance_label = false;
                }
            }
        }
        this.worktype = this.items.json.worktype;
        /**
         * Reason   : Checking for MVHV Inspection Summary Button
         * Created  : Alif (05-03-2019)
         * (this.items.json.hasOwnProperty("ta0feeder"))
         */
        // Checking if data available or not
        if (typeof this.items.json.ta0feeder !== 'undefined' && this.items.json.ta0feeder !== '' && this.items.json.ta0feeder !== null) {
            if (typeof (this.items.json.ta0feeder.length) !== "undefined") {
                // Variables
                var fLength = this.items.json.ta0feeder.length;
                var ta4testdata_temp = [];
                var loc_ta4testdata = [];
                for (var i = 0; i < fLength; i++) {
                    if (this.items.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                        var mLength = this.items.json.ta0feeder[i].multiassetlocci.length;
                        for (var m = 0; m < mLength; m++) {
                            // Checking SO/SN/Main Meter/AllocationType
                            // Edited : Alif (29.01.2020)
                            if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && this.items.json.ta0sncode === "S202") {
                                // Checking Main Meter & AllocationType
                                if (this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta0bcrmuploadindicator") &&
                                    this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta0allocationtype")) {
                                    if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN &&
                                        this.items.json.ta0feeder[i].multiassetlocci[m].ta0allocationtype === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER) {
                                        // take only meter at first feeder
                                        if (i === 0) {
                                            this.main_meter_check.push(this.items.json.ta0feeder[i].multiassetlocci[m]);
                                        }
                                    }
                                }
                            }
                            // Checking ta4testdata
                            if (this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta4testdata")) {
                                // Filter only mvhv device
                                if (this.items.json.ta0feeder[i].multiassetlocci[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                    // Checking whether is string or array
                                    if (Array.isArray((this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata))) {
                                        ta4testdata_temp = this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata;
                                    }
                                    else {
                                        ta4testdata_temp = JSON.parse(this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata);
                                    }
                                    while (!Array.isArray(ta4testdata_temp)) {
                                        ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                    }
                                    if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                                        if (ta4testdata_temp.length > 1) {
                                            loc_ta4testdata.push(ta4testdata_temp);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Checking Inspection Data
                // Remove Inspection Summary from ZIST.
                // Edited : Alif (20.01.2020)
                //  || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)
                if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                    if (loc_ta4testdata.length > 0) {
                        /**
                         * Description: Checking data inspection is available or not.
                         * Edited: alif (24.09.2019)
                         */
                        var data = [];
                        for (var m = 0; m < loc_ta4testdata.length; m++) {
                            // Checking only 
                            var temp = [];
                            temp = loc_ta4testdata[m].filter(function (item) {
                                return item.type === "inspection";
                            });
                            // if data "inspection" is exist.
                            if (temp.length > 0) {
                                data.push(temp);
                            }
                        }
                        // if data "inspection" is exist, display message reminder.
                        if (data.length > 0) {
                            // do nothing..
                        }
                        else {
                            this.msgInspectionSummary = "Inspection Summary is empty, please insert information inspection summary!";
                        }
                        // Open inspection summary button.
                        this.hide_buttonInspectionSummary = true;
                    }
                    else {
                        this.hide_buttonInspectionSummary = false;
                    }
                }
                // if user status empty display
                //console.log("ta0wouserstatus : "+JSON.stringify(this.items.json.ta0wouserstatus));
                if (typeof (this.items.json.ta0wouserstatus) !== "undefined" && this.items.json.ta0wouserstatus !== null) {
                    // do noothing.
                }
                else {
                    // Remove Inspection Summary from ZIST.
                    // Edited : Alif (20.01.2020)
                    //  || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)
                    // No MITC status but message inspection summary still available.
                    // Checking SO Type
                    if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                        // Checking if message inspection summary is available or not.
                        if (typeof (this.msgInspectionSummary) !== "undefined") {
                            this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                        }
                    }
                }
                // Checking for Technical Review
                // Only for Work Order = COMP
                if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && this.gv.employeetype === 'EXECUTIVE') {
                    this.hide_buttonTechnicalReview = true;
                }
            }
        }
        // Populate Data Register '01' at ServiceDetailsPage.
        if (this.main_meter_check.length > 0) {
            // Checking register.
            if (this.main_meter_check[0].hasOwnProperty("ta0registers")) {
                // Checking meter register.
                for (var i_1 = 0; i_1 < this.main_meter_check[0].ta0registers.length; i_1++) {
                    if (this.main_meter_check[0].ta0registers[i_1].ta0registertype === "01") {
                        // Checking meter reading
                        if (this.main_meter_check[0].ta0registers[i_1].hasOwnProperty("ta0meterreading")) {
                            for (var k = 0; k < this.main_meter_check[0].ta0registers[i_1].ta0meterreading.length; k++) {
                                if (this.main_meter_check[0].ta0registers[i_1].ta0meterreading[k].ta0readingtype === "PMR") {
                                    this.main_meter_reg_reading = this.main_meter_check[0].ta0registers[i_1].ta0meterreading[k].ta0reading;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
        /** Copy Clone into Original */
        this.itemsOri = JSON.parse(JSON.stringify(this.items));
        this.pdfLanguage = null;
        this.docSlct = null;
        this.docSlct = [
            {
                lblName: "Installation Inspection and Testing"
            },
            {
                lblName: "Evidence Collection"
            },
            {
                lblName: "Installing Inspection"
            },
            {
                lblName: "Electric Disconnection"
            },
            {
                lblName: "Temporary Interuption"
            },
            {
                lblName: "Installing Inspection and Testing Result"
            }
        ];
        this.adhocValidationCheck();
        if (typeof (this.items.json.origrecordid) !== 'undefined') {
            if (this.items.json.origrecordid !== null || this.items.json.origrecordid !== '') {
                this.getParentRecord();
            }
        }
        // Reset to default empty
        this.ta0wouserstatus = [];
        // Reading User Status
        if (typeof (this.items.json.ta0wouserstatus) !== 'undefined' && this.items.json.ta0wouserstatus !== null) {
            for (var i = 0; i < this.items.json.ta0wouserstatus.length; i++) {
                this.ta0wouserstatus.push(this.items.json.ta0wouserstatus[i].ta0status);
            }
            console.log("this.ta0wouserstatus : " + JSON.stringify(this.ta0wouserstatus));
        }
        /**
         * AMS and AMCG Validation to check Modem and SimCard is change or not...
         */
        // if (typeof (this.items.json.ta0feeder) !== 'undefined' && this.items.json.ta0feeder !== null) {
        //   // Because after delete feedeer length is 0.
        //   if (this.items.json.ta0feeder.length > 0) {
        //     /** Checking for MRPM and WMAT (User Status) */
        //     if (this.worktype === SoTypes.ZISP || this.worktype === SoTypes.ZISO || this.worktype === SoTypes.ZINR) {
        //       // Collection devices.
        //       var devices = [];
        //       var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        //       if (typeof (feeder) !== "undefined") {
        //         for (var i = 0; i < feeder.length; i++) {
        //           if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
        //             var multiassetlocci = feeder[i].multiassetlocci;
        //             for (var m = 0; m < multiassetlocci.length; m++) {
        //               devices.push(multiassetlocci[m]);
        //             }
        //           }
        //         }
        //       }
        //       // Checking WMAT Indicator.
        //       var wmat = devices.filter(item => {
        //         return (item.ta0wrgmtrind === "true" || item.ta0wrgmtrind === true);
        //       });
        //       if (wmat.length > 0) {
        //         if (!this.ta0wouserstatus.includes("WMAT")) {
        //           this.ta0wouserstatus.push("WMAT");
        //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //         }
        //       } else {
        //         var index = this.ta0wouserstatus.findIndex((item) => {
        //           return item === "WMAT";
        //         });
        //         if (index !== -1) {
        //           this.ta0wouserstatus.splice(index, 1);
        //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //         }
        //       }
        //       // Checking MRPM Indicator.
        //       var mrpm = devices.filter((item) => {
        //         return item.ta0replaceind === true;
        //       });
        //       /**
        //        * Edited: Ameer (12/9/2019)
        //        * Check each status seperately MRPM and MDPA status and push to user status 
        //        * and check if there is not replacement will remove the MRPM and MDPA user status
        //        */
        //       if (mrpm.length > 0) {
        //         // Check is MRPM available or not. Push when no MRPM status
        //         if (!this.ta0wouserstatus.includes("MRPM")) {
        //           this.ta0wouserstatus.push("MRPM");
        //         }
        //         // MDPA is only beside for OPC
        //         if (!this.ta0wouserstatus.includes("MDPA")) {
        //           if (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01') {
        //             this.ta0wouserstatus.push("MDPA");
        //           }
        //         }
        //         this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //         this.items.json.ta0subsoindicator = true;
        //       } else {
        //         var index = this.ta0wouserstatus.findIndex((item) => {
        //           if (item === "MRPM") {
        //             return item;
        //           }
        //         });
        //         var MDPAIndex = this.ta0wouserstatus.findIndex((item) => {
        //           if (item === "MDPA") {
        //             return item;
        //           }
        //         });
        //         if (index !== -1) {
        //           this.ta0wouserstatus.splice(index, 1);
        //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //         }
        //         if (MDPAIndex !== -1) {
        //           this.ta0wouserstatus.splice(MDPAIndex, 1);
        //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //         }
        //         this.items.json.ta0subsoindicator = false;
        //       }
        //       if (this.items.json.worktype === SoTypes.ZIST && (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01')) {
        //         // Checking MDPA Indicator.
        //         var mdpa = devices.filter((item) => {
        //           return item.ta0installind === true;
        //         });
        //         if (mdpa.length > 0) {
        //           // MDPA is for other OPC
        //           if (!this.ta0wouserstatus.includes("MDPA")) {
        //             this.ta0wouserstatus.push("MDPA");
        //           }
        //           this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //         } else {
        //           var MDPAIndex = this.ta0wouserstatus.findIndex((item) => {
        //             if (item === "MDPA") {
        //               return item;
        //             }
        //           });
        //           if (MDPAIndex !== -1) {
        //             this.ta0wouserstatus.splice(MDPAIndex, 1);
        //             this.userStatusDefaultChange(this.ta0wouserstatus, '');
        //           }
        //         }
        //       }
        //     } else {
        //       if (this.ta0wouserstatus.length > 0) {
        //         // for zist-mvhv checking inspection summary
        //         if (this.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V) {
        //           // Checking if message inspection summary is available or not.
        //           if (typeof (this.msgInspectionSummary) !== "undefined") {
        //             this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
        /**
         * Reason   : Checking User Status MITC to change the indicator
         * Created  : Alif (01.07.2019)
         */
        if (typeof (this.ta0wouserstatus) !== "undefined" && this.ta0wouserstatus !== "" && this.ta0wouserstatus !== null) {
            // Filtering User Status 'MITC'
            var mitc = this.ta0wouserstatus.filter(function (item) {
                return item === "MITC";
            });
            // If user status 'MITC' available
            if (mitc.length > 0 && this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                this.items.json.ta4reviewrequired = true;
            }
            else {
                this.items.json.ta4reviewrequired = false;
            }
        }
        this.amscheckcond = true;
        // console.log('Date for Items ', JSON.stringify(this.items));
        if (this.items.json.worktype === 'ZISP' || this.items.json.worktype === 'ZISO') {
            this.loadAdhocCheck();
        }
        // Checking Save Status
        if (this.items.json.hasOwnProperty('loc_saveStatus')) {
            this.loc_saveStatus = this.items.json.loc_saveStatus;
        }
        else {
            this.loc_saveStatus = true;
            this.items.json.loc_saveStatus = this.loc_saveStatus;
        }
        if (this.items.json != null) {
            this.woStatusOri = this.items.json.status;
            this.woStatus = JSON.parse(JSON.stringify(this.items.json.status));
            this.voltageDdl = this.items.json.ta0installationvoltage;
            this.worktype = this.items.json.worktype;
            if (typeof (this.items.json.woserviceaddress) != 'undefined') {
                this.woserviceaddress = this.items.json.woserviceaddress[0];
            }
            if (typeof (this.items.json.assignment) != 'undefined' && this.items.json.assignment !== null && this.items.json.assignment !== "") {
                this.assignment = this.items.json.assignment[0];
            }
            this.ta0ptlocation = this.items.json.ta0ptlocation;
            this.ta0ctlocation = this.items.json.ta0ctlocation;
            // console.log("Data Existing: " + JSON.stringify(this.items));
        }
        // Change if status is KIV
        if (this.woStatus === "KIV") {
            this.woStatus = "PENDKIV";
        }
        // Checking existing status
        if (this.woStatus === "PENDTECO" || this.woStatus === "PENDKIV" || this.woStatus === "PENDCLSD" || this.woStatus === "APPR" || this.woStatus === "PCBNT") {
            this.showServiceExecution = false;
            this.showButtonImage = false;
            this.editField = true;
        }
        else {
            this.showServiceExecution = true;
            this.showButtonImage = true;
        }
        //Check if status Appr disable the button (Ameer 3/10/2018)
        //Edited By Ameer (12/10/2018)
        if (this.woStatus === 'APPR') {
            this.disableButtonSelection = false;
        }
        else {
            this.disableButtonSelection = true;
        }
        // if (this.woStatus != "APPR") {
        //   this.showButtonImage = true;
        // }
        platform.ready().then(function () {
            // console.log("platform ready. ");
        });
        // console.log(' doclinks  : ' + this.items.json.docLinksL);
        if (typeof (this.items.json.docLinksL) !== 'undefined' && this.items.json.docLinksL !== null && this.items.json.docLinksL !== "") {
            this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(this.items.json.docLinksL));
            this.items.json.loc_attachmentCount = this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));
            // changing indicator attachment/doclinksL
            for (var m = 0; m < this.itemsOri.json.docLinksL.length; m++) {
                if (typeof (this.itemsOri.json.docLinksL[m].describedBy.loc_show) === 'undefined' || this.itemsOri.json.docLinksL[m].describedBy.loc_photoVersion === "old") {
                    this.itemsOri.json.docLinksL[m].describedBy.loc_show = true;
                }
            }
        }
        if (typeof (this.items.json.pdfTtl) !== 'undefined' && this.items.json.pdfTtl !== null) {
            if (typeof (this.items.json.loc_attachmentCount) === 'undefined') {
                this.items.json.loc_attachmentCount = 0;
                this.items.json.loc_attachmentCount += this.items.json.pdfTtl;
            }
            else {
                this.items.json.loc_attachmentCount += this.items.json.pdfTtl;
            }
        }
        // Section for ZISP & ZINR & ZISO
        this.woDetails = new __WEBPACK_IMPORTED_MODULE_14__pojo_WorkOrder__["a" /* WorkorderPojo */]();
        // Reset all the default or empty the value
        this.woDetails = {};
        if (this.items.json.loc_adhocReplacement != null) {
            this.ta0subordercreationflag = this.items.json.ta0subordercreationflag;
            this.woDetails.ta0subordercreationflag_desc = this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
        }
        /**
          * Hide and shows for AMS and AMCG based on SO type
          * --> this.items.json.worktype == SoTypes.ZRMV
          * --> this.items.json.worktype == SoTypes.ZMMR
          */
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN) {
            if (this.items.json.ta0ams !== '' && this.items.json.ta0ams !== "undefined") {
                this.showAms = false;
                this.showAmscg = true;
                this.getAMSData(this.items.json.ta0ams);
            }
            else {
                this.showAms = false;
                this.showAmscg = true;
            }
        }
        else {
            this.showAms = true;
            this.showAmscg = true;
        }
        /**
         * Create by Ameer 12/11/2018
         * Enable and disable for Pole number input
         */
        // this.gf.loadOfflineDataFromJsonStore();
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
            this.enablePoleNo = false;
            // this.editField = false;
        }
        else {
            this.enablePoleNo = true;
            // this.editField = true;
        }
        /**
         * Create by Ameer 14/11/2018
         * editable field for Service Type and Service Status
         */
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
            this.enableServiceTypeAndServiceStatus = true;
        }
        else {
            this.enableServiceTypeAndServiceStatus = false;
        }
        /**
         * Create by Ameer 14/11/2018
         *  editable field for Number of Element and Number of Feeder
         */
        /*     if (this.items.json.worktype == SoTypes.ZIST ||
              this.items.json.worktype == SoTypes.ZISR ||
              this.items.json.worktype == SoTypes.ZUDN ||
              this.items.json.worktype == SoTypes.ZRPC) {
              this.editableElementNFeeder = false;
            } else {
              this.editableElementNFeeder = true;
            } */
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
            this.editableElementNFeeder = false;
        }
        else {
            this.editableElementNFeeder = true;
        }
        /**
         * Getting Current Ratio from Meter Info to display at Header Details.
         * Edited : Alif
         * Date   : 14/12/2018, 15-01-2019
         */
        // Reset Current ratio value..
        this.currentRatio = "0/0";
        // Adjustment to display current ratio.. based on so type..
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN || this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
            // Collecting Current ratio from ta0newwindinggroup attribute
            if (typeof (this.items.json.ta0newwindinggroup) !== "undefined" && this.items.json.ta0newwindinggroup !== "" && this.items.json.ta0newwindinggroup !== null) {
                this.currentRatio = this.items.json.ta0newwindinggroup;
            }
        }
        else {
            if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== "undefined") {
                // Collection devices. (15-01-2019)
                var devices = [];
                var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                if (typeof (feeder) !== "undefined") {
                    for (var i = 0; i < feeder.length; i++) {
                        if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                            var multiassetlocci = feeder[i].multiassetlocci;
                            for (var m = 0; m < multiassetlocci.length; m++) {
                                devices.push(multiassetlocci[m]);
                            }
                        }
                    }
                }
                var device = devices.filter(function (item) {
                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT);
                });
                var first = 0, second = 0;
                if (device.length > 0) {
                    // Finding ta0registers
                    for (var i = 0; i < device.length; i++) {
                        // Checking attribute ta0registers
                        if (device[i].hasOwnProperty("ta0registers")) {
                            if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
                                // Getting value from ta0registers
                                for (var m = 0; m < device[i].ta0registers.length; m++) {
                                    if (device[i].ta0registers[m].ta0windingcategory === "1") {
                                        first = device[i].ta0registers[m].ta0transformercurrent;
                                    }
                                    if (device[i].ta0registers[m].ta0windingcategory === "2") {
                                        second = device[i].ta0registers[m].ta0transformercurrent;
                                    }
                                }
                                if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                                    this.currentRatio = first + "/" + second;
                                    this.items.json.currentRatio = this.currentRatio;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        this.currentRatio += " A";
        console.log("STATUS : " + JSON.stringify(this.ta0wouserstatus));
        /**
         * Add:Ameer (23/4/2019)
         * Checking for user status for compliance
         */
        this.checkUserStatus();
        // Getting for List of Members
        this.getLabourDetails();
    }
    SealServiceDetailsPage.prototype.ngOnInit = function () {
        var paramObject = this.params.data;
        console.log('paramObject==>', paramObject.attr);
        this.items = paramObject.attr;
        this.feederDetails = paramObject.details;
    };
    /**
     * Description  : Method to auto populate local data.
     * Created      : Alif (31.12.2019)
     */
    SealServiceDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter SealServiceDetailsPage');
        this.getCurrentDate();
        // this.items = this.params.data;
        var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
        this.jsonStoreCrud.getSearchRecord(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0).then(function (result) {
            _this.items = JSON.parse(JSON.stringify(result[0]));
            // Getting for List of Members
            //this.getLabourDetails();
            // Adjustment list of team members
            // Created : Ameer (01.08.2019)
            _this.duplicateLabour();
            _this.checkingInitPrev();
            // this.checkingLabTrans();
            // Checking Image Template & BPM
            _this.gf.stopLoading();
            _this.checkingValidateForm();
            // this.gf.startLoading();
            if (typeof _this.items.json.ta0plandiscondate !== 'undefined' && _this.items.json.ta0plandiscondate !== null && _this.items.json.ta0plandiscondate !== '') {
                var resultdate = new Date(_this.items.json.ta0plandiscondate);
                _this.tempDisDate = resultdate.getDate() + '/' + (resultdate.getMonth() + 1) + "/" + resultdate.getFullYear();
            }
            else {
                _this.items.json.ta0plandiscondate = '';
            }
            /**
             * Reason   : Method to populate value from data inspection
             * Created  : Alif (12/04/2019)
             */
            if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                _this.getValueFromInspectionForm();
            }
            // Checking for Adhoc or normal workorder...
            _this.snCodeCheckForAdhoc();
            // Check for Compliance form 
            _this.complianceForms = _this.items.json.complaince;
            if (_this.items.json.hasOwnProperty('complaince')) {
                if (typeof (_this.items.json.compliance_list) !== 'undefined') {
                    var inspection_test = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Inspection and Testing";
                    });
                    if (typeof (inspection_test) !== 'undefined') {
                        if (inspection_test.length > 1) {
                            for (var a = 0; a < inspection_test.length; a++) {
                                inspection_test.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var inspection = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Installation Inspection";
                    });
                    if (typeof (inspection) !== 'undefined') {
                        if (inspection.length > 1) {
                            for (var a = 0; a < inspection.length; a++) {
                                inspection.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var evidence = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Evidence collection";
                    });
                    if (typeof (evidence) !== 'undefined') {
                        if (evidence.length > 1) {
                            for (var a = 0; a < evidence.length; a++) {
                                evidence.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var cessation = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Supply Cessation";
                    });
                    if (typeof (cessation) !== 'undefined') {
                        if (cessation.length > 1) {
                            for (var a = 0; a < cessation.length; a++) {
                                cessation.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var formA = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Form A Staff";
                    });
                    if (typeof (formA) !== 'undefined') {
                        if (formA.length > 1) {
                            for (var a = 0; a < formA.length; a++) {
                                formA.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var formACust = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Form A Customer";
                    });
                    if (typeof (formACust) !== 'undefined') {
                        if (formACust.length > 1) {
                            for (var a = 0; a < formACust.length; a++) {
                                formACust.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var pred = _this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Prejudice";
                    });
                    if (typeof (pred) !== 'undefined') {
                        if (pred.length > 1) {
                            for (var a = 0; a < pred.length; a++) {
                                pred.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    if (_this.complianceForms.schCust === true || _this.complianceForms.schStff === true || _this.complianceForms.electCess === true || _this.complianceForms.instInspec === true || _this.complianceForms.instInspecNTest === true || _this.complianceForms.eviCllct === true || _this.complianceForms.evelectricPrejudiciCllct === true) {
                        _this.compliance_label = true;
                        var arr = Object.keys(_this.complianceForms).map(function (key) { return [key, _this.complianceForms[key]]; });
                        if (_this.complianceForms.evelectricPrejudiciCllct === true) {
                            var prejudice = 'NOTICE PREJUDICE';
                            _this.titleArr.push(prejudice);
                        }
                        if (_this.complianceForms.electCess === true) {
                            var cessation_2 = 'NOTICE OF CESSATION, TEMPORARY INTERRUPTION';
                            _this.titleArr.push(cessation_2);
                        }
                        if (_this.complianceForms.schStff === true) {
                            var staff = 'NOTICE SCHEDULE FORM A (STAFF COPY)';
                            _this.titleArr.push(staff);
                        }
                        if (_this.complianceForms.schCust === true) {
                            var customer = 'NOTICE SCHEDULE FORM A(CUSTOMER COPY)';
                            _this.titleArr.push(customer);
                        }
                        if (_this.complianceForms.instInspec === true) {
                            var inspection_2 = 'NOTICE METER INSTALLATION INSPECTION';
                            _this.titleArr.push(inspection_2);
                        }
                        if (_this.complianceForms.instInspecNTest === true) {
                            var inspectionNTesting = 'NOTICE METER INSTALLATION INSPECTION AND TESTING';
                            _this.titleArr.push(inspectionNTesting);
                        }
                        if (_this.complianceForms.eviCllct === true) {
                            var evidence_2 = 'NOTICE EVIDENCE COLLECTION';
                            _this.titleArr.push(evidence_2);
                        }
                        for (var j = 0; j < _this.titleArr.length; j++) {
                            _this.compArr.push({ no: j + 1, title: _this.titleArr[j] });
                        }
                    }
                    else {
                        _this.compliance_label = false;
                    }
                }
            }
            _this.worktype = _this.items.json.worktype;
            /**
             * Reason   : Checking for MVHV Inspection Summary Button
             * Created  : Alif (05-03-2019)
             * (this.items.json.hasOwnProperty("ta0feeder"))
             */
            // Checking if data available or not
            if (typeof _this.items.json.ta0feeder !== 'undefined' && _this.items.json.ta0feeder !== '' && _this.items.json.ta0feeder !== null) {
                if (typeof (_this.items.json.ta0feeder.length) !== "undefined") {
                    // Variables
                    var fLength = _this.items.json.ta0feeder.length;
                    var ta4testdata_temp = [];
                    var loc_ta4testdata = [];
                    for (var i = 0; i < fLength; i++) {
                        if (_this.items.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
                            var mLength = _this.items.json.ta0feeder[i].multiassetlocci.length;
                            for (var m = 0; m < mLength; m++) {
                                if (_this.items.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta4testdata")) {
                                    // Filter only mvhv device
                                    if (_this.items.json.ta0feeder[i].multiassetlocci[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                        // Checking whether is string or array
                                        if (Array.isArray((_this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata))) {
                                            ta4testdata_temp = _this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata;
                                        }
                                        else {
                                            ta4testdata_temp = JSON.parse(_this.items.json.ta0feeder[i].multiassetlocci[m].ta4testdata);
                                        }
                                        while (!Array.isArray(ta4testdata_temp)) {
                                            ta4testdata_temp = JSON.parse(ta4testdata_temp);
                                        }
                                        if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                                            if (ta4testdata_temp.length > 1) {
                                                loc_ta4testdata.push(ta4testdata_temp);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // Remove Inspection Summary from ZIST.
                    // Edited : Alif (20.01.2020)
                    // || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)
                    // Checking Inspection Data
                    if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                        if (loc_ta4testdata.length > 0) {
                            /**
                             * Description: Checking data inspection is available or not.
                             * Edited: alif (24.09.2019)
                             */
                            var data = [];
                            for (var m = 0; m < loc_ta4testdata.length; m++) {
                                // Checking only 
                                var temp = [];
                                temp = loc_ta4testdata[m].filter(function (item) {
                                    return item.type === "inspection";
                                });
                                // if data "inspection" is exist.
                                if (temp.length > 0) {
                                    data.push(temp);
                                }
                            }
                            // if data "inspection" is exist, display message reminder.
                            if (data.length > 0) {
                                // do nothing..
                            }
                            else {
                                _this.msgInspectionSummary = "Inspection Summary is empty, please insert information inspection summary!";
                            }
                            // Open inspection summary button.
                            _this.hide_buttonInspectionSummary = true;
                        }
                        else {
                            _this.hide_buttonInspectionSummary = false;
                        }
                    }
                    // if user status empty display
                    //console.log("ta0wouserstatus : >>> "+JSON.stringify(this.items.json.ta0wouserstatus));
                    if (typeof (_this.items.json.ta0wouserstatus) !== "undefined" && _this.items.json.ta0wouserstatus !== null) {
                        // do noothing.
                    }
                    else {
                        // Remove Inspection Summary from ZIST.
                        // Edited : Alif (20.01.2020)
                        // || (this.items.json.worktype === SoTypes.ZIST && this.items.json.ta0installationvoltage > DeviceConstants.VOL_LEVEL_LPC_LV_400V)
                        // No MITC status but message inspection summary still available.
                        // Checking SO Type
                        if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                            // Checking if message inspection summary is available or not.
                            if (typeof (_this.msgInspectionSummary) !== "undefined") {
                                _this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                            }
                        }
                    }
                    // Checking for Technical Review
                    // Only for Work Order = COMP
                    if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && _this.gv.employeetype === 'EXECUTIVE') {
                        _this.hide_buttonTechnicalReview = true;
                    }
                }
            }
            /**
             * End Checking Inspection Summary
             */
            /** Copy Clone into Original */
            _this.itemsOri = JSON.parse(JSON.stringify(_this.items));
            _this.pdfLanguage = null;
            _this.docSlct = null;
            _this.docSlct = [
                {
                    lblName: "Installation Inspection and Testing"
                },
                {
                    lblName: "Evidence Collection"
                },
                {
                    lblName: "Installing Inspection"
                },
                {
                    lblName: "Electric Disconnection"
                },
                {
                    lblName: "Temporary Interuption"
                },
                {
                    lblName: "Installing Inspection and Testing Result"
                }
            ];
            _this.adhocValidationCheck();
            if (typeof (_this.items.json.origrecordid) !== 'undefined') {
                if (_this.items.json.origrecordid !== null || _this.items.json.origrecordid !== '') {
                    _this.getParentRecord();
                }
            }
            // Reset to default empty
            _this.ta0wouserstatus = [];
            // Reading User Status
            if (typeof (_this.items.json.ta0wouserstatus) !== 'undefined' && _this.items.json.ta0wouserstatus !== null) {
                for (var i = 0; i < _this.items.json.ta0wouserstatus.length; i++) {
                    _this.ta0wouserstatus.push(_this.items.json.ta0wouserstatus[i].ta0status);
                }
                console.log("this.ta0wouserstatus : >>> " + JSON.stringify(_this.ta0wouserstatus));
            }
            /**
             * AMS and AMCG Validation to check Modem and SimCard is change or not...
             */
            if (typeof (_this.items.json.ta0feeder) !== 'undefined' && _this.items.json.ta0feeder !== null) {
                // Because after delete feedeer length is 0.
                if (_this.items.json.ta0feeder.length > 0) {
                    /** Checking for MRPM and WMAT (User Status) */
                    if (_this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
                        // Collection devices.
                        var devices = [];
                        var feeder = JSON.parse(JSON.stringify(_this.items.json.ta0feeder));
                        if (typeof (feeder) !== "undefined") {
                            for (var i = 0; i < feeder.length; i++) {
                                if (typeof (_this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                                    var multiassetlocci = feeder[i].multiassetlocci;
                                    for (var m = 0; m < multiassetlocci.length; m++) {
                                        devices.push(multiassetlocci[m]);
                                    }
                                }
                            }
                        }
                        // Checking WMAT Indicator.
                        var wmat = devices.filter(function (item) {
                            return (item.ta0wrgmtrind === "true" || item.ta0wrgmtrind === true);
                        });
                        if (wmat.length > 0) {
                            if (!_this.ta0wouserstatus.includes("WMAT")) {
                                _this.ta0wouserstatus.push("WMAT");
                                _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            }
                        }
                        else {
                            var index = _this.ta0wouserstatus.findIndex(function (item) {
                                return item === "WMAT";
                            });
                            if (index !== -1) {
                                _this.ta0wouserstatus.splice(index, 1);
                                _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            }
                        }
                        // Checking MRPM Indicator.
                        var mrpm = devices.filter(function (item) {
                            return item.ta0replaceind === true;
                        });
                        /**
                         * Edited: Ameer (12/9/2019)
                         * Check each status seperately MRPM and MDPA status and push to user status
                         * and check if there is not replacement will remove the MRPM and MDPA user status
                         */
                        if (mrpm.length > 0) {
                            // Check is MRPM available or not. Push when no MRPM status
                            if (!_this.ta0wouserstatus.includes("MRPM")) {
                                _this.ta0wouserstatus.push("MRPM");
                            }
                            // MDPA is only beside for OPC
                            if (!_this.ta0wouserstatus.includes("MDPA")) {
                                if (_this.items.json.ta0installationvoltage !== '02' && _this.items.json.ta0installationvoltage !== '01') {
                                    _this.ta0wouserstatus.push("MDPA");
                                }
                            }
                            _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            _this.items.json.ta0subsoindicator = true;
                        }
                        else {
                            var index = _this.ta0wouserstatus.findIndex(function (item) {
                                if (item === "MRPM") {
                                    return item;
                                }
                            });
                            var MDPAIndex = _this.ta0wouserstatus.findIndex(function (item) {
                                if (item === "MDPA") {
                                    return item;
                                }
                            });
                            if (index !== -1) {
                                _this.ta0wouserstatus.splice(index, 1);
                                _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            }
                            if (MDPAIndex !== -1) {
                                _this.ta0wouserstatus.splice(MDPAIndex, 1);
                                _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            }
                            _this.items.json.ta0subsoindicator = false;
                        }
                        if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && (_this.items.json.ta0installationvoltage !== '02' && _this.items.json.ta0installationvoltage !== '01')) {
                            // Checking MDPA Indicator.
                            var mdpa = devices.filter(function (item) {
                                return item.ta0installind === true;
                            });
                            if (mdpa.length > 0) {
                                // MDPA is for other OPC
                                if (!_this.ta0wouserstatus.includes("MDPA")) {
                                    _this.ta0wouserstatus.push("MDPA");
                                }
                                _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            }
                            else {
                                var MDPAIndex = _this.ta0wouserstatus.findIndex(function (item) {
                                    if (item === "MDPA") {
                                        return item;
                                    }
                                });
                                if (MDPAIndex !== -1) {
                                    _this.ta0wouserstatus.splice(MDPAIndex, 1);
                                    _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                                }
                            }
                        }
                    }
                    else {
                        if (_this.ta0wouserstatus.length > 0) {
                            // for zist-mvhv checking inspection summary
                            if (_this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && _this.items.json.ta0installationvoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // Checking if message inspection summary is available or not.
                                if (typeof (_this.msgInspectionSummary) !== "undefined") {
                                    _this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                                }
                            }
                        }
                        else {
                            // do nothing..
                        }
                    }
                }
            }
            /**
             * Reason   : Checking User Status MITC to change the indicator
             * Created  : Alif (01.07.2019)
             */
            if (typeof (_this.ta0wouserstatus) !== "undefined" && _this.ta0wouserstatus !== "" && _this.ta0wouserstatus !== null) {
                // Filtering User Status 'MITC'
                var mitc = _this.ta0wouserstatus.filter(function (item) {
                    return item === "MITC";
                });
                var others = _this.ta0wouserstatus.filter(function (item) {
                    if (item === 'NMIR' || item === 'MEIR' || item === 'MITS' || item === 'MSOK') {
                        return item;
                    }
                });
                // Checking User Status without MRPM
                if ((mitc.length > 0 || others.length > 0) && (mrpm.length === 0 || mrpm.length === -1)) {
                    _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                }
                // If user status 'MITC' available
                if (mitc.length > 0 && _this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                    _this.items.json.ta4reviewrequired = true;
                }
                else {
                    _this.items.json.ta4reviewrequired = false;
                }
            }
            _this.amscheckcond = true;
            // console.log('Date for Items ', JSON.stringify(this.items));
            if (_this.items.json.worktype === 'ZISP' || _this.items.json.worktype === 'ZISO') {
                _this.loadAdhocCheck();
            }
            // Checking Save Status
            if (_this.items.json.hasOwnProperty('loc_saveStatus')) {
                _this.loc_saveStatus = _this.items.json.loc_saveStatus;
            }
            else {
                _this.loc_saveStatus = true;
                _this.items.json.loc_saveStatus = _this.loc_saveStatus;
            }
            if (_this.items.json != null) {
                _this.woStatusOri = _this.items.json.status;
                _this.woStatus = JSON.parse(JSON.stringify(_this.items.json.status));
                _this.voltageDdl = _this.items.json.ta0installationvoltage;
                _this.worktype = _this.items.json.worktype;
                if (typeof (_this.items.json.woserviceaddress) != 'undefined') {
                    _this.woserviceaddress = _this.items.json.woserviceaddress[0];
                }
                if (typeof (_this.items.json.assignment) != 'undefined' && _this.items.json.assignment !== null && _this.items.json.assignment !== "") {
                    _this.assignment = _this.items.json.assignment[0];
                }
                _this.ta0ptlocation = _this.items.json.ta0ptlocation;
                _this.ta0ctlocation = _this.items.json.ta0ctlocation;
                // console.log("Data Existing: " + JSON.stringify(this.items));
            }
            // Updated button hide/show
            // Created: Alif (22.01.2020)
            //this.statusChange(this.woStatus);
            // Change if status is KIV
            if (_this.woStatus === "KIV") {
                _this.woStatus = "PENDKIV";
            }
            // Checking existing status
            if (_this.woStatus === "PENDTECO" || _this.woStatus === "PENDKIV" || _this.woStatus === "PENDCLSD" || _this.woStatus === "APPR" || _this.woStatus === "PCBNT") {
                _this.showServiceExecution = false;
                _this.showButtonImage = false;
                _this.editField = true;
            }
            else {
                _this.showServiceExecution = true;
                _this.showButtonImage = true;
            }
            //Check if status Appr disable the button (Ameer 3/10/2018)
            //Edited By Ameer (12/10/2018)
            if (_this.woStatus === 'APPR') {
                _this.disableButtonSelection = false;
            }
            else {
                _this.disableButtonSelection = true;
            }
            // if (this.woStatus != "APPR") {
            //   this.showButtonImage = true;
            // }
            _this.platform.ready().then(function () {
                // console.log("platform ready. ");
            });
            // console.log(' doclinks  : ' + this.items.json.docLinksL);
            if (typeof (_this.items.json.docLinksL) !== 'undefined') {
                _this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(_this.items.json.docLinksL));
                _this.items.json.loc_attachmentCount = _this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(_this.items.json.docLinksL.length));
            }
            if (typeof (_this.items.json.pdfTtl) !== 'undefined' && _this.items.json.pdfTtl !== null) {
                if (typeof (_this.items.json.loc_attachmentCount) === 'undefined') {
                    _this.items.json.loc_attachmentCount = 0;
                    _this.items.json.loc_attachmentCount += _this.items.json.pdfTtl;
                }
                else {
                    _this.items.json.loc_attachmentCount += _this.items.json.pdfTtl;
                }
            }
            // Section for ZISP & ZINR & ZISO
            _this.woDetails = new __WEBPACK_IMPORTED_MODULE_14__pojo_WorkOrder__["a" /* WorkorderPojo */]();
            // Reset all the default or empty the value
            _this.woDetails = {};
            if (_this.items.json.loc_adhocReplacement != null) {
                _this.ta0subordercreationflag = _this.items.json.ta0subordercreationflag;
                _this.woDetails.ta0subordercreationflag_desc = _this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
            }
            /**
             * Hide and shows for AMS and AMCG based on SO type
             * --> this.items.json.worktype == SoTypes.ZRMV
             * --> this.items.json.worktype == SoTypes.ZMMR
             */
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN) {
                if (_this.items.json.ta0ams !== '' && _this.items.json.ta0ams !== "undefined") {
                    _this.showAms = false;
                    _this.showAmscg = true;
                    _this.getAMSData(_this.items.json.ta0ams);
                }
                else {
                    _this.showAms = false;
                    _this.showAmscg = true;
                }
            }
            else {
                _this.showAms = true;
                _this.showAmscg = true;
            }
            /**
             * Create by Ameer 12/11/2018
             * Enable and disable for Pole number input
             */
            // this.gf.loadOfflineDataFromJsonStore();
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                _this.enablePoleNo = false;
                // this.editField = false;
            }
            else {
                _this.enablePoleNo = true;
                // this.editField = true;
            }
            /**
             * Create by Ameer 14/11/2018
             * editable field for Service Type and Service Status
             */
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
                _this.enableServiceTypeAndServiceStatus = true;
            }
            else {
                _this.enableServiceTypeAndServiceStatus = false;
            }
            /**
             * Create by Ameer 14/11/2018
             *  editable field for Number of Element and Number of Feeder
             */
            /*     if (this.items.json.worktype == SoTypes.ZIST ||
                  this.items.json.worktype == SoTypes.ZISR ||
                  this.items.json.worktype == SoTypes.ZUDN ||
                  this.items.json.worktype == SoTypes.ZRPC) {
                  this.editableElementNFeeder = false;
                } else {
                  this.editableElementNFeeder = true;
                } */
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                _this.editableElementNFeeder = false;
            }
            else {
                _this.editableElementNFeeder = true;
            }
            /**
             * Getting Current Ratio from Meter Info to display at Header Details.
             * Edited : Alif
             * Date   : 14/12/2018, 15-01-2019
             */
            // Reset Current ratio value..
            _this.currentRatio = "0/0";
            // Adjustment to display current ratio.. based on so type..
            if (_this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
                // Collecting Current ratio from ta0newwindinggroup attribute
                if (typeof (_this.items.json.ta0newwindinggroup) !== "undefined" && _this.items.json.ta0newwindinggroup !== "" && _this.items.json.ta0newwindinggroup !== null) {
                    _this.currentRatio = _this.items.json.ta0newwindinggroup;
                }
            }
            else {
                if (typeof (_this.items.json.ta0feeder) !== "undefined" && _this.items.json.ta0feeder !== "undefined") {
                    // Collection devices. (15-01-2019)
                    var devices = [];
                    var feeder = JSON.parse(JSON.stringify(_this.items.json.ta0feeder));
                    if (typeof (feeder) !== "undefined") {
                        for (var i = 0; i < feeder.length; i++) {
                            if (typeof (_this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                                var multiassetlocci = feeder[i].multiassetlocci;
                                for (var m = 0; m < multiassetlocci.length; m++) {
                                    devices.push(multiassetlocci[m]);
                                }
                            }
                        }
                    }
                    var device = devices.filter(function (item) {
                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT);
                    });
                    var first = 0, second = 0;
                    if (device.length > 0) {
                        // Finding ta0registers
                        for (var i = 0; i < device.length; i++) {
                            // Checking attribute ta0registers
                            if (device[i].hasOwnProperty("ta0registers")) {
                                if (typeof (device[i].ta0registers) !== "undefined" || device[i].ta0registers !== "undefined" || device[i].ta0registers !== null || device[i].ta0registers !== "") {
                                    // Getting value from ta0registers
                                    for (var m = 0; m < device[i].ta0registers.length; m++) {
                                        if (device[i].ta0registers[m].ta0windingcategory === "1") {
                                            first = device[i].ta0registers[m].ta0transformercurrent;
                                        }
                                        if (device[i].ta0registers[m].ta0windingcategory === "2") {
                                            second = device[i].ta0registers[m].ta0transformercurrent;
                                        }
                                    }
                                    if (typeof (first) !== "undefined" && typeof (second) !== "undefined") {
                                        _this.currentRatio = first + "/" + second;
                                        _this.items.json.currentRatio = _this.currentRatio;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            _this.currentRatio += " A";
            console.log("STATUS : " + JSON.stringify(_this.ta0wouserstatus));
            /**
             * Add:Ameer (23/4/2019)
             * Checking for user status for compliance
             */
            _this.checkUserStatus();
        });
    };
    SealServiceDetailsPage.prototype.ionViewDidLoad = function () {
        this.lookup();
        this.lookupDetailUpdate();
        this.getAMIData();
        // Getting for List of Members
        //this.getLabourDetails();
        // Getting sn code description
        if (typeof (this.items.json.ta0sncode) !== "undefined") {
            this.getalnsncode(this.items.json.ta0sncode);
        }
    };
    SealServiceDetailsPage.prototype.openCrimplessSeal = function () {
        console.log('item.json.ta0feeder123', this.items.json.ta0feeder);
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("CrimplessSealPage", {
            from: 'my_Assigned_page',
            feederDetails: this.feederDetails,
            paramObj: this.items
        });
    };
    SealServiceDetailsPage.prototype.snCodeCheckForAdhoc = function () {
        if (((this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) && (this.items.json.ta0sncode === "S202")) || ((this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) && (this.items.json.ta0sncode === "S107"))) {
            this.snCodeCheck = true;
            this.req_inspection = false;
        }
        else {
            this.snCodeCheck = false;
            this.req_inspection = true;
        }
    };
    /**
     * Get the parent record details....
     */
    SealServiceDetailsPage.prototype.getParentRecord = function () {
        var _this = this;
        this.havingParent = true;
        if (this.items.json.origrecordid !== '' && this.items.json.origrecordid !== null && typeof (this.items.json.origrecordid) !== 'undefined') {
            var queryPart = [];
            queryPart = WL.JSONStore.QueryPart().equal('wonum', (this.items.json.origrecordid).toString());
            this.jsonStoreCrud
                .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart)
                .then(function (result) {
                _this.ptitems = result;
                console.log("Parent Service Order Details -->" + JSON.stringify(_this.ptitems));
            });
        }
    };
    // Loader Error Message displaying in the Ad Hoc Replacement...
    SealServiceDetailsPage.prototype.loadAdhocCheck = function () {
        if (this.items.json.origrecordid !== '' && this.items.json.origrecordid !== null && typeof (this.items.json.origrecordid) !== 'undefined') {
            this.showAdHoc = true;
        }
        else {
            this.showAdHoc = false;
            var activeStatus = 0;
            var relatedRecords = this.items.json.relatedrecord;
            if (typeof (this.items.json.relatedrecord) !== 'undefined' && this.items.json.relatedrecord !== null && this.items.json.relatedrecord !== '') {
                for (var i = 0; i < relatedRecords.length; i++) {
                    if (relatedRecords[i].ta0relatedrecstatus === "INPRG") {
                        activeStatus++;
                    }
                }
                if (activeStatus > 0)
                    this.showAdHocError = true;
                else
                    this.showAdHocError = false;
            }
        }
    };
    /**
     * Edited: Ameer (10/7/2019)
     * Description : Filter out for status MDPA status for SO ZISO and OPC
     */
    SealServiceDetailsPage.prototype.lookup = function () {
        var _this = this;
        // console.log("User Status Based on SO : ");
        var queryPart = null;
        var worktype = this.items.json.worktype;
        switch (worktype) {
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER: {
                // console.log("work  type : " + SoTypes.ZCER);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP: {
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO: {
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN: {
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN: {
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR: {
                //console.log("work  type : " + SoTypes.ZINR);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR: {
                //console.log("work  type : " + SoTypes.ZISR);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST: {
                //console.log("work  type : " + SoTypes.ZIST);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE: {
                //console.log("work  type : " + SoTypes.ZRCE);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV: {
                //console.log("work  type : " + SoTypes.ZRMV);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                //console.log("work  type : " + SoTypes.ZRPC);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPM: {
                //console.log("work  type : " + SoTypes.ZRPM);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPM);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO: {
                //console.log("work  type : " + SoTypes.ZSRO);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN: {
                //console.log("work  type : " + SoTypes.ZUDN);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR: {
                //console.log("work  type : " + SoTypes.ZMMR);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR);
                break;
            }
        }
        this.jsonStoreCrud
            .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus, queryPart)
            .then(function (result) {
            _this.userStsGroupList = result;
            var tempUserList = [];
            var combineStatusNDescription;
            // var combineStatusNDescription = [];
            // Setting Display User Status
            var statusNDescription;
            statusNDescription = new __WEBPACK_IMPORTED_MODULE_6__pojo_UserStatus__["a" /* UserStatus */]();
            for (var i = 0; i < _this.userStsGroupList.length; i++) {
                statusNDescription = {};
                statusNDescription.ta0kiv = _this.userStsGroupList[i].json.ta0kiv;
                statusNDescription.description = _this.userStsGroupList[i].json.description;
                tempUserList.push(statusNDescription);
            }
            _this.userStsGroupList = [];
            _this.userStsGroupList = tempUserList;
            /*
             *  CR001 KIV Management start
             *
            if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDTECO" || this.woStatus === "PCBNT") {
              setTimeout(() => {
                tempUserList = [];
                for (var i = 0; i < this.userStsGroupList.length; i++) {
                  if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                    if (this.items.json.worktype === SoTypes.ZISO && (this.items.json.ta0installationvoltage === '02' || this.items.json.ta0installationvoltage === '01')) {
                      if (this.userStsGroupList[i].ta0kiv.startsWith("MDP") == false) {
                        tempUserList.push(this.userStsGroupList[i]);
                      }
                    } else {
                      tempUserList.push(this.userStsGroupList[i]);
                    }
                  }
                }
                this.userStsGroupList = [];
                this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
              }, 1000);
            }
            else if (this.woStatus === "PENDKIV") {
              setTimeout(() => {
    
                tempUserList = [];
                for (var i = 0; i < this.userStsGroupList.length; i++) {
                  // Checking based on so type
                  if (this.items.json.worktype === SoTypes.ZRCN || this.items.json.worktype === SoTypes.ZDCN) {
                    if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                      tempUserList.push(this.userStsGroupList[i]);
                    }
                  } else {
                    if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true) {
                      tempUserList.push(this.userStsGroupList[i]);
                    }
                  }
                }
                this.userStsGroupList = [];
                this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
              }, 1000);
            }
            //  CR001 KIV Management End
            */
            // CR001 KIV Management Start
            if (_this.woStatus == "INPRG" || _this.woStatus === "PCBNT") {
                setTimeout(function () {
                    var tempUserList = [];
                    for (var i = 0; i < _this.userStsGroupList.length; i++) {
                        if (_this.userStsGroupList[i].ta0kiv.startsWith("K") === false && _this.userStsGroupList[i].ta0kiv.startsWith("CK") === false && _this.userStsGroupList[i].ta0kiv.startsWith("TK") === false) {
                            tempUserList.push(_this.userStsGroupList[i]);
                        }
                    }
                    console.log("Total User Status : " + tempUserList.length);
                    console.log("INPRG User Status : " + JSON.stringify(tempUserList));
                    _this.userStsGroupList = [];
                    _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                    console.log("Total User Status : " + _this.userStsGroupList.length);
                    console.log("INPRG User Status : " + JSON.stringify(_this.userStsGroupList));
                }, 1000);
            }
            else if (_this.woStatus == "PENDKIV") {
                setTimeout(function () {
                    var tempUserList = [];
                    console.log("Total User Status : " + _this.userStsGroupList.length);
                    console.log('Status KIV');
                    for (var i = 0; i < _this.userStsGroupList.length; i++) {
                        if (_this.userStsGroupList[i].ta0kiv.startsWith("K") === true || _this.userStsGroupList[i].ta0kiv.startsWith("CK") === true || _this.userStsGroupList[i].ta0kiv.startsWith("TK") === true) {
                            console.log('Push User Status ' + _this.userStsGroupList[i].ta0kiv + ' to KIV bucket');
                            tempUserList.push(_this.userStsGroupList[i]);
                        }
                    }
                    console.log("Total User Status : " + tempUserList.length);
                    console.log("KIV User Status : " + JSON.stringify(tempUserList));
                    _this.userStsGroupList = [];
                    _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                    console.log("Total User Status : " + _this.userStsGroupList.length);
                    console.log("KIV User Status : " + JSON.stringify(_this.userStsGroupList));
                }, 1000);
            }
            else if (_this.woStatus == "PENDTECO") {
                setTimeout(function () {
                    var tempUserList = [];
                    for (var i = 0; i < _this.userStsGroupList.length; i++) {
                        if (_this.userStsGroupList[i].ta0kiv.startsWith("K") == false && _this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && _this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {
                            tempUserList.push(_this.userStsGroupList[i]);
                        }
                    }
                    console.log("Total User Status : " + tempUserList.length);
                    console.log("TECO User Status : " + JSON.stringify(tempUserList));
                    _this.userStsGroupList = [];
                    _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                    console.log("Total User Status : " + _this.userStsGroupList.length);
                    console.log("TECO User Status : " + JSON.stringify(_this.userStsGroupList));
                }, 1000);
            }
            else if (_this.woStatus == "PENDCLSD") {
                setTimeout(function () {
                    var tempUserList = [];
                    // var combineStatusNDescription = [];
                    //console.log("Total: " + this.userStsGroupList.length);
                    for (var i = 0; i < _this.userStsGroupList.length; i++) {
                        // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
                        //if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) { //CR001 KIV Management
                        if (_this.userStsGroupList[i].ta0kiv.startsWith("K") === false && _this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && _this.userStsGroupList[i].ta0kiv.startsWith("TK") === false) {
                            tempUserList.push(_this.userStsGroupList[i]);
                        }
                    }
                    console.log("Total User Status : " + tempUserList.length);
                    console.log("CLSD User Status : " + JSON.stringify(tempUserList));
                    _this.userStsGroupList = [];
                    _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                    console.log("Total User Status : " + _this.userStsGroupList.length);
                    console.log("CLSD User Status : " + JSON.stringify(_this.userStsGroupList));
                }, 1000);
            }
            // CR001 KIV Management End
        });
    };
    SealServiceDetailsPage.prototype.goToStatus = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("ChangeStatusPage", "");
    };
    SealServiceDetailsPage.prototype.goToServiceExecution = function (item) {
        var _this = this;
        console.log("Inside goToServiceExecution");
        console.log("goToServiceExecution >>> trigger this.InitPrevGenerationMaximoSave");
        this.InitPrevGenerationMaximoSave();
        console.log("goToServiceExecution >>> loading");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            console.log("goToServiceExecution >>> push to SealServiceExecutionPage");
            newRootNav.push("SealServiceExecutionPage", _this.items);
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceDetailsPage.prototype.checkServiceCover = function () {
        if (this.showServiceCover) {
            this.showServiceCover = false;
        }
        else {
            this.showServiceCover = true;
        }
    };
    SealServiceDetailsPage.prototype.locationCoordination = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true,
        };
        this.geolocation
            .getCurrentPosition(options)
            .then(function (resp) {
            console.log(" coords latitude : " + resp.coords.latitude);
            console.log(" coords longitude : " + resp.coords.longitude);
            if (resp.coords.latitude != undefined && resp.coords.latitude != undefined) {
                _this.items.json.woserviceaddress[0].latitudey = resp.coords.latitude;
                _this.items.json.woserviceaddress[0].longitudex = resp.coords.longitude;
                _this.items.json.woserviceaddress[0].referencepoint = resp.coords.accuracy;
            }
            else {
                _this.items.json.woserviceaddress[0].latitudey = 0;
                _this.items.json.woserviceaddress[0].longitudex = 0;
            }
            // reset color validate.
            _this.validateGPS = false;
            // re-open to save button
            _this.buttonForServiceExecution = false;
        })
            .catch(function (error) {
            // console.log("Error getting location", error);
        });
    };
    SealServiceDetailsPage.prototype.validationForKIV = function () {
        if ((typeof (this.items.json.ta0wouserstatus) === "undefined" || this.items.json.ta0wouserstatus.length === 0 || typeof (this.ta0wouserstatus) === "undefined" || this.ta0wouserstatus.length === 0)) {
            this.validateUserSts1 = true;
            this.gf.warningAlert('User Status', 'Please select atleast 1 user status', 'Close');
        }
        else if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
            this.validatePhoto = true;
            this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
        }
    };
    SealServiceDetailsPage.prototype.validationForCLS = function () {
        // CLSD not mandatory for update attachement
        // Edited: Alif (22.01.2020)
        // if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
        //   this.buttonForServiceExecution = true;
        //   this.validatePhoto = true;
        //   this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
        // }
    };
    /**
     * Validation for TECO status
     * Created : Alif
     * Date    : 04-12-2018
     */
    SealServiceDetailsPage.prototype.validationForTeco = function () {
        console.log("Device Replacement Validation ---> validationForTeco");
        //console.log("ta0sncode : "+this.itemsOri.json.ta0sncode);
        //console.log("worktype : "+this.itemsOri.json.worktype);
        console.log("employeetype : " + this.gv.employeetype);
        // Checking Validation for Sweep
        if ((this.itemsOri.json.ta0sncode === "S202" && this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) || this.gv.employeetype === "EXECUTIVE") {
            console.log("Inside condition 1");
            if (this.gv.employeetype !== "EXECUTIVE") {
                // If user status MSOK proceed to save without checking
                if (typeof (this.itemsOri.json.ta0wouserstatus) !== "undefined" || typeof (this.items.json.ta0wouserstatus) !== "undefined") {
                    // Checking status already save
                    if (typeof (this.itemsOri.json.ta0wouserstatus) !== "undefined") {
                        var wStatus_save = this.itemsOri.json.ta0wouserstatus.filter(function (item) {
                            return item.ta0status === "MSOK";
                        });
                        if (wStatus_save.length > 0) {
                            this.validateTeco = true;
                        }
                        else {
                            switch (this.items.json.worktype) {
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP:
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO:
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR: {
                                    this.validateTeco = true;
                                    //   case SoTypes.ZIST:
                                    //   case SoTypes.ZRMV:
                                    //   case SoTypes.ZUDN:
                                    //   case SoTypes.ZRPC:
                                    //   case SoTypes.ZCER:
                                    // case SoTypes.ZISR: {
                                    this.validationUserStatus();
                                    this.validateTeco = false;
                                    break;
                                }
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                                    // Variables
                                    var message = "<p>";
                                    // Collection device list.
                                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                            var devices = [];
                                            for (var i = 0; i < feeder.length; i++) {
                                                var multiassetlocci = feeder[i].multiassetlocci;
                                                for (var m = 0; m < multiassetlocci.length; m++) {
                                                    devices.push(multiassetlocci[m]);
                                                }
                                            }
                                        }
                                    }
                                    // Checking device status and indicatior. // atleast 1 meter
                                    var removeDevice = devices.filter(function (item) {
                                        return item.ta0removeind === true;
                                    });
                                    var newDevice = devices.filter(function (item) {
                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM ||
                                            item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM ||
                                            item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT);
                                    });
                                    if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length !== newDevice.length)) {
                                        // Message
                                        var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                                        // Display message error
                                        var alert_1 = this.alertCtrl.create({
                                            title: "REMINDER",
                                            message: message,
                                            buttons: ["Close"]
                                        });
                                        alert_1.present();
                                        this.buttonForServiceExecution = true;
                                    }
                                    else {
                                        // Validation Service Execution Flag Status
                                        if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                            if (this.items.json.ta0feeder.length > 0) {
                                                this.validationServiceExecution();
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    break;
                                }
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO: {
                                    // Variables
                                    var message = "<p>";
                                    // Collection device list.
                                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                            var devices = [];
                                            for (var i = 0; i < feeder.length; i++) {
                                                var multiassetlocci = feeder[i].multiassetlocci;
                                                for (var m = 0; m < multiassetlocci.length; m++) {
                                                    devices.push(multiassetlocci[m]);
                                                }
                                            }
                                        }
                                    }
                                    // Checking device status and indicatior.
                                    var replaceDevice = devices.filter(function (item) {
                                        return item.ta0replaceind === true;
                                    });
                                    if (replaceDevice.length === 0) {
                                        // Message
                                        var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";
                                        // Display message error
                                        var alert_2 = this.alertCtrl.create({
                                            title: "REMINDER",
                                            message: message,
                                            buttons: ["Close"]
                                        });
                                        alert_2.present();
                                        this.buttonForServiceExecution = true;
                                    }
                                    else {
                                        // Validation Service Execution Flag Status
                                        if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                            if (this.items.json.ta0feeder.length > 0) {
                                                this.validationServiceExecution();
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    break;
                                }
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN: {
                                    var devices = [], newDevice = [];
                                    var fStatus = [];
                                    var feeder;
                                    var mm, cm, ct, pt;
                                    var msg = "<p>", msgTitle = [], msgBody = [];
                                    var msgTitleF, msgBodyF;
                                    // Checking Device
                                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                        feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                        for (var i = 0; i < feeder.length; i++) {
                                            var multiassetlocci = feeder[i].multiassetlocci;
                                            if (typeof (multiassetlocci) !== "undefined") {
                                                for (var k = 0; k < multiassetlocci.length; k++) {
                                                    multiassetlocci[k].ta0feedercode = feeder[i].ta0feedercode;
                                                    multiassetlocci[k].description = feeder[i].description;
                                                    if (feeder[i].hasOwnProperty("nFeederVoltage")) {
                                                        multiassetlocci[k].nFeederVoltage = feeder[i].nFeederVoltage;
                                                    }
                                                    devices.push(multiassetlocci[k]);
                                                }
                                            }
                                        }
                                        // Checking if have installed new main meter.
                                        var replaceDevice = devices.filter(function (item) {
                                            // Check new main meter
                                            return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                                        });
                                        if (replaceDevice.length > 0) {
                                            // Checking device voltage
                                            for (var m = 0; m < replaceDevice.length; m++) {
                                                // Reset cm, ct, pt
                                                cm = [], ct = [], pt = [];
                                                if (replaceDevice[m].ta0devicevoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                    // Check new ct transformer
                                                    ct = devices.filter(function (item) {
                                                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                                    });
                                                    if (ct.length < 3) {
                                                        msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                                else if (replaceDevice[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                    // Check new ct transformer
                                                    ct = devices.filter(function (item) {
                                                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                                    });
                                                    // Check new pt transformer
                                                    pt = devices.filter(function (item) {
                                                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                                    });
                                                    if (ct.length === 0) {
                                                        // if (ct.length < 3 && pt.length < 3) {
                                                        //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                                                        // } else if (ct.length > 0 && pt.length < 3) {
                                                        //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                                                        // } else if (ct.length < 3 && pt.length > 0) {
                                                        msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                                else {
                                                    // Check indicator remove existing main meter
                                                    cm = devices.filter(function (item) {
                                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                                                    });
                                                    // Check indicator remove existing ct transformer
                                                    ct = devices.filter(function (item) {
                                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                                                    });
                                                    // Check indicator remove existing pt transformer
                                                    pt = devices.filter(function (item) {
                                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                                                    });
                                                    if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                                                        if (feeder[i].nFeederVoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                            if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length === 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter is not remove! <br>");
                                                            }
                                                            else {
                                                                fStatus.push({ "status": true });
                                                            }
                                                        }
                                                        else if (feeder[i].nFeederVoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                            if (cm.length > 0 && ct.length <= 3 && pt.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else {
                                                                fStatus.push({ "status": true });
                                                            }
                                                        }
                                                        else {
                                                            if (cm.length > 0 && ct.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && ct.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter is not remove! <br>");
                                                            }
                                                            else {
                                                                fStatus.push({ "status": true });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        msgTitle.push("This work order cannot <b>TECO</b> because no replacement device!<br>");
                                                        msgBody.push("<br>Please complete <b>Service Execution</b> to continue.");
                                                        this.buttonForServiceExecution = true;
                                                    }
                                                }
                                            }
                                            newDevice.push(replaceDevice);
                                        }
                                        else {
                                            msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                                            msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                                            this.buttonForServiceExecution = true;
                                            fStatus.push({ "status": false });
                                        }
                                        var status = fStatus.filter(function (item) {
                                            return item.status === true;
                                        });
                                        var statusFalse = fStatus.filter(function (item) {
                                            return item.status === false;
                                        });
                                        if (status.length !== feeder.length && statusFalse.length === 0) {
                                            for (var i = 0; i < msgBody.length; i++) {
                                                msg = msg + msgBody[i];
                                                // msg = msg + msgTitle[i] + msgBody[i];
                                            }
                                            msg = msg + "</p>";
                                            // Display message error
                                            var alert_3 = this.alertCtrl.create({
                                                title: "REMINDER",
                                                message: msg,
                                                buttons: ["Close"]
                                            });
                                            alert_3.present();
                                            this.buttonForServiceExecution = true;
                                        }
                                        else if (statusFalse.length > 0) {
                                            msg = msg + msgTitleF + msgBodyF;
                                            msg = msg + "</p>";
                                            // Display message error
                                            var alert_4 = this.alertCtrl.create({
                                                title: "REMINDER",
                                                message: msg,
                                                buttons: ["Close"]
                                            });
                                            alert_4.present();
                                            this.buttonForServiceExecution = true;
                                        }
                                        else {
                                            // Validation Service Execution Flag Status
                                            if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                                if (this.items.json.ta0feeder.length > 0) {
                                                    this.validationServiceExecution();
                                                }
                                                else {
                                                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                    this.buttonForServiceExecution = true;
                                                }
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                    }
                                    else {
                                        // Validation Service Execution Flag Status
                                        if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                            if (this.items.json.ta0feeder.length > 0) {
                                                this.validationServiceExecution();
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    break;
                                }
                                default: {
                                    // Validation Service Execution Flag Status
                                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            this.validationServiceExecution();
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    else {
                                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                        this.buttonForServiceExecution = true;
                                    }
                                }
                            }
                        }
                    }
                    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
                        // Checking status not saving
                        var wStatus_notSave = this.items.json.ta0wouserstatus.filter(function (item) {
                            return item.ta0status === "MSOK";
                        });
                        if (wStatus_notSave.length > 0) {
                            this.validateTeco = true;
                        }
                        else {
                            switch (this.items.json.worktype) {
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP:
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO:
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR: {
                                    this.validateTeco = true;
                                    //   case SoTypes.ZIST:
                                    //   case SoTypes.ZRMV:
                                    //   case SoTypes.ZUDN:
                                    //   case SoTypes.ZRPC:
                                    //   case SoTypes.ZCER:
                                    // case SoTypes.ZISR: {
                                    this.validationUserStatus();
                                    this.validateTeco = false;
                                    break;
                                }
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                                    // Variables
                                    var message = "<p>";
                                    // Collection device list.
                                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                            var devices = [];
                                            for (var i = 0; i < feeder.length; i++) {
                                                var multiassetlocci = feeder[i].multiassetlocci;
                                                for (var m = 0; m < multiassetlocci.length; m++) {
                                                    devices.push(multiassetlocci[m]);
                                                }
                                            }
                                        }
                                    }
                                    // Checking device status and indicatior. // atleast 1 meter
                                    var removeDevice = devices.filter(function (item) {
                                        return item.ta0removeind === true;
                                    });
                                    var newDevice = devices.filter(function (item) {
                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM ||
                                            item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM ||
                                            item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT);
                                    });
                                    if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length !== newDevice.length)) {
                                        // Message
                                        var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                                        // Display message error
                                        var alert_5 = this.alertCtrl.create({
                                            title: "REMINDER",
                                            message: message,
                                            buttons: ["Close"]
                                        });
                                        alert_5.present();
                                        this.buttonForServiceExecution = true;
                                    }
                                    else {
                                        // Validation Service Execution Flag Status
                                        if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                            if (this.items.json.ta0feeder.length > 0) {
                                                this.validationServiceExecution();
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    break;
                                }
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO: {
                                    // Variables
                                    var message = "<p>";
                                    // Collection device list.
                                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                            var devices = [];
                                            for (var i = 0; i < feeder.length; i++) {
                                                var multiassetlocci = feeder[i].multiassetlocci;
                                                for (var m = 0; m < multiassetlocci.length; m++) {
                                                    devices.push(multiassetlocci[m]);
                                                }
                                            }
                                        }
                                    }
                                    // Checking device status and indicatior.
                                    var replaceDevice = devices.filter(function (item) {
                                        return item.ta0replaceind === true;
                                    });
                                    if (replaceDevice.length === 0) {
                                        // Message
                                        var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";
                                        // Display message error
                                        var alert_6 = this.alertCtrl.create({
                                            title: "REMINDER",
                                            message: message,
                                            buttons: ["Close"]
                                        });
                                        alert_6.present();
                                        this.buttonForServiceExecution = true;
                                    }
                                    else {
                                        // Validation Service Execution Flag Status
                                        if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                            if (this.items.json.ta0feeder.length > 0) {
                                                this.validationServiceExecution();
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    break;
                                }
                                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN: {
                                    var devices = [], newDevice = [];
                                    var fStatus = [];
                                    var feeder;
                                    var mm, cm, ct, pt;
                                    var msg = "<p>", msgTitle = [], msgBody = [];
                                    var msgTitleF, msgBodyF;
                                    // Checking Device
                                    if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                        feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                        for (var i = 0; i < feeder.length; i++) {
                                            var multiassetlocci = feeder[i].multiassetlocci;
                                            if (typeof (multiassetlocci) !== "undefined") {
                                                for (var k = 0; k < multiassetlocci.length; k++) {
                                                    multiassetlocci[k].ta0feedercode = feeder[i].ta0feedercode;
                                                    multiassetlocci[k].description = feeder[i].description;
                                                    if (feeder[i].hasOwnProperty("nFeederVoltage")) {
                                                        multiassetlocci[k].nFeederVoltage = feeder[i].nFeederVoltage;
                                                    }
                                                    devices.push(multiassetlocci[k]);
                                                }
                                            }
                                        }
                                        // Checking if have installed new main meter.
                                        var replaceDevice = devices.filter(function (item) {
                                            // Check new main meter
                                            return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                                        });
                                        if (replaceDevice.length > 0) {
                                            // Checking device voltage
                                            for (var m = 0; m < replaceDevice.length; m++) {
                                                // Reset cm, ct, pt
                                                cm = [], ct = [], pt = [];
                                                if (replaceDevice[m].ta0devicevoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                    // Check new ct transformer
                                                    ct = devices.filter(function (item) {
                                                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                                    });
                                                    if (ct.length < 3) {
                                                        msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                                else if (replaceDevice[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                    // Check new ct transformer
                                                    ct = devices.filter(function (item) {
                                                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                                    });
                                                    // Check new pt transformer
                                                    pt = devices.filter(function (item) {
                                                        return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                                    });
                                                    if (ct.length === 0) {
                                                        // if (ct.length < 3 && pt.length < 3) {
                                                        //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                                                        // } else if (ct.length > 0 && pt.length < 3) {
                                                        //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                                                        // } else if (ct.length < 3 && pt.length > 0) {
                                                        msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                                else {
                                                    // Check indicator remove existing main meter
                                                    cm = devices.filter(function (item) {
                                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                                                    });
                                                    // Check indicator remove existing ct transformer
                                                    ct = devices.filter(function (item) {
                                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                                                    });
                                                    // Check indicator remove existing pt transformer
                                                    pt = devices.filter(function (item) {
                                                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                                                    });
                                                    if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                                                        if (feeder[i].nFeederVoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                            if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length === 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter is not remove! <br>");
                                                            }
                                                            else {
                                                                fStatus.push({ "status": true });
                                                            }
                                                        }
                                                        else if (feeder[i].nFeederVoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                            if (cm.length > 0 && ct.length <= 3 && pt.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                                                            }
                                                            else {
                                                                fStatus.push({ "status": true });
                                                            }
                                                        }
                                                        else {
                                                            if (cm.length > 0 && ct.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length === 0 && ct.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Current Transformer (CT) is not remove! <br>");
                                                            }
                                                            else if (cm.length > 0 && ct.length <= 3) {
                                                                // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                                msgBody.push("Check Meter is not remove! <br>");
                                                            }
                                                            else {
                                                                fStatus.push({ "status": true });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        msgTitle.push("This work order cannot <b>TECO</b> because no replacement device!<br>");
                                                        msgBody.push("<br>Please complete <b>Service Execution</b> to continue.");
                                                        this.buttonForServiceExecution = true;
                                                    }
                                                }
                                            }
                                            newDevice.push(replaceDevice);
                                        }
                                        else {
                                            msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                                            msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                                            this.buttonForServiceExecution = true;
                                            fStatus.push({ "status": false });
                                        }
                                        var status = fStatus.filter(function (item) {
                                            return item.status === true;
                                        });
                                        var statusFalse = fStatus.filter(function (item) {
                                            return item.status === false;
                                        });
                                        if (status.length !== feeder.length && statusFalse.length === 0) {
                                            for (var i = 0; i < msgBody.length; i++) {
                                                msg = msg + msgBody[i];
                                                // msg = msg + msgTitle[i] + msgBody[i];
                                            }
                                            msg = msg + "</p>";
                                            // Display message error
                                            var alert_7 = this.alertCtrl.create({
                                                title: "REMINDER",
                                                message: msg,
                                                buttons: ["Close"]
                                            });
                                            alert_7.present();
                                            this.buttonForServiceExecution = true;
                                        }
                                        else if (statusFalse.length > 0) {
                                            msg = msg + msgTitleF + msgBodyF;
                                            msg = msg + "</p>";
                                            // Display message error
                                            var alert_8 = this.alertCtrl.create({
                                                title: "REMINDER",
                                                message: msg,
                                                buttons: ["Close"]
                                            });
                                            alert_8.present();
                                            this.buttonForServiceExecution = true;
                                        }
                                        else {
                                            // Validation Service Execution Flag Status
                                            if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                                if (this.items.json.ta0feeder.length > 0) {
                                                    this.validationServiceExecution();
                                                }
                                                else {
                                                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                    this.buttonForServiceExecution = true;
                                                }
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                    }
                                    else {
                                        // Validation Service Execution Flag Status
                                        if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                            if (this.items.json.ta0feeder.length > 0) {
                                                this.validationServiceExecution();
                                            }
                                            else {
                                                this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    break;
                                }
                                default: {
                                    // Validation Service Execution Flag Status
                                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            this.validationServiceExecution();
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    else {
                                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                        this.buttonForServiceExecution = true;
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    switch (this.items.json.worktype) {
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO:
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR: {
                            this.validateTeco = true;
                            //   case SoTypes.ZIST:
                            //   case SoTypes.ZRMV:
                            //   case SoTypes.ZUDN:
                            //   case SoTypes.ZRPC:
                            //   case SoTypes.ZCER:
                            // case SoTypes.ZISR: {
                            this.validationUserStatus();
                            this.validateTeco = false;
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                            // Variables
                            var message = "<p>";
                            // Collection device list.
                            if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                if (this.items.json.ta0feeder.length > 0) {
                                    var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                    var devices = [];
                                    for (var i = 0; i < feeder.length; i++) {
                                        var multiassetlocci = feeder[i].multiassetlocci;
                                        for (var m = 0; m < multiassetlocci.length; m++) {
                                            devices.push(multiassetlocci[m]);
                                        }
                                    }
                                }
                            }
                            // Checking device status and indicatior. // atleast 1 meter
                            var removeDevice = devices.filter(function (item) {
                                return item.ta0removeind === true;
                            });
                            var newDevice = devices.filter(function (item) {
                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM ||
                                    item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM ||
                                    item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT);
                            });
                            if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length !== newDevice.length)) {
                                // Message
                                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                                // Display message error
                                var alert_9 = this.alertCtrl.create({
                                    title: "REMINDER",
                                    message: message,
                                    buttons: ["Close"]
                                });
                                alert_9.present();
                                this.buttonForServiceExecution = true;
                            }
                            else {
                                // Validation Service Execution Flag Status
                                if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                    if (this.items.json.ta0feeder.length > 0) {
                                        this.validationServiceExecution();
                                    }
                                    else {
                                        this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        this.buttonForServiceExecution = true;
                                    }
                                }
                                else {
                                    this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                    this.buttonForServiceExecution = true;
                                }
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO: {
                            // Variables
                            var message = "<p>";
                            // Collection device list.
                            if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                if (this.items.json.ta0feeder.length > 0) {
                                    var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                    var devices = [];
                                    for (var i = 0; i < feeder.length; i++) {
                                        var multiassetlocci = feeder[i].multiassetlocci;
                                        for (var m = 0; m < multiassetlocci.length; m++) {
                                            devices.push(multiassetlocci[m]);
                                        }
                                    }
                                }
                            }
                            // Checking device status and indicatior.
                            var replaceDevice = devices.filter(function (item) {
                                return item.ta0replaceind === true;
                            });
                            if (replaceDevice.length === 0) {
                                // Message
                                var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";
                                // Display message error
                                var alert_10 = this.alertCtrl.create({
                                    title: "REMINDER",
                                    message: message,
                                    buttons: ["Close"]
                                });
                                alert_10.present();
                                this.buttonForServiceExecution = true;
                            }
                            else {
                                // Validation Service Execution Flag Status
                                if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                    if (this.items.json.ta0feeder.length > 0) {
                                        this.validationServiceExecution();
                                    }
                                    else {
                                        this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        this.buttonForServiceExecution = true;
                                    }
                                }
                                else {
                                    this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                    this.buttonForServiceExecution = true;
                                }
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN: {
                            var devices = [], newDevice = [];
                            var fStatus = [];
                            var feeder;
                            var mm, cm, ct, pt;
                            var msg = "<p>", msgTitle = [], msgBody = [];
                            var msgTitleF, msgBodyF;
                            // Checking Device
                            if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null) {
                                feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                                for (var i = 0; i < feeder.length; i++) {
                                    var multiassetlocci = feeder[i].multiassetlocci;
                                    if (typeof (multiassetlocci) !== "undefined") {
                                        for (var k = 0; k < multiassetlocci.length; k++) {
                                            multiassetlocci[k].ta0feedercode = feeder[i].ta0feedercode;
                                            multiassetlocci[k].description = feeder[i].description;
                                            if (feeder[i].hasOwnProperty("nFeederVoltage")) {
                                                multiassetlocci[k].nFeederVoltage = feeder[i].nFeederVoltage;
                                            }
                                            devices.push(multiassetlocci[k]);
                                        }
                                    }
                                }
                                // Checking if have installed new main meter.
                                var replaceDevice = devices.filter(function (item) {
                                    // Check new main meter
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                                });
                                if (replaceDevice.length > 0) {
                                    // Checking device voltage
                                    for (var m = 0; m < replaceDevice.length; m++) {
                                        // Reset cm, ct, pt
                                        cm = [], ct = [], pt = [];
                                        if (replaceDevice[m].ta0devicevoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                            // Check new ct transformer
                                            ct = devices.filter(function (item) {
                                                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                            });
                                            if (ct.length < 3) {
                                                msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                            }
                                            else {
                                                fStatus.push({ "status": true });
                                            }
                                        }
                                        else if (replaceDevice[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                            // Check new ct transformer
                                            ct = devices.filter(function (item) {
                                                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                            });
                                            // Check new pt transformer
                                            pt = devices.filter(function (item) {
                                                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                            });
                                            if (ct.length === 0) {
                                                // if (ct.length < 3 && pt.length < 3) {
                                                //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                //   msgBody.push("Current Transformer (CT) and Voltage Transformer (PT) is missing or not install! <br>");
                                                // } else if (ct.length > 0 && pt.length < 3) {
                                                //   msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                //   msgBody.push("Voltage Transformer (PT) is missing or not install! <br>");
                                                // } else if (ct.length < 3 && pt.length > 0) {
                                                msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                            }
                                            else {
                                                fStatus.push({ "status": true });
                                            }
                                        }
                                        else {
                                            // Check indicator remove existing main meter
                                            cm = devices.filter(function (item) {
                                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                                            });
                                            // Check indicator remove existing ct transformer
                                            ct = devices.filter(function (item) {
                                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                                            });
                                            // Check indicator remove existing pt transformer
                                            pt = devices.filter(function (item) {
                                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                                            });
                                            if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                                                if (feeder[i].nFeederVoltage === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                    if (cm.length > 0 && (ct.length >= 1 && ct.length <= 3)) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                    }
                                                    else if (cm.length === 0 && (ct.length >= 1 && ct.length <= 3)) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) is not remove! <br>");
                                                    }
                                                    else if (cm.length > 0 && ct.length === 0) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter is not remove! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                                else if (feeder[i].nFeederVoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                                    if (cm.length > 0 && ct.length <= 3 && pt.length <= 3) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter & Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                                    }
                                                    else if (cm.length === 0 && ct.length >= 0 && pt.length >= 0) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) & Voltage Transformer (PT) is not remove! <br>");
                                                    }
                                                    else if (cm.length === 0 && ct.length === 0 && pt.length >= 0) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Voltage Transformer (PT) is not remove! <br>");
                                                    }
                                                    else if (cm.length > 0 && ct.length === 0 && pt.length === 0) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter is not remove! <br>");
                                                    }
                                                    else if (cm.length > 0 && ct.length <= 3 && pt.length === 0) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                    }
                                                    else if (cm.length > 0 && ct.length === 0 && pt.length <= 3) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter & Voltage Transformer (PT) is not remove! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                                else {
                                                    if (cm.length > 0 && ct.length <= 3) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter & Current Transformer (CT) is not remove! <br>");
                                                    }
                                                    else if (cm.length === 0 && ct.length <= 3) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Current Transformer (CT) is not remove! <br>");
                                                    }
                                                    else if (cm.length > 0 && ct.length <= 3) {
                                                        // msgTitle.push("<b>" + feeder[i].description + " - " + feeder[i].ta0feedercode + "</b><br>");
                                                        msgBody.push("Check Meter is not remove! <br>");
                                                    }
                                                    else {
                                                        fStatus.push({ "status": true });
                                                    }
                                                }
                                            }
                                            else {
                                                msgTitle.push("This work order cannot <b>TECO</b> because no replacement device!<br>");
                                                msgBody.push("<br>Please complete <b>Service Execution</b> to continue.");
                                                this.buttonForServiceExecution = true;
                                            }
                                        }
                                    }
                                    newDevice.push(replaceDevice);
                                }
                                else {
                                    msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                                    msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                                    this.buttonForServiceExecution = true;
                                    fStatus.push({ "status": false });
                                }
                                var status = fStatus.filter(function (item) {
                                    return item.status === true;
                                });
                                var statusFalse = fStatus.filter(function (item) {
                                    return item.status === false;
                                });
                                if (status.length !== feeder.length && statusFalse.length === 0) {
                                    for (var i = 0; i < msgBody.length; i++) {
                                        msg = msg + msgBody[i];
                                        // msg = msg + msgTitle[i] + msgBody[i];
                                    }
                                    msg = msg + "</p>";
                                    // Display message error
                                    var alert_11 = this.alertCtrl.create({
                                        title: "REMINDER",
                                        message: msg,
                                        buttons: ["Close"]
                                    });
                                    alert_11.present();
                                    this.buttonForServiceExecution = true;
                                }
                                else if (statusFalse.length > 0) {
                                    msg = msg + msgTitleF + msgBodyF;
                                    msg = msg + "</p>";
                                    // Display message error
                                    var alert_12 = this.alertCtrl.create({
                                        title: "REMINDER",
                                        message: msg,
                                        buttons: ["Close"]
                                    });
                                    alert_12.present();
                                    this.buttonForServiceExecution = true;
                                }
                                else {
                                    // Validation Service Execution Flag Status
                                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                        if (this.items.json.ta0feeder.length > 0) {
                                            this.validationServiceExecution();
                                        }
                                        else {
                                            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            this.buttonForServiceExecution = true;
                                        }
                                    }
                                    else {
                                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        this.buttonForServiceExecution = true;
                                    }
                                }
                            }
                            else {
                                // Validation Service Execution Flag Status
                                if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                    if (this.items.json.ta0feeder.length > 0) {
                                        this.validationServiceExecution();
                                    }
                                    else {
                                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        this.buttonForServiceExecution = true;
                                    }
                                }
                                else {
                                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                    this.buttonForServiceExecution = true;
                                }
                            }
                            break;
                        }
                        default: {
                            // Validation Service Execution Flag Status
                            if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                                if (this.items.json.ta0feeder.length > 0) {
                                    this.validationServiceExecution();
                                }
                                else {
                                    this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                    this.buttonForServiceExecution = true;
                                }
                            }
                            else {
                                this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                this.buttonForServiceExecution = true;
                            }
                        }
                    }
                }
            }
        }
        else {
            console.log("Inside condition 2");
            switch (this.items.json.worktype) {
                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP:
                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO:
                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN:
                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN:
                case __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST: {
                    this.validateTeco = true;
                    // Checking compliance + list of team members inside this function
                    this.validationUserStatus();
                    this.validateTeco = false;
                    break;
                }
                default: {
                    // Validation Service Execution Flag Status
                    if (typeof (this.items.json.ta0feeder) !== 'undefined') {
                        if (this.items.json.ta0feeder.length > 0) {
                            this.validationServiceExecution();
                        }
                        else {
                            this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                            this.buttonForServiceExecution = true;
                        }
                    }
                    else {
                        this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                        this.buttonForServiceExecution = true;
                    }
                }
            }
        }
    };
    SealServiceDetailsPage.prototype.statusChange = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var tempUserList, loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Inside statusChange");
                        // console.log(" check network  : " + this.globel.checkNetwork());
                        //clear the value
                        this.editField = true;
                        this.showAms = true;
                        this.showAmscg = true;
                        this.items.json.ta0userstatus1 = "";
                        this.items.json.ta0userstatus2 = "";
                        this.items.json.ta0userstatus3 = "";
                        this.items.json.ta0userstatus4 = "";
                        /** Clear ta0wouserstatus */
                        console.log("clear ta0wouserstatus");
                        //console.log("Original Status : "+this.itemsOri.json.status);    
                        if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
                            console.log("ta0wouserstatus : " + JSON.stringify(this.items.json.ta0wouserstatus));
                            console.log("Changed Status : " + this.woStatus);
                            if (this.itemsOri.json.status === "PENDCLSD" || this.itemsOri.json.status === "PENDKIV") {
                                //if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDKIV") {
                                console.log("set this.ta0wouserstatus = []");
                                console.log("set this.items.json.ta0wouserstatus = {}");
                                this.ta0wouserstatus = [];
                                this.items.json.ta0wouserstatus = {};
                            }
                        }
                        return [4 /*yield*/, this.lookup()];
                    case 1:
                        _a.sent();
                        tempUserList = [];
                        loading = this.loadingCtrl.create({
                            content: "Loading..."
                        });
                        loading.present();
                        this.gf.loadingTimer(loading);
                        // Make it disabled user to select team members.
                        this.membersIndicator = true;
                        this.validateMembers = false;
                        if (this.woStatus == "INPRG") {
                            // Set Default
                            this.showServiceExecution = false;
                            this.showButtonImage = false;
                            this.buttonForServiceExecution = false;
                            this.editField = false;
                            this.showAms = false;
                            this.showAmscg = false;
                            this.disableButtonSelection = true;
                            this.previewBtn = false;
                        }
                        else if (this.woStatus === 'PENDKIV') {
                            loading.dismiss();
                            this.validationForKIV();
                            // this.buttonForServiceExecution = false;     
                        }
                        else if (this.woStatus === 'PENDCLSD') {
                            loading.dismiss();
                            this.validationForCLS();
                            // this.buttonForServiceExecution = false;
                        }
                        else if (this.woStatus === 'PENDTECO') {
                            // Remove existing list of team members
                            this.items.json.labtrans = [];
                            this.items.json.loc_labtrans = [];
                            this.ta4members = [];
                            // Make it allow user to select team members.
                            this.membersIndicator = false;
                            console.log("trigger this.validationForTeco()");
                            if ((this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN && this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) && (this.checkBpmForm == false || this.checkImageTemplate == false)) {
                                this.gf.warningAlert("PDF Generation", "Please generate BPM and ImageTemplate form before click on SAVE button", "Close");
                            }
                            this.validationForTeco();
                            /**
                             * Description: Checking condition for button preview pdf.
                             * Created: Alif (26.09.2019)
                             * Condition: ZISO, ZISO != S202, ZISP.
                             */
                            if (this.items.json.ta0sncode !== "S202") {
                                if ((this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.items.json.ta0installationvoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) || this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                                    this.previewBtn = true;
                                }
                            }
                            loading.dismiss();
                        }
                        else if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
                            if (this.gv.departmentCode === '03') {
                                ///this.items.json.ta0newworkcentervoltage =  '04';
                                this.items.json.ta0passwoind = 'O';
                            }
                            else if (this.gv.departmentCode === '04') {
                                //this.items.json.ta0newworkcentervoltage = '03';
                                this.items.json.ta0passwoind = 'O';
                            }
                        }
                        // Change Description
                        if (this.woStatusOri == "PENDTECO") {
                            this.items.json.status_description = "COMPLETE";
                            this.showServiceExecution = false;
                            //End for checking ZIST for TECO status
                        }
                        else if (this.woStatusOri == "INPRG") {
                            this.items.json.status_description = "In Progress";
                            this.showServiceExecution = true;
                            this.showButtonImage = true;
                        }
                        else if (this.woStatusOri == "PENDKIV") {
                            this.items.json.status_description = "KIV";
                            this.showServiceExecution = false;
                            this.showButtonImage = false;
                        }
                        else if (this.woStatusOri == "PENDCLSD") {
                            this.items.json.status_description = "CLOSE";
                            this.showServiceExecution = false;
                            this.showButtonImage = false;
                        }
                        else if (this.woStatusOri == "PCBNT") {
                            this.showServiceExecution = false;
                            this.showButtonImage = false;
                        } //else {  //CR001 KIV Management
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Validation User Status for MRPM and WMAT
     * @param
     */
    // Edited By Ameer (12/10/2018)
    SealServiceDetailsPage.prototype.validationUserStatus = function () {
        var _this = this;
        var checkDevice = false;
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
            // Checking feeder
            if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null && this.items.json.ta0feeder !== "") {
                // Collection device list.
                var devices = [];
                var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
                if (typeof (feeder) !== "undefined") {
                    for (var i = 0; i < feeder.length; i++) {
                        if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined") {
                            var multiassetlocci = feeder[i].multiassetlocci;
                            for (var m = 0; m < multiassetlocci.length; m++) {
                                devices.push(multiassetlocci[m]);
                            }
                        }
                    }
                }
                // Checking for status MRPM
                /**
                 * Edited : Ameer (8/7/2019)
                 * Add Status for MDPF
                 */
                if (typeof (this.ta0wouserstatus) !== 'undefined' && this.ta0wouserstatus !== null) {
                    if (this.ta0wouserstatus.indexOf('MRPM') > -1) {
                        // Checking if have device replacement.
                        var replaceDevice = devices.filter(function (item) {
                            return item.ta0replaceind === true;
                        });
                        if (replaceDevice.length === 0) {
                            this.gf.warningAlert("REMINDER", "No device replacement.", "Close");
                            var index = this.ta0wouserstatus.findIndex(function (item) {
                                return item === "MRPM";
                            });
                            if (index !== -1) {
                                this.ta0wouserstatus.splice(index, 1);
                                this.items.json.ta0subsoindicator = false;
                                this.userStatusDefaultChange(this.ta0wouserstatus, '');
                            }
                        }
                        else {
                            // Because MRPM is selected.
                            this.items.json.ta0subsoindicator = true;
                        }
                    }
                    else {
                        // Checking if have device replacement.
                        var replaceDevice = devices.filter(function (item) {
                            return item.ta0replaceind === true;
                        });
                        if (replaceDevice.length > 0) {
                            this.gf.warningAlert("REMINDER", "Please select user status 'MRPM' to continue.", "Close");
                        }
                    }
                    //if (this.items.json.ta0installationvoltage !== '02' && this.items.json.ta0installationvoltage !== '01' ) { //006
                    if (this.items.json.ta0installationvoltage !== '01' &&
                        this.items.json.ta0installationvoltage !== '02' &&
                        this.items.json.ta0installationvoltage !== '03') {
                        if (this.ta0wouserstatus.indexOf('MDPA') > -1) {
                            // Checking if have device replacement.
                            var replaceDevice = devices.filter(function (item) {
                                if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || _this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                                    return item.ta0replaceind === true;
                                }
                                else if (_this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                                    return item.ta0installind === true;
                                }
                            });
                            if (replaceDevice.length === 0) {
                                this.gf.warningAlert("REMINDER", "No meter detail pending approval.", "Close");
                                var index = this.ta0wouserstatus.findIndex(function (item) {
                                    return item === "MDPA";
                                });
                                if (index !== -1) {
                                    this.ta0wouserstatus.splice(index, 1);
                                    this.items.json.ta0subsoindicator = false;
                                    this.userStatusDefaultChange(this.ta0wouserstatus, '');
                                }
                            }
                            else {
                                // Because MRPM is selected.
                                if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                                    this.items.json.ta0subsoindicator = true;
                                }
                                else if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                                    this.items.json.ta0subsoindicator = false;
                                }
                            }
                        }
                        else {
                            // Checking if have device replacement.
                            var replaceDevice = devices.filter(function (item) {
                                return item.ta0replaceind === true;
                            });
                            if (replaceDevice.length > 0) {
                                this.gf.warningAlert("REMINDER", "Please select user status 'MDPA' to continue.", "Close");
                            }
                        }
                    }
                    // Checking if have wmat device.
                    if (this.ta0wouserstatus.indexOf('WMAT') > -1) {
                        // Checking if have wrong meter attribute.
                        var wmatDevice = devices.filter(function (item) {
                            return item.ta0wrgmtrind === true;
                        });
                        if (wmatDevice.length === 0) {
                            this.gf.warningAlert("REMINDER", "No wrong meter attribute.", "Close");
                            var index = this.ta0wouserstatus.findIndex(function (item) {
                                return item === "WMAT";
                            });
                            if (index !== -1) {
                                this.ta0wouserstatus.splice(index, 1);
                                this.userStatusDefaultChange(this.ta0wouserstatus, '');
                            }
                        }
                    }
                    else {
                        // Checking if have wrong meter attribute.
                        var wmatDevice = devices.filter(function (item) {
                            return (item.ta0wrgmtrind === true);
                        });
                        var userStatus = this.ta0wouserstatus.filter(function (item) {
                            return item === 'WMAT';
                        });
                        if ((wmatDevice.length > 0 && userStatus.length === 0) || (wmatDevice.length === 0 && userStatus.length > 0)) {
                            this.gf.warningAlert("REMINDER", "Please select user status 'WMAT' to continue.", "Close");
                        }
                    }
                    /**
                     * Reason   : Checking User Status MITC to change the indicator
                     * Created  : Alif (01.07.2019)
                     */
                    // Checking for ststus MITC
                    if (this.ta0wouserstatus.indexOf('MITC') > -1 && this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                        this.items.json.ta4reviewrequired = true;
                    }
                    else {
                        this.items.json.ta4reviewrequired = false;
                    }
                }
                if (this.validateTeco === true) {
                    // TODO: Checking condition for GPS coordinate is empty or not populate from maximo. (LPC/SEAL)
                    if (this.buttonForServiceExecution == false) {
                        if (typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined") {
                            this.buttonForServiceExecution = true;
                            this.validateGPS = true;
                            this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
                        }
                        else if (typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) {
                            // this.membersIndicator = false;
                            this.validateMembers = true;
                            this.gf.warningAlert('Team Members on Site', '<p>Please choose team members on site to continue..!.</p>', 'Close');
                        }
                        else {
                            this.complianceValidation();
                        }
                    }
                    // this.validationServiceExecution();
                }
            }
        }
        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN || this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN) {
            if (this.validateTeco === true) {
                // TODO: Checking condition for GPS coordinate is empty or not populate from maximo. (LPC/SEAL)
                if (this.buttonForServiceExecution == false) {
                    if (typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined") {
                        this.buttonForServiceExecution = true;
                        this.validateGPS = true;
                        this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
                    }
                    else if (typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) {
                        // this.membersIndicator = false;
                        this.validateMembers = true;
                        this.gf.warningAlert('Team Members on Site', '<p>Please choose team members on site to continue..!.</p>', 'Close');
                    }
                    else {
                        this.complianceValidation();
                    }
                }
                // this.validationServiceExecution();
            }
        }
    };
    SealServiceDetailsPage.prototype.userStatusDefaultChange = function (event, userValue) {
        var checkformArray = event.findIndex(function (item) {
            if (item === 'MITC' || item === 'NMIR' || item === 'MEIR' || item === 'MITS' || item === 'MSOK') {
                return item;
            }
        });
        var checkSweepStatus = event.findIndex(function (item) {
            if (item === 'MSOK' || item === 'MITS') {
                return item;
            }
        });
        /**
         * Reason : Checking status to set value TA4HRC
         * Created : Alif (20/12/2019)
         */
        var checkMitsStatus = event.findIndex(function (item) {
            return item === 'MITS';
        });
        // checking condition to set value TA4HRC
        if (checkMitsStatus !== -1) {
            this.items.json.ta4hrc = "Yes";
        }
        else {
            this.items.json.ta4hrc = "No";
        }
        if (checkformArray !== -1) {
            // Checking for Seal Sweep Section because no pdf generation.
            if (this.items.json.ta0sncode != "S202") {
                // checking for finish date/time
                if (typeof (this.items.json.wol4) !== "undefined" && this.items.json.wol4 !== null && this.items.json.wol4 !== "") {
                    this.finishDateTimeIndicator = false;
                    this.hide_buttonCompliance = true;
                }
                else {
                    this.finishDateTimeIndicator = true;
                    this.hide_buttonCompliance = false;
                    var alert1 = this.alertCtrl.create({
                        title: 'Warning !',
                        subTitle: 'Please select finish date/time to procced with the Compliance Form!',
                        cssClass: 'alert-finishdatetime',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function () {
                                    console.log('Ok clicked');
                                }
                            }
                        ]
                    });
                    alert1.present();
                }
            }
            else {
                this.hide_buttonCompliance = false;
            }
        }
        if (checkSweepStatus !== -1) {
            this.sweepButtonHide = true;
        }
        else {
            this.sweepButtonHide = false;
        }
        var trasValue = false;
        var bbrq = false;
        var tmtr = false;
        var wmt = false;
        var mrpm = false;
        var wmat;
        var bbrqSelection;
        var device = [];
        /** Clear User Status */
        this.userStatus = [];
        this.items.json.ta0wouserstatus = [];
        if (event.length <= 4) {
            // console.log("User Status (Less than 4): " + this.userStatus);
            for (var i = 0; i < event.length; i++) {
                this.userStatus.push(event[i]);
                //console.log(" VALUE: " + this.userStatus[i]);
                var saveUserStatus = new __WEBPACK_IMPORTED_MODULE_6__pojo_UserStatus__["a" /* UserStatus */]();
                saveUserStatus.ta0status = event[i];
                //console.log("ta0status" + saveUserStatus.ta0status);
                this.items.json.ta0wouserstatus.push(saveUserStatus);
            }
            //console.log("ta0wouserstatus" + JSON.stringify(this.items.json.ta0wouserstatus));
        }
        else {
            // console.log("User Status (More than 4): " + this.userStatus);
            //this.items.json.ta0userstatus1 = null;
            // this.items.json.ta0userstatus1 = this.userStatus;
            // for(var i = 0; i < this.userStatus.length; i++) {
            //   console.log("I: " + i + ", VALUE: " + this.userStatus[i]);
            // }
        }
        for (var i = 0; i < event.length; i++) {
            if (event[i] === "TRAS") {
                trasValue = true;
            }
            else if (event[i] === "MRPM") {
                mrpm = true;
            }
            else if (event[i] === 'BBRQ') {
                bbrq = true;
            }
            else if (event[i] === 'WMAT') {
                if (typeof (this.items.json.ta0feeder) !== "undefined") {
                    for (var l = 0; l < this.items.json.ta0feeder.length; l++) {
                        var feeaderLength = this.items.json.ta0feeder[l];
                        if (typeof (this.items.json.ta0feeder[l].multiassetlocci) !== "undefined") {
                            for (var m = 0; m < this.items.json.ta0feeder[l].multiassetlocci.length; m++) {
                                device.push(this.items.json.ta0feeder[l].multiassetlocci[m]);
                            }
                        }
                    } // end for I
                    // Searching for Wrong Meter Attribute
                    var data = device.filter(function (item) {
                        return (item.ta0wrgmtrind === true || item.ta0wrgmtrind === 'true');
                    });
                    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
                        var userStatus = this.items.json.ta0wouserstatus.filter(function (item) {
                            return (item.ta0status === 'WMAT');
                        });
                    }
                    if (data.length > 0) {
                        wmat = true;
                    }
                    else {
                        wmat = false;
                    }
                }
            }
        }
        if (trasValue === true) {
            for (var j = 0; j < event.length; j++) {
                if ((event[j] === 'BBRQ')) {
                    bbrq = true;
                }
                else if ((event[j] === 'TMTR')) {
                    tmtr = true;
                }
                else if ((event[j] === 'WMAT')) {
                    wmt = true;
                }
                else if ((event[j] === 'MRPM')) {
                    mrpm = true;
                }
            }
        }
        else if (mrpm === true) {
            for (var j = 0; j < event.length; j++) {
                if ((event[j] === 'TMTR')) {
                    tmtr = true;
                }
            }
        }
        else if (bbrq === true) {
            for (var j = 0; j < event.length; j++) {
                if (event[j] === 'WMAT' || event[j] === 'MEIR' || event[j] === 'NMIR' || event[j] === 'MITC') {
                    bbrqSelection = true;
                }
                else {
                    bbrqSelection = false;
                }
            } // end for loop J
        }
        if (trasValue === true && bbrq === true) {
            this.globel.warningAlert("User Status", "BBRQ and TRAS cannot select at both at same time", "OK");
            this.ta0wouserstatus = [];
        }
        else if (trasValue === true && tmtr === true) {
            this.globel.warningAlert("User Status", "TMTR and TRAS cannot select at both at same time", "OK");
            this.ta0wouserstatus = [];
        }
        else if (trasValue === true && wmt === true) {
            this.globel.warningAlert("User Status", "WMAT and TRAS cannot select at both at same time", "OK");
            this.ta0wouserstatus = [];
        }
        else if ((trasValue === true && mrpm === true)) {
            this.globel.warningAlert("User Status", "MRPM and TRAS cannot select at both at same time", "OK");
            this.ta0wouserstatus = [];
        }
        else if (mrpm === true && tmtr === true) {
            this.globel.warningAlert("User Status", "MRPM and TMTR cannot select at both at same time", "OK");
            this.ta0wouserstatus = [];
        }
        else if (bbrqSelection === false) {
            this.globel.warningAlert("User Status", "Only MITC ,NMIR, WMAT and MEIR will be available for BBRQ", "OK");
            this.ta0wouserstatus = [];
        }
        var mitcStatus = event.filter(function (item) {
            if (item === 'MITC') {
                return item;
            }
            ;
        });
        if (mitcStatus.length > 0) {
            // Check Condition for User Status = "MITC" for Anomaly Section
            if ((this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) && mitcStatus[0] === "MITC") {
                var status = false;
                if ((typeof (this.items.json.ta4premisetyperemarks) !== "undefined" && this.items.json.ta4premisetyperemarks !== null && this.items.json.ta4premisetyperemarks !== "") &&
                    (typeof (this.items.json.ta0customertype) !== "undefined" && this.items.json.ta0customertype !== null && this.items.json.ta0customertype !== "") &&
                    (typeof (this.items.json.ta0sourcecode) !== "undefined" && this.items.json.ta0sourcecode !== null && this.items.json.ta0sourcecode !== "") &&
                    (typeof (this.items.json.ta0anomalymain) !== "undefined" && this.items.json.ta0anomalymain !== null && this.items.json.ta0anomalymain !== "") &&
                    (typeof (this.items.json.ta0initprev) !== "undefined" && this.items.json.ta0initprev !== null && this.items.json.ta0initprev !== "") &&
                    (typeof (this.items.json.ta0correctivecode) !== "undefined" && this.items.json.ta0correctivecode !== null && this.items.json.ta0correctivecode !== "") &&
                    (typeof (this.items.json.ta4correctiveremarks) !== "undefined" && this.items.json.ta4correctiveremarks !== null && this.items.json.ta4correctiveremarks !== "") &&
                    (typeof (this.items.json.ta4anomalyremarks) !== "undefined" && this.items.json.ta4anomalyremarks !== null && this.items.json.ta4anomalyremarks !== "") &&
                    (typeof (this.items.json.ta4correctiveremarks) !== "undefined" && this.items.json.ta4correctiveremarks !== null && this.items.json.ta4correctiveremarks !== "")) {
                    status = false;
                }
                else {
                    status = true;
                }
                if (status === true && this.gv.employeetype !== "EXECUTIVE") {
                    // Checking SO Type
                    if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                        // Checking if message inspection summary is available or not.
                        if (typeof (this.msgInspectionSummary) !== "undefined") {
                            this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Anomaly Section</b> before TECO Service Order.</p><p>2. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                        }
                        else {
                            this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Anomaly Section</b> before TECO Service Order.</p>", "Ok");
                        }
                    }
                    else {
                        this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Anomaly Section</b> before TECO Service Order.</p>", "Ok");
                    }
                    // this.slides.nativeElement.slideTo(1);
                }
                else {
                    // No MITC status but message inspection summary still available.
                    // Checking SO Type
                    if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.items.json.ta0installationvoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                        // Checking if message inspection summary is available or not.
                        if (typeof (this.msgInspectionSummary) !== "undefined") {
                            this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                        }
                    }
                }
            }
        }
        else {
            // No MITC status but message inspection summary still available.
            // Checking SO Type
            if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                // Checking if message inspection summary is available or not.
                if (typeof (this.msgInspectionSummary) !== "undefined") {
                    this.gf.warningAlert("WARNING!", "<p>1. Please check <b>Inspection Summary</b> before TECO Service Order.</p>", "Ok");
                }
            }
        }
        // Validation User Status.
        this.validationUserStatus();
    };
    SealServiceDetailsPage.prototype.userStatusChange = function (value) {
        this.validateUserSts1 = false;
        this.validatePhoto = false;
    };
    SealServiceDetailsPage.prototype.isDisabled = function (value) {
        for (var i = 0; i < 4; i++) {
            if (this.userStatus.length != 0) {
                if (this.userStatus[i] == value) {
                    return false;
                }
                else {
                    if (this.userStatus.length >= 4) {
                        return true;
                    }
                }
            }
            else {
                return false;
            }
        }
    };
    SealServiceDetailsPage.prototype.checkingInitPrev = function () {
        if (typeof (this.items.json.ta0initprev) !== 'undefined' && this.items.json.ta0initprev !== null && this.items.json.ta0initprev !== '') {
            if (this.items.json.ta0initprev.length > 0) {
                for (var i = 0; i < this.items.json.ta0initprev.length; i++) {
                    if (typeof (this.items.json.ta0initprev[i].ta0initprevcode) !== "undefined") {
                        this.loc_ta0initprev[i] = this.items.json.ta0initprev[i].ta0initprevcode;
                    }
                }
            }
        }
        else {
            this.loc_ta0initprev = [];
        }
    };
    SealServiceDetailsPage.prototype.disconnectionChanges = function () {
        var _this = this;
        console.log('Inside disconnectionChanges');
        var mintoday = new Date();
        mintoday.setDate(mintoday.getDate() + 2);
        var minmonth = Number(mintoday.getMonth()) + 1;
        var min = mintoday.getFullYear() + "/" + minmonth + '/' + mintoday.getDate();
        var mindate = new Date(min);
        // TODO: to set maximum day.
        var maxtoday = new Date();
        maxtoday.setDate(maxtoday.getDate() + 30);
        var maxmonth = Number(mintoday.getMonth()) + 2;
        var max = mintoday.getFullYear() + "/" + maxmonth + '/' + maxtoday.getDate();
        var maxdate = new Date(max);
        // Checking if Date Null/Undefined just skip the operation
        if (typeof (this.tempDisDate) !== "undefined" && this.tempDisDate !== null && this.tempDisDate !== "") {
            var res = this.tempDisDate.split("/");
            var selectedDate = new Date(res[2] + "/" + res[1] + "/" + res[0]);
            // Online Section
            if (!this.gv.testMobile) {
                if (typeof this.items.json.siteid !== 'undefined' && this.items.json.siteid !== '' && this.items.json.siteid !== null) {
                    var jsonString = { 'siteid': this.items.json.siteid };
                    this.dataService.sealFetchZoneBySiteId('TA0ZONELIST', jsonString).then(function (results) {
                        var respResult = results;
                        var zonex = respResult.zone;
                        var containerDate = selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate();
                        if (typeof zonex !== 'undefined' && zonex !== null && zonex !== '') {
                            var jsonString = { 'startdate': containerDate, 'ta0zone': zonex };
                            _this.dataService.disconnectDateValidation('ta4wodisconncount', jsonString).then(function (results) {
                                console.log('disconnectionChanges ---> ' + JSON.stringify(results));
                                var respResult = results;
                                // Checking count so in selected date
                                if (respResult.count > 40) {
                                    _this.items.json.ta0plandiscondate = selectedDate;
                                    console.log('ta0plandiscondate : ' + _this.items.json.ta0plandiscondate);
                                    var alert_13 = _this.alertCtrl.create({
                                        title: "Warning",
                                        message: "Selected disconnection date is already assign to 40 Service Order. You are advise to select another date.",
                                        buttons: ["OK"]
                                    });
                                    alert_13.present();
                                    _this.checkDisconnectDate = false;
                                }
                                else {
                                    // If count less than 2, checking range allow data to choose.
                                    if (selectedDate < mindate) {
                                        _this.items.json.ta0plandiscondate = selectedDate;
                                        console.log('ta0plandiscondate : ' + _this.items.json.ta0plandiscondate);
                                        var alert_14 = _this.alertCtrl.create({
                                            title: "Warning",
                                            message: "Selected disconnection date is less than 2 days. You are advise to select another date.",
                                            buttons: ["OK"]
                                        });
                                        alert_14.present();
                                    }
                                    else {
                                        _this.items.json.ta0plandiscondate = selectedDate;
                                        console.log('ta0plandiscondate : ' + _this.items.json.ta0plandiscondate);
                                        console.log("Valid: " + selectedDate);
                                    }
                                    _this.checkDisconnectDate = true;
                                }
                            });
                        }
                    });
                }
            }
            else {
                // If count less than 2, checking range allow data to choose.
                if (selectedDate < mindate) {
                    this.items.json.ta0plandiscondate = selectedDate;
                    console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
                    var alert_15 = this.alertCtrl.create({
                        title: "Warning",
                        message: "Selected disconnection date is less than 2 days. You are advise to select another date.",
                        buttons: ["OK"]
                    });
                    alert_15.present();
                }
                else {
                    this.items.json.ta0plandiscondate = selectedDate;
                    console.log('ta0plandiscondate : ' + this.items.json.ta0plandiscondate);
                    console.log("Valid: " + selectedDate);
                }
            }
        }
    };
    SealServiceDetailsPage.prototype.InitPrevGenerationMaximoSave = function () {
        if (this.loc_ta0initprev.length > 0) {
            this.items.json.ta0initprev = [];
            this.itemsOri.json.ta0initprev = [];
            for (var i = 0; i < this.loc_ta0initprev.length; i++) {
                for (var j = 0; j < this.initPrevs.length; j++) {
                    if (this.loc_ta0initprev[i] === this.initPrevs[j].json.value) {
                        this.items.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
                        this.itemsOri.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
                    }
                }
            }
        }
        else {
            this.items.json.ta0initprev = this.itemsOri.json.ta0initprev = [];
        }
    };
    SealServiceDetailsPage.prototype.saveAction = function () {
        var _this = this;
        console.log("Inside saveAction");
        console.log("saveAction >>> Trigger this.InitPrevGenerationMaximoSave");
        this.InitPrevGenerationMaximoSave();
        var validateKIVStatus = true;
        var WmtStatus = true;
        this.items.json.status = this.woStatus;
        console.log("saveAction >>> this.woStatus : " + this.woStatus);
        console.log("saveAction >>> this.items.json.status : " + this.items.json.status);
        // Check/Validate disconnection date if exist
        if (!this.gv.testMobile && this.checkDisconnectDate === false) {
            if (typeof (this.tempDisDate) !== "undefined" && this.tempDisDate !== null && this.tempDisDate !== "") {
                this.disconnectionChanges();
            }
        }
        // If status PENDKIV
        if (this.woStatus === 'PENDKIV') {
            if ((typeof (this.items.json.ta0wouserstatus) === "undefined" || this.items.json.ta0wouserstatus.length === 0 || typeof (this.ta0wouserstatus) === "undefined" || this.ta0wouserstatus.length === 0)) {
                validateKIVStatus = false;
                this.validateUserSts1 = true;
                this.gf.warningAlert('User Status', 'Please select atleast 1 user status', 'Close');
            }
            else if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
                validateKIVStatus = false;
                this.validatePhoto = true;
                this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
            }
        }
        // Ad-Hoc
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || this.worktype == __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
            // Saving new clone Service Order
            this.items.json.loc_adhocReplacement = [];
            this.items.json.loc_adhocReplacement = JSON.parse(JSON.stringify(this.woDetails));
        }
        // Changing Sub Indicator for ZRCE & ZISR
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR || this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
            this.items.json.ta0subindicator = false;
        }
        // Checking Voltage LV/MVHC for setting Ct Pt
        if (this.items.json.ta0installationvoltage === '05' ||
            this.items.json.ta0installationvoltage === '06' ||
            this.items.json.ta0installationvoltage === '07' ||
            this.items.json.ta0installationvoltage === '08' ||
            this.items.json.ta0installationvoltage === '09' ||
            this.items.json.ta0installationvoltage === '10') {
            // save the location into workorder    
            if (this.items.json.ta0ctlocation != undefined && this.items.json.ta0ptlocation != undefined) {
                this.items.json.ta0ctlocation = this.ta0ctlocation;
                this.items.json.ta0ptlocation = this.ta0ptlocation;
            }
        }
        if (this.items.json.actstart == undefined && this.items.json.status == "INPRG") {
            this.items.json.actstart = this.currentDate;
        }
        // If status PCBNT or PSTSV
        if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
            if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
                validateKIVStatus = false;
                this.validatePhoto = true;
                this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment.', 'Close');
            }
            else if (typeof (this.items.json.ta0newworkcentervoltage) === 'undefined' || this.items.json.ta0newworkcentervoltage === '') {
                validateKIVStatus = false;
                this.validatePhoto = true;
                this.gf.warningAlert('Pass Workorder', 'Choose the team to pass WorkOrder.', 'Close');
            }
        }
        console.log("saveAction >>> validateKIVStatus? " + validateKIVStatus);
        console.log("saveAction >>> WmtStatus? " + WmtStatus);
        if (validateKIVStatus === true && WmtStatus === true) {
            /** Copy Clone into Original */
            console.log("saveAction >>> clone data from this.items");
            //console.log("saveAction >>> this.itemsOri : "+JSON.stringify(this.itemsOri));
            this.itemsOri = JSON.parse(JSON.stringify(this.items));
            /** Clear ta0wouserstatus when status change to INPRG */
            /*
            console.log(">>> previous Status : " +this.woStatusOri);
            console.log(">>> new status : " + this.items.json.status);
            if(this.woStatusOri === 'KIV' && this.items.json.status === 'INPRG') {
              console.log(">>>>>> Clear ta0wouserstatus");
              console.log(">>>>>> this.items.json.ta0wouserstatus : "+JSON.stringify(this.items.json.ta0wouserstatus));
              console.log(">>>>>> this.itemsOri.json.ta0wouserstatus : "+JSON.stringify(this.itemsOri.json.ta0wouserstatus));
              console.log(">>>>>> this.itemsOri.json.status : "+JSON.stringify(this.itemsOri.json.status));
              if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
                console.log(">>>>>> status : "+this.itemsOri.json.status);
                if (this.itemsOri.json.status === 'INPRG' ) {
                  console.log(">>>>>>  clear user status this.items.json.ta0wouserstatus = {}");
                  this.itemsOri.json.ta0wouserstatus = {};
                }
              }
            }*/
            var alert_16 = this.alertCtrl.create({
                title: 'Service Order Details',
                message: 'Confirm to save service order details?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            // console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            var loading = _this.loadingCtrl.create({
                                content: "Loading.."
                            });
                            loading.present();
                            _this.gf.loadingTimer(loading);
                            // Checking KIV Process and User Status is Empty or Not
                            if (_this.items.json.status == "PENDKIV" && (typeof (_this.items.json.ta0wouserstatus) === "undefined" || _this.items.json.ta0wouserstatus.length < 0)) {
                                loading.dismiss();
                                _this.globel.warningAlert("User Status", "Please Select User Status.", "Close");
                                _this.validateUserSts1 = true;
                                // Revert back WorkOrder Status
                                // this.items.json.status = "INPRG";
                                // this.items.json.status_description = "In Progress";
                                // this.woStatus = "INPRG";
                            }
                            else if (_this.items.json.status == "PENDKIV" && (typeof (_this.items.json.loc_attachmentCount) === 'undefined' || _this.items.json.loc_attachmentCount === 0)) {
                                loading.dismiss();
                                _this.globel.warningAlert("Upload Picture Status", "Please Upload picture.", "Close");
                                _this.validatePhoto = true;
                                // Revert back WorkOrder Status
                                // this.items.json.status = "INPRG";
                                // this.items.json.status_description = "In Progress";
                                // this.woStatus = "INPRG";
                            }
                            else if (_this.items.json.status == "PENDTECO" && (typeof (_this.items.json.loc_attachmentCount) === 'undefined' || _this.items.json.loc_attachmentCount === 0)) {
                                loading.dismiss();
                                _this.globel.warningAlert("Upload Picture Status", "Please Upload picture.", "Close");
                                _this.validatePhoto = true;
                                // Revert back WorkOrder Status
                                // this.items.json.status = "INPRG";
                                // this.items.json.status_description = "In Progress";
                                // this.woStatus = "INPRG";
                                // Close
                                // } else if (this.items.json.status == "PENDTECO" && (this.items.json.ta0wouserstatus == undefined || this.items.json.ta0wouserstatus == null || this.items.json.ta0wouserstatus == "")) {
                                //   loading.dismiss();
                                //   this.globel.warningAlert("User Status", "Please Select User Status", "OK");
                                //   this.validateUserSts1 = true;
                                //   // Revert back WorkOrder Status
                                //   this.items.json.status = "INPRG";
                                //   this.items.json.status_description = "In Progress";
                                //   this.woStatus = "INPRG";
                            }
                            else if (_this.items.json.status == "PENDTECO") {
                                /**
                                 * Validation for TECO process.
                                 * Created : Alif (03/07/2020)
                                 */
                                if (!_this.validationTeco()) {
                                    /** Checking TECO for ZISP & ZINR & ZISO*/
                                    if (_this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                                        // Collection device list.
                                        if (typeof (_this.items.json.ta0feeder) !== "undefined" && _this.items.json.ta0feeder !== null) {
                                            if (_this.items.json.ta0feeder.length > 0) {
                                                var feeder = JSON.parse(JSON.stringify(_this.items.json.ta0feeder));
                                                var devices = [];
                                                for (var i = 0; i < feeder.length; i++) {
                                                    var multiassetlocci = feeder[i].multiassetlocci;
                                                    for (var m = 0; m < multiassetlocci.length; m++) {
                                                        devices.push(multiassetlocci[m]);
                                                    }
                                                }
                                            }
                                        }
                                        /** Checking for user status */
                                        if (typeof (_this.ta0wouserstatus) !== 'undefined' && _this.ta0wouserstatus !== null) {
                                            if (_this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
                                                /** Check MRPM (ta0suborderindicator) */
                                                if (_this.ta0wouserstatus.indexOf('MRPM') > -1) {
                                                    // Checking if have device replacement.
                                                    var replaceDevice = devices.filter(function (item) {
                                                        return item.ta0replaceind === true;
                                                    });
                                                    if (replaceDevice.length === 0) {
                                                        _this.gf.warningAlert("Reminder", "No device replacement.", "Close");
                                                    }
                                                }
                                                else {
                                                    // Checking if have device replacement.
                                                    var replaceDevice = devices.filter(function (item) {
                                                        return item.ta0replaceind === true;
                                                    });
                                                    if (replaceDevice.length > 0) {
                                                        _this.gf.warningAlert("Reminder", "Please select user status 'MRPM' to continue.", "Close");
                                                    }
                                                }
                                                /** Check WMAT (ta0wrgmtrind) */
                                                if (_this.ta0wouserstatus.indexOf('WMAT') > -1) {
                                                    // Checking if have wrong meter attribute.
                                                    var wmatDevice = devices.filter(function (item) {
                                                        return item.ta0wrgmtrind === true;
                                                    });
                                                    if (wmatDevice.length === 0) {
                                                        _this.gf.warningAlert("Reminder", "No wrong meter attribute.", "Close");
                                                    }
                                                }
                                                else {
                                                    // Checking if have wrong meter attribute.
                                                    var wmatDevice = devices.filter(function (item) {
                                                        return (item.ta0wrgmtrind === true);
                                                    });
                                                    var userStatus = _this.ta0wouserstatus.filter(function (item) {
                                                        return item === 'WMAT';
                                                    });
                                                    if ((wmatDevice.length > 0 && userStatus.length === 0) || (wmatDevice.length === 0 && userStatus.length > 0)) {
                                                        _this.gf.warningAlert("Reminder", "Please select user status 'WMAT' to continue.", "Close");
                                                    }
                                                    /*     if (wmatDevice.length === 0) {
                                                          this.gf.warningAlert("Reminder", "Please select user status 'WMAT' to continue.", "Close");
                                                        } */
                                                }
                                            }
                                        }
                                    }
                                    /** Remove this code.. */
                                    // Set default remove device = 0
                                    var totalRemoveDevice_1 = 0;
                                    // Checking validation TECO for ZRMV and ZRCE
                                    if (_this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV || _this.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                                        if (_this.items.json.ta0feeder === 'undefined' || _this.items.json.hasOwnProperty('ta0feeder')) {
                                            totalRemoveDevice_1 = 2;
                                            // Checking if have any device to remove..       
                                            /* for (var i = 0; i < this.items.json.ta0feeder.length; i++) {
                                              for (var k = 0; k < this.items.json.ta0feeder[i].multiassetlocci.length; k++) {
                                                if (this.items.json.ta0feeder[i].multiassetlocci[k].ta0removeind === true) {
                                                  totalRemoveDevice++;
                                                }
                                              }
                                            } */
                                        }
                                        // console.log("Total Remove Device: " + totalRemoveDevice);
                                    }
                                    totalRemoveDevice_1 = 2;
                                    setTimeout(function () {
                                        // No Remove Device is found..
                                        if (totalRemoveDevice_1 <= 1) {
                                            _this.items.json.status = "INPRG";
                                            _this.items.json.status_description = "In Progress";
                                            _this.woStatus = "INPRG";
                                            _this.showServiceExecution = true;
                                            _this.showButtonImage = true;
                                            loading.dismiss();
                                            // Display alert message
                                            var alert_17 = _this.alertCtrl.create({
                                                title: 'Remove Device Status',
                                                subTitle: 'No device remove.',
                                                buttons: ['Dismiss']
                                            });
                                            alert_17.present();
                                        }
                                        else {
                                            // Status Description is 'Complete'
                                            _this.items.json.status_description = "Complete";
                                            // Show or Hide the button
                                            if (_this.woStatus == "PENDTECO") {
                                                _this.showServiceExecution = false;
                                                _this.showButtonImage = false;
                                            }
                                            else if (_this.woStatus == "PENDKIV") {
                                                _this.showServiceExecution = false;
                                                _this.showButtonImage = false;
                                            }
                                            else if (_this.woStatus == "PENDCLSD") {
                                                _this.showServiceExecution = false;
                                                _this.showButtonImage = false;
                                            }
                                            else if (_this.woStatus == "CANCEL") {
                                                _this.changeStatusParentItem();
                                                _this.showServiceExecution = true;
                                                _this.showButtonImage = true;
                                            }
                                            else {
                                                _this.showServiceExecution = true;
                                                _this.showButtonImage = true;
                                                _this.disableButtonSelection = true;
                                            }
                                            var pagetype = 'statusPage';
                                            if (_this.woStatus === "CANCEL") {
                                                pagetype = 'followup';
                                            }
                                            if (_this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === _this.globel.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === _this.globel.checkNetwork())) {
                                                _this.checkingInitPrev();
                                                _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                _this.globel.displayToast("Record locally updated.");
                                                loading.dismiss();
                                            }
                                            else if ((__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === _this.gf.checkNetwork())) {
                                                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                                                    console.log('singnal strength login page : ' + _this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + _this.gf.findSignalStrength());
                                                    if (_this.gv.deviceSignal <= data) {
                                                        // Not allow to put actual finish when executive to teco.
                                                        if (_this.gv.employeetype !== 'EXECUTIVE') {
                                                            // Put TimeStamp for Actual Finish DateTime
                                                            // 2019-02-22T12:17:49+08:00
                                                            /**
                                                             * Description: Check & Verify actual finish already set or not.
                                                             * Created    : Alif (13.09.2019)
                                                             */
                                                            // if (typeof (this.itemsOri.json.actfinish) === "undefined") {
                                                            _this.itemsOri.json.actfinish = _this.getCurrentDateTime();
                                                            // }
                                                        }
                                                        var itemVal = _this.itemsOri;
                                                        //let feederVal = ta0feederList;
                                                        var objCopy = JSON.parse(JSON.stringify(itemVal));
                                                        //console.log(objCopy);
                                                        delete objCopy.json['ta0feeder'];
                                                        //console.log('test feeder val : ' + JSON.stringify(objCopy));
                                                        //feederVal.multiassetlocci.remove();
                                                        /**
                                                         * Reason   : Method to generate pdf when change status to "TECO".
                                                         * Created  : Alif (23-03-2019)
                                                         * Reason   : Closed for Generate pdf
                                                         * Edited   : Alif (25-03-2019), Alif (12/04/2019) - Seal Sweep No Generate PDF (S202-ZISO)
                                                         */
                                                        if ((_this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN || _this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN || (_this.itemsOri.json.ta0sncode === "S202" && _this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO)) || _this.gv.employeetype === "EXECUTIVE") {
                                                            _this.dataService
                                                                .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                                .then(function (results) {
                                                                //console.log(JSON.stringify(results));
                                                                var res;
                                                                res = results;
                                                                if (res.processStatus === 'success') {
                                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                                                                    _this.checkingInitPrev();
                                                                    _this.globel.warningAlert("Success ", res.description, "Close");
                                                                    loading.dismiss();
                                                                    if (_this.woStatus !== 'INPRG') {
                                                                        // If updated. hide button save
                                                                        _this.itemsOri.json.loc_saveStatus = false;
                                                                        _this.loc_saveStatus = false;
                                                                        // If CLSD/TECO/KIV move to HomePage
                                                                        setTimeout(function () {
                                                                            _this.goBack();
                                                                        }, 2000);
                                                                    }
                                                                }
                                                                else {
                                                                    _this.itemsOri.json.status = 'INPRG';
                                                                    _this.itemsOri.json.status_description = "In Progress";
                                                                    _this.woStatus = 'INPRG';
                                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                                    _this.globel.warningAlert("Failure ", res.description, "Close");
                                                                    loading.dismiss();
                                                                }
                                                            }).catch(function (error) {
                                                                //console.log('error : ' + error);
                                                            });
                                                        }
                                                        else {
                                                            // Save status as PENDTECO for saving WorkOrder send to BCRM.
                                                            // Alif - 01/07/2020
                                                            _this.itemsOri.json.status = 'PENDTECO';
                                                            _this.itemsOri.json.status_description = "Complete";
                                                            _this.woStatus = 'PENDTECO';
                                                            // Call service to updating status 'PENDTECO' to maximo
                                                            _this.dataService
                                                                .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                                .then(function (results) {
                                                                //console.log(JSON.stringify(results));
                                                                var res;
                                                                res = results;
                                                                if (res.processStatus === 'success') {
                                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                                                                    _this.checkingInitPrev();
                                                                    // this.globel.warningAlert("Success ", res.description, "Close");
                                                                    _this.globel.warningAlert("Success ", "Service Order successfully uploaded.", "Close");
                                                                    loading.dismiss();
                                                                    if (_this.woStatus !== 'INPRG') {
                                                                        // If updated. hide button save
                                                                        _this.itemsOri.json.loc_saveStatus = false;
                                                                        _this.loc_saveStatus = false;
                                                                        // If CLSD/TECO/KIV move to HomePage
                                                                        setTimeout(function () {
                                                                            _this.goBack();
                                                                        }, 2000);
                                                                    }
                                                                }
                                                                else {
                                                                    _this.itemsOri.json.status = 'INPRG';
                                                                    _this.woStatus = 'INPRG';
                                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                                    _this.globel.warningAlert("Failure ", res.description, "Close");
                                                                    loading.dismiss();
                                                                }
                                                            }).catch(function (error) {
                                                                //console.log('error : ' + error);
                                                                _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                                _this.globel.displayToast("Service order is failed to save/upload. Please try again.");
                                                                loading.dismiss();
                                                            });
                                                        }
                                                    }
                                                    else {
                                                        _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                        _this.globel.displayToast("Record locally updated.");
                                                        loading.dismiss();
                                                    }
                                                });
                                            }
                                            else {
                                                // Not allow to put actual finish when executive to teco.
                                                if (_this.gv.employeetype !== 'EXECUTIVE') {
                                                    // Put TimeStamp for Actual Finish DateTime
                                                    // 2019-02-22T12:17:49+08:00
                                                    /**
                                                     * Description: Check & Verify actual finish already set or not.
                                                     * Created    : Alif (13.09.2019)
                                                     */
                                                    // if (typeof (this.itemsOri.json.actfinish) === "undefined") {
                                                    _this.itemsOri.json.actfinish = _this.getCurrentDateTime();
                                                    // }
                                                }
                                                var itemVal = _this.itemsOri;
                                                //let feederVal = ta0feederList;
                                                var objCopy = JSON.parse(JSON.stringify(itemVal));
                                                //console.log(objCopy);
                                                delete objCopy.json['ta0feeder'];
                                                //console.log('test feeder val : ' + JSON.stringify(objCopy));
                                                //feederVal.multiassetlocci.remove();
                                                /**
                                                 * Reason   : Method to generate pdf when change status to "TECO".
                                                 * Created  : Alif (23-03-2019)
                                                 * Reason   : Closed for Generate pdf
                                                 * Edited   : Alif (25-03-2019), Alif (12/04/2019) - Seal Sweep No Generate PDF (S202-ZISO)
                                                 */
                                                if ((_this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN || _this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN || (_this.itemsOri.json.ta0sncode === "S202" && _this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO)) || _this.gv.employeetype === 'EXECUTIVE') {
                                                    _this.dataService
                                                        .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                        .then(function (results) {
                                                        //console.log(JSON.stringify(results));
                                                        var res;
                                                        res = results;
                                                        if (res.processStatus === 'success') {
                                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                                                            _this.checkingInitPrev();
                                                            _this.globel.warningAlert("Success ", res.description, "Close");
                                                            loading.dismiss();
                                                            if (_this.woStatus !== 'INPRG') {
                                                                // If updated. hide button save
                                                                _this.itemsOri.json.loc_saveStatus = false;
                                                                _this.loc_saveStatus = false;
                                                                // If CLSD/TECO/KIV move to HomePage
                                                                setTimeout(function () {
                                                                    _this.goBack();
                                                                }, 2000);
                                                            }
                                                        }
                                                        else {
                                                            _this.itemsOri.json.status = 'INPRG';
                                                            _this.itemsOri.json.status_description = "In Progress";
                                                            _this.woStatus = 'INPRG';
                                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                            _this.globel.warningAlert("Failure ", res.description, "Close");
                                                            loading.dismiss();
                                                        }
                                                    }).catch(function (error) {
                                                        //console.log('error : ' + error);
                                                    });
                                                }
                                                else {
                                                    // Call service to updating status 'PENDTECO' to maximo
                                                    console.log("trigger this.dataService.changeStatus");
                                                    _this.dataService
                                                        .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                        .then(function (results) {
                                                        //console.log(JSON.stringify(results));
                                                        var res;
                                                        res = results;
                                                        if (res.processStatus === 'success') {
                                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                                                            _this.checkingInitPrev();
                                                            // this.globel.warningAlert("Success ", res.description, "Close");
                                                            _this.globel.warningAlert("Success ", "Service Order successfully uploaded.", "Close");
                                                            loading.dismiss();
                                                            if (_this.woStatus !== 'INPRG') {
                                                                // If updated. hide button save
                                                                _this.itemsOri.json.loc_saveStatus = false;
                                                                _this.loc_saveStatus = false;
                                                                // If CLSD/TECO/KIV move to HomePage
                                                                setTimeout(function () {
                                                                    _this.goBack();
                                                                }, 2000);
                                                            }
                                                        }
                                                        else {
                                                            _this.itemsOri.json.status = 'INPRG';
                                                            _this.woStatus = 'INPRG';
                                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                            _this.globel.warningAlert("Failure ", res.description, "Close");
                                                            loading.dismiss();
                                                        }
                                                    }).catch(function (error) {
                                                        //console.log('error : ' + error);
                                                    });
                                                }
                                            }
                                        }
                                    }, 1000);
                                }
                                else {
                                    loading.dismiss();
                                }
                            }
                            else {
                                _this.validateUserSts1 = false;
                                // Show or Hide the button
                                if (_this.woStatus == "PENDTECO") {
                                    _this.showServiceExecution = false;
                                    _this.showButtonImage = false;
                                }
                                else if (_this.woStatus == "PENDKIV") {
                                    _this.showServiceExecution = false;
                                    _this.showButtonImage = false;
                                }
                                else if (_this.woStatus == "PENDCLSD") {
                                    _this.showServiceExecution = false;
                                    _this.showButtonImage = false;
                                }
                                else if (_this.woStatus == "CANCEL") {
                                    _this.changeStatusParentItem();
                                    _this.showServiceExecution = true;
                                    _this.showButtonImage = true;
                                }
                                else {
                                    _this.showServiceExecution = true;
                                    _this.disableButtonSelection = true;
                                    _this.showButtonImage = true;
                                }
                                //console.log(" network details ..  : " + JSON.stringify(this.globel.checkNetwork()));
                                setTimeout(function () {
                                    _this;
                                    loading.onWillDismiss(function () {
                                        _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                        _this.globel.displayToast("Record locally updated.");
                                        loading.dismiss();
                                    });
                                }, 10000);
                                var pagetype = 'statusPage';
                                if (_this.woStatus === "CANCEL") {
                                    pagetype = 'followup';
                                }
                                // Remove existing list of team members
                                _this.itemsOri.json.labtrans = [];
                                _this.itemsOri.json.loc_labtrans = [];
                                //alert(this.globel.checkNetwork());
                                if (_this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === _this.globel.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === _this.globel.checkNetwork())) {
                                    _this.checkingInitPrev();
                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                    _this.globel.displayToast("Record locally updated.");
                                    loading.dismiss();
                                }
                                else if ((__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === _this.gf.checkNetwork())) {
                                    cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                                        if (_this.gv.deviceSignal <= data) {
                                            var itemVal = _this.itemsOri;
                                            //let feederVal = ta0feederList;
                                            var objCopy = JSON.parse(JSON.stringify(itemVal));
                                            //console.log(objCopy);
                                            delete objCopy.json['ta0feeder'];
                                            //console.log('test feeder val : ' + JSON.stringify(objCopy));
                                            //feederVal.multiassetlocci.remove();
                                            console.log("this.dataService.changeStatus 1");
                                            _this.dataService
                                                .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                .then(function (results) {
                                                //console.log(JSON.stringify(results));
                                                var res;
                                                res = results;
                                                if (res.processStatus === 'success') {
                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                                                    _this.checkingInitPrev();
                                                    _this.globel.warningAlert("Success ", res.description, "Close");
                                                    loading.dismiss();
                                                    if (_this.woStatus !== 'INPRG') {
                                                        // If updated. hide button save
                                                        _this.itemsOri.json.loc_saveStatus = false;
                                                        _this.loc_saveStatus = false;
                                                        // If CLSD/TECO/KIV move to HomePage
                                                        setTimeout(function () {
                                                            _this.goBack();
                                                        }, 2000);
                                                    }
                                                }
                                                else {
                                                    // this.itemsOri.json.status = 'INPRG';
                                                    // this.woStatus = 'INPRG';
                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                                    _this.globel.warningAlert("Failure ", res.description, "Close");
                                                    loading.dismiss();
                                                }
                                            }).catch(function (error) {
                                                //console.log('error : ' + error);
                                            });
                                        }
                                        else {
                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                            _this.globel.displayToast("Record locally updated.");
                                            loading.dismiss();
                                        }
                                    });
                                }
                                else {
                                    var itemVal = _this.itemsOri;
                                    //let feederVal = ta0feederList;
                                    var objCopy = JSON.parse(JSON.stringify(itemVal));
                                    //console.log(objCopy);
                                    delete objCopy.json['ta0feeder'];
                                    //console.log('test feeder val : ' + JSON.stringify(objCopy));
                                    //feederVal.multiassetlocci.remove();
                                    console.log("this.dataService.changeStatus 2");
                                    //console.log("objCopy objCopy : "+JSON.stringify(objCopy));
                                    _this.dataService
                                        .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                        .then(function (results) {
                                        //console.log(JSON.stringify(results));
                                        var res;
                                        res = results;
                                        if (res.processStatus === 'success') {
                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                                            _this.checkingInitPrev();
                                            _this.globel.warningAlert("Success ", res.description, "Close");
                                            loading.dismiss();
                                            if (_this.woStatus !== 'INPRG') {
                                                // If updated. hide button save
                                                _this.itemsOri.json.loc_saveStatus = false;
                                                _this.loc_saveStatus = false;
                                                // If CLSD/TECO/KIV move to HomePage
                                                setTimeout(function () {
                                                    _this.goBack();
                                                }, 2000);
                                            }
                                        }
                                        else {
                                            // this.itemsOri.json.status = 'INPRG';
                                            // this.woStatus = 'INPRG';
                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                            _this.globel.warningAlert("Failure ", res.description, "Close");
                                            loading.dismiss();
                                        }
                                    }).catch(function (error) {
                                        //console.log('error : ' + error);
                                    });
                                }
                            }
                            console.log("DATA: " + JSON.stringify(_this.itemsOri));
                        }
                    }
                ]
            });
            alert_16.present();
        }
    };
    SealServiceDetailsPage.prototype.changeStatusParentItem = function () {
        if (typeof (this.items.json.origrecordid) !== 'undefined') {
            if (typeof (this.ptitems[0]) !== 'undefined') {
                for (var i = 0; i < this.ptitems[0].json.relatedrecord.length; i++) {
                    if (this.ptitems[0].json.relatedrecord[i].relatedrecwonum === this.items.json.wonum) {
                        if (this.woStatus === "CANCEL") {
                            if (this.ptitems[0].json.relatedrecord[i].ta0wolo10 === 0) {
                                for (var j = 0; j < this.ptitems[0].json.relatedrecord.length; j++) {
                                    if (this.ptitems[0].json.relatedrecord[j].ta0relatedrecstatus !== 'CANCEL') {
                                        this.ptitems[0].json.relatedrecord[j].ta0relatedrecstatus = "CANCEL";
                                    }
                                }
                            }
                            else if (this.ptitems[0].json.relatedrecord[i].relatedrecwonum.ta0wolo10 === 1) {
                                this.ptitems[0].json.relatedrecord[i].ta0relatedrecstatus = "CANCEL";
                            }
                        }
                    }
                }
                this.jsonStoreCrud.replaceWO(this.ptitems, "LPCWORKORDER", false);
            }
        }
    };
    /**
     * LookUp Data
     * Get Current Date Functionality...
     * Set Min Date and Max Date for Required Date Field...
     */
    SealServiceDetailsPage.prototype.getCurrentDate = function () {
        var today = new Date();
        var minDateDiscon = new Date();
        minDateDiscon.setDate(today.getDate() + 14);
        var ddmin = minDateDiscon.getDate();
        var mmmin = minDateDiscon.getMonth() + 1;
        if (ddmin < 10) {
            ddmin = '0' + ddmin.toString();
        }
        else {
            ddmin = ddmin.toString();
        }
        if (mmmin < 10) {
            mmmin = '0' + mmmin.toString();
        }
        else {
            mmmin = mmmin.toString();
        }
        var yyyymin = minDateDiscon.getFullYear();
        var minDiscon = yyyymin + '-' + mmmin + '-' + ddmin;
        var maxDateDiscon = new Date();
        maxDateDiscon.setDate(today.getDate() + 30);
        var ddmax = maxDateDiscon.getDate();
        var mmmax = maxDateDiscon.getMonth() + 1;
        if (ddmax < 10) {
            ddmax = '0' + ddmax.toString();
        }
        else {
            ddmax = ddmax.toString();
        }
        if (mmmax < 10) {
            mmmax = '0' + mmmax.toString();
        }
        else {
            mmmax = mmmax.toString();
        }
        var yyyymax = maxDateDiscon.getFullYear();
        var maxDiscon = yyyymax + '-' + mmmax + '-' + ddmax;
        this.minDateDiscon = minDiscon;
        this.maxDateDiscon = maxDiscon;
    };
    SealServiceDetailsPage.prototype.disconnectDateValidation = function () {
        if (this.items.json.ta0plandiscondate !== null && this.items.json.ta0plandiscondate !== '' && typeof this.items.json.ta0plandiscondate !== 'undefined') {
            //this.items.json.ta0plandiscondate = "2019-03-21";
            var ta0zone = "SLG";
            var jsonString = { 'startdate': this.items.json.ta0plandiscondate, 'ta0zone': ta0zone };
            this.dataService.disconnectDateValidation('ta4wodisconncount', jsonString).then(function (results) {
                var respResult = results;
                if (respResult.count > 40) {
                    alert("Your are not disconnect now...");
                }
            });
        }
    };
    SealServiceDetailsPage.prototype.lookupDetailUpdate = function () {
        this.getCustomerDetails();
        this.getInitPrev();
        this.getSourceCode();
        this.getalncorrectivecode();
        this.getCommonFacilities();
        this.getDlLocationValue();
    };
    SealServiceDetailsPage.prototype.getCommonFacilities = function () {
        var _this = this;
        if (typeof this.items.json.ta0customertype !== 'undefined' && this.items.json.ta0customertype !== null && this.items.json.ta0customertype !== '') {
            this.anamolyMainCheck = false;
            this.getalnAnomalyMain("TA0ANOMALYMAIN").then(function (success) {
                _this.getAnamolyMain().then(function (success) {
                    _this.resultAnamolyMain = [];
                    for (var i = 0; i < _this.alnAnomalyMain.length; i++) {
                        for (var j = 0; j < _this.anamolyMains.length; j++) {
                            if (_this.alnAnomalyMain[i].json.value === _this.anamolyMains[j]) {
                                _this.resultAnamolyMain.push(_this.alnAnomalyMain[i]);
                            }
                        }
                    }
                    if (typeof _this.items.json.ta0anomalymain !== 'undefined' && _this.items.json.ta0anomalymain !== null && _this.items.json.ta0anomalymain !== '') {
                        _this.anamolyCategoryCheck = false;
                        _this.getalnAnomalyCategory("TA0ANOMALYCATEGORY").then(function (success) {
                            _this.getAnamolyCategory().then(function (success) {
                                _this.resultAnamolyCategory = [];
                                for (var i = 0; i < _this.alnAnomalyCategory.length; i++) {
                                    for (var j = 0; j < _this.anamolyCategorys.length; j++) {
                                        if (_this.alnAnomalyCategory[i].json.value === _this.anamolyCategorys[j]) {
                                            _this.resultAnamolyCategory.push(_this.alnAnomalyCategory[i]);
                                        }
                                    }
                                }
                                if (typeof _this.items.json.ta0anomalycategory !== 'undefined' && _this.items.json.ta0anomalycategory !== null && _this.items.json.ta0anomalycategory !== '') {
                                    _this.anamolyTypeCheck = false;
                                    _this.getalnAnomalyType("TA0ANOMALYTYPE").then(function (success) {
                                        _this.getAnamolyType().then(function (success) {
                                            _this.resultAnamolyTypes = [];
                                            for (var i = 0; i < _this.alnAnomalyType.length; i++) {
                                                for (var j = 0; j < _this.anamolyTypes.length; j++) {
                                                    if (_this.alnAnomalyType[i].json.value === _this.anamolyTypes[j]) {
                                                        _this.resultAnamolyTypes.push(_this.alnAnomalyType[i]);
                                                    }
                                                }
                                            }
                                        });
                                    });
                                }
                            });
                        });
                    }
                });
            });
        }
    };
    SealServiceDetailsPage.prototype.getSourceCode = function () {
        var _this = this;
        var queryPart = [];
        queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0SOURCECODE");
        this.jsonStoreCrud.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart).then(function (result) {
            _this.sourceCodes = result;
        });
    };
    SealServiceDetailsPage.prototype.getCustomerDetails = function () {
        var _this = this;
        var queryPart = [];
        queryPart = WL.JSONStore.QueryPart().equal("worktype", this.items.json.worktype);
        this.jsonStoreCrud.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData, queryPart).then(function (result) {
            _this.customerDetails = result;
            _this.stoleValueFromCustomerDetails(_this.customerDetails);
        });
    };
    /**
     * Utils
     * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
     */
    SealServiceDetailsPage.prototype.stoleValueFromCustomerDetails = function (value) {
        this.customerDetails = [];
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["customertype"];
        }
        var unique = array.filter(this.onlyUnique);
        this.customerDetails = unique;
    };
    SealServiceDetailsPage.prototype.getAnamolyMain = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof _this.items.json.ta0customertype !== 'undefined' && _this.items.json.ta0customertype !== '' && _this.items.json.ta0customertype !== null) {
                var querypart = [];
                querypart.push({ "$like": [{ "worktype": _this.items.json.worktype }, { "customertype": _this.items.json.ta0customertype }] });
                _this.jsonStoreCrud.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData, querypart).then(function (result) {
                    _this.anamolyMains = result;
                    _this.stoleAnamolyMain(_this.anamolyMains);
                    resolve();
                }, function (error) {
                    reject();
                });
            }
            else {
                _this.anamolyMainCheck = true;
            }
        });
    };
    /**
    * Utils
    * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
    */
    SealServiceDetailsPage.prototype.stoleAnamolyMain = function (value) {
        this.anamolyMains = [];
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["anomalymain"];
        }
        var unique = array.filter(this.onlyUnique);
        this.anamolyMains = unique;
    };
    SealServiceDetailsPage.prototype.getAnamolyCategory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var querypart = [];
            querypart.push({ "$like": [{ "worktype": _this.items.json.worktype }, { "customertype": _this.items.json.ta0customertype }, { "anomalymain": _this.items.json.ta0anomalymain }] });
            _this.jsonStoreCrud.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData, querypart).then(function (result) {
                _this.anamolyCategorys = result;
                _this.stoleAnamolyCategory(_this.anamolyCategorys);
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    /**
    * Utils
    * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
    */
    SealServiceDetailsPage.prototype.stoleAnamolyCategory = function (value) {
        this.anamolyCategorys = [];
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["anomalycategory"];
        }
        var unique = array.filter(this.onlyUnique);
        this.anamolyCategorys = unique;
    };
    SealServiceDetailsPage.prototype.getAnamolyType = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var querypart = [];
            querypart.push({ "$like": [{ "worktype": _this.items.json.worktype }, { "customertype": _this.items.json.ta0customertype }, { "anomalycategory": _this.items.json.ta0anomalycategory }, { "anomalymain": _this.items.json.ta0anomalymain }] });
            _this.jsonStoreCrud.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].CustomerData, querypart).then(function (result) {
                _this.anamolyTypes = result;
                _this.stoleAnamolyType(_this.anamolyTypes);
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    /**
    * Utils
    * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
    */
    SealServiceDetailsPage.prototype.stoleAnamolyType = function (value) {
        this.anamolyTypes = [];
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["anomalytype"];
        }
        var unique = array.filter(this.onlyUnique);
        this.anamolyTypes = unique;
    };
    SealServiceDetailsPage.prototype.getInitPrev = function () {
        var _this = this;
        var queryPart = [];
        queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0INITPREV");
        this.jsonStoreCrud.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart).then(function (result) {
            _this.initPrevs = result;
        });
    };
    SealServiceDetailsPage.prototype.inspectionRequired = function () {
        var _this = this;
        if (this.req_inspection) {
            // true;
            var alert_18 = this.alertCtrl.create({
                title: 'Warning !',
                subTitle: "Do you like to do inspection",
                buttons: [{
                        text: 'Yes',
                        handler: function () {
                            _this.saveInspectionChanges();
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.req_inspection = false;
                        }
                    }]
            });
            alert_18.present();
        }
        else {
            //false;
        }
    };
    SealServiceDetailsPage.prototype.saveInspectionChanges = function () {
        var _this = this;
        // var installVoltage = Number(this.itemsOri.json.ta0installationvoltage);
        if (this.itemsOri.json.ta0sncode === "S202" && this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO) {
            this.itemsOri.json.ta0sncode = "S211";
            this.itemsOri.json.ta0sntype = "S2";
            this.items.json.ta0sncode = "S211";
            this.items.json.ta0sntype = "S2";
        }
        if (this.itemsOri.json.ta0sncode === "S107" && this.itemsOri.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
            this.itemsOri.json.ta0sncode = "S108";
            this.itemsOri.json.ta0sntype = "S1";
            this.items.json.ta0sncode = "S108";
            this.items.json.ta0sntype = "S1";
        }
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.globel.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.globel.checkNetwork())) {
            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
            this.globel.displayToast("Record locally updated.");
        }
        else if ((__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    _this.dataService.changeSnCode(_this.itemsOri.json.wonum, _this.itemsOri.json.ta0sncode, _this.itemsOri.json.ta0sntype).then(function (results) {
                        var res;
                        res = results;
                        if (res.processStatus === 'success') {
                            _this.snCodeCheckForAdhoc();
                            _this.req_inspection = true;
                            _this.globel.displayToast(res.respObject + " Successfully updated.");
                        }
                        else {
                            _this.snCodeCheckForAdhoc();
                            _this.req_inspection = false;
                            _this.globel.displayToast(res.respObject);
                        }
                    });
                }
                else {
                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                    _this.globel.displayToast("Record locally updated.");
                }
            });
        }
        else {
            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
            this.dataService.changeSnCode(this.itemsOri.json.wonum, this.itemsOri.json.ta0sncode, this.itemsOri.json.ta0sntype).then(function (results) {
                var res;
                res = results;
                if (res.processStatus === 'success') {
                    _this.snCodeCheckForAdhoc();
                    _this.req_inspection = true;
                    _this.globel.displayToast(res.respObject + " Successfully updated.");
                }
                else {
                    _this.snCodeCheckForAdhoc();
                    _this.req_inspection = false;
                    _this.globel.displayToast(res.respObject);
                }
            });
        }
    };
    SealServiceDetailsPage.prototype.goToUploadPhoto = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("AttachmentPage", this.items);
    };
    SealServiceDetailsPage.prototype.sealAttachment = function (type) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            // Navigate to Seal Mvhv Inspect Page
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealAttachmentPage", {
                paramObj: _this.items,
                type: type
            });
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    SealServiceDetailsPage.prototype.checkboxOnChange = function () {
        if (this.downPdf == null) {
            this.downPdf = false;
        }
        else {
            this.downPdf = true;
        }
    };
    SealServiceDetailsPage.prototype.goBack = function () {
        // this.itemsOri = this.items;
        // this.navCtrl.push("WoHomePage");
        this.navCtrl.pop();
    };
    /**
     * create by shankar
     * create date : 28/07/2018
     * Create button click action.
     * create follow up order in Maximo.
     */
    SealServiceDetailsPage.prototype.createAdhocFollowUp = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation ?',
            message: 'Do you agree to add adhoc, then you are not able to replace device ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.adhocValid = true;
                        _this.items.json.hasfollowupwork = true;
                        var loading = _this.loadingCtrl.create({ content: "Loading..." });
                        loading.present();
                        _this.gf.loadingTimer(loading);
                        setTimeout(function () {
                            _this;
                            loading.onWillDismiss(function () {
                                _this.jsonStoreCrud.replaceWO(_this.items, "LPCWORKORDER", true);
                                _this.globel.displayToast("Record locally updated.");
                                loading.dismiss();
                            });
                        }, 100000);
                        var woDetails = JSON.parse(JSON.stringify(_this.items.json.relatedrecord[index].followWoDetails));
                        delete woDetails['docLinksL'];
                        delete woDetails['ta0feeder'];
                        delete woDetails['relatedrecord'];
                        var resultContainer = [];
                        resultContainer = _this.adhocValidationCheck();
                        var deviceDetailWonum = '';
                        if (resultContainer.length > 0 && resultContainer.length < 2) {
                            if (typeof (resultContainer[0].relatedrecwonum) !== 'undefined') {
                                deviceDetailWonum = resultContainer[0].relatedrecwonum;
                            }
                        }
                        _this.dataService
                            .createAdHocUsingChildDeviceDetails(woDetails, _this.items.json.wonum, woDetails.siteid, deviceDetailWonum, 'adhocCe', _this.items.json.worktype, _this.items.json.relatedrecord[index].ta0wolo10)
                            .then(function (results) {
                            var res;
                            res = results;
                            if (resultContainer.length > 0 && resultContainer[0].ta0wolo10 === 0) {
                                var querypart = [];
                                querypart = [{ "$equal": [{ "wonum": deviceDetailWonum }] }];
                                _this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
                                    _this.passingCheck = true;
                                    _this.childWorkOrder = result;
                                    if (_this.childWorkOrder.length > 0) {
                                        _this.childWorkOrder[0].json.wolo1 = deviceDetailWonum;
                                        if (_this.jsonStoreCrud.replaceWO(_this.childWorkOrder[0], "LPCWORKORDER", false)) {
                                            _this.resultChanges(res, loading, index);
                                        }
                                    }
                                    else {
                                        _this.resultChanges(res, loading, index);
                                    }
                                });
                            }
                            else {
                                _this.resultChanges(res, loading, index);
                            }
                            _this.adhocValidationCheck();
                        }).then(function (error) {
                            console.log('error : ' + error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SealServiceDetailsPage.prototype.resultChanges = function (res, loading, index) {
        var _this = this;
        if (res.processStatus === 'success') {
            delete this.items.json.relatedrecord[index]['followWoDetails'];
            this.showAdHocError = true;
            this.items.json.relatedrecord[index].relatedrecwonum = res.respObject;
            this.items.json.relatedrecord[index].ta0relatedrecstatus = "INPRG";
            this.itemsOri = JSON.parse(JSON.stringify(this.items));
            this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", false);
            this.gf.warningAlert('Success', res.description, 'Close');
            loading.dismiss();
        }
        else {
            // this.gf.warningAlert('Record locally updated.', res.description, 'Close');
            var alert_19 = this.alertCtrl.create({
                title: 'Record locally updated',
                message: res.description,
                buttons: [
                    {
                        text: 'Close',
                        role: 'Close',
                        handler: function () {
                            _this.items.json.relatedrecord.splice(_this.items.json.relatedrecord.length - 1, 1);
                            _this.jsonStoreCrud.replaceWO(_this.items, "LPCWORKORDER", true);
                            loading.dismiss();
                        }
                    }
                ]
            });
            alert_19.present();
        }
    };
    SealServiceDetailsPage.prototype.changeAdhocRemove = function (index, wonum, formAction) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Loading..." });
        loading.present();
        this.gf.loadingTimer(loading);
        setTimeout(function () {
            loading.onWillDismiss(function () {
                _this.jsonStoreCrud.replaceWO(_this.items, "LPCWORKORDER", true);
                _this.globel.displayToast("Record locally updated.");
                loading.dismiss();
            });
        }, 100000);
        this.adhocValid = true;
        if ('cancel' === formAction) {
            var resultData = this.getNotObjects(this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL');
            var msg = '';
            if (this.items.json.relatedrecord[index].ta0wolo10 === 0) {
                if (resultData.length === 2) {
                    msg = "Do you confirm to cancel both '" + resultData[0].relatedrecwonum + "' and '" + resultData[1].relatedrecwonum + "' adhoc ?";
                }
                else {
                    msg = "Do you confirm to cancel '" + resultData[0].relatedrecwonum + "' adhoc ?";
                }
            }
            else {
                msg = "Do you confirm to cancel '" + resultData[0].relatedrecwonum + "' adhoc ?";
            }
            var alert_20 = this.alertCtrl.create({
                title: 'Confirm !',
                message: msg,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            loading.dismiss();
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            var siteId = null;
                            if (index === 'notrequired') {
                                siteId = _this.items.json.siteid;
                            }
                            else {
                                var woDetails = JSON.parse(JSON.stringify(_this.items.json.relatedrecord[index]));
                                siteId = woDetails.relatedrecsiteid;
                            }
                            if (_this.items.json.relatedrecord[index].ta0wolo10 === 0) {
                                var countValidDelete = 0;
                                var arrayValue = [];
                                var arraywonum = [];
                                for (var i = 0; i < _this.items.json.relatedrecord.length; i++) {
                                    if (_this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {
                                        arrayValue[countValidDelete] = i;
                                        arraywonum[countValidDelete] = _this.items.json.relatedrecord[i].relatedrecwonum;
                                        countValidDelete++;
                                    }
                                }
                                _this.passingCheck = false;
                                _this.deletingAdhocByCondition(arrayValue, arraywonum.toString(), siteId, loading);
                            }
                            else {
                                var querypart = [];
                                querypart = [{ "$equal": [{ "wonum": _this.items.json.relatedrecord[index].relatedrecwonum }] }];
                                _this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
                                    _this.childWorkOrder = result;
                                    if (_this.childWorkOrder.length > 0) {
                                        _this.childWorkOrder[0].json.wolo1 = '';
                                        _this.jsonStoreCrud.replaceWO(_this.childWorkOrder, "LPCWORKORDER", false);
                                    }
                                });
                                _this.deletingAdhocByCondition(index, wonum, siteId, loading);
                                for (var i = 0; i < _this.items.json.relatedrecord.length; i++) {
                                    if (_this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {
                                        if (_this.items.json.relatedrecord[i].ta0wolo10 === 0) {
                                            var querypart = [];
                                            querypart = [{ "$equal": [{ "wonum": _this.items.json.relatedrecord[i].relatedreckey }] }];
                                            _this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
                                                _this.childWorkOrder = result;
                                                if (_this.childWorkOrder.length > 0) {
                                                    _this.childWorkOrder[0].json.wolo1 = '';
                                                    _this.jsonStoreCrud.replaceWO(_this.childWorkOrder[0], "LPCWORKORDER", false);
                                                    _this.dataService.changeStatus("INPRG", _this.items.json.relatedrecord[i].relatedreckey, _this.childWorkOrder[0], "statusPage");
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                            _this.loadAdhocCheck();
                        }
                    }
                ]
            });
            alert_20.present();
        }
        else {
            var alert_21 = this.alertCtrl.create({
                title: 'Confirm !',
                message: 'Do you confirm to delete the adhoc ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'delete',
                        handler: function () {
                            loading.dismiss();
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.items.json.relatedrecord.splice(index, 1);
                            _this.jsonStoreCrud.replaceWO(_this.items, "LPCWORKORDER", true);
                            loading.dismiss();
                        }
                    }
                ]
            });
            alert_21.present();
        }
    };
    SealServiceDetailsPage.prototype.deletingAdhocByCondition = function (index, wonum, siteId, loading) {
        var _this = this;
        this.dataService
            .changeStatus('CANCEL', wonum, siteId, 'followup')
            .then(function (results) {
            var res;
            res = results;
            if (res.processStatus === 'success') {
                if (Array.isArray(index)) {
                    if (index.length > 0) {
                        for (var i = index.length - 1; i >= 0; i--)
                            _this.items.json.relatedrecord.splice(index[i], 1);
                    }
                }
                else {
                    if (index !== 'notrequired') {
                        _this.items.json.relatedrecord.splice(index, 1);
                    }
                }
                _this.jsonStoreCrud.replaceWO(_this.items, "LPCWORKORDER", false);
                _this.gf.warningAlert('Success', 'Deletion successfully', 'Close');
                loading.dismiss();
            }
            else {
                if (Array.isArray(index)) {
                    if (index.length > 0) {
                        for (var i = index.length - 1; i >= 0; i--)
                            _this.items.json.relatedrecord.splice(index[i], 1);
                    }
                }
                else {
                    if (index !== 'notrequired') {
                        _this.items.json.relatedrecord.splice(index, 1);
                    }
                }
                _this.jsonStoreCrud.replaceWO(_this.items, "LPCWORKORDER", true);
                _this.gf.warningAlert('Record not updated.', res.description, 'Close');
                loading.dismiss();
            }
        }).then(function (error) {
            //console.log('error : ' + error);
        });
    };
    SealServiceDetailsPage.prototype.adhocValidationCheck = function () {
        var validCount = 0;
        var sncode = [];
        if (typeof (this.items.json.relatedrecord) !== 'undefined' && this.items.json.relatedrecord !== null) {
            // var resultData = this.getNotObjects(this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL')
            for (var i = 0; i < this.items.json.relatedrecord.length; i++) {
                if (this.items.json.relatedrecord[i].ta0relatedrecstatus !== 'CANCEL') {
                    if ((typeof (this.items.json.relatedrecord[i].relatedrecwonum) !== 'undefined')) {
                        sncode[validCount] = this.items.json.relatedrecord[i];
                        validCount++;
                    }
                }
            }
            if (validCount === 0) {
                this.passingCheck = false;
                this.adhocValid = true;
                return sncode;
            }
            else if (validCount === 1) {
                this.passingCheck = true;
                sncode[0].ta0wolo10 = 0;
                this.adhocValid = true;
                return sncode;
            }
            else if (validCount === 2) {
                this.passingCheck = true;
                if (sncode[0].relatedrecwonum < sncode[1].relatedrecwonum) {
                    sncode[0].ta0wolo10 = 0;
                    sncode[1].ta0wolo10 = 1;
                }
                else {
                    sncode[0].ta0wolo10 = 1;
                    sncode[1].ta0wolo10 = 0;
                }
                this.adhocValid = false;
                return sncode;
            }
            else {
                sncode = [];
                this.adhocValid = false;
                return sncode;
            }
        }
        else {
            sncode = [];
            this.adhocValid = true;
            return sncode;
        }
    };
    // get object to found from the json results not boolean value to only string...
    SealServiceDetailsPage.prototype.getNotObjects = function (obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getNotObjects(obj[i], key, val));
            }
            else if (i == key && obj[i] !== val) {
                objects.push(obj);
            }
        }
        return objects;
    };
    /**
     * Get list of SN from server.
     * @param ServiceOrderType
     */
    SealServiceDetailsPage.prototype.changeAdhocReplacement = function () {
        var _this = this;
        var adhocWorktype = this.adhocValidationCheck();
        this.ta0subordercreationflag = true;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'dots',
        });
        var loading1 = this.loadingCtrl.create({
            content: 'Processing...',
            spinner: 'dots',
        });
        var parameter = [];
        if (adhocWorktype.length > 0) {
            if (adhocWorktype[0].ta0relatedrecworktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
                parameter = [
                    { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE }] }
                ];
            }
            else if (adhocWorktype[0].ta0relatedrecworktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                parameter = [
                    { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR }] }
                ];
            }
        }
        else {
            parameter = [
                { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR }] },
                { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE }] }
            ];
        }
        //if (this.ta0subordercreationflag === true) {
        //console.log("Popup Message is here..");
        // retrieve data using query.
        this.jsonStoreCrud
            .getSearchRecordNoLimit_Device(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].SnCode, parameter)
            .then(function (result) {
            _this.soList = result;
            //console.log("items records :: " + JSON.stringify(this.soList));
        });
        loading.present();
        this.gf.loadingTimer(loading);
        setTimeout(function () {
            loading.dismiss();
            if (_this.soList.length > 0) {
                var optData = [];
                // Add Radio BUttons
                for (var i = 0; i < _this.soList.length; i++) {
                    optData.push({
                        name: 'options',
                        value: [_this.soList[i].json.ta0sncode, _this.soList[i].json.ta0sntype, _this.soList[i].json.ta0sncodedesc, _this.soList[i].json.worktype],
                        'label': _this.soList[i].json.worktype + ' - ' + _this.soList[i].json.ta0sncode + ' - ' + _this.soList[i].json.ta0sncodedesc,
                        type: 'radio'
                    });
                }
                // Object with options used to create the alert
                var options = {
                    title: 'Service Order Type',
                    inputs: optData,
                    buttons: [
                        {
                            text: 'Cancel',
                            type: 'cancel',
                            handler: function () {
                                //console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.adhocValid = false;
                                // Copy data JSON into temporary object = woDetails
                                _this.woDetails = JSON.parse((JSON.stringify(_this.items.json)));
                                _this.woDetails.ta0sncode = data[0];
                                _this.woDetails.ta0sntype = data[1];
                                _this.woDetails.ta0sncodedesc = data[2];
                                _this.woDetails.worktype = data[3];
                                _this.woDetails.ta0subordercreationflag_desc = data[3] + ' - ' + data[2];
                                loading1.present();
                                setTimeout(function () {
                                    loading1.dismiss();
                                }, 10000);
                                // Setting default value for New Adhoc S.O.
                                delete _this.woDetails.wonum;
                                delete _this.woDetails.status;
                                delete _this.woDetails.feederSetDesign;
                                delete _this.woDetails.ta0subordercreationflag;
                                delete _this.woDetails.assignment_collectionref;
                                delete _this.woDetails.ta0wouserstatus_collectionref;
                                delete _this.woDetails.href;
                                delete _this.woDetails._rowstamp;
                                delete _this.woDetails.woserviceaddress_collectionref;
                                delete _this.woDetails.ta0feeder_collectionref;
                                delete _this.woDetails.ta0feeder_colef;
                                delete _this.woDetails.ta0bcrmnum;
                                // Trigger original SO to set ad-hoc replacement
                                _this.items.json.ta0subordercreationflag = true;
                                // Filter to remove CT & PT
                                if (typeof (_this.woDetails.ta0feeder) != 'undefined') {
                                    for (var i = 0; i < _this.woDetails.ta0feeder.length; i++) {
                                        delete _this.woDetails.ta0feeder[i].localref;
                                        delete _this.woDetails.ta0feeder[i].href;
                                        delete _this.woDetails.ta0feeder[i].multiassetlocci_collectionref;
                                        delete _this.woDetails.ta0feeder[i].href;
                                        delete _this.woDetails.ta0feeder[i].feederSetDesign;
                                        if (typeof (_this.woDetails.ta0feeder[i].multiassetlocci) != 'undefined') {
                                            var multi = [];
                                            for (var j = 0; j < _this.woDetails.ta0feeder[i].multiassetlocci.length; j++) {
                                                if ((_this.woDetails.ta0feeder[i].multiassetlocci[j].ta0existingdevice === true && _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0replaceind === false) || (_this.woDetails.ta0feeder[i].multiassetlocci[j].ta0existingdevice === false && _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0replaceind === true)) {
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0testdetail;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0sealdetail;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0stickerdetail;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers_collectionref;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].localref;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0stickerdetail_collectionref;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0devicestatus_collectionref;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0sealdetail_collectionref;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j]._rowstamp;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0testdetail_collectionref;
                                                    delete _this.woDetails.ta0feeder[i].multiassetlocci[j].href;
                                                    if (typeof (_this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers) !== 'undefined') {
                                                        for (var reg = 0; reg < _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers.length; reg++) {
                                                            delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg].href;
                                                            delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg]._rowstamp;
                                                            delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg].ta0meterreading_collectionref;
                                                            delete _this.woDetails.ta0feeder[i].multiassetlocci[j].ta0registers[reg].localref;
                                                        }
                                                    }
                                                    multi.push(_this.woDetails.ta0feeder[i].multiassetlocci[j]);
                                                }
                                            }
                                            _this.woDetails.ta0feeder[i].multiassetlocci = multi;
                                        }
                                    }
                                }
                                var related = new __WEBPACK_IMPORTED_MODULE_15__pojo_ReleatedRecord__["a" /* RelatedRecord */]();
                                related.followWoDetails = _this.woDetails;
                                related.ta0relatedrecworktype = _this.woDetails.worktype;
                                related.ta0relatedrecdescription = _this.woDetails.ta0sncodedesc;
                                related.relatedrecsiteid = _this.items.json.siteid;
                                related.ta0relatedrecsncode = _this.woDetails.ta0sncode;
                                related.ta0relatedrecsntype = _this.woDetails.ta0sntype;
                                var resultData = _this.getNotObjects(_this.items.json.relatedrecord, 'ta0relatedrecstatus', 'CANCEL');
                                if (resultData.length > 0) {
                                    related.ta0wolo10 = 1;
                                }
                                else {
                                    related.ta0wolo10 = 0;
                                }
                                if (typeof (_this.items.json.relatedrecord) != 'undefined') {
                                    var relatedLen = _this.items.json.relatedrecord.length;
                                    _this.items.json.relatedrecord.push(related);
                                }
                                else {
                                    _this.items.json.relatedrecord = [];
                                    _this.items.json.relatedrecord.push(related);
                                }
                                loading1.dismiss();
                                //console.log("WO.Details: " + JSON.stringify(this.woDetails));
                                //console.log("JSON: " + JSON.stringify(this.items.json));
                            }
                        }
                    ]
                };
                // Create alert with options setting.
                var alert_22 = _this.alertCtrl.create(options);
                alert_22.present();
            }
        }, 1000);
    };
    SealServiceDetailsPage.prototype.passToNextTeam = function () {
        //console.log(' change to pass to next team.. ');
        this.itemsOri.json.ta0passwoind = 'O';
        this.items.json.ta0passwoind = 'O';
    };
    SealServiceDetailsPage.prototype.getAMIData = function () {
        var _this = this;
        this.jsonStoreCrud.getAllRecord(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AmiData).then(function (result) {
            _this.amiitems = result;
            _this.stoleValueAMS(_this.amiitems);
        });
    };
    SealServiceDetailsPage.prototype.stoleValueAMS = function (value) {
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["ta0ams"];
        }
        var unique = array.filter(this.onlyUnique);
        this.amsstolevalue = unique;
    };
    SealServiceDetailsPage.prototype.getDlLocationValue = function () {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": "TA0DEVICELOCATION" }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alnitem = result;
        });
    };
    SealServiceDetailsPage.prototype.getalnAnomalyType = function (domainId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var querypart = [];
            querypart.push({ "$equal": [{ "domainid": domainId }] });
            var sortOrder = [{ "value": "asc" }];
            _this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
                _this.alnAnomalyType = result;
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    SealServiceDetailsPage.prototype.getalnAnomalyMain = function (domainId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var querypart = [];
            querypart.push({ "$equal": [{ "domainid": domainId }] });
            var sortOrder = [{ "value": "asc" }];
            _this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
                _this.alnAnomalyMain = result;
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    SealServiceDetailsPage.prototype.getalnAnomalyCategory = function (domainId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var querypart = [];
            querypart.push({ "$equal": [{ "domainid": domainId }] });
            var sortOrder = [{ "value": "asc" }];
            _this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
                _this.alnAnomalyCategory = result;
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    SealServiceDetailsPage.prototype.getalncorrectivecode = function () {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": "TA0CORRECTIVECODE" }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alncorrectivecode = result;
        });
    };
    SealServiceDetailsPage.prototype.getalnsncode = function (ta0sncode) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var querypart = [];
            querypart.push({ "$equal": [{ "ta0sncode": ta0sncode }] });
            _this.jsonStoreCrud.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].SnCode, querypart).then(function (result) {
                var data = result;
                if (typeof (data[0]) !== "undefined") {
                    _this.sncodedesc = data[0].json.ta0sncodedesc;
                }
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    SealServiceDetailsPage.prototype.onlyUnique = function (value, index, self) {
        if (value !== undefined && value !== "") {
            return self.indexOf(value) === index;
        }
    };
    // AMS and AMCG
    SealServiceDetailsPage.prototype.getAMSData = function (value) {
        var _this = this;
        if ((value != '') && (value !== 'undefined')) {
            var querypart = [];
            querypart = [{ "$equal": [{ "ta0ams": value }] }];
            this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].AmiData, querypart).then(function (result) {
                _this.amscgstoleitems = result;
                _this.stoleValueAMSCG(_this.amscgstoleitems);
            });
        }
        else {
            this.items.json.ta0amcg = '';
            this.showAmscg = true;
        }
    };
    SealServiceDetailsPage.prototype.stoleValueAMSCG = function (value) {
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["ta0amcg"];
        }
        var unique = array.filter(this.onlyUnique);
        this.amscgstolevalue = unique;
        if (this.amscgstolevalue.length < 1) {
            this.showAmscg = true;
        }
        else {
            this.showAmscg = false;
        }
        var unique = array.filter(this.onlyUnique);
        this.amscgstolevalue = unique;
        this.showAmscg = false;
    };
    /**
    * Validaton for Service Execution
    * Alif (02/10/2018) */
    SealServiceDetailsPage.prototype.validationServiceExecution = function () {
        this.checkObject = false;
        this.checkFlag = false;
        var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        if (typeof (feeder) !== "undefined") {
            var pending = [];
            var missing = [];
            for (var i = 0; i < feeder.length; i++) {
                if (typeof (feeder[i].feederSetDesign) !== "undefined") {
                    if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                        if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
                            if (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true) {
                                pending.push(feeder[i]);
                            }
                        }
                    }
                    else {
                        if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
                            if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                                pending.push(feeder[i]);
                            }
                        }
                        else if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
                            if (feeder[i].feederSetDesign[0].eFeederStatus === false || (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true)) {
                                pending.push(feeder[i]);
                            }
                        }
                    }
                }
                else {
                    missing.push("Feeder " + (i + 1));
                }
            }
            /** Combine Message */
            if ((this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) || (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) || (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO)) {
                if (this.checkObject === false) {
                    this.buttonForServiceExecution = false;
                }
                else if (this.checkFlag === false) {
                    /** Adding message into pending array. */
                    pending.push({ description: 'Please select user status MRPM!' });
                    // this.gf.warningAlert('Error User Status', 'MRPM need to be selected!', 'Close');
                    this.buttonForServiceExecution = true;
                }
                else {
                    this.buttonForServiceExecution = false;
                }
            }
            if (pending.length > 0) {
                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                var alert_23 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: message,
                    buttons: ["Close"]
                });
                alert_23.present();
                /**
                 * Disabled 'Save' Button
                 * Created  : Alif
                 * Date     : 05-12-2018
                 */
                this.buttonForServiceExecution = true;
            }
            else if (missing.length > 0) {
                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                var alert_24 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: message,
                    buttons: ["Close"]
                });
                alert_24.present();
                /**
                 * Disabled 'Save' Button
                 * Created  : Alif
                 * Date     : 05-12-2018
                 */
                this.buttonForServiceExecution = true;
            }
        }
    };
    // Refresh Header Details..
    SealServiceDetailsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (!this.gv.testMobile) {
            // Check dirty for the workorder..
            this.jsonStoreCrud.getDirtyCheck(this.items, __WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
                if (result > 0) {
                    setTimeout(function () {
                        refresher.complete();
                        _this.gf.displayToast("Header details changed doesn't updated, can't refresh details...");
                    }, 1000);
                }
                else {
                    _this.requestWorkOrderHeaderDetails();
                }
                refresher.complete();
            });
        }
        else {
            refresher.complete();
            this.gf.displayToast('No Network to sync data');
        }
    };
    // Retrigger to server to get work order header details.
    SealServiceDetailsPage.prototype.requestWorkOrderHeaderDetails = function () {
        var _this = this;
        var wonum = JSON.parse(this.items.json.wonum);
        this.gf.refreshHeaderWorkOrder(wonum).then(function (results) {
            // Start loading.
            //this.gf.startLoading();
            var refresh = _this.loadingCtrl.create({
                content: 'Refreshing...'
            });
            refresh.present();
            setTimeout(function () {
                var respResult;
                respResult = results;
                if (typeof (respResult) !== "undefined") {
                    if (__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                        var updatedDetails;
                        updatedDetails = JSON.parse(JSON.stringify(respResult.respObject));
                        // console.log("RESULTS: " + JSON.stringify(updatedDetails));
                        if (typeof (_this.items.json.ta0feeder) !== "undefined") {
                            updatedDetails.ta0feeder = JSON.parse(JSON.stringify(_this.items.json.ta0feeder));
                        }
                        if (typeof (_this.items.json.listDevice) !== "undefined") {
                            updatedDetails.listDevice = JSON.parse(JSON.stringify(_this.items.json.listDevice));
                        }
                        if (typeof (_this.items.json.ta0download) !== "undefined") {
                            updatedDetails.ta0download = JSON.parse(JSON.stringify(_this.items.json.ta0download));
                        }
                        if (typeof (_this.items.json.loc_adhocReplacement) !== "undefined") {
                            updatedDetails.loc_adhocReplacement = JSON.parse(JSON.stringify(_this.items.json.loc_adhocReplacement));
                        }
                        if (typeof (_this.items.json.loc_saveStatus) !== "undefined") {
                            updatedDetails.loc_saveStatus = JSON.parse(JSON.stringify(_this.items.json.loc_saveStatus));
                        }
                        if (typeof (_this.items.json.loc_attachmentCount) !== "undefined") {
                            updatedDetails.loc_attachmentCount = JSON.parse(JSON.stringify(_this.items.json.loc_attachmentCount));
                        }
                        if (typeof (_this.items.json.loc_haveNewDevice) !== "undefined") {
                            updatedDetails.loc_haveNewDevice = JSON.parse(JSON.stringify(_this.items.json.loc_haveNewDevice));
                        }
                        if (typeof (_this.items.json.relatedrecord) !== "undefined") {
                            updatedDetails.relatedrecord = JSON.parse(JSON.stringify(_this.items.json.relatedrecord));
                        }
                        if (typeof (_this.items.json.origrecordid) !== "undefined") {
                            updatedDetails.origrecordid = JSON.parse(JSON.stringify(_this.items.json.origrecordid));
                        }
                        if (typeof (_this.items.json.loc_controllingDeviceList) !== "undefined") {
                            updatedDetails.loc_controllingDeviceList = JSON.parse(JSON.stringify(_this.items.json.loc_controllingDeviceList));
                        }
                        if (typeof (_this.items.json.labtrans) !== "undefined" && _this.items.json.labtrans !== null && _this.items.json.labtrans !== "") {
                            if (_this.items.json.labtrans.length > 0) {
                                updatedDetails.labtrans = JSON.parse(JSON.stringify(_this.items.json.labtrans));
                            }
                        }
                        if (typeof (updatedDetails.wol4) === "undefined" && updatedDetails.wol4 === null && updatedDetails.wol4 === "") {
                            updatedDetails.wol4 = JSON.parse(JSON.stringify(_this.items.json.wol4));
                        }
                        // Sending the updated data into json.
                        _this.items.json = updatedDetails;
                        // Updating for LabTrans (List of Team Members).
                        if (typeof (_this.items.json.labtrans) !== "undefined" && _this.items.json.labtrans !== null && _this.items.json.labtrans !== "") {
                            if (_this.items.json.labtrans.length > 0) {
                                // this.checkingLabTrans();
                                _this.duplicateLabour();
                                _this.getLabourDetails();
                            }
                        }
                        // Updated attachment counter.
                        // console.log(' doclinks  : ' + this.items.json.docLinksL);
                        if (typeof (_this.items.json.docLinksL) !== 'undefined') {
                            // Updated loc_show attribute to show the image because after update image not showing.
                            // Edited : Alif (02-01-2019) 
                            for (var i = 0; i < _this.items.json.docLinksL.length; i++) {
                                var photoDetail = _this.items.json.docLinksL[i];
                                photoDetail.describedBy.loc_show = true;
                                photoDetail.describedBy.loc_photoVersion = 'old';
                                if (photoDetail.describedBy.docType === "BPM") {
                                    console.log("BPM PDF done uploaded..");
                                }
                                else {
                                    console.log("BPM PDF not uploaded yet.. Not yet..");
                                }
                            }
                            _this.items.json.loc_attachmentCount = JSON.parse(JSON.stringify(_this.items.json.docLinksL.length));
                        }
                        // Updated lasted gps
                        // Updated latest user status
                        if (typeof (_this.items.json.ta0wouserstatus) !== 'undefined' && _this.items.json.ta0wouserstatus !== null) {
                            if (_this.items.json.ta0wouserstatus.length > 0) {
                                // Reset to default empty
                                _this.ta0wouserstatus = [];
                                // Reading User Status
                                for (var i = 0; i < _this.items.json.ta0wouserstatus.length; i++) {
                                    _this.ta0wouserstatus.push(_this.items.json.ta0wouserstatus[i].ta0status);
                                }
                            }
                        }
                        else {
                            _this.ta0wouserstatus = [];
                        }
                    }
                    else {
                        _this.gf.displayToast(respResult.description);
                    }
                }
                // Incentive Preventive
                _this.checkingInitPrev();
                /** Copy Clone into Original */
                _this.itemsOri = JSON.parse(JSON.stringify(_this.items));
                _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                refresh.dismiss();
            }, 1000);
        });
    };
    SealServiceDetailsPage.prototype.testPostHuge = function () {
        var _this = this;
        var itemValTest = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        itemValTest.push(JSON.parse(JSON.stringify(this.items.json.ta0feeder)));
        console.log(' this.items.json :: ' + JSON.stringify(itemValTest).length);
        this.dataService
            .testPostHuge(itemValTest, this.items.json.wonum, 'test', 'feederCode', this.items.json.worktype)
            .then(function (results) {
            alert(' result s : ' + JSON.stringify(results));
        })
            .then(function (error) {
            console.log('service failure : ' + error);
            _this.gf.stopLoading();
        });
    };
    /**
    * Created: Ameer(Opening complaince form when user status is MIT or KUPM)
    * Date: 7/2/2019
    */
    SealServiceDetailsPage.prototype.goCompliance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(function () {
            // let header = new HeaderComponent(this.gv, "Compliance List Page");
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("ComplaintListPage", {
                paramObj: _this.items
            }).then(function () {
                loading.dismiss();
            });
        });
    };
    /**
     * Create: Ameer
     * Date: 5/3/2019
     * Description: Go Page Notice When user MSOK and MITS is selected
     */
    SealServiceDetailsPage.prototype.goNotice = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(function () {
            _this.navCtrl.push('SealChecklistPage', {
                paramObj: _this.itemsOri
            }).then(function () {
                loading.dismiss();
            });
        });
    };
    SealServiceDetailsPage.prototype.goChecklist = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        loading.present().then(function () {
            _this.navCtrl.push('SealNoticeletterPage', {
                paramObj: _this.itemsOri
            }).then(function () {
                loading.dismiss();
            });
        });
    };
    /**
     * Created: Ameer(Open compliance page based on button clicked)
     * Date: 8/2/2019
     */
    SealServiceDetailsPage.prototype.openCompliance = function (indexArry) {
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        switch (this.titleArr[indexArry]) {
            case 'NOTICE PREJUDICE': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'prejudiceForm'
                });
                break;
            }
            case 'NOTICE OF CESSATION, TEMPORARY INTERRUPTION': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'tempCeassation'
                });
                break;
            }
            case 'NOTICE SCHEDULE FORM A (STAFF COPY)': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'formACust'
                });
                break;
            }
            case 'NOTICE SCHEDULE FORM A(CUSTOMER COPY)': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'formCustCopy'
                });
                break;
            }
            case 'NOTICE METER INSTALLATION INSPECTION': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'installationInspection'
                });
                break;
            }
            case 'NOTICE METER INSTALLATION INSPECTION AND TESTING': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'inspect&Test'
                });
                break;
            }
            case 'NOTICE EVIDENCE COLLECTION': {
                this.navCtrl.push('ComplaintFormPage', {
                    serviceDetails: "ServiceDetailsPage",
                    paramObj: this.itemsOri,
                    formType: 'formEvidenceCollect'
                });
                break;
            }
        }
    };
    /**
     * Disconnection date calender
     * Date popup selection function
     * Edit : Ameer (28/2/2019) - add temporary attribute -tempDisDate
     */
    //create by Ameer
    //Date popup selection function
    SealServiceDetailsPage.prototype.presentPopover = function (myEvent, popType, dataType) {
        var data = { 'parentValue': 'kanna' };
        var popover = this.popoverCtrl.create('SdPopupPage', {
            'parentWoValue': this,
            'popType': popType,
            'dataType': dataType,
        });
        popover.present({
            ev: myEvent
        });
    };
    SealServiceDetailsPage.prototype.showConfirm = function (datevalue, popType) {
        if (popType === 'Calendar') {
            this.tempDisDate = datevalue;
        }
    };
    /**
     * Reason   : Method to navigate Inspection Summary Page
     * Created  : 04/03/2019
     */
    SealServiceDetailsPage.prototype.goToInspectionSummary = function () {
        var _this = this;
        console.log("Go to Inspection Summary Page..");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealMvhvSummaryPage", _this.items);
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    /**
     * Reason   : Method to navigate Technical Review Page
     * Created  : 04/03/2019
     */
    SealServiceDetailsPage.prototype.goToTechnicalReview = function () {
        var _this = this;
        console.log("Go to Technical Review Page..");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealTechnicalReviewPage", _this.items);
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    /**
     * LookUp Data
     * Get Current Date Functionality...
     * Set Min Date and Max Date for Required Date Field...
     */
    SealServiceDetailsPage.prototype.getCurrentDateTime = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var hh = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        var yyyy = today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        if (dd < 10)
            dd = '0' + dd.toString();
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        return yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";
        // this.maxDate = (yyyy + 20).toString();
    };
    /**
     * Description: To capture currecnt date tine finish
     * Created: Alif (30.03.2020)
     */
    SealServiceDetailsPage.prototype.getFinishDateTime = function () {
        var _this = this;
        console.log("Finish Date/Time >> enter..");
        // Checking refresh or not
        // if (this.gv.syncRefreshIndicator) {
        //   let alert = this.alertCtrl.create({
        //     title: 'Finish Date/Time',
        //     subTitle: '<span class="custom-error">Please refresh or wait until sync finish, first before try selecting new date/time!</span>',
        //     cssClass: 'alert-finishdatetime',
        //     buttons: [
        //       {
        //         text: 'Ok',
        //         role: 'cancel',
        //         handler: () => {
        //           console.log('Ok clicked');
        //         }
        //       }
        //     ]
        //   });
        //   alert.present();
        // } else {
        // Checking attachement is exist or not
        if (this.checkingPdfAttachement()) {
            var alert_25 = this.alertCtrl.create({
                title: 'Finish Date/Time',
                subTitle: '<span class="custom-error">Please delete the existing compliance form or others pdf before selecting new date/time!</span>',
                cssClass: 'alert-finishdatetime',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: function () {
                            console.log('Ok clicked');
                        }
                    }
                ]
            });
            alert_25.present();
        }
        else {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var hh = today.getHours();
            var loc_hh = today.getHours();
            var min = today.getMinutes();
            var sec = today.getSeconds();
            var section = "AM";
            var yyyy = today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            if (dd < 10) {
                dd = '0' + dd.toString();
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            if (hh < 10) {
                hh = '0' + hh;
            }
            if (loc_hh < 10) {
                loc_hh = '0' + loc_hh;
            }
            else {
                if (loc_hh > 12) {
                    loc_hh = loc_hh - 12;
                    if (loc_hh < 10) {
                        loc_hh = '0' + loc_hh;
                    }
                    section = "PM";
                }
                else if (loc_hh === 12) {
                    section = "PM";
                }
            }
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            // return yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";
            var alert_26 = this.alertCtrl.create({
                title: 'Finish Date/Time',
                subTitle: 'Are you sure you want capture this date time? <br><br> <span class="custom-message">' + dd.toString() + "/" + mm.toString() + "/" + yyyy.toString() + " " + loc_hh.toString() + ":" + min.toString() + " " + section + "</span>",
                cssClass: 'alert-finishdatetime',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            console.log('Confirm clicked');
                            _this.items.json.wol4 = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";
                            _this.itemsOri.json.wol4 = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString() + "T" + hh.toString() + ":" + min.toString() + ":" + sec.toString() + "+08:00";
                            // this.gf.displayToast("Finish Date/Time: " + this.items.json.wol4);
                            _this.finishDateTimeIndicator = false;
                            if (typeof (_this.ta0wouserstatus) !== "undefined" && _this.ta0wouserstatus !== null && _this.ta0wouserstatus !== "") {
                                if (_this.ta0wouserstatus.length > 0) {
                                    // Checking User Status
                                    var checkUserStatus = [];
                                    checkUserStatus = _this.ta0wouserstatus.filter(function (item) {
                                        if (item === 'MITC' || item === 'NMIR' || item === 'MEIR' || item === 'MITS' || item === 'MSOK') {
                                            return item;
                                        }
                                    });
                                    // mean's avaialble
                                    if (checkUserStatus.length > 0) {
                                        if (_this.hide_buttonCompliance === false) {
                                            _this.hide_buttonCompliance = true;
                                        }
                                    }
                                    else {
                                        alert_26.dismiss();
                                        // this.gf.warningAlert("ERROR", "Missing User Status MITC/NMIR/MEIR/MITS/MSOK..", "Close");
                                    }
                                }
                            }
                        }
                    }
                ]
            });
            alert_26.present();
        }
        // }
    };
    SealServiceDetailsPage.prototype.checkingPdfAttachement = function () {
        console.log("Checking PDF attachement >> enter..");
        var pdf = [];
        // Checking offline mode
        if (this.gv.testMobile) {
            // Filtering and sorting compliance files..
            var objCopy = JSON.parse(JSON.stringify(this.itemsOri));
            var remove = [];
            if (typeof (objCopy.json.complaince) !== "undefined") {
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
            }
            var copy = [];
            if (remove.length > 0) {
                for (var k = 0; k < remove.length; k++) {
                    delete objCopy.json.complaince[remove[k]];
                }
            }
            if (typeof (objCopy.json.complaince) !== "undefined") {
                for (var i = 0; i < objCopy.json.complaince.length; i++) {
                    if (typeof (objCopy.json.complaince[i]) !== "undefined") {
                        copy.push(objCopy.json.complaince[i]);
                    }
                }
            }
            if (copy.length > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (typeof (this.items.json.docLinksL) !== "undefined" && this.items.json.docLinksL !== null && this.items.json.docLinksL !== "") {
                pdf = this.items.json.docLinksL.filter(function (item) {
                    if (item.describedBy.fileName.includes('.pdf')) {
                        return item;
                    }
                });
                if (pdf.length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    };
    /**
     * Reason   : Method to populate value from data inspection (Reporting Data)
     * Created  : Alif (12/04/2019)
     */
    SealServiceDetailsPage.prototype.getValueFromInspectionForm = function () {
        var feeder;
        var multiassetlocci;
        var ta4testdata_temp;
        // Checking Inpsection Data is availabel or not
        if (typeof (this.items.json) !== "undefined" && this.items.json !== null && this.items.json !== "") {
            // checking feeder.
            if (typeof (this.items.json.ta0feeder) !== "undefined" && this.items.json.ta0feeder !== null && this.items.json.ta0feeder !== "") {
                feeder = this.items.json.ta0feeder;
                for (var i = 0; i < feeder.length; i++) {
                    multiassetlocci = feeder[i].multiassetlocci;
                    // Get Inspection Data
                    var data = multiassetlocci.filter(function (item) {
                        if (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN && item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (typeof (item.ta4testdata) !== "undefined") {
                                return item;
                            }
                        }
                    });
                    if (data.length > 0) {
                        // Declare Variables
                        var ta0vcbbrand;
                        var ta4wiringtype = "";
                        var ta0sgear;
                        // Get the value
                        // Checking data is string or array
                        if (Array.isArray(data[0].ta4testdata)) {
                            ta4testdata_temp = data[0].ta4testdata;
                        }
                        else {
                            ta4testdata_temp = JSON.parse(data[0].ta4testdata);
                        }
                        while (!Array.isArray(ta4testdata_temp)) {
                            ta4testdata_temp = JSON.parse(ta4testdata_temp);
                        }
                        if (typeof (ta4testdata_temp) !== "undefined" && ta4testdata_temp !== null) {
                            var test;
                            test = ta4testdata_temp.filter(function (item) {
                                if (item.type === "before") {
                                    return item;
                                }
                            });
                            if (test.length > 0) {
                                if (typeof (test[0].data.ta4ai_info_vcb) !== "undefined") {
                                    ta0vcbbrand = test[0].data.ta4ai_info_vcb;
                                }
                                if (typeof (test[0].data.ta4ai_meter_cable) !== "undefined" && typeof (test[0].data.ta4ai_meter_box) !== "undefined") {
                                    if (test[0].data.ta4ai_meter_cable === "ac") {
                                        ta4wiringtype = ta4wiringtype + "(Armoured Cable)";
                                    }
                                    if (test[0].data.ta4ai_meter_cable === "pvc") {
                                        ta4wiringtype = ta4wiringtype + "(PVC Conductor in PIPE)";
                                    }
                                    if (test[0].data.ta4ai_meter_box === "ctpt") {
                                        ta4wiringtype = ta4wiringtype + " + (Direct to CT & PT)";
                                    }
                                    if (test[0].data.ta4ai_meter_box === "junb") {
                                        ta4wiringtype = ta4wiringtype + " + (Through Junction Box)";
                                    }
                                }
                                if (typeof (test[0].data.ta4ai_info_gear) !== "undefined") {
                                    ta0sgear = test[0].data.ta4ai_info_gear;
                                }
                                // setting value to workorder
                                this.items.json.ta0vcbbrand = ta0vcbbrand;
                                this.items.json.ta4wiringtype = ta4wiringtype;
                                this.items.json.ta0sgear = ta0sgear;
                            }
                        }
                        if ((typeof (ta0vcbbrand) !== "undefined" && ta0vcbbrand !== null && ta0vcbbrand !== "") &&
                            (typeof (ta4wiringtype) !== "undefined" && ta4wiringtype !== null && ta4wiringtype !== "") &&
                            (typeof (ta0sgear) !== "undefined") && ta0sgear !== null && ta0sgear !== "") {
                            break;
                        }
                    }
                }
            }
        }
    };
    SealServiceDetailsPage.prototype.checkUserStatus = function () {
        if (typeof (this.itemsOri.json.ta0wouserstatus) !== "undefined" && this.itemsOri.json.ta0wouserstatus !== null && this.itemsOri.json.ta0wouserstatus !== "") {
            var status = this.itemsOri.json.ta0wouserstatus;
            var MITS = status.filter(function (statusItem) {
                return statusItem.ta0status === "MITS";
            });
            var MITSNMRPM = status.filter(function (statusItem) {
                return statusItem.ta0status === "MRPM";
            });
            var MITC = status.filter(function (statusItem) {
                return statusItem.ta0status === "MITC";
            });
            var MEIR = status.filter(function (statusItem) {
                return statusItem.ta0status === "MEIR";
            });
            var NMIR = status.filter(function (statusItem) {
                return statusItem.ta0status === "NMIR";
            });
            var MSOK = status.filter(function (statusItem) {
                return statusItem.ta0status === "MSOK";
            });
            // if (MITS.length > 0 || MSOK.length > 0 || MITC.length > 0 || MEIR.length > 0 || NMIR.length > 0) {
            //   this.hide_buttonCompliance = true;
            // } else {
            //   this.hide_buttonCompliance = false;
            // }
        }
    };
    /**
     * Reason: Method to navigate Team Members page.
     * Created: Alif (17/05/2019)
     */
    SealServiceDetailsPage.prototype.openPageTeamMembers = function () {
        var _this = this;
        console.log("Go to Team Members Page..");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealTeamMembersPage", _this.items);
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    /**
     * Reason: Method to call List of Team Members.
     * Created: Alif (17/05/2019)
     */
    SealServiceDetailsPage.prototype.getLabourDetails = function () {
        // if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.globel.checkNetwork() || DeviceConstants.NETWORK_NONE === this.globel.checkNetwork())) {
        //   // this.gf.displayToast("Cannot retrieve the data because no network.");
        // } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {
        //   cordova.plugins.MobileSignal.getSignalStrength((data) => {
        //     console.log('singnal strength login page : ' + this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + this.gf.findSignalStrength());
        //     if (this.gv.deviceSignal <= data) {
        //       this.dataService.fetchLaborDetails().then(results => {
        //         var respResult: any = results;
        //         this.listOfMembers = respResult.respObject;
        //         for (var i = 0; i < this.listOfMembers.length; i++) {
        //           this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
        //         }
        var _this = this;
        //         // After complete updating saving data..
        //         this.getSavedLabourDetails();
        //       });
        //     } else {
        //       // this.gf.displayToast("Cannot retrieve the data because network to low.");
        //     }
        //   });
        // } else {
        //   this.dataService.fetchLaborDetails().then(results => {
        //     var respResult: any = results;
        //     this.listOfMembers = respResult.respObject;
        //     for (var i = 0; i < this.listOfMembers.length; i++) {
        //       this.listOfMembers[i].compositeName = this.listOfMembers[i].laborcode + ' ( ' + this.listOfMembers[i].ta0laborname + ' ) ';
        //     }
        //     // After complete updating saving data..
        //     this.getSavedLabourDetails();
        //   });
        // }
        console.log('Trigger this.jsonStoreCrud.getAllRecord');
        this.jsonStoreCrud.getAllRecord(__WEBPACK_IMPORTED_MODULE_8__pojo_commonEnum_Domains__["a" /* Domains */].TeamMembers).then(function (results) {
            console.log("------>Results >>> " + JSON.stringify(results));
            var data = results;
            var details;
            console.log('data size : ' + data.length);
            for (var i = 0; i < data.length; i++) {
                _this.listOfMembers.push(data[i].json);
            }
            console.log('listOfMembers size : ' + _this.listOfMembers.length);
            console.log('listOfMembers size : ' + JSON.stringify(_this.listOfMembers));
            for (var i = 0; i < _this.listOfMembers.length; i++) {
                _this.listOfMembers[i].compositeName = _this.listOfMembers[i].laborcode + ' ( ' + _this.listOfMembers[i].ta0laborname + ' ) ';
            }
            console.log('listOfMembers size : ' + JSON.stringify(_this.listOfMembers));
            // After complete updating saving data..
            _this.getSavedLabourDetails();
        });
    };
    /**
     * Reason: Method to call saved List of Team Members.
     * Created: Alif (21/05/2019)
     */
    SealServiceDetailsPage.prototype.getSavedLabourDetails = function () {
        var _this = this;
        if (typeof (this.items.json.labtrans) !== 'undefined' && this.items.json.labtrans !== null && this.items.json.labtrans !== '') {
            this.items.json.loc_labtrans = [];
            var temp_member = this.ta4members;
            if (this.items.json.labtrans.length > 0) {
                for (var i = 0; i < this.ta4members.length; i++) {
                    // Getting value from the list of members.
                    var data = this.listOfMembers.filter(function (item) {
                        return item.laborcode === _this.ta4members[i];
                    });
                    if (data.length > 0) {
                        // Create class for member object.
                        var member_x = {
                            laborcode: null,
                            compositeName: null,
                            transtype: null
                        };
                        member_x.laborcode = data[0].laborcode;
                        member_x.compositeName = data[0].compositeName;
                        if (data[0].laborcode === this.items.json.labtrans[i].laborcode) {
                            member_x.transtype = this.items.json.labtrans[i].transtype;
                        }
                        this.items.json.loc_labtrans.push(member_x);
                    }
                }
                // Sending value to the component
                this.ta4members = this.items.json.loc_labtrans;
                console.log('this.ta4members  : ' + JSON.stringify(this.ta4members));
                console.log('this.ta4members  : ' + this.ta4members.length);
            }
        }
        else {
            this.items.json.labtrans = [];
        }
    };
    /**
     * Reason   : Method to collect data labtrans.
     * Created  : 17-06-2019 (Alif)
     */
    SealServiceDetailsPage.prototype.checkingLabTrans = function (value) {
        console.log('Inside checkingLabTrans');
        // Setting just saving local. not yet data from DB.
        this.ta4members = value;
        console.log('data : ' + JSON.stringify(this.ta4members));
        console.log('size : ' + this.ta4members.length);
    };
    /**
     * Reason: Method to put List of Team Members in array.
     * Created: Alif (21/05/2019)
     */
    SealServiceDetailsPage.prototype.selectedTeamMembers = function (data) {
        if (typeof (data) !== "undefined" && data !== null && data !== "") {
            if (data.value.length > 0) {
                this.items.json.loc_labtrans = [];
                this.items.json.labtrans = [];
                for (var i = 0; i < data.value.length; i++) {
                    // Create class for member object
                    var member_x = {
                        laborcode: null,
                        compositeName: null,
                    };
                    member_x.laborcode = data.value[i].laborcode;
                    member_x.compositeName = data.value[i].compositeName;
                    this.items.json.loc_labtrans.push(member_x);
                    var member_y = {
                        laborcode: null,
                        transtype: null
                    };
                    member_y.laborcode = data.value[i].laborcode;
                    member_y.transtype = data.value[i].transtype;
                    this.items.json.labtrans.push(member_y);
                }
                // Remove label colour
                this.validateMembers = false;
                this.buttonForServiceExecution = false;
            }
            else {
                this.validateMembers = true;
                this.buttonForServiceExecution = true;
            }
        }
        else {
            this.validateMembers = true;
            this.buttonForServiceExecution = true;
        }
        console.log("ta4members: " + JSON.stringify(this.items.json.labtrans));
    };
    SealServiceDetailsPage.prototype.setLoadingText = function (text) {
        var elem = document.querySelector("div.loading-wrapper div.loading-content");
        if (elem)
            elem.innerHTML = text;
    };
    /**
     * Reason   : Method to clear value input for disconnection date.
     * Created  : Alif (01.07.2019)
     */
    SealServiceDetailsPage.prototype.clearInputDisconnectedDateValue = function () {
        this.tempDisDate = "";
        this.items.json.ta0plandiscondate = "";
    };
    /**
     * Created: Ameer (18/7/2019)
     * Description: Compliance Checking
     */
    SealServiceDetailsPage.prototype.complianceValidation = function () {
        var _this = this;
        var userStatus = this.items.json.ta0wouserstatus;
        if (typeof (userStatus) !== "undefined" && userStatus !== null && userStatus !== "") {
            var MITS = void 0;
            var MEIR = void 0;
            var MITC = void 0;
            var MSOK = void 0;
            MITS = userStatus.filter(function (statusItem) {
                return statusItem.ta0status === "MITS";
            });
            MITC = userStatus.filter(function (statusItem) {
                return statusItem.ta0status === "MITC";
            });
            MEIR = userStatus.filter(function (statusItem) {
                return statusItem.ta0status === "MEIR";
            });
            MSOK = userStatus.filter(function (statusItem) {
                return statusItem.ta0status === "MSOK";
            });
            if (this.items.json.hasOwnProperty('complaince')) {
                if (typeof (this.items.json.compliance_list) !== 'undefined') {
                    var inspection_test = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Inspection and Testing";
                    });
                    if (typeof (inspection_test) !== 'undefined') {
                        if (inspection_test.length > 1) {
                            for (var a = 0; a < inspection_test.length; a++) {
                                inspection_test.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var inspection = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Installation Inspection";
                    });
                    if (typeof (inspection) !== 'undefined') {
                        if (inspection.length > 1) {
                            for (var a = 0; a < inspection.length; a++) {
                                inspection.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var evidence = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Evidence collection";
                    });
                    if (typeof (evidence) !== 'undefined') {
                        if (evidence.length > 1) {
                            for (var a = 0; a < evidence.length; a++) {
                                evidence.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var cessation = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Supply Cessation";
                    });
                    if (typeof (cessation) !== 'undefined') {
                        if (cessation.length > 1) {
                            for (var a = 0; a < cessation.length; a++) {
                                cessation.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var formA = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Form A Staff";
                    });
                    if (typeof (formA) !== 'undefined') {
                        if (formA.length > 1) {
                            for (var a = 0; a < formA.length; a++) {
                                formA.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var formACust = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Form A Customer";
                    });
                    if (typeof (formACust) !== 'undefined') {
                        if (formACust.length > 1) {
                            for (var a = 0; a < formACust.length; a++) {
                                formACust.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    var pred = this.items.json.compliance_list.filter(function (item) {
                        return item.name === "Prejudice";
                    });
                    if (typeof (pred) !== 'undefined') {
                        if (pred.length > 1) {
                            for (var a = 0; a < pred.length; a++) {
                                pred.splice(0, a + 1);
                                break;
                            }
                        }
                    }
                    if (MSOK.length > 0) {
                        if (inspection_test == false) {
                            var message = "Inspection and Testing";
                            var confirm_1 = this.alertCtrl.create({
                                title: 'Warning Message',
                                message: 'Do you want proceed without complete compliance ' + message,
                                buttons: [{
                                        text: 'Cancel',
                                        handler: function () {
                                            _this.validationServiceExecution();
                                        }
                                    }]
                            });
                            confirm_1.present();
                        }
                        else {
                            var message = "Inspection and Testing";
                            var confirm_2 = this.alertCtrl.create({
                                title: 'Warning Message',
                                message: 'Do you want proceed without complete compliance ' + message,
                                buttons: [{
                                        text: 'Cancel',
                                        handler: function () {
                                            _this.validationServiceExecution();
                                        }
                                    }]
                            });
                            confirm_2.present();
                        }
                    }
                    else if (MITC.length > 0) {
                        var message = void 0;
                        if (inspection_test == false || formA == false || formACust == false || inspection == false || evidence == false) {
                            if (inspection_test == false) {
                                message = 'Inspection and Testing,';
                            }
                            if (formA == false) {
                                message += ' Form A Staff,';
                            }
                            if (formACust == false) {
                                message += ' Form A Customer,';
                            }
                            if (inspection == false) {
                                message += ' Inspection,';
                            }
                            if (evidence == false) {
                                message += ' Evidence Collection,';
                            }
                            var confirm_3 = this.alertCtrl.create({
                                title: 'Warning Message',
                                message: 'Do you want proceed without complete compliance ' + message,
                                buttons: [{
                                        text: 'Cancel',
                                        handler: function () {
                                            _this.validationServiceExecution();
                                        }
                                    }]
                            });
                            confirm_3.present();
                        }
                    }
                    else if (MITS.length > 0) {
                        if (inspection_test == false || inspection == false || evidence == false) {
                            var message = void 0;
                            if (inspection_test == false) {
                                message = 'Inspection and Testing,';
                            }
                            if (inspection == false) {
                                message += ' Inspection,';
                            }
                            if (evidence == false) {
                                message += ' Evidence Collection,';
                            }
                            var confirm_4 = this.alertCtrl.create({
                                title: 'Warning Message',
                                message: 'Do you want proceed without complete compliance ' + message,
                                buttons: [{
                                        text: 'Cancel',
                                        handler: function () {
                                            _this.validationServiceExecution();
                                        }
                                    }]
                            });
                            confirm_4.present();
                        }
                    }
                    else {
                        this.validationServiceExecution();
                    }
                }
            }
            else if (MITS.length > 0 || MITC.length > 0 || MSOK.length > 0) {
                var confirm_5 = this.alertCtrl.create({
                    title: 'Warning Message',
                    message: 'Do you want proceed without complete compliance? ',
                    buttons: [{
                            text: 'Cancel',
                            handler: function () {
                                _this.validationServiceExecution();
                            }
                        }]
                });
                confirm_5.present();
            }
        }
    };
    /**
     * Created: Ameer (1/8/2019)
     * Description: Checking for duplicate labor code
     */
    SealServiceDetailsPage.prototype.duplicateLabour = function () {
        var _this = this;
        var labourCode = {};
        var labourCodeVal = [];
        if (typeof (this.items.json.labtrans) !== "undefined" && this.items.json.labtrans !== null && this.items.json.labtrans !== "undefined") {
            this.items.json.labtrans.filter(function (item) {
                if (labourCode[item.laborcode]) {
                    return false;
                }
                labourCode[item.laborcode] = true;
                labourCodeVal.push(item.laborcode);
                _this.checkingLabTrans(labourCodeVal);
                return true;
            });
        }
    };
    /**
     * Description  : Method to call modal for meter information.
     * Created      : Alif (12.09.2019)
     */
    SealServiceDetailsPage.prototype.openMeterInformationModal = function () {
        var _this = this;
        console.log("open meter information modal page..");
        var myModalOptions = {
            enableBackdropDismiss: true
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__info_modal_info_modal__["a" /* InfoModalPage */], { items: this.itemsOri }, myModalOptions);
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (typeof (data.items) !== "undefined") {
                if (typeof (_this.itemsOri) !== "undefined") {
                    _this.items = JSON.parse(JSON.stringify(data.items));
                    _this.itemsOri = JSON.parse(JSON.stringify(data.items));
                }
            }
        });
        modal.present();
    };
    /**
     * Description  : Method to preview the pdf for BPM & IT
     * Created      : Alif (13.09.2019)
     */
    SealServiceDetailsPage.prototype.previewPDF = function (category) {
        var _this = this;
        console.log("preview pdf : " + category);
        var loading = this.loadingCtrl.create({
            content: "Generating..",
        });
        loading.present();
        this.gf.loadingTimerDownload(loading);
        this.dataService.saveDataToGeneratePdf(this.itemsOri.json.wonum, category).then(function (results) {
            // declare variables
            var res;
            res = results;
            // Checking the status
            if (res.processStatus === 'success') {
                // Checking category@
                if (category === "BPM") {
                    // filtering for BPM
                    var url_raw = res.respObject.filter(function (item) {
                        return item.describedBy.docType === "BPM";
                    });
                    var url = [];
                    for (var i = 0; i < url_raw.length; i++) {
                        if (typeof (url_raw[i].describedBy.href) && url_raw[i].describedBy.href !== null && url_raw[i].describedBy.href !== "") {
                            // remove "/meta" in the url
                            var url_tmp = url_raw[i].describedBy.href.replace("/meta", "");
                            url_raw[i].describedBy.href = url_tmp + '?_lid=' + _this.gv.username + '&_lpwd=' + _this.gv.password;
                            url.push(url_raw[i]);
                        }
                    }
                    if (url.length > 0) {
                        // this.gf.displayToast("URL: " + url[0].describedBy.href);
                        var target = "_blank";
                        _this.iab.create(url[0].describedBy.href, target, _this.options);
                    }
                    else {
                        _this.gf.displayToast("PDF file is not found..");
                    }
                }
                else if (category === "IT") {
                    // filtering for IT (Image Template)
                    var url_raw = res.respObject.filter(function (item) {
                        return item.describedBy.docType === "IT";
                    });
                    var url = [];
                    for (var i = 0; i < url_raw.length; i++) {
                        if (typeof (url_raw[i].describedBy.href) && url_raw[i].describedBy.href !== null && url_raw[i].describedBy.href !== "") {
                            // remove "/meta" in the url
                            var url_tmp = url_raw[i].describedBy.href.replace("/meta", "");
                            url_raw[i].describedBy.href = url_tmp + '?_lid=' + _this.gv.username + '&_lpwd=' + _this.gv.password;
                            url.push(url_raw[i]);
                        }
                    }
                    if (url.length > 0) {
                        // this.gf.displayToast("URL: " + url[0].describedBy.href);
                        var target = "_blank";
                        _this.iab.create(url[0].describedBy.href, target, _this.options);
                    }
                    else {
                        _this.gf.displayToast("PDF file is not found..");
                    }
                }
                // dismiss loading.
                loading.dismiss();
                // Check and Validate PDF Form
                console.log('Trigger checkingValidateForm');
                _this.checkingValidateForm().then(function () {
                    console.log('Trigger checkBpmForm : ' + _this.checkBpmForm);
                    console.log('Trigger checkImageTemplate : ' + _this.checkImageTemplate);
                    // Checking Indicator
                    if (_this.checkBpmForm == true && _this.checkImageTemplate == true) {
                        _this.buttonForServiceExecution = false;
                    }
                    else if (_this.checkBpmForm == false && _this.checkImageTemplate == true) {
                        _this.buttonForServiceExecution = true;
                    }
                    else if (_this.checkBpmForm == true && _this.checkImageTemplate == false) {
                        _this.buttonForServiceExecution = true;
                    }
                    else {
                        _this.buttonForServiceExecution = true;
                    }
                    console.log('Trigger buttonForServiceExecution : ' + _this.buttonForServiceExecution);
                });
            }
            else {
                _this.gf.displayToast("Generate PDF is failed. Please check and try again..");
                // dismiss loading.
                loading.dismiss();
            }
            // dismiss loading.
            loading.dismiss();
        }).catch(function (error) {
            _this.gf.displayToast("ERROR : " + error);
            // dismiss loading.
            loading.dismiss();
        });
    };
    /**
     * Description: Method to open action sheet.
     * Created: Alif (23.09.2019)
     */
    SealServiceDetailsPage.prototype.presentActionSheet = function () {
        var _this = this;
        console.log("Access presentActionSheet");
        // Online
        if (!this.gv.testMobile) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Generate PDF files',
                buttons: [
                    {
                        text: 'Inspection Form',
                        handler: function () {
                            console.log('Inspection Form clicked');
                            _this.previewPDF('BPM');
                        }
                    },
                    {
                        text: 'Image Template',
                        handler: function () {
                            console.log('Image Template clicked');
                            _this.previewPDF('IT');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            this.gf.warningAlert("PDF Generation", "Generate pdf required internet connection. <br>Please try again later!", "Close");
        }
    };
    SealServiceDetailsPage.prototype.openAttachmentPhoto = function () {
        var _this = this;
        console.log("enter to open page attachment..");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            var newRootNav = _this.appCtrl.getRootNavById("n4");
            newRootNav.push("SealPhotoAttachmentPage", { wonum: _this.items.json.wonum });
            loading.dismiss();
        });
    };
    /**
     * Reason   : To check/validation Image Template and BPM form in Maxmimo..
     * Created  : Alif (01/07/2020)
     */
    SealServiceDetailsPage.prototype.checkingValidateForm = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log("enter to check/validate image template & bpm form..");
            // Online
            if (!_this.gv.testMobile) {
                var wonum = JSON.parse(_this.items.json.wonum);
                // Start loading.
                _this.loading = _this.loadingCtrl.create({
                    content: 'Checking...'
                });
                if (_this.loading._detached) {
                    _this.loading.present();
                }
                // this.gf.loadingTimerDownload(this.loading);
                _this.gf.refreshHeaderWorkOrder(wonum).then(function (results) {
                    var respResult;
                    respResult = results;
                    if (typeof (respResult) !== "undefined") {
                        if (__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                            var updatedDetails;
                            updatedDetails = JSON.parse(JSON.stringify(respResult.respObject));
                            // console.log("RESULTS: " + JSON.stringify(updatedDetails));
                            // Sending the updated data into json.
                            var data = updatedDetails;
                            // Updated attachment counter.
                            // console.log(' doclinks  : ' + this.items.json.docLinksL);
                            if (typeof (data.docLinksL) !== 'undefined') {
                                // Updated loc_show attribute to show the image because after update image not showing.
                                var bpm = data.docLinksL.filter(function (item) {
                                    return item.describedBy.docType === "BPM";
                                });
                                var imageTemplate = data.docLinksL.filter(function (item) {
                                    return item.describedBy.docType === "IT";
                                });
                                console.log("BPM form count : " + bpm.length);
                                console.log("IT form count : " + imageTemplate.length);
                                if (bpm.length > 0 && imageTemplate.length > 0) {
                                    _this.checkBpmForm = true;
                                    _this.checkImageTemplate = true;
                                }
                                else if (bpm.length > 0) {
                                    _this.checkBpmForm = true;
                                    _this.checkImageTemplate = false;
                                }
                                else if (imageTemplate.length > 0) {
                                    _this.checkImageTemplate = true;
                                    _this.checkBpmForm = false;
                                }
                                else {
                                    _this.checkBpmForm = false;
                                    _this.checkImageTemplate = false;
                                }
                                // Edited : Alif (01-07-2020) 
                                for (var i = 0; i < data.docLinksL.length; i++) {
                                    var photoDetail = data.docLinksL[i];
                                    photoDetail.describedBy.loc_show = true;
                                    photoDetail.describedBy.loc_photoVersion = 'old';
                                }
                                data.loc_attachmentCount = JSON.parse(JSON.stringify(data.docLinksL.length));
                                _this.items.json.docLinksL = JSON.parse(JSON.stringify(data.docLinksL));
                                _this.items.json.loc_attachmentCount = JSON.parse(JSON.stringify(data.docLinksL.length));
                                /** Copy Clone into Original */
                                _this.itemsOri = JSON.parse(JSON.stringify(_this.items));
                                _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
                            }
                        }
                        else {
                            _this.gf.displayToast(respResult.description);
                        }
                    }
                    if (!_this.loading._detached) {
                        _this.loading.dismiss();
                    }
                    resolve();
                }, function (error) {
                    _this.gf.displayToast("ERROR : " + error);
                    if (!_this.loading._detached) {
                        _this.loading.dismiss();
                    }
                    resolve();
                });
            }
        });
    };
    /**
     * Validation for TECO process.
     * Created: Alif (03/07/2020)
     */
    SealServiceDetailsPage.prototype.validationTeco = function () {
        if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && this.items.json.ta0sncode !== 'S202') {
        }
        else {
        }
        // Checking condition for GPS coordinate is empty or not populate from maximo. (LPC/SEAL)
        if (this.buttonForServiceExecution == false) {
            if (typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined") {
                this.buttonForServiceExecution = true;
                this.validateGPS = true;
                this.items.json.status = "INPRG";
                this.items.json.status_description = "In Progress";
                this.woStatus = "INPRG";
                this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
                return true;
            }
            else if ((this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN && this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) && (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && this.items.json.ta0sncode !== 'S202') && (typeof (this.items.json.wol4) === "undefined" || this.items.json.wol4 === "" || this.items.json.wol4 === null)) {
                // Disabled Save Button
                this.buttonForServiceExecution = true;
                this.finishDateTimeIndicator = true;
                this.items.json.status = "INPRG";
                this.items.json.status_description = "In Progress";
                this.woStatus = "INPRG";
                this.gf.warningAlert("Finish Date/Time", "Finish Date/Time is missing. <br>Please check again to continue..!", "Close");
                return true;
            }
            else if (typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) {
                // this.membersIndicator = false;
                this.validateMembers = true;
                this.gf.warningAlert('Team Members on Site', '<p>Please choose team members on site to continue..!</p>', 'Close');
                return true;
            }
            else if ((this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN && this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) && (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && this.items.json.ta0sncode !== 'S202') && ((typeof (this.items.json.labtrans) === "undefined" || this.items.json.labtrans.length === 0) && (this.checkBpmForm == false && this.checkImageTemplate == false))) {
                // this.items.json.status = "INPRG";
                // this.items.json.status_description = "In Progress";
                // this.woStatus = "INPRG";
                // Disabled/Enabled Save Button
                this.buttonForServiceExecution = true;
                this.previewBtn = true;
                this.gf.warningAlert("PDF Generation", "List's of team member or PDF form is missing. <br>Please check again to continue..!", "Close");
                return true;
            }
            else if ((this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN && this.items.json.worktype !== __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) && (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO && this.items.json.ta0sncode !== 'S202') && (this.checkBpmForm == false && this.checkImageTemplate == false)) {
                // this.items.json.status = "INPRG";
                // this.items.json.status_description = "In Progress";
                // this.woStatus = "INPRG";
                // Disabled/Enabled Save Button
                this.buttonForServiceExecution = true;
                this.previewBtn = true;
                this.gf.warningAlert("PDF Generation", "PDF form is missing. <br>Please check again to continue..!", "Close");
                return true;
            }
            // Checking Compliance Form PDF
            // else {
            //   this.complianceValidation();
            //   return false;
            // }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", Object)
    ], SealServiceDetailsPage.prototype, "slides", void 0);
    SealServiceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-service-details',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-service-details/seal-service-details.html"*/'<!--\n/* \n * Modification History :\n * Date         version     Modified By   Method    Description\n * 2021-03-25   009         Andy Chang    -         update data of Work Done By using workorder.lead\n * \n */\n -->\n<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>My Assigned Work</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull down to download">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-item>\n          <ion-label style="font-size: 19px" color="primary">Seal Service Cover </ion-label>\n          <ion-toggle (ionChange)="checkServiceCover()" checked="checkServiceCover"></ion-toggle>\n        </ion-item>\n      </ion-col>\n      <!-- <ion-col col-12 col-sm-12 col-md-12 *ngIf="snCodeCheck">\n        <ion-checkbox [(ngModel)]="req_inspection" style="float: right;" (click)="inspectionRequired()"></ion-checkbox>\n        &nbsp; <span style="float: right; padding-right: 10px;"> Required Inspection </span>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row style="margin-left: 15px;" *ngIf="snCodeCheck">\n      <ion-col>\n        <ion-item no-lines style="border: 0.55px solid lightgrey;border-radius: 10px;background: ghostwhite;">\n          <ion-icon name="construct" item-start></ion-icon>\n          <ion-label color="primary">Required Inspection</ion-label>\n          <ion-checkbox [(ngModel)]="req_inspection" (click)="inspectionRequired()" item-end></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Service Order Number</ion-label>\n          <ion-input type="text" value="{{ items.json.wonum }} - {{ items.json.ta0bcrmnum }}" [readonly]="isReadonly">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>Report DateTime</ion-label>\n          <ion-input type="text"\n            value="{{ items.json.reportdate | date: gv.dateFormat  }}  {{ items.json.reportdate | date: gv.timeFormat  }} "\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>SN Code</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0sncode }} " [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>SN Description</ion-label>\n          <ion-input type="text" value="{{ sncodedesc }} " [readonly]="isReadonly"></ion-input>\n          <!--<ion-input type="text" value="{{ items.json.ta0sncodedesc }} " [readonly]="isReadonly"></ion-input>--->\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px; border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Last Bill Date</ion-label>\n          <ion-input type="text"\n            value="{{ items.json.ta0lastbilldate | date: gv.dateFormat || \'\' }} {{ items.json.ta0lastbilldate | date: gv.timeFormat || \'\' }}"\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>Type of Service Order</ion-label>\n          <ion-input type="text" value="{{ items.json.worktype  || \'\'}}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>Service Description</ion-label>\n          <ion-input type="text" value="{{ items.json.description }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>Pole Number</ion-label>\n          <ion-input type="text" maxlength="20" [(ngModel)]="items.json.ta0polenum"\n            value="{{ items.json.ta0polenum || \'\' }}" [disabled]="editField" placeholder="Please enter value">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>SR Number</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0srnum || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>CRM Doc Type</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0crmdoctype || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>CRM Appointment Date</ion-label>          \n          <ion-input type="text" value="{{ items.json.ta0crmapptdate | date: gv.dateFormat || \'\' }} {{ items.json.ta0crmapptdate | date: gv.timeFormat || \'\' }}"\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>      \n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>No of Element</ion-label>\n          <!-- <ion-input type="text" [(ngModel)]="items.json.ta0elementnum" [readonly]="editableElementNFeeder"></ion-input> -->\n          <ion-select [(ngModel)]="items.json.ta0elementnum" interface="popover">\n            <ion-option value=""></ion-option>\n            <ion-option value="2">2</ion-option>\n            <ion-option value="3">3</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 *ngIf="showServiceCover">\n        <ion-item>\n          <ion-label color="primary" stacked>No of feeder</ion-label>\n          <ion-input type="text" [(ngModel)]="items.json.ta0feedernum" [readonly]="editableElementNFeeder">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="showServiceCover">\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 100px" stacked>No of Suppliers</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0suppliers || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="showServiceCover && items.json.worktype === soTypes.ZUDN">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>New Rate Category</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0newratecategory || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary" stacked>New Rate Category Description</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0newratecategorydesc || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Installation Voltage</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0installationvoltage == \'01\' ? \'Single Phase\' :\n            items.json.ta0installationvoltage == \'02\' ? \'3 Phase\' :\n            items.json.ta0installationvoltage == \'03\' ? \'400V LPC\' : \n            items.json.ta0installationvoltage == \'04\' ? \'6.6kV LPC\' : \n            items.json.ta0installationvoltage == \'05\' ? \'11kV\' :\n            items.json.ta0installationvoltage == \'06\' ? \'22kV\' :\n            items.json.ta0installationvoltage == \'07\' ? \'33kV\' :\n            items.json.ta0installationvoltage == \'08\' ? \'66kV\' :\n            items.json.ta0installationvoltage == \'09\' ? \'132kV\' :\n            items.json.ta0installationvoltage == \'10\' ? \'275kV\' : \n            items.json.ta0installationvoltage == \'11\' ? \'500kV\' : \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf="items.json.worktype === soTypes.ZUDN" col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>New Voltage</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0newvoltage == \'01\' ? \'Single Phase\' :\n                  items.json.ta0newvoltage == \'02\' ? \'3 Phase\' : \n                  items.json.ta0newvoltage == \'03\' ? \'400V LPC\' : \n                  items.json.ta0newvoltage == \'04\' ? \'6.6kV LPC\' : \n                  items.json.ta0newvoltage == \'05\' ? \'11kV\' :\n                  items.json.ta0newvoltage == \'06\' ? \'22kV\' :\n                  items.json.ta0newvoltage == \'07\' ? \'33kV\' :\n                  items.json.ta0newvoltage == \'08\' ? \'66kV\' :\n                  items.json.ta0newvoltage == \'09\' ? \'132kV\' :\n                  items.json.ta0newvoltage == \'10\' ? \'275kV\' : \n                  items.json.ta0newvoltage == \'11\' ? \'500kV\' : \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="showServiceCover">\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Rate</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0ratecategory || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>Rate Category Description</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0ratecategorydesc || \'\' }}" [readonly]="isReadonly">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>No. RU</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0mru || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>No. RU Description</ion-label>\n          <ion-input type="text" [(ngModel)]="items.json.ta0mrudesc" value="{{ items.json.ta0mrudesc || \'\' }}"\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Meter Location</ion-label>\n          <ion-select [(ngModel)]="items.json.ta0dllocation" interface="alert" placeholder="Please select value">\n            <ion-option *ngFor="let alnVolt of alnitem;" [value]="alnVolt.json.value"\n              [selected]="items.json.ta0dllocation == alnVolt.json.value" [disabled]="editField">\n              {{ alnVolt.json.value }} - {{ alnVolt.json.description }}\n            </ion-option>\n          </ion-select>\n          <!--<ion-input type="text"   [(ngModel)]="items.json.ta0dlllocation"  value="{{ items.json.ta0dlllocation || \'\' }}"  (click)="getDlLocation();"></ion-input>-->\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>Current Ratio</ion-label>\n          <ion-input type="text" maxlength="40" [(ngModel)]="currentRatio" value="{{ currentRatio || \'\' }}"\n            [readonly]="isReadonly" placeholder=""></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Device Location</ion-label>\n          <ion-input type="text" [(ngModel)]="items.json.ta0devicelocation"\n            value="{{ items.json.ta0devicelocation || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>Device Location Description</ion-label>\n          <ion-input type="text" maxlength="40" [(ngModel)]="items.json.ta0devicelocationdesc"\n            value="{{ items.json.ta0devicelocationdesc || \'\' }}" [disabled]="editField"\n            placeholder="Please Enter Value"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Signal Strength</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0signalstrength || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary" stacked>Key</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0key || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>No. RU</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0mru || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 >\n          <ion-item>\n            <ion-label color="primary" stacked>Meter Location</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0meter || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n    <div *ngIf="(items.json.worktype === \'ZISR\' || items.json.worktype === \'ZRCE\')">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Parent Wonum </ion-label>\n            <ion-input type="text" value="{{ items.json.origrecordid || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <!--ion-col col-12 col-sm-12 col-md-6 >\n            <ion-item>\n              <ion-label color="primary" stacked>Type of Premises</ion-label>\n              <ion-input type="text" value="{{ items.json.ta0premisetype || \'\' }}" [readonly]="isReadonly"></ion-input>\n            </ion-item>\n          </ion-col>-->\n      </ion-row>\n    </div>\n\n    <!--\n     * AMS and AMCG Validation to check Modem and SimCard is change or not...\n     * Editor Shandeep Kumar\n    -->\n    <div *ngIf="showServiceCover && amscheckcond">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>AMS</ion-label>\n            <ion-select [(ngModel)]="items.json.ta0ams" (ionChange)="getAMSData($event)" [disabled]="showAms"\n              placeholder="Please select value">\n              <ion-option [value]="" [selected]="amsVolt == \'\'"></ion-option>\n              <ion-option *ngFor="let amsVolt of amsstolevalue;" [value]="amsVolt"\n                [selected]="items.json.ta0ams === amsVolt">{{amsVolt}}</ion-option>\n            </ion-select>\n            <!-- <ion-input type="text" [(ngModel)]="items.json.ta0ams" value="{{ items.json.ta0ams || \'\' }}" maxlength="4" disabled="{{showAmsAmcg}}"></ion-input> -->\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary" stacked>AMCG</ion-label>\n            <ion-select [(ngModel)]="items.json.ta0amcg" [disabled]="showAmscg" placeholder="Please select value">\n              <ion-option *ngFor="let amscgVolt of amscgstolevalue;" [value]="amscgVolt"\n                [selected]="items.json.ta0amcg === amscgVolt">{{amscgVolt}}</ion-option>\n            </ion-select>\n            <!-- <ion-input type="text" [(ngModel)]="items.json.ta0amcg" value="{{ items.json.ta0amcg || \'\' }}" maxlength="4" disabled="{{showAmsAmcg}}"></ion-input> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Contractor Name</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0contractorname || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary" stacked>Contractor Phone No.</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0contractorphonenum || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Service Order Status</ion-label>\n          <ion-select [(ngModel)]="woStatus" (ionChange)="statusChange($event)"\n            [disabled]="loc_saveStatus ? \'false\' : \'true\'">\n            <ion-option value="APPR" disabled>APPR &nbsp;-&nbsp; APPROVED</ion-option>\n            <ion-option *ngIf="gv.employeetype !== \'EXECUTIVE\'" value="PENDTECO"\n              [disabled]="(woStatus == \'APPR\')? true : false">TECO &nbsp;-&nbsp; COMPLETE\n            </ion-option>\n            <ion-option *ngIf="gv.employeetype === \'EXECUTIVE\'" value="TECO"\n              [disabled]="(woStatus == \'APPR\')? true : false">TECO &nbsp;-&nbsp; COMPLETE\n            </ion-option>\n            <ion-option value="INPRG">INPRG &nbsp;-&nbsp; IN PROGRESS</ion-option>\n            <ion-option value="PENDKIV"\n              [disabled]="(items.json.worktype === \'ZISR\' || items.json.worktype === \'ZRCE\') && items.json.origrecordid !== \'\'">\n              KIV\n              &nbsp;-&nbsp; KIV</ion-option>\n            <ion-option value="PENDCLSD"\n              [disabled]="(items.json.worktype === \'ZISR\' || items.json.worktype === \'ZRCE\') && items.json.origrecordid !== \'\'">\n              CLSD\n              &nbsp;-&nbsp; CLOSE</ion-option>\n            <ion-option *ngIf="gv.employeetype === \'EXECUTIVE\'" value="COMP">COMP\n              &nbsp;-&nbsp; REVIEW</ion-option>\n            <!-- <ion-option value="PCBNT">PCBNT &nbsp;-&nbsp; NEXT TEAM</ion-option> -->\n            <!-- PSTSC: Pass to supervisor to complete (Alif - 13-03-2019) -->\n            <ion-option value="PSTSC">PSTSC &nbsp;-&nbsp; PASS TO SUPERVISOR TO COMPLETE</ion-option>\n            <ion-option *ngIf="items.json.ta0bcrmresponsestatus === \'E\'" value="PSTSV">PSTSV &nbsp;-&nbsp; Error Check\n              Next Team</ion-option>\n            <!-- Checking for bcrm Number is available or not... Shandeep Kumar... -->\n            <ion-option\n              *ngIf="(!items.json.ta0bcrmnum || (items.json.worktype === soTypes.ZISR || items.json.worktype === soTypes.ZRCE))"\n              value="CANCEL">CANCEL &nbsp;-&nbsp; CANCEL</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-sm-12 col-md-6\n        *ngIf="items.json.ta0installationvoltage <= \'03\' || (items.json.ta0installationvoltage > \'03\' && (items.json.worktype == soTypes.ZDCN || items.json.worktype == soTypes.ZRCN))">\n        <ion-row>\n          <ion-col>\n            <ion-item [ngClass]="(validatePhoto) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-label color="primary" stacked>Upload Photo</ion-label>\n              <ion-input type="text" placeholder="Upload Image" value="{{ items.json.loc_attachmentCount || \'0\' }} "\n                [readonly]="true">\n              </ion-input>\n              <ion-icon name="md-images" item-end color="primary" style="zoom: 1.2;" *ngIf="showButtonImage"\n                (click)="sealAttachment(\'photo\')"></ion-icon>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col col-12 col-sm-12 col-md-6\n        *ngIf="items.json.ta0installationvoltage > \'03\' && (items.json.worktype !== soTypes.ZDCN && items.json.worktype !== soTypes.ZRCN)">\n        <ion-row>\n          <ion-col>\n            <ion-item [ngClass]="(validatePhoto) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-label color="primary" stacked>Upload Photo</ion-label>\n              <ion-input type="text" placeholder="Upload Image" value="{{ items.json.loc_attachmentCount || \'0\' }} "\n                [readonly]="true">\n              </ion-input>\n              <ion-icon name="md-images" item-end color="primary" style="margin-right: 25px;zoom: 1.2;"\n                *ngIf="showButtonImage" (click)="sealAttachment(\'photo\')"></ion-icon>\n              <ion-icon name="md-photos" item-end color="primary" style="zoom: 1.2;" *ngIf="showButtonImage"\n                (click)="sealAttachment(\'pdiagram\')"></ion-icon>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="showServiceCover">\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Type of Installation Service</ion-label>\n          <ion-select [(ngModel)]="items.json.ta0installationservice" [disabled]="enableServiceTypeAndServiceStatus">\n            <ion-option value="OH">OG- OVERHEAD</ion-option>\n            <ion-option value="UG">UG- UNDERGROUND</ion-option>\n            <ion-option value="FW">FW- 5 FOOT AWAY</ion-option>\n          </ion-select>\n          <!-- <ion-input type="text" value="{{ items.json.ta0installationservice || \'\' }}" [readonly]="enableServiceTypeAndServiceStatus"></ion-input> -->\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Condition of Installation Service</ion-label>\n          <ion-select [(ngModel)]="items.json.ta0serviceflag" [disabled]="enableServiceTypeAndServiceStatus">\n            <ion-option value="true">Ready</ion-option>\n            <ion-option value="false">Not Ready</ion-option>\n          </ion-select>\n          <!-- <ion-input type="text" value="{{ items.json.ta0serviceflag || \'\' }}" [readonly]="enableServiceTypeAndServiceStatus"></ion-input> -->\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        *ngIf="items.json.worktype == soTypes.ZISO || items.json.worktype == soTypes.ZISP"\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Disconnection Date</ion-label>\n          <ion-input type="text" placeholder="Select Date" [value]="tempDisDate" [readonly]="true"\n            (ionChange)="disconnectionChanges()"></ion-input>\n          <ion-icon name="md-calendar" item-end color="primary" (click)="presentPopover($event, \'Calendar\', \'DCD\')"\n            style="margin-right: 25px;zoom: 1.2;"></ion-icon>\n          <ion-icon name="md-trash" item-end color="danger" (click)="clearInputDisconnectedDateValue()"\n            style="zoom: 1.2;"></ion-icon>\n        </ion-item>\n        <!-- <ion-col col-4 col-sm-12 col-md-4 style="text-align: right;" align-self-center>\n            <button ion-button color="primary" (click)="presentPopover($event, \'Calendar\', \'DCD\')">\n              <ion-icon ios="md-calendar" md="md-calendar"></ion-icon>\n            </button>\n            <button ion-button color="primary" (click)="clearInputDisconnectedDateValue()">\n              <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n            </button>\n          </ion-col> -->\n      </ion-col>\n      <ion-col col-md-6 *ngIf="items.json.worktype == soTypes.ZISO && items.json.ta0sncode === \'S202\'">\n        <ion-item>\n          <ion-label color="primary" stacked>Accumulative kWh - Proposed Reading</ion-label>\n          <ion-input type="number" [value]="main_meter_reg_reading" [readonly]="true"></ion-input>\n        </ion-item>\n      </ion-col>\n      <!-- Move into Document Number section below -->\n      <!--   <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;"\n        *ngIf="items.json.worktype == soTypes.ZDCN || items.json.worktype === soTypes.ZRCN">\n        <ion-item>\n          <ion-label stacked><b>Disconnection Doc</b></ion-label>\n          <ion-input type="text" [value]="items.json.ta0disconnectiondoc" [readonly]="true"></ion-input>\n        </ion-item>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item [ngClass]="(validateMembers) ? \'redHighlightText\' : \'blackHighlightText\'">\n          <ion-label color="primary" stacked>List of Team Members on site</ion-label>\n          <!-- <ion-input type="text" placeholder="Total Members" [value]="ta4members" [readonly]="true"></ion-input> -->\n          <select-searchable item-content [(ngModel)]="ta4members" [items]="listOfMembers" [isMultiple]="true"\n            itemValueField="laborcode" itemTextField="compositeName" [canSearch]="true"\n            placeholder="Choose while Service Order status \'TECO\' only.." [disabled]=" membersIndicator"\n            (onChange)="selectedTeamMembers($event)" okButtonText="Ok" resetButtonText="Clear">\n          </select-searchable>\n        </ion-item>\n        <!-- <ion-col col-10 col-sm-10 col-md-1 align-self-center>\n            <button ion-button color="primary" (click)="openPageTeamMembers()" [disabled]="true">\n              <ion-icon name="people"></ion-icon>\n            </button>\n          </ion-col> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item [ngClass]="(validateGPS) ? \'redHighlightText\' : \'blackHighlightText\'">\n          <ion-label color="primary" stacked>GPS Coordinate</ion-label>\n          <ion-input type="text" [readonly]="isReadonly"\n            value="{{ woserviceaddress.latitudey }} - {{ woserviceaddress.longitudex }} ( Accuracy : {{ woserviceaddress.referencepoint }} meter )">\n          </ion-input>\n          <ion-icon name="md-locate" item-end color="primary" style="zoom: 1.2;" *ngIf="disableButtonSelection"\n            (click)="locationCoordination()"></ion-icon>\n        </ion-item>\n        <!-- <ion-col col-12 col-sm-12 col-md-2 align-self-center style="text-align: right;" align-self-center>\n            <button ion-button (click)="locationCoordination()" *ngIf="disableButtonSelection">GPS </button>\n          </ion-col> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item *ngIf="woStatus != \'APPR\'" [ngClass]="(validateUserSts1) ? \'redHighlightText\' : \'blackHighlightText\'">\n          <ion-label color="primary" stacked>User Status</ion-label>\n          <!-- <ion-select [(ngModel)]="items.json.ta0userstatus1" interface="alert" multiple="true" data-limit="4" (ionChange)="userStatusDefaultChange($event, \'user1\')"\n                [ngClass]="(validateUserSts1) ? \'redHighlightText\' : \'blackHighlightText\'">\n                <ion-option (ionSelect)="userStatusChange($event)" *ngFor="let key of userStsGroupList; let i = index" \n                [disabled]="isDisabled(key.json.ta0kiv)"\n                value="{{key.json.ta0kiv}}">{{ key.json.ta0kiv }} - {{ key.json.description }} </ion-option>\n              </ion-select> -->\n          <ion-select [(ngModel)]="ta0wouserstatus" interface="alert" multiple="true" data-limit="4"\n            (ionChange)="userStatusDefaultChange($event, \'user1\')">\n            <ion-option (ionSelect)="userStatusChange($event)" *ngFor="let key of userStsGroupList; let i = index"\n              [disabled]="false" value="{{ key.ta0kiv }}" [selected]="key.ta0kiv === ta0wouserstatus">{{ key.ta0kiv ||\n              \'\'}} - {{ key.description}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n<ion-row>\n      <ion-col>\n        <ion-item (click)="openCrimplessSeal()">\n          <ion-label style="font-weight: bold;font-size: 16px;">\n            Crimpless Seal\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-slides pager #slides>\n      <ion-slide>\n        <ion-card>\n          <ion-card-header style="border-bottom: 0.55px solid #dadada;color: #2e2485;">\n            <strong text-uppercase>Customer Informations Section</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Account Number</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text"\n                    value="{{ items.json.ta0accountnum || \'\' }}" [readonly]="isReadonly">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Phone No</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text" value="{{ items.json.phone || \'\' }}"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Occupant Name</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text"\n                    value="{{ items.json.ta0bptenantname || \'\' }}" [readonly]="isReadonly">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Registered Customer Name</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text"\n                    value="{{ items.json.ta0bpname || \'\' }}" [readonly]="isReadonly">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12>\n                <ion-item *ngFor="let address of items.json.woserviceaddress;">\n                  <ion-label color="primary" stacked>Address</ion-label>\n                  <ion-textarea rows="4" type="text" value="{{ address.formattedaddress || \'\' }}"\n                    [readonly]="isReadonly" style="border-bottom: 1px solid #dadada;">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item>\n                  <ion-label color="primary" stacked>Area Code</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" color="secondary" placeholder="Area Code"\n                    value="{{ items.json.siteid || \'\' }}" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-8>\n                <ion-item>\n                  <ion-label color="primary" stacked>Area</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text" placeholder="Area"\n                    value="{{items.json.ta0locationdesc || \'\' }}" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item>\n                  <ion-label color="primary" stacked>Type of Premises</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text"\n                    value="{{ items.json.ta0premisetype || \'\' }}" [readonly]="isReadonly">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-8>\n                <ion-item>\n                  <ion-label color="primary" stacked>Type of Premises Description</ion-label>\n                  <ion-input style="border-bottom: 1px solid #dadada;" type="text"\n                    value="{{ items.json.ta0premisetypedesc || \'\' }}" [readonly]="isReadonly">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-4>\n                <ion-item no-lines>\n\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-8 text-right>\n                <button ion-button icon-start round outline color="primary" (click)="openMeterInformationModal()">\n                  <ion-icon name="md-speedometer"></ion-icon>\n                  Verification Device\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide *ngIf="items.json.worktype == soTypes.ZISO || items.json.worktype == soTypes.ZISP">\n        <ion-card>\n          <ion-card-header style="border-bottom: 0.55px solid #dadada;color: #2e2485;">\n            <strong text-uppercase>Anomaly & Corrective Action Section</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Customer Type</ion-label>\n                  <ion-select [(ngModel)]="items.json.ta0customertype" style="border-bottom: 1px solid #dadada;"\n                    (ionChange)="getCommonFacilities()" placeholder="-- Choose --">\n                    <ion-option [value]=""></ion-option>\n                    <ion-option *ngFor="let customer of customerDetails" [value]="customer"\n                      [selected]="items.json.ta0customertype === customer">{{ customer }}</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Premise Type</ion-label>\n                  <ion-input type="text" [(ngModel)]="items.json.ta4premisetyperemarks" placeholder="Enter value"\n                    style="border-bottom: 1px solid #dadada;">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Anomaly Main</ion-label>\n                  <ion-select [(ngModel)]="items.json.ta0anomalymain" style="border-bottom: 1px solid #dadada;"\n                    (ionChange)="getCommonFacilities()" [disabled]="anamolyMainCheck" placeholder="-- Choose --">\n                    <ion-option [value]=""></ion-option>\n                    <ion-option *ngFor="let anomalyMain of resultAnamolyMain" [value]="anomalyMain.json.value"\n                      [selected]="items.json.ta0anomalymain === anomalyMain.json.value">\n                      {{ anomalyMain.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Source of Inspection Code</ion-label>\n                  <ion-select [(ngModel)]="items.json.ta0sourcecode" style="border-bottom: 1px solid #dadada;"\n                    placeholder="-- Choose --">\n                    <ion-option [value]=""></ion-option>\n                    <ion-option *ngFor="let sourceCode of sourceCodes" [value]="sourceCode.json.value"\n                      [selected]="sourceCode.json.value === items.json.ta0sourcecode">\n                      {{ sourceCode.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Anomaly Category</ion-label>\n                  <ion-select [(ngModel)]="items.json.ta0anomalycategory" (ionChange)="getCommonFacilities()"\n                    [disabled]="anamolyCategoryCheck" style="border-bottom: 1px solid #dadada;"\n                    placeholder="-- Choose --">\n                    <ion-option [value]=""></ion-option>\n                    <ion-option *ngFor="let anamolyCategory of resultAnamolyCategory"\n                      [value]="anamolyCategory.json.value"\n                      [selected]="items.json.ta0anomalycategory === anamolyCategory.json.value">\n                      {{ anamolyCategory.json.description }}</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Initiative/ Preventive Code</ion-label>\n                  <ion-select [(ngModel)]="loc_ta0initprev" interface="popover" multiple="true"\n                    style="border-bottom: 1px solid #dadada;" placeholder="-- Choose --">\n                    <ion-option *ngFor="let initPrev of initPrevs" [value]="initPrev.json.value"\n                      [selected]="(loc_ta0initprev).includes(initPrev.json.value)">\n                      {{ initPrev.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Anomaly Type</ion-label>\n                  <ion-select [(ngModel)]="items.json.ta0anomalytype" [disabled]="anamolyTypeCheck"\n                    style="border-bottom: 1px solid #dadada;" placeholder="-- Choose --">\n                    <ion-option [value]=""></ion-option>\n                    <ion-option *ngFor="let anamolyType of resultAnamolyTypes" [value]="anamolyType.json.value"\n                      [selected]="anamolyType.json.value === items.json.ta0anomalytype">\n                      {{ anamolyType.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label color="primary" stacked>Corrective Code</ion-label>\n                  <ion-select [(ngModel)]="items.json.ta0correctivecode" style="border-bottom: 1px solid #dadada;"\n                    placeholder="-- Choose --">\n                    <ion-option [value]=""></ion-option>\n                    <ion-option *ngFor="let corrcode of alncorrectivecode" [value]="corrcode.json.value"\n                      [selected]="corrcode.json.value === items.json.ta0correctivecode">\n                      {{ corrcode.json.description }}\n                    </ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-sm-12 col-md-6 col-6>\n                <ion-item no-lines>\n                  <ion-label color="primary" stacked>Anomaly Remarks</ion-label>\n                  <ion-textarea type="textarea" style="border:1px solid #dadada; padding: 15px; margin-bottom: 15px;"\n                    rows="6" placeholder="Enter remarks here.." [(ngModel)]="items.json.ta4anomalyremarks"\n                    value="{{ items.json.ta4anomalyremarks }}">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n              <ion-col col-sm-12 col-md-6 col-6>\n                <ion-item no-lines>\n                  <ion-label color="primary" stacked>Corrective Action Remarks</ion-label>\n                  <ion-textarea type="textarea" style="border:1px solid #dadada; padding: 15px; margin-bottom: 15px;"\n                    rows="6" placeholder="Enter remarks here.." [(ngModel)]="items.json.ta4correctiveremarks"\n                    value="{{ items.json.ta4correctiveremarks }}">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n\n      <!-- Close (No need for PRODUCTION) -->\n      <!-- <ion-slide\n        *ngIf="items.json.ta0installationvoltage > \'03\' && (items.json.worktype == \'ZIST\' || items.json.worktype == \'ZISP\')">\n        <ion-card>\n          <ion-card-header style="background-color:cornflowerblue">\n            <div style="color: #000070">Additional Informations Section</div>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-row col-12 col-sm-12 col-md-12>\n              <ion-col>\n                <ion-segment [(ngModel)]="category">\n                  <ion-segment-button value="key">\n                    Key\n                  </ion-segment-button>\n                  <ion-segment-button value="info">\n                    Info CT, PT & S/Gear\n                  </ion-segment-button>\n                </ion-segment>\n              </ion-col>\n            </ion-row>\n            <div [ngSwitch]="category">\n              <span *ngSwitchCase="\'key\'">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label color="primary" stacked>Key - Standard</ion-label>\n                      <ion-select interface="popover" multiple="false" [(ngModel)]="ta4ai_key_standard"\n                        placeholder="Select value" style="border-bottom: 1px solid #dadada;">\n                        <ion-option value="Abloy Lama">Abloy Lama</ion-option>\n                        <ion-option value="Abloy Baru">Abloy Baru</ion-option>\n                        <ion-option value="Gere">Gere</ion-option>\n                        <ion-option value="No">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label color="primary" stacked>Key - Non Standard</ion-label>\n                      <ion-select interface="popover" multiple="false" [(ngModel)]="ta4ai_key_non_standard"\n                        placeholder="Select value" style="border-bottom: 1px solid #dadada;">\n                        <ion-option value="Yes">Yes</ion-option>\n                        <ion-option value="No">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label color="primary" stacked>Key - Stored By Customer</ion-label>\n                      <ion-select interface="popover" multiple="false" [(ngModel)]="ta4ai_key_customer"\n                        placeholder="Select value" style="border-bottom: 1px solid #dadada;">\n                        <ion-option value="Yes">Yes</ion-option>\n                        <ion-option value="No">No</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </span>\n\n              <span *ngSwitchCase="\'info\'">\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label stacked color="primary">Type of S/Gear at TNB P/E</ion-label>\n                      <ion-select interface="popover" multiple="false" placeholder="Select value"\n                        style="border-bottom: 1px solid #dadada;">\n                        <ion-option value="RMU">RMU</ion-option>\n                        <ion-option value="VCB">VCB</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label stacked color="primary">CT Meter Location</ion-label>\n                      <ion-select interface="popover" multiple="false" placeholder="Select value"\n                        style="border-bottom: 1px solid #dadada;">\n                        <ion-option value="Cons VCB">Cons VCB</ion-option>\n                        <ion-option value="TNB VCB">TNB VCB</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label stacked color="primary">PT Meter Location</ion-label>\n                      <ion-select interface="popover" multiple="false" placeholder="Select value"\n                        style="border-bottom: 1px solid #dadada;">\n                        <ion-option value="Cons VCB">Cons VCB</ion-option>\n                        <ion-option value="TNB VCB">TNB VCB</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12 col-sm-12 col-md-6>\n                    <ion-item>\n                      <ion-label stacked color="primary">VCB Brand with CT/PT</ion-label>\n                      <ion-input type="text" [(ngModel)]="ta4ai_info_vcb" placeholder="Enter value"\n                        style="border-bottom: 1px solid #dadada;"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </span>\n            </div>\n            <ion-row col-12 col-sm-12 col-md-12>\n              <ion-col>\n                <ion-item no-lines class="header-label">\n                  <ion-label text-center>Meter Cablings</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked color="primary">Cable One</ion-label>\n                  <ion-select interface="popover" multiple="false" placeholder="Select value"\n                    style="border-bottom: 1px solid #dadada;">\n                    <ion-option value="ac">Armoured Cable</ion-option>\n                    <ion-option value="pvc">PVC Conductor in PIPE</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked color="primary">Cable Two</ion-label>\n                  <ion-select interface="popover" multiple="false" placeholder="Select value"\n                    style="border-bottom: 1px solid #dadada;">\n                    <ion-option value="ctpt">Direct to CT & PT</ion-option>\n                    <ion-option value="junb">Through Junction Box</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row col-12 col-sm-12 col-md-12>\n              <ion-col>\n                <ion-item no-lines class="header-label">\n                  <ion-label text-center>Kiosk Meter Location</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked color="primary">PE Room/ SSU TNB</ion-label>\n                  <ion-select interface="popover" multiple="false" placeholder="Select value"\n                    [(ngModel)]="ta4ai_kiosk_pe" style="border-bottom: 1px solid #dadada;">\n                    <ion-option value="Yes">Yes</ion-option>\n                    <ion-option value="No">No</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked color="primary">Special Meter Room</ion-label>\n                  <ion-select interface="popover" multiple="false" placeholder="Select value"\n                    [(ngModel)]="ta4ai_kiosk_sm" style="border-bottom: 1px solid #dadada;">\n                    <ion-option value="Yes">Yes</ion-option>\n                    <ion-option value="No">No</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked color="primary">Consumer Switch Room</ion-label>\n                  <ion-select interface="popover" multiple="false" placeholder="Select value"\n                    [(ngModel)]="ta4ai_kiosk_su" style="border-bottom: 1px solid #dadada;">\n                    <ion-option value="Yes">Yes</ion-option>\n                    <ion-option value="No">No</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked color="primary">Type of Kiosk Meter</ion-label>\n                  <ion-select interface="popover" multiple="false" placeholder="Select value"\n                    [(ngModel)]="ta4ai_kiosk_type" style="border-bottom: 1px solid #dadada;">\n                    <ion-option value="Normal">Normal</ion-option>\n                    <ion-option value="HRC">HRC</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide> -->\n    </ion-slides>\n\n    <ion-row *ngIf="woStatus === \'PCBNT\' || woStatus === \'PSTSV\'">\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-item>\n          <ion-label color="primary" stacked> Choose the team to pass Service Order </ion-label>\n          <ion-select [(ngModel)]="items.json.ta0newworkcentervoltage" (ionChange)="passToNextTeam()">\n            <!--  <ion-option value="02">OPC Team</ion-option> -->\n            <ion-option value="03">LV Team</ion-option>\n            <ion-option value="04">MVHV Team</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Discconnection date for inspection.. \n    <div *ngIf="items.json.worktype === soTypes.ZISO || items.json.worktype === soTypes.ZISP">\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary"> Disconnection Date</ion-label>\n      </ion-item>\n      <ion-row col-12 col-sm-12 class="headerBlue">\n\n        <ion-col class="headerBlue">\n          <ion-input type="text" placeholder="select Date" [value]="tempDisDate" [readonly]="true" (ionChange)="disconnectionChanges()"></ion-input>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-2 col-sm-2 col-md-2 style="text-align: right">\n          <button ion-button color="buttonlightColor" (click)="presentPopover($event,\'Calendar\', \'DCD\')">\n            <ion-icon name="calendar"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>-->\n\n    <!-- Adhoc Replacement Start Shandeep Kumar...... -->\n    <!-- Cancel not need to seal (Alif - 13-03-2019) -->\n    <!-- <div *ngIf="!showAdHoc && !gv.testMobile">\n      <ion-row *ngIf="( items.json.worktype === soTypes.ZISP && showAdHocError )">\n        <ion-col col-12 col-sm-12 col-md-12>\n          <ion-item>\n            <ion-label style="color: red; font-size: 10px;">You already created the adHoc, you should not able to\n              replace devices.</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="items.json.worktype === soTypes.ZISP || items.json.worktype === soTypes.ZINR">\n        <ion-col col-10 col-sm-10 col-md-10 >\n          <ion-item>\n            <ion-label color="primary" stacked style="font-weight: bold"> Ad-Hoc Replacement</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-md-2>\n          <button ion-button (click)="changeAdhocReplacement()" [disabled]="!adhocValid">Add</button>\n        </ion-col>\n      </ion-row>\n      <div *ngFor=\'let attr of items.json.relatedrecord; let j = index;\'>\n        <ion-row *ngIf="attr.ta0relatedrecstatus !== \'CANCEL\'">\n          <ion-col col-12 col-sm-12 col-md-9 >\n            <ion-item>\n              <ion-row>\n                <ion-col col-4 col-sm-4 col-md-4>\n                  <b *ngIf="attr.relatedrecwonum"> {{ attr.relatedrecwonum }} - </b>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  {{ attr.ta0relatedrecworktype }}\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  {{ attr.ta0relatedrecsncode }}\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-2>\n                  {{ attr.ta0relatedrecstatus }}\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 >\n            <button ion-button *ngIf="!attr.relatedrecwonum" (click)="createAdhocFollowUp(j)">Create</button>\n            <button ion-button *ngIf="attr.relatedrecwonum"\n              (click)="changeAdhocRemove(j, attr.relatedrecwonum, \'cancel\')">Cancel</button>\n            <button ion-button *ngIf="!attr.relatedrecwonum"\n              (click)="changeAdhocRemove(j, attr.relatedrecwonum, \'delete\')">Delete</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf="!showAdHoc && gv.testMobile">\n      <ion-row *ngIf="(items.json.worktype === soTypes.ZISP)">\n        <ion-col col-12 col-sm-12 col-md-12>\n          <ion-item>\n            <ion-label style="color: red; font-size: 10px;">No Network Connection to access Ad-Hoc...</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <!-- Adhoc Replacement End -->\n\n    <ion-list>\n      <div *ngIf="items.json.worktype === soTypes.ZDCN || items.json.worktype === soTypes.ZRCN">\n        <ion-item style="background-color:cornflowerblue">\n          <ion-label color="primary" *ngIf="items.json.worktype === soTypes.ZDCN">Disconnection</ion-label>\n          <ion-label color="primary" *ngIf="items.json.worktype === soTypes.ZRCN">Reconnection</ion-label>\n        </ion-item>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6\n            style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n            <ion-item>\n              <ion-label color="primary" stacked>Installation Number</ion-label>\n              <ion-input type="text" value="{{ items.json.ta0installationnum }}" [readonly]="isReadonly"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary" stacked>Document Number</ion-label>\n              <ion-input type="text" value="{{ items.json.ta0disconnectiondoc }}" [readonly]="isReadonly"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-12 col-md-6\n            style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n            <ion-item>\n              <ion-label color="primary" stacked *ngIf="items.json.worktype === soTypes.ZDCN">Actual Disconnection\n                DateTime</ion-label>\n              <ion-label color="primary" stacked *ngIf="items.json.worktype === soTypes.ZRCN">Actual Reconnection\n                DateTime</ion-label>\n              <ion-input type="text" value="" [readonly]="isReadonly"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-6>\n            <ion-item>\n              <ion-label color="primary" stacked>TECO DateTime</ion-label>\n              <ion-input type="text" value="" [readonly]="isReadonly"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary">Work Plan Date</ion-label>\n      </ion-item>\n      <!-- <ion-row>\n        <ion-col col-md-12>\n          <ion-item>\n            <ion-label color="primary">Date</ion-label>\n            <ion-input type="text" placeholder="Date"></ion-input>\n          </ion-item>\n        </ion-col>\n        </ion-row> -->\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Scheduled Start DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.schedstart | date: gv.dateFormat }} {{ items.json.schedstart | date: gv.time24Format }} "\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary" stacked>Scheduled Finish DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.schedfinish | date: gv.dateFormat }} {{ items.json.schedfinish | date: gv.time24Format }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!--  <ion-row>\n        <ion-col col-12 col-sm-12 col-md-4 >\n          <ion-item>\n            <ion-label color="primary">Scheduled Finish DateTime</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-8 >\n          <ion-item>\n            <ion-input type="text" placeholder="Schedule Finish" value="{{ items.json.schedfinish | date: gv.dateFormat  }} {{ items.json.schedfinish | date: gv.timeFormat  }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n      <div *ngIf=\'compliance_label\'>\n        <ion-row>\n          <ion-item style="background-color:cornflowerblue">\n            <ion-label color="primary">Compliance List</ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-list col-12 col-sm-12 col-md-12>\n            <ion-col>\n              <ion-item *ngFor="let forms of compArr;let i = index">\n                <ion-label>{{ forms.no }}.</ion-label>\n                <button item-end ion-button item-content (click)=\'openCompliance(i)\'> {{ forms.title }}</button>\n              </ion-item>\n            </ion-col>\n          </ion-list>\n        </ion-row>\n      </div>\n\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary">Actual Start Date</ion-label>\n      </ion-item>\n\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Actual Start DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.actstart  | date: gv.dateFormat }} {{ items.json.actstart | date: gv.time24Format }}"\n              [readonly]="true"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6\n          *ngIf="(items.json.worktype === soTypes.ZISO && items.json.ta0sncode !== \'S202\') || items.json.worktype === soTypes.ZISP || items.json.worktype === soTypes.ZIST"\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item [ngClass]="(finishDateTimeIndicator) ? \'redHighlightText\' : \'blackHighlightText\'">\n            <ion-label color="primary" stacked>Finish DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.wol4 | date: gv.dateFormat }} {{ items.json.wol4 | date: gv.time24Format }}"\n              [readonly]="true"></ion-input>\n            <ion-icon name="md-time" item-end color="primary" style="zoom: 1.2;" (click)="getFinishDateTime()">\n              <!-- *ngIf="items.json.wol4 === undefined || items.json.wol4 === null" -->\n            </ion-icon>\n            <!-- <ion-icon name="md-clock" item-end color="primary"></ion-icon>\n            <ion-icon name="md-checkmark-circle" item-end></ion-icon>\n            <ion-icon name="md-close-circle" item-end></ion-icon> -->\n            <!-- [ngClass]="(validateUserSts1) ? \'redHighlightText\' : \'blackHighlightText\'" -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Approved By</ion-label>\n            <ion-input type="text" value="{{ items.json.owner || \'\'}}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="assignment"\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Work Done By </ion-label>\n            <ion-input type="text" placeholder="Technician Id (Assign To)" value="{{  assignment.laborcode }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n      </ion-row>\n\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary">Remarks Service Order</ion-label>\n      </ion-item>\n      <div padding>\n        <ion-textarea type="textarea" style="border:1px" rows="6"\n          style="border-bottom: 2px solid black; border-right: 1px solid black ;border-left: 1px solid black;border-top: 1px solid black;"\n          placeholder="Please Enter" [(ngModel)]="items.json.ta0remarks" value="{{ items.json.ta0remarks }}"\n          [disabled]="editField"></ion-textarea>\n      </div>\n      <!-- No Need for Seal -->\n      <!-- Edited: Alif (15/05/2019) -->\n      <!-- <div\n        *ngIf="items.json.worktype === soTypes.ZIST || items.json.worktype === soTypes.ZUDN || items.json.worktype === soTypes.ZSRO|| items.json.worktype === soTypes.ZUNL || items.json.worktype === soTypes.ZRPL|| items.json.worktype === soTypes.ZRPM">\n        <div\n          *ngIf="items.json.ta0installationvoltage === \'05\' || items.json.ta0installationvoltage === \'06\' || items.json.ta0installationvoltage === \'07\' || items.json.ta0installationvoltage === \'08\' || items.json.ta0installationvoltage === \'09\' || items.json.ta0installationvoltage === \'10\'">\n          <ion-item style="background-color:cornflowerblue">\n            <ion-label color="primary">Location PT & CT</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6\n              style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n              <ion-list>\n                <ion-row>\n                  <ion-col >\n                    <ion-item>\n                      <ion-label color="primary">Location PT </ion-label>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-list radio-group [(ngModel)]="ta0ptlocation">\n                <ion-row>\n                  <ion-col >\n                    <ion-item>\n                      <ion-label>TNB S.Gear</ion-label>\n                      <ion-radio value="TNB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col >\n                    <ion-item>\n                      <ion-label>Customer S.Gear</ion-label>\n                      <ion-radio value="Customer"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6\n              style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n              <ion-list>\n                <ion-row>\n                  <ion-col >\n                    <ion-item>\n                      <ion-label color="primary">Location CT </ion-label>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-list radio-group [(ngModel)]="ta0ctlocation">\n                <ion-row>\n                  <ion-col >\n                    <ion-item>\n                      <ion-label>TNB S.Gear</ion-label>\n                      <ion-radio value="TNB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col >\n                    <ion-item>\n                      <ion-label>Customer S.Gear</ion-label>\n                      <ion-radio value="Customer"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div> -->\n    </ion-list>\n  </ion-grid>\n</ion-content>\n<br />\n<br />\n\n<ion-footer mode="md">\n  <ion-toolbar color="light" mode="md">\n    <button ion-button color="primary" mode="md" round (click)="goToServiceExecution(itemsOri)"\n      *ngIf="showServiceExecution && req_inspection">\n      Service Execution\n    </button>\n    <button ion-button color="primary" mode="md" round (click)="saveAction()"\n      *ngIf="loc_saveStatus === true || showSave === true"\n      [disabled]="buttonForServiceExecution || (woStatus === \'PENDTECO\' && gv.testMobile)">\n      Save\n    </button>\n    <button ion-button color="primary" mode="md" round (click)="goBack()">\n      Cancel\n    </button>\n    <button ion-button color="primary" mode="md" round (click)="presentActionSheet()" *ngIf="previewBtn">\n      Generate Form\n    </button>\n    <button ion-button color="primary" mode="md" round (click)="goToInspectionSummary()"\n      *ngIf="hide_buttonInspectionSummary">\n      Inspection Summary\n    </button>\n    <button ion-button color="primary" mode="md" round (click)="goToTechnicalReview()"\n      *ngIf="hide_buttonTechnicalReview && (gv.employeetype === \'SUPERVISOR\' || gv.employeetype === \'EXECUTIVE\')">\n      Technical Review\n    </button>\n    <button ion-button color="primary" mode="md" round (click)="goCompliance()"\n      *ngIf="hide_buttonCompliance && gv.employeetype !== \'EXECUTIVE\'">\n      Compliance Form\n    </button>\n    <!-- New Page for Attachment Section (SEAL) -->\n    <!-- <button ion-button color="primary" mode="md" round (click)="openAttachmentPhoto()">\n      Attachment\n    </button> -->\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <ion-footer *ngIf="woStatus !== \'APPR\'">\n  <ion-toolbar color="darkColor"> -->\n<!-- <button ion-button (click)="goToServiceExecution(items)" *ngIf="showServiceExecution && woStatus == \'INPRG\'">Service Execution</button> -->\n<!-- <button ion-button *ngIf="sweepButtonHide" color="footer" (click)="goNotice()">Notice Form</button> -->\n<!-- *ngIf="!showServiceExecution && (woStatus == \'INPRG\' || woStatus == \'KIV\' || woStatus == \'CLSD\' || woStatus == \'TECO\')"  [disabled]="buttonForServiceExecution"-->\n\n<!-- <button ion-button color="footer" *ngIf="showServiceExecution && req_inspection"\n      (click)="goToServiceExecution(itemsOri)">Service Execution</button>\n    <button ion-button color="footer" *ngIf="loc_saveStatus === true || showSave === true" (click)="saveAction()"\n      [disabled]="buttonForServiceExecution">Save</button>\n    <button ion-button color="footer" *ngIf="previewBtn" (click)="presentActionSheet()">Preview</button>\n    <button ion-button color="footer" *ngIf="hide_buttonCompliance" (click)="goCompliance()">Compliance Form</button>\n    <button ion-button color="footer" (click)="goToInspectionSummary()">Inspection\n      Summary</button>\n    <span *ngIf="gv.employeetype === \'SUPERVISOR\' || gv.employeetype === \'EXECUTIVE\'">\n      <button ion-button color="footer" *ngIf="hide_buttonTechnicalReview" (click)="goToTechnicalReview()">Technical\n        Review</button>\n    </span>\n    <button ion-button color="footer" (click)="goBack()">Cancel</button>\n\n    <button ion-button color="footer" (click)="openAttachmentPhoto()">openAttachment</button>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-service-details/seal-service-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"]])
    ], SealServiceDetailsPage);
    return SealServiceDetailsPage;
}());

//# sourceMappingURL=seal-service-details.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratePdfFormProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the GeneratePdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeneratePdfFormProvider = /** @class */ (function () {
    function GeneratePdfFormProvider(http) {
        this.http = http;
        this.externalDataRetrievedFromServer = [
            { name: 'Bartek', age: 34 },
            { name: 'John', age: 27 },
            { name: 'Elizabeth', age: 30 },
        ];
        console.log('Hello GeneratePdfProvider Provider');
    }
    GeneratePdfFormProvider.prototype.buildTableBody = function (data, columns) {
        var body = [];
        body.push(columns);
        data.forEach(function (row) {
            var dataRow = [];
            columns.forEach(function (column) {
                dataRow.push(row[column].toString());
            });
            body.push(dataRow);
        });
        return body;
    };
    GeneratePdfFormProvider.prototype.table = function (data, columns) {
        return {
            table: {
                headerRows: 1,
                body: this.buildTableBody(data, columns)
            }
        };
    };
    GeneratePdfFormProvider.prototype.convertPDF = function (items) {
        this.dataArea = items;
        if (this.dataArea == 0) {
            this.dataArea = " ";
            console.log("Here11111");
        }
        else if (this.dataArea == undefined) {
            this.dataArea = "";
            console.log("Here 1");
        }
        else if (this.dataArea == null) {
            this.dataArea = "";
            console.log("Here 2");
        }
        return this.dataArea;
    };
    GeneratePdfFormProvider.prototype.generatePdfForm = function (items, soTypes, formType) {
        var _this = this;
        console.log(" --> called work order service adapter calling ()(()) ");
        console.log("item.." + items);
        this.woserviceaddress = items.json.woserviceaddress[0];
        this.assignment = items.json.assignment[0];
        console.log(items.json.siteid);
        return new Promise(function (resolve) {
            debugger;
            console.log("came inside to complaint pdf form generation --- >>>.");
            var dd = {
                content: [
                    //Header start
                    {
                        alignment: 'justify',
                        style: 'tableExample',
                        table: {
                            widths: [100, 200, 200],
                            body: [
                                [{ text: 'Area Code : ' + _this.convertPDF(items.json.siteid), aligment: 'left' }, { rowSpan: 2, text: 'SERVICE ORDER', bold: true, fontSize: 18, aligment: 'center' }, {
                                        rowSpan: 2, image: 'building',
                                        width: 200, aligment: 'right'
                                    }],
                                [{ text: 'Area :' + _this.convertPDF(items.json.sitearea), aligment: 'left' }, '', '']
                            ]
                        },
                    },
                    //Header end
                    //Body start
                    {
                        alignment: 'left',
                        style: 'tableExample',
                        table: {
                            widths: [100, 150, 100, 150],
                            body: [
                                [{ text: 'Printed By:', bold: true }, { text: _this.convertPDF(items.json.reportedby) }, { text: 'Printed Date & Time:', bold: true }, { text: _this.convertPDF(items.json.reportdate) },],
                                [{ text: 'Service Order No:', bold: true }, { text: _this.convertPDF(items.json.wonum) + '-' + _this.convertPDF(items.json.ta0bcrmnum) }, { text: 'Last Date Bill:', bold: true }, { text: _this.convertPDF(items.json.ta0lastbilldate) },],
                                [{ text: 'Type of Service Order:', bold: true }, { text: _this.convertPDF(items.json.worktype) }, { text: 'Service Description:', bold: true }, { text: _this.convertPDF(items.json.description) },],
                                [{ text: 'Type of Installation Service:', bold: true }, { text: _this.convertPDF(items.json.ta0installationservice) }, { text: 'Condition of Installation Service:', bold: true }, { text: _this.convertPDF(items.json.ta0serviceflag == true ? 'Ready' : 'Not Ready') },],
                                [{ text: 'Registered Customer Name:', bold: true, colSpan: 2 }, {}, { text: _this.convertPDF(items.json.ta0bpname), colSpan: 2 }, {},],
                                [{ text: 'Occupant Name:', bold: true, colSpan: 2 }, {}, { text: _this.convertPDF(items.json.ta0bptenantname), colSpan: 2 }, {},],
                                [{ text: 'Account No:' }, { text: _this.convertPDF(items.json.ta0accountnum), bold: true }, { text: 'Rate:', bold: true }, { text: _this.convertPDF(items.json.ta0ratecategory) },],
                                [{ text: 'Address:', bold: true }, { text: _this.convertPDF(_this.woserviceaddress.formattedaddress), colSpan: 3 }],
                                [{ text: 'No of Suppliers', bold: true, alignment: 'left' }, { text: _this.convertPDF(items.json.ta0suppliers) }, { text: 'No of Elements', bold: true }, { text: _this.convertPDF(items.json.ta0elementnum) }],
                                [{ text: 'Voltage:', bold: true }, { text: _this.convertPDF(items.json.ta0installationvoltage) }, { text: 'Signal Strengh:', bold: true }, { text: _this.convertPDF(items.json.ta0signalstrength) }],
                                [{ text: 'Phone No:', bold: true }, { text: _this.convertPDF(items.json.phone) }, { text: 'MRU:', bold: true }, { text: _this.convertPDF(items.json.ta0mru) },],
                                [{ text: 'Meter Location:', bold: true }, { text: 'AAAA' }, { text: 'GPS Coordinate:', bold: true }, { text: _this.woserviceaddress.latitudey + '-' + _this.woserviceaddress.longitudex },],
                                [{ text: 'Key:', bold: true }, { text: _this.convertPDF(items.json.ta0key) }, { text: 'Type of Premise:', bold: true }, { text: _this.convertPDF(items.json.ta0premisetype) },],
                                [{ text: 'AMS:', bold: true }, { text: _this.convertPDF(items.json.ta0ams) }, { text: 'AMCG:', bold: true }, { text: _this.convertPDF(items.json.ta0amcg) },],
                                [{ text: 'Work Plan Date:', colSpan: 4, bold: true }, {}, {}, {},],
                                [{ text: 'Date & Time (Start):', bold: true }, { text: _this.convertPDF(items.json.schedstart) }, { text: 'Date & Time (End):', bold: true }, { text: _this.convertPDF(items.json.schedfinish) },],
                                [{ text: 'Actual Start Date:', colSpan: 4, bold: true }, {}, {}, {},],
                                [{ text: 'Date & Time(Start) :', bold: true }, { text: _this.convertPDF(items.json.actstart) }, { text: 'Date & Time (End):', bold: true }, { text: _this.convertPDF(items.json.actfinish) },],
                                [{ text: 'Remarks:', bold: true }, { text: _this.convertPDF(items.json.ta0remarks), colSpan: 3 }, {}, {}],
                                [{ text: 'Approved By:', bold: true }, { text: _this.convertPDF(items.json.supervisor) }, { text: 'Work Done By:', bold: true }, { text: _this.convertPDF(_this.assignment.laborcode) },],
                            ],
                        },
                    },
                    //Body end
                    { text: 'test array', pageBreak: 'before', style: 'subheader' },
                    _this.table(_this.externalDataRetrievedFromServer, ['name', 'age'])
                ],
                images: {
                    building: 'data:image/jpeg;base64,/9j/4RC5RXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAgAAAAcgEyAAIAAAAUAAAAkodpAAQAAAABAAAAqAAAANQACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaAAyMDE0OjAzOjE5IDAzOjAyOjI2AAAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAregAwAEAAAAAQAAATYAAAAAAAAABgEDAAMAAAABAAYAAAEaAAUAAAABAAABIgEbAAUAAAABAAABKgEoAAMAAAABAAIAAAIBAAQAAAABAAABMgICAAQA..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AAAAAAAAAFJzbHRVbnRGI1B4bEBSAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgABOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAACOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0sAAAAGAAAAAAAAAAAAAAE2AAACtwAAAAsAQgBlAHoAIABuAGEAegB3AHkALQAxAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAK3AAABNgAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAABNgAAAABSZ2h0bG9uZwAAArcAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAATYAAAAAUmdodGxvbmcAAAK3AAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQUAAAAAAAEAAAAAjhCSU0EDAAAAAAPmwAAAAEAAACgAAAARwAAAeAAAIUgAAAPfwAYAAH/2P/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgARwCgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A72Alt81KEoVq2mx9w81El3fVEhMQlakYfYDoTHgok+SKWptqNhGqKSmI8tfFELE21OtSMg/7VIbxwE8FPt08/FK0JWuyWtDmN3MHPDoUftVodIgjvA4UJcBEkDwUSJTREdQFxkehKf7W89h8z/eoWZb3iIj4IW3t2SaGgjdq3uByiIRHRXHI9WbLawJfJPhrCkb2uPteWjuFCWfmjaPE6qLjXEtkkdzx+VHhF9VcWm4XD3aue7T80f3oZufu7JHceSnbS94kRHmnUBuiydmDrXn/AHIZJPKKWQeZ+CaE4ELTfV//0PRfQf4H8FE1PHZW4kaJtfBP9wsRxBp7XDsmI8Qr0E8hMa5KPueCPa7NLRIDcYHKtsNdu70y2zY4tftMw4fSY/b+f/JTlgPZH3PBHteLShNsk8K26hs6aJCkTPJR9wI9stZgZBDmbj2P8FEtjloVza0DUfxTbK5mJnuEuPzTwaNEj5JoV51NU6Dt4n+9QNQHAlOGQLTiLU2pi1WvTE+HxS2J3Gt9stPb5JbVbLXNHbXyUCw+A+SImgwa235pw09p+9GNZ8Ewpd4I8QVwnsxFeoJg+Sc44MlsHyCIK3gcD704bHKHF4rhHuH/0fSg6snQGSsq361/VqqR+0qXuEjbW/fqNPzfb/0lcx8mq/Gry2hxotqbdxrse31Id+77V5tX0r68QA7PwyNAIro0+/C/cRMq7fVaB/IPWdR+uXT7sO/Hw7i222tzWXm6ussJ0FjCx1tntXLu6jnW+3J6p67AZa05cQY27v5v971P/Pf/AAiJg9L+s++w9RzKXVek40jHZjB/raeh6jrcH+Y+l6v+EVrqGD1d2Nt6ddVj5ReNr7a6Lay3ad9Tmuxz6fv9/re//R/4RDi8Y/y/wVGN9Jfy/wAJpHKfBa3MhpcXhoywPeRt9R+2r32fy0RnVOvbg5nWdr2ua5pdd6rYBbLbKdrG2MfttZ9L8/8A4JX68DODKRa5jrAKheWigBzg39Z9P9W9vqWfzax/rC9vT62HPNv6xjXV4H2dzWFuY0teb8j7N9j/AFX0X4/6Oz1/f6n6BOBJIFx17f8AoqKA1qWnf/0Z6fB+srse6+22+u5uQd7q7LIax/tbuodtd6dXps91H0P8N9P1vVtu+umEx+x7sdr9NPVeZkhrYc2hzXbnOavKB1HLDSXZFxaBJix8x/nLWzurfWfoNGHTkW4zHXsLqm001lvohrPS3ubtq9X3e9no+p/pbbf8EZYzEgXfF9P++UJggmqr6voA+u/TSN3q45BiD6r+52N/wH7/ALUh9d+lkF3rY8aSfVf3mP8AAfyHLm+jdV6nm0iz1W5zHMqc++uo1trtfpkdPcK27bbsRmy6y3/hVdZmdYNdbvsdm9zq2vZ+klge7ZdZPp+5uOz9K799NII/9Gj/AN6mx/KMnXb9delujbbjuniLXHs53+g/drein604Y59GRyBdr+NSw7bvrE8CrEwvUusLWiy2fTrDvU9bIt9ZrK3txWVss9Ox/wCk9T/rN2Hn0dRs6rdWy69lYDDY6ptj2VONTLG1OGEHMc6z6f6Fn+ESjZNXX1iUTkALq/8ABk9B1Tr3Ucm5rsTOqxKg0tFbLYlx/OcYfu93/QVQdU6yC4jqfud39ccD6HNP7v7qyOju6jZkjHa61ufXYHXV32AsGO3b9tx3syHWV/atp/RP9Pez/TVrbfV1eXFoqDQHgAmgmd4Nf+D936DcxO20uP8Ahf8AoqzfWpf4P/oyH9p9ZY5xq6kGF53PJuBkwxgcf0P+ir2f6+/V6b9Y7qMYV5t9WVb6hcbTaJLDH6L6DPoqgKepCq4WOqFr33jGcDQWgOH+T2WRX9Kt/wDO7v8AwZI09TN1cekKw8m1u7Hl1ZqLWtY41/S+17LP+L/7bSv+tD+X+CkCukvr/wCjO8PrT008yweO+k/gLkQfWDAcAWkkHUEGr/0uudrq6gCw2hhaCz1AHUA8EW/mNc39JscuG6ljdKr6pl0dRpfb1CsPuyrKrqmsdZ6ZyrfSZVjNZtd/wbUL7GJ8tUjxEh5vsVXUqrww1gkWEhp9vbd+49/7iKbT4LiPqj1Cmiqvp9I9PBwrL2h9jtzxD36eytjHMfba9zfp2Lov2308ucwWOLmgE+xw0cXBvueGt/MclCeh4q0P4JlE2K7P/9Kj0/q32XK9Vlh3NbDt99bqwcgDGrvstrbvcyn7R9pe/Y+v9H/LrWtb1Sh/S7serrXT6eouDhVksyQ6th37mO3XusyP5j9G72fTXIegHOud9oc77TaW2MezcXVVMPou0r2b7b/T/R0t2V/olnuwrG1F9eO51hY8S1pP0vZO5rfd7XKGOSMom5R4hrWnqW+4B4/V7y3qLXXWPq+sGCyp1uW+thyGe2q6ltXS6v8A2n5m7Js/6HrJU9QDbKnW/WDBsrZZgutaMivVlFbmdXb+b/ynf+kr/wDBPQXAVdGzNzbqsW97WODyW0OcIHu+m0Oa1Fx+nZ/oP/yY97vTeS402Eu9R1bHSR9L7N9Or9xScIuuIbb3FPH4F7P7XmtxBUfrP0/7T9l9P1TeyDkfaftP2vVu7Z+y/wBR+j9P/B7P0yz/APGD1LAyh04YV9GUA/JJ9KxtvpgjH2/zL3bX/wBdcvj49rn1EYXrVPtb6dz6nO3tY30XtDhsa6v/AAmxBdhZzWMudjXV47AGsf6bgx3dw3xt+mUoVxRJIH1iiU7BFJmvkEbS8QZaOSAJctH61WZP2TpYyuo4/U7Wi6Lsaxrwxm3G9PHsFTWenZXH5yptwshmJblPLanUEg0WkNs9oGpre5ln52xu1n01pn6o9Ptx9teVY1zR6pL/AExBe2txbbuNfp+xn+FdWpMmbHYlxgiF3SMcDRFfNVN36nZmTX0h4w7cakm7JNrcq2sONv2egdPfU23Z+h+1/wA//wAGuit6j1HcfQyunhv6fbuuqn+Yr/Z35/8A5Zev9p/7rbFx9P1O6W8v35j5qEua52NW8fS27qrL3erurrfb+ifZ/wAUi2/Unp3oONd2Tu2E1ucyoNJ9xY5zt30FEZwl6hIES1BZACNK2evq6pksy2u+2YDKd9vvN9Q2s9Kv7K93vO7ZmfanXf8ABekuT6u57+oPc++vJcW1zfQ/fW47GjdXawMa/wBvs+ih4n1Rpxcmu224FglpGwOc6RbTFdMW+s97vT/Re+z3+n/OK+3onTG1+3KvFVQiRjvc1rZJgvZVtb7js96MJQB3H2LJgy0r8Wf1Xy+nYmbuy9lLyLC3MttFbGNNZHpPbZ+jc6135633dW6ccjc3q+EKjbU8V/aWT6bWuF9ezX+ds2u+l/1ytc/T03puH1Gm8ZtpyKgTXjPxnWNeSHMk45pf630/3Pp/8IsfO+q72dUya8P7RdiUFzKb2gvc4gN/PpZs936Tds2em/6aJnEk0dxWyACBVbG/m/S/d9L2Y6rgta1tnWcIvaKg8/amn3Ns3ZDvo/4Sj9F/58/0iDd1St1T21df6cyw12NrebQQLHXi7HsIH5leBuxH/wDC+9Yh6L03H6djuOPdZkPL25NhZcXNY20b6XtpHp+o7Cdtf7ff+n9P9IhZOL0mu/HZi9Ftyqbv523bltNQmPU2ub+nZsdv/RppyRJ18/liE1Wnh1kXo39ZwzZYW9a6eK3PyDW31iCGPDP2ewn3e/Gc237Q7/thclmV9bf1DPcy63MrsstdTk0lxZY2ym70jTZ7d9bbPRY3/hUmtrIE/Va0PL9pbuySQ3/SfRV+3o3Qfte/9mWuxTW8OnHzA5129ux8mPZ6Pqe399IziP8Aein7PtWwLL+n4ebk5lDjtfdd6b9vuDg12/8ASC1jv0jnWfpK7P5pBd9csICGYTGw3c5/6MFzXD0/8HjM9P32Nd+jT5NXTsJzDi4LhjPpuq+y2V3M9W95r9NnqWbb2+rTu/wn83Vaq1A6absU5HRm0Yz6y7IcPWeJ9/oVDdYd9O9tFjbK0PciNTrr3UT4gfV//9PmW/t39IWnIkgDUOjT6Mta3b9H6Hp/mKQt62Pa0XiyJcS2TEd/YuOSWWfa68H/ADWpr4vXOv6nJ3Nft13S2DJ01/R/up6HdTLnuLrGFxEhrSdB9HQs9ti5BJA+1Rrh/wCajV7Wy3qjg8WusA4durAP/Uf9/U6j1N1h9N1gP8kEGf7DGtXDpKM+3WnD/wA1Wvi9uLeqktA9YSIb7TMePta72IRyc8TDXEAkOPpwOPd6ns/6pcaknD2utf8ANVq9mLs5rpYPdGoYwF0H6O72f+YJ25Fxa1zht0IDX1s8vBn/AJguLSS9Hhf0Vq9vXdmOZtr+iXH6DANe8OFe3ck+65utrWOa2NwewbPLdptXEJJp4b6f2q1e+ozsSWi3HZJ4hrNTptiG7m/yFaZZiP3QysAfSEAH+1t/O2rzdJRzr9FcL8H0kPxw+am0usH0gI3En96NqcOa5m7Y1gIGgPtAHaGl7e681STFavpbnDeG2Bm+PpEdvm7cokWOESxoEemWeH5n0fp/nfSXmySIU+iPFW4k3VCxztG+lI4/6LvTURXjBzw2xhsO3d5Cf0cbQ1/9VeepJ2qPsf/ZADhCSU0EIQAAAAAAWQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABUAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANQAuADEAAAABADhCSU0EBgAAAAAABwAEAAAAAQEA/+EN3Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNC0wMy0xOVQwMzowMjoyNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNC0wMy0xOVQwMzowMjoyNiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTQtMDMtMTlUMDM6MDI6MjYrMDE6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI4MDExNzQwNzIwNjgxMTg3MUY4MTMxRkI2RTY4OTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg3MUY4MTMxRkI2RTY4OTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODcxRjgxMzFGQjZFNjg5OCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxODAxMTc0MDcyMDY4MTE4NzFGODEzMUZCNkU2ODk4IiBzdEV2dDp3aGVuPSIyMDE0LTAzLTE5VDAzOjAyOjI2KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjgwMTE3NDA3MjA2ODExODcxRjgxMzFGQjZFNjg5OCIgc3RFdnQ6d2hlbj0iMjAxNC0wMy0xOVQwMzowMjoyNiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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'
                },
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10]
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    },
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black'
                    }
                },
            };
            resolve(dd);
        });
    };
    GeneratePdfFormProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GeneratePdfFormProvider);
    return GeneratePdfFormProvider;
}());

//# sourceMappingURL=generate-pdf-form.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealServiceDetailsPageModule", function() { return SealServiceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_service_details__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ion2_calendar__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_complaint_form_pdf_complaint_form_pdf__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdfForms_complaince_form_bahasa_pdf_complaince_form_pdf_bhs__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdfForms_generate_pdf_form_generate_pdf_form__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SealServiceDetailsPageModule = /** @class */ (function () {
    function SealServiceDetailsPageModule() {
    }
    SealServiceDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_service_details__["a" /* SealServiceDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_service_details__["a" /* SealServiceDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8_ionic_select_searchable__["SelectSearchableModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_complaint_form_pdf_complaint_form_pdf__["a" /* ComplaintFormPdfProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_pdfForms_complaince_form_bahasa_pdf_complaince_form_pdf_bhs__["a" /* ComplainceFormPdfBhs */],
                __WEBPACK_IMPORTED_MODULE_7__providers_pdfForms_generate_pdf_form_generate_pdf_form__["a" /* GeneratePdfFormProvider */]
            ]
        })
    ], SealServiceDetailsPageModule);
    return SealServiceDetailsPageModule;
}());

//# sourceMappingURL=seal-service-details.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = {
    DATE_FORMAT: 'YYYY-MM-DD',
    COLOR: 'primary',
    WEEKS_FORMAT: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    MONTH_FORMAT: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
};
exports.pickModes = {
    SINGLE: 'single',
    RANGE: 'range',
    MULTI: 'multi'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var util_1 = __webpack_require__(4);
var moment = __webpack_require__(2);
var config_1 = __webpack_require__(945);
var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.safeOpt = function (calendarOptions) {
        var _disableWeeks = [];
        var _daysConfig = [];
        var _a = calendarOptions || {}, _b = _a.from, from = _b === void 0 ? new Date() : _b, _c = _a.to, to = _c === void 0 ? 0 : _c, _d = _a.weekStart, weekStart = _d === void 0 ? 0 : _d, _e = _a.step, step = _e === void 0 ? 3 : _e, _f = _a.id, id = _f === void 0 ? '' : _f, _g = _a.cssClass, cssClass = _g === void 0 ? '' : _g, _h = _a.closeLabel, closeLabel = _h === void 0 ? 'CANCEL' : _h, _j = _a.doneLabel, doneLabel = _j === void 0 ? 'DONE' : _j, _k = _a.monthFormat, monthFormat = _k === void 0 ? 'MMM YYYY' : _k, _l = _a.title, title = _l === void 0 ? 'CALENDAR' : _l, _m = _a.defaultTitle, defaultTitle = _m === void 0 ? '' : _m, _o = _a.defaultSubtitle, defaultSubtitle = _o === void 0 ? '' : _o, _p = _a.autoDone, autoDone = _p === void 0 ? false : _p, _q = _a.canBackwardsSelected, canBackwardsSelected = _q === void 0 ? false : _q, _r = _a.closeIcon, closeIcon = _r === void 0 ? false : _r, _s = _a.doneIcon, doneIcon = _s === void 0 ? false : _s, _t = _a.showYearPicker, showYearPicker = _t === void 0 ? false : _t, _u = _a.isSaveHistory, isSaveHistory = _u === void 0 ? false : _u, _v = _a.pickMode, pickMode = _v === void 0 ? config_1.pickModes.SINGLE : _v, _w = _a.color, color = _w === void 0 ? config_1.defaults.COLOR : _w, _x = _a.weekdays, weekdays = _x === void 0 ? config_1.defaults.WEEKS_FORMAT : _x, _y = _a.daysConfig, daysConfig = _y === void 0 ? _daysConfig : _y, _z = _a.disableWeeks, disableWeeks = _z === void 0 ? _disableWeeks : _z, _0 = _a.showAdjacentMonthDay, showAdjacentMonthDay = _0 === void 0 ? true : _0;
        return {
            id: id,
            from: from,
            to: to,
            pickMode: pickMode,
            autoDone: autoDone,
            color: color,
            cssClass: cssClass,
            weekStart: weekStart,
            closeLabel: closeLabel,
            closeIcon: closeIcon,
            doneLabel: doneLabel,
            doneIcon: doneIcon,
            canBackwardsSelected: canBackwardsSelected,
            isSaveHistory: isSaveHistory,
            disableWeeks: disableWeeks,
            monthFormat: monthFormat,
            title: title,
            weekdays: weekdays,
            daysConfig: daysConfig,
            step: step,
            showYearPicker: showYearPicker,
            defaultTitle: defaultTitle,
            defaultSubtitle: defaultSubtitle,
            defaultScrollTo: calendarOptions.defaultScrollTo || from,
            defaultDate: calendarOptions.defaultDate || null,
            defaultDates: calendarOptions.defaultDates || null,
            defaultDateRange: calendarOptions.defaultDateRange || null,
            showAdjacentMonthDay: showAdjacentMonthDay
        };
    };
    CalendarService.prototype.createOriginalCalendar = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth();
        var firstWeek = new Date(year, month, 1).getDay();
        var howManyDays = moment(time).daysInMonth();
        return {
            year: year,
            month: month,
            firstWeek: firstWeek,
            howManyDays: howManyDays,
            time: new Date(year, month, 1).getTime(),
            date: new Date(time)
        };
    };
    CalendarService.prototype.findDayConfig = function (day, opt) {
        if (opt.daysConfig.length <= 0)
            return null;
        return opt.daysConfig.find(function (n) { return day.isSame(n.date, 'day'); });
    };
    CalendarService.prototype.createCalendarDay = function (time, opt, month) {
        var _time = moment(time);
        var date = moment(time);
        var isToday = moment().isSame(_time, 'days');
        var dayConfig = this.findDayConfig(_time, opt);
        var _rangeBeg = moment(opt.from).valueOf();
        var _rangeEnd = moment(opt.to).valueOf();
        var isBetween = true;
        var disableWee = opt.disableWeeks.indexOf(_time.toDate().getDay()) !== -1;
        if (_rangeBeg > 0 && _rangeEnd > 0) {
            if (!opt.canBackwardsSelected) {
                isBetween = !_time.isBetween(_rangeBeg, _rangeEnd, 'days', '[]');
            }
            else {
                isBetween = moment(_time).isBefore(_rangeBeg) ? false : isBetween;
            }
        }
        else if (_rangeBeg > 0 && _rangeEnd === 0) {
            if (!opt.canBackwardsSelected) {
                var _addTime = _time.add(1, 'day');
                isBetween = !_addTime.isAfter(_rangeBeg);
            }
            else {
                isBetween = false;
            }
        }
        var _disable = false;
        if (dayConfig && util_1.isBoolean(dayConfig.disable)) {
            _disable = dayConfig.disable;
        }
        else {
            _disable = disableWee || isBetween;
        }
        var title = new Date(time).getDate().toString();
        if (dayConfig && dayConfig.title) {
            title = dayConfig.title;
        }
        else if (opt.defaultTitle) {
            title = opt.defaultTitle;
        }
        var subTitle = '';
        if (dayConfig && dayConfig.subTitle) {
            subTitle = dayConfig.subTitle;
        }
        else if (opt.defaultSubtitle) {
            subTitle = opt.defaultSubtitle;
        }
        return {
            time: time,
            isToday: isToday,
            title: title,
            subTitle: subTitle,
            selected: false,
            isLastMonth: date.month() < month,
            isNextMonth: date.month() > month,
            marked: dayConfig ? dayConfig.marked || false : false,
            cssClass: dayConfig ? dayConfig.cssClass || '' : '',
            disable: _disable,
            isFirst: date.date() === 1,
            isLast: date.date() === date.daysInMonth()
        };
    };
    CalendarService.prototype.createCalendarMonth = function (original, opt) {
        var days = new Array(6).fill(null);
        var len = original.howManyDays;
        for (var i = original.firstWeek; i < len + original.firstWeek; i++) {
            var itemTime = new Date(original.year, original.month, i - original.firstWeek + 1).getTime();
            days[i] = this.createCalendarDay(itemTime, opt);
        }
        var weekStart = opt.weekStart;
        if (weekStart === 1) {
            if (days[0] === null) {
                days.shift();
            }
            else {
                days.unshift.apply(days, new Array(6).fill(null));
            }
        }
        if (opt.showAdjacentMonthDay) {
            var _booleanMap = days.map(function (e) { return !!e; });
            var thisMonth = moment(original.time).month();
            var startOffsetIndex = _booleanMap.indexOf(true) - 1;
            var endOffsetIndex = _booleanMap.lastIndexOf(true) + 1;
            for (startOffsetIndex; startOffsetIndex >= 0; startOffsetIndex--) {
                var dayBefore = moment(days[startOffsetIndex + 1].time).clone().subtract(1, 'd');
                days[startOffsetIndex] = this.createCalendarDay(dayBefore.valueOf(), opt, thisMonth);
            }
            if (!(_booleanMap.length % 7 === 0 && _booleanMap[_booleanMap.length - 1])) {
                for (endOffsetIndex; endOffsetIndex < days.length + (endOffsetIndex % 7); endOffsetIndex++) {
                    var dayAfter = moment(days[endOffsetIndex - 1].time).clone().add(1, 'd');
                    days[endOffsetIndex] = this.createCalendarDay(dayAfter.valueOf(), opt, thisMonth);
                }
            }
        }
        return {
            days: days,
            original: original
        };
    };
    CalendarService.prototype.createMonthsByPeriod = function (startTime, monthsNum, opt) {
        var _array = [];
        var _start = new Date(startTime);
        var _startMonth = new Date(_start.getFullYear(), _start.getMonth(), 1).getTime();
        for (var i = 0; i < monthsNum; i++) {
            var time = moment(_startMonth).add(i, 'M').valueOf();
            var originalCalendar = this.createOriginalCalendar(time);
            _array.push(this.createCalendarMonth(originalCalendar, opt));
        }
        return _array;
    };
    CalendarService.prototype.wrapResult = function (original, pickMode) {
        var _this = this;
        var result;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                result = this.multiFormat(original[0].time);
                break;
            case config_1.pickModes.RANGE:
                result = {
                    from: this.multiFormat(original[0].time),
                    to: this.multiFormat(original[1].time)
                };
                break;
            case config_1.pickModes.MULTI:
                result = original.map(function (e) { return _this.multiFormat(e.time); });
                break;
            default:
                result = original;
        }
        return result;
    };
    CalendarService.prototype.multiFormat = function (time) {
        var _moment = moment(time);
        return {
            time: _moment.valueOf(),
            unix: _moment.unix(),
            dateObj: _moment.toDate(),
            string: _moment.format(config_1.defaults.DATE_FORMAT),
            years: _moment.year(),
            months: _moment.month() + 1,
            date: _moment.date()
        };
    };
    CalendarService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CalendarService.ctorParameters = function () { return []; };
    return CalendarService;
}());
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CalendarMonth = /** @class */ (function () {
    function CalendarMonth() {
    }
    return CalendarMonth;
}());
exports.CalendarMonth = CalendarMonth;
var CalendarResult = /** @class */ (function () {
    function CalendarResult() {
    }
    return CalendarResult;
}());
exports.CalendarResult = CalendarResult;
var CalendarComponentMonthChange = /** @class */ (function () {
    function CalendarComponentMonthChange() {
    }
    return CalendarComponentMonthChange;
}());
exports.CalendarComponentMonthChange = CalendarComponentMonthChange;
//# sourceMappingURL=calendar.model.js.map

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(11);
var calendar_service_1 = __webpack_require__(946);
var moment = __webpack_require__(2);
var config_1 = __webpack_require__(945);
var CalendarModal = /** @class */ (function () {
    function CalendarModal(_renderer, _elementRef, params, viewCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.datesTemp = [null, null];
        this._s = true;
    }
    CalendarModal.prototype.ngOnInit = function () {
        this.init();
        this.initDefaultDate();
    };
    CalendarModal.prototype.ionViewDidLoad = function () {
        this.findCssClass();
        this.scrollToDefaultDate();
    };
    CalendarModal.prototype.init = function () {
        this._d = this.calSvc.safeOpt(this.params.get('options'));
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < 1) {
            this.step = 1;
        }
        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
    };
    CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;
        var _a = this._d, pickMode = _a.pickMode, defaultDate = _a.defaultDate, defaultDateRange = _a.defaultDateRange, defaultDates = _a.defaultDates;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                if (defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
                }
                break;
            case config_1.pickModes.RANGE:
                if (defaultDateRange) {
                    if (defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                    }
                    if (defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                    }
                }
                break;
            case config_1.pickModes.MULTI:
                if (defaultDates && defaultDates.length) {
                    this.datesTemp = defaultDates.map(function (e) { return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d); });
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    };
    CalendarModal.prototype.findCssClass = function () {
        var _this = this;
        var cssClass = this._d.cssClass;
        if (cssClass) {
            cssClass.split(' ').forEach(function (_class) {
                if (_class.trim() !== '')
                    _this._renderer.addClass(_this._elementRef.nativeElement, _class);
            });
        }
    };
    CalendarModal.prototype.onChange = function (data) {
        var _a = this._d, pickMode = _a.pickMode, autoDone = _a.autoDone;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
    };
    CalendarModal.prototype.onCancel = function () {
        this.viewCtrl.dismiss(null, 'cancel');
    };
    CalendarModal.prototype.done = function () {
        var pickMode = this._d.pickMode;
        this.viewCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    };
    CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        var pickMode = this._d.pickMode;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            case config_1.pickModes.RANGE:
                return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
            case config_1.pickModes.MULTI:
                return this.datesTemp.length > 0 && this.datesTemp.every(function (e) { return !!e && !!e.time; });
            default:
                return false;
        }
    };
    CalendarModal.prototype.nextMonth = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        var len = this.calendarMonths.length;
        var final = this.calendarMonths[len - 1];
        var nextTime = moment(final.original.time).add(1, 'M').valueOf();
        var rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && moment(final.original.time).isAfter(rangeEnd))) {
            infiniteScroll.enable(false);
            return;
        }
        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, 1, this._d));
        infiniteScroll.complete();
        var _a;
    };
    CalendarModal.prototype.backwardsMonth = function () {
        var first = this.calendarMonths[0];
        if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
        }
        var firstTime = moment(first.original.time).subtract(1, 'M').valueOf();
        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, 1, this._d));
        this.ref.detectChanges();
        var _a;
    };
    CalendarModal.prototype.scrollToDefaultDate = function () {
        var _this = this;
        var defaultDateIndex = this.findInitMonthNumber(this._d.defaultScrollTo);
        var defaultDateMonth = this.monthsEle.nativeElement.children["month-" + defaultDateIndex].offsetTop;
        if (defaultDateIndex === 0 || defaultDateMonth === 0)
            return;
        setTimeout(function () {
            _this.content.scrollTo(0, defaultDateMonth, 128);
        }, 300);
    };
    CalendarModal.prototype.onScroll = function ($event) {
        var _this = this;
        if (!this._d.canBackwardsSelected)
            return;
        if ($event.scrollTop <= 200 && this._s) {
            this._s = !1;
            var lastHeight_1 = this.content.getContentDimensions().scrollHeight;
            setTimeout(function () {
                _this.backwardsMonth();
                var nowHeight = _this.content.getContentDimensions().scrollHeight;
                _this.content.scrollTo(0, nowHeight - lastHeight_1, 0)
                    .then(function () {
                    _this._s = !0;
                });
            }, 180);
        }
    };
    CalendarModal.prototype.findInitMonthNumber = function (date) {
        var startDate = moment(this._d.from);
        var defaultScrollTo = moment(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return 0;
        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    };
    CalendarModal.prototype._getDayTime = function (date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    };
    CalendarModal.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarModal.prototype.trackByIndex = function (index, moment) {
        return moment.original ? moment.original.time : index;
    };
    CalendarModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-modal',
                    template: "\n    <ion-header>\n      <ion-navbar [color]=\"_d.color\">\n\n        <ion-buttons start>\n          <button type='button' ion-button icon-only clear (click)=\"onCancel()\">\n            <span *ngIf=\"_d.closeLabel !== '' && !_d.closeIcon\">{{_d.closeLabel}}</span>\n            <ion-icon *ngIf=\"_d.closeIcon\" name=\"close\"></ion-icon>\n          </button>\n        </ion-buttons>\n\n        <ion-title>{{_d.title}}</ion-title>\n\n        <ion-buttons end>\n          <button type='button' ion-button icon-only *ngIf=\"!_d.autoDone\" clear [disabled]=\"!canDone()\" (click)=\"done()\">\n            <span *ngIf=\"_d.doneLabel !== '' && !_d.doneIcon\">{{_d.doneLabel}}</span>\n            <ion-icon *ngIf=\"_d.doneIcon\" name=\"checkmark\"></ion-icon>\n          </button>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n      <ion-calendar-week\n        [color]=\"_d.color\"\n        [weekArray]=\"_d.weekdays\"\n        [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\"\n                 [ngClass]=\"{'multi-selection': _d.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{_monthFormat(month.original.date)}}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"_d.pickMode\"\n                                [isSaveHistory]=\"_d.isSaveHistory\"\n                                [id]=\"_d.id\"\n                                [color]=\"_d.color\"\n                                (onChange)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarModal.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: ionic_angular_1.NavParams, },
        { type: ionic_angular_1.ViewController, },
        { type: core_1.ChangeDetectorRef, },
        { type: calendar_service_1.CalendarService, },
    ]; };
    CalendarModal.propDecorators = {
        "content": [{ type: core_1.ViewChild, args: [ionic_angular_1.Content,] },],
        "monthsEle": [{ type: core_1.ViewChild, args: ['months',] },],
    };
    return CalendarModal;
}());
exports.CalendarModal = CalendarModal;
//# sourceMappingURL=calendar.modal.js.map

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var config_1 = __webpack_require__(945);
var CalendarWeekComponent = /** @class */ (function () {
    function CalendarWeekComponent() {
        this._weekArray = config_1.defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = config_1.defaults.COLOR;
    }
    Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
        set: function (value) {
            if (value && value.length === 7) {
                this._weekArray = value.slice();
                this.adjustSort();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
        set: function (value) {
            if (value === 0 || value === 1) {
                this._weekStart = value;
                this.adjustSort();
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarWeekComponent.prototype.adjustSort = function () {
        if (this._weekStart === 1) {
            var cacheWeekArray = this._weekArray.slice();
            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = cacheWeekArray.slice();
        }
        else if (this._weekStart === 0) {
            this._displayWeekArray = this._weekArray.slice();
        }
    };
    CalendarWeekComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-week',
                    template: "\n    <ion-toolbar class=\"week-toolbar\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _displayWeekArray\">{{w}}</li>\n      </ul>\n    </ion-toolbar>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekComponent.ctorParameters = function () { return []; };
    CalendarWeekComponent.propDecorators = {
        "color": [{ type: core_1.Input },],
        "weekArray": [{ type: core_1.Input },],
        "weekStart": [{ type: core_1.Input },],
    };
    return CalendarWeekComponent;
}());
exports.CalendarWeekComponent = CalendarWeekComponent;
//# sourceMappingURL=calendar-week.component.js.map

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(25);
var calendar_model_1 = __webpack_require__(948);
var config_1 = __webpack_require__(945);
exports.MONTH_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MonthComponent; }),
    multi: true
};
var MonthComponent = /** @class */ (function () {
    function MonthComponent(ref) {
        this.ref = ref;
        this.readonly = false;
        this.color = config_1.defaults.COLOR;
        this.onChange = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onSelectStart = new core_1.EventEmitter();
        this.onSelectEnd = new core_1.EventEmitter();
        this._date = [null, null];
        this._isInit = false;
    }
    Object.defineProperty(MonthComponent.prototype, "_isRange", {
        get: function () {
            return this.pickMode === config_1.pickModes.RANGE;
        },
        enumerable: true,
        configurable: true
    });
    MonthComponent.prototype.ngAfterViewInit = function () {
        this._isInit = true;
    };
    MonthComponent.prototype.writeValue = function (obj) {
        if (Array.isArray(obj)) {
            this._date = obj;
        }
    };
    MonthComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    MonthComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    MonthComponent.prototype.trackByTime = function (index, item) {
        return item ? item.time : index;
    };
    MonthComponent.prototype.isEndSelection = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[1] === null) {
            return false;
        }
        return this._date[1].time === day.time;
    };
    MonthComponent.prototype.isBetween = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit) {
            return false;
        }
        if (this._date[0] === null || this._date[1] === null) {
            return false;
        }
        var start = this._date[0].time;
        var end = this._date[1].time;
        return day.time < end && day.time > start;
    };
    MonthComponent.prototype.isStartSelection = function (day) {
        if (!day)
            return false;
        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[0] === null) {
            return false;
        }
        return this._date[0].time === day.time && this._date[1] !== null;
    };
    MonthComponent.prototype.isSelected = function (time) {
        if (Array.isArray(this._date)) {
            if (this.pickMode !== config_1.pickModes.MULTI) {
                if (this._date[0] !== null) {
                    return time === this._date[0].time;
                }
                if (this._date[1] !== null) {
                    return time === this._date[1].time;
                }
            }
            else {
                return this._date.findIndex(function (e) { return e !== null && e.time === time; }) !== -1;
            }
        }
        else {
            return false;
        }
    };
    MonthComponent.prototype.onSelected = function (item) {
        if (this.readonly)
            return;
        item.selected = true;
        this.onSelect.emit(item);
        if (this.pickMode === config_1.pickModes.SINGLE) {
            this._date[0] = item;
            this.onChange.emit(this._date);
            return;
        }
        if (this.pickMode === config_1.pickModes.RANGE) {
            if (this._date[0] === null) {
                this._date[0] = item;
                this.onSelectStart.emit(item);
            }
            else if (this._date[1] === null) {
                if (this._date[0].time < item.time) {
                    this._date[1] = item;
                    this.onSelectEnd.emit(item);
                }
                else {
                    this._date[1] = this._date[0];
                    this.onSelectEnd.emit(this._date[0]);
                    this._date[0] = item;
                    this.onSelectStart.emit(item);
                }
            }
            else {
                this._date[0] = item;
                this.onSelectStart.emit(item);
                this._date[1] = null;
            }
            this.onChange.emit(this._date);
            return;
        }
        if (this.pickMode === config_1.pickModes.MULTI) {
            var index = this._date.findIndex(function (e) { return e !== null && e.time === item.time; });
            if (index === -1) {
                this._date.push(item);
            }
            else {
                this._date.splice(index, 1);
            }
            this.onChange.emit(this._date.filter(function (e) { return e !== null; }));
        }
    };
    MonthComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-month',
                    providers: [exports.MONTH_VALUE_ACCESSOR],
                    template: "\n    <div [class]=\"color\">\n      <ng-template [ngIf]=\"!_isRange\" [ngIfElse]=\"rangeBox\">\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{day.title}}</p>\n                  <small *ngIf=\"day.subTitle\">{{day?.subTitle}}</small>\n                </button>\n              </ng-container>\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n\n      <ng-template #rangeBox>\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\"\n                 [class.startSelection]=\"isStartSelection(day)\"\n                 [class.endSelection]=\"isEndSelection(day)\"\n                 [class.is-first-wrap]=\"day?.isFirst\"\n                 [class.is-last-wrap]=\"day?.isLast\"\n                 [class.between]=\"isBetween(day)\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.is-first]=\"day.isFirst\"\n                        [class.is-last]=\"day.isLast\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{day.title}}</p>\n                  <small *ngIf=\"day.subTitle\">{{day?.subTitle}}</small>\n                </button>\n              </ng-container>\n\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    MonthComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef, },
    ]; };
    MonthComponent.propDecorators = {
        "month": [{ type: core_1.Input },],
        "pickMode": [{ type: core_1.Input },],
        "isSaveHistory": [{ type: core_1.Input },],
        "id": [{ type: core_1.Input },],
        "readonly": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "onSelect": [{ type: core_1.Output },],
        "onSelectStart": [{ type: core_1.Output },],
        "onSelectEnd": [{ type: core_1.Output },],
    };
    return MonthComponent;
}());
exports.MonthComponent = MonthComponent;
//# sourceMappingURL=month.component.js.map

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_service_1 = __webpack_require__(946);
var forms_1 = __webpack_require__(25);
var moment = __webpack_require__(2);
var config_1 = __webpack_require__(945);
exports.ION_CAL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CalendarComponent; }),
    multi: true
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = config_1.defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.onChange = new core_1.EventEmitter();
        this.monthChange = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onSelectStart = new core_1.EventEmitter();
        this.onSelectEnd = new core_1.EventEmitter();
        this._onChanged = function () {
        };
        this._onTouched = function () {
        };
    }
    Object.defineProperty(CalendarComponent.prototype, "showToggleButtons", {
        get: function () {
            return this._showToggleButtons;
        },
        set: function (value) {
            this._showToggleButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "showMonthPicker", {
        get: function () {
            return this._showMonthPicker;
        },
        set: function (value) {
            this._showMonthPicker = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
            this.initOpt();
            if (this.monthOpt && this.monthOpt.original) {
                this.monthOpt = this.createMonth(this.monthOpt.original.time);
            }
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    };
    CalendarComponent.prototype.getViewDate = function () {
        return this._handleType(this.monthOpt.original.time);
    };
    CalendarComponent.prototype.setViewDate = function (value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
    };
    CalendarComponent.prototype.switchView = function () {
        this._view = this._view === 'days' ? 'month' : 'days';
    };
    CalendarComponent.prototype.prev = function () {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    };
    CalendarComponent.prototype.next = function () {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    };
    CalendarComponent.prototype.prevYear = function () {
        if (moment(this.monthOpt.original.time).year() === 1970)
            return;
        var backTime = moment(this.monthOpt.original.time).subtract(1, 'year').valueOf();
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.nextYear = function () {
        var nextTime = moment(this.monthOpt.original.time).add(1, 'year').valueOf();
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.nextMonth = function () {
        var nextTime = moment(this.monthOpt.original.time).add(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime)
        });
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.canNext = function () {
        if (!this._d.to || this._view !== 'days')
            return true;
        return this.monthOpt.original.time < moment(this._d.to).valueOf();
    };
    CalendarComponent.prototype.backMonth = function () {
        var backTime = moment(this.monthOpt.original.time).subtract(1, 'months').valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime)
        });
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.canBack = function () {
        if (!this._d.from || this._view !== 'days')
            return true;
        return this.monthOpt.original.time > moment(this._d.from).valueOf();
    };
    CalendarComponent.prototype.monthOnSelect = function (month) {
        this._view = 'days';
        var newMonth = moment(this.monthOpt.original.time).month(month).valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth)
        });
        this.monthOpt = this.createMonth(newMonth);
    };
    CalendarComponent.prototype.onChanged = function ($event) {
        switch (this._d.pickMode) {
            case config_1.pickModes.SINGLE:
                var date = this._handleType($event[0].time);
                this._onChanged(date);
                this.onChange.emit(date);
                break;
            case config_1.pickModes.RANGE:
                if ($event[0] && $event[1]) {
                    var rangeDate = {
                        from: this._handleType($event[0].time),
                        to: this._handleType($event[1].time)
                    };
                    this._onChanged(rangeDate);
                    this.onChange.emit(rangeDate);
                }
                break;
            case config_1.pickModes.MULTI:
                var dates = [];
                for (var i = 0; i < $event.length; i++) {
                    if ($event[i] && $event[i].time) {
                        dates.push(this._handleType($event[i].time));
                    }
                }
                this._onChanged(dates);
                this.onChange.emit(dates);
                break;
            default:
        }
    };
    CalendarComponent.prototype.swipeEvent = function ($event) {
        var isNext = $event.deltaX < 0;
        if (isNext && this.canNext()) {
            this.nextMonth();
        }
        else if (!isNext && this.canBack()) {
            this.backMonth();
        }
    };
    CalendarComponent.prototype._payloadToTimeNumber = function (value) {
        var date;
        if (this.type === 'string') {
            date = moment(value, this.format);
        }
        else {
            date = moment(value);
        }
        return date.valueOf();
    };
    CalendarComponent.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarComponent.prototype.initOpt = function () {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
        }
        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;
            if (this._view !== 'days' && !this.showMonthPicker) {
                this._view = 'days';
            }
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    };
    CalendarComponent.prototype.createMonth = function (date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    };
    CalendarComponent.prototype._createCalendarDay = function (value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
    };
    CalendarComponent.prototype._handleType = function (value) {
        var date = moment(value);
        switch (this.type) {
            case 'string':
                return date.format(this.format);
            case 'js-date':
                return date.toDate();
            case 'moment':
                return date;
            case 'time':
                return date.valueOf();
            case 'object':
                return date.toObject();
        }
        return date;
    };
    CalendarComponent.prototype.writeValue = function (obj) {
        this._writeValue(obj);
        if (obj) {
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    };
    CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CalendarComponent.prototype._writeValue = function (value) {
        var _this = this;
        if (!value) {
            this._calendarMonthValue = [null, null];
            return;
        }
        switch (this._d.pickMode) {
            case 'single':
                this._calendarMonthValue[0] = this._createCalendarDay(value);
                break;
            case 'range':
                if (value.from) {
                    this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
                }
                if (value.to) {
                    this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
                }
                break;
            case 'multi':
                if (Array.isArray(value)) {
                    this._calendarMonthValue = value.map(function (e) {
                        return _this._createCalendarDay(e);
                    });
                }
                else {
                    this._calendarMonthValue = [null, null];
                }
                break;
            default:
        }
    };
    CalendarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar',
                    providers: [exports.ION_CAL_VALUE_ACCESSOR],
                    template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker\" [ngIfElse]=\"title\">\n        <button type=\"button\"\n                ion-button\n                clear\n                class=\"switch-btn\"\n                (click)=\"switchView()\">\n          {{_monthFormat(monthOpt.original.time)}}\n          <ion-icon class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? 'md-arrow-dropdown' : 'md-arrow-dropup'\"></ion-icon>\n        </button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\">\n          {{_monthFormat(monthOpt.original.time)}}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <button type='button' ion-button clear class=\"back\" [disabled]=\"!canBack()\" (click)=\"prev()\">\n          <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </button>\n        <button type='button' ion-button clear class=\"forward\" [disabled]=\"!canNext()\" (click)=\"next()\">\n          <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n        </button>\n      </ng-template>\n    </div>\n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month class=\"component-mode\"\n                          [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (onChange)=\"onChanged($event)\"\n                          (swipe)=\"swipeEvent($event)\"\n                          (onSelect)=\"onSelect.emit($event)\"\n                          (onSelectStart)=\"onSelectStart.emit($event)\"\n                          (onSelectEnd)=\"onSelectEnd.emit($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\"\n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (onSelect)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: calendar_service_1.CalendarService, },
    ]; };
    CalendarComponent.propDecorators = {
        "format": [{ type: core_1.Input },],
        "type": [{ type: core_1.Input },],
        "readonly": [{ type: core_1.Input },],
        "onChange": [{ type: core_1.Output },],
        "monthChange": [{ type: core_1.Output },],
        "onSelect": [{ type: core_1.Output },],
        "onSelectStart": [{ type: core_1.Output },],
        "onSelectEnd": [{ type: core_1.Output },],
        "options": [{ type: core_1.Input },],
    };
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(11);
var calendar_modal_1 = __webpack_require__(949);
var calendar_service_1 = __webpack_require__(946);
var CalendarController = /** @class */ (function () {
    function CalendarController(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
    }
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    /**
       * @deprecated
       * @param {CalendarModalOptions} calendarOptions
       * @param {ModalOptions} modalOptions
       * @returns {any}
       */
    CalendarController.prototype.openCalendar = /**
       * @deprecated
       * @param {CalendarModalOptions} calendarOptions
       * @param {ModalOptions} modalOptions
       * @returns {any}
       */
    function (calendarOptions, modalOptions) {
        if (modalOptions === void 0) { modalOptions = {}; }
        var options = this.calSvc.safeOpt(calendarOptions);
        var calendarModal = this.modalCtrl.create(calendar_modal_1.CalendarModal, Object.assign({
            options: options
        }, options), modalOptions);
        calendarModal.present();
        return new Promise(function (resolve, reject) {
            calendarModal.onDidDismiss(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject('cancelled');
                }
            });
        });
    };
    CalendarController.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    CalendarController.ctorParameters = function () { return [
        { type: ionic_angular_1.ModalController, },
        { type: calendar_service_1.CalendarService, },
    ]; };
    return CalendarController;
}());
exports.CalendarController = CalendarController;
//# sourceMappingURL=calendar.controller.js.map

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

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(948));
var calendar_modal_1 = __webpack_require__(949);
exports.CalendarModal = calendar_modal_1.CalendarModal;
var calendar_week_component_1 = __webpack_require__(953);
exports.CalendarWeekComponent = calendar_week_component_1.CalendarWeekComponent;
var month_component_1 = __webpack_require__(954);
exports.MonthComponent = month_component_1.MonthComponent;
var calendar_component_1 = __webpack_require__(955);
exports.CalendarComponent = calendar_component_1.CalendarComponent;
var calendar_module_1 = __webpack_require__(966);
exports.CalendarModule = calendar_module_1.CalendarModule;
var calendar_controller_1 = __webpack_require__(956);
exports.CalendarController = calendar_controller_1.CalendarController;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_controller_1 = __webpack_require__(956);
var ionic_angular_1 = __webpack_require__(11);
var calendar_service_1 = __webpack_require__(946);
var index_1 = __webpack_require__(967);
function calendarController(modalCtrl, calSvc) {
    return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
}
exports.calendarController = calendarController;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [ionic_angular_1.IonicModule],
                    declarations: index_1.CALENDAR_COMPONENTS,
                    exports: index_1.CALENDAR_COMPONENTS,
                    entryComponents: index_1.CALENDAR_COMPONENTS,
                    providers: [
                        calendar_service_1.CalendarService,
                        {
                            provide: calendar_controller_1.CalendarController,
                            useFactory: calendarController,
                            deps: [ionic_angular_1.ModalController, calendar_service_1.CalendarService]
                        }
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calendar_modal_1 = __webpack_require__(949);
var calendar_week_component_1 = __webpack_require__(953);
var month_component_1 = __webpack_require__(954);
var calendar_component_1 = __webpack_require__(955);
var month_picker_component_1 = __webpack_require__(968);
exports.CALENDAR_COMPONENTS = [
    calendar_modal_1.CalendarModal,
    calendar_week_component_1.CalendarWeekComponent,
    month_component_1.MonthComponent,
    calendar_component_1.CalendarComponent,
    month_picker_component_1.MonthPickerComponent
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_model_1 = __webpack_require__(948);
var config_1 = __webpack_require__(945);
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent() {
        this.color = config_1.defaults.COLOR;
        this.onSelect = new core_1.EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = config_1.defaults.MONTH_FORMAT;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
        get: function () {
            return this._monthFormat;
        },
        set: function (value) {
            if (Array.isArray(value) && value.length === 12) {
                this._monthFormat = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype._onSelect = function (month) {
        this.onSelect.emit(month);
    };
    MonthPickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-month-picker',
                    template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\" i === _thisMonth.getMonth() && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\">{{item}}</button>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return []; };
    MonthPickerComponent.propDecorators = {
        "month": [{ type: core_1.Input },],
        "color": [{ type: core_1.Input },],
        "onSelect": [{ type: core_1.Output },],
        "monthFormat": [{ type: core_1.Input },],
    };
    return MonthPickerComponent;
}());
exports.MonthPickerComponent = MonthPickerComponent;
//# sourceMappingURL=month-picker.component.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatus; });
var UserStatus = /** @class */ (function () {
    function UserStatus() {
    }
    return UserStatus;
}());

//# sourceMappingURL=UserStatus.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkorderPojo; });
var WorkorderPojo = /** @class */ (function () {
    function WorkorderPojo() {
        //Created By Ameer (To add controlling Device Serial Number) - 5/10/2018 
        this.loc_controllingDeviceList = [];
        this.loc_attachmentCount = 0;
        this.loc_t_feeder = 'notActive';
        this.loc_t_meters = 'notActive';
        this.loc_t_register = 'notActive';
        this.loc_t_testing = 'notActive';
        this.loc_t_silSticker = 'notActive';
        this.loc_t_closeSo = 'notActive';
        this.loc_ta0feeder_haveChange = false;
    }
    return WorkorderPojo;
}());

//# sourceMappingURL=WorkOrder.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedRecord; });
var RelatedRecord = /** @class */ (function () {
    function RelatedRecord() {
    }
    return RelatedRecord;
}());

//# sourceMappingURL=ReleatedRecord.js.map

/***/ })

});
//# sourceMappingURL=1.js.map