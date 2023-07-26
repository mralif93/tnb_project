import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from '../../../providers/common/global-function';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from './../../../providers/data-service/data-service';

/**
 * Generated class for the SealSweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-sweep',
  templateUrl: 'seal-sweep.html',
  providers: [DatePipe]
})
export class SealSweepPage {

  lead: String;
  assetnum: String;
  actstart: String = new Date().toISOString();
  options: BarcodeScannerOptions;
  lists = [];

  constructor(
    private alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private datePipe: DatePipe,
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    public appCtrl: App,
    public gv: GlobalVars,
    public gf: GlobalFunction
  ) {
    this.lead = this.gv.personid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealSweepPage');
  }

  /**
   * Method: Barcode Scanner
   * Created: Alif (08.07.2023)
   */
  scanner() {
    this.options = { prompt: "Scan Your Barcode"}
    this.barcodeScanner.scan(this.options).then(data => {
      this.assetnum = data.text.trim();
    });
  }

  /**
   * Method: Add into list to create work order
   * Created: Alif (08.07.2023)
   */
  addToList() {
    console.log(JSON.stringify(this.lists))
    // create object
    let obj = {
      "ASSETNUM": this.assetnum,
      "ACTSTART": this.datePipe.transform(this.actstart, 'yyyyMMdd'),
      "LEAD": this.lead,
      "DEPARTMENT": this.gv.department,
      "STATUS": false,
    }
    console.log(obj);
    // insert into array
    this.lists.push(obj);
    console.log(JSON.stringify(this.lists))
    // reset value
    this.assetnum = "";
  }

  createWorkOrder() {
    // check list
    if (this.lists.length > 0) {
      // show loading
      let loading = this.loadingCtrl.create({
        content: this.gv.loadingContent
      });
      loading.present();
      this.gf.loadingTimer(loading);
      
      // loop data list
      for (let i = 0; i < this.lists.length; i++) {
        // call service
        this.dataService.sealSweep(this.lists[i]).then((results: any) => {
          if (results.processStatus === 'success') {
            loading.dismiss();
            this.lists[i].STATUS = true;
            this.gf.displayToast('Success! ' + results.description.toString());
          } else {
            loading.dismiss();
            this.lists[i].STATUS = false;
            this.gf.displayToast('Failed! ' + results.description.toString());
          }
        });
      }

      // redirect to list within 2 seconds
      setTimeout(() => {
        let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
        newRootNav.push("SealSweepListPage", '');
      }, 2000)
    } else {
      this.gf.displayToast('Warning! Please add item into list before procceed.');
    }
  }

  /**
   * Navigated to Add Seal Sweep...
   */
  addSealSweep() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("AddsealsweepPage", '');
  }
}
