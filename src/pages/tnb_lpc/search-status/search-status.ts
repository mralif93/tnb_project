import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { GlobalVars } from '../../../providers/common/global-vars';



/**
 * Generated class for the SearchStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-status',
  templateUrl: 'search-status.html',
})
export class SearchStatusPage {

  public userStatus: any;
  public ustValue: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appCtrl: App, public params: NavParams, private gv: GlobalVars) {

    this.ustValue = params.data.ustValue;
    console.log(' search status page ust value : ' + this.ustValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchStatusPage');
    this.declareUserStatus();
  }

  declareUserStatus(): void {
    this.userStatus = [{
      name: 'WMAT',
      description: 'Wrong device attributes'
    },
    {
      name: 'TRANS',
      description: 'Transfer to RAS'
    },
    {
      name: 'TCS3',
      description: 'Wrong tariff'
    },
    {
      name: 'TCS2',
      description: 'Wrong business code'
    },
    {
      name: 'TCS1',
      description: 'Address incorrect'
    },
    {
      name: 'NMIR',
      description: 'Non-Device Irregularities'
    },
    {
      name: 'MSOK',
      description: 'Metering System Ok'
    },
    {
      name: 'WMAT',
      description: 'Wrong device attributes'
    },
    {
      name: 'WMAT',
      description: 'Wrong device attributes'
    },
    {
      name: 'WMAT',
      description: 'Wrong device attributes'
    },
    {
      name: 'KIVD',
      description: 'Pending Shut down'
    }
    ]
  }

  filterUserStatus(param: any): void {
    this.declareUserStatus();

    let val: string = param;

    if (val.trim() !== '') {
      this.userStatus = this.userStatus.filter((item) => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
      })
    }
  }

  goToStatusChangePage(userSts) {
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    this.navParams.get("parentPage").callFromChildClass(this.ustValue, userSts);
    this.navCtrl.pop();
  }

  goBack() {
    this.navCtrl.pop();
  }


}
