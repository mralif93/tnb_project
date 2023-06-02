/// <reference path="../../../plugins/cordova-plugin-mfp/typings/worklight.d.ts" />

import { Injectable } from '@angular/core';
import { JsonStoreHandlerProvider } from '../json-store-handler/json-store-handler';
import { Domains } from '../../pojo/commonEnum/Domains';
import { GlobalVars } from "./../../providers/common/global-vars";
import { JsonStoreStructureProvider } from "./../../providers/common/json-store/json-store-structure";
import { DataServiceProvider } from "./../../providers/data-service/data-service";
import { JsonStoreCrudProvider } from './../../providers/common/json-store/json-store-crud';

@Injectable()
export class AuthHandlerProvider {

  securityCheckName = 'UserLogin';
  userLoginChallengeHandler;
  initialized = false;
  username = null;
  timeBegin = null;
  timeEnd = null;

  isChallenged = false;
  handleChallengeCallback = null;
  loginSuccessCallback = null;
  loginFailureCallback = null;

  constructor(    
    private jsonStoreHandler: JsonStoreHandlerProvider,
    public jsonStoreStructure: JsonStoreStructureProvider,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public dataService: DataServiceProvider,
    public gv: GlobalVars
  ) {
    console.log(">AuthHandlerProvider >>constructor");
  }

  init() {
    console.log(">AuthHandlerProvider >>init");
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    console.log(">AuthHandlerProvider >>init >>>securityCheckName : "+this.securityCheckName);
    this.userLoginChallengeHandler = WL.Client.createSecurityCheckChallengeHandler(this.securityCheckName);
    this.userLoginChallengeHandler.handleChallenge = this.handleChallenge.bind(this);
    this.userLoginChallengeHandler.handleFailure = this.handleFailure.bind(this);
  }

  setHandleChallengeCallback(onHandleChallenge) {
    console.log(">AuthHandlerProvider >>setHandleChallengeCallback");
    this.handleChallengeCallback = onHandleChallenge;
  }

  setLoginSuccessCallback(onSuccess) {
    console.log(">AuthHandlerProvider >>setLoginSuccessCallback");
    this.loginSuccessCallback = onSuccess;
  }

  setLoginFailureCallback(onFailure) {
    console.log(">AuthHandlerProvider >>setLoginFailureCallback");
    this.loginFailureCallback = onFailure;
  }

  handleChallenge(challenge) {
    console.log(">AuthHandlerProvider >>handleChallenge");
    this.isChallenged = true;
    if (challenge.errorMsg !== null && this.loginFailureCallback != null) {
      var statusMsg = challenge.errorMsg + ', Remaining attempts = ' + challenge.remainingAttempts;
      console.log(">AuthHandlerProvider >>handleChallenge >>>trigger this.loginFailureCallback");
      this.loginFailureCallback(statusMsg);
    } else if (this.handleChallengeCallback != null) {
      console.log(">AuthHandlerProvider >>handleChallenge >>>trigger this.handleChallengeCallback");
      this.handleChallengeCallback();
    } else {
      console.log(">AuthHandlerProvider >>handleChallenge >>> handleChallengeCallback not set!")
    }
  }

  handleSuccess(data) {
    console.log(">AuthHandlerProvider >>handleSuccess");
    this.isChallenged = false;
    if (this.loginSuccessCallback != null) {
      console.log(">AuthHandlerProvider >>handleSuccess >>>trigger this.loginSuccessCallback");
      this.loginSuccessCallback();
    } else {
      console.log(">AuthHandlerProvider >>handleSuccess >>>loginSuccessCallback not set!");
    }
  }

  handleFailure(error) {
    console.log(">AuthHandlerProvider >>handleFailure >>>error : "+JSON.stringify(error));
    this.isChallenged = false;
    if (this.loginFailureCallback != null) {
      console.log(">AuthHandlerProvider >>handleFailure >>>trigger this.loginFailureCallback");
      this.loginFailureCallback(error.failure);
    } else {
      console.log(">AuthHandlerProvider >>handleFailure >>>loginFailureCallback not set!");
    }
  }

