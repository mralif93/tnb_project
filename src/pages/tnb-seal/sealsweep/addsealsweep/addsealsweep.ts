import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from "../../../../providers/data-service/data-service";
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the AddsealsweepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addsealsweep',
  templateUrl: 'addsealsweep.html',
})
export class AddsealsweepPage {

  private options: BarcodeScannerOptions;
  private actualstart: string;
  private actualfinish: string;
  public refSealSegment: string = 'MSOK';
  public ta4serialnum: any;
  public ta4sweepline: any = [];
  public startDate: String;
  public startTime: String;
  public showDeviceStatus:boolean = false;
  private sealsweeplist: any = [];

  constructor(
    public appCtrl: App,
    public navCtrl: NavController, 
    private dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
    
      this.actualstart = this.getactualTime();
  }

  goBack() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("ListsealsweepPage", '');
  }

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

  barcodeScan() {

    this.options = {
      prompt: "Scan your barcode"
    }
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.ta4serialnum =  barcodeData.text.trim(); 
        this.submitScan();
      }, 
      (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => { console.log(toast); }
        );
      });
  }

  submitScan() {

    if(this.ta4serialnum !== '' && typeof(this.ta4serialnum) !== 'undefined' && this.ta4serialnum !== null) {

      if(!this.sealsweeplist.includes(this.ta4serialnum)) {
        this.sealsweeplist.push(this.ta4serialnum);
        this.ta4sweepline.push({ 'ta4serialnum': this.ta4serialnum });
        this.showDeviceStatus = this.ta4sweepline.length > 0 ? true: false;
        this.ta4serialnum = "";
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Alert !',
          subTitle: this.ta4serialnum + " This device is already available",
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.ta4serialnum = "";
                console.log('Successfully created seal sweep record');
              }
            }
          ]
        });
        alert.present();
      }
    }
  }

  resetScan() {

    this.ta4serialnum = "";
  }

  trashScan(index) {

    this.ta4sweepline.splice(index,1);
    this.showDeviceStatus = this.ta4sweepline.length > 0 ? true: false;
  }

  getactualTime() {

    var currentdate = new Date(); 
    this.startDate = currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear();
    this.startTime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return this.formatAMPM();
  }

  getfinishTime() {

    var currentdate = new Date(); 
    return this.formatAMPM();
  }


  formatAMPM() {
    
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var dat = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var strTime = '';
    
    if(minutes < 10) {

      if(month < 10) {
        
        strTime = year + '-' + '0' + month + '-' + dat + 'T' + hours + ':' + '0' + minutes + ':' + seconds;
      }
      else {
        
        strTime = year + '-' + month + '-' + dat + 'T' + hours + ':' + '0' + minutes + ':' + seconds;
      }
    }
    else {

      if(month < 10) {
        
        strTime = year + '-' + '0' + month + '-' + dat + 'T' + hours + ':' + minutes + ':' + seconds;
      }
      else {
        
        strTime = year + '-' + month + '-' + dat + 'T' + hours + ':' + minutes + ':' + seconds;
      }
    }
    return strTime;
}

  saveSweep() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.actualfinish = this.getfinishTime();
    var sweepType = this.refSealSegment;
    var newItem = {
      "actualstart": this.actualstart,
      "actualfinish": this.actualfinish,
      "ta4sweepline": this.ta4sweepline
    }
    console.log("newItem : "+JSON.stringify(newItem));
    this.dataService
        .storeSealSweepDetails(sweepType, newItem)
        .then(results => {
          let res: any;
          res = results;

        if (res.responseJSON.processStatus === 'success') {
          let alert = this.alertCtrl.create({
            title: 'Success !',
            subTitle: res.responseJSON.respObject,
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  console.log('Successfully created seal sweep record');
                  loading.dismiss();
                  this.goBack();
                }
              }
            ]
          });
          alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Failed !',
            subTitle: "Failed to create MSOK Seal sweep...",
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  loading.dismiss();
                  console.log('Failed created seal sweep record');
                }
              }
            ]
          });
          alert.present();
        }
      });
  }
}
