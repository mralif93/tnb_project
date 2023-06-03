webpackJsonp([58],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoogleMapsPage = /** @class */ (function () {
    function GoogleMapsPage(navCtrl, appCtrl, gv, gf, jsonStoreCurd, navParams) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.gv = gv;
        this.gf = gf;
        this.jsonStoreCurd = jsonStoreCurd;
        this.navParams = navParams;
        this.locationList = [];
        this.items = [];
        this.soType = this.navParams.get("paramIndex");
        this.filterSOType(this.soType);
    }
    GoogleMapsPage.prototype.filterSOType = function (param) {
        var _this = this;
        if (this.soType !== 'undefined' && this.soType !== '' && this.soType !== null) {
            var querypart = [];
            querypart = [{ "$equal": [{ "worktype": param.toUpperCase() }] }];
            if (param.trim() != "") {
                this.locationList = [];
                this.jsonStoreCurd.getSearchArrayResult(__WEBPACK_IMPORTED_MODULE_5__pojo_commonEnum_Domains__["a" /* Domains */].LPCWORKORDER, querypart).then(function (result) {
                    _this.items = result;
                    debugger;
                    var totalLat = 0;
                    var totalLong = 0;
                    var count = 0;
                    for (var i = 0; i < _this.items.length; i++) {
                        var lat = _this.items[i].json.woserviceaddress[0].latitudey;
                        var long = _this.items[i].json.woserviceaddress[0].longitudex;
                        var wonum = _this.items[i].json.wonum;
                        if ((typeof lat !== 'undefined' && lat !== '' && lat !== null) && (typeof long !== 'undefined' && long !== '' && long !== null)) {
                            totalLat = Number(totalLat) + Number(lat);
                            totalLong = Number(totalLong) + Number(long);
                            count = Number(count) + 1;
                            _this.locationList.push([wonum, lat, long, i]);
                        }
                    }
                    var latitude = Number(totalLat) / Number(count);
                    var longtitude = Number(totalLong) / Number(count);
                    debugger;
                    _this.loadMap(_this.locationList, latitude, longtitude);
                });
            }
        }
    };
    ;
    GoogleMapsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoogleMapsPage');
    };
    GoogleMapsPage.prototype.dashboardPage = function () {
        var newRootNav = this.appCtrl.getRootNavById('n4');
        newRootNav.push("SearchPage", '');
    };
    GoogleMapsPage.prototype.loadMap = function (locations, lat, long) {
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 10,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], GoogleMapsPage.prototype, "mapElement", void 0);
    GoogleMapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-google-maps',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/google-maps/google-maps.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <!-- <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-title>Google Maps</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map style="height: 100%; width: 100%;"></div>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/google-maps/google-maps.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GoogleMapsPage);
    return GoogleMapsPage;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsPageModule", function() { return GoogleMapsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps__ = __webpack_require__(1002);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleMapsPageModule = /** @class */ (function () {
    function GoogleMapsPageModule() {
    }
    GoogleMapsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_maps__["a" /* GoogleMapsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__google_maps__["a" /* GoogleMapsPage */]),
            ]
        })
    ], GoogleMapsPageModule);
    return GoogleMapsPageModule;
}());

//# sourceMappingURL=google-maps.module.js.map

/***/ })

});
//# sourceMappingURL=58.js.map