  checkIsLoggedIn() {
    console.log(">AuthHandlerProvider >>checkIsLoggedIn");
    WLAuthorizationManager.obtainAccessToken('UserLogin').then(
      (accessToken) => { 
        console.log(">AuthHandlerProvider >>checkIsLoggedIn >>>obtainAccessToken onSuccess");
      }, (error) => { 
        console.log(">AuthHandlerProvider >>checkIsLoggedIn >>>obtainAccessToken onFailure : "+JSON.stringify(error));
      });
  }

  /*
   * Set Global Variable Details...
   */
  setGlobalVariableDetails() {
    debugger;
    console.log(">AuthHandlerProvider >>setGlobalVariableDetails");
    return new Promise((resolve, reject) => {
      console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>trigger this.jsonStoreStructure.initUserDetails");
      this.jsonStoreStructure.initUserDetails().then((success) => {
        console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>trigger this.dataService.loadUserDetailsLoadJava");
        this.dataService.loadUserDetailsLoadJava().then((results) => {          
          var fullItems: any;
          fullItems = results;
          console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>trigger this.jsonStoreCurd.removeCollection");
          this.jsonStoreCurd.removeCollection(Domains.UserDetails);
          console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>trigger this.jsonStoreStructure.initUserDetails");
          this.jsonStoreStructure.initUserDetails().then((success) => {
            console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>trigger this.putIntoJsonStoring");
            console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>Domains.UserDetails");
            this.putIntoJsonStoring(fullItems.member, Domains.UserDetails).then((storeResult) => { 
              this.gv.ta0defsiteid = fullItems.member[0].defsite;
              this.gv.personid = fullItems.member[0].person[0].personid;
              this.gv.employeetype = fullItems.member[0].person[0].employeetype;
              this.gv.displayname = fullItems.member[0].person[0].displayname;
              this.gv.department = fullItems.member[0].person[0].department;
              this.gv.departContent = this.gv.department === 'RMR' ? 'lpc' : this.gv.department === 'MVHV' ? 'lpc' : this.gv.department === 'LV' ? 'lpc' : this.gv.department === 'SEALDETC' ? 'seal' : this.gv.department === 'SEALDETR' ? 'seal' : this.gv.department === 'SEALHQ' ? 'seal' : this.gv.department === 'SEAL' ? 'seal' : this.gv.department === 'SB' ? 'opc' : 'opc';
              this.gv.departmentCode = this.gv.department === 'RMR' ? '00' : this.gv.department === 'MVHV' ? '04' : this.gv.department === 'LV' ? '03' : this.gv.department === 'OPC' ? '02' : '01';
              
              console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>personid : "+this.gv.personid);
              console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>employeetype : " + this.gv.employeetype);
              console.log(">AuthHandlerProvider >>setGlobalVariableDetails >>>department : " + this.gv.department);
                            
              if (this.gv.employeetype === 'SUPERVISOR' || this.gv.employeetype === 'EXECUTIVE') {
                this.gv.employeeTypeLogin = true;
              } else {
                this.gv.employeeTypeLogin = false;
              }
            });
          });
          resolve(success);
        });
      },
        (failure) => {
          reject();
        });
    });
  }

  /*
   * Take it as a Json Storage Capable...
   * @param jsonData 
   * @param collectionName 
   */
  putIntoJsonStoring(jsonData, collectionName) {
    debugger;
    console.log(">AuthHandlerProvider >>putIntoJsonStoring");
    console.log(">AuthHandlerProvider >>putIntoJsonStoring >>>collectionName : " + collectionName);
    var options = {
      username: this.gv.loginUserId,
      password: this.gv.password,
      push: true,
      markDirty: false
    };
    return new Promise(resolve => {
      WL.JSONStore.get(collectionName).add(jsonData, options).then((success) => {
        console.log(">AuthHandlerProvider >>putIntoJsonStoring >>>data store success : " + JSON.stringify(success));
        resolve(success);
      },
      (failure) => {
        console.log(">AuthHandlerProvider >>putIntoJsonStoring >>>data store failure : " + JSON.stringify(failure));
      });
    });
  }

