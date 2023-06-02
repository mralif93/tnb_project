import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { GlobalVars } from './../../../providers/common/global-vars';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { GlobalFunction } from '../../../providers/common/global-function';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Domains } from "../../../pojo/commonEnum/Domains";
import { JsonStoreCrudProvider } from "../../../providers/common/json-store/json-store-crud";

@IonicPage()
@Component({
  selector: 'page-gir-detail',
  templateUrl: 'gir-detail.html',
})
export class GirDetailPage {

  @ViewChild('myselect') selectComponent: SelectSearchableComponent;

  private ta0oldquantity: Number;
  public ta0serialnum: String;
  public accListDevice: boolean = true;
  public showExcessDetails: boolean = true;
  public showDeviceStatus: boolean = false;
  public submitValid: boolean = false;
  public validGoodRecipientId: String = 'default';
  private options: BarcodeScannerOptions;
  public validCount: Number;
  public inValidCount: Number;
  public nonValidatedCount: Number;
  public laborItem: any = [];
  public girVarItem: any = [];
  public girlist: any = [];
  public quantityCall: any = [];
  public resultIIB: any = [];
  public deleteCheck: any = [];
  public containerBoot: boolean = false;
  public scanToggle: boolean = false;
  public valuationType: String = "";
  public valuationTypeList: any;

  constructor(public appCtrl: App,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private dataService: DataServiceProvider,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private gv: GlobalVars,
    public gf: GlobalFunction,
    public navParams: NavParams,
    private jsonStoreCrud: JsonStoreCrudProvider) {
      console.log("Access constructor");
      console.log("Trigger this.getFetchDetails");
    this.getFetchDetails();
    this.girVarItem = this.navParams.get('attr');
    console.log("this.girVarItem : "+JSON.stringify(this.girVarItem));
    console.log("ta0goodsissueitem size : "+this.girVarItem.ta0goodsissueitem);
    if ((typeof (this.girVarItem.ta0goodsissueitem) !== 'undefined') && (this.girVarItem.ta0goodsissueitem !== '') && (this.girVarItem.ta0goodsissueitem !== null)) {
      this.showDeviceStatus = this.girVarItem.ta0goodsissueitem.length > 0 ? true : false;
    }
    else {
      this.girVarItem.ta0goodsissueitem = [];
      this.showDeviceStatus = this.girVarItem.ta0goodsissueitem.length > 0 ? true : false;
    }
    this.deletionDevicesCount();

     /*
      *  CR003 New Valuation Type
      */
    //search valuation type
    var querypart: any = [];
    querypart.push({ "$equal": [{ "domainid": Domains.TA0VALUATIONTYPE }] });
    var sortOrder: any = [{ "value": "asc" }];
    this.jsonStoreCrud.getSearchArraywithSort(Domains.AlnDomain, querypart, sortOrder).then((result) => {
      this.valuationTypeList = result;
      console.log("valuationTypeList : "+JSON.stringify(this.valuationTypeList));
    }).catch((error) => {
      console.log("Get valuation type error", JSON.stringify(error));
    });
  }

  userChanged(event: { component: SelectSearchableComponent, value: any }) {

    console.log('event: ', event);
  }

  /**
   * Scan Toggle Change to empty the values...
   */
  scanToggleChange() {
    this.ta0serialnum = '';
  }

  /**
   * Load Page...
   */
  ionViewDidLoad() {

    this.ta0oldquantity = Number(this.girVarItem.ta0quantity);
  }

  /**
   * Get Goods Recipient Name...
   * @param value 
   */
  laborCodeChange(value) {

    var laborName = this.getObjects(this.laborItem, "laborcode", this.girVarItem.ta0issueto.laborcode);
    if (typeof laborName[0].ta0laborname !== 'undefined')
      this.girVarItem.ta0goodrecipientname = laborName[0].ta0laborname;
    else
      this.girVarItem.ta0goodrecipientname = "";

    if (typeof (this.girVarItem.ta0issueto.laborcode) !== 'undefined' && this.girVarItem.ta0issueto.laborcode !== '' && this.girVarItem.ta0issueto.laborcode !== null) {
      this.validGoodRecipientId = 'default';
    }
    else {
      this.validGoodRecipientId = 'danger';
    }
  }

