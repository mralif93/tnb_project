import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVars } from '../../../../providers/common/global-vars';


/**
 * Generated class for the SealLpcLvRasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-lv-ras',
  templateUrl: 'seal-lv-ras.html',
})
export class SealLvRasPage {
  public busbar = { "busbarR": null, "busbarY": null, "busbarB": null, "busbarTtl": null };
  public display = { "meterR": null, "meterY": null, "meterB": null, "meterTtl": null };
  public ct = { "ctR": null, "ctY": null, "ctB": null, "ctTtl": null };
  public meter = { "mtrR": null, "mtrY": null, "mtrB": null, "mtrTtl": null };
  public ratio = { "ctRatioR": null, "ctRatioY": null, "ctRatioB": null };
  public currentDiff = { "primary": null, "secondary": null };
  error ={"err1":null, "err2":null,"err3":null, "errAvg":null};

  selected_ctRationDiff:string;
  magnet_disp:string;
  ctRatioNCurrentDisp: boolean = true;
  mangnetDisp: boolean = true;

  public isReadonly:boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, private gv: GlobalVars) {

    this.selected_ctRationDiff = 'Y';
    this.magnet_disp = 'Y';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealLpcLvRasPage');
  }

  primaryTotal() {
    console.log("enter primary total method");
    this.busbar.busbarTtl = ((+this.busbar.busbarR + +this.busbar.busbarY + +this.busbar.busbarB));
    console.log("total for busbar is:" + this.busbar.busbarTtl);

    this.display.meterTtl = (+this.display.meterR + +this.display.meterY + +this.display.meterB);
    console.log("Total for display meter:" + this.display.meterTtl);

    this.currentDiff.primary = (((this.display.meterTtl - this.busbar.busbarTtl) / this.busbar.busbarTtl) * 100);

  }

  secondaryTotal() {
    console.log("enter secondary method");
    this.ct.ctTtl = (+this.ct.ctR + +this.ct.ctY + +this.ct.ctB);
    console.log("the total for ct is: " + this.ct.ctTtl);

    this.ctRatioCalculation();

    this.meter.mtrTtl = (+this.meter.mtrR + +this.meter.mtrY + +this.meter.mtrB);
    console.log("total for meter second is:" + this.meter.mtrTtl);

    this.currentDiff.secondary = (((this.meter.mtrTtl - this.ct.ctTtl) / this.ct.ctTtl) * 100);

  }

  ctRatioCalculation() {
    console.log("entered ct calculation method")
    this.ratio.ctRatioR = ((this.busbar.busbarR / this.ct.ctR) * 5);
    console.log("the ct ratio for red is:" + this.ratio.ctRatioR);

    this.ratio.ctRatioY = ((this.busbar.busbarY / this.ct.ctY) * 5);
    console.log("the ct ratio for yellow is: " + this.ratio.ctRatioY);

    this.ratio.ctRatioB = ((this.busbar.busbarB / this.ct.ctB) * 5);
    console.log("the ct ratio for blue is: " + this.ratio.ctRatioB);
  }

  ratioAvg(){
    console.log("enter ratio average");
this.error.errAvg =((+this.error.err1 + +this.error.err2 + +this.error.err3)/3);
console.log("the errAvg is"+this.error.errAvg);
  }

  hideCtRatioNComparisionTest() {
    console.log("Go method hide Ct Ratio N Comparision Test");
    if (this.ctRatioNCurrentDisp) {
      this.ctRatioNCurrentDisp = false;
    } else {
      this.ctRatioNCurrentDisp = true;
    }
  }

  hideMagnetTest(){
    console.log("method hide mangnet test");
    if(this.mangnetDisp){
      this.mangnetDisp = false;
    } else{
      this.mangnetDisp = true;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

}
