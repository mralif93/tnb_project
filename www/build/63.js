webpackJsonp([63],{

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAssetDetailsPageModule", function() { return RegisterAssetDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_asset_details__ = __webpack_require__(998);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterAssetDetailsPageModule = /** @class */ (function () {
    function RegisterAssetDetailsPageModule() {
    }
    RegisterAssetDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_asset_details__["a" /* RegisterAssetDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__register_asset_details__["a" /* RegisterAssetDetailsPage */]),
            ],
        })
    ], RegisterAssetDetailsPageModule);
    return RegisterAssetDetailsPageModule;
}());

//# sourceMappingURL=register-asset-details.module.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterAssetDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_global_function__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterAssetDetailsPage = /** @class */ (function () {
    function RegisterAssetDetailsPage(dataService, jsonStoreCrud, gv, navCtrl, loadingCtrl, navParams, gf) {
        this.dataService = dataService;
        this.jsonStoreCrud = jsonStoreCrud;
        this.gv = gv;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.gf = gf;
        this.isValid = false;
        this.registerDetailItems = navParams;
        if (typeof this.registerDetailItems.data.json.ta0functionclass !== 'undefined') {
            var funClass = this.registerDetailItems.data.json.ta0functionclass;
            if (funClass === 'NMTR' || funClass === 'RMTR' || funClass === 'RMTR' || funClass === 'SMTR_CM') {
                this.isValid = true;
                this.registerDetailItems.data.json.ta0registers.sort(this.gf.dynamicSort("ta0registertype"));
            }
            else {
                this.isValid = false;
            }
        }
        else {
            this.isValid = false;
        }
    }
    /**
     * Update Asset Details from Maximo
     * @param attr
     */
    RegisterAssetDetailsPage.prototype.updateAssetDetails = function (attr) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.gf.loadingTimer(loading);
        this.dataService.updateAssetDetails(attr.data.json.assetnum, attr.data.json.siteid).then(function (results) {
            var fullItems;
            fullItems = results;
            var obj = '{' + '"_id":' + attr.data._id + ',' + '"json":' + JSON.stringify(fullItems) + '}';
            var json = JSON.parse(obj);
            _this.jsonStoreCrud.replaceWO(json, __WEBPACK_IMPORTED_MODULE_2__pojo_commonEnum_Domains__["a" /* Domains */].AssetDetails, false);
            loading.dismiss();
        }, function (error) {
            loading.dismiss();
        });
    };
    /**
     * Navigated to Asset Details Page...
     */
    RegisterAssetDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterAssetDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register-asset-details',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/asset-details/register-asset-details/register-asset-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="md-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Device Register Details</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Start: New Section -->\n  <ion-list ion-row>\n    <!-- Start: Header List -->\n    <ion-item-divider>\n      <ion-icon name="md-cube" item-start></ion-icon>\n      Device Details\n      <button mode="md" ion-button outline item-end (click)="updateAssetDetails(registerDetailItems)" *ngIf="isValid"\n        [disabled]="gv.testMobile">\n        Get Device Status\n      </button>\n    </ion-item-divider>\n    <!-- End: Header List -->\n\n    <!-- Start: Asset Number -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Asset Number</h2>\n      <p>{{ registerDetailItems.data.json.assetnum ? registerDetailItems.data.json.assetnum : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Asset Number -->\n\n    <!-- Start: Serial Number -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Serial Number</h2>\n      <p>{{ registerDetailItems.data.json.serialnum ? registerDetailItems.data.json.serialnum : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Serial Number -->\n\n    <!-- Start: Device Category -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Device Category</h2>\n      <p>{{ registerDetailItems.data.json.itemnum ? registerDetailItems.data.json.itemnum : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Device Category -->\n\n    <!-- Start: Function Class -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Function Class</h2>\n      <p>{{ registerDetailItems.data.json.ta0functionclass ? registerDetailItems.data.json.ta0functionclass : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Function Class -->\n\n    <!-- Start: MF -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>MF</h2>\n      <p>{{ registerDetailItems.data.json.ta0mf ? registerDetailItems.data.json.ta0mf : \'-\' }}</p>\n    </ion-item>\n    <!-- End: MF -->\n\n    <!-- Start: MF -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>AMI</h2>\n      <p>{{ registerDetailItems.data.json.ta0ami ? registerDetailItems.data.json.ta0ami : \'-\' }}</p>\n    </ion-item>\n    <!-- End: MF -->\n\n    <!-- Start: AMS -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>AMS</h2>\n      <p>{{ registerDetailItems.data.json.ta0ams ? registerDetailItems.data.json.ta0ams : \'-\' }}</p>\n    </ion-item>\n    <!-- End: AMS -->\n\n    <!-- Start: AMCG -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>AMCG</h2>\n      <p>{{ registerDetailItems.data.json.ta0amcg ? registerDetailItems.data.json.ta0amcg : \'-\' }}</p>\n    </ion-item>\n    <!-- End: AMCG -->\n\n    <!-- Start: Register Group -->\n    <ion-item col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0registers">\n      <h2>Register Group</h2>\n      <p>\n        {{ registerDetailItems.data.json.ta0registers[0].ta0registergroup ? registerDetailItems.data.json.ta0registers[0].ta0registergroup : \'-\' }}\n      </p>\n    </ion-item>\n    <!-- End: Register Group -->\n\n    <!-- Start: Manufacturer -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Manufacturer</h2>\n      <p>{{ registerDetailItems.data.json.ta0manufacturer ? registerDetailItems.data.json.ta0manufacturer : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Manufacturer -->\n\n    <!-- Start: Model -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Model</h2>\n      <p>{{ registerDetailItems.data.json.ta0model ? registerDetailItems.data.json.ta0model : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Model -->\n\n    <!-- Start: Current Ratio -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Current Ratio</h2>\n      <p>{{ registerDetailItems.data.json.ta0currentratio ? registerDetailItems.data.json.ta0currentratio : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Current Ratio -->\n\n    <!-- Start: Voltage Ratio -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Voltage Ratio</h2>\n      <p>{{ registerDetailItems.data.json.ta0voltageratio ? registerDetailItems.data.json.ta0voltageratio : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Voltage Ratio -->\n\n    <!-- Start: Device Status -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Device Status</h2>\n      <p>{{ registerDetailItems.data.json.ta0systemstatus ? registerDetailItems.data.json.ta0systemstatus : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Device Status -->\n\n    <!-- Start: Construction Date -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Construction Date</h2>\n      <p>{{ registerDetailItems.data.json.installdate ? registerDetailItems.data.json.installdate : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Construction Date -->\n\n    <!-- Start: VA -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>VA</h2>\n      <p>{{ registerDetailItems.data.json.ta0va ? registerDetailItems.data.json.ta0va : \'-\' }}</p>\n    </ion-item>\n    <!-- End: VA -->\n\n    <!-- Start: CT PT Info -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>CT PT Info</h2>\n      <p>{{ registerDetailItems.data.json.ta0ctptinfo ? registerDetailItems.data.json.ta0ctptinfo : \'-\' }}</p>\n    </ion-item>\n    <!-- End: CT PT Info -->\n\n    <!-- Start: Device Voltage -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>Device Voltage</h2>\n      <p>{{ registerDetailItems.data.json.ta0devicevoltage ? registerDetailItems.data.json.ta0devicevoltage : \'-\' }}</p>\n    </ion-item>\n    <!-- End: Device Voltage -->\n\n    <!-- Start: IP / Data No. -->\n    <ion-item col-12 col-sm-12 col-md-6>\n      <h2>IP / Data No.</h2>\n      <p>{{ registerDetailItems.data.json.ta0simcardip ? registerDetailItems.data.json.ta0simcardip : \'-\' }}</p>\n    </ion-item>\n    <!-- End: IP / Data No. -->\n\n\n    <!-- Start: Register Header List -->\n    <ion-item-divider\n      *ngIf="registerDetailItems.data.json.ta0registers && this.registerDetailItems.data.json.ta0functionclass !== \'CTTFR\'">\n      <ion-icon name="ios-speedometer" item-start>\n      </ion-icon>\n      Register Details\n    </ion-item-divider>\n    <!-- End: Register Header List -->\n\n    <span ion-row style="width:100%"\n      *ngIf="registerDetailItems.data.json.ta0registers && this.registerDetailItems.data.json.ta0functionclass !== \'CTTFR\'">\n      <!-- Start: Register List -->\n      <ion-item col-12 col-sm-12 col-md-6\n        *ngFor="let item of registerDetailItems.data.json.ta0registers; let j = index;">\n        <h2>\n          {{ item.ta0registernum ? item.ta0registernum:\'-\' }} : {{ item.ta0registertype ? item.ta0registertype:\'-\' }}\n        </h2>\n        <p>{{ item.ta0registertypedesc ? item.ta0registertypedesc:\'-\' }} : {{ item.ta0uom ? item.ta0uom:\'-\' }}</p>\n        <p>Factor : {{ item.ta0registerfactor ? item.ta0registerfactor:\'-\' }}</p>\n        <p>\n          Dial Before : {{ item.ta0dialbefore ? item.ta0dialbefore:\'-\' }} |\n          Dial After : {{ item.ta0dialafter ? item.ta0dialafter:\'-\' }}\n        </p>\n        <ion-icon name="md-speedometer" item-end></ion-icon>\n      </ion-item>\n      <!-- End: Register List -->\n    </span>\n\n\n  </ion-list>\n  <!-- End: New Section -->\n\n  <!-- <ion-card>\n    <ion-card-header>\n      <ion-row>\n        <ion-col style="align-self: center;">\n          <ion-item text-uppercase>\n            <ion-label color="primary"><strong>Device Details</strong></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col *ngIf="(isValid)">\n          <button ion-button color="primary" (click)="updateAssetDetails(registerDetailItems)"\n            [disabled]="gv.testMobile ?  true : false" style="float: right; border-radius: 6px;">\n            Get Device Status\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.assetnum">\n          <ion-item>\n            <ion-label color="primary" stacked>Asset Number</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.assetnum ? registerDetailItems.data.json.assetnum:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.serialnum">\n          <ion-item>\n            <ion-label color="primary" stacked>Serial Number</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.serialnum ? registerDetailItems.data.json.serialnum:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.itemnum">\n          <ion-item>\n            <ion-label color="primary" stacked>Device Category</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.itemnum ? registerDetailItems.data.json.itemnum:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0functionclass">\n          <ion-item>\n            <ion-label color="primary" stacked>Function Class</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0functionclass ? registerDetailItems.data.json.ta0functionclass:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0mf">\n          <ion-item>\n            <ion-label color="primary" stacked>MF</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0mf ? registerDetailItems.data.json.ta0mf:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0ami">\n          <ion-item>\n            <ion-label color="primary" stacked>AMI</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0ami ? registerDetailItems.data.json.ta0ami:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0ams">\n          <ion-item>\n            <ion-label color="primary" stacked>AMS</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0ams? registerDetailItems.data.json.ta0ams:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0amcg">\n          <ion-item>\n            <ion-label color="primary" stacked>AMCG</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0amcg ? registerDetailItems.data.json.ta0amcg:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0registers">\n          <ion-item *ngIf="registerDetailItems.data.json.ta0registers[0].ta0registergroup">\n            <ion-label color="primary" stacked>Register Group</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0registers[0].ta0registergroup ? registerDetailItems.data.json.ta0registers[0].ta0registergroup:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0manufacturer">\n          <ion-item>\n            <ion-label color="primary" stacked>Manufacturer</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0manufacturer ? registerDetailItems.data.json.ta0manufacturer:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0model">\n          <ion-item>\n            <ion-label color="primary" stacked>Model</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0model ? registerDetailItems.data.json.ta0model:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0currentratio">\n          <ion-item>\n            <ion-label color="primary" stacked>Current Ratio</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0currentratio ? registerDetailItems.data.json.ta0currentratio:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0voltageratio">\n          <ion-item>\n            <ion-label color="primary" stacked>Voltage Ratio</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0voltageratio ? registerDetailItems.data.json.ta0voltageratio:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0systemstatus">\n          <ion-item>\n            <ion-label color="primary" stacked>Device Status</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0systemstatus ? registerDetailItems.data.json.ta0systemstatus:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.installdate">\n          <ion-item>\n            <ion-label color="primary" stacked>Construction Date</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.installdate ? registerDetailItems.data.json.installdate:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0ctptinfo">\n          <ion-item>\n            <ion-label color="primary" stacked>CT PT Info</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0ctptinfo ? registerDetailItems.data.json.ta0ctptinfo:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0va">\n          <ion-item>\n            <ion-label color="primary" stacked>VA</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0va ? registerDetailItems.data.json.ta0va:\'-\'" disabled>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0devicevoltage">\n          <ion-item>\n            <ion-label color="primary" stacked>Device Voltage</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0devicevoltage ? registerDetailItems.data.json.ta0devicevoltage:\'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-6 *ngIf="registerDetailItems.data.json.ta0simcardip">\n          <ion-item>\n            <ion-label color="primary" stacked>IP/ Data No.</ion-label>\n            <ion-input type="text" style="border-bottom: 1px solid #dadada;"\n              [value]="registerDetailItems.data.json.ta0simcardip ? registerDetailItems.data.json.ta0simcardip : \'-\'"\n              disabled></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <br />\n\n  <ion-card\n    *ngIf="registerDetailItems.data.json.ta0registers && this.registerDetailItems.data.json.ta0functionclass !== \'CTTFR\'">\n    <ion-card-header>\n      <ion-row>\n        <ion-col style="align-self: center;" *ngIf="registerDetailItems.data.json.ta0registers.length > 0">\n          <ion-item text-uppercase>\n            <ion-label color="primary"><strong>Register Details</strong></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style="align-self: center;" *ngIf="!registerDetailItems.data.json.ta0registers.length > 0">\n          <ion-item>\n            <ion-label color="primary">This asset not having register details.</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item-divider color="light" *ngIf="registerDetailItems.data.json.ta0registers">\n        <ion-item no-lines style="background-color: transparent !important;">\n          <strong>REGISTER DETAILS</strong>\n        </ion-item>\n        <ion-item no-lines style="background-color: transparent !important;"\n          *ngIf="!registerDetailItems.data.json.ta0registers.length > 0">\n          This asset not having register details.\n        </ion-item>\n      </ion-item-divider>\n      <ion-grid *ngIf="registerDetailItems.data.json.ta0registers">\n        <ion-item no-lines>\n          <ion-row>\n            <ion-col col-1 text-wrap text-center><strong style="margin-left: -20px;">Type</strong></ion-col>\n            <ion-col col-3 text-wrap><strong>Description</strong></ion-col>\n            <ion-col col-2 text-wrap text-center><strong>Number</strong></ion-col>\n            <ion-col col-2 text-wrap text-center><strong>Factor</strong></ion-col>\n            <ion-col col-2 text-wrap text-center><strong>Dial Before</strong></ion-col>\n            <ion-col col-1 text-wrap text-center><strong>Dial After</strong></ion-col>\n            <ion-col col-1 text-wrap><strong>UOM</strong></ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-list *ngIf="registerDetailItems.data.json.ta0registers.length > 0">\n          <div *ngFor="let item of registerDetailItems.data.json.ta0registers; let j = index;">\n            <ion-item no-lines [ngClass]="j%2 != 0 ? \'classA\' : \'classB\'">\n              <ion-row>\n                <ion-col col-1 text-wrap>{{ item.ta0registertype ? item.ta0registertype:\'-\' }}</ion-col>\n                <ion-col col-3 text-wrap>{{ item.ta0registertypedesc ? item.ta0registertypedesc:\'-\' }}</ion-col>\n                <ion-col col-2 text-wrap text-center>{{ item.ta0registernum ? item.ta0registernum:\'-\' }}</ion-col>\n                <ion-col col-2 text-wrap text-center>{{ item.ta0registerfactor ? item.ta0registerfactor:\'-\' }}\n                </ion-col>\n                <ion-col col-2 text-wrap text-center>{{ item.ta0dialbefore ? item.ta0dialbefore:\'-\' }}</ion-col>\n                <ion-col col-1 text-wrap text-center>{{ item.ta0dialafter ? item.ta0dialafter:\'-\' }}</ion-col>\n                <ion-col col-1 text-wrap>{{ item.ta0uom ? item.ta0uom:\'-\' }}</ion-col>\n              </ion-row>\n            </ion-item>\n          </div>\n        </ion-list>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> -->\n\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/asset-details/register-asset-details/register-asset-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_global_function__["a" /* GlobalFunction */]])
    ], RegisterAssetDetailsPage);
    return RegisterAssetDetailsPage;
}());

//# sourceMappingURL=register-asset-details.js.map

/***/ })

});
//# sourceMappingURL=63.js.map