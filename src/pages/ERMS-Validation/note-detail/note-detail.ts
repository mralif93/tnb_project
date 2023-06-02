import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { GlobalFunction } from '../../../providers/common/global-function';
import { JsonStoreCrudProvider } from '../../../providers/common/json-store/json-store-crud';

import { DeviceConstants } from '../../../pojo/commonEnum/DeviceConstants'

@IonicPage()
@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.html',
})
export class NoteDetailPage {

  public accListDevice: boolean = true;

  public showDeviceStatus: boolean = false;
  public submitValid: boolean = false;

  private options: BarcodeScannerOptions;
  public inValidCount: Number;
  public nonValidatedCount: Number;
  public countValid: number = 0;
  public deleteCheck: any = [];
  public containerBoot: boolean = false;
  public scanToggle: boolean = false;
  public cnVarItem: any = [];
  public ta0rcncat: String;/////////////////////////////////////if D1 need to calc balance
  public ta0rcntyp: String;
  public ta0rcnnr: String;
  public ta0rsnum: String;
  public ta0rspos: String;
  public maktx: String;
  public selectedItem: any = [];
  public deviceslist: any = [];
  public deviceWithWarrantylist: any = [];
  public deviceWithWarrantylistPaging: any = [];
  public cnCategories: any = [];
  public cnReturnTypes: any = [];
  public storeMaterialList: any = [];
  public cnList: any = [];
  public deviceDetailsList: any = [];
  public accumulateDeviceDetailsList: any = [];
  public chkbox: boolean = false;
  public selectedDeviceDetailsList: any = [];
  public removeDeviceDetailsList: any = [];
  public submitDeviceDetailsList: any = [];
  public submitBtn: boolean = true;
  public toastCtrl: ToastController
  public cnStatus: String;
  public validatebtnDisable: boolean = true;
  public cnDetails: any;
  public checkStringChange: boolean = true;
  public cnLineSaved: boolean = false;
  public siteid: String;
  public savedCnline: any = {};
  public pages: number[];

  public pagectrl: number;
  public currentpage: number;
  public prevbtndisabled: boolean;
  public totalCount: number = 0;
  public isValid: boolean;
  public pageCount: number;
  public nextbtndisabled: boolean;
  public count: number;
  public items: any = {};
  public cnDetailItems: {};
  // array of all items to be paged
  public showPagingList: boolean = false;
  public valuationColumn: boolean = false;

  // Shandeep Kumar
  public serialnum: String;
  public cnlinenum: number;
  public materialListItem: any = [];
  public checkListBlock: boolean = false;
  public verifiedCount: number = 0;
  public checkCount: number = 0;
  public selectedListItem: any = [];
  public selectedlistCheck: any = [];
  public alreadyAdded: any = [];
  public paginationList: any = [];
  public displayPageList: any = [];
  public currentPage: number = 1;
  public pageLimit: number = this.gv.ctrl_creditlimitPage;
  public pagination: boolean = false;
  public prevPage: boolean = false;
  public nextPage: boolean = false;
  public validCount: number = 0;

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

      this.siteid = this.gv.ta0defsiteid;
  
      this.cnVarItem = this.navParams.get('attr');
      if ((typeof (this.cnVarItem )) !== 'undefined' && (this.cnVarItem  !== '') && (this.cnVarItem  !== null)) {
      this.ta0rcncat = this.cnVarItem.category;
      this.ta0rcntyp = this.cnVarItem.returntype;
      this.ta0rsnum = this.cnVarItem.reservenum;
      this.ta0rcnnr = this.cnVarItem.creditnum;
      this.materialListItem = this.cnVarItem.ta0cnline;
      }
      let attrCat = this.navParams.get('attrCat');
      let attrType = this.navParams.get('attrType');
      let attrRsNum = this.navParams.get('attrRsNum');
      let attrRsPos = this.navParams.get('attrRspos');
      let attrCnnumber = this.navParams.get('attrCnnumber');
      console.log('attrCat ', attrCat, 'attrType ', attrType, 'attrRsNum ', attrRsNum);

