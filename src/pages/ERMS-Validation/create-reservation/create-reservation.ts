import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, LoadingController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { GlobalFunction } from '../../../providers/common/global-function';
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";
import { Domains } from "../../../pojo/commonEnum/Domains";

import { SelectSearchableComponent } from 'ionic-select-searchable';

/**
 * Generated class for the CreateReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-reservation',
  templateUrl: 'create-reservation.html',
})
export class CreateReservationPage {

  @ViewChild('myselect') selectComponent: SelectSearchableComponent;

  public showDeviceContent: boolean = true;
  public changeshowExpand: boolean = true;
  public valueIndicator: boolean = false;
  public sLocationCheck: boolean = true;
  public materialCheck: boolean = true;
  public checkDevicePhaseIndicator: boolean = false;
  public checkStringChange: boolean = false;
  public  addMaterialIntoList:  boolean = true;
  public countValid: number = 0;
  public quantity: String;
  public dev_phase_ind: String;
  public material_id: any;
  // public req_date:  String = new Date().toISOString();
  public req_date:  String;
  public siteid: String;
  public minDate: String;
  public maxDate: String;
  public sLocation: String;
  public recipient: any;
  public zone: String;
  public reporting_to: String;
  public created_by: String;
  public siteItem: any = [];
  public recipientItem: any = [];
  public zoneItems: any = [];
  public reportingItems: any = [];
  public materialData: any = [];
  public devicePhaseIndicators: any = [];
  public materialItems: any = [];
  public checkMaterialArray: any = [];
  public storeMaterialList: any = [];
  public testLocation: any = [];
  public storageLocation: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public appCtrl: App,
              private gv: GlobalVars, 
              public gf: GlobalFunction,
              public loadingCtrl: LoadingController,
              private jsonStoreCrud: JsonStoreCrudProvider,
              private dataService: DataServiceProvider,
              private alertCtrl: AlertController) {
    this.lookupDetails();
  }

  /**
   * Common Lookup Load Functionality...
   */
  lookupDetails() {

    this.getCurrentDate();
    this.getDevicePhaseIndicatorData();
    this.getZoneData();
    this.getReportingData();
    this.getSiteId();
    this.getLabourDetails();
    if(this.gv.ta0defsiteid !== '' && typeof this.gv.ta0defsiteid !== 'undefined' && this.gv.ta0defsiteid !== null) {
      this.siteid = this.gv.ta0defsiteid;
      var jsonString = { 'siteid': this.siteid };
      this.dataService.fetchZoneBySiteId('TA0ZONELIST', jsonString).then(results => {
        debugger;
      console.log('results ',results)
        var respResult: any = results;
        this.zone = respResult.zone;
        this.getStorageLocation();
      });      
    }
  }

  /**
   * LookUp Data
   * Get Current Date Functionality...
   * Set Min Date and Max Date for Required Date Field...
   */
   getCurrentDate() {

    var today = new Date();
    var dd: any = today.getDate();
    var mm: any = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10)
      dd = '0' + dd.toString();
    if (mm < 10) {
      mm = '0' + mm;
    } 
    this.req_date = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString();
    this.minDate = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString();
    this.maxDate = (yyyy + 20).toString();
  }

  /**
   * LookUp Data
   * Get Device Phase Indicator Details from the Material Data (MaterialData) Functionality...
   */
  getDevicePhaseIndicatorData() {

    this.materialData = [];
    this.jsonStoreCrud.getAllRecord(Domains.MaterialData).then((result) => {
      this.materialData = result;
      this.stoleValueDevicePhaseData(this.materialData);
    });
  }

  /**
   * LookUp Data
   * Get Zone Details from the Lookup Data (Lookup Values) Functionality...
   */
  getZoneData() {

    var queryPart: any = [];
    queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0ERMSZONE");
    this.jsonStoreCrud.getSearchRecordNoLimit(Domains.AlnDomain, queryPart).then(result => {
      this.zoneItems = result; 
    });
  }

  /**
   * LookUp Data
   * Get Reporting Details from the Lookup Data (Lookup Values) Functionality...
   */
  getReportingData() {

    var queryPart: any = [];
    queryPart = WL.JSONStore.QueryPart().equal("domainid", "TA0REPORTING");
    this.jsonStoreCrud.getSearchRecordNoLimit(Domains.AlnDomain, queryPart).then(result => {
      this.reportingItems = result; 
    });
  }

  /**
   * LookUp Data
   * Get Material Data according to Device Phase indicator Functionality...
   */
  getMaterialItemFn() {

    this.materialItems = [];
    var queryPart: any = [];
    this.materialCheck = false;
    queryPart = WL.JSONStore.QueryPart().equal("TA0DEVICEPHASEIND", this.dev_phase_ind.toString());
    this.jsonStoreCrud.getSearchRecordWithSorting(Domains.MaterialData, queryPart).then(result => {
      var testMaterial: any = result;
      for (var i = 0; i < testMaterial.length; i++) {
        this.materialItems.push({ "materialnum": testMaterial[i].json.ta0materialnum, "compositeName": testMaterial[i].json.ta0materialnum + ' ( ' + testMaterial[i].json.description + ' ) ' });
      }
    });
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
    console.log(' this.siteItem  ', this.siteItem);
  }

  pilotsite(){
    var pilotSite = ['6180','6440'];
    pilotSite.forEach(function(element) {
      this.siteItem.forEach(function(element1){
        if(element1.siteid == element )
      console.log(element);
    })
    });
  }

  /**
   * LookUp Data
   * Get Storage Location details for the requesting supervisor...
   */
  getStorageLocation() {
debugger;
    this.testLocation = [];
    this.storageLocation = [];
    this.sLocationCheck = false;
    this.dataService.fetchSiteLocationParticularUser().then(results => {
      var respResult: any = results;
      this.testLocation = respResult.respObject;
      this.storageLocation = this.getBooleanObjects(this.testLocation, 'siteid', this.siteid);
      if(this.storageLocation.length === 1) {
        this.sLocation = this.storageLocation[0].location;
      }

    });
  }

  /**
   * Indicator
   * Indicator Change for Toggle Switch Functionality...
   */
  showDeviceContentFn() {

    if(this.showDeviceContent) 
      this.showDeviceContent = false;
    else
      this.showDeviceContent = true;
  }

  /**
   * Indicator
   * Indicator changes to Expand Card Functionality...
   */
  changeshowExpandFn() {

    if(this.changeshowExpand) 
      this.changeshowExpand = false;
    else
      this.changeshowExpand = true;
  }

  /**
   * Indicator
   * Card List Show and hide Functionality...
   */
  valueIndicatorFn() {

    if(this.storeMaterialList.length > 0) {
      this.valueIndicator = true;
      this.checkDevicePhaseIndicator = true;
    }
    else {
      this.valueIndicator = false;
      this.checkDevicePhaseIndicator = false;
    }
  }

  /**
   * Utils
   * After Add Material of single Material reset the value to next data...
   */
  emptyMaterialEnter() {

    this.material_id = "";
    this.quantity = null;
  }

  /**
   * get count of valid device...
   */
  checkCountOfValid() {

    this.countValid = 0;
    if(this.storeMaterialList.length > 0) {
      for(var i = 0; i < this.storeMaterialList.length; i++) {
        if(this.storeMaterialList[i].respCode === '1')
          this.countValid++;
      } 
      if(this.storeMaterialList.length === this.countValid)
        this.checkStringChange = true;
      else
        this.checkStringChange = false;
    }
    else {
      this.checkStringChange = false;
    }
  }

  /**
   * Working Functionality
   * Add Material Details...
   */
  addMaterial() {

    if(this.validationAddMat() && this.checkMaterialValidation()) {

      this.storeMaterialList.push({ "matnr": this.material_id.materialnum, "quantity": this.quantity, "req_date": this.req_date, "gsber": this.siteid ,"lgort": this.sLocation, "respCode": "2" });
      this.checkMaterialArray.push(this.material_id.materialnum);
      this.emptyMaterialEnter();
      this.valueIndicatorFn();
      this.addMaterialIntoList = false;
    }
    this.checkCountOfValid();
  }

  /**
   * Working Functionality
   * Delete Material Details using add Index...
   * @param index 
   */
  deleteMaterial(index) {

    let alert = this.alertCtrl.create({
      title: 'Warning !',
      subTitle: "Are you sure to delete material",
      cssClass: 'alert-warning',
      buttons: [{
        text: 'Yes',
        role: 'yes',
        cssClass:'ok-button',
        handler: () => {

          this.storeMaterialList.splice(index, 1);
          this.checkMaterialArray.splice(index, 1);
          this.valueIndicatorFn();
          this.checkCountOfValid();
        }
      }, { text: 'No', cssClass:'ok-button', role: 'no', handler: () => {}}]
    });
    alert.present();
  }

  /**
   * Working Functionality
   * Create Fields as a Json Format Functionality...
   */
  setJsonForValidation(cond) {
    
    if(this.checkMaterialArray.length > 0) {
      var req: any = [];
      var sLocation = this.sLocation.replace(/[^0-9]/g, "");
      if(cond === 'VAL_M') {
        for(var i = 0; i < this.checkMaterialArray.length; i++)
          req[i] = { "ind": cond, "devInd": this.dev_phase_ind, "matnr": this.checkMaterialArray[i], "gsber": this.siteid, "lgort": sLocation  };
        return req;
      }
      else {
        var res: any = '';
        for(var i = 0; i < this.storeMaterialList.length; i++)
          req[i] = { "matnr": this.storeMaterialList[i].matnr, "bdmng": this.storeMaterialList[i].quantity, "lgort": sLocation, "werks": this.gv.plant, "bdter": this.dateConversion(this.storeMaterialList[i].req_date) };
        res = { "ind": cond, "devInd": this.dev_phase_ind, "wempf": this.recipient.laborcode, "gsber": this.siteid, "zxone": this.zone, "zrpt": this.reporting_to, "usnam": this.created_by, "ITEM": req };
        return res;
      }
    }
    else {
      this.addMaterialIntoList=true;
      this.displayErrorMsg("Please add the material details for validation");
      return false;
    }
  }

  /**
   * Working Functionality
   * Validation Data...
   */
  validationToSubmit(cond) {
  
    if(this.validationAddMat()) {
   
      let loading = this.loadingCtrl.create({
        content: this.gv.loadingContent
      });
      loading.present();
      this.gf.loadingTimer(loading);
      if(cond === 'VAL_M') {
        this.dataService.ermsMaterialValidationCheck(this.setJsonForValidation(cond)).then(results => {
          var respObject: any = [];
          respObject = results;
          if (respObject.processStatus === "success") {
            for(var i = 0; i < this.storeMaterialList.length; i++) {
              for(var j = 0; j < respObject.respObject.length; j++) {
                if(Number(this.storeMaterialList[i].matnr) === Number(respObject.respObject[j].matnr)) {
                  this.storeMaterialList[i].respCode = respObject.respObject[j].respCode;
                  this.storeMaterialList[i].zlog = respObject.respObject[j].zlog;
                }
              }
            }
            this.checkCountOfValid();
            loading.dismiss();
          }
        });
      }
      else {
        this.dataService.ermsMaterialSubmitCheck(this.setJsonForValidation(cond)).then(results => {
          var respObject: any = [];
          respObject = results;
          if (respObject.processStatus === "success") {
            if(respObject.respObject.length > 0) {
              if(respObject.respObject[0].respCode === "1")  {
                
                let alert = this.alertCtrl.create({
                  title: 'Success !',
                  subTitle: respObject.respObject[0].zlog,
                  cssClass: 'alert-success',
                  buttons: [{
                    text: 'Ok',
                    role: 'ok',
                    cssClass: 'ok-button',
                    handler: () => {
                      loading.dismiss();
                      let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
                      newRootNav.push("WoHomePage", "");
                    }
                  }]
                });
                alert.present();
              }
              else  {
                this.displayErrorMsg(respObject.respObject[0].zlog);
              }
                
              loading.dismiss();
            }
          }
        });
      }
    
    }
  }

  /**
   * Date conversion for create reserveation...
   * @param dateValue 
   */
  dateConversion(dateValue) {
    var result = dateValue.split('-');
    return result[2]+result[1]+result[0];
  }

  /**
   * Validation
   * Validation Before Add Material Functionality...
   */
  validationAddMat() {

    if(this.dev_phase_ind === '' || this.dev_phase_ind === null || typeof (this.dev_phase_ind) === 'undefined' ) {

      this.displayErrorMsg("Please select the device phase indicator");
      return false;
    }
    if(this.recipient === '' || this.recipient === null || typeof (this.recipient) === 'undefined') {

      this.displayErrorMsg("Please select the goods recipient id");
      return false;
    }
    if(this.siteid === '' || this.siteid === null || typeof (this.siteid) === 'undefined') {

      this.displayErrorMsg("Please select the site id");
      return false;
    }
    if(this.sLocation === '' || this.sLocation === null || typeof (this.sLocation) === 'undefined') {

      this.displayErrorMsg("Please select the storage location");
      return false;
    }
    if(this.zone === '' || this.zone === null || typeof (this.zone) === 'undefined') {

      this.displayErrorMsg("Please select the zone");
      return false;
    }
    if(this.reporting_to === '' || this.reporting_to === null || typeof (this.reporting_to) === 'undefined') {

      this.displayErrorMsg("Please select the Reporting to");
      return false;
    }
    if(this.storeMaterialList.length < 1) {

      if(this.material_id === '' || this.material_id === null || typeof (this.material_id) === 'undefined') {

        this.displayErrorMsg("Please select the material id");
        return false;
      }
      if(this.req_date === '' || this.req_date === null || typeof (this.req_date) === 'undefined') {
        
        this.displayErrorMsg("Please select the required date");
        return false;
      }
      if(this.quantity === '' || this.quantity === null || typeof (this.quantity) === 'undefined') {
        
        this.displayErrorMsg("Please enter the quantity");
        return false;
      }
    }
    return true;
  }

  checkMaterialValidation() {

    if(this.material_id === '' || this.material_id === null || typeof (this.material_id) === 'undefined') {

      this.displayErrorMsg("Please select the material id");
      return false;
    }
    if(this.req_date === '' || this.req_date === null || typeof (this.req_date) === 'undefined') {
      
      this.displayErrorMsg("Please select the required date");
      return false;
    }
    if(this.quantity ==='' || this.quantity === null || typeof (this.quantity) === 'undefined') {
      
      this.displayErrorMsg("Please enter the quantity");
      return false;
    }
    return true;
  }

  /**
   * Validation for Quantity field only enter the numberial value...
   */
  validationQuantity() {   
    if(this.quantity.toString().length < 11) {
      var pattern =/^(?!(0))[0-9]*$/gm;
      var qt =  this.quantity.toString();
      var res = pattern.test(this.quantity.toString())
      if(!res) {
        this.quantity =  qt.toString().replace(/[^0-9]+/, '');
        let alert = this.alertCtrl.create({
          title: 'Error !',
          enableBackdropDismiss :false,
          subTitle: "Please enter the valid number",
          cssClass: 'alert-error',
          buttons: [{
            text: 'Ok',
            role: 'ok',
            cssClass: 'ok-button',
            handler: () => {
            this.quantity =  qt.toString().replace(/[^0-9]+/, '');
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
      var qt =  this.quantity.toString().substring(0,10);
      let alert = this.alertCtrl.create({
        title: 'Error !',
        subTitle: "Please enter the valid number",
        cssClass: 'alert-error',
        enableBackdropDismiss :false,
        buttons: [{
          text: 'Ok',
          role: 'ok',
          cssClass: 'ok-button',
          handler: () => {
            this.quantity=qt;
          }
        }]
      });
      alert.present();
      return false;
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
   * get Values to find obj, key and value...
   * @param obj 
   * @param key 
   * @param val 
   */
  getBooleanObjects(obj, key, val) {
debugger;
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
   * Utils
   * Seperate Device Phase Indicator values from Material Data using "ta0devicephaseind" Functionality...
   */
  stoleValueDevicePhaseData(value) {

    this.devicePhaseIndicators = [];
    var obj = JSON.parse(JSON.stringify(value));
    var array = [];
    for (var i = 0; i < obj.length; i++) {
      array[i] = obj[i]["json"]["ta0devicephaseind"];
    }
    var unique = array.filter(this.onlyUnique).sort();
    this.devicePhaseIndicators = unique;
 ;
  }

  /**
   * Utils
   * Return only Unique values as list form funcitonality...
   * @param value 
   * @param index 
   * @param self 
   */
  onlyUnique(value, index, self) {

    if (value !== undefined && value !== "") {
      return self.indexOf(value) === index;
    }
  }

  /**
   * Common
   * Go Back to WoHome page...
   */
  goBack() {
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("WoHomePage", "");
  }
}
