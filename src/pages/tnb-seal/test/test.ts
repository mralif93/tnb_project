import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { GlobalFunction } from "../../../providers/common/global-function";
import { GlobalVars } from "../../../providers/common/global-vars";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  dateselect;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    public popoverCtrl: PopoverController,

  ) {
  }

  ionViewDidLoad() {
    debugger;
    console.log('ionViewDidLoad TestPage');
  }
  ionViewDidEnter() {
    debugger;
    console.log("This event will fire, whether it was the first load or a cached page.");
  }

  presentPopover(myEvent, popType) {
    debugger;
    var data = { 'parentValue': 'kanna' };
    let popover = this.popoverCtrl.create('SdPopupPage',
      {
        'parentWoValue': this,
        'popType': popType,
        'dataType': 'complaints',
      });
    popover.present({
      ev: myEvent
    });
  }

  showConfirm(datevalue, popType) {
    if (popType === 'dateSelect') {
      this.dateselect = datevalue;
    }
  }
}
