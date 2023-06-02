webpackJsonp([8],{

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrimplessSealPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_StickerInfo__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_MultiAssetLocci__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pojo_design_feederSetDesign__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__ = __webpack_require__(175);
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
var CrimplessSealPage = /** @class */ (function () {
    function CrimplessSealPage(navCtrl, loadingCtrl, navParams, gv, jsonStore, params, barcodeScanner, gf, toast, dataService, alertCtrl) {
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
        this.refSegment = "before";
        this.segmentSection = false;
        this.showSealNo = true;
        this.showAddMeterCover = true;
        this.sc = [];
        this.rr = [];
        this.meterCoverArray = [];
        this.ttbF1Array = [];
        this.ttbF2Array = [];
        this.ttbF3Array = [];
        this.sfuseF1Array = [];
        this.sfuseF2Array = [];
        this.sfuseF3Array = [];
        this.meterKiosk1Array = [];
        this.meterKiosk2Array = [];
        this.meterTestBoxArray1 = [];
        this.meterTestBoxArray2 = [];
        this.ctChamberArrayF1 = [];
        this.ctChamberArrayF2 = [];
        this.ctChamberArrayF3 = [];
        this.ptChamberArrayF1 = [];
        this.ptChamberArrayF2 = [];
        this.ptChamberArrayF3 = [];
        this.terminalBoxArrayF1 = [];
        this.terminalBoxArrayF2 = [];
        this.terminalBoxArrayF3 = [];
        this.marshallingBoxArrayF1 = [];
        this.marshallingBoxArrayF2 = [];
        this.marshallingBoxArrayF3 = [];
        this.ptSecondaryFuseArrayF1 = [];
        this.ptSecondaryFuseArrayF2 = [];
        this.ptSecondaryFuseArrayF3 = [];
        this.ttbF1NewArray = []; //Test Block F1
        this.ttbF2NewArray = []; //Test Block F2
        this.ttbF3NewArray = []; //Test Block F3
        this.sfuseF1NewArray = []; //Meter Fuse
        this.showAddTtbF1 = true;
        this.showAddTtbF2 = true;
        this.showAddTtbF3 = true;
        this.showAddSfuseF1 = true;
        this.showAddSfuseF2 = true;
        this.showAddSfuseF3 = true;
        this.showAddMeterKiosk1 = true;
        this.showAddMeterKiosk2 = true;
        this.showAddMeterTestBox1 = true;
        this.showAddMeterTestBox2 = true;
        this.showAddCtChamber1 = true;
        this.showAddCtChamber2 = true;
        this.showAddCtChamber3 = true;
        this.showAddPtChamberf1 = true;
        this.showAddPtChamberf2 = true;
        this.showAddPtChamberf3 = true;
        this.feederDetailsRes = [];
        this.worktype = null; //SO Type
        this.dCons = __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */];
        //this.feederDetails = this.params.data.feederDetails
        this.from = this.params.get("from");
        this.itemOri = this.params.get("paramObj");
        this.worktype = this.itemOri.json.worktype;
        console.log('this.itemOri==>', this.itemOri);
        //var res = JSON.parse(this.feederDetails)
        //this.sealWonum = JSON.parse(res.respObject)
        //console.log('item.json.ta0feederCrimpless', JSON.parse(res.respObject));
        this.deviceDetails = new __WEBPACK_IMPORTED_MODULE_12__pojo_MultiAssetLocci__["a" /* MultiAssetLocci */]();
        this.loadlookup();
        this.gf.stopLoading();
    }
    CrimplessSealPage.prototype.ngOnInit = function () {
        debugger;
        /*
        var ttbF1Val = new SealInfo();
          ttbF1Val.ta0seallocation = "TEST_BLOCK_F1_";
          ttbF1Val.ta0sealnum = null;
          ttbF1Val.ta0newsealnum = null;
          ttbF1Val.ta0sealcondition = null;
          ttbF1Val.ta0seallocation_description = "Test Block F1"
          this.ttbF1Array[0] = ttbF1Val;
    
          var ttbF2Val = new SealInfo();
          ttbF2Val.ta0seallocation = "TEST_BLOCK_F2_";
          ttbF2Val.ta0sealnum = null;
          ttbF2Val.ta0newsealnum = null;
          ttbF2Val.ta0sealcondition = null;
          ttbF2Val.ta0seallocation_description = "Test Block F2"
          this.ttbF2Array[0] = ttbF2Val;
    
          var ttb3Val = new SealInfo();
          ttb3Val.ta0seallocation = "TEST_BLOCK_F3_";
          ttb3Val.ta0sealnum = null;
          ttb3Val.ta0newsealnum = null;
          ttb3Val.ta0sealcondition = null;
          ttb3Val.ta0seallocation_description = "Test Block F3"
          this.ttbF3Array[0] = ttb3Val;
    
    
          var sfuseF1Val = new StickerInfo();
          sfuseF1Val.ta0stickerlocation = "METER_FUSE_F1";
          sfuseF1Val.ta0stickernum = null;
          sfuseF1Val.ta0newstickernum = null;
          sfuseF1Val.ta0stickercondition = null;
          sfuseF1Val.ta0seallocation_description = "Meter Fuse F1"
          this.sfuseF1Array[0] = sfuseF1Val;
    
          var sfuseF2Val = new StickerInfo();
          sfuseF2Val.ta0stickerlocation = "METER_FUSE_F2";
          sfuseF2Val.ta0stickernum = null;
          sfuseF2Val.ta0newstickernum = null;
          sfuseF2Val.ta0stickercondition = null;
          sfuseF2Val.ta0seallocation_description = "Meter Fuse F2"
          this.sfuseF2Array[0] = sfuseF2Val;
    
          var sfuseF3Val = new StickerInfo();
          sfuseF3Val.ta0stickerlocation = "METER_FUSE_F3";
          sfuseF3Val.ta0stickernum = null;
          sfuseF3Val.ta0newstickernum = null;
          sfuseF3Val.ta0stickercondition = null;
          sfuseF3Val.ta0seallocation_description = "Meter Fuse F3"
          this.sfuseF3Array[0] = sfuseF3Val;
    
          var meterKioskVal = new SealInfo();
          meterKioskVal.ta0seallocation = "PANELDOOR_KIOSK1_";
          meterKioskVal.ta0sealnum = null;
          meterKioskVal.ta0newsealnum = null;
          meterKioskVal.ta0sealcondition = null;
          meterKioskVal.ta0seallocation_description = "Kiosk1 Paneldoor"
          this.meterKiosk1Array[0] = meterKioskVal;
    
          var meterKiosk2Val = new SealInfo();
          meterKiosk2Val.ta0seallocation = "PANELDOOR_KIOSK2_";
          meterKiosk2Val.ta0sealnum = null;
          meterKiosk2Val.ta0newsealnum = null;
          meterKiosk2Val.ta0sealcondition = null;
          meterKiosk2Val.ta0seallocation_description = "Kiosk2 Paneldoor"
          this.meterKiosk2Array[0] = meterKiosk2Val;
    
    
          var meterTestBox1Val = new SealInfo();
          meterTestBox1Val.ta0seallocation = "METER_TESTBOX_KIOSK1_";
          meterTestBox1Val.ta0sealnum = null;
          meterTestBox1Val.ta0newsealnum = null;
          meterTestBox1Val.ta0sealcondition = null;
          meterTestBox1Val.ta0seallocation_description = "Meter Test Box 1"
          this.meterTestBoxArray1[0] = meterTestBox1Val;
    
          var meterTestBox2Val = new SealInfo();
          meterTestBox2Val.ta0seallocation = "METER_TESTBOX_KIOSK2_";
          meterTestBox2Val.ta0sealnum = null;
          meterTestBox2Val.ta0newsealnum = null;
          meterTestBox2Val.ta0sealcondition = null;
          meterTestBox2Val.ta0seallocation_description = "Meter Test Box 2"
          this.meterTestBoxArray2[0] = meterTestBox2Val;
    
          var ctChamberVal1 = new SealInfo();
          ctChamberVal1.ta0seallocation = "CT_CHAMBER_F1";
          ctChamberVal1.ta0sealnum = null;
          ctChamberVal1.ta0newsealnum = null;
          ctChamberVal1.ta0sealcondition = null;
          ctChamberVal1.ta0seallocation_description = "CT Chamber F1"
          this.ctChamberArrayF1[0] = ctChamberVal1;
    
          var ctChamberVal2 = new SealInfo();
          ctChamberVal2.ta0seallocation = "CT_CHAMBER_F2";
          ctChamberVal2.ta0sealnum = null;
          ctChamberVal2.ta0newsealnum = null;
          ctChamberVal2.ta0sealcondition = null;
          ctChamberVal2.ta0seallocation_description = "CT Chamber F2"
          this.ctChamberArrayF2[0] = ctChamberVal2;
    
          var ctChamberVal3 = new SealInfo();
          ctChamberVal3.ta0seallocation = "CT_CHAMBER_F3";
          ctChamberVal3.ta0sealnum = null;
          ctChamberVal3.ta0newsealnum = null;
          ctChamberVal3.ta0sealcondition = null;
          ctChamberVal3.ta0seallocation_description = "CT Chamber F3"
          this.ctChamberArrayF3[0] = ctChamberVal3;
    
          var ptChamberVal1 = new SealInfo();
          ptChamberVal1.ta0seallocation = "PT_CHAMBER_F1";
          ptChamberVal1.ta0sealnum = null;
          ptChamberVal1.ta0newsealnum = null;
          ptChamberVal1.ta0sealcondition = null;
          ptChamberVal1.ta0seallocation_description = "PT Chamber F1"
          this.ptChamberArrayF1[0] = ptChamberVal1;
    
          var ptChamberVal2 = new SealInfo();
          ptChamberVal2.ta0seallocation = "PT_CHAMBER_F2";
          ptChamberVal2.ta0sealnum = null;
          ptChamberVal2.ta0newsealnum = null;
          ptChamberVal2.ta0sealcondition = null;
          ptChamberVal2.ta0seallocation_description = "PT Chamber F2"
          this.ptChamberArrayF2[0] = ptChamberVal2;
    
          var ptChamberVal3 = new SealInfo();
          ptChamberVal3.ta0seallocation = "PT_CHAMBER_F3";
          ptChamberVal3.ta0sealnum = null;
          ptChamberVal3.ta0newsealnum = null;
          ptChamberVal3.ta0sealcondition = null;
          ptChamberVal3.ta0seallocation_description = "PT Chamber F3"
          this.ptChamberArrayF3[0] = ptChamberVal3;
    
          var terminalBoxVal1 = new SealInfo();
          terminalBoxVal1.ta0seallocation = "TERMINATION_BOX_F1_";
          terminalBoxVal1.ta0sealnum = null;
          terminalBoxVal1.ta0newsealnum = null;
          terminalBoxVal1.ta0sealcondition = null;
          terminalBoxVal1.ta0seallocation_description = "Termination Box F1"
          this.terminalBoxArrayF1[0] = terminalBoxVal1;
    
          var terminalBoxVal2 = new SealInfo();
          terminalBoxVal2.ta0seallocation = "TERMINATION_BOX_F2_";
          terminalBoxVal2.ta0sealnum = null;
          terminalBoxVal2.ta0newsealnum = null;
          terminalBoxVal2.ta0sealcondition = null;
          terminalBoxVal2.ta0seallocation_description = "Termination Box F2"
          this.terminalBoxArrayF2[0] = terminalBoxVal2;
    
          var terminalBoxVal3 = new SealInfo();
          terminalBoxVal3.ta0seallocation = "TERMINATION_BOX_F3_";
          terminalBoxVal3.ta0sealnum = null;
          terminalBoxVal3.ta0newsealnum = null;
          terminalBoxVal3.ta0sealcondition = null;
          terminalBoxVal3.ta0seallocation_description = "Termination Box F3"
          this.terminalBoxArrayF3[0] = terminalBoxVal3;
    
          var marshallingBoxVal1 = new SealInfo();
          marshallingBoxVal1.ta0seallocation = "MARSHALLING_BOX_F1";
          marshallingBoxVal1.ta0sealnum = null;
          marshallingBoxVal1.ta0newsealnum = null;
          marshallingBoxVal1.ta0sealcondition = null;
          marshallingBoxVal1.ta0seallocation_description = "Marshalling Box F1"
          this.marshallingBoxArrayF1[0] = marshallingBoxVal1;
    
          var marshallingBoxVal2 = new SealInfo();
          marshallingBoxVal2.ta0seallocation = "MARSHALLING_BOX_F2";
          marshallingBoxVal2.ta0sealnum = null;
          marshallingBoxVal2.ta0newsealnum = null;
          marshallingBoxVal2.ta0sealcondition = null;
          marshallingBoxVal2.ta0seallocation_description = "Marshalling Box F2"
          this.marshallingBoxArrayF2[0] = marshallingBoxVal2;
    
          var marshallingBoxVal3 = new SealInfo();
          marshallingBoxVal3.ta0seallocation = "MARSHALLING_BOX_F3";
          marshallingBoxVal3.ta0sealnum = null;
          marshallingBoxVal3.ta0newsealnum = null;
          marshallingBoxVal3.ta0sealcondition = null;
          marshallingBoxVal3.ta0seallocation_description = "Marshalling Box F3"
          this.marshallingBoxArrayF3[0] = marshallingBoxVal3;
    
          var ptSecondaryFuseVal1 = new SealInfo();
          ptSecondaryFuseVal1.ta0seallocation = "PT_SEC_FUSE_F1";
          ptSecondaryFuseVal1.ta0sealnum = null;
          ptSecondaryFuseVal1.ta0newsealnum = null;
          ptSecondaryFuseVal1.ta0sealcondition = null;
          ptSecondaryFuseVal1.ta0seallocation_description = "PT Sec Fuse F1"
          this.ptSecondaryFuseArrayF1[0] = ptSecondaryFuseVal1;
    
          var ptSecondaryFuseVal2 = new SealInfo();
          ptSecondaryFuseVal2.ta0seallocation = "PT_SEC_FUSE_F2";
          ptSecondaryFuseVal2.ta0sealnum = null;
          ptSecondaryFuseVal2.ta0newsealnum = null;
          ptSecondaryFuseVal2.ta0sealcondition = null;
          ptSecondaryFuseVal2.ta0seallocation_description = "PT Sec Fuse F2"
          this.ptSecondaryFuseArrayF2[0] = ptSecondaryFuseVal2;
    
          var ptSecondaryFuseVal3 = new SealInfo();
          ptSecondaryFuseVal3.ta0seallocation = "PT_SEC_FUSE_F3";
          ptSecondaryFuseVal3.ta0sealnum = null;
          ptSecondaryFuseVal3.ta0newsealnum = null;
          ptSecondaryFuseVal3.ta0sealcondition = null;
          ptSecondaryFuseVal3.ta0seallocation_description = "PT Sec Fuse F3"
          this.ptSecondaryFuseArrayF3[0] = ptSecondaryFuseVal3;
          */
        this.loadData();
    };
    // segmentChanged() {
    //   if (this.refSegment == 'before') {
    //     this.loadData()
    //   } else {
    //     // this.resetSealSection('mainPage')
    //   }
    // }
    CrimplessSealPage.prototype.loadData = function () {
        var _this = this;
        debugger;
        if (this.from == 'my_Assigned_page') {
            this.mainPage = true;
        }
        else {
            this.mainPage = false;
        }
        this.itemOri = this.params.data.paramObj;
        //this.feederDetails = JSON.parse(this.params.data.feederDetails)
        //let res = JSON.parse(this.feederDetails.respObject)
        //console.log('res==>', res);
        this.sealDetail = this.itemOri.json.ta0sealdetail;
        console.log("this.sealDetail : ", this.sealDetail);
        console.log("this.sealDetail size: ", this.sealDetail.length);
        // this.sealDetail = res.workOrder[0].ta0feeder[0].multiassetlocci[0].ta0sealdetail
        if (typeof (this.sealDetail) != 'undefined' && this.sealDetail !== "" && this.sealDetail !== null) {
            var seal_length = Number(this.sealDetail.length);
            for (var i = 0; i < seal_length; i++) {
                var ta0sealdetail = this.sealDetail[i];
                var ta0seallocation = ta0sealdetail.ta0seallocation;
                var ta0installind = this.sealDetail[i].ta0installind;
                this.sealDetail[i].ta0installind = ta0installind === 'true';
            }
            this.meterCoverArray.sort(this.dynamicSort("ta0seallocation"));
            this.ttbF1Array.sort(this.dynamicSort("ta0seallocation"));
            this.ttbF2Array.sort(this.dynamicSort("ta0seallocation"));
            this.ttbF3Array.sort(this.dynamicSort("ta0seallocation"));
            this.sfuseF1Array.sort(this.dynamicSort("ta0seallocation"));
            this.sfuseF2Array.sort(this.dynamicSort("ta0seallocation"));
            this.sfuseF2Array.sort(this.dynamicSort("ta0seallocation"));
            this.meterKiosk1Array.sort(this.dynamicSort("ta0seallocation"));
            this.meterKiosk2Array.sort(this.dynamicSort("ta0seallocation"));
            this.meterTestBoxArray1.sort(this.dynamicSort("ta0seallocation"));
            this.meterTestBoxArray2.sort(this.dynamicSort("ta0seallocation"));
            this.ctChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
            this.ctChamberArrayF2.sort(this.dynamicSort("ta0seallocation"));
            this.ctChamberArrayF3.sort(this.dynamicSort("ta0seallocation"));
            this.ptChamberArrayF1.sort(this.dynamicSort("ta0seallocation"));
            this.ptChamberArrayF2.sort(this.dynamicSort("ta0seallocation"));
            this.ptChamberArrayF3.sort(this.dynamicSort("ta0seallocation"));
            this.terminalBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));
            this.terminalBoxArrayF2.sort(this.dynamicSort("ta0seallocation"));
            this.terminalBoxArrayF3.sort(this.dynamicSort("ta0seallocation"));
            this.marshallingBoxArrayF1.sort(this.dynamicSort("ta0seallocation"));
            this.marshallingBoxArrayF2.sort(this.dynamicSort("ta0seallocation"));
            this.marshallingBoxArrayF3.sort(this.dynamicSort("ta0seallocation"));
            this.ptSecondaryFuseArrayF1.sort(this.dynamicSort("ta0seallocation"));
            this.ptSecondaryFuseArrayF2.sort(this.dynamicSort("ta0seallocation"));
            this.ptSecondaryFuseArrayF3.sort(this.dynamicSort("ta0seallocation"));
        }
        // sealDetail = sealDetail.filter(item => {
        //   item
        // })
        this.feederDetailsRes = this.sealDetail;
        console.log('this.feeder===>', this.feederDetailsRes);
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
        this.feederDetailsRes.forEach(function (item) { return item.ta0sealnum ? item.ta0sealnum : null; });
        this.feederDetailsRes.forEach(function (item) {
            if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F1_1)) {
                //item.ta0seallocation = "TEST_BLOCK_F1_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Test Block F1-1";
                _this.ttbF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F1_2)) {
                //item.ta0seallocation = "TEST_BLOCK_F1_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Test Block F1-2";
                _this.ttbF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F2_1)) {
                //item.ta0seallocation = "TEST_BLOCK_F2_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Test Block F2-1";
                _this.ttbF2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F2_2)) {
                //item.ta0seallocation = "TEST_BLOCK_F2_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Test Block F2-2";
                _this.ttbF2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F3_1)) {
                //item.ta0seallocation = "TEST_BLOCK_F3_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Test Block F3-1";
                _this.ttbF3Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TEST_BLOCK_F3_2)) {
                //item.ta0seallocation = "TEST_BLOCK_F3_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Test Block F3-2";
                _this.ttbF3Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F1)) {
                //item.ta0stickerlocation = "METER_FUSE_F1_";
                //item.ta0stickernum = null;
                //item.ta0newstickernum = null;
                //item.ta0stickercondition = null;
                //item.ta0seallocation_description = "Meter Fuse F1";
                _this.sfuseF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F2)) {
                //item.ta0stickerlocation = "METER_FUSE_F2_";
                //item.ta0stickernum = null;
                //item.ta0newstickernum = null;
                //item.ta0stickercondition = null;
                //item.ta0seallocation_description = "Meter Fuse F2";
                _this.sfuseF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_FUSE_F3)) {
                //item.ta0stickerlocation = "METER_FUSE_F3_";
                //item.ta0stickernum = null;
                //item.ta0newstickernum = null;
                //item.ta0stickercondition = null;
                //item.ta0seallocation_description = "Meter Fuse F3";
                _this.sfuseF1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK1_PANELDOOR_1)) {
                //item.ta0seallocation = "PANELDOOR_KIOSK1_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Kiosk1 Paneldoor 1";
                _this.meterKiosk1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK1_PANELDOOR_2)) {
                //item.ta0seallocation = "PANELDOOR_KIOSK1_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Kiosk1 Paneldoor 2";
                _this.meterKiosk1Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK2_PANELDOOR_1)) {
                //item.ta0seallocation = "PANELDOOR_KIOSK2_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Kiosk2 Paneldoor 1";
                _this.meterKiosk2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].KIOSK2_PANELDOOR_2)) {
                //item.ta0seallocation = "PANELDOOR_KIOSK2_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Kiosk2 Paneldoor 2";
                _this.meterKiosk2Array.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK1_1)) {
                //item.ta0seallocation = "METER_TESTBOX_KIOSK1_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Meter Test Box 1-1";
                _this.meterTestBoxArray1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK1_2)) {
                //item.ta0seallocation = "METER_TESTBOX_KIOSK1_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Meter Test Box 1-2";
                _this.meterTestBoxArray1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK2_1)) {
                //item.ta0seallocation = "METER_TESTBOX_KIOSK2_1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Meter Test Box 2-1";
                _this.meterTestBoxArray2.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].METER_TESTBOX_KIOSK2_2)) {
                //item.ta0seallocation = "METER_TESTBOX_KIOSK2_2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Meter Test Box 2-2";
                _this.meterTestBoxArray2.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F1)) {
                //item.ta0seallocation = "CT_CHAMBER_F1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "CT Chamber F1";
                _this.ctChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F2)) {
                //item.ta0seallocation = "CT_CHAMBER_F2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "CT Chamber F2";
                _this.ctChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].CT_CHAMBER_F3)) {
                //item.ta0seallocation = "CT_CHAMBER_F3";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "CT Chamber F3";
                _this.ctChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F1)) {
                //item.ta0seallocation = "PT_CHAMBER_F1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "PT Chamber F1";
                _this.ptChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F2)) {
                //item.ta0seallocation = "PT_CHAMBER_F2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "PT Chamber F2";
                _this.ptChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_CHAMBER_F3)) {
                //item.ta0seallocation = "PT_CHAMBER_F3";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "PT Chamber F3";
                _this.ptChamberArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F1)) {
                //item.ta0seallocation = "TERMINATION_BOX_F1_";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Termination Box F1";
                _this.terminalBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F2)) {
                //item.ta0seallocation = "TERMINATION_BOX_F2_";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Termination Box F2";
                _this.terminalBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].TERMINATION_BOX_F3)) {
                //item.ta0seallocation = "TERMINATION_BOX_F3_";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Termination Box F3";
                _this.terminalBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F1)) {
                //item.ta0seallocation = "MARSHALLING_BOX_F1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Marshalling Box F1";
                _this.marshallingBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F2)) {
                //item.ta0seallocation = "MARSHALLING_BOX_F2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Marshalling Box F2";
                _this.marshallingBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].MARSHALLING_BOX_F3)) {
                //item.ta0seallocation = "MARSHALLING_BOX_F3";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "Marshalling Box F3";
                _this.marshallingBoxArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F1)) {
                //item.ta0seallocation = "PT_SEC_FUSE_F1";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "PT Sec Fuse F1";
                _this.ptSecondaryFuseArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F2)) {
                //item.ta0seallocation = "PT_SEC_FUSE_F2";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "PT Sec Fuse F2";
                _this.ptSecondaryFuseArrayF1.push(item);
            }
            else if (item.ta0seallocation.startsWith(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_FunctionClass__["a" /* FunctionClass */].PT_SEC_FUSE_F3)) {
                //item.ta0seallocation = "PT_SEC_FUSE_F3";
                //item.ta0sealnum = null;
                //item.ta0seallocation_description = "PT Sec Fuse F3";
                _this.ptSecondaryFuseArrayF1.push(item);
            }
        });
        /*
        if (typeof (this.itemOri.json.ta0feeder) != 'undefined' && this.itemOri.json.ta0feeder !== null && this.itemOri.json.ta0feeder !== '') {
          //this.feederSetArray = [];
          // console.log("BEFORE: " + JSON.stringify(this.itemOri.json.ta0feeder));
          this.itemOri.json.ta0feeder.sort(this.gf.dynamicSort("description"));
          // console.log("AFTER: " + JSON.stringify(this.itemOri.json.ta0feeder));
          debugger;
    
          // Reset List Device
          this.itemOri.json.listDevice = [];
          // Reset Controlling Device to empty.
          this.itemOri.json.loc_controllingDeviceList = [];
    
          this.deviceDetails = {};
          console.log("constructor >>> feeder size : " + this.itemOri.json.ta0feeder.length);
          for (let feederArr of this.itemOri.json.ta0feeder) {
            console.log("trigger this.loadFeederDesign");
            this.loadFeederDesign(feederArr);
          }
        } else {
          // Reset List Device
          this.itemOri.json.listDevice = [];
          // Reset Controlling Device to empty.
          this.itemOri.json.loc_controllingDeviceList = [];
        }
        */
    };
    CrimplessSealPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrimplessSealPage');
    };
    CrimplessSealPage.prototype.dynamicSort = function (property) {
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
    CrimplessSealPage.prototype.loadlookup = function () {
        this.getAlnDomainData("sealcondition");
        this.getAlnDomainData("removalreason");
    };
    CrimplessSealPage.prototype.deletePtChamber = function (mIndex, from) {
        if (from == 'f1') {
            if (mIndex != 0) {
                this.ptChamberArrayF1.pop();
                if (this.ptChamberArrayF1.length < 4) {
                    this.showAddPtChamberf1 = true;
                }
            }
        }
        else if (from == 'f2') {
            if (mIndex != 0) {
                this.ptChamberArrayF2.pop();
                if (this.ptChamberArrayF2.length < 4) {
                    this.showAddPtChamberf2 = true;
                }
            }
        }
        else {
            if (mIndex != 0) {
                this.ptChamberArrayF3.pop();
                if (this.ptChamberArrayF3.length < 4) {
                    this.showAddPtChamberf3 = true;
                }
            }
        }
    };
    CrimplessSealPage.prototype.deleteCtChamber = function (mIndex, from) {
        if (from == 'f1') {
            if (mIndex != 0) {
                this.ctChamberArrayF1.pop();
                if (this.ctChamberArrayF1.length < 4) {
                    this.showAddCtChamber1 = true;
                }
            }
        }
        else if (from == 'f2') {
            if (mIndex != 0) {
                this.ctChamberArrayF2.pop();
                if (this.ctChamberArrayF2.length < 4) {
                    this.showAddCtChamber2 = true;
                }
            }
        }
        else {
            if (mIndex != 0) {
                this.ctChamberArrayF3.pop();
                if (this.ctChamberArrayF3.length < 4) {
                    this.showAddCtChamber3 = true;
                }
            }
        }
    };
    CrimplessSealPage.prototype.addMeterTestBox = function (from) {
        if (from == '1') {
            if (this.meterTestBoxArray1.length <= 2) {
                var meterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                meterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_1_';
                this.meterTestBoxArray1.push(meterTestBoxVal);
                if (this.meterTestBoxArray1.length == 2) {
                    this.showAddMeterTestBox1 = false;
                }
            }
        }
        else {
            if (this.meterTestBoxArray2.length <= 2) {
                var meterTestBoxVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                meterTestBoxVal.ta0seallocation = 'METER_TEST_BOX_2_';
                this.meterTestBoxArray2.push(meterTestBoxVal);
                if (this.meterTestBoxArray2.length == 2) {
                    this.showAddMeterTestBox2 = false;
                }
            }
        }
    };
    CrimplessSealPage.prototype.deleteMeterTestBox = function (mIndex, from) {
        if (from == '1') {
            if (mIndex != 0) {
                this.meterTestBoxArray1.pop();
                if (this.meterTestBoxArray1.length < 3) {
                    this.showAddMeterTestBox1 = true;
                }
            }
        }
        else {
            if (mIndex != 0) {
                this.meterTestBoxArray2.pop();
                if (this.meterTestBoxArray2.length < 3) {
                    this.showAddMeterTestBox2 = true;
                }
            }
        }
    };
    CrimplessSealPage.prototype.addMeterKiosk = function (from) {
        if (from == '1') {
            if (this.meterKiosk1Array.length <= 2) {
                var meterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                meterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
                this.meterKiosk1Array.push(meterKioskVal);
                if (this.meterKiosk1Array.length == 2) {
                    this.showAddMeterKiosk1 = false;
                }
            }
        }
        else {
            if (this.meterKiosk2Array.length <= 2) {
                var meterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                meterKioskVal.ta0seallocation = 'KIOSK_PANELDOOR_';
                this.meterKiosk2Array.push(meterKioskVal);
                if (this.meterKiosk2Array.length == 2) {
                    this.showAddMeterKiosk2 = false;
                }
            }
        }
    };
    CrimplessSealPage.prototype.deleteMeterKiosk = function (mIndex, from) {
        if (from == '1') {
            if (mIndex != 0) {
                this.meterKiosk1Array.pop();
                if (this.meterKiosk1Array.length < 4) {
                    this.showAddMeterKiosk1 = true;
                }
            }
        }
        else {
            if (mIndex != 0) {
                this.meterKiosk2Array.pop();
                if (this.meterKiosk2Array.length < 4) {
                    this.showAddMeterKiosk2 = true;
                }
            }
        }
    };
    CrimplessSealPage.prototype.getAlnDomainData = function (inputType) {
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
    CrimplessSealPage.prototype.addSfuseF1 = function () {
        if (this.sfuseF1Array.length <= 3) {
            var fuseVal = new __WEBPACK_IMPORTED_MODULE_9__pojo_StickerInfo__["a" /* StickerInfo */]();
            fuseVal.ta0stickerlocation = 'METER_FUSE_';
            this.sfuseF1Array.push(fuseVal);
            if (this.sfuseF1Array.length == 3) {
                this.showAddSfuseF1 = false;
            }
        }
    };
    CrimplessSealPage.prototype.deleteSfuse = function (mIndex, from) {
        if (from == 'f1') {
            if (mIndex != 0) {
                this.sfuseF1Array.pop();
                if (this.sfuseF1Array.length < 4) {
                    this.showAddSfuseF1 = true;
                }
            }
        }
        else if (from == 'f2') {
            if (mIndex != 0) {
                this.sfuseF2Array.pop();
                if (this.sfuseF2Array.length < 4) {
                    this.showAddSfuseF2 = true;
                }
            }
        }
        else {
            if (mIndex != 0) {
                this.sfuseF3Array.pop();
                if (this.sfuseF3Array.length < 4) {
                    this.showAddSfuseF3 = true;
                }
            }
        }
    };
    //Add Test Block
    CrimplessSealPage.prototype.addTtb = function (from) {
        if (from == 'f1') {
            if (this.ttbF1Array.length <= 1) {
                var ttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                ttbVal.ta0seallocation = 'TEST_BLOCK_F1_';
                this.ttbF1NewArray.push(ttbVal);
                if (this.ttbF1Array.length == 2) {
                    this.showAddTtbF1 = false;
                }
            }
        }
        else if (from == 'f2') {
            if (this.ttbF2Array.length <= 1) {
                var ttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                ttbVal.ta0seallocation = 'TEST_BLOCK_';
                this.ttbF2Array.push(ttbVal);
                if (this.ttbF2Array.length == 2) {
                    this.showAddTtbF2 = false;
                }
            }
        }
        else {
            if (this.ttbF3Array.length <= 1) {
                var ttbVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                ttbVal.ta0seallocation = 'TEST_BLOCK_';
                this.ttbF3Array.push(ttbVal);
                if (this.ttbF3Array.length == 2) {
                    this.showAddTtbF3 = false;
                }
            }
        }
    };
    CrimplessSealPage.prototype.barcodeScan = function (deviceDetailsArray, index, indicator, type) {
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
                    if (deviceDetailsArray[index].ta0newsealnum === barcodeData.text.trim()) {
                        _this.gf.displayToast("Entered value is matches with barcode.");
                    }
                    else {
                        if (deviceDetailsArray[index].ta0newsealnum !== '' && deviceDetailsArray[index].ta0newsealnum !== null && typeof deviceDetailsArray[index].ta0newsealnum !== 'undefined') {
                            _this.gf.displayToast("Entered value does not matches with barcode.");
                        }
                        else {
                            deviceDetailsArray[index].ta0newsealnum = barcodeData.text.trim();
                        }
                    }
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
    CrimplessSealPage.prototype.deleteTtb = function (mIndex, from) {
        if (from == 'f1') {
            if (mIndex != 0) {
                this.ttbF1Array.pop();
                if (this.ttbF1Array.length < 4) {
                    this.showAddTtbF1 = true;
                }
            }
        }
        else if (from == 'f2') {
            if (mIndex != 0) {
                this.ttbF2Array.pop();
                if (this.ttbF2Array.length < 4) {
                    this.showAddTtbF2 = true;
                }
            }
        }
        else {
            if (mIndex != 0) {
                this.ttbF3Array.pop();
                if (this.ttbF3Array.length < 4) {
                    this.showAddTtbF3 = true;
                }
            }
        }
    };
    CrimplessSealPage.prototype.checkingFieldDisabledF1 = function (attr, category) {
        if (category === "seal") {
            if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else {
                return false;
            }
        }
        else if (category === "sticker") {
        }
    };
    CrimplessSealPage.prototype.checkingFieldDisabledF2 = function (attr, category) {
        if (category === "seal") {
            if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else {
                return false;
            }
        }
        else if (category === "sticker") {
        }
    };
    CrimplessSealPage.prototype.checkingFieldDisabledF3 = function (attr, category) {
        if (category === "seal") {
            if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) !== "undefined" && attr.ta0removeind === true) {
                return false;
            }
            else if (typeof (attr.ta0sealnum) === "undefined" && attr.ta0removeind === false) {
                return false;
            }
            else {
                return false;
            }
        }
        else if (category === "sticker") {
        }
    };
    CrimplessSealPage.prototype.showSealNoSection = function (index) {
        index++;
        if (this.showSealNo === false) {
            this.showSealNo = true;
        }
        else if (index === 2) {
            this.showSealNo = false;
        }
    };
    CrimplessSealPage.prototype.addMeterCover = function () {
        if (this.meterCoverArray.length <= 2) {
            var meterCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
            meterCoverVal.ta0seallocation = 'METER_COVER_';
            this.meterCoverArray.push(meterCoverVal);
            if (this.meterCoverArray.length == 2) {
                this.showAddMeterCover = false;
            }
        }
    };
    CrimplessSealPage.prototype.deleteMeterCover = function (mIndex) {
        if (mIndex != 0) {
            this.meterCoverArray.pop();
            if (this.meterCoverArray.length < 2) {
                this.showAddMeterCover = true;
            }
        }
    };
    CrimplessSealPage.prototype.userInputLengthNum = function (eventData, nameText, indexArray, type) {
        switch (nameText) {
            case 'mtrCover':
                var Numb_REGEXPmtrCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueMtrCvr = eventData.target.value;
                var newVal2;
                var regExpmtrCvr = new RegExp(Numb_REGEXPmtrCover);
                if (!regExpmtrCvr.test(newValueMtrCvr)) {
                    newVal2 = newValueMtrCvr.substr(0, newValueMtrCvr.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterCoverArray[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterCoverArray[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            // case 'terminalCover':
            //   const Numb_REGEXPTerminal = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValue = eventData.target.value;
            //   var newVal2;
            //   let regExpTerminal = new RegExp(Numb_REGEXPTerminal);
            //   if (!regExpTerminal.test(newValue)) {
            //     newVal2 = newValue.substr(0, newValue.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   if (type === "before") {
            //     this.terminalCoverArray[indexArray].ta0sealnum = eventData.target.value;
            //   } else {
            //     this.terminalCoverArray[indexArray].ta0newsealnum = eventData.target.value;
            //   }
            //   break;
            // case 'fuse':
            //   const Numb_REGEXPFuse = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValueFuse = eventData.target.value;
            //   var newVal2;
            //   let regExpFuse = new RegExp(Numb_REGEXPFuse);
            //   if (!regExpFuse.test(newValueFuse)) {
            //     newVal2 = newValueFuse.substr(0, newValueFuse.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   if (type === "before") {
            //     this.fuseArray[indexArray].ta0sealnum = eventData.target.value;
            //   } else {
            //     this.fuseArray[indexArray].ta0newsealnum = eventData.target.value;
            //   }
            //   break;
            // case 'MDBtn':
            //   const RegExpMeterBtn = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValue2 = eventData.target.value;
            //   var newVal2;
            //   let regExp2 = new RegExp(RegExpMeterBtn);
            //   if (!regExp2.test(newValue2)) {
            //     newVal2 = newValue2.substr(0, newValue2.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   this.mdButtonArray[indexArray].ta0sealnum = eventData.target.value;
            //   break;
            // case 'Battery':
            //   const RegExpBattery = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValueBattery = eventData.target.value;
            //   var newVal2;
            //   let regExpBattery = new RegExp(RegExpBattery);
            //   if (!regExpBattery.test(newValueBattery)) {
            //     newVal2 = newValueBattery.substr(0, newValueBattery.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   if (type === "before") {
            //     this.meterBatteryArray[indexArray].ta0sealnum = eventData.target.value;
            //   } else {
            //     this.meterBatteryArray[indexArray].ta0newsealnum = eventData.target.value;
            //   }
            //   break;
            // case 'OptEye':
            //   const RegExpOptEye = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValueOptEye = eventData.target.value;
            //   var newVal2;
            //   let regExpOptEye = new RegExp(RegExpOptEye);
            //   if (!regExpOptEye.test(newValueOptEye)) {
            //     newVal2 = newValueOptEye.substr(0, newValueOptEye.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   if (type === "before") {
            //     this.opticalEyeArray[indexArray].ta0sealnum = eventData.target.value;
            //   } else {
            //     this.opticalEyeArray[indexArray].ta0newsealnum = eventData.target.value;
            //   }
            //   break;
            // case 'STerminalCover':
            //   const RegExpSTerminalCover = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValueSTerminalCover = eventData.target.value;
            //   var newVal2;
            //   let regExpSTerminalCover = new RegExp(RegExpSTerminalCover);
            //   if (!regExpSTerminalCover.test(newValueSTerminalCover)) {
            //     newVal2 = newValueSTerminalCover.substr(0, newValueSTerminalCover.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   if (type === "before") {
            //     this.sterminalCoverArray[indexArray].ta0stickernum = eventData.target.value;
            //   } else {
            //     this.sterminalCoverArray[indexArray].ta0newstickernum = eventData.target.value;
            //   }
            //   break;
            case 'SFuse1':
                var RegExpSFuse1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSFuse1 = eventData.target.value;
                var newVal2;
                var regExpSFuse1 = new RegExp(RegExpSFuse1);
                if (!regExpSFuse1.test(newValueSFuse1)) {
                    newVal2 = newValueSFuse1.substr(0, newValueSFuse1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sfuseF1Array[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sfuseF1Array[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'SFuse2':
                var RegExpSFuse2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSFuse2 = eventData.target.value;
                var newVal2;
                var regExpSFuse2 = new RegExp(RegExpSFuse2);
                if (!regExpSFuse2.test(newValueSFuse2)) {
                    newVal2 = newValueSFuse2.substr(0, newValueSFuse2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sfuseF2Array[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sfuseF2Array[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            case 'SFuse3':
                var RegExpSFuse3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSFuse3 = eventData.target.value;
                var newVal2;
                var regExpSFuse3 = new RegExp(RegExpSFuse3);
                if (!regExpSFuse3.test(newValueSFuse3)) {
                    newVal2 = newValueSFuse3.substr(0, newValueSFuse3.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.sfuseF3Array[indexArray].ta0stickernum = eventData.target.value;
                }
                else {
                    this.sfuseF3Array[indexArray].ta0newstickernum = eventData.target.value;
                }
                break;
            // case 'STTB':
            //   const RegExpSTTB = /^[-a-zA-Z0-9@$&_*/\\]*$/;
            //   let newValueSTTB = eventData.target.value;
            //   var newVal2;
            //   let regExpSTTB = new RegExp(RegExpSTTB);
            //   if (!regExpSTTB.test(newValueSTTB)) {
            //     newVal2 = newValueSTTB.substr(0, newValueSTTB.length - 1);
            //     eventData.target.value = newVal2;
            //   }
            //   else {
            //     eventData.target.value;
            //   }
            //   if (type === "before") {
            //     this.ttbArray[indexArray].ta0sealnum = eventData.target.value;
            //   } else {
            //     this.ttbArray[indexArray].ta0newsealnum = eventData.target.value;
            //   }
            //   break;
            case 'ptChamberf1':
                var RegExpptChamber1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptChamber1 = eventData.target.value;
                var newVal2;
                var regExpptChamber1 = new RegExp(RegExpptChamber1);
                if (!regExpptChamber1.test(newValueptChamber1)) {
                    newVal2 = newValueptChamber1.substr(0, newValueptChamber1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptChamberArrayF1[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptChamberArrayF1[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptChamberf2':
                var RegExpptChamber2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptChamber2 = eventData.target.value;
                var newVal2;
                var regExpptChamber2 = new RegExp(RegExpptChamber2);
                if (!regExpptChamber2.test(newValueptChamber2)) {
                    newVal2 = newValueptChamber2.substr(0, newValueptChamber2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptChamberArrayF2[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptChamberArrayF2[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptChamberf3':
                var RegExpptChamber3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptChamber3 = eventData.target.value;
                var newVal2;
                var regExpptChamber3 = new RegExp(RegExpptChamber3);
                if (!regExpptChamber3.test(newValueptChamber3)) {
                    newVal2 = newValueptChamber3.substr(0, newValueptChamber3.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptChamberArrayF3[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptChamberArrayF3[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ctChamberF1':
                var RegExpctChamber1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuectChamber1 = eventData.target.value;
                var newVal2;
                var regExpctChamber1 = new RegExp(RegExpctChamber1);
                if (!regExpctChamber1.test(newValuectChamber1)) {
                    newVal2 = newValuectChamber1.substr(0, newValuectChamber1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ctChamberArrayF1[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ctChamberArrayF1[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ctChamberF2':
                var RegExpctChamber2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuectChamber2 = eventData.target.value;
                var newVal2;
                var regExpctChamber2 = new RegExp(RegExpctChamber2);
                if (!regExpctChamber2.test(newValuectChamber2)) {
                    newVal2 = newValuectChamber2.substr(0, newValuectChamber2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ctChamberArrayF2[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ctChamberArrayF2[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ctChamberF3':
                var RegExpctChamber3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuectChamber3 = eventData.target.value;
                var newVal2;
                var regExpctChamber3 = new RegExp(RegExpctChamber3);
                if (!regExpctChamber3.test(newValuectChamber3)) {
                    newVal2 = newValuectChamber3.substr(0, newValuectChamber3.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ctChamberArrayF3[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ctChamberArrayF3[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptSecFuseF1':
                var RegExpptSecFuser1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptSecFuse1 = eventData.target.value;
                var newVal2;
                var regExpptSecFuse1 = new RegExp(RegExpptSecFuser1);
                if (!regExpptSecFuse1.test(newValueptSecFuse1)) {
                    newVal2 = newValueptSecFuse1.substr(0, newValueptSecFuse1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptSecondaryFuseArrayF1[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptSecondaryFuseArrayF1[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptSecFuse':
                var RegExpptSecFuser2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptSecFuse2 = eventData.target.value;
                var newVal2;
                var regExpptSecFuse2 = new RegExp(RegExpptSecFuser2);
                if (!regExpptSecFuse2.test(newValueptSecFuse2)) {
                    newVal2 = newValueptSecFuse2.substr(0, newValueptSecFuse2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptSecondaryFuseArrayF2[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptSecondaryFuseArrayF2[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'ptSecFuse':
                var RegExpptSecFuser3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueptSecFuse3 = eventData.target.value;
                var newVal2;
                var regExpptSecFuse3 = new RegExp(RegExpptSecFuser3);
                if (!regExpptSecFuse3.test(newValueptSecFuse3)) {
                    newVal2 = newValueptSecFuse3.substr(0, newValueptSecFuse3.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.ptSecondaryFuseArrayF3[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.ptSecondaryFuseArrayF3[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'mtrKiosk1':
                var RegExpmtrKiosk1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuemtrKiosk1 = eventData.target.value;
                var newVal1;
                var regExpmtrKiosk1 = new RegExp(RegExpmtrKiosk1);
                if (!regExpmtrKiosk1.test(newValuemtrKiosk1)) {
                    newVal1 = newValuemtrKiosk1.substr(0, newValuemtrKiosk1.length - 1);
                    eventData.target.value = newVal1;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterKiosk1Array[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterKiosk1Array[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'mtrKiosk2':
                var RegExpmtrKiosk2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuemtrKiosk2 = eventData.target.value;
                var newVal2;
                var regExpmtrKiosk2 = new RegExp(RegExpmtrKiosk2);
                if (!regExpmtrKiosk2.test(newValuemtrKiosk2)) {
                    newVal2 = newValuemtrKiosk2.substr(0, newValuemtrKiosk2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterKiosk2Array[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterKiosk2Array[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'mtrTestBox1':
                var RegExpmtrTestBox1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuemtrTestBox1 = eventData.target.value;
                var newVal2;
                var regExpmtrTestBox1 = new RegExp(RegExpmtrTestBox1);
                if (!regExpmtrTestBox1.test(newValuemtrTestBox1)) {
                    newVal2 = newValuemtrTestBox1.substr(0, newValuemtrTestBox1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterTestBoxArray1[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterTestBoxArray1[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'mtrTestBox2':
                var RegExpmtrTestBox2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValuemtrTestBox2 = eventData.target.value;
                var newVal2;
                var regExpmtrTestBox2 = new RegExp(RegExpmtrTestBox2);
                if (!regExpmtrTestBox2.test(newValuemtrTestBox2)) {
                    newVal2 = newValuemtrTestBox2.substr(0, newValuemtrTestBox2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.meterTestBoxArray2[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.meterTestBoxArray2[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'SmtrTerminalBoxF1':
                var RegExpSmtrTerminalBox1 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSmtrTerminalBox1 = eventData.target.value;
                var newVal2;
                var regExpSmtrTerminalBox1 = new RegExp(RegExpSmtrTerminalBox1);
                if (!regExpSmtrTerminalBox1.test(newValueSmtrTerminalBox1)) {
                    newVal2 = newValueSmtrTerminalBox1.substr(0, newValueSmtrTerminalBox1.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.terminalBoxArrayF1[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.terminalBoxArrayF1[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'SmtrTerminalBox':
                var RegExpSmtrTerminalBox2 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSmtrTerminalBox2 = eventData.target.value;
                var newVal2;
                var regExpSmtrTerminalBox2 = new RegExp(RegExpSmtrTerminalBox2);
                if (!regExpSmtrTerminalBox2.test(newValueSmtrTerminalBox2)) {
                    newVal2 = newValueSmtrTerminalBox2.substr(0, newValueSmtrTerminalBox2.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.terminalBoxArrayF2[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.terminalBoxArrayF2[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
            case 'SmtrTerminalBox':
                var RegExpSmtrTerminalBox3 = /^[-a-zA-Z0-9@$&_*/\\]*$/;
                var newValueSmtrTerminalBox3 = eventData.target.value;
                var newVal2;
                var regExpSmtrTerminalBox3 = new RegExp(RegExpSmtrTerminalBox3);
                if (!regExpSmtrTerminalBox3.test(newValueSmtrTerminalBox3)) {
                    newVal2 = newValueSmtrTerminalBox3.substr(0, newValueSmtrTerminalBox3.length - 1);
                    eventData.target.value = newVal2;
                }
                else {
                    eventData.target.value;
                }
                if (type === "before") {
                    this.terminalBoxArrayF3[indexArray].ta0sealnum = eventData.target.value;
                }
                else {
                    this.terminalBoxArrayF3[indexArray].ta0newsealnum = eventData.target.value;
                }
                break;
        }
    };
    CrimplessSealPage.prototype.resetSealSection = function (from) {
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
                            _this.meterCoverArray = [];
                            _this.ttbF1Array = [];
                            _this.ttbF2Array = [];
                            _this.ttbF3Array = [];
                            _this.sfuseF1Array = [];
                            _this.sfuseF2Array = [];
                            _this.sfuseF3Array = [];
                            _this.meterKiosk1Array = [];
                            _this.meterKiosk2Array = [];
                            _this.meterTestBoxArray1 = [];
                            _this.meterTestBoxArray2 = [];
                            _this.ctChamberArrayF1 = [];
                            _this.ctChamberArrayF2 = [];
                            _this.ctChamberArrayF3 = [];
                            _this.ptChamberArrayF1 = [];
                            _this.ptChamberArrayF2 = [];
                            _this.ptChamberArrayF3 = [];
                            _this.terminalBoxArrayF1 = [];
                            _this.terminalBoxArrayF2 = [];
                            _this.terminalBoxArrayF3 = [];
                            _this.marshallingBoxArrayF1 = [];
                            _this.marshallingBoxArrayF2 = [];
                            _this.marshallingBoxArrayF3 = [];
                            _this.ptSecondaryFuseArrayF1 = [];
                            _this.ptSecondaryFuseArrayF2 = [];
                            _this.ptSecondaryFuseArrayF3 = [];
                            var meterCoverVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            meterCoverVal.ta0seallocation = "METER_COVER_";
                            meterCoverVal.ta0sealnum = null;
                            meterCoverVal.ta0newsealnum = null;
                            meterCoverVal.ta0sealcondition = null;
                            _this.meterCoverArray[0] = meterCoverVal;
                            var ttbF1Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ttbF1Val.ta0seallocation = "TEST_BLOCK_F1_";
                            ttbF1Val.ta0sealnum = null;
                            ttbF1Val.ta0newsealnum = null;
                            ttbF1Val.ta0sealcondition = null;
                            _this.ttbF1Array[0] = ttbF1Val;
                            var ttbF2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ttbF2Val.ta0seallocation = "TEST_BLOCK_F2_";
                            ttbF2Val.ta0sealnum = null;
                            ttbF2Val.ta0newsealnum = null;
                            ttbF2Val.ta0sealcondition = null;
                            _this.ttbF2Array[0] = ttbF2Val;
                            var ttb3Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ttb3Val.ta0seallocation = "TEST_BLOCK_F3_";
                            ttb3Val.ta0sealnum = null;
                            ttb3Val.ta0newsealnum = null;
                            ttb3Val.ta0sealcondition = null;
                            _this.ttbF3Array[0] = ttb3Val;
                            var sfuseF1Val = new __WEBPACK_IMPORTED_MODULE_9__pojo_StickerInfo__["a" /* StickerInfo */]();
                            sfuseF1Val.ta0stickerlocation = "METER_FUSE_F1";
                            sfuseF1Val.ta0stickernum = null;
                            sfuseF1Val.ta0newstickernum = null;
                            sfuseF1Val.ta0stickercondition = null;
                            _this.sfuseF1Array[0] = sfuseF1Val;
                            var sfuseF2Val = new __WEBPACK_IMPORTED_MODULE_9__pojo_StickerInfo__["a" /* StickerInfo */]();
                            sfuseF2Val.ta0stickerlocation = "METER_FUSE_F2";
                            sfuseF2Val.ta0stickernum = null;
                            sfuseF2Val.ta0newstickernum = null;
                            sfuseF2Val.ta0stickercondition = null;
                            _this.sfuseF2Array[0] = sfuseF2Val;
                            var sfuseF3Val = new __WEBPACK_IMPORTED_MODULE_9__pojo_StickerInfo__["a" /* StickerInfo */]();
                            sfuseF3Val.ta0stickerlocation = "METER_FUSE_F3";
                            sfuseF3Val.ta0stickernum = null;
                            sfuseF3Val.ta0newstickernum = null;
                            sfuseF3Val.ta0stickercondition = null;
                            _this.sfuseF3Array[0] = sfuseF3Val;
                            var meterKioskVal = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            meterKioskVal.ta0seallocation = "PANELDOOR_KIOSK1_";
                            meterKioskVal.ta0sealnum = null;
                            meterKioskVal.ta0newsealnum = null;
                            meterKioskVal.ta0sealcondition = null;
                            _this.meterKiosk1Array[0] = meterKioskVal;
                            var meterKiosk2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            meterKiosk2Val.ta0seallocation = "PANELDOOR_KIOSK2_";
                            meterKiosk2Val.ta0sealnum = null;
                            meterKiosk2Val.ta0newsealnum = null;
                            meterKiosk2Val.ta0sealcondition = null;
                            _this.meterKiosk2Array[0] = meterKiosk2Val;
                            var meterTestBox1Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            meterTestBox1Val.ta0seallocation = "METER_TESTBOX_KIOSK1_";
                            meterTestBox1Val.ta0sealnum = null;
                            meterTestBox1Val.ta0newsealnum = null;
                            meterTestBox1Val.ta0sealcondition = null;
                            _this.meterTestBoxArray1[0] = meterTestBox1Val;
                            var meterTestBox2Val = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            meterTestBox2Val.ta0seallocation = "METER_TESTBOX_KIOSK2_";
                            meterTestBox2Val.ta0sealnum = null;
                            meterTestBox2Val.ta0newsealnum = null;
                            meterTestBox2Val.ta0sealcondition = null;
                            _this.meterTestBoxArray2[0] = meterTestBox2Val;
                            var ctChamberVal1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ctChamberVal1.ta0seallocation = "CT_CHAMBER_F1";
                            ctChamberVal1.ta0sealnum = null;
                            ctChamberVal1.ta0newsealnum = null;
                            ctChamberVal1.ta0sealcondition = null;
                            _this.ctChamberArrayF1[0] = ctChamberVal1;
                            var ctChamberVal2 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ctChamberVal2.ta0seallocation = "CT_CHAMBER_F2";
                            ctChamberVal2.ta0sealnum = null;
                            ctChamberVal2.ta0newsealnum = null;
                            ctChamberVal2.ta0sealcondition = null;
                            _this.ctChamberArrayF2[0] = ctChamberVal2;
                            var ctChamberVal3 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ctChamberVal3.ta0seallocation = "CT_CHAMBER_F3";
                            ctChamberVal3.ta0sealnum = null;
                            ctChamberVal3.ta0newsealnum = null;
                            ctChamberVal3.ta0sealcondition = null;
                            _this.ctChamberArrayF3[0] = ctChamberVal3;
                            var ptChamberVal1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ptChamberVal1.ta0seallocation = "PT_CHAMBER_F1";
                            ptChamberVal1.ta0sealnum = null;
                            ptChamberVal1.ta0newsealnum = null;
                            ptChamberVal1.ta0sealcondition = null;
                            _this.ptChamberArrayF1[0] = ptChamberVal1;
                            var ptChamberVal2 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ptChamberVal2.ta0seallocation = "PT_CHAMBER_F2";
                            ptChamberVal2.ta0sealnum = null;
                            ptChamberVal2.ta0newsealnum = null;
                            ptChamberVal2.ta0sealcondition = null;
                            _this.ptChamberArrayF2[0] = ptChamberVal2;
                            var ptChamberVal3 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ptChamberVal3.ta0seallocation = "PT_CHAMBER_F3";
                            ptChamberVal3.ta0sealnum = null;
                            ptChamberVal3.ta0newsealnum = null;
                            ptChamberVal3.ta0sealcondition = null;
                            _this.ptChamberArrayF3[0] = ptChamberVal3;
                            var terminalBoxVal1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            terminalBoxVal1.ta0seallocation = "TERMINATION_BOX_F1";
                            terminalBoxVal1.ta0sealnum = null;
                            terminalBoxVal1.ta0newsealnum = null;
                            terminalBoxVal1.ta0sealcondition = null;
                            _this.terminalBoxArrayF1[0] = terminalBoxVal1;
                            var terminalBoxVal2 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            terminalBoxVal2.ta0seallocation = "TERMINATION_BOX_F2";
                            terminalBoxVal2.ta0sealnum = null;
                            terminalBoxVal2.ta0newsealnum = null;
                            terminalBoxVal2.ta0sealcondition = null;
                            _this.terminalBoxArrayF2[0] = terminalBoxVal2;
                            var terminalBoxVal3 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            terminalBoxVal3.ta0seallocation = "TERMINATION_BOX_F3";
                            terminalBoxVal3.ta0sealnum = null;
                            terminalBoxVal3.ta0newsealnum = null;
                            terminalBoxVal3.ta0sealcondition = null;
                            _this.terminalBoxArrayF3[0] = terminalBoxVal3;
                            var marshallingBoxVal1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            marshallingBoxVal1.ta0seallocation = "MARSHALLING_BOX_F1";
                            marshallingBoxVal1.ta0sealnum = null;
                            marshallingBoxVal1.ta0newsealnum = null;
                            marshallingBoxVal1.ta0sealcondition = null;
                            _this.marshallingBoxArrayF1[0] = marshallingBoxVal1;
                            var marshallingBoxVal2 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            marshallingBoxVal2.ta0seallocation = "MARSHALLING_BOX_F2";
                            marshallingBoxVal2.ta0sealnum = null;
                            marshallingBoxVal2.ta0newsealnum = null;
                            marshallingBoxVal2.ta0sealcondition = null;
                            _this.marshallingBoxArrayF2[0] = marshallingBoxVal2;
                            var marshallingBoxVal3 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            marshallingBoxVal3.ta0seallocation = "MARSHALLING_BOX_F3";
                            marshallingBoxVal3.ta0sealnum = null;
                            marshallingBoxVal3.ta0newsealnum = null;
                            marshallingBoxVal3.ta0sealcondition = null;
                            _this.marshallingBoxArrayF3[0] = marshallingBoxVal3;
                            var ptSecondaryFuseVal1 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ptSecondaryFuseVal1.ta0seallocation = "PT_SEC_FUSE_F1";
                            ptSecondaryFuseVal1.ta0sealnum = null;
                            ptSecondaryFuseVal1.ta0newsealnum = null;
                            ptSecondaryFuseVal1.ta0sealcondition = null;
                            _this.ptSecondaryFuseArrayF1[0] = ptSecondaryFuseVal1;
                            var ptSecondaryFuseVal2 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ptSecondaryFuseVal2.ta0seallocation = "PT_SEC_FUSE_F2";
                            ptSecondaryFuseVal2.ta0sealnum = null;
                            ptSecondaryFuseVal2.ta0newsealnum = null;
                            ptSecondaryFuseVal2.ta0sealcondition = null;
                            _this.ptSecondaryFuseArrayF2[0] = ptSecondaryFuseVal2;
                            var ptSecondaryFuseVal3 = new __WEBPACK_IMPORTED_MODULE_3__pojo_SealInfo__["a" /* SealInfo */]();
                            ptSecondaryFuseVal3.ta0seallocation = "PT_SEC_FUSE_F3";
                            ptSecondaryFuseVal3.ta0sealnum = null;
                            ptSecondaryFuseVal3.ta0newsealnum = null;
                            ptSecondaryFuseVal3.ta0sealcondition = null;
                            _this.ptSecondaryFuseArrayF3[0] = ptSecondaryFuseVal3;
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    CrimplessSealPage.prototype.saveDeviceDetailsBefore = function () {
        var _this = this;
        debugger;
        console.log("Access saveDeviceDetailsBefore");
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
        console.log("this.itemOri : ", this.itemOri);
        //this.sealDetail = this.feederDetailsRes
        //this.feederDetailsRes.forEach(res => {
        //  res.assetnum = this.itemOri.json.ta0feeder[0].multiassetlocci[0].assetnum;
        //  res.orgid = this.itemOri.json.ta0feeder[0].orgid;
        // res.siteid = this.itemOri.json.siteid;
        //})
        //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail = this.feederDetailsRes
        // var assetnum = this.itemOri.json.ta0feeder[0].multiassetlocci[0].assetnum;
        // var orgid = this.itemOri.json.ta0feeder[0].orgid;
        // var siteid = this.itemOri.json.siteid;
        var wonum = this.itemOri.json.wonum;
        console.log("wonum : " + wonum);
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        setTimeout(function () {
            loading.onWillDismiss(function () {
                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                _this.gf.displayToast("Crimpless Details updated.");
                loading.dismiss();
            });
        }, 10000);
        //this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
        if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
            this.gf.displayToast("Crimpless Details updated locally.");
            loading.dismiss();
            /** Sending latest data.. (alif) - (29.12.2018)*/
            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            // newRootNav.push("SealServiceExecutionPage", this.itemOri);
        }
        else if ((__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
            cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                if (_this.gv.deviceSignal <= data) {
                    // var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
                    // this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
                    //var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
                    // var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
                    var ta0sealdetails = {
                        ta0sealdetail: []
                    };
                    for (var _i = 0, _a = _this.itemOri.json.ta0sealdetail; _i < _a.length; _i++) {
                        var seal = _a[_i];
                        ta0sealdetails.ta0sealdetail.push(seal);
                    }
                    var itemVal = JSON.parse(JSON.stringify(ta0sealdetails));
                    var itemArray = [];
                    itemArray.push(itemVal);
                    _this.dataService
                        .saveRecordWithNewType(itemArray, wonum, __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSWORKORDER, feederCode, _this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
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
                            /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                            var result2 = resultDes.description.match(patt2);
                            var stringArry = result2.toString();
                            */
                            // var result = resultDes.description.slice(0, 34);
                            resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                            _this.gf.displayToast(NewResult);
                        }
                        else {
                            _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                            /** Sending latest data.. (alif) - (29.12.2018)*/
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                            _this.navCtrl.pop();
                        }
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                        _this.gf.warningAlert('Error', 'Crimpless Details failed to save.', 'Close');
                        loading.dismiss();
                    });
                }
                else {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                    _this.gf.displayToast("Crimpless Details updated locally.");
                    _this.navCtrl.pop();
                    loading.dismiss();
                    /** Sending latest data.. (alif) - (29.12.2018)*/
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                }
            });
        }
        else {
            //var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
            //this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
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
            //delete itemVal['ta0registerdetail'];
            //delete itemVal['ta0testdetail'];
            // itemArray.push(itemVal);
            //itemArray.push(itemVal);
            this.dataService
                .saveRecordWithNewType(itemArray, wonum, __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSWORKORDER, feederCode, this.itemOri.json.worktype)
                .then(function (results) {
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
                    /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                    var result2 = resultDes.description.match(patt2);
                    var stringArry = result2.toString();
                    */
                    // var result = resultDes.description.slice(0, 34);
                    resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                    _this.gf.displayToast(NewResult);
                }
                else {
                    _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    _this.navCtrl.pop();
                }
                loading.dismiss();
            }).catch(function (error) {
                _this.gf.stopLoading();
                loading.dismiss();
            });
        }
        console.log('itemAfter===>', this.itemOri);
    };
    CrimplessSealPage.prototype.saveDeviceDetails = function () {
        var _this = this;
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
            //if (!this.checkingStickerValidationHandler(loading) && !this.checkingSealValidationHandler(loading)) {
            // this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail = [];
            // this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0stickerdetail = [];
            // Default value from parent
            var assetnum = this.itemOri.json.ta0feeder[0].multiassetlocci[0].assetnum;
            var orgid = this.itemOri.json.ta0feeder[0].orgid;
            // this.ttbF1Array[i].ta0installind = 'true';
            var siteid = this.itemOri.json.siteid;
            // var wonum = this.itemOri.json.wonum;
            var wonum = this.sealWonum.workOrder[0].wonum;
            // Save Seal Details...
            // Save Fuse
            if ((this.sfuseF1Array[0].ta0stickernum != null || this.sfuseF1Array[0].ta0stickernum != undefined) || this.sfuseF1Array[0].ta0newstickernum != null || this.sfuseF1Array[0].ta0newstickernum != undefined) {
                for (var i = 0; i < this.sfuseF1Array.length; i++) {
                    this.sfuseF1Array[i].assetnum = assetnum;
                    this.sfuseF1Array[i].orgid = orgid;
                    this.sfuseF1Array[i].siteid = siteid;
                    this.sfuseF1Array[i].wonum = wonum;
                    this.sfuseF1Array[i].ta0installind = 'true';
                    this.sfuseF1Array[i].ta0existingseal = false,
                        this.sfuseF1Array[i].devicelocind = false,
                        this.sfuseF1Array[i].ta0seanlnum = this.sfuseF1Array[i].ta0sealnum ? this.sfuseF1Array[i].ta0sealnum : null;
                    this.sfuseF1Array[i].ta0stickerlocation = "METER_FUSE_F1";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.sfuseF1Array[i]);
                    // this.sealDetail.push(this.sfuseF1Array[i]);
                }
            }
            if ((this.sfuseF2Array[0].ta0stickernum != null || this.sfuseF2Array[0].ta0stickernum != undefined) || this.sfuseF2Array[0].ta0newstickernum != null || this.sfuseF2Array[0].ta0newstickernum != undefined) {
                for (var i = 0; i < this.sfuseF2Array.length; i++) {
                    this.sfuseF2Array[i].assetnum = assetnum;
                    this.sfuseF2Array[i].orgid = orgid;
                    this.sfuseF2Array[i].siteid = siteid;
                    this.sfuseF2Array[i].wonum = wonum;
                    this.sfuseF2Array[i].ta0installind = 'true';
                    this.sfuseF2Array[i].ta0existingseal = false,
                        this.sfuseF2Array[i].devicelocind = false,
                        this.sfuseF2Array[i].ta0seanlnum = this.sfuseF2Array[i].ta0sealnum ? this.sfuseF2Array[i].ta0sealnum : null;
                    this.sfuseF2Array[i].ta0stickerlocation = "METER_FUSE_F2";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.sfuseF2Array[i]);
                }
            }
            if ((this.sfuseF3Array[0].ta0stickernum != null || this.sfuseF3Array[0].ta0stickernum != undefined) || this.sfuseF3Array[0].ta0newstickernum != null || this.sfuseF3Array[0].ta0newstickernum != undefined) {
                for (var i = 0; i < this.sfuseF3Array.length; i++) {
                    this.sfuseF3Array[i].assetnum = assetnum;
                    this.sfuseF3Array[i].orgid = orgid;
                    this.sfuseF3Array[i].siteid = siteid;
                    this.sfuseF3Array[i].wonum = wonum;
                    this.sfuseF3Array[i].ta0installind = 'true';
                    this.sfuseF3Array[i].ta0existingseal = false,
                        this.sfuseF3Array[i].devicelocind = false,
                        this.sfuseF3Array[i].ta0seanlnum = this.sfuseF3Array[i].ta0sealnum ? this.sfuseF3Array[i].ta0sealnum : null;
                    this.sfuseF3Array[i].ta0stickerlocation = "METER_FUSE_F3";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.sfuseF3Array[i]);
                }
            }
            // Save Other Seal Details...
            // Save TTB
            if ((this.ttbF1Array[0].ta0sealnum != null || this.ttbF1Array[0].ta0sealnum != undefined) || this.ttbF1Array[0].ta0newsealnum != null || this.ttbF1Array[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ttbF1Array.length; i++) {
                    this.ttbF1Array[i].assetnum = assetnum;
                    this.ttbF1Array[i].orgid = orgid;
                    this.ttbF1Array[i].siteid = siteid;
                    this.ttbF1Array[i].wonum = wonum;
                    this.ttbF1Array[i].ta0installind = 'true';
                    this.ttbF1Array[i].ta0existingseal = false,
                        this.ttbF1Array[i].devicelocind = false,
                        this.ttbF1Array[i].ta0seanlnum = this.ttbF1Array[i].ta0sealnum ? this.ttbF1Array[i].ta0sealnum : null;
                    this.ttbF1Array[i].ta0seallocation = "TEST_BLOCK_F1_" + (i + 1);
                    console.log('this.ttbF1Array[i].ta0seallocation', this.ttbF1Array[i].ta0seallocation);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ttbF1Array[i]);
                }
            }
            if ((this.ttbF2Array[0].ta0sealnum != null || this.ttbF2Array[0].ta0sealnum != undefined) || this.ttbF2Array[0].ta0newsealnum != null || this.ttbF2Array[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ttbF2Array.length; i++) {
                    this.ttbF2Array[i].assetnum = assetnum;
                    this.ttbF2Array[i].orgid = orgid;
                    this.ttbF2Array[i].siteid = siteid;
                    this.ttbF2Array[i].wonum = wonum;
                    this.ttbF2Array[i].ta0installind = 'true';
                    this.ttbF2Array[i].ta0existingseal = false,
                        this.ttbF2Array[i].devicelocind = false,
                        this.ttbF2Array[i].ta0seanlnum = this.ttbF2Array[i].ta0sealnum ? this.ttbF2Array[i].ta0sealnum : null;
                    this.ttbF2Array[i].ta0seallocation = "TEST_BLOCK_F2_" + (i + 1);
                    console.log('this.ttbF2Array[i].ta0seallocation', this.ttbF2Array[i].ta0seallocation);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ttbF2Array[i]);
                }
            }
            if ((this.ttbF3Array[0].ta0sealnum != null || this.ttbF3Array[0].ta0sealnum != undefined) || this.ttbF3Array[0].ta0newsealnum != null || this.ttbF3Array[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ttbF3Array.length; i++) {
                    this.ttbF3Array[i].assetnum = assetnum;
                    this.ttbF3Array[i].orgid = orgid;
                    this.ttbF3Array[i].siteid = siteid;
                    this.ttbF3Array[i].wonum = wonum;
                    this.ttbF3Array[i].ta0installind = 'true';
                    this.ttbF3Array[i].ta0existingseal = false,
                        this.ttbF3Array[i].devicelocind = false,
                        this.ttbF3Array[i].ta0seanlnum = this.ttbF3Array[i].ta0sealnum ? this.ttbF3Array[i].ta0sealnum : null;
                    this.ttbF3Array[i].ta0seallocation = "TEST_BLOCK_F3_" + (i + 1);
                    console.log('this.ttbF3Array[i].ta0seallocation', this.ttbF3Array[i].ta0seallocation);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ttbF3Array[i]);
                }
            }
            // Save PT Chamber
            // if (this.showMvHvFields) {
            if ((this.ptChamberArrayF1[0].ta0sealnum != null || this.ptChamberArrayF1[0].ta0sealnum != undefined) || this.ptChamberArrayF1[0].ta0newsealnum != null || this.ptChamberArrayF1[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ptChamberArrayF1.length; i++) {
                    this.ptChamberArrayF1[i].assetnum = assetnum;
                    this.ptChamberArrayF1[i].orgid = orgid;
                    this.ptChamberArrayF1[i].siteid = siteid;
                    this.ptChamberArrayF1[i].wonum = wonum;
                    this.ptChamberArrayF1[i].ta0installind = 'true';
                    this.ptChamberArrayF1[i].ta0existingseal = false,
                        this.ptChamberArrayF1[i].devicelocind = false,
                        this.ptChamberArrayF1[i].ta0seanlnum = this.ptChamberArrayF1[i].ta0sealnum ? this.ptChamberArrayF1[i].ta0sealnum : null;
                    this.ptChamberArrayF1[i].ta0seallocation = "PT_CHAMBER_F1";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptChamberArrayF1[i]);
                }
            }
            if ((this.ptChamberArrayF2[0].ta0sealnum != null || this.ptChamberArrayF2[0].ta0sealnum != undefined) || this.ptChamberArrayF2[0].ta0newsealnum != null || this.ptChamberArrayF2[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ptChamberArrayF2.length; i++) {
                    this.ptChamberArrayF2[i].assetnum = assetnum;
                    this.ptChamberArrayF2[i].orgid = orgid;
                    this.ptChamberArrayF2[i].siteid = siteid;
                    this.ptChamberArrayF2[i].wonum = wonum;
                    this.ptChamberArrayF2[i].ta0installind = 'true';
                    this.ptChamberArrayF2[i].ta0existingseal = false,
                        this.ptChamberArrayF2[i].devicelocind = false,
                        this.ptChamberArrayF2[i].ta0seanlnum = this.ptChamberArrayF2[i].ta0sealnum ? this.ptChamberArrayF2[i].ta0sealnum : null;
                    this.ptChamberArrayF2[i].ta0seallocation = "PT_CHAMBER_F2";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptChamberArrayF2[i]);
                }
            }
            if ((this.ptChamberArrayF3[0].ta0sealnum != null || this.ptChamberArrayF3[0].ta0sealnum != undefined) || this.ptChamberArrayF3[0].ta0newsealnum != null || this.ptChamberArrayF3[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ptChamberArrayF3.length; i++) {
                    this.ptChamberArrayF3[i].assetnum = assetnum;
                    this.ptChamberArrayF3[i].orgid = orgid;
                    this.ptChamberArrayF3[i].siteid = siteid;
                    this.ptChamberArrayF3[i].wonum = wonum;
                    this.ptChamberArrayF3[i].ta0installind = 'true';
                    this.ptChamberArrayF3[i].ta0existingseal = false,
                        this.ptChamberArrayF3[i].devicelocind = false,
                        this.ptChamberArrayF3[i].ta0seanlnum = this.ptChamberArrayF3[i].ta0sealnum ? this.ptChamberArrayF3[i].ta0sealnum : null;
                    this.ptChamberArrayF3[i].ta0seallocation = "PT_CHAMBER_F3";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptChamberArrayF3[i]);
                }
            }
            // Save CT Chamber
            if ((this.ctChamberArrayF1[0].ta0sealnum != null || this.ctChamberArrayF1[0].ta0sealnum != undefined) || this.ctChamberArrayF1[0].ta0newsealnum != null || this.ctChamberArrayF1[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ctChamberArrayF1.length; i++) {
                    this.ctChamberArrayF1[i].assetnum = assetnum;
                    this.ctChamberArrayF1[i].orgid = orgid;
                    this.ctChamberArrayF1[i].siteid = siteid;
                    this.ctChamberArrayF1[i].wonum = wonum;
                    this.ctChamberArrayF1[i].ta0installind = 'true';
                    this.ctChamberArrayF1[i].ta0existingseal = false,
                        this.ctChamberArrayF1[i].devicelocind = false,
                        this.ctChamberArrayF1[i].ta0seanlnum = this.ctChamberArrayF1[i].ta0sealnum ? this.ctChamberArrayF1[i].ta0sealnum : null;
                    this.ctChamberArrayF1[i].ta0seallocation = "CT_CHAMBER_F1";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ctChamberArrayF1[i]);
                }
            }
            if ((this.ctChamberArrayF2[0].ta0sealnum != null || this.ctChamberArrayF2[0].ta0sealnum != undefined) || this.ctChamberArrayF2[0].ta0newsealnum != null || this.ctChamberArrayF2[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ctChamberArrayF2.length; i++) {
                    this.ctChamberArrayF2[i].assetnum = assetnum;
                    this.ctChamberArrayF2[i].orgid = orgid;
                    this.ctChamberArrayF2[i].siteid = siteid;
                    this.ctChamberArrayF2[i].wonum = wonum;
                    this.ctChamberArrayF2[i].ta0installind = 'true';
                    this.ctChamberArrayF2[i].ta0existingseal = false,
                        this.ctChamberArrayF2[i].devicelocind = false,
                        this.ctChamberArrayF2[i].ta0seanlnum = this.ctChamberArrayF2[i].ta0sealnum ? this.ctChamberArrayF2[i].ta0sealnum : null;
                    this.ctChamberArrayF2[i].ta0seallocation = "CT_CHAMBER_F2";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ctChamberArrayF2[i]);
                }
            }
            if ((this.ctChamberArrayF3[0].ta0sealnum != null || this.ctChamberArrayF3[0].ta0sealnum != undefined) || this.ctChamberArrayF3[0].ta0newsealnum != null || this.ctChamberArrayF3[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ctChamberArrayF3.length; i++) {
                    this.ctChamberArrayF3[i].assetnum = assetnum;
                    this.ctChamberArrayF3[i].orgid = orgid;
                    this.ctChamberArrayF3[i].siteid = siteid;
                    this.ctChamberArrayF3[i].wonum = wonum;
                    this.ctChamberArrayF3[i].ta0installind = 'true';
                    this.ctChamberArrayF3[i].ta0existingseal = false,
                        this.ctChamberArrayF3[i].devicelocind = false,
                        this.ctChamberArrayF3[i].ta0seanlnum = this.ctChamberArrayF3[i].ta0sealnum ? this.ctChamberArrayF3[i].ta0sealnum : null;
                    this.ctChamberArrayF3[i].ta0seallocation = "CT_CHAMBER_F3";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ctChamberArrayF3[i]);
                }
            }
            // Save PT Sec. Fuse
            if ((this.ptSecondaryFuseArrayF1[0].ta0sealnum != null || this.ptSecondaryFuseArrayF1[0].ta0sealnum != undefined) || this.ptSecondaryFuseArrayF1[0].ta0newsealnum != null || this.ptSecondaryFuseArrayF1[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ptSecondaryFuseArrayF1.length; i++) {
                    this.ptSecondaryFuseArrayF1[i].assetnum = assetnum;
                    this.ptSecondaryFuseArrayF1[i].orgid = orgid;
                    this.ptSecondaryFuseArrayF1[i].siteid = siteid;
                    this.ptSecondaryFuseArrayF1[i].wonum = wonum;
                    this.ptSecondaryFuseArrayF1[i].ta0installind = 'true';
                    this.ptSecondaryFuseArrayF1[i].ta0existingseal = false,
                        this.ptSecondaryFuseArrayF1[i].devicelocind = false,
                        this.ptSecondaryFuseArrayF1[i].ta0seanlnum = this.ptSecondaryFuseArrayF1[i].ta0sealnum ? this.ptSecondaryFuseArrayF1[i].ta0sealnum : null;
                    this.ptSecondaryFuseArrayF1[i].ta0seallocation = "PT_SEC_FUSE_F1";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptSecondaryFuseArrayF1[i]);
                }
            }
            if ((this.ptSecondaryFuseArrayF2[0].ta0sealnum != null || this.ptSecondaryFuseArrayF2[0].ta0sealnum != undefined) || this.ptSecondaryFuseArrayF2[0].ta0newsealnum != null || this.ptSecondaryFuseArrayF2[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ptSecondaryFuseArrayF2.length; i++) {
                    this.ptSecondaryFuseArrayF2[i].assetnum = assetnum;
                    this.ptSecondaryFuseArrayF2[i].orgid = orgid;
                    this.ptSecondaryFuseArrayF2[i].siteid = siteid;
                    this.ptSecondaryFuseArrayF2[i].wonum = wonum;
                    this.ptSecondaryFuseArrayF2[i].ta0installind = 'true';
                    this.ptSecondaryFuseArrayF2[i].ta0existingseal = false,
                        this.ptSecondaryFuseArrayF2[i].devicelocind = false,
                        this.ptSecondaryFuseArrayF2[i].ta0seanlnum = this.ptSecondaryFuseArrayF2[i].ta0sealnum ? this.ptSecondaryFuseArrayF2[i].ta0sealnum : null;
                    this.ptSecondaryFuseArrayF2[i].ta0seallocation = "PT_SEC_FUSE_F2";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptSecondaryFuseArrayF2[i]);
                }
            }
            if ((this.ptSecondaryFuseArrayF3[0].ta0sealnum != null || this.ptSecondaryFuseArrayF3[0].ta0sealnum != undefined) || this.ptSecondaryFuseArrayF3[0].ta0newsealnum != null || this.ptSecondaryFuseArrayF3[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.ptSecondaryFuseArrayF3.length; i++) {
                    this.ptSecondaryFuseArrayF3[i].assetnum = assetnum;
                    this.ptSecondaryFuseArrayF3[i].orgid = orgid;
                    this.ptSecondaryFuseArrayF3[i].siteid = siteid;
                    this.ptSecondaryFuseArrayF3[i].wonum = wonum;
                    this.ptSecondaryFuseArrayF3[i].ta0installind = 'true';
                    this.ptSecondaryFuseArrayF3[i].ta0existingseal = false,
                        this.ptSecondaryFuseArrayF3[i].devicelocind = false,
                        this.ptSecondaryFuseArrayF3[i].ta0seanlnum = this.ptSecondaryFuseArrayF3[i].ta0sealnum ? this.ptSecondaryFuseArrayF3[i].ta0sealnum : null;
                    this.ptSecondaryFuseArrayF3[i].ta0seallocation = "PT_SEC_FUSE_F3";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.ptSecondaryFuseArrayF3[i]);
                }
            }
            // Save Meter Test Box
            if ((this.meterTestBoxArray1[0].ta0sealnum != null || this.meterTestBoxArray1[0].ta0sealnum != undefined) || this.meterTestBoxArray1[0].ta0newsealnum != null || this.meterTestBoxArray1[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.meterTestBoxArray1.length; i++) {
                    this.meterTestBoxArray1[i].assetnum = assetnum;
                    this.meterTestBoxArray1[i].orgid = orgid;
                    this.meterTestBoxArray1[i].siteid = siteid;
                    this.meterTestBoxArray1[i].wonum = wonum;
                    this.meterTestBoxArray1[i].ta0installind = 'true';
                    this.meterTestBoxArray1[i].ta0existingseal = false,
                        this.meterTestBoxArray1[i].devicelocind = false,
                        this.meterTestBoxArray1[i].ta0seanlnum = this.meterTestBoxArray1[i].ta0sealnum ? this.meterTestBoxArray1[i].ta0sealnum : null;
                    this.meterTestBoxArray1[i].ta0seallocation = "METER_TESTBOX_KIOSK1_" + (i + 1);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterTestBoxArray1[i]);
                }
            }
            if ((this.meterTestBoxArray2[0].ta0sealnum != null || this.meterTestBoxArray2[0].ta0sealnum != undefined) || this.meterTestBoxArray2[0].ta0newsealnum != null || this.meterTestBoxArray2[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.meterTestBoxArray2.length; i++) {
                    this.meterTestBoxArray2[i].assetnum = assetnum;
                    this.meterTestBoxArray2[i].orgid = orgid;
                    this.meterTestBoxArray2[i].siteid = siteid;
                    this.meterTestBoxArray2[i].wonum = wonum;
                    this.meterTestBoxArray2[i].ta0installind = 'true';
                    this.meterTestBoxArray2[i].ta0existingseal = false,
                        this.meterTestBoxArray2[i].devicelocind = false,
                        this.meterTestBoxArray2[i].ta0seanlnum = this.meterTestBoxArray2[i].ta0sealnum ? this.meterTestBoxArray2[i].ta0sealnum : null;
                    this.meterTestBoxArray2[i].ta0seallocation = "METER_TESTBOX_KIOSK2_" + (i + 1);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterTestBoxArray2[i]);
                }
            }
            // Save Termination Box
            if ((this.terminalBoxArrayF1[0].ta0sealnum != null || this.terminalBoxArrayF1[0].ta0sealnum != undefined) || this.terminalBoxArrayF1[0].ta0newsealnum != null || this.terminalBoxArrayF1[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.terminalBoxArrayF1.length; i++) {
                    this.terminalBoxArrayF1[i].assetnum = assetnum;
                    this.terminalBoxArrayF1[i].orgid = orgid;
                    this.terminalBoxArrayF1[i].siteid = siteid;
                    this.terminalBoxArrayF1[i].wonum = wonum;
                    this.terminalBoxArrayF1[i].ta0installind = 'true';
                    this.terminalBoxArrayF1[i].ta0existingseal = false,
                        this.terminalBoxArrayF1[i].devicelocind = false,
                        this.terminalBoxArrayF1[i].ta0seanlnum = this.terminalBoxArrayF1[i].ta0sealnum ? this.terminalBoxArrayF1[i].ta0sealnum : null;
                    this.terminalBoxArrayF1[i].ta0seallocation = "TERMINATION_BOX_F1";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.terminalBoxArrayF1[i]);
                }
            }
            if ((this.terminalBoxArrayF2[0].ta0sealnum != null || this.terminalBoxArrayF2[0].ta0sealnum != undefined) || this.terminalBoxArrayF2[0].ta0newsealnum != null || this.terminalBoxArrayF2[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.terminalBoxArrayF2.length; i++) {
                    this.terminalBoxArrayF2[i].assetnum = assetnum;
                    this.terminalBoxArrayF2[i].orgid = orgid;
                    this.terminalBoxArrayF2[i].siteid = siteid;
                    this.terminalBoxArrayF2[i].wonum = wonum;
                    this.terminalBoxArrayF2[i].ta0installind = 'true';
                    this.terminalBoxArrayF2[i].ta0existingseal = false,
                        this.terminalBoxArrayF2[i].devicelocind = false,
                        this.terminalBoxArrayF2[i].ta0seanlnum = this.terminalBoxArrayF2[i].ta0sealnum ? this.terminalBoxArrayF2[i].ta0sealnum : null;
                    this.terminalBoxArrayF2[i].ta0seallocation = "TERMINATION_BOX_F2";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.terminalBoxArrayF2[i]);
                }
            }
            if ((this.terminalBoxArrayF3[0].ta0sealnum != null || this.terminalBoxArrayF3[0].ta0sealnum != undefined) || this.terminalBoxArrayF3[0].ta0newsealnum != null || this.terminalBoxArrayF3[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.terminalBoxArrayF3.length; i++) {
                    this.terminalBoxArrayF3[i].assetnum = assetnum;
                    this.terminalBoxArrayF3[i].orgid = orgid;
                    this.terminalBoxArrayF3[i].siteid = siteid;
                    this.terminalBoxArrayF3[i].wonum = wonum;
                    this.terminalBoxArrayF3[i].ta0installind = 'true';
                    this.terminalBoxArrayF3[i].ta0existingseal = false,
                        this.terminalBoxArrayF3[i].devicelocind = false,
                        this.terminalBoxArrayF3[i].ta0seanlnum = this.terminalBoxArrayF3[i].ta0sealnum ? this.terminalBoxArrayF3[i].ta0sealnum : null;
                    this.terminalBoxArrayF3[i].ta0seallocation = "TERMINATION_BOX_F3";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.terminalBoxArrayF3[i]);
                }
            }
            // Save Marshalling Box
            if ((this.marshallingBoxArrayF1[0].ta0sealnum != null || this.marshallingBoxArrayF1[0].ta0sealnum != undefined) || this.marshallingBoxArrayF1[0].ta0newsealnum != null || this.marshallingBoxArrayF1[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.marshallingBoxArrayF1.length; i++) {
                    this.marshallingBoxArrayF1[i].assetnum = assetnum;
                    this.marshallingBoxArrayF1[i].orgid = orgid;
                    this.marshallingBoxArrayF1[i].siteid = siteid;
                    this.marshallingBoxArrayF1[i].wonum = wonum;
                    this.marshallingBoxArrayF1[i].ta0installind = 'true';
                    this.marshallingBoxArrayF1[i].ta0existingseal = false,
                        this.marshallingBoxArrayF1[i].devicelocind = false,
                        this.marshallingBoxArrayF1[i].ta0seanlnum = this.marshallingBoxArrayF1[i].ta0sealnum ? this.marshallingBoxArrayF1[i].ta0sealnum : null;
                    this.marshallingBoxArrayF1[i].ta0seallocation = "MARSHALLING_BOX_F1";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.marshallingBoxArrayF1[i]);
                }
            }
            if ((this.marshallingBoxArrayF2[0].ta0sealnum != null || this.marshallingBoxArrayF2[0].ta0sealnum != undefined) || this.marshallingBoxArrayF2[0].ta0newsealnum != null || this.marshallingBoxArrayF2[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.marshallingBoxArrayF2.length; i++) {
                    this.marshallingBoxArrayF2[i].assetnum = assetnum;
                    this.marshallingBoxArrayF2[i].orgid = orgid;
                    this.marshallingBoxArrayF2[i].siteid = siteid;
                    this.marshallingBoxArrayF2[i].wonum = wonum;
                    this.marshallingBoxArrayF2[i].ta0installind = 'true';
                    this.marshallingBoxArrayF2[i].ta0existingseal = false,
                        this.marshallingBoxArrayF2[i].devicelocind = false,
                        this.marshallingBoxArrayF2[i].ta0seanlnum = this.marshallingBoxArrayF2[i].ta0sealnum ? this.marshallingBoxArrayF2[i].ta0sealnum : null;
                    this.marshallingBoxArrayF2[i].ta0seallocation = "MARSHALLING_BOX_F2";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.marshallingBoxArrayF2[i]);
                }
            }
            if ((this.marshallingBoxArrayF3[0].ta0sealnum != null || this.marshallingBoxArrayF3[0].ta0sealnum != undefined) || this.marshallingBoxArrayF3[0].ta0newsealnum != null || this.marshallingBoxArrayF3[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.marshallingBoxArrayF3.length; i++) {
                    this.marshallingBoxArrayF3[i].assetnum = assetnum;
                    this.marshallingBoxArrayF3[i].orgid = orgid;
                    this.marshallingBoxArrayF3[i].siteid = siteid;
                    this.marshallingBoxArrayF3[i].wonum = wonum;
                    this.marshallingBoxArrayF3[i].ta0installind = 'true';
                    this.marshallingBoxArrayF3[i].ta0existingseal = false,
                        this.marshallingBoxArrayF3[i].devicelocind = false,
                        this.marshallingBoxArrayF3[i].ta0seanlnum = this.marshallingBoxArrayF3[i].ta0sealnum ? this.marshallingBoxArrayF3[i].ta0sealnum : null;
                    this.marshallingBoxArrayF3[i].ta0seallocation = "MARSHALLING_BOX_F3";
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.marshallingBoxArrayF3[i]);
                }
            }
            // Save Panel Meter
            if ((this.meterKiosk1Array[0].ta0sealnum != null || this.meterKiosk1Array[0].ta0sealnum != undefined) || this.meterKiosk1Array[0].ta0newsealnum != null || this.meterKiosk1Array[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.meterKiosk1Array.length; i++) {
                    this.meterKiosk1Array[i].assetnum = assetnum;
                    this.meterKiosk1Array[i].orgid = orgid;
                    this.meterKiosk1Array[i].siteid = siteid;
                    this.meterKiosk1Array[i].wonum = wonum;
                    this.meterKiosk1Array[i].ta0installind = 'true';
                    this.meterKiosk1Array[i].ta0existingseal = false,
                        this.meterKiosk1Array[i].devicelocind = false,
                        this.meterKiosk1Array[i].ta0seanlnum = this.meterKiosk1Array[i].ta0sealnum ? this.meterKiosk1Array[i].ta0sealnum : null;
                    this.meterKiosk1Array[i].ta0seallocation = "PANELDOOR_KIOSK1_" + (i + 1);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterKiosk1Array[i]);
                }
            }
            if ((this.meterKiosk2Array[0].ta0sealnum != null || this.meterKiosk2Array[0].ta0sealnum != undefined) || this.meterKiosk2Array[0].ta0newsealnum != null || this.meterKiosk2Array[0].ta0newsealnum != undefined) {
                for (var i = 0; i < this.meterKiosk2Array.length; i++) {
                    this.meterKiosk2Array[i].assetnum = assetnum;
                    this.meterKiosk2Array[i].orgid = orgid;
                    this.meterKiosk2Array[i].siteid = siteid;
                    this.meterKiosk2Array[i].wonum = wonum;
                    this.meterKiosk2Array[i].ta0installind = 'true';
                    this.meterKiosk2Array[i].ta0existingseal = false,
                        this.meterKiosk2Array[i].devicelocind = false,
                        this.meterKiosk2Array[i].ta0seanlnum = this.meterKiosk2Array[i].ta0sealnum ? this.meterKiosk2Array[i].ta0sealnum : null;
                    this.meterKiosk2Array[i].ta0seallocation = "PANELDOOR_KIOSK2_" + (i + 1);
                    this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0sealdetail.push(this.meterKiosk2Array[i]);
                }
            }
            // Setting flag button colour (alif) - (29.12.2018)
            this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
            // Saving the remarks into multiassetlocci for ZISP
            if (this.itemOri.json.worktype === "ZISP" || this.itemOri.json.worktype === "ZIST") {
                this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta4sealstickerbfremarks = this.ta0naremarks_before;
                this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta4sealstickerremarks = this.ta0naremarks_after;
            }
            setTimeout(function () {
                loading_1.onWillDismiss(function () {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                    _this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                    _this.gf.displayToast("Crimpless Details updated.");
                    loading_1.dismiss();
                });
            }, 10000);
            /**
            * Reason   : Saving to local storage (json data).
            * Created  : 22-01-2019
            */
            this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                this.gf.displayToast("Crimpless Details updated locally.");
                loading_1.dismiss();
                /** Sending latest data.. (alif) - (29.12.2018)*/
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("SealServiceExecutionPage", this.itemOri);
            }
            else if ((__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        var feederCode = _this.itemOri.json.ta0feeder[0].ta0feedercode;
                        _this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
                        var itemVal = JSON.parse(JSON.stringify(_this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
                        var itemArray = [];
                        itemArray.push(itemVal);
                        _this.dataService
                            .saveRecordWithNewType(itemArray, wonum, __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, _this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(' result + ' + JSON.stringify(results));
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                            _this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;
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
                                /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                                var result2 = resultDes.description.match(patt2);
                                var stringArry = result2.toString();
                                */
                                // var result = resultDes.description.slice(0, 34);
                                resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                                _this.gf.displayToast(NewResult);
                            }
                            else {
                                _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                                /** Sending latest data.. (alif) - (29.12.2018)*/
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("SealServiceExecutionPage", this.itemOri);\
                                _this.navCtrl.pop();
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
                        _this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_silStickers_haveChange = true;
                        _this.gf.displayToast("Crimpless Details updated locally.");
                        _this.navCtrl.pop();
                        loading_1.dismiss();
                        /** Sending latest data.. (alif) - (29.12.2018)*/
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                    }
                });
            }
            else {
                var feederCode = this.itemOri.json.ta0feeder[0].ta0feedercode;
                this.itemOri.json.ta0feeder[0].multiassetlocci[0].ta0silstickerstatus = 'Y';
                var itemVal = JSON.parse(JSON.stringify(this.itemOri.json.ta0feeder[0].multiassetlocci[0]));
                var itemArray = [];
                delete itemVal['ta0registerdetail'];
                delete itemVal['ta0testdetail'];
                itemArray.push(itemVal);
                this.dataService
                    .saveRecordWithNewType(itemArray, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_SILSTICKERS, feederCode, this.itemOri.json.worktype)
                    .then(function (results) {
                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                    _this.itemOri.json.ta0feeder[0].multiassetlocci[0].loc_ta0silStickers_haveChange = false;
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
                        /* var patt2 = /BMXAA4190E - Seal Location TEST_BLOCK_3 is not in the value list./i;
                        var result2 = resultDes.description.match(patt2);
                        var stringArry = result2.toString();
                        */
                        // var result = resultDes.description.slice(0, 34);
                        resultDes.description.replace(/com.ibm.maximo.oslc.OslcException/g, "Failure");
                        _this.gf.displayToast(NewResult);
                    }
                    else {
                        _this.gf.warningAlert('Success', 'Crimpless Details save successfully', 'Close');
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("SealServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
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
    CrimplessSealPage.prototype.loadFeederDesign = function (feederArr) {
        // Reset New Device Display Section
        feederArr.loc_haveNewDevice = false;
        // Installation Voltage
        var voltage = JSON.parse(JSON.stringify(this.itemOri.json.ta0installationvoltage));
        if (typeof (feederArr.multiassetlocci) != 'undefined') {
            feederArr.feederSetDesign = [];
            var feederSetDesign = new __WEBPACK_IMPORTED_MODULE_14__pojo_design_feederSetDesign__["a" /* FeederSetDesign */]();
            feederSetDesign.soWorkType = this.itemOri.json.worktype;
            feederSetDesign.feederExisting = feederArr.ta0existing;
            if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                var ctCount = 0;
                var ptCount = 0;
                for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
                    debugger;
                    var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    switch (key) {
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                            feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterIndex = i;
                            feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                            feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                            feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                            voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                            feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                            feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                            feederArr.loc_haveNewDevice = true;
                            // Trigger AllocationType 90
                            if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                                this.triggerAllocationType();
                            }
                            /**
                             * Reason   : Checking and convert to array for ta4testdata
                             * Created  : Alif (05-03-2019)
                             */
                            var ta4testdata_temp;
                            if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                                    ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                                }
                                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
                            }
                            // Setting controlling device list
                            // removed by shankar 03/11/2018.. implements in add-device constructor.
                            /*  var controllingDevice = {
                               feederId: "Feeder"+i,
                               asssetNum: feederSetDesign.nMeter,
                               serialNum: feederSetDesign.nMeterSerialNum
                             }
                             this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                            feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterModemIndex = i;
                            feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                            feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nMeterSimIndex = i;
                            feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
                            feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nCheckIndex = i;
                            feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                            feederArr.loc_haveNewDevice = true;
                            /**
                             * Reason   : Checking and convert to array for ta4testdata
                             * Created  : Alif (05-03-2019)
                             */
                            var ta4testdata_temp;
                            if (feederArr.multiassetlocci[i].hasOwnProperty("ta4testdata")) {
                                if (Array.isArray((feederArr.multiassetlocci[i].ta4testdata))) {
                                    ta4testdata_temp = feederArr.multiassetlocci[i].ta4testdata;
                                }
                                else {
                                    ta4testdata_temp = JSON.parse(feederArr.multiassetlocci[i].ta4testdata);
                                }
                                feederArr.multiassetlocci[i].ta4testdata = ta4testdata_temp;
                            }
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
                            feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nCheckModemIndex = i;
                            feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederSetDesign.nCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                            feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                            feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                            feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                            feederSetDesign.nCheckSimIndex = i;
                            feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                            feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                            feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                            feederArr.loc_haveNewDevice = true;
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
                            if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterCtRIndex = i;
                                feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederArr.loc_haveNewDevice = true;
                                //ctCount++;
                            }
                            else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterCtYIndex = i;
                                feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederArr.loc_haveNewDevice = true;
                                //ctCount++;
                            }
                            else {
                                feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterCtBIndex = i;
                                feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederArr.loc_haveNewDevice = true;
                                //ctCount++;
                            }
                            break;
                        case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
                            if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterPtRIndex = i;
                                feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederArr.loc_haveNewDevice = true;
                                //ptCount++;
                            }
                            else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterPtYIndex = i;
                                feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederArr.loc_haveNewDevice = true;
                                //ptCount++;
                            }
                            else {
                                feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterPtBIndex = i;
                                feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederArr.loc_haveNewDevice = true;
                                //ptCount++;
                            }
                            break;
                        default:
                            break;
                    }
                    // Collection Assetnum Details          
                    this.deviceDetails.assetnum = feederArr.multiassetlocci[i].assetnum;
                    this.deviceDetails.ta0controllingdevice = feederArr.multiassetlocci[i].ta0controllingdevice;
                    this.deviceDetails.ta0allocationtype = feederArr.multiassetlocci[i].ta0allocationtype;
                    this.deviceDetails.ta0bcrmuploadindicator = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    this.itemOri.json.listDevice.push(this.deviceDetails);
                    this.deviceDetails = {};
                }
                // Checking voltage
                if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                    // Mandatory checking is ct / pt is empty
                    if (typeof (feederSetDesign.nMeterCtR) === "undefined") {
                        feederSetDesign.nMeterCtRRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterCtY) === "undefined") {
                        feederSetDesign.nMeterCtYRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterCtB) === "undefined") {
                        feederSetDesign.nMeterCtBRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                    else {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                }
                else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                    // Mandatory checking is ct / pt is empty
                    if (typeof (feederSetDesign.nMeterCtR) === "undefined") {
                        feederSetDesign.nMeterCtRRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterCtY) === "undefined") {
                        feederSetDesign.nMeterCtYRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterCtB) === "undefined") {
                        feederSetDesign.nMeterCtBRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterPtR) === "undefined") {
                        feederSetDesign.nMeterPtRRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterPtY) === "undefined") {
                        feederSetDesign.nMeterPtYRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nMeterPtB) === "undefined") {
                        feederSetDesign.nMeterPtBRegisterStatus = "N";
                    }
                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            ((feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) && feederSetDesign.nCheckSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                    else {
                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) && feederSetDesign.nMeterSilStatus === "Y") &&
                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                            feederSetDesign.nFeederStatus = true;
                        }
                        else {
                            feederSetDesign.nFeederStatus = false;
                        }
                    }
                }
                else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                }
            }
            else {
                var ctECount = 0;
                var ptECount = 0;
                //var ctnCount = 0;
                //var ptnCount = 0;
                for (var i = 0; i < feederArr.multiassetlocci.length; i++) {
                    debugger;
                    // Collection Assetnum          
                    this.deviceDetails.description = feederArr.description + " - " + feederArr.ta0feedercode;
                    var key = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    if (feederSetDesign.soWorkType === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZUDN && feederSetDesign.feederExisting === false) {
                        switch (key) {
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterIndex = i;
                                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                feederArr.nfeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                feederArr.loc_haveNewDevice = true;
                                // Trigger AllocationType 90
                                if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                                    this.triggerAllocationType();
                                }
                                // Setting controlling device list
                                // removed by shankar 03/11/2018.. implements in add-device constructor.
                                /* var controllingDevice = {
                                  feederId: "Feeder"+i,
                                  asssetNum: feederSetDesign.nMeter,
                                  serialNum: feederSetDesign.nMeterSerialNum
                                }
                                this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterModemIndex = i;
                                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterSimIndex = i;
                                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
                                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckIndex = i;
                                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
                                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckModemIndex = i;
                                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckSimIndex = i;
                                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtRIndex = i;
                                    feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtYIndex = i;
                                    feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                else {
                                    feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtBIndex = i;
                                    feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctCount++;
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtRIndex = i;
                                    feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtYIndex = i;
                                    feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                else {
                                    feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtBIndex = i;
                                    feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptCount++;
                                }
                                break;
                            default:
                                break;
                        }
                        // Checking Voltage
                        var old_voltage = JSON.parse(JSON.stringify(this.itemOri.json.ta0installationvoltage));
                        var new_voltage = JSON.parse(JSON.stringify(this.itemOri.json.ta0newvoltage));
                        // Trigger Status
                        // Checking voltage
                        if (old_voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (old_voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (new_voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                    }
                                }
                                // Existing Section
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (old_voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                            if (new_voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                            else if (new_voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Section
                                if (feederArr.loc_haveNewDevice) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Section
                                if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                    }
                    else {
                        switch (key) {
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN:
                                feederSetDesign.eMeter = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMeterIndex = i;
                                feederSetDesign.eMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederArr.eFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                                feederSetDesign.eMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.eMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                    feederSetDesign.eMeterRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    // Setting to make info default button to "Green" by alif (20-12-2018)
                                    if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                                        if (feederSetDesign.eMeterRemoveInd === true) {
                                            if (feederSetDesign.eMeterRegisterStatus !== 'Y') {
                                                feederSetDesign.eMeterRegisterStatus = 'N';
                                            }
                                        }
                                        else {
                                            feederSetDesign.eMeterRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eMeterRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eMeterTestStatus = 'Y';
                                }
                                feederSetDesign.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
                                    feederSetDesign.nFeederVoltage = feederSetDesign.eFeederVoltage;
                                }
                                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                feederArr.eFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '02' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '01' : feederArr.multiassetlocci[i].ta0devicevoltage;
                                // Setting controlling device list
                                // removed by shankar 03/11/2018.. implements in add-device constructor.
                                /*  var controllingDevice = {
                                   feederId: "Feeder"+i,
                                   asssetNum: feederSetDesign.eMeter,
                                   serialNum: feederSetDesign.eMeterSerialNum
                                 }
                                 this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_MD:
                                feederSetDesign.eMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMeterModemIndex = i;
                                feederSetDesign.eMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISO || this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                                    feederSetDesign.eMeterModemTestStatus = "Y";
                                }
                                else {
                                    feederSetDesign.eMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                }
                                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                    feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    // Setting to make info default button to "Green" by alif (20-12-2018)
                                    if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                                        if (feederSetDesign.eMeterModemRemoveInd === true) {
                                            if (feederSetDesign.eMeterModemRegisterStatus !== 'Y') {
                                                feederSetDesign.eMeterModemRegisterStatus = 'N';
                                            }
                                        }
                                        else {
                                            feederSetDesign.eMeterModemRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eMeterModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eMeterModemTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_SIM:
                                feederSetDesign.eMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMeterSimIndex = i;
                                feederSetDesign.eMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                    feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    // Setting to make info default button to "Green" by alif (20-12-2018)
                                    if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                                        if (feederSetDesign.eMeterSimRemoveInd === true) {
                                            if (feederSetDesign.eMeterSimRegisterStatus !== 'Y') {
                                                feederSetDesign.eMeterSimRegisterStatus = 'N';
                                            }
                                        }
                                        else {
                                            feederSetDesign.eMeterSimRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eMeterSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eMeterSimTestStatus = 'Y';
                                }
                                break;
                            /** Reason: Adding Existing Main Comm Module for Smart Meter */
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_COMM:
                                feederSetDesign.eMainComm = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eMainCommIndex = i;
                                feederSetDesign.eMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.eMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederSetDesign.eMainCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK:
                                feederSetDesign.eCheck = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eCheckIndex = i;
                                feederSetDesign.eCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                                feederSetDesign.eCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.eCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                    feederSetDesign.eCheckRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    // Setting to make info default button to "Green" by alif (20-12-2018)
                                    if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                                        if (feederSetDesign.eCheckRemoveInd === true) {
                                            if (feederSetDesign.eCheckRegisterStatus !== 'Y') {
                                                feederSetDesign.eCheckRegisterStatus = 'N';
                                            }
                                        }
                                        else {
                                            feederSetDesign.eCheckRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eCheckRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eCheckTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_MD:
                                feederSetDesign.eCheckModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eCheckModemIndex = i;
                                feederSetDesign.eCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                    feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    // Setting to make info default button to "Green" by alif (20-12-2018)
                                    if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                                        if (feederSetDesign.eCheckModemRemoveInd === true) {
                                            if (feederSetDesign.eCheckModemRegisterStatus !== 'Y') {
                                                feederSetDesign.eCheckModemRegisterStatus = 'N';
                                            }
                                        }
                                        else {
                                            feederSetDesign.eCheckModemRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eCheckModemRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eCheckModemTestStatus = 'Y';
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_SIM:
                                feederSetDesign.eCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eCheckSimIndex = i;
                                feederSetDesign.eCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                    feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    // Setting to make info default button to "Green" by alif (20-12-2018)
                                    if (this.worktype === 'ZINR' || this.worktype === 'ZINL' && voltage > 3) {
                                        if (feederSetDesign.eCheckSimRemoveInd === true) {
                                            if (feederSetDesign.eCheckSimRegisterStatus !== 'Y') {
                                                feederSetDesign.eCheckSimRegisterStatus = 'N';
                                            }
                                        }
                                        else {
                                            feederSetDesign.eCheckSimRegisterStatus = 'Y';
                                        }
                                    }
                                }
                                else {
                                    feederSetDesign.eCheckSimRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                }
                                // Setting to make testing default to "Green" by alif (27-12-2018)
                                if (this.worktype === 'ZRMV') {
                                    feederSetDesign.eCheckSimTestStatus = 'Y';
                                }
                                break;
                            /** Reason: Adding Existing Comm Module for Smart Meter */
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_CHECK_COMM:
                                feederSetDesign.eCheckComm = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.eCheckCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.eCheckCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.eCheckCommIndex = i;
                                feederSetDesign.eCheckCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.eCheckCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.eCheckCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.eCheckCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederSetDesign.eCheckCommRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_CT:
                                if (ctECount === 0) {
                                    feederSetDesign.eMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterCtRIndex = i;
                                    feederSetDesign.eMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterCtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ctECount++;
                                }
                                else if (ctECount === 1) {
                                    feederSetDesign.eMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterCtYIndex = i;
                                    feederSetDesign.eMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterCtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ctECount++;
                                }
                                else {
                                    feederSetDesign.eMeterCtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterCtBIndex = i;
                                    feederSetDesign.eMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterCtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ctECount++;
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN_PT:
                                if (ptECount === 0) {
                                    feederSetDesign.eMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterPtRIndex = i;
                                    feederSetDesign.eMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterPtRRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ptECount++;
                                }
                                else if (ptECount === 1) {
                                    feederSetDesign.eMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterPtYIndex = i;
                                    feederSetDesign.eMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterPtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterPtYRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ptECount++;
                                }
                                else {
                                    feederSetDesign.eMeterPtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.eMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.eMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.eMeterPtBIndex = i;
                                    feederSetDesign.eMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    if (feederArr.multiassetlocci[i].ta0replaceind === true || feederArr.multiassetlocci[i].ta0removeind === true) {
                                        if (feederArr.multiassetlocci[i].ta0registerstatus !== 'Y') {
                                            feederArr.multiassetlocci[i].ta0registerstatus = 'N';
                                        }
                                    }
                                    else {
                                        feederArr.multiassetlocci[i].ta0registerstatus = 'Y';
                                    }
                                    feederSetDesign.eMeterPtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    if (this.worktype === 'ZSRO' || this.worktype === 'ZINL' || this.worktype === 'ZCER' || this.worktype === 'ZINR') {
                                        feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0replaceind;
                                    }
                                    else {
                                        feederSetDesign.eMeterPtBRemoveInd = feederArr.multiassetlocci[i].ta0removeind;
                                    }
                                    ptECount++;
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN:
                                feederSetDesign.nMeter = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterIndex = i;
                                feederSetDesign.nMeterAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederArr.nFeederMainDeviceAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                                feederSetDesign.nMeterRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nMeterSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederSetDesign.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                feederArr.nFeederVoltage = feederArr.multiassetlocci[i].ta0devicevoltage === '03' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '02' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage === '01' ? '03' : feederArr.multiassetlocci[i].ta0devicevoltage;
                                voltage = feederArr.multiassetlocci[i].ta0devicevoltage;
                                feederArr.loc_haveNewDevice = true;
                                // Trigger AllocationType 90
                                if (feederArr.multiassetlocci[i].ta0allocationtype === this.dCons.DEV_ALLOC_MAIN_METER) {
                                    this.triggerAllocationType();
                                }
                                // Setting controlling device list
                                // removed by shankar 03/11/2018.. implements in add-device constructor.
                                /* var controllingDevice = {
                                  feederId: "Feeder"+i,
                                  asssetNum: feederSetDesign.nMeter,
                                  serialNum: feederSetDesign.nMeterSerialNum
                                }
                                this.itemOri.json.loc_controllingDeviceList.push(controllingDevice); */
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_MD:
                                feederSetDesign.nMeterModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterModemIndex = i;
                                feederSetDesign.nMeterModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_SIM:
                                feederSetDesign.nMeterSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMeterSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMeterSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMeterSimIndex = i;
                                feederSetDesign.nMeterSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMeterSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMeterSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            /** Reason: Adding New Comm Module for Smart Meter */
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_COMM:
                                feederSetDesign.nMainComm = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nMainCommSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nMainCommCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nMainCommIndex = i;
                                feederSetDesign.nMainCommAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nMainCommRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nMainCommTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nMainCommSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK:
                                feederSetDesign.nCheck = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckIndex = i;
                                feederSetDesign.nCheckAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckFunctionClass = feederArr.multiassetlocci[i].ta0functionclass;
                                feederSetDesign.nCheckRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederSetDesign.nCheckSilStatus = feederArr.multiassetlocci[i].ta0silstickerstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_MD:
                                feederSetDesign.nCheckModem = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckModemSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckModemCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckModemIndex = i;
                                feederSetDesign.nCheckModemAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckModemRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckModemTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_CHECK_SIM:
                                feederSetDesign.nCheckSim = feederArr.multiassetlocci[i].assetnum;
                                feederSetDesign.nCheckSimSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                feederSetDesign.nCheckSimCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                feederSetDesign.nCheckSimIndex = i;
                                feederSetDesign.nCheckSimAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                feederSetDesign.nCheckSimRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                feederSetDesign.nCheckSimTestStatus = feederArr.multiassetlocci[i].ta0testingstatus;
                                feederArr.loc_haveNewDevice = true;
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_CT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterCtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtRIndex = i;
                                    feederSetDesign.nMeterCtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctnCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterCtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtYIndex = i;
                                    feederSetDesign.nMeterCtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtYRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctnCount++;
                                }
                                else {
                                    feederSetDesign.nMeterCtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterCtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterCtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterCtBIndex = i;
                                    feederSetDesign.nMeterCtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterCtBRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ctnCount++;
                                }
                                break;
                            case __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN_PT:
                                if (feederArr.multiassetlocci[i].ta0ctptphase === 'R') {
                                    feederSetDesign.nMeterPtR = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtRSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtRCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtRIndex = i;
                                    feederSetDesign.nMeterPtRAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptnCount++;
                                }
                                else if (feederArr.multiassetlocci[i].ta0ctptphase === 'Y') {
                                    feederSetDesign.nMeterPtY = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtYSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtYCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtYIndex = i;
                                    feederSetDesign.nMeterPtYAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptnCount++;
                                }
                                else {
                                    feederSetDesign.nMeterPtB = feederArr.multiassetlocci[i].assetnum;
                                    feederSetDesign.nMeterPtBSerialNum = feederArr.multiassetlocci[i].ta0serialnum;
                                    feederSetDesign.nMeterPtBCtrl = feederArr.multiassetlocci[i].ta0controllingdevice;
                                    feederSetDesign.nMeterPtBIndex = i;
                                    feederSetDesign.nMeterPtBAllocationType = feederArr.multiassetlocci[i].ta0allocationtype;
                                    feederSetDesign.nMeterPtRRegisterStatus = feederArr.multiassetlocci[i].ta0registerstatus;
                                    feederArr.loc_haveNewDevice = true;
                                    //ptnCount++;
                                }
                                break;
                            default:
                                break;
                        }
                        // Trigger Status
                        if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISR) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                    if ((feederSetDesign.eMeterSilStatus === "Y") &&
                                        (feederSetDesign.eCheckSilStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterSilStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                    if ((feederSetDesign.eMeterSilStatus === "Y") &&
                                        (feederSetDesign.eCheckSilStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterSilStatus === "Y") &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterSilStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eMeterSilStatus === "Y") {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCE) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") && feederSetDesign.nCheckSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") && feederSetDesign.nMeterSilStatus === "Y") &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                if (feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZMMR || this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZDCN || this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRCN) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                            feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                        (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                            feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckModemRegisterStatus === "Y" && feederSetDesign.nCheckSimRegisterStatus === "Y" &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterModemRegisterStatus === "Y" && feederSetDesign.nMeterSimRegisterStatus === "Y" &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckModemRegisterStatus === "Y" && feederSetDesign.eCheckSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterModemRegisterStatus === "Y" && feederSetDesign.eMeterSimRegisterStatus === "Y" &&
                                        (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                        (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nMeterRegisterStatus === "Y" || (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) {
                                        feederSetDesign.nFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.nFeederStatus = false;
                                    }
                                }
                                if (feederSetDesign.eMeterRegisterStatus === "Y" || (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) {
                                    feederSetDesign.eFeederStatus = true;
                                }
                                else {
                                    feederSetDesign.eFeederStatus = false;
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC || this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZSRO) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else if (this.worktype === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" || feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" || feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" || feederSetDesign.eCheckModemTestStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" || feederSetDesign.eMeterModemTestStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                        else {
                            // Checking voltage
                            if (voltage === __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nCheckRegisterStatus === "Y" && (feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.nMeterRegisterStatus === "Y" && (feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y")) &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && (feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && (feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y"))) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage > __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    // Checking New Check Meter Section
                                    if (feederSetDesign.nFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (typeof (feederSetDesign.nCheck || feederSetDesign.nCheckModem) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y") {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage == Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (typeof (feederSetDesign.eCheck || feederSetDesign.eCheckModem) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y") {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                            }
                            else if (voltage < __WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V) {
                                // New Device
                                if (feederArr.loc_haveNewDevice) {
                                    if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else if (feederSetDesign.nFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                        if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nCheckRegisterStatus === "Y" && feederSetDesign.nCheckTestStatus === "Y" && feederSetDesign.nCheckModemTestStatus === "Y" && feederSetDesign.nCheckSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                        else {
                                            if ((feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") &&
                                                (feederSetDesign.nMeterCtRRegisterStatus === "Y" && feederSetDesign.nMeterCtYRegisterStatus === "Y" && feederSetDesign.nMeterCtBRegisterStatus === "Y") &&
                                                (feederSetDesign.nMeterPtRRegisterStatus === "Y" && feederSetDesign.nMeterPtYRegisterStatus === "Y" && feederSetDesign.nMeterPtBRegisterStatus === "Y")) {
                                                feederSetDesign.nFeederStatus = true;
                                            }
                                            else {
                                                feederSetDesign.nFeederStatus = false;
                                            }
                                        }
                                    }
                                    else {
                                        if (feederSetDesign.nMeterRegisterStatus === "Y" && feederSetDesign.nMeterTestStatus === "Y" && feederSetDesign.nMeterModemTestStatus === "Y" && feederSetDesign.nMeterSilStatus === "Y") {
                                            feederSetDesign.nFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.nFeederStatus = false;
                                        }
                                    }
                                }
                                // Existing Device
                                if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
                                    if (typeof (feederSetDesign.eCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else if (feederSetDesign.eFeederVoltage >= Number(__WEBPACK_IMPORTED_MODULE_10__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_MVHV_6kV)) {
                                    if (typeof (feederSetDesign.nCheck) !== "undefined") {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eCheckRegisterStatus === "Y" && feederSetDesign.eCheckTestStatus === "Y" && feederSetDesign.eCheckModemTestStatus === "Y" && feederSetDesign.eCheckSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                    else {
                                        if ((feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") &&
                                            (feederSetDesign.eMeterCtRRegisterStatus === "Y" && feederSetDesign.eMeterCtYRegisterStatus === "Y" && feederSetDesign.eMeterCtBRegisterStatus === "Y") &&
                                            (feederSetDesign.eMeterPtRRegisterStatus === "Y" && feederSetDesign.eMeterPtYRegisterStatus === "Y" && feederSetDesign.eMeterPtBRegisterStatus === "Y")) {
                                            feederSetDesign.eFeederStatus = true;
                                        }
                                        else {
                                            feederSetDesign.eFeederStatus = false;
                                        }
                                    }
                                }
                                else {
                                    if (feederSetDesign.eMeterRegisterStatus === "Y" && feederSetDesign.eMeterTestStatus === "Y" && feederSetDesign.eMeterModemTestStatus === "Y" && feederSetDesign.eMeterSilStatus === "Y") {
                                        feederSetDesign.eFeederStatus = true;
                                    }
                                    else {
                                        feederSetDesign.eFeederStatus = false;
                                    }
                                }
                            }
                        }
                    }
                    // Collection Assetnum Details          
                    this.deviceDetails.assetnum = feederArr.multiassetlocci[i].assetnum;
                    this.deviceDetails.ta0controllingdevice = feederArr.multiassetlocci[i].ta0controllingdevice;
                    this.deviceDetails.ta0allocationtype = feederArr.multiassetlocci[i].ta0allocationtype;
                    this.deviceDetails.ta0bcrmuploadindicator = feederArr.multiassetlocci[i].ta0bcrmuploadindicator;
                    this.itemOri.json.listDevice.push(this.deviceDetails);
                    this.deviceDetails = {};
                }
            }
            if (typeof (feederSetDesign.eFeederVoltage) === 'undefined') {
                feederSetDesign.eFeederVoltage = old_voltage;
            }
            if (typeof (feederSetDesign.nFeederVoltage) === 'undefined') {
                feederSetDesign.nFeederVoltage = new_voltage;
            }
            console.log(' feeder set  : ' + JSON.stringify(feederSetDesign));
            feederArr.feederSetDesign.push(feederSetDesign);
            this.object = feederSetDesign;
            //this.feederSetArray.push(feederSetDesign);
        }
        else {
            feederArr.nFeederVoltage = this.gv.departmentCode;
            feederArr.eFeederVoltage = this.gv.departmentCode;
        }
    };
    CrimplessSealPage.prototype.triggerAllocationType = function () {
        debugger;
        var type = this.itemOri.json.worktype;
        var old_voltage = this.itemOri.json.ta0installationvoltage;
        var new_voltage = this.itemOri.json.ta0newvoltage;
        if (type === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST || type === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZINL || type === __WEBPACK_IMPORTED_MODULE_13__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZRPC) {
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
    CrimplessSealPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CrimplessSealPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-crimpless-seal',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/devices/crimpless-seal/crimpless-seal.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Crimpless Seal</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ng-container *ngIf="mainPage == true">\n    <ion-segment [(ngModel)]="refSegment" style="padding-bottom: 10px;">\n      <ion-segment-button value="before">Before</ion-segment-button>\n      <ion-segment-button value="after">After</ion-segment-button>\n    </ion-segment>\n\n    <span [ngSwitch]="refSegment">\n      <span *ngSwitchCase="\'before\'">\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF1"\n                (click)="addTtb(\'f1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF1Array.length <= 1" color="primary">Test Block F1</ion-label>\n                <ion-label *ngIf="ttbF1Array.length > 1" color="primary">Test Block F1 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter"  \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ttbF1Array,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF2"\n                (click)="addTtb(\'f2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF2Array.length <= 1" color="primary">Test Block F2</ion-label>\n                <ion-label *ngIf="ttbF2Array.length > 1" color="primary">Test Block F2 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ttbF2Array,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF3"\n                (click)="addTtb(\'f3\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF3Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF3Array.length <= 1" color="primary">Test Block F3</ion-label>\n                <ion-label *ngIf="ttbF3Array.length > 1" color="primary">Test Block F3 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ttbF3Array,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>            \n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF1Array.length <= 1" color="primary">Meter Fuse F1</ion-label>\n                <ion-label *ngIf="sfuseF1Array.length > 1" color="primary">Meter Fuse F{{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter"  \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(sfuseF1Array,j,2, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Fuse/Voltage F2 Slider\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF2Array.length <= 1" color="primary">Fuse/Voltage F2 Slider</ion-label>\n                <ion-label *ngIf="sfuseF2Array.length > 1" color="primary">Fuse/Voltage F2 Slider - {{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF1Array,j,2, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF3Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF3Array.length <= 1" color="primary">Meter Fuse F1</ion-label>\n                <ion-label *ngIf="sfuseF3Array.length > 1" color="primary">Meter Fuse F{{ j + 1}}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF3Array,j,2, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Panel Door Kiosk 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk1"\n                (click)="addMeterKiosk(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterKiosk1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterKiosk1Array.length <= 1" color="primary">Panel Door Kiosk 1</ion-label>\n                <ion-label *ngIf="meterKiosk1Array.length > 1" color="primary">Panel Door Kiosk 1 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrKiosk1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter"  \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterKiosk(j,\'1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Panel Door Kiosk 2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk2"\n                (click)="addMeterKiosk(\'2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterKiosk2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterKiosk2Array.length <= 1" color="primary">Panel Door Kiosk 2</ion-label>\n                <ion-label *ngIf="meterKiosk2Array.length > 1" color="primary">Meter Kiosk 2 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrKiosk2\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterKiosk(j,\'2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox1"\n                (click)="addMeterTestBox(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterTestBoxArray1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterTestBoxArray1.length <= 1" color="primary">Meter Test Box 1</ion-label>\n                <ion-label *ngIf="meterTestBoxArray1.length > 1" color="primary">Meter Test Box 1 {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrTestBox1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterTestBoxArray1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterTestBox(j,\'1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!--\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox2"\n                (click)="addMeterTestBox(\'2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterTestBoxArray2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterTestBoxArray2.length <= 1" color="primary">Meter Test Box 2</ion-label>\n                <ion-label *ngIf="meterTestBoxArray2.length > 1" color="primary">Meter Test Box 2 {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrTestBox2\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(meterTestBoxArray2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterTestBox(j,\'2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF1.length <= 1" color="primary">CT Chamber F1</ion-label>\n                <ion-label *ngIf="ctChamberArrayF1.length > 1" color="primary">CT Chamber F{{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ctChamberArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">              \n              <button ion-button (click)="deleteCtChamber(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary">Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF2.length <= 1" color="primary">CT Chamber F2</ion-label>\n                <ion-label *ngIf="ctChamberArrayF2.length > 1" color="primary">CT Chamber F2 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctChamberArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteCtChamber(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF3.length <= 1" color="primary">CT Chamber F3</ion-label>\n                <ion-label *ngIf="ctChamberArrayF3.length > 1" color="primary">CT Chamber F3 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctChamberArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteCtChamber(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF1.length <= 1" color="primary">PT Chamber F1</ion-label>\n                <ion-label *ngIf="ptChamberArrayF1.length > 1" color="primary">PT Chamber F1 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ptChamberArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary">Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF2.length <= 1" color="primary">PT Chamber F2</ion-label>\n                <ion-label *ngIf="ptChamberArrayF2.length > 1" color="primary">PT Chamber F{{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptChamberArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF3.length <= 1" color="primary">PT Chamber F3</ion-label>\n                <ion-label *ngIf="ptChamberArrayF3.length > 1" color="primary">PT Chamber F3 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptChamberArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF1.length <= 1" color="primary">Termination Box F1</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF1.length > 1" color="primary">Termination Box F{{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxf1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n             <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">             \n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>              \n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF2.length <= 1" color="primary">Termination Box F2</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF2.length > 1" color="primary">Termination Box F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxF2\', j,\'before\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF3.length <= 1" color="primary">Termination Box F3</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF3.length > 1" color="primary">Termination Box F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxF3\', j,\'before\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF1.length <= 1" color="primary">Marshalling Box F1</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF1.length > 1" color="primary">Marshalling Box F1 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <!--\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF2.length <= 1" color="primary">Marshalling Box F2</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF2.length > 1" color="primary">Marshalling Box F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF3.length <= 1" color="primary">Marshalling Box F3</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF3.length > 1" color="primary">Marshalling Box F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n-->\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF1.length <= 1" color="primary">PT Secondary Fuse F1</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF1.length > 1" color="primary">PT Secondary Fuse F{{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF1\', j,\'before\')" clearInput [readonly]="true" placeholder="Please Enter" \n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <!--\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF1,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n              -->\n            </ion-col>\n            <!--\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n            -->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-8 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of rr" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n<!--\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF2.length <= 1" color="primary">PT Secondary Fuse F2</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF2.length > 1" color="primary">PT Secondary Fuse F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF2\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF2,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF3.length <= 1" color="primary">PT Secondary Fuse F3</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF3.length > 1" color="primary">PT Secondary Fuse F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF3\', j,\'before\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF3,j,1, \'before\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span> \n-->\n      \n\n        <!-- </span> -->\n\n        <!-- <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;" (click)="resetSealSection()">Reset</button>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider> -->\n        \n      </span>\n\n      <!-- After Section Starts -->\n      <span *ngSwitchCase="\'after\'">\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-12 col-sm-12 col-md-9 style="word-wrap:  break-all; padding-left: 5px;"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="ribbon"></ion-icon>&nbsp; <strong>SEAL NO</strong>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 style="word-wrap: break-all; padding-left: 5px;">\n              <button ion-button round mode="md" style="float: center;"\n                (click)="resetSealSection(\'mainPage\')">Reset</button>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right"\n              (click)="showSealNoSection(1)">\n              <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showSealNo"></ion-icon>\n              <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showSealNo"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF1"\n                (click)="addTtb(\'f1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF1Array.length <= 1" color="primary">Test Block F1</ion-label>\n                <ion-label *ngIf="ttbF1Array.length > 1" color="primary">Test Block F1 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput\n                  placeholder="Please Enter" [disabled]="checkingFieldDisabledF1(attr, \'seal\') ? true : false"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbF1Array,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>                             \n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF2"\n                (click)="addTtb(\'f2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF2NewArray; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF2Array.length <= 1" color="primary">Test Block F2</ion-label>\n                <ion-label *ngIf="ttbF2Array.length > 1" color="primary">Test Block F2 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput\n                  placeholder="Please Enter" [disabled]="checkingFieldDisabledF2(attr, \'seal\') ? true : false"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbF2Array,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>        \n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Test Block F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTtbF3"\n                (click)="addTtb(\'f3\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ttbF3NewArray; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ttbF3Array.length <= 1" color="primary">Test Block F3</ion-label>\n                <ion-label *ngIf="ttbF3Array.length > 1" color="primary">Test Block F3 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>           \n            <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30" clearInput\n                  placeholder="Please Enter" [disabled]="checkingFieldDisabledF3(attr, \'seal\') ? true : false"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ttbF3Array,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTtb(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <!-- <ion-input [(ngModel)]="attr.ta0sealcondition" type="text" maxlength="30" clearInput\n                  placeholder="Please Enter" [disabled]="attr.ta0sealcondition ? true : false"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || attr.ta0sealcondition == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input> -->\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                  {{ key.json.description }}\n                </ion-option>\n              </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-7 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealremreason" type="text" maxlength="30" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || attr.ta0sealremreason == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Fuse/Voltage F1 Slider\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddSfuseF1"\n                (click)="addSfuseF1(\'f1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF1NewArray; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF1Array.length <= 1" color="primary">Meter Fuse F1</ion-label>\n                <ion-label *ngIf="sfuseF1Array.length > 1" color="primary">Meter Fuse F{{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF1Array,j,2, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Fuse/Voltage F2 Slider\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddSfuseF1"\n            (click)="addSfuseF1(\'f1\')">\n            <ion-icon ios="md-add" md="md-add"></ion-icon>\n          </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF2Array.length <= 1" color="primary">Fuse/Voltage F2 Slider</ion-label>\n                <ion-label *ngIf="sfuseF2Array.length > 1" color="primary">Fuse/Voltage F2 Slider - {{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF1Array,j,2, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Fuse/Voltage F3 Slider\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddSfuseF1"\n        (click)="addSfuseF1(\'f1\')">\n        <ion-icon ios="md-add" md="md-add"></ion-icon>\n      </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of sfuseF3Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="sfuseF3Array.length <= 1" color="primary">Fuse/Voltage F3 Slider</ion-label>\n                <ion-label *ngIf="sfuseF3Array.length > 1" color="primary">Fuse/Voltage F3 Slider - {{ j + 1\n                  }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0stickernum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SFuse3\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0stickernum == \'\' || attr.ta0stickernum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(sfuseF3Array,j,2, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteSfuse(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Kiosk 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk1"\n                (click)="addMeterKiosk(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterKiosk1Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterKiosk1Array.length <= 1" color="primary">Meter Kiosk_1</ion-label>\n                <ion-label *ngIf="meterKiosk1Array.length > 1" color="primary">Meter Kiosk_1 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrKiosk1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterKiosk(j,\'1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Kiosk 2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterKiosk2"\n                (click)="addMeterKiosk(\'2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterKiosk2Array; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterKiosk2Array.length <= 1" color="primary">Meter Kiosk_2</ion-label>\n                <ion-label *ngIf="meterKiosk2Array.length > 1" color="primary">Meter Kiosk_2 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrKiosk2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterKioskArray,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterKiosk(j,\'2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox1"\n                (click)="addMeterTestBox(\'1\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterTestBoxArray1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterTestBoxArray1.length <= 1" color="primary">Meter Test Box_1</ion-label>\n                <ion-label *ngIf="meterTestBoxArray1.length > 1" color="primary">Meter Test Box_1 -{{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrTestBox1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterTestBoxArray1,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterTestBox(j,\'1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row aling-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Meter Test Box 2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMeterTestBox2"\n                (click)="addMeterTestBox(\'2\')">\n                <ion-icon ios="md-add" md="md-add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of meterTestBoxArray2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="meterTestBoxArray2.length <= 1" color="primary">Meter Test Box_2</ion-label>\n                <ion-label *ngIf="meterTestBoxArray2.length > 1" color="primary">Meter Test Box_2 -{{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'mtrTestBox2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(meterTestBoxArray2,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMeterTestBox(j,\'2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddCtChamber"\n          (click)="addCtChamber()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF1.length <= 1" color="primary">CT Chamber F1</ion-label>\n                <ion-label *ngIf="ctChamberArrayF1.length > 1" color="primary">CT Chamber F1 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctChamberArrayF1,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteCtChamber(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddCtChamber"\n          (click)="addCtChamber()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF2.length <= 1" color="primary">CT Chamber F2</ion-label>\n                <ion-label *ngIf="ctChamberArrayF2.length > 1" color="primary">CT Chamber F2 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctChamberArrayF2,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteCtChamber(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              CT Chamber F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddCtChamber"\n          (click)="addCtChamber()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ctChamberArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ctChamberArrayF3.length <= 1" color="primary">CT Chamber F3</ion-label>\n                <ion-label *ngIf="ctChamberArrayF3.length > 1" color="primary">CT Chamber F3 - {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ctChamberF3\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ctChamberArrayF3,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteCtChamber(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddPtChamber"\n          (click)="addPtChamber()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF1.length <= 1" color="primary">PT Chamber F1</ion-label>\n                <ion-label *ngIf="ptChamberArrayF1.length > 1" color="primary">PT Chamber F1 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptChamberArrayF1,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f1\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddPtChamber"\n          (click)="addPtChamber()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF2.length <= 1" color="primary">PT Chamber F2</ion-label>\n                <ion-label *ngIf="ptChamberArrayF2.length > 1" color="primary">PT Chamber F2 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptChamberArrayF2,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f2\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Chamber F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddPtChamber"\n          (click)="addPtChamber()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptChamberArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptChamberArrayF3.length <= 1" color="primary">PT Chamber F3</ion-label>\n                <ion-label *ngIf="ptChamberArrayF3.length > 1" color="primary">PT Chamber F3 {{ j + 1 }}</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptChamberf3\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptChamberArrayF3,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtChamber(j,\'f3\')">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalBox"\n          (click)="addTerminalBox()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF1.length <= 1" color="primary">Termination Box F1</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF1.length > 1" color="primary">Termination Box F1 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxf1\', j,\'after\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF1,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalBox"\n          (click)="addTerminalBox()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF2.length <= 1" color="primary">Termination Box F2</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF2.length > 1" color="primary">Termination Box F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxF2\', j,\'after\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF2,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Termination Box F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddTerminalBox"\n          (click)="addTerminalBox()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of terminalBoxArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="terminalBoxArrayF3.length <= 1" color="primary">Termination Box F3</ion-label>\n                <ion-label *ngIf="terminalBoxArrayF3.length > 1" color="primary">Termination Box F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SmtrTerminalBoxF3\', j,\'after\')" clearInput\n                  placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(terminalBoxArrayF3,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteTerminalBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMarshallingBox"\n          (click)="addMarshallingBox()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF1.length <= 1" color="primary">Marshalling Box F1</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF1.length > 1" color="primary">Marshalling Box F1 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF1,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMarshallingBox"\n          (click)="addMarshallingBox()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF2.length <= 1" color="primary">Marshalling Box F2</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF2.length > 1" color="primary">Marshalling Box F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF2,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              Marshalling Box F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;" *ngIf="showAddMarshallingBox"\n          (click)="addMarshallingBox()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of marshallingBoxArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="marshallingBoxArrayF3.length <= 1" color="primary">Marshalling Box F3</ion-label>\n                <ion-label *ngIf="marshallingBoxArrayF3.length > 1" color="primary">Marshalling Box F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'SMarshBoxF3\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(marshallingBoxArrayF3,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deleteMarshallingBox(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F1\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;"\n          *ngIf="showAddPtSecondaryFuse" (click)="addPtSecondaryFuse()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF1; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF1.length <= 1" color="primary">PT Secondary Fuse F1</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF1.length > 1" color="primary">PT Secondary Fuse F1 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF1\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF1,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F2\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;"\n          *ngIf="showAddPtSecondaryFuse" (click)="addPtSecondaryFuse()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF2; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF2.length <= 1" color="primary">PT Secondary Fuse F2</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF2.length > 1" color="primary">PT Secondary Fuse F2 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF2\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF2,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n        <ion-item-divider color="light">\n          <ion-row align-items-center>\n            <ion-col col-10 col-sm-10 col-md-10 style="word-wrap:  break-all; padding-left: 0px;">\n              PT Secondary Fuse F3\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align:right">\n              <!-- <button ion-button small icon-only round mode="md" style="float: right;"\n          *ngIf="showAddPtSecondaryFuse" (click)="addPtSecondaryFuse()">\n          <ion-icon ios="md-add" md="md-add"></ion-icon>\n        </button> -->\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <span style="word-wrap:  break-all; padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"\n          *ngFor="let attr of ptSecondaryFuseArrayF3; let j = index">\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item no-lines>\n                <ion-label *ngIf="ptSecondaryFuseArrayF3.length <= 1" color="primary">PT Secondary Fuse F3</ion-label>\n                <ion-label *ngIf="ptSecondaryFuseArrayF3.length > 1" color="primary">PT Secondary Fuse F3 - {{ j + 1 }}\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <!-- <ion-item no-lines>\n                <ion-checkbox [(ngModel)]="attr.ta0removeind">\n                </ion-checkbox>\n              </ion-item> -->\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input [(ngModel)]="attr.ta0sealnum" type="text" maxlength="30"\n                  (keyup)="userInputLengthNum($event,\'ptSecFuseF3\', j,\'after\')" clearInput placeholder="Please Enter"\n                  [ngClass]="(attr.ta0sealnum == \'\' || attr.ta0sealnum == undefined && !validateInput || attr.ta0error) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;">\n              <button ion-button (click)="barcodeScan(ptSecondaryFuseArrayF3,j,1, \'after\')">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-1 style="word-wrap:  break-all; padding-left: 5px;" *ngIf="j > 0">\n              <button ion-button (click)="deletePtSecondaryFuse(j)">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3>\n              <ion-item no-lines>\n                <ion-label color="primary">Condition</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1>\n              <ion-item no-lines>\n\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6>\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealcondition" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealcondition == \'\' || (attr.ta0sealcondition == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-3 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item no-lines>\n                <ion-label color="primary"> Removal Reason</ion-label>\n                <!-- <ion-label *ngIf="ttbF1Array.length > 1" color="primary"> {{sealDetail.ta0seallocation_description}} - {{ j + 1 }}</ion-label> -->\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-1 *ngIf="attr.ta0removeind">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-6 style="word-wrap:  break-all; padding-left: 5px;"\n              *ngIf="attr.ta0removeind">\n              <ion-item>\n                <ion-select [(ngModel)]="attr.ta0sealremreason" interface="popover" placeholder="Please select value"\n                  [ngClass]="(attr.ta0sealremreason == \'\' || (attr.ta0sealremreason == undefined && !validateInput) || attr.ta0error ) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  <ion-option *ngFor="let key of sc" value="{{ key.json.value }}">\n                    {{ key.json.description }}\n                  </ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </span>\n\n\n      </span>\n    </span>\n  </ng-container>\n</ion-content>\n\n\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveDeviceDetails()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/devices/crimpless-seal/crimpless-seal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_7__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_11__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], CrimplessSealPage);
    return CrimplessSealPage;
}());

//# sourceMappingURL=crimpless-seal.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrimplessSealPageModule", function() { return CrimplessSealPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crimpless_seal__ = __webpack_require__(1081);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrimplessSealPageModule = /** @class */ (function () {
    function CrimplessSealPageModule() {
    }
    CrimplessSealPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crimpless_seal__["a" /* CrimplessSealPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__crimpless_seal__["a" /* CrimplessSealPage */]),
            ],
        })
    ], CrimplessSealPageModule);
    return CrimplessSealPageModule;
}());

//# sourceMappingURL=crimpless-seal.module.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiAssetLocci; });
var MultiAssetLocci = /** @class */ (function () {
    function MultiAssetLocci() {
        this.ta0existingassets = false;
        this.loc_validate = false;
        this.ta0registerstatus = 'N';
        this.ta0testingstatus = 'N';
        this.ta0silstickerstatus = 'N';
        this.loc_ta0registers_completed = false;
        this.loc_ta0testings_flag = false;
        this.loc_ta0silStickers_flag = false;
        this.loc_ta0registers_haveChange = false;
        this.loc_ta0testings_haveChange = false;
        this.loc_ta0silStickers_haveChange = false;
    }
    return MultiAssetLocci;
}());

//# sourceMappingURL=MultiAssetLocci.js.map

/***/ }),

/***/ 948:
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

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickerInfo; });
var StickerInfo = /** @class */ (function () {
    function StickerInfo() {
        this.ta0removeind = false;
        this.loc_ta0removeind = false;
    }
    return StickerInfo;
}());

//# sourceMappingURL=StickerInfo.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeederSetDesign; });
var FeederSetDesign = /** @class */ (function () {
    function FeederSetDesign() {
        this.nFeederStatus = false;
        this.eFeederStatus = false;
        this.nMeterFunctionClass = '';
        this.nMeterRegisterStatus = 'Y';
        this.nMeterSilStatus = 'Y';
        this.nMeterTestStatus = 'Y';
        this.nMeterModemRegisterStatus = 'Y';
        this.nMeterModemTestStatus = 'Y';
        this.nMeterSimRegisterStatus = 'Y';
        this.nMeterSimTestStatus = 'Y';
        this.nMainCommRegisterStatus = 'Y';
        this.nMainCommTestStatus = 'Y';
        this.nCheckFunctionClass = '';
        this.nCheckRegisterStatus = 'Y';
        this.nCheckSilStatus = 'Y';
        this.nCheckTestStatus = 'Y';
        this.nCheckModemRegisterStatus = 'Y';
        this.nCheckModemTestStatus = 'Y';
        this.nCheckSimRegisterStatus = 'Y';
        this.nCheckSimTestStatus = 'Y';
        this.nCheckCommRegisterStatus = 'Y';
        this.nCheckCommTestStatus = 'Y';
        this.nMeterCtRRegisterStatus = 'Y';
        this.nMeterCtYRegisterStatus = 'Y';
        this.nMeterCtBRegisterStatus = 'Y';
        this.nMeterPtRRegisterStatus = 'Y';
        this.nMeterPtRInstallInd = 'Y';
        this.nMeterPtYRegisterStatus = 'Y';
        this.nMeterPtBRegisterStatus = 'Y';
        this.eMeterFunctionClass = '';
        this.eMeterRegisterStatus = 'Y';
        this.eMeterSilStatus = 'Y';
        this.eMeterTestStatus = 'Y';
        this.eMeterModemRegisterStatus = 'Y';
        this.eMeterModemTestStatus = 'Y';
        this.eMeterSimRegisterStatus = 'Y';
        this.eMeterSimTestStatus = 'Y';
        this.eMainCommRegisterStatus = 'Y';
        this.eMainCommTestStatus = 'Y';
        this.eCheckFunctionClass = '';
        this.eCheckRegisterStatus = 'Y';
        this.eCheckSilStatus = 'Y';
        this.eCheckTestStatus = 'Y';
        this.eCheckModemRegisterStatus = 'Y';
        this.eCheckModemTestStatus = 'Y';
        this.eCheckSimRegisterStatus = 'Y';
        this.eCheckSimTestStatus = 'Y';
        this.eCheckCommRegisterStatus = 'Y';
        this.eCheckCommTestStatus = 'Y';
        this.eMeterCtRRegisterStatus = 'Y';
        this.eMeterCtYRegisterStatus = 'Y';
        this.eMeterCtBRegisterStatus = 'Y';
        this.eMeterPtRRegisterStatus = 'Y';
        this.eMeterPtYRegisterStatus = 'Y';
        this.eMeterPtBRegisterStatus = 'Y';
    }
    return FeederSetDesign;
}());

//# sourceMappingURL=feederSetDesign.js.map

/***/ })

});
//# sourceMappingURL=8.js.map