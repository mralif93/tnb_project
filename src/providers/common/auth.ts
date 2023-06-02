import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";
import { GlobalVars } from "./global-vars";

import { Events } from "ionic-angular";

import { User } from "./../../pojo/User";

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
  token: any;
  userName: string;
  userId: string;
  deviceToken: {
    email: string;
    applicationId: string;
    currentStatus: string;
    deviceToken: string;
    deviceType: string;
    loginType: string;
    username: String;
    status: string;
    orgId: string;
  };
  LOCAL_TOKEN_KEY: string = "CondoSessionTokenKey";
  constructor(public gv: GlobalVars, public events: Events) {
    console.log("Hello Auth Provider");
  }

  isAuthorized() {
    return new Promise(resolve => {
      this.token = JSON.parse(
        window.localStorage.getItem(this.LOCAL_TOKEN_KEY)
      );
      if (this.token) {
        console.log("isAuthorized emailId::" + this.token.emailId);
        this.gv.setLoginUserId(this.token.emailId);
        this.gv.setLoginUser(this.token);
        this.gv.setOrgId(this.token.orgId);
        this.gv.setLoginNickName(this.token.nickname);
        this.gv.setAccId(this.token.accid);
        this.gv.setPdpa(this.token.pdpa);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
  isHaveDeviceToken() {
    this.deviceToken = JSON.parse(
      window.localStorage.getItem(this.gv.deviceTokenId)
    );
    if (this.deviceToken) {
    } else {
      this.deviceToken = {
        email: this.gv.loginUserId,
        applicationId: this.gv.senderID,
        currentStatus: "Y",
        deviceToken: this.gv.deviceTokenId,
        deviceType: this.gv.deviceName,
        loginType: "M",
        username: this.gv.name,
        status: "New",
        orgId: this.gv.orgId
      };
      if (this.gv.deviceTokenId) {
        // this.condoServices.doInsertUpdateDeviceToken(this.deviceToken).subscribe(
        //   data => {
        //     this.deviceToken = data;
        //     console.log("data._body::" + this.deviceToken.status);
        //     if (this.deviceToken.status == 'Y' && this.gv.loginUserId) {
        //       window.localStorage.setItem(this.gv.deviceTokenId, JSON.stringify(this.deviceToken));
        //     } else {
        //     }
        //   }, error => {
        //     console.log("Oooops!");
        //   });
      }
    }
  }
  storeUserCredentials(token) {
    window.localStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
    console.log("storeUserCredentials emailId::" + token.emailId);
    this.gv.setLoginUserId(token.emailId);
    this.gv.setLoginUser(token);
    this.gv.setUsername(token.userName);
    this.gv.setOrgId(token.orgId);
    this.gv.setLoginNickName(token.nickname);
    this.gv.setAccId(token.accid);
    this.gv.setPdpa(token.pdpa);
    console.log("token 1::" + token.pdpa);
    this.events.publish("user:login", token);
    this.isHaveDeviceToken();
  }

  updateProfileImage(imageName) {
    this.token = JSON.parse(window.localStorage.getItem(this.LOCAL_TOKEN_KEY));
    this.token.userPicUrlProfile = imageName + "_profile.jpg";
    this.token.userPicUrlNormal = imageName + "_nor.jpg";
    this.gv.setLoginUser(this.token);
    window.localStorage.setItem(
      this.LOCAL_TOKEN_KEY,
      JSON.stringify(this.token)
    );
  }

  destroyUserCredentials() {
    window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
    window.localStorage.removeItem(this.gv.deviceTokenId);
  }

  doLogIn(userName, password) {

    console.log(' login to auth ');
    debugger;
    var user = null;
    if (userName === "supervisor") {
      user = {
        emailId: "supervisor3ms@dssb.com.my",
        userName: userName,
        primaryRole: "supervisor",
        status: "success",
        description: "Supervisor assign job to team leads"
      };
    } else if (userName == "teamlead") {
      user = {
        emailId: "teamlead.3ms@dssb.com.my",
        userName: userName,
        primaryRole: "teamlead",
        status: "success",
        description: "Team Lead proceed work order"
      };
    } else {
      user = {
        emailId: "developer.3ms@dssb.com.my",
        userName: userName,
        primaryRole: "developer",
        status: "success",
        description: "developer team testing user"
      };
    }

    return new Promise(resolve => {
      resolve(<User>user);
    });
  }
}
