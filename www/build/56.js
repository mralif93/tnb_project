webpackJsonp([56],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = /** @class */ (function () {
    //@ViewChild(HomePage) homePage: HomePage;
    function PopoverPage(viewCtrl, navCtrl, appCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
    }
    PopoverPage.prototype.backup = function () {
        var data = this.navParams.get('data');
        //save(data);
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (typeVal) {
        console.log('close button clicks..');
        var parent = this.navParams.get('parentValue');
        parent.showConfirm(typeVal);
        this.viewCtrl.dismiss();
        // if (typeVal == 'downloadList') {
        //     this.viewCtrl.dismiss();
        //     alert(parent);
        //     //this.navParams.get('showConfirm')('downloadList');
        // } else if (typeVal == 'checkEdit') {
        //     this.viewCtrl.dismiss();
        //     //this.navParams.get('showConfirm')('checkEdit');
        // } else if (typeVal == 'syncData') {
        //     this.viewCtrl.dismiss();
        // } else if (typeVal == 'searchBar') {
        //     this.viewCtrl.dismiss();
        //     //this.navParams.get('showConfirm')('searchBar');
        // }
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/home/popover.html"*/'<ion-list>\n\n    <ion-list-header> Options\n\n    </ion-list-header>\n\n    <button ion-item (tap)="close(\'downloadList\')"> Download WorkOrder </button>\n\n    <button ion-item (tap)="checkEditWorkOrder()"> Check edited Work Order\n\n    </button>\n\n    <button ion-item (click)="close(\'syncData\')"> Sync WorkOrder\n\n    </button>\n\n    <button ion-item (click)="close(\'searchBar\')"> Search Bar\n\n    </button>\n\n</ion-list>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/home/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(1005);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* PopoverPage */]
            ]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ })

});
//# sourceMappingURL=56.js.map