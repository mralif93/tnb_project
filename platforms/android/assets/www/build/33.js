webpackJsonp([33],{

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LpcLvInspectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_toaster_notifications_toaster_notifications__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LpcLvInspectPage = /** @class */ (function () {
    function LpcLvInspectPage(navCtrl, appCtrl, params, toastCtrl, gf, dataService, jsonStore, gv, alertCtrl, loadingCtrl, toastNoti) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.gf = gf;
        this.dataService = dataService;
        this.jsonStore = jsonStore;
        this.gv = gv;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastNoti = toastNoti;
        this.isReadonly = true;
        this.check = true;
        this.validationNegVal = true;
        this.buttonLVSave = false;
        this.validateRed = true;
        this.validateYellow = true;
        this.validateBlue = true;
        this.validateAccuracyTestNoSiri = true;
        this.validateAccuracyRed = true;
        this.validateAccuracyYellow = true;
        this.validateAccuracyBlue = true;
        this.validateMainCheck = true;
        this.validateRotationPhase = true;
        this.validateTrRemark = true;
        this.validateAtRemark = true;
        this.validatePtRemark = true;
        this.validateRpRemark = true;
        this.flagCheck = false;
        this.flagCheck2 = false;
        this.flagCheck3 = false;
        this.showMainMeter = false;
        // Hide/Show
        this.showTransformaterRatio = true;
        this.showAccuracyTest = true;
        this.showPortableTestEquipment = true;
        this.showRotationPhase = true;
        // Common Not Applicable...
        this.ta0na = 'N';
        this.showAllCommonRemarkDetails = true;
        this.showContainRemak = false;
        this.itemOri = this.params.get("paramObj");
        this.fIndex = this.params.get("fIndex");
        this.maIndex = this.params.get("maIndex");
        // Clone Data
        this.item = JSON.parse(JSON.stringify(this.itemOri));
        this.allocationType = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0allocationtype;
        console.log("Allocation Type: " + this.allocationType);
        this.transformaterRatio = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.accuracyTest = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.portableTestEquipment = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        this.rotationPhase = new __WEBPACK_IMPORTED_MODULE_2__pojo_DeviceTest__["a" /* DeviceTest */]();
        switch (this.allocationType) {
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_MAIN_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_FEEDER_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_SUB_FEEDER_METER: {
                console.log("Main Meter Section...");
                this.showMainMeter = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_FEEDER_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_METER:
            case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DEV_ALLOC_CHECK_SUB_FEEDER_METER: {
                console.log("Check Meter Section...");
                this.showMainMeter = false;
                break;
            }
        }
        // Read ta0testings if exist
        if (this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].hasOwnProperty('ta0testdetail')) {
            console.log("Data Exists: " + JSON.stringify(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail));
            // Get Total Length of Array
            //console.log("Length: " + this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testings.length);
            var testLength = Number(this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.length);
            for (var i = 0; i < testLength; i++) {
                var ta0testdetail = this.item.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail[i];
                var type = ta0testdetail.ta0testtype;
                var applicable = ta0testdetail.ta0na;
                console.log("TYPE: " + type);
                switch (type) {
                    case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CTFC: {
                        this.transformaterRatio = ta0testdetail;
                        if (applicable == true) {
                            this.transformaterRatio.loc_test_ta0na = "Y";
                        }
                        else {
                            this.transformaterRatio.loc_test_ta0na = "N";
                        }
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT: {
                        this.accuracyTest = ta0testdetail;
                        if (applicable == true) {
                            this.accuracyTest.loc_test_ta0na = "Y";
                        }
                        else {
                            this.accuracyTest.loc_test_ta0na = "N";
                        }
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REGT: {
                        this.portableTestEquipment = ta0testdetail;
                        if (applicable == true) {
                            this.portableTestEquipment.loc_test_ta0na = "Y";
                        }
                        else {
                            this.portableTestEquipment.loc_test_ta0na = "N";
                        }
                        break;
                    }
                    case __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT: {
                        this.rotationPhase = ta0testdetail;
                        if (applicable == true) {
                            this.rotationPhase.loc_test_ta0na = "Y";
                        }
                        else {
                            this.rotationPhase.loc_test_ta0na = "N";
                        }
                        break;
                    }
                } // end switch
            } // end for
        }
        else {
            // Set ta0na = true as default for display test form
            // this.transformaterRatio.ta0na = true;
            // this.accuracyTest.ta0na = true;
            // this.portableTestEquipment.ta0na = true;
            // this.rotationPhase.ta0na = true; 
        } // end if
        //console.log("DATA: " + JSON.stringify(this.item));
        //console.log("INFO: " + this.validateMainCurrentRed);
    }
    LpcLvInspectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LpcLvInspectPage');
    };
    LpcLvInspectPage.prototype.notiToast = function () {
        this.toastNoti.success();
    };
    LpcLvInspectPage.prototype.checkPhaseRotation = function (eventVal, key) {
        var RexExp = /^(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-Za-z]*)?$/;
        var newValue = eventVal.target.value;
        var regExp = new RegExp(RexExp);
        var newVal2;
        var newValSlice;
        if (!RexExp.test(newValue)) {
            newVal2 = newValue.substr(0, newValue.length - 1);
            eventVal.target.value = newVal2;
            newValSlice = eventVal.target.value;
        }
        else {
            newValSlice = eventVal.target.value;
        }
        switch (key) {
            case 'phaseRotation':
                this.rotationPhase.ta0ph_rotation = newValSlice;
        }
    };
    //(Ameer) Only allow negative value sign
    //Edited by Ameer (11/10/2018 - 1.15 p.m)
    LpcLvInspectPage.prototype.negativeVlueInput = function (event, keyString) {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = event.target.value;
        var arrayBeforeDecimal = [];
        var splitDecimalPoint;
        var valueAfterDot = '';
        var valueBeforeDot = "";
        var afterDecimalValueSlice;
        var beforeDecimalValueSlice;
        var checkFlag = false;
        var newValSlice;
        var arraySplitBeforeDecimal = [];
        var arrayValueAfterDecimal = [];
        var regExp = new RegExp(NUMBER_REGEXP);
        //Check seperate each value input one by one into array
        for (var i = 0; i < newValue.length; i++) {
            if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
                arrayBeforeDecimal.push(newValue.charAt(i));
            }
        }
        if (newValue.includes(".")) {
            splitDecimalPoint = newValue.split(".");
            for (var a = 1; a < splitDecimalPoint.length; a++) {
                for (var b = 0; b < splitDecimalPoint[a].length; b++) {
                    arrayValueAfterDecimal.push(splitDecimalPoint[a].charAt(b));
                }
            } // end for loop for array after decimal value
            if (arrayValueAfterDecimal.length > 3) {
                for (var c = 0; c < arrayValueAfterDecimal.length; c++) {
                    if (regExp.test(arrayValueAfterDecimal[c])) {
                        valueAfterDot += arrayValueAfterDecimal[c];
                    }
                } //end Loop for checking value
                if (valueAfterDot.length > 3) {
                    afterDecimalValueSlice = valueAfterDot.substr(0, valueAfterDot.length - 1);
                }
                else {
                    afterDecimalValueSlice = valueAfterDot;
                }
            } // Checking value after decimal if more than maximum input allow
            else if (arrayValueAfterDecimal.length < 3 || arrayValueAfterDecimal.length == 3) {
                for (var d = 0; d < arrayValueAfterDecimal.length; d++) {
                    if (regExp.test(arrayValueAfterDecimal[d])) {
                        valueAfterDot += arrayValueAfterDecimal[d];
                        afterDecimalValueSlice = valueAfterDot;
                    }
                } // end for loop checking each value
            } // End checking after decimal is not more than maximmum input allow
            for (var j = 0; j < splitDecimalPoint[0].length; j++) {
                arraySplitBeforeDecimal.push(splitDecimalPoint[0].charAt(j));
            }
            if (arraySplitBeforeDecimal.length > 6) {
                for (var e = 0; e < arraySplitBeforeDecimal.length; e++) {
                    if (regExp.test(arraySplitBeforeDecimal[e])) {
                        valueBeforeDot += arraySplitBeforeDecimal[e];
                    }
                }
                if (valueBeforeDot.length > 6) {
                    valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                    beforeDecimalValueSlice = valueBeforeDot;
                    newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                }
                else {
                    beforeDecimalValueSlice = valueBeforeDot;
                    newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                }
            } // check if before decimal more than maximum input
            else if (arraySplitBeforeDecimal.length < 6 || arraySplitBeforeDecimal.length === 6) {
                for (var f = 0; f < arraySplitBeforeDecimal.length; f++) {
                    if (regExp.test(arraySplitBeforeDecimal[f])) {
                        valueBeforeDot += arraySplitBeforeDecimal[f];
                        beforeDecimalValueSlice = valueBeforeDot;
                    }
                } // end loop
                if (typeof (afterDecimalValueSlice) !== 'undefined') {
                    newValSlice = beforeDecimalValueSlice + "." + afterDecimalValueSlice;
                }
                else {
                    newValSlice = beforeDecimalValueSlice + ".";
                }
            } // end if condition checking value before decimal less than allow maximum input
            checkFlag = true;
        }
        if (checkFlag === false) {
            if (arrayBeforeDecimal.length > 5) {
                for (var g = 0; g < arrayBeforeDecimal.length; g++) {
                    if (regExp.test(arrayBeforeDecimal[g])) {
                        valueBeforeDot += arrayBeforeDecimal[g];
                    }
                }
                if (newValue.includes("-")) {
                    if (valueBeforeDot.length > 6) {
                        newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                    }
                    else if (valueBeforeDot.length < 6 || valueBeforeDot.length === 6) {
                        //console.log('Amount of negative appear', valueBeforeDot.split('-').length - 1);
                        if (valueBeforeDot.includes('-')) {
                            var negativeSign;
                            negativeSign = valueBeforeDot.split('-').length - 1;
                            if (negativeSign > 1) {
                                var negCheckChar = new RegExp("^[0-9.]+$");
                                var arrayNeg = [];
                                var valueNegative = '';
                                for (var h = 0; h < valueBeforeDot.length; h++) {
                                    arrayNeg.push(valueBeforeDot.charAt(h));
                                }
                                for (var m = 1; m < arrayNeg.length; m++) {
                                    if (negCheckChar.test(arrayNeg[m])) {
                                        valueNegative += arrayNeg[m];
                                    }
                                }
                                newValSlice = arrayNeg[0] + valueNegative;
                            }
                            else {
                                newValSlice = valueBeforeDot;
                            }
                        }
                        else {
                            newValSlice = valueBeforeDot;
                        }
                    }
                }
                else {
                    newValSlice = valueBeforeDot.substr(0, valueBeforeDot.length - 1);
                }
            } // end if before decimal more than maximum input
            else if (arrayBeforeDecimal.length < 5 || arrayBeforeDecimal.length === 5) {
                for (var h = 0; h < arrayBeforeDecimal.length; h++) {
                    if (regExp.test(arrayBeforeDecimal[h])) {
                        valueBeforeDot += arrayBeforeDecimal[h];
                    }
                }
                if (valueBeforeDot.includes('-')) {
                    var negativeSign;
                    negativeSign = valueBeforeDot.split('-').length - 1;
                    if (negativeSign > 1) {
                        var negCheckChar = new RegExp("^[0-9.]+$");
                        var arrayNeg = [];
                        var valueNegative = '';
                        for (var h = 0; h < valueBeforeDot.length; h++) {
                            arrayNeg.push(valueBeforeDot.charAt(h));
                        }
                        for (var m = 1; m < arrayNeg.length; m++) {
                            if (negCheckChar.test(arrayNeg[m])) {
                                valueNegative += arrayNeg[m];
                            }
                        }
                        newValSlice = arrayNeg[0] + valueNegative;
                    }
                    else {
                        newValSlice = valueBeforeDot;
                    }
                }
                else {
                    newValSlice = valueBeforeDot;
                }
            }
        }
        switch (keyString) {
            case 'error1':
                this.accuracyTest.ta0at_test1 = newValSlice;
                break;
            case 'error2':
                this.accuracyTest.ta0at_test2 = newValSlice;
                break;
            case 'error3':
                this.accuracyTest.ta0at_test3 = newValSlice;
                break;
            case 'error':
                this.accuracyTest.ta0at_avg = newValSlice;
                break;
        }
    };
    /**
     *
     * @param eventVal
     * @param keyString
     * Created: Ameer
     * Date : 10/12/2018
     */
    LpcLvInspectPage.prototype.controlUserInputPositive = function (eventVal, keyString) {
        var NUMBER_REGEXP = /^(\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var arrayBeforeDecimal = [];
        var arrayAfterDecimal = [];
        var arraySplitBeforeDecimal = [];
        var valueAfterDecimal = '';
        var valueBeforeDecimal = '';
        var cutValueBeforeDecimal = '';
        var cutValueAfterDecimal = '';
        var splitValue;
        var newValSlice;
        var checkFlag = false;
        for (var i = 0; i < newValue.length; i++) {
            if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
                arrayBeforeDecimal.push(newValue.charAt(i));
            }
        }
        if (newValue.includes(".")) {
            splitValue = newValue.split(".");
            for (var a = 1; a < splitValue.length; a++) {
                for (var g = 0; g < splitValue[a].length; g++) {
                    arrayAfterDecimal.push(splitValue[a].charAt(g));
                }
                for (var b = 0; b < arrayAfterDecimal.length; b++) {
                    if (regExp.test(arrayAfterDecimal[b])) {
                        valueAfterDecimal += arrayAfterDecimal[b];
                        cutValueAfterDecimal = valueAfterDecimal;
                    }
                }
                if (valueAfterDecimal.length > 3) {
                    cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
                }
            }
            for (var c = 0; c < splitValue[0].length; c++) {
                arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
            }
            for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
                if (regExp.test(arraySplitBeforeDecimal[d])) {
                    cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
                }
            }
            if (cutValueBeforeDecimal.length > 5) {
                valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
            }
            else {
                newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
            }
            checkFlag = true;
        } // End for Checking that consist of Decimal Value
        if (checkFlag === false) {
            for (var f = 0; f < arrayBeforeDecimal.length; f++) {
                if (newValue.length > 5) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    if (cutValueBeforeDecimal.length > 5) {
                        newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                    }
                    else {
                        newValSlice = cutValueBeforeDecimal;
                    }
                }
                else if (newValue.length < 5 || newValue.length === 5) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    newValSlice = cutValueBeforeDecimal;
                }
            }
        } // end If condition Check Flag
        switch (keyString) {
            case 'voltageRed':
                this.accuracyTest.ta0at_voltage_r = newValSlice;
                break;
            case 'voltageYellow':
                this.accuracyTest.ta0at_voltage_y = newValSlice;
                break;
            case 'voltageBlue':
                this.accuracyTest.ta0at_voltage_b = newValSlice;
                break;
            case 'CrrRed':
                this.accuracyTest.ta0at_current_r = newValSlice;
                break;
            case 'CrrYellow':
                this.accuracyTest.ta0at_current_y = newValSlice;
                break;
            case 'CrrBlue':
                this.accuracyTest.ta0at_current_b = newValSlice;
                break;
        }
    };
    // (Ameer) allow positve value input only
    // Updated (Ameer 4/10/2018 - 11.15 p.m)
    LpcLvInspectPage.prototype.controlUserInputLength = function (eventVal, keyString) {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,5}|(\d{0,5}(\.\d{0,3})))?$/;
        var newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var arrayBeforeDecimal = [];
        var arrayAfterDecimal = [];
        var arraySplitBeforeDecimal = [];
        var valueAfterDecimal = '';
        var valueBeforeDecimal = '';
        var cutValueBeforeDecimal = '';
        var cutValueAfterDecimal = '';
        var splitValue;
        var newValSlice;
        var checkFlag = false;
        for (var i = 0; i < newValue.length; i++) {
            if (arrayBeforeDecimal.push(newValue.charAt(i)) == -1) {
                arrayBeforeDecimal.push(newValue.charAt(i));
            }
        }
        if (newValue.includes(".")) {
            splitValue = newValue.split(".");
            for (var a = 1; a < splitValue.length; a++) {
                for (var g = 0; g < splitValue[a].length; g++) {
                    arrayAfterDecimal.push(splitValue[a].charAt(g));
                }
                for (var b = 0; b < arrayAfterDecimal.length; b++) {
                    if (regExp.test(arrayAfterDecimal[b])) {
                        valueAfterDecimal += arrayAfterDecimal[b];
                        cutValueAfterDecimal = valueAfterDecimal;
                    }
                }
                if (valueAfterDecimal.length > 3) {
                    cutValueAfterDecimal = valueAfterDecimal.substr(0, valueAfterDecimal.length - 1);
                }
            }
            for (var c = 0; c < splitValue[0].length; c++) {
                arraySplitBeforeDecimal.push(splitValue[0].charAt(c));
            }
            for (var d = 0; d < arraySplitBeforeDecimal.length; d++) {
                if (regExp.test(arraySplitBeforeDecimal[d])) {
                    cutValueBeforeDecimal += arraySplitBeforeDecimal[d];
                }
            }
            if (cutValueBeforeDecimal.length > 5) {
                valueAfterDecimal = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                newValSlice = valueAfterDecimal + "." + cutValueAfterDecimal;
            }
            else {
                newValSlice = cutValueBeforeDecimal + "." + cutValueAfterDecimal;
            }
            checkFlag = true;
        } // End for Checking that consist of Decimal Value
        if (checkFlag === false) {
            for (var f = 0; f < arrayBeforeDecimal.length; f++) {
                if (newValue.length > 5) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    if (cutValueBeforeDecimal.length > 5) {
                        newValSlice = cutValueBeforeDecimal.substr(0, cutValueBeforeDecimal.length - 1);
                    }
                    else {
                        newValSlice = cutValueBeforeDecimal;
                    }
                }
                else if (newValue.length < 5 || newValue.length === 5) {
                    if (regExp.test(arrayBeforeDecimal[f])) {
                        cutValueBeforeDecimal += arrayBeforeDecimal[f];
                    }
                    newValSlice = cutValueBeforeDecimal;
                }
            }
        } // end If condition Check Flag
        switch (keyString) {
            case 'readingMtrEnd':
                this.portableTestEquipment.ta0reg_amf = newValSlice;
                break;
            case 'readingMeterInitial':
                this.portableTestEquipment.ta0reg_amb = newValSlice;
                break;
            case 'readingMtrFinal':
                this.portableTestEquipment.ta0reg_amc = newValSlice;
                break;
            case 'readingTestRead':
                this.portableTestEquipment.ta0reg_pteread = newValSlice;
                break;
            case 'redBusbar':
                this.transformaterRatio.ta0fc_maincurrent_bb_r = newValSlice;
                break;
            case 'yellowBusbar':
                this.transformaterRatio.ta0fc_maincurrent_bb_y = newValSlice;
                break;
            case 'busbarBlue':
                this.transformaterRatio.ta0fc_maincurrent_bb_b = newValSlice;
                break;
            case 'mainRed':
                this.transformaterRatio.ta0fc_maincurrent_dm_r = newValSlice;
                break;
            case 'mainYellow':
                this.transformaterRatio.ta0fc_maincurrent_dm_y = newValSlice;
                break;
            case 'mainBlue':
                this.transformaterRatio.ta0fc_maincurrent_dm_b = newValSlice;
                break;
            case 'dupliRed':
                this.transformaterRatio.ta0fc_dupcurrent_ct_r = newValSlice;
                break;
            case 'dupliYellow':
                this.transformaterRatio.ta0fc_dupcurrent_ct_y = newValSlice;
                break;
            case 'dupliBlue':
                this.transformaterRatio.ta0fc_dupcurrent_ct_b = newValSlice;
                break;
            case 'dupliTerRed':
                this.transformaterRatio.ta0fc_dupcurrent_tm_r = newValSlice;
                break;
            case 'dupliTerYellow':
                this.transformaterRatio.ta0fc_dupcurrent_tm_y = newValSlice;
                break;
            case 'dupliTerBlue':
                this.transformaterRatio.ta0fc_dupcurrent_tm_b = newValSlice;
                break;
            case 'pwrRed':
                this.accuracyTest.ta0at_power_r = newValSlice;
                break;
            case 'pwrYellow':
                this.accuracyTest.ta0at_power_y = newValSlice;
                break;
            case 'pwrBlue':
                this.accuracyTest.ta0at_power_b = newValSlice;
                break;
            case 'pwrFacRed':
                this.accuracyTest.ta0at_powerfactor_r = newValSlice;
                break;
            case 'pwrFacYellow':
                this.accuracyTest.ta0at_powerfactor_y = newValSlice;
                break;
            case 'pwrFacBlue':
                this.accuracyTest.ta0at_powerfactor_b = newValSlice;
                break;
            case 'readingTestError':
                this.portableTestEquipment.ta0reg_pteerror = newValSlice;
                break;
            case 'supplierRY':
                this.rotationPhase.ta0vr_ry = newValSlice;
                break;
            case 'supplierYB':
                this.rotationPhase.ta0vr_yb = newValSlice;
                break;
            case 'supplierRB':
                this.rotationPhase.ta0vr_rb = newValSlice;
                break;
            case 'supplierRN':
                this.rotationPhase.ta0vr_rn = newValSlice;
                break;
            case 'supplierYN':
                this.rotationPhase.ta0vr_yn = newValSlice;
                break;
            case 'supplierBN':
                this.rotationPhase.ta0vr_bn = newValSlice;
                break;
            case 'supplierRE':
                this.rotationPhase.ta0vr_re = newValSlice;
                break;
            case 'supplierYE':
                this.rotationPhase.ta0vr_ye = newValSlice;
                break;
            case 'supplierBE':
                this.rotationPhase.ta0vr_be = newValSlice;
                break;
            case 'supplierNE':
                this.rotationPhase.ta0vr_ne = newValSlice;
                break;
            case 'supplierPhaseRotation':
                this.rotationPhase.ta0ph_rotation = newValSlice;
                break;
        }
    };
    LpcLvInspectPage.prototype.hideShowTransformerRatioTest = function () {
        console.log('came inside to hideShowTransformerRatioTest ..' + this.transformaterRatio.loc_test_ta0na);
        if (this.transformaterRatio.loc_test_ta0na == 'Y') {
            this.transformaterRatio.ta0na = true;
            this.transformaterRatio.ta0naremarks = null;
        }
        else {
            this.transformaterRatio = {};
            this.transformaterRatio.loc_test_ta0na = 'N';
            this.transformaterRatio.ta0na = false;
        }
    };
    LpcLvInspectPage.prototype.hideShowAccuracyTest = function () {
        console.log('came inside to hideShowAccuracyTest ..' + this.accuracyTest.loc_test_ta0na);
        if (this.accuracyTest.loc_test_ta0na == 'Y') {
            this.accuracyTest.ta0na = true;
            this.accuracyTest.ta0naremarks = null;
        }
        else {
            this.accuracyTest = {};
            this.accuracyTest.loc_test_ta0na = 'N';
            this.accuracyTest.ta0na = false;
        }
    };
    LpcLvInspectPage.prototype.hideShowportableTestEquipment = function () {
        console.log('came inside to hideShowportableTestEquipment ..' + this.portableTestEquipment.loc_test_ta0na);
        if (this.portableTestEquipment.loc_test_ta0na == 'Y') {
            this.portableTestEquipment.ta0na = true;
            this.portableTestEquipment.ta0naremarks = null;
        }
        else {
            this.portableTestEquipment = {};
            this.portableTestEquipment.loc_test_ta0na = 'N';
            this.portableTestEquipment.ta0na = false;
        }
    };
    LpcLvInspectPage.prototype.hideShowrotationPhaseTest = function () {
        console.log('came inside to hideShowrotationPhaseTest ..' + this.rotationPhase.loc_test_ta0na);
        if (this.rotationPhase.loc_test_ta0na == 'Y') {
            this.rotationPhase.ta0na = true;
            this.rotationPhase.ta0naremarks = null;
        }
        else {
            this.rotationPhase = {};
            this.rotationPhase.loc_test_ta0na = 'N';
            this.rotationPhase.ta0na = false;
        }
    };
    LpcLvInspectPage.prototype.calculateCurrentRed = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
        var newVal2;
        var newValSlice;
        var regExp = new RegExp(NUMBER_REGEXP);
        var options = {
            title: 'Maximum Length',
            message: 'Maximum length output already reach',
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        // (E) Current transformer ratio
        this.transformaterRatio.ta0fc_ctratio_r = (this.transformaterRatio.ta0fc_maincurrent_bb_r / this.transformaterRatio.ta0fc_dupcurrent_ct_r * 5).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_ctratio_r) || this.transformaterRatio.ta0fc_ctratio_r === 0) {
            this.transformaterRatio.ta0fc_ctratio_r = 0;
        }
        console.log("Current Ratio: " + this.transformaterRatio.currentTransformerRatioRed);
        if (this.flagCheck == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_ctratio_r)) {
                var alert_1 = this.alertCtrl.create(options);
                alert_1.present();
                this.flagCheck = true;
            }
        }
        // (F) Different Main
        this.transformaterRatio.ta0fc_per_diff_main_r = (((this.transformaterRatio.ta0fc_maincurrent_dm_r - this.transformaterRatio.ta0fc_maincurrent_bb_r) / this.transformaterRatio.ta0fc_maincurrent_bb_r) * 100).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_per_diff_main_r) || this.transformaterRatio.ta0fc_ctratio_r === 0) {
            this.transformaterRatio.ta0fc_per_diff_main_r = 0;
        }
        console.log("Different Main: " + this.transformaterRatio.ta0fc_per_diff_main_r);
        if (this.flagCheck2 == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_main_r)) {
                var alert_2 = this.alertCtrl.create(options);
                alert_2.present();
                this.flagCheck2 = true;
            }
        }
        // (G) Different Duplicate Current   
        this.transformaterRatio.ta0fc_per_diff_dup_r = (((this.transformaterRatio.ta0fc_dupcurrent_tm_r - this.transformaterRatio.ta0fc_dupcurrent_ct_r) / this.transformaterRatio.ta0fc_dupcurrent_ct_r) * 100).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_per_diff_dup_r) || this.transformaterRatio.ta0fc_ctratio_r === 0) {
            this.transformaterRatio.ta0fc_per_diff_dup_r = 0;
        }
        console.log("Different Duplicate Current: " + this.transformaterRatio.ta0fc_per_diff_dup_r);
        if (this.flagCheck3 == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_dup_r)) {
                var alert_3 = this.alertCtrl.create(options);
                alert_3.present();
                this.flagCheck3 = true;
            }
        }
    };
    //End calculate current Red
    LpcLvInspectPage.prototype.calculateCurrentYellow = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var options = {
            title: 'Maximum Length',
            message: 'Maximum length output already reach',
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        // (E) Current transformer ratio
        this.transformaterRatio.ta0fc_ctratio_y = (this.transformaterRatio.ta0fc_maincurrent_bb_y / this.transformaterRatio.ta0fc_dupcurrent_ct_y * 5).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_ctratio_y) || this.transformaterRatio.ta0fc_ctratio_y === 0) {
            this.transformaterRatio.ta0fc_ctratio_y = 0;
        }
        console.log("Current Ratio: " + this.transformaterRatio.ta0fc_ctratio_y);
        if (this.flagCheck == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_ctratio_y)) {
                var alert_4 = this.alertCtrl.create(options);
                alert_4.present();
                this.flagCheck = true;
            }
        }
        // (F) Different Main
        this.transformaterRatio.ta0fc_per_diff_main_y = (((this.transformaterRatio.ta0fc_maincurrent_dm_y - this.transformaterRatio.ta0fc_maincurrent_bb_y) / this.transformaterRatio.ta0fc_maincurrent_bb_y) * 100).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_per_diff_main_y) || this.transformaterRatio.ta0fc_per_diff_main_y === 0) {
            this.transformaterRatio.ta0fc_per_diff_main_y = 0;
        }
        console.log("Different Main: " + this.transformaterRatio.ta0fc_per_diff_main_y);
        if (this.flagCheck2 == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_main_y)) {
                var alert_5 = this.alertCtrl.create(options);
                alert_5.present();
                this.flagCheck2 = true;
            }
        }
        // (G) Different Duplicate Current
        this.transformaterRatio.ta0fc_per_diff_dup_y = (((this.transformaterRatio.ta0fc_dupcurrent_tm_y - this.transformaterRatio.ta0fc_dupcurrent_ct_y) / this.transformaterRatio.ta0fc_dupcurrent_ct_y) * 100).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_per_diff_dup_y) || this.transformaterRatio.ta0fc_per_diff_dup_y === 0) {
            this.transformaterRatio.ta0fc_per_diff_dup_y = 0;
        }
        console.log("Different Duplicate Current: " + this.transformaterRatio.ta0fc_per_diff_dup_y);
        if (this.flagCheck3 == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_dup_y)) {
                var alert_6 = this.alertCtrl.create(options);
                alert_6.present();
                this.flagCheck3 = true;
            }
        }
    };
    //End calculate current Yellow
    LpcLvInspectPage.prototype.calculateCurrentBlue = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var options = {
            title: 'Maximum Length',
            message: 'Maximum length output already reach',
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        // (E) Current transformer ratio
        this.transformaterRatio.ta0fc_ctratio_b = (this.transformaterRatio.ta0fc_maincurrent_bb_b / this.transformaterRatio.ta0fc_dupcurrent_ct_b * 5).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_ctratio_b) || this.transformaterRatio.ta0fc_ctratio_b === 0) {
            this.transformaterRatio.ta0fc_ctratio_b = 0;
        }
        console.log("Current Ratio: " + this.transformaterRatio.ta0fc_ctratio_b);
        if (this.flagCheck == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_ctratio_b)) {
                var alert_7 = this.alertCtrl.create(options);
                alert_7.present();
                this.flagCheck = true;
            }
        }
        // (F) Different Main
        this.transformaterRatio.ta0fc_per_diff_main_b = Number((((this.transformaterRatio.ta0fc_maincurrent_dm_b - this.transformaterRatio.ta0fc_maincurrent_bb_b) / this.transformaterRatio.ta0fc_maincurrent_bb_b) * 100).toFixed(3));
        if (isNaN(this.transformaterRatio.ta0fc_per_diff_main_b) || this.transformaterRatio.ta0fc_per_diff_main_b === 0) {
            this.transformaterRatio.ta0fc_per_diff_main_b = 0;
        }
        console.log("Different Main: " + this.transformaterRatio.differenceMainBlue + " : " + this.transformaterRatio.ta0fc_per_diff_main_b);
        if (this.flagCheck2 == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_main_b)) {
                var alert_8 = this.alertCtrl.create(options);
                alert_8.present();
                this.flagCheck2 = true;
            }
        }
        // (G) Different Duplicate Current
        this.transformaterRatio.ta0fc_per_diff_dup_b = (((this.transformaterRatio.ta0fc_dupcurrent_tm_b - this.transformaterRatio.ta0fc_dupcurrent_ct_b) / this.transformaterRatio.ta0fc_dupcurrent_ct_b) * 100).toFixed(3);
        if (isNaN(this.transformaterRatio.ta0fc_per_diff_dup_b) || this.transformaterRatio.ta0fc_per_diff_dup_b === 0) {
            this.transformaterRatio.ta0fc_per_diff_dup_b = 0;
        }
        console.log("Different Duplicate Current: " + this.transformaterRatio.ta0fc_per_diff_dup_b);
        if (this.flagCheck3 == false) {
            if (!regExp.test(this.transformaterRatio.ta0fc_per_diff_dup_b)) {
                var alert_9 = this.alertCtrl.create(options);
                alert_9.present();
                this.flagCheck3 = true;
            }
        }
    };
    // End calculate current Blue
    LpcLvInspectPage.prototype.calculateAverageError = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var options = {
            title: 'Maximum Length',
            message: 'Maximum length output already reach',
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        if (this.accuracyTest.ta0at_test1 != '' || this.accuracyTest.ta0at_test1 != undefined && this.accuracyTest.ta0at_test2 != '' || this.accuracyTest.ta0at_test2 != undefined && this.accuracyTest.ta0at_test3 != '' || this.accuracyTest.ta0at_test3 != undefined) {
            console.log("Calculate Average Error Starting..");
            var sum = Number(this.accuracyTest.ta0at_test1) + Number(this.accuracyTest.ta0at_test2) + Number(this.accuracyTest.ta0at_test3);
            var total = (sum / 3);
            this.accuracyTest.ta0at_avg = total.toFixed(3);
            if (isNaN(this.accuracyTest.ta0at_avg) || this.accuracyTest.ta0at_avg === 0) {
                this.accuracyTest.ta0at_avg = 0;
            }
            if (!regExp.test(this.accuracyTest.ta0at_avg)) {
                this.gf.warningAlert('Error', 'Already reach maximum output', 'Close');
            }
        }
        else {
            console.log("Calculate Average Error fill is empty..");
            this.accuracyTest.ta0at_avg = "0.000";
        }
    };
    LpcLvInspectPage.prototype.calculateReadingMeter = function () {
        var NUMBER_REGEXP = /^(\-|\+)?(\d{0,8}|(\d{0,8}(\.\d{0,3})))([A-z]+$)?$/;
        //let newValue = eventVal.target.value;
        var regExp = new RegExp(NUMBER_REGEXP);
        var options = {
            title: 'Maximum Length',
            message: 'Maximum length output already reach ',
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        this.portableTestEquipment.ta0reg_amc = (Number(this.portableTestEquipment.ta0reg_amf) - Number(this.portableTestEquipment.ta0reg_amb)).toFixed(3);
        // Maximo accept 8.3 only trim the value. (alif 20-03-2019)
        this.portableTestEquipment.ta0reg_pteerror = (this.portableTestEquipment.ta0reg_amc / this.portableTestEquipment.ta0reg_pteread).toFixed(3);
        if (isNaN(this.portableTestEquipment.ta0reg_pteerror) || this.portableTestEquipment.ta0reg_pteerror === 0 || this.portableTestEquipment.ta0reg_pteerror === "Infinity" || isNaN(this.portableTestEquipment.ta0reg_pteerror)) {
            this.portableTestEquipment.ta0reg_pteerror = 0;
        }
        if (isNaN(this.portableTestEquipment.ta0reg_amc) || this.portableTestEquipment.ta0reg_amc === 0) {
            this.portableTestEquipment.ta0reg_amc = 0;
        }
        if (!regExp.test(this.portableTestEquipment.ta0reg_pteerror)) {
            var alert_10 = this.alertCtrl.create(options);
            alert_10.present();
            this.buttonLVSave = true;
        }
        else {
            this.buttonLVSave = false;
        }
    };
    LpcLvInspectPage.prototype.validateData = function () {
        this.check = true;
        if (this.showMainMeter == true) {
            // Transformer Ratio Test
            if (this.transformaterRatio.loc_test_ta0na == "Y") {
                console.log("Notification Transformer Ratio Remark..");
                if (this.transformaterRatio.ta0naremarks == '' || this.transformaterRatio.ta0naremarks == undefined) {
                    // this.displayMessageToast("Remark");
                    this.toastNoti.failure("error", "Remark");
                    this.validateTrRemark = false;
                    this.check = false;
                }
            }
            else {
                if (this.transformaterRatio.ta0fc_maincurrent_bb_r == '' || this.transformaterRatio.ta0fc_maincurrent_bb_r == undefined &&
                    this.transformaterRatio.ta0fc_maincurrent_dm_r == '' || this.transformaterRatio.ta0fc_maincurrent_dm_r == undefined &&
                    this.transformaterRatio.ta0fc_dupcurrent_ct_r == '' || this.transformaterRatio.ta0fc_dupcurrent_ct_r == undefined &&
                    this.transformaterRatio.ta0fc_dupcurrent_tm_r == '' || this.transformaterRatio.ta0fc_dupcurrent_tm_r == undefined) {
                    this.validateRed = false;
                    this.check = false;
                }
                else {
                    this.validateRed = true;
                }
                if (this.transformaterRatio.ta0fc_maincurrent_bb_y == '' || this.transformaterRatio.ta0fc_maincurrent_bb_y == undefined &&
                    this.transformaterRatio.ta0fc_maincurrent_dm_y == '' || this.transformaterRatio.ta0fc_maincurrent_dm_y == undefined &&
                    this.transformaterRatio.ta0fc_dupcurrent_ct_y == '' || this.transformaterRatio.ta0fc_dupcurrent_ct_y == undefined &&
                    this.transformaterRatio.ta0fc_dupcurrent_tm_y == '' || this.transformaterRatio.ta0fc_dupcurrent_tm_y == undefined) {
                    this.validateYellow = false;
                    this.check = false;
                }
                else {
                    this.validateYellow = true;
                }
                if (this.transformaterRatio.ta0fc_maincurrent_bb_b == '' || this.transformaterRatio.ta0fc_maincurrent_bb_b == undefined &&
                    this.transformaterRatio.ta0fc_maincurrent_dm_b == '' || this.transformaterRatio.ta0fc_maincurrent_dm_b == undefined &&
                    this.transformaterRatio.ta0fc_dupcurrent_ct_b == '' || this.transformaterRatio.ta0fc_dupcurrent_ct_b == undefined &&
                    this.transformaterRatio.ta0fc_dupcurrent_tm_b == '' || this.transformaterRatio.ta0fc_dupcurrent_tm_b == undefined) {
                    this.validateBlue = false;
                    this.check = false;
                }
                else {
                    this.validateBlue = true;
                }
                if (this.validateBlue === false || this.validateYellow === false || this.validateRed === false) {
                    // this.displayMessageToast('Please complete Transformer ratio');
                    this.toastNoti.failure("error", "Please complete Transformer ratio");
                }
            }
            // Accuracy Test
            if (this.accuracyTest.loc_test_ta0na == "Y") {
                console.log("Notification Accuracy Test Remark..");
                if (this.accuracyTest.ta0naremarks == '' || this.accuracyTest.ta0naremarks == undefined) {
                    // this.displayMessageToast("Remark");
                    this.toastNoti.failure("error", "Remark");
                    this.validateAtRemark = false;
                    this.check = false;
                }
            }
            else {
                if (this.accuracyTest.ta0at_pteserialnum == '' || this.accuracyTest.ta0at_pteserialnum == undefined) {
                    this.validateAccuracyTestNoSiri = false;
                    this.check = false;
                }
                else {
                    this.validateAccuracyTestNoSiri = true;
                }
                if (this.accuracyTest.ta0at_voltage_r == '' || this.accuracyTest.ta0at_voltage_r == undefined &&
                    this.accuracyTest.ta0at_current_r == '' || this.accuracyTest.ta0at_current_r == undefined &&
                    this.accuracyTest.ta0at_power_r == '' || this.accuracyTest.ta0at_power_r == undefined &&
                    this.accuracyTest.ta0at_powerfactor_r == '' || this.accuracyTest.ta0at_powerfactor_r == undefined) {
                    this.validateAccuracyRed = false;
                    this.check = false;
                }
                else {
                    this.validateAccuracyRed = true;
                }
                if (this.accuracyTest.ta0at_voltage_y == '' || this.accuracyTest.ta0at_voltage_y == undefined &&
                    this.accuracyTest.ta0at_current_y == '' || this.accuracyTest.ta0at_current_y == undefined &&
                    this.accuracyTest.ta0at_power_y == '' || this.accuracyTest.ta0at_power_y == undefined &&
                    this.accuracyTest.ta0at_powerfactor_y == '' || this.accuracyTest.ta0at_powerfactor_y == undefined) {
                    this.validateAccuracyYellow = false;
                    this.check = false;
                }
                else {
                    this.validateAccuracyYellow = true;
                }
                if (this.accuracyTest.ta0at_voltage_b == '' || this.accuracyTest.ta0at_voltage_b == undefined &&
                    this.accuracyTest.ta0at_current_b == '' || this.accuracyTest.ta0at_current_b == undefined &&
                    this.accuracyTest.ta0at_power_b == '' || this.accuracyTest.ta0at_power_b == undefined &&
                    this.accuracyTest.ta0at_powerfactor_b == '' || this.accuracyTest.ta0at_powerfactor_b == undefined) {
                    this.validateAccuracyBlue = false;
                    this.check = false;
                }
                else {
                    this.validateAccuracyBlue = true;
                }
                if (this.accuracyTest.ta0at_test1 == '' || this.accuracyTest.ta0at_test1 == undefined &&
                    this.accuracyTest.ta0at_test2 == '' || this.accuracyTest.ta0at_test2 == undefined &&
                    this.accuracyTest.ta0at_test3 == '' || this.accuracyTest.ta0at_test3 == undefined) {
                    this.validateMainCheck = false;
                    this.check = false;
                }
                else {
                    this.validateMainCheck = true;
                }
                if (this.validateMainCheck === false || this.validateAccuracyBlue === false || this.validateAccuracyYellow === false || this.validateAccuracyRed === false || this.validateAccuracyTestNoSiri === false) {
                    // this.displayMessageToast('Please complete Accuracy Test Section');
                    this.toastNoti.failure("error", "Please complete Accuracy Test Section");
                }
            }
            // Portable Test Equipment
            if (this.portableTestEquipment.loc_test_ta0na == "Y") {
                console.log("Notification Portable Equipment Test Remark..");
                if (this.portableTestEquipment.ta0naremarks == '' || this.portableTestEquipment.ta0naremarks == undefined) {
                    // this.displayMessageToast("Remark");
                    this.toastNoti.failure("error", "Remark");
                    this.validatePtRemark = false;
                    this.check = false;
                }
            }
            else {
                if (this.portableTestEquipment.ta0reg_amf == '' || this.portableTestEquipment.ta0reg_amf == undefined &&
                    this.portableTestEquipment.ta0reg_amb == '' || this.portableTestEquipment.ta0reg_amb == undefined &&
                    this.portableTestEquipment.ta0reg_amc == '' || this.portableTestEquipment.ta0reg_amc == undefined &&
                    this.portableTestEquipment.ta0reg_pteread == '' || this.portableTestEquipment.ta0reg_pteread == undefined) {
                    // this.displayMessageToast("Please complete Portable Test Section");
                    this.toastNoti.failure("error", "Please complete Portable Test Section");
                    this.validateMainCheck = false;
                    this.check = false;
                }
            }
            // Rotation Phase Test
            if (this.rotationPhase.loc_test_ta0na == "Y") {
                console.log("Notification Rotation Phase Test Remark..");
                if (this.rotationPhase.ta0naremarks == '' || this.rotationPhase.ta0naremarks == undefined) {
                    // this.displayMessageToast("Remark");
                    this.toastNoti.failure("error", "Remark");
                    this.validateRpRemark = false;
                    this.check = false;
                }
            }
            else {
                if (this.rotationPhase.ta0vr_ry == '' || this.rotationPhase.ta0vr_ry == undefined &&
                    this.rotationPhase.ta0vr_yb == '' || this.rotationPhase.ta0vr_yb == undefined &&
                    this.rotationPhase.ta0vr_rb == '' || this.rotationPhase.ta0vr_rb == undefined &&
                    this.rotationPhase.ta0vr_rn == '' || this.rotationPhase.ta0vr_rn == undefined &&
                    this.rotationPhase.ta0vr_yn == '' || this.rotationPhase.ta0vr_yn == undefined &&
                    this.rotationPhase.ta0vr_bn == '' || this.rotationPhase.ta0vr_bn == undefined &&
                    this.rotationPhase.ta0vr_re == '' || this.rotationPhase.ta0vr_re == undefined &&
                    this.rotationPhase.ta0vr_ye == '' || this.rotationPhase.ta0vr_ye == undefined &&
                    this.rotationPhase.ta0vr_be == '' || this.rotationPhase.ta0vr_be == undefined &&
                    this.rotationPhase.ta0vr_ne == '' || this.rotationPhase.ta0vr_ne == undefined &&
                    this.rotationPhase.ta0ph_rotation == '' || this.rotationPhase.ta0ph_rotation == undefined) {
                    this.toastNoti.failure("error", "Please complete Rotation Phase Section");
                    // this.displayMessageToast("Please complete Rotation Phase Section");
                    this.validateRotationPhase = false;
                    this.check = false;
                }
            }
        }
        else {
            // Accuracy Test
            if (this.accuracyTest.loc_test_ta0na == "Y") {
                console.log("Notification Accuracy Test Remark..");
                if (this.accuracyTest.ta0naremarks == '' || this.accuracyTest.ta0naremarks == undefined) {
                    // this.displayMessageToast("Remark");
                    this.toastNoti.failure("error", "Remark");
                    this.validateAtRemark = false;
                    this.check = false;
                }
            }
            else {
                if (this.accuracyTest.ta0at_test1 == '' || this.accuracyTest.ta0at_test1 == undefined &&
                    this.accuracyTest.ta0at_test2 == '' || this.accuracyTest.ta0at_test2 == undefined &&
                    this.accuracyTest.ta0at_test3 == '' || this.accuracyTest.ta0at_test3 == undefined) {
                    // this.displayMessageToast("Please complete Error Test Section");
                    this.toastNoti.failure("error", "Please complete Error Test Section");
                    this.validateMainCheck = false;
                    this.check = false;
                }
            }
            // Portable Test Equipment
            if (this.portableTestEquipment.loc_test_ta0na == "Y") {
                console.log("Notification Portable Equipment Test Remark..");
                if (this.portableTestEquipment.ta0naremarks == '' || this.portableTestEquipment.ta0naremarks == undefined) {
                    // this.displayMessageToast("Remark");
                    this.toastNoti.failure("error", "Remark");
                    this.validatePtRemark = false;
                    this.check = false;
                }
            }
            else {
                if (this.portableTestEquipment.ta0reg_amf == '' || this.portableTestEquipment.ta0reg_amf == undefined &&
                    this.portableTestEquipment.ta0reg_amb == '' || this.portableTestEquipment.ta0reg_amb == undefined &&
                    this.portableTestEquipment.ta0reg_amc == '' || this.portableTestEquipment.ta0reg_amc == undefined &&
                    this.portableTestEquipment.ta0reg_pteread == '' || this.portableTestEquipment.ta0reg_pteread == undefined) {
                    // this.displayMessageToast("Please complete Portable Equiment Section");
                    this.toastNoti.failure("error", "Please complete Portable Equiment Section");
                    this.validateMainCheck = false;
                    this.check = false;
                }
            }
        }
        return this.check;
    };
    LpcLvInspectPage.prototype.saveDetails = function () {
        var _this = this;
        if (this.validationNegVal === true) {
            if (this.validateData()) {
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail = [];
                // Default value from parent
                var assetnum = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].assetnum;
                var siteid = this.itemOri.json.siteid;
                var wonum = this.itemOri.json.wonum;
                this.transformaterRatio.assetnum = assetnum;
                this.transformaterRatio.siteid = siteid;
                this.transformaterRatio.wonum = wonum;
                this.transformaterRatio.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_CTFC;
                // Push Data into JSON for Transformer Ratio Test
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.transformaterRatio);
                this.accuracyTest.assetnum = assetnum;
                this.accuracyTest.siteid = siteid;
                this.accuracyTest.wonum = wonum;
                this.accuracyTest.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_ACCT;
                // Push Data into JSON for Accuracy Test
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.accuracyTest);
                this.portableTestEquipment.assetnum = assetnum;
                this.portableTestEquipment.siteid = siteid;
                this.portableTestEquipment.wonum = wonum;
                this.portableTestEquipment.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_REGT;
                // Push Data into JSON for Accuracy Test
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.portableTestEquipment);
                this.rotationPhase.assetnum = assetnum;
                this.rotationPhase.siteid = siteid;
                this.rotationPhase.wonum = wonum;
                this.rotationPhase.ta0testtype = __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].DATA_TESTING_PHRT;
                // Push Data into JSON for Accuracy Test
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testdetail.push(this.rotationPhase);
                // Validate Test Status
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].ta0testingstatus = 'Y';
                // this.gf.startLoading();
                this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex].loc_ta0testings_haveChange = true;
                // this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                var loading_1 = this.loadingCtrl.create({
                    content: "Loading..."
                });
                loading_1.present();
                this.gf.loadingTimer(loading_1);
                /**
                 * Reason   : Saving to local storage (json data).
                 * Created  : 22-01-2019
                 */
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                    this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                    this.gf.displayToast("LV Inspection locally updated.");
                    // this.gf.stopLoading();
                    // Back to service-execution page.
                    loading_1.dismiss();
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("ServiceExecutionPage", this.itemOri);
                }
                else if ((__WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                    /**
                     * Description: Change old(swift) to new(objective-c) plugin.
                     * Edited: Alif (16.10.2019)
                     * old --> mobilesignalswift.getSignalStrength
                     * new --> cordova.plugins.MobileSignal.getSignalStrength
                     */
                    cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                        if (_this.gv.deviceSignal <= data) {
                            //item, wonumVal, pageAction, feederCode, workOrderType) 
                            var feederCode = _this.itemOri.json.ta0feeder[_this.fIndex].ta0feedercode;
                            var itemVal = _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex];
                            var itemArray = [];
                            itemArray[0] = (itemVal);
                            _this.dataService
                                .saveRecordWithType(itemVal, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, _this.itemOri.json.worktype)
                                .then(function (results) {
                                console.log(' result + ' + JSON.stringify(results));
                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                                _this.gf.warningAlert("Success", "LV Inspection save successfully.", "Dismiss");
                                // this.gf.stopLoading();
                                loading_1.dismiss();
                                // Back to service-execution page.
                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                // newRootNav.push("ServiceExecutionPage", this.itemOri);
                                _this.navCtrl.pop();
                            }).catch(function (error) {
                                console.log('service failure : ' + error);
                                // this.gf.stopLoading();
                                loading_1.dismiss();
                            });
                        }
                        else {
                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                            _this.gf.displayToast("LV Inspection locally updated.");
                            // this.gf.stopLoading();
                            loading_1.dismiss();
                            // Back to service-execution page.
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("ServiceExecutionPage", this.itemOri);
                            _this.navCtrl.pop();
                        }
                    });
                }
                else {
                    var feederCode = this.itemOri.json.ta0feeder[this.fIndex].ta0feedercode;
                    var itemVal = this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex];
                    var itemArray = [];
                    itemArray[0] = (itemVal);
                    this.dataService
                        .saveRecordWithType(itemVal, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_3__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_TESTINGS, feederCode, this.itemOri.json.worktype)
                        .then(function (results) {
                        console.log(' result + ' + JSON.stringify(results));
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                        _this.itemOri.json.ta0feeder[_this.fIndex].multiassetlocci[_this.maIndex].loc_ta0testings_haveChange = false;
                        _this.gf.warningAlert("Success", "LV Inspection save successfully.", "Dismiss");
                        // this.gf.stopLoading();
                        loading_1.dismiss();
                        // Back to service-execution page.
                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        // newRootNav.push("ServiceExecutionPage", this.itemOri);
                        _this.navCtrl.pop();
                    }).catch(function (error) {
                        console.log('service failure : ' + error);
                        // this.gf.stopLoading();
                        loading_1.dismiss();
                    });
                }
                // this.gf.displayToast('Data Save Successfully.');
                // this.navCtrl.pop();
                console.log("DATA: " + JSON.stringify(this.itemOri.json.ta0feeder[this.fIndex].multiassetlocci[this.maIndex]));
            }
        }
        else {
            this.gf.warningAlert('Error', 'Output value cannot be negative', 'Close');
        }
    };
    LpcLvInspectPage.prototype.goBack = function () {
        console.log("button back clicked");
        this.navCtrl.pop();
    };
    LpcLvInspectPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LpcLvInspectPage.prototype.displayMessageToast = function (msg) {
        this.presentToast("Required field should not be empty. " + msg);
    };
    /**
   * Hide Show Transformater Ratio Test Section
   * Created  : Alif
   * Date     : 13-11-2018
   * Edited   : Ameer (22/11/2018)
   */
    LpcLvInspectPage.prototype.showTransformaterRatioSection = function (action) {
        if (this.showTransformaterRatio === false) {
            this.showTransformaterRatio = true;
        }
        else if (action === false) {
            this.showTransformaterRatio = false;
        }
    };
    /**
   * Hide Show Accuracy Test Section
   * Created  : Alif
   * Date     : 13-11-2018
   * Edited   : Ameer (22/11/2018)
   */
    LpcLvInspectPage.prototype.showAccuracyTestSection = function (action) {
        if (this.showAccuracyTest === false) {
            this.showAccuracyTest = true;
        }
        else if (action === false) {
            this.showAccuracyTest = false;
        }
    };
    /**
     * Hide Show Portable Test Equipment Test Section
     * Created  : Alif
     * Date     : 13-11-2018
     * Edited   : Ameer (22/11/2018)
     */
    LpcLvInspectPage.prototype.showPortableTestEquipmentSection = function (action) {
        if (this.showPortableTestEquipment === false) {
            this.showPortableTestEquipment = true;
        }
        else if (action === false) {
            this.showPortableTestEquipment = false;
        }
    };
    /**
     * Hide Show Rotation Phase Test Section
     * Created  : Alif
     * Date     : 13-11-2018
     * Edited   : Ameer (22/11/2018)
     */
    LpcLvInspectPage.prototype.showRotationPhaseSection = function (action) {
        if (this.showRotationPhase === false) {
            this.showRotationPhase = true;
        }
        else if (action === false) {
            this.showRotationPhase = false;
        }
    };
    /**
     * Not applicable Note...
     * @param action
     */
    LpcLvInspectPage.prototype.showAllRemarkCommon = function (action) {
        if (this.showAllCommonRemarkDetails === false) {
            this.showAllCommonRemarkDetails = true;
        }
        else if (action === false) {
            this.showAllCommonRemarkDetails = false;
        }
    };
    /**
     * Not application for all applications...
     * @param value
     */
    LpcLvInspectPage.prototype.commonNotApplication = function (value) {
        if (value === 'Y') {
            this.showContainRemak = true;
            // The Current Transformer Ratio Test & Flow Comparison
            this.transformaterRatio.loc_test_ta0na = 'Y';
            this.transformaterRatio.ta0na = true;
            this.showTransformaterRatio = false;
            // Accuracy Test
            this.accuracyTest.loc_test_ta0na = 'Y';
            this.accuracyTest.ta0na = true;
            this.showAccuracyTest = false;
            // Register Test Using Portable Test Equipment
            this.portableTestEquipment.loc_test_ta0na = 'Y';
            this.portableTestEquipment.ta0na = true;
            this.showPortableTestEquipment = false;
            // Current and Voltage Reading, Rotation Phase Test
            this.rotationPhase.loc_test_ta0na = 'Y';
            this.rotationPhase.ta0na = true;
            this.showRotationPhase = false;
        }
        else {
            this.showContainRemak = false;
            // The Current Transformer Ratio Test & Flow Comparison
            this.transformaterRatio.loc_test_ta0na = 'N';
            this.transformaterRatio.ta0na = false;
            this.showTransformaterRatio = true;
            // Accuracy Test
            this.accuracyTest.loc_test_ta0na = 'N';
            this.accuracyTest.ta0na = false;
            this.showAccuracyTest = true;
            // Register Test Using Portable Test Equipment
            this.portableTestEquipment.loc_test_ta0na = 'N';
            this.portableTestEquipment.ta0na = false;
            this.showPortableTestEquipment = true;
            // Current and Voltage Reading, Rotation Phase Test
            this.rotationPhase.loc_test_ta0na = 'N';
            this.rotationPhase.ta0na = false;
            this.showRotationPhase = true;
        }
    };
    /**
     * commonRemark Changes Reflecting factor...
     */
    LpcLvInspectPage.prototype.commonNotApplicationRemark = function () {
        this.transformaterRatio.ta0naremarks = this.ta0Remark;
        this.accuracyTest.ta0naremarks = this.ta0Remark;
        this.portableTestEquipment.ta0naremarks = this.ta0Remark;
        this.rotationPhase.ta0naremarks = this.ta0Remark;
    };
    LpcLvInspectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lpc-lv-inspect',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/deviceTestforms/lpc-lv-inspect/lpc-lv-inspect.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>LPC - LV Inspection</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <!--Not Applicable for all Start-->\n    <div>\n      <ion-item-divider color="light" class="pointer" (click)="showAllRemarkCommon(false)">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>Not Applicable For All</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px; text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAllCommonRemarkDetails"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAllCommonRemarkDetails"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div *ngIf="showAllCommonRemarkDetails">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable For All</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="ta0na" (ionChange)="commonNotApplication($event)" interface="popover">\n                  <ion-option value="Y" [selected]="ta0na === \'Y\'">Yes</ion-option>\n                  <ion-option value="N" [selected]="ta0na === \'N\'">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="showContainRemak">\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks for All</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" [(ngModel)]="ta0Remark" maxlength="40" type="text"\n                  placeholder="Please Enter Remark" (keyup)="commonNotApplicationRemark()"></ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <!--Not Applicable for all End-->\n\n    <div *ngIf="showMainMeter">\n      <ion-item-divider color="light" class="pointer" (click)="showTransformaterRatioSection(false)"\n        [ngClass]="(validateTrRemark == false || validateBlue == false || validateYellow == false || validateRed == false) ? \'errorSection\' : \'successSection\'">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>The Current Transformer Ratio Test & Flow\n              Comparison</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showTransformaterRatio"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showTransformaterRatio"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div id="transformaterRatio" *ngIf="showTransformaterRatio">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="transformaterRatio.loc_test_ta0na" (ionChange)="hideShowTransformerRatioTest()"\n                  interface="popover">\n                  <ion-option value="Y">Yes</ion-option>\n                  <ion-option value="N">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="transformaterRatio.ta0na">\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" id="remark" maxlength="40" [(ngModel)]="transformaterRatio.ta0naremarks"\n                  type="text" placeholder="Please Enter Remark"\n                  [ngClass]="(transformaterRatio.ta0naremarks == \'\' || transformaterRatio.ta0naremarks == undefined && !validateTrRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="!transformaterRatio.ta0na">\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-label color="primary"> </ion-label>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">R</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">Y</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">B</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Current Transformer Ratio & Flow Comparison-->\n            <!-- Main Current Busbar-->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">Primary Current (Busbar)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedBusbar" (ionChange)="calculateCurrentRed()"\n                    [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_r" type="text"\n                    (keyup)="controlUserInputLength($event,\'redBusbar\')" placeholder="Enter value"\n                    [ngClass]="(transformaterRatio.ta0fc_maincurrent_bb_r == \'\' || transformaterRatio.ta0fc_maincurrent_bb_r == undefined && !validateRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n                <ion-item>\n                  <ion-input id="mainCurrentYellowBusbar" (ionChange)="calculateCurrentYellow()"\n                    [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_y" type="text" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'yellowBusbar\')"\n                    [ngClass]="(transformaterRatio.ta0fc_maincurrent_bb_y == \'\' || transformaterRatio.ta0fc_maincurrent_bb_y == undefined && !validateYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n                <ion-item>\n                  <ion-input id="mainCurrentBlueBusbar" (ionChange)="calculateCurrentBlue()"\n                    [(ngModel)]="transformaterRatio.ta0fc_maincurrent_bb_b" type="text" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'busbarBlue\')"\n                    [ngClass]="(transformaterRatio.ta0fc_maincurrent_bb_b == \'\' || transformaterRatio.ta0fc_maincurrent_bb_b == undefined && !validateBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Main Current Meter -->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">Primary Current (In Display Meter)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n                <ion-item>\n                  <ion-input id="mainMeterRed" type="text" (ionChange)="calculateCurrentRed()"\n                    [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_r" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'mainRed\')"\n                    [ngClass]="(transformaterRatio.ta0fc_maincurrent_dm_r == \'\' || transformaterRatio.ta0fc_maincurrent_dm_r == undefined && !validateRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n                <ion-item>\n                  <ion-input id="mainMeterYellow" type="text" (ionChange)="calculateCurrentYellow()"\n                    [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_y" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'mainYellow\')"\n                    [ngClass]="(transformaterRatio.ta0fc_maincurrent_dm_y == \'\' || transformaterRatio.ta0fc_maincurrent_dm_y == undefined && !validateYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px">\n                <ion-item>\n                  <ion-input id="mainMeterBlue" type="text" (ionChange)="calculateCurrentBlue()"\n                    [(ngModel)]="transformaterRatio.ta0fc_maincurrent_dm_b" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'mainBlue\')"\n                    [ngClass]="(transformaterRatio.ta0fc_maincurrent_dm_b == \'\' || transformaterRatio.ta0fc_maincurrent_dm_b == undefined  && !validateBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">Secondary Current (CT Terminal)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="duplicateCurrentRed" type="text" (ionChange)="calculateCurrentRed()"\n                    [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_r" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'dupliRed\')"\n                    [ngClass]="(transformaterRatio.ta0fc_dupcurrent_ct_r == \'\' || transformaterRatio.ta0fc_dupcurrent_ct_r == undefined && !validateRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="duplicateCurrentYellow" type="text" (ionChange)="calculateCurrentYellow()"\n                    [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_y" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'dupliYellow\')"\n                    [ngClass]="(transformaterRatio.ta0fc_dupcurrent_ct_y == \'\' || transformaterRatio.ta0fc_dupcurrent_ct_y == undefined && !validateYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="duplicateCurrentBlue" type="text" (ionChange)="calculateCurrentBlue()"\n                    [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_ct_b" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'dupliBlue\')"\n                    [ngClass]="(transformaterRatio.ta0fc_dupcurrent_ct_b == \'\' || transformaterRatio.ta0fc_dupcurrent_ct_b == undefined && !validateBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Duplicate Current-->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">Secondary Current (Meter Terminal)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="duplicateTerminalCurrentRed" type="text" (ionChange)="calculateCurrentRed()"\n                    [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_r" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'dupliTerRed\')"\n                    [ngClass]="(transformaterRatio.ta0fc_dupcurrent_tm_r == \'\' || transformaterRatio.ta0fc_dupcurrent_tm_r == undefined && !validateRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="duplicateTerminalCurrentYellow" type="text" (ionChange)="calculateCurrentYellow()"\n                    [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_y" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'dupliTerYellow\')"\n                    [ngClass]="(transformaterRatio.ta0fc_dupcurrent_tm_y == \'\' || transformaterRatio.ta0fc_dupcurrent_tm_y == undefined && !validateYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="duplicateTerminalCurrentBlue" type="text" (ionChange)="calculateCurrentBlue()"\n                    [(ngModel)]="transformaterRatio.ta0fc_dupcurrent_tm_b" placeholder="Enter value"\n                    (keyup)="controlUserInputLength($event,\'dupliTerBlue\')"\n                    [ngClass]="(transformaterRatio.ta0fc_dupcurrent_tm_b == \'\' || transformaterRatio.ta0fc_dupcurrent_tm_b == undefined && !validateBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Current Transformer Ratio-->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">The Current Transformer Ratio</ion-label>\n                </ion-item>\n              </ion-col>\n\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedBusbar" type="text" [(ngModel)]="transformaterRatio.ta0fc_ctratio_r"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentYellowBusbar" type="text" [(ngModel)]="transformaterRatio.ta0fc_ctratio_y"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentBlueBusbar" type="text" [(ngModel)]="transformaterRatio.ta0fc_ctratio_b"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n\n            </ion-row>\n\n            <!-- Difference Main -->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">% Difference Main</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedBusbar" type="text"\n                    [(ngModel)]="transformaterRatio.ta0fc_per_diff_main_r" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentYellowBusbar" type="text"\n                    [(ngModel)]="transformaterRatio.ta0fc_per_diff_main_y" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentBlueBusbar" type="text"\n                    [(ngModel)]="transformaterRatio.ta0fc_per_diff_main_b" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Duplicate Current Differance-->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item text-wrap>\n                  <ion-label color="primary">% Duplicate Current Difference</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedBusbar" type="text" [(ngModel)]="transformaterRatio.ta0fc_per_diff_dup_r"\n                    [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentYellowBusbar" type="text"\n                    [(ngModel)]="transformaterRatio.ta0fc_per_diff_dup_y" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 align-self-end style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentBlueBusbar" type="text"\n                    [(ngModel)]="transformaterRatio.ta0fc_per_diff_dup_b" [readonly]="isReadonly"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-grid>\n      </div>\n    </div>\n\n    <!-- Accuracy Test-->\n    <ion-item-divider color="light" class="pointer" (click)="showAccuracyTestSection(false)"\n      [ngClass]="(validateAtRemark == false || validateAccuracyBlue == false || validateAccuracyYellow == false || validateAccuracyRed == false || validateAccuracyTestNoSiri == false) ? \'errorSection\' : \'successSection\'">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>Accuracy Test</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showAccuracyTest"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showAccuracyTest"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="accuracyTest" *ngIf="showAccuracyTest">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="accuracyTest.loc_test_ta0na" (ionChange)="hideShowAccuracyTest()"\n                interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="accuracyTest.ta0na">\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" maxlength="40" [(ngModel)]="accuracyTest.ta0naremarks" type="text"\n                placeholder="Please Enter Remark"\n                [ngClass]="(accuracyTest.ta0naremarks == \'\' || accuracyTest.ta0naremarks == undefined && !validateAtRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!accuracyTest.ta0na">\n          <div *ngIf="showMainMeter">\n            <!-- Test Set Siri -->\n            <ion-row>\n              <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Portable Test Set</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="no_siri" type="text" maxlength="18" [(ngModel)]="accuracyTest.ta0at_pteserialnum"\n                    placeholder="Please Enter No Siri"\n                    [ngClass]="(accuracyTest.ta0at_pteserialnum == \'\' || accuracyTest.ta0at_pteserialnum == undefined && !validateAccuracyTestNoSiri) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-label color="primary"></ion-label>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">R</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">Y</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">B</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- Voltage -->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Voltage</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedVoltage" type="text"\n                    (keyup)="controlUserInputPositive($event,\'voltageRed\')" [(ngModel)]="accuracyTest.ta0at_voltage_r"\n                    placeholder="Voltage Red"\n                    [ngClass]="(accuracyTest.ta0at_voltage_r == \'\' || accuracyTest.ta0at_voltage_r == undefined && !validateAccuracyRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentYellowVoltage" type="text"\n                    (keyup)="controlUserInputPositive($event,\'voltageYellow\')"\n                    [(ngModel)]="accuracyTest.ta0at_voltage_y" placeholder="Voltage Yellow"\n                    [ngClass]="(accuracyTest.ta0at_voltage_y == \'\' || accuracyTest.ta0at_voltage_y == undefined && !validateAccuracyYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentBlueVoltage" type="text"\n                    (keyup)="controlUserInputPositive($event,\'voltageBlue\')" [(ngModel)]="accuracyTest.ta0at_voltage_b"\n                    placeholder="Voltage Blue"\n                    [ngClass]="(accuracyTest.ta0at_voltage_b == \'\' || accuracyTest.ta0at_voltage_b == undefined && !validateAccuracyBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!--Current-->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Current</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedCurrent" type="text" (keyup)="controlUserInputPositive($event,\'CrrRed\')"\n                    [(ngModel)]="accuracyTest.ta0at_current_r" placeholder="Current Red"\n                    [ngClass]="(accuracyTest.ta0at_current_r == \'\' || accuracyTest.ta0at_current_r == undefined && !validateAccuracyRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentYellowCurrent" type="text"\n                    (keyup)="controlUserInputPositive($event,\'CrrYellow\')" [(ngModel)]="accuracyTest.ta0at_current_y"\n                    placeholder="Current Yellow"\n                    [ngClass]="(accuracyTest.ta0at_current_y == \'\' || accuracyTest.ta0at_current_y == undefined && !validateAccuracyYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentBlueCurrent" type="text"\n                    (keyup)="controlUserInputPositive($event,\'CrrBlue\')" [(ngModel)]="accuracyTest.ta0at_current_b"\n                    placeholder="Current Blue"\n                    [ngClass]="(accuracyTest.ta0at_current_b == \'\' || accuracyTest.ta0at_current_b == undefined && !validateAccuracyBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Power (kw) -->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Power (kW)</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="pwrRed" type="text" (keyup)="controlUserInputLength($event,\'pwrRed\')" maxlength="11"\n                    [(ngModel)]="accuracyTest.ta0at_power_r" placeholder="Power Red"\n                    [ngClass]="(accuracyTest.ta0at_power_r == \'\' || accuracyTest.ta0at_power_r == undefined && !validateAccuracyRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="pwrYellow" type="text" (keyup)="controlUserInputLength($event,\'pwrYellow\')"\n                    maxlength="11" [(ngModel)]="accuracyTest.ta0at_power_y" placeholder="Power Yellow"\n                    [ngClass]="(accuracyTest.ta0at_power_y == \'\' || accuracyTest.ta0at_power_y == undefined && !validateAccuracyYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="pwrBlue" type="text" (keyup)="controlUserInputLength($event,\'pwrBlue\')" maxlength="11"\n                    [(ngModel)]="accuracyTest.ta0at_power_b" placeholder="Power Blue"\n                    [ngClass]="(accuracyTest.ta0at_power_b == \'\' || accuracyTest.ta0at_power_b == undefined && !validateAccuracyBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <!-- Power Factor -->\n            <ion-row>\n              <ion-col col-12 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Power Factor</ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentRedPwrFactor" type="text"\n                    (keyup)="controlUserInputLength($event,\'pwrFacRed\')" maxlength="11"\n                    [(ngModel)]="accuracyTest.ta0at_powerfactor_r" placeholder="Power Factor Red"\n                    [ngClass]="(accuracyTest.ta0at_powerfactor_r == \'\' || accuracyTest.ta0at_powerfactor_r == undefined && !validateAccuracyRed) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentPwrFactor" type="text"\n                    (keyup)="controlUserInputLength($event,\'pwrFacYellow\')" maxlength="11"\n                    [(ngModel)]="accuracyTest.ta0at_powerfactor_y" placeholder="Power Factor Yellow"\n                    [ngClass]="(accuracyTest.ta0at_powerfactor_y == \'\' || accuracyTest.ta0at_powerfactor_y == undefined && !validateAccuracyYellow) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-3 col-md-3 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-input id="mainCurrentPwrFactor" type="text" (keyup)="controlUserInputLength($event,\'pwrFacBlue\')"\n                    maxlength="11" [(ngModel)]="accuracyTest.ta0at_powerfactor_b" placeholder="Power Factor Blue"\n                    [ngClass]="(accuracyTest.ta0at_powerfactor_b == \'\' || accuracyTest.ta0at_powerfactor_b == undefined && !validateAccuracyBlue) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-4 col-sm-5 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-label color="primary"></ion-label>\n              </ion-col>\n              <ion-col col-8 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style=" text-align: center;">% Error</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-4 col-sm-5 col-md-5 style="padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary"></ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-8 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary" style="text-align: center;">Main Meter / Check Meter</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n          <!-- % Error 1 -->\n          <ion-row>\n            <ion-col col-4 col-sm-5 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Error 1</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="error1Main" type="text" maxlength="11" (keyup)="negativeVlueInput($event,\'error1\')"\n                  (ionChange)="calculateAverageError()" [(ngModel)]="accuracyTest.ta0at_test1"\n                  placeholder="Error 1 Main"\n                  [ngClass]="(accuracyTest.ta0at_test1 == \'\' || accuracyTest.ta0at_test1 == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- % Error 2-->\n          <ion-row>\n            <ion-col col-4 col-sm-5 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Error 2 </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="error2Main" type="text" maxlength="11" (keyup)="negativeVlueInput($event,\'error2\')"\n                  (ionChange)="calculateAverageError()" [(ngModel)]="accuracyTest.ta0at_test2"\n                  placeholder="Error 2 Main"\n                  [ngClass]="(accuracyTest.ta0at_test2 == \'\' || accuracyTest.ta0at_test2 == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- % Error 3 -->\n          <ion-row>\n            <ion-col col-4 col-sm-5 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Error 3</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="error3Main" type="text" maxlength="11" (keyup)="negativeVlueInput($event,\'error3\')"\n                  (ionChange)="calculateAverageError()" [(ngModel)]="accuracyTest.ta0at_test3"\n                  placeholder="Error 3 Main"\n                  [ngClass]="(accuracyTest.ta0at_test3 == \'\' || accuracyTest.ta0at_test3 == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- % Error -->\n          <ion-row>\n            <ion-col col-4 col-sm-5 col-md-5 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Error </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8 col-sm-7 col-md-7 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="errorMain" type="text" (keyup)="controlUserInputLength($event,\'error\')"\n                  [readonly]="isReadonly" [(ngModel)]="accuracyTest.ta0at_avg" placeholder="Error Main"\n                  [ngClass]="(accuracyTest.ta0at_avg == \'\' || accuracyTest.ta0at_avg == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </ion-grid>\n    </div>\n    <!-- Register Test Using Portable Test Equipment -->\n    <ion-item-divider color="light" class="pointer" (click)="showPortableTestEquipmentSection(false)"\n      [ngClass]="(validatePtRemark == false || validateMainCheck == false) ? \'errorSection\' : \'successSection\'">\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n          <ion-icon name="flask"></ion-icon>&nbsp; <strong>Register Test Using Portable Test Equipment</strong>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n          <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showPortableTestEquipment"></ion-icon>\n          <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showPortableTestEquipment"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item-divider>\n    <div id="portableTestEquipment" *ngIf="showPortableTestEquipment">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Not Applicable</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-select [(ngModel)]="portableTestEquipment.loc_test_ta0na"\n                (ionChange)="hideShowportableTestEquipment()" interface="popover">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="portableTestEquipment.ta0na">\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-label color="primary">Remarks</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-item>\n              <ion-textarea rows="4" id="remark" maxlength="40" [(ngModel)]="portableTestEquipment.ta0naremarks"\n                type="text" placeholder="Please Enter Remark"\n                [ngClass]="(portableTestEquipment.ta0naremarks == \'\' || portableTestEquipment.ta0naremarks == undefined && !validatePtRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf="!portableTestEquipment.ta0na">\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 1: Meter Reading (kWh)\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Final</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="f1MainEnd" type="text" (keyup)="controlUserInputLength($event,\'readingMtrEnd\')"\n                  (ionChange)="calculateReadingMeter()" [(ngModel)]="portableTestEquipment.ta0reg_amf"\n                  placeholder="Enter Amount for Main"\n                  [ngClass]="(portableTestEquipment.ta0reg_amf == \'\' || portableTestEquipment.ta0reg_amf == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap: break-all; padding-left: 5px;">\n\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Initial</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="f1InitialMain" type="text" (keyup)="controlUserInputLength($event,\'readingMeterInitial\')"\n                  (ionChange)="calculateReadingMeter()" [(ngModel)]="portableTestEquipment.ta0reg_amb"\n                  placeholder="Meter initial for Main"\n                  [ngClass]="(portableTestEquipment.ta0reg_amb == \'\' || portableTestEquipment.ta0reg_amb == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Usage</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="f1Check" type="text" [readonly]="true" [(ngModel)]="portableTestEquipment.ta0reg_amc"\n                  [ngClass]="(portableTestEquipment.ta0reg_amc == \'\' || portableTestEquipment.ta0reg_amc == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-item-divider color="light">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                Part 2: Test Equipment Reading (kWh)\n              </ion-col>\n            </ion-row>\n          </ion-item-divider>\n          <ion-row>\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Reading</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="f1ReadingMain" type="text" (keyup)="controlUserInputLength($event,\'readingTestRead\')"\n                  maxlength="11" (ionChange)="calculateReadingMeter()"\n                  [(ngModel)]="portableTestEquipment.ta0reg_pteread" placeholder="Reading for Main"\n                  [ngClass]="(portableTestEquipment.ta0reg_pteread == \'\' || portableTestEquipment.ta0reg_pteread == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">% Error</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-4 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-input id="f1ErrorMain" type="text" (keyup)="controlUserInputLength($event,\'readingTestError\')"\n                  maxlength="11" [readonly]="false" [(ngModel)]="portableTestEquipment.ta0reg_pteerror"\n                  placeholder="Test Eq. Error Main"\n                  [ngClass]="(portableTestEquipment.ta0reg_pteerror == \'\' || portableTestEquipment.ta0reg_pteerror == undefined && !validateMainCheck) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n\n    <div *ngIf="showMainMeter">\n      <!-- Current and Voltage Reading, Rotation Phase Test Including Phasor Diagram Sketch -->\n      <ion-item-divider color="light" class="pointer" (click)="showRotationPhaseSection(false)"\n        [ngClass]="(validateRpRemark == false || validateRotationPhase == false) ? \'errorSection\' : \'successSection\'">\n        <ion-row align-items-center>\n          <ion-col col-12 col-sm-12 col-md-10 style="word-wrap:  break-all; padding-left: 5px;">\n            <ion-icon name="flask"></ion-icon>&nbsp; <strong>Current and Voltage Reading, Rotation Phase Test</strong>\n          </ion-col>\n          <ion-col col-12 col-sm-12 col-md-2 style="word-wrap:  break-all; padding-left: 5px;text-align: right;">\n            <ion-icon name="arrow-forward" style="zoom: 1.5;" *ngIf="!showRotationPhase"></ion-icon>\n            <ion-icon name="arrow-down" style="zoom: 1.5;" *ngIf="showRotationPhase"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div id="rotationPhase" *ngIf="showRotationPhase">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Not Applicable</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-select [(ngModel)]="rotationPhase.loc_test_ta0na" (ionChange)="hideShowrotationPhaseTest()"\n                  interface="popover">\n                  <ion-option value="Y">Yes</ion-option>\n                  <ion-option value="N">No</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="rotationPhase.ta0na">\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-label color="primary">Remarks</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n              <ion-item>\n                <ion-textarea rows="4" id="remark" maxlength="40" [(ngModel)]="rotationPhase.ta0naremarks" type="text"\n                  placeholder="Please Enter Remark"\n                  [ngClass]="(rotationPhase.ta0naremarks == \'\' || rotationPhase.ta0naremarks == undefined && !validateRpRemark) ? \'redHighlightText\' : \'blackHighlightText\'">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="!rotationPhase.ta0na">\n            <ion-row>\n              <ion-col col-12 col-sm-12 col-md-12 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">(Voltage) Supplier 1, F1</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RY</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="rotationPhase.ta0vr_ry" type="text"\n                    (keyup)="controlUserInputLength($event,\'supplierRY\')" maxlength="11"\n                    placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_ry == \'\' ||rotationPhase.ta0vr_ry == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">YB</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_yb" type="text"\n                    (keyup)="controlUserInputLength($event,\'supplierYB\')" maxlength="11"\n                    placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_yb == \'\' ||rotationPhase.ta0vr_yb == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RB</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="rotationPhase.ta0vr_rb" type="text"\n                    (keyup)="controlUserInputLength($event,\'supplierRB\')" maxlength="11"\n                    placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_rb == \'\' ||rotationPhase.ta0vr_rb == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RN</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="rotationPhase.ta0vr_rn" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'supplierRN\')" placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_rn == \'\' ||rotationPhase.ta0vr_rn == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">YN</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_yn" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'supplierYN\')" placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_yn == \'\' ||rotationPhase.ta0vr_yn == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">BN</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_bn" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'supplierBN\')" placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_bn == \'\' ||rotationPhase.ta0vr_bn == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">RE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_re" type="text"\n                    (keyup)="controlUserInputLength($event,\'supplierRE\')" maxlength="11"\n                    placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_re == \'\' ||rotationPhase.ta0vr_re == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">YE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_ye" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'supplierYE\')" placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_ye == \'\' ||rotationPhase.ta0vr_ye == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-4 col-sm-4 col-md-4 style="word-wrap: break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">BE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_be" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'supplierBE\')" placeholder="Please Enter Voltage"\n                    [ngClass]="(rotationPhase.ta0vr_be == \'\' ||rotationPhase.ta0vr_be == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">NE</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input [(ngModel)]="rotationPhase.ta0vr_ne" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'supplierNE\')" placeholder="Please Enter Phase Rotation"\n                    [ngClass]="(rotationPhase.ta0vr_ne == \'\' ||rotationPhase.ta0vr_ne == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n                <ion-item>\n                  <ion-label color="primary">Phase Rotation</ion-label>\n                </ion-item>\n                <ion-item>\n                  <ion-input id="remark" [(ngModel)]="rotationPhase.ta0ph_rotation" type="text" maxlength="11"\n                    (keyup)="controlUserInputLength($event,\'phaseRotation\')" placeholder="Please Enter Phase Rotation"\n                    [ngClass]="(rotationPhase.ta0ph_rotation == \'\' ||rotationPhase.ta0ph_rotation == undefined && !validateRotationPhase) ? \'redHighlightText\' : \'blackHighlightText\'">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-grid>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <button ion-button round block mode="md" (click)="saveDetails()" [disabled]="buttonLVSave">\n          Save\n        </button>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6 style="word-wrap:  break-all; padding-left: 5px;">\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb_lpc/deviceTestforms/lpc-lv-inspect/lpc-lv-inspect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_common_global_vars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_8__components_toaster_notifications_toaster_notifications__["a" /* ToasterNotificationsComponent */]])
    ], LpcLvInspectPage);
    return LpcLvInspectPage;
}());

//# sourceMappingURL=lpc-lv-inspect.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpcLvInspectPageModule", function() { return LpcLvInspectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lpc_lv_inspect__ = __webpack_require__(1066);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_toaster_notifications_toaster_notifications__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_notifier__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Custom angular notifier options
 */
var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 3000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 500,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 500,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 500,
            easing: 'ease'
        },
        overlap: 150
    }
};
var LpcLvInspectPageModule = /** @class */ (function () {
    function LpcLvInspectPageModule() {
    }
    LpcLvInspectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lpc_lv_inspect__["a" /* LpcLvInspectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__lpc_lv_inspect__["a" /* LpcLvInspectPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_5_angular_notifier__["a" /* NotifierModule */].withConfig(customNotifierOptions)
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_4__components_toaster_notifications_toaster_notifications__["a" /* ToasterNotificationsComponent */]
            ],
        })
    ], LpcLvInspectPageModule);
    return LpcLvInspectPageModule;
}());

//# sourceMappingURL=lpc-lv-inspect.module.js.map

/***/ })

});
//# sourceMappingURL=33.js.map