webpackJsonp([2],{

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_UserStatus__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pojo_WorkOrder__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_ReleatedRecord__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__adhoc_modal_adhoc_modal__ = __webpack_require__(520);
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
 * Generated class for the ServiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceDetailsPage = /** @class */ (function () {
    function ServiceDetailsPage(navCtrl, platform, renderer, appCtrl, params, globel, dataService, jsonStoreCrud, geolocation, alertCtrl, popoverCtrl, gv, gf, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.renderer = renderer;
        this.appCtrl = appCtrl;
        this.params = params;
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
        this.soTypes = __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */];
        this.items = "";
        this.showServiceCover = false;
        this.showServiceExecution = false;
        this.showButtonImage = false;
        this.woStatus = null;
        this.voltageDdl = null;
        this.isReadonly = true;
        this.worktype = null; //SO Type
        this.checkFlag = true;
        this.checkObject = true;
        this.buttonForServiceExecution = false;
        this.enableServiceTypeAndServiceStatus = false;
        this.enablePoleNo = false;
        this.editField = false;
        this.disableButtonSelection = true;
        this.havingParent = false;
        this.validateUserSts1 = false;
        this.validatePhoto = false;
        this.amscheckcond = false;
        this.userStatus = [];
        this.childWorkOrder = [];
        this.currentDate = new Date();
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
        this.alnAnomalyType = [];
        this.alnAnomalyMain = [];
        this.alnAnomalyCategory = [];
        this.alncorrectivecode = [];
        this.datePickerCallback = function (val) {
            if (!val) {
                // console.log('Date not selected');
            }
            else {
                // console.log('Selected date is : ', val);
            }
        };
        this.items = this.params.data;
        this.worktype = this.items.json.worktype;
        console.log(">ServiceDetailsPage >>constructor >>>items : ", JSON.stringify(this.items));
        console.log(">ServiceDetailsPage >>constructor >>>worktype : ", this.items.json.worktype);
        /** Copy Clone into Original */
        this.itemsOri = JSON.parse(JSON.stringify(this.items));
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
        }
        /**
         * AMS and AMCG Validation to check Modem and SimCard is change or not...
         */
        if (typeof (this.items.json.ta0feeder) !== 'undefined' && this.items.json.ta0feeder !== null) {
            // Because after delete feedeer length is 0.
            // By Alif (13-09-2018)
            if (this.items.json.ta0feeder.length > 0) {
                /**
                 * Close To make AMS and AMCG always appear.
                 */
                /* if (typeof (this.items.json.ta0feeder[0].multiassetlocci) !== 'undefined') {
                  for (var l = 0; l < this.items.json.ta0feeder[0].multiassetlocci.length; l++) {
        
                    if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0allocationtype === "82") {
        
                      if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0installind || this.items.json.ta0feeder[0].multiassetlocci[l].ta0removeind) {
        
                        this.amscheckcond = true;
                        this.items.json.ta0ams = "IEE";
                        this.items.json.ta0amcg = "0999";
                      }
                      if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0replaceind) {
        
                        this.amscheckcond = true;
                      }
                    }
        
                    if (typeof (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind) !== 'undefined') {
                      if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind === "true") {
          
                        this.ta0wouserstatus = "WMAT";
                      }
                    }
                  }
                } */
                /** Checking for MRPM and WMAT (User Status) */
                if (this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
                    // Collection devices.
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
                    // Checking WMAT Indicator.
                    var wmat = devices.filter(function (item) {
                        return (item.ta0wrgmtrind === "true" || item.ta0wrgmtrind === true);
                    });
                    if (wmat.length > 0) {
                        /**
                         * Description: Adding checking if already exist the status.
                         * Created: Alif (27.09.2019)
                         */
                        var index = this.ta0wouserstatus.findIndex(function (item) {
                            return item === "WMAT";
                        });
                        if (index === -1) {
                            this.ta0wouserstatus.push("WMAT");
                        }
                        this.userStatusDefaultChange(this.ta0wouserstatus, '');
                    }
                    else {
                        var index = this.ta0wouserstatus.findIndex(function (item) {
                            return item === "WMAT";
                        });
                        if (index !== -1) {
                            this.ta0wouserstatus.splice(index, 1);
                            this.userStatusDefaultChange(this.ta0wouserstatus, '');
                        }
                    }
                    var mrpm = devices.filter(function (item) {
                        return item.ta0replaceind === true;
                    });
                    if (mrpm.length > 0) {
                        /**
                         * Description: Adding checking if already exist the status.
                         * Created: Alif (27.09.2019)
                         */
                        var index = this.ta0wouserstatus.findIndex(function (item) {
                            return item === "MRPM";
                        });
                        if (index === -1) {
                            this.ta0wouserstatus.push("MRPM");
                        }
                        this.userStatusDefaultChange(this.ta0wouserstatus, '');
                        this.items.json.ta0subsoindicator = true;
                    }
                    else {
                        var index = this.ta0wouserstatus.findIndex(function (item) {
                            return item === "MRPM";
                        });
                        if (index !== -1) {
                            this.ta0wouserstatus.splice(index, 1);
                            this.userStatusDefaultChange(this.ta0wouserstatus, '');
                        }
                    }
                }
            }
        }
        this.amscheckcond = true;
        // console.log('Date for Items ', JSON.stringify(this.items));
        if (this.items.json.worktype === 'ZINL') {
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
            if (typeof (this.items.json.assignment) != 'undefined') {
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
        // var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
        // //console.log('doclinks href :: ---- ' + this.items.json.docLinksL.href + ' ::::: :: : :   ' + queryPart1);
        // console.log(' doclinks  : ' + this.items.json.docLinksL);
        if (typeof (this.items.json.docLinksL) !== 'undefined') {
            // = doclinks;
            // console.log('came inside to doclinks record : ' + this.items.json.docLinksL.length);
            this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(this.items.json.docLinksL));
            this.items.json.loc_attachmentCount = this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(this.items.json.docLinksL.length));
        }
        // Section for ZINL & ZINR
        this.woDetails = new __WEBPACK_IMPORTED_MODULE_11__pojo_WorkOrder__["a" /* WorkorderPojo */]();
        // Reset all the default or empty the value
        this.woDetails = {};
        if (this.items.json.loc_adhocReplacement != null) {
            this.ta0subordercreationflag = this.items.json.ta0subordercreationflag;
            this.woDetails.ta0subordercreationflag_desc = this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
        }
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO ||
            /**
             * Edit by Ameer 12/11/2018
             * Hide and shows for AMS and AMCG based on SO type
             */
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
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
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO ||
            this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
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
        if (this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
            this.enableServiceTypeAndServiceStatus = true;
        }
        else {
            this.enableServiceTypeAndServiceStatus = false;
        }
        /**
         * Getting Current Ratio from Meter Info to display at Header Details.
         * Edited : Alif
         * Date   : 14/12/2018, 15-01-2019
         */
        // Reset Current ratio value..
        this.currentRatio = "0/0";
        // Adjustment to display current ratio.. based on so type..
        // Edited : ALif (17.06.2019) (Remove ZMMR from condition)
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
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
                    return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT);
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
                                    if (device[i].ta0registers[m].ta0windingcategory === "1" || device[i].ta0registers[m].ta0windingnumber === "01") {
                                        first = device[i].ta0registers[m].ta0transformercurrent;
                                    }
                                    if (device[i].ta0registers[m].ta0windingcategory === "2" || device[i].ta0registers[m].ta0windingnumber === "02") {
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
        this.defaultAMSAMCG();
    }
    /**
     * Description  : Method to auto populate local data.
     * Created      : Alif (31.12.2019)
     */
    ServiceDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ServiceDetailsPage');
        this.items = this.params.data;
        var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
        this.jsonStoreCrud.getSearchRecord(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0).then(function (result) {
            // Updated Local Data in UI
            _this.items = JSON.parse(JSON.stringify(result[0]));
            _this.worktype = _this.items.json.worktype;
            /** Copy Clone into Original */
            _this.itemsOri = JSON.parse(JSON.stringify(_this.items));
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
            }
            /**
             * AMS and AMCG Validation to check Modem and SimCard is change or not...
             */
            if (typeof (_this.items.json.ta0feeder) !== 'undefined' && _this.items.json.ta0feeder !== null) {
                // Because after delete feedeer length is 0.
                // By Alif (13-09-2018)
                if (_this.items.json.ta0feeder.length > 0) {
                    /**
                     * Close To make AMS and AMCG always appear.
                     */
                    /* if (typeof (this.items.json.ta0feeder[0].multiassetlocci) !== 'undefined') {
                      for (var l = 0; l < this.items.json.ta0feeder[0].multiassetlocci.length; l++) {
            
                        if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0allocationtype === "82") {
            
                          if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0installind || this.items.json.ta0feeder[0].multiassetlocci[l].ta0removeind) {
            
                            this.amscheckcond = true;
                            this.items.json.ta0ams = "IEE";
                            this.items.json.ta0amcg = "0999";
                          }
                          if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0replaceind) {
            
                            this.amscheckcond = true;
                          }
                        }
            
                        if (typeof (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind) !== 'undefined') {
                          if (this.items.json.ta0feeder[0].multiassetlocci[l].ta0wrgmtrind === "true") {
              
                            this.ta0wouserstatus = "WMAT";
                          }
                        }
                      }
                    } */
                    /** Checking for MRPM and WMAT (User Status) */
                    if (_this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || _this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
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
                            /**
                             * Description: Adding checking if already exist the status.
                             * Created: Alif (27.09.2019)
                             */
                            var index = _this.ta0wouserstatus.findIndex(function (item) {
                                return item === "WMAT";
                            });
                            if (index === -1) {
                                _this.ta0wouserstatus.push("WMAT");
                            }
                            _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
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
                        var mrpm = devices.filter(function (item) {
                            return item.ta0replaceind === true;
                        });
                        if (mrpm.length > 0) {
                            /**
                             * Description: Adding checking if already exist the status.
                             * Created: Alif (27.09.2019)
                             */
                            var index = _this.ta0wouserstatus.findIndex(function (item) {
                                return item === "MRPM";
                            });
                            if (index === -1) {
                                _this.ta0wouserstatus.push("MRPM");
                            }
                            _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            _this.items.json.ta0subsoindicator = true;
                        }
                        else {
                            var index = _this.ta0wouserstatus.findIndex(function (item) {
                                return item === "MRPM";
                            });
                            if (index !== -1) {
                                _this.ta0wouserstatus.splice(index, 1);
                                _this.userStatusDefaultChange(_this.ta0wouserstatus, '');
                            }
                        }
                    }
                }
            }
            _this.amscheckcond = true;
            // console.log('Date for Items ', JSON.stringify(this.items));
            if (_this.items.json.worktype === 'ZINL') {
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
                if (typeof (_this.items.json.assignment) != 'undefined') {
                    _this.assignment = _this.items.json.assignment[0];
                }
                _this.ta0ptlocation = _this.items.json.ta0ptlocation;
                _this.ta0ctlocation = _this.items.json.ta0ctlocation;
                // console.log("Data Existing: " + JSON.stringify(this.items));
            }
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
            // var queryPart1 = WL.JSONStore.QueryPart().equal("wonum", this.items.json.wonum);
            // //console.log('doclinks href :: ---- ' + this.items.json.docLinksL.href + ' ::::: :: : :   ' + queryPart1);
            // console.log(' doclinks  : ' + this.items.json.docLinksL);
            if (typeof (_this.items.json.docLinksL) !== 'undefined') {
                // = doclinks;
                // console.log('came inside to doclinks record : ' + this.items.json.docLinksL.length);
                _this.itemsOri.json.docLinksL = JSON.parse(JSON.stringify(_this.items.json.docLinksL));
                _this.items.json.loc_attachmentCount = _this.itemsOri.json.loc_attachmentCount = JSON.parse(JSON.stringify(_this.items.json.docLinksL.length));
                // changing indicator attachment/doclinksL
                for (var m = 0; m < _this.itemsOri.json.docLinksL.length; m++) {
                    if (typeof (_this.itemsOri.json.docLinksL[m].describedBy.loc_show) === 'undefined' || _this.itemsOri.json.docLinksL[m].describedBy.loc_photoVersion === "old") {
                        _this.itemsOri.json.docLinksL[m].describedBy.loc_show = true;
                    }
                }
            }
            // Section for ZINL & ZINR
            _this.woDetails = new __WEBPACK_IMPORTED_MODULE_11__pojo_WorkOrder__["a" /* WorkorderPojo */]();
            // Reset all the default or empty the value
            _this.woDetails = {};
            if (_this.items.json.loc_adhocReplacement != null) {
                _this.ta0subordercreationflag = _this.items.json.ta0subordercreationflag;
                _this.woDetails.ta0subordercreationflag_desc = _this.items.json.loc_adhocReplacement.ta0subordercreationflag_desc;
            }
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO ||
                /**
                 * Edit by Ameer 12/11/2018
                 * Hide and shows for AMS and AMCG based on SO type
                 */
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
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
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO ||
                _this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
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
            if (_this.items.json.worktype == __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR) {
                _this.enableServiceTypeAndServiceStatus = true;
            }
            else {
                _this.enableServiceTypeAndServiceStatus = false;
            }
            /**
             * Getting Current Ratio from Meter Info to display at Header Details.
             * Edited : Alif
             * Date   : 14/12/2018, 15-01-2019
             */
            // Reset Current ratio value..
            _this.currentRatio = "0/0";
            // Adjustment to display current ratio.. based on so type..
            // Edited : ALif (17.06.2019) (Remove ZMMR from condition)
            if (_this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || _this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
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
                        return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT);
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
                                        if (device[i].ta0registers[m].ta0windingcategory === "1" || device[i].ta0registers[m].ta0windingnumber === "01") {
                                            first = device[i].ta0registers[m].ta0transformercurrent;
                                        }
                                        if (device[i].ta0registers[m].ta0windingcategory === "2" || device[i].ta0registers[m].ta0windingnumber === "02") {
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
            _this.defaultAMSAMCG();
        });
    };
    /**
     * Get the parent record details....
     */
    ServiceDetailsPage.prototype.getParentRecord = function () {
        var _this = this;
        this.havingParent = true;
        if (this.items.json.origrecordid !== '' && this.items.json.origrecordid !== null && typeof (this.items.json.origrecordid) !== 'undefined') {
            var queryPart = [];
            queryPart = WL.JSONStore.QueryPart().equal('wonum', (this.items.json.origrecordid).toString());
            this.jsonStoreCrud
                .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart)
                .then(function (result) {
                _this.ptitems = result;
                console.log("Parent Service Order Details -->" + JSON.stringify(_this.ptitems));
            });
        }
    };
    // Loader Error Message displaying in the Ad Hoc Replacement...
    ServiceDetailsPage.prototype.loadAdhocCheck = function () {
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
    ServiceDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log("ionViewDidLoad AddDevicesPage");
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.lookup();
        this.getalnAnomalyType("TA0ANOMALYTYPE");
        this.getalnAnomalyMain("TA0ANOMALYMAIN");
        this.getalnAnomalyCategory("TA0ANOMALYCATEGORY");
        this.getalncorrectivecode("TA0CORRECTIVECODE");
        this.getDlLocationValue("TA0DEVICELOCATION");
        this.getAMIData();
        this.defaultAMSAMCG();
        loading.dismiss();
    };
    ServiceDetailsPage.prototype.lookup = function () {
        var _this = this;
        // console.log("User Status Based on SO : ");
        var queryPart = null;
        var worktype = this.items.json.worktype;
        switch (worktype) {
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER: {
                // console.log("work  type : " + SoTypes.ZCER);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZCER);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL: {
                //console.log("work  type : " + SoTypes.ZINL);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR: {
                //console.log("work  type : " + SoTypes.ZINR);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR: {
                //console.log("work  type : " + SoTypes.ZISR);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST: {
                //console.log("work  type : " + SoTypes.ZIST);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE: {
                //console.log("work  type : " + SoTypes.ZRCE);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV: {
                //console.log("work  type : " + SoTypes.ZRMV);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                //console.log("work  type : " + SoTypes.ZRPC);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPM: {
                //console.log("work  type : " + SoTypes.ZRPM);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPM);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO: {
                //console.log("work  type : " + SoTypes.ZSRO);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN: {
                //console.log("work  type : " + SoTypes.ZUDN);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR: {
                //console.log("work  type : " + SoTypes.ZMMR);
                queryPart = WL.JSONStore.QueryPart().equal("worktype", __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR);
                break;
            }
        }
        this.jsonStoreCrud
            .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].UserStatus, queryPart)
            .then(function (result) {
            _this.userStsGroupList = result;
            var tempUserList = [];
            // Setting Display User Status
            var statusNDescription;
            statusNDescription = new __WEBPACK_IMPORTED_MODULE_3__pojo_UserStatus__["a" /* UserStatus */]();
            for (var i = 0; i < _this.userStsGroupList.length; i++) {
                statusNDescription = {};
                statusNDescription.ta0kiv = _this.userStsGroupList[i].json.ta0kiv;
                statusNDescription.description = _this.userStsGroupList[i].json.description;
                tempUserList.push(statusNDescription);
            }
            _this.userStsGroupList = [];
            _this.userStsGroupList = tempUserList;
            if (_this.woStatus === "INPRG" || _this.woStatus === "PENDCLSD" || _this.woStatus === "PENDTECO" || _this.woStatus === "PCBNT") {
                setTimeout(function () {
                    tempUserList = [];
                    //this.userStsGroupList.json.sort(this.gf.dynamicSort('ta0kiv'));
                    // console.log("Total: " + this.userStsGroupList.length);
                    for (var i = 0; i < _this.userStsGroupList.length; i++) {
                        // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
                        if (_this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                            tempUserList.push(_this.userStsGroupList[i]);
                            // tempUserList.push(statusNDescription);
                        }
                    }
                    _this.userStsGroupList = [];
                    _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                }, 1000);
            }
            else if (_this.woStatus === "PENDKIV") {
                setTimeout(function () {
                    tempUserList = [];
                    // console.log("Total: " + this.userStsGroupList.length);
                    for (var i = 0; i < _this.userStsGroupList.length; i++) {
                        if (_this.userStsGroupList[i].ta0kiv.startsWith("K") == true) {
                            //  console.log("Add: " + this.userStsGroupList[i].ta0kiv);
                            tempUserList.push(_this.userStsGroupList[i]);
                        }
                    }
                    _this.userStsGroupList = [];
                    _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                }, 1000);
            }
        });
    };
    //  KIV Management  
    //  lookup() {
    //
    //    // console.log("User Status Based on SO : ");
    //    var queryPart = null;
    //
    //    var worktype: string = this.items.json.worktype;
    //    switch (worktype) {
    //      case SoTypes.ZCER: {
    //        // console.log("work  type : " + SoTypes.ZCER);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZCER); break;
    //      } case SoTypes.ZINL: {
    //        //console.log("work  type : " + SoTypes.ZINL);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZINL); break;
    //      } case SoTypes.ZINR: {
    //        //console.log("work  type : " + SoTypes.ZINR);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZINR); break;
    //      } case SoTypes.ZISR: {
    //        //console.log("work  type : " + SoTypes.ZISR);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZISR); break;
    //      } case SoTypes.ZIST: {
    //        //console.log("work  type : " + SoTypes.ZIST);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZIST); break;
    //      } case SoTypes.ZRCE: {
    //        //console.log("work  type : " + SoTypes.ZRCE);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRCE); break;
    //      } case SoTypes.ZRMV: {
    //        //console.log("work  type : " + SoTypes.ZRMV);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRMV); break;
    //      } case SoTypes.ZRPC: {
    //        //console.log("work  type : " + SoTypes.ZRPC);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRPC); break;
    //      } case SoTypes.ZRPM: {
    //        //console.log("work  type : " + SoTypes.ZRPM);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZRPM); break;
    //      } case SoTypes.ZSRO: {
    //        //console.log("work  type : " + SoTypes.ZSRO);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZSRO); break;
    //      } case SoTypes.ZUDN: {
    //        //console.log("work  type : " + SoTypes.ZUDN);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZUDN); break;
    //      } case SoTypes.ZMMR: {
    //        //console.log("work  type : " + SoTypes.ZMMR);
    //        queryPart = WL.JSONStore.QueryPart().equal("worktype", SoTypes.ZMMR); break;
    //      }
    //    }
    //
    //    this.jsonStoreCrud
    //      .getSearchRecordNoLimit(Domains.UserStatus, queryPart)
    //      .then(result => {
    //
    //        this.userStsGroupList = result;
    //        var tempUserList = [];
    //
    //        // Setting Display User Status
    //        var statusNDescription: any;
    //        statusNDescription = new UserStatus();
    //        for (var i = 0; i < this.userStsGroupList.length; i++) {
    //          statusNDescription = {};
    //          statusNDescription.ta0kiv = this.userStsGroupList[i].json.ta0kiv;
    //          statusNDescription.description = this.userStsGroupList[i].json.description;
    //          tempUserList.push(statusNDescription);
    //        }
    //        this.userStsGroupList = [];
    //        this.userStsGroupList = tempUserList;
    //        
    //        /*
    //         *  CR001 KIV Management start
    //         *
    //        if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDTECO" || this.woStatus === "PCBNT") {
    //          setTimeout(() => {
    //            tempUserList = [];
    //            //this.userStsGroupList.json.sort(this.gf.dynamicSort('ta0kiv'));
    //            // console.log("Total: " + this.userStsGroupList.length);
    //            for (var i = 0; i < this.userStsGroupList.length; i++) {
    //              // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
    //              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
    //              
    //                tempUserList.push(this.userStsGroupList[i]);
    //                // tempUserList.push(statusNDescription);
    //              }
    //            }
    //            this.userStsGroupList = [];
    //            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //          }, 1000);
    //        } else if (this.woStatus === "PENDKIV") {
    //          setTimeout(() => {
    //            tempUserList = [];
    //
    //            // console.log("Total: " + this.userStsGroupList.length);
    //            for (var i = 0; i < this.userStsGroupList.length; i++) {
    //              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == true) {
    //                //  console.log("Add: " + this.userStsGroupList[i].ta0kiv);
    //                tempUserList.push(this.userStsGroupList[i]);
    //              }
    //            }
    //            this.userStsGroupList = [];
    //            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //          }, 1000);
    //        }
    //        //  CR001 KIV Management End
    //        */
    //
    //        // CR001 KIV Management Start        
    //        if (this.woStatus == "INPRG" || this.woStatus === "PCBNT") {
    //          setTimeout(() => {
    //            var tempUserList = [];            
    //            for (var i = 0; i < this.userStsGroupList.length; i++) {
    //              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === false && this.userStsGroupList[i].ta0kiv.startsWith("CK") === false && this.userStsGroupList[i].ta0kiv.startsWith("TK") === false) {  //CR001 KIV Management          
    //                tempUserList.push(this.userStsGroupList[i]);
    //              }
    //            }
    //            console.log("Total User Status : " + tempUserList.length);
    //            console.log("INPRG User Status : "+JSON.stringify(tempUserList));
    //            this.userStsGroupList = [];
    //            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //            console.log("Total User Status : " + this.userStsGroupList.length);
    //            console.log("INPRG User Status : "+JSON.stringify(this.userStsGroupList));
    //          }, 1000);
    //        } else if (this.woStatus == "PENDKIV") {
    //          setTimeout(() => {
    //            var tempUserList = [];            
    //            console.log("Total User Status : " + this.userStsGroupList.length);
    //            console.log('Status KIV');
    //            for (var i = 0; i < this.userStsGroupList.length; i++) {              
    //              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true || this.userStsGroupList[i].ta0kiv.startsWith("TK") === true || this.userStsGroupList[i].ta0kiv.startsWith("CK") === true) {   //CR001 KIV Management
    //                console.log('Push User Status '+this.userStsGroupList[i].ta0kiv+' to KIV bucket');
    //                tempUserList.push(this.userStsGroupList[i]);
    //              }
    //            }
    //            console.log("Total User Status : " + tempUserList.length);
    //            console.log("KIV User Status : "+JSON.stringify(tempUserList));
    //            this.userStsGroupList = [];
    //            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //            console.log("Total User Status : " + this.userStsGroupList.length);
    //            console.log("KIV User Status : "+JSON.stringify(this.userStsGroupList));
    //          }, 1000);
    //        } else if (this.woStatus == "PENDTECO") {
    //          setTimeout(() => {
    //            var tempUserList = [];            
    //            for (var i = 0; i < this.userStsGroupList.length; i++) {              
    //              if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false) {  //CR001 KIV Management          
    //                tempUserList.push(this.userStsGroupList[i]);
    //              }
    //            }
    //            console.log("Total User Status : " + tempUserList.length);
    //            console.log("TECO User Status : "+JSON.stringify(tempUserList));
    //            this.userStsGroupList = [];
    //            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //            console.log("Total User Status : " + this.userStsGroupList.length);
    //            console.log("TECO User Status : "+JSON.stringify(this.userStsGroupList));
    //          }, 1000);
    //        } else if (this.woStatus == "PENDCLSD") {
    //          setTimeout(() => {
    //            var tempUserList = [];            
    //            for (var i = 0; i < this.userStsGroupList.length; i++) {              
    //              if (this.userStsGroupList[i].ta0kiv.startsWith("K") === false && this.userStsGroupList[i].ta0kiv.startsWith("TK") === false && this.userStsGroupList[i].ta0kiv.startsWith("CK") === false) {  //CR001 KIV Management
    //                tempUserList.push(this.userStsGroupList[i]);
    //              }
    //            }
    //            console.log("Total User Status : " + tempUserList.length);
    //            console.log("CLSD User Status : "+JSON.stringify(tempUserList));
    //            this.userStsGroupList = [];
    //            this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //            console.log("Total User Status : " + this.userStsGroupList.length);
    //            console.log("CLSD User Status : "+JSON.stringify(this.userStsGroupList));
    //          }, 1000);
    //        }
    //        // CR001 KIV Management End
    //      });
    //
    //
    //  }
    ServiceDetailsPage.prototype.goToStatus = function () {
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("ChangeStatusPage", "");
    };
    ServiceDetailsPage.prototype.goToServiceExecution = function (item) {
        var _this = this;
        //this.globel.setLoadingTimeout(5000);
        // console.log("item._id====" + this.items._id + "   :   " + this.items.json);
        // console.log("came to go to service execution function.");
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present().then(function () {
            if (_this.gv.departContent === 'seal') {
                var newRootNav = _this.appCtrl.getRootNavById("n4");
                newRootNav.push("SealServiceExecutionPage", _this.items);
            }
            else if (_this.gv.departContent === 'lpc') {
                var newRootNav = _this.appCtrl.getRootNavById("n4");
                newRootNav.push("ServiceExecutionPage", _this.items);
            }
            else {
                var newRootNav = _this.appCtrl.getRootNavById("n4");
                newRootNav.push("ServiceExecutionPage", _this.items);
            }
            loading.dismiss();
        });
        this.gf.loadingTimer(loading);
    };
    ServiceDetailsPage.prototype.checkServiceCover = function () {
        if (this.showServiceCover) {
            this.showServiceCover = false;
        }
        else {
            this.showServiceCover = true;
        }
    };
    ServiceDetailsPage.prototype.locationCoordination = function () {
        var _this = this;
        var options = {
            enableHighAccuracy: true,
        };
        this.geolocation
            .getCurrentPosition(options)
            .then(function (resp) {
            // console.log(" coords latitude : " + resp.coords.latitude);
            _this.items.json.woserviceaddress[0].latitudey = resp.coords.latitude;
            // console.log(" coords longitude : " + resp.coords.longitude);
            _this.items.json.woserviceaddress[0].longitudex = resp.coords.longitude;
            _this.items.json.woserviceaddress[0].referencepoint = resp.coords.accuracy;
        })
            .catch(function (error) {
            // console.log("Error getting location", error);
        });
    };
    ServiceDetailsPage.prototype.validationForKIV = function () {
        if ((typeof (this.items.json.ta0wouserstatus) === "undefined" || this.items.json.ta0wouserstatus.length === 0 || typeof (this.ta0wouserstatus) === "undefined" || this.ta0wouserstatus.length === 0)) {
            this.validateUserSts1 = true;
            this.gf.warningAlert('User Status', 'Please select atleast 1 user status', 'Close');
        }
        else if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
            this.validatePhoto = true;
            this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
        }
    };
    ServiceDetailsPage.prototype.validationForCLS = function () {
        if (typeof (this.items.json.loc_attachmentCount) === 'undefined' || this.items.json.loc_attachmentCount === 0) {
            this.buttonForServiceExecution = true;
            this.validatePhoto = true;
            this.gf.warningAlert('Attachment', 'Please attach atleast 1 attachment', 'Close');
        }
    };
    /**
     * Validation for TECO status
     * Created : Alif
     * Date    : 04-12-2018
     */
    ServiceDetailsPage.prototype.validationForTeco = function () {
        var _this = this;
        console.log("Device Replacement Validation.");
        // Checking Service Order Done Sync or Not.
        // Alif (21.06.2019)
        // Check dirty for the workorder..
        this.jsonStoreCrud.getDirtyCheck(this.items, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
            // Checking Result 0 = Not Sync, 1 = Sync Complete, 2 = Error Promise
            if (result > 0) {
                setTimeout(function () {
                    _this.gf.displayToast("Service Order details changed doesn't updated. Please try update manually..");
                    _this.buttonForServiceExecution = true;
                }, 1000);
            }
            else {
                if (!_this.gv.testMobile) {
                    // Checking Data to TECO Serviec Order
                    switch (_this.items.json.worktype) {
                        case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL:
                        case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR: {
                            _this.validateTeco = true;
                            //   case SoTypes.ZIST:
                            //   case SoTypes.ZRMV:
                            //   case SoTypes.ZUDN:
                            //   case SoTypes.ZRPC:
                            //   case SoTypes.ZCER:
                            // case SoTypes.ZISR: {
                            _this.validationUserStatus();
                            _this.validateTeco = false;
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC: {
                            // Variables
                            var message = "<p>";
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
                            // Checking device status and indicatior. // atleast 1 meter
                            var removeDevice = devices.filter(function (item) {
                                return item.ta0removeind === true;
                            });
                            var newDevice = devices.filter(function (item) {
                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM ||
                                    item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM ||
                                    item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT || item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT);
                            });
                            /**
                             * Reason   : To allow user adding new device without replace existing device.
                             * Created  : 14-02-2019
                             */
                            if ((removeDevice.length === 0 && newDevice.length === 0) || (removeDevice.length > newDevice.length)) {
                                // Message
                                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                                // Display message error
                                var alert_1 = _this.alertCtrl.create({
                                    title: "REMINDER",
                                    message: message,
                                    buttons: ["Close"]
                                });
                                alert_1.present();
                                _this.buttonForServiceExecution = true;
                            }
                            else {
                                // Validation Service Execution Flag Status
                                if (typeof (_this.items.json.ta0feeder) !== 'undefined') {
                                    if (_this.items.json.ta0feeder.length > 0) {
                                        _this.validationServiceExecution();
                                    }
                                    else {
                                        _this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        _this.buttonForServiceExecution = true;
                                    }
                                }
                                else {
                                    _this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                    _this.buttonForServiceExecution = true;
                                }
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO: {
                            // Variables
                            var message = "<p>";
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
                            // Checking device status and indicatior.
                            var replaceDevice = devices.filter(function (item) {
                                return item.ta0replaceind === true;
                            });
                            if (replaceDevice.length === 0) {
                                // Message
                                var message = "<p>This work order cannot <b>TECO</b> because no replacement device!<br>Please complete <b>Service Execution</b> to continue.</p>";
                                // Display message error
                                var alert_2 = _this.alertCtrl.create({
                                    title: "REMINDER",
                                    message: message,
                                    buttons: ["Close"]
                                });
                                alert_2.present();
                                _this.buttonForServiceExecution = true;
                            }
                            else {
                                // Validation Service Execution Flag Status
                                if (typeof (_this.items.json.ta0feeder) !== 'undefined') {
                                    if (_this.items.json.ta0feeder.length > 0) {
                                        _this.validationServiceExecution();
                                    }
                                    else {
                                        _this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        _this.buttonForServiceExecution = true;
                                    }
                                }
                                else {
                                    _this.gf.warningAlert("REMINDER", "<p>This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                    _this.buttonForServiceExecution = true;
                                }
                            }
                            break;
                        }
                        case __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN: {
                            var devices = [], newDevice = [];
                            var fStatus = [];
                            var feeder;
                            var mm, cm, ct, pt;
                            var msg = "<p>", msgTitle = [], msgBody = [];
                            var msgTitleF, msgBodyF;
                            // Checking Device
                            if (typeof (_this.items.json.ta0feeder) !== "undefined" && _this.items.json.ta0feeder !== null) {
                                feeder = JSON.parse(JSON.stringify(_this.items.json.ta0feeder));
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
                                    return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                                });
                                if (replaceDevice.length > 0) {
                                    // Checking device voltage
                                    for (var m = 0; m < replaceDevice.length; m++) {
                                        // Reset cm, ct, pt
                                        cm = [], ct = [], pt = [];
                                        if (replaceDevice[m].ta0devicevoltage === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                            // Check new ct transformer
                                            ct = devices.filter(function (item) {
                                                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                            });
                                            if (ct.length < 3) {
                                                msgTitle.push("<b>" + replaceDevice[m].description + " - " + replaceDevice[m].ta0feedercode + "</b><br>");
                                                msgBody.push("Current Transformer (CT) is missing or not install! <br>");
                                            }
                                            else {
                                                fStatus.push({ "status": true });
                                            }
                                        }
                                        else if (replaceDevice[m].ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                            // Check new ct transformer
                                            ct = devices.filter(function (item) {
                                                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
                                            });
                                            // Check new pt transformer
                                            pt = devices.filter(function (item) {
                                                return item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT;
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
                                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK && item.ta0removeind === false); // 1
                                            });
                                            // Check indicator remove existing ct transformer
                                            ct = devices.filter(function (item) {
                                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT && item.ta0removeind === false); // 3
                                            });
                                            // Check indicator remove existing pt transformer
                                            pt = devices.filter(function (item) {
                                                return (item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT && item.ta0removeind === false); // 3
                                            });
                                            if (typeof (feeder[i].nFeederVoltage) !== "undefined") {
                                                if (feeder[i].nFeederVoltage === __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                                                else if (feeder[i].nFeederVoltage > __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
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
                                                _this.buttonForServiceExecution = true;
                                            }
                                        }
                                    }
                                    newDevice.push(replaceDevice);
                                }
                                else {
                                    msgTitleF = "This work order cannot <b>TECO</b> because no replacement device!<br>";
                                    msgBodyF = "<br>Please complete <b>Service Execution</b> to continue.";
                                    _this.buttonForServiceExecution = true;
                                    fStatus.push({ "status": false });
                                }
                                var status = fStatus.filter(function (item) {
                                    return item.status === true;
                                });
                                var statusFalse = fStatus.filter(function (item) {
                                    return item.status === false;
                                });
                                /**
                                 * Reason   : Remove 1 Meter only, second feeder remove all device.
                                 * Edited   : ALif (16.07.2019)
                                 */
                                if (status.length !== feeder.length && statusFalse.length === 0) {
                                    if (statusFalse.length !== 0) {
                                        for (var i = 0; i < msgBody.length; i++) {
                                            msg = msg + msgBody[i];
                                            // msg = msg + msgTitle[i] + msgBody[i];
                                        }
                                        msg = msg + "</p>";
                                        // Display message error
                                        var alert_3 = _this.alertCtrl.create({
                                            title: "REMINDER",
                                            message: msg,
                                            buttons: ["Close"]
                                        });
                                        alert_3.present();
                                        _this.buttonForServiceExecution = true;
                                    }
                                }
                                else if (statusFalse.length > 0) {
                                    msg = msg + msgTitleF + msgBodyF;
                                    msg = msg + "</p>";
                                    // Display message error
                                    var alert_4 = _this.alertCtrl.create({
                                        title: "REMINDER",
                                        message: msg,
                                        buttons: ["Close"]
                                    });
                                    alert_4.present();
                                    _this.buttonForServiceExecution = true;
                                }
                                else {
                                    // Validation Service Execution Flag Status
                                    if (typeof (_this.items.json.ta0feeder) !== 'undefined') {
                                        if (_this.items.json.ta0feeder.length > 0) {
                                            _this.validationServiceExecution();
                                        }
                                        else {
                                            _this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                            _this.buttonForServiceExecution = true;
                                        }
                                    }
                                    else {
                                        _this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        _this.buttonForServiceExecution = true;
                                    }
                                }
                            }
                            else {
                                // Validation Service Execution Flag Status
                                if (typeof (_this.items.json.ta0feeder) !== 'undefined') {
                                    if (_this.items.json.ta0feeder.length > 0) {
                                        _this.validationServiceExecution();
                                    }
                                    else {
                                        _this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                        _this.buttonForServiceExecution = true;
                                    }
                                }
                                else {
                                    _this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.</p>", "Close");
                                    _this.buttonForServiceExecution = true;
                                }
                            }
                            break;
                        }
                        default: {
                            // Validation Service Execution Flag Status
                            if (typeof (_this.items.json.ta0feeder) !== 'undefined') {
                                if (_this.items.json.ta0feeder.length > 0) {
                                    _this.validationServiceExecution();
                                }
                                else {
                                    _this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                    _this.buttonForServiceExecution = true;
                                }
                            }
                            else {
                                _this.gf.warningAlert("REMINDER", "This work order cannot <b>TECO</b> because no feeder is available!<br>Please complete <b>Service Execution</b> to continue.", "Close");
                                _this.buttonForServiceExecution = true;
                            }
                        }
                    }
                }
                else {
                    _this.gf.displayToast("No Network Connection...");
                }
            }
        });
    };
    ServiceDetailsPage.prototype.statusChange = function (event) {
        var _this = this;
        this.editField = true;
        this.showAms = true;
        this.showAmscg = true;
        this.items.json.ta0userstatus1 = "";
        this.items.json.ta0userstatus2 = "";
        this.items.json.ta0userstatus3 = "";
        this.items.json.ta0userstatus4 = "";
        /** Clear ta0wouserstatus */
        if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
            if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDKIV") {
                this.ta0wouserstatus = [];
                this.items.json.ta0wouserstatus = [];
            }
        }
        this.lookup();
        var tempUserList = [];
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        if (this.woStatus == "INPRG") {
            // Set Default
            this.showServiceExecution = false;
            this.showButtonImage = false;
            this.buttonForServiceExecution = false;
            this.editField = false;
            this.showAms = false;
            this.showAmscg = false;
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
            loading.dismiss();
            this.validationForTeco();
        }
        else if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
            if (this.gv.departmentCode === '03') {
                // comments because directly assign in html.
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
        }
        else {
            loading.dismiss();
            // console.log("Not checking..");
        }
        // Filtering User Status Based on SO Types
        if (this.woStatus == "INPRG") {
            setTimeout(function () {
                var tempUserList = [];
                var combineStatusNDescription = [];
                // console.log("Total: " + this.userStsGroupList.length);
                for (var i = 0; i < _this.userStsGroupList.length; i++) {
                    // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
                    if (_this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                        tempUserList.push(_this.userStsGroupList[i]);
                    }
                }
                _this.userStsGroupList = [];
                _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                loading.dismiss();
            }, 1000);
        }
        else if (this.woStatus == "PENDKIV") {
            setTimeout(function () {
                // var combineStatusNDescription = [];
                // console.log("Total: " + this.userStsGroupList.length);
                for (var i = 0; i < _this.userStsGroupList.length; i++) {
                    // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
                    if (_this.userStsGroupList[i].ta0kiv.startsWith("K") === true) {
                        tempUserList.push(_this.userStsGroupList[i]);
                    }
                }
                _this.userStsGroupList = [];
                _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                loading.dismiss();
            }, 1000);
        }
        else if (this.woStatus == "PENDTECO") {
            setTimeout(function () {
                // var combineStatusNDescription = [];
                //console.log("Total: " + this.userStsGroupList.length);
                for (var i = 0; i < _this.userStsGroupList.length; i++) {
                    // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
                    if (_this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                        tempUserList.push(_this.userStsGroupList[i]);
                    }
                }
                _this.userStsGroupList = [];
                _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                loading.dismiss();
            }, 1000);
        }
        else if (this.woStatus == "PENDCLSD") {
            setTimeout(function () {
                // var combineStatusNDescription = [];
                //console.log("Total: " + this.userStsGroupList.length);
                for (var i = 0; i < _this.userStsGroupList.length; i++) {
                    // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
                    if (_this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {
                        tempUserList.push(_this.userStsGroupList[i]);
                    }
                }
                _this.userStsGroupList = [];
                _this.userStsGroupList = tempUserList.sort(_this.gf.dynamicSort('ta0kiv'));
                loading.dismiss();
            }, 1000);
        }
        else {
            loading.dismiss();
        }
        /** Clear ta0wouserstatus */
        if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
            if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD") {
                this.ta0wouserstatus = [];
            }
        }
    };
    // KIV Management  
    // async statusChange(event) {
    //    debugger;
    //    console.log("Access statusChange");
    //    console.log("KIV User Status : "+JSON.stringify(tempUserList));
    //    console.log("KIV User Status : "+JSON.stringify(this.ta0wouserstatus));
    //
    //    this.editField = true;
    //    this.showAms = true;
    //    this.showAmscg = true;
    //    this.items.json.ta0userstatus1 = "";
    //    this.items.json.ta0userstatus2 = "";
    //    this.items.json.ta0userstatus3 = "";
    //    this.items.json.ta0userstatus4 = "";
    //
    //    /** Clear ta0wouserstatus */
    //    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
    //      if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD" || this.woStatus === "PENDKIV") {
    //        this.ta0wouserstatus = [];
    //        this.items.json.ta0wouserstatus = [];
    //      }
    //    }
    //
    //    await this.lookup();  //CR001 KIV Management           
    //    var tempUserList = [];
    //
    //    let loading = this.loadingCtrl.create({
    //      content: "Loading..."
    //    });
    //    loading.present();
    //    this.gf.loadingTimer(loading);
    //
    //    if (this.woStatus == "INPRG") {
    //      // Set Default
    //      this.showServiceExecution = false;
    //      this.showButtonImage = false;
    //      this.buttonForServiceExecution = false;
    //      this.editField = false;
    //      this.showAms = false;
    //      this.showAmscg = false;
    //
    //    } else if (this.woStatus === 'PENDKIV') {
    //      loading.dismiss();
    //      this.validationForKIV();
    //      // this.buttonForServiceExecution = false;     
    //    } else if (this.woStatus === 'PENDCLSD') {
    //      loading.dismiss();
    //      this.validationForCLS();
    //      // this.buttonForServiceExecution = false;
    //    } else if (this.woStatus === 'PENDTECO') {
    //      loading.dismiss();
    //      this.validationForTeco();
    //    } else if (this.woStatus === 'PCBNT' || this.woStatus === 'PSTSV') {
    //      if (this.gv.departmentCode === '03') {
    //        // comments because directly assign in html.
    //        ///this.items.json.ta0newworkcentervoltage =  '04';
    //        this.items.json.ta0passwoind = 'O';
    //      } else if (this.gv.departmentCode === '04') {
    //        //this.items.json.ta0newworkcentervoltage = '03';
    //        this.items.json.ta0passwoind = 'O';
    //      }
    //    }
    //
    //    // Change Description
    //    if (this.woStatusOri == "PENDTECO") {
    //      this.items.json.status_description = "COMPLETE";
    //      this.showServiceExecution = false;
    //      //End for checking ZIST for TECO status
    //    } else if (this.woStatusOri == "INPRG") {
    //      this.items.json.status_description = "In Progress";
    //      this.showServiceExecution = true;
    //      this.showButtonImage = true;
    //    } else if (this.woStatusOri == "PENDKIV") {
    //      this.items.json.status_description = "KIV";
    //      this.showServiceExecution = false;
    //      this.showButtonImage = false;
    //    } else if (this.woStatusOri == "PENDCLSD") {
    //      this.items.json.status_description = "CLOSE";
    //      this.showServiceExecution = false;
    //      this.showButtonImage = false;
    //    } else if (this.woStatusOri == "PCBNT") {
    //      this.showServiceExecution = false;
    //      this.showButtonImage = false;
    //    } //else {   //CR001 KIV Management
    //      loading.dismiss();
    //      // console.log("Not checking..");
    //    //}  //CR001 KIV Management
    //
    //    // Filtering User Status Based on SO Types
    //    /*  
    //     * CR001 KIV Management Start
    //     *
    //    if (this.woStatus == "INPRG") {
    //      setTimeout(() => {
    //        var tempUserList = [];
    //        var combineStatusNDescription = [];
    //        // console.log("Total: " + this.userStsGroupList.length);
    //        for (var i = 0; i < this.userStsGroupList.length; i++) {
    //          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
    //          // if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {  //CR001 KIV Management          
    //          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management          
    //            tempUserList.push(this.userStsGroupList[i]);
    //          }
    //        }
    //        console.log("Total User Status : " + tempUserList.length);
    //        console.log("INPRG User Status : "+JSON.stringify(tempUserList));
    //        this.userStsGroupList = [];
    //        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //        console.log("Total User Status : " + this.userStsGroupList.length);
    //        console.log("INPRG User Status : "+JSON.stringify(this.userStsGroupList));
    //        loading.dismiss();
    //      }, 1000);
    //    } else if (this.woStatus == "PENDKIV") {
    //      setTimeout(() => {
    //        // var combineStatusNDescription = [];
    //        console.log("Total User Status : " + this.userStsGroupList.length);
    //        console.log('Status KIV');
    //        for (var i = 0; i < this.userStsGroupList.length; i++) {
    //          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
    //          //if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true) {   //CR001 KIV Management          
    //          if (this.userStsGroupList[i].ta0kiv.startsWith("K") === true || this.userStsGroupList[i].ta0kiv.startsWith("TK") === true) {   //CR001 KIV Management
    //            console.log('Push User Status '+this.userStsGroupList[i].ta0kiv+' to KIV bucket');
    //            tempUserList.push(this.userStsGroupList[i]);
    //          }
    //        }
    //        console.log("Total User Status : " + tempUserList.length);
    //        console.log("KIV User Status : "+JSON.stringify(tempUserList));
    //        this.userStsGroupList = [];
    //        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //        console.log("Total User Status : " + this.userStsGroupList.length);
    //        console.log("KIV User Status : "+JSON.stringify(this.userStsGroupList));
    //        loading.dismiss();
    //      }, 1000);
    //    } else if (this.woStatus == "PENDTECO") {
    //      setTimeout(() => {
    //        // var combineStatusNDescription = [];
    //        //console.log("Total: " + this.userStsGroupList.length);
    //        for (var i = 0; i < this.userStsGroupList.length; i++) {
    //          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
    //          // if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) {  //CR001 KIV Management          
    //          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("CK") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management          
    //            tempUserList.push(this.userStsGroupList[i]);
    //          }
    //        }
    //        console.log("Total User Status : " + tempUserList.length);
    //        console.log("TECO User Status : "+JSON.stringify(tempUserList));
    //        this.userStsGroupList = [];
    //        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //        console.log("Total User Status : " + this.userStsGroupList.length);
    //        console.log("TECO User Status : "+JSON.stringify(this.userStsGroupList));
    //        loading.dismiss();
    //      }, 1000);
    //    } else if (this.woStatus == "PENDCLSD") {
    //      setTimeout(() => {
    //        // var combineStatusNDescription = [];
    //        //console.log("Total: " + this.userStsGroupList.length);
    //        for (var i = 0; i < this.userStsGroupList.length; i++) {
    //          // console.log("String: " + this.userStsGroupList[i].json.ta0kiv.substring(0, 3));
    //          //if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false) { //CR001 KIV Management
    //          if (this.userStsGroupList[i].ta0kiv.startsWith("K") == false && this.userStsGroupList[i].ta0kiv.startsWith("TK") == false) {  //CR001 KIV Management
    //            tempUserList.push(this.userStsGroupList[i]);
    //          }
    //        }
    //        console.log("Total User Status : " + tempUserList.length);
    //        console.log("CLSD User Status : "+JSON.stringify(tempUserList));
    //        this.userStsGroupList = [];
    //        this.userStsGroupList = tempUserList.sort(this.gf.dynamicSort('ta0kiv'));
    //        console.log("Total User Status : " + this.userStsGroupList.length);
    //        console.log("CLSD User Status : "+JSON.stringify(this.userStsGroupList));
    //        loading.dismiss();
    //      }, 1000);
    //    } else {
    //      loading.dismiss();
    //    }
    //    * CR001 KIV Management End
    //    */
    //
    //    /** Clear ta0wouserstatus */
    //    if (typeof (this.items.json.ta0wouserstatus) !== "undefined") {
    //      if (this.woStatus === "INPRG" || this.woStatus === "PENDCLSD") {
    //        this.ta0wouserstatus = [];
    //      }
    //    }    
    //  }
    /**
     * Validation User Status for MRPM and WMAT
     * @param
     */
    // Edited By Ameer (12/10/2018)
    ServiceDetailsPage.prototype.validationUserStatus = function () {
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
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
                            this.items.json.ta0suborderindicator = false;
                            this.userStatusDefaultChange(this.ta0wouserstatus, '');
                        }
                    }
                    else {
                        // Because MRPM is selected.
                        this.items.json.ta0suborderindicator = true;
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
            }
            if (this.validateTeco === true) {
                this.validationServiceExecution();
            }
        }
    };
    ServiceDetailsPage.prototype.userStatusDefaultChange = function (event, userValue) {
        console.log("Access userStatusDefaultChange");
        var trasValue = false;
        var bbrq = false;
        var tmtr = false;
        var wmt = false;
        var mrpm = false;
        var wmat;
        var bbrqSelection;
        var device = [];
        // if (this.items.json.worktype === SoTypes.ZINL) {
        /** Clear User Status */
        this.userStatus = [];
        this.items.json.ta0wouserstatus = [];
        if (event.length <= 4) {
            // console.log("User Status (Less than 4): " + this.userStatus);
            for (var i = 0; i < event.length; i++) {
                this.userStatus.push(event[i]);
                //console.log(" VALUE: " + this.userStatus[i]);
                var saveUserStatus = new __WEBPACK_IMPORTED_MODULE_3__pojo_UserStatus__["a" /* UserStatus */]();
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
                            device = [];
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
        this.validationUserStatus();
    };
    ServiceDetailsPage.prototype.userStatusChange = function (value) {
        debugger;
        console.log("userStsGroupList : " + JSON.stringify(this.userStsGroupList));
        console.log("ta0wouserstatus : " + JSON.stringify(this.ta0wouserstatus));
        // console.log("UserStatusChangedClick..." + value);
        if (this.items.json.worktype === 'ZIST' || this.items.json.worktype === 'ZRMV' || this.items.json.worktype === 'ZSRO' || this.items.json.worktype === 'ZRPM' || this.items.json.worktype === 'ZUDN' || this.items.json.worktype === 'ZRPC' || this.items.json.worktype === 'ZINL') {
            if (value === 'TRAS') {
                // this.userStsGroupList.json.ta0kiv.isDisabled
            }
        }
        this.validateUserSts1 = false;
        this.validatePhoto = false;
    };
    ServiceDetailsPage.prototype.isDisabled = function (value) {
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
    ServiceDetailsPage.prototype.saveAction = function () {
        var _this = this;
        var validateKIVStatus = true;
        var WmtStatus = true;
        this.items.json.status = this.woStatus;
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
        // If status PENDTECO
        if (this.woStatus === "PENDTECO") {
            if ((typeof (this.items.json.woserviceaddress[0].latitudey) == "undefined" && this.items.json.woserviceaddress[0].latitudey !== null && this.items.json.woserviceaddress[0].latitudey !== "") &&
                (typeof (this.items.json.woserviceaddress[0].longitudex) == "undefined" && this.items.json.woserviceaddress[0].longitudex !== null && this.items.json.woserviceaddress[0].longitudex !== "")) {
                this.buttonForServiceExecution = true;
                this.gf.warningAlert('GPS Coordinate', 'Location coordinate is missing. Please check again to continue..', 'Close');
            }
        }
        //Ad-Hoc
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
            // Saving new clone Service Order
            this.items.json.loc_adhocReplacement = [];
            this.items.json.loc_adhocReplacement = JSON.parse(JSON.stringify(this.woDetails));
        }
        // Changing Sub Indicator for ZRCE & ZISR
        if (this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR || this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
            this.items.json.ta0subindicator = false;
        }
        //Checking Voltage LV/MVHC for setting Ct Pt
        if (this.items.json.ta0installationvoltage === '05' ||
            this.items.json.ta0installationvoltage === '06' ||
            this.items.json.ta0installationvoltage === '07' ||
            this.items.json.ta0installationvoltage === '08' ||
            this.items.json.ta0installationvoltage === '09' ||
            this.items.json.ta0installationvoltage === '10') {
            //save the location into workorder    
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
        if (validateKIVStatus === true && WmtStatus === true) {
            /** Copy Clone into Original */
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
            var alert_5 = this.alertCtrl.create({
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
                            // this.checkMandatoryField();
                            // if (this.validationMandatoryField === true) {
                            //console.log('Confirm clicked');
                            var loading = _this.loadingCtrl.create({
                                content: "Loading..."
                            });
                            loading.present();
                            _this.gf.loadingTimer(loading);
                            /**
                             * Reason   : Adding attribute 'lead' to work order (lead === userid)
                             * Created  : 21/02-2019
                             */
                            if (_this.itemsOri.json.status == "PENDKIV" || _this.itemsOri.json.status == "PENDCSLD" || _this.itemsOri.json.status == "PENDTECO") {
                                _this.itemsOri.json.lead = _this.gv.personid;
                            }
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
                            }
                            else if (_this.items.json.status == "PENDTECO") {
                                loading.dismiss();
                                /** Checking TECO for ZINL & ZINR */
                                if (_this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
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
                                        if (_this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || _this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
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
                                            }
                                        }
                                    }
                                }
                                /** Remove this code.. */
                                // Set default remove device = 0
                                var totalRemoveDevice_1 = 0;
                                // Checking validation TECO for ZRMV and ZRCE
                                if (_this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRMV || _this.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
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
                                        var alert_6 = _this.alertCtrl.create({
                                            title: 'Remove Device Status',
                                            subTitle: 'No device remove.',
                                            buttons: ['Dismiss']
                                        });
                                        alert_6.present();
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
                                        //console.log(" network details ..  : " + JSON.stringify(this.globel.checkNetwork()));
                                        // Remove out because of issue [User Status Missing (PENDTECO->COMP)]
                                        // Edited : ALif (27.03.2020)
                                        // setTimeout(() => {
                                        //   this;
                                        //   loading.onWillDismiss(() => {
                                        //     this.jsonStoreCrud.replaceWO(this.itemsOri, "LPCWORKORDER", true);
                                        //     this.globel.displayToast("Record locally updated.");
                                        //     loading.dismiss();
                                        //   });
                                        // }, 10000);
                                        var pagetype = 'statusPage';
                                        if (_this.woStatus === "CANCEL") {
                                            pagetype = 'followup';
                                        }
                                        //alert(this.globel.checkNetwork());
                                        /**
                                         * Reason   : Saving to local storage (json data).
                                         * Created  : 22-01-2019
                                         */
                                        _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                        if (_this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === _this.globel.checkNetwork() || __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === _this.globel.checkNetwork())) {
                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                            _this.globel.displayToast("Record locally updated.");
                                            loading.dismiss();
                                        }
                                        else if ((__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === _this.gf.checkNetwork())) {
                                            /**
                                             * Description: Change old(swift) to new(objective-c) plugin.
                                             * Edited: Alif (16.10.2019)
                                             * old --> mobilesignalswift.getSignalStrength
                                             * new --> cordova.plugins.MobileSignal.getSignalStrength
                                             */
                                            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                                                console.log('singnal strength login page : ' + _this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + _this.gf.findSignalStrength());
                                                if (_this.gv.deviceSignal <= data) {
                                                    var itemVal = _this.itemsOri;
                                                    //let feederVal = ta0feederList;
                                                    var objCopy = JSON.parse(JSON.stringify(itemVal));
                                                    //console.log(objCopy);
                                                    delete objCopy.json['ta0feeder'];
                                                    //console.log('test feeder val : ' + JSON.stringify(objCopy));
                                                    //feederVal.multiassetlocci.remove();
                                                    _this.dataService
                                                        .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                        .then(function (results) {
                                                        //console.log(JSON.stringify(results));
                                                        var res;
                                                        res = results;
                                                        if (res.processStatus === 'success') {
                                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
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
                                            _this.dataService
                                                .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                .then(function (results) {
                                                //console.log(JSON.stringify(results));
                                                var res;
                                                res = results;
                                                if (res.processStatus === 'success') {
                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
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
                                }, 1000);
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
                                //alert(this.globel.checkNetwork());
                                console.log(JSON.stringify(_this.itemsOri));
                                /**
                                 * Reason   : Saving to local storage (json data).
                                 * Created  : 22-01-2019
                                 */
                                _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                if (_this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === _this.globel.checkNetwork() || __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === _this.globel.checkNetwork())) {
                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", true);
                                    _this.globel.displayToast("Record locally updated.");
                                    loading.dismiss();
                                }
                                else if ((__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === _this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === _this.gf.checkNetwork())) {
                                    /**
                                     * Description: Change old(swift) to new(objective-c) plugin.
                                     * Edited: Alif (16.10.2019)
                                     * old --> mobilesignalswift.getSignalStrength
                                     * new --> cordova.plugins.MobileSignal.getSignalStrength
                                     */
                                    cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                                        if (_this.gv.deviceSignal <= data) {
                                            var itemVal = _this.itemsOri;
                                            //let feederVal = ta0feederList;
                                            var objCopy = JSON.parse(JSON.stringify(itemVal));
                                            //console.log(objCopy);
                                            delete objCopy.json['ta0feeder'];
                                            //console.log('test feeder val : ' + JSON.stringify(objCopy));
                                            //feederVal.multiassetlocci.remove();
                                            _this.dataService
                                                .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                                .then(function (results) {
                                                //console.log(JSON.stringify(results));
                                                var res;
                                                res = results;
                                                if (res.processStatus === 'success') {
                                                    _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
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
                                    _this.dataService
                                        .changeStatus(_this.woStatus, _this.itemsOri.json.wonum, objCopy, pagetype)
                                        .then(function (results) {
                                        //console.log(JSON.stringify(results));
                                        var res;
                                        res = results;
                                        if (res.processStatus === 'success') {
                                            _this.jsonStoreCrud.replaceWO(_this.itemsOri, "LPCWORKORDER", false);
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
                            // }// Close IF condition for validationMandatoryField
                        } // close handle
                    }
                ]
            });
            alert_5.present();
        }
    };
    ServiceDetailsPage.prototype.changeStatusParentItem = function () {
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
    ServiceDetailsPage.prototype.goToUploadPhoto = function () {
        console.log("Inside goToUploadPhoto");
        var newRootNav = this.appCtrl.getRootNavById("n4");
        console.log("goToUploadPhoto >>> push to AttachmentPage");
        //console.log("goToUploadPhoto >>> this.items : "+JSON.stringify(this.items));
        newRootNav.push("AttachmentPage", this.items);
    };
    ServiceDetailsPage.prototype.goBack = function () {
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
    ServiceDetailsPage.prototype.createAdhocFollowUp = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation ?',
            message: 'Do you agree to add adhoc, then you are not able to replace device ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
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
                                _this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
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
    ServiceDetailsPage.prototype.resultChanges = function (res, loading, index) {
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
            var alert_7 = this.alertCtrl.create({
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
            alert_7.present();
        }
    };
    ServiceDetailsPage.prototype.changeAdhocRemove = function (index, wonum, formAction) {
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
            var alert_8 = this.alertCtrl.create({
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
                                _this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
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
                                            _this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
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
            alert_8.present();
        }
        else {
            var alert_9 = this.alertCtrl.create({
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
            alert_9.present();
        }
    };
    ServiceDetailsPage.prototype.deletingAdhocByCondition = function (index, wonum, siteId, loading) {
        var _this = this;
        var item = { json: siteId };
        console.log('siteId : ' + JSON.stringify(item));
        this.dataService
            .changeStatus('CANCEL', wonum, item, 'followup')
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
    ServiceDetailsPage.prototype.adhocValidationCheck = function () {
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
    ServiceDetailsPage.prototype.getNotObjects = function (obj, key, val) {
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
    ServiceDetailsPage.prototype.changeAdhocReplacement = function () {
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
            if (adhocWorktype[0].ta0relatedrecworktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
                parameter = [
                    { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE }] }
                ];
            }
            else if (adhocWorktype[0].ta0relatedrecworktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                parameter = [
                    { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR }] }
                ];
            }
        }
        else {
            parameter = [
                { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR }] },
                { $equal: [{ worktype: __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE }] }
            ];
        }
        //if (this.ta0subordercreationflag === true) {
        //console.log("Popup Message is here..");
        // retrieve data using query.
        this.jsonStoreCrud
            .getSearchRecordNoLimit_Device(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].SnCode, parameter)
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
                                var related = new __WEBPACK_IMPORTED_MODULE_12__pojo_ReleatedRecord__["a" /* RelatedRecord */]();
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
                                //console.log("Items " + JSON.stringify(this.items));
                                if (typeof (_this.items.json.relatedrecord) != 'undefined') {
                                    var relatedLen = _this.items.json.relatedrecord.length;
                                    _this.items.json.relatedrecord.push(related);
                                }
                                else {
                                    _this.items.json.relatedrecord = [];
                                    _this.items.json.relatedrecord.push(related);
                                }
                                loading1.dismiss();
                            }
                        }
                    ]
                };
                // Create alert with options setting.
                var alert_10 = _this.alertCtrl.create(options);
                alert_10.present();
            }
        }, 1000);
    };
    ServiceDetailsPage.prototype.passToNextTeam = function () {
        //console.log(' change to pass to next team.. ');
        this.itemsOri.json.ta0passwoind = 'O';
        this.items.json.ta0passwoind = 'O';
    };
    ServiceDetailsPage.prototype.getAMIData = function () {
        var _this = this;
        this.jsonStoreCrud.getAllRecord(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AmiData).then(function (result) {
            _this.amiitems = result;
            _this.stoleValueAMS(_this.amiitems);
        });
    };
    ServiceDetailsPage.prototype.stoleValueAMS = function (value) {
        var obj = JSON.parse(JSON.stringify(value));
        var array = [];
        for (var i = 0; i < obj.length; i++) {
            array[i] = obj[i]["json"]["ta0ams"];
        }
        var unique = array.filter(this.onlyUnique);
        this.amsstolevalue = unique;
    };
    ServiceDetailsPage.prototype.getDlLocationValue = function (domainId) {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": domainId }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alnitem = result;
        }).catch(function (error) {
            console.log("No Data Location", error);
        });
    };
    ServiceDetailsPage.prototype.getalnAnomalyType = function (domainId) {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": domainId }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alnAnomalyType = result;
        }).catch(function (error) {
            console.log("No Data Anamoly", error);
        });
    };
    ServiceDetailsPage.prototype.getalnAnomalyMain = function (domainId) {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": domainId }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alnAnomalyMain = result;
        }).catch(function (error) {
            console.log("Anomaly Main", error);
        });
    };
    ServiceDetailsPage.prototype.getalnAnomalyCategory = function (domainId) {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": domainId }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alnAnomalyCategory = result;
        }).catch(function (error) {
            console.log("Anomaly Category", error);
        });
    };
    ServiceDetailsPage.prototype.getalncorrectivecode = function (domainId) {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": domainId }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.alncorrectivecode = result;
        }).catch(function (error) {
            console.log("lncorrective Code", error);
        });
    };
    ServiceDetailsPage.prototype.getalnsncode = function (ta0sncode) {
        var _this = this;
        var querypart = [];
        querypart.push({ "$equal": [{ "ta0sncode": ta0sncode }] });
        this.jsonStoreCrud.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].SnCode, querypart).then(function (result) {
            var data = result;
            if (typeof (data[0]) !== "undefined") {
                _this.sncodedesc = data[0].json.ta0sncodedesc;
            }
        }).catch(function (error) {
            console.log("ln sn code", error);
        });
        /*   return new Promise((resolve, reject) => {
            var querypart: any = [];
            querypart.push({ "$equal": [{ "ta0sncode": ta0sncode }] });
            this.jsonStoreCrud.getSearchArrayResult(Domains.SnCode, querypart).then((result) => {
              var data = result;
              if (typeof (data[0]) !== "undefined") {
                this.sncodedesc = data[0].json.ta0sncodedesc;
              }
              // resolve();
        });
          }); */
    };
    ServiceDetailsPage.prototype.onlyUnique = function (value, index, self) {
        if (value !== undefined && value !== "") {
            return self.indexOf(value) === index;
        }
    };
    // AMS and AMCG
    ServiceDetailsPage.prototype.getAMSData = function (value) {
        var _this = this;
        if ((value != '') && (value !== 'undefined')) {
            var querypart = [];
            querypart = [{ "$equal": [{ "ta0ams": value }] }];
            this.jsonStoreCrud.getRecordsAssetDetails(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].AmiData, querypart).then(function (result) {
                _this.amscgstoleitems = result;
                _this.stoleValueAMSCG(_this.amscgstoleitems);
            }).catch(function () {
                console.log("No Data AMS");
            });
        }
        else {
            this.items.json.ta0amcg = '';
            this.showAmscg = true;
        }
    };
    ServiceDetailsPage.prototype.stoleValueAMSCG = function (value) {
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
    ServiceDetailsPage.prototype.validationServiceExecution = function () {
        this.checkObject = false;
        this.checkFlag = false;
        var feeder = JSON.parse(JSON.stringify(this.items.json.ta0feeder));
        if (typeof (feeder) !== "undefined") {
            var pending = [];
            var missing = [];
            for (var i = 0; i < feeder.length; i++) {
                if (typeof (feeder[i].feederSetDesign) !== "undefined") {
                    if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                        if (feeder[i].feederSetDesign[0].nFeederVoltage === this.gv.departmentCode) {
                            if (feeder[i].feederSetDesign[0].nFeederStatus === false && feeder[i].loc_haveNewDevice === true) {
                                pending.push(feeder[i]);
                            }
                        }
                    }
                    else {
                        if (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN) {
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
            if ((this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) || (this.items.json.worktype === __WEBPACK_IMPORTED_MODULE_6__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR)) {
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
            //console.log("PENDING: " + JSON.stringify(pending));
            if (pending.length > 0) {
                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                var alert_11 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: message,
                    buttons: ["Close"]
                });
                alert_11.present();
                /**
                 * Disabled 'Save' Button
                 * Created  : Alif
                 * Date     : 05-12-2018
                 */
                this.buttonForServiceExecution = true;
            }
            else if (missing.length > 0) {
                var message = "<p>This work order cannot <b>TECO</b>! <br>Please complete <b>Service Execution</b> to continue.</p>";
                var alert_12 = this.alertCtrl.create({
                    title: "REMINDER",
                    message: message,
                    buttons: ["Close"]
                });
                alert_12.present();
                /**
                 * Disabled 'Save' Button
                 * Created  : Alif
                 * Date     : 05-12-2018
                 */
                this.buttonForServiceExecution = true;
            }
        }
    };
    /**
    * Refresh Work Order Header Details
    * Created : Muhd Alif Tajudin
    * By      : 08/10/2018
    */
    // Refresh Header Details..
    ServiceDetailsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (!this.gv.testMobile) {
            this.jsonStoreCrud.getDirtyCheck(this.items, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER).then(function (result) {
                if (result === 0) {
                    _this.requestWorkOrderHeaderDetails();
                    refresher.complete();
                }
                else {
                    refresher.complete();
                    _this.gf.displayToast('Sync up data is available for this workorder');
                }
            });
        }
        else {
            refresher.complete();
            this.gf.displayToast('No Network to sync data');
        }
    };
    // Retrigger to server to get work order header details.
    ServiceDetailsPage.prototype.requestWorkOrderHeaderDetails = function () {
        var _this = this;
        console.log("Inside requestWorkOrderHeaderDetails");
        var wonum = JSON.parse(this.items.json.wonum);
        console.log("requestWorkOrderHeaderDetails >>> Trigger this.gf.refreshHeaderWorkOrder");
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
                    if (__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG === respResult.processStatus) {
                        var updatedDetails;
                        updatedDetails = JSON.parse(JSON.stringify(respResult.respObject));
                        //console.log("requestWorkOrderHeaderDetails >>> updatedDetails : " + JSON.stringify(updatedDetails));
                        // Updated existing details.
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
                            //console.log("requestWorkOrderHeaderDetails >>> updated loc_attachmentCount length : "+updatedDetails.loc_attachmentCount);
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
                        // Sending the updated data into json.
                        _this.items.json = updatedDetails;
                        // Updated attachment counter.
                        //console.log(' requestWorkOrderHeaderDetails >>> docLinksL : ' + JSON.stringify(this.items.json.docLinksL));
                        if (typeof (_this.items.json.docLinksL) !== 'undefined') {
                            // Updated loc_show attribute to show the image because after update image not showing.
                            // Edited : Alif (02-01-2019) 
                            for (var i = 0; i < _this.items.json.docLinksL.length; i++) {
                                var photoDetail = _this.items.json.docLinksL[i];
                                //console.log(' requestWorkOrderHeaderDetails >>> old image title : ' + photoDetail.describedBy.title);
                                photoDetail.describedBy.loc_show = true;
                                photoDetail.describedBy.loc_photoVersion = 'old';
                            }
                            //console.log('requestWorkOrderHeaderDetails >>> doclinks length : ' + this.items.json.docLinksL.length);
                            _this.items.json.loc_attachmentCount = JSON.parse(JSON.stringify(_this.items.json.docLinksL.length));
                        }
                        //console.log('requestWorkOrderHeaderDetails >>> doclinks : ' + JSON.stringify(this.items.json.docLinksL));
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
                            // Reset to default empty
                            _this.ta0wouserstatus = [];
                        }
                    }
                    else {
                        _this.gf.displayToast(respResult.description);
                    }
                }
                //update latest data into JSONStore
                _this.jsonStoreCrud.replaceWO(_this.items, __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, true);
                // Clear loading and refresh pull down.
                //this.gf.stopLoading();
                refresh.dismiss();
            }, 1000);
        });
    };
    /**
     * Add or Minus Feeder Num
     * Created : Hafizal
     * By      : 09/7/2019
     */
    ServiceDetailsPage.prototype.decrement = function () {
        var number = Number(this.items.json.ta0feedernum);
        number--;
        if (number > 0) {
            this.items.json.ta0feedernum = number.toString();
        }
    };
    ServiceDetailsPage.prototype.increment = function () {
        var number = Number(this.items.json.ta0feedernum);
        number++;
        if (number < 16) {
            this.items.json.ta0feedernum = number.toString();
        }
    };
    /**
     * Created: Ameer (18/7/2019)
     * Description: Set Default Value
     */
    ServiceDetailsPage.prototype.defaultAMSAMCG = function () {
        if (typeof (this.items.json.ta0ams) === 'undefined' || this.items.json.ta0ams === null) {
            this.items.json.ta0ams = 'IEE';
            this.getAMSData(this.items.json.ta0ams);
        }
        if (typeof (this.items.json.ta0amcg) === 'undefined' || this.items.json.ta0amcg === null) {
            this.items.json.ta0amcg = '0101';
        }
    };
    /**
     * Description  : Method to call modal for ad-hoc section
     * Created      : Alif (13.08.2019)
     */
    ServiceDetailsPage.prototype.openAdHocReplacementModal = function () {
        var _this = this;
        console.log("open ad-hoc replacement modal page..");
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        // Copy temp into ori
        if (typeof (this.items.json.relatedrecord) !== "undefined") {
            this.itemsOri = JSON.parse(JSON.stringify(this.items));
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__adhoc_modal_adhoc_modal__["a" /* AdhocModalPage */], { items: this.itemsOri }, myModalOptions);
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
     * Crimpless Seal CR
     * Open Crimpless Seal Listing page
     */
    ServiceDetailsPage.prototype.openCrimplessSeal = function () {
        console.log('item.json.ta0feeder123', this.items.json.ta0feeder);
        console.log('Open SealCrimplessSealPage');
        this.gf.setLoaderTimeout("Please wait...", 10000);
        var newRootNav = this.appCtrl.getRootNavById("n4");
        newRootNav.push("SealCrimplessSealPage", {
            from: 'my_Assigned_page',
            //feederDetails: this.feederDetails,
            paramObj: this.items
        });
    };
    ServiceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-service-details",template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/service-details/service-details.html"*/'<!--\n/* \n * Modification History :\n * Date         version     Modified By   Method    Description\n * 2021-03-25   009         Andy Chang    -         update data of Work Done By using workorder.lead\n * \n */\n -->\n<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Service Order Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: left;">\n        <button ion-button clear class="backbutton" (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow backbutton"> Back </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle">\n          Service Order Details\n        </div>\n      </ion-col>\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull down to download">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid style="word-wrap:  break-all; padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary" style="font-size: 19px"> Service Cover </ion-label>\n          <ion-toggle (ionChange)="checkServiceCover()" checked="checkServiceCover"></ion-toggle>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Service Order Number</ion-label>\n          <ion-input type="text" value="{{ items.json.wonum }} - {{ items.json.ta0bcrmnum }}" [readonly]="isReadonly">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary" stacked>Report DateTime</ion-label>\n          <ion-input type="text"\n            value="{{ items.json.reportdate | date: gv.dateFormat  }}  {{ items.json.reportdate | date: gv.timeFormat  }} "\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>SN Code</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0sncode }} " [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary" stacked>SN Description</ion-label>\n          <ion-input type="text" value="{{ sncodedesc }} " [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px; border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Last Bill Date</ion-label>\n          <ion-input type="text"\n            value="{{ items.json.ta0lastbilldate | date: gv.dateFormat || \'\' }} {{ items.json.ta0lastbilldate | date: gv.timeFormat || \'\' }}"\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary" stacked>Type of Service Order</ion-label>\n          <ion-input type="text" value="{{ items.json.worktype  || \'\'}}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>Service Description</ion-label>\n          <ion-input type="text" value="{{ items.json.description }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <div *ngIf="!enablePoleNo">\n          <ion-item>\n            <ion-label color="primary" stacked>Pole Number</ion-label>\n            <ion-input type="text" maxlength="20" [(ngModel)]="items.json.ta0polenum"\n              value="{{ items.json.ta0polenum || \'\' }}" [disabled]="editField" placeholder="Please enter value">\n            </ion-input>\n          </ion-item>\n        </div>\n        <div *ngIf="enablePoleNo">\n          <ion-item>\n            <ion-label color="primary" stacked>Pole Number</ion-label>\n            <ion-input type="text" maxlength="20" [(ngModel)]="items.json.ta0polenum"\n              value="{{ items.json.ta0polenum || \'\' }}" [disabled]="true" placeholder="Please enter value"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>SR Number</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0srnum || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-item>\n          <ion-label color="primary" stacked>CRM Doc Type</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0crmdoctype || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>CRM Appointment Date</ion-label>          \n          <ion-input type="text" value="{{ items.json.ta0crmapptdate | date: gv.dateFormat || \'\' }} {{ items.json.ta0crmapptdate | date: gv.timeFormat || \'\' }}"\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>      \n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>No of Element</ion-label>\n          <ion-input type="text" [(ngModel)]="items.json.ta0elementnum" [readonly]="false"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf="showServiceCover" col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Type of Installation Service</ion-label>\n          <ion-select [(ngModel)]="items.json.ta0installationservice" [disabled]="enableServiceTypeAndServiceStatus">\n            <ion-option value="OH">OG- OVERHEAD</ion-option>\n            <ion-option value="UG">UG- UNDERGROUND</ion-option>\n            <ion-option value="FW">FW- 5 FOOT AWAY</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="showServiceCover" style="border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" style="padding-right: 100px" stacked>No of Suppliers</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0suppliers || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="border-right: 1px solid #dadada;"\n          *ngIf="items.json.worktype === soTypes.ZUDN || items. json.worktype === soTypes.ZIST">\n          <ion-item class="blackHighlightText">\n            <ion-label color="primary" stacked>No. of Feeder</ion-label>\n            <ion-input type="text" [(ngModel)]="items.json.ta0feedernum" [readonly]="true"></ion-input>\n            <ion-icon item-end color="primary" name="md-add-circle" (click)="increment()" style="margin-right: 25px;">\n            </ion-icon>\n            <ion-icon item-end color="primary" name="md-remove-circle" (click)="decrement()"></ion-icon>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col col-6 col-sm-6 col-md-3 style="text-align:right; border-right: 1px solid #dadada;" align-self-center\n          *ngIf="items.json.worktype === soTypes.ZUDN || items. json.worktype === soTypes.ZIST">\n          <button ion-button color="primary" (click)="decrement()">\n            <ion-icon style="font-size: 2.2em" name="remove-circle"></ion-icon>\n          </button>\n          <button ion-button color="primary" (click)="increment()">\n            <ion-icon style="font-size: 2.2em" name="add-circle"></ion-icon>\n          </button>\n        </ion-col> -->\n        <ion-col col-12 col-sm-12 col-md-6\n          *ngIf="items.json.worktype === soTypes.ZRMV || items. json.worktype === soTypes.ZISR || items. json.worktype === soTypes.ZSRO || items. json.worktype === soTypes.ZINL || items. json.worktype === soTypes.ZINR || items. json.worktype === soTypes.ZMMR || items. json.worktype === soTypes.ZRCE || items. json.worktype === soTypes.ZRPC"\n          style="word-wrap: break-all; padding-left: 5px; border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>No of Feeder</ion-label>\n            <ion-input type="text" [(ngModel)]="items.json.ta0feedernum" [readonly]="true">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Rate</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0ratecategory || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Rate Category Description</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0ratecategorydesc || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover && items.json.worktype === soTypes.ZUDN">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>New Rate Category</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0newratecategory || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>New Rate Category Description</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0newratecategorydesc || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Installation Voltage</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0installationvoltage == \'01\' ? \'Single Phase\' :\n            items.json.ta0installationvoltage == \'02\' ? \'3 Phase\' :\n            items.json.ta0installationvoltage == \'03\' ? \'400V LPC\' : \n            items.json.ta0installationvoltage == \'04\' ? \'6.6kV LPC\' : \n            items.json.ta0installationvoltage == \'05\' ? \'11kV\' :\n            items.json.ta0installationvoltage == \'06\' ? \'22kV\' :\n            items.json.ta0installationvoltage == \'07\' ? \'33kV\' :\n            items.json.ta0installationvoltage == \'08\' ? \'66kV\' :\n            items.json.ta0installationvoltage == \'09\' ? \'132kV\' :\n            items.json.ta0installationvoltage == \'10\' ? \'275kV\' : \n            items.json.ta0installationvoltage == \'11\' ? \'500kV\' : \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf="items.json.worktype === soTypes.ZUDN" col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>New Voltage</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0newvoltage == \'01\' ? \'Single Phase\' :\n                  items.json.ta0newvoltage == \'02\' ? \'3 Phase\' : \n                  items.json.ta0newvoltage == \'03\' ? \'400V LPC\' : \n                  items.json.ta0newvoltage == \'04\' ? \'6.6kV LPC\' : \n                  items.json.ta0newvoltage == \'05\' ? \'11kV\' :\n                  items.json.ta0newvoltage == \'06\' ? \'22kV\' :\n                  items.json.ta0newvoltage == \'07\' ? \'33kV\' :\n                  items.json.ta0newvoltage == \'08\' ? \'66kV\' :\n                  items.json.ta0newvoltage == \'09\' ? \'132kV\' :\n                  items.json.ta0newvoltage == \'10\' ? \'275kV\' : \n                  items.json.ta0newvoltage == \'11\' ? \'500kV\' : \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>No. RU</ion-label>\n          <ion-input type="text" value="{{ items.json.ta0mru || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary" style="padding-right: 150px" stacked>No. RU Description</ion-label>\n          <ion-input type="text" [(ngModel)]="items.json.ta0mrudesc" value="{{ items.json.ta0mrudesc || \'\' }}"\n            [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Meter Location</ion-label>\n          <ion-select [(ngModel)]="items.json.ta0dllocation" interface="alert" placeholder="Please select value">\n            <ion-option *ngFor="let alnVolt of alnitem;" [value]="alnVolt.json.value"\n              [selected]="items.json.ta0dllocation == alnVolt.json.value" [disabled]="editField">\n              {{ alnVolt.json.value }} - {{ alnVolt.json.description }}\n            </ion-option>\n          </ion-select>\n          <!--<ion-input type="text"   [(ngModel)]="items.json.ta0dlllocation"  value="{{ items.json.ta0dlllocation || \'\' }}"  (click)="getDlLocation();"></ion-input>-->\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Current Ratio</ion-label>\n          <ion-input type="text" maxlength="40" [(ngModel)]="currentRatio" value="{{ currentRatio || \'\' }}"\n            [readonly]="isReadonly" placeholder=""></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Device Location</ion-label>\n          <ion-input type="text" [(ngModel)]="items.json.ta0devicelocation"\n            value="{{ items.json.ta0devicelocation || \'\' }}" [readonly]="isReadonly"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Device Location Description</ion-label>\n          <ion-input type="text" maxlength="40" [(ngModel)]="items.json.ta0devicelocationdesc"\n            value="{{ items.json.ta0devicelocationdesc || \'\' }}" [disabled]="editField"\n            placeholder="Please enter value"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Signal Strength</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0signalstrength || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Phone No</ion-label>\n            <ion-input type="text" value="{{ items.json.phone || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Key</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0key || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Type of Premises</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0premisetype || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="(items.json.worktype === \'ZISR\' || items.json.worktype === \'ZRCE\')">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Parent Wonum </ion-label>\n            <ion-input type="text" value="{{ items.json.origrecordid || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!--\n     * AMS and AMCG Validation to check Modem and SimCard is change or not...\n     * Editor Shandeep Kumar\n    -->\n    <div *ngIf="amscheckcond">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>AMS</ion-label>\n            <ion-select [(ngModel)]="items.json.ta0ams" (ionChange)="getAMSData($event)" [disabled]="showAms"\n              placeholder="Please select value">\n              <ion-option [value]="" [selected]="amsVolt == \'\'"></ion-option>\n              <ion-option *ngFor="let amsVolt of amsstolevalue;" [value]="amsVolt"\n                [selected]="items.json.ta0ams === amsVolt">{{ amsVolt }}</ion-option>\n            </ion-select>\n            <!-- <ion-input type="text" [(ngModel)]="items.json.ta0ams" value="{{ items.json.ta0ams || \'\' }}" maxlength="4" disabled="{{showAmsAmcg}}"></ion-input> -->\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>AMCG</ion-label>\n            <ion-select [(ngModel)]="items.json.ta0amcg" [disabled]="showAmscg" placeholder="Please select value">\n              <ion-option *ngFor="let amscgVolt of amscgstolevalue;" [value]="amscgVolt"\n                [selected]="items.json.ta0amcg === amscgVolt">{{ amscgVolt }}</ion-option>\n            </ion-select>\n            <!-- <ion-input type="text" [(ngModel)]="items.json.ta0amcg" value="{{ items.json.ta0amcg || \'\' }}" maxlength="4" disabled="{{showAmsAmcg}}"></ion-input> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6\n        style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n        <ion-item>\n          <ion-label color="primary" stacked>Service Order Status</ion-label>\n          <ion-select [(ngModel)]="woStatus" (ionChange)="statusChange($event)"\n            [disabled]="loc_saveStatus ? \'false\' : \'true\'">\n            <ion-option value="APPR" disabled>APPR &nbsp;-&nbsp; APPROVED</ion-option>\n            <ion-option value="PENDTECO" [disabled]="(woStatus == \'APPR\')? true : false">TECO &nbsp;-&nbsp; COMPLETE\n            </ion-option>\n            <ion-option value="INPRG">INPRG &nbsp;-&nbsp; IN PROGRESS</ion-option>\n            <ion-option value="PENDKIV"\n              [disabled]="!items.json.ta0bcrmnum && (items.json.worktype === \'ZISR\' || items.json.worktype === \'ZRCE\') && items.json.origrecordid !== \'\'">\n              KIV &nbsp;-&nbsp; KIV</ion-option>\n            <ion-option value="PENDCLSD"\n              [disabled]="!items.json.ta0bcrmnum && (items.json.worktype === \'ZISR\' || items.json.worktype === \'ZRCE\') && items.json.origrecordid !== \'\'">\n              CLSD &nbsp;-&nbsp; CLOSE</ion-option>\n            <ion-option value="PCBNT">PCBNT &nbsp;-&nbsp; NEXT TEAM</ion-option>\n            <ion-option *ngIf="items.json.ta0bcrmresponsestatus === \'E\'" value="PSTSV">PSTSV &nbsp;-&nbsp; Error Check\n              Next Team</ion-option>\n            <!-- Checking for bcrm Number is available or not... Shandeep Kumar... -->\n            <ion-option\n              *ngIf="(!items.json.ta0bcrmnum || (items.json.worktype === soTypes.ZISR || items.json.worktype === soTypes.ZRCE) )"\n              value="CANCEL">CANCEL &nbsp;-&nbsp; CANCEL</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-sm-12 col-md-6>\n        <ion-row>\n          <ion-col>\n            <ion-item [ngClass]="(validatePhoto) ? \'redHighlightText\' : \'blackHighlightText\'">\n              <ion-label color="primary" stacked>Upload Photo</ion-label>\n              <ion-input type="text" placeholder="Upload Image" value="{{ items.json.loc_attachmentCount || \'0\' }} "\n                [readonly]="true">\n              </ion-input>\n              <ion-icon mode="md" name="md-images" item-right color="primary" *ngIf="showButtonImage"\n                (click)="goToUploadPhoto()" style="zoom: 1.2;"></ion-icon>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-col col-12 col-sm-12 col-md-2 style="align-self: flex-end;">\n            <button mode="md" *ngIf="showButtonImage" ion-button (click)="goToUploadPhoto()">\n              <ion-icon name="md-images" item-right></ion-icon>\n            </button>\n          </ion-col> -->\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="showServiceCover">\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-item *ngFor="let address of items.json.woserviceaddress;">\n          <ion-label color="primary" stacked>Address</ion-label>\n          <ion-textarea rows="4" type="text" value="{{ address.formattedaddress || \'\' }}" [readonly]="isReadonly">\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px; border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Area Code</ion-label>\n            <ion-input color="secondary" placeholder="Area Code" value="{{ items.json.siteid || \'\' }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Area</ion-label>\n            <ion-input type="text" placeholder="Area" value="{{items.json.ta0locationdesc || \'\' }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Condition of Installation Service</ion-label>\n            <ion-select [(ngModel)]="items.json.ta0serviceflag" [disabled]="enableServiceTypeAndServiceStatus">\n              <ion-option value="true">Ready</ion-option>\n              <ion-option value="false">Not Ready</ion-option>\n            </ion-select>\n            <!-- <ion-input type="text" value="{{ items.json.ta0serviceflag || \'\' }}" [readonly]="enableServiceTypeAndServiceStatus"></ion-input> -->\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Registered Customer Name</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0bpname || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Occupant Name</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0bptenantname || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Account Number</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0accountnum || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf="showServiceCover">\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 style="border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Contractor Name</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0contractorname || \'\' }}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6>\n          <ion-item>\n            <ion-label color="primary" stacked>Contractor Phone No.</ion-label>\n            <ion-input type="text" value="{{ items.json.ta0contractorphonenum || \'\' }}" [readonly]="isReadonly">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" stacked>GPS Coordinate</ion-label>\n              <ion-input type="text"\n                value="{{ woserviceaddress.latitudey}} - {{ woserviceaddress.longitudex}} ( Accuracy : {{ woserviceaddress.referencepoint }} meter )"\n                [readonly]="isReadonly"></ion-input>\n              <ion-icon name="md-locate" item-end color="primary" (click)="locationCoordination()"\n                *ngIf="disableButtonSelection" style="zoom: 1.2;"></ion-icon>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n            <button ion-button (click)="locationCoordination()" *ngIf="disableButtonSelection">GPS</button>\n          </ion-col> -->\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12>\n        <ion-item [ngClass]="(validateUserSts1) ? \'redHighlightText\' : \'blackHighlightText\'">\n          <ion-label color="primary" stacked>User Status</ion-label>\n          <ion-select [(ngModel)]="ta0wouserstatus" interface="alert" multiple="true" data-limit="4"\n            (ionChange)="userStatusDefaultChange($event, \'user1\')">\n            <ion-option (ionSelect)="userStatusChange($event)" *ngFor="let key of userStsGroupList; let i = index"\n              [disabled]="false" value="{{ key.ta0kiv }}" [selected]="key.ta0kiv === ta0wouserstatus">\n              {{ key.ta0kiv || \'\'}} - {{ key.description}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Crimpless Seal CR-->\n    <ion-row>\n      <ion-col>\n        <ion-item (click)="openCrimplessSeal()">\n          <ion-label style="font-weight: bold;font-size: 16px;">\n            Seal Device Location\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- Crimpless Seal CR-->\n\n    <ion-row *ngIf="woStatus === \'PCBNT\' || woStatus === \'PSTSV\'">\n      <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n        <ion-item>\n          <ion-label color="primary" stacked> Choose the team to pass Service Order </ion-label>\n          <ion-select [(ngModel)]="items.json.ta0newworkcentervoltage" (ionChange)="passToNextTeam()">\n            <!--  <ion-option value="02">OPC Team</ion-option> -->\n            <ion-option value="03">LV Team</ion-option>\n            <ion-option value="04">MVHV Team</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Adhoc Replacement Start Shandeep Kumar...... -->\n    <div *ngIf="!showAdHoc && !gv.testMobile">\n      <ion-row *ngIf="( items.json.worktype === soTypes.ZINL && showAdHocError)">\n        <ion-col col-12 col-sm-12 col-md-12>\n          <ion-item>\n            <ion-label style="color: red; font-size: 10px;">You already created the adHoc, you should not able to\n              replace devices.</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="items.json.worktype === soTypes.ZINL || items.json.worktype === soTypes.ZINR">\n        <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked style="font-weight: bold">Ad-Hoc Replacement</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-sm-2 col-md-2>\n          <button ion-button (click)="changeAdhocReplacement()" [disabled]="!adhocValid">Add</button>\n        </ion-col>\n      </ion-row>\n      <div *ngFor=\'let attr of items.json.relatedrecord; let j = index;\'>\n        <ion-row *ngIf="attr.ta0relatedrecstatus !== \'CANCEL\'">\n          <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-row>\n                <ion-col col-4 col-sm-4 col-md-4>\n                  <b *ngIf="attr.relatedrecwonum"> {{ attr.relatedrecwonum }} - </b>\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  {{ attr.ta0relatedrecworktype }}\n                </ion-col>\n                <ion-col col-3 col-sm-3 col-md-3>\n                  {{ attr.ta0relatedrecsncode }}\n                </ion-col>\n                <ion-col col-2 col-sm-2 col-md-2>\n                  {{ attr.ta0relatedrecstatus }}\n                </ion-col>\n                <!--\n                <ion-col col-4 col-sm-4 col-md-4>\n                  {{ attr.ta0relatedrecdescription }}\n                </ion-col>\n                -->\n              </ion-row>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n            <button ion-button *ngIf="!attr.relatedrecwonum" (click)="createAdhocFollowUp(j)">Create</button>\n            <button ion-button *ngIf="attr.relatedrecwonum"\n              (click)="changeAdhocRemove(j, attr.relatedrecwonum, \'cancel\')">Cancel</button>\n            <button ion-button *ngIf="!attr.relatedrecwonum"\n              (click)="changeAdhocRemove(j, attr.relatedrecwonum, \'delete\')">Delete</button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf="!showAdHoc && gv.testMobile">\n      <ion-row *ngIf="(items.json.worktype === soTypes.ZINL)">\n        <ion-col col-12 col-sm-12 col-md-12>\n          <ion-item>\n            <ion-label style="color: red; font-size: 10px;">No Network Connection to access Ad-Hoc...</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- Adhoc Replacement End -->\n\n    <ion-list>\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary">Work Plan Date</ion-label>\n      </ion-item>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Scheduled Start DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.schedstart | date: gv.dateFormat  }} {{ items.json.schedstart | date: gv.timeFormat  }} "\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Scheduled Finish DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.schedfinish | date: gv.dateFormat  }} {{ items.json.schedfinish | date: gv.timeFormat  }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary">Actual Start Date</ion-label>\n      </ion-item>\n\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Actual Start DateTime</ion-label>\n            <ion-input type="text"\n              value="{{ items.json.actstart  | date: gv.dateFormat  }} {{ items.json.actstart | date: gv.timeFormat  }}"\n              [readonly]="true"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-item>\n            <ion-label color="primary" stacked>Approved By</ion-label>\n            <ion-input type="text" value="{{ items.json.owner || \'\'}}" [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="assignment">\n        <ion-col col-12 col-sm-12 col-md-6\n          style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n          <ion-item>\n            <ion-label color="primary" stacked>Work Done By </ion-label>\n            <ion-input type="text" placeholder="Technician Id (Assign To)" value="{{  assignment.laborcode }}"\n              [readonly]="isReadonly"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item style="background-color:cornflowerblue">\n        <ion-label color="primary">Remarks</ion-label>\n      </ion-item>\n      <div padding>\n        <ion-textarea type="textarea" style="border:1px" rows="6"\n          style="border-bottom: 2px solid black; border-right: 1px solid black ;border-left: 1px solid black;border-top: 1px solid black;"\n          placeholder="Please Enter" [(ngModel)]="items.json.ta0remarks" value="{{ items.json.ta0remarks }}"\n          [disabled]="editField"></ion-textarea>\n      </div>\n      <div\n        *ngIf="items.json.worktype === soTypes.ZIST || items.json.worktype === soTypes.ZUDN || items.json.worktype === soTypes.ZSRO">\n        <div\n          *ngIf="items.json.ta0installationvoltage > \'03\' || (items.json.worktype === soTypes.ZUDN && items.json.ta0newvoltage > \'03\')">\n          <ion-item style="background-color:cornflowerblue">\n            <ion-label color="primary">Location PT & CT</ion-label>\n          </ion-item>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-6\n              style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n              <ion-list>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Location PT </ion-label>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-list radio-group [(ngModel)]="ta0ptlocation">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>TNB S.Gear</ion-label>\n                      <ion-radio value="TNB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Customer S.Gear</ion-label>\n                      <ion-radio value="Customer"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6\n              style="word-wrap:  break-all; padding-left: 5px;border-right: 1px solid #dadada;">\n              <ion-list>\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label color="primary">Location CT </ion-label>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              <ion-list radio-group [(ngModel)]="ta0ctlocation">\n                <ion-row>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>TNB S.Gear</ion-label>\n                      <ion-radio value="TNB"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col style="word-wrap:  break-all; padding-left: 5px;">\n                    <ion-item>\n                      <ion-label>Customer S.Gear</ion-label>\n                      <ion-radio value="Customer"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n<br />\n<br />\n<ion-footer mode="md" *ngIf="woStatus !== \'APPR\'">\n  <ion-toolbar mode="md">\n    <button ion-button round mode="md" (click)="goToServiceExecution(itemsOri)" *ngIf="showServiceExecution">\n      Service Execution\n    </button>\n    <button ion-button round mode="md" (click)="saveAction()" *ngIf="loc_saveStatus === true || showSave === true"\n      [disabled]="buttonForServiceExecution">\n      Save\n    </button>\n    <button ion-button round mode="md" (click)="goBack()">\n      Cancel\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/service-details/service-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_10__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]])
    ], ServiceDetailsPage);
    return ServiceDetailsPage;
}());

