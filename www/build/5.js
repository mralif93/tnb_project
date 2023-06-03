webpackJsonp([5],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SealAttachmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_work_order_work_order__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_DocLinkDetails__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pojo_commonEnum_SoTypes__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pojo_commonEnum_Domains__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var SealAttachmentPage = /** @class */ (function () {
    function SealAttachmentPage(navCtrl, navParams, actionSheetCtrl, toastCtrl, alertCtrl, appCtrl, workOrderService, platform, loadingCtrl, ngZone, camera, sanitizer, file, imagePicker, base64, imageViewerCtrl, fileOpener, filePath, params, jsonStore, gf, gv, dataService, modalController, descBy) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.workOrderService = workOrderService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.file = file;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.imageViewerCtrl = imageViewerCtrl;
        this.fileOpener = fileOpener;
        this.filePath = filePath;
        this.params = params;
        this.jsonStore = jsonStore;
        this.gf = gf;
        this.gv = gv;
        this.dataService = dataService;
        this.modalController = modalController;
        this.descBy = descBy;
        this.lastImage = null;
        this.listPdf = [];
        this.pdfstatus = false;
        this.feeder_id_code_exist = [];
        this.feeder_id_code_new = [];
        this.validate = false;
        this.haveChange = false;
        this.typeContainer = [];
        this.checkBox = false;
        this.arrayDiagram = [];
        this.arrayPicture = [];
        this.optionFeeder = [];
        this.initPrevs = [];
        this._imageViewerCtrl = imageViewerCtrl;
        this.item = this.params.get("paramObj");
        this.type = this.params.get("type");
        // Duplicate Data
        this.itemOri = JSON.parse(JSON.stringify(this.item));
        this.photos = [];
        // Save Temporary Original Attachment
        this.attachment_tmp = [];
        // Checking total feeder for ZISP
        if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_18__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP || (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_18__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST && this.item.json.ta0installationvoltage > __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V)) {
            // Checking Feeder is exist or not
            if (typeof (this.item.json.ta0feeder) !== "undefined" && this.item.json.ta0feeder !== null && this.item.json.ta0feeder !== "") {
                this.fLength = Number(this.item.json.ta0feeder.length);
                var mainDevice = [];
                var checkDevice = [];
                var nMainDevice = [];
                var nCheckDevice = [];
                for (var k = 0; k < this.item.json.ta0feeder.length; k++) {
                    // Reset Available Data
                    var fci_e = null, fci_n = null;
                    // Checking Feeder exist or not
                    if (typeof (this.item.json.ta0feeder[k].multiassetlocci) !== "undefined" && this.item.json.ta0feeder[k].multiassetlocci !== null && this.item.json.ta0feeder[k].multiassetlocci !== "") {
                        // Collect device which is mvhv..
                        var mDevice = this.item.json.ta0feeder[k].multiassetlocci.find(function (item) {
                            if (item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN) {
                                fci_e = _this.item.json.ta0feeder[k];
                            }
                            return item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_EXISTING_INDICATOR_MAIN;
                        });
                        if (typeof (mDevice) !== "undefined") {
                            mainDevice.push(mDevice);
                        }
                        if (typeof (fci_e) !== "undefined" && fci_e !== null && fci_e !== "") {
                            this.feeder_id_code_exist.push(fci_e);
                        }
                        var nmDevice = this.item.json.ta0feeder[k].multiassetlocci.find(function (item) {
                            if (item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN) {
                                fci_n = _this.item.json.ta0feeder[k];
                            }
                            return item.ta0devicevoltage > __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].VOL_LEVEL_LPC_LV_400V && item.ta0bcrmuploadindicator === __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].BCRM_NEW_INDICATOR_MAIN;
                        });
                        if (typeof (nmDevice) !== "undefined") {
                            nMainDevice.push(nmDevice);
                        }
                        if (typeof (fci_n) !== "undefined" && fci_n !== null && fci_n !== "") {
                            this.feeder_id_code_new.push(fci_n);
                        }
                    }
                }
                mainDevice.sort(this.gf.dynamicSort("ta0allocationtype"));
                nMainDevice.sort(this.gf.dynamicSort("ta0allocationtype"));
                if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_18__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                    this.fLength = mainDevice;
                }
                else {
                    this.fLength = nMainDevice;
                }
                for (var a = 0; a < this.fLength.length; a++) {
                    if (mainDevice.length > 0) {
                        var feederVal;
                        feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                        feederVal = {};
                        feederVal.ta0feederid = this.feeder_id_code_exist[a].ta0feederid + "B";
                        // feederVal.description = this.feeder_id_code[i].description;
                        feederVal.description = this.fLength[a].ta0serialnum;
                        feederVal.ta0feedercode = " (Before)";
                        this.optionFeeder.push(feederVal);
                        //console.log("OptionFeeder (Before) : "+JSON.stringify(this.optionFeeder));
                    }
                    if (nMainDevice.length > 0) {
                        if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_18__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZIST) {
                            var feederVal;
                            feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                            feederVal = {};
                            feederVal.ta0feederid = this.feeder_id_code_new[a].ta0feederid + "A";
                            // feederVal.description = this.feeder_id_code[i].description;
                            feederVal.description = nMainDevice[a].ta0serialnum;
                            feederVal.ta0feedercode = " (After)";
                            this.optionFeeder.push(feederVal);
                            //console.log("OptionFeeder (After1) : "+JSON.stringify(this.optionFeeder));
                        }
                        else {
                            if (mainDevice[a].ta0replaceind == true) {
                                var feederVal;
                                feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                                feederVal = {};
                                feederVal.ta0feederid = this.feeder_id_code_new[a].ta0feederid + "A";
                                // feederVal.description = this.feeder_id_code[i].description;
                                feederVal.description = nMainDevice[a].ta0serialnum;
                                feederVal.ta0feedercode = " (After)";
                                this.optionFeeder.push(feederVal);
                                //console.log("OptionFeeder (After2) : "+JSON.stringify(this.optionFeeder));
                            }
                        }
                    }
                    else {
                        var feederVal;
                        feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                        feederVal = {};
                        feederVal.ta0feederid = this.feeder_id_code_exist[a].ta0feederid + "A";
                        // feederVal.description = this.feeder_id_code[i].description;
                        feederVal.description = this.fLength[a].ta0serialnum;
                        feederVal.ta0feedercode = " (After)";
                        this.optionFeeder.push(feederVal);
                        //console.log("OptionFeeder (After3) : "+JSON.stringify(this.optionFeeder));
                    }
                }
                if (this.item.json.worktype === __WEBPACK_IMPORTED_MODULE_18__pojo_commonEnum_SoTypes__["a" /* SoTypes */].ZISP) {
                    if (mainDevice.length === 0) {
                        var feederVal;
                        feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                        feederVal = {};
                        feederVal.ta0feederid = null;
                        // feederVal.description = this.feeder_id_code[i].description;
                        feederVal.description = "MVHV Meter is not available.";
                        feederVal.ta0feedercode = "";
                        this.optionFeeder.push(feederVal);
                        //console.log("OptionFeeder (MVHV Meter is not avail 1) : "+JSON.stringify(this.optionFeeder));
                    }
                }
                else {
                    if (nMainDevice.length === 0) {
                        var feederVal;
                        feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                        feederVal = {};
                        feederVal.ta0feederid = null;
                        // feederVal.description = this.feeder_id_code[i].description;
                        feederVal.description = "MVHV Meter is not available.";
                        feederVal.ta0feedercode = "";
                        this.optionFeeder.push(feederVal);
                        //console.log("OptionFeeder (MVHV Meter is not avail 2) : "+JSON.stringify(this.optionFeeder));
                    }
                }
                // this.optionFeeder.sort(this.gf.dynamicSort("description"));
            }
            else {
                var feederVal;
                feederVal = new __WEBPACK_IMPORTED_MODULE_19__pojo_FeederDetails__["a" /* FeederDetails */]();
                feederVal = {};
                feederVal.ta0feederid = null;
                // feederVal.description = this.feeder_id_code[i].description;
                feederVal.description = "No Feeder is available.";
                feederVal.ta0feedercode = "";
                this.optionFeeder.push(feederVal);
                //console.log("OptionFeeder (No Feeder is avail) : "+JSON.stringify(this.optionFeeder));
            }
        }
        // Check for Normal Image or Phase Diagram
        if (this.type === "pdiagram") {
            if (this.item.json.hasOwnProperty('docLinksL')) {
                for (var i = 0; i < this.item.json.docLinksL.length; i++) {
                    var docType = this.item.json.docLinksL[i].describedBy.docType;
                    console.log("docType : " + docType);
                    if (docType.includes('PD') || docType.includes('DD')) {
                        // console.log(i + " : Feeder Section"+this.item.json.docLinksL[i].describedBy.title);
                        var value = this.item.json.docLinksL[i].describedBy.title;
                        var title = value.replace(".JPG", "");
                        this.item.json.docLinksL[i].describedBy.ta4feederidref = title;
                        this.arrayDiagram.push(this.item.json.docLinksL[i]);
                        // this.itemOri.json.docLinksL.splice(i, 1);
                    }
                    else {
                        this.arrayPicture.push(this.item.json.docLinksL[i]);
                    }
                }
                // Reset Temporary DocLinks
                this.item.json.docLinksL = [];
                this.item.json.docLinksL = this.arrayDiagram;
                // Reset Original DocLinks
                this.itemOri.json.docLinksL = [];
                this.itemOri.json.docLinksL = this.arrayPicture;
            }
        }
        else {
            if (this.item.json.hasOwnProperty('docLinksL')) {
                if (this.item.json.docLinksL.length === 0) {
                    this.pdfstatus = false;
                }
                else {
                    for (var i = 0; i < this.item.json.docLinksL.length; i++) {
                        var locPdf = this.item.json.docLinksL[i].describedBy.fileName;
                        var docType = this.item.json.docLinksL[i].describedBy.docType;
                        var titleDoc = this.item.json.docLinksL[i].describedBy.title;
                        // getting title and change for type of image.
                        var loc_title = titleDoc.split("X"); // different small letter which is capital letter
                        if (typeof (loc_title[0]) !== "undefined") {
                            this.item.json.docLinksL[i].describedBy.loc_title = loc_title[0];
                        }
                        // Setting value docType to category image
                        this.item.json.docLinksL[i].describedBy.category = this.item.json.docLinksL[i].describedBy.docType;
                        if (docType.includes('PD') || docType.includes('DD')) {
                            this.arrayDiagram.push(this.item.json.docLinksL[i]);
                            // this.item.json.docLinksL.splice(i, 1);
                        }
                        else {
                            if (!locPdf.includes('.pdf')) {
                                this.arrayPicture.push(this.item.json.docLinksL[i]);
                            }
                        }
                        if (locPdf.includes('.pdf')) {
                            if (typeof (this.item.json.docLinksL[i].href) !== "undefined") {
                                if (this.item.json.docLinksL[i].href.includes("?_lid=")) {
                                    this.item.json.docLinksL[i].href;
                                }
                                else {
                                    var link = this.item.json.docLinksL[i].href + "?_lid=" + this.gv.username + "&_lpwd=" + this.gv.password;
                                    this.item.json.docLinksL[i].href = link;
                                }
                            }
                            this.listPdf.push({ PdfFile: this.item.json.docLinksL[i] });
                            this.attachment_tmp.push(this.item.json.docLinksL[i]);
                            this.pdfstatus = true;
                        }
                    }
                    // Reset Temporary DocLinks
                    this.item.json.docLinksL = [];
                    this.item.json.docLinksL = this.arrayPicture;
                    // Reset Original DocLinks
                    this.itemOri.json.docLinksL = [];
                    this.itemOri.json.docLinksL = this.arrayDiagram;
                }
            }
            else {
                this.pdfstatus = false;
            }
        }
        this.validate = true;
        this.descBy = new __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__["a" /* DescribedBy */]();
        if (this.imageType === 'RI') {
            this.descBy.docType = 'RI';
        }
        else if (this.imageType === 'PI') {
            this.descBy.docType = 'PI';
        }
        else {
            this.descBy.docType = 'AI';
        }
        console.log('came inside to attachment ');
        if (typeof (this.item.json.docLinksL) != null && typeof (this.item.json.docLinksL) != 'undefined') {
            console.log('came insdie to doclins assign value ' + JSON.stringify(this.item.json.docLinksL));
            for (var i = 0; i < this.item.json.docLinksL.length; i++) {
                //console.log('thi. ' + this.photoDetailsArray[j].description);
                var photoDetail = this.item.json.docLinksL[i];
                console.log('test : ' + JSON.stringify(photoDetail));
                if (typeof (photoDetail.href) !== "undefined") {
                    if (!photoDetail.href.includes("?_lid=")) {
                        photoDetail.href = photoDetail.href + '?_lid=' + this.gv.username + '&_lpwd=' + this.gv.password;
                    }
                }
                if (typeof (photoDetail.describedBy.loc_photoVersion) === 'undefined' || photoDetail.describedBy.loc_photoVersion === null || photoDetail.describedBy.loc_photoVersion === '') {
                    photoDetail.describedBy.loc_photoVersion = 'old';
                }
                if (typeof (photoDetail.describedBy.description) !== 'undefined' || photoDetail.describedBy.description !== null || photoDetail.describedBy.description !== '') {
                    // if(photoDetail.describedBy.description.startswith('/tnbmmms')){
                    // photoDetail.describedBy.description = '';
                    // }
                    console.log('photoDetail.describedBy.description' + photoDetail.describedBy.description);
                    var str1 = photoDetail.describedBy.description;
                    console.log('first : ' + str1.startsWith('/tnbmmms'));
                    if (str1.startsWith('/tnbmmms')) {
                        photoDetail.describedBy.description = '';
                    }
                    //console.log('second : '+str1.startsWith('//tnbmmms'));
                }
                console.log(' low show value ::::::::::::::::::: ' + photoDetail.describedBy.loc_show + ' : ' + photoDetail.describedBy.loc_photoVersion);
                if (typeof (photoDetail.describedBy.loc_show) === 'undefined' || photoDetail.describedBy.loc_photoVersion === "old") {
                    photoDetail.describedBy.loc_show = true;
                }
            }
        }
        else {
            this.item.json.docLinksL = new __WEBPACK_IMPORTED_MODULE_12__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
            this.item.json.docLinksL = [];
        }
        this.segment = 'Image';
        // this.typeSelection();
        //console.log("docLinksL : "+JSON.stringify(this.item.json.docLinksL));
    }
    SealAttachmentPage.prototype.ionViewDidLoad = function () {
        console.log(this.item.json.docLinksL);
        this.getInitPrev();
    };
    SealAttachmentPage.prototype.typeSelection = function (array, index, value) {
        debugger;
        // this.typeContainer = [];
        // for (var i = 0; i < this.item.json.docLinksL.length; i++) {
        //   this.typeContainer.push(this.item.json.docLinksL[i].describedBy.title);
        // }
        var day = new Date().getUTCDay();
        var month = new Date().getUTCMonth();
        var year = new Date().getUTCFullYear();
        var hour = new Date().getUTCHours();
        var minute = new Date().getUTCMinutes();
        var second = new Date().getUTCSeconds();
        var month1 = new Date();
        var localString = new Date().toISOString();
        var currentDateTime = year.toString() + "/" + month.toString() + "/" + day.toString() + "/" + hour.toString() + "/" + minute.toString() + "/" + second.toString();
        console.log("Workorder: " + this.item.json.wonum);
        console.log("DateTime: " + currentDateTime);
        console.log("Month: " + month1);
        console.log("Get Date: " + localString);
        console.log("Combine: " + value + "X" + this.item.json.wonum + "X" + currentDateTime + ".JPG");
        // this.gf.displayToast("DateTime: " + currentDateTime);
        var current = localString.substring(0, 4) + localString.substring(5, 7) + localString.substring(8, 10) + localString.substring(11, 13) + localString.substring(14, 16) + localString.substring(17, 19);
        console.log("Current: " + current);
        // this.gf.displayToast("Current: " + value + "_" + this.item.json.wonum + "_" + current + ".JPG");
        var imageTitle = value + "X" + this.item.json.wonum + "X" + current + ".JPG";
        // this.gf.displayToast("NAME: " + imageTitle);
        array.describedBy.title = imageTitle;
        array.describedBy.fileName = imageTitle;
    };
    SealAttachmentPage.prototype.takePhoto = function () {
        var _this = this;
        // this.typeSelection();
        this.validate = false;
        // if (this.item.json.docLinksL.length < 10) {
        this.gf.setLoadingTimeout(3000);
        var options = {
            quality: 30,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true,
            destinationType: 0,
            saveToPhotoAlbum: this.gv.storeImageInGallery
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            //this.imageData = imageData;
            //this.base64Image = normalizeURL(imageData);
            console.log(' base 64 image : ' + _this.base64Image);
            var head = 'data:image/jpeg;base64,';
            var sizeVal = ((base64Image.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
            var photoDetail = new __WEBPACK_IMPORTED_MODULE_12__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
            var describedBy = new __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__["a" /* DescribedBy */]();
            describedBy.loc_url = _this.base64Image;
            describedBy.loc_base64Image = base64Image;
            describedBy.attachmentSize = sizeVal;
            describedBy.title = '';
            describedBy.description = '';
            describedBy.loc_show = true;
            describedBy.loc_photoVersion = 'new';
            // var dMill = new Date().getMilliseconds();
            // var d = dMill + Math.random().toString(36).substr(2, 9);
            // var newFileName = d + ".jpg";
            describedBy.fileName = _this.createFileName();
            // if (this.type === "pdiagram") {
            //   describedBy.docType = "PD";
            // }
            photoDetail.describedBy = describedBy;
            _this.haveChange = true;
            if (typeof (_this.item.json.docLinksL) != null && typeof (_this.item.json.docLinksL) != 'undefined') {
                // console.log('came in to condition 1 start ');
                // if (this.type === "pdiagram") {
                //   this.arrayDiagram.push(photoDetail);
                // } else {
                _this.item.json.docLinksL.push(photoDetail);
                // }
                // console.log('came in to condition 1 end ');
            }
            else {
                // console.log('came in to condition 2 start ');
                _this.item.json.docLinksL = new __WEBPACK_IMPORTED_MODULE_12__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
                _this.item.json.docLinksL = [];
                _this.item.json.docLinksL.push(photoDetail);
                // console.log('came in to condition 2 ----------------- end');
            }
            _this.item.json.loc_attachmentCount++;
            _this.gf.stopLoading();
        }, function (error) {
            // console.log('load error ' + error.message);
            _this.photos.push(_this.base64Image);
        });
        // }// Check image for 10 images
        /*   else {
            this.showAlert('Warning', "You are exceeding the limit of attachment...");
          }
       */
    };
    SealAttachmentPage.prototype.showAlert = function (alertTitle, alertMessage) {
        var prompt = this.alertCtrl.create({
            title: alertTitle,
            message: alertMessage,
            buttons: [
                {
                    text: "Ok"
                }
            ]
        });
        prompt.present();
    };
    SealAttachmentPage.prototype.getPictures = function () {
        // if (this.item.json.docLinksL.length < 10) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        loading.present();
        this.gf.loadingTimer(loading);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
        var options = {
            maximumImagesCount: 9,
            targetWidth: 800,
            targetHeight: 800
        };
        this.validate = false;
        this.imagePicker.getPictures(options).then(function (results) {
            var _loop_1 = function (res) {
                if (_this.platform.is('android')) {
                }
                else {
                    currentName = res.substr(res.lastIndexOf('/') + 1);
                    correctPath = res.substr(0, res.lastIndexOf('/') + 1);
                    dMill = new Date().getMilliseconds();
                    d = dMill + Math.random().toString(36).substr(2, 9);
                    newFileName = d + ".jpg";
                    _this.file.readAsDataURL('file://' + correctPath, currentName).then(function (base64File) {
                        console.log('file://' + correctPath + '' + currentName);
                        console.log('inside read as data url value : ' + base64File);
                        var head = 'data:image/jpeg;base64,';
                        var sizeVal = ((base64File.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
                        var photoDetail = new __WEBPACK_IMPORTED_MODULE_12__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
                        var describedBy = new __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__["a" /* DescribedBy */]();
                        describedBy.loc_url = res;
                        describedBy.loc_base64Image = base64File;
                        describedBy.attachmentSize = sizeVal;
                        describedBy.title = '';
                        describedBy.description = '';
                        describedBy.loc_show = true;
                        describedBy.loc_photoVersion = 'new';
                        describedBy.fileName = _this.createFileName();
                        // if (this.type === "pdiagram") {
                        //   describedBy.docType = "PD";
                        // }
                        photoDetail.describedBy = describedBy;
                        _this.haveChange = true;
                        console.log(' url value in method .. ' + photoDetail.describedBy.loc_url);
                        _this.resizeImage(1200, photoDetail.describedBy.loc_base64Image).then(function (data) {
                            photoDetail.describedBy.loc_base64Image = data.toString();
                            var head = 'data:image/jpeg;base64,';
                            var sizeVal = ((photoDetail.describedBy.loc_base64Image.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
                            // console.log('sizeVal of file : ' + sizeVal)
                            photoDetail.describedBy.attachmentSize = sizeVal;
                            // console.log('size : ' + photoDetail.describedBy.attachmentSize);
                            _this.item.json.docLinksL.push(photoDetail);
                        });
                        _this.item.json.loc_attachmentCount++;
                    }, function (error) {
                        console.log('Error while storing file.' + JSON.stringify(error));
                        _this.showAlert('Error ', 'Error while pick pictore from file.' + JSON.stringify(error));
                    });
                }
            };
            var currentName, correctPath, dMill, d, newFileName;
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var res = results_1[_i];
                _loop_1(res);
            }
            ;
            loading.dismiss();
        });
        // }
        /*    else {
             this.showAlert('Warning ', "You are exceeding the limit of attachment...");
           } */
    };
    SealAttachmentPage.prototype.createFileName = function () {
        var d;
        var dMill = new Date().getUTCMilliseconds();
        d = dMill + Math.random().toString(36).substr(2, 9);
        var newFileName = d + ".jpg";
        return newFileName;
    };
    SealAttachmentPage.prototype.resizeImage = function (longSideMax, file) {
        return new Promise(function (resolve) {
            var tempImg = new Image();
            console.log('came insdie to resize image ');
            //var img = document.createElement("img");
            tempImg.src = file;
            console.log('came to resize image ' + tempImg.src);
            tempImg.onload = function () {
                // Get image size and aspect ratio.
                var targetWidth = tempImg.width;
                var targetHeight = tempImg.height;
                var aspect = tempImg.width / tempImg.height;
                // Calculate shorter side length, keeping aspect ratio on image.
                // If source image size is less than given longSideMax, then it need to be
                // considered instead.
                if (tempImg.width > tempImg.height) {
                    longSideMax = Math.min(tempImg.width, longSideMax);
                    targetWidth = longSideMax;
                    targetHeight = longSideMax / aspect;
                }
                else {
                    longSideMax = Math.min(tempImg.height, longSideMax);
                    targetHeight = longSideMax;
                    targetWidth = longSideMax * aspect;
                }
                // Create canvas of required size.
                var canvas = document.createElement('canvas');
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                var ctx = canvas.getContext("2d");
                // Take image from top left corner to bottom right corner and draw the image
                // on canvas to completely fill into.
                ctx.drawImage(tempImg, 0, 0, tempImg.width, tempImg.height, 0, 0, targetWidth, targetHeight);
                console.log('came to canvas ' + canvas.toDataURL("image/jpeg"));
                resolve(canvas.toDataURL("image/jpeg"));
            };
        });
    };
    SealAttachmentPage.prototype.goBack = function () {
        var _this = this;
        if (typeof (this.itemOri.json.docLinksL) !== 'undefined') {
            if ((this.itemOri.json.docLinksL != 'undefined' && this.itemOri.json.docLinksL.length != 0) || (this.item.json.docLinksL != 'undefined' && this.item.json.docLinksL.length != 0) || (this.attachment_tmp.length != 'undefined' && this.attachment_tmp.length != 0)) {
                // Push Back PDF Attachment back into original structure..
                if (this.attachment_tmp.length > 0) {
                    for (var d = 0; d < this.attachment_tmp.length; d++) {
                        this.item.json.docLinksL.push(this.attachment_tmp[d]);
                    }
                }
                setTimeout(function () {
                    // Put Back to Original
                    _this.item.json.docLinksL = _this.itemOri.json.docLinksL;
                    if (_this.type === "pdiagram") {
                        if (_this.arrayDiagram.length > 0) {
                            for (var i = 0; i < _this.arrayDiagram.length; i++) {
                                _this.item.json.docLinksL.push(_this.arrayDiagram[i]);
                            }
                        }
                    }
                    else {
                        if (_this.arrayPicture.length > 0) {
                            for (var i = 0; i < _this.arrayPicture.length; i++) {
                                _this.item.json.docLinksL.push(_this.arrayPicture[i]);
                            }
                        }
                    }
                }, 3000);
                console.log(this.validate);
                if (this.validate) {
                    this.navCtrl.pop();
                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                }
                else {
                    var confirm_1 = this.alertCtrl.create({
                        title: 'Confirm Cancel',
                        message: 'Do you agree remove newly added attachment ? You can\'t undo this action',
                        buttons: [{ text: 'Cancel' }, {
                                text: 'Ok',
                                handler: function () {
                                    console.log('vlaue : ' + _this.itemOri.json.docLinksL.length);
                                    for (var i = _this.itemOri.json.docLinksL.length - 1; i >= 0; i--) {
                                        //console.log('itemOri : ' + this.itemOri.json.docLinksL[i].describedBy.fileName + ' : ' + this.itemOri.json.docLinksL[index].describedBy.fileName);
                                        console.log(' ii : ' + i);
                                        //var index = i - 1;
                                        //console.log('index : '+index);
                                        console.log(' photo version : ' + _this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion);
                                        if ('new' === _this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion) {
                                            console.log('came inside to condition . ');
                                            _this.itemOri.json.docLinksL.splice(i, 1);
                                            _this.itemOri.json.loc_attachmentCount--;
                                            console.log('deleted ');
                                        }
                                        if ('old' === _this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion && !_this.itemOri.json.docLinksL[i].describedBy.loc_show) {
                                            console.log('came inside to condition . ');
                                            //this.itemOri.json.docLinksL.splice(i, 1);
                                            _this.itemOri.json.docLinksL[i].describedBy.loc_show = true;
                                            _this.itemOri.json.loc_attachmentCount++;
                                            console.log('deleted ');
                                        }
                                    }
                                    console.log('count : ' + _this.itemOri.json.docLinksL.length);
                                    setTimeout(function () {
                                        _this.navCtrl.pop();
                                    }, 2000);
                                }
                            }]
                    });
                    confirm_1.present();
                }
            }
            else {
                this.navCtrl.pop();
            }
        }
        else {
            if (!this.validate) {
                var confirm_2 = this.alertCtrl.create({
                    title: 'Confirm Cancel',
                    message: 'Do you agree remove newly added attachment ? You can\'t undo this action',
                    buttons: [{ text: 'Cancel' }, {
                            text: 'Ok',
                            handler: function () {
                                console.log('value : ' + _this.itemOri.json.docLinksL.length);
                                for (var i = _this.itemOri.json.docLinksL.length - 1; i >= 0; i--) {
                                    //console.log('itemOri : ' + this.itemOri.json.docLinksL[i].describedBy.fileName + ' : ' + this.itemOri.json.docLinksL[index].describedBy.fileName);
                                    console.log(' ii : ' + i);
                                    //var index = i - 1;
                                    //console.log('index : '+index);
                                    console.log(' photo version : ' + _this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion);
                                    if ('new' === _this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion) {
                                        console.log('came inside to condition . ');
                                        _this.itemOri.json.docLinksL.splice(i, 1);
                                        _this.itemOri.json.loc_attachmentCount--;
                                        console.log('deleted ');
                                    }
                                    if ('old' === _this.itemOri.json.docLinksL[i].describedBy.loc_photoVersion && !_this.itemOri.json.docLinksL[i].describedBy.loc_show) {
                                        console.log('came inside to condition . ');
                                        //this.itemOri.json.docLinksL.splice(i, 1);
                                        _this.itemOri.json.docLinksL[i].describedBy.loc_show = true;
                                        _this.itemOri.json.loc_attachmentCount++;
                                        console.log('deleted ');
                                    }
                                }
                                console.log('count : ' + _this.itemOri.json.docLinksL.length);
                                setTimeout(function () {
                                    _this.navCtrl.pop();
                                }, 2000);
                            }
                        }]
                });
                confirm_2.present();
            }
            this.navCtrl.pop();
        }
    };
    SealAttachmentPage.prototype.tickAll = function () {
        if (this.checkBox === false) {
            this.checkBox = true;
        }
        else {
            this.checkBox = false;
        }
    };
    SealAttachmentPage.prototype.deletePhoto = function (index) {
        var _this = this;
        debugger;
        // this.typeSelection();
        this.validate = false;
        var confirm = this.alertCtrl.create({
            title: 'Sure you want to delete this photo?',
            message: '',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'Yes',
                    handler: function () {
                        debugger;
                        //this.typeContainer.splice(index, 1);
                        console.log('attach : ' + JSON.stringify(_this.item.json.docLinksL));
                        console.log('described by : ' + _this.item.json.docLinksL[index].describedBy.loc_photoVersion);
                        if ('new' === _this.item.json.docLinksL[index].describedBy.loc_photoVersion) {
                            _this.item.json.docLinksL.splice(index, 1);
                            _this.item.json.loc_attachmentCount--;
                        }
                        else if ('old' === _this.item.json.docLinksL[index].describedBy.loc_photoVersion) {
                            for (var i = 0; i < _this.item.json.docLinksL.length; i++) {
                                console.log('item : ' + _this.item.json.docLinksL[i].describedBy.fileName + ' : ' + _this.item.json.docLinksL[index].describedBy.fileName);
                                console.log(' identificer in delete : ' + _this.item.json.docLinksL[i].describedBy.identificer);
                                if (_this.type === "pdiagram") {
                                    if (_this.item.json.docLinksL[i].describedBy.fileName === _this.item.json.docLinksL[index].describedBy.fileName &&
                                        _this.item.json.docLinksL[i].describedBy.docType === _this.item.json.docLinksL[index].describedBy.docType) {
                                        // don't splice the value in array list 31 Dec 2018, change the loc_show status to false, it not display in ipad view,
                                        // user click save button, it will delete image in maximo .
                                        // If slice record, it would not delete image in maximo.. comments by shankar
                                        // new image slice because it's not save into maximo so can slice.
                                        //this.item.json.docLinksL.splice(index, 1);
                                        _this.item.json.docLinksL[index].describedBy.loc_show = false;
                                        _this.item.json.docLinksL[i].describedBy.loc_show = false;
                                        _this.item.json.docLinksL[i].describedBy.loc_base64Image = '';
                                        console.log('identifier delete options : ' + _this.item.json.docLinksL[i].describedBy.identifier);
                                        _this.item.json.loc_attachmentCount--;
                                        console.log(' item doclinks end.. ' + JSON.stringify(_this.item.json.docLinksL[i]));
                                    }
                                }
                                else {
                                    if (_this.item.json.docLinksL[i].describedBy.fileName === _this.item.json.docLinksL[index].describedBy.fileName) {
                                        // don't splice the value in array list 31 Dec 2018, change the loc_show status to false, it not display in ipad view,
                                        // user click save button, it will delete image in maximo .
                                        // If slice record, it would not delete image in maximo.. comments by shankar
                                        // new image slice because it's not save into maximo so can slice.
                                        //this.item.json.docLinksL.splice(index, 1);
                                        _this.item.json.docLinksL[index].describedBy.loc_show = false;
                                        _this.item.json.docLinksL[i].describedBy.loc_show = false;
                                        _this.item.json.docLinksL[i].describedBy.loc_base64Image = '';
                                        console.log('identifier delete options : ' + _this.item.json.docLinksL[i].describedBy.identifier);
                                        _this.item.json.loc_attachmentCount--;
                                        console.log(' item doclinks end.. ' + JSON.stringify(_this.item.json.docLinksL[i]));
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    SealAttachmentPage.prototype.deletePdf = function (index) {
        console.log("came inside to delete pdf from maximo..");
        this.attachment_tmp[index].describedBy.loc_show = false;
    };
    SealAttachmentPage.prototype.getInitPrev = function () {
        var _this = this;
        var queryPart = [];
        queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0INITPREV");
        this.jsonStore.getSearchRecordNoLimit(__WEBPACK_IMPORTED_MODULE_20__pojo_commonEnum_Domains__["a" /* Domains */].AlnDomain, queryPart).then(function (result) {
            _this.initPrevs = result;
        });
    };
    SealAttachmentPage.prototype.InitPrevGenerationMaximoSave = function () {
        if (typeof (this.item.json.ta0initprev) !== "undefined" && this.item.json.ta0initprev !== null && this.item.json.ta0initprev !== "") {
            if (this.item.json.ta0initprev.length > 0) {
                for (var i = 0; i < this.item.json.ta0initprev.length; i++) {
                    for (var j = 0; j < this.initPrevs.length; j++) {
                        if (this.item.json.ta0initprev[i] === this.initPrevs[j].json.value) {
                            this.item.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
                            this.itemOri.json.ta0initprev[i] = { "description": this.initPrevs[j].json.description, "ta0initprevcode": this.initPrevs[j].json.value };
                        }
                    }
                }
            }
        }
    };
    SealAttachmentPage.prototype.saveImage = function () {
        var _this = this;
        console.log('came inside to save Image function ');
        this.InitPrevGenerationMaximoSave();
        //this.item.json.status = this.woStatus;
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimer(loading);
        // Changing filename for phase diagram
        if (this.type === "pdiagram") {
            // Checking DockLinks Temporary
            if (typeof (this.item.json.docLinksL.length) !== "undefined" && this.item.json.docLinksL.length !== null && this.item.json.docLinksL.length !== "") {
                for (var i = 0; i < this.item.json.docLinksL.length; i++) {
                    this.item.json.docLinksL[i].describedBy.title = "";
                    this.item.json.docLinksL[i].describedBy.title = this.item.json.docLinksL[i].describedBy.ta4feederidref + ".JPG";
                    this.item.json.docLinksL[i].describedBy.fileName = this.item.json.docLinksL[i].describedBy.ta4feederidref + ".JPG";
                }
            }
        }
        // Push Back PDF Attachment back into original structure..
        if (this.attachment_tmp.length > 0) {
            for (var d = 0; d < this.attachment_tmp.length; d++) {
                this.item.json.docLinksL.push(this.attachment_tmp[d]);
            }
        }
        if (typeof (this.itemOri.json.docLinksL) !== "undefined" && this.itemOri.json.docLinksL !== null && this.itemOri.json.docLinksL !== "") {
            if (this.itemOri.json.docLinksL.length > 0) {
                for (var i = 0; i < this.itemOri.json.docLinksL.length; i++) {
                    this.item.json.docLinksL.push(this.itemOri.json.docLinksL[i]);
                }
            }
        }
        // Temporary Data copy to Original
        this.itemOri = this.item;
        setTimeout(function () {
            _this;
            loading.onWillDismiss(function () {
                _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                _this.item.json.loc_doclinks_haveChange = true;
                _this.gf.displayToast(_this.gv.saveLocallySuccessfully);
                loading.dismiss();
            });
        }, 30000);
        this.validate = true;
        console.log(' length : ' + this.itemOri.json.docLinksL.length);
        for (var i = 0; i < this.itemOri.json.docLinksL.length; i++) {
            if (this.type === "photo") {
                if ((typeof (this.itemOri.json.docLinksL[i].describedBy.category) == 'undefined')) {
                    // this.presentToast("Required field should not be empty.")
                    // this.validate = false;
                    // loading.dismiss();
                    // break;
                }
                else if (this.itemOri.json.docLinksL[i].describedBy.category === 'PI') {
                    this.itemOri.json.docLinksL[i].describedBy.docType = 'PI';
                }
                else if (this.itemOri.json.docLinksL[i].describedBy.category === 'RI') {
                    this.itemOri.json.docLinksL[i].describedBy.docType = 'RI';
                }
                else if (this.itemOri.json.docLinksL[i].describedBy.category === 'AI') {
                    this.itemOri.json.docLinksL[i].describedBy.docType = 'AI';
                }
            }
        }
        if (this.validate === true) {
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                this.itemOri.json.loc_doclinks_haveChange = true;
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
                this.navCtrl.pop();
                loading.dismiss();
            }
            else if ((__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        var itemVal = _this.itemOri;
                        var objCopy = JSON.parse(JSON.stringify(itemVal));
                        delete objCopy.json['ta0feeder'];
                        var newObj = objCopy.json;
                        console.log('test feeder val : ' + JSON.stringify(newObj));
                        // itemOri, work number, action type,feeder code, workorderType, docType
                        // Close to confirmation first (Alif - 26/04/2019)
                        // this.dataService.saveSealRecordImage(newObj, this.itemOri.json.wonum, 'addRemoveImage', '', this.itemOri.json.worktype)
                        //   .then(results => {
                        //     console.log(' result ...... + ' + results);
                        //     let resObj: any;
                        //     resObj = JSON.parse(results.toString());
                        //     console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                        //     if (resObj.processStatus == 'success') {
                        //       this.gf.deletePhoto(resObj, this.itemOri).then(result => {
                        //         this.itemOri.json.docLinksL = result
                        //         console.log(' length : ' + this.itemOri.json.docLinksL.length);
                        //         this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        //         this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", false);
                        //         /** Back to service-details page */
                        //         loading.dismiss();
                        //         let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                        //         newRootNav.push("ServiceDetailsPage", this.itemOri);
                        //         this.gf.warningAlert("Attachments", this.gv.saveSuccessfully, "OK");
                        //       })
                        //     }
                        //     else {
                        //       this.itemOri.json.loc_attachmentCount = this.itemOri.json.docLinksL.length;
                        //       this.jsonStore.replaceWO(this.itemOri, "LPCWORKORDER", true);
                        //       this.showAlert('Error', this.gv.notSaveSuccessfully + ' ' + resObj.description);
                        //       loading.dismiss();
                        //     }
                        //   });
                        // for (var k = 0; k < this.itemOri.json.docLinksL.length; k++) {
                        //   if ()
                        // }
                        // Saving Based on DocType
                        var docType;
                        if (_this.type === "pdiagram") {
                            var arrayPD = [];
                            var arrayDD = [];
                            for (var i = 0; i < newObj.docLinksL.length; i++) {
                                if (newObj.docLinksL[i].describedBy.docType === "PD") {
                                    arrayPD.push(newObj.docLinksL[i]);
                                }
                                else if (newObj.docLinksL[i].describedBy.docType === "DD") {
                                    arrayDD.push(newObj.docLinksL[i]);
                                }
                            }
                            if (arrayPD.length > 0) {
                                newObj.docLinksL = [];
                                newObj.docLinksL = arrayPD;
                                _this.dataService
                                    .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PD", _this.itemOri.json.worktype)
                                    .then(function (results) {
                                    console.log('saveImage >>> result :' + JSON.stringify(results));
                                    var resObj;
                                    resObj = JSON.parse(results.toString());
                                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                    if (resObj.processStatus == 'success') {
                                        _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                            if (arrayDD.length > 0) {
                                                newObj.docLinksL = [];
                                                newObj.docLinksL = arrayDD;
                                                _this.dataService
                                                    .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "DD", _this.itemOri.json.worktype)
                                                    .then(function (results) {
                                                    console.log('saveImage >>> result :' + JSON.stringify(results));
                                                    var resObj;
                                                    resObj = JSON.parse(results.toString());
                                                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                    if (resObj.processStatus == 'success') {
                                                        _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                        loading.dismiss();
                                                    }
                                                }, function (error) {
                                                    console.log("saveImage >>> error : " + JSON.stringify(error));
                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                                                    loading.dismiss();
                                                });
                                            }
                                            else {
                                                _this.itemOri.json.docLinksL = result;
                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                /** Back to service-details page */
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                            }
                                        });
                                    }
                                    else {
                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                        loading.dismiss();
                                    }
                                }, function (error) {
                                    console.log("saveImage >>> error : " + JSON.stringify(error));
                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                                    loading.dismiss();
                                });
                            }
                            else {
                                if (arrayDD.length > 0) {
                                    newObj.docLinksL = [];
                                    newObj.docLinksL = arrayDD;
                                    _this.dataService
                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "DD", _this.itemOri.json.worktype)
                                        .then(function (results) {
                                        console.log('saveImage result : ' + JSON.stringify(results));
                                        var resObj;
                                        resObj = JSON.parse(results.toString());
                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                        if (resObj.processStatus == 'success') {
                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                _this.itemOri.json.docLinksL = result;
                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                /** Back to service-details page */
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                            });
                                        }
                                        else {
                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                        }
                                    }, function (error) {
                                        console.log("saveImage >>> error : " + JSON.stringify(error));
                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                                        loading.dismiss();
                                    });
                                }
                                else {
                                    _this.navCtrl.pop();
                                    loading.dismiss();
                                }
                            }
                        }
                        else {
                            if (_this.segment === "PDF") {
                                var arrayPDF = [];
                                for (var i = 0; i < newObj.docLinksL.length; i++) {
                                    if (newObj.docLinksL[i].describedBy.docType === "IT" || newObj.docLinksL[i].describedBy.docType === "BPM" || newObj.docLinksL[i].describedBy.docType === "CF") {
                                        arrayPDF.push(newObj.docLinksL[i]);
                                    }
                                }
                                _this.dataService
                                    .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PDF", _this.itemOri.json.worktype)
                                    .then(function (results) {
                                    console.log(' result ...... + ' + results);
                                    var resObj;
                                    resObj = JSON.parse(results.toString());
                                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                    if (resObj.processStatus == 'success') {
                                        _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                            _this.itemOri.json.docLinksL = result;
                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                            /** Back to service-details page */
                                            _this.navCtrl.pop();
                                            loading.dismiss();
                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                        });
                                    }
                                    else {
                                        loading.dismiss();
                                    }
                                });
                            }
                            else {
                                var arrayRI = [];
                                var arrayPI = [];
                                var arrayAI = [];
                                for (var i = 0; i < newObj.docLinksL.length; i++) {
                                    if (newObj.docLinksL[i].describedBy.docType === "RI") {
                                        arrayRI.push(newObj.docLinksL[i]);
                                    }
                                    else if (newObj.docLinksL[i].describedBy.docType === "PI") {
                                        arrayPI.push(newObj.docLinksL[i]);
                                    }
                                    else if (newObj.docLinksL[i].describedBy.docType === "AI") {
                                        arrayAI.push(newObj.docLinksL[i]);
                                    }
                                }
                                if (arrayRI.length > 0) {
                                    newObj.docLinksL = [];
                                    newObj.docLinksL = arrayRI;
                                    _this.dataService
                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                        .then(function (results) {
                                        console.log('saveImage result : ' + JSON.stringify(results));
                                        var resObj;
                                        resObj = JSON.parse(results.toString());
                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                        if (resObj.processStatus == 'success') {
                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                // Premise Image
                                                if (arrayPI.length > 0) {
                                                    newObj.docLinksL = [];
                                                    newObj.docLinksL = arrayPI;
                                                    _this.dataService
                                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                                        .then(function (results) {
                                                        console.log(' result ...... + ' + results);
                                                        var resObj;
                                                        resObj = JSON.parse(results.toString());
                                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                        if (resObj.processStatus == 'success') {
                                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                // Anomaly Image
                                                                if (arrayAI.length > 0) {
                                                                    newObj.docLinksL = [];
                                                                    newObj.docLinksL = arrayAI;
                                                                    _this.dataService
                                                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                                                        .then(function (results) {
                                                                        console.log(' result ...... + ' + results);
                                                                        var resObj;
                                                                        resObj = JSON.parse(results.toString());
                                                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                                        if (resObj.processStatus == 'success') {
                                                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                                _this.itemOri.json.docLinksL = result;
                                                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                                /** Back to service-details page */
                                                                                _this.navCtrl.pop();
                                                                                loading.dismiss();
                                                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                            });
                                                                        }
                                                                        else {
                                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                            loading.dismiss();
                                                                        }
                                                                    }, function (error) {
                                                                        console.log("saveImage >>> error : " + JSON.stringify(error));
                                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                                                                        loading.dismiss();
                                                                    });
                                                                }
                                                                else {
                                                                    _this.itemOri.json.docLinksL = result;
                                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                    /** Back to service-details page */
                                                                    _this.navCtrl.pop();
                                                                    loading.dismiss();
                                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                            loading.dismiss();
                                                        }
                                                    });
                                                }
                                                else {
                                                    // Anomaly Image
                                                    if (arrayAI.length > 0) {
                                                        newObj.docLinksL = [];
                                                        newObj.docLinksL = arrayAI;
                                                        _this.dataService
                                                            .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                                            .then(function (results) {
                                                            console.log(' result ...... + ' + JSON.stringify(results));
                                                            var resObj;
                                                            resObj = JSON.parse(results.toString());
                                                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                            if (resObj.processStatus == 'success') {
                                                                _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                    _this.itemOri.json.docLinksL = result;
                                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                    /** Back to service-details page */
                                                                    _this.navCtrl.pop();
                                                                    loading.dismiss();
                                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                });
                                                            }
                                                            else {
                                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                loading.dismiss();
                                                            }
                                                        }, function (error) {
                                                            console.log("saveImage >>> error : " + JSON.stringify(error));
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                                                            loading.dismiss();
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.docLinksL = result;
                                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                        /** Back to service-details page */
                                                        _this.navCtrl.pop();
                                                        loading.dismiss();
                                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                    }
                                                }
                                            });
                                        }
                                        else {
                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                        }
                                    });
                                }
                                else if (arrayPI.length > 0) {
                                    newObj.docLinksL = [];
                                    newObj.docLinksL = arrayPI;
                                    _this.dataService
                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                        .then(function (results) {
                                        console.log(' result ...... + ' + JSON.stringify(results));
                                        var resObj;
                                        resObj = JSON.parse(results.toString());
                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                        if (resObj.processStatus == 'success') {
                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                // Anomaly Image
                                                if (arrayAI.length > 0) {
                                                    newObj.docLinksL = [];
                                                    newObj.docLinksL = arrayAI;
                                                    _this.dataService
                                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                                        .then(function (results) {
                                                        console.log(' result ...... + ' + JSON.stringify(results));
                                                        var resObj;
                                                        resObj = JSON.parse(results.toString());
                                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                        if (resObj.processStatus == 'success') {
                                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                // Raw Image
                                                                if (arrayRI.length > 0) {
                                                                    _this.dataService
                                                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                                                        .then(function (results) {
                                                                        console.log(' result ...... + ' + JSON.stringify(results));
                                                                        var resObj;
                                                                        resObj = JSON.parse(results.toString());
                                                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                                        if (resObj.processStatus == 'success') {
                                                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                                _this.itemOri.json.docLinksL = result;
                                                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                                /** Back to service-details page */
                                                                                _this.navCtrl.pop();
                                                                                loading.dismiss();
                                                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                            });
                                                                        }
                                                                        else {
                                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                            loading.dismiss();
                                                                        }
                                                                    }, function (error) {
                                                                        console.log("saveImage >>> error : " + JSON.stringify(error));
                                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                        loading.dismiss();
                                                                    });
                                                                }
                                                                else {
                                                                    _this.itemOri.json.docLinksL = result;
                                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                    /** Back to service-details page */
                                                                    _this.navCtrl.pop();
                                                                    loading.dismiss();
                                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                            loading.dismiss();
                                                        }
                                                    }, function (error) {
                                                        console.log("saveImage >>> error : " + JSON.stringify(error));
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                        loading.dismiss();
                                                    });
                                                }
                                                else {
                                                    // Raw Image
                                                    if (arrayRI.length > 0) {
                                                        _this.dataService
                                                            .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                                            .then(function (results) {
                                                            console.log(' result ...... + ' + JSON.stringify(results));
                                                            var resObj;
                                                            resObj = JSON.parse(results.toString());
                                                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                            if (resObj.processStatus == 'success') {
                                                                _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                    _this.itemOri.json.docLinksL = result;
                                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                    /** Back to service-details page */
                                                                    _this.navCtrl.pop();
                                                                    loading.dismiss();
                                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                });
                                                            }
                                                            else {
                                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                loading.dismiss();
                                                            }
                                                        }, function (error) {
                                                            console.log("saveImage >>> error : " + JSON.stringify(error));
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                            loading.dismiss();
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.docLinksL = result;
                                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                        /** Back to service-details page */
                                                        _this.navCtrl.pop();
                                                        loading.dismiss();
                                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                    }
                                                }
                                            });
                                        }
                                        else {
                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                        }
                                    }, function (error) {
                                        console.log("saveImage >>> error : " + JSON.stringify(error));
                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                                        loading.dismiss();
                                    });
                                }
                                else {
                                    newObj.docLinksL = [];
                                    newObj.docLinksL = arrayAI;
                                    _this.dataService
                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                        .then(function (results) {
                                        console.log(' result ...... + ' + results);
                                        var resObj;
                                        resObj = JSON.parse(results.toString());
                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                        if (resObj.processStatus == 'success') {
                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                // Raw Image
                                                if (arrayRI.length > 0) {
                                                    newObj.docLinksL = [];
                                                    newObj.docLinksL = arrayRI;
                                                    _this.dataService
                                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                                        .then(function (results) {
                                                        console.log(' result ...... + ' + results);
                                                        var resObj;
                                                        resObj = JSON.parse(results.toString());
                                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                        if (resObj.processStatus == 'success') {
                                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                // Premise Image
                                                                if (arrayPI.length > 0) {
                                                                    newObj.docLinksL = [];
                                                                    newObj.docLinksL = arrayPI;
                                                                    _this.dataService
                                                                        .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                                                        .then(function (results) {
                                                                        console.log(' result ...... + ' + results);
                                                                        var resObj;
                                                                        resObj = JSON.parse(results.toString());
                                                                        console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                                        if (resObj.processStatus == 'success') {
                                                                            _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                                _this.itemOri.json.docLinksL = result;
                                                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                                /** Back to service-details page */
                                                                                _this.navCtrl.pop();
                                                                                loading.dismiss();
                                                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                            });
                                                                        }
                                                                        else {
                                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                            loading.dismiss();
                                                                        }
                                                                    });
                                                                }
                                                                else {
                                                                    _this.itemOri.json.docLinksL = result;
                                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                    /** Back to service-details page */
                                                                    _this.navCtrl.pop();
                                                                    loading.dismiss();
                                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                            loading.dismiss();
                                                        }
                                                    });
                                                }
                                                else {
                                                    // Premise Image
                                                    if (arrayPI.length > 0) {
                                                        newObj.docLinksL = [];
                                                        newObj.docLinksL = arrayPI;
                                                        _this.dataService
                                                            .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                                            .then(function (results) {
                                                            console.log(' result ...... + ' + results);
                                                            var resObj;
                                                            resObj = JSON.parse(results.toString());
                                                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                            if (resObj.processStatus == 'success') {
                                                                _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                    _this.itemOri.json.docLinksL = result;
                                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                    /** Back to service-details page */
                                                                    _this.navCtrl.pop();
                                                                    loading.dismiss();
                                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                });
                                                            }
                                                            else {
                                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                loading.dismiss();
                                                            }
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.docLinksL = result;
                                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                        /** Back to service-details page */
                                                        _this.navCtrl.pop();
                                                        loading.dismiss();
                                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                    }
                                                }
                                            });
                                        }
                                        else {
                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                            loading.dismiss();
                                        }
                                    });
                                }
                            }
                        }
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                        _this.showAlert('Success', _this.gv.saveLocallySuccessfully + ' Signal strength not enough ');
                        loading.dismiss();
                    }
                });
            }
            else {
                var itemVal = this.itemOri;
                var objCopy = JSON.parse(JSON.stringify(itemVal));
                delete objCopy.json['ta0feeder'];
                var newObj = objCopy.json;
                console.log('test feeder val : ' + JSON.stringify(newObj));
                // Saving Based on DocType
                var docType;
                if (this.type === "pdiagram") {
                    var arrayPD = [];
                    var arrayDD = [];
                    for (var i = 0; i < newObj.docLinksL.length; i++) {
                        if (newObj.docLinksL[i].describedBy.docType === "PD") {
                            arrayPD.push(newObj.docLinksL[i]);
                        }
                        else if (newObj.docLinksL[i].describedBy.docType === "DD") {
                            arrayDD.push(newObj.docLinksL[i]);
                        }
                    }
                    if (arrayPD.length > 0) {
                        newObj.docLinksL = [];
                        newObj.docLinksL = arrayPD;
                        this.dataService
                            .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PD", this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(' result ...... + ' + results);
                            var resObj;
                            resObj = JSON.parse(results.toString());
                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                            if (resObj.processStatus == 'success') {
                                _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                    if (arrayDD.length > 0) {
                                        newObj.docLinksL = [];
                                        newObj.docLinksL = arrayDD;
                                        _this.dataService
                                            .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "DD", _this.itemOri.json.worktype)
                                            .then(function (results) {
                                            console.log(' result ...... + ' + results);
                                            var resObj;
                                            resObj = JSON.parse(results.toString());
                                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                            if (resObj.processStatus == 'success') {
                                                _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                    _this.itemOri.json.docLinksL = result;
                                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                    /** Back to service-details page */
                                                    _this.navCtrl.pop();
                                                    loading.dismiss();
                                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                });
                                            }
                                            else {
                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                loading.dismiss();
                                            }
                                        });
                                    }
                                    else {
                                        _this.itemOri.json.docLinksL = result;
                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                        /** Back to service-details page */
                                        _this.navCtrl.pop();
                                        loading.dismiss();
                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                    }
                                });
                            }
                            else {
                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                loading.dismiss();
                            }
                        });
                    }
                    else {
                        if (arrayDD.length > 0) {
                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayDD;
                            this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "DD", this.itemOri.json.worktype)
                                .then(function (results) {
                                console.log(' result ...... + ' + results);
                                var resObj;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                if (resObj.processStatus == 'success') {
                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                        _this.itemOri.json.docLinksL = result;
                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                        /** Back to service-details page */
                                        _this.navCtrl.pop();
                                        loading.dismiss();
                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                    });
                                }
                                else {
                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                }
                            });
                        }
                        else {
                            this.navCtrl.pop();
                            loading.dismiss();
                        }
                    }
                }
                else {
                    // Checking save based on segment
                    if (this.segment === 'PDF') {
                        var arrayPDF = [];
                        for (var i = 0; i < newObj.docLinksL.length; i++) {
                            if (newObj.docLinksL[i].describedBy.docType === "IT" || newObj.docLinksL[i].describedBy.docType === "BPM" || newObj.docLinksL[i].describedBy.docType === "CF") {
                                arrayPDF.push(newObj.docLinksL[i]);
                            }
                        }
                        this.dataService
                            .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PDF", this.itemOri.json.worktype)
                            .then(function (results) {
                            console.log(' result ...... + ' + results);
                            var resObj;
                            resObj = JSON.parse(results.toString());
                            console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                            if (resObj.processStatus == 'success') {
                                _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                    _this.itemOri.json.docLinksL = result;
                                    console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                    /** Back to service-details page */
                                    _this.navCtrl.pop();
                                    loading.dismiss();
                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                    // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                });
                            }
                            else {
                                loading.dismiss();
                            }
                        });
                    }
                    else {
                        var arrayRI = [];
                        var arrayPI = [];
                        var arrayAI = [];
                        for (var i = 0; i < newObj.docLinksL.length; i++) {
                            if (newObj.docLinksL[i].describedBy.docType === "RI") {
                                arrayRI.push(newObj.docLinksL[i]);
                            }
                            else if (newObj.docLinksL[i].describedBy.docType === "PI") {
                                arrayPI.push(newObj.docLinksL[i]);
                            }
                            else if (newObj.docLinksL[i].describedBy.docType === "AI") {
                                arrayAI.push(newObj.docLinksL[i]);
                            }
                        }
                        if (arrayRI.length > 0) {
                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayRI;
                            this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", this.itemOri.json.worktype)
                                .then(function (results) {
                                console.log(' result ...... + ' + results);
                                var resObj;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                if (resObj.processStatus == 'success') {
                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                        // Premise Image
                                        if (arrayPI.length > 0) {
                                            newObj.docLinksL = [];
                                            newObj.docLinksL = arrayPI;
                                            _this.dataService
                                                .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                                .then(function (results) {
                                                console.log(' result ...... + ' + results);
                                                var resObj;
                                                resObj = JSON.parse(results.toString());
                                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                if (resObj.processStatus == 'success') {
                                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                        // Anomaly Image
                                                        if (arrayAI.length > 0) {
                                                            newObj.docLinksL = [];
                                                            newObj.docLinksL = arrayAI;
                                                            _this.dataService
                                                                .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                                                .then(function (results) {
                                                                console.log(' result ...... + ' + results);
                                                                var resObj;
                                                                resObj = JSON.parse(results.toString());
                                                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                                if (resObj.processStatus == 'success') {
                                                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                        _this.itemOri.json.docLinksL = result;
                                                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                        /** Back to service-details page */
                                                                        _this.navCtrl.pop();
                                                                        loading.dismiss();
                                                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                    });
                                                                }
                                                                else {
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                    loading.dismiss();
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        }
                                                    });
                                                }
                                                else {
                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                    loading.dismiss();
                                                }
                                            });
                                        }
                                        else {
                                            // Anomaly Image
                                            if (arrayAI.length > 0) {
                                                newObj.docLinksL = [];
                                                newObj.docLinksL = arrayAI;
                                                _this.dataService
                                                    .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                                    .then(function (results) {
                                                    console.log(' result ...... + ' + results);
                                                    var resObj;
                                                    resObj = JSON.parse(results.toString());
                                                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                    if (resObj.processStatus == 'success') {
                                                        _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                        loading.dismiss();
                                                    }
                                                });
                                            }
                                            else {
                                                _this.itemOri.json.docLinksL = result;
                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                /** Back to service-details page */
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                            }
                                        }
                                    });
                                }
                                else {
                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                }
                            });
                        }
                        else if (arrayPI.length > 0) {
                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayPI;
                            this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", this.itemOri.json.worktype)
                                .then(function (results) {
                                console.log(' result ...... + ' + results);
                                var resObj;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                if (resObj.processStatus == 'success') {
                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                        // Anomaly Image
                                        if (arrayAI.length > 0) {
                                            newObj.docLinksL = [];
                                            newObj.docLinksL = arrayAI;
                                            _this.dataService
                                                .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", _this.itemOri.json.worktype)
                                                .then(function (results) {
                                                console.log(' result ...... + ' + results);
                                                var resObj;
                                                resObj = JSON.parse(results.toString());
                                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                if (resObj.processStatus == 'success') {
                                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                        // Raw Image
                                                        if (arrayRI.length > 0) {
                                                            _this.dataService
                                                                .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                                                .then(function (results) {
                                                                console.log(' result ...... + ' + results);
                                                                var resObj;
                                                                resObj = JSON.parse(results.toString());
                                                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                                if (resObj.processStatus == 'success') {
                                                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                        _this.itemOri.json.docLinksL = result;
                                                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                        /** Back to service-details page */
                                                                        _this.navCtrl.pop();
                                                                        loading.dismiss();
                                                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                    });
                                                                }
                                                                else {
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                    loading.dismiss();
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        }
                                                    });
                                                }
                                                else {
                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                    loading.dismiss();
                                                }
                                            });
                                        }
                                        else {
                                            // Raw Image
                                            if (arrayRI.length > 0) {
                                                _this.dataService
                                                    .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                                    .then(function (results) {
                                                    console.log(' result ...... + ' + results);
                                                    var resObj;
                                                    resObj = JSON.parse(results.toString());
                                                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                    if (resObj.processStatus == 'success') {
                                                        _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                        loading.dismiss();
                                                    }
                                                });
                                            }
                                            else {
                                                _this.itemOri.json.docLinksL = result;
                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                /** Back to service-details page */
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                            }
                                        }
                                    });
                                }
                                else {
                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                }
                            });
                        }
                        else {
                            newObj.docLinksL = [];
                            newObj.docLinksL = arrayAI;
                            this.dataService
                                .saveRecordWithNewAttachType(newObj, this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "AI", this.itemOri.json.worktype)
                                .then(function (results) {
                                console.log(' result ...... + ' + results);
                                var resObj;
                                resObj = JSON.parse(results.toString());
                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                if (resObj.processStatus == 'success') {
                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                        // Raw Image
                                        if (arrayRI.length > 0) {
                                            newObj.docLinksL = [];
                                            newObj.docLinksL = arrayRI;
                                            _this.dataService
                                                .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "RI", _this.itemOri.json.worktype)
                                                .then(function (results) {
                                                console.log(' result ...... + ' + results);
                                                var resObj;
                                                resObj = JSON.parse(results.toString());
                                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                if (resObj.processStatus == 'success') {
                                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                        // Premise Image
                                                        if (arrayPI.length > 0) {
                                                            newObj.docLinksL = [];
                                                            newObj.docLinksL = arrayPI;
                                                            _this.dataService
                                                                .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                                                .then(function (results) {
                                                                console.log(' result ...... + ' + results);
                                                                var resObj;
                                                                resObj = JSON.parse(results.toString());
                                                                console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                                if (resObj.processStatus == 'success') {
                                                                    _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                                        _this.itemOri.json.docLinksL = result;
                                                                        console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                                        /** Back to service-details page */
                                                                        _this.navCtrl.pop();
                                                                        loading.dismiss();
                                                                        // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                                        // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                                        _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                                    });
                                                                }
                                                                else {
                                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                                    loading.dismiss();
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        }
                                                    });
                                                }
                                                else {
                                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                    loading.dismiss();
                                                }
                                            });
                                        }
                                        else {
                                            // Premise Image
                                            if (arrayPI.length > 0) {
                                                newObj.docLinksL = [];
                                                newObj.docLinksL = arrayPI;
                                                _this.dataService
                                                    .saveRecordWithNewAttachType(newObj, _this.itemOri.json.wonum, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', "PI", _this.itemOri.json.worktype)
                                                    .then(function (results) {
                                                    console.log(' result ...... + ' + results);
                                                    var resObj;
                                                    resObj = JSON.parse(results.toString());
                                                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                                                    if (resObj.processStatus == 'success') {
                                                        _this.gf.deletePhoto(resObj, _this.itemOri).then(function (result) {
                                                            _this.itemOri.json.docLinksL = result;
                                                            console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                            _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                            _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                            /** Back to service-details page */
                                                            _this.navCtrl.pop();
                                                            loading.dismiss();
                                                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                            // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                                        });
                                                    }
                                                    else {
                                                        _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                        _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                                        loading.dismiss();
                                                    }
                                                });
                                            }
                                            else {
                                                _this.itemOri.json.docLinksL = result;
                                                console.log(' length : ' + _this.itemOri.json.docLinksL.length);
                                                _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                                _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", false);
                                                /** Back to service-details page */
                                                _this.navCtrl.pop();
                                                loading.dismiss();
                                                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                                // newRootNav.push("SealServiceDetailsPage", this.itemOri);
                                                _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                            }
                                        }
                                    });
                                }
                                else {
                                    _this.itemOri.json.loc_attachmentCount = _this.itemOri.json.docLinksL.length;
                                    _this.jsonStore.replaceWO(_this.itemOri, "LPCWORKORDER", true);
                                    _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                    loading.dismiss();
                                }
                            });
                        }
                    }
                }
            }
        }
        console.log('before call start loading : :: ' + this.itemOri.json.docLinksL);
    };
    SealAttachmentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SealAttachmentPage.prototype.openUrl = function (url) {
        window.open(url, '_system');
        return false;
        // href = "#" onclick = "window.open('https://plus.google.com/+NicRaboy', '_system', 'location=yes'); return false;"
    };
    /**
     * Reason   : Method to change docType image (Category Image)
     * Created  : 02/05/2019
     */
    SealAttachmentPage.prototype.changeDocTypeImage = function (value, array) {
        console.log("method to change doctype of image..");
        // Checking is photo data is available or not
        if (typeof (array) !== "undefined" && array !== null && array !== "") {
            array.describedBy.docType = value;
        }
    };
    SealAttachmentPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 10000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer Dismiss '); });
    };
    SealAttachmentPage.prototype.openModalPage = function (indexArry) {
        debugger;
        var data = {
            paramObj: this.item,
            index: indexArry
        };
        var modal = this.modalController.create('ModalPageAttachmentPage', data);
        modal.present();
    };
    /**
     * Description: Method to re-arrange item/attachment image.
     * Created: Alif (23.01.2020)
     */
    SealAttachmentPage.prototype.reorderItems = function (indexes) {
        var element = this.item.json.docLinksL[indexes.from];
        this.item.json.docLinksL.splice(indexes.from, 1);
        this.item.json.docLinksL.splice(indexes.to, 0, element);
    };
    SealAttachmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seal-attachment',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-attachment/seal-attachment.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title *ngIf="type === \'photo\'">Attachment</ion-title>\n    <ion-title *ngIf="type === \'pdiagram\'">Phase Diagram</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only style="padding-right: 20px;">\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end style="padding-right: 20px;">\n      <button ion-button icon-only (click)="getPictures()">\n        <ion-icon color="light" name="md-attach"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end style="padding-right: 20px;">\n      <button ion-button icon-only (click)="takePhoto()">\n        <ion-icon color="light" name="md-camera"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar *ngIf="type === \'photo\'">\n    <ion-segment [(ngModel)]="segment" mode="md">\n      <ion-segment-button value="Image">\n        Image\n      </ion-segment-button>\n      <ion-segment-button value="PDF">\n        PDF\n      </ion-segment-button>\n    </ion-segment>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <span *ngIf="type === \'photo\'">\n    <div *ngIf="segment === \'Image\'">\n      <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n        <div *ngFor="let photo of this.item.json.docLinksL; let id = index">\n          <ion-item *ngIf="photo.describedBy.loc_show">\n            <ion-card>\n              <ion-row style="padding: 5px;">\n                <ion-col col-12 col-sm-12 col-md-3 align-self-center>\n                  <img [src]="photo.describedBy.loc_base64Image" *ngIf="photo.describedBy.loc_base64Image" #myImage\n                    (click)="presentImage(myImage)" />\n                  <img src="{{photo.href}}" *ngIf="!photo.describedBy.loc_base64Image" #myImage\n                    (click)="presentImage(myImage)" />\n                </ion-col>\n                <ion-col>\n                  <ion-row style="margin: 5px;">\n                    <ion-col col-md-4>\n                      <h2 class="custom-h2">Type of Image</h2>\n                    </ion-col>\n                    <ion-col col-md-8>\n                      <p class="custom-p">{{ photo.describedBy.loc_title == \'PR\' ? \'Premis\' : \n                        photo.describedBy.loc_title == \'MINS\' ? \'Pepasangan Meter\' :\n                        photo.describedBy.loc_title == \'MD\' ? \'Paparan Meter\' :\n                        photo.describedBy.loc_title == \'SNSMTR\' ? \'Sil dan Pelekat (Meter)\' :\n                        photo.describedBy.loc_title == \'ANMLYM\' ? \'Anomali (Meter)\' :\n                        photo.describedBy.loc_title == \'OTHRINS\' ? \'Pemasangan (Lain)\' :\n                        photo.describedBy.loc_title == \'SNSOTHR\' ? \'Sil dan Pelekat (Lain)\' :\n                        photo.describedBy.loc_title == \'ANMLMOTHR\' ? \'Anomali (Lain)\' :\n                        photo.describedBy.loc_title == \'CRTVACT\' ? \'Tindakan Pembetulan\' :\n                        photo.describedBy.loc_title == \'CRTVACTDM\' ? \'Tindakan Pembetulan (Paparan Meter)\' :\n                        photo.describedBy.loc_title == \'WTNSS\' ? \'Saksi\' : \'...\' }}\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style="margin: 5px;">\n                    <ion-col col-md-4>\n                      <h2 class="custom-h2">Category of Image</h2>\n                    </ion-col>\n                    <ion-col col-md-8>\n                      <p class="custom-p">\n                        {{ photo.describedBy.category == \'PI\' ? \'Premise Image\' : \n                        photo.describedBy.category == \'RI\' ? \'Raw Image\' : \n                        photo.describedBy.category == \'AI\' ? \'Anomaly Image\' : \'...\' }}\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col style="display: block;margin: 5px;">\n                      <h2 class="custom-h2">Description</h2>\n                      <p class="custom-p">{{ photo.describedBy.description || \'\' }}</p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <button ion-button full icon-start color="primary" mode="md" (click)="openModalPage(id)">\n                        <!-- <ion-icon name="create"></ion-icon> -->\n                        Edit\n                      </button>\n                    </ion-col>\n                    <ion-col>\n                      <button ion-button full icon-start color="danger" mode="md" (click)="deletePhoto(id)">\n                        <!-- <ion-icon name="trash"></ion-icon> -->\n                        Delete\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-item>\n        </div>\n      </ion-item-group>\n\n      <!-- <ion-list>\n        <ion-item-group reorder="true">\n          <ion-item *ngFor="let photo of this.item.json.docLinksL; let id = index">\n            <div *ngIf="photo.describedBy.loc_show">\n\n              <ion-card class="block" style="background-color: #f6fbff">\n                <ion-card-content>\n                  <ion-row>\n                    <ion-col col-4></ion-col>\n                    <ion-col col-4>\n                      <img width="60px" height="150px" [src]="photo.describedBy.loc_base64Image"\n                        *ngIf="photo.describedBy.loc_base64Image" #myImage (click)="presentImage(myImage)" />\n                      <img width="60px" height="150px" *ngIf="!photo.describedBy.loc_base64Image" src="{{photo.href}}"\n                        #myImage (click)="presentImage(myImage)" /></ion-col>\n                    <ion-col col-4></ion-col>\n                  </ion-row>\n                </ion-card-content>\n\n                <ion-card-content>\n                  <ion-row no-padding>\n                    <ion-col>\n                      <h2>Type of Image:</h2>\n                      <span>{{photo.describedBy.loc_title}}</span>\n                    </ion-col>\n                    <ion-col>\n                      <h2>Category:</h2>\n                      <span>{{photo.describedBy.category}}</span>\n                    </ion-col>\n                    <ion-col>\n                      <h2> Description:</h2>\n                      <span> {{photo.describedBy.description}}</span>\n                    </ion-col>\n                  </ion-row>\n\n                </ion-card-content>\n\n                <ion-row no-padding>\n                  <ion-col>\n                    <button ion-button clear small color="danger" icon-start (click)="deletePhoto(id)">\n                      <ion-icon name="trash" class="deleteIcon"></ion-icon>\n                      Delete\n                    </button>\n                  </ion-col>\n                  <ion-col text-center>\n                    <button ion-button clear small icon-start (click)="openModalPage(id)">\n                      <ion-icon name="create" class="deleteIcon"></ion-icon>\n                      Edit\n                    </button>\n                  </ion-col>\n\n                </ion-row>\n              </ion-card> -->\n      <!--  <ion-item>\n                  <ion-label class="maxwidth">Type of Image</ion-label>\n                  <ion-select [(ngModel)]="photo.describedBy.loc_title" multiple="false"\n                    (ionChange)="typeSelection(photo, id, $event)" placeholder="Please select">\n                    <ion-option value="PR">Premis</ion-option>\n                    <ion-option value="MINS">Pepasangan Meter</ion-option>\n                    <ion-option value="MD">Paparan Meter</ion-option>\n                    <ion-option value="SNSMTR">Sil dan Pelekat (Meter)</ion-option>\n                    <ion-option value="ANMLYM">Anomali (Meter)</ion-option>\n                    <ion-option value="OTHRINS">Pemasangan (Lain)</ion-option>\n                    <ion-option value="SNSOTHR">Sil dan Pelekat (Lain)</ion-option>\n                    <ion-option value="ANMLMOTHR">Anomali (Lain)</ion-option>\n                    <ion-option value="CRTVACT">Tindakan Pembetulan</ion-option>\n                    <ion-option value="CRTVACTDM">Tindakan Pembetulan (Paparan Meter)</ion-option>\n                    <ion-option value="WTNSS">Saksi</ion-option>\n                  </ion-select>\n                </ion-item>\n                <br />\n                <ion-item>\n                  <ion-label class="maxwidth">Category</ion-label>\n                  <ion-select [(ngModel)]="photo.describedBy.category" multiple="false" placeholder="Please select">\n                    <ion-option value="PI">Premise Image</ion-option>\n                    <ion-option value="RI">Raw Image</ion-option>\n                    <ion-option value="AI">Anomaly Image</ion-option>\n                  </ion-select>\n                </ion-item>\n                <br />\n                <ion-item>\n                  <ion-label item-start class="maxwidth">Description</ion-label>\n                  <ion-textarea item-content type="textarea" rows="4" placeholder="Description"\n                    [(ngModel)]="photo.describedBy.description"\n                    (change)="checkOnchange(\'description\', photo, photo.describedBy.description)"></ion-textarea>\n                </ion-item> -->\n\n      <!-- \n            </div>\n          </ion-item>\n        </ion-item-group>\n      </ion-list> -->\n\n      <div *ngIf="this.item.json.docLinksL == \'\'">\n        <ion-row>\n          <ion-item no-lines>\n            <ion-label text-center color="danger">\n              No Record to display. Browse or capture the photo to attach\n            </ion-label>\n          </ion-item>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf="segment === \'PDF\'">\n      <ion-list>\n        <ion-list-header>\n          <ion-icon name="document" item-start></ion-icon>\n          List of PDF\'s\n        </ion-list-header>\n        <span *ngFor="let pdf of attachment_tmp; let j = index">\n          <ion-item *ngIf="pdf.describedBy.loc_show">\n            <h2>{{ pdf.describedBy.title }}</h2>\n            <p>{{ pdf.describedBy.created | date: gv.dateFormat }}</p>\n            <a ion-button round item-end color="primary" mode="md" style="padding: 15px;" [href]="pdf.href"\n              [target]="_blank">View</a>\n            <a ion-button round item-end color="danger" mode="md" style="padding: 15px;"\n              (click)="deletePdf(j)">Remove</a>\n          </ion-item>\n        </span>\n        <ion-item *ngIf="!pdfstatus">\n          <ion-label text-center color="danger">\n            File is not available.\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <!-- Remove Condition: *ngIf=" pdfstatus===true" | Alif (28.06.2019) | -->\n      <!-- <ion-row>\n        <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n          <ion-item>\n            <ion-label>No.</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>File Name</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div *ngFor="let pdflist of listPdf ; let j = index">\n        <ion-row>\n          <ion-col col-2 col-md-2 col-sm-2 align-self-center>\n            <ion-item>\n              {{ j+1 }}.\n            </ion-item>\n          </ion-col>\n          <ion-col col-8 col-md-8 col-sm-8>\n            <ion-item text-wrap>\n              {{ pdflist.PdfFile.describedBy.title }}\n            </ion-item>\n          </ion-col>\n          <ion-col align-self-center>\n            <a ion-button [href]="pdflist.PdfFile.href" [target]="_blank">Open</a>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="pdfstatus === false">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label text-center color="danger">\n              File is not available.\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div> -->\n    </div>\n  </span>\n\n  <span *ngIf="type === \'pdiagram\'">\n    <div *ngFor="let photo of this.item.json.docLinksL; let id = index">\n      <ion-row *ngIf="photo.describedBy.loc_show">\n\n        <ion-col col-3 col-md-3>\n          <ion-card class="block">\n            <img width="60px" height="150px" [src]="photo.describedBy.loc_base64Image"\n              *ngIf="photo.describedBy.loc_base64Image" #myImage (click)="presentImage(myImage)" />\n            <img width="60px" height="150px" *ngIf="!photo.describedBy.loc_base64Image" src="{{photo.href}}" #myImage\n              (click)="presentImage(myImage)" />\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <!-- <ion-item no-lines>\n            <ion-label class="maxwidth">Type of Image</ion-label>\n\n            <ion-select [(ngModel)]="photo.describedBy.title" multiple="false" (ionChange)="typeSelection()"\n              [ngClass]="(photo.describedBy.title === null || photo.describedBy.title === undefined || photo.describedBy.title === \'\') ?  \'redHighlightText\':\'blackHighlightText\'"> -->\n          <!-- Close Other Option because this only for phase diagram -->\n          <!-- <ion-option value="MMETER.JPG">Main Meter</ion-option>\n              <ion-option value="CMETER.JPG">Check Meter</ion-option>\n              <ion-option value="FMETER.JPG">Feeder Meter</ion-option>\n              <ion-option value="CFMETER.JPG">Check Feeder Meter</ion-option>\n              <ion-option value="CTRANS.JPG">Current Transformer</ion-option>\n              <ion-option value="VTRANS.JPG">Voltage Transformer</ion-option>\n              <ion-option value="MKIOSK.JPG">Meter Kiosk</ion-option>\n              <ion-option value="MROOM.JPG">Meter Room</ion-option>\n              <ion-option value="SMETER.JPG">Sub Meter</ion-option>\n              <ion-option value="CSMETER.JPG">Check Sub Meter</ion-option>\n              <ion-option value="MODEM.JPG">Modem</ion-option>\n              <ion-option value="SIM.JPG">Sim Card</ion-option>\n              <ion-option value="PREMISE.JPG">Premise/Pencawang Elektrik TNB</ion-option>\n              <ion-option value="OTHER.JPG">Other</ion-option> -->\n          <!-- <ion-option value="PDIAGRAM.JPG" [selected]="photo.describedBy.title === \'PDIAGRAM.JPG\'">Phasor Diagram\n              </ion-option>\n            </ion-select> -->\n          <!-- <ion-input id="test1" type="text" [ngClass]="(photo.describedBy.title == \'\' && !validate) ? \'redHighlightText\' : \'blackHighlightText\'" placeholder="Name" [(ngModel)]="photo.describedBy.title" (change)="checkOnchange(\'name\', photo, photo.describedBy.title)"></ion-input> -->\n          <!-- </ion-item>\n          <br /> -->\n          <!-- For Normal Image -->\n          <!-- <ion-item no-lines>\n            <ion-label class="maxwidth">Category of Image</ion-label>\n            <ion-select [(ngModel)]="photo.describedBy.category" multiple="false" (ionChange)="typeSelection()">\n              <ion-option value="PI">Premise Image</ion-option>\n              <ion-option value="RI">Raw Image</ion-option>\n            </ion-select>\n          </ion-item> -->\n          <!-- For Phase Diagram Image -->\n          <ion-item>\n            <ion-label class="maxwidth">Feeder Section</ion-label>\n            <ion-select multiple="false" [(ngModel)]="photo.describedBy.ta4feederidref" placeholder="Please select">\n              <span *ngIf="optionFeeder[0].ta0feederid == null">\n                <ion-option *ngFor="let option of optionFeeder; let i = index" value="{{ option.ta0feederid }}"\n                  [selected]="option.ta0feedercode === photo.describedBy.ta4feederidref" disabled="true">\n                  {{ option.description }}</ion-option>\n              </span>\n              <span *ngIf="optionFeeder[0].ta0feederid != null">\n                <ion-option *ngFor="let option of optionFeeder; let i = index" value="{{ option.ta0feederid }}"\n                  [selected]="option.ta0feedercode === photo.describedBy.ta4feederidref">\n                  {{ option.description }} - {{ option.ta0feedercode }}</ion-option>\n              </span>\n\n            </ion-select>\n          </ion-item>\n          <br />\n          <ion-item>\n            <ion-label class="maxwidth">Category</ion-label>\n            <ion-select [(ngModel)]="photo.describedBy.docType" placeholder="Please select"\n              (ionChange)="changeDocTypeImage($event, photo)" multiple="false">\n              <ion-option value="PD">Phase Diagram</ion-option>\n              <ion-option value="DD">Reading Details</ion-option>\n            </ion-select>\n          </ion-item>\n          <br />\n          <ion-item>\n            <ion-label item-start class="maxwidth">Description</ion-label>\n            <ion-textarea item-content type="textarea" rows="4" placeholder="Description"\n              [(ngModel)]="photo.describedBy.description"\n              (change)="checkOnchange(\'description\', photo, photo.describedBy.description)"></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-md-1>\n          <button ion-button color="danger" style="width: 30px;height: 30px;text-align: right;"\n            (click)="deletePhoto(id)">\n            <ion-icon name="trash" class="deleteIcon"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </span>\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <!-- [disabled]="gv.syncIndicator" -->\n        <button ion-button round block mode="md" (click)="saveImage()">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-attachment/seal-attachment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_10__providers_work_order_work_order__["a" /* WorkOrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_17__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_16__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_13__pojo_DescribedBy__["a" /* DescribedBy */]])
    ], SealAttachmentPage);
    return SealAttachmentPage;
}());

