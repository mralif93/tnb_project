import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { GlobalVars } from '../../../providers/common/global-vars';

@IonicPage()
@Component({
  selector: 'page-wo-popup',
  templateUrl: 'wo-popup.html',
})
export class WoPopupPage {

  constructor(
    public viewCtrl: ViewController, 
    public navCtrl: NavController, 
    public gv: GlobalVars,
    public navParams: NavParams) {
  }
  
  /**
   * Back to Old Page...
   */
  backup() {
    let data = this.navParams.get('data');
    this.viewCtrl.dismiss();
  }

  /**
   * Passing Variable to Parent Page wo-home...
   * @param typeVal 
   */
  close(typeVal) {
    var parent = this.navParams.get('parentWoValue');
    parent.showConfirm(typeVal);
    this.viewCtrl.dismiss();
  }
}
