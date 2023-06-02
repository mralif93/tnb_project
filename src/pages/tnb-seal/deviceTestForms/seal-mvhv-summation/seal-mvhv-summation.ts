import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalFunction } from '../../../../providers/common/global-function';
import { GlobalVars } from '../../../../providers/common/global-vars';

/**
 * Generated class for the SealMvhvSummationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-mvhv-summation',
  templateUrl: 'seal-mvhv-summation.html',
})
export class SealMvhvSummationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private gf: GlobalFunction, private gv: GlobalVars) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealMvhvSummationPage');
  }

}
