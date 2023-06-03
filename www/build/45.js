webpackJsonp([45],{

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPageAttachmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__ = __webpack_require__(31);
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
 * Generated class for the ModalPageAttachmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPageAttachmentPage = /** @class */ (function () {
    function ModalPageAttachmentPage(navCtrl, params, viewController, gf, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.viewController = viewController;
        this.gf = gf;
        this.alertCtrl = alertCtrl;
        this.description = " ";
        this.categoryIndicator = false;
        this.typeIndicator = false;
        this.anyChanges = false;
        debugger;
        this.item = this.params.get("paramObj");
        this.indexArry = this.params.get("index");
        this.photo = this.item.json.docLinksL[this.indexArry];
    }
    ModalPageAttachmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPageAttachmentPage');
        // Assign value to local variables.
        if (typeof (this.photo.describedBy.loc_title) !== "undefined" && this.photo.describedBy.loc_title !== null && this.photo.describedBy.loc_title !== "") {
            this.type = this.photo.describedBy.loc_title;
        }
        if (typeof (this.photo.describedBy.category) !== "undefined" && this.photo.describedBy.category !== null && this.photo.describedBy.category !== "") {
            this.category = this.photo.describedBy.category;
        }
        if (typeof (this.photo.describedBy.description) !== "undefined" && this.photo.describedBy.description !== null && this.photo.describedBy.description !== "") {
            this.description = this.photo.describedBy.description;
        }
    };
    ModalPageAttachmentPage.prototype.closeModal = function () {
        console.log('closeModal ModalPageAttachmentPage');
        // Checking validation fields
        if (typeof (this.type) == "undefined" || this.type == null || this.type == "") {
            this.categoryIndicator = true;
        }
        else {
            this.categoryIndicator = false;
        }
        if (typeof (this.category) == "undefined" || this.category == null || this.category == "") {
            this.typeIndicator = true;
        }
        else {
            this.typeIndicator = false;
        }
        if (this.categoryIndicator == false && this.typeIndicator == false) {
            if (typeof (this.type) == "undefined" || this.type == null || this.type == "" || (this.photo.describedBy.loc_title != this.type)) {
                this.photo.describedBy.loc_title = this.type;
            }
            if (typeof (this.category) == "undefined" || this.category == null || this.category == "" || (this.photo.describedBy.category != this.category)) {
                this.photo.describedBy.category = this.category;
            }
            if (typeof (this.description) === "undefined" || this.description === null || this.description === "" || (this.photo.describedBy.description != this.description)) {
                this.photo.describedBy.description = this.description;
            }
            this.viewController.dismiss();
        }
    };
    ModalPageAttachmentPage.prototype.cancelModel = function () {
        var _this = this;
        console.log('cancelModal ModalPageAttachmentPage');
        if (this.anyChanges == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm Cancel',
                message: 'Do you agree cancel newly changes ?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function () {
                            _this.viewController.dismiss();
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            _this.viewController.dismiss();
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            // Checking validation fields
            if (typeof (this.type) == "undefined" || this.type == null || this.type == "") {
                this.categoryIndicator = true;
            }
            else {
                this.categoryIndicator = false;
            }
            if (typeof (this.category) == "undefined" || this.category == null || this.category == "") {
                this.typeIndicator = true;
            }
            else {
                this.typeIndicator = false;
            }
            if (this.categoryIndicator == false && this.typeIndicator == false) {
                this.viewController.dismiss();
            }
        }
    };
    ModalPageAttachmentPage.prototype.typeSelection = function (array, index, value) {
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
    ModalPageAttachmentPage.prototype.validateInput = function () {
        // Checking type of image
        if (typeof (this.photo.describedBy.loc_title) !== "undefined" || this.photo.describedBy.loc_title !== 'null' || this.photo.describedBy.loc_title !== '') {
            this.categoryIndicator = false;
        }
        else {
            this.categoryIndicator = true;
        }
        // Checking category of image
        if (typeof (this.photo.describedBy.category) !== "undefined" || this.photo.describedBy.category !== 'null' || this.photo.describedBy.category !== '') {
            this.typeIndicator = false;
        }
        else {
            this.typeIndicator = true;
        }
        this.anyChanges = true;
    };
    ModalPageAttachmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-page-attachment',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-attachment/modal-page-attachment/modal-page-attachment.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>Attachment Info</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Close\n      </button>\n    </ion-buttons>\n  </ion-navbar> -->\n  <ion-toolbar>\n    <ion-title>Attachment Info</ion-title>\n    <!-- <ion-buttons end (click)="closeModal()">\n      <button ion-button icon-only color="primary">\n        <ion-icon name="md-close-circle"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf="typeIndicator && (type !== \'null\' || type !== \'\')" no-lines>\n    <ion-label color="danger" style="font-style: italic;font-size: 15px;">\n      *Category of Image is required!</ion-label>\n  </ion-item>\n  <ion-item *ngIf="categoryIndicator && (type !== \'null\' || type !== \'\')" no-lines>\n    <ion-label color="danger" style="font-style: italic;font-size: 15px;">\n      *Type of Image is required!</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked [color]="(typeIndicator && (type !== \'null\' || type !== \'\')) ? \'danger\' : \'primary\'">\n      *Type of Image\n    </ion-label>\n    <ion-select [(ngModel)]="type" multiple="false" (ionChange)="typeSelection(photo, id, $event)"\n      placeholder="Please select" (ionChange)="validateInput()">\n      <ion-option value="PR">Premis</ion-option>\n      <ion-option value="MINS">Pepasangan Meter</ion-option>\n      <ion-option value="MD">Paparan Meter</ion-option>\n      <ion-option value="SNSMTR">Sil dan Pelekat (Meter)</ion-option>\n      <ion-option value="ANMLYM">Anomali (Meter)</ion-option>\n      <ion-option value="OTHRINS">Pemasangan (Lain)</ion-option>\n      <ion-option value="SNSOTHR">Sil dan Pelekat (Lain)</ion-option>\n      <ion-option value="ANMLMOTHR">Anomali (Lain)</ion-option>\n      <ion-option value="CRTVACT">Tindakan Pembetulan</ion-option>\n      <ion-option value="CRTVACTDM">Tindakan Pembetulan (Paparan Meter)</ion-option>\n      <ion-option value="WTNSS">Saksi</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked [color]="(categoryIndicator && (type !== \'null\' || type !== \'\')) ? \'danger\' : \'primary\'">\n      *Category\n    </ion-label>\n    <ion-select [(ngModel)]="category" multiple="false" placeholder="Please select" (ionChange)="validateInput()">\n      <ion-option value="PI">Premise Image</ion-option>\n      <ion-option value="RI">Raw Image</ion-option>\n      <ion-option value="AI">Anomaly Image</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked color="primary">Description</ion-label>\n    <ion-textarea item-content type="textarea" rows="4" placeholder="Description" [(ngModel)]="description"\n      (ionChange)="validateInput()"></ion-textarea>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=" text-align-last: start;">\n    <button ion-button mode="md" color="default" (click)="cancelModel()">Cancel</button>\n    <button ion-button mode="md" color="primary" (click)="closeModal()">Save</button>\n  </ion-toolbar>\n  <!-- <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        Update\n      </button>\n    </ion-buttons>\n  </ion-navbar> -->\n</ion-footer>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/tnb-seal/seal-attachment/modal-page-attachment/modal-page-attachment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ModalPageAttachmentPage);
    return ModalPageAttachmentPage;
}());

//# sourceMappingURL=modal-page-attachment.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageAttachmentPageModule", function() { return ModalPageAttachmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_page_attachment__ = __webpack_require__(1088);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageAttachmentPageModule = /** @class */ (function () {
    function ModalPageAttachmentPageModule() {
    }
    ModalPageAttachmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_page_attachment__["a" /* ModalPageAttachmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_page_attachment__["a" /* ModalPageAttachmentPage */]),
            ],
        })
    ], ModalPageAttachmentPageModule);
    return ModalPageAttachmentPageModule;
}());

//# sourceMappingURL=modal-page-attachment.module.js.map

/***/ })

});
//# sourceMappingURL=45.js.map