//# sourceMappingURL=seal-attachment.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SealAttachmentPageModule", function() { return SealAttachmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seal_attachment__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_DescribedBy__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(964);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SealAttachmentPageModule = /** @class */ (function () {
    function SealAttachmentPageModule() {
    }
    SealAttachmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seal_attachment__["a" /* SealAttachmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seal_attachment__["a" /* SealAttachmentPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__pojo_DescribedBy__["a" /* DescribedBy */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
            ],
        })
    ], SealAttachmentPageModule);
    return SealAttachmentPageModule;
}());

//# sourceMappingURL=seal-attachment.module.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeederDetails; });
//import { Asset } from './Asset';
var FeederDetails = /** @class */ (function () {
    function FeederDetails() {
        this.loc_createCT = false;
        this.loc_haveNewDevice = false;
        /*
         tnb_feeder: string;
          _rowstamp: any;
          orgid: string;
          tnb_devicedetail_collectionref: string;
          tnb_feederid: any;
          localref: string;
          href: string;
          multiAssetLocci: Array<MultiAssetLocci>;
          tnb_devicedetail: Array<DeviceDetails>;
          */
        // local variable.
        this.loc_multiassetlocci_haveChange = false;
    }
    return FeederDetails;
}());

//# sourceMappingURL=FeederDetails.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DestinationType */
/* unused harmony export EncodingType */
/* unused harmony export MediaType */
/* unused harmony export PictureSourceType */
/* unused harmony export PopoverArrowDirection */
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
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


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.FILE_URI,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64 (DATA_URL):
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.prototype.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.prototype.cleanup = function () { return; };
    ;
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Camera.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OutputType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
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


