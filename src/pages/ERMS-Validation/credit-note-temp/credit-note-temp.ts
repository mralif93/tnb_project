import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { GlobalFunction } from '../../../providers/common/global-function';
import { JsonStoreCrudProvider } from '../../../providers/common/json-store/json-store-crud';

@IonicPage()
@Component({
  selector: 'credit-note-temp',
  templateUrl: 'credit-note-temp.html',
  
})
export class CreditNoteTemp {

  public getItem: any = [];
  public siteid: String;
  public category: String;
  public disCategory: String;
  public creditnum: String;
  public returntype: String;
  public disReturnType: String;
  public reservenum: String;
  public reservItemnum: String;
  public status: String;
  public listta0cnline: any = [];
  public serialnum: String;
  public options: BarcodeScannerOptions;
  public lowerToggle: boolean = false;
  public scanToggle: boolean = false;
  public loading: any;
  public delloading: any;
  public pagination: boolean = true;
  public pageLimit: number = this.gv.ctrl_creditlimitPage;
  public currentPage: number = 1;
  public prevPage: boolean = false;
  public nextPage: boolean = false;
  public paginationList: any = [];
  public displayPageList: any = [];
  public ta0divlimit: number = 0;
  public disabledOkayButton: boolean = false;

  constructor(public appCtrl: App,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private gv: GlobalVars,
    public gf: GlobalFunction,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public navParams: NavParams) {

    this.initialValueSetter();
    this.loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    this.delloading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
  }

  ionViewDidLoad() {

    this.setPagination();
    this.activePagination(this.currentPage);
  }

  initialValueSetter() {

    this.getItem = this.navParams.get('data');
    this.siteid = this.gv.ta0defsiteid;
    this.category = this.getItem.category;
    this.disCategory = this.getCategory(this.getItem.category);
    this.creditnum = this.getItem.creditnum;
    this.returntype = this.getItem.returntype;
    this.ta0divlimit = (this.getItem.ta0divlimit !== null && typeof this.getItem.ta0divlimit !== 'undefined' && this.getItem.ta0divlimit !== '') ? this.getItem.ta0divlimit : 500;
    this.disReturnType = this.getReturnType(this.getItem.returntype);
    this.reservItemnum = (this.getItem.reservitemnum !== null && typeof this.getItem.reservitemnum !== 'undefined' && this.getItem.reservitemnum !== '') ? this.getItem.reservitemnum : '';
    this.reservenum = (this.getItem.reservenum !== null && typeof this.getItem.reservenum !== 'undefined' && this.getItem.reservenum !== '') ? this.getItem.reservenum : '';
    this.status = this.getItem.status;
    this.listta0cnline = (typeof this.getItem.ta0cnline !== 'undefined' && this.getItem.ta0cnline !== null && this.getItem.ta0cnline !== '') ? this.getItem.ta0cnline : [];

    this.displayPageList = this.listta0cnline;
    this.lowerToggle = (this.listta0cnline.length > 0) ? true : false;

  }

  addDevice() {
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    this. disabledOkayButton =true;
    this.serialnum =  this.serialnum.trim().split('+').join('');
    this.fetchParticularCreditNote().then(result => {

      if (this.serialnum !== null && typeof this.serialnum !== 'undefined' && this.serialnum !== '') {  
            
        if (   this.ta0divlimit > this.listta0cnline.length  ) {
        
          this.findNextLineNumber().then(lineNum => {
            this.jsonCreation(lineNum).then(sendJson => {
              this.dataService.ermsValidationCreditNoteProcess(sendJson, this.siteid).then(result => {
          
                var respObject: any = {};
                respObject = result;
                if (respObject.processStatus === 'success') {
                  this.displayAlert(this.serialnum + " is successfully added.");
                }
                else {
                  this.displayValidateAlert(respObject.respObject, respObject.description);              
                }
                this. disabledOkayButton =false;
                loading.dismiss();
              });
            });
          });
        }
        else {
          this.displayValidateAlert('You\'re have reach '+this.ta0divlimit +" line limit", "Error");
          loading.dismiss();
          this. disabledOkayButton =false;
        }
      }
      else {
        this.displayValidateAlert("Please enter the device serial number", "Error");
        loading.dismiss();
        this. disabledOkayButton =false;
      }
    });
  }

