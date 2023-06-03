webpackJsonp([6],{

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_work_order_work_order__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pojo_DocLinkDetails__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pojo_DescribedBy__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_Domains__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AttachmentPage = /** @class */ (function () {
    function AttachmentPage(navCtrl, navParams, actionSheetCtrl, toastCtrl, alertCtrl, appCtrl, workOrderService, platform, loadingCtrl, camera, sanitizer, file, imagePicker, imageViewerCtrl, params, jsonStore, gf, gv, dataService) {
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
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.file = file;
        this.imagePicker = imagePicker;
        this.imageViewerCtrl = imageViewerCtrl;
        this.params = params;
        this.jsonStore = jsonStore;
        this.gf = gf;
        this.gv = gv;
        this.dataService = dataService;
        this.validate = false;
        this.haveChange = false;
        this.typeContainer = [];
        this.item = this.params.data;
        //console.log("AttachmentPage constructor >>> this.item : "+JSON.stringify(this.item));
        this._imageViewerCtrl = imageViewerCtrl;
        this.photos = [];
        this.validate = true;
        var queryPart = WL.JSONStore.QueryPart().equal("wonum", this.item.json.wonum);
        this.jsonStore.getSearchRecord(__WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, queryPart, 0).then(function (result) {
            _this.item = JSON.parse(JSON.stringify(result[0]));
            //console.log("AttachmentPage constructor >>> this.item : "+JSON.stringify(this.item));
            if (typeof (_this.item.json.docLinksL) != null && typeof (_this.item.json.docLinksL) != 'undefined') {
                //console.log("AttachmentPage constructor >>> docLinksL.length : "+this.item.json.docLinksL.length);
                for (var i = 0; i < _this.item.json.docLinksL.length; i++) {
                    var photoDetail = _this.item.json.docLinksL[i];
                    console.log("AttachmentPage constructor >>> photoDetail " + i + " : " + JSON.stringify(photoDetail));
                    if (!photoDetail.href.includes("?_lid=")) {
                        photoDetail.href = photoDetail.href + '?_lid=' + _this.gv.username + '&_lpwd=' + _this.gv.password;
                    }
                    //console.log("AttachmentPage constructor >>> loc_photoVersion " + i + " : "+photoDetail.describedBy.loc_photoVersion);
                    if (typeof (photoDetail.describedBy.loc_photoVersion) === 'undefined' || photoDetail.describedBy.loc_photoVersion === null || photoDetail.describedBy.loc_photoVersion === '') {
                        photoDetail.describedBy.loc_photoVersion = 'old';
                    }
                    if (typeof (photoDetail.describedBy.description) !== 'undefined' || photoDetail.describedBy.description !== null || photoDetail.describedBy.description !== '') {
                        console.log('photoDetail.describedBy.description' + photoDetail.describedBy.description);
                        var str1 = photoDetail.describedBy.description;
                        console.log('first : ' + str1.startsWith('/tnbmmms'));
                        if (str1.startsWith('/tnbmmms')) {
                            photoDetail.describedBy.description = '';
                        }
                    }
                    // change for reading title for 'Type of Image'
                    var title = _this.item.json.docLinksL[i].describedBy.title;
                    var convert = title.replace(/[0-9]/g, '');
                    var string = convert.replace('.JPG', '');
                    _this.item.json.docLinksL[i].describedBy.loc_title = string;
                    console.log('describedBy.loc_title ' + i + ' : ' + photoDetail.describedBy.loc_title);
                    console.log('describedBy.loc_show : ' + photoDetail.describedBy.loc_show);
                    console.log("describedBy.loc_photoVersion : " + photoDetail.describedBy.loc_photoVersion);
                    console.log("AttachmentPage constructor >>> loc_show " + i + " : " + photoDetail.describedBy.loc_show);
                    if (typeof (photoDetail.describedBy.loc_show) === 'undefined' || photoDetail.describedBy.loc_photoVersion === "old") {
                        photoDetail.describedBy.loc_show = true;
                    }
                }
            }
            else {
                _this.item.json.docLinksL = new __WEBPACK_IMPORTED_MODULE_9__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
                _this.item.json.docLinksL = [];
            }
        });
    }
    AttachmentPage.prototype.typeSelection = function (value, index) {
        // Getting random number
        var d = new Date();
        var random = d.getUTCDate().toString() + (d.getUTCMonth() + 1).toString() + d.getUTCFullYear().toString() + d.getUTCMilliseconds().toString();
        /**
         * Description : Change value of title & filename
         * Created     : Alif (30.08.2019)
         */
        if (typeof (this.item.json.docLinksL) !== "undefined") {
            if (typeof (this.item.json.docLinksL[index].describedBy.title) !== "undefined") {
                var loc_title = this.item.json.docLinksL[index].describedBy.loc_title;
                // loc_title += (Math.floor(Math.random() * 90000) + 10000).toString() + ".JPG";
                loc_title += this.item.json.wonum + (random).toString() + ".JPG";
                this.gf.displayToast("Title : " + loc_title);
                this.item.json.docLinksL[index].describedBy.title = loc_title;
                this.item.json.docLinksL[index].describedBy.fileName = loc_title;
            }
        }
    };
    /**
    *
    * THis method is used for delete the image in maximo,
    * Don't slice the image, make flag as false, it help to delete record in maximo.
    *
    * @param index
    */
    AttachmentPage.prototype.deletePhoto = function (index) {
        var _this = this;
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
            ]
        });
        confirm.present();
    };
    /**
    * takephoto
    * This method is used for take photo using mobile camera both front and back.
    * initial make validate false, when take photo.
    * maximum 9 ph0to can allow then to take.
    * save to photo into album configure in global variable storeImageInGallery, can change in settings.
    * Image will get it as base64 put into the JSONStore.
    *
    */
    AttachmentPage.prototype.takePhoto = function () {
        var _this = this;
        this.validate = false;
        if (this.item.json.docLinksL.length < 10) {
            this.gf.setLoadingTimeout(3000);
            var options = {
                quality: 30,
                sourceType: this.camera.PictureSourceType.CAMERA,
                targetWidth: 800,
                targetHeight: 800,
                destinationType: 0,
                saveToPhotoAlbum: this.gv.storeImageInGallery
            };
            this.camera.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                var head = 'data:image/jpeg;base64,';
                var sizeVal = ((base64Image.length - head.length) * 3 / 4 / (1024 * 1024)).toFixed(4);
                var photoDetail = new __WEBPACK_IMPORTED_MODULE_9__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
                var describedBy = new __WEBPACK_IMPORTED_MODULE_10__pojo_DescribedBy__["a" /* DescribedBy */]();
                describedBy.loc_url = _this.base64Image;
                describedBy.loc_base64Image = base64Image;
                describedBy.attachmentSize = sizeVal;
                describedBy.title = '';
                describedBy.description = '';
                describedBy.loc_show = true;
                describedBy.loc_photoVersion = 'new';
                var dMill = new Date().getMilliseconds();
                var d = dMill + Math.random().toString(36).substr(2, 9);
                describedBy.fileName = _this.createFileName();
                photoDetail.describedBy = describedBy;
                _this.haveChange = true;
                if (typeof (_this.item.json.docLinksL) != null && typeof (_this.item.json.docLinksL) != 'undefined') {
                    _this.item.json.docLinksL.push(photoDetail);
                }
                else {
                    _this.item.json.docLinksL = new __WEBPACK_IMPORTED_MODULE_9__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
                    _this.item.json.docLinksL = [];
                    _this.item.json.docLinksL.push(photoDetail);
                }
                _this.item.json.loc_attachmentCount++;
                _this.gf.stopLoading();
            }, function (error) {
                _this.photos.push(_this.base64Image);
            });
        }
        else {
            this.showAlert('Warning', "You are exceeding the limit of attachment...");
        }
    };
    /**
    * photo picker from the gallery.
    * Help to pick the photo from the gallery. same rules as like camera
    * Using imagepicker can select image.
    * */
    AttachmentPage.prototype.getPictures = function () {
        var _this = this;
        if (this.item.json.docLinksL.length < 10) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Loading...'
            });
            loading_1.present();
            this.gf.loadingTimer(loading_1);
            setTimeout(function () {
                loading_1.dismiss();
            }, 5000);
            var options = {
                maximumImagesCount: 3,
                targetWidth: 800,
                targetHeight: 800,
                disable_popover: true
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
                            var photoDetail = new __WEBPACK_IMPORTED_MODULE_9__pojo_DocLinkDetails__["a" /* DocLinkDetails */]();
                            var describedBy = new __WEBPACK_IMPORTED_MODULE_10__pojo_DescribedBy__["a" /* DescribedBy */]();
                            describedBy.loc_url = res;
                            describedBy.loc_base64Image = base64File;
                            describedBy.attachmentSize = sizeVal;
                            describedBy.title = '';
                            describedBy.description = '';
                            describedBy.loc_show = true;
                            describedBy.loc_photoVersion = 'new';
                            describedBy.fileName = _this.createFileName();
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
                loading_1.dismiss();
            }, function (error) {
                console.log("Error Open Gallery : " + JSON.stringify(error));
            });
        }
        else {
            this.showAlert('Warning ', "You are exceeding the limit of attachment...");
        }
    };
    AttachmentPage.prototype.resizeImage = function (longSideMax, file) {
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
    AttachmentPage.prototype.saveImage = function () {
        var _this = this;
        console.log('saveImage -----> came inside to save Image function ');
        //this.item.json.status = this.woStatus;
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.gf.loadingTimerAttachment(loading);
        /**
         * Description: Changing random number on title and fileName
         * Created    : Alif (03.09.2019)
         */
        if (typeof (this.item.json.docLinksL) !== "undefined") {
            for (var i = 0; i < this.item.json.docLinksL.length; i++) {
                // checking photo version, only new allow to change random number.
                if (typeof (this.item.json.docLinksL[i].describedBy.loc_photoVersion) !== "undefined") {
                    if (this.item.json.docLinksL[i].describedBy.loc_photoVersion === "new") {
                        if (typeof (this.item.json.docLinksL[i].describedBy.title) !== "undefined") {
                            var loc_title = this.item.json.docLinksL[i].describedBy.loc_title;
                            loc_title += (Math.floor(Math.random() * 90000) + 10000).toString() + ".JPG";
                            this.gf.displayToast("Title : " + loc_title);
                            this.item.json.docLinksL[i].describedBy.title = loc_title;
                            this.item.json.docLinksL[i].describedBy.fileName = loc_title;
                            this.item.json.docLinksL[i].describedBy.docType = "UPJ";
                        }
                    }
                }
            }
        }
        setTimeout(function () {
            _this;
            loading.onWillDismiss(function () {
                _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                _this.item.json.loc_doclinks_haveChange = true;
                _this.gf.displayToast("Feeder Details updated.");
                loading.dismiss();
            });
        }, 10000);
        this.validate = true;
        console.log('saveImage -----> Total Images : ' + this.item.json.docLinksL.length);
        for (var i = 0; i < this.item.json.docLinksL.length; i++) {
            if (this.item.json.docLinksL[i].describedBy.title === null || (typeof (this.item.json.docLinksL[i].describedBy.title) == 'undefined')) {
                this.presentToast("Required field should not be empty.");
                this.validate = false;
                loading.dismiss();
                break;
            }
        }
        /**
         * Reason   : Saving to local storage (json data).
         * Created  : 22-01-2019
         */
        console.log('saveImage -----> Images : ' + JSON.stringify(this.item));
        this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
        //console.log('saveImage -----> this.validate : ' + this.validate);
        if (this.validate === true) {
            //console.log('saveImage -----> check network connectivity');
            if (this.gv.testMobile && (__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_UNKNOWN === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_NONE === this.gf.checkNetwork())) {
                console.log('saveImage -----> No Network - save data locally');
                this.item.json.loc_attachmentCount = this.item.json.docLinksL.length;
                this.jsonStore.replaceWO(this.item, "LPCWORKORDER", true);
                this.item.json.loc_doclinks_haveChange = true;
                // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                // newRootNav.push("ServiceDetailsPage", this.item);
                this.navCtrl.pop();
                this.gf.warningAlert("Attachments", this.gv.saveLocallySuccessfully, "OK");
                loading.dismiss();
            }
            else if ((__WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_2G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_3G === this.gf.checkNetwork() || __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].NETWORK_4G === this.gf.checkNetwork())) {
                console.log('saveImage -----> network 2G/3G/4G available');
                /**
                 * Description: Change old(swift) to new(objective-c) plugin.
                 * Edited: Alif (16.10.2019)
                 * old --> mobilesignalswift.getSignalStrength
                 * new --> cordova.plugins.MobileSignal.getSignalStrength
                 */
                cordova.plugins.MobileSignal.getSignalStrength(function (data) {
                    if (_this.gv.deviceSignal <= data) {
                        var itemVal = _this.item;
                        var objCopy = JSON.parse(JSON.stringify(itemVal));
                        delete objCopy.json['ta0feeder'];
                        var newObj = objCopy.json;
                        console.log('saveImage -----> newObj : ' + JSON.stringify(newObj));
                        console.log('saveImage -----> Trigger this.dataService.saveRecordWithNewType');
                        _this.dataService
                            .saveRecordWithNewType(newObj, _this.item.json.wonum, __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', _this.item.json.worktype)
                            .then(function (results) {
                            console.log('saveImage -----> result : + ' + JSON.stringify(results));
                            var resObj;
                            resObj = JSON.parse(results.toString());
                            console.log('saveImage ----->  : resObj : ' + JSON.stringify(resObj));
                            if (resObj.processStatus == 'success') {
                                console.log('saveImage -----> Trigger this.gf.deletePhoto');
                                _this.gf.deletePhoto(resObj, _this.item).then(function (result) {
                                    _this.item.json.docLinksL = result;
                                    _this.item.json.loc_attachmentCount = _this.item.json.docLinksL.length;
                                    console.log('saveImage -----> Total Images : ' + _this.item.json.loc_attachmentCount);
                                    //console.log('saveImage -----> Total Images : ' + JSON.stringify(this.item.json.docLinksL));
                                    //console.log("saveImage -----> this.jsonStore.replaceWO");
                                    _this.jsonStore.replaceWO(_this.item, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, false);
                                    /** Back to service-details page */
                                    loading.dismiss();
                                    // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                                    // newRootNav.push("ServiceDetailsPage", this.item);
                                    _this.navCtrl.pop();
                                    _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                                });
                            }
                            else {
                                _this.item.json.loc_attachmentCount = _this.item.json.docLinksL.length;
                                _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                                console.log('saveImage -----> Error : ' + _this.gv.notSaveSuccessfully);
                                _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                                loading.dismiss();
                            }
                        }, function (error) {
                            _this.item.json.loc_attachmentCount = _this.item.json.docLinksL.length;
                            _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                            console.log('saveImage -----> Error : ' + _this.gv.notSaveSuccessfully);
                            _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + error.description);
                            loading.dismiss();
                        });
                    }
                    else {
                        _this.item.json.loc_attachmentCount = _this.item.json.docLinksL.length;
                        _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                        _this.showAlert('Success', _this.gv.saveLocallySuccessfully + ' Signal strength not enough ');
                        loading.dismiss();
                    }
                });
            }
            else {
                console.log('saveImage -----> network WIFI available');
                var itemVal = this.item;
                var objCopy = JSON.parse(JSON.stringify(itemVal));
                delete objCopy.json['ta0feeder'];
                var newObj = objCopy.json;
                console.log('saveImage -----> newObj : ' + JSON.stringify(newObj));
                console.log('saveImage -----> Trigger this.dataService.saveRecordWithNewType');
                this.dataService
                    .saveRecordWithNewType(newObj, this.item.json.wonum, __WEBPACK_IMPORTED_MODULE_12__pojo_commonEnum_DeviceConstants__["a" /* DeviceConstants */].PAGE_ACTION_ATTACHMENT, '', this.item.json.worktype)
                    .then(function (results) {
                    console.log('saveImage -----> result : ' + JSON.stringify(results));
                    var resObj;
                    resObj = JSON.parse(results.toString());
                    console.log(resObj + ' : res Ojb : ----- ' + JSON.stringify(resObj));
                    if (resObj.processStatus == 'success') {
                        _this.gf.deletePhoto(resObj, _this.item).then(function (result) {
                            _this.item.json.docLinksL = result;
                            _this.item.json.loc_attachmentCount = _this.item.json.docLinksL.length;
                            //console.log('saveImage -----> Total Images : ' + this.item.json.loc_attachmentCount);
                            console.log('saveImage -----> Total Images : ' + JSON.stringify(_this.item.json.docLinksL));
                            console.log("saveImage -----> this.jsonStore.replaceWO");
                            _this.jsonStore.replaceWO(_this.item, __WEBPACK_IMPORTED_MODULE_15__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, false);
                            /** Back to service-details page */
                            loading.dismiss();
                            // let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                            // newRootNav.push("ServiceDetailsPage", this.item);
                            _this.navCtrl.pop();
                            _this.gf.warningAlert("Attachments", _this.gv.saveSuccessfully, "OK");
                        });
                    }
                    else {
                        _this.jsonStore.replaceWO(_this.item, "LPCWORKORDER", true);
                        _this.showAlert('Error', _this.gv.notSaveSuccessfully + ' ' + resObj.description);
                        loading.dismiss();
                    }
                });
            }
        }
    };
    AttachmentPage.prototype.checkOnchange = function (details, value, photoObj) {
        console.log('onchange : ' + details);
    };
    AttachmentPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 10000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer Dismiss '); });
    };
    AttachmentPage.prototype.goBack = function () {
        var _this = this;
        if (this.item.json.docLinksL != 'undefined' && this.item.json.docLinksL.length != 0) {
            if (this.validate) {
                this.navCtrl.pop();
            }
            else {
                var confirm_1 = this.alertCtrl.create({
                    title: 'Confirm Cancel',
                    message: 'Do you agree remove newly added attachment ? You can\'t undo this action',
                    buttons: [{ text: 'Cancel' }, {
                            text: 'Ok',
                            handler: function () {
                                console.log('vlaue : ' + _this.item.json.docLinksL.length);
                                for (var i = _this.item.json.docLinksL.length - 1; i >= 0; i--) {
                                    if ('new' === _this.item.json.docLinksL[i].describedBy.loc_photoVersion) {
                                        console.log('came inside to condition . ');
                                        _this.item.json.docLinksL.splice(i, 1);
                                        _this.item.json.loc_attachmentCount--;
                                        console.log('deleted ');
                                    }
                                    if ('old' === _this.item.json.docLinksL[i].describedBy.loc_photoVersion && !_this.item.json.docLinksL[i].describedBy.loc_show) {
                                        _this.item.json.docLinksL[i].describedBy.loc_show = true;
                                        _this.item.json.loc_attachmentCount++;
                                    }
                                }
                                _this.navCtrl.pop();
                            }
                        }]
                });
                confirm_1.present();
            }
        }
        else {
            this.navCtrl.pop();
        }
    };
    // Create a new name for the image
    AttachmentPage.prototype.createFileName = function () {
        var d;
        var dMill = new Date().getUTCMilliseconds();
        d = dMill + Math.random().toString(36).substr(2, 9);
        var newFileName = d + ".jpg";
        return newFileName;
    };
    // Always get the accurate path to your apps folder
    AttachmentPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    AttachmentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AttachmentPage.prototype.showAlert = function (alertTitle, alertMessage) {
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
    AttachmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-attachment',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/attachment/attachment.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Attachments</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only style="padding-right: 20px;">\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end style="padding-right: 20px;">\n      <button ion-button icon-only (click)="getPictures()">\n        <ion-icon color="light" name="md-attach"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end style="padding-right: 20px;">\n      <button ion-button icon-only (click)="takePhoto()">\n        <ion-icon color="light" name="md-camera"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header>\n  <ion-grid class="headerStyle">\n    <ion-row>\n      <ion-col col-3 col-sm-3 col-md-3 style="text-align: left;">\n        <button ion-button clear (click)="goBack()">\n          <ion-icon name="arrow-back" class="menuBackArrow"> Back</ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-5 col-sm-5 col-md-5 align-self-center>\n        <div class="pageTitle">\n          Attachments\n        </div>\n      </ion-col>\n\n      <ion-col col-1 col-sm-1 col-md-1 align-self-center style="text-align: right;">\n        <button ion-button small round mode="md" disabled="true" class="flash" style="opacity: unset;">\n          <ion-icon class="flash_plnt" name="planet" [style.color]="gv.testMobile ? \'red\':\'green\'">\n            {{ gv.testMobile ? \'Offline\':\'Online\' }}\n          </ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col col-3 col-sm-3 col-md-3 align-self-center style="text-align: right;">\n        <button ion-button round mode="md" style="padding: 10px 25px 10px 25px;" (click)="getPictures()">\n          <ion-icon ios="md-attach"></ion-icon>\n        </button>\n        <button ion-button round mode="md" style="padding: 10px 23px 10px 23px;" (click)="takePhoto()">\n          <ion-icon ios="md-camera"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header> -->\n\n<!-- class="animated fadeInLeft"  -->\n\n<ion-content class="card-background-page">\n\n  <ion-grid *ngIf="this.item.json.docLinksL != \'\'">\n    <div *ngFor="let photo of this.item.json.docLinksL; let id = index">\n      <ion-row *ngIf="photo.describedBy.loc_show">\n        <ion-col col-3 col-md-3>\n          <ion-card class="block">\n            <img width="60px" height="150px" [src]="photo.describedBy.loc_base64Image"\n              *ngIf="photo.describedBy.loc_base64Image" #myImage (click)="presentImage(myImage)" />\n            <img width="60px" height="150px" *ngIf="!photo.describedBy.loc_base64Image" src="{{photo.href}}" #myImage\n              (click)="presentImage(myImage)" />\n          </ion-card>\n        </ion-col>\n        <ion-col col-7 col-md-8>\n          <ion-item no-lines>\n            <ion-label class="maxwidth">Type of Image</ion-label>\n            <ion-select [(ngModel)]="photo.describedBy.loc_title" multiple="false" (ionChange)="typeSelection(id)"\n              [ngClass]="(photo.describedBy.title === null || photo.describedBy.title === undefined || photo.describedBy.title === \'\') ?  \'redHighlightText\':\'blackHighlightText\'">\n              <ion-option value="MMETER">Main\n                Meter</ion-option>\n              <ion-option value="CMETER">Check\n                Meter</ion-option>\n              <ion-option value="FMETER">Feeder\n                Meter</ion-option>\n              <ion-option value="CFMETER">Check\n                Feeder Meter</ion-option>\n              <ion-option value="CTRANS">Current\n                Transformer</ion-option>\n              <ion-option value="VTRANS">Voltage\n                Transformer</ion-option>\n              <ion-option value="MKIOSK">Meter\n                Kiosk</ion-option>\n              <ion-option value="MROOM">Meter\n                Room</ion-option>\n              <ion-option value="SMETER">Sub Meter\n              </ion-option>\n              <ion-option value="CSMETER">Check\n                Sub Meter</ion-option>\n              <ion-option value="MODEM">Modem\n              </ion-option>\n              <ion-option value="SIM">Sim Card\n              </ion-option>\n              <ion-option value="PREMISE">Premise\n                / Pencawang Elektrik TNB</ion-option>\n              <ion-option value="OTHER">Other\n              </ion-option>\n            </ion-select>\n            <!-- <ion-input id="test1" type="text" [ngClass]="(photo.describedBy.title == \'\' && !validate) ? \'redHighlightText\' : \'blackHighlightText\'" placeholder="Name" [(ngModel)]="photo.describedBy.title" (change)="checkOnchange(\'name\', photo, photo.describedBy.title)"></ion-input> -->\n          </ion-item>\n          <br />\n          <ion-item>\n            <ion-label item-start class="maxwidth">Description</ion-label>\n            <ion-textarea item-content type="textarea" rows="4" placeholder="Description"\n              [(ngModel)]="photo.describedBy.description"\n              (change)="checkOnchange(\'description\', photo, photo.describedBy.description)"></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 col-md-1>\n          <button ion-button color="danger" style="width: 30px;height: 30px;text-align: right;"\n            (click)="deletePhoto(id)">\n            <ion-icon name="trash" class="deleteIcon"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n  <!-- \n    User don\'t like ion-fab 31 Dec 2018 by shankar ..\n    <ion-fab bottom right style="right:2%">\n    <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="top" style="padding-top: 20%; zoom:1.2;">\n      <button ion-fab (click)="getPictures()">\n        <ion-icon name="attach"></ion-icon>\n      </button>\n      <button ion-fab (click)="takePhoto()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab> -->\n  <ion-grid *ngIf="this.item.json.docLinksL == \'\'">\n    <p> No Record to display. Browse or capture the photo to attach </p>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="saveImage(item)">\n          Save\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button round block (click)="saveImage(item)" class="saveBtn">\n          <ion-icon name="cloud-upload" class="deleteIcon"> Save </ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block (click)="goBack()" class="cancel">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb_lpc/attachment/attachment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_7__providers_work_order_work_order__["a" /* WorkOrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_14__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_13__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], AttachmentPage);
    return AttachmentPage;
}());

//# sourceMappingURL=attachment.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentPageModule", function() { return AttachmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attachment__ = __webpack_require__(1058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(964);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AttachmentPageModule = /** @class */ (function () {
    function AttachmentPageModule() {
    }
    AttachmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__attachment__["a" /* AttachmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__attachment__["a" /* AttachmentPage */]),
            ],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
            ],
        })
    ], AttachmentPageModule);
    return AttachmentPageModule;
}());

//# sourceMappingURL=attachment.module.js.map

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
//# sourceMappingURL=6.js.map