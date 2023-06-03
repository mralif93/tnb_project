webpackJsonp([21],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealCrimplessSealPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
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
 * Generated class for the CrimplessSealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SealCrimplessSealPage = /** @class */ (function () {
    function SealCrimplessSealPage(navCtrl, loadingCtrl, navParams, gv, jsonStore, params, barcodeScanner, gf, toast, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.gv = gv;
        this.jsonStore = jsonStore;
        this.params = params;
        this.barcodeScanner = barcodeScanner;
        this.gf = gf;
        this.toast = toast;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        //Declare variable for existing device location
        this.ttbF1Array = [];
        this.ttbF2Array = [];
        this.ttbF3Array = [];
        this.sfuseF1Array = [];
        this.meterKiosk1Array = [];
        this.meterKiosk2Array = [];
        this.meterTestBoxArray1 = [];
        this.meterTestBoxArray2 = [];
        this.ctChamberArrayF1 = [];
        this.ptChamberArrayF1 = [];
        this.terminalBoxArrayF1 = [];
        this.marshallingBoxArrayF1 = [];
        this.ptSecondaryFuseArrayF1 = [];
        //Declare variable for new device location
        this.ttbf11Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ttbf12Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ttbf21Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ttbf22Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ttbf31Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ttbf32Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mfusef1Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mfusef2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mfusef3Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.paneldoorkiosk11Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.paneldoorkiosk12Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.paneldoorkiosk21Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.paneldoorkiosk22Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mtestbox11Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mtestbox12Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mtestbox21Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.mtestbox22Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ctchamberf1Val1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ctchamberf2Val1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ctchamberf3Val1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ptchamberf1Val1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ptchamberf2Val1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ptchamberf3Val1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.terminalboxf1Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.terminalboxf2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.terminalboxf3Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.marshallingboxf1Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.marshallingboxf2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.marshallingboxf3Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ptsecondaryfusef1Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ptsecondaryfusef2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        this.ptsecondaryfusef3Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
        /*
        showAddTtbF1: boolean = true;
        showAddTtbF2: boolean = true;
        showAddTtbF3: boolean = true;
        showAddSfuseF1: boolean = true;
        showAddSfuseF2: boolean = true;
        showAddSfuseF3: boolean = true;
        showAddMeterKiosk1: boolean = true;
        showAddMeterKiosk2: boolean = true;
        showAddMeterTestBox1: boolean = true;
        showAddMeterTestBox2: boolean = true;
        showAddCtChamber1: boolean = true;
        showAddCtChamber2: boolean = true;
        showAddCtChamber3: boolean = true;
        showAddPtChamberf1: boolean = true
        showAddPtChamberf2: boolean = true
        showAddPtChamberf3: boolean = true
        */
        this.refSegment = "before";
        this.segmentSection = false;
        this.showSealNo = true;
        this.sc = [];
        this.rr = [];
        this.feederDetailsRes = [];
        this.worktype = null; //SO Type
        this.dCons = __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        debugger;
        console.log(">SealCrimplessSealPage >>constructor");
        this.from = this.params.get("from");
        this.itemOri = this.params.get("paramObj");
        this.worktype = this.itemOri.json.worktype;
        this.sealDetail = this.itemOri.json.ta0sealdetail;
        console.log(">SealCrimplessSealPage >>constructor >>>this.from ==>", this.from);
        console.log(">SealCrimplessSealPage >>constructor >>>this.itemOri ==>", this.itemOri);
        console.log(">SealCrimplessSealPage >>constructor >>>this.sealDetail ==>", this.sealDetail);
        /** Copy Clone into Original */
        this.items = JSON.parse(JSON.stringify(this.itemOri));
        this.loadlookup();
    }
    SealCrimplessSealPage.prototype.ngOnInit = function () {
        debugger;
        console.log(">SealCrimplessSealPage >>ngOnInit");
        this.ttbf11Val.ta0seallocation = "TEST_BLOCK_F1_1";
        this.ttbf11Val.ta0seallocation_description = "Test Block F1 - 1";
        this.ttbf12Val.ta0seallocation = "TEST_BLOCK_F1_2";
        this.ttbf12Val.ta0seallocation_description = "Test Block F1 - 2";
        this.ttbf21Val.ta0seallocation = "TEST_BLOCK_F2_1";
        this.ttbf21Val.ta0seallocation_description = "Test Block F2 - 1";
        this.ttbf22Val.ta0seallocation = "TEST_BLOCK_F2_2";
        this.ttbf22Val.ta0seallocation_description = "Test Block F2 - 2";
        this.ttbf31Val.ta0seallocation = "TEST_BLOCK_F3_1";
        this.ttbf31Val.ta0seallocation_description = "Test Block F3 - 1";
        this.ttbf32Val.ta0seallocation = "TEST_BLOCK_F3_2";
        this.ttbf32Val.ta0seallocation_description = "Test Block F3 - 2";
        this.mfusef1Val.ta0seallocation = "METER_FUSE_F1";
        this.mfusef1Val.ta0seallocation_description = "Meter Fuse F1";
        this.mfusef2Val.ta0seallocation = "METER_FUSE_F2";
        this.mfusef2Val.ta0seallocation_description = "Meter Fuse F2";
        this.mfusef3Val.ta0seallocation = "METER_FUSE_F3";
        this.mfusef3Val.ta0seallocation_description = "Meter Fuse F3";
        this.paneldoorkiosk11Val.ta0seallocation = "PANELDOOR_KIOSK1_1";
        this.paneldoorkiosk11Val.ta0seallocation_description = "Panel Door Kiosk 1 - 1";
        this.paneldoorkiosk12Val.ta0seallocation = "PANELDOOR_KIOSK1_2";
        this.paneldoorkiosk12Val.ta0seallocation_description = "Panel Door Kiosk 1 - 2";
        this.paneldoorkiosk21Val.ta0seallocation = "PANELDOOR_KIOSK2_1";
        this.paneldoorkiosk21Val.ta0seallocation_description = "Panel Door Kiosk 2 - 1";
        this.paneldoorkiosk22Val.ta0seallocation = "PANELDOOR_KIOSK2_2";
        this.paneldoorkiosk22Val.ta0seallocation_description = "Panel Door Kiosk 2 - 2";
        this.mtestbox11Val.ta0seallocation = "METER_TESTBOX_KIOSK1_1";
        this.mtestbox11Val.ta0seallocation_description = "Meter Test Box Kiosk 1 - 1";
        this.mtestbox12Val.ta0seallocation = "METER_TESTBOX_KIOSK1_2";
        this.mtestbox12Val.ta0seallocation_description = "Meter Test Box Kiosk 1 - 2";
        this.mtestbox21Val.ta0seallocation = "METER_TESTBOX_KIOSK2_1";
        this.mtestbox21Val.ta0seallocation_description = "Meter Test Box Kiosk 2 - 1";
        this.mtestbox22Val.ta0seallocation = "METER_TESTBOX_KIOSK2_2";
        this.mtestbox22Val.ta0seallocation_description = "Meter Test Box Kiosk 2 - 2";
        this.ctchamberf1Val1.ta0seallocation = "CT_CHAMBER_F1";
        this.ctchamberf1Val1.ta0seallocation_description = "CT Chamber F1";
        this.ctchamberf2Val1.ta0seallocation = "CT_CHAMBER_F2";
        this.ctchamberf2Val1.ta0seallocation_description = "CT Chamber F2";
        this.ctchamberf3Val1.ta0seallocation = "CT_CHAMBER_F3";
        this.ctchamberf3Val1.ta0seallocation_description = "CT Chamber F3";
        this.ptchamberf1Val1.ta0seallocation = "PT_CHAMBER_F1";
        this.ptchamberf1Val1.ta0seallocation_description = "PT Chamber F1";
        this.ptchamberf2Val1.ta0seallocation = "PT_CHAMBER_F2";
        this.ptchamberf2Val1.ta0seallocation_description = "PT Chamber F2";
        this.ptchamberf3Val1.ta0seallocation = "PT_CHAMBER_F3";
        this.ptchamberf3Val1.ta0seallocation_description = "PT Chamber F3";
        this.terminalboxf1Val.ta0seallocation = "TERMINATION_BOX_F1";
        this.terminalboxf1Val.ta0seallocation_description = "Termination Box F1";
        this.terminalboxf2Val.ta0seallocation = "TERMINATION_BOX_F2";
        this.terminalboxf2Val.ta0seallocation_description = "Termination Box F2";
        this.terminalboxf3Val.ta0seallocation = "TERMINATION_BOX_F3";
        this.terminalboxf3Val.ta0seallocation_description = "Termination Box F3";
        this.marshallingboxf1Val.ta0seallocation = "MARSHALLING_BOX_F1";
        this.marshallingboxf1Val.ta0seallocation_description = "Marshalling Box F1";
        this.marshallingboxf2Val.ta0seallocation = "MARSHALLING_BOX_F2";
        this.marshallingboxf2Val.ta0seallocation_description = "Marshalling Box F2";
        this.marshallingboxf3Val.ta0seallocation = "MARSHALLING_BOX_F3";
        this.marshallingboxf3Val.ta0seallocation_description = "Marshalling Box F3";
        this.ptsecondaryfusef1Val.ta0seallocation = "PT_SEC_FUSE_F1";
        this.ptsecondaryfusef1Val.ta0seallocation_description = "PT Secondary Fuse F1";
        this.ptsecondaryfusef2Val.ta0seallocation = "PT_SEC_FUSE_F2";
        this.ptsecondaryfusef2Val.ta0seallocation_description = "PT Secondary Fuse F2";
        this.ptsecondaryfusef3Val.ta0seallocation = "PT_SEC_FUSE_F3";
        this.ptsecondaryfusef3Val.ta0seallocation_description = "PT Secondary Fuse F3";
        this.loadData();
    };
    SealCrimplessSealPage.prototype.loadData = function () {
        var _this = this;
        debugger;
        console.log(">SealCrimplessSealPage >>loadData");
        if (this.from == 'my_Assigned_page') {
            this.mainPage = true;
        }
        else {
            this.mainPage = false;
        }
        this.sealDetail = this.itemOri.json.ta0sealdetail;
        this.feederDetailsRes = this.sealDetail;
        console.log(">SealCrimplessSealPage >>loadData >>>this.feeder ==>", this.feederDetailsRes);
        this.feederDetailsRes = this.feederDetailsRes.filter(function (item) {
            if (item.ta0seallocation == "TEST_BLOCK_F1_1" || item.ta0seallocation == "TEST_BLOCK_F1_2" ||
                item.ta0seallocation == "TEST_BLOCK_F2_1" || item.ta0seallocation == "TEST_BLOCK_F2_2"
                || item.ta0seallocation == "TEST_BLOCK_F3_1" || item.ta0seallocation == "TEST_BLOCK_F3_2"
                || item.ta0seallocation == "METER_FUSE_F1" || item.ta0seallocation == "METER_FUSE_F2"
                || item.ta0seallocation == "METER_FUSE_F3" || item.ta0seallocation == "PANELDOOR_KIOSK1_1"
                || item.ta0seallocation == "PANELDOOR_KIOSK1_2" || item.ta0seallocation == "PANELDOOR_KIOSK2_1"
                || item.ta0seallocation == "PANELDOOR_KIOSK2_2" || item.ta0seallocation == "METER_TESTBOX_KIOSK1_2"
                || item.ta0seallocation == "METER_TESTBOX_KIOSK1_1" || item.ta0seallocation == "METER_TESTBOX_KIOSK2_1"
                || item.ta0seallocation == "METER_TESTBOX_KIOSK2_2" || item.ta0seallocation == "CT_CHAMBER_F1"
                || item.ta0seallocation == "CT_CHAMBER_F2" || item.ta0seallocation == "CT_CHAMBER_F3"
                || item.ta0seallocation == "PT_CHAMBER_F1" || item.ta0seallocation == "PT_CHAMBER_F2"
                || item.ta0seallocation == "PT_CHAMBER_F3" || item.ta0seallocation == "TERMINATION_BOX_F1"
                || item.ta0seallocation == "TERMINATION_BOX_F2" || item.ta0seallocation == "TERMINATION_BOX_F3"
                || item.ta0seallocation == "MARSHALLING_BOX_F1" || item.ta0seallocation == "MARSHALLING_BOX_F2"
                || item.ta0seallocation == "MARSHALLING_BOX_F3" || item.ta0seallocation == "PT_SEC_FUSE_F1"
                || item.ta0seallocation == "PT_SEC_FUSE_F2" || item.ta0seallocation == "PT_SEC_FUSE_F3") {
                return true;
            }
            else {
                return false;
            }
        });
        this.sealDetail.forEach(function (item) {
            if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F1_1) && item.ta0existingseal == true) {
                _this.ttbF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F1_2) && item.ta0existingseal == true) {
                _this.ttbF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F2_1) && item.ta0existingseal == true) {
                _this.ttbF2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F2_2) && item.ta0existingseal == true) {
                _this.ttbF2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F3_1) && item.ta0existingseal == true) {
                _this.ttbF3Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F3_2) && item.ta0existingseal == true) {
                _this.ttbF3Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F1) && item.ta0existingseal == true) {
                _this.sfuseF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F2) && item.ta0existingseal == true) {
                _this.sfuseF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F3) && item.ta0existingseal == true) {
                _this.sfuseF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK1_PANELDOOR_1) && item.ta0existingseal == true) {
                _this.meterKiosk1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK1_PANELDOOR_2) && item.ta0existingseal == true) {
                _this.meterKiosk1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK2_PANELDOOR_1) && item.ta0existingseal == true) {
                _this.meterKiosk2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK2_PANELDOOR_2) && item.ta0existingseal == true) {
                _this.meterKiosk2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK1_1) && item.ta0existingseal == true) {
                _this.meterTestBoxArray1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK1_2) && item.ta0existingseal == true) {
                _this.meterTestBoxArray1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK2_1) && item.ta0existingseal == true) {
                _this.meterTestBoxArray2.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK2_2) && item.ta0existingseal == true) {
                _this.meterTestBoxArray2.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F1) && item.ta0existingseal == true) {
                _this.ctChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F2) && item.ta0existingseal == true) {
                _this.ctChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F3) && item.ta0existingseal == true) {
                _this.ctChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F1) && item.ta0existingseal == true) {
                _this.ptChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F2) && item.ta0existingseal == true) {
                _this.ptChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F3) && item.ta0existingseal == true) {
                _this.ptChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F1) && item.ta0existingseal == true) {
                _this.terminalBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F2) && item.ta0existingseal == true) {
                _this.terminalBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F3) && item.ta0existingseal == true) {
                _this.terminalBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F1) && item.ta0existingseal == true) {
                _this.marshallingBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F2) && item.ta0existingseal == true) {
                _this.marshallingBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F3) && item.ta0existingseal == true) {
                _this.marshallingBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F1) && item.ta0existingseal == true) {
                _this.ptSecondaryFuseArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F2) && item.ta0existingseal == true) {
                _this.ptSecondaryFuseArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F3) && item.ta0existingseal == true) {
                _this.ptSecondaryFuseArrayF1.push(item);
            }
        });
        this.sealDetail.forEach(function (item) {
            if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F1_1) && item.ta0existingseal == false) {
                _this.ttbf11Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F1_2) && item.ta0existingseal == false) {
                _this.ttbf12Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F2_1) && item.ta0existingseal == false) {
                _this.ttbf21Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F2_2) && item.ta0existingseal == false) {
                _this.ttbf22Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F3_1) && item.ta0existingseal == false) {
                _this.ttbf31Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F3_2) && item.ta0existingseal == false) {
                _this.ttbf32Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F1) && item.ta0existingseal == false) {
                _this.mfusef1Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F2) && item.ta0existingseal == false) {
                _this.mfusef2Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F3) && item.ta0existingseal == false) {
                _this.mfusef3Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK1_PANELDOOR_1) && item.ta0existingseal == false) {
                _this.paneldoorkiosk11Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK1_PANELDOOR_2) && item.ta0existingseal == false) {
                _this.paneldoorkiosk12Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK2_PANELDOOR_1) && item.ta0existingseal == false) {
                _this.paneldoorkiosk21Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK2_PANELDOOR_2) && item.ta0existingseal == false) {
                _this.paneldoorkiosk22Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK1_1) && item.ta0existingseal == false) {
                _this.mtestbox11Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK1_2) && item.ta0existingseal == false) {
                _this.mtestbox12Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK2_1) && item.ta0existingseal == false) {
                _this.mtestbox21Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK2_2) && item.ta0existingseal == false) {
                _this.mtestbox22Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F1) && item.ta0existingseal == false) {
                _this.ctchamberf1Val1 = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F2) && item.ta0existingseal == false) {
                _this.ctchamberf2Val1 = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F3) && item.ta0existingseal == false) {
                _this.ctchamberf3Val1 = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F1) && item.ta0existingseal == false) {
                _this.ptchamberf1Val1 = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F2) && item.ta0existingseal == false) {
                _this.ptchamberf2Val1 = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F3) && item.ta0existingseal == false) {
                _this.ptchamberf3Val1 = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F1) && item.ta0existingseal == false) {
                _this.terminalboxf1Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F2) && item.ta0existingseal == false) {
                _this.terminalboxf2Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F3) && item.ta0existingseal == false) {
                _this.terminalboxf3Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F1) && item.ta0existingseal == false) {
                _this.marshallingboxf1Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F2) && item.ta0existingseal == false) {
                _this.marshallingboxf2Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F3) && item.ta0existingseal == false) {
                _this.marshallingboxf3Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F1) && item.ta0existingseal == false) {
                _this.ptsecondaryfusef1Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F2) && item.ta0existingseal == false) {
                _this.ptsecondaryfusef2Val = item;
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F3) && item.ta0existingseal == false) {
                _this.ptsecondaryfusef3Val = item;
            }
        });
        //sort by seallocation ascending
        this.ttbF1Array.sort(this.dynamicSort("ta0seallocation"));
        this.ttbF2Array.sort(this.dynamicSort("ta0seallocation"));
        this.ttbF3Array.sort(this.dynamicSort("ta0seallocation"));
        this.sfuseF1Array.sort(this.dynamicSort("ta0seallocation"));
        this.meterKiosk1Array.sort(this.dynamicSort("ta0seallocation"));
        this.meterKiosk2Array.sort(this.dynamicSort("ta0seallocation"));
        this.meterTestBoxArray1.sort(this.dynamicSort("ta0seallocation"));
        this.meterTestBoxArray2.sort(this.dynamicSort("ta0seallocation"));
        this.ctChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
        this.ptChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
        this.terminalBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));
        this.marshallingBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));
        this.ptSecondaryFuseArrayF1.sort(this.dynamicSort("ta0seallocation"));
    };
    SealCrimplessSealPage.prototype.ionViewDidLoad = function () {
        console.log(">SealCrimplessSealPage >>ionViewDidLoad");
    };
    SealCrimplessSealPage.prototype.ionViewWillEnter = function () {
        console.log(">SealCrimplessSealPage >>ionViewWillEnter");
        this.items = this.params.data.paramObj;
        this.from = this.params.data.from;
    };
    SealCrimplessSealPage.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    SealCrimplessSealPage.prototype.getAlnDomainData = function (inputType) {
        var _this = this;
        console.log("filtering type condition for sil & sticker..");
        var queryPart;
        if (typeof (inputType) !== "undefined") {
            if (inputType === "safetysticker") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SAFETYSTICKER);
            }
            else if (inputType === "fuse") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCFUSE);
            }
            else if (inputType === "meter_cover") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCMETERCOVER);
            }
            else if (inputType === "meter_panel") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCMETERPANEL);
            }
            else if (inputType === "panel_ct") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCPANELCT);
            }
            else if (inputType === "ct_terminal") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCTERMCT);
            }
            else if (inputType === "terminal_meter") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCTERMMETER);
            }
            else if (inputType === "ttb") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SCTTB);
            }
            else if (inputType === "sealcondition") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA4SC);
            }
            else if (inputType === "removalreason") {
                queryPart = WL.JSONStore.QueryPart().equal("domainid", __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].TA0SEALREMREASON); //CR002 Crimpless Seal
            }
            return new Promise(function (resolve, reject) {
                _this.jsonStore
                    .getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart)
                    .then(function (result) {
                    console.log('resultiinsss==>', result);
                    // if (inputType === "safetysticker") {
                    //   this.safetySticker = result;
                    // } else if (inputType === "fuse") {
                    //   this.fuse = result;
                    // } else if (inputType === "meter_cover") {
                    //   this.meterCover = result;
                    // } else if (inputType === "meter_panel") {
                    //   this.meterPanel = result;
                    // } else if (inputType === "panel_ct") {
                    //   this.ctPanel = result;
                    // } else if (inputType === "ct_terminal") {
                    //   this.ctTerminal = result;
                    // } else if (inputType === "terminal_meter") {
                    //   this.meterTerminal = result;
                    // } else if (inputType === "ttb") {
                    //   this.ttb = result;
                    // } 
                    if (inputType === "sealcondition") {
                        _this.sc = result;
                    }
                    else if (inputType === "removalreason") {
                        _this.rr = result; //CR002 Crimpless Seal
                    }
                    resolve();
                }).catch(function (error) {
                    console.log('service failure : ' + error);
                    reject();
                });
            });
        }
    };
    SealCrimplessSealPage.prototype.loadlookup = function () {
        this.getAlnDomainData("sealcondition");
        this.getAlnDomainData("removalreason");
    };
    SealCrimplessSealPage.prototype.barcodeScan = function (deviceDetailsArray, index, indicator, type) {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            if (type === "before") {
                if (indicator == 1) {
                    if (deviceDetailsArray[index].ta0sealnum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0sealnum !== '' && deviceDetailsArray[index].ta0sealnum !== null && typeof deviceDetailsArray[index].ta0sealnum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0sealnum = barcodeData.text.trim();
                        }
                    }
                }
                else if (indicator == 2) {
                    if (deviceDetailsArray[index].ta0stickernum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0stickernum !== '' && deviceDetailsArray[index].ta0stickernum !== null && typeof deviceDetailsArray[index].ta0stickernum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0stickernum = barcodeData.text.trim();
                        }
                    }
                }
            }
            else {
                if (indicator == 1) {
                    deviceDetailsArray.ta0sealnum = barcodeData.text.trim();
                }
                else if (indicator == 2) {
                    if (deviceDetailsArray[index].ta0newstickernum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0newstickernum !== '' && deviceDetailsArray[index].ta0newstickernum !== null && typeof deviceDetailsArray[index].ta0newstickernum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0newstickernum = barcodeData.text.trim();
                        }
                    }
                }
            }
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) { console.log(toast); });
        });
    };
    SealCrimplessSealPage.prototype.showSealNoSection = function (index) {
        index++;
        if (this.showSealNo === false) {
            this.showSealNo = true;
        }
        else if (index === 2) {
            this.showSealNo = false;
        }
    };
    SealCrimplessSealPage.prototype.resetSealSection = function (from) {
        var _this = this;
        console.log("Reset all seal input in one click!");
        if (from == 'mainPage') {
            var confirm_1 = this.alertCtrl.create({
                title: 'Confirmation',
                message: 'Do you agree to clear all before & after Seal Section ?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function () {
                            confirm_1.dismiss();
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            console.log("Confirm to clear all the fields..");
                            _this.ttbF1Array = [];
                            _this.ttbF2Array = [];
                            _this.ttbF3Array = [];
                            _this.sfuseF1Array = [];
                            _this.meterKiosk1Array = [];
                            _this.meterKiosk2Array = [];
                            _this.meterTestBoxArray1 = [];
                            _this.meterTestBoxArray2 = [];
                            _this.ctChamberArrayF1 = [];
                            _this.ptChamberArrayF1 = [];
                            _this.terminalBoxArrayF1 = [];
                            _this.marshallingBoxArrayF1 = [];
                            _this.ptSecondaryFuseArrayF1 = [];
                            _this.ttbf11Val.ta0sealnum = null;
                            _this.ttbf12Val.ta0sealnum = null;
                            _this.ttbf21Val.ta0sealnum = null;
                            _this.ttbf22Val.ta0sealnum = null;
                            _this.ttbf31Val.ta0sealnum = null;
                            _this.ttbf32Val.ta0sealnum = null;
                            _this.mfusef1Val.ta0sealnum = null;
                            _this.mfusef2Val.ta0sealnum = null;
                            _this.mfusef3Val.ta0sealnum = null;
                            _this.paneldoorkiosk11Val.ta0sealnum = null;
                            _this.paneldoorkiosk12Val.ta0sealnum = null;
                            _this.paneldoorkiosk21Val.ta0sealnum = null;
                            _this.paneldoorkiosk22Val.ta0sealnum = null;
                            _this.mtestbox11Val.ta0sealnum = null;
                            _this.mtestbox12Val.ta0sealnum = null;
                            _this.mtestbox21Val.ta0sealnum = null;
                            _this.mtestbox22Val.ta0sealnum = null;
                            _this.ctchamberf1Val1.ta0sealnum = null;
                            _this.ctchamberf2Val1.ta0sealnum = null;
                            _this.ctchamberf3Val1.ta0sealnum = null;
                            _this.ptchamberf1Val1.ta0sealnum = null;
                            _this.ptchamberf2Val1.ta0sealnum = null;
                            _this.ptchamberf3Val1.ta0sealnum = null;
                            _this.terminalboxf1Val.ta0sealnum = null;
                            _this.terminalboxf2Val.ta0sealnum = null;
                            _this.terminalboxf3Val.ta0sealnum = null;
                            _this.marshallingboxf1Val.ta0sealnum = null;
                            _this.marshallingboxf2Val.ta0sealnum = null;
                            _this.marshallingboxf3Val.ta0sealnum = null;
                            _this.ptsecondaryfusef1Val.ta0sealnum = null;
                            _this.ptsecondaryfusef2Val.ta0sealnum = null;
                            _this.ptsecondaryfusef3Val.ta0sealnum = null;
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    SealCrimplessSealPage.prototype.saveDeviceDetailsBefore = function () {
        var _this = this;
        debugger;
        console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore");
        for (var i = 0; i < this.itemOri.json.ta0sealdetail.length; i++) {
            if (this.ttbF1Array !== null && this.ttbF1Array.length > 0) {
                for (var x = 0; x < this.ttbF1Array.length; x++) {
                    if (this.ttbF1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF1Array[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF1Array[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF1Array[x].ta0sealcondition;
                    }
                }
            }
            if (this.ttbF2Array !== null && this.ttbF2Array.length > 0) {
                for (var x = 0; x < this.ttbF2Array.length; x++) {
                    if (this.ttbF2Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF1Array[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF1Array[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF1Array[x].ta0sealcondition;
                    }
                }
            }
            if (this.ttbF3Array !== null && this.ttbF3Array.length > 0) {
                for (var x = 0; x < this.ttbF3Array.length; x++) {
                    if (this.ttbF3Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ttbF3Array[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ttbF3Array[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ttbF3Array[x].ta0sealcondition;
                    }
                }
            }
            if (this.sfuseF1Array !== null && this.sfuseF1Array.length > 0) {
                for (var x = 0; x < this.sfuseF1Array.length; x++) {
                    if (this.sfuseF1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.sfuseF1Array[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.sfuseF1Array[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.sfuseF1Array[x].ta0sealcondition;
                    }
                }
            }
            if (this.meterKiosk1Array !== null && this.meterKiosk1Array.length > 0) {
                for (var x = 0; x < this.meterKiosk1Array.length; x++) {
                    if (this.meterKiosk1Array[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.meterKiosk1Array[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.meterKiosk1Array[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.meterKiosk1Array[x].ta0sealcondition;
                    }
                }
            }
            if (this.meterTestBoxArray1 !== null && this.meterTestBoxArray1.length > 0) {
                for (var x = 0; x < this.meterTestBoxArray1.length; x++) {
                    if (this.meterTestBoxArray1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.meterTestBoxArray1[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.meterTestBoxArray1[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.meterTestBoxArray1[x].ta0sealcondition;
                    }
                }
            }
            if (this.meterTestBoxArray2 !== null && this.meterTestBoxArray2.length > 0) {
                for (var x = 0; x < this.meterTestBoxArray2.length; x++) {
                    if (this.meterTestBoxArray2[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.meterTestBoxArray2[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.meterTestBoxArray2[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.meterTestBoxArray2[x].ta0sealcondition;
                    }
                }
            }
            if (this.ctChamberArrayF1 !== null && this.ctChamberArrayF1.length > 0) {
                for (var x = 0; x < this.ctChamberArrayF1.length; x++) {
                    if (this.ctChamberArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ctChamberArrayF1[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ctChamberArrayF1[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ctChamberArrayF1[x].ta0sealcondition;
                    }
                }
            }
            if (this.ptChamberArrayF1 !== null && this.ptChamberArrayF1.length > 0) {
                for (var x = 0; x < this.ptChamberArrayF1.length; x++) {
                    if (this.ptChamberArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ptChamberArrayF1[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ptChamberArrayF1[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ptChamberArrayF1[x].ta0sealcondition;
                    }
                }
            }
            if (this.terminalBoxArrayF1 !== null && this.terminalBoxArrayF1.length > 0) {
                for (var x = 0; x < this.terminalBoxArrayF1.length; x++) {
                    if (this.terminalBoxArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.terminalBoxArrayF1[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.terminalBoxArrayF1[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.terminalBoxArrayF1[x].ta0sealcondition;
                    }
                }
            }
            if (this.marshallingBoxArrayF1 !== null && this.marshallingBoxArrayF1.length > 0) {
                for (var x = 0; x < this.marshallingBoxArrayF1.length; x++) {
                    if (this.marshallingBoxArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.marshallingBoxArrayF1[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.marshallingBoxArrayF1[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.marshallingBoxArrayF1[x].ta0sealcondition;
                    }
                }
            }
            if (this.ptSecondaryFuseArrayF1 !== null && this.ptSecondaryFuseArrayF1.length > 0) {
                for (var x = 0; x < this.ptSecondaryFuseArrayF1.length; x++) {
                    if (this.ptSecondaryFuseArrayF1[x].ta0sealnum == this.itemOri.json.ta0sealdetail[i].ta0sealnum) {
                        this.itemOri.json.ta0sealdetail[i].ta0removeind = this.ptSecondaryFuseArrayF1[x].ta0removeind;
                        this.itemOri.json.ta0sealdetail[i].ta0sealremreason = this.ptSecondaryFuseArrayF1[x].ta0sealremreason;
                        this.itemOri.json.ta0sealdetail[i].ta0sealcondition = this.ptSecondaryFuseArrayF1[x].ta0sealcondition;
                    }
                }
            }
        }
        console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>this.itemOri ==>", this.itemOri);
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        setTimeout(function () {
            loading.onWillDismiss(function () {
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                _this.gf.displayToast("Crimpless Details have updated.");
                loading.dismiss();
            });
        }, 10000);
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
            this.gf.displayToast("Crimpless Details updated locally.");
            loading.dismiss();
        }
        else if ((__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            debugger;
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    var ta0sealdetails = {
                        ta0sealdetail: []
                    };
                    for (var _i = 0, _a = _this.itemOri.json.ta0sealdetail; _i < _a.length; _i++) {
                        var seal = _a[_i];
                        ta0sealdetails.ta0sealdetail.push(seal);
                    }
                    var feederCode = '';
                    var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));
                    var itemArray = [];
                    itemArray.push(itemVal);
                    _this.dataService
                        .saveRecordWithNewType(itemArray, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSWORKORDER, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>results ==>", JSON.stringify(results));
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;
                        /** convert string into json */
                        var resultDes = JSON.parse(results.toString());
                        if (resultDes.processStatus === "failure") {
                            resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                            // Remove double quote+words not working..
                            resultDes.description.replace(/"/g, '');
                            var split = resultDes.description.split(":");
                            var result = split[1].substr(0, split[1].length - 1);
                            var NewResult = result.substring(2);
                            resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                            _this.gf.displayToast(NewResult);
                        }
                        else {
                            _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                            _this.navCtrl.pop();
                        }
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>Error ==>" + error);
                        _this.gf.warningAlert('Error', 'Crimpless Details is failed to save.', 'Close');
                        loading.dismiss();
                    });
                }
                else {
                    //No Signal
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.gf.displayToast("Crimpless Details have updated locally.");
                    _this.navCtrl.pop();
                    loading.dismiss();
                }
            });
        }
        else {
            debugger;
            var feederCode = '';
            var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
            var ta0sealdetails = {
                ta0sealdetail: []
            };
            for (var _i = 0, _a = this.itemOri.json.ta0sealdetail; _i < _a.length; _i++) {
                var seal = _a[_i];
                ta0sealdetails.ta0sealdetail.push(seal);
            }
            var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));
            var itemArray = [];
            itemArray.push(itemVal);
            this.dataService
                .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
                console.log(">SealCrimplessSealPage >>saveDeviceDetailsBefore >>>results ==>", JSON.stringify(results));
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;
                /** convert string into json */
                var resultDes = JSON.parse(results.toString());
                if (resultDes.processStatus === "failure") {
                    resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                    // Remove double quote+words not working..
                    resultDes.description.replace(/"/g, '');
                    var split = resultDes.description.split(":");
                    var result = split[1].substr(0, split[1].length - 1);
                    var NewResult = result.substring(2);
                    resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                    _this.gf.displayToast(NewResult);
                }
                else {
                    _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                    _this.navCtrl.pop();
                }
                loading.dismiss();
            }).catch(function (error) {
                _this.gf.stopLoading();
                loading.dismiss();
            });
        }
    };
    SealCrimplessSealPage.prototype.saveDeviceDetails = function () {
        var _this = this;
        debugger;
        console.log(">SealCrimplessSealPage >>saveDeviceDetails");
        if (this.refSegment == 'before') {
            this.saveDeviceDetailsBefore();
            return;
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "Loading..."
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            var orgid = this.itemOri.json.orgid;
            var siteid = this.itemOri.json.siteid;
            var wonum = this.itemOri.json.wonum;
            if (this.ttbf11Val.ta0sealnum !== null && this.ttbf11Val.ta0sealnum !== undefined && this.ttbf11Val.ta0sealnum !== '') {
                this.ttbf11Val.orgid = orgid;
                this.ttbf11Val.siteid = siteid;
                this.ttbf11Val.wonum = wonum;
                this.ttbf11Val.ta0installind = true;
                this.ttbf11Val.ta0existingseal = false;
                this.ttbf11Val.devicelocind = true;
                this.ttbf11Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ttbf11Val);
            }
            if (this.ttbf12Val.ta0sealnum !== null && this.ttbf12Val.ta0sealnum !== undefined && this.ttbf12Val.ta0sealnum !== '') {
                this.ttbf12Val.orgid = orgid;
                this.ttbf12Val.siteid = siteid;
                this.ttbf12Val.wonum = wonum;
                this.ttbf12Val.ta0installind = true;
                this.ttbf12Val.ta0existingseal = false;
                this.ttbf12Val.devicelocind = true;
                this.ttbf12Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ttbf12Val);
            }
            if (this.ttbf21Val.ta0sealnum !== null && this.ttbf21Val.ta0sealnum !== undefined && this.ttbf21Val.ta0sealnum !== '') {
                this.ttbf21Val.orgid = orgid;
                this.ttbf21Val.siteid = siteid;
                this.ttbf21Val.wonum = wonum;
                this.ttbf21Val.ta0installind = true;
                this.ttbf21Val.ta0existingseal = false;
                this.ttbf21Val.devicelocind = true;
                this.ttbf21Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ttbf21Val);
            }
            if (this.ttbf22Val.ta0sealnum !== null && this.ttbf22Val.ta0sealnum !== undefined && this.ttbf22Val.ta0sealnum !== '') {
                this.ttbf22Val.orgid = orgid;
                this.ttbf22Val.siteid = siteid;
                this.ttbf22Val.wonum = wonum;
                this.ttbf22Val.ta0installind = true;
                this.ttbf22Val.ta0existingseal = false;
                this.ttbf22Val.devicelocind = true;
                this.ttbf22Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ttbf22Val);
            }
            if (this.ttbf31Val.ta0sealnum !== null && this.ttbf31Val.ta0sealnum !== undefined && this.ttbf31Val.ta0sealnum !== '') {
                this.ttbf31Val.orgid = orgid;
                this.ttbf31Val.siteid = siteid;
                this.ttbf31Val.wonum = wonum;
                this.ttbf31Val.ta0installind = true;
                this.ttbf31Val.ta0existingseal = false;
                this.ttbf31Val.devicelocind = true;
                this.ttbf31Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ttbf31Val);
            }
            if (this.ttbf32Val.ta0sealnum !== null && this.ttbf32Val.ta0sealnum !== undefined && this.ttbf32Val.ta0sealnum !== '') {
                this.ttbf32Val.orgid = orgid;
                this.ttbf32Val.siteid = siteid;
                this.ttbf32Val.wonum = wonum;
                this.ttbf32Val.ta0installind = true;
                this.ttbf32Val.ta0existingseal = false;
                this.ttbf32Val.devicelocind = true;
                this.ttbf32Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ttbf32Val);
            }
            if (this.mfusef1Val.ta0sealnum !== null && this.mfusef1Val.ta0sealnum !== undefined && this.mfusef1Val.ta0sealnum !== '') {
                this.mfusef1Val.orgid = orgid;
                this.mfusef1Val.siteid = siteid;
                this.mfusef1Val.wonum = wonum;
                this.mfusef1Val.ta0installind = true;
                this.mfusef1Val.ta0existingseal = false;
                this.mfusef1Val.devicelocind = true;
                this.mfusef1Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mfusef1Val);
            }
            if (this.mfusef2Val.ta0sealnum !== null && this.mfusef2Val.ta0sealnum !== undefined && this.mfusef2Val.ta0sealnum !== '') {
                this.mfusef2Val.orgid = orgid;
                this.mfusef2Val.siteid = siteid;
                this.mfusef2Val.wonum = wonum;
                this.mfusef2Val.ta0installind = true;
                this.mfusef2Val.ta0existingseal = false;
                this.mfusef2Val.devicelocind = true;
                this.mfusef2Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mfusef2Val);
            }
            if (this.mfusef3Val.ta0sealnum !== null && this.mfusef3Val.ta0sealnum !== undefined && this.mfusef3Val.ta0sealnum !== '') {
                this.mfusef3Val.orgid = orgid;
                this.mfusef3Val.siteid = siteid;
                this.mfusef3Val.wonum = wonum;
                this.mfusef3Val.ta0installind = true;
                this.mfusef3Val.ta0existingseal = false;
                this.mfusef3Val.devicelocind = true;
                this.mfusef3Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mfusef3Val);
            }
            if (this.paneldoorkiosk11Val.ta0sealnum !== null && this.paneldoorkiosk11Val.ta0sealnum !== undefined && this.paneldoorkiosk11Val.ta0sealnum !== '') {
                this.paneldoorkiosk11Val.orgid = orgid;
                this.paneldoorkiosk11Val.siteid = siteid;
                this.paneldoorkiosk11Val.wonum = wonum;
                this.paneldoorkiosk11Val.ta0installind = true;
                this.paneldoorkiosk11Val.ta0existingseal = false;
                this.paneldoorkiosk11Val.devicelocind = true;
                this.paneldoorkiosk11Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk11Val);
            }
            if (this.paneldoorkiosk12Val.ta0sealnum !== null && this.paneldoorkiosk12Val.ta0sealnum !== undefined && this.paneldoorkiosk12Val.ta0sealnum !== '') {
                this.paneldoorkiosk12Val.orgid = orgid;
                this.paneldoorkiosk12Val.siteid = siteid;
                this.paneldoorkiosk12Val.wonum = wonum;
                this.paneldoorkiosk12Val.ta0installind = true;
                this.paneldoorkiosk12Val.ta0existingseal = false;
                this.paneldoorkiosk12Val.devicelocind = true;
                this.paneldoorkiosk12Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk12Val);
            }
            if (this.paneldoorkiosk21Val.ta0sealnum !== null && this.paneldoorkiosk21Val.ta0sealnum !== undefined && this.paneldoorkiosk21Val.ta0sealnum !== '') {
                this.paneldoorkiosk21Val.orgid = orgid;
                this.paneldoorkiosk21Val.siteid = siteid;
                this.paneldoorkiosk21Val.wonum = wonum;
                this.paneldoorkiosk21Val.ta0installind = true;
                this.paneldoorkiosk21Val.ta0existingseal = false,
                    this.paneldoorkiosk21Val.devicelocind = true;
                this.paneldoorkiosk21Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk12Val);
            }
            if (this.paneldoorkiosk22Val.ta0sealnum !== null && this.paneldoorkiosk22Val.ta0sealnum !== undefined && this.paneldoorkiosk22Val.ta0sealnum !== '') {
                this.paneldoorkiosk22Val.orgid = orgid;
                this.paneldoorkiosk22Val.siteid = siteid;
                this.paneldoorkiosk22Val.wonum = wonum;
                this.paneldoorkiosk22Val.ta0installind = true;
                this.paneldoorkiosk22Val.ta0existingseal = false,
                    this.paneldoorkiosk22Val.devicelocind = true;
                this.paneldoorkiosk22Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.paneldoorkiosk22Val);
            }
            if (this.mtestbox11Val.ta0sealnum !== null && this.mtestbox11Val.ta0sealnum !== undefined && this.mtestbox11Val.ta0sealnum !== '') {
                this.mtestbox11Val.orgid = orgid;
                this.mtestbox11Val.siteid = siteid;
                this.mtestbox11Val.wonum = wonum;
                this.mtestbox11Val.ta0installind = true;
                this.mtestbox11Val.ta0existingseal = false,
                    this.mtestbox11Val.devicelocind = true;
                this.mtestbox11Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mtestbox11Val);
            }
            if (this.mtestbox12Val.ta0sealnum !== null && this.mtestbox12Val.ta0sealnum !== undefined && this.mtestbox12Val.ta0sealnum !== '') {
                this.mtestbox12Val.orgid = orgid;
                this.mtestbox12Val.siteid = siteid;
                this.mtestbox12Val.wonum = wonum;
                this.mtestbox12Val.ta0installind = true;
                this.mtestbox12Val.ta0existingseal = false,
                    this.mtestbox12Val.devicelocind = true;
                this.mtestbox12Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mtestbox12Val);
            }
            if (this.mtestbox21Val.ta0sealnum !== null && this.mtestbox21Val.ta0sealnum !== undefined && this.mtestbox21Val.ta0sealnum !== '') {
                this.mtestbox21Val.orgid = orgid;
                this.mtestbox21Val.siteid = siteid;
                this.mtestbox21Val.wonum = wonum;
                this.mtestbox21Val.ta0installind = true;
                this.mtestbox21Val.ta0existingseal = false,
                    this.mtestbox21Val.devicelocind = true;
                this.mtestbox21Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mtestbox21Val);
            }
            if (this.mtestbox22Val.ta0sealnum !== null && this.mtestbox22Val.ta0sealnum !== undefined && this.mtestbox22Val.ta0sealnum !== '') {
                this.mtestbox22Val.orgid = orgid;
                this.mtestbox22Val.siteid = siteid;
                this.mtestbox22Val.wonum = wonum;
                this.mtestbox22Val.ta0installind = true;
                this.mtestbox22Val.ta0existingseal = false,
                    this.mtestbox22Val.devicelocind = true;
                this.mtestbox22Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.mtestbox22Val);
            }
            if (this.ctchamberf1Val1.ta0sealnum !== null && this.ctchamberf1Val1.ta0sealnum !== undefined && this.ctchamberf1Val1.ta0sealnum !== '') {
                this.ctchamberf1Val1.orgid = orgid;
                this.ctchamberf1Val1.siteid = siteid;
                this.ctchamberf1Val1.wonum = wonum;
                this.ctchamberf1Val1.ta0installind = true;
                this.ctchamberf1Val1.ta0existingseal = false,
                    this.ctchamberf1Val1.devicelocind = true;
                this.ctchamberf1Val1.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ctchamberf1Val1);
            }
            if (this.ctchamberf2Val1.ta0sealnum !== null && this.ctchamberf2Val1.ta0sealnum !== undefined && this.ctchamberf2Val1.ta0sealnum !== '') {
                this.ctchamberf2Val1.orgid = orgid;
                this.ctchamberf2Val1.siteid = siteid;
                this.ctchamberf2Val1.wonum = wonum;
                this.ctchamberf2Val1.ta0installind = true;
                this.ctchamberf2Val1.ta0existingseal = false,
                    this.ctchamberf2Val1.devicelocind = true;
                this.ctchamberf2Val1.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ctchamberf2Val1);
            }
            if (this.ctchamberf3Val1.ta0sealnum !== null && this.ctchamberf3Val1.ta0sealnum !== undefined && this.ctchamberf3Val1.ta0sealnum !== '') {
                this.ctchamberf3Val1.orgid = orgid;
                this.ctchamberf3Val1.siteid = siteid;
                this.ctchamberf3Val1.wonum = wonum;
                this.ctchamberf3Val1.ta0installind = true;
                this.ctchamberf3Val1.ta0existingseal = false,
                    this.ctchamberf3Val1.devicelocind = true;
                this.ctchamberf3Val1.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ctchamberf3Val1);
            }
            if (this.ptchamberf1Val1.ta0sealnum !== null && this.ptchamberf1Val1.ta0sealnum !== undefined && this.ptchamberf1Val1.ta0sealnum !== '') {
                this.ptchamberf1Val1.orgid = orgid;
                this.ptchamberf1Val1.siteid = siteid;
                this.ptchamberf1Val1.wonum = wonum;
                this.ptchamberf1Val1.ta0installind = true;
                this.ptchamberf1Val1.ta0existingseal = false,
                    this.ptchamberf1Val1.devicelocind = true;
                this.ptchamberf1Val1.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ptchamberf1Val1);
            }
            if (this.ptchamberf2Val1.ta0sealnum !== null && this.ptchamberf2Val1.ta0sealnum !== undefined && this.ptchamberf2Val1.ta0sealnum !== '') {
                this.ptchamberf2Val1.orgid = orgid;
                this.ptchamberf2Val1.siteid = siteid;
                this.ptchamberf2Val1.wonum = wonum;
                this.ptchamberf2Val1.ta0installind = true;
                this.ptchamberf2Val1.ta0existingseal = false,
                    this.ptchamberf2Val1.devicelocind = true;
                this.ptchamberf2Val1.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ptchamberf2Val1);
            }
            if (this.ptchamberf3Val1.ta0sealnum !== null && this.ptchamberf3Val1.ta0sealnum !== undefined && this.ptchamberf3Val1.ta0sealnum !== '') {
                this.ptchamberf3Val1.orgid = orgid;
                this.ptchamberf3Val1.siteid = siteid;
                this.ptchamberf3Val1.wonum = wonum;
                this.ptchamberf3Val1.ta0installind = true;
                this.ptchamberf3Val1.ta0existingseal = false,
                    this.ptchamberf3Val1.devicelocind = true;
                this.ptchamberf3Val1.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ptchamberf3Val1);
            }
            if (this.terminalboxf1Val.ta0sealnum !== null && this.terminalboxf1Val.ta0sealnum !== undefined && this.terminalboxf1Val.ta0sealnum !== '') {
                this.terminalboxf1Val.orgid = orgid;
                this.terminalboxf1Val.siteid = siteid;
                this.terminalboxf1Val.wonum = wonum;
                this.terminalboxf1Val.ta0installind = true;
                this.terminalboxf1Val.ta0existingseal = false,
                    this.terminalboxf1Val.devicelocind = true;
                this.terminalboxf1Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.terminalboxf1Val);
            }
            if (this.terminalboxf2Val.ta0sealnum !== null && this.terminalboxf2Val.ta0sealnum !== undefined && this.terminalboxf2Val.ta0sealnum !== '') {
                this.terminalboxf2Val.orgid = orgid;
                this.terminalboxf2Val.siteid = siteid;
                this.terminalboxf2Val.wonum = wonum;
                this.terminalboxf2Val.ta0installind = true;
                this.terminalboxf2Val.ta0existingseal = false,
                    this.terminalboxf2Val.devicelocind = true;
                this.terminalboxf2Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.terminalboxf2Val);
            }
            if (this.terminalboxf3Val.ta0sealnum !== null && this.terminalboxf3Val.ta0sealnum !== undefined && this.terminalboxf3Val.ta0sealnum !== '') {
                this.terminalboxf3Val.orgid = orgid;
                this.terminalboxf3Val.siteid = siteid;
                this.terminalboxf3Val.wonum = wonum;
                this.terminalboxf3Val.ta0installind = true;
                this.terminalboxf3Val.ta0existingseal = false,
                    this.terminalboxf3Val.devicelocind = true;
                this.terminalboxf3Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.terminalboxf3Val);
            }
            if (this.marshallingboxf1Val.ta0sealnum !== null && this.marshallingboxf1Val.ta0sealnum !== undefined && this.marshallingboxf1Val.ta0sealnum !== '') {
                this.marshallingboxf1Val.orgid = orgid;
                this.marshallingboxf1Val.siteid = siteid;
                this.marshallingboxf1Val.wonum = wonum;
                this.marshallingboxf1Val.ta0installind = true;
                this.marshallingboxf1Val.ta0existingseal = false,
                    this.marshallingboxf1Val.devicelocind = true;
                this.marshallingboxf1Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.marshallingboxf1Val);
            }
            if (this.marshallingboxf2Val.ta0sealnum !== null && this.marshallingboxf2Val.ta0sealnum !== undefined && this.marshallingboxf2Val.ta0sealnum !== '') {
                this.marshallingboxf2Val.orgid = orgid;
                this.marshallingboxf2Val.siteid = siteid;
                this.marshallingboxf2Val.wonum = wonum;
                this.marshallingboxf2Val.ta0installind = true;
                this.marshallingboxf2Val.ta0existingseal = false,
                    this.marshallingboxf2Val.devicelocind = true;
                this.marshallingboxf2Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.marshallingboxf2Val);
            }
            if (this.marshallingboxf3Val.ta0sealnum !== null && this.marshallingboxf3Val.ta0sealnum !== undefined && this.marshallingboxf3Val.ta0sealnum !== '') {
                this.marshallingboxf3Val.orgid = orgid;
                this.marshallingboxf3Val.siteid = siteid;
                this.marshallingboxf3Val.wonum = wonum;
                this.marshallingboxf3Val.ta0installind = true;
                this.marshallingboxf3Val.ta0existingseal = false,
                    this.marshallingboxf3Val.devicelocind = true;
                this.marshallingboxf3Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.marshallingboxf3Val);
            }
            if (this.ptsecondaryfusef1Val.ta0sealnum !== null && this.ptsecondaryfusef1Val.ta0sealnum !== undefined && this.ptsecondaryfusef1Val.ta0sealnum !== '') {
                this.ptsecondaryfusef1Val.orgid = orgid;
                this.ptsecondaryfusef1Val.siteid = siteid;
                this.ptsecondaryfusef1Val.wonum = wonum;
                this.ptsecondaryfusef1Val.ta0installind = true;
                this.ptsecondaryfusef1Val.ta0existingseal = false,
                    this.ptsecondaryfusef1Val.devicelocind = true;
                this.ptsecondaryfusef1Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ptsecondaryfusef1Val);
            }
            if (this.ptsecondaryfusef2Val.ta0sealnum !== null && this.ptsecondaryfusef2Val.ta0sealnum !== undefined && this.ptsecondaryfusef2Val.ta0sealnum !== '') {
                this.ptsecondaryfusef2Val.orgid = orgid;
                this.ptsecondaryfusef2Val.siteid = siteid;
                this.ptsecondaryfusef2Val.wonum = wonum;
                this.ptsecondaryfusef2Val.ta0installind = true;
                this.ptsecondaryfusef2Val.ta0existingseal = false,
                    this.ptsecondaryfusef2Val.devicelocind = true;
                this.ptsecondaryfusef2Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ptsecondaryfusef2Val);
            }
            if (this.ptsecondaryfusef3Val.ta0sealnum !== null && this.ptsecondaryfusef3Val.ta0sealnum !== undefined && this.ptsecondaryfusef3Val.ta0sealnum !== '') {
                this.ptsecondaryfusef3Val.orgid = orgid;
                this.ptsecondaryfusef3Val.siteid = siteid;
                this.ptsecondaryfusef3Val.wonum = wonum;
                this.ptsecondaryfusef3Val.ta0installind = true;
                this.ptsecondaryfusef3Val.ta0existingseal = false,
                    this.ptsecondaryfusef3Val.devicelocind = true;
                this.ptsecondaryfusef3Val.ta0sealindicator = 'N';
                this.itemOri.json.ta0sealdetail.push(this.ptsecondaryfusef3Val);
            }
            setTimeout(function () {
                loading_1.onWillDismiss(function () {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                    _this.gf.displayToast("Crimpless Details have updated.");
                    loading_1.dismiss();
                });
            }, 10000);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                this.gf.displayToast("Crimpless Details updated locally.");
                loading_1.dismiss();
            }
            else if ((__WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        var feederCode = '';
                        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
                        var ta0sealdetails = {
                            ta0sealdetail: []
                        };
                        for (var _i = 0, _a = _this.itemOri.json.ta0sealdetail; _i < _a.length; _i++) {
                            var seal = _a[_i];
                            ta0sealdetails.ta0sealdetail.push(seal);
                        }
                        var feederCode = '';
                        var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));
                        var itemArray = [];
                        itemArray.push(itemVal);
                        _this.dataService
                            .saveRecordWithNewType(itemArray, wonum, __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSWORKORDER, feederCode, _this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(">SealCrimplessSealPage >>saveDeviceDetails >>>results ==>", JSON.stringify(results));
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;
                            /** convert string into json */
                            var resultDes = JSON.parse(results.toString());
                            if (resultDes.processStatus === "failure") {
                                resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                                // Remove double quote+words not working..
                                resultDes.description.replace(/"/g, '');
                                var split = resultDes.description.split(":");
                                var result = split[1].substr(0, split[1].length - 1);
                                var NewResult = result.substring(2);
                                resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                                _this.gf.displayToast(NewResult);
                            }
                            else {
                                _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                                //this.navCtrl.pop();
                            }
                            loading_1.dismiss();
                        }).catch(function (error) {
                            console.log('service failure : ' + error);
                            _this.gf.warningAlert('Error', 'Crimpless Details failed to save.', 'Close');
                            loading_1.dismiss();
                        });
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                        _this.gf.displayToast("Crimpless Details updated locally.");
                        _this.navCtrl.pop();
                        loading_1.dismiss();
                    }
                });
            }
            else {
                //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';        
                var ta0sealdetails = {
                    ta0sealdetail: []
                };
                for (var _i = 0, _a = this.itemOri.json.ta0sealdetail; _i < _a.length; _i++) {
                    var seal = _a[_i];
                    ta0sealdetails.ta0sealdetail.push(seal);
                }
                var feederCode = '';
                var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));
                var itemArray = [];
                itemArray.push(itemVal);
                this.dataService
                    .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_9__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
                    .then(function (results) {
                    console.log(">SealCrimplessSealPage >>saveDeviceDetails >>>results ==>", JSON.stringify(results));
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                    //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;
                    /** convert string into json */
                    var resultDes = JSON.parse(results.toString());
                    debugger;
                    if (resultDes.processStatus === "failure") {
                        resultDes.description.replace(/(?!\w|\s)./g, '').replace(/\s+/g, ' ').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
                        // Remove double quote+words not working..
                        resultDes.description.replace(/"/g, '');
                        var split = resultDes.description.split(":");
                        var result = split[1].substr(0, split[1].length - 1);
                        var NewResult = result.substring(2);
                        resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                        _this.gf.displayToast(NewResult);
                    }
                    else {
                        _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                        //this.navCtrl.pop();
                    }
                    loading_1.dismiss();
                }).catch(function (error) {
                    _this.gf.stopLoading();
                    loading_1.dismiss();
                });
            }
            //}
        }
    };
    SealCrimplessSealPage.prototype.triggerAllocationType = function () {
        debugger;
        var type = this.itemOri.json.worktype;
        var old_voltage = this.itemOri.json.ta0installationvoltage;
        var new_voltage = this.itemOri.json.ta0newvoltage;
        if (type === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || type === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || type === __WEBPACK_IMPORTED_MODULE_11__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
            if (old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) {
                this.itemOri.json.loc_allocationtype_status = true;
            }
            else {
                this.itemOri.json.loc_allocationtype_status = false;
            }
        }
        else {
            if ((old_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV) || (old_voltage <= this.dCons.VOL_LEVEL_LPC_MVHV_6kV && new_voltage >= this.dCons.VOL_LEVEL_LPC_MVHV_6kV)) {
                this.itemOri.json.loc_allocationtype_status = true;
            }
            else {
                this.itemOri.json.loc_allocationtype_status = false;
            }
        }
    };
    SealCrimplessSealPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SealCrimplessSealPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-crimpless-seal',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/devices/seal-crimpless-seal/seal-crimpless-seal.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Seal Device Location</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ng-container *ngIf="mainPage == true">\n    <ion-segment [(ngModel)]="refSegment" style="padding-bottom: 10px;">\n      <ion-segment-button value="before">Before</ion-segment-button>\n      <ion-segment-button value="after">After</ion-segment-button>\n    </ion-segment>\n\n    <span [ngSwitch]="refSegment">\n      <span *ngSwitchCase="\'before\'">\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF1"\n                (click)="addTtb(\'f1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">{{attr.ta0seallocation_description}}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter"  \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ttbF1Array,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary">Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF2"\n                (click)="addTtb(\'f2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">{{attr.ta0seallocation_description}}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ttbF2Array,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary">Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF3"\n                (click)="addTtb(\'f3\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF3Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF3Array.length <= 1" color="primary">Test Block F3</ion-label>\n                <ion-label *ngIf="ttbF3Array.length > 1" color="primary">Test Block F3 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ttbF3Array,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>            \n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF1Array.length <= 1" color="primary">Meter Fuse F1</ion-label>\n                <ion-label *ngIf="sfuseF1Array.length > 1" color="primary">Meter Fuse F{{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter"  \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(sfuseF1Array,j,2, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Fuse/Voltage F2 Slider\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF2Array.length <= 1" color="primary">Fuse/Voltage F2 Slider</ion-label>\n                <ion-label *ngIf="sfuseF2Array.length > 1" color="primary">Fuse/Voltage F2 Slider - {{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF1Array,j,2, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF3Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF3Array.length <= 1" color="primary">Meter Fuse F1</ion-label>\n                <ion-label *ngIf="sfuseF3Array.length > 1" color="primary">Meter Fuse F{{ j + 1}}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF3Array,j,2, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Panel Door Kiosk 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk1"\n                (click)="addMeterKiosk(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterKiosk1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterKiosk1Array.length <= 1" color="primary">Panel Door Kiosk 1</ion-label>\n                <ion-label *ngIf="meterKiosk1Array.length > 1" color="primary">Panel Door Kiosk 1 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrKiosk1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter"  \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterKiosk(j,\'1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Panel Door Kiosk 2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk2"\n                (click)="addMeterKiosk(\'2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterKiosk2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterKiosk2Array.length <= 1" color="primary">Panel Door Kiosk 2</ion-label>\n                <ion-label *ngIf="meterKiosk2Array.length > 1" color="primary">Meter Kiosk 2 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrKiosk2\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterKiosk(j,\'2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox1"\n                (click)="addMeterTestBox(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterTestBoxArray1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterTestBoxArray1.length <= 1" color="primary">Meter Test Box 1</ion-label>\n                <ion-label *ngIf="meterTestBoxArray1.length > 1" color="primary">Meter Test Box 1 {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrTestBox1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterTestBoxArray1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterTestBox(j,\'1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox2"\n                (click)="addMeterTestBox(\'2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterTestBoxArray2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterTestBoxArray2.length <= 1" color="primary">Meter Test Box 2</ion-label>\n                <ion-label *ngIf="meterTestBoxArray2.length > 1" color="primary">Meter Test Box 2 {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrTestBox2\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterTestBoxArray2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterTestBox(j,\'2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF1.length <= 1" color="primary">CT Chamber F1</ion-label>\n                <ion-label *ngIf="ctChamberArrayF1.length > 1" color="primary">CT Chamber F{{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ctChamberArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">              \n              <button ion-button (click)="deleteCtChamber(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary">Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF1.length <= 1" color="primary">PT Chamber F1</ion-label>\n                <ion-label *ngIf="ptChamberArrayF1.length > 1" color="primary">PT Chamber F1 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ptChamberArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary">Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF1.length <= 1" color="primary">Termination Box F1</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF1.length > 1" color="primary">Termination Box F{{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxf1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n             <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">             \n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>              \n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF2.length <= 1" color="primary">Termination Box F2</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF2.length > 1" color="primary">Termination Box F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxF2\', j,\'before\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF3.length <= 1" color="primary">Termination Box F3</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF3.length > 1" color="primary">Termination Box F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxF3\', j,\'before\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF1.length <= 1" color="primary">Marshalling Box F1</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF1.length > 1" color="primary">Marshalling Box F1 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <!--\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n                -->\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <!--\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF1.length <= 1" color="primary">PT Secondary Fuse F1</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF1.length > 1" color="primary">PT Secondary Fuse F{{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF2.length <= 1" color="primary">PT Secondary Fuse F2</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF2.length > 1" color="primary">PT Secondary Fuse F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF3.length <= 1" color="primary">PT Secondary Fuse F3</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF3.length > 1" color="primary">PT Secondary Fuse F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span> \n-->\n      \n\n        <!-- </span> -->\n\n        <!-- <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider> -->\n        \n      </span>\n\n      <!-- After Section Starts -->\n      <span *ngSwitchCase="\'after\'">\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;"\n                (click)="resetSealSection(\'mainPage\')">Reset</button>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F1\n            </ion-col>            \n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF1"\n                (click)="addTtb(\'f1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location TEST_BLOCK_F1_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Test Block F1 - 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="ttbf11Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter" \n                  [ngClass]="(ttbf11Val.ta0sealnum == \'\' || ttbf11Val.ta0sealnum == undefined && !validateInput || ttbf11Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbf11Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location TEST_BLOCK_F1_2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Test Block F1 - 2</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="ttbf12Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter" \n                  [ngClass]="(ttbf12Val.ta0sealnum == \'\' || ttbf12Val.ta0sealnum == undefined && !validateInput || ttbf12Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbf12Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF2"\n                (click)="addTtb(\'f2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location TEST_BLOCK_F2_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Test Block F2 - 1</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="ttbf21Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter" \n                  [ngClass]="(ttbf21Val.ta0sealnum == \'\' || ttbf21Val.ta0sealnum == undefined && !validateInput || ttbf21Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbf21Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n           <!-- Device Location TEST_BLOCK_F2_2 -->\n           <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Test Block F2 - 2</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="ttbf22Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter" \n                  [ngClass]="(ttbf22Val.ta0sealnum == \'\' || ttbf22Val.ta0sealnum == undefined && !validateInput || ttbf22Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbf22Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>        \n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF3"\n                (click)="addTtb(\'f3\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location TEST_BLOCK_F3_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Test Block F3 - 1</ion-label>                \n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="ttbf31Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter" \n                  [ngClass]="(ttbf31Val.ta0sealnum == \'\' || ttbf31Val.ta0sealnum == undefined && !validateInput || ttbf31Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbF3NewArray,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row> \n          <!-- Device Location TEST_BLOCK_F3_2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Test Block F3 - 2</ion-label>                \n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="ttbf32Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter" \n                  [ngClass]="(ttbf32Val.ta0sealnum == \'\' || ttbf32Val.ta0sealnum == undefined && !validateInput || ttbf32Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbF3NewArray,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>         \n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddSfuseF1"\n                (click)="addSfuseF1()">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button> \n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location METER_FUSE_F1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Meter Fuse F1</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="mfusef1Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mfusef1Val.ta0sealnum == \'\' || mfusef1Val.ta0sealnum == undefined && !validateInput || mfusef1Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(mfusef1Val,j,2, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location METER_FUSE_F2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Meter Fuse F2</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="mfusef2Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mfusef2Val.ta0sealnum == \'\' || mfusef2Val.ta0sealnum == undefined && !validateInput || mfusef2Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(mfusef2Val,j,2, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location METER_FUSE_F3 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Meter Fuse F3</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="mfusef3Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mfusef3Val.ta0sealnum == \'\' || mfusef3Val.ta0sealnum == undefined && !validateInput || mfusef3Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(mfusef3Val,j,2, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>          \n          </ion-row>       \n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Panel Door Kiosk\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk1"\n                (click)="addMeterKiosk(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location PANELDOOR_KIOSK1_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Panel Door Kiosk 1 - 1</ion-label>\n              </ion-item>\n            </ion-col>         \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="paneldoorkiosk11Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(paneldoorkiosk11Val.ta0sealnum == \'\' || paneldoorkiosk11Val.ta0sealnum == undefined && !validateInput || paneldoorkiosk11Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterKiosk1NewArray,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location PANELDOOR_KIOSK1_2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Panel Door Kiosk 1 - 2</ion-label>\n              </ion-item>\n            </ion-col>         \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="paneldoorkiosk12Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(paneldoorkiosk12Val.ta0sealnum == \'\' || paneldoorkiosk12Val.ta0sealnum == undefined && !validateInput || paneldoorkiosk12Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterKiosk1NewArray,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location PANELDOOR_KIOSK2_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Panel Door Kiosk 2 - 1</ion-label>\n              </ion-item>\n            </ion-col>         \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="paneldoorkiosk21Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(paneldoorkiosk21Val.ta0sealnum == \'\' || paneldoorkiosk21Val.ta0sealnum == undefined && !validateInput || paneldoorkiosk21Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(paneldoorkiosk21Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location PANELDOOR_KIOSK2_2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Panel Door Kiosk 2 - 2</ion-label>\n              </ion-item>\n            </ion-col>         \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="paneldoorkiosk22Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(paneldoorkiosk22Val.ta0sealnum == \'\' || paneldoorkiosk22Val.ta0sealnum == undefined && !validateInput || paneldoorkiosk22Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(paneldoorkiosk22Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n        </span>      \n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox1"\n                (click)="addMeterTestBox(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location METER_TESTBOX_KIOSK1_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label  color="primary">Meter Test Box 1 - 1</ion-label>                \n              </ion-item>\n            </ion-col>        \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="mtestbox11Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mtestbox11Val.ta0sealnum == \'\' || mtestbox11Val.ta0sealnum == undefined && !validateInput || mtestbox11Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(mtestbox11Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location METER_TESTBOX_KIOSK1_2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label  color="primary">Meter Test Box 1 - 2</ion-label>                \n              </ion-item>\n            </ion-col>        \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="mtestbox12Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mtestbox12Val.ta0sealnum == \'\' || mtestbox12Val.ta0sealnum == undefined && !validateInput || mtestbox12Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(mtestbox12Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location METER_TESTBOX_KIOSK2_1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label  color="primary">Meter Test Box 2 - 1</ion-label>                \n              </ion-item>\n            </ion-col>        \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="mtestbox21Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mtestbox21Val.ta0sealnum == \'\' || mtestbox21Val.ta0sealnum == undefined && !validateInput || mtestbox21Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(mtestbox21Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location METER_TESTBOX_KIOSK2_2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label  color="primary">Meter Test Box 2 - 2</ion-label>                \n              </ion-item>\n            </ion-col>        \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="mtestbox22Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(mtestbox22Val.ta0sealnum == \'\' || mtestbox22Val.ta0sealnum == undefined && !validateInput || mtestbox22Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterTestBoxNewArray1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>          \n        </span>\n        \n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddCtChamber" (click)="addCtChamber()">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location CT_CHAMBER_F1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">CT Chamber F1</ion-label>\n              </ion-item>\n            </ion-col>          \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="ctchamberf1Val1.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ctchamberf1Val1.ta0sealnum == \'\' || ctchamberf1Val1.ta0sealnum == undefined && !validateInput || ctchamberf1Val1.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctchamberf1Val1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location CT_CHAMBER_F2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">CT Chamber F2</ion-label>\n              </ion-item>\n            </ion-col>          \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="ctchamberf2Val1.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ctchamberf2Val1.ta0sealnum == \'\' || ctchamberf2Val1.ta0sealnum == undefined && !validateInput || ctchamberf2Val1.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctchamberf2Val1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location CT_CHAMBER_F3 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">CT Chamber F3</ion-label>\n              </ion-item>\n            </ion-col>          \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="ctchamberf3Val1.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ctchamberf3Val1.ta0sealnum == \'\' || ctchamberf3Val1.ta0sealnum == undefined && !validateInput || ctchamberf3Val1.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctchamberf3Val1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>   \n        </span>\n        \n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddPtChamber" (click)="addPtChamber()">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location PT_CHAMBER_F1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">PT Chamber F1</ion-label>                \n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="ptchamberf1Val1.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ptchamberf1Val1.ta0sealnum == \'\' || ptchamberf1Val1.ta0sealnum == undefined && !validateInput || ptchamberf1Val1.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptchamberf1Val1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location PT_CHAMBER_F2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">PT Chamber F2</ion-label>                \n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="ptchamberf2Val1.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ptchamberf2Val1.ta0sealnum == \'\' || ptchamberf2Val1.ta0sealnum == undefined && !validateInput || ptchamberf2Val1.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptchamberf2Val1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n          <!-- Device Location PT_CHAMBER_F3 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">PT Chamber F3</ion-label>                \n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="ptchamberf3Val1.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ptchamberf3Val1.ta0sealnum == \'\' || ptchamberf3Val1.ta0sealnum == undefined && !validateInput || ptchamberf3Val1.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptchamberf3Val1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>            \n          </ion-row>\n        </span>        \n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalBox" (click)="addTerminalBox()">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location TERMINATION_BOX_F1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Termination Box F1</ion-label>\n              </ion-item>\n            </ion-col>            \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>             \n                <ion-input [(ngModel)]="terminalboxf1Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(terminalboxf1Val.ta0sealnum == \'\' || terminalboxf1Val.ta0sealnum == undefined && !validateInput || terminalboxf1Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxNewArrayF1,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>          \n          </ion-row>\n          <!-- Device Location TERMINATION_BOX_F2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Termination Box F2</ion-label>\n              </ion-item>\n            </ion-col>            \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>             \n                <ion-input [(ngModel)]="terminalboxf2Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(terminalboxf2Val.ta0sealnum == \'\' || terminalboxf2Val.ta0sealnum == undefined && !validateInput || terminalboxf2Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalboxf2Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>          \n          </ion-row>\n          <!-- Device Location TERMINATION_BOX_F3 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Termination Box F3</ion-label>\n              </ion-item>\n            </ion-col>            \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>             \n                <ion-input [(ngModel)]="terminalboxf3Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(terminalboxf3Val.ta0sealnum == \'\' || terminalboxf3Val.ta0sealnum == undefined && !validateInput || terminalboxf3Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalboxf3Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>          \n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMarshallingBox"\n                (click)="addMarshallingBox()">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location MARSHALLING_BOX_F1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Marshalling Box F1</ion-label>\n              </ion-item>\n            </ion-col>            \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="marshallingboxf1Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(marshallingboxf1Val.ta0sealnum == \'\' || marshallingboxf1Val.ta0sealnum == undefined && !validateInput || marshallingboxf1Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingboxf1Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row> \n          <!-- Device Location MARSHALLING_BOX_F2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Marshalling Box F2</ion-label>\n              </ion-item>\n            </ion-col>            \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="marshallingboxf2Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(marshallingboxf2Val.ta0sealnum == \'\' || marshallingboxf2Val.ta0sealnum == undefined && !validateInput || marshallingboxf2Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingboxf2Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location MARSHALLING_BOX_F3 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Marshalling Box F3</ion-label>\n              </ion-item>\n            </ion-col>            \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>              \n                <ion-input [(ngModel)]="marshallingboxf3Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(marshallingboxf3Val.ta0sealnum == \'\' || marshallingboxf3Val.ta0sealnum == undefined && !validateInput || marshallingboxf3Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingboxf3Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>        \n        </span>        \n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;"\n                *ngIf="showAddPtSecondaryFuse" (click)="addPtSecondaryFuse()">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;">\n          <!-- Device Location PT_SEC_FUSE_F1 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">PT Secondary Fuse F1</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="ptsecondaryfusef1Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ptsecondaryfusef1Val.ta0sealnum == \'\' || ptsecondaryfusef1Val.ta0sealnum == undefined && !validateInput || ptsecondaryfusef1Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptsecondaryfusef1Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row> \n          <!-- Device Location PT_SEC_FUSE_F2 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">PT Secondary Fuse F2</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="ptsecondaryfusef2Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ptsecondaryfusef2Val.ta0sealnum == \'\' || ptsecondaryfusef2Val.ta0sealnum == undefined && !validateInput || ptsecondaryfusef2Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptsecondaryfusef2Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n          <!-- Device Location PT_SEC_FUSE_F3 -->\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">PT Secondary Fuse F3</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>               \n                <ion-input [(ngModel)]="ptsecondaryfusef3Val.ta0sealnum" type="text" maxlength="30" clearInput placeholder="Please Enter"\n                  [ngClass]="(ptsecondaryfusef3Val.ta0sealnum == \'\' || ptsecondaryfusef3Val.ta0sealnum == undefined && !validateInput || ptsecondaryfusef3Val.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptsecondaryfusef3Val,0,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>           \n          </ion-row>\n        </span>\n        \n      </span>\n    </span>\n  </ng-container>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveDeviceDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/devices/seal-crimpless-seal/seal-crimpless-seal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_10__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SealCrimplessSealPage);
    return SealCrimplessSealPage;
}());

//# sourceMappingURL=seal-crimpless-seal.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealCrimplessSealPageModule", function() { return SealCrimplessSealPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_crimpless_seal__ = __webpack_require__(1065);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SealCrimplessSealPageModule = /** @class */ (function () {
    function SealCrimplessSealPageModule() {
    }
    SealCrimplessSealPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_crimpless_seal__["a" /* SealCrimplessSealPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_crimpless_seal__["a" /* SealCrimplessSealPage */]),
            ],
        })
    ], SealCrimplessSealPageModule);
    return SealCrimplessSealPageModule;
}());

//# sourceMappingURL=seal-crimpless-seal.module.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealInfo; });
var SealInfo = /** @class */ (function () {
    function SealInfo() {
        this.ta0removeind = false;
        this.ta0existingseal = false;
        this.ta0installind = false;
        this.devicelocind = false;
    }
    return SealInfo;
}());

//# sourceMappingURL=SealInfo.js.map

/***/ })

});
//# sourceMappingURL=21.js.map