//# sourceMappingURL=service-details.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsPageModule", function() { return ServiceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_details__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServiceDetailsPageModule = /** @class */ (function () {
    function ServiceDetailsPageModule() {
    }
    ServiceDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__service_details__["a" /* ServiceDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__service_details__["a" /* ServiceDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__["SelectSearchableModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            ]
        })
    ], ServiceDetailsPageModule);
    return ServiceDetailsPageModule;
}());

//# sourceMappingURL=service-details.module.js.map

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

/***/ 950:
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

/***/ 951:
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

/***/ 954:
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

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(25);
var calendar_model_1 = __webpack_require__(950);
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

/***/ 956:
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

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(11);
var calendar_modal_1 = __webpack_require__(951);
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

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(950));
var calendar_modal_1 = __webpack_require__(951);
exports.CalendarModal = calendar_modal_1.CalendarModal;
var calendar_week_component_1 = __webpack_require__(954);
exports.CalendarWeekComponent = calendar_week_component_1.CalendarWeekComponent;
var month_component_1 = __webpack_require__(955);
exports.MonthComponent = month_component_1.MonthComponent;
var calendar_component_1 = __webpack_require__(956);
exports.CalendarComponent = calendar_component_1.CalendarComponent;
var calendar_module_1 = __webpack_require__(967);
exports.CalendarModule = calendar_module_1.CalendarModule;
var calendar_controller_1 = __webpack_require__(957);
exports.CalendarController = calendar_controller_1.CalendarController;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_controller_1 = __webpack_require__(957);
var ionic_angular_1 = __webpack_require__(11);
var calendar_service_1 = __webpack_require__(946);
var index_1 = __webpack_require__(968);
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

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calendar_modal_1 = __webpack_require__(951);
var calendar_week_component_1 = __webpack_require__(954);
var month_component_1 = __webpack_require__(955);
var calendar_component_1 = __webpack_require__(956);
var month_picker_component_1 = __webpack_require__(969);
exports.CALENDAR_COMPONENTS = [
    calendar_modal_1.CalendarModal,
    calendar_week_component_1.CalendarWeekComponent,
    month_component_1.MonthComponent,
    calendar_component_1.CalendarComponent,
    month_picker_component_1.MonthPickerComponent
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var calendar_model_1 = __webpack_require__(950);
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
//# sourceMappingURL=2.js.map