var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/wymsee/cordova-imagePicker
 *
 * @usage
 * ```typescript
 * import { ImagePicker } from '@ionic-native/image-picker';
 *
 *
 * constructor(private imagePicker: ImagePicker) { }
 *
 * ...
 *
 * this.imagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => { });
 *
 * ```
 * @interfaces
 * ImagePickerOptions
 */
var ImagePicker = (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @returns {Promise<any>} Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    /**
       * Pick pictures from the library.
       * @param {ImagePickerOptions} options
       * @returns {Promise<any>} Returns a Promise that resolves the image file URI
       * otherwise rejects with an error.
       */
    ImagePicker.prototype.getPictures = /**
       * Pick pictures from the library.
       * @param {ImagePickerOptions} options
       * @returns {Promise<any>} Returns a Promise that resolves the image file URI
       * otherwise rejects with an error.
       */
    function (options) { return; };
    /**
     * Check if we have permission to read images
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
     */
    /**
       * Check if we have permission to read images
       * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
       */
    ImagePicker.prototype.hasReadPermission = /**
       * Check if we have permission to read images
       * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
       */
    function () { return; };
    /**
     * Request permission to read images
     * @returns {Promise<any>}
     */
    /**
       * Request permission to read images
       * @returns {Promise<any>}
       */
    ImagePicker.prototype.requestReadPermission = /**
       * Request permission to read images
       * @returns {Promise<any>}
       */
    function () { return; };
    ImagePicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "getPictures", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "hasReadPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "requestReadPermission", null);
    /**
     * @name Image Picker
     * @description
     * Cordova Plugin For Multiple Image Selection
     *
     * Requires Cordova plugin: `cordova-plugin-image-picker`.
     * For more info, please see the https://github.com/wymsee/cordova-imagePicker
     *
     * @usage
     * ```typescript
     * import { ImagePicker } from '@ionic-native/image-picker';
     *
     *
     * constructor(private imagePicker: ImagePicker) { }
     *
     * ...
     *
     * this.imagePicker.getPictures(options).then((results) => {
     *   for (var i = 0; i < results.length; i++) {
     *       console.log('Image URI: ' + results[i]);
     *   }
     * }, (err) => { });
     *
     * ```
     * @interfaces
     * ImagePickerOptions
     */
    ImagePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'ImagePicker',
            plugin: 'cordova-plugin-telerik-imagepicker',
            pluginRef: 'window.imagePicker',
            repo: 'https://github.com/Telerik-Verified-Plugins/ImagePicker',
            install: 'ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"',
            installVariables: ['PHOTO_LIBRARY_USAGE_DESCRIPTION'],
            platforms: ['Android', 'iOS']
        })
    ], ImagePicker);
    return ImagePicker;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
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


