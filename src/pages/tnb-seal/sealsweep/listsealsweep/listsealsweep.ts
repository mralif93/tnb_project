import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GlobalVars } from './../../../../providers/common/global-vars';
import { DataServiceProvider } from './../../../../providers/data-service/data-service';


/**
 * Generated class for the ListsealsweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listsealsweep',
  templateUrl: 'listsealsweep.html',
})
export class ListsealsweepPage {

  public refSealSegment: string = 'MSOK';
  public gitItem: any = [];

  constructor(
    public appCtrl: App,
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider, 
    private gv: GlobalVars,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsealsweepPage');
    this.fetchSealSweepMSOK();
  }

  /**
   * Fetch the list Seal Sweep...
   */
  fetchSealSweepMSOK() {

    var ta4GetMySweepDetail: String = "null";
    this.dataService.fetchSealSweepMSOKList(ta4GetMySweepDetail).then(results => {
      
      var respResult: any = results;
      this.gitItem = JSON.parse(respResult.respObject);
    });
  }

  /**
   * Search Functionality for Sear MS OK
   */
  filterSealMSOK(param: any): void {

  }

  /**
   * Navigated to Add Seal Sweep...
   */
  addSealSweep() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("AddsealsweepPage", '');
  }

  /**
   * Tab Selection for Seal Segment MSOK and MSNOTOK...
   */
  sealSegClick() {

    let refresh = this.loadingCtrl.create({
      content: 'Refreshing...'
    });
    refresh.present();
    if (this.refSealSegment == 'MSOK') {

      refresh.dismiss();
    }
    if (this.refSealSegment == 'MSNOTOK') {
  
      refresh.dismiss();
    }
  }

  /**
   * Search Functionality for Sear MSNOTOK
   */
  filterSealMSNOTOK(param: any): void {

  }
}
