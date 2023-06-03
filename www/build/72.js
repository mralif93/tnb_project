webpackJsonp([72],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNoteScanningPageModule", function() { return CreditNoteScanningPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_note_scanning__ = __webpack_require__(994);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreditNoteScanningPageModule = /** @class */ (function () {
    function CreditNoteScanningPageModule() {
    }
    CreditNoteScanningPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_note_scanning__["a" /* CreditNoteScanning */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_note_scanning__["a" /* CreditNoteScanning */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], CreditNoteScanningPageModule);
    return CreditNoteScanningPageModule;
}());

//# sourceMappingURL=credit-note-scanning.module.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditNoteScanning; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreditNoteScanning = /** @class */ (function () {
    function CreditNoteScanning(appCtrl, navCtrl, alertCtrl, dataService, loadingCtrl, barcodeScanner, gv, gf, jsonStoreCurd, navParams) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.gv = gv;
        this.gf = gf;
        this.jsonStoreCurd = jsonStoreCurd;
        this.navParams = navParams;
        this.accListDevice = true;
        this.showDeviceStatus = false;
        this.submitValid = false;
        this.countValid = 0;
        this.deleteCheck = [];
        this.containerBoot = false;
        this.scanToggle = false;
        this.cnVarItem = [];
        this.selectedItem = [];
        this.deviceslist = [];
        this.deviceWithWarrantylist = [];
        this.deviceWithWarrantylistPaging = [];
        this.cnCategories = [];
        this.cnReturnTypes = [];
        this.storeMaterialList = [];
        this.cnList = [];
        this.deviceDetailsList = [];
        this.accumulateDeviceDetailsList = [];
        this.chkbox = false;
        this.selectedDeviceDetailsList = [];
        this.removeDeviceDetailsList = [];
        this.submitDeviceDetailsList = [];
        this.submitBtn = true;
        this.validatebtnDisable = true;
        this.checkStringChange = true;
        this.cnLineSaved = false;
        this.savedCnline = {};
        this.item = [];
        this.totalCount = 0;
        this.items = {};
        // array of all items to be paged
        this.showPagingList = false;
        this.valuationColumn = false;
        this.materialListItem = [];
        this.checkListBlock = false;
        this.verifiedCount = 0;
        this.checkCount = 0;
        this.selectedListItem = [];
        this.selectedlistCheck = [];
        this.alreadyAdded = [];
        this.paginationList = [];
        this.displayPageList = [];
        this.currentPage = 1;
        this.pageLimit = this.gv.ctrl_creditlimitPage;
        this.pagination = false;
        this.prevPage = false;
        this.nextPage = false;
        this.validCount = 0;
        // New Variable....
        this.getItem = [];
        this.listta0cnline = [];
        debugger;
        this.siteid = this.gv.ta0defsiteid;
        this.getItem = this.navParams.get('attr');
        this.category = this.getItem.category;
        this.creditnum = this.getItem.creditnum;
        this.returntype = this.getItem.returntype;
        this.reservenum = this.getItem.reservenum;
        this.status = this.getItem.status;
        this.listta0cnline = this.getItem.ta0cnline;
        this.item.siteid = this.gv.ta0defsiteid;
        this.item.cnVarItem = this.navParams.get('attr');
        if ((typeof (this.item.cnVarItem)) !== 'undefined' && (this.item.cnVarItem !== '') && (this.item.cnVarItem !== null)) {
            this.item.ta0rcncat = this.item.cnVarItem.category;
            this.item.ta0rcntyp = this.item.cnVarItem.returntype;
            this.item.ta0rsnum = this.item.cnVarItem.reservenum;
            this.item.ta0rcnnr = this.item.cnVarItem.creditnum;
            this.item.materialListItem = this.item.cnVarItem.ta0cnline;
        }
        var attrCat = this.navParams.get('attrCat');
        var attrType = this.navParams.get('attrType');
        var attrRsNum = this.navParams.get('attrRsNum');
        var attrRsPos = this.navParams.get('attrRspos');
        var attrCnnumber = this.navParams.get('attrCnnumber');
        console.log('attrCat ', attrCat, 'attrType ', attrType, 'attrRsNum ', attrRsNum);
        if ((typeof (attrCat)) !== 'undefined' && (attrCat !== '') && (attrCat !== null)) {
            this.item.ta0rcncat = attrCat;
        }
        if ((typeof (attrType)) !== 'undefined' && (attrType !== '') && (attrType !== null)) {
            this.item.ta0rcntyp = attrType;
        }
        if ((typeof (attrRsNum)) !== 'undefined' && (attrRsNum !== '') && (attrRsNum !== null)) {
            this.item.ta0rsnum = attrRsNum;
        }
        if ((typeof (attrCnnumber)) !== 'undefined' && (attrCnnumber !== '') && (attrCnnumber !== null)) {
            this.item.ta0rcnnr = attrCnnumber;
        }
        if (this.item.materialListItem === null)
            this.item.materialListItem = [];
        if (this.item.materialListItem.length > 0) {
            for (var i = 0; i < this.item.materialListItem.length; i++) {
                if (this.item.materialListItem[i].hasOwnProperty("material") && this.item.materialListItem[i].material !== 'undefined' && this.item.materialListItem[i].material !== null) {
                    this.item.materialListItem[i].validCheckERMS = true;
                    this.item.materialListItem[i]._action = "Change";
                    this.alreadyAdded.push(this.item.materialListItem[i].serialnum);
                }
                else {
                    this.item.materialListItem[i].validCheckERMS = false;
                    this.item.materialListItem[i]._action = "Change";
                    this.alreadyAdded.push(this.item.materialListItem[i].serialnum);
                }
            }
        }
        this.setPagination();
        this.activePagination(this.currentPage);
        this.validateCount();
    }
    CreditNoteScanning.prototype.ionViewDidLoad = function () {
        this.showCheckBlock();
        this.getReturnType();
    };
    CreditNoteScanning.prototype.getReturnType = function () {
        var _this = this;
        if (this.item.ta0rcncat === 'C1') {
            this.item.cnReturnTypes = [];
            this.dataService.fetchCnReturnType().then(function (results) {
                var respResult = results;
                _this.item.cnReturnTypes = respResult.respObject;
                var creditCats = _this.item.cnReturnTypes.filter(function (credityGroup) {
                    return credityGroup.value == "10" || credityGroup.value == "11" || credityGroup.value == "12";
                });
                _this.item.cnReturnTypes = creditCats.reverse();
            });
        }
        else if (this.item.ta0rcncat === 'R1') {
            this.item.cnReturnTypes = [];
            this.dataService.fetchCnReturnType().then(function (results) {
                var respResult = results;
                _this.item.cnReturnTypes = respResult.respObject;
                var removeCats = _this.item.cnReturnTypes.filter(function (removeGroup) {
                    return removeGroup.value == "20" || removeGroup.value == "11" || removeGroup.value == "12";
                });
                _this.item.cnReturnTypes = removeCats.sort();
            });
        }
        else if (this.item.ta0rcncat === 'D1') {
            this.item.cnReturnTypes = [];
            this.dataService.fetchCnReturnType().then(function (results) {
                var respResult = results;
                _this.item.cnReturnTypes = respResult.respObject;
                var divisionCats = _this.item.cnReturnTypes.filter(function (divisionGroup) {
                    return divisionGroup.value == "30" || divisionGroup.value == "31";
                });
                _this.item.cnReturnTypes = divisionCats;
            });
        }
    };
    CreditNoteScanning.prototype.onChangeCheckBoxes = function (serialnum) {
        if (this.selectedlistCheck.includes(serialnum)) {
            for (var i = 0; i < this.item.selectedListItem.length; i++) {
                if (this.item.selectedListItem[i].serialnum === serialnum) {
                    this.item.selectedListItem.splice(i, 1);
                    this.selectedlistCheck.splice(i, 1);
                }
            }
        }
        else {
            for (var i = 0; i < this.item.materialListItem.length; i++) {
                if (this.item.materialListItem[i].serialnum === serialnum) {
                    this.item.selectedListItem.push(this.item.materialListItem[i]);
                    this.selectedlistCheck.push(serialnum);
                }
            }
        }
        var loading = this.loader();
        loading.dismiss();
    };
    CreditNoteScanning.prototype.loader = function () {
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        return loading;
    };
    CreditNoteScanning.prototype.convertCategoryTitle = function (val) {
        var catdesc = '';
        if (val !== '' && val !== null && typeof val !== 'undefined') {
            if (val === 'C1') {
                catdesc = 'Credit';
            }
            else if (val === 'R1') {
                catdesc = 'Removed';
            }
            else if (val === 'D1') {
                catdesc = 'Division';
            }
        }
        return catdesc;
    };
    CreditNoteScanning.prototype.convertStringReturn = function (val) {
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
                typedesc = 'Removal Device - Reuse';
            }
        }
        return typedesc;
    };
    /**
     * Navigation to back screen...
     */
    CreditNoteScanning.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("ListCreateNotePage", '');
    };
    /**
     * Display Message Function
     * @param message
     */
    CreditNoteScanning.prototype.displayErrorAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.item.serialnum = "";
                    }
                }]
        });
        alert.present();
    };
    CreditNoteScanning.prototype.addDeviceEnter = function () {
        if (this.matchingMaterialList.length <= 500) {
            if (this.item.serialnum !== null && this.item.serialnum !== '' && typeof this.item.serialnum !== 'undefined') {
                this.alreadyAdded = this.getValues(this.item.materialListItem, "serialnum");
                if (!this.alreadyAdded.includes(this.item.serialnum)) {
                    this.item.materialListItem.push({ "cnlinenum": (this.item.materialListItem.length + 1), "serialnum": this.item.serialnum, "validCheckERMS": false, "_action": "Add" });
                    this.item.serialnum = "";
                    this.showCheckBlock();
                    this.setPagination();
                    this.validateCount();
                    this.activePagination(this.currentPage);
                }
                else {
                    this.displayErrorAlert("Entered Serial Number is already exist.");
                }
            }
            else {
                this.displayErrorAlert("Device Serial Number is empty, Kindly Verify.");
            }
        }
        else {
            this.displayErrorAlert("You are exceeding the limit.");
        }
    };
    CreditNoteScanning.prototype.showCheckBlock = function () {
        if (this.item.materialListItem.length > 0) {
            this.checkListBlock = true;
        }
        this.validateButtonCheck();
    };
    CreditNoteScanning.prototype.validateCount = function () {
        this.validCount = 0;
        for (var i = 0; i < this.item.materialListItem.length; i++) {
            if (this.item.ta0rcntyp === "11") {
                if (this.item.materialListItem[i].status === 'VALID' && this.item.materialListItem[i].iswarranty) {
                    this.validCount++;
                }
            }
            else if (this.item.ta0rcntyp === "12") {
                if (this.item.materialListItem[i].status === 'VALID' && !this.item.materialListItem[i].iswarranty) {
                    this.validCount++;
                }
            }
        }
        if (this.item.materialListItem.length === this.validCount) {
            this.submitBtn = false;
        }
        else {
            this.submitBtn = true;
        }
    };
    CreditNoteScanning.prototype.validateButtonCheck = function () {
        if (this.verifiedCountDevices()) {
            if (this.item.materialListItem.length > 0) {
                if (this.verifiedCount < this.item.materialListItem.length) {
                    this.validatebtnDisable = false;
                }
                else {
                    this.validatebtnDisable = true;
                }
            }
        }
        var loading = this.loader();
        loading.dismiss();
    };
    CreditNoteScanning.prototype.verifiedCountDevices = function () {
        this.verifiedCount = 0;
        if (this.item.materialListItem.length > 0) {
            for (var i = 0; i < this.item.materialListItem.length; i++) {
                if (this.item.materialListItem[i].validCheckERMS === true)
                    this.verifiedCount++;
            }
        }
        return true;
    };
    CreditNoteScanning.prototype.checkSelectHavingWarranty = function () {
        for (var i = 0; i < this.item.selectedListItem.length; i++) {
            if (this.item.ta0rcntyp === "11") {
                if (this.item.selectedListItem[i].status === 'VALID' && !this.item.selectedListItem[i].iswarranty) {
                    return false;
                }
            }
            else if (this.item.ta0rcntyp === "12") {
                if (this.item.selectedListItem[i].status === 'VALID' && this.item.selectedListItem[i].iswarranty) {
                    return false;
                }
            }
        }
        return true;
    };
    CreditNoteScanning.prototype.checkCommonHavingWarranty = function () {
        for (var i = 0; i < this.item.materialListItem.length; i++) {
            if (this.item.ta0rcntyp === "11") {
                if (this.item.materialListItem[i].status === 'VALID' && !this.item.materialListItem[i].iswarranty) {
                    return false;
                }
            }
            else if (this.item.ta0rcntyp === "12") {
                if (this.item.materialListItem[i].status === 'VALID' && this.item.materialListItem[i].iswarranty) {
                    return false;
                }
            }
        }
        return true;
    };
    CreditNoteScanning.prototype.saveToMaximoData = function (reqInd) {
        var ind = null;
        var saveCon = null;
        if (reqInd === 'SAVE') {
            if (this.selectedlistCheck.length > 0)
                ind = "SEL";
            else
                ind = "COM";
            saveCon = 'DRAFT';
        }
        else {
            ind = "COM";
            saveCon = 'SUBMIT';
        }
        if (ind === "SEL") {
            if (this.checkSelectHavingWarranty()) {
                if (this.item.selectedListItem.length > 0) {
                    this.childSaveToMaximoData(saveCon, ind);
                }
                else {
                    this.showCheckBlock();
                }
            }
            else {
                this.displayErrorAlert("You selected wrong return type");
            }
        }
        else {
            if (this.checkCommonHavingWarranty()) {
                if (this.item.materialListItem.length > 0) {
                    this.childSaveToMaximoData(saveCon, ind);
                }
                else {
                    this.showCheckBlock();
                }
            }
            else {
                this.displayErrorAlert("You selected wrong return type");
            }
        }
    };
    CreditNoteScanning.prototype.childSaveToMaximoData = function (saveCon, ind) {
        var _this = this;
        this.setJson(saveCon, ind).then(function (res) {
            _this.dataService.fetchtoSaveCn(res, _this.ta0rcnnr.trim()).then(function (results) {
                var respObject = [];
                respObject = results;
                if (respObject.processStatus === 'success') {
                    for (var i = 0; i < _this.item.materialListItem.length; i++)
                        _this.item.materialListItem[i]._action = "Change";
                    _this.displayErrorAlert("Your data is successfully saved.");
                }
                else {
                    _this.displayErrorAlert(respObject.respObject);
                }
            });
        });
        var loading = this.loader();
        loading.dismiss();
    };
    CreditNoteScanning.prototype.ValidatingDevices = function () {
        var _this = this;
        var sendItem = [];
        var itemVar = [];
        if (this.verifiedCountDevices()) {
            if ((this.item.materialListItem.length > 0) && (this.item.materialListItem.length > this.verifiedCount)) {
                return new Promise(function (resolve, reject) {
                    for (var i = 0; i < _this.item.materialListItem.length; i++) {
                        if (_this.item.materialListItem[i].validCheckERMS === false) {
                            itemVar.push({ "lineNumber": _this.item.materialListItem[i].cnlinenum, "serialNumber": _this.item.materialListItem[i].serialnum });
                        }
                    }
                    sendItem = { "returnCategory": _this.item.ta0rcncat, "returnType": _this.item.ta0rcntyp, "creditNumber": _this.item.ta0rcnnr, "resrNumber": _this.item.ta0rsnum, "resrItemNumber": "1", "ITEM": itemVar };
                    _this.dataService.ermsValidationCreditNote(sendItem).then(function (results) {
                        var respResult = results;
                        var respObject = [];
                        if (respResult.processStatus === __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].RESP_SUCCESS_MSG) {
                            respObject = respResult.respObject;
                            if (respObject.length > 0) {
                                _this.checkCount = 0;
                                _this.callRequestedFunctionality(respObject).then(function (result) {
                                    _this.validateButtonCheck();
                                    _this.validateCount();
                                    resolve();
                                });
                            }
                        }
                    }, function (error) {
                        // loading.dismiss();
                        _this.displayErrorAlert("ERMS Error Message --> " + error);
                        reject();
                    });
                });
            }
            else {
                // loading.dismiss();
                this.displayErrorAlert("No More Device available to Validate.");
            }
            var loading = this.loader();
            loading.dismiss();
        }
    };
    CreditNoteScanning.prototype.callRequestedFunctionality = function (respObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var total = respObject.length;
            for (var j = 0; j < respObject.length; j++) {
                _this.matchingMaterialList(respObject[j].serialNumber, respObject[j], "ERMS").then(function (result) {
                    var respObject = {};
                    respObject = result;
                    _this.bcrmGetDeviceDetails(respObject.serialnum, respObject.status).then(function (result) {
                        _this.checkCount++;
                        if (total === _this.checkCount)
                            resolve(true);
                    });
                });
            }
        });
    };
    CreditNoteScanning.prototype.checkStringisNumber = function (value) {
        var str = "";
        var exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
        if (!value.match(exp)) {
            debugger;
            value;
        }
        else {
            debugger;
            value;
        }
        debugger;
        var numText = parseInt(value.trim());
        if (isNaN(numText)) {
            str = value.toString();
            return str;
        }
        else {
            str = numText.toString();
            return str;
        }
    };
    CreditNoteScanning.prototype.materialNumberStringCheck = function (value) {
        if (value.trim() !== "") {
            var numText = parseInt(value.trim());
            return numText.toString();
        }
        else {
            return "".toString();
        }
    };
    CreditNoteScanning.prototype.setPagination = function () {
        var limit;
        if (this.item.materialListItem.length > 0) {
            limit = Math.ceil(this.item.materialListItem.length / this.pageLimit);
            this.pagination = (limit > 1) ? true : false;
            for (var i = 1; i <= limit; i++)
                this.paginationList.push(i);
        }
    };
    CreditNoteScanning.prototype.activePagination = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageLimit;
        var end = start + this.pageLimit;
        var endValue = 0;
        if (this.item.materialListItem.length > 0) {
            if (end < this.item.materialListItem.length) {
                endValue = end;
            }
            else {
                endValue = this.item.materialListItem.length;
            }
        }
        else {
            endValue = this.item.materialListItem.length;
        }
        this.item.displayPageList = [];
        for (var i = start; i < endValue; i++) {
            this.item.displayPageList.push(this.item.materialListItem[i]);
        }
        this.allowPagination();
    };
    CreditNoteScanning.prototype.setprevious = function () {
        this.allowPagination();
        if (!this.prevPage) {
            this.currentPage = (this.currentPage - 1);
            this.activePagination(this.currentPage);
        }
    };
    CreditNoteScanning.prototype.setnext = function () {
        this.allowPagination();
        if (!this.nextPage) {
            this.currentPage = (this.currentPage + 1);
            this.activePagination(this.currentPage);
        }
    };
    CreditNoteScanning.prototype.allowPagination = function () {
        // Previous Button
        if ((this.currentPage - 1) > 0) {
            this.prevPage = false;
        }
        else {
            this.prevPage = true;
        }
        // Next Button
        if ((this.currentPage + 1) <= this.paginationList.length) {
            this.nextPage = false;
        }
        else {
            this.nextPage = true;
        }
    };
    CreditNoteScanning.prototype.matchingMaterialList = function (retsernum, retResp, ind) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < _this.item.materialListItem.length; i++) {
                if (ind === "ERMS") {
                    debugger;
                    console.log("first --> " + _this.item.materialListItem[i].serialnum.trim());
                    console.log("second --> " + _this.checkStringisNumber(retsernum.trim()));
                    if (_this.item.materialListItem[i].serialnum.trim().toUpperCase() === _this.checkStringisNumber(retsernum.trim())) {
                        debugger;
                        // this.materialListItem[i].cnlinenum = 2;
                        _this.item.materialListItem[i].cnlinenum = retResp.lineNumber;
                        _this.item.materialListItem[i].material = _this.materialNumberStringCheck(retResp.materialNumber);
                        _this.item.materialListItem[i].description = retResp.maktx;
                        _this.item.materialListItem[i].status = retResp.status;
                        _this.item.materialListItem[i].text = retResp.text;
                        _this.item.materialListItem[i].validCheckERMS = true;
                        _this.verifiedCount++;
                        resolve({ "serialnum": retsernum, "status": retResp.status });
                    }
                }
                else {
                    if (_this.item.materialListItem[i].serialnum.trim().toUpperCase() === retsernum.trim().toUpperCase()) {
                        // this.materialListItem[i].cnlinenum = retResp.cnlinenum;
                        _this.item.materialListItem[i].cnlinenum = 1;
                        _this.materialListItem[i].manufacturer = retResp.ta0manufacturer;
                        // this.materialListItem[i].serialnum = retResp.serialnum;
                        _this.item.materialListItem[i].modelid = retResp.modelid;
                        _this.item.materialListItem[i].siteid = retResp.siteid;
                        _this.item.materialListItem[i].ta0systemstatus = retResp.status;
                        _this.item.materialListItem[i].ta0warranty_begin = retResp.ta0warranty_begin;
                        _this.item.materialListItem[i].ta0warranty_end = retResp.ta0warranty_end;
                        _this.item.materialListItem[i].ta0systemstatus = retResp.ta0systemstatus;
                        _this.item.materialListItem[i].status_description = retResp.status_description;
                        if ((typeof (retResp.ta0warranty_begin && retResp.ta0warranty_end)) !== 'undefined' &&
                            (retResp.ta0warranty_begin && retResp.ta0warranty_end !== '') &&
                            (retResp.ta0warranty_begin && retResp.ta0warranty_end !== null)) {
                            var begindate = retResp.ta0warranty_begin.substr(0, retResp.ta0warranty_begin.indexOf('T'));
                            var enddate = retResp.ta0warranty_end.substr(0, retResp.ta0warranty_end.indexOf('T'));
                            _this.item.materialListItem[i].iswarranty = _this.getwarrantyRange(Date.parse(begindate), Date.parse(enddate));
                        }
                        else {
                            _this.item.materialListItem[i].iswarranty = '';
                        }
                    }
                    resolve();
                }
            }
        });
    };
    CreditNoteScanning.prototype.bcrmGetDeviceDetails = function (assetnum, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (status === 'VALID') {
                _this.dataService.bcrmAssetDetails(assetnum, _this.siteid).then(function (bcrmResult) {
                    var respResult = bcrmResult;
                    _this.item.matchingMaterialList(assetnum, respResult, "BCRM").then(function (result) {
                        resolve();
                    });
                }, function (error) {
                    reject();
                });
            }
            else {
                resolve();
                console.log("Current Asset Number : " + assetnum + " is not valid device in erms.");
            }
        });
    };
    CreditNoteScanning.prototype.deleteDevice = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Delete",
            subTitle: "Do you want to delete device",
            buttons: [{
                    text: 'Yes',
                    handler: function () {
                        if (_this.item.materialListItem[index].validCheckERMS === false) {
                            _this.item.materialListItem.splice(index, 1);
                            _this.validateCount();
                            _this.activePagination(_this.currentPage);
                        }
                        else {
                            // Maximo Delete and splice
                            _this.deleteInValidMaximo(index).then(function (result) {
                                _this.item.aterialListItem.splice(index, 1);
                                _this.validateCount();
                                _this.activePagination(_this.currentPage);
                            });
                        }
                        _this.showCheckBlock();
                    }
                },
                {
                    text: 'No',
                    handler: function () { }
                }]
        });
        alert.present();
    };
    /**
     * BarCode Tab Scanner...
     */
    CreditNoteScanning.prototype.barcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode"
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.serialnum = barcodeData.text.trim();
            _this.addDeviceEnter();
        });
    };
    /**
     * Create Valid Json for save and submitting...
     * @param saveType
     */
    CreditNoteScanning.prototype.setJson = function (saveType, ind) {
        var _this = this;
        var res = {};
        return new Promise(function (resolve) {
            res = {
                "status": saveType,
                "returnCategory": _this.item.ta0rcncat,
                "returnType": _this.item.ta0rcntyp,
                "resrNumber": typeof (_this.item.ta0rsnum) !== 'undefined' && _this.item.ta0rsnum !== '' && (_this.item.ta0rsnum) !== null ? _this.item.ta0rsnum : '',
                "resrItemNumber": _this.item.ta0rspos,
                "siteid": _this.item.siteid,
                "creditnum": _this.item.ta0rcnnr,
                "ta0cnline": (ind === "SEL") ? _this.item.selectedListItem : _this.item.materialListItem
            };
            resolve(res);
        });
    };
    CreditNoteScanning.prototype.deleteInValidMaximo = function (index) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.item.materialListItem[index]._action = "Delete";
            var res = {};
            res = {
                "status": 'DELETE',
                "returnCategory": _this.item.ta0rcncat,
                "returnType": _this.item.ta0rcntyp,
                "resrNumber": typeof (_this.item.ta0rsnum) !== 'undefined' && _this.item.ta0rsnum !== '' && (_this.item.ta0rsnum) !== null ? _this.item.ta0rsnum : '',
                "resrItemNumber": _this.item.ta0rspos,
                "siteid": _this.item.siteid,
                "creditnum": _this.item.ta0rcnnr,
                "ta0cnline": [
                    _this.item.materialListItem[index]
                ]
            };
            _this.dataService.fetchtoSaveCn(res, _this.ta0rcnnr.trim()).then(function (results) {
                resolve();
            });
            var loading = _this.loader();
            loading.dismiss();
        });
    };
    /**
     * check for validation for warranty...
     *@param date_start
     *@param date_end
     */
    CreditNoteScanning.prototype.getwarrantyRange = function (date_start, date_end) {
        var currentDate = new Date();
        var curDate = Date.parse(currentDate.toISOString());
        if (curDate > date_start && curDate < date_end) {
            return true;
        }
        else {
            return false;
        }
    };
    CreditNoteScanning.prototype.warrantytext = function (val) {
        var warDesc = '';
        if (val !== '' && val !== null && typeof val !== 'undefined') {
            if (val) {
                warDesc = 'Yes';
            }
            else if (!val) {
                warDesc = 'No';
            }
            else
                warDesc = '';
            return warDesc;
        }
    };
    /**
     * Get Values from Key...
     * @param obj
     * @param key
     */
    CreditNoteScanning.prototype.getValues = function (obj, key) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getValues(obj[i], key));
            }
            else if (i == key) {
                objects.push(obj[i]);
            }
        }
        return objects;
    };
    CreditNoteScanning = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'credit-note-scanning',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/credit-note-scanning/credit-note-scanning.html"*/'<ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Device Scanning Details</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <ion-fab top right style="top: 0%">\n            <button ion-fab mini class="flash">\n              <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n                {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n            </button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 col-sm-2>\n          <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-xs-4 col-sm-8 >\n      <ion-row>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Credit Number</ion-label>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{item.ta0rcnnr}}</ion-label>\n      </ion-row>\n    </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="item.ta0rcncat ===\'D1\' " >\n    <ion-col col-6 col-lg-6 col-xs-4 col-sm-8 >\n      <ion-row>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Number</ion-label>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{item.ta0rsnum}}</ion-label>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-xs-4 col-sm-8 >\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Item No.</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{item.ta0rspos}}</ion-label>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col col-lg-6>\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Category Type</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{convertCategoryTitle(item.ta0rcncat)}}</ion-label>\n          \n        </ion-row>\n      </ion-col>\n\n      <ion-col col-lg-6>\n          <!-- <ion-row>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Return Type</ion-label>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{convertStringReturn(ta0rcntyp)}}</ion-label>\n          </ion-row> -->\n          <ion-row>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Return Type</ion-label>\n            <ion-col col-8>\n            <ion-select [(ngModel)]="item.ta0rcntyp" >\n              <ion-option *ngFor="let returnItem of item.cnReturnTypes" [value]="returnItem.value"\n                [selected]="returnItem.value === item.ta0rcntyp">{{ returnItem.description }}</ion-option>\n            </ion-select>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        \n    \n\n\n\n  </ion-row>\n  <br />\n  <ion-row style="margin-bottom: -16px;">\n    <ion-col col-6>\n      <ion-checkbox [(ngModel)]="scanToggle" (ionChange)="scanToggleChange()" style="float: left;"></ion-checkbox>\n      <span>\n        <ion-label style="font-size: 17px; float: left; margin-top: 3px; padding-left: 13px; color: green;">Do you like\n          to scan the devices... </ion-label>\n      </span>\n    </ion-col>\n    <ion-col col-6></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n      <ion-item style="float: right;" *ngIf="!scanToggle">\n        <ion-label stacked class="ion-1x"> Enter Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="item.serialnum"    ></ion-input>\n      </ion-item>\n      <ion-item style="float: right;" *ngIf="scanToggle">\n        <ion-label stacked> Scan Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="item.serialnum" (keypress)="scanningDevices($event)" [disabled]=scanToggle>\n        </ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 22px 0px 0px 0px;">\n      <button ion-button style="float: right;" [disabled]="this.item.cnStatus !== \'DRAFT\' "\n        *ngIf="!scanToggle" (click)="addDeviceEnter()">\n        Okay\n      </button>\n      <button ion-button (click)="barcodeScan()" style="float: right;" *ngIf="scanToggle"\n      [disabled]="this.item.cnStatus !== \'DRAFT\' ">\n        <ion-icon name="barcode" item-right></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  \n\n  <ion-list *ngIf="checkListBlock">\n    <ion-row>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n        <ion-label stacked> </ion-label>\n      </ion-col>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 style="text-align: right;">\n        <ion-label stacked class="ion-1x"> Devices selected : {{ selectedlistCheck.length  }} </ion-label>\n      </ion-col>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 style="text-align: right;">\n        <ion-label stacked class="ion-1x"> Business Area : {{ item. siteid  }} </ion-label>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-grid>\n      <ion-item>\n        <ion-label>\n          <ion-row>\n            <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> Sel </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> No.</ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Serial No </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Material </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Description </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf ="item.ta0rcntyp ===\'R1\'" >\n              <ion-label stacked class="ion-1x"> Device Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap  *ngIf=" item.ta0rcntyp === \'11\' ||  item.ta0rcntyp === \'12\'  ">\n              <ion-label stacked class="ion-1x"> Warr. </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> Rmv </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngFor=\'let device of item.displayPageList; let i = index;\' [ngClass]="i%2 != 0 ? \'classA\' : \'classB\'">\n        <ion-label>\n          <ion-row>\n            <ion-col col-1 text-wrap>\n              <span *ngIf="(device.validCheckERMS || !device.warrFullfillment) && device.status!==\'INVALID\'  ">\n                <ion-checkbox (click)="onChangeCheckBoxes(device.serialnum)"  [checked]="selectedlistCheck.includes(device.serialnum)"></ion-checkbox>\n              </span>\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              {{ (((currentPage-1)*pageLimit)+(i+1)) }}.\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.serialnum }}\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.material }}\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.description }}\n            </ion-col>\n            <ion-col col-2 text-wrap   *ngIf="item.ta0rcntyp ===\'R1\'" >\n              {{ device.ta0systemstatus }}\n            </ion-col>\n            <ion-col col-1 text-wrap  *ngIf="item. ta0rcntyp === \'11\' || item. ta0rcntyp === \'12\' " >\n              {{ warrantytext(device.iswarranty) }}\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.status }}\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              <span *ngIf="item.ta0rcntyp === \'11\'">\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && device.iswarranty" color="secondary" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && !device.iswarranty" color="light" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n              </span>\n              <span *ngIf="item.ta0rcntyp === \'12\'">\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && device.iswarranty" color="light" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && !device.iswarranty" color="secondary" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n              </span>\n              <button ion-button *ngIf="device.validCheckERMS && device.status===\'INVALID\'" color="danger" (click)="deleteDevice(i*currentPage)">\n                <ion-icon name="trash" item-center></ion-icon>\n              </button>\n              <button ion-button *ngIf="!device.validCheckERMS" color="default" (click)="deleteDevice(i*currentPage)">\n                <ion-icon name="trash" item-center></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row  *ngIf="device.status===\'INVALID\'" >\n            <ion-col>\n              <p style="color: red; font-size: 12px;">{{ device.text }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <button ion-button style="float: right; padding: 15px;" [disabled]="validatebtnDisable" (click)="ValidatingDevices()">\n          Validate\n        </button>\n      </ion-item>\n    </ion-grid>\n    <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align: left;">\n        <button ion-button style="padding: 15px;" [disabled]="submitBtn" (click)="saveToMaximoData(\'SUBMIT\')">Submit</button>\n      </ion-col>\n      <ion-col style="text-align: right;">\n        <button ion-button style="padding: 15px;" (click)="saveToMaximoData(\'SAVE\')">Save</button>\n        <button ion-button style="padding: 15px;" (click)="goBack()">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/credit-note-scanning/credit-note-scanning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CreditNoteScanning);
    return CreditNoteScanning;
}());

//# sourceMappingURL=credit-note-scanning.js.map

/***/ })

});
//# sourceMappingURL=72.js.map