import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { GlobalVars } from '../../../../providers/common/global-vars';


/**
 * Generated class for the SealLpcMvhvRasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-lpc-mvhv-ras',
  templateUrl: 'seal-lpc-mvhv-ras.html',
})
export class SealLpcMvhvRasPage {

  selected_max: string;
  showMax: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController, private gv: GlobalVars
  ) {



    this.selected_max = 'Y';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealLpcMvhvRasPage');
  }


  hideShowMaxCTLoading() {
    console.log('came inside to hideShowMaxCTLoading ..' + this.showMax);
    if (this.showMax) {
      this.showMax = false;
    } else {
      this.showMax = true;
    }
  }
  goToServiceExecutionPage() {
    /*  let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
     newRootNav.push('ServiceExecutionPage', ''); */
    //this.navCtrl.push('service-execution');
    this.navCtrl.push('ServiceExecutionPage');
  }
  presentPopover(myEvent, popType) {
    debugger;
    var data = { 'parentValue': 'kanna' };
    let popover = this.popoverCtrl.create('SdPopupPage',
      {
        'parentWoValue': this,
        'popType': popType,
        'dataType': 'sealMVHV',
        // 'currentDate': this.tempCeassation.date3,
      });
    popover.present({
      ev: myEvent
    });
  }

  showConfirm(datevalue, popType) {
  }

  addEviItem() {
    debugger;
   /*  if (typeof (this.evidenceCollect.evidenceItem) === 'undefined') {
      this.evidenceCollect.evidenceItem = [];
    }

    if (this.evidenceCollect.evidenceItem.length <= 9) {
      //console.log("Length meterCoverVal..." + this.evidenceCollect.evidenceItem.length);
      let eviVal = {
        eviItemVal: '',
        eviTempModiDmg: ''
      }
      this.evidenceCollect.evidenceItem.push(eviVal);
      if (this.evidenceCollect.evidenceItem == 10) {
        this.shoeEviItem = false;
      }
    } */
  }

  goBack() {
    this.navCtrl.pop();
  }

}
