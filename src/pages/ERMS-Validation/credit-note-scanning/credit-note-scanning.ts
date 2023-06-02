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
  selector: 'credit-note-scanning',
  templateUrl: 'credit-note-scanning.html',
})
export class CreditNoteScanning {

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
  public savedCnline: any = {};
  public pages: number[];
  public item: any = [];
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

  // New Variable....
  public getItem: any = [];
  public siteid: String;
  public category: String;
  public creditnum: String;
  public returntype: String;
  public reservenum: String;
  public status: String;
  public listta0cnline: any = [];

  constructor(public appCtrl: App,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    public gv: GlobalVars,
    public gf: GlobalFunction,
    public jsonStoreCurd: JsonStoreCrudProvider,
    public navParams: NavParams) {

      debugger;
      this.siteid = this.gv.ta0defsiteid;
      this.getItem = this.navParams.get('attr');
      this.category = this.getItem.category;
      this.creditnum = this.getItem.creditnum;
      this.returntype = this.getItem.returntype;
      this.reservenum =  this.getItem.reservenum;
      this.status = this.getItem.status;
      this.listta0cnline = this.getItem.ta0cnline;





      this.item.siteid = this.gv.ta0defsiteid;
  
      this.item.cnVarItem = this.navParams.get('attr');
      if ((typeof (this.item.cnVarItem )) !== 'undefined' && (this.item.cnVarItem  !== '') && (this.item.cnVarItem  !== null)) {
      this.item.ta0rcncat = this.item.cnVarItem.category;
      this.item.ta0rcntyp = this.item.cnVarItem.returntype;
      this.item.ta0rsnum = this.item.cnVarItem.reservenum;
      this.item.ta0rcnnr = this.item.cnVarItem.creditnum;
      this.item.materialListItem = this.item.cnVarItem.ta0cnline;
      }
      let attrCat = this.navParams.get('attrCat');
      let attrType = this.navParams.get('attrType');
      let attrRsNum = this.navParams.get('attrRsNum');
      let attrRsPos = this.navParams.get('attrRspos');
      let attrCnnumber = this.navParams.get('attrCnnumber');
      console.log('attrCat ', attrCat, 'attrType ', attrType, 'attrRsNum ', attrRsNum);

      if ((typeof (attrCat)) !== 'undefined' && (attrCat !== '') && (attrCat !== null)) {
        this.item.ta0rcncat = attrCat;
      }
      if ((typeof (attrType)) !== 'undefined' && (attrType !== '') && (attrType !== null)) {
        this.item.ta0rcntyp = attrType;
      }
      if ((typeof (attrRsNum)) !== 'undefined' && (attrRsNum !== '') && (attrRsNum !== null)) {
        this.item.ta0rsnum = attrRsNum;
      }
      if ((typeof (attrCnnumber)) !== 'undefined' && (attrCnnumber !== '') && (attrCnnumber !== null)) {
        this.item.ta0rcnnr = attrCnnumber;
      }

      if(this.item.materialListItem === null)
        this.item.materialListItem = [];
      
      if (this.item.materialListItem.length > 0) {
        for (var i = 0; i < this.item.materialListItem.length; i++) {

          if(this.item.materialListItem[i].hasOwnProperty("material") && this.item.materialListItem[i].material !== 'undefined' && this.item.materialListItem[i].material !== null) {
            this.item.materialListItem[i].validCheckERMS = true;
            this.item.materialListItem[i]._action = "Change";
            this.alreadyAdded.push(this.item.materialListItem[i].serialnum);
          }
          else {
            this.item.materialListItem[i].validCheckERMS = false;
            this.item.materialListItem[i]._action = "Change";
            this.alreadyAdded.push(this.item.materialListItem[i].serialnum);
          }
        }
      }
      this.setPagination();
      this.activePagination(this.currentPage);
      this.validateCount();
  }

  ionViewDidLoad() {
  
    this.showCheckBlock();
    this. getReturnType();
  }


  getReturnType() {

    if (this.item.ta0rcncat === 'C1') {
      this.item.cnReturnTypes = [];
      this.dataService.fetchCnReturnType().then(results => {
        var respResult: any = results;
        this.item.cnReturnTypes = respResult.respObject;
        var creditCats = this.item.cnReturnTypes.filter(function (credityGroup) {
          return credityGroup.value == "10" || credityGroup.value == "11" || credityGroup.value == "12";
        });
        this.item.cnReturnTypes = creditCats.reverse();
      });
    }
    else if (this.item.ta0rcncat === 'R1') {
      this.item.cnReturnTypes = [];
      this.dataService.fetchCnReturnType().then(results => {
        var respResult: any = results;
        this.item.cnReturnTypes = respResult.respObject;
        var removeCats = this.item.cnReturnTypes.filter(function (removeGroup) {
          return removeGroup.value == "20" || removeGroup.value == "11" || removeGroup.value == "12";
        });
        this.item.cnReturnTypes = removeCats.sort();
      });
    }

    else if (this.item.ta0rcncat === 'D1') {//reservation is mandatory d1 , 31
      this.item.cnReturnTypes = [];
      this.dataService.fetchCnReturnType().then(results => {
        var respResult: any = results;
        this.item.cnReturnTypes = respResult.respObject;
        var divisionCats = this.item.cnReturnTypes.filter(function (divisionGroup) {
          return divisionGroup.value == "30" || divisionGroup.value == "31";
        });
        this.item.cnReturnTypes = divisionCats;
      });
    }
  }