  /*
   * Simulator Login...
   * @param username 
   * @param password 
   */
  simlogin(username, password) {
    console.log(">AuthHandlerProvider >>simlogin");
    this.isChallenged = false;
    console.log(">AuthHandlerProvider >>putIntoJsonStoring >>>trigger this.jsonStoreHandler.initCollections");
    this.jsonStoreHandler.initCollections(username, password, true).then(() => {
      console.log(">AuthHandlerProvider >>putIntoJsonStoring >>>trigger this.setGlobalVariableDetails");
      this.setGlobalVariableDetails().then(() => {
        console.log(">AuthHandlerProvider >>putIntoJsonStoring >>>trigger this.loginSuccessCallback");
        this.loginSuccessCallback();
      });
    });
  }

  /*
   * Online Login Functionality...
   * @param username 
   * @param password 
   */
  login(username, password) {
    console.log(">AuthHandlerProvider >>login");
    this.timeBegin = performance.now();
    this.username = username;
    console.log(">AuthHandlerProvider >>login >>>trigger userLoginChallengeHandler.handleSuccess");
    this.userLoginChallengeHandler.handleSuccess = () => {
      this.isChallenged = false;
      this.timeEnd = performance.now();
      console.log(">AuthHandlerProvider >>login >>>Time spent in server login = " + (this.timeEnd - this.timeBegin) + " ms.");
      console.log(">AuthHandlerProvider >>login >>>trigger jsonStoreHandler.initCollections");
      this.jsonStoreHandler.initCollections(username, password, true).then((success) => {
        console.log(">AuthHandlerProvider >>login >>>trigger this.setGlobalVariableDetails");
        this.setGlobalVariableDetails().then(() => {
          console.log(">AuthHandlerProvider >>login >>>trigger this.loginSuccessCallback");
          this.loginSuccessCallback();
        });
      });
    };
    if(this.isChallenged) {
      console.log(">AuthHandlerProvider >>login >>>trigger userLoginChallengeHandler.submitChallengeAnswer");
      this.userLoginChallengeHandler.submitChallengeAnswer({ 'username': username, 'password': password });
    } else {
      console.log(">AuthHandlerProvider >>login >>>trigger WLAuthorizationManager.login");
      WLAuthorizationManager.login(this.securityCheckName, { 'username': username, 'password': password }).then(
        (success) => {
          console.log(">AuthHandlerProvider >>login >>>AuthHandler login success");
        }, 
        (failure) => { 
          console.log(">AuthHandlerProvider >>login >>>AuthHandler login failure : "+JSON.stringify(failure));
          this.loginFailureCallback(failure.errorMsg); 
        }
      );
    }
  }

  /*
   * Offline Functionality...
   * @param username 
   * @param password 
   */
  offlineLogin(username, password) {
    console.log(">AuthHandlerProvider >>offlineLogin");
    console.log(">AuthHandlerProvider >>offlineLogin >>>trigger this.jsonStoreHandler.initCollections");
    this.jsonStoreHandler.initCollections(username, password, false).then((success) => {
      console.log(">AuthHandlerProvider >>offlineLogin >>>trigger this.jsonStoreHandler.previousLoginExists");
      this.jsonStoreHandler.previousLoginExists().then(
        (success) => {          
          console.log(">AuthHandlerProvider >>offlineLogin >>>offlineLogin success");
          this.loginSuccessCallback();
        },
        (failure) => {
          this.jsonStoreHandler.destroyCollections(username);
          console.log(">AuthHandlerProvider >>offlineLogin >>>AuthHandler offlineLogin failed. First time login must be done when internet connection is available");
          this.loginFailureCallback('First time login must be done when internet connection is available');
        });
      },
      (failure) => {        
        this.jsonStoreHandler.destroyCollections(username);
        console.log(">AuthHandlerProvider >>offlineLogin >>>AuthHandler offlineLogin failed. Invalid username/password\n", JSON.stringify(failure));
        this.loginFailureCallback('Invalid username/password');
      });
  }
  

  /*
   * Logout Functionality...
   */
  logout() {
    console.log(">AuthHandlerProvider >>logout");
    console.log(">AuthHandlerProvider >>logout >>>trigger WLAuthorizationManager.logout");
    WLAuthorizationManager.logout(this.securityCheckName)
    .then(
      (success) => {
        console.log(">AuthHandlerProvider >>logout >>>AuthHandler logout success");
      },
      (failure) => {
        console.log(">AuthHandlerProvider >>logout >>>AuthHandler logout failure: " + JSON.stringify(failure));
      }
    );    
  }
}

