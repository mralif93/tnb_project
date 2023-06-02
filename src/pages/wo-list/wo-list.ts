import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVars } from '../../providers/common/global-vars';

@IonicPage()
@Component({
  selector: 'page-wo-list',
  templateUrl: 'wo-list.html',
})
export class WoListPage {

  public worktypeList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private gv: GlobalVars) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoListPage');

    if (this.gv.departContent === 'seal') {
      this.worktypeList = [
        'ZISO',
        'ZISP',
        'ZIST',
        'ZDCN',
        'ZRCN',
        // 'ZISR',
        // 'ZRCE',
        'ALL'
      ];
    } else if (this.gv.departContent === 'lpc') {
      this.worktypeList = [
        'ZINL',
        'ZINR',
        'ZISR',
        'ZIST',
        'ZRCE',
        'ZRMV',
        'ZRPC',
        'ZSRO',
        'ZUDN',
        'ZMMR',
        'ALL'
      ];
    } else {
      this.worktypeList = [
        'ZINL',
        'ZINR',
        'ZISR',
        'ZIST',
        'ZRCE',
        'ZRMV',
        'ZRPC',
        'ZSRO',
        'ZUDN',
        'ZMMR',
        'ALL'
      ];
    }
  }



}
