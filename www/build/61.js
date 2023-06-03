webpackJsonp([61],{

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GirDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GirDetailPage = /** @class */ (function () {
    function GirDetailPage(appCtrl, navCtrl, alertCtrl, modalCtrl, dataService, loadingCtrl, barcodeScanner, gv, gf, navParams, jsonStoreCrud) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.gv = gv;
        this.gf = gf;
        this.navParams = navParams;
        this.jsonStoreCrud = jsonStoreCrud;
        this.accListDevice = true;
        this.showExcessDetails = true;
        this.showDeviceStatus = false;
        this.submitValid = false;
        this.validGoodRecipientId = 'default';
        this.laborItem = [];
        this.girVarItem = [];
        this.girlist = [];
        this.quantityCall = [];
        this.resultIIB = [];
        this.deleteCheck = [];
        this.containerBoot = false;
        this.scanToggle = false;
        this.valuationType = "";
        console.log("Access constructor");
        console.log("Trigger this.getFetchDetails");
        this.getFetchDetails();
        this.girVarItem = this.navParams.get('attr');
        console.log("this.girVarItem : " + JSON.stringify(this.girVarItem));
        console.log("ta0goodsissueitem size : " + this.girVarItem.ta0goodsissueitem);
        if ((typeof (this.girVarItem.ta0goodsissueitem) !== 'undefined') && (this.girVarItem.ta0goodsissueitem !== '') && (this.girVarItem.ta0goodsissueitem !== null)) {
            this.showDeviceStatus = this.girVarItem.ta0goodsissueitem.length > 0 ? true : false;
        }
        else {
            this.girVarItem.ta0goodsissueitem = [];
            this.showDeviceStatus = this.girVarItem.ta0goodsissueitem.length > 0 ? true : false;
        }
        this.deletionDevicesCount();
        /*
         *  CR003 New Valuation Type
         */
        //search valuation type
        var querypart = [];
        querypart.push({ "$equal": [{ "domainid": __WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].TA0VALUATIONTYPE }] });
        var sortOrder = [{ "value": "asc" }];
        this.jsonStoreCrud.getSearchArraywithSort(__WEBPACK_IMPORTED_MODULE_7__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, querypart, sortOrder).then(function (result) {
            _this.valuationTypeList = result;
            console.log("valuationTypeList : " + JSON.stringify(_this.valuationTypeList));
        }).catch(function (error) {
            console.log("Get valuation type error", JSON.stringify(error));
        });
    }
    GirDetailPage.prototype.userChanged = function (event) {
        console.log('event: ', event);
    };
    /**
     * Scan Toggle Change to empty the values...
     */
    GirDetailPage.prototype.scanToggleChange = function () {
        this.ta0serialnum = '';
    };
    /**
     * Load Page...
     */
    GirDetailPage.prototype.ionViewDidLoad = function () {
        this.ta0oldquantity = Number(this.girVarItem.ta0quantity);
    };
    /**
     * Get Goods Recipient Name...
     * @param value
     */
    GirDetailPage.prototype.laborCodeChange = function (value) {
        var laborName = this.getObjects(this.laborItem, "laborcode", this.girVarItem.ta0issueto.laborcode);
        if (typeof laborName[0].ta0laborname !== 'undefined')
            this.girVarItem.ta0goodrecipientname = laborName[0].ta0laborname;
        else
            this.girVarItem.ta0goodrecipientname = "";
        if (typeof (this.girVarItem.ta0issueto.laborcode) !== 'undefined' && this.girVarItem.ta0issueto.laborcode !== '' && this.girVarItem.ta0issueto.laborcode !== null) {
            this.validGoodRecipientId = 'default';
        }
        else {
            this.validGoodRecipientId = 'danger';
        }
    };
    /**
     * Navigation to back screen...
     */
    GirDetailPage.prototype.goBack = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("GirListPage", '');
    };
    /**
     * Accordion for Scanning device displaying...
     */
    GirDetailPage.prototype.accordionListCheck = function () {
        if (this.accListDevice) {
            this.accListDevice = false;
        }
        else {
            this.accListDevice = true;
        }
    };
    /**
     * Changes for toggle button for submitting button...
     */
    GirDetailPage.prototype.changeshowExcess = function () {
        if (this.showExcessDetails) {
            this.showExcessDetails = false;
        }
        else {
            this.showExcessDetails = true;
        }
    };
    /**
     * Get Labor Details as List...
     */
    GirDetailPage.prototype.getFetchDetails = function () {
        var _this = this;
        this.dataService.fetchLaborDetails().then(function (results) {
            var respResult = results;
            _this.laborItem = respResult.respObject;
            for (var i = 0; i < _this.laborItem.length; i++)
                _this.laborItem[i].compositeName = _this.laborItem[i].laborcode + ' ( ' + _this.laborItem[i].ta0laborname + ' ) ';
        });
    };
    /**
     * Display Message Function
     * @param message
     */
    GirDetailPage.prototype.displayErrorAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.ta0serialnum = "";
                    }
                }]
        });
        alert.present();
    };
    /**
     * IIB Call for Quantity Changes...
     */
    GirDetailPage.prototype.quantityValidation = function () {
        var _this = this;
        var sloc = '';
        if (this.girVarItem.ta0quantity !== '' && this.girVarItem.ta0quantity !== 'undefined' && this.girVarItem.ta0quantity !== null) {
            sloc = this.girVarItem.ta0storeloc.replace(/\D/g, '');
            this.dataService.quantityChangeIIBCall("VAL_R", this.girVarItem.ta0reservationnum, this.girVarItem.ta0itemlinenum, this.girVarItem.siteid, this.girVarItem.ta0quantity, sloc.trim()).then(function (results) {
                var respResult = results;
                _this.quantityCall = JSON.parse(respResult.respObject);
                if (_this.girVarItem.ta0quantity > _this.ta0oldquantity) {
                    _this.finalValidation();
                    if (_this.quantityCall.stscode === '01') {
                        _this.displayErrorAlert(_this.quantityCall.status + ". You can increase the quantity.");
                    }
                    else {
                        _this.displayErrorAlert(_this.quantityCall.status + ". You are not able to increase the quantity.");
                        _this.girVarItem.ta0quantity = _this.ta0oldquantity;
                    }
                }
            });
        }
    };
    /**
     * Scanning Device using external Scanner...
     */
    GirDetailPage.prototype.scanningDevices = function () {
        var _this = this;
        if (!this.containerBoot) {
            this.containerBoot = true;
            setTimeout(function () {
                _this.addDevices();
                _this.ta0serialnum = "";
            }, 1000);
        }
    };
    /**
     * Enter the device serial number...
     * @param event
     */
    GirDetailPage.prototype.addDeviceEnter = function (event) {
        if (this.ta0serialnum !== null && this.ta0serialnum !== '' && typeof this.ta0serialnum !== 'undefined')
            this.addDevices();
        else
            this.displayErrorAlert("Device Serial Number is empty, Kindly Verify.");
    };
    /**
     * Add Scanned Device...
     */
    GirDetailPage.prototype.addDevices = function () {
        var _this = this;
        this.containerBoot = false;
        this.ta0serialnum = this.ta0serialnum.trim();
        this.validationAssetCount();
        if (Number(this.girVarItem.ta0quantity) > Number(Number(this.validCount) + Number(this.nonValidatedCount))) {
            this.girlist = this.getValues(this.girVarItem.ta0goodsissueitem, "ta0serialnum");
            if (this.ta0serialnum !== null && typeof (this.ta0serialnum) !== 'undefined' && this.ta0serialnum !== '') {
                if (!this.girlist.includes(this.ta0serialnum)) {
                    this.girVarItem.ta0goodsissueitem.push({ "ta0serialnum": this.ta0serialnum, "ta0validated": false });
                    this.showDeviceStatus = this.girVarItem.ta0goodsissueitem.length > 0 ? true : false;
                    this.deleteCheck.push(false);
                    this.ta0serialnum = "";
                }
                else {
                    var alert_1 = this.alertCtrl.create({
                        title: 'Duplicate !',
                        subTitle: this.ta0serialnum + " --> This device is already available, Kindly confirm to replace with old value",
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    for (var i = 0; i < _this.girVarItem.ta0goodsissueitem.length; i++) {
                                        if (_this.girVarItem.ta0goodsissueitem[i].ta0serialnum === _this.ta0serialnum) {
                                            _this.deleteCheck[i] = false;
                                        }
                                    }
                                    _this.ta0serialnum = "";
                                }
                            },
                            {
                                text: 'Cancel',
                                handler: function () {
                                    _this.ta0serialnum = "";
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        }
        else {
            var message = "You are exceeding the limit. Kindly increase the quantity of device to scan further...";
            this.displayErrorAlert(message);
            this.ta0serialnum = "";
        }
    };
    /**
     * Validating using IIB Call...
     */
    GirDetailPage.prototype.validateDevices = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var nonValidatedDevice = this.getBooleanObjects(this.girVarItem.ta0goodsissueitem, 'ta0validated', false);
        var resultData = this.getValues(nonValidatedDevice, "ta0serialnum");
        var checkingData = resultData.toString();
        var sloc = '';
        if (resultData.length > 0) {
            sloc = this.girVarItem.ta0storeloc.replace(/\D/g, '');
            this.dataService.scanningGirDevices("SRL_R", this.girVarItem.ta0reservationnum, this.girVarItem.ta0itemlinenum, sloc.trim(), checkingData, this.valuationType).then(function (results) {
                _this.resultIIB = [];
                var respResult = results;
                if (respResult !== null && typeof respResult !== 'undefined' && respResult !== '') {
                    try {
                        _this.resultIIB = respResult;
                        for (var i = 0; i < _this.girVarItem.ta0goodsissueitem.length; i++) {
                            if (!_this.girVarItem.ta0goodsissueitem[i].ta0validated) {
                                for (var j = 0; j < _this.resultIIB.length; j++) {
                                    if (_this.girVarItem.ta0goodsissueitem[i].ta0serialnum === _this.resultIIB[j].ta0serialnum) {
                                        _this.girVarItem.ta0goodsissueitem[i] = _this.resultIIB[j];
                                        _this.girVarItem.ta0goodsissueitem[i].ta0validasset = _this.resultIIB[j].ta0validasset === 'true' ? true : (_this.resultIIB[j].ta0validasset === 'false' ? false : _this.resultIIB[j].ta0validasset);
                                        _this.girVarItem.ta0goodsissueitem[i].ta0validated = true;
                                    }
                                }
                            }
                        }
                        _this.validationSave();
                    }
                    catch (err) {
                        var message = "Due to some internal error validation process is not completed.";
                        _this.displayErrorAlert(message);
                        loading.dismiss();
                    }
                }
                else {
                    var message = "Due to server down or slow network, you are not able to valid device now.";
                    _this.displayErrorAlert(message);
                }
                loading.dismiss();
                _this.validationAssetCount();
            });
        }
        else {
            var message = "There is not having new devices to valid.";
            this.displayErrorAlert(message);
            loading.dismiss();
        }
    };
    /**
     * Deletion Initial Checking Conditions...
     */
    GirDetailPage.prototype.deletionDevicesCount = function () {
        for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
            this.deleteCheck[i] = false;
        }
        this.validationAssetCount();
    };
    /**
     * Found Asset Count Due to any Changes in any where of this page...
     */
    GirDetailPage.prototype.validationAssetCount = function () {
        var nonDeleted = [];
        for (var i = 0; i < this.deleteCheck.length; i++) {
            if (!this.deleteCheck[i]) {
                nonDeleted.push(this.girVarItem.ta0goodsissueitem[i]);
            }
        }
        if (nonDeleted.length > 0) {
            this.nonValidatedCount = this.getBooleanObjects(nonDeleted, 'ta0validated', false).length;
            var validatedArray = this.getBooleanObjects(nonDeleted, 'ta0validated', true);
            this.validCount = this.getBooleanObjects(validatedArray, 'ta0validasset', true).length;
            this.inValidCount = this.getBooleanObjects(validatedArray, 'ta0validasset', false).length;
        }
        else {
            this.nonValidatedCount = 0;
            this.validCount = 0;
            this.inValidCount = 0;
        }
        this.finalValidation();
    };
    /**
     * Final Validation
     */
    GirDetailPage.prototype.finalValidation = function () {
        if (Number(this.girVarItem.ta0quantity) === Number(this.validCount)) {
            this.submitValid = true;
            return true;
        }
        else {
            this.submitValid = false;
            return false;
        }
    };
    /**
     * Delete Strike out functionality...
     * @param index
     */
    GirDetailPage.prototype.deleteDevices = function (index) {
        this.validationAssetCount();
        if (this.deleteCheck[index] === true) {
            if (this.girVarItem.ta0goodsissueitem[index].ta0validated && !this.girVarItem.ta0goodsissueitem[index].ta0validasset) {
                this.deleteCheck[index] = false;
            }
            else {
                if (Number(this.girVarItem.ta0quantity) < Number(Number(this.validCount) + Number(this.nonValidatedCount) + 1)) {
                    var message = "You are exceeding the limit. Kindly increase the quantity of device to scan further...";
                    this.displayErrorAlert(message);
                }
                else {
                    this.deleteCheck[index] = false;
                }
            }
        }
        else {
            this.deleteCheck[index] = true;
        }
        this.validationAssetCount();
    };
    /**
     * get Values to find obj, key and value...
     * @param obj
     * @param key
     * @param val
     */
    GirDetailPage.prototype.getBooleanObjects = function (obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getBooleanObjects(obj[i], key, (val === 'true' ? true : (val === 'false' ? false : val))));
            }
            else if (i == key) {
                if (obj[i] === val) {
                    objects.push(obj);
                }
            }
        }
        return objects;
    };
    /**
     * get object to found from the json results not boolean value to only string...
     * @param obj
     * @param key
     * @param val
     */
    GirDetailPage.prototype.getObjects = function (obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getObjects(obj[i], key, val));
            }
            else if (i == key && obj[i] == val || i == key && val == '') {
                objects.push(obj);
            }
            else if (obj[i] == val && key == '') {
                if (objects.lastIndexOf(obj) == -1) {
                    objects.push(obj);
                }
            }
        }
        return objects;
    };
    /**
     * Get Values from Key...
     * @param obj
     * @param key
     */
    GirDetailPage.prototype.getValues = function (obj, key) {
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
    /**
     * Create Valid Json for save and submitting...
     * @param saveType
     */
    GirDetailPage.prototype.setJson = function (saveType) {
        this.booleanConversionRecords();
        if (typeof (this.girVarItem.ta0issueto) !== 'undefined' && this.girVarItem.ta0issueto !== '' && this.girVarItem.ta0issueto !== null) {
            var resValue = {
                "status": saveType,
                "ta0issueto": this.girVarItem.ta0issueto.laborcode,
                "ta0laborname": this.girVarItem.ta0laborname,
                "ta0itemtext": this.girVarItem.ta0itemtext,
                "ta0headertext": this.girVarItem.ta0headertext,
                "ta0quantity": Number(this.girVarItem.ta0quantity),
                "ta0unloadingpoint": this.girVarItem.ta0unloadingpoint,
                "ta0goodsissueitem": this.girVarItem.ta0goodsissueitem,
                "ta0valuationtype": this.valuationType
            };
            return resValue;
        }
        else {
            var message = "Please select the goods recipient";
            this.displayListErrorAlert(message, this.girVarItem.ta0issueto);
            this.validGoodRecipientId = 'danger';
        }
    };
    /**
     * booleanConverted all Values...
     */
    GirDetailPage.prototype.booleanConversionRecords = function () {
        for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
            this.girVarItem.ta0goodsissueitem[i].ta0validasset = this.girVarItem.ta0goodsissueitem[i].ta0validasset === 'true' ? true : (this.girVarItem.ta0goodsissueitem[i].ta0validasset === 'false' ? false : this.girVarItem.ta0goodsissueitem[i].ta0validasset);
            this.girVarItem.ta0goodsissueitem[i].ta0validated = this.girVarItem.ta0goodsissueitem[i].ta0validated === 'true' ? true : (this.girVarItem.ta0goodsissueitem[i].ta0validated === 'false' ? false : this.girVarItem.ta0goodsissueitem[i].ta0validated);
        }
    };
    /**
     * Display Message Function...
     * @param msgTitle
     * @param message
     * @param status
     */
    GirDetailPage.prototype.displaySuccessMsg = function (msgTitle, message, status) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: msgTitle + " !",
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        if (msgTitle === 'Success' && (status === 'SUBMIT' || status === 'CANCEL')) {
                            _this.goBack();
                        }
                    }
                }]
        });
        alert.present();
    };
    /**
     *  Save Call...
     */
    GirDetailPage.prototype.validSave = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var respResult = this.setJson("INPRG");
        var ta0girnum = this.girVarItem.ta0girnum;
        this.deleteNonValidationRecordWhileSave();
        this.dataService.fetchtoSaveGIRProcess(respResult, ta0girnum).then(function (results) {
            var respObject = [];
            respObject = results;
            try {
                if (respObject !== '' && respObject !== null && typeof respObject !== 'undefined') {
                    if (respObject.processStatus === 'success') {
                        _this.finalValidation();
                        _this.deleteNonValidationRecordWhileSaveAfterSave();
                        _this.displaySuccessMsg("Success", respObject.respObject + ". Please click SUBMIT button to sent the device in ERMS.", respObject.processAction);
                    }
                    else {
                        _this.displaySuccessMsg("Failed", respObject.description, respObject.processAction);
                    }
                }
                loading.dismiss();
            }
            catch (err) {
                var message = "Due to some internal error save process is not completed.";
                _this.displayErrorAlert(message);
                loading.dismiss();
            }
        });
    };
    /**
     *  Save Call...
     */
    GirDetailPage.prototype.validationSave = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var respResult = this.setJson("INPRG");
        var ta0girnum = this.girVarItem.ta0girnum;
        this.deleteNonValidationRecordWhileSave();
        this.dataService.fetchtoSaveGIRProcess(respResult, ta0girnum).then(function (results) {
            var respObject = [];
            respObject = results;
            try {
                if (respObject !== '' && respObject !== null && typeof respObject !== 'undefined') {
                    if (respObject.processStatus === 'success') {
                        _this.finalValidation();
                        _this.deleteNonValidationRecordWhileSaveAfterSave();
                    }
                }
                loading.dismiss();
            }
            catch (err) {
                var message = "Due to some internal error save process is not completed.";
                _this.displayErrorAlert(message);
                loading.dismiss();
            }
        });
    };
    /**
     * Submit Call...
     */
    GirDetailPage.prototype.submitValidation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.deleteNonValidationRecordWhileSubmit();
        if (this.finalValidation()) {
            if (this.listValidation(loading)) {
                var respResult = this.setJson("SUBMIT");
                var ta0girnum = this.girVarItem.ta0girnum;
                this.dataService.fetchtoSaveGIRProcess(respResult, ta0girnum).then(function (results) {
                    var respObject = [];
                    respObject = results;
                    try {
                        if (respObject.processStatus === 'success') {
                            _this.displaySuccessMsg("Success", respObject.respObject, 'SUBMIT');
                        }
                        else {
                            _this.displaySuccessMsg("Failed", respObject.description, 'SUBMIT');
                        }
                    }
                    catch (err) {
                        var message = "Due to some internal error submit process is not completed.";
                        _this.displayErrorAlert(message);
                        loading.dismiss();
                    }
                    loading.dismiss();
                });
            }
        }
    };
    /**
     * Validation for Header data while submitting...
     * @param loading
     */
    GirDetailPage.prototype.listValidation = function (loading) {
        var message = '';
        if (typeof (this.girVarItem.ta0issueto !== 'undefined') && this.girVarItem.ta0issueto !== '' && this.girVarItem.ta0issueto !== null) {
            if (typeof (this.girVarItem.ta0issueto.laborcode) === 'undefined' || this.girVarItem.ta0issueto.laborcode === '' || this.girVarItem.ta0issueto.laborcode === null) {
                message = "Please select the goods recipient";
                this.displayListErrorAlert(message, this.girVarItem.ta0issueto.laborcode);
                this.validGoodRecipientId = 'danger';
                loading.dismiss();
                return false;
            }
        }
        else {
            message = "Please select the goods recipient";
            this.displayListErrorAlert(message, this.girVarItem.ta0issueto);
            this.validGoodRecipientId = 'danger';
            loading.dismiss();
            return false;
        }
        if (typeof (this.girVarItem.ta0quantity) === 'undefined' || this.girVarItem.ta0quantity === '' || this.girVarItem.ta0quantity === null) {
            message = "Quantity is invalid";
            this.displayListErrorAlert(message, this.girVarItem.ta0quantity);
            loading.dismiss();
            return false;
        }
        this.validGoodRecipientId = 'default';
        return true;
    };
    /**
     * Display error message Header data while submitting...
     * @param message
     * @param value
     */
    GirDetailPage.prototype.displayListErrorAlert = function (message, value) {
        var alert = this.alertCtrl.create({
            title: 'Alert !',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    /**
     * Delete invalid data and not validating asset removal while submitting...
     */
    GirDetailPage.prototype.deleteNonValidationRecordWhileSubmit = function () {
        var nonValidDat = [];
        for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
            if (!this.girVarItem.ta0goodsissueitem[i].ta0validated && !this.girVarItem.ta0goodsissueitem[i].ta0validasset) {
                nonValidDat.push(i);
            }
        }
        for (var i = nonValidDat.length - 1; i >= 0; i--) {
            this.girVarItem.ta0goodsissueitem.splice(nonValidDat[i], 1);
        }
    };
    /**
     * Add the deleted underscore functionality while save the device...
     */
    GirDetailPage.prototype.deleteNonValidationRecordWhileSave = function () {
        var nonValidDat = [];
        for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
            if (this.deleteCheck[i] || !this.girVarItem.ta0goodsissueitem[i].ta0validasset) {
                this.girVarItem.ta0goodsissueitem[i]._action = "Delete";
            }
        }
        this.validationAssetCount();
    };
    /**
     * Add the deleted underscore functionality while save the device... remove the value from the list...
     */
    GirDetailPage.prototype.deleteNonValidationRecordWhileSaveAfterSave = function () {
        var nonValidDat = [];
        for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
            if (this.deleteCheck[i]) {
                //(!this.girVarItem.ta0goodsissueitem[i].ta0validasset && this.girVarItem.ta0goodsissueitem[i].ta0validated)
                nonValidDat.push(i);
            }
        }
        for (var i = nonValidDat.length - 1; i >= 0; i--) {
            this.girVarItem.ta0goodsissueitem.splice(nonValidDat[i], 1);
            this.deleteCheck.splice(nonValidDat[i], 1);
        }
        this.validationAssetCount();
    };
    /**
     * BarCode Tab Scanner...
     */
    GirDetailPage.prototype.barcodeScan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode "
        };
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.ta0serialnum = barcodeData.text.trim();
            _this.addDevices();
        });
    };
    /**
     * Cancelling the Gir Process Records...
     */
    GirDetailPage.prototype.cancelGirProcess = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.gv.loadingContent
        });
        loading.present();
        this.gf.loadingTimer(loading);
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Do you agree to cancel the current gir process ?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        loading.dismiss();
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        var ta0status = { "status": "CANCEL" };
                        _this.dataService.cancelGirProcess(_this.girVarItem.ta0girnum, ta0status).then(function (results) {
                            try {
                                var res = [];
                                res = results;
                                if (res.processStatus === 'success') {
                                    _this.displaySuccessMsg('Success', res.respObject, 'CANCEL');
                                    loading.dismiss();
                                }
                                else {
                                    _this.displaySuccessMsg("Failed", res.respObject, 'CANCEL');
                                    loading.dismiss();
                                }
                            }
                            catch (err) {
                                var message = "Due to some internal error cancel process is not completed.";
                                _this.displayErrorAlert(message);
                                loading.dismiss();
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_select_searchable__["SelectSearchableComponent"])
    ], GirDetailPage.prototype, "selectComponent", void 0);
    GirDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gir-detail',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/gir-process/gir-detail/gir-detail.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Device Scanning Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n    <ion-grid class="headerStyle">\n        <ion-row>\n            <ion-col col-2 col-md-2 col-sm-2 style="text-align: left; padding-top: 0px;">\n                <button ion-button menuToggle clear>\n                    <ion-icon name="menu" class="menuBackArrow"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-8 col-md-8 col-sm-8>\n                <div class="pageTitle">Device Scanning Details</div>\n            </ion-col>\n            <ion-col col-2 col-sm-2 style="word-wrap: break-all; text-align: right; padding-top: 0px; width:12px">\n                    <ion-col col-2 col-sm-2>\n                        <ion-fab top right style="top: 0%">\n                            <button ion-fab mini class="flash">\n                              <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'"> {{ gv.testMobile ? \'Offline\':\'Online\' }} </ion-icon>\n                            </button>\n                          </ion-fab>\n                    </ion-col>\n                    <ion-col col-2 col-sm-2 >\n                        <button ion-button color="primary" style="float: right;" (click)="goBack()">Back</button>\n                </ion-col>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-toggle style="float:right;" checked="true" (ionChange)="changeshowExcess()"></ion-toggle>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked>Gir Order Number</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0girnum" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item style="float: right;">\n          <ion-label stacked>Reservation Number</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0reservationnum" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked>Material Number</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0materialnum" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item style="float: right;">\n          <ion-label stacked>Material Description</ion-label>\n          <ion-input [(ngModel)]="girVarItem.description" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="showExcessDetails">\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked>Reservation Item</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0itemlinenum" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item style="float: right;">\n          <ion-label stacked>Site Id</ion-label>\n          <ion-input [(ngModel)]="girVarItem.siteid" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="showExcessDetails">\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked>Header Text</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0headertext" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item style="float: right;">\n          <ion-label stacked>Item Text</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0itemtext" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="showExcessDetails">\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked>Unloading Point</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0unloadingpoint" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <!-- CR003 New Valuation Type -->\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-item>\n        <ion-label stacked>Valuation Type</ion-label>\n        <ion-select [(ngModel)]="valuationType" placeholder="Please select value">\n          <ion-option *ngFor="let data of valuationTypeList" [value]="data.json.value" >{{data.json.description}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class="heading-gap">\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item>\n          <ion-label stacked>Goods Recipient Name</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0goodrecipientname" type="text" disabled="true"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item style="float: right;">\n          <ion-label stacked [color]="validGoodRecipientId">Goods Recipient</ion-label>\n          <select-searchable item-content [(ngModel)]="girVarItem.ta0issueto" [items]="this.laborItem"\n            itemValueField="laborcode" itemTextField="compositeName" [canSearch]="true"\n            (onChange)="laborCodeChange($event)">\n          </select-searchable>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6>\n      <ion-row>\n        <ion-item style="float: right;">\n          <ion-label stacked>Quantity</ion-label>\n          <ion-input [(ngModel)]="girVarItem.ta0quantity" type="number" (keyup)="quantityValidation()">\n          </ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 col-lg-6 col-md-6 col-xs-6 col-sm-6></ion-col>\n  </ion-row>\n\n  <ion-row style="margin-bottom: -16px;" *ngIf="showExcessDetails">\n    <ion-col col-6 style="padding-left: 21px;">\n      <ion-checkbox [(ngModel)]="scanToggle" (ionChange)="scanToggleChange()" style="float: left;"></ion-checkbox>\n      <span>\n        <ion-label style="font-size: 10px; float: left; margin-top: 3px; padding-left: 13px; color: green;">Do\n          you like to scan the devices... </ion-label>\n      </span>\n    </ion-col>\n    <ion-col col-6></ion-col>\n  </ion-row>\n  <ion-row *ngIf="showExcessDetails">\n    <ion-col col-11 col-lg-11 col-md-11 col-xs-11 col-sm-11>\n      <ion-item style="float: right;" *ngIf="!scanToggle">\n        <ion-label stacked> Enter Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="ta0serialnum"></ion-input>\n      </ion-item>\n      <ion-item style="float: right;" *ngIf="scanToggle">\n        <ion-label stacked> Scan Serial Number of Device </ion-label>\n        <ion-input type="text" [(ngModel)]="ta0serialnum" (keypress)="scanningDevices($event)"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 col-lg-1 col-md-1 col-xs-1 col-sm-1 style="margin: 22px 0px 0px 0px;">\n      <button ion-button style="float: right;" *ngIf="!scanToggle" (click)="addDeviceEnter()">\n        Okay\n      </button>\n      <button ion-button (click)="barcodeScan()" style="float: right;">\n        <ion-icon name="barcode" item-right></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="showDeviceStatus">\n    <ion-col col-12 col-lg-12 col-md-12 col-xs-12 col-sm-12>\n      <ion-list>\n        <ion-item>\n          <ion-card style="padding: 15px;">\n            <ion-card-header (click)="accordionListCheck()">\n              <ion-row>\n                <ion-col col-9>\n                  <b>List of Devices</b> ( Valid Count: <span style="color: green;">{{validCount}}</span>, In Valid\n                  Device Count: <span style="color: red;">{{inValidCount}}</span> )\n                </ion-col>\n                <ion-col col-3>\n                  <span style="float: right;">\n                    <ion-icon [name]="accListDevice ? \'arrow-down\':\'arrow-up\'"></ion-icon>\n                  </span>\n                </ion-col>\n              </ion-row>\n            </ion-card-header>\n            <ion-card-content *ngIf="accListDevice">\n              <ion-list>\n                <ion-item *ngFor="let device of girVarItem.ta0goodsissueitem; let i = index;"\n                  [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                  <ion-row [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                    <ion-col col-1 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                      [ngClass]="deleteCheck[i] ? \'deviceLabel AppDelete\':\'deviceLabel\'">\n                      {{ i+1 }}.\n                    </ion-col>\n                    <ion-col col-5 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                      [ngClass]="deleteCheck[i] ? \'deviceLabel AppDelete\':\'deviceLabel\'">\n                      {{ device.ta0serialnum }}\n                    </ion-col>\n                    <ion-col col-5 text-wrap [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'"\n                      [ngClass]="deleteCheck[i] ? \'deviceLabel AppDelete\':\'deviceLabel\'" style="text-align: center;">\n                      {{ device.ta0remarks }}\n                    </ion-col>\n                    <ion-col col-1 class="text-right" [style.background-color]="i%2 != 0 ? \'#fffffA\':\'#C4D8E2\'">\n                      <button ion-button\n                        *ngIf="(device.ta0validated === \'true\' ? true : (device.ta0validated === \'false\' ? false : device.ta0validated)) && (device.ta0validasset === \'true\' ? true : (device.ta0validasset === \'false\' ? false : device.ta0validasset))"\n                        color="secondary" class="text-right" (click)="deleteDevices(i)">\n                        <ion-icon [name]="deleteCheck[i]? \'close\':\'trash\'" item-center>\n                        </ion-icon>\n                      </button>\n                      <button ion-button\n                        *ngIf="(device.ta0validated === \'true\' ? true : (device.ta0validated === \'false\' ? false : device.ta0validated)) && !(device.ta0validasset === \'true\' ? true : (device.ta0validasset === \'false\' ? false : device.ta0validasset))"\n                        color="danger" class="text-right" (click)="deleteDevices(i)">\n                        <ion-icon [name]="deleteCheck[i]? \'close\':\'trash\'" item-center>\n                        </ion-icon>\n                      </button>\n                      <button ion-button\n                        *ngIf="!(device.ta0validated === \'true\' ? true : (device.ta0validated === \'false\' ? false : device.ta0validated))"\n                        color="primary" class="text-right" (click)="deleteDevices(i)">\n                        <ion-icon [name]="deleteCheck[i]? \'close\':\'trash\'" item-center>\n                        </ion-icon>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </ion-item>\n                <ion-item>\n                  <button ion-button (click)="validSave()" style="padding: 15px;">Save</button>\n                  <button ion-button style="float: right; padding: 15px;" (click)="validateDevices()">Validate</button>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col style="text-align: center;">\n      <button *ngIf="submitValid" ion-button (click)="submitValidation()" style="padding: 15px;">Submit</button>\n      <button ion-button (click)="cancelGirProcess()" style="padding: 15px;">Cancel Gir Process</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/gir-process/gir-detail/gir-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */]])
    ], GirDetailPage);
    return GirDetailPage;
}());

//# sourceMappingURL=gir-detail.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirDetailPageModule", function() { return GirDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gir_detail__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GirDetailPageModule = /** @class */ (function () {
    function GirDetailPageModule() {
    }
    GirDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gir_detail__["a" /* GirDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__gir_detail__["a" /* GirDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], GirDetailPageModule);
    return GirDetailPageModule;
}());

//# sourceMappingURL=gir-detail.module.js.map

/***/ })

});
//# sourceMappingURL=61.js.map