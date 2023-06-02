import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavParams, App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { GlobalVars } from '../../../providers/common/global-vars';



/**
 * Generated class for the ChangeStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-status',
  templateUrl: 'change-status.html',
})
export class ChangeStatusPage {

  public userStatusValue1: any;
  public userStatusValue2: any;
  public userStatusValue3: any;
  public userStatusValue4: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public appCtrl: App,
    public params: NavParams,
    private gv: GlobalVars) {
    if (params.data != null && params.data != '' && params.data != 'undefined') {
      if ('ust1' == params.data.ustType) {

        this.userStatusValue1 = params.data.userSts;
        console.log(' user status 1: ' + this.userStatusValue1.name);
      } else if ('ust2' == params.data.ustType) {

        this.userStatusValue2 = params.data.userSts;
        console.log(' user status 1: ' + this.userStatusValue1.name);
        console.log(' user status 2: ' + this.userStatusValue2.name);
      } else if ('ust3' == params.data.ustType) {

        this.userStatusValue3 = params.data.userSts;
        console.log(' user status 3: ' + this.userStatusValue3.name);
      } else if ('ust4' == params.data.ustType) {

        this.userStatusValue4 = params.data.userSts;
        console.log(' user status 4: ' + this.userStatusValue4.name);
      }

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeStatusPage ---------------');
  }

  ionViewWillLoad() {
    var params = this.params;
  }


  callFromChildClass(ustType, userSts) {
    console.log('call from child class... ' + ustType + '  :  ' + userSts);

    if ('ust1' == ustType) {

      this.userStatusValue1 = userSts;
      console.log(' user status 1: ' + this.userStatusValue1.name);
    } else if ('ust2' == ustType) {

      this.userStatusValue2 = userSts;
      console.log(' user status 1: ' + this.userStatusValue1.name);
      console.log(' user status 2: ' + this.userStatusValue2.name);
    } else if ('ust3' == ustType) {

      this.userStatusValue3 = userSts;
      console.log(' user status 3: ' + this.userStatusValue3.name);
    } else if ('ust4' == ustType) {

      this.userStatusValue4 = userSts;
      console.log(' user status 4: ' + this.userStatusValue4.name);
    }


  }


  gotoUserSearchPage(userStatus: string) {
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    console.log('change status goto user search page  ' + userStatus);
    newRootNav.push('SearchStatusPage', { "parentPage": this, "ustValue": userStatus });
  }

  goBack() {
    this.navCtrl.pop();
  }


}
