webpackJsonp([62],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, dataService, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.passwordType = 'password';
        this.passwordIcon = 'md-eye-off';
        this.username = navParams.data.username;
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        this.changePassword = this.formBuilder.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            newPasswordConfirm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    };
    /**
     * Changing Password Form Display with Validation...
     */
    ChangepasswordPage.prototype.changePasswordForm = function () {
        var _this = this;
        debugger;
        var currentPassword = this.changePassword.value.currentPassword;
        var newPassword = this.changePassword.value.newPassword;
        var retypePassword = this.changePassword.value.newPasswordConfirm;
        if (typeof (currentPassword) == 'undefined' || currentPassword === "") {
            alert("Please enter current password");
        }
        else if (typeof (newPassword) == 'undefined' || newPassword === "") {
            alert("Please enter new password");
        }
        else if (typeof (retypePassword) == 'undefined' || retypePassword === "") {
            alert("Please enter confirmation password");
        }
        else if (newPassword != retypePassword) {
            alert("Password does not match!");
        }
        else {
            this.loader = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Please wait...',
                dismissOnPageChange: true
            });
            setTimeout(function () {
                _this.loader.dismiss();
            }, 20000);
            this.loader.present().then(function () {
                _this.dataService.changePassword(_this.username, currentPassword, newPassword, retypePassword)
                    .then(function (result) {
                    _this.responseCode = result;
                    if (_this.responseCode == '00')
                        alert("Change password successful");
                    else
                        alert("Change password failure");
                    _this.goBack();
                }, function (failure) {
                    _this.goBack();
                });
                _this.loader.dismiss();
            });
        }
    };
    /**
     * Navigated back disable popup...
     */
    ChangepasswordPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /**
     * Create :Ameer (29/11/2019)
     * Allow hide and shows password key in
     */
    ChangepasswordPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'md-eye-off' ? 'md-eye' : 'md-eye-off';
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/changepassword/changepassword.html"*/'<ion-content class="login-background">\n  <form [formGroup]="changePassword" style="padding: 30% 10% 10% 10%;">\n\n    <ion-row>\n      <ion-col>\n        <div style="text-align: center">\n          <img src="assets/imgs/rationalOfLogo.png" style="width: 20%" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <br />\n\n    <ion-list style="padding: 10% 10% 10% 10%; margin-bottom: 0px;">\n      <ion-item>\n        <ion-label style="font-weight: bold;" item-left primary>Old Password : </ion-label>\n        <ion-input formControlName="currentPassword" required="true" [type]="passwordType" placeholder="Enter Current Password"></ion-input>\n        <ion-icon [name]="passwordIcon" item-end style="align-self: flex-end;" (click)=\'hideShowPassword()\'></ion-icon>\n      </ion-item>\n      <ion-item\n        *ngIf="changePassword.get(\'currentPassword\').hasError(\'required\') && changePassword.get(\'currentPassword\').touched">\n        <ion-label color="danger">\n          <ion-icon name="warning"></ion-icon>\n          Please enter current password\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label style="font-weight: bold;" item-left primary>New Password : </ion-label>\n        <ion-input formControlName="newPassword" required="true" [type]="passwordType" placeholder="Enter New Password"></ion-input>\n        <ion-icon [name]="passwordIcon" item-end style="align-self: flex-end;" (click)=\'hideShowPassword()\'></ion-icon> \n      </ion-item>\n      <ion-item\n        *ngIf="changePassword.get(\'newPassword\').hasError(\'required\') && changePassword.get(\'newPassword\').touched">\n        <ion-label color="danger">\n          <ion-icon name="warning"></ion-icon>\n          Please enter new password\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label style="font-weight: bold;" item-left primary>Confirm Password : </ion-label>\n        <ion-input formControlName="newPasswordConfirm" required="true" [type]="passwordType" placeholder="Enter New Password"></ion-input>\n        <ion-icon [name]="passwordIcon" item-end style="align-self: flex-end;" (click)=\'hideShowPassword()\'></ion-icon>      \n      </ion-item>\n\n      <ion-item\n        *ngIf="changePassword.get(\'newPasswordConfirm\').hasError(\'required\') && changePassword.get(\'newPasswordConfirm\').touched">\n        <ion-label color="danger">\n          <ion-icon name="warning"></ion-icon>\n          Please enter confirmation password\n        </ion-label>\n      </ion-item>\n      <br />\n    </ion-list>\n\n    <!--  <ion-list>\n    <ion-item>\n      <ion-icon name="key" item-left primary></ion-icon>\n      <ion-input [(ngModel)]="oldPassword" type="password" placeholder="Old Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="key" item-left primary></ion-icon>\n      <ion-input [(ngModel)]="newPassword" type="password" placeholder="New Password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="key" item-left primary></ion-icon>\n      <ion-input [(ngModel)]="confirmPassword" type="password" placeholder="Confirm Password"></ion-input>\n    </ion-item>\n    <br />\n  </ion-list> -->\n\n    <div style="padding: 1% 20% 1% 20%; ">\n      <ion-row>\n        <ion-col>\n          <button color="secondary" ion-button block type="button" (click)="changePasswordForm()" round>Change\n            Password</button>\n        </ion-col>\n        <ion-col>\n          <button color="danger" ion-button block (click)="goBack()" round>Cancel</button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!--  <div padding>\n      <ion-row>\n        <ion-col>\n          <button ion-button block (click)="changePasswordForm()">Change Password</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block (click)="goBack()">Cancel</button>\n        </ion-col>\n      </ion-row>\n    </div> -->\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/muhdaliftajudin/Desktop/TNB/tnb_project/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=62.js.map