  /**
   * Navigation to back screen...
   */
  goBack() {

    let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
    newRootNav.push("GirListPage", '');
  }

  /**
   * Accordion for Scanning device displaying...
   */
  accordionListCheck() {

    if (this.accListDevice) {
      this.accListDevice = false;
    }
    else {
      this.accListDevice = true;
    }
  }

  /**
   * Changes for toggle button for submitting button...
   */
  changeshowExcess() {

    if (this.showExcessDetails) {
      this.showExcessDetails = false;
    }
    else {
      this.showExcessDetails = true;
    }
  }

  /**
   * Get Labor Details as List...
   */
  getFetchDetails() {

    this.dataService.fetchLaborDetails().then(results => {

      var respResult: any = results;
      this.laborItem = respResult.respObject;
      for (var i = 0; i < this.laborItem.length; i++)
        this.laborItem[i].compositeName = this.laborItem[i].laborcode + ' ( ' + this.laborItem[i].ta0laborname + ' ) ';
    });
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
          this.ta0serialnum = "";
        }
      }]
    });
    alert.present();
  }

  /**
   * IIB Call for Quantity Changes...
   */
  quantityValidation() {

    var sloc = '';
    if (this.girVarItem.ta0quantity !== '' && this.girVarItem.ta0quantity !== 'undefined' && this.girVarItem.ta0quantity !== null) {

      sloc = this.girVarItem.ta0storeloc.replace(/\D/g, '');
      this.dataService.quantityChangeIIBCall("VAL_R", this.girVarItem.ta0reservationnum, this.girVarItem.ta0itemlinenum, this.girVarItem.siteid, this.girVarItem.ta0quantity, sloc.trim()).then(results => {

        var respResult: any = results;
        this.quantityCall = JSON.parse(respResult.respObject);
        if (this.girVarItem.ta0quantity > this.ta0oldquantity) {

          this.finalValidation();
          if (this.quantityCall.stscode === '01') {
            this.displayErrorAlert(this.quantityCall.status + ". You can increase the quantity.");
          }
          else {
            this.displayErrorAlert(this.quantityCall.status + ". You are not able to increase the quantity.");
            this.girVarItem.ta0quantity = this.ta0oldquantity;
          }
        }
      });
    }
  }

  /**
   * Scanning Device using external Scanner...
   */
  scanningDevices() {

    if (!this.containerBoot) {
      this.containerBoot = true;
      setTimeout(() => {
        this.addDevices();
        this.ta0serialnum = "";
      }, 1000);
    }
  }

  /**
   * Enter the device serial number...
   * @param event 
   */
  addDeviceEnter(event) {

    if (this.ta0serialnum !== null && this.ta0serialnum !== '' && typeof this.ta0serialnum !== 'undefined')
      this.addDevices();
    else
      this.displayErrorAlert("Device Serial Number is empty, Kindly Verify.");
  }

  /**
   * Add Scanned Device...
   */
  addDevices() {

    this.containerBoot = false;
    this.ta0serialnum = this.ta0serialnum.trim();
    this.validationAssetCount();
    if (Number(this.girVarItem.ta0quantity) > Number(Number(this.validCount) + Number(this.nonValidatedCount))) {

      this.girlist = this.getValues(this.girVarItem.ta0goodsissueitem, "ta0serialnum");
      if (this.ta0serialnum !== null && typeof (this.ta0serialnum) !== 'undefined' && this.ta0serialnum !== '') {

        if (!this.girlist.includes(this.ta0serialnum)) {

          this.girVarItem.ta0goodsissueitem.push({ "ta0serialnum": this.ta0serialnum, "ta0validated": false });
          this.showDeviceStatus = this.girVarItem.ta0goodsissueitem.length > 0 ? true : false;
          this.deleteCheck.push(false);
          this.ta0serialnum = "";
        }
        else {

          let alert = this.alertCtrl.create({
            title: 'Duplicate !',
            subTitle: this.ta0serialnum + " --> This device is already available, Kindly confirm to replace with old value",
            buttons: [{
              text: 'Ok',
              handler: () => {
                for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
                  if (this.girVarItem.ta0goodsissueitem[i].ta0serialnum === this.ta0serialnum) {
                    this.deleteCheck[i] = false;
                  }
                }
                this.ta0serialnum = "";
              }
            },
            {
              text: 'Cancel',
              handler: () => {
                this.ta0serialnum = "";
              }
            }]
          });
          alert.present();
        }
      }
    }
    else {
      var message = "You are exceeding the limit. Kindly increase the quantity of device to scan further...";
      this.displayErrorAlert(message);
      this.ta0serialnum = "";
    }

  }

  /**
   * Validating using IIB Call...
   */
  validateDevices() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    var nonValidatedDevice = this.getBooleanObjects(this.girVarItem.ta0goodsissueitem, 'ta0validated', false);
    var resultData = this.getValues(nonValidatedDevice, "ta0serialnum");
    var checkingData = resultData.toString();
    var sloc = '';
    if (resultData.length > 0) {

      sloc = this.girVarItem.ta0storeloc.replace(/\D/g, '');
      this.dataService.scanningGirDevices("SRL_R", this.girVarItem.ta0reservationnum, this.girVarItem.ta0itemlinenum, sloc.trim(), checkingData, this.valuationType).then(results => {

        this.resultIIB = [];
        var respResult: any = results;
        if (respResult !== null && typeof respResult !== 'undefined' && respResult !== '') {

          try {

            this.resultIIB = respResult;
            for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {

              if (!this.girVarItem.ta0goodsissueitem[i].ta0validated) {

                for (var j = 0; j < this.resultIIB.length; j++) {

                  if (this.girVarItem.ta0goodsissueitem[i].ta0serialnum === this.resultIIB[j].ta0serialnum) {

                    this.girVarItem.ta0goodsissueitem[i] = this.resultIIB[j];
                    this.girVarItem.ta0goodsissueitem[i].ta0validasset = this.resultIIB[j].ta0validasset === 'true' ? true : (this.resultIIB[j].ta0validasset === 'false' ? false : this.resultIIB[j].ta0validasset);
                    this.girVarItem.ta0goodsissueitem[i].ta0validated = true;
                  }
                }
              }
            }
            this.validationSave();
          }
          catch (err) {

            var message = "Due to some internal error validation process is not completed.";
            this.displayErrorAlert(message);
            loading.dismiss();
          }
        }
        else {

          var message = "Due to server down or slow network, you are not able to valid device now.";
          this.displayErrorAlert(message);
        }
        loading.dismiss();
        this.validationAssetCount();
      });
    }
    else {

      var message = "There is not having new devices to valid.";
      this.displayErrorAlert(message);
      loading.dismiss();
    }
  }

  /**
   * Deletion Initial Checking Conditions...
   */
  deletionDevicesCount() {

    for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
      this.deleteCheck[i] = false;
    }
    this.validationAssetCount();
  }

  /**
   * Found Asset Count Due to any Changes in any where of this page...
   */
  validationAssetCount() {

    var nonDeleted: any = [];
    for (var i = 0; i < this.deleteCheck.length; i++) {
      if (!this.deleteCheck[i]) {
        nonDeleted.push(this.girVarItem.ta0goodsissueitem[i]);
      }
    }
    if (nonDeleted.length > 0) {
      this.nonValidatedCount = this.getBooleanObjects(nonDeleted, 'ta0validated', false).length;
      var validatedArray = this.getBooleanObjects(nonDeleted, 'ta0validated', true);
      this.validCount = this.getBooleanObjects(validatedArray, 'ta0validasset', true).length;
      this.inValidCount = this.getBooleanObjects(validatedArray, 'ta0validasset', false).length;
    }
    else {
      this.nonValidatedCount = 0;
      this.validCount = 0;
      this.inValidCount = 0;
    }
    this.finalValidation();
  }

  /**
   * Final Validation
   */
  finalValidation() {

    if (Number(this.girVarItem.ta0quantity) === Number(this.validCount)) {
      this.submitValid = true;
      return true;
    }
    else {
      this.submitValid = false;
      return false;
    }
  }

  /**
   * Delete Strike out functionality...
   * @param index 
   */
  deleteDevices(index) {

    this.validationAssetCount();
    if (this.deleteCheck[index] === true) {
      if (this.girVarItem.ta0goodsissueitem[index].ta0validated && !this.girVarItem.ta0goodsissueitem[index].ta0validasset) {
        this.deleteCheck[index] = false;
      }
      else {
        if (Number(this.girVarItem.ta0quantity) < Number(Number(this.validCount) + Number(this.nonValidatedCount) + 1)) {
          var message = "You are exceeding the limit. Kindly increase the quantity of device to scan further...";
          this.displayErrorAlert(message);
        }
        else {
          this.deleteCheck[index] = false;
        }
      }
    }
    else {
      this.deleteCheck[index] = true;
    }
    this.validationAssetCount();
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
   * get object to found from the json results not boolean value to only string...
   * @param obj 
   * @param key 
   * @param val 
   */
  getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
        objects = objects.concat(this.getObjects(obj[i], key, val));
      } else
        if (i == key && obj[i] == val || i == key && val == '') { //
          objects.push(obj);
        }
        else if (obj[i] == val && key == '') {
          if (objects.lastIndexOf(obj) == -1) {
            objects.push(obj);
          }
        }
    }
    return objects;
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
   * Create Valid Json for save and submitting...
   * @param saveType 
   */
  setJson(saveType) {

    this.booleanConversionRecords();
    if (typeof (this.girVarItem.ta0issueto) !== 'undefined' && this.girVarItem.ta0issueto !== '' && this.girVarItem.ta0issueto !== null) {
      var resValue = {
        "status": saveType,
        "ta0issueto": this.girVarItem.ta0issueto.laborcode,
        "ta0laborname": this.girVarItem.ta0laborname,
        "ta0itemtext": this.girVarItem.ta0itemtext,
        "ta0headertext": this.girVarItem.ta0headertext,
        "ta0quantity": Number(this.girVarItem.ta0quantity),
        "ta0unloadingpoint": this.girVarItem.ta0unloadingpoint,
        "ta0goodsissueitem": this.girVarItem.ta0goodsissueitem,
        "ta0valuationtype": this.valuationType
      }
      return resValue;
    }
    else {
      var message = "Please select the goods recipient";
      this.displayListErrorAlert(message, this.girVarItem.ta0issueto);
      this.validGoodRecipientId = 'danger';
    }
  }

  /**
   * booleanConverted all Values...
   */
  booleanConversionRecords() {

    for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {

      this.girVarItem.ta0goodsissueitem[i].ta0validasset = this.girVarItem.ta0goodsissueitem[i].ta0validasset === 'true' ? true : (this.girVarItem.ta0goodsissueitem[i].ta0validasset === 'false' ? false : this.girVarItem.ta0goodsissueitem[i].ta0validasset);
      this.girVarItem.ta0goodsissueitem[i].ta0validated = this.girVarItem.ta0goodsissueitem[i].ta0validated === 'true' ? true : (this.girVarItem.ta0goodsissueitem[i].ta0validated === 'false' ? false : this.girVarItem.ta0goodsissueitem[i].ta0validated);
    }
  }

  /**
   * Display Message Function...
   * @param msgTitle 
   * @param message 
   * @param status 
   */
  displaySuccessMsg(msgTitle, message, status) {

    let alert = this.alertCtrl.create({
      title: msgTitle + " !",
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          if (msgTitle === 'Success' && (status === 'SUBMIT' || status === 'CANCEL')) {
            this.goBack();
          }
        }
      }]
    });
    alert.present();
  }

  /**
   *  Save Call...
   */
  validSave() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    var respResult: any = this.setJson("INPRG");
    var ta0girnum: any = this.girVarItem.ta0girnum;
    this.deleteNonValidationRecordWhileSave();
    this.dataService.fetchtoSaveGIRProcess(respResult, ta0girnum).then(results => {

      var respObject: any = [];
      respObject = results;
      try {

        if (respObject !== '' && respObject !== null && typeof respObject !== 'undefined') {

          if (respObject.processStatus === 'success') {

            this.finalValidation();
            this.deleteNonValidationRecordWhileSaveAfterSave();
            this.displaySuccessMsg("Success", respObject.respObject + ". Please click SUBMIT button to sent the device in ERMS.", respObject.processAction);
          }
          else {

            this.displaySuccessMsg("Failed", respObject.description, respObject.processAction);
          }
        }
        loading.dismiss();
      }
      catch (err) {

        var message = "Due to some internal error save process is not completed.";
        this.displayErrorAlert(message);
        loading.dismiss();
      }
    });

  }

  /**
   *  Save Call...
   */
  validationSave() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    var respResult: any = this.setJson("INPRG");
    var ta0girnum: any = this.girVarItem.ta0girnum;
    this.deleteNonValidationRecordWhileSave();
    this.dataService.fetchtoSaveGIRProcess(respResult, ta0girnum).then(results => {

      var respObject: any = [];
      respObject = results;
      try {

        if (respObject !== '' && respObject !== null && typeof respObject !== 'undefined') {

          if (respObject.processStatus === 'success') {

            this.finalValidation();
            this.deleteNonValidationRecordWhileSaveAfterSave();
          }
        }
        loading.dismiss();
      }
      catch (err) {

        var message = "Due to some internal error save process is not completed.";
        this.displayErrorAlert(message);
        loading.dismiss();
      }
    });

  }

  /**
   * Submit Call...
   */
  submitValidation() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();

    this.deleteNonValidationRecordWhileSubmit();
    if (this.finalValidation()) {

      if (this.listValidation(loading)) {
        var respResult: any = this.setJson("SUBMIT");
        var ta0girnum: any = this.girVarItem.ta0girnum;
        this.dataService.fetchtoSaveGIRProcess(respResult, ta0girnum).then(results => {

          var respObject: any = [];
          respObject = results;
          try {

            if (respObject.processStatus === 'success') {

              this.displaySuccessMsg("Success", respObject.respObject, 'SUBMIT');
            }
            else {

              this.displaySuccessMsg("Failed", respObject.description, 'SUBMIT');
            }
          }
          catch (err) {
            var message = "Due to some internal error submit process is not completed.";
            this.displayErrorAlert(message);
            loading.dismiss();
          }
          loading.dismiss();
        });
      }
    }
  }

  /**
   * Validation for Header data while submitting...
   * @param loading 
   */
  listValidation(loading) {

    var message = '';
    if (typeof (this.girVarItem.ta0issueto !== 'undefined') && this.girVarItem.ta0issueto !== '' && this.girVarItem.ta0issueto !== null) {
      if (typeof (this.girVarItem.ta0issueto.laborcode) === 'undefined' || this.girVarItem.ta0issueto.laborcode === '' || this.girVarItem.ta0issueto.laborcode === null) {
        message = "Please select the goods recipient";
        this.displayListErrorAlert(message, this.girVarItem.ta0issueto.laborcode);
        this.validGoodRecipientId = 'danger';
        loading.dismiss();
        return false;
      }
    }
    else {
      message = "Please select the goods recipient";
      this.displayListErrorAlert(message, this.girVarItem.ta0issueto);
      this.validGoodRecipientId = 'danger';
      loading.dismiss();
      return false;
    }

    if (typeof (this.girVarItem.ta0quantity) === 'undefined' || this.girVarItem.ta0quantity === '' || this.girVarItem.ta0quantity === null) {
      message = "Quantity is invalid";
      this.displayListErrorAlert(message, this.girVarItem.ta0quantity);
      loading.dismiss();
      return false;
    }
    this.validGoodRecipientId = 'default';
    return true;
  }

  /**
   * Display error message Header data while submitting...
   * @param message 
   * @param value 
   */
  displayListErrorAlert(message, value) {

    let alert = this.alertCtrl.create({
      title: 'Alert !',
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: () => {
        }
      }]
    });
    alert.present();
  }

  /**
   * Delete invalid data and not validating asset removal while submitting...
   */
  deleteNonValidationRecordWhileSubmit() {

    var nonValidDat: any = [];
    for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
      if (!this.girVarItem.ta0goodsissueitem[i].ta0validated && !this.girVarItem.ta0goodsissueitem[i].ta0validasset) {
        nonValidDat.push(i);
      }
    }
    for (var i = nonValidDat.length - 1; i >= 0; i--) {
      this.girVarItem.ta0goodsissueitem.splice(nonValidDat[i], 1);
    }
  }

  /**
   * Add the deleted underscore functionality while save the device...
   */
  deleteNonValidationRecordWhileSave() {

    var nonValidDat: any = [];
    for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
      if (this.deleteCheck[i] || !this.girVarItem.ta0goodsissueitem[i].ta0validasset) {
        this.girVarItem.ta0goodsissueitem[i]._action = "Delete";
      }
    }
    this.validationAssetCount();
  }

  /**
   * Add the deleted underscore functionality while save the device... remove the value from the list...
   */
  deleteNonValidationRecordWhileSaveAfterSave() {

    var nonValidDat: any = [];
    for (var i = 0; i < this.girVarItem.ta0goodsissueitem.length; i++) {
      if (this.deleteCheck[i]) {
        //(!this.girVarItem.ta0goodsissueitem[i].ta0validasset && this.girVarItem.ta0goodsissueitem[i].ta0validated)
        nonValidDat.push(i);
      }
    }
    for (var i = nonValidDat.length - 1; i >= 0; i--) {
      this.girVarItem.ta0goodsissueitem.splice(nonValidDat[i], 1);
      this.deleteCheck.splice(nonValidDat[i], 1)
    }
    this.validationAssetCount();
  }

  /**
   * BarCode Tab Scanner...
   */
  barcodeScan() {
    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.ta0serialnum = barcodeData.text.trim();
        this.addDevices();
      });
  }

  /**
   * Cancelling the Gir Process Records...
   */
  cancelGirProcess() {

    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);

    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you agree to cancel the current gir process ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            loading.dismiss();
          }
        },
        {
          text: 'Agree',
          handler: () => {

            var ta0status = { "status": "CANCEL" };
            this.dataService.cancelGirProcess(this.girVarItem.ta0girnum, ta0status).then(results => {

              try {

                var res: any = [];
                res = results;
                if (res.processStatus === 'success') {

                  this.displaySuccessMsg('Success', res.respObject, 'CANCEL');
                  loading.dismiss();
                }
                else {

                  this.displaySuccessMsg("Failed", res.respObject, 'CANCEL');
                  loading.dismiss();
                }
              }
              catch (err) {

                var message = "Due to some internal error cancel process is not completed.";
                this.displayErrorAlert(message);
                loading.dismiss();
              }
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
