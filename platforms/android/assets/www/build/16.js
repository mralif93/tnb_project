webpackJsonp([16],{

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_compliance_list_compliance_list__ = __webpack_require__(526);
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
 * Generated class for the ComplaintListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComplaintListPage = /** @class */ (function (_super) {
    __extends(ComplaintListPage, _super);
    function ComplaintListPage(navCtrl, navParams, appCtrl, gv, toastCtrl, alertCtrl, gf, loadingCtrl, dataService, jsonStore, http, modalCtrl) {
        var _this = _super.call(this, navCtrl, navParams, appCtrl, gv, toastCtrl, alertCtrl, gf, loadingCtrl, dataService, jsonStore, modalCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.appCtrl = appCtrl;
        _this.gv = gv;
        _this.toastCtrl = toastCtrl;
        _this.alertCtrl = alertCtrl;
        _this.gf = gf;
        _this.loadingCtrl = loadingCtrl;
        _this.dataService = dataService;
        _this.jsonStore = jsonStore;
        _this.http = http;
        _this.modalCtrl = modalCtrl;
        return _this;
    }
    ComplaintListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-complaint-list',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-compliance/compliance-list/complaint-list.html"*/'<ion-header mode="md">\n  <ion-navbar color="primary">\n    <ion-title>Compliance List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon [color]="gv.testMobile ? \'danger\' : \'light\'" name="md-planet" class="flash_plnt"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item-divider color="light"><strong>MIT/KUPM</strong></ion-item-divider>\n\n  <ion-card>\n    <ion-list radio-group [(ngModel)]="formLangSlct" ion-row>\n      <ion-list-header>\n        <ion-icon name="chatbubbles" item-start></ion-icon>\n        Languages\n      </ion-list-header>\n\n      <ion-item ion-col col-md-6 style="border-right: 0.55px solid #c8c7cc;">\n        <ion-label>English</ion-label>\n        <ion-radio (click)="selectLanguage(true)" value="true"></ion-radio>\n      </ion-item>\n\n      <ion-item ion-col col-md-6>\n        <ion-label>Malay</ion-label>\n        <ion-radio (click)="selectLanguage(false)" value="false"></ion-radio>\n      </ion-item>\n\n      <ion-list-header style="border-top: 0.55px solid #c8c7cc;">\n        <ion-icon name="list-box" item-start></ion-icon>\n        List of Compliances\n      </ion-list-header>\n\n      <!-- Start: English -->\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n          (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'meterInstallAndTest\',\'inspect&Test\')" *ngIf="langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Meter Installation, Inspection & Testing</h2>\n        <p>Notification Letter</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'inspectionAndTest\', complainceFormsVar.instInspecNTest)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="installInspect" [(ngModel)]="complainceFormsVar.instInspec"\n          (ionChange)="removelist(\'inspection\', $event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'meterinstall\',\'installationInspection\')" *ngIf="langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Meter Installation & Inspection</h2>\n        <p>Notice</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'meterinstall\', complainceFormsVar.instInspec)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="evidenceCollect" [(ngModel)]="complainceFormsVar.eviCllct"\n          (ionChange)="removelist(\'evidence\',$event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'evidenceCollect\',\'formEvidenceCollect\')" *ngIf="langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Evidence Collection</h2>\n        <p>Notification Letter</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'evidenceCollect\', complainceFormsVar.eviCllct)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="tempSupplyCess" [(ngModel)]="complainceFormsVar.electCess"\n          (ionChange)="removelist(\'cessation\', $event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'cessation\',\'tempCeassation\')" *ngIf="langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Cessation/Temporary Interruption of Electricity Supply</h2>\n        <p>Notification Notice</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'cessation\', complainceFormsVar.electCess)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.schStff" (ionChange)="removelist(\'fromAStaff\', $event)">\n        </ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'formAStaff\',\'formACust\')" *ngIf="langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Form A TNB</h2>\n        <p>Form</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'formAStaff\', complainceFormsVar.schStff)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;"\n        *ngIf="formA_customerCopy && langSelect && !ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.schCust" (ionChange)="removelist(\'formACustomer\',$event)"\n          checked="false" item-start></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        *ngIf="formA_customerCopy && langSelect && !ShowNoticeOnly" (click)="reviewform(\'formACust\',\'formCustCopy\')">\n        <h2 text-wrap>Form A Customer</h2>\n        <p>Form</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="formA_customerCopy && langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'formACust\', complainceFormsVar.schCust)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="prejudice" [(ngModel)]="complainceFormsVar.evelectricPrejudiciCllct"\n          (ionChange)="removelist(\'prejudice\',$event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'prejudice\',\'prejudiceForm\')" *ngIf="langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Session Without Prejudice</h2>\n        <p>Notification Letter</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'prejudice\', complainceFormsVar.evelectricPrejudiciCllct)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="langSelect && ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n          (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'meterInstallAndTest\',\'inspect&Test\')" *ngIf="langSelect && ShowNoticeOnly">\n        <h2 text-wrap>Meter Installation, Inspection & Testing</h2>\n        <p>Notification Letter</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="langSelect && ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'meterInstallAndTest\', complainceFormsVar.instInspecNTest)">\n        </ion-icon>\n      </ion-item>\n\n      <!-- End: English -->\n\n      <!-- Start: Bahasa -->\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n          (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'pengujianDanPemeriksaan\',\'pengujian_pemeriksaan\')" *ngIf="!langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Pemeriksaan dan Pengujian Pepasangan Meter</h2>\n        <p>Surat Pemberitahuan</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'inspectionAndTest\', complainceFormsVar.instInspecNTest)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="installInspect" [(ngModel)]="complainceFormsVar.instInspec"\n          (ionChange)="removelist(\'inspection\', $event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'PepasanganMeter\',\'pepasanganMeter\')" *ngIf="!langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Semakan Pepasangan Meter</h2>\n        <p>Pemakluman</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'inspection\', complainceFormsVar.instInspec)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="evidenceCollect" [(ngModel)]="complainceFormsVar.eviCllct"\n          (ionChange)="removelist(\'evidence\',$event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'bukti\',\'borangBukit\')" *ngIf="!langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Pengambilan Bahan-Bahan Bukti</h2>\n        <p>Surat Pemberitahuan</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'evidence\', complainceFormsVar.eviCllct)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="tempSupplyCess" [(ngModel)]="complainceFormsVar.electCess"\n          (ionChange)="removelist(\'cessation\', $event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'notis\',\'notisGanggungan\')" *ngIf="!langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Pemberhentian/Gangguan Sementara Bekalan Elektrik</h2>\n        <p>Surat Pemberitahuan</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'cessation\', complainceFormsVar.electCess)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.schStff" (ionChange)="removelist(\'fromAStaff\', $event)">\n        </ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'borangAPekerja\',\'borangA\')" *ngIf="!langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Borang A TNB</h2>\n        <p>Borang</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'fromAStaff\', complainceFormsVar.schStff)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;"\n        *ngIf="formA_customerCopy && !langSelect && !ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.schCust" (ionChange)="removelist(\'formACustomer\',$event)"\n          checked="false"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'borangAPelanggang\',\'borangACopy\')"\n        *ngIf="formA_customerCopy && !langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Borang A Pelanggan</h2>\n        <p>Borang</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="formA_customerCopy && !langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start\n          *ngIf="formA_customerCopy && !langSelect && !ShowNoticeOnly && gv.testMobile"\n          (click)="removePdf(\'formACustomer\', complainceFormsVar.schCust)">\n        </ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-checkbox value="prejudice" [(ngModel)]="complainceFormsVar.evelectricPrejudiciCllct"\n          (ionChange)="removelist(\'prejudice\',$event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'prejudis\',\'tanpa_prejudis\')" *ngIf="!langSelect && !ShowNoticeOnly">\n        <h2 text-wrap>Sesi Penjelasan Tanpa Prejudis</h2>\n        <p>Surat Pemakluman</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && !ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'prejudice\', complainceFormsVar.evelectricPrejudiciCllct)"></ion-icon>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" *ngIf="!langSelect && ShowNoticeOnly">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n          (ionChange)="removelist(\'inspectionAndTest\', $event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-10 style="border-bottom: 0.55px solid #c8c7cc;" text-uppercase\n        (click)="reviewform(\'pengujianDanPemeriksaan\',\'pengujian_pemeriksaan\')" *ngIf="!langSelect && ShowNoticeOnly">\n        <h2 text-wrap>Pemeriksaan Dan Pengujian Pepasangan Meter</h2>\n        <p>Surat Pemberitahuan</p>\n      </ion-item>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;" detail-push\n        *ngIf="!langSelect && ShowNoticeOnly">\n        <ion-icon name="trash" color="danger" item-start *ngIf="gv.testMobile"\n          (click)="removePdf(\'inspectionAndTest\', complainceFormsVar.instInspecNTest)"></ion-icon>\n      </ion-item>\n      <!-- End: Bahasa -->\n    </ion-list>\n  </ion-card>\n\n  <!-- English\n  <div *ngIf=\'langSelect\'>\n    <div *ngIf="!ShowNoticeOnly">\n\n      <!-- Button Inspection and Testing\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n              (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="check_BtnInspTest()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'meterInstallAndTest\',\'inspect&Test\')" color="buttonlightColor" text-wrap>\n            Compliance installation inspection and testing\n          </button>\n        </ion-col>\n      </ion-row>\n\n\n      <!-- Button Inspection\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="installInspect" [(ngModel)]="complainceFormsVar.instInspec"\n              (ionChange)="removelist(\'inspection\', $event)" text-wrap>\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button item-content round block ion-button text-uppercase [ngStyle]="checkBtnInsp()"\n            (click)="reviewform(\'meterinstall\',\'installationInspection\')" text-wrap>\n            Compliance Installation Inspection</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Evidence\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="evidenceCollect" [(ngModel)]="complainceFormsVar.eviCllct"\n              (ionChange)="removelist(\'evidence\',$event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="check_BtnEvi()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'evidenceCollect\',\'formEvidenceCollect\')" text-wrap>\n            Compliance evidence collection</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Cessation\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="tempSupplyCess" [(ngModel)]="complainceFormsVar.electCess"\n              (ionChange)="removelist(\'cessation\', $event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="checkBtn_Cess()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'cessation\',\'tempCeassation\')" text-wrap>\n            Compliance Electrical supply cessation</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button  Form A TNB\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.schStff" (ionChange)="removelist(\'fromAStaff\', $event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="checkBtnFormA()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'formAStaff\',\'formACust\')" text-wrap>\n            Compliance Form A TNB</button>\n        </ion-col>\n      </ion-row>\n\n\n      <!-- Button  Form A Customer\n      <ion-row *ngIf="formA_customerCopy" col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.schCust" (ionChange)="removelist(\'formACustomer\',$event)"\n              checked="false">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="checkBtnFormACust()" item-content round block ion-button text-uppercase\n            (click)=" reviewform(\'formACust\',\'formCustCopy\')" color="buttonlightColor" text-wrap>\n            Compliance Form A Customer</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button  Form A Prejudice\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="prejudice" [(ngModel)]="complainceFormsVar.evelectricPrejudiciCllct"\n              (ionChange)="removelist(\'prejudice\',$event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="checkBtnPred()" item-content round block ion-button value="prejudice" text-uppercase\n            (click)="reviewform(\'prejudice\',\'prejudiceForm\')" color="buttonlightColor" text-wrap>\n            Compliance session without prejudice</button>\n        </ion-col>\n      </ion-row>\n\n\n    </div>\n    <div *ngIf="ShowNoticeOnly">\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n              (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="check_BtnInspTest()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'meterInstallAndTest\',\'inspect&Test\')" text-wrap color="buttonlightColor">\n            Compliance installation inspection and testing\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf="!langSelect">\n    <!-- Bahasa \n    <div *ngIf="!ShowNoticeOnly">\n\n      <!-- Button Inspection and Testing\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n              (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="check_BtnInspTest()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'pengujianDanPemeriksaan\',\'pengujian_pemeriksaan\')" text-wrap>\n            Pemberitahuan Pemeriksaan Dan Pengujian Pepasangan Meter TNB\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Inspection\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="installInspect" [(ngModel)]="complainceFormsVar.instInspec"\n              (ionChange)="removelist(\'inspection\', $event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button item-content round block ion-button text-uppercase\n            (click)="reviewform(\'PepasanganMeter\',\'pepasanganMeter\')" [ngStyle]="checkBtnInsp()" text-wrap>\n            Pemakluman Semakan Pepasangan Meter Elektrik oleh TNB</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Evidence\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="evidenceCollect" [(ngModel)]="complainceFormsVar.eviCllct"\n              (ionChange)="removelist(\'evidence\',$event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="check_BtnEvi()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'bukti\',\'borangBukit\')" text-wrap>\n            Pemberitahuan Pengambilan Bahan-Bahan Bukti\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Cessation\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="tempSupplyCess" [(ngModel)]="complainceFormsVar.electCess"\n              (ionChange)="removelist(\'cessation\', $event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button item-content round block ion-button text-uppercase [ngStyle]="checkBtn_Cess()"\n            (click)="reviewform(\'notis\',\'notisGanggungan\')" color="buttonlightColor" text-wrap>\n            Pemberitahuan/Gangguan Sementara Elektrik</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Borang A TNB\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.schStff" (ionChange)="removelist(\'fromAStaff\', $event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="checkBtnFormA()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'borangAPekerja\',\'borangA\')" text-wrap>\n            Borang A TNB</button>\n\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Borang A Customer\n      <ion-row *ngIf="formA_customerCopy" col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.schCust" (ionChange)="removelist(\'formACustomer\',$event)"\n              checked="false">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button item-content round block ion-button text-uppercase [ngStyle]="checkBtnFormACust()"\n            (click)=" reviewform(\'borangAPelanggang\',\'borangACopy\')" text-wrap>\n            Borang A Pelanggan</button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Button Prejudice\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox value="prejudice" [(ngModel)]="complainceFormsVar.evelectricPrejudiciCllct"\n              (ionChange)="removelist(\'prejudice\',$event)">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="checkBtnPred()" item-content round block ion-button value="prejudice" text-uppercase\n            (click)="reviewform(\'prejudis\',\'tanpa_prejudis\')" text-wrap>\n            Pemakluman (Sesi Penjelasan Tanpa Prejudis)\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </div>\n    <div *ngIf="ShowNoticeOnly">\n      <ion-row col-12 col-xs-12 col-md-12 col-sm-12>\n        <ion-col col-2 col-xs-1 col-md-1 col-sm-1>\n          <ion-item no-lines>\n            <ion-checkbox [(ngModel)]="complainceFormsVar.instInspecNTest"\n              (ionChange)="removelist(\'inspectionAndTest\', $event)" checked="false">\n            </ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <button [ngStyle]="check_BtnInspTest()" item-content round block ion-button text-uppercase\n            (click)="reviewform(\'pengujianDanPemeriksaan\',\'pengujian_pemeriksaan\')" text-wrap>\n            Surat Pemberitahuan Pemeriksaan Dan Pengujian Pepasangan Meter TNB\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>-->\n\n  <ion-item-divider color="light"><strong>CHECKLIST FORM</strong></ion-item-divider>\n\n  <ion-card>\n    <ion-list radio-group ion-row>\n      <ion-list-header>\n        <ion-icon name="list-box" item-start></ion-icon>\n        Checklist\n      </ion-list-header>\n\n      <ion-item ion-col col-md-1 style="border-bottom: 0.55px solid #c8c7cc;">\n        <ion-checkbox [(ngModel)]="complainceFormsVar.checklist" item-start\n          (ionChange)="removelist(\'checklist\', $event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item ion-col col-md-11 style="border-bottom: 0.55px solid #c8c7cc;" detail-push text-uppercase\n        (click)="goNoticeLetter()">\n        <h2 text-wrap>Tampering Case for Meter Installation (KUPM)</h2>\n        <p>Checklist</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <!-- <ion-row>\n    <compliance-list></compliance-list>\n    <ion-col>\n      <button block color="darkColor" round ion-button (click)="goNoticeLetter()">Checklist </button>\n    </ion-col>\n  </ion-row> -->\n\n</ion-content>\n\n<ion-footer mode="md">\n  <ion-toolbar mode="md">\n    <ion-row>\n      <ion-col>\n        <button ion-button round block mode="md" (click)="goBack()">\n          Done\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/SoExecution-SIT/src/pages/tnb-seal/seal-compliance/compliance-list/complaint-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_global_vars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_global_function__["a" /* GlobalFunction */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_json_store_json_store_crud__["a" /* JsonStoreCrudProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ComplaintListPage);
    return ComplaintListPage;
}(__WEBPACK_IMPORTED_MODULE_7__components_compliance_list_compliance_list__["a" /* ComplianceListComponent */]));

//# sourceMappingURL=complaint-list.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListPageModule", function() { return ComplaintListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_list__ = __webpack_require__(1099);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdfForms_complaint_form_pdf_complaint_form_pdf__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_complaince_form_bahasa_pdf_complaince_form_pdf_bhs__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_complianceForm__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComplaintListPageModule = /** @class */ (function () {
    function ComplaintListPageModule() {
    }
    ComplaintListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_list__["a" /* ComplaintListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__complaint_list__["a" /* ComplaintListPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_pdfForms_complaint_form_pdf_complaint_form_pdf__["a" /* ComplaintFormPdfProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_pdfForms_complaince_form_bahasa_pdf_complaince_form_pdf_bhs__["a" /* ComplainceFormPdfBhs */],
                __WEBPACK_IMPORTED_MODULE_6__pojo_complianceForm__["a" /* ComplianceTypes */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header__["a" /* HeaderComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComplaintListPageModule);
    return ComplaintListPageModule;
}());

//# sourceMappingURL=complaint-list.module.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFormPdfProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ComplaintFormPdfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * Create by Ameer
 * All of PDF form is available here
 */
var ComplaintFormPdfProvider = /** @class */ (function () {
    function ComplaintFormPdfProvider(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        console.log('Hello ComplaintFormPdfProvider Provider');
    }
    ComplaintFormPdfProvider.prototype.generateComplaintFormPdf = function (item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
        console.log(" --> called work order service adapter calling ()(()) ");
        return new Promise(function (resolve, reject) {
            debugger;
            console.log("came inside to complaint pdf form generation --- >>>.");
            var dd = null;
            switch (formType) {
                case "inspectionNinstallingMeter":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: [
                                    "Date ", item.ta4datetime,
                                    '\n\n',
                                    'To: ', item.ta4custname, '\n',
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            '\n\n',
                            {
                                text: ['Dear valued TNB customer']
                            },
                            {
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: 'NOTIFICATION LETTER OF TNB METER INSTALLATION INSPECTION AND TESTING', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 15, 0, 0],
                                text: [
                                    'Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition. Your kind cooperation during the inspection and testing process is much appreciated. For any enquiries, you may contact us at 1300-88-5454',
                                    '\n\nThank you'
                                ],
                            },
                            {
                                margin: [30, 20, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: [
                                    '"BETTER. BRIGHTER"\n\n',
                                    '"TNB PRACTISES A NO GIFT POLICY"',
                                ]
                            },
                            {
                                alignment: 'justify',
                                margin: [30, 20, 0, 0],
                                text: ' Yours Sincerely,\n\n\n',
                            },
                            /*      {
                                   margin: [30, 20, 0, 0],
                                   image: 'sign1',
                                   witdth: 200
                                 }, */
                            {
                                margin: [30, 0, 0, 0],
                                image: 'sign1',
                                width: 100,
                                height: 50,
                            },
                            {
                                alignment: 'justify',
                                margin: [30, 20, 0, 0],
                                text: [
                                    item.ta4staffname,
                                    '\n',
                                    item.ta4position,
                                    '\n',
                                    item.ta4department,
                                ]
                            },
                            {
                                table: {
                                    margin: [0, 50, 0, 0],
                                    headerRows: 1,
                                    body: [
                                        [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                                            { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', '', '', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            { text: 'For TNB usage', decoration: 'underline', margin: [30, 200, 0, 0], },
                            {
                                margin: [30, 0, 80, 10],
                                text: '\nPlease tick which is suitable\n'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                heights: [100, 50],
                                table: {
                                    body: [
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: 'present',
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Customer attend'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: 'absent',
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Customer absent'
                                        ],
                                    ]
                                }
                            }, {
                                margin: [30, 15, 0, 0],
                                text: 'Verified by :\n\n',
                            },
                            {
                                margin: [30, 0, 0, 0],
                                image: 'sign2',
                                width: 100,
                                height: 50,
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    'Staff Name: ', item.ta4staffname,
                                    '\n',
                                    'Staff No.: ', item.ta4staffno,
                                ]
                            }
                        ],
                        images: {
                            sign1: item.ta4signmanger,
                            sign2: item.ta4signstaff,
                            present: item.present,
                            absent: item.absent
                        },
                        styles: {
                            header: {
                                fontSize: 18,
                                bold: true,
                                alignment: 'center',
                                margin: [30, 50, 60, 80],
                                decoration: 'underline',
                            },
                            subheader: {
                                fontSize: 14
                            },
                            tableHeader: {
                                fontSize: 16,
                                margin: [50, 30, 0, 0],
                                bold: true,
                                alignment: 'center',
                            },
                            superMargin: {
                                margin: [30, 0, 40, 0],
                                fontSize: 15
                            }
                        }
                    };
                    break;
                case "collectionEvidence":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: 'NOTIFICATION LETTER OF EVIDENCE COLLECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Contract Account .: ', item.ta4accountno],
                                    },
                                    {
                                        text: ['Station Code: ', item.station]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    'Customer Name: ', item.ta4custname, '\n\n',
                                    'Hereby I: ', item.ta4staffname, '\n\n',
                                    'Staff No.: ', item.ta4staffno, ' claiming to have taken the following items:-\n',
                                ]
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [30, '*', '*', 0],
                                    headerRows: 1,
                                    body: soTypes
                                }
                            },
                            // {
                            //   margin: [30, 5, 0, 0],
                            //     text: [soTypes]
                            // },
                            '\n',
                            {
                                margin: [30, 0, 0, 10],
                                text: [
                                    'from the premises located at: ',
                                    item.ta4custaddress
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Staff Signature:\n',
                                    },
                                    {
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Witness Signature:',
                                    },
                                    {
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Examiner Name: ', '\n', item.ta4staffname]
                                    },
                                    {
                                        text: ['Witness Name: ', '\n', item.ta4witnessname]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Staff No.: ', item.ta4staffno]
                                    },
                                    {
                                        text: ['Address:', '\n', item.ta4custaddress]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    'Identification Card No: ', item.ta4witnessidenkard
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Designation: Technician',
                                    },
                                    {
                                        text: ['Identification Card No: ', item.ta4staffindenkard]
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: [
                                    ' Station: ', item.ta4officezone
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Date: ', item.ta4datetime]
                                    },
                                    {
                                        text: ['Date: ', item.ta4indatetime]
                                    }
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Time: ', item.ta4starttime]
                                    },
                                    {
                                        text: ['Time: ', item.ta4endtime],
                                    }
                                ]
                            },
                        ],
                        images: {
                            sign1: item.ta4signstaff,
                            sign2: item.ta4signwitness
                        },
                        styles: {
                            tableHeader: {
                                fontSize: 16,
                                margin: [30, 30, 0, 0],
                                bold: true,
                                alignment: 'center',
                            },
                        }
                    };
                    break;
                // Tnb Inspection 
                case "inspecInstallingTnbMeter":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 30, 0],
                                columns: [
                                    {
                                        text: 'Our Ref. : TNB (B) DNET/METER/SEAL',
                                    },
                                    {
                                        text: ['Date: ', item.ta4indatetime]
                                    }
                                ],
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: [item.ta4custname]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: 'Dear valued TNB customer,'
                            },
                            {
                                margin: [50, 0, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: 'NOTICE OF TNB METER INSTALLATION INSPECTION', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 20, 20, 0],
                                text: ["Please be informed we have conducted inspections and testing of meter installation that records the usage of electricity to the  premises at  ",
                                    item.ta4custaddress,
                                    ' with Contract Account No. ',
                                    item.ta4indatetime,
                                    ' at ',
                                    item.ta4endtime,
                                    '\n\n',
                                    "The inspection results show that the meter does not record actual electricity consumption readings as has been explained previously to you. Please be informed that TNB will claim the underbill charges from you.",
                                    '\n\n For any enquiries, you may contact us at ',
                                    '',
                                    item.ta4officeaddress,
                                    ',',
                                    item.ta4officephone,
                                    '\n\n Thank You.'
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', '', '', '', '', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 0, 30, 0],
                                width: 200,
                                columns: [
                                    {
                                        text: 'Examiner Signature:',
                                    },
                                    {
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                width: 200,
                                columns: [
                                    {
                                        text: 'Accepted By (T/T):',
                                    },
                                    {
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Examiner Name: ', item.ta4staffname]
                                    },
                                    {
                                        text: [
                                            'Name: ',
                                            item.ta4witnessname
                                        ]
                                    }
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: ['Staff no. : ', item.ta4staffno]
                                    },
                                    {
                                        text: [
                                            'Tel. No.: ',
                                            item.ta4witnessphone
                                        ]
                                    }
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                columns: [
                                    {
                                        text: 'Unit: Seal Unit Metering',
                                    },
                                    {
                                        text: [
                                            'Date/Time:',
                                            item.datetime
                                        ]
                                    }
                                ],
                            },
                            '\n',
                            {
                                margin: [100, 0, 0, 0],
                                text: [
                                    'Cc:',
                                    item.ta4department
                                ]
                            }
                        ],
                        images: {
                            sign1: item.ta4signstaff,
                            sign2: item.ta4signwitness
                        },
                        styles: {
                            tableHeader: {
                                fontSize: 14,
                                margin: [30, 30, 0, 0],
                                bold: true,
                                alignment: 'center',
                            },
                        }
                    };
                    break;
                // Customer Copy
                case "electricCut":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 0, 0, 0],
                                alignment: 'center',
                                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', item.ta4statename, '\n\nELECTRICITY SUPPLY ACT 1990']
                            },
                            {
                                style: 'textMargin',
                                text: ['To:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Sir/Madam/Messrs, ']
                            },
                            {
                                style: 'title',
                                margin: [30, 0, 0, 0],
                                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ['Please be informed that on  ', item.ta4starttime, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:',
                                    '\n\n',
                                    item.ta4anamoly,
                                    '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
                            },
                            {
                                margin: [30, 0, 0, 0],
                                pageBreak: 'before',
                                text: '\nPlease tick which is suitable\n'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [50, 100, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        [
                                            '', 'Subsection 37(1)', 'Description'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase2,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(1)', 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase3,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(a)	abstracts energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase4,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(b)	consumes energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase5,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(c)	uses energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase6,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(d)	alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or '
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase7,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(e)	prevents any such meter or instrument from duly recording the output or consumption of energy.'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase8,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(14)', 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'
                                        ],
                                    ]
                                }
                            },
                            {
                                margin: [30, 50, 0, 0],
                                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on ',
                                    item.datetime,
                                    '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                                    '\n\n',
                                    'Address: ',
                                    '\n\n',
                                    item.ta4officeaddress,
                                    '\n\n',
                                    ,
                                    'Date: ',
                                    item.ta4indatetime
                                ]
                            }
                        ],
                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true
                            },
                            textMargin: {
                                margin: [30, 50, 80, 0]
                            }
                        }
                    };
                    break;
                // Staff Copy
                case "electricCutStaff":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 0, 0, 15],
                                alignment: 'center',
                                text: ['SCHEDULE – Form A\n\n', '(subregulation 6A(1))\n\n', 'MALAYSIA', '\n\nState  ', item.ta4statename, '\n\nELECTRICITY SUPPLY ACT 1990']
                            },
                            {
                                style: 'textMargin',
                                text: ['To:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Sir/Madam/Messrs, ']
                            },
                            {
                                style: 'title',
                                margin: [30, 0, 0, 0],
                                text: ['NOTICE OF DISCONNECTION OF ELECTRICITY SUPPLY UNDER SUBSECTION 38(1) ELECTRICITY SUPPLY ACT 1990.']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ['Please be informed that on  ', item.ta4starttime, ' an inspection has been done to our installations at your premise. From the inspection, we noticed that the system had been tampered or modified in the following circumstances below:',
                                    '\n\n',
                                    item.ta4anamoly,
                                    '\n\n Based on the evidence above, we are of the opinion that an offence had been committed under the Electricity Supply Act 1990 ("Act") as follows:']
                            },
                            {
                                margin: [30, 200, 0, 0],
                                text: '\nPlease tick which is suitable\n'
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [50, 100, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        [
                                            '', 'Subsection 37(1)', 'Description'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase2,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(1)', 'tampers with or adjusts any installation or part thereof or manufactures or imports orsells any equipment so as to cause or to be likely to cause danger to human life or limb or injury to any equipment or other property:'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase3,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(a)	abstracts energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase4,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            },
                                            'Subsection 37(3)', '(b)	consumes energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase5,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(c)	uses energy;'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase6,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(d)	alters the index of any meter or other instrument used on or in connection with any installation of any supply authority or any licensed installation for recording the output or consumption of energy; or '
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase7,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(3)', '(e)	prevents any such meter or instrument from duly recording the output or consumption of energy.'
                                        ],
                                        [
                                            {
                                                stack: [
                                                    {
                                                        image: item.subsectionBase8,
                                                        width: 70,
                                                        height: 20,
                                                    }
                                                ]
                                            }, 'Subsection 37(14)', 'damages any meter or other instrument used on or in connection with any licensed installation, for recording the output or consumption of energy.'
                                        ],
                                    ]
                                }
                            },
                            {
                                margin: [30, 50, 0, 0],
                                text: ['Please note that under subsection 38 (1) of the Act, you are notified you are hereby given a notice that the  electricity in the above premise shall  be disconnected on ',
                                    item.datetime,
                                    '\n\n Please also take note that we will claim any loss and expenses incurred by us due to the offences  done as above-mentioned. We will issue a statement of claims to your goodselves in due course.']
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: ['Name of License Holder: TENAGA NASIONAL BERHAD ',
                                    '\n\n',
                                    'Address: ',
                                    '\n\n',
                                    item.ta4officeaddress,
                                    '\n\n',
                                    ,
                                    'Date: ',
                                    item.ta4indatetime
                                ],
                            },
                            {
                                pageBreak: 'before',
                                margin: [50, 30, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['Delivery Notice of Form A\n\n'
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        ['Date', optItem1.ta4indatetime],
                                        ['Time', optItem1.ta4starttime],
                                        ['Name Receiver ', optItem1.ta4witnessname],
                                        ['Signature Receiver', {
                                                stack: [
                                                    {
                                                        image: 'sign1',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                    ]
                                }
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        /*   [
                                            'Name & Notice Deliver Signature',
                                            optItem1.deliverName
                                          ] */
                                        ['Deliver Signature ', {
                                                stack: [
                                                    {
                                                        image: 'sign2',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                        [
                                            'Delivery Name',
                                            optItem1.ta4staffname
                                        ],
                                        [
                                            'Remarks (if any)',
                                            optItem1.ta4describe
                                        ]
                                    ]
                                }
                            },
                            {
                                margin: [50, 10, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['Supply Disconnection \n\n']
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, 30],
                                    body: [
                                        ['Date', optItem2.ta4datetime],
                                        ['Time', optItem2.ta4starttime],
                                        ['Name Disconnector ', optItem2.ta4staffname],
                                        ['Disconnector Signature ', {
                                                stack: [
                                                    {
                                                        image: 'sign3',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                        [
                                            'Remarks (if any)',
                                            optItem2.ta4describe
                                        ]
                                    ]
                                }
                            },
                            {
                                pageBreak: 'before',
                                margin: [50, 10, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['Supply Reconnection A\n\n']
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: [150, 300],
                                    heights: [30, 30, '*'],
                                    body: [
                                        ['Date ', optItem3.ta4datetime],
                                        ['Time', optItem3.ta4starttime],
                                        ['Name Reconnector ', optItem3.ta4staffname],
                                        ['Reconnector Signature ', {
                                                stack: [
                                                    {
                                                        image: 'sign4',
                                                        width: 100,
                                                        height: 50,
                                                    }
                                                ]
                                            },
                                        ],
                                        [
                                            'Remarks (if any)',
                                            optItem3.ta4describe
                                        ]
                                    ]
                                }
                            },
                        ],
                        images: {
                            sign1: optItem1.ta4signcustomer,
                            sign2: optItem1.ta4signstaff,
                            sign3: optItem2.ta4signstaff,
                            sign4: optItem3.ta4signstaff
                        },
                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true
                            },
                            textMargin: {
                                margin: [30, 50, 80, 0]
                            }
                        }
                    }; // end case for Form A staff
                    break;
                case "elctCessInterupt":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 30, 0],
                                columns: [
                                    {
                                        text: ['Date :', item.ta4datetime]
                                    },
                                ],
                            },
                            {
                                margin: [30, 20, 10, 0],
                                text: ['To: ', item.ta4custname]
                            },
                            {
                                margin: [30, 20, 10, 0],
                                text: 'Dear valued TNB customer,\n'
                            },
                            {
                                margin: [30, 20, 0, 0],
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: "NOTIFICATION NOTIE OF CESSATION TEMPORARY INTERRUPTION OF ELECTRICITY SUPPLY FOR THE PURPOSE OF TESTING AND INSPECTIONS OF TNB'S METER INSTALLATION", style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', '', '', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ["Please be informed that TNB is conducting testing and inspection of TNB's meter installation at your premises to ensure that it works properly ",
                                    '\n\n',
                                    ,
                                    "In view of the same please be informed that the electricity supply at your premises will be cessationed/temporarily interupted on ",
                                    item.ta4indatetime,
                                    ' from time ',
                                    item.ta4starttime,
                                    ' until inspection time ',
                                    item.ta4endtime,
                                ]
                            },
                            {
                                margin: [30, 20, 0, 0],
                                text: [" Your kind cooperation is much appreciated",
                                    '\nThank You\n']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                alignment: 'center',
                                bold: true,
                                text: ['\n“BETTER BRIGHTER”\n',
                                    '“TNB PRACTISES A NO GIFT POLICY”']
                            },
                            {
                                margin: [30, 10, 0, 0],
                                image: 'sign1',
                                width: 100,
                                height: 50,
                            },
                            {
                                margin: [30, 0, 0, 0],
                                text: ['Staff Name: ', item.ta4staffname, '\n',
                                    'Staff No. ', item.ta4staffno]
                            },
                            '\n',
                            {
                                margin: [30, 10, 0, 0],
                                text: [" I hereby fully understand the contents of this notice and  that the electricity supply  to be  cessationed /temporarily interrupted for the above said purposes."]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                image: 'sign2',
                                width: 100,
                                height: 50,
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: [
                                    "Name(Customer/Owner/Representative): ",
                                    item.ta4witnessname,
                                    '\n\n',
                                    "Identification Card No.: ",
                                    item.ta4witnessidenkard,
                                    '\n\n',
                                    "Date/Time: ",
                                    item.date1
                                ]
                            },
                        ],
                        images: {
                            sign1: item.ta4signstaff,
                            sign2: item.ta4signwitness
                        },
                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true
                            },
                            textMargin: {
                                margin: [30, 50, 80, 0]
                            }
                        }
                    }; // End Notice Cessation Temporary
                    break;
                case "formB":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [100, 0, 0, 0],
                                alignment: 'center',
                                text: [
                                    "LICENSEE SUPPLY REGULATIONS 1990\n\n",
                                    "Form B\n\n",
                                    "sub-regulations 6A(2)\n\n",
                                    "MALAYSIA\n\n",
                                    "STATE OF ",
                                    item.ta4statename,
                                    '\n',
                                    "ELECTRICITY SUPPLY ACT 1990"
                                ]
                            },
                            {
                                margin: [30, 20, 10, 0],
                                lineHeight: 2,
                                text: ["To: ", item.ta4custname, '\n',
                                ]
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            '\n\n',
                            {
                                text: ["Sir/Madam/Mr/Messrs,"]
                            },
                            {
                                margin: [30, 10, 20, 0],
                                bold: true,
                                text: ["NOTICE OF TEMPORARY CESSATION / INTERUPTION OF ELECTRICITY SUPPLY."]
                                /*  table: {
                                   headerRows: 1,
                                   body: [
                                     [{ text: data.language[5].complianceFormType6.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                     ['', '', '', ''],
                                   ]
                                 },
                                 layout: 'lightHorizontalLines' */
                            },
                            {
                                margin: [30, 10, 20, 0],
                                lineHeight: 1,
                                text: [
                                    "Please be informed that the supply of electricity at ",
                                    item.ta4custaddress,
                                    " shall be temporarily ceased/interrupted on ",
                                    item.ta4datetime,
                                    ' from ',
                                    item.ta4starttime,
                                    ' to ',
                                    item.ta4endtime,
                                    ' for the purpose of ',
                                    item.ta4purpose
                                ]
                            },
                            {
                                margin: [30, 10, 20, 0],
                                text: ['\nName of Licensee: TNB\n\n',
                                    'Address: ',
                                    item.ta4officeaddress,
                                    '\n\n',
                                    'Telephone Number: ',
                                    item.ta4officephone,
                                    '\n\n',
                                    'Dated: ',
                                    item.ta4indatetime
                                ]
                            },
                        ],
                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true
                            },
                            textMargin: {
                                margin: [30, 50, 80, 0]
                            }
                        }
                    }; // End for Form B 
                    break;
                //prejudice
                case "prejudice":
                    dd = {
                        content: [
                            {
                                margin: [30, 20, 0, 0],
                                image: item.tnbLogo,
                            },
                            {
                                margin: [30, 20, 10, 0],
                                columns: [
                                    {
                                        text: ['To: ', item.ta4custname]
                                    },
                                ],
                            },
                            {
                                margin: [30, 0, 0, 0],
                                table: {
                                    widths: ['*'],
                                    headerRows: 1,
                                    body: item.tempAddress
                                },
                                layout: 'noBorders'
                            },
                            {
                                margin: [30, 20, 10, 0],
                                text: 'Dear valued TNB customer\n'
                            },
                            {
                                margin: [30, 20, 0, 0],
                                bold: true,
                                table: {
                                    headerRows: 1,
                                    body: [
                                        [{ text: "NOTIFICATION LETTER (EXPLANATION SESSION WITHOUT PREJUDICE) REGARDING TO ELECTRICITY DISCONNECTION AND CLAIMS OF LOSS OF REVENUE AND EXPENSES AND RELATED CHARGES.", style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                        ['', ''],
                                    ]
                                },
                                layout: 'lightHorizontalLines'
                            },
                            {
                                margin: [30, 10, 0, 0],
                                text: ["Please be informed that TNB is conducting inspections and testing of TNB meter installation at your premises to ensure it is working in good condition. The inspection results show that the meter does not record actual electricity consumption readings. ",
                                    '\n\n',
                                    "Please note that under subsection 38 (1) of the Electricity Supply Act 1990, TNB will perform electricity disconnection at your premise as mentioned in disconnection notice (Form A) that will be given together with this letter and will claim any loss of revenue and expenses and related charges.",
                                    '\n\n',
                                    "Therefore, you are invited to the office of REVENUE ASSURANCE which is addressed at ",
                                    item.ta4officeaddress,
                                    " after three (3) working days from the inspection date for explanation session without prejudice regarding to the actions will be taken by TNB. You are also encouraged to bring any proof and supporting documents for this session."
                                ]
                            },
                            '\n\n',
                            {
                                margin: [30, 0, 0, 20],
                                text: [
                                    "For any enquiries, you may contact TNB at ",
                                    item.ta4officephone
                                ]
                            },
                            '\n',
                            {
                                margin: [30, 0, 0, 0],
                                text: "Thank you."
                            },
                            '\n\n',
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "REVENUE ASSURANCE"
                            },
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "REVENUE MANAGEMENT "
                            },
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "CUSTOMER SERVICE"
                            },
                            {
                                margin: [30, 10, 0, 0],
                                bold: true,
                                text: "DISTRIBUTION NETWORK, TNB"
                            },
                            '\n\n',
                            {
                                margin: [100, 0, 0, 0],
                                italics: true,
                                fontSize: 10,
                                decoration: 'underline',
                                text: "This notice is computer generated and does not require a signature "
                            },
                        ],
                        styles: {
                            title: {
                                fontSize: 14,
                                bold: true
                            },
                            textMargin: {
                                margin: [30, 50, 80, 0]
                            }
                        }
                    };
                    break;
            } // End of Swtich Case 
            resolve(dd);
        });
    };
    ComplaintFormPdfProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ComplaintFormPdfProvider);
    return ComplaintFormPdfProvider;
}());

