import { Component, ViewChild, } from '@angular/core';
import { NavParams, App, AlertController, ViewController, LoadingController } from 'ionic-angular';
import { Domains } from "../../pojo/commonEnum/Domains";
import { DataServiceProvider } from './../../providers/data-service/data-service';
import { JsonStoreCrudProvider } from "../../providers/common/json-store/json-store-crud";
import { GlobalVars } from './../../providers/common/global-vars';
import { GlobalFunction } from './../../providers/common/global-function';


/**
 * Generated class for the ChangeRequestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'change-request',
  templateUrl: 'change-request.html'
})
export class ChangeRequestComponent {

  public item: any = [];
  public itemContainer: any = []
  public zoneItems: any = [];
  public reportingItems: any = [];
  public recipientItem: any = [];
  public errorMsg: String;
  public messageDisplay: boolean = false;
  public createdByDisplayName: String;
  public minDate: String = new Date().toISOString();
  public maxDate: String;
  public bdter: String;

  constructor(
    public params: NavParams, 
    private viewCtrl: ViewController,
    public dataService: DataServiceProvider, 
    private jsonStoreCrud: JsonStoreCrudProvider, 
    public gv: GlobalVars, 
    public gf: GlobalFunction,
    public loadingCtrl: LoadingController,
 
    private alertCtrl: AlertController) {

      this.item = params.get('attr');
      this.bdter = this.item.bdter;
      this.getCurrentDate();
      
      this.getZoneData();
      this.getReportingData();
      this.getLabourDetails();
      this.createdByDisplayName =  " ( " + this.gv.displayname + " )";
      var jsonString = { 'siteid': this.item.gsber };
      this.dataService.fetchZoneBySiteId('TA0ZONELIST', jsonString).then(results => {

        var respResult: any = results;
        this.item.zxone = respResult.zone;
      }); 
  }

  setJson() {
    
    var result = {

      "ind": "RESV_2",
      "rsNum": this.item.rsNum,
      "wempf": this.item.wempf.laborcode,
      "zxone": this.item.zxone,
      "zrpt": this.item.zrpt,
      "ITEM": [
          {
            "rspos": this.item.rspos,
            "bdmng": this.item.bdmng,
            "lgort": this.item.lgort,
            "bdter": this.dateConversion(this.bdter),
            "kzear": this.item.kzear ? 'X':'',
          }
      ]
    };
    return result;
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
    if (dd < 10)
      dd = '0' + dd.toString();
    if (mm < 10)
      mm = '0' + mm;
    var yyyy = today.getFullYear();
    if(this.item.bdter.length > 0) {
      this.minDate = this.item.bdter.charAt(0) + this.item.bdter.charAt(1) + this.item.bdter.charAt(2) + this.item.bdter.charAt(3) + "-" + this.item.bdter.charAt(4) + this.item.bdter.charAt(5) + "-" + this.item.bdter.charAt(6) + this.item.bdter.charAt(7);
      this.bdter = this.minDate;
    }
    else {
      this.minDate = yyyy.toString() + '-' + mm.toString() + "-" + dd.toString();
    }
    this.maxDate = (yyyy + 20).toString();
  }

  /**
   * Validation for Required Quantity...
   */
  validationCheck() {

    if(this.item.bdmng.length < 11) {
      if(this.item.bdmng < this.item.enmng) {
        this.messageDisplay = true;
        this.errorMsg = "Please enter the valid quantity";
      }
      else {
        var pattern =/^(?!(0))[0-9]*$/gm;
        var res = pattern.test(this.item.bdmng.toString())
        if(!res) {
  
          this.item.bdmng = null;
          this.messageDisplay = true;
          this.errorMsg = "Please enter the valid quantity";
          return false;
        }
        else {
          this.messageDisplay = false;
          return true;
        }
      }
    }
    else {
      this.item.bdmng = null;
      this.messageDisplay = true;
      this.errorMsg = "Please enter the valid quantity";
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
   * Change Requsest Submit button...
   */
  changeRequestSubmit() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.loadingTimer(loading);

    if(this.validationCheckEmpty(loading)) {

      this.dataService.ermsChangeResv(this.setJson()).then(results => {
    
        loading.dismiss();

        var respObject: any = [];
        respObject = results;
        var resObject = respObject.respObject;
        if (respObject.processStatus === "success") {
          
          if(resObject[0].respCode === '1') {
            
            let alert = this.alertCtrl.create({
              title: 'Success !',
              subTitle: resObject[0].zlog,
              cssClass: 'alert-success',
              buttons: [{
                text: 'Ok',
                role: 'ok',
                cssClass: 'ok-button',
                handler: () => {
                  this.viewCtrl.dismiss(resObject[0].respCode);
                }
              }]
            });
            alert.present();
          }
          else {
            let alert = this.alertCtrl.create({
              title: 'Error !',
              subTitle: resObject[0].zlog,
              cssClass: 'alert-error',
              buttons: [{
                text: 'Ok',
                role: 'ok',
                cssClass: 'ok-button',
                handler: () => {
                  this.viewCtrl.dismiss(resObject[0].respCode);
                }
              }]
            });
            alert.present();
          }
        }
      });
    } 
  }

  loadingTimer(loading) {

    setTimeout(() => {

        if (!loading._detached) {

            let alert = this.alertCtrl.create({
                title: 'Confirm',
                message: 'Server down ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            loading.dismiss();
                        }
                    },
                    {
                        text: 'Okay',
                        handler: () => {}
                    }
                ]
            });
            alert.present();
        }
    }, 240000);
  }

  validationCheckEmpty(loading) {

    if(typeof this.item.bdmng === 'undefined' || this.item.bdmng === null || this.item.bdmng === '') {
      this.displayErrorMsg("Please enter the required quantity");
      loading.dismiss();
      return false;
    }
    else if(typeof this.item.zxone === 'undefined' || this.item.zxone === null || this.item.zxone === '') {
      this.displayErrorMsg("Please enter the zone");
      loading.dismiss();
      return false;
    }
    else if(typeof this.item.zrpt === 'undefined' || this.item.zrpt === null || this.item.zrpt === '') {
      this.displayErrorMsg("Please enter the reporting to");
      loading.dismiss();
      return false;
    }
    else if(typeof this.item.wempf === 'undefined' || this.item.wempf === null || this.item.wempf === '') {
      this.displayErrorMsg("Please enter the recipient id");
      loading.dismiss();
      return false;
    }
    else if(typeof this.item.bdter === 'undefined' || this.item.bdter === null || this.item.bdter === '') {
      this.displayErrorMsg("Please enter the requested date");
      loading.dismiss();
      return false;
    }
    else {
      return true;
    }
  }

  displayErrorMsg(msg) {

    let alert = this.alertCtrl.create({
      title: 'Error !',
      subTitle: msg,
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

}