/**
 * @beta
 * @name Base64
 * @description
 * This Plugin is used to encode base64 of any file, it uses js code for iOS, but in case of android it uses native code to handle android versions lower than v.3
 *
 * @usage
 * ```typescript
 * import { Base64 } from '@ionic-native/base64';
 *
 * constructor(private base64: Base64) { }
 *
 * ...
 *
 * let filePath: string = 'file:///...';
 * this.base64.encodeFile(filePath).then((base64File: string) => {
 *   console.log(base64File);
 * }, (err) => {
 *   console.log(err);
 * });
 *
 * ```
 */
var Base64 = (function (_super) {
    __extends(Base64, _super);
    function Base64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function encodes base64 of any file
     * @param {string} filePath Absolute file path
     * @return {Promise<string>} Returns a promise that resolves when the file is successfully encoded
     */
    Base64.prototype.encodeFile = function (filePath) { return; };
    Base64.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Base64.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Base64.prototype, "encodeFile", null);
    Base64 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Base64',
            plugin: 'com-badrit-base64',
            pluginRef: 'plugins.Base64',
            repo: 'https://github.com/hazemhagrass/phonegap-base64',
            platforms: ['Android', 'iOS']
        })
    ], Base64);
    return Base64;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(27);
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


/**
 * @name File Path
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 *
 * @usage
 * ```typescript
 * import { FilePath } from '@ionic-native/file-path';
 *
 * constructor(private filePath: FilePath) { }
 *
 * ...
 *
 * this.filePath.resolveNativePath(path)
 *   .then(filePath => console.log(filePath))
 *   .catch(err => console.log(err));
 *
 * ```
 */
var FilePath = (function (_super) {
    __extends(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolve native path for given content URL/path.
     * @param {string} path  Content URL/path.
     * @returns {Promise<string>}
     */
    FilePath.prototype.resolveNativePath = function (path) {
        return;
    };
    FilePath.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    FilePath.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FilePath.prototype, "resolveNativePath", null);
    FilePath = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'FilePath',
            plugin: 'cordova-plugin-filepath',
            pluginRef: 'window.FilePath',
            repo: 'https://github.com/hiddentao/cordova-plugin-filepath',
            platforms: ['Android']
        })
    ], FilePath);
    return FilePath;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocLinkDetails; });
var DocLinkDetails = /** @class */ (function () {
    function DocLinkDetails() {
    }
    return DocLinkDetails;
}());

//# sourceMappingURL=DocLinkDetails.js.map

/***/ })

});
//# sourceMappingURL=5.js.map