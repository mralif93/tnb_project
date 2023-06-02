import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

  public changePassword: FormGroup;

  public form: any;
  public loader: any;
  public username: string;
  public responseCode: any;
  public oldPassword: String;
  public newPassword: String;
  public confirmPassword: String;

  passwordType: string = 'password';
  passwordIcon: string = 'md-eye-off';


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
  ) {

    this.username = navParams.data.username;
  }


  ngOnInit() {
    this.changePassword = this.formBuilder.group({
      currentPassword: ['', Validators.compose([Validators.required])],
      newPassword: ['', Validators.compose([Validators.required])],
      newPasswordConfirm: ['', Validators.compose([Validators.required])],
    });
  }

  /**
   * Changing Password Form Display with Validation...
   */
  changePasswordForm() {
    debugger;
    let currentPassword = this.changePassword.value.currentPassword;
    let newPassword = this.changePassword.value.newPassword;
    let retypePassword = this.changePassword.value.newPasswordConfirm;

    if (typeof (currentPassword) == 'undefined' || currentPassword === "") {
      alert("Please enter current password");
    } else if (typeof (newPassword) == 'undefined' || newPassword === "") {
      alert("Please enter new password");
    } else if (typeof (retypePassword) == 'undefined' || retypePassword === "") {
      alert("Please enter confirmation password");
    } else if (newPassword != retypePassword) {
      alert("Password does not match!");
    }
    else {
      this.loader = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      setTimeout(() => {
        this.loader.dismiss();
      }, 20000);

      this.loader.present().then(() => {
        this.dataService.changePassword(this.username, currentPassword, newPassword, retypePassword)
          .then((result) => {            
            this.responseCode = result;
            if (this.responseCode == '00')
              alert("Change password successful");
            else
              alert("Change password failure");
            this.goBack();
          },
            (failure) => {
              this.goBack();
            });
        this.loader.dismiss();
      });
    }
  }

  /**
   * Navigated back disable popup...
   */
  goBack() {
    this.navCtrl.pop();
  }


  /**
   * Create :Ameer (29/11/2019)
   * Allow hide and shows password key in
   */
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'md-eye-off' ? 'md-eye' : 'md-eye-off';
  }
  
}
