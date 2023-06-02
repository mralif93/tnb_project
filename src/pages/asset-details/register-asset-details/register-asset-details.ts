import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Domains } from '../../../pojo/commonEnum/Domains';
import { DataServiceProvider } from '../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { GlobalVars } from '../../../providers/common/global-vars';
import { GlobalFunction } from '../../../providers/common/global-function';

@IonicPage()
@Component({
  selector: 'page-register-asset-details',
  templateUrl: 'register-asset-details.html',
})
export class RegisterAssetDetailsPage {

  public registerDetailItems: any;
  public isValid: boolean = false;

  constructor(
    private dataService: DataServiceProvider,
    private jsonStoreCrud: JsonStoreCrudProvider,
    private gv: GlobalVars,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public gf: GlobalFunction) {

    this.registerDetailItems = navParams;
    if (typeof this.registerDetailItems.data.json.ta0functionclass !== 'undefined') {
      var funClass = this.registerDetailItems.data.json.ta0functionclass;
      if (funClass === 'NMTR' || funClass === 'RMTR' || funClass === 'RMTR' || funClass === 'SMTR_CM') {
        this.isValid = true;

        this.registerDetailItems.data.json.ta0registers.sort(this.gf.dynamicSort("ta0registertype"));
      } else {
        this.isValid = false;
      }
    } else {
      this.isValid = false;
    }
  }

  /**
   * Update Asset Details from Maximo
   * @param attr 
   */
  updateAssetDetails(attr) {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.gf.loadingTimer(loading);

    this.dataService.updateAssetDetails(attr.data.json.assetnum, attr.data.json.siteid).then((results) => {

      var fullItems: any;
      fullItems = results;
      var obj = '{' + '"_id":' + attr.data._id + ',' + '"json":' + JSON.stringify(fullItems) + '}';
      var json = JSON.parse(obj);
      this.jsonStoreCrud.replaceWO(json, Domains.AssetDetails, false);
      loading.dismiss();
    },
      (error) => {
        loading.dismiss();
      });
  }

  /**
   * Navigated to Asset Details Page...
   */
  goBack() {
    this.navCtrl.pop();
  }
}
