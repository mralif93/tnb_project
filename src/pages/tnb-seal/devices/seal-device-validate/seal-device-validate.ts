import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController, LoadingController, AlertController } from 'ionic-angular';

// Pojo Import File
import { FunctionClass } from "../../../../pojo/commonEnum/FunctionClass";
import { Domains } from "../../../../pojo/commonEnum/Domains";
import { SoTypes } from "../../../../pojo/commonEnum/SoTypes";
import { DeviceConstants } from '../../../../pojo/commonEnum/DeviceConstants';
import { MeterReading } from '../../../../pojo/MeterReading';
import { GlobalVars } from '../../../../providers/common/global-vars';
import { UserStatus } from '../../../../pojo/lookup/UserStatus';

// Provider Import File
import { JsonStoreCrudProvider } from "../../../../providers/common/json-store/json-store-crud";
import { GlobalFunction } from '../../../../providers/common/global-function';
import { DataServiceProvider } from '../../../../providers/data-service/data-service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the SealDeviceValidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-device-validate',
  templateUrl: 'seal-device-validate.html',
})
export class SealDeviceValidatePage {

  // Declare Variables
  item: any;
  serialnum: any;
  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public jsonStoreCrud: JsonStoreCrudProvider,
    public toastCtrl: ToastController,
    private dataService: DataServiceProvider,
    public appCtrl: App,
    private gf: GlobalFunction,
    private gv: GlobalVars,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast) {
      // Getting value member
      this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealDeviceValidatePage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  barcodeScan() {
    this.options = {
      prompt: "Scan your barcode",
    };

    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      this.serialnum = barcodeData.text.trim();
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => { console.log(toast); }
      );
    });
  }

  validateDevice() {
    console.log(">>>> enter to validate device in SO >>>>>>");
    let message: any = '-';

    if (this.checkRespond() == true) {
      message = "Successfully validate device " + this.serialnum + " for service order " + this.item.json.wonum + "!";
    } else {
      message = "Failed to validate device " + this.serialnum + " for service order " + this.item.json.wonum + "!";
    }

    // display alert
    let alert = this.alertCtrl.create({
      title: "Response!",
      message: message,
      buttons: ["Close"]
    });
    alert.present();
    
    console.log(">>>> exit to validate device in SO >>>>>>");
  }

  checkRespond() {
    if (typeof this.item.json.ta0feeder !== 'undefined' && this.item.json.ta0feeder !== '' && this.item.json.ta0feeder !== null) {
      if (typeof (this.item.json.ta0feeder.length) !== "undefined") {
        let fLength = this.item.json.ta0feeder.length;
        for (var i = 0; i < fLength; i++) {
          if (this.item.json.ta0feeder[i].hasOwnProperty("multiassetlocci")) {
            let mLength = this.item.json.ta0feeder[i].multiassetlocci.length
            for (var m = 0; m < mLength; m++) {
              if (this.item.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta0bcrmuploadindicator")) {
                if (this.item.json.ta0feeder[i].multiassetlocci[m].ta0bcrmuploadindicator === DeviceConstants.BCRM_EXISTING_INDICATOR_MAIN_CT) {
                  // check ta0sealdetail
                  if (this.item.json.ta0feeder[i].multiassetlocci[m].hasOwnProperty("ta0sealdetail")) {
                    let sLength = this.item.json.ta0feeder[i].multiassetlocci[m].ta0sealdetail.length;
                    for(var k = 0; k < sLength; k++) {
                      // check ta0sealnum exist or not
                      if (this.item.json.ta0feeder[i].multiassetlocci[m].ta0sealdetail[k].hasOwnProperty("ta0sealnum")) {
                        // compare ta0sealnum existing
                        if (this.serialnum === this.item.json.ta0feeder[i].multiassetlocci[m].ta0sealdetail[k].ta0sealnum) {
                          console.log(">>>>> ta0sealnum >>>>> " + this.serialnum + " >>>>> " + this.item.json.ta0feeder[i].multiassetlocci[m].ta0sealdetail[k].ta0sealnum);
                          return true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return false;
  }

}
