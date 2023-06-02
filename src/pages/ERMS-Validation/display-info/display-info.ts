import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from '../../../providers/common/global-function';

import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Domains } from "../../../pojo/commonEnum/Domains";
import { ChangeRequestComponent } from '../../../components/change-request/change-request';

/**
 * Generated class for the DisplayInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-display-info',
  templateUrl: 'display-info.html',
})
export class DisplayInfoPage {

  @ViewChild('myselect') selectComponent: SelectSearchableComponent;

  public siteItems: any = [];
  public recipientItem: any = [];
  public materialItems: any = [];
  public checkArrayList: any = [];
  public storeMaterialList: any = [];
  public showDeviceCompleteDetails: any = [];
  public validResultDetails: any = [];
  public descriptionArray: any = [];

  public recipient: any;
  public material_id: any;
  public created_by: String;

  public valueIndicator: boolean = false;
  public showDeviceContent: boolean = true;
  public afterValidInd: any = [];
  public validDisplayResultCheck: any = [];
  public visibleChangeRequest: any = [];
  public siteid: String;

  public createdByDisplayName: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public gv: GlobalVars,
    public gf: GlobalFunction,
    public jsonStoreCrud: JsonStoreCrudProvider,
    public dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

    this.getSiteId();
    this.getLabourDetails();
    this.getMaterialDetails();

    this.createdByDisplayName = this.gv.personid + " ( " + this.gv.displayname + " )";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayInfoPage');
  }

  /**
   * Indicator
   * Indicator Change for Outer Card Functionality...
   */
  showDeviceContentFn() {

    if (this.showDeviceContent)
      this.showDeviceContent = false;
    else
      this.showDeviceContent = true;
  }

  /**
   * Indicator
   * Indicator Change for Inner Card Functionality...
   */
  showDeviceCompleteDetailFn(index) {

    if (this.storeMaterialList[index].respCode !== '0') {

      if (this.showDeviceCompleteDetails[index])
        this.showDeviceCompleteDetails[index] = false;
      else
        this.showDeviceCompleteDetails[index] = true;
    }
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
   * LookUp Data
   * Get Storage Location details for the requesting supervisor...
   */
  getSiteId() {

    this.siteItems = '';
    this.dataService.fetchSiteParticularUser().then(results => {
      var respResult: any = results;
      this.siteItems = respResult.respObject;
    });
  }

  /**
   * Utils
   * Get Labor Details as List...
   */
  getLabourDetails() {

    this.dataService.fetchLaborDetails().then(results => {

      var respResult: any = results;
      this.recipientItem = respResult.respObject;
      for (var i = 0; i < this.recipientItem.length; i++)
        this.recipientItem[i].compositeName = this.recipientItem[i].laborcode + ' ( ' + this.recipientItem[i].ta0laborname + ' ) ';
    });
  }

  /**
   * Utils
   * Get Material Details as List...
   */
  getMaterialDetails() {

    this.materialItems = [];
    this.jsonStoreCrud.getAllRecordWithSorting(Domains.MaterialData).then((result) => {
      this.materialItems = result;
      for (var i = 0; i < this.materialItems.length; i++) {
        this.materialItems[i].materialnum = this.materialItems[i].json.ta0materialnum;
        this.materialItems[i].compositeName = this.materialItems[i].json.ta0materialnum + ' ( ' + this.materialItems[i].json.description + ' ) ';
      }
    });
  }

  /**
   * Add Material to form a list...
   */
  addMaterial() {

    if (this.material_id !== null && this.material_id !== '' && typeof this.material_id !== 'undefined') {

      if (!this.checkArrayList.includes(this.material_id.json.ta0materialnum)) {

        this.storeMaterialList.push({ "matnr": this.material_id.json.ta0materialnum, "description": this.material_id.json.description, "respCode": "2" });
        this.checkArrayList.push(this.material_id.json.ta0materialnum);
        this.descriptionArray.push({ "matnr": this.material_id.json.ta0materialnum, "description": this.material_id.json.description });
        this.showDeviceCompleteDetails.push(false);
        this.valueIndicator = true;
        this.emptyMaterialEnter();
        this.valueIndicatorFn();
      }
      else {

        let alert = this.alertCtrl.create({
          title: 'Warning !',
          subTitle: "Duplicate Material...",
          cssClass: 'alert-warning',
          buttons: [{
            text: 'Ok',
            cssClass: 'ok-button',
            handler: () => {

              this.emptyMaterialEnter();
            }
          }]
        });
        alert.present();
      }
    }
    else {
      this.displayErrorMsg("Kindly select material number for further process");
    }
  }

  /**
   * Delete Material before get result from ERMS...
   * @param index 
   */
  deleteMaterial(index) {

    let alert = this.alertCtrl.create({
      title: 'Warning !',
      subTitle: "Are you accept to delete material...",
      cssClass: 'alert-warning',
      buttons: [{
        text: 'Yes',
        cssClass: 'ok-button',
        handler: () => {

          this.storeMaterialList.splice(index, 1);
          this.showDeviceCompleteDetails.splice(index, 1);
          this.checkArrayList.splice(index, 1);
          this.valueIndicatorFn();
        }
      }, { text: 'No', handler: () => { } }]
    });
    alert.present();
  }

  /**
   * After adding data from the list empty the field for Next value...
   */
  emptyMaterialEnter() {

    this.material_id = '';
  }

  setJson() {

    var data: any = [];
    for (var i = 0; i < this.checkArrayList.length; i++) {
      data[i] = { "matnr": this.checkArrayList[i] };
    }

    var result = {
      "ind": "DISP_R",
      "wempf": this.recipient.laborcode,
      "gsber": this.siteid,
      "usnam": this.gv.personid,
      "ITEM": data
    }
    console.log('json ', result);
    return result;
  }

  /**
   * Final call to get the data from ERMS...
   */
  validationToSubmit() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    if (this.validationEmptyFields(loading)) {

      this.storeMaterialList = [];
      this.dataService.ermsMaterialDisplayInfo(this.setJson()).then(results => {

        var respObject: any = respObject = results;
        var resObject: any = respObject.respObject;
        var successObject: any = respObject.successObject;
        console.log('respObject ', respObject);
        console.log('respObject.respObject ', respObject.respObject);

        this.validResultDetails = [];
        this.storeMaterialList = [];

        // if (typeof successObject === 'undefined' || successObject === null || successObject === '') {
        //   console.log('respObject ', respObject.description);
        //   this.displayErrorMsg(respObject.description);
        //   loading.dismiss();
        // }

        //else {
        if (respObject.processStatus === 'success') {
          for (var i = 0; i < resObject.length; i++) {

            this.afterValidInd[i] = true;
            this.visibleChangeRequest[i] = false;
            this.showDeviceCompleteDetails[i] = false;

            this.validDisplayResultCheck[i] = (resObject[i].respCode === "0") ? false : true;
            this.storeMaterialList[i] = resObject[i];
          }

          for (var i = 0; i < this.storeMaterialList.length; i++) {

            this.storeMaterialList[i].rsNum = parseInt(resObject[i].rsNum, 10);
            this.storeMaterialList[i].rspos = parseInt(resObject[i].rspos, 10);
            this.storeMaterialList[i].bdmng = parseInt(resObject[i].bdmng, 10);
            this.storeMaterialList[i].enmng = parseInt(resObject[i].enmng, 10);
            if (resObject[i].matnr !== null || resObject[i].matnr !== '' || typeof resObject[i].matnr !== 'undefined') {
              this.storeMaterialList[i].matnr = parseInt(resObject[i].matnr, 10);
              for (var j = 0; j < this.descriptionArray.length; j++)
                Number(this.storeMaterialList[i].matnr) === Number(this.descriptionArray[j].matnr) ? this.storeMaterialList[i].description = this.descriptionArray[j].description : '';
            }
            else {
              this.storeMaterialList[i].matnr = null;
            }
          }
        } else {
          console.log('respObject ', respObject.description);
          this.displayErrorMsg(respObject.description);
          loading.dismiss();
        }

        loading.dismiss();
      });
    }
  }

  validationEmptyFields(loading) {

    if (typeof this.recipient === 'undefined' || this.recipient === null || this.recipient === '') {
      this.displayErrorMsg("Please enter the goods recipient details");
      loading.dismiss();
      return false;
    }
    else if (typeof this.siteid === 'undefined' || this.siteid === null || this.siteid === '') {
      this.displayErrorMsg("Please enter the site id");
      loading.dismiss();
      return false;
    }
    else if (this.storeMaterialList.length < 1) {
      this.displayErrorMsg("Please add some material to validate");
      loading.dismiss();
      return false;
    }
    else {
      return true;
    }
  }

  /**
   * Utils
   * Display Sucess Message to User...
   * @param message 
   */
  displayErrorMsg(message) {

    let alert = this.alertCtrl.create({
      title: 'Error !',
      subTitle: message,
      cssClass: 'alert-error',
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
   * Calling Validate to Reservation...
   */
  callValidReservation(rsNum, matnr, index) {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    var result = { "ind": "VAL_RV", "rsNum": rsNum };
    this.dataService.ermsValidationReservNumber(result).then(results => {

      var respObject: any = [];
      respObject = results;

      for (var i = 0; i < this.storeMaterialList.length; i++) {

        if ((Number(this.storeMaterialList[i].rsNum) === Number(rsNum)) && (Number(this.storeMaterialList[i].matnr) === Number(matnr))) {

          if (respObject.respObject[0].respCode === "0") {
            this.visibleChangeRequest[index] = false;
            this.storeMaterialList[i].zlog = respObject.respObject[0].zlog;
          }
          else {
            this.visibleChangeRequest[index] = true;
            this.storeMaterialList[i].bdter = respObject.respObject[0].bdter;
            this.storeMaterialList[i].kzear = respObject.respObject[0].kzear;
            this.storeMaterialList[i].respCode = respObject.respObject[0].respCode;
            this.storeMaterialList[i].zlog = respObject.respObject[0].zlog;
          }
        }
      }
      loading.dismiss();
    });
  }

  /**
   * Common
   * Go Back to WoHome page...
   */
  goBack() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("WoHomePage", "");
  }

  /**
   * Edit the Display Index to call Change Request Page...
   */
  callChangeRequest(index) {

    let changeRequestModel = this.modalCtrl.create(ChangeRequestComponent, { attr: this.storeMaterialList[index] });
    changeRequestModel.present();
    changeRequestModel.onDidDismiss(data => {
      if (data === '1')
        this.validationToSubmit();
    });
  }

}
