import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';

import { MultiAssetLocci } from './../../../../pojo/MultiAssetLocci';


/**
 * Generated class for the DeviceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: "deviceDetails", segment: "deviceDetails_lpc" })
@Component({
  selector: 'page-device-details',
  templateUrl: 'device-details.html',
})
export class DeviceDetailsPage {
  item: any;
  indexVal: number;

  public multiAssetLocci: MultiAssetLocci = null;

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
    this.item = this.navParams.get('paramObj');
    this.indexVal = this.navParams.get('paramIndex');
    this.multiAssetLocci = new MultiAssetLocci();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceDetailsPage');
  }

  goToGetDeviceDetails(item) {

    //console.log('this.deviceSerialNo' + this.multiAssetLocci.tnb_device);
    //console.log('this.tnb_device_description' + this.multiAssetLocci.tnb_device_description);

    console.log('index : '+this.indexVal);

    console.log('came to go to service execution Feeder function.'+JSON.stringify(this.item.json.tnb_feeder[this.indexVal] ));
    debugger;
    console.log('Feeder Asset '+JSON.stringify(this.item.json.tnb_feeder[this.indexVal] ));
    if (this.item.json.tnb_feeder[this.indexVal].multiAssetLocci != null ) {
      console.log('Not null ');
      this.item.json.tnb_feeder[this.indexVal].multiAssetLocci.push(this.multiAssetLocci);
    } else {
      console.log('equal null ');
      this.item.json.tnb_feeder[this.indexVal].multiAssetLocci = new Array<MultiAssetLocci>();
      this.item.json.tnb_feeder[this.indexVal].multiAssetLocci.push(this.multiAssetLocci);
    }
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push('ServiceExecutionPage', this.item);
  }

  goBack() {
    this.navCtrl.pop();
  }

}
