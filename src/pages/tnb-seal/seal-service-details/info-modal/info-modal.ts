import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FunctionClass } from '../../../../pojo/commonEnum/FunctionClass';
import { GlobalFunction } from '../../../../providers/common/global-function';
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';

/**
 * Generated class for the InfoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-modal',
  templateUrl: 'info-modal.html',
})
export class InfoModalPage {

  public functClass = FunctionClass;
  public dCons = DeviceConstants;
  private items: any;
  private itemsOri: any;

  constructor(private gf: GlobalFunction, public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    /** Assigning Data from Previous Page */
    this.items = this.navParams.get("items");
    console.log(JSON.stringify(this.items));

    /** Copy Clone into Original */
    this.itemsOri = this.items;

    /**
     * Description: Organize multiassetlocci/asset in every feeder.
     * Created: Alif (23.01.2020)
     */
    if (typeof (this.items.json.ta0feeder) != 'undefined' && this.items.json.ta0feeder !== null && this.items.json.ta0feeder !== '') {
      var temp_multiassetlocci: any = [];

      for (var i = 0; i < this.items.json.ta0feeder.length; i++) {
        if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined" && this.items.json.ta0feeder[i].multiassetlocci !== null && this.items.json.ta0feeder[i].multiassetlocci !== "") {
          // if ()
        }
      }

      if (typeof (this.items.json.ta0feeder) != 'undefined' && this.items.json.ta0feeder !== null && this.items.json.ta0feeder !== '') {
        // Sorting Feeder
        this.items.json.ta0feeder.sort(this.gf.dynamicSort("description"));

        for (var i = 0; i < this.items.json.ta0feeder.length; i++) {
          if (typeof (this.items.json.ta0feeder[i].multiassetlocci) !== "undefined" && this.items.json.ta0feeder[i].multiassetlocci !== null && this.items.json.ta0feeder[i].multiassetlocci !== "") {
            // sorting multiassetlocci
            this.items.json.ta0feeder[i].multiassetlocci.sort(this.gf.dynamicSort("ta0functionclass"));
          }
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoModalPage');
  }

  dismissModal() {
    this.itemsOri = this.items;
    this.viewCtrl.dismiss({ items: this.itemsOri });
  }

}
