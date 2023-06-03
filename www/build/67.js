webpackJsonp([67],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetailPage; });
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








var NoteDetailPage = /** @class */ (function () {
    function NoteDetailPage(appCtrl, navCtrl, alertCtrl, dataService, loadingCtrl, barcodeScanner, gv, gf, jsonStoreCurd, navParams) {
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
        this.siteid = this.gv.ta0defsiteid;
        this.cnVarItem = this.navParams.get('attr');
        if ((typeof (this.cnVarItem)) !== 'undefined' && (this.cnVarItem !== '') && (this.cnVarItem !== null)) {
            this.ta0rcncat = this.cnVarItem.category;
            this.ta0rcntyp = this.cnVarItem.returntype;
            this.ta0rsnum = this.cnVarItem.reservenum;
            this.ta0rcnnr = this.cnVarItem.creditnum;
            this.materialListItem = this.cnVarItem.ta0cnline;
        }
        var attrCat = this.navParams.get('attrCat');
        var attrType = this.navParams.get('attrType');
        var attrRsNum = this.navParams.get('attrRsNum');
        var attrRsPos = this.navParams.get('attrRspos');
        var attrCnnumber = this.navParams.get('attrCnnumber');
        console.log('attrCat ', attrCat, 'attrType ', attrType, 'attrRsNum ', attrRsNum);
        if ((typeof (attrCat)) !== 'undefined' && (attrCat !== '') && (attrCat !== null)) {
            this.ta0rcncat = attrCat;
        }
        if ((typeof (attrType)) !== 'undefined' && (attrType !== '') && (attrType !== null)) {
            this.ta0rcntyp = attrType;
        }
        if ((typeof (attrRsNum)) !== 'undefined' && (attrRsNum !== '') && (attrRsNum !== null)) {
            this.ta0rsnum = attrRsNum;
        }
        if ((typeof (attrCnnumber)) !== 'undefined' && (attrCnnumber !== '') && (attrCnnumber !== null)) {
            this.ta0rcnnr = attrCnnumber;
        }
        if (this.materialListItem === null)
            this.materialListItem = [];
        if (this.materialListItem.length > 0) {
            for (var i = 0; i < this.materialListItem.length; i++) {
                if (this.materialListItem[i].hasOwnProperty("material") && this.materialListItem[i].material !== 'undefined' && this.materialListItem[i].material !== null) {
                    this.materialListItem[i].validCheckERMS = true;
                    this.materialListItem[i]._action = "Change";
                    this.alreadyAdded.push(this.materialListItem[i].serialnum);
                }
                else {
                    this.materialListItem[i].validCheckERMS = false;
                    this.materialListItem[i]._action = "Change";
                    this.alreadyAdded.push(this.materialListItem[i].serialnum);
                }
            }
        }
        this.setPagination();
        this.activePagination(this.currentPage);
        this.validateCount();
    }
    NoteDetailPage.prototype.ionViewDidLoad = function () {
        this.showCheckBlock();
    };
    NoteDetailPage.prototype.onChangeCheckBoxes = function (serialnum) {
        if (this.selectedlistCheck.includes(serialnum)) {
            for (var i = 0; i < this.selectedListItem.length; i++) {
                if (this.selectedListItem[i].serialnum === serialnum) {
                    this.selectedListItem.splice(i, 1);
                    this.selectedlistCheck.splice(i, 1);
                }
            }
        }
        else {
            for (var i = 0; i < this.materialListItem.length; i++) {
                if (this.materialListItem[i].serialnum === serialnum) {
                    this.selectedListItem.push(this.materialListItem[i]);
                    this.selectedlistCheck.push(serialnum);
                }
            }
        }
        var loading = this.loader();
        loading.dismiss();
    };
    NoteDetailPage.prototype.loader = function () {
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        return loading;
    };
    NoteDetailPage.prototype.convertCategoryTitle = function (val) {
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
    NoteDetailPage.prototype.convertStringReturn = function (val) {
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
    NoteDetailPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("ListCreateNotePage", '');
    };
    /**
     * Display Message Function
     * @param message
     */
    NoteDetailPage.prototype.displayErrorAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.serialnum = "";
                    }
                }]
        });
        alert.present();
    };
    NoteDetailPage.prototype.addDeviceEnter = function () {
        if (this.matchingMaterialList.length <= 500) {
            if (this.serialnum !== null && this.serialnum !== '' && typeof this.serialnum !== 'undefined') {
                this.alreadyAdded = this.getValues(this.materialListItem, "serialnum");
                if (!this.alreadyAdded.includes(this.serialnum)) {
                    this.materialListItem.push({ "cnlinenum": (this.materialListItem.length + 1), "serialnum": this.serialnum, "validCheckERMS": false, "_action": "Add" });
                    this.serialnum = "";
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
    NoteDetailPage.prototype.showCheckBlock = function () {
        if (this.materialListItem.length > 0) {
            this.checkListBlock = true;
        }
        this.validateButtonCheck();
    };
    NoteDetailPage.prototype.validateCount = function () {
        this.validCount = 0;
        for (var i = 0; i < this.materialListItem.length; i++) {
            if (this.ta0rcntyp === "11") {
                if (this.materialListItem[i].status === 'VALID' && this.materialListItem[i].iswarranty) {
                    this.validCount++;
                }
            }
            else if (this.ta0rcntyp === "12") {
                if (this.materialListItem[i].status === 'VALID' && !this.materialListItem[i].iswarranty) {
                    this.validCount++;
                }
            }
        }
        if (this.materialListItem.length === this.validCount) {
            this.submitBtn = false;
        }
        else {
            this.submitBtn = true;
        }
    };
    NoteDetailPage.prototype.validateButtonCheck = function () {
        if (this.verifiedCountDevices()) {
            if (this.materialListItem.length > 0) {
                if (this.verifiedCount < this.materialListItem.length) {
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
    NoteDetailPage.prototype.verifiedCountDevices = function () {
        this.verifiedCount = 0;
        if (this.materialListItem.length > 0) {
            for (var i = 0; i < this.materialListItem.length; i++) {
                if (this.materialListItem[i].validCheckERMS === true)
                    this.verifiedCount++;
            }
        }
        return true;
    };
    NoteDetailPage.prototype.checkSelectHavingWarranty = function () {
        for (var i = 0; i < this.selectedListItem.length; i++) {
            if (this.ta0rcntyp === "11") {
                if (this.selectedListItem[i].status === 'VALID' && !this.selectedListItem[i].iswarranty) {
                    return false;
                }
            }
            else if (this.ta0rcntyp === "12") {
                if (this.selectedListItem[i].status === 'VALID' && this.selectedListItem[i].iswarranty) {
                    return false;
                }
            }
        }
        return true;
    };
    NoteDetailPage.prototype.checkCommonHavingWarranty = function () {
        for (var i = 0; i < this.materialListItem.length; i++) {
            if (this.ta0rcntyp === "11") {
                if (this.materialListItem[i].status === 'VALID' && !this.materialListItem[i].iswarranty) {
                    return false;
                }
            }
            else if (this.ta0rcntyp === "12") {
                if (this.materialListItem[i].status === 'VALID' && this.materialListItem[i].iswarranty) {
                    return false;
                }
            }
        }
        return true;
    };
    NoteDetailPage.prototype.saveToMaximoData = function (reqInd) {
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
                if (this.selectedListItem.length > 0) {
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
                if (this.materialListItem.length > 0) {
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
    NoteDetailPage.prototype.childSaveToMaximoData = function (saveCon, ind) {
        var _this = this;
        this.setJson(saveCon, ind).then(function (res) {
            _this.dataService.fetchtoSaveCn(res, _this.ta0rcnnr.trim()).then(function (results) {
                var respObject = [];
                respObject = results;
                if (respObject.processStatus === 'success') {
                    for (var i = 0; i < _this.materialListItem.length; i++)
                        _this.materialListItem[i]._action = "Change";
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
    NoteDetailPage.prototype.ValidatingDevices = function () {
        var _this = this;
        var sendItem = [];
        var itemVar = [];
        if (this.verifiedCountDevices()) {
            if ((this.materialListItem.length > 0) && (this.materialListItem.length > this.verifiedCount)) {
                return new Promise(function (resolve, reject) {
                    for (var i = 0; i < _this.materialListItem.length; i++) {
                        if (_this.materialListItem[i].validCheckERMS === false) {
                            itemVar.push({ "lineNumber": _this.materialListItem[i].cnlinenum, "serialNumber": _this.materialListItem[i].serialnum });
                        }
                    }
                    sendItem = { "returnCategory": _this.ta0rcncat, "returnType": _this.ta0rcntyp, "creditNumber": _this.ta0rcnnr, "resrNumber": _this.ta0rsnum, "resrItemNumber": "1", "ITEM": itemVar };
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
    NoteDetailPage.prototype.callRequestedFunctionality = function (respObject) {
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
    NoteDetailPage.prototype.checkStringisNumber = function (value) {
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
    NoteDetailPage.prototype.materialNumberStringCheck = function (value) {
        if (value.trim() !== "") {
            var numText = parseInt(value.trim());
            return numText.toString();
        }
        else {
            return "".toString();
        }
    };
    NoteDetailPage.prototype.setPagination = function () {
        var limit;
        if (this.materialListItem.length > 0) {
            limit = Math.ceil(this.materialListItem.length / this.pageLimit);
            this.pagination = (limit > 1) ? true : false;
            for (var i = 1; i <= limit; i++)
                this.paginationList.push(i);
        }
    };
    NoteDetailPage.prototype.activePagination = function (page) {
        this.currentPage = page;
        var start = (page - 1) * this.pageLimit;
        var end = start + this.pageLimit;
        var endValue = 0;
        if (this.materialListItem.length > 0) {
            if (end < this.materialListItem.length) {
                endValue = end;
            }
            else {
                endValue = this.materialListItem.length;
            }
        }
        else {
            endValue = this.materialListItem.length;
        }
        this.displayPageList = [];
        for (var i = start; i < endValue; i++) {
            this.displayPageList.push(this.materialListItem[i]);
        }
        this.allowPagination();
    };
    NoteDetailPage.prototype.setprevious = function () {
        this.allowPagination();
        if (!this.prevPage) {
            this.currentPage = (this.currentPage - 1);
            this.activePagination(this.currentPage);
        }
    };
    NoteDetailPage.prototype.setnext = function () {
        this.allowPagination();
        if (!this.nextPage) {
            this.currentPage = (this.currentPage + 1);
            this.activePagination(this.currentPage);
        }
    };
    NoteDetailPage.prototype.allowPagination = function () {
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
    NoteDetailPage.prototype.matchingMaterialList = function (retsernum, retResp, ind) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < _this.materialListItem.length; i++) {
                if (ind === "ERMS") {
                    debugger;
                    console.log("first --> " + _this.materialListItem[i].serialnum.trim());
                    console.log("second --> " + _this.checkStringisNumber(retsernum.trim()));
                    if (_this.materialListItem[i].serialnum.trim().toUpperCase() === _this.checkStringisNumber(retsernum.trim())) {
                        debugger;
                        // this.materialListItem[i].cnlinenum = 2;
                        _this.materialListItem[i].cnlinenum = retResp.lineNumber;
                        _this.materialListItem[i].material = _this.materialNumberStringCheck(retResp.materialNumber);
                        _this.materialListItem[i].description = retResp.maktx;
                        _this.materialListItem[i].status = retResp.status;
                        _this.materialListItem[i].text = retResp.text;
                        _this.materialListItem[i].validCheckERMS = true;
                        _this.verifiedCount++;
                        resolve({ "serialnum": retsernum, "status": retResp.status });
                    }
                }
                else {
                    if (_this.materialListItem[i].serialnum.trim().toUpperCase() === retsernum.trim().toUpperCase()) {
                        // this.materialListItem[i].cnlinenum = retResp.cnlinenum;
                        _this.materialListItem[i].cnlinenum = 1;
                        _this.materialListItem[i].manufacturer = retResp.ta0manufacturer;
                        // this.materialListItem[i].serialnum = retResp.serialnum;
                        _this.materialListItem[i].modelid = retResp.modelid;
                        _this.materialListItem[i].siteid = retResp.siteid;
                        _this.materialListItem[i].ta0systemstatus = retResp.status;
                        _this.materialListItem[i].ta0warranty_begin = retResp.ta0warranty_begin;
                        _this.materialListItem[i].ta0warranty_end = retResp.ta0warranty_end;
                        _this.materialListItem[i].ta0systemstatus = retResp.ta0systemstatus;
                        _this.materialListItem[i].status_description = retResp.status_description;
                        if ((typeof (retResp.ta0warranty_begin && retResp.ta0warranty_end)) !== 'undefined' &&
                            (retResp.ta0warranty_begin && retResp.ta0warranty_end !== '') &&
                            (retResp.ta0warranty_begin && retResp.ta0warranty_end !== null)) {
                            var begindate = retResp.ta0warranty_begin.substr(0, retResp.ta0warranty_begin.indexOf('T'));
                            var enddate = retResp.ta0warranty_end.substr(0, retResp.ta0warranty_end.indexOf('T'));
                            _this.materialListItem[i].iswarranty = _this.getwarrantyRange(Date.parse(begindate), Date.parse(enddate));
                        }
                        else {
                            _this.materialListItem[i].iswarranty = '';
                        }
                    }
                    resolve();
                }
            }
        });
    };
    NoteDetailPage.prototype.bcrmGetDeviceDetails = function (assetnum, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (status === 'VALID') {
                _this.dataService.bcrmAssetDetails(assetnum, _this.siteid).then(function (bcrmResult) {
                    var respResult = bcrmResult;
                    _this.matchingMaterialList(assetnum, respResult, "BCRM").then(function (result) {
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
    NoteDetailPage.prototype.deleteDevice = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Delete",
            subTitle: "Do you want to delete device",
            buttons: [{
                    text: 'Yes',
                    handler: function () {
                        if (_this.materialListItem[index].validCheckERMS === false) {
                            _this.materialListItem.splice(index, 1);
                            _this.validateCount();
                            _this.activePagination(_this.currentPage);
                        }
                        else {
                            // Maximo Delete and splice
                            _this.deleteInValidMaximo(index).then(function (result) {
                                _this.materialListItem.splice(index, 1);
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
    NoteDetailPage.prototype.barcodeScan = function () {
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
    NoteDetailPage.prototype.setJson = function (saveType, ind) {
        var _this = this;
        var res = {};
        return new Promise(function (resolve) {
            res = {
                "status": saveType,
                "returnCategory": _this.ta0rcncat,
                "returnType": _this.ta0rcntyp,
                "resrNumber": typeof (_this.ta0rsnum) !== 'undefined' && _this.ta0rsnum !== '' && (_this.ta0rsnum) !== null ? _this.ta0rsnum : '',
                "resrItemNumber": _this.ta0rspos,
                "siteid": _this.siteid,
                "creditnum": _this.ta0rcnnr,
                "ta0cnline": (ind === "SEL") ? _this.selectedListItem : _this.materialListItem
            };
            resolve(res);
        });
    };
    NoteDetailPage.prototype.deleteInValidMaximo = function (index) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.materialListItem[index]._action = "Delete";
            var res = {};
            res = {
                "status": 'DELETE',
                "returnCategory": _this.ta0rcncat,
                "returnType": _this.ta0rcntyp,
                "resrNumber": typeof (_this.ta0rsnum) !== 'undefined' && _this.ta0rsnum !== '' && (_this.ta0rsnum) !== null ? _this.ta0rsnum : '',
                "resrItemNumber": _this.ta0rspos,
                "siteid": _this.siteid,
                "creditnum": _this.ta0rcnnr,
                "ta0cnline": [
                    _this.materialListItem[index]
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
    NoteDetailPage.prototype.getwarrantyRange = function (date_start, date_end) {
        var currentDate = new Date();
        var curDate = Date.parse(currentDate.toISOString());
        if (curDate > date_start && curDate < date_end) {
            return true;
        }
        else {
            return false;
        }
    };
    NoteDetailPage.prototype.warrantytext = function (val) {
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
    NoteDetailPage.prototype.getValues = function (obj, key) {
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
    NoteDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-note-detail',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/note-detail/note-detail.html"*/'<ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n        <button ion-button menuToggle clear>\n          <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-sm-8>\n        <div class="pageTitle">Device Scanning Details</div>\n      </ion-col>\n      <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n        <ion-col col-2 col-sm-2>\n          <ion-fab top right style="top: 0%">\n            <button ion-fab mini class="flash">\n              <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n                {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n            </button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 col-sm-2>\n          <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-xs-4 col-sm-8>\n      <ion-row>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Credit Number</ion-label>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ta0rcnnr}}</ion-label>\n      </ion-row>\n    </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="ta0rcncat ===\'D1\' " >\n    <ion-col col-6 col-lg-6 col-xs-4 col-sm-8 >\n      <ion-row>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Number</ion-label>\n        <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ta0rsnum}}</ion-label>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-xs-4 col-sm-8 >\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Reservation Item Number</ion-label>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{ta0rspos}}</ion-label>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-xs-6 >\n        <ion-row>\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Category Type</ion-label>\n\n          <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{convertCategoryTitle(ta0rcncat)}}</ion-label>\n          \n        </ion-row>\n      </ion-col>\n\n      <ion-col col-6 col-lg-6 col-xs-6 >\n          <ion-row>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">Return Type</ion-label>\n            <ion-label stacked class="ion-1x" style=" color: rgb(130, 130, 130);">{{convertStringReturn(ta0rcntyp)}}</ion-label>\n          </ion-row>\n        </ion-col>\n  </ion-row>\n  <br />\n  <ion-row style="margin-bottom: -16px;">\n    <ion-col col-6>\n      <ion-checkbox [(ngModel)]="scanToggle" (ionChange)="scanToggleChange()" style="float: left;"></ion-checkbox>\n      <span>\n        <ion-label style="font-size: 17px; float: left; margin-top: 3px; padding-left: 13px; color: green;">Do you like\n          to scan the devices... </ion-label>\n      </span>\n    </ion-col>\n    <ion-col col-6></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n      <ion-item style="float: right;" *ngIf="!scanToggle">\n        <ion-label stacked class="ion-1x"> Enter Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="serialnum"></ion-input>\n      </ion-item>\n      <ion-item style="float: right;" *ngIf="scanToggle">\n        <ion-label stacked> Scan Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="serialnum" (keypress)="scanningDevices($event)" [disabled]=scanToggle>\n        </ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 22px 0px 0px 0px;">\n      <button ion-button style="float: right;" [disabled]="cnStatus === \'SUBMIT\' || this.cnStatus === \'CLOSED\' "\n        *ngIf="!scanToggle" (click)="addDeviceEnter()">\n        Okay\n      </button>\n      <button ion-button (click)="barcodeScan()" style="float: right;" *ngIf="scanToggle"\n        [disabled]="cnStatus===\'SUBMIT\' || this.cnStatus === \'CLOSED\'">\n        <ion-icon name="barcode" item-right></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  \n\n  <ion-list *ngIf="checkListBlock">\n    <ion-row>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4>\n        <ion-label stacked> </ion-label>\n      </ion-col>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 style="text-align: right;">\n        <ion-label stacked class="ion-1x"> Devices selected : {{ selectedlistCheck.length  }} </ion-label>\n      </ion-col>\n      <ion-col col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 style="text-align: right;">\n        <ion-label stacked class="ion-1x"> Business Area : {{  siteid  }} </ion-label>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-grid>\n      <ion-item>\n        <ion-label>\n          <ion-row>\n            <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> Sel </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> No.</ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Serial No </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Material </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Description </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap *ngIf ="ta0rcntyp ===\'R1\'" >\n              <ion-label stacked class="ion-1x"> Device Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap  *ngIf=" ta0rcntyp === \'11\' ||  ta0rcntyp === \'12\'  ">\n              <ion-label stacked class="ion-1x"> Warr. </ion-label>\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              <ion-label stacked class="ion-1x"> Status </ion-label>\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              <ion-label stacked class="ion-1x"> Rmv </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngFor=\'let device of displayPageList; let i = index;\' [ngClass]="i%2 != 0 ? \'classA\' : \'classB\'">\n        <ion-label>\n          <ion-row>\n            <ion-col col-1 text-wrap>\n              <span *ngIf="(device.validCheckERMS || !device.warrFullfillment) && device.status!==\'INVALID\'  ">\n                <ion-checkbox (click)="onChangeCheckBoxes(device.serialnum)"  [checked]="selectedlistCheck.includes(device.serialnum)"></ion-checkbox>\n              </span>\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              {{ (((currentPage-1)*pageLimit)+(i+1)) }}.\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.serialnum }}\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.material }}\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.description }}\n            </ion-col>\n            <ion-col col-2 text-wrap   *ngIf="ta0rcntyp ===\'R1\'" >\n              {{ device.ta0systemstatus }}\n            </ion-col>\n            <ion-col col-1 text-wrap  *ngIf=" ta0rcntyp === \'11\' ||  ta0rcntyp === \'12\' " >\n              {{ warrantytext(device.iswarranty) }}\n            </ion-col>\n            <ion-col col-2 text-wrap>\n              {{ device.status }}\n            </ion-col>\n            <ion-col col-1 text-wrap>\n              <span *ngIf="ta0rcntyp === \'11\'">\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && device.iswarranty" color="secondary" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && !device.iswarranty" color="light" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n              </span>\n              <span *ngIf="ta0rcntyp === \'12\'">\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && device.iswarranty" color="light" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n                <button ion-button *ngIf="device.validCheckERMS && device.status===\'VALID\' && !device.iswarranty" color="secondary" (click)="deleteDevice(i*currentPage)">\n                  <ion-icon name="trash" item-center></ion-icon>\n                </button>\n              </span>\n              <button ion-button *ngIf="device.validCheckERMS && device.status===\'INVALID\'" color="danger" (click)="deleteDevice(i*currentPage)">\n                <ion-icon name="trash" item-center></ion-icon>\n              </button>\n              <button ion-button *ngIf="!device.validCheckERMS" color="default" (click)="deleteDevice(i*currentPage)">\n                <ion-icon name="trash" item-center></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row  *ngIf="device.status===\'INVALID\'" >\n            <ion-col>\n              <p style="color: red; font-size: 12px;">{{ device.text }}</p>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <button ion-button style="float: right; padding: 15px;" [disabled]="validatebtnDisable" (click)="ValidatingDevices()">\n          Validate\n        </button>\n      </ion-item>\n    </ion-grid>\n    <ion-row *ngIf="pagination">\n      <ion-col col-12 col-md-12 col-sm-12 style="text-align: center;">\n        <div class="pagination">\n          <a href="javascript:;" [ngClass]="(prevPage)?\'disabled\':\'\'"  (click)="setprevious()">&laquo;</a>\n          <a href="javascript:;" *ngFor=\'let page of paginationList; let i=index;\' [ngClass]="(currentPage===(i+1))?\'active\':\'\'" (click)="activePagination(page)"> {{ page }}</a>\n          <a href="javascript:;" [ngClass]="(nextPage)?\'disabled\':\'\'" (click)="setnext()" >&raquo;</a>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align: left;">\n        <button ion-button style="padding: 15px;" [disabled]="submitBtn" (click)="saveToMaximoData(\'SUBMIT\')">Submit</button>\n      </ion-col>\n      <ion-col style="text-align: right;">\n        <button ion-button style="padding: 15px;" (click)="saveToMaximoData(\'SAVE\')">Save</button>\n        <button ion-button style="padding: 15px;" (click)="goBack()">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/ERMS-Validation/note-detail/note-detail.html"*/,
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
    ], NoteDetailPage);
    return NoteDetailPage;
}());

//# sourceMappingURL=note-detail.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailPageModule", function() { return NoteDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__note_detail__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoteDetailPageModule = /** @class */ (function () {
    function NoteDetailPageModule() {
    }
    NoteDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__note_detail__["a" /* NoteDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__note_detail__["a" /* NoteDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], NoteDetailPageModule);
    return NoteDetailPageModule;
}());

//# sourceMappingURL=note-detail.module.js.map

/***/ })

});
//# sourceMappingURL=67.js.map