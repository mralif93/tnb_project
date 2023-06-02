/*
 * Reference https://github.com/IBM/MFP-JSONStore-OfflineSync
 */

/// <reference path="../../../plugins/cordova-plugin-mfp-jsonstore/typings/jsonstore.d.ts" />
/// <reference path="../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, App, LoadingController, MenuController } from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import { AuthHandlerProvider } from '../../providers/auth-handler/auth-handler';
import { Network } from '@ionic-native/network';
import { DataServiceProvider } from "./../../providers/data-service/data-service";
import { Auth } from "./../../providers/common/auth";
import { GlobalVars } from "./../../providers/common/global-vars";
import { JsonStoreStructureProvider } from "./../../providers/common/json-store/json-store-structure";
import { JsonStoreCrudProvider } from "./../../providers/common/json-store/json-store-crud";
import { DeviceConstants } from "../../pojo/commonEnum/DeviceConstants";
import { GlobalFunction } from "../../providers/common/global-function";
import { Domains } from '../../pojo/commonEnum/Domains';
import { NativeStorage } from '@ionic-native/native-storage';
import { WoHomePage } from "../wo-home/wo-home";

declare let mobilesignalswift;
declare var MobileSignal: any;
declare var cordova: any;

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public loginForm: FormGroup;
  public loader: any;
  public simMode: boolean;
  public currentUser: any;
  public version: String;
  public appName: String;
  public userDetailItems: any = [];

  passwordType: string = 'password';
  passwordIcon: string = 'md-eye-off';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authHandler: AuthHandlerProvider,
    private network: Network,
    public dataService: DataServiceProvider,
    public jsonStoreStructure: JsonStoreStructureProvider,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public appCtrl: App,
    public loadingCtrl: LoadingController,
    public auth: Auth,
    public gv: GlobalVars,
    public gf: GlobalFunction,
    public formBuilder: FormBuilder,
    public nativeStorage: NativeStorage
  ) {
    console.log(">LoginPage >>constructor");
    console.log(">LoginPage >>constructor >>>disable menu");
    this.menuCtrl.enable(false, 'myMenu');

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
    
    this.authHandler.setLoginFailureCallback((error) => {
      console.log(">LoginPage >>constructor >>>this.authHandler.setLoginFailureCallback : "+JSON.stringify(error));
      if (error !== null) {
        if (error.substring(0, 3) == '403') {
          let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
          console.log(">LoginPage >>constructor >>>forward to change password page");
          newRootNav.push("ChangepasswordPage", { "username": this.loginForm.value.username });
        } else {
          this.showAlert('Login Failure', error);
          this.loader.dismiss();
        }
      } else {
        this.showAlert('Login Failure', 'Failed to login.');
        this.loader.dismiss();
      }
    });

    this.authHandler.setLoginSuccessCallback(() => {
      console.log(">LoginPage >>constructor >>>this.authHandler.setLoginSuccessCallback");
      console.log(">LoginPage >>constructor >>>network status : "+this.gf.checkNetwork());
      if (this.gv.testMobile && (DeviceConstants.NETWORK_UNKNOWN === this.gf.checkNetwork() || DeviceConstants.NETWORK_NONE === this.gf.checkNetwork())) {
        console.log(">LoginPage >>constructor >>>trigger this.jsonStoreStructure.initLpcWorkOrder");
        this.jsonStoreStructure.initLpcWorkOrder().then(
          success => {
            let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            console.log(">LoginPage >>constructor >>>forward to home page");
            newRootNav.setRoot("WoHomePage", "");
            this.loader.dismiss();
          });
      } else if ((DeviceConstants.NETWORK_2G === this.gf.checkNetwork() || DeviceConstants.NETWORK_3G === this.gf.checkNetwork() || DeviceConstants.NETWORK_4G === this.gf.checkNetwork())) {

        /*
         * Description: Change old(swift) to new(objective-c) plugin.
         * Edited: Alif (16.10.2019)
         * old --> mobilesignalswift.getSignalStrength
         * new --> cordova.plugins.MobileSignal.getSignalStrength
         */
        console.log(">LoginPage >>constructor >>>trigger cordova.plugins.MobileSignal.getSignalStrength");
        cordova.plugins.MobileSignal.getSignalStrength((data) => {
          console.log('>LoginPage >>constructor >>>singnal strength login page : ' + this.gv.deviceSignal + ' ----------------  ' + data + ' ------------  ' + this.gf.findSignalStrength());
          if (this.gv.deviceSignal <= data) {
            console.log(">LoginPage >>constructor >>>trigger this.gf.processData");
            this.gf.processData().then(result => {
              if (DeviceConstants.RESP_SUCCESS_MSG === result) {
                let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                console.log(">LoginPage >>constructor >>>forward to home page");
                newRootNav.setRoot("WoHomePage", "");
                this.loader.dismiss();
              }
            });
          } else {
            this.gf.displayToast("Low Network coverage. Can't synchorize data.");
            this.loader.dismiss();
          }
        });

      } else {
        console.log(">LoginPage >>constructor >>>trigger this.gf.processData");
        this.gf.processData().then(result => {
          if (DeviceConstants.RESP_SUCCESS_MSG === result) {
            let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
            console.log(">LoginPage >>constructor >>>forward to home page");
            newRootNav.setRoot("WoHomePage");
            this.loader.dismiss();
          }
          else if (DeviceConstants.RESP_FAILURE_MSG === result) {
            this.loader.dismiss();
          }
        });
      }
    });

    this.authHandler.setHandleChallengeCallback(() => {
      this.navCtrl.setRoot(LoginPage);
    });

    var value = [];
    console.log(">LoginPage >>constructor >>>trigger this.nativeStorage.getItem(myitem)");
    this.nativeStorage.getItem('myitem')
      .then(
        (data) => {
          value.push(JSON.parse(JSON.stringify(data)))
          this.loginForm.controls["username"].setValue(value[0].Username);
          this.loginForm.controls["password"].setValue(value[0].Password);
        },
        (error) => {
          console.log(">LoginPage >>constructor >>>Error : "+JSON.stringify(error));
        }
      );
  }

  /*
   * Create :Ameer (13/9/2019)
   * Allow hide and shows password key in
   */
  hideShowPassword() {
    console.log(">LoginPage >>hideShowPassword");
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'md-eye-off' ? 'md-eye' : 'md-eye-off';
  }

  /**
   * Login Checking Condition...
   */
  processForm() {
    console.log(">LoginPage >>processForm");    
    debugger;
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    console.log(">LoginPage >>processForm >>>username : "+username+" using "+ password)
    if (username === '' || password === '' || username === 'undefined' || password === 'undefined' || username === null || password === null) {
      this.showAlert('Login Failure', 'Username and password are required');      
      return;
    }
    console.log(">LoginPage >>processForm >>>trigger this.nativeStorage.setItem")
    this.nativeStorage.setItem('myitem', { Username: username, Password: password })
      .then(
        (data) =>{
          console.log(">LoginPage >>processForm >>>store myitem successful")
        },          
        (error) => {
          console.log(">LoginPage >>processForm >>>store myitem failure : "+JSON.stringify(error));
        }          
      );

    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Signing in. Please wait...',
      dismissOnPageChange: true
    });

    setTimeout(() => {
      this.loader.dismiss();
    }, 60000);
    
    this.loader.present().then(() => {

      if (this.simMode == true) {
        WL.JSONStore.destroy({});
        this.gv.testMobile = false;
        console.log(">LoginPage >>processForm >>>Trigger authHandler.simlogin");
        this.authHandler.simlogin(username, password);
      } else {
        console.log(">LoginPage >>processForm >>>network connection ? "+this.hasNetworkConnection());
        if (this.hasNetworkConnection()) {
          WL.JSONStore.destroy({});
          this.gv.testMobile = false;
          console.log(">LoginPage >>processForm >>>Trigger authHandler.login");
          this.authHandler.login(username, password);
          this.gv.username = username;
          this.gv.password = password;
        
        } else {
          this.gv.testMobile = true;
          console.log(">LoginPage >>processForm >>>Trigger authHandler.offlineLogin");
          this.authHandler.offlineLogin(username, password);          
          console.log(">LoginPage >>processForm >>>trigger this.offlinegetUserDetail");
	  //this.gv.username = username;
          //this.gv.password = password;
          this.offlinegetUserDetail();          
        }
      }
    });
  }

  /*
   * Network Status Checking While login...
   */
  hasNetworkConnection() {
    console.log(">LoginPage >>hasNetworkConnection");    
    return this.network.type !== 'none' && this.network.type !== 'unknown';
  }

  /*
   * Checking to user login as Simulator or not...
   * @param event 
   */
  CheckboxClicked(event) {
    console.log(">LoginPage >>CheckboxClicked");
    console.log(">LoginPage >>CheckboxClicked >>>event.checked : "+event.checked);    
    if (event.checked) {
      this.simMode = true;
      this.gv.simulationInd = true;
    }
    else {
      this.simMode = false;
      this.gv.simulationInd = false;
    }
  }

  /*
   * User Details Re Initialization...
   */
  offlinegetUserDetail() {
    console.log(">LoginPage >>offlinegetUserDetail");
    let collectionInstance: WL.JSONStore.JSONStoreInstance = WL.JSONStore.get(Domains.UserDetails);
    collectionInstance.findAll({}).then((result) => {
      console.log(">LoginPage >>offlinegetUserDetail >>>result : "+JSON.stringify(result));
      this.userDetailItems = result;
      this.gv.personid = this.userDetailItems[0].json.person[0].personid;
      this.gv.employeetype = this.userDetailItems[0].json.person[0].employeetype;
      this.gv.department = this.userDetailItems[0].json.person[0].department;
      this.gv.ta0defsiteid = this.userDetailItems[0].json.defsite;
      this.gv.displayname = this.userDetailItems[0].json.person[0].displayname;
      this.gv.departContent = this.gv.department === 'RMR' ? 'lpc' : this.gv.department === 'MVHV' ? 'lpc' : this.gv.department === 'LV' ? 'lpc' : this.gv.department === 'SEALDETC' ? 'seal' : this.gv.department === 'SEALDETR' ? 'seal' : this.gv.department === 'SEALHQ' ? 'seal' : this.gv.department === 'SEAL' ? 'seal' : 'opc';
      this.gv.departmentCode = this.gv.department === 'RMR' ? '00' : this.gv.department === 'MVHV' ? '04' : this.gv.department === 'LV' ? '03' : this.gv.department === 'OPC' ? '02' : '01';
      if (this.gv.employeetype === 'SUPERVISOR' || this.gv.employeetype === 'EXECUTIVE') {
        this.gv.employeeTypeLogin = true;
      } else {
        this.gv.employeeTypeLogin = false;
      }
    },
    (error) => {
      console.log(">LoginPage >>offlinegetUserDetail >>>failure details :" + JSON.stringify(error));
    });
  }

  /*
   * Take it as a Json Storage Capable...
   * @param jsonData 
   * @param collectionName 
   */
  putIntoJsonStoring(jsonData, collectionName) {
    console.log(">LoginPage >>putIntoJsonStoring");
    console.log(">LoginPage >>putIntoJsonStoring >>>collectionName : "+collectionName);
    var options = {
      username: this.gv.loginUserId,
      password: this.gv.password,
      push: true,
      markDirty: false
    };
    return new Promise(resolve => {
      WL.JSONStore.get(collectionName).add(jsonData, options).then((success) => {
        resolve(success);
      },
      (failure) => {
        console.log(">LoginPage >>offlinegetUserDetail >>>data store failure : " + JSON.stringify(failure));
      });
    });
  }

  /*
   * Showing Dynamic Message to View Window...
   * @param alertTitle 
   * @param alertMessage 
   */
  showAlert(alertTitle, alertMessage) {
    console.log(">LoginPage >>showAlert");
    let prompt = this.alertCtrl.create({
      title: alertTitle,
      message: alertMessage,
      buttons: [
        {
          text: "Ok"
        }
      ]
    });
    prompt.present();
  }
}
