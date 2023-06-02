import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthHandlerProvider } from '../../providers/auth-handler/auth-handler';
import { LoginPage } from '../login/login';
import { GlobalVars } from '../../providers/common/global-vars';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authHandler: AuthHandlerProvider,
    private gv: GlobalVars,
    public appCtrl: App) {

    this.gv.initItems = [];
    this.gv.items = "";
    this.gv.loginUserId = "";
    this.gv.password = "";
    this.gv.newWorktype = [];

    this.gv.countALL = 0;
    this.gv.countZUDN = 0;
    this.gv.countZSRO = 0;
    this.gv.countZRPM = 0;
    this.gv.countZRPC = 0;
    this.gv.countZRMV = 0;
    this.gv.countZRCE = 0;
    this.gv.countZIST = 0;
    this.gv.countZISR = 0;
    this.gv.countZINR = 0;
    this.gv.countZINL = 0;
    this.gv.countZCER = 0;
    this.gv.countZMMR = 0;

    this.gv.assetDetailCount = 0;
    this.gv.alnDetailCount = 0;
    this.gv.userDetailCount = 0;
    this.gv.amiDetailCount = 0;
    this.gv.windDetailCount = 0;
    this.gv.snCodeDetailCount = 0;
    this.gv.materialDetailCount = 0;
    this.gv.userDetailCount = 0;
    this.gv.userStatusDetailCount = 0;


    if (this.gv.simulationInd == false) {
      this.authHandler.logout();
    }

    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    this.navCtrl.setRoot(LoginPage).then((success) => {
    });
  }
}