      if ((typeof (attrCat)) !== 'undefined' && (attrCat !== '') && (attrCat !== null)) {
        this.ta0rcncat = attrCat;
      }
      if ((typeof (attrType)) !== 'undefined' && (attrType !== '') && (attrType !== null)) {
        this.ta0rcntyp = attrType;
      }
      if ((typeof (attrRsNum)) !== 'undefined' && (attrRsNum !== '') && (attrRsNum !== null)) {
        this.ta0rsnum = attrRsNum;
      }
      if ((typeof (attrCnnumber)) !== 'undefined' && (attrCnnumber !== '') && (attrCnnumber !== null)) {
        this.ta0rcnnr = attrCnnumber;
      }

      if(this.materialListItem === null)
        this.materialListItem = [];
      
      if (this.materialListItem.length > 0) {
        for (var i = 0; i < this.materialListItem.length; i++) {

          if(this.materialListItem[i].hasOwnProperty("material") && this.materialListItem[i].material !== 'undefined' && this.materialListItem[i].material !== null) {
            this.materialListItem[i].validCheckERMS = true;
            this.materialListItem[i]._action = "Change";
            this.alreadyAdded.push(this.materialListItem[i].serialnum);
          }
          else {
            this.materialListItem[i].validCheckERMS = false;
            this.materialListItem[i]._action = "Change";
            this.alreadyAdded.push(this.materialListItem[i].serialnum);
          }
        }
      }
      this.setPagination();
      this.activePagination(this.currentPage);
      this.validateCount();
  }

  ionViewDidLoad() {
  
    this.showCheckBlock();
  }

  onChangeCheckBoxes(serialnum) {

    if(this.selectedlistCheck.includes(serialnum)) {
      for(var i = 0; i < this.selectedListItem.length; i++) {
        if(this.selectedListItem[i].serialnum === serialnum) {
          this.selectedListItem.splice(i, 1);
          this.selectedlistCheck.splice(i, 1);
        }
      }
    }
    else {
      for(var i = 0; i < this.materialListItem.length; i++) {
        if(this.materialListItem[i].serialnum === serialnum) {
          this.selectedListItem.push(this.materialListItem[i]);
          this.selectedlistCheck.push(serialnum);
        }
      }
    }

    let loading = this.loader();
    loading.dismiss();
  }

  loader() {
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    return loading;
  }

  convertCategoryTitle(val) {
    var catdesc = '';
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === 'C1') { catdesc = 'Credit'; }
      else if (val === 'R1') { catdesc = 'Removed'; }
      else if (val === 'D1') { catdesc = 'Division'; }
    } return catdesc;
  }

  convertStringReturn(val) {
    var typedesc = '';
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val === '10') { typedesc = 'Excess'; }
      else if (val === '11') { typedesc = 'Faulty Under Warranty'; }
      else if (val === '12') { typedesc = 'Faulty Out of Warranty'; }
      else if (val === '13') { typedesc = 'Faulty Under Warranty / Out of Warranty'; }
      else if (val === '20') { typedesc = 'ReUse'; }
      else if (val === '30') { typedesc = 'Credit'; }
      else if (val === '31') { typedesc = 'Removal Device - Reuse'; }
    } return typedesc;
  }

  /**
   * Navigation to back screen...
   */
  goBack() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("ListCreateNotePage", '');
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

  addDeviceEnter() {

    if(this.matchingMaterialList.length <= 500) {

      if (this.serialnum !== null && this.serialnum !== '' && typeof this.serialnum !== 'undefined') {
      
        this.alreadyAdded = this.getValues(this.materialListItem, "serialnum");
        if (!this.alreadyAdded.includes(this.serialnum)) {
          this.materialListItem.push({ "cnlinenum": (this.materialListItem.length + 1), "serialnum": this.serialnum, "validCheckERMS": false, "_action": "Add" });
          this.serialnum = "";
          this.showCheckBlock();
          this.setPagination();
          this.validateCount();
          this.activePagination(this.currentPage);
        }
        else {
          this.displayErrorAlert("Entered Serial Number is already exist.");
        }
      }
      else {
        this.displayErrorAlert("Device Serial Number is empty, Kindly Verify.");
      }
    }
    else {
      this.displayErrorAlert("You are exceeding the limit.");
    }
  }

  showCheckBlock() {

    if (this.materialListItem.length > 0) {
      this.checkListBlock = true;
    }
    this.validateButtonCheck();
  }

  validateCount() {

    this.validCount = 0;
    for(var i = 0; i < this.materialListItem.length; i++) {

      if(this.ta0rcntyp === "11") {
        if(this.materialListItem[i].status === 'VALID' && this.materialListItem[i].iswarranty) {
          this.validCount++;
        }
      }
      else if(this.ta0rcntyp === "12") {
        if(this.materialListItem[i].status === 'VALID' && !this.materialListItem[i].iswarranty) {
          this.validCount++;
        }
      }
    }
    if(this.materialListItem.length === this.validCount) {
      this.submitBtn = false;
    }
    else {
      this.submitBtn = true;
    }
  }

  validateButtonCheck() {

    if (this.verifiedCountDevices()) {

      if (this.materialListItem.length > 0) {

        if (this.verifiedCount < this.materialListItem.length) {
          this.validatebtnDisable = false;
        }
        else {
          this.validatebtnDisable = true;
        }
      }
    }
    let loading = this.loader();
    loading.dismiss();
  }

  verifiedCountDevices() {

    this.verifiedCount = 0;
    if (this.materialListItem.length > 0) {
      for (var i = 0; i < this.materialListItem.length; i++) {
        if (this.materialListItem[i].validCheckERMS === true)
          this.verifiedCount++;
      }
    }
    return true;
  }

  checkSelectHavingWarranty() {

    for(var i = 0; i < this.selectedListItem.length; i++) {

      if(this.ta0rcntyp === "11") {
        if(this.selectedListItem[i].status === 'VALID' && !this.selectedListItem[i].iswarranty) {
          return false;
        }
      }
      else if(this.ta0rcntyp === "12") {
        if(this.selectedListItem[i].status === 'VALID' && this.selectedListItem[i].iswarranty) {
          return false;
        }
      }
    }
    return true;
  }

  checkCommonHavingWarranty() {

    for(var i = 0; i < this.materialListItem.length; i++) {

      if(this.ta0rcntyp === "11") {
        if(this.materialListItem[i].status === 'VALID' && !this.materialListItem[i].iswarranty) {
          return false;
        }
      }
      else if(this.ta0rcntyp === "12") {
        if(this.materialListItem[i].status === 'VALID' && this.materialListItem[i].iswarranty) {
          return false;
        }
      }
    }
    return true;
  }

  saveToMaximoData(reqInd) {
    
    var ind: String = null;
    var saveCon: String = null
    if(reqInd === 'SAVE') {
      if(this.selectedlistCheck.length > 0) 
        ind = "SEL";
      else
        ind = "COM";
      saveCon = 'DRAFT';
    }
    else {
      ind = "COM";
      saveCon = 'SUBMIT';
    }

    if(ind === "SEL") {
      if(this.checkSelectHavingWarranty()) {
        if(this.selectedListItem.length > 0) {
          this.childSaveToMaximoData(saveCon, ind);
        }
        else {
          this.showCheckBlock();
        }
      }
      else {
        this.displayErrorAlert("You selected wrong return type");
      }
    }
    else {
      if(this.checkCommonHavingWarranty()) {
        if(this.materialListItem.length > 0) {
          this.childSaveToMaximoData(saveCon, ind);
        }
        else {
          this.showCheckBlock();
        }
      }
      else {
        this.displayErrorAlert("You selected wrong return type");
      }
    }
  }

  childSaveToMaximoData(saveCon, ind) {

    this.setJson(saveCon, ind).then(res => {

      this.dataService.fetchtoSaveCn(res, this.ta0rcnnr.trim()).then(results => {

        var respObject: any = [];
        respObject = results;
        if(respObject.processStatus === 'success') {

          for(var i = 0; i < this.materialListItem.length; i++)
            this.materialListItem[i]._action = "Change";
          this.displayErrorAlert("Your data is successfully saved.");
        }
        else {
          this.displayErrorAlert(respObject.respObject);
        }
      });
    });
    let loading = this.loader();
    loading.dismiss();
  }

  ValidatingDevices() {

    var sendItem: any = [];
    var itemVar: any = [];
    if (this.verifiedCountDevices()) {

      if ((this.materialListItem.length > 0) && (this.materialListItem.length > this.verifiedCount)) {

        return new Promise((resolve, reject) => {

          for (var i = 0; i < this.materialListItem.length; i++) {
            if (this.materialListItem[i].validCheckERMS === false) {
              itemVar.push({ "lineNumber": this.materialListItem[i].cnlinenum, "serialNumber": this.materialListItem[i].serialnum });
            }
          }
          sendItem = { "returnCategory":  this.ta0rcncat, "returnType":this.ta0rcntyp  , "creditNumber": this.ta0rcnnr, "resrNumber":  this.ta0rsnum , "resrItemNumber": "1", "ITEM": itemVar };

          this.dataService.ermsValidationCreditNote(sendItem).then(results => {

  
            var respResult: any = results;
            var respObject: any = [];
            if (respResult.processStatus === DeviceConstants.RESP_SUCCESS_MSG) {

              respObject = respResult.respObject;
              if (respObject.length > 0) {

                this.checkCount = 0;
                this.callRequestedFunctionality(respObject).then(result => {
        
                  this.validateButtonCheck();
                  this.validateCount();
                  resolve();
                });
              }
            }
          },
            (error) => {
              // loading.dismiss();
              this.displayErrorAlert("ERMS Error Message --> " + error);
              reject();
            });
        });
      }
      else {
        // loading.dismiss();
        this.displayErrorAlert("No More Device available to Validate.");
      }
      let loading = this.loader();
      loading.dismiss();
    }
  }

  callRequestedFunctionality(respObject) {

    return new Promise((resolve, reject) => {

      var total = respObject.length;
      for (var j = 0; j < respObject.length; j++) {

        this.matchingMaterialList(respObject[j].serialNumber, respObject[j], "ERMS").then(result => {

          var respObject: any = {};
          respObject = result;
          this.bcrmGetDeviceDetails(respObject.serialnum, respObject.status).then(result => {

            this.checkCount++;
            if (total === this.checkCount)
              resolve(true);
          });
        });
      }
    });
  }

  checkStringisNumber(value) {

    var str: String = "";

    var exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
    if(!value.match(exp)) {

      debugger;
      value;
    }
    else {
      debugger;
      value;
    }

    debugger;
    var numText = parseInt(value.trim());
    if(isNaN(numText)){
      str = value.toString();
      return str;
    }
    else {
      str = numText.toString();
      return str;
    }
  }

  materialNumberStringCheck(value) {

    if (value.trim() !== "") {
      var numText = parseInt(value.trim());
      return numText.toString();
    }
    else {
      return "".toString();
    }
  }

  setPagination() {

    var limit;
    if(this.materialListItem.length > 0) {

      limit = Math.ceil(this.materialListItem.length/this.pageLimit);
      this.pagination = (limit > 1) ? true: false;
      for(var i = 1; i <= limit; i++)
        this.paginationList.push(i);
    }
  }

  activePagination(page) {

    this.currentPage = page;
    var start = (page - 1) * this.pageLimit;
    var end = start + this.pageLimit;
    var endValue = 0;
    if(this.materialListItem.length > 0) {
      if(end < this.materialListItem.length) {
        endValue = end;
      }
      else {
        endValue = this.materialListItem.length;
      }
    }
    else {
      endValue = this.materialListItem.length;
    }
    
    this.displayPageList = [];
    for(var i = start; i < endValue; i++) {
      this.displayPageList.push(this.materialListItem[i]);
    }
    this.allowPagination();
  }

  setprevious() {

    this.allowPagination();
    if(!this.prevPage) {
      this.currentPage = (this.currentPage-1);
      this.activePagination(this.currentPage);
    }
  }

  setnext() {

    this.allowPagination();
    if(!this.nextPage) {
      this.currentPage = (this.currentPage+1);
      this.activePagination(this.currentPage);
    }
  }

  allowPagination() {

    // Previous Button
    if((this.currentPage-1) > 0) {
      this.prevPage = false;
    }
    else {
      this.prevPage = true;
    }
    
    // Next Button
    if((this.currentPage+1) <= this.paginationList.length) {
      this.nextPage = false;
    }
    else {
      this.nextPage = true;
    }
  }

  matchingMaterialList(retsernum, retResp, ind) {

    return new Promise((resolve, reject) => {

      for (var i = 0; i < this.materialListItem.length; i++) {

        if (ind === "ERMS") {
          debugger;
          console.log("first --> " + this.materialListItem[i].serialnum.trim());
          console.log("second --> " + this.checkStringisNumber(retsernum.trim()));
          if (this.materialListItem[i].serialnum.trim().toUpperCase() === this.checkStringisNumber(retsernum.trim())) {

            debugger;
            // this.materialListItem[i].cnlinenum = 2;
            this.materialListItem[i].cnlinenum = retResp.lineNumber;
            this.materialListItem[i].material = this.materialNumberStringCheck(retResp.materialNumber);
            this.materialListItem[i].description = retResp.maktx;
            this.materialListItem[i].status = retResp.status;
            this.materialListItem[i].text = retResp.text;
            this.materialListItem[i].validCheckERMS = true;
            this.verifiedCount++;
            resolve({ "serialnum": retsernum, "status": retResp.status });
          }
        }
        else {
          if (this.materialListItem[i].serialnum.trim().toUpperCase() === retsernum.trim().toUpperCase()) {

            // this.materialListItem[i].cnlinenum = retResp.cnlinenum;
            this.materialListItem[i].cnlinenum = 1;
            this.materialListItem[i].manufacturer = retResp.ta0manufacturer;
            // this.materialListItem[i].serialnum = retResp.serialnum;
            this.materialListItem[i].modelid = retResp.modelid;
            this.materialListItem[i].siteid = retResp.siteid;
            this.materialListItem[i].ta0systemstatus = retResp.status;
            this.materialListItem[i].ta0warranty_begin = retResp.ta0warranty_begin;
            this.materialListItem[i].ta0warranty_end = retResp.ta0warranty_end;
            this.materialListItem[i].ta0systemstatus = retResp.ta0systemstatus;
            this.materialListItem[i].status_description = retResp.status_description;

            if ((typeof (retResp.ta0warranty_begin && retResp.ta0warranty_end)) !== 'undefined' &&
              (retResp.ta0warranty_begin && retResp.ta0warranty_end !== '') &&
              (retResp.ta0warranty_begin && retResp.ta0warranty_end !== null)) {

              var begindate = retResp.ta0warranty_begin.substr(0, retResp.ta0warranty_begin.indexOf('T'));
              var enddate = retResp.ta0warranty_end.substr(0, retResp.ta0warranty_end.indexOf('T'));
              this.materialListItem[i].iswarranty = this.getwarrantyRange(Date.parse(begindate), Date.parse(enddate))
            }
            else {
              this.materialListItem[i].iswarranty = '';
            }
          }
          resolve();
        }
      }
    });
  }

  bcrmGetDeviceDetails(assetnum, status) {

    return new Promise((resolve, reject) => {

      if (status === 'VALID') {

        this.dataService.bcrmAssetDetails(assetnum, this.siteid).then(bcrmResult => {

          var respResult: any = bcrmResult;
          this.matchingMaterialList(assetnum, respResult, "BCRM").then(result => {
            resolve();
          });
        },
          error => {
            reject();
          });
      }
      else {
        
        resolve();
        console.log("Current Asset Number : " + assetnum + " is not valid device in erms.");
      }
    });
  }

  deleteDevice(index) {

    let alert = this.alertCtrl.create({
      title: "Confirm Delete",
      subTitle: "Do you want to delete device",
      buttons: [{
        text: 'Yes',
        handler: () => {
          if (this.materialListItem[index].validCheckERMS === false) {
            this.materialListItem.splice(index, 1);
            this.validateCount();
            this.activePagination(this.currentPage);
          }
          else {
            // Maximo Delete and splice
            this.deleteInValidMaximo(index).then(result => {
              this.materialListItem.splice(index, 1);
              this.validateCount();
              this.activePagination(this.currentPage);
            });
          }
          this.showCheckBlock();
        }
      },
      {
        text: 'No',
        handler: () => { }
      }]
    });
    alert.present();
  }

  /**
   * BarCode Tab Scanner...
   */
  barcodeScan() {
    this.options = {
      prompt: "Scan your barcode"
    }
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.serialnum = barcodeData.text.trim();
        this.addDeviceEnter();
      });
  }

  /**
   * Create Valid Json for save and submitting...
   * @param saveType 
   */
  setJson(saveType, ind) {

    var res: any = {};
    return new Promise((resolve) => {

      res = {
        "status": saveType,
        "returnCategory": this.ta0rcncat,
        "returnType": this.ta0rcntyp,
        "resrNumber": typeof (this.ta0rsnum) !== 'undefined' && this.ta0rsnum !== '' && (this.ta0rsnum) !== null ? this.ta0rsnum : '',
        "resrItemNumber": this.ta0rspos,
        "siteid": this.siteid,
        "creditnum": this.ta0rcnnr,
        "ta0cnline": (ind === "SEL") ? this.selectedListItem:this.materialListItem
      }
      resolve(res);
    });
  }

  
  
  deleteInValidMaximo(index) {

    return new Promise((resolve) => {
      this.materialListItem[index]._action = "Delete";
      var res: any = {};
      res = {
        "status": 'DELETE',
        "returnCategory": this.ta0rcncat,
        "returnType": this.ta0rcntyp,
        "resrNumber": typeof (this.ta0rsnum) !== 'undefined' && this.ta0rsnum !== '' && (this.ta0rsnum) !== null ? this.ta0rsnum : '',
        "resrItemNumber": this.ta0rspos,
        "siteid": this.siteid,
        "creditnum": this.ta0rcnnr,
        "ta0cnline": [
          this.materialListItem[index]
        ]
      }
      this.dataService.fetchtoSaveCn(res, this.ta0rcnnr.trim()).then(results => {
        resolve();
      });
      let loading = this.loader();
      loading.dismiss();
    });
    
  }

  /**
   * check for validation for warranty...
   *@param date_start
   *@param date_end
   */
  getwarrantyRange(date_start, date_end) {
    var currentDate = new Date();
    var curDate = Date.parse(currentDate.toISOString());
    if (curDate > date_start && curDate < date_end) {
      return true;
    }
    else {
      return false;
    }
  }

  warrantytext(val) {
    var warDesc = ''
    if (val !== '' && val !== null && typeof val !== 'undefined') {
      if (val) { warDesc = 'Yes'; }
      else if (!val) { warDesc = 'No'; }
      else warDesc = '';
      return warDesc;
    }
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
}