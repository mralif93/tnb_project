import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the DeviceReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-return',
  templateUrl: 'device-return.html',
})
export class DeviceReturnPage {

  public item: any = [];
  
  constructor(
    public navCtrl: NavController, 
    public appCtrl: App,
    public params: NavParams) {

      this.item = this.params.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceReturnPage');
  }

  goBack() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("CreateNotePage", "");
  }

}
