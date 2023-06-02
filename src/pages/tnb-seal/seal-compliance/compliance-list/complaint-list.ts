import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { GlobalVars } from '../../../../providers/common/global-vars';
import { GlobalFunction } from "../../../../providers/common/global-function";
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from "../../../../providers/common/json-store/json-store-crud";
import { ComplianceListComponent } from '../../../../components/compliance-list/compliance-list';

/**
 * Generated class for the ComplaintListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaint-list',
  templateUrl: 'complaint-list.html',
})
export class ComplaintListPage extends ComplianceListComponent {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public gv: GlobalVars,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public gf: GlobalFunction,
    public loadingCtrl: LoadingController,
    public dataService: DataServiceProvider,
    public jsonStore: JsonStoreCrudProvider,
    public http: HttpClient,
    public modalCtrl: ModalController) {
    super(navCtrl, navParams, appCtrl, gv, toastCtrl, alertCtrl, gf, loadingCtrl, dataService, jsonStore, modalCtrl);
  }

}
