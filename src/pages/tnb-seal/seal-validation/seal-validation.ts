import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { GlobalFunction } from "./../../../providers/common/global-function";
import { GlobalVars } from './../../../providers/common/global-vars';
import { DataServiceProvider } from './../../../providers/data-service/data-service';
import { isRightSide } from 'ionic-angular/util/util';
import { DataStoreProvider } from '../../../providers/data-store/data-store';



/**
 * Generated class for the SealValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seal-validation',
  templateUrl: 'seal-validation.html',
})
export class SealValidationPage {

  public options: BarcodeScannerOptions;
  public firstSEALCode: string = "";
  public lastSEALCode: string = "";
  public singleSEALCode: string = "";
  public requestIndicator: string = "RNG";
  public singleFlag: boolean = false;
  public showSealStatus: boolean = false;
  private showInvalid: boolean = true;
  private showValid: boolean = true;
  private execute: boolean = false;
  public sealValidItem: any = [];
  public sealInvalidItem: any = [];
  public sealValidItems: any = [];
  public validCount: Number;
  public totalValidCount: Number;
  public invalidCount: Number;
  public refSegment: any = 'scan';
  
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
    private alertCtrl: AlertController,
    public gf: GlobalFunction,
    public loadingCtrl: LoadingController,
    public gv: GlobalVars,
    private dataService: DataServiceProvider,
    private barcodeScanner: BarcodeScanner,
    private ds: DataStoreProvider) {      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SealValidationPage');    
  }

  /**
   * Navigation to WO-Home page... 
   */
    goBack() {

      let newRootNav = <NavController>this.appCtrl.getRootNavById('n4');
      newRootNav.push("WoHomePage", '');
    }

  /**
   * BarCode Tab Scanner for range start serial number
   */
  endNumberBarcodeScan() {

    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        this.lastSEALCode = barcodeData.text.trim();
    });
  }
    
  /**
   * BarCode Tab Scanner for range end serial number
   */
  startNumberBarcodeScan() {

    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        this.firstSEALCode = barcodeData.text.trim();
    });
  }

  /**
   * Checking to user login as Simulator or not...
   * @param event 
   */
  CheckboxClicked(event) {
    if (event.checked) {
      this.requestIndicator = 'SIN';
      this.singleFlag = true;
    } else {
      this.requestIndicator = 'RNG';
      this.singleFlag = false;
    }
  }

  /**
   * BarCode Tab Scanner...
   */
   barcodeScan(index) {

    this.options = {
      prompt: "Scan your barcode "
    }
    if(index===1) {
      this.barcodeScanner.scan(this.options).then(
        (barcodeData) => {
          this.firstSEALCode = barcodeData.text.trim();
        }
      );
    }else if(index===2){
      this.barcodeScanner.scan(this.options).then(
        (barcodeData) => {
          this.lastSEALCode = barcodeData.text.trim();
        }
      );
    }else if(index===3){
      this.barcodeScanner.scan(this.options).then(
        (barcodeData) => {
          this.singleSEALCode = barcodeData.text.trim();
        }
      );
    }
  }

  /*
   * Scan Seal Serial Number and send to BCRM for validation
   * The value must be of a simple type (string, number or boolean).
   */
  validation() {
    console.log("requestIndicator : "+this.requestIndicator);    
    console.log("singleSEALCode : "+this.singleSEALCode);
    console.log("firstSEALCode : "+this.firstSEALCode);
    console.log("lastSEALCode : "+this.lastSEALCode);
    this.sealValidItem = [];
    this.sealInvalidItem = [];
    this.validCount =  0;
    this.invalidCount = 0;


    if(this.singleFlag === true){
      console.log("Inside single serial number checking");
      if(this.singleSEALCode === "") {   
        this.execute = false;     
        const alert = this.alertCtrl.create({  
          title: 'Warning',              
          message: 'Serial Number cannot be empty',  
          buttons: ['OK']  
        });  
        alert.present();
      } else {
        this.execute = true;
      }
    } else {
      console.log("Inside range serial number checking");
      if(this.firstSEALCode === "" || this.lastSEALCode ==="") {
        this.execute = false;        
        const alert = this.alertCtrl.create({  
          title: 'Warning',              
          message: 'Please input range of serial number',  
          buttons: ['OK']  
        });  
        alert.present();
      } else {
        this.execute = true;
      }
    }

    if(this.execute === true) {
      let loading = this.loadingCtrl.create({
        content: this.gv.loadingContent
      });
      loading.present();
      this.gf.loadingTimer(loading);
      
      //this.dataService.sealValidation(this.startSerialNumber, this.endSerialNumber, this.singleSerialNumber, this.singleFlag).then(results => {
      this.dataService.sealValidation(this.firstSEALCode, this.lastSEALCode, this.singleSEALCode, this.requestIndicator).then(results => {        
        var respResult: any = results;
        if (respResult.processStatus === 'success') {         
            loading.dismiss();   
            this.showSealStatus = true;
            this.storeValidSerialNumber(respResult); 
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error !',
            subTitle: respResult.description.toString(),
            buttons: [{
              text: 'Ok',
              handler: () => {
                loading.dismiss();
              }
            }]
          });
          alert.present();
        }
      },
      (error) => {
        console.log("sealValidation error : "+JSON.stringify(error));       
        let alert = this.alertCtrl.create({
          title: 'Error !',
          subTitle: 'Error validation crimpless seal',
          buttons: [{
            text: 'Ok',
            handler: () => {
              loading.dismiss();
            }
          }]
        });
        alert.present();        
      });

      //reset value
      this.firstSEALCode = "";
      this.lastSEALCode = "";
      this.singleSEALCode = "";
    }
  }
   /**
      Insert data into CRIMPLESS table
      1. ID
      2. SEALCODE
      3. SEALCATEGORY
      4. SEALSTATUS
      5. SEALCOLOR
      6. UTILITYMASTERID
      7. RESPONSIBLEPERSONID
      8. CREATEDDATE
    */
  storeValidSerialNumber(respResult) {
    console.log("access storeValidSerialNumber");
    //console.log("Response : "+JSON.stringify(respResult));
    console.log("Total Crimpless Seal : "+respResult.respObject.length);
    var invalidIDX = 0;
    var validIDX = 0;
    for(let object of respResult.respObject){      
      /**
       * Seal Status
       * B = broken
       * S = new and issued
       * P = new and not issued
       * I - installed
       */
      if(object.sealStatus = 'P') {
        this.sealValidItem[validIDX] = object;
        validIDX++;
      } else {
        this.sealInvalidItem[invalidIDX] = object;
        invalidIDX++;
      }
    }    
    this.validCount =  this.sealValidItem.length;
    this.invalidCount = this.sealInvalidItem.length;
    console.log("Valid Crimpless Seal : "+this.sealValidItem.length);
    console.log("Invalid Crimpless Seal : "+this.sealInvalidItem.length);
    

  }

  validSave() {
    console.log("access validSave");
    let loading = this.loadingCtrl.create({
      content: this.gv.loadingContent
    });
    loading.present();
    this.gf.loadingTimer(loading);
    this.ds.insertCrimplesslData(this.sealValidItem).then((result)=>{
      var respResult: any = result;
      console.log("result : "+JSON.stringify(respResult));
      let alert = this.alertCtrl.create({
        //title: 'Status',
        //subTitle: respResult.statusCode,
        title: respResult.statusCode,
        message: respResult.statusText,
        buttons: [{
          text: 'Ok',
          handler: () => {
            loading.dismiss();
          }
        }]
      });
      alert.present();
    },
    (error) => {
      console.log("save crimpless seal error : "+JSON.stringify(error));       
      let alert = this.alertCtrl.create({
        title: 'Error !',
        subTitle: 'Error save crimpless seal',
        buttons: [{
          text: 'Ok',
          handler: () => {
            loading.dismiss();
          }
        }]
      });
      alert.present();        
    });
  }

  /**
   * Hide Show Main Section
   * Created  : Alif
   * Date     : 12-11-2018
   * edited   : Ameer (16/11/2018)
   */
   showValidSection(index) {
    index++;
    if (this.showValid == false) {
      this.showValid = true;
    }
    else if (index === 2) {
      this.showValid = false;
    }
  }

  /**
   * Hide Show Main Section
   * Created  : Alif
   * Date     : 12-11-2018
   * edited   : Ameer (16/11/2018)
   */
   showInvalidSection(index) {
    index++;
    if (this.showInvalid == false) {
      this.showInvalid = true;
    }
    else if (index === 2) {
      this.showInvalid = false;
    }
  }

  /**
   * swicth between scan crimpless seal and list all valid crimpless seal
   * @param ev 
   */
  segmentChanged(event: any) {
    debugger;
    console.log('inside segmentChanged ');    
    console.log('Segment changed 1 : ' + event.value);
    if(event.value === 'list') {
      this.ds.queryAllCrimplessData().then(result => {
        console.log("result : " + JSON.stringify(result));
        var response : any = result;
        if(response.statusCode === 'S') {
          console.log('total size : '+response.data.length);          
          this.sealValidItems = response.data;
          this.totalValidCount = response.data.length;
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error !',
            subTitle: response.statusText,
            buttons: [{
              text: 'Ok',
              handler: () => {}
            }]
          });
          alert.present();
        }
      });

    }
  }
  delete(){
    debugger;
    this.ds.deleteDatabase();
  }
}