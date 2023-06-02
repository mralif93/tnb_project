import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from '../../../providers/common/global-function';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from './../../../providers/data-service/data-service';

/**
 * Generated class for the SealsweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sealsweep',
  templateUrl: 'sealsweep.html',
  providers: [DatePipe]
})
export class SealsweepPage {

  public lead: String;
  public assetnum: String;
  public actstart: String = new Date().toISOString();
  public options: BarcodeScannerOptions;

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
  }

  ionViewDidLoad() {

    this.lead = this.gv.personid;
  }

  /**
   * Navigation to WO-Home page... 
   */
  goBack() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("WoHomePage", '');
  }

  /**
   * Submitting Save Options
   */
  submitCreateWorkorder() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    var jsonContent = this.setJson();
    this.dataService.sealSweep(jsonContent).then(results => {

      var respResult: any = results;
      if (respResult.processStatus === 'success') {
        let alert = this.alertCtrl.create({

          title: 'Success !',
          subTitle: respResult.description.toString(),
          buttons: [{
            text: 'Ok',
            handler: () => {
              loading.dismiss();
              // let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
              // newRootNav.push("WoHomePage", '');
              this.navCtrl.setRoot("WoHomePage");
            }
          }]
        });
        alert.present();
      }
      else {

        let alert = this.alertCtrl.create({

          title: 'Error !',
          subTitle: respResult.description.toString(),
          buttons: [{
            text: 'Ok',
            handler: () => {

              loading.dismiss();
            }
          }]
        });
        alert.present();
      }
    });
  }

  /**
   * Create Valid Json for save and submitting...
   * @param saveType 
   */
  setJson() {

    var resValue = {
      "ASSETNUM": this.assetnum,
      "ACTSTART": this.datePipe.transform(this.actstart, 'yyyyMMdd'),
      "LEAD": this.lead,
      "DEPARTMENT": this.gv.department
    }
    return resValue;
  }

  /**
   * BarCode Tab Scanner...
   */
  barcodeScan() {

    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.assetnum = barcodeData.text.trim();
      });
  }


  /**
   * Display Message Function
   * @param message 
   */
  displayErrorAlert(message) {

    let alert = this.alertCtrl.create({
      title: 'Alert !',
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
        }
      }]
    });
    alert.present();
  }

}