//# sourceMappingURL=complaint-form-pdf.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainceFormPdfBhs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComplainceFormPdfBhs = /** @class */ (function () {
    function ComplainceFormPdfBhs(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.url = null;
        this.langErr = true;
        console.log('Hello ComplaintFormPdfProvider Provider');
    }
    ComplainceFormPdfBhs.prototype.generateComplainceFormPdfBhs = function (item, soTypes, formType, langType, optItem1, optItem2, optItem3) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            debugger;
            if ('bhs' == langType) {
                _this.url = '../www/assets/data/libBahasa.json';
            }
            else {
                _this.url = '../www/assets/data/libEnglish.json';
            }
            resolve();
        }).catch(function () {
            console.log('Proccess not done');
        }).then(function () {
            return new Promise(function (resolve, reject) {
                var dd = null;
                _this.http
                    .get(_this.url)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log("data of load java LPC : " + data.length);
                    var fullItems;
                    debugger;
                    fullItems = data;
                    console.log("work order result.. " + data.language[0].complianceFormType1.date);
                    switch (formType) {
                        case "inspectionNinstallingMeter":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.date, item.ta4datetime,
                                            '\n\n',
                                            'Kepada :', item.ta4custname, '\n',
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 1,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    '\n\n',
                                    {
                                        text: [data.language[0].complianceFormType1.salutation,]
                                    },
                                    {
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[0].complianceFormType1.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 15, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.paragraph1,
                                            '\n\nSekian dimaklumkan, terima kasih.'
                                        ],
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: [
                                            '"BETTER. BRIGHTER"\n\n',
                                            data.language[0].complianceFormType1.moto
                                        ]
                                    }, {
                                        alignment: 'justify',
                                        margin: [30, 20, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.signOfSalutation,
                                            '\n\n\n'
                                        ]
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                    {
                                        alignment: 'justify',
                                        margin: [30, 20, 0, 0],
                                        text: [
                                            item.ta4staffname,
                                            '\n',
                                            item.ta4position,
                                            '\n',
                                            item.ta4department,
                                        ]
                                    },
                                    {
                                        table: {
                                            margin: [0, 50, 0, 0],
                                            headerRows: 1,
                                            body: [
                                                [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' },
                                                    { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', '', '', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    { text: data.language[0].complianceFormType1.tickTitle, decoration: 'underline', margin: [30, 200, 0, 0] },
                                    // {
                                    //   margin:[30,5,0,0],
                                    //   ul:[
                                    //     'Customer attend',
                                    //     'Customer not attend',
                                    //   ]
                                    // },
                                    {
                                        margin: [30, 0, 80, 10],
                                        text: '\nSila tanda yang berkenaan\n'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        heights: [100, 50],
                                        table: {
                                            body: [
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: 'present',
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Pengguna Hadir'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: 'absent',
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Pengguna Tidak Hadir'
                                                ],
                                            ]
                                        }
                                    }, {
                                        margin: [30, 15, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.signOff,
                                            '\n\n',
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            data.language[0].complianceFormType1.staffDetailN, item.ta4staffname,
                                            data.language[0].complianceFormType1.staffNo, item.ta4staffno
                                        ]
                                    }
                                ],
                                images: {
                                    sign1: item.ta4signmanger,
                                    sign2: item.ta4signstaff,
                                    present: item.present,
                                    absent: item.absent
                                },
                                styles: {
                                    header: {
                                        fontSize: 18,
                                        bold: true,
                                        alignment: 'center',
                                        margin: [30, 50, 60, 80],
                                        decoration: 'underline',
                                    },
                                    subheader: {
                                        fontSize: 14
                                    },
                                    tableHeader: {
                                        fontSize: 16,
                                        margin: [50, 30, 0, 0],
                                        bold: true,
                                        alignment: 'center',
                                    },
                                    superMargin: {
                                        margin: [30, 0, 40, 0],
                                        fontSize: 15
                                    }
                                }
                            };
                            break;
                        case "collectionEvidence":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[1].complianceFormType2.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [data.language[1].complianceFormType2.col1Acc, item.ta4accountno],
                                            },
                                            {
                                                text: [data.language[1].complianceFormType2.col2SttCode, item.station]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            data.language[1].complianceFormType2.custName, item.ta4custname,
                                            '\n\n',
                                            data.language[1].complianceFormType2.admit, item.ta4staffname,
                                            '\n\n',
                                            data.language[1].complianceFormType2.staffNo, item.ta4staffno,
                                            data.language[1].complianceFormType2.staffNo2,
                                        ]
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [30, '*', '*', 0],
                                            headerRows: 2,
                                            body: soTypes
                                        }
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 10],
                                        text: [
                                            data.language[1].complianceFormType2.addrss, item.ta4custaddress
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: 'T/Tangan Pengambil:\n ',
                                            },
                                            {
                                                image: 'sign1',
                                                width: 100,
                                                height: 50,
                                            },
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: 'T/Tangan Pengambil: ',
                                            },
                                            {
                                                image: 'sign2',
                                                width: 100,
                                                height: 50,
                                            },
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: ['Nama Pekerja: ', '\n', item.ta4staffname]
                                            },
                                            {
                                                text: ['Nama Pengguna: ', '\n', item.ta4witnessname]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: ['No Pekerja ', item.ta4staffno]
                                            },
                                            {
                                                text: ['Alamat', '\n', item.ta4custaddress]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            'No Kad Pengenalan: ',
                                            item.ta4witnessidenkard
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [
                                                    'Jawatan: ',
                                                    'Juruteknik'
                                                ]
                                            },
                                            {
                                                text: [
                                                    'No Kad Pengenalan: ',
                                                    item.ta4staffindenkard
                                                ],
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            ' Stesen: ', item.ta4officezone
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: ['Tarikh: ', item.ta4datetime]
                                            },
                                            {
                                                text: ['Tarikh: ', item.ta4indatetime]
                                            }
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [
                                                    'Masa: ',
                                                    item.ta4starttime
                                                ]
                                            },
                                            {
                                                text: ['Masa: ', item.ta4endtime]
                                            }
                                        ]
                                    },
                                ],
                                images: {
                                    sign1: item.ta4signstaff,
                                    sign2: item.ta4signwitness
                                },
                                styles: {
                                    tableHeader: {
                                        fontSize: 16,
                                        margin: [30, 30, 0, 0],
                                        bold: true,
                                        alignment: 'center',
                                    },
                                    images: {
                                        tnbLogo: 'data:image/png;base64,../src/assets/imgs/tnb.png',
                                    }
                                }
                            }; // End case for collection evidence
                            break;
                        case "inspecInstallingTnbMeter":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 30, 0],
                                        columns: [
                                            {
                                                text: 'Rujukan Kami : TNB (B) DNET/METER/SEAL',
                                            },
                                            {
                                                text: ['Tarikh: ', item.ta4indatetime]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: [item.ta4custname]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 1,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: 'Pelanggan TNB Yang Dihormati,'
                                    },
                                    {
                                        margin: [50, 0, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: 'PEMAKLUMAN SEMAKAN PEPASANGAN METER ELEKTRIK OLEH TNB', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 20, 20, 0],
                                        text: [data.language[3].complianceFormType4.paragraph1,
                                            item.ta4custaddress,
                                            'dengan No. Akaun _',
                                            item.ta4indatetime,
                                            ' pada',
                                            item.ta4endtime,
                                            '\n\n',
                                            data.language[3].complianceFormType4.paragraph2,
                                            '\n\n',
                                            data.language[3].complianceFormType4.paragraph3,
                                            ',',
                                            item.ta4officeaddress,
                                            ',',
                                            item.ta4officephone,
                                            '\n\n',
                                            data.language[3].complianceFormType4.salutationEnd,
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', '', '', '', '', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 0, 30, 0],
                                        witdth: 400,
                                        columns: [
                                            {
                                                text: data.language[3].complianceFormType4.closure1,
                                            },
                                            {
                                                image: 'sign1',
                                                width: 100,
                                                height: 50,
                                            },
                                        ],
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        width: 400,
                                        columns: [
                                            {
                                                text: data.language[3].complianceFormType4.closure2,
                                            },
                                            {
                                                image: 'sign2',
                                                width: 100,
                                                height: 50,
                                            },
                                        ],
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [data.language[3].complianceFormType4.closure3, item.ta4staffname]
                                            },
                                            {
                                                text: [
                                                    data.language[3].complianceFormType4.closure4,
                                                    item.ta4witnessname
                                                ]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: [data.language[3].complianceFormType4.closure5, item.ta4staffno]
                                            },
                                            {
                                                text: [
                                                    data.language[3].complianceFormType4.closure6,
                                                    item.ta4witnessphone
                                                ]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: data.language[3].complianceFormType4.closure7,
                                            },
                                            {
                                                text: [
                                                    data.language[3].complianceFormType4.closure8,
                                                    item.datetime
                                                ]
                                            }
                                        ],
                                    },
                                    {
                                        margin: [100, 0, 0, 0],
                                        text: [
                                            data.language[3].complianceFormType4.closure9,
                                            item.ta4department
                                        ]
                                    }
                                ],
                                images: {
                                    sign1: item.ta4signstaff,
                                    sign2: item.ta4signwitness
                                },
                                styles: {
                                    tableHeader: {
                                        fontSize: 14,
                                        margin: [30, 30, 0, 0],
                                        bold: true,
                                        alignment: 'center',
                                    },
                                }
                            }; // End of instalation meter
                            break;
                        //Customer Copy
                        case "electricCut":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        alignment: 'center',
                                        text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA', '\n\n(zone)  ', item.ta4statename, '\n\nAKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        style: 'textMargin',
                                        text: ['Kepada:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n\n Tuan/Puan/Cik/Tetuan, ']
                                    },
                                    {
                                        style: 'title',
                                        margin: [30, 0, 50, 0],
                                        text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: ['Sila ambil perhatian pada', item.ta4starttime, 'satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:',
                                            '\n\n',
                                            item.ta4anamoly,
                                            ,
                                            '\n\nBerdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:']
                                    },
                                    {
                                        margin: [30, 200, 0, 0],
                                        text: '\nSila tanda yang berkenaan\n'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [50, 100, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                [
                                                    '', 'Subseksyen 37(1)', 'Huraian'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase2,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(1)', 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa  kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain:'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase3,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', '(a)	mengambil tenaga;'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase4,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', '(b) mengguna habis tenaga;'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase5,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(c)	mengguna tenaga;'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase6,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(d)	mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase7,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(e) menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran atau penggunahabisan tenaga. '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase8,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(14)', 'merosakkan apa-apa meter atau alat lain yang digunakan atas atau berkaitan dengan mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga. '
                                                ],
                                            ]
                                        }
                                    },
                                    {
                                        margin: [30, 50, 0, 0],
                                        text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada',
                                            item.datetime,
                                            ,
                                            '\n\n Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        columns: [
                                            {
                                                text: 'Nama Pemegang Lesen: TENAGA NASIONAL BERHAD',
                                            },
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            '\n\n',
                                            'Alamat: ',
                                            '\n\n',
                                            item.ta4officeaddress,
                                            '\n\n',
                                            'Tarikh: ',
                                            item.ta4indatetime
                                        ]
                                    }
                                ],
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            }; // End for customer Electric cut
                            break;
                        // Staff Copy
                        case "electricCutStaff":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        alignment: 'center',
                                        text: ['JADUAL – BORANG A\n\n', '(subperaturan 6A(1))\n\n', 'MALAYSIA\n\n', item.ta4statename, '\n\nAKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        style: 'textMargin',
                                        text: ['Kepada:', '\n\n', item.ta4custname, '\n\n', item.ta4custaddress, '\n\n\n Tuan/Puan/Cik/Tetuan, ']
                                    },
                                    {
                                        style: 'title',
                                        margin: [30, 0, 0, 0],
                                        text: ['NOTIS PEMOTONGAN BEKALAN ELEKTRIK DI BAWAH SUBSEKSYEN 38(1) AKTA BEKALAN ELEKTRIK 1990']
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [
                                            'Sila ambil perhatian pada',
                                            item.ta4starttime,
                                            'satu pemeriksaan telah dilakukan terhadap pepasangan kami di premis tuan. Hasil pemeriksaan, kami mendapati bahawa pepasangan tersebut telah diusik atau diubahsuai dalam keadaan yang dinyatakan berikut di bawah:',
                                            '\n\n',
                                            item.ta4anamoly,
                                            '\n\n',
                                            'Berdasarkan keterangan di atas, pihak kami berpendapat bahawa suatu kesalahan telah dilakukan di bawah Akta Bekalan Elektrik 1990 (”Akta”) seperti berikut:'
                                        ]
                                    },
                                    {
                                        margin: [30, 200, 0, 0],
                                        text: '\nSila tanda yang berkenaan\n'
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [50, 100, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                [
                                                    '', 'Subseksyen 37(1)', 'Penerangan'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase2,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(1)', 'mengganggu  atau  melaraskan  apa-apa  pepasangan  atau bahagiannya atau mengilang atau  mengimport  atau  menjual  apa-apa  kelengkapan  sehingga  menyebabkan  atau mungkin  menyebabkan  bahaya  kepada  nyawa  atau  anggota  badan  manusia  atau kerosakan pada mana-mana kelengkapan atau harta lain: '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase3,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', ' (a)mengambil tenaga '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase4,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    },
                                                    'Subseksyen 37(3)', '(b) mengguna habis tenaga '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase5,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(c)	mengguna tenaga '
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase6,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(d)	mengubah pinda indeks apa-apa meter atau alat yang digunakan di atas atau berkaitan dengan apa-apa pepasangan mana-mana pepasangan berlesen untuk merekodkan keluaran atau penggunahabisan tenaga; atau'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase7,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(3)', '(e)	menghalang apa-apa meter atau alat sedemikian daripada merekodkan dengan sempurnanya keluaran atau penggunahabisan tenaga.'
                                                ],
                                                [
                                                    {
                                                        stack: [
                                                            {
                                                                image: item.subsectionBase8,
                                                                width: 70,
                                                                height: 20,
                                                            }
                                                        ]
                                                    }, 'Subseksyen 37(14)', 'merosakkan apa-apa meter atau alat lain yang digunakan atas atau berkaitan dengan mana-mana pepasangan berlesen bagi merekodkan keluaran atau penggunahabisan tenaga.'
                                                ],
                                            ]
                                        }
                                    },
                                    {
                                        margin: [30, 50, 0, 0],
                                        text: ['Sila ambil perhatian bahawa di bawah subseksyen 38(1) Akta, tuan adalah diberi notis bahawa bekalan elektrik di premis seperti di atas akan dipotong pada',
                                            item.datetime,
                                            '\n\n',
                                            ' Sila ambil perhatian juga bahawa pihak kami akan membuat tuntutan apa-apa kerugian dan perbelanjaan oleh pihak kami berikutan kesalahan yang dilakukan seperti di atas. Pihak kami akan mengemukakan pernyataan tuntutan kepada tuan dalam masa terdekat.']
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: ['Nama Pemegang Lesen: TENAGA NASIONAL BERHAD ',
                                            '\n\n',
                                            'Address: ',
                                            '\n\n',
                                            item.ta4officeaddress,
                                            '\n\n',
                                            ,
                                            'Date: ',
                                            item.ta4indatetime
                                        ]
                                    },
                                    {
                                        pageBreak: 'before',
                                        margin: [50, 30, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['Penyerahan Notis Borang A\n\n']
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Tarikh ', optItem1.ta4indatetime],
                                                ['Mase', optItem1.ta4starttime],
                                                ['Nama Penerima ', optItem1.ta4witnessname],
                                                ['T/Tangan Penerima', {
                                                        stack: [
                                                            {
                                                                image: 'sign1',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                            ]
                                        }
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Deliver Signature ', {
                                                        stack: [
                                                            {
                                                                image: 'sign2',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                                [
                                                    'Nama Penyerah Notis',
                                                    optItem1.ta4staffname
                                                ],
                                                [
                                                    'Catatan (jika ada)',
                                                    optItem1.ta4describe
                                                ]
                                            ]
                                        }
                                    },
                                    '\n',
                                    {
                                        margin: [50, 10, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['Pemotongan Bekalan \n\n']
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Tarikh', optItem2.ta4datetime],
                                                ['Mase', optItem2.ta4starttime],
                                                ['Nama Pemotong Bekalan ', optItem2.ta4staffname],
                                                ['T/Tangan Pemotong Bekalan', {
                                                        stack: [
                                                            {
                                                                image: 'sign3',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                                [
                                                    'Catatan (jika ada) ',
                                                    optItem2.ta4describe
                                                ]
                                            ]
                                        }
                                    },
                                    '\n',
                                    {
                                        pageBreak: 'before',
                                        margin: [50, 10, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['Penyambungan Semula Bekalan\n\n']
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: [150, 300],
                                            heights: [30, 30, 30],
                                            body: [
                                                ['Tarikh', optItem3.ta4datetime],
                                                ['Mase', optItem3.ta4starttime],
                                                ['Nama Penyambung Bekalan ', optItem3.ta4staffname],
                                                ['T/Tangan Penyambung Bekalan ', {
                                                        stack: [
                                                            {
                                                                image: 'sign4',
                                                                width: 100,
                                                                height: 50,
                                                            }
                                                        ]
                                                    },
                                                ],
                                                [
                                                    'Catatan (jika ada)',
                                                    optItem3.ta4describe
                                                ]
                                            ]
                                        }
                                    },
                                ],
                                images: {
                                    sign1: optItem1.ta4signcustomer,
                                    sign2: optItem1.ta4signstaff,
                                    sign3: optItem2.ta4signstaff,
                                    sign4: optItem3.ta4signstaff
                                },
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            }; // end case for Form A staff
                            break;
                        case "elctCessInterupt":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 30, 0],
                                        columns: [
                                            {
                                                text: ['Tarikh :', item.ta4datetime]
                                            },
                                        ],
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: ['Kepada :', item.ta4custname]
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: 'Pelanggan TNB Yang Dihormati\n'
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[4].complianceFormType5.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', '', '', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[4].complianceFormType5.paragraph1,
                                            '\n\n',
                                            ,
                                            data.language[4].complianceFormType5.paragraph2,
                                            item.ta4indatetime,
                                            data.language[4].complianceFormType5.paragraph5,
                                            item.ta4starttime,
                                            ' hingga ',
                                            item.ta4endtime
                                        ]
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        text: [data.language[4].complianceFormType5.paragraph3, '\nSekian dimaklumkan, terima kasih.\n']
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        alignment: 'center',
                                        bold: true,
                                        text: ['\n“PENGGERAK KEMAJUAN NEGARA”\n']
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        image: 'sign1',
                                        width: 100,
                                        height: 50,
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: ['Nama Pekerja: ', item.ta4staffname, '\n',
                                            'No. Pekerja. ', item.ta4staffno]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[4].complianceFormType5.paragraph4]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        image: 'sign2',
                                        width: 100,
                                        height: 50,
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[5].complianceFormType6.verifyBy[0].By,
                                            item.ta4witnessname,
                                            '\n\n',
                                            'No. Kad Pengenalan: ',
                                            item.ta4witnessidenkard,
                                            '\n\n',
                                            data.language[5].complianceFormType6.verifyBy[2].DateTime,
                                            item.date1
                                        ]
                                    },
                                ],
                                images: {
                                    sign1: item.ta4signstaff,
                                    sign2: item.ta4signwitness
                                },
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            }; // End Notice Cessation Temporary
                            break;
                        case "formB":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [100, 0, 0, 0],
                                        alignment: 'center',
                                        text: [
                                            "PERATURAN-PERATURAN BEKALAN PEMEGANG LESEN\n\n",
                                            "Borang B\n\n",
                                            "subperaturan 6A(2)\n\n",
                                            "MALAYSIA\n\n",
                                            "STATE OF ",
                                            item.ta4statename,
                                            "\n",
                                            "AKTA BEKALAN ELEKTRIK 1990"
                                        ]
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: ["Kepada: ", item.ta4custname, '\n',
                                        ]
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 1,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    '\n\n',
                                    {
                                        text: ["Tuan/Puan/Cik/Tetuan,"]
                                    },
                                    {
                                        bold: true,
                                        // margin: [50, 10, 20, 0],
                                        margin: [30, 10, 20, 0],
                                        text: [data.language[5].complianceFormType6.title],
                                    },
                                    {
                                        margin: [30, 10, 20, 0],
                                        lineHeight: 1,
                                        text: [
                                            data.language[5].complianceFormType6.paragraph1,
                                            item.ta4custaddress,
                                            ' akan diberhentikan/diganggu sementara pada ',
                                            item.ta4datetime,
                                            ' dari ',
                                            item.ta4starttime,
                                            ' hingga ',
                                            item.ta4endtime,
                                            ' bagi tujuaan ',
                                            item.ta4purpose
                                        ]
                                    },
                                    {
                                        margin: [30, 10, 20, 0],
                                        text: ['\nName Pemegang Lesen : TNB\n\n',
                                            'Alamat: ',
                                            item.ta4officeaddress,
                                            '\n\n',
                                            'Nomber telefon: ',
                                            item.ta4officephone,
                                            '\n\n',
                                            'Tarikh: ',
                                            item.ta4indatetime
                                        ]
                                    },
                                ],
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            }; // End for Form B 
                            break;
                        //Case for prejudice
                        case "prejudice":
                            dd = {
                                content: [
                                    {
                                        margin: [30, 20, 0, 0],
                                        image: item.tnbLogo,
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        columns: [
                                            {
                                                text: ['Kepada: ', item.ta4custname]
                                            },
                                        ],
                                    },
                                    {
                                        margin: [30, 0, 0, 0],
                                        table: {
                                            widths: ['*'],
                                            headerRows: 0,
                                            body: item.tempAddress
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        margin: [30, 20, 10, 0],
                                        text: 'Pelanggan TNB Yang Dihormati\n'
                                    },
                                    {
                                        margin: [30, 20, 0, 0],
                                        table: {
                                            headerRows: 1,
                                            body: [
                                                [{ text: data.language[6].complianceFormType7.title, style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                                                ['', ''],
                                            ]
                                        },
                                        layout: 'lightHorizontalLines'
                                    },
                                    {
                                        margin: [30, 10, 0, 0],
                                        text: [data.language[6].complianceFormType7.paragraph1,
                                            '\n\n',
                                            data.language[6].complianceFormType7.paragraph2,
                                            '\n\n',
                                            data.language[6].complianceFormType7.paragraph3,
                                            item.ta4officeaddress,
                                            data.language[6].complianceFormType7.paragraph4
                                        ]
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: [
                                            data.language[6].complianceFormType7.closure,
                                            item.ta4officephone
                                        ]
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        text: data.language[6].complianceFormType7.closure2
                                    },
                                    '\n\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice2
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice3
                                    },
                                    '\n',
                                    {
                                        margin: [30, 0, 0, 0],
                                        bold: true,
                                        text: data.language[6].complianceFormType7.addressOffice4
                                    },
                                    '\n\n',
                                    {
                                        margin: [100, 0, 0, 0],
                                        italics: true,
                                        fontSize: 10,
                                        decoration: 'underline',
                                        text: data.language[6].complianceFormType7.noticeReminder
                                    },
                                ],
                                styles: {
                                    title: {
                                        fontSize: 14,
                                        bold: true
                                    },
                                    textMargin: {
                                        margin: [30, 50, 80, 0]
                                    }
                                }
                            };
                            break;
                    } // End swtich case
                    resolve(dd);
                    reject('Unable to create PDF');
                });
            });
        });
    };
    ComplainceFormPdfBhs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ComplainceFormPdfBhs);
    return ComplainceFormPdfBhs;
}());

//# sourceMappingURL=complaince-form-pdf-bhs.js.map

/***/ })

});
//# sourceMappingURL=16.js.map