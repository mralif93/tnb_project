import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalVars } from '../../../providers/common/global-vars';


/**
 * Generated class for the DataValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-validation',
  templateUrl: 'data-validation.html',
})
export class DataValidationPage {
  selected_wmattribute: string;
  selected_indicator: string;

  hideShowRegister: boolean = true;

  item: any = '';
  multiAssetLocci: any = '';

  pIndex: number;
  maIndex: number;

  worktype: string = null; //SO Type

  //SO Fields Control
  //Device Status
  selected_devicests: string;
  showDeviceSts: boolean = true;
  selected_rpmind: string;
  showRpmind: boolean = false;
  selected_rmvind: string;
  showRmvind: boolean = true;
  selected_istind: string;
  showIstind: boolean = true;
  showWma: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gv: GlobalVars) {
    this.selected_wmattribute = 'N';
    this.selected_indicator = 'Y';
    //this.items = this.navParams.data;
    this.item = this.navParams.get('paramObj');
    this.multiAssetLocci = this.navParams.get('multiLocci');
    this.pIndex = this.navParams.get('pIndex');
    this.maIndex = this.navParams.get('maIndex')

    console.log('asset Details : ' + JSON.stringify(this.multiAssetLocci));

    if (this.item.json != null) {
      this.worktype = this.item.json.worktype;
    }
    //console.log("Data Validation constructor=" + JSON.stringify(this.item));

    if (this.worktype == 'ZRMV' || this.worktype == 'ZRCE' || this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSRO' || this.worktype == 'ZRPM' || this.worktype == 'ZCER' || this.worktype == 'ZSRP') {
      console.log("worktype==" + this.worktype);
      this.showDeviceSts = false;
    } if (this.worktype == 'ZIST' || this.worktype == 'ZISR' || this.worktype == 'ZRMV' || this.worktype == 'ZRCE' || this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSUR' || this.worktype == 'ZMMR') {
      this.showRpmind = true;
    } if (this.worktype == 'ZRMV' || this.worktype == 'ZRCE' || this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSRP') {
      this.showRmvind = false;
    } if (this.worktype == 'ZUDN' || this.worktype == 'ZRPC' || this.worktype == 'ZSRP') {
      this.showIstind = false;
    } if (this.worktype == 'ZINR' || this.worktype == 'ZINS' || this.worktype == 'ZINO' || this.worktype == 'ZINL' || this.worktype == 'ZSIN' || this.worktype == 'ZSIR' || this.worktype == 'ZINM') {
      this.showWma = false;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataValidationPage');
  }

  onHideShowRegister() {
    if (this.hideShowRegister) {
      this.hideShowRegister = false;
    } else {
      this.hideShowRegister = true;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

}