  jsonCreation(lineNum) {

    return new Promise((resolve) => {

      var sendJson: any = {};
      var sendObj: any = [];
      sendObj = {
        "serialNumber": this.serialnum,
        "lineNumber": lineNum
      };
      sendJson = {
        "returnCategory": this.category,
        "returnType": this.returntype,
        "creditNumber": this.creditnum,
        "resrNumber": this.reservenum,
        "resrItemNumber": this.reservItemnum,
        "ITEM": [sendObj]
      }
      resolve(sendJson);
    });
  }

  fetchParticularCreditNote() {

    return new Promise((resolve) => {

      this.dataService.fetchParticularCreditNote(this.creditnum).then(results => {

        var respResult: any = results;
        if (respResult.processStatus === "success") {

          var resConst: any = [];
          resConst = respResult.respObject.ta0cnline;
          this.listta0cnline = resConst;
          this.listta0cnline = (typeof this.listta0cnline !== 'undefined' && this.listta0cnline !== null && this.listta0cnline !== '') ? this.listta0cnline : [];
          this.displayPageList = this.listta0cnline;
          this.lowerToggle = (this.listta0cnline.length > 0) ? true : false;
          this.setPagination();
         
          resolve();
        }
        else {
          this.displayValidateAlert(respResult.description, respResult.processStatus);
          resolve();
        }
      });
    });
  }

  displaySuccessAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Success !',
      cssClass: 'alert-success',
      subTitle: message,
      buttons: [{
        text: 'Ok', cssClass: 'ok-button',
        handler: () => {
          this.goBack();
        }
      },
      // { text: 'pdf',cssClass: 'ok-button',
      //   handler: () => {
      //     const cnnum = message.replace(/\D/g, '');
      //     console.log('cnnum ', cnnum);
      //     let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
      //     newRootNav.push("CreateNotePdfPage", { attrCnnumber: cnnum });
      //   }
      // }
      ]
    });
    alert.present();
  }

  previewPdf(){
    let newRootNav = <NavController>this.appCtrl.getRootNavById("n4");
    newRootNav.push("CreateNotePdfPage", { attrCnnumber:   this.creditnum });
  
  }


  displayAlert(message) {

    let alert = this.alertCtrl.create({
      title: 'Alert !',
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.serialnum = "";
          this.fetchParticularCreditNote();
        }
      }]
    });
    alert.present();
  }

  displayValidateAlert(message, title) {

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      cssClass: 'alert-error',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.fetchParticularCreditNote();
          this.serialnum ='';
          this.loading.dismiss();
        }
      }]
    });
    alert.present();
  }

  deleteDevice(material) {
    let alert = this.alertCtrl.create({
      title: "Confirm Delete",
      subTitle: "Do you want to delete device",
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.deleteInValidMaximo(material).then(result => {
            this.fetchParticularCreditNote();
            this.loading.dismiss();
            this.delloading.dismiss();
          });
        }
      },
      {
        text: 'No',
        handler: () => {
          this.loading.dismiss();
        }
      }]
    });
    alert.present();
  }

  saveToMaximoData() {

    var materialList: any = [];
    materialList = this.listta0cnline;
    for (var i = 0; i < materialList.length; i++)
      materialList[i]._action = "Change";

    return new Promise((resolve) => {
      var res: any = {};
      res = {
        "status": 'SUBMIT',
        "returnCategory": this.category,
        "returnType": this.returntype,
        "resrNumber": this.reservenum,
        "resrItemNumber": this.reservItemnum,
        "siteid": this.siteid,
        "creditnum": this.creditnum,
        "ta0cnline": materialList
      }
      this.dataService.fetchtoSaveCn(res, this.creditnum.trim()).then(results => {
        var respObject: any = {};
        respObject = results;

        if (respObject.processStatus === 'success') {
          this.displaySuccessAlert(respObject.respObject );
        }
        else {
          debugger;
          this.displayValidateAlert("Failed : " + respObject.description, "Error");
        }
        this.loading.dismiss();
       // this.goBack();
        resolve();
      });
    });
  }

  deleteInValidMaximo(material) {

    this.delloading.present();
    var mat: any = {};
    mat = material;
    mat._action = "Delete";
    return new Promise((resolve) => {
      var res: any = {};
      res = {
        "status": 'DELETE',
        "returnCategory": this.category,
        "returnType": this.returntype,
        "resrNumber": this.reservenum,
        "resrItemNumber": this.reservItemnum,
        "siteid": this.siteid,
        "creditnum": this.creditnum,
        "ta0cnline": [material]
      }
      this.dataService.fetchtoSaveCn(res, this.creditnum.trim()).then(results => {
        resolve();
      });
    });
  }

  warrantytext(val) {

    var warDesc = ''
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === "True") { warDesc = 'Yes'; }
      else if (val === "False") { warDesc = 'No'; }
      else warDesc = 'N/A';
      return warDesc;
    }
  }

  barcodeScan() {

    this.options = {
      prompt: "Scan your barcode"
    }
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.serialnum = barcodeData.text.trim();
        this.addDevice();
      });
  }

  findNextLineNumber() {

    var listLineNumber: any = [];
    return new Promise((resolve) => {
      listLineNumber = this.getValues(this.listta0cnline, "cnlinenum");
      resolve(((listLineNumber.length > 0) ? Math.max(...listLineNumber) : 0) + 1);
    });
  }

  getCategory(category) {

    switch (category) {
      case 'C1':
        return 'Credit';
      case 'R1':
        return 'Removal';
      case 'D1':
        return 'Diversion';
      default:
        return '';
    }
  }

  getReturnType(returnType) {

    switch (returnType) {

      case '10':
        return 'Excess';
      case '11':
        return 'Faulty Under Warranty';
      case '12':
        return 'Faulty Out of Warranty';
      case '13':
        return 'Faulty Under Warranty / Out of Warranty';
      case '20':
        return 'ReUse';
      case '30':
        return 'Credit';
      case '31':
        return 'Removal - Reuse';
      default:
        return '';
    }
  }

  getValues(obj, key) {

    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getValues(obj[i], key));
      }
      else if (i == key) {
        objects.push(parseInt(obj[i]));
      }
    }
    return objects;
  }

  goBack() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("ListCreateNotePage", '');
  }

  // Pagination
  setPagination() {

    var limit;
    if (this.listta0cnline.length > 0) {

      limit = Math.ceil(this.listta0cnline.length / this.pageLimit);
      this.pagination = (limit > this.pageLimit) ? true : false;
      for (var i = 1; i <= limit; i++)
        this.paginationList.push(i);
    }
  }

  activePagination(page) {
    this.currentPage = page;
    var start = (page - 1) * this.pageLimit;
    var end = start + this.pageLimit;
    var endValue = 0;
    if (this.listta0cnline.length > 0) {
      if (end < this.listta0cnline.length) {
        endValue = end;
      }
      else {
        endValue = this.listta0cnline.length;
      }
    }
    else {
      endValue = this.listta0cnline.length;
    }
    this.displayPageList = [];
    for (var i = start; i < endValue; i++) {
      this.displayPageList.push(this.listta0cnline[i]);
    }
    this.allowPagination();
  }

  setprevious() {

    this.allowPagination();
    if (!this.prevPage) {
      this.currentPage = (this.currentPage - 1);
      this.activePagination(this.currentPage);
    }
  }
  

  setnext() {

    this.allowPagination();
    if (!this.nextPage) {
      this.currentPage = (this.currentPage + 1);
      this.activePagination(this.currentPage);
    }
  }

  allowPagination() {

    // Previous Button
    if ((this.currentPage - 1) > 0) {
      this.prevPage = false;
    }
    else {
      this.prevPage = true;
    }

    // Next Button
    if ((this.currentPage + 1) <= this.paginationList.length) {
      this.nextPage = false;
    }
    else {
      this.nextPage = true;
    }
  }
}