  onChangeCheckBoxes(serialnum) {
    if(this.selectedlistCheck.includes(serialnum)) {
      for(var i = 0; i < this.item.selectedListItem.length; i++) {
        if(this.item.selectedListItem[i].serialnum === serialnum) {
          this.item.selectedListItem.splice(i, 1);
          this.selectedlistCheck.splice(i, 1);
        }
      }
    }
    else {
      for(var i = 0; i < this.item.materialListItem.length; i++) {
        if(this.item.materialListItem[i].serialnum === serialnum) {
          this.item.selectedListItem.push(this.item.materialListItem[i]);
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
          this.item.serialnum = "";
        }
      }]
    });
    alert.present();
  }

  addDeviceEnter() {

    if(this.matchingMaterialList.length <= 500) {

      if (this.item.serialnum !== null && this.item.serialnum !== '' && typeof this.item.serialnum !== 'undefined') {
      
        this.alreadyAdded = this.getValues(this.item.materialListItem, "serialnum");
        if (!this.alreadyAdded.includes(this.item.serialnum)) {
          this.item.materialListItem.push({ "cnlinenum": (this.item.materialListItem.length + 1), "serialnum": this.item.serialnum, "validCheckERMS": false, "_action": "Add" });
          this.item.serialnum = "";
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

    if (this.item.materialListItem.length > 0) {
      this.checkListBlock = true;
    }
    this.validateButtonCheck();
  }

  validateCount() {

    this.validCount = 0;
    for(var i = 0; i < this.item.materialListItem.length; i++) {

      if(this.item.ta0rcntyp === "11") {
        if(this.item.materialListItem[i].status === 'VALID' && this.item.materialListItem[i].iswarranty) {
          this.validCount++;
        }
      }
      else if(this.item.ta0rcntyp === "12") {
        if(this.item.materialListItem[i].status === 'VALID' && !this.item.materialListItem[i].iswarranty) {
          this.validCount++;
        }
      }
    }
    if(this.item.materialListItem.length === this.validCount) {
      this.submitBtn = false;
    }
    else {
      this.submitBtn = true;
    }
  }

  validateButtonCheck() {
    if (this.verifiedCountDevices()) {
      if (this.item.materialListItem.length > 0) {
        if (this.verifiedCount < this.item.materialListItem.length) {
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
    if (this.item.materialListItem.length > 0) {
      for (var i = 0; i < this.item.materialListItem.length; i++) {
        if (this.item.materialListItem[i].validCheckERMS === true)
          this.verifiedCount++;
      }
    }
    return true;
  }

  checkSelectHavingWarranty() {

    for(var i = 0; i < this.item.selectedListItem.length; i++) {

      if(this.item.ta0rcntyp === "11") {
        if(this.item.selectedListItem[i].status === 'VALID' && !this.item.selectedListItem[i].iswarranty) {
          return false;
        }
      }
      else if(this.item.ta0rcntyp === "12") {
        if(this.item.selectedListItem[i].status === 'VALID' && this.item.selectedListItem[i].iswarranty) {
          return false;
        }
      }
    }
    return true;
  }

  checkCommonHavingWarranty() {

    for(var i = 0; i < this.item.materialListItem.length; i++) {

      if(this.item.ta0rcntyp === "11") {
        if(this.item.materialListItem[i].status === 'VALID' && !this.item.materialListItem[i].iswarranty) {
          return false;
        }
      }
      else if(this.item.ta0rcntyp === "12") {
        if(this.item.materialListItem[i].status === 'VALID' && this.item.materialListItem[i].iswarranty) {
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
        if(this.item.selectedListItem.length > 0) {
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
        if(this.item.materialListItem.length > 0) {
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

          for(var i = 0; i < this.item.materialListItem.length; i++)
            this.item.materialListItem[i]._action = "Change";
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

      if ((this.item.materialListItem.length > 0) && (this.item.materialListItem.length > this.verifiedCount)) {

        return new Promise((resolve, reject) => {

          for (var i = 0; i < this.item.materialListItem.length; i++) {
            if (this.item.materialListItem[i].validCheckERMS === false) {
              itemVar.push({ "lineNumber": this.item.materialListItem[i].cnlinenum, "serialNumber": this.item.materialListItem[i].serialnum });
            }
          }
          sendItem = { "returnCategory":   this.item.ta0rcncat, "returnType": this.item.ta0rcntyp  , "creditNumber": this.item.ta0rcnnr, "resrNumber":   this.item.ta0rsnum , "resrItemNumber": "1", "ITEM": itemVar };

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
    if(this.item.materialListItem.length > 0) {

      limit = Math.ceil(this.item.materialListItem.length/this.pageLimit);
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
    if(this.item.materialListItem.length > 0) {
      if(end < this.item.materialListItem.length) {
        endValue = end;
      }
      else {
        endValue = this.item.materialListItem.length;
      }
    }
    else {
      endValue = this.item.materialListItem.length;
    }
    
    this.item.displayPageList = [];
    for(var i = start; i < endValue; i++) {
      this.item.displayPageList.push(this.item.materialListItem[i]);
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
 
      for (var i = 0; i < this.item.materialListItem.length; i++) {

        if (ind === "ERMS") {
          debugger;
          console.log("first --> " + this.item.materialListItem[i].serialnum.trim());
          console.log("second --> " + this.checkStringisNumber(retsernum.trim()));
          if (this.item.materialListItem[i].serialnum.trim().toUpperCase() === this.checkStringisNumber(retsernum.trim())) {

            debugger;
            // this.materialListItem[i].cnlinenum = 2;
            this.item.materialListItem[i].cnlinenum = retResp.lineNumber;
            this.item.materialListItem[i].material = this.materialNumberStringCheck(retResp.materialNumber);
            this.item.materialListItem[i].description = retResp.maktx;
            this.item.materialListItem[i].status = retResp.status;
            this.item.materialListItem[i].text = retResp.text;
            this.item.materialListItem[i].validCheckERMS = true;
            this.verifiedCount++;
            resolve({ "serialnum": retsernum, "status": retResp.status });
          }
        }
        else {
          if (this.item.materialListItem[i].serialnum.trim().toUpperCase() === retsernum.trim().toUpperCase()) {

            // this.materialListItem[i].cnlinenum = retResp.cnlinenum;
            this.item.materialListItem[i].cnlinenum = 1;
            this.materialListItem[i].manufacturer = retResp.ta0manufacturer;
            // this.materialListItem[i].serialnum = retResp.serialnum;
            this.item.materialListItem[i].modelid = retResp.modelid;
            this.item.materialListItem[i].siteid = retResp.siteid;
            this.item.materialListItem[i].ta0systemstatus = retResp.status;
            this.item.materialListItem[i].ta0warranty_begin = retResp.ta0warranty_begin;
            this.item.materialListItem[i].ta0warranty_end = retResp.ta0warranty_end;
            this.item.materialListItem[i].ta0systemstatus = retResp.ta0systemstatus;
            this.item.materialListItem[i].status_description = retResp.status_description;

            if ((typeof (retResp.ta0warranty_begin && retResp.ta0warranty_end)) !== 'undefined' &&
              (retResp.ta0warranty_begin && retResp.ta0warranty_end !== '') &&
              (retResp.ta0warranty_begin && retResp.ta0warranty_end !== null)) {

              var begindate = retResp.ta0warranty_begin.substr(0, retResp.ta0warranty_begin.indexOf('T'));
              var enddate = retResp.ta0warranty_end.substr(0, retResp.ta0warranty_end.indexOf('T'));
              this.item.materialListItem[i].iswarranty = this.getwarrantyRange(Date.parse(begindate), Date.parse(enddate))
            }
            else {
              this.item.materialListItem[i].iswarranty = '';
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
          this.item.matchingMaterialList(assetnum, respResult, "BCRM").then(result => {
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
          if (this.item.materialListItem[index].validCheckERMS === false) {
            this.item.materialListItem.splice(index, 1);
            this.validateCount();
            this.activePagination(this.currentPage);
          }
          else {
            // Maximo Delete and splice
            this.deleteInValidMaximo(index).then(result => {
              this.item.aterialListItem.splice(index, 1);
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
        "returnCategory": this.item.ta0rcncat,
        "returnType": this.item.ta0rcntyp,
        "resrNumber": typeof (this.item.ta0rsnum) !== 'undefined' && this.item.ta0rsnum !== '' && (this.item.ta0rsnum) !== null ? this.item.ta0rsnum : '',
        "resrItemNumber": this.item.ta0rspos,
        "siteid": this.item.siteid,
        "creditnum": this.item.ta0rcnnr,
        "ta0cnline": (ind === "SEL") ? this.item.selectedListItem:this.item.materialListItem
      }
      resolve(res);
    });
  }

  deleteInValidMaximo(index) {

    return new Promise((resolve) => {
      this.item.materialListItem[index]._action = "Delete";
      var res: any = {};
      res = {
        "status": 'DELETE',
        "returnCategory":  this.item.ta0rcncat,
        "returnType":  this.item.ta0rcntyp,
        "resrNumber": typeof ( this.item.ta0rsnum) !== 'undefined' && this.item.ta0rsnum !== '' && ( this.item.ta0rsnum) !== null ?  this.item.ta0rsnum : '',
        "resrItemNumber": this.item.ta0rspos,
        "siteid":  this.item.siteid,
        "creditnum":  this.item.ta0rcnnr,
        "ta0cnline": [
          this.item.materialListItem[index]
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