import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from './../../../providers/common/global-function';

@IonicPage()
@Component({
  selector: 'page-gir-reg',
  templateUrl: 'gir-reg.html',
})
export class GirRegPage {

  public displayProcess: boolean = false;
  public girdetails: any = [];
  public ta0reservationnum: String;
  public ta0itemlinenum: String;
  public siteid: String;
  public ta0quantity: String;
  public ta0defsiteid: String;
  public siteItem: any = [];
  public testLocation: any = [];
  public storageLocation: any = [];
  public storageLocationfield: boolean = false;
  public sLocation: String;
  public storagePilot: boolean = false;
  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private el: ElementRef,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    public navParams: NavParams) {

    this.getSiteId();
  }

  ionViewDidLoad() {

    if (this.gv.ta0defsiteid !== '' && this.gv.ta0defsiteid !== 'undefined' && this.gv.ta0defsiteid !== null) {
      this.siteid = this.gv.ta0defsiteid;
      this.storageLocationfield = true;
      this.getStorageLocation();
      //  this.pilotLocation();
    }
    else {
      this.storageLocationfield = false;
    }
  }

  pilotLocation() {
    if (this.sLocation.trim() === 'ST_1006' || this.sLocation.trim() === 'ST_4000' || this.sLocation.trim() === 'ST_6440') {
      let alert = this.alertCtrl.create({
        title: 'Alert !',
        enableBackdropDismiss: false,
        subTitle: 'Please perform GIR in ERMS',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.storagePilot = true;
            this.sLocation = '';
          }
        }]
      });
      alert.present();
    } else {
      console.log('else block ', this.sLocation.trim());
      this.storagePilot = false;
    }
  }

  /**
   * Navigation to Gir List page... 
   */
  goBack() {
    // let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    // newRootNav.push("GirListPage", '');
    this.navCtrl.pop();
  }

  /**
   * Submit Validation ERMS to Save to required details to Maximo to Auto Generate Gir Number...
   */
  submitScanValidation() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    var sloc = '';
    var message = "";
    if (typeof (this.ta0reservationnum) === 'undefined' || this.ta0reservationnum === '' || this.ta0reservationnum === null) {
      message = "Please enter the reservation number";
      this.displayErrorAlert(message, this.ta0reservationnum, loading);
      return false;
    }
    if (typeof (this.ta0itemlinenum) === 'undefined' || this.ta0itemlinenum === '' || this.ta0itemlinenum === null) {
      message = "Please enter the reservation item";
      this.displayErrorAlert(message, this.ta0itemlinenum, loading);
      return false;
    }
    if (typeof (this.siteid) === 'undefined' || this.siteid === '' || this.siteid === null) {
      message = "Please enter the Site Id";
      this.displayErrorAlert(message, this.siteid, loading);
      return false;

    }
    if (typeof (this.sLocation) === 'undefined' || this.sLocation === '' || this.sLocation === null) {
      message = "Please enter the storage location";
      this.displayErrorAlert(message, this.sLocation, loading);
      return false;
    } else {
      sloc = this.sLocation.replace(/\D/g, '');
      //this.sLocation = sloc;
    }
    if (typeof (this.ta0quantity) === 'undefined' || this.ta0quantity === '' || this.ta0quantity === null) {
      message = "Please enter the quantity";
      this.displayErrorAlert(message, this.ta0quantity, loading);
      return false;
    }

    this.dataService.storeGirProcessCreation("VAL_R".trim(), this.ta0reservationnum.trim(), this.ta0itemlinenum.trim(), this.siteid.trim(), this.ta0quantity.trim(), sloc.trim()).then(results => {

      var respResult: any = results;
      if (respResult.processStatus === "success") {

        let alert = this.alertCtrl.create({
          title: 'Success !',

          subTitle: respResult.respObject,
          buttons: [{
            text: 'Ok',
            handler: () => {
              this.goBack();
            }
          }]
        });
        loading.dismiss();
        alert.present();
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Failed !',
          subTitle: respResult.description,
          buttons: [{
            text: 'Ok',
            handler: () => {
              // this.goBack();
            }
          }]
        });
        loading.dismiss();
        alert.present();
      }
    });
  }

  /**
   * Get Storage Location details for the requesting supervisor...
   */
  getSiteId() {

    this.dataService.fetchSiteParticularUser().then(results => {

      var respResult: any = results;
      this.siteItem = respResult.respObject;
    });
  }


  /**
   * Get Storage Location details for the requesting supervisor...
   */
  getStorageLocation() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    this.storageLocationfield = true;
    this.dataService.fetchSiteLocationParticularUser().then(results => {

      var respResult: any = results;
      this.testLocation = respResult.respObject;
      // this.storageLocation = this.getBooleanObjects(this.testLocation, 'siteid', this.gv.ta0defsiteid);

      this.storageLocation = this.getBooleanObjects(this.testLocation, 'siteid', this.siteid);
      console.log(' this.storageLocation  => ', this.storageLocation);
      // if (this.storageLocation[0].siteid === '6180') {

      //   let alert = this.alertCtrl.create({
      //     title: 'Alert !',
      //     subTitle: 'Please perform GIR in ERMS',
      //     buttons: [{
      //       text: 'Ok',
      //       handler: () => {
      //         loading.dismiss();
      //       }
      //     }]
      //   });
      //   alert.present();
      // }

      loading.dismiss();
    });
  }

  /**
   * get Values to find obj, key and value...
   * @param obj 
   * @param key 
   * @param val 
   */
  getBooleanObjects(obj, key, val) {

    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getBooleanObjects(obj[i], key, (val === 'true' ? true : (val === 'false' ? false : val))));
      }
      else
        if (i == key) {
          if (obj[i] === val) {
            objects.push(obj);
          }
        }
    }
    return objects;
  }

  /**
   * Dynamic Message Display Function...
   * @param message 
   * @param value 
   */
  displayErrorAlert(message, value, loading) {

    let alert = this.alertCtrl.create({
      title: 'Alert !',
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          loading.dismiss();
        }
      }]
    });
    alert.present();
  }
}
