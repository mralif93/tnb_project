import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from './../../../providers/common/global-function';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { SelectSearchableComponent } from 'ionic-select-searchable';

import { Toast } from '@ionic-native/toast';


/**
 * Generated class for the CreateNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  @ViewChild('myselect') selectComponent: SelectSearchableComponent;

  public category_type: String;
  public material_id: any;
  public serial_num: any;


  public valueIndicator: boolean = false;
  public showDeviceContent: boolean = true;
  public serialnum: String;
  public returnItems: any = [];
  public materialItems: any = [];
  public checkArrayList: any = [];
  public storeMaterialList: any = [];
  public cnCategories: any = [];
  public cnReturnTypes: any = [];
  public ta0rcncat: String;
  public ta0rcntyp: String;
  public ta0rcnnr: String;
  public ta0rsnum: String;
  public ta0rspos: String;


  public containerBoot: boolean = false;
  public deviceslist: any = [];
  public showDeviceStatus: boolean = false;
  public deleteCheck: any = [];
  public returnTypes: any = [];
  public cnVarItem: any = [];
  public ta0defsiteid: String;
  public siteid: String;
  public selectedCat: boolean = true;
  public testLocation: any = [];
  public storageLocation: any = [];
  public sLocationCheck: boolean = true;
  public sLocation: String;
  public siteItem: any = [];
  public disableSubmit: boolean = true;
  public ta0divlimit: number = 0;

  constructor(public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private dataService: DataServiceProvider,
    private gv: GlobalVars,
    private gf: GlobalFunction,
    private toast: Toast,
    private jsonStoreCrud: JsonStoreCrudProvider,
    private barcodeScanner: BarcodeScanner, ) {
    this.getSiteId();
    this.getCnCategory();
    this.siteid = this.gv.ta0defsiteid;
    this.cnVarItem = this.navParams.get('attr');
    if ((typeof (this.cnVarItem)) !== 'undefined') {
      this.loadPreviosCreditNote(this.cnVarItem);
    }
  }


  loadPreviosCreditNote(cnVarItem) {

    console.log('  this.cnVarItem   => ', cnVarItem);
    if ((typeof (cnVarItem.category) !== 'undefined') && (cnVarItem.category !== '') && (cnVarItem.category !== null)) {
      this.ta0rcncat = this.cnVarItem.category;
    }
    if ((typeof (cnVarItem.returntype) !== 'undefined') && (cnVarItem.returntype !== '') && (cnVarItem.returntype !== null)) {
      this.ta0rcntyp = cnVarItem.returntype;
    }
    if ((typeof (cnVarItem.reservenum) !== 'undefined') && (cnVarItem.reservenum !== '') && (cnVarItem.reservenum !== null)) {
      this.ta0rsnum = this.cnVarItem.reservenum;
    }
    if ((typeof (cnVarItem.ta0cnline) !== 'undefined') && (cnVarItem.ta0cnline.length !== 0) && (cnVarItem.ta0cnline !== null)) {

      this.deviceslist = [];
      for (var q of cnVarItem.ta0cnline) {
        console.log('serialnum', q.serialnum);
        this.deviceslist.push({ "serialnum": q.serialnum });
      }
      this.showDeviceStatus = true;
    }
  }

  /**
   * LookUp Data
   * Get Storage Location details for the requesting supervisor...
   */
  getSiteId() {
    this.siteItem = [];
    this.dataService.fetchSiteParticularUser().then(results => {
      var respResult: any = results;
      this.siteItem = respResult.respObject;
    });
  }

  /**
 * LookUp Data
 * Get Storage Location details for the requesting supervisor...
 */
  getStorageLocation() {

    this.testLocation = [];
    this.storageLocation = [];
    this.sLocationCheck = false;
    this.dataService.fetchSiteLocationParticularUser().then(results => {
      var respResult: any = results;
      this.testLocation = respResult.respObject;
      this.storageLocation = this.getBooleanObjects(this.testLocation, 'siteid', this.siteid);
      if (this.storageLocation.length === 1) {
        this.sLocation = this.storageLocation[0].location;
      }
    });
  }

   /**
 * Diversion
 * validation reservation for diversion...
 */
  validateReservation() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    if(this.setValidation(loading)) {

      this.dataService.ermsValidationReservation(this.ta0rcncat.trim(), this.siteid.trim(), this.ta0rsnum.trim(), this.ta0rspos.trim()).then(results => {
        var respResult: any = results;
        if (respResult.processStatus === "success") {
          var respObject: any = [];
          respObject = results;
          if (respObject.respObject.length > 0) {
            if (respObject.respObject[0].respCode === "1") {
              var remaining = parseInt(respResult.respObject[0].requiredQty) - parseInt(respResult.respObject[0].withDrawQty);
              this.ta0divlimit=remaining;
              let alert = this.alertCtrl.create({
                title: respResult.respObject.status, enableBackdropDismiss:false, cssClass: 'alert-success',
                subTitle:  ' Balance ' +  remaining.toString() + ' quantity to be withdrawn. ',
                buttons: [{
                  text: 'Ok',cssClass: 'ok-button',
                  handler: () => { this.disableSubmit = false; }
                }]
              });
              loading.dismiss();
              alert.present();
            } else {
              let alert = this.alertCtrl.create({
                title: respResult.respObject.status,enableBackdropDismiss:false,
                subTitle: respResult.respObject[0].zLOG, cssClass: 'alert-error',
                buttons: [{
                  text: 'Ok', cssClass: 'ok-button',
                  handler: () => { this.disableSubmit = true; }
                }]
              });
              loading.dismiss();
              alert.present();
            }
          }
        } else {
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
  }

  /**
   * Utils
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
   * Indicator
   * Card List Show and hide Functionality...
   */
  valueIndicatorFn() {

    if (this.storeMaterialList.length > 0)
      this.valueIndicator = true;
    else
      this.valueIndicator = false;
  }

  /**
   * Indicator
   *Cats from maximo
   */

  getCnCategory() {
    this.dataService.fetchCnCategory().then(results => {
      var respResult: any = results;
      this.cnCategories = respResult.respObject;
    });
  }

  /**
   * According to Category list return type...
   * 
   */
  getReturnType() {
    this.selectedCat = false;
    if (this.ta0rcncat === 'C1') {
      this.cnReturnTypes = [];
      this.dataService.fetchCnReturnType().then(results => {
        var respResult: any = results;
        this.cnReturnTypes = respResult.respObject;
        var creditCats = this.cnReturnTypes.filter(function (credityGroup) {
          return credityGroup.value == "10" || credityGroup.value == "11" || credityGroup.value == "12";
        });
        this.cnReturnTypes = creditCats.reverse();
      });
    }
    else if (this.ta0rcncat === 'R1') {
      this.cnReturnTypes = [];
      this.dataService.fetchCnReturnType().then(results => {
        var respResult: any = results;
        this.cnReturnTypes = respResult.respObject;
        var removeCats = this.cnReturnTypes.filter(function (removeGroup) {
          return removeGroup.value == "20" || removeGroup.value == "11" || removeGroup.value == "12";
        });
        this.cnReturnTypes = removeCats.sort();
      });
    }

    else if (this.ta0rcncat === 'D1') {//reservation is mandatory d1 , 31
      this.cnReturnTypes = [];
      this.dataService.fetchCnReturnType().then(results => {
        var respResult: any = results;
        this.cnReturnTypes = respResult.respObject;
        var divisionCats = this.cnReturnTypes.filter(function (divisionGroup) {
          return divisionGroup.value == "30" || divisionGroup.value == "31";
        });
        this.cnReturnTypes = divisionCats;
      });
    }
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
          this.serialnum = "";
        }
      }]
    });
    alert.present();
  }

  //if cn number !=null ? update : create
  createCreditNote() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    var rsnum, rspos
    if (this.ta0rsnum === '' || this.ta0rsnum === null || typeof (this.ta0rsnum) === 'undefined') {
      rsnum = '';
    } 
    else {
      rsnum = this.ta0rsnum;
    }
    if (this.ta0rspos === '' || this.ta0rspos === null || typeof (this.ta0rspos) === 'undefined') {
      rspos = '';
    } 
    else {
      rspos = this.ta0rspos;
    }

    if (this.setValidation(loading)) {
      var req: any = [];
      this.dataService.storeCNCreation(this.ta0rcncat, this.ta0rcntyp, rsnum, rspos, this.siteid, this.ta0divlimit ,req).then(results => {

        var respObject: any = respObject = results;
        if (respObject.processStatus === "success") {

          let alert = this.alertCtrl.create({
            title: 'Success !',
            subTitle: respObject.respObject,
            enableBackdropDismiss: false,
            cssClass: 'alert-success',
            buttons: [{
              text: 'Ok',
              role: 'ok',
              cssClass: 'ok-button',
              handler: () => {
                loading.dismiss();
                let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                newRootNav.push("CreditNoteTemp", { data: { creditnum: respObject.respObject.replace(/\D/g, ''), status:'DRAFT', category: this.ta0rcncat, returntype: this.ta0rcntyp, reservenum: rsnum, reservitemnum: rspos, ta0cnline: [] , ta0divlimit :    this.ta0rcncat!=='D!'?500: this.ta0divlimit} });
              }
            }]
          });
          loading.dismiss();
          alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Failed !',
            subTitle: respObject.description,
            enableBackdropDismiss: false,
            cssClass: 'alert-error',
            buttons: [{
              text: 'Ok',
              role: 'ok',
              cssClass: 'ok-button',
              handler: () => {
                loading.dismiss();
              }
            }]
          });
          loading.dismiss();
          alert.present();
        }
      });
    }
  };

  setValidation(loading) {

    if (this.ta0rcncat === '' || this.ta0rcncat === null || typeof (this.ta0rcncat) === 'undefined') {
      this.displayErrorMsg("Please select the category type");
      loading.dismiss();
      return false;
    }
    if (this.ta0rcntyp === '' || this.ta0rcntyp === null || typeof (this.ta0rcntyp) === 'undefined') {
      this.displayErrorMsg("Please select the return type");
      loading.dismiss();
      return false;
    }
    if (this.ta0rcncat === 'D1') {
      if (typeof (this.ta0rsnum) === 'undefined' || this.ta0rsnum === '' || (this.ta0rsnum) === null) {
        this.displayErrorMsg("Please enter valid Reservation Number");
        loading.dismiss();
        return false;
      }
      if (typeof (this.ta0rspos) === 'undefined' || this.ta0rspos === '' || (this.ta0rspos) === null) {
        this.displayErrorMsg("Please enter valid Reservation Item Number");
        loading.dismiss();
        return false;
      }
    }
    return true;
  };



  /**
  * Navigate to parent page...
  */
  goBack() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("ListCreateNotePage", "");
  }



  displayErrorMsg(message) {

    let alert = this.alertCtrl.create({
      title: 'Error !',
      subTitle: message,
      cssClass: 'alert-error',
      enableBackdropDismiss: false,
      buttons: [{
        text: 'Ok',
        role: 'ok',
        cssClass: 'ok-button',
        handler: () => {
        }
      }]
    });
    alert.present();
  }

  /**
   * Get Values from Key...
   * @param obj 
   * @param key 
   */
  getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getValues(obj[i], key));
      }
      else if (i == key) {
        objects.push(obj[i]);
      }
    }
    return objects;
  }

  /**
   * Validation for Reservation item number field only enter the numberial value...
   */
  validationQuantity() {
    if (this.ta0rspos.toString().length <5 ) {
      var pattern = /^(?!(0))[0-9]*$/gm;
      var qt =  this.ta0rspos.toString();
      var res = pattern.test(this.ta0rspos.toString())
      if (!res) {
        this.ta0rspos =  qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
        let alert = this.alertCtrl.create({
          title: 'Error !',
          subTitle: "Please enter the valid number",
          cssClass: 'alert-error',
          enableBackdropDismiss: false,
          buttons: [{
            text: 'Ok',
            role: 'ok',
            cssClass: 'ok-button',
            handler: () => {
              this.ta0rspos =  qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
            }
          }]
        });
        alert.present();
        return false;
      }
      else {
        return true;
      }
    }
    else {
      var qt =  this.ta0rspos.toString().substring(0,4);
      let alert = this.alertCtrl.create({
        title: 'Error !',
        subTitle: "Please enter the valid number",
        cssClass: 'alert-error',
        enableBackdropDismiss: false,
        buttons: [{
          text: 'Ok',
          role: 'ok',
          cssClass: 'ok-button',
          handler: () => {
            this.ta0rspos=qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
          }
        }]
      });
      alert.present();
      return false;
    }
  }




  validationResvNum() {
    if (this.ta0rsnum.toString().length < 11) {
      var pattern = /^(?!(0))[0-9]*$/gm;
      var qt =  this.ta0rsnum.toString();
      var res = pattern.test(this.ta0rsnum.toString())
      if (!res) {
        this.ta0rsnum =  qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
        let alert = this.alertCtrl.create({
          title: 'Error !',
          subTitle: "Please enter the valid reservation number",
          enableBackdropDismiss: false,
          cssClass: 'alert-error',
          buttons: [{
            text: 'Ok',
            role: 'ok',
            cssClass: 'ok-button',
            handler: () => {
              this.ta0rsnum =  qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
            }
          }]
        });
        alert.present();
        return false;
      }
      else {
        return true;
      }
    }
    else {
      var qt =  this.ta0rsnum.toString().substring(0,10);
      let alert = this.alertCtrl.create({
        title: 'Error !',
        subTitle: "Please enter the valid reservation number",
        enableBackdropDismiss: false,
        cssClass: 'alert-error',
        buttons: [{
          text: 'Ok',
          role: 'ok',
          cssClass: 'ok-button',
          handler: () => {
            this.ta0rsnum = qt.toString().replace(/^0+/, '').replace(/[^0-9]+/, '');
          }
        }]
      });
      alert.present();
      return false;
    